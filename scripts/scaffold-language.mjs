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
import { writeTaughtWords } from "./generate-taught-words.mjs";

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

// --- the B1 band template ----------------------------------------------------
// Same three strands plus a fourth that only exists from B1 up: REGISTER. At A1/A2
// one neutral register is survivable; at B1 the same sentence said to a friend, a
// stranger and a boss is three sentences, and picking wrong marks a speaker as
// foreign more than vocabulary does. Modelled like grammar — function-word/suffix
// vocab whose examples carry the contrast. Topics turn abstract here (opinion,
// cause, comparison, hedging) and examples grow to 2+ clauses joined by the
// connective being taught. See BUILD-BRIEF-language-blueprint.md §1.
const THEMATIC_B1 = [
  ["opinion", "Opinion and agreement"],
  ["cause-effect", "Cause and consequence"],
  ["comparison", "Comparison and degree"],
  ["hedging", "Hedging and uncertainty"],
  ["news-society", "News and society"],
  ["work-process", "Work and process"],
  ["emotion-fine", "Emotion, finer shades"],
  ["abstract-ideas", "Abstract ideas"],
  ["describing-change", "Change over time"],
  ["problems", "Problems and solutions"],
  ["rules-permission", "Rules, permission, obligation"],
  ["plans-intentions", "Plans and intentions"],
  ["experience", "Experience and memory"],
  ["media", "Media and entertainment"],
  ["environment", "Environment and place"],
  ["money-economy", "Money and the economy"],
  ["health-wellbeing", "Health and wellbeing"],
  ["relationships", "Relationships and society"],
];
const GRAMMAR_B1 = [
  ["grammar-6", "Grammar 6 — linked and subordinate clauses"],
  ["grammar-7", "Grammar 7 — passive, causative, indirect"],
  ["grammar-8", "Grammar 8 — nuance, evidentiality, nominalization"],
];
const REGISTER_B1 = [
  ["register-1", "Register 1 — polite vs plain"],
  ["register-2", "Register 2 — softening and formality"],
];
const COVERAGE_UNITS_B1 = 14;
const CHARACTER_UNITS_B1 = 20; // own-script only

// --- the B2 band template ----------------------------------------------------
// Same four strands as B1 (script / thematic / grammar / register) — the shape does
// not change again above B1, only the difficulty and the volume. Topics move from
// "abstract but everyday" to argument and abstraction proper; the register strand
// steps up from 丁寧 vs 普通 to 敬語. Per BUILD-BRIEF-language-blueprint.md §1 the
// band is ~18 thematic + ~20 character + 3 grammar + 2 register + 16 coverage.
//
// NOTE for whoever runs this: the glyph pool is the binding constraint, not the
// template. B1 consumed all 568 kanji that had stroke data, and the N2 fetch added
// 224 more — so 20 character units at 16 glyphs each (320) does NOT fit today.
// Either extend KANJI_N2 in scripts/fetch-kanjivg.mjs and re-run it, or size the
// character strand to the pool. Do that BEFORE scaffolding, not during a crew.
const THEMATIC_B2 = [
  ["argument", "Argument and persuasion"],
  ["evidence", "Evidence and sources"],
  ["abstraction", "Systems and abstraction"],
  ["nuance-degree", "Nuance and degree"],
  ["politics-law", "Politics and law"],
  ["business", "Business and negotiation"],
  ["science-tech", "Science and technology"],
  ["history-culture", "History and culture"],
  ["arts-criticism", "Arts and criticism"],
  ["ethics", "Ethics and responsibility"],
  ["risk-uncertainty", "Risk and uncertainty"],
  ["identity-society", "Identity and society"],
  ["work-career", "Career and organisations"],
  ["environment-global", "Environment and the global"],
  ["health-systems", "Health systems and care"],
  ["education-research", "Education and research"],
  ["media-narrative", "Media and narrative"],
  ["emotion-subtle", "Emotion, subtle and mixed"],
];
const GRAMMAR_B2 = [
  ["grammar-9", "Grammar 9 — conditional nuance and counterfactuals"],
  ["grammar-10", "Grammar 10 — formal written structures"],
  ["grammar-11", "Grammar 11 — discourse, cohesion, hedged claims"],
];
const REGISTER_B2 = [
  ["register-3", "Register 3 — 敬語: humble and honorific"],
  ["register-4", "Register 4 — written, public and institutional voice"],
];
const COVERAGE_UNITS_B2 = 16;
// SIZED TO THE POOL, NOT TO THE TEMPLATE. The blueprint says ~20 character units;
// the N2 fetch yielded 224 untaught glyphs, which is 14 units at 16 glyphs each.
// Scaffolding 20 would hand six crews a stub they cannot fill — the B1 crew hit the
// mirror of this and had to invent the 4x(4 glyphs + 2 compounds) shape mid-flight.
// Raise this only after extending KANJI_N2 and re-running the fetch.
const CHARACTER_UNITS_B2 = 14; // own-script only

