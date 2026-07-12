// Unit 66 — ぶんぽう② ("Grammar II — relation, reason & keigo") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// N3 GRAMMAR taught as function-word vocab. Covers relational/causal patterns + an intro
// to keigo (honorific/humble verbs, which are lexical so they model cleanly as vocab).
// ⚠️ HIGHEST naturalness/register risk — flag for native review. Passive/causative drills
// are NOT here (parked on the conjugation engine).
export const UNIT66 = {
  id: "ja-u66", lang: "ja", title: "ぶんぽう②", order: 66, stage: "b1",
  lessons: [
    {
      id: "ja-u66l1", unit: 66, lesson: 1, title: "Relation & reason", cefr: "B1", dominantMode: "recall",
      canDo: "Connect ideas by relation and reason: ～について ～によって ～ため ～かわりに ～わけ ～ように.",
      items: [
        { id: "ja-u66l1-nitsuite", type: "vocab", front: "について", reading: "nitsuite", meaning: "about", example: { jp: "にほんについてはなします。", en: "I talk about Japan." }, accept: ["regarding", "concerning"] },
        { id: "ja-u66l1-niyotte", type: "vocab", front: "によって", reading: "niyotte", meaning: "depending on", example: { jp: "ひとによってかんがえがちがいます。", en: "Opinions differ from person to person." }, accept: ["by", "according to"], hint: "～によって = 'depending on / by means of / by (agent)'; very common at N3." },
        { id: "ja-u66l1-tame", type: "vocab", front: "ため", reading: "tame", meaning: "because of / for", example: { jp: "びょうきのためやすみます。", en: "I rest because of illness." }, accept: ["in order to", "for the sake of"], hint: "Noun+の / verb + ため = 'because of' or 'for the purpose of' — context decides." },
        { id: "ja-u66l1-kawarini", type: "vocab", front: "かわりに", reading: "kawarini", meaning: "instead of", example: { jp: "コーヒーのかわりにおちゃをのみます。", en: "Instead of coffee, I drink tea." }, accept: ["in place of", "in return"] },
        { id: "ja-u66l1-wake", type: "vocab", front: "わけ", reading: "wake", meaning: "reason", example: { jp: "いかないわけがあります。", en: "There's a reason I'm not going." }, accept: ["it means that", "no wonder"] },
        { id: "ja-u66l1-yoni", type: "vocab", front: "ように", reading: "yōni", meaning: "so that", example: { jp: "わすれないようにメモします。", en: "I make a note so I won't forget." }, accept: ["in order to", "like"], hint: "～ように = 'so that (a state comes about)', often with a potential/negative verb." },
      ],
    },
    {
      id: "ja-u66l2", unit: 66, lesson: 2, title: "Keigo — honorific & humble", cefr: "B1", dominantMode: "recall",
      canDo: "Use polite verbs: いらっしゃいます めしあがります おっしゃいます なさいます いたします まいります.",
      items: [
        { id: "ja-u66l2-irasshaimasu", type: "vocab", front: "いらっしゃいます", reading: "irasshaimasu", meaning: "to be/come/go (honorific)", example: { jp: "せんせいがいらっしゃいます。", en: "The teacher is here." }, accept: ["is present (honorific)"], hint: "Honorific for いる・くる・いく — used about someone you respect, never about yourself." },
        { id: "ja-u66l2-meshiagarimasu", type: "vocab", front: "めしあがります", reading: "meshiagarimasu", meaning: "to eat/drink (honorific)", example: { jp: "どうぞめしあがってください。", en: "Please help yourself (eat)." }, accept: ["have (a meal, honorific)"], hint: "Honorific for たべる・のむ." },
        { id: "ja-u66l2-osshaimasu", type: "vocab", front: "おっしゃいます", reading: "osshaimasu", meaning: "to say (honorific)", example: { jp: "おなまえをおっしゃってください。", en: "Please state your name." }, accept: ["state (honorific)"], hint: "Honorific for いう." },
        { id: "ja-u66l2-nasaimasu", type: "vocab", front: "なさいます", reading: "nasaimasu", meaning: "to do (honorific)", example: { jp: "しゃちょうがなさいます。", en: "The president does it." }, accept: ["do (honorific)"], hint: "Honorific for する." },
        { id: "ja-u66l2-itashimasu", type: "vocab", front: "いたします", reading: "itashimasu", meaning: "to do (humble)", example: { jp: "わたしがいたします。", en: "I will do it." }, accept: ["do (humble)"], hint: "Humble for する — used about your OWN actions, to lower yourself politely." },
        { id: "ja-u66l2-mairimasu", type: "vocab", front: "まいります", reading: "mairimasu", meaning: "to come/go (humble)", example: { jp: "あしたまいります。", en: "I will come tomorrow." }, accept: ["come/go (humble)"], hint: "Humble for くる・いく — about your own coming/going." },
      ],
    },
  ],
};
