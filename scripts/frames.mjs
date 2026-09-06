// SCAFFOLD monotony, not string monotony.
//
// The first version of this script blanked only the target word and counted
// distinct strings. That measured the wrong axis and made a remediation look
// better than it was: adding a complement makes each STRING more distinct, so
// the count rose 311 -> 360, while the learner still met the same scaffold.
// "Det er <adj> å <verb> <complement>" is the same scaffold as "Det er <adj> å
// <verb>". Caught by the u11-u20 content-auditor. This version collapses the
// whole frame, so a complement cannot disguise a repeat.
// NOTE: this read a HARDCODED absolute path to one worktree, so running it from any
// other checkout silently reported that tree's numbers as your own. Fixed to cwd,
// which is what check-drills.mjs already did. Found by the block-2 seat after 13
// rewrites moved nothing.
import { join } from "node:path";
const m = await import("file:///" + join(process.cwd(), "src/data/no/index.js").split("\\").join("/"));
const U = (m.NO_UNITS ?? Object.values(m).find(Array.isArray)).filter((u) => u.lessons.some((l) => l.items));
const items = U.flatMap((u) => u.lessons.flatMap((l) => (l.items || []).map((i) => ({ ...i, u: u.order }))));
const withD = items.filter((i) => i.drill);

const A_FRAME = /^det er \S+ å /i;                 // Det er <adj> å <verb> ...
const N_ADJ = /^(en|ei|et) \S+ er \S+$/i;          // <article> <noun> er <adj>
const scaffold = (i) => {
  const jp = i.drill.jp;
  if (A_FRAME.test(jp)) return "Det er <adj> å <verb> …";
  if (N_ADJ.test(jp)) return "<art> <noun> er <adj>";
  if (/^(jeg|vi|de|han|hun|kari|erling) har /i.test(jp)) return "<subj> har <NP> …";
  if (/^(det|her) er /i.test(jp)) return "Det/Her er <NP> …";
  return "other";
};
const c = {};
for (const i of withD) (c[scaffold(i)] ||= []).push(i);
console.log("SCAFFOLD SHARE across " + withD.length + " drills:");
for (const [k, v] of Object.entries(c).sort((a, b) => b[1].length - a[1].length))
  console.log(`  ${String(v.length).padStart(3)}  ${String(Math.round((v.length / withD.length) * 100)).padStart(2)}%  ${k}`);
const two = (c["Det er <adj> å <verb> …"]?.length ?? 0) + (c["<art> <noun> er <adj>"]?.length ?? 0);
console.log(`\nthe two frames the audit named: ${two}/${withD.length} = ${Math.round((two / withD.length) * 100)}%`);
console.log("\nper unit (two-frame count / drills):");
for (const u of U) {
  const v = withD.filter((i) => i.u === u.order);
  const k = v.filter((i) => ["Det er <adj> å <verb> …", "<art> <noun> er <adj>"].includes(scaffold(i))).length;
  const pct = Math.round((k / v.length) * 100);
  console.log(`  u${String(u.order).padStart(2)}  ${String(k).padStart(2)}/${String(v.length).padStart(2)}  ${String(pct).padStart(3)}%  ${"#".repeat(Math.round(k / 2))}  ${u.title}`);
}
