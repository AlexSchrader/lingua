import { LANGUAGES } from "./languages.js";
import { VERB_GROUPS } from "./ja/verb-groups.js";
// One import per LANGUAGE, never per unit. Each language owns a generated barrel
// (src/data/<lang>/index.js) so authoring a unit touches only that language's
// directory — parallel curriculum sessions can run without editing a shared file.
// Adding a language = one import + one spread below. See
// BUILD-BRIEF-language-blueprint.md §3b.
import { JA_UNITS } from "./ja/index.js";
import { FR_UNITS } from "./fr/index.js";
import { ES_UNITS } from "./es/index.js";
import { DE_UNITS } from "./de/index.js";

// Order is ja-then-fr, matching the previous hand-maintained array. Nothing reads
// array position (the Ladder sorts on each unit's own `order`), but keeping it
// stable keeps diffs and fixtures honest.
export const UNITS = [...JA_UNITS, ...FR_UNITS, ...ES_UNITS, ...DE_UNITS];

// A language is "live" once it has PLAYABLE authored content; catalog entries with
// no units yet — or with nothing but scaffold stubs — are "planned". Derived, never
// stored, so a language flips to live automatically the moment its first real
// lesson ships. Lets the UI show only what's real.
//
// "Has a unit" is deliberately NOT the test. `npm run scaffold:lang` writes the
// whole band template up front as locked stubs (so the tree validates green while a
// crew authors it one unit at a time), which means a language can have 20 units and
// zero learnable items for as long as authoring takes. Counting those as live would
// put an empty language in the picker and — worse — read as real content to the
// stale-save migration in useStore, which uses "no content" as its signature for a
// pre-language-choice save. See BUILD-BRIEF-language-blueprint.md §3c.
export const hasPlayableContent = (units, langId) =>
  units.some(
    (u) =>
      u.lang === langId &&
      Array.isArray(u.lessons) &&
      u.lessons.some((l) => !l.locked && l.items?.length)
  );

export const isLive = (langId) => hasPlayableContent(UNITS, langId);

export { LANGUAGES };

// A language's units in CLIMB order — `order`, never file/barrel order. The two
// genuinely disagree: French deliberately gives `fr-u27` ("Les sons") `order: 1`
// so the sounds unit opens the climb, which shifts the `order` of all 27 fr A1
// units one above their id number. Any surface that walks a language by barrel
// position therefore SERVES lessons in file order while LABELLING them from
// `order` — Today did exactly that, opening French on "Salutations" printed as
// "Unit 2" and queueing unit 1 behind 26 others. Sorting lives here, once, so the
// screens can't drift apart again.
export const orderedUnits = (langId) =>
  UNITS.filter((u) => u.lang === langId)
    .slice()
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

// Every playable (non-stub) lesson of a language, in climb order.
export const playableLessons = (langId) =>
  orderedUnits(langId).flatMap((u) => u.lessons.filter((l) => Array.isArray(l.items)));

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
