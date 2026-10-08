// Is this CANDIDATE front safe to author in <lang>? — the only probe here that can
// see an INFLECTION.
//
//   node scripts/qa/candidate-check.mjs <lang> <candidate> [candidate ...]
//
// WHY IT EXISTS. `front-taken.mjs` compares STRINGS, so it passes a word that is
// another taught word wearing a different ending, and the learner meets what is
// effectively one lexeme as two cards. The hi B2 seat hit this four times in one
// session: जोड़ and भाग are the IMPERATIVES of जोड़ना(u60) and भागना(u48), गुणा folds
// onto गुना(u63), and घात onto घाट. Every one passed `front-taken` cleanly.
//
// It also answers the drill question, which is a different question: `canCloze`
// blanks a front out of a drill on a WHOLE-WORD boundary (/\p{L}/u on both sides),
// so a candidate that contains a taught front as a whole word will have that other
// card's cloze fire inside it, and vice versa. Both directions are reported.
//
// ⚠️ IT TAKES THE LANGUAGE, AND IT TELLS YOU WHEN IT HAS NO MORPHOLOGY FOR ONE.
// Promoted from `scripts/tmp/cand-check.mjs`, which did `import { HI_UNITS }` — the
// FIFTH instance of the hardcoded-Hindi bug in this directory today, after
// reading-taken, scope-strict-drills, front-taken and gloss-taken. Promoting it
// as-written would have planted instance 5 in the gated path.
//
// Inflection is per-language and I will not pretend otherwise: a language with no
// PARADIGM entry below gets the two script-agnostic checks and an explicit
// "no morphology defined" line. A silent "ok" would be the same false green in a
// new costume — the whole point is that the caller knows WHICH checks ran.
// ⚠️ AND THE CAVEAT THAT OUTRANKS EVERY CHECK BELOW: THIS READS YOUR BRANCH'S
// CORPUS, SO IT CANNOT SEE A SIBLING BLOCK THAT HAS NOT MERGED. Verified while
// promoting it — `candidate-check hi घात:ghaat` says the reading is free on main
// and is RIGHT, because घाट/`ghaat` exists only on content/hi-b2-merge at u127.
// Merge your siblings first and re-probe, or the answer is true and useless. That
// blindness, not any missing check, is what cost 13 re-authored cards in id B1 and
// 28 in hi B2.
import { UNITS } from "../../src/data/index.js";

const LANG = process.argv[2];
const LANGS = [...new Set(UNITS.map((u) => u.lang))];
if (!LANG || !LANGS.includes(LANG)) {
  console.error(`usage: node scripts/qa/candidate-check.mjs <lang> <candidate> [candidate ...]`);
  console.error(`  known: ${LANGS.join(" ")}`);
  process.exit(2);
}

const items = [];
for (const u of UNITS.filter((x) => x.lang === LANG))
  for (const l of u.lessons ?? []) for (const it of l.items ?? [])
    items.push({ front: it.front, unit: u.order, reading: it.reading ?? "", type: it.type });
const vocab = items.filter((i) => i.type === "vocab");
const fronts = vocab.map((i) => i.front);
const unitOf = new Map(items.map((i) => [i.front, i.unit]));

// canCloze's real boundary test, not whitespace splitting.
const isLetter = (c) => (c ? /\p{L}/u.test(c) : false);
function whole(hay, needle) {
  if (!needle || !hay) return false;
  let i = hay.indexOf(needle);
  while (i >= 0) {
    if (!isLetter(hay[i - 1]) && !isLetter(hay[i + needle.length])) return true;
    i = hay.indexOf(needle, i + 1);
  }
  return false;
}

// FORWARD morphology: expand a taught front into the forms it would collide with.
// Devanagari suffixes, from the hi crew's measured paradigm.
const PARADIGM = {
  hi: (f) => {
    const out = [];
    if (f.endsWith("ना") && f.length > 3) {
      const st = f.slice(0, -2);
      for (const s of ["ा", "ी", "े", "ो", "ता", "ती", "ते", "या", "यी", "ये", "ाओ", "आ"]) out.push([st + s, ""]);
      out.push([st, " imperative"]);
    }
    if (f.endsWith("ा") && f.length > 2) {
      const st = f.slice(0, -1);
      for (const s of ["ी", "े"]) out.push([st + s, " feminine/oblique"]);
    }
    return out;
  },
};

