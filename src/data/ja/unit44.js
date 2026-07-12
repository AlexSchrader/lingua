// Unit 44 — ぶんぽう・いこうform ("Grammar: the volitional form / let's ～") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed + A2 greenlit.
// VOLITIONAL ("let's / I'll ~", plain form of ～ましょう). godan う-column → お-column + う
// (かく→かこう, のむ→のもう); ichidan drop る + よう (たべる→たべよう); irregular する→しよう,
// くる→こよう. Each item tagged { group, conjForm: "volitional" }. Examples model the
// casual "let's ~" invitation, using only vocab already introduced. Closes the A2 grammar arc.
export const UNIT44 = {
  id: "ja-u44", lang: "ja", title: "ぶんぽう・いこうform", order: 44, stage: "a2",
  lessons: [
    {
      id: "ja-u44l1", unit: 44, lesson: 1, title: "godan → お-column + う (1)", cefr: "A2", dominantMode: "produce",
      canDo: "Make the volitional of godan verbs: かく→かこう, のむ→のもう, いく→いこう.",
      items: [
        { id: "ja-u44l1-kaki", type: "vocab", front: "かきます", reading: "kakimasu", meaning: "write", example: { jp: "てがみをかこう。", en: "Let's write a letter." }, accept: [], group: "godan", conjForm: "volitional" },
        { id: "ja-u44l1-nomi", type: "vocab", front: "のみます", reading: "nomimasu", meaning: "drink", example: { jp: "コーヒーをのもう。", en: "Let's drink coffee." }, accept: [], group: "godan", conjForm: "volitional" },
        { id: "ja-u44l1-iki", type: "vocab", front: "いきます", reading: "ikimasu", meaning: "go", example: { jp: "こうえんへいこう。", en: "Let's go to the park." }, accept: [], group: "godan", conjForm: "volitional" },
        { id: "ja-u44l1-kai", type: "vocab", front: "かいます", reading: "kaimasu", meaning: "buy", example: { jp: "パンをかおう。", en: "Let's buy bread." }, accept: [], group: "godan", conjForm: "volitional" },
        { id: "ja-u44l1-hanashi", type: "vocab", front: "はなします", reading: "hanashimasu", meaning: "speak", example: { jp: "にほんごではなそう。", en: "Let's speak in Japanese." }, accept: [], group: "godan", conjForm: "volitional" },
        { id: "ja-u44l1-asobi", type: "vocab", front: "あそびます", reading: "asobimasu", meaning: "play", example: { jp: "そとであそぼう。", en: "Let's play outside." }, accept: [], group: "godan", conjForm: "volitional" },
      ],
    },
    {
      id: "ja-u44l2", unit: 44, lesson: 2, title: "godan → お-column + う (2)", cefr: "A2", dominantMode: "produce",
      canDo: "Make the volitional of more godan verbs: つくる→つくろう, およぐ→およごう, やすむ→やすもう.",
      items: [
        { id: "ja-u44l2-tsukuri", type: "vocab", front: "つくります", reading: "tsukurimasu", meaning: "make", example: { jp: "ばんごはんをつくろう。", en: "Let's make dinner." }, accept: [], group: "godan", conjForm: "volitional" },
        { id: "ja-u44l2-nori", type: "vocab", front: "のります", reading: "norimasu", meaning: "ride", example: { jp: "でんしゃにのろう。", en: "Let's take the train." }, accept: [], group: "godan", conjForm: "volitional" },
        { id: "ja-u44l2-aruki", type: "vocab", front: "あるきます", reading: "arukimasu", meaning: "walk", example: { jp: "えきまであるこう。", en: "Let's walk to the station." }, accept: [], group: "godan", conjForm: "volitional" },
        { id: "ja-u44l2-oyogi", type: "vocab", front: "およぎます", reading: "oyogimasu", meaning: "swim", example: { jp: "うみでおよごう。", en: "Let's swim in the sea." }, accept: [], group: "godan", conjForm: "volitional" },
        { id: "ja-u44l2-yomi", type: "vocab", front: "よみます", reading: "yomimasu", meaning: "read", example: { jp: "このほんをよもう。", en: "Let's read this book." }, accept: [], group: "godan", conjForm: "volitional" },
        { id: "ja-u44l2-yasumi", type: "vocab", front: "やすみます", reading: "yasumimasu", meaning: "rest", example: { jp: "すこしやすもう。", en: "Let's rest a little." }, accept: [], group: "godan", conjForm: "volitional" },
      ],
    },
    {
      id: "ja-u44l3", unit: 44, lesson: 3, title: "ichidan + irregular", cefr: "A2", dominantMode: "produce",
      canDo: "Make the volitional of ichidan (drop る + よう) and irregular verbs: たべる→たべよう, する→しよう, くる→こよう.",
      items: [
        { id: "ja-u44l3-tabe", type: "vocab", front: "たべます", reading: "tabemasu", meaning: "eat", example: { jp: "ひるごはんをたべよう。", en: "Let's eat lunch." }, accept: [], group: "ichidan", conjForm: "volitional" },
        { id: "ja-u44l3-mi", type: "vocab", front: "みます", reading: "mimasu", meaning: "watch", example: { jp: "えいがをみよう。", en: "Let's watch a movie." }, accept: [], group: "ichidan", conjForm: "volitional" },
        { id: "ja-u44l3-ake", type: "vocab", front: "あけます", reading: "akemasu", meaning: "open", example: { jp: "まどをあけよう。", en: "Let's open the window." }, accept: [], group: "ichidan", conjForm: "volitional" },
        { id: "ja-u44l3-oshie", type: "vocab", front: "おしえます", reading: "oshiemasu", meaning: "teach", example: { jp: "みんなにおしえよう。", en: "Let's tell everyone." }, accept: [], group: "ichidan", conjForm: "volitional" },
        { id: "ja-u44l3-shi", type: "vocab", front: "します", reading: "shimasu", meaning: "do", example: { jp: "いっしょにべんきょうしよう。", en: "Let's study together." }, accept: [], group: "irregular", conjForm: "volitional" },
        { id: "ja-u44l3-ki", type: "vocab", front: "きます", reading: "kimasu", meaning: "come", example: { jp: "またここにこよう。", en: "Let's come here again." }, accept: [], group: "irregular", conjForm: "volitional" },
      ],
    },
  ],
};
