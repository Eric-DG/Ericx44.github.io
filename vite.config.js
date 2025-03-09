import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: process.env.RENDER ? "/" : "./", // ✅ Ensure it works for Render
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
