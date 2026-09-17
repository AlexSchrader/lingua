// FREQUENCY-GAP probe for German — which of the commonest words in the language
// does the course teach NOWHERE?
//
// WHY THIS EXISTS, and why it measures against an EXTERNAL list.
// Every scope check we own asks the same question: "is this word, in this
// sentence, taught by now?" That question is answered inside the corpus, so it
// can only ever find words that were WRITTEN. It is structurally blind to a word
// that is neither taught NOR written — and that is the defect it missed.
//
// Measured on main, 2026-09-17, across all 2,422 German example+drill sentences:
//     sehr    413x        nur       0x
//                         so        0x
//                         alle      0x
//                         jeder     0x
//                         wirklich  0x
//                         Leute     0x
// Authors compose inside the scope checker's whitelist, so "used before taught"
// is 0 BY CONSTRUCTION and measures nothing about coverage. The German corpus was
// composed around a hole: `werden` — the auxiliary the whole B1 passive unit is
// built on — had no card anywhere, and no check we own said a word about it.
//
// So the probe has to come from OUTSIDE the corpus. A word list we choose
// ourselves is an illustration; a published external list is evidence.
//
// THE LIST. scripts/data/de-freq-subtitles-2009.tsv, extracted verbatim from
//   https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists/German_subtitles_1000
//   https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists/German_subtitles_1001-2000
// (CC BY-SA; 25M words of film/TV subtitles, 2009; compiled by Matthias
// Buchmeier). Columns: rank, surface form, occurrences-per-million, lemma(s).
// It is a SURFACE-FORM list, so "Ich"(1) and "ich"(3) are separate rows; this
// script folds and de-duplicates, keeping the best rank, which is what makes
// "top 300" mean 300 distinct words. Re-extract with `--refetch`.
//
// ⚠️ KNOWN BIAS, and do not let it be discovered later as a surprise: subtitles
// over-represent conversational interjections (Oh, Hey, Na, Ach), forms of
// address (Sir, Mr, Herr), and swearing. Those are real German, but they are not
// A1/A2 curriculum. `--teachable` subtracts the declared STOPLIST below so the
// authoring target is honest; the HEADLINE number stays the raw one, because a
// number you can tune by editing a stoplist is not evidence.
//
// ⚠️ KNOWN BLIND SPOT — THIS PROBE IS FORM-BASED, SO IT CANNOT SEE A SENSE GAP.
// Coverage is decided by the SPELLING of a taught front, never by its meaning, so
// a word taught in ONE sense marks all its homographs covered. `ihr` is taught at
// u3l3 as "you (plural)", which silently vouched for the possessive ihr/ihre
// ("her/their") — a word that was untaught across all 87 units and commoner than
// half the batch this script was written to find. It took a human reading the
// cards to notice. The same shape hides any second sense of `da`, `sein`, `alle`
// and `um`. So: A GREEN NUMBER HERE IS NOT A COMPLETE CURRICULUM. It proves no
// common FORM is absent; it proves nothing about whether each form's commonest
// SENSE is taught. Read the cards too.
//
// WHAT COUNTS AS COVERED. The scope oracle in de-vocab-scope.mjs — the same
// derive() that scope-strict-de.mjs and check-drills-de.mjs use. A form counts as
// covered if a taught front produces it by a stated rule, so `kommt` is covered by
// teaching `kommen`, and `wird` is covered only by teaching `werden` (it is in
// that file's IRREG table). Words declared `// FREE:` (cognates, proper nouns)
// are counted as NOT covered — they have no card — but are listed separately, so
// the two kinds of absence never get confused.
//
//   node scripts/gaps-de.mjs                 summary at 100/300/600/1000
//   node scripts/gaps-de.mjs 300             list every gap in the top 300
//   node scripts/gaps-de.mjs 300 --teachable list them minus the STOPLIST
//   node scripts/gaps-de.mjs --refetch       re-download the list from Wiktionary
//   node scripts/gaps-de.mjs --selftest      prove the probe can fail
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { buildScope, fold } from "./de-vocab-scope.mjs";

const root = process.cwd();
const DATA = join(root, "scripts/data/de-freq-subtitles-2009.tsv");
const SRC = [
  "https://en.wiktionary.org/w/index.php?title=Wiktionary:Frequency_lists/German_subtitles_1000&action=raw",
  "https://en.wiktionary.org/w/index.php?title=Wiktionary:Frequency_lists/German_subtitles_1001-2000&action=raw",
];

