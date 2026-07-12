// Unit 83 — ぶんぽう④ とりたて・かんけい ("Grammar IV — focus, relation & change") — B1 / N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// N3 focus particles, relational patterns, and change-over-time patterns, taught as
// function-word/pattern vocab. HIGHEST naturalness risk → native review.
export const UNIT83 = {
  id: "ja-u83", lang: "ja", title: "ぶんぽう④", order: 83, stage: "b1",
  lessons: [
    {
      id: "ja-u83l1", unit: 83, lesson: 1, title: "Focus particles", cefr: "B1", dominantMode: "recall",
      canDo: "Recognize focus particles: ～ほど ～くらい ～こそ ～しか ～だけ ～など.",
      items: [
        { id: "ja-u83l1-hodo", type: "vocab", front: "ほど", reading: "hodo", meaning: "to the extent that", example: { jp: "なくほどうれしいです。", en: "I'm so happy I could cry." }, accept: ["the more ~", "about"], hint: "～ほど = to the extent that / the more ~. なくほど = to the point of crying." },
        { id: "ja-u83l1-kurai", type: "vocab", front: "くらい", reading: "kurai", meaning: "about / to the extent", example: { jp: "一時間くらいかかります。", en: "It takes about an hour." }, accept: ["approximately", "as ~ as"], hint: "～くらい／ぐらい = about / to the extent of. Also みえないくらい暗い = so dark you can't see." },
        { id: "ja-u83l1-koso", type: "vocab", front: "こそ", reading: "koso", meaning: "emphasis: precisely", example: { jp: "こんどこそがんばります。", en: "This time for sure I'll do my best." }, accept: ["for sure", "the very"], hint: "～こそ = emphasis: 'precisely / for sure'. 今度こそ = this time for sure." },
        { id: "ja-u83l1-shika", type: "vocab", front: "しか", reading: "shika", meaning: "only (+ negative)", example: { jp: "千円しかありません。", en: "I only have 1000 yen." }, accept: ["nothing but"], hint: "～しか (+ negative verb) = only / nothing but. 千円しかない = only 1000 yen." },
        { id: "ja-u83l1-dake", type: "vocab", front: "だけ", reading: "dake", meaning: "only / just", example: { jp: "見るだけです。", en: "I'm just looking." }, accept: ["merely", "as much as"], hint: "～だけ = only / just. ひとつだけ = only one." },
        { id: "ja-u83l1-nado", type: "vocab", front: "など", reading: "nado", meaning: "etc. / things like", example: { jp: "くだものなど、いろいろかいます。", en: "I buy various things, like fruit." }, accept: ["and so on", "such as"], hint: "～など = etc. / things like (gives non-exhaustive examples)." },
      ],
    },
    {
      id: "ja-u83l2", unit: 83, lesson: 2, title: "Scope & occasion", cefr: "B1", dominantMode: "recall",
      canDo: "Recognize scope patterns: ～だけでなく ～において ～にわたって ～にあたって ～うえで ～にかけて.",
      items: [
        { id: "ja-u83l2-dakedenaku", type: "vocab", front: "だけでなく", reading: "dakedenaku", meaning: "not only ~ (but also)", example: { jp: "かんじだけでなく、ぶんぽうもむずかしいです。", en: "Not only kanji but also grammar is hard." }, accept: ["as well as"], hint: "～だけでなく = not only ~ (but also). Pairs with も." },
        { id: "ja-u83l2-nioite", type: "vocab", front: "において", reading: "nioite", meaning: "in / at (formal)", example: { jp: "かいぎは東京において行われます。", en: "The meeting is held in Tokyo." }, accept: ["in the field of"], hint: "～において = in / at (formal written 'in')." },
        { id: "ja-u83l2-niwatatte", type: "vocab", front: "にわたって", reading: "niwatatte", meaning: "over / throughout", example: { jp: "三日にわたってあめが降りました。", en: "It rained over three days." }, accept: ["spanning", "across"], hint: "～にわたって = over / throughout (a span of time or space)." },
        { id: "ja-u83l2-niatatte", type: "vocab", front: "にあたって", reading: "niatatte", meaning: "on the occasion of", example: { jp: "しゅっぱつにあたって、あいさつします。", en: "On departing, I give a greeting." }, accept: ["at the time of"], hint: "～にあたって = on the occasion of (a special moment / undertaking)." },
        { id: "ja-u83l2-uede", type: "vocab", front: "うえで", reading: "uede", meaning: "after ~ing / upon", example: { jp: "かんがえたうえで、へんじします。", en: "I'll reply after thinking it over." }, accept: ["in the process of"], hint: "～うえで = after ~ing / in doing. かんがえた上で = after considering." },
        { id: "ja-u83l2-nikakete", type: "vocab", front: "にかけて", reading: "nikakete", meaning: "through / over (a range)", example: { jp: "あきからふゆにかけて、さむくなります。", en: "From autumn through winter, it gets cold." }, accept: ["until", "spanning"], hint: "～から～にかけて = from ~ through ~ (a continuous range)." },
      ],
    },
    {
      id: "ja-u83l3", unit: 83, lesson: 3, title: "Relational patterns", cefr: "B1", dominantMode: "recall",
      canDo: "Recognize relational patterns: ～にたいして ～にくらべて ～にかんして ～として ～にとって ～とともに.",
      items: [
        { id: "ja-u83l3-nitaishite", type: "vocab", front: "にたいして", reading: "nitaishite", meaning: "toward / in contrast to", example: { jp: "しつもんにたいしてこたえます。", en: "I answer to the question." }, accept: ["regarding", "against"], hint: "～に対して = toward / regarding / in contrast to." },
        { id: "ja-u83l3-nikurabete", type: "vocab", front: "にくらべて", reading: "nikurabete", meaning: "compared to", example: { jp: "きょねんにくらべて、あついです。", en: "Compared to last year, it's hot." }, accept: ["in comparison with"], hint: "～に比べて = compared to." },
        { id: "ja-u83l3-nikanshite", type: "vocab", front: "にかんして", reading: "nikanshite", meaning: "regarding / concerning", example: { jp: "その事件にかんして、しらべます。", en: "I investigate regarding that incident." }, accept: ["about", "in relation to"], hint: "～に関して = regarding / concerning (formal; ≈ について)." },
        { id: "ja-u83l3-toshite", type: "vocab", front: "として", reading: "toshite", meaning: "as / in the role of", example: { jp: "先生として、はたらきます。", en: "I work as a teacher." }, accept: ["in the capacity of"], hint: "～として = as / in the role of. 先生として = as a teacher." },
        { id: "ja-u83l3-nitotte", type: "vocab", front: "にとって", reading: "nitotte", meaning: "for / from the standpoint of", example: { jp: "わたしにとって、大切なものです。", en: "For me, it's something important." }, accept: ["to (someone)"], hint: "～にとって = for / from the standpoint of (someone)." },
        { id: "ja-u83l3-totomoni", type: "vocab", front: "とともに", reading: "totomoni", meaning: "together with / as", example: { jp: "かぞくとともに、すごします。", en: "I spend the time together with my family." }, accept: ["along with"], hint: "～とともに = together with; also 'as X changes, Y changes'." },
      ],
    },
    {
      id: "ja-u83l4", unit: 83, lesson: 4, title: "Change over time", cefr: "B1", dominantMode: "recall",
      canDo: "Recognize change patterns: ～につれて ～にしたがって ～ようになる ～ようにする ～てくる ～ていく.",
      items: [
        { id: "ja-u83l4-nitsurete", type: "vocab", front: "につれて", reading: "nitsurete", meaning: "as ~ (parallel change)", example: { jp: "時間がたつにつれて、なれました。", en: "As time passed, I got used to it." }, accept: ["along with", "in proportion"], hint: "～につれて = as ~ (two things change together, gradually)." },
        { id: "ja-u83l4-nishitagatte", type: "vocab", front: "にしたがって", reading: "nishitagatte", meaning: "according to / as", example: { jp: "せつめいにしたがって、つくります。", en: "I make it according to the explanation." }, accept: ["in accordance with", "as"], hint: "～に従って = according to / as ~ (following a rule or a change)." },
        { id: "ja-u83l4-youninaru", type: "vocab", front: "ようになる", reading: "yōninaru", meaning: "come to / reach the point", example: { jp: "かんじが読めるようになりました。", en: "I've become able to read kanji." }, accept: ["get to the point where"], hint: "～ようになる = come to / reach the point where (a change over time)." },
        { id: "ja-u83l4-younisuru", type: "vocab", front: "ようにする", reading: "yōnisuru", meaning: "make an effort to", example: { jp: "まいにちうんどうするようにします。", en: "I make sure to exercise every day." }, accept: ["try to", "see to it"], hint: "～ようにする = make an effort to / try to (do habitually)." },
        { id: "ja-u83l4-tekuru", type: "vocab", front: "てくる", reading: "tekuru", meaning: "come to / start to (up to now)", example: { jp: "さむくなってきました。", en: "It's gotten cold (up to now)." }, accept: ["have come to"], hint: "～てくる = a change approaching the present. さむくなってくる = has been getting cold." },
        { id: "ja-u83l4-teiku", type: "vocab", front: "ていく", reading: "teiku", meaning: "go on ~ing (into the future)", example: { jp: "これからあつくなっていきます。", en: "It'll keep getting hotter from now on." }, accept: ["continue to"], hint: "～ていく = a change moving into the future. あつくなっていく = will keep getting hot." },
      ],
    },
  ],
};
