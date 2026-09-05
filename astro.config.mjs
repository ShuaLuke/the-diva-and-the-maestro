// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages serves the site from https://shualuke.github.io/the-diva-and-the-maestro/
// When a custom domain is set up, change `site` and set `base` to '/'.
export default defineConfig({
  site: 'https://shualuke.github.io',
  base: '/the-diva-and-the-maestro',
  trailingSlash: 'never',
  build: { format: 'file' },
});
