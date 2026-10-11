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
        { id: "ja-u56l1-nichiyoubi", type: "vocab", front: "にちようび", reading: "nichiyōbi", meaning: "Sunday", example: { jp: "にちようびはやすみです。", en: "Sunday is my day off." }, drill: { jp: "にちようびにこうえんにいきます。", en: "On Sunday I go to the park." }, accept: ["sun", "sun day", "day of the sun"], hint: "ni-chi-yō-bi — four beats, the よう held long. 日 (sun) + 曜日 (day of the week): the sun's day. ⚠️ All six days in this lesson end in ようび, so learn the first piece and the rest is free." },
        { id: "ja-u56l1-getsuyoubi", type: "vocab", front: "げつようび", reading: "getsuyōbi", meaning: "Monday", example: { jp: "げつようびにしごとをします。", en: "I work on Monday." }, drill: { jp: "げつようびはいそがしいです。", en: "Mondays are busy." }, accept: ["mon", "mon day", "day of the moon"], hint: "ge-tsu-yō-bi — four beats, つ is tsu, hard g. 月 (moon) + 曜日: the moon's day. ⚠️ The same 月 is つき, month, which you meet as まいつき in lesson 2." },
        { id: "ja-u56l1-kayoubi", type: "vocab", front: "かようび", reading: "kayōbi", meaning: "Tuesday", example: { jp: "かようびにえいがをみます。", en: "I watch a movie on Tuesday." }, drill: { jp: "かようびにテストがあります。", en: "There is a test on Tuesday." }, accept: ["tue", "tues", "day of fire"], hint: "ka-yō-bi — three beats. 火 (fire) + 曜日: the fire day. ⚠️ Shortest of the six, because 火 contributes a single beat — do not stretch it to かあようび." },
        { id: "ja-u56l1-suiyoubi", type: "vocab", front: "すいようび", reading: "suiyōbi", meaning: "Wednesday", example: { jp: "すいようびはいそがしいです。", en: "Wednesday is busy." }, drill: { jp: "すいようびにほんをよみます。", en: "On Wednesday I read a book." }, accept: ["wed", "weds", "day of water"], hint: "su-i-yō-bi — four beats, す and い each their own beat. 水 (water) + 曜日. ⚠️ The same 水 is みず, water. Say su-i, never swi." },
        { id: "ja-u56l1-mokuyoubi", type: "vocab", front: "もくようび", reading: "mokuyōbi", meaning: "Thursday", example: { jp: "もくようびにともだちにあいます。", en: "I meet a friend on Thursday." }, drill: { jp: "もくようびはひまです。", en: "I am free on Thursday." }, accept: ["thu", "thurs", "day of wood"], hint: "mo-ku-yō-bi — four beats. 木 (wood/tree) + 曜日: the wood day. ⚠️ The same 木 is き, a tree. The week runs sun, moon, fire, water, wood, gold." },
        { id: "ja-u56l1-kinyoubi", type: "vocab", front: "きんようび", reading: "kinyōbi", meaning: "Friday", example: { jp: "きんようびのよるはたのしいです。", en: "Friday night is fun." }, drill: { jp: "きんようびにうちにかえります。", en: "On Friday I go home." }, accept: ["fri", "fri day", "day of gold"], hint: "kin-yō-bi — three beats, the ん fully held before the y. 金 (gold/money) + 曜日. ⚠️ The same 金 is おかね, money — payday and Friday share a character." },
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
        { id: "ja-u56l2-kesa", type: "vocab", front: "けさ", reading: "kesa", meaning: "this morning", example: { jp: "けさパンをたべました。", en: "I ate bread this morning." }, drill: { jp: "けさはさむいです。", en: "It is cold this morning." }, accept: ["this a.m.", "earlier this morning", "this morning (today)"], hint: "KE-sa — two beats. Written 今朝, now + morning, but read けさ rather than こんあさ: an irregular date reading you simply learn. ⚠️ THIS morning only, never mornings in general." },
        { id: "ja-u56l2-yuugata", type: "vocab", front: "ゆうがた", reading: "yūgata", meaning: "evening (the early evening)", example: { jp: "ゆうがたにかえります。", en: "I return in the evening." }, drill: { jp: "ゆうがたにともだちとあいます。", en: "I meet a friend in the early evening." }, accept: ["early evening", "dusk", "late afternoon", "twilight"], hint: "yū-GA-ta — the ゆう is a long u, so three beats. 夕 (evening) + 方 (side): the evening side of the day. ⚠️ Earlier than よる — roughly four o'clock to dusk." },
        { id: "ja-u56l2-konshuu", type: "vocab", front: "こんしゅう", reading: "konshū", meaning: "this week", example: { jp: "こんしゅうはいそがしいです。", en: "This week is busy." }, drill: { jp: "こんしゅうはあめがおおいです。", en: "There is a lot of rain this week." }, accept: ["the current week", "this current week", "during this week"], hint: "kon-SHŪ — two beats, しゅう held long. 今 (this) + 週 (week). ⚠️ That こん is the same piece as in こんげつ and こんや — one prefix, a whole family of words." },
        { id: "ja-u56l2-maiasa", type: "vocab", front: "まいあさ", reading: "maiasa", meaning: "every morning", example: { jp: "まいあさコーヒーをのみます。", en: "I drink coffee every morning." }, drill: { jp: "まいあさたまごをたべます。", en: "I eat an egg every morning." }, accept: ["each morning", "mornings", "every a.m."], hint: "mai-A-sa — three beats. まい means every, so まい plus あさ. ⚠️ Three more words use it: まいばん, まいつき and まいにち. Learn まい once and you get all of them." },
        { id: "ja-u56l2-maiban", type: "vocab", front: "まいばん", reading: "maiban", meaning: "every night", example: { jp: "まいばんほんをよみます。", en: "I read a book every night." }, drill: { jp: "まいばんおふろにはいります。", en: "I take a bath every night." }, accept: ["every evening", "each night", "nightly"], hint: "mai-BAN — two heavy beats, the ん held. まい, every, plus ばん, night. ⚠️ ばん is the evening-and-night block; the small hours are よなか instead." },
        { id: "ja-u56l2-maitsuki", type: "vocab", front: "まいつき", reading: "maitsuki", meaning: "every month", example: { jp: "まいつきほんをかいます。", en: "I buy a book every month." }, drill: { jp: "まいつきえいがをみます。", en: "I watch a film every month." }, accept: ["monthly", "each month", "every single month"], hint: "mai-TSU-ki — three beats, つ is tsu. まい, every, plus つき, month. ⚠️ つき is also the moon: Japanese named the month after it, and げつようび uses the same character." },
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
        { id: "ja-u56l3-kotoshi", type: "vocab", front: "ことし", reading: "kotoshi", meaning: "this year", example: { jp: "ことしにほんにいきます。", en: "I go to Japan this year." }, drill: { jp: "ことしはあついです。", en: "This year is hot." }, accept: ["the current year", "this current year", "in this year"], hint: "ko-TO-shi — three beats. Written 今年, this + year, but read ことし — an irregular date reading, like けさ in lesson 2. ⚠️ Never このとし." },
        { id: "ja-u56l3-rainen", type: "vocab", front: "らいねん", reading: "rainen", meaning: "next year", example: { jp: "らいねんだいがくにいきます。", en: "Next year I go to university." }, drill: { jp: "らいねんはにほんにいきます。", en: "Next year I am going to Japan." }, accept: ["the following year", "the coming year", "a year from now"], hint: "rai-NEN — two beats, tapped r. 来 (coming) + 年 (year). ⚠️ The same 来 builds らいしゅう and らいげつ, so one piece unlocks three words." },
        { id: "ja-u56l3-ototoshi", type: "vocab", front: "おととし", reading: "ototoshi", meaning: "the year before last", example: { jp: "おととしにほんにいきました。", en: "I went to Japan the year before last." }, drill: { jp: "おととしのなつにうみにいきました。", en: "The summer before last I went to the sea." }, accept: ["two years ago", "the year before last year", "2 years ago"], hint: "o-to-TO-shi — four beats. ⚠️ TWO years back, not one — last year is きょねん. Count it as one step further than らいねん goes forward." },
        { id: "ja-u56l3-mukashi", type: "vocab", front: "むかし", reading: "mukashi", meaning: "long ago", example: { jp: "むかしはがくせいでした。", en: "Long ago I was a student." }, drill: { jp: "むかしのはなしをききます。", en: "I listen to a story from long ago." }, accept: ["the old days", "the past", "once upon a time", "in the past"], hint: "mu-KA-shi — three beats. ⚠️ Vaguer than any date: むかしむかし is how a Japanese fairy tale opens, exactly as once upon a time does." },
        { id: "ja-u56l3-saikin", type: "vocab", front: "さいきん", reading: "saikin", meaning: "recently", example: { jp: "さいきんいそがしいです。", en: "I've been busy recently." }, drill: { jp: "さいきんはあめがおおいです。", en: "There has been a lot of rain lately." }, accept: ["lately", "these days", "of late", "recent"], hint: "sai-KIN — two beats, さい is the diphthong ai. 最 (most) + 近 (near): the nearest past. ⚠️ The same 最 opens さいしょ and さいご in lesson 4." },
        { id: "ja-u56l3-korekara", type: "vocab", front: "これから", reading: "korekara", meaning: "from now on", example: { jp: "これからべんきょうします。", en: "I'll study from now on." }, drill: { jp: "これからはやさいをたくさんたべます。", en: "From now on I will eat plenty of vegetables." }, accept: ["from now", "after this", "going forward", "starting now"], hint: "ko-re-KA-ra — four beats, tapped r. これ, this, plus から, from: literally from this point. ⚠️ Its mirror is これまで, up to now." },
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
        { id: "ja-u56l4-shourai", type: "vocab", front: "しょうらい", reading: "shōrai", meaning: "future", example: { jp: "しょうらいがしんぱいです。", en: "I'm worried about the future." }, drill: { jp: "しょうらいはせんせいになります。", en: "In the future I will become a teacher." }, accept: ["one's future", "the future", "future prospects"], hint: "SHŌ-rai — しょう is a long o, so two beats. ⚠️ The DISTANT future — a career, a life. For tomorrow's arrangements use よてい, right below." },
        { id: "ja-u56l4-yotei", type: "vocab", front: "よてい", reading: "yotei", meaning: "plan (a schedule)", example: { jp: "あしたのよていはなんですか。", en: "What are your plans for tomorrow?" }, drill: { jp: "よていはまだありません。", en: "I do not have plans yet." }, accept: ["schedule", "plans", "an appointment", "arrangement"], hint: "yo-TEI — two beats; てい is a literal ei, said tei and not tay. ⚠️ A plan already written in a diary. Compare しょうらい above, which is a whole lifetime away." },
        { id: "ja-u56l4-nanyoubi", type: "vocab", front: "なんようび", reading: "nanyōbi", meaning: "what day of the week", example: { jp: "きょうはなんようびですか。", en: "What day is it today?" }, drill: { jp: "なんようびがいいですか。", en: "Which day of the week is good?" }, accept: ["which day", "what day", "which weekday"], hint: "nan-yō-bi — three beats, the ん fully held before the y. なん, what, plus ようび from lesson 1. ⚠️ Answer it with a DAY. For a date the question is なんにち." },
        { id: "ja-u56l4-saisho", type: "vocab", front: "さいしょ", reading: "saisho", meaning: "the beginning", example: { jp: "さいしょはむずかしいです。", en: "At first it's difficult." }, drill: { jp: "さいしょにみずをいれます。", en: "First you add the water." }, accept: ["first", "the start", "at first", "the first one"], hint: "sai-SHO — two beats, しょ is the yōon sho. 最 (most) + 初 (first). ⚠️ Its mirror さいご is right below, and both share the 最 of さいきん." },
        { id: "ja-u56l4-saigo", type: "vocab", front: "さいご", reading: "saigo", meaning: "the end", example: { jp: "さいごまでがんばります。", en: "I'll try hard to the end." }, drill: { jp: "さいごはたのしかったです。", en: "The end was fun." }, accept: ["last", "the final one", "the last one", "the finish"], hint: "sai-GO — two beats, hard g. 最 (most) + 後 (after): the very last one. ⚠️ The mirror of さいしょ above, and not the number ご, five." },
        { id: "ja-u56l4-konogoro", type: "vocab", front: "このごろ", reading: "konogoro", meaning: "these days", example: { jp: "このごろさむいです。", en: "It's been cold these days." }, drill: { jp: "このごろはよくあるきます。", en: "These days I walk a lot." }, accept: ["nowadays", "at present", "currently", "in recent days"], hint: "ko-no-GO-ro — four beats, hard g, tapped r. この, this, plus ころ, a stretch of time. ⚠️ Close to さいきん in lesson 3; このごろ is the more conversational of the two." },
      ],
    },
  ],
};
