// Lexeme-level collision check for ja fronts.
//
// The contract's front-uniqueness rule compares EXACT strings, so ておきます (block 3) and
// ておく (u43) both validate — while being the same word with two mastery tracks and no new
// learning. The content-auditor found 36 of these. This generates the plausible surface
// variants of a candidate front (ます⇄辞書形, noun⇄noun+する/します) and reports any that
// the corpus already owns.
//
// Usage: node lexeme.mjs [--max ORDER] word1 word2 ...
import { JA_UNITS } from "file:///C:/dev/lingua-jab1-3/src/data/ja/index.js";

const I2U = { い: "う", き: "く", ぎ: "ぐ", し: "す", ち: "つ", に: "ぬ", ひ: "ふ", び: "ぶ", み: "む", り: "る" };
const E_ROW = "えけげせぜてでねへべぺめれ";

function variants(f) {
  const v = new Set([f]);
  // ごぞんじです ⇄ ごぞんじ — a copula on the end is not a different word.
  if (f.endsWith("です")) v.add(f.slice(0, -2));
  if (f.endsWith("だ") && f.length > 2) v.add(f.slice(0, -1));
  if (f.endsWith("ます")) {
    const stem = f.slice(0, -2);
    const last = stem.slice(-1);
    if (I2U[last]) v.add(stem.slice(0, -1) + I2U[last]); // godan: かき→かく
    v.add(stem + "る");                                   // ichidan: たべ→たべる
    if (stem.endsWith("し")) v.add(stem.slice(0, -1) + "する"); // ～します → ～する
    // The five irregular respectful verbs conjugate いらっしゃいます ⇄ いらっしゃる —
    // the い drops rather than shifting to the u-row, so the godan rule above misses them.
    if (last === "い") v.add(stem.slice(0, -1) + "る");
  }
  if (f.endsWith("る")) { const s = f.slice(0, -1); v.add(s + "ります"); v.add(s + "ます"); }
  if (f.endsWith("う")) v.add(f.slice(0, -1) + "います");
  if (f.endsWith("く")) v.add(f.slice(0, -1) + "きます");
  if (f.endsWith("す")) v.add(f.slice(0, -1) + "します");
  if (f.endsWith("む")) v.add(f.slice(0, -1) + "みます");
  if (f.endsWith("つ")) v.add(f.slice(0, -1) + "ちます");
  if (f.endsWith("ぐ")) v.add(f.slice(0, -1) + "ぎます");
  if (f.endsWith("ぶ")) v.add(f.slice(0, -1) + "びます");
  if (f.endsWith("する")) { v.add(f.slice(0, -2)); v.add(f.slice(0, -2) + "します"); }
  if (f.endsWith("します")) { v.add(f.slice(0, -3)); v.add(f.slice(0, -3) + "する"); }
  // Any noun can be a する-verb, and the corpus stores some as けんさくします and some as
  // けんさく — so always probe both, whatever the noun happens to end in.
  if (!f.endsWith("ます") && !f.endsWith("する")) { v.add(f + "する"); v.add(f + "します"); }
  return [...v];
}

const args = process.argv.slice(2);
let max = Infinity;
const mi = args.indexOf("--max");
if (mi >= 0) { max = Number(args[mi + 1]); args.splice(mi, 2); }

const owned = new Map();
for (const u of JA_UNITS) {
  if (u.order > max) continue;
  for (const l of u.lessons || []) for (const it of l.items || []) {
    if (it.type === "kana") continue;
    if (!owned.has(it.front)) owned.set(it.front, [u.order, it.meaning]);
  }
}

const words = args.join(" ").split(/[\s,、]+/).filter(Boolean);
let clean = 0;
for (const w of words) {
  const hits = variants(w).filter((v) => owned.has(v)).map((v) => `${v} (u${owned.get(v)[0]}: ${owned.get(v)[1]})`);
  if (hits.length) console.log(`✗ ${w.padEnd(14)} ← ${hits.join(" · ")}`);
  else clean++;
}
console.log(`\n${clean}/${words.length} free at lexeme level (corpus limited to order <= ${max})`);
