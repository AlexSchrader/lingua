// Unit 21 — かんじ・からだ ("Kanji: body & nature") — A1 / N5
// Body parts 目耳口手足, plus 雨電車私語 (rain, electricity, car, I, language —
// several behind known kana: くるま/あめ/わたし). type:"kanji"; meaning is the
// recall target; examples reuse taught kanji (U11–20) + known kana.
export const UNIT21 = {
  id: "ja-u21",
  lang: "ja",
  title: "かんじ・からだ",
  order: 21,
  stage: "a1",
  lessons: [
    {
      id: "ja-u21l1",
      unit: 21,
      lesson: 1,
      title: "Body",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the body kanji 目 耳 口 手 足.",
      items: [
        { id: "ja-u21l1-me", type: "kanji", front: "目", reading: "me", meaning: "eye", example: { jp: "目が大きいです。", en: "The eyes are big." }, accept: ["eyes"], hint: "目 = eye — 日 (sun) stood upright, an eye shape. (Not 日 'day'.)" },
        { id: "ja-u21l1-mimi", type: "kanji", front: "耳", reading: "mimi", meaning: "ear", example: { jp: "耳で聞きます。", en: "I hear with my ears." }, accept: ["ears"], hint: "耳 = ear — a pictograph of an ear." },
        { id: "ja-u21l1-kuchi", type: "kanji", front: "口", reading: "kuchi", meaning: "mouth", example: { jp: "口で言います。", en: "I say it with my mouth." }, accept: ["opening"], hint: "口 = mouth — a simple open square. 入口 = entrance." },
        { id: "ja-u21l1-te", type: "kanji", front: "手", reading: "te", meaning: "hand", example: { jp: "手を見ます。", en: "I look at my hand." }, accept: ["hands"], hint: "手 = hand — fingers and a wrist. 上手 = skillful ('good hand')." },
        { id: "ja-u21l1-ashi", type: "kanji", front: "足", reading: "ashi", meaning: "foot", example: { jp: "足が長いです。", en: "The legs are long." }, accept: ["leg", "feet", "enough"], hint: "足 = foot / leg (also 'enough'). 足ります = to be enough." },
      ],
    },
    {
      id: "ja-u21l2",
      unit: 21,
      lesson: 2,
      title: "Rain, train, language",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read 雨 電 車 私 語 — rain, electricity, car, I, language.",
      items: [
        { id: "ja-u21l2-ame", type: "kanji", front: "雨", reading: "ame", meaning: "rain", example: { jp: "雨がすきです。", en: "I like the rain." }, accept: ["rainy"], hint: "雨 = rain — drops inside a frame (Unit 12's あめ). It tops weather kanji." },
        { id: "ja-u21l2-den", type: "kanji", front: "電", reading: "den", meaning: "electricity", example: { jp: "電車で行きます。", en: "I go by train." }, accept: ["electric"], hint: "電 = electricity — 雨 (rain) over a lightning shape. 電気 = electricity, 電車 = train, 電話 = phone." },
        { id: "ja-u21l2-kuruma", type: "kanji", front: "車", reading: "kuruma", meaning: "car", example: { jp: "車で行きます。", en: "I go by car." }, accept: ["vehicle"], hint: "車 = car / vehicle — a cart from above (wheels + axle). You know くるま (Unit 2). 電車 = train." },
        { id: "ja-u21l2-watashi", type: "kanji", front: "私", reading: "watashi", meaning: "I", example: { jp: "私は学生です。", en: "I am a student." }, accept: ["me", "myself"], hint: "私 = I / me (わたし) — 禾 (grain) + 厶 (private): the polite word for oneself." },
        { id: "ja-u21l2-go", type: "kanji", front: "語", reading: "go", meaning: "language", example: { jp: "日本語を話します。", en: "I speak Japanese." }, accept: ["word"], hint: "語 = language / word — 言 (speak) + 五 + 口. 日本語 = Japanese, 英語 = English." },
      ],
    },
  ],
};
