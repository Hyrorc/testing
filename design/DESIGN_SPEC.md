# HYRO — Design Spec & Figma Handoff

A complete extract of the live site's design system, for rebuilding/editing in Figma.
"Midnight Kinetic" — a dark, editorial, luxe recruitment brand.

> Source of truth: `src/styles/global.css` + the page components in `src/pages`.
> Machine-readable tokens: [`hyro-design-tokens.json`](./hyro-design-tokens.json) (import with the **Tokens Studio** Figma plugin).

---

## Fastest way to get the site INTO Figma (recommended)

The site is already deployed, so the whole thing can be pulled into editable Figma layers automatically:

1. In Figma, install the **“html.to.design”** plugin (free; the best URL→Figma importer). Alternatives: **Builder.io – Figma** or **Anima**.
2. Run it → paste the live URL (each page separately for cleanest results):
   - `/` (Home), `/about-us`, `/services`, `/approach`, `/jobs`, `/partner`, `/join`, `/contact`
3. Import at **Desktop (1440–1552px)** and again at **Mobile (390px)** to capture both layouts.
4. It generates real frames with text, colors, and images as layers. Then attach the shared styles/variables below so everything is consistent and editable.

This gives your designer the actual screens in minutes. Use the token file + this spec to turn the raw import into a proper, maintainable design system.

---

## Fonts (install first)

Both are free on Google Fonts — install to the designer's machine / Figma org:

- **Cormorant Garamond** — display/headings, wordmark, numerals. Weights used: 500, 600. (fallback: Georgia, serif)
- **Plus Jakarta Sans** — all UI/body/labels. Weights used: 300, 400, 500, 600, 700. (fallback: system sans)

---

## Color styles

| Token | Hex | Use |
|---|---|---|
| Ink | `#0B0F14` | Page background (near-black) |
| Ink Soft | `#101722` | Secondary dark |
| Navy | `#111827` | Panels / deep surfaces |
| Navy Deep | `#0C131D` | — |
| Navy Soft | `#162231` | — |
| Gold | `#B9974A` | Primary accent |
| Gold Deep | `#9C7D38` | Gradient end / pressed |
| Gold Soft | `#D6C28C` | Gradient start / highlights |
| Ivory | `#F5F3F0` | Primary text on dark |
| Ivory Bright | `#FDFCFA` | Brightest text |
| Gold Tint | `#CBA84D` | The gold used inside rgba() tints across the UI |

**Alpha ramps** (build these as Figma color styles too — they carry most of the UI):
- Text: ivory @ 100 / 80 / 72 (muted body) / 60 (nav & footer links) / 40 (labels) / 35 (placeholders)
- Strokes: ivory @ 8% (cards/dividers) / 12% (inputs) / 15% / 20% (ghost button); gold-tint @ 40% (rings/dashes) / 60% (focus)
- Surfaces: ivory @ 2–2.5% (cards); gold-tint @ 3–4% (hover/focus wash)

**Gradients:**
- `Gold Horizontal` — 90°, `#D6C28C → #B9974A` → primary buttons, active chips
- `Gold Vertical` — 180°, `#D6C28C → #B9974A (55%) → #9C7D38` → the italic gold text (clipped to text)

> Brand brief lists Navy `#031B3A` and Gold `#CBA84D`; the built site uses the darker Ink/Navy above with `#B9974A` gold. Treat the values in this doc (the live values) as canonical, and keep `#031B3A` only for `<select>` dropdown backgrounds where it still appears.

---

## Type styles (create as Figma text styles)

Headings clamp between mobile→desktop; the size shown is the **desktop max**.

| Style | Font | Weight | Size (px) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|
| Hero H1 | Cormorant | 500 | 44→**92** | 106% | 0 | — |
| Page H1 | Cormorant | 500 | 36→**68** | 112% | 0 | — |
| Section H2 | Cormorant | 500 | 30→**52** | 115% | 0 | — |
| Stat value | Cormorant | 500 | 32→**48** | 1 | 0 | — (gold) |
| Wordmark “HYRO” | Cormorant | 600 | 26 | 1 | 0.35em | — (gold) |
| Industry chip | Cormorant | 500 | 17 | — | 0 | — |
| Body large | Plus Jakarta | 300 | 17 | 170% | 0 | — |
| Body | Plus Jakarta | 300 | 15 | 170% | 0 | — |
| Card desc | Plus Jakarta | 300 | 13 | 165% | 0 | — |
| Card title | Plus Jakarta | 600 | 12 | — | 0.20em | UPPER |
| Button | Plus Jakarta | 600–700 | 12 | — | 0.18em | UPPER |
| Kicker | Plus Jakarta | 600 | 11 | — | 0.36em | UPPER (gold) |
| Field label | Plus Jakarta | 500 | 11 | — | 0.14em | UPPER |
| Nav link | Plus Jakarta | 500 | 11 | — | 0.22em | UPPER |
| Footer head | Plus Jakarta | 600 | 10 | — | 0.28em | UPPER (gold) |
| Micro / caption | Plus Jakarta | 500 | 9 | — | 0.22–0.30em | UPPER |

