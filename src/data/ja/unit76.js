// Unit 76 — しぜん・かがく ("Nature, science & society") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 nature/science/society nouns not covered by the earlier science unit (u51).
// Every example stays within introduced vocab + basic grammar (は/が/を/に/で/の +
// です/ます). Naturalness-critical — flagged for the batch native review.
export const UNIT76 = {
  id: "ja-u76",
  lang: "ja",
  title: "しぜん・かがく・N4",
  order: 76,
  stage: "a2",
  lessons: [
    // Lesson 1: science & technology
    {
      id: "ja-u76l1",
      unit: 76,
      lesson: 1,
      title: "Science & technology",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about science and invention: はつめい はっけん ぎじゅつ どうぐ ぶんめい ロボット.",
      items: [
        { id: "ja-u76l1-hatsumei", type: "vocab", front: "はつめい", reading: "hatsumei", meaning: "invention", example: { jp: "すごいはつめいですね。", en: "What an amazing invention." }, accept: ["an invention"] },
        { id: "ja-u76l1-hakken", type: "vocab", front: "はっけん", reading: "hakken", meaning: "discovery", example: { jp: "あたらしいはっけんです。", en: "It's a new discovery." }, accept: ["a discovery", "finding"] },
        { id: "ja-u76l1-gijutsu", type: "vocab", front: "ぎじゅつ", reading: "gijutsu", meaning: "technology", example: { jp: "にほんのぎじゅつはすごいです。", en: "Japan's technology is amazing." }, accept: ["technique", "skill"] },
        { id: "ja-u76l1-dogu", type: "vocab", front: "どうぐ", reading: "dōgu", meaning: "tool", example: { jp: "べんりなどうぐです。", en: "It's a useful tool." }, accept: ["tools", "instrument"] },
        { id: "ja-u76l1-bunmei", type: "vocab", front: "ぶんめい", reading: "bunmei", meaning: "civilization", example: { jp: "ふるいぶんめいをべんきょうします。", en: "I study ancient civilizations." }, accept: ["a civilization"] },
        { id: "ja-u76l1-robotto", type: "vocab", front: "ロボット", reading: "robotto", meaning: "robot", example: { jp: "ロボットがそうじします。", en: "The robot does the cleaning." }, accept: ["a robot", "robots"] },
      ],
    },
    // Lesson 2: living things & nature
    {
      id: "ja-u76l2",
      unit: 76,
      lesson: 2,
      title: "Living things & nature",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about life and nature: せいぶつ しょくぶつ こんちゅう いのち じんるい しんりん.",
      items: [
        { id: "ja-u76l2-seibutsu", type: "vocab", front: "せいぶつ", reading: "seibutsu", meaning: "living thing", example: { jp: "うみには、いろいろなせいぶつがいます。", en: "There are many living things in the sea." }, accept: ["living things", "creature", "organism"] },
        { id: "ja-u76l2-shokubutsu", type: "vocab", front: "しょくぶつ", reading: "shokubutsu", meaning: "plant", example: { jp: "にわのしょくぶつがすきです。", en: "I like the plants in the garden." }, accept: ["plants", "vegetation"] },
        { id: "ja-u76l2-konchu", type: "vocab", front: "こんちゅう", reading: "konchū", meaning: "insect", example: { jp: "こどもはこんちゅうがすきです。", en: "Children like insects." }, accept: ["insects", "bug"] },
        { id: "ja-u76l2-inochi", type: "vocab", front: "いのち", reading: "inochi", meaning: "life", example: { jp: "いのちはたいせつです。", en: "Life is precious." }, accept: ["a life"] },
        { id: "ja-u76l2-jinrui", type: "vocab", front: "じんるい", reading: "jinrui", meaning: "humankind", example: { jp: "じんるいのれきしはながいです。", en: "The history of humankind is long." }, accept: ["humanity", "the human race"] },
        { id: "ja-u76l2-shinrin", type: "vocab", front: "しんりん", reading: "shinrin", meaning: "forest", example: { jp: "しんりんをまもります。", en: "We protect the forest." }, accept: ["woods", "woodland"] },
      ],
    },
    // Lesson 3: disasters & danger
    {
      id: "ja-u76l3",
      unit: 76,
      lesson: 3,
      title: "Disasters & danger",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about disasters and danger: つなみ こうずい かじ ひがい じけん きけん.",
      items: [
        { id: "ja-u76l3-tsunami", type: "vocab", front: "つなみ", reading: "tsunami", meaning: "tsunami", example: { jp: "じしんのあとに、つなみがきました。", en: "A tsunami came after the earthquake." }, accept: ["a tsunami", "tidal wave"] },
        { id: "ja-u76l3-kozui", type: "vocab", front: "こうずい", reading: "kōzui", meaning: "flood", example: { jp: "おおきいあめで、こうずいになりました。", en: "The heavy rain caused a flood." }, accept: ["a flood", "flooding"] },
        { id: "ja-u76l3-kaji", type: "vocab", front: "かじ", reading: "kaji", meaning: "fire (blaze)", example: { jp: "よる、かじがありました。", en: "There was a fire at night." }, accept: ["a fire", "blaze"] },
        { id: "ja-u76l3-higai", type: "vocab", front: "ひがい", reading: "higai", meaning: "damage", example: { jp: "たいふうのひがいがおおきいです。", en: "The typhoon damage is large." }, accept: ["harm", "damage from a disaster"] },
        { id: "ja-u76l3-jiken", type: "vocab", front: "じけん", reading: "jiken", meaning: "incident", example: { jp: "まちで、じけんがありました。", en: "There was an incident in town." }, accept: ["an incident", "case", "affair"] },
        { id: "ja-u76l3-kiken", type: "vocab", front: "きけん", reading: "kiken", meaning: "danger", example: { jp: "ここはきけんです。", en: "It's dangerous here." }, accept: ["dangerous", "peril"] },
      ],
    },
    // Lesson 4: society & the world
    {
      id: "ja-u76l4",
      unit: 76,
      lesson: 4,
      title: "Society & the world",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about society and the world: せんそう へいわ れきし ぶんか みらい せいふ.",
      items: [
        { id: "ja-u76l4-senso", type: "vocab", front: "せんそう", reading: "sensō", meaning: "war", example: { jp: "むかし、せんそうがありました。", en: "Long ago, there was a war." }, accept: ["a war"] },
        { id: "ja-u76l4-heiwa", type: "vocab", front: "へいわ", reading: "heiwa", meaning: "peace", example: { jp: "せかいのへいわをねがいます。", en: "I wish for world peace." }, accept: ["peaceful"] },
        { id: "ja-u76l4-rekishi", type: "vocab", front: "れきし", reading: "rekishi", meaning: "history", example: { jp: "にほんのれきしがすきです。", en: "I like Japanese history." }, accept: ["the past"] },
        { id: "ja-u76l4-bunka", type: "vocab", front: "ぶんか", reading: "bunka", meaning: "culture", example: { jp: "にほんのぶんかをべんきょうします。", en: "I study Japanese culture." }, accept: ["a culture"] },
        { id: "ja-u76l4-mirai", type: "vocab", front: "みらい", reading: "mirai", meaning: "future", example: { jp: "みらいはあかるいです。", en: "The future is bright." }, accept: ["the future"] },
        { id: "ja-u76l4-seifu", type: "vocab", front: "せいふ", reading: "seifu", meaning: "government", example: { jp: "せいふがきめます。", en: "The government decides." }, accept: ["the government", "administration"] },
      ],
    },
  ],
};
