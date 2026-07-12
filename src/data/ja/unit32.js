// Unit 32 — かんじ・からだ (Body & health kanji) — A2 / JLPT N4
// Body & health kanji set. type:"kanji" — recognition/recall test the meaning,
// production traces. KanjiVG strokes by glyph. lang/unit/lesson stamped in index.js.
export const UNIT32 = {
  id: "ja-u32",
  lang: "ja",
  title: "かんじ・からだ",
  order: 32,
  stage: "a2",
  lessons: [
    {
      id: "ja-u32l1",
      unit: 32,
      lesson: 1,
      title: "Body & health kanji",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the body & health kanji: 体 (body), 医 (doctor), 病 (illness), 死 (death), 心 (heart), 力 (power), 味 (taste).",
      items: [
        { id: "ja-u32l1-karada", type: "kanji", front: "体", reading: "karada", meaning: "body", example: { jp: "体が大きいです。", en: "The body is big." }, accept: ["physical body"], hint: "体 = body — 亻 (person) + 本 (root): the person's main part. You know からだ." },
        { id: "ja-u32l1-i", type: "kanji", front: "医", reading: "i", meaning: "doctor", example: { jp: "医者に行きます。", en: "I go to the doctor." }, accept: ["medicine","medical"], hint: "医 = doctor / medicine. 医者 (いしゃ) = doctor. An arrow tucked in a box: pulling out what makes you sick." },
        { id: "ja-u32l1-byo", type: "kanji", front: "病", reading: "byō", meaning: "illness", example: { jp: "病気になりました。", en: "I got sick." }, accept: ["sickness","disease"], hint: "病 = illness. 病気 (びょうき) = sickness. The 疒 radical is a person lying sick in bed." },
        { id: "ja-u32l1-shi", type: "kanji", front: "死", reading: "shi", meaning: "death", example: { jp: "死ぬのがこわいです。", en: "I'm afraid of dying." }, accept: ["die","dying"], hint: "死 = death. 死ぬ (しぬ) = to die. Same し sound as the number four." },
        { id: "ja-u32l1-kokoro", type: "kanji", front: "心", reading: "kokoro", meaning: "heart", example: { jp: "心がやさしいです。", en: "The heart is kind." }, accept: ["mind","spirit"], hint: "心 = heart / mind — a pictograph of a beating heart with its dots. You know こころ." },
        { id: "ja-u32l1-chikara", type: "kanji", front: "力", reading: "chikara", meaning: "power", example: { jp: "力が強いです。", en: "The strength is great." }, accept: ["strength","force"], hint: "力 = power / strength — a flexing arm. You saw it inside 男 (man). You know ちから." },
        { id: "ja-u32l1-aji", type: "kanji", front: "味", reading: "aji", meaning: "taste", example: { jp: "この味がすきです。", en: "I like this taste." }, accept: ["flavor","flavour"], hint: "味 = taste / flavor — 口 (mouth) + 未 (not yet): the mouth still tasting. You know あじ." },
      ],
    },
  ],
};
