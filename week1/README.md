# DEMATEL Visuals — BI CSF (Russia)

Static site to visualize the DEMATEL results for the paper:
**“The Main Organizational Factors That Influence Successful Implementation of BI Tools in Russian Companies.”**

## What’s inside
- Heatmaps: **Direct (X)**, **Normalized (N)**, **Total (T)**
- Causal Influence Map: **D+R vs D−R** (drivers vs outcomes)
- Metrics table with **D, R, D+R, D−R** and CSV export
- One-click **PNG** export for each figure (paste into your IEEE/Word file)

## How to run
1. Put `index.html`, `style.css`, `script.js` in this folder (e.g., `week1/`).
2. Commit & push.
3. Enable **GitHub Pages** in repo Settings → Pages → “Deploy from branch” (root or `/week1`).
4. Open the Pages URL. Use the **Скачать PNG** buttons to download figures.

## Editing data
All matrices and metrics are defined at the top of `script.js`.
- `X` — raw direct influence (12×12).
- `N` — normalized matrix.
- `T` — total relation matrix.
- `metrics` — rows: `[Factor, D, R, D+R, D−R]`.

Update values if your dataset changes; the plots update automatically.
