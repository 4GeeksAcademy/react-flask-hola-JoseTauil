import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    // Esto ayuda a que Codespaces no bloquee la conexión
    hmr: {
      clientPort: 443,
    },
  },
});
