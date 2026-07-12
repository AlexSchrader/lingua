// Unit 55 — しぜん・かんきょう ("Nature & environment") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// The N3 layer for the natural world and environmental issues — climate, resources, and
// disasters, the vocabulary needed to discuss the planet. Examples stay in A1+A2 grammar
// and reuse A1/A2 vocab where possible. Naturalness queued for native review.
export const UNIT55 = {
  id: "ja-u55", lang: "ja", title: "しぜん・かんきょう", order: 55, stage: "b1",
  lessons: [
    {
      id: "ja-u55l1", unit: 55, lesson: 1, title: "Nature & climate", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about nature and climate: しぜん きこう ちきゅう しげん エネルギー おんだんか.",
      items: [
        { id: "ja-u55l1-shizen", type: "vocab", front: "しぜん", reading: "shizen", meaning: "nature", example: { jp: "しぜんがゆたかです。", en: "Nature is abundant here." }, accept: ["the natural world"] },
        { id: "ja-u55l1-kiko", type: "vocab", front: "きこう", reading: "kikō", meaning: "climate", example: { jp: "にほんのきこうはいいです。", en: "Japan's climate is nice." }, accept: ["weather patterns"], hint: "きこう = climate (long-term); てんき = today's weather." },
        { id: "ja-u55l1-chikyu", type: "vocab", front: "ちきゅう", reading: "chikyū", meaning: "the Earth", example: { jp: "ちきゅうはまるいです。", en: "The Earth is round." }, accept: ["the planet", "the globe"] },
        { id: "ja-u55l1-shigen", type: "vocab", front: "しげん", reading: "shigen", meaning: "resources", example: { jp: "しげんをたいせつにします。", en: "We value our resources." }, accept: ["natural resources"] },
        { id: "ja-u55l1-enerugi", type: "vocab", front: "エネルギー", reading: "enerugī", meaning: "energy", example: { jp: "エネルギーをつかいます。", en: "We use energy." }, accept: ["power"] },
        { id: "ja-u55l1-ondanka", type: "vocab", front: "おんだんか", reading: "ondanka", meaning: "global warming", example: { jp: "おんだんかがすすんでいます。", en: "Global warming is advancing." }, accept: ["warming"] },
      ],
    },
    {
      id: "ja-u55l2", unit: 55, lesson: 2, title: "Disasters & protection", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about disasters and safety: さいがい かじ こうずい おせん ぼうさい ひなん.",
      items: [
        { id: "ja-u55l2-saigai", type: "vocab", front: "さいがい", reading: "saigai", meaning: "disaster", example: { jp: "さいがいにきをつけます。", en: "I watch out for disasters." }, accept: ["catastrophe"] },
        { id: "ja-u55l2-kaji", type: "vocab", front: "かじ", reading: "kaji", meaning: "fire", example: { jp: "となりでかじがありました。", en: "There was a fire next door." }, accept: ["house fire", "blaze"] },
        { id: "ja-u55l2-kozui", type: "vocab", front: "こうずい", reading: "kōzui", meaning: "flood", example: { jp: "あめでこうずいになりました。", en: "The rain caused a flood." }, accept: ["flooding"] },
        { id: "ja-u55l2-osen", type: "vocab", front: "おせん", reading: "osen", meaning: "pollution", example: { jp: "みずのおせんがもんだいです。", en: "Water pollution is a problem." }, accept: ["contamination"] },
        { id: "ja-u55l2-bosai", type: "vocab", front: "ぼうさい", reading: "bōsai", meaning: "disaster prevention", example: { jp: "ぼうさいのじゅんびをします。", en: "We prepare for disaster prevention." }, accept: ["disaster preparedness"] },
        { id: "ja-u55l2-hinan", type: "vocab", front: "ひなん", reading: "hinan", meaning: "evacuation", example: { jp: "あんぜんなばしょへひなんします。", en: "We evacuate to a safe place." }, accept: ["taking refuge"] },
      ],
    },
  ],
};
