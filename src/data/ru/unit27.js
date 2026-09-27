// RU Unit 27 — Свободное время ("Free time") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Conventions are declared in ru/unit1.js §1–§10 and bind every card here.
// "Vocabulary 3" was a scaffold counter title, so the theme was block 3's choice.
// Measured against `src/data/ru/TAUGHT-WORDS.md` on this branch, A1 Russian had the
// NOUNS of leisure — музыка · книга · фильм · спорт · театр · музей · парк — and
// not one VERB to do anything with them. There was no play, sing, dance, draw,
// swim or run in the language, and no way to invite anybody anywhere. That is what
// l1 and l3 are for.
//
// ⚠️ THE -ова-/-у- VERB CLASS GETS INTRODUCED HERE. танцевать → я танцУю and
// рисовать → я рисУю are the same swap, and it is one of the four big present-tense
// patterns in Russian. Both hints name it, because meeting the pair together is
// what makes it a rule rather than two irregularities.
//
// ⚠️ THE HABIT-VERSUS-NOW SPLIT, SECOND PASS. u14 taught идти and ехать, which are
// the "right now, in one direction" half of a pair. плавать and бегать here are the
// "as a habit" half of two more (плыть, бежать). The hints say so on both cards,
// because a learner who does not know the split is coming will read плавать as
// simply "to swim" and be wrong half the time.
//
// ⚠️ LEXEME CALLS RECORDED (unit1.js §D — judgements, not measurements):
//   `компания` beside u25 `фирма` — NOT duplicates, and this is the point of the
//        card: Russian компания usually means a group of friends, and using it for a
//        business is the commonest false-friend error English speakers make here.
//   `картина` beside u30 `карта` and u13 `картошка` — three words that start alike
//        and are not interchangeable. Named together in картина's hint.
//   `кино` beside u8 `фильм` — the cinema versus the film. Both needed; neither
//        derivable.
//   `хозяин` beside `гость` in l2 — a host and a guest, two words, one occasion.
//   AVOIDED on the same test, and each of these was a real temptation:
//        `игра` (vs `играть` in l1 — noun and verb of one lexeme) ·
//        `песня` (vs `петь`) · `рисунок` (vs `рисовать`) · `приглашение` (vs
//        `приглашать`) · `шутить` (vs `шутка`) · `весёлый` (vs `весело` — and see
//        below) · `вечеринка` (vs u11 вечер) · `интересно` (vs u19 интересный) ·
//        `новость` (vs u19 новый — English news IS built on new, so an English
//        speaker WOULD guess it; `телевизор` took its place) · `рассказ` (vs
//        `сказка` in l4).
//
// ⚠️ `весело` IS THE IMPERSONAL ADVERB AND `весёлый` IS DELIBERATELY NOT CARDED.
// Block 1 settled at unit1.js §B that an adverb and its adjective are different
// lexemes and may both be cards — but only when BOTH are needed. Here the useful
// one is the impersonal: Здесь весело, it is fun here, with no subject, exactly
// like u6 скучно. The adjective is handed over in the hint. This is the same
// decision block 2 made about u20 `боль`.
//
// ⚠️ GLOSS COLLISIONS DESIGNED OUT — hand-checked against `normalizeMeaning`:
//     `картина` takes "a painting", so it never lands on u10 `фотография`.
//     `кино` takes "the cinema"; u8 `фильм` keeps "a movie"; u9 `театр` "a theatre".
//     `план` takes "a plan"; u29 `расписание` takes "a timetable" — and the hint on
//             each says which is an intention and which a printed schedule.
//     `весело` takes "it is fun", the impersonal shape, so it cannot collide with
//             u6 `скучно` ("boring") or u7 `приятно` ("pleasant").
//     `журнал` takes "a magazine" and `газета` "a newspaper" — the false friend is
//             the whole content of журнал's hint.
//     `радио` is glossed "the radio" WITH the article: without it the gloss would
//             normalise to "radio", which IS its own reading, and
//             `checkProduce("radio")` would then pass — unit1.js §9's free pass.
//             `телевизор` · `клуб` · `концерт` · `роман` were checked the same way.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT27 = {
  id: "ru-u27",
  lang: "ru",
  title: "Свободное время",
  order: 27,
  stage: "a1",
  lessons: [
    {
      id: "ru-u27l1",
      unit: 27,
      lesson: 1,
      title: "Say what you do for fun",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say that you play, sing, dance, draw, swim or run — six verbs A1 Russian did not have.",
      items: [
        { id: "ru-u27l1-igrat", type: "vocab", front: "играть", reading: "igrat", meaning: "to play", accept: ["to play a game", "to perform", "to play an instrument"], example: { jp: "Летом дети играли в парке каждый день.", en: "In summer the children played in the park every day." }, drill: { jp: "Здесь можно играть каждый день", en: "One can play here every day" }, hint: "ig-RAT, stress at the end: я играю, ты играешь. ⚠️ THREE PREPOSITIONS AND THEY DO NOT SWAP: играть В футбол (a game), играть НА гитаре (an instrument), играть С кошкой (with someone). Put на where в belongs and you have said you play on top of football." },
        { id: "ru-u27l1-pet", type: "vocab", front: "петь", reading: "pet", meaning: "to sing", accept: ["to sing a song", "to carry a tune"], example: { jp: "Моя сестра любит петь в школе.", en: "My sister likes singing at school." }, drill: { jp: "Здесь можно петь и танцевать", en: "One can sing and dance here" }, hint: "PET, one syllable: я пою, ты поёшь — the stem changes completely, which is why you meet the infinitive first. Песня, a song, comes straight off it and is deliberately not a separate card (unit1.js §D)." },
        { id: "ru-u27l1-tantsevat", type: "vocab", front: "танцевать", reading: "tantsevat", meaning: "to dance", accept: ["to have a dance", "to go dancing"], example: { jp: "Мы любим танцевать вечером.", en: "We like dancing in the evening." }, drill: { jp: "Здесь можно танцевать каждый вечер", en: "One can dance here every evening" }, hint: "tan-tsi-VAT, stress at the end: я танцУю, ты танцУешь — the -ева- turns into -у-, and that is a whole CLASS of Russian verbs, not one oddity. рисовать in this same lesson does it too. From German tanzen, so the meaning is nearly free." },
        { id: "ru-u27l1-risovat", type: "vocab", front: "рисовать", reading: "risovat", meaning: "to draw", accept: ["to sketch", "to do a drawing"], example: { jp: "Мой брат любит рисовать наш дом.", en: "My brother likes drawing our house." }, drill: { jp: "Здесь можно рисовать и читать", en: "One can draw and read here" }, hint: "ri-sa-VAT, stress at the end: я рисУю, ты рисУешь — the same -ова-/-у- swap as танцевать. Рисунок is the drawing. ⚠️ It is drawing with a pencil; PAINTING is писать картину, which is unit 4's писать doing a second job." },
        { id: "ru-u27l1-plavat", type: "vocab", front: "плавать", reading: "plavat", meaning: "to swim", accept: ["to go swimming", "to be able to swim"], example: { jp: "Летом мы плавали в реке каждый день.", en: "In summer we swam in the river every day." }, drill: { jp: "Летом можно плавать в реке", en: "In summer one can swim in the river" }, hint: "PLA-vat, stress first: я плаваю, ты плаваешь. ⚠️ It is swimming as an ABILITY or a HABIT — Я плаваю каждый день, and Я умею плавать, I can swim. Swimming in one direction right now is плыть, a different verb: the same split unit 14 made with идти." },
        { id: "ru-u27l1-begat", type: "vocab", front: "бегать", reading: "begat", meaning: "to run", accept: ["to go running", "to jog"], example: { jp: "Утром я бегал в парке, и это было хорошо.", en: "In the morning I ran in the park, and it was good." }, drill: { jp: "Утром можно бегать в парке", en: "One can run in the park in the morning" }, hint: "BE-gat, stress first: я бегаю, ты бегаешь. Same habit-versus-now split as плавать: бегать is running as a habit, бежать is running this second. Бег is the noun — the sport." },
      ],
    },
    {
      id: "ru-u27l2",
      unit: 27,
      lesson: 2,
      title: "Name the place you are going out to",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about a painting, a concert, an exhibition, the cinema, a club — and about the guest who is coming.",
      items: [
        { id: "ru-u27l2-kartina", type: "vocab", front: "картина", reading: "kartina", meaning: "a painting", accept: ["a picture", "a canvas", "a feature film"], example: { jp: "Эта картина очень старая и красивая.", en: "This painting is very old and beautiful." }, drill: { jp: "Эта старая картина очень красивая", en: "This old painting is very beautiful" }, hint: "kar-TI-na, stress on TI. Feminine (-а). ⚠️ THREE WORDS THAT ONLY LOOK RELATED: картина a painting, unit 30's карта a map, unit 13's картошка a potato. Картина also means a feature film — the word a critic uses." },
        { id: "ru-u27l2-kontsert", type: "vocab", front: "концерт", reading: "kontsert", meaning: "a concert", accept: ["a gig", "a recital", "a performance"], example: { jp: "Этот концерт был очень хороший, и мы рады.", en: "That concert was very good, and we are glad." }, drill: { jp: "Этот концерт будет очень хороший", en: "This concert will be very good" }, hint: "kan-TSERT, stress at the end. Masculine. An internationalism, so the STRESS is the whole task: not CON-cert but kan-TSERT." },
        { id: "ru-u27l2-vystavka", type: "vocab", front: "выставка", reading: "vystavka", meaning: "an exhibition", accept: ["a show", "a display", "an exhibit"], example: { jp: "Эта выставка очень интересная, и она рядом.", en: "This exhibition is very interesting, and it is nearby." }, drill: { jp: "Эта выставка очень интересная сегодня", en: "This exhibition is very interesting today" }, hint: "VYS-taf-ka, stress first, and the в says f before the к. Feminine (-а). It is выставить, to put out on show, made into a noun — that verb is not taught, so the noun arrives on its own." },
        { id: "ru-u27l2-gost", type: "vocab", front: "гость", reading: "gost", meaning: "a guest", accept: ["a visitor", "someone visiting"], example: { jp: "Наш гость уже здесь, и ужин готов.", en: "Our guest is already here, and supper is ready." }, drill: { jp: "Наш гость уже здесь сегодня", en: "Our guest is already here today" }, hint: "GOST, one syllable. ⚠️ MASCULINE, and a -ь noun: наш гость (unit1.js §3). Идти в гости means to go visiting — literally into guests — and it is one of the commonest things a Russian says about an evening out." },
        { id: "ru-u27l2-kino", type: "vocab", front: "кино", reading: "kino", meaning: "the cinema", accept: ["a cinema", "the pictures", "the movies"], example: { jp: "Мы были в кино, и фильм был очень хороший.", en: "We were at the cinema, and the film was very good." }, drill: { jp: "Мы были в кино вчера вечером", en: "We were at the cinema yesterday evening" }, hint: "ki-NO, stress at the end. Neuter, and ⚠️ IT NEVER CHANGES ITS ENDING — в кино, из кино, о кино, all identical. A short list of foreign neuter nouns behaves this way: кино, unit 9's метро, unit 9's кафе. Unit 8's фильм is the film itself." },
        { id: "ru-u27l2-klub", type: "vocab", front: "клуб", reading: "klub", meaning: "a club", accept: ["a night club", "a society"], example: { jp: "Этот клуб очень новый, и там всегда музыка.", en: "This club is very new, and there is always music there." }, drill: { jp: "Этот новый клуб очень большой", en: "This new club is very big" }, hint: "KLUB, one syllable. Masculine. Straight from English, and it covers both senses English has: the night club and the society — книжный клуб is a book club." },
      ],
    },
    {
      id: "ru-u27l3",
      unit: 27,
      lesson: 3,
      title: "Invite someone and make it fun",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Invite a friend over, make a plan, tell a joke, and say that it was fun.",
      items: [
        { id: "ru-u27l3-priglashat", type: "vocab", front: "приглашать", reading: "priglashat", meaning: "to invite", accept: ["to ask over", "to ask out", "to invite along"], example: { jp: "Мы часто приглашаем друга в гости.", en: "We often invite a friend over." }, drill: { jp: "Нужно приглашать друга в гости", en: "One must invite a friend over" }, hint: "pri-gla-SHAT, stress at the end: я приглашаю, ты приглашаешь. Приглашение is the invitation and is deliberately not carded (unit1.js §D). It takes the accusative for the person, and в гости or на концерт for where." },
        { id: "ru-u27l3-plan", type: "vocab", front: "план", reading: "plan", meaning: "a plan", accept: ["an intention", "a scheme", "a layout"], example: { jp: "Наш план на сегодня очень хороший.", en: "Our plan for today is very good." }, drill: { jp: "У нас есть очень хороший план", en: "We have a very good plan" }, hint: "PLAN, one syllable. Masculine. An internationalism. ⚠️ A Russian план is an INTENTION, not a schedule — for a printed timetable Russian says расписание, which unit 29 teaches. Getting these two the wrong way round is a very English mistake." },
        { id: "ru-u27l3-shutka", type: "vocab", front: "шутка", reading: "shutka", meaning: "a joke", accept: ["a gag", "a jest", "a bit of fun"], example: { jp: "Это была очень хорошая шутка, и всё было весело.", en: "That was a very good joke, and it was all good fun." }, drill: { jp: "Твоя шутка очень хорошая", en: "Your joke is very good" }, hint: "SHUT-ka, stress first. Feminine (-а). Шутить is the verb and is not carded (unit1.js §D). Не шутка means it is no laughing matter, and Кроме шуток is the Russian for joking aside." },
        { id: "ru-u27l3-veselo", type: "vocab", front: "весело", reading: "veselo", meaning: "it is fun", accept: ["cheerfully", "merrily", "we had fun"], example: { jp: "Здесь всегда весело, и это хорошо.", en: "It is always fun here, and that is good." }, drill: { jp: "Здесь всегда весело и приятно", en: "It is always fun and pleasant here" }, hint: "VE-si-la, stress first. It is an IMPERSONAL adverb, exactly like unit 6's скучно: Здесь весело — it is fun here, with no subject at all. Весёлый is the adjective and is not a separate card, so this one word does both jobs." },
        { id: "ru-u27l3-kompaniya", type: "vocab", front: "компания", reading: "kompaniya", meaning: "a group of friends", accept: ["a crowd", "company", "the gang"], example: { jp: "Наша компания очень большая, и мы всегда вместе.", en: "Our group of friends is very big, and we are always together." }, drill: { jp: "Наша компания сегодня очень большая", en: "Our group of friends is very big today" }, hint: "kam-PA-ni-ya, stress on PA. Feminine (-я). ⚠️ A FALSE FRIEND, AND THE REASON u25 TEACHES фирма: компания normally means a GROUP OF FRIENDS, not a business. Вся компания is the whole crowd. For a business, say фирма." },
        { id: "ru-u27l3-khozyain", type: "vocab", front: "хозяин", reading: "khozyain", meaning: "a host", accept: ["an owner", "the master of the house", "a landlord"], example: { jp: "Наш хозяин очень добрый, и у него большой сад.", en: "Our host is very kind, and he has a big garden." }, drill: { jp: "Наш хозяин очень добрый человек", en: "Our host is a very kind person" }, hint: "kha-ZYA-in, stress on ZYA. Masculine. ⚠️ THREE senses in one word: the host, the owner, and whoever is in charge of a house. Хозяйка is the feminine. Its plural is irregular — хозяева." },
      ],
    },
    {
      id: "ru-u27l4",
      unit: 27,
      lesson: 4,
      title: "What you read, watch and listen to",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name a magazine, a newspaper, the radio, the television, a fairy tale and a novel.",
      items: [
        { id: "ru-u27l4-zhurnal", type: "vocab", front: "журнал", reading: "zhurnal", meaning: "a magazine", accept: ["a journal", "a periodical", "a register"], example: { jp: "Этот журнал очень интересный, и я его читаю.", en: "This magazine is very interesting, and I read it." }, drill: { jp: "Этот новый журнал очень интересный", en: "This new magazine is very interesting" }, hint: "zhur-NAL, stress at the end. Masculine. From French journal, and ⚠️ THEREFORE A FALSE FRIEND: a Russian журнал is a MAGAZINE, never a newspaper, and a school журнал is the register. The newspaper is газета, the next card." },
        { id: "ru-u27l4-gazeta", type: "vocab", front: "газета", reading: "gazeta", meaning: "a newspaper", accept: ["a paper", "the press"], example: { jp: "Эта газета очень старая, и я её уже читал.", en: "This newspaper is very old, and I have already read it." }, drill: { jp: "Эта старая газета очень интересная", en: "This old newspaper is very interesting" }, hint: "ga-ZE-ta, stress on ZE. Feminine (-а). From Italian gazzetta, the small coin a newssheet cost in Venice. It pairs with журнал and the two are never swapped in Russian." },
        { id: "ru-u27l4-radio", type: "vocab", front: "радио", reading: "radio", meaning: "the radio", accept: ["a radio", "a wireless"], example: { jp: "Радио здесь всегда работает, и это хорошо.", en: "The radio here is always on, and that is good." }, drill: { jp: "Это радио очень старое", en: "This radio is very old" }, hint: "RA-di-o, stress FIRST. Neuter, and ⚠️ IT NEVER CHANGES ITS ENDING, like кино and метро: на радио, о радио. An internationalism, so the stress is the whole lesson — not ra-DI-o." },
        { id: "ru-u27l4-televizor", type: "vocab", front: "телевизор", reading: "televizor", meaning: "a television", accept: ["a TV", "a television set", "the telly"], example: { jp: "Наш телевизор очень старый, но он работает.", en: "Our television is very old, but it works." }, drill: { jp: "Наш старый телевизор уже не работает", en: "Our old television does not work any more" }, hint: "ti-li-VI-zar, stress on VI. Masculine. An internationalism, and again the STRESS is the work. Russians shorten it to телик in speech. With unit 9's компьютер and телефон these are the three machines this course names." },
        { id: "ru-u27l4-skazka", type: "vocab", front: "сказка", reading: "skazka", meaning: "a fairy tale", accept: ["a folk tale", "a children's story"], example: { jp: "Моя бабушка читала нам эту сказку каждый вечер.", en: "My grandmother read us this fairy tale every evening." }, drill: { jp: "Это очень старая русская сказка", en: "This is a very old Russian fairy tale" }, hint: "SKAZ-ka, stress first. Feminine (-а). It is a FOLK tale specifically — unit 24's история is the general word for a story. Сказка ложь, да в ней намёк is the proverb every Russian child knows: a tale is a lie, but there is a hint inside it." },
        { id: "ru-u27l4-roman", type: "vocab", front: "роман", reading: "roman", meaning: "a novel", accept: ["a love affair", "a work of fiction"], example: { jp: "Этот роман очень большой, и я читал его долго.", en: "This novel is very long, and I read it for a long time." }, drill: { jp: "Этот роман очень большой и трудный", en: "This novel is very long and hard" }, hint: "ra-MAN, stress at the end. Masculine. ⚠️ A FALSE FRIEND TWICE OVER: роман is a NOVEL, and it also means a love affair — but never a Roman and never a romance novel in particular. Russia's great роман is Война и мир." },
      ],
    },
  ],
};
