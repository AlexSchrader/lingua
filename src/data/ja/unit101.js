// Unit 101 — ぶんぽう・B1・3 ("Grammar B1·3") — B1 / JLPT N3 — third B1 unit.
// Same word-like-grammar model as Units 99–100 (A2 Unit-30 style): each N3 pattern
// is a vocab item whose all-kana example carries it, built only from vocab taught
// through A2 so it adds no new scaffolding. All 12 fronts collision-checked against
// the 100-unit corpus. Naturalness queued for the batch native-speaker review.
export const UNIT101 = {
  id: "ja-u101", lang: "ja", title: "ぶんぽう・B1・3", order: 101, stage: "b1",
  lessons: [
    {
      id: "ja-u101l1", unit: 101, lesson: 1, title: "Tendency & manner", cefr: "B1", dominantMode: "recall",
      canDo: "Describe tendencies and how: がち ぎみ だらけ がる ずに つつ.",
      items: [
        { id: "ja-u101l1-gachi", type: "vocab", front: "がち", reading: "gachi", meaning: "tends to / prone to", example: { jp: "ふゆは、びょうきになりがちです。", en: "In winter, I tend to get sick." }, accept: ["apt to", "often"], hint: "(verb stem / noun) がち = leans toward a BAD tendency: なりがち = tends to become. Not for neutral habits." },
        { id: "ja-u101l1-gimi", type: "vocab", front: "ぎみ", reading: "gimi", meaning: "a touch of / -ish", example: { jp: "きょうは、かぜぎみです。", en: "Today I'm a little under the weather (cold-ish)." }, accept: ["slightly", "a bit"], hint: "(noun / verb stem) ぎみ = 'a slight touch of…': かぜぎみ = coming down with a cold. Milder than 'fully'." },
        { id: "ja-u101l1-darake", type: "vocab", front: "だらけ", reading: "darake", meaning: "covered in / full of", example: { jp: "このほんは、かんじだらけです。", en: "This book is full of kanji." }, accept: ["riddled with", "nothing but"], hint: "(noun) だらけ = covered in / littered with — usually something unwanted: まちがいだらけ = full of mistakes." },
        { id: "ja-u101l1-garu", type: "vocab", front: "がる", reading: "garu", meaning: "show signs of (feeling)", example: { jp: "いもうとは、おかしをほしがります。", en: "My little sister wants sweets." }, accept: ["seem to feel", "act like"], hint: "(い-adj / feeling stem) がる = report SOMEONE ELSE's feeling: ほしがる = (they) want. You feel ほしい; others ほしがる." },
        { id: "ja-u101l1-zuni", type: "vocab", front: "ずに", reading: "zuni", meaning: "without doing", example: { jp: "あさごはんをたべずに、がっこうへいきました。", en: "I went to school without eating breakfast." }, accept: ["not doing and", "instead of doing"], hint: "(verb ない-stem) ずに = 'without ~ing': たべずに = without eating. Formal twin of ～ないで. (する→せずに.)" },
        { id: "ja-u101l1-tsutsu", type: "vocab", front: "つつ", reading: "tsutsu", meaning: "while (doing)", example: { jp: "おんがくをききつつ、べんきょうします。", en: "I study while listening to music." }, accept: ["at the same time as", "as"], hint: "(verb stem) つつ = the formal/written ながら: two actions at once. ききつつ = while listening." },
      ],
    },
    {
      id: "ja-u101l2", unit: 101, lesson: 2, title: "Contrast, concession & certainty", cefr: "B1", dominantMode: "recall",
      canDo: "Contrast and conclude: いっぽう ものの どころか にちがいない たとえ なんて.",
      items: [
        { id: "ja-u101l2-ippo", type: "vocab", front: "いっぽう", reading: "ippō", meaning: "on the other hand / whereas", example: { jp: "なつはあついいっぽう、ふゆはさむいです。", en: "Summer is hot, whereas winter is cold." }, accept: ["meanwhile", "while"], hint: "(plain) いっぽう(で) = 'on the one hand… on the other': sets two sides side by side. Also 一方 = 'one direction'." },
        { id: "ja-u101l2-monono", type: "vocab", front: "ものの", reading: "monono", meaning: "although / but", example: { jp: "にほんへいったものの、なにもかいませんでした。", en: "Although I went to Japan, I didn't buy anything." }, accept: ["even though", "and yet"], hint: "(plain) ものの = 'although' — the first clause is true, but the expected result didn't follow. Written register." },
        { id: "ja-u101l2-dokoroka", type: "vocab", front: "どころか", reading: "dokoroka", meaning: "far from / let alone", example: { jp: "かんじどころか、ひらがなもよめません。", en: "Far from kanji, I can't even read hiragana." }, accept: ["much less", "on the contrary"], hint: "(noun / plain) どころか = 'far from X — not even Y': overturns the expectation, often with も." },
        { id: "ja-u101l2-nichigainai", type: "vocab", front: "にちがいない", reading: "nichigainai", meaning: "must be / no doubt", example: { jp: "あのひとは、がくせいにちがいない。", en: "That person must be a student." }, accept: ["surely", "I'm certain"], hint: "(noun / plain) にちがいない = strong certainty from evidence: 'it must be…'. Firmer than でしょう or かもしれない." },
        { id: "ja-u101l2-tatoe", type: "vocab", front: "たとえ", reading: "tatoe", meaning: "even if", example: { jp: "たとえあめでも、いきます。", en: "Even if it rains, I'll go." }, accept: ["no matter if", "supposing"], hint: "たとえ … ても/でも = 'even if…': たとえ sets up the concession, ても finishes it. A matched pair." },
        { id: "ja-u101l2-nante", type: "vocab", front: "なんて", reading: "nante", meaning: "such a thing as / how…!", example: { jp: "にほんごがむずかしいなんて、しりませんでした。", en: "I had no idea Japanese was so hard!" }, accept: ["the idea that", "things like"], hint: "(plain / noun) なんて adds surprise or dismissal: '…なんて、しらなかった' = 'I never knew (surprisingly) that…'. Casual." },
      ],
    },
  ],
};
