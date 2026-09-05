// How repetitive are the drill sentence FRAMES? A learner meeting the same
// scaffold forty times is being drilled on the scaffold, not the word.
const m = await import("file:///c:/dev/lingua-no-drills/src/data/no/index.js");
const U = (m.NO_UNITS ?? Object.values(m).find(Array.isArray)).filter((u) => u.lessons.some((l) => l.items));
const items = U.flatMap((u) => u.lessons.flatMap((l) => (l.items || []).map((i) => ({ ...i, u: u.order }))));
const withD = items.filter((i) => i.drill);

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const shape = (i) => i.drill.jp.replace(new RegExp(esc(i.front), "i"), "_").replace(/\s+/g, " ").trim();

const c = {};
for (const i of withD) { const s = shape(i); (c[s] ||= []).push(i.id); }
const top = Object.entries(c).sort((a, b) => b[1].length - a[1].length);
console.log("REPEATED FRAMES (identical once the target word is blanked):");
for (const [s, ids] of top) if (ids.length > 2) console.log(`${String(ids.length).padStart(4)}x  ${s}`);

const isAFrame = (i) => /^Det er \S+ å _$|^Det er \S+ _$/.test(shape(i)) || /^Det (er|begynner) /.test(i.drill.jp);
const n = withD.filter(isAFrame).length;
console.log(`\ndistinct frames: ${Object.keys(c).length} across ${withD.length} drills`);
console.log(`"Det er ..." openings: ${n} = ${Math.round((n / withD.length) * 100)}%`);
console.log("\nper unit:");
for (const u of U) {
  const v = withD.filter((i) => i.u === u.order);
  const k = v.filter(isAFrame).length;
  const bar = "#".repeat(k);
  console.log(`  u${String(u.order).padStart(2)}  ${String(k).padStart(2)}/${v.length}  ${bar}  ${u.title}`);
}
// interchangeable filler: "<noun> er <adj>" where the noun is the target
const filler = withD.filter((i) => /^(en|ei|et) /.test(i.front) && new RegExp(`^${esc(i.front)} er \\S+$`, "i").test(i.drill.jp));
console.log(`\n"<target noun> er <adjective>" drills (target swappable, teaches the frame): ${filler.length}`);
console.log("  " + filler.slice(0, 40).map((i) => i.id.replace("no-u", "u")).join(" "));
