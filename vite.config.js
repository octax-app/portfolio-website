import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The source files use the .js extension but contain JSX (a legacy of the
// Create React App setup). esbuild only treats .jsx/.tsx as JSX by default,
// so we tell it to parse .js files in src/ as JSX as well.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "build",
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
