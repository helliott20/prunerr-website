import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = process.env.SITE_URL ?? 'https://prunerr.app';
const BASE = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
