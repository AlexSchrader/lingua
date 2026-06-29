// Unit 20 — かんじ・けいようし ("Kanji: adjectives & state") — A1 / N5
// The い-adjective kanji 高安新古多少長白 (several behind Unit 10/12 vocab), plus
// 気 (spirit) + 元 (origin) which combine into 元気 (genki, "well") — a word they
// already know. reading = the adjective/word; meaning is the recall target.
export const UNIT20 = {
  id: "ja-u20",
  lang: "ja",
  title: "かんじ・けいようし",
  order: 20,
  stage: "a1",
  lessons: [
    {
      id: "ja-u20l1",
      unit: 20,
      lesson: 1,
      title: "Tall, cheap, new",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the adjective kanji 高 安 新 古 多.",
      items: [
        { id: "ja-u20l1-takai", type: "kanji", front: "高", reading: "takai", meaning: "tall", example: { jp: "高いビルです。", en: "It's a tall building." }, accept: ["expensive", "high"], hint: "高 = tall / expensive (たかい) — a tall tower shape. 高い." },
        { id: "ja-u20l1-yasui", type: "kanji", front: "安", reading: "yasui", meaning: "cheap", example: { jp: "安いみせです。", en: "It's a cheap shop." }, accept: ["inexpensive", "peaceful"], hint: "安 = cheap (also 'at ease') — 宀 (roof) over 女 (woman): safe at home. 安い." },
        { id: "ja-u20l1-atarashii", type: "kanji", front: "新", reading: "atarashii", meaning: "new", example: { jp: "新しいくつです。", en: "They're new shoes." }, accept: ["brand new"], hint: "新 = new (あたらしい, met in Unit 10). 新しい." },
        { id: "ja-u20l1-furui", type: "kanji", front: "古", reading: "furui", meaning: "old", example: { jp: "古いおてらです。", en: "It's an old temple." }, accept: ["aged", "secondhand"], hint: "古 = old (ふるい) — 十 (ten) + 口 (mouths): ten generations old. 古い." },
        { id: "ja-u20l1-ooi", type: "kanji", front: "多", reading: "ōi", meaning: "many", example: { jp: "人が多いです。", en: "There are many people." }, accept: ["a lot", "plenty"], hint: "多 = many (おおい) — two 夕 (evenings) stacked: many nights. 多い." },
      ],
    },
    {
      id: "ja-u20l2",
      unit: 20,
      lesson: 2,
      title: "Few, long, well",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read 少 長 白, and 気 + 元 (which make 元気 = well).",
      items: [
        { id: "ja-u20l2-sukunai", type: "kanji", front: "少", reading: "sukunai", meaning: "few", example: { jp: "水が少ないです。", en: "There's little water." }, accept: ["little", "a little"], hint: "少 = few / little (すくない) — 小 (small) plus a slash, even less. 少ない." },
        { id: "ja-u20l2-nagai", type: "kanji", front: "長", reading: "nagai", meaning: "long", example: { jp: "長い川です。", en: "It's a long river." }, accept: ["chief"], hint: "長 = long (ながい) — long flowing hair. 長い. Also means 'chief'." },
        { id: "ja-u20l2-shiroi", type: "kanji", front: "白", reading: "shiroi", meaning: "white", example: { jp: "白いねこです。", en: "It's a white cat." }, accept: ["blank"], hint: "白 = white (しろ/しろい, Units 2 & 12)." },
        { id: "ja-u20l2-ki", type: "kanji", front: "気", reading: "ki", meaning: "spirit", example: { jp: "元気ですか。", en: "How are you? (Are you well?)" }, accept: ["energy", "feeling", "air"], hint: "気 = spirit / feeling / air. In 元気 (well), 天気 (weather), 電気 (electricity)." },
        { id: "ja-u20l2-gen", type: "kanji", front: "元", reading: "gen", meaning: "origin", example: { jp: "元気です。", en: "I'm well." }, accept: ["former", "base"], hint: "元 = origin / former. With 気 it makes 元気 (genki = well) — you know げんき (Unit 3)." },
      ],
    },
  ],
};
