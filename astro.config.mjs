// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    optimizeDeps: {
      include: ['chart.js', 'chartjs-adapter-date-fns'],  // Ensure Chart.js and the adapter are bundled
    },
  },
});
