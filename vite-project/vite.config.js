import { defineConfig } from 'vite';

export default defineConfig({
  // Базовые настройки
  base: '/', // Важно для корректных путей при деплое
  build: {
    // Настройки Rollup (для многостраничности)
    rollupOptions: {
      input: {
        main: './index.html',    // Главная страница
        history: './history.html' // Страница history.html
        // Добавьте другие страницы, если они есть
      }
    },
    outDir: 'dist', // Папка сборки
    emptyOutDir: true // Очищать папку перед сборкой
  }
});