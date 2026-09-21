// Is this FRONT free in <lang>, and is its LEXEME free?
//
// Front-uniqueness is enforced on the exact string, so `die Behauptung` and
// `behaupten` both pass the validator while teaching one lexeme twice — the
// failure that cost Spanish B1 159 cards. This checks both, against the LIVE
// corpus (src/data/index.js), not against the TAUGHT-WORDS snapshot, so it sees
// what siblings have merged even when the markdown is a day stale.
//
// Usage:  node scripts/check-front.mjs de "die Behauptung" widerlegen pauschal
//         node scripts/check-front.mjs de --file candidates.txt
//
// A CONTROL front is always probed: it is read from the corpus itself (the first
// front of the language's unit 1), so if it does not report TAKEN the probe is
// broken and every "free" below is worthless.
import { readFileSync } from "node:fs";
import { UNITS } from "../src/data/index.js";

const [, , lang, ...rest] = process.argv;
if (!lang) {
  console.error("usage: node scripts/check-front.mjs <lang> <front> [front…] | --file <path>");
  process.exit(2);
}
let candidates = rest;
const fileIdx = rest.indexOf("--file");
if (fileIdx !== -1) {
  candidates = readFileSync(rest[fileIdx + 1], "utf8")
    .split("\n").map((l) => l.trim()).filter((l) => l && !l.startsWith("#"));
}

// Same folding the engine uses for readings: lowercase, NFD, drop combining marks.
const fold = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/ß/g, "ss");
const ARTICLES = /^(der|die|das|el|la|los|las|le|les|un|une|o|a|os|as|en|ei|et|å)\s+/;
const bare = (s) => fold(s).replace(ARTICLES, "").trim();
// German derivation is prefix-stable (behaupten/Behauptung, Schluss/schlüssig),
// so a shared 5+ char prefix is the cheap lexeme probe. It over-reports on
// purpose — a false positive costs one look, a false negative costs a card.
const stem = (s) => bare(s).replace(/(ung|heit|keit|en|er|es|e|n|s)$/, "");

const taught = new Map(); // fold(front) -> "front — uNN"
const stems = new Map();  // stem -> [ "front (uNN)" ]
for (const u of UNITS) {
  if (u.lang !== lang) continue;
  for (const l of u.lessons || [])
    for (const it of l.items || []) {
      if (!it.front) continue;
      taught.set(fold(it.front), `${it.front} — u${u.order}`);
      const k = stem(it.front);
      if (k.length >= 4) (stems.get(k) ?? stems.set(k, []).get(k)).push(`${it.front} (u${u.order})`);
    }
}

const control = [...UNITS].filter((u) => u.lang === lang).sort((a, b) => a.order - b.order)
  .flatMap((u) => (u.lessons || []).flatMap((l) => l.items || []))[0]?.front;
const probe = (front) => {
  const exact = taught.get(fold(front));
  if (exact) return { verdict: "TAKEN", detail: exact };
  const k = stem(front);
  const near = k.length >= 4 ? (stems.get(k) || []) : [];
  if (near.length) return { verdict: "LEXEME", detail: near.join(", ") };
  return { verdict: "free", detail: "" };
};

console.log(`${lang}: ${taught.size} fronts taught across the live corpus`);
const c = probe(control);
console.log(`CONTROL "${control}" → ${c.verdict} ${c.detail}`);
if (c.verdict !== "TAKEN") { console.error("CONTROL DID NOT REPORT TAKEN — probe is broken, ignore everything below"); process.exit(3); }
let bad = 0;
for (const f of candidates) {
  const r = probe(f);
  if (r.verdict !== "free") bad++;
  console.log(`${r.verdict.padEnd(6)} ${f}${r.detail ? "  ← " + r.detail : ""}`);
}
console.log(`\n${candidates.length - bad} free / ${bad} to replace`);
