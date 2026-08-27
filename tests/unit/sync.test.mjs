import test from "node:test";
import assert from "node:assert/strict";
import { chooseSource, hasMeaningfulProgress, extractProgress, slimItems, SYNC_KEYS } from "../../src/store/sync.js";

const withProgress = { items: { "ja-u1l1-a": { rung: 2 } } };
const empty = { items: { "ja-u1l1-a": { rung: 0 } }, streak: { count: 0 }, stats: {} };

test("first login (no cloud row) → push the local progress up", () => {
  assert.equal(chooseSource({ updatedAt: 100, blob: withProgress }, null), "push");
  assert.equal(chooseSource({ updatedAt: 100, blob: withProgress }, { updatedAt: 0, blob: null }), "push");
});

test("fresh device with no real progress → pull (never overwrite cloud with empty)", () => {
  // Local is newer by clock, but it's empty — must still PULL.
  assert.equal(
    chooseSource({ updatedAt: 999, blob: empty }, { updatedAt: 1, blob: withProgress }),
    "pull"
  );
});

test("cloud newer than a device that has progress → pull", () => {
  assert.equal(
    chooseSource({ updatedAt: 100, blob: withProgress }, { updatedAt: 200, blob: withProgress }),
    "pull"
  );
});

test("local newer (or equal) and has progress → push", () => {
  assert.equal(
    chooseSource({ updatedAt: 200, blob: withProgress }, { updatedAt: 100, blob: withProgress }),
    "push"
  );
  assert.equal(
    chooseSource({ updatedAt: 100, blob: withProgress }, { updatedAt: 100, blob: withProgress }),
    "push"
  );
});

test("hasMeaningfulProgress: rung>0, streak, or any positive stat counts", () => {
  assert.equal(hasMeaningfulProgress({ items: { x: { rung: 1 } } }), true);
  // The REAL store field is streak.current — this case would have returned false
  // before the fix (the guard read the non-existent streak.count), silently
  // weakening the protection.
  assert.equal(hasMeaningfulProgress({ streak: { current: 3 } }), true);
  assert.equal(hasMeaningfulProgress({ streak: { count: 3 } }), true); // legacy fallback still honored
  assert.equal(hasMeaningfulProgress({ stats: { learned: 5 } }), true);
  assert.equal(hasMeaningfulProgress({ items: { x: { rung: 0 } }, streak: { current: 0 }, stats: {} }), false);
  assert.equal(hasMeaningfulProgress({}), false);
});

// THE data-loss regression. A real device must never be overwritten by an empty
// cloud, even when the empty cloud row is NEWER (an earlier torn/hot-reloaded
// session pushed an empty profile up, stamping a fresh timestamp). Before the fix,
// chooseSource fell through to last-write-wins and returned "pull" here — wiping
// the learner's real progress. This is the exact scenario that lost a real save.
test("real local vs a NEWER but EMPTY cloud → push (never pull an empty over real progress)", () => {
  assert.equal(
    chooseSource({ updatedAt: 1, blob: withProgress }, { updatedAt: 9999, blob: empty }),
    "push"
  );
});

test("both empty → timestamp decides, and neither can lose real data", () => {
  // Two empty states: harmless either way, so last-write-wins is fine.
  assert.equal(chooseSource({ updatedAt: 1, blob: empty }, { updatedAt: 2, blob: empty }), "pull");
  assert.equal(chooseSource({ updatedAt: 2, blob: empty }, { updatedAt: 1, blob: empty }), "push");
});

test("slimItems keeps only touched items, as a {rung, srs} overlay", () => {
  const srs = { due: "2026-01-01", reps: 3, state: 2 };
  const items = {
    "a": { rung: 2, srs, front: "あ", meaning: "a", example: {}, lang: "ja" }, // touched
    "b": { rung: 0, srs: { reps: 0 }, front: "い", meaning: "i" }, // untouched
    "c": { rung: 1, srs: { reps: 1 } }, // touched
  };
  const slim = slimItems(items);
  assert.deepEqual(Object.keys(slim).sort(), ["a", "c"], "only rung>0 items survive");
  // Content fields are dropped — only the mutable progress overlay remains.
  assert.deepEqual(slim.a, { rung: 2, srs });
  assert.equal(slim.a.front, undefined);
});

test("extractProgress slims items so the cloud blob can't bloat", () => {
  const state = { items: { x: { rung: 3, srs: { reps: 5 }, front: "big content" }, y: { rung: 0 } }, streak: { current: 1 } };
  const out = extractProgress(state);
  assert.deepEqual(Object.keys(out.items), ["x"], "untouched items are not uploaded");
  assert.equal(out.items.x.front, undefined, "content is not uploaded");
  assert.deepEqual(out.items.x, { rung: 3, srs: { reps: 5 } });
});

test("extractProgress copies exactly the synced keys, nothing else", () => {
  const full = { items: 1, languages: 2, streak: 3, stats: 4, daily: 5, devMode: 6, settings: 7, profile: 8, milestonesEarned: 9, ui: 99, junk: 0 };
  assert.deepEqual(Object.keys(extractProgress(full)).sort(), [...SYNC_KEYS].sort());
  assert.equal(extractProgress(full).ui, undefined);
});
