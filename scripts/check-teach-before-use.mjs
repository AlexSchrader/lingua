// Teach-before-use checker — the authoring rule RUNBOOK-new-language.md §4 calls
// "the rule most likely to bite you in block 2 or 3":
//
//   Every example sentence may use only vocab introduced at or before its unit.
//
// Nothing in CI checks this. `validate:content` checks shape, `lint:curriculum`
// checks mechanical style; neither reads a sentence. This walks every example in
// a language, tokenises the target-language text, and reports any word that is not
// covered by an item front taught at or before that example's unit `order`.
//
//   node scripts/check-teach-before-use.mjs fr          # whole language
//   node scripts/check-teach-before-use.mjs fr 28 37    # one block's unit range
//
// Exit code 1 if anything is unaccounted for, so it can gate a branch.
//
// ── WHAT THIS DOES **NOT** PROVE ────────────────────────────────────────────────
// Read this before quoting a clean run as evidence. A 0-token result means "no
// unaccounted-for word form", which is weaker than "no untaught vocabulary":
//
//   1. FRONT EXISTS ≠ SENSE TAUGHT. This matches word forms, not meanings. French
//      `au` is the worked example: the front is owned by the sounds unit as the
//      spelling that sounds like "oh", while examples use it as the à+le
//      contraction. This script passes that silently. Only reading catches it.
//   2. IT CANNOT SEE VERB FORMS. `il travaille` passes because `je travaille` is a
//      taught front and both contain the token `travaille` — but the third-person
//      form may never have been taught. Scan for those separately, by reading.
//   3. INFLECTIONS ARE ALLOWED BY RULE, NOT BY EVIDENCE. The variant rules below
//      let a regular plural/feminine through on the assumption the learner has met
//      the rule. Check that assumption holds for YOUR language before trusting it;
//      for French it does (u26l3 teaches le pluriel, u5l1 teaches bon/bonne).
//   4. IT IS BLIND TO ORDER WITHIN A UNIT. An l1 example may legally use an l4 word.
//   5. IT SAYS NOTHING ABOUT NATURALNESS. That is the content-auditor's job.
//
// So: a clean run is a floor, not a ceiling. It replaces the mechanical half of the
// check, and it is the half that is easy to get wrong by hand across 240 sentences.
//
// ── EXPECTED OUTPUT TODAY (so nobody thinks the tool is broken) ─────────────────
// `node scripts/check-teach-before-use.mjs fr 28 37` → 0, and exits 0.
// `node scripts/check-teach-before-use.mjs fr` → 82, and exits 1. Those 82 are all
// in the A1 corpus (u1-u27) and PRE-DATE this tool. The largest single source is
// the sounds unit fr-u27 at **32 of the 82** — it carries `order: 1` but was
// authored last, and quotes later vocabulary on purpose to illustrate a spelling
// (é in café), a deliberate documented inversion rather than a defect. That is a
// plurality, NOT a majority: the other 50 are spread across 19 units, so do not
// read a non-zero whole-language run as "it's all just u27." Those 50 are free
// cognates and proper names outside this file's FREE list (pizza, taxi, Anne,
// Lyon) plus a genuine tail of ~8 untaught verb forms, logged for the Curriculum
// lane in BUILD-CHECKLIST.md. Run it over YOUR range, not the whole language,
// until that tail is cleared.
// (An earlier revision of this comment said "roughly two thirds are fr-u27". That
// was wrong — 39%, not ~66% — and it is exactly the direction of error that makes
// pre-existing debt look more concentrated and more benign than it is.)
import { UNITS } from "../src/data/index.js";

const [, , langArg, fromArg, toArg] = process.argv;
const lang = langArg || "fr";
const from = fromArg ? Number(fromArg) : 1;
const to = toArg ? Number(toArg) : Infinity;

const fold = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const units = UNITS.filter((u) => u.lang === lang).sort((a, b) => a.order - b.order);
if (!units.length) {
  console.error(`no units for language "${lang}"`);
  process.exit(1);
}

// front → the LOWEST unit order that teaches it, both whole and word by word.
const taughtAt = new Map();
const learn = (w, order) => {
  const k = fold(w);
  if (!k) return;
  if (!taughtAt.has(k) || taughtAt.get(k) > order) taughtAt.set(k, order);
};
for (const u of units)
  for (const l of u.lessons || [])
    for (const it of l.items || []) {
      for (const w of it.front.split(/[\s'’…]+/)) learn(w, u.order);
      learn(it.front.replace(/[\s'’…]+/g, ""), u.order);
    }

// Free by policy (RUNBOOK §4): proper names and transparent cognates. Keep this
// list SHORT and explicit — every entry is a judgment call, and the point of
// writing them down is that the judgment is reviewable instead of invisible.
const FREE = new Set(
  ["paris", "marie", "paul", "france", "japon", "angleterre", "photo", "normal"].map(fold)
);

// Regular inflections of an already-taught word. See caveat 3 above.
const variantsOf = (w) => {
  const out = new Set([w]);
  if (w.endsWith("s") || w.endsWith("x")) out.add(w.slice(0, -1));
  if (w.endsWith("e")) out.add(w.slice(0, -1));
  if (w.endsWith("es")) out.add(w.slice(0, -2));
  if (w.endsWith("ere")) out.add(w.slice(0, -3) + "er");
  return [...out];
};

const problems = [];
let checked = 0;
for (const u of units) {
  if (u.order < from || u.order > to) continue;
  for (const l of u.lessons || [])
    for (const it of l.items || []) {
      const sentence = it.example?.jp;
      if (!sentence) continue;
      checked++;
      const tokens = sentence
        .split(/[^A-Za-zÀ-ɏŒœ'’-]+/)
        .flatMap((t) => t.split(/['’]/))
        .map((t) => t.replace(/^-+|-+$/g, ""))
        .filter(Boolean);
      for (const raw of tokens) {
        const w = fold(raw);
        if (FREE.has(w)) continue;
        const known = variantsOf(w).some((v) => {
          const at = taughtAt.get(v);
          return at !== undefined && at <= u.order;
        });
        if (!known) problems.push(`${it.id} [order ${u.order}] "${raw}" in: ${sentence}`);
      }
    }
}

console.log(
  `${lang}: checked ${checked} example sentence(s) in unit orders ` +
    `${from}..${to === Infinity ? units[units.length - 1].order : to} — ` +
    `${problems.length} unaccounted-for token(s)`
);
for (const p of problems) console.log("  " + p);
if (problems.length) process.exit(1);
