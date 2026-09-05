import test from "node:test";
import assert from "node:assert/strict";
import {
  PASSES_PER_KIND, countedPasses, requiredPasses, masteryPct, isMastered, weakestKind,
} from "../../src/store/mastery.js";
import { eligibleKinds } from "../../src/store/cardRouting.js";
import { reviewStepFor } from "../../src/store/reviewStep.js";
import { migrateState } from "../../src/store/migrate.js";

// Mastery is DEMONSTRATED SKILL, not elapsed time. It used to read
// sqrt(stability / 45 days), which showed 50% at a quarter of the target and
// disagreed with the Stats tile (rung 5). Now: PASSES_PER_KIND correct answers on
// every card kind the item can fairly be asked.

const item = (over = {}) => ({
  id: "fr-u1l1-x", type: "vocab", lang: "fr", front: "chat", reading: "chat",
  meaning: "cat", example: { jp: "Le chat dort", en: "The cat sleeps" }, accept: [], ...over,
});
const allKinds = (it, n = PASSES_PER_KIND) =>
  Object.fromEntries(eligibleKinds(it).map((k) => [k, n]));

test("required is 15 per ELIGIBLE kind, relative to the item", () => {
  const it = item();
  assert.equal(requiredPasses(it), PASSES_PER_KIND * eligibleKinds(it).length);
  // A kana cannot speak and has no meaning to reverse, so it needs fewer.
  const kana = item({ type: "kana", meaning: null, example: null, front: "あ", lang: "ja" });
  assert.ok(requiredPasses(kana) < requiredPasses(it), "eligibility is per item, not a fixed list");
  assert.ok(requiredPasses(kana) > 0, "and never zero, or the item is unmasterable");
});

test("no calendar term anywhere — stability does not move the bar", () => {
  const cold = item({ srs: { stability: 0 } });
  const hot = item({ srs: { stability: 9999 } });
  assert.equal(masteryPct(cold), masteryPct(hot));
  assert.equal(masteryPct(hot), 0, "45 days of retention is not evidence of a skill");
});

test("every eligible kind at 15 is mastery; one kind short is not", () => {
  const it = item();
  assert.equal(isMastered(item({ passes: allKinds(it) })), true);
  const kinds = eligibleKinds(it);
  const short = allKinds(it);
  short[kinds[kinds.length - 1]] = PASSES_PER_KIND - 1;
  assert.equal(isMastered(item({ passes: short })), false, "one pass short is not mastered");
});

test("extra reps of one kind cannot stand in for a kind never attempted", () => {
  // The whole point of counting per kind: 100 choice cards is not evidence you can
  // produce or hear the word.
  const it = item();
  const lopsided = { choice: 500 };
  const pct = masteryPct(item({ passes: lopsided }));
  assert.ok(pct < 1, "one kind cannot complete mastery");
  assert.equal(countedPasses(item({ passes: lopsided })), PASSES_PER_KIND, "capped at its own share");
});

test("weakestKind names the thinnest skill — what rotation drills next", () => {
  const it = item();
  const kinds = eligibleKinds(it);
  const passes = Object.fromEntries(kinds.map((k) => [k, 10]));
  passes[kinds[2]] = 1;
  assert.equal(weakestKind(item({ passes })), kinds[2]);
});

// --- rotation ---------------------------------------------------------------
test("a fresh item routes exactly as it did before rotation existed", () => {
  // Every kind is at zero, so there is nothing to rotate on. The legacy hash-gated
  // chain decides, which is what keeps a learner's first pass through a word — and
  // every existing routing test — unchanged.
  const it = item({ rung: 1 });
  assert.deepEqual(reviewStepFor(it), reviewStepFor({ ...it, passes: {} }));
});

test("once counts differ, the least-practised eligible kind wins", () => {
  // choice is ahead, so the stage's other candidate must come up. (Equal counts are
  // the "no evidence" case and deliberately fall back to the legacy chain — see above.)
  const it = item({ rung: 1 });
  const step = reviewStepFor({ ...it, passes: { choice: 9 } });
  const kind = step.mode ? `${step.kind}:${step.mode}` : step.kind;
  assert.equal(kind, "choice:reverse", "should drill the kind with fewer passes");
  // ...and it flips back once that one is ahead.
  const back = reviewStepFor({ ...it, passes: { "choice:reverse": 9 } });
  assert.equal(back.kind, "choice");
});

test("rotation only ever offers kinds the item is eligible for", () => {
  const it = item({ rung: 3, passes: { "type:produce": 9 } });
  const step = reviewStepFor(it);
  const kind = step.mode ? `${step.kind}:${step.mode}` : step.kind;
  assert.ok(eligibleKinds(it).includes(kind) || kind === "build", `${kind} is not eligible`);
});

// --- migration --------------------------------------------------------------
test("an existing learner's bar does not drop to zero on upgrade", () => {
  // Nobody's save has per-kind passes — mastery was a calendar quantity. Reloading
  // into an all-zero bar reads as data loss, so rung is credited as a floor.
  const before = item({ rung: 3, srs: { stability: 40, difficulty: 5 } });
  const after = migrateState({ items: { x: before } }, 1).items.x;
  assert.ok(masteryPct(after) > 0, "migrated progress must show something");
  assert.ok(after.seeded > 0);
});

test("seeded credit can never reach mastery on its own", () => {
  // It has no kind attached, so letting it complete the bar would claim skills the
  // learner never demonstrated. Capped one whole kind short, structurally.
  assert.equal(isMastered(item({ seeded: 99999 })), false);
  assert.ok(masteryPct(item({ seeded: 99999 })) < 1);
});

test("migration runs once — an item with passes is left alone", () => {
  const already = item({ rung: 4, passes: { choice: 3 } });
  const after = migrateState({ items: { x: already } }, 1).items.x;
  assert.equal(after.seeded, undefined);
  assert.deepEqual(after.passes, { choice: 3 });
});
