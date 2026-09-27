// RU Unit 6 — Правила чтения ("Reading rules") — PRE-A1
// The last unit of the script band, and the one that closes the gap between what
// Russian PRINTS and what Russian SAYS. Four rules, none of which the page shows
// you: a voiced consonant goes quiet at the end of a word, some letters are
// simply not pronounced, г says v in -ого/-его, and жи/ши/ча/ща never spell what
// they look like. Conventions are declared in ru/unit1.js and bind every unit.
//
// ⚠️ `reading` TRANSLITERATES THE SPELLING, NOT THE PRONUNCIATION (unit1.js §1).
// So `его` reads "ego" and `сегодня` reads "segodnya", even though they are said
// yi-VO and si-VOD-nya. That is deliberate and it is one rule with no judgement
// calls: the learner types what is written, and the hint carries what is said.
// The alternative — a phonetic reading — would make `что` read "shto" and would
// leave every crew guessing which words got the treatment.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT6 = {
  id: "ru-u6",
  lang: "ru",
  title: "Правила чтения",
  order: 6,
  stage: "pre-a1",
  lessons: [
    {
      id: "ru-u6l1",
      unit: 6,
      lesson: 1,
      title: "The last letter goes quiet",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Pronounce a word whose final consonant devoices, and name six everyday things.",
      items: [
        { id: "ru-u6l1-god", type: "vocab", front: "год", reading: "god", meaning: "a year", accept: ["year", "the year"], example: { jp: "Мы здесь уже год.", en: "We have been here for a year." }, drill: { jp: "Это очень хороший год", en: "This is a very good year" }, hint: "Written год, SAID got — a д at the end of a word says t. Masculine. ⚠️ After a number it becomes года or лет, and neither of those is a separate card." },
        { id: "ru-u6l1-gorod", type: "vocab", front: "город", reading: "gorod", meaning: "a city", accept: ["city", "town", "the city"], example: { jp: "Наш город очень старый и красивый.", en: "Our city is very old and beautiful." }, drill: { jp: "Это наш город", en: "This is our city" }, hint: "GO-rat — stress first, the second о reduces to a, and the final д devoices to t. Three rules in one five-letter word. Masculine." },
        { id: "ru-u6l1-drug", type: "vocab", front: "друг", reading: "drug", meaning: "a friend", accept: ["friend", "the friend", "mate"], example: { jp: "Мой друг тоже говорит по-русски.", en: "My friend also speaks Russian." }, drill: { jp: "Это мой друг", en: "This is my friend" }, hint: "Written друг, SAID drook — a г at the end says k. Masculine, and it means a real friend; an acquaintance is знакомый." },
        { id: "ru-u6l1-khleb", type: "vocab", front: "хлеб", reading: "khleb", meaning: "bread", accept: ["the bread", "a loaf"], example: { jp: "Хлеб здесь очень хороший.", en: "The bread here is very good." }, drill: { jp: "Вот хлеб и соль", en: "Here is bread and salt" }, hint: "Written хлеб, SAID khlyep — a б at the end says p. Masculine. Хлеб и соль is the traditional Russian welcome, and the drill is that phrase." },
        { id: "ru-u6l1-raz", type: "vocab", front: "раз", reading: "raz", meaning: "one time", accept: ["once", "a time", "occasion"], example: { jp: "Мы читаем это ещё раз.", en: "We are reading this one more time." }, drill: { jp: "Ещё раз пожалуйста", en: "One more time please" }, hint: "Written раз, SAID ras — a з at the end says s. Masculine. Ещё раз, пожалуйста is how you ask anyone to repeat anything." },
        { id: "ru-u6l1-etazh", type: "vocab", front: "этаж", reading: "etazh", meaning: "a floor (storey)", accept: ["floor", "storey", "story", "level"], example: { jp: "Наш этаж очень тихий.", en: "Our floor is very quiet." }, drill: { jp: "Наш этаж здесь", en: "Our floor is here" }, hint: "e-TASH — stress at the end, and the ж devoices to sh. Masculine. This is the floor of a building, not the floor you stand on (that is пол)." },
      ],
    },
    {
      id: "ru-u6l2",
      unit: 6,
      lesson: 2,
      title: "Letters you do not say",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read six words that drop a letter when spoken, including the -его ending where г says v.",
      items: [
        { id: "ru-u6l2-konechno", type: "vocab", front: "конечно", reading: "konechno", meaning: "of course", accept: ["certainly", "sure", "naturally", "obviously"], example: { jp: "Конечно, можно.", en: "Of course you may." }, drill: { jp: "Да конечно можно", en: "Yes of course you may" }, hint: "Written конечно, SAID ka-NYESH-na — the ч says sh. It joins что (unit 2) in that small club. Learn the words, not a rule: there is no rule." },
        { id: "ru-u6l2-segodnya", type: "vocab", front: "сегодня", reading: "segodnya", meaning: "today", accept: ["this day", "nowadays"], example: { jp: "Сегодня очень хороший день, и я работаю дома.", en: "Today is a very good day, and I am working at home." }, drill: { jp: "Сегодня мы здесь работаем", en: "Today we are working here" }, hint: "Written сегодня, SAID si-VOD-nya — the г says v, because this is an old -его ending frozen into one word. Literally this day." },
        { id: "ru-u6l2-ego", type: "vocab", front: "его", reading: "ego", meaning: "his", accept: ["him", "its (masculine)", "hers no"], example: { jp: "Его друг тоже врач.", en: "His friend is also a doctor." }, drill: { jp: "Его мама тоже врач", en: "His mum is also a doctor" }, hint: "Written его, SAID yi-VO. The same г-says-v rule as сегодня, and it is the rule for EVERY -ого/-его ending in Russian. Its partner её (unit 3) has no г and no surprise." },
        { id: "ru-u6l2-solntse", type: "vocab", front: "солнце", reading: "solntse", meaning: "the sun", accept: ["sun", "sunshine"], example: { jp: "Солнце здесь очень сильное.", en: "The sun here is very strong." }, drill: { jp: "Сегодня солнце очень сильное", en: "Today the sun is very strong" }, hint: "Written солнце, SAID SON-tse — the л is silent. Neuter (-е). Russians say солнышко as a term of endearment, the way English says sunshine." },
        { id: "ru-u6l2-serdtse", type: "vocab", front: "сердце", reading: "serdtse", meaning: "a heart", accept: ["heart", "the heart"], example: { jp: "Его сердце очень сильное.", en: "His heart is very strong." }, drill: { jp: "Моё сердце здесь", en: "My heart is here" }, hint: "Written сердце, SAID SYER-tse — the д is silent. Neuter. Same shape as солнце: one silent consonant in the middle of a cluster." },
        { id: "ru-u6l2-skuchno", type: "vocab", front: "скучно", reading: "skuchno", meaning: "boring", accept: ["it is boring", "dull", "bored"], example: { jp: "Здесь очень скучно сегодня.", en: "It is very boring here today." }, drill: { jp: "Мне здесь очень скучно", en: "I am very bored here" }, hint: "Written скучно, SAID SKUSH-na — the third and last of the ч-says-sh words in this course. Мне скучно means I am bored." },
      ],
    },
    {
      id: "ru-u6l3",
      unit: 6,
      lesson: 3,
      title: "ЖИ, ШИ, ЧА, ЩА",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the four spelling combinations that lie about their own vowel, and name six things you will see every day.",
      items: [
        { id: "ru-u6l3-mashina", type: "vocab", front: "машина", reading: "mashina", meaning: "a car", accept: ["car", "machine", "the car"], example: { jp: "Его машина очень старая.", en: "His car is very old." }, drill: { jp: "Вот его машина", en: "Here is his car" }, hint: "ma-SHY-na — ши is written with и and SAID with ы, because ш cannot soften. Feminine. It also means machine, which is where the word came from." },
        { id: "ru-u6l3-chasy", type: "vocab", front: "часы", reading: "chasy", meaning: "a clock", accept: ["watch", "clock", "hours"], example: { jp: "Часы здесь не работают.", en: "The clock here does not work." }, drill: { jp: "Вот наши часы", en: "Here is our clock" }, hint: "chi-SY — ча is written with а and said closer to chi when unstressed. PLURAL ONLY for the object: one clock is часы, plural verb and all. The singular час means an hour." },
        { id: "ru-u6l3-chashka", type: "vocab", front: "чашка", reading: "chashka", meaning: "a cup", accept: ["cup", "the cup", "mug"], example: { jp: "Вот чашка, а вот молоко.", en: "Here is a cup, and here is milk." }, drill: { jp: "Вот чашка чая", en: "Here is a cup of tea" }, hint: "CHASH-ka, feminine. Soft ч, hard ш, in one syllable. Чашка чая is a cup of tea — and чая is what чай becomes after a quantity." },
        { id: "ru-u6l3-oshibka", type: "vocab", front: "ошибка", reading: "oshibka", meaning: "a mistake", accept: ["mistake", "error", "the mistake"], example: { jp: "Это моя ошибка, и я это знаю.", en: "This is my mistake, and I know it." }, drill: { jp: "Это не моя ошибка", en: "This is not my mistake" }, hint: "a-SHYP-ka — ши said shy again, and the б devoices to p before the к. Feminine. Say это моя ошибка and every Russian will forgive you." },
        { id: "ru-u6l3-ploshchad", type: "vocab", front: "площадь", reading: "ploshchad", meaning: "a square (in a town)", accept: ["square", "the square", "plaza", "area"], example: { jp: "Наша площадь очень старая.", en: "Our square is very old." }, drill: { jp: "Вот наша площадь", en: "Here is our square" }, hint: "PLO-shchat — ща, then a д that devoices to t behind the soft sign. FEMININE, because of that -ь. Красная площадь is Red Square." },
        { id: "ru-u6l3-zhivotnoe", type: "vocab", front: "животное", reading: "zhivotnoe", meaning: "an animal", accept: ["animal", "the animal", "beast"], example: { jp: "Это животное очень тихое.", en: "This animal is very quiet." }, drill: { jp: "Это очень хорошее животное", en: "This is a very good animal" }, hint: "zhy-VOT-na-ye — жи said zhy one last time. NEUTER, and grammatically it is an adjective doing a noun's job, which is why it ends -ое." },
      ],
    },
    {
      id: "ru-u6l4",
      unit: 6,
      lesson: 4,
      title: "Reading a whole sentence",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read a full Russian sentence aloud, and say whether something was easy, hard or correct.",
      items: [
        { id: "ru-u6l4-russkiy", type: "vocab", front: "русский", reading: "russkiy", meaning: "Russian (the adjective)", accept: ["Russian"], example: { jp: "Русский язык очень красивый, но трудный.", en: "The Russian language is very beautiful, but difficult." }, drill: { jp: "Это русский язык", en: "This is the Russian language" }, hint: "RUS-skiy — a double с you actually hold. Masculine adjective: русский язык, русская школа, русское слово. On its own it also means a Russian man." },
        { id: "ru-u6l4-slovo", type: "vocab", front: "слово", reading: "slovo", meaning: "a word", accept: ["word", "the word"], example: { jp: "Это слово очень трудное.", en: "This word is very difficult." }, drill: { jp: "Это очень трудное слово", en: "This is a very difficult word" }, hint: "SLO-va, neuter (-о), and the second о reduces. Words are слова in the plural — the stress jumps to the end: sla-VA." },
        { id: "ru-u6l4-legko", type: "vocab", front: "легко", reading: "legko", meaning: "easy", accept: ["easily", "it is easy", "lightly"], example: { jp: "Читать по-русски уже легко.", en: "Reading Russian is easy now." }, drill: { jp: "Здесь очень легко читать", en: "It is very easy to read here" }, hint: "Written легко, SAID likh-KO — the г says kh, which happens in almost no other word. One more for the memorise-it list." },
        { id: "ru-u6l4-trudno", type: "vocab", front: "трудно", reading: "trudno", meaning: "difficult", accept: ["hard", "it is hard", "with difficulty"], example: { jp: "Говорить по-русски ещё трудно.", en: "Speaking Russian is still difficult." }, drill: { jp: "Мне трудно говорить по-русски", en: "It is difficult for me to speak Russian" }, hint: "TRUD-na, and the д stays voiced here because н follows it. Add мне for it is hard FOR ME — мне трудно, the same frame as мне скучно." },
        { id: "ru-u6l4-ne", type: "vocab", front: "не", reading: "ne", meaning: "not", accept: ["do not", "does not", "no"], example: { jp: "Я не понимаю это слово.", en: "I do not understand this word." }, drill: { jp: "Я не говорю по-русски", en: "I do not speak Russian" }, hint: "ni, unstressed and almost swallowed. It goes immediately in front of whatever it negates, and Russian is happy to stack it: он не врач, я не знаю. ⚠️ Do not confuse it with нет, which is the answer no." },
        { id: "ru-u6l4-pravilno", type: "vocab", front: "правильно", reading: "pravilno", meaning: "correctly", accept: ["correct", "right", "that is right", "properly"], example: { jp: "Он всё правильно читает.", en: "He reads everything correctly." }, drill: { jp: "Вы всё правильно понимаете", en: "You understand everything correctly" }, hint: "PRA-vil-na, with a soft л. On its own it is the teacher's tick: Правильно! — correct. Its opposite is неправильно." },
      ],
    },
  ],
};
