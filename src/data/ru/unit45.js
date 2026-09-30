// RU Unit 45 — Пресса и передачи ("The press and broadcasting") — A2
// ─────────────────────────────────────────────────────────────────────────────
// BLOCK 2 (u41–u50). Binding: ru/unit1.js §1–§10 and §A–§D, then ru/unit31.js
// §1–§7. The block-wide record is in ru/unit50.js §B1–§B7.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Culture and leisure" AND IT IS TWICE SPOKEN FOR.
// A1's u27 Свободное время is the leisure unit (играть · петь · танцевать ·
// рисовать · плавать · бегать · картина · концерт · выставка · гость · кино ·
// клуб · приглашать · план · шутка · весело · компания · хозяин · журнал ·
// газета · радио · телевизор · сказка · роман), and "culture and leisure" is
// block 3's assigned domain. Rethemed to MEDIA, which is one of mine.
//
// THE MEASURED HOLE, AND IT IS A CLEAN ONE. A1's u27 hands the learner the four
// OBJECTS of media — журнал · газета · радио · телевизор — plus фильм (u8) and
// кино (u27), and block 1 added новость (u39l4) and мнение (u39). That is the
// whole of it. Nothing in 44 units names an article, a headline, a channel, a
// broadcast, an advert, a viewer, a subscription or an announcement. A learner
// could say «я смотрю телевизор» and could not say one word about WHAT is on it.
//
// FOUR CALLS I MADE, with the reasoning:
//   `передача` "a broadcast" beside u12 `перерыв`, u32 `перед`, u36 `переход` and
//        u39 `перевод`. Four words sharing the prefix пере- and NOT the root: дач-
//        (give) against рыв- (tear), ход- (go) and вод- (lead). The probe's 4-
//        character stem flags all four; by hand, none is a relative.
//   `статья` "an article" beside u31 `стать` "to become". The probe flags the
//        shared ста-; historically related, not remotely so for a learner, and
//        Russian's most common word for a piece of journalism cannot be skipped.
//   `объявление` "an announcement" beside u34 `объявлять`… which is NOT CARDED —
//        only `объяснять` (u34) is, and its root is ясн-, not явл-. Measured.
//   `автор` "an author" beside u9 `автобус`. Shared Greek prefix, nothing else.
//
// ⚠️ REFUSED IN THIS UNIT, and four of them are cases where I carded a relative
// elsewhere in MY OWN BLOCK, which is the failure mode a parallel block cannot
// see and a single block can:
//   `журналист` — vs u27 `журнал`. The -ист suffix is international and the
//        learner already has журнал; derivable. `автор` covers the sense.
//   `читатель` — vs u4 `читать`. `слушатель` — AND I CARD `слушать` at u49, so
//        carding both would put a verb and its agent noun in one block. The verb
//        is worth more; зритель has no carded verb behind it (зреть is not
//        taught anywhere) and IS carded here.
//   `печать` — vs `печатать`, which I card at u49l2. Same root, same block.
//   `серия` — vs `сериал`, which is carded at l3. One of the two, never both.
//   `заметка` — vs u39 `замечание`, carded by block 1.
//   `слух` — vs u4 `слышать`. `ведущий` — it is a present participle used as a
//        noun, and unit1.js §5 defers participles to B1; no card.
//   `новость` · `мнение` · `тема` — all TAKEN by block 1 at u39.
//
// ⚠️ ONE MORE CROSS-UNIT GLOSS COLLISION, nineteen units apart and invisible to
// both lint:curriculum and validate:content: `эфир` was first glossed "the air"
// and u26l4 `воздух` is "air", which `normalizeMeaning` makes one prompt with two
// right answers. Found by `selfcheck-ru-a2-block2.mjs`; эфир is now
// "the airwaves". This is the third of its kind in block 2 — see u42's and u44's
// headers for the other two, and treat the pattern as the warning: an A2 gloss
// collides with an A1 word most often, because A1 owns all the plain English.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT45 = {
  id: "ru-u45",
  lang: "ru",
  title: "Пресса и передачи",
  order: 45,
  stage: "a2",
  lessons: [
    {
      id: "ru-u45l1",
      unit: 45,
      lesson: 1,
      title: "What is in print",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a printed piece — the article, its headline, the cover, the edition, the editorial office and the author.",
      items: [
        { id: "ru-u45l1-statya", type: "vocab", front: "статья", reading: "statya", meaning: "an article", accept: ["a piece of journalism", "a written item in a paper", "a clause of a law"], example: { jp: "Эта статья в газете была очень интересная.", en: "That article in the paper was very interesting." }, drill: { jp: "Статья была совсем короткая", en: "The article was quite short" }, hint: "sta-TYA — stress on the last syllable, and the ть is soft before я. FEMININE. Two senses: a piece in a newspaper, and a numbered clause of a law — «статья закона»." },
        { id: "ru-u45l1-zagolovok", type: "vocab", front: "заголовок", reading: "zagolovok", meaning: "a headline", accept: ["a title of an article", "a heading", "a caption"], example: { jp: "Заголовок этой статьи был слишком длинный.", en: "The headline of that article was too long." }, drill: { jp: "Заголовок был слишком длинный", en: "The headline was too long" }, hint: "za-ga-LO-vak — stress on LO, and both о before it reduce to a. MASCULINE. Built on голова (unit 20), a head — it is literally what goes «at the head» of a text. ⚠️ The second о drops when it inflects: заголовок but заголовкА." },
        { id: "ru-u45l1-oblozhka", type: "vocab", front: "обложка", reading: "oblozhka", meaning: "a cover", accept: ["a book cover", "the outside of a magazine", "a jacket"], example: { jp: "Обложка этого журнала была очень красивая.", en: "The cover of that magazine was very beautiful." }, drill: { jp: "Обложка была совсем новая", en: "The cover was brand new" }, hint: "a-BLOSH-ka — stress on BLOSH, the о reduces to a and the ж devoices to sh before к. FEMININE. From об + ложить, «to lay around» — what is laid around the pages." },
        { id: "ru-u45l1-izdanie", type: "vocab", front: "издание", reading: "izdanie", meaning: "an edition", accept: ["a publication", "a printed issue", "a version in print"], example: { jp: "Это первое издание этой книги.", en: "That is the first edition of that book." }, drill: { jp: "Издание было совсем новое", en: "The edition was brand new" }, hint: "iz-DA-ni-ye — four syllables, stress on DA. NEUTER (-е). From из + дать (unit 31), «to give out». It names both the act of publishing and the printed thing itself." },
        { id: "ru-u45l1-redaktsiya", type: "vocab", front: "редакция", reading: "redaktsiya", meaning: "an editorial office", accept: ["the editorial team", "a newsroom", "a revised wording"], example: { jp: "Редакция этой газеты в центре города.", en: "That paper's editorial office is in the centre of town." }, drill: { jp: "Редакция была в этом отделе", en: "The editorial office was in this department" }, hint: "re-DAK-tsi-ya — stress on DAK. FEMININE. It is the room, the team in it, and also one particular wording of a text — «в новой редакции»." },
        { id: "ru-u45l1-avtor", type: "vocab", front: "автор", reading: "avtor", meaning: "an author", accept: ["a writer of something", "the person who wrote it", "a creator"], example: { jp: "Автор этой статьи работает в редакции.", en: "The author of that article works at the editorial office." }, drill: { jp: "Автор этой книги уже старый", en: "The author of that book is already old" }, hint: "AF-tar — stress on the FIRST syllable, and the в devoices to f before т. MASCULINE, and it stays masculine for a woman: «она автор этой книги»." },
      ],
    },
    {
      id: "ru-u45l2",
      unit: 45,
      lesson: 2,
      title: "What is on the air",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a channel, a broadcast, an issue or episode, being on air, the viewers and the press as a whole.",
      items: [
        { id: "ru-u45l2-kanal", type: "vocab", front: "канал", reading: "kanal", meaning: "a channel", accept: ["a TV channel", "a waterway", "a route for messages"], example: { jp: "Этот канал показывает только фильмы.", en: "That channel only shows films." }, drill: { jp: "Канал показывает только старые фильмы", en: "The channel only shows old films" }, hint: "ka-NAL — stress on the last syllable. MASCULINE. Same three senses as English: a TV channel, a water canal, and a route by which something reaches you." },
        { id: "ru-u45l2-peredacha", type: "vocab", front: "передача", reading: "peredacha", meaning: "a broadcast", accept: ["a TV or radio programme", "a transmission", "a handover"], example: { jp: "Эта передача была очень интересная.", en: "That broadcast was very interesting." }, drill: { jp: "Передача была совсем короткая", en: "The broadcast was quite short" }, hint: "pe-re-DA-cha — four syllables, stress on DA. FEMININE. From пере + дать (unit 31), «to give across». ⚠️ Not the same word as перевод (unit 39), a translation, or переход (unit 36), a crossing — the prefix is shared, the root is not." },
        { id: "ru-u45l2-vypusk", type: "vocab", front: "выпуск", reading: "vypusk", meaning: "an issue", accept: ["an episode", "a bulletin", "a batch released"], example: { jp: "Этот выпуск был совсем короткий.", en: "That issue was quite short." }, drill: { jp: "Выпуск был совсем короткий", en: "The issue was quite short" }, hint: "VY-pusk — stress on the FIRST syllable, with the tight ы. MASCULINE. From вы + пустить, «to let out»: one issue of a magazine, one episode of a programme, or a school's leaving year." },
        { id: "ru-u45l2-efir", type: "vocab", front: "эфир", reading: "efir", meaning: "the airwaves", accept: ["broadcast time", "being on air", "air time"], example: { jp: "Эта передача была в эфире вчера.", en: "That programme was on air yesterday." }, drill: { jp: "Эфир был совсем короткий", en: "The broadcast slot was quite short" }, hint: "e-FIR — stress on the last syllable, and the э at the start is the open e. MASCULINE. ⚠️ Glossed «the airwaves», not «the air» — воздух at unit 26 is the air you breathe, and normalizeMeaning would make the two one prompt. «В прямом эфире» is «live on air» — the phrase every Russian news reader says." },
        { id: "ru-u45l2-zritel", type: "vocab", front: "зритель", reading: "zritel", meaning: "a viewer", accept: ["a spectator", "a member of the audience", "someone watching"], example: { jp: "Каждый зритель получил программу.", en: "Every viewer got a programme." }, drill: { jp: "Зритель может выбирать канал", en: "A viewer can choose the channel" }, hint: "ZRI-tel — stress on the first syllable, and the word starts зр with no vowel. MASCULINE, though it ends in -ь. It is a TV viewer and a theatre spectator alike; зрительный зал is the auditorium." },
        { id: "ru-u45l2-pressa", type: "vocab", front: "пресса", reading: "pressa", meaning: "the press", accept: ["newspapers as a whole", "journalists collectively", "the media"], example: { jp: "Пресса в этой стране очень свободная.", en: "The press in that country is very free." }, drill: { jp: "Пресса здесь очень свободная", en: "The press here is very free" }, hint: "PRYES-sa — stress on the first syllable, and BOTH с are written. FEMININE, and it has no plural: пресса already means all the papers together." },
      ],
    },
    {
      id: "ru-u45l3",
      unit: 45,
      lesson: 3,
      title: "What people follow",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a series, its plot, the adverts in it, a subscription, the public and an interview.",
      items: [
        { id: "ru-u45l3-serial", type: "vocab", front: "сериал", reading: "serial", meaning: "a drama series", accept: ["a TV series", "a soap opera", "a serial"], example: { jp: "Этот сериал был совсем скучный.", en: "That series was quite dull." }, drill: { jp: "Сериал был совсем скучный", en: "The series was quite dull" }, hint: "se-ri-AL — stress on the last syllable. MASCULINE. ⚠️ Glossed «a drama series» and not «a series», because Russian сериал means specifically the long-running drama, never a series of lectures." },
        { id: "ru-u45l3-syuzhet", type: "vocab", front: "сюжет", reading: "syuzhet", meaning: "a plot", accept: ["a storyline", "what happens in a story", "a news item"], example: { jp: "Сюжет этого фильма был очень простой.", en: "The plot of that film was very simple." }, drill: { jp: "Сюжет был совсем простой", en: "The plot was quite simple" }, hint: "syu-ZHET — stress on the last syllable, and сю is a soft s. MASCULINE. In news Russian it also means one filmed item inside a bulletin." },
        { id: "ru-u45l3-reklama", type: "vocab", front: "реклама", reading: "reklama", meaning: "an advert", accept: ["advertising", "a commercial", "a promotion"], example: { jp: "Реклама в этой передаче была слишком длинная.", en: "The adverts in that programme were too long." }, drill: { jp: "Реклама была слишком длинная", en: "The advert was too long" }, hint: "re-KLA-ma — stress on KLA. FEMININE. It covers one advert and advertising as a whole, so «реклама была длинная» can mean the ad break was long." },
        { id: "ru-u45l3-podpiska", type: "vocab", front: "подписка", reading: "podpiska", meaning: "a subscription", accept: ["a paid regular delivery", "a standing order for a paper"], example: { jp: "Наша подписка на этот журнал уже была.", en: "We already had a subscription to that magazine." }, drill: { jp: "Подписка была совсем не дорогая", en: "The subscription was not expensive at all" }, hint: "pat-PIS-ka — stress on PIS, and the д devoices to t before п. FEMININE. From под + писать, «to sign under» — historically you signed up for the paper. Russian says «подписка НА журнал»." },
        { id: "ru-u45l3-publika", type: "vocab", front: "публика", reading: "publika", meaning: "the public", accept: ["an audience", "the people watching", "the crowd"], example: { jp: "Публика в этом театре очень вежливая.", en: "The audience at that theatre is very polite." }, drill: { jp: "Публика была очень вежливая", en: "The audience was very polite" }, hint: "PU-bli-ka — stress on the first syllable. FEMININE, and it takes a SINGULAR verb — «публика была», never «были», even though it means many people." },
        { id: "ru-u45l3-intervyu", type: "vocab", front: "интервью", reading: "intervyu", meaning: "an interview", accept: ["a press interview", "a recorded conversation with someone"], example: { jp: "Это интервью было в новом выпуске.", en: "That interview was in the new issue." }, drill: { jp: "Интервью было совсем короткое", en: "The interview was quite short" }, hint: "in-ter-VYU — stress on the last syllable. NEUTER, and it NEVER CHANGES its ending, like резюме (unit 42) and метро. ⚠️ Not the same word as собеседование (unit 42): that is the job kind, this is the press kind." },
      ],
    },
    {
      id: "ru-u45l4",
      unit: 45,
      lesson: 4,
      title: "Notices, reviews and print runs",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read a public notice, talk about a review or a report from the scene, and say how many copies were printed.",
      items: [
        { id: "ru-u45l4-obyavlenie", type: "vocab", front: "объявление", reading: "obyavlenie", meaning: "an announcement", accept: ["a public notice", "a small ad", "a declaration"], example: { jp: "Это объявление было на сайте университета.", en: "That announcement was on the university website." }, drill: { jp: "Объявление было на этом сайте", en: "The announcement was on this website" }, hint: "ab-yav-LYE-ni-ye — five syllables, stress on LYE, and the ъ keeps the б and я apart. NEUTER (-е). It is the notice on a wall, the small ad in a paper, and the announcement over a loudspeaker." },
        { id: "ru-u45l4-obzor", type: "vocab", front: "обзор", reading: "obzor", meaning: "a review", accept: ["a survey of something", "an overview", "a round-up"], example: { jp: "Этот обзор был очень полезный.", en: "That review was very useful." }, drill: { jp: "Обзор был очень полезный", en: "The review was very useful" }, hint: "ab-ZOR — stress on the last syllable, and the о reduces to a. MASCULINE. From об + зреть, to look over — it is a round-up of many things, not a verdict on one. It also means the view you have: «здесь плохой обзор»." },
        { id: "ru-u45l4-reportazh", type: "vocab", front: "репортаж", reading: "reportazh", meaning: "a report from the scene", accept: ["a news report", "on-the-spot coverage", "a live report"], example: { jp: "Репортаж был в прямом эфире.", en: "The report was live on air." }, drill: { jp: "Репортаж был совсем короткий", en: "The report was quite short" }, hint: "re-par-TASH — stress on the last syllable, the о reduces to a and the ж devoices to sh. MASCULINE. ⚠️ Glossed «a report from the scene», not «a report», because a written отчёт (unit 50) is the other kind." },
        { id: "ru-u45l4-tirazh", type: "vocab", front: "тираж", reading: "tirazh", meaning: "a print run", accept: ["circulation of a paper", "the number of copies printed", "a print quantity"], example: { jp: "Тираж этой газеты совсем маленький.", en: "That paper's circulation is quite small." }, drill: { jp: "Тираж был совсем маленький", en: "The print run was quite small" }, hint: "ti-RASH — stress on the last syllable, ж devoices to sh. MASCULINE. A French loan. It also names the draw of a lottery — «тираж лотереи»." },
        { id: "ru-u45l4-ekzemplyar", type: "vocab", front: "экземпляр", reading: "ekzemplyar", meaning: "a copy", accept: ["one item of a print run", "a single specimen", "one unit of a thing"], example: { jp: "У меня только один экземпляр этой книги.", en: "I only have one copy of that book." }, drill: { jp: "Экземпляр был совсем старый", en: "The copy was quite old" }, hint: "ek-zem-PLYAR — stress on the last syllable, and the кз is said as a g-z cluster. MASCULINE. It is one physical copy of something printed, and in biology one specimen." },
        { id: "ru-u45l4-syomka", type: "vocab", front: "съёмка", reading: "syomka", meaning: "filming", accept: ["a shoot", "photography of a scene", "a take"], example: { jp: "Съёмка была на улице около театра.", en: "The filming was in the street near the theatre." }, drill: { jp: "Съёмка была около театра", en: "The filming was near the theatre" }, hint: "SYOM-ka — stress on the first syllable, where the ё always is, and the ъ keeps the с and ё apart. FEMININE. From снимать, to take off or take a picture. The plural съёмки is what Russians actually say of a film shoot." },
      ],
    },
  ],
};
