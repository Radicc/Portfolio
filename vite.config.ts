// vite.config.js
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    resolve: {
      alias: [{ find: "@", replacement: "/src" }],
    },
    build: {
      outDir: "dist",
    },
    plugins: [tsconfigPaths()],
    base: "/",
  }
  return config
})
