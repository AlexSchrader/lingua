// Unit 102 — かんじ・ことば (Words and information kanji) — B1 / JLPT N3
// Strand A. The glyphs a B1 learner meets in print: explaining, recording, reporting,
// and asking. Most carry 言 (word) or 讠-style speech elements.
// 3 lessons x 6/5/5 = 16 glyphs. lang/unit/lesson are stamped in src/data/index.js.
export const UNIT102 = {
  id: "ja-u102",
  lang: "ja",
  title: "かんじ・ことば",
  order: 102,
  stage: "b1",
  lessons: [
    {
      id: "ja-u102l1",
      unit: 102,
      lesson: 1,
      title: "Explaining and judging",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the kanji of explanation: 説 (explain), 記 (write down), 議 (discuss), 評 (review), 表 (express), 示 (indicate).",
      items: [
        { id: "ja-u102l1-setsu", type: "kanji", front: "説", reading: "setsu", meaning: "to explain", example: { jp: "先生が 説明して くれたので、やっと 意味が 分かりました。", en: "The teacher explained it, so I finally understood the meaning." }, accept: ["theory", "explanation", "opinion"], hint: "説 = explain — 言 (word) on the left, as in most speech kanji. 説明 = explanation, 小説 = novel." },
        { id: "ja-u102l1-ki", type: "kanji", front: "記", reading: "ki", meaning: "to write down", example: { jp: "会った 人の 名前を ノートに 記録して おきます。", en: "I record the names of people I meet in my notebook." }, accept: ["record", "note", "account"], hint: "記 = put into writing — 言 (word) + 己 (self). 日記 = diary, 記事 = news article." },
        { id: "ja-u102l1-gi", type: "kanji", front: "議", reading: "gi", meaning: "to discuss", example: { jp: "会議で いろいろな 意見が 出て、話が 長く なりました。", en: "Many opinions came out at the meeting, and it ran long." }, accept: ["debate", "deliberation", "council"], hint: "議 = formal discussion. 会議 = meeting, 議員 = member of parliament." },
        { id: "ja-u102l1-hyo", type: "kanji", front: "評", reading: "hyō", meaning: "to review", example: { jp: "あの 店は 高いですが、料理の 評判は とても いいです。", en: "That restaurant is expensive, but its food has a very good reputation." }, accept: ["criticism", "rating", "comment"], hint: "評 = judge in words — 言 (word) + 平 (level): weighing something fairly. 評価 = evaluation, 評判 = reputation." },
        { id: "ja-u102l1-arawasu", type: "kanji", front: "表", reading: "arawasu", meaning: "to express", example: { jp: "考えを ことばで 表すのは かんたんでは ありません。", en: "Expressing your thoughts in words isn't easy." }, accept: ["surface", "chart", "to show"], hint: "表 = the outward side — 表す (to express), 発表 (announcement), and also a table/chart on a page." },
        { id: "ja-u102l1-ji", type: "kanji", front: "示", reading: "ji", meaning: "to indicate", example: { jp: "この 図は 一年の 天気の 動きを 示して います。", en: "This chart indicates the movement of the weather over a year." }, accept: ["to show", "point out", "demonstrate"], hint: "示 = show/point at. It is also the origin of the 礻 radical in 神社 — things pointed out to the gods." },
      ],
    },
    {
      id: "ja-u102l2",
      unit: 102,
      lesson: 2,
      title: "Carrying information",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the kanji of passing news on: 識 (know), 伝 (convey), 報 (report), 録 (record), 章 (chapter).",
      items: [
        { id: "ja-u102l2-shiki", type: "kanji", front: "識", reading: "shiki", meaning: "knowledge", example: { jp: "この 仕事には 広い 知識が いりますから、本を よく 読みます。", en: "This job needs broad knowledge, so I read a lot." }, accept: ["discernment", "awareness", "to know"], hint: "識 = knowing that comes from being told — 言 (word) again. 知識 = knowledge, 意識 = consciousness." },
        { id: "ja-u102l2-den", type: "kanji", front: "伝", reading: "den", meaning: "to convey", example: { jp: "田中さんに 会ったら、この 話を 伝えて ください。", en: "If you see Tanaka, please pass this on." }, accept: ["to pass on", "transmit", "legend"], hint: "伝 = hand something on — 亻 (person) + 云. 伝える = to tell, 手伝う = to help (lend a hand)." },
        { id: "ja-u102l2-ho", type: "kanji", front: "報", reading: "hō", meaning: "report", example: { jp: "朝の ニュースで 雨の 情報を 見て から 出かけます。", en: "I check the rain information on the morning news, then go out." }, accept: ["news", "to inform", "reward"], hint: "報 = report back. 天気予報 = weather forecast, 情報 = information, 報告 = a report." },
        { id: "ja-u102l2-roku", type: "kanji", front: "録", reading: "roku", meaning: "to record", example: { jp: "会議の 話を 録音して、あとで もう一度 聞きました。", en: "I recorded what was said at the meeting and listened again later." }, accept: ["recording", "to note down"], hint: "録 = put on the record. 記録 = a record, 録音 = audio recording — 音 (sound) you already know." },
        { id: "ja-u102l2-sho", type: "kanji", front: "章", reading: "shō", meaning: "chapter", example: { jp: "この 本の 三章目まで 読んで、今日は やめます。", en: "I'll read to the end of chapter three and stop for today." }, accept: ["section", "badge", "text"], hint: "章 = a chapter or a badge — a marked-off piece. 文章 = a piece of writing." },
      ],
    },
    {
      id: "ja-u102l3",
      unit: 102,
      lesson: 3,
      title: "Asking and allowing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the kanji of requests: 史 (history), 申 (humbly say), 許 (permit), 願 (wish), 頼 (rely on).",
      items: [
        { id: "ja-u102l3-shi", type: "kanji", front: "史", reading: "shi", meaning: "history", example: { jp: "世界史の 本を 読んで、いろいろな 国の ことを 知りました。", en: "I read a book on world history and learned about all sorts of countries." }, accept: ["chronicle", "record of events"], hint: "史 = the written record of what happened. 世界史 = world history, 日本史 = Japanese history." },
        { id: "ja-u102l3-mosu", type: "kanji", front: "申", reading: "mōsu", meaning: "to say (humbly)", example: { jp: "山田と 申しますが、店長さんは いらっしゃいますか。", en: "My name is Yamada — is the manager in?" }, accept: ["to state humbly", "to apply", "to report"], hint: "申す is the humble form of 言う — you use it about yourself, never about the person you are speaking to." },
        { id: "ja-u102l3-kyo", type: "kanji", front: "許", reading: "kyo", meaning: "to permit", example: { jp: "先生が 許して くれたので、少し 早く 帰りました。", en: "The teacher gave permission, so I went home a little early." }, accept: ["to allow", "permission", "to forgive"], hint: "許 = allow — 言 (word) + 午. 許可 = permission; 許す also means to forgive." },
        { id: "ja-u102l3-negai", type: "kanji", front: "願", reading: "negai", meaning: "wish", example: { jp: "お願いが ありますが、少し 時間を もらえますか。", en: "I have a request — could I have a little of your time?" }, accept: ["request", "to wish", "please"], hint: "願 = a wish or request. お願いします is the everyday 'please' — the whole word is one polite ask." },
        { id: "ja-u102l3-tanomu", type: "kanji", front: "頼", reading: "tanomu", meaning: "to rely on", example: { jp: "一人で できない ときは、友だちに 頼みます。", en: "When I can't do it alone, I ask a friend." }, accept: ["to request", "to depend on", "to ask"], hint: "頼む = to ask a favour; 頼る = to lean on someone. Both share 頁 (head) with 願." },
      ],
    },
  ],
};
