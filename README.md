# Vibhav Shreshth — Portfolio

Personal portfolio of **Vibhav Shreshth**, Pre-Sales Consultant (MBA, IIM Bodh Gaya) — and a hands-on journey into branding.

Plain HTML, CSS and JavaScript. No frameworks, no build step, no cost.

## Features

- Light / dark theme switch with a glitch → cyberpunk → new-theme transition
- Rotating hero titles that auto-fit any screen
- Infinite "Worked with" logo marquee
- Filterable project cards with an animated prompt demo
- "Ask me anything" box and chat bubble (keyword answers, no server)
- Fully responsive (320px phones → wide desktops), respects saved theme

## Project structure

```
vibhav-portfolio/
├── index.html                 # Page markup (all sections)
├── assets/
│   ├── css/
│   │   ├── base/
│   │   │   ├── variables.css  # Design tokens: colours, fonts, sizes (light + dark)
│   │   │   └── base.css       # Reset, typography, buttons, scroll-reveal
│   │   ├── components/        # Reusable UI pieces
│   │   │   ├── loader.css
│   │   │   ├── navbar.css
│   │   │   ├── theme-toggle.css
│   │   │   ├── glitch.css
│   │   │   └── widgets.css    # Cookie notice, chat bubble
│   │   ├── sections/          # One file per page section
│   │   │   ├── hero.css  logos.css  showcase.css  work.css
│   │   │   ├── experiments.css  about.css  stack.css
│   │   │   └── quote.css  footer.css
│   │   ├── themes/
│   │   │   └── cyberpunk.css  # Shown during the theme transition
│   │   └── responsive.css     # Small-screen overrides (loaded last)
│   ├── js/
│   │   ├── data.js            # ✏️ Projects, tools and chat answers — edit content here
│   │   ├── loader.js
│   │   ├── theme.js           # Theme switch + transition
│   │   ├── navigation.js      # Header, mobile menu, active link, reveal
│   │   ├── marquee.js
│   │   ├── projects.js
│   │   ├── stack.js
│   │   ├── chat.js
│   │   └── main.js            # Cookie notice, footer year
│   └── img/
│       └── favicon.svg
├── .github/workflows/deploy.yml  # Auto-deploy to GitHub Pages
├── .editorconfig
├── .gitignore
├── .nojekyll
├── LICENSE
└── README.md
```

## Run locally

Just open `index.html` in a browser. No install needed.

## Edit content

| What | Where |
|---|---|
| Projects, tools, chat answers | `assets/js/data.js` |
| Hero text, about, timeline, certifications | `index.html` |
| Brand colours & fonts | `assets/css/base/variables.css` |
| Transition length | `T=` in `assets/js/theme.js` |

## Deploy free on GitHub Pages

1. Create a new public repository on GitHub and push this folder to the `main` branch.
2. In the repo go to **Settings → Pages → Source** and choose **GitHub Actions**.
3. Every push to `main` publishes the site at `https://<your-username>.github.io/<repo-name>/`.

## License

[MIT](LICENSE) © 2026 Vibhav Shreshth
