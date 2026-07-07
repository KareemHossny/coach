# Coach Template

A premium, fully responsive landing page template for personal trainers, fitness coaches, and health professionals. Built with React + Vite + TypeScript + Tailwind CSS v4 + shadcn/ui.

**Features**
- Single-page marketing layout — hero, transformations, services, process, testimonials, coach bio, pricing, FAQ, lead capture form
- Interactive before/after image comparison (currently using static transformation images)
- Fully dark-themed design with customizable design tokens
- Mobile-first responsive layout
- Lead capture form with goal selection (ready to wire to your backend)
- All content driven by a single config file — no code changes needed to rebrand

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build | Vite 8 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui (Radix primitives) |
| Routing | React Router v6 |
| Icons | Lucide React |
| Deployment | Vercel (static SPA) |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

The production build is output to the `dist/` directory.

## Customization

All editable content lives in a single file:

**`src/config/site.ts`** — coach name, bio, services, pricing plans, testimonials, FAQ, navigation links, hero content, statistics, and the logo path.

To rebrand the template for your own coaching business, edit only this file. No component code changes are needed.

### Design Tokens

Colors, fonts, spacing, and effects are defined as CSS custom properties in **`src/styles.css`** under the `:root` block. The theme uses OKLCH color space for consistent luminance. Key variables:

- `--primary`: brand accent color (default: lime green)
- `--background`: page background
- `--surface`: card/section background
- `--font-display`: heading font (default: Bebas Neue)
- `--font-sans`: body font (default: Inter)

### Images

Upload your images to a hosting service (Cloudinary, Unsplash, your own CDN) and update the URLs in `src/config/site.ts`. The project currently uses placeholder images from Unsplash and Cloudinary.

## Project Structure

```
src/
├── main.tsx            # App entry point
├── App.tsx             # Root component (routes, error boundary)
├── styles.css          # Tailwind + design tokens
├── config/
│   └── site.ts         # All editable content (single source of truth)
├── components/
│   ├── ui/             # shadcn/ui primitives (accordion, button, form, etc.)
│   └── sections/       # Page sections (Nav, Hero, Services, Pricing, etc.)
├── hooks/
│   └── use-mobile.tsx  # Mobile breakpoint detection
└── lib/
    └── utils.ts        # cn() utility for class merging
```

## Environment Variables

No environment variables are required. The site is fully static.

If you connect a backend (form submission handler, database, etc.), add your keys to `.env` at the project root and reference them via `import.meta.env.VITE_YOUR_KEY`. See `.env.example` for the format.

## Deploy to Vercel

1. Push this repository to GitHub (or any Git provider).
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel auto-detects Vite — **no configuration needed**.
4. Click **Deploy**.

The SPA fallback (`vercel.json` rewrites all routes to `/index.html`) is already configured so client-side routes (like the 404 page) work on refresh.

### Manual Deploy

```bash
npm run build
npx vercel --prod
```

## Lead Form

The lead capture form at the bottom of the page collects name, email, phone, goal, and a message. Currently it shows a success toast on submission. Wire it to your backend by editing the `handleSubmit` function in `src/components/sections/LeadForm.tsx`.

## License

This template is provided for personal and commercial use. You are free to modify and use it for your own coaching business.
