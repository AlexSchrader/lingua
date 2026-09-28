import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { SPEECH_CARRIERS } from "../../src/data/speechCarriers.js";
import { isScorableText } from "../../src/store/alignScore.js";
import { shouldSpeak } from "../../src/store/cardRouting.js";
import { UNITS } from "../../src/data/index.js";

// WHY THIS FILE EXISTS.
//
// Alex's unit-1 standard is hear / speak / type the accent, and SPEAK had no working
// grader. Both available mechanisms were measured and both fail on a bare letter:
// transcription returns "Et" for a perfect é, and alignment loss overlaps completely
// between right and wrong letters. The same alignment separates cleanly on WORDS.
//
// So a letter is spoken through a word containing it. These tests protect the
// properties that make a carrier a carrier - every one of which, if it broke, would
// break quietly: the card would still render and still grade, just the wrong thing.

const GLYPHS = UNITS.flatMap((u) =>
  (u.lessons ?? []).flatMap((l) =>
    (l.items ?? []).filter((i) => i.type === "glyph").map((i) => ({ ...i, lang: u.lang, unit: u.order }))
  )
);

// SCOPED TO LETTERS THAT CAN ACTUALLY BE SPOKEN, 2026-09-27 -- and the inverse
// invariant added below, which is the one that protects the learner.
//
// The original assertion was "every letter has a carrier", full stop. That held while
// every letter card was Latin. Russian broke it, and NOT by being unfinished: a carrier
// must be a taught word the ALIGNER CAN SCORE, and alignScore.js's NON_LATIN guard
// deliberately excludes the Cyrillic block (Ѐ-ӿ) with a written rationale and a
// "re-measure with a real sample before turning it on" note. So no Cyrillic word can be
// a carrier BY DESIGN, and 33 letter cards can never have one until that measurement is
// done. Asserting otherwise made the suite red for a decision the repo had already taken.
//
// What must never happen is a letter card that ARMS THE MIC with no carrier -- that is
// the "falls back to the weaker key" failure the original message named. shouldSpeak now
// refuses to route `speak` on a letter with no carrier, so the real property is the
// second test here. Both directions are pinned: a spoken letter has a carrier, and an
// unspoken letter never reaches the mic.
const SPOKEN = GLYPHS.filter((g) => shouldSpeak(g));

test("every letter that can be SPOKEN has a carrier", () => {
  const without = SPOKEN.filter((g) => !SPEECH_CARRIERS[g.id]);
  assert.deepEqual(without.map((g) => g.id), [], "a letter with no carrier falls back to the weaker key - regenerate");
});

test("A LETTER WITH NO CARRIER NEVER ROUTES A SPEAK CARD", () => {
  const armed = GLYPHS.filter((g) => !SPEECH_CARRIERS[g.id] && shouldSpeak(g));
  assert.deepEqual(
    armed.map((g) => `${g.lang} ${g.front}`),
    [],
    "these letter cards would play nothing and then grade the mic on the weaker key"
  );
});

test("THE CARRIER CONTAINS THE LETTER — otherwise it practises a different sound", () => {
  const bad = [];
  for (const g of GLYPHS) {
    const c = SPEECH_CARRIERS[g.id];
    if (c && !c.text.toLowerCase().includes(g.front.toLowerCase())) bad.push(`${g.front} -> ${c.text}`);
  }
  assert.deepEqual(bad, []);
});

test("the letter is not SWALLOWED by a longer letter in the same word", () => {
  // German teaches ch AND sch. The first pass carried ch on "schön", where the ch
  // is not a ch at all - it is the tail of sch - so the learner would practise the
  // wrong sound while being told they were right. Same trap: pt ã inside "pão".
  const byLang = {};
  for (const g of GLYPHS) (byLang[g.lang] ??= []).push(g);
  const bad = [];
  for (const g of GLYPHS) {
    const c = SPEECH_CARRIERS[g.id];
    if (!c) continue;
    const word = c.text.toLowerCase();
    for (const other of byLang[g.lang]) {
      const o = other.front.toLowerCase();
      const mine = g.front.toLowerCase();
      if (o.length > mine.length && o.includes(mine) && word.includes(o)) {
        bad.push(`${g.lang} ${g.front} -> "${c.text}" (that is ${other.front}, not ${g.front})`);
      }
    }
  }
  assert.deepEqual(bad, []);
});

test("every carrier is long enough for alignment to score it", () => {
  // The 4-character floor is measured, not chosen: below it, correct and wrong
  // answers overlap. A carrier shorter than that reintroduces the exact problem it
  // exists to solve.
  const short = Object.entries(SPEECH_CARRIERS).filter(([, c]) => !isScorableText(c.text));
  assert.deepEqual(short.map(([id, c]) => `${id}: "${c.text}"`), []);
});

test("every carrier already has a clip — there is nothing to say back without one", () => {
  const silent = [];
  for (const g of GLYPHS) {
    const c = SPEECH_CARRIERS[g.id];
    if (c && !existsSync(join(process.cwd(), "public", "audio", g.lang, `${c.id}.mp3`))) {
      silent.push(`${g.front} -> ${c.text} (${c.id})`);
    }
  }
  assert.deepEqual(silent, []);
});

test("every carrier is a word the curriculum actually teaches", () => {
  // Not an invented word: the learner meets it as vocabulary, so the speaking step
  // is reinforcement rather than a stray string they will never see again.
  const taught = new Set(
    UNITS.flatMap((u) => (u.lessons ?? []).flatMap((l) => (l.items ?? []).map((i) => i.id)))
  );
  const strays = Object.entries(SPEECH_CARRIERS).filter(([, c]) => !taught.has(c.id));
  assert.deepEqual(strays.map(([id]) => id), []);
});

test("most carriers land near the letter, and the far ones are named", () => {
  // A unit-38 word carrying a unit-1 letter still works - the card plays it first -
  // but it is worth knowing which, rather than discovering it in a lesson.
  const far = GLYPHS.filter((g) => SPEECH_CARRIERS[g.id] && SPEECH_CARRIERS[g.id].unit > g.unit + 2);
  assert.ok(far.length <= 8, `${far.length} carriers are far from their letter: ${far.map((g) => g.front).join(" ")}`);
});
