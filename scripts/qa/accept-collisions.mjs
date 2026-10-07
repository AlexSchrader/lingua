// Does a card's meaning/accept string collide with ANOTHER card's, once normalised
// the way the GRADER normalises?
//
//   node scripts/qa/accept-collisions.mjs <lang> [front ...]
//   node scripts/qa/accept-collisions.mjs id            # every collision in the language
//   node scripts/qa/accept-collisions.mjs id cocok ...   # only ones touching these fronts
//
// WHY: `normalizeMeaning` strips a leading "to " AND a leading "a/an/the", so
// "to match" and "a match" are ONE STRING to the grader. Hand-reading compares
// concepts; the grader compares strings. The Indonesian A2 crew read every
// neighbour's accept[] by hand as its brief required, then ran this and found
// THIRTEEN more collisions it had missed.
//
// The lang was hardcoded to `id`. It is now required, so this cannot report a
// clean pass for a language it never looked at. With no fronts listed it reports
// every collision in the language rather than only ones touching a new card.
// ⚠️ LIMIT — A LANGUAGE-WIDE RUN IS NOT A DEFECT COUNT. Measured 2026-10-02:
//     de 1,564 · pt 1,556 · no 1,366 · ru 331 · hi 145 · id 101
// ⚠️ AND THAT ru FIGURE IS NOT A BASELINE ANY MORE. `ru 331` was measured on
// 2026-10-02 against a 1,440-card corpus; ru B1 (u61–u97, 888 cards) was
// authored on 2026-10-05/06, AFTER it. Re-measured 2026-10-07 on
// `content/ru-b2-block3`: **ru 426**, and it is 426 both WITH and WITHOUT that
// branch's 312 new B2 cards — so the whole rise is B1's and none of it is B2
// block 3's. A count in a comment is a measurement with a timestamp: re-run the
// command rather than diffing against a figure from a smaller corpus.
// Most of that is inherent to translation and is DESIGNED behaviour: accept[] is
// deliberately lenient ("pickiness here was the #1 typing friction",
// src/store/answer.js), so `hallo`/`guten Tag` both taking "hello" is correct.
// 1,471 same-lesson overlaps were measured and closed as non-defects.
// USE IT THE WAY IT WAS BUILT: pass the fronts you just wrote, and read only the
// collisions touching them. The actionable class is narrower and has its own
// probe — `bare-gloss.mjs`, a bare gloss whose same-lesson peer is that same
// gloss plus a qualifier, which is unanswerable on a choice card.

import { UNITS } from "../../src/data/index.js";
const LANG = process.argv[2];
if (!LANG) {
  console.error("usage: node scripts/qa/accept-collisions.mjs <lang> [front ...]");
  process.exit(2);
}
const norm = (m) => String(m ?? "").toLowerCase().replace(/\(.*?\)/g, "").replace(/^(a|an|the)\s+/, "").replace(/^to\s+/, "").trim();
const NEW = new Set(process.argv.slice(3));
const all = [];
for (const u of UNITS.filter((u) => u.lang === LANG)) for (const l of u.lessons ?? []) for (const it of l.items ?? []) all.push({ ...it, u: u.order });
const idx = new Map(); // normalised string -> [{front,u,where}]
for (const it of all) for (const [w, v] of [["meaning", it.meaning], ...(it.accept ?? []).map((a) => ["accept", a])]) {
  const k = norm(v);
  if (!k) continue;
  if (!idx.has(k)) idx.set(k, []);
  idx.get(k).push({ front: it.front, u: it.u, where: w, raw: v });
}
let n = 0;
for (const [k, v] of idx) {
  if (v.length < 2) continue;
  const fronts = new Set(v.map((x) => x.front));
  if (fronts.size < 2) continue; // same card listing it twice is fine
  if (NEW.size && ![...fronts].some((f) => NEW.has(f))) continue; // with fronts given, only those
  n++;
  console.log(`"${k}" <- ${v.map((x) => `${x.front}(u${x.u} ${x.where}:"${x.raw}")`).join("  vs  ")}`);
}
console.log(`\n${LANG}: ${n} collision(s)${NEW.size ? " involving a named front" : ""}`);
