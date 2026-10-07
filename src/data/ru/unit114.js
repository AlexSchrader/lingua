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
// ⚠️ THE CROSS-BLOCK DEDUPE OF 2026-10-07 TOOK SIX CARDS OFF THIS UNIT — more
// than any other B2 unit — and every one of the six went to a LOWER unit that
// had carded it first, so this unit yielded on unit order and not on a claim:
//   `пропаганда` → u98  · `домысел` → u99  · `рубрика` → u100
//   `прототип` → u104 · `метафора` → u106 · `трактовка` → u106
// **All six keepers are below u114, so all six words stay IN scope for this
// unit's sentences** — the direction that bites is the other one, and none of
// these six goes that way.
//
// ⚠️ l2 LOST FOUR OF ITS SIX CARDS AND WAS RETHEMED RATHER THAN REFILLED WITH
// NEAR-SYNONYMS. The old lesson was the FIGURES of literary reading, and u106
// Эстетика и приём owns that ground outright — `метафора` · `символ` ·
// `подтекст` · `иносказание` · `ирония` · `сатира` · `пародия` ·
// `трактовка` are all u106's. Reaching for `аллегория` or `эпитет` would have
// rebuilt u106 one unit later. So l2 is now THE PUBLISHED TEXT AS AN OBJECT —
// `цитата` · `эпиграф` · `аннотация` · `фабула`, beside the surviving `слог`
// and `экранизация` — ground no other ru unit touches, and retitled to match.
//   ⚠️ `предисловие` WAS THE OBVIOUS FOURTH AND IS REFUSED: пред + `слово`
//     (u6), and u98 refused `словесный` on the same ground — слово hands a
//     "fore-word" over outright. `аннотация` carries the job with no rule bent.
//   ⚠️ `замысел` was refused too, and not on §D: `вымысел` is carded at l1 of
//     this very unit, and a third -мысел noun one lesson away is the
//     same-root-in-one-unit fault unit51.js §3 calls the worst version of it.
//   ⚠️ `клевета` was the obvious l4 replacement and is u99's. `подтасовка`
//     carries it. `манипуляция` is u98's; `искажение` is §D against `искажать`
//     (u81); `компромат` probes clean and is DEFERRED, not refused.
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
      title: "The text in your hands",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a published text as a thing you read — a quotation, the motto at its head, the blurb that sells it, the bare run of events under the plot, a writer's style and a film made from it.",
      items: [
        { id: "ru-u114l2-tsitata", type: "vocab", front: "цитата", reading: "tsitata", meaning: "a passage repeated word for word from somebody else", accept: ["an exact extract taken from a text", "another person's words given exactly", "a borrowed sentence set in quotation marks"], example: { jp: "Цитата была точная, однако в статье она стояла совсем не на месте.", en: "The quotation was exact, yet in the article it stood quite out of place." }, drill: { jp: "Цитата здесь совершенно точная", en: "The quotation here is entirely exact" }, hint: "tsi-TA-ta — stress on TA. FEMININE (-а). The verb is цитировать and the marks themselves are кавычки. ⚠️ Russian prints them as «ёлочки» — the angled pair used throughout these hints — not as the English pair, so a цитата looks different on the page. ⚠️ Distinguish it from `дословно` (u99), which is the ADVERB for quoting exactly." },
        { id: "ru-u114l2-epigraf", type: "vocab", front: "эпиграф", reading: "epigraf", meaning: "a short quotation set at the head of a work", accept: ["the line an author prints before the first chapter", "a borrowed motto opening a book", "a quotation placed above a text to colour it"], example: { jp: "Эпиграф взят из старого письма, и весь роман после этого читается совсем не так.", en: "The epigraph is taken from an old letter, and after it the whole novel reads quite differently." }, drill: { jp: "Эпиграф взят из старого письма", en: "The epigraph is taken from an old letter" }, hint: "e-pi-GRAF — stress on the last syllable. MASCULINE. ⚠️ A real convention of Russian literature rather than a decoration: Pushkin and Tolstoy opened chapters with them, and a Russian schoolchild is taught to read the эпиграф as a key to what follows. Distinguish it from `заголовок` (u45), which NAMES the piece — an эпиграф quotes somebody else above it." },
        { id: "ru-u114l2-slog", type: "vocab", front: "слог", reading: "slog", meaning: "a writer's style", accept: ["prose style", "the manner of writing", "the cut of someone's sentences"], example: { jp: "Слог у него тяжёлый, но читать всё равно интересно.", en: "His style is heavy, but it is interesting to read all the same." }, drill: { jp: "Слог у него тяжёлый", en: "His style is heavy" }, hint: "SLOG — one syllable. MASCULINE. ⚠️ TWO SENSES AND YOU WILL MEET THE OTHER ONE IN EVERY HINT IN THIS COURSE: a слог is also a SYLLABLE. Same word, and the connection is old — the way a sentence is put together syllable by syllable. From сложить, to put together." },
        { id: "ru-u114l2-annotatsiya", type: "vocab", front: "аннотация", reading: "annotatsiya", meaning: "a short summary printed on a book to say what is in it", accept: ["the blurb describing a book's contents", "a few lines summarising a work", "a note saying what a book is about"], example: { jp: "Аннотация обещала очень много, однако сама книга оказалась довольно скучной.", en: "The blurb promised a great deal, yet the book itself turned out rather dull." }, drill: { jp: "Аннотация обещала слишком много", en: "The blurb promised too much" }, hint: "an-na-TA-tsi-ya — stress on TA, both о reduce to a, and the нн is held. FEMININE (-я). ⚠️ On a Russian book it sits on the back of the title page above the catalogue data, and the publisher writes it, not the author. ⚠️ The same word is the abstract above a scientific article." },
        { id: "ru-u114l2-fabula", type: "vocab", front: "фабула", reading: "fabula", meaning: "the bare run of events behind a plot", accept: ["the events of a story in the order they happened", "what happens stripped of how it is told", "the raw story material under a narrative"], example: { jp: "Фабула здесь совсем простая, зато рассказана она очень странно.", en: "The run of events here is quite simple, but it is told very oddly." }, drill: { jp: "Фабула этого романа совсем простая", en: "The run of events in this novel is quite simple" }, hint: "FA-bu-la — stress on the first syllable. FEMININE (-а). ⚠️ THE PAIR EVERY RUSSIAN SCHOOLCHILD IS TAUGHT: a фабула is what happened, a `сюжет` (u45) is how the author arranges it — one фабула can carry a dozen сюжеты. ⚠️ Also the facts of a case in legal Russian: фабула дела." },
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
      canDo: "Name a correspondent, a documentary feature piece, an opinion column, a chronicle, broadcasting and a trailer.",
      items: [
        { id: "ru-u114l3-korrespondent", type: "vocab", front: "корреспондент", reading: "korrespondent", meaning: "a correspondent", accept: ["a reporter in the field", "a foreign correspondent", "a news reporter"], example: { jp: "Корреспондент работал в той стране восемь лет.", en: "The correspondent worked in that country for eight years." }, drill: { jp: "Корреспондент работал в той стране восемь лет", en: "The correspondent worked in that country for eight years" }, hint: "kar-res-pan-DENT — stress on the last syllable, the double р said as one long r, and both unstressed о reducing to a. MASCULINE. ⚠️ Narrower than English «journalist»: a корреспондент is POSTED somewhere and files from there. The short form in speech is «корр.», which you will see in a byline. `репортаж` (u45) is what he files." },
        { id: "ru-u114l3-ocherk", type: "vocab", front: "очерк", reading: "ocherk", meaning: "a long documentary piece on a real subject", accept: ["a feature article drawn from life", "a written sketch of a person or a place", "a factual piece written like a story"], example: { jp: "Очерк о старом враче решили печатать целиком, хотя редакция сначала хотела только часть.", en: "They decided to print the feature piece about the old doctor in full, although the editorial office at first wanted only a part of it." }, drill: { jp: "Очерк решили печатать целиком", en: "They decided to print the feature piece in full" }, hint: "O-cherk — stress on the first syllable. MASCULINE. ⚠️ A GENRE WITH NO EXACT ENGLISH NAME and a backbone of Russian journalism: a factual piece about a real person or place, written with the means of literature. ⚠️ Also a short survey of a subject — очерк истории, an outline history." },
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
      canDo: "Talk about censorship, a fake story, disinformation, a juggling of facts, a sensational story and a thing becoming public.",
      items: [
        { id: "ru-u114l4-tsenzura", type: "vocab", front: "цензура", reading: "tsenzura", meaning: "censorship", accept: ["official control of what is published", "the censor's office", "state control of print"], example: { jp: "Цензура тогда читала каждое письмо, и люди это знали.", en: "Censorship read every letter then, and people knew it." }, drill: { jp: "Цензура тогда читала каждое письмо", en: "Censorship read every letter then" }, hint: "tsen-ZU-ra — stress on ZU, with ц as ts. FEMININE (-а). ⚠️ In Russian it names BOTH the practice and the OFFICE that does it — «цензура запретила», the censorship banned it, with a human subject. «Самоцензура» is self-censorship and is built the obvious way." },
        { id: "ru-u114l4-feyk", type: "vocab", front: "фейк", reading: "feyk", meaning: "a fake story", accept: ["a made-up news item", "a hoax", "a fabricated report"], example: { jp: "Фейк жил в сети три дня, и его прочитали миллионы людей.", en: "The fake story lived online for three days, and millions of people read it." }, drill: { jp: "Фейк жил в сети три дня", en: "The fake story lived online for three days" }, hint: "FEYK — one syllable. MASCULINE. ⚠️ A RECENT BORROWING AND FULLY NATURALISED: it declines normally (фейка, фейком, фейки) and the adjective фейковый is everywhere. Russian has no older single word for it — `ложь` is a lie a person tells, a фейк is a lie dressed as a news item." },
        { id: "ru-u114l4-dezinformatsiya", type: "vocab", front: "дезинформация", reading: "dezinformatsiya", meaning: "disinformation", accept: ["deliberately false information", "planted falsehood", "misleading information on purpose"], example: { jp: "Дезинформация работает лучше всего тогда, когда в ней есть доля правды.", en: "Disinformation works best when there is a grain of truth in it." }, drill: { jp: "Дезинформация работает лучше всего тогда", en: "Disinformation works best then" }, hint: "de-zin-far-MA-tsi-ya — stress on MA, and the о reduces to a. FEMININE (-я). ⚠️ THE DIFFERENCE FROM `фейк` IS INTENT AND SCALE: a фейк is one false item; дезинформация is a deliberate campaign. Built with дез- «un-, de-» on информация, so you can read it before you learn it." },
        { id: "ru-u114l4-podtasovka", type: "vocab", front: "подтасовка", reading: "podtasovka", meaning: "a juggling of facts to suit a case", accept: ["the picking of only the facts that help", "a dishonest shuffling of evidence", "the bending of figures to prove a point"], example: { jp: "Подтасовка была видна сразу, однако газета ничего менять не стала.", en: "The juggling of facts was obvious at once, yet the paper did not set about changing anything." }, drill: { jp: "Подтасовка была видна сразу всем", en: "The juggling of facts was obvious to everyone at once" }, hint: "pad-ta-SOV-ka — stress on SOV, and both о before it reduce to a. FEMININE (-а). From тасовать, to shuffle a pack of cards: the picture is a dealer dealing himself the hand he wants. ⚠️ The standard phrases are подтасовка фактов and подтасовка результатов, and both imply deliberate dishonesty — never an honest mistake." },
        { id: "ru-u114l4-sensatsiya", type: "vocab", front: "сенсация", reading: "sensatsiya", meaning: "a sensational story", accept: ["a sensation in the press", "a scoop that shocks", "a big noisy story"], example: { jp: "Сенсация была в каждой газете неделю, а потом о ней никто не помнил.", en: "The sensation was in every newspaper for a week, and then nobody remembered it." }, drill: { jp: "Сенсация была в каждой газете неделю", en: "The sensation was in every newspaper for a week" }, hint: "sen-SA-tsi-ya — stress on SA. FEMININE (-я). ⚠️ THE EVENT IN THE PRESS, never a bodily feeling — that is `ощущение` (u86), and the two are a classic false friend across English. «Произвести сенсацию» is to cause a sensation." },
        { id: "ru-u114l4-oglaska", type: "vocab", front: "огласка", reading: "oglaska", meaning: "publicity", accept: ["a thing becoming public", "public exposure", "being made widely known"], example: { jp: "Огласка была им совсем не нужна, и всё решили тихо.", en: "Publicity was not at all what they wanted, and it was all settled quietly." }, drill: { jp: "Огласка была им совсем не нужна", en: "Publicity was not at all what they wanted" }, hint: "ag-LAS-ka — stress on LAS, and the first о reduces to a. FEMININE (-а). ⚠️ ALMOST ALWAYS UNWANTED, which English «publicity» is not: «избежать огласки» is to keep a thing out of the papers, «дело получило огласку» means it got out. From голос (unit 39) — a thing being given a voice." },
      ],
    },
  ],
};
