import { test } from "node:test";
import assert from "node:assert/strict";
import { LANGUAGES } from "../../src/data/languages.js";

test("language catalog: 20 languages, all target B2, unique ids", () => {
  assert.equal(LANGUAGES.length, 20);
  assert.ok(LANGUAGES.every((l) => l.target === "B2"), "every language targets B2");
  assert.equal(new Set(LANGUAGES.map((l) => l.id)).size, 20, "ids are unique");
  assert.ok(LANGUAGES.every((l) => l.id && l.name && l.flag), "each has id/name/flag");
});

test("only Japanese is pre-unlocked; the rest are planned (unlocked:false, unlock:null)", () => {
  assert.deepEqual(LANGUAGES.filter((l) => l.unlocked).map((l) => l.id), ["ja"]);
  assert.ok(LANGUAGES.every((l) => l.unlock === null), "no hardcoded unlock cascade");
});
