import { defineConfig, devices } from "@playwright/test";

const MODE = process.env.SMOKE_MODE || "dev";
const PORT = MODE === "preview" ? 4173 : 5173;
// Preview mode must rebuild first — `vite preview` only serves the existing
// dist/, so without a build it would smoke-test a stale bundle (the exact
// blank-on-prod trap this suite exists to catch).
const command =
  MODE === "preview"
    ? "npm run build && npm run preview -- --port 4173"
    : "npm run dev -- --port 5173";

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
    reuseExistingServer: MODE === "preview" ? false : !process.env.CI,
    timeout: 120000,
  },
});