function plan({ ownScript, band, startOrder = 0 }) {
  const units = [];
  const push = (slot, title, stage) =>
    units.push({ order: startOrder + units.length + 1, slot, title, stage });

  if (band === "a2" || band === "b1" || band === "b2") {
    const B1 = band === "b1";
    const B2 = band === "b2";
    const thematic = B2 ? THEMATIC_B2 : B1 ? THEMATIC_B1 : THEMATIC_A2;
    const grammar = B2 ? GRAMMAR_B2 : B1 ? GRAMMAR_B1 : GRAMMAR_A2;
    // A2 drills conjugation; B1 introduces the register strand instead — by B1 the
    // conjugation machinery is drilled and what's unpractised is choosing between
    // polite and plain for a given listener.
    const tail = B2 ? REGISTER_B2 : B1 ? REGISTER_B1 : DRILL_A2;
    const chars = B2 ? CHARACTER_UNITS_B2 : B1 ? CHARACTER_UNITS_B1 : CHARACTER_UNITS_A2;
    const coverage = B2 ? COVERAGE_UNITS_B2 : B1 ? COVERAGE_UNITS_B1 : COVERAGE_UNITS_A2;
    const tag = band.toUpperCase();

    let characters = 0;
    thematic.forEach(([slot, title], i) => {
      push(slot, title, band);
      // Character units interleave through the thematic strand rather than sitting
      // in a block at the end — ja's pattern, so a glyph is met near the words that
      // use it. B1 needs ~20 across 18 topics, so more than one may land per gap.
      const want = Math.round(((i + 1) / thematic.length) * chars);
      while (ownScript && characters < want && characters < chars)
        push(`characters-${band}-${++characters}`, `Characters ${characters} (${tag})`, band);
    });
    grammar.forEach(([slot, title]) => push(slot, title, band));
    tail.forEach(([slot, title]) => push(slot, title, band));
    for (let i = 1; i <= coverage; i++)
      push(`coverage-${band}-${i}`, `Vocabulary ${i} (${tag})`, band);
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
export const ${u.name} = {
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

const DEFAULT_BARREL_HEADER = (LANG) =>
  `// ${LANG} units — the per-language barrel. Adding a unit touches THIS file and
// nothing else; src/data/index.js imports one line per language, so parallel
// authoring sessions never edit a shared file. See
// BUILD-BRIEF-language-blueprint.md §3b. Generated shape — keep it mechanical.`;

// Takes export NAMES (e.g. "FR_UNIT28"), not unit objects, so it can regenerate a
// barrel that mixes already-authored units with freshly stubbed ones.
//
// `notes` carries the COMMENTS read off the barrel being replaced. Regenerating
// from names alone is lossy in a way that bites silently: the ja barrel carried 30
// lines of band markers and annotations — including "⚠️ pending batched
// native-speaker review", an open-work flag — and the B1 scaffold run erased all of
// them (34 comment lines → 4). Nothing failed; the information was just gone. The
// French barrel carries the same class of note ("fr-u27 = Les sons — id 27 but
// ORDER 1"), which encodes non-obvious ordering behaviour. So a regenerate now
// re-attaches every comment to the unit it was written against, and keeps a
// hand-edited header instead of stamping the generated one over it.
const barrelFile = (LANG, names, notes = {}) => {
  const { header, before = new Map(), trailing = new Map(), tail = [] } = notes;
  const imports = names.map((n) => {
    const no = n.match(/\d+$/)[0];
    const pre = before.get(no);
    const tr = trailing.get(no);
    return (
      (pre?.length ? pre.join("\n") + "\n" : "") +
      `import { ${n} } from "./unit${no}.js";` +
      (tr ? ` ${tr}` : "")
    );
  });
  return `${header ?? DEFAULT_BARREL_HEADER(LANG)}
${imports.join("\n")}${tail.length ? "\n" + tail.join("\n") : ""}

export const ${LANG}_UNITS = [
  ${names.join(", ")},
];
`;
};

// Split a barrel into its header, and the comments attached to each import. A
// standalone comment binds FORWARD to the next import (that is how section markers
// read); a trailing comment binds to its own line.
function readBarrelNotes(src) {
  const lines = src.split(/\r?\n/);
  const first = lines.findIndex((l) => /^import \{/.test(l));
  if (first < 0) return {};
  const before = new Map();
  const trailing = new Map();
  let pending = [];
  for (const line of lines.slice(first)) {
    const m = line.match(/^import \{ (\w+) \} from "\.\/unit(\d+)\.js";(.*)$/);
    if (m) {
      if (pending.length) before.set(m[2], pending);
      pending = [];
      const rest = m[3].trim();
      if (rest.startsWith("//")) trailing.set(m[2], rest);
    } else if (/^\s*\/\//.test(line)) {
      pending.push(line);
    } else if (/^export const/.test(line)) break;
  }
  return {
    header: first > 0 ? lines.slice(0, first).join("\n") : undefined,
    before,
    trailing,
    tail: pending, // comments after the last import, e.g. a closing band marker
  };
}

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
  "Usage: npm run scaffold:lang -- <lang-code> [--script] [--band a1|a2|b1|b2]\n" +
  "  --band a2|b1|b2 EXTENDS an existing language with that band (units appended).";

if (!lang) {
  console.error(USAGE);
  process.exit(1);
}
if (!["a1", "a2", "b1", "b2"].includes(band)) {
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

// A1 CREATES the language; every later band EXTENDS it. Each refuses the other's
// situation, so neither can clobber authored content: `--band a1` on a live
// language would overwrite unit1.js, and an extending band on a language with no
// A1 would scaffold on top of nothing.
//
// The extend guard is keyed on `band !== "a1"`, NOT on a list of extending bands.
// It was written as `band === "a2" && !exists`, so adding b1 to the band allowlist
// silently left b1 unguarded — `scaffold:lang -- de --band b1` would have written a
// B1 band into an empty directory. Any band added later is covered by default.
if (band === "a1" && exists) {
  console.error(
    `src/data/${lang}/ already exists — refusing to overwrite authored content.\n` +
      `To add the next band instead: npm run scaffold:lang -- ${lang} --band a2|b1|b2`
  );
  process.exit(1);
}
if (band !== "a1" && !exists) {
  console.error(
    `src/data/${lang}/ does not exist — cannot add the ${band.toUpperCase()} band.\n` +
      `Scaffold the A1 band first:\n` +
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
// Export naming is NOT uniform across the repo and must never be assumed: Japanese
// predates the per-language prefix and exports `UNIT1`, while French exports
// `FR_UNIT1`. Constructing `${LANG}_UNIT${n}` produced a barrel importing JA_UNIT1
// from a file that exports UNIT1 — a module-resolution error that took out the app
// and 10 unit tests. So the existing names are READ from the current barrel, and
// new units follow whatever convention that barrel already uses.
let prefix = `${LANG}_`;
let notes = {};
if (exists) {
  const barrel = fs.readFileSync(path.join(dir, "index.js"), "utf8");
  notes = readBarrelNotes(barrel);
  existingNames = [...barrel.matchAll(/import \{ (\w+) \} from "\.\/unit(\d+)\.js"/g)].map(
    (m) => m[1]
  );
  if (existingNames.length && !existingNames[0].startsWith(`${LANG}_`)) prefix = "";

  const mod = await import(pathToFileURL(path.join(dir, "index.js")).href);
  const prior = mod[`${LANG}_UNITS`] ?? [];
  startOrder = prior.reduce((m, u) => Math.max(m, u.order ?? 0), 0);
  startUnitNo = prior.reduce(
    (m, u) => Math.max(m, Number(String(u.id).split("-u")[1]) || 0),
    0
  );
}

const units = plan({ ownScript, band, startOrder }).map((u, i) => ({
  ...u,
  unitNo: startUnitNo + i + 1,
  name: `${prefix}UNIT${startUnitNo + i + 1}`,
}));

fs.mkdirSync(dir, { recursive: true });
for (const u of units)
  fs.writeFileSync(path.join(dir, `unit${u.unitNo}.js`), unitFile(lang, LANG, u));
fs.writeFileSync(
  path.join(dir, "index.js"),
  barrelFile(LANG, [...existingNames, ...units.map((u) => u.name)], notes)
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

// The taught-words list, written HERE — on the scaffold branch, before any crew
// branches off it — so every worktree inherits it. Generated after the stubs so it
// also lists the slots that are still stubs (the ones other blocks own), and given
// the block split so a crew can tell which slots a LATER block will want.
// RUNBOOK §0/§3/§4. check-lang-scope.mjs cannot answer this on a crew branch: it
// skips every unit behind a stub, so it only sees straight at merge, which is after
// the damage. Regenerate after each merge: npm run taught:words -- <lang>
const per = Math.ceil(units.length / 3);
const blocks = [];
for (let b = 0; b < 3; b++) {
  const lo = units[b * per];
  const hi = units[Math.min((b + 1) * per, units.length) - 1];
  if (lo) blocks.push({ block: b + 1, from: lo.unitNo, to: hi.unitNo });
}
const taught = await writeTaughtWords(lang, process.cwd(), { blocks });
console.log(
  `  src/data/${lang}/TAUGHT-WORDS.md  (${taught.words.length} words already taught, ` +
    `${taught.stubs.length} slot(s) still stubs)`
);
console.log("\nBlocks (RUNBOOK-new-language.md §0):");
for (const b of blocks) console.log(`  block ${b.block}: units ${b.from}-${b.to}`);
console.log("\nNext: npm run validate:content   (should be green immediately)");
console.log("Then COMMIT the scaffold — TAUGHT-WORDS.md included — before any crew branches off it.");
