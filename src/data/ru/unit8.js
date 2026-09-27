// RU Unit 8 — Знакомство ("Getting acquainted") — A1
// Everything a learner needs to answer the five questions a Russian asks a
// stranger: как вас зовут, откуда вы, где вы живёте, кто вы по профессии,
// сколько вам лет — plus the one thing they will volunteer, что вам нравится.
// Conventions are declared in ru/unit1.js §1–§10 and bind every unit.
//
// THREE DELIBERATE DECISIONS IN THIS UNIT, each of them a rule applied rather
// than a rule bent:
//
//   1. `звать` IS HEADWORDED AS THE INFINITIVE, not as зовут. unit1.js §4 allows
//      exactly one 3rd-person exception in this block (нравится, l4), and a
//      second would make "the infinitive rule" a suggestion. So the front is
//      звать and the hint says plainly that the form the learner will USE is
//      зовут — меня зовут Иван. The drill uses звать itself, which is real
//      colloquial Russian (как тебя звать), so the cloze still tests the front.
//
//   2. `нравится` IS THE ONE 3sg EXCEPTION, and this is the unit that spends it.
//      нравиться has no short sentence an A1 learner will ever say, so a card on
//      the infinitive could carry no drill at all. Documented in unit1.js §4.
//
//   3. `по-русски` IS TAUGHT HERE, and it retro-fixes the corpus. The alphabet
//      band leans on it in 33 example and drill sentences — by far the most-used
//      word in ru that no unit taught. Measured 2026-09-27 with
//      `node scripts/scope-ru.mjs`. It is an ADVERB, which is why it can be a
//      front at all while `русский` (the adjective) already has one: different
//      word class, different card, different gloss.
//
// ⚠️ Example scope is NOT gated for Russian — see unit7.js's header. Run
// `node scripts/scope-ru.mjs 7,8,9,10`; it must report 0.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT8 = {
  id: "ru-u8",
  lang: "ru",
  title: "Знакомство",
  order: 8,
  stage: "a1",
  lessons: [
    {
      id: "ru-u8l1",
      unit: 8,
      lesson: 1,
      title: "What you are called",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you are called, ask what someone else is called, and say whose something is.",
      items: [
        { id: "ru-u8l1-moy", type: "vocab", front: "мой", reading: "moy", meaning: "my (masculine)", accept: ["my", "mine"], example: { jp: "Мой друг врач, и он работает здесь.", en: "My friend is a doctor, and he works here." }, drill: { jp: "Мой друг здесь работает", en: "My friend works here" }, hint: "MOY. The masculine member of the set: мой дом, моя мама, моё имя. The ending agrees with the thing owned, never with you. Its plural мои is spelled with и, and this course teaches only the three singular forms." },
        { id: "ru-u8l1-tvoy", type: "vocab", front: "твой", reading: "tvoy", meaning: "your (informal)", accept: ["yours", "your", "thy"], example: { jp: "Твой дом там, а мой здесь.", en: "Your house is over there, and mine is here." }, drill: { jp: "Твой словарь уже здесь", en: "Your dictionary is already here" }, hint: "TVOY. The ты partner of мой: твой дом, твоя мама, твоё имя. Use it only with someone you would call ты — for anyone else it is ваш." },
        { id: "ru-u8l1-familiya", type: "vocab", front: "фамилия", reading: "familiya", meaning: "a surname", accept: ["surname", "last name", "family name"], example: { jp: "Моя фамилия Петров, а имя Иван.", en: "My surname is Petrov, and my first name is Ivan." }, drill: { jp: "Ваша фамилия очень русская", en: "Your surname is very Russian" }, hint: "fa-MI-li-ya, stress on MI. Feminine (-я). ⚠️ FALSE FRIEND: it is not family — that is семья, two units on. A Russian form asks for фамилия first, then имя." },
        { id: "ru-u8l1-zvat", type: "vocab", front: "звать", reading: "zvat", meaning: "to call by name", accept: ["to call", "to name", "call"], example: { jp: "Меня зовут Иван, а вас?", en: "My name is Ivan, and yours?" }, drill: { jp: "Как тебя звать", en: "What are you called" }, hint: "ZVAT, one syllable. ⚠️ The form you will actually use is зовут: меня зовут Иван — literally they call me Ivan. That is how Russian says my name is; звать is only the dictionary headword." },
        { id: "ru-u8l1-znakomitsya", type: "vocab", front: "знакомиться", reading: "znakomitsya", meaning: "to get acquainted", accept: ["to meet someone", "to become acquainted", "to get to know"], example: { jp: "Здесь очень легко знакомиться.", en: "It is very easy to get acquainted here." }, drill: { jp: "Я люблю знакомиться", en: "I like getting to know people" }, hint: "zna-KO-mit-sya, stress on KO. The -ся on the end is reflexive: you are acquainting YOURSELF. It is the verb behind знакомство, the name of this unit." },
        { id: "ru-u8l1-kto", type: "vocab", front: "кто", reading: "kto", meaning: "who", accept: ["whom", "who is"], example: { jp: "Кто это? Это мой друг.", en: "Who is that? That is my friend." }, drill: { jp: "Кто здесь наш врач", en: "Who here is our doctor" }, hint: "KTO, said in one push with no vowel between к and т. It pairs with что: кто for a person, что for a thing. At this level it never changes to whom." },
      ],
    },
    {
      id: "ru-u8l2",
      unit: 8,
      lesson: 2,
      title: "Where you are from",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say which country and city you come from, and name the language that is your own.",
      items: [
        { id: "ru-u8l2-gde", type: "vocab", front: "где", reading: "gde", meaning: "where", accept: ["in what place", "whereabouts"], example: { jp: "Где вы живёте? В Москве.", en: "Where do you live? In Moscow." }, drill: { jp: "Где здесь наша школа", en: "Where is our school here" }, hint: "GDYE, one syllable — the г runs straight into the д. It asks about BEING somewhere; for GOING somewhere Russian uses куда, which the grammar units add later." },
        { id: "ru-u8l2-strana", type: "vocab", front: "страна", reading: "strana", meaning: "a country", accept: ["country", "a land", "nation"], example: { jp: "Россия — очень большая страна.", en: "Russia is a very big country." }, drill: { jp: "Это очень красивая страна", en: "This is a very beautiful country" }, hint: "stra-NA, stress at the end. Feminine (-а). ⚠️ The stress jumps in the plural: страны, STRA-ny. Russian does that often, and the hint always tells you." },
        { id: "ru-u8l2-stolitsa", type: "vocab", front: "столица", reading: "stolitsa", meaning: "a capital city", accept: ["capital", "the capital", "capital city"], example: { jp: "Москва — столица России.", en: "Moscow is the capital of Russia." }, drill: { jp: "Наша столица очень большая", en: "Our capital is very big" }, hint: "sta-LI-tsa, stress on LI. Feminine (-а). Москва — столица России has no verb at all, and the second noun takes the of-ending России — the genitive the grammar units explain." },
        { id: "ru-u8l2-otkuda", type: "vocab", front: "откуда", reading: "otkuda", meaning: "where from", accept: ["from where", "whence", "where are you from"], example: { jp: "Откуда вы? Я из Москвы.", en: "Where are you from? I am from Moscow." }, drill: { jp: "Откуда здесь эта вода", en: "Where does this water here come from" }, hint: "at-KU-da, stress on KU. Literally from where. Its answer needs из plus the of-form: из Москвы, из России. Its partner куда, where to, comes with the grammar units." },
        { id: "ru-u8l2-rodnoy", type: "vocab", front: "родной", reading: "rodnoy", meaning: "native", accept: ["one's own", "dear", "inborn"], example: { jp: "Русский язык — мой родной язык.", en: "Russian is my native language." }, drill: { jp: "Это мой родной город", en: "This is my native city" }, hint: "rad-NOY, stress at the end. Родной язык is your mother tongue, родной город the town you are from. Said of a person it means dear — родная мама." },
        { id: "ru-u8l2-porusski", type: "vocab", front: "по-русски", reading: "porusski", meaning: "in Russian", accept: ["Russian (as in speak Russian)", "the Russian way", "in the Russian language"], example: { jp: "Я уже немного говорю по-русски.", en: "I already speak a little Russian." }, drill: { jp: "Мы читаем по-русски каждый день", en: "We read in Russian every day" }, hint: "pa-RUS-ki — the double с is said as one. It is an ADVERB, so it answers how: говорить по-русски, to speak Russian-ly. You cannot say я говорю русский язык; it has to be по-русски." },
      ],
    },
    {
      id: "ru-u8l3",
      unit: 8,
      lesson: 3,
      title: "What you do",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name your job, ask someone else what theirs is, and say where they do it.",
      items: [
        { id: "ru-u8l3-professiya", type: "vocab", front: "профессия", reading: "professiya", meaning: "a profession", accept: ["profession", "an occupation", "a trade"], example: { jp: "Моя профессия — врач.", en: "My profession is doctor." }, drill: { jp: "Это очень трудная профессия", en: "That is a very difficult profession" }, hint: "pra-FYE-si-ya, stress on FYE. Feminine (-я). Кто вы по профессии? is how Russian asks what do you do — literally who are you by profession." },
        { id: "ru-u8l3-student", type: "vocab", front: "студент", reading: "student", meaning: "a student", accept: ["student", "undergraduate", "a college student"], example: { jp: "Мой друг студент, а я врач.", en: "My friend is a student, and I am a doctor." }, drill: { jp: "Он студент и хорошо читает", en: "He is a student and reads well" }, hint: "stu-DYENT, stress at the end. Masculine; a woman is студентка. In Russian it means a UNIVERSITY student only — a schoolchild is школьник." },
        { id: "ru-u8l3-uchitel", type: "vocab", front: "учитель", reading: "uchitel", meaning: "a teacher", accept: ["teacher", "schoolteacher", "an instructor"], example: { jp: "Наш учитель очень хорошо знает язык.", en: "Our teacher knows the language very well." }, drill: { jp: "Наш учитель работает здесь", en: "Our teacher works here" }, hint: "u-CHI-tyel, stress on CHI. MASCULINE despite the -ь — a -ь noun can be either gender, so the hint always says which. A woman teacher is учительница." },
        { id: "ru-u8l3-inzhener", type: "vocab", front: "инженер", reading: "inzhener", meaning: "an engineer", accept: ["engineer", "an engineering professional"], example: { jp: "Мой друг инженер, и он любит машины.", en: "My friend is an engineer, and he loves cars." }, drill: { jp: "Наш инженер уже здесь", en: "Our engineer is already here" }, hint: "in-zhi-NYER, stress at the end. Masculine, and it stays masculine for a woman — она инженер. Note the ж: the soft g of English engineer is a zh here." },
        { id: "ru-u8l3-povar", type: "vocab", front: "повар", reading: "povar", meaning: "a cook", accept: ["cook", "a chef"], example: { jp: "Наш повар уже здесь, и он очень хорошо работает.", en: "Our cook is already here, and he works very well." }, drill: { jp: "Этот повар очень хорошо работает", en: "This cook works very well" }, hint: "PO-var, stress first, and the unstressed о at the end says a. Masculine. A повар cooks for a living; the everyday verb to cook is готовить, later in the course." },
        { id: "ru-u8l3-voditel", type: "vocab", front: "водитель", reading: "voditel", meaning: "a driver", accept: ["driver", "a chauffeur"], example: { jp: "Наш водитель уже здесь, и машина тоже.", en: "Our driver is already here, and so is the car." }, drill: { jp: "Водитель плохо видит дорогу", en: "The driver sees the road badly" }, hint: "va-DI-tyel, stress on DI. MASCULINE, like учитель — the -тель ending makes the person who does a thing, and every -тель noun is masculine." },
      ],
    },
    {
      id: "ru-u8l4",
      unit: 8,
      lesson: 4,
      title: "Your age and what you like",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how old you are and name something you like, using мне нравится.",
      items: [
        { id: "ru-u8l4-vozrast", type: "vocab", front: "возраст", reading: "vozrast", meaning: "an age", accept: ["age", "years", "how old someone is"], example: { jp: "Мы не знаем его возраст.", en: "We do not know his age." }, drill: { jp: "Я уже знаю её возраст", en: "I already know her age" }, hint: "VOZ-rast, stress first. Masculine. In conversation Russians ask сколько тебе лет — how many years to you — and возраст belongs to forms and documents." },
        { id: "ru-u8l4-nravitsya", type: "vocab", front: "нравится", reading: "nravitsya", meaning: "is pleasing", accept: ["to like", "like", "likes", "appeals to"], example: { jp: "Мне нравится русский язык.", en: "I like the Russian language." }, drill: { jp: "Мне нравится ваша школа", en: "I like your school" }, hint: "NRA-vit-sya, stress first. ⚠️ Taught in the он form, not the infinitive, because мне нравится is the only shape an A1 learner uses: to me it is pleasing. The thing liked is the SUBJECT, so for plural things it becomes нравятся." },
        { id: "ru-u8l4-muzyka", type: "vocab", front: "музыка", reading: "muzyka", meaning: "music", accept: ["the music", "a tune"], example: { jp: "Мне нравится эта музыка.", en: "I like this music." }, drill: { jp: "Эта музыка очень красивая", en: "This music is very beautiful" }, hint: "MU-zy-ka, stress first, and that ы in the middle is the vowel English has no letter for. Feminine (-а). One of hundreds of words you can already read AND already understand." },
        { id: "ru-u8l4-kniga", type: "vocab", front: "книга", reading: "kniga", meaning: "a book", accept: ["book", "a volume"], example: { jp: "Это моя книга, и я её часто читаю.", en: "This is my book, and I read it often." }, drill: { jp: "Эта книга очень трудная", en: "This book is very difficult" }, hint: "KNI-ga, stress first. Feminine (-а). ⚠️ Watch the object form: я читаю книгу, with -у. The card's front is always the plain nominative книга." },
        { id: "ru-u8l4-film", type: "vocab", front: "фильм", reading: "film", meaning: "a movie", accept: ["film", "a picture", "the movie"], example: { jp: "Этот фильм мне очень нравится.", en: "I like this film very much." }, drill: { jp: "Мне нравится русский фильм", en: "I like the Russian film" }, hint: "FILM, one syllable, and the ь softens the л. Masculine. Glossed a movie on purpose: if the prompt said film you could read the answer straight off it and learn nothing." },
        { id: "ru-u8l4-koshka", type: "vocab", front: "кошка", reading: "koshka", meaning: "a cat", accept: ["cat", "a female cat", "pussycat"], example: { jp: "Наша кошка очень любит молоко.", en: "Our cat loves milk very much." }, drill: { jp: "Кошка уже дома", en: "The cat is home already" }, hint: "KOSH-ka, stress first. Feminine (-а), and it is the default word for a cat whatever its sex; кот is specifically a male one. An animal in general is животное." },
      ],
    },
  ],
};
