// Is this READING already used in Hindi? — the probe unit61.js §B4 cites.
//
//   node scripts/qa/reading-taken.mjs [reading ...]       # named readings, hi
//   node scripts/qa/reading-taken.mjs                     # every duplicate, hi
//   node scripts/qa/reading-taken.mjs ru [reading ...]    # another language
//
// ⚠️ IT WAS HINDI-ONLY UNTIL 2026-10-07, when the ru B2 block-2 gate list
// named it as a cross-language probe. It imported HI_UNITS unconditionally, so
// running it "for ru" silently measured Hindi and printed Hindi's count — and
// Hindi happened to have 2,328 fronts, the exact number ru had before B2, which
// is how the mistake survived a reading of the output. A LANGUAGE ID MAY NOW BE
// PASSED AS THE FIRST ARGUMENT; with none, the behaviour is unchanged (hi).
//
// WHY IT EXISTS: `contract.js` enforces front uniqueness and NOT reading
// uniqueness, but unit1.js §2 makes a one-reading-per-front invariant the whole
// basis of the dictation and glyph cards — two fronts sharing a reading is one
// card with two right answers. Hindi additionally MERGES retroflex and dental in
// word readings (§1b), so the collisions are not where a speaker expects them.
// **Found by this probe on B1 block 1: दर reads `dar` and so does डर (u27).**
// दर was dropped; §1b's escape hatch says the repair is डर → `ddar`.
// With no arguments it reports the language-wide count — 1,440 fronts to 1,440
// distinct readings before B1, and that invariant must hold after it.

const LANGS = { hi: "hi", ru: "ru", ja: "ja", de: "de", es: "es", fr: "fr", pt: "pt", no: "no", it: "it", nl: "nl", pl: "pl", sv: "sv", tr: "tr", id: "id", vi: "vi", ko: "ko", zh: "zh", ar: "ar", he: "he", el: "el", cs: "cs", da: "da", fi: "fi", hu: "hu", ro: "ro", uk: "uk", th: "th", hin: "hi" };
let args = process.argv.slice(2);
let lang = "hi";
if (args.length && Object.prototype.hasOwnProperty.call(LANGS, args[0])) { lang = LANGS[args[0]]; args = args.slice(1); }
const mod = await import(`../../src/data/${lang}/index.js`);
const UNITS = mod[`${lang.toUpperCase()}_UNITS`];
if (!UNITS) { console.error(`no ${lang.toUpperCase()}_UNITS exported from src/data/${lang}/index.js`); process.exit(2); }
const byR=new Map();
for (const u of UNITS) for (const l of (u.lessons||[])) for (const it of (l.items||[])) {
  if (!it.reading) continue;
  if (!byR.has(it.reading)) byR.set(it.reading, []);
  byR.get(it.reading).push(`${it.front}@u${u.order}`);
}
if (args.length) { for (const r of args) console.log(byR.has(r)?`COLLIDE ${r}: ${byR.get(r).join(" ")}`:`free ${r}`); }
else { let n=0; for (const [r,v] of byR) if (v.length>1) { n++; console.log(`DUP ${r}: ${v.join(" ")}`);} console.log(`${lang}: ${byR.size} distinct readings, ${n} duplicated`); }
