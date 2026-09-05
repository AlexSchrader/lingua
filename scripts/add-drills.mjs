// Splice `drill: { jp, en }` into items by id, right after their `accept` array.
// Anchors on the item's full id and the accept field that follows it, so it can
// never land inside a neighbouring object (CLAUDE.md fix-script anchor rule).
//   node scripts/add-drills.mjs <unitfile> <<'JSON'  { "id": ["jp","en"], ... }  JSON
import { readFileSync, writeFileSync } from "node:fs";

const file = process.argv[2];
const map = JSON.parse(readFileSync(0, "utf8"));
let src = readFileSync(file, "utf8");
let n = 0;
for (const [id, pair] of Object.entries(map)) {
  if (!Array.isArray(pair) || pair.length !== 2 || !pair[0] || !pair[1]) {
    console.error(`  ! ${id}: needs exactly [jp, en], both non-empty — got ${JSON.stringify(pair)}`);
    process.exitCode = 1; continue;
  }
  const [jp, en] = pair;
  const at = src.indexOf(`id: "${id}"`);
  if (at < 0) { console.error(`  ! ${id} not found`); continue; }
  const acc = src.indexOf("accept: [", at);
  if (acc < 0) { console.error(`  ! ${id} has no accept`); continue; }
  const close = src.indexOf("]", acc);
  if (close < 0 || close > src.indexOf("\n", at)) { console.error(`  ! ${id} accept unterminated on its line`); continue; }
  if (src.slice(at, close + 60).includes("drill:")) { console.error(`  ! ${id} already has a drill`); continue; }
  const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  src = src.slice(0, close + 1) + `, drill: { jp: "${esc(jp)}", en: "${esc(en)}" }` + src.slice(close + 1);
  n++;
}
writeFileSync(file, src);
console.log(`${file}: +${n} drills`);
