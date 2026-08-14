#!/usr/bin/env node
/**
 * Glyph scope for own-script languages: does every kanji a card shows actually get
 * taught at or before the unit that shows it?
 *
 * WHY THIS EXISTS AS A COMMITTED SCRIPT: `src/data/lint.js` gates its
 * example-vocabulary check on `isLatinLang()` and returns silently for Japanese,
 * because splitting a Japanese sentence into WORDS needs a morphological analyser.
 * That reasoning is right for words and wrong for glyphs — a kanji check needs no
 * tokeniser at all, it is a set difference over CJK codepoints. The B1 crew
 * re-derived this check four separate times as a throwaway and committed it zero
 * times, so every example-scope number in that band was measured by hand and none
 * of them is reproducible. This makes it a one-liner for the B2 crew.
 *
 *   npm run check:glyphs            # all own-script languages
 *   npm run check:glyphs -- ja      # one language
 *
 * Reports two distinct problems, because they have different fixes:
 *   FRONT  — a vocab front contains a kanji the learner has not met. This is the
 *            card itself being unreadable; always a defect, always fixable by
 *            choosing a different word.
 *   EXAMPLE — an example sentence uses one. Usually acceptable when the glyph sits
 *            inside the target's own standard compound (評判, 労働), which is why
 *            these are reported separately and do not set the exit code by default.
 *
 * Exit code: non-zero if any FRONT problem exists, or if --strict and any EXAMPLE
 * problem does. A check that cannot fail is not a check (see the audit script's
 * own history for how that goes).
 */
import { UNITS } from "../src/data/index.js";

const args = process.argv.slice(2);
const STRICT = args.includes("--strict");
const langFilter = args.find((a) => /^[a-z]{2}$/.test(a)) ?? null;

const isHan = (ch) => /\p{Script=Han}/u.test(ch);
const langs = [...new Set(UNITS.map((u) => u.lang))].filter(
  (l) => !langFilter || l === langFilter
);
if (langFilter && !langs.length) {
  console.error(`No units for language "${langFilter}".`);
  process.exit(1);
}

let frontProblems = 0;
let exampleProblems = 0;

for (const lang of langs) {
  const units = UNITS.filter((u) => u.lang === lang).sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );

  // order at which each glyph is first TAUGHT as a card of its own
  const taughtAt = new Map();
  for (const u of units)
    for (const l of u.lessons ?? [])
      for (const it of l.items ?? [])
        if (it.type === "kanji" && !taughtAt.has(it.front))
          taughtAt.set(it.front, u.order ?? 0);

  if (!taughtAt.size) continue; // Latin-script language: nothing to check

  const unseen = (text, order, own) => [
    ...new Set(
      [...(text ?? "")]
        .filter(isHan)
        .filter((c) => c !== own)
        .filter((c) => {
          const at = taughtAt.get(c);
          return at === undefined || at > order;
        })
    ),
  ];

  const fronts = [];
  const examples = [];
  for (const u of units) {
    const order = u.order ?? 0;
    for (const l of u.lessons ?? [])
      for (const it of l.items ?? []) {
        if (it.type === "vocab") {
          const bad = unseen(it.front, order, null);
          if (bad.length) fronts.push({ id: it.id, front: it.front, bad, order });
        }
        const bad = unseen(it.example?.jp, order, it.front);
        if (bad.length) examples.push({ id: it.id, bad, jp: it.example.jp });
      }
  }

  const label = (c) => `${c}${taughtAt.has(c) ? `(taught u${taughtAt.get(c)})` : "(never taught)"}`;
  console.log(`\n${lang}: ${taughtAt.size} glyphs taught across ${units.length} units`);
  console.log(`  unreadable vocab fronts : ${fronts.length}`);
  for (const f of fronts) console.log(`    ✗ ${f.id}  ${f.front}  ${f.bad.map(label).join(" ")}`);
  console.log(`  examples using an untaught glyph : ${examples.length}`);
  for (const e of examples) console.log(`    ⚠ ${e.id}  ${e.bad.map(label).join(" ")}  ${e.jp}`);

  frontProblems += fronts.length;
  exampleProblems += examples.length;
}

console.log(
  `\nTOTAL  fronts: ${frontProblems}  examples: ${exampleProblems}` +
    (STRICT ? "  (--strict: examples fail the run too)" : "")
);
if (frontProblems || (STRICT && exampleProblems)) process.exit(1);
