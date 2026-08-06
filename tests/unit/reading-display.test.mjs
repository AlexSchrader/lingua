import test from "node:test";
import assert from "node:assert/strict";
import { readingIsInformative } from "../../src/store/cardRouting.js";
import { UNITS } from "../../src/data/index.js";

// `reading` does double duty: a pronunciation crutch for a script the learner
// can't decode (ja romaji), and the ASCII key typed answers are graded against
// (fr "silvousplait" for "s'il vous plaît"). Only the first kind may be DISPLAYED.
// Regression guard for the shipped bug where French rendered its typing key as if
// it were a pronunciation guide.

const item = (front, lang) => ({ front, lang });

test("Japanese fronts show their reading", () => {
  for (const front of ["ねこ", "あ", "日本語", "カタカナ", "きょう"])
    assert.equal(readingIsInformative(item(front, "ja")), true, front);
});

test("French fronts do NOT show their reading (it is the typing key)", () => {
  for (const front of ["s'il vous plaît", "Ça va", "bonjour", "sœur", "au revoir", "de rien"])
    assert.equal(readingIsInformative(item(front, "fr")), false, front);
});

test("other Latin-script languages are covered without a lang allowlist", () => {
  // These languages have no content yet — the guard is keyed on the front's SCRIPT,
  // so they behave correctly the day they ship.
  for (const [front, lang] of [["øl", "no"], ["łóżko", "pl"], ["ılık", "tr"], ["đi", "vi"], ["niño", "es"], ["straße", "de"]])
    assert.equal(readingIsInformative(item(front, lang)), false, `${lang} ${front}`);
});

test("non-Latin scripts show their reading the day they ship", () => {
  for (const [front, lang] of [["안녕", "ko"], ["привет", "ru"], ["你好", "zh"], ["नमस्ते", "hi"]])
    assert.equal(readingIsInformative(item(front, lang)), true, `${lang} ${front}`);
});

test("a missing or empty front never renders a reading line", () => {
  assert.equal(readingIsInformative(undefined), false);
  assert.equal(readingIsInformative({}), false);
  assert.equal(readingIsInformative(item("", "ja")), false);
});

test("across the REAL corpus: every ja item shows a reading, no fr item does", () => {
  let ja = 0;
  let fr = 0;
  for (const unit of UNITS) {
    for (const lesson of unit.lessons) {
      for (const it of lesson.items ?? []) {
        const shows = readingIsInformative({ ...it, lang: unit.lang });
        if (unit.lang === "ja") {
          assert.equal(shows, true, `ja item ${it.id} (${it.front}) should show its reading`);
          ja++;
        } else if (unit.lang === "fr") {
          assert.equal(shows, false, `fr item ${it.id} (${it.front}) must NOT show its ASCII key`);
          fr++;
        }
      }
    }
  }
  assert.ok(ja > 2000, `expected the full ja corpus, saw ${ja}`);
  assert.ok(fr > 500, `expected the full fr corpus, saw ${fr}`);
});
