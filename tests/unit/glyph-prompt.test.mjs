import test from "node:test";
import assert from "node:assert/strict";
import { foldIsAmbiguous, blankedCarrier, glyphProducePrompt } from "../../src/store/glyphPrompt.js";
import { SPEECH_CARRIERS } from "../../src/data/speechCarriers.js";
import { UNITS } from "../../src/data/index.js";

// WHY THIS FILE EXISTS.
//
// QA scan 2026-10-09: TypeCard's produce branch prompted a letter card with
// `item.reading` — the ASCII fold — so four prompts had more than one correct
// answer and accepted exactly one of them:
//
//     fr "e" -> é è ê     pt "a" -> á â ã     pt "o" -> ó ô     es "u" -> ú ü
//
// A learner shown "e" cannot know which letter is wanted. They are not wrong when
// marked wrong; the question was unanswerable, and a miss drops a rung. Same defect
// shape as the unanswerable ear card in the same scan: a prompt lossier than its
// answer space.

const GLYPHS = UNITS.flatMap((u) =>
  (u.lessons ?? []).flatMap((l) =>
    (l.items ?? []).filter((i) => i.type === "glyph").map((i) => ({ ...i, lang: u.lang }))
  )
);
const prompt = (g) => glyphProducePrompt(g, SPEECH_CARRIERS, g.lang);

// Twins derived HERE, from the corpus, deliberately not via foldIsAmbiguous.
//
// The first version of the test below filtered with foldIsAmbiguous — the function
// under test — so stubbing that function to `return false` emptied the filter and
// the test passed on nothing. It would have gone green against a complete
// regression. A guard must never ask the thing it is guarding whether it is needed.
const TWIN_FOLDS = (() => {
  const counts = new Map();
  for (const g of GLYPHS) {
    if (!g.reading) continue;
    const k = `${g.lang}:${String(g.reading).toLowerCase()}`;
    counts.set(k, (counts.get(k) ?? 0) + 1);
  }
  return new Set([...counts].filter(([, n]) => n > 1).map(([k]) => k));
})();
const hasTwin = (g) => TWIN_FOLDS.has(`${g.lang}:${String(g.reading ?? "").toLowerCase()}`);

test("NO LETTER CARD IS ASKED WITH A PROMPT THAT HAS TWO RIGHT ANSWERS", () => {
  // The whole finding, as one assertion over the real corpus.
  const unanswerable = GLYPHS.filter((g) => hasTwin(g) && !prompt(g).blanked);
  assert.deepEqual(
    unanswerable.map((g) => `${g.lang} ${g.front} (fold "${g.reading}")`),
    [],
    "these cards show a fold shared with another letter and accept only one answer"
  );
});

test("the corpus really does contain twin folds — the guard above is not vacuous", () => {
  // If this ever goes to zero the test above stops testing anything, and that
  // should be a loud event rather than a silent one.
  assert.ok(TWIN_FOLDS.size >= 4, `expected the known twin folds, found ${TWIN_FOLDS.size}`);
  assert.ok(GLYPHS.filter(hasTwin).length >= 10);
});

test("the ambiguous folds are found from the corpus, not hardcoded", () => {
  // Hardcoding the four known cases would silently stop covering a fifth the day
  // one is authored. These are the ones that exist today; the point is that they
  // were DERIVED.
  assert.ok(foldIsAmbiguous({ type: "glyph", reading: "e" }, "fr"), "fr e is shared by é è ê");
  assert.ok(foldIsAmbiguous({ type: "glyph", reading: "a" }, "pt"));
  assert.ok(foldIsAmbiguous({ type: "glyph", reading: "u" }, "es"));
});

test("a fold that names ONE letter keeps the plain prompt — no redesign of working cards", () => {
  for (const [lang, reading] of [["fr", "c"], ["es", "n"], ["de", "ss"], ["no", "o"]]) {
    assert.equal(foldIsAmbiguous({ type: "glyph", reading }, lang), false, `${lang} "${reading}" is unique`);
  }
  const cedilla = GLYPHS.find((g) => g.lang === "fr" && g.front === "ç");
  assert.equal(prompt(cedilla).blanked, false);
  assert.equal(prompt(cedilla).text, null, "null means: use the ordinary reading prompt");
});

test("THE ANSWER IS NEVER VISIBLE IN THE PROMPT", () => {
  // The crib this replaces: showing é and asking the learner to type it tests
  // nothing. A blanked word that still contains the letter would be the same bug.
  for (const g of GLYPHS) {
    const p = prompt(g);
    if (!p.text) continue;
    assert.ok(
      !p.text.toLowerCase().includes(String(g.front).toLowerCase()),
      `${g.lang} ${g.front}: prompt "${p.text}" contains its own answer`
    );
  }
});

test("EVERY occurrence is blanked, not just the first", () => {
  // "le bébé" blanked once reads "le b_bé" — which hands over the answer two
  // characters later.
  const eacute = GLYPHS.find((g) => g.lang === "fr" && g.front === "é");
  assert.equal(blankedCarrier(eacute, SPEECH_CARRIERS), "le b_b_");
});

test("the blank is as long as the letter — a multi-character letter is not a single gap", () => {
  const ill = { id: "x", front: "ill", lang: "fr" };
  assert.equal(blankedCarrier(ill, { x: { text: "le papillon" } }), "le pap___on");
});

test("a carrier that does not contain the letter produces NOTHING, not a lie", () => {
  const bad = { id: "x", front: "é", lang: "fr" };
  assert.equal(blankedCarrier(bad, { x: { text: "bonjour" } }), null);
});

test("no carrier at all falls back to the plain prompt rather than blanking nothing", () => {
  const orphan = { id: "nope", type: "glyph", front: "é", reading: "e", lang: "fr" };
  const p = glyphProducePrompt(orphan, {}, "fr");
  assert.equal(p.text, null);
  assert.equal(p.blanked, false);
});

test("each ambiguous letter in a language gets a DIFFERENT prompt from its twins", () => {
  // Three cards all reading "e" must not land on the same word, or the fix has
  // only moved the collision.
  const byKey = {};
  for (const g of GLYPHS) {
    if (!foldIsAmbiguous(g, g.lang)) continue;
    const p = prompt(g);
    if (!p.text) continue;
    const key = `${g.lang}:${g.reading}`;
    (byKey[key] ??= []).push(p.text);
  }
  for (const [key, texts] of Object.entries(byKey)) {
    assert.equal(new Set(texts).size, texts.length, `${key}: twins share a prompt — ${texts.join(" / ")}`);
  }
});
