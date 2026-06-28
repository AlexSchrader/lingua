// Unit 14 — かんじ・どうし ("Kanji: verbs") — A1 / JLPT N5
// The kanji behind the everyday verbs the learner already knows as ～ます forms
// from Unit 9: 行く・来る・見る・食べる・飲む… Now they meet the kanji. Each
// `reading` is the dictionary verb (the most recognizable form, ties straight to
// the known ます-verb); recognition/recall test the MEANING; production traces.
// Hints lean on the shape / radical + the known verb. Examples write the verb in
// kanji+okurigana and reuse known nouns. KanjiVG strokes added for all 10.
// lang/unit/lesson stamped in index.js.
export const UNIT14 = {
  id: "ja-u14",
  lang: "ja",
  title: "かんじ・どうし",
  order: 14,
  stage: "a1",
  lessons: [
    // Lesson 1: motion & perception — 行 来 見 出 入
    {
      id: "ja-u14l1",
      unit: 14,
      lesson: 1,
      title: "Go, come, see",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the verb kanji 行 来 見 出 入 — the kanji in 行きます, 来ます, 見ます, 出ます, 入ります.",
      items: [
        { id: "ja-u14l1-iku",  type: "kanji", front: "行", reading: "iku",  meaning: "go", example: { jp: "がっこうに行きます。", en: "I go to school." }, accept: ["to go", "goes"], hint: "行 = go. You know it as 行きます (いきます). The left side 彳 is a step on a road." },
        { id: "ja-u14l1-kuru", type: "kanji", front: "来", reading: "kuru", meaning: "come", example: { jp: "ともだちが来ます。", en: "A friend comes." }, accept: ["to come", "comes"], hint: "来 = come. You know it as 来ます (きます)." },
        { id: "ja-u14l1-miru", type: "kanji", front: "見", reading: "miru", meaning: "see", example: { jp: "テレビを見ます。", en: "I watch TV." }, accept: ["look", "watch", "to see"], hint: "見 = see. 目 (eye) on top of 儿 (legs) — eyes that go and look. You know 見ます (みます)." },
        { id: "ja-u14l1-deru", type: "kanji", front: "出", reading: "deru", meaning: "exit", example: { jp: "いえを出ます。", en: "I leave the house." }, accept: ["go out", "leave", "to exit"], hint: "出 = go out / exit. Like a sprout pushing up out of the ground. 出ます = leave." },
        { id: "ja-u14l1-hairu", type: "kanji", front: "入", reading: "hairu", meaning: "enter", example: { jp: "へやに入ります。", en: "I enter the room." }, accept: ["go in", "to enter"], hint: "入 = enter / go in. A shape leaning into an opening. 入ります = go in." },
      ],
    },
    // Lesson 2: daily actions — 食 飲 言 聞 読
    {
      id: "ja-u14l2",
      unit: 14,
      lesson: 2,
      title: "Eat, drink, read",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the verb kanji 食 飲 言 聞 読 — the kanji in 食べます, 飲みます, 言います, 聞きます, 読みます.",
      items: [
        { id: "ja-u14l2-taberu", type: "kanji", front: "食", reading: "taberu", meaning: "eat", example: { jp: "ごはんを食べます。", en: "I eat a meal." }, accept: ["to eat", "eats", "food"], hint: "食 = eat. You know 食べます (たべます). The top is a lid over food." },
        { id: "ja-u14l2-nomu",  type: "kanji", front: "飲", reading: "nomu", meaning: "drink", example: { jp: "みずを飲みます。", en: "I drink water." }, accept: ["to drink", "drinks"], hint: "飲 = drink. 食 (eat) on the left + 欠 (an open mouth) — you know 飲みます (のみます)." },
        { id: "ja-u14l2-iu",    type: "kanji", front: "言", reading: "iu", meaning: "say", example: { jp: "なまえを言います。", en: "I say my name." }, accept: ["to say", "speak", "word"], hint: "言 = say / word. Lines coming out over a mouth 口. You know 言います (いいます)." },
        { id: "ja-u14l2-kiku",  type: "kanji", front: "聞", reading: "kiku", meaning: "listen", example: { jp: "おんがくを聞きます。", en: "I listen to music." }, accept: ["hear", "to listen", "ask"], hint: "聞 = listen / hear. 耳 (ear) inside a gate 門 — an ear at the door. 聞きます = listen." },
        { id: "ja-u14l2-yomu",  type: "kanji", front: "読", reading: "yomu", meaning: "read", example: { jp: "ほんを読みます。", en: "I read a book." }, accept: ["to read", "reads"], hint: "読 = read. 言 (word) on the left — reading words. You know 読みます (よみます)." },
      ],
    },
  ],
};
