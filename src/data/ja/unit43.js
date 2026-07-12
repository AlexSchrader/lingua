// Unit 43 — ぶんぽう・4 (て-form patterns; giving & receiving) — A2 / JLPT N4
export const UNIT43 = {
  id: "ja-u43",
  lang: "ja",
  title: "ぶんぽう・4",
  order: 43,
  stage: "a2",
  lessons: [
    {
      id: "ja-u43l1",
      unit: 43,
      lesson: 1,
      title: "て-form patterns",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the て-form to say what's ongoing, what's allowed or forbidden, and to try, prepare, or complete an action.",
      items: [
        { id: "ja-u43l1-teimasu", type: "vocab", front: "ています", reading: "teimasu", meaning: "is ~ing (ongoing / state)", example: { jp: "いま、ほんをよんでいます。", en: "I'm reading a book right now." }, accept: ["-ing","am doing","in the middle of ~ing"], hint: "て-form + います = an action in progress: よむ → よんでいます = am reading." },
        { id: "ja-u43l1-tekara", type: "vocab", front: "てから", reading: "tekara", meaning: "after doing", example: { jp: "ごはんをたべてから、テレビをみます。", en: "After I eat, I'll watch TV." }, accept: ["after ~ing","once I've done"], hint: "て-form + から = 'after ~ing': たべてから = after eating." },
        { id: "ja-u43l1-temoiidesu", type: "vocab", front: "てもいいです", reading: "temoiidesu", meaning: "may / it's OK to", example: { jp: "ここでみずをのんでもいいですか。", en: "May I drink water here?" }, accept: ["may I","is it OK to","you may"], hint: "て-form + もいいです = permission: のんでもいいです = it's OK to drink." },
        { id: "ja-u43l1-tehaikemasen", type: "vocab", front: "てはいけません", reading: "tehaikemasen", meaning: "must not", example: { jp: "ここでたべてはいけません。", en: "You must not eat here." }, accept: ["may not","not allowed to","cannot"], hint: "て-form + はいけません = prohibition: たべてはいけません = must not eat." },
        { id: "ja-u43l1-temiru", type: "vocab", front: "てみる", reading: "temiru", meaning: "try doing", example: { jp: "このおちゃをのんでみます。", en: "I'll try drinking this tea." }, accept: ["try ~ing","give it a try"], hint: "て-form + みる = 'try doing (to see how it is)': のんでみる = try drinking." },
        { id: "ja-u43l1-teoku", type: "vocab", front: "ておく", reading: "teoku", meaning: "do in advance", example: { jp: "あした、ほんをかっておきます。", en: "I'll buy the book in advance tomorrow." }, accept: ["do ahead of time","do beforehand","get ~ ready"], hint: "て-form + おく = do something in advance/as preparation: かっておく = buy ahead of time." },
        { id: "ja-u43l1-teshimau", type: "vocab", front: "てしまう", reading: "teshimau", meaning: "do completely / (regrettably)", example: { jp: "ケーキをぜんぶたべてしまいました。", en: "I ate the whole cake (all of it)." }, accept: ["finish ~ing","end up ~ing","do it all"], hint: "て-form + しまう = finish completely, often with regret: たべてしまう = eat it all up." },
      ],
    },
    {
      id: "ja-u43l2",
      unit: 43,
      lesson: 2,
      title: "Giving, receiving & intention",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say who gives to whom (あげる・くれる・もらう), state what you intend to do (～つもり), and guess (だろう).",
      items: [
        { id: "ja-u43l2-ageru", type: "vocab", front: "あげる", reading: "ageru", meaning: "to give (to someone else)", example: { jp: "ともだちにプレゼントをあげます。", en: "I'll give my friend a present." }, accept: ["give (away)","give to someone"], hint: "あげる = I or others give AWAY, to someone else. Giver は、receiver に、thing を あげる. Never used for giving TO me — that's くれる." },
        { id: "ja-u43l2-kureru", type: "vocab", front: "くれる", reading: "kureru", meaning: "to give (to me/us)", example: { jp: "ちちがとけいをくれました。", en: "My dad gave me a watch." }, accept: ["give me","give to me/us"], hint: "くれる = someone gives TO me (or my side). Same shape (は・に・を) but the direction is toward you. Use this, not あげる, when the gift comes to you." },
        { id: "ja-u43l2-morau", type: "vocab", front: "もらう", reading: "morau", meaning: "to receive", example: { jp: "ともだちにチョコレートをもらいました。", en: "I received chocolate from a friend." }, accept: ["receive","get"], hint: "もらう = receive. The giver is marked with に (or から): (giver) に (thing) を もらう = 'get (thing) from (giver)'." },
        { id: "ja-u43l2-tsumori", type: "vocab", front: "つもり", reading: "tsumori", meaning: "intend to", example: { jp: "らいねん、にほんにいくつもりです。", en: "I intend to go to Japan next year." }, accept: ["plan to","intention"], hint: "plain-form verb + つもりです = 'intend/plan to…': いく → いくつもりです (plan to go). States a firm intention." },
        { id: "ja-u43l2-daro", type: "vocab", front: "だろう", reading: "darō", meaning: "probably / I bet", example: { jp: "あした、あめがふるだろう。", en: "It'll probably rain tomorrow." }, accept: ["probably","I bet","likely"], hint: "だろう = a guess: 'probably / I bet'. Comes after a plain form or a noun. Politer form is でしょう." },
      ],
    },
  ],
};