// BACKWARD morphology: strip affixes off the CANDIDATE and see whether what is left
// is already taught. The right shape for an affixing language, where the derived
// form is longer than the root rather than a different ending on it.
const AFFIX = {
  id: {
    prefixes: ["mem", "men", "meng", "meny", "me", "ber", "ter", "pen", "pem", "peng", "per", "pe", "di", "se"],
    suffixes: ["kan", "an", "i", "nya"],
  },
};

const infl = new Map();
if (PARADIGM[LANG])
  for (const it of vocab)
    for (const [form, note] of PARADIGM[LANG](it.front))
      if (!infl.has(form)) infl.set(form, `${it.front}(u${it.unit})${note}`);

function affixHits(c) {
  const a = AFFIX[LANG];
  if (!a) return [];
  const hits = [];
  const taught = new Set(fronts);
  for (const p of a.prefixes)
    if (c.startsWith(p) && c.length - p.length >= 3) {
      const rest = c.slice(p.length);
      // `cand !== c` matters: reconstructing a stripped prefix made every me- verb
      // "derived from itself" on the first run.
      for (const cand of [rest, "me" + rest])
        if (cand !== c && taught.has(cand)) hits.push(`${p}- off ${cand}(u${unitOf.get(cand)})`);
    }
  for (const s of a.suffixes)
    if (c.endsWith(s) && c.length - s.length >= 3) {
      const rest = c.slice(0, -s.length);
      if (taught.has(rest)) hits.push(`-${s} on ${rest}(u${unitOf.get(rest)})`);
    }
  return [...new Set(hits)];
}

const cands = process.argv.slice(3);
if (!cands.length) {
  console.error("give at least one candidate front");
  process.exit(2);
}

const ran = ["front-taken", "whole-word both directions"];
ran.push(PARADIGM[LANG] ? "inflection paradigm" : "NO INFLECTION PARADIGM for " + LANG);
ran.push(AFFIX[LANG] ? "affix stripping" : "NO AFFIX TABLE for " + LANG);
console.log(`checks run for ${LANG}: ${ran.join(" · ")}`);

for (const raw of cands) {
  const [c, reading] = String(raw).includes(":") ? String(raw).split(":") : [String(raw), ""];
  const notes = [];
  const own = items.find((i) => i.front === c);
  if (own) notes.push(`TAKEN u${own.unit}`);
  // CASE. Added 2026-10-07 after the id B2 block-2 seat shipped `Saudara` with a
  // capital: this probe compared exactly, so it reported FREE, and
  // `validateContent`'s front-uniqueness check is case-sensitive too and also
  // passed it. `saudara` is taught at u4, in A1. `crossblock.mjs` was the only
  // thing in the toolchain that caught it, after the card was written.
  if (!own) {
    const ci = items.find((i) => String(i.front).toLowerCase() === c.toLowerCase());
    if (ci) notes.push(`TAKEN u${ci.unit} as "${ci.front}" — DIFFERS ONLY BY CASE`);
  }
  if (infl.has(c)) notes.push(`INFLECTION OF ${infl.get(c)}`);
  const af = affixHits(c);
  if (af.length) notes.push(`DERIVED: ${af.join(" ")}`);
  const inside = fronts.filter((f) => f !== c && whole(c, f));
  if (inside.length) notes.push(`FIRES-INSIDE: ${inside.map((f) => `${f}(u${unitOf.get(f)})`).join(" ")}`);
  const outer = fronts.filter((f) => f !== c && whole(f, c));
  if (outer.length) notes.push(`I-FIRE-IN: ${outer.map((f) => `${f}(u${unitOf.get(f)})`).join(" ")}`);
  // READING COLLISIONS NEED THE CANDIDATE'S READING, AND ONLY THE CALLER KNOWS IT.
  // The hi seat found घात by reading: it folds onto घाट, which no comparison of
  // Devanagari fronts can see, because the readings are romanised. So `front:reading`
  // is accepted and checked, and a bare front says the check did not run rather
  // than printing a clean "ok" it has not earned.
  if (reading) {
    const rd = items.filter((i) => i.front !== c && i.reading && i.reading === reading);
    rd.length
      ? notes.push(`READING TAKEN by ${rd.map((i) => `${i.front}(u${i.unit})`).join(" ")}`)
      : notes.push(`reading "${reading}" free`);
  } else {
    notes.push("reading NOT CHECKED — pass it as front:reading");
  }
  console.log(`${notes.some((n) => /TAKEN|INFLECTION|DERIVED|FIRES|I-FIRE/.test(n)) ? "⚠ " : "ok "}${c}  ${notes.join(" | ")}`);
}
