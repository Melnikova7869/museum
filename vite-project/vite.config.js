import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),       // Главная страница
        footer: resolve(__dirname, 'footer.html'),
        history: resolve(__dirname, 'history.html'),  // Страница history.html
        progress: resolve(__dirname, 'progress.html'),
        persons: resolve(__dirname, 'persons.html')
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  }
});