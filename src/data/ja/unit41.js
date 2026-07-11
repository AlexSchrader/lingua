// Unit 41 — ぶんぽう・ないform ("Grammar: the ～ない form") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed + A2 greenlit.
// Plain NEGATIVE. Each item is a known verb tagged { group, conjForm: "nai" } so the
// conjugate card asks the learner to PRODUCE its plain-negative form (rule-based, engine
// -checked). Grouped by euphonic family: godan い-column → あ-column + ない (う-verbs → わ,
// not あ), ichidan drop る + ない, irregular する→しない / くる→こない. Examples model the
// form as a casual "won't ~" statement, using only vocab already introduced.
export const UNIT41 = {
  id: "ja-u41", lang: "ja", title: "ぶんぽう・ないform", order: 41, stage: "a2",
  lessons: [
    {
      id: "ja-u41l1", unit: 41, lesson: 1, title: "godan う・つ・る → わ・た・ら + ない", cefr: "A2", dominantMode: "produce",
      canDo: "Make the ～ない form of う/つ/る verbs: かう→かわない (う→わ, not あ), のる→のらない.",
      items: [
        { id: "ja-u41l1-kai", type: "vocab", front: "かいます", reading: "kaimasu", meaning: "buy", example: { jp: "きょうはなにもかわない。", en: "I won't buy anything today." }, accept: [], group: "godan", conjForm: "nai" },
        { id: "ja-u41l1-ai", type: "vocab", front: "あいます", reading: "aimasu", meaning: "meet", example: { jp: "あしたともだちにあわない。", en: "I won't meet my friend tomorrow." }, accept: [], group: "godan", conjForm: "nai" },
        { id: "ja-u41l1-tsukuri", type: "vocab", front: "つくります", reading: "tsukurimasu", meaning: "make", example: { jp: "きょうはばんごはんをつくらない。", en: "I won't make dinner today." }, accept: [], group: "godan", conjForm: "nai" },
        { id: "ja-u41l1-nori", type: "vocab", front: "のります", reading: "norimasu", meaning: "ride", example: { jp: "きょうはバスにのらない。", en: "I won't take the bus today." }, accept: [], group: "godan", conjForm: "nai" },
        { id: "ja-u41l1-tori", type: "vocab", front: "とります", reading: "torimasu", meaning: "take", example: { jp: "ここでしゃしんをとらない。", en: "I won't take photos here." }, accept: [], group: "godan", conjForm: "nai" },
        { id: "ja-u41l1-watari", type: "vocab", front: "わたります", reading: "watarimasu", meaning: "cross", example: { jp: "このはしをわたらない。", en: "I won't cross this bridge." }, accept: [], group: "godan", conjForm: "nai" },
      ],
    },
    {
      id: "ja-u41l2", unit: 41, lesson: 2, title: "godan く・ぐ・す → か・が・さ + ない", cefr: "A2", dominantMode: "produce",
      canDo: "Make the ～ない form of く/ぐ/す verbs: かく→かかない, およぐ→およがない, はなす→はなさない.",
      items: [
        { id: "ja-u41l2-kaki", type: "vocab", front: "かきます", reading: "kakimasu", meaning: "write", example: { jp: "きょうはなにもかかない。", en: "I won't write anything today." }, accept: [], group: "godan", conjForm: "nai" },
        { id: "ja-u41l2-kiki", type: "vocab", front: "ききます", reading: "kikimasu", meaning: "listen", example: { jp: "いまおんがくをきかない。", en: "I won't listen to music now." }, accept: [], group: "godan", conjForm: "nai" },
        { id: "ja-u41l2-aruki", type: "vocab", front: "あるきます", reading: "arukimasu", meaning: "walk", example: { jp: "きょうはあるかない。", en: "I won't walk today." }, accept: [], group: "godan", conjForm: "nai" },
        { id: "ja-u41l2-oyogi", type: "vocab", front: "およぎます", reading: "oyogimasu", meaning: "swim", example: { jp: "きょうはうみでおよがない。", en: "I won't swim in the sea today." }, accept: [], group: "godan", conjForm: "nai" },
        { id: "ja-u41l2-hanashi", type: "vocab", front: "はなします", reading: "hanashimasu", meaning: "speak", example: { jp: "にほんごではなさない。", en: "I won't speak in Japanese." }, accept: [], group: "godan", conjForm: "nai" },
        { id: "ja-u41l2-keshi", type: "vocab", front: "けします", reading: "keshimasu", meaning: "turn off", example: { jp: "でんきをけさない。", en: "I won't turn off the light." }, accept: [], group: "godan", conjForm: "nai" },
      ],
    },
    {
      id: "ja-u41l3", unit: 41, lesson: 3, title: "godan む・ぶ・ぬ → ま・ば・な + ない", cefr: "A2", dominantMode: "produce",
      canDo: "Make the ～ない form of む/ぶ/ぬ verbs: のむ→のまない, あそぶ→あそばない.",
      items: [
        { id: "ja-u41l3-nomi", type: "vocab", front: "のみます", reading: "nomimasu", meaning: "drink", example: { jp: "きょうはコーヒーをのまない。", en: "I won't drink coffee today." }, accept: [], group: "godan", conjForm: "nai" },
        { id: "ja-u41l3-yomi", type: "vocab", front: "よみます", reading: "yomimasu", meaning: "read", example: { jp: "きょうはほんをよまない。", en: "I won't read a book today." }, accept: [], group: "godan", conjForm: "nai" },
        { id: "ja-u41l3-asobi", type: "vocab", front: "あそびます", reading: "asobimasu", meaning: "play", example: { jp: "きょうはあそばない。", en: "I won't play today." }, accept: [], group: "godan", conjForm: "nai" },
        { id: "ja-u41l3-yasumi", type: "vocab", front: "やすみます", reading: "yasumimasu", meaning: "rest", example: { jp: "あしたはやすまない。", en: "I won't rest tomorrow." }, accept: [], group: "godan", conjForm: "nai" },
        { id: "ja-u41l3-narabi", type: "vocab", front: "ならびます", reading: "narabimasu", meaning: "line up", example: { jp: "ここにならばない。", en: "I won't line up here." }, accept: [], group: "godan", conjForm: "nai" },
        { id: "ja-u41l3-erabi", type: "vocab", front: "えらびます", reading: "erabimasu", meaning: "choose", example: { jp: "これをえらばない。", en: "I won't choose this one." }, accept: [], group: "godan", conjForm: "nai" },
      ],
    },
    {
      id: "ja-u41l4", unit: 41, lesson: 4, title: "ichidan + irregular", cefr: "A2", dominantMode: "produce",
      canDo: "Make the ～ない form of ichidan (drop る + ない) and irregular verbs: たべる→たべない, する→しない, くる→こない.",
      items: [
        { id: "ja-u41l4-tabe", type: "vocab", front: "たべます", reading: "tabemasu", meaning: "eat", example: { jp: "やさいをたべない。", en: "I won't eat vegetables." }, accept: [], group: "ichidan", conjForm: "nai" },
        { id: "ja-u41l4-mi", type: "vocab", front: "みます", reading: "mimasu", meaning: "watch", example: { jp: "きょうはテレビをみない。", en: "I won't watch TV today." }, accept: [], group: "ichidan", conjForm: "nai" },
        { id: "ja-u41l4-ake", type: "vocab", front: "あけます", reading: "akemasu", meaning: "open", example: { jp: "まどをあけない。", en: "I won't open the window." }, accept: [], group: "ichidan", conjForm: "nai" },
        { id: "ja-u41l4-oshie", type: "vocab", front: "おしえます", reading: "oshiemasu", meaning: "teach", example: { jp: "なまえをおしえない。", en: "I won't tell my name." }, accept: [], group: "ichidan", conjForm: "nai" },
        { id: "ja-u41l4-ki", type: "vocab", front: "きます", reading: "kimasu", meaning: "come", example: { jp: "あしたはこない。", en: "I won't come tomorrow." }, accept: [], group: "irregular", conjForm: "nai" },
        { id: "ja-u41l4-shi", type: "vocab", front: "します", reading: "shimasu", meaning: "do", example: { jp: "きょうはべんきょうをしない。", en: "I won't study today." }, accept: [], group: "irregular", conjForm: "nai" },
      ],
    },
  ],
};
