// German vocabulary scope, in ONE place.
//
// WHY THIS FILE EXISTS. check-drills-de.mjs and scope-strict-de.mjs each grew
// their own copy of "which words has the learner met by unit N", and the copies
// drifted twice, both times silently and both times in the direction of FALSE
// FAILURES on correct content:
//
//   1. IRREG was keyed by the infinitive as authored (können) and looked up with
//      the folded front (konnen), so kann/darf/muss/will — the finite forms of the
//      six commonest verbs in the language — read as untaught. Fixed in
//      scope-strict first; check-drills kept the bug for another eleven units.
//   2. Regular forms were derived with /en$/ alone, which misses the -ern and -eln
//      class entirely: dauern, ändern, sammeln end in -n, not -en. So "dauert",
//      from a verb taught at u18, read as untaught. Again fixed in scope-strict
//      first, again not carried across.
//
// Both were found by a unit failing a check it should have passed, not by anyone
// reading the code. Two scripts answering the same question from two copies of the
// rules will keep diverging, and each divergence costs an author a false alarm and
// a wasted hour. So the rules live here and both scripts import them. Extending
// German morphology now means editing one function.
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

export const fold = (s) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split("ß").join("ss");

// Strong/irregular present forms, keyed by the infinitive AS AUTHORED. Extend this
// when you teach a strong verb whose stem changes — that is normal maintenance,
// not a workaround. The keys are folded at build time; never look up an unfolded key.
export const IRREG = {
  sein: ["bin", "bist", "ist", "sind", "seid"],
  haben: ["habe", "hast", "hat"],
  wissen: ["weiß", "weißt", "weiss", "weisst"],
  werden: ["werde", "wirst", "wird"],
  sehen: ["sehe", "siehst", "sieht"],
  geben: ["gebe", "gibst", "gibt"],
  nehmen: ["nehme", "nimmst", "nimmt", "nimm"],
  essen: ["esse", "isst"],
  lesen: ["lese", "liest"],
  sprechen: ["spreche", "sprichst", "spricht"],
  fahren: ["fahre", "fährst", "fährt"],
  laufen: ["laufe", "läufst", "läuft"],
  schlafen: ["schlafe", "schläfst", "schläft"],
  tragen: ["trage", "trägst", "trägt"],
  helfen: ["helfe", "hilfst", "hilft"],
  schmelzen: ["schmelze", "schmilzt"],
  gefallen: ["gefalle", "gefällst", "gefällt"],
  können: ["kann", "kannst", "können", "könnt"],
  müssen: ["muss", "musst", "müssen", "müsst"],
  wollen: ["will", "willst", "wollen", "wollt"],
  dürfen: ["darf", "darfst", "dürfen", "dürft"],
  sollen: ["soll", "sollst", "sollen", "sollt"],
  möchten: ["möchte", "möchtest", "möchten", "möchtet"],
};

const IRREG_F = Object.fromEntries(Object.entries(IRREG).map(([k, v]) => [fold(k), v]));

// German separable prefixes. A separable verb SPLITS in a main clause — "ich hole
// dich ab" — so the surface forms are a bare-stem verb plus a stranded prefix, and
// NEITHER is derivable from the infinitive front "abholen". Every separable verb in
// the corpus therefore reported its own example as out of scope. This is a resolver
// gap, not a content defect, and it is a class Norwegian does not have.
const SEP = ["ab", "an", "auf", "aus", "ein", "mit", "nach", "vor", "zu", "um",
             "zurueck", "weg", "los", "hin", "her", "wieder", "fest", "statt"];

// Everything a token might legitimately be, given a taught front.
const derive = (bare, remember, order) => {
  // A reflexive front is stored as "sich waschen"; the learner only ever writes
  // the conjugated stem (wasche, wäschst). Without stripping sich- the /en$/ rule
  // derived "sich wasche" — a string with a space in it that no token can match —
  // so every reflexive verb reported its own example as out of scope.
  if (bare.startsWith("sich ")) {
    remember("sich", order);
    derive(bare.slice(5), remember, order);
    return;
  }
  remember(bare, order);
  // Separable: register the stranded prefix AND derive the base verb under it.
  for (const p of SEP) {
    if (bare.length > p.length + 2 && bare.startsWith(p) && /en$|rn$|ln$/.test(bare)) {
      remember(p, order);
      derive(bare.slice(p.length), remember, order);
      break;
    }
  }
  // -ern and -eln verbs (dauern, ändern, sammeln) end in -n, NOT -en, so a naive
  // /en$/ misses the whole class and every form of them reads as untaught.
  if (/[el]rn$|eln$/.test(bare)) {
    const st = bare.replace(/n$/, "");
    ["", "e", "st", "t", "n"].forEach((s) => remember(st + s, order));
  } else if (/en$/.test(bare)) {
    const st = bare.replace(/en$/, "");
    ["", "e", "st", "t", "en", "et", "est"].forEach((s) => remember(st + s, order));
  }
  // -es and -em are adjective endings (ein gutes Buch, mit grossem Fenster); without
  // them every attributive adjective in an example read as untaught.
  ["e", "en", "er", "es", "em", "n", "s"].forEach((s) => remember(bare + s, order));
  (IRREG_F[bare] ?? []).forEach((x) => remember(fold(x), order));
};

// Reads every de/unitN.js on disk and returns the scope oracle.
//   born:       folded token -> earliest unit that licenses it
//   FREE:       folded tokens declared free by a `// FREE:` header line
//   lastUnit:   highest unit file present — DERIVED, never hardcoded. This was
//               `u <= 20` while German was A1-only; the day A2 was scaffolded every
//               A2 front read as untaught and each card failed against its own front.
//   outOfScope: (text, order) -> tokens not licensed at or before `order`
export async function buildScope(root = process.cwd()) {
  const dir = join(root, "src/data/de");
  const url = (u) => `file:///${join(dir, `unit${u}.js`).split("\\").join("/")}`;

  const lastUnit = readdirSync(dir)
    .map((f) => Number((f.match(/^unit(\d+)\.js$/) ?? [])[1]))
    .filter(Number.isFinite)
    .reduce((a, b) => Math.max(a, b), 0);

  const FREE = new Set();
  const born = new Map();
  const remember = (w, u) => { const p = born.get(w); if (p === undefined || u < p) born.set(w, u); };
  const units = [];

  for (let u = 1; u <= lastUnit; u++) {
    let src = "";
    try { src = readFileSync(join(dir, `unit${u}.js`), "utf8"); } catch { continue; }
    const m = src.match(/^\/\/\s*FREE:\s*(.+)$/m);
    if (m) m[1].split(/[|,]/).map((s) => s.trim()).filter(Boolean).forEach((w) => FREE.add(fold(w)));
    const mod = await import(url(u));
    const unit = Object.values(mod)[0];
    if (!unit?.lessons?.some((l) => l.items)) continue;
    units.push(unit);
    for (const l of unit.lessons)
      for (const it of l.items ?? []) {
        const f = fold(it.front);
        f.split(/\s+/).forEach((w) => remember(w, unit.order)); // multi-word fronts
        derive(f.replace(/^(der|die|das)\s+/, ""), remember, unit.order);
      }
  }

  const outOfScope = (text, order) =>
    fold(String(text ?? "")).replace(/[.,!?;:„“"»«—–…-]/g, " ").split(/\s+/).filter(Boolean)
      .filter((w) => !FREE.has(w) && !(born.get(w) !== undefined && born.get(w) <= order));

  return { born, FREE, units, lastUnit, outOfScope };
}
