// A2 DRAFT REGISTRY — the preview-only handle for the unactivated A2 units.
// ─────────────────────────────────────────────────────────────────────────────
// These units are NOT in `UNITS` (src/data/index.js), so they are NOT seeded, NOT
// on the Ladder, and invisible to the live app. This module is imported ONLY by the
// Dev-Mode A2 preview (see BUILD-BRIEF-a2-devmode-preview.md) so Alex can feel A2
// cards in the throwaway sandbox before A2 is activated. When A1 is native-reviewed
// and A2 is greenlit, the activation step is: import these in index.js and append
// them to UNITS — then delete this file.
// ─────────────────────────────────────────────────────────────────────────────
import { UNIT22 } from "./ja/unit22.js";
import { UNIT23 } from "./ja/unit23.js";
import { UNIT24 } from "./ja/unit24.js";
import { UNIT25 } from "./ja/unit25.js";
import { UNIT26 } from "./ja/unit26.js";
import { UNIT27 } from "./ja/unit27.js";
import { UNIT28 } from "./ja/unit28.js";
import { UNIT29 } from "./ja/unit29.js";
import { UNIT30 } from "./ja/unit30.js";
import { UNIT31 } from "./ja/unit31.js";

// The A2 draft units, in order. Same shape as `UNITS`, so the existing Dev-Mode
// sandbox launcher runs any of their lessons with zero new card wiring — vocab items
// use teach/choice/type/build, and kanji units (U31+) use the trace card too, all of
// which already exist.
export const A2_DRAFT_UNITS = [
  UNIT22, UNIT23, UNIT24, UNIT25, UNIT26, UNIT27, UNIT28, UNIT29, UNIT30, UNIT31,
];

// A curated "lil snippets" set — one representative lesson per unit, for a quick
// cross-section feel of A2 without running all 36 lessons. (The preview can also
// let you launch any A2 unit/lesson directly.)
export const A2_SAMPLER_LESSON_IDS = [
  "ja-u22l1", // verbs — getting around
  "ja-u23l1", // adjectives — how you feel
  "ja-u24l1", // transport — getting there
  "ja-u25l2", // school — classroom
  "ja-u26l2", // health — feeling ill
  "ja-u27l1", // nature — animals
  "ja-u28l2", // shopping — clothes
  "ja-u29l3", // adverbs — already / still / maybe
  "ja-u30l1", // grammar — because & so (connectives)
];
