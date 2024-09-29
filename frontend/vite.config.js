import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy all requests starting with `/api` to the backend server
      '/api': {
        target: 'http://localhost:4000', // Backend server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: modify the path if needed
      },
    },
  },
  optimizeDeps: {
    include: ["redux-thunk"],
    esbuildOptions: {
      external: ["redux-thunk"],
    },
  },
});
