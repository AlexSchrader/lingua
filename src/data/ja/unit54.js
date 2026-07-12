// Unit 54 — けんこう・からだ ("Health & body") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// The N3 health layer beyond A1/A2's びょうき/いしゃ/くすり — condition, treatment, and
// the inner body a learner needs to describe health in depth. Examples stay in A1+A2
// grammar and reuse A1/A2 vocab where possible. Naturalness queued for native review.
export const UNIT54 = {
  id: "ja-u54", lang: "ja", title: "けんこう・からだ", order: 54, stage: "b1",
  lessons: [
    {
      id: "ja-u54l1", unit: 54, lesson: 1, title: "Health & condition", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about health: けんこう たいちょう しょうじょう ちりょう けんさ よぼう.",
      items: [
        { id: "ja-u54l1-kenko", type: "vocab", front: "けんこう", reading: "kenkō", meaning: "health", example: { jp: "けんこうがいちばんたいせつです。", en: "Health is the most important thing." }, accept: ["healthy", "wellness"] },
        { id: "ja-u54l1-taicho", type: "vocab", front: "たいちょう", reading: "taichō", meaning: "physical condition", example: { jp: "きょうはたいちょうがわるいです。", en: "My condition is bad today." }, accept: ["state of health"] },
        { id: "ja-u54l1-shojo", type: "vocab", front: "しょうじょう", reading: "shōjō", meaning: "symptoms", example: { jp: "しょうじょうをせつめいします。", en: "I'll explain the symptoms." }, accept: ["condition"] },
        { id: "ja-u54l1-chiryo", type: "vocab", front: "ちりょう", reading: "chiryō", meaning: "treatment", example: { jp: "びょういんでちりょうします。", en: "I get treatment at the hospital." }, accept: ["medical care", "therapy"] },
        { id: "ja-u54l1-kensa", type: "vocab", front: "けんさ", reading: "kensa", meaning: "examination", example: { jp: "けんさのけっかをききます。", en: "I'll hear the examination results." }, accept: ["checkup", "inspection"] },
        { id: "ja-u54l1-yobo", type: "vocab", front: "よぼう", reading: "yobō", meaning: "prevention", example: { jp: "びょうきのよぼうがたいせつです。", en: "Prevention of illness is important." }, accept: ["precaution"] },
      ],
    },
    {
      id: "ja-u54l2", unit: 54, lesson: 2, title: "Inside the body", cefr: "B1", dominantMode: "recall",
      canDo: "Name parts of the body: きんにく ほね しんぞう けつあつ たいじゅう ひふ.",
      items: [
        { id: "ja-u54l2-kinniku", type: "vocab", front: "きんにく", reading: "kinniku", meaning: "muscle", example: { jp: "きんにくがいたいです。", en: "My muscles hurt." }, accept: ["muscles"] },
        { id: "ja-u54l2-hone", type: "vocab", front: "ほね", reading: "hone", meaning: "bone", example: { jp: "ほねがつよいです。", en: "My bones are strong." }, accept: ["bones"] },
        { id: "ja-u54l2-shinzo", type: "vocab", front: "しんぞう", reading: "shinzō", meaning: "heart", example: { jp: "しんぞうがはやくうごきます。", en: "My heart beats fast." }, accept: ["the heart (organ)"], hint: "しんぞう = the heart organ; こころ = heart as feelings/mind." },
        { id: "ja-u54l2-ketsuatsu", type: "vocab", front: "けつあつ", reading: "ketsuatsu", meaning: "blood pressure", example: { jp: "けつあつがたかいです。", en: "My blood pressure is high." }, accept: ["BP"] },
        { id: "ja-u54l2-taiju", type: "vocab", front: "たいじゅう", reading: "taijū", meaning: "body weight", example: { jp: "たいじゅうをはかります。", en: "I measure my body weight." }, accept: ["weight"] },
        { id: "ja-u54l2-hifu", type: "vocab", front: "ひふ", reading: "hifu", meaning: "skin", example: { jp: "ひふがよわいです。", en: "My skin is sensitive." }, accept: ["the skin"] },
      ],
    },
  ],
};
