// Replace (or add) `drill: { jp, en }` on items by id. Unlike add-drills.mjs this
// overwrites an existing drill, so it can be used for remediation passes.
// Anchors on the item's own id and rewrites only within that item's object.
//   node scripts/set-drills.mjs <unitfile> <<'JSON'  { "id": ["jp","en"], ... }  JSON
import { readFileSync, writeFileSync } from "node:fs";

const file = process.argv[2];
const map = JSON.parse(readFileSync(0, "utf8"));
let src = readFileSync(file, "utf8");
let set = 0, added = 0;
for (const [id, pair] of Object.entries(map)) {
  if (!Array.isArray(pair) || pair.length !== 2 || !pair[0] || !pair[1]) {
    console.error(`  ! ${id}: needs [jp, en] both non-empty`); process.exitCode = 1; continue;
  }
  const [jp, en] = pair;
  const at = src.indexOf(`id: "${id}"`);
  if (at < 0) { console.error(`  ! ${id} not found`); process.exitCode = 1; continue; }
  const eol = src.indexOf("\n", at);
  const line = src.slice(at, eol);
  const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const block = `drill: { jp: "${esc(jp)}", en: "${esc(en)}" }`;
  if (/drill: \{[^}]*\}/.test(line)) {
    src = src.slice(0, at) + line.replace(/drill: \{[^}]*\}/, block) + src.slice(eol);
    set++;
  } else {
    const acc = src.indexOf("accept: [", at);
    const close = src.indexOf("]", acc);
    if (acc < 0 || close < 0 || close > eol) { console.error(`  ! ${id}: no accept[] on its line`); process.exitCode = 1; continue; }
    src = src.slice(0, close + 1) + ", " + block + src.slice(close + 1);
    added++;
  }
}
writeFileSync(file, src);
console.log(`${file}: ${set} replaced, ${added} added`);
