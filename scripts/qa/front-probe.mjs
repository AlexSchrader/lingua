// IS THIS CANDIDATE FREE? Front, reading, gloss and stem — in ONE pass, for ANY
// language. Written by the ru B2 block-1 seat (crew lead) and committed because a
// unit header that cites `scripts/tmp/<something>.mjs` cites nothing once the
// worktree is gone.
//
//   node scripts/qa/front-probe.mjs ru "тезис|tezis|the claim to be proved"
//   node scripts/qa/front-probe.mjs ru --file scripts/data/ru-b2-candidates.txt
//
// Each input line is `front|reading|gloss`, and reading and gloss are optional.
// A line beginning `##` opens a SECTION and the free fronts of each section are
// printed as one list, which is the shape a slot allocation needs. A line
// beginning with a single `#` is a comment.
//
// WHY THIS AND NOT THE THREE EXISTING PROBES. `scripts/qa/front-taken.mjs`,
// `reading-taken.mjs` and `gloss-taken.mjs` each answer one of these questions
// and ALL THREE IMPORT `HI_UNITS` DIRECTLY — they cannot be run for any language
// but Hindi. `scripts/check-front.mjs` is language-generic but its lexeme probe
// strips GERMAN suffixes and is blind to Cyrillic morphology (unit1.js §D says so
// in as many words), and it does not look at readings or glosses at all. Measured
// on 503 ru B2 candidates, each of the four columns below caught candidates the
// others passed cleanly:
//
//   FRONT    `среда` as "an environment" — it IS Wednesday (ru u17).
//   READING  `уголь` reads "ugol" and so does `угол` (ru u12). Front-clean.
//   GLOSS    `хроника` would be glossed "a chronicle", which is already
//            `летопись`'s gloss (u73) — one prompt, two right answers through
//            `normalizeMeaning`. Front-clean and reading-clean.
//   STEM     `руководство` beside the taught `руководитель` (u32). Front-clean,
//            reading-clean, gloss-clean, and the same lexeme.
//
// ⚠️ THE STEM COLUMN IS ADVISORY AND MUST STAY THAT WAY. It flags a 5-character
// shared prefix, which is a coincidence as often as a derivation: `конституция`
// beside `констатировать` is two unrelated words, and `правительство` beside
// `правило` is a shared root and two lexemes a learner cannot derive one from the
// other. The verdict is unit1.js §D's one-directional test — does the TAUGHT word
// hand the candidate over? — and that is a HUMAN judgement, as unit1.js §D itself
// records for Russian. This column tells you WHERE to apply it, never what the
// answer is.
//
// ⚠️ AND A PROBE NEVER OUTRANKS A WRITTEN REFUSAL. `обычай`, `старина` and
// `убедительный` all come back FREE here and all three are refused with reasons
// in an earlier ru unit header. Grep the headers too — `unit98.js §3`.
//
// A CONTROL front is probed on every run: the first front of the language's
// lowest-ordered unit, read from the corpus itself. If it does not report TAKEN
// the probe is broken and every "free" below is worthless.
import { readFileSync } from "node:fs";
import { UNITS } from "../../src/data/index.js";

const [, , lang, ...rest] = process.argv;
if (!lang) {
  console.error('usage: node scripts/qa/front-probe.mjs <lang> "front|reading|gloss" … | --file <path>');
  process.exit(2);
}

const units = UNITS.filter((u) => u.lang === lang).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
if (!units.length) {
  console.error(`no units for language "${lang}"`);
  process.exit(2);
}

// Exactly `normalizeMeaning` from src/store/answer.js — the grader's own folding.
const normGloss = (s = "") =>
  String(s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\(.*?\)/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^(?:a|an|the)\s+/, "")
    .replace(/^to\s+/, "");

const byFront = new Map();
const byReading = new Map();
const byGloss = new Map();
for (const u of units)
  for (const l of u.lessons ?? [])
    for (const it of l.items ?? []) {
      byFront.set(it.front, `u${u.order}`);
      if (it.reading) {
        if (!byReading.has(it.reading)) byReading.set(it.reading, []);
        byReading.get(it.reading).push(`${it.front}@u${u.order}`);
      }
      for (const g of [it.meaning, ...(it.accept ?? [])]) {
        const k = normGloss(g);
        if (!k) continue;
        if (!byGloss.has(k)) byGloss.set(k, []);
        byGloss.get(k).push(`${it.front}@u${u.order}${g === it.meaning ? "" : "~"}`);
      }
    }

const fronts = [...byFront.keys()];
const STEM_MIN = 5;
function stemHits(word) {
  const out = [];
  for (const f of fronts) {
    const n = Math.min(f.length, word.length);
    if (n < STEM_MIN) continue;
    let i = 0;
    while (i < n && f[i] === word[i]) i += 1;
    if (i >= STEM_MIN) out.push(`${f}@${byFront.get(f)}`);
  }
  return out;
}

let lines = rest;
const fileIdx = rest.indexOf("--file");
if (fileIdx !== -1) lines = readFileSync(rest[fileIdx + 1], "utf8").split("\n");
lines = lines.map((l) => l.trimEnd()).filter((l) => l.trim());

const control = units[0].lessons?.[0]?.items?.[0]?.front;
const controlVerdict = byFront.get(control) ?? "BROKEN — control front not found";
console.log(`${lang}: ${byFront.size} fronts / ${byReading.size} distinct readings`);
console.log(`CONTROL front ${JSON.stringify(control)} -> ${controlVerdict}`);
if (controlVerdict.startsWith("BROKEN")) process.exit(1);

let section = null;
let freeHere = [];
let free = 0;
let flagged = 0;
const flush = () => {
  if (section !== null) console.log(`  FREE ${freeHere.length}: ${freeHere.join(" · ")}\n`);
  freeHere = [];
};

for (const raw of lines) {
  const line = raw.trim();
  if (line.startsWith("##")) {
    flush();
    section = line.slice(2).trim();
    console.log(`== ${section}`);
    continue;
  }
  if (line.startsWith("#")) continue;
  const [front, reading, gloss] = line.split("|").map((s) => (s ?? "").trim());
  if (!front) continue;
  const problems = [];
  if (byFront.has(front)) problems.push(`FRONT ${byFront.get(front)}`);
  if (reading && byReading.has(reading)) problems.push(`READING ${byReading.get(reading).join(",")}`);
  if (gloss && byGloss.has(normGloss(gloss))) problems.push(`GLOSS ${byGloss.get(normGloss(gloss)).join(",")}`);
  const st = stemHits(front);
  if (st.length) problems.push(`STEM? ${st.join(",")}`);
  if (problems.length) {
    flagged += 1;
    console.log(`  x ${front}\t${problems.join(" | ")}`);
  } else {
    free += 1;
    if (section !== null) freeHere.push(front);
    else console.log(`  free ${front}`);
  }
}
flush();
console.log(`TOTAL ${free} clean / ${flagged} flagged / ${free + flagged} probed`);
console.log("STEM? is advisory — apply unit1.js §D's one-directional test by hand, and grep the unit headers for a written refusal.");
