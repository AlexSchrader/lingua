import test from "node:test";
import assert from "node:assert/strict";
import { validateContent, LIVE_CARD_KINDS } from "../../src/data/contract.js";
import { UNITS, LANGUAGES } from "../../src/data/index.js";

// ---- real corpus passes ------------------------------------------------------

test("real content passes validateContent with no errors", () => {
  const { errors } = validateContent(UNITS, LANGUAGES);
  assert.deepEqual(
    errors,
    [],
    `Real content has validation errors:\n${errors.join("\n")}`
  );
});

// ---- hard-rule rejection fixtures -------------------------------------------

test("rejects a unit containing a duplicate item id", () => {
  // Every field is valid; only the repeated item id is wrong.
  const broken = {
    id: "ja-u1",
    lang: "ja",
    order: 1,
    title: "Broken",
    lessons: [
      {
        id: "ja-u1l1",
        unit: 1,
        lesson: 1,
        title: "Dupe items",
        dominantMode: "recall",
        canDo: "test",
        cefr: "A1",
        items: [
          {
            id: "ja-u1l1-x",
            type: "vocab",
            front: "テスト",
            reading: "tesuto",
            meaning: "test",
            example: { jp: "テスト", en: "test" },
            accept: [],
          },
          {
            id: "ja-u1l1-x", // intentional duplicate
            type: "vocab",
            front: "テスト2",
            reading: "tesuto2",
            meaning: "test 2",
            example: { jp: "テスト2", en: "test 2" },
            accept: [],
          },
        ],
      },
    ],
  };

  const { errors } = validateContent([broken], LANGUAGES);
  const dupe = errors.find(
    (er) => er.includes("ja-u1l1-x") && er.includes("duplicate")
  );
  assert.ok(
    dupe,
    `Expected a duplicate-id error for ja-u1l1-x, got:\n${errors.join("\n")}`
  );
});

test("rejects a playable lesson missing cefr", () => {
  const noCefr = {
    id: "ja-u1",
    lang: "ja",
    order: 1,
    title: "NoCefr",
    lessons: [
      {
        id: "ja-u1l1",
        unit: 1,
        lesson: 1,
        title: "No cefr lesson",
        dominantMode: "recall",
        canDo: "test",
        // cefr intentionally omitted → undefined
        items: [
          {
            id: "ja-u1l1-x",
            type: "vocab",
            front: "テスト",
            reading: "tesuto",
            meaning: "test",
            example: { jp: "テスト", en: "test" },
            accept: [],
          },
        ],
      },
    ],
  };

  const { errors } = validateContent([noCefr], LANGUAGES);
  const cefrErr = errors.find(
    (er) => er.includes("ja-u1l1") && er.includes("cefr")
  );
  assert.ok(
    cefrErr,
    `Expected a missing-cefr error for ja-u1l1, got:\n${errors.join("\n")}`
  );
});

test("rejects a locked stub that has stray fields", () => {
  const strayStub = {
    id: "ja-u1",
    lang: "ja",
    order: 1,
    title: "Stray stub",
    lessons: [
      { id: "ja-u1l1", title: "ok", locked: true },
      // locked stub with extra dominantMode field
      { id: "ja-u1l2", title: "stray", locked: true, dominantMode: "recall" },
    ],
  };

  const { errors } = validateContent([strayStub], LANGUAGES);
  const strayErr = errors.find(
    (er) => er.includes("ja-u1l2") && er.includes("stray")
  );
  assert.ok(
    strayErr,
    `Expected a stray-fields error for ja-u1l2, got:\n${errors.join("\n")}`
  );
});

// ---- LIVE_CARD_KINDS canonical set ------------------------------------------

// This test defines the expected set. If you add a new card kind to the runner,
// add it to LIVE_CARD_KINDS in contract.js AND update this expected list.
test("LIVE_CARD_KINDS is exactly the current active set", () => {
  assert.deepEqual(
    [...LIVE_CARD_KINDS].sort(),
    ["build", "choice", "teach", "type:meaning", "type:produce"],
    "Update both LIVE_CARD_KINDS in contract.js and this assertion when adding a new card kind"
  );
});
