// Unit 60 — ひと・からだ・N5 ("People, Body & Everyday") — A1 thematic
// N5 body-part nouns (みみ ear, くち mouth, あし leg…) plus common everyday
// personal items (スカート skirt, ゆびわ ring, サンダル sandals…). All fronts are new —
// none collide with earlier units. Examples reuse only vocab and particles the
// learner already knows (いたい, あります, かいます, あらいます, etc.); no new
// grammar. lang/unit/lesson wiring lives in index.js.
export const UNIT60 = {
  id: "ja-u60",
  lang: "ja",
  title: "ひと・からだ・N5",
  order: 60,
  stage: "a1",
  lessons: [
    // Lesson 1: body (1) — head-to-torso parts
    {
      id: "ja-u60l1",
      unit: 60,
      lesson: 1,
      title: "Body 1",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name upper-body parts: みみ くち あし うで くび むね; say which part hurts.",
      items: [
        { id: "ja-u60l1-mimi", type: "vocab", front: "みみ", reading: "mimi", meaning: "ear", example: { jp: "ねこのみみはちいさいです。", en: "A cat's ears are small." }, accept: ["ears"] },
        { id: "ja-u60l1-kuchi", type: "vocab", front: "くち", reading: "kuchi", meaning: "mouth", example: { jp: "くちをあけます。", en: "I open my mouth." }, accept: ["mouths"] },
        { id: "ja-u60l1-ashi", type: "vocab", front: "あし", reading: "ashi", meaning: "leg", example: { jp: "あしをあらいます。", en: "I wash my feet." }, accept: ["foot", "feet"] },
        { id: "ja-u60l1-ude", type: "vocab", front: "うで", reading: "ude", meaning: "arm", example: { jp: "うでがつよいです。", en: "My arms are strong." }, accept: ["arms"] },
        { id: "ja-u60l1-kubi", type: "vocab", front: "くび", reading: "kubi", meaning: "neck", example: { jp: "くびがいたいです。", en: "My neck hurts." }, accept: ["necks"] },
        { id: "ja-u60l1-mune", type: "vocab", front: "むね", reading: "mune", meaning: "chest", example: { jp: "むねがいたいです。", en: "My chest hurts." }, accept: ["breast"] },
      ],
    },
    // Lesson 2: body (2) — lower body & finer parts
    {
      id: "ja-u60l2",
      unit: 60,
      lesson: 2,
      title: "Body 2",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name more body parts: ひざ こし ほね あご ほほ おしり.",
      items: [
        { id: "ja-u60l2-hiza", type: "vocab", front: "ひざ", reading: "hiza", meaning: "knee", example: { jp: "ひざがいたいです。", en: "My knee hurts." }, accept: ["knees", "lap"] },
        { id: "ja-u60l2-koshi", type: "vocab", front: "こし", reading: "koshi", meaning: "lower back", example: { jp: "こしがよわいです。", en: "My lower back is weak." }, accept: ["waist", "hips"] },
        { id: "ja-u60l2-hone", type: "vocab", front: "ほね", reading: "hone", meaning: "bone", example: { jp: "ほねはかたいです。", en: "Bones are hard." }, accept: ["bones"] },
        { id: "ja-u60l2-ago", type: "vocab", front: "あご", reading: "ago", meaning: "jaw", example: { jp: "あごがちいさいです。", en: "The jaw is small." }, accept: ["chin"] },
        { id: "ja-u60l2-hoho", type: "vocab", front: "ほほ", reading: "hoho", meaning: "cheek", example: { jp: "ほほがあかいです。", en: "My cheeks are red." }, accept: ["cheeks"] },
        { id: "ja-u60l2-oshiri", type: "vocab", front: "おしり", reading: "oshiri", meaning: "bottom", example: { jp: "おしりがいたいです。", en: "My bottom hurts." }, accept: ["buttocks", "butt"] },
      ],
    },
    // Lesson 3: everyday objects (1) — desk & study things
    {
      id: "ja-u60l3",
      unit: 60,
      lesson: 3,
      title: "Everyday things 1",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name everyday items: スカート ベルト マフラー ゆびわ くし しゃしん.",
      items: [
        { id: "ja-u60l3-sukato", type: "vocab", front: "スカート", reading: "sukāto", meaning: "skirt", example: { jp: "あおいスカートです。", en: "It's a blue skirt." }, accept: ["skirts"] },
        { id: "ja-u60l3-beruto", type: "vocab", front: "ベルト", reading: "beruto", meaning: "belt", example: { jp: "ベルトをします。", en: "I put on a belt." }, accept: ["belts"] },
        { id: "ja-u60l3-mafura", type: "vocab", front: "マフラー", reading: "mafurā", meaning: "scarf", example: { jp: "あたたかいマフラーです。", en: "It's a warm scarf." }, accept: ["muffler", "winter scarf"] },
        { id: "ja-u60l3-yubiwa", type: "vocab", front: "ゆびわ", reading: "yubiwa", meaning: "ring", example: { jp: "ゆびわをかいます。", en: "I buy a ring." }, accept: ["rings"] },
        { id: "ja-u60l3-kushi", type: "vocab", front: "くし", reading: "kushi", meaning: "comb", example: { jp: "くしをつかいます。", en: "I use a comb." }, accept: ["combs"] },
        { id: "ja-u60l3-shashin", type: "vocab", front: "しゃしん", reading: "shashin", meaning: "photo", example: { jp: "しゃしんをとります。", en: "I take a photo." }, accept: ["photograph", "picture"] },
      ],
    },
    // Lesson 4: everyday objects (2) — around the house
    {
      id: "ja-u60l4",
      unit: 60,
      lesson: 4,
      title: "Everyday things 2",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name everyday items: サンダル スリッパ したぎ パジャマ はがき ようふく.",
      items: [
        { id: "ja-u60l4-sandaru", type: "vocab", front: "サンダル", reading: "sandaru", meaning: "sandals", example: { jp: "あたらしいサンダルです。", en: "They're new sandals." }, accept: ["sandal"] },
        { id: "ja-u60l4-surippa", type: "vocab", front: "スリッパ", reading: "surippa", meaning: "slippers", example: { jp: "スリッパをはきます。", en: "I put on slippers." }, accept: ["slipper"] },
        { id: "ja-u60l4-shitagi", type: "vocab", front: "したぎ", reading: "shitagi", meaning: "underwear", example: { jp: "したぎをあらいます。", en: "I wash my underwear." }, accept: ["undergarments"] },
        { id: "ja-u60l4-pajama", type: "vocab", front: "パジャマ", reading: "pajama", meaning: "pajamas", example: { jp: "パジャマをきます。", en: "I wear pajamas." }, accept: ["pyjamas"] },
        { id: "ja-u60l4-hagaki", type: "vocab", front: "はがき", reading: "hagaki", meaning: "postcard", example: { jp: "はがきをかきます。", en: "I write a postcard." }, accept: ["postcards"] },
        { id: "ja-u60l4-yofuku", type: "vocab", front: "ようふく", reading: "yōfuku", meaning: "clothes", example: { jp: "ようふくをかいます。", en: "I buy clothes." }, accept: ["Western clothes", "clothing"] },
      ],
    },
  ],
};
