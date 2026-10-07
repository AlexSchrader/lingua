// RU Unit 104 — Эксперимент и изобретение ("The experiment and the invention") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 1 (u98–u110). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit61.js §1–§8, and
// ru/unit98.js §1–§7d for this band.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Science and technology" AND THREE UNITS SPENT IT.
// u54 Наука и природа owns the SCIENCES and their nouns (наука · исследование ·
// физика · химия · биология · математика · вещество · энергия · электричество ·
// давление · объём · измерять · планета · климат); u43 Техника и связь owns the
// DEVICE a learner uses (экран · клавиатура · кнопка · устройство · техника ·
// принтер · сайт · сеть · файл · программа · приложение · микрофон · версия);
// u87 Промышленность и ресурсы owns the FACTORY (завод · цех · станок ·
// оборудование · механизм · деталь · сырьё). So u104 NARROWS to METHOD AND
// INNOVATION: the bench where a claim is tested, what matter turns out to be
// made of, the big installations, and the road from an idea to something in use.
// A learner could already name physics and a device and could not name an
// experiment, an atom, a cell, a patent or a prototype.
//
// ⚠️ CROSS-BLOCK BOUNDARY — u104 YIELDED TWO WORDS AND SAYS SO:
//   **`алгоритм` is u121 Сеть и соцсети's** (block 2). u104 cards `датчик`.
//   **`вакцина` is u112 Health systems and care's** (block 2). u104 keeps атом ·
//        молекула · клетка · излучение · частица · реактор.
//   Both would have been natural here, and a word carded twice is the one defect
//   this band's allocation exists to prevent.
//
// ⚠️ SEVEN CANDIDATES REFUSED, each for a stated reason:
//   `цифровой` — `цифра` (u21) hands it over, and this is unit51.js §3's
//        `чайник`/`чай` shape exactly. It is the most useful word this unit
//        could not have, and the rule decides it rather than the usefulness.
//        `спектр` took the slot.
//   `открытие` — `открывать` (u57) hands it over outright. `изобретение` is the
//        card; a DISCOVERY has no legal front in this language at this band.
//   `закономерность` — закон (u51) + мера (u68), both taught: composed.
//   `наблюдение` — `наблюдать` (u52) hands it over.
//   `исследователь` — `исследование` (u54) hands it over.
//   `измерение` — `измерять` (u54) hands it over.
//   `анализ` — TAKEN (u53, the medical test).
//   `учёный` — A SUBSTANTIVISED ADJECTIVE, barred by unit1.js §5's last rule;
//        unit51.js §2b named it in advance as a word B1 would reach for.
//   Dropped for count at 24, all legal: `нанотехнология` · `ускоритель` ·
//        `гипотетический` (and that last also sits on `гипотеза`, u64).
//
// ⚠️ `атом` AND `патент` ARE EXACT FREE PASSES IF GLOSSED AS THEMSELVES — their
// readings ARE "atom" and "patent". Both reglossed as descriptions, accept
// entries included. unit98.js §7c.
//
// ⚠️ `клетка` IS NOT GLOSSED "a cell". `ячейка` (u100) is already "a single cell
// in a grid", and through `normalizeMeaning` the two would be one prompt with two
// right answers. This card is "the smallest living unit of a body", which is also
// the truer gloss: Russian клетка covers the biological cell, a cage, and a check
// on cloth, and only the first is taught here.
//
// ⚠️ `частица` IS ALSO THE GRAMMATICAL PARTICLE (же · ли · бы), AND RUSSIAN DOES
// HAVE THEM — three are carded at u46 and u81. Do not read unit1.js §10's note
// that "a particle is a Japanese word class" as saying otherwise: what it says is
// that Russian does not mark CASE with particles, which is a different claim. The
// hint states both senses.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT104 = {
  id: "ru-u104",
  lang: "ru",
  title: "Эксперимент и изобретение",
  order: 104,
  stage: "b2",
  lessons: [
    {
      id: "ru-u104l1",
      unit: 104,
      lesson: 1,
      title: "At the bench",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe testing something properly — the experiment, the laboratory, the instrument, the microscope, the sensor and the setting of a gauge against a standard.",
      items: [
        { id: "ru-u104l1-eksperiment", type: "vocab", front: "эксперимент", reading: "eksperiment", meaning: "a trial set up to test a claim", accept: ["a controlled test of an idea", "a trial arranged to see what happens", "a planned test under set conditions"], example: { jp: "Эксперимент начали снова, однако результат был совсем другой.", en: "The experiment was started again, yet the result was quite different." }, drill: { jp: "Этот эксперимент надо начать снова", en: "This experiment has to be started again" }, hint: "eks-pe-ri-MENT — stress on the last syllable. MASCULINE. ⚠️ Narrower than `опыт` from unit 25, which is experience in general — though Russian also uses опыт for a school experiment, so the two overlap. An эксперимент is always deliberately set up." },
        { id: "ru-u104l1-laboratoriya", type: "vocab", front: "лаборатория", reading: "laboratoriya", meaning: "a room fitted out for scientific work", accept: ["a workroom for tests and measurement", "the place experiments are run", "a research workroom"], example: { jp: "В лаборатории работают и ночью, потому что опыт нельзя оставлять.", en: "They work in the laboratory at night too, because an experiment cannot be left." }, drill: { jp: "Лаборатория работает даже ночью", en: "The laboratory works even at night" }, hint: "la-ba-ra-TO-ri-ya — six syllables, stress on TO, and both unstressed о reduce to a. FEMININE (-я). ⚠️ Shortened to лаба in student speech, which is also the word for a lab class. A worker there is a лаборант." },
        { id: "ru-u104l1-pribor", type: "vocab", front: "прибор", reading: "pribor", meaning: "an instrument that gives a reading", accept: ["a gauge used for measuring", "a device that shows a value", "a measuring instrument"], example: { jp: "Прибор показал совсем другое число, и калибровку сделали сразу.", en: "The instrument showed quite a different figure, and the calibration was done at once." }, drill: { jp: "Этот прибор очень старый", en: "This instrument is very old" }, hint: "pri-BOR — stress on the last syllable. MASCULINE. ⚠️ THE PLURAL HAS AN EVERYDAY SENSE NOBODY EXPECTS: приборы on a dinner table are the knives and forks, and столовый прибор is a place setting. The dashboard of a car is щиток приборов." },
        { id: "ru-u104l1-mikroskop", type: "vocab", front: "микроскоп", reading: "mikroskop", meaning: "an instrument for seeing the very small", accept: ["a lens device that magnifies greatly", "an instrument for looking at tiny things", "a magnifying instrument used in science"], example: { jp: "Под микроскопом видно каждую клетку, и это всегда удивляет студентов.", en: "Every cell is visible under the microscope, and that always surprises students." }, drill: { jp: "Микроскоп стоит на этом столе", en: "The microscope stands on this table" }, hint: "mik-ras-KOP — stress on the last syllable, and the о reduces to a. MASCULINE. ⚠️ It only LOOKS like `микрофон` from unit 43 — same Greek micro-, different second half, and the readings differ at the end. The telescope is телескоп, unit 124's card." },
        { id: "ru-u104l1-datchik", type: "vocab", front: "датчик", reading: "datchik", meaning: "a part that senses and reports a reading", accept: ["a device that picks up a signal", "a sensing element inside a machine", "a probe that feeds a measurement back"], example: { jp: "Датчик здесь очень точный, зато меняют его каждый год.", en: "The sensor here is very accurate, but it gets replaced every year." }, drill: { jp: "Этот датчик надо менять каждый год", en: "This sensor has to be replaced every year" }, hint: "DAT-chik — stress on the first syllable. MASCULINE. From `давать` in unit 23 — the thing that gives you a value. ⚠️ Everywhere in modern Russian: датчик движения, a motion sensor; датчик температуры. Smaller and dumber than a `прибор`: a датчик reports, an прибор displays." },
        { id: "ru-u104l1-kalibrovka", type: "vocab", front: "калибровка", reading: "kalibrovka", meaning: "the setting of an instrument against a standard", accept: ["the adjusting of a device so it reads true", "a check of a gauge against a known value", "the tuning of a measuring tool"], example: { jp: "Калибровка идёт целый день, и работать в это время нельзя.", en: "The calibration goes on all day, and it is impossible to work meanwhile." }, drill: { jp: "Калибровка идёт почти целый день", en: "The calibration goes on nearly all day" }, hint: "ka-li-BROV-ka — stress on BROV, and the first о reduces to a. FEMININE (-а). ⚠️ An engineering word with a hard sense: until a прибор has been calibrated its readings mean nothing, which is why it is on this card and not in a footnote." },
      ],
    },
    {
      id: "ru-u104l2",
      unit: 104,
      lesson: 2,
      title: "What matter is made of",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the pieces matter breaks into — the atom, the molecule, a particle, a crystal — and talk about radiation given off and a compound built up.",
      items: [
        { id: "ru-u104l2-atom", type: "vocab", front: "атом", reading: "atom", meaning: "the smallest piece an element divides into", accept: ["the least chemical unit of an element", "matter's smallest chemical building block", "the basic unit an element is made of"], example: { jp: "Атом очень маленький, однако энергии в нём много.", en: "The atom is very small, yet there is a great deal of energy in it." }, drill: { jp: "Атом очень маленький но сильный", en: "The atom is very small but strong" }, hint: "A-tom — stress on the first syllable. MASCULINE. ⚠️ Glossed the long way round on purpose: its reading IS the English word, so «an atom» would let a learner read the answer off the prompt — unit 1 §9. ⚠️ The adjective атомный is what Russian uses where English says nuclear: атомная станция, a nuclear power station." },
        { id: "ru-u104l2-molekula", type: "vocab", front: "молекула", reading: "molekula", meaning: "two or more atoms bound together", accept: ["the smallest unit of a substance", "a bound group of atoms", "a chemical unit built out of atoms"], example: { jp: "Молекула воды очень простая, и её знает каждый студент.", en: "The water molecule is very simple, and every student knows it." }, drill: { jp: "Эта молекула очень простая", en: "This molecule is very simple" }, hint: "ma-LE-ku-la — stress on LE, and the first о reduces to a. FEMININE (-а). ⚠️ STRESS WARNING: the English word stresses MOL-, Russian stresses -LE-, and getting it wrong is the commonest learner error on this word. Pairs with `вещество` from unit 54." },
        { id: "ru-u104l2-chastitsa", type: "vocab", front: "частица", reading: "chastitsa", meaning: "a very small piece of matter", accept: ["a minute fragment of something", "a tiny body of matter", "a speck taken as a unit"], example: { jp: "Эта частица живёт очень мало, и найти её трудно.", en: "This particle lives a very short time, and is hard to find." }, drill: { jp: "Такая частица очень лёгкая", en: "Such a particle is very light" }, hint: "chas-TI-tsa — stress on TI. FEMININE (-а). From `часть` from unit 37's family — a little part. ⚠️ IT IS ALSO THE GRAMMATICAL PARTICLE, and Russian very much has them: `же` and `ли` from unit 46 and `мол` from unit 81 are частицы. Unit 1 §10's note about particles is about CASE, not about word classes." },
        { id: "ru-u104l2-kristall", type: "vocab", front: "кристалл", reading: "kristall", meaning: "matter grown into a regular solid form", accept: ["a solid with a repeating inner order", "a mineral grown with flat faces", "a regularly formed solid body"], example: { jp: "Кристалл растёт медленно, зато форма у него всегда правильная.", en: "A crystal grows slowly, but its shape is always regular." }, drill: { jp: "Кристалл растёт очень медленно", en: "A crystal grows very slowly" }, hint: "kris-TALL — stress on the last syllable, and the лл is held a beat longer. MASCULINE. ⚠️ ONE л IS A SPELLING MISTAKE a learner makes constantly; the doubled consonant is also why the reading ends -all. The adjective is кристальный, which in Russian means crystal-clear of honesty: кристальная честность." },
        { id: "ru-u104l2-izluchenie", type: "vocab", front: "излучение", reading: "izluchenie", meaning: "energy given off and travelling outward", accept: ["radiation sent out by a body", "energy streaming away from a source", "rays emitted by something"], example: { jp: "Излучение здесь больше нормы, и работать здесь нельзя.", en: "The radiation here is above the norm, and it is impossible to work here." }, drill: { jp: "Такое излучение очень опасно", en: "Such radiation is very dangerous" }, hint: "iz-lu-CHE-ni-ye — stress on CHE. NEUTER (-ие). From луч, a ray, which is not carded. ⚠️ Russian uses it both for the dangerous kind and for ordinary light and heat: тепловое излучение, thermal radiation. The adjective is излучающий." },
        { id: "ru-u104l2-sintez", type: "vocab", front: "синтез", reading: "sintez", meaning: "the building of one thing out of simpler parts", accept: ["the putting together of something from components", "the making of a compound from simpler ones", "a bringing together into one whole"], example: { jp: "Синтез этого вещества идёт очень долго.", en: "The synthesis of this substance takes a very long time." }, drill: { jp: "Синтез здесь очень сложный", en: "The synthesis here is very complicated" }, hint: "SIN-tez — stress on the first syllable. MASCULINE. ⚠️ The opposite of `анализ`, which is TAKEN at unit 53 in its medical sense — so Russian's famous анализ-синтез pair is split across two units in this course, and this card is the half you can learn. Also used of ideas: синтез двух взглядов." },
      ],
    },
    {
      id: "ru-u104l3",
      unit: 104,
      lesson: 3,
      title: "Life and the big machine",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about living matter and large installations — the cell, the nerve cell, the science of inheritance, a reactor, a purpose-built machine and a spread across a range.",
      items: [
        { id: "ru-u104l3-kletka", type: "vocab", front: "клетка", reading: "kletka", meaning: "the smallest living unit of a body", accept: ["the basic living building block of tissue", "one of the tiny living units a body is built from", "a living unit seen under a microscope"], example: { jp: "Каждая клетка живёт своей жизнью, и понять её трудно.", en: "Every cell lives a life of its own, and it is hard to understand." }, drill: { jp: "Эта клетка очень маленькая", en: "This cell is very small" }, hint: "KLET-ka — stress on the first syllable. FEMININE (-а). ⚠️ THE SAME WORD DOES THREE JOBS: the living cell (this card), a CAGE for an animal, and a CHECK on cloth — ткань в клетку is checked fabric. ⚠️ It is deliberately NOT glossed \"a cell\": `ячейка` from unit 100 already owns that gloss, and two cards cannot share one prompt." },
        { id: "ru-u104l3-neyron", type: "vocab", front: "нейрон", reading: "neyron", meaning: "a cell that carries signals in the body", accept: ["a nerve cell", "a signal-carrying cell of the brain", "one of the cells a nervous system is built from"], example: { jp: "Нейрон работает очень быстро, и считать их никто не станет.", en: "A nerve cell works very fast, and nobody is going to count them." }, drill: { jp: "Каждый нейрон здесь очень быстрый", en: "Every nerve cell here is very fast" }, hint: "ney-RON — stress on the last syllable. MASCULINE. ⚠️ The adjective нейронный is the word in нейронная сеть, a neural network, which is why this card earns its place in a B2 course and not only in a biology one." },
        { id: "ru-u104l3-genetika", type: "vocab", front: "генетика", reading: "genetika", meaning: "the study of what is passed from parents", accept: ["the science of inheritance", "the study of how traits are handed on", "the branch of biology dealing with heredity"], example: { jp: "Генетика объясняет, почему дети похожи на отца.", en: "Genetics explains why children resemble their father." }, drill: { jp: "Генетика здесь объясняет всё", en: "Genetics explains everything here" }, hint: "ge-NE-ti-ka — stress on NE, and the г is hard. FEMININE (-а). ⚠️ A word with a history in Russia: genetics was banned as a science under Stalin, and «генетика» still carries that echo for older speakers. The gene itself is ген, not carded. Beside `биология` from unit 54." },
        { id: "ru-u104l3-reaktor", type: "vocab", front: "реактор", reading: "reaktor", meaning: "a vessel where a reaction is run and held", accept: ["a plant where nuclear reaction is controlled", "a chamber a reaction is kept going in", "an installation housing a reaction"], example: { jp: "Реактор остановили на месяц, и завод стоял без энергии.", en: "The reactor was shut down for a month, and the plant stood with no power." }, drill: { jp: "Реактор остановили на целый месяц", en: "The reactor was shut down for a whole month" }, hint: "ri-AK-tar — stress on AK, the first е reduces to i, and the final о to a. MASCULINE. ⚠️ Also a chemical vessel, not only a nuclear one: химический реактор. Pairs with `атомный` in lesson 2's hint and with `завод` from unit 87." },
        { id: "ru-u104l3-apparat", type: "vocab", front: "аппарат", reading: "apparat", meaning: "a machine built for one purpose", accept: ["a constructed machine for a particular job", "a piece of equipment put together for a task", "an installation serving a single end"], example: { jp: "Аппарат работает без человека, и ошибок у него меньше.", en: "The machine works with nobody there, and it makes fewer mistakes." }, drill: { jp: "Аппарат работает совсем без человека", en: "The machine works with nobody there at all" }, hint: "ap-pa-RAT — stress on the last syllable, and the пп is held. MASCULINE. ⚠️ ITS SECOND SENSE IS POLITICAL AND VERY RUSSIAN: аппарат is the apparatus of officials behind an institution — партийный аппарат, аппарат президента — and аппаратчик is a career bureaucrat. Both senses are everyday." },
        { id: "ru-u104l3-spektr", type: "vocab", front: "спектр", reading: "spektr", meaning: "the spread of something across a range", accept: ["the band a thing splits into", "the full range a quantity covers", "a fanned-out range of values"], example: { jp: "Спектр этого света очень широкий, и объяснить его трудно.", en: "The spectrum of this light is very wide, and hard to explain." }, drill: { jp: "Спектр здесь очень широкий", en: "The spectrum here is very wide" }, hint: "SPEKTR — one syllable, and ⚠️ the oblique forms move the stress: спектрА. MASCULINE. ⚠️ It only LOOKS like `спектакль` from unit 55 — a play and a spectrum share a Latin root for looking and nothing else. Used figuratively as in English: широкий спектр мнений." },
      ],
    },
    {
      id: "ru-u104l4",
      unit: 104,
      lesson: 4,
      title: "From idea to something in use",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow a new thing from idea to use — the invention, the exclusive right over it, the first working model, the working-out, the putting into practice, and the handing of work to machines.",
      items: [
        { id: "ru-u104l4-izobretenie", type: "vocab", front: "изобретение", reading: "izobretenie", meaning: "a thing newly thought up and made", accept: ["something devised that did not exist before", "a new contrivance somebody thought of", "a newly made-up device"], example: { jp: "Это изобретение дало начало целой отрасли.", en: "This invention gave rise to a whole industry." }, drill: { jp: "Его изобретение никому не нужно", en: "His invention is no use to anybody" }, hint: "i-za-bre-TE-ni-ye — six syllables, stress on TE, and the о reduces to a. NEUTER (-ие). ⚠️ A DISCOVERY is not carded in this course and the reason is a rule, not an oversight: `открытие` is handed over by `открывать` from unit 57. Use открытие freely in speech; it simply has no card." },
        { id: "ru-u104l4-patent", type: "vocab", front: "патент", reading: "patent", meaning: "an exclusive right granted over an invention", accept: ["the legal monopoly on using an idea", "a granted right to be the only maker", "state protection given to an inventor"], example: { jp: "Патент получили быстро, зато денег он пока не дал.", en: "The patent was granted quickly, but it has brought in no money yet." }, drill: { jp: "Патент получили очень быстро", en: "The patent was granted very quickly" }, hint: "pa-TENT — stress on the last syllable. MASCULINE. ⚠️ Glossed the long way round on purpose: its reading IS the English word. ⚠️ A SECOND RUSSIAN SENSE a learner will meet: a патент is also the permit a migrant worker buys to work legally, which is a common news word." },
        { id: "ru-u104l4-prototip", type: "vocab", front: "прототип", reading: "prototip", meaning: "the first working model built to try", accept: ["a first article made to test a design", "an early working version of something", "the trial build of a new thing"], example: { jp: "Прототип работал плохо, однако идея от этого хуже не стала.", en: "The prototype worked badly, yet the idea was none the worse for it." }, drill: { jp: "Прототип работал очень плохо", en: "The prototype worked very badly" }, hint: "pra-ta-TIP — stress on the last syllable, and both о reduce to a. MASCULINE. ⚠️ A SECOND SENSE from literature, and it is the commoner one in Russian: a прототип is the real person a character was based on. ⚠️ It only LOOKS like `протокол` from unit 83." },
        { id: "ru-u104l4-razrabotka", type: "vocab", front: "разработка", reading: "razrabotka", meaning: "the working-out of something new", accept: ["the development of a design from an idea", "the elaboration of something into working form", "the work of bringing a design about"], example: { jp: "Разработка этого прибора шла пять лет.", en: "The development of this instrument took five years." }, drill: { jp: "Разработка этого прибора шла долго", en: "The development of this instrument took a long time" }, hint: "raz-ra-BOT-ka — stress on BOT. FEMININE (-а). Built on работа with раз-, which unit 31 §3 allows as a prefix. ⚠️ ALSO MINING: разработка месторождения is the working of a deposit, beside `добыча` from unit 87. The person is a разработчик, which is the standard Russian word for a software developer." },
        { id: "ru-u104l4-vnedrenie", type: "vocab", front: "внедрение", reading: "vnedrenie", meaning: "the bringing of something into actual use", accept: ["the putting of a new thing into practice", "the introduction of something into working life", "the rolling out of a new method"], example: { jp: "Внедрение новой программы идёт трудно, потому что учить людей никто не хочет.", en: "Bringing the new programme into use is going badly, because nobody wants to train people." }, drill: { jp: "Внедрение здесь идёт очень медленно", en: "The rollout here is going very slowly" }, hint: "vni-DRE-ni-ye — stress on DRE, and the е reduces to i. NEUTER (-ие). From недра, the depths — driving something INTO something. ⚠️ ALSO USED OF SPIES: внедрение агента is the planting of an agent, and both senses are current." },
        { id: "ru-u104l4-avtomatizatsiya", type: "vocab", front: "автоматизация", reading: "avtomatizatsiya", meaning: "the handing of work over to machines", accept: ["the replacing of hands by machinery", "the making of a process run itself", "the mechanising of work"], example: { jp: "Автоматизация сделала половину этой работы лишней.", en: "Automation made half of this work unnecessary." }, drill: { jp: "Автоматизация здесь только начинается", en: "Automation here is only beginning" }, hint: "af-ta-ma-ti-ZA-tsi-ya — seven syllables, stress on ZA, the в is said f before т, and both о reduce to a. FEMININE (-я). ⚠️ `цифровой` would be the natural companion word and it CANNOT be carded here — `цифра` from unit 21 hands it over, which is this unit's header §D note. Use it in speech; it has no card." },
      ],
    },
  ],
};
