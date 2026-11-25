// A DEVELOPMENT-MODE BUNDLE for the CI dev smoke: `node scripts/build-devbuild.mjs` -> dist-devbuild/.
//
// WHY. The dev smoke exists to exercise what only a development build carries (the auth-gate
// switch in src/store/testAuth.js, TraceCard's window.__trace, the other dev hooks): they are
// tree-shaken out of production. Run against `vite` (the dev server), every page load pulls the
// whole module graph unbundled — ~1,300 files once all nine languages were authored (the preflight
// note said 808 when it was written). A fast PC absorbs that; GitHub's runner, four tests at a
// time, did not: every `main` run failed from 2026-10-12 on, first with page-load timeouts, then
// with preflight refusing a 15 s cold load (25 Nov). No timeout was raised to hide it.
//
// WHAT THIS IS. The same app built with NODE_ENV=development (import.meta.env.DEV true, PROD false,
// so every dev hook is in) but bundled: 15 files instead of ~1,300. Served by `vite preview`, it is
// what SMOKE_MODE=devbuild smokes (playwright.config.js). Local gates keep using the real dev server
// (SMOKE_MODE unset), which also catches dev-server problems such as nested repo copies.
//
// Takes no arguments; any argument exits 2 rather than being ignored.
if (process.argv.length > 2) {
  console.error(`build-devbuild: takes no arguments, got ${process.argv.slice(2).join(" ")}`);
  process.exit(2);
}
// Must be set before Vite loads: it decides import.meta.env.PROD from NODE_ENV, not from --mode.
process.env.NODE_ENV = "development";
const { build } = await import("vite");
await build({ mode: "development", logLevel: "warn", build: { outDir: "dist-devbuild", emptyOutDir: true, minify: "esbuild" } });
// (Minified: smaller to parse on a slow runner. Minifying keeps every dev hook; only PROD would drop them.)
console.log("build-devbuild: dist-devbuild/ written (development mode, bundled)");
