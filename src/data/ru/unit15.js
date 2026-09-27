// RU Unit 15 — Дом и вещи ("Home and things") — A1
// ─────────────────────────────────────────────────────────────────────────────
// RETHEMED FROM THE SCAFFOLD'S "Characters 3". The argument is in unit9.js's
// header and the language-wide decision in unit1.js §10: the five "Characters N"
// slots encode a JAPANESE interleaved-kanji strand, Russian finishes its 33
// letters at u6, and `lint.js` hard-errors on /^Characters \d+$/ once a unit is
// authored. Block 1 rethemed u9 to internationalisms; u12 became Надписи.
//
// WHY THIS SLOT BECAME THE HOME, and not a third decoding unit. Block 1 offered
// four candidate themes and said "use those or something better". This IS the
// better: **the Russian scaffold has no home-and-objects unit anywhere in u1–u30**,
// and CEFR A1 explicitly covers house, home and environment. The learner who
// finishes u30 could order a meal, buy a coat and describe a town, and could not
// name the room they were standing in. A missing core domain beats a fourth
// variation on "read the Cyrillic" — the artefact slot is exactly where it belongs.
// u18 takes the other missing A1 domain (clothes and shopping) for the same reason.
//
// ⚠️ TWO MORE FLEETING VOWELS, and the drills stay nominative for them:
// `потолок` (→ на потолке) and `порядок` (→ в порядке). Same shape as `угол`
// (u12) and `рынок` (u14); unit1.js §5 forbids the inflected form as a card, and
// the verbatim-front drill rule means the sentences keep the citation form too.
//
// ⚠️ ONE GLOSS COLLISION WAS DESIGNED OUT OF THIS UNIT, and it is worth recording
// because no tool would have caught it. `порядок` was first glossed "order" —
// which `normalizeMeaning` reduces to exactly the same string as u13's
// `заказывать`, "to order" (the leading "to " is stripped). Two fronts, one
// prompt, two right answers. It is glossed "tidiness" instead, and `лампа` lost
// the accept entry "a light" for the same reason — that is l4's `свет`.
//
// ⚠️ класть vs ставить. Russian picks its put-verb by the SHAPE of the object:
// класть lays flat, ставить stands upright. Only класть is carded (A1 needs one),
// and the hint names the other so the learner knows a choice exists rather than
// over-generalising the one they have.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT15 = {
  id: "ru-u15",
  lang: "ru",
  title: "Дом и вещи",
  order: 15,
  stage: "a1",
  lessons: [
    {
      id: "ru-u15l1",
      unit: 15,
      lesson: 1,
      title: "Walk someone through your flat",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the rooms of a flat and say which way each one is.",
      items: [
        { id: "ru-u15l1-komnata", type: "vocab", front: "комната", reading: "komnata", meaning: "a room", accept: ["room", "the room", "a chamber"], example: { jp: "Наша комната налево, и она очень красивая.", en: "Our room is on the left, and it is very beautiful." }, drill: { jp: "Наша комната очень старая", en: "Our room is very old" }, hint: "KOM-na-ta, stress first. Feminine (-а). The general word for any room in a flat, and Russian measures a flat in them — двухкомнатная квартира is a two-room flat, with the kitchen not counted." },
        { id: "ru-u15l1-kukhnya", type: "vocab", front: "кухня", reading: "kukhnya", meaning: "a kitchen", accept: ["kitchen", "the kitchen", "a galley"], example: { jp: "Кухня направо, и там уже завтрак.", en: "The kitchen is on the right, and breakfast is already in there." }, drill: { jp: "Кухня у нас очень красивая", en: "Our kitchen is very beautiful" }, hint: "KUKH-nya, stress first. Feminine (-я), and the я is there to soften the н. In a Soviet-built flat the кухня was where everything important got said, and the word still carries that." },
        { id: "ru-u15l1-spalnya", type: "vocab", front: "спальня", reading: "spalnya", meaning: "a bedroom", accept: ["bedroom", "the bedroom", "a sleeping room"], example: { jp: "Спальня направо, а кухня налево.", en: "The bedroom is on the right, and the kitchen on the left." }, drill: { jp: "Спальня у нас направо", en: "Our bedroom is on the right" }, hint: "SPAL-nya, stress first, and the ль is soft. Feminine (-я). Built on спать, to sleep, which arrives in unit 20 — so a спальня is literally the sleeping room." },
        { id: "ru-u15l1-vannaya", type: "vocab", front: "ванная", reading: "vannaya", meaning: "a bathroom", accept: ["the bathroom", "a bath room", "the bath"], example: { jp: "Ванная там, а туалет здесь.", en: "The bathroom is over there, and the toilet is here." }, drill: { jp: "Ванная и туалет здесь", en: "The bathroom and the toilet are here" }, hint: "VAN-na-ya, stress first. It is really an ADJECTIVE doing a noun's work — ванная комната with комната dropped — so it takes adjective endings. Feminine. In a Russian flat the ванная and the туалет are usually two separate doors." },
        { id: "ru-u15l1-stena", type: "vocab", front: "стена", reading: "stena", meaning: "a wall", accept: ["wall", "the wall"], example: { jp: "Стена здесь очень старая, и это проблема.", en: "The wall here is very old, and that is a problem." }, drill: { jp: "Стена в нашей комнате", en: "The wall in our room" }, hint: "sti-NA, stress at the end, so the е reduces towards i. Feminine (-а). Its plural throws the stress forward — сте́ны — the same mobile stress as цена in unit 12." },
        { id: "ru-u15l1-potolok", type: "vocab", front: "потолок", reading: "potolok", meaning: "a ceiling", accept: ["the ceiling", "a roof (from inside)"], example: { jp: "Потолок здесь очень старый, и это плохо.", en: "The ceiling here is very old, and that is bad." }, drill: { jp: "Потолок в нашей спальне", en: "The ceiling in our bedroom" }, hint: "pa-ta-LOK, stress at the end, and both о before it reduce to a. Masculine. Another fleeting vowel: потолок, but на потолке — the о goes the moment an ending arrives." },
      ],
    },
    {
      id: "ru-u15l2",
      unit: 15,
      lesson: 2,
      title: "Name the furniture you sit and sleep on",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what furniture is in a room and which room it is in.",
      items: [
        { id: "ru-u15l2-stol", type: "vocab", front: "стол", reading: "stol", meaning: "a table", accept: ["table", "the table", "a desk"], example: { jp: "Стол здесь, а стул там.", en: "The table is here, and the chair is over there." }, drill: { jp: "Стол в нашей кухне", en: "The table in our kitchen" }, hint: "STOL, one syllable. Masculine. On the table is на столе, with the stress jumping to the ending — стол moves its stress the moment it changes. It is a desk too: письменный стол." },
        { id: "ru-u15l2-stul", type: "vocab", front: "стул", reading: "stul", meaning: "a chair", accept: ["chair", "the chair", "a seat"], example: { jp: "Стул здесь очень старый, и он не красивый.", en: "The chair here is very old, and it is not beautiful." }, drill: { jp: "Стул у нас на кухне", en: "Our chair is in the kitchen" }, hint: "STUL, one syllable — and it is NOT the English stool, which is табуретка. Masculine. Its plural is irregular and soft: стулья." },
        { id: "ru-u15l2-krovat", type: "vocab", front: "кровать", reading: "krovat", meaning: "a bed", accept: ["bed", "the bed", "a bedstead"], example: { jp: "Кровать в спальне, и она очень старая.", en: "The bed is in the bedroom, and it is very old." }, drill: { jp: "Кровать здесь очень старая", en: "The bed here is very old" }, hint: "kra-VAT, stress at the end. FEMININE (-ь), and unpredictably so — which is exactly why unit1.js §3 makes the gender compulsory on every -ь noun. In bed is в кровати." },
        { id: "ru-u15l2-divan", type: "vocab", front: "диван", reading: "divan", meaning: "a sofa", accept: ["a couch", "the sofa", "a settee"], example: { jp: "Диван в комнате, и там всегда тихо.", en: "The sofa is in the living room, and it is always quiet there." }, drill: { jp: "Диван у нас в комнате", en: "Our sofa is in the living room" }, hint: "di-VAN, stress at the end. Masculine. The English divan is the same word going the other way — but in Russian it is the ordinary everyday sofa, and in a small flat it is the bed as well." },
        { id: "ru-u15l2-shkaf", type: "vocab", front: "шкаф", reading: "shkaf", meaning: "a cupboard", accept: ["a wardrobe", "the cupboard", "a cabinet"], example: { jp: "Шкаф в спальне, а полка в кухне.", en: "The cupboard is in the bedroom, and the shelf in the kitchen." }, drill: { jp: "Шкаф у нас в спальне", en: "Our cupboard is in the bedroom" }, hint: "SHKAF, one syllable, opening on шк with no vowel. Masculine. In the cupboard is в шкафу, with the stressed -у that мост and дом also take. One word for a wardrobe, a bookcase and a kitchen cupboard." },
        { id: "ru-u15l2-polka", type: "vocab", front: "полка", reading: "polka", meaning: "a shelf", accept: ["shelf", "the shelf", "a rack"], example: { jp: "Полка здесь, и там уже наши книги.", en: "The shelf is here, and our books are already on it." }, drill: { jp: "Полка в нашей комнате", en: "The shelf in our room" }, hint: "POL-ka, stress first. Feminine (-а). On the shelf is на полке. It is also a bunk on a train, and верхняя полка — the top bunk — is a phrase every Russian traveller knows." },
      ],
    },
    {
      id: "ru-u15l3",
      unit: 15,
      lesson: 3,
      title: "Name the things you use every day",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where an everyday object is kept.",
      items: [
        { id: "ru-u15l3-lampa", type: "vocab", front: "лампа", reading: "lampa", meaning: "a lamp", accept: ["lamp", "the lamp", "a table lamp"], example: { jp: "Лампа на столе, а книга на полке.", en: "The lamp is on the table, and the book is on the shelf." }, drill: { jp: "Лампа у нас на столе", en: "Our lamp is on the table" }, hint: "LAM-pa, stress first. Feminine (-а). An internationalism you can read on sight — and the gloss keeps its article, because lamp on its own IS the reading and would grade itself correct (unit1.js §9)." },
        { id: "ru-u15l3-klyuch", type: "vocab", front: "ключ", reading: "klyuch", meaning: "a key", accept: ["the key", "a clue"], example: { jp: "Ключ уже здесь, и дверь уже открыта.", en: "The key is here already, and the door is open." }, drill: { jp: "Ключ у меня в сумке", en: "The key is in my bag" }, hint: "KLYUCH, one syllable, and the ю softens the л. Masculine. One word for a key, a clue (ключ к ответу) and a spring of water — and a spanner is a гаечный ключ." },
        { id: "ru-u15l3-sumka", type: "vocab", front: "сумка", reading: "sumka", meaning: "a bag", accept: ["bag", "the bag", "a handbag"], example: { jp: "Сумка на стуле, и там уже всё.", en: "The bag is on the chair, and everything is already in it." }, drill: { jp: "Сумка здесь на полке", en: "The bag is here on the shelf" }, hint: "SUM-ka, stress first. Feminine (-а). Any bag you carry — handbag, shopping bag, sports bag. A suitcase is чемодан and a rucksack рюкзак, both of which A2 can have." },
        { id: "ru-u15l3-zerkalo", type: "vocab", front: "зеркало", reading: "zerkalo", meaning: "a mirror", accept: ["the mirror", "a looking glass"], example: { jp: "Зеркало в ванной, а полотенце здесь.", en: "The mirror is in the bathroom, and the towel is here." }, drill: { jp: "Зеркало у нас в ванной", en: "Our mirror is in the bathroom" }, hint: "ZYER-ka-la, stress first, with both о reduced to a. NEUTER (-о). Its plural moves the stress right to the end — зеркала́ — which is worth hearing once so it does not catch you out." },
        { id: "ru-u15l3-polotentse", type: "vocab", front: "полотенце", reading: "polotentse", meaning: "a towel", accept: ["the towel", "a hand towel"], example: { jp: "Полотенце в ванной, и мыло тоже.", en: "The towel is in the bathroom, and so is the soap." }, drill: { jp: "Полотенце здесь в ванной", en: "The towel is here in the bathroom" }, hint: "pa-la-TYEN-tse, stress on TYEN, both leading о reduced. NEUTER (-е). Built on полотно, linen cloth, with the diminutive -це on the end: a полотенце is a little cloth." },
        { id: "ru-u15l3-mylo", type: "vocab", front: "мыло", reading: "mylo", meaning: "soap", accept: ["a soap", "the soap", "a bar of soap"], example: { jp: "Мыло здесь, а полотенце там.", en: "The soap is here, and the towel is over there." }, drill: { jp: "Мыло у нас в ванной", en: "Our soap is in the bathroom" }, hint: "MY-la, stress first, with the hard ы. NEUTER (-о). Built on мыть, to wash — so мыло is literally the washing-stuff. No plural in ordinary use." },
      ],
    },
    {
      id: "ru-u15l4",
      unit: 15,
      lesson: 4,
      title: "Move things around and keep the place in order",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what needs tidying, putting away or looking for.",
      items: [
        { id: "ru-u15l4-ubirat", type: "vocab", front: "убирать", reading: "ubirat", meaning: "to tidy up", accept: ["to clean up", "to clear away", "to put away"], example: { jp: "Мне нужно убирать комнату каждый день.", en: "I have to tidy the room every day." }, drill: { jp: "Нужно убирать нашу комнату", en: "Our room needs tidying" }, hint: "u-bi-RAT, stress at the end. Imperfective infinitive — убирать is tidying as a ROUTINE, which is the sense a beginner needs. For one finished tidy-up a Russian says убрать, and that belongs to A2." },
        { id: "ru-u15l4-klast", type: "vocab", front: "класть", reading: "klast", meaning: "to put", accept: ["to lay", "to place", "to put down"], example: { jp: "Мыло нужно класть здесь, а не там.", en: "The soap should go here, not there." }, drill: { jp: "Книгу нужно класть на полку", en: "The book should go on the shelf" }, hint: "KLAST, one syllable. Imperfective infinitive. It means to lay something DOWN flat; standing something UP is ставить. Russian chooses between them by the shape of the object, and English does not choose at all." },
        { id: "ru-u15l4-iskat", type: "vocab", front: "искать", reading: "iskat", meaning: "to look for", accept: ["to search for", "to seek", "to search"], example: { jp: "Мне нужно искать ключ, и это долго.", en: "I have to look for the key, and it takes a long time." }, drill: { jp: "Нужно искать наш ключ", en: "We need to look for our key" }, hint: "is-KAT, stress at the end. Imperfective infinitive, and it takes its object bare: искать ключ, with no Russian word for for. Its present tense changes the stem — ищу, ищет — which A1 only meets in passing." },
        { id: "ru-u15l4-poryadok", type: "vocab", front: "порядок", reading: "poryadok", meaning: "tidiness", accept: ["neatness", "good order", "a sequence"], example: { jp: "В комнате уже порядок, и это хорошо.", en: "The room is tidy now, and that is good." }, drill: { jp: "В нашей комнате порядок", en: "Our room is tidy" }, hint: "pa-RYA-dak, stress on RYA. Masculine, with a fleeting о — порядок, but в порядке. Всё в порядке is the everyday everything is fine, and it is the phrase you will hear most often." },
        { id: "ru-u15l4-musor", type: "vocab", front: "мусор", reading: "musor", meaning: "rubbish", accept: ["garbage", "the rubbish", "trash"], example: { jp: "Мусор здесь, и это очень плохо.", en: "There is rubbish here, and that is very bad." }, drill: { jp: "Мусор нужно убирать сегодня", en: "The rubbish needs clearing today" }, hint: "MU-sar, stress first. Masculine, and no plural. The bin is мусорное ведро. In slang мусор also means a policeman and is rude — worth knowing so you never use it by accident." },
        { id: "ru-u15l4-svet", type: "vocab", front: "свет", reading: "svet", meaning: "light", accept: ["the light", "daylight", "electric light"], example: { jp: "Свет здесь не работает, и это проблема.", en: "The light does not work here, and that is a problem." }, drill: { jp: "Свет в комнате не работает", en: "The light in the room does not work" }, hint: "SVYET, one syllable, and the е softens the в. Masculine. Do NOT confuse it with цвет, colour, in unit 16 — one letter apart and completely unrelated. Свет also means the world: весь свет." },
      ],
    },
  ],
};
