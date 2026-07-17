// Unit 80 — けいようし・N4 ("N4 adjectives") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// NOT registered in index.js — not seeded, not on the Ladder, does not touch A1.
// Activate (add UNIT80 to UNITS in index.js) only once A1 is native-reviewed.
// ─────────────────────────────────────────────────────────────────────────────
// A second N4 adjective set (U23 covered feelings/qualities). Taught as
// dictionary-form vocab — the い/な conjugation was covered in A1 U21. Grouped:
// describing things (い) → impressions (い) → judgments (な) → need & ability (な).
// Every example uses only earlier vocab + A1 grammar (です / な / basic particles) —
// no conjugation. NOTE: naturalness-critical — flagged for the batch native review.
export const UNIT80 = {
  id: "ja-u80",
  lang: "ja",
  title: "けいようし・N4",
  order: 80,
  stage: "a2",
  lessons: [
    // Lesson 1: describing things (い-adjectives)
    {
      id: "ja-u80l1",
      unit: 80,
      lesson: 1,
      title: "Describing things",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe things precisely: ふかい あさい こまかい めずらしい ただしい くわしい.",
      items: [
        { id: "ja-u80l1-fukai", type: "vocab", front: "ふかい", reading: "fukai", meaning: "deep", example: { jp: "このいけはふかいです。", en: "This pond is deep." }, accept: ["profound"] },
        { id: "ja-u80l1-asai", type: "vocab", front: "あさい", reading: "asai", meaning: "shallow", example: { jp: "かわがあさいです。", en: "The river is shallow." }, accept: ["not deep"] },
        { id: "ja-u80l1-komakai", type: "vocab", front: "こまかい", reading: "komakai", meaning: "fine", example: { jp: "こまかいおかねがほしいです。", en: "I want small change." }, accept: ["detailed", "small", "fine (small)"] },
        { id: "ja-u80l1-mezurashii", type: "vocab", front: "めずらしい", reading: "mezurashii", meaning: "rare", example: { jp: "めずらしいとりです。", en: "It's a rare bird." }, accept: ["unusual", "uncommon"] },
        { id: "ja-u80l1-tadashii", type: "vocab", front: "ただしい", reading: "tadashii", meaning: "correct", example: { jp: "ただしいこたえです。", en: "It's the correct answer." }, accept: ["right", "proper"] },
        { id: "ja-u80l1-kuwashii", type: "vocab", front: "くわしい", reading: "kuwashii", meaning: "detailed", example: { jp: "かれはでんしゃにくわしいです。", en: "He knows a lot about trains." }, accept: ["well-informed", "knowledgeable"] },
      ],
    },
    // Lesson 2: impressions (い-adjectives)
    {
      id: "ja-u80l2",
      unit: 80,
      lesson: 2,
      title: "How it strikes you",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Give impressions: うつくしい すばらしい おかしい うまい もったいない したしい.",
      items: [
        { id: "ja-u80l2-utsukushii", type: "vocab", front: "うつくしい", reading: "utsukushii", meaning: "beautiful", example: { jp: "うつくしいうみです。", en: "It's a beautiful sea." }, accept: ["lovely"] },
        { id: "ja-u80l2-subarashii", type: "vocab", front: "すばらしい", reading: "subarashii", meaning: "wonderful", example: { jp: "すばらしいけしきです。", en: "It's a wonderful view." }, accept: ["great", "splendid", "marvelous"] },
        { id: "ja-u80l2-okashii", type: "vocab", front: "おかしい", reading: "okashii", meaning: "funny", example: { jp: "このはなしはおかしいです。", en: "This story is funny." }, accept: ["strange", "odd", "amusing"] },
        { id: "ja-u80l2-umai", type: "vocab", front: "うまい", reading: "umai", meaning: "good (at)", example: { jp: "かれはりょうりがうまいです。", en: "He is good at cooking." }, accept: ["skillful", "tasty", "delicious"] },
        { id: "ja-u80l2-mottainai", type: "vocab", front: "もったいない", reading: "mottainai", meaning: "wasteful", example: { jp: "すてるのはもったいないです。", en: "It's a waste to throw it away." }, accept: ["too good to waste", "what a waste"] },
        { id: "ja-u80l2-shitashii", type: "vocab", front: "したしい", reading: "shitashii", meaning: "close", example: { jp: "したしいともだちです。", en: "It's a close friend." }, accept: ["intimate", "friendly"] },
      ],
    },
    // Lesson 3: judgments (な-adjectives)
    {
      id: "ja-u80l3",
      unit: 80,
      lesson: 3,
      title: "Making judgments",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Judge things with な-adjectives: ふくざつ かんぺき りっぱ てきとう じゅうよう とくべつ.",
      items: [
        { id: "ja-u80l3-fukuzatsu", type: "vocab", front: "ふくざつ", reading: "fukuzatsu", meaning: "complex", example: { jp: "ふくざつなもんだいです。", en: "It's a complex problem." }, accept: ["complicated"] },
        { id: "ja-u80l3-kanpeki", type: "vocab", front: "かんぺき", reading: "kanpeki", meaning: "perfect", example: { jp: "かのじょはかんぺきです。", en: "She is perfect." }, accept: ["flawless"] },
        { id: "ja-u80l3-rippa", type: "vocab", front: "りっぱ", reading: "rippa", meaning: "splendid", example: { jp: "りっぱないえです。", en: "It's a splendid house." }, accept: ["fine", "grand", "impressive"] },
        { id: "ja-u80l3-tekito", type: "vocab", front: "てきとう", reading: "tekitō", meaning: "suitable", example: { jp: "てきとうなへやをさがします。", en: "I'll look for a suitable room." }, accept: ["appropriate", "proper"] },
        { id: "ja-u80l3-juyo", type: "vocab", front: "じゅうよう", reading: "jūyō", meaning: "important", example: { jp: "じゅうようなかいぎです。", en: "It's an important meeting." }, accept: ["crucial", "significant"] },
        { id: "ja-u80l3-tokubetsu", type: "vocab", front: "とくべつ", reading: "tokubetsu", meaning: "special", example: { jp: "きょうはとくべつなひです。", en: "Today is a special day." }, accept: ["particular"] },
      ],
    },
    // Lesson 4: need & ability (な-adjectives)
    {
      id: "ja-u80l4",
      unit: 80,
      lesson: 4,
      title: "Need and ability",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about need and ability: ひつよう かのう むだ とくい にがて すてき.",
      items: [
        { id: "ja-u80l4-hitsuyo", type: "vocab", front: "ひつよう", reading: "hitsuyō", meaning: "necessary", example: { jp: "パスポートがひつようです。", en: "A passport is necessary." }, accept: ["needed", "required"] },
        { id: "ja-u80l4-kano", type: "vocab", front: "かのう", reading: "kanō", meaning: "possible", example: { jp: "よやくはかのうです。", en: "A reservation is possible." }, accept: ["feasible", "can be done"] },
        { id: "ja-u80l4-muda", type: "vocab", front: "むだ", reading: "muda", meaning: "wasteful", example: { jp: "じかんのむだです。", en: "It's a waste of time." }, accept: ["useless", "pointless", "waste"] },
        { id: "ja-u80l4-tokui", type: "vocab", front: "とくい", reading: "tokui", meaning: "good at", example: { jp: "すうがくがとくいです。", en: "I'm good at math." }, accept: ["skilled at", "strong point"] },
        { id: "ja-u80l4-nigate", type: "vocab", front: "にがて", reading: "nigate", meaning: "poor at", example: { jp: "うんどうがにがてです。", en: "I'm poor at exercise." }, accept: ["bad at", "weak point", "not good at"] },
        { id: "ja-u80l4-suteki", type: "vocab", front: "すてき", reading: "suteki", meaning: "lovely", example: { jp: "すてきなふくですね。", en: "What lovely clothes." }, accept: ["nice", "wonderful", "cool"] },
      ],
    },
  ],
};
