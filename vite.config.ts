import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: [
      { find: "react", replacement: "preact/compat" },
      { find: "react-dom", replacement: "preact/compat" },
    ],
  },
});
