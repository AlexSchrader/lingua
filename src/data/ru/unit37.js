// RU Unit 37 — Много и мало ("A lot and a little") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Conventions: ru/unit1.js §1–§10 and §A–§D, plus ru/unit31.js §1–§7 for the A2
// band. This unit closes the last of unit1.js §5's four A2 deferrals: "Also
// deferred: genitive plural as a paradigm (A2)".
//
// ⚠️ THE SCAFFOLD TITLE WAS "Shopping and money" AND A1 ALREADY WROTE IT — u18
// Одежда и покупки (покупать · продавать · платить · размер · выбирать · чек) on
// top of u12's prices (цена · рубль · копейка · скидка · дорого · дёшево) and
// u21's счёт · процент. Rethemed to the genitive plural with counting and measure
// — and the slot's domain is not thrown away, because COUNTING MONEY IS THE
// GENITIVE PLURAL: пять рублей, много денег, килограмм яблок. unit31.js §6 has
// the table.
//
// WHY THE GENITIVE PLURAL NEEDED ITS OWN UNIT. u33 taught twelve prepositions
// that govern the genitive, and every single noun after them was SINGULAR, on
// purpose, so the learner met one ending at a time. The plural is a different
// and harder problem — it is the one Russian case ending that is often NOTHING at
// all (книга → книг, окно → окон, яблоко → яблок) — and it is unreachable without
// a head word to hang it off. That head word is много, which §5 of unit31.js
// explains was not carded at A1.
//
// ★ `много` IS CARDED HERE, at l1, reversing unit1.js §D's avoidance. The full
//   argument is in ru/unit31.js §5 and is not repeated; the short version is that
//   knowing немного ("a little") gives a learner the OPPOSITE of много rather than
//   много, the derivation runs one way only, and мало was already carded at u21l4
//   so the gap was asymmetric.
//
// ⚠️ `весь` IS NOT CARDED, AND THIS REVERSES WHAT ru/unit32.js's HEADER FIRST
// SAID. u32 refused `вес` on a §1(b) soft-sign reading collision with `весь` and
// said весь would be carded here. It cannot be: `весь` is the masculine of the
// same lexeme as `всё`, which A1 carded at u3l2, so carding it would give one word
// two mastery tracks — exactly unit1.js §5's "an inflected form is never its own
// card". With весь out of the language, `вес` has nothing left to collide with and
// IS carded, at l3. u32's header has been corrected in place rather than having a
// note appended under the old text. `любой` took весь's slot in l1.
//
// ⚠️ GLOSS COLLISIONS DESIGNED OUT — this unit sits on top of A1's entire number
// and money vocabulary, so nearly every card needed checking:
//   `число` takes "a figure". It could NOT take "a number": u12 номер is already
//        "a number", and u21 цифра is "a digit".
//   `несколько` takes "several", NOT "a few" — u21 мало is "few".
//   `слишком` takes "excessively", NOT "too" — u5 тоже is "also" and carries "too"
//        in its accept list, and a learner reading the bare prompt "too" could
//        reasonably type either word. This one is an ambiguity fix, not just a
//        collision fix.
//   `ровно` takes "on the dot", NOT "exactly" — u22 точно is "exactly".
//   `лишь` takes "merely"; u3 только is "only".
//   `количество` takes "an amount" against u32 качество "a quality" — one letter
//        apart in Russian and two different questions, which the hint says.
//   `доля` "a share" vs u11 половина "a half" and u21 процент "a percent".
//   `ширина` and `глубина` are measured free and are NOT carded (✅ and `объём`
//        no longer is — BLOCK 3 CARDED IT at u54l2, in the physics lesson, where a
//        volume is what you measure rather than an abstract dimension):
//        24 cards were full, and the dimension ADJECTIVES (широкий · глубокий ·
//        тонкий · толстый · узкий) are u40's, where they are more use to a
//        learner than an abstract noun. `длина` is the exception, carded at l3,
//        because `длинный` is not carded anywhere.
//
// ⚠️ ONE LEXEME CALL (unit1.js §D): `любой` beside u4 `любить` and u5 `любовь`.
// One root люб-, and the link is invisible in meaning — "any" has nothing to do
// with loving. Allowed, and the hint warns the learner off the false trail.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT37 = {
  id: "ru-u37",
  lang: "ru",
  title: "Много и мало",
  order: 37,
  stage: "a2",
  lessons: [
    {
      id: "ru-u37l1",
      unit: 37,
      lesson: 1,
      title: "How many, and the ending that is nothing",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say there is a lot or a little of something, putting the noun into the genitive plural the quantity word demands.",
      items: [
        { id: "ru-u37l1-mnogo", type: "vocab", front: "много", reading: "mnogo", meaning: "a lot", accept: ["many", "much", "plenty of"], example: { jp: "В нашем городе много новых магазинов.", en: "There are a lot of new shops in our town." }, drill: { jp: "Здесь много старых домов", en: "There are a lot of old houses here" }, hint: "MNO-ga — stress on the first syllable, and the final о says a. ★ EVERYTHING AFTER много GOES INTO THE GENITIVE PLURAL: много магазинОВ, много книГ, много денеГ. Its opposite мало from unit 21 works exactly the same way." },
        { id: "ru-u37l1-neskolko", type: "vocab", front: "несколько", reading: "neskolko", meaning: "several", accept: ["a few", "some", "a handful of"], example: { jp: "У меня есть несколько новых книг.", en: "I have several new books." }, drill: { jp: "Здесь несколько больших окон", en: "There are several big windows here" }, hint: "NES-kal-ka — stress on the first syllable. Genitive plural after it, just like много: несколько книГ, несколько окОН. ⚠️ Look at окон — a neuter noun's genitive plural is often the bare stem with NOTHING on the end." },
        { id: "ru-u37l1-oba", type: "vocab", front: "оба", reading: "oba", meaning: "both", accept: ["the two of them", "both of them", "each of the two"], example: { jp: "Оба моих брата работают в этой фирме.", en: "Both my brothers work at this firm." }, drill: { jp: "Оба окна очень большие", en: "Both windows are very big" }, hint: "OH-ba — stress on the first syllable, where the о is the full rounded OH. ★ оба for masculine and neuter, обе for feminine — and after either one the noun goes into the GENITIVE SINGULAR, not the plural: оба братА, обе сестрЫ. Russian counts two specially." },
        { id: "ru-u37l1-lyuboy", type: "vocab", front: "любой", reading: "lyuboy", meaning: "any", accept: ["any at all", "whichever", "any one you like"], example: { jp: "Любой студент в нашей группе знает это.", en: "Any student in our group knows this." }, drill: { jp: "Любой день недели хороший", en: "Any day of the week is good" }, hint: "lyu-BOY — stress on the last syllable. Any one you like, whichever you choose. ⚠️ Its root looks like любить, to love, and there is no connection in meaning at all — do not let the shape mislead you." },
        { id: "ru-u37l1-chislo", type: "vocab", front: "число", reading: "chislo", meaning: "a figure", accept: ["a number", "the date of the month", "a count"], example: { jp: "Число новых сотрудников очень большое.", en: "The number of new members of staff is very big." }, drill: { jp: "Какое сегодня число", en: "What is the date today" }, hint: "chis-LO — stress on the last syllable. Neuter (-о). A figure or a quantity — where цифра from unit 21 is the written digit 7, and номер is a room or telephone number. ⚠️ «Какое сегодня число?» is how Russian asks the date." },
        { id: "ru-u37l1-kolichestvo", type: "vocab", front: "количество", reading: "kolichestvo", meaning: "an amount", accept: ["a quantity", "how much there is", "a number of things"], example: { jp: "Количество новых книг очень большое.", en: "The amount of new books is very large." }, drill: { jp: "Количество денег очень маленькое", en: "The amount of money is very small" }, hint: "ka-LI-chest-va — stress on LI, and the final о says a. Neuter (-о). How MUCH of something there is. ⚠️ Do not mix it with качество from unit 32, which is how GOOD something is — one letter apart, two different questions." },
      ],
    },
    {
      id: "ru-u37l2",
      unit: 37,
      lesson: 2,
      title: "Measuring it out",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Ask for a measured amount in a shop — a litre, a kilo, a hundred grammes — with the goods in the genitive.",
      items: [
        { id: "ru-u37l2-litr", type: "vocab", front: "литр", reading: "litr", meaning: "a litre", accept: ["one litre", "a liter", "the litre"], example: { jp: "Я хочу купить литр молока.", en: "I want to buy a litre of milk." }, drill: { jp: "Это один литр воды", en: "This is one litre of water" }, hint: "One syllable, LITR — the тр at the end takes no vowel after it, though English speakers want to add one. Masculine. ★ What you measure goes into the GENITIVE: литр молокА, литр водЫ." },
        { id: "ru-u37l2-kilogramm", type: "vocab", front: "килограмм", reading: "kilogramm", meaning: "a kilo", accept: ["a kilogram", "one kilo", "a kilogramme"], example: { jp: "Я хочу купить килограмм яблок.", en: "I want to buy a kilo of apples." }, drill: { jp: "Это килограмм хорошего мяса", en: "This is a kilo of good meat" }, hint: "ki-la-GRAMM — stress on the last syllable, and the мм is held a beat longer. Masculine. Genitive after it: килограмм яблОК — another plural whose ending is nothing at all. In shops Russians shorten it to кило." },
        { id: "ru-u37l2-gramm", type: "vocab", front: "грамм", reading: "gramm", meaning: "a gramme", accept: ["a gram", "one gramme", "the gram"], example: { jp: "В этом супе сто грамм масла.", en: "There are a hundred grammes of butter in this soup." }, drill: { jp: "Это только один грамм", en: "That is only one gramme" }, hint: "One syllable, GRAMM, with the мм held longer. Masculine. ⚠️ After a number Russians say сто грамм rather than сто граммов — the short genitive plural is what you will actually hear." },
        { id: "ru-u37l2-metr", type: "vocab", front: "метр", reading: "metr", meaning: "a metre", accept: ["a meter", "one metre", "the metre"], example: { jp: "Здесь только один метр до стены.", en: "There is only one metre to the wall here." }, drill: { jp: "Здесь один метр до стены", en: "It is one metre to the wall here" }, hint: "One syllable, METR, with the тр said with nothing after it. Masculine. ⚠️ Not метро, the underground — that is a different word, neuter, from unit 9, and it never changes its ending at all." },
        { id: "ru-u37l2-kilometr", type: "vocab", front: "километр", reading: "kilometr", meaning: "a kilometre", accept: ["a kilometer", "one kilometre", "a km"], example: { jp: "До вокзала только один километр.", en: "It is only one kilometre to the station." }, drill: { jp: "Это один километр пешком", en: "That is one kilometre on foot" }, hint: "ki-la-METR — stress on the LAST syllable, not on МЕ. Masculine. Built from кило plus метр, and written км on every Russian road sign." },
        { id: "ru-u37l2-shtuka", type: "vocab", front: "штука", reading: "shtuka", meaning: "an item", accept: ["a piece of something countable", "one of them", "a thing"], example: { jp: "Сколько штук вам нужно?", en: "How many items do you need?" }, drill: { jp: "Это очень большая штука", en: "This is a very big thing" }, hint: "SHTU-ka — stress on the first syllable. Feminine (-а). The counting word for separate objects — «пять штук», five of them. In speech it also does duty for «thing» when you cannot name what you mean." },
      ],
    },
    {
      id: "ru-u37l3",
      unit: 37,
      lesson: 3,
      title: "A piece, a part, a weight",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name a portion of something and give its length, weight or total, with the thing it belongs to in the genitive.",
      items: [
        { id: "ru-u37l3-kusok", type: "vocab", front: "кусок", reading: "kusok", meaning: "a piece", accept: ["a lump", "a chunk", "a slice"], example: { jp: "Можно кусок хлеба, пожалуйста?", en: "May I have a piece of bread, please?" }, drill: { jp: "Это большой кусок сыра", en: "This is a big piece of cheese" }, hint: "ku-SOK — stress on the last syllable. Masculine. ⚠️ The о VANISHES when it inflects: кусок becomes кускА, кускУ. Genitive for what it is a piece of: кусок хлебА." },
        { id: "ru-u37l3-chast", type: "vocab", front: "часть", reading: "chast", meaning: "a part", accept: ["a portion", "a section", "some of it"], example: { jp: "Эта часть города очень старая.", en: "This part of town is very old." }, drill: { jp: "Это большая часть работы", en: "This is a large part of the work" }, hint: "One syllable, CHAST, with a soft t at the end. FEMININE — an -ь noun, so its gender has to be learned rather than guessed. Genitive for the whole: часть городА." },
        { id: "ru-u37l3-dolya", type: "vocab", front: "доля", reading: "dolya", meaning: "a share", accept: ["a portion that is yours", "a lot in life", "a proportion"], example: { jp: "Моя доля этих денег очень маленькая.", en: "My share of this money is very small." }, drill: { jp: "Это моя доля работы", en: "This is my share of the work" }, hint: "DO-lya — stress on the first syllable. Feminine (-я). The portion that belongs to someone, where часть is any part at all. Its other meaning is the lot life has dealt you." },
        { id: "ru-u37l3-dlina", type: "vocab", front: "длина", reading: "dlina", meaning: "a length", accept: ["how long it is", "the long measurement", "extent"], example: { jp: "Длина этой линии — один метр.", en: "The length of this line is one metre." }, drill: { jp: "Длина этой улицы большая", en: "The length of this street is great" }, hint: "dli-NA — stress on the LAST syllable. Feminine (-а). How long something is, built the same way as высота in unit 36: a noun for the measurement where the adjective is not taught." },
        { id: "ru-u37l3-ves", type: "vocab", front: "вес", reading: "ves", meaning: "a weight", accept: ["how heavy it is", "the weight", "heaviness"], example: { jp: "Вес этого чемодана очень большой.", en: "The weight of this suitcase is very great." }, drill: { jp: "Вес этой сумки большой", en: "The weight of this bag is great" }, hint: "One syllable, VES. Masculine. How heavy a thing is. ⚠️ It sounds exactly like весь, «all» — which this course deliberately does NOT card, because unit 3's всё is already that word. So вес is the only «ves» you will ever have to type." },
        { id: "ru-u37l3-itog", type: "vocab", front: "итог", reading: "itog", meaning: "a total", accept: ["the bottom line", "the upshot", "a result added up"], example: { jp: "Итог этой работы очень хороший.", en: "The result of this work is very good." }, drill: { jp: "Какой итог этого счёта", en: "What is the total of this bill" }, hint: "i-TOG — stress on the last syllable, and the г says k. Masculine. The bottom line — the total of a sum, or the upshot of an effort. «В итоге» is how Russian says «in the end»." },
      ],
    },
    {
      id: "ru-u37l4",
      unit: 37,
      lesson: 4,
      title: "Enough, too much, about right",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Judge an amount out loud — that it is enough, that it is too much, that it is roughly or exactly right.",
      items: [
        { id: "ru-u37l4-dostatochno", type: "vocab", front: "достаточно", reading: "dostatochno", meaning: "enough", accept: ["sufficiently", "quite enough", "adequately"], example: { jp: "У нас достаточно денег для этой машины.", en: "We have enough money for this car." }, drill: { jp: "Здесь достаточно места для нас", en: "There is enough room for us here" }, hint: "da-STA-tach-na — stress on STA. ★ Genitive after it, exactly like много: достаточно денеГ, достаточно местА. It covers both English senses — enough OF a thing, and good enough." },
        { id: "ru-u37l4-slishkom", type: "vocab", front: "слишком", reading: "slishkom", meaning: "excessively", accept: ["too much", "overly", "more than you want"], example: { jp: "Эта работа слишком трудная для меня.", en: "This work is too hard for me." }, drill: { jp: "Это слишком дорого для нас", en: "That is too expensive for us" }, hint: "SLISH-kam — stress on the first syllable. More of something than you want. ⚠️ Keep it well apart from тоже in unit 5, which is the OTHER English «too» — тоже means «also», and the two are never interchangeable." },
        { id: "ru-u37l4-rovno", type: "vocab", front: "ровно", reading: "rovno", meaning: "on the dot", accept: ["exactly so much", "evenly", "not a bit more"], example: { jp: "Мы работаем ровно восемь часов.", en: "We work exactly eight hours." }, drill: { jp: "Урок начинается ровно в три", en: "The lesson begins at three on the dot" }, hint: "ROV-na — stress on the first syllable. Exactly, evenly, on the dot, and used above all with times and amounts. точно from unit 22 is «exactly» meaning «precisely so»; ровно is «exactly» meaning «not a minute more»." },
        { id: "ru-u37l4-primerno", type: "vocab", front: "примерно", reading: "primerno", meaning: "roughly", accept: ["approximately", "about", "give or take"], example: { jp: "До вокзала примерно два километра.", en: "It is roughly two kilometres to the station." }, drill: { jp: "Это примерно один килограмм", en: "That is roughly one kilo" }, hint: "pri-MER-na — stress on MER. About, roughly, give or take. около from unit 33 does the same job in front of a number, and примерно is the more everyday of the two." },
        { id: "ru-u37l4-lish", type: "vocab", front: "лишь", reading: "lish", meaning: "merely", accept: ["no more than", "nothing but", "barely"], example: { jp: "У меня лишь один вопрос к тебе.", en: "I have merely one question for you." }, drill: { jp: "Это лишь один кусок", en: "That is merely one piece" }, hint: "One syllable, LISH, with a soft sh. A more bookish только — «merely», «no more than». You will read it far more often than you will say it." },
        { id: "ru-u37l4-summa", type: "vocab", front: "сумма", reading: "summa", meaning: "a sum", accept: ["an amount of money", "a figure added up", "a sum of money"], example: { jp: "Сумма этого счёта очень большая.", en: "The sum of this bill is very large." }, drill: { jp: "Это очень большая сумма денег", en: "That is a very large sum of money" }, hint: "SUM-ma — stress on the first syllable, and the мм is held a beat longer. Feminine (-а). An amount of money added up. итог is the bottom line; сумма is the figure itself." },
      ],
    },
  ],
};
