// Unit 18 — かんじ・けいようし・ばしょ (Adjective & place kanji) — A1 / JLPT N5
// Consolidated kanji unit (category: adjective & place kanji). Kanji regrouped by
// meaning from the earlier thin units so each unit is a coherent set. type:"kanji" —
// recognition/recall test the meaning, production traces. KanjiVG strokes by glyph.
// lang/unit/lesson stamped in index.js.
export const UNIT18 = {
  id: "ja-u18",
  lang: "ja",
  title: "かんじ・けいようし・ばしょ",
  order: 18,
  stage: "a1",
  lessons: [
    {
      id: "ja-u18l1",
      unit: 18,
      lesson: 1,
      title: "Adjective & place kanji 1",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the adjective kanji: 大 小 (big/small), 高 安 (pricey/cheap), 新 古 (new/old), 多 (many).",
      items: [
        { id: "ja-u18l1-dai", type: "kanji", front: "大", reading: "dai", meaning: "big", example: { jp: "大きいです。", en: "It's big." }, accept: ["large"] },
        { id: "ja-u18l1-sho", type: "kanji", front: "小", reading: "shō", meaning: "small", example: { jp: "小さいです。", en: "It's small." }, accept: ["little"] },
        { id: "ja-u18l1-takai", type: "kanji", front: "高", reading: "takai", meaning: "tall", example: { jp: "高いビルです。", en: "It's a tall building." }, accept: ["expensive","high"], hint: "高 = tall / expensive (たかい) — a tall tower shape. 高い." },
        { id: "ja-u18l1-yasui", type: "kanji", front: "安", reading: "yasui", meaning: "cheap", example: { jp: "安いみせです。", en: "It's a cheap shop." }, accept: ["inexpensive","peaceful"], hint: "安 = cheap (also 'at ease') — 宀 (roof) over 女 (woman): safe at home. 安い." },
        { id: "ja-u18l1-atarashii", type: "kanji", front: "新", reading: "atarashii", meaning: "new", example: { jp: "新しいくつです。", en: "They're new shoes." }, accept: ["brand new"], hint: "新 = new (あたらしい, met in Unit 10). 新しい." },
        { id: "ja-u18l1-furui", type: "kanji", front: "古", reading: "furui", meaning: "old", example: { jp: "古いおてらです。", en: "It's an old temple." }, accept: ["aged","secondhand"], hint: "古 = old (ふるい) — 十 (ten) + 口 (mouths): ten generations old. 古い." },
        { id: "ja-u18l1-oi", type: "kanji", front: "多", reading: "ōi", meaning: "many", example: { jp: "人が多いです。", en: "There are many people." }, accept: ["a lot","plenty"], hint: "多 = many (おおい) — two 夕 (evenings) stacked: many nights. 多い." },
      ],
    },
    {
      id: "ja-u18l2",
      unit: 18,
      lesson: 2,
      title: "Adjective & place kanji 2",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read 少 長 白 (few/long/white), and 学 校 (school), 道 (road), 駅 (station).",
      items: [
        { id: "ja-u18l2-sukunai", type: "kanji", front: "少", reading: "sukunai", meaning: "few", example: { jp: "水が少ないです。", en: "There's little water." }, accept: ["little","a little"], hint: "少 = few / little (すくない) — 小 (small) plus a slash, even less. 少ない." },
        { id: "ja-u18l2-nagai", type: "kanji", front: "長", reading: "nagai", meaning: "long", example: { jp: "長い川です。", en: "It's a long river." }, accept: ["chief"], hint: "長 = long (ながい) — long flowing hair. 長い. Also means 'chief'." },
        { id: "ja-u18l2-shiroi", type: "kanji", front: "白", reading: "shiroi", meaning: "white", example: { jp: "白いねこです。", en: "It's a white cat." }, accept: ["blank"], hint: "白 = white (しろ/しろい, Units 2 & 12)." },
        { id: "ja-u18l2-gaku", type: "kanji", front: "学", reading: "gaku", meaning: "study", example: { jp: "大学に行きます。", en: "I go to university." }, accept: ["learning","school (study)"], hint: "学 = study / learning. It's in 大学 (university) and 学校 (school)." },
        { id: "ja-u18l2-ko", type: "kanji", front: "校", reading: "kō", meaning: "school", example: { jp: "学校に行きます。", en: "I go to school." }, accept: ["the school"], hint: "校 = school — pairs with 学 to make 学校 (school). The 木 radical = the school building." },
        { id: "ja-u18l2-michi", type: "kanji", front: "道", reading: "michi", meaning: "road", example: { jp: "この道を行きます。", en: "I go down this road." }, accept: ["way","street","path"], hint: "道 = road / way. The 辶 radical = movement. 北海道 = Hokkaidō." },
        { id: "ja-u18l2-eki", type: "kanji", front: "駅", reading: "eki", meaning: "station", example: { jp: "駅に行きます。", en: "I go to the station." }, accept: ["train station"], hint: "駅 = (train) station — 馬 (horse) on the left, from old post-horse stations. You know えき (Unit 10)." },
      ],
    },
    {
      id: "ja-u18l3",
      unit: 18,
      lesson: 3,
      title: "Adjective & place kanji 3",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the place & thing kanji: 店 (shop), 国 (country), 本 (book), 間 (interval), 車 (car), 語 (language), 元 (origin).",
      items: [
        { id: "ja-u18l3-mise", type: "kanji", front: "店", reading: "mise", meaning: "shop", example: { jp: "店はどこですか。", en: "Where is the shop?" }, accept: ["store"], hint: "店 = shop / store (みせ, Unit 10) — 广, a roofed building." },
        { id: "ja-u18l3-kuni", type: "kanji", front: "国", reading: "kuni", meaning: "country", example: { jp: "どこの国ですか。", en: "Which country is it?" }, accept: ["nation"], hint: "国 = country — 口 (a border) around 玉 (jewel): a bordered land." },
        { id: "ja-u18l3-hon", type: "kanji", front: "本", reading: "hon", meaning: "book", example: { jp: "本を読みます。", en: "I read a book." }, accept: ["origin","main"], hint: "本 = book (also 'origin') — 木 (tree) with a mark at the root. 日本 = Japan." },
        { id: "ja-u18l3-aida", type: "kanji", front: "間", reading: "aida", meaning: "interval", example: { jp: "時間があります。", en: "I have time." }, accept: ["between","space","while","gap"], hint: "間 = interval / between — 門 (gate) with 日 (sun) showing through. 時間 = time (a span of hours)." },
        { id: "ja-u18l3-kuruma", type: "kanji", front: "車", reading: "kuruma", meaning: "car", example: { jp: "車で行きます。", en: "I go by car." }, accept: ["vehicle"], hint: "車 = car / vehicle — a cart from above (wheels + axle). You know くるま (Unit 2). 電車 = train." },
        { id: "ja-u18l3-go", type: "kanji", front: "語", reading: "go", meaning: "language", example: { jp: "日本語を話します。", en: "I speak Japanese." }, accept: ["word"], hint: "語 = language / word — 言 (speak) + 五 + 口. 日本語 = Japanese, 英語 = English." },
        { id: "ja-u18l3-gen", type: "kanji", front: "元", reading: "gen", meaning: "origin", example: { jp: "元気です。", en: "I'm well." }, accept: ["former","base"], hint: "元 = origin / former. With 気 it makes 元気 (genki = well) — you know げんき (Unit 3)." },
      ],
    },
  ],
};
