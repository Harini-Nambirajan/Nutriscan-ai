/**
 * NutriScan AI - Hybrid Chatbot Router
 * Connects local FAQ store with Gemini API fallback.
 */

async function handleUserChatMessage(userQuery) {
    const chatMessagesContainer = document.getElementById("chatMessages");
    if (!chatMessagesContainer) return;

    const cleanQuery = userQuery.toLowerCase().trim();

    // 1. Append User Message to UI
    appendUserMessage(userQuery);
    
    // Clear the input box
    const inputElement = document.getElementById("chatInput");
    if (inputElement) inputElement.value = "";

    // 2. Check Local PDF/FAQ Store using robust token matching
    if (typeof pdfFAQStore !== 'undefined' && Array.isArray(pdfFAQStore)) {
        const matchedFAQ = findRobustFaqMatch(cleanQuery, pdfFAQStore);

        if (matchedFAQ) {
            appendBotMessage(matchedFAQ.answer);
            return;
        }
    }

    // 3. Fallback: Query Gemini API if no local keyword match is found
    const loadingId = showChatLoading(chatMessagesContainer);

    try {
        const currentLang = localStorage.getItem("nutriscan_lang") || "en";
        const GEMINI_API_KEY = ""; 
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are NutriScan AI, an expert food safety and nutritional assistant specializing in FSSAI regulations, WHO thresholds, and toxic additive tracking. Answer the following user query strictly in language code '${currentLang}': "${userQuery}"`
                    }]
                }]
            })
        });

        if (!response.ok) {
            const errorBody = await response.text();
            console.error("Gemini API Error Payload:", errorBody);
            throw new Error(`API Connection Error: HTTP status ${response.status}`);
        }

        const data = await response.json();
        const aiReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Unable to parse response from cloud assistant.";

        removeChatLoading(loadingId);
        appendBotMessage(aiReply);

    } catch (error) {
        console.error("Detailed Chat Exception:", error);
        removeChatLoading(loadingId);
        handleChatConnectionFailure(chatMessagesContainer);
    }
}

/* ---------- Local Token Scoring Matcher Helper ---------- */
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

/* ---------- UI Helper Rendering Functions ---------- */

function appendUserMessage(text) {
    const container = document.getElementById("chatMessages");
    if (!container) return;
    
    container.innerHTML += `
        <div class="flex justify-end my-1">
            <div class="bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 p-3 rounded-2xl max-w-[80%] text-xs shadow-sm">
                ${escapeHtml(text)}
            </div>
        </div>`;
    container.scrollTop = container.scrollHeight;
}

function appendBotMessage(text) {
    const container = document.getElementById("chatMessages");
    if (!container) return;

    container.innerHTML += `
        <div class="flex items-start gap-2.5 my-1">
            <div class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] shrink-0 mt-0.5"><i class="fa-solid fa-robot"></i></div>
            <div class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-3 rounded-2xl max-w-[85%] text-xs shadow-sm whitespace-pre-line">
                ${escapeHtml(text)}
            </div>
        </div>`;
    container.scrollTop = container.scrollHeight;
}

function showChatLoading(container) {
    const id = "loading-" + Date.now();
    container.innerHTML += `
        <div id="${id}" class="flex justify-start my-1">
            <div class="bg-slate-100 dark:bg-slate-800 text-slate-500 p-3 rounded-2xl animate-pulse text-xs">
                Consulting Gemini Cloud AI...
            </div>
        </div>`;
    container.scrollTop = container.scrollHeight;
    return id;
}

function removeChatLoading(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
}

function handleChatConnectionFailure(container) {
    container.innerHTML += `
        <div class="flex items-start gap-2.5 my-1">
            <div class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] shrink-0 mt-0.5"><i class="fa-solid fa-robot"></i></div>
            <div class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-3 rounded-2xl max-w-[85%] text-xs shadow-sm">
                I'm sorry, but I couldn't find a direct match in our database or reach the cloud AI service. Please try asking about product ingredients, E-numbers, or Nutri-Scores!
            </div>
        </div>`;
    container.scrollTop = container.scrollHeight;
}

function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}