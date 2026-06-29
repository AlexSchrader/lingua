// Unit 18 — かんじ・ばしょ ("Kanji: directions & places") — A1 / N5
// Compass points 東西南北, plus everyday places 道駅店国本名 (the kanji behind
// えき/みせ from Unit 10). type:"kanji"; meaning is the recall target; examples
// reuse taught kanji (U11/13–15/17) + known kana.
export const UNIT18 = {
  id: "ja-u18",
  lang: "ja",
  title: "かんじ・ばしょ",
  order: 18,
  stage: "a1",
  lessons: [
    {
      id: "ja-u18l1",
      unit: 18,
      lesson: 1,
      title: "Compass",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the compass kanji 東 西 南 北 and 道 (road).",
      items: [
        { id: "ja-u18l1-higashi", type: "kanji", front: "東", reading: "higashi", meaning: "east", example: { jp: "東に行きます。", en: "I go east." }, accept: [], hint: "東 = east — 日 (sun) behind 木 (tree), sunrise. 東京 (Tokyo) = 'eastern capital'." },
        { id: "ja-u18l1-nishi", type: "kanji", front: "西", reading: "nishi", meaning: "west", example: { jp: "西の山です。", en: "It's the western mountain." }, accept: [], hint: "西 = west — where the sun sets." },
        { id: "ja-u18l1-minami", type: "kanji", front: "南", reading: "minami", meaning: "south", example: { jp: "南はあついです。", en: "The south is hot." }, accept: [], hint: "南 = south (the warm direction in Japan)." },
        { id: "ja-u18l1-kita", type: "kanji", front: "北", reading: "kita", meaning: "north", example: { jp: "北はさむいです。", en: "The north is cold." }, accept: [], hint: "北 = north — two people back-to-back, turned from the cold." },
        { id: "ja-u18l1-michi", type: "kanji", front: "道", reading: "michi", meaning: "road", example: { jp: "この道を行きます。", en: "I go down this road." }, accept: ["way", "street", "path"], hint: "道 = road / way. The 辶 radical = movement. 北海道 = Hokkaidō." },
      ],
    },
    {
      id: "ja-u18l2",
      unit: 18,
      lesson: 2,
      title: "Places",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read 駅 店 国 本 名 — station, shop, country, book, name.",
      items: [
        { id: "ja-u18l2-eki", type: "kanji", front: "駅", reading: "eki", meaning: "station", example: { jp: "駅に行きます。", en: "I go to the station." }, accept: ["train station"], hint: "駅 = (train) station — 馬 (horse) on the left, from old post-horse stations. You know えき (Unit 10)." },
        { id: "ja-u18l2-mise", type: "kanji", front: "店", reading: "mise", meaning: "shop", example: { jp: "店はどこですか。", en: "Where is the shop?" }, accept: ["store"], hint: "店 = shop / store (みせ, Unit 10) — 广, a roofed building." },
        { id: "ja-u18l2-kuni", type: "kanji", front: "国", reading: "kuni", meaning: "country", example: { jp: "どこの国ですか。", en: "Which country is it?" }, accept: ["nation"], hint: "国 = country — 口 (a border) around 玉 (jewel): a bordered land." },
        { id: "ja-u18l2-hon", type: "kanji", front: "本", reading: "hon", meaning: "book", example: { jp: "本を読みます。", en: "I read a book." }, accept: ["origin", "main"], hint: "本 = book (also 'origin') — 木 (tree) with a mark at the root. 日本 = Japan." },
        { id: "ja-u18l2-na", type: "kanji", front: "名", reading: "mei", meaning: "name", example: { jp: "名前を言います。", en: "I say my name." }, accept: ["famous"], hint: "名 = name — 夕 (evening) + 口 (mouth): calling a name in the dark. 名前 = namae." },
      ],
    },
  ],
};
