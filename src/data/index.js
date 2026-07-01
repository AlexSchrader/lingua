import { LANGUAGES } from "./ja/languages.js";
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

export const UNITS = [UNIT1, UNIT2, UNIT3, UNIT4, UNIT5, UNIT6, UNIT7, UNIT8, UNIT9, UNIT10, UNIT11, UNIT12, UNIT13, UNIT14, UNIT15, UNIT16, UNIT17, UNIT18, UNIT19, UNIT20];

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
