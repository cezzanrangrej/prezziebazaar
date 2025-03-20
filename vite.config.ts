
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Add base configuration for GitHub Pages
  // This allows the app to work when deployed to a subdirectory
  base: "./",
  server: {
    host: "::",
    port: 8080,
    headers: {
      // Set default content type for all JavaScript files
      "Content-Type": "application/javascript",
      // Ensure JavaScript files have proper MIME type
      "*.js": ["Content-Type: application/javascript"],
      "*.mjs": ["Content-Type: application/javascript"],
      "*.cjs": ["Content-Type: application/javascript"],
      "*.jsx": ["Content-Type: application/javascript"],
      "*.ts": ["Content-Type: application/javascript"],
      "*.tsx": ["Content-Type: application/javascript"],
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Ensure output JS files have correct extensions and MIME types
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
}));
