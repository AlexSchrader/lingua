// GENERATE THE SPOKEN ANSWER KEY FOR LETTER CARDS, FROM THE AUDIO ITSELF.
//
// WHY THIS EXISTS. A letter card could not be graded, so it wasn't: SpeakCard's
// `shadow` mode recorded the learner, played them back, and let them judge. Alex,
// 2026-09-23: "i dont like the recording and i click good i want my recording to be
// graded just like duolingo."
//
// The reason it wasn't graded is real, and measured. Sending this repo's OWN
// reference clips - clean TTS, no learner involved - to Scribe returns:
//
//     é -> "Et"      è -> "Euh."    ê -> "Et"      eau -> "Oh!"
//     ô -> "O"       û -> "U"       ï -> "I"       ç   -> "C"
//
// Half of them do not match the item's `reading`, on a FLAWLESS recording. Grading
// a learner against the spelling would therefore fail them for saying it correctly,
// which is worse than not grading at all - that was the original call and it was
// the right one at the time.
//
// THE FIX IS TO CHANGE THE ANSWER KEY, NOT THE LENIENCY. Grade the learner against
// what the CORRECT SOUND actually transcribes to, rather than against how the
// letter is spelled. "é" is right when your clip transcribes the way the reference
// clip transcribes. Same voice pipeline, same transcriber, same normalisation.
//
// Loosening `gradeSpoken`'s slack until "Et" passed for "e" was the alternative and
// it is the trap: slack wide enough to accept "Et" for é also accepts almost any
// vowel noise, so the card would say "correct" to a learner who said nothing like
// the letter. A measured key is narrow AND right.
//
// SHAPE: mirrors src/data/audioManifest.js - a generated module, committed, no
// contract change, no content edits, engine stays content-agnostic.
//
//   node scripts/generate-speech-targets.mjs           all languages
//   node scripts/generate-speech-targets.mjs fr es     only these
//   node scripts/generate-speech-targets.mjs --dry     list what it would do
//
// Costs one STT call per letter card (52 in the corpus today). Re-run when letter
// cards are added or their clips are regenerated.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { UNITS } from "../src/data/index.js";
import { normalizeSpeech } from "../src/store/speechTargets.js";

const root = process.cwd();
const args = process.argv.slice(2);
const DRY = args.includes("--dry");
const only = args.filter((a) => !a.startsWith("--"));

const key = (readFileSync(join(root, ".env.local"), "utf8").match(/^ELEVENLABS_API_KEY=(.*)$/m) ?? [])[1]?.trim();
if (!key && !DRY) {
  console.error("ELEVENLABS_API_KEY is not in .env.local");
  process.exit(1);
}

// Every letter card, with its language - the clip path needs both.
const glyphs = [];
for (const u of UNITS) {
  if (only.length && !only.includes(u.lang)) continue;
  for (const l of u.lessons ?? []) {
    for (const it of l.items ?? []) if (it.type === "glyph") glyphs.push({ ...it, lang: u.lang });
  }
}

console.log(`${glyphs.length} letter card(s)${only.length ? ` in ${only.join(", ")}` : ""}`);
if (DRY) {
  for (const g of glyphs) console.log(" ", g.id.padEnd(26), g.front);
  process.exit(0);
}

async function transcribe(buf, lang) {
  const form = new FormData();
  form.append("model_id", "scribe_v1");
  form.append("language_code", lang);
  form.append("file", new Blob([buf], { type: "audio/mpeg" }), "clip.mp3");
  const r = await fetch("https://api.elevenlabs.io/v1/speech-to-text", {
    method: "POST",
    headers: { "xi-api-key": key },
    body: form,
  });
  if (!r.ok) throw new Error(`ElevenLabs ${r.status}`);
  return ((await r.json()).text ?? "").trim();
}

