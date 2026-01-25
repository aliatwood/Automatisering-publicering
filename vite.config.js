import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    minify: 'terser',
    rollupOptions: {
      input: {
        main: 'src/index.html',
        bilder: 'src/bilder.html',
        process: 'src/process.html'
      }
    }
  },
  plugins: [imagetools()]
});