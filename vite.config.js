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
<<<<<<< HEAD
   base: process.env.RENDER ? "/" : "./", // ✅ Fix for Render
=======
  base: process.env.RENDER ? "/" : "./", // ✅ Ensure it works for Render
>>>>>>> 460205434ca127b9e1f947f1d4940f56cc49776e
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
