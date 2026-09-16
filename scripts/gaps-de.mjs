// WHAT GERMAN DOES NOT TEACH — the coverage-pass finding, made reproducible.
//
// The brief for de block 3 asked for "words the corpus USES in examples but never
// TEACHES" (the class of bug that put `duas` in 38 Portuguese examples with no
// card). MEASURED, GERMAN HAS ZERO OF THOSE: scripts/scope-strict-de.mjs over
// u1-u87 reports 0 out-of-scope tokens, and it applies no inflection excuse.
// German's corpus is clean in that direction.
//
// The real gap is the OTHER direction, and it is invisible to every existing
// check because a word that is never taught AND never used produces no warning
// anywhere: core words that simply are not in the course at all. This script
// names them.
//
// METHOD, and its limits, stated so the number is not mistaken for a guarantee:
//   - The candidate list below is ENUMERATED IN THIS FILE, not in someone's head.
//     It is exhaustive over what is listed and blind to what is not — extend it
//     here, or pass extra words on the command line.
//   - A word counts as TAUGHT if buildScope() licenses it at the last unit, which
//     means: a front, a word inside a multi-word front, a regular or strong-verb
//     form of a taught infinitive, a regular plural, or a `// FREE:` declaration.
//     So "die Arbeit" counts as taught via arbeiten, correctly.
//
//   node scripts/gaps-de.mjs
//   node scripts/gaps-de.mjs wichtig klar        (probe extra words)
import { buildScope } from "./de-vocab-scope.mjs";

// Core German a B1 learner needs, grouped by why it matters. Nouns carry their
// article so the probe tests the same string a card would.
const CANDIDATES = {
  "function words and discourse": ["so", "nur", "sein", "beim", "wieder", "alle", "jeder", "gleich", "wirklich", "vorbei", "weg", "zuerst", "sonst", "eigen", "andere", "etwa", "kaum", "erst", "zwar"],
  "very common adjectives": ["wichtig", "klar", "möglich", "nötig", "fertig", "schwierig", "langsam", "leise", "plötzlich", "bereit", "einzeln", "häufig", "gemeinsam", "deutlich"],
  "very common verbs": ["bekommen", "öffnen", "schließen", "bringen", "stehen", "setzen", "halten", "melden", "bedeuten", "gehören", "passieren", "versuchen", "benutzen", "vergessen", "erinnern"],
  "very common nouns": ["der Brief", "das Papier", "die Person", "der Mensch", "der Fehler", "die Leute", "das Ding", "die Sache", "der Teil", "die Seite", "das Beispiel", "die Art", "der Fall", "das Stück", "die Möglichkeit"],
};

const { outOfScope, lastUnit } = await buildScope(process.cwd());
const extra = process.argv.slice(2);
if (extra.length) CANDIDATES["command line"] = extra;

// A probe sentence, because outOfScope takes text. Every frame word is itself
// taught, so anything reported is the candidate and not the frame.
const untaught = (w) => outOfScope(`Das ist ${w} hier`, lastUnit).filter((t) => t !== "das" && t !== "ist" && t !== "hier");

let missing = 0, total = 0;
for (const [group, words] of Object.entries(CANDIDATES)) {
  const gone = [];
  for (const w of words) { total++; if (untaught(w).length) { gone.push(w); missing++; } }
  console.log(`\n${group} — ${gone.length}/${words.length} NOT TAUGHT anywhere in de`);
  if (gone.length) console.log("  " + gone.join(" · "));
}
console.log(`\n${missing} of ${total} probed core words are taught nowhere in the ${lastUnit}-unit German corpus.`);
