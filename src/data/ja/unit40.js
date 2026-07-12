// Unit 40 — かんじ・いろ・たべもの (Colors & food/animals kanji) — A2 / JLPT N4
// Kanji unit grouped by meaning: color kanji, then food & animal kanji.
// type:"kanji" — recognition/recall test the meaning, production traces.
// KanjiVG strokes by glyph. lang/unit/lesson stamped in index.js.
export const UNIT40 = {
  id: "ja-u40",
  lang: "ja",
  title: "かんじ・いろ・たべもの",
  order: 40,
  stage: "a2",
  lessons: [
    {
      id: "ja-u40l1",
      unit: 40,
      lesson: 1,
      title: "Color kanji",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the color kanji: 赤 (red), 青 (blue), 黒 (black), 色 (color), 明 (bright).",
      items: [
        { id: "ja-u40l1-aka", type: "kanji", front: "赤", reading: "aka", meaning: "red", example: { jp: "赤いりんごです。", en: "It's a red apple." }, accept: ["red"], hint: "赤 = red (あか). Think of a big fire glowing red." },
        { id: "ja-u40l1-ao", type: "kanji", front: "青", reading: "ao", meaning: "blue", example: { jp: "青いそらです。", en: "It's a blue sky." }, accept: ["green"], hint: "青 = blue (あお). Also covers 'green' for traffic lights and plants." },
        { id: "ja-u40l1-kuro", type: "kanji", front: "黒", reading: "kuro", meaning: "black", example: { jp: "黒いねこがいます。", en: "There is a black cat." }, accept: ["dark"], hint: "黒 = black (くろ). The bottom is 火 (fire) — soot turns things black." },
        { id: "ja-u40l1-iro", type: "kanji", front: "色", reading: "iro", meaning: "color", example: { jp: "すきな色は青です。", en: "My favorite color is blue." }, accept: ["colour"], hint: "色 = color (いろ). 何色 = what color?" },
        { id: "ja-u40l1-akarui", type: "kanji", front: "明", reading: "akarui", meaning: "bright", example: { jp: "へやは明るいです。", en: "The room is bright." }, accept: ["light","clear"], hint: "明 = bright — 日 (sun) + 月 (moon) together give light." },
      ],
    },
    {
      id: "ja-u40l2",
      unit: 40,
      lesson: 2,
      title: "Food & animal kanji",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read food & animal kanji: 肉 飯 茶 (meat, rice, tea), 牛 魚 鳥 犬 (cow, fish, bird, dog).",
      items: [
        { id: "ja-u40l2-niku", type: "kanji", front: "肉", reading: "niku", meaning: "meat", example: { jp: "肉を食べます。", en: "I eat meat." }, accept: ["flesh"], hint: "肉 = meat (にく). 牛肉 = beef, 鳥肉 = chicken." },
        { id: "ja-u40l2-han", type: "kanji", front: "飯", reading: "han", meaning: "cooked rice", example: { jp: "ご飯を食べます。", en: "I eat a meal." }, accept: ["meal","rice"], hint: "飯 = cooked rice / meal. You know it as ご飯 (gohan)." },
        { id: "ja-u40l2-cha", type: "kanji", front: "茶", reading: "cha", meaning: "tea", example: { jp: "お茶を飲みます。", en: "I drink tea." }, accept: ["brown"], hint: "茶 = tea (ちゃ). You know it as お茶. The 艹 top is a plant." },
        { id: "ja-u40l2-ushi", type: "kanji", front: "牛", reading: "ushi", meaning: "cow", example: { jp: "牛がいます。", en: "There is a cow." }, accept: ["cattle","ox"], hint: "牛 = cow (うし). It looks like a cow's head with horns. 牛肉 = beef." },
        { id: "ja-u40l2-sakana", type: "kanji", front: "魚", reading: "sakana", meaning: "fish", example: { jp: "魚を食べます。", en: "I eat fish." }, accept: ["fishes"], hint: "魚 = fish (さかな) — a pictograph with fins and a tail." },
        { id: "ja-u40l2-tori", type: "kanji", front: "鳥", reading: "tori", meaning: "bird", example: { jp: "鳥がとんでいます。", en: "A bird is flying." }, accept: ["chicken","fowl"], hint: "鳥 = bird (とり) — a pictograph of a bird. 鳥肉 = chicken." },
        { id: "ja-u40l2-inu", type: "kanji", front: "犬", reading: "inu", meaning: "dog", example: { jp: "犬がすきです。", en: "I like dogs." }, accept: ["dogs"], hint: "犬 = dog (いぬ). It's 大 (big) with an extra dot — a dog on a leash." },
      ],
    },
  ],
};
