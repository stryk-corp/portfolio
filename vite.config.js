import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'Main',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'Main/public/index.html',
    },
  },
  resolve: {
    alias: {
      '@': '/Main/src',
    },
  },
  server: {
    open: true,
    port: 5173
  }
});
