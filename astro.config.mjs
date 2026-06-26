// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Astro-Konfiguration fuer den Multiblatt-Redesign-Entwurf.
// - Tailwind CSS v4 wird ueber das offizielle Vite-Plugin eingebunden.
// - Veroeffentlichung als GitHub-Pages-Projektseite:
//   https://asaroz.github.io/multiblatt-vorschau/
//   Fuer eine eigene Domain spaeter: 'site' auf die Domain setzen und 'base' entfernen.
export default defineConfig({
  site: 'https://asaroz.github.io',
  base: '/multiblatt-vorschau/',
  vite: {
    plugins: [tailwindcss()],
  },
});
