import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        footer: resolve(__dirname, 'footer.html'),
        history: resolve(__dirname, 'history.html'),
        progress: resolve(__dirname, 'progress.html'),
        buildings: resolve(__dirname, 'buildings.html'),
        persons: resolve(__dirname, 'persons.html')
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  }
});