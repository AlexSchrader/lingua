import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// Absolute project root, forward-slashed — chokidar matches watch globs against
// absolute paths, and on Windows a backslashed pattern never matches.
const ROOT = path.dirname(fileURLToPath(import.meta.url)).split(path.sep).join("/");

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
  server: {
    watch: {
      // Language-crew worktrees are meant to be SIBLINGS of this repo, but broken
      // worktree metadata has left full copies nested inside the root (`lingua-*/`,
      // `drill-tools/`) — each a whole repo with its own node_modules and
      // public/audio. Vite's watcher walked them and the dev server ballooned to
      // ~4 GB and took longer than Playwright's 120s webServer timeout to become
      // ready, so the smoke gate could not start at all. Ignoring them here is the
      // safe half of the fix; reclaiming the directories is a separate cleanup.
      //
      // ANCHORED to the project root on purpose. The obvious `**/lingua-*` also
      // matches the 17 mascot assets in public/mascot (lingua-base.png,
      // lingua-cheer.png, lingua-achievement.mp4 …), which would silently cost
      // them HMR. These patterns are absolute so only the root-level worktree
      // directories match.
      //
      // ⚠️ THE SAME BUG CAME BACK IN A NEW DIRECTORY. `.claude/worktrees/` holds
      // agent worktrees — full repo copies, node_modules and public/audio included —
      // and the rule above only named `lingua-*`, so the watcher walked them again.
      // Symptom: `GET /` took 39 SECONDS on a dev server that reported "ready in
      // 270ms", which blew Playwright's 45s test timeout and turned the dev smoke
      // from 39/39 into ~22/39 of page-load failures that looked like real
      // regressions. `du -sh .claude/worktrees` did not finish in five minutes.
      //
      // Ignore by PATTERN, not by naming each new offender: anything that is a repo
      // copy nested in the root. The next tool to invent its own directory in here
      // should not cost another afternoon.
      ignored: [
        path.posix.join(ROOT, "lingua-*"),
        path.posix.join(ROOT, "lingua-*/**"),
        path.posix.join(ROOT, "drill-tools"),
        path.posix.join(ROOT, "drill-tools/**"),
        path.posix.join(ROOT, ".claude/**"),
        // A nested node_modules or .git is a repo copy by definition, wherever it is.
        "**/node_modules/**",
        "**/.git/**",
      ],
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split the big static data out of the entry chunk so no single file trips
        // workbox's precache size limit. Per the note on maximumFileSizeToCacheInBytes
        // above ("when B2 lands, split content by language/stage instead of raising
        // this further"), B2 has landed, so we split here rather than bump the limit.
        // These remain STATIC imports — separate files, still loaded eagerly on boot —
        // so there is no async/runtime behaviour change, only finer file granularity.
        manualChunks(id) {
          if (id.includes("/src/data/kanjivg")) return "kanjivg";
          if (id.includes("/src/data/ja/")) return "content-ja";
          if (id.includes("/src/data/fr/")) return "content-fr";
          if (id.includes("/src/data/es/")) return "content-es";
        },
      },
    },
  },
});
