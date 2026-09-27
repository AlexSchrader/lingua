// RU Unit 30 — Путешествие ("A journey") — A1
// ─────────────────────────────────────────────────────────────────────────────
// THE LAST UNIT OF RUSSIAN A1. Conventions are declared in ru/unit1.js §1–§10 and
// bind every card here. "Vocabulary 6" was a scaffold counter title, so the theme
// was block 3's choice, and it was chosen to close the band on something a learner
// can actually go and do.
//
// WHY TRAVEL, MEASURED. u9 Знакомые слова gave the internationalisms of transport
// (метро · такси · автобус · трамвай · аэропорт · билет · отель · паспорт) and u14
// Город и места gave the town (вокзал · остановка · идти · ехать). Against
// `src/data/ru/TAUGHT-WORDS.md` on this branch there was still no plane, no train,
// no visa, no border, no suitcase, no queue and no map — so a learner could name the
// airport and not the thing that flies out of it. l4 then closes the whole band.
//
// ★ l4 IS THE CAPSTONE OF THE LANGUAGE, and it is built as one. Its six fronts are
// what you say at the end of something — congratulate, wish, promise, advice, level,
// result — and `уровень`'s hint names what the learner has just finished. That is a
// CAPABILITY milestone, which CLAUDE.md marks as the mission-aligned progress signal,
// not an engagement reward: "A1 complete" is a skill gained.
//
// ⚠️ LEXEME CALLS RECORDED (unit1.js §D — judgements, not measurements):
//   `поезд` beside u14 `ехать` — one root, -езд-, and a train is not a route an
//        English speaker travels to from "to go by vehicle". The surface gives
//        nothing away either. Allowed, and the hint names the link as a hook.
//   `путешествие` beside u14 `ехать` and u24 `случай` — путь + шествие, a way plus
//        a procession, and `путь` is deliberately NOT carded so the two do not
//        split one idea. Allowed.
//   `памятник` beside u22 `помнить` — пам-/пом- alternation, invisible. Allowed.
//   `карта` beside u27 `картина` and u13 `картошка` — three words that start alike;
//        карта's hint names all three.
//   `далёкий` beside u14 `далеко` — adverb and adjective, the pair unit1.js §B
//        settled. Glosses differ by word: "far" and "distant".
//   `приключение` beside u24 `случай` — both from an old verb for happening, and
//        neither derivable from the other. Allowed.
//   `багаж` beside `чемодан` in l1 — the mass noun and one piece of it.
//   AVOIDED on the same test: `гостиница` (vs u9 отель — and it would have glossed
//        to "a hotel", one prompt with two answers; also vs u27 гость) · `путь`
//        (vs `путешествие` — one of the two, not both) · `поездка` (vs u14 ехать) ·
//        `конец` (vs u24 наконец, whose hint leans on конец not being taught, and vs
//        u6 конечно) · `молодец` (vs u19 молодой, and u19's hint already hands it
//        over for free, which unit1.js §D says is a reason NOT to card it) ·
//        `дорогой` (vs u12 дорого) · `приглашение` (vs u27 приглашать) · `желание`
//        (vs `желать`) · `обещание` (vs `обещать`) · `поздравление` (vs
//        `поздравлять`).
//
// ⚠️ GLOSS COLLISIONS DESIGNED OUT — hand-checked against `normalizeMeaning`:
//     `очередь` takes "a queue", with "your turn" in accept[] — the second sense is
//             real and had nowhere else to go.
//     `карта` takes "a map"; u27 `картина` keeps "a painting".
//     `гид` takes "a guide" as a PERSON — the hint says a guidebook is
//             путеводитель, so the two senses never share a card.
//     `багаж` takes "luggage" and `чемодан` "a suitcase".
//     `совет` takes "advice"; the hint adds the council sense, which is where the
//             Soviet Union got its name.
//     `уровень` takes "a level"; `результат` takes "a result".
//     Every internationalism was checked for the §9 free pass — виза · гид ·
//     турист · сувенир · экскурсия · результат all carry an article or a different
//     English word in the gloss, so `checkProduce(meaning)` fails on all six.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT30 = {
  id: "ru-u30",
  lang: "ru",
  title: "Путешествие",
  order: 30,
  stage: "a1",
  lessons: [
    {
      id: "ru-u30l1",
      unit: 30,
      lesson: 1,
      title: "Get to the plane and through the border",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about the plane, the train, your visa, the border, your suitcase and the queue you are standing in.",
      items: [
        { id: "ru-u30l1-samolyot", type: "vocab", front: "самолёт", reading: "samolyot", meaning: "a plane", accept: ["an aeroplane", "an aircraft", "an airplane"], example: { jp: "Наш самолёт будет здесь через час.", en: "Our plane will be here in an hour." }, drill: { jp: "Наш самолёт будет здесь рано", en: "Our plane will be here early" }, hint: "sa-ma-LYOT, stress on the ё, which is always the stressed vowel (unit1.js §7). Masculine. It is сам + лёт, self-flier — a word Russian BUILT rather than borrowed, unlike most of unit 9. На самолёте means by plane." },
        { id: "ru-u30l1-poezd", type: "vocab", front: "поезд", reading: "poezd", meaning: "a train", accept: ["train", "a railway train"], example: { jp: "Наш поезд будет здесь в девять.", en: "Our train will be here at nine." }, drill: { jp: "Этот поезд очень старый и быстрый", en: "This train is very old and fast" }, hint: "PO-yezd, stress first, and the зд goes quiet at the end so it sounds like PO-yest. Masculine, and the plural throws the stress out: поездА. ⚠️ Same root as unit 14's ехать — a good hook, and no help at all in guessing, which is why both are cards." },
        { id: "ru-u30l1-viza", type: "vocab", front: "виза", reading: "viza", meaning: "a visa", accept: ["an entry visa", "a travel visa"], example: { jp: "Моя виза уже готова, и это очень хорошо.", en: "My visa is already ready, and that is very good." }, drill: { jp: "Моя новая виза уже готова", en: "My new visa is already ready" }, hint: "VI-za, stress first. Feminine (-а). An internationalism. ⚠️ A Russian visa normally needs приглашение, a formal invitation — unit 27's приглашать is the verb behind it — so this is a word with real paperwork attached." },
        { id: "ru-u30l1-granitsa", type: "vocab", front: "граница", reading: "granitsa", meaning: "a border", accept: ["a frontier", "a boundary", "a limit"], example: { jp: "Граница здесь очень близко, и там всегда очередь.", en: "The border is very close here, and there is always a queue there." }, drill: { jp: "Наша граница уже очень близко", en: "Our border is already very close" }, hint: "gra-NI-tsa, stress on NI. Feminine (-а). ⚠️ За границей means abroad — literally beyond the border — and Russians say it in every register. It takes the instrumental there, which unit1.js §5 holds back to A2, so learn the phrase whole." },
        { id: "ru-u30l1-chemodan", type: "vocab", front: "чемодан", reading: "chemodan", meaning: "a suitcase", accept: ["a case", "a travelling case"], example: { jp: "Мой чемодан очень большой, и он уже готов.", en: "My suitcase is very big, and it is already packed." }, drill: { jp: "Мой чемодан очень большой и новый", en: "My suitcase is very big and new" }, hint: "chi-ma-DAN, stress at the end. Masculine. From Persian by way of Turkic — one of the eastern loans in this course, like unit 25's карандаш. Собирать чемодан is to pack." },
        { id: "ru-u30l1-ochered", type: "vocab", front: "очередь", reading: "ochered", meaning: "a queue", accept: ["a line", "your turn", "a waiting line"], example: { jp: "Здесь очень большая очередь, и это плохо.", en: "There is a very big queue here, and that is bad." }, drill: { jp: "Здесь сегодня очень большая очередь", en: "There is a very big queue here today" }, hint: "O-chi-red, stress FIRST. ⚠️ FEMININE, and a -ь noun so the ending tells you nothing (unit1.js §3): большая очередь. ⚠️ AND A SECOND SENSE: your turn — Ваша очередь. Russian queues are an institution, and стоять в очереди is a phrase every learner needs." },
      ],
    },
    {
      id: "ru-u30l2",
      unit: 30,
      lesson: 2,
      title: "Find your way round a strange city",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use a map, join a guided tour, follow the guide, look at the monument, buy the souvenir.",
      items: [
        { id: "ru-u30l2-karta", type: "vocab", front: "карта", reading: "karta", meaning: "a map", accept: ["a playing card", "a bank card", "a chart"], example: { jp: "Эта карта очень старая, и здесь нет нашей улицы.", en: "This map is very old, and our street is not on it." }, drill: { jp: "Эта старая карта очень большая", en: "This old map is very big" }, hint: "KAR-ta, stress first. Feminine (-а). ⚠️ THREE SENSES IN ONE WORD: a map, a playing card, and a bank card — банковская карта is what you pay with. And unit 27's картина, a painting, only looks related." },
        { id: "ru-u30l2-ekskursiya", type: "vocab", front: "экскурсия", reading: "ekskursiya", meaning: "a guided tour", accept: ["an excursion", "a sightseeing trip", "a field trip"], example: { jp: "Эта экскурсия была очень интересная и полезная.", en: "That guided tour was very interesting and useful." }, drill: { jp: "Наша экскурсия была очень полезная", en: "Our guided tour was very useful" }, hint: "eks-KUR-si-ya, stress on KUR. Feminine (-я). An internationalism, so the stress is the work. ⚠️ It is a GUIDED tour, always with a гид — a Russian экскурсия is a lecture on foot, not a wander round on your own." },
        { id: "ru-u30l2-gid", type: "vocab", front: "гид", reading: "gid", meaning: "a guide", accept: ["a tour guide", "the person showing you round"], example: { jp: "Наш гид очень хорошо говорит по-русски.", en: "Our guide speaks Russian very well." }, drill: { jp: "Этот гид очень хорошо говорит", en: "This guide speaks very well" }, hint: "GID, one syllable. Masculine. From French guide. ⚠️ IT IS THE PERSON. A guidebook is путеводитель, a different word. And a woman guide is still гид — this noun does not change for gender." },
        { id: "ru-u30l2-pamyatnik", type: "vocab", front: "памятник", reading: "pamyatnik", meaning: "a monument", accept: ["a memorial", "a statue"], example: { jp: "Этот памятник очень старый, и он в центре.", en: "This monument is very old, and it is in the centre." }, drill: { jp: "Этот старый памятник очень красивый", en: "This old monument is very beautiful" }, hint: "PA-myat-nik, stress first. Masculine. Built on память, memory, which is not taught — so it arrives on its own, though unit 22's помнить is its cousin. ⚠️ Every Russian town has a памятник at its centre, so this is a practical word, not a museum one." },
        { id: "ru-u30l2-suvenir", type: "vocab", front: "сувенир", reading: "suvenir", meaning: "a souvenir", accept: ["a keepsake", "a memento", "a gift from a trip"], example: { jp: "Этот сувенир очень красивый и маленький.", en: "This souvenir is very beautiful and small." }, drill: { jp: "Этот маленький сувенир очень красивый", en: "This small souvenir is very beautiful" }, hint: "su-vi-NIR, stress at the end. Masculine. From French. ⚠️ Russians buy сувениры as an obligation rather than a whim — coming back from a trip without one for each relative is a real breach, so the word comes up far more than its English twin." },
        { id: "ru-u30l2-turist", type: "vocab", front: "турист", reading: "turist", meaning: "a tourist", accept: ["a traveller", "a sightseer", "a hiker"], example: { jp: "Этот турист не понимает наш язык.", en: "This tourist does not understand our language." }, drill: { jp: "Этот турист не говорит по-русски", en: "This tourist does not speak Russian" }, hint: "tu-RIST, stress at the end. Masculine; туристка is the feminine. An internationalism, so the stress is the only work. ⚠️ Russian also uses турист for a HIKER — туристический поход is a camping trip, not a coach tour." },
      ],
    },
    {
      id: "ru-u30l3",
      unit: 30,
      lesson: 3,
      title: "Talk about the journey itself",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe a journey: the shore, the beach, a distant place, an adventure and your luggage.",
      items: [
        { id: "ru-u30l3-puteshestvie", type: "vocab", front: "путешествие", reading: "puteshestvie", meaning: "a journey", accept: ["travel", "a voyage", "a long trip"], example: { jp: "Это было очень трудное путешествие, и мы устали.", en: "That was a very hard journey, and we got tired." }, drill: { jp: "Это было очень большое путешествие", en: "That was a very big journey" }, hint: "pu-ti-SHES-tvi-ye, stress on SHES — five syllables, the longest word in this course. Neuter (-е). It is путь, a way, plus шествие, a procession. ⚠️ It is a JOURNEY, not a short trip: for that Russian says поездка, from unit 14's ехать." },
        { id: "ru-u30l3-bereg", type: "vocab", front: "берег", reading: "bereg", meaning: "a shore", accept: ["a bank", "a coast", "the shoreline"], example: { jp: "Мы были на берегу, и там был песок.", en: "We were on the shore, and there was sand there." }, drill: { jp: "Этот берег очень большой и красивый", en: "This shore is very big and beautiful" }, hint: "BE-reg, stress first, and the г goes quiet to k at the end. Masculine. На берегУ takes the special -у ending that в лесУ and в садУ took in unit 26 — the same short list of masculine place nouns. It is a river bank and a sea shore alike." },
        { id: "ru-u30l3-plyazh", type: "vocab", front: "пляж", reading: "plyazh", meaning: "a beach", accept: ["the beach", "a sandy beach"], example: { jp: "Этот пляж очень большой, и здесь только песок.", en: "This beach is very big, and there is only sand here." }, drill: { jp: "Этот пляж очень большой и белый", en: "This beach is very big and white" }, hint: "PLYAZH, one syllable, and the ж goes quiet so it ends in SH. Masculine. From French plage. ⚠️ It is the sandy beach you lie on; берег is the shore as geography, and Russians do not swap them." },
        { id: "ru-u30l3-dalyokiy", type: "vocab", front: "далёкий", reading: "dalyokiy", meaning: "distant", accept: ["far away", "remote", "a faraway one"], example: { jp: "Это очень далёкий город, и я там не был.", en: "That is a very distant city, and I have not been there." }, drill: { jp: "Это очень далёкий и старый город", en: "That is a very distant and old city" }, hint: "da-LYO-kiy, stress on the ё (unit1.js §7). The ADJECTIVE to unit 14's adverb далеко: он далеко, but далёкий город — exactly the pairing быстро and быстрый make in unit 23. Дальний Восток is the Russian Far East, using another form of the root." },
        { id: "ru-u30l3-priklyuchenie", type: "vocab", front: "приключение", reading: "priklyuchenie", meaning: "an adventure", accept: ["an escapade", "a exploit", "something exciting that happened"], example: { jp: "Это было очень большое приключение, и мы рады.", en: "That was a very big adventure, and we are glad." }, drill: { jp: "Это очень большое приключение сегодня", en: "That is a very big adventure today" }, hint: "pri-klyu-CHE-ni-ye, stress on CHE. Neuter (-е). ⚠️ It shares an old root with unit 24's случай — both from a verb meaning to happen — and neither is guessable from the other. In Russian a приключение is almost always a GOOD thing; for a bad one they say происшествие." },
        { id: "ru-u30l3-bagazh", type: "vocab", front: "багаж", reading: "bagazh", meaning: "luggage", accept: ["baggage", "the bags"], example: { jp: "Наш багаж уже здесь, и чемодан тоже.", en: "Our luggage is already here, and the suitcase too." }, drill: { jp: "Наш багаж уже в самолёте", en: "Our luggage is already on the plane" }, hint: "ba-GAZH, stress at the end, and the ж goes quiet so it ends in SH. Masculine. ⚠️ AND IT HAS NO PLURAL, like мебель in unit 29 — багаж is all of it at once. From French bagage. Lesson 1's чемодан is one piece of it." },
      ],
    },
    {
      id: "ru-u30l4",
      unit: 30,
      lesson: 4,
      title: "Close the level: congratulate, wish, promise",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Congratulate somebody, wish them well, promise something, give advice — and name the level you have just finished.",
      items: [
        { id: "ru-u30l4-pozdravlyat", type: "vocab", front: "поздравлять", reading: "pozdravlyat", meaning: "to congratulate", accept: ["to wish someone a happy occasion", "to send congratulations"], example: { jp: "Мы всегда поздравляли бабушку в январе.", en: "We always congratulated grandma in January." }, drill: { jp: "Нужно поздравлять бабушку каждый год", en: "One must congratulate grandma every year" }, hint: "paz-drav-LYAT, stress at the end: я поздравляю, ты поздравляешь. ⚠️ Accusative for the PERSON and С plus the instrumental for the OCCASION — Поздравляю с днём рождения! — and the instrumental half is A2 (unit1.js §5), so at A1 use the verb with a person only. Поздравляю! on its own is Congratulations!" },
        { id: "ru-u30l4-zhelat", type: "vocab", front: "желать", reading: "zhelat", meaning: "to wish", accept: ["to wish someone something", "to desire"], example: { jp: "Мы желали ему успеха каждый год.", en: "We wished him success every year." }, drill: { jp: "Нужно желать ему только успеха", en: "One must wish him nothing but success" }, hint: "zhi-LAT, stress at the end: я желаю, ты желаешь. ⚠️ THE THING WISHED GOES GENITIVE — желаю успеха, желаю удачи — a fixed shape A1 learns whole rather than as a paradigm (unit1.js §5). Желание is a wish, and Желаю! is what a Russian says raising a glass." },
        { id: "ru-u30l4-obeshchat", type: "vocab", front: "обещать", reading: "obeshchat", meaning: "to promise", accept: ["to give your word", "to undertake"], example: { jp: "Он обещал быть здесь рано, но его нет.", en: "He promised to be here early, but he is not here." }, drill: { jp: "Не нужно обещать это сегодня", en: "One should not promise this today" }, hint: "a-bi-SHCHAT, stress at the end: я обещаю, ты обещаешь. Обещание is the promise. ⚠️ Russians treat обещать more heavily than English speakers treat promise — do not use it for a casual maybe; unit 22's может быть is for that." },
        { id: "ru-u30l4-sovet", type: "vocab", front: "совет", reading: "sovet", meaning: "advice", accept: ["a piece of advice", "a council", "a tip"], example: { jp: "Это был очень хороший совет, и я его помню.", en: "That was very good advice, and I remember it." }, drill: { jp: "Твой совет очень хороший", en: "Your advice is very good" }, hint: "sa-VET, stress at the end. Masculine, and ⚠️ UNLIKE ENGLISH IT COUNTS: один совет is one piece of advice and советы are several. ⚠️ It also means a COUNCIL, which is where the Soviet Union got its name — Советский Союз, the union of councils." },
        { id: "ru-u30l4-uroven", type: "vocab", front: "уровень", reading: "uroven", meaning: "a level", accept: ["a standard", "a grade", "a stage"], example: { jp: "Мой уровень русского языка уже хороший.", en: "My level of Russian is already good." }, drill: { jp: "Наш уровень русского языка хороший", en: "Our level of Russian is good" }, hint: "U-ra-ven, stress FIRST. ⚠️ MASCULINE, and a -ь noun so the ending tells you nothing (unit1.js §3): мой уровень. Its е is fleeting — уровень but уровня. ⚠️ AND THIS IS THE WORD FOR WHAT YOU HAVE JUST FINISHED: уровень A1, the first rung of the Polyglot Ladder, thirty units of it." },
        { id: "ru-u30l4-rezultat", type: "vocab", front: "результат", reading: "rezultat", meaning: "a result", accept: ["an outcome", "a score", "the upshot"], example: { jp: "Это очень хороший результат, и мы рады.", en: "That is a very good result, and we are glad." }, drill: { jp: "Это наш очень хороший результат", en: "That is our very good result" }, hint: "ri-zul-TAT, stress at the end. Masculine. An internationalism, so the stress is the whole task. В результате means as a result — the job unit 19's поэтому does in speech. ⚠️ It is the last card of Russian A1, and the результат is that you can now read, hear and say all 720 of them." },
      ],
    },
  ],
};
