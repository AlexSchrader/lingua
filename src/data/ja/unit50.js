// Unit 50 — いえ・かじ ("Home & housework") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// Household theme: rooms & fixtures, furniture & fittings, appliances & kitchen,
// chores & cleaning. Vocab items (kana headword). Examples use only simple known
// grammar (を/に/で/へ/と/が + です/ます) so they slot on top of a finished A1/A2.
// NOTE: naturalness-critical — flagged for the batch native review.
export const UNIT50 = {
  id: "ja-u50",
  lang: "ja",
  title: "いえ・かじ",
  order: 50,
  stage: "a2",
  lessons: [
    // Lesson 1: rooms & fixtures
    {
      id: "ja-u50l1",
      unit: 50,
      lesson: 1,
      title: "Rooms & fixtures",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the parts of a home: ゆか かべ てんじょう かいだん ろうか おしいれ.",
      items: [
        { id: "ja-u50l1-yuka", type: "vocab", front: "ゆか", reading: "yuka", meaning: "floor", example: { jp: "ゆかがつめたいです。", en: "The floor is cold." }, accept: ["the floor", "flooring"] },
        { id: "ja-u50l1-kabe", type: "vocab", front: "かべ", reading: "kabe", meaning: "wall", example: { jp: "かべにえをかけます。", en: "I hang a picture on the wall." }, accept: ["the wall", "walls"] },
        { id: "ja-u50l1-tenjo", type: "vocab", front: "てんじょう", reading: "tenjō", meaning: "ceiling", example: { jp: "てんじょうがたかいです。", en: "The ceiling is high." }, accept: ["the ceiling"] },
        { id: "ja-u50l1-kaidan", type: "vocab", front: "かいだん", reading: "kaidan", meaning: "stairs", example: { jp: "かいだんをのぼります。", en: "I go up the stairs." }, accept: ["staircase", "the stairs", "steps"] },
        { id: "ja-u50l1-roka", type: "vocab", front: "ろうか", reading: "rōka", meaning: "hallway", example: { jp: "ろうかをあるきます。", en: "I walk down the hallway." }, accept: ["corridor", "the hall", "passage"] },
        { id: "ja-u50l1-oshiire", type: "vocab", front: "おしいれ", reading: "oshiire", meaning: "closet", example: { jp: "おしいれにふとんをいれます。", en: "I put the futon in the closet." }, accept: ["cupboard", "storage closet"], hint: "a built-in Japanese storage closet" },
      ],
    },
    // Lesson 2: furniture & fittings
    {
      id: "ja-u50l2",
      unit: 50,
      lesson: 2,
      title: "Furniture & fittings",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about furniture: たんす ひきだし ほんだな たな カーテン ふとん.",
      items: [
        { id: "ja-u50l2-tansu", type: "vocab", front: "たんす", reading: "tansu", meaning: "chest of drawers", example: { jp: "へやにたんすがあります。", en: "There is a chest of drawers in the room." }, accept: ["dresser", "wardrobe", "a chest of drawers"] },
        { id: "ja-u50l2-hikidashi", type: "vocab", front: "ひきだし", reading: "hikidashi", meaning: "drawer", example: { jp: "ひきだしをあけます。", en: "I open the drawer." }, accept: ["a drawer", "drawers"] },
        { id: "ja-u50l2-hondana", type: "vocab", front: "ほんだな", reading: "hondana", meaning: "bookshelf", example: { jp: "ほんをほんだなにおきます。", en: "I put the book on the bookshelf." }, accept: ["bookcase", "book rack"] },
        { id: "ja-u50l2-tana", type: "vocab", front: "たな", reading: "tana", meaning: "shelf", example: { jp: "たなにおさらをならべます。", en: "I line up the plates on the shelf." }, accept: ["a shelf", "shelves", "rack"] },
        { id: "ja-u50l2-katen", type: "vocab", front: "カーテン", reading: "kāten", meaning: "curtain", example: { jp: "あさ、カーテンをあけます。", en: "I open the curtains in the morning." }, accept: ["curtains", "the curtain"] },
        { id: "ja-u50l2-futon", type: "vocab", front: "ふとん", reading: "futon", meaning: "futon", example: { jp: "よる、ふとんでねます。", en: "I sleep on the futon at night." }, accept: ["bedding", "the futon"] },
      ],
    },
    // Lesson 3: appliances & kitchen
    {
      id: "ja-u50l3",
      unit: 50,
      lesson: 3,
      title: "Appliances & kitchen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name kitchen and household gear: そうじき せんたくき れいぞうこ なべ さら ごみ.",
      items: [
        { id: "ja-u50l3-sojiki", type: "vocab", front: "そうじき", reading: "sōjiki", meaning: "vacuum cleaner", example: { jp: "そうじきでへやをそうじします。", en: "I clean the room with the vacuum." }, accept: ["hoover", "the vacuum"] },
        { id: "ja-u50l3-sentakuki", type: "vocab", front: "せんたくき", reading: "sentakuki", meaning: "washing machine", example: { jp: "せんたくきでふくをあらいます。", en: "I wash clothes in the washing machine." }, accept: ["the washer", "laundry machine"] },
        { id: "ja-u50l3-reizoko", type: "vocab", front: "れいぞうこ", reading: "reizōko", meaning: "refrigerator", example: { jp: "ぎゅうにゅうをれいぞうこにいれます。", en: "I put the milk in the fridge." }, accept: ["fridge", "the refrigerator"] },
        { id: "ja-u50l3-nabe", type: "vocab", front: "なべ", reading: "nabe", meaning: "pot", example: { jp: "なべでスープをつくります。", en: "I make soup in the pot." }, accept: ["a pot", "saucepan", "cooking pot"] },
        { id: "ja-u50l3-sara", type: "vocab", front: "さら", reading: "sara", meaning: "plate", example: { jp: "さらをテーブルにおきます。", en: "I put the plate on the table." }, accept: ["dish", "a plate", "plates"] },
        { id: "ja-u50l3-gomi", type: "vocab", front: "ごみ", reading: "gomi", meaning: "trash", example: { jp: "ごみをそとにだします。", en: "I take the trash outside." }, accept: ["garbage", "rubbish", "waste"] },
      ],
    },
    // Lesson 4: chores & cleaning
    {
      id: "ja-u50l4",
      unit: 50,
      lesson: 4,
      title: "Chores & cleaning",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Do the housework: はきます しまいます ほします たたみます ながします かざります.",
      items: [
        { id: "ja-u50l4-hakimasu", type: "vocab", front: "はきます", reading: "hakimasu", meaning: "sweep", example: { jp: "ゆかをはきます。", en: "I sweep the floor." }, accept: ["to sweep", "sweep up", "sweeps"], hint: "sweep with a broom" },
        { id: "ja-u50l4-shimaimasu", type: "vocab", front: "しまいます", reading: "shimaimasu", meaning: "put away", example: { jp: "さらをたなにしまいます。", en: "I put the plates away on the shelf." }, accept: ["to put away", "store", "puts away"] },
        { id: "ja-u50l4-hoshimasu", type: "vocab", front: "ほします", reading: "hoshimasu", meaning: "hang out to dry", example: { jp: "そとにせんたくものをほします。", en: "I hang the laundry out to dry." }, accept: ["to dry", "air out", "hangs to dry"] },
        { id: "ja-u50l4-tatamimasu", type: "vocab", front: "たたみます", reading: "tatamimasu", meaning: "fold", example: { jp: "ふくをたたみます。", en: "I fold the clothes." }, accept: ["to fold", "folds", "fold up"] },
        { id: "ja-u50l4-nagashimasu", type: "vocab", front: "ながします", reading: "nagashimasu", meaning: "rinse", example: { jp: "さらをみずでながします。", en: "I rinse the plates with water." }, accept: ["to rinse", "wash off", "flush"] },
        { id: "ja-u50l4-kazarimasu", type: "vocab", front: "かざります", reading: "kazarimasu", meaning: "decorate", example: { jp: "へやにはなをかざります。", en: "I decorate the room with flowers." }, accept: ["to decorate", "display", "adorn"] },
      ],
    },
  ],
};
