// Scaffold a new language directory from the standard pathway.
//
//   npm run scaffold:lang -- es            Latin-script (default)
//   npm run scaffold:lang -- ko --script   own-script: adds the pre-A1 script band
//
// Writes src/data/<lang>/unitN.js for every unit in the A1 band template, each
// with locked stub lessons, plus the per-language barrel, and wires the barrel
// into src/data/index.js. The result VALIDATES CLEAN immediately — an authoring
// seat replaces locked stubs with real lessons one unit at a time and never has a
// red tree in between.
//
// The band template mirrors Japanese: three interleaved strands (script, thematic
// vocab, grammar-as-function-word-vocab) closed by a coverage pass. A Latin-script
// language is the same template with the script strand collapsed to one unit.
// See BUILD-BRIEF-language-blueprint.md §1.

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { LANGUAGES } from "../src/data/languages.js";

const DATA = path.join(process.cwd(), "src", "data");
const LESSONS_PER_UNIT = 4; // the mature ja shape: 4 lessons x 6 cards = 24 cards

// --- the A1 band template ----------------------------------------------------
// Titles are English working titles — the authoring seat localizes them (ja uses
// かず・じかん, fr uses Les nombres). The SLOT is what's fixed, not the wording.
const THEMATIC = [
  ["greetings", "Greetings"],
  ["self", "Introducing yourself"],
  ["family", "Family"],
  ["numbers-time", "Numbers and time"],
  ["food", "Food and drink"],
  ["places", "Town and places"],
  ["colors-weather", "Colors and weather"],
  ["days-months", "Days and months"],
  ["describing", "Describing things"],
  ["body-health", "Body and health"],
];
const GRAMMAR = [
  ["grammar-1", "Grammar 1 — basic sentence"],
  ["grammar-2", "Grammar 2 — verbs and particles"],
  ["grammar-3", "Grammar 3 — past tense and agreement"],
];
const COVERAGE_UNITS = 6;
const SCRIPT_UNITS = 6; // own-script languages only
const CHARACTER_UNITS = 6; // own-script only: interleaved every 2 thematic units

// --- the A2 band template ----------------------------------------------------
// Same three strands, one level deeper, mirroring ja's A2 (u22-u52 thematic +
// kanji arc + grammar + conjugation drills, then u53+ coverage). A2 is where a
// language stops being survival phrases: more abstract domains, and the two drill
// units that make conjugation a first-class thing to practise rather than a rule
// to read. See BUILD-BRIEF-language-blueprint.md §1.
const THEMATIC_A2 = [
  ["activities", "Activities and routine"],
  ["feelings", "Feelings and states"],
  ["travel", "Travel and transport"],
  ["work-school", "Work and school"],
  ["health", "Health and the body"],
  ["nature", "Nature and animals"],
  ["shopping-money", "Shopping and money"],
  ["time-adverbs", "Time and adverbs"],
  ["connectors", "Connecting words"],
  ["home", "Home and household"],
  ["personality", "Personality and character"],
  ["society", "Society and daily life"],
  ["technology", "Technology and communication"],
  ["science", "Nature and science"],
  ["culture", "Culture and leisure"],
];
const GRAMMAR_A2 = [
  ["grammar-4", "Grammar 4 — compound and linked clauses"],
  ["grammar-5", "Grammar 5 — conditionals, ability, comparison"],
];
const DRILL_A2 = [
  ["conjugation-1", "Conjugation drill 1"],
  ["conjugation-2", "Conjugation drill 2"],
];
const COVERAGE_UNITS_A2 = 11;
const CHARACTER_UNITS_A2 = 12; // own-script only

