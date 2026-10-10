/* ==========================================================================
   NutriScan AI — Global Configuration
   ========================================================================== */

const CONFIG = {
  GEMINI_API_KEY: "", 
  GEMINI_MODEL: "gemini-2.5-flash",
  GEMINI_ENDPOINT(model, key) {
    return `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
  },
  SITE_NAME: "NutriScan AI",
  PRODUCTS_PATH: 'products.json'
};

const BANNED_RESTRICTED_ADDITIVES = {
  "rhodamine b":       { risk: "high",   note: "Industrial dye illegally used to colour sweets/gobi manchurian. Banned by FSSAI — carcinogenic, not approved for food use anywhere." },
  "metanil yellow":     { risk: "high",   note: "Banned synthetic dye linked to neurotoxicity; still found illegally in besan/sweets in India." },
  "potassium bromate":  { risk: "high",   note: "INS 924 — banned as a flour treatment agent in India (2016) and many countries; possible carcinogen." },
  "ins 924":            { risk: "high",   note: "Potassium Bromate — banned flour improver, possible carcinogen." },
  "brominated vegetable oil": { risk: "high", note: "BVO — banned/restricted in India, EU, Japan; linked to bromine toxicity from long-term use." },
  "ins 211":             { risk: "moderate", note: "Sodium Benzoate — permitted, but can form benzene (a carcinogen) when combined with Vitamin C/ascorbic acid in beverages." },
  "e211":               { risk: "moderate", note: "Sodium Benzoate — permitted, but can form benzene when combined with Vitamin C in beverages." },
  "ins 621":             { risk: "low",     note: "Monosodium Glutamate (MSG) — GRAS/safe for most people; a small subset report headaches/flushing at high acute doses." },
  "msg":                 { risk: "low",     note: "Monosodium Glutamate — generally recognised as safe; some sensitive individuals report mild reactions." },
  "e133":               { risk: "moderate", note: "Brilliant Blue FCF — permitted in India, requires an EU warning label ('may have an adverse effect on activity and attention in children')." },
  "ins 133":             { risk: "moderate", note: "Brilliant Blue FCF — permitted in India, EU requires a child-attention warning label." },
  "e171":               { risk: "moderate", note: "Titanium Dioxide — banned as a food additive in the EU (EFSA, genotoxicity concerns) though still permitted in India." },
  "ins 171":             { risk: "moderate", note: "Titanium Dioxide — banned in the EU (EFSA); still permitted in India." },
  "red 40":             { risk: "moderate", note: "Allura Red — permitted in India, requires an EU child-attention warning label." },
  "yellow 5":            { risk: "moderate", note: "Tartrazine — permitted in India, requires an EU child-attention warning label." },
  "tartrazine":          { risk: "moderate", note: "E102/INS102 — permitted in India, requires an EU child-attention warning label." },
  "e249":                { risk: "moderate", note: "Potassium Nitrite — cured-meat preservative; can form nitrosamines (carcinogenic) when heated." },
  "e250":                { risk: "moderate", note: "Sodium Nitrite — cured-meat preservative; can form nitrosamines (carcinogenic) when heated." },
  "e951":                { risk: "low",     note: "Aspartame — approved by FSSAI/EFSA within ADI limits; unsafe for people with phenylketonuria (PKU)." },
  "aspartame":           { risk: "low",     note: "Approved sweetener within ADI limits; contraindicated for phenylketonuria (PKU)." }
};

const NONVEG_MARKER_INGREDIENTS = [
  "gelatin", "gelatine", "carmine", "e120", "ins120", "cochineal",
  "animal rennet", "rennet (animal)", "lard", "tallow", "fish oil",
  "shellac", "e904", "isinglass", "pepsin", "l-cysteine (animal)"
];

const ALLERGEN_KEYWORDS = {
  "milk": ["milk", "lactose", "whey", "casein", "butter", "ghee", "cream", "skimmed milk"],
  "nuts": ["almond", "cashew", "hazelnut", "walnut", "pistachio", "nuts"],
  "peanut": ["peanut", "groundnut"],
  "soy": ["soy", "soya", "soybean"],
  "gluten": ["wheat", "gluten", "barley", "maida", "rava", "semolina"],
  "egg": ["egg", "albumen"],
  "sesame": ["sesame", "til"]
};

const FAQ_DATABASE = [
  { keywords: ["sodium benzoate", "e211", "211"], a: "Sodium Benzoate (E211) is a widely used chemical preservative. When combined with ascorbic acid (Vitamin C) in beverages, it can form trace amounts of benzene, a known carcinogen. Frequent intake is also linked to increased hyperactivity in sensitive children and mild allergic skin reactions." },
  { keywords: ["aspartame", "e951", "951"], a: "Aspartame is approved as an intense artificial sweetener by FSSAI and EFSA within established Acceptable Daily Intake (ADI) limits. It is, however, strictly contraindicated for individuals with phenylketonuria (PKU), since they cannot metabolise phenylalanine." },
  { keywords: ["msg", "monosodium glutamate", "e621", "621"], a: "MSG (E621) is a flavour enhancer that is Generally Recognised As Safe (GRAS) for the general population. A small subset of people may experience 'Chinese Restaurant Syndrome' symptoms — headaches, flushing, or chest tightness — after acute high-dose consumption." },
  { keywords: ["nutri-score d", "cereal", "whole grain"], a: "Even with whole grains contributing positive fibre points, a product can still receive a Nutri-Score of D if it accumulates high negative points from elevated total sugars (>22g/100g) or high sodium — the negative points can outweigh the fibre bonus." },
  { keywords: ["positive points", "nutri-score matrix", "fsa"], a: "In the Nutri-Score FSA matrix, positive points are awarded based on the concentration (per 100g/100ml) of beneficial components: dietary fibre, protein, and the percentage of fruits, vegetables, legumes, and nuts." },
  { keywords: ["total sugar", "added sugar", "difference"], a: "Total sugars include every mono- and disaccharide present, including naturally occurring lactose in dairy or fructose in whole fruit. Added sugars specifically measure refined sucrose, syrups, and dextrose introduced during industrial processing." },
  { keywords: ["fruit juice", "nova 4", "nova group 4"], a: "Packaged fruit juice is classified under NOVA Group 4 (Ultra-processed) because, even though it's derived from fruit, commercial juice undergoes clarification, deaeration, pasteurisation, and often gets artificial flavour packs or concentrated fructose syrups — stripping out the natural cellular structure and fibre." },
  { keywords: ["nova group 2", "nova group 3", "culinary ingredients"], a: "NOVA Group 2 items are substances extracted from whole foods (butter, oils, sugar, salt) used mainly to cook Group 1 foods. NOVA Group 3 items are made by adding those culinary ingredients directly to unprocessed foods — e.g. canned vegetables in brine or salted nuts." },
  { keywords: ["nova 4 unhealthy", "all ultra-processed"], a: "Not necessarily all, but the vast majority are. NOVA Group 4 indicates an industrial formulation with cosmetic additives. Some packaged whole-wheat breads or fortified plant milks fall into Group 4 purely due to emulsifiers, yet can still have moderate Nutri-Scores depending on their fibre and sugar profile." },
  { keywords: ["vegan", "vegetarian", "chocolate spread"], a: "A product with skimmed milk powder or whey protein is classified as vegetarian but NOT vegan. NutriScan AI checks the ingredient list for dairy, egg, gelatin, carmine (E120) and other animal-derived markers to set isVegetarian / isVegan flags." },
  { keywords: ["tree nuts", "allergen disclosure", "fssai allergen"], a: "Under FSSAI labelling regulations, any product containing tree nuts (almonds, cashews, hazelnuts, etc.) or made in a shared facility processing tree nuts must display an explicit bolded allergen warning, e.g. 'Contains Tree Nuts. May contain traces of soy.'" },
  { keywords: ["cross-contamination", "may contain traces"], a: "NutriScan AI's parsing engine scans label text for advisory phrases like 'processed in a facility that also handles...' and flags them inside the allergen warning box, since these matter a great deal for people with severe anaphylactic allergies." },
  { keywords: ["diabetic", "diabetes", "blood sugar"], a: "For a diabetic-friendly choice, look for a low total-sugar and low-added-sugar value per serving, a Nutri-Score of A-B where possible, and avoid products with rapid-release refined carbohydrates. This is general information, not medical advice — please check with a doctor or dietitian for personal guidance." },
  { keywords: ["e120", "carmine", "non-vegetarian dye"], a: "E120 (Carmine/Cochineal) is a red colourant extracted from crushed cochineal insects, which is why it's classified as non-vegetarian and non-vegan even though it's a 'natural' colour." },
  { keywords: ["healthier alternative", "substitute", "swap"], a: "As a general rule, look for a product in the same category with a better Nutri-Score grade, lower added sugar, and a NOVA group of 1-2 instead of 4. Try the search bar on the Products page and sort by 'Lowest Calories' or Nutri-Score grade to compare alternatives side by side." },
  { keywords: ["banned dye", "rhodamine", "metanil yellow"], a: "Rhodamine B and Metanil Yellow are industrial dyes that are illegal in food anywhere — they show up occasionally in unregulated sweets/snacks. If NutriScan AI flags either of these, treat it as a serious safety warning, not just a nutrition concern." },
  { keywords: ["hello", "hi", "hey"], a: "👋 Hi! I'm the NutriScan AI Specialist. Ask me about additives, E-numbers, Nutri-Score, NOVA groups, allergens, or paste/scan a product and I'll help you understand it." }
];

function findFaqAnswer(query) {
  const q = query.toLowerCase();
  let best = null, bestScore = 0;
  for (const item of FAQ_DATABASE) {
    let score = 0;
    for (const kw of item.keywords) if (q.includes(kw)) score++;
    if (score > bestScore) { bestScore = score; best = item; }
  }
  return best ? best.a : "I couldn't reach the live AI model right now, and I don't have a canned answer for that exact question. Try asking about a specific additive (e.g. 'E211'), Nutri-Score, NOVA groups, or allergens — or open a product page and I'll analyse it directly.";
}