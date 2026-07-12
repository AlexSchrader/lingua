// Unit 45 — かんがえ・いけん ("Thoughts & opinions") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// First B1 vocab unit: the abstract "opinion / reasoning" layer N3 needs to discuss
// ideas. Examples stay inside A1+A2 grammar and vocab. Naturalness queued for native review.
export const UNIT45 = {
  id: "ja-u45", lang: "ja", title: "かんがえ・いけん", order: 45, stage: "b1",
  lessons: [
    {
      id: "ja-u45l1", unit: 45, lesson: 1, title: "Opinions", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about opinions and reasons: いけん りゆう かんがえ りかい さんせい はんたい.",
      items: [
        { id: "ja-u45l1-iken", type: "vocab", front: "いけん", reading: "iken", meaning: "opinion", example: { jp: "わたしのいけんはちがいます。", en: "My opinion is different." }, accept: ["view"] },
        { id: "ja-u45l1-riyu", type: "vocab", front: "りゆう", reading: "riyū", meaning: "reason", example: { jp: "そのりゆうをせつめいします。", en: "I'll explain the reason." }, accept: ["cause"] },
        { id: "ja-u45l1-kangae", type: "vocab", front: "かんがえ", reading: "kangae", meaning: "thought", example: { jp: "たいせつなかんがえです。", en: "It's an important thought." }, accept: ["idea"] },
        { id: "ja-u45l1-rikai", type: "vocab", front: "りかい", reading: "rikai", meaning: "understanding", example: { jp: "りかいがむずかしいです。", en: "It's hard to understand." }, accept: ["comprehension"] },
        { id: "ja-u45l1-sansei", type: "vocab", front: "さんせい", reading: "sansei", meaning: "agreement", example: { jp: "そのいけんにさんせいです。", en: "I agree with that opinion." }, accept: ["approval"], hint: "さんせいする = to agree; the thing agreed with takes に." },
        { id: "ja-u45l1-hantai", type: "vocab", front: "はんたい", reading: "hantai", meaning: "opposition", example: { jp: "わたしははんたいです。", en: "I'm against it." }, accept: ["objection", "opposite"] },
      ],
    },
    {
      id: "ja-u45l2", unit: 45, lesson: 2, title: "Problems & answers", cefr: "B1", dominantMode: "recall",
      canDo: "Discuss problems and outcomes: もんだい こたえ ほうほう もくてき けっか ないよう.",
      items: [
        { id: "ja-u45l2-mondai", type: "vocab", front: "もんだい", reading: "mondai", meaning: "problem", example: { jp: "これはおおきいもんだいです。", en: "This is a big problem." }, accept: ["issue", "question"] },
        { id: "ja-u45l2-kotae", type: "vocab", front: "こたえ", reading: "kotae", meaning: "answer", example: { jp: "こたえがわかりません。", en: "I don't know the answer." }, accept: ["response", "solution"] },
        { id: "ja-u45l2-hoho", type: "vocab", front: "ほうほう", reading: "hōhō", meaning: "method", example: { jp: "そのほうほうをおしえてください。", en: "Please teach me that method." }, accept: ["way", "means"] },
        { id: "ja-u45l2-mokuteki", type: "vocab", front: "もくてき", reading: "mokuteki", meaning: "purpose", example: { jp: "りょこうのもくてきはなんですか。", en: "What's the purpose of the trip?" }, accept: ["goal", "aim"] },
        { id: "ja-u45l2-kekka", type: "vocab", front: "けっか", reading: "kekka", meaning: "result", example: { jp: "しけんのけっかをしらべます。", en: "I'll check the exam result." }, accept: ["outcome"] },
        { id: "ja-u45l2-naiyo", type: "vocab", front: "ないよう", reading: "naiyō", meaning: "content", example: { jp: "ほんのないようはむずかしいです。", en: "The book's content is difficult." }, accept: ["substance", "details"] },
      ],
    },
  ],
};
