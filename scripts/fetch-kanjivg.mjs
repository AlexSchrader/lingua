#!/usr/bin/env node
/**
 * Fetch KanjiVG stroke-order SVG data for every kana in Unit 1 and emit
 * src/data/kanjivg.js — a static map of { char → [svgPathString, ...] }.
 *
 * KanjiVG is CC BY-SA 3.0: https://kanjivg.tagaini.net
 * Run once (or whenever new kana are added): node scripts/fetch-kanjivg.mjs
 */

import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dir, "..");

// Kana that need stroke data — every kana item in the curriculum must have an
// entry (the content contract hard-errors otherwise). Grows as units ship.
//   base 46 hiragana (Units 1-2) + 25 dakuten/handakuten (Unit 3)
//   + full katakana: vowels→n-row (Unit 4), h/m/y/r/w rows + ン (Unit 5),
//     and g/z/d/b/p dakuten+handakuten rows (Unit 6).
const HIRAGANA = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
const DAKUTEN = "がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ";
const KATAKANA = "アイウエオカキクケコサシスセソタチツテトナニヌネノ" + // Unit 4
  "ハヒフヘホマミムメモヤユヨラリルレロワヲン" +                       // Unit 5
  "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";                  // Unit 6
// Kanji — N5 set, grows as kanji units ship.
const KANJI = "一二三四五六七八九十" + // numbers (Unit 11)
  "日月火水木金土山川田天" +            // days / nature (Unit 11, 13)
  "人大小中上下" +                      // people / position (Unit 11)
  "何時分半午曜週年今毎" +              // time / calendar (Unit 13)
  "行来見出入食飲言聞読" +              // everyday verbs (Unit 14)
  "父母男女子学校生先友" +              // people / school (Unit 15)
  "百千万円右左前後外間" +              // numbers / money / position (Unit 17)
  "東西南北道駅店国本名" +              // compass / places (Unit 18)
  "書話立休買会待知作持" +              // more verbs (Unit 19)
  "高安新古多少長白気元" +              // adjectives / state (Unit 20)
  "目耳口手足雨電車私語" +               // body / nature (Unit 21)
  // --- N4 kanji (Units 31–42), 141 new glyphs ---
  "者自家主親族兄弟姉妹世代" +           // family (U31)
  "体医病死心力味" +                     // body / health (U32)
  "発動開通使集送起着運" +               // action verbs 1 (U33)
  "始終止切転走歩帰住去" +               // action verbs 2 (U34)
  "問答思意題考教習研究試験" +           // study & thought (U35)
  "字文漢英図音歌写映注画紙" +           // writing, arts & sound (U36)
  "売借貸品料計質銀仕業工建勉事員" +     // work & commerce (U37)
  "春夏秋冬昼夜朝夕花海空風" +           // nature & seasons (U38)
  "社地場京院界町館屋堂室台野" +         // places & buildings (U39)
  "赤青黒色明肉飯茶牛魚鳥犬" +           // colors & food (U40)
  "同正不無有特別物強広早急重楽悪" +     // descriptive (U41)
  "度用以近方理公洋服旅真";              // function & misc (U42)

// --- N3 kanji (B1 band) — fetched AHEAD of authoring, deliberately -------------
// Every kanji item hard-errors without stroke data, and the documented workflow
// ("add the glyph here, re-run") is a shared-file edit — fine for one author, a
// three-way conflict for a parallel crew, on the one file the per-language barrel
// exists to keep them out of. So the whole band's stroke data is fetched ONCE up
// front, exactly like scaffolding, and no authoring seat ever touches this file.
//
// This is a SUPERSET to draw from, not a syllabus: a glyph nobody teaches costs
// only bytes, while a missing one blocks a unit. The fetch logs and skips any
// character KanjiVG lacks, so an imperfect list degrades loudly, never silently.
// If a crew does need one that isn't here, the per-glyph path still works.
const KANJI_N3 =
  "愛暗位偉違育因引越園演煙押横王温化科果過解回快格確覚額掛割活寒完" +
  "官管簡関願喜幾期機記規貴議客求泣救給居許共供橋局曲勤禁均型景経警" +
  "迎欠決件権険現戸庫湖向幸港号根祭細材昨察殺雑参散産賛残士支史志" +
  "枝師資飼示似識失実若取守種酒受収周就州拾終習集住重宿祝順初所暑助" +
  "昇消商章勝乗常情条状職植信寝深申神進吸数寸成政晴精製税席積接絶" +
  "舌説雪戦選然全組相争窓総想像増造側則測束速族続存尊他打対退隊代第" +
  "題達単担探団断値置遅築注柱丁帳張直追痛低停底適転点伝徒努渡怒党島" +
  "投湯統等到答童得毒独届難任熱念燃悩能派破敗杯配倍箱畑反判板悲比非" +
  "飛費備必表評秒品負部風副復複払仏粉平閉並米辺変返便募報豊防貿暴末" +
  "満未民務夢無命迷鳴綿面戻約役薬油輸予余預容様養欲頼落乱卵利陸律略" +
  "流留両良量領緑林礼列練路老労録和";

