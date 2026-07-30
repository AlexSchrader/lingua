// Unit 103 — かんじ・N3・1 (N3 kanji 1) — B1 / JLPT N3 — first N3 kanji unit.
// Frequency-ordered high-use N3 kanji (政 議 民 連 対 部 …). type:"kanji" —
// recognition/recall test the meaning, production traces. KanjiVG strokes by glyph.
// Target glyph shown as kanji; all other words in kana except batch-mate kanji.
export const UNIT103 = {
  id: "ja-u103", lang: "ja", title: "かんじ・N3・1", order: 103, stage: "b1",
  lessons: [
    {
      id: "ja-u103l1", unit: 103, lesson: 1, title: "N3 kanji 1·1", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 政 (politics), 議 (discussion), 民 (people), 連 (link), 対 (versus), 部 (section).",
      items: [
        { id: "ja-u103l1-sei", type: "kanji", front: "政", reading: "sei", meaning: "politics", example: { jp: "政じについてはなしました。", en: "We talked about politics." }, accept: ["government"], hint: "せいじ 政治 = politics; せいふ 政府 = government." },
        { id: "ja-u103l1-gi", type: "kanji", front: "議", reading: "gi", meaning: "discussion", example: { jp: "かい議は３じからです。", en: "The meeting is from three o'clock." }, accept: ["deliberation", "debate", "meeting"], hint: "かいぎ 会議 = meeting; ぎろん 議論 = debate." },
        { id: "ja-u103l1-min", type: "kanji", front: "民", reading: "min", meaning: "people", example: { jp: "このまちの市民はしんせつです。", en: "The citizens of this town are kind." }, accept: ["citizens", "nation", "the public"], hint: "しみん 市民 = citizen; こくみん 国民 = the people." },
        { id: "ja-u103l1-ren", type: "kanji", front: "連", reading: "ren", meaning: "link", example: { jp: "あとで連らくします。", en: "I'll get in touch later." }, accept: ["connect", "contact", "take along"], hint: "れんらく 連絡 = contact; つれる 連れる = to bring along (kun)." },
        { id: "ja-u103l1-tai", type: "kanji", front: "対", reading: "tai", meaning: "versus", example: { jp: "わたしははん対です。", en: "I'm against it." }, accept: ["opposite", "against", "anti-"], hint: "はんたい 反対 = opposition; ～に対して = toward / versus." },
        { id: "ja-u103l1-bu", type: "kanji", front: "部", reading: "bu", meaning: "section", example: { jp: "わたしはサッカー部です。", en: "I'm in the soccer club." }, accept: ["department", "club", "part"], hint: "サッカー部 = soccer club; ぶちょう 部長 = department head." },
      ],
    },
    {
      id: "ja-u103l2", unit: 103, lesson: 2, title: "N3 kanji 1·2", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 合 (fit), 市 (city), 内 (inside), 相 (mutual), 定 (fix), 回 (times).",
      items: [
        { id: "ja-u103l2-go", type: "kanji", front: "合", reading: "gō", meaning: "fit", example: { jp: "あしたは都合がわるいです。", en: "Tomorrow is inconvenient for me." }, accept: ["suit", "combine", "join"], hint: "つごう 都合 = convenience; ばあい 場合 = case." },
        { id: "ja-u103l2-shi", type: "kanji", front: "市", reading: "shi", meaning: "city", example: { jp: "わたしはおおさか市にすんでいます。", en: "I live in Osaka City." }, accept: ["market", "town"], hint: "しみん 市民 = citizen; ～市 = ~ City." },
        { id: "ja-u103l2-nai", type: "kanji", front: "内", reading: "nai", meaning: "inside", example: { jp: "まちをあん内します。", en: "I'll show you around town." }, accept: ["within", "interior"], hint: "あんない 案内 = to guide; いない 以内 = within." },
        { id: "ja-u103l2-so", type: "kanji", front: "相", reading: "sō", meaning: "mutual", example: { jp: "せんせいに相だんします。", en: "I'll consult the teacher." }, accept: ["inter-", "together", "phase"], hint: "そうだん 相談 = consultation; あいて 相手 = the other party (kun)." },
        { id: "ja-u103l2-tei", type: "kanji", front: "定", reading: "tei", meaning: "fix", example: { jp: "あしたのよ定はなんですか。", en: "What are your plans for tomorrow?" }, accept: ["determine", "decide", "settle"], hint: "よてい 予定 = plan / schedule; ていしょく 定食 = set meal." },
        { id: "ja-u103l2-kai", type: "kanji", front: "回", reading: "kai", meaning: "times", example: { jp: "このえいがを２回みました。", en: "I watched this movie twice." }, accept: ["round", "-times", "occurrence"], hint: "いっかい 一回 = once; こんかい 今回 = this time." },
      ],
    },
    {
      id: "ja-u103l3", unit: 103, lesson: 3, title: "N3 kanji 1·3", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 選 (select), 米 (rice), 実 (truth), 関 (relation), 決 (decide), 全 (whole).",
      items: [
        { id: "ja-u103l3-sen", type: "kanji", front: "選", reading: "sen", meaning: "select", example: { jp: "あした選きょがあります。", en: "There's an election tomorrow." }, accept: ["choose", "elect", "pick"], hint: "せんきょ 選挙 = election; えらぶ 選ぶ = to choose (kun)." },
        { id: "ja-u103l3-bei", type: "kanji", front: "米", reading: "bei", meaning: "rice", example: { jp: "米こくのえいががすきです。", en: "I like American movies." }, accept: ["america", "metre"], hint: "べいこく 米国 = the USA; おこめ 米 = rice (kun こめ)." },
        { id: "ja-u103l3-jitsu", type: "kanji", front: "実", reading: "jitsu", meaning: "truth", example: { jp: "実はにほんごをべんきょうしています。", en: "Actually, I'm studying Japanese." }, accept: ["reality", "actual", "actually"], hint: "じつは 実は = actually; じつりょく 実力 = real ability." },
        { id: "ja-u103l3-kan", type: "kanji", front: "関", reading: "kan", meaning: "relation", example: { jp: "それはわたしに関けいがありません。", en: "That has nothing to do with me." }, accept: ["connection", "involve", "concern"], hint: "かんけい 関係 = relation; げんかん 玄関 = entrance." },
        { id: "ja-u103l3-ketsu", type: "kanji", front: "決", reading: "ketsu", meaning: "decide", example: { jp: "もんだいがかい決しました。", en: "The problem was solved." }, accept: ["fix", "settle", "determine"], hint: "けってい 決定 = decision; かいけつ 解決 = solution." },
        { id: "ja-u103l3-zen", type: "kanji", front: "全", reading: "zen", meaning: "whole", example: { jp: "これを全部たべました。", en: "I ate all of this." }, accept: ["all", "entire", "complete"], hint: "ぜんぶ 全部 = all; ぜんいん 全員 = everyone." },
      ],
    },
    {
      id: "ja-u103l4", unit: 103, lesson: 4, title: "N3 kanji 1·4", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 表 (table), 戦 (war), 経 (pass through), 最 (most), 現 (present), 調 (tune).",
      items: [
        { id: "ja-u103l4-hyo", type: "kanji", front: "表", reading: "hyō", meaning: "table", example: { jp: "この表をみてください。", en: "Please look at this table." }, accept: ["surface", "chart", "list"], hint: "ひょう 表 = table / chart; はっぴょう 発表 = presentation." },
        { id: "ja-u103l4-sen2", type: "kanji", front: "戦", reading: "sen", meaning: "war", example: { jp: "戦そうはよくないです。", en: "War is not good." }, accept: ["battle", "fight", "match"], hint: "せんそう 戦争 = war; たたかう 戦う = to fight (kun)." },
        { id: "ja-u103l4-kei", type: "kanji", front: "経", reading: "kei", meaning: "pass through", example: { jp: "にほんの経ざいはつよいです。", en: "Japan's economy is strong." }, accept: ["manage", "economy", "sutra"], hint: "けいざい 経済 = economy; けいけん 経験 = experience." },
        { id: "ja-u103l4-sai", type: "kanji", front: "最", reading: "sai", meaning: "most", example: { jp: "きょうのてんきは最こうです。", en: "Today's weather is the best." }, accept: ["utmost", "extreme", "-est"], hint: "さいこう 最高 = the best; さいしょ 最初 = the very first." },
        { id: "ja-u103l4-gen", type: "kanji", front: "現", reading: "gen", meaning: "present", example: { jp: "現ざい、とうきょうにすんでいます。", en: "At present, I live in Tokyo." }, accept: ["current", "appear", "actual"], hint: "げんざい 現在 = the present; げんきん 現金 = cash." },
        { id: "ja-u103l4-cho", type: "kanji", front: "調", reading: "chō", meaning: "tune", example: { jp: "きょうはからだの調しがいいです。", en: "Today I feel in good shape." }, accept: ["condition", "investigate", "tone"], hint: "ちょうし 調子 = condition; しらべる 調べる = to look up (kun)." },
      ],
    },
  ],
};
