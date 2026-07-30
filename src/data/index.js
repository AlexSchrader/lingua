import { LANGUAGES } from "./languages.js";
import { VERB_GROUPS } from "./ja/verb-groups.js";
import { UNIT1 } from "./ja/unit1.js";
import { UNIT2 } from "./ja/unit2.js";
import { UNIT3 } from "./ja/unit3.js";
import { UNIT4 } from "./ja/unit4.js";
import { UNIT5 } from "./ja/unit5.js";
import { UNIT6 } from "./ja/unit6.js";
import { UNIT7 } from "./ja/unit7.js";
import { UNIT8 } from "./ja/unit8.js";
import { UNIT9 } from "./ja/unit9.js";
import { UNIT10 } from "./ja/unit10.js";
import { UNIT11 } from "./ja/unit11.js";
import { UNIT12 } from "./ja/unit12.js";
import { UNIT13 } from "./ja/unit13.js";
import { UNIT14 } from "./ja/unit14.js";
import { UNIT15 } from "./ja/unit15.js";
import { UNIT16 } from "./ja/unit16.js"; // yōon (pre-a1 kana digraphs)
import { UNIT17 } from "./ja/unit17.js";
import { UNIT18 } from "./ja/unit18.js";
import { UNIT19 } from "./ja/unit19.js"; // ぶんぽう — first grammar unit (copula sentence)
import { UNIT20 } from "./ja/unit20.js"; // ぶんぽう・2 — verbs & particles (を/に/が/で)
import { UNIT21 } from "./ja/unit21.js"; // ぶんぽう・3 — past tense & adjective conjugation
// --- A2 (N4) — activated 2026-07-12; ⚠️ pending batched native-speaker review ---
import { UNIT22 } from "./ja/unit22.js";
import { UNIT23 } from "./ja/unit23.js";
import { UNIT24 } from "./ja/unit24.js";
import { UNIT25 } from "./ja/unit25.js";
import { UNIT26 } from "./ja/unit26.js";
import { UNIT27 } from "./ja/unit27.js";
import { UNIT28 } from "./ja/unit28.js";
import { UNIT29 } from "./ja/unit29.js";
import { UNIT30 } from "./ja/unit30.js";
// --- A2 (N4) kanji arc — 141 new N4 kanji across 12 themed units ---
import { UNIT31 } from "./ja/unit31.js"; // かんじ・かぞく (family)
import { UNIT32 } from "./ja/unit32.js"; // かんじ・からだ (body & health)
import { UNIT33 } from "./ja/unit33.js"; // かんじ・どうし 1 (action verbs)
import { UNIT34 } from "./ja/unit34.js"; // かんじ・どうし 2 (motion verbs)
import { UNIT35 } from "./ja/unit35.js"; // かんじ・べんきょう (study & thought)
import { UNIT36 } from "./ja/unit36.js"; // かんじ・ことば (writing, arts & sound)
import { UNIT37 } from "./ja/unit37.js"; // かんじ・しごと (work & commerce)
import { UNIT38 } from "./ja/unit38.js"; // かんじ・きせつ (seasons & weather)
import { UNIT39 } from "./ja/unit39.js"; // かんじ・ばしょ (places & buildings)
import { UNIT40 } from "./ja/unit40.js"; // かんじ・いろ・たべもの (colors & food)
import { UNIT41 } from "./ja/unit41.js"; // かんじ・ようす (descriptive & state)
import { UNIT42 } from "./ja/unit42.js"; // かんじ・きのう (function & misc)
// --- A2 (N4) grammar arc (consolidated) + conjugation drills + vocab thickening ---
import { UNIT43 } from "./ja/unit43.js"; // ぶんぽう・4 (て-form; giving & receiving)
import { UNIT44 } from "./ja/unit44.js"; // ぶんぽう・5 (conditionals & ability; comparison; inference & quoting)
import { UNIT45 } from "./ja/unit45.js"; // どうし・かつよう (conjugation drill → conjugate card)
import { UNIT46 } from "./ja/unit46.js"; // どうし・うけみ (passive/causative/imperative drill)
import { UNIT47 } from "./ja/unit47.js"; // いえ・かじ (home & household)
import { UNIT48 } from "./ja/unit48.js"; // せいかく・きもち (personality & feelings)
import { UNIT49 } from "./ja/unit49.js"; // しゃかい・せいかつ (society & daily life)
import { UNIT50 } from "./ja/unit50.js"; // ぎじゅつ・つうしん (technology & communication)
import { UNIT51 } from "./ja/unit51.js"; // しぜん・かがく (nature & science)
import { UNIT52 } from "./ja/unit52.js"; // ぶんか・レジャー (culture & leisure)
// --- N5/N4 vocab thickening + coverage fill (U53–U98) ---
import { UNIT53 } from "./ja/unit53.js";
import { UNIT54 } from "./ja/unit54.js";
import { UNIT55 } from "./ja/unit55.js";
import { UNIT56 } from "./ja/unit56.js";
import { UNIT57 } from "./ja/unit57.js";
import { UNIT58 } from "./ja/unit58.js";
import { UNIT59 } from "./ja/unit59.js";
import { UNIT60 } from "./ja/unit60.js";
import { UNIT61 } from "./ja/unit61.js";
import { UNIT62 } from "./ja/unit62.js";
import { UNIT63 } from "./ja/unit63.js";
import { UNIT64 } from "./ja/unit64.js";
import { UNIT65 } from "./ja/unit65.js";
import { UNIT66 } from "./ja/unit66.js";
import { UNIT67 } from "./ja/unit67.js";
import { UNIT68 } from "./ja/unit68.js";
import { UNIT69 } from "./ja/unit69.js";
import { UNIT70 } from "./ja/unit70.js";
import { UNIT71 } from "./ja/unit71.js";
import { UNIT72 } from "./ja/unit72.js";
import { UNIT73 } from "./ja/unit73.js";
import { UNIT74 } from "./ja/unit74.js";
import { UNIT75 } from "./ja/unit75.js";
import { UNIT76 } from "./ja/unit76.js";
import { UNIT77 } from "./ja/unit77.js";
import { UNIT78 } from "./ja/unit78.js";
import { UNIT79 } from "./ja/unit79.js";
import { UNIT80 } from "./ja/unit80.js";
import { UNIT81 } from "./ja/unit81.js";
import { UNIT82 } from "./ja/unit82.js";
import { UNIT83 } from "./ja/unit83.js";
import { UNIT84 } from "./ja/unit84.js";
import { UNIT85 } from "./ja/unit85.js";
import { UNIT86 } from "./ja/unit86.js";
import { UNIT87 } from "./ja/unit87.js";
import { UNIT88 } from "./ja/unit88.js";
import { UNIT89 } from "./ja/unit89.js";
import { UNIT90 } from "./ja/unit90.js";
import { UNIT91 } from "./ja/unit91.js";
import { UNIT92 } from "./ja/unit92.js";
import { UNIT93 } from "./ja/unit93.js";
import { UNIT94 } from "./ja/unit94.js";
import { UNIT95 } from "./ja/unit95.js";
import { UNIT96 } from "./ja/unit96.js";
import { UNIT97 } from "./ja/unit97.js";
import { UNIT98 } from "./ja/unit98.js";
import { UNIT99 } from "./ja/unit99.js";

