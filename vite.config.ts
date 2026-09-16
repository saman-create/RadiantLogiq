import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { siteRoutes } from "./build/siteRoutes.ts";

export default defineConfig({
  plugins: [react(), siteRoutes()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
});
