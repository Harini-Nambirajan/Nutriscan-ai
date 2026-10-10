let ALL_PRODUCTS = [];
let FILTERED_PRODUCTS = [];
let activeCategory = "All";
let visibleCount = 24;
const PAGE_SIZE = 24;

function renderCategoryPills(categories) {
  const container = document.getElementById("categoryContainer");
  const cats = ["All", ...categories];
  container.innerHTML = cats.map(cat => `
    <button onclick="setCategory('${cat.replace(/'/g, "\\'")}')" data-cat="${cat}"
      class="cat-pill shrink-0 px-4 py-2 rounded-full border transition ${cat === activeCategory ? "bg-slate-950 dark:bg-emerald-600 text-white border-transparent" : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"}">
      ${cat}
    </button>`).join("");
}

function setCategory(cat) {
  activeCategory = cat;
  visibleCount = PAGE_SIZE;
  document.querySelectorAll(".cat-pill").forEach(p => {
    const isActive = p.dataset.cat === cat;
    p.className = "cat-pill shrink-0 px-4 py-2 rounded-full border transition " + (isActive ? "bg-slate-950 dark:bg-emerald-600 text-white border-transparent" : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800");
  });
  applyFilters();
}

function applyFilters() {
  const query = (document.getElementById("searchInput")?.value || "").trim().toLowerCase();
  const grade = document.getElementById("gradeDropdown")?.value || "All";
  const sugarLevel = document.getElementById("sugarDropdown")?.value || "All";
  const sodiumLevel = document.getElementById("sodiumDropdown")?.value || "All";
  const vegOnly = document.getElementById("vegCheckbox")?.checked;
  const veganOnly = document.getElementById("veganCheckbox")?.checked;
  const sortBy = document.getElementById("sortSelect")?.value || "nutriScore";

  FILTERED_PRODUCTS = ALL_PRODUCTS.filter(p => {
    if (activeCategory !== "All" && p.category !== activeCategory) return false;
    if (grade !== "All" && p.nutriScore !== grade) return false;
    if (vegOnly && !p.isVegetarian) return false;
    if (veganOnly && !p.isVegan) return false;
    if (sugarLevel !== "All" && classifyNutrient("sugar", p.nutrition?.total_sugars_g).level !== sugarLevel) return false;
    if (sodiumLevel !== "All" && classifyNutrient("sodium", p.nutrition?.sodium_mg).level !== sodiumLevel) return false;
    if (query) {
      const haystack = [p.name, p.brand, p.category, ...(p.ingredients||[]), ...(p.additives||[]), ...(p.preservatives||[])].join(" ").toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });

  FILTERED_PRODUCTS.sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "calories") return (a.nutrition?.energy_kcal ?? 9999) - (b.nutrition?.energy_kcal ?? 9999);
    return (a.nutriScore || "Z").localeCompare(b.nutriScore || "Z");
  });

  renderGrid();
}

function renderGrid() {
  const grid = document.getElementById("productGrid");
  const empty = document.getElementById("emptyState");
  const slice = FILTERED_PRODUCTS.slice(0, visibleCount);

  document.getElementById("productCount").textContent = slice.length;
  document.getElementById("productTotal").textContent = FILTERED_PRODUCTS.length;

  if (FILTERED_PRODUCTS.length === 0) {
    grid.innerHTML = "";
    empty.classList.remove("hidden");
  } else {
    empty.classList.add("hidden");
    grid.innerHTML = slice.map(productCardHtml).join("");
  }

  const loadMoreBtn = document.getElementById("loadMoreBtn");
  loadMoreBtn.classList.toggle("hidden", visibleCount >= FILTERED_PRODUCTS.length);
  initPageTransitions();
}

function loadMore() {
  visibleCount += PAGE_SIZE;
  renderGrid();
}

async function initProductsPage() {
  try {
    ALL_PRODUCTS = await loadProducts();
    const categories = [...new Set(ALL_PRODUCTS.map(p => p.category))].sort();
    renderCategoryPills(categories);

    const preselect = qs("category");
    if (preselect && categories.includes(preselect)) activeCategory = preselect;

    document.getElementById("searchInput").addEventListener("input", debounce(() => { visibleCount = PAGE_SIZE; applyFilters(); }, 200));
    applyFilters();
  } catch (e) {
    console.error(e);
    document.getElementById("productGrid").innerHTML = `<p class="text-xs text-rose-500 col-span-full">Could not load products.json.</p>`;
  }
}

document.addEventListener("DOMContentLoaded", initProductsPage);