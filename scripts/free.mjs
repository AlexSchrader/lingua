// "Is this front free?" — run BEFORE authoring, not after. Checks a candidate
// against every taught front AND its lexeme relatives, because front-uniqueness
// passes on the exact string: `en jobb` and `å jobbe` both validate while being
// one word with two mastery tracks. RUNBOOK §4, and the ja B1 seat shipped 36
// of these past a fully green validator.
//   node scripts/free.mjs "ei bok" "å reise" "en ferie"
const m = await import("file:///" + process.cwd().split("\\").join("/") + "/src/data/no/index.js");
const U = (m.NO_UNITS ?? Object.values(m).find(Array.isArray)).filter((u) => u.lessons.some((l) => l.items));
const taught = U.flatMap((u) => u.lessons.flatMap((l) => (l.items || []).map((i) => ({ front: i.front, u: u.order, meaning: i.meaning }))));
const strip = (f) => f.replace(/^(en |ei |et |å )/, "").toLowerCase();
const stems = new Map();
for (const t of taught) {
  const b = strip(t.front);
  (stems.get(b) ?? stems.set(b, []).get(b)).push(t);
  // derivational relatives: noun<->verb (en jobb / å jobbe), -er agent (å lære / en lærer)
  for (const v of [b.replace(/e$/, ""), b + "e", b + "er", b.replace(/e$/, "er"), b.replace(/er$/, "e")])
    if (v && v !== b) (stems.get(v) ?? stems.set(v, []).get(v)).push(t);
}
let bad = 0;
for (const cand of process.argv.slice(2)) {
  const b = strip(cand);
  const exact = taught.filter((t) => t.front.toLowerCase() === cand.toLowerCase());
  const lex = (stems.get(b) ?? []).filter((t) => t.front.toLowerCase() !== cand.toLowerCase());
  if (exact.length) { bad++; console.log(`  TAKEN     ${cand.padEnd(18)} exact front, u${exact[0].u} ("${exact[0].meaning}")`); }
  else if (lex.length) { bad++; console.log(`  LEXEME    ${cand.padEnd(18)} relative of "${lex[0].front}" u${lex[0].u} ("${lex[0].meaning}")`); }
  else console.log(`  free      ${cand}`);
}
console.log(`\n${process.argv.length - 2} checked · ${bad} unusable`);
