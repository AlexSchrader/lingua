// Unit 13 — かんじ・じかん ("Kanji: time & calendar") — A1 / JLPT N5
// The time-and-calendar kanji, built directly on Unit 11's day kanji (日月…土):
// telling time (何時, 〜時〜分, 半, 午前/午後) and the calendar (曜日, 週, 年, 今, 毎).
// `type: "kanji"` — recognition/recall test the meaning; the primary N5 reading is
// shown for reference; production traces. Each hint leans on the shape / a known
// reading; examples use already-taught kanji (Unit 11 + this unit) + known kana
// words. KanjiVG strokes added for all 10. lang/unit/lesson stamped in index.js.
export const UNIT13 = {
  id: "ja-u13",
  lang: "ja",
  title: "かんじ・じかん",
  order: 13,
  stage: "a1",
  lessons: [
    // Lesson 1: telling the time — 何 時 分 半 午
    {
      id: "ja-u13l1",
      unit: 13,
      lesson: 1,
      title: "Telling time",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the time kanji 何 時 分 半 午 — ask 何時 and read 〜時〜分, 半, 午前/午後.",
      items: [
        { id: "ja-u13l1-nani", type: "kanji", front: "何", reading: "nani", meaning: "what", example: { jp: "何時ですか。", en: "What time is it?" }, accept: ["what?"], hint: "何 = what, the question kanji. You already know it as なに / なん — 何時 (なんじ) = what time." },
        { id: "ja-u13l1-ji",   type: "kanji", front: "時", reading: "ji",   meaning: "o'clock", example: { jp: "三時です。", en: "It's 3 o'clock." }, accept: ["time", "hour"], hint: "時 has 日 (sun) on the left — the sun marks the TIME. Read じ: 三時 = 3 o'clock." },
        { id: "ja-u13l1-fun",  type: "kanji", front: "分", reading: "fun",  meaning: "minute", example: { jp: "五分です。", en: "It's five minutes." }, accept: ["minutes"], hint: "分 means to divide — a minute is a slice of the hour. Read ふん/ぷん: 五分 = 5 minutes." },
        { id: "ja-u13l1-han",  type: "kanji", front: "半", reading: "han",  meaning: "half", example: { jp: "四時半です。", en: "It's half past four." }, accept: ["half past"], hint: "半 = half. 四時半 = half past four — a symmetric shape, split down the middle." },
        { id: "ja-u13l1-go",   type: "kanji", front: "午", reading: "go",   meaning: "noon", example: { jp: "午前と午後。", en: "a.m. and p.m." }, accept: ["midday"], hint: "午 = noon. It lives in 午前 (a.m., 'before noon') and 午後 (p.m., 'after noon')." },
      ],
    },
    // Lesson 2: the calendar — 曜 週 年 今 毎
    {
      id: "ja-u13l2",
      unit: 13,
      lesson: 2,
      title: "Days & calendar",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the calendar kanji 曜 週 年 今 毎 — 曜日, 今週, 毎日, 今年.",
      items: [
        { id: "ja-u13l2-yo",   type: "kanji", front: "曜", reading: "yō",   meaning: "day of the week", example: { jp: "月曜日です。", en: "It's Monday." }, accept: ["weekday"], hint: "曜 carries 日 (day) on the left and only shows up in 曜日 (day of the week): 月曜日 Monday, 日曜日 Sunday." },
        { id: "ja-u13l2-shu",  type: "kanji", front: "週", reading: "shū",  meaning: "week", example: { jp: "今週はやすみです。", en: "I'm off this week." }, accept: ["weeks"], hint: "週 = week. 今週 = this week, 毎週 = every week." },
        { id: "ja-u13l2-nen",  type: "kanji", front: "年", reading: "nen",  meaning: "year", example: { jp: "一年です。", en: "It's one year." }, accept: ["years"], hint: "年 = year. 一年 = one year, 毎年 = every year." },
        { id: "ja-u13l2-ima",  type: "kanji", front: "今", reading: "ima",  meaning: "now", example: { jp: "今、三時です。", en: "It's 3 o'clock now." }, accept: ["this (moment)"], hint: "今 = now. Alone it's いま; 今日 = きょう (today), 今週 = this week." },
        { id: "ja-u13l2-mai",  type: "kanji", front: "毎", reading: "mai",  meaning: "every", example: { jp: "毎日べんきょうします。", en: "I study every day." }, accept: ["each"], hint: "毎 = every. It stacks in front: 毎日 every day, 毎週 every week, 毎年 every year." },
      ],
    },
  ],
};