// Subtitle-corpus artefacts: real German, but not A1/A2 vocabulary. Declared here
// rather than silently dropped, so anyone can disagree with a specific entry.
// Interjections and discourse noise, forms of address, proper nouns, profanity,
// and the subtitle spellings of reduced speech ('ne, 'n).
const STOPLIST = new Set([
  // interjections / discourse particles of speech
  "oh", "hey", "na", "ach", "ah", "eh", "hm", "hmm", "huh", "oh-oh", "ha", "he",
  "okay", "ok", "o", "uh", "ooh", "wow", "au", "aua", "hallo",
  // address, titles, names
  "mr", "mrs", "sir", "ms", "miss", "dr", "madam", "monsieur", "captain",
  "john", "jack", "tom", "sam", "george", "charlie", "harry", "frank", "joe",
  // profanity / crude register
  "scheisse", "scheiss", "verdammt", "arsch", "hure", "mist", "verdammte",
  "verdammten", "verdammter", "fick", "ficken", "bastard", "idiot",
  // subtitle spellings of reduced speech
  "ne", "n", "nen", "nem", "ner", "s", "ma", "mal-",
  // English left in the subtitles
  "baby", "boss", "cool", "yeah", "yes", "no", "please", "come", "on", "god",
]);

// ---------------------------------------------------------------------------
async function refetch() {
  const rows = [];
  for (const url of SRC) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
    const lines = (await res.text()).split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
      const m = lines[i].match(/^\|(\d+)\.\s*$/);
      if (!m) continue;
      const word = (lines[i + 1] ?? "").replace(/^\|/, "").trim();
      const ppm = (lines[i + 2] ?? "").replace(/^\|/, "").trim();
      const lemmas = [...((lines[i + 4] ?? "").replace(/^\|/, "").trim())
        .matchAll(/\[\[([^#\]|]+)/g)].map((x) => x[1].trim());
      if (!word || !/^[\p{L}'’-]+$/u.test(word)) continue;
      rows.push([Number(m[1]), word, ppm, lemmas.join(";")]);
    }
  }
  rows.sort((a, b) => a[0] - b[0]);
  if (rows.length < 1900) throw new Error(`only ${rows.length} rows parsed — the wiki table shape changed`);
  mkdirSync(join(root, "scripts/data"), { recursive: true });
  writeFileSync(DATA, rows.map((r) => r.join("\t")).join("\n") + "\n");
  console.log(`refetched ${rows.length} rows -> ${DATA}`);
}

function loadList() {
  const best = new Map(); // folded form -> best-ranked row
  // ⚠️ SPLIT ON /\r?\n/ AND TRIM EVERY FIELD, and do not "simplify" this back.
  // The .tsv is committed with LF and git checks it out with CRLF on Windows, so
  // a naive split("\n") leaves a trailing \r on the LAST column — the lemma. That
  // does not crash and it does not warn: `fold("sagen\r")` simply never matches a
  // taught front, so lemma-coverage silently switches OFF and every participle of
  // a taught verb is reported as a word taught nowhere. It cost a wrong headline
  // number, and the reason it survived is that the author's working copy was the
  // LF file they had written by hand, while every FRESH CHECKOUT — CI, any other
  // seat, a detached worktree — got CRLF and a different answer from the same
  // commit. The selftest below now pins this.
  for (const line of readFileSync(DATA, "utf8").split(/\r?\n/)) {
    if (!line.trim()) continue;
    const [rank, word, ppm, lemma] = line.split("\t").map((s) => (s ?? "").trim());
    const k = fold(word);
    if (!best.has(k)) best.set(k, { rank: Number(rank), word, key: k, ppm: Number(ppm), lemma });
  }
  return [...best.values()].sort((a, b) => a.rank - b.rank);
}

// ---------------------------------------------------------------------------
const argv = process.argv.slice(2);
if (argv.includes("--refetch")) { await refetch(); if (argv.length === 1) process.exit(0); }

const teachableOnly = argv.includes("--teachable");
const nums = argv.filter((a) => /^\d+$/.test(a)).map(Number);
const { born, FREE } = await buildScope(root);
const list = loadList();

// THREE outcomes, not two, and collapsing them would overstate the defect.
//   covered       — a taught front derives this form by a stated rule (kommt<-kommen)
//   lemma-covered — derive() cannot build it, but the LIST'S OWN lemma column says
//                   it is a form of a word the course teaches. `gesagt` is the
//                   Perfekt participle of `sagen` (taught u9); derive() only makes
//                   present-tense forms, so it reports a word the learner has met.
//                   That is a gap in our morphology, NOT a gap in the curriculum,
//                   and counting it as missing vocabulary would be a false alarm.
//   gap           — neither. The word is taught NOWHERE. This is the headline.
const covered = (r) => born.get(r.key) !== undefined;
const lemmaCovered = (r) => !covered(r) && String(r.lemma || "").split(";")
  .some((l) => l && born.get(fold(l)) !== undefined);
const isGap = (r) => !covered(r) && !lemmaCovered(r);
const gapsIn = (n) => list.slice(0, n).filter(isGap)
  .filter((r) => !(teachableOnly && (STOPLIST.has(r.key) || FREE.has(r.key))));

if (argv.includes("--selftest")) {
  let ok = true;
  const must = (label, cond) => { console.log(`  ${cond ? "PASS" : "FAIL"}  ${label}`); if (!cond) ok = false; };
  must("the list parsed to ~1600 distinct folded forms", list.length > 1500 && list.length < 1800);
  must("rank 1 is a pronoun, not a table artefact", /^ich$/i.test(list[0].word));
  must("a word the course certainly teaches is covered", born.get(fold("Familie")) !== undefined);
  must("a word the course certainly does not teach is a gap",
       born.get(fold("Krokodil")) === undefined);
  must("an inflection of a taught infinitive counts as covered (kommt <- kommen)",
       born.get(fold("kommt")) !== undefined);
  // THE REGRESSION THAT MOTIVATED THIS BLOCK. `gesagt` is the Perfekt participle
  // of `sagen`, taught at u16l2; derive() only builds present-tense forms, so the
  // ONLY thing that stops it being reported as "taught nowhere" is the lemma
  // column. If the .tsv is parsed with a stray \r on the last field, this flips —
  // silently, with no crash and no warning, and the headline number moves by 10.
  const gesagt = list.find((r) => r.word === "gesagt");
  must("the lemma column survives parsing (no stray \\r on the last field)",
       !!gesagt && gesagt.lemma === "sagen");
  must("a participle of a taught verb is lemma-covered, not a gap (gesagt <- sagen)",
       !!gesagt && lemmaCovered(gesagt));
  must("the stoplist narrows, never widens", gapsIn(300).length >= 0 &&
       list.slice(0, 300).filter((r) => !covered(r)).length >=
       list.slice(0, 300).filter((r) => !covered(r) && !STOPLIST.has(r.key) && !FREE.has(r.key)).length);
  console.log(ok ? "\nselftest: the probe can fail" : "\nselftest: BROKEN — do not trust its output");
  process.exit(ok ? 0 : 1);
}

if (nums.length) {
  const n = nums[0];
  const gaps = gapsIn(n);
  console.log(`de: ${gaps.length} of the top ${n} commonest German words are taught NOWHERE` +
              `${teachableOnly ? " (minus stoplist + FREE cognates)" : ""}\n`);
  for (const r of gaps) {
    const tag = FREE.has(r.key) ? " [FREE cognate — used, but no card]"
      : STOPLIST.has(r.key) ? " [stoplist]" : "";
    console.log(`  #${String(r.rank).padStart(4)}  ${r.word.padEnd(14)} ${String(r.ppm).padStart(5)}ppm  lemma=${r.lemma || "-"}${tag}`);
  }
} else {
  console.log("de — commonest German words taught nowhere in the course");
  console.log("     (external list: Wiktionary German subtitles 2009, folded + deduped)\n");
  console.log("      band      TAUGHT NOWHERE    minus stoplist/FREE    (form of a taught word)");
  for (const n of [100, 300, 600, 1000]) {
    const raw = list.slice(0, n).filter(isGap);
    const net = raw.filter((r) => !STOPLIST.has(r.key) && !FREE.has(r.key));
    const lem = list.slice(0, n).filter(lemmaCovered);
    console.log(`      top ${String(n).padEnd(5)} ${String(raw.length).padStart(10)}      ${String(net.length).padStart(14)}    ${String(lem.length).padStart(8)}`);
  }
}
