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

function plan({ ownScript }) {
  const units = [];
  const push = (slot, title, stage) =>
    units.push({ order: units.length + 1, slot, title, stage });

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

const unitFile = (lang, LANG, u) => `// ${LANG} Unit ${u.order} — ${u.title} (slot: ${u.slot}) — ${u.stage.toUpperCase()}
// SCAFFOLD STUB. Replace the locked lessons below with ${LESSONS_PER_UNIT} real lessons of
// 5-8 cards each (aim 6). Every lesson needs a canDo. Every example may use only
// vocab introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
export const ${LANG}_UNIT${u.order} = {
  id: "${lang}-u${u.order}",
  lang: "${lang}",
  title: "${u.title}",
  order: ${u.order},
  stage: "${u.stage}",
  lessons: [
${Array.from({ length: LESSONS_PER_UNIT }, (_, i) => `    { id: "${lang}-u${u.order}l${i + 1}", title: "Lesson ${i + 1}", locked: true },`).join("\n")}
  ],
};
`;

const barrelFile = (LANG, units) => `// ${LANG} units — the per-language barrel. Adding a unit touches THIS file and
// nothing else; src/data/index.js imports one line per language, so parallel
// authoring sessions never edit a shared file. See
// BUILD-BRIEF-language-blueprint.md §3b. Generated shape — keep it mechanical.
${units.map((u) => `import { ${LANG}_UNIT${u.order} } from "./unit${u.order}.js";`).join("\n")}

export const ${LANG}_UNITS = [
  ${units.map((u) => `${LANG}_UNIT${u.order}`).join(", ")},
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

if (!lang) {
  console.error("Usage: npm run scaffold:lang -- <lang-code> [--script]");
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
const dir = path.join(DATA, lang);
if (fs.existsSync(dir)) {
  console.error(
    `src/data/${lang}/ already exists — refusing to overwrite authored content.`
  );
  process.exit(1);
}

const LANG = lang.toUpperCase();
const units = plan({ ownScript });

fs.mkdirSync(dir, { recursive: true });
for (const u of units)
  fs.writeFileSync(path.join(dir, `unit${u.order}.js`), unitFile(lang, LANG, u));
fs.writeFileSync(path.join(dir, "index.js"), barrelFile(LANG, units));
const wired = wireIndex(lang, LANG);

console.log(`Scaffolded ${entry.name} (${lang}) — ${units.length} units, ${ownScript ? "own-script" : "Latin-script"}`);
console.log(`  src/data/${lang}/unit1.js … unit${units.length}.js  (locked stubs)`);
console.log(`  src/data/${lang}/index.js  (barrel)`);
console.log(wired ? "  src/data/index.js wired" : "  src/data/index.js already wired");
console.log("\nBlocks (RUNBOOK-new-language.md §0):");
const b1 = ownScript ? SCRIPT_UNITS + 5 + Math.floor(5 / 2) : 6;
const b3 = GRAMMAR.length + COVERAGE_UNITS;
console.log(`  block 1: units 1-${b1}`);
console.log(`  block 2: units ${b1 + 1}-${units.length - b3}`);
console.log(`  block 3: units ${units.length - b3 + 1}-${units.length}`);
console.log("\nNext: npm run validate:content   (should be green immediately)");
