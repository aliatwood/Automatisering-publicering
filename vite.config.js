import { defineConfig } from "vite"
import { imagetools } from "vite-imagetools"

export default defineConfig({
  plugins: [imagetools()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        index: "src/index.html",
        bilder: "src/bilder.html",
        process: "src/process.html"
      }
    }
  }
})
