// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

const fallbacks = ['system-ui', 'sans-serif'];

// https://astro.build/config
export default defineConfig({
  // Set to the deployed URL (e.g. 'https://example.com') to enable canonical and og:url/og:image tags.
  // site: '',

  // Downloaded at build time and served from this site, so visitors never contact a font CDN.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Archivo',
      cssVariable: '--font-heading',
      weights: [700, 800, 900],
      subsets: ['latin'],
      fallbacks,
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Space Grotesk',
      cssVariable: '--font-body',
      weights: [400, 500, 600],
      subsets: ['latin'],
      fallbacks,
    },
  ],
});
