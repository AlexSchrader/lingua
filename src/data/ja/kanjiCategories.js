// Canonical N5 kanji categorization — the single source of truth for grouping the
// 106 N5 kanji into coherent semantic sets. Drives BOTH the eventual teaching
// realignment (each unit should teach one category, not a mix) AND the Ladder's
// kanji grouping (group kanji defs by looking up each `front` here).
//
// Why this exists: the kanji units were authored in 10-glyph batches, so categories
// bleed across units (U17 mixes numbers + position; U21 mixes body + misc) and a
// learner meets kanji in a "random" order. This map is category-by-meaning,
// independent of which unit currently teaches a glyph, so categorization is correct
// even before the units are realigned.
//
// Maintenance: every kanji in `src/data/ja/unit*.js` must appear in exactly one list
// below. `categoryOf` returns null for an unlisted glyph (a sign to add it here).
// Ordered teaching-sensibly: numbers → time → nature → people → body → position →
// verbs → adjectives → places/things.

export const KANJI_CATEGORIES = [
  { key: "numbers",    label: "Numbers",          kanji: [..."一二三四五六七八九十百千万円"] },
  { key: "time",       label: "Time & calendar",  kanji: [..."何時分半午曜週年今毎"] },
  { key: "nature",     label: "Days & nature",    kanji: [..."日月火水木金土山川田雨電気"] },
  { key: "people",     label: "People & family",  kanji: [..."人私父母男女子友先生名"] },
  { key: "body",       label: "Body",             kanji: [..."目耳口手足"] },
  { key: "position",   label: "Position & direction", kanji: [..."上下中右左前後外東西南北"] },
  { key: "verbs",      label: "Verbs",            kanji: [..."行来見出入食飲言聞読書話立休買会待知作持"] },
  { key: "adjectives", label: "Adjectives",       kanji: [..."大小高安新古多少長白"] },
  { key: "places",     label: "Places & things",  kanji: [..."学校道駅店国本間車語元"] },
];

// Glyph → category key. Built once from the lists above.
const GLYPH_TO_KEY = new Map();
for (const cat of KANJI_CATEGORIES) {
  for (const g of cat.kanji) GLYPH_TO_KEY.set(g, cat.key);
}

// Return the category key for a kanji glyph, or null if it isn't categorized yet.
export const categoryOf = (glyph) => GLYPH_TO_KEY.get(glyph) ?? null;

// All categorized glyphs (for a coverage check against the live corpus).
export const ALL_CATEGORIZED = [...GLYPH_TO_KEY.keys()];
