import { defineConfig, devices } from "@playwright/test";

const MODE = process.env.SMOKE_MODE || "dev";
// SMOKE_PORT lets a crew worktree run its own smoke without colliding with the
// other trees live on this machine. See the reuseExistingServer note below — the
// collision used to be SILENT and green, which is the worst way for it to fail.
const PORT = Number(process.env.SMOKE_PORT) || (MODE === "preview" ? 4173 : 5173);
// Preview mode must rebuild first — `vite preview` only serves the existing
// dist/, so without a build it would smoke-test a stale bundle (the exact
// blank-on-prod trap this suite exists to catch).
const command =
  MODE === "preview"
    ? `npm run build && npm run preview -- --port ${PORT}`
    : `npm run dev -- --port ${PORT}`;

export default defineConfig({
  // Proves the server is usable BEFORE any test runs, and fails with a diagnostic
  // naming the likely cause instead of letting the suite report a dozen page-load
  // timeouts that look like code regressions. See tests/preflight.js for the
  // incident that bought this.
  globalSetup: "./tests/preflight.js",
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
  // ONE Vite dev server, and Playwright defaults to half the cores - 16 workers on
  // this machine. Sixteen cold page loads demanding on-the-fly transforms from a
  // single dev server is the contention that makes wall-clock meaningless, and it
  // gets worse every time the corpus grows. Measured 2026-09-23 on the pt B2 band:
  //   default (16 workers)  "reviews are app-judged" TIMED OUT at 45s -> 1 failed
  //   --workers=2           41 passed
  //   the same test ALONE   24.2s, twice
  //   seedItems()           59ms on the branch vs 61ms on main - not the corpus
  //   SMOKE_MODE=preview    39 passed at full parallelism - a BUILT bundle does not
  //                         transform on demand, so only dev mode is affected
  // The config above says "if a test needs more than this, profile it; dont raise it
  // again". Profiled: the test does not need more time, it needs less contention.
  // No assertion and no timeout was touched.
  workers: 4,
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
    // NEVER reuse a running server, in either mode.
    //
    // Preview always refused, because a stale one skips the rebuild and serves an
    // old bundle. Dev used to accept one when not in CI — and that is a false-green
    // machine. Several language crews run worktrees of this repo at once, every one
    // of them on the same fixed 5173, so the documented `npx playwright test` would
    // attach to WHICHEVER TREE GOT THERE FIRST and report its result as yours.
    // Green for someone else's code, silently, and green is exactly the result that
    // stops you looking. Reported by the pt-B1 seat 2026-09-13 and hit in this
    // session the same day.
    //
    // With this false, a busy port fails LOUDLY ("port already in use") instead of
    // lying. That is the correct trade: the fix is one env var away — run
    // `SMOKE_PORT=5273 npx playwright test` — whereas a wrong-tree pass is
    // undetectable from the output.
    reuseExistingServer: false,
    timeout: 120000,
  },
});
