// Japanese units — the per-language barrel. Adding a unit touches THIS file and
// nothing else; src/data/index.js imports one line per language, so parallel
// authoring sessions never edit a shared file. See
// BUILD-BRIEF-language-blueprint.md §3b. Generated shape — keep it mechanical.
import { UNIT1 } from "./unit1.js";
import { UNIT2 } from "./unit2.js";
import { UNIT3 } from "./unit3.js";
import { UNIT4 } from "./unit4.js";
import { UNIT5 } from "./unit5.js";
import { UNIT6 } from "./unit6.js";
import { UNIT7 } from "./unit7.js";
import { UNIT8 } from "./unit8.js";
import { UNIT9 } from "./unit9.js";
import { UNIT10 } from "./unit10.js";
import { UNIT11 } from "./unit11.js";
import { UNIT12 } from "./unit12.js";
import { UNIT13 } from "./unit13.js";
import { UNIT14 } from "./unit14.js";
import { UNIT15 } from "./unit15.js";
import { UNIT16 } from "./unit16.js"; // yōon (pre-a1 kana digraphs)
import { UNIT17 } from "./unit17.js";
import { UNIT18 } from "./unit18.js";
import { UNIT19 } from "./unit19.js"; // ぶんぽう — first grammar unit (copula sentence)
import { UNIT20 } from "./unit20.js"; // ぶんぽう・2 — verbs & particles (を/に/が/で)
import { UNIT21 } from "./unit21.js"; // ぶんぽう・3 — past tense & adjective conjugation
// --- A2 (N4) — activated 2026-07-12; ⚠️ pending batched native-speaker review ---
import { UNIT22 } from "./unit22.js";
import { UNIT23 } from "./unit23.js";
import { UNIT24 } from "./unit24.js";
import { UNIT25 } from "./unit25.js";
import { UNIT26 } from "./unit26.js";
import { UNIT27 } from "./unit27.js";
import { UNIT28 } from "./unit28.js";
import { UNIT29 } from "./unit29.js";
import { UNIT30 } from "./unit30.js";
// --- A2 (N4) kanji arc — 141 new N4 kanji across 12 themed units ---
import { UNIT31 } from "./unit31.js"; // かんじ・かぞく (family)
import { UNIT32 } from "./unit32.js"; // かんじ・からだ (body & health)
import { UNIT33 } from "./unit33.js"; // かんじ・どうし 1 (action verbs)
import { UNIT34 } from "./unit34.js"; // かんじ・どうし 2 (motion verbs)
import { UNIT35 } from "./unit35.js"; // かんじ・べんきょう (study & thought)
import { UNIT36 } from "./unit36.js"; // かんじ・ことば (writing, arts & sound)
import { UNIT37 } from "./unit37.js"; // かんじ・しごと (work & commerce)
import { UNIT38 } from "./unit38.js"; // かんじ・きせつ (seasons & weather)
import { UNIT39 } from "./unit39.js"; // かんじ・ばしょ (places & buildings)
import { UNIT40 } from "./unit40.js"; // かんじ・いろ・たべもの (colors & food)
import { UNIT41 } from "./unit41.js"; // かんじ・ようす (descriptive & state)
import { UNIT42 } from "./unit42.js"; // かんじ・きのう (function & misc)
// --- A2 (N4) grammar arc (consolidated) + conjugation drills + vocab thickening ---
import { UNIT43 } from "./unit43.js"; // ぶんぽう・4 (て-form; giving & receiving)
import { UNIT44 } from "./unit44.js"; // ぶんぽう・5 (conditionals & ability; comparison; inference & quoting)
import { UNIT45 } from "./unit45.js"; // どうし・かつよう (conjugation drill → conjugate card)
import { UNIT46 } from "./unit46.js"; // どうし・うけみ (passive/causative/imperative drill)
import { UNIT47 } from "./unit47.js"; // いえ・かじ (home & household)
import { UNIT48 } from "./unit48.js"; // せいかく・きもち (personality & feelings)
import { UNIT49 } from "./unit49.js"; // しゃかい・せいかつ (society & daily life)
import { UNIT50 } from "./unit50.js"; // ぎじゅつ・つうしん (technology & communication)
import { UNIT51 } from "./unit51.js"; // しぜん・かがく (nature & science)
import { UNIT52 } from "./unit52.js"; // ぶんか・レジャー (culture & leisure)
// --- N5/N4 vocab thickening + coverage fill (U53–U98) ---
import { UNIT53 } from "./unit53.js";
import { UNIT54 } from "./unit54.js";
import { UNIT55 } from "./unit55.js";
import { UNIT56 } from "./unit56.js";
import { UNIT57 } from "./unit57.js";
import { UNIT58 } from "./unit58.js";
import { UNIT59 } from "./unit59.js";
import { UNIT60 } from "./unit60.js";
import { UNIT61 } from "./unit61.js";
import { UNIT62 } from "./unit62.js";
import { UNIT63 } from "./unit63.js";
import { UNIT64 } from "./unit64.js";
import { UNIT65 } from "./unit65.js";
import { UNIT66 } from "./unit66.js";
import { UNIT67 } from "./unit67.js";
import { UNIT68 } from "./unit68.js";
import { UNIT69 } from "./unit69.js";
import { UNIT70 } from "./unit70.js";
import { UNIT71 } from "./unit71.js";
import { UNIT72 } from "./unit72.js";
import { UNIT73 } from "./unit73.js";
import { UNIT74 } from "./unit74.js";
import { UNIT75 } from "./unit75.js";
import { UNIT76 } from "./unit76.js";
import { UNIT77 } from "./unit77.js";
import { UNIT78 } from "./unit78.js";
import { UNIT79 } from "./unit79.js";
import { UNIT80 } from "./unit80.js";
import { UNIT81 } from "./unit81.js";
import { UNIT82 } from "./unit82.js";
import { UNIT83 } from "./unit83.js";
import { UNIT84 } from "./unit84.js";
import { UNIT85 } from "./unit85.js";
import { UNIT86 } from "./unit86.js";
import { UNIT87 } from "./unit87.js";
import { UNIT88 } from "./unit88.js";
import { UNIT89 } from "./unit89.js";
import { UNIT90 } from "./unit90.js";
import { UNIT91 } from "./unit91.js";
import { UNIT92 } from "./unit92.js";
import { UNIT93 } from "./unit93.js";
import { UNIT94 } from "./unit94.js";
import { UNIT95 } from "./unit95.js";
import { UNIT96 } from "./unit96.js";
import { UNIT97 } from "./unit97.js";
import { UNIT98 } from "./unit98.js";