export const UNITS = [UNIT1, UNIT2, UNIT3, UNIT4, UNIT5, UNIT6, UNIT7, UNIT8, UNIT9, UNIT10, UNIT11, UNIT12, UNIT13, UNIT14, UNIT15, UNIT16, UNIT17, UNIT18, UNIT19, UNIT20, UNIT21, UNIT22, UNIT23, UNIT24, UNIT25, UNIT26, UNIT27, UNIT28, UNIT29, UNIT30, UNIT31, UNIT32, UNIT33, UNIT34, UNIT35, UNIT36, UNIT37, UNIT38, UNIT39, UNIT40, UNIT41, UNIT42, UNIT43, UNIT44, UNIT45, UNIT46, UNIT47, UNIT48, UNIT49, UNIT50, UNIT51, UNIT52, UNIT53, UNIT54, UNIT55, UNIT56, UNIT57, UNIT58, UNIT59, UNIT60, UNIT61, UNIT62, UNIT63, UNIT64, UNIT65, UNIT66, UNIT67, UNIT68, UNIT69, UNIT70, UNIT71, UNIT72, UNIT73, UNIT74, UNIT75, UNIT76, UNIT77, UNIT78, UNIT79, UNIT80, UNIT81, UNIT82, UNIT83, UNIT84, UNIT85, UNIT86, UNIT87, UNIT88, UNIT89, UNIT90, UNIT91, UNIT92, UNIT93, UNIT94, UNIT95, UNIT96, UNIT97, UNIT98, UNIT99];

// A language is "live" once it has authored content; catalog entries with no units
// yet are "planned". Derived, never stored — a language flips to live automatically
// the moment its first unit ships. Lets the UI show only what's real.
export const isLive = (langId) => UNITS.some((u) => u.lang === langId);

export { LANGUAGES };

// Flatten every lesson with playable items into a list of seed Items.
// `lang`, `unit`, and `lesson` are stamped onto each item here in code so the
// seed data files stay terse (no hand-repeating per item).
export function seedItems() {
  const out = {};
  for (const unit of UNITS) {
    for (const lesson of unit.lessons) {
      if (!lesson.items) continue; // locked stub lessons have no items yet
      for (const item of lesson.items) {
        out[item.id] = {
          ...item,
          lang: unit.lang,
          unit: lesson.unit,
          lesson: lesson.lesson,
          stage: unit.stage, // CEFR stage, used e.g. by the produce card's rōmaji on-ramp
          // Verb class for the conjugate engine — stamped from verb-groups.js by the
          // ～ます front, unless the item already authors its own group. Non-verbs stay
          // undefined and never route to the conjugate card.
          group: item.group ?? VERB_GROUPS[item.front],
          meaning: item.meaning ?? null,
          example: item.example ?? null,
          accept: item.accept ?? [], // optional synonyms accepted for typed answers
          // srs (an FSRS card) is attached by the store's seedOnce, not here,
          // so this stays a pure content loader.
          rung: 0,
        };
      }
    }
  }
  return out;
}

// Look up a lesson definition (with its items) by id.
export function getLesson(lessonId) {
  for (const unit of UNITS) {
    for (const lesson of unit.lessons) {
      if (lesson.id === lessonId) return { ...lesson, lang: unit.lang };
    }
  }
  return null;
}
