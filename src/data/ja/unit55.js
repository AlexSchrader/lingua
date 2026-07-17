// Unit 55 — けいようし・N5 ("N5 Adjectives") — A1 thematic
// A batch of common JLPT N5 い- and な-adjectives not yet taught, grouped by
// theme: dimensions, state, quality/ease, and impression/taste. Each pairs
// naturally with opposites already learned (ながい↔みじかい, はやい↔おそい).
// Examples reuse only known nouns + particles + です. No new grammar — the
// adjectives are taught as vocabulary. lang/unit/lesson wired in index.js.
export const UNIT55 = {
  id: "ja-u55",
  lang: "ja",
  title: "けいようし・N5",
  order: 55,
  stage: "a1",
  lessons: [
    // Lesson 1: dimensions & shape
    {
      id: "ja-u55l1",
      unit: 55,
      lesson: 1,
      title: "Dimensions",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe size and shape: ながい みじかい ふとい ほそい せまい ひくい.",
      items: [
        { id: "ja-u55l1-nagai", type: "vocab", front: "ながい", reading: "nagai", meaning: "long", example: { jp: "このみちはながいです。", en: "This road is long." }, accept: ["lengthy"] },
        { id: "ja-u55l1-mijikai", type: "vocab", front: "みじかい", reading: "mijikai", meaning: "short", example: { jp: "このえんぴつはみじかいです。", en: "This pencil is short." }, accept: ["brief"] },
        { id: "ja-u55l1-futoi", type: "vocab", front: "ふとい", reading: "futoi", meaning: "thick", example: { jp: "このペンはふといです。", en: "This pen is thick." }, accept: ["fat"] },
        { id: "ja-u55l1-hosoi", type: "vocab", front: "ほそい", reading: "hosoi", meaning: "thin", example: { jp: "ゆびがほそいです。", en: "The fingers are thin." }, accept: ["slender", "narrow"] },
        { id: "ja-u55l1-semai", type: "vocab", front: "せまい", reading: "semai", meaning: "narrow", example: { jp: "このへやはせまいです。", en: "This room is narrow." }, accept: ["cramped", "small"] },
        { id: "ja-u55l1-hikui", type: "vocab", front: "ひくい", reading: "hikui", meaning: "low", example: { jp: "このやまはひくいです。", en: "This mountain is low." }, accept: ["short (height)"] },
      ],
    },
    // Lesson 2: state & quantity
    {
      id: "ja-u55l2",
      unit: 55,
      lesson: 2,
      title: "State & quantity",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe state and amount: くらい きたない わかい おおい すくない まるい.",
      items: [
        { id: "ja-u55l2-kurai", type: "vocab", front: "くらい", reading: "kurai", meaning: "dark", example: { jp: "へやがくらいです。", en: "The room is dark." }, accept: ["dim", "gloomy"] },
        { id: "ja-u55l2-kitanai", type: "vocab", front: "きたない", reading: "kitanai", meaning: "dirty", example: { jp: "くつがきたないです。", en: "The shoes are dirty." }, accept: ["messy", "filthy"] },
        { id: "ja-u55l2-wakai", type: "vocab", front: "わかい", reading: "wakai", meaning: "young", example: { jp: "せんせいはわかいです。", en: "The teacher is young." }, accept: ["youthful"] },
        { id: "ja-u55l2-ooi", type: "vocab", front: "おおい", reading: "ōi", meaning: "many", example: { jp: "ひとがおおいです。", en: "There are many people." }, accept: ["a lot", "numerous"] },
        { id: "ja-u55l2-sukunai", type: "vocab", front: "すくない", reading: "sukunai", meaning: "few", example: { jp: "おかねがすくないです。", en: "There is little money." }, accept: ["little", "scarce"] },
        { id: "ja-u55l2-marui", type: "vocab", front: "まるい", reading: "marui", meaning: "round", example: { jp: "つきはまるいです。", en: "The moon is round." }, accept: ["circular"] },
      ],
    },
    // Lesson 3: quality & ease
    {
      id: "ja-u55l3",
      unit: 55,
      lesson: 3,
      title: "Quality & ease",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe speed, ease, and impression: はやい おそい すごい やさしい かんたん ひま.",
      items: [
        { id: "ja-u55l3-hayai", type: "vocab", front: "はやい", reading: "hayai", meaning: "fast", example: { jp: "でんしゃははやいです。", en: "The train is fast." }, accept: ["quick", "early"] },
        { id: "ja-u55l3-osoi", type: "vocab", front: "おそい", reading: "osoi", meaning: "slow", example: { jp: "バスはおそいです。", en: "The bus is slow." }, accept: ["late"] },
        { id: "ja-u55l3-sugoi", type: "vocab", front: "すごい", reading: "sugoi", meaning: "amazing", example: { jp: "このえいがはすごいです。", en: "This movie is amazing." }, accept: ["great", "incredible", "awesome"] },
        { id: "ja-u55l3-yasashii", type: "vocab", front: "やさしい", reading: "yasashii", meaning: "easy", example: { jp: "このテストはやさしいです。", en: "This test is easy." }, accept: ["gentle", "kind"] },
        { id: "ja-u55l3-kantan", type: "vocab", front: "かんたん", reading: "kantan", meaning: "simple", example: { jp: "しごとはかんたんです。", en: "The work is simple." }, accept: ["easy"] },
        { id: "ja-u55l3-hima", type: "vocab", front: "ひま", reading: "hima", meaning: "free", example: { jp: "きょうはひまです。", en: "I'm free today." }, accept: ["free time", "idle"] },
      ],
    },
    // Lesson 4: impressions & taste
    {
      id: "ja-u55l4",
      unit: 55,
      lesson: 4,
      title: "Impressions & taste",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Give impressions: おもしろい つまらない まずい しょっぱい ひどい おなじ.",
      items: [
        { id: "ja-u55l4-omoshiroi", type: "vocab", front: "おもしろい", reading: "omoshiroi", meaning: "interesting", example: { jp: "このえいがはおもしろいです。", en: "This movie is interesting." }, accept: ["fun", "funny"] },
        { id: "ja-u55l4-tsumaranai", type: "vocab", front: "つまらない", reading: "tsumaranai", meaning: "boring", example: { jp: "このばんぐみはつまらないです。", en: "This program is boring." }, accept: ["dull", "trivial"] },
        { id: "ja-u55l4-mazui", type: "vocab", front: "まずい", reading: "mazui", meaning: "bad-tasting", example: { jp: "このりょうりはまずいです。", en: "This food tastes bad." }, accept: ["unappetizing", "awful"] },
        { id: "ja-u55l4-shoppai", type: "vocab", front: "しょっぱい", reading: "shoppai", meaning: "salty", example: { jp: "このスープはしょっぱいです。", en: "This soup is salty." }, accept: ["salty-tasting"] },
        { id: "ja-u55l4-hidoi", type: "vocab", front: "ひどい", reading: "hidoi", meaning: "terrible", example: { jp: "てんきがひどいです。", en: "The weather is terrible." }, accept: ["awful", "cruel"] },
        { id: "ja-u55l4-onaji", type: "vocab", front: "おなじ", reading: "onaji", meaning: "same", example: { jp: "これはおなじです。", en: "This is the same." }, accept: ["identical"] },
      ],
    },
  ],
};
