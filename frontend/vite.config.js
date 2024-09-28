import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    // Force Vite to treat 'redux-thunk' as a CommonJS dependency
    include: ['redux-thunk'],
    esbuildOptions: {
      // Mark redux-thunk as external to avoid ES module import issues
      external: ['redux-thunk'],
    },
  },
});
