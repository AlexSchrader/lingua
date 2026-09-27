// RU Unit 19 — Описание и союзы ("Description and conjunctions") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Conventions are declared in ru/unit1.js §1–§10 and bind every card here.
//
// ★ THIS UNIT CLOSES THE BIGGEST HOLE IN THE RUSSIAN COURSE. Block 1 counted it
// over all 414 sentences it had authored (unit1.js §B) and handed the fix here:
// five words the course USES CONSTANTLY and taught NOWHERE, plus two pronouns
// that were simply missing. Measured by block 1 on u1–u6 sentences:
//
//     front        u1–u6 uses   was declared      now carded
//     ─────────────────────────────────────────────────────────
//     хороший          24       (stem-shadowed)   u19l1
//     старый           11       u7 `// FREE:`     u19l1
//     красивый          6       u7 `// FREE:`     u19l2
//     но                6       u7 `// FREE:`     u19l3
//     каждый            4       u7 `// FREE:`     u19l4
//     они               0       taught nowhere    u19l4
//     их                0       taught nowhere    u19l4
//
// `хороший` is the worst of them and the one no tool could see: it shares a stem
// with the TAUGHT adverb хорошо (u2), so `scripts/scope-ru.mjs` accepts every
// хороший sentence silently. Twenty-four sentences used an adjective the learner
// was never once asked to produce. This is the German `die Frage` failure in
// miniature, and it is fixed here. The other five block 1 listed as still free —
// плохой · большой · маленький · новый · трудный — are carded too, so l1 and l2
// are the complete basic adjective set.
//
// ⚠️ THE ADVERB/ADJECTIVE PAIRS ARE DELIBERATE, NOT DUPLICATES. Block 1 settled
// this (unit1.js §B): хорошо · плохо · легко · трудно · сильно are all TAKEN as
// ADVERBS, and хороший · плохой · лёгкий · трудный are different lexemes with
// different syntax — хорошо работать, but хороший день. Every one of these hints
// names its adverb partner, because the pair IS the lesson.
//
// ⚠️ THREE GLOSS COLLISIONS WERE DESIGNED OUT, and all three needed a hand check
// because `normalizeMeaning` strips articles and parentheticals before comparing:
//     `но`     lost "yet"   → it is one of u3 `ещё`'s two senses ("still, yet",
//                             which meaningVariants splits on the comma).
//     `какой`  lost "which" → that is u11 `который` exactly.
//     `такой`  keeps "so (with an adjective)" rather than a bare "so", which
//                             would have landed on l3's `поэтому`.
//
// ⚠️ LEXEME CALLS RECORDED (unit1.js §D — check-front.mjs's LEXEME verdict is
// blind to Cyrillic, so these are judgements, not measurements):
//   большой beside больше (u5)   — больше is the comparative of BOTH большой and
//                                  много, and its everyday sense is "more". A
//                                  learner who knows "more" does not know "big".
//   лёгкий beside легко (u6)     — adjective/adverb pair, as above.
//   какой beside как (u7)        — как asks HOW, какой asks WHAT KIND. Different
//                                  question, different word class.
//   другой beside друг (u6)      — one ancient root, and nothing a learner guesses.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT19 = {
  id: "ru-u19",
  lang: "ru",
  title: "Описание и союзы",
  order: 19,
  stage: "a1",
  lessons: [
    {
      id: "ru-u19l1",
      unit: 19,
      lesson: 1,
      title: "Good, bad, big, small, new, old",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe a thing with the six adjectives the course has been using at you since unit 1.",
      items: [
        { id: "ru-u19l1-khoroshiy", type: "vocab", front: "хороший", reading: "khoroshiy", meaning: "good", accept: ["a good one", "fine", "nice"], example: { jp: "Это хороший день, и всё хорошо.", en: "This is a good day, and everything is fine." }, drill: { jp: "Это очень хороший день", en: "This is a very good day" }, hint: "kha-RO-shyy, stress on RO, and the ш is hard so the и after it comes out as ы. You have been READING this word since unit 1 without ever being asked for it — 24 sentences of it. The ADVERB хорошо (unit 2) is a different word: хорошо работать, but хороший день." },
        { id: "ru-u19l1-plokhoy", type: "vocab", front: "плохой", reading: "plokhoy", meaning: "bad", accept: ["a bad one", "poor", "no good"], example: { jp: "Это плохой день, и погода плохая.", en: "This is a bad day, and the weather is bad." }, drill: { jp: "Плохой день и плохая погода", en: "A bad day and bad weather" }, hint: "pla-KHOY, stress at the end. The adjective belonging to the adverb плохо from unit 7 — плохо говорить, but плохой день. Its comparative is хуже, taught in unit 5, which looks nothing like it at all." },
        { id: "ru-u19l1-bolshoy", type: "vocab", front: "большой", reading: "bolshoy", meaning: "big", accept: ["large", "great", "a big one"], example: { jp: "Это большой город, и здесь есть метро.", en: "This is a big city, and it has an underground." }, drill: { jp: "Большой дом на нашей улице", en: "The big house on our street" }, hint: "bal-SHOY, stress at the end. Its comparative больше came in unit 5 — and больше is ALSO the comparative of много, which is why the two never felt connected. Большой театр is the Bolshoi: literally the big theatre." },
        { id: "ru-u19l1-malenkiy", type: "vocab", front: "маленький", reading: "malenkiy", meaning: "small", accept: ["little", "a small one", "tiny"], example: { jp: "Это маленький город, и здесь нет метро.", en: "This is a small town, and it has no underground." }, drill: { jp: "Маленький дом в нашем районе", en: "The small house in our district" }, hint: "MA-lin-kiy, stress first — three syllables. Opposite большой, comparative меньше from unit 5. Its short form мал means TOO small, which is what a shop assistant tells you about your размер." },
        { id: "ru-u19l1-novyy", type: "vocab", front: "новый", reading: "novyy", meaning: "new", accept: ["brand new", "a new one", "recent"], example: { jp: "Это новый дом, и здесь всё очень красиво.", en: "This is a new house, and everything here is very beautiful." }, drill: { jp: "Новый дом в центре города", en: "The new house in the city centre" }, hint: "NO-vyy, stress first. Its opposite старый is the next card. Новый год, the New Year, is the biggest night of the Russian calendar — so this is a word on every shop window in December." },
        { id: "ru-u19l1-staryy", type: "vocab", front: "старый", reading: "staryy", meaning: "old", accept: ["an old one", "aged", "ancient"], example: { jp: "Это старый дом, но он очень красивый.", en: "This is an old house, but it is very beautiful." }, drill: { jp: "Старый город очень красивый", en: "The old town is very beautiful" }, hint: "STA-ryy, stress first. It has been in this course since unit 1 as EXPOSURE ONLY — u7's FREE line declared it, 11 sentences used it — and this card is where it becomes yours. Of a person it means old in years; for the elder of two, Russian says старший." },
      ],
    },
    {
      id: "ru-u19l2",
      unit: 19,
      lesson: 2,
      title: "Beautiful, young, hard, easy",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Judge a thing or a person: beautiful or plain, young or old, hard or easy.",
      items: [
        { id: "ru-u19l2-krasivyy", type: "vocab", front: "красивый", reading: "krasivyy", meaning: "beautiful", accept: ["pretty", "handsome", "good-looking"], example: { jp: "Это красивый город, и здесь очень приятно.", en: "This is a beautiful city, and it is very pleasant here." }, drill: { jp: "Красивый город и красивая площадь", en: "A beautiful city and a beautiful square" }, hint: "kra-SI-vyy, stress on SI. Declared exposure-only on u7's FREE line and used in six alphabet-band sentences before now; this card closes that. It shares a root with красный, red, in unit 16 — красный once MEANT beautiful." },
        { id: "ru-u19l2-molodoy", type: "vocab", front: "молодой", reading: "molodoy", meaning: "young", accept: ["a young one", "youthful", "junior"], example: { jp: "Это молодой врач, и он очень добрый.", en: "This is a young doctor, and he is very kind." }, drill: { jp: "Молодой врач в больнице", en: "The young doctor at the hospital" }, hint: "ma-la-DOY, stress at the end, with both о before it reduced to a. Its opposite is старый. Молодец — well done — grows on the same root, and is the most common praise you will hear in Russian." },
        { id: "ru-u19l2-trudnyy", type: "vocab", front: "трудный", reading: "trudnyy", meaning: "difficult", accept: ["hard", "tough", "a hard one"], example: { jp: "Это трудный вопрос, и я не знаю ответ.", en: "This is a difficult question, and I do not know the answer." }, drill: { jp: "Трудный вопрос и трудный ответ", en: "A difficult question and a difficult answer" }, hint: "TRUD-nyy, stress first. The adjective to the adverb трудно from unit 6 — трудно говорить, but трудный вопрос. Built on труд, labour, so a трудный вопрос is literally a laborious one." },
        { id: "ru-u19l2-legkiy", type: "vocab", front: "лёгкий", reading: "lyogkiy", meaning: "easy", accept: ["light (in weight)", "simple", "an easy one"], example: { jp: "Это лёгкий вопрос, и я уже знаю ответ.", en: "This is an easy question, and I already know the answer." }, drill: { jp: "Это очень лёгкий вопрос", en: "This is a very easy question" }, hint: "LYOKH-kiy, stress on the ё — and the гк says KH, one of the few places Russian spelling and sound part company outright. TWO senses: easy, and light in weight. Its adverb легко came in unit 6." },
        { id: "ru-u19l2-vazhnyy", type: "vocab", front: "важный", reading: "vazhnyy", meaning: "important", accept: ["significant", "an important one", "weighty"], example: { jp: "Это важный вопрос, и ответ очень трудный.", en: "This is an important question, and the answer is very difficult." }, drill: { jp: "Это очень важный день", en: "This is a very important day" }, hint: "VAZH-nyy, stress first. Built on вага, an old word for weight — so an important matter is a weighty one, exactly the metaphor English makes. Its adverb важно means it matters." },
        { id: "ru-u19l2-interesnyy", type: "vocab", front: "интересный", reading: "interesnyy", meaning: "interesting", accept: ["of interest", "an interesting one", "absorbing"], example: { jp: "Это интересный фильм, и он мне нравится.", en: "This is an interesting film, and I like it." }, drill: { jp: "Интересный фильм и интересная книга", en: "An interesting film and an interesting book" }, hint: "in-ti-RYES-nyy, stress on RYES — four syllables, with both unstressed е reduced to i. An internationalism, so the meaning comes free and the STRESS is the work: not IN-teresting, but in-ti-RYES-nyy." },
      ],
    },
    {
      id: "ru-u19l3",
      unit: 19,
      lesson: 3,
      title: "Join two ideas together",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Contrast two statements, offer a choice, and give a reason or a result.",
      items: [
        { id: "ru-u19l3-no", type: "vocab", front: "но", reading: "no", meaning: "but", accept: ["however", "and yet", "all the same"], example: { jp: "Дом старый, но очень красивый.", en: "The house is old, but very beautiful." }, drill: { jp: "Город большой но очень красивый", en: "The city is big but very beautiful" }, hint: "NO, one syllable, and always stressed because it has only the one vowel. Used in this course since unit 1 on u7's FREE line; this is where it becomes yours. Russian has THREE of these and they do not swap: и joins, а sets two things side by side, но actually contradicts." },
        { id: "ru-u19l3-ili", type: "vocab", front: "или", reading: "ili", meaning: "or", accept: ["either", "or else"], example: { jp: "Чай или кофе, что вы хотите?", en: "Tea or coffee, what would you like?" }, drill: { jp: "Чай или кофе или сок", en: "Tea or coffee or juice" }, hint: "I-li, stress first. It offers a choice. Doubled up — или чай, или кофе — it means either...or, exactly the way English doubles either." },
        { id: "ru-u19l3-potomuchto", type: "vocab", front: "потому что", reading: "potomuchto", meaning: "because", accept: ["since", "for the reason that", "on account of"], example: { jp: "Я дома, потому что сегодня дождь.", en: "I am at home, because it is raining today." }, drill: { jp: "Я дома потому что дождь", en: "I am at home because of the rain" }, hint: "pa-ta-MU SHTO, stress on MU and again on SHTO — TWO words, always, and the comma goes in front of потому. It is по + тому, by that, plus что from unit 2. It answers почему." },
        { id: "ru-u19l3-esli", type: "vocab", front: "если", reading: "esli", meaning: "if", accept: ["in case", "provided that", "supposing"], example: { jp: "Если сегодня дождь, я дома.", en: "If it rains today, I am staying home." }, drill: { jp: "Если дождь я уже дома", en: "If it rains I am staying home" }, hint: "YES-li, stress first. It opens a CONDITION. It does not ask a question: the whether-if is ли on its own, a different word A2 teaches. Russian puts a comma before the second half." },
        { id: "ru-u19l3-poetomu", type: "vocab", front: "поэтому", reading: "poetomu", meaning: "that is why", accept: ["therefore", "so", "for that reason"], example: { jp: "Сегодня дождь, поэтому я дома.", en: "It is raining today, so I am at home." }, drill: { jp: "Здесь дорого поэтому мы дома", en: "It is expensive here so we stay home" }, hint: "pa-E-ta-mu, stress on the э. It is потому's mirror: потому что gives the REASON, поэтому gives the RESULT. Дождь, поэтому я дома — rain, therefore home." },
        { id: "ru-u19l3-znachit", type: "vocab", front: "значит", reading: "znachit", meaning: "it means", accept: ["that means", "in other words", "meaning"], example: { jp: "Закрыто, значит уже поздно.", en: "It is closed, which means it is late." }, drill: { jp: "Дождь значит мы уже дома", en: "Rain, which means we are home" }, hint: "ZNA-chit, stress first. Built on знать, to know, from unit 4 — so значит is literally it is known. In speech Russians scatter it everywhere as a filler, the way English uses so or like." },
      ],
    },
    {
      id: "ru-u19l4",
      unit: 19,
      lesson: 4,
      title: "Talk about them, and about which one",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what they have, ask what kind of thing something is, and pick out a different one.",
      items: [
        { id: "ru-u19l4-oni", type: "vocab", front: "они", reading: "oni", meaning: "they", accept: ["them (subject form)", "those people"], example: { jp: "Они уже здесь, и это очень хорошо.", en: "They are here already, and that is very good." }, drill: { jp: "Они уже дома сегодня", en: "They are home already today" }, hint: "a-NI, stress at the end. The pronoun set had stopped at SIX since unit 2 — я · ты · он · она · мы · вы — and они was taught nowhere at all. This card closes it. One form for every gender, unlike он and она." },
        { id: "ru-u19l4-ikh", type: "vocab", front: "их", reading: "ikh", meaning: "their", accept: ["theirs", "of them", "them (object form)"], example: { jp: "Их дом рядом, и это очень удобно.", en: "Their house is nearby, and that is very convenient." }, drill: { jp: "Их дом на нашей улице", en: "Their house is on our street" }, hint: "IKH, one syllable. It does DOUBLE duty exactly as его and её do: их дом is their house, and я их знаю is I know them. It never changes its ending — их дом, их квартира, их дети." },
        { id: "ru-u19l4-kazhdyy", type: "vocab", front: "каждый", reading: "kazhdyy", meaning: "every", accept: ["each", "every single", "each one"], example: { jp: "Каждый день я читаю книгу.", en: "Every day I read a book." }, drill: { jp: "Каждый день здесь очень тепло", en: "Every day it is very warm here" }, hint: "KAZH-dyy, stress first. Declared exposure-only on u7's FREE line and used in four alphabet-band sentences; this closes it. It takes a SINGULAR noun — каждый день, every day, never каждые дни." },
        { id: "ru-u19l4-kakoy", type: "vocab", front: "какой", reading: "kakoy", meaning: "what kind of", accept: ["what sort of", "what a", "of what kind"], example: { jp: "Какой это цвет, я не знаю.", en: "What colour this is, I do not know." }, drill: { jp: "Какой это цвет здесь", en: "What colour is this here" }, hint: "ka-KOY, stress at the end. It asks about a QUALITY — Какой он? What is he like? — where который (unit 11) asks which ONE of several. It also exclaims: Какой красивый день!" },
        { id: "ru-u19l4-takoy", type: "vocab", front: "такой", reading: "takoy", meaning: "such a", accept: ["so (with an adjective)", "that kind of", "like that"], example: { jp: "Это такой красивый город!", en: "What a beautiful city this is!" }, drill: { jp: "Это такой красивый день", en: "This is such a beautiful day" }, hint: "ta-KOY, stress at the end, and it is какой with т in place of к. In front of an adjective it means so: такой красивый, so beautiful. Russian uses такой with adjectives and так with verbs." },
        { id: "ru-u19l4-drugoy", type: "vocab", front: "другой", reading: "drugoy", meaning: "another", accept: ["a different one", "other", "the other"], example: { jp: "Это другой цвет, и он мне нравится.", en: "This is a different colour, and I like it." }, drill: { jp: "Другой цвет здесь очень красивый", en: "The other colour here is very beautiful" }, hint: "dru-GOY, stress at the end. It shares an ancient root with друг, a friend, from unit 6 — an old sense of the other one — but no learner would guess that, so it earns its own card. Друг друга means each other." },
      ],
    },
  ],
};
