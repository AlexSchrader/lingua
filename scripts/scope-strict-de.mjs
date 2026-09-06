// STRICT vocabulary-scope check for German examples and drills.
//
// Why this exists alongside lint:curriculum. lint's scope check excuses a token
// via isInflection(): if the token shares a 3-character prefix with a taught word
// and differs by at most 3 characters, it is waved through as an inflection
// (src/data/lint.js:226). That bound is what stops "par" vouching for "parlons",
// but it has a consequence nobody intended: ANY SHORT FUNCTION WORD THAT HAPPENS
// TO PREFIX A LONGER TAUGHT WORD IS INVISIBLE TO THE CHECK, in every language.
// Norwegian found `som` excused this way and never taught in its 480 cards.
// German's candidates are the same shape: der/derselbe, ein/einmal, im/immer,
// an/andere, so/sobald, ob/obwohl, um/umsteigen.
//
// This check applies NO inflection excuse. It knows only:
//   - taught fronts, and the words inside a multi-word front
//   - regular German verb morphology derived from a taught infinitive
//   - the strong-verb table (shared with check-drills-de.mjs)
//   - regular noun plurals
//   - the // FREE: declarations
// Everything else is reported. It will over-report; that is the point. Read it.
//
//   node scripts/scope-strict-de.mjs            whole corpus
//   node scripts/scope-strict-de.mjs 21 30      one block
//   node scripts/scope-strict-de.mjs --short    only tokens of 3 chars or fewer,
//                                               i.e. exactly lint's blind spot
//   node scripts/scope-strict-de.mjs --selftest prove the check can fail
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const argv = process.argv.slice(2);
const shortOnly = argv.includes("--short");
const selftest = argv.includes("--selftest");
const nums = argv.filter((a) => /^\d+$/.test(a)).map(Number);

const fold = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/ß/g, "ss");

const IRREG = {
  sein: ["bin", "bist", "ist", "sind", "seid", "war", "waren", "gewesen"],
  haben: ["habe", "hast", "hat", "hatte", "gehabt"],
  wissen: ["weiß", "weißt", "weiss", "weisst"],
  werden: ["werde", "wirst", "wird"],
  sehen: ["sehe", "siehst", "sieht"], geben: ["gebe", "gibst", "gibt"],
  nehmen: ["nehme", "nimmst", "nimmt", "nimm"], essen: ["esse", "isst"],
  lesen: ["lese", "liest"], sprechen: ["spreche", "sprichst", "spricht"],
  fahren: ["fahre", "fährst", "fährt"], laufen: ["laufe", "läufst", "läuft"],
  schlafen: ["schlafe", "schläfst", "schläft"], tragen: ["trage", "trägst", "trägt"],
  helfen: ["helfe", "hilfst", "hilft"], gefallen: ["gefalle", "gefällst", "gefällt"],
  können: ["kann", "kannst", "könnt"], müssen: ["muss", "musst", "müsst"],
  wollen: ["will", "willst", "wollt"], dürfen: ["darf", "darfst", "dürft"],
  sollen: ["soll", "sollst", "sollt"], möchten: ["möchte", "möchtest", "möchtet"],
};

const IRREG_F = Object.fromEntries(Object.entries(IRREG).map(([k, v]) => [fold(k), v]));

const LAST = readdirSync(join(root, "src/data/de"))
  .map((f) => Number((f.match(/^unit(\d+)\.js$/) ?? [])[1]))
  .filter(Number.isFinite).reduce((a, b) => Math.max(a, b), 0);

