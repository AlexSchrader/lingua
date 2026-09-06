// Screen candidate A2 fronts, EXACT and LEXEME, against (a) the frozen taught base
// in this tree and (b) EACH OTHER. Front-uniqueness passes on the exact string, so
// "en jobb" and "å jobbe" both validate while being one word — that is the collision
// this catches and validate:content does not.
//   node screen.mjs "en kake" "å bake"
//   node screen.mjs --file cand.txt
//   node screen.mjs --selftest        <- proves the rules can actually fail
import { readFileSync } from "node:fs";
import { NO_UNITS } from "./src/data/no/index.js";

const taught = new Map();
for (const u of NO_UNITS) for (const l of u.lessons) for (const it of l.items ?? []) taught.set(it.front, u.order);

const head = (f) => f.replace(/^(en |ei |et |å )/, "").toLowerCase();
// A single canonical stem is order-sensitive and wrong: "trene" loses "ene" and
// becomes "tr" while "trener" loses "er" and becomes "tren", so the pair escapes.
// Return the SET of plausible stems instead; two words collide if the sets meet.
const SUF = ["ene", "ete", "er", "en", "et", "te", "e", "a", "r", "ne", "ere"];
const stems = (w) => {
  const out = new Set([w]);
  for (const s of SUF) if (w.endsWith(s) && w.length - s.length >= 3) out.add(w.slice(0, -s.length));
  return out;
};
const stem = (w) => [...stems(w)].sort((a, b) => a.length - b.length)[0];

const byHead = new Map(), byStem = new Map();
for (const [f, u] of taught) {
  const h = head(f);
  if (!byHead.has(h)) byHead.set(h, []);
  byHead.get(h).push(`${f} (u${u})`);
  for (const s of stems(h)) {
    if (s.length < 3) continue;
    if (!byStem.has(s)) byStem.set(s, []);
    byStem.get(s).push(`${f} (u${u})`);
  }
}

function run(args, label) {
  let clash = 0;
  const seen = new Set();
  for (const cand of args) {
    const notes = [];
    if (taught.has(cand)) notes.push(`EXACT front already taught (u${taught.get(cand)})`);
    const h = head(cand);
    if (byHead.has(h) && !taught.has(cand)) notes.push(`same headword as ${byHead.get(h).join(", ")}`);
    for (const s of stems(h)) {
      if (s.length < 3 || !byStem.has(s)) continue;
      const hits = [...new Set(byStem.get(s).filter((x) => head(x.split(" (")[0]) !== h))];
      if (hits.length) { notes.push(`same stem "${s}" as ${hits.join(", ")}`); break; }
    }
    if (seen.has(cand)) notes.push("DUPLICATE in this list");
    seen.add(cand);
    if (notes.length) { clash++; console.log(`  x ${cand.padEnd(18)} ${notes.join(" | ")}`); }
  }

  // candidates against EACH OTHER — the derived pairs the taught base cannot see
  const cs = new Map();
  for (const c of args) for (const st of stems(head(c))) {
    if (st.length < 3) continue;
    if (!cs.has(st)) cs.set(st, []);
    if (!cs.get(st).includes(c)) cs.get(st).push(c);
  }
  let internal = 0;
  for (const [st, list] of [...cs].sort()) {
    if (new Set(list.map(head)).size > 1) { console.log(`  ~ INTERNAL stem "${st}": ${list.join(" / ")}`); internal++; }
  }
  console.log(`${label}: ${args.length} candidates | ${clash} clash vs taught | ${internal} internal stem group(s)`);
  return { clash, internal };
}

if (process.argv[2] === "--selftest") {
  // Rules must be ABLE to fail. Each case below is known-bad and must be reported.
  console.log("-- selftest: every line below MUST report --");
  const a = run(["et mål", "å måle"], "derived pair");
  const b = run(["en trener", "å trene"], "derived pair");
  const c = run(["ei vekt", "å veie"], "derived pair (different stems - EXPECTED MISS)");
  const d = run([...taught.keys()].slice(0, 1), "a word already taught");
  const ok = a.internal >= 1 && b.internal >= 1 && d.clash === 1;
  console.log(ok ? "\nSELFTEST PASS - the rules can fail" : "\nSELFTEST FAIL - a rule is inert");
  console.log(`note: vekt/veie caught? ${c.internal === 1 ? "yes" : "NO - stemmer limit, screen -de/-else nouns by hand"}`);
  process.exit(ok ? 0 : 1);
}

let args = process.argv.slice(2);
if (args[0] === "--file") args = readFileSync(args[1], "utf8").split(/\r?\n/).map((s) => s.trim()).filter(Boolean).filter((s) => !s.startsWith("#"));
run(args, "TOTAL");
