// RU Unit 11 — Числа и время ("Numbers and time") — A1
// ─────────────────────────────────────────────────────────────────────────────
// First unit of BLOCK 2 (u11–u20). Conventions are declared in ru/unit1.js §1–§10
// and bind every card here; this header records only what is specific to u11.
//
// WHY NUMBERS COME FIRST IN THIS BLOCK. Everything else block 2 teaches counts
// something — a price (u12), a portion (u13), a floor (u15), a date (u17), a size
// (u18), a temperature (u20). Putting the numerals at u11 means every later unit
// can say how many without a forward reference.
//
// THE THREE-WAY COUNTING RULE IS TAUGHT BY EXPOSURE, NOT AS A PARADIGM. Russian
// changes the noun after a number three different ways (1 → nominative, 2–4 →
// genitive singular, 5+ → genitive plural). That is a case paradigm, and unit1.js
// §5 puts the genitive at u23–u24. So the hints on один · два · пять NAME the
// pattern and the examples show it, and no card ever asks the learner to produce
// an inflected noun. `минута` is the front; `минуты` and `минут` live in hints and
// sentences only.
//
// ⚠️ ONE LEXEME CALL RECORDED HERE, judged by hand because
// `scripts/check-front.mjs`'s LEXEME verdict is blind to Cyrillic (unit1.js §D):
//   `час` ("an hour") alongside the taught `часы` (u6, "a clock"). часы is the
//   same root, and in form it is the plural of час — but in the "clock" sense it
//   is pluralia tantum and has no singular a learner could reach. Applying the
//   test from unit1.js §D — would a learner who knows часы = a clock already know
//   час = an hour? — the answer is no; they would guess "one clock". A1 cannot
//   tell the time without час, so it is carded, with the relationship named in
//   the hint so the pair is a memory hook rather than a trap.
// Also judged and allowed: `семь` beside `семья` (u10) and `сто` beside `стоить`
// (u18) — surface twins, unrelated meanings, distinct readings.
//
// ⚠️ Example scope is NOT gated for Russian (unit1.js's closing note). Run
// `node scripts/scope-ru.mjs 11,12,13,14,15,16,17,18,19,20`; block 2 must report 0.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT11 = {
  id: "ru-u11",
  lang: "ru",
  title: "Числа и время",
  order: 11,
  stage: "a1",
  lessons: [
    {
      id: "ru-u11l1",
      unit: 11,
      lesson: 1,
      title: "Count from one to six",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count from one to six out loud, and say how many of something you have.",
      items: [
        { id: "ru-u11l1-odin", type: "vocab", front: "один", reading: "odin", meaning: "one", accept: ["a single one", "one thing", "one (masculine form)"], example: { jp: "У нас только один сын, и он уже работает.", en: "We have only one son, and he already works." }, drill: { jp: "У нас один сын", en: "We have one son" }, hint: "a-DIN, stress at the end. It AGREES like an adjective — один дом, одна мама, одно окно — and the masculine один is the form to learn first. On its own it also means alone." },
        { id: "ru-u11l1-dva", type: "vocab", front: "два", reading: "dva", meaning: "two", accept: ["a pair", "two of them", "two (masculine form)"], example: { jp: "У меня два брата, и мы часто вместе.", en: "I have two brothers, and we are often together." }, drill: { jp: "У нас два билета", en: "We have two tickets" }, hint: "DVA, one syllable. два for masculine and neuter, ДВЕ for feminine: два брата, две сестры. After 2, 3 and 4 the noun takes a special ending, so it is два брата and never два брат." },
        { id: "ru-u11l1-tri", type: "vocab", front: "три", reading: "tri", meaning: "three", accept: ["a trio", "three of them"], example: { jp: "В нашем городе три театра и один музей.", en: "In our city there are three theatres and one museum." }, drill: { jp: "Здесь три чашки", en: "There are three cups here" }, hint: "TRI, one syllable, and the same ancient word as English three. Like два it pulls the special ending onto the noun after it: три часа, три минуты." },
        { id: "ru-u11l1-chetyre", type: "vocab", front: "четыре", reading: "chetyre", meaning: "four", accept: ["a set of four", "four of them"], example: { jp: "В нашей квартире четыре окна, и это очень приятно.", en: "Our flat has four windows, and that is very pleasant." }, drill: { jp: "Здесь четыре окна", en: "There are four windows here" }, hint: "chi-TY-rye, stress on TY — four syllables for the number four, and the first е reduces to i. It is the last number that pulls the 2-to-4 ending onto its noun; from пять on the rule changes again." },
        { id: "ru-u11l1-pyat", type: "vocab", front: "пять", reading: "pyat", meaning: "five", accept: ["a set of five", "five of them"], example: { jp: "Мне нужно пять минут, а потом можно работать.", en: "I need five minutes, and then we can work." }, drill: { jp: "У нас пять билетов", en: "We have five tickets" }, hint: "PYAT, one syllable, and the ь softens the т so it ends closer to pyat-y than pyat. From пять upwards the noun after the number takes the OTHER ending: пять минут, not пять минуты." },
        { id: "ru-u11l1-shest", type: "vocab", front: "шесть", reading: "shest", meaning: "six", accept: ["a set of six", "six of them"], example: { jp: "В нашей школе шесть этажей, и я живу рядом.", en: "Our school has six floors, and I live nearby." }, drill: { jp: "Здесь шесть этажей", en: "There are six floors here" }, hint: "SHEST, one syllable, and the ь softens the т exactly as in пять. Russian writes a soft sign on every number from five to twenty — a spelling pattern worth noticing now rather than later." },
      ],
    },
    {
      id: "ru-u11l2",
      unit: 11,
      lesson: 2,
      title: "Seven to ten, and the round numbers",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count on from seven to ten, and give a round number like twenty or a hundred.",
      items: [
        { id: "ru-u11l2-sem", type: "vocab", front: "семь", reading: "sem", meaning: "seven", accept: ["a set of seven", "seven of them"], example: { jp: "Мне нужно семь минут, и я уже дома.", en: "I need seven minutes, and I am home." }, drill: { jp: "У нас семь вопросов", en: "We have seven questions" }, hint: "SYEM — the е softens the с, so it starts like the se of seminar and not like sem. Do NOT confuse it with семья, the family: the two look alike and are not related." },
        { id: "ru-u11l2-vosem", type: "vocab", front: "восемь", reading: "vosem", meaning: "eight", accept: ["a set of eight", "eight of them"], example: { jp: "У нас восемь билетов, и это уже проблема.", en: "We have eight tickets, and that is already a problem." }, drill: { jp: "Здесь восемь книг", en: "There are eight books here" }, hint: "VO-syem, stress on the first syllable. The е drops out when the word changes — восемь, восьми — which is exactly why Russian spells it with a soft sign at the end." },
        { id: "ru-u11l2-devyat", type: "vocab", front: "девять", reading: "devyat", meaning: "nine", accept: ["a set of nine", "nine of them"], example: { jp: "Моей сестре девять лет, и она уже читает.", en: "My sister is nine, and she can already read." }, drill: { jp: "Мне девять лет", en: "I am nine years old" }, hint: "DYE-vyat, stress first. Both vowels are soft, so the д and the в each lean towards the vowel after them. Nine and ten differ by one letter in Russian too — девять, десять — so learn the pair together." },
        { id: "ru-u11l2-desyat", type: "vocab", front: "десять", reading: "desyat", meaning: "ten", accept: ["a set of ten", "ten of them"], example: { jp: "В нашем городе десять музеев, и это очень хорошо.", en: "There are ten museums in our city, and that is very good." }, drill: { jp: "Здесь десять человек", en: "There are ten people here" }, hint: "DYE-syat, stress first — девять with one letter changed. Ten is where the teens come from: одиннадцать is literally one-on-ten, and the -дцать on the end is ten worn down." },
        { id: "ru-u11l2-dvadtsat", type: "vocab", front: "двадцать", reading: "dvadtsat", meaning: "twenty", accept: ["a score", "twenty of them"], example: { jp: "Мне двадцать лет, и я студент.", en: "I am twenty, and I am a student." }, drill: { jp: "Ему двадцать лет", en: "He is twenty years old" }, hint: "DVAD-tsat, stress first, and the дц runs together into a long ts: DVAT-tsat. It is два plus that worn-down -дцать, and the tens carry on the same way to fifty." },
        { id: "ru-u11l2-sto", type: "vocab", front: "сто", reading: "sto", meaning: "a hundred", accept: ["one hundred", "hundred"], example: { jp: "В нашем университете сто студентов, и это немного.", en: "Our university has a hundred students, and that is not many." }, drill: { jp: "Здесь сто человек", en: "There are a hundred people here" }, hint: "STO, one syllable, and it looks nothing like the tens because it is not built from them. Do not confuse it with стоит, it costs, which arrives in unit 18 — they only resemble each other on the page." },
      ],
    },
    {
      id: "ru-u11l3",
      unit: 11,
      lesson: 3,
      title: "Tell someone the time",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask what the time is, and answer with the hour, the half hour or the minutes.",
      items: [
        { id: "ru-u11l3-chas", type: "vocab", front: "час", reading: "chas", meaning: "an hour", accept: ["hour", "one o'clock", "the hour"], example: { jp: "Мне нужно только час, и это немного.", en: "I only need an hour, and that is not long." }, drill: { jp: "Это только один час", en: "That is only one hour" }, hint: "CHAS, one syllable. Masculine. It is BOTH an hour and one o'clock — час answers the question and names the unit. The plural часы, taught in unit 6, means a clock, which is a different word now." },
        { id: "ru-u11l3-minuta", type: "vocab", front: "минута", reading: "minuta", meaning: "a minute", accept: ["minute", "the minute", "just a minute"], example: { jp: "Ещё минута, и мама уже дома.", en: "One more minute and mum will be home." }, drill: { jp: "Минута это очень быстро", en: "A minute is very quick" }, hint: "mi-NU-ta, stress on NU. Feminine (-а). After два, три, четыре it becomes минуты; after пять and up it becomes минут. That is the counting rule from lesson 1, on a real word." },
        { id: "ru-u11l3-sekunda", type: "vocab", front: "секунда", reading: "sekunda", meaning: "a second", accept: ["second", "the second", "a moment"], example: { jp: "Ещё секунда, и я всё понимаю.", en: "One more second and I understand it all." }, drill: { jp: "Ещё секунда и мы дома", en: "One more second and we are home" }, hint: "si-KUN-da, stress on KUN. Feminine (-а). An internationalism you can read on sight — but the stress is not where English puts it: not SE-cond, but si-KUN-da." },
        { id: "ru-u11l3-vremya", type: "vocab", front: "время", reading: "vremya", meaning: "time", accept: ["the time", "a time", "times"], example: { jp: "Сейчас у меня есть время, и это очень хорошо.", en: "I have time right now, and that is very good." }, drill: { jp: "У нас есть время", en: "We have time" }, hint: "VRYE-mya, stress first. NEUTER, despite the -я ending — время belongs to a small group of neuter -мя nouns, and имя, already taught, is another. It says времени when it changes, which is why Russian says нет времени." },
        { id: "ru-u11l3-polovina", type: "vocab", front: "половина", reading: "polovina", meaning: "a half", accept: ["half", "one half", "the half"], example: { jp: "Половина моей семьи живёт в Москве.", en: "Half of my family lives in Moscow." }, drill: { jp: "Половина хлеба уже здесь", en: "Half of the bread is already here" }, hint: "pa-la-VI-na, stress on VI, and both unstressed о reduce to a. Feminine (-а). For the clock Russian counts FORWARD: половина второго is half past one, literally half of the second hour." },
        { id: "ru-u11l3-kotoryy", type: "vocab", front: "который", reading: "kotoryy", meaning: "which", accept: ["which one", "that one", "the one that"], example: { jp: "Который час сейчас, я уже не знаю.", en: "What time it is now, I no longer know." }, drill: { jp: "Я не знаю который час", en: "I do not know what time it is" }, hint: "ka-TO-ryy, stress on TO. Который час is how Russian asks the time — literally which hour. It also joins two halves of a sentence: человек, который здесь, the person who is here." },
      ],
    },
    {
      id: "ru-u11l4",
      unit: 11,
      lesson: 4,
      title: "Say when in the day something happens",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Place something in the morning or the evening, and say whether it is early, late or always the case.",
      items: [
        { id: "ru-u11l4-utro", type: "vocab", front: "утро", reading: "utro", meaning: "a morning", accept: ["morning", "the morning"], example: { jp: "Доброе утро! Мама уже здесь.", en: "Good morning! Mum is already here." }, drill: { jp: "Утро это моё время", en: "The morning is my time" }, hint: "U-tra, stress first, and the final о reduces to a. NEUTER (-о). Доброе утро is good morning; утром, worth learning whole as a fixed adverb, means in the morning." },
        { id: "ru-u11l4-vecher", type: "vocab", front: "вечер", reading: "vecher", meaning: "an evening", accept: ["evening", "the evening"], example: { jp: "Добрый вечер! Вы уже здесь?", en: "Good evening! Are you already here?" }, drill: { jp: "Уже вечер и мы дома", en: "It is evening already and we are home" }, hint: "VYE-chir, stress first; the second е reduces almost to i. Masculine (consonant ending). Russians say добрый вечер from about six o'clock on — earlier than English speakers reach for good evening." },
        { id: "ru-u11l4-rano", type: "vocab", front: "рано", reading: "rano", meaning: "early", accept: ["it is early", "too early"], example: { jp: "Сейчас ещё рано, и мама уже работает.", en: "It is still early, and mum is already working." }, drill: { jp: "Сегодня я рано дома", en: "Today I am home early" }, hint: "RA-na, stress first. It is an adverb, so it can stand as a whole sentence: Рано. Its comparative раньше, earlier, carries the same -ше ending as больше and лучше." },
        { id: "ru-u11l4-pozdno", type: "vocab", front: "поздно", reading: "pozdno", meaning: "late", accept: ["it is late", "too late"], example: { jp: "Уже поздно, но я ещё читаю.", en: "It is late already, but I am still reading." }, drill: { jp: "Сегодня очень поздно", en: "It is very late today" }, hint: "POZ-na, stress first — AND THE д IS NOT SAID. зд collapses before н, so поздно comes out POZ-na with no d in it at all. Its comparative позже means later." },
        { id: "ru-u11l4-dolgo", type: "vocab", front: "долго", reading: "dolgo", meaning: "for a long time", accept: ["a long time", "long", "at length"], example: { jp: "Мы здесь уже долго, и это очень скучно.", en: "We have been here a long time now, and it is very boring." }, drill: { jp: "Он долго читает книгу", en: "He reads the book for a long time" }, hint: "DOL-ga, stress first. It answers HOW LONG, never when — долго читать is to read for a long while. Дольше is its comparative." },
        { id: "ru-u11l4-vsegda", type: "vocab", front: "всегда", reading: "vsegda", meaning: "always", accept: ["all the time", "every time", "at all times"], example: { jp: "Наш врач всегда здесь, и это очень приятно.", en: "Our doctor is always here, and that is very pleasant." }, drill: { jp: "Мама всегда дома", en: "Mum is always at home" }, hint: "fsig-DA, stress at the end — the в says f and the е reduces to i, so it sounds nothing like it looks on the page. Its opposite никогда needs a double negative, so A1 leaves it alone." },
      ],
    },
  ],
};