function plan({ ownScript, band, startOrder = 0 }) {
  const units = [];
  const push = (slot, title, stage) =>
    units.push({ order: startOrder + units.length + 1, slot, title, stage });

  if (band === "a2") {
    let characters = 0;
    THEMATIC_A2.forEach(([slot, title], i) => {
      push(slot, title, "a2");
      if (ownScript && i % 1 === 0 && characters < CHARACTER_UNITS_A2)
        push(`characters-a2-${++characters}`, `Characters ${characters} (A2)`, "a2");
    });
    GRAMMAR_A2.forEach(([slot, title]) => push(slot, title, "a2"));
    DRILL_A2.forEach(([slot, title]) => push(slot, title, "a2"));
    for (let i = 1; i <= COVERAGE_UNITS_A2; i++)
      push(`coverage-a2-${i}`, `Vocabulary ${i} (A2)`, "a2");
    return units;
  }

  if (ownScript) {
    for (let i = 1; i <= SCRIPT_UNITS; i++)
      push(`script-${i}`, `Script ${i}`, "pre-a1");
  } else {
    push("sounds", "Sounds and spelling", "a1");
  }

  // Thematic strand, with character units woven in every 2 units (own-script only)
  let characters = 0;
  THEMATIC.forEach(([slot, title], i) => {
    push(slot, title, "a1");
    if (ownScript && i % 2 === 1 && characters < CHARACTER_UNITS)
      push(`characters-${++characters}`, `Characters ${characters}`, "a1");
  });

  GRAMMAR.forEach(([slot, title]) => push(slot, title, "a1"));
  for (let i = 1; i <= COVERAGE_UNITS; i++)
    push(`coverage-${i}`, `Vocabulary ${i}`, "a1");

  return units;
}

// --- file templates ----------------------------------------------------------

// NOTE: `unitNo` (the file/id number) and `order` (position on the Ladder) are
// NOT the same number once a band is appended — and they already diverge in real
// content: fr's "Les sons" is unit 27 with order 1. Ids and filenames use unitNo;
// only the `order` field uses order.
const unitFile = (lang, LANG, u) => `// ${LANG} Unit ${u.unitNo} — ${u.title} (slot: ${u.slot}) — ${u.stage.toUpperCase()}
// SCAFFOLD STUB. Replace the locked lessons below with ${LESSONS_PER_UNIT} real lessons of
// 5-8 cards each (aim 6). Every lesson needs a canDo. Every example may use only
// vocab introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
export const ${LANG}_UNIT${u.unitNo} = {
  id: "${lang}-u${u.unitNo}",
  lang: "${lang}",
  title: "${u.title}",
  order: ${u.order},
  stage: "${u.stage}",
  lessons: [
${Array.from({ length: LESSONS_PER_UNIT }, (_, i) => `    { id: "${lang}-u${u.unitNo}l${i + 1}", title: "Lesson ${i + 1}", locked: true },`).join("\n")}
  ],
};
`;

// Takes export NAMES (e.g. "FR_UNIT28"), not unit objects, so it can regenerate a
// barrel that mixes already-authored units with freshly stubbed ones.
const barrelFile = (LANG, names) => `// ${LANG} units — the per-language barrel. Adding a unit touches THIS file and
// nothing else; src/data/index.js imports one line per language, so parallel
// authoring sessions never edit a shared file. See
// BUILD-BRIEF-language-blueprint.md §3b. Generated shape — keep it mechanical.
${names.map((n) => `import { ${n} } from "./unit${n.split("_UNIT")[1]}.js";`).join("\n")}

export const ${LANG}_UNITS = [
  ${names.join(", ")},
];
`;

// --- wire the barrel into the root index -------------------------------------

function wireIndex(lang, LANG) {
  const file = path.join(DATA, "index.js");
  let src = fs.readFileSync(file, "utf8");
  if (src.includes(`${LANG}_UNITS`)) return false;

  const lastImport = src.lastIndexOf('_UNITS } from "./');
  const eol = src.indexOf("\n", lastImport);
  src =
    src.slice(0, eol + 1) +
    `import { ${LANG}_UNITS } from "./${lang}/index.js";\n` +
    src.slice(eol + 1);

  src = src.replace(
    /export const UNITS = \[([^\]]*)\];/,
    (_m, inner) => `export const UNITS = [${inner.trimEnd()}, ...${LANG}_UNITS];`
  );
  fs.writeFileSync(file, src);
  return true;
}

// --- main --------------------------------------------------------------------

const args = process.argv.slice(2);
const lang = args.find((a) => !a.startsWith("--"));
const ownScript = args.includes("--script");
const bandIdx = args.indexOf("--band");
const band = bandIdx >= 0 ? args[bandIdx + 1] : "a1";

