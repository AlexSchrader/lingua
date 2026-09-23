import test from "node:test";
import assert from "node:assert/strict";
import { REAL_KEY, PREVIEW_KEY, isPreview, persistKey, buildPreviewState } from "../../src/store/preview.js";
import { LANGUAGES } from "../../src/data/languages.js";

// Preview Mode's ONE safety property: the real deck is never written. Isolation is
// the persist key, bound once at store creation — not a flag each writer honours —
// so these tests pin the key selection and the seeded shape. If persistKey() ever
// returns REAL_KEY while the flag is set, preview progress lands on the profile the
// learner actually studies on, and that is unrecoverable.

function withLocalStorage(entries, fn) {
  const store = new Map(Object.entries(entries));
  const prev = globalThis.localStorage;
  globalThis.localStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
  };
  try {
    return fn(store);
  } finally {
    if (prev === undefined) delete globalThis.localStorage;
    else globalThis.localStorage = prev;
  }
}

test("no flag → the real key, so a normal boot is untouched", () => {
  withLocalStorage({}, () => {
    assert.equal(isPreview(), false);
    assert.equal(persistKey(), REAL_KEY);
  });
});

test("flag set → the preview key, never the real one", () => {
  withLocalStorage({ "lingua-preview-on": "1" }, () => {
    assert.equal(isPreview(), true);
    assert.equal(persistKey(), PREVIEW_KEY);
    assert.notEqual(persistKey(), REAL_KEY);
  });
});

test("the two keys are distinct — the whole safety property in one line", () => {
  assert.notEqual(REAL_KEY, PREVIEW_KEY);
});

test("isPreview survives a missing localStorage (SSR, tests, private mode)", () => {
  const prev = globalThis.localStorage;
  delete globalThis.localStorage;
  try {
    assert.equal(isPreview(), false, "must fall back to the real key, not throw");
    assert.equal(persistKey(), REAL_KEY);
  } finally {
    if (prev !== undefined) globalThis.localStorage = prev;
  }
});

test("the seeded preview deck opens every gate", () => {
  const langs = ["ja", "fr"];
  const st = buildPreviewState({ langs, catalog: LANGUAGES, version: 3 });

  assert.equal(st.state.profile.onboarded, true, "onboarding must not stand in the way");
  assert.deepEqual(st.state.profile.languages, langs, "every live language is started");
  assert.equal(st.state.profile.activeLang, "ja");

  // canAddLanguage passes when any started language has reached A1 — B2 clears it
  // for every language, so the picker is fully open.
  for (const id of langs) assert.equal(st.state.languages[id].level, "B2", `${id} not levelled`);

  // Every catalog language is present, not just the started ones — Stats and the
  // picker read the full table.
  assert.equal(Object.keys(st.state.languages).length, LANGUAGES.length);

  // Scratch by definition: no progress, no earned milestones, nothing to mistake
  // for real achievement.
  assert.deepEqual(st.state.items, {});
  assert.deepEqual(st.state.milestonesEarned, []);
  assert.equal(st.state.stats.xpTotal, 0);
  assert.equal(st.state.lastModified, 0, "never looks newer than the real deck to sync");
});

// --- the auth gate must be OFF in preview -----------------------------------
//
// ALEX WAS LOCKED OUT OF THE APP BY THIS, 2026-09-17, on his phone: entering
// preview on a keyed build rendered the login screen reading "Auth isn't
// configured." over everything, and Settings -> Exit preview was unreachable
// because the auth gate sits above AppShell.
//
// WHY A PURE PREDICATE AND NOT A SMOKE TEST. `AUTH_ENABLED` is false under
// WebDriver by construction, so every Playwright run skips the entire auth block
// -- including the existing "Preview Mode: the app runs" test, which passes
// precisely because the gate it would trip is disabled. The gate and preview
// cannot meet under test. Extracting the decision is the only way to pin it.
import { authGateEnabled } from "../../src/store/preview.js";

const KEYED = { hasUrl: true, hasKey: true, isWebdriver: false };

test("PREVIEW NEVER SHOWS THE LOGIN SCREEN, even on a fully keyed build", () => {
  assert.equal(authGateEnabled({ ...KEYED, preview: true }), false);
});

test("a keyed build outside preview still gates on auth", () => {
  assert.equal(authGateEnabled({ ...KEYED, preview: false }), true);
});

test("no keys means no gate, preview or not -- the local-only path", () => {
  for (const preview of [true, false]) {
    assert.equal(authGateEnabled({ hasUrl: false, hasKey: false, isWebdriver: false, preview }), false);
    assert.equal(authGateEnabled({ hasUrl: true, hasKey: false, isWebdriver: false, preview }), false, "half-configured is not configured");
    assert.equal(authGateEnabled({ hasUrl: false, hasKey: true, isWebdriver: false, preview }), false, "half-configured is not configured");
  }
});

test("WebDriver never gates -- the smoke suite must not need a real sign-in", () => {
  assert.equal(authGateEnabled({ hasUrl: true, hasKey: true, isWebdriver: true, preview: false }), false);
});
