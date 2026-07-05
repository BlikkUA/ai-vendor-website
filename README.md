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
- The contact form submits to `app/api/contact/route.ts`, which forwards every field to a Telegram chat via the Bot API.

## Telegram bot setup

The contact form sends every submission (name, email, company, volume, message) as a message to a Telegram chat through your bot.

1. Copy the example env file:
   ```bash
   cp .env.example .env.local
   ```
2. Fill in `.env.local` with your bot token and chat ID:
   ```
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   TELEGRAM_CHAT_ID=your_chat_id_here
   ```
3. Run the dev server and submit the form on `/contact` — a message should arrive in your Telegram chat within a second or two.
4. **Never commit `.env.local`.** It's already in `.gitignore`. If a token is ever accidentally exposed (e.g. pasted in a chat or committed), regenerate it via [@BotFather](https://t.me/BotFather) → `/revoke`.
5. In production (Vercel, etc.), set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` as environment variables in your hosting provider's dashboard — do not hardcode them in source.
