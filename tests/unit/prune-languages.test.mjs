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
//
// PROVENANCE, stated honestly: only the FIRST of these actually fails against the
// old implementation. The other two pass on both, because they guard against the
// new logic being over-aggressive rather than against the old logic being wrong —
// which is a real job, but not the same claim. (An earlier commit message said
// "verified failing on the old logic" of all three; that was over-stated, caught
// by the code-auditor, and is corrected here. Mutation-testing the committed
// implementation does pin all three axes: forcing `stale = false` fails two,
// removing the flag check fails one, and swapping the ordered shape for
// set-membership fails two.)
//
// Also note that the very first test in this file — "prunes started languages with
// no authored content" — no longer tests what its name says: its assertion is now
// satisfied by the `hasContent` filter alone and it survives `stale = false`. It is
// kept because the behaviour it asserts is still required, but it is no longer
// coverage for the crust prune.
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

// THE ACCEPTED LOSS — pinned deliberately, not incidentally. The fingerprint
// cannot distinguish the retired seeding from a learner who genuinely started the
// same three languages in the same order, because for a pre-flag save the
// distinguishing fact was never written down. This test states the cost out loud:
// a deliberately-started, untouched, non-active language IS dropped in that one
// case. If someone later finds a real discriminator, this test should fail — and
// that failure is the signal to delete it, not to weaken it.
test("ACCEPTED LOSS: a pre-flag cascade-shaped profile drops an untouched language", () => {
  const genuine = { onboarded: true, languages: ["ja", "es", "fr"], activeLang: "ja" };
  const out = pruneStartedLanguages(genuine, () => true, (id) => id === "ja");
  assert.deepEqual(out.languages, ["ja"], "es/fr are dropped even if they were genuinely chosen");
  // The cost is bounded by being paid at most ONCE: the verdict is recorded, so a
  // learner who re-adds Spanish keeps it through every later boot.
  assert.equal(out.languagesChosen, true, "the verdict is recorded so this never re-fires");
  const readded = { ...out, languages: ["ja", "es"], activeLang: "ja" };
  const after = pruneStartedLanguages(readded, () => true, (id) => id === "ja");
  assert.deepEqual(after.languages, ["ja", "es"], "a re-added language survives every later boot");
});

// A started language must not vanish because its CONTENT was pulled — which is a
// live scenario, not a hypothetical: the combined Spanish tree is red, and holding
// `es` back while word ownership is settled would flip isLive('es') to false.
test("a recorded choice survives its language's content being withdrawn", () => {
  const chosen = { onboarded: true, languages: ["ja", "es"], activeLang: "es", languagesChosen: true };
  const out = pruneStartedLanguages(chosen, (id) => id === "ja", () => true);
  assert.deepEqual(out.languages, ["ja", "es"], "content going away is not evidence about intent");
  assert.equal(out.activeLang, "es");
});

test("only the cascade's exact shape is treated as stale, never a lookalike", () => {
  // Non-destructive by construction: a pre-flag profile that isn't the retired
  // seeding is taken at face value, even with no progress recorded anywhere.
  for (const languages of [["ja", "fr", "es"], ["ja", "es"], ["es", "fr"], ["ja", "es", "fr", "de"]]) {
    const out = pruneStartedLanguages({ languages, activeLang: languages[0] }, () => true, () => false);
    assert.deepEqual(out.languages, languages, `${languages.join(",")} is not the cascade and must survive`);
  }
});
