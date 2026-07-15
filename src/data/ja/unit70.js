// Unit 70 — かんじょう・こころ ("Emotions & the mind") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 emotions & psychology vocab (feelings/mind nouns + emotional adjectives) not
// yet taught elsewhere. Modeled on the A1/A2 vocab units. Examples use only
// previously-introduced vocab + basic grammar so the unit slots on top cleanly.
// NOTE: naturalness-critical — flagged for the batch native review when it goes live.
export const UNIT70 = {
  id: "ja-u70",
  lang: "ja",
  title: "かんじょう・こころ",
  order: 70,
  stage: "a2",
  lessons: [
    // Lesson 1: feelings & emotions
    {
      id: "ja-u70l1",
      unit: 70,
      lesson: 1,
      title: "Feelings",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name what you feel: かんじょう きもち なみだ こうふん かんどう しあわせ.",
      items: [
        { id: "ja-u70l1-kanjo", type: "vocab", front: "かんじょう", reading: "kanjō", meaning: "emotion", example: { jp: "かんじょうがかおにでます。", en: "My emotions show on my face." }, accept: ["feeling", "emotions"] },
        { id: "ja-u70l1-kimochi", type: "vocab", front: "きもち", reading: "kimochi", meaning: "feeling", example: { jp: "とてもいいきもちです。", en: "It feels really good." }, accept: ["mood", "feelings"] },
        { id: "ja-u70l1-namida", type: "vocab", front: "なみだ", reading: "namida", meaning: "tears", example: { jp: "なみだがでます。", en: "Tears come out." }, accept: ["a tear", "tear"] },
        { id: "ja-u70l1-kofun", type: "vocab", front: "こうふん", reading: "kōfun", meaning: "excitement", example: { jp: "しあいでこうふんしました。", en: "I got excited at the game." }, accept: ["getting excited", "excited"] },
        { id: "ja-u70l1-kando", type: "vocab", front: "かんどう", reading: "kandō", meaning: "being moved", example: { jp: "えいがにかんどうしました。", en: "I was moved by the movie." }, accept: ["being deeply moved", "being touched"] },
        { id: "ja-u70l1-shiawase", type: "vocab", front: "しあわせ", reading: "shiawase", meaning: "happiness", example: { jp: "いま、とてもしあわせです。", en: "Right now I am very happy." }, accept: ["happy", "good fortune"] },
      ],
    },
    // Lesson 2: hopes & the heart
    {
      id: "ja-u70l2",
      unit: 70,
      lesson: 2,
      title: "Hopes & the heart",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about hopes and interest: きぼう きたい こうかい きょうみ あいじょう こころ.",
      items: [
        { id: "ja-u70l2-kibo", type: "vocab", front: "きぼう", reading: "kibō", meaning: "hope", example: { jp: "まだきぼうがあります。", en: "There is still hope." }, accept: ["wish", "aspiration"] },
        { id: "ja-u70l2-kitai", type: "vocab", front: "きたい", reading: "kitai", meaning: "expectation", example: { jp: "こどもにきたいします。", en: "I have high hopes for the child." }, accept: ["hope", "anticipation"] },
        { id: "ja-u70l2-kokai", type: "vocab", front: "こうかい", reading: "kōkai", meaning: "regret", example: { jp: "あとでこうかいします。", en: "I will regret it later." }, accept: ["regretting", "remorse"] },
        { id: "ja-u70l2-kyomi", type: "vocab", front: "きょうみ", reading: "kyōmi", meaning: "interest", example: { jp: "にほんにきょうみがあります。", en: "I am interested in Japan." }, accept: ["curiosity", "interested"] },
        { id: "ja-u70l2-aijo", type: "vocab", front: "あいじょう", reading: "aijō", meaning: "affection", example: { jp: "こどもにあいじょうがあります。", en: "I have affection for the child." }, accept: ["love", "tenderness"] },
        { id: "ja-u70l2-kokoro", type: "vocab", front: "こころ", reading: "kokoro", meaning: "heart", example: { jp: "こころがあたたかいです。", en: "He is warm-hearted." }, accept: ["mind", "spirit"] },
      ],
    },
    // Lesson 3: impressions & character
    {
      id: "ja-u70l3",
      unit: 70,
      lesson: 3,
      title: "Impressions & character",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe impressions and traits: いんしょう せいかく たいど むちゅう ふまん かんしん.",
      items: [
        { id: "ja-u70l3-insho", type: "vocab", front: "いんしょう", reading: "inshō", meaning: "impression", example: { jp: "かれのいんしょうはいいです。", en: "My impression of him is good." }, accept: ["impressions", "image"] },
        { id: "ja-u70l3-seikaku", type: "vocab", front: "せいかく", reading: "seikaku", meaning: "personality", example: { jp: "あかるいせいかくです。", en: "She has a cheerful personality." }, accept: ["character", "nature"] },
        { id: "ja-u70l3-taido", type: "vocab", front: "たいど", reading: "taido", meaning: "attitude", example: { jp: "たいどがわるいです。", en: "His attitude is bad." }, accept: ["manner", "behavior"] },
        { id: "ja-u70l3-muchu", type: "vocab", front: "むちゅう", reading: "muchū", meaning: "absorbed", example: { jp: "ゲームにむちゅうです。", en: "I am crazy about games." }, accept: ["crazy about", "engrossed"] },
        { id: "ja-u70l3-fuman", type: "vocab", front: "ふまん", reading: "fuman", meaning: "dissatisfaction", example: { jp: "しごとにふまんがあります。", en: "I have complaints about my job." }, accept: ["discontent", "complaint"] },
        { id: "ja-u70l3-kanshin", type: "vocab", front: "かんしん", reading: "kanshin", meaning: "admiration", example: { jp: "せいとにかんしんしました。", en: "I was impressed by the student." }, accept: ["being impressed", "to admire"] },
      ],
    },
    // Lesson 4: emotional adjectives
    {
      id: "ja-u70l4",
      unit: 70,
      lesson: 4,
      title: "How it feels",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe emotional states: なつかしい うらやましい つらい くるしい ふしぎ ゆかい.",
      items: [
        { id: "ja-u70l4-natsukashii", type: "vocab", front: "なつかしい", reading: "natsukashii", meaning: "nostalgic", example: { jp: "むかしがなつかしいです。", en: "I miss the old days." }, accept: ["dear", "missed"] },
        { id: "ja-u70l4-urayamashii", type: "vocab", front: "うらやましい", reading: "urayamashii", meaning: "envious", example: { jp: "ともだちがうらやましいです。", en: "I envy my friend." }, accept: ["jealous", "enviable"] },
        { id: "ja-u70l4-tsurai", type: "vocab", front: "つらい", reading: "tsurai", meaning: "painful", example: { jp: "しごとがつらいです。", en: "Work is hard on me." }, accept: ["hard", "tough"] },
        { id: "ja-u70l4-kurushii", type: "vocab", front: "くるしい", reading: "kurushii", meaning: "distressing", example: { jp: "むねがくるしいです。", en: "My chest feels tight." }, accept: ["painful", "suffering"] },
        { id: "ja-u70l4-fushigi", type: "vocab", front: "ふしぎ", reading: "fushigi", meaning: "mysterious", example: { jp: "ふしぎなゆめをみました。", en: "I had a strange dream." }, accept: ["strange", "wonder"] },
        { id: "ja-u70l4-yukai", type: "vocab", front: "ゆかい", reading: "yukai", meaning: "cheerful", example: { jp: "ゆかいなともだちです。", en: "He is a fun friend." }, accept: ["pleasant", "fun"] },
      ],
    },
  ],
};
