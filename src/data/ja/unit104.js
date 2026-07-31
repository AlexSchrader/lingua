// Unit 104 — かんじ・N3・2 (N3 kanji 2) — B1 / JLPT N3 — second N3 kanji unit.
// Frequency-ordered high-use N3 kanji (化 当 約 首 法 性 …). type:"kanji" —
// recognition/recall test the meaning, production traces. KanjiVG strokes by glyph.
// Target glyph shown as kanji; all other words in kana except batch-mate kanji.
export const UNIT104 = {
  id: "ja-u104", lang: "ja", title: "かんじ・N3・2", order: 104, stage: "b1",
  lessons: [
    {
      id: "ja-u104l1", unit: 104, lesson: 1, title: "N3 kanji 2·1", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 化 (change), 当 (hit), 約 (promise), 首 (neck), 法 (method), 性 (nature).",
      items: [
        { id: "ja-u104l1-ka", type: "kanji", front: "化", reading: "ka", meaning: "change", example: { jp: "にほんの文化にきょうみがあります。", en: "I'm interested in Japanese culture." }, accept: ["-ization", "transform", "influence"], hint: "ぶんか 文化 = culture; へんか 変化 = change." },
        { id: "ja-u104l1-to", type: "kanji", front: "当", reading: "tō", meaning: "hit", example: { jp: "それは本当ですか。", en: "Is that true?" }, accept: ["right", "correct", "appropriate"], hint: "ほんとう 本当 = true / really; べんとう 弁当 = boxed lunch." },
        { id: "ja-u104l1-yaku", type: "kanji", front: "約", reading: "yaku", meaning: "promise", example: { jp: "ともだちと約束があります。", en: "I have plans with a friend." }, accept: ["approximately", "appointment", "reservation"], hint: "やくそく 約束 = promise; よやく 予約 = reservation." },
        { id: "ja-u104l1-shu", type: "kanji", front: "首", reading: "shu", meaning: "neck", example: { jp: "とうきょうはにほんの首都です。", en: "Tokyo is the capital of Japan." }, accept: ["head", "capital"], hint: "しゅと 首都 = capital city; くび 首 = neck (kun)." },
        { id: "ja-u104l1-ho", type: "kanji", front: "法", reading: "hō", meaning: "method", example: { jp: "いい方法をおしえてください。", en: "Please teach me a good method." }, accept: ["law", "rule", "principle"], hint: "ほうほう 方法 = method; ほうりつ 法律 = law." },
        { id: "ja-u104l1-sei2", type: "kanji", front: "性", reading: "sei", meaning: "nature", example: { jp: "このみせのてんいんは女性です。", en: "The clerk at this shop is a woman." }, accept: ["sex", "gender", "-ity"], hint: "じょせい 女性 = woman; せいかく 性格 = personality." },
      ],
    },
    {
      id: "ja-u104l2", unit: 104, lesson: 2, title: "N3 kanji 2·2", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 要 (need), 制 (system), 治 (govern), 務 (duty), 成 (become), 期 (period).",
      items: [
        { id: "ja-u104l2-yo", type: "kanji", front: "要", reading: "yō", meaning: "need", example: { jp: "パスポートが必要です。", en: "A passport is necessary." }, accept: ["necessary", "essential", "require"], hint: "ひつよう 必要 = necessary; じゅうよう 重要 = important." },
        { id: "ja-u104l2-sei3", type: "kanji", front: "制", reading: "sei", meaning: "system", example: { jp: "がっこうの制服をきます。", en: "I wear the school uniform." }, accept: ["control", "regulation", "rule"], hint: "せいふく 制服 = uniform; せいど 制度 = system." },
        { id: "ja-u104l2-ji", type: "kanji", front: "治", reading: "ji", meaning: "govern", example: { jp: "にほんの政治はふくざつです。", en: "Japanese politics is complicated." }, accept: ["reign", "rule", "heal"], hint: "せいじ 政治 = politics; なおる 治る = to heal (kun)." },
        { id: "ja-u104l2-mu", type: "kanji", front: "務", reading: "mu", meaning: "duty", example: { jp: "ちちは事務のしごとをしています。", en: "My father does office work." }, accept: ["task", "duties", "service"], hint: "じむ 事務 = office work; ぎむ 義務 = obligation." },
        { id: "ja-u104l2-sei4", type: "kanji", front: "成", reading: "sei", meaning: "become", example: { jp: "こどもはすぐに成長します。", en: "Children grow quickly." }, accept: ["turn into", "grow", "complete"], hint: "せいちょう 成長 = growth; さんせい 賛成 = agreement." },
        { id: "ja-u104l2-ki", type: "kanji", front: "期", reading: "ki", meaning: "period", example: { jp: "学期はらいしゅうはじまります。", en: "The term starts next week." }, accept: ["term", "time", "date"], hint: "がっき 学期 = school term; きかん 期間 = period." },
      ],
    },
    {
      id: "ja-u104l3", unit: 104, lesson: 3, title: "N3 kanji 2·3", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 取 (take), 都 (capital), 和 (harmony), 機 (machine), 平 (flat), 加 (add).",
      items: [
        { id: "ja-u104l3-shu2", type: "kanji", front: "取", reading: "shu", meaning: "take", example: { jp: "めんきょを取得しました。", en: "I got my driver's license." }, accept: ["fetch", "obtain", "acquire"], hint: "しゅとく 取得 = acquisition; とる 取る = to take (kun)." },
        { id: "ja-u104l3-to2", type: "kanji", front: "都", reading: "to", meaning: "capital", example: { jp: "都会のせいかつはいそがしいです。", en: "City life is busy." }, accept: ["metropolis", "city"], hint: "とかい 都会 = the city; しゅと 首都 = capital." },
        { id: "ja-u104l3-wa", type: "kanji", front: "和", reading: "wa", meaning: "harmony", example: { jp: "わたしは和食がだいすきです。", en: "I love Japanese food." }, accept: ["peace", "japanese-style", "japan"], hint: "わしょく 和食 = Japanese food; へいわ 平和 = peace." },
        { id: "ja-u104l3-ki2", type: "kanji", front: "機", reading: "ki", meaning: "machine", example: { jp: "飛行機でおおさかへいきます。", en: "I go to Osaka by plane." }, accept: ["opportunity", "airplane", "mechanism"], hint: "ひこうき 飛行機 = airplane; きかい 機械 = machine." },
        { id: "ja-u104l3-hei", type: "kanji", front: "平", reading: "hei", meaning: "flat", example: { jp: "平日はいつもいそがしいです。", en: "Weekdays are always busy." }, accept: ["even", "level", "peace"], hint: "へいじつ 平日 = weekday; へいわ 平和 = peace." },
        { id: "ja-u104l3-ka2", type: "kanji", front: "加", reading: "ka", meaning: "add", example: { jp: "パーティーに参加します。", en: "I'll take part in the party." }, accept: ["increase", "join", "addition"], hint: "さんか 参加 = participation; ついか 追加 = an addition." },
      ],
    },
    {
      id: "ja-u104l4", unit: 104, lesson: 4, title: "N3 kanji 2·4", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 受 (receive), 続 (continue), 進 (advance), 数 (number), 記 (record), 初 (first).",
      items: [
        { id: "ja-u104l4-ju", type: "kanji", front: "受", reading: "ju", meaning: "receive", example: { jp: "らいしゅう、試験を受けます。", en: "I'll take the exam next week." }, accept: ["accept", "take", "undergo"], hint: "じゅけん 受験 = taking an exam; うける 受ける = to receive (kun)." },
        { id: "ja-u104l4-zoku", type: "kanji", front: "続", reading: "zoku", meaning: "continue", example: { jp: "まいにちにほんごを続けます。", en: "I keep at Japanese every day." }, accept: ["series", "sequel", "carry on"], hint: "つづく 続く = to continue (kun); れんぞく 連続 = continuous." },
        { id: "ja-u104l4-shin", type: "kanji", front: "進", reading: "shin", meaning: "advance", example: { jp: "まえに進んでください。", en: "Please move forward." }, accept: ["proceed", "progress", "promote"], hint: "すすむ 進む = to advance (kun); しんがく 進学 = going on to higher study." },
        { id: "ja-u104l4-su", type: "kanji", front: "数", reading: "sū", meaning: "number", example: { jp: "数学のしゅくだいがおおいです。", en: "There's a lot of math homework." }, accept: ["count", "figures", "quantity"], hint: "すうがく 数学 = mathematics; すうじ 数字 = numeral." },
        { id: "ja-u104l4-ki3", type: "kanji", front: "記", reading: "ki", meaning: "record", example: { jp: "まいばん日記をかきます。", en: "I write in my diary every night." }, accept: ["write", "scribe", "note"], hint: "にっき 日記 = diary; きにゅう 記入 = filling in." },
        { id: "ja-u104l4-sho", type: "kanji", front: "初", reading: "sho", meaning: "first", example: { jp: "にほんへ初めていきました。", en: "I went to Japan for the first time." }, accept: ["beginning", "first time", "initial"], hint: "はじめて 初めて = for the first time; さいしょ 最初 = the very first." },
      ],
    },
  ],
};
