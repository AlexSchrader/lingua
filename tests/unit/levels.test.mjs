import { test } from "node:test";
import assert from "node:assert/strict";
import { UNITS, seedItems } from "../../src/data/index.js";
import { cefrLevelReached, isLevelComplete, levelRank } from "../../src/store/levels.js";

const CEFR_IDX = { A1: 0, A2: 1, B1: 2, B2: 3 };

// ids of every ja item at CEFR ≤ maxBand, from the live curriculum.
function jaIdsUpTo(maxBand) {
  const ids = [];
  for (const u of UNITS) {
    if (u.lang !== "ja") continue;
    for (const l of u.lessons) {
      if (l.items && (CEFR_IDX[l.cefr] ?? 0) <= CEFR_IDX[maxBand]) {
        for (const it of l.items) ids.push(it.id);
      }
    }
  }
  return ids;
}

function freshItems() {
  const m = {};
  for (const id of Object.keys(seedItems())) m[id] = { rung: 0 };
  return m;
}
function withRecognized(ids) {
  const m = freshItems();
  for (const id of ids) if (m[id]) m[id] = { rung: 1 };
  return m;
}

test("cefrLevelReached: pre-A1 before anything is completed", () => {
  assert.equal(cefrLevelReached("ja", freshItems()), "pre-A1");
});

test("cefrLevelReached: reaches A1 when all A1 content is recognized", () => {
  assert.equal(cefrLevelReached("ja", withRecognized(jaIdsUpTo("A1"))), "A1");
});

// The regression guard: with only A1 content authored, "all items ≤ B2" is
// vacuously true — the level must NOT jump to B2. It caps at the highest band
// that actually HAS content. (Once A2 units go live, A2 completion → level A2.)
test("cefrLevelReached: does not over-promote past authored content", () => {
  const reached = cefrLevelReached("ja", withRecognized(jaIdsUpTo("B2")));
  const authoredBands = new Set(
    UNITS.filter((u) => u.lang === "ja").flatMap((u) => u.lessons.filter((l) => l.items).map((l) => l.cefr))
  );
  const highestAuthored = ["B2", "B1", "A2", "A1"].find((b) => authoredBands.has(b));
  assert.equal(reached, highestAuthored); // e.g. "A1" today, "A2" once A2 is live — never beyond
});

test("isLevelComplete: false for a language with no content at all", () => {
  assert.equal(isLevelComplete("es", "A1", freshItems()), false);
});

test("levelRank: pre-A1 < A1 < A2 < B1 < B2", () => {
  assert.ok(levelRank("pre-A1") < levelRank("A1"));
  assert.ok(levelRank("A1") < levelRank("A2"));
  assert.ok(levelRank("A2") < levelRank("B1"));
  assert.ok(levelRank("B1") < levelRank("B2"));
  assert.equal(levelRank("nonsense"), -1);
});
