// Unit 7 — かず・じかん ("Numbers & Time") — first A1 thematic unit
// With both kana scripts done (Units 1-6), the curriculum shifts from learning
// shapes to learning words. This is the first A1-stage unit: native vocab written
// in kana, example sentences built only from grammar the learner already has
// (は/を/が/に/で/の + です/ます, plus the fixed question frames なんですか /
// どこですか / なんじですか). No new card kinds — these are vocab items.
// Theme: count 0-10,000, tell the time, and name parts of the day.
// lang/unit/lesson stamped in index.js.
export const UNIT7 = {
  id: "ja-u7",
  lang: "ja",
  title: "かず・じかん",
  order: 7,
  stage: "a1",
  lessons: [
    // Lesson 1: numbers 0-5
    {
      id: "ja-u7l1",
      unit: 7,
      lesson: 1,
      title: "Numbers 1–5",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count from zero to five in Japanese: ぜろ いち に さん よん ご.",
      items: [
        { id: "ja-u7l1-ichi", type: "vocab", front: "いち", reading: "ichi", meaning: "one", example: { jp: "いち、に、さん。", en: "One, two, three." }, drill: { jp: "いちえんのコインです。", en: "It's a one-yen coin." }, accept: ["1", "the number one", "numeral one"], hint: "I-chi — two beats, ち is chi. ⚠️ Counting out loud it is いち, but inside a compound it often shortens: いっぷん one minute, いっぽん one bottle. The held ッ is the sound of いち being squeezed." },
        { id: "ja-u7l1-ni", type: "vocab", front: "に", reading: "ni", meaning: "two", example: { jp: "に、さん、よん。", en: "Two, three, four." }, drill: { jp: "にはすうじです。", en: "Two is a number." }, accept: ["2", "the number two", "numeral two"], hint: "NI — one beat, nee. ⚠️ Identical to the particle に meaning at or to, which you have already met in あさにのみます. The number ni never follows a noun; the particle always does. Position tells you which." },
        { id: "ja-u7l1-san", type: "vocab", front: "さん", reading: "san", meaning: "three", example: { jp: "さん、よん、ご。", en: "Three, four, five." }, drill: { jp: "さんじにきます。", en: "I come at three o'clock." }, accept: ["3", "the number three", "numeral three"], hint: "SAN — two beats, the ん held: sa-n. ⚠️ Said exactly like the さん you add to a name (たなかさん). Nothing in the sound separates them — only where the word sits." },
        { id: "ja-u7l1-yon", type: "vocab", front: "よん", reading: "yon", meaning: "four", example: { jp: "よん、ご、ろく。", en: "Four, five, six." }, drill: { jp: "よんじゅうえんです。", en: "It's forty yen." }, accept: ["4", "shi", "the number four", "numeral four"], hint: "YON — two beats, the ン held. ⚠️ Four has TWO readings: よん and し. し also means death, so Japanese avoids it — hospitals skip room 4, and you count よん by default. In よっか, the 4th of the month, it shortens again." },
        { id: "ja-u7l1-go", type: "vocab", front: "ご", reading: "go", meaning: "five", example: { jp: "ご、ろく、なな。", en: "Five, six, seven." }, drill: { jp: "ごをかきます。", en: "I write a five." }, accept: ["5", "the number five", "numeral five"], hint: "GO — one beat, hard g. ⚠️ Three everyday words sound the same: ご five, ご the language suffix (にほんご), and the honorific ご. All one short syllable, all told apart by position alone." },
        { id: "ja-u7l1-zero", type: "vocab", front: "ぜろ", reading: "zero", meaning: "zero", example: { jp: "ぜろ、いち、に。", en: "Zero, one, two." }, drill: { jp: "ぜろをかきます。", en: "I write a zero." }, accept: ["0", "rei", "nought", "nil"], hint: "ZE-ro — two beats, ぜ buzzed, tapped r. Borrowed from English but written in hiragana here. Japanese has two natives too: れい in formal counting, and まる, circle, when reading a phone number aloud." },
      ],
    },
    // Lesson 2: numbers 6-10
    {
      id: "ja-u7l2",
      unit: 7,
      lesson: 2,
      title: "Numbers 6–10",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count from six to ten: ろく なな はち きゅう じゅう.",
      items: [
        { id: "ja-u7l2-roku", type: "vocab", front: "ろく", reading: "roku", meaning: "six", example: { jp: "ろく、なな、はち。", en: "Six, seven, eight." }, drill: { jp: "ろくじにおきます。", en: "I get up at six o'clock." }, accept: ["6", "the number six", "numeral six"], hint: "RO-ku — two beats, tapped r. ⚠️ It squeezes before a p or h sound: ろっぷん six minutes, ろっぴゃく six hundred. Watch for the held ッ and you will hear the ろく underneath it." },
        { id: "ja-u7l2-nana", type: "vocab", front: "なな", reading: "nana", meaning: "seven", example: { jp: "なな、はち、きゅう。", en: "Seven, eight, nine." }, drill: { jp: "ななひゃくえんです。", en: "It's seven hundred yen." }, accept: ["7", "shichi", "the number seven", "numeral seven"], hint: "NA-na — two flat beats, the same kana twice. ⚠️ Seven also has TWO readings: なな and しち. しち is easy to mishear as いち on a phone, so なな is what people say when it matters." },
        { id: "ja-u7l2-hachi", type: "vocab", front: "はち", reading: "hachi", meaning: "eight", example: { jp: "はち、きゅう、じゅう。", en: "Eight, nine, ten." }, drill: { jp: "はちじにがっこうにいきます。", en: "I go to school at eight o'clock." }, accept: ["8", "the number eight", "numeral eight"], hint: "HA-chi — two beats, ち is chi. ⚠️ It squeezes too: はっぷん eight minutes, はっぴゃく eight hundred. Eight is the lucky number in Japan, because its kanji 八 widens as it goes down." },
        { id: "ja-u7l2-kyu", type: "vocab", front: "きゅう", reading: "kyū", meaning: "nine", example: { jp: "なな、はち、きゅう。", en: "Seven, eight, nine." }, drill: { jp: "きゅうじゅうえんです。", en: "It's ninety yen." }, accept: ["9", "ku", "the number nine", "numeral nine"], hint: "KYOO — two beats: kyu-u, きゅ a single sound with the う lengthening it. ⚠️ Nine's other reading, く, sounds like the word for suffering, so it is the unlucky partner of four. きゅう is the safe default." },
        { id: "ja-u7l2-ju", type: "vocab", front: "じゅう", reading: "jū", meaning: "ten", example: { jp: "はち、きゅう、じゅう。", en: "Eight, nine, ten." }, drill: { jp: "じゅうえんのきってです。", en: "It's a ten-yen stamp." }, accept: ["10", "the number ten", "numeral ten"], hint: "JOO — two beats: ju-u. ⚠️ Japanese builds the teens and tens straight off it with no new words: じゅういち is ten-one, にじゅう is two-ten. Learn one to ten and you can say every number to ninety-nine." },
        { id: "ja-u7l2-kazu", type: "vocab", front: "かず", reading: "kazu", meaning: "number", example: { jp: "すきなかずはなんですか。", en: "What's your favorite number?" }, drill: { jp: "おおきいかずです。", en: "It's a big number." }, accept: ["count", "numbers", "quantity", "figure"], hint: "KA-zu — two beats, ず buzzed. ⚠️ This is HOW MANY — the quantity. A written digit is すうじ and a phone number is ばんごう. English says number for all three; Japanese does not." },
      ],
    },
    // Lesson 3: bigger numbers + money (えん)
    {
      id: "ja-u7l3",
      unit: 7,
      lesson: 3,
      title: "Bigger numbers",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read tens, hundreds, thousands and prices in yen (えん).",
      items: [
        { id: "ja-u7l3-juichi", type: "vocab", front: "じゅういち", reading: "jūichi", meaning: "eleven", example: { jp: "じゅう、じゅういち、じゅうに。", en: "Ten, eleven, twelve." }, drill: { jp: "じゅういちじです。", en: "It's eleven o'clock." }, accept: ["11", "the number eleven", "numeral eleven"], hint: "ju-u-I-chi — four beats. Ten plus one, said in that order and with nothing joining them. ⚠️ No teen words at all in Japanese: twelve is じゅうに, nineteen is じゅうきゅう. The hard part is already behind you." },
        { id: "ja-u7l3-niju", type: "vocab", front: "にじゅう", reading: "nijū", meaning: "twenty", example: { jp: "じゅう、にじゅう、さんじゅう。", en: "Ten, twenty, thirty." }, drill: { jp: "にじゅうえんのガムです。", en: "It's twenty-yen gum." }, accept: ["20", "the number twenty", "two tens", "numeral twenty"], hint: "ni-JOO — three beats: ni-ju-u. Two times ten, in that order. ⚠️ The multiplier comes FIRST and the ten second, which is the reverse of じゅういち — にじゅう is twenty, じゅうに is twelve. One swap, eight apart." },
        { id: "ja-u7l3-hyaku", type: "vocab", front: "ひゃく", reading: "hyaku", meaning: "hundred", example: { jp: "これはひゃくえんです。", en: "This is 100 yen." }, drill: { jp: "ひゃくえんのパンです。", en: "It's hundred-yen bread." }, accept: ["100", "one hundred", "a hundred", "the number 100"], hint: "HYA-ku — two beats, ひゃ a single sound. ⚠️ Said alone it is just ひゃく, never いちひゃく — Japanese drops the one. But it does change shape after some digits: ろっぴゃく six hundred, はっぴゃく eight hundred, さんびゃく three hundred." },
        { id: "ja-u7l3-sen", type: "vocab", front: "せん", reading: "sen", meaning: "thousand", example: { jp: "せんえんです。", en: "It's 1,000 yen." }, drill: { jp: "このほんはせんえんです。", en: "This book is a thousand yen." }, accept: ["1000", "one thousand", "a thousand", "1,000"], hint: "SEN — two beats, the ん held. ⚠️ Alone it is せん, with no いち in front, the same as ひゃく. It voices after three: さんぜん, three thousand. ⚠️ Not the same word as せんせい, which just starts the same way." },
        { id: "ja-u7l3-man", type: "vocab", front: "まん", reading: "man", meaning: "ten thousand", example: { jp: "いちまんえんです。", en: "It's 10,000 yen." }, drill: { jp: "ごまんえんです。", en: "It's fifty thousand yen." }, accept: ["10000", "10,000", "a myriad", "ten-thousand"], hint: "MAN — two beats, the ん held. 🚨 THIS IS WHERE JAPANESE NUMBERS STOP MATCHING ENGLISH. Japanese groups by ten thousands, not thousands, so 100,000 is じゅうまん, ten-まん. ⚠️ And it is always いちまん, never bare まん — unlike ひゃく and せん." },
        { id: "ja-u7l3-en", type: "vocab", front: "えん", reading: "en", meaning: "yen", example: { jp: "ごひゃくえんです。", en: "It's 500 yen." }, drill: { jp: "じゅうえんはちいさいです。", en: "Ten yen is small." }, accept: ["yen (currency)", "japanese yen", "JPY", "the yen"], hint: "EN — two beats, the ん held: e-n. ⚠️ The Japanese name is en, not yen — the y is an English spelling habit from the 1800s. The same word means circle, which is why the symbol is a round 円." },
      ],
    },
    // Lesson 4: telling the time
    {
      id: "ja-u7l4",
      unit: 7,
      lesson: 4,
      title: "Telling time",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Tell the time with じ (o'clock), ふん (minutes), はん (half past), ごぜん/ごご (a.m./p.m.).",
      items: [
        { id: "ja-u7l4-ji", type: "vocab", front: "じ", reading: "ji", meaning: "o'clock", example: { jp: "いま、さんじです。", en: "It's 3 o'clock now." }, drill: { jp: "くじにでんわをします。", en: "I'll call at nine o'clock." }, accept: ["hour", "hours", "the hour", "o clock"], hint: "JI — one beat. A suffix, never a word on its own: you attach it to a number, さんじ three o'clock. ⚠️ Four o'clock is よじ, not よんじ, and nine is くじ, not きゅうじ — the two numbers that change reading are exactly the two with twin readings." },
        { id: "ja-u7l4-fun", type: "vocab", front: "ふん", reading: "fun", meaning: "minute", example: { jp: "ごふんです。", en: "It's five minutes." }, drill: { jp: "ごふんのさんぽです。", en: "It's a five-minute walk." }, accept: ["minutes", "pun", "the minute", "minute (of time)"], hint: "FUN — two beats, soft blown ふ. ⚠️ It becomes ぷん after most digits: いっぷん, さんぷん, じゅっぷん. ふん survives after four, five, seven and nine — よんふん, ごふん, ななふん, きゅうふん. Listen for the little p." },
        { id: "ja-u7l4-ima", type: "vocab", front: "いま", reading: "ima", meaning: "now", example: { jp: "いま、なんじですか。", en: "What time is it now?" }, drill: { jp: "いまはあさです。", en: "It is morning now." }, accept: ["right now", "at present", "at the moment", "currently"], hint: "I-ma — two beats, ee-ma. ⚠️ Said aloud it is the same as いま meaning a living room, written 居間. いまは with the topic particle is the one that means as of now; いまに is into the room." },
        { id: "ja-u7l4-han", type: "vocab", front: "はん", reading: "han", meaning: "half past", example: { jp: "しちじはんです。", en: "It's half past seven." }, drill: { jp: "くじはんにいきます。", en: "I go at half past nine." }, accept: ["half", "thirty (minutes)", "thirty past", "a half"], hint: "HAN — two beats, the ん held. It goes AFTER the hour: さんじはん, three-o'clock-half. ⚠️ There is no half to form — Japanese never says はんさんじ. And it only ever means thirty past, never half to." },
        { id: "ja-u7l4-gozen", type: "vocab", front: "ごぜん", reading: "gozen", meaning: "a.m.", example: { jp: "ごぜんくじです。", en: "It's 9 a.m." }, drill: { jp: "ごぜんはちじです。", en: "It's eight a.m." }, accept: ["morning", "am", "in the morning", "before noon"], hint: "go-ZEN — three beats, ぜ buzzed, the ん held. Literally before noon. ⚠️ It goes BEFORE the hour, the opposite of はん: ごぜんくじ, a.m.-nine-o'clock. Its partner ごご is in the next card." },
        { id: "ja-u7l4-gogo", type: "vocab", front: "ごご", reading: "gogo", meaning: "p.m.", example: { jp: "ごごさんじです。", en: "It's 3 p.m." }, drill: { jp: "ごごにプールにいきます。", en: "I go to the pool in the afternoon." }, accept: ["afternoon", "pm", "in the afternoon", "after noon"], hint: "go-GO — two beats, the same kana twice, both hard g. Literally after noon. ⚠️ Like ごぜん it goes BEFORE the hour: ごごさんじ, p.m.-three-o'clock. ⚠️ Do not read it as ご-five plus ご — it is one word." },
        { id: "ja-u7l4-chodo", type: "vocab", front: "ちょうど", reading: "chōdo", meaning: "exactly", example: { jp: "ちょうどさんじです。", en: "It's exactly three o'clock." }, drill: { jp: "ちょうどじゅうじです。", en: "It's exactly ten o'clock." }, accept: ["just", "precisely", "right on", "exactly on"], hint: "CHOH-do — three beats, ちょ a single sound with the う lengthening it. Goes in front of what it measures: ちょうどさんじ, exactly three. ⚠️ ちょっと, a little, looks close but holds a ッ instead — opposite jobs, one mark apart." },
        { id: "ja-u7l4-byo", type: "vocab", front: "びょう", reading: "byō", meaning: "second", example: { jp: "じゅうびょうです。", en: "It's ten seconds." }, drill: { jp: "ごじゅうびょうです。", en: "It's fifty seconds." }, accept: ["seconds", "the second", "second (of time)", "a second"], hint: "BYOH — two beats: byo-o, びょ a single sound lengthened by the う. A suffix like じ and ふん, attached to a number. ⚠️ It never changes shape the way ふん does: じゅうびょう, にじゅうびょう, always びょう." },
      ],
    },
    // Lesson 5: days & parts of the day
    {
      id: "ja-u7l5",
      unit: 7,
      lesson: 5,
      title: "Today & the day",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say きょう/あした/きのう and name parts of the day (あさ ひる ばん).",
      items: [
        { id: "ja-u7l5-kyo", type: "vocab", front: "きょう", reading: "kyō", meaning: "today", example: { jp: "きょうはやすみです。", en: "Today is a day off." }, drill: { jp: "きょうはあめです。", en: "It is raining today." }, accept: ["this day", "the present day", "today's"], hint: "KYOH — two beats: kyo-o, きょ a single sound lengthened. ⚠️ Keep it apart from きょねん, last year, and from the きょう in とうきょう. The whole word is two beats, so saying ki-yo-o marks you out at once." },
        { id: "ja-u7l5-ashita", type: "vocab", front: "あした", reading: "ashita", meaning: "tomorrow", example: { jp: "あした、がっこうにいきます。", en: "Tomorrow I go to school." }, drill: { jp: "あしたテストがあります。", en: "There is a test tomorrow." }, accept: ["the next day", "tomorrow's", "the following day"], hint: "a-SHI-ta — three beats. ⚠️ Three words for the day after, in rising formality: あした everyday, あす on the news, みょうにち in writing. ⚠️ Not あさって, which skips a day and is in this same lesson." },
        { id: "ja-u7l5-kino", type: "vocab", front: "きのう", reading: "kinō", meaning: "yesterday", example: { jp: "きのうと きょう。", en: "Yesterday and today." }, drill: { jp: "きのうのニュースです。", en: "It's yesterday's news." }, accept: ["the previous day", "yesterday's", "the day before"], hint: "ki-NOH — three beats: ki-no-o, the う lengthening the o. ⚠️ Said quickly it can be heard as きのこ, a mushroom — hold the long o. The day before yesterday is おととい, a word with no きのう in it at all." },
        { id: "ja-u7l5-asa", type: "vocab", front: "あさ", reading: "asa", meaning: "morning", example: { jp: "あさ、コーヒーをのみます。", en: "In the morning I drink coffee." }, drill: { jp: "あさはしずかです。", en: "The morning is quiet." }, accept: ["the morning", "early morning", "mornings", "a.m."], hint: "A-sa — two beats. The あさ of おはよう and of あさごはん, breakfast. ⚠️ Not the same as ごぜん, which is the clock's before-noon label: あさ is the part of the day you live in." },
        { id: "ja-u7l5-hiru", type: "vocab", front: "ひる", reading: "hiru", meaning: "noon", example: { jp: "ひるにたべます。", en: "I eat at noon." }, drill: { jp: "ひるはあついです。", en: "Midday is hot." }, accept: ["midday", "daytime", "lunchtime", "noon time"], hint: "HI-ru — two beats, breathy ひ, tapped r. Covers noon AND the daylight hours, so ひるごはん is lunch and ひるま is daytime. ⚠️ It is the ひる behind こんにちは being a midday greeting." },
        { id: "ja-u7l5-ban", type: "vocab", front: "ばん", reading: "ban", meaning: "evening", example: { jp: "こんばんは。", en: "Good evening." }, drill: { jp: "ばんにほんをよみます。", en: "I read a book in the evening." }, accept: ["night", "the evening", "evening time", "nighttime"], hint: "BAN — two beats, ば voiced from は, the ん held. ⚠️ This is the ばん inside こんばんは, which is literally this-ばん-is. Dinner is ばんごはん, built the same way as あさごはん and ひるごはん." },
        { id: "ja-u7l5-konban", type: "vocab", front: "こんばん", reading: "konban", meaning: "tonight", example: { jp: "こんばん、テレビをみます。", en: "Tonight I'll watch TV." }, drill: { jp: "こんばんはカレーです。", en: "Tonight it's curry." }, accept: ["this evening", "tonight's", "later tonight"], hint: "kon-BAN — four beats: ko-n-ba-n, two held ん. こん is this plus ばん evening. ⚠️ こんばん and the greeting こんばんは differ by one kana, and the one kana is the topic particle — the greeting is this-evening-is, left unfinished." },
        { id: "ja-u7l5-asatte", type: "vocab", front: "あさって", reading: "asatte", meaning: "the day after tomorrow", example: { jp: "あさっては やすみです。", en: "The day after tomorrow is a day off." }, drill: { jp: "あさってはどようびです。", en: "The day after tomorrow is Saturday." }, accept: ["day after tomorrow", "in two days", "two days from now"], hint: "a-SAT-te — four beats, the small っ holding a beat: a-sa-t-te. ⚠️ It starts like あさ, morning, and あした, tomorrow, and means neither — the held っ is the tell. Its mirror is おととい, two days back." },
      ],
    },
  ],
};
