/**
 * NutriScan AI - FAQ Knowledge Store
 * Extracted from FAQ.pdf containing all comprehensive Q&A pairs for local indexing.
 */

const pdfFAQStore = [
    // General Platform & Navigation (Q1 - Q10)
    {
        keywords: ["what is nutriscan ai", "intelligent web application", "health indicators"],
        answer: "NutriScan AI is an intelligent web application designed to evaluate packaged food items instantly at the point of sale using standardized health indicators like Nutri-Score (A to E) and NOVA Processing Groups (1 to 4)."
    },
    {
        keywords: ["scan a product barcode", "barcode scanner button", "ean-13", "upc barcodes"],
        answer: "You can scan a product by clicking the Barcode Scanner button on the input dashboard, which uses your device's camera to capture EAN-13 or UPC barcodes in real time."
    },
    {
        keywords: ["upload a photo", "packaging camera option", "ocr engine"],
        answer: "Yes! You can use the Packaging Camera option to upload or stream a photo of the ingredient list or nutritional panel, and our OCR engine will parse the text automatically."
    },
    {
        keywords: ["search for a product manually", "search input box", "sub-50ms"],
        answer: "You can use the Search Input box on the main dashboard to type any brand name or product keyword, which triggers sub-50ms real-time catalog indexing."
    },
    {
        keywords: ["mobile app", "download from an app store", "single-page application"],
        answer: "No download is required. NutriScan AI is built as a responsive Single-Page Application (SPA) using HTML5, CSS3, and JavaScript, allowing you to access it directly via any mobile or desktop web browser."
    },
    {
        keywords: ["work offline", "open food facts rest api", "global catalog items"],
        answer: "While the core web client loads instantly, looking up global catalog items requires an active connection to fetch data from the Open Food Facts REST API."
    },
    {
        keywords: ["how many products", "built-in database", "catalog of over 300"],
        answer: "The platform manages a dynamic catalog of over 300 packaged food products with instant multi-category filtering and sorting capabilities."
    },
    {
        keywords: ["filter products by category", "category filter tabs", "soft drinks"],
        answer: "Yes, you can use the category filter tabs on the main dashboard to sort through items such as soft drinks, chocolates, instant noodles, and snacks."
    },
    {
        keywords: ["switch between dark and light themes", "theme switcher", "header or settings menu"],
        answer: "You can toggle the interface theme using the built-in theme switcher located in the header or settings menu of the web dashboard."
    },
    {
        keywords: ["is my search history saved", "stored locally", "browser session"],
        answer: "Your recent scans and searches are stored locally in your browser session for quick access during your current shopping trip."
    },

    // Nutri-Score System (Q11 - Q20)
    {
        keywords: ["what is the nutri-score", "summary nutrition label", "grade a to grade e"],
        answer: "Nutri-Score is a summary nutrition label that translates the nutritional value of a packaged food product into a simple, color-coded scale from Grade A (healthier) to Grade E (less healthy)."
    },
    {
        keywords: ["how is the nutri-score calculated", "negative nutrients", "positive elements"],
        answer: "It balances negative nutrients that should be limited (such as energy density, sugars, saturated fats, and sodium) against positive elements that are encouraged (such as fiber, protein, and fruit/vegetable content)."
    },
    {
        keywords: ["grade a nutri-score", "highest nutritional quality score", "well-balanced product"],
        answer: "Grade A represents the highest nutritional quality score, indicating a well-balanced product with low levels of negative components and high beneficial nutrients."
    },
    {
        keywords: ["grade e nutri-score", "lower nutritional quality score", "high in calories"],
        answer: "Grade E indicates a lower nutritional quality score, typically assigned to products high in calories, sugars, salt, or saturated fats."
    },
    {
        keywords: ["does a nutri-score apply to all types of food", "relative comparison"],
        answer: "Nutri-Scores provide a general relative comparison within product categories, helping you quickly identify healthier alternatives on store shelves."
    },
    {
        keywords: ["zero sugar", "still get a low nutri-score", "high levels of sodium"],
        answer: "Yes, a product can still receive a lower grade if it contains high levels of sodium, saturated fats, or high overall energy density despite having no added sugar."
    },
    {
        keywords: ["natural snacks have lower nutri-scores", "densely packed with calories"],
        answer: "Even natural snacks can score lower if they are densely packed with calories or high concentrations of natural fats and sodium."
    },
    {
        keywords: ["official government standard everywhere", "front-of-pack nutritional labeling model"],
        answer: "Nutri-Score is a standardized front-of-pack nutritional labeling model widely used internationally to simplify consumer choice, though local adaptations may vary."
    },
    {
        keywords: ["sort products by their nutri-score", "sorting engine"],
        answer: "Yes, the platform's sorting engine allows you to filter and sort catalog items by their health grades."
    },
    {
        keywords: ["where is the nutri-score displayed", "output card on the right"],
        answer: "The color-coded Nutri-Score badge is prominently displayed inside the main output card on the right side of your screen."
    },

    // NOVA Processing Groups (Q21 - Q30)
    {
        keywords: ["nova processing groups", "extent and purpose of industrial processing"],
        answer: "The NOVA classification system categorizes food items based on the extent and purpose of industrial processing they undergo, rather than their nutrient content alone."
    },
    {
        keywords: ["nova group 1", "unprocessed or minimally processed foods", "fresh milk"],
        answer: "NOVA Group 1 covers unprocessed or minimally processed foods—natural foods altered only by removal of inedible parts, drying, crushing, or pasteurization (e.g., fresh milk, whole oats)."
    },
    {
        keywords: ["nova group 2", "processed culinary ingredients", "butter, vegetable oils"],
        answer: "NOVA Group 2 includes processed culinary ingredients—substances extracted from group 1 foods or nature (such as butter, vegetable oils, and salt) used for cooking and seasoning."
    },
    {
        keywords: ["nova group 3", "processed foods", "canned vegetables, salted nuts"],
        answer: "NOVA Group 3 comprises processed foods—relatively simple products made by adding salt, oil, or other group 2 substances to group 1 foods (e.g., canned vegetables, salted nuts, freshly baked bread)."
    },
    {
        keywords: ["nova group 4", "ultra-processed foods", "upfs"],
        answer: "NOVA Group 4 represents Ultra-Processed Foods (UPFs)—industrial formulations made mostly or entirely from substances derived from foods and additives, often containing cosmetic colors, flavors, and emulsifiers."
    },
    {
        keywords: ["nova group 4 foods flagged", "heavy industrial processing", "added sugars"],
        answer: "NOVA Group 4 foods are highlighted because heavy industrial processing is frequently linked to high levels of added sugars, unhealthy fats, and sodium, which can negatively impact long-term health."
    },
    {
        keywords: ["are all nova group 4 products unhealthy", "hyper-palatability"],
        answer: "Not necessarily all, but most ultra-processed items lack the structural integrity of whole foods and are engineered for hyper-palatability, meaning they should be consumed in moderation."
    },
    {
        keywords: ["how does nutriscan detect nova group 4", "specialized additive dictionary"],
        answer: "The system parses the ingredient list against a specialized additive dictionary to flag cosmetic ingredients and industrial markers."
    },
    {
        keywords: ["filter the product catalog by nova group", "unprocessed items"],
        answer: "Yes, you can filter search results to view specifically unprocessed items or check processing levels on any product details page."
    },
    {
        keywords: ["where can i find the nova classification", "below the nutri-score indicator"],
        answer: "The NOVA group badge appears right below the Nutri-Score indicator on the product output card."
    },

    // Additive & E-Number Safety (Q31 - Q40)
    {
        keywords: ["what are e-numbers", "codes for food additives", "european union"],
        answer: "E-numbers are codes for food additives that have been evaluated and approved for use within the European Union and international food standards (such as preservatives, colors, and anti-oxidants)."
    },
    {
        keywords: ["are all e-numbers harmful", "vitamin c / e300", "pectin / e440"],
        answer: "No, many E-numbers are harmless natural substances or derivatives (such as Vitamin C / E300 or pectin / E440), while others are synthetic preservatives that require moderation."
    },
    {
        keywords: ["how does nutriscan handle e-numbers", "ai specialist modal"],
        answer: "The application automatically scans ingredient text for E-codes, matches them against safety databases, and flags potential risk additives in the AI Specialist modal."
    },
    {
        keywords: ["what is e211", "sodium benzoate", "microbial growth"],
        answer: "E211 is a common chemical preservative used in acidic foods and soft drinks to prevent microbial growth; the app flags high concentrations against safety thresholds."
    },
    {
        keywords: ["what is e621", "monosodium glutamate", "msg", "flavor enhancer"],
        answer: "E621 is a flavor enhancer widely used in savory packaged foods. The app highlights its presence for users tracking sensitivity or intake limits."
    },
    {
        keywords: ["ask the ai chatbot about specific additives", "is this e211 safe"],
        answer: "Yes! You can type questions like \"Is this E211 safe?\" directly into the floating NutriScan AI Specialist modal to get instant context."
    },
    {
        keywords: ["chemical additives affect the nova rating", "artificial sweeteners"],
        answer: "The presence of industrial cosmetic additives, artificial sweeteners, or synthetic preservatives automatically classifies a product into NOVA Group 4."
    },
    {
        keywords: ["app explain what a specific preservative does", "color retention"],
        answer: "Yes, the AI chatbot explains the primary function of listed additives (e.g., color retention, acidity regulation, or microbial inhibition)."
    },
    {
        keywords: ["artificial sweeteners flagged", "ai specialist consultation panel"],
        answer: "Yes, artificial sweeteners are flagged in the ingredient breakdown and addressed in the AI Specialist consultation panel."
    },
    {
        keywords: ["check allergen risks related to additives", "product safety breakdown"],
        answer: "The app highlights common allergens and additive-related sensitivities directly within the product safety breakdown."
    },

    // FSSAI Compliance & Regulatory Standards (Q41 - Q50)
    {
        keywords: ["what is fssai", "food safety and standards authority of india"],
        answer: "FSSAI (Food Safety and Standards Authority of India) is the primary regulatory body responsible for protecting and promoting public health through regulation and supervision of food safety in India."
    },
    {
        keywords: ["integrate fssai guidelines", "threshold benchmarks", "high-risk flags"],
        answer: "The platform compares macro-nutritional values per 100g against recognized FSSAI threshold benchmarks to determine high-risk flags and warning alerts."
    },
    {
        keywords: ["fssai low-risk threshold for total sugars", "below 5.0g per 100g"],
        answer: "Under general threshold standards, total sugars below 5.0g per 100g are classified as low risk, while values exceeding 12.5g trigger a high-risk warning label."
    },
    {
        keywords: ["fssai benchmark for sodium content", "below 0.12g", "exceeding 0.60g"],
        answer: "Sodium levels below 0.12g per 100g are considered low risk, whereas levels exceeding 0.60g trigger a hypertension and high-sodium alert."
    },
    {
        keywords: ["fssai benchmark for saturated fat", "below 1.5g", "exceeding 4.0g"],
        answer: "Saturated fat levels below 1.5g per 100g are low risk, while values exceeding 4.0g trigger an ultra-processed or high-fat alert."
    },
    {
        keywords: ["product violates fssai limits", "warning badge"],
        answer: "When a macro metric crosses high-risk limits, the app displays a specific warning badge and FSSAI compliance action notice."
    },
    {
        keywords: ["fssai guidelines applied automatically", "normalization logic"],
        answer: "Yes, every product evaluation passes through normalization logic that measures values against standardized FSSAI thresholds per 100g/100mL."
    },
    {
        keywords: ["ask the chatbot about regulatory compliance", "macro-nutritional targets"],
        answer: "Absolutely! The AI Specialist modal is trained to answer queries regarding FSSAI compliance and macro-nutritional targets."
    },
    {
        keywords: ["why are standards measured per 100g", "standardized baseline"],
        answer: "Measuring values per 100g provides a standardized baseline, allowing you to accurately compare nutritional densities across different package sizes and brands."
    },
    {
        keywords: ["how do warning labels appear", "highlighted alert boxes"],
        answer: "High-risk warnings appear in highlighted alert boxes within the product details view and inside the AI chatbot consultation window."
    },

    // AI Specialist Chatbot Modal (Q51 - Q60)
    {
        keywords: ["what is the nutriscan ai specialist", "gemini llm api"],
        answer: "It is an interactive, context-aware chatbot modal powered by the Gemini LLM API that provides real-time natural language answers regarding food safety and ingredients."
    },
    {
        keywords: ["where is the ai chatbot located", "bottom-right corner"],
        answer: "The AI assistant modal is anchored neatly in the bottom-right corner of the interface for quick, non-intrusive access while browsing."
    },
    {
        keywords: ["ai chatbot know which product", "product context payload"],
        answer: "When you open the chat while viewing a product, the system injects the specific product context payload (ingredients, macros, and scores) directly into the AI prompt."
    },
    {
        keywords: ["ask custom questions to the ai", "dietary restrictions"],
        answer: "Yes, you can type any custom query into the chat box, such as asking about specific health impacts, dietary restrictions, or substitute recommendations."
    },
    {
        keywords: ["ai chatbot support real-time responses", "browser window"],
        answer: "Yes, the Gemini LLM API endpoint delivers rapid, context-aware answers in real time directly inside your browser window."
    },
    {
        keywords: ["chatbot check allergen risks", "milk, wheat, soy, nuts"],
        answer: "Yes, you can ask the AI to verify whether a scanned product contains common allergens like milk, wheat, soy, nuts, or gluten."
    },
    {
        keywords: ["is my chat history stored permanently", "active browser session"],
        answer: "Chat sessions are maintained locally during your active browser session to assist with your ongoing product comparisons."
    },
    {
        keywords: ["chatbot recommend healthier alternatives", "catalog parameters"],
        answer: "Yes, if you ask for a healthier choice within the same category, the AI uses catalog parameters to suggest better-scoring alternatives."
    },
    {
        keywords: ["close or minimize the ai modal", "close button on the top corner"],
        answer: "You can close or toggle the floating AI specialist window using the close button on the top corner of the chat box."
    },
    {
        keywords: ["ai chatbot available on mobile viewports", "fully responsive"],
        answer: "Yes, the chatbot interface is fully responsive and optimized to fit comfortably on mobile phone screens."
    },

    // Nutritional Data & Portion Normalization (Q61 - Q70)
    {
        keywords: ["what macro-nutrients does the app analyze", "energy density, total sugars"],
        answer: "The app analyzes key macro-nutrients including energy density, total sugars, saturated fats, sodium, fiber, and protein content."
    },
    {
        keywords: ["what is data normalization", "100g or 100ml baseline"],
        answer: "Data normalization is the computational process of converting raw serving-size information into a standard 100g or 100mL baseline for fair product comparison."
    },
    {
        keywords: ["how are portion sizes handled", "serving size tokens"],
        answer: "The client engine parses serving size tokens and normalizes the nutritional values so you can see exact metrics per standard weight unit."
    },
    {
        keywords: ["what is energy density", "calories packed into a given weight"],
        answer: "Energy density measures the number of calories packed into a given weight of food (kcal per 100g), which contributes to the Nutri-Score calculation."
    },
    {
        keywords: ["why is fiber important", "digestive health and metabolic balance"],
        answer: "Dietary fiber contributes positive points in the Nutri-Score algorithm because it supports digestive health and metabolic balance."
    },
    {
        keywords: ["why is protein factored into the score", "positive nutritional component"],
        answer: "Protein is counted as a positive nutritional component that helps balance out negative factors like sodium or saturated fats in certain food categories."
    },
    {
        keywords: ["where does the raw nutritional data come from", "open food facts rest api"],
        answer: "Data is retrieved dynamically via REST API integration with global datasets like Open Food Facts and verified against internal benchmark indices."
    },
    {
        keywords: ["view raw ingredient lists", "complete, unedited ingredient array"],
        answer: "Yes, every product detail page displays the complete, unedited ingredient array extracted from the package record."
    },
    {
        keywords: ["product has missing nutritional data", "category averages"],
        answer: "The system notifies you if specific macro fields are missing and prompts the AI specialist or fallback algorithms to estimate based on category averages."
    },
    {
        keywords: ["liquid products measured differently", "dedicated 100ml normalization scales"],
        answer: "Yes, liquids (like beverages and oils) use dedicated 100mL normalization scales and tailored scoring criteria."
    },

    // Technical Performance & Architecture (Q71 - Q80)
    {
        keywords: ["technologies power the frontend", "html5, custom css3, vanilla javascript"],
        answer: "The platform is built on a modular web stack utilizing HTML5, custom CSS3 with glassmorphism styling, and modern vanilla JavaScript (ES6+)."
    },
    {
        keywords: ["how fast is the product search indexing", "sub-50ms search indexing"],
        answer: "The client-side Vanilla JavaScript search engine provides sub-50ms search indexing for instant results as you type."
    },
    {
        keywords: ["heavy external frameworks", "lightweight, high-performance vanilla js"],
        answer: "No heavy frameworks are used; the app runs on lightweight, high-performance vanilla JS to ensure maximum speed and minimal memory overhead."
    },
    {
        keywords: ["responsive design handled across devices", "custom css grid and flexbox"],
        answer: "The layout uses custom CSS Grid and Flexbox with responsive viewports to adapt seamlessly to mobile phones, tablets, and desktop monitors."
    },
    {
        keywords: ["styling effects are used on the user interface", "glassmorphism ui accents"],
        answer: "The interface features modern glassmorphism UI accents, smooth card transitions, and a dual Dark/Light theme design."
    },
    {
        keywords: ["how does the rest api integration work", "asynchronous rest api calls"],
        answer: "The app communicates via asynchronous REST API calls to fetch catalog records, JSON data payloads, and external analytical endpoints."
    },
    {
        keywords: ["is client-side processing secure", "browser client engine"],
        answer: "Yes, local data calculations and filtering occur securely inside your browser client engine without exposing personal device information."
    },
    {
        keywords: ["handle low-bandwidth connections", "lightweight data serialization protocols"],
        answer: "By utilizing lightweight data serialization protocols and client-side caching, the app maintains fast performance even on slower mobile networks."
    },
    {
        keywords: ["ensures smooth dom rendering", "updates only the necessary dom elements"],
        answer: "The modular JavaScript architecture updates only the necessary DOM elements dynamically, preventing screen flickering and lag."
    },
    {
        keywords: ["report a technical bug or ui issue", "feedback option in the application settings"],
        answer: "You can use the feedback option in the application settings or refresh your session if you encounter any display anomalies."
    },

    // Consumer Health & Dietary Guidance (Q81 - Q90)
    {
        keywords: ["nutriscan ai help with weight management", "lower-calorie, nutrient-dense choices"],
        answer: "Yes, by instantly identifying energy density, sugar levels, and Nutri-Scores, the app helps you make lower-calorie, nutrient-dense choices."
    },
    {
        keywords: ["app suitable for diabetics", "total sugar content and glycemic risk factors"],
        answer: "The app highlights total sugar content and glycemic risk factors, helping users monitor sugar intake in coordination with medical advice."
    },
    {
        keywords: ["check for sodium levels if i have hypertension", "fssai high-risk thresholds"],
        answer: "Yes, sodium levels are clearly displayed and cross-referenced against FSSAI high-risk thresholds to warn users managing blood pressure."
    },
    {
        keywords: ["app detect gluten or wheat allergens", "ingredient parser and ai chatbot"],
        answer: "The ingredient parser and AI chatbot can identify wheat, gluten, and other common allergens listed in the product record."
    },
    {
        keywords: ["vegan or vegetarian checks supported", "animal-derived additives or dairy products"],
        answer: "You can ask the AI Specialist chatbot to review ingredient lists for animal-derived additives or dairy products to verify plant-based suitability."
    },
    {
        keywords: ["app help me avoid ultra-processed foods", "nova group 4 classification"],
        answer: "Yes! The NOVA Group 4 classification instantly flags ultra-processed foods so you can steer toward minimally processed alternatives."
    },
    {
        keywords: ["app replace professional medical or nutritional advice", "informational tool"],
        answer: "No, NutriScan AI is an informational tool designed to assist point-of-sale decisions and should not replace professional medical diagnosis or dietary prescriptions."
    },
    {
        keywords: ["app combat label fatigue", "single-glance visual grades"],
        answer: "By converting dense numerical tables into single-glance visual grades (Nutri-Score and NOVA), the app eliminates cognitive overload."
    },
    {
        keywords: ["compare two different products", "view products side-by-side"],
        answer: "Yes, you can view products side-by-side or check their respective scoring cards to see which option is healthier."
    },
    {
        keywords: ["promote transparency in food marketing", "strips away confusing front-of-pack marketing"],
        answer: "Absolutely. The platform strips away confusing front-of-pack marketing claims to reveal the objective nutritional reality underneath."
    },

    // Troubleshooting & Support (Q91 - Q100)
    {
        keywords: ["barcode cannot be recognized", "full white quiet zones"],
        answer: "Make sure the image is well-lit, not blurry, and includes full white quiet zones on both sides of the barcode, or try entering the product name via search."
    },
    {
        keywords: ["why did my image upload fail", "standard image format", "png, jpg, webp"],
        answer: "Ensure your uploaded file is in a standard image format (PNG, JPG, WEBP) and under the file size limit for optimal processing."
    },
    {
        keywords: ["ai chatbot fails to respond", "gemini llm api endpoint"],
        answer: "Check your internet connection to ensure communication with the Gemini LLM API endpoint is active, then try submitting your query again."
    },
    {
        keywords: ["scanned product showing incorrect information", "external repository records"],
        answer: "Catalog data relies on external repository records; if you notice a discrepancy, you can use the AI chatbot to cross-verify specific ingredients."
    },
    {
        keywords: ["clear my search or reset the filters", "clear or reset button"],
        answer: "Click the \"Clear\" or \"Reset\" button on the search and filter bar to restore the full product catalog view."
    },
    {
        keywords: ["camera scanner screen black", "browser permissions to access your device camera"],
        answer: "Ensure you have granted browser permissions to access your device camera in your browser settings."
    },
    {
        keywords: ["app work on all web browsers", "chrome, safari, firefox, and edge"],
        answer: "The app is optimized for modern web browsers like Chrome, Safari, Firefox, and Edge supporting ES6+ JavaScript standards."
    },
    {
        keywords: ["update the web app to the latest version", "refresh your browser tab"],
        answer: "Simply refresh your browser tab; the Single-Page Application automatically loads the latest client scripts and styles."
    },
    {
        keywords: ["contact for feature requests or inquiries", "project support portal"],
        answer: "You can reach out through the project support portal or repository links provided by the development team."
    },
    {
        keywords: ["personal data secure while using the chatbot", "encrypted api endpoints"],
        answer: "Yes, your queries are processed securely via encrypted API endpoints without storing sensitive personal identity records."
    },

    // Macronutrients & Recommended Daily Intake (Q101 - Q125)
    {
        keywords: ["recommended daily intake for total sugars", "less than 10% of total daily energy intake"],
        answer: "According to global health guidelines and FSSAI standards, free sugars should ideally be limited to less than 10% of total daily energy intake (roughly 25g to 50g per day depending on caloric needs)."
    },
    {
        keywords: ["how much sodium is recommended per day", "less than 2,000 mg per day"],
        answer: "The World Health Organization and FSSAI recommend limiting sodium intake to less than 2,000 mg per day (equivalent to under 5g of salt) to maintain healthy blood pressure."
    },
    {
        keywords: ["daily benchmark for saturated fat intake", "less than 10% of total daily energy intake"],
        answer: "Saturated fatty acids should contribute less than 10% of total daily energy intake, generally translating to less than 20g to 25g per day for an average diet."
    },
    {
        keywords: ["how much dietary fiber should an adult consume daily", "25g to 30g per day"],
        answer: "Recommended dietary fiber intake ranges from 25g to 30g per day, sourced from whole grains, legumes, fruits, and vegetables."
    },
    {
        keywords: ["optimal daily protein intake", "0.8g per kilogram of body weight"],
        answer: "The baseline recommended dietary allowance (RDA) for protein is approximately 0.8g per kilogram of body weight, though active individuals may require more."
    },
    {
        keywords: ["total sugars flagged as high in packaged snacks", "more than 12.5g of sugar per 100g"],
        answer: "Products containing more than 12.5g of sugar per 100g breach FSSAI high-risk thresholds, triggering warning labels because excess sugar intake links to metabolic disorders."
    },
    {
        keywords: ["constitutes a high-sodium packaged food item", "more than 0.60g of sodium per 100g"],
        answer: "Any packaged item containing more than 0.60g of sodium per 100g is classified as high-risk, contributing significantly to daily sodium limits."
    },
    {
        keywords: ["saturated fat affect cardiovascular health", "elevate low-density lipoprotein cholesterol"],
        answer: "High intake of saturated fats can elevate low-density lipoprotein (LDL) cholesterol levels, increasing the long-term risk of cardiovascular complications."
    },
    {
        keywords: ["difference between free sugars and intrinsic sugars", "intact cell walls"],
        answer: "Intrinsic sugars occur naturally within intact cell walls of fruits and vegetables, whereas free sugars are added to foods or present in honey, syrups, and fruit juices."
    },
    {
        keywords: ["why is dietary fiber included in the nutri-score calculation", "delays glucose absorption"],
        answer: "Dietary fiber earns positive scoring points because it delays glucose absorption, improves gut motility, and supports overall metabolic wellness."
    },
    {
        keywords: ["how many calories should an average adult consume daily", "2,000 kcal for women and 2,500 kcal for men"],
        answer: "Standard reference values average around 2,000 kcal for women and 2,500 kcal for men, though individual energy needs vary based on physical activity and age."
    },
    {
        keywords: ["role do trans-fats play in packaged foods", "partially hydrogenated oils"],
        answer: "Trans-fats (often found in partially hydrogenated oils) increase bad cholesterol while lowering good cholesterol; regulatory bodies mandate their strict minimization or elimination."
    },
    {
        keywords: ["are all fats harmful to health", "unsaturated fats"],
        answer: "No, unsaturated fats (monounsaturated and polyunsaturated fats found in nuts, seeds, and fish) are essential for cellular function and heart health."
    },
    {
        keywords: ["energy density impact weight management", "pack many calories into a small weight"],
        answer: "High energy density foods pack many calories into a small weight, making it easier to consume excess calories without feeling full."
    },
    {
        keywords: ["function of carbohydrates in packaged nutrition", "primary energy source"],
        answer: "Carbohydrates serve as the primary energy source for the body, divided into complex starches and simple sugars."
    },
    {
        keywords: ["protein given positive weighting", "tissue repair, muscle maintenance"],
        answer: "Protein is crucial for tissue repair, muscle maintenance, and enzyme synthesis, balancing out negative components in algorithmic models."
    },
    {
        keywords: ["what are micronutrients", "essential vitamins and minerals"],
        answer: "Micronutrients comprise essential vitamins and minerals required in smaller quantities for immune function, bone health, and metabolic regulation."
    },
    {
        keywords: ["sodium balance regulate hydration", "fluid balance, nerve transmission"],
        answer: "Sodium is an essential electrolyte that regulates fluid balance, nerve transmission, and muscle contraction, though excess intake causes water retention."
    },
    {
        keywords: ["what is the glycemic index", "raises blood glucose levels compared to pure glucose"],
        answer: "Glycemic index measures how rapidly a carbohydrate-containing food raises blood glucose levels compared to pure glucose."
    },
    {
        keywords: ["ultra-processed foods lack adequate fiber", "industrial refining processes strip away natural bran"],
        answer: "Industrial refining processes strip away natural bran and grain hulls, removing nearly all dietary fiber from refined flours and starches."
    },
    {
        keywords: ["added sugars affect liver function", "overloads the liver"],
        answer: "Excessive consumption of free fructose and sucrose overloads the liver, potentially leading to non-alcoholic fatty liver conditions over time."
    },
    {
        keywords: ["recommended daily limit for cholesterol", "kept under 300 mg per day"],
        answer: "Dietary cholesterol should ideally be kept under 300 mg per day, particularly for individuals managing heart health concerns."
    },
    {
        keywords: ["low-fat products sometimes have high sugar counts", "add extra sugar and starches"],
        answer: "When manufacturers remove fat to create \"low-fat\" items, they often add extra sugar and starches to preserve texture and palatability."
    },
    {
        keywords: ["potassium counteract sodium", "excreting excess sodium through urine"],
        answer: "Dietary potassium helps relax blood vessel walls and assists the body in excreting excess sodium through urine, supporting blood pressure regulation."
    },
    {
        keywords: ["significance of the 100g nutritional normalization baseline", "standardized, objective baseline"],
        answer: "Normalizing values per 100g provides a standardized, objective baseline that allows fair comparison across different package sizes and brands."
    },

    // Chemical Additives, Preservatives & E-Numbers (Q126 - Q150)
    {
        keywords: ["what are e-numbers", "standardized codes assigned by regulatory bodies"],
        answer: "E-numbers are standardized codes assigned by regulatory bodies to food additives (including colors, preservatives, and emulsifiers) evaluated for commercial use."
    },
    {
        keywords: ["is e211 sodium benzoate safe", "strict, low concentrations as an antimicrobial preservative"],
        answer: "Sodium Benzoate is permitted in strict, low concentrations as an antimicrobial preservative in acidic foods, but high intake requires caution."
    },
    {
        keywords: ["what is e621 and why is it used", "flavor enhancer used to stimulate umami"],
        answer: "E621 is Monosodium Glutamate (MSG), a flavor enhancer used to stimulate umami taste receptors in savory processed snacks."
    },
    {
        keywords: ["are all artificial food colorings dangerous", "tartrazine or sunset yellow"],
        answer: "While authorized colorings pass baseline safety tests, certain synthetic dyes (like tartrazine or sunset yellow) are monitored for potential allergic reactions or hyperactivity in sensitive children."
    },
    {
        keywords: ["function of e330 citric acid", "organic acidulant and antioxidant"],
        answer: "E330 acts as an organic acidulant and antioxidant, regulating product pH, enhancing tartness, and preventing microbial spoilage."
    },
    {
        keywords: ["artificial sweeteners like aspartame e951", "low-calorie synthetic sweetener"],
        answer: "Aspartame is a low-calorie synthetic sweetener used in diet beverages; it provides sweetness without adding sugar calories, though individuals with phenylketonuria must avoid it."
    },
    {
        keywords: ["what is e322 soya lecithin", "natural phospholipid emulsifier extracted from soybeans"],
        answer: "Soya lecithin is a natural phospholipid emulsifier extracted from soybeans, used widely in chocolates and baked goods to bind fats and liquids."
    },
    {
        keywords: ["why are emulsifiers added to packaged foods", "prevent oil and water components from separating"],
        answer: "Emulsifiers prevent oil and water components from separating, ensuring a smooth, uniform texture in sauces, dressings, and chocolates."
    },
    {
        keywords: ["role of sulfur dioxide e220", "prevent browning and bacterial growth"],
        answer: "E220 is a chemical preservative and antioxidant used in dried fruits and wines to prevent browning and bacterial growth, though it can trigger asthma symptoms in sensitive people."
    },
    {
        keywords: ["what are nitrates and nitrites e249-e252", "curing salts used in processed meats"],
        answer: "Nitrites and nitrates are curing salts used in processed meats to inhibit bacterial growth and impart a pink color; excessive breakdown products raise health discussions."
    },
    {
        keywords: ["what is bha e320 and bht e321", "synthetic antioxidant preservatives"],
        answer: "BHA and BHT are synthetic antioxidant preservatives added to high-fat foods to prevent lipid rancidity and extend shelf life."
    },
    {
        keywords: ["what is calcium propionate e282", "mold-inhibiting preservative"],
        answer: "E282 is a mold-inhibiting preservative commonly sprayed or mixed into packaged sliced bread and bakery items."
    },
    {
        keywords: ["are thickeners like guar gum e412 safe", "natural seed extract"],
        answer: "Guar gum is a natural seed extract used to thicken soups and sauces; it is generally recognized as safe, though high amounts can cause mild digestive gas."
    },
    {
        keywords: ["what is carrageenan e407", "seaweed-derived gelling and stabilizing agent"],
        answer: "Carrageenan is a seaweed-derived gelling and stabilizing agent used in plant milks and dairy desserts; its inflammatory potential in processed forms is studied in food science."
    },
    {
        keywords: ["what are artificial flavor enhancers", "disodium inosinate e631"],
        answer: "Additives like disodium inosinate (E631) and disodium guanylate (E627) work alongside MSG to intensify savory flavors in snack foods."
    },
    {
        keywords: ["can artificial colors cause hyperactivity", "linked in clinical studies to increased hyperactivity"],
        answer: "Certain synthetic azo dyes have been linked in clinical studies to increased hyperactivity in sensitive children, prompting warning labels in specific regions."
    },
    {
        keywords: ["difference between natural and synthetic antioxidants", "plant-derived"],
        answer: "Natural antioxidants (like Vitamin C or tocopherols) occur organically or are plant-derived, whereas synthetic antioxidants are chemically manufactured in laboratories."
    },
    {
        keywords: ["how do anti-caking agents work", "silicon dioxide, e551"],
        answer: "Anti-caking agents (such as silicon dioxide, E551) absorb moisture to prevent powdered food ingredients from clumping together."
    },
    {
        keywords: ["what are humectants in food packaging", "glycerol, e422"],
        answer: "Humectants (like glycerol, E422) retain moisture within soft candies and baked goods to prevent them from drying out."
    },
    {
        keywords: ["what is acesulfame potassium e950", "zero-calorie artificial sweetener"],
        answer: "Acesulfame potassium is a zero-calorie artificial sweetener often blended with other sweeteners to mask bitter aftertastes."
    },
    {
        keywords: ["are phosphates used as food additives", "sodium phosphates"],
        answer: "Mineral phosphates (e.g., sodium phosphates) serve as texturizers and melting salts in processed cheeses and meats."
    },
    {
        keywords: ["what is sucralose e955", "chlorinating sugar molecules"],
        answer: "Sucralose is a zero-calorie artificial sweetener made by chlorinating sugar molecules, rendering it significantly sweeter than regular table sugar."
    },
    {
        keywords: ["how does potassium sorbate e202 function", "inhibiting molds and yeasts"],
        answer: "Potassium sorbate is a chemical preservative effective at inhibiting molds and yeasts in cheeses, syrups, and baked goods."
    },
    {
        keywords: ["what are foaming agents", "maintain gas dispersion in whipped or aerated food"],
        answer: "Foaming agents help maintain gas dispersion in whipped or aerated food products, ensuring stable texture."
    },
    {
        keywords: ["are wax coatings on fruits and vegetables harmful", "shellac or carnauba wax"],
        answer: "Food-grade waxes (like shellac or Carnauba wax) are applied to apples and citrus fruits to prevent moisture loss and microbial entry; they are generally non-digestible and pass through safely."
    },

    // Banned, Restricted & Toxic Ingredients (Q151 - Q175)
    {
        keywords: ["what makes an ingredient banned", "severe health risks, carcinogenicity"],
        answer: "An ingredient is banned when toxicological evaluations confirm severe health risks, carcinogenicity, organ toxicity, or severe allergic potential that outweighs any culinary benefit."
    },
    {
        keywords: ["are potassium bromate additives banned", "flour dough improver"],
        answer: "Yes, potassium bromate—previously used as a flour dough improver—has been banned in India, the UK, Europe, and Canada due to established carcinogenic properties in animal tests."
    },
    {
        keywords: ["brominated vegetable oil bvo banned", "citrus flavoring suspended in sodas"],
        answer: "BVO was used to keep citrus flavoring suspended in sodas; due to bromine accumulation concerns affecting neurological health, major regulatory bodies have phased it out."
    },
    {
        keywords: ["why are certain artificial dyes restricted globally", "sudan red or rhodamine b"],
        answer: "Dyes like Sudan Red or Rhodamine B are strictly illegal industrial chemicals sometimes illicitly added to spices and sweets, prompting severe regulatory crackdowns."
    },
    {
        keywords: ["formaldehyde ever found in packaged foods", "illegal as a food additive"],
        answer: "Formaldehyde is illegal as a food additive, though trace natural formation occurs in some fruits; intentional preservation use is strictly prohibited."
    },
    {
        keywords: ["what are trans-fats and are they banned", "fssai and who guidelines"],
        answer: "Industrially produced trans-fats have been banned or restricted to near-zero levels by FSSAI and WHO guidelines due to direct links with heart disease."
    },
    {
        keywords: ["what is melamine and why is it toxic", "fake higher nitrogen test results"],
        answer: "Melamine is an industrial plastic chemical illegally adulterated into protein-rich foods to fake higher nitrogen test results; it causes kidney stone formation and renal failure."
    },
    {
        keywords: ["boric acid and borax allowed as food preservatives", "cumulative cellular toxicity"],
        answer: "No, boric acid and borax are toxic chemical preservatives banned from food use due to cumulative cellular toxicity."
    },
    {
        keywords: ["what is lead chromate", "toxic yellow pigment"],
        answer: "Lead chromate is a toxic yellow pigment sometimes illegally added to turmeric powder to enhance color brightness, leading to heavy metal poisoning."
    },
    {
        keywords: ["why are heavy metals dangerous in food", "bioaccumulate in human organs"],
        answer: "Heavy metals like lead, mercury, cadmium, and arsenic bioaccumulate in human organs, causing neurological damage, kidney dysfunction, and developmental delays."
    },
    {
        keywords: ["what is coumarin in cinnamon", "liver toxicity in high doses"],
        answer: "Coumarin is a natural chemical in certain cinnamon varieties (Cassia) that can cause liver toxicity in high doses, leading to recommended daily intake limits."
    },
    {
        keywords: ["are mineral oils permitted as food ingredients", "unrefined technical mineral oils are toxic"],
        answer: "Unrefined technical mineral oils are toxic and banned from food contact; only highly refined food-grade mineral oils are permitted for specific polishing uses."
    },
    {
        keywords: ["what is safrole and why is it prohibited", "classified as a carcinogen"],
        answer: "Safrole is a natural organic compound found in sassafras oil previously used in root beers; it is classified as a carcinogen and restricted."
    },
    {
        keywords: ["can packaging chemicals leach into food", "phthalates and bisphenol a"],
        answer: "Yes, plasticizers like phthalates and bisphenol A (BPA) from packaging can migrate into fatty foods, prompting strict regulatory migration limits."
    },
    {
        keywords: ["what are phthalates and how do they impact health", "endocrine disruptors"],
        answer: "Phthalates are chemical softeners used in plastics that act as endocrine disruptors, potentially affecting hormonal balance and reproductive health."
    },
    {
        keywords: ["is bisphenol a bpa banned in food packaging", "hormone-disruption risks"],
        answer: "BPA use in baby bottles and food container linings is heavily restricted or banned across numerous global jurisdictions due to hormone-disruption risks."
    },
    {
        keywords: ["what is acrylamide and how does it form", "maillard reaction"],
        answer: "Acrylamide is a chemical compound that forms naturally in starchy foods during high-temperature cooking (frying or baking); it is classified as a potential human carcinogen."
    },
    {
        keywords: ["synthetic caffeine limits enforced in beverages", "cardiac palpitations and toxicity in youth"],
        answer: "Regulatory agencies enforce strict maximum caffeine limits per serving in energy drinks to prevent cardiac palpitations and toxicity in youth."
    },
    {
        keywords: ["what is diacetyl and why was it restricted", "bronchiolitis obliterans"],
        answer: "Diacetyl is a buttery flavoring agent that caused severe respiratory illness (bronchiolitis obliterans) among industrial microwave popcorn factory workers."
    },
    {
        keywords: ["can insect-contaminated foods be sold", "microscopic defect action levels"],
        answer: "Regulatory bodies establish strict microscopic defect action levels, but active insect infestations or toxic fungal mycotoxins render food adulterated and illegal."
    },
    {
        keywords: ["what are aflatoxins and how toxic are they", "aspergillus"],
        answer: "Aflatoxins are toxic, carcinogenic metabolites produced by molds (Aspergillus) growing on improperly stored nuts and grains; zero-tolerance limits apply."
    },
    {
        keywords: ["what is synthetic vinegar and is it regulated", "glacial acetic acid diluted with water"],
        answer: "Synthetic vinegar made from glacial acetic acid diluted with water must meet strict food-grade purity standards and clear labeling to prevent toxic chemical contamination."
    },
    {
        keywords: ["are unauthorized pesticide residues monitored", "maximum residue limits"],
        answer: "Yes, Maximum Residue Limits (MRLs) are legally enforced for agricultural pesticide traces on raw and packaged food commodities."
    },
    {
        keywords: ["hydrogen cyanide risk in stone fruit kernels", "amygdalin"],
        answer: "Apricot kernels and bitter almonds contain amygdalin, which releases toxic hydrogen cyanide when digested, prompting consumption warnings."
    },
    {
        keywords: ["nutriscan ai alert users to banned substances", "fssai and international restriction lists"],
        answer: "The integrated AI chatbot cross-references ingredient databases against current FSSAI and international restriction lists, issuing immediate safety warnings."
    },

    // Allergens, Dietary Restrictions & Specialized Diets (Q176 - Q200)
    {
        keywords: ["major food allergens tracked by food apps", "milk, eggs, peanuts, tree nuts"],
        answer: "Major tracked allergens include milk, eggs, peanuts, tree nuts, wheat, soy, fish, shellfish, and sesame."
    },
    {
        keywords: ["nutriscan ai detect hidden gluten", "wheat, barley, rye, and malt derivatives"],
        answer: "Yes, the ingredient parser scans for wheat, barley, rye, and malt derivatives, highlighting potential gluten risks for celiac users."
    },
    {
        keywords: ["dairy allergies differ from lactose intolerance", "immune system reaction to milk proteins"],
        answer: "A milk allergy is an immune system reaction to milk proteins (casein/whey), whereas lactose intolerance is a digestive enzyme deficiency causing bloating and gas."
    },
    {
        keywords: ["does soy lecithin trigger soy allergies", "negligible protein traces"],
        answer: "Highly refined soy lecithin contains negligible protein traces and rarely triggers allergic reactions, but product labels still declare soy presence for strict allergy sufferers."
    },
    {
        keywords: ["what is palm oil and why is its sourcing debated", "tropical deforestation"],
        answer: "Palm oil is a high-yield vegetable oil rich in saturated fats; its widespread cultivation is heavily debated due to tropical deforestation and habitat loss."
    },
    {
        keywords: ["are vegan products automatically healthy", "high levels of refined sugar, palm oil"],
        answer: "Not necessarily; many vegan snacks and confectionery items contain high levels of refined sugar, palm oil, and artificial additives despite lacking animal products."
    },
    {
        keywords: ["may contain traces of nuts meaning", "facility handling nuts"],
        answer: "This advisory label indicates that the product was manufactured in a facility handling nuts, posing cross-contamination risks for severe allergy sufferers."
    },
    {
        keywords: ["diabetics consume products labeled no added sugar", "impact blood glucose"],
        answer: "\"No Added Sugar\" does not mean sugar-free; these products may still contain natural fruit sugars, starches, or carbohydrates that impact blood glucose."
    },
    {
        keywords: ["what is high-fructose corn syrup hfcs", "derived from corn starch"],
        answer: "HFCS is an industrially manufactured liquid sweetener derived from corn starch, widely used in beverages and sauces due to its low cost and high sweetness."
    },
    {
        keywords: ["genetically modified gm ingredients labeled", "genetically modified organisms"],
        answer: "Regulatory frameworks mandate explicit labeling for foods containing genetically modified organisms (GMOs) so consumers can make informed choices."
    },
    {
        keywords: ["msg sensitivity chinese restaurant syndrome", "headaches or flushing"],
        answer: "Some individuals report mild symptoms like headaches or flushing after consuming high amounts of MSG (E621), though clinical studies show it affects only a small subset of sensitive people."
    },
    {
        keywords: ["how do sulfites affect asthmatic individuals", "trigger acute asthma attacks"],
        answer: "Sulfites used as preservatives in dried fruits and beverages can trigger acute asthma attacks, bronchospasm, and allergic rashes in sensitive individuals."
    },
    {
        keywords: ["what are hydrogenated oils", "treated with hydrogen gas to turn them solid"],
        answer: "Hydrogenated oils are liquid vegetable oils treated with hydrogen gas to turn them solid at room temperature, increasing shelf life while creating harmful trans-fats."
    },
    {
        keywords: ["artificial sweeteners cause digestive discomfort", "laxative effects, bloating"],
        answer: "Sugar alcohols (like sorbitol or xylitol, E420/E967) can cause laxative effects, bloating, and gas when consumed in large quantities."
    },
    {
        keywords: ["ask the ai chatbot about a specific allergen", "does this product contain"],
        answer: "Simply open the AI Specialist modal while viewing any product and type: \"Does this product contain [Allergen Name]?\" for an instant safety breakdown."
    },

    // Advanced Toxicology & Heavy Metal Contaminants (Q201 - Q225)
    {
        keywords: ["heavy metal contaminants in packaged foods", "lead, mercury, cadmium, and arsenic"],
        answer: "Heavy metals such as lead, mercury, cadmium, and arsenic are toxic environmental pollutants that can contaminate food crops through soil, water, or industrial processing equipment."
    },
    {
        keywords: ["lead poisoning impact human health", "neurological deficits, cognitive impairment"],
        answer: "Chronic lead exposure accumulates in bone and soft tissues, leading to neurological deficits, cognitive impairment, hypertension, and renal dysfunction."
    },
    {
        keywords: ["maximum permitted limit for lead in packaged foods", "0.1 to 2.5 mg/kg"],
        answer: "Regulatory frameworks like FSSAI enforce strict Maximum Residue Limits (MRLs) for lead, often ranging from 0.1 to 2.5 mg/kg depending on the specific food commodity."
    },
    {
        keywords: ["why is cadmium accumulation dangerous", "proximal tubular cells in kidneys"],
        answer: "Cadmium has a long biological half-life in the human body, primarily targeting the proximal tubular cells in kidneys and causing bone mineralization defects."
    },
    {
        keywords: ["how does mercury enter the food chain", "industrial runoff introduces mercury into aquatic ecosystems"],
        answer: "Industrial runoff introduces mercury into aquatic ecosystems, where it biomagnifies up the marine food chain primarily in predatory fish species."
    },
    {
        keywords: ["what are mycotoxins and how do they form", "aspergillus and fusarium"],
        answer: "Mycotoxins are toxic secondary metabolites produced by molds (such as Aspergillus and Fusarium) that proliferate on grains, nuts, and dried fruits under warm, humid storage conditions."
    },
    {
        keywords: ["health hazards of ochratoxin a", "nephrotoxic and suspected carcinogenic mycotoxin"],
        answer: "Ochratoxin A is a nephrotoxic and suspected carcinogenic mycotoxin frequently monitored in cereals, coffee, and dried vine fruits."
    },
    {
        keywords: ["can boiling destroy mycotoxins in food", "high thermal stability"],
        answer: "Most mycotoxins possess high thermal stability and withstand standard cooking, boiling, or baking temperatures without breaking down."
    },
    {
        keywords: ["endocrine-disrupting chemicals edcs", "interfere with normal hormone biosynthesis"],
        answer: "EDCs are exogenous chemicals (such as certain plasticizers and pesticides) that interfere with normal hormone biosynthesis, metabolism, or action."
    },
    {
        keywords: ["phthalates leach into packaged foods", "polyvinyl chloride pvc packaging"],
        answer: "Phthalates used to soften polyvinyl chloride (PVC) packaging materials migrate easily into fatty or oily foods during storage and transport."
    },
    {
        keywords: ["bisphenol s bps and is it safer than bpa", "analogue used to replace bpa"],
        answer: "BPS is an analogue used to replace BPA in epoxy resin linings; however, toxicological studies suggest it exhibits similar endocrine-disrupting properties."
    },
    {
        keywords: ["acrylamide form in processed starchy snacks", "maillard reaction when free amino acids"],
        answer: "Acrylamide forms via the Maillard reaction when free amino acids (specifically asparagine) react with reducing sugars at high temperatures during frying or baking."
    },
    {
        keywords: ["classification of acrylamide by health agencies", "group 2a agent"],
        answer: "The International Agency for Research on Cancer (IARC) classifies acrylamide as a Group 2A agent (probably carcinogenic to humans)."
    },
    {
        keywords: ["food manufacturers reduce acrylamide formation", "optimizing baking temperatures"],
        answer: "Manufacturers lower acrylamide by optimizing baking temperatures, adjusting sugar-to-amino-acid ratios, using enzyme asparaginase treatments, and controlling raw material storage."
    },
    {
        keywords: ["polycyclic aromatic hydrocarbons pahs", "incomplete combustion of organic matter"],
        answer: "PAHs are toxic chemical pollutants formed during incomplete combustion of organic matter, which can contaminate foods subjected to direct-fire drying or intense grilling."
    },
    {
        keywords: ["what is benzo[a]pyrene", "potent mutagenic and carcinogenic pah"],
        answer: "Benzo[a]pyrene is a potent mutagenic and carcinogenic PAH used as a marker compound to evaluate overall PAH contamination in edible oils and smoked products."
    },
    {
        keywords: ["chloropropanols mcpd found in processed oils", "high-temperature deodorization"],
        answer: "3-MCPD and glycidyl fatty acid esters are industrial process contaminants generated during the high-temperature deodorization of refined vegetable and palm oils."
    },
    {
        keywords: ["glycidyl esters considered genotoxic", "genotoxic carcinogens"],
        answer: "Yes, toxicological evaluations indicate that glycidyl fatty acid esters are genotoxic carcinogens, requiring strict limits in infant formula and edible oils."
    },
    {
        keywords: ["what are processing contaminants", "form during industrial manufacturing"],
        answer: "Processing contaminants are substances that do not naturally occur in raw ingredients but form during industrial manufacturing, storage, or cooking processes."
    },
    {
        keywords: ["pesticide residues enter packaged agricultural products", "pre-harvest withholding periods"],
        answer: "Residues remain on raw crops following agricultural pest management if pre-harvest withholding periods are ignored or application limits are exceeded."
    },
    {
        keywords: ["what is organophosphate toxicity", "inhibit acetylcholinesterase enzyme activity"],
        answer: "Organophosphate pesticides inhibit acetylcholinesterase enzyme activity, leading to acetylcholine accumulation and acute or chronic neurological disruption."
    },
    {
        keywords: ["persistent organic pollutants pops a concern", "resist environmental degradation"],
        answer: "POPs resist environmental degradation, bioaccumulate in fatty tissues across trophic levels, and persist long-term in global food chains."
    },
    {
        keywords: ["microplastic contamination in packaged items", "minute plastic fragments"],
        answer: "Microplastics are minute plastic fragments (<5mm) entering food products via contaminated water sources, industrial processing lines, or plastic packaging degradation."
    },
    {
        keywords: ["heavy metal toxicity be mitigated through diet", "adequate intake of essential minerals"],
        answer: "Adequate intake of essential minerals (such as calcium, iron, and zinc) and antioxidant-rich foods can competitively inhibit heavy metal absorption in the gut."
    },
    {
        keywords: ["nutriscan ai verify chemical contamination safety", "fssai and global toxicology thresholds"],
        answer: "The app maintains baseline compliance data aligned with FSSAI and global toxicology thresholds, flagging high-risk industrial markers in complex product evaluations."
    },

    // Biochemical Pathways & Additive Interactions (Q226 - Q250)
    {
        keywords: ["biochemical definition of an additive", "non-nutritive substances intentionally added"],
        answer: "Food additives are non-nutritive substances intentionally added to food to preserve quality, enhance flavor, modify texture, or improve visual presentation."
    },
    {
        keywords: ["synthetic azo dyes interact with biological systems", "cleaved by intestinal microflora into aromatic amines"],
        answer: "Azo dyes contain an azo functional group that can be cleaved by intestinal microflora into aromatic amines, which undergo hepatic metabolic activation."
    },
    {
        keywords: ["mechanism of action of sodium benzoate preservation", "undissociated benzoic acid diffuses across microbial cell membranes"],
        answer: "Undissociated benzoic acid diffuses across microbial cell membranes, lowering intracellular pH and disrupting microbial oxidative phosphorylation and nutrient uptake."
    },
    {
        keywords: ["osmotic pressure preservation work in high-sugar jams", "hypertonic environment"],
        answer: "High concentrations of free sugars create a hypertonic environment that draws water out of microbial cells via osmosis, preventing spoilage without chemical preservatives."
    },
    {
        keywords: ["lipid peroxidation in packaged snack items", "oxidative degradation chain reaction"],
        answer: "Lipid peroxidation is an oxidative degradation chain reaction where free radicals attack polyunsaturated fatty acids, producing rancid odors, toxic aldehydes, and nutritional loss."
    },
    {
        keywords: ["synthetic antioxidants like bha and bht stop rancidity", "free radical scavengers"],
        answer: "BHA and BHT act as free radical scavengers that donate hydrogen atoms to lipid radicals, terminating the oxidation chain reaction."
    },
    {
        keywords: ["role of chelating agents in preventing oxidation", "bind transition metal ions"],
        answer: "Chelating agents bind transition metal ions (like iron and copper) that normally catalyze free-radical formation, stabilizing food color and flavor."
    },
    {
        keywords: ["emulsifiers lower interfacial tension", "hydrophilic and lipophilic ends"],
        answer: "Emulsifiers possess both hydrophilic (water-loving) and lipophilic (fat-loving) ends, positioning themselves at oil-water boundaries to stabilize emulsions."
    },
    {
        keywords: ["starch retrogradation in baked goods", "recrystallization of gelatinized amylose"],
        answer: "Starch retrogradation is the recrystallization of gelatinized amylose and amylopectin molecules over time, leading to bread staling and firming textures."
    },
    {
        keywords: ["humectants retain moisture in confectionery", "multiple hydroxyl groups"],
        answer: "Humectants contain multiple hydroxyl groups that form hydrogen bonds with water molecules, reducing vapor pressure and preventing moisture loss."
    },
    {
        keywords: ["maillard reaction cascade", "non-enzymatic reactions between reducing sugars and amino acids"],
        answer: "It is a complex series of non-enzymatic reactions between reducing sugars and amino acids triggered by heat, generating hundreds of flavor compounds and brown pigments."
    },
    {
        keywords: ["artificial sweeteners trick taste receptors", "bind to human sweet taste receptors"],
        answer: "Artificial sweeteners bind to human sweet taste receptors (T1R2/T1R3 heterodimers) with much higher affinity than sucrose, triggering sweet neural signals without metabolic breakdown into glucose."
    },
    {
        keywords: ["metabolic fate of aspartame", "hydrolyzes in the gastrointestinal tract"],
        answer: "Aspartame hydrolyzes in the gastrointestinal tract into aspartic acid, phenylalanine, and methanol, which are metabolized through normal physiological pathways."
    },
    {
        keywords: ["products containing aspartame carry a phenylketonuria warning", "cannot metabolize phenylalanine"],
        answer: "Individuals with the genetic disorder phenylketonuria (PKU) cannot metabolize phenylalanine, leading to toxic accumulation and neurological damage."
    },
    {
        keywords: ["caramel color e150a-d produced", "controlled thermal treatment of food-grade carbohydrates"],
        answer: "Caramel color is manufactured by the controlled thermal treatment of food-grade carbohydrates, sometimes using ammonium compounds (classes III and IV) that generate trace process byproducts like 4-MEI."
    },
    {
        keywords: ["what is 4-methylimidazole 4-mei", "chemical byproduct formed during the synthesis"],
        answer: "4-MEI is a chemical byproduct formed during the synthesis of ammonia-process caramel colorings, monitored closely due to potential carcinogenicity concerns."
    },
    {
        keywords: ["microbial transglutaminase enzymes function in processed meats", "meat glue"],
        answer: "Transglutaminase acts as \"meat glue\" by catalyzing cross-links between glutamine and lysine amino acid residues, binding protein fragments together."
    },
    {
        keywords: ["biochemical effect of excessive sodium on vascular endothelial cells", "endothelial stiffness"],
        answer: "High intracellular sodium concentrations induce endothelial stiffness, reduce nitric oxide bioavailability, and impair normal vasodilation, elevating blood pressure."
    },
    {
        keywords: ["excess fructose metabolism differ from glucose metabolism", "bypasses primary regulatory checkpoints"],
        answer: "Unlike glucose, fructose bypasses primary regulatory checkpoints (phosphofructokinase) in the liver, leading directly to de novo lipogenesis and triglyceride production."
    },
    {
        keywords: ["role of dietary fibers as prebiotics", "fermentation by beneficial microbiota"],
        answer: "Soluble prebiotic fibers resist human enzymatic digestion, reaching the colon where they undergo fermentation by beneficial microbiota into short-chain fatty acids (SCFAs)."
    },
    {
        keywords: ["short-chain fatty acids scfas beneficial", "nourish colonocytes, regulate inflammation"],
        answer: "SCFAs like acetate, propionate, and butyrate nourish colonocytes, regulate inflammation, support metabolic health, and enhance intestinal barrier integrity."
    },
    {
        keywords: ["food additives affect gut permeability leaky gut", "disrupt the intestinal mucus layer"],
        answer: "Certain emulsifiers and high-sugar diets can disrupt the intestinal mucus layer and tight junction proteins (like zonula occludens-1), potentially increasing gut permeability."
    },
    {
        keywords: ["physiological impact of phosphoric acid in colas", "elevated dietary acid load"],
        answer: "High intake of phosphoric acid contributes to an elevated dietary acid load, which can impact calcium homeostasis and bone mineral density over time."
    },
    {
        keywords: ["flavor enhancers like msg stimulate appetite", "glutamate receptors in the tongue umami"],
        answer: "MSG stimulates glutamate receptors in the tongue (umami) and brain regions associated with reward and appetite, potentially increasing food intake palatability."
    },
    {
        keywords: ["client-side data parsing analyze these complex ingredient strings", "tokenizes ingredient arrays"],
        answer: "NutriScan AI's JavaScript engine tokenizes ingredient arrays, searches for chemical dictionaries and E-numbers, and computes structural processing safety scores in real time."
    },

    // Regulatory Thresholds & Compliance Benchmarks (Q251 - Q275)
    {
        keywords: ["primary role of the fssai in food safety", "science-based standards for food articles"],
        answer: "FSSAI establishes science-based standards for food articles and regulates their manufacture, storage, distribution, sale, and import to ensure human safety."
    },
    {
        keywords: ["front-of-pack labeling fopl systems designed", "simplified color-coded or letter-graded indicators"],
        answer: "FOPL systems use simplified color-coded or letter-graded indicators to summarize nutritional value, helping consumers identify high-risk components at a glance."
    },
    {
        keywords: ["criteria define an ultra-processed food under nova standards", "industrial formulations made mostly from substances"],
        answer: "NOVA classifies foods as ultra-processed if they incorporate industrial formulations made mostly from substances derived from foods, additives, and cosmetic reshaping."
    },
    {
        keywords: ["nutri-score model penalize saturated fats", "links high dietary intake directly to cardiovascular disease risk"],
        answer: "Saturated fats are penalized because robust epidemiological evidence links high dietary intake directly to cardiovascular disease risk."
    },
    {
        keywords: ["nutri-score reward positive nutrients", "percentages of fruits, vegetables, nuts"],
        answer: "Positive points are awarded for percentages of fruits, vegetables, nuts, legumes, dietary fiber, and protein to promote nutrient-dense selections."
    },
    {
        keywords: ["fssai threshold for high sugar in beverages", "exceeding 5.0g per 100ml"],
        answer: "FSSAI and public health frameworks flag beverage sugar concentrations exceeding 5.0g per 100mL as moderate-to-high risk depending on formulation guidelines."
    },
    {
        keywords: ["sodium risk categorized per 100g of solid food", "less than 0.12g of sodium"],
        answer: "Solid foods containing less than 0.12g of sodium per 100g are low risk, while values exceeding 0.60g trigger high-risk hypertension warning labels."
    },
    {
        keywords: ["legal definition of food adulteration", "inferior, impure, substituted"],
        answer: "Food adulteration occurs when an article of food is inferior, impure, substituted, contains toxic additives, or fails to meet mandatory statutory standards."
    },
    {
        keywords: ["infant foods subjected to stricter additive regulations", "zero-tolerance or heavily restricted additive limits"],
        answer: "Yes, infant and baby foods face zero-tolerance or heavily restricted additive limits due to developing metabolic pathways and immature elimination organs."
    },
    {
        keywords: ["what is the codex alimentarius", "collection of internationally recognized standards"],
        answer: "Codex Alimentarius is a collection of internationally recognized standards, codes of practice, and guidelines developed by the FAO and WHO to protect consumer health."
    },
    {
        keywords: ["national standards align with codex guidelines", "fssai adapt codex standards"],
        answer: "National food safety authorities like FSSAI adapt Codex standards to fit regional dietary habits, public health priorities, and local manufacturing capabilities."
    },
    {
        keywords: ["triggers an automatic recall of packaged food products", "undisclosed major allergens, microbial contamination"],
        answer: "Undisclosed major allergens, microbial contamination (e.g., Salmonella), lethal toxin detection, or severe labeling non-compliance trigger immediate product recalls."
    },
    {
        keywords: ["mandatory allergen declarations critical on labels", "prevent accidental ingestion"],
        answer: "Clear allergen declarations prevent accidental ingestion by sensitive individuals, averting life-threatening anaphylactic shock or severe immune reactions."
    },
    {
        keywords: ["statutory requirement for nutritional panel accuracy", "match laboratory analytical results"],
        answer: "Declared nutritional values on packaging must match laboratory analytical results within established statistical tolerance limits set by regulators."
    },
    {
        keywords: ["health claims get verified by regulatory bodies", "robust scientific substantiation"],
        answer: "Health claims (such as \"supports immunity\" or \"lowers cholesterol\") require robust scientific substantiation and prior regulatory approval before commercial use."
    },
    {
        keywords: ["difference between a nutrient content claim and a health claim", "describe the level of a nutrient"],
        answer: "Content claims describe the level of a nutrient (e.g., \"high in fiber\"), whereas health claims imply a relationship between a food substance and a health condition."
    },
    {
        keywords: ["genetically modified foods subjected to mandatory safety assessments", "evaluate potential allergenicity"],
        answer: "GM assessments evaluate potential allergenicity, gene stability, unintended toxic metabolic changes, and horizontal gene transfer risks before market release."
    },
    {
        keywords: ["maximum residue limits mrls for veterinary drugs", "permitted in meat, milk, and eggs"],
        answer: "MRLs establish the maximum legal concentration of veterinary drug residues (such as antibiotics or hormones) permitted in meat, milk, and eggs."
    },
    {
        keywords: ["antibiotic resistance linked to agricultural animal feed", "low-dose, long-term administration"],
        answer: "Low-dose, long-term administration of antibiotics in livestock feed promotes the selection and spread of resistant bacterial strains across food chains."
    },
    {
        keywords: ["expiration and use-by dates play in safety", "perishable foods may harbor dangerous pathogens"],
        answer: "\"Use-by\" dates indicate food safety deadlines past which perishable foods may harbor dangerous pathogens, whereas \"best-before\" dates refer to optimal quality."
    },
    {
        keywords: ["irradiation preservation affect food safety", "controlled ionizing radiation"],
        answer: "Food irradiation uses controlled ionizing radiation to destroy pathogenic bacteria, insects, and molds without significantly altering food temperature or chemical structure."
    },
    {
        keywords: ["modified atmosphere packaging map", "tailored gas mixtures nitrogen, carbon dioxide"],
        answer: "MAP replaces internal package air with tailored gas mixtures (nitrogen, carbon dioxide, and oxygen) to inhibit microbial respiration and delay oxidation."
    },
    {
        keywords: ["audit trails essential in food manufacturing", "raw ingredients can be tracked forward and backward"],
        answer: "Traceability audit trails ensure that raw ingredients can be tracked forward and backward through supply chains during safety investigations or outbreak tracing."
    },
    {
        keywords: ["consumer-facing digital tools support regulatory transparency", "decode complex statutory disclosures"],
        answer: "Digital platforms like NutriScan AI decode complex statutory disclosures into clear, actionable health grades, empowering consumers to enforce transparency at the point of sale."
    },
    {
        keywords: ["future outlook for ai-driven food safety inspection", "integrate real-time optical barcode/ocr scanning"],
        answer: "Future developments integrate real-time optical barcode/OCR scanning with decentralized blockchain ledgers and predictive LLM analytics to deliver instant, personalized dietary safety verification worldwide."
    },

    // Specialized Diets, Metabolic Health & Practical Nutrition (Q276 - Q300)
    {
        keywords: ["high sugar intake impact insulin resistance", "floods the liver with fructose and glucose"],
        answer: "Chronic high intake of free sugars floods the liver with fructose and glucose, promoting visceral fat accumulation and desensitizing cellular receptors to insulin over time."
    },
    {
        keywords: ["ketogenic keto diet compatibility check", "very low net carbohydrates"],
        answer: "Keto-friendly products require very low net carbohydrates (<5g per serving), moderate protein, and high healthy fat density to maintain metabolic ketosis."
    },
    {
        keywords: ["individuals with celiac disease consume oats safely", "certified as gluten-free"],
        answer: "Only oats explicitly certified as \"gluten-free\" are safe, as standard commercial oats are frequently cross-contaminated with wheat during harvesting and milling."
    },
    {
        keywords: ["difference between saturated, unsaturated, and trans fats", "single carbon bonds"],
        answer: "Saturated fats have single carbon bonds and are solid at room temperature; unsaturated fats contain double bonds (liquid oils); trans-fats are artificially hydrogenated molecules harmful to heart health."
    },
    {
        keywords: ["dietary sodium impact fluid retention and blood pressure", "increases extracellular fluid volume"],
        answer: "Excess sodium increases extracellular fluid volume and vascular resistance, raising systemic blood pressure and putting strain on cardiovascular structures."
    },
    {
        keywords: ["physiological role of potassium in muscle contraction", "cell membrane potentials"],
        answer: "Potassium ions work alongside sodium across cell membrane potentials to generate electrical impulses required for cardiac rhythm and skeletal muscle contraction."
    },
    {
        keywords: ["ultra-processed foods associated with weight gain", "engineered for hyper-palatability"],
        answer: "UPFs are engineered for hyper-palatability, lack structural fiber satiety cues, and pack high calorie densities, leading to passive overconsumption."
    },
    {
        keywords: ["impact of artificial sweeteners on gut microbiota", "subtly alter the composition"],
        answer: "Emerging studies suggest that certain artificial sweeteners can subtly alter the composition and metabolic activity of gut bacterial populations in sensitive individuals."
    },
    {
        keywords: ["food additives trigger migraine headaches", "vasoactive triggers that induce neurovascular changes"],
        answer: "Additives like MSG (E621), artificial sweeteners, nitrates, and sulfites act as vasoactive triggers that induce neurovascular changes resulting in migraines."
    },
    {
        keywords: ["packaged food consumption impact skin health acne", "insulin-like growth factors igf-1"],
        answer: "High-glycemic-index foods and dairy-heavy ultra-processed formulations can spike insulin-like growth factors (IGF-1), stimulating sebum production and exacerbating acne."
    },
    {
        keywords: ["importance of hydration when increasing dietary fiber", "concurrent high water consumption"],
        answer: "Increasing fiber intake requires concurrent high water consumption; otherwise, dry fiber can cause severe constipation, gas, and intestinal blockage."
    },
    {
        keywords: ["high-fructose corn syrup contribute to metabolic syndrome", "hepatic de novo lipogenesis"],
        answer: "HFCS consumption promotes hepatic de novo lipogenesis, elevating triglycerides, lowering HDL cholesterol, and contributing to abdominal obesity."
    },
    {
        keywords: ["flavonoid antioxidants and where are they found", "bioactive polyphenol compounds"],
        answer: "Flavonoids are bioactive polyphenol compounds found in dark chocolate, berries, tea, and green vegetables that help neutralize oxidative cell stress."
    },
    {
        keywords: ["food labels handle hidden sources of sugar", "list multiple forms of sugar separately"],
        answer: "Manufacturers may list multiple forms of sugar (sucrose, glucose syrup, maltose, fruit juice concentrate) separately in ingredients to keep cane sugar lower down the ingredient list."
    },
    {
        keywords: ["significance of the clean label movement", "simple, recognizable ingredients"],
        answer: "The Clean Label movement drives consumer demand for simple, recognizable ingredients, free from artificial additives, chemical preservatives, and synthetic colorings."
    },
    {
        keywords: ["processing level affect micronutrient bioavailability", "strips away outer seed coats"],
        answer: "Heavy industrial refining strips away outer seed coats rich in B-vitamins, iron, and minerals, often requiring synthetic fortification to restore baseline nutritional values."
    },
    {
        keywords: ["difference between enriched and fortified foods", "nutrients added back that were lost"],
        answer: "Enriched foods have nutrients added back that were lost during processing, whereas fortified foods have nutrients added that were not originally present in the food."
    },
    {
        keywords: ["pregnant women consume foods containing unpasteurized cheeses", "high risks of listeria monocytogenes"],
        answer: "No, unpasteurized dairy items carry high risks of *Listeria monocytogenes* infection, which can cause severe pregnancy complications and fetal harm."
    },
    {
        keywords: ["nitrates in processed meats linked to health risks", "react with amines to form carcinogenic n-nitrosamines"],
        answer: "During high-heat cooking or gastric digestion, nitrites react with amines to form carcinogenic N-nitrosamines."
    },
    {
        keywords: ["food intolerances differ from true food allergies", "ige-mediated immune system response"],
        answer: "Food allergies involve an IgE-mediated immune system response that can trigger anaphylaxis, whereas intolerances (like lactose) are non-immune digestive enzyme deficiencies."
    },
    {
        keywords: ["role of dietary chromium in glucose metabolism", "potentiates insulin action"],
        answer: "Chromium is an essential trace mineral that potentiates insulin action and supports normal carbohydrate and lipid metabolism."
    },
    {
        keywords: ["magnesium deficiency relate to processed food diets", "strips away up to 80% of natural magnesium"],
        answer: "Refining whole grains strips away up to 80% of natural magnesium content, contributing to widespread dietary magnesium shortfalls in modern populations."
    },
    {
        keywords: ["what are phytochemicals", "non-nutrient chemical compounds produced by plants"],
        answer: "Phytochemicals are non-nutrient chemical compounds produced by plants that exhibit protective antioxidant and anti-inflammatory biological properties."
    },
    {
        keywords: ["food emulsifiers impact metabolic inflammation", "alter gut bacterial composition"],
        answer: "Certain synthetic emulsifiers can alter gut bacterial composition and compromise mucosal barriers, triggering low-grade systemic inflammation."
    },
    {
        keywords: ["digital scanning apps help reduce lifestyle-related chronic diseases", "instant, transparent visibility into hidden sugars"],
        answer: "Yes, by providing instant, transparent visibility into hidden sugars, additives, and nutritional grades at the point of sale, digital tools empower consumers to make healthier lifestyle choices."
    },

    // Product-Specific Q&A: Beverages & Soft Drinks (Q301 - Q320)
    {
        keywords: ["calorie breakdown in a 250ml can of coca-cola", "105 kcal"],
        answer: "A 250mL standard Coca-Cola contains approximately 105 kcal, completely driven by 26.5g of added sugar, resulting in a Nutri-Score of E and NOVA Group 4."
    },
    {
        keywords: ["sugar in a 500ml bottle of pepsi", "52.5g of total sugar"],
        answer: "A 500mL Pepsi contains roughly 52.5g of total sugar (about 10.5g per 100mL), which drastically exceeds the FSSAI high-risk daily threshold per serving."
    },
    {
        keywords: ["red bull energy drink contain taurine and caffeine", "80mg of caffeine, 1000mg of taurine"],
        answer: "Yes, a standard 250mL Red Bull contains 80mg of caffeine, 1000mg of taurine, and 27g of sugar, categorizing it under NOVA Group 4."
    },
    {
        keywords: ["nutritional profile of amul taaza toned milk", "58 kcal, 3.0g of protein"],
        answer: "Amul Taaza Toned Milk provides 58 kcal, 3.0g of protein, 4.7g of carbohydrates (lactose), and 3.0g of fat per 100mL, earning a high Nutri-Score of B."
    },
    {
        keywords: ["sodium in a 300ml bottle of gatorade", "150mg of sodium"],
        answer: "Gatorade contains approximately 150mg of sodium per 300mL alongside 18g of added sucrose and dextrose to facilitate rapid electrolyte replenishment during physical exertion."
    },
    {
        keywords: ["macros in real fruit power mixed fruit juice", "58 kcal, 14.2g of carbohydrates"],
        answer: "Per 100mL, Real Mixed Fruit juice contains roughly 58 kcal, 14.2g of carbohydrates (entirely free fruit sugars), and 0.1g of protein, yielding a Nutri-Score of D."
    },
    {
        keywords: ["tropicana 100% orange juice contain added sugar", "no added refined sugar"],
        answer: "Tropicana 100% Orange Juice contains no added refined sugar, but its natural fruit sugars still register at 10.5g per 100mL, placing it in NOVA Group 3."
    },
    {
        keywords: ["calorie content of a 330ml can of sprite", "132 kcal and 33g of sugar"],
        answer: "A 330mL Sprite contains 132 kcal and 33g of sugar, featuring carbonated water, high-fructose syrup, and citric/malic acidulants."
    },
    {
        keywords: ["fat in paper boat aam panna", "virtually 0g of fat"],
        answer: "Paper Boat Aam Panna has virtually 0g of fat, but contains about 14g of sugar per 100mL derived from raw mango pulp, water, and cane sugar."
    },
    {
        keywords: ["nutritional breakdown of nescafe cold coffee tetra pack", "80 kcal"],
        answer: "Nescafe ready-to-drink cold coffee contains approximately 80 kcal, 2.5g of fat, 3.0g of protein, and 11g of sugar per 100mL due to added milk solids and sugar."
    },
    {
        keywords: ["monster energy green contain b-vitamins", "b-group vitamins b3, b6, b12"],
        answer: "Yes, Monster Energy is fortified with B-group vitamins (B3, B6, B12), alongside 54g of total sugars and 160mg of caffeine per 500mL can."
    },
    {
        keywords: ["sodium and sugar level in schweppes indian tonic water", "36 kcal and 9g of sugar"],
        answer: "Tonic water contains about 36 kcal and 9g of sugar per 100mL, flavored with natural quinine and sweetened with high-fructose corn syrup or cane sugar."
    },
    {
        keywords: ["calories are in a 200ml tetra pack of frooti", "92 kcal and 23g of total sugars"],
        answer: "A 200mL Frooti pack contains roughly 92 kcal and 23g of total sugars, falling under NOVA Group 4 (ultra-processed beverage)."
    },
    {
        keywords: ["macros in mother dairy full cream milk", "86 kcal, 3.2g of protein"],
        answer: "Mother Dairy Full Cream Milk provides 86 kcal, 3.2g of protein, 4.8g of carbohydrates, and 6.0g of fat, resulting in a Nutri-Score of C."
    },
    {
        keywords: ["bisleri limonata contain any real lemon juice", "minor fruit juice concentrate"],
        answer: "Bisleri Limonata contains minor fruit juice concentrate (<5%), water, sugar, acidity regulators, and permitted flavors, yielding a Nutri-Score of E."
    },
    {
        keywords: ["sugar content of mountain dew per 250ml", "30g of sugar"],
        answer: "Mountain Dew contains 30g of sugar per 250mL, backed by high caffeine and citrus flavorings, classifying it as a high-sugar beverage."
    },
    {
        keywords: ["protein in a 200ml bottle of yakult", "2.5g of protein, 15g of carbohydrates"],
        answer: "Yakult contains 2.5g of protein, 15g of carbohydrates (sugars), and 50 kcal per 80mL–100mL bottle, enriched with billions of *Lactobacillus casei* Shirota strains."
    },
    {
        keywords: ["nutritional content of patanjali cow ghee", "900 kcal and 100g of pure milk fats"],
        answer: "Patanjali Cow Ghee delivers 900 kcal and 100g of pure milk fats (saturated and monounsaturated lipids), serving as a concentrated NOVA Group 2 culinary ingredient."
    },
    {
        keywords: ["does 7up contain caffeine", "caffeine-free lemon-lime carbonated soft drink"],
        answer: "No, 7Up is a caffeine-free lemon-lime carbonated soft drink containing carbonated water, sugar, and citric acid, with roughly 42 kcal per 100mL."
    },
    {
        keywords: ["nutritional values in dabur real activ cranberry juice", "44 kcal, 10.5g of carbohydrates"],
        answer: "Dabur Real Activ Cranberry contains approximately 44 kcal, 10.5g of carbohydrates, and 0g of fat per 100mL, featuring cranberry juice concentrate and water."
    },

    // Product-Specific Q&A: Instant Noodles & Savory Snacks (Q321 - Q340)
    {
        keywords: ["exact calorie count in standard 70g packet of maggi", "310 kcal, 13g of fat"],
        answer: "A standard 70g Maggi packet contains roughly 310 kcal, 13g of fat, 41g of carbohydrates, and 7.5g of protein, earning a Nutri-Score of D."
    },
    {
        keywords: ["sodium in one packet of top ramen curry noodles", "950mg to 1100mg of sodium"],
        answer: "Top Ramen Curry noodles contain approximately 950mg to 1100mg of sodium per cooked portion, heavily exceeding the FSSAI high-risk threshold."
    },
    {
        keywords: ["macros in a 75g packet of ching's secret schezwan", "340 kcal, 14.5g of fat"],
        answer: "Ching's Schezwan noodles provide approximately 340 kcal, 14.5g of fat, 45g of carbs, and high sodium content derived from chili paste and MSG (E621)."
    },
    {
        keywords: ["sunfeast yippee noodles contain whole wheat", "refined wheat flour maida base"],
        answer: "Sunfeast Yippee! uses refined wheat flour (maida) base with vegetable oils, seasoning, and permitted food additives, falling under NOVA Group 4."
    },
    {
        keywords: ["fat breakdown in a 50g bag of lays classic salted chips", "17g of total fat"],
        answer: "A 50g bag of Lays Classic chips contains 17g of total fat (of which ~7.5g is saturated fat) and 270 kcal, yielding a Nutri-Score of E."
    },
    {
        keywords: ["sodium in a 40g packet of kurkure masala munch", "320mg of sodium"],
        answer: "Kurkure Masala Munch contains roughly 320mg of sodium per 40g serving, along with corn meal, edible vegetable oil, and spice condiments."
    },
    {
        keywords: ["nutritional content of haldiram's bhujia sev", "565 kcal, 36g of fat"],
        answer: "Haldiram's Bhujia Sev provides 565 kcal, 36g of fat, 45g of carbohydrates, and 14g of protein, driven by tepary bean flour, chickpea flour, and vegetable oil."
    },
    {
        keywords: ["bingo mad angles achari masti contain trans fats", "zero industrial trans-fats"],
        answer: "Bingo! Mad Angles are processed under strict FSSAI limits targeting zero industrial trans-fats, though total saturated fat content remains high at over 15g per 100g."
    },
    {
        keywords: ["macros in a 50g pack of balaji wafers cream & onion", "275 kcal, 16g of fat"],
        answer: "Balaji Cream & Onion chips contain approximately 275 kcal, 16g of fat, 28g of carbs, and 3g of protein per 50g serving."
    },
    {
        keywords: ["protein in a 100g pack of act popcorn butter delight", "8g of protein and 12g of dietary fiber"],
        answer: "Act Microwave Popcorn provides about 8g of protein and 12g of dietary fiber per 100g unpopped, but contains nearly 30g of palm-based saturated fats."
    },
    {
        keywords: ["calorie density of mtr 3 minute poha", "390 kcal per 100g dry weight"],
        answer: "MTR Instant Poha provides roughly 390 kcal per 100g dry weight, composed of flattened rice flakes, peanuts, vegetable oil, and mustard seeds."
    },
    {
        keywords: ["knorr chinese manchurian soup mix have high sodium", "upwards of 800mg of sodium"],
        answer: "Yes, a single prepared bowl of Knorr soup can contain upwards of 800mg of sodium due to dehydrated vegetable stocks and salt content."
    },
    {
        keywords: ["nutritional value of too yumm karare munchy masala", "410 kcal per 100g"],
        answer: "Baked variant Too Yumm! Karare provides approximately 410 kcal per 100g—lower in fat than fried chips—though sodium and refined starch levels remain elevated."
    },
    {
        keywords: ["sugar in 100g of bikano aloo bhujia", "less than 1g of sugar"],
        answer: "Bikano Aloo Bhujia contains less than 1g of sugar, but high total fat (38g) and sodium (900mg) per 100g, earning a Nutri-Score of E."
    },
    {
        keywords: ["macros in a 40g packet of uncle chipps spicy treat", "216 kcal, 13.5g of fat"],
        answer: "Uncle Chipps contains roughly 216 kcal, 13.5g of fat, and 21g of carbohydrates per 40g portion."
    },
    {
        keywords: ["saffola masala oats contain real vegetables", "70%+ rolled oats mixed with real dried carrots"],
        answer: "Saffola Masala Oats consist of 70%+ rolled oats mixed with real dried carrots, peas, and French beans, providing 3.5g of dietary fiber per serving."
    },
    {
        keywords: ["calorie count of standard 60g packet of wai wai chicken", "280 kcal per 60g packet"],
        answer: "Wai Wai noodles provide approximately 280 kcal per 60g packet, complete with pre-seasoned oil and spice sachets."
    },
    {
        keywords: ["fat in a 100g pack of cornitos nachos cheese & herbs", "480 kcal and 22g of fat"],
        answer: "Cornitos Cheese & Herbs nachos contain 480 kcal and 22g of fat per 100g, manufactured from processed corn masa flour and seasoning oils."
    },
    {
        keywords: ["nutritional values in smith & jones ginger garlic paste", "65 kcal, 1.5g of fat"],
        answer: "Ginger garlic paste contains roughly 65 kcal, 1.5g of fat, 12g of carbs, and high sodium content due to added acetic acid and salt preservatives per 100g."
    },
    {
        keywords: ["real thai sweet chili sauce have high sugar", "45g to 50g of sugar per 100g"],
        answer: "Yes, Real Thai Sweet Chili Sauce contains approximately 45g to 50g of sugar per 100g, functioning primarily as a high-calorie condiment."
    },

    // Product-Specific Q&A: Chocolates, Confectionery & Biscuits (Q341 - Q365)
    {
        keywords: ["calorie breakdown in a 40g cadbury dairy milk", "214 kcal, 12.2g of fat"],
        answer: "A 40g Cadbury Dairy Milk bar contains 214 kcal, 12.2g of fat, 23.4g of sugar, and 2.9g of protein, resulting in a Nutri-Score of E."
    },
    {
        keywords: ["sugar in a 45g nestlé kitkat finger pack", "225 kcal, 11.5g of fat"],
        answer: "A KitKat bar contains roughly 225 kcal, 11.5g of fat, and 22g of sugar, combining wafer layers with milk chocolate coating."
    },
    {
        keywords: ["macros in 100g of cadbury bournville 70%", "535 kcal, 33g of fat"],
        answer: "Bournville Dark Chocolate delivers 535 kcal, 33g of fat, 46g of carbohydrates (with lower sugar than milk chocolate), and 7g of protein per 100g."
    },
    {
        keywords: ["ferrero rocher have high saturated fat", "about 42g of fat per 100g"],
        answer: "Yes, Ferrero Rocher contains about 42g of fat per 100g (heavy on hazelnut fats and palm oil) alongside 40g of sugar, yielding 566 kcal per 100g."
    },
    {
        keywords: ["nutritional content of a 50g snickers bar", "245 kcal, 12g of fat"],
        answer: "A 50g Snickers bar provides 245 kcal, 12g of fat, 27g of sugar (from caramel and nougat), and 4g of protein from roasted peanuts."
    },
    {
        keywords: ["sugar in 100g of parle-g glucose biscuits", "about 23g of sugar per 100g"],
        answer: "Parle-G biscuits contain about 23g of sugar per 100g, accompanied by 440 kcal, 12g of fat, and refined wheat flour base."
    },
    {
        keywords: ["macros in a 100g pack of britannia marie gold", "416 kcal, 8.5g of fat"],
        answer: "Britannia Marie Gold provides 416 kcal, 8.5g of fat, 76g of carbohydrates, and 7.5g of protein per 100g, marketed as a low-fat tea biscuit."
    },
    {
        keywords: ["good day cashew cookies contain trans fats", "zero industrial trans-fats"],
        answer: "Good Day Cashew cookies contain 0g of industrial trans fats under FSSAI compliance, but maintain high saturated fats (10g) and sugar (28g) per 100g."
    },
    {
        keywords: ["calorie count in a 100g pack of dark fantasy", "roughly 500 kcal, 24g of fat"],
        answer: "Dark Fantasy biscuits provide roughly 500 kcal, 24g of fat, and 35g of sugar per 100g due to their rich chocolate cream filling."
    },
    {
        keywords: ["protein in 100g of nutrichoice digestive biscuits", "about 8g of protein and 6g of dietary fiber"],
        answer: "NutriChoice Digestive biscuits deliver about 8g of protein and 6g of dietary fiber per 100g, though total sugar and palm oil content must be factored in."
    },
    {
        keywords: ["nutritional values in a 50g mars chocolate bar", "225 kcal, 8.6g of fat"],
        answer: "A 50g Mars bar contains 225 kcal, 8.6g of fat (3.8g saturated), 35g of sugar, and 2.1g of protein."
    },
    {
        keywords: ["cadbury 5 star contain caramel and nougat", "standard 40g 5 star bar provides 187 kcal"],
        answer: "Yes, a standard 40g 5 Star bar provides 187 kcal, 8.8g of fat, and 23g of sugar, composed of soft caramel and milk chocolate."
    },
    {
        keywords: ["fat content in 100g of oreo original sandwich cookies", "480 kcal, 20g of fat"],
        answer: "Oreo cookies contain 480 kcal, 20g of fat, 68g of carbohydrates (with 38g of sugar), and 4.5g of protein per 100g."
    },
    {
        keywords: ["sugar in a 34g packet of cadbury gems", "roughly 165 kcal and 20g of sugar"],
        answer: "Cadbury Gems contain roughly 165 kcal and 20g of sugar per 34g pack, featuring milk chocolate buttons coated in colored sugar shells."
    },
    {
        keywords: ["macros in a 50g toblerone swiss milk chocolate", "535 kcal, 29.5g of fat"],
        answer: "Toblerone provides 535 kcal, 29.5g of fat, 60.5g of sugar (honey and almond nougat), and 5.6g of protein per 100g."
    },
    {
        keywords: ["priyagold smooth milk biscuits contain palm oil", "refined wheat flour and edible vegetable oils"],
        answer: "Yes, Priyagold biscuits use refined wheat flour and edible vegetable oils/palm oil, yielding about 450 kcal per 100g."
    },
    {
        keywords: ["calorie count of a standard 30g munch chocolate", "approximately 150 kcal, 7.5g of fat"],
        answer: "A Nestle Munch wafer bar contains approximately 150 kcal, 7.5g of fat, and 18g of sugar per 30g bar."
    },
    {
        keywords: ["sodium in 100g of unibic choc chip cookies", "around 300mg of sodium per 100g"],
        answer: "Unibic Choc Chip cookies contain around 300mg of sodium per 100g alongside 510 kcal and 26g of fat."
    },
    {
        keywords: ["nutritional values in a 45g bounty milk chocolate", "486 kcal per 100g"],
        answer: "Bounty contains 486 kcal per 100g (roughly 220 kcal per 45g bar), featuring a moist coconut filling coated in milk chocolate."
    },
    {
        keywords: ["amul dark chocolate 90% have very low sugar", "only about 7g to 8g of sugar per 100g"],
        answer: "Yes, Amul 90% Dark Chocolate contains only about 7g to 8g of sugar per 100g, delivering 592 kcal driven entirely by pure cocoa solids and cocoa butter fats."
    },
    {
        keywords: ["calorie density of 100g of parle hide & seek cookies", "roughly 495 kcal, 22g of fat"],
        answer: "Parle Hide & Seek cookies provide roughly 495 kcal, 22g of fat, and 64g of carbohydrates per 100g."
    },
    {
        keywords: ["protein in 100g of nutella hazelnut spread", "6.3g of protein, 30.9g of fat"],
        answer: "Nutella contains 6.3g of protein, 30.9g of fat, and 57.5g of sugar per 100g, with sugar and palm oil forming its primary bulk ingredients."
    },
    {
        keywords: ["macros in a 50g milky bar white chocolate", "roughly 268 kcal, 15.5g of fat"],
        answer: "Milky Bar provides roughly 268 kcal, 15.5g of fat, and 28g of sugar per 50g bar, manufactured from milk solids, sugar, and cocoa butter."
    },
    {
        keywords: ["patanjali doodh biscuit contain milk solids", "wheat flour, sugar, hydrogenated vegetable oils"],
        answer: "Yes, Patanjali Doodh Biscuits incorporate wheat flour, sugar, hydrogenated vegetable oils, and milk solids, providing about 460 kcal per 100g."
    },
    {
        keywords: ["sugar content in 100g of hersheys kisses", "approximately 52g to 55g of sugar per 100g"],
        answer: "Hershey's Kisses contain approximately 52g to 55g of sugar per 100g, alongside 530 kcal and 30g of total fats."
    },

    // Product-Specific Q&A: Dairy, Spreads & Breakfast Cereals (Q366 - Q385)
    {
        keywords: ["nutritional profile of kelloggs corn flakes per 100g", "357 kcal, 7.5g of protein"],
        answer: "Kellogg's Corn Flakes provide 357 kcal, 7.5g of protein, 84g of carbohydrates (with 8g of sugar), and 0.5g of fat, fortified with iron and vitamins."
    },
    {
        keywords: ["sugar in 100g of kelloggs chocos", "about 30g of sugar per 100g"],
        answer: "Kellogg's Chocos contain about 30g of sugar per 100g, alongside 390 kcal, making it a popular child-targeted cereal with a Nutri-Score of D."
    },
    {
        keywords: ["macros in amul butter per 100g", "717 kcal and 81g of total fats"],
        answer: "Amul Butter delivers 717 kcal and 81g of total fats (primarily saturated milk lipids), 1.5g of protein, and roughly 2.0g of added salt (sodium) per 100g."
    },
    {
        keywords: ["britannia cheese slices contain high sodium", "1100mg and 1300mg of sodium per 100g"],
        answer: "Yes, Britannia Cheese Slices contain between 1100mg and 1300mg of sodium per 100g due to added emulsifying salts and salt curing."
    },
    {
        keywords: ["calorie content of quaker oats per 100g dry weight", "389 kcal, 11g of dietary fiber"],
        answer: "Quaker Rolled Oats provide 389 kcal, 11g of dietary fiber, 13g of protein, and 68g of complex carbohydrates, earning an excellent Nutri-Score of A."
    },
    {
        keywords: ["protein in a 200ml tetra pack of amul lassi", "3.2g of protein, 12.5g of sugar"],
        answer: "Amul Lassi provides 3.2g of protein, 12.5g of sugar, and 1.5g of fat per 100mL (roughly 140 kcal per 200mL pack)."
    },
    {
        keywords: ["nutritional values in epigamia greek yogurt strawberry", "95 kcal, 5.5g of protein"],
        answer: "Epigamia Strawberry Greek Yogurt provides approximately 95 kcal, 5.5g of protein, 2.5g of fat, and 12g of total sugars per 100g serving."
    },
    {
        keywords: ["dabur honey contain any added cane sugar", "100% natural flower nectar"],
        answer: "Pure Dabur Honey contains 100% natural flower nectar with zero added cane sugar, delivering 320 kcal and 82g of natural fruit sugars (fructose/glucose) per 100g."
    },
    {
        keywords: ["fat content in amul fresh cream 25% fat", "238 kcal and 25g of milk fat"],
        answer: "Amul Fresh Cream contains 238 kcal and 25g of milk fat per 100g, functioning as a rich dairy cream for cooking and baking."
    },
    {
        keywords: ["sugar in kissan mixed fruit jam per 100g", "roughly 60g to 65g of sugar per 100g"],
        answer: "Kissan Mixed Fruit Jam contains roughly 60g to 65g of sugar per 100g, derived from cane sugar and mixed fruit pulps, yielding ~270 kcal per 100g."
    },
    {
        keywords: ["macros in saffola fittify peanut butter crunchy", "590 kcal, 28g of protein"],
        answer: "Saffola Peanut Butter delivers about 590 kcal, 28g of protein, 12g of dietary fiber, and 48g of healthy monounsaturated fats per 100g with no added sugar."
    },
    {
        keywords: ["yoga bar dark chocolate cranberry muesli", "75%+ rolled oats, brown rice flakes"],
        answer: "Yes, Yoga Bar Muesli uses 75%+ rolled oats, brown rice flakes, nuts, and seeds, delivering 7g of dietary fiber and 10g of protein per 100g."
    },
    {
        keywords: ["nutritional breakdown of nestlé milkybar moo milk", "75 kcal, 3.1g of protein"],
        answer: "Milkybar Moo provides 75 kcal, 3.1g of protein, 4.6g of fat, and 5.2g of natural lactose sugar per 100mL."
    },
    {
        keywords: ["sodium in 100g of mother dairy paneer", "295 kcal, 18.5g of protein"],
        answer: "Mother Dairy Paneer provides 295 kcal, 18.5g of protein, 24g of fat, and minimal sodium (<50mg) since no salt is added during cottage cheese coagulation."
    },
    {
        keywords: ["macros in a 100g serving of bagrrys muesli", "395 kcal, 10g of protein"],
        answer: "Bagrrys Muesli provides 395 kcal, 10g of protein, 8.5g of fiber, and 22g of total sugars (honey coated) per 100g."
    },
    {
        keywords: ["sofit soy milk chocolate flavor contain calcium", "fortified with calcium carbonate"],
        answer: "Yes, Sofit Soy Milk is fortified with calcium carbonate, providing 3.5g of soy protein and roughly 70 kcal per 100mL."
    },
    {
        keywords: ["calorie density of 100g of amul shrikhand", "365 kcal, 6g of protein"],
        answer: "Amul Shrikhand delivers 365 kcal, 6g of protein, 55g of sugar (strained yogurt blended with sugar and saffron), and 14g of fat per 100g."
    },
    {
        keywords: ["fiber in 100g of soulfull millet muesli", "over 9g of dietary fiber and 11g of protein"],
        answer: "Soulfull Millet Muesli incorporates foxtail and ragi millets, delivering over 9g of dietary fiber and 11g of protein per 100g."
    },
    {
        keywords: ["nutritional values in veeba veg mayonnaise", "620 kcal and 67g of fat"],
        answer: "Veeba Veg Mayo contains 620 kcal and 67g of fat per 100g, formulated from refined soybean oil, water, sugar, and milk solids."
    },
    {
        keywords: ["kissan tomato ketchup contain onion and garlic", "tomato paste, sugar, salt, acetic acid"],
        answer: "Yes, Kissan Ketchup contains tomato paste, sugar, salt, acetic acid, and onion/garlic extract spices, delivering 115 kcal and 25g of sugar per 100g."
    },

    // Product-Specific Q&A: Packaged Meals, Soups & Miscellaneous (Q386 - Q405)
    {
        keywords: ["nutritional breakdown of mtr ready to eat dal makhani", "roughly 135 kcal, 7g of fat"],
        answer: "MTR Dal Makhani provides roughly 135 kcal, 7g of fat, 4.5g of protein, and 12g of carbohydrates, featuring black lentils, butter, and cream."
    },
    {
        keywords: ["sodium in a cup of maggi nutri-licious veg atta", "about 850mg of sodium per serving"],
        answer: "Maggi Atta Noodles contain about 850mg of sodium per serving, combining whole wheat flour noodles with a savory spice tastemaker."
    },
    {
        keywords: ["macros in 100g of ching's secret hot & sour soup", "roughly 310 kcal per 100g dry powder"],
        answer: "Ching's Soup mix provides roughly 310 kcal per 100g dry powder, though a single prepared bowl diluted in water contains about 600mg to 750mg of sodium."
    },
    {
        keywords: ["haldiram's minute khana dal tadka contain ghee", "cooked yellow lentils tempered in refined oil"],
        answer: "Yes, Haldiram's Ready-to-Eat Dal Tadka uses cooked yellow lentils tempered in refined oil and ghee, delivering roughly 110 kcal per 100g."
    },
    {
        keywords: ["calorie count in a packet of nissin cup noodles", "approximately 290 to 320 kcal"],
        answer: "A standard cup of Nissin Cup Noodles contains approximately 290 to 320 kcal, 12g of fat, and 40g of carbohydrates."
    },
    {
        keywords: ["protein in 100g of ching's secret hakka noodles", "roughly 350 kcal, 9g of protein"],
        answer: "Dry Hakka Noodles provide roughly 350 kcal, 9g of protein, 72g of carbohydrates, and 1.5g of fat per 100g."
    },
    {
        keywords: ["nutritional values in kohinoor ready to eat paneer tikka", "approximately 165 kcal, 12g of fat"],
        answer: "Kohinoor Paneer Tikka Masala delivers approximately 165 kcal, 12g of fat, 5g of protein, and 6g of carbohydrates per 100g."
    },
    {
        keywords: ["saffola oodles contain maida", "semolina suji rather than pure maida"],
        answer: "Saffola Oodles are formulated with semolina (suji) rather than pure maida, providing slightly better texture and fiber profiles."
    },
    {
        keywords: ["sodium content in ching's dark soy sauce", "between 3500mg and 5000mg of sodium"],
        answer: "Soy sauce contains between 3500mg and 5000mg of sodium per 100g due to fermented soybean and heavy salt extraction."
    },
    {
        keywords: ["macros in funfoods peanut butter creamy", "585 kcal, 25g of protein"],
        answer: "FunFoods Creamy Peanut Butter delivers 585 kcal, 25g of protein, 50g of fats, and 12g of carbohydrates per 100g."
    },
    {
        keywords: ["mtr rava idli mix contain semolina", "semolina suji, leavening agents"],
        answer: "Yes, MTR Rava Idli mix is based on semolina (suji), leavening agents, cashews, and spices, delivering roughly 370 kcal per 100g dry mix."
    },
    {
        keywords: ["calorie density of 100g of ching's tomato soup", "about 340 kcal per 100g dry mix"],
        answer: "Ching's Tomato Soup dry mix provides about 340 kcal per 100g, yielding a warm, starchy, high-sodium bowl when prepared."
    },
    {
        keywords: ["sugar in 100g of american garden pancake syrup", "roughly 65g of sugar per 100g"],
        answer: "American Garden Pancake Syrup contains roughly 65g of sugar per 100g, manufactured from corn syrup, high-fructose corn syrup, and maple flavorings."
    },
    {
        keywords: ["nutritional values in ching's green chili sauce", "about 55 kcal, 1.2g of fat"],
        answer: "Ching's Green Chili Sauce provides about 55 kcal, 1.2g of fat, 11g of carbs, and high sodium content per 100g."
    },
    {
        keywords: ["nutriscan ai automatically verify these exact named products", "dynamically load their precise macro profiles"],
        answer: "Yes! When you scan or search for any of these products in the 300+ item catalog, the app dynamically loads their precise macro profiles and calculates their Nutri-Score and NOVA ratings instantly."
    },
    {
    keywords: ["masterchow japanese egg noodles", "masterchow noodles"],
    answer: "MasterChow Japanese Egg Noodles typically provide around 380 to 400 kcal per 100g, containing refined wheat flour, eggs, and essential seasonings."
}
    
];