// Unit 14 — かんじ・ひと・からだ (People & body kanji) — A1 / JLPT N5
// Consolidated kanji unit (category: people & body kanji). Kanji regrouped by
// meaning from the earlier thin units so each unit is a coherent set. type:"kanji" —
// recognition/recall test the meaning, production traces. KanjiVG strokes by glyph.
// lang/unit/lesson stamped in index.js.
export const UNIT14 = {
  id: "ja-u14",
  lang: "ja",
  title: "かんじ・ひと・からだ",
  order: 14,
  stage: "a1",
  lessons: [
    {
      id: "ja-u14l1",
      unit: 14,
      lesson: 1,
      title: "People & body kanji 1",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the people kanji: 人 (person), 私 (I), 父 母 (parents), 男 女 (man/woman).",
      items: [
        { id: "ja-u14l1-hito", type: "kanji", front: "人", reading: "hito", meaning: "person", example: { jp: "あの人です。", en: "That's that person." }, accept: ["people"] },
        { id: "ja-u14l1-watashi", type: "kanji", front: "私", reading: "watashi", meaning: "I", example: { jp: "私は学生です。", en: "I am a student." }, accept: ["me","myself"], hint: "私 = I / me (わたし) — 禾 (grain) + 厶 (private): the polite word for oneself." },
        { id: "ja-u14l1-chichi", type: "kanji", front: "父", reading: "chichi", meaning: "father", example: { jp: "父はせんせいです。", en: "My father is a teacher." }, accept: ["dad","my father"], hint: "父 = father. You know it as ちち (my father, Unit 8)." },
        { id: "ja-u14l1-haha", type: "kanji", front: "母", reading: "haha", meaning: "mother", example: { jp: "母はげんきです。", en: "My mother is well." }, accept: ["mom","mum","my mother"], hint: "母 = mother. You know it as はは (my mother). The two dots are a nursing mother." },
        { id: "ja-u14l1-otoko", type: "kanji", front: "男", reading: "otoko", meaning: "man", example: { jp: "あの人は男です。", en: "That person is a man." }, accept: ["male"], hint: "男 = man. 田 (rice field) over 力 (power) — strength in the fields. You know おとこ." },
        { id: "ja-u14l1-onna", type: "kanji", front: "女", reading: "onna", meaning: "woman", example: { jp: "この人は女です。", en: "This person is a woman." }, accept: ["female"], hint: "女 = woman. You know it as おんな." },
      ],
    },
    {
      id: "ja-u14l2",
      unit: 14,
      lesson: 2,
      title: "People & body kanji 2",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read 子 (child), 友 (friend), 先 生 (teacher), 名 (name).",
      items: [
        { id: "ja-u14l2-ko", type: "kanji", front: "子", reading: "ko", meaning: "child", example: { jp: "子どもがすきです。", en: "I like children." }, accept: ["kid"], hint: "子 = child — a little figure with outstretched arms. 子ども = child (you know こども)." },
        { id: "ja-u14l2-tomo", type: "kanji", front: "友", reading: "tomo", meaning: "friend", example: { jp: "友だちが来ます。", en: "A friend comes." }, accept: ["friends"], hint: "友 = friend. You know it as 友だち (ともだち). Two hands reaching the same way." },
        { id: "ja-u14l2-sen", type: "kanji", front: "先", reading: "sen", meaning: "ahead", example: { jp: "先生に聞きます。", en: "I ask the teacher." }, accept: ["before","previous","earlier"], hint: "先 = ahead / before. 先生 = teacher (one who came 'before' in life). Also 先週 = last week." },
        { id: "ja-u14l2-sei", type: "kanji", front: "生", reading: "sei", meaning: "life", example: { jp: "わたしは学生です。", en: "I'm a student." }, accept: ["student","born","raw","alive"], hint: "生 = life (also 'born' / 'raw'). It joins other kanji to make 学生 (student) and 先生 (teacher)." },
        { id: "ja-u14l2-mei", type: "kanji", front: "名", reading: "mei", meaning: "name", example: { jp: "名前を言います。", en: "I say my name." }, accept: ["famous"], hint: "名 = name — 夕 (evening) + 口 (mouth): calling a name in the dark. 名前 = namae." },
      ],
    },
    {
      id: "ja-u14l3",
      unit: 14,
      lesson: 3,
      title: "People & body kanji 3",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the body kanji: 目 耳 口 手 足 (eye, ear, mouth, hand, foot).",
      items: [
        { id: "ja-u14l3-me", type: "kanji", front: "目", reading: "me", meaning: "eye", example: { jp: "目が大きいです。", en: "The eyes are big." }, accept: ["eyes"], hint: "目 = eye — 日 (sun) stood upright, an eye shape. (Not 日 'day'.)" },
        { id: "ja-u14l3-mimi", type: "kanji", front: "耳", reading: "mimi", meaning: "ear", example: { jp: "耳で聞きます。", en: "I hear with my ears." }, accept: ["ears"], hint: "耳 = ear — a pictograph of an ear." },
        { id: "ja-u14l3-kuchi", type: "kanji", front: "口", reading: "kuchi", meaning: "mouth", example: { jp: "口で言います。", en: "I say it with my mouth." }, accept: ["opening"], hint: "口 = mouth — a simple open square. 入口 = entrance." },
        { id: "ja-u14l3-te", type: "kanji", front: "手", reading: "te", meaning: "hand", example: { jp: "手を見ます。", en: "I look at my hand." }, accept: ["hands"], hint: "手 = hand — fingers and a wrist. 上手 = skillful ('good hand')." },
        { id: "ja-u14l3-ashi", type: "kanji", front: "足", reading: "ashi", meaning: "foot", example: { jp: "足が長いです。", en: "The legs are long." }, accept: ["leg","feet","enough"], hint: "足 = foot / leg (also 'enough'). 足ります = to be enough." },
      ],
    },
  ],
};
