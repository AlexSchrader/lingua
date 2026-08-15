// Script purity for ja content — narrowed to the failure that actually happens.
//
// Generator contamination has leaked SEVEN times across B1 and B2 authoring:
// English "science" / "friend" / "speed", Korean 안 / 강い, Russian долгий / долго.
// Every one was a LATIN, CYRILLIC or HANGUL run inside a Japanese field, and every
// one was caught by eye. A first draft of this check also flagged parenthetical
// Japanese in English glosses ("(contracted ている)") and full-width digits, which
// are both correct authoring — a check that cries wolf gets ignored, so it only
// looks for foreign SCRIPTS in Japanese fields now.
import { JA_UNITS } from "./src/data/ja/index.js";

const FOREIGN = /[\p{Script=Latin}\p{Script=Cyrillic}\p{Script=Hangul}\p{Script=Greek}\p{Script=Arabic}]/u;

let bad = 0;
for (const u of JA_UNITS)
  for (const l of u.lessons || [])
    for (const it of l.items || [])
      for (const [field, val] of [["front", it.front], ["example.jp", it.example?.jp]]) {
        if (typeof val === "string" && FOREIGN.test(val)) {
          const strays = [...new Set([...val].filter((c) => FOREIGN.test(c)))].join("");
          console.log(`✗ ${it.id}  ${field}  foreign script "${strays}"  →  ${val}`);
          bad++;
        }
      }
console.log(bad ? `\nCONTAMINATED: ${bad}` : "script purity: clean (no Latin/Cyrillic/Hangul in any ja front or example)");
if (bad) process.exit(1);
