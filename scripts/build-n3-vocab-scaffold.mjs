// Build the N3 vocab authoring scaffold from the open-anki-jlpt-decks n3.csv.
// Dedups, drops words already in the corpus (front collision) or that collide with
// each other, romanizes the kana reading (macron-correct so it passes the reading
// validator), cleans the meaning, and chunks into units of 24 (4 lessons × 6),
// starting at order 119. Emits scratchpad/n3-vocab-scaffold.json + a validity report.
import { readFileSync, writeFileSync } from "node:fs";
import { UNITS } from "../src/data/index.js";

const SP = "/tmp/claude-0/-home-user-lingua/0950ba36-d4c0-5403-92cf-8e520c27b4a5/scratchpad";

// --- Hepburn romanizer (same rules as the kanji scaffold) ---
const YOON = { "きゃ":"kya","きゅ":"kyu","きょ":"kyo","しゃ":"sha","しゅ":"shu","しょ":"sho","ちゃ":"cha","ちゅ":"chu","ちょ":"cho","にゃ":"nya","にゅ":"nyu","にょ":"nyo","ひゃ":"hya","ひゅ":"hyu","ひょ":"hyo","みゃ":"mya","みゅ":"myu","みょ":"myo","りゃ":"rya","りゅ":"ryu","りょ":"ryo","ぎゃ":"gya","ぎゅ":"gyu","ぎょ":"gyo","じゃ":"ja","じゅ":"ju","じょ":"jo","びゃ":"bya","びゅ":"byu","びょ":"byo","ぴゃ":"pya","ぴゅ":"pyu","ぴょ":"pyo" };
const KANA = { "あ":"a","い":"i","う":"u","え":"e","お":"o","か":"ka","き":"ki","く":"ku","け":"ke","こ":"ko","さ":"sa","し":"shi","す":"su","せ":"se","そ":"so","た":"ta","ち":"chi","つ":"tsu","て":"te","と":"to","な":"na","に":"ni","ぬ":"nu","ね":"ne","の":"no","は":"ha","ひ":"hi","ふ":"fu","へ":"he","ほ":"ho","ま":"ma","み":"mi","む":"mu","め":"me","も":"mo","や":"ya","ゆ":"yu","よ":"yo","ら":"ra","り":"ri","る":"ru","れ":"re","ろ":"ro","わ":"wa","を":"wo","ん":"n","が":"ga","ぎ":"gi","ぐ":"gu","げ":"ge","ご":"go","ざ":"za","じ":"ji","ず":"zu","ぜ":"ze","ぞ":"zo","だ":"da","ぢ":"ji","づ":"zu","で":"de","ど":"do","ば":"ba","び":"bi","ぶ":"bu","べ":"be","ぼ":"bo","ぱ":"pa","ぴ":"pi","ぷ":"pu","ぺ":"pe","ぽ":"po","ぁ":"a","ぃ":"i","ぅ":"u","ぇ":"e","ぉ":"o" };
function romanize(kana) {
  const syl = [];
  for (let i = 0; i < kana.length; i++) {
    const two = kana.slice(i, i + 2);
    if (YOON[two]) { syl.push(YOON[two]); i++; continue; }
    const c = kana[i];
    if (c === "っ") { syl.push("*"); continue; }
    if (c === "ー") { syl.push("-"); continue; }
    if (KANA[c] == null) return null; // non-kana char in reading → unromanizable
    syl.push(KANA[c]);
  }
  let s = "";
  for (let i = 0; i < syl.length; i++) {
    if (syl[i] === "*") { const n = syl[i + 1] || ""; if (n) s += n[0] === "c" ? "t" : n[0]; continue; }
    if (syl[i] === "-") { const v = s.slice(-1); s = s.slice(0, -1) + ({ a:"ā", i:"ī", u:"ū", e:"ē", o:"ō" }[v] ?? v); continue; }
    s += syl[i];
  }
  s = s.replace(/ou/g, "ō").replace(/oo/g, "ō").replace(/uu/g, "ū").replace(/aa/g, "ā");
  return s;
}

