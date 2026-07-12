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

// B1 vocab units so far (grammar waits on the conjugation-engine extension — see
// BUILD-BRIEF-conjugation-b1-forms.md; N3 kanji is a deferred later batch).
export const B1_DRAFT_UNITS = [UNIT45, UNIT46, UNIT47, UNIT48, UNIT49, UNIT50, UNIT51];

// One representative lesson per unit, for a quick cross-section preview.
export const B1_SAMPLER_LESSON_IDS = [
  "ja-u45l1", // opinions
  "ja-u46l1", // worry & hope
  "ja-u47l1", // state & citizens
  "ja-u48l1", // connectives
  "ja-u49l1", // finding a job
  "ja-u50l1", // news & media
  "ja-u51l1", // describing things
];
