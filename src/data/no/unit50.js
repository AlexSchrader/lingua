// NO Unit 50 — Vanlige begreper ("Everyday concepts") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 11 (A2)"; retitled per CLAUDE.md → "No front
// language". LAST UNIT OF NORWEGIAN A2, and the last of block 3's ten.
//
// Every other unit in this block names things you can point at — food, clothes,
// weather, sport, landscape, shapes, amounts, media, speech. This one takes the
// abstract nouns that hold an A2 conversation together: the REASON something
// happened, the WAY it was done, the DIFFERENCE between two things, the CHANCE
// that it works, the CHOICE you made. They are the hardest words to teach with a
// picture and the easiest to need, and nothing in A1 or in the sibling blocks
// covers them.
//
// Conventions are unit1.js §1–§8 and bind every unit. Bokmål, not Nynorsk.
//
// ⚠ GENDER IS THE WHOLE STORY IN THIS UNIT, and this block got it wrong first
// time. Abstract nouns cluster into suffix classes, and the classes disagree:
//   -het   masculine ONLY (en mulighet, en likhet) — there is no *muligheta
//   -else  masculine ONLY (en øvelse in u44) — same rule
//   -ing / -ning  feminine IS permitted (løsninga is correct Bokmål) but `en`
//          dominates in writing, and BOTH sibling blocks standardised on `en`,
//          so this block follows them: en løsning, en endring, en utvikling,
//          en erfaring, en setning (u49).
// Under §1 the ei-marking is a PROMISE that the definite ends in -a. Marking a
// -het noun `ei` breaks that promise, which is why it is an error rather than a
// preference. This block originally wrote `ei mulighet`, `ei likhet`, `ei plikt`
// and `ei øvelse`; all are corrected. The one genuine feminine here is `ei sak`.
//
// FIRST FEMININE OF THE UNIT is `ei sak` (l1) and it carries the en-/ei-
// recognition note §1 requires.
//
// ø IS WRITTEN o IN `reading` (§3): `en forskjell` has none; `ei ulykke` none.
// This unit has no ø at all — the only other one in the block is u17's.
//
// ⚠ RESERVE LIST — screened against A1's 480, this block's 240, both sibling A2
// branches (by headword), and the fold screen. Every collision resolves against
// this block; swap, don't rebuild.
//   l1 begreper:  et vilkår · en tilstand · ei side? NO — my u48 · reserve: et trekk
//   l2 problemer: en risiko · et uhell · ei felle
//   l3 endring:   et skifte · en overgang · en tilstand
//   l4 valg:      en vurdering · et ideal · en plikt? NO — block 2 u32
//
// SCOPE: examples and drills use A1's 480 plus u41–u47 and u49 plus this unit's
// earlier cards. Nothing leans on u21–u40 or on the unauthored u48, and nothing
// uses `som`, `om`, `hele`, `hver`, `ute`, `ved`, `der`, `for`, `mot`,
// `gjennom`, `mens`, `tid`, `mat`, `folk`, `hundre` or `feil`-as-adverb.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT50 = {
  id: "no-u50",
  lang: "no",
  title: "Vanlige begreper",
  order: 50,
  stage: "a2",
  lessons: [
    // Lesson 1: the frame words — reason, way, matter, case, purpose, connection.
    {
      id: "no-u50l1",
      unit: 50,
      lesson: 1,
      title: "Reason and connection",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say why and how — måte, sak, tilfelle, hensikt, sammenheng — and name a thought.",
      items: [
        { id: "no-u50l1-enmate", type: "vocab", front: "en måte", reading: "enmate", meaning: "way", example: { jp: "Det er en måte å lage kaffe på, og alle i Norge kjenner den.", en: "There is a way to make coffee, and everyone in Norway knows it." }, drill: { jp: "Det er en måte å gjøre det på", en: "There is a way to do it" }, accept: ["a manner", "a method", "a fashion"], hint: "MAW-te. Masculine: definite måten, plural måter. ⚠ Note the frame: en måte å gjøre noe PÅ — Norwegian puts på at the END, where English says \"a way TO do something\". The på is not optional." },
        { id: "no-u50l1-eisak", type: "vocab", front: "ei sak", reading: "eisak", meaning: "matter", example: { jp: "Ei sak er viktig hvis mange snakker sammen godt.", en: "A matter is important if many people talk together properly." }, drill: { jp: "Det er ei sak vi diskuterer", en: "There is a matter we discuss" }, accept: ["a case", "an issue", "a thing", "a cause"], hint: "SAHK. Feminine: definite saka, plural saker. You will also see ei sak written en sak / saken; Bokmål allows both, and this course writes ei because ei is what tells you the definite ends in -a. A matter, a legal case, and — in the plural — one's things: pakk sakene dine." },
        { id: "no-u50l1-ettilfelle", type: "vocab", front: "et tilfelle", reading: "ettilfelle", meaning: "case", example: { jp: "Et tilfelle er ikke nok, men ti tilfeller er en sak.", en: "One case is not enough, but ten cases are a matter." }, drill: { jp: "Vi ser et tilfelle i dag", en: "We see a case today" }, accept: ["an instance", "an occurrence", "a coincidence"], hint: "TIL-fel-le. Neuter: definite tilfellet, plural tilfeller. Til plus falle, to fall to — what falls out. I tilfelle means \"in case\", and tilfeldig means random, which is the same idea wearing a different coat." },
        { id: "no-u50l1-enhensikt", type: "vocab", front: "en hensikt", reading: "enhensikt", meaning: "purpose", example: { jp: "En hensikt med en prat er at alle skal forstå.", en: "A purpose of a chat is that everyone should understand." }, drill: { jp: "Det er en hensikt med en prat", en: "There is a purpose to a chat" }, accept: ["an intention", "an aim", "a point"], hint: "HEN-sikt. Masculine: definite hensikten, plural hensikter. Med hensikt means on purpose, and the opposite is ved et uhell, by accident." },
        { id: "no-u50l1-ensammenheng", type: "vocab", front: "en sammenheng", reading: "ensammenheng", meaning: "connection", example: { jp: "Det er en sammenheng her, og alle ser den.", en: "There is a connection here, and everyone sees it." }, drill: { jp: "Vi ser en sammenheng i saka", en: "We see a connection in the matter" }, accept: ["a context", "a link", "a coherence"], hint: "SAM-men-heng. Masculine: definite sammenhengen, plural sammenhenger. Sammen plus henge, to hang together — which is exactly what a connection does, and what English says with \"coherent\"." },
        { id: "no-u50l1-entanke", type: "vocab", front: "en tanke", reading: "entanke", meaning: "a thought (an idea)", example: { jp: "En tanke kommer, men den blir borte hvis vi ikke skriver den.", en: "A thought comes, but it disappears if we do not write it down." }, drill: { jp: "Jeg har en tanke i dag", en: "I have a thought today" }, accept: ["thought", "an idea", "notion"], hint: "TANG-ke. Masculine: definite tanken, plural tanker. Built on å tenke from A1 unit 17. Tanker in the plural is what you are lost in: han er i egne tanker." },
      ],
    },
    // Lesson 2: when it goes wrong.
    {
      id: "no-u50l2",
      unit: 50,
      lesson: 2,
      title: "When something goes wrong",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about what can go wrong and what can be done — mulighet, løsning, feil, ulykke, hell, fare.",
      items: [
        { id: "no-u50l2-enmulighet", type: "vocab", front: "en mulighet", reading: "enmulighet", meaning: "possibility", example: { jp: "En mulighet er at vi kjører, men vi kan ta et tog.", en: "One possibility is that we drive, but we can take a train." }, drill: { jp: "Det er en mulighet i dag", en: "There is a possibility today" }, accept: ["an opportunity", "a chance", "an option"], hint: "MUE-li-het. Masculine: definite muligheten, plural muligheter. ⚠ Nouns in -het are masculine in Bokmål with NO feminine option — there is no muligheta — so this one is never marked ei, however many other -e nouns in this block are." },
        { id: "no-u50l2-enlosning", type: "vocab", front: "en løsning", reading: "enlosning", meaning: "solution", example: { jp: "En løsning er ikke lett å finne når alle krangler.", en: "A solution is not easy to find when everyone is quarrelling." }, drill: { jp: "Vi finner en løsning sammen", en: "We find a solution together" }, accept: ["an answer", "a fix", "a resolution"], hint: "LURS-ning, hand-folded to enlosning. Masculine: definite løsningen, plural løsninger. Built on å løse, to solve or to loosen. The -ning class CAN take a feminine in Bokmål, but en is the dominant written form and the whole A2 band uses it." },
        { id: "no-u50l2-enfeil", type: "vocab", front: "en feil", reading: "enfeil", meaning: "mistake", example: { jp: "En feil er ikke tung hvis vi innrømmer den.", en: "A mistake is not heavy if we admit it." }, drill: { jp: "Vi gjør en feil i dag", en: "We make a mistake today" }, accept: ["an error", "a fault", "a defect"], hint: "FAYL. Masculine: definite feilen, and the plural is feil, unchanged. Å ta feil is to be wrong, and å gjøre en feil is to make a mistake — Norwegian keeps the two phrasings apart." },
        { id: "no-u50l2-eiulykke", type: "vocab", front: "ei ulykke", reading: "eiulykke", meaning: "accident", example: { jp: "Ei ulykke kommer når en vei er glatt.", en: "An accident comes when a road is slippery." }, drill: { jp: "Det er ei ulykke på veien", en: "There is an accident on the road" }, accept: ["a misfortune", "a crash", "a disaster"], hint: "UE-luek-ke. Feminine: definite ulykka, plural ulykker. U- plus lykke, happiness — an un-happiness, built the way et uvær was built in unit 43. Both a traffic accident and a misfortune." },
        { id: "no-u50l2-ethell", type: "vocab", front: "et hell", reading: "ethell", meaning: "luck", example: { jp: "Et hell er at ingen blir syke, og alle er glade.", en: "One piece of luck is that nobody gets ill, and everyone is happy." }, drill: { jp: "Det er et hell at alle kommer", en: "It is lucky that everyone comes" }, accept: ["fortune", "a stroke of luck", "good luck"], hint: "HELL. Neuter: definite hellet. Heldigvis means luckily and is one of the commonest words in the language; uhell, with the u-, is a mishap. Note lykke til, not hell, is what you say to wish somebody luck." },
        { id: "no-u50l2-enfare", type: "vocab", front: "en fare", reading: "enfare", meaning: "danger", example: { jp: "En fare er stor når det er is på ei bru.", en: "A danger is great when there is ice on a bridge." }, drill: { jp: "Det er en fare i fjellet", en: "There is a danger in the mountain" }, accept: ["a risk", "a hazard", "a peril"], hint: "FAH-re. Masculine: definite faren, plural farer. ⚠ The definite faren is identical to faren, \"the father\", from A1 unit 4 — two different words, and only the sentence tells them apart. Farlig is the adjective, dangerous." },
      ],
    },
    // Lesson 3: comparison and change.
    {
      id: "no-u50l3",
      unit: 50,
      lesson: 3,
      title: "Likeness and change",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Compare and describe change — forskjell, likhet, endring, vekst, nivå, behov.",
      items: [
        { id: "no-u50l3-enforskjell", type: "vocab", front: "en forskjell", reading: "enforskjell", meaning: "difference", example: { jp: "En forskjell er lett å se hvis vi ser godt etter.", en: "A difference is easy to see if we look carefully." }, drill: { jp: "Vi ser en forskjell i dag", en: "We see a difference today" }, accept: ["a distinction", "a contrast"], hint: "for-SHELL — skj is the broad sh of skje. Masculine: definite forskjellen, plural forskjeller. Forskjellig is the adjective, different, and it is far commoner than the noun." },
        { id: "no-u50l3-enlikhet", type: "vocab", front: "en likhet", reading: "enlikhet", meaning: "similarity", example: { jp: "En likhet i to språk gjør det lett å lære.", en: "A similarity in two languages makes it easy to learn." }, drill: { jp: "Vi ser en likhet i dag", en: "We see a similarity today" }, accept: ["a resemblance", "equality", "a likeness"], hint: "LEEK-het. Masculine — -het again, no feminine option. Definite likheten, plural likheter. Built on lik, alike. It also means equality, which is why likestilling is the Norwegian word for gender equality." },
        { id: "no-u50l3-enendring", type: "vocab", front: "en endring", reading: "enendring", meaning: "change", example: { jp: "En endring i været kommer ofte på et fjell.", en: "A change in the weather comes often on a mountain." }, drill: { jp: "Vi ser en endring i saka", en: "We see a change in the matter" }, accept: ["an alteration", "a shift", "a modification"], hint: "EN-dring. Masculine: definite endringen, plural endringer. Built on å endre, to change something. Where et skifte is a swap of one thing for another, en endring is the same thing becoming different." },
        { id: "no-u50l3-envekst", type: "vocab", front: "en vekst", reading: "envekst", meaning: "growth", example: { jp: "En vekst i en by er stor når mange flytter til den.", en: "Growth in a town is big when many people move to it." }, drill: { jp: "Det er en vekst i byen", en: "There is growth in the town" }, accept: ["an increase", "an expansion"], hint: "VEKST. Masculine: definite veksten, plural vekster. Built on å vokse, to grow. ⚠ `en utvikling` would have been the natural card here, but block 1 teaches å utvikle at u24 and utvikle/utvikling is one word family — a LEXEME collision, which no exact-string screen on either side would have shown." },
        { id: "no-u50l3-etniva", type: "vocab", front: "et nivå", reading: "etniva", meaning: "level", example: { jp: "Et nivå i et språk blir høyere når vi leser mye.", en: "A level in a language gets higher when we read a lot." }, drill: { jp: "Et nivå kan bli høyere", en: "A level can get higher" }, accept: ["a standard", "a stage", "a grade"], hint: "ni-VAW, stress at the end, and the å folds to a on its own: etniva. Neuter: definite nivået, plural nivåer. A level of skill, of water, or of sound — A1 and A2 are nivåer, which is the sense you meet first. ⚠ `en verdi` was the card here until block 2 claimed it at u34." },
        { id: "no-u50l3-etbehov", type: "vocab", front: "et behov", reading: "etbehov", meaning: "need", example: { jp: "Et behov er større enn et ønske, og alle kjenner det.", en: "A need is greater than a wish, and everyone knows it." }, drill: { jp: "Det er et behov i bygda", en: "There is a need in the village" }, accept: ["a requirement", "a demand"], hint: "be-HOOV. Neuter: definite behovet, plural behov, unchanged. Å ha behov for noe is to need something — a heavier, more formal way of saying å trenge from A1 unit 13." },
      ],
    },
    // Lesson 4: choice and responsibility. The last lesson of Norwegian A2.
    {
      id: "no-u50l4",
      unit: 50,
      lesson: 4,
      title: "Choices and responsibility",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about choices and duties — valg, erfaring, inntrykk, skikk, ansvar, holdning.",
      items: [
        { id: "no-u50l4-etvalg", type: "vocab", front: "et valg", reading: "etvalg", meaning: "choice", example: { jp: "Et valg er tungt når alle muligheter er gode.", en: "A choice is hard when all the possibilities are good." }, drill: { jp: "Vi tar et valg i dag", en: "We make a choice today" }, accept: ["an option", "an election", "a selection"], hint: "VALG. Neuter: definite valget, plural valg, unchanged. Built on å velge from A1 unit 15. It is also an election — et stortingsvalg — and å ta et valg is to make a choice, where Norwegian TAKES one." },
        { id: "no-u50l4-enerfaring", type: "vocab", front: "en erfaring", reading: "enerfaring", meaning: "experience", example: { jp: "En erfaring gir mer enn ei bok, sier bestefar.", en: "An experience gives more than a book, grandfather says." }, drill: { jp: "Vi får en erfaring i dag", en: "We get an experience today" }, accept: ["a piece of experience", "practice"], hint: "ær-FAH-ring. Masculine: definite erfaringen, plural erfaringer. The -ing class again: feminine is permitted in Bokmål, but en is the dominant form and the band is consistent on it. Å erfare is the verb." },
        { id: "no-u50l4-etinntrykk", type: "vocab", front: "et inntrykk", reading: "etinntrykk", meaning: "impression", example: { jp: "Et inntrykk av en by blir sterkt hvis været er fint.", en: "An impression of a town gets strong if the weather is nice." }, drill: { jp: "Vi får et inntrykk av byen", en: "We get an impression of the town" }, accept: ["a feeling", "a sense"], hint: "INN-trykk. Neuter: definite inntrykket, plural inntrykk, unchanged. Inn plus trykk, a pressing-in — the mirror image of et uttrykk in unit 49, which presses out." },
        { id: "no-u50l4-enskikk", type: "vocab", front: "en skikk", reading: "enskikk", meaning: "custom", example: { jp: "En skikk i Norge er at alle tar av seg skoene inne.", en: "A custom in Norway is that everyone takes off their shoes indoors." }, drill: { jp: "Det er en skikk i Norge", en: "There is a custom in Norway" }, accept: ["a tradition", "a practice", "a convention"], hint: "SHIKK — sk before i is the broad sh. Masculine: definite skikken, plural skikker. And the example is not a made-up sentence: taking your shoes off inside a Norwegian home is not optional." },
        { id: "no-u50l4-etansvar", type: "vocab", front: "et ansvar", reading: "etansvar", meaning: "responsibility", example: { jp: "Et ansvar er tungt, men alle må ta et ansvar.", en: "A responsibility is heavy, but everyone has to take responsibility." }, drill: { jp: "Vi tar et ansvar sammen", en: "We take responsibility together" }, accept: ["a duty", "a charge", "accountability"], hint: "AN-svahr. Neuter: definite ansvaret, and the plural is ansvar, unchanged. An- plus svar, an answer — a responsibility is what you must answer for, which is the same metaphor English built \"responsible\" on." },
        { id: "no-u50l4-enholdning", type: "vocab", front: "en holdning", reading: "enholdning", meaning: "attitude", example: { jp: "En holdning blir ofte en vane, og den er tung.", en: "An attitude often becomes a habit, and it is heavy." }, drill: { jp: "Vi ser en holdning i saka", en: "We see an attitude in the matter" }, accept: ["a stance", "an outlook", "a posture"], hint: "HOL-ning. Masculine: definite holdningen, plural holdninger. Built on å holde, to hold — the position you hold on a question, and also literally how you hold your body. Marked `en` to match the five other -ing and -het nouns in this unit; Bokmål permits ei holdning too. ⚠ Third card in this unit surrendered to block 2 — et krav to u32, et forsøk to u34. This is the last card of Norwegian A2." },
      ],
    },
  ],
};
