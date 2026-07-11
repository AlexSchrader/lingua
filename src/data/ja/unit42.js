// Unit 42 — ぶんぽう・たform ("Grammar: the ～た form") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed + A2 greenlit.
// Plain PAST. The euphonic sound-changes are IDENTICAL to the て-form (Unit 40) — only
// て/で become た/だ — so this unit reinforces the same rule the learner just built.
// Each item is tagged { group, conjForm: "ta" }. Examples model plain past ("～た" =
// casual past) with きのう / yesterday, using only vocab already introduced.
export const UNIT42 = {
  id: "ja-u42", lang: "ja", title: "ぶんぽう・たform", order: 42, stage: "a2",
  lessons: [
    {
      id: "ja-u42l1", unit: 42, lesson: 1, title: "godan く・ぐ → いた・いだ", cefr: "A2", dominantMode: "produce",
      canDo: "Make the ～た form of く/ぐ verbs: かく→かいた, およぐ→およいだ (行く is special: いった).",
      items: [
        { id: "ja-u42l1-kaki", type: "vocab", front: "かきます", reading: "kakimasu", meaning: "write", example: { jp: "きのうてがみをかいた。", en: "I wrote a letter yesterday." }, accept: [], group: "godan", conjForm: "ta" },
        { id: "ja-u42l1-kiki", type: "vocab", front: "ききます", reading: "kikimasu", meaning: "listen", example: { jp: "きのうおんがくをきいた。", en: "I listened to music yesterday." }, accept: [], group: "godan", conjForm: "ta" },
        { id: "ja-u42l1-aruki", type: "vocab", front: "あるきます", reading: "arukimasu", meaning: "walk", example: { jp: "こうえんをあるいた。", en: "I walked in the park." }, accept: [], group: "godan", conjForm: "ta" },
        { id: "ja-u42l1-oyogi", type: "vocab", front: "およぎます", reading: "oyogimasu", meaning: "swim", example: { jp: "うみでおよいだ。", en: "I swam in the sea." }, accept: [], group: "godan", conjForm: "ta" },
        { id: "ja-u42l1-isogi", type: "vocab", front: "いそぎます", reading: "isogimasu", meaning: "hurry", example: { jp: "えきへいそいだ。", en: "I hurried to the station." }, accept: [], group: "godan", conjForm: "ta" },
        { id: "ja-u42l1-iki", type: "vocab", front: "いきます", reading: "ikimasu", meaning: "go", example: { jp: "きのうがっこうへいった。", en: "I went to school yesterday." }, accept: [], group: "godan", conjForm: "ta" },
      ],
    },
    {
      id: "ja-u42l2", unit: 42, lesson: 2, title: "godan う・つ・る → った", cefr: "A2", dominantMode: "produce",
      canDo: "Make the ～た form of う/つ/る verbs: かう→かった, のる→のった.",
      items: [
        { id: "ja-u42l2-kai", type: "vocab", front: "かいます", reading: "kaimasu", meaning: "buy", example: { jp: "パンをかった。", en: "I bought bread." }, accept: [], group: "godan", conjForm: "ta" },
        { id: "ja-u42l2-ai", type: "vocab", front: "あいます", reading: "aimasu", meaning: "meet", example: { jp: "きのうともだちにあった。", en: "I met a friend yesterday." }, accept: [], group: "godan", conjForm: "ta" },
        { id: "ja-u42l2-tsukuri", type: "vocab", front: "つくります", reading: "tsukurimasu", meaning: "make", example: { jp: "りょうりをつくった。", en: "I made some food." }, accept: [], group: "godan", conjForm: "ta" },
        { id: "ja-u42l2-nori", type: "vocab", front: "のります", reading: "norimasu", meaning: "ride", example: { jp: "でんしゃにのった。", en: "I took the train." }, accept: [], group: "godan", conjForm: "ta" },
        { id: "ja-u42l2-tori", type: "vocab", front: "とります", reading: "torimasu", meaning: "take", example: { jp: "しゃしんをとった。", en: "I took a photo." }, accept: [], group: "godan", conjForm: "ta" },
        { id: "ja-u42l2-watari", type: "vocab", front: "わたります", reading: "watarimasu", meaning: "cross", example: { jp: "はしをわたった。", en: "I crossed the bridge." }, accept: [], group: "godan", conjForm: "ta" },
      ],
    },
    {
      id: "ja-u42l3", unit: 42, lesson: 3, title: "godan む・ぶ・ぬ → んだ, す → した", cefr: "A2", dominantMode: "produce",
      canDo: "Make the ～た form of む/ぶ/ぬ verbs (→んだ) and す verbs (→した): のむ→のんだ, はなす→はなした.",
      items: [
        { id: "ja-u42l3-nomi", type: "vocab", front: "のみます", reading: "nomimasu", meaning: "drink", example: { jp: "みずをのんだ。", en: "I drank water." }, accept: [], group: "godan", conjForm: "ta" },
        { id: "ja-u42l3-yomi", type: "vocab", front: "よみます", reading: "yomimasu", meaning: "read", example: { jp: "ほんをよんだ。", en: "I read a book." }, accept: [], group: "godan", conjForm: "ta" },
        { id: "ja-u42l3-asobi", type: "vocab", front: "あそびます", reading: "asobimasu", meaning: "play", example: { jp: "こうえんであそんだ。", en: "I played in the park." }, accept: [], group: "godan", conjForm: "ta" },
        { id: "ja-u42l3-yasumi", type: "vocab", front: "やすみます", reading: "yasumimasu", meaning: "rest", example: { jp: "うちでやすんだ。", en: "I rested at home." }, accept: [], group: "godan", conjForm: "ta" },
        { id: "ja-u42l3-hanashi", type: "vocab", front: "はなします", reading: "hanashimasu", meaning: "speak", example: { jp: "せんせいとはなした。", en: "I talked with the teacher." }, accept: [], group: "godan", conjForm: "ta" },
        { id: "ja-u42l3-keshi", type: "vocab", front: "けします", reading: "keshimasu", meaning: "turn off", example: { jp: "でんきをけした。", en: "I turned off the light." }, accept: [], group: "godan", conjForm: "ta" },
      ],
    },
    {
      id: "ja-u42l4", unit: 42, lesson: 4, title: "ichidan + irregular", cefr: "A2", dominantMode: "produce",
      canDo: "Make the ～た form of ichidan (drop る + た) and irregular verbs: たべる→たべた, する→した, くる→きた.",
      items: [
        { id: "ja-u42l4-tabe", type: "vocab", front: "たべます", reading: "tabemasu", meaning: "eat", example: { jp: "あさごはんをたべた。", en: "I ate breakfast." }, accept: [], group: "ichidan", conjForm: "ta" },
        { id: "ja-u42l4-mi", type: "vocab", front: "みます", reading: "mimasu", meaning: "watch", example: { jp: "えいがをみた。", en: "I watched a movie." }, accept: [], group: "ichidan", conjForm: "ta" },
        { id: "ja-u42l4-ake", type: "vocab", front: "あけます", reading: "akemasu", meaning: "open", example: { jp: "まどをあけた。", en: "I opened the window." }, accept: [], group: "ichidan", conjForm: "ta" },
        { id: "ja-u42l4-oshie", type: "vocab", front: "おしえます", reading: "oshiemasu", meaning: "teach", example: { jp: "なまえをおしえた。", en: "I told my name." }, accept: [], group: "ichidan", conjForm: "ta" },
        { id: "ja-u42l4-ki", type: "vocab", front: "きます", reading: "kimasu", meaning: "come", example: { jp: "きのうともだちがきた。", en: "My friend came yesterday." }, accept: [], group: "irregular", conjForm: "ta" },
        { id: "ja-u42l4-shi", type: "vocab", front: "します", reading: "shimasu", meaning: "do", example: { jp: "きのうべんきょうをした。", en: "I studied yesterday." }, accept: [], group: "irregular", conjForm: "ta" },
      ],
    },
  ],
};
