# Asep Saepulloh — Creative Developer Portfolio

> **Editorial Minimalism × Dark Cinematic × Experimental Typography**  
> A high-contrast, motion-enhanced portfolio engineered for creative frontend developer **Asep Saepulloh** ([@asepsaepulloh-oss](https://github.com/asepsaepulloh-oss)). Fully responsive, anti-AI slop, integrated with the GitHub REST API, and production-ready for Vercel.

---

## ✦ Core Design & Aesthetic Direction

This portfolio strictly adheres to **Anti-AI Slop** principles:
- **No generic purple/blue gradient backgrounds**: Grounded in a rich dark cinematic base (`#101010` / `#181818`) with an electric acid-lime accent (`#C5F467`).
- **No meaningless glassmorphism blobs**: Structural clarity via razor-sharp 1px borders (`#303030`) and deliberate whitespace.
- **No generic forced bento grids**: Asymmetric editorial compositions with varying visual rhythms across sections.
- **No fake statistics, fabricated clients, or percentage meters**: 100% authentic data audited directly from real public repositories on GitHub.
- **Editorial Typography**: Pairing **Syne** (bold display), **Plus Jakarta Sans** (clean interface), and **JetBrains Mono** (technical specification captions).

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type safety, verbatim module syntax)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion**: [Motion for React](https://motion.dev/) (`motion/react`)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Monogram
- **API Integration**: GitHub REST API (`/users/asepsaepulloh-oss/repos`) with local caching & offline snapshot fallback
- **Deployment**: [Vercel](https://vercel.com/) (Vite preset)

---

## 📦 Verified Featured Projects

Curated from the GitHub audit of `@asepsaepulloh-oss`:

1. **[iWatch](https://github.com/asepsaepulloh-oss/iwatch)** — Modern Editorial Anime Streaming Platform (*Live at [iwatch-livid.vercel.app](https://iwatch-livid.vercel.app)*)
2. **[LouiComic](https://github.com/asepsaepulloh-oss/louicomic)** — Cross-Platform Manga & Comic Reader built with Capacitor, Supabase & Gemini AI (*Live at [louicomic.vercel.app](https://louicomic.vercel.app)*)
3. **[Animes](https://github.com/asepsaepulloh-oss/animes)** — Motion-Driven Anime Discovery Engine (*Live at [animes-bice-six.vercel.app](https://animes-bice-six.vercel.app)*)
4. **[LinkHub](https://github.com/asepsaepulloh-oss/link)** — Minimalist Link-in-Bio & Dynamic QR Engine (*Live at [linkinbio-ashen-beta.vercel.app](https://linkinbio-ashen-beta.vercel.app)*)
5. **[GoPay QRIS Gateway](https://github.com/asepsaepulloh-oss/kaigobiz)** — Autonomous EMVCo Dynamic QRIS Payment Generator & Scraper
6. **[Salo Jus & Local Web Profiles](https://github.com/asepsaepulloh-oss/salo-jus)** — Editorial culinary & small business landing experiences

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm or bun

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

### 3. Run typecheck & build
```bash
npm run build
```

### 4. Preview the production build
```bash
npm run preview
```

### 5. Run linter
```bash
npm run lint
```

---

## ⚙️ Updating Profile & Personal Information

All personal details, biography, links, availability status, and contact credentials can be modified in a single file without modifying any core components:

📁 `src/data/profile.ts`

```ts
export const profile = {
  name: 'Asep Saepulloh',
  displayName: 'Asep',
  handle: 'asepsaepulloh-oss',
  title: 'Creative Developer & Frontend Engineer',
  tagline: 'Designing high-contrast digital experiences...',
  // ...
};
```

---

## 🚢 Deploying to Vercel

### Option 1: Vercel GitHub Integration (Recommended)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for asep personal portfolio"
   git branch -M main
   git remote add origin https://github.com/asepsaepulloh-oss/<repo-name>.git
   git push -u origin main
   ```
2. Navigate to [vercel.com/new](https://vercel.com/new).
3. Import your repository.
4. Select framework preset: **Vite**.
5. Build command: `npm run build` | Output directory: `dist`.
6. Click **Deploy**.

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 🔒 Security & Performance
- Zero client secrets or exposed personal access tokens.
- Automatic rate-limit detection: gracefully falls back to cached snapshot if GitHub API reaches 60 req/hr unauthenticated IP limit.
- Responsive images and semantic HTML5 with full keyboard navigation and `prefers-reduced-motion` compliance.

---

© 2026 Asep Saepulloh. Built with craftsmanship and care.
