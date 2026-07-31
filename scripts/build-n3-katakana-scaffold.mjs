// Backfill scaffold for the N3 katakana loanwords the hiragana-only romanizer
// dropped in the first vocab pass. Adds katakana→hiragana folding + extended
// digraphs (ティ/ファ/ジェ…) so loanword readings romanize correctly, excludes
// anything already in the corpus + malformed interjection rows, and chunks the
// remainder into units of 24 starting at order 196.
import { readFileSync, writeFileSync } from "node:fs";
import { UNITS } from "../src/data/index.js";

const SP = "/tmp/claude-0/-home-user-lingua/0950ba36-d4c0-5403-92cf-8e520c27b4a5/scratchpad";
const kataToHira = (s) => s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
const YOON = { "きゃ":"kya","きゅ":"kyu","きょ":"kyo","しゃ":"sha","しゅ":"shu","しょ":"sho","ちゃ":"cha","ちゅ":"chu","ちょ":"cho","にゃ":"nya","にゅ":"nyu","にょ":"nyo","ひゃ":"hya","ひゅ":"hyu","ひょ":"hyo","みゃ":"mya","みゅ":"myu","みょ":"myo","りゃ":"rya","りゅ":"ryu","りょ":"ryo","ぎゃ":"gya","ぎゅ":"gyu","ぎょ":"gyo","じゃ":"ja","じゅ":"ju","じょ":"jo","びゃ":"bya","びゅ":"byu","びょ":"byo","ぴゃ":"pya","ぴゅ":"pyu","ぴょ":"pyo","てぃ":"ti","でぃ":"di","ふぁ":"fa","ふぃ":"fi","ふぇ":"fe","ふぉ":"fo","うぃ":"wi","うぇ":"we","うぉ":"wo","じぇ":"je","ちぇ":"che","しぇ":"she","でゅ":"dyu","とぅ":"tu","どぅ":"du","ゔぁ":"va","ゔぃ":"vi" };
const KANA = { "あ":"a","い":"i","う":"u","え":"e","お":"o","か":"ka","き":"ki","く":"ku","け":"ke","こ":"ko","さ":"sa","し":"shi","す":"su","せ":"se","そ":"so","た":"ta","ち":"chi","つ":"tsu","て":"te","と":"to","な":"na","に":"ni","ぬ":"nu","ね":"ne","の":"no","は":"ha","ひ":"hi","ふ":"fu","へ":"he","ほ":"ho","ま":"ma","み":"mi","む":"mu","め":"me","も":"mo","や":"ya","ゆ":"yu","よ":"yo","ら":"ra","り":"ri","る":"ru","れ":"re","ろ":"ro","わ":"wa","を":"wo","ん":"n","が":"ga","ぎ":"gi","ぐ":"gu","げ":"ge","ご":"go","ざ":"za","じ":"ji","ず":"zu","ぜ":"ze","ぞ":"zo","だ":"da","ぢ":"ji","づ":"zu","で":"de","ど":"do","ば":"ba","び":"bi","ぶ":"bu","べ":"be","ぼ":"bo","ぱ":"pa","ぴ":"pi","ぷ":"pu","ぺ":"pe","ぽ":"po","ゔ":"vu","ぁ":"a","ぃ":"i","ぅ":"u","ぇ":"e","ぉ":"o" };
function romanize(input) {
  const kana = kataToHira(input);
  const syl = [];
  for (let i = 0; i < kana.length; i++) {
    const two = kana.slice(i, i + 2);
    if (YOON[two]) { syl.push(YOON[two]); i++; continue; }
    const c = kana[i];
    if (c === "っ") { syl.push("*"); continue; }
    if (c === "ー") { syl.push("-"); continue; }
    if (KANA[c] == null) return null;
    syl.push(KANA[c]);
  }
  let s = "";
  for (let i = 0; i < syl.length; i++) {
    if (syl[i] === "*") { const n = syl[i + 1] || ""; if (n) s += n[0] === "c" ? "t" : n[0]; continue; }
    if (syl[i] === "-") { const v = s.slice(-1); s = s.slice(0, -1) + ({ a:"ā", i:"ī", u:"ū", e:"ē", o:"ō" }[v] ?? v); continue; }
    s += syl[i];
  }
  return s.replace(/ou/g, "ō").replace(/oo/g, "ō").replace(/uu/g, "ū").replace(/aa/g, "ā");
}

const lines = readFileSync(`${SP}/n3.csv`, "utf8").split("\n").slice(1).filter(Boolean);
const corpusFronts = new Set();
for (const u of UNITS) for (const l of u.lessons ?? []) for (const it of l.items ?? []) corpusFronts.add(it.front);

const READING = /^[a-zāēīōū]+$/, BAD = /(ou|oo|uu)/;
const seen = new Set(), kept = [];
for (const line of lines) {
  const m = line.match(/^([^,]*),([^,]*),(?:"([^"]*)"|([^,]*)),/);
  if (!m) continue;
  const expr = m[1].trim(), kana = m[2].trim(), meaningRaw = (m[3] ?? m[4] ?? "").trim();
  if (!expr || !kana || !meaningRaw) continue;
  if (/[ 　;；()（）]/.test(expr)) continue;         // drop multiform / annotated interjection rows
  if (!/[ァ-ヶ]/.test(expr)) continue;              // loanwords only — must contain katakana (excludes kanji words)
  if (corpusFronts.has(expr) || seen.has(expr)) continue;
  const reading = romanize(kana);
  if (!reading || !READING.test(reading) || BAD.test(reading)) continue;
  seen.add(expr);
  const senses = meaningRaw.split(/[;,]/).map((s) => s.trim()).filter(Boolean);
  kept.push({ expr, reading, meaning: senses[0]?.toLowerCase() || "?", accept: senses.slice(1, 3).map((s) => s.toLowerCase()), allMeaning: meaningRaw, kana });
}

function slug(reading, used) {
  let base = reading.replace(/[āīūēō]/g, (c) => ({ "ā":"a","ī":"i","ū":"u","ē":"e","ō":"o" }[c])).replace(/[^a-z]/g, "") || "w";
  let s = base, n = 2;
  while (used.has(s)) s = base + n++;
  used.add(s);
  return s;
}

const PER_LESSON = 6, PER_UNIT = 24, START = 196;
const usedSlugs = new Set(), units = [];
for (let u = 0; u * PER_UNIT < kept.length; u++) {
  const order = START + u, chunk = kept.slice(u * PER_UNIT, (u + 1) * PER_UNIT), lessons = [];
  for (let l = 0; l * PER_LESSON < chunk.length; l++) {
    const lk = chunk.slice(l * PER_LESSON, (l + 1) * PER_LESSON);
    lessons.push({ id: `ja-u${order}l${l + 1}`, unit: order, lesson: l + 1, items: lk.map((w) => ({ id: `ja-u${order}l${l + 1}-${slug(w.reading, usedSlugs)}`, front: w.expr, reading: w.reading, meaning: w.meaning, accept: w.accept, allMeaning: w.allMeaning, kana: w.kana })) });
  }
  units.push({ order, id: `ja-u${order}`, lessons });
}

writeFileSync(`${SP}/n3-katakana-scaffold.json`, JSON.stringify(units, null, 1));
console.log(`KEPT ${kept.length} loanwords → ${units.length} units (orders ${START}–${START + units.length - 1}).`);
console.log("Sample:", kept.slice(0, 10).map((w) => `${w.expr}(${w.reading})=${w.meaning}`).join("  "));
