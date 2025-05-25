import { defineConfig } from 'vite';

export default defineConfig({
  // Базовые настройки
  base: '/', // Важно для корректных путей при деплое
  build: {
    // Настройки Rollup (для многостраничности)
    rollupOptions: {
      input: {
        main: '/vite-project/index.html',  
        buildings: '/vite-project/buildings.html',  // Главная страница
        footer: '/vite-project/footer.html',
        history: '/vite-project/history.html', // Страница history.html
        progress: '/vite-project/progress.html',
        persons: '/vite-project/persons.html'
        // Добавьте другие страницы, если они есть
      }
    },
    outDir: 'dist', // Папка сборки
    emptyOutDir: true // Очищать папку перед сборкой
  }
});