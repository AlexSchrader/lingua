// Unit 30 — つなぎことば ("Connecting words") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed.
// The model-honest slice of A2 grammar: discourse connectives, time relations, and
// modality expressions — all word-like, taught as vocab whose examples carry the
// pattern. Examples deliberately stay on NOUN / adjective / です clauses (and the
// ます-stem for ながら/そう) so NO verb plain-form is required — the plain/て-form
// conjugation layer is held for the Feature-CC conjugation card, not faked here.
// Naturalness queued for the batch native review when A2 goes live.
export const UNIT30 = {
  id: "ja-u30", lang: "ja", title: "つなぎことば", order: 30, stage: "a2",
  lessons: [
    {
      id: "ja-u30l1", unit: 30, lesson: 1, title: "Because & so", cefr: "A2", dominantMode: "recall",
      canDo: "Give reasons: ので し それで それに つまり そのため.",
      items: [
        { id: "ja-u30l1-node", type: "vocab", front: "ので", reading: "node", meaning: "because", example: { jp: "びょうきなので、やすみます。", en: "Because I'm ill, I'll rest." }, accept: ["since", "as"], hint: "ので = because / since. After a NOUN or な-adjective it takes な: びょうき な ので. A softer, more explanatory から." },
        { id: "ja-u30l1-shi", type: "vocab", front: "し", reading: "shi", meaning: "and (what's more)", example: { jp: "あついし、ねむいです。", en: "It's hot, and on top of that I'm sleepy." }, accept: ["and also", "besides"], hint: "…し lists reasons/qualities: A し、B = 'it's A, and what's more B'." },
        { id: "ja-u30l1-sorede", type: "vocab", front: "それで", reading: "sorede", meaning: "and so", example: { jp: "あめでした。それで、いえにいました。", en: "It was raining. So I stayed home." }, accept: ["therefore", "that's why"] },
        { id: "ja-u30l1-soreni", type: "vocab", front: "それに", reading: "soreni", meaning: "besides", example: { jp: "べんりです。それに、あんぜんです。", en: "It's convenient. Besides, it's safe." }, accept: ["moreover", "on top of that"] },
        { id: "ja-u30l1-tsumari", type: "vocab", front: "つまり", reading: "tsumari", meaning: "in other words", example: { jp: "つまり、だいじょうぶです。", en: "In other words, it's fine." }, accept: ["that is", "in short"] },
        { id: "ja-u30l1-sonotame", type: "vocab", front: "そのため", reading: "sonotame", meaning: "therefore", example: { jp: "あめです。そのため、やすみます。", en: "It's raining. Therefore, I'll rest." }, accept: ["for that reason", "consequently"] },
      ],
    },
    {
      id: "ja-u30l2", unit: 30, lesson: 2, title: "But & however", cefr: "A2", dominantMode: "recall",
      canDo: "Contrast: けど のに しかし それでも ところで だけど.",
      items: [
        { id: "ja-u30l2-kedo", type: "vocab", front: "けど", reading: "kedo", meaning: "but", example: { jp: "あついですけど、いきます。", en: "It's hot, but I'll go." }, accept: ["although", "though"], hint: "けど = but / though. Attaches right after です / an adjective: あついですけど…" },
        { id: "ja-u30l2-noni", type: "vocab", front: "のに", reading: "noni", meaning: "even though", example: { jp: "べんりなのに、つかいません。", en: "Even though it's convenient, I don't use it." }, accept: ["despite", "although"], hint: "のに = even though (often with a hint of surprise/complaint). Takes な after a noun/な-adjective: べんり な のに." },
        { id: "ja-u30l2-shikashi", type: "vocab", front: "しかし", reading: "shikashi", meaning: "however", example: { jp: "すきです。しかし、へたです。", en: "I like it. However, I'm bad at it." }, accept: ["but", "yet"] },
        { id: "ja-u30l2-soredemo", type: "vocab", front: "それでも", reading: "soredemo", meaning: "even so", example: { jp: "さむいです。それでも、およぎます。", en: "It's cold. Even so, I'll swim." }, accept: ["still", "nevertheless"] },
        { id: "ja-u30l2-tokorode", type: "vocab", front: "ところで", reading: "tokorode", meaning: "by the way", example: { jp: "ところで、げんきですか。", en: "By the way, how are you?" }, accept: ["incidentally", "anyway"] },
        { id: "ja-u30l2-dakedo", type: "vocab", front: "だけど", reading: "dakedo", meaning: "but", example: { jp: "だけど、むずかしいです。", en: "But it's difficult." }, accept: ["however", "still"] },
      ],
    },
    {
      id: "ja-u30l3", unit: 30, lesson: 3, title: "When & while", cefr: "A2", dominantMode: "recall",
      canDo: "Place events in time: とき まえに あとで あいだ までに ながら.",
      items: [
        { id: "ja-u30l3-toki", type: "vocab", front: "とき", reading: "toki", meaning: "when", example: { jp: "こどものとき、およぎました。", en: "When I was a child, I swam." }, accept: ["at the time", "the time when"], hint: "(noun) の とき = 'when / at the time of': こども の とき = when (I was) a child." },
        { id: "ja-u30l3-maeni", type: "vocab", front: "まえに", reading: "maeni", meaning: "before", example: { jp: "しけんのまえに、べんきょうします。", en: "Before the exam, I study." }, accept: ["prior to", "in front of"] },
        { id: "ja-u30l3-atode", type: "vocab", front: "あとで", reading: "atode", meaning: "after", example: { jp: "しごとのあとで、あそびます。", en: "After work, I hang out." }, accept: ["later", "afterwards"] },
        { id: "ja-u30l3-aida", type: "vocab", front: "あいだ", reading: "aida", meaning: "during", example: { jp: "やすみのあいだ、りょこうします。", en: "During the break, I travel." }, accept: ["while", "the interval"] },
        { id: "ja-u30l3-madeni", type: "vocab", front: "までに", reading: "madeni", meaning: "by (a time)", example: { jp: "ごじまでに、かえります。", en: "I'll be back by five." }, accept: ["by the time", "no later than"] },
        { id: "ja-u30l3-nagara", type: "vocab", front: "ながら", reading: "nagara", meaning: "while (doing)", example: { jp: "おんがくをききながら、あるきます。", en: "I walk while listening to music." }, accept: ["as", "at the same time"], hint: "verb-stem + ながら = doing two things at once: きき + ながら = while listening." },
      ],
    },
    {
      id: "ja-u30l4", unit: 30, lesson: 4, title: "Probably & seems", cefr: "A2", dominantMode: "recall",
      canDo: "Express likelihood: でしょう かもしれません はず そう みたい らしい.",
      items: [
        { id: "ja-u30l4-desho", type: "vocab", front: "でしょう", reading: "deshō", meaning: "probably", example: { jp: "あしたはあめでしょう。", en: "It'll probably rain tomorrow." }, accept: ["likely", "I think", "right?"] },
        { id: "ja-u30l4-kamoshiremasen", type: "vocab", front: "かもしれません", reading: "kamoshiremasen", meaning: "maybe", example: { jp: "びょうきかもしれません。", en: "He might be ill." }, accept: ["might", "perhaps", "possibly"] },
        { id: "ja-u30l4-hazu", type: "vocab", front: "はず", reading: "hazu", meaning: "should be", example: { jp: "あんぜんなはずです。", en: "It should be safe." }, accept: ["ought to", "supposed to", "expected to"] },
        { id: "ja-u30l4-so", type: "vocab", front: "そう", reading: "sō", meaning: "seems (looks)", example: { jp: "おいしそうです。", en: "It looks delicious." }, accept: ["looks like", "appears"], hint: "adjective-stem + そう = 'looks…': おいし + そう = looks tasty." },
        { id: "ja-u30l4-mitai", type: "vocab", front: "みたい", reading: "mitai", meaning: "like", example: { jp: "こどもみたいです。", en: "He's like a child." }, accept: ["seems like", "resembling"] },
        { id: "ja-u30l4-rashii", type: "vocab", front: "らしい", reading: "rashii", meaning: "seems", example: { jp: "がくせいらしいです。", en: "He seems to be a student." }, accept: ["apparently", "I hear", "typical of"] },
      ],
    },
  ],
};
