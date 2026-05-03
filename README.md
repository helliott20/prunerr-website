# prunerr-website

Marketing landing page for [Prunerr](https://github.com/helliott20/prunerr) — intelligent media library cleanup for Plex, Sonarr and Radarr.

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com), deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs to ./dist
npm run preview  # preview built site locally
```

## Deploy

Push to `main` — `.github/workflows/deploy.yml` builds and publishes to GitHub Pages automatically. The custom domain (`prunerr.app`) is configured via `public/CNAME`.

## Stack

- Static site, zero JS by default
- Tailwind CSS v4 via `@tailwindcss/vite` (config-in-CSS via `@theme`)
- Sitemap auto-generated via `@astrojs/sitemap`
- Fonts: Outfit (display), DM Sans (body), JetBrains Mono (code) — loaded from Google Fonts

## Design tokens

Mirrors the Prunerr app palette so the site and product feel like the same thing:

- Accent: amber-500 (`#f59e0b`)
- Surface: slate-based dark scale
- Complementary: violet, emerald, cyan, ruby

See `src/styles/global.css` for the full theme.

## License

MIT
