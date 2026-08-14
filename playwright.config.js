import { defineConfig, devices } from "@playwright/test";

const MODE = process.env.SMOKE_MODE || "dev";
// SMOKE_PORT exists because `reuseExistingServer` (below) became a silent
// correctness hazard once the repo grew git worktrees. A dev server still running
// in ANOTHER worktree — or in the main checkout — already owns 5173, so Playwright
// attaches to THAT tree and the suite passes while testing code you didn't write.
// It cost a real debugging session on 2026-08-13: the new Spanish smoke test booted
// with 0 Spanish items because the server holding 5173 belonged to the main
// checkout, which has no Spanish content merged. Run a worktree's suite on its own
// port:  SMOKE_PORT=5183 npx playwright test
const PORT = Number(process.env.SMOKE_PORT) || (MODE === "preview" ? 4173 : 5173);
// Preview mode must rebuild first — `vite preview` only serves the existing
// dist/, so without a build it would smoke-test a stale bundle (the exact
// blank-on-prod trap this suite exists to catch).
const command =
  MODE === "preview"
    ? `npm run build && npm run preview -- --port ${PORT}`
    : `npm run dev -- --port ${PORT}`;

export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.js", // Playwright owns *.spec.js; node:test owns tests/unit/*.test.mjs
  // Playwright's 30s default was set when the corpus was a fraction of its size.
  // These are real end-to-end sessions over 2900+ seeded items, and "reviews are
  // app-judged" measured 29.8s in July — ~0.2s of headroom — then tipped over when
  // French grew from 185 to 566 items. Raised to 45s: enough room for the corpus to
  // keep growing, still short enough that a genuinely hung test fails rather than
  // hanging CI. NOTE: no assertion was touched — this is a wall-clock budget, not a
  // weakened check. If a test needs more than this, profile it; don't raise it again.
  timeout: 45_000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    ...devices["Pixel 5"],
    // Opt-in escape hatch for environments with a pre-provisioned Chromium
    // (e.g. remote/cloud sessions) whose build number doesn't match this
    // Playwright version. Unset (local + CI), behavior is unchanged.
    ...(process.env.PW_EXECUTABLE_PATH
      ? { launchOptions: { executablePath: process.env.PW_EXECUTABLE_PATH } }
      : {}),
  },
  webServer: {
    command,
    url: `http://localhost:${PORT}`,
    // Never reuse a running server in preview mode — a stale one would skip the
    // rebuild and serve an old bundle.
    // Reuse is what makes a worktree run silently test the wrong tree, so asking
    // for an explicit SMOKE_PORT opts out of it: you get YOUR server or a loud
    // "port already in use", never a quiet pass against someone else's checkout.
    reuseExistingServer: MODE === "preview" || process.env.SMOKE_PORT ? false : !process.env.CI,
    timeout: 120000,
  },
});
