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

// REGRESSION (truth-agent B2, 2026-07-31): every other test in this file injects a
// stub predicate where only ja has content, which made them structurally incapable
// of catching the real bug — so this one uses the REAL production predicate.
test("a stale auto-cascade save does not silently acquire a newly-shipped language", () => {
  // Pre-language-choice saves carry the old ja→es→fr cascade seeding. French now
  // HAS content, so a content-only filter would keep it and hand the learner a
  // started language they never chose (bypassing canAddLanguage).
  const stale = { onboarded: true, languages: ["ja", "es", "fr"], activeLang: "ja" };
  // Mirrors the production call in useStore's rehydrate: the REAL content
  // predicate (default — fr genuinely has units now) plus the items-derived
  // progress check. This learner has only ever studied Japanese.
  const items = { "ja-u1l1-a": { lang: "ja", rung: 3 } };
  const out = pruneStartedLanguages(stale, undefined, (id) =>
    Object.values(items).some((it) => it.lang === id && (it.rung ?? 0) >= 1)
  );
  assert.deepEqual(out.languages, ["ja"], "only the language actually being learned survives");
  assert.equal(out.activeLang, "ja");
});

test("a language with real progress survives the prune even when it isn't active", () => {
  const profile = { onboarded: true, languages: ["ja", "fr"], activeLang: "ja" };
  const out = pruneStartedLanguages(
    profile,
    () => true,
    (id) => id === "fr" // fr has touched items
  );
  assert.deepEqual(out.languages, ["ja", "fr"]);
});

// REGRESSION (code-auditor B2, 2026-07-31): the first attempt at the fix above was
// DESTRUCTIVE — it required active-or-progress on every boot, so starting French,
// tapping back to Japanese, and reloading silently deleted French from the profile.
test("a deliberately-started language with no progress yet is NEVER dropped", () => {
  const profile = { onboarded: true, languages: ["ja", "fr"], activeLang: "ja" };
  const items = { "ja-x": { lang: "ja", rung: 3 } }; // fr started, nothing learned
  const out = pruneStartedLanguages(profile, undefined, (id) =>
    Object.values(items).some((it) => it.lang === id && (it.rung ?? 0) >= 1)
  );
  assert.deepEqual(out.languages, ["ja", "fr"], "French must survive every boot");
  // seedOnce runs on every mount, so re-running must be stable, not erosive.
  const again = pruneStartedLanguages(out, undefined, () => false);
  assert.deepEqual(again.languages, ["ja", "fr"], "repeated boots must not erode the profile");
});

// ─────────────────────────────────────────────────────────────────────────────
// REGRESSION (Spanish block 1, 2026-08-05). The staleness test used to be DERIVED
// from content — "a language with no units can't have been chosen, so a
// content-less entry proves this save is stale." That heuristic had a fuse on it:
// it only worked while SOME cascade language was still unauthored. French shipping
// burned half of it; Spanish shipping burned the rest, and the prune silently
// stopped running for the exact profile it exists to catch.
//
// Every test above this line either injects a predicate where only ja has content,
// or leans on the real corpus as it happens to stand today — so none of them can
// catch the next decay. These three pin the behaviour in the world the catalog is
// heading for, where EVERY language is live. They must still pass when all 20 have
// content; if one starts failing, the derivation has crept back in.
test("the cascade prune still fires when EVERY language has content", () => {
  const stale = { onboarded: true, languages: ["ja", "es", "fr"], activeLang: "ja" };
  const out = pruneStartedLanguages(stale, () => true, (id) => id === "ja");
  assert.deepEqual(out.languages, ["ja"], "es/fr were never chosen — having content must not save them");
  assert.equal(out.activeLang, "ja");
});

test("an explicitly recorded choice outranks the legacy-cascade fingerprint", () => {
  // startLanguage stamps languagesChosen, so a learner who really did pick all
  // three keeps all three — even with zero progress and the cascade's exact shape.
  const chosen = { onboarded: true, languages: ["ja", "es", "fr"], activeLang: "ja", languagesChosen: true };
  const out = pruneStartedLanguages(chosen, () => true, () => false);
  assert.deepEqual(out.languages, ["ja", "es", "fr"], "a recorded choice is never second-guessed");
  assert.equal(out, chosen, "and since nothing changed, the same object comes back");
});

test("only the cascade's exact shape is treated as stale, never a lookalike", () => {
  // Non-destructive by construction: a pre-flag profile that isn't the retired
  // seeding is taken at face value, even with no progress recorded anywhere.
  for (const languages of [["ja", "fr", "es"], ["ja", "es"], ["es", "fr"], ["ja", "es", "fr", "de"]]) {
    const out = pruneStartedLanguages({ languages, activeLang: languages[0] }, () => true, () => false);
    assert.deepEqual(out.languages, languages, `${languages.join(",")} is not the cascade and must survive`);
  }
});
