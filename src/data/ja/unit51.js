// Unit 51 — ようす・せいしつ ("Qualities & abstract adjectives") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// The N3 abstract-adjective layer beyond A1/A2's concrete adjectives — describing the
// nature of ideas, situations, and people (complex, special, plain, flashy). Mostly
// な-adjectives; examples stay in A1+A2 grammar. Naturalness queued for native review.
export const UNIT51 = {
  id: "ja-u51", lang: "ja", title: "ようす・せいしつ", order: 51, stage: "b1",
  lessons: [
    {
      id: "ja-u51l1", unit: 51, lesson: 1, title: "Describing things", cefr: "B1", dominantMode: "recall",
      canDo: "Describe the nature of things: ふくざつ かんたん とくべつ じゅうよう ふつう むだ.",
      items: [
        { id: "ja-u51l1-fukuzatsu", type: "vocab", front: "ふくざつ", reading: "fukuzatsu", meaning: "complicated", example: { jp: "これはふくざつなもんだいです。", en: "This is a complicated problem." }, accept: ["complex", "intricate"], hint: "な-adjective: ふくざつな mondai. Opposite of かんたん." },
        { id: "ja-u51l1-kantan", type: "vocab", front: "かんたん", reading: "kantan", meaning: "simple", example: { jp: "かんたんなもんだいです。", en: "It's a simple problem." }, accept: ["easy", "straightforward"] },
        { id: "ja-u51l1-tokubetsu", type: "vocab", front: "とくべつ", reading: "tokubetsu", meaning: "special", example: { jp: "とくべつなりゆうがあります。", en: "There's a special reason." }, accept: ["particular", "exceptional"] },
        { id: "ja-u51l1-juyo", type: "vocab", front: "じゅうよう", reading: "jūyō", meaning: "important", example: { jp: "じゅうようなかいぎです。", en: "It's an important meeting." }, accept: ["crucial", "significant"], hint: "じゅうよう (formal 'important') vs たいせつ (dear/precious 'important')." },
        { id: "ja-u51l1-futsu", type: "vocab", front: "ふつう", reading: "futsū", meaning: "ordinary", example: { jp: "これはふつうのねだんです。", en: "This is an ordinary price." }, accept: ["normal", "usual"] },
        { id: "ja-u51l1-muda", type: "vocab", front: "むだ", reading: "muda", meaning: "pointless", example: { jp: "むだなおかねをつかいません。", en: "I don't spend money pointlessly." }, accept: ["wasteful", "useless"], hint: "な-adjective/noun: むだな = pointless; むだに = wastefully." },
      ],
    },
    {
      id: "ja-u51l2", unit: 51, lesson: 2, title: "Qualities & impressions", cefr: "B1", dominantMode: "recall",
      canDo: "Describe qualities: せいかく じみ はで ゆたか しんけん かんぺき.",
      items: [
        { id: "ja-u51l2-seikaku", type: "vocab", front: "せいかく", reading: "seikaku", meaning: "personality", example: { jp: "じぶんのせいかくをはなします。", en: "I talk about my own personality." }, accept: ["character", "temperament"], hint: "せいかく = personality (性格); a homophone せいかく also means 'accurate' (正確) — context tells them apart." },
        { id: "ja-u51l2-jimi", type: "vocab", front: "じみ", reading: "jimi", meaning: "plain", example: { jp: "じみなふくがすきです。", en: "I like plain clothes." }, accept: ["subdued", "sober"], hint: "じみ ⇄ はで are opposites: plain vs flashy." },
        { id: "ja-u51l2-hade", type: "vocab", front: "はで", reading: "hade", meaning: "flashy", example: { jp: "はでないろですね。", en: "That's a flashy color." }, accept: ["showy", "loud"] },
        { id: "ja-u51l2-yutaka", type: "vocab", front: "ゆたか", reading: "yutaka", meaning: "abundant", example: { jp: "ゆたかなせいかつです。", en: "It's an abundant life." }, accept: ["rich", "plentiful"] },
        { id: "ja-u51l2-shinken", type: "vocab", front: "しんけん", reading: "shinken", meaning: "serious", example: { jp: "しんけんなかおです。", en: "It's a serious face." }, accept: ["earnest", "in earnest"] },
        { id: "ja-u51l2-kanpeki", type: "vocab", front: "かんぺき", reading: "kanpeki", meaning: "perfect", example: { jp: "かれのしごとはかんぺきです。", en: "His work is perfect." }, accept: ["flawless", "complete"] },
      ],
    },
  ],
};
