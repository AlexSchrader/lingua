import test from "node:test";
import assert from "node:assert/strict";
import { normalizeSpeech, speechTargetsFor, matchesSpeechTarget, canGradeSpeech } from "../../src/store/speechTargets.js";
import { SPEECH_TARGETS } from "../../src/data/speechTargets.js";
import { gradeSpoken } from "../../src/store/answer.js";
import { UNITS } from "../../src/data/index.js";

// WHY THIS FILE EXISTS.
//
// A letter card was never graded. SpeakCard's `shadow` mode recorded the learner,
// played them back, and let them judge. Alex, 2026-09-23: "i dont like the
// recording and i click good i want my recording to be graded just like duolingo."
//
// The reason it wasn't graded was real and measured: this repo's OWN reference
// clips — clean TTS, no learner — come back from Scribe as
//
//     é -> "Et"    è -> "Euh."    ê -> "Et"    eau -> "Oh!"
//
// so grading against the item's `reading` ("e", "e", "e", "eau") fails a perfect
// recording. The fix is a measured answer key, not looser slack: grade against what
// the CORRECT SOUND transcribes to. These tests pin the two failure modes that
// would each undo it — a correct answer marked wrong, and a wrong answer marked
// correct.

const GLYPHS = UNITS.flatMap((u) =>
  (u.lessons ?? []).flatMap((l) => (l.items ?? []).filter((i) => i.type === "glyph").map((i) => ({ ...i, lang: u.lang })))
);

// --- the key itself ---------------------------------------------------------

test("every letter card in the corpus has a measured key", () => {
  const missing = GLYPHS.filter((g) => !canGradeSpeech(g, SPEECH_TARGETS));
  assert.deepEqual(missing.map((g) => g.id), [], "a letter with no key falls back to shadowing — regenerate");
});

test("the key never accepts a DIFFERENT letter taught in the same language", () => {
  // The failure this prevents: "â" transcribed as "é", accepted, teaching that two
  // distinct accents are interchangeable — the exact confusion the accent standard
  // exists to prevent, arriving through the grader instead of the content.
  const byLang = {};
  for (const g of GLYPHS) (byLang[g.lang] ??= []).push(g);
  const collisions = [];
  for (const [lang, rows] of Object.entries(byLang)) {
    for (const g of rows) {
      const mine = new Set([normalizeSpeech(g.front), normalizeSpeech(g.reading ?? "")]);
      for (const other of rows) {
        if (other.id === g.id) continue;
        const theirs = normalizeSpeech(other.front);
        if (mine.has(theirs)) continue; // genuinely the same sound, authored that way
        if (speechTargetsFor(g, SPEECH_TARGETS).includes(theirs)) {
          collisions.push(`${lang} ${g.front} accepts ${other.front}`);
        }
      }
    }
  }
  assert.deepEqual(collisions, []);
});

test("no key entry is long enough to be a word rather than a sound", () => {
  // Scribe returned "chapter" for ch, "silencio" for ú, "heythere" for ê. Left in,
  // those become answers the card accepts.
  const long = [];
  for (const g of GLYPHS) {
    for (const t of speechTargetsFor(g, SPEECH_TARGETS)) {
      if (t.length > Math.max(3, normalizeSpeech(g.reading ?? "").length)) long.push(`${g.front}: "${t}"`);
    }
  }
  assert.deepEqual(long, []);
});

test("the reading is always accepted — a literal transcript must never fail", () => {
  const missing = GLYPHS.filter((g) => {
    const r = normalizeSpeech(g.reading ?? "");
    return r && !speechTargetsFor(g, SPEECH_TARGETS).includes(r);
  });
  assert.deepEqual(missing.map((g) => g.id), []);
});

// --- grading through gradeSpoken --------------------------------------------

const glyph = (id) => GLYPHS.find((g) => g.id === id);

