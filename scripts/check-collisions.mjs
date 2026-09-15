// Cross-block collision sweep for a Latin-script language — the three checks a
// single block CANNOT run on itself, and `validateContent` does not run at all.
//
//   node scripts/check-collisions.mjs --lang no
//   node scripts/check-collisions.mjs --lang no --from 21 --to 50
//
// WHY EACH ONE EXISTS, all three from defects this project actually shipped:
//
//  1. LEXEME duplicates. validateContent keys on the exact `front` string, so a
//     noun and its verb, or an infinitive and a conjugated form, are two clean
//     cards and one word — two mastery tracks, no new learning. A ja B1 seat
//     checked all 456 of its fronts for collisions, got zero, and had still
//     re-taught 36 words; half a unit had to be re-authored. This resolves each
//     front through the language's own morphology module and asks whether some
//     OTHER front is one of its surface forms. It over-generates on short fronts
//     — read every hit, it is an authoring aid, not a gate.
//
//  2. MEANING duplicates. TypeCard uses `meaning` as the PROMPT on the produce
//     card and checkProduce accepts only that card's own `front`, so two cards
//     sharing a meaning string are the same screen with two different right
//     answers and one of them is always marked wrong. Found on no A1 (du/deg).
//
//  3. READING collisions. checkReading grades on the ASCII-folded `reading`, so
//     two fronts folding to one string means the grader accepts the other card's
//     answer. Found on de A2 (Konjunktiv hätte vs Präteritum hatte). The leak is
//     lenient — it never marks a right answer wrong — but the pair is worth
//     knowing about, and a same-LESSON pair is worth fixing.
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);
const flag = (n, d = null) => { const i = argv.indexOf(n); return i < 0 ? d : argv[i + 1] ?? d; };
const lang = flag("--lang");
if (!lang) { console.error("usage: node scripts/check-collisions.mjs --lang <code> [--from N] [--to N]"); process.exit(2); }
const from = Number(flag("--from", 0)), to = Number(flag("--to", 1e9));

const url = (p) => `file:///${p.replace(/\\/g, "/")}`;
const mod = await import(url(join(process.cwd(), "src/data", lang, "index.js")));
const UNITS = (Object.values(mod).find(Array.isArray) ?? []).filter((u) => u.lessons?.some((l) => l.items?.length));
const items = UNITS.flatMap((u) => u.lessons.flatMap((l) => (l.items || []).map((i) => ({ ...i, u: u.order, l: l.lesson }))));
const mine = (i) => i.u >= from && i.u <= to;

const morphPath = join(HERE, "morph", `${lang}.mjs`);
const morph = existsSync(morphPath) ? await import(url(morphPath)) : null;

// --- 1. lexeme duplicates ---------------------------------------------------
const strip = (f) => f.replace(/^(en |ei |et |å |le |la |el |der |die |das |o |a )/i, "").toLowerCase().trim();
const byBare = new Map();
for (const i of items) (byBare.get(strip(i.front)) ?? byBare.set(strip(i.front), []).get(strip(i.front))).push(i);

const lex = [];
for (const [bare, group] of byBare) if (group.length > 1) lex.push([`same stem after the article: ${bare}`, group]);
if (morph) {
  const fronts = new Map(items.map((i) => [strip(i.front), i]));
  for (const i of items) {
    const surf = new Set();
    morph.surfaces(i.front, i.u * 100 + i.l, (w) => surf.add(w));
    surf.delete(strip(i.front));
    for (const w of surf) {
      const other = fronts.get(w);
      // Only report the lower-slot card's view of the pair, so each pair prints once.
      if (other && other.id !== i.id && (other.u * 100 + other.l) > (i.u * 100 + i.l))
        lex.push([`"${other.front}" is a form of "${i.front}"`, [i, other]]);
    }
  }
}

// --- 2. meaning duplicates --------------------------------------------------
const norm = (s) => String(s ?? "").toLowerCase().replace(/[^\p{L}\s]/gu, "").replace(/\s+/g, " ").trim();
const byMeaning = new Map();
for (const i of items) { const k = norm(i.meaning); if (!byMeaning.has(k)) byMeaning.set(k, []); byMeaning.get(k).push(i); }

// --- 3. reading collisions --------------------------------------------------
const byReading = new Map();
for (const i of items) { const k = i.reading; if (!byReading.has(k)) byReading.set(k, []); byReading.get(k).push(i); }

const show = (g) => g.map((i) => `${i.id} (${i.front} = ${i.meaning})`).join("  vs  ");
let hits = 0;
const section = (title, rows) => {
  console.log(`\n${title}: ${rows.length}`);
  for (const r of rows) { console.log("  " + r); hits++; }
};

section("LEXEME pairs (read every one — this over-generates)",
  lex.filter(([, g]) => g.some(mine)).map(([why, g]) => `${why}\n      ${show(g)}`));
section("MEANING duplicates (produce card shows one prompt with two right answers)",
  [...byMeaning.values()].filter((g) => g.length > 1 && g.some(mine)).map(show));
section("READING collisions (checkReading accepts the other card's answer)",
  [...byReading.values()].filter((g) => g.length > 1 && g.some(mine))
    .map((g) => show(g) + (new Set(g.map((i) => `${i.u}l${i.l}`)).size === 1 ? "   ** SAME LESSON **" : "")));

console.log(`\n${lang}: ${items.length} items, ${hits} thing(s) to read.`);
