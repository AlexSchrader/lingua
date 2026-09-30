// Scan the WHOLE of every ru unit file — comments included — for a word that mixes
// Cyrillic and Latin letters. The selfcheck only sees card strings; A1 shipped
// `возraст` once and no gate saw it.
import { readFileSync, readdirSync } from "node:fs";
const files = readdirSync("src/data/ru").filter((f) => /^unit\d+\.js$/.test(f));
let n = 0;
for (const f of files) {
  const src = readFileSync(`src/data/ru/${f}`, "utf8");
  src.split(/\r?\n/).forEach((line, i) => {
    for (const w of line.split(/[^\p{L}]+/u)) {
      if (/[Ѐ-ӿ]/.test(w) && /[A-Za-z]/.test(w)) { console.log(`${f}:${i + 1}  "${w}"`); n++; }
    }
  });
}
console.log(`\n${files.length} ru unit file(s) scanned · ${n} mixed-script word(s)`);
