// RU Unit 21 — Числа и цифры ("Numbers and digits") — A1
// ─────────────────────────────────────────────────────────────────────────────
// FIRST UNIT OF BLOCK 3. Conventions are declared in ru/unit1.js §1–§10 and bind
// every card here. Block 2's hand-back note lives in ru/unit20.js.
//
// ★ THIS SLOT WAS "Characters 5" AND IT IS THE LAST JAPANESE ARTEFACT IN RUSSIAN.
// The "Characters N" strand is Japan's interleaved-kanji band: a unit every few
// units that feeds the learner more of a script they cannot finish in one pass.
// Russian's whole alphabet is done by u6, so the strand names nothing. u9 was
// rethemed first (Знакомые слова — see unit9.js for the argument), then u12
// (Надписи), u15 (Дом и вещи) and u18 (Одежда и покупки). This is the fifth and
// final one. `src/data/lint.js` hard-errors on /^Characters \d+$/ once a unit is
// authored, so retheming was not optional — but the THEME was a real choice.
//
// WHY NUMBERS, MEASURED RATHER THAN ASSERTED. u11 Числа и время taught
// один два три четыре пять шесть семь восемь девять десять двадцать сто — and
// stopped. Against `src/data/ru/TAUGHT-WORDS.md` (480 words, 20 units) on this
// branch, Russian A1 could therefore NOT say:
//     * any number from 11 to 19, or any ten except twenty
//     * zero, a thousand, a million
//     * first, second, third — so no floor, no date, no menu course
//     * a digit as against a number, a bill, a percentage
// That is not a nice-to-have: it is a learner who cannot read a price tag, give
// an age over twenty, find a flat on the fourth floor or pay in a café. u12
// Надписи took the printed WORD (вход · касса · цена · рубль); this unit takes
// the printed NUMBER, which is the half block 2 explicitly left (unit20.js).
//
// ⚠️ `много` IS NOT A CARD HERE, ON PURPOSE, AND THAT IS BLOCK 1'S CALL UPHELD.
// unit1.js §D lists `много (vs немного)` among the lexeme duplicates block 1
// avoided, and it is right: немного is taught (u7, "a little") and `не` is taught
// (u6), so много is не+много read backwards — a learner who has both already has
// it. Block 2's hand-back note listed много as "free and untouched", which
// contradicted §D; §D wins, and that sentence in unit20.js is corrected in place.
// `мало` has a different root and is carded. Measured on this branch: no
// sentence in u1–u20 uses много as a word, so nothing needs a `// FREE:` line.
//
// ⚠️ GLOSS COLLISIONS DESIGNED OUT OF THIS UNIT — each needed a hand check,
// because `normalizeMeaning` strips articles and parentheticals before comparing
// (unit1.js §9, and unit1.js §B for the case a parenthetical CANNOT fix):
//     `второй` is glossed "the second one", NOT "second" — u11 `секунда` is
//             glossed "a second", which normalises to exactly "second". A
//             parenthetical would not have saved it.
//     `последний` keeps "last" and u24 `прошлый` takes "previous", so the two
//             senses English packs into "last" never share a prompt.
//     `цифра` "a digit" beside `счёт` "a bill": u12 already owns `номер`
//             ("a number") and u18 owns `чек` ("a receipt"), so neither of those
//             two English words was available and neither is used.
//     `мало` "few" beside u7 `немного` "a little" — different words, and "little"
//             sits in мало's accept[] only.
//
// ⚠️ LEXEME CALLS RECORDED (unit1.js §D — check-front.mjs's LEXEME verdict is
// blind to Cyrillic, so every one of these is a hand judgement):
//   the numeral family: одиннадцать…пятнадцать beside один…пять, тридцать beside
//     три, девяносто beside девять, пятый beside пять, третий beside три. ALLOWED
//     as one block. A numeral system is a closed paradigm a learner must produce
//     member by member; "knows три, so knows тринадцать" is false in the only way
//     that matters — they cannot say it, and no other card will ever ask.
//   `второй` beside u17 `вторник` — Tuesday is literally the second day, and an
//     English speaker gets no hint of it from "Tuesday". Allowed.
//   `счёт` beside u18 `чек` — different objects (the bill you ask for, the
//     receipt you are handed) and different roots. Allowed.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT21 = {
  id: "ru-u21",
  lang: "ru",
  title: "Числа и цифры",
  order: 21,
  stage: "a1",
  lessons: [
    {
      id: "ru-u21l1",
      unit: 21,
      lesson: 1,
      title: "Count past ten",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count from eleven to fifteen, and say that the temperature or the total is zero.",
      items: [
        { id: "ru-u21l1-nol", type: "vocab", front: "ноль", reading: "nol", meaning: "zero", accept: ["nought", "nil", "the digit zero"], example: { jp: "Зимой здесь ноль, и это ещё тепло.", en: "In winter it is zero here, and that is still warm." }, drill: { jp: "Зимой здесь часто ноль", en: "In winter it is often zero here" }, hint: "NOL, one syllable. Masculine — and it is a -ь noun, so the gender is not guessable from the ending (unit1.js §3). Russian also says нуль in mathematics; ноль is the one you will hear on a weather report." },
        { id: "ru-u21l1-odinnadtsat", type: "vocab", front: "одиннадцать", reading: "odinnadtsat", meaning: "eleven", accept: ["11", "the number eleven"], example: { jp: "В нашем доме одиннадцать этажей.", en: "There are eleven floors in our building." }, drill: { jp: "В доме одиннадцать этажей", en: "There are eleven floors in the building" }, hint: "a-DIN-nad-tsat, stress on DIN — five syllables, and the double н is written but said once. It is один + на + десять squeezed flat: one-on-ten. Sixteen to nineteen work identically: шестнадцать, семнадцать, восемнадцать, девятнадцать." },
        { id: "ru-u21l1-dvenadtsat", type: "vocab", front: "двенадцать", reading: "dvenadtsat", meaning: "twelve", accept: ["12", "the number twelve"], example: { jp: "В году двенадцать месяцев, и это очень долго.", en: "There are twelve months in a year, and that is a very long time." }, drill: { jp: "В нашем доме двенадцать квартир", en: "There are twelve flats in our building" }, hint: "dvi-NAD-tsat, stress on NAD. Два turns into две- before -надцать, which is the one place the teens change the digit's shape. Twelve is the number a Russian calendar and a Russian clock are both built on." },
        { id: "ru-u21l1-trinadtsat", type: "vocab", front: "тринадцать", reading: "trinadtsat", meaning: "thirteen", accept: ["13", "the number thirteen"], example: { jp: "Ей тринадцать лет, и она уже в школе.", en: "She is thirteen years old, and she is already at school." }, drill: { jp: "Ему тринадцать лет сегодня", en: "He is thirteen years old today" }, hint: "tri-NAD-tsat, stress on NAD. Три keeps its shape here. Note the frame: Ей тринадцать лет — Russian gives an age in the DATIVE with no verb at all, exactly as unit 8 did with сколько тебе лет." },
        { id: "ru-u21l1-chetyrnadtsat", type: "vocab", front: "четырнадцать", reading: "chetyrnadtsat", meaning: "fourteen", accept: ["14", "the number fourteen"], example: { jp: "Мой брат читает четырнадцать книг каждый месяц.", en: "My brother reads fourteen books every month." }, drill: { jp: "Здесь четырнадцать новых книг", en: "There are fourteen new books here" }, hint: "chi-TYR-nad-tsat, stress on TYR. Watch the spelling: четыре drops its final е, so it is четыр-надцать. After a number from five up the noun goes GENITIVE PLURAL — четырнадцать книг, fourteen of books." },
        { id: "ru-u21l1-pyatnadtsat", type: "vocab", front: "пятнадцать", reading: "pyatnadtsat", meaning: "fifteen", accept: ["15", "the number fifteen"], example: { jp: "Мама ждала автобус пятнадцать минут.", en: "Mum waited fifteen minutes for the bus." }, drill: { jp: "Утром я ждала пятнадцать минут", en: "In the morning I waited fifteen minutes" }, hint: "pit-NAD-tsat, stress on NAD — and пять drops its ь: пят-надцать. Fifteen minutes is the interval a Russian timetable is written in, so this is the teen you will read most often." },
      ],
    },
    {
      id: "ru-u21l2",
      unit: 21,
      lesson: 2,
      title: "The tens and the big numbers",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say a round number up to a million, so you can give an age, read a price or state a year.",
      items: [
        { id: "ru-u21l2-tridtsat", type: "vocab", front: "тридцать", reading: "tridtsat", meaning: "thirty", accept: ["30", "the number thirty"], example: { jp: "В нашем доме тридцать квартир и один лифт.", en: "There are thirty flats and one lift in our building." }, drill: { jp: "Мне сегодня уже тридцать лет", en: "I am thirty years old today" }, hint: "TRID-tsat, stress FIRST — the tens stress the front where the teens stressed the middle. Три + дцать. Forty breaks the pattern outright and is the next card." },
        { id: "ru-u21l2-sorok", type: "vocab", front: "сорок", reading: "sorok", meaning: "forty", accept: ["40", "the number forty"], example: { jp: "Моей маме сорок лет, и она очень красивая.", en: "My mum is forty years old, and she is very beautiful." }, drill: { jp: "В этом доме сорок квартир", en: "There are forty flats in this building" }, hint: "SO-rok, stress first. It is the ONE ten that ignores the system: not четыредцать but сорок, from an old word for a bundle of forty furs. Learn this one on its own — with девяносто it is the only other exception." },
        { id: "ru-u21l2-pyatdesyat", type: "vocab", front: "пятьдесят", reading: "pyatdesyat", meaning: "fifty", accept: ["50", "the number fifty"], example: { jp: "Эта куртка стоит пятьдесят рублей.", en: "This jacket costs fifty roubles." }, drill: { jp: "Билет стоит пятьдесят рублей сегодня", en: "A ticket costs fifty roubles today" }, hint: "pit-di-SYAT, stress at the very end, and the ь in the middle is written but silent. Fifty to eighty are simply digit + десят: пять-десят, шесть-десят, семь-десят, восемь-десят." },
        { id: "ru-u21l2-devyanosto", type: "vocab", front: "девяносто", reading: "devyanosto", meaning: "ninety", accept: ["90", "the number ninety"], example: { jp: "Моей бабушке девяносто лет, и она ещё работает.", en: "My grandmother is ninety years old, and she still works." }, drill: { jp: "Дедушке уже девяносто лет", en: "Grandad is already ninety" }, hint: "di-vya-NOS-ta, stress on NOS. The second oddity: not девятьдесят but девяносто. Сорок and девяносто are the two tens you memorise; everything between them is regular." },
        { id: "ru-u21l2-tysyacha", type: "vocab", front: "тысяча", reading: "tysyacha", meaning: "a thousand", accept: ["thousand", "1000", "one thousand"], example: { jp: "Этот телефон стоит тысячу рублей.", en: "This telephone costs a thousand roubles." }, drill: { jp: "Тысяча рублей это очень дорого", en: "A thousand roubles is very expensive" }, hint: "TY-sya-cha, stress FIRST. Feminine (-а), which is why the price says стоит тысячУ — the accusative, unit 23's job. After it the noun is genitive plural: тысяча рублей, a thousand of roubles." },
        { id: "ru-u21l2-million", type: "vocab", front: "миллион", reading: "million", meaning: "a million", accept: ["one million", "1000000"], example: { jp: "В этом городе живёт миллион человек.", en: "A million people live in this city." }, drill: { jp: "Здесь живёт миллион человек", en: "A million people live here" }, hint: "mi-li-ON, stress at the end, and only one л is actually said. Masculine (consonant ending). An internationalism, so the meaning is free and the STRESS is the whole lesson: never MIL-lion." },
      ],
    },
    {
      id: "ru-u21l3",
      unit: 21,
      lesson: 3,
      title: "First, second, last",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Put things in order out loud: which one is first, which is third, and which is the last.",
      items: [
        { id: "ru-u21l3-pervyy", type: "vocab", front: "первый", reading: "pervyy", meaning: "first", accept: ["the first one", "first in order", "number one"], example: { jp: "Январь — это первый месяц года.", en: "January is the first month of the year." }, drill: { jp: "Первый день недели это понедельник", en: "The first day of the week is Monday" }, hint: "PER-vyy, stress first. This is the masculine form and it agrees like any adjective: первый день, первая книга, первое слово. ⚠️ Russian counts floors from первый этаж, which is the GROUND floor — so the British first floor is второй." },
        { id: "ru-u21l3-vtoroy", type: "vocab", front: "второй", reading: "vtoroy", meaning: "the second one", accept: ["second", "second in order", "number two"], example: { jp: "Наша квартира на втором этаже.", en: "Our flat is on the second floor." }, drill: { jp: "Второй этаж это наша квартира", en: "The second floor is our flat" }, hint: "vta-ROY, stress at the end. ⚠️ Its gloss says the second ONE deliberately: unit 11's секунда is the second on a clock, and the two must never share a prompt. Второе on a Russian menu is the main course — literally the second thing." },
        { id: "ru-u21l3-tretiy", type: "vocab", front: "третий", reading: "tretiy", meaning: "third", accept: ["the third one", "third in order", "number three"], example: { jp: "Среда — это третий день недели.", en: "Wednesday is the third day of the week." }, drill: { jp: "Третий месяц года это март", en: "The third month of the year is March" }, hint: "TRE-tiy, stress first. The odd one out of the ordinals: третий, третья, третье, with a soft -ий where первый and второй have hard -ый/-ой. Третье on a menu is the dessert." },
        { id: "ru-u21l3-chetvyortyy", type: "vocab", front: "четвёртый", reading: "chetvyortyy", meaning: "fourth", accept: ["the fourth one", "fourth in order", "number four"], example: { jp: "Четвёртый месяц года — это апрель.", en: "The fourth month of the year is April." }, drill: { jp: "Четвёртый день недели это четверг", en: "The fourth day of the week is Thursday" }, hint: "chit-VYOR-tyy, stress on the ё — and because ё is ALWAYS stressed in Russian, the spelling tells you for free (unit1.js §7). Четыре loses its ы: четв-ёртый." },
        { id: "ru-u21l3-pyatyy", type: "vocab", front: "пятый", reading: "pyatyy", meaning: "fifth", accept: ["the fifth one", "fifth in order", "number five"], example: { jp: "Май — это пятый месяц года.", en: "May is the fifth month of the year." }, drill: { jp: "Пятый день недели это пятница", en: "The fifth day of the week is Friday" }, hint: "PYA-tyy, stress first. It keeps пять's stem unchanged, which the next few do not: шестой and седьмой throw the stress to the end and восьмой changes its vowel." },
        { id: "ru-u21l3-posledniy", type: "vocab", front: "последний", reading: "posledniy", meaning: "last", accept: ["the last one", "final", "the final one"], example: { jp: "Декабрь — это последний месяц года.", en: "December is the last month of the year." }, drill: { jp: "Это последний день этой недели", en: "This is the last day of this week" }, hint: "pas-LED-niy, stress on LED, soft -ний like третий. It is последний in a ROW — the opposite of первый. For last in TIME (last week, last year) Russian says прошлый, which unit 24 teaches; English packs both senses into one word and Russian does not." },
      ],
    },
    {
      id: "ru-u21l4",
      unit: 21,
      lesson: 4,
      title: "Prices, dates and how few",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read a printed price, a date and a discount, ask for the bill, and say there is not much of something.",
      items: [
        { id: "ru-u21l4-tsifra", type: "vocab", front: "цифра", reading: "tsifra", meaning: "a digit", accept: ["digit", "a numeral", "a figure"], example: { jp: "На этой двери большая красная цифра.", en: "There is a big red digit on this door." }, drill: { jp: "Эта цифра очень большая и красная", en: "This digit is very big and red" }, hint: "TSIF-ra, stress first. Feminine (-а). A цифра is one written character 0–9; unit 12's номер is the whole number it spells out. It reached Russian from Arabic sifr, zero — the same root English turned into cipher." },
        { id: "ru-u21l4-data", type: "vocab", front: "дата", reading: "data", meaning: "a date", accept: ["date", "the date", "a calendar date"], example: { jp: "Какая сегодня дата, я не знаю.", en: "What today's date is, I do not know." }, drill: { jp: "Эта дата очень важная сегодня", en: "This date is very important today" }, hint: "DA-ta, stress first. Feminine (-а). It is the date printed on a form or a ticket. To ASK what day of the month it is, Russian says Какое сегодня число? — число being the wider word for a number, which is why дата is not glossed that way." },
        { id: "ru-u21l4-schyot", type: "vocab", front: "счёт", reading: "schyot", meaning: "a bill", accept: ["bill", "the bill", "an invoice", "a score"], example: { jp: "Этот счёт очень большой, и я не хочу платить.", en: "This bill is very big, and I do not want to pay." }, drill: { jp: "Наш счёт в кафе очень большой", en: "Our bill in the café is very big" }, hint: "SCHYOT, one syllable — сч says SHCH, so it sounds like щ, and the ё carries the stress. Masculine (consonant ending). TWO senses worth knowing: the bill in a restaurant, and the score in a match. Unit 18's чек is the till receipt handed to you after you pay." },
        { id: "ru-u21l4-protsent", type: "vocab", front: "процент", reading: "protsent", meaning: "a percent", accept: ["percent", "per cent", "a percentage"], example: { jp: "В этом магазине скидка двадцать процентов.", en: "There is a twenty percent discount in this shop." }, drill: { jp: "Здесь скидка один процент сегодня", en: "There is a one percent discount here today" }, hint: "pra-TSENT, stress at the end. Masculine (consonant ending). After a number it goes genitive plural: двадцать процентов. A Russian shop window writes it % exactly as English does, so the sign is free and the word is the work." },
        { id: "ru-u21l4-para", type: "vocab", front: "пара", reading: "para", meaning: "a pair", accept: ["pair", "a couple", "two of something"], example: { jp: "Мне нужна пара носков на зиму.", en: "I need a pair of socks for the winter." }, drill: { jp: "Мне нужна пара новых носков", en: "I need a pair of new socks" }, hint: "PA-ra, stress first. Feminine (-а), which is why it is нужнА and not нужно. Пара носков, пара перчаток — always with the genitive. In student slang a пара is a double lesson, and also the mark два." },
        { id: "ru-u21l4-malo", type: "vocab", front: "мало", reading: "malo", meaning: "few", accept: ["not much", "not many", "little", "a small amount"], example: { jp: "В этом магазине мало хлеба, и это плохо.", en: "There is little bread in this shop, and that is bad." }, drill: { jp: "Здесь мало хлеба и мало рыбы", en: "There is little bread and little fish here" }, hint: "MA-la, stress first, and the unstressed о says a. It takes the GENITIVE: мало хлеба, little of bread. ⚠️ Its opposite много is deliberately NOT a card — unit 7's немного is the same word with не in front, so the course teaches one of the pair and hands you the other (unit1.js §D)." },
      ],
    },
  ],
};
