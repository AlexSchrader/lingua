// RU Unit 4 — Ударение и гласные ("Stress and vowels") — PRE-A1
// The learner can now READ all 33 letters (u1–u3). Units 4–6 teach how to SAY
// what they read, through real vocabulary — never through letter drills
// (RUNBOOK §4). Conventions are declared in ru/unit1.js and bind every unit.
//
// THE ONE FACT THIS UNIT EXISTS FOR: Russian vowels change depending on whether
// they are stressed. Unstressed о becomes a; unstressed е and я become i. That
// is why every hint in this course names the stress in CAPS (unit1.js §6) — a
// learner who does not know where the stress falls cannot pronounce the word at
// all, however well they can read its letters.
//
// The twelve verbs in l3 and l4 are the whole A1 verb base. They are taught in
// the imperfective infinitive (unit1.js §4) and block 3's grammar units conjugate
// them — do NOT re-card them there.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT4 = {
  id: "ru-u4",
  lang: "ru",
  title: "Ударение и гласные",
  order: 4,
  stage: "pre-a1",
  lessons: [
    {
      id: "ru-u4l1",
      unit: 4,
      lesson: 1,
      title: "Unstressed О says A",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Pronounce a word whose о is not stressed, and name six everyday things.",
      items: [
        { id: "ru-u4l1-voda", type: "vocab", front: "вода", reading: "voda", meaning: "water", accept: ["the water", "some water"], example: { jp: "Здесь очень хорошая вода.", en: "The water here is very good." }, drill: { jp: "Вот вода а вот чай", en: "Here is water and here is tea" }, hint: "va-DA, not vo-da — the stress is on the second syllable, so the first о says a. This is the rule, not an exception." },
        { id: "ru-u4l1-ona", type: "vocab", front: "она", reading: "ona", meaning: "she", accept: ["it (feminine)", "her"], example: { jp: "Она врач и работает здесь.", en: "She is a doctor and works here." }, drill: { jp: "Она тоже говорит по-русски", en: "She also speaks Russian" }, hint: "a-NA. Same shape as вода: stress at the end, so the о reduces. It also means it for any feminine noun — она for школа, for вода." },
        { id: "ru-u4l1-okno", type: "vocab", front: "окно", reading: "okno", meaning: "a window", accept: ["window", "the window"], example: { jp: "Окно очень большое, и я вижу дорогу.", en: "The window is very big, and I can see the road." }, drill: { jp: "Вот наше окно", en: "Here is our window" }, hint: "ak-NO, neuter (-о). Both vowels are о and only the second one is really an о — the first says a." },
        { id: "ru-u4l1-moloko", type: "vocab", front: "молоко", reading: "moloko", meaning: "milk", accept: ["the milk", "some milk"], example: { jp: "Мама любит молоко, а я люблю чай.", en: "Mum likes milk, and I like tea." }, drill: { jp: "Это молоко очень хорошее", en: "This milk is very good" }, hint: "ma-la-KO — three о and only the last one survives as an о. The classic word for this whole lesson. Neuter." },
        { id: "ru-u4l1-potom", type: "vocab", front: "потом", reading: "potom", meaning: "later", accept: ["then", "afterwards", "after that"], example: { jp: "Сейчас я читаю, а потом работаю.", en: "Right now I am reading, and later I work." }, drill: { jp: "Сейчас мама здесь а потом там", en: "Mum is here now and there later" }, hint: "pa-TOM, stress at the end. The word that lets you put things in order without any tense: сначала… потом." },
        { id: "ru-u4l1-doroga", type: "vocab", front: "дорога", reading: "doroga", meaning: "a road", accept: ["road", "the road", "way", "journey"], example: { jp: "Дорога здесь очень хорошая.", en: "The road here is very good." }, drill: { jp: "Это очень хорошая дорога", en: "This is a very good road" }, hint: "da-RO-ga, stress in the MIDDLE, feminine (-а). So the first о reduces and the last one does too: da-RO-ga. It also means journey." },
      ],
    },
    {
      id: "ru-u4l2",
      unit: 4,
      lesson: 2,
      title: "Unstressed Е and Я say I",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Pronounce an unstressed е or я, and say me and you as objects.",
      items: [
        { id: "ru-u4l2-menya", type: "vocab", front: "меня", reading: "menya", meaning: "me (object form)", accept: ["me"], example: { jp: "Она меня очень хорошо знает.", en: "She knows me very well." }, drill: { jp: "Она меня хорошо знает", en: "She knows me well" }, hint: "mi-NYA — both vowels reduce towards i, and the stress is at the end. This is я in the object case; it never starts a sentence." },
        { id: "ru-u4l2-tebya", type: "vocab", front: "тебя", reading: "tebya", meaning: "you (object form, informal)", accept: ["you"], example: { jp: "Я тебя понимаю, но говори тихо.", en: "I understand you, but speak quietly." }, drill: { jp: "Я тебя хорошо понимаю", en: "I understand you well" }, hint: "ti-BYA. The object form of ты, built exactly like меня. For вы the object form is вас." },
        { id: "ru-u4l2-seychas", type: "vocab", front: "сейчас", reading: "seychas", meaning: "now", accept: ["right now", "at the moment", "just a moment"], example: { jp: "Сейчас мы говорим только по-русски.", en: "Right now we are speaking only Russian." }, drill: { jp: "Сейчас я читаю по-русски", en: "Right now I am reading in Russian" }, hint: "si-CHAS — the ей collapses to a short i and the й almost vanishes. It also works as just a minute! on its own." },
        { id: "ru-u4l2-chelovek", type: "vocab", front: "человек", reading: "chelovek", meaning: "a person", accept: ["person", "human", "man", "human being"], example: { jp: "Этот человек очень хорошо говорит по-русски.", en: "This person speaks Russian very well." }, drill: { jp: "Этот человек здесь работает", en: "This person works here" }, hint: "chi-la-VYEK — the е reduces to i, the о to a, and only the last syllable is full. Masculine. Its plural is люди, an entirely different word." },
        { id: "ru-u4l2-mesto", type: "vocab", front: "место", reading: "mesto", meaning: "a place", accept: ["place", "the place", "spot", "seat"], example: { jp: "Это очень хорошее место, и здесь тихо.", en: "This is a very good place, and it is quiet here." }, drill: { jp: "Вот очень хорошее место", en: "Here is a very good place" }, hint: "MYES-ta, stress FIRST, so here the е is full and it is the о that reduces. Neuter. It also means a seat on a train or in a theatre." },
        { id: "ru-u4l2-zemlya", type: "vocab", front: "земля", reading: "zemlya", meaning: "the earth", accept: ["earth", "land", "ground", "soil"], example: { jp: "Земля очень старая, и мы здесь недавно.", en: "The earth is very old, and we are new here." }, drill: { jp: "Это наша земля", en: "This is our earth" }, hint: "zim-LYA, stress at the end, feminine (-я). One word for the planet, the land and the ground you stand on." },
      ],
    },
    {
      id: "ru-u4l3",
      unit: 4,
      lesson: 3,
      title: "Stress in the infinitive",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say six core Russian verbs in their dictionary form, and hear where each one is stressed.",
      items: [
        { id: "ru-u4l3-govorit", type: "vocab", front: "говорить", reading: "govorit", meaning: "to speak", accept: ["speak", "to talk", "talk", "to say"], example: { jp: "Я хочу говорить по-русски каждый день.", en: "I want to speak Russian every day." }, drill: { jp: "Трудно говорить по-русски", en: "It is hard to speak Russian" }, hint: "ga-va-RIT, stress right at the end, so BOTH о reduce to a. Every Russian infinitive ends in -ть; the ь is silent and softens the т." },
        { id: "ru-u4l3-chitat", type: "vocab", front: "читать", reading: "chitat", meaning: "to read", accept: ["read"], example: { jp: "Мы уже читаем по-русски.", en: "We already read in Russian." }, drill: { jp: "Я люблю читать по-русски", en: "I love reading in Russian" }, hint: "chi-TAT. The -ать class: читать, работать, делать, знать all conjugate the same way, so learning one gives you all four." },
        { id: "ru-u4l3-pisat", type: "vocab", front: "писать", reading: "pisat", meaning: "to write", accept: ["write"], example: { jp: "Она любит писать письма.", en: "She loves writing letters." }, drill: { jp: "Я хочу писать по-русски", en: "I want to write in Russian" }, hint: "pi-SAT — and watch the stress, because пи́сать with the stress on the first syllable is a different and much ruder verb." },
        { id: "ru-u4l3-rabotat", type: "vocab", front: "работать", reading: "rabotat", meaning: "to work", accept: ["work"], example: { jp: "Мама любит работать здесь.", en: "Mum loves working here." }, drill: { jp: "Я хочу здесь работать", en: "I want to work here" }, hint: "ra-BO-tat, stress in the MIDDLE — so the first о reduces and the second does not. The noun работа comes in unit 8." },
        { id: "ru-u4l3-zhit", type: "vocab", front: "жить", reading: "zhit", meaning: "to live", accept: ["live", "to be alive", "to reside"], example: { jp: "Мы живём здесь уже год.", en: "We have been living here for a year." }, drill: { jp: "Здесь очень хорошо жить", en: "It is very good to live here" }, hint: "ZHIT, one syllable — and note that жи is always said zhy, never zhee, because ж cannot soften. Its present tense is irregular: я живу, он живёт." },
        { id: "ru-u4l3-znat", type: "vocab", front: "знать", reading: "znat", meaning: "to know", accept: ["know", "to be aware"], example: { jp: "Я хочу знать, почему он здесь.", en: "I want to know why he is here." }, drill: { jp: "Я хочу это знать", en: "I want to know this" }, hint: "ZNAT, one syllable, and the зн cluster starts it with no vowel. Russian uses знать for facts and узнать for finding out." },
      ],
    },
    {
      id: "ru-u4l4",
      unit: 4,
      lesson: 4,
      title: "One stress, many syllables",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say six more core verbs, and use хотеть to string two verbs together.",
      items: [
        { id: "ru-u4l4-ponimat", type: "vocab", front: "понимать", reading: "ponimat", meaning: "to understand", accept: ["understand", "to get", "to comprehend"], example: { jp: "Я ещё не очень хорошо понимаю по-русски.", en: "I still do not understand Russian very well." }, drill: { jp: "Я хочу понимать по-русски", en: "I want to understand Russian" }, hint: "pa-ni-MAT. Я не понимаю is the most useful sentence you own today — say it early and often." },
        { id: "ru-u4l4-khotet", type: "vocab", front: "хотеть", reading: "khotet", meaning: "to want", accept: ["want", "to wish", "to desire"], example: { jp: "Я хочу чай, а она хочет молоко.", en: "I want tea, and she wants milk." }, drill: { jp: "Можно хотеть больше", en: "One may want more" }, hint: "kha-TYET, and its present tense is famously mixed: я хочу, ты хочешь, но мы хотим. Put a second verb straight after it in the infinitive: хочу читать." },
        { id: "ru-u4l4-delat", type: "vocab", front: "делать", reading: "delat", meaning: "to do", accept: ["do", "to make", "make"], example: { jp: "Что ты делаешь здесь?", en: "What are you doing here?" }, drill: { jp: "Что здесь можно делать", en: "What can one do here" }, hint: "DYE-lat, stress FIRST. It covers both do and make. ⚠️ Its perfective partner сделать is deliberately deferred to A2 (unit1.js §4)." },
        { id: "ru-u4l4-lyubit", type: "vocab", front: "любить", reading: "lyubit", meaning: "to love", accept: ["love", "to like", "to be fond of"], example: { jp: "Она любит чай, а я люблю молоко.", en: "She likes tea, and I like milk." }, drill: { jp: "Трудно не любить чай", en: "It is hard not to love tea" }, hint: "lyu-BIT. It is stronger than English like but Russians use it for food and books quite happily. Watch я люблю — an л appears out of nowhere." },
        { id: "ru-u4l4-videt", type: "vocab", front: "видеть", reading: "videt", meaning: "to see", accept: ["see", "to notice"], example: { jp: "Я вижу дорогу и наш дом.", en: "I see the road and our house." }, drill: { jp: "Я хочу видеть маму", en: "I want to see mum" }, hint: "VI-dyet, stress first. Я вижу swaps the д for ж — the same swap as видеть/вижу, ходить/хожу. Russian does this a lot." },
        { id: "ru-u4l4-slyshat", type: "vocab", front: "слышать", reading: "slyshat", meaning: "to hear", accept: ["hear", "to catch (a sound)"], example: { jp: "Здесь тихо, и я всё слышу.", en: "It is quiet here, and I hear everything." }, drill: { jp: "Трудно слышать это слово", en: "It is hard to hear this word" }, hint: "SLY-shat, stress first, with that ы vowel. Слышать is hearing a sound; слушать, with у, is listening on purpose." },
      ],
    },
  ],
};
