import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          redux: ["react-redux", "@reduxjs/toolkit"],
        },
      },
    },
    chunkSizeWarningLimit: 3000, 
  },
});
