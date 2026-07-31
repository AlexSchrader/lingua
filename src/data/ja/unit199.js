// Unit 199 — ごい・N3・カタカナ・4 ("N3 loanwords 4") — B1 / JLPT N3 katakana loanwords.
// Partial unit: 14 items across 3 lessons (last lesson has 2). type:"vocab" — the target
// loanword appears in the example in its katakana form; everything else is basic N5/N4 kana,
// です/ます register. Multi-word meanings carry an accept synonym so type cards don't reject valid answers.
export const UNIT199 = {
  id: "ja-u199", lang: "ja", title: "ごい・N3・カタカナ・4", order: 199, stage: "b1",
  lessons: [
    {
      id: "ja-u199l1", unit: 199, lesson: 1, title: "N3 loanwords 4·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 loanwords: ボート (boat), ボール (ball), マーケット (market), マイナス (minus), マスター (master), ショック (shock).",
      items: [
        { id: "ja-u199l1-boto", type: "vocab", front: "ボート", reading: "bōto", meaning: "boat", example: { jp: "みずうみでボートにのります。", en: "I ride a boat on the lake." }, accept: ["rowboat"] },
        { id: "ja-u199l1-boru", type: "vocab", front: "ボール", reading: "bōru", meaning: "ball", example: { jp: "こどもがボールをなげます。", en: "The child throws the ball." }, accept: ["bowl"] },
        { id: "ja-u199l1-maketto", type: "vocab", front: "マーケット", reading: "māketto", meaning: "market", example: { jp: "マーケットでやさいをかいます。", en: "I buy vegetables at the market." }, accept: ["marketplace"] },
        { id: "ja-u199l1-mainasu", type: "vocab", front: "マイナス", reading: "mainasu", meaning: "minus", example: { jp: "十マイナス三は七です。", en: "Ten minus three is seven." }, accept: ["negative"] },
        { id: "ja-u199l1-masuta", type: "vocab", front: "マスター", reading: "masutā", meaning: "master", example: { jp: "このみせのマスターはやさしいです。", en: "The master of this shop is kind." }, accept: ["bar owner", "proprietor"], hint: "マスター (from \"master\") = the owner of a bar or café; also \"to master\" a skill." },
        { id: "ja-u199l1-shokku", type: "vocab", front: "ショック", reading: "shokku", meaning: "shock", example: { jp: "そのニュースにショックをうけました。", en: "I was shocked by the news." }, accept: ["jolt"] },
      ],
    },
    {
      id: "ja-u199l2", unit: 199, lesson: 2, title: "N3 loanwords 4·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 loanwords: ストレス (stress), タイトル (title), ダウン (down), チャイム (chime), デザイン (design), マスコミ (media).",
      items: [
        { id: "ja-u199l2-sutoresu", type: "vocab", front: "ストレス", reading: "sutoresu", meaning: "stress", example: { jp: "まいにちストレスをかんじます。", en: "I feel stress every day." }, accept: ["tension"] },
        { id: "ja-u199l2-taitoru", type: "vocab", front: "タイトル", reading: "taitoru", meaning: "title", example: { jp: "このほんのタイトルはなんですか。", en: "What is the title of this book?" }, accept: ["heading"] },
        { id: "ja-u199l2-daun", type: "vocab", front: "ダウン", reading: "daun", meaning: "down", example: { jp: "パソコンがダウンしました。", en: "The computer went down." }, accept: ["decline"], hint: "ダウン = down; commonly ダウンする = to break down / crash (computer, health)." },
        { id: "ja-u199l2-chaimu", type: "vocab", front: "チャイム", reading: "chaimu", meaning: "chime", example: { jp: "がっこうのチャイムがなりました。", en: "The school chime rang." }, accept: ["doorbell"] },
        { id: "ja-u199l2-dezain", type: "vocab", front: "デザイン", reading: "dezain", meaning: "design", example: { jp: "このふくのデザインがすきです。", en: "I like the design of these clothes." }, accept: ["styling"] },
        { id: "ja-u199l2-masukomi", type: "vocab", front: "マスコミ", reading: "masukomi", meaning: "media", example: { jp: "マスコミはニュースをつたえます。", en: "The media conveys the news." }, accept: ["mass media", "press"], hint: "マスコミ = shortened from \"mass communication\"; the news media as a whole." },
      ],
    },
    {
      id: "ja-u199l3", unit: 199, lesson: 3, title: "N3 loanwords 4·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use two N3 loanwords: マッサージ (massage), ラベル (label).",
      items: [
        { id: "ja-u199l3-massaji", type: "vocab", front: "マッサージ", reading: "massāji", meaning: "massage", example: { jp: "かたをマッサージしてもらいます。", en: "I have my shoulders massaged." }, accept: ["rubdown"] },
        { id: "ja-u199l3-raberu", type: "vocab", front: "ラベル", reading: "raberu", meaning: "label", example: { jp: "びんにラベルをはります。", en: "I stick a label on the bottle." }, accept: ["sticker", "tag"] },
      ],
    },
  ],
};
