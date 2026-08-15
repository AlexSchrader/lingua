// Collision check for B2 block 1. Checks candidate fronts against the whole ja
// corpus AND both sibling branches, so a word is rejected before it is authored
// rather than deleted at merge — the failure that cost B1's block 3 sixty-five cards.
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";

const read = (dir) => {
  if (!existsSync(dir)) return [];
  try {
    return JSON.parse(
      execSync(
        `node -e "const{JA_UNITS}=await import(String.raw\`./src/data/ja/index.js\`);` +
          `const o=[];for(const u of JA_UNITS)for(const l of u.lessons)for(const i of (l.items||[]))` +
          `o.push(i.front);console.log(JSON.stringify(o))" --input-type=module`,
        { cwd: dir, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }
      )
    );
  } catch {
    return [];
  }
};

const taken = new Set([
  ...read("."),
  ...read("C:/dev/lingua-jab2-2"),
  ...read("C:/dev/lingua-jab2-3"),
]);

const cands = process.argv.slice(2).join(" ").split(/[\s,]+/).filter(Boolean);
const dup = cands.filter((c) => taken.has(c));
const free = cands.filter((c) => !taken.has(c));
console.log("TAKEN(" + dup.length + "): " + dup.join(" "));
console.log("FREE(" + free.length + "): " + free.join(" "));
