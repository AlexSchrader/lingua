// Unit 46 — ぶんぽう・7 ("Grammar: comparison & degree") — A2 / JLPT N4
// Comparison and degree: より (than) and ほうが (the ~ side is more) for A-vs-B
// comparisons, すぎる (too much) on a stem, verb-stem + やすい / にくい (easy /
// hard to do), and paired ～たり～たり (do things like). Modeled as function-word
// /suffix vocab whose examples carry the pattern; every example uses simple,
// earlier vocab.
// NOTE: naturalness-critical — flagged for the batch native review.
// lang/unit/lesson stamped in index.js.
export const UNIT46 = {
  id: "ja-u46",
  lang: "ja",
  title: "ぶんぽう・7",
  order: 46,
  stage: "a2",
  lessons: [
    {
      id: "ja-u46l1",
      unit: 46,
      lesson: 1,
      title: "Comparison & degree",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Compare two things (AはBより / Bのほうが), say 'too much' (すぎる), 'easy/hard to do' (やすい・にくい), and list examples (～たり～たり).",
      items: [
        { id: "ja-u46l1-yori", type: "vocab", front: "より", reading: "yori", meaning: "than", example: { jp: "でんしゃはバスよりはやいです。", en: "The train is faster than the bus." }, accept: ["more than", "compared to"], hint: "A は B より ~ = 'A is more ~ than B'. B より marks the thing you compare against: バスより = 'than the bus'." },
        { id: "ja-u46l1-hoga", type: "vocab", front: "ほうが", reading: "hōga", meaning: "more / the ~ side (is more)", example: { jp: "でんしゃのほうがはやいです。", en: "The train is faster (of the two)." }, accept: ["the ~ one is more", "rather"], hint: "B のほうが ~ = 'B is the more ~ one'. Pairs with より: バスより でんしゃのほうが はやい = 'the train is faster than the bus'." },
        { id: "ja-u46l1-sugiru", type: "vocab", front: "すぎる", reading: "sugiru", meaning: "too much / excessively", example: { jp: "きのう、たべすぎました。", en: "I ate too much yesterday." }, accept: ["too", "excessively"], hint: "Attach to a verb stem or adjective stem for 'too ~': たべ + すぎる = eat too much; たか + すぎる = too expensive." },
        { id: "ja-u46l1-yasui", type: "vocab", front: "やすい", reading: "yasui", meaning: "easy to (do)", example: { jp: "このほんはわかりやすいです。", en: "This book is easy to understand." }, accept: ["easy to do"], hint: "verb-stem + やすい = 'easy to ~': わかります → わかり + やすい = easy to understand." },
        { id: "ja-u46l1-nikui", type: "vocab", front: "にくい", reading: "nikui", meaning: "hard to (do)", example: { jp: "このじはよみにくいです。", en: "This handwriting is hard to read." }, accept: ["hard to do", "difficult to do"], hint: "verb-stem + にくい = 'hard to ~': よみます → よみ + にくい = hard to read. Opposite of やすい." },
        { id: "ja-u46l1-tari", type: "vocab", front: "たり", reading: "tari", meaning: "do things like (~たり~たり)", example: { jp: "にちようびは、ほんをよんだり、テレビをみたりします。", en: "On Sundays I do things like read books and watch TV." }, accept: ["and so on", "things like"], hint: "past-form + り, paired: ～たり～たりします lists a few example activities (not an exhaustive list): よんだり みたり します." },
      ],
    },
  ],
};
