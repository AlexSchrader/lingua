// Unit 15 — かんじ・ひと ("Kanji: people & school") — A1 / JLPT N5
// The kanji behind the people the learner met in Unit 8 and the school words from
// Units 1-9: 父・母・男・女・子 and 学・校・生・先・友 (大学, 学校, 学生, 先生,
// 友だち). `type: "kanji"` — recognition/recall test the MEANING; the primary N5
// reading is shown; production traces. Hints link the shape + the known word.
// Examples chain forward kanji (Unit 11/14) for spaced reinforcement and reuse
// known kana words. KanjiVG strokes added for all 10. lang/unit/lesson in index.js.
export const UNIT15 = {
  id: "ja-u15",
  lang: "ja",
  title: "かんじ・ひと",
  order: 15,
  stage: "a1",
  lessons: [
    // Lesson 1: family & people — 父 母 男 女 子
    {
      id: "ja-u15l1",
      unit: 15,
      lesson: 1,
      title: "Family & people",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the people kanji 父 母 男 女 子 — the kanji for ちち, はは, おとこ, おんな, こども.",
      items: [
        { id: "ja-u15l1-chichi", type: "kanji", front: "父", reading: "chichi", meaning: "father", example: { jp: "父はせんせいです。", en: "My father is a teacher." }, accept: ["dad", "my father"], hint: "父 = father. You know it as ちち (my father, Unit 8)." },
        { id: "ja-u15l1-haha", type: "kanji", front: "母", reading: "haha", meaning: "mother", example: { jp: "母はげんきです。", en: "My mother is well." }, accept: ["mom", "mum", "my mother"], hint: "母 = mother. You know it as はは (my mother). The two dots are a nursing mother." },
        { id: "ja-u15l1-otoko", type: "kanji", front: "男", reading: "otoko", meaning: "man", example: { jp: "あの人は男です。", en: "That person is a man." }, accept: ["male"], hint: "男 = man. 田 (rice field) over 力 (power) — strength in the fields. You know おとこ." },
        { id: "ja-u15l1-onna", type: "kanji", front: "女", reading: "onna", meaning: "woman", example: { jp: "この人は女です。", en: "This person is a woman." }, accept: ["female"], hint: "女 = woman. You know it as おんな." },
        { id: "ja-u15l1-ko", type: "kanji", front: "子", reading: "ko", meaning: "child", example: { jp: "子どもがすきです。", en: "I like children." }, accept: ["kid"], hint: "子 = child — a little figure with outstretched arms. 子ども = child (you know こども)." },
      ],
    },
    // Lesson 2: school — 学 校 生 先 友
    {
      id: "ja-u15l2",
      unit: 15,
      lesson: 2,
      title: "School & friends",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read 学 校 生 先 友 — the kanji in 大学, 学校, 学生, 先生, 友だち.",
      items: [
        { id: "ja-u15l2-gaku", type: "kanji", front: "学", reading: "gaku", meaning: "study", example: { jp: "大学に行きます。", en: "I go to university." }, accept: ["learning", "school (study)"], hint: "学 = study / learning. It's in 大学 (university) and 学校 (school)." },
        { id: "ja-u15l2-ko", type: "kanji", front: "校", reading: "kō", meaning: "school", example: { jp: "学校に行きます。", en: "I go to school." }, accept: ["the school"], hint: "校 = school — pairs with 学 to make 学校 (school). The 木 radical = the school building." },
        { id: "ja-u15l2-sei", type: "kanji", front: "生", reading: "sei", meaning: "student", example: { jp: "わたしは学生です。", en: "I'm a student." }, accept: ["life", "born", "raw"], hint: "生 = life / student. In 学生 (student) and 先生 (teacher). Also means 'born' and 'raw'." },
        { id: "ja-u15l2-sen", type: "kanji", front: "先", reading: "sen", meaning: "ahead", example: { jp: "先生に聞きます。", en: "I ask the teacher." }, accept: ["before", "previous", "earlier"], hint: "先 = ahead / before. 先生 = teacher (one who came 'before' in life). Also 先週 = last week." },
        { id: "ja-u15l2-tomo", type: "kanji", front: "友", reading: "tomo", meaning: "friend", example: { jp: "友だちが来ます。", en: "A friend comes." }, accept: ["friends"], hint: "友 = friend. You know it as 友だち (ともだち). Two hands reaching the same way." },
      ],
    },
  ],
};
