# Personal Website (CV)

This is a minimal, static single-page personal website / CV. It uses plain HTML, CSS, and a tiny bit of JavaScript. It's designed to be easy to edit and deploy (for example, on GitHub Pages).


Quick start (Windows PowerShell):

Use Node directly (no npm scripts required):

```powershell
cd personal-website
node server.js
```

The server will try port 5000 and automatically try the next port if 5000 is already in use. Open the URL printed in the terminal (for example, http://localhost:5000).

If you prefer npm scripts and your PowerShell allows running npm, run:

```powershell
cd personal-website
npm install
npm run start
```


Project structure:
- `index.html` — main page
- `src/styles.css` — styles
- `src/script.js` — small interactivity
- `assets/` — images
- `public/resume.pdf` — downloadable resume placeholder

To edit content, change `index.html`. Replace `assets/avatar.png` with your photo and `public/resume.pdf` with your real CV.

Deploy: push to GitHub and enable GitHub Pages from the repository settings (choose the `main` branch and `/` root).

Automatic deploy: this repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will publish the repository root to the `gh-pages` branch on every push to `main`. After the first run enable GitHub Pages to serve from the `gh-pages` branch in your repository settings.
