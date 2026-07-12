// Unit 58 — いえ・せいかつ ("Home & Daily Life") — A1 thematic
// Everyday N5 household objects the learner meets around the house: furniture,
// bathroom/hygiene items, kitchen tableware, and small daily-use tools. All are
// concrete nouns taught as vocabulary; examples reuse only known verbs and
// particles (あります, かいます, つかいます, つけます, あらいます, etc.). No new
// grammar. lang/unit/lesson wiring lives in index.js.
export const UNIT58 = {
  id: "ja-u58",
  lang: "ja",
  title: "いえ・せいかつ",
  order: 58,
  stage: "a1",
  lessons: [
    // Lesson 1: furniture & room items
    {
      id: "ja-u58l1",
      unit: 58,
      lesson: 1,
      title: "Furniture & room items",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name furniture and things around a room: ざぶとん じゅうたん はこ かびん かがみ カレンダー.",
      items: [
        { id: "ja-u58l1-zabuton", type: "vocab", front: "ざぶとん", reading: "zabuton", meaning: "floor cushion", example: { jp: "ざぶとんにすわります。", en: "I sit on the floor cushion." }, accept: ["cushion", "seat cushion"] },
        { id: "ja-u58l1-jutan", type: "vocab", front: "じゅうたん", reading: "jūtan", meaning: "carpet", example: { jp: "あかいじゅうたんです。", en: "It's a red carpet." }, accept: ["rug", "rugs"] },
        { id: "ja-u58l1-hako", type: "vocab", front: "はこ", reading: "hako", meaning: "box", example: { jp: "はこをあけます。", en: "I open the box." }, accept: ["boxes", "case"] },
        { id: "ja-u58l1-kabin", type: "vocab", front: "かびん", reading: "kabin", meaning: "vase", example: { jp: "かびんにはなをかざります。", en: "I arrange flowers in the vase." }, accept: ["flower vase"] },
        { id: "ja-u58l1-kagami", type: "vocab", front: "かがみ", reading: "kagami", meaning: "mirror", example: { jp: "かがみをみます。", en: "I look in the mirror." }, accept: ["mirrors"] },
        { id: "ja-u58l1-karenda", type: "vocab", front: "カレンダー", reading: "karendā", meaning: "calendar", example: { jp: "カレンダーはかべにあります。", en: "The calendar is on the wall." }, accept: ["calendars"] },
      ],
    },
    // Lesson 2: bathroom & hygiene items
    {
      id: "ja-u58l2",
      unit: 58,
      lesson: 2,
      title: "Bathroom & hygiene",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name everyday hygiene items: せっけん タオル はブラシ シャンプー ハンカチ ティッシュ.",
      items: [
        { id: "ja-u58l2-sekken", type: "vocab", front: "せっけん", reading: "sekken", meaning: "soap", example: { jp: "せっけんでてをあらいます。", en: "I wash my hands with soap." }, accept: ["bar of soap"] },
        { id: "ja-u58l2-taoru", type: "vocab", front: "タオル", reading: "taoru", meaning: "towel", example: { jp: "しろいタオルです。", en: "It's a white towel." }, accept: ["towels"] },
        { id: "ja-u58l2-haburashi", type: "vocab", front: "はブラシ", reading: "haburashi", meaning: "toothbrush", example: { jp: "はブラシをつかいます。", en: "I use a toothbrush." }, accept: ["tooth brush", "toothbrushes"] },
        { id: "ja-u58l2-shanpu", type: "vocab", front: "シャンプー", reading: "shanpū", meaning: "shampoo", example: { jp: "シャンプーをかいます。", en: "I buy shampoo." }, accept: [] },
        { id: "ja-u58l2-hankachi", type: "vocab", front: "ハンカチ", reading: "hankachi", meaning: "handkerchief", example: { jp: "ハンカチはどこですか。", en: "Where is the handkerchief?" }, accept: ["hanky", "handkerchiefs"] },
        { id: "ja-u58l2-tisshu", type: "vocab", front: "ティッシュ", reading: "tisshu", meaning: "tissue", example: { jp: "ティッシュをください。", en: "A tissue, please." }, accept: ["tissues", "tissue paper"] },
      ],
    },
    // Lesson 3: kitchen & tableware
    {
      id: "ja-u58l3",
      unit: 58,
      lesson: 3,
      title: "Kitchen & tableware",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name kitchen and tableware items: コップ スプーン ちゃわん やかん ポット レンジ.",
      items: [
        { id: "ja-u58l3-koppu", type: "vocab", front: "コップ", reading: "koppu", meaning: "cup", example: { jp: "コップでみずをのみます。", en: "I drink water from a cup." }, accept: ["glass", "cups", "tumbler"] },
        { id: "ja-u58l3-supun", type: "vocab", front: "スプーン", reading: "supūn", meaning: "spoon", example: { jp: "スプーンでたべます。", en: "I eat with a spoon." }, accept: ["spoons"] },
        { id: "ja-u58l3-chawan", type: "vocab", front: "ちゃわん", reading: "chawan", meaning: "rice bowl", example: { jp: "これはわたしのちゃわんです。", en: "This is my rice bowl." }, accept: ["bowl", "teacup"] },
        { id: "ja-u58l3-yakan", type: "vocab", front: "やかん", reading: "yakan", meaning: "kettle", example: { jp: "やかんでおちゃをつくります。", en: "I make tea with the kettle." }, accept: ["kettles"] },
        { id: "ja-u58l3-potto", type: "vocab", front: "ポット", reading: "potto", meaning: "thermos", example: { jp: "ポットのおちゃはあついです。", en: "The tea in the thermos is hot." }, accept: ["pot", "flask", "thermos flask"] },
        { id: "ja-u58l3-renji", type: "vocab", front: "レンジ", reading: "renji", meaning: "microwave", example: { jp: "レンジはだいどころにあります。", en: "The microwave is in the kitchen." }, accept: ["microwave oven", "stove"] },
      ],
    },
    // Lesson 4: daily-use tools
    {
      id: "ja-u58l4",
      unit: 58,
      lesson: 4,
      title: "Daily-use tools",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name small everyday tools: ものさし ほうき バケツ でんち せんぷうき まくら.",
      items: [
        { id: "ja-u58l4-monosashi", type: "vocab", front: "ものさし", reading: "monosashi", meaning: "ruler", example: { jp: "ものさしをつかいます。", en: "I use a ruler." }, accept: ["measure", "rulers"] },
        { id: "ja-u58l4-hoki", type: "vocab", front: "ほうき", reading: "hōki", meaning: "broom", example: { jp: "ほうきでそうじします。", en: "I clean with a broom." }, accept: ["brooms"] },
        { id: "ja-u58l4-baketsu", type: "vocab", front: "バケツ", reading: "baketsu", meaning: "bucket", example: { jp: "バケツにみずをいれます。", en: "I put water in the bucket." }, accept: ["buckets", "pail"] },
        { id: "ja-u58l4-denchi", type: "vocab", front: "でんち", reading: "denchi", meaning: "battery", example: { jp: "あたらしいでんちをかいます。", en: "I buy a new battery." }, accept: ["batteries"] },
        { id: "ja-u58l4-senpuki", type: "vocab", front: "せんぷうき", reading: "senpūki", meaning: "electric fan", example: { jp: "せんぷうきをつけます。", en: "I turn on the electric fan." }, accept: ["fan", "electric fans"] },
        { id: "ja-u58l4-makura", type: "vocab", front: "まくら", reading: "makura", meaning: "pillow", example: { jp: "やわらかいまくらです。", en: "It's a soft pillow." }, accept: ["pillows", "cushion"] },
      ],
    },
  ],
};