export const JA_UNITS = [
  UNIT1, UNIT2, UNIT3, UNIT4, UNIT5, UNIT6, UNIT7, UNIT8, UNIT9, UNIT10, UNIT11, UNIT12, UNIT13, UNIT14, UNIT15, UNIT16, UNIT17, UNIT18, UNIT19, UNIT20, UNIT21, UNIT22, UNIT23, UNIT24, UNIT25, UNIT26, UNIT27, UNIT28, UNIT29, UNIT30, UNIT31, UNIT32, UNIT33, UNIT34, UNIT35, UNIT36, UNIT37, UNIT38, UNIT39, UNIT40, UNIT41, UNIT42, UNIT43, UNIT44, UNIT45, UNIT46, UNIT47, UNIT48, UNIT49, UNIT50, UNIT51, UNIT52, UNIT53, UNIT54, UNIT55, UNIT56, UNIT57, UNIT58, UNIT59, UNIT60, UNIT61, UNIT62, UNIT63, UNIT64, UNIT65, UNIT66, UNIT67, UNIT68, UNIT69, UNIT70, UNIT71, UNIT72, UNIT73, UNIT74, UNIT75, UNIT76, UNIT77, UNIT78, UNIT79, UNIT80, UNIT81, UNIT82, UNIT83, UNIT84, UNIT85, UNIT86, UNIT87, UNIT88, UNIT89, UNIT90, UNIT91, UNIT92, UNIT93, UNIT94, UNIT95, UNIT96, UNIT97, UNIT98,
];
