// Unit 117 — かんじ・じかん (Time and order kanji) — B1 / JLPT N3
// Strand A, last character unit of block 1. Glyphs for when and in what order —
// periods, speed, and the words a timetable or a schedule is written with.
// 3 lessons x 6/5/5 = 16 glyphs. lang/unit/lesson are stamped in src/data/index.js.
export const UNIT117 = {
  id: "ja-u117",
  lang: "ja",
  title: "かんじ・じかん",
  order: 117,
  stage: "b1",
  lessons: [
    {
      id: "ja-u117l1",
      unit: 117,
      lesson: 1,
      title: "Periods and order",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the kanji of periods and sequence: 期 (period), 昨 (yesterday), 初 (first), 順 (order), 続 (continue), 常 (usual).",
      items: [
        { id: "ja-u117l1-ki", type: "kanji", front: "期", reading: "ki", meaning: "period", example: { jp: "学期の 終わりに 試験が ありますから、今から 勉強します。", en: "There's an exam at the end of term, so I'm studying from now." }, accept: ["term", "time", "phase"], hint: "期 = a marked-off stretch of time. 学期 = school term, 時期 = a season or time of year." },
        { id: "ja-u117l1-saku", type: "kanji", front: "昨", reading: "saku", meaning: "yesterday", example: { jp: "昨年の 夏は あつくて、外に 出られませんでした。", en: "Last summer was hot, and I couldn't go outside." }, accept: ["last (year/night)", "previous"], hint: "昨 = the one just past — 日 (sun/day) on the left. 昨日 = yesterday, 昨年 = last year." },
        { id: "ja-u117l1-hatsu", type: "kanji", front: "初", reading: "hatsu", meaning: "first", example: { jp: "初めて 日本に 行った ときの ことは、今も よく おぼえて います。", en: "I still remember well the first time I went to Japan." }, accept: ["beginning", "the start", "first time"], hint: "初 = the first of its kind — 衤 (cloth) + 刀 (knife): the first cut into new cloth. 最初 = the very first." },
        { id: "ja-u117l1-jun", type: "kanji", front: "順", reading: "jun", meaning: "order", example: { jp: "名前の 順に ならんで、一人ずつ 中に 入ります。", en: "Line up in name order and go in one at a time." }, accept: ["sequence", "turn", "obedient"], hint: "順 = the order things come in — 順番 = one's turn. It also means obliging: 順調 = going smoothly." },
        { id: "ja-u117l1-zoku", type: "kanji", front: "続", reading: "zoku", meaning: "to continue", example: { jp: "雨が 三日 続いて、川の 水が ふえました。", en: "The rain continued for three days, and the river rose." }, accept: ["to go on", "sequel", "to last"], hint: "続 = keep going — 糸 (thread) on the left, one length joined to the next. 続く / 続ける." },
        { id: "ja-u117l1-jo", type: "kanji", front: "常", reading: "jō", meaning: "usual", example: { jp: "この 店は 日常の 品を 安く 売って いますから、よく 行きます。", en: "This shop sells everyday goods cheaply, so I go there often." }, accept: ["ordinary", "always", "constant"], hint: "常 = the normal state of things. 日常 = daily life, 非常に = extremely (out of the ordinary)." },
      ],
    },
    {
      id: "ja-u117l2",
      unit: 117,
      lesson: 2,
      title: "Fast, slow, stopped",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the kanji of speed and arrival: 速 (fast), 遅 (late), 直 (direct), 停 (halt), 到 (arrive).",
      items: [
        { id: "ja-u117l2-soku", type: "kanji", front: "速", reading: "soku", meaning: "fast", example: { jp: "この 電車は 速いので、三十分で 着きます。", en: "This train is fast, so it arrives in thirty minutes." }, accept: ["speed", "rapid", "quick"], hint: "速 = fast in movement — ⻌ road radical. 早い is early in time; 速い is quick in speed." },
        { id: "ja-u117l2-osoi", type: "kanji", front: "遅", reading: "osoi", meaning: "late", example: { jp: "電車が 遅れたので、会議に まにあいませんでした。", en: "The train was late, so I didn't make the meeting." }, accept: ["slow", "to be delayed", "behind"], hint: "遅 = behind time — ⻌ road again. 遅れる = to be delayed, 遅刻 = arriving late." },
        { id: "ja-u117l2-choku", type: "kanji", front: "直", reading: "choku", meaning: "direct", example: { jp: "駅から 家まで 真っ直ぐ 帰って、すぐに 休みました。", en: "I went straight home from the station and rested right away." }, accept: ["straight", "immediately", "to fix"], hint: "直 = straight, with no bend or delay. 直接 = directly, 真っ直ぐ = straight ahead — and 直す = to fix." },
        { id: "ja-u117l2-tei", type: "kanji", front: "停", reading: "tei", meaning: "to halt", example: { jp: "バス停で 十分 待って から、やっと のれました。", en: "I waited ten minutes at the bus stop and finally got on." }, accept: ["stop", "to stop over", "suspension"], hint: "停 = come to a stop — 亻 (person) on the left. バス停 = bus stop, 停電 = a power cut." },
        { id: "ja-u117l2-to", type: "kanji", front: "到", reading: "tō", meaning: "to arrive", example: { jp: "ふねが 港に 到着して、みんな 元気に おりました。", en: "The ship arrived at the harbour, and everyone got off in good spirits." }, accept: ["reach", "arrival"], hint: "到 = reach the destination — 至 (arrive) + 刂. You meet it mostly in 到着 = arrival, the partner of 出発." },
      ],
    },
    {
      id: "ja-u117l3",
      unit: 117,
      lesson: 3,
      title: "Plans and promises",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the kanji of arrangements: 昇 (rise), 束 (bundle), 予 (beforehand), 約 (promise), 存 (exist).",
      items: [
        { id: "ja-u117l3-sho", type: "kanji", front: "昇", reading: "shō", meaning: "to rise", example: { jp: "朝 早く 山に のぼって、日が 昇るのを 見ました。", en: "I climbed the mountain early and watched the sun rise." }, accept: ["to ascend", "promotion", "to go up"], hint: "昇 = go up — 日 (sun) on top. 日が 昇る = the sun rises; 昇進 = promotion at work." },
        { id: "ja-u117l3-taba", type: "kanji", front: "束", reading: "taba", meaning: "bundle", example: { jp: "花を 一束 買って、母に あげました。", en: "I bought a bunch of flowers and gave them to my mother." }, accept: ["bunch", "to bind"], hint: "束 = things tied together — a bundle of wood, drawn. It also binds people: 約束 = a promise." },
        { id: "ja-u117l3-yo", type: "kanji", front: "予", reading: "yo", meaning: "beforehand", example: { jp: "店に 予約を してから、友だちと 出かけました。", en: "I made a booking at the shop, then went out with my friend." }, accept: ["in advance", "reservation", "pre-"], hint: "予 = ahead of time. 予定 = a plan, 予約 = a reservation, 天気予報 = the weather forecast." },
        { id: "ja-u117l3-yaku", type: "kanji", front: "約", reading: "yaku", meaning: "promise", example: { jp: "約束の 時間に 遅れたので、走って 行きました。", en: "I was late for the time we'd agreed, so I ran." }, accept: ["approximately", "agreement", "about"], hint: "約 = tie an agreement — 糸 (thread) again. Before a number it means 'about': 約十分 = around ten minutes." },
        { id: "ja-u117l3-son", type: "kanji", front: "存", reading: "son", meaning: "to exist", example: { jp: "その 古い 店は 今も 存在して いて、みんなが よく 行きます。", en: "That old shop still exists, and people go there often." }, accept: ["to be", "existence", "to remain"], hint: "存 = be there / still standing. 存在 = existence; ご存じですか = do you know? — the polite form built on it." },
      ],
    },
  ],
};
