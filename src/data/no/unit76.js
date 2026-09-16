// NO Unit 76 — Preposisjoner og plassering (slot: coverage-b1-3) — B1
// COVERAGE UNIT, block 3. The slot was scaffolded "Vocabulary 3 (B1)", which is
// the scaffold admitting it does not know what is missing. Retitled per CLAUDE.md
// ("No front language") to what it actually covers: THE PREPOSITIONS NORWEGIAN
// NEVER TAUGHT.
//
// Why this unit exists, measured not guessed. The corpus at u1-u50 teaches
// exactly 14 prepositions — i, på, til, fra, med, av, etter, før, over, under,
// om, innen, rundt, siden — and stops. `bak`, `foran`, `mellom`, `ved`, `hos`,
// `mot`, `gjennom`, `uten`, `langs`, `blant`, `utenfor`, `innenfor`, `forbi`,
// `unntatt` and `ifølge` are taught NOWHERE in 1215 words. `mellom` is used in
// an example (no-u50l3-enlikhet) it is never taught for, and `hos` is used in a
// LESSON TITLE (u16l4 "Hjemme hos folk") whose two content words are both
// untaught. A closed class with a third of it missing is a structural hole, not
// a vocabulary preference, so it gets the first coverage slot.
//
// Lesson 2 is the other half of the same hole. u13l3 teaches the MOTION forms
// ut, inn, opp, ned, bort, tilbake and stops; Norwegian pairs every one of them
// with a STATIC form (ut/ute, inn/inne, opp/oppe, hjem/hjemme, bort/borte) and
// the learner who has only the motion half says "jeg er ut" for "I am outside".
// Both halves are one system and the second half was missing entirely.
//
// Conventions per no/unit1.js: verbs å + infinitive, nouns with en/ei/et, ø->o
// and æ->ae folds written by hand, a drill on every item. Every front screened
// against the whole 50-unit corpus for exact, stem and reading-fold collisions.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT76 = {
  id: "no-u76",
  lang: "no",
  title: "Preposisjoner og plassering",
  order: 76,
  stage: "b1",
  lessons: [
    {
      id: "no-u76l1",
      unit: 76,
      lesson: 1,
      title: "Hvor noe står",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say where a thing or a person is in relation to something else — bak, foran, mellom, ved, hos, utenfor.",
      items: [
        { id: "no-u76l1-bak", type: "vocab", front: "bak", reading: "bak", meaning: "behind", example: { jp: "Bilen står bak huset, så du ser den ikke fra veien.", en: "The car is behind the house, so you can't see it from the road." }, accept: ["at the back of", "in back of"], drill: { jp: "Bilen står bak huset", en: "The car is behind the house" }, hint: "Preposisjon, motsatt av foran. Also an adverb: han kom bak, he came from behind." },
        { id: "no-u76l1-foran", type: "vocab", front: "foran", reading: "foran", meaning: "in front of", example: { jp: "Vi ser hverandre foran skolen klokka åtte i morgen.", en: "We'll see each other in front of the school at eight tomorrow." }, accept: ["ahead of", "before"], drill: { jp: "Han venter foran døra", en: "He is waiting in front of the door" }, hint: "for + an. Space, not time: 'before eight o'clock' is før, never foran." },
        { id: "no-u76l1-mellom", type: "vocab", front: "mellom", reading: "mellom", meaning: "between", example: { jp: "Butikken ligger mellom banken og skolen i samme gate.", en: "The shop is between the bank and the school in the same street." }, accept: ["in between", "among (of two)"], drill: { jp: "Butikken ligger mellom banken og skolen", en: "The shop is between the bank and the school" }, hint: "Two things: mellom. More than two: blant (l4). Also of time — mellom to og tre." },
        { id: "no-u76l1-ved", type: "vocab", front: "ved", reading: "ved", meaning: "by (next to)", example: { jp: "Han sitter ved vinduet og leser avisa hver dag.", en: "He sits by the window and reads the paper every day." }, accept: ["at", "beside", "next to"], drill: { jp: "Vi sitter ved bordet nå", en: "We are sitting at the table now" }, hint: "Close to, touching or nearly: ved døra, ved sjøen. Ikke forveksle med ei ved, firewood." },
        { id: "no-u76l1-hos", type: "vocab", front: "hos", reading: "hos", meaning: "at (someone's place)", example: { jp: "I kveld spiser vi middag hos broren min i Bergen.", en: "Tonight we're having dinner at my brother's place in Bergen." }, accept: ["with", "at the home of"], drill: { jp: "Jeg bor hos broren min", en: "I live at my brother's place" }, hint: "Only with people: hos legen, hos Kari. English has no single word for it — 'at X's'." },
        { id: "no-u76l1-utenfor", type: "vocab", front: "utenfor", reading: "utenfor", meaning: "outside (of)", example: { jp: "Bussen stopper rett utenfor huset her hver dag.", en: "The bus stops right outside the house here every day." }, accept: ["out of", "beyond"], drill: { jp: "Barna er utenfor huset", en: "The children are outside the house" }, hint: "ut + en + for. Its opposite innenfor is in l3. Also figurative: utenfor arbeidslivet." },
      ],
    },
    {
      id: "no-u76l2",
      unit: 76,
      lesson: 2,
      title: "Ute eller inne — hvor du er",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say where you ARE, not where you are going — the static half of ut/ute, inn/inne, hjem/hjemme.",
      items: [
        { id: "no-u76l2-hjemme", type: "vocab", front: "hjemme", reading: "hjemme", meaning: "at home", example: { jp: "Jeg er hjemme hele dagen i dag, så bare ring.", en: "I'm at home all day today, so just call." }, accept: ["home", "in"], drill: { jp: "Jeg blir hjemme i dag", en: "I am staying at home today" }, hint: "Hvor du ER. Hvor du DRAR er hjem: jeg drar hjem, og så er jeg hjemme." },
        { id: "no-u76l2-ute", type: "vocab", front: "ute", reading: "ute", meaning: "outside (being)", example: { jp: "Barna har vært ute siden tidlig i dag.", en: "The children have been outside since early today." }, accept: ["out", "outdoors"], drill: { jp: "Barna er ute nå", en: "The children are outside now" }, hint: "Ute = where you are; ut (u13) = where you go. Jeg går ut, og så er jeg ute." },
        { id: "no-u76l2-inne", type: "vocab", front: "inne", reading: "inne", meaning: "inside (being)", example: { jp: "Det er varmt inne, men ganske kaldt ute i dag.", en: "It's warm inside, but quite cold outside today." }, accept: ["in", "indoors"], drill: { jp: "Vi sitter inne og leser", en: "We are sitting inside reading" }, hint: "Same pair as ute: inn (u13) is the movement, inne is the place." },
        { id: "no-u76l2-oppe", type: "vocab", front: "oppe", reading: "oppe", meaning: "up (being up)", example: { jp: "Hun er allerede oppe og lager kaffe til oss.", en: "She's already up and making coffee for us." }, accept: ["upstairs", "awake"], drill: { jp: "Jeg er oppe tidlig", en: "I am up early" }, hint: "Opp (u13) er bevegelsen, oppe er stedet. Also 'out of bed': er du oppe?" },
        { id: "no-u76l2-nede", type: "vocab", front: "nede", reading: "nede", meaning: "down (being down)", example: { jp: "Vaskemaskinen står nede i kjelleren ved siden av døra.", en: "The washing machine is downstairs in the basement next to the door." }, accept: ["downstairs", "below"], drill: { jp: "Bilen står nede i kjelleren", en: "The car is down in the basement" }, hint: "Ned (u13) er bevegelsen, nede er stedet. Også om humør: å være nede, to feel low." },
        { id: "no-u76l2-borte", type: "vocab", front: "borte", reading: "borte", meaning: "away (gone)", example: { jp: "Sjefen er borte hele uka, så vi må spørre noen andre.", en: "The boss is away all week, so we have to ask somebody else." }, accept: ["gone", "absent", "missing"], drill: { jp: "Sjefen er borte denne uka", en: "The boss is away this week" }, hint: "Bort (u13) er bevegelsen, borte er tilstanden — og også 'lost': nøkkelen er borte." },
      ],
    },
    {
      id: "no-u76l3",
      unit: 76,
      lesson: 3,
      title: "Vei og retning",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a route — towards, through, past, along, within, upwards.",
      items: [
        { id: "no-u76l3-mot", type: "vocab", front: "mot", reading: "mot", meaning: "towards", example: { jp: "Vi gikk mot byen da det begynte å regne.", en: "We walked towards town when it started to rain." }, accept: ["toward", "against"], drill: { jp: "Vi går mot byen nå", en: "We are walking towards town now" }, hint: "Retning: mot byen. Også 'against': to mot en. Et mot (neuter noun) betyr courage." },
        { id: "no-u76l3-gjennom", type: "vocab", front: "gjennom", reading: "gjennom", meaning: "through", example: { jp: "Vi kjørte gjennom byen på veien hjem i går.", en: "We drove through the town on the way home yesterday." }, accept: ["throughout", "by way of"], drill: { jp: "Vi kjørte gjennom hele byen", en: "We drove through the whole town" }, hint: "Rom og tid: gjennom døra, gjennom hele året. Uttales med tung g." },
        { id: "no-u76l3-forbi", type: "vocab", front: "forbi", reading: "forbi", meaning: "past (by)", example: { jp: "Bussen kjørte forbi uten å stoppe, og da måtte vi gå.", en: "The bus drove past without stopping, and then we had to walk." }, accept: ["by", "over (finished)"], drill: { jp: "Bussen kjørte forbi butikken", en: "The bus drove past the shop" }, hint: "for + bi. Også om tid som er over: sommeren er forbi." },
        { id: "no-u76l3-langs", type: "vocab", front: "langs", reading: "langs", meaning: "along", example: { jp: "Vi gikk langs vannet helt til det ble mørkt.", en: "We walked along the water until it got dark." }, accept: ["alongside", "down (a road)"], drill: { jp: "Vi går langs veien", en: "We walk along the road" }, hint: "Fra lang. Langs veien, langs sjøen — alltid noe langt du følger." },
        { id: "no-u76l3-innenfor", type: "vocab", front: "innenfor", reading: "innenfor", meaning: "inside (of)", example: { jp: "Alt som ligger innenfor byen er ganske dyrt nå.", en: "Everything that lies inside the city is quite expensive now." }, accept: ["within"], drill: { jp: "Butikken ligger innenfor byen", en: "The shop is inside the town" }, hint: "Motsatt av utenfor (l1). Også om grenser i tid: innenfor en uke." },
        { id: "no-u76l3-oppover", type: "vocab", front: "oppover", reading: "oppover", meaning: "upwards", example: { jp: "Veien går oppover helt til hytta ligger rett foran deg.", en: "The road goes upwards all the way until the cabin is right in front of you." }, accept: ["up", "uphill"], drill: { jp: "Vi går oppover mot hytta", en: "We walk uphill towards the cabin" }, hint: "opp + over. Motstykket nedover betyr downhill. Framover (u45) er den samme formen." },
      ],
    },
    {
      id: "no-u76l4",
      unit: 76,
      lesson: 4,
      title: "Uten, unntatt og ifølge",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Leave something out, make an exception, and say where information comes from.",
      items: [
        { id: "no-u76l4-uten", type: "vocab", front: "uten", reading: "uten", meaning: "without", example: { jp: "Jeg drikker aldri kaffe uten melk hjemme.", en: "I never drink coffee without milk at home." }, accept: ["lacking"], drill: { jp: "Jeg drar uten deg", en: "I am leaving without you" }, hint: "Uten + substantiv, uten å + infinitiv: han gikk uten å si noe." },
        { id: "no-u76l4-unntatt", type: "vocab", front: "unntatt", reading: "unntatt", meaning: "except", example: { jp: "Butikken er åpen hver dag unntatt søndag.", en: "The shop is open every day except Sunday." }, accept: ["apart from", "but"], drill: { jp: "Alle kom unntatt Erling", en: "Everyone came except Erling" }, hint: "Fra å unnta. Et unntak er an exception — the noun behind the word." },
        { id: "no-u76l4-utenom", type: "vocab", front: "utenom", reading: "utenom", meaning: "besides (apart from)", example: { jp: "Alt gikk fint utenom været, som var helt grått hele helga.", en: "Everything went fine apart from the weather, which was completely grey all weekend." }, accept: ["apart from", "except", "outside of"], drill: { jp: "Alt var bra utenom været", en: "Everything was good apart from the weather" }, hint: "ut + en + om. Mykere enn unntatt og vanligst i tale. Også 'around': å gå utenom." },
        { id: "no-u76l4-ifolge", type: "vocab", front: "ifølge", reading: "ifolge", meaning: "according to", example: { jp: "Ifølge avisa blir det mye kaldere til helga.", en: "According to the paper it's going to get much colder by the weekend." }, accept: ["as stated by", "per"], drill: { jp: "Ifølge Erling er alt klart", en: "According to Erling everything is ready" }, hint: "i + følge, fra å følge. Skrives i ett ord. Brukes om kilder: ifølge politiet." },
        { id: "no-u76l4-blant", type: "vocab", front: "blant", reading: "blant", meaning: "among", example: { jp: "Han er den beste blant alle elevene på skolen.", en: "He's the best among all the pupils at the school." }, accept: ["amongst", "amid"], drill: { jp: "Hun er blant de beste", en: "She is among the best" }, hint: "Flere enn to: blant. Nøyaktig to: mellom (l1). Blant annet = among other things." },
        { id: "no-u76l4-itilleggtil", type: "vocab", front: "i tillegg til", reading: "itilleggtil", meaning: "in addition to", example: { jp: "I tillegg til brød kjøpte jeg melk og et eple.", en: "In addition to bread I bought milk and an apple." }, accept: ["as well as", "on top of"], drill: { jp: "I tillegg til dette kommer skatten", en: "In addition to this comes the tax" }, hint: "Et tillegg er an addition. Alene betyr i tillegg 'as well': jeg kom i tillegg." },
      ],
    },
  ],
};