const FREE = new Set();
const born = new Map();
const remember = (w, u) => { const p = born.get(w); if (p === undefined || u < p) born.set(w, u); };
const units = [];
for (let u = 1; u <= LAST; u++) {
  let src = "";
  try { src = readFileSync(join(root, `src/data/de/unit${u}.js`), "utf8"); } catch { continue; }
  const m = src.match(/^\/\/\s*FREE:\s*(.+)$/m);
  if (m) m[1].split(/[|,]/).map((s) => s.trim()).filter(Boolean).forEach((w) => FREE.add(fold(w)));
  const mod = await import(`file:///${join(root, `src/data/de/unit${u}.js`).replace(/\\/g, "/")}`);
  const unit = Object.values(mod)[0];
  if (!unit?.lessons?.some((l) => l.items)) continue;
  units.push(unit);
  for (const l of unit.lessons) for (const it of l.items ?? []) {
    const f = fold(it.front);
    f.split(/\s+/).forEach((w) => remember(w, unit.order));
    const bare = f.replace(/^(der|die|das)\s+/, "");
    remember(bare, unit.order);
    // -ern and -eln verbs (dauern, aendern, sammeln) end in -n, NOT -en, so a
    // naive /en$/ misses the whole class and their every form reads as untaught.
    if (/[el]rn$|eln$/.test(bare)) {
      const st = bare.replace(/n$/, "");
      ["", "e", "st", "t", "n"].forEach((x) => remember(st + x, unit.order));
    } else if (/en$/.test(bare)) {
      const st = bare.replace(/en$/, "");
      ["e", "st", "t", "en", "et", "", "est"].forEach((s) => remember(st + s, unit.order));
    }
    ["e", "en", "er", "n", "s"].forEach((s) => remember(bare + s, unit.order));
    // IRREG is keyed as authored (können) but looked up with the FOLDED front
    // (konnen), so fold the keys too or every umlauted modal silently misses.
    (IRREG_F[bare] ?? []).forEach((x) => remember(fold(x), unit.order));
  }
}

const check = (text, order) =>
  fold(text).replace(/[.,!?;:„“"»«—–…-]/g, " ").split(/\s+/).filter(Boolean)
    .filter((w) => !FREE.has(w) && !(born.get(w) !== undefined && born.get(w) <= order));

// --- selftest: a rule you cannot see fail is a rule you cannot trust -----------
if (selftest) {
  let ok = true;
  const must = (label, cond) => { console.log(`  ${cond ? "PASS" : "FAIL"}  ${label}`); if (!cond) ok = false; };
  must("a word taught nowhere is reported", check("Das Krokodil ist hier", 30).includes("krokodil"));
  must("a taught front is not reported", check("Die Familie ist hier", 30).length === 0);
  must("a taught word is NOT excused before its unit", check("Die Familie ist hier", 2).includes("familie"));
  must("a strong-verb form of a taught infinitive is excused", !check("Er weiß es", 30).includes("weiss"));
  must("a short function word is NOT excused by prefixing a longer taught word",
       check("Ich bin som hier", 30).includes("som"));
  console.log(ok ? "\nselftest: the check can fail" : "\nselftest: BROKEN — do not trust its output");
  process.exit(ok ? 0 : 1);
}

const from = nums[0] ?? 1, to = nums[1] ?? LAST;
const hits = new Map();
for (const unit of units) {
  if (unit.order < from || unit.order > to) continue;
  for (const l of unit.lessons) for (const it of l.items ?? []) {
    for (const [kind, src] of [["example", it.example], ["drill", it.drill]]) {
      if (!src?.jp) continue;
      for (const w of check(src.jp, unit.order)) {
        if (shortOnly && w.length > 3) continue;
        if (!hits.has(w)) hits.set(w, []);
        hits.get(w).push(`${it.id} ${kind}`);
      }
    }
  }
}
const rows = [...hits.entries()].sort((a, b) => b[1].length - a[1].length);
console.log(`de u${from}-u${to}: ${rows.length} distinct out-of-scope token(s)${shortOnly ? " (3 chars or fewer)" : ""}`);
for (const [w, where] of rows) console.log(`  ${w.padEnd(16)} ${where.length}x   ${where.slice(0, 3).join(", ")}${where.length > 3 ? " …" : ""}`);