test("é: the transcript a CORRECT pronunciation actually produces is graded good", () => {
  // The whole point. "Et" is what this repo's reference clip for é comes back as.
  // Before the measured key this scored `again` — a learner saying it perfectly was
  // told they were wrong, which is why the card refused to grade at all.
  assert.equal(gradeSpoken("Et", glyph("fr-u1l1-glypheaigu"), SPEECH_TARGETS), "good");
});

test("è and eau likewise — the three that failed hardest against the spelling", () => {
  assert.equal(gradeSpoken("Euh.", glyph("fr-u1l1-glyphegrave"), SPEECH_TARGETS), "good");
  assert.equal(gradeSpoken("eau", glyph("fr-u1l4-glypheau"), SPEECH_TARGETS), "good");
});

test("a literal transcript still passes — the obvious route must keep working", () => {
  assert.equal(gradeSpoken("O", glyph("fr-u1l1-glyphocirc"), SPEECH_TARGETS), "good");
  assert.equal(gradeSpoken("u", glyph("fr-u1l2-glyphucirc"), SPEECH_TARGETS), "good");
});

test("NOISE IS NOT A PASS — the failure that makes grading worse than shadowing", () => {
  // Slack wide enough to accept "Et" for é also accepts almost any vowel noise if
  // it is applied as slack instead of as a key. A confidently wrong `good` is worse
  // than no grade, and this repo has shipped one before.
  for (const junk of ["banana", "hello there", "zzz", "konnichiwa"]) {
    assert.equal(gradeSpoken(junk, glyph("fr-u1l1-glypheaigu"), SPEECH_TARGETS), "again", `"${junk}" must not pass for é`);
  }
});

test("silence is never a pass", () => {
  assert.equal(gradeSpoken("", glyph("fr-u1l1-glypheaigu"), SPEECH_TARGETS), "again");
  assert.equal(gradeSpoken("   ", glyph("fr-u1l1-glypheaigu"), SPEECH_TARGETS), "again");
});

test("a one- or two-character target gets NO edit slack", () => {
  // "eh"/"hey" passing for é is the documented original defect. An edit of grace on
  // a 1-2 char key reintroduces it, so grace applies only from 3 characters up.
  const e = glyph("fr-u1l2-glyphitrema"); // ï, key "i"
  assert.equal(gradeSpoken("e", e, SPEECH_TARGETS), "again");
  assert.equal(gradeSpoken("o", e, SPEECH_TARGETS), "again");
});

test("an item with NO key is untouched — words still grade the old way", () => {
  // gradeSpoken must not start treating every item as a letter. A vocab item has no
  // entry, so the reading/kana paths below still run.
  const word = { id: "not-a-letter-at-all", type: "vocab", front: "chat", reading: "chat", lang: "fr" };
  assert.equal(canGradeSpeech(word, SPEECH_TARGETS), false);
  assert.equal(gradeSpoken("chat", word, SPEECH_TARGETS), "good");
});

test("a letter added since the last generator run shadows rather than misgrades", () => {
  const fresh = { id: "fr-u9l9-glyphbrandnew", type: "glyph", front: "ŷ", reading: "y", lang: "fr" };
  assert.equal(canGradeSpeech(fresh, SPEECH_TARGETS), false, "no key means SpeakCard shadows it, as before");
});

// --- normalisation ----------------------------------------------------------

test("normalizeSpeech drops case and punctuation but KEEPS accents", () => {
  assert.equal(normalizeSpeech("Euh."), "euh");
  assert.equal(normalizeSpeech("Oh!"), "oh");
  assert.equal(normalizeSpeech("  Et  "), "et");
  // Folding é to e here would rebuild the bug the accent standard exists to
  // prevent, one layer down.
  assert.equal(normalizeSpeech("é"), "é");
  assert.notEqual(normalizeSpeech("é"), normalizeSpeech("e"));
});

test("matchesSpeechTarget is false for an item with no key, whatever is said", () => {
  assert.equal(matchesSpeechTarget("anything", { id: "nope" }, SPEECH_TARGETS), false);
});
