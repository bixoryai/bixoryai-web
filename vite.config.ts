
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// Root-absolute asset URLs. A relative base (`./`) makes nested routes such as
// /solutions/ai-strategy-consulting request /solutions/assets/... and render blank.
// Production is the custom domain https://bixory.ai (base '/'). GitHub Pages still
// answers unknown paths with HTTP 404 and public/404.html rewrites them back to
// the SPA; this repo does not change DNS or Pages settings.
export default defineConfig(({ mode }) => {
  return {
    base: "/",
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
