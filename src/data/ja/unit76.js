// Unit 76 — かんじ・こうつう ("Kanji — travel, places & direction") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// N3 kanji, many hooking onto known vocab: 交通→こうつう, 空港→くうこう, 迎える→むかえます,
// 泊まる→とまります, 角→かど, 遅刻→ちこくします… KanjiVG strokes required (KANJI_N3).
// Naturalness → native review.
export const UNIT76 = {
  id: "ja-u76", lang: "ja", title: "かんじ・こうつう", order: 76, stage: "b1",
  lessons: [
    {
      id: "ja-u76l1", unit: 76, lesson: 1, title: "Transport", cefr: "B1", dominantMode: "recall",
      canDo: "Read transport kanji: 交 空 迎 泊 訪 迷.",
      items: [
        { id: "ja-u76l1-ko", type: "kanji", front: "交", reading: "kō", meaning: "cross / exchange", example: { jp: "交通がべんりです。", en: "The transport is convenient." }, accept: ["mix", "mingle"], hint: "交 = cross / exchange. In 交通 (こうつう, traffic), 交換 (exchange)." },
        { id: "ja-u76l1-ku", type: "kanji", front: "空", reading: "kū", meaning: "sky / empty", example: { jp: "空港にとうちゃくします。", en: "I arrive at the airport." }, accept: ["air", "vacant"], hint: "空 = sky / empty. 空 (そら) = sky. In 空港 (くうこう, airport), 空気 (くうき, air)." },
        { id: "ja-u76l1-mukaeru", type: "kanji", front: "迎", reading: "mukaeru", meaning: "welcome / greet", example: { jp: "えきで友だちを迎えます。", en: "I meet my friend at the station." }, accept: ["receive", "pick up"], hint: "迎 = welcome / meet. 迎える (むかえる) = to greet. ⻌ (movement) radical." },
        { id: "ja-u76l1-tomaru", type: "kanji", front: "泊", reading: "tomaru", meaning: "stay overnight", example: { jp: "ホテルに泊まります。", en: "I stay at a hotel." }, accept: ["lodge"], hint: "泊 = stay overnight. 泊まる (とまる) = to stay. In 宿泊 (しゅくはく, lodging). 氵 radical." },
        { id: "ja-u76l1-otozureru", type: "kanji", front: "訪", reading: "otozureru", meaning: "visit", example: { jp: "せんせいのいえを訪ねます。", en: "I visit the teacher's house." }, accept: ["call on"], hint: "訪 = visit. 訪ねる (たずねる) / 訪れる (おとずれる) = to visit. 言 (words) radical." },
        { id: "ja-u76l1-mayou", type: "kanji", front: "迷", reading: "mei", meaning: "get lost / hesitate", example: { jp: "みちに迷いました。", en: "I got lost." }, accept: ["stray", "waver"], hint: "迷 = get lost / hesitate. 迷う (まよう). In 迷惑 (めいわく, nuisance). ⻌ radical." },
      ],
    },
    {
      id: "ja-u76l2", unit: 76, lesson: 2, title: "Places & regions", cefr: "B1", dominantMode: "recall",
      canDo: "Read place kanji: 街 域 郊 距 離 側.",
      items: [
        { id: "ja-u76l2-machi", type: "kanji", front: "街", reading: "machi", meaning: "town / street", example: { jp: "街をあるきます。", en: "I walk through the town." }, accept: ["city district"], hint: "街 = town / street. 街 (まち). In 商店街 (shopping street). 行 radical." },
        { id: "ja-u76l2-iki", type: "kanji", front: "域", reading: "iki", meaning: "area / region", example: { jp: "この地域はしずかです。", en: "This area is quiet." }, accept: ["zone", "range"], hint: "域 = area / region. In 地域 (ちいき, region), 区域 (くいき, zone). 土 radical." },
        { id: "ja-u76l2-ko", type: "kanji", front: "郊", reading: "kō", meaning: "suburbs", example: { jp: "郊外にすんでいます。", en: "I live in the suburbs." }, accept: ["outskirts"], hint: "郊 = suburbs. In 郊外 (こうがい, the suburbs). ⻏ (village) radical." },
        { id: "ja-u76l2-kyo", type: "kanji", front: "距", reading: "kyo", meaning: "distance", example: { jp: "えきまでの距離です。", en: "It's the distance to the station." }, accept: ["gap"], hint: "距 = distance. In 距離 (きょり, distance). 足 (foot) radical." },
        { id: "ja-u76l2-hanareru", type: "kanji", front: "離", reading: "hanareru", meaning: "separate / leave", example: { jp: "いえから離れます。", en: "I leave home / get away from home." }, accept: ["part from"], hint: "離 = separate / leave. 離れる (はなれる). In 距離 (きょり, distance)." },
        { id: "ja-u76l2-gawa", type: "kanji", front: "側", reading: "gawa", meaning: "side", example: { jp: "みぎ側をあるきます。", en: "I walk on the right side." }, accept: ["flank"], hint: "側 = side. In 右側 (みぎがわ, right side), 両側 (both sides). 亻 radical." },
      ],
    },
    {
      id: "ja-u76l3", unit: 76, lesson: 3, title: "Direction & position", cefr: "B1", dominantMode: "recall",
      canDo: "Read direction kanji: 角 端 横 縦 斜 沿.",
      items: [
        { id: "ja-u76l3-kado", type: "kanji", front: "角", reading: "kado", meaning: "corner / angle", example: { jp: "つぎの角をまがります。", en: "I turn at the next corner." }, accept: ["horn"], hint: "角 = corner / angle. 角 (かど) = corner; 角 (つの) = horn. In 三角 (triangle)." },
        { id: "ja-u76l3-hashi", type: "kanji", front: "端", reading: "hashi", meaning: "edge / end", example: { jp: "みちの端をあるきます。", en: "I walk along the edge of the road." }, accept: ["tip", "margin"], hint: "端 = edge / end. 端 (はし). In 先端 (せんたん, tip). 立 radical." },
        { id: "ja-u76l3-yoko", type: "kanji", front: "横", reading: "yoko", meaning: "side / horizontal", example: { jp: "えきの横にあります。", en: "It's beside the station." }, accept: ["beside", "width"], hint: "横 = side / horizontal. 横 (よこ). ⇄ 縦. 木 (tree) radical." },
        { id: "ja-u76l3-tate", type: "kanji", front: "縦", reading: "tate", meaning: "vertical / length", example: { jp: "縦にならびます。", en: "We line up vertically." }, accept: ["lengthwise"], hint: "縦 = vertical / lengthwise. 縦 (たて). ⇄ 横. 糸 (thread) radical." },
        { id: "ja-u76l3-naname", type: "kanji", front: "斜", reading: "naname", meaning: "slanted / diagonal", example: { jp: "斜めにきります。", en: "I cut it diagonally." }, accept: ["oblique"], hint: "斜 = slanted / diagonal. 斜め (ななめ). In 斜面 (しゃめん, slope)." },
        { id: "ja-u76l3-sou", type: "kanji", front: "沿", reading: "en", meaning: "along", example: { jp: "かわに沿ってあるきます。", en: "I walk along the river." }, accept: ["follow (a line)"], hint: "沿 = along. 沿う (そう) = to follow along. In 沿線 (えんせん, along the line). 氵 radical." },
      ],
    },
    {
      id: "ja-u76l4", unit: 76, lesson: 4, title: "Journeys", cefr: "B1", dominantMode: "recall",
      canDo: "Read journey kanji: 航 輸 駐 遅 越 昇.",
      items: [
        { id: "ja-u76l4-ko", type: "kanji", front: "航", reading: "kō", meaning: "navigate / sail", example: { jp: "航空けんをよやくします。", en: "I book an air ticket." }, accept: ["voyage", "flight"], hint: "航 = navigate / sail. In 航空 (こうくう, aviation), 欠航 (けっこう, cancelled flight). 舟 (boat) radical." },
        { id: "ja-u76l4-yu", type: "kanji", front: "輸", reading: "yu", meaning: "transport", example: { jp: "くるまを輸出します。", en: "We export cars." }, accept: ["send", "convey"], hint: "輸 = transport. In 輸出 (ゆしゅつ, export), 輸入 (ゆにゅう, import). 車 (vehicle) radical." },
        { id: "ja-u76l4-chu", type: "kanji", front: "駐", reading: "chū", meaning: "park / station", example: { jp: "くるまを駐車します。", en: "I park the car." }, accept: ["reside (of troops)"], hint: "駐 = park / be stationed. In 駐車 (ちゅうしゃ, parking). 馬 (horse) radical." },
        { id: "ja-u76l4-okureru", type: "kanji", front: "遅", reading: "okureru", meaning: "late / slow", example: { jp: "でんしゃに遅れます。", en: "I'm late for the train." }, accept: ["delay", "tardy"], hint: "遅 = late / slow. 遅れる (おくれる) = to be late. In 遅刻 (ちこく, lateness). ⻌ radical." },
        { id: "ja-u76l4-koeru", type: "kanji", front: "越", reading: "koeru", meaning: "cross over / exceed", example: { jp: "やまを越えます。", en: "I cross over the mountain." }, accept: ["surpass"], hint: "越 = cross over / exceed. 越える (こえる). In 引っ越し (ひっこし, moving house). 走 radical." },
        { id: "ja-u76l4-noboru", type: "kanji", front: "昇", reading: "noboru", meaning: "rise / ascend", example: { jp: "たいようが昇ります。", en: "The sun rises." }, accept: ["go up"], hint: "昇 = rise / ascend. 昇る (のぼる) = to rise (sun). In 上昇 (じょうしょう, rising). 日 (sun) on top." },
      ],
    },
  ],
};
