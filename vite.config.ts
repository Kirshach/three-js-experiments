import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  css: {
    modules: { localsConvention: "camelCase" },
  },
  plugins: [react()],
});
