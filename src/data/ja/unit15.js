// Unit 15 — かんじ・ほうこう (Position & direction kanji) — A1 / JLPT N5
// Consolidated kanji unit (category: position & direction kanji). Kanji regrouped by
// meaning from the earlier thin units so each unit is a coherent set. type:"kanji" —
// recognition/recall test the meaning, production traces. KanjiVG strokes by glyph.
// lang/unit/lesson stamped in index.js.
export const UNIT15 = {
  id: "ja-u15",
  lang: "ja",
  title: "かんじ・ほうこう",
  order: 15,
  stage: "a1",
  lessons: [
    {
      id: "ja-u15l1",
      unit: 15,
      lesson: 1,
      title: "Position & direction kanji 1",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the position kanji: 上 下 中 (up/down/middle), 右 左 (right/left), 前 (front).",
      items: [
        { id: "ja-u15l1-ue", type: "kanji", front: "上", reading: "ue", meaning: "up", example: { jp: "テーブルの上です。", en: "It's on the table." }, accept: ["above","top","on"] },
        { id: "ja-u15l1-shita", type: "kanji", front: "下", reading: "shita", meaning: "down", example: { jp: "木の下です。", en: "It's under the tree." }, accept: ["below","under","bottom"] },
        { id: "ja-u15l1-naka", type: "kanji", front: "中", reading: "naka", meaning: "middle", example: { jp: "いえの中です。", en: "It's inside the house." }, accept: ["inside","center"] },
        { id: "ja-u15l1-migi", type: "kanji", front: "右", reading: "migi", meaning: "right", example: { jp: "みせの右です。", en: "It's to the right of the shop." }, accept: ["right side"], hint: "右 = right. You know it as みぎ (Unit 10)." },
        { id: "ja-u15l1-hidari", type: "kanji", front: "左", reading: "hidari", meaning: "left", example: { jp: "えきの左です。", en: "It's to the left of the station." }, accept: ["left side"], hint: "左 = left. You know it as ひだり. The bottom differs from 右." },
        { id: "ja-u15l1-mae", type: "kanji", front: "前", reading: "mae", meaning: "front", example: { jp: "えきの前です。", en: "It's in front of the station." }, accept: ["before","in front"], hint: "前 = front / before (まえ). 午前 = a.m. ('before noon')." },
      ],
    },
    {
      id: "ja-u15l2",
      unit: 15,
      lesson: 2,
      title: "Position & direction kanji 2",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read 後 (back), 外 (outside), and the compass 東 西 南 北.",
      items: [
        { id: "ja-u15l2-ushiro", type: "kanji", front: "後", reading: "ushiro", meaning: "behind", example: { jp: "いえの後です。", en: "It's behind the house." }, accept: ["after","back"], hint: "後 = behind / after (うしろ). 午後 = p.m. ('after noon')." },
        { id: "ja-u15l2-soto", type: "kanji", front: "外", reading: "soto", meaning: "outside", example: { jp: "外はさむいです。", en: "It's cold outside." }, accept: ["outdoors","out"], hint: "外 = outside — 夕 (evening) + 卜. The opposite of 中 (inside)." },
        { id: "ja-u15l2-higashi", type: "kanji", front: "東", reading: "higashi", meaning: "east", example: { jp: "東に行きます。", en: "I go east." }, accept: [], hint: "東 = east — 日 (sun) behind 木 (tree), sunrise. 東京 (Tokyo) = 'eastern capital'." },
        { id: "ja-u15l2-nishi", type: "kanji", front: "西", reading: "nishi", meaning: "west", example: { jp: "西の山です。", en: "It's the western mountain." }, accept: [], hint: "西 = west — where the sun sets." },
        { id: "ja-u15l2-minami", type: "kanji", front: "南", reading: "minami", meaning: "south", example: { jp: "南はあついです。", en: "The south is hot." }, accept: [], hint: "南 = south (the warm direction in Japan)." },
        { id: "ja-u15l2-kita", type: "kanji", front: "北", reading: "kita", meaning: "north", example: { jp: "北はさむいです。", en: "The north is cold." }, accept: [], hint: "北 = north — two people back-to-back, turned from the cold." },
      ],
    },
  ],
};
