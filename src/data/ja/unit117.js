// Unit 117 — かんじ・じかん (Time and order kanji) — B1 / JLPT N3
// Strand A, last character unit of block 1. Glyphs for when and in what order —
// periods, speed, and the words a timetable or a schedule is written with.
// 4 lessons x (4 glyphs + 2 compound words) = 24 cards, the band-standard shape.
// lang/unit/lesson are stamped in src/data/index.js.
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
      canDo: "Read 期 (period), 昨 (yesterday), 初 (first), 順 (order), and the words 学期 and 初期.",
      items: [
        { id: "ja-u117l1-ki", type: "kanji", front: "期", reading: "ki", meaning: "period", example: { jp: "学期の 終わりに 試験が ありますから、今から 勉強します。", en: "There's an exam at the end of term, so I'm studying from now." }, accept: ["term", "time", "phase"], hint: "期 = a marked-off stretch of time. 学期 = school term, 時期 = a season or time of year." },
        { id: "ja-u117l1-saku", type: "kanji", front: "昨", reading: "saku", meaning: "yesterday", example: { jp: "昨年の 夏は あつくて、外に 出られませんでした。", en: "Last summer was hot, and I couldn't go outside." }, accept: ["last (year/night)", "previous"], hint: "昨 = the one just past — 日 (sun/day) on the left. 昨日 = yesterday, 昨年 = last year." },
        { id: "ja-u117l1-hatsu", type: "kanji", front: "初", reading: "hatsu", meaning: "first", example: { jp: "初めて 日本に 行った ときの ことは、今も よく おぼえて います。", en: "I still remember well the first time I went to Japan." }, accept: ["beginning", "the start", "first time"], hint: "初 = the first of its kind — 衤 (cloth) + 刀 (knife): the first cut into new cloth. 最初 = the very first." },
        { id: "ja-u117l1-jun", type: "kanji", front: "順", reading: "jun", meaning: "order", example: { jp: "名前の 順に ならんで、一人ずつ 中に 入ります。", en: "Line up in name order and go in one at a time." }, accept: ["sequence", "turn", "obedient"], hint: "順 = the order things come in — 順番 = one's turn. It also means obliging: 順調 = going smoothly." },
        { id: "ja-u117l1-gakki", type: "vocab", front: "学期", reading: "gakki", meaning: "school term", example: { jp: "新しい 学期が 始まって、友だちが ふえました。", en: "A new term started, and I made more friends." }, accept: ["semester", "term"] },
        { id: "ja-u117l1-shoki", type: "vocab", front: "初期", reading: "shoki", meaning: "the early stage", example: { jp: "初期の うちに 直したので、大きな 問題に なりませんでした。", en: "I fixed it at an early stage, so it never became a big problem." }, accept: ["beginning", "initial period", "early days"], hint: "初 (first) + 期 (period) — the first stretch of something." },
      ],
    },
    {
      id: "ja-u117l2",
      unit: 117,
      lesson: 2,
      title: "Carrying on",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 続 (to continue), 常 (usual), 速 (fast), 遅 (late), and the words 日常 and 高速.",
      items: [
        { id: "ja-u117l2-zoku", type: "kanji", front: "続", reading: "zoku", meaning: "to continue", example: { jp: "雨が 三日 続いて、川の 水が ふえました。", en: "The rain continued for three days, and the river rose." }, accept: ["to go on", "sequel", "to last"], hint: "続 = keep going — 糸 (thread) on the left, one length joined to the next. 続く / 続ける." },
        { id: "ja-u117l2-jo", type: "kanji", front: "常", reading: "jō", meaning: "usual", example: { jp: "この 店は 日常の 品を 安く 売って いますから、よく 行きます。", en: "This shop sells everyday goods cheaply, so I go there often." }, accept: ["ordinary", "always", "constant"], hint: "常 = the normal state of things. 日常 = daily life, 非常に = extremely (out of the ordinary)." },
        { id: "ja-u117l2-soku", type: "kanji", front: "速", reading: "soku", meaning: "fast", example: { jp: "この 電車は 速いので、三十分で 着きます。", en: "This train is fast, so it arrives in thirty minutes." }, accept: ["speed", "rapid", "quick"], hint: "速 = fast in movement — ⻌ road radical. 早い is early in time; 速い is quick in speed." },
        { id: "ja-u117l2-osoi", type: "kanji", front: "遅", reading: "osoi", meaning: "late", example: { jp: "電車が 遅れたので、会議に まにあいませんでした。", en: "The train was late, so I didn't make the meeting." }, accept: ["slow", "to be delayed", "behind"], hint: "遅 = behind time — ⻌ road again. 遅れる = to be delayed, 遅刻 = arriving late." },
        { id: "ja-u117l2-nichijo", type: "vocab", front: "日常", reading: "nichijō", meaning: "everyday life", example: { jp: "日常 使う ものは、駅前の 店で 買って います。", en: "I buy the things I use day to day at the shop by the station." }, accept: ["daily life", "routine", "ordinary"] },
        { id: "ja-u117l2-kosoku", type: "vocab", front: "高速", reading: "kōsoku", meaning: "high speed", example: { jp: "高速バスなら、三時間で 着きますから、そちらに します。", en: "The express bus gets there in three hours, so I'll take that." }, accept: ["express", "fast"], hint: "高 (high) + 速 (speed). 高速道路 = motorway." },
      ],
    },
    {
      id: "ja-u117l3",
      unit: 117,
      lesson: 3,
      title: "Arriving on time",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 直 (direct), 停 (to halt), 到 (to arrive), 昇 (to rise), and the words 正直 and 到着.",
      items: [
        { id: "ja-u117l3-choku", type: "kanji", front: "直", reading: "choku", meaning: "direct", example: { jp: "駅から 家まで 真っ直ぐ 帰って、すぐに 休みました。", en: "I went straight home from the station and rested right away." }, accept: ["straight", "immediately", "to fix"], hint: "直 = straight, with no bend or delay. 直接 = directly, 真っ直ぐ = straight ahead — and 直す = to fix." },
        { id: "ja-u117l3-tei", type: "kanji", front: "停", reading: "tei", meaning: "to halt", example: { jp: "バス停で 十分 待って から、やっと のれました。", en: "I waited ten minutes at the bus stop and finally got on." }, accept: ["stop", "to stop over", "suspension"], hint: "停 = come to a stop — 亻 (person) on the left. バス停 = bus stop, 停電 = a power cut." },
        { id: "ja-u117l3-to", type: "kanji", front: "到", reading: "tō", meaning: "to arrive", example: { jp: "ふねが 港に 到着して、みんな 一人ずつ おりました。", en: "The ship arrived at the harbour, and everyone got off in good spirits." }, accept: ["reach", "arrival"], hint: "到 = reach the destination — 至 (arrive) + 刂. You meet it mostly in 到着 = arrival, the partner of 出発." },
        { id: "ja-u117l3-sho", type: "kanji", front: "昇", reading: "shō", meaning: "to rise", example: { jp: "朝 早く 山に のぼって、日が 昇るのを 見ました。", en: "I climbed the mountain early and watched the sun rise." }, accept: ["to ascend", "promotion", "to go up"], hint: "昇 = go up — 日 (sun) on top. 日が 昇る = the sun rises; 昇進 = promotion at work." },
        { id: "ja-u117l3-shojiki", type: "vocab", front: "正直", reading: "shōjiki", meaning: "honest", example: { jp: "正直に 話して くれて、ありがとう。", en: "Thank you for telling me honestly." }, accept: ["frank", "truthful", "honestly"], hint: "正 (correct) + 直 (straight) — straight and correct, said of a person." },
        { id: "ja-u117l3-tochaku", type: "vocab", front: "到着", reading: "tōchaku", meaning: "arrival", example: { jp: "バスの 到着は 三時の よていですから、もう少し 待ちましょう。", en: "The bus is due to arrive at three, so let's wait a little longer." }, accept: ["to arrive", "getting in"] },
      ],
    },
    {
      id: "ja-u117l4",
      unit: 117,
      lesson: 4,
      title: "Plans and promises",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 束 (bundle), 予 (beforehand), 約 (promise), 存 (to exist), and the words 予約 and 花束.",
      items: [
        { id: "ja-u117l4-taba", type: "kanji", front: "束", reading: "taba", meaning: "bundle", example: { jp: "花を 一束 買って、母に あげました。", en: "I bought a bunch of flowers and gave them to my mother." }, accept: ["bunch", "to bind"], hint: "束 = things tied together — a bundle of wood, drawn. It also binds people: 約束 = a promise." },
        { id: "ja-u117l4-yo", type: "kanji", front: "予", reading: "yo", meaning: "beforehand", example: { jp: "店に 予約を してから、友だちと 出かけました。", en: "I made a booking at the shop, then went out with my friend." }, accept: ["in advance", "reservation", "pre-"], hint: "予 = ahead of time. 予定 = a plan, 予約 = a reservation, 天気予報 = the weather forecast." },
        { id: "ja-u117l4-yaku", type: "kanji", front: "約", reading: "yaku", meaning: "promise", example: { jp: "約束の 時間に 遅れたので、走って 行きました。", en: "I was late for the time we'd agreed, so I ran." }, accept: ["approximately", "agreement", "about"], hint: "約 = tie an agreement — 糸 (thread) again. Before a number it means 'about': 約十分 = around ten minutes." },
        { id: "ja-u117l4-son", type: "kanji", front: "存", reading: "son", meaning: "to exist", example: { jp: "その 古い 店は 今も 存在して いて、みんなが よく 行きます。", en: "That old shop still exists, and people go there often." }, accept: ["to be", "existence", "to remain"], hint: "存 = be there / still standing. 存在 = existence; ご存じですか = do you know? — the polite form built on it." },
        { id: "ja-u117l4-yoyaku", type: "vocab", front: "予約", reading: "yoyaku", meaning: "a reservation", example: { jp: "レストランの 予約は もう しましたから、あとは 行くだけです。", en: "I've already made the restaurant booking, so all that's left is to go." }, accept: ["booking", "appointment", "to reserve"], hint: "予 (beforehand) + 約 (promise) — a promise made in advance." },
        { id: "ja-u117l4-hanataba", type: "vocab", front: "花束", reading: "hanataba", meaning: "bouquet", example: { jp: "花束を 買って、母に あげました。", en: "I bought a bouquet and gave it to my mother." }, accept: ["bunch of flowers"], hint: "花 (flower) + 束 (bundle) — flowers tied into a bundle." },
      ],
    },
  ],
};
