// Strict example-scope check for the A2 block-3 range (u41-u50).
// Does NOT use lint.js's isInflection heuristic, which exempts any token sharing
// 3 leading characters with a taught stem and differing by <=3 — that is what let
// `som` (vs `sommer`), `for` (vs `forstå`) and `der` through a clean lint run.
// Instead it generates real inflections from each taught front and demands an
// exact match, so an unknown word is reported rather than excused.
//   node scripts/scope-strict.mjs            check u41-u50 examples AND drills
//   node scripts/scope-strict.mjs --selftest prove it flags a word I know is untaught
import { NO_UNITS } from "../src/data/no/index.js";

const FREE = `Erling Kari Anna Jonas Oslo Bergen Norge Europa Bokmål kafé kaffe taxi pizza telefon
restaurant museum hotell bank park sjokolade problem person`.split(/\s+/).map((w) => w.toLowerCase());

const IRREG = {
  "å være": ["er", "var"], "å ha": ["har", "hadde"], "å gå": ["går", "gikk"], "å gjøre": ["gjør", "gjorde"],
  "å si": ["sier", "sa"], "å vite": ["vet", "visste"], "å spørre": ["spør", "spurte"], "å ta": ["tar", "tok"],
  "å stå": ["står", "stod"], "å bli": ["blir", "ble"], "å få": ["får", "fikk"], "å se": ["ser", "så"],
  "å komme": ["kommer", "kom"], "å gi": ["gir", "ga"], "å kunne": ["kan", "kunne"], "å ville": ["vil", "ville"],
  "å skulle": ["skal", "skulle"], "å måtte": ["må", "måtte"], "å burde": ["bør", "burde"],
  "ei bok": ["bøker", "bøkene"], "et tre": ["trær", "trærne"], "ei ku": ["kyr"], "en bonde": ["bønder"],
  "ei natt": ["netter"], "ei tann": ["tenner", "tennene"], "ei gulrot": ["gulrøtter"], "ei hånd": ["hender"],
  "en fot": ["føtter"], "et øye": ["øyne", "øynene"], "en mann": ["menn"], "en far": ["fedre"], "ei mor": ["mødre"],
};

function forms(front) {
  const out = new Set(); const add = (...xs) => xs.forEach((x) => x && out.add(x.toLowerCase()));
  (IRREG[front] || []).forEach((f) => add(f));
  const m = front.match(/^(en|ei|et|å) (.+)$/);
  if (!m) {
    front.split(" ").forEach((w) => add(w));
    add(front, front + "t", front + "e", front + "ere", front + "est");
    // an -en adjective syncopates before -e: sulten -> sultne, egen -> egne
    if (front.endsWith("en")) add(front.slice(0, -2) + "ne");
    // a bare MASS noun still takes a definite: melk -> melka/melken, vann -> vannet
    add(front + "a", front + "en", front + "et");
    // IRREGULAR adjective forms and comparatives are inflections of a taught word
    // exactly as a present tense is. Without these I flag `best` (god) and `mer`
    // (mye) as untaught and "correct" perfectly good content — which I did.
    const IRR_ADJ = { liten: ["lita", "lite", "små", "lille"], gammel: ["gammelt", "gamle"],
      egen: ["eget", "egne"], annen: ["annet", "andre"], vakker: ["vakkert", "vakre"],
      ny: ["nytt", "nye"], bra: ["bra"], blå: ["blått"], grå: ["grått"] };
    const IRR_CMP = { stor: ["større", "størst"], liten: ["mindre", "minst"],
      god: ["bedre", "best"], gammel: ["eldre", "eldst"], ung: ["yngre", "yngst"],
      lang: ["lengre", "lengst"], mange: ["flere", "flest"], mye: ["mer", "mest"],
      vond: ["verre", "verst"] };
    (IRR_ADJ[front] || []).forEach((f) => add(f));
    (IRR_CMP[front] || []).forEach((f) => add(f));
    // neuter -t collapses a final double consonant: grønn -> grønt, tynn -> tynt
    add(front.replace(/(nn|mm|ll|tt)$/, (mm) => mm[0] + "t"));
    return out;
  }
  const [, mark, w] = m; add(w);
  if (mark === "å") {
    const st = w.endsWith("e") ? w.slice(0, -1) : w;
    add(w + "r", st + "er", st + "te", st + "et", st + "de", st + "t", st);
  } else {
    const b = w.endsWith("e") ? w.slice(0, -1) : w;
    const dbl = /^[^aeiouyæøå]*[aeiouyæøå][bdfglmnprtkv]$/.test(w) ? w + w.slice(-1) : w;
    for (const st of [w, b, dbl]) add(st + "en", st + "a", st + "et", st + "er", st + "ene", st + "e", st + "ne");
  }
  return out;
}

const known = new Set(["en", "ei", "et", "å"]);
for (const f of FREE) { known.add(f); for (const suf of ["en", "et", "a", "er", "ene", "n"]) known.add(f + suf); }
const bornAt = new Map();
for (const u of [...NO_UNITS].sort((a, b) => a.order - b.order))
  for (const l of u.lessons) for (const it of l.items ?? [])
    for (const f of forms(it.front)) if (!bornAt.has(f)) bornAt.set(f, u.order);

const words = (s) => s.toLowerCase().replace(/[.,!?;:»«"]/g, " ").split(/\s+/).filter(Boolean);

function check(lo, hi) {
  const miss = new Map();
  for (const u of NO_UNITS) {
    if (u.order < lo || u.order > hi) continue;
    for (const l of u.lessons) for (const it of l.items ?? []) {
      for (const [kind, txt] of [["ex", it.example?.jp], ["drill", it.drill?.jp]]) {
        if (!txt) continue;
        for (const w of words(txt)) {
          if (known.has(w)) continue;
          const at = bornAt.get(w);
          if (at === undefined) { const k = `${w} (taught NOWHERE)`; if (!miss.has(k)) miss.set(k, []); miss.get(k).push(`${it.id}/${kind}`); }
          else if (at > u.order) { const k = `${w} (first taught u${at})`; if (!miss.has(k)) miss.set(k, []); miss.get(k).push(`${it.id}/${kind}`); }
        }
      }
    }
  }
  return miss;
}

if (process.argv[2] === "--selftest") {
  // A word I know is untaught must be reported. If this passes silently the tool is inert.
  const probe = "gråte";
  const seen = bornAt.has(probe) || known.has(probe);
  console.log(seen ? "SELFTEST FAIL — 'gråte' is somehow known; pick another probe" : "SELFTEST PASS — an untaught word is not silently known");
  console.log(`taught surface forms indexed: ${bornAt.size}`);
  process.exit(seen ? 1 : 0);
}

const miss = check(41, 50);
for (const [w, ids] of [...miss].sort()) console.log(`  ${w.padEnd(34)} ${ids.slice(0, 4).join(", ")}${ids.length > 4 ? ` +${ids.length - 4}` : ""}`);
console.log(`${miss.size} out-of-scope word(s) across u41-u50`);
