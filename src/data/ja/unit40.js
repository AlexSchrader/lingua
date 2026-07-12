// Unit 40 — ぶんぽう・て form ("Grammar: the て-form") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed + A2 greenlit.
// FIRST conjugation-drill unit — the gateway of N4 grammar. Each item is a verb the
// learner knows, tagged { group, conjForm: "te" }, so the conjugate card asks them to
// PRODUCE its て-form (rule-based, checked by the engine). Grouped by euphonic family
// so the rule is learned, not memorized. Examples show the form in the ～てください pattern.
export const UNIT40 = {
  id: "ja-u40", lang: "ja", title: "ぶんぽう・てform", order: 40, stage: "a2",
  lessons: [
    {
      id: "ja-u40l1", unit: 40, lesson: 1, title: "godan く・ぐ → いて・いで", cefr: "A2", dominantMode: "produce",
      canDo: "Make the て-form of く/ぐ verbs: かく→かいて, およぐ→およいで (行く is special: いって).",
      items: [
        { id: "ja-u40l1-kaki", type: "vocab", front: "かきます", reading: "kakimasu", meaning: "write", example: { jp: "なまえをかいてください。", en: "Please write your name." }, accept: [], group: "godan", conjForm: "te" },
        { id: "ja-u40l1-kiki", type: "vocab", front: "ききます", reading: "kikimasu", meaning: "listen", example: { jp: "おんがくをきいてください。", en: "Please listen to music." }, accept: [], group: "godan", conjForm: "te" },
        { id: "ja-u40l1-aruki", type: "vocab", front: "あるきます", reading: "arukimasu", meaning: "walk", example: { jp: "みちをあるいてください。", en: "Please walk along the road." }, accept: [], group: "godan", conjForm: "te" },
        { id: "ja-u40l1-oyogi", type: "vocab", front: "およぎます", reading: "oyogimasu", meaning: "swim", example: { jp: "プールでおよいでください。", en: "Please swim in the pool." }, accept: [], group: "godan", conjForm: "te" },
        { id: "ja-u40l1-isogi", type: "vocab", front: "いそぎます", reading: "isogimasu", meaning: "hurry", example: { jp: "えきへいそいでください。", en: "Please hurry to the station." }, accept: [], group: "godan", conjForm: "te" },
        { id: "ja-u40l1-iki", type: "vocab", front: "いきます", reading: "ikimasu", meaning: "go", example: { jp: "がっこうへいってください。", en: "Please go to school." }, accept: [], group: "godan", conjForm: "te" },
      ],
    },
    {
      id: "ja-u40l2", unit: 40, lesson: 2, title: "godan う・つ・る → って", cefr: "A2", dominantMode: "produce",
      canDo: "Make the て-form of う/つ/る verbs: かう→かって, のる→のって.",
      items: [
        { id: "ja-u40l2-kai", type: "vocab", front: "かいます", reading: "kaimasu", meaning: "buy", example: { jp: "パンをかってください。", en: "Please buy bread." }, accept: [], group: "godan", conjForm: "te" },
        { id: "ja-u40l2-ai", type: "vocab", front: "あいます", reading: "aimasu", meaning: "meet", example: { jp: "ともだちにあってください。", en: "Please meet my friend." }, accept: [], group: "godan", conjForm: "te" },
        { id: "ja-u40l2-tsukuri", type: "vocab", front: "つくります", reading: "tsukurimasu", meaning: "make", example: { jp: "りょうりをつくってください。", en: "Please make some food." }, accept: [], group: "godan", conjForm: "te" },
        { id: "ja-u40l2-nori", type: "vocab", front: "のります", reading: "norimasu", meaning: "ride", example: { jp: "でんしゃにのってください。", en: "Please get on the train." }, accept: [], group: "godan", conjForm: "te" },
        { id: "ja-u40l2-tori", type: "vocab", front: "とります", reading: "torimasu", meaning: "take", example: { jp: "しゃしんをとってください。", en: "Please take a photo." }, accept: [], group: "godan", conjForm: "te" },
        { id: "ja-u40l2-watari", type: "vocab", front: "わたります", reading: "watarimasu", meaning: "cross", example: { jp: "はしをわたってください。", en: "Please cross the bridge." }, accept: [], group: "godan", conjForm: "te" },
      ],
    },
    {
      id: "ja-u40l3", unit: 40, lesson: 3, title: "godan む・ぶ・ぬ → んで, す → して", cefr: "A2", dominantMode: "produce",
      canDo: "Make the て-form of む/ぶ/ぬ verbs (→んで) and す verbs (→して): のむ→のんで, はなす→はなして.",
      items: [
        { id: "ja-u40l3-nomi", type: "vocab", front: "のみます", reading: "nomimasu", meaning: "drink", example: { jp: "みずをのんでください。", en: "Please drink water." }, accept: [], group: "godan", conjForm: "te" },
        { id: "ja-u40l3-yomi", type: "vocab", front: "よみます", reading: "yomimasu", meaning: "read", example: { jp: "ほんをよんでください。", en: "Please read the book." }, accept: [], group: "godan", conjForm: "te" },
        { id: "ja-u40l3-asobi", type: "vocab", front: "あそびます", reading: "asobimasu", meaning: "play", example: { jp: "こうえんであそんでください。", en: "Please play in the park." }, accept: [], group: "godan", conjForm: "te" },
        { id: "ja-u40l3-yasumi", type: "vocab", front: "やすみます", reading: "yasumimasu", meaning: "rest", example: { jp: "うちでやすんでください。", en: "Please rest at home." }, accept: [], group: "godan", conjForm: "te" },
        { id: "ja-u40l3-hanashi", type: "vocab", front: "はなします", reading: "hanashimasu", meaning: "speak", example: { jp: "えいごではなしてください。", en: "Please speak in English." }, accept: [], group: "godan", conjForm: "te" },
        { id: "ja-u40l3-keshi", type: "vocab", front: "けします", reading: "keshimasu", meaning: "turn off", example: { jp: "でんきをけしてください。", en: "Please turn off the light." }, accept: [], group: "godan", conjForm: "te" },
      ],
    },
    {
      id: "ja-u40l4", unit: 40, lesson: 4, title: "ichidan + irregular", cefr: "A2", dominantMode: "produce",
      canDo: "Make the て-form of ichidan (drop る +て) and irregular verbs: たべる→たべて, する→して, くる→きて.",
      items: [
        { id: "ja-u40l4-tabe", type: "vocab", front: "たべます", reading: "tabemasu", meaning: "eat", example: { jp: "やさいをたべてください。", en: "Please eat your vegetables." }, accept: [], group: "ichidan", conjForm: "te" },
        { id: "ja-u40l4-mi", type: "vocab", front: "みます", reading: "mimasu", meaning: "watch", example: { jp: "テレビをみてください。", en: "Please watch the TV." }, accept: [], group: "ichidan", conjForm: "te" },
        { id: "ja-u40l4-ake", type: "vocab", front: "あけます", reading: "akemasu", meaning: "open", example: { jp: "まどをあけてください。", en: "Please open the window." }, accept: [], group: "ichidan", conjForm: "te" },
        { id: "ja-u40l4-oshie", type: "vocab", front: "おしえます", reading: "oshiemasu", meaning: "teach", example: { jp: "なまえをおしえてください。", en: "Please tell me your name." }, accept: [], group: "ichidan", conjForm: "te" },
        { id: "ja-u40l4-ki", type: "vocab", front: "きます", reading: "kimasu", meaning: "come", example: { jp: "うちにきてください。", en: "Please come to my house." }, accept: [], group: "irregular", conjForm: "te" },
        { id: "ja-u40l4-shi", type: "vocab", front: "します", reading: "shimasu", meaning: "do", example: { jp: "べんきょうをしてください。", en: "Please study." }, accept: [], group: "irregular", conjForm: "te" },
      ],
    },
  ],
};
