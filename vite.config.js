import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "build",
  },
  // Workaround for a Vite 8 dev-server bug where these internal client
  // constants are served unreplaced, causing a browser ReferenceError.
  // See https://github.com/vitejs/vite/issues/22419
  define: {
    __BUNDLED_DEV__: "false",
    __SERVER_FORWARD_CONSOLE__: "false",
  },
});