// N2, for the B2 band. Added 2026-08-14, immediately after B1 shipped and left the
// pool at EXACTLY ZERO untaught glyphs: all 568 kanji entries were consumed, 320 of
// them by B1's character strand. A B2 crew starting today could not teach a single
// new glyph, and the first seat to notice would be the one editing this shared file
// mid-flight — precisely the failure the paragraph above exists to prevent.
// Overlap with N3 is deliberate and free: the Set below dedupes, and stating the
// real N2 list beats hand-pruning it and getting the difference wrong.
const KANJI_N2 =
  "圧移囲委胃衣印栄永営液益演往応恩仮価河可賀解快格確額刊幹慣眼基寄" +
  "規喜技逆久旧居巨許境均禁句訓群経潔件券検限個故護効厚耕構講鉱混査" +
  "再妻採災際在罪財雑酸賛士支枝師志資飼似示識質舎謝授修述術準序招承" +
  "証条状常情織職制勢性政精製税責績接設絶祖素総像増造則測属率損退貸" +
  "態団断築張提程敵適統銅導徳独燃破判版比肥非俵評貧婦布富武復複仏編" +
  "弁保墓報豊防貿暴脈夢綿輸余預容略留領歴" +
  // second tranche — the rest of the common jōyō set a B2 band draws on. The
  // first tranche alone yielded only 103 genuinely-new glyphs after deduping
  // against N5/N4/N3, which supports ~6 character units, not the 20 the band
  // template calls for.
  "沿延縁汚奥憶加荷課貨芽介灰械皆絵較刻骨困砂座済裁策冊姿詞誌磁射捨" +
  "尺樹宗衆従縦縮熟純処署諸除将傷城蒸針仁垂推盛聖誠宣専泉洗染銭善奏" +
  "創装層操蔵臓宅誕暖宙忠著庁頂潮賃展糖乳認納脳拝背肺俳班晩否批秘腹" +
  "奮陛片補暮宝訪亡忘棒枚幕密盟模訳郵優幼翌覧裏臨朗論";

// Defensive filter: only kana and CJK ideographs are fetchable KanjiVG glyphs.
// A stray Latin letter or lookalike in the lists above would otherwise become its
// own doomed request and a confusing per-character ERROR line. This is load-bearing
// for the N2 list, which was typed by hand and is expected to carry a stray or two.
const IS_GLYPH = /[぀-ヿ一-鿿]/;
const kanaChars = [
  ...new Set((HIRAGANA + DAKUTEN + KATAKANA + KANJI + KANJI_N3 + KANJI_N2).split("")),
].filter((c) => IS_GLYPH.test(c));

console.log(`Fetching KanjiVG data for ${kanaChars.length} characters: ${kanaChars.join(" ")}\n`);

const result = {};

for (const char of kanaChars) {
  const cp = char.codePointAt(0).toString(16).padStart(5, "0");
  const url = `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${cp}.svg`;

  process.stdout.write(`  ${char} (${cp})  `);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const svg = await res.text();

    // Extract path d= attributes in stroke order (id ends with -s1, -s2, ...)
    const paths = [];
    const re = /id="kvg:[^"]*-s\d+"[^>]*d="([^"]+)"/g;
    let m;
    while ((m = re.exec(svg)) !== null) paths.push(m[1]);

    if (paths.length === 0) throw new Error("no strokes found");
    result[char] = paths;
    console.log(`${paths.length} strokes`);
  } catch (err) {
    console.log(`ERROR: ${err.message}`);
  }
}

// Emit JS module
const lines = [
  "// Auto-generated by scripts/fetch-kanjivg.mjs — do not edit by hand.",
  "// KanjiVG CC BY-SA 3.0 https://kanjivg.tagaini.net",
  "// Stroke paths are in 109×109 SVG coordinate space.",
  "export const KANJIVG = {",
];
for (const [char, paths] of Object.entries(result)) {
  lines.push(`  "${char}": [`);
  for (const p of paths) lines.push(`    "${p}",`);
  lines.push(`  ],`);
}
lines.push("};");

const out = join(ROOT, "src", "data", "kanjivg.js");
writeFileSync(out, lines.join("\n") + "\n");
console.log(`\nWrote ${out}`);
