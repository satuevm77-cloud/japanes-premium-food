# Japanes Premium Food

Premium Japanese restaurant website built as a portfolio piece. Next.js 15 with cinematic dark UI, Three.js 3D scene, and Framer Motion animations.

## Stack

- **Next.js 15** (App Router) + React 19 + TypeScript
- **Tailwind CSS 3.4** — custom design tokens (obsidian, gold, emerald)
- **Framer Motion** — scroll reveals, page transitions, hover interactions
- **Three.js / React Three Fiber** — hero 3D scene with gold particles
- **Lenis** — smooth scroll
- **Lucide React** — icon system
- **Unsplash** — remote imagery

## Pages

| Route | Description |
|---|---|
| `/` | Hero with 3D scene, philosophy, signature menu, gallery preview, reviews, reservation CTA |
| `/about` | Restaurant philosophy, chef story, editorial content |
| `/menu` | Full menu with 3 categories (Sushi, Main Course, Drinks) |
| `/gallery` | Masonry grid with lightbox, keyboard navigation |
| `/reviews` | Guest testimonials with star ratings |
| `/reservation` | Reservation form with animated confirmation modal |
| `/contact` | Contact details, hours, map placeholder |

## Features

- Cinematic dark UI with gold accents and seigaiha pattern overlay
- Scroll-triggered reveal animations on every section
- 3D hero scene with floating gold symbol and particle field
- Smooth scroll via Lenis
- Cursor glow effect (desktop)
- Loading screen with brand animation
- Page transitions between routes
- Mobile-responsive with slide-out navigation
- SEO: metadata, structured data (JSON-LD), robots, sitemap
- Accessibility: semantic HTML, ARIA labels, focus management

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint
npm run typecheck    # TypeScript check
npm run visual:check # Playwright visual verification
```

## Project Structure

```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx            # Home
│   ├── about/              # About
│   ├── menu/               # Menu
│   ├── gallery/            # Gallery
│   ├── reviews/            # Reviews
│   ├── reservation/        # Reservation
│   ├── contact/            # Contact
│   ├── layout.tsx          # Root layout + SEO
│   └── globals.css         # Design tokens
├── components/
│   ├── animations/         # Reveal, LoadingScreen, CursorGlow, SmoothScroll, PageTransition
│   ├── sections/           # Page sections (Hero, Menu, Gallery, Reviews, etc.)
│   ├── ui/                 # LuxuryButton, SectionHeader, RemoteImage
│   ├── layout/             # Header, Footer
│   └── three/              # LuxuryScene (3D)
└── lib/
    ├── site-data.ts        # All content and imagery
    └── utils.ts            # cn() utility
```

## Design System

| Token | Value | Usage |
|---|---|---|
| `obsidian` | `#080808` | Backgrounds |
| `gold` | `#C9A227` | Accents, CTAs, highlights |
| `emerald` | `#064E3B` | Ambient gradients |
| `premiumWhite` | `#F8F7F2` | Primary text |
| `warmGray` | `#A8A29E` | Secondary text |

Fonts: **Noto Serif JP** (headings), **Inter** (body).
