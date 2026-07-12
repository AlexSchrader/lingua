// Unit 31 — かんじ・かぞく (People & family kanji) — A2 / JLPT N4
// Kanji unit (category: people & family kanji). type:"kanji" — recognition/recall
// test the meaning, production traces. KanjiVG strokes by glyph.
// lang/unit/lesson stamped in index.js.
export const UNIT31 = {
  id: "ja-u31",
  lang: "ja",
  title: "かんじ・かぞく",
  order: 31,
  stage: "a2",
  lessons: [
    {
      id: "ja-u31l1",
      unit: 31,
      lesson: 1,
      title: "Family kanji 1",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read 者 (person), 自 (self), 家 (house), 主 (main), 親 (parent), 族 (family/tribe).",
      items: [
        { id: "ja-u31l1-sha", type: "kanji", front: "者", reading: "sha", meaning: "person", example: { jp: "学者になりたいです。", en: "I want to become a scholar." }, accept: ["-er","one who"], hint: "者 = person / '-er'. 学者 = scholar, 医者 = doctor — the one who does the thing." },
        { id: "ja-u31l1-ji", type: "kanji", front: "自", reading: "ji", meaning: "self", example: { jp: "自分でします。", en: "I'll do it myself." }, accept: ["oneself","own"], hint: "自 = self. 自分 = oneself, 自転車 = bicycle (self-turning wheels)." },
        { id: "ja-u31l1-ie", type: "kanji", front: "家", reading: "ie", meaning: "house", example: { jp: "家に帰ります。", en: "I go home." }, accept: ["home","family"], hint: "家 = house / home — a roof 宀 over a pig 豕: livestock kept in the home. Read いえ." },
        { id: "ja-u31l1-shu", type: "kanji", front: "主", reading: "shu", meaning: "main", example: { jp: "主なりゆうです。", en: "It's the main reason." }, accept: ["master","principal"], hint: "主 = main / master. 主人 = husband/master of the house. A flame on a lampstand — the central light." },
        { id: "ja-u31l1-oya", type: "kanji", front: "親", reading: "oya", meaning: "parent", example: { jp: "親に電話します。", en: "I'll call my parents." }, accept: ["parents","intimate"], hint: "親 = parent. 両親 = both parents. The one who stands 立 by the tree 木 and watches 見 over you." },
        { id: "ja-u31l1-zoku", type: "kanji", front: "族", reading: "zoku", meaning: "family", example: { jp: "家族は五人です。", en: "My family is five people." }, accept: ["tribe","clan"], hint: "族 = family / tribe. 家族 = family, 民族 = ethnic group — a group under one banner." },
      ],
    },
    {
      id: "ja-u31l2",
      unit: 31,
      lesson: 2,
      title: "Family kanji 2",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the sibling kanji 兄 弟 姉 妹 (older/younger brother, older/younger sister) plus 世 代 (world, generation).",
      items: [
        { id: "ja-u31l2-ani", type: "kanji", front: "兄", reading: "ani", meaning: "older brother", example: { jp: "兄は大学生です。", en: "My older brother is a university student." }, accept: ["big brother","elder brother"], hint: "兄 = older brother — a mouth 口 over legs, the one who speaks up for the family. Read あに (my older brother)." },
        { id: "ja-u31l2-ototo", type: "kanji", front: "弟", reading: "otōto", meaning: "younger brother", example: { jp: "弟は小学生です。", en: "My younger brother is in elementary school." }, accept: ["little brother","younger brother"], hint: "弟 = younger brother. Read おとうと (my younger brother)." },
        { id: "ja-u31l2-ane", type: "kanji", front: "姉", reading: "ane", meaning: "older sister", example: { jp: "姉は東京にいます。", en: "My older sister is in Tokyo." }, accept: ["big sister","elder sister"], hint: "姉 = older sister — 女 (woman) radical. Read あね (my older sister)." },
        { id: "ja-u31l2-imoto", type: "kanji", front: "妹", reading: "imōto", meaning: "younger sister", example: { jp: "妹はかわいいです。", en: "My younger sister is cute." }, accept: ["little sister","younger sister"], hint: "妹 = younger sister — 女 (woman) + 未 (not yet), the not-yet-grown one. Read いもうと." },
        { id: "ja-u31l2-yo", type: "kanji", front: "世", reading: "yo", meaning: "world", example: { jp: "世の中は広いです。", en: "The world is wide." }, accept: ["generation","society"], hint: "世 = world / generation. 世界 = the world, 世の中 = society. Also read せい." },
        { id: "ja-u31l2-dai", type: "kanji", front: "代", reading: "dai", meaning: "generation", example: { jp: "電気代を払います。", en: "I pay the electricity fee." }, accept: ["era","fee","charge"], hint: "代 = generation / era / fee. 時代 = era, 電気代 = electricity charge. 人 (person) + 弋: one replacing another." },
      ],
    },
  ],
};
