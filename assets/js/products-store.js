/* ==========================================================================
   NutriScan AI — Product data store + rule-based classification engine
   ========================================================================== */

let PRODUCTS_CACHE = null;

async function loadProducts() {
  if (PRODUCTS_CACHE) return PRODUCTS_CACHE;
  const res = await fetch(CONFIG.PRODUCTS_PATH, { cache: "force-cache" });
  if (!res.ok) throw new Error("Could not load products.json (" + res.status + ")");
  PRODUCTS_CACHE = await res.json();
  return PRODUCTS_CACHE;
}

function getProductById(products, id) {
  return products.find(p => String(p.id) === String(id)) || null;
}

function getProductByBarcode(products, barcode) {
  const clean = String(barcode).replace(/\D/g, "");
  return products.find(p => String(p.barcode).replace(/\D/g, "") === clean) || null;
}

/* Pick N distinct random products, optionally excluding one id / restricted
   to a category. No caching anywhere in this function on purpose — callers
   that want "different every refresh" should call this on every page load. */
function getRandomProducts(products, count, { excludeId = null, category = null } = {}) {
  let pool = products.filter(p => String(p.id) !== String(excludeId));
  if (category) pool = pool.filter(p => p.category === category);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/* ---------- Nutrient traffic-light classification (per 100g, FSA-style) --------- */
function classifyNutrient(type, value) {
  if (value === undefined || value === null || isNaN(value)) return { level: "unknown", label: "Unknown", color: "slate" };
  const thresholds = {
    sugar:    [5, 22.5],
    sodium:   [120, 600],   // mg
    fat:      [3, 17.5],
    satFat:   [1.5, 5]
  }[type];
  if (!thresholds) return { level: "unknown", label: "Unknown", color: "slate" };
  const [low, high] = thresholds;
  if (value <= low) return { level: "low", label: "Low", color: "emerald" };
  if (value <= high) return { level: "moderate", label: "Moderate", color: "amber" };
  return { level: "high", label: "High", color: "rose" };
}

/* ---------- Additive / dye safety scan ---------- */
function scanAdditives(ingredientsAndAdditives) {
  const text = (ingredientsAndAdditives || []).join(", ").toLowerCase();
  const flags = [];
  for (const key in BANNED_RESTRICTED_ADDITIVES) {
    if (text.includes(key)) flags.push({ term: key, ...BANNED_RESTRICTED_ADDITIVES[key] });
  }
  return flags;
}

/* ---------- Veg / non-veg detection ---------- */
function detectNonVeg(ingredients, isVegetarianField, isVeganField) {
  const text = (ingredients || []).join(", ").toLowerCase();
  const markers = NONVEG_MARKER_INGREDIENTS.filter(m => text.includes(m));
  return {
    isVegetarian: typeof isVegetarianField === "boolean" ? isVegetarianField : markers.length === 0,
    isVegan: typeof isVeganField === "boolean" ? isVeganField : (markers.length === 0 && !text.includes("milk") && !text.includes("honey")),
    markers
  };
}

/* ---------- Allergen detection from raw ingredient text ---------- */
function detectAllergens(ingredients) {
  const text = (ingredients || []).join(", ").toLowerCase();
  const found = [];
  for (const allergen in ALLERGEN_KEYWORDS) {
    if (ALLERGEN_KEYWORDS[allergen].some(kw => text.includes(kw))) found.push(allergen);
  }
  return found;
}

/* ---------- Build a full analysis object from a matched DB product ---------- */
function buildAnalysisFromProduct(product) {
  const n = product.nutrition || {};
  const additiveFlags = scanAdditives([...(product.ingredients || []), ...(product.additives || []), ...(product.preservatives || [])]);
  const dietary = detectNonVeg(product.ingredients, product.isVegetarian, product.isVegan);
  const allergens = detectAllergens(product.ingredients);

  return {
    source: "database",
    matched: true,
    product,
    name: product.name,
    brand: product.brand,
    image: product.image,
    barcode: product.barcode,
    nutriScore: product.nutriScore || "?",
    novaScore: product.novaScore || "?",
    healthStatus: product.healthStatus || "Unknown",
    nutrients: {
      sugar: { value: n.total_sugars_g, ...classifyNutrient("sugar", n.total_sugars_g) },
      sodium: { value: n.sodium_mg, ...classifyNutrient("sodium", n.sodium_mg) },
      fat: { value: n.fat_g, ...classifyNutrient("fat", n.fat_g) },
      // most DB rows don't split saturated fat separately — fall back to total fat as an estimate
      satFat: { value: n.saturated_fat_g ?? null, ...classifyNutrient("satFat", n.saturated_fat_g) }
    },
    nutrition: n,
    ingredients: product.ingredients || [],
    additives: product.additives || [],
    preservatives: product.preservatives || [],
    additiveFlags,
    dietary,
    allergens: allergens.length ? allergens : (product.allergens || []),
    allergensRaw: product.allergens || [],
    healthSummary: product.healthSummary,
    healthRisks: product.healthRisks || [],
    healthBenefits: product.healthBenefits || [],
    recommendedIntake: product.recommendedIntake,
    servingSize: product.servingSize,
    description: product.description
  };
}

/* ---------- Build an analysis object from free-text / OCR text with no DB match ---------- */
function buildAnalysisFromFreeText(rawText) {
  const text = rawText.toLowerCase();

  const grab = (re) => { const m = text.match(re); return m ? parseFloat(m[1]) : null; };
  const energy   = grab(/(\d+(?:\.\d+)?)\s*k?cal/);
  const sugar    = grab(/sugar[s]?[^\d]{0,15}(\d+(?:\.\d+)?)\s*g/);
  const fat      = grab(/(?<!saturated )fat[^\d]{0,15}(\d+(?:\.\d+)?)\s*g/);
  const satFat   = grab(/saturated fat[^\d]{0,15}(\d+(?:\.\d+)?)\s*g/);
  const protein  = grab(/protein[^\d]{0,15}(\d+(?:\.\d+)?)\s*g/);
  const sodium   = grab(/sodium[^\d]{0,15}(\d+(?:\.\d+)?)\s*mg/) ?? (() => {
    const salt = grab(/salt[^\d]{0,15}(\d+(?:\.\d+)?)\s*g/);
    return salt !== null ? Math.round(salt * 400) : null; // salt(g) * 0.4 = sodium(g); *1000 for mg
  })();

  // crude ingredient list extraction: text after "ingredients" up to next section keyword
  let ingredientsBlock = text;
  const idx = text.indexOf("ingredient");
  if (idx !== -1) ingredientsBlock = text.slice(idx, idx + 600);
  const ingredients = ingredientsBlock
    .replace(/ingredients?:?/, "")
    .split(/[,;]/)
    .map(s => s.trim())
    .filter(s => s.length > 1 && s.length < 60)
    .slice(0, 25);

  const additiveFlags = scanAdditives(ingredients.length ? ingredients : [text]);
  const dietary = detectNonVeg(ingredients);
  const allergens = detectAllergens(ingredients.length ? ingredients : [text]);

  // lightweight Nutri-Score / NOVA heuristic — NOT the official FSA algorithm,
  // just enough to give a directional grade for freehand/OCR text with no DB record
  let riskPoints = 0;
  if (sugar !== null) riskPoints += sugar > 22.5 ? 2 : sugar > 5 ? 1 : 0;
  if (satFat !== null) riskPoints += satFat > 5 ? 2 : satFat > 1.5 ? 1 : 0;
  if (sodium !== null) riskPoints += sodium > 600 ? 2 : sodium > 120 ? 1 : 0;
  if (additiveFlags.some(f => f.risk === "high")) riskPoints += 3;
  const grades = ["A", "B", "C", "D", "E"];
  const heuristicGrade = grades[Math.min(4, riskPoints)];
  const heuristicNova = additiveFlags.length >= 2 ? 4 : additiveFlags.length === 1 ? 3 : ingredients.length <= 3 ? 1 : 2;

  return {
    source: "freetext",
    matched: false,
    name: "Custom Entry (unmatched to database)",
    nutriScore: heuristicGrade,
    novaScore: heuristicNova,
    healthStatus: riskPoints >= 3 ? "Unhealthy" : riskPoints >= 1 ? "Moderate" : "Healthy",
    nutrients: {
      sugar: { value: sugar, ...classifyNutrient("sugar", sugar) },
      sodium: { value: sodium, ...classifyNutrient("sodium", sodium) },
      fat: { value: fat, ...classifyNutrient("fat", fat) },
      satFat: { value: satFat, ...classifyNutrient("satFat", satFat) }
    },
    nutrition: { energy_kcal: energy, total_sugars_g: sugar, fat_g: fat, saturated_fat_g: satFat, protein_g: protein, sodium_mg: sodium },
    ingredients,
    additiveFlags,
    dietary,
    allergens,
    healthSummary: "This entry wasn't matched to a product in the NutriScan database, so figures shown are estimated directly from the text/label you provided using rule-based parsing (not the certified FSA Nutri-Score algorithm).",
    healthRisks: [],
    healthBenefits: [],
    rawText
  };
}

/* Try to match free text against the DB first (by barcode digits or strong
   name/brand keyword overlap) before falling back to the heuristic parser. */
function analyzeText(rawText, products) {
  const digits = rawText.match(/\d{8,14}/);
  if (digits) {
    const match = getProductByBarcode(products, digits[0]);
    if (match) return buildAnalysisFromProduct(match);
  }
  const lower = rawText.toLowerCase();
  let best = null, bestScore = 0;
  for (const p of products) {
    let score = 0;
    if (p.name && lower.includes(p.name.toLowerCase())) score += 5;
    if (p.brand && lower.includes(p.brand.toLowerCase())) score += 2;
    if (score > bestScore) { bestScore = score; best = p; }
  }
  if (best && bestScore >= 5) return buildAnalysisFromProduct(best);
  return buildAnalysisFromFreeText(rawText);
}

/* ---------- Small formatting helpers reused in card/detail rendering ---------- */
function nutriBadgeClass(grade) {
  return { A: "nutri-a", B: "nutri-b", C: "nutri-c", D: "nutri-d", E: "nutri-e" }[grade] || "bg-slate-400 text-white";
}
function levelColorClasses(color) {
  return {
    emerald: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    amber: "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    rose: "bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800",
    slate: "bg-slate-50 text-slate-500 dark:bg-slate-800/60 dark:text-slate-400 border-slate-200 dark:border-slate-800"
  }[color] || "";
}
