// Unit 11 — かんじ・かず・じかん (Numbers & time kanji) — A1 / JLPT N5
// Consolidated kanji unit (category: numbers & time kanji). Kanji regrouped by
// meaning from the earlier thin units so each unit is a coherent set. type:"kanji" —
// recognition/recall test the meaning, production traces. KanjiVG strokes by glyph.
// lang/unit/lesson stamped in index.js.
export const UNIT11 = {
  id: "ja-u11",
  lang: "ja",
  title: "かんじ・かず・じかん",
  order: 11,
  stage: "a1",
  lessons: [
    {
      id: "ja-u11l1",
      unit: 11,
      lesson: 1,
      title: "Numbers & time kanji 1",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the first six number kanji: 一 二 三 四 五 六.",
      items: [
        { id: "ja-u11l1-ichi", type: "kanji", front: "一", reading: "ichi", meaning: "one", example: { jp: "一、二、三。", en: "One, two, three." }, accept: ["1"] },
        { id: "ja-u11l1-ni", type: "kanji", front: "二", reading: "ni", meaning: "two", example: { jp: "二、三、四。", en: "Two, three, four." }, accept: ["2"] },
        { id: "ja-u11l1-san", type: "kanji", front: "三", reading: "san", meaning: "three", example: { jp: "三、四、五。", en: "Three, four, five." }, accept: ["3"] },
        { id: "ja-u11l1-yon", type: "kanji", front: "四", reading: "yon", meaning: "four", example: { jp: "四、五、六。", en: "Four, five, six." }, accept: ["4","shi"] },
        { id: "ja-u11l1-go", type: "kanji", front: "五", reading: "go", meaning: "five", example: { jp: "五、六、七。", en: "Five, six, seven." }, accept: ["5"] },
        { id: "ja-u11l1-roku", type: "kanji", front: "六", reading: "roku", meaning: "six", example: { jp: "六、七、八。", en: "Six, seven, eight." }, accept: ["6"] },
      ],
    },
    {
      id: "ja-u11l2",
      unit: 11,
      lesson: 2,
      title: "Numbers & time kanji 2",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read 七 八 九 十, plus the big units 百 (100) and 千 (1000).",
      items: [
        { id: "ja-u11l2-nana", type: "kanji", front: "七", reading: "nana", meaning: "seven", example: { jp: "七、八、九。", en: "Seven, eight, nine." }, accept: ["7","shichi"] },
        { id: "ja-u11l2-hachi", type: "kanji", front: "八", reading: "hachi", meaning: "eight", example: { jp: "八、九、十。", en: "Eight, nine, ten." }, accept: ["8"] },
        { id: "ja-u11l2-kyu", type: "kanji", front: "九", reading: "kyū", meaning: "nine", example: { jp: "七、八、九。", en: "Seven, eight, nine." }, accept: ["9","ku"] },
        { id: "ja-u11l2-ju", type: "kanji", front: "十", reading: "jū", meaning: "ten", example: { jp: "十、十一、十二。", en: "Ten, eleven, twelve." }, accept: ["10"] },
        { id: "ja-u11l2-hyaku", type: "kanji", front: "百", reading: "hyaku", meaning: "hundred", example: { jp: "これは百円です。", en: "This is 100 yen." }, accept: ["100","one hundred"], hint: "百 = hundred — 一 (one) over 白 (white). 三百 = three hundred." },
        { id: "ja-u11l2-sen", type: "kanji", front: "千", reading: "sen", meaning: "thousand", example: { jp: "千円です。", en: "It's 1,000 yen." }, accept: ["1000","one thousand"], hint: "千 = thousand — like 十 (ten) with a stroke on top. 三千 = three thousand." },
      ],
    },
    {
      id: "ja-u11l3",
      unit: 11,
      lesson: 3,
      title: "Numbers & time kanji 3",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read 万 (10,000) and 円 (yen), and tell time with 何 時 分 半.",
      items: [
        { id: "ja-u11l3-man", type: "kanji", front: "万", reading: "man", meaning: "ten thousand", example: { jp: "一万円です。", en: "It's 10,000 yen." }, accept: ["10000","10,000"], hint: "万 = ten thousand. 一万 = 10,000 — the big round unit in Japanese counting." },
        { id: "ja-u11l3-en", type: "kanji", front: "円", reading: "en", meaning: "yen", example: { jp: "五百円です。", en: "It's 500 yen." }, accept: ["circle","round","japanese yen"], hint: "円 = yen (also 'circle/round'). Japan's money: 百円 = 100 yen." },
        { id: "ja-u11l3-nani", type: "kanji", front: "何", reading: "nani", meaning: "what", example: { jp: "何時ですか。", en: "What time is it?" }, accept: ["what?"], hint: "何 = what, the question kanji. You already know it as なに / なん — 何時 (なんじ) = what time." },
        { id: "ja-u11l3-ji", type: "kanji", front: "時", reading: "ji", meaning: "o'clock", example: { jp: "三時です。", en: "It's 3 o'clock." }, accept: ["time","hour"], hint: "時 has 日 (sun) on the left — the sun marks the TIME. Read じ: 三時 = 3 o'clock." },
        { id: "ja-u11l3-fun", type: "kanji", front: "分", reading: "fun", meaning: "minute", example: { jp: "五分です。", en: "It's five minutes." }, accept: ["minutes"], hint: "分 means to divide — a minute is a slice of the hour. Read ふん/ぷん: 五分 = 5 minutes." },
        { id: "ja-u11l3-han", type: "kanji", front: "半", reading: "han", meaning: "half", example: { jp: "四時半です。", en: "It's half past four." }, accept: ["half past"], hint: "半 = half. 四時半 = half past four — a symmetric shape, split down the middle." },
      ],
    },
    {
      id: "ja-u11l4",
      unit: 11,
      lesson: 4,
      title: "Numbers & time kanji 4",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the calendar kanji: 午 (noon), 曜 (day), 週 (week), 年 (year), 今 (now), 毎 (every).",
      items: [
        { id: "ja-u11l4-go2", type: "kanji", front: "午", reading: "go", meaning: "noon", example: { jp: "午前と午後。", en: "a.m. and p.m." }, accept: ["midday"], hint: "午 = noon. It lives in 午前 (a.m., 'before noon') and 午後 (p.m., 'after noon')." },
        { id: "ja-u11l4-yo", type: "kanji", front: "曜", reading: "yō", meaning: "day of the week", example: { jp: "月曜日です。", en: "It's Monday." }, accept: ["weekday"], hint: "曜 carries 日 (day) on the left and only shows up in 曜日 (day of the week): 月曜日 Monday, 日曜日 Sunday." },
        { id: "ja-u11l4-shu", type: "kanji", front: "週", reading: "shū", meaning: "week", example: { jp: "今週はやすみです。", en: "I'm off this week." }, accept: ["weeks"], hint: "週 = week. 今週 = this week, 毎週 = every week." },
        { id: "ja-u11l4-nen", type: "kanji", front: "年", reading: "nen", meaning: "year", example: { jp: "一年です。", en: "It's one year." }, accept: ["years"], hint: "年 = year. 一年 = one year, 毎年 = every year." },
        { id: "ja-u11l4-ima", type: "kanji", front: "今", reading: "ima", meaning: "now", example: { jp: "今、三時です。", en: "It's 3 o'clock now." }, accept: ["this (moment)"], hint: "今 = now. Alone it's いま; 今日 = きょう (today), 今週 = this week." },
        { id: "ja-u11l4-mai", type: "kanji", front: "毎", reading: "mai", meaning: "every", example: { jp: "毎日べんきょうします。", en: "I study every day." }, accept: ["each"], hint: "毎 = every. It stacks in front: 毎日 every day, 毎週 every week, 毎年 every year." },
      ],
    },
  ],
};
