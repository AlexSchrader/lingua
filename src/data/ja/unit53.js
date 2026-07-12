// Unit 53 — りょう・ていど ("Quantity & degree") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// The N3 layer for amounts, parts, and measuring change — the abstract quantity nouns
// and verbs a B1 learner needs to reason about how much/how many. Examples stay in A1+A2
// grammar and reuse A1/A2 vocab where possible. Naturalness queued for native review.
export const UNIT53 = {
  id: "ja-u53", lang: "ja", title: "りょう・ていど", order: 53, stage: "b1",
  lessons: [
    {
      id: "ja-u53l1", unit: 53, lesson: 1, title: "Amounts & parts", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about amounts and parts: りょう ぶぶん ぜんたい いちぶ のこり ごうけい.",
      items: [
        { id: "ja-u53l1-ryo", type: "vocab", front: "りょう", reading: "ryō", meaning: "quantity", example: { jp: "りょうがおおいです。", en: "The quantity is large." }, accept: ["amount", "volume"] },
        { id: "ja-u53l1-bubun", type: "vocab", front: "ぶぶん", reading: "bubun", meaning: "part", example: { jp: "このぶぶんがむずかしいです。", en: "This part is difficult." }, accept: ["section", "portion"] },
        { id: "ja-u53l1-zentai", type: "vocab", front: "ぜんたい", reading: "zentai", meaning: "the whole", example: { jp: "ぜんたいをみます。", en: "I look at the whole thing." }, accept: ["overall", "entirety"], hint: "ぜんたい (the whole) vs ぜんぶ (all of them, every one)." },
        { id: "ja-u53l1-ichibu", type: "vocab", front: "いちぶ", reading: "ichibu", meaning: "a portion", example: { jp: "いちぶのひとだけです。", en: "It's only a portion of people." }, accept: ["part", "some"] },
        { id: "ja-u53l1-nokori", type: "vocab", front: "のこり", reading: "nokori", meaning: "the rest", example: { jp: "のこりはあしたします。", en: "I'll do the rest tomorrow." }, accept: ["remainder", "what's left"] },
        { id: "ja-u53l1-gokei", type: "vocab", front: "ごうけい", reading: "gōkei", meaning: "total", example: { jp: "ごうけいはいくらですか。", en: "How much is the total?" }, accept: ["sum", "grand total"] },
      ],
    },
    {
      id: "ja-u53l2", unit: 53, lesson: 2, title: "More & less", cefr: "B1", dominantMode: "recall",
      canDo: "Measure and compare amounts: ふえます へります たります へいきん さいこう さいてい.",
      items: [
        { id: "ja-u53l2-fuemasu", type: "vocab", front: "ふえます", reading: "fuemasu", meaning: "increase", example: { jp: "ひとがふえました。", en: "The number of people increased." }, accept: ["grow in number", "rise"] },
        { id: "ja-u53l2-herimasu", type: "vocab", front: "へります", reading: "herimasu", meaning: "decrease", example: { jp: "おかねがへりました。", en: "My money decreased." }, accept: ["reduce", "go down"] },
        { id: "ja-u53l2-tarimasu", type: "vocab", front: "たります", reading: "tarimasu", meaning: "be enough", example: { jp: "じかんがたりません。", en: "There isn't enough time." }, accept: ["suffice", "be sufficient"] },
        { id: "ja-u53l2-heikin", type: "vocab", front: "へいきん", reading: "heikin", meaning: "average", example: { jp: "へいきんのてんです。", en: "It's an average score." }, accept: ["mean", "on average"] },
        { id: "ja-u53l2-saiko", type: "vocab", front: "さいこう", reading: "saikō", meaning: "maximum", example: { jp: "きょうはさいこうのひです。", en: "Today is the best day." }, accept: ["the best", "highest"], hint: "さいこう ⇄ さいてい: best/highest vs worst/lowest." },
        { id: "ja-u53l2-saitei", type: "vocab", front: "さいてい", reading: "saitei", meaning: "minimum", example: { jp: "さいていのてんでした。", en: "It was the worst score." }, accept: ["the worst", "lowest"] },
      ],
    },
  ],
};
