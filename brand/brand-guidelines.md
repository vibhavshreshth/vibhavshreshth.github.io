# Vibhav Shreshth: Brand Guidelines

Version 1.2 · November 2026 · Matches the live site at [vibhavshreshth.github.io](https://vibhavshreshth.github.io)

A styled version of this guide is in `brand-guidelines.html` in this folder. Source of truth for every value below: `assets/css/base/variables.css`.

---

## 1. Brand essence

| | |
|---|---|
| **Who** | Vibhav Shreshth: pre-sales consultant who started as a developer, founded a software company, and earned an MBA at IIM Bodh Gaya |
| **Positioning** | Turning client needs into clear software solutions |
| **Promise** | You'll be understood before you're sold to |
| **Audience** | Hiring managers, sales and delivery leaders, founders and prospective clients |
| **Proof** | 44 months of experience, 80+ proposals, 50+ intro calls, 40+ BANT-qualified discovery calls |

### Golden Circle

- **Why:** every business is unique, so every solution should start from its real need.
- **How:** Think → Understand → Execute (Golden Circle for thinking, POV for understanding, SMART goals for executing).
- **What:** discovery, business analysis, proposals, proof-of-concepts and demos.

### Personality

| Trait | Means | Not |
|---|---|---|
| Clear | Plain words, numbers, short sentences | Jargon, buzzwords |
| Curious | Learning in public; this site is a branding lab | Know-it-all |
| Practical | Shows the process and the tools actually used | Vague claims |
| Playful | Glitch theme switch, red-eyed avatar, colour wave | Gimmicks that hide the content |

---

## 2. Logo

### Wordmark

- **Primary:** `vibhav.` in lowercase, Inter ExtraBold (800), letter-spacing −0.04em. The full stop is in the accent colour.
- **Site header variant:** `vibhav_version1.1`, where the version is JetBrains Mono, small and muted. Use only in the site header.
- **Colour:** text colour on the background, with the accent full stop. Never put the whole wordmark in the accent colour.

### Monogram

- A bold `V` in lime `#C6FF3D` on a near-black `#0B0B0C` rounded square (corner radius about 22% of the width). Used as the favicon and app icon.

### Avatar

- A hand-drawn line portrait (`assets/img/avatar.png`). Black lines on light backgrounds; inverted to white lines in dark mode.
- During the theme switch, the eyes glow red. This is a deliberate brand moment; keep it subtle and short.

### Clear space and size

- Keep clear space around the wordmark equal to the height of the `v`.
- Minimum size: wordmark 16 px tall on screen; monogram 16 × 16 px.

### Don't

- Don't capitalise the wordmark, stretch it, outline it or add effects.
- Don't recolour the avatar or place it on busy photos.
- Don't put the lime monogram on a light background.

---

## 3. Colour

The brand is **dark first**. Every colour is a CSS variable, so themes switch by changing values, never by hard-coding hex codes.

### Dark theme (default)

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#0B0B0C` | Page background |
| `--bg2` | `#141416` | Inputs, inner panels |
| `--card` | `#18181B` | Cards, menus, dialogs |
| `--line` | `#27272A` | Borders, dividers |
| `--text` | `#F4F4F5` | Headings and body text |
| `--muted` | `#A1A1AA` | Secondary text, labels |
| `--accent` | `#C6FF3D` | Lime: primary buttons, links, highlights, dots |
| `--accent-ink` | `#0B0B0C` | Text on the accent colour |

### Light theme

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#FAFAF9` | Page background |
| `--bg2` | `#F1F1EF` | Inputs, inner panels |
| `--card` | `#FFFFFF` | Cards, menus, dialogs |
| `--line` | `#E4E4E7` | Borders, dividers |
| `--text` | `#18181B` | Headings and body text |
| `--muted` | `#52525B` | Secondary text, labels |
| `--accent` | `#4F46E5` | Indigo: primary buttons, links, highlights, dots |
| `--accent-ink` | `#FFFFFF` | Text on the accent colour |

### Cyberpunk (theme-switch transition only)

Shown for a split second while the theme changes. Never use it as a standing theme.

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#05010D` | Background |
| `--accent` | `#00F0FF` | Cyan neon |
| `--neon2` | `#FF2BD6` | Magenta neon |
| `--neon3` | `#F7FF3C` | Yellow neon |

### Proportions

Roughly **70% background, 20% text and neutrals, 10% accent**. The accent marks what to look at or click next; if everything is accented, nothing is.

### Contrast (WCAG 2.1)

| Pair | Ratio | Rating |
|---|---|---|
| Text `#F4F4F5` on `#0B0B0C` | 17.8 : 1 | AAA |
| Lime `#C6FF3D` on `#0B0B0C` | 16.6 : 1 | AAA |
| Muted `#A1A1AA` on `#0B0B0C` | 7.6 : 1 | AAA |
| Text `#18181B` on `#FAFAF9` | 17.0 : 1 | AAA |
| Muted `#52525B` on `#FAFAF9` | 7.4 : 1 | AAA |
| Indigo `#4F46E5` on `#FFFFFF` | 6.3 : 1 | AA (AAA for large text) |
| White on Indigo `#4F46E5` | 6.3 : 1 | AA |
| Lime `#C6FF3D` on white | 1.2 : 1 | ❌ Never |
| Indigo `#4F46E5` on `#0B0B0C` | 3.1 : 1 | ❌ Not for text |

---

## 4. Typography

| Role | Typeface | Weight | Size | Notes |
|---|---|---|---|---|
| Hero heading | Inter | 800 | clamp(2.6rem, 7.5vw, 6rem) | Letter-spacing −0.045em, line-height 0.98 |
| Section title | Inter | 800 | clamp(2.2rem, 5vw, 3.6rem) | Letter-spacing −0.03em, ends with a full stop: "Work Timeline." |
| Card title | Inter | 600–700 | 1.25rem | Letter-spacing −0.02em |
| Body | Inter | 400 | 1rem (16 px) | Line-height 1.6 |
| Eyebrow | JetBrains Mono | 400 | 0.78rem | Uppercase, letter-spacing 0.12em, muted |
| Labels, dates, tags | JetBrains Mono | 400–500 | 0.66–0.8rem | Muted, or accent for categories |
| Transition only | Orbitron, Share Tech Mono | — | — | Cyberpunk moment only |

**Pattern:** every section opens with a mono **eyebrow** (what it is) above a bold **title** (what it says), for example *KNOW MORE* → **Ask me anything.**

Fonts load from Google Fonts: Inter (400–800), JetBrains Mono (400, 500).

---

## 5. Layout and spacing

| Item | Value |
|---|---|
| Content width | 1180 px max, 24 px side gutters |
| Section spacing | 110 px top and bottom (80 px on phones) |
| Alignment | Centred headings and intros; left-aligned text inside cards and lists |
| Corner radius | 18 px cards · 999 px buttons, pills and inputs · 12 px small tiles |
| Gaps | 8–12 px inside groups · 16–28 px between cards · 36–60 px between columns |
| Breakpoints | 640 px phone · 820 px menu collapses · 900 px stacked columns · 1100 px tablet footer |

---

## 6. Components

- **Primary button:** accent fill, accent-ink text, fully rounded. One per view, for the main action (Work Timeline, Notify Me!).
- **Outline button:** transparent, accent border and text; fills with accent on hover (Playground).
- **Ghost button:** card background, line border, text colour. For secondary actions.
- **Category tag:** small mono pill with accent border and text (Pre-Sales, AI).
- **Skill tag:** small mono pill with line border and muted text (BANT qualification, Figma).
- **Internship badge:** mono pill, accent outline, reads "Internship". Always shown for DocsTribe AI and Siemens.
- **Card:** card background, 1 px line border, 18–20 px radius, 24 px padding.
- **Timeline:** a thin vertical line with accent dots per stop; smaller hollow dots for things that happened during another stop.
- **Form field:** bg2 fill, line border, fully rounded, 2 px accent focus ring; errors in red `#EF4444` under the field.

---

## 7. Motion

| Moment | Timing | Rule |
|---|---|---|
| Theme switch glitch | 200 ms total | The signature moment; never longer |
| Scroll reveal | 0.8 s fade and 24 px rise | Once per element |
| Hover lift | 2–3 px up, 0.2 s | Buttons, cards, icons |
| Stack colour wave | 7 s loop | Only while on screen |
| Reduced motion | — | Keep colour changes; drop movement and shaking |

---

## 8. Theme transition

The brand's signature moment. When someone flips the light/dark switch, the site "crashes" into a cyberpunk version of itself for a split second, then lands in the new theme. It lasts **200 ms in total** (set by `T=200` in `assets/js/theme.js`).

### The four phases

| Phase | Time | What happens |
|---|---|---|
| 1 · Crash | 0–20% (0–40 ms) | Heavy glitch on the current theme. A **white flash** fills the screen from 11–25% |
| 2 · Cyberpunk | 20–82% (40–164 ms) | The whole site switches to the cyberpunk look, with a lighter glitch running over it |
| 3 · Re-crash | 73–87% (146–174 ms) | Heavy glitch again with a **black flash**. The new light or dark theme swaps in at 82% |
| 4 · Settle | 87–100% (174–200 ms) | The glitch fades out and the new theme is left calm |

### Glitch effects (all phases)

- **Torn slices:** 4–10 horizontal strips of the page are colour-inverted, hue-shifted and pushed sideways.
- **Colour bars:** 6–16 thin bars in magenta `#FF00C8`, cyan `#00F0FF`, yellow `#F7FF3C` and white, blended with "difference" so they cut through the page.
- **Noise:** a fine scanline and static overlay while the glitch is strong.
- **Shake:** the page jumps up to 26 px sideways and skews up to 6°.
- **RGB split:** text and shapes get magenta and cyan ghost copies, with extra contrast; about one frame in five fully inverts with a random hue.
- **Red eyes:** the avatar's eyes glow red, then fade out over 0.6 s.

### What the cyberpunk site looks like (phase 2)

| Element | Cyberpunk look |
|---|---|
| Background | Near-black violet `#05010D` with magenta and cyan glows, a moving magenta grid floor, scanlines, a vignette and a soft flicker |
| Headings, logo, menu | Orbitron, uppercase; section titles get a magenta/cyan split that jitters |
| Accent | Cyan `#00F0FF` replaces lime/indigo; magenta `#FF2BD6` for highlights, yellow `#F7FF3C` as a third neon |
| Eyebrows | Magenta with a glow and a `//` prefix, in Share Tech Mono |
| Logo full stop | Magenta with a neon glow |
| Cards and tiles | Square, cut-corner panels with a thin cyan edge glow |
| Buttons | Slanted parallelograms in mono uppercase; primary glows cyan, turns magenta on hover |
| Pills, tags, inputs | Square corners |
| Timeline dots | Magenta diamonds with a glow |
| Theme switch | Square track with a glowing magenta knob |

### Rules

- **Only on the theme switch.** Never on page load, scrolling or any other click.
- **Keep it at 200 ms.** Longer starts to feel like a real error.
- **Never a standing theme.** The cyberpunk palette and fonts appear only inside the transition.
- **Reduced motion:** visitors who ask for less motion get the colours, flashes and cyberpunk frame, but **no shake or skew**.
- **Clicks during the transition** are ignored, so it can't stack or loop.

---

## 9. Imagery and icons

- **Illustration over photos:** the line avatar is the face of the brand.
- **Diagrams** (Golden Circle) use the accent colour and rotate slowly.
- **Icons:** simple line icons, 2 px stroke, rounded joins, in text or muted colour.
- **Social icons:** solid circles in the text colour with the logo knocked out; accent on hover.

---

## 10. Voice and tone

**Sound like:** a consultant explaining things to a smart friend. Clear, specific, warm, slightly playful.

| Do | Don't |
|---|---|
| "80+ proposals using AI-assisted transcript analysis" | "Leveraged cutting-edge AI synergies" |
| "Think → Understand → Execute" | "A holistic, end-to-end methodology" |
| "Leave your name and a way to reach you" | "Submit your details to proceed" |
| Lead with numbers and outcomes | Lead with adjectives |
| Label internships as internships | Blur internships into full-time roles |

**Rules**

- First person, active voice, short sentences.
- Sentence case for buttons and labels; titles end with a full stop ("Stack.").
- Experience is stated as **44 months**.
- Named features keep their names: **Work Timeline**, **Playground**, **Know More**, **Notify Me!**.

**Key lines**

- "Turning client needs into clear solutions."
- "Think → Understand → Execute."
- "I also code ✦ design in Figma ✦ run Meta Ads ✦ now learning branding in public."

---

## 11. Using the brand elsewhere

| Channel | Apply |
|---|---|
| LinkedIn banner | Dark background, `vibhav.` wordmark, the positioning line, one lime highlight |
| Resume / PDF | Light theme colours; Inter for headings and body; indigo accent for headings or rules only |
| Slides | Dark title slides with lime; light content slides with indigo; eyebrow + title on every slide |
| Email signature | Name in Inter 600, role in muted, a single accent link to the site |
| Medium / Instagram | Avatar as profile image on a plain lime or near-black background |

---

## 12. Files

| What | Where |
|---|---|
| Colour and font tokens | `assets/css/base/variables.css` |
| Transition theme | `assets/css/themes/cyberpunk.css` |
| Transition timing and glitch | `assets/js/theme.js` (`T=200`), `assets/css/components/glitch.css` |
| Monogram / favicon | `assets/img/favicon.svg` |
| Avatar | `assets/img/avatar.png` (transparent ink; original drawing: `avatar-source.webp`) |
| Golden Circle artwork | `assets/img/golden-circle/` |
