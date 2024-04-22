import { defineConfig, type AliasOptions } from 'vite';
import preact from '@preact/preset-vite';

const alias: AliasOptions = {
  components: '/src/components',
  state: '/src/state',
};

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [preact()],
  resolve: {
    alias,
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
        assetFileNames: 'index.css',
      },
    },
  },
});
