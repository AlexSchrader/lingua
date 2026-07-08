// Unit 39 — せいかつ・きもち ("Daily life & feelings") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed + A2 greenlit.
// More common N4 vocabulary (communication, plans, feelings, everyday nouns). Examples
// use only A1 vocab + earlier A2 vocab + A1 grammar.
export const UNIT39 = {
  id: "ja-u39", lang: "ja", title: "せいかつ・きもち", order: 39, stage: "a2",
  lessons: [
    {
      id: "ja-u39l1", unit: 39, lesson: 1, title: "Keeping in touch", cefr: "A2", dominantMode: "recall",
      canDo: "Communicate: メール へんじ やくそく れんらく あいさつ ようじ.",
      items: [
        { id: "ja-u39l1-meru", type: "vocab", front: "メール", reading: "mēru", meaning: "email", example: { jp: "メールをおくります。", en: "I send an email." }, accept: ["e-mail", "message"] },
        { id: "ja-u39l1-henji", type: "vocab", front: "へんじ", reading: "henji", meaning: "reply", example: { jp: "へんじをします。", en: "I reply." }, accept: ["response", "answer"] },
        { id: "ja-u39l1-yakusoku", type: "vocab", front: "やくそく", reading: "yakusoku", meaning: "promise", example: { jp: "やくそくがあります。", en: "I have an appointment." }, accept: ["appointment", "plans"] },
        { id: "ja-u39l1-renraku", type: "vocab", front: "れんらく", reading: "renraku", meaning: "contact", example: { jp: "れんらくをします。", en: "I get in touch." }, accept: ["communication", "get in touch"] },
        { id: "ja-u39l1-aisatsu", type: "vocab", front: "あいさつ", reading: "aisatsu", meaning: "greeting", example: { jp: "あいさつをします。", en: "I greet (someone)." }, accept: ["salutation"] },
        { id: "ja-u39l1-yoji", type: "vocab", front: "ようじ", reading: "yōji", meaning: "errand", example: { jp: "ようじがあります。", en: "I have an errand to do." }, accept: ["business", "things to do"] },
      ],
    },
    {
      id: "ja-u39l2", unit: 39, lesson: 2, title: "Plans & routine", cefr: "A2", dominantMode: "recall",
      canDo: "Talk about your life: つごう しゅみ よてい じゆう きそく せいかつ.",
      items: [
        { id: "ja-u39l2-tsugo", type: "vocab", front: "つごう", reading: "tsugō", meaning: "circumstances", example: { jp: "つごうがわるいです。", en: "It's not convenient for me." }, accept: ["convenience", "situation"] },
        { id: "ja-u39l2-shumi", type: "vocab", front: "しゅみ", reading: "shumi", meaning: "hobby", example: { jp: "しゅみはおんがくです。", en: "My hobby is music." }, accept: ["interest", "pastime"] },
        { id: "ja-u39l2-yotei", type: "vocab", front: "よてい", reading: "yotei", meaning: "plan", example: { jp: "あしたのよていです。", en: "It's tomorrow's plan." }, accept: ["schedule", "arrangement"] },
        { id: "ja-u39l2-jiyu", type: "vocab", front: "じゆう", reading: "jiyū", meaning: "freedom", example: { jp: "じゆうがすきです。", en: "I like freedom." }, accept: ["free", "liberty"] },
        { id: "ja-u39l2-kisoku", type: "vocab", front: "きそく", reading: "kisoku", meaning: "rule", example: { jp: "がっこうのきそくです。", en: "It's the school rule." }, accept: ["regulation"] },
        { id: "ja-u39l2-seikatsu", type: "vocab", front: "せいかつ", reading: "seikatsu", meaning: "daily life", example: { jp: "にほんのせいかつです。", en: "It's life in Japan." }, accept: ["living", "lifestyle"] },
      ],
    },
    {
      id: "ja-u39l3", unit: 39, lesson: 3, title: "How you feel", cefr: "A2", dominantMode: "recall",
      canDo: "Describe your state: きぶん きもち あんしん きょうみ けいけん きかい.",
      items: [
        { id: "ja-u39l3-kibun", type: "vocab", front: "きぶん", reading: "kibun", meaning: "mood", example: { jp: "きぶんがいいです。", en: "I'm in a good mood." }, accept: ["feeling"] },
        { id: "ja-u39l3-kimochi", type: "vocab", front: "きもち", reading: "kimochi", meaning: "feeling", example: { jp: "きもちがいいです。", en: "It feels nice." }, accept: ["emotion", "sensation"] },
        { id: "ja-u39l3-anshin", type: "vocab", front: "あんしん", reading: "anshin", meaning: "relief", example: { jp: "あんしんします。", en: "I feel relieved." }, accept: ["peace of mind", "reassurance"] },
        { id: "ja-u39l3-kyomi", type: "vocab", front: "きょうみ", reading: "kyōmi", meaning: "interest", example: { jp: "にほんにきょうみがあります。", en: "I'm interested in Japan." }, accept: ["curiosity"] },
        { id: "ja-u39l3-keiken", type: "vocab", front: "けいけん", reading: "keiken", meaning: "experience", example: { jp: "いいけいけんです。", en: "It's a good experience." }, accept: ["having done"] },
        { id: "ja-u39l3-kikai", type: "vocab", front: "きかい", reading: "kikai", meaning: "opportunity", example: { jp: "いいきかいです。", en: "It's a good opportunity." }, accept: ["chance", "occasion"] },
      ],
    },
    {
      id: "ja-u39l4", unit: 39, lesson: 4, title: "Everyday nouns", cefr: "A2", dominantMode: "recall",
      canDo: "Common words: にもつ しゅうかん ぐあい るす よう べつ.",
      items: [
        { id: "ja-u39l4-nimotsu", type: "vocab", front: "にもつ", reading: "nimotsu", meaning: "luggage", example: { jp: "にもつがおもいです。", en: "The luggage is heavy." }, accept: ["baggage", "a package"] },
        { id: "ja-u39l4-shukan", type: "vocab", front: "しゅうかん", reading: "shūkan", meaning: "habit", example: { jp: "いいしゅうかんです。", en: "It's a good habit." }, accept: ["custom", "practice"] },
        { id: "ja-u39l4-guai", type: "vocab", front: "ぐあい", reading: "guai", meaning: "condition", example: { jp: "ぐあいがわるいです。", en: "I feel unwell." }, accept: ["state", "how one feels"] },
        { id: "ja-u39l4-rusu", type: "vocab", front: "るす", reading: "rusu", meaning: "absence", example: { jp: "きのうはるすでした。", en: "I was out yesterday." }, accept: ["not home", "away"] },
        { id: "ja-u39l4-yo", type: "vocab", front: "よう", reading: "yō", meaning: "business (to attend to)", example: { jp: "ようがあります。", en: "I have something to do." }, accept: ["errand", "task"] },
        { id: "ja-u39l4-betsu", type: "vocab", front: "べつ", reading: "betsu", meaning: "separate", example: { jp: "べつのものです。", en: "It's a different one." }, accept: ["another", "different"] },
      ],
    },
  ],
};
