/* ==========================================================================
   NutriScan AI — Renders a `analysis` object (see products-store.js) into
   the results-dashboard markup shared by the AI Analyzer and Details pages.
   ========================================================================== */

function nutrientRow(label, icon, data, unit) {
  const cls = levelColorClasses(data.color);
  const val = (data.value === null || data.value === undefined) ? "—" : `${data.value}${unit}`;
  return `
    <div class="flex items-center justify-between p-3 rounded-2xl border ${cls}">
      <div class="flex items-center gap-2 text-xs font-semibold">
        <i class="fa-solid ${icon} text-sm"></i> ${label}
      </div>
      <div class="text-right">
        <div class="text-sm font-extrabold">${val}</div>
        <div class="text-[10px] font-bold uppercase tracking-wide">${data.label}</div>
      </div>
    </div>`;
}

function additiveFlagRow(flag) {
  const riskColor = { high: "rose", moderate: "amber", low: "emerald" }[flag.risk] || "slate";
  const cls = levelColorClasses(riskColor);
  return `
    <div class="p-3 rounded-2xl border ${cls} text-xs">
      <div class="font-bold uppercase tracking-wide mb-1 flex items-center gap-1.5">
        <i class="fa-solid ${flag.risk === 'high' ? 'fa-triangle-exclamation' : 'fa-circle-info'}"></i> ${flag.term.toUpperCase()} — ${flag.risk.toUpperCase()} RISK
      </div>
      <p class="leading-relaxed">${flag.note}</p>
    </div>`;
}

function renderAnalysisResults(container, analysis) {
  const nutrients = analysis.nutrients || {};
  const gradeBadge = `<span class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-black ${nutriBadgeClass(analysis.nutriScore)}">${analysis.nutriScore}</span>`;

  const additiveHtml = (analysis.additiveFlags && analysis.additiveFlags.length)
    ? analysis.additiveFlags.map(additiveFlagRow).join("")
    : `<div class="p-3 rounded-2xl border ${levelColorClasses('emerald')} text-xs font-semibold">✓ No banned or restricted additives detected against the FSSAI/WHO/EFSA watch-list.</div>`;

  const allergenHtml = (analysis.allergens && analysis.allergens.length)
    ? analysis.allergens.map(a => `<span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800">⚠ ${String(a).toUpperCase()}</span>`).join(" ")
    : `<span class="text-xs text-slate-500 dark:text-slate-400">No common allergens detected in the parsed ingredient list.</span>`;

  const ingredientsHtml = (analysis.ingredients && analysis.ingredients.length)
    ? analysis.ingredients.map(i => `<span class="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">${escapeHtml(i)}</span>`).join(" ")
    : `<span class="text-xs text-slate-500">No ingredient list parsed.</span>`;

  const dietaryBadges = `
    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${analysis.dietary?.isVegetarian ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' : 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300'}">
      ${analysis.dietary?.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
    </span>
    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${analysis.dietary?.isVegan ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}">
      ${analysis.dietary?.isVegan ? 'Vegan' : 'Not Vegan'}
    </span>`;

  const matchBanner = analysis.matched
    ? `<div class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5"><i class="fa-solid fa-database"></i> Matched to NutriScan database record</div>`
    : `<div class="text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1.5"><i class="fa-solid fa-flask"></i> Not found in database — figures estimated from your text/image (rule-based, not certified)</div>`;

  container.innerHTML = `
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div class="flex items-center gap-4">
          ${gradeBadge}
          <div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white">${escapeHtml(analysis.name || "Analyzed Product")}</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">${escapeHtml(analysis.brand || "")}</p>
            ${matchBanner}
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">NOVA Group ${analysis.novaScore}</span>
          <span class="px-3 py-1.5 rounded-full text-xs font-bold ${analysis.healthStatus === 'Healthy' ? 'bg-emerald-100 text-emerald-700' : analysis.healthStatus === 'Moderate' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'}">${analysis.healthStatus}</span>
        </div>
      </div>

      <div>
        <h4 class="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">Nutrient Levels (per serving/100g)</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          ${nutrientRow("Sugar", "fa-cube", nutrients.sugar, "g")}
          ${nutrientRow("Sodium", "fa-water", nutrients.sodium, "mg")}
          ${nutrientRow("Total Fat", "fa-droplet", nutrients.fat, "g")}
          ${nutrientRow("Saturated Fat", "fa-bacon", nutrients.satFat, "g")}
        </div>
      </div>

      <div>
        <h4 class="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">Regulatory &amp; Toxic Additive Check (FSSAI / WHO / EFSA)</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${additiveHtml}</div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">Dietary Identification</h4>
          <div class="flex flex-wrap gap-2">${dietaryBadges}</div>
        </div>
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">Allergen Flags</h4>
          <div class="flex flex-wrap gap-2">${allergenHtml}</div>
        </div>
      </div>

      <div>
        <h4 class="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">Ingredients Parsed</h4>
        <div class="flex flex-wrap gap-1.5">${ingredientsHtml}</div>
      </div>

      ${analysis.healthSummary ? `
      <div class="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
        <span class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-1"><i class="fa-solid fa-shield-halved text-emerald-500"></i> AI Verdict</span>
        ${escapeHtml(analysis.healthSummary)}
      </div>` : ""}

      ${(analysis.healthRisks && analysis.healthRisks.length) ? `
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wide text-rose-500 mb-2">Health Risks</h4>
        <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-4">${analysis.healthRisks.map(r => `<li>${escapeHtml(r)}</li>`).join("")}</ul>
      </div>` : ""}

      ${(analysis.healthBenefits && analysis.healthBenefits.length) ? `
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wide text-emerald-500 mb-2">Health Benefits</h4>
        <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-4">${analysis.healthBenefits.map(r => `<li>${escapeHtml(r)}</li>`).join("")}</ul>
      </div>` : ""}

      <div class="flex flex-wrap gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
        <button onclick="askAboutThisAnalysis()" class="bg-slate-950 hover:bg-black dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-full text-xs flex items-center gap-2 transition">
          <i class="fa-solid fa-robot"></i> Ask AI Specialist about this
        </button>
        ${analysis.matched ? `<a href="details.html?id=${analysis.product.id}" class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold px-5 py-2.5 rounded-full text-xs flex items-center gap-2 transition hover:bg-slate-50 dark:hover:bg-slate-700"><i class="fa-solid fa-circle-info"></i> View Full Product Page</a>` : ""}
      </div>
    </div>
  `;

  // stash for the chatbot + details page context
  sessionStorage.setItem("nutriscan_active_product", JSON.stringify({
    name: analysis.name, brand: analysis.brand, nutriScore: analysis.nutriScore,
    novaScore: analysis.novaScore, healthStatus: analysis.healthStatus,
    nutrition: analysis.nutrition, ingredients: analysis.ingredients,
    additiveFlags: analysis.additiveFlags, allergens: analysis.allergens
  }));
}

function askAboutThisAnalysis() {
  document.getElementById("chatModal")?.classList.remove("hidden");
  const p = getActiveChatProduct();
  sendSuggestion(p ? `Tell me more about ${p.name} — is it safe?` : "Tell me more about this product — is it safe?");
}