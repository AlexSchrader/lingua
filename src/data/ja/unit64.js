// Unit 64 — かたち・いち ("Shapes & Position") — A1 thematic
// N5 words for shapes, relative position, direction, and orientation that the
// learner hasn't met yet: まる/しかく/さんかく (circle/square/triangle),
// むこう/すみ/よこ (over there/corner/side), the こっち/そっち/あっち/どっち
// direction set, and orientation words (まんなか/はんたい/ななめ). Grammar words
// (は・を・が・に・です・ます-verbs) are all previously taught; every example
// reuses only known vocab + particles. Taught as vocabulary, no new grammar.
// lang/unit/lesson in index.js.
export const UNIT64 = {
  id: "ja-u64",
  lang: "ja",
  title: "かたち・いち",
  order: 64,
  stage: "a1",
  lessons: [
    // Lesson 1: shapes
    {
      id: "ja-u64l1",
      unit: 64,
      lesson: 1,
      title: "Shapes",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name basic shapes — まる さんかく しかく — and describe a line as てん or まっすぐ.",
      items: [
        { id: "ja-u64l1-maru",     type: "vocab", front: "まる",   reading: "maru",    meaning: "circle", example: { jp: "これはまるです。", en: "This is a circle." }, accept: ["round", "circle shape"] },
        { id: "ja-u64l1-shikaku",  type: "vocab", front: "しかく", reading: "shikaku", meaning: "square", example: { jp: "これはしかくです。", en: "This is a square." }, accept: ["square shape", "rectangle"] },
        { id: "ja-u64l1-sankaku",  type: "vocab", front: "さんかく", reading: "sankaku", meaning: "triangle", example: { jp: "これはさんかくです。", en: "This is a triangle." }, accept: ["triangle shape"] },
        { id: "ja-u64l1-katachi",  type: "vocab", front: "かたち", reading: "katachi", meaning: "shape", example: { jp: "どんなかたちですか。", en: "What shape is it?" }, accept: ["form", "figure"] },
        { id: "ja-u64l1-ten",      type: "vocab", front: "てん",   reading: "ten",     meaning: "dot", example: { jp: "てんをかきます。", en: "I draw a dot." }, accept: ["point", "spot"] },
        { id: "ja-u64l1-massugu",  type: "vocab", front: "まっすぐ", reading: "massugu", meaning: "straight", example: { jp: "まっすぐいきます。", en: "I go straight." }, accept: ["straight ahead", "directly"] },
      ],
    },
    // Lesson 2: position around
    {
      id: "ja-u64l2",
      unit: 64,
      lesson: 2,
      title: "Position",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where something sits — むこう すみ よこ まわり ちかく とおく.",
      items: [
        { id: "ja-u64l2-mukou",   type: "vocab", front: "むこう", reading: "mukō",   meaning: "over there", example: { jp: "むこうにいえがあります。", en: "There's a house over there." }, accept: ["the other side", "across"] },
        { id: "ja-u64l2-sumi",    type: "vocab", front: "すみ",   reading: "sumi",   meaning: "corner", example: { jp: "へやのすみにいます。", en: "I'm in the corner of the room." }, accept: ["nook", "inside corner"] },
        { id: "ja-u64l2-yoko",    type: "vocab", front: "よこ",   reading: "yoko",   meaning: "side", example: { jp: "つくえのよこにいます。", en: "I'm beside the desk." }, accept: ["beside", "next to"] },
        { id: "ja-u64l2-mawari",  type: "vocab", front: "まわり", reading: "mawari", meaning: "surroundings", example: { jp: "いえのまわりをあるきます。", en: "I walk around the house." }, accept: ["around", "vicinity"] },
        { id: "ja-u64l2-chikaku", type: "vocab", front: "ちかく", reading: "chikaku", meaning: "nearby", example: { jp: "えきのちかくにいます。", en: "I'm near the station." }, accept: ["near", "vicinity"] },
        { id: "ja-u64l2-tooku",   type: "vocab", front: "とおく", reading: "tōku",   meaning: "far away", example: { jp: "とおくにやまがあります。", en: "There's a mountain far away." }, accept: ["distance", "far off"] },
      ],
    },
    // Lesson 3: direction
    {
      id: "ja-u64l3",
      unit: 64,
      lesson: 3,
      title: "Direction",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Point a way — こっち そっち あっち どっち — and name a むき or ほうこう.",
      items: [
        { id: "ja-u64l3-kotchi", type: "vocab", front: "こっち", reading: "kotchi", meaning: "this way", example: { jp: "こっちにきます。", en: "I come this way." }, accept: ["this direction", "over here"] },
        { id: "ja-u64l3-sotchi", type: "vocab", front: "そっち", reading: "sotchi", meaning: "that way", example: { jp: "そっちはあついです。", en: "It's hot over there." }, accept: ["that direction", "your way"] },
        { id: "ja-u64l3-atchi",  type: "vocab", front: "あっち", reading: "atchi",  meaning: "over that way", example: { jp: "あっちにいきます。", en: "I go over that way." }, accept: ["that way", "the other way"] },
        { id: "ja-u64l3-dotchi", type: "vocab", front: "どっち", reading: "dotchi", meaning: "which way", example: { jp: "どっちがすきですか。", en: "Which one do you like?" }, accept: ["which one", "which direction"] },
        { id: "ja-u64l3-muki",   type: "vocab", front: "むき",   reading: "muki",   meaning: "facing", example: { jp: "むきがちがいます。", en: "The way it faces is different." }, accept: ["direction", "orientation"] },
        { id: "ja-u64l3-houkou", type: "vocab", front: "ほうこう", reading: "hōkō",  meaning: "direction", example: { jp: "ほうこうがわかりません。", en: "I don't know the direction." }, accept: ["way", "bearing"] },
      ],
    },
    // Lesson 4: orientation & relative place
    {
      id: "ja-u64l4",
      unit: 64,
      lesson: 4,
      title: "Orientation",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe where and how — まんなか はんたい てまえ おく たて ななめ.",
      items: [
        { id: "ja-u64l4-mannaka", type: "vocab", front: "まんなか", reading: "mannaka", meaning: "center", example: { jp: "へやのまんなかにあります。", en: "It's in the center of the room." }, accept: ["middle", "centre"] },
        { id: "ja-u64l4-hantai",  type: "vocab", front: "はんたい", reading: "hantai",  meaning: "opposite", example: { jp: "はんたいにいきます。", en: "I go the opposite way." }, accept: ["reverse", "the other way"] },
        { id: "ja-u64l4-temae",   type: "vocab", front: "てまえ",   reading: "temae",   meaning: "this side", example: { jp: "えきのてまえにあります。", en: "It's just before the station." }, accept: ["near side", "just before"] },
        { id: "ja-u64l4-oku",     type: "vocab", front: "おく",     reading: "oku",     meaning: "the back", example: { jp: "へやのおくにいます。", en: "I'm at the back of the room." }, accept: ["inner part", "far end"] },
        { id: "ja-u64l4-tate",    type: "vocab", front: "たて",     reading: "tate",    meaning: "vertical", example: { jp: "たてにながいです。", en: "It's long vertically." }, accept: ["lengthwise", "up and down"] },
        { id: "ja-u64l4-naname",  type: "vocab", front: "ななめ",   reading: "naname",  meaning: "diagonal", example: { jp: "ななめにきります。", en: "I cut it diagonally." }, accept: ["slanted", "at an angle"] },
      ],
    },
  ],
};
