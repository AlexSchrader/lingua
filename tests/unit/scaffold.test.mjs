import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { hasPlayableContent, isLive, UNITS } from "../../src/data/index.js";
import { lintCurriculum, SCAFFOLD_TITLES } from "../../src/data/lint.js";

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

// --- scaffold working titles must be replaced once a unit is authored ----------
// The lint owns a copy of the template titles (it cannot import the scaffold
// script — that file runs on import). These two tests are what keep the copy
// honest: one proves the list still covers every title the scaffold can emit, the
// other proves the rule fires on an authored unit and spares a stub.

const titled = (title, { authored }) => ({
  id: "es-u1", lang: "es", order: 1, stage: "a1", title,
  lessons: authored
    ? [{
        id: "es-u1l1", unit: 1, lesson: 1, title: "L1", dominantMode: "recall",
        canDo: "x", cefr: "A1",
        items: [{ id: "es-u1l1-a", type: "vocab", front: "sí", reading: "si", meaning: "yes", accept: [] }],
      }]
    : [{ id: "es-u1l1", title: "Lesson 1", locked: true }],
});
const titleErrors = (u) =>
  lintCurriculum([u]).errors.filter((m) => /scaffold's English working title/.test(m));

test("every scaffold template title is known to the lint", () => {
  const src = fs.readFileSync(
    fileURLToPath(new URL("../../scripts/scaffold-language.mjs", import.meta.url)),
    "utf8"
  );
  // Template entries look like: ["slot-name", "Working Title"]
  const emitted = [...src.matchAll(/\[\s*"[a-z0-9-]+",\s*"([^"]+)"\s*\]/g)].map((m) => m[1]);
  assert.ok(emitted.length > 40, `expected the band templates, found ${emitted.length}`);
  const missing = emitted.filter((t) => !SCAFFOLD_TITLES.has(t));
  assert.deepEqual(
    missing,
    [],
    `scaffold-language.mjs emits titles the lint would not catch — add them to SCAFFOLD_TITLES in src/data/lint.js`
  );
});

test("an authored unit still wearing its scaffold title is an error", () => {
  assert.equal(titleErrors(titled("Greetings", { authored: true })).length, 1);
  assert.equal(titleErrors(titled("Vocabulary 1 (A2)", { authored: true })).length, 1);
  assert.equal(titleErrors(titled("Characters 3 (B1)", { authored: true })).length, 1);
});

test("a locked stub keeps its working title without complaint", () => {
  assert.equal(titleErrors(titled("Greetings", { authored: false })).length, 0);
});

test("a real localized title passes", () => {
  assert.equal(titleErrors(titled("Los saludos", { authored: true })).length, 0);
  assert.equal(titleErrors(titled("Les verbes · 3", { authored: true })).length, 0);
});

test("the real corpus still reports its authored languages as live", () => {
  assert.equal(isLive("ja"), true, "Japanese has authored content");
  assert.equal(isLive("fr"), true, "French has authored content");
  // A language belongs in the not-live list only while every one of its units is
  // still a locked stub. pt moved across when its A1 block 1 landed; de moved
  // across when German A1 was authored (u1-u20, all three blocks).
  assert.equal(isLive("pt"), true, "Portuguese has authored content");
  assert.equal(isLive("de"), true, "German has authored content (A1, u1-u20)");
  const authored = new Set(UNITS.map((u) => u.lang));
  for (const lang of ["it", "ko"])
    assert.equal(isLive(lang), false, `${lang} has no units yet`);
  assert.ok(authored.has("ja") && authored.has("fr") && authored.has("pt") && authored.has("de"));
});
