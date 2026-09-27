// THE AUTH-GATE TEST SWITCH — DEV BUILDS ONLY.
//
// WHY IT EXISTS. The auth gate (App.jsx) is the first thing a new learner meets and
// it was the ONLY screen no browser test had ever rendered. `AUTH_ENABLED` requires
// `!navigator.webdriver`, and Playwright always sets that flag — so every one of the
// 43 smoke tests skipped the whole block and landed inside AppShell. The gate sits
// ABOVE AppShell, so it is unreachable once you are in: no test ever started outside.
//
// That was not a theoretical hole. On 2026-09-17 entering Preview Mode on a build
// with Supabase keys rendered the LOGIN screen over the whole app with no way back —
// Settings → Exit preview lives inside AppShell, below the gate (see preview.js's
// note). Alex was locked out of his own app, and a green suite had nothing to say
// about it, because the suite cannot reach the gate.
//
// WHAT IT DOES. A Playwright `addInitScript` sets
//
//   window.__LINGUA_TEST_AUTH__ = { ready, user, recovery, initialSyncDone }
//
// before any app module runs. Two readers pick it up:
//   - App.jsx  — supplies the two ENV terms of `authGateEnabled` and neutralises
//                only the WebDriver term. The `preview` term is still honoured, so
//                the preview lockout above is a real, testable property.
//   - cloudSync.js — stands in for the Supabase auth listener, setting the same
//                slice (`ready`/`user`/`recovery`/`initialSyncDone`) that
//                `onAuthStateChange` would set. It is consulted AFTER the preview
//                early-return, so preview stays offline exactly as it is in prod.
//
// WHAT IT IS NOT. It does not weaken a check and it is not an auth bypass: the only
// thing it can do is turn the gate ON and describe an auth state. There is no value
// of it that lets an unauthenticated learner past a gate that is on, and it exposes
// no store internals.
//
// IT CANNOT REACH A PRODUCTION BUILD. `testAuthSeed` returns null behind
// `import.meta.env.PROD`, which Vite replaces with the literal `true` in a build —
// so the function folds to `return null`, `pickTestAuthSeed` goes unreferenced and
// the whole switch (the key string included) is tree-shaken out. Verify with:
//
//   npm run build && grep -r __LINGUA_TEST_AUTH__ dist/     # no matches
//
// That elimination is also why the tests that use it are `test.skip`ped under
// SMOKE_MODE=preview, which smokes a real production build — the same arrangement
// TraceCard's free-mode hook already uses.
export const TEST_AUTH_KEY = "__LINGUA_TEST_AUTH__";

// Pure, so the guard that actually matters is unit-testable without a browser:
// a production build must yield null no matter what the page put on `window`.
// See tests/unit/test-auth.test.mjs.
export function pickTestAuthSeed(win, isProd) {
  if (isProd) return null;
  const seed = win?.[TEST_AUTH_KEY];
  if (!seed || typeof seed !== "object" || Array.isArray(seed)) return null;
  return seed;
}

export function testAuthSeed() {
  if (import.meta.env.PROD) return null; // folded away in a build — see above
  try {
    return pickTestAuthSeed(globalThis.window, false);
  } catch {
    return null;
  }
}
