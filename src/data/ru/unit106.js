// RU Unit 106 — Эстетика и приём ("Aesthetics and the device") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 1 (u98–u110). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit61.js §1–§8, and
// ru/unit98.js §1–§7d for this band.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Arts and criticism" AND FOUR UNITS SPENT IT.
// u55 Искусство и культура owns the ART FORMS (искусство · культура ·
// литература · живопись · скульптура · поэт · актёр · художник · критик · стих ·
// сцена · спектакль · роль · балет · стиль · творчество); u74 Кино и сцена owns
// the THEATRE AND SCREEN TRADE (занавес · репетиция · декорация · режиссёр ·
// кадр · жанр · шедевр · рецензия · премьера); u96 Музыка и звучание owns MUSIC;
// u45 Пресса и передачи owns the REVIEW as journalism (обзор · сюжет · публика).
// So u106 NARROWS to AESTHETICS AND THE DEVICE: the machinery a work actually
// uses, the tones it can take, the schools it belongs to, and the vocabulary of
// taste. A learner could already name a painter and a play and could not name a
// metaphor, an irony, the avant-garde, or call anything vulgar.
//
// ⚠️ SEVEN CANDIDATES REFUSED, each for a stated reason:
//   `образность` — `образ` (u68) hands it over outright.
//   `композиция` — `композитор` (u96) hands it over closely enough, and
//        `гармония` and `контраст` carry the arrangement job between them.
//   `интерпретация` — legal, and it would have to be glossed as a synonym of
//        `трактовка`, which is carded: one prompt, two right answers through
//        `normalizeMeaning`. Dropped rather than reglossed into vagueness.
//   `замысел` — TAKEN (u72).
//   `вкус` — refused at A2 against `вкусно` (u13l2), and that refusal stands
//        (unit98.js §3). ⚠️ IT IS ALSO WHY `безвкусица` IS LEGAL HERE: the
//        не-/без- rule (unit51.js §3) bars без + a TAUGHT word, and вкус is
//        precisely NOT taught in this course, so the без- is frozen inside a
//        single lexeme — the same reasoning as `неустойка` in unit 103.
//   `пафос` — TAKEN (u98l3), in this same block.
//   `манера` · `самовыражение` — both legal, both dropped for count at 24.
//
// ⚠️ `почерк` IS CARDED FOR ITS FIGURATIVE SENSE AND THE HINT HAS TO SAY SO,
// because unit1.js's opening is explicit that RUSSIAN HANDWRITING (курсив) IS
// NOT TAUGHT ANYWHERE IN THIS COURSE and no `trace` card routes for a Cyrillic
// glyph. A learner therefore meets the word for handwriting without ever having
// been asked to produce any. That is correct and intended: the card teaches the
// artist's recognisable hand, and the literal sense is named in the hint so the
// gap does not read as an accident.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT106 = {
  id: "ru-u106",
  lang: "ru",
  title: "Эстетика и приём",
  order: 106,
  stage: "b2",
  lessons: [
    {
      id: "ru-u106l1",
      unit: 106,
      lesson: 1,
      title: "The devices a work uses",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what a work is built with — a metaphor, a symbol, an unspoken meaning, an indirect way of saying, a sharp juxtaposition and the angle a thing is shown from.",
      items: [
        { id: "ru-u106l1-metafora", type: "vocab", front: "метафора", reading: "metafora", meaning: "a word used for something it is not, to make a point", accept: ["a figure calling one thing by another's name", "an image standing in for the real subject", "a transferred expression"], example: { jp: "Эта метафора красивая, однако понять её сразу трудно.", en: "This metaphor is beautiful, yet it is hard to grasp straight away." }, drill: { jp: "Эта метафора очень красивая", en: "This metaphor is very beautiful" }, hint: "me-TA-fo-ra — stress on TA. FEMININE (-а). ⚠️ Russian literary criticism is full of it and so is Russian speech — «это метафора» is how a speaker disclaims having meant something literally. Its partner `иносказание` in this lesson is the whole-utterance version." },
        { id: "ru-u106l1-simvol", type: "vocab", front: "символ", reading: "simvol", meaning: "a thing taken to stand for something larger", accept: ["an object understood to mean an idea", "a sign carrying meaning beyond itself", "an emblem of something abstract"], example: { jp: "Этот символ знают во всём мире, хотя значит он у всех разное.", en: "This symbol is known all over the world, although it means different things to different people." }, drill: { jp: "Для него это важный символ", en: "For him this is an important symbol" }, hint: "SIM-val — stress on the first syllable, and the final о reduces to a. MASCULINE. ⚠️ STRESS WARNING: English stresses SYM-bol too, but Russian learners often say sim-VOL by analogy with other -ол words. ⚠️ Also a character in computing: символ в строке." },
        { id: "ru-u106l1-podtekst", type: "vocab", front: "подтекст", reading: "podtekst", meaning: "what a text means without saying it", accept: ["the sense running under the words", "an implied meaning beneath the surface", "what is meant but deliberately left unsaid"], example: { jp: "В подтексте здесь совсем другое, и автор это знал.", en: "The subtext here is something quite different, and the author knew it." }, drill: { jp: "Подтекст здесь важнее самих слов", en: "The subtext here matters more than the words themselves" }, hint: "pad-TEKST — stress on the last syllable, and the о reduces to a. MASCULINE. Built on `текст` from unit 41 with под-. ⚠️ A WORD WITH A SOVIET HISTORY: writing in подтекст was how a censored literature said things, which is also why `иносказание` is in this lesson." },
        { id: "ru-u106l1-inoskazanie", type: "vocab", front: "иносказание", reading: "inoskazanie", meaning: "a saying of one thing to mean another", accept: ["a roundabout way of putting a meaning", "speech carrying its point indirectly", "an allegorical manner of saying"], example: { jp: "Иносказание спасало писателей, когда говорить прямо было нельзя.", en: "Allegory saved writers when it was impossible to speak directly." }, drill: { jp: "Иносказание спасало его много раз", en: "Allegory saved him many times" }, hint: "i-nas-ka-ZA-ni-ye — six syllables, stress on ZA, and the о reduces to a. NEUTER (-ие). A compound of иной, which unit 65 taught, and сказать, unit 31 — saying it otherwise. ⚠️ Bigger than a `метафора`: a метафора is one word, an иносказание is the whole utterance in disguise." },
        { id: "ru-u106l1-kontrast", type: "vocab", front: "контраст", reading: "kontrast", meaning: "a sharp difference set deliberately side by side", accept: ["two things put together to show how unlike they are", "a deliberate opposition of qualities", "a striking juxtaposition"], example: { jp: "Контраст между этими двумя частями очень сильный.", en: "The contrast between these two parts is very strong." }, drill: { jp: "Контраст между частями очень сильный", en: "The contrast between the parts is very strong" }, hint: "kan-TRAST — stress on the last syllable, and the о reduces to a. MASCULINE. ⚠️ It only LOOKS like `контроль` from unit 71 — two unrelated Latin roots. ⚠️ Also the picture setting on a screen: яркость и контраст." },
        { id: "ru-u106l1-rakurs", type: "vocab", front: "ракурс", reading: "rakurs", meaning: "the angle a thing is seen and shown from", accept: ["the viewpoint a subject is presented at", "the angle of a shot", "a chosen perspective on something"], example: { jp: "Ракурс здесь очень точный, и лицо видно хорошо.", en: "The angle here is very precise, and the face is clearly visible." }, drill: { jp: "Ракурс здесь очень странный", en: "The angle here is very odd" }, hint: "RA-kurs — stress on the first syllable. MASCULINE. A photographer's and draughtsman's word, and ⚠️ FIGURATIVE AS OFTEN AS LITERAL: «в другом ракурсе» means from another angle in an argument, which is how a Russian newspaper uses it. Companion to `кадр` from unit 74." },
      ],
    },
    {
      id: "ru-u106l2",
      unit: 106,
      lesson: 2,
      title: "The tones a work can take",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the tones — meaning the opposite of what you say, attack by ridicule, a mocking copy — and talk about things chiming together, parts in accord, and the copying of a master.",
      items: [
        { id: "ru-u106l2-ironiya", type: "vocab", front: "ирония", reading: "ironiya", meaning: "saying the opposite of what is meant", accept: ["a dry turn that means the reverse", "mockery conveyed by seeming to agree", "a wry reversal of sense"], example: { jp: "В его голосе была ирония, однако поняли её не все.", en: "There was irony in his voice, yet not everybody caught it." }, drill: { jp: "Ирония здесь слышна сразу", en: "The irony here can be heard at once" }, hint: "i-RO-ni-ya — stress on RO. FEMININE (-я). ⚠️ Russian also uses it of fate: «ирония судьбы», the irony of fate, which is a fixed phrase. The adjective иронический describes a tone; ироничный describes a person." },
        { id: "ru-u106l2-satira", type: "vocab", front: "сатира", reading: "satira", meaning: "writing that attacks by making ridiculous", accept: ["ridicule used as a weapon", "mocking attack on folly or vice", "scornful criticism through comedy"], example: { jp: "Сатира здесь злая, зато правда в ней есть.", en: "The satire here is savage, but there is truth in it." }, drill: { jp: "Сатира здесь очень злая", en: "The satire here is very savage" }, hint: "sa-TI-ra — stress on TI. FEMININE (-а). ⚠️ A genre with real weight in Russian letters — Gogol and Saltykov-Shchedrin are its names — and «сатирик» is still a recognised profession. Harder than `ирония` in this lesson: ирония is a turn of phrase, сатира is a whole work with a target." },
        { id: "ru-u106l2-parodiya", type: "vocab", front: "пародия", reading: "parodiya", meaning: "a copy made to mock the original", accept: ["a mocking imitation of a work", "an exaggerated copy for laughs", "a burlesque of somebody's manner"], example: { jp: "Пародия получилась смешнее самого фильма.", en: "The parody turned out funnier than the film itself." }, drill: { jp: "Пародия получилась очень смешная", en: "The parody turned out very funny" }, hint: "pa-RO-di-ya — stress on RO, and the first о reduces to a. FEMININE (-я). ⚠️ Also a damning verdict in Russian: «это пародия на суд», that is a travesty of a trial. Distinguish it from `подражание` in this lesson, which copies in earnest." },
        { id: "ru-u106l2-sozvuchie", type: "vocab", front: "созвучие", reading: "sozvuchie", meaning: "two things chiming together", accept: ["a chiming of sounds with each other", "an accord between two things", "a resonance of one with another"], example: { jp: "Созвучие этих двух слов случайно, и смысла в нём нет.", en: "The chime between these two words is accidental, and there is no sense in it." }, drill: { jp: "Созвучие этих слов совсем случайно", en: "The chime between these words is quite accidental" }, hint: "saz-VU-chi-ye — stress on VU, and the о reduces to a. NEUTER (-ие). From `звук` in unit 96's family with со-, the prefix of togetherness. ⚠️ Used of ideas too: созвучие взглядов, a meeting of minds. Narrower than `гармония`, the next card, which is about parts of a whole." },
        { id: "ru-u106l2-garmoniya", type: "vocab", front: "гармония", reading: "garmoniya", meaning: "parts fitting together agreeably", accept: ["an agreeable fitting of parts", "balance among the elements of a whole", "a pleasing accord across the whole"], example: { jp: "Гармония здесь важнее всего, и музыканты это знают.", en: "Harmony matters most here, and the musicians know it." }, drill: { jp: "Гармония в этом доме полная", en: "The harmony in this house is complete" }, hint: "gar-MO-ni-ya — stress on MO. FEMININE (-я). ⚠️ THREE SENSES ALL LIVE: harmony in music, agreement between people, and the school subject гармония that every Russian music student takes. ⚠️ Не the same as `согласен` from unit 61, which is one person agreeing." },
        { id: "ru-u106l2-podrazhanie", type: "vocab", front: "подражание", reading: "podrazhanie", meaning: "the copying of another's manner in earnest", accept: ["an imitation of somebody's way of doing things", "the following of another as a model", "a conscious copying of style"], example: { jp: "Подражание учителю помогает только сначала.", en: "Imitating one's teacher helps only at the start." }, drill: { jp: "Подражание учителю помогает сначала", en: "Imitating one's teacher helps at the start" }, hint: "pad-ra-ZHA-ni-ye — stress on ZHA, and the о reduces to a. NEUTER (-ие). ⚠️ NEUTRAL TO SLIGHTLY NEGATIVE, and that is the difference from `пародия`: a подражание tries to be the original and a пародия tries to deflate it. In art-history titles: «Подражание Горацию»." },
      ],
    },
    {
      id: "ru-u106l3",
      unit: 106,
      lesson: 3,
      title: "Schools and standards",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Place a work in its tradition — the theory of beauty, the accepted standard, the forward edge, life shown as it is, feeling put above rule, and genuine new ground.",
      items: [
        { id: "ru-u106l3-estetika", type: "vocab", front: "эстетика", reading: "estetika", meaning: "the study of what makes a thing beautiful", accept: ["the theory of beauty and taste", "the branch of thought dealing with the beautiful", "a worked-out sense of the beautiful"], example: { jp: "Эстетика этого дома спорная, зато внутри всё удобно.", en: "The aesthetics of this house are debatable, but inside everything is convenient." }, drill: { jp: "Эстетика этого дома очень спорная", en: "The aesthetics of this house are very debatable" }, hint: "es-TE-ti-ka — stress on TE. FEMININE (-а). ⚠️ Used both for the discipline and for the LOOK of a particular thing — «советская эстетика», the Soviet look — and the second use is far commoner in speech. The adjective is эстетический." },
        { id: "ru-u106l3-kanon", type: "vocab", front: "канон", reading: "kanon", meaning: "the set of works held to be the standard", accept: ["the accepted body of great works", "the recognised standard a field is measured against", "the authoritative list within a tradition"], example: { jp: "Канон здесь держался веками, и ломать его было страшно.", en: "The canon here held for centuries, and it was frightening to break." }, drill: { jp: "Канон здесь держался целыми веками", en: "The canon here held for whole centuries" }, hint: "ka-NON — stress on the last syllable. MASCULINE. ⚠️ ITS FIRST HOME IS THE CHURCH, which u93 taught the surroundings of: a канон is a fixed rule of icon-painting and liturgy, and the literary sense came later. Both are current." },
        { id: "ru-u106l3-avangard", type: "vocab", front: "авангард", reading: "avangard", meaning: "the artists pushing furthest ahead of their time", accept: ["those breaking new ground in art", "the forward edge of an artistic movement", "radically new art of its moment"], example: { jp: "Авангард тогда никто не понимал, зато теперь он в музеях.", en: "Nobody understood the avant-garde then, and now it is in the museums." }, drill: { jp: "Этот авангард теперь в музеях", en: "This avant-garde is in the museums now" }, hint: "a-van-GARD — stress on the last syllable. MASCULINE. ⚠️ ORIGINALLY MILITARY — the авангард is the vanguard of an army, which u129's slot will meet again — and Russia's own русский авангард of the 1910s and 20s is one of the country's great cultural exports. The person is an авангардист." },
        { id: "ru-u106l3-realizm", type: "vocab", front: "реализм", reading: "realizm", meaning: "the showing of life as it actually is", accept: ["an art that refuses to prettify", "depiction faithful to ordinary life", "the plain showing of things as they stand"], example: { jp: "Реализм показывает жизнь как она есть, и ничего не прячет.", en: "Realism shows life as it is, and hides nothing." }, drill: { jp: "Реализм ничего не прячет", en: "Realism hides nothing" }, hint: "re-a-LIZM — stress on the last syllable, and the opening еа is TWO vowels. MASCULINE. ⚠️ In Russia the loaded form is социалистический реализм, the one official style of Soviet art, and every Russian knows the phrase. Built on `реальность` from unit 68." },
        { id: "ru-u106l3-romantizm", type: "vocab", front: "романтизм", reading: "romantizm", meaning: "the movement that put feeling above rule", accept: ["an art of passion and the individual", "the movement exalting emotion and nature", "art prizing feeling over order"], example: { jp: "Романтизм ставил чувство важнее правила.", en: "Romanticism put feeling above rule." }, drill: { jp: "Романтизм любил сильные чувства", en: "Romanticism loved strong feelings" }, hint: "ra-man-TIZM — stress on the last syllable, and both о reduce to a. MASCULINE. ⚠️ It only LOOKS like `роман` from unit 27, a novel — the two are related far back and a novel does not hand a learner a movement. ⚠️ романтика, a near neighbour, means the romance OF something and is not carded." },
        { id: "ru-u106l3-novatorstvo", type: "vocab", front: "новаторство", reading: "novatorstvo", meaning: "the doing of something nobody has done before", accept: ["a breaking of genuinely new ground in a craft", "real inventiveness in a field", "the making of something unprecedented"], example: { jp: "Новаторство здесь видно сразу, однако нравится оно не всем.", en: "The innovation here is obvious at once, yet not everybody likes it." }, drill: { jp: "Новаторство у него во всём", en: "There is innovation in everything he does" }, hint: "na-VA-tar-stva — stress on VA, and all three unstressed о reduce to a. NEUTER (-о). Built on новый from unit 19. ⚠️ A WORD OF SOVIET PRAISE originally — новатор производства was a title given to inventive workers — and it still sounds official rather than casual." },
      ],
    },
    {
      id: "ru-u106l4",
      unit: 106,
      lesson: 4,
      title: "Taste, good and bad",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Judge how something is made — graceful, fussily overdone, cheaply vulgar, plain tastelessness — and talk about a reading given to a work and a maker's own hand.",
      items: [
        { id: "ru-u106l4-izyashchnyy", type: "vocab", front: "изящный", reading: "izyashchnyy", meaning: "finely and gracefully made", accept: ["elegant in form", "graceful and light in its making", "refined in shape"], example: { jp: "Изящный стиль нравится не каждому, зато помнят его долго.", en: "An elegant style does not please everybody, but it is remembered a long time." }, drill: { jp: "У него очень изящный стиль", en: "He has a very elegant style" }, hint: "i-ZYASH-nyy — stress on ZYASH, and ⚠️ THE щ HERE IS SAID WITHOUT THE t-SOUND a learner expects — изящный sounds like i-ZYASH-nyy. ADJECTIVE. ⚠️ The old name for literature is изящная словесность, belles-lettres, which is worth knowing because it still appears on old spines." },
        { id: "ru-u106l4-vychurnyy", type: "vocab", front: "вычурный", reading: "vychurnyy", meaning: "fussily overdone in style", accept: ["ornate past the point of good taste", "mannered and over-elaborate", "showily overwrought"], example: { jp: "Вычурный язык мешает читать, и смысл в нём теряется.", en: "An over-elaborate style makes reading hard, and the sense gets lost in it." }, drill: { jp: "Вычурный язык только мешает читать", en: "An over-elaborate style only makes reading hard" }, hint: "VY-chur-nyy — stress on the first syllable, with the ы from unit 5. ADJECTIVE. ⚠️ ALWAYS A CRITICISM, and it is the exact opposite of `изящный` in this lesson: both describe decoration, and only one of them is a compliment. Learn the pair together." },
        { id: "ru-u106l4-poshlyy", type: "vocab", front: "пошлый", reading: "poshlyy", meaning: "cheap and vulgar in a self-satisfied way", accept: ["tasteless and smug at once", "banal and crass together", "vulgar with pretensions to being fine"], example: { jp: "Пошлый фильм получил больше денег, чем хороший.", en: "The vulgar film took more money than the good one." }, drill: { jp: "Этот пошлый фильм получил много денег", en: "This vulgar film took a lot of money" }, hint: "POSH-lyy — stress on the first syllable. ADJECTIVE. ⚠️ ONE OF THE GREAT UNTRANSLATABLE RUSSIAN WORDS — Nabokov wrote a famous page on пошлость, insisting no English word carries it: it is vulgarity that thinks itself refined. Not merely rude, which is `грубый` from unit 56." },
        { id: "ru-u106l4-bezvkusitsa", type: "vocab", front: "безвкусица", reading: "bezvkusitsa", meaning: "a plain want of taste in what is made", accept: ["tastelessness considered as a quality", "a display with no sense of what is fitting", "crude want of discrimination"], example: { jp: "Безвкусица здесь видна сразу, и спорить об этом трудно.", en: "The tastelessness here is obvious at once, and hard to argue about." }, drill: { jp: "Это просто полная безвкусица", en: "This is simply utter tastelessness" }, hint: "biz-VKU-si-tsa — stress on VKU, and the е reduces to i. FEMININE (-а). ⚠️ IT IS LEGAL BECAUSE `вкус` IS NOT TAUGHT: unit 51's rule bars без + a CARDED word, and вкус was itself refused at A2 against вкусно, so the без- here is frozen inside one lexeme. Exactly the reasoning `неустойка` needed in unit 103." },
        { id: "ru-u106l4-traktovka", type: "vocab", front: "трактовка", reading: "traktovka", meaning: "the reading somebody gives a work", accept: ["a particular way of understanding a piece", "the interpretation put on something", "how a performer takes a work"], example: { jp: "Трактовка этой роли совсем новая, и критикам она не понравилась.", en: "The reading of this role is quite new, and the critics did not like it." }, drill: { jp: "Его трактовка роли очень новая", en: "His reading of the role is very new" }, hint: "trak-TOV-ka — stress on TOV, and the о reduces to a. FEMININE (-а). ⚠️ It only LOOKS like `трактор` from unit 88 — unrelated. ⚠️ The synonym интерпретация is deliberately NOT carded: it would share this card's gloss once `normalizeMeaning` is done with it, which is one prompt with two right answers." },
        { id: "ru-u106l4-pocherk", type: "vocab", front: "почерк", reading: "pocherk", meaning: "the individual mark of a maker's hand", accept: ["the recognisable manner of one artist", "somebody's personal way of doing a thing", "a hand you can tell on sight"], example: { jp: "Почерк этого художника видно в каждой работе.", en: "This painter's hand shows in every work." }, drill: { jp: "Почерк этого художника видно сразу", en: "This painter's hand shows at once" }, hint: "PO-cherk — stress on the first syllable. MASCULINE. ⚠️ ITS LITERAL SENSE IS HANDWRITING, AND THIS COURSE NEVER TEACHES YOU TO PRODUCE ANY: unit 1 states that Russian курсив is a different alphabet and is deliberately out of scope, so you meet the word and not the skill. That is why the card teaches the figurative sense — an artist's or a criminal's recognisable hand." },
      ],
    },
  ],
};
