// Is the duplicate-example guard dead? It compares RAW d.jp against example.jp,
// but drills are authored without a trailing period and examples with one — so the
// two strings can never be equal and the guard has never fired.
const m = await import("file:///c:/dev/lingua-no-drills/src/data/no/index.js");
const U = (m.NO_UNITS ?? Object.values(m).find(Array.isArray)).filter((u) => u.lessons.some((l) => l.items));
const items = U.flatMap((u) => u.lessons.flatMap((l) => (l.items || []).map((i) => ({ ...i, u: u.order }))));
const withD = items.filter((i) => i.drill);

const norm = (s) => String(s ?? "").replace(/\s*[。！？.!?]+\s*$/u, "").replace(/\s+/g, " ").trim().toLowerCase();
const rawEq = withD.filter((i) => String(i.drill.jp) === String(i.example?.jp));
const normEq = withD.filter((i) => norm(i.drill.jp) === norm(i.example?.jp));

console.log(`drills: ${withD.length}`);
console.log(`identical RAW (what the guard tests):        ${rawEq.length}  <- guard has never fired`);
console.log(`identical after normalising (the real test): ${normEq.length}  = ${Math.round((normEq.length / withD.length) * 100)}%`);
console.log("\nper unit (duplicates / drills):");
for (const u of U) {
  const v = withD.filter((i) => i.u === u.order);
  const d = v.filter((i) => norm(i.drill.jp) === norm(i.example?.jp)).length;
  if (d) console.log(`  u${String(u.order).padStart(2)}  ${String(d).padStart(2)}/${v.length}  ${"#".repeat(d)}  ${u.title}`);
}
console.log("\nids (first 60):");
console.log("  " + normEq.slice(0, 60).map((i) => i.id.replace("no-u", "u")).join(" "));
