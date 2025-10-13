import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'public/index.html',
    },
  },
  resolve: {
    alias: {
      '@': '../src',
    },
  },
  server: {
    open: true,
    port: 5173
  }
});
