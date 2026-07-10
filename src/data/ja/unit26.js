// Unit 26 — からだ・けんこう ("Body & health") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed.
// N4 body & health vocabulary. Introduces いたい (hurts) and わるい (bad) — core
// adjectives that make health talk natural. Examples use only A1 vocab + earlier A2
// draft vocab + A1 grammar. Naturalness queued for the batch native review.
export const UNIT26 = {
  id: "ja-u26",
  lang: "ja",
  title: "からだ・けんこう",
  order: 26,
  stage: "a2",
  lessons: [
    {
      id: "ja-u26l1", unit: 26, lesson: 1, title: "Body", cefr: "A2", dominantMode: "recall",
      canDo: "Name body parts: あたま かお のど かた せなか おなか.",
      items: [
        { id: "ja-u26l1-atama", type: "vocab", front: "あたま", reading: "atama", meaning: "head", example: { jp: "あたまがいたいです。", en: "I have a headache." }, accept: ["mind"] },
        { id: "ja-u26l1-kao", type: "vocab", front: "かお", reading: "kao", meaning: "face", example: { jp: "かおをあらいます。", en: "I wash my face." }, accept: ["the face"] },
        { id: "ja-u26l1-nodo", type: "vocab", front: "のど", reading: "nodo", meaning: "throat", example: { jp: "のどがいたいです。", en: "My throat hurts." }, accept: ["the throat"] },
        { id: "ja-u26l1-kata", type: "vocab", front: "かた", reading: "kata", meaning: "shoulder", example: { jp: "かたがいたいです。", en: "My shoulders hurt." }, accept: ["shoulders"] },
        { id: "ja-u26l1-senaka", type: "vocab", front: "せなか", reading: "senaka", meaning: "back", example: { jp: "せなかがひろいです。", en: "He has a broad back." }, accept: ["one's back"] },
        { id: "ja-u26l1-onaka", type: "vocab", front: "おなか", reading: "onaka", meaning: "stomach", example: { jp: "おなかがいたいです。", en: "I have a stomachache." }, accept: ["belly", "tummy"] },
      ],
    },
    {
      id: "ja-u26l2", unit: 26, lesson: 2, title: "Feeling ill", cefr: "A2", dominantMode: "recall",
      canDo: "Talk about being unwell: びょうき ねつ いたい わるい けが いしゃ.",
      items: [
        { id: "ja-u26l2-byoki", type: "vocab", front: "びょうき", reading: "byōki", meaning: "illness", example: { jp: "ちちはびょうきです。", en: "My father is ill." }, accept: ["sickness", "disease", "sick"] },
        { id: "ja-u26l2-netsu", type: "vocab", front: "ねつ", reading: "netsu", meaning: "fever", example: { jp: "ねつがあります。", en: "I have a fever." }, accept: ["temperature", "a high temperature"] },
        { id: "ja-u26l2-itai", type: "vocab", front: "いたい", reading: "itai", meaning: "painful", example: { jp: "あたまがいたいです。", en: "My head hurts." }, accept: ["hurts", "sore", "it hurts"] },
        { id: "ja-u26l2-warui", type: "vocab", front: "わるい", reading: "warui", meaning: "bad", example: { jp: "てんきがわるいです。", en: "The weather is bad." }, accept: ["poor", "not good"] },
        { id: "ja-u26l2-kega", type: "vocab", front: "けが", reading: "kega", meaning: "injury", example: { jp: "けがをします。", en: "I get injured." }, accept: ["wound", "hurt (oneself)"] },
        { id: "ja-u26l2-isha", type: "vocab", front: "いしゃ", reading: "isha", meaning: "doctor", example: { jp: "いしゃにいきます。", en: "I go to the doctor." }, accept: ["physician", "the doctor"] },
      ],
    },
    {
      id: "ja-u26l3", unit: 26, lesson: 3, title: "How the body feels", cefr: "A2", dominantMode: "recall",
      canDo: "Describe changes: つかれます なおります たおれます ふとります やせます なきます.",
      items: [
        { id: "ja-u26l3-tsukaremasu", type: "vocab", front: "つかれます", reading: "tsukaremasu", meaning: "get tired", example: { jp: "しごとでつかれます。", en: "I get tired from work." }, accept: ["be tired", "wear out"] },
        { id: "ja-u26l3-naorimasu", type: "vocab", front: "なおります", reading: "naorimasu", meaning: "recover", example: { jp: "びょうきがなおります。", en: "The illness gets better." }, accept: ["heal", "get better", "be cured"] },
        { id: "ja-u26l3-taoremasu", type: "vocab", front: "たおれます", reading: "taoremasu", meaning: "collapse", example: { jp: "ひとがたおれます。", en: "A person collapses." }, accept: ["fall over", "faint", "topple"] },
        { id: "ja-u26l3-futorimasu", type: "vocab", front: "ふとります", reading: "futorimasu", meaning: "gain weight", example: { jp: "すこしふとります。", en: "I gain a little weight." }, accept: ["get fat", "put on weight"] },
        { id: "ja-u26l3-yasemasu", type: "vocab", front: "やせます", reading: "yasemasu", meaning: "lose weight", example: { jp: "うんどうでやせます。", en: "I lose weight through exercise." }, accept: ["get thin", "slim down"] },
        { id: "ja-u26l3-nakimasu", type: "vocab", front: "なきます", reading: "nakimasu", meaning: "cry", example: { jp: "あかちゃんがなきます。", en: "The baby cries." }, accept: ["weep", "sob"] },
      ],
    },
    {
      id: "ja-u26l4", unit: 26, lesson: 4, title: "More of the body", cefr: "A2", dominantMode: "recall",
      canDo: "Name more parts: かみ ゆび つめ こえ ちから ひげ.",
      items: [
        { id: "ja-u26l4-kami", type: "vocab", front: "かみ", reading: "kami", meaning: "hair", example: { jp: "かみをあらいます。", en: "I wash my hair." }, accept: ["one's hair"] },
        { id: "ja-u26l4-yubi", type: "vocab", front: "ゆび", reading: "yubi", meaning: "finger", example: { jp: "ゆびがいたいです。", en: "My finger hurts." }, accept: ["toe", "fingers"] },
        { id: "ja-u26l4-tsume", type: "vocab", front: "つめ", reading: "tsume", meaning: "nail", example: { jp: "つめがきれいです。", en: "The nails are neat." }, accept: ["fingernail", "claw"] },
        { id: "ja-u26l4-koe", type: "vocab", front: "こえ", reading: "koe", meaning: "voice", example: { jp: "こえがおおきいです。", en: "The voice is loud." }, accept: ["a voice"] },
        { id: "ja-u26l4-chikara", type: "vocab", front: "ちから", reading: "chikara", meaning: "strength", example: { jp: "ちからがつよいです。", en: "He is strong." }, accept: ["power", "force"] },
        { id: "ja-u26l4-hige", type: "vocab", front: "ひげ", reading: "hige", meaning: "beard", example: { jp: "ちちはひげがあります。", en: "My father has a beard." }, accept: ["moustache", "facial hair"] },
      ],
    },
  ],
};