// NOT EVERY TRANSCRIPT BELONGS IN THE KEY. Asked for one sound, Scribe sometimes
// returns a word: "chapter" for ch, "silencio" for ú, "heythere" for ê, "kulja" for
// kj. Left in, those are answers the card would accept, and the key stops being an
// answer key. Two filters, both about what a letter card can possibly be:
//
//   1. A LETTER IS SHORT. Anything over 3 characters is the transcriber reaching
//      for a word, not a sound.
//   2. A LETTER IS NOT ANOTHER LETTER. "â" came back as "é" - a DIFFERENT letter
//      taught in the same language. Accepting it would teach that the two are
//      interchangeable, which is the exact confusion the accent standard exists to
//      prevent, arriving through the grader instead of through the content.
//
// A dropped transcript is not a lost grade: the reading is always in the key, and
// an item left with no key at all falls back to shadowing - the old behaviour.
const MAX_LEN = 3;
const otherLetters = new Map(); // lang -> Set of every OTHER letter's front/reading
for (const g of glyphs) {
  const set = otherLetters.get(g.lang) ?? otherLetters.set(g.lang, new Set()).get(g.lang);
  set.add(normalizeSpeech(g.front));
  if (g.reading) set.add(normalizeSpeech(g.reading));
}
function keepTranscript(t, g) {
  if (!t || t.length > MAX_LEN) return false;
  const mine = new Set([normalizeSpeech(g.front), normalizeSpeech(g.reading ?? "")]);
  if (mine.has(t)) return true; // it IS this letter - always keep
  return !otherLetters.get(g.lang)?.has(t); // otherwise it must not be another one
}

// TWO ATTEMPTS, AND KEEP BOTH ANSWERS. Scribe is not deterministic on a clip this
// short - the audio generator in this repo needed four attempts for the same
// reason. Two transcripts of the same reference clip are two legitimate ways the
// correct sound comes back, so both belong in the key rather than one winning a
// coin flip.
const targets = {};
const dropped = [];
const report = [];
for (const g of glyphs) {
  const path = join(root, "public", "audio", g.lang, `${g.id}.mp3`);
  if (!existsSync(path)) {
    report.push([g.front, g.id, "NO CLIP", ""]);
    continue;
  }
  const buf = readFileSync(path);
  const heard = new Set();
  for (let i = 0; i < 2; i++) {
    try {
      const t = normalizeSpeech(await transcribe(buf, g.lang));
      if (!t) continue;
      if (keepTranscript(t, g)) heard.add(t);
      else dropped.push(`${String(g.front).padEnd(5)} ${g.id.padEnd(26)} dropped "${t}"`);
    } catch (err) {
      report.push([g.front, g.id, `ERR ${err.message}`, ""]);
    }
  }
  // The reading is always accepted too: when the transcriber DOES return the
  // spelling (ô -> "O"), that is the same answer arriving by the obvious route,
  // and a learner whose accent transcribes literally must not be marked wrong.
  const reading = normalizeSpeech(g.reading ?? "");
  if (reading) heard.add(reading);
  targets[g.id] = [...heard].sort();
  report.push([g.front, g.id, [...heard].join(" | "), heard.size > 1 ? "" : "single"]);
}

for (const [front, id, heard, note] of report) {
  console.log(" ", String(front).padEnd(5), id.padEnd(26), heard, note);
}
if (dropped.length) {
  console.log(`\n${dropped.length} transcript(s) rejected as not-a-letter:`);
  for (const d of dropped) console.log("  ", d);
}

const body = `// GENERATED by scripts/generate-speech-targets.mjs - do not edit by hand.
//
// The spoken answer key for letter cards: what this repo's own reference clip for
// each letter actually transcribes to, measured rather than assumed. See the
// script's header for why the key is measured instead of derived from spelling.
//
// ${glyphs.length} letter card(s), generated ${new Date().toISOString().slice(0, 10)}.
export const SPEECH_TARGETS = ${JSON.stringify(targets, null, 2)};
`;
writeFileSync(join(root, "src", "data", "speechTargets.js"), body, "utf8");
console.log(`\nwrote src/data/speechTargets.js - ${Object.keys(targets).length} entries`);