const USAGE =
  "Usage: npm run scaffold:lang -- <lang-code> [--script] [--band a1|a2]\n" +
  "  --band a2 EXTENDS an existing language with the A2 band (units appended).";

if (!lang) {
  console.error(USAGE);
  process.exit(1);
}
if (band !== "a1" && band !== "a2") {
  console.error(`Unknown band "${band}".\n${USAGE}`);
  process.exit(1);
}
const entry = LANGUAGES.find((l) => l.id === lang);
if (!entry) {
  console.error(
    `Unknown language "${lang}". Add it to src/data/languages.js first.\n` +
      `Known: ${LANGUAGES.map((l) => l.id).join(", ")}`
  );
  process.exit(1);
}

const LANG = lang.toUpperCase();
const dir = path.join(DATA, lang);
const exists = fs.existsSync(dir);

// A1 CREATES the language; A2 EXTENDS it. Each refuses the other's situation, so
// neither can clobber authored content: `--band a1` on a live language would
// overwrite unit1.js, and `--band a2` on a language with no A1 would scaffold a
// second band on top of nothing.
if (band === "a1" && exists) {
  console.error(
    `src/data/${lang}/ already exists — refusing to overwrite authored content.\n` +
      `To add the next band instead: npm run scaffold:lang -- ${lang} --band a2`
  );
  process.exit(1);
}
if (band === "a2" && !exists) {
  console.error(
    `src/data/${lang}/ does not exist — scaffold the A1 band first:\n` +
      `  npm run scaffold:lang -- ${lang}`
  );
  process.exit(1);
}

// Extending: continue numbering after the highest existing unit AND the highest
// existing `order`. They are not the same number — fr's "Les sons" is unit 27 with
// order 1 — so taking the max of each independently is what keeps ids unique and
// the new band strictly after the old one on the Ladder.
let startOrder = 0;
let startUnitNo = 0;
let existingNames = [];
if (exists) {
  const mod = await import(
    pathToFileURL(path.join(dir, "index.js")).href
  );
  const prior = mod[`${LANG}_UNITS`] ?? [];
  startOrder = prior.reduce((m, u) => Math.max(m, u.order ?? 0), 0);
  startUnitNo = prior.reduce(
    (m, u) => Math.max(m, Number(String(u.id).split("-u")[1]) || 0),
    0
  );
  existingNames = prior.map(
    (u) => `${LANG}_UNIT${Number(String(u.id).split("-u")[1])}`
  );
}

const units = plan({ ownScript, band, startOrder }).map((u, i) => ({
  ...u,
  unitNo: startUnitNo + i + 1,
}));

fs.mkdirSync(dir, { recursive: true });
for (const u of units)
  fs.writeFileSync(path.join(dir, `unit${u.unitNo}.js`), unitFile(lang, LANG, u));
fs.writeFileSync(
  path.join(dir, "index.js"),
  barrelFile(LANG, [...existingNames, ...units.map((u) => `${LANG}_UNIT${u.unitNo}`)])
);
const wired = wireIndex(lang, LANG);

const first = units[0].unitNo;
const last = units[units.length - 1].unitNo;
console.log(
  `${exists ? "Extended" : "Scaffolded"} ${entry.name} (${lang}) — ${units.length} ${band.toUpperCase()} units, ${ownScript ? "own-script" : "Latin-script"}`
);
console.log(`  src/data/${lang}/unit${first}.js … unit${last}.js  (locked stubs)`);
console.log(`  src/data/${lang}/index.js  (barrel${exists ? ", regenerated" : ""})`);
console.log(wired ? "  src/data/index.js wired" : "  src/data/index.js already wired");
console.log("\nBlocks (RUNBOOK-new-language.md §0):");
const per = Math.ceil(units.length / 3);
for (let b = 0; b < 3; b++) {
  const lo = units[b * per];
  const hi = units[Math.min((b + 1) * per, units.length) - 1];
  if (lo) console.log(`  block ${b + 1}: units ${lo.unitNo}-${hi.unitNo}`);
}
console.log("\nNext: npm run validate:content   (should be green immediately)");
