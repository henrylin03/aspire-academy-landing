// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://aspireacademy.site",
  integrations: [sitemap(), robotsTxt()],
});
