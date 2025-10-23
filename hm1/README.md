# DEMATEL Visuals — BI CSFs (Russia) — English

Static GitHub Pages site to visualize the DEMATEL results for the paper:
**“The Main Organizational Factors That Influence Successful Implementation of BI Tools in Russian Companies.”**

## What you get
- Heatmaps: **Direct (X)**, **Normalized (N)**, **Total (T)**
- Causal Map: **D+R vs D−R** (Drivers vs Outcomes), sized by |D−R|
- Metrics table with **D, R, D+R, D−R** and a **CSV export**
- One-click **PNG export** for each figure (use in your IEEE/Word doc)

## How to use
1. Put `index.html`, `style.css`, `script.js` in your repo folder (e.g., `week1/`).
2. Commit & push.
3. In **Settings → Pages**, choose “Deploy from branch.” Select your branch and folder.
4. Open the Pages URL, click the **Download PNG** buttons, and insert images into your Results.

## Edit data
All values live at the top of `script.js`.
- `X` — raw direct relation matrix (12×12).
- `N` — normalized matrix.
- `T` — total relation matrix.
- `metrics` — rows: `[Factor, D, R, D+R, D−R]`.
