import { pathToFileURL } from "node:url";
import { join } from "node:path";
const { UNITS } = await import(pathToFileURL(join(process.cwd(), "src/data/index.js")).href);
const blockOf = (o) => (o <= 110 ? 1 : o <= 123 ? 2 : 3);
const all = [];
for (const u of UNITS.filter((u) => u.lang === "ru" && u.order >= 98))
  for (const l of u.lessons ?? []) for (const it of l.items ?? [])
    if (it.type === "vocab") all.push({ ...it, u: u.order, b: blockOf(u.order), title: u.title });
const m = new Map();
for (const it of all) { const k = it.front.toLowerCase(); if (!m.has(k)) m.set(k, []); m.get(k).push(it); }
const rows = [...m.values()].filter((v) => v.length > 1);
// POLICY FOR B2, AND IT IS NOT B1'S POLICY.
//
// At B1 only block 3's slots were centrally allocated, so block 3 outranked block 2.
// At B2 BOTH blocks' slots were allocated by the crew lead with per-slot word lists,
// so that asymmetry no longer has a justification — applying it here mis-assigned 7
// of the 22 collisions. The rule is now:
//
//   1. An EXPLICIT allocation wins. Where the lead's message named a word for a
//      slot, that slot keeps it regardless of unit order.
//   2. Otherwise the LOWER unit number keeps it.
//
// EXPLICIT is the list below, lifted from the lead's allocation message.
const EXPLICIT = new Map(Object.entries({
  "излучение": 104, "мандат": 130, "ярус": 126, "реставрация": 126,
  "приговор": 131, "расследование": 131, "оружие": 129, "полк": 129, "оборона": 129,
  "посол": 130, "санкция": 130, "перемирие": 130, "апелляция": 102, "переговоры": 103,
  "погрешность": 122, "диаграмма": 122, "статистика": 99, "достоверность": 99,
  "верификация": 99, "вакцина": 112, "дисциплина": 110, "отбор": 136,
  "аттестация": 110, "образование": 113,
  // ADDED AFTER READING THE FIRST OUTPUT. Lower-unit-wins stripped a real sense
  // from the unit that most needs it in four more cases, and one of them is
  // decisive: АЗАРТ IS IN u134'S OWN TITLE, «Игра и азарт». A unit whose title
  // names a word it does not teach is the defect Hindi had to retitle u85 over.
  "азарт": 134,
  // The lead's own seed lists named these three for the military and sport slots,
  // and I failed to copy them into EXPLICIT on the first pass:
  "призыв": 129,   // conscription — u120 has воззвание for the public appeal
  "звание": 129,   // a military rank is the canonical sense
  "трибуна": 136,  // the stands — u120 keeps the rostrum sense by another word
}));
const loseByUnit = new Map();
let n = 0;
for (const v of rows) {
  const owner = EXPLICIT.get(String(v[0].front).toLowerCase());
  const sorted = [...v].sort((a, b) => {
    if (owner) { if (a.u === owner) return -1; if (b.u === owner) return 1; }
    return a.u - b.u;
  });
  const keep = sorted[0];
  for (const lose of sorted.slice(1)) {
    n++;
    if (!loseByUnit.has(lose.u)) loseByUnit.set(lose.u, []);
    loseByUnit.get(lose.u).push({ front: lose.front, id: lose.id, keepAt: keep.u, keepTitle: keep.title });
  }
}
console.log(`collisions: ${rows.length} fronts, ${n} cards to replace\n`);
const byBlock = {};
for (const [u, ls] of loseByUnit) { const b = blockOf(u); byBlock[b] = (byBlock[b] || 0) + ls.length; }
console.log("replacements by block:", JSON.stringify(byBlock), "\n");
for (const u of [...loseByUnit.keys()].sort((a, b) => a - b)) {
  const ls = loseByUnit.get(u);
  console.log(`u${u} (block ${blockOf(u)}) — ${ls.length} to replace`);
  for (const x of ls) console.log(`    ${x.front.padEnd(16)} ${x.id.padEnd(26)} -> keeps at u${x.keepAt} "${x.keepTitle}"`);
}
