# Vendor+ — AI Data Annotation Agency Website

A dark-themed, animated marketing site built with Next.js 14 (App Router) and Tailwind CSS.

## Pages
- `/` — Home
- `/services` — Services
- `/industries` — Industries
- `/about` — About
- `/contact` — Contact (with interactive form)

## Design system
- **Colors** — ink black background (`#0B0D10`), gold signal accent (`#E8B84B`), and four annotation "tag" colors (teal, coral, violet, gold) used only for the label-chip motif.
- **Type** — Space Grotesk (display), Inter (body), IBM Plex Mono (tags, eyebrows, data readouts).
- **Signature element** — the hero "annotation canvas": an animated demo that cycles through bounding-box/label frames representing real annotation modalities (autonomous driving, pathology, NLP), reinforcing what the company actually does.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Notes
- All animations respect `prefers-reduced-motion`.
- Replace placeholder copy (client names, stats, office addresses, contact email) with real details before launch.
- The contact form is currently front-end only (`components/ContactForm.tsx`) — wire the `handleSubmit` function to your email/CRM endpoint of choice.
