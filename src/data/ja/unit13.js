// Unit 13 — かんじ・しぜん (Nature & days kanji) — A1 / JLPT N5
// Consolidated kanji unit (category: nature & days kanji). Kanji regrouped by
// meaning from the earlier thin units so each unit is a coherent set. type:"kanji" —
// recognition/recall test the meaning, production traces. KanjiVG strokes by glyph.
// lang/unit/lesson stamped in index.js.
export const UNIT13 = {
  id: "ja-u13",
  lang: "ja",
  title: "かんじ・しぜん",
  order: 13,
  stage: "a1",
  lessons: [
    {
      id: "ja-u13l1",
      unit: 13,
      lesson: 1,
      title: "Nature & days kanji 1",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read and recognize the kanji: 日 月 火 水 木 金 土.",
      items: [
        { id: "ja-u13l1-nichi", type: "kanji", front: "日", reading: "nichi", meaning: "sun", example: { jp: "きょうはいい日です。", en: "Today is a nice day." }, accept: ["day"] },
        { id: "ja-u13l1-getsu", type: "kanji", front: "月", reading: "getsu", meaning: "moon", example: { jp: "月をみます。", en: "I look at the moon." }, accept: ["month"] },
        { id: "ja-u13l1-ka", type: "kanji", front: "火", reading: "ka", meaning: "fire", example: { jp: "これは火です。", en: "This is fire." }, accept: [] },
        { id: "ja-u13l1-sui", type: "kanji", front: "水", reading: "sui", meaning: "water", example: { jp: "水をのみます。", en: "I drink water." }, accept: [] },
        { id: "ja-u13l1-moku", type: "kanji", front: "木", reading: "moku", meaning: "tree", example: { jp: "木をみます。", en: "I look at the tree." }, accept: ["wood"] },
        { id: "ja-u13l1-kin", type: "kanji", front: "金", reading: "kin", meaning: "gold", example: { jp: "金がすきです。", en: "I like gold." }, accept: ["money"] },
        { id: "ja-u13l1-do", type: "kanji", front: "土", reading: "do", meaning: "soil", example: { jp: "これは土です。", en: "This is soil." }, accept: ["earth","dirt","ground"] },
      ],
    },
    {
      id: "ja-u13l2",
      unit: 13,
      lesson: 2,
      title: "Nature & days kanji 2",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read and recognize the kanji: 山 川 田 雨 電 気.",
      items: [
        { id: "ja-u13l2-yama", type: "kanji", front: "山", reading: "yama", meaning: "mountain", example: { jp: "山にいきます。", en: "I go to the mountain." }, accept: ["mountains"] },
        { id: "ja-u13l2-kawa", type: "kanji", front: "川", reading: "kawa", meaning: "river", example: { jp: "川にいきます。", en: "I go to the river." }, accept: ["rivers"] },
        { id: "ja-u13l2-ta", type: "kanji", front: "田", reading: "ta", meaning: "rice field", example: { jp: "田があります。", en: "There is a rice field." }, accept: ["field","paddy","rice paddy"] },
        { id: "ja-u13l2-ame", type: "kanji", front: "雨", reading: "ame", meaning: "rain", example: { jp: "雨がすきです。", en: "I like the rain." }, accept: ["rainy"], hint: "雨 = rain — drops inside a frame (Unit 12's あめ). It tops weather kanji." },
        { id: "ja-u13l2-den", type: "kanji", front: "電", reading: "den", meaning: "electricity", example: { jp: "電車で行きます。", en: "I go by train." }, accept: ["electric"], hint: "電 = electricity — 雨 (rain) over a lightning shape. 電気 = electricity, 電車 = train, 電話 = phone." },
        { id: "ja-u13l2-ki", type: "kanji", front: "気", reading: "ki", meaning: "spirit", example: { jp: "元気ですか。", en: "How are you? (Are you well?)" }, accept: ["energy","feeling","air"], hint: "気 = spirit / feeling / air. In 元気 (well), 天気 (weather), 電気 (electricity)." },
      ],
    },
  ],
};
