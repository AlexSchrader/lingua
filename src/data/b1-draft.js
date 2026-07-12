// B1 DRAFT REGISTRY — the preview-only handle for the unactivated B1 units.
// ─────────────────────────────────────────────────────────────────────────────
// Same pattern as a2-draft.js: these units are NOT in `UNITS` (src/data/index.js),
// so they are NOT seeded, NOT on the Ladder, and invisible to the live app. Imported
// ONLY by the Dev-Mode preview + the pre-activation gate. Activation (once A2 is
// reconciled to main and B1 is greenlit): import into index.js, append to UNITS,
// delete this file.
// ─────────────────────────────────────────────────────────────────────────────
import { UNIT45 } from "./ja/unit45.js";
import { UNIT46 } from "./ja/unit46.js";
import { UNIT47 } from "./ja/unit47.js";
import { UNIT48 } from "./ja/unit48.js";
import { UNIT49 } from "./ja/unit49.js";
import { UNIT50 } from "./ja/unit50.js";
import { UNIT51 } from "./ja/unit51.js";
import { UNIT52 } from "./ja/unit52.js";
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

// B1 units so far: vocab U45-64 + pattern-grammar U65-66 (function-word vocab) + N3 kanji
// U67+ (type:"kanji", KanjiVG strokes fetched into kanjivg.js via KANJI_N3). The
// passive/causative conjugation DRILLS still wait on the engine extension (see
// BUILD-BRIEF-conjugation-b1-forms.md).
export const B1_DRAFT_UNITS = [UNIT45, UNIT46, UNIT47, UNIT48, UNIT49, UNIT50, UNIT51, UNIT52, UNIT53, UNIT54, UNIT55, UNIT56, UNIT57, UNIT58, UNIT59, UNIT60, UNIT61, UNIT62, UNIT63, UNIT64, UNIT65, UNIT66, UNIT67];

// One representative lesson per unit, for a quick cross-section preview.
export const B1_SAMPLER_LESSON_IDS = [
  "ja-u45l1", // opinions
  "ja-u46l1", // worry & hope
  "ja-u47l1", // state & citizens
  "ja-u48l1", // connectives
  "ja-u49l1", // finding a job
  "ja-u50l1", // news & media
  "ja-u51l1", // describing things
  "ja-u52l1", // eras & periods
  "ja-u53l1", // amounts & parts
  "ja-u54l1", // health & condition
  "ja-u55l1", // nature & climate
  "ja-u56l1", // people & roles
  "ja-u57l1", // manners & conduct
  "ja-u58l1", // conversation
  "ja-u59l1", // the economy
  "ja-u60l1", // study & school
  "ja-u61l1", // science
  "ja-u62l1", // getting around
  "ja-u63l1", // thinking & judging verbs
  "ja-u64l1", // persisting verbs
  "ja-u65l1", // grammar: manner & tendency
  "ja-u66l1", // grammar: relation & reason
  "ja-u67l1", // kanji: government
];
