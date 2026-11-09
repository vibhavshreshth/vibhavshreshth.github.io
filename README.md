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
vibhavshreshth.github.io/
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

This repo is named `vibhavshreshth.github.io`, so GitHub publishes it at **https://vibhavshreshth.github.io**.

1. In the repo go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Set the branch to `main` and the folder to `/ (root)`, then **Save**.
4. Every push to `main` updates the live site within a few minutes.

No build step or workflow is needed — `.nojekyll` tells GitHub to serve the files as they are.

## License

[MIT](LICENSE) © 2026 Vibhav Shreshth
