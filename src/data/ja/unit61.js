// Unit 61 — しぜん・どうぶつ ("Nature & Animals") — A1 thematic
// N5 nature and animal words the learner hasn't met yet: common animals (mammals,
// birds, insects, water creatures) plus everyday plant and landscape nouns. Meanings
// stay to a single headword so choice cards read cleanly; plurals live in accept[].
// Examples reuse only already-taught nouns, adjectives, verbs and particles — no new
// grammar. lang/unit/lesson wiring lives in index.js.
export const UNIT61 = {
  id: "ja-u61",
  lang: "ja",
  title: "しぜん・どうぶつ",
  order: 61,
  stage: "a1",
  lessons: [
    // Lesson 1: animals (mammals)
    {
      id: "ja-u61l1",
      unit: 61,
      lesson: 1,
      title: "Animals",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name common animals: どうぶつ うさぎ ねずみ とら ライオン パンダ.",
      items: [
        { id: "ja-u61l1-doubutsu", type: "vocab", front: "どうぶつ", reading: "dōbutsu", meaning: "animal", example: { jp: "どうぶつがすきです。", en: "I like animals." }, accept: ["animals"] },
        { id: "ja-u61l1-usagi", type: "vocab", front: "うさぎ", reading: "usagi", meaning: "rabbit", example: { jp: "うさぎはしろいです。", en: "The rabbit is white." }, accept: ["rabbits", "bunny"] },
        { id: "ja-u61l1-nezumi", type: "vocab", front: "ねずみ", reading: "nezumi", meaning: "mouse", example: { jp: "ねずみはちいさいです。", en: "The mouse is small." }, accept: ["rat", "mice"] },
        { id: "ja-u61l1-tora", type: "vocab", front: "とら", reading: "tora", meaning: "tiger", example: { jp: "とらはつよいです。", en: "The tiger is strong." }, accept: ["tigers"] },
        { id: "ja-u61l1-raion", type: "vocab", front: "ライオン", reading: "raion", meaning: "lion", example: { jp: "ライオンをみます。", en: "I look at the lion." }, accept: ["lions"] },
        { id: "ja-u61l1-panda", type: "vocab", front: "パンダ", reading: "panda", meaning: "panda", example: { jp: "パンダはくろいです。", en: "The panda is black." }, accept: ["pandas"] },
      ],
    },
    // Lesson 2: birds & insects
    {
      id: "ja-u61l2",
      unit: 61,
      lesson: 2,
      title: "Birds & insects",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name birds and insects: にわとり あひる ひよこ ちょう とんぼ あり.",
      items: [
        { id: "ja-u61l2-niwatori", type: "vocab", front: "にわとり", reading: "niwatori", meaning: "chicken", example: { jp: "にわとりがいます。", en: "There is a chicken." }, accept: ["hen", "chickens"] },
        { id: "ja-u61l2-ahiru", type: "vocab", front: "あひる", reading: "ahiru", meaning: "duck", example: { jp: "あひるがおよぎます。", en: "The duck swims." }, accept: ["ducks"] },
        { id: "ja-u61l2-hiyoko", type: "vocab", front: "ひよこ", reading: "hiyoko", meaning: "chick", example: { jp: "ひよこはちいさいです。", en: "The chick is small." }, accept: ["baby chick", "chicks"] },
        { id: "ja-u61l2-chou", type: "vocab", front: "ちょう", reading: "chō", meaning: "butterfly", example: { jp: "ちょうがとびます。", en: "A butterfly is flying." }, accept: ["butterflies"] },
        { id: "ja-u61l2-tonbo", type: "vocab", front: "とんぼ", reading: "tonbo", meaning: "dragonfly", example: { jp: "とんぼをみます。", en: "I see a dragonfly." }, accept: ["dragonflies"] },
        { id: "ja-u61l2-ari", type: "vocab", front: "あり", reading: "ari", meaning: "ant", example: { jp: "ありがたくさんいます。", en: "There are many ants." }, accept: ["ants"], hint: "The insect — don't confuse with あります (to exist)." },
      ],
    },
    // Lesson 3: water creatures & reptiles
    {
      id: "ja-u61l3",
      unit: 61,
      lesson: 3,
      title: "Sea & reptiles",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name water creatures and reptiles: へび かえる かめ いか たこ かに.",
      items: [
        { id: "ja-u61l3-hebi", type: "vocab", front: "へび", reading: "hebi", meaning: "snake", example: { jp: "へびはながいです。", en: "The snake is long." }, accept: ["snakes"] },
        { id: "ja-u61l3-kaeru", type: "vocab", front: "かえる", reading: "kaeru", meaning: "frog", example: { jp: "かえるがなきます。", en: "The frog is croaking." }, accept: ["frogs"], hint: "The animal, not the verb かえります (to return)." },
        { id: "ja-u61l3-kame", type: "vocab", front: "かめ", reading: "kame", meaning: "turtle", example: { jp: "かめはおそいです。", en: "The turtle is slow." }, accept: ["tortoise", "turtles"] },
        { id: "ja-u61l3-ika", type: "vocab", front: "いか", reading: "ika", meaning: "squid", example: { jp: "いかをたべます。", en: "I eat squid." }, accept: ["squids"] },
        { id: "ja-u61l3-tako", type: "vocab", front: "たこ", reading: "tako", meaning: "octopus", example: { jp: "たこはおいしいです。", en: "Octopus is delicious." }, accept: ["octopuses"] },
        { id: "ja-u61l3-kani", type: "vocab", front: "かに", reading: "kani", meaning: "crab", example: { jp: "かにをたべます。", en: "I eat crab." }, accept: ["crabs"] },
      ],
    },
    // Lesson 4: plants & land
    {
      id: "ja-u61l4",
      unit: 61,
      lesson: 4,
      title: "Plants & land",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name plants and landscape: くさ はっぱ たね えだ おか なみ.",
      items: [
        { id: "ja-u61l4-kusa", type: "vocab", front: "くさ", reading: "kusa", meaning: "grass", example: { jp: "にわにくさがあります。", en: "There is grass in the garden." }, accept: ["weed", "weeds"] },
        { id: "ja-u61l4-happa", type: "vocab", front: "はっぱ", reading: "happa", meaning: "leaf", example: { jp: "はっぱはみどりです。", en: "The leaf is green." }, accept: ["leaves"] },
        { id: "ja-u61l4-tane", type: "vocab", front: "たね", reading: "tane", meaning: "seed", example: { jp: "たねはちいさいです。", en: "The seed is small." }, accept: ["seeds"] },
        { id: "ja-u61l4-eda", type: "vocab", front: "えだ", reading: "eda", meaning: "branch", example: { jp: "とりがえだにいます。", en: "A bird is on the branch." }, accept: ["twig", "branches"] },
        { id: "ja-u61l4-oka", type: "vocab", front: "おか", reading: "oka", meaning: "hill", example: { jp: "おかにのぼります。", en: "I climb the hill." }, accept: ["hills"] },
        { id: "ja-u61l4-nami", type: "vocab", front: "なみ", reading: "nami", meaning: "wave", example: { jp: "うみになみがあります。", en: "There are waves in the sea." }, accept: ["waves"] },
      ],
    },
  ],
};
