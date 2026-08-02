import test from "node:test";
import assert from "node:assert/strict";
import { hasPlayableContent, isLive, UNITS } from "../../src/data/index.js";

// A scaffolded language (npm run scaffold:lang) lands as the full band template of
// LOCKED STUB lessons so the tree validates green while a crew authors it one unit
// at a time. Until a real lesson ships it has units but nothing learnable, and it
// must not read as content — the UI would offer an empty language, and the stale-save
// migration in useStore uses "no content" as its signature for a pre-language-choice
// save, so a stub-only language would silently defeat it.
// See BUILD-BRIEF-language-blueprint.md §3c.

const stubUnit = (lang, order) => ({
  id: `${lang}-u${order}`, lang, order, stage: "a1", title: "Stub",
  lessons: [
    { id: `${lang}-u${order}l1`, title: "Lesson 1", locked: true },
    { id: `${lang}-u${order}l2`, title: "Lesson 2", locked: true },
  ],
});

const authoredUnit = (lang, order) => ({
  id: `${lang}-u${order}`, lang, order, stage: "a1", title: "Authored",
  lessons: [
    { id: `${lang}-u${order}l1`, title: "Lesson 1", locked: true },
    {
      id: `${lang}-u${order}l2`, unit: order, lesson: 2, title: "Lesson 2",
      dominantMode: "recall", canDo: "Say no.", cefr: "A1",
      items: [{ id: `${lang}-u${order}l2-a`, type: "vocab", front: "no", reading: "no", meaning: "no", example: { jp: "No.", en: "No." }, accept: [] }],
    },
  ],
});

test("a scaffolded language (locked stubs only) is NOT live", () => {
  const units = [stubUnit("es", 1), stubUnit("es", 2), stubUnit("es", 3)];
  assert.equal(hasPlayableContent(units, "es"), false);
});

test("one authored lesson flips the language live", () => {
  const units = [stubUnit("es", 1), authoredUnit("es", 2), stubUnit("es", 3)];
  assert.equal(hasPlayableContent(units, "es"), true);
});

test("a lesson that is unlocked but still has no items does not count", () => {
  const empty = stubUnit("es", 1);
  empty.lessons[0] = { id: "es-u1l1", unit: 1, lesson: 1, title: "L1", dominantMode: "recall", canDo: "x", cefr: "A1", items: [] };
  assert.equal(hasPlayableContent([empty], "es"), false);
});

test("a language with no units at all is not live", () => {
  assert.equal(hasPlayableContent([stubUnit("es", 1)], "de"), false);
});

test("the real corpus still reports its authored languages as live", () => {
  assert.equal(isLive("ja"), true, "Japanese has authored content");
  assert.equal(isLive("fr"), true, "French has authored content");
  const authored = new Set(UNITS.map((u) => u.lang));
  for (const lang of ["de", "it", "pt", "ko"])
    assert.equal(isLive(lang), false, `${lang} has no units yet`);
  assert.ok(authored.has("ja") && authored.has("fr"));
});
