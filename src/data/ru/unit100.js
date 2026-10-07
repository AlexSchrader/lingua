// RU Unit 100 — Классификация и разряд ("Classification and grade") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 1 (u98–u110). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit61.js §1–§8, and
// ru/unit98.js §1–§7c for this band.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Systems and abstraction" AND IT IS THE MOST
// THOROUGHLY SPENT SLOT IN THE WHOLE B2 SCAFFOLD — THREE UNITS, 72 CARDS.
// u68 Отвлечённые понятия IS the abstraction unit (явление · образ · объект ·
// реальность · бытие · истина · ценность · идеал · критерий · мера · предел ·
// масштаб · сходство · различие · взаимосвязь · единство · множество · оттенок ·
// абстрактный · конкретный · типичный · внешний · глубина · аспект); u52 owns
// `система` · `метод` · `принцип` · `основа`; u83 Книжный язык owns `структура` ·
// `параметр` · `норма`. There is no "systems and abstraction" left to teach.
// RETHEMED to TAXONOMY — the one thing none of the three has: how a thing is
// SORTED. What class it is in, what it is made of, what tier it sits on, and
// whether two things are the same thing. That is a B2 capability the course did
// not have: a learner could call something abstract and could not say what kind
// of thing it was.
//
// ⚠️ CROSS-BLOCK BOUNDARY, stated here because three slots want the word "layer":
// **u100 owns the STRUCTURAL words `слой` and `иерархия` and the building-free
// `ярус`. u109 owns the SOCIAL stratum (сословие · прослойка · расслоение).
// u126 Строительство owns a building's tiers.** A seat that wants `слой` for a
// social class uses u109's words instead.
//
// ⚠️ FOUR CANDIDATES REFUSED, each for a stated reason:
//   `множество` — TAKEN (u68), which also kills `подмножество` as its lexeme.
//   `классификация` — `класс` (u25) hands it over, and the unit is TITLED with
//        it: a title is not a card (the u92 `прошлое` split). `категория` is the
//        card that carries the job.
//   `обобщение` + `общность` — `общий` (u40) hands both over. §D, one-directional.
//   `определение` · `упорядочить` · `раздел` · `свойство` · `компонент` ·
//        `признак` · `разновидность` — `определять` (u48), `порядок` (u15),
//        `разделять` (u61) and `признавать` (u59) hand four of them over;
//        `свойство` is TAKEN (u60); `компонент` would duplicate `элемент`'s gloss
//        inside one lesson; `разновидность` is the same lexeme as the carded `вид`.
//
// ⚠️ `вид` IS CARDED AND THE TITLE OF u31 IS `Вид глагола`. That is not a
// collision: u31's title USES the word and no u31 card teaches it, so the front
// was free — verified against the live corpus, not against the title. It is the
// core taxonomy word in Russian and a classification unit without it is not
// possible. Its gloss stays away from "aspect", which is u31's own subject.
//
// ⚠️ FOUR NEAR-SYNONYMS SIT IN ONE LESSON ON PURPOSE AND THEIR GLOSSES ARE
// DELIBERATELY SPLIT: `категория` is the broad class, `разряд` the graded rating,
// `подкласс` the division inside a class, `рубрика` the filing heading. Not one
// of the four is glossed with the bare word "class", because `normalizeMeaning`
// would make any two of them one prompt with two right answers — the
// sameLessonSenseOverlap defect unit61.js §7b records.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT100 = {
  id: "ru-u100",
  lang: "ru",
  title: "Классификация и разряд",
  order: 100,
  stage: "b2",
  lessons: [
    {
      id: "ru-u100l1",
      unit: 100,
      lesson: 1,
      title: "Putting things in classes",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what class a thing belongs to — a broad category, a kind, a graded rating, a filing heading, a division inside a class — and talk about sorting things into groups.",
      items: [
        { id: "ru-u100l1-kategoriya", type: "vocab", front: "категория", reading: "kategoriya", meaning: "a broad class a thing is assigned to", accept: ["a wide grouping things are put into", "one of the large divisions of a subject", "a bracket somebody is placed in"], example: { jp: "Эта книга не входит в такую категорию, хотя тема её вполне ясная.", en: "This book does not fall into such a bracket, although its subject is quite clear." }, drill: { jp: "Эта категория слишком широкая", en: "This bracket is too wide" }, hint: "ka-te-GO-ri-ya — stress on GO. FEMININE (-я). ⚠️ Very common in bureaucratic Russian for a GRADE of person: льготная категория, категория граждан. Do not confuse it with `разряд` in this lesson — a категория is broad, a разряд is a rung on a ladder." },
        { id: "ru-u100l1-vid", type: "vocab", front: "вид", reading: "vid", meaning: "a kind of thing within a wider group", accept: ["one sort among several of the same family", "a species of something", "a particular type of a thing"], example: { jp: "В этом музее собраны все виды насекомых, которые живут в наших лесах.", en: "This museum has gathered every kind of insect that lives in our forests." }, drill: { jp: "Это очень редкий вид насекомых", en: "This is a very rare kind of insect" }, hint: "VID — one syllable, and ⚠️ the oblique forms move the stress onto the ending: видА, видЫ. MASCULINE. ⚠️ THE WORD HAS THREE SENSES AND THIS CARD TEACHES ONE: a kind of thing (this card), a VIEW out of a window, and verbal ASPECT, which unit 31 is named after and which no card teaches. Context separates all three." },
        { id: "ru-u100l1-razryad", type: "vocab", front: "разряд", reading: "razryad", meaning: "a rung somebody is rated into", accept: ["a graded rank awarded for skill", "a step on an official ladder", "a rating level a person holds"], example: { jp: "Он получил новый разряд, хотя стаж у него ещё маленький.", en: "He was given a new grade, although his length of service is still short." }, drill: { jp: "Этот разряд дают только мастерам", en: "This grade is only given to master craftsmen" }, hint: "raz-RYAD — stress on the last syllable. MASCULINE. ⚠️ A real feature of Russian working life: trades, sport and the civil service all have numbered разряды, and a worker's pay follows his. ⚠️ ALSO an electrical discharge in physics — электрический разряд." },
        { id: "ru-u100l1-rubrika", type: "vocab", front: "рубрика", reading: "rubrika", meaning: "the heading a thing is filed under", accept: ["a named section of a publication", "the standing title a column runs under", "a label items get grouped beneath"], example: { jp: "В газете есть новая рубрика, где читатели пишут свои вопросы.", en: "The newspaper has a new section where readers write in their questions." }, drill: { jp: "Эта рубрика выходит каждую неделю", en: "This section comes out every week" }, hint: "RUB-ri-ka — stress on the first syllable. FEMININE (-а). From the Latin for red, because headings were once written in red ink. ⚠️ In Russian it is mainly a PRESS word — a regular column in a paper or a slot in a broadcast — and only secondarily a filing heading." },
        { id: "ru-u100l1-sortirovat", type: "vocab", front: "сортировать", reading: "sortirovat", meaning: "to put things into groups by a feature", accept: ["to separate a pile into kinds", "to go through things dividing them up", "to arrange items by type"], example: { jp: "Если бумаги не сортировать сразу, потом найти нужную будет очень трудно.", en: "If the papers are not sorted at once, finding the right one later will be very hard." }, drill: { jp: "Бумаги лучше сортировать сразу", en: "Papers are better sorted at once" }, hint: "sar-ti-ra-VAT — stress on the last syllable, and the first о reduces to a. IMPERFECTIVE; the perfective is рассортировать. ⚠️ Of physical piles — letters, rubbish, fruit — rather than of ideas: сортировать мусор is what a Russian city asks of you." },
        { id: "ru-u100l1-podklass", type: "vocab", front: "подкласс", reading: "podklass", meaning: "a smaller division inside a class", accept: ["a group sitting one level below a class", "a subdivision of a larger grouping", "a narrower class within a broad one"], example: { jp: "Внутри каждого класса есть свой подкласс, и путаница здесь обычная.", en: "Inside every class there is a subclass of its own, and confusion here is normal." }, drill: { jp: "У каждого класса есть свой подкласс", en: "Every class has a subclass of its own" }, hint: "pad-KLASS — stress on the last syllable, the о reduces to a, and the сс is held. MASCULINE. Built on `класс` from unit 25 with под-, the prefix of one level down — the same shape as подкатегория and подотдел. ⚠️ A biology and library word, not an everyday one." },
      ],
    },
    {
      id: "ru-u100l2",
      unit: 100,
      lesson: 2,
      title: "The whole and its parts",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a whole and what it is made of — everything taken together, a single part, a matched set, an itemised listing, one link in a chain and a cell in a grid.",
      items: [
        { id: "ru-u100l2-sovokupnost", type: "vocab", front: "совокупность", reading: "sovokupnost", meaning: "everything of a kind taken together as one", accept: ["the whole body of such things at once", "all of them considered as a single thing", "the entirety taken as one unit"], example: { jp: "Совокупность этих условий говорит об одном, хотя каждое само по себе ничего не значит.", en: "All these conditions taken together say one thing, although each on its own means nothing." }, drill: { jp: "Важна вся совокупность этих условий", en: "What matters is all these conditions taken together" }, hint: "sa-va-KUP-nast — stress on KUP, and both о before it reduce to a. FEMININE despite the -ь, like every -ость noun. ⚠️ A legal and scientific word, and its commonest use is exactly that: по совокупности, on the strength of everything taken together — which is how a Russian court sentences for several crimes at once." },
        { id: "ru-u100l2-element", type: "vocab", front: "элемент", reading: "element", meaning: "one of the parts a whole is made of", accept: ["a single constituent piece", "one building block of a larger thing", "an individual part of a structure"], example: { jp: "Каждый элемент этой схемы нужен, и убрать хотя бы один нельзя.", en: "Every part of this diagram is needed, and not even one can be taken out." }, drill: { jp: "Один элемент здесь совсем лишний", en: "One part here is quite superfluous" }, hint: "e-le-MENT — stress on the last syllable. MASCULINE. ⚠️ Glossed the long way round on purpose: the word transliterates to the English one, and a prompt you can read the answer off is not a card. ⚠️ Also a chemical element and, in the plural about people, a disapproving word for a type: криминальные элементы." },
        { id: "ru-u100l2-nabor", type: "vocab", front: "набор", reading: "nabor", meaning: "a matched set sold or used together", accept: ["several things that come as one package", "a kit of items that belong together", "a complete assortment put up as one"], example: { jp: "В магазине продают готовый набор, в который входит сразу всё нужное.", en: "The shop sells a ready-made set that includes everything needed at once." }, drill: { jp: "Здесь продают готовый набор инструментов", en: "They sell a ready-made set of tools here" }, hint: "na-BOR — stress on the last syllable. MASCULINE. From брать, to take, which unit 31 taught as взять. ⚠️ TWO OTHER LIVE SENSES: a recruitment round — набор студентов — and typesetting. The sense here is the box of matched things." },
        { id: "ru-u100l2-perechen", type: "vocab", front: "перечень", reading: "perechen", meaning: "an itemised enumeration of things", accept: ["a bare rundown of items one by one", "an official enumeration of what there is", "a schedule naming every item"], example: { jp: "Перечень вопросов был такой длинный, что читать его никто не стал.", en: "The enumeration of questions was so long that nobody set about reading it." }, drill: { jp: "Перечень вопросов оказался очень длинным", en: "The enumeration of questions turned out very long" }, hint: "PE-re-chen — stress on the first syllable. MASCULINE, and ⚠️ the е DROPS in every other form: перечнЯ, перечнИ — the same class as `отец` from unit 10. ⚠️ Drier and more official than `список` from unit 50: a список is any list, a перечень is one an authority has issued." },
        { id: "ru-u100l2-zveno", type: "vocab", front: "звено", reading: "zveno", meaning: "one link in a connected chain", accept: ["a single ring of a chain", "one stage joining two others", "an individual member of a linked series"], example: { jp: "Если одно звено слабое, вся цепь ломается именно там.", en: "If one link is weak, the whole chain breaks exactly there." }, drill: { jp: "Одно звено этой цепи слабое", en: "One link of this chain is weak" }, hint: "zvi-NO — stress on the last syllable, and the е reduces to i. NEUTER, and ⚠️ the plural shifts the stress forward and changes the vowel: звЕнья, звЕньев — the rare -ья pattern you met in друзья. Figurative as often as literal: слабое звено, the weak link." },
        { id: "ru-u100l2-yacheyka", type: "vocab", front: "ячейка", reading: "yacheyka", meaning: "a single cell in a grid or honeycomb", accept: ["one small compartment of many", "a box in a row of identical boxes", "a pigeonhole in a frame"], example: { jp: "В каждой ячейке стоит своя цифра, и пустых здесь быть не должно.", en: "Each cell has its own figure in it, and there should be no empty ones here." }, drill: { jp: "Эта ячейка пока совсем пустая", en: "This cell is still quite empty" }, hint: "ya-CHEY-ka — stress on CHEY. FEMININE (-а). ⚠️ THE SAME WORD DOES THREE JOBS a learner meets daily: a cell in a spreadsheet, a left-luggage locker at a station, and the smallest unit of an organisation — ячейка общества is a stock phrase for the family." },
      ],
    },
    {
      id: "ru-u100l3",
      unit: 100,
      lesson: 3,
      title: "Levels and layers",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how things are stacked and ranked — a chain of command, a tier, a layer, a graded series, one thing ranking under another, and the breaking of a whole into parts.",
      items: [
        { id: "ru-u100l3-ierarkhiya", type: "vocab", front: "иерархия", reading: "ierarkhiya", meaning: "a ranking of who stands above whom", accept: ["a chain of command from top to bottom", "an order of rank in an organisation", "the layered ranking of posts"], example: { jp: "В этой организации иерархия очень строгая, и через голову начальника здесь не ходят.", en: "In this organisation the chain of command is very strict, and nobody goes over his boss's head here." }, drill: { jp: "Иерархия в этой организации очень строгая", en: "The chain of command in this organisation is very strict" }, hint: "i-ye-RAR-khi-ya — stress on RAR, and the opening ие is TWO vowels. FEMININE (-я). ⚠️ The adjective иерархический is not carded; it is the same lexeme. ⚠️ Used of ideas as well as of people: иерархия ценностей, a ranking of values." },
        { id: "ru-u100l3-yarus", type: "vocab", front: "ярус", reading: "yarus", meaning: "one tier of several stacked above each other", accept: ["a level in a stack of levels", "one storey of a tiered structure", "a shelf-like layer in a series"], example: { jp: "Первый ярус был полон, а верхний пустой весь вечер.", en: "The first tier was full, and the top one empty all evening." }, drill: { jp: "Первый ярус был совсем пустой", en: "The first tier was quite empty" }, hint: "YA-rus — stress on the first syllable. MASCULINE. ⚠️ THE WORD A RUSSIAN THEATRE TICKET USES: первый ярус, второй ярус are the balcony levels above the stalls, so this is the one place every learner meets it. Also of forest canopy and of bunks in a train." },
        { id: "ru-u100l3-sloy", type: "vocab", front: "слой", reading: "sloy", meaning: "a layer lying over or under another", accept: ["a sheet of something spread across a surface", "one stratum of several", "a coat lying on top of another"], example: { jp: "Верхний слой закрывал ещё один, гораздо старше.", en: "The top layer was covering another, much older one." }, drill: { jp: "Верхний слой здесь очень тонкий", en: "The top layer here is very thin" }, hint: "SLOY — one syllable. MASCULINE, and ⚠️ the plural moves the stress onto the ending: слоИ, слоёв. ⚠️ ITS OBLIQUE FORMS ARE DELIBERATELY ABSENT FROM THIS UNIT'S SENTENCES: `слой` is a four-letter front ending in -ой, which is `scripts/scope-ru.mjs`'s documented stemmer blind spot (unit61.js §7c) — слоём reads as out of scope although it is this very card. Written around rather than patched, so no PARADIGM entry had to be added. ⚠️ ITS SOCIAL SENSE IS NOT THIS COURSE'S: слои общества exists, but unit 109 teaches the social stratum with its own words (`прослойка`, `сословие`) and this card stays physical." },
        { id: "ru-u100l3-gradatsiya", type: "vocab", front: "градация", reading: "gradatsiya", meaning: "a graded series of small steps", accept: ["a scale running by fine degrees", "a run of stages shading into each other", "a stepped progression between two points"], example: { jp: "Между этими словами есть целая градация, и выбирать надо точно.", en: "Between these words there is a whole graded series, and one has to choose precisely." }, drill: { jp: "Здесь нужна более тонкая градация", en: "A finer graded series is needed here" }, hint: "gra-DA-tsi-ya — stress on DA. FEMININE (-я). ⚠️ Distinguish it from `степень` from unit 47, which is ONE degree, and from `оттенок` from unit 68, which is one shade: a градация is the whole ladder of them." },
        { id: "ru-u100l3-sopodchinenie", type: "vocab", front: "соподчинение", reading: "sopodchinenie", meaning: "the ranking of one thing under another", accept: ["the way one part is set beneath another", "a relation of lower to higher", "subordination of one unit to another"], example: { jp: "Соподчинение этих отделов никто не объяснил, и работа стоит.", en: "Nobody explained how these departments rank under one another, and work has stopped." }, drill: { jp: "Соподчинение здесь очень сложное", en: "The ranking here is very complicated" }, hint: "sa-pad-chi-NE-ni-ye — six syllables, stress on NE, and both о before it reduce to a. NEUTER (-ие). Built on `подчиняться` from unit 71 with со-, the prefix of jointness. ⚠️ An administrative and grammatical term: in grammar it is how two subordinate clauses rank against each other." },
        { id: "ru-u100l3-droblenie", type: "vocab", front: "дробление", reading: "droblenie", meaning: "the breaking of a whole into small parts", accept: ["a splitting up into many pieces", "the cutting of one unit into several", "fragmentation of something whole"], example: { jp: "Дробление отдела на мелкие части только дало лишнюю работу.", en: "Breaking the department up into small pieces only produced extra work." }, drill: { jp: "Такое дробление отдела никому не нужно", en: "Such a breaking-up of the department is no use to anyone" }, hint: "drab-LE-ni-ye — stress on LE, and the о reduces to a. NEUTER (-ие). From дробь, a fraction — and дробь itself is unit 122's card, not this one. ⚠️ Almost always a criticism in Russian: дробление сил, the splitting of one's effort." },
      ],
    },
    {
      id: "ru-u100l4",
      unit: 100,
      lesson: 4,
      title: "The same or merely alike",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say whether two things are the same thing or only alike — identity, an explanatory likeness, a diagram, the job a part does, one standard throughout, and the setting of a thing apart.",
      items: [
        { id: "ru-u100l4-tozhdestvo", type: "vocab", front: "тождество", reading: "tozhdestvo", meaning: "being one and the same thing, not merely alike", accept: ["complete sameness between two things", "the state of being identical", "exact coincidence of two things"], example: { jp: "Между этими словами нет тождества, и смысл у каждого свой.", en: "There is no identity between these words, and each has a sense of its own." }, drill: { jp: "Тождество здесь только кажется", en: "The identity here is only apparent" }, hint: "tazh-DEST-va — stress on DEST, and both о reduce to a. NEUTER (-о). ⚠️ Far stronger than `сходство` from unit 68, which is mere likeness: тождество means there is only one thing here wearing two names. In mathematics it is an identity in the technical sense." },
        { id: "ru-u100l4-analogiya", type: "vocab", front: "аналогия", reading: "analogiya", meaning: "a likeness brought in to explain something", accept: ["a parallel drawn to make a point clear", "a comparison used as an illustration", "a resemblance offered as explanation"], example: { jp: "Аналогия здесь помогает понять суть, однако доказательством она не станет.", en: "A parallel helps to grasp the gist here, yet it will never amount to proof." }, drill: { jp: "Аналогия здесь только мешает", en: "A parallel only gets in the way here" }, hint: "a-na-LO-gi-ya — stress on LO. FEMININE (-я). ⚠️ The standard phrase is по аналогии, by analogy, and Russian law uses it as a technical term. ⚠️ Unit 98's lesson 4 is the warning that goes with this card: an аналогия is an illustration, and passing one off as proof is a софизм." },
        { id: "ru-u100l4-skhema", type: "vocab", front: "схема", reading: "skhema", meaning: "a simplified drawing of how something works", accept: ["a stripped-down diagram of a system", "a line drawing showing connections", "a plan reduced to its essentials"], example: { jp: "По этой схеме видно, как связаны все отделы.", en: "This diagram shows how all the departments are connected." }, drill: { jp: "Схема здесь совсем простая", en: "The diagram here is quite simple" }, hint: "SKHE-ma — stress on the first syllable, and the сх is two separate sounds, s and kh. FEMININE (-а). ⚠️ ALSO a plan of action, usually a shady one: мошенническая схема is the standard phrase for a fraud, which is why the word is everywhere in Russian news." },
        { id: "ru-u100l4-funktsiya", type: "vocab", front: "функция", reading: "funktsiya", meaning: "the job a part does within a whole", accept: ["the work something is there to perform", "the role a piece plays in a system", "what a component is for"], example: { jp: "У каждого элемента здесь своя функция, и менять их местами нельзя.", en: "Every part here has its own job, and they cannot be swapped round." }, drill: { jp: "У каждого элемента своя функция", en: "Every part has its own job" }, hint: "FUNK-tsi-ya — stress on the first syllable. FEMININE (-я). ⚠️ Glossed the long way round on purpose: the word transliterates to the English one. ⚠️ Three senses, all live: the job of a part, a mathematical function, and a feature on a device — функции телефона." },
        { id: "ru-u100l4-edinyy", type: "vocab", front: "единый", reading: "edinyy", meaning: "one and the same throughout", accept: ["uniform across the whole area", "shared by everybody with no variation", "the same everywhere without exception"], example: { jp: "Для всех областей нужен единый порядок, иначе спорить будут долго.", en: "A uniform procedure is needed for all the regions, otherwise the arguing will go on a long time." }, drill: { jp: "Здесь нужен единый порядок работы", en: "A uniform working procedure is needed here" }, hint: "ye-DI-nyy — stress on DI, and the opening е is said ye. ADJECTIVE. ⚠️ Distinguish it from `один` from unit 11, which counts: единый does not mean one in number, it means one and the same for all. The state uses it constantly: единый реестр, единый экзамен." },
        { id: "ru-u100l4-obosoblenie", type: "vocab", front: "обособление", reading: "obosoblenie", meaning: "the setting of a thing apart from the rest", accept: ["a separating out of one part", "the marking off of something from its surroundings", "the holding of a unit apart"], example: { jp: "Обособление этого отдела ничего не дало, зато расходы стали больше.", en: "Setting this department apart achieved nothing, but the costs grew." }, drill: { jp: "Такое обособление отдела только мешает", en: "Setting the department apart like this only gets in the way" }, hint: "a-ba-sab-LE-ni-ye — six syllables, stress on LE, and all three о reduce to a. NEUTER (-ие). From особый, special, by way of обособить. ⚠️ ALSO A GRAMMATICAL TERM a Russian schoolchild knows: обособление is the setting off of a phrase with commas." },
      ],
    },
  ],
};
