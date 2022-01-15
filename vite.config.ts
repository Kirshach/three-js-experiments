import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      hooks: path.resolve(__dirname, "src/hooks"),
      stores: path.resolve(__dirname, "src/stores"),
    },
  },
  css: {
    modules: { localsConvention: "camelCase" },
  },
  plugins: [react()],
});
