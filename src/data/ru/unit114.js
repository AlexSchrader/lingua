// RU Unit 114 — Повествование и огласка ("Narration and publicity") — B2
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ THE SCAFFOLD TITLE WAS `Media and narrative` AND u45 IS ALREADY THE PRESS
// UNIT. u45 shipped `заголовок` · `репортаж` · `редакция` · `тираж` · `эфир` ·
// `сюжет` · `обзор` · `интервью` · `пресса` · `статья` · `публика` · `подписка`
// · `зритель` · `выпуск`; u27 holds `газета` · `журнал`; u39 `новость` ·
// `речь`; u68 `образ`; u74 `рецензия`; u81 `сплетня` · `мол` · `дескать`.
// So "media" is spent. This unit is narrowed to TWO things u45 does not touch:
// HOW A STORY IS BUILT (the craft words) and WHAT HAPPENS WHEN INFORMATION IS
// DELIBERATELY BENT.
//
// ⚠️ CROSS-BLOCK BOUNDARY, STATED CENTRALLY AND HONOURED HERE:
//   u121 (also mine) OWNS THE PLATFORM — `аккаунт` · `подписчик` · `лайк` ·
//   `стрим` · `алгоритм` · `сервер` · `утечка`. u114 owns THE NARRATIVE AND THE
//   NEWSROOM. This is the shape that cost Indonesian 62 cards, so it is split by
//   LESSON as well as by unit: nothing in u114 names a platform or a device, and
//   nothing in u121 names a story's shape.
//   ⚠️ `достоверность` · `достоверный` · `статистика` · `верификация` ARE BLOCK
//   1's u99 and this unit does NOT card them, although l4 is about fact-checking
//   and reached for them twice while being written. `фейк` and `дезинформация`
//   carry that lesson instead.
//   ⚠️ `алгоритм` is u121's, not this unit's.
//
// ⚠️ ONE SEED FROM THE CREW BRIEF DELIBERATELY NOT CARDED: `редактура`.
// Two of its lexeme family are already taught — `редакция` (u45, the editorial
// office) and `редактировать` (u48, to edit) — so a third ред- noun fails
// unit1.js §D twice over. The brief named it as a BOUNDARY marker (u114's side
// of the line, not u121's), and that boundary is unaffected by dropping it.
// `вёрстка` «page layout» probes free and is DEFERRED, not refused, for a later
// block that wants the print trade.
//
// ⚠️ ONE ALLOWED §D PAIR, RECORDED SO IT IS NOT "FIXED" LATER:
//   `рассказчик` alongside `рассказывать` (u34). Assigned centrally. The
//   judgement: the card teaches the LITERARY narrator — the voice a text is told
//   in, which is a technical term — and its hint says so explicitly and names
//   the verb. A learner reaching for "a person who tells things" builds a phrase,
//   not this word.
//
// ⚠️ ALSO REFUSED: `журналист` (§D, against `журнал` u27 — too guessable) ·
//   `подача` (its everyday sense is a tennis serve, and `подарок` u18 is near) ·
//   `правка` (FIVE прав- words are already taught: правильно u6, правда u22,
//   правильный u40, правило u41, право u51).
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT114 = {
  id: "ru-u114",
  lang: "ru",
  title: "Повествование и огласка",
  order: 114,
  stage: "b2",
  lessons: [
    {
      id: "ru-u114l1",
      unit: 114,
      lesson: 1,
      title: "How a story is built",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about narration, a narrator, a character, the opening and the resolution of a plot, and invented material.",
      items: [
        { id: "ru-u114l1-povestvovanie", type: "vocab", front: "повествование", reading: "povestvovanie", meaning: "narration", accept: ["the telling of a story", "narrative", "the way a story is told"], example: { jp: "Повествование здесь идёт очень медленно, и это сделано нарочно.", en: "The narration here moves very slowly, and that is done on purpose." }, drill: { jp: "Повествование здесь идёт очень медленно", en: "The narration here moves very slowly" }, hint: "pa-vest-va-VA-ni-ye — stress on the fourth syllable VA, and both unstressed о reduce to a. NEUTER (-ие). ⚠️ A LITERARY-CRITICISM WORD, and it names the ACT of telling, not the story told: «повествование от первого лица», first-person narration. Related to повесть, a novella, which this course does not card. Not to be confused with `повестка` (u72), a summons." },
        { id: "ru-u114l1-rasskazchik", type: "vocab", front: "рассказчик", reading: "rasskazchik", meaning: "a narrator", accept: ["the narrating voice", "the voice telling a story", "the teller of a text"], example: { jp: "Рассказчик в этой книге сам не понимает, что происходит.", en: "The narrator in this book does not himself understand what is happening." }, drill: { jp: "Рассказчик в этой книге сам не понимает всего", en: "The narrator in this book does not himself understand everything" }, hint: "ras-KAZ-chik — stress on KAZ, and the зч is said as shch. MASCULINE. ⚠️ From `рассказывать` (u34, «to tell»), and the course usually refuses a noun this close to a taught verb (unit1.js §D) — it is carded because THIS is the technical sense: the VOICE a text is told in, which may be unreliable, a child, or dead. A person who tells good stories is «он хорошо рассказывает»." },
        { id: "ru-u114l1-personazh", type: "vocab", front: "персонаж", reading: "personazh", meaning: "a character in a story", accept: ["a fictional figure", "a figure in a book or film", "a dramatis persona"], example: { jp: "Персонаж в этой книге нужен только для одной сцены.", en: "The character in this book is needed for only one scene." }, drill: { jp: "Персонаж в этой книге нужен для одной сцены", en: "The character in this book is needed for one scene" }, hint: "per-sa-NAZH — stress on the last syllable, ending in ж, and the о reduces to a. MASCULINE. ⚠️ A PERSON IN A TEXT, never a personality: `характер` (u28) is the character someone HAS. Also used mockingly of a real person — «ну и персонаж!», what a piece of work." },
        { id: "ru-u114l1-zavyazka", type: "vocab", front: "завязка", reading: "zavyazka", meaning: "the opening of a plot", accept: ["the exposition", "where the action is set up", "the inciting part of a story"], example: { jp: "Завязка очень короткая: два письма и один разговор.", en: "The opening of the plot is very short: two letters and one conversation." }, drill: { jp: "Завязка очень короткая", en: "The opening of the plot is very short" }, hint: "za-VYAZ-ka — stress on VYAZ. FEMININE (-а). From завязать, to tie up — the plot's knot being TIED. ⚠️ ITS PAIR IS THE NEXT CARD, `развязка`, the same knot being UNTIED, and Russian criticism uses the two as a fixed pair. Learning one without the other wastes half the picture." },
        { id: "ru-u114l1-razvyazka", type: "vocab", front: "развязка", reading: "razvyazka", meaning: "the resolution of a plot", accept: ["the denouement", "how a story is untangled", "the final working-out"], example: { jp: "Развязка была такая простая, что все сразу всё поняли.", en: "The resolution was so simple that everyone understood everything at once." }, drill: { jp: "Развязка была такая простая", en: "The resolution was" }, hint: "raz-VYAZ-ka — stress on VYAZ. FEMININE (-а). The knot of `завязка` being untied. ⚠️ TWO SENSES AND THE SECOND IS ON EVERY ROAD SIGN: a развязка is also a motorway INTERCHANGE, where roads untangle. If you drive in Russia you will meet the road sense first." },
        { id: "ru-u114l1-vymysel", type: "vocab", front: "вымысел", reading: "vymysel", meaning: "invention", accept: ["fiction", "something made up", "a fabrication in a story"], example: { jp: "Вымысел в этой книге есть, но главное всё-таки правда.", en: "There is invention in this book, but the main thing is still the truth." }, drill: { jp: "Вымысел в этой книге есть", en: "There is invention in this book" }, hint: "VY-my-sel — stress on the FIRST syllable, which learners get wrong. MASCULINE, and ⚠️ THE е DROPS in every other form: вымысел → вымысла, вымыслом. From мысль (unit 52, «a thought») with вы-: a thought thought OUT. Neutral in literature, an accusation in court." },
      ],
    },
    {
      id: "ru-u114l2",
      unit: 114,
      lesson: 2,
      title: "Reading it, and reading into it",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about an interpretation, a metaphor, a writer's style, a real-life model, guesswork and a screen adaptation.",
      items: [
        { id: "ru-u114l2-traktovka", type: "vocab", front: "трактовка", reading: "traktovka", meaning: "an interpretation", accept: ["a reading of a work", "how someone takes a text", "a construction put on something"], example: { jp: "Трактовка у каждого своя, и спорить об этом можно весь вечер.", en: "Everyone has their own interpretation, and you can argue about it all evening." }, drill: { jp: "Трактовка у каждого своя", en: "Everyone has their own interpretation" }, hint: "trak-TOF-ka — stress on TOF, and the в devoices to f before к. FEMININE (-а). ⚠️ Used of a TEXT, a ROLE and a LAW alike: an actor's трактовка of Hamlet, a court's трактовка of a statute. `обзор` (u45) is a survey and `рецензия` (u74) a written review — a трактовка is what you think it MEANS. Nothing to do with `трактор` (u88)." },
        { id: "ru-u114l2-metafora", type: "vocab", front: "метафора", reading: "metafora", meaning: "a metaphor", accept: ["a figure of speech", "an image standing for something else", "the metaphor"], example: { jp: "Метафора здесь простая: дом — это сама страна.", en: "The metaphor here is simple: the house is the country itself." }, drill: { jp: "Метафора здесь простая и очень старая", en: "The metaphor here is simple and very old" }, hint: "me-TA-fa-ra — stress on TA, and the unstressed о reduces to a. FEMININE (-а). ⚠️ STRESS IS THE WHOLE DIFFICULTY: English says MET-a-phor, Russian me-TA-fa-ra. `образ` (u68) is the image in the mind; a метафора is the device that puts it there." },
        { id: "ru-u114l2-slog", type: "vocab", front: "слог", reading: "slog", meaning: "a writer's style", accept: ["prose style", "the manner of writing", "the cut of someone's sentences"], example: { jp: "Слог у него тяжёлый, но читать всё равно интересно.", en: "His style is heavy, but it is interesting to read all the same." }, drill: { jp: "Слог у него тяжёлый", en: "His style is heavy" }, hint: "SLOG — one syllable. MASCULINE. ⚠️ TWO SENSES AND YOU WILL MEET THE OTHER ONE IN EVERY HINT IN THIS COURSE: a слог is also a SYLLABLE. Same word, and the connection is old — the way a sentence is put together syllable by syllable. From сложить, to put together." },
        { id: "ru-u114l2-prototip", type: "vocab", front: "прототип", reading: "prototip", meaning: "a real-life model", accept: ["the original a character is based on", "a prototype", "the real person behind a character"], example: { jp: "Прототип этого героя жил в том же городе сто лет назад.", en: "The real-life model for this hero lived in the same city a hundred years ago." }, drill: { jp: "Прототип этого героя жил в том же городе", en: "The real-life model for this hero lived in the same city" }, hint: "pra-ta-TIP — stress on the last syllable, and both о reduce to a. MASCULINE. ⚠️ TWO SENSES, and in Russian the LITERARY one is at least as common as the engineering one: the real person a `персонаж` was drawn from. An engineer's prototype is also a прототип, so context does the work." },
        { id: "ru-u114l2-domysel", type: "vocab", front: "домысел", reading: "domysel", meaning: "guesswork", accept: ["conjecture", "an unfounded addition", "something read into a story"], example: { jp: "Домысел начался сразу, потому что точно никто ничего не знал.", en: "The guesswork started at once, because nobody knew anything for certain." }, drill: { jp: "Домысел начался сразу", en: "The guesswork started at once" }, hint: "DO-my-sel — stress on the first syllable, and the е drops in every other form (домысла). MASCULINE. ⚠️ ITS PAIR IS `вымысел` IN LESSON 1 and the prefix is the whole difference: вы- «thought out» = invention offered AS invention; до- «thought up to» = a gap filled in and offered as fact. The second is the dishonest one." },
        { id: "ru-u114l2-ekranizatsiya", type: "vocab", front: "экранизация", reading: "ekranizatsiya", meaning: "a screen adaptation", accept: ["a film version of a book", "filming a novel", "the screen version"], example: { jp: "Экранизация была только через сорок лет, и книга от этого стала известной.", en: "The screen adaptation came only forty years later, and the book became well known because of it." }, drill: { jp: "Экранизация была только через сорок лет", en: "The screen adaptation came only forty years later" }, hint: "e-kra-ni-ZA-tsi-ya — stress on ZA, opening with the hard э (unit 2). FEMININE (-я). ⚠️ ONE WORD FOR A WHOLE ENGLISH PHRASE, built straight off `экран` (u43, «a screen») — and this is how Russian makes such words: noun + -изация = «the turning of a thing into that». You could decode it unaided." },
      ],
    },
    {
      id: "ru-u114l3",
      unit: 114,
      lesson: 3,
      title: "Inside the newsroom",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a correspondent, a regular section, an opinion column, a chronicle, broadcasting and a trailer.",
      items: [
        { id: "ru-u114l3-korrespondent", type: "vocab", front: "корреспондент", reading: "korrespondent", meaning: "a correspondent", accept: ["a reporter in the field", "a foreign correspondent", "a news reporter"], example: { jp: "Корреспондент работал в той стране восемь лет.", en: "The correspondent worked in that country for eight years." }, drill: { jp: "Корреспондент работал в той стране восемь лет", en: "The correspondent worked in that country for eight years" }, hint: "kar-res-pan-DENT — stress on the last syllable, the double р said as one long r, and both unstressed о reducing to a. MASCULINE. ⚠️ Narrower than English «journalist»: a корреспондент is POSTED somewhere and files from there. The short form in speech is «корр.», which you will see in a byline. `репортаж` (u45) is what he files." },
        { id: "ru-u114l3-rubrika", type: "vocab", front: "рубрика", reading: "rubrika", meaning: "a regular section", accept: ["a standing column heading", "a section of a paper", "a rubric"], example: { jp: "Рубрика о спорте выходит каждую пятницу.", en: "The sports section comes out every Friday." }, drill: { jp: "Рубрика о спорте выходит каждую пятницу", en: "The sports section comes out every Friday" }, hint: "RUB-ri-ka — stress on the first syllable. FEMININE (-а). ⚠️ The NAMED, RECURRING slot — «рубрика «Письма читателей»» — not one article and not the whole paper. From the Latin for red, because such headings were printed in red ink. A `колонка` is one person's; a рубрика is the paper's." },
        { id: "ru-u114l3-kolonka", type: "vocab", front: "колонка", reading: "kolonka", meaning: "an opinion column", accept: ["a signed column", "a regular opinion piece", "a columnist's piece"], example: { jp: "Колонка выходит по средам, и её читают даже те, кто с ней не согласен.", en: "The column comes out on Wednesdays, and even those who disagree with it read it." }, drill: { jp: "Колонка выходит по средам", en: "The column comes out on Wednesdays" }, hint: "ka-LON-ka — stress on LON, and the first о reduces to a. FEMININE (-а). ⚠️ THREE SENSES AND YOU WILL MEET ALL THREE: a newspaper column, a LOUDSPEAKER («колонки» are your speakers), and a water heater on a wall. The printing sense is a diminutive of колонна, a pillar. Not `колония` (u92)." },
        { id: "ru-u114l3-khronika", type: "vocab", front: "хроника", reading: "khronika", meaning: "a dated record of events", accept: ["newsreel", "a running log of what happened", "a news chronicle column"], example: { jp: "Хроника тех дней есть только в одной газете.", en: "The chronicle of those days exists only in one newspaper." }, drill: { jp: "Хроника тех дней есть только в одной газете", en: "The chronicle of those days exists only in one newspaper" }, hint: "KHRO-ni-ka — stress on the first syllable, opening with the scraping х. FEMININE (-а). ⚠️ TWO SENSES, and the second one is cinema: «кинохроника» is newsreel footage, and хроника alone often means exactly that. In a newspaper a хроника is the bare dated list of what happened — no opinion, which is what makes it the opposite of a `колонка`." },
        { id: "ru-u114l3-veshchanie", type: "vocab", front: "вещание", reading: "veshchanie", meaning: "broadcasting", accept: ["putting programmes on air", "the act of broadcasting", "sending out a signal"], example: { jp: "Вещание начинается в шесть утра и идёт до ночи.", en: "Broadcasting begins at six in the morning and goes on until night." }, drill: { jp: "Вещание начинается в шесть утра", en: "Broadcasting begins at six in the morning" }, hint: "ve-SHCHA-ni-ye — stress on SHCHA, with щ the long soft sh of unit 3. NEUTER (-ие). From вещать, an old high word for «to speak out», which this course does not card. ⚠️ Mocking in modern speech: «он вещает» means he is holding forth. `эфир` (u45) is the airwaves themselves; вещание is the sending." },
        { id: "ru-u114l3-anons", type: "vocab", front: "анонс", reading: "anons", meaning: "an advance announcement", accept: ["a preview notice", "a coming-soon piece", "a film trailer"], example: { jp: "Анонс показали вчера, а фильм будет только в марте.", en: "The trailer was shown yesterday, but the film will only be out in March." }, drill: { jp: "Анонс показали вчера", en: "The trailer was shown yesterday" }, hint: "a-NONS — stress on the last syllable, and the first о reduces to a. MASCULINE. ⚠️ Covers BOTH the film trailer and the plain text announcement of what is coming — a conference анонс, a programme анонс. Narrower than `объявление`: an анонс is always about something in the FUTURE." },
      ],
    },
    {
      id: "ru-u114l4",
      unit: 114,
      lesson: 4,
      title: "When information is bent on purpose",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about censorship, a fake story, disinformation, propaganda, a sensational story and a thing becoming public.",
      items: [
        { id: "ru-u114l4-tsenzura", type: "vocab", front: "цензура", reading: "tsenzura", meaning: "censorship", accept: ["official control of what is published", "the censor's office", "state control of print"], example: { jp: "Цензура тогда читала каждое письмо, и люди это знали.", en: "Censorship read every letter then, and people knew it." }, drill: { jp: "Цензура тогда читала каждое письмо", en: "Censorship read every letter then" }, hint: "tsen-ZU-ra — stress on ZU, with ц as ts. FEMININE (-а). ⚠️ In Russian it names BOTH the practice and the OFFICE that does it — «цензура запретила», the censorship banned it, with a human subject. «Самоцензура» is self-censorship and is built the obvious way." },
        { id: "ru-u114l4-feyk", type: "vocab", front: "фейк", reading: "feyk", meaning: "a fake story", accept: ["a made-up news item", "a hoax", "a fabricated report"], example: { jp: "Фейк жил в сети три дня, и его прочитали миллионы людей.", en: "The fake story lived online for three days, and millions of people read it." }, drill: { jp: "Фейк жил в сети три дня", en: "The fake story lived online for three days" }, hint: "FEYK — one syllable. MASCULINE. ⚠️ A RECENT BORROWING AND FULLY NATURALISED: it declines normally (фейка, фейком, фейки) and the adjective фейковый is everywhere. Russian has no older single word for it — `ложь` is a lie a person tells, a фейк is a lie dressed as a news item." },
        { id: "ru-u114l4-dezinformatsiya", type: "vocab", front: "дезинформация", reading: "dezinformatsiya", meaning: "disinformation", accept: ["deliberately false information", "planted falsehood", "misleading information on purpose"], example: { jp: "Дезинформация работает лучше всего тогда, когда в ней есть доля правды.", en: "Disinformation works best when there is a grain of truth in it." }, drill: { jp: "Дезинформация работает лучше всего тогда", en: "Disinformation works best then" }, hint: "de-zin-far-MA-tsi-ya — stress on MA, and the о reduces to a. FEMININE (-я). ⚠️ THE DIFFERENCE FROM `фейк` IS INTENT AND SCALE: a фейк is one false item; дезинформация is a deliberate campaign. Built with дез- «un-, de-» on информация, so you can read it before you learn it." },
        { id: "ru-u114l4-propaganda", type: "vocab", front: "пропаганда", reading: "propaganda", meaning: "propaganda", accept: ["state messaging", "one-sided persuasion", "political propaganda"], example: { jp: "Пропаганда говорит не всю правду, и это самое трудное в ней.", en: "Propaganda does not tell the whole truth, and that is the hardest thing about it." }, drill: { jp: "Пропаганда говорит не всю правду", en: "Propaganda does not tell the whole truth" }, hint: "pra-pa-GAN-da — stress on GAN, and both unstressed о reduce to a. FEMININE (-а). ⚠️ NOT ALWAYS NEGATIVE IN RUSSIAN: «пропаганда здорового образа жизни» — promoting a healthy lifestyle — is a normal, approving phrase. The word means «spreading a message», and only context makes it an accusation." },
        { id: "ru-u114l4-sensatsiya", type: "vocab", front: "сенсация", reading: "sensatsiya", meaning: "a sensational story", accept: ["a sensation in the press", "a scoop that shocks", "a big noisy story"], example: { jp: "Сенсация была в каждой газете неделю, а потом о ней никто не помнил.", en: "The sensation was in every newspaper for a week, and then nobody remembered it." }, drill: { jp: "Сенсация была в каждой газете неделю", en: "The sensation was in every newspaper for a week" }, hint: "sen-SA-tsi-ya — stress on SA. FEMININE (-я). ⚠️ THE EVENT IN THE PRESS, never a bodily feeling — that is `ощущение` (u86), and the two are a classic false friend across English. «Произвести сенсацию» is to cause a sensation." },
        { id: "ru-u114l4-oglaska", type: "vocab", front: "огласка", reading: "oglaska", meaning: "publicity", accept: ["a thing becoming public", "public exposure", "being made widely known"], example: { jp: "Огласка была им совсем не нужна, и всё решили тихо.", en: "Publicity was not at all what they wanted, and it was all settled quietly." }, drill: { jp: "Огласка была им совсем не нужна", en: "Publicity was not at all what they wanted" }, hint: "ag-LAS-ka — stress on LAS, and the first о reduces to a. FEMININE (-а). ⚠️ ALMOST ALWAYS UNWANTED, which English «publicity» is not: «избежать огласки» is to keep a thing out of the papers, «дело получило огласку» means it got out. From голос (unit 39) — a thing being given a voice." },
      ],
    },
  ],
};
