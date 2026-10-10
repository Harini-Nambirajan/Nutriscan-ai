/* ==========================================================================
   NutriScan AI — Shared UI behaviour (theme, nav highlight, page transitions,
   mobile menu, floating "Ask NutriScan AI" assistant on every page)
   ========================================================================== */

/* ---------- Theme ---------- */
function applyStoredTheme() {
  const isDark = localStorage.getItem("theme") === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.classList.toggle("light", !isDark);
}
applyStoredTheme();

function setThemeIcon() {
  const isDark = document.documentElement.classList.contains("dark");
  document.querySelectorAll(".theme-icon").forEach(icon => {
    icon.className = "theme-icon " + (isDark ? "fa-solid fa-sun text-amber-400" : "fa-regular fa-moon");
  });
}

function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle("dark");
  document.documentElement.classList.toggle("light", !isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
  setThemeIcon();
}

/* ---------- Nav sliding pillow + active highlight ---------- */
function updatePillowPosition() {
  document.querySelectorAll("nav").forEach(nav => {
    const pillow = nav.querySelector(".nav-pillow");
    const active = nav.querySelector(".nav-item.is-active");
    if (!pillow || !active) return;
    pillow.style.width = active.offsetWidth + "px";
    pillow.style.left = active.offsetLeft + "px";
  });
}

function markActiveNav() {
  const current = location.pathname.split("/").pop() || "home.html";
  document.querySelectorAll(".nav-item").forEach(link => {
    const href = link.getAttribute("href");
    const isActive = href === current;
    link.classList.toggle("is-active", isActive);
    link.classList.toggle("text-slate-900", isActive);
    link.classList.toggle("dark:text-white", isActive);
    link.classList.toggle("font-bold", isActive);
  });
}

function initPageTransitions() {
  document.body.classList.add("page-fade-in");
  document.querySelectorAll("a.nav-item, a.page-transition").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || link.target === "_blank") return;
      e.preventDefault();
      document.body.classList.add("page-fade-out");
      setTimeout(() => { window.location.href = href; }, 180);
    });
  });
}

function toggleMobileMenu() {
  document.getElementById("mobileMenu")?.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  setThemeIcon();
  markActiveNav();
  updatePillowPosition();
  initPageTransitions();
  window.addEventListener("resize", updatePillowPosition);
  injectChatbotWidget();
});

/* ==========================================================================
   Floating "Ask NutriScan AI" assistant — present on every page
   ========================================================================== */
function injectChatbotWidget() {
  if (document.getElementById("chatWidgetRoot")) return;

  const root = document.createElement("div");
  root.id = "chatWidgetRoot";
  root.className = "fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end";
  root.innerHTML = `
    <div id="chatModal" class="hidden w-[90vw] max-w-sm sm:w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden mb-4 flex flex-col h-[70vh] max-h-[520px]">
      <div class="p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
            <i class="fa-solid fa-robot text-sm"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h4 class="text-xs font-bold text-slate-900 dark:text-white translate-me">NutriScan AI Specialist</h4>
            </div>
            <p class="text-[10px] text-slate-500 dark:text-slate-400 translate-me">Packaged Food Health &amp; Safety Expert</p>
          </div>
        </div>
        <div class="flex items-center gap-3 text-slate-400">
          <button onclick="clearChat()" class="hover:text-slate-600 dark:hover:text-slate-200 transition" title="Reset chat"><i class="fa-solid fa-rotate-right text-xs"></i></button>
          <button onclick="toggleChatbot()" class="hover:text-slate-600 dark:hover:text-slate-200 transition" title="Close"><i class="fa-solid fa-xmark text-sm"></i></button>
        </div>
      </div>
      <div id="chatMessages" class="p-4 flex-grow overflow-y-auto space-y-4 text-xs"></div>
      <div class="p-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2 shrink-0">
        <input type="text" id="chatInput" placeholder="Ask about additives, allergens, Nutri-Score..." onkeypress="handleChatKeyPress(event)"
          class="flex-grow pl-3 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-emerald-500">
        <button onclick="sendChatMessage()" class="w-9 h-9 rounded-full bg-slate-950 hover:bg-emerald-500 text-white flex items-center justify-center transition shrink-0">
          <i class="fa-solid fa-paper-plane text-xs"></i>
        </button>
      </div>
    </div>
    <button onclick="toggleChatbot()" class="bg-slate-950 hover:bg-black dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-semibold text-xs px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 transition hover:scale-105">
      <i class="fa-solid fa-wand-magic-sparkles text-emerald-400 dark:text-emerald-100"></i>
      <span class="translate-me">Ask NutriScan AI</span>
    </button>
  `;
  document.body.appendChild(root);
  clearChat();
}

function toggleChatbot() {
  document.getElementById("chatModal")?.classList.toggle("hidden");
}

