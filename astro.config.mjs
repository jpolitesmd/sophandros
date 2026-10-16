// @ts-check
import { defineConfig } from "astro/config";

// Static build, hosted on GitHub Pages at the custom domain www.sophandros.com.
export default defineConfig({
  site: "https://www.sophandros.com",
  base: "/",
  output: "static",
  compressHTML: true,
});
