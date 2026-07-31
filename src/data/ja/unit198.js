// Unit 198 — ごい・N3・カタカナ・3 ("N3 loanwords 3") — B1 / JLPT N3 katakana loanwords.
// type:"vocab" — recognition/recall test the meaning. The target loanword appears in the
// example in its katakana form; everything else is basic N5/N4 kana, です/ます register.
// Multi-word meanings carry an accept synonym so type cards don't reject valid answers.
export const UNIT198 = {
  id: "ja-u198", lang: "ja", title: "ごい・N3・カタカナ・3", order: 198, stage: "b1",
  lessons: [
    {
      id: "ja-u198l1", unit: 198, lesson: 1, title: "N3 loanwords 3·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 loanwords: トランプ (playing cards), トレーニング (training), ドレス (dress), トン (ton), トンネル (tunnel), ノー (no).",
      items: [
        { id: "ja-u198l1-toranpu", type: "vocab", front: "トランプ", reading: "toranpu", meaning: "playing cards", example: { jp: "ともだちとトランプをします。", en: "I play cards with a friend." }, accept: ["cards"], hint: "トランプ (from English \"trump\") = playing cards." },
        { id: "ja-u198l1-toreningu", type: "vocab", front: "トレーニング", reading: "torēningu", meaning: "training", example: { jp: "まいあさトレーニングをします。", en: "I train every morning." }, accept: ["workout"] },
        { id: "ja-u198l1-doresu", type: "vocab", front: "ドレス", reading: "doresu", meaning: "dress", example: { jp: "あかいドレスがとてもきれいです。", en: "The red dress is very pretty." }, accept: ["gown"] },
        { id: "ja-u198l1-ton", type: "vocab", front: "トン", reading: "ton", meaning: "ton", example: { jp: "みずを一トンはこびます。", en: "I carry one ton of water." }, accept: ["tonne"] },
        { id: "ja-u198l1-tonneru", type: "vocab", front: "トンネル", reading: "tonneru", meaning: "tunnel", example: { jp: "でんしゃがトンネルにはいります。", en: "The train enters the tunnel." }, accept: ["underpass"] },
        { id: "ja-u198l1-no", type: "vocab", front: "ノー", reading: "nō", meaning: "no", example: { jp: "かれははっきりノーといいました。", en: "He clearly said no." }, accept: ["nope"] },
      ],
    },
    {
      id: "ja-u198l2", unit: 198, lesson: 2, title: "N3 loanwords 3·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 loanwords: ノック (knock), パーセント (percent), パイプ (pipe), パイロット (pilot), パス (path), バッグ (bag).",
      items: [
        { id: "ja-u198l2-nokku", type: "vocab", front: "ノック", reading: "nokku", meaning: "knock", example: { jp: "ドアをノックしてください。", en: "Please knock on the door." }, accept: ["rap"] },
        { id: "ja-u198l2-pasento", type: "vocab", front: "パーセント", reading: "pāsento", meaning: "percent", example: { jp: "テストで九十パーセントとれました。", en: "I got 90 percent on the test." }, accept: ["per cent"] },
        { id: "ja-u198l2-paipu", type: "vocab", front: "パイプ", reading: "paipu", meaning: "pipe", example: { jp: "みずがパイプをとおります。", en: "Water passes through the pipe." }, accept: ["tube"] },
        { id: "ja-u198l2-pairotto", type: "vocab", front: "パイロット", reading: "pairotto", meaning: "pilot", example: { jp: "かれはひこうきのパイロットです。", en: "He is an airplane pilot." }, accept: ["aviator"] },
        { id: "ja-u198l2-pasu", type: "vocab", front: "パス", reading: "pasu", meaning: "path", example: { jp: "こうえんのパスをあるきます。", en: "I walk along the park path." }, accept: ["pass"] },
        { id: "ja-u198l2-baggu", type: "vocab", front: "バッグ", reading: "baggu", meaning: "bag", example: { jp: "あたらしいバッグをかいました。", en: "I bought a new bag." }, accept: ["handbag"] },
      ],
    },
    {
      id: "ja-u198l3", unit: 198, lesson: 3, title: "N3 loanwords 3·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 loanwords: バランス (balance), ピクニック (picnic), ビデオ (video), ピン (pin), プラス (plus), プラスチック (plastic).",
      items: [
        { id: "ja-u198l3-baransu", type: "vocab", front: "バランス", reading: "baransu", meaning: "balance", example: { jp: "じてんしゃでバランスをとります。", en: "I keep my balance on the bicycle." }, accept: ["equilibrium"] },
        { id: "ja-u198l3-pikunikku", type: "vocab", front: "ピクニック", reading: "pikunikku", meaning: "picnic", example: { jp: "こうえんでピクニックをします。", en: "We have a picnic in the park." }, accept: ["outing"] },
        { id: "ja-u198l3-bideo", type: "vocab", front: "ビデオ", reading: "bideo", meaning: "video", example: { jp: "いえでビデオをみます。", en: "I watch a video at home." }, accept: ["video tape"] },
        { id: "ja-u198l3-pin", type: "vocab", front: "ピン", reading: "pin", meaning: "pin", example: { jp: "かみをピンでとめます。", en: "I fasten the paper with a pin." }, accept: ["tack"] },
        { id: "ja-u198l3-purasu", type: "vocab", front: "プラス", reading: "purasu", meaning: "plus", example: { jp: "三プラス四は七です。", en: "Three plus four is seven." }, accept: ["positive"] },
        { id: "ja-u198l3-purasuchikku", type: "vocab", front: "プラスチック", reading: "purasuchikku", meaning: "plastic", example: { jp: "このコップはプラスチックです。", en: "This cup is plastic." }, accept: ["plastics"] },
      ],
    },
    {
      id: "ja-u198l4", unit: 198, lesson: 4, title: "N3 loanwords 3·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 loanwords: プラン (plan), ブレーキ (brake), プロ (professional), ペンキ (paint), ベンチ (bench), ボーイ (porter).",
      items: [
        { id: "ja-u198l4-puran", type: "vocab", front: "プラン", reading: "puran", meaning: "plan", example: { jp: "りょこうのプランをたてます。", en: "I make a travel plan." }, accept: ["scheme"] },
        { id: "ja-u198l4-bureki", type: "vocab", front: "ブレーキ", reading: "burēki", meaning: "brake", example: { jp: "くるまのブレーキをかけます。", en: "I put on the car's brake." }, accept: ["brakes"] },
        { id: "ja-u198l4-puro", type: "vocab", front: "プロ", reading: "puro", meaning: "professional", example: { jp: "かれはサッカーのプロです。", en: "He is a soccer professional." }, accept: ["pro"], hint: "プロ = short for プロフェッショナル (professional). Opposite: アマ (amateur)." },
        { id: "ja-u198l4-penki", type: "vocab", front: "ペンキ", reading: "penki", meaning: "paint", example: { jp: "かべにペンキをぬります。", en: "I paint the wall." }, accept: ["house paint"] },
        { id: "ja-u198l4-benchi", type: "vocab", front: "ベンチ", reading: "benchi", meaning: "bench", example: { jp: "こうえんのベンチにすわります。", en: "I sit on the park bench." }, accept: ["seat"] },
        { id: "ja-u198l4-boi", type: "vocab", front: "ボーイ", reading: "bōi", meaning: "porter", example: { jp: "ホテルのボーイがにもつをはこびます。", en: "The hotel porter carries the luggage." }, accept: ["bellboy", "boy"], hint: "ボーイ (from \"boy\") = a hotel porter or male waiter." },
      ],
    },
  ],
};
