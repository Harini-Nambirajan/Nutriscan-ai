/* ==========================================================================
   NutriScan AI — Home Page Logic (Grade A Filtered Recommendations & Grid)
   ========================================================================== */

function productCardHtml(product) {
  const calories = product.nutrition?.energy_kcal ?? "—";
  const sugar = product.nutrition?.total_sugars_g ?? "—";
  const protein = product.nutrition?.protein_g ?? "—";
  const sodium = product.nutrition?.sodium_mg ?? "—";
  return `
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition group flex flex-col">
      <a href="details.html?id=${product.id}" class="nav-item page-transition block relative h-40 bg-slate-50 dark:bg-slate-800 overflow-hidden">
        <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" onerror="this.src='https://placehold.co/400x300?text=No+Image'">
        <span class="absolute top-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black shadow ${nutriBadgeClass(product.nutriScore)}">${product.nutriScore}</span>
      </a>
      <div class="p-5 flex-grow flex flex-col">
        <div class="text-[11px] font-bold text-emerald-500 uppercase tracking-wider">${escapeHtml(product.brand || "BRAND")}</div>
        <h3 class="text-sm font-bold text-slate-900 dark:text-white mt-0.5 mb-1.5 line-clamp-1">${escapeHtml(product.name)}</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 flex-grow">${escapeHtml(product.description || "")}</p>
        <div class="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 grid grid-cols-4 gap-1 text-center mb-4">
          <div><div class="text-[9px] font-bold text-slate-400 uppercase">CAL</div><div class="text-xs font-extrabold text-slate-800 dark:text-slate-200 mt-0.5">${calories}</div></div>
          <div><div class="text-[9px] font-bold text-slate-400 uppercase">SUGAR</div><div class="text-xs font-extrabold text-slate-800 dark:text-slate-200 mt-0.5">${sugar}${typeof sugar === "number" ? "g" : ""}</div></div>
          <div><div class="text-[9px] font-bold text-slate-400 uppercase">PROTEIN</div><div class="text-xs font-extrabold text-emerald-500 mt-0.5">${protein}${typeof protein === "number" ? "g" : ""}</div></div>
          <div><div class="text-[9px] font-bold text-slate-400 uppercase">SODIUM</div><div class="text-xs font-extrabold text-slate-800 dark:text-slate-200 mt-0.5">${sodium}${typeof sodium === "number" ? "mg" : ""}</div></div>
        </div>
        <div class="bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 rounded-xl px-3 py-2 flex items-center justify-between text-xs mb-4">
          <span class="text-emerald-700 dark:text-emerald-300 font-medium flex items-center gap-1.5"><i class="fa-solid fa-chart-line text-[10px]"></i> ${escapeHtml(product.healthStatus || "")}</span>
          <span class="font-bold text-emerald-600 dark:text-emerald-400">NOVA ${product.novaScore}</span>
        </div>
        <a href="details.html?id=${product.id}" class="nav-item page-transition mt-auto bg-slate-950 hover:bg-black dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition">
          <span class="translate-me">View Details</span> <i class="fa-solid fa-chevron-right text-[10px]"></i>
        </a>
      </div>
    </div>`;
}

function recommendationCardHtml(product) {
  const n = product.nutrition || {};
  return `
    <div class="w-full">
      <div class="flex justify-end mb-4">
        <span class="bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-800 flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span> ${product.healthStatus}
        </span>
      </div>
      <a href="details.html?id=${product.id}" class="nav-item page-transition flex items-center gap-4 mb-6">
        <img src="${product.image}" alt="${escapeHtml(product.name)}" class="w-16 h-16 object-cover rounded-2xl shadow-sm bg-slate-50" onerror="this.src='https://placehold.co/100?text=Img'">
        <div>
          <h3 class="font-bold text-slate-900 dark:text-white text-base line-clamp-1">${escapeHtml(product.name)}</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400">${escapeHtml(product.brand || "")}</p>
          <span class="inline-block mt-2 text-xs font-semibold px-2.5 py-0.5 rounded-full ${nutriBadgeClass(product.nutriScore)}">Grade ${product.nutriScore}</span>
        </div>
      </a>
      <div class="grid grid-cols-2 gap-3 mb-6">
        <div class="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
          <div class="text-[11px] text-slate-400 font-medium mb-1 translate-me">Nutri-Score</div>
          <div class="font-bold text-slate-800 dark:text-slate-200 text-sm flex items-center justify-between"><span>${product.nutriScore}</span><i class="fa-solid fa-chart-line text-emerald-500 text-xs"></i></div>
        </div>
        <div class="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
          <div class="text-[11px] text-slate-400 font-medium mb-1 translate-me">NOVA Group</div>
          <div class="font-bold text-slate-800 dark:text-slate-200 text-sm flex items-center justify-between"><span>Group ${product.novaScore}</span><i class="fa-solid fa-sparkles text-emerald-500 text-xs"></i></div>
        </div>
      </div>
      <div class="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
        <span class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-1"><i class="fa-solid fa-shield-halved text-emerald-500"></i> AI Verdict:</span>
        <span>${escapeHtml(product.healthSummary || product.description || "")}</span>
      </div>
    </div>`;
}

async function initHomePage() {
  try {
    const allProducts = await loadProducts();
    const gradeAProducts = allProducts.filter(p => {
        const score = (p.nutriScore || "").trim().toUpperCase();
        return score === "A";
    });

    if (gradeAProducts.length === 0) {
        document.getElementById("recommendationCard").innerHTML = `<p class="text-xs text-slate-400">No Grade A products available.</p>`;
        return;
    }

    const rec = getRandomProducts(gradeAProducts, 1)[0];
    document.getElementById("recommendationCard").innerHTML = recommendationCardHtml(rec);

    const preview = getRandomProducts(gradeAProducts, 8, { excludeId: rec.id });
    document.getElementById("homeProductGrid").innerHTML = preview.map(productCardHtml).join("");

    if (typeof initPageTransitions === "function") {
      initPageTransitions();
    }
  } catch (e) {
    console.error(e);
    document.getElementById("recommendationCard").innerHTML = `<p class="text-xs text-rose-500">Could not load products.json</p>`;
  }
}

document.addEventListener("DOMContentLoaded", initHomePage);