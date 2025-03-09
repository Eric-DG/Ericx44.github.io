import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
<<<<<<< HEAD
   base: process.env.RENDER ? "/" : "./",
=======
  base: process.env.RENDER ? "/" : "./", // ✅ Fix for Render
>>>>>>> 0b8728881efeb920ac04f198df3ca9d6b7387e77
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
