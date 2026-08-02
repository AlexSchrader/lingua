import { test } from "node:test";
import assert from "node:assert/strict";
import { LANGUAGES } from "../../src/data/languages.js";

test("language catalog: 20 languages, all target B2, unique ids", () => {
  assert.equal(LANGUAGES.length, 20);
  assert.ok(LANGUAGES.every((l) => l.target === "B2"), "every language targets B2");
  assert.equal(new Set(LANGUAGES.map((l) => l.id)).size, 20, "ids are unique");
  assert.ok(LANGUAGES.every((l) => l.id && l.name && l.flag), "each has id/name/flag");
});

// Was: "only Japanese is pre-unlocked; the rest are planned (unlocked:false,
// unlock:null)". That test's real intent was the second line — no hardcoded cascade —
// which it could only express as "the field is null everywhere". The fields are now
// gone, so the guarantee is unconditional: there is no cascade shape to set.
test("catalog entries carry no retired cascade fields", () => {
  for (const l of LANGUAGES) {
    assert.ok(!("unlock" in l), `${l.id}: unlock is a retired cascade field`);
    assert.ok(!("unlocked" in l), `${l.id}: unlocked is a retired cascade field`);
  }
});

test("a catalog entry is exactly {id, name, flag, target}", () => {
  // Availability is DERIVED — isLive() from content, canAddLanguage() from the
  // earn-A1 rule — so a catalog entry must not carry per-language state that could
  // drift from it, or hardcode which language a learner starts with.
  for (const l of LANGUAGES) {
    assert.deepEqual(Object.keys(l).sort(), ["flag", "id", "name", "target"], `${l.id} shape`);
  }
});
