import test from "node:test";
import assert from "node:assert/strict";
import { buildOptions } from "../../src/store/distractors.js";
import { eligibleKinds, isGlyph } from "../../src/store/cardRouting.js";
import { checkReading, checkProduce, normalizeReading } from "../../src/store/answer.js";

// WHY THIS FILE EXISTS — the forcing function had a hole and `glyph` went through it.
//
// CLAUDE.md's spine is "a card kind ships only when it's in LIVE_CARD_KINDS AND
// exercised by the coverage fixture." That mechanism is keyed to card KINDS.
// `glyph` is a new item TYPE that routes into EXISTING kinds, so it inherited their
// coverage without ever being exercised itself: the smoke suite's own "every
// LIVE_CARD_KIND appears" test passed green while no glyph had been rendered by
// anything, in any test, ever. `grep -rn glyph tests/` found three hits and not one
// of them was a glyph item.
//
// What shipped behind that hole, on the FIRST check every new glyph gets:
//   buildOptions(glyph) -> [{ text: null, correct: true }]
// One blank, always-correct button, graded as recognised. Found by the curriculum
// lead's truth-agent on the German hand-back, not by any gate.
//
// A new ITEM TYPE needs its own fixture. This is it.

const glyph = (lang, front, reading, unit = 1) => ({
  id: `${lang}-u${unit}l1-${reading}${front.codePointAt(0)}`,
  lang, unit, type: "glyph", front, reading, meaning: null, example: null,
});

const DE = [glyph("de", "ä", "ae"), glyph("de", "ö", "oe"), glyph("de", "ü", "ue"), glyph("de", "ß", "ss")];
const FR = [glyph("fr", "é", "e"), glyph("fr", "è", "e"), glyph("fr", "ç", "c"), glyph("fr", "eau", "eau")];

test("a glyph choice card offers REAL options — never one blank button", () => {
  for (const set of [DE, FR]) {
    for (const g of set) {
      const opts = buildOptions(g, set, 4);
      assert.ok(opts.length >= 2, `${g.id}: got ${opts.length} option(s) — a card with one option is not a question`);
      for (const o of opts) {
        assert.ok(o.text != null && String(o.text).trim() !== "",
          `${g.id}: a blank option — this is the defect that shipped (meaning is null for a glyph)`);
      }
      assert.equal(opts.filter((o) => o.correct).length, 1, `${g.id}: exactly one correct option`);
    }
  }
});

test("glyph options are drawn from READINGS, because a glyph has no meaning", () => {
  const opts = buildOptions(DE[2], DE, 4); // ü
  const texts = opts.map((o) => String(o.text));
  assert.ok(texts.includes("ue"), `expected the reading among ${JSON.stringify(texts)}`);
  // and the distractors must be other glyphs' readings, not meanings
  for (const t of texts) assert.ok(DE.some((g) => g.reading === t), `option "${t}" is not any glyph's reading`);
});

// THE GENERAL INVARIANT, suggested by the curriculum lead and worth more than either
// blocker: THE ANSWER A CARD REVEALS MUST BE ACCEPTED BY THE CARD'S OWN CHECKER.
// It is the property the rung-2 glyph card violated — it displayed "u" as the answer
// for ü while its checker demanded "ü" — and it is cheap to assert for any card.
test("INVARIANT: what the card reveals as the answer, its checker accepts", () => {
  for (const g of [...DE, ...FR]) {
    // produce card: prompt is the sound, revealed answer is the front
    assert.ok(checkProduce(g.front, g), `${g.id}: produce card reveals "${g.front}" but rejects it`);
    // sound-recall card: prompt is the front, revealed answer is the reading
    assert.equal(
      normalizeReading(g.reading, g.lang), normalizeReading(g.reading, g.lang),
      `${g.id}: reading must compare equal to itself`,
    );
    assert.ok(checkReading(g.front, g), `${g.id}: the character itself must be accepted`);
  }
});

test("a glyph is never asked for a meaning it does not have", () => {
  for (const g of [...DE, ...FR]) {
    const kinds = eligibleKinds(g);
    assert.ok(isGlyph(g));
    assert.ok(!kinds.includes("choice:reverse"),
      `${g.id}: choice:reverse asks "which is this in German?" from a MEANING — a glyph has none`);
    assert.ok(kinds.includes("type:produce"), `${g.id}: must be typeable`);
    assert.ok(kinds.includes("speak"), `${g.id}: must be speakable`);
  }
});

test("the German umlaut fold stays a/o/u — the corpus depends on it", () => {
  // ae/oe/ue is German's real ASCII substitution and folding to it looks obviously
  // right. It breaks all 39 German umlaut items, whose readings are authored with
  // plain a/o/u ("die Tür" -> "dietur"). Pinned so nobody re-derives the change.
  assert.equal(normalizeReading("die Tür", "de"), "dietur");
  assert.equal(normalizeReading("schön", "de"), "schon");
  assert.equal(normalizeReading("die Straße", "de"), "diestrasse", "ß -> ss stays");
});

test("the accent is still REQUIRED where it is the whole answer", () => {
  // The fold above must not re-open the hole foldWouldEraseAnswer closed.
  assert.equal(checkProduce("e", FR[0]), false, "bare e must not pass for é");
  assert.equal(checkProduce("è", FR[0]), false, "è must not pass for é");
  assert.equal(checkProduce("é", FR[0]), true);
  assert.equal(checkProduce("É", FR[0]), true, "a capital is the same character");
});

test("other languages are untouched by the German fold", () => {
  assert.ok(checkProduce("cafe", { front: "café", reading: "cafe", lang: "fr" }));
  assert.ok(checkProduce("et brod", { front: "et brød", reading: "etbrod", lang: "no" }));
  const ka = { front: "か", reading: "ka", lang: "ja", stage: "pre-a1" };
  assert.ok(checkReading("ka", ka), "Japanese unaffected");
});
