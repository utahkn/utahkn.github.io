// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // This repo is utahkn/utahkn.github.io — a GitHub user/org page repo,
  // which GitHub Pages serves from the domain root (not a /repo-name/ subpath).
  site: 'https://utahkn.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()]
  }
});