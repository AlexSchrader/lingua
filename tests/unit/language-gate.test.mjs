import test from "node:test";
import assert from "node:assert/strict";
import { useStore } from "../../src/store/useStore.js";

// WHY THIS FILE EXISTS.
//
// On 2026-09-17 Alex's Ladder had FOUR languages — Japanese, French, Norwegian and
// German — with German at 0 items and A1 at 0%. He had deliberately started one.
// The whole surplus is explained by ONE bug, not by a missing policy:
//
//   ONBOARDING APPENDED INSTEAD OF CHOOSING. The language pick called the same
//   `startLanguage` the Ladder's "add a language" row calls, so every re-run of the
//   flow (Dev panel → Replay onboarding, which Alex uses) added a language rather
//   than choosing one — bypassing the A1 gate entirely. Reset then kept the list.
//
// Recorded because the first draft of this fix ALSO tightened the A1 gate and
// presented Alex's four languages as the evidence for it. They are not: the append
// bug explains them completely, and the gate change neither caused nor fixed what
// he saw. Two changes bundled behind one symptom is how a policy decision gets
// made by a bug report. See the gate section below.
//
// This is all about the started LIST, which no screen test can see and which the
// smoke suite never re-runs onboarding against. Keep the coverage here.

const setProfile = (profile) => useStore.setState((s) => ({ profile: { ...s.profile, ...profile } }));
const setLevels = (levels) =>
  useStore.setState((s) => {
    const languages = { ...s.languages };
    for (const [id, level] of Object.entries(levels)) languages[id] = { ...languages[id], level };
    return { languages };
  });
const profile = () => useStore.getState().profile;

// --- onboarding chooses, it does not add ------------------------------------

test("the onboarding pick REPLACES the started list", () => {
  setProfile({ languages: ["ja", "fr", "no"], activeLang: "ja", languagesChosen: true });
  useStore.getState().startLanguage("de", { only: true });
  assert.deepEqual(profile().languages, ["de"], "onboarding picks one language, it does not append a fourth");
  assert.equal(profile().activeLang, "de");
});

test("re-picking the language you already study leaves you with exactly that one", () => {
  setProfile({ languages: ["ja", "fr"], activeLang: "ja", languagesChosen: true });
  useStore.getState().startLanguage("ja", { only: true });
  assert.deepEqual(profile().languages, ["ja"]);
});

test("an onboarding pick never deletes item progress — the dropped language is re-addable", () => {
  // SEEDED FIRST, ON PURPOSE. This test used to read `items` straight after import,
  // where it is {} — so `before` and after were both 0 and the assertion could not
  // fail. It would have passed against a startLanguage that deleted the whole deck.
  // Caught by the code-auditor, 2026-09-17. resetAll seeds the full corpus.
  useStore.getState().resetAll();
  const before = Object.keys(useStore.getState().items).length;
  assert.ok(before > 1000, `the deck must actually be seeded for this to mean anything (got ${before})`);
  setProfile({ languages: ["ja", "fr"], activeLang: "ja", languagesChosen: true });
  useStore.getState().startLanguage("de", { only: true });
  assert.equal(Object.keys(useStore.getState().items).length, before);
});

test("the Ladder's add-a-language flow still APPENDS — that path was never wrong", () => {
  setProfile({ languages: ["ja"], activeLang: "ja", languagesChosen: true });
  useStore.getState().startLanguage("fr");
  assert.deepEqual(profile().languages, ["ja", "fr"]);
});

// --- the A1 gate: earn ONE A1, then you may carry more than one ------------
//
// A STRICTER RULE WAS WRITTEN AND REVERTED HERE ON 2026-09-17, BEFORE IT SHIPPED.
// It gated on the NEWEST started language, so each added language had to reach A1
// on its own. The truth-agent blocked it on the number nobody had measured:
// "reaching A1" is rung >= 1 on EVERY item at or below A1 (isLevelComplete), which
// is 1,252 items in Japanese and 487-582 in the other five. That rule would have
// locked Alex out of a second language for 1,252 items, closed a gate that was
// already open for him, and made his Ladder read "Reach A1 in German" about a
// language he never chose. It was also bypassable: stopLanguage has no gate and
// keeps progress, so dropping the pre-A1 language reopens it in two taps.
//
// What ships is the bar Alex actually stated - "at least complete a1". A brand-new
// learner still cannot start two at once, because no language is at A1 yet. These
// tests pin that, so the stricter rule cannot be reintroduced silently.

test("a brand-new learner cannot carry two languages - nothing is at A1 yet", () => {
  setProfile({ languages: ["ja"], activeLang: "ja", languagesChosen: true });
  setLevels({ ja: "pre-A1", fr: "pre-A1", de: "pre-A1", es: "pre-A1", pt: "pre-A1", no: "pre-A1" });
  assert.equal(useStore.getState().canAddLanguage(), false);
});

test("reaching A1 opens the gate", () => {
  setProfile({ languages: ["ja"], activeLang: "ja", languagesChosen: true });
  setLevels({ ja: "A1" });
  assert.equal(useStore.getState().canAddLanguage(), true);
});

test("an A1 already earned keeps the gate open - NOT the reverted newest-language rule", () => {
  // Pinned deliberately. Under the reverted rule this was false, which is what
  // would have shut Alex out. If this test goes red, someone has re-tightened the
  // gate - that is a product decision and it is Alex's, not a refactor.
  setProfile({ languages: ["ja", "fr"], activeLang: "fr", languagesChosen: true });
  setLevels({ ja: "B1", fr: "pre-A1" });
  assert.equal(useStore.getState().canAddLanguage(), true);
});

// --- the empty state must never be a dead end -------------------------------
// The code-auditor reproduced this live: `resetAll` clears the started list, and a
// build without AUTH_ENABLED never renders onboarding (App.jsx gates it inside that
// block), so the Ladder was the only route back — and every Start button there is
// gated on canAddLanguage, which was `[].some(...)` = false. A learner could reset
// and own nothing, with no way to start anything short of clearing localStorage.

test("NOTHING STARTED IS NEVER LOCKED — your first language is the pick's job, not the gate's", () => {
  setProfile({ languages: [], activeLang: null, languagesChosen: false });
  setLevels({ ja: "pre-A1", fr: "pre-A1", de: "pre-A1", es: "pre-A1", pt: "pre-A1", no: "pre-A1" });
  assert.equal(useStore.getState().canAddLanguage(), true, "an empty started list is a dead end, not a gate");
});

test("after resetAll the learner can still start a language", () => {
  setProfile({ languages: ["ja", "fr", "no", "de"], activeLang: "de", languagesChosen: true });
  useStore.getState().resetAll();
  assert.deepEqual(useStore.getState().profile.languages, []);
  assert.equal(useStore.getState().canAddLanguage(), true, "reset must not strand the learner");
});

test("an A1 you earned survives leaving the language — you can always re-add it", () => {
  // Alex's exact shape: A1 Japanese, replays onboarding, picks German. Scoped to the
  // STARTED list this returned false and Japanese became unreachable with its
  // progress intact. The levels map is promote-only, so the A1 is still on record.
  setProfile({ languages: ["ja"], activeLang: "ja", languagesChosen: true });
  setLevels({ ja: "A1", de: "pre-A1" });
  useStore.getState().startLanguage("de", { only: true });
  assert.deepEqual(useStore.getState().profile.languages, ["de"]);
  assert.equal(useStore.getState().canAddLanguage(), true, "the A1 in Japanese still counts");
});

// --- reset is a fresh start, language included ------------------------------

test("resetAll clears the started languages and sends you back through the pick", () => {
  setProfile({ languages: ["ja", "fr", "no", "de"], activeLang: "de", languagesChosen: true, onboarded: true });
  useStore.getState().resetAll();
  assert.deepEqual(profile().languages, [], "a reset that keeps four languages is not a fresh start");
  assert.equal(profile().activeLang, null);
  assert.equal(profile().onboarded, false, "onboarding is the only place a FIRST language is chosen");
  assert.equal(profile().languagesChosen, false);
});

test("resetAll keeps the answers that aren't progress", () => {
  setProfile({ languages: ["ja"], activeLang: "ja", displayName: "Alex", reason: "travel" });
  useStore.getState().resetAll();
  assert.equal(profile().displayName, "Alex");
  assert.equal(profile().reason, "travel");
});

test("resetAll drops every earned level back to pre-A1", () => {
  setProfile({ languages: ["ja"], activeLang: "ja", languagesChosen: true });
  setLevels({ ja: "B2" });
  useStore.getState().resetAll();
  assert.equal(useStore.getState().languages.ja.level, "pre-A1");
  // The gate is OPEN here, and that is correct: with nothing started, the next thing
  // that happens is picking a first language. It shuts again the moment one is picked
  // and no A1 exists — covered above.
  useStore.getState().startLanguage("ja", { only: true });
  assert.equal(useStore.getState().canAddLanguage(), false);
});
