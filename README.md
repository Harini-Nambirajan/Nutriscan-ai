# NutriScan AI

A static, multilingual, AI-assisted packaged-food label analyzer — 355-product database, OCR/barcode label scanning, Nutri-Score/NOVA classification, banned-additive detection, and a Gemini-powered (with offline FAQ fallback) chat assistant.

## Run it locally

Browsers block `fetch()` of local files (`products.json`, the JS modules) when you just double-click an HTML file, so serve the folder instead:

```bash
cd nutriscan-ai
python3 -m http.server 8000
# then open http://localhost:8000/home.html
```

Any static server works (VS Code "Live Server", `npx serve`, etc.) — it just can't be `file://`.

## Deploy to GitHub Pages

1. Push this whole folder to a GitHub repo.
2. Repo Settings → Pages → Deploy from branch → `main` / root.
3. Your site is live at `https://<username>.github.io/<repo>/`.

## ⚠️ Before you add your Gemini API key

This is a **100% static site with no backend**, so anything you put in `assets/js/config.js` is publicly visible to anyone who views source or opens the repo — including your API key.

Do this first:
1. Create/copy your key in [Google AI Studio](https://aistudio.google.com/apikey).
2. Click **Edit API key → Restrict key** → set **Application restriction → Websites** and add your GitHub Pages URL, e.g. `https://yourusername.github.io/nutriscan-ai/*`. This stops other sites from using a copy of your key even if someone extracts it from your source.
3. Set a low daily quota on the key in Google Cloud Console as a backstop.
4. Paste the **restricted** key into `CONFIG.GEMINI_API_KEY` in `assets/js/config.js`.

If you leave `GEMINI_API_KEY` empty, the chat widget automatically answers from the built-in FAQ knowledge base in `config.js` instead — no key, no risk, still fully working for a demo/presentation.

The key you originally pasted in the project brief (`AQ.Ab8RN6...`) is **not** a valid Gemini API key format (real ones look like `AIzaSy...`), and either way it should never be committed — I left the field blank rather than hardcode it.

## What's implemented

- **6 connected pages** (`home`, `products`, `ai-analyzer`, `about`, `developers`, `details`) sharing one header/footer/nav, with a sliding active-tab pill and a fade page-transition on every internal link.
- **Language switcher** — English, Tamil (தமிழ் / TAMIL), Hindi, Telugu, Malayalam, Kannada. Translates all `.translate-me` text client-side via the free Google Translate endpoint, with a `localStorage` cache so repeat visits don't re-fetch. No translated strings are hardcoded in the source.
- **Theme toggle** — moon → dark, sun → light, persisted, icon swaps both ways.
- **Home page** — hero, a "Recommended for you" card that picks a genuinely new random product via `Math.random()` on every refresh (nothing cached), and a live preview grid pulled from `products.json`.
- **Products page** — search (name/brand/category/ingredient/E-number), category pills generated from the real dataset, Nutri-Score/sugar/sodium/veg/vegan filters, sorting, and "Load more" pagination (355 items aren't all rendered at once).
- **AI Analyzer** — paste text, upload up to 10 images, or capture from the device camera. Images are run through **ZXing** for barcode decoding first (exact DB match if found), then **Tesseract.js OCR** if no barcode is found. Extracted/typed text is matched against the 355-product database by barcode or name/brand overlap; unmatched text falls back to a transparent rule-based estimator (clearly labeled as an estimate, not the certified FSA algorithm).
- **Details page** — fully dynamic via `details.html?id=<id>`, full nutrition/ingredient/allergen/additive breakdown (same renderer as the analyzer, so results look identical), a real share sheet (WhatsApp / Gmail / SMS deep links + "More" → native OS share sheet via the Web Share API on supported devices, with copy-link fallback), and "Ask AI Specialist" which hands the product's data to the chat widget.
- **Chat assistant** — floating "Ask NutriScan AI" button on **every** page. Calls Gemini if `GEMINI_API_KEY` is set; otherwise (or if the call fails/rate-limits) answers from the built-in FAQ dataset in `config.js`, so it never goes silent.
- **Banned/restricted additive watch-list** — Rhodamine B, Metanil Yellow, Potassium Bromate (INS 924), Brominated Vegetable Oil, Sodium Benzoate (E211), MSG (E621), E133, Titanium Dioxide (E171), Red 40/Yellow 5, nitrites, aspartame — see `BANNED_RESTRICTED_ADDITIVES` in `config.js`.
- **About page** — project abstract, tech stack, methodology, and the regulatory-framework reference table (FSSAI, WHO/Codex, Legal Metrology, BIS/ISI, AGMARK, AYUSH, EFSA/FDA).
- **Developers page** — team profiles, mentor, course code.
- Fully responsive (phone/tablet/laptop) with a mobile hamburger menu.

## Known simplifications (be upfront about these in your report/demo)

- **Nutri-Score for unmatched text** is a lightweight rule-based heuristic (sugar/sat-fat/sodium/additive risk points → grade), not the certified French FSA algorithm — the report/about page says this explicitly. Implementing the full certified algorithm (fibre points, protein points, fruit/veg %, beverage-specific tables) is a good "future work" item.
- **Developer photos**: only `Gokulnath_S.jpeg` was supplied, so Dorathy's and Harini's cards use initials placeholders — drop real photos into `assets/img/` and update the two `<img>` tags in `developers.html` (currently divs) whenever you have them.
- **Translation** uses the free unofficial `translate.googleapis.com` endpoint (no key needed) — reliable for demos, but Google can rate-limit heavy bursts. For a production deployment, swap `translateTextAPI()` in `assets/js/i18n.js` for the official Cloud Translation API behind your own small backend/serverless function.
- **OCR/barcode accuracy** depends on photo quality/lighting like any camera-based scanner — there's no server-side image preprocessing.

## File map

```
home.html, products.html, ai-analyzer.html, about.html, developers.html, details.html
products.json                  # 355-product database
assets/img/logo.png            # site logo (from Logo_Nutriscan.png)
assets/img/dev-gokulnath.jpeg
assets/js/config.js            # Gemini key + FAQ + banned-additive/allergen reference data
assets/js/i18n.js               # translation engine
assets/js/common.js             # theme, nav, page transitions, chat widget
assets/js/products-store.js     # data loading + classification engine
assets/js/analysis-render.js    # shared results-dashboard renderer
assets/js/home.js, products-page.js, details-page.js, analyzer.js   # page-specific logic
parts/, parts/build.py          # source templates + generator script (not needed at runtime — the *.html above are already built; re-run `python3 parts/build.py` from this folder after editing anything in parts/)
```
