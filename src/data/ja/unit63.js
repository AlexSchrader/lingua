// Unit 63 — どうし① ("N3 verbs I — thinking & handling") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// N3 action verbs (taught as ～ます-form vocab, the corpus convention). This unit covers
// verbs of thinking/judging and handling things. Examples stay in A1+A2 grammar and reuse
// A1/A2 vocab where possible. Naturalness queued for native review.
export const UNIT63 = {
  id: "ja-u63", lang: "ja", title: "どうし①", order: 63, stage: "b1",
  lessons: [
    {
      id: "ja-u63l1", unit: 63, lesson: 1, title: "Thinking & judging", cefr: "B1", dominantMode: "recall",
      canDo: "Verbs of thought: くらべます かんじます しんじます きめます もとめます ためします.",
      items: [
        { id: "ja-u63l1-kurabemasu", type: "vocab", front: "くらべます", reading: "kurabemasu", meaning: "compare", example: { jp: "ねだんをくらべます。", en: "I compare prices." }, accept: ["contrast"] },
        { id: "ja-u63l1-kanjimasu", type: "vocab", front: "かんじます", reading: "kanjimasu", meaning: "feel", example: { jp: "しあわせをかんじます。", en: "I feel happy." }, accept: ["sense", "perceive"] },
        { id: "ja-u63l1-shinjimasu", type: "vocab", front: "しんじます", reading: "shinjimasu", meaning: "believe", example: { jp: "ともだちをしんじます。", en: "I believe in my friend." }, accept: ["trust", "have faith in"] },
        { id: "ja-u63l1-kimemasu", type: "vocab", front: "きめます", reading: "kimemasu", meaning: "decide", example: { jp: "よていをきめます。", en: "I decide the plan." }, accept: ["choose", "settle on"] },
        { id: "ja-u63l1-motomemasu", type: "vocab", front: "もとめます", reading: "motomemasu", meaning: "seek", example: { jp: "いけんをもとめます。", en: "I seek opinions." }, accept: ["request", "ask for"] },
        { id: "ja-u63l1-tameshimasu", type: "vocab", front: "ためします", reading: "tameshimasu", meaning: "try", example: { jp: "あたらしいほうほうをためします。", en: "I try a new method." }, accept: ["test out", "give it a go"] },
      ],
    },
    {
      id: "ja-u63l2", unit: 63, lesson: 2, title: "Handling things", cefr: "B1", dominantMode: "recall",
      canDo: "Verbs of handling: ふくみます くわえます のこします あらわします あつかいます まかせます.",
      items: [
        { id: "ja-u63l2-fukumimasu", type: "vocab", front: "ふくみます", reading: "fukumimasu", meaning: "include", example: { jp: "ねだんはぜいきんをふくみます。", en: "The price includes tax." }, accept: ["contain"] },
        { id: "ja-u63l2-kuwaemasu", type: "vocab", front: "くわえます", reading: "kuwaemasu", meaning: "add", example: { jp: "みずをくわえます。", en: "I add water." }, accept: ["put in", "append"] },
        { id: "ja-u63l2-nokoshimasu", type: "vocab", front: "のこします", reading: "nokoshimasu", meaning: "leave behind", example: { jp: "ごはんをのこします。", en: "I leave rice uneaten." }, accept: ["save", "leave over"] },
        { id: "ja-u63l2-arawashimasu", type: "vocab", front: "あらわします", reading: "arawashimasu", meaning: "express", example: { jp: "きもちをことばであらわします。", en: "I express my feelings in words." }, accept: ["show", "represent"] },
        { id: "ja-u63l2-atsukaimasu", type: "vocab", front: "あつかいます", reading: "atsukaimasu", meaning: "handle", example: { jp: "きかいをたいせつにあつかいます。", en: "I handle the machine carefully." }, accept: ["treat", "deal with"] },
        { id: "ja-u63l2-makasemasu", type: "vocab", front: "まかせます", reading: "makasemasu", meaning: "entrust", example: { jp: "しごとをまかせます。", en: "I entrust the work to someone." }, accept: ["leave it to", "delegate"] },
      ],
    },
  ],
};