---

## Layout & grid

- **Max content width:** 1552px, centered.
- **Container inset (page gutter):** 72px desktop → 40px ≤1024px → 24px ≤768px.
- **Section vertical rhythm:** 96px top/bottom (56px mobile).
- **Page header block:** 170px top / 80px bottom (130 / 48 mobile).
- **Breakpoints:** 1024px (tablet), 768px (mobile). Nav collapses to a burger + full-screen drawer at ≤768.

## Radii
Inputs 10 · Dropzone 14 · Card 16 · Panel 18 · Form card 24 · Pills/buttons 999 (full).

## Elevation / effects
- Cards: 1px stroke `ivory 8%`, subtle top gold wash; hover lifts `-4px` and stroke → `gold 35%`.
- Primary button hover: lift `-2px`, shadow `0 10px 24px rgba(203,168,77,0.14)`.
- Scrolled nav: `rgba(11,15,20,0.88)` + `blur(14px)`, 1px bottom hairline.
- Focus (inputs): stroke `gold 60%` + fill `gold 4%`.

---

## Component inventory (build as Figma components)

- **Wordmark / Logo** — “HYRO” (Cormorant 600, 0.35em) stacked over micro tagline “HIRE YOUR RIGHT ONE” flanked by thin gold rules.
- **Nav bar** — fixed; left wordmark, center uppercase links (hover = gold underline sweep), right pill CTA (`nav-cta`, gold outline → gold fill on hover). Mobile: burger → full-screen `drawer`.
- **Buttons** — `btn-primary` (gold gradient, ink text), `btn-ghost` (ivory 20% outline), `btn-text` (gold, inline). All pill-shaped, uppercase 0.18em, arrow icon nudges +4px on hover.
- **Chip** — small pill, gold-tinted outline, pulsing gold dot (status/label).
- **Card** — glass surface + gold top wash; contains a 40px **icon-ring** (gold circle), uppercase title, muted description, optional large italic gold numeral.
- **Stat** — big Cormorant gold number + 9px uppercase label. (Animated count-up on scroll.)
- **Industry chip** — Cormorant 17px pill, hover → gold.
- **Form field** — uppercase label + dark input (custom gold chevron on selects); **toggle-pill** group (active = solid gold); **dropzone** (dashed gold, upload icon, title + sub).
- **Form card** — 24px-radius glass panel, 48–52px padding, sectioned with `form-sec-head` gold eyebrows.
- **Footer** — 4-col grid (brand blurb + link columns), gold uppercase heads, 36px social rings, bottom legal bar.
- **CTA band** — centered heading over a giant faint “ghost word” (Cormorant, ivory 2.5%) and a radial gold glow.
- **Decorative** — fixed starfield/constellation canvas behind content; twinkling stars; scroll-hint drip line.
- **Admin dashboard** (internal) — stat cards, “by category” chip filters, filter bar, and a data table; same dark tokens.

## Pages / screens to recreate
Home (`/`) · About HYRO (`/about-us`) · Our Services (`/services`) · Our Approach (`/approach`) · Jobs / Submit Your Profile (`/jobs`) · Partner With Us (`/partner`) · Become a Freelancer (`/join`) · Contact (`/contact`) · Admin login + dashboard (`/admin`).

---

## Motion (for prototyping notes)
- Reveal-on-scroll: fade + 26px rise, 0.8s ease-out, staggered 0.08s.
- HYRO logo tiles: staggered pop-in with a gold afterglow.
- Nav link: gold underline sweeps left→right on hover.
- Pulsing status dot; twinkling stars; hero scroll-hint drip. All disabled under `prefers-reduced-motion`.

---

## Suggested Figma file structure
1. **Cover** — brand one-liner + logo.
2. **Foundations** — color styles, gradients, type styles, spacing/grid, radii (import the token JSON via Tokens Studio to seed these as **variables**).
3. **Components** — the inventory above, with variants (button types, card states, field states).
4. **Screens / Desktop** — the pages from the html.to.design import, rebuilt on styles.
5. **Screens / Mobile** — 390px variants.
6. **Prototype** — link nav + CTAs; annotate motion.
