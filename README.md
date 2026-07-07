# Coach Template

A premium 1-on-1 fitness coaching landing page template. Built with React + Vite + Tailwind CSS v4 + shadcn/ui.

## Prerequisites

- Node.js 18+
- npm

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

The production build is output to the `dist/` directory.

## Environment Variables

No environment variables are required. This is a fully static site with all content configured in `src/config/site.ts`.

If you add a backend or third-party service later, add their keys to a `.env` file and reference them — see `.env.example` for the format.

## Customization

Edit `src/config/site.ts` to change all content: coach name, pricing, testimonials, services, FAQ, etc. The file is annotated with comments to guide you.

## Deploy to Vercel

1. Push this repo to GitHub (or any Git provider).
2. Import the project in Vercel.
3. Vercel auto-detects Vite — no configuration needed.
4. Click **Deploy**.

The site is a client-side SPA. Vercel will serve the built files from `dist/` and rewrite all routes to `index.html` for SPA fallback (configured in `vercel.json`).
