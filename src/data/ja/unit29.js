// Unit 29 — じかん・ふくし ("Time & adverbs") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed.
// N4 time-span words + high-frequency adverbs. Adverbs modify the A1 verbs/adjectives
// the learner already has, so examples stay inside A1 grammar (incl. past ました,
// negative ません, want たいです). Naturalness queued for the native review.
export const UNIT29 = {
  id: "ja-u29", lang: "ja", title: "じかん・ふくし", order: 29, stage: "a2",
  lessons: [
    {
      id: "ja-u29l1", unit: 29, lesson: 1, title: "Weeks & months", cefr: "A2", dominantMode: "recall",
      canDo: "Talk about time spans: らいしゅう せんげつ らいげつ こんげつ しゅうまつ まいしゅう.",
      items: [
        { id: "ja-u29l1-raishu", type: "vocab", front: "らいしゅう", reading: "raishū", meaning: "next week", example: { jp: "らいしゅう、りょこうします。", en: "Next week I'll travel." }, accept: ["the coming week"] },
        { id: "ja-u29l1-sengetsu", type: "vocab", front: "せんげつ", reading: "sengetsu", meaning: "last month", example: { jp: "せんげつ、にほんにいきました。", en: "Last month I went to Japan." }, accept: ["the previous month"] },
        { id: "ja-u29l1-raigetsu", type: "vocab", front: "らいげつ", reading: "raigetsu", meaning: "next month", example: { jp: "らいげつ、しけんです。", en: "Next month is the exam." }, accept: ["the coming month"] },
        { id: "ja-u29l1-kongetsu", type: "vocab", front: "こんげつ", reading: "kongetsu", meaning: "this month", example: { jp: "こんげつはいそがしいです。", en: "This month is busy." }, accept: ["the current month"] },
        { id: "ja-u29l1-shumatsu", type: "vocab", front: "しゅうまつ", reading: "shūmatsu", meaning: "weekend", example: { jp: "しゅうまつ、あそびます。", en: "On the weekend I hang out." }, accept: ["the weekend"] },
        { id: "ja-u29l1-maishu", type: "vocab", front: "まいしゅう", reading: "maishū", meaning: "every week", example: { jp: "まいしゅう、およぎます。", en: "I swim every week." }, accept: ["weekly", "each week"] },
      ],
    },
    {
      id: "ja-u29l2", unit: 29, lesson: 2, title: "How often", cefr: "A2", dominantMode: "recall",
      canDo: "Say how often: いつも ときどき たいてい たまに ぜんぜん かならず.",
      items: [
        { id: "ja-u29l2-itsumo", type: "vocab", front: "いつも", reading: "itsumo", meaning: "always", example: { jp: "いつもあるきます。", en: "I always walk." }, accept: ["all the time", "usually"] },
        { id: "ja-u29l2-tokidoki", type: "vocab", front: "ときどき", reading: "tokidoki", meaning: "sometimes", example: { jp: "ときどきえいがをみます。", en: "Sometimes I watch movies." }, accept: ["now and then", "occasionally"] },
        { id: "ja-u29l2-taitei", type: "vocab", front: "たいてい", reading: "taitei", meaning: "usually", example: { jp: "たいていうちにいます。", en: "I'm usually at home." }, accept: ["mostly", "generally"] },
        { id: "ja-u29l2-tamani", type: "vocab", front: "たまに", reading: "tamani", meaning: "occasionally", example: { jp: "たまにはしります。", en: "I run occasionally." }, accept: ["once in a while", "rarely"] },
        { id: "ja-u29l2-zenzen", type: "vocab", front: "ぜんぜん", reading: "zenzen", meaning: "not at all", example: { jp: "ぜんぜんわかりません。", en: "I don't understand at all." }, accept: ["not in the least"], hint: "ぜんぜん pairs with a NEGATIVE: ぜんぜん…ません = 'not … at all'." },
        { id: "ja-u29l2-kanarazu", type: "vocab", front: "かならず", reading: "kanarazu", meaning: "without fail", example: { jp: "かならずいきます。", en: "I'll definitely go." }, accept: ["always", "for sure", "certainly"] },
      ],
    },
    {
      id: "ja-u29l3", unit: 29, lesson: 3, title: "Already, still, maybe", cefr: "A2", dominantMode: "recall",
      canDo: "Add nuance: もう まだ たぶん きっと ぜひ だいたい.",
      items: [
        { id: "ja-u29l3-mo", type: "vocab", front: "もう", reading: "mō", meaning: "already", example: { jp: "もうたべました。", en: "I've already eaten." }, accept: ["now", "yet"] },
        { id: "ja-u29l3-mada", type: "vocab", front: "まだ", reading: "mada", meaning: "still", example: { jp: "まだねむいです。", en: "I'm still sleepy." }, accept: ["yet", "not yet"] },
        { id: "ja-u29l3-tabun", type: "vocab", front: "たぶん", reading: "tabun", meaning: "probably", example: { jp: "たぶんあめです。", en: "It'll probably rain." }, accept: ["maybe", "perhaps"] },
        { id: "ja-u29l3-kitto", type: "vocab", front: "きっと", reading: "kitto", meaning: "surely", example: { jp: "きっとだいじょうぶです。", en: "It'll surely be fine." }, accept: ["certainly", "for sure"] },
        { id: "ja-u29l3-zehi", type: "vocab", front: "ぜひ", reading: "zehi", meaning: "by all means", example: { jp: "ぜひいきたいです。", en: "I definitely want to go." }, accept: ["definitely", "for sure"] },
        { id: "ja-u29l3-daitai", type: "vocab", front: "だいたい", reading: "daitai", meaning: "roughly", example: { jp: "だいたいわかります。", en: "I roughly understand." }, accept: ["mostly", "about", "generally"] },
      ],
    },
    {
      id: "ja-u29l4", unit: 29, lesson: 4, title: "Soon, more, most", cefr: "A2", dominantMode: "recall",
      canDo: "Compare and time things: すぐ もっと いちばん とくに やっと ほとんど.",
      items: [
        { id: "ja-u29l4-sugu", type: "vocab", front: "すぐ", reading: "sugu", meaning: "soon", example: { jp: "すぐいきます。", en: "I'll go right away." }, accept: ["right away", "immediately"] },
        { id: "ja-u29l4-motto", type: "vocab", front: "もっと", reading: "motto", meaning: "more", example: { jp: "もっとほしいです。", en: "I want more." }, accept: ["further", "even more"] },
        { id: "ja-u29l4-ichiban", type: "vocab", front: "いちばん", reading: "ichiban", meaning: "most", example: { jp: "なつがいちばんすきです。", en: "I like summer the most." }, accept: ["best", "number one", "the most"], hint: "いちばん before an adjective = the superlative: いちばん すき = like (it) the most / best." },
        { id: "ja-u29l4-tokuni", type: "vocab", front: "とくに", reading: "tokuni", meaning: "especially", example: { jp: "とくにあついです。", en: "It's especially hot." }, accept: ["particularly", "in particular"] },
        { id: "ja-u29l4-yatto", type: "vocab", front: "やっと", reading: "yatto", meaning: "finally", example: { jp: "やっとつきます。", en: "I finally arrive." }, accept: ["at last", "at length"] },
        { id: "ja-u29l4-hotondo", type: "vocab", front: "ほとんど", reading: "hotondo", meaning: "almost", example: { jp: "ほとんどわかりません。", en: "I understand almost none of it." }, accept: ["nearly", "mostly", "hardly (with neg.)"] },
      ],
    },
  ],
};
