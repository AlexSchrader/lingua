// Unit 118 — かんじ・N3・16 — B1 / JLPT N3 kanji, frequency band ~1561–1725.
// type:"kanji" — recognition/recall test the meaning, production traces (KanjiVG).
// Single six-item lesson (tail of the N3 kanji band). Examples contain the target
// glyph; everything else kana, N5/N4 vocab, です/ます register.
export const UNIT118 = {
  id: "ja-u118", lang: "ja", title: "かんじ・N3・16", order: 118, stage: "b1",
  lessons: [
    {
      id: "ja-u118l1", unit: 118, lesson: 1, title: "N3 kanji 16·1", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 靴 (shoes), 恥 (shame), 偶 (by chance), 偉 (great), 猫 (cat), 幾 (how many).",
      items: [
        { id: "ja-u118l1-ka6", type: "kanji", front: "靴", reading: "ka", meaning: "shoes", example: { jp: "あたらしい靴をかいました。", en: "I bought new shoes." }, accept: ["shoe", "boots"], hint: "靴 (くつ) = shoes." },
        { id: "ja-u118l1-chi4", type: "kanji", front: "恥", reading: "chi", meaning: "shame", example: { jp: "みんなのまえでころんで、恥ずかしかったです。", en: "I fell in front of everyone and was embarrassed." }, accept: ["embarrassment", "disgrace"], hint: "恥ずかしい (はずかしい) = embarrassed." },
        { id: "ja-u118l1-gu2", type: "kanji", front: "偶", reading: "gū", meaning: "by chance", example: { jp: "えきで偶然、ともだちにあいました。", en: "By chance, I ran into a friend at the station." }, accept: ["accidentally", "even number", "couple"], hint: "偶然 (ぐうぜん) = by chance." },
        { id: "ja-u118l1-i3", type: "kanji", front: "偉", reading: "i", meaning: "great", example: { jp: "あのひとはとても偉いせんせいです。", en: "That person is a very eminent teacher." }, accept: ["admirable", "eminent", "remarkable"], hint: "偉い (えらい) = great / admirable." },
        { id: "ja-u118l1-byo", type: "kanji", front: "猫", reading: "byō", meaning: "cat", example: { jp: "うちの猫はよくねています。", en: "My cat sleeps a lot." }, accept: ["kitten"], hint: "猫 (ねこ) = cat." },
        { id: "ja-u118l1-ki8", type: "kanji", front: "幾", reading: "ki", meaning: "how many", example: { jp: "りんごは幾つありますか。", en: "How many apples are there?" }, accept: ["how much", "several", "some"], hint: "幾つ (いくつ) = how many." },
      ],
    },
  ],
};
