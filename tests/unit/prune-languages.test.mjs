import test from "node:test";
import assert from "node:assert/strict";
import { pruneStartedLanguages } from "../../src/store/useStore.js";

// Only "ja" has content in these tests; es/fr/de are the content-less crust.
const hasContent = (id) => id === "ja";

test("prunes started languages with no authored content (the ja→es→fr crust)", () => {
  const profile = { languages: ["ja", "es", "fr"], activeLang: "ja" };
  const out = pruneStartedLanguages(profile, hasContent);
  assert.deepEqual(out.languages, ["ja"], "es/fr are dropped");
  assert.equal(out.activeLang, "ja", "active language survives");
});

test("repoints activeLang when it pointed at a pruned language", () => {
  const profile = { languages: ["ja", "es"], activeLang: "es" };
  const out = pruneStartedLanguages(profile, hasContent);
  assert.deepEqual(out.languages, ["ja"]);
  assert.equal(out.activeLang, "ja", "active falls back to a kept language");
});

test("leaves an all-content profile untouched (same object reference)", () => {
  const profile = { languages: ["ja"], activeLang: "ja" };
  const out = pruneStartedLanguages(profile, hasContent);
  assert.equal(out, profile, "no change → no new object");
});

test("empty / missing started list is a no-op", () => {
  const empty = { languages: [], activeLang: null };
  assert.equal(pruneStartedLanguages(empty, hasContent), empty);
  const missing = { activeLang: null };
  assert.equal(pruneStartedLanguages(missing, hasContent), missing);
  assert.equal(pruneStartedLanguages(undefined, hasContent), undefined);
});

test("pruning everything (no content at all) yields an empty list + null active", () => {
  const profile = { languages: ["es", "fr"], activeLang: "es" };
  const out = pruneStartedLanguages(profile, () => false);
  assert.deepEqual(out.languages, []);
  assert.equal(out.activeLang, null, "no kept language → active is null (backfill handles the rest)");
});
