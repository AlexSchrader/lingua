// Card-routing invariants for EVERY Latin-script language, asserted against the
// REAL corpus.
//
// Why this is language-generic rather than another `<lang>-cards.test.mjs`:
// `tests/smoke.spec.js` seeds `lang: "ja"` on every fixture item, and the only
// per-language test was `fr-cards.test.mjs`. So each new Latin language arrived
// with ZERO routing coverage and got its degeneracies found by a human reading
// sentences — twice now (`type:reading` displayed the answer for 86 French items;
// `build` showed the word and asked you to assemble its own spelling). Spanish was
// about to be the third. Written per-language, these tests would have to be
// re-ported for Italian, Portuguese, German… and the language most at risk is
// always the one nobody has written a test for yet.
//
// So: discover the Latin-script languages present in the corpus and assert the
// invariants over each. A new language is covered the day its content merges,
// with no new file. The suite fails loudly rather than passing vacuously if a
// language stops loading or if no Latin language is present at all.
import { test } from "node:test";
import assert from "node:assert/strict";
import { UNITS } from "../../src/data/index.js";
import {
  canParticleCloze, particleAfterFront, blankParticle, particleChoices, CLOZE_BLANK,
  shouldTypeReading, readingIsInformative, canCloze, blankExample, findFrontInExample,
} from "../../src/store/cardRouting.js";

// A language is "Latin-script" here in exactly the sense the engine uses: its
// fronts carry no glyph script, so `readingIsInformative` is false for them.
const byLang = new Map();
for (const unit of UNITS)
  for (const lesson of unit.lessons)
    for (const def of lesson.items ?? []) {
      if (!byLang.has(unit.lang)) byLang.set(unit.lang, []);
      byLang.get(unit.lang).push({ ...def, lang: unit.lang });
    }

const latin = [...byLang.entries()].filter(
  ([, items]) => items.length > 50 && items.every((i) => !readingIsInformative(i))
);

test("at least one Latin-script language is loaded (guards every test below)", () => {
  assert.ok(latin.length > 0, "no Latin-script language in the corpus — these tests would pass vacuously");
  for (const [lang, items] of latin) assert.ok(items.length > 50, `${lang}: only ${items.length} items loaded`);
});

// ── corpus-wide, every language including Japanese ────────────────────────────
// This one is NOT Latin-only, because the defect wasn't. Blanking a word whose
// example is nothing but that word leaves "＿＿！" plus an English gloss — it still
// grades, so it looked fine, but it is a reverse-recognition card, not a cloze.
// 18 items were doing this when the rule landed: 17 Japanese greetings and
// interjections dating back to unit 1 (おはよう → 「おはよう！」), and one Spanish
// item. None was ever caught, because the only cloze coverage asserted that the
// card KIND appears, never that the card asks anything.
test("no item in ANY language clozes to a blank with no surviving context", () => {
  const all = [...byLang.entries()].flatMap(([lang, items]) => items.map((i) => ({ ...i, lang })));
  assert.ok(all.length > 2000, `expected the full corpus, got ${all.length} items`);
  const degenerate = all.filter(canCloze).filter((it) => {
    const rest = blankExample(it).replace(CLOZE_BLANK, " ");
    return rest.replace(/[¿?¡!.,—–…"“”'‘’:;()[\]«»。、！？\s]/g, "").length === 0;
  });
  assert.deepEqual(degenerate.map((i) => i.id), [], "these would blank the entire sentence");
});

for (const [lang, items] of latin) {
  // ── the fold is an answer key, never a pronunciation guide ──────────────────
  test(`${lang}: no item would display its ASCII fold`, () => {
    const shown = items.filter(readingIsInformative);
    assert.deepEqual(shown.map((i) => i.id), [], `${lang}: these would print their reading to the learner`);
  });

  // ── the two card kinds whose prompt WAS their own answer ───────────────────
  test(`${lang}: type:reading routes nothing (it would show the word and ask for the word)`, () => {
    const routed = items.filter(shouldTypeReading);
    assert.deepEqual(routed.map((i) => i.id), [],
      `${lang}: type:reading is ja-only precisely because front→reading is a mechanical fold here`);
  });

  test(`${lang}: front→reading really is a mechanical fold (the premise for the rule above)`, () => {
    // If this ever stops being true, the ja-only guards above are over-restrictive
    // and should be revisited rather than left to rot.
    const mechanical = items.filter((i) => i.reading === i.front).length;
    assert.ok(mechanical > 0,
      `${lang}: no item has reading === front — re-check whether the ja-only card guards still apply`);
  });

  // ── the function-word card must ask something ──────────────────────────────
  // A blank the item does not GOVERN grades the item on a fact about a different
  // word. Conjunctions join two things and belong to neither; articles belong to
  // the noun that follows.
  const NOT_GOVERNED = ["y", "e", "et", "o", "u", "ou", "pero", "mais", "mas", "que", "el", "la", "los",
                        "las", "un", "una", "unos", "unas", "le", "les", "des", "du"];

  test(`${lang}: no function-word card blanks a word the item doesn't govern`, () => {
    const routing = items.filter(canParticleCloze);
    const bad = routing
      .map((it) => ({ id: it.id, front: it.front, blank: particleAfterFront(it).particle.toLowerCase() }))
      .filter((r) => NOT_GOVERNED.includes(r.blank));
    assert.deepEqual(bad, [],
      `${lang}: these blank an ungoverned word:\n${bad.map((b) => `  ${b.id} ("${b.front}") blanks "${b.blank}"`).join("\n")}`);
  });

  test(`${lang}: every function-word card has exactly one blank and one correct option`, () => {
    for (const it of items.filter(canParticleCloze)) {
      const blanked = blankParticle(it);
      assert.equal(blanked.split(CLOZE_BLANK).length - 1, 1, `${it.id}: expected exactly one blank, got "${blanked}"`);
      const opts = particleChoices(it);
      assert.equal(opts.filter((o) => o.correct).length, 1, `${it.id}: expected exactly 1 correct option`);
      const texts = opts.map((o) => o.text.toLowerCase());
      assert.equal(new Set(texts).size, texts.length, `${it.id}: duplicate options ${texts.join(", ")}`);
    }
  });

  test(`${lang}: a function-word card never blanks the item's own front`, () => {
    for (const it of items.filter(canParticleCloze)) {
      assert.notEqual(particleAfterFront(it).particle.toLowerCase(), String(it.front).toLowerCase(),
        `${it.id}: blanks its own front, so the prompt is the answer`);
    }
  });

  // ── cloze must leave something to reason from ──────────────────────────────
  // Blanking the front is the point; blanking a sentence that IS the front leaves
  // "＿＿?" with nothing but the English gloss, which is a reverse-recognition
  // card wearing a cloze's clothes.
  test(`${lang}: no cloze card blanks the entire sentence`, () => {
    const degenerate = items.filter(canCloze).filter((it) => {
      const blanked = blankExample(it).replace(CLOZE_BLANK, " ");
      return blanked.replace(/[¿?¡!.,—–"“”:;()\s]/g, "").length === 0;
    });
    assert.deepEqual(degenerate.map((i) => i.id), [],
      `${lang}: these cloze to a blank with no surviving context`);
  });

  test(`${lang}: every cloze card's front really occurs in its own example`, () => {
    for (const it of items.filter(canCloze)) {
      assert.ok(findFrontInExample(it), `${it.id}: canCloze true but the front isn't in the example`);
    }
  });
}
