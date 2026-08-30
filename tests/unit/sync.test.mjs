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
  const full = { items: 1, languages: 2, streak: 3, stats: 4, daily: 5, devMode: 6, settings: 7, profile: 8, milestonesEarned: 9, resetAt: 10, ui: 99, junk: 0 };
  assert.deepEqual(Object.keys(extractProgress(full)).sort(), [...SYNC_KEYS].sort());
  assert.equal(extractProgress(full).ui, undefined);
});

// ── Deliberate reset ─────────────────────────────────────────────────────────
// The bug these pin: "Reset all progress", close the app, reopen — and the old
// progress is back. Nothing was slow; the reset was UNSYNCABLE. An emptied device
// is indistinguishable from a fresh or torn one by shape alone, so both guards
// (chooseSource here, the upload interlock in cloudSync) sent it back down. The
// receipt — a `resetAt` stamped when the learner taps the button — is what makes
// intent legible, and comparing it against the CLOUD's own timestamp is what keeps
// a stale receipt from ever resurrecting itself into a wipe.
const resetAtEmpty = (t) => ({ ...empty, resetAt: t });

test("a reset performed AFTER the last cloud write wins → push the wipe up", () => {
  assert.equal(
    chooseSource({ updatedAt: 500, blob: resetAtEmpty(500) }, { updatedAt: 100, blob: withProgress }),
    "push"
  );
});

test("a STALE reset never wipes the cloud → pull", () => {
  // Reset at t=50, but the cloud has been written since (t=100): that cloud row is
  // progress made after the reset, so it is the newer truth. This is the case that
  // keeps an old receipt in a restored blob from eating real work.
  assert.equal(
    chooseSource({ updatedAt: 500, blob: resetAtEmpty(50) }, { updatedAt: 100, blob: withProgress }),
    "pull"
  );
});

test("no receipt at all still pulls — the original guard is untouched", () => {
  assert.equal(
    chooseSource({ updatedAt: 999, blob: { ...empty, resetAt: 0 } }, { updatedAt: 1, blob: withProgress }),
    "pull"
  );
  assert.equal(
    chooseSource({ updatedAt: 999, blob: empty }, { updatedAt: 1, blob: withProgress }),
    "pull"
  );
});

test("isDeliberateReset is exactly 'newer than the cloud row', nothing looser", async () => {
  const { isDeliberateReset } = await import("../../src/store/sync.js");
  assert.equal(isDeliberateReset({ blob: { resetAt: 200 } }, { updatedAt: 100 }), true);
  assert.equal(isDeliberateReset({ blob: { resetAt: 100 } }, { updatedAt: 100 }), false); // ties lose
  assert.equal(isDeliberateReset({ blob: { resetAt: 0 } }, { updatedAt: 0 }), false);
  assert.equal(isDeliberateReset({ blob: {} }, { updatedAt: 0 }), false);
  assert.equal(isDeliberateReset({}, {}), false);
});

test("the reset receipt travels with the synced slice", () => {
  // If resetAt isn't in SYNC_KEYS it never reaches the cloud, and the fix silently
  // degrades to "works on this device until the next sign-in".
  assert.ok(SYNC_KEYS.includes("resetAt"));
  assert.equal(extractProgress({ resetAt: 7, items: {} }).resetAt, 7);
});