function clearChat() {
  const container = document.getElementById("chatMessages");
  if (!container) return;
  const activeProduct = getActiveChatProduct();
  const intro = activeProduct
    ? `👋 Hi! I'm looking at <strong>${escapeHtml(activeProduct.name)}</strong> with you. Ask me anything about its ingredients, additives, allergens, or Nutri-Score.`
    : `👋 Hello! I am NutriScan AI Specialist. I can help you analyze packaged foods, additives (E-numbers), preservatives, allergens, Nutri-Score, NOVA classifications, and FSSAI safety guidelines.`;
  container.innerHTML = botBubble(intro);
}

function handleChatKeyPress(e) { if (e.key === "Enter") sendChatMessage(); }

function getActiveChatProduct() {
  try { return JSON.parse(sessionStorage.getItem("nutriscan_active_product") || "null"); }
  catch (e) { return null; }
}

function userBubble(msg) {
  return `<div class="flex justify-end"><div class="bg-emerald-600 text-white p-3 rounded-2xl max-w-[80%] text-xs shadow-sm">${escapeHtml(msg)}</div></div>`;
}

function botBubble(html) {
  return `<div class="flex items-start gap-2.5 my-1">
    <div class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] shrink-0 mt-0.5"><i class="fa-solid fa-robot"></i></div>
    <div class="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 max-w-[85%] text-slate-700 dark:text-slate-200 leading-relaxed">${html}</div>
  </div>`;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

function findRobustFaqMatch(cleanQuery, faqStore) {
  if (!Array.isArray(faqStore)) return null;
  const queryWords = cleanQuery.split(/\s+/).filter(w => w.length > 1);
  
  let bestMatch = null;
  let maxScore = 0;

  for (const item of faqStore) {
    for (const kw of item.keywords) {
      const kwLower = kw.toLowerCase();
      const kwWords = kwLower.split(/\s+/).filter(w => w.length > 1);

      if (cleanQuery.includes(kwLower)) {
        const score = kwWords.length * 3;
        if (score > maxScore) {
          maxScore = score;
          bestMatch = item;
        }
      } else {
        let matchedCount = 0;
        for (const qw of queryWords) {
          if (kwWords.includes(qw)) matchedCount++;
        }
        if (matchedCount >= Math.min(2, kwWords.length)) {
          const score = matchedCount;
          if (score > maxScore) {
            maxScore = score;
            bestMatch = item;
          }
        }
      }
    }
  }
  return bestMatch;
}

async function sendChatMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();
  if (!message) return;

  const container = document.getElementById("chatMessages");
  if (!container) return;

  const cleanQuery = message.toLowerCase().trim();

  // 1. Append User Message
  container.insertAdjacentHTML("beforeend", userBubble(message));
  input.value = "";
  container.scrollTop = container.scrollHeight;

  // 2. Check Local PDF/FAQ Store
  if (typeof pdfFAQStore !== 'undefined' && Array.isArray(pdfFAQStore)) {
    const matchedFAQ = findRobustFaqMatch(cleanQuery, pdfFAQStore);
    if (matchedFAQ) {
      container.insertAdjacentHTML("beforeend", botBubble(escapeHtml(matchedFAQ.answer)));
      container.scrollTop = container.scrollHeight;
      return;
    }
  }

  // 3. Show Loading Indicator
  const loadingId = "loading-" + Date.now();
  container.insertAdjacentHTML("beforeend", `
    <div id="${loadingId}" class="flex items-start gap-2.5 my-1">
      <div class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] shrink-0 mt-0.5"><i class="fa-solid fa-robot"></i></div>
      <div class="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 text-slate-400 animate-pulse text-xs">
        Consulting Gemini Cloud AI...
      </div>
    </div>`);
  container.scrollTop = container.scrollHeight;

  // 4. Fallback to Gemini API
  try {
    const currentLang = localStorage.getItem("nutriscan_lang") || "en";
    const GEMINI_API_KEY = ""; 
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

    const product = getActiveChatProduct();
    const context = product ? `Product Context: ${JSON.stringify(product)}` : "";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are NutriScan AI, an expert food safety and nutritional assistant specializing in FSSAI regulations, WHO thresholds, and toxic additive tracking. ${context} Answer the user query strictly in language code '${currentLang}': "${message}"`
          }]
        }]
      })
    });

    document.getElementById(loadingId)?.remove();

    if (!response.ok) {
      throw new Error(`API HTTP error status ${response.status}`);
    }

    const data = await response.json();
    const aiReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Unable to parse response from cloud assistant.";

    container.insertAdjacentHTML("beforeend", botBubble(escapeHtml(aiReply).replace(/\n/g, "<br>")));
    container.scrollTop = container.scrollHeight;

  } catch (error) {
    console.error("Chat Error:", error);
    document.getElementById(loadingId)?.remove();
    
    const fallbackAnswer = "I'm sorry, but I couldn't find a direct match in our database or reach the cloud AI service. Please try asking about product ingredients, E-numbers, or Nutri-Scores!";
    container.insertAdjacentHTML("beforeend", botBubble(escapeHtml(fallbackAnswer)));
    container.scrollTop = container.scrollHeight;
  }
}

function sendSuggestion(text) {
  document.getElementById("chatInput").value = text;
  sendChatMessage();
}

function qs(name) { return new URLSearchParams(location.search).get(name); }
function debounce(fn, ms = 250) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }