// Unit 43 — ぶんぽう・かのうform ("Grammar: the potential form / can ～") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed + A2 greenlit.
// POTENTIAL ("can do"). godan う-column → え-column + る (かく→かける, のむ→のめる, かう→かえる);
// ichidan drop る + られる (たべる→たべられる); irregular する→できる (special!), くる→こられる.
// Each item tagged { group, conjForm: "potential" }. The potential often marks its object
// with が — examples follow that, using only vocab already introduced.
export const UNIT43 = {
  id: "ja-u43", lang: "ja", title: "ぶんぽう・かのうform", order: 43, stage: "a2",
  lessons: [
    {
      id: "ja-u43l1", unit: 43, lesson: 1, title: "godan → え-column + る (1)", cefr: "A2", dominantMode: "produce",
      canDo: "Make the potential of godan verbs: かく→かける, のむ→のめる, かう→かえる (う→え).",
      items: [
        { id: "ja-u43l1-kaki", type: "vocab", front: "かきます", reading: "kakimasu", meaning: "write", example: { jp: "かんじがかける。", en: "I can write kanji." }, accept: [], group: "godan", conjForm: "potential" },
        { id: "ja-u43l1-nomi", type: "vocab", front: "のみます", reading: "nomimasu", meaning: "drink", example: { jp: "コーヒーがのめる。", en: "I can drink coffee." }, accept: [], group: "godan", conjForm: "potential" },
        { id: "ja-u43l1-yomi", type: "vocab", front: "よみます", reading: "yomimasu", meaning: "read", example: { jp: "にほんごがよめる。", en: "I can read Japanese." }, accept: [], group: "godan", conjForm: "potential" },
        { id: "ja-u43l1-kai", type: "vocab", front: "かいます", reading: "kaimasu", meaning: "buy", example: { jp: "ここでパンがかえる。", en: "I can buy bread here." }, accept: [], group: "godan", conjForm: "potential" },
        { id: "ja-u43l1-hanashi", type: "vocab", front: "はなします", reading: "hanashimasu", meaning: "speak", example: { jp: "えいごがはなせる。", en: "I can speak English." }, accept: [], group: "godan", conjForm: "potential" },
        { id: "ja-u43l1-kiki", type: "vocab", front: "ききます", reading: "kikimasu", meaning: "listen", example: { jp: "ここでおんがくがきける。", en: "I can listen to music here." }, accept: [], group: "godan", conjForm: "potential" },
      ],
    },
    {
      id: "ja-u43l2", unit: 43, lesson: 2, title: "godan → え-column + る (2)", cefr: "A2", dominantMode: "produce",
      canDo: "Make the potential of more godan verbs: つくる→つくれる, およぐ→およげる, わたる→わたれる.",
      items: [
        { id: "ja-u43l2-tsukuri", type: "vocab", front: "つくります", reading: "tsukurimasu", meaning: "make", example: { jp: "りょうりがつくれる。", en: "I can make food." }, accept: [], group: "godan", conjForm: "potential" },
        { id: "ja-u43l2-nori", type: "vocab", front: "のります", reading: "norimasu", meaning: "ride", example: { jp: "じてんしゃにのれる。", en: "I can ride a bicycle." }, accept: [], group: "godan", conjForm: "potential" },
        { id: "ja-u43l2-aruki", type: "vocab", front: "あるきます", reading: "arukimasu", meaning: "walk", example: { jp: "たくさんあるける。", en: "I can walk a lot." }, accept: [], group: "godan", conjForm: "potential" },
        { id: "ja-u43l2-oyogi", type: "vocab", front: "およぎます", reading: "oyogimasu", meaning: "swim", example: { jp: "うみでおよげる。", en: "I can swim in the sea." }, accept: [], group: "godan", conjForm: "potential" },
        { id: "ja-u43l2-tori", type: "vocab", front: "とります", reading: "torimasu", meaning: "take", example: { jp: "ここでしゃしんがとれる。", en: "I can take photos here." }, accept: [], group: "godan", conjForm: "potential" },
        { id: "ja-u43l2-watari", type: "vocab", front: "わたります", reading: "watarimasu", meaning: "cross", example: { jp: "このはしがわたれる。", en: "I can cross this bridge." }, accept: [], group: "godan", conjForm: "potential" },
      ],
    },
    {
      id: "ja-u43l3", unit: 43, lesson: 3, title: "ichidan + irregular", cefr: "A2", dominantMode: "produce",
      canDo: "Make the potential of ichidan (drop る + られる) and irregular verbs: たべる→たべられる, する→できる, くる→こられる.",
      items: [
        { id: "ja-u43l3-tabe", type: "vocab", front: "たべます", reading: "tabemasu", meaning: "eat", example: { jp: "やさいがたべられる。", en: "I can eat vegetables." }, accept: [], group: "ichidan", conjForm: "potential" },
        { id: "ja-u43l3-mi", type: "vocab", front: "みます", reading: "mimasu", meaning: "watch", example: { jp: "ここでテレビがみられる。", en: "I can watch TV here." }, accept: [], group: "ichidan", conjForm: "potential" },
        { id: "ja-u43l3-ake", type: "vocab", front: "あけます", reading: "akemasu", meaning: "open", example: { jp: "このまどがあけられる。", en: "I can open this window." }, accept: [], group: "ichidan", conjForm: "potential" },
        { id: "ja-u43l3-oshie", type: "vocab", front: "おしえます", reading: "oshiemasu", meaning: "teach", example: { jp: "にほんごがおしえられる。", en: "I can teach Japanese." }, accept: [], group: "ichidan", conjForm: "potential" },
        { id: "ja-u43l3-shi", type: "vocab", front: "します", reading: "shimasu", meaning: "do", example: { jp: "りょうりができる。", en: "I can cook." }, accept: [], group: "irregular", conjForm: "potential" },
        { id: "ja-u43l3-ki", type: "vocab", front: "きます", reading: "kimasu", meaning: "come", example: { jp: "あしたこられる。", en: "I can come tomorrow." }, accept: [], group: "irregular", conjForm: "potential" },
      ],
    },
  ],
};
