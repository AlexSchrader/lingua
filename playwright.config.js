import { defineConfig, devices } from "@playwright/test";
import os from "node:os";

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
  // WORKER CAP — every test here drives ONE shared Vite dev server, so workers past the
  // point that server saturates do not add throughput, they add queueing. Playwright's
  // default is half the cores; on a 32-core box that is 16 browsers competing for one
  // server, and the tests that lose the race are simply the longest ones — which is why
  // failures clustered on the slowest tests (coverage, reset, trace, app-judged) and
  // looked like a routing regression rather than contention.
  //
  // Measured on this machine, 3 full runs each:
  //   default (16 workers)  card-kind coverage 24.7-25.1s   suite 53.6-55.8s   1 flake in 4 runs
  //   8 workers             card-kind coverage 18.9-19.8s   suite 49.5-52.8s   0 in 3
  // Capping is strictly better on BOTH axes — faster wall clock and no contention
  // losses — so there is no speed/stability trade being made here.
  //
  // min(half the cores, 8), never below 1: a 2-core CI runner still gets its usual 1
  // worker, and a big local box stops oversubscribing. Raise it only with numbers.
  workers: Math.max(1, Math.min(8, Math.ceil(os.cpus().length / 2))),
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
