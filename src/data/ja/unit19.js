// Unit 19 — かんじ・どうし2 ("Kanji: more verbs") — A1 / N5
// More everyday verb kanji, continuing Unit 14. reading = the dictionary verb
// (ties to the spoken word); meaning is the recall target; production traces.
// Examples write the verb in kanji+okurigana over known nouns/kanji.
export const UNIT19 = {
  id: "ja-u19",
  lang: "ja",
  title: "かんじ・どうし2",
  order: 19,
  stage: "a1",
  lessons: [
    {
      id: "ja-u19l1",
      unit: 19,
      lesson: 1,
      title: "Write, speak, buy",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the verb kanji 書 話 立 休 買.",
      items: [
        { id: "ja-u19l1-kaku", type: "kanji", front: "書", reading: "kaku", meaning: "write", example: { jp: "なまえを書きます。", en: "I write my name." }, accept: ["to write", "writes"], hint: "書 = write — a hand holding a brush over 日. 書きます (kakimasu)." },
        { id: "ja-u19l1-hanasu", type: "kanji", front: "話", reading: "hanasu", meaning: "speak", example: { jp: "えいごを話します。", en: "I speak English." }, accept: ["talk", "to speak", "story"], hint: "話 = speak / talk — 言 (word) + 舌 (tongue). You know はなします (Unit 9): 話します." },
        { id: "ja-u19l1-tatsu", type: "kanji", front: "立", reading: "tatsu", meaning: "stand", example: { jp: "前に立ちます。", en: "I stand in front." }, accept: ["to stand", "stand up"], hint: "立 = stand — a person standing on the ground. 立ちます." },
        { id: "ja-u19l1-yasumu", type: "kanji", front: "休", reading: "yasumu", meaning: "rest", example: { jp: "いえで休みます。", en: "I rest at home." }, accept: ["to rest", "take a break", "day off"], hint: "休 = rest — 亻 (person) beside 木 (tree). 休みます; やすみ = a day off." },
        { id: "ja-u19l1-kau", type: "kanji", front: "買", reading: "kau", meaning: "buy", example: { jp: "本を買います。", en: "I buy a book." }, accept: ["to buy", "buys"], hint: "買 = buy — 网 (net) over 貝 (money). You know かいます (Unit 9): 買います." },
      ],
    },
    {
      id: "ja-u19l2",
      unit: 19,
      lesson: 2,
      title: "Meet, wait, make",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the verb kanji 会 待 知 作 持.",
      items: [
        { id: "ja-u19l2-au", type: "kanji", front: "会", reading: "au", meaning: "meet", example: { jp: "ともだちに会います。", en: "I meet a friend." }, accept: ["to meet", "meets"], hint: "会 = meet (also 'association'). 会います = meet; 会社 = company." },
        { id: "ja-u19l2-matsu", type: "kanji", front: "待", reading: "matsu", meaning: "wait", example: { jp: "えきで待ちます。", en: "I wait at the station." }, accept: ["to wait", "waits"], hint: "待 = wait — 彳 (a step) + 寺 (temple). 待ちます." },
        { id: "ja-u19l2-shiru", type: "kanji", front: "知", reading: "shiru", meaning: "know", example: { jp: "あの人を知っています。", en: "I know that person." }, accept: ["to know", "knows"], hint: "知 = know — 矢 (arrow) + 口 (mouth): knowledge flies fast. 知ります." },
        { id: "ja-u19l2-tsukuru", type: "kanji", front: "作", reading: "tsukuru", meaning: "make", example: { jp: "ごはんを作ります。", en: "I make a meal." }, accept: ["to make", "makes", "build"], hint: "作 = make — 亻 (person) + 乍. 作ります." },
        { id: "ja-u19l2-motsu", type: "kanji", front: "持", reading: "motsu", meaning: "hold", example: { jp: "かばんを持ちます。", en: "I hold a bag." }, accept: ["to hold", "carry", "have"], hint: "持 = hold / carry — 扌 (hand) + 寺. 持ちます." },
      ],
    },
  ],
};
