// RU Unit 55 — Искусство и культура ("Art and culture") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Block 3 (u51–u60). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 6 (A2)` — no subject named. See unit51.js.
//
// ⚠️ A DEDUPE HOTSPOT. Block 2's u45 is titled "Culture and leisure" and ran
// concurrently, unseen. unit51.js §1 lists all four such collisions. Block 3's
// half of this one is THE ARTS AS ART FORMS and the people who make them — art,
// culture, literature, painting, sculpture, a poet, an author, an artist, a
// spectator, a stage, a performance, a part, an orchestra, a ballet — plus custom,
// belief and style. If u45 holds any of these, the lower slot number owns it.
//
// THE MEASURED HOLE. A1's u27 Свободное время is LEISURE, which is a different
// thing: играть · петь · танцевать · рисовать · плавать · бегать · картина ·
// концерт · выставка · гость · кино · клуб · приглашать · план · шутка · весело ·
// компания · хозяин · журнал · газета · радио · телевизор · сказка · роман. Add
// музыка (u8l4), фильм (u8l4), театр and музей (u9l2), зал (u12l2), праздник and
// фотография (u10l4). So a learner could DO things and watch things, but could not
// name a single art FORM, could not say art, culture or literature at all, could
// not name the person who made any of it, and had no word for a stage, a
// performance or a part in one.
//
// ★ FOUR -ь FRONTS, and unit1.js §3 makes the gender compulsory on each:
//   FEMININE живопись · роль    MASCULINE спектакль · стиль
//   A dead-even split inside one unit, which is exactly why the rule exists —
//   nothing in the spelling predicts it. ⚠️ This header said SEVEN and listed
//   `зритель` as a fifth; the count was wrong when written (there were five) and
//   `зритель` left at the band dedupe of 2026-09-30. Re-derived, not softened.
//
// ═════════════════════════════════════════════════════════════════════════════
// ⚠️ THREE OF THIS UNIT'S 24 CARDS WERE RE-AUTHORED AT THE BAND DEDUPE, 2026-09-30.
// ═════════════════════════════════════════════════════════════════════════════
// Blocks 2 and 3 authored in parallel and could not see each other's fronts. Three
// of u55's went to block 2's u45 Пресса и передачи as well, which teaches them
// EARLIER, so u45 keeps them and u55 re-authored the slots:
//     автор   → u45      `актёр` "a stage performer" took l2's slot
//     зритель → u45      `критик` "a reviewer" took l2's slot
//     публика → u45      `хор` "a choir" took l3's slot
// The new three were checked against the whole ru corpus for front, reading and
// gloss collisions and against §D below. `актёр` and `критик` are both glossed the
// long way round for the free-pass reason unit1.js §9 names.
//
// ⚠️ REFUSED IN THIS UNIT, and all four cost a card:
//   `писатель` "a writer" — §D against `писать` (u4l3) and `написать` (u31l1).
//        `поэт` carries the sense, and `читатель` (vs `читать` u4l3) is refused on
//        exactly the same ground — both were re-checked at the dedupe and both
//        stay refused.
//   `песня` (vs `петь` u27l1) and `танец` (vs `танцевать` u27l1) — §D. This is why
//        l3 is the STAGE and not the concert; A1 taught the verbs and the noun
//        would be a second mastery track for each.
//   `рассказ` (vs `рассказывать` u34l1) and `обычай` (vs `обычный` u40l1) — §D.
//        `миф` and `легенда` took those two slots.
//   `опера` — a FREE PASS, not a §D case: it transliterates to "opera", which is
//        its own English gloss, so checkProduce would accept the prompt. `балет`
//        is safe ("ballet" ≠ "balet") and is carded instead. unit1.js §9.
//   `вера` — §D against `верить` (u22l3), and `религия` already covers the field.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT55 = {
  id: "ru-u55",
  lang: "ru",
  title: "Искусство и культура",
  order: 55,
  stage: "a2",
  lessons: [
    {
      id: "ru-u55l1",
      unit: 55,
      lesson: 1,
      title: "The art forms",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the arts — art itself, culture, literature, painting, sculpture — and call a story a myth.",
      items: [
        { id: "ru-u55l1-iskusstvo", type: "vocab", front: "искусство", reading: "iskusstvo", meaning: "art", accept: ["the arts", "artistry", "a skill raised to an art"], example: { jp: "Русское искусство очень известное.", en: "Russian art is very well known." }, drill: { jp: "Это очень старое искусство", en: "That is a very old art" }, hint: "is-KUS-stva — stress on KUS, and the сс is held a beat longer. NEUTER (-о). It also means a craft done supremely well: «это искусство» of a cook or a driver." },
        { id: "ru-u55l1-kultura", type: "vocab", front: "культура", reading: "kultura", meaning: "culture", accept: ["the culture", "a way of life", "cultivation"], example: { jp: "Культура этой страны очень старая.", en: "The culture of this country is very old." }, drill: { jp: "Русская культура очень интересная", en: "Russian culture is very interesting" }, hint: "kul-TU-ra — stress on TU, and the ь after л keeps it soft. FEMININE (-а). ⚠️ «Культурный человек» does not mean cultured in the English sense — it means well-mannered." },
        { id: "ru-u55l1-literatura", type: "vocab", front: "литература", reading: "literatura", meaning: "literature", accept: ["writing as an art", "books as a field", "literature at school"], example: { jp: "Русская литература очень известная в мире.", en: "Russian literature is very well known in the world." }, drill: { jp: "Эта литература очень трудная", en: "This literature is very difficult" }, hint: "li-ti-ra-TU-ra — five syllables, stress on the second TU, and every unstressed е reduces to a short i. FEMININE (-а). At school it is one of the two subjects every Russian child names, with математика." },
        { id: "ru-u55l1-zhivopis", type: "vocab", front: "живопись", reading: "zhivopis", meaning: "the art of painting", accept: ["painting as an art form", "pictorial art", "fine art on canvas"], example: { jp: "Живопись этого века очень известная.", en: "The painting of this century is very well known." }, drill: { jp: "Живопись здесь очень красивая", en: "The painting here is very beautiful" }, hint: "ZHI-va-pis — stress on the first syllable. ⚠️ FEMININE despite the -ь. Literally «life-writing», живо + пись. ⚠️ Glossed as the ART FORM because картина from unit 27 already holds «a painting», the single object." },
        { id: "ru-u55l1-skulptura", type: "vocab", front: "скульптура", reading: "skulptura", meaning: "sculpture", accept: ["a sculpture", "a statue", "carving as an art"], example: { jp: "Эта скульптура очень старая и красивая.", en: "That sculpture is very old and very beautiful." }, drill: { jp: "Это очень большая скульптура", en: "That is a very large sculpture" }, hint: "skul-PTU-ra — stress on TU, and the ль in the middle is soft. FEMININE (-а). Both the art form and one carved object — Russian does not split them. памятник from unit 30 is a monument, which is a sculpture with a job." },
        { id: "ru-u55l1-mif", type: "vocab", front: "миф", reading: "mif", meaning: "a myth", accept: ["a legend of the gods", "an old story people believe", "a false belief"], example: { jp: "Это очень старый миф нашего народа.", en: "That is a very old myth of our people." }, drill: { jp: "Это просто старый миф", en: "That is simply an old myth" }, hint: "MIF — one syllable, and the ф is a plain f. MASCULINE. Both senses work as in English: an ancient story, and a thing widely believed and untrue. сказка from unit 27 is a fairy tale told to children." },
      ],
    },
    {
      id: "ru-u55l2",
      unit: 55,
      lesson: 2,
      title: "Who makes it and who judges it",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the person behind a work — a poet, an artist, a stage performer — call someone a hero, and talk about the reviewer who judges it.",
      items: [
        { id: "ru-u55l2-poet", type: "vocab", front: "поэт", reading: "poet", meaning: "a writer of verse", accept: ["a poet by trade", "someone who writes poems", "a versifier"], example: { jp: "Этот поэт очень известный в нашей стране.", en: "That poet is very well known in our country." }, drill: { jp: "Он очень известный поэт", en: "He is a very well known poet" }, hint: "pa-ET — stress on the last syllable, the о reduces to a, and the э is э, not е. MASCULINE. ⚠️ Glossed the long way round on purpose: this word transliterates to the English one, and a prompt you can read the answer off is not a card." },
        { id: "ru-u55l2-aktyor", type: "vocab", front: "актёр", reading: "aktyor", meaning: "a stage performer", accept: ["an actor", "an actress", "someone who plays a part"], example: { jp: "Этот актёр играет главную роль.", en: "That performer plays the leading part." }, drill: { jp: "Он очень известный актёр", en: "He is a very well known performer" }, hint: "ak-TYOR — stress on the last syllable, and the ё is always written, as unit 1 §7 requires. MASCULINE; the woman is актриса. ⚠️ Glossed «a stage performer» on purpose: this word transliterates to the English one, and a prompt you can read the answer off is not a card — the same trap поэт is glossed around." },
        { id: "ru-u55l2-khudozhnik", type: "vocab", front: "художник", reading: "khudozhnik", meaning: "an artist", accept: ["a painter", "someone who paints", "an artist by trade"], example: { jp: "Этот художник любит рисовать море.", en: "That artist likes painting the sea." }, drill: { jp: "Это очень молодой художник", en: "That is a very young artist" }, hint: "khu-DOZH-nik — stress on DOZH, with the scraping х from unit 1. MASCULINE; the woman is художница. It means a painter first of all, not an artist in general." },
        { id: "ru-u55l2-geroy", type: "vocab", front: "герой", reading: "geroy", meaning: "a hero", accept: ["the hero", "a brave man", "the main character"], example: { jp: "Он настоящий герой нашего города.", en: "He is a genuine hero of our town." }, drill: { jp: "Он настоящий герой здесь", en: "He is a genuine hero here" }, hint: "gi-ROY — stress on the last syllable, and the е reduces to i. MASCULINE. Two senses that Russian keeps in one word: a brave person, and the main character of a book or a film." },
        { id: "ru-u55l2-kritik", type: "vocab", front: "критик", reading: "kritik", meaning: "a reviewer", accept: ["a critic", "someone who reviews art", "a book or film critic"], example: { jp: "Этот критик написал о нашем театре.", en: "That reviewer wrote about our theatre." }, drill: { jp: "Этот критик очень строгий", en: "That reviewer is very strict" }, hint: "KRI-tik — stress on the first syllable. MASCULINE. ⚠️ Glossed «a reviewer» and not «a critic»: the word transliterates, and unit 9 taught that a prompt you can read the answer off is not a card. He judges the творчество of lesson 4." },
        { id: "ru-u55l2-stikh", type: "vocab", front: "стих", reading: "stikh", meaning: "a verse", accept: ["a poem", "a line of poetry", "one short poem"], example: { jp: "Этот стих очень красивый и простой.", en: "That verse is very beautiful and very plain." }, drill: { jp: "Он написал очень красивый стих", en: "He wrote a very beautiful verse" }, hint: "STIKH — one syllable, ending in the scraping х. MASCULINE. ⚠️ Its PLURAL, стихи, is the ordinary word for poetry: «он пишет стихи» means he writes poems, and no Russian says «поэзия» in conversation." },
      ],
    },
    {
      id: "ru-u55l3",
      unit: 55,
      lesson: 3,
      title: "On the stage",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a night at the theatre — the stage, the performance, who plays which part, the choir, the orchestra and the ballet.",
      items: [
        { id: "ru-u55l3-stsena", type: "vocab", front: "сцена", reading: "stsena", meaning: "a stage", accept: ["the stage", "a scene in a play", "the boards"], example: { jp: "Сцена в этом театре очень большая.", en: "The stage in this theatre is very large." }, drill: { jp: "Эта сцена очень большая", en: "That stage is very large" }, hint: "STSE-na — stress on the first syllable, and the сц at the front is said s-ts with no vowel between. FEMININE (-а). Both the platform and a scene in a play." },
        { id: "ru-u55l3-spektakl", type: "vocab", front: "спектакль", reading: "spektakl", meaning: "a theatre performance", accept: ["a show on stage", "a play being performed", "a production"], example: { jp: "Этот спектакль был очень интересный.", en: "That performance was very interesting." }, drill: { jp: "Спектакль будет завтра вечером", en: "The performance is tomorrow evening" }, hint: "spik-TAKL — stress on TAKL, and the кль at the end takes no vowel. ⚠️ MASCULINE despite the -ь. It is the EVENING, not the text: концерт from unit 27 is the musical equivalent." },
        { id: "ru-u55l3-rol", type: "vocab", front: "роль", reading: "rol", meaning: "a part in a play", accept: ["a role", "the part someone plays", "a part in a film"], example: { jp: "Её роль в этом фильме очень важная.", en: "Her part in that film is very important." }, drill: { jp: "Это очень важная роль", en: "That is a very important part" }, hint: "ROL — one syllable, with the ь keeping the л soft. ⚠️ FEMININE despite the -ь. «Играть роль» is to play a part, and also to matter: «это не играет роли» means it makes no difference." },
        { id: "ru-u55l3-khor", type: "vocab", front: "хор", reading: "khor", meaning: "a choir", accept: ["a chorus", "singers together", "a choral group"], example: { jp: "Этот хор поёт очень хорошо.", en: "That choir sings very well." }, drill: { jp: "Наш хор поёт в этом зале", en: "Our choir sings in this hall" }, hint: "KHOR — one syllable, opening with the scraping х. MASCULINE. Singers together, as an оркестр is players together. ⚠️ «Хором» means all together, in one voice — «отвечать хором» is what a class does." },
        { id: "ru-u55l3-orkestr", type: "vocab", front: "оркестр", reading: "orkestr", meaning: "an orchestra", accept: ["the orchestra", "the band", "the players together"], example: { jp: "Оркестр играет очень хорошо.", en: "The orchestra plays very well." }, drill: { jp: "Этот оркестр играет хорошо", en: "That orchestra plays well" }, hint: "ar-KESTR — stress on KESTR, the о at the front reduces to a, and ⚠️ the -стр at the end takes no vowel after it, exactly like министр in unit 51 and литр in unit 37. MASCULINE." },
        { id: "ru-u55l3-balet", type: "vocab", front: "балет", reading: "balet", meaning: "a ballet", accept: ["the ballet", "ballet as an art", "a ballet evening"], example: { jp: "Русский балет очень известный в мире.", en: "Russian ballet is very well known in the world." }, drill: { jp: "Этот балет очень известный", en: "That ballet is very well known" }, hint: "ba-LET — stress on the last syllable. MASCULINE. ⚠️ Its sister word опера could NOT be taught here: «opera» is its own transliteration, so the prompt would give the answer away — the free-pass trap unit 9 found." },
      ],
    },
    {
      id: "ru-u55l4",
      unit: 55,
      lesson: 4,
      title: "Custom, belief and style",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a tradition, a religion, fashion and style, and about someone's creative work and the legends around it.",
      items: [
        { id: "ru-u55l4-traditsiya", type: "vocab", front: "традиция", reading: "traditsiya", meaning: "a tradition", accept: ["a custom", "the way it has always been done", "a long-standing practice"], example: { jp: "Это очень старая традиция нашей семьи.", en: "That is a very old tradition of our family." }, drill: { jp: "Это наша старая традиция", en: "That is our old tradition" }, hint: "tra-DI-tsi-ya — stress on DI. FEMININE (-я). Another -ция noun taking the stress on the syllable before it, like организация in unit 51 and операция in unit 53." },
        { id: "ru-u55l4-religiya", type: "vocab", front: "религия", reading: "religiya", meaning: "religion", accept: ["a religion", "a faith", "what people believe"], example: { jp: "Религия здесь очень важная для людей.", en: "Religion here is very important to people." }, drill: { jp: "Эта религия очень старая", en: "That religion is very old" }, hint: "ri-LI-gi-ya — stress on LI, and both unstressed е reduce to a short i. FEMININE (-я). церковь from unit 14 is the building; религия is the belief." },
        { id: "ru-u55l4-moda", type: "vocab", front: "мода", reading: "moda", meaning: "fashion", accept: ["a fashion", "what is in", "the latest thing"], example: { jp: "Мода в этом городе очень разная.", en: "Fashion in this town is very varied." }, drill: { jp: "Эта мода уже старая", en: "That fashion is old already" }, hint: "MO-da — stress on the first syllable. FEMININE (-а). «Модный» is the adjective and «в моде» means in fashion. It is about clothes far more often than about anything else." },
        { id: "ru-u55l4-stil", type: "vocab", front: "стиль", reading: "stil", meaning: "a style", accept: ["the style of something", "a manner", "a way of doing things"], example: { jp: "Его стиль очень простой и ясный.", en: "His style is very plain and very clear." }, drill: { jp: "Мне нравится этот стиль", en: "I like this style" }, hint: "STIL — one syllable, with the ь keeping the л soft. ⚠️ MASCULINE despite the -ь. A writer's style, a person's style of dress, a style of music — all one word." },
        { id: "ru-u55l4-tvorchestvo", type: "vocab", front: "творчество", reading: "tvorchestvo", meaning: "creative work", accept: ["a body of work", "someone's output", "creativity"], example: { jp: "Творчество этого поэта очень известное.", en: "That poet's creative work is very well known." }, drill: { jp: "Его творчество очень известное", en: "His creative work is very well known" }, hint: "TVOR-chist-va — stress on the first syllable. NEUTER (-о). It means a person's whole body of creative work, which is how a Russian book review is written — «творчество Пушкина», Pushkin's work." },
        { id: "ru-u55l4-legenda", type: "vocab", front: "легенда", reading: "legenda", meaning: "a legend", accept: ["an old tale", "a famous story", "a legendary figure"], example: { jp: "Эта легенда очень старая и красивая.", en: "That legend is very old and very beautiful." }, drill: { jp: "Легенда этого города очень старая", en: "The legend of this town is very old" }, hint: "li-GEN-da — stress on GEN, and the first е reduces. FEMININE (-а). Both a story handed down and a person who has become one. A миф is older and about gods; a легенда can be about a footballer." },
      ],
    },
  ],
};
