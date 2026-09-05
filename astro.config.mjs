// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://thedivaandthemaestro.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
