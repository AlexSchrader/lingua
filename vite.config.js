import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      // We register the SW ourselves in main.jsx so we can check for new deploys
      // on load and reload once when the new build takes control. The default
      // injected script only calls register() — no update check — which let a
      // cached build stick until a manual hard-refresh.
      injectRegister: false,
      // Japanese B1 pushed the main chunk past workbox's 2 MiB precache default —
      // 2.25 MB once all 1,368 B1 cards are in. Every authoring block built fine
      // alone; the ceiling is only reached when the blocks are merged, which is the
      // "green alone, red combined" case the merge seat exists to catch.
      // Left unset the build hard-fails, and forcing it through would drop the app's
      // own JS from the precache — offline breaks, which is the failure a PWA
      // learning app can least afford.
      // 4 MiB buys room for B2, which roughly doubles the content again. When that
      // lands, split content by language/stage instead of raising this further:
      // precaching an ever-larger single chunk is the wrong end of the trade.
      workbox: {
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
      },
      includeAssets: [
        "logo/favicon-32.png",
        "logo/apple-touch-icon.png",
        "logo/icon-192.png",
        "logo/icon-512.png",
        "logo/icon-maskable-512.png",
      ],
      manifest: {
        name: "Lingua",
        short_name: "Lingua",
        display: "standalone",
        background_color: "#F1EDE2",
        theme_color: "#2A4A7B",
        start_url: "/",
        icons: [
          { src: "logo/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
          { src: "logo/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
          { src: "logo/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
      },
    }),
  ],
});
