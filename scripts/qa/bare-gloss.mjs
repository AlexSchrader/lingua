// scripts/tmp/bare-gloss.mjs — bare gloss whose same-lesson peer is "same gloss + (qualifier)"
import { pathToFileURL } from "node:url"; import { join } from "node:path";
const { UNITS } = await import(pathToFileURL(join(process.cwd(), "src/data/index.js")).href);
const low = (s) => String(s ?? "").trim().toLowerCase();
const bare = (m) => !/\(/.test(String(m));
for (const L of [...new Set(UNITS.map((u) => u.lang))]) {
  const items = [];
  for (const u of UNITS.filter((u) => u.lang === L)) for (const l of u.lessons ?? []) for (const it of l.items ?? [])
    if (it.type === "vocab" && low(it.meaning)) items.push({ ...it, lang: L, unit: u.order, lesson: l.id });
  const byLesson = new Map();
  for (const it of items) { if (!byLesson.has(it.lesson)) byLesson.set(it.lesson, []); byLesson.get(it.lesson).push(it); }
  for (const [, g] of byLesson) for (const a of g) {
    if (!bare(a.meaning)) continue;
    const peers = g.filter((b) => b !== a && !bare(b.meaning) && low(b.meaning).startsWith(low(a.meaning) + " ("));
    if (peers.length) console.log(`${a.lang} u${a.unit} ${a.id} ${a.front} "${a.meaning}" <- peers: ${peers.map((p) => `${p.front} "${p.meaning}"`).join(", ")}`);
  }
}
