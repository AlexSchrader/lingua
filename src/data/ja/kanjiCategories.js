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
  { key: "people",     label: "People & family",  kanji: [..."人私父母男女子友先生名者自家主親族兄弟姉妹世代"] },
  { key: "body",       label: "Body & health",    kanji: [..."目耳口手足体医病死心力味"] },
  { key: "position",   label: "Position & direction", kanji: [..."上下中右左前後外東西南北"] },
  { key: "verbs",      label: "Verbs",            kanji: [..."行来見出入食飲言聞読書話立休買会待知作持発動開通使集送起着運始終止切転走歩帰住去"] },
  { key: "adjectives", label: "Adjectives",       kanji: [..."大小高安新古多少長白"] },
  { key: "places",     label: "Places & things",  kanji: [..."学校道駅店国本間車語元社地場京院界町館屋堂室台野"] },
  // --- N4 categories ---
  { key: "study",      label: "Study & thought",  kanji: [..."問答思意題考教習研究試験"] },
  { key: "arts",       label: "Writing, arts & sound", kanji: [..."字文漢英図音歌写映注画紙"] },
  { key: "work",       label: "Work & commerce",  kanji: [..."売借貸品料計質銀仕業工建勉事員"] },
  { key: "seasons",    label: "Seasons & weather", kanji: [..."春夏秋冬昼夜朝夕花海空風"] },
  { key: "colors",     label: "Colors",           kanji: [..."赤青黒色明"] },
  { key: "food",       label: "Food & animals",   kanji: [..."肉飯茶牛魚鳥犬"] },
  { key: "descriptive", label: "Descriptive & state", kanji: [..."同正不無有特別物強広早急重楽悪"] },
  { key: "function",   label: "Function & misc",  kanji: [..."度用以近方理公洋服旅真"] },
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
