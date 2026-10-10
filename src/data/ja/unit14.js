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
        { id: "ja-u14l1-hito", type: "kanji", front: "人", reading: "hito", meaning: "person", example: { jp: "あの人です。", en: "That's that person." }, drill: { jp: "あの人は先生です。", en: "That person is a teacher." }, accept: ["people", "a person", "human", "individual"], hint: "人 = person — two legs walking, seen from the side. 🚨 ITS READING DEPENDS ON THE COMPANY: ひと alone, にん in 三人 three people, じん in 日本人 a Japanese person. Two strokes, left one first." },
        { id: "ja-u14l1-watashi", type: "kanji", front: "私", reading: "watashi", meaning: "I", example: { jp: "私は学生です。", en: "I am a student." }, drill: { jp: "私の名前です。", en: "It's my name." }, accept: ["me", "myself", "my"], hint: "私 = I / me (わたし) — 禾 (grain) + 厶 (private): the polite word for oneself." },
        { id: "ja-u14l1-chichi", type: "kanji", front: "父", reading: "chichi", meaning: "father", example: { jp: "父はせんせいです。", en: "My father is a teacher." }, drill: { jp: "父は水をのみます。", en: "My father drinks water." }, accept: ["dad", "my father", "papa"], hint: "父 = father, the kanji for the ちち you met in Unit 8. Four strokes. ⚠️ Read ちち on its own but とう in おとうさん, so 父 covers both the humble and the polite word. ⚠️ Keep it apart from 文, writing, which has a flat top." },
        { id: "ja-u14l1-haha", type: "kanji", front: "母", reading: "haha", meaning: "mother", example: { jp: "母はげんきです。", en: "My mother is well." }, drill: { jp: "母は友だちにあいます。", en: "My mother meets a friend." }, accept: ["mom", "mum", "my mother"], hint: "母 = mother. You know it as はは (my mother). The two dots are a nursing mother." },
        { id: "ja-u14l1-otoko", type: "kanji", front: "男", reading: "otoko", meaning: "man", example: { jp: "あの人は男です。", en: "That person is a man." }, drill: { jp: "男の人がいます。", en: "There is a man." }, accept: ["male", "a man", "men", "masculine"], hint: "男 = man. 田 (rice field) over 力 (power) — strength in the fields. You know おとこ." },
        { id: "ja-u14l1-onna", type: "kanji", front: "女", reading: "onna", meaning: "woman", example: { jp: "この人は女です。", en: "This person is a woman." }, drill: { jp: "女の子がすきです。", en: "I like the girl." }, accept: ["female", "a woman", "women", "feminine"], hint: "女 = woman, the kanji for おんな. Three strokes, a pictograph of a kneeling figure. ⚠️ Read おんな alone, じょ in compounds: 女子 じょし, female. It is the radical inside 母, mother, and dozens of other kanji." },
      ],
    },
    {
      id: "ja-u14l2",
      unit: 14,
      lesson: 2,
      title: "People & body kanji 2",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read 子 (child), 友 (friend), 先 生 (teacher), 名 (name), and the word 二人.",
      items: [
        { id: "ja-u14l2-ko", type: "kanji", front: "子", reading: "ko", meaning: "child (one's own offspring)", example: { jp: "子どもがすきです。", en: "I like children." }, drill: { jp: "子どもの手です。", en: "It's the child's hand." }, accept: ["kid", "children", "offspring", "son or daughter"], hint: "子 = child — a little figure with outstretched arms. 子ども = child (you know こども)." },
        { id: "ja-u14l2-tomo", type: "kanji", front: "友", reading: "tomo", meaning: "friend (a companion)", example: { jp: "友だちが来ます。", en: "A friend comes." }, drill: { jp: "友だちの名前です。", en: "It's my friend's name." }, accept: ["friends", "a friend", "companion", "mate"], hint: "友 = friend. You know it as 友だち (ともだち). Two hands reaching the same way." },
        { id: "ja-u14l2-sen", type: "kanji", front: "先", reading: "sen", meaning: "ahead", example: { jp: "先生に聞きます。", en: "I ask the teacher." }, drill: { jp: "先生は女の人です。", en: "The teacher is a woman." }, accept: ["before", "previous", "earlier"], hint: "先 = ahead / before. 先生 = teacher (one who came 'before' in life). Also 先週 = last week." },
        { id: "ja-u14l2-sei", type: "kanji", front: "生", reading: "sei", meaning: "life (born and alive)", example: { jp: "わたしは学生です。", en: "I'm a student." }, drill: { jp: "先生と学生です。", en: "A teacher and a student." }, accept: ["student", "born", "raw", "alive"], hint: "生 = life (also 'born' / 'raw'). It joins other kanji to make 学生 (student) and 先生 (teacher)." },
        { id: "ja-u14l2-mei", type: "kanji", front: "名", reading: "mei", meaning: "name (also famous)", example: { jp: "名前を言います。", en: "I say my name." }, drill: { jp: "名前は何ですか。", en: "What is your name?" }, accept: ["famous", "a name", "renowned", "title"], hint: "名 = name — 夕 (evening) + 口 (mouth): calling a name in the dark. 名前 = namae." },
        { id: "ja-u14l2-futari", type: "vocab", front: "二人", reading: "futari", meaning: "two people", example: { jp: "子どもが二人います。", en: "There are two children." }, drill: { jp: "友だちが二人来ます。", en: "Two friends are coming." }, accept: ["two","a pair of people","the two of them"], hint: "二 + 人, but read ふたり — not にじん. You already know the word in kana; this is how it is written. 一人 (ひとり) plays the same trick." },
      ],
    },
    {
      id: "ja-u14l3",
      unit: 14,
      lesson: 3,
      title: "People & body kanji 3",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the body kanji: 目 耳 口 手 足 (eye, ear, mouth, hand, foot), and the word 手足.",
      items: [
        { id: "ja-u14l3-me", type: "kanji", front: "目", reading: "me", meaning: "eye", example: { jp: "目が大きいです。", en: "The eyes are big." }, drill: { jp: "目で見ます。", en: "I look with my eyes." }, accept: ["eyes", "an eye", "eyesight", "vision"], hint: "目 = eye — 日 (sun) stood upright, an eye shape. (Not 日 'day'.)" },
        { id: "ja-u14l3-mimi", type: "kanji", front: "耳", reading: "mimi", meaning: "ear", example: { jp: "耳で聞きます。", en: "I hear with my ears." }, drill: { jp: "耳が大きいです。", en: "The ears are big." }, accept: ["ears", "an ear", "hearing", "earlobe"], hint: "耳 = ear — a pictograph of one, turned sideways. Six strokes. ⚠️ Read みみ. It is the radical in 聞きます, to hear, where the ear sits inside a gate: listening at the door. 耳がいい means a good ear." },
        { id: "ja-u14l3-kuchi", type: "kanji", front: "口", reading: "kuchi", meaning: "mouth", example: { jp: "口で言います。", en: "I say it with my mouth." }, drill: { jp: "口はちいさいです。", en: "The mouth is small." }, accept: ["opening", "mouths", "a mouth", "entrance"], hint: "口 = mouth — a simple open square, three strokes. ⚠️ Read くち alone but こう in compounds: 入口 いりぐち, entrance, 人口 じんこう, population. It is one of the most common radicals in all of kanji." },
        { id: "ja-u14l3-te", type: "kanji", front: "手", reading: "te", meaning: "hand", example: { jp: "手を見ます。", en: "I look at my hand." }, drill: { jp: "手がつめたいです。", en: "My hands are cold." }, accept: ["hands", "a hand", "palm", "arm"], hint: "手 = hand — fingers and a wrist. 上手 = skillful ('good hand')." },
        { id: "ja-u14l3-ashi", type: "kanji", front: "足", reading: "ashi", meaning: "foot", example: { jp: "足が長いです。", en: "The legs are long." }, drill: { jp: "足はおおきいです。", en: "The feet are big." }, accept: ["leg", "feet", "enough"], hint: "足 = foot, and also leg — Japanese does not split them. ⚠️ A THIRD meaning is enough: 足ります, to suffice. Read あし alone, そく in compounds: 一足 いっそく, one pair of shoes. The 口 on top is the knee." },
        { id: "ja-u14l3-teashi", type: "vocab", front: "手足", reading: "teashi", meaning: "limbs", example: { jp: "この子は手足が長いです。", en: "This child has long limbs." }, drill: { jp: "手足が長いです。", en: "The limbs are long." }, accept: ["hands and feet", "arms and legs", "extremities"], hint: "手 + 足 read straight through: てあし. Japanese joins the two body words into one." },
      ],
    },
  ],
};
