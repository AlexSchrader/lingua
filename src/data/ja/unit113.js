// Unit 113 — かんじ・まち (Town and buildings kanji) — B1 / JLPT N3
// Strand A. Glyphs you read walking around a Japanese town or standing in a room —
// the map words, then the parts of a building, then the words for where things sit.
// 4 lessons x (4 glyphs + 2 compound words) = 24 cards, the band-standard shape.
// lang/unit/lesson are stamped in src/data/index.js.
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
      canDo: "Read 橋 (bridge), 港 (harbour), 庫 (storehouse), 局 (bureau), and the words 空港 and 車庫.",
      items: [
        { id: "ja-u113l1-hashi", type: "kanji", front: "橋", reading: "hashi", meaning: "bridge", example: { jp: "川の 橋を 渡ると、すぐ 右に 駅が あります。", en: "Once you cross the river bridge, the station is right there on the right." }, accept: ["a bridge"], hint: "橋 = bridge — 木 (wood) on the left, the material old bridges were built from." },
        { id: "ja-u113l1-minato", type: "kanji", front: "港", reading: "minato", meaning: "harbour", example: { jp: "港に 大きな ふねが 着いて、人が たくさん おりました。", en: "A big ship arrived at the harbour and a lot of people got off." }, accept: ["port"], hint: "港 = harbour — 氵 (water) again. 空港 = airport, literally the air-harbour." },
        { id: "ja-u113l1-ko", type: "kanji", front: "庫", reading: "ko", meaning: "storehouse", example: { jp: "車庫に 車を 入れて から、家に 入りました。", en: "I put the car in the garage, then went into the house." }, accept: ["warehouse", "vault"], hint: "庫 = a place to keep things — 車 (vehicle) under a 广 roof. 車庫 = garage, 冷蔵庫 = fridge, 金庫 = a safe." },
        { id: "ja-u113l1-kyoku", type: "kanji", front: "局", reading: "kyoku", meaning: "bureau", example: { jp: "駅の となりに テレビ局が あって、よく 人が 立って います。", en: "There's a TV station next to the station, and people often stand around outside." }, accept: ["office", "station (broadcasting)", "department"], hint: "局 = an office of a larger body. 郵便局 = post office, 薬局 = pharmacy, テレビ局 = TV station." },
        { id: "ja-u113l1-kuko", type: "vocab", front: "空港", reading: "kūkō", meaning: "airport", example: { jp: "空港まで バスで 一時間 かかります。", en: "It takes an hour to the airport by bus." }, accept: ["air terminal"], hint: "空 (sky) + 港 (harbour) — the harbour for the sky." },
        { id: "ja-u113l1-shako", type: "vocab", front: "車庫", reading: "shako", meaning: "garage", example: { jp: "車を 車庫に 入れて から、家に 入りました。", en: "I put the car in the garage, then went inside." }, accept: ["car shed", "depot"] },
      ],
    },
    {
      id: "ja-u113l2",
      unit: 113,
      lesson: 2,
      title: "Places to be",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 園 (garden), 席 (seat), 窓 (window), 柱 (pillar), and the words 出席 and 電柱.",
      items: [
        { id: "ja-u113l2-en", type: "kanji", front: "園", reading: "en", meaning: "garden", example: { jp: "日曜日は 公園で 子どもと あそんで、その あと 買い物を します。", en: "On Sundays I play with the children in the park, then do the shopping." }, accept: ["park", "plantation"], hint: "園 = a walled-off green space — the box around it is the wall. 公園 = park, 動物園 = zoo." },
        { id: "ja-u113l2-seki", type: "kanji", front: "席", reading: "seki", meaning: "seat", example: { jp: "電車が こんで いたので、席に すわれませんでした。", en: "The train was crowded, so I couldn't get a seat." }, accept: ["a place to sit", "attendance"], hint: "席 = a seat that is yours for now. 出席 = attendance (turning up to your seat), 空席 = a free seat." },
        { id: "ja-u113l2-mado", type: "kanji", front: "窓", reading: "mado", meaning: "window", example: { jp: "あつい ので 窓を 開けたら、いい 風が 入って きました。", en: "It was hot, so I opened the window and a nice breeze came in." }, accept: ["a window"], hint: "窓 = window — 穴 (hole) on top and 心 (heart) below: the opening a building looks out of." },
        { id: "ja-u113l2-hashira", type: "kanji", front: "柱", reading: "hashira", meaning: "pillar", example: { jp: "古い 家の 柱は ふとくて、とても 強いです。", en: "The pillars of an old house are thick and very strong." }, accept: ["column", "post"], hint: "柱 = pillar — 木 (wood) + 主 (main): the main piece of timber holding a house up." },
        { id: "ja-u113l2-shusseki", type: "vocab", front: "出席", reading: "shusseki", meaning: "attendance", example: { jp: "かぜで 会議に 出席できませんでした。", en: "I had a cold and couldn't attend the meeting." }, accept: ["to attend", "being present"], hint: "出 (go out) + 席 (seat) — turning up to your seat. Its opposite is 欠席." },
        { id: "ja-u113l2-denchu", type: "vocab", front: "電柱", reading: "denchū", meaning: "utility pole", example: { jp: "強い 風で 電柱が たおれました。", en: "A strong wind knocked the utility pole down." }, accept: ["telegraph pole", "power pole"] },
      ],
    },
    {
      id: "ja-u113l3",
      unit: 113,
      lesson: 3,
      title: "Parts of a building",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 板 (board), 箱 (box), 戸 (door), 底 (bottom), and the words 黒板 and 海底.",
      items: [
        { id: "ja-u113l3-ita", type: "kanji", front: "板", reading: "ita", meaning: "board", example: { jp: "教室の 前の 黒板に 大きく 字を 書きました。", en: "I wrote large letters on the blackboard at the front of the classroom." }, accept: ["plank", "sheet"], hint: "板 = a flat plank — 木 (wood) + 反. 黒板 = blackboard, まな板 = a chopping board." },
        { id: "ja-u113l3-hako", type: "kanji", front: "箱", reading: "hako", meaning: "box", example: { jp: "古い 本を 箱に 入れて、へやの すみに おきました。", en: "I put the old books in a box and set it in the corner of the room." }, accept: ["case", "carton"], hint: "箱 = box — the 竹 bamboo radical on top, from woven bamboo containers. ごみ箱 = wastebasket." },
        { id: "ja-u113l3-to", type: "kanji", front: "戸", reading: "to", meaning: "door", example: { jp: "戸を しずかに 開けて、家の 中に 入りました。", en: "I opened the door quietly and went into the house." }, accept: ["sliding door", "household"], hint: "戸 = an old-style sliding door — the picture is one leaf of a double door. It also counts households: 一戸." },
        { id: "ja-u113l3-soko", type: "kanji", front: "底", reading: "soko", meaning: "bottom", example: { jp: "海の 底には まだ 知らない ものが たくさん あって、今も しらべて います。", en: "There are still many unknown things at the bottom of the sea, and research goes on today." }, accept: ["base", "sole", "depths"], hint: "底 = the underneath of something — the 广 roof on the left, as in 店 and 庫." },
        { id: "ja-u113l3-kokuban", type: "vocab", front: "黒板", reading: "kokuban", meaning: "blackboard", example: { jp: "先生が 黒板に 大きく 字を 書きました。", en: "The teacher wrote large letters on the blackboard." }, accept: ["chalkboard"] },
        { id: "ja-u113l3-kaitei", type: "vocab", front: "海底", reading: "kaitei", meaning: "the seabed", example: { jp: "海底には まだ 知らない ものが たくさん あります。", en: "There is still much unknown on the seabed." }, accept: ["ocean floor", "bottom of the sea"] },
      ],
    },
    {
      id: "ja-u113l4",
      unit: 113,
      lesson: 4,
      title: "Where things sit",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 側 (side), 部 (section), 所 (place), 居 (to reside), and the words 右側 and 住居.",
      items: [
        { id: "ja-u113l4-gawa", type: "kanji", front: "側", reading: "gawa", meaning: "side", example: { jp: "道の 右側を 歩くと、店が よく 見えます。", en: "If you walk on the right side of the road, you can see the shops well." }, accept: ["flank", "the other party"], hint: "側 = one side of a pair — 亻 (person) on the left. 右側 = the right side, 内側 = the inside." },
        { id: "ja-u113l4-bu", type: "kanji", front: "部", reading: "bu", meaning: "section", example: { jp: "その 話の 一部は ほんとうですが、全部では ありません。", en: "Part of that story is true, but not all of it." }, accept: ["part", "club", "department"], hint: "部 = a part of a whole. 全部 = all of it, 一部 = a part, 部屋 = a room (a part of a house)." },
        { id: "ja-u113l4-tokoro", type: "kanji", front: "所", reading: "tokoro", meaning: "place", example: { jp: "しずかな 所を さがして、そこで 本を 読みます。", en: "I look for a quiet place and read there." }, accept: ["spot", "address", "location"], hint: "所 = place. 住所 = address, 事務所 = office, 台所 = kitchen — the place with the counter." },
        { id: "ja-u113l4-kyo", type: "kanji", front: "居", reading: "kyo", meaning: "to reside", example: { jp: "昼間は ずっと 居間で 本を 読んで います。", en: "In the daytime I stay in the living room reading." }, accept: ["to be present", "dwelling", "to stay"], hint: "居 = be somewhere / live somewhere — the 尸 shape on top is a body at rest. 住居 = a dwelling, 居間 = the living room." },
        { id: "ja-u113l4-migigawa", type: "vocab", front: "右側", reading: "migigawa", meaning: "the right side", example: { jp: "この 紙の 右側に 名前を 書いて から、出して ください。", en: "Write your name on the right side of this sheet, then hand it in." }, accept: ["right-hand side"] },
        { id: "ja-u113l4-jukyo", type: "vocab", front: "住居", reading: "jūkyo", meaning: "dwelling", example: { jp: "新しい 住居は 駅から 近くて、とても べんりです。", en: "My new home is close to the station and very convenient." }, accept: ["residence", "housing"] },
      ],
    },
  ],
};
