import test from "node:test";
import assert from "node:assert/strict";
import { SOUND_ALIKES, soundAlikeGroups } from "../../src/data/soundAlikes.js";
import { buildOptions } from "../../src/store/distractors.js";
import { normalizeReading } from "../../src/store/answer.js";
import { UNITS } from "../../src/data/index.js";

// WHY THIS FILE EXISTS.
//
// A listening card plays a clip of `front` and offers MEANINGS. If two taught words
// sound alike, both meanings answer "what did you hear" — the learner picks one, is
// graded wrong by an identity flag, and drops a rung (mastery.js). Punished for a
// question that had two right answers.
//
// Measured before the fix, on real boards: 147 Japanese items offered a
// same-sounding twin 2,745 times in 39,300 sampled boards, and 14 Latin pairs fired
// on 7-20% of their boards — every one of those a SAME-UNIT pair, because the
// distractor pool prefers same-unit peers.

const ITEMS = UNITS.flatMap((u) =>
  (u.lessons ?? []).flatMap((l) => (l.items ?? []).map((i) => ({ ...i, lang: u.lang, unit: u.order })))
);
const find = (lang, front) => ITEMS.find((i) => i.lang === lang && i.front === front);
const boards = (item, byEar, n = 120) =>
  Array.from({ length: n }, () => buildOptions(item, ITEMS, 4, null, { byEar }));

// --- the data is real -------------------------------------------------------

test("EVERY FRONT IN THE LIST IS A WORD THE COURSE ACTUALLY TEACHES", () => {
  // A front that matches nothing is a SILENT no-op: the exclusion quietly covers
  // nothing and the card stays broken. Article and all — "der Mann", not "Mann".
  const missing = [];
  for (const [lang, groups] of Object.entries(SOUND_ALIKES)) {
    for (const g of groups) for (const front of g) if (!find(lang, front)) missing.push(`${lang} "${front}"`);
  }
  assert.deepEqual(missing, []);
});

test("every group names at least two DIFFERENT words", () => {
  for (const [lang, groups] of Object.entries(SOUND_ALIKES)) {
    for (const g of groups) {
      assert.ok(g.length >= 2, `${lang}: a group of one excludes nothing`);
      assert.equal(new Set(g).size, g.length, `${lang}: ${g.join("/")} repeats a front`);
    }
  }
});

test("the five German pairs no probe can see are present", () => {
  // These are true homophones whose spellings share no fold, so fold-based tooling
  // can never propose them. They were found by reading the corpus. If a future
  // regeneration rebuilds this file from the probe, they vanish — and this fails.
  const de = soundAlikeGroups("de").map((g) => g.join("|"));
  for (const pair of ["das|dass", "man|der Mann", "die Stadt|statt", "das Meer|mehr", "wahr|war"]) {
    assert.ok(de.includes(pair), `missing the invisible pair ${pair}`);
  }
});

test("NORWEGIAN HAS NO ENTRIES, AND THAT IS A RESULT", () => {
  // All three reviewing seats agreed måle/male, rømme/romme, humør/humor and
  // sann/sånn are audibly distinct — å/a and ø/o are contrastive vowels. Excluding
  // them would delete the contrast Norwegian most needs drilled. If someone later
  // "fixes" the empty list by filling it from the probe, this says why not to.
  assert.deepEqual(soundAlikeGroups("no"), []);
});

test("the audible German pairs are NOT excluded — hard cards on purpose", () => {
  const de = soundAlikeGroups("de").flat();
  for (const front of ["hatte", "hätte", "wurde", "würde", "konnte", "könnte", "schon", "schön"]) {
    assert.ok(!de.includes(front), `${front} is an indicative/Konjunktiv contrast and must stay offerable`);
  }
});

// --- the exclusion actually reaches the board -------------------------------

test("A LISTED TWIN IS NEVER OFFERED WHILE THE PROMPT IS A CLIP", () => {
  const offenders = [];
  for (const [lang, groups] of Object.entries(SOUND_ALIKES)) {
    for (const g of groups) {
      for (const front of g) {
        const item = find(lang, front);
        const twins = g.filter((f) => f !== front).map((f) => find(lang, f)).filter(Boolean);
        for (const b of boards(item, true, 60)) {
          if (b.some((o) => !o.correct && twins.some((t) => o.text === t.meaning))) {
            offenders.push(`${lang} ${front}`);
            break;
          }
        }
      }
    }
  }
  assert.deepEqual([...new Set(offenders)], []);
});

test("the same twins ARE still offered when the word is on screen", () => {
  // byEar is off once "Show it" reveals the word: the prompt stops being lossy and
  // a sound-alike becomes a good distractor again. If this ever goes to zero the
  // exclusion has leaked into every card kind and the corpus has lost distractors.
  let everOffered = false;
  for (const [lang, groups] of Object.entries(SOUND_ALIKES)) {
    for (const g of groups) {
      const item = find(lang, g[0]);
      const twins = g.slice(1).map((f) => find(lang, f)).filter(Boolean);
      for (const b of boards(item, false, 120)) {
        if (b.some((o) => !o.correct && twins.some((t) => o.text === t.meaning))) { everOffered = true; break; }
      }
      if (everOffered) break;
    }
    if (everOffered) break;
  }
  assert.ok(everOffered, "byEar=false must leave sound-alikes offerable");
});

test("JAPANESE IS HANDLED IN CODE, not by this list", () => {
  assert.equal(SOUND_ALIKES.ja, undefined, "871 items, no judgement needed — reading IS pronunciation there");
});

test("no Japanese item is offered a same-reading twin by ear", () => {
  const ja = ITEMS.filter((i) => i.lang === "ja" && (i.type === "vocab" || i.type === "kanji"));
  const byReading = new Map();
  for (const it of ja) {
    const k = normalizeReading(it.reading ?? it.front, "ja");
    byReading.set(k, [...(byReading.get(k) ?? []), it]);
  }
  const groups = [...byReading.values()].filter((v) => v.length > 1).slice(0, 40);
  const offenders = [];
  for (const v of groups) {
    for (const it of v) {
      const twins = v.filter(
        (x) => x.id !== it.id && x.type === it.type &&
          String(x.meaning).toLowerCase() !== String(it.meaning).toLowerCase()
      );
      if (!twins.length) continue;
      for (const b of boards(it, true, 40)) {
        if (b.some((o) => !o.correct && twins.some((t) => o.text === t.meaning))) { offenders.push(it.front); break; }
      }
    }
  }
  assert.deepEqual([...new Set(offenders)], []);
});
