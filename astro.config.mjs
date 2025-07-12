// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
  
  // Ensure public assets are properly served
  publicDir: "public",
  
  // Build configuration for Vercel
  build: {
    assets: "assets",
  },
});
