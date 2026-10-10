import pathlib

ROOT = pathlib.Path(__file__).parent.parent
PARTS = ROOT / "parts"

def read(name):
    return (PARTS / name).read_text(encoding="utf-8")

HEAD = read("head.html")
HEADER = read("header.html")
FOOTER = read("footer.html")
SCRIPTS_CORE = read("scripts_core.html")

PAGES = {
    "home.html": {
        "title": "NutriScan AI - AI Powered Food Health Analyzer",
        "body": "body_home.html",
        "extra_head": "",
        "extra_scripts": '    <script src="assets/js/home.js"></script>\n'
    },
    "products.html": {
        "title": "NutriScan AI - Products Database",
        "body": "body_products.html",
        "extra_head": "",
        "extra_scripts": '    <script src="assets/js/home.js"></script>\n    <script src="assets/js/products-page.js"></script>\n'
    },
    "ai-analyzer.html": {
        "title": "NutriScan AI - AI Packaged Food Analyzer",
        "body": "body_analyzer.html",
        "extra_head": "",
        "extra_scripts": (
            '    <script src="https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js"></script>\n'
            '    <script src="https://cdn.jsdelivr.net/npm/@zxing/library@0.20.0/umd/index.min.js"></script>\n'
            '    <script src="assets/js/analyzer.js"></script>\n'
        )
    },
    "about.html": {
        "title": "NutriScan AI - About the Project",
        "body": "body_about.html",
        "extra_head": "",
        "extra_scripts": ""
    },
    "developers.html": {
        "title": "NutriScan AI - Developers",
        "body": "body_developers.html",
        "extra_head": "",
        "extra_scripts": ""
    },
    "details.html": {
        "title": "Product Details - NutriScan AI",
        "body": "body_details.html",
        "extra_head": "",
        "extra_scripts": '    <script src="assets/js/home.js"></script>\n    <script src="assets/js/details-page.js"></script>\n'
    },
}

TEMPLATE = """<!DOCTYPE html>
<html lang="en" class="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
{head}{extra_head}</head>
<body class="bg-[#f8fafc] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans min-h-screen flex flex-col transition-colors duration-300 relative">

{header}
{body}
{footer}

{scripts_core}{extra_scripts}</body>
</html>
"""

for filename, cfg in PAGES.items():
    body = read(cfg["body"])
    html = TEMPLATE.format(
        title=cfg["title"],
        head=HEAD,
        extra_head=cfg["extra_head"],
        header=HEADER,
        body=body,
        footer=FOOTER,
        scripts_core=SCRIPTS_CORE,
        extra_scripts=cfg["extra_scripts"],
    )
    (ROOT / filename).write_text(html, encoding="utf-8")
    print("wrote", filename, len(html), "bytes")