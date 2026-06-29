// Unit 17 — かんじ・かず2 ("Kanji: bigger numbers & position") — A1 / N5
// Hundreds–ten-thousands + money (百千万円), the 間 'interval' kanji, and the
// position kanji 右左前後外 (the kanji behind Unit 10's みぎ/ひだり/まえ/うしろ).
// type:"kanji"; recognition/recall test the meaning; primary N5 reading shown;
// production traces. Examples reuse taught kanji (U11/13–15) + known kana.
export const UNIT17 = {
  id: "ja-u17",
  lang: "ja",
  title: "かんじ・かず2",
  order: 17,
  stage: "a1",
  lessons: [
    // Lesson 1: big numbers, money, interval
    {
      id: "ja-u17l1",
      unit: 17,
      lesson: 1,
      title: "Hundreds & money",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read 百 千 万 円 (prices) and 間 (interval) — 百円, 千円, 一万円, 時間.",
      items: [
        { id: "ja-u17l1-hyaku", type: "kanji", front: "百", reading: "hyaku", meaning: "hundred", example: { jp: "これは百円です。", en: "This is 100 yen." }, accept: ["100", "one hundred"], hint: "百 = hundred — 一 (one) over 白 (white). 三百 = three hundred." },
        { id: "ja-u17l1-sen", type: "kanji", front: "千", reading: "sen", meaning: "thousand", example: { jp: "千円です。", en: "It's 1,000 yen." }, accept: ["1000", "one thousand"], hint: "千 = thousand — like 十 (ten) with a stroke on top. 三千 = three thousand." },
        { id: "ja-u17l1-man", type: "kanji", front: "万", reading: "man", meaning: "ten thousand", example: { jp: "一万円です。", en: "It's 10,000 yen." }, accept: ["10000", "10,000"], hint: "万 = ten thousand. 一万 = 10,000 — the big round unit in Japanese counting." },
        { id: "ja-u17l1-en", type: "kanji", front: "円", reading: "en", meaning: "yen", example: { jp: "五百円です。", en: "It's 500 yen." }, accept: ["circle", "round", "japanese yen"], hint: "円 = yen (also 'circle/round'). Japan's money: 百円 = 100 yen." },
        { id: "ja-u17l1-aida", type: "kanji", front: "間", reading: "aida", meaning: "interval", example: { jp: "時間があります。", en: "I have time." }, accept: ["between", "space", "while", "gap"], hint: "間 = interval / between — 門 (gate) with 日 (sun) showing through. 時間 = time (a span of hours)." },
      ],
    },
    // Lesson 2: position & direction
    {
      id: "ja-u17l2",
      unit: 17,
      lesson: 2,
      title: "Right, left, front, back",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read 右 左 前 後 外 — the kanji for みぎ/ひだり/まえ/うしろ and 'outside'.",
      items: [
        { id: "ja-u17l2-migi", type: "kanji", front: "右", reading: "migi", meaning: "right", example: { jp: "みせの右です。", en: "It's to the right of the shop." }, accept: ["right side"], hint: "右 = right. You know it as みぎ (Unit 10)." },
        { id: "ja-u17l2-hidari", type: "kanji", front: "左", reading: "hidari", meaning: "left", example: { jp: "えきの左です。", en: "It's to the left of the station." }, accept: ["left side"], hint: "左 = left. You know it as ひだり. The bottom differs from 右." },
        { id: "ja-u17l2-mae", type: "kanji", front: "前", reading: "mae", meaning: "front", example: { jp: "えきの前です。", en: "It's in front of the station." }, accept: ["before", "in front"], hint: "前 = front / before (まえ). 午前 = a.m. ('before noon')." },
        { id: "ja-u17l2-ushiro", type: "kanji", front: "後", reading: "ushiro", meaning: "behind", example: { jp: "いえの後です。", en: "It's behind the house." }, accept: ["after", "back"], hint: "後 = behind / after (うしろ). 午後 = p.m. ('after noon')." },
        { id: "ja-u17l2-soto", type: "kanji", front: "外", reading: "soto", meaning: "outside", example: { jp: "外はさむいです。", en: "It's cold outside." }, accept: ["outdoors", "out"], hint: "外 = outside — 夕 (evening) + 卜. The opposite of 中 (inside)." },
      ],
    },
  ],
};
