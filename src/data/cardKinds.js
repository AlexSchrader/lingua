// The canonical list of card kinds the session runner actively routes.
// Adding a new card kind means: (1) add it here, (2) wire it in the runner,
// (3) add a fixture item to the coverage smoke test.
//
// This lives in its own module, apart from contract.js, for a bundling reason.
// contract.js is the CONTENT VALIDATOR: it imports the full KanjiVG stroke map
// (508 KB) to check that every glyph item has stroke data. Four app files —
// Lesson, Review, DevPanel and store/dev — imported LIVE_CARD_KINDS from
// contract.js, which dragged the validator, and therefore all 568 glyphs' path
// data, into the entry chunk that every learner downloads on first load. Spanish
// and French learners paid for kanji strokes they will never trace.
//
// A constant list of 15 strings has no business pulling a validator behind it.
// contract.js re-exports this so validators, scripts and tests are unchanged.
export const LIVE_CARD_KINDS = [
  "teach",
  "choice",
  "choice:reverse",
  "listen:choice",
  "listen:type",
  "type:meaning",
  "type:reading",
  "type:produce",
  "cloze:choice",
  "particle:choice",
  "build",
  "sentence:build",
  "conjugate",
  "trace",
  "speak",
];