// --- parse CSV (expression,reading,meaning,tags,guid) with quoted meaning ---
const lines = readFileSync(`${SP}/n3.csv`, "utf8").split("\n").slice(1).filter(Boolean);
const rows = [];
for (const line of lines) {
  // expression, reading, then meaning may be quoted and contain commas
  const m = line.match(/^([^,]*),([^,]*),(?:"([^"]*)"|([^,]*)),/);
  if (!m) continue;
  const expr = m[1].trim();
  const reading = m[2].trim();
  const meaning = (m[3] ?? m[4] ?? "").trim();
  if (expr && reading && meaning) rows.push({ expr, reading, meaning });
}

const corpusFronts = new Set();
for (const u of UNITS) for (const l of u.lessons ?? []) for (const it of l.items ?? []) corpusFronts.add(it.front);

const READING_CHARSET = /^[a-zāēīōū]+$/, BAD = /(ou|oo|uu)/;
const seen = new Set();
const kept = [];
const dropped = { collision: 0, dupe: 0, badReading: 0 };
for (const r of rows) {
  if (corpusFronts.has(r.expr)) { dropped.collision++; continue; }
  if (seen.has(r.expr)) { dropped.dupe++; continue; }
  const reading = romanize(r.reading);
  if (!reading || !READING_CHARSET.test(reading) || BAD.test(reading)) { dropped.badReading++; continue; }
  seen.add(r.expr);
  // meaning: first 1–2 senses, lowercase
  const senses = r.meaning.split(/[;,]/).map((s) => s.trim()).filter(Boolean);
  const meaning = senses[0]?.toLowerCase() || "?";
  const accept = senses.slice(1, 3).map((s) => s.toLowerCase());
  kept.push({ expr: r.expr, reading, meaning, accept, allMeaning: r.meaning, kana: r.reading });
}

// --- slug helper (unique per item) ---
function slug(reading, used) {
  let base = reading.replace(/[āīūēō]/g, (c) => ({ "ā":"a","ī":"i","ū":"u","ē":"e","ō":"o" }[c])).replace(/[^a-z]/g, "");
  if (!base) base = "w";
  let s = base, n = 2;
  while (used.has(s)) s = base + n++;
  used.add(s);
  return s;
}

const PER_LESSON = 6, LESSONS = 4, PER_UNIT = PER_LESSON * LESSONS, START = 119;
const usedSlugs = new Set();
const units = [];
for (let u = 0; u * PER_UNIT < kept.length; u++) {
  const order = START + u;
  const chunk = kept.slice(u * PER_UNIT, (u + 1) * PER_UNIT);
  const lessons = [];
  for (let l = 0; l * PER_LESSON < chunk.length; l++) {
    const lk = chunk.slice(l * PER_LESSON, (l + 1) * PER_LESSON);
    lessons.push({
      id: `ja-u${order}l${l + 1}`, unit: order, lesson: l + 1,
      items: lk.map((w) => ({
        id: `ja-u${order}l${l + 1}-${slug(w.reading, usedSlugs)}`,
        front: w.expr, reading: w.reading, meaning: w.meaning, accept: w.accept,
        allMeaning: w.allMeaning, kana: w.kana,
      })),
    });
  }
  units.push({ order, id: `ja-u${order}`, lessons });
}

writeFileSync(`${SP}/n3-vocab-scaffold.json`, JSON.stringify(units, null, 1));
console.log(`Parsed ${rows.length} deck rows. Dropped: ${dropped.collision} corpus-collision, ${dropped.dupe} dupe, ${dropped.badReading} bad-reading.`);
console.log(`KEPT ${kept.length} words → ${units.length} units (orders ${START}–${START + units.length - 1}).`);
console.log("Sample:", kept.slice(0, 8).map((w) => `${w.expr}(${w.reading})=${w.meaning}`).join("  "));
