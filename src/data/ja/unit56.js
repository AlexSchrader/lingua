// Unit 56 — じかん・よてい ("Time & Schedule") — A1 thematic
// N5 time vocabulary the learner hasn't met yet: the days of the week (どようび
// was taught earlier, so the other six come here), time-of-day and "every ~"
// words, year terms, and the future/schedule/frequency set (しょうらい, よてい,
// さいきん, これから…). Examples reuse only already-known nouns, verbs, and
// particles — no new grammar. lang/unit/lesson in index.js.
export const UNIT56 = {
  id: "ja-u56",
  lang: "ja",
  title: "じかん・よてい",
  order: 56,
  stage: "a1",
  lessons: [
    // Lesson 1: days of the week
    {
      id: "ja-u56l1",
      unit: 56,
      lesson: 1,
      title: "Days of the week",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the days of the week: にちようび げつようび かようび すいようび もくようび きんようび.",
      items: [
        { id: "ja-u56l1-nichiyoubi", type: "vocab", front: "にちようび", reading: "nichiyōbi", meaning: "Sunday", example: { jp: "にちようびはやすみです。", en: "Sunday is my day off." }, accept: ["sun"] },
        { id: "ja-u56l1-getsuyoubi", type: "vocab", front: "げつようび", reading: "getsuyōbi", meaning: "Monday", example: { jp: "げつようびにしごとをします。", en: "I work on Monday." }, accept: ["mon"] },
        { id: "ja-u56l1-kayoubi", type: "vocab", front: "かようび", reading: "kayōbi", meaning: "Tuesday", example: { jp: "かようびにえいがをみます。", en: "I watch a movie on Tuesday." }, accept: ["tue"] },
        { id: "ja-u56l1-suiyoubi", type: "vocab", front: "すいようび", reading: "suiyōbi", meaning: "Wednesday", example: { jp: "すいようびはいそがしいです。", en: "Wednesday is busy." }, accept: ["wed"] },
        { id: "ja-u56l1-mokuyoubi", type: "vocab", front: "もくようび", reading: "mokuyōbi", meaning: "Thursday", example: { jp: "もくようびにともだちにあいます。", en: "I meet a friend on Thursday." }, accept: ["thu"] },
        { id: "ja-u56l1-kinyoubi", type: "vocab", front: "きんようび", reading: "kinyōbi", meaning: "Friday", example: { jp: "きんようびのよるはたのしいです。", en: "Friday night is fun." }, accept: ["fri"] },
      ],
    },
    // Lesson 2: time of day & "every ~"
    {
      id: "ja-u56l2",
      unit: 56,
      lesson: 2,
      title: "Every day, morning & night",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say when in the day and how regularly: けさ ゆうがた こんしゅう まいあさ まいばん まいつき.",
      items: [
        { id: "ja-u56l2-kesa", type: "vocab", front: "けさ", reading: "kesa", meaning: "this morning", example: { jp: "けさパンをたべました。", en: "I ate bread this morning." }, accept: ["this a.m."] },
        { id: "ja-u56l2-yuugata", type: "vocab", front: "ゆうがた", reading: "yūgata", meaning: "evening", example: { jp: "ゆうがたにかえります。", en: "I return in the evening." }, accept: ["early evening", "dusk"] },
        { id: "ja-u56l2-konshuu", type: "vocab", front: "こんしゅう", reading: "konshū", meaning: "this week", example: { jp: "こんしゅうはいそがしいです。", en: "This week is busy." }, accept: ["the current week"] },
        { id: "ja-u56l2-maiasa", type: "vocab", front: "まいあさ", reading: "maiasa", meaning: "every morning", example: { jp: "まいあさコーヒーをのみます。", en: "I drink coffee every morning." }, accept: ["each morning"] },
        { id: "ja-u56l2-maiban", type: "vocab", front: "まいばん", reading: "maiban", meaning: "every night", example: { jp: "まいばんほんをよみます。", en: "I read a book every night." }, accept: ["every evening", "each night"] },
        { id: "ja-u56l2-maitsuki", type: "vocab", front: "まいつき", reading: "maitsuki", meaning: "every month", example: { jp: "まいつきほんをかいます。", en: "I buy a book every month." }, accept: ["monthly", "each month"] },
      ],
    },
    // Lesson 3: years & the past
    {
      id: "ja-u56l3",
      unit: 56,
      lesson: 3,
      title: "Years & the past",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about years and the past: ことし らいねん おととし むかし さいきん これから.",
      items: [
        { id: "ja-u56l3-kotoshi", type: "vocab", front: "ことし", reading: "kotoshi", meaning: "this year", example: { jp: "ことしにほんにいきます。", en: "I go to Japan this year." }, accept: ["the current year"] },
        { id: "ja-u56l3-rainen", type: "vocab", front: "らいねん", reading: "rainen", meaning: "next year", example: { jp: "らいねんだいがくにいきます。", en: "Next year I go to university." }, accept: ["the following year"] },
        { id: "ja-u56l3-ototoshi", type: "vocab", front: "おととし", reading: "ototoshi", meaning: "the year before last", example: { jp: "おととしにほんにいきました。", en: "I went to Japan the year before last." }, accept: ["two years ago"] },
        { id: "ja-u56l3-mukashi", type: "vocab", front: "むかし", reading: "mukashi", meaning: "long ago", example: { jp: "むかしはがくせいでした。", en: "Long ago I was a student." }, accept: ["the old days", "the past"] },
        { id: "ja-u56l3-saikin", type: "vocab", front: "さいきん", reading: "saikin", meaning: "recently", example: { jp: "さいきんいそがしいです。", en: "I've been busy recently." }, accept: ["lately", "these days"] },
        { id: "ja-u56l3-korekara", type: "vocab", front: "これから", reading: "korekara", meaning: "from now on", example: { jp: "これからべんきょうします。", en: "I'll study from now on." }, accept: ["from now", "after this"] },
      ],
    },
    // Lesson 4: future & schedule
    {
      id: "ja-u56l4",
      unit: 56,
      lesson: 4,
      title: "Future & plans",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about the future and plans: しょうらい よてい なんようび さいしょ さいご このごろ.",
      items: [
        { id: "ja-u56l4-shourai", type: "vocab", front: "しょうらい", reading: "shōrai", meaning: "future", example: { jp: "しょうらいがしんぱいです。", en: "I'm worried about the future." }, accept: ["one's future"] },
        { id: "ja-u56l4-yotei", type: "vocab", front: "よてい", reading: "yotei", meaning: "plan", example: { jp: "あしたのよていはなんですか。", en: "What are your plans for tomorrow?" }, accept: ["schedule", "plans"] },
        { id: "ja-u56l4-nanyoubi", type: "vocab", front: "なんようび", reading: "nanyōbi", meaning: "what day of the week", example: { jp: "きょうはなんようびですか。", en: "What day is it today?" }, accept: ["which day"] },
        { id: "ja-u56l4-saisho", type: "vocab", front: "さいしょ", reading: "saisho", meaning: "the beginning", example: { jp: "さいしょはむずかしいです。", en: "At first it's difficult." }, accept: ["first", "the start"] },
        { id: "ja-u56l4-saigo", type: "vocab", front: "さいご", reading: "saigo", meaning: "the end", example: { jp: "さいごまでがんばります。", en: "I'll try hard to the end." }, accept: ["last", "the final one"] },
        { id: "ja-u56l4-konogoro", type: "vocab", front: "このごろ", reading: "konogoro", meaning: "these days", example: { jp: "このごろさむいです。", en: "It's been cold these days." }, accept: ["nowadays", "lately"] },
      ],
    },
  ],
};
