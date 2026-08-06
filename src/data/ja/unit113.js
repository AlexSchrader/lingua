// Unit 113 — かんじ・まち (Town and buildings kanji) — B1 / JLPT N3
// Strand A. Glyphs you read walking around a Japanese town or standing in a room —
// the map words, then the parts of a building, then the words for where things sit.
// 3 lessons x 6/5/5 = 16 glyphs. lang/unit/lesson are stamped in src/data/index.js.
export const UNIT113 = {
  id: "ja-u113",
  lang: "ja",
  title: "かんじ・まち",
  order: 113,
  stage: "b1",
  lessons: [
    {
      id: "ja-u113l1",
      unit: 113,
      lesson: 1,
      title: "Around town",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the kanji on a town map: 橋 (bridge), 港 (harbour), 庫 (storehouse), 局 (bureau), 園 (garden), 席 (seat).",
      items: [
        { id: "ja-u113l1-hashi", type: "kanji", front: "橋", reading: "hashi", meaning: "bridge", example: { jp: "川の 橋を 渡ると、すぐ 右に 駅が あります。", en: "Once you cross the river bridge, the station is right there on the right." }, accept: ["a bridge"], hint: "橋 = bridge — 木 (wood) on the left, the material old bridges were built from." },
        { id: "ja-u113l1-minato", type: "kanji", front: "港", reading: "minato", meaning: "harbour", example: { jp: "港に 大きな 船が 着いて、人が たくさん 降りました。", en: "A big ship arrived at the harbour and a lot of people got off." }, accept: ["port"], hint: "港 = harbour — 氵 (water) again. 空港 = airport, literally the air-harbour." },
        { id: "ja-u113l1-ko", type: "kanji", front: "庫", reading: "ko", meaning: "storehouse", example: { jp: "車庫に 車を 入れて から、家に 入りました。", en: "I put the car in the garage, then went into the house." }, accept: ["warehouse", "vault"], hint: "庫 = a place to keep things — 車 (vehicle) under a 广 roof. 車庫 = garage, 冷蔵庫 = fridge, 金庫 = a safe." },
        { id: "ja-u113l1-kyoku", type: "kanji", front: "局", reading: "kyoku", meaning: "bureau", example: { jp: "手紙を 出したいので、郵便局まで 歩きます。", en: "I want to post a letter, so I'll walk to the post office." }, accept: ["office", "station (broadcasting)", "department"], hint: "局 = an office of a larger body. 郵便局 = post office, 薬局 = pharmacy, テレビ局 = TV station." },
        { id: "ja-u113l1-en", type: "kanji", front: "園", reading: "en", meaning: "garden", example: { jp: "日曜日は 公園で 子どもと 遊んで、その あと 買い物を します。", en: "On Sundays I play with the children in the park, then do the shopping." }, accept: ["park", "plantation"], hint: "園 = a walled-off green space — the box around it is the wall. 公園 = park, 動物園 = zoo." },
        { id: "ja-u113l1-seki", type: "kanji", front: "席", reading: "seki", meaning: "seat", example: { jp: "電車が こんで いたので、席に すわれませんでした。", en: "The train was crowded, so I couldn't get a seat." }, accept: ["a place to sit", "attendance"], hint: "席 = a seat that is yours for now. 出席 = attendance (turning up to your seat), 空席 = a free seat." },
      ],
    },
    {
      id: "ja-u113l2",
      unit: 113,
      lesson: 2,
      title: "Parts of a building",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the kanji for what a room is made of: 窓 (window), 柱 (pillar), 板 (board), 箱 (box), 戸 (door).",
      items: [
        { id: "ja-u113l2-mado", type: "kanji", front: "窓", reading: "mado", meaning: "window", example: { jp: "あつい ので 窓を 開けたら、いい 風が 入って きました。", en: "It was hot, so I opened the window and a nice breeze came in." }, accept: ["a window"], hint: "窓 = window — 穴 (hole) on top and 心 (heart) below: the opening a building looks out of." },
        { id: "ja-u113l2-hashira", type: "kanji", front: "柱", reading: "hashira", meaning: "pillar", example: { jp: "古い 家の 柱は ふとくて、とても 強いです。", en: "The pillars of an old house are thick and very strong." }, accept: ["column", "post"], hint: "柱 = pillar — 木 (wood) + 主 (main): the main piece of timber holding a house up." },
        { id: "ja-u113l2-ita", type: "kanji", front: "板", reading: "ita", meaning: "board", example: { jp: "教室の 前の 黒板に 大きく 字を 書きました。", en: "I wrote large letters on the blackboard at the front of the classroom." }, accept: ["plank", "sheet"], hint: "板 = a flat plank — 木 (wood) + 反. 黒板 = blackboard, まな板 = a chopping board." },
        { id: "ja-u113l2-hako", type: "kanji", front: "箱", reading: "hako", meaning: "box", example: { jp: "古い 本を 箱に 入れて、へやの すみに 置きました。", en: "I put the old books in a box and set it in the corner of the room." }, accept: ["case", "carton"], hint: "箱 = box — the 竹 bamboo radical on top, from woven bamboo containers. ごみ箱 = wastebasket." },
        { id: "ja-u113l2-to", type: "kanji", front: "戸", reading: "to", meaning: "door", example: { jp: "戸を 静かに 開けて、家の 中に 入りました。", en: "I opened the door quietly and went into the house." }, accept: ["sliding door", "household"], hint: "戸 = an old-style sliding door — the picture is one leaf of a double door. It also counts households: 一戸." },
      ],
    },
    {
      id: "ja-u113l3",
      unit: 113,
      lesson: 3,
      title: "Where things sit",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the kanji of position: 底 (bottom), 側 (side), 部 (section), 所 (place), 居 (to reside).",
      items: [
        { id: "ja-u113l3-soko", type: "kanji", front: "底", reading: "soko", meaning: "bottom", example: { jp: "海の 底には まだ 知らない ものが たくさん あって、今も しらべて います。", en: "There are still many unknown things at the bottom of the sea, and research goes on today." }, accept: ["base", "sole", "depths"], hint: "底 = the underneath of something — the 广 roof on the left, as in 店 and 庫." },
        { id: "ja-u113l3-gawa", type: "kanji", front: "側", reading: "gawa", meaning: "side", example: { jp: "道の 右側を 歩くと、店が よく 見えます。", en: "If you walk on the right side of the road, you can see the shops well." }, accept: ["flank", "the other party"], hint: "側 = one side of a pair — 亻 (person) on the left. 右側 = the right side, 内側 = the inside." },
        { id: "ja-u113l3-bu", type: "kanji", front: "部", reading: "bu", meaning: "section", example: { jp: "その 話の 一部は 本当ですが、全部では ありません。", en: "Part of that story is true, but not all of it." }, accept: ["part", "club", "department"], hint: "部 = a part of a whole. 全部 = all of it, 一部 = a part, 部屋 = a room (a part of a house)." },
        { id: "ja-u113l3-tokoro", type: "kanji", front: "所", reading: "tokoro", meaning: "place", example: { jp: "静かな 所を さがして、そこで 本を 読みます。", en: "I look for a quiet place and read there." }, accept: ["spot", "address", "location"], hint: "所 = place. 住所 = address, 事務所 = office, 台所 = kitchen — the place with the counter." },
        { id: "ja-u113l3-kyo", type: "kanji", front: "居", reading: "kyo", meaning: "to reside", example: { jp: "昼間は ずっと 居間で 本を 読んで います。", en: "In the daytime I stay in the living room reading." }, accept: ["to be present", "dwelling", "to stay"], hint: "居 = be somewhere / live somewhere — the 尸 shape on top is a body at rest. 住居 = a dwelling, 居間 = the living room." },
      ],
    },
  ],
};
