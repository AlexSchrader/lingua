// Unit 190 — ごい・N3・72 ("N3 vocab 72") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (mazeru, shikaku, shiki/jiki) disambiguated via hints.
export const UNIT190 = {
  id: "ja-u190", lang: "ja", title: "ごい・N3・72", order: 190, stage: "b1",
  lessons: [
    {
      id: "ja-u190l1", unit: 190, lesson: 1, title: "N3 vocab 72·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 増す (to increase), 貧しい (poor), 混ぜる (to mix), 交ぜる (to mix in), 街 (town), 間違い (mistake).",
      items: [
        { id: "ja-u190l1-masu", type: "vocab", front: "増す", reading: "masu", meaning: "to increase", example: { jp: "あめでかわのみずが増しました。", en: "The rain increased the river's water." }, accept: ["to gain", "to grow"] },
        { id: "ja-u190l1-mazushii", type: "vocab", front: "貧しい", reading: "mazushii", meaning: "poor", example: { jp: "むかしはとても貧しかったです。", en: "Long ago, we were very poor." }, accept: ["needy"] },
        { id: "ja-u190l1-mazeru", type: "vocab", front: "混ぜる", reading: "mazeru", meaning: "to mix", example: { jp: "たまごをよく混ぜます。", en: "I mix the eggs well." }, accept: ["to stir"], hint: "混ぜる (まぜる) = to blend / stir together; same reading as 交ぜる." },
        { id: "ja-u190l1-mazeru2", type: "vocab", front: "交ぜる", reading: "mazeru", meaning: "to mix in", example: { jp: "カードをよく交ぜます。", en: "I shuffle the cards well." }, accept: ["to blend in", "to shuffle"], hint: "交ぜる (まぜる) = to intermix / shuffle; same reading as 混ぜる." },
        { id: "ja-u190l1-machi", type: "vocab", front: "街", reading: "machi", meaning: "town", example: { jp: "この街はよるもにぎやかです。", en: "This town is lively at night too." }, accept: ["street", "downtown"], hint: "街 (まち) = town / busy district; same reading as 町." },
        { id: "ja-u190l1-machigai", type: "vocab", front: "間違い", reading: "machigai", meaning: "mistake", example: { jp: "テストの間違いをなおします。", en: "I fix the mistakes on the test." }, accept: ["error"] },
      ],
    },
    {
      id: "ja-u190l2", unit: 190, lesson: 2, title: "N3 vocab 72·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 松 (pine), 真っ赤 (deep red), 全く (completely), 祭 (festival), まとまる (to come together), まとめる (to gather).",
      items: [
        { id: "ja-u190l2-matsu", type: "vocab", front: "松", reading: "matsu", meaning: "pine", example: { jp: "にわにおおきな松があります。", en: "There is a big pine tree in the garden." }, accept: ["pine tree"] },
        { id: "ja-u190l2-makka", type: "vocab", front: "真っ赤", reading: "makka", meaning: "deep red", example: { jp: "ゆうやけでそらが真っ赤です。", en: "The sky is deep red at sunset." }, accept: ["bright red", "flushed"] },
        { id: "ja-u190l2-mattaku", type: "vocab", front: "全く", reading: "mattaku", meaning: "completely", example: { jp: "いみが全くわかりません。", en: "I completely do not understand the meaning." }, accept: ["really", "entirely"] },
        { id: "ja-u190l2-matsuri", type: "vocab", front: "祭", reading: "matsuri", meaning: "festival", example: { jp: "なつの祭はとてもたのしいです。", en: "The summer festival is very fun." }, accept: ["feast"] },
        { id: "ja-u190l2-matomaru", type: "vocab", front: "まとまる", reading: "matomaru", meaning: "to come together", example: { jp: "みんなのいけんがまとまりました。", en: "Everyone's opinions came together." }, accept: ["to be settled", "to be in order"] },
        { id: "ja-u190l2-matomeru", type: "vocab", front: "まとめる", reading: "matomeru", meaning: "to gather", example: { jp: "つくえのうえのかみをまとめます。", en: "I gather the papers on the desk." }, accept: ["to put in order", "to collect"] },
      ],
    },
    {
      id: "ja-u190l3", unit: 190, lesson: 3, title: "N3 vocab 72·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 学ぶ (to learn), 真似 (imitation), 招く (to invite), まぶしい (dazzling), 柵 (fence), 裂ける (to split).",
      items: [
        { id: "ja-u190l3-manabu", type: "vocab", front: "学ぶ", reading: "manabu", meaning: "to learn", example: { jp: "がっこうでにほんごを学びます。", en: "I learn Japanese at school." }, accept: ["to study"] },
        { id: "ja-u190l3-mane", type: "vocab", front: "真似", reading: "mane", meaning: "imitation", example: { jp: "とりのこえの真似をします。", en: "I imitate a bird's voice." }, accept: ["mimicry", "copying"] },
        { id: "ja-u190l3-maneku", type: "vocab", front: "招く", reading: "maneku", meaning: "to invite", example: { jp: "ともだちをいえに招きます。", en: "I invite a friend to my house." }, accept: ["to beckon", "to summon"] },
        { id: "ja-u190l3-mabushii", type: "vocab", front: "まぶしい", reading: "mabushii", meaning: "dazzling", example: { jp: "あさのたいようがまぶしいです。", en: "The morning sun is dazzling." }, accept: ["radiant", "bright"] },
        { id: "ja-u190l3-saku3", type: "vocab", front: "柵", reading: "saku", meaning: "fence", example: { jp: "はたけのまわりに柵をつくります。", en: "I build a fence around the field." }, accept: ["paling", "railing"] },
        { id: "ja-u190l3-sakeru2", type: "vocab", front: "裂ける", reading: "sakeru", meaning: "to split", example: { jp: "つよいかぜでかみが裂けました。", en: "The paper tore in the strong wind." }, accept: ["to tear", "to rip"] },
      ],
    },
    {
      id: "ja-u190l4", unit: 190, lesson: 4, title: "N3 vocab 72·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 裁く (to judge), 酸化 (oxidation), 資格 (qualification), 視覚 (sight), 指揮 (command), 磁気 (magnetism).",
      items: [
        { id: "ja-u190l4-sabaku2", type: "vocab", front: "裁く", reading: "sabaku", meaning: "to judge", example: { jp: "わるいことをしたひとを裁きます。", en: "I judge the person who did wrong." }, accept: ["to pass judgment", "to try"] },
        { id: "ja-u190l4-sanka2", type: "vocab", front: "酸化", reading: "sanka", meaning: "oxidation", example: { jp: "てつはみずで酸化します。", en: "Iron oxidizes with water." }, accept: ["oxidization"] },
        { id: "ja-u190l4-shikaku2", type: "vocab", front: "資格", reading: "shikaku", meaning: "qualification", example: { jp: "あたらしい資格をとりたいです。", en: "I want to get a new qualification." }, accept: ["requirement", "credential"], hint: "資格 (しかく) = qualification; same reading as 視覚 (sight)." },
        { id: "ja-u190l4-shikaku3", type: "vocab", front: "視覚", reading: "shikaku", meaning: "sight", example: { jp: "視覚はたいせつなちからです。", en: "Sight is an important ability." }, accept: ["vision", "sense of sight"], hint: "視覚 (しかく) = sense of sight; same reading as 資格 (qualification)." },
        { id: "ja-u190l4-shiki2", type: "vocab", front: "指揮", reading: "shiki", meaning: "command", example: { jp: "せんせいがおんがくの指揮をします。", en: "The teacher conducts the music." }, accept: ["direction", "conducting"], hint: "指揮 (しき) = command / conducting; same reading start as 磁気 (じき, magnetism)." },
        { id: "ja-u190l4-jiki2", type: "vocab", front: "磁気", reading: "jiki", meaning: "magnetism", example: { jp: "このカードには磁気があります。", en: "This card has magnetism." }, accept: ["magnetic force"], hint: "磁気 (じき) = magnetism; near-homophone of 指揮 (しき, command)." },
      ],
    },
  ],
};
