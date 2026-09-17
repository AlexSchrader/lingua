// PREFLIGHT — prove the server is usable before running a single test.
//
// WHY THIS EXISTS. On 2026-09-17 the dev smoke went from 39/39 to ~22/39. Every
// failure was a page-load timeout; every test passed alone. It read exactly like a
// regression in whatever had just merged, and it was not — agent worktrees nested
// in the project root had the vite watcher crawling full repo copies, so a server
// that reported "ready in 270ms" took 39,327ms to serve a page.
//
// The suite could not say that. It could only say "16 tests failed", which is the
// worst possible output: it looks like the code, so you hunt the code. And a suite
// that fails for environmental reasons teaches everyone to re-run until green —
// which is the same as not having a suite. That habit is how the glyph card shipped
// with one blank, always-correct button past five green gates in the same week.
//
// MEASURE WHAT A TEST ACTUALLY DOES, WHICH IS NOT `GET /`.
// The first version of this file timed a bare fetch of the base URL and pronounced
// the server healthy at 402ms while the suite ran FOUR TIMES slower than normal —
// caught by deliberately re-breaking the watcher to see whether the guard fired. It
// did not. `/` is a few hundred bytes of HTML; what a test pays for is the browser
// pulling the module graph, 808 source files in dev. So the probe is a real browser
// load, rendered to the point a test could use it. A few seconds per run, against
// one mystery afternoon.
const SLOW_MS = 15000; // a healthy cold load is 2-5s; tests time out at 45s.

export default async function preflight(config) {
  const base = config.projects?.[0]?.use?.baseURL ?? "http://localhost:5173";
  const { chromium } = await import("@playwright/test");

  const browser = await chromium.launch();
  const page = await browser.newPage();
  let ms;
  try {
    const t0 = Date.now();
    await page.goto(base, { waitUntil: "domcontentloaded", timeout: 60_000 });
    // Rendered, not merely served — the app shell is what every test waits for.
    await page.waitForSelector("nav, button", { timeout: 60_000 });
    ms = Date.now() - t0;
  } catch (err) {
    await browser.close();
    // SAME DIAGNOSTIC AS THE SLOW PATH. Found by re-breaking the watcher on purpose
    // to watch this fire: it took the timeout branch, not the slow one, and a terse
    // message there would have sent the next person hunting the code anyway — the
    // exact failure this file exists to prevent.
    throw new Error(diagnostic(`never rendered within 60s (${err?.message ?? err})`));
  }
  await browser.close();

  if (ms > SLOW_MS) throw new Error(diagnostic(`first rendered page load ${ms}ms, healthy is 2-5s`));

  console.log(`preflight: first rendered page load ${ms}ms — ok`);
}

// One message for every way this fails: the cause has been the same one twice, and
// the reader needs the cause rather than the symptom.
function diagnostic(what) {
  return [
    ``,
    `PREFLIGHT FAILED — the server is not usable: ${what}.`,
    ``,
    `Refusing to run the suite. At this speed every test fails on its page load and`,
    `every failure looks like a code regression. This is the environment, not the code.`,
    ``,
    `MOST LIKELY CAUSE — a repo copy nested inside the project root, which the vite`,
    `watcher then crawls. It has happened twice: crew worktrees as lingua-*/ on`,
    `2026-09-13, and agent worktrees in .claude/worktrees/ on 2026-09-17.`,
    ``,
    `  Look for one:   ls -d */ .claude/*/ | head -30`,
    `  A copy is any directory carrying its own node_modules or .git.`,
    `  The fix is a PATTERN in vite.config.js server.watch.ignored, never another`,
    `  name appended to the list — naming offenders has already failed twice.`,
    ``,
    `OTHER CAUSES WORTH A GLANCE: another dev server already on this port (use`,
    `SMOKE_PORT=xxxx), or a second session running its own gate in this working tree.`,
    ``,
  ].join("\n");
}
