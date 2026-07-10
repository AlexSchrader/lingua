// Unit 23 — きもち・ようす ("Feelings & qualities") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// ─────────────────────────────────────────────────────────────────────────────
// NOT registered in index.js — not seeded, not on the Ladder, does not touch A1.
// Activate (add UNIT23 to UNITS in index.js) only once A1 is native-reviewed.
// ─────────────────────────────────────────────────────────────────────────────
// N4 adjectives — the most useful vocab class after verbs, and fully model-honest:
// they're taught as dictionary-form vocab (the い/な conjugation was covered in A1
// U21). Grouped emotions → character → physical qualities → judgments. Every example
// uses only A1 vocab + A1 grammar (です / な / basic particles) — no conjugation.
// NOTE: naturalness-critical — flagged for the batch native review when A2 goes live.
export const UNIT23 = {
  id: "ja-u23",
  lang: "ja",
  title: "きもち・ようす",
  order: 23,
  stage: "a2",
  lessons: [
    // Lesson 1: emotions (い-adjectives)
    {
      id: "ja-u23l1",
      unit: 23,
      lesson: 1,
      title: "How you feel",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how you feel: うれしい かなしい さびしい こわい ねむい うるさい.",
      items: [
        { id: "ja-u23l1-ureshii", type: "vocab", front: "うれしい", reading: "ureshii", meaning: "happy", example: { jp: "とてもうれしいです。", en: "I'm very happy." }, accept: ["glad", "delighted"] },
        { id: "ja-u23l1-kanashii", type: "vocab", front: "かなしい", reading: "kanashii", meaning: "sad", example: { jp: "えいががかなしいです。", en: "The movie is sad." }, accept: ["sorrowful", "unhappy"] },
        { id: "ja-u23l1-sabishii", type: "vocab", front: "さびしい", reading: "sabishii", meaning: "lonely", example: { jp: "ひとりでさびしいです。", en: "I'm lonely on my own." }, accept: ["lonesome", "sad (alone)"] },
        { id: "ja-u23l1-kowai", type: "vocab", front: "こわい", reading: "kowai", meaning: "scary", example: { jp: "いぬがこわいです。", en: "Dogs are scary to me." }, accept: ["frightening", "afraid of"] },
        { id: "ja-u23l1-nemui", type: "vocab", front: "ねむい", reading: "nemui", meaning: "sleepy", example: { jp: "あさはねむいです。", en: "I'm sleepy in the morning." }, accept: ["drowsy"] },
        { id: "ja-u23l1-urusai", type: "vocab", front: "うるさい", reading: "urusai", meaning: "noisy", example: { jp: "まちがうるさいです。", en: "The town is noisy." }, accept: ["loud", "annoying"] },
      ],
    },
    // Lesson 2: character (な-adjectives)
    {
      id: "ja-u23l2",
      unit: 23,
      lesson: 2,
      title: "What someone's like",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe character with な-adjectives: しんせつ まじめ ゆうめい にぎやか ていねい へん.",
      items: [
        { id: "ja-u23l2-shinsetsu", type: "vocab", front: "しんせつ", reading: "shinsetsu", meaning: "kind", example: { jp: "せんせいはしんせつです。", en: "The teacher is kind." }, accept: ["nice", "helpful"] },
        { id: "ja-u23l2-majime", type: "vocab", front: "まじめ", reading: "majime", meaning: "serious", example: { jp: "かれはまじめです。", en: "He is serious." }, accept: ["diligent", "earnest", "hardworking"] },
        { id: "ja-u23l2-yumei", type: "vocab", front: "ゆうめい", reading: "yūmei", meaning: "famous", example: { jp: "ゆうめいなみせです。", en: "It's a famous shop." }, accept: ["well-known"] },
        { id: "ja-u23l2-nigiyaka", type: "vocab", front: "にぎやか", reading: "nigiyaka", meaning: "lively", example: { jp: "まちはにぎやかです。", en: "The town is lively." }, accept: ["bustling", "busy (lively)"] },
        { id: "ja-u23l2-teinei", type: "vocab", front: "ていねい", reading: "teinei", meaning: "polite", example: { jp: "かのじょはていねいです。", en: "She is polite." }, accept: ["courteous", "careful"] },
        { id: "ja-u23l2-hen", type: "vocab", front: "へん", reading: "hen", meaning: "strange", example: { jp: "へんなあじです。", en: "It's a strange taste." }, accept: ["weird", "odd"] },
      ],
    },
    // Lesson 3: physical qualities (い-adjectives)
    {
      id: "ja-u23l3",
      unit: 23,
      lesson: 3,
      title: "What things are like",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe things: つよい よわい かたい やわらかい おもい かるい.",
      items: [
        { id: "ja-u23l3-tsuyoi", type: "vocab", front: "つよい", reading: "tsuyoi", meaning: "strong", example: { jp: "かぜがつよいです。", en: "The wind is strong." }, accept: ["powerful"] },
        { id: "ja-u23l3-yowai", type: "vocab", front: "よわい", reading: "yowai", meaning: "weak", example: { jp: "からだがよわいです。", en: "My body is weak." }, accept: ["frail", "feeble"] },
        { id: "ja-u23l3-katai", type: "vocab", front: "かたい", reading: "katai", meaning: "hard", example: { jp: "このパンはかたいです。", en: "This bread is hard." }, accept: ["stiff", "tough", "firm"] },
        { id: "ja-u23l3-yawarakai", type: "vocab", front: "やわらかい", reading: "yawarakai", meaning: "soft", example: { jp: "やわらかいベッドです。", en: "It's a soft bed." }, accept: ["tender", "gentle"] },
        { id: "ja-u23l3-omoi", type: "vocab", front: "おもい", reading: "omoi", meaning: "heavy", example: { jp: "かばんがおもいです。", en: "The bag is heavy." }, accept: ["weighty"] },
        { id: "ja-u23l3-karui", type: "vocab", front: "かるい", reading: "karui", meaning: "light", example: { jp: "このかさはかるいです。", en: "This umbrella is light." }, accept: ["light (weight)"] },
      ],
    },
    // Lesson 4: judgments (mixed)
    {
      id: "ja-u23l4",
      unit: 23,
      lesson: 4,
      title: "Good or bad?",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Judge things: べんり ふべん あんぜん あぶない たいせつ だいじょうぶ.",
      items: [
        { id: "ja-u23l4-benri", type: "vocab", front: "べんり", reading: "benri", meaning: "convenient", example: { jp: "コンビニはべんりです。", en: "Convenience stores are handy." }, accept: ["handy", "useful"] },
        { id: "ja-u23l4-fuben", type: "vocab", front: "ふべん", reading: "fuben", meaning: "inconvenient", example: { jp: "このまちはふべんです。", en: "This town is inconvenient." }, accept: ["not handy"] },
        { id: "ja-u23l4-anzen", type: "vocab", front: "あんぜん", reading: "anzen", meaning: "safe", example: { jp: "にほんはあんぜんです。", en: "Japan is safe." }, accept: ["secure", "safety"] },
        { id: "ja-u23l4-abunai", type: "vocab", front: "あぶない", reading: "abunai", meaning: "dangerous", example: { jp: "よるはあぶないです。", en: "It's dangerous at night." }, accept: ["risky", "watch out"] },
        { id: "ja-u23l4-taisetsu", type: "vocab", front: "たいせつ", reading: "taisetsu", meaning: "important", example: { jp: "かぞくはたいせつです。", en: "Family is important." }, accept: ["precious", "valuable"] },
        { id: "ja-u23l4-daijobu", type: "vocab", front: "だいじょうぶ", reading: "daijōbu", meaning: "okay", example: { jp: "わたしはだいじょうぶです。", en: "I'm okay." }, accept: ["all right", "fine", "no problem"] },
      ],
    },
  ],
};
