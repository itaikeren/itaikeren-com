import path from "path";
import { fileURLToPath } from "url";

import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [mdx(), react(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src")
      }
    ]
  }
});
