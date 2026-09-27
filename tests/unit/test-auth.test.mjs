import test from "node:test";
import assert from "node:assert/strict";
import { pickTestAuthSeed, TEST_AUTH_KEY } from "../../src/store/testAuth.js";

// THE AUTH-GATE TEST SWITCH — the guard, not the feature.
//
// src/store/testAuth.js exists so a browser test can render the auth gate, which no
// test had ever reached (AUTH_ENABLED requires !navigator.webdriver). The switch's
// behaviour is covered by tests/smoke.spec.js "THE AUTH GATE"; what is covered HERE
// is the one property that must hold whatever a page does: A PRODUCTION BUILD CANNOT
// BE STEERED BY IT.
//
// Two independent proofs of that, both cheap, because "it's dev-only" is exactly the
// kind of claim that quietly stops being true:
//   1. this file — the pure picker refuses every input when isProd is true;
//   2. the build — `npm run build && grep -r __LINGUA_TEST_AUTH__ dist/` finds
//      nothing, because testAuthSeed()'s `if (import.meta.env.PROD) return null`
//      folds to `return null` and the rest is tree-shaken.

test("a production build yields no seed, whatever the page put on window", () => {
  const win = { [TEST_AUTH_KEY]: { ready: true, user: { id: "u1" }, recovery: true } };
  assert.equal(pickTestAuthSeed(win, true), null);
});

test("dev with no hook set behaves exactly as if the switch did not exist", () => {
  assert.equal(pickTestAuthSeed({}, false), null);
  assert.equal(pickTestAuthSeed(undefined, false), null);
});

test("dev with the hook set returns the seed the page asked for", () => {
  const seed = { ready: true, user: { id: "u1" }, initialSyncDone: true };
  assert.deepEqual(pickTestAuthSeed({ [TEST_AUTH_KEY]: seed }, false), seed);
});

test("a non-object hook is ignored rather than spread into the auth slice", () => {
  // `setAuth({ ...seed })` on a string would splatter indexed characters across the
  // auth slice; on an array it would add numeric keys. Neither is a state the gate
  // branches on, so refuse them at the door instead of half-applying them.
  for (const bad of ["true", 1, true, [], ["ready"], null, 0, ""]) {
    assert.equal(pickTestAuthSeed({ [TEST_AUTH_KEY]: bad }, false), null, `should ignore ${JSON.stringify(bad)}`);
  }
});
