let CURRENT_PRODUCT = null;

function detailsMainHtml(analysis) {
  const p = analysis.product;
  const n = analysis.nutrition || {};
  return `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div class="lg:col-span-5 space-y-6">
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl relative flex flex-col items-center justify-center min-h-[320px]">
          <div class="absolute top-4 left-4 w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-black shadow ${nutriBadgeClass(analysis.nutriScore)}">${analysis.nutriScore}</div>
          <div class="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">NOVA ${analysis.novaScore}</div>
          <img src="${p.image}" alt="${escapeHtml(p.name)}" class="max-h-64 object-contain" onerror="this.src='https://placehold.co/300x300?text=No+Image'">
        </div>
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm space-y-3">
          <div class="flex justify-between text-xs"><span class="text-slate-400 font-semibold translate-me">Barcode</span><span class="font-bold text-slate-800 dark:text-slate-200">${p.barcode || "—"}</span></div>
          <div class="flex justify-between text-xs"><span class="text-slate-400 font-semibold translate-me">Serving Size</span><span class="font-bold text-slate-800 dark:text-slate-200">${p.servingSize || "100g"}</span></div>
          <div class="flex justify-between text-xs"><span class="text-slate-400 font-semibold translate-me">Category</span><span class="font-bold text-slate-800 dark:text-slate-200">${p.category}</span></div>
          <div class="flex justify-between text-xs"><span class="text-slate-400 font-semibold translate-me">Recommended Intake</span><span class="font-bold text-slate-800 dark:text-slate-200 text-right">${p.recommendedIntake || "—"}</span></div>
        </div>
      </div>

      <div class="lg:col-span-7 space-y-6">
        <div>
          <div class="text-xs font-bold text-emerald-500 uppercase tracking-wider">${escapeHtml(p.brand)}</div>
          <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">${escapeHtml(p.name)}</h1>
          <p class="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">${escapeHtml(p.description || "")}</p>
        </div>
        <div id="detailsAnalysisMount"></div>
      </div>
    </div>`;
}

function similarCardHtml(product) {
  return `
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm hover:shadow-xl transition flex items-center justify-between gap-4">
      <div class="space-y-1.5 min-w-0">
        <div class="text-[10px] font-bold text-emerald-600 uppercase truncate">${escapeHtml(product.brand || "")}</div>
        <h4 class="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">${escapeHtml(product.name)}</h4>
        <div class="text-xs text-slate-500">${product.nutrition?.energy_kcal ?? "—"} kcal</div>
        <span class="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full ${nutriBadgeClass(product.nutriScore)}">Grade ${product.nutriScore}</span>
      </div>
      <a href="details.html?id=${product.id}" class="nav-item page-transition w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-emerald-500 hover:text-white transition shrink-0">
        <i class="fa-solid fa-chevron-right text-xs"></i>
      </a>
    </div>`;
}

async function initDetailsPage() {
  const id = qs("id");
  try {
    const products = await loadProducts();
    const product = id ? getProductById(products, id) : products[0];
    if (!product) {
      document.getElementById("detailsContent").innerHTML = `<div class="text-center py-24"><p class="text-slate-500 font-semibold">Product not found.</p><a href="products.html" class="nav-item page-transition text-emerald-500 text-sm font-bold">Back to Products</a></div>`;
      return;
    }
    CURRENT_PRODUCT = product;
    const analysis = buildAnalysisFromProduct(product);

    document.getElementById("detailsContent").innerHTML = detailsMainHtml(analysis);
    renderAnalysisResults(document.getElementById("detailsAnalysisMount"), analysis);
    document.title = `${product.name} — NutriScan AI`;

    const similar = getRandomProducts(products, 3, { excludeId: product.id, category: product.category });
    const filler = similar.length < 3 ? getRandomProducts(products, 3 - similar.length, { excludeId: product.id }) : [];
    const finalSimilar = [...similar, ...filler];
    if (finalSimilar.length) {
      document.getElementById("similarGrid").innerHTML = finalSimilar.map(similarCardHtml).join("");
      document.getElementById("similarSection").classList.remove("hidden");
    }

    initPageTransitions();
  } catch (e) {
    console.error(e);
    document.getElementById("detailsContent").innerHTML = `<p class="text-xs text-rose-500 text-center py-16">Could not load product data. Run this project from a local server (see README) rather than opening the file directly.</p>`;
  }
}

/* ---------- Share sheet ---------- */
function toggleShareSheet() {
  const sheet = document.getElementById("shareSheet");
  if (!CURRENT_PRODUCT || !sheet) return;
  const url = window.location.href;
  const text = `${CURRENT_PRODUCT.name} (${CURRENT_PRODUCT.brand}) — Nutri-Score ${CURRENT_PRODUCT.nutriScore}, NOVA Group ${CURRENT_PRODUCT.novaScore}. Analyzed on NutriScan AI.`;
  document.getElementById("shareWhatsapp").href = `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`;
  document.getElementById("shareGmail").href = `mailto:?subject=${encodeURIComponent(CURRENT_PRODUCT.name + " — NutriScan AI")}&body=${encodeURIComponent(text + "\n\n" + url)}`;
  document.getElementById("shareSms").href = `sms:?body=${encodeURIComponent(text + " " + url)}`;
  sheet.classList.toggle("hidden");
}
document.addEventListener("click", (e) => {
  const sheet = document.getElementById("shareSheet");
  if (sheet && !sheet.classList.contains("hidden") && !e.target.closest("#shareSheet") && !e.target.closest("[onclick='toggleShareSheet()']")) {
    sheet.classList.add("hidden");
  }
});

async function shareViaSystem() {
  if (!CURRENT_PRODUCT) return;
  const shareData = { title: CURRENT_PRODUCT.name, text: `${CURRENT_PRODUCT.name} — analyzed on NutriScan AI`, url: window.location.href };
  if (navigator.share) {
    try { await navigator.share(shareData); } catch (e) { /* user cancelled */ }
  } else {
    copyProductLink();
  }
}

function copyProductLink() {
  navigator.clipboard.writeText(window.location.href).then(() => alert("Product link copied to clipboard!"));
}

function stashProductForAnalyzer() {
  if (!CURRENT_PRODUCT) return;
  sessionStorage.setItem("nutriscan_analyzer_prefill", JSON.stringify({ productId: CURRENT_PRODUCT.id }));
}

document.addEventListener("DOMContentLoaded", initDetailsPage);