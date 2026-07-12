// Unit 59 — けいざい・おかね ("Economy & money") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// The N3 layer for money and the economy — trade, spending, and saving, the abstract
// financial nouns beyond A1/A2's おかね/ねだん. Examples stay in A1+A2 grammar and reuse
// A1/A2 vocab where possible. Naturalness queued for native review.
export const UNIT59 = {
  id: "ja-u59", lang: "ja", title: "けいざい・おかね", order: 59, stage: "b1",
  lessons: [
    {
      id: "ja-u59l1", unit: 59, lesson: 1, title: "The economy", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about the economy: けいざい ぼうえき ゆしゅつ ゆにゅう しょうひ とうし.",
      items: [
        { id: "ja-u59l1-keizai", type: "vocab", front: "けいざい", reading: "keizai", meaning: "economy", example: { jp: "にほんのけいざいです。", en: "It's Japan's economy." }, accept: ["economics"] },
        { id: "ja-u59l1-boeki", type: "vocab", front: "ぼうえき", reading: "bōeki", meaning: "trade", example: { jp: "ぼうえきのしごとです。", en: "It's a trade job." }, accept: ["commerce"] },
        { id: "ja-u59l1-yushutsu", type: "vocab", front: "ゆしゅつ", reading: "yushutsu", meaning: "export", example: { jp: "くるまをゆしゅつします。", en: "We export cars." }, accept: ["exporting"], hint: "ゆしゅつ (send out) ⇄ ゆにゅう (bring in): export vs import." },
        { id: "ja-u59l1-yunyu", type: "vocab", front: "ゆにゅう", reading: "yunyū", meaning: "import", example: { jp: "くだものをゆにゅうします。", en: "We import fruit." }, accept: ["importing"] },
        { id: "ja-u59l1-shohi", type: "vocab", front: "しょうひ", reading: "shōhi", meaning: "consumption", example: { jp: "しょうひがふえました。", en: "Consumption increased." }, accept: ["spending"] },
        { id: "ja-u59l1-toshi", type: "vocab", front: "とうし", reading: "tōshi", meaning: "investment", example: { jp: "あたらしいみせにとうしします。", en: "I invest in a new shop." }, accept: ["investing"] },
      ],
    },
    {
      id: "ja-u59l2", unit: 59, lesson: 2, title: "Money & spending", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about personal finances: ちょきん しゃっきん しゅうにゅう ひよう かかく よさん.",
      items: [
        { id: "ja-u59l2-chokin", type: "vocab", front: "ちょきん", reading: "chokin", meaning: "savings", example: { jp: "すこしちょきんします。", en: "I save a little money." }, accept: ["saving up"] },
        { id: "ja-u59l2-shakkin", type: "vocab", front: "しゃっきん", reading: "shakkin", meaning: "debt", example: { jp: "しゃっきんがあります。", en: "I have debt." }, accept: ["loan", "what I owe"] },
        { id: "ja-u59l2-shunyu", type: "vocab", front: "しゅうにゅう", reading: "shūnyū", meaning: "income", example: { jp: "しゅうにゅうがふえました。", en: "My income increased." }, accept: ["earnings", "revenue"] },
        { id: "ja-u59l2-hiyo", type: "vocab", front: "ひよう", reading: "hiyō", meaning: "expense", example: { jp: "ひようをはらいます。", en: "I pay the expense." }, accept: ["cost", "expenses"] },
        { id: "ja-u59l2-kakaku", type: "vocab", front: "かかく", reading: "kakaku", meaning: "price", example: { jp: "かかくをしらべます。", en: "I check the price." }, accept: ["cost", "the going rate"], hint: "かかく (formal 'price', e.g. in ads) vs ねだん (everyday 'price')." },
        { id: "ja-u59l2-yosan", type: "vocab", front: "よさん", reading: "yosan", meaning: "budget", example: { jp: "よさんがたりません。", en: "The budget isn't enough." }, accept: ["allowance"] },
      ],
    },
  ],
};
