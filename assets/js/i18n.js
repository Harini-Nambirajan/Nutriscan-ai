/**
 ==========================================================================
   NutriScan AI — Multilingual Localization Engine
   Safely translates UI elements and dynamic product cards.
 ==========================================================================
 */

const LANG_META = {
    en: { code: "GB", label: "English" },
    ta: { code: "IN", label: "தமிழ் (TAMIL)" },
    hi: { code: "IN", label: "हिंदी (HINDI)" },
    te: { code: "IN", label: "తెలుగు (TELUGU)" },
    ml: { code: "IN", label: "മലയാളം (MALAYALAM)" },
    kn: { code: "IN", label: "ಕನ್ನಡ (KANNADA)" }
};

let currentLang = localStorage.getItem("nutriscan_lang") || "en";
const originalTextStore = new Map();
const translationCache = JSON.parse(localStorage.getItem("nutriscan_translation_cache") || "{}");

function saveTranslationCache() {
    try { 
        localStorage.setItem("nutriscan_translation_cache", JSON.stringify(translationCache)); 
    } catch (e) {}
}

async function translateTextAPI(text, targetLang) {
    if (!text || !text.trim() || targetLang === "en") return text;
    const cacheKey = `${targetLang}::${text}`;
    if (translationCache[cacheKey]) return translationCache[cacheKey];
    
    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("translate http " + res.status);
        const data = await res.json();
        const translated = data[0].map(chunk => chunk[0]).join("");
        translationCache[cacheKey] = translated;
        return translated;
    } catch (e) {
        return text;
    }
}

async function translateBatch(texts, targetLang, concurrency = 6) {
    const results = new Array(texts.length);
    let i = 0;
    async function worker() {
        while (i < texts.length) {
            const idx = i++;
            results[idx] = await translateTextAPI(texts[idx], targetLang);
        }
    }
    await Promise.all(Array.from({ length: concurrency }, worker));
    saveTranslationCache();
    return results;
}

function registerTranslatable(el) {
    if (!originalTextStore.has(el)) {
        originalTextStore.set(el, el.textContent.trim());
    }
}

async function translatePage(langCode) {
    document.documentElement.setAttribute("lang", langCode);
    
    const elements = Array.from(document.querySelectorAll(".translate-me, .product-name, .product-category, .translate-dynamic"));
    elements.forEach(registerTranslatable);

    if (langCode === "en") {
        elements.forEach(el => { 
            if (originalTextStore.has(el)) {
                el.textContent = originalTextStore.get(el); 
            }
        });
        document.dispatchEvent(new CustomEvent("nutriscan:language-changed", { detail: { lang: langCode } }));
        return;
    }

    const originals = elements.map(el => originalTextStore.get(el));
    const translated = await translateBatch(originals, langCode);
    elements.forEach((el, idx) => { 
        if (translated[idx]) {
            el.textContent = translated[idx]; 
        }
    });
    
    document.dispatchEvent(new CustomEvent("nutriscan:language-changed", { detail: { lang: langCode } }));
}

async function translateDynamicText(text) {
    if (currentLang === "en") return text;
    return translateTextAPI(text, currentLang);
}

function toggleLangDropdown() {
    document.querySelectorAll(".lang-menu").forEach(m => m.classList.toggle("hidden"));
}

async function changeLanguage(codeOrLangObj, name, langCodeArg) {
    let langCode = langCodeArg || codeOrLangObj;
    let nameVal = name;
    let countryCode = langCodeArg ? codeOrLangObj : 'IN';

    if (langCode === 'en') countryCode = 'GB';

    const meta = LANG_META[langCode] || LANG_META.en;
    const finalLabel = nameVal || meta.label.split(" (")[0];

    document.querySelectorAll(".current-lang-code").forEach(el => el.textContent = countryCode || meta.code);
    document.querySelectorAll(".current-lang-name").forEach(el => el.textContent = finalLabel);
    document.querySelectorAll(".lang-menu").forEach(m => m.classList.add("hidden"));

    currentLang = langCode;
    localStorage.setItem("nutriscan_lang", langCode);

    document.body.classList.add("opacity-90");
    await translatePage(langCode);
    document.body.classList.remove("opacity-90");
}

document.addEventListener("DOMContentLoaded", async () => {
    const validElements = Array.from(document.querySelectorAll(".translate-me, .product-name, .product-category"));
    validElements.forEach(registerTranslatable);

    if (currentLang !== "en") {
        const meta = LANG_META[currentLang] || LANG_META.en;
        document.querySelectorAll(".current-lang-code").forEach(el => el.textContent = meta.code);
        document.querySelectorAll(".current-lang-name").forEach(el => el.textContent = meta.label.split(" (")[0]);
        await translatePage(currentLang);
    }
});

document.addEventListener("click", (e) => {
    document.querySelectorAll(".lang-menu").forEach(menu => {
        const wrapper = menu.closest(".lang-dropdown-wrapper");
        if (wrapper && !wrapper.contains(e.target)) menu.classList.add("hidden");
    });
});

window.translatePage = translatePage;
window.changeLanguage = changeLanguage;
window.toggleLangDropdown = toggleLangDropdown;
window.translateDynamicText = translateDynamicText;tyle