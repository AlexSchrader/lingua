import test from "node:test";
import assert from "node:assert/strict";
import { lessonChecks, hasAudio } from "../../src/store/cardRouting.js";
import { gradeSpoken } from "../../src/store/answer.js";
import { seedItems } from "../../src/data/index.js";
// ---------------------------------------------------------------------------
// lessonChecks — how many checks an item runs inside a LESSON.
// Guards the defect the code gate caught: `isGlyph` is kana||glyph, so a KANJI
// is neither, and asking isGlyph first sent all 792 kanji items down the WORD
// path and handed each one a speak card that grades a correct answer `again`.
test("a KANJI never routes the speak card — gradeSpoken cannot judge a kanji front", () => {
  const seed = seedItems();
  const kanji = Object.values(seed).filter((it) => it.type === "kanji");
  assert.ok(kanji.length > 500, `expected the real kanji corpus, saw ${kanji.length}`);

  for (const it of kanji) {
    assert.equal(
      lessonChecks(it), 2,
      `${it.id} runs ${lessonChecks(it)} checks; a kanji must stop at hear + trace`
    );
  }
  // ...and the reason, on a real item: the front is the kanji, so the reading
  // said aloud does not match it.
  const ichi = seed["ja-u11l1-ichi"];
  if (ichi) assert.equal(gradeSpoken("いち", ichi), "again", "if this ever passes, kanji can join the ladder");
});

test("lessonChecks: kana 4, typed letter 3, word 2 or 3 by unit", () => {
  const seed = seedItems();
  const kana = seed["ja-u1l1-a"];
  const latin = seed["fr-u1l1-glypheaigu"];
  assert.equal(lessonChecks(kana), 4, "a kana is drawn: hear, trace, type, say");
  assert.equal(lessonChecks(latin), 3, "a typed letter: hear, say, type");

  const words = Object.values(seed).filter((it) => it.type === "vocab");
  const u1 = words.filter((it) => it.unit === 1);
  const later = words.filter((it) => it.unit > 1 && hasAudio(it));
  assert.ok(u1.length && later.length);
  for (const it of u1) assert.equal(lessonChecks(it), 2, `${it.id}: unit-1 words do not speak yet`);
  for (const it of later.slice(0, 300)) assert.equal(lessonChecks(it), 3, `${it.id}: a word from unit 2 speaks`);
});
