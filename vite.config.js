import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['framer-motion'], // Add this line
    },
  },
  resolve: { alias: { 'lucide-react': path.resolve(__dirname, 'node_modules/lucide-react') } },
});
