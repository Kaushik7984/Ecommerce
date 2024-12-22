import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Only for local development
      '/api': {
        target: 'http://localhost:4000',  
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), 
      },
    },
  },
  build: {
    outDir: "dist", 
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],  
    },
  },
});
