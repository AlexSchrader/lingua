// One-off: build the N3 kanji authoring scaffold. Reads the fetched kanji.json,
// selects the 366 N3 (jlpt_new===3) kanji NOT already in the corpus, orders them
// by frequency (most common first), romanizes a representative reading (Hepburn +
// macrons so it passes the reading validator), picks a meaning gloss, and chunks
// into units of 24 (4 lessons × 6). Emits scratchpad/n3-kanji-scaffold.json.
import { readFileSync, writeFileSync } from "node:fs";
import { UNITS } from "../src/data/index.js";

const SP = "/tmp/claude-0/-home-user-lingua/0950ba36-d4c0-5403-92cf-8e520c27b4a5/scratchpad";
const data = JSON.parse(readFileSync(`${SP}/kanji.json`, "utf8"));

// --- Hepburn romanizer: kana → romaji with long-vowel macrons ---------------
const YOON = {
  "きゃ":"kya","きゅ":"kyu","きょ":"kyo","しゃ":"sha","しゅ":"shu","しょ":"sho",
  "ちゃ":"cha","ちゅ":"chu","ちょ":"cho","にゃ":"nya","にゅ":"nyu","にょ":"nyo",
  "ひゃ":"hya","ひゅ":"hyu","ひょ":"hyo","みゃ":"mya","みゅ":"myu","みょ":"myo",
  "りゃ":"rya","りゅ":"ryu","りょ":"ryo","ぎゃ":"gya","ぎゅ":"gyu","ぎょ":"gyo",
  "じゃ":"ja","じゅ":"ju","じょ":"jo","びゃ":"bya","びゅ":"byu","びょ":"byo",
  "ぴゃ":"pya","ぴゅ":"pyu","ぴょ":"pyo",
};
const KANA = {
  "あ":"a","い":"i","う":"u","え":"e","お":"o",
  "か":"ka","き":"ki","く":"ku","け":"ke","こ":"ko",
  "さ":"sa","し":"shi","す":"su","せ":"se","そ":"so",
  "た":"ta","ち":"chi","つ":"tsu","て":"te","と":"to",
  "な":"na","に":"ni","ぬ":"nu","ね":"ne","の":"no",
  "は":"ha","ひ":"hi","ふ":"fu","へ":"he","ほ":"ho",
  "ま":"ma","み":"mi","む":"mu","め":"me","も":"mo",
  "や":"ya","ゆ":"yu","よ":"yo","ら":"ra","り":"ri","る":"ru","れ":"re","ろ":"ro",
  "わ":"wa","を":"wo","ん":"n",
  "が":"ga","ぎ":"gi","ぐ":"gu","げ":"ge","ご":"go",
  "ざ":"za","じ":"ji","ず":"zu","ぜ":"ze","ぞ":"zo",
  "だ":"da","ぢ":"ji","づ":"zu","で":"de","ど":"do",
  "ば":"ba","び":"bi","ぶ":"bu","べ":"be","ぼ":"bo",
  "ぱ":"pa","ぴ":"pi","ぷ":"pu","ぺ":"pe","ぽ":"po",
};
function romajiSyllables(kana) {
  const out = [];
  for (let i = 0; i < kana.length; i++) {
    const two = kana.slice(i, i + 2);
    if (YOON[two]) { out.push(YOON[two]); i++; continue; }
    const c = kana[i];
    if (c === "っ") { out.push("*"); continue; } // sokuon marker
    if (c === "ー") { out.push("-"); continue; }  // long-vowel bar marker
    out.push(KANA[c] ?? c);
  }
  return out;
}
function romanize(kana) {
  const syl = romajiSyllables(kana);
  let s = "";
  for (let i = 0; i < syl.length; i++) {
    if (syl[i] === "*") { // sokuon → double next consonant
      const nxt = syl[i + 1] || "";
      if (nxt) s += nxt[0] === "c" ? "t" : nxt[0]; // っち→tchi
      continue;
    }
    if (syl[i] === "-") { // ー lengthens previous vowel
      const v = s.slice(-1);
      s = s.slice(0, -1) + ({ a:"ā", i:"ī", u:"ū", e:"ē", o:"ō" }[v] ?? v);
      continue;
    }
    s += syl[i];
  }
  // Long-vowel folding to macrons. Long o/u REQUIRED as macron; ei/ii stay literal
  // (native pair rule); aa/ee → ā/ē. Process oo/ou/uu; leave ei, ii alone.
  s = s.replace(/ou/g, "ō").replace(/oo/g, "ō").replace(/uu/g, "ū").replace(/aa/g, "ā");
  return s;
}

// --- select + order N3 kanji -------------------------------------------------
const corpus = new Set();
for (const u of UNITS) for (const l of u.lessons ?? []) for (const it of l.items ?? []) corpus.add(it.front);

const n3 = Object.entries(data)
  .filter(([k, i]) => i.jlpt_new === 3 && !corpus.has(k))
  .sort((a, b) => (a[1].freq ?? 99999) - (b[1].freq ?? 99999)); // common first; freq-less last

function slug(romaji, used) {
  let base = romaji.replace(/[āīūēō]/g, (c) => ({ "ā":"a","ī":"i","ū":"u","ē":"e","ō":"o" }[c])).replace(/[^a-z]/g, "");
  let s = base, n = 2;
  while (used.has(s)) s = base + n++;
  used.add(s);
  return s;
}
function meaningOf(info) {
  const m = (info.meanings || []).find((x) => x && !/radical|counter/i.test(x)) || info.meanings?.[0] || "?";
  return m.toLowerCase().replace(/\s*\(.*?\)\s*/g, "").trim();
}
function readingOf(info) {
  const on = info.readings_on?.[0];
  const kun = info.readings_kun?.[0]?.split(".")[0];
  const kana = on || kun || "";
  return romanize(kana);
}

// chunk 366 → units of 24 (4 lessons × 6)
const PER_LESSON = 6, LESSONS = 4, PER_UNIT = PER_LESSON * LESSONS;
const START_ORDER = 103;
const units = [];
const usedSlugs = new Set();
for (let u = 0; u * PER_UNIT < n3.length; u++) {
  const order = START_ORDER + u;
  const unitKanji = n3.slice(u * PER_UNIT, (u + 1) * PER_UNIT);
  const lessons = [];
  for (let l = 0; l * PER_LESSON < unitKanji.length; l++) {
    const lk = unitKanji.slice(l * PER_LESSON, (l + 1) * PER_LESSON);
    lessons.push({
      id: `ja-u${order}l${l + 1}`, unit: order, lesson: l + 1,
      items: lk.map(([glyph, info]) => {
        const reading = readingOf(info);
        return {
          id: `ja-u${order}l${l + 1}-${slug(reading, usedSlugs)}`,
          glyph, reading, meaning: meaningOf(info),
          freq: info.freq ?? null,
          on: info.readings_on || [], kun: info.readings_kun || [],
          allMeanings: info.meanings || [],
        };
      }),
    });
  }
  units.push({ order, id: `ja-u${order}`, lessons });
}

writeFileSync(`${SP}/n3-kanji-scaffold.json`, JSON.stringify(units, null, 1));
const glyphs = n3.map(([k]) => k).join("");
writeFileSync(`${SP}/n3-glyphs.txt`, glyphs);
console.log(`N3 kanji to author: ${n3.length}  →  ${units.length} units (orders ${START_ORDER}–${START_ORDER + units.length - 1})`);
console.log("Sample readings:", units[0].lessons[0].items.map((i) => `${i.glyph}=${i.reading}(${i.meaning})`).join("  "));
