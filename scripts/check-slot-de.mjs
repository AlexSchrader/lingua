// Is the subordinating-conjunction slot free in German A1?
//
// Driven from the CANDIDATE SET, not from a list of expected answers. Both
// earlier passes (mine and seat C's) picked a handful of English words and asked
// which cards claimed them, so each could only ever see collisions on the words
// it thought to supply — seat C's missed `dass` because "that" was not on its
// list, mine missed `nachdem` because the word was not on mine.
//
// The right question is not "is this slot free" but "is it free GIVEN the gloss
// I propose", so every candidate here carries EVERY gloss a reviewer might
// reasonably write, and the report says which glosses are clear and which are
// taken.
//
// ⚠️ WHAT THIS STILL CANNOT SEE, stated so the count is not mistaken for a
// guarantee: it is exhaustive over the candidates and glosses ENUMERATED BELOW.
// A word nobody listed, or a gloss nobody thought to attach, is still invisible —
// the difference from the hand-driven passes is that it is now invisible for a
// stated and reviewable reason rather than an accidental one. So:
//   - the enumeration is in the source, not in someone's head; extend it here, or
//   - pass extras on the command line without editing:
//       node scripts/check-slot-de.mjs weil=because,since obwohl=although
//   - a CONTROL candidate is always run: `denn` is already taught, so if it does
//     not report as taken the probe itself is broken and every zero is worthless.
//     Never read a clean result from this script without checking the control line.
const CANDIDATES = {
  weil:    ["because", "since", "as"],
  dass:    ["that"],
  wenn:    ["when", "if", "whenever"],
  ob:      ["whether", "if"],
  als:     ["when", "as", "than"],
  obwohl:  ["although", "though", "even though"],
  damit:   ["so that", "in order that"],
  bevor:   ["before"],
  nachdem: ["after"],
  sobald:  ["as soon as"],
  falls:   ["in case", "if"],
  während: ["while", "during"],
  seitdem: ["since", "ever since"],
  solange: ["as long as"],
  bis:     ["until", "till"],
};

// extras from the command line: word=gloss,gloss
for (const arg of process.argv.slice(2)) {
  const [w, gl] = arg.split("=");
  if (!w || !gl) continue;
  CANDIDATES[w] = (CANDIDATES[w] ?? []).concat(gl.split(",").map((s) => s.trim()).filter(Boolean));
}
// control: a word the corpus definitely teaches. If this does not come back
// taken, the probe is broken and every other result here is meaningless.
const CONTROL = { denn: ["because"] };

const rows = [];
for (let u = 1; u <= 20; u++) {
  // resolve from the repo root, not from scripts/ — a relative specifier here
  // would resolve against this file's directory and silently fail.
  const m = await import(`file:///${process.cwd().replace(/\\/g, "/")}/src/data/de/unit${u}.js`);
  const unit = Object.values(m)[0];
  for (const l of unit.lessons) for (const it of l.items ?? []) rows.push({ u, front: it.front, reading: it.reading, mean: it.meaning ?? "" });
}
const fold = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/ß/g, "ss");
const FRONTS = new Set(rows.map((r) => fold(r.front)));
const READINGS = new Set(rows.map((r) => r.reading));
const STOP = new Set("the a an to of / or and be is".split(" "));
const keys = (m) => m.toLowerCase().split(/[\/,;]/)
  .map((s) => s.replace(/\(.*?\)/g, "").trim().replace(/^(the|a|an|to)\s+/, "").trim())
  .filter((s) => s.length > 1 && !STOP.has(s));
const byKey = new Map();
for (const r of rows) for (const k of keys(r.mean)) { if (!byKey.has(k)) byKey.set(k, []); byKey.get(k).push(r); }

console.log(`checked against ${rows.length} German A1 cards\n`);
const clean = [];
for (const [word, glosses] of Object.entries(CANDIDATES)) {
  const w = fold(word);
  const structural = [];
  if (FRONTS.has(w)) structural.push("FRONT already taught");
  if (READINGS.has(w)) structural.push("READING collides with " + rows.filter((r) => r.reading === w).map((r) => r.front).join("/"));
  const taken = [], free = [];
  for (const g of glosses) {
    const hit = byKey.get(g) ?? [];
    if (hit.length) taken.push(`"${g}" -> u${hit[0].u} ${hit[0].front} ("${hit[0].mean}")`);
    else free.push(`"${g}"`);
  }
  const verdict = structural.length ? "BLOCKED" : free.length ? "OPEN" : "GLOSS-CONSTRAINED";
  if (verdict === "OPEN" && !taken.length) clean.push(word);
  console.log(`${word.padEnd(9)} ${verdict}`);
  if (structural.length) console.log(`          ${structural.join("; ")}`);
  if (taken.length) console.log(`          taken:  ${taken.join("  |  ")}`);
  if (free.length) console.log(`          free:   ${free.join(", ")}`);
}
console.log(`\nclear on every gloss tested: ${clean.join(", ") || "none"}`);

// control line — read this before believing anything above
const ctrlHit = byKey.get("because") ?? [];
const ctrlOk = ctrlHit.some((r) => fold(r.front) === "denn");
console.log(`control: "denn"/"because" reports as ${ctrlOk ? "TAKEN — probe is live" : "FREE — PROBE IS BROKEN, ignore every result above"}`);
console.log(`enumeration: ${Object.keys(CANDIDATES).length} candidates, ${Object.values(CANDIDATES).flat().length} glosses. A word or gloss not listed is not checked.`);
if (!ctrlOk) process.exit(1);
