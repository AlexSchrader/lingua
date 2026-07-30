// Unit 106 — かんじ・N3・4 ("Kanji N3·4") — B1 / JLPT N3 — fourth N3 kanji unit.
// 24 high-frequency N3 kanji (freq ~203–247), six per lesson. Recognition/recall of
// the glyph's meaning; production is stroke tracing. Each example.jp contains the
// target glyph written as kanji (rest in kana), around its most common everyday word,
// using only N5/N4 vocab. id + reading copied verbatim from the pre-validated N3 slice.
export const UNIT106 = {
  id: "ja-u106", lang: "ja", title: "かんじ・N3・4", order: 106, stage: "b1",
  lessons: [
    {
      id: "ja-u106l1", unit: 106, lesson: 1, title: "N3 kanji 4·1", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 利 (profit), 組 (group), 信 (trust), 在 (exist), 件 (matter), 側 (side).",
      items: [
        { id: "ja-u106l1-ri", type: "kanji", front: "利", reading: "ri", meaning: "profit", example: { jp: "このアプリはとても便利です。", en: "This app is very convenient." }, accept: ["advantage", "benefit", "convenience"], hint: "べんり = convenient." },
        { id: "ja-u106l1-so2", type: "kanji", front: "組", reading: "so", meaning: "group", example: { jp: "このテレビ番組はおもしろいです。", en: "This TV program is interesting." }, accept: ["team", "assemble", "set"], hint: "ばんぐみ = TV program; くみ = group." },
        { id: "ja-u106l1-shin2", type: "kanji", front: "信", reading: "shin", meaning: "trust", example: { jp: "わたしはかれを信じています。", en: "I trust him." }, accept: ["faith", "believe", "fidelity"], hint: "しんじる = to believe, trust." },
        { id: "ja-u106l1-zai", type: "kanji", front: "在", reading: "zai", meaning: "exist", example: { jp: "かれは現在アメリカにいます。", en: "He is currently in America." }, accept: ["present", "located"], hint: "げんざい = present, now." },
        { id: "ja-u106l1-ken2", type: "kanji", front: "件", reading: "ken", meaning: "matter", example: { jp: "その事件のニュースをみました。", en: "I saw the news about that incident." }, accept: ["case", "affair", "item"], hint: "じけん = incident, case." },
        { id: "ja-u106l1-soku", type: "kanji", front: "側", reading: "soku", meaning: "side", example: { jp: "みちの右側をあるきます。", en: "I walk on the right side of the road." }, accept: ["direction"], hint: "みぎがわ = right side; がわ = side." },
      ],
    },
    {
      id: "ja-u106l2", unit: 106, lesson: 2, title: "N3 kanji 4·2", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 任 (responsibility), 引 (pull), 求 (seek), 所 (place), 次 (next), 昨 (yesterday).",
      items: [
        { id: "ja-u106l2-nin2", type: "kanji", front: "任", reading: "nin", meaning: "responsibility", example: { jp: "これはわたしの責任です。", en: "This is my responsibility." }, accept: ["duty", "entrust"], hint: "せきにん = responsibility." },
        { id: "ja-u106l2-in", type: "kanji", front: "引", reading: "in", meaning: "pull", example: { jp: "そのドアを引いてください。", en: "Please pull that door." }, accept: ["draw", "subtract"], hint: "ひく = to pull." },
        { id: "ja-u106l2-kyu", type: "kanji", front: "求", reading: "kyū", meaning: "seek", example: { jp: "みんなはへいわを求めています。", en: "Everyone is seeking peace." }, accept: ["request", "demand", "want"], hint: "もとめる = to seek, request." },
        { id: "ja-u106l2-sho3", type: "kanji", front: "所", reading: "sho", meaning: "place", example: { jp: "まちあわせの場所をきめましょう。", en: "Let's decide the meeting place." }, accept: ["spot", "address"], hint: "ばしょ = place." },
        { id: "ja-u106l2-ji2", type: "kanji", front: "次", reading: "ji", meaning: "next", example: { jp: "次のえきでおります。", en: "I'll get off at the next station." }, accept: ["order", "sequence"], hint: "つぎ = next." },
        { id: "ja-u106l2-saku", type: "kanji", front: "昨", reading: "saku", meaning: "yesterday", example: { jp: "昨年、にほんへいきました。", en: "Last year I went to Japan." }, accept: ["last", "previous"], hint: "さくねん = last year; きのう = yesterday." },
      ],
    },
    {
      id: "ja-u106l3", unit: 106, lesson: 3, title: "N3 kanji 4·3", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 論 (argument), 官 (official), 増 (increase), 係 (in charge), 感 (feeling), 情 (emotion).",
      items: [
        { id: "ja-u106l3-ron", type: "kanji", front: "論", reading: "ron", meaning: "argument", example: { jp: "だいがくの論文をかいています。", en: "I'm writing a university thesis." }, accept: ["theory", "discourse"], hint: "ろんぶん = thesis, paper." },
        { id: "ja-u106l3-kan2", type: "kanji", front: "官", reading: "kan", meaning: "official", example: { jp: "こまったとき、警官にききます。", en: "When I'm in trouble, I ask a police officer." }, accept: ["bureaucrat", "government"], hint: "けいかん = police officer." },
        { id: "ja-u106l3-zo", type: "kanji", front: "増", reading: "zō", meaning: "increase", example: { jp: "まちのひとがだんだん増えています。", en: "The town's population is gradually increasing." }, accept: ["add", "grow"], hint: "ふえる = to increase." },
        { id: "ja-u106l3-kei2", type: "kanji", front: "係", reading: "kei", meaning: "in charge", example: { jp: "そのふたつは関係がありません。", en: "Those two have no connection." }, accept: ["relation", "connection", "duty"], hint: "かんけい = relation, connection." },
        { id: "ja-u106l3-kan3", type: "kanji", front: "感", reading: "kan", meaning: "feeling", example: { jp: "あきになって、さむさを感じます。", en: "Now that autumn has come, I feel the cold." }, accept: ["emotion", "sensation", "feel"], hint: "かんじる = to feel." },
        { id: "ja-u106l3-jo", type: "kanji", front: "情", reading: "jō", meaning: "emotion", example: { jp: "かれはじぶんの感情をよくはなします。", en: "He often talks about his own emotions." }, accept: ["feelings", "passion", "sympathy"], hint: "かんじょう = emotion, feelings." },
      ],
    },
    {
      id: "ja-u106l4", unit: 106, lesson: 4, title: "N3 kanji 4·4", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 投 (throw), 示 (show), 変 (strange), 打 (hit), 直 (fix), 両 (both).",
      items: [
        { id: "ja-u106l4-to3", type: "kanji", front: "投", reading: "tō", meaning: "throw", example: { jp: "こうえんでボールを投げます。", en: "I throw a ball in the park." }, accept: ["pitch", "discard"], hint: "なげる = to throw." },
        { id: "ja-u106l4-ji3", type: "kanji", front: "示", reading: "ji", meaning: "show", example: { jp: "ちずでばしょを示します。", en: "I'll show the place on the map." }, accept: ["indicate", "display", "point out"], hint: "しめす = to show, indicate." },
        { id: "ja-u106l4-hen", type: "kanji", front: "変", reading: "hen", meaning: "strange", example: { jp: "このりょうりは変なあじがします。", en: "This dish tastes strange." }, accept: ["change", "unusual"], hint: "へん = strange; へんか = change." },
        { id: "ja-u106l4-da", type: "kanji", front: "打", reading: "da", meaning: "hit", example: { jp: "やきゅうでボールを打ちました。", en: "I hit the ball in baseball." }, accept: ["strike", "knock", "pound"], hint: "うつ = to hit, strike." },
        { id: "ja-u106l4-choku", type: "kanji", front: "直", reading: "choku", meaning: "fix", example: { jp: "こわれたとけいを直します。", en: "I'll fix the broken clock." }, accept: ["straight", "direct", "honest"], hint: "なおす = to fix; ちょくせつ = direct." },
        { id: "ja-u106l4-ryo", type: "kanji", front: "両", reading: "ryō", meaning: "both", example: { jp: "両方のいけんをききます。", en: "I'll listen to both opinions." }, accept: ["two"], hint: "りょうほう = both; りょうしん = parents." },
      ],
    },
  ],
};
