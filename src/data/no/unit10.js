// NO Unit 10 — Store og små ting ("Big and small things") — A1
// Conventions are declared in no/unit1.js and bind every unit.
//
// THE DESCRIBING UNIT. Eighteen adjectives and adverbs, plus the six quantity
// words in lesson 1 that let the learner say there is something, someone, nobody
// or nothing to describe in the first place.
//
// FUNCTION WORDS IN LESSON 1, ON PURPOSE. RUNBOOK §4 and unit7.js both make the
// point: `check-lang-scope.mjs` resolves example scope per UNIT, never per lesson,
// so a word used in l1 and taught in l3 is invisible to every gate and has to be
// caught by eye. noe / noen / ingen / ingenting / nok sit in lesson 1 because the
// later lessons want them, not the other way round.
//
// `enn` IS THE COMPARISON CARD, AND THE COMPARATIVE ITSELF IS NOT. Norwegian
// compares with a suffix — stor → større, lang → lengre — not with a separate word,
// so there is no "more" card to teach. `enn` is what an A1 learner is actually
// missing, and the forms it introduces (større enn) appear in the example and hint
// as inflections of a taught adjective, per unit1.js §6. mer / mest / ganske / helt
// are NOT taught in this block — flagged for block 3's coverage units.
//
// `svak` was dropped for space and is glossed inside the `sterk` hint instead.
//
// NEUTER -t STILL BELONGS TO u14. Every example here puts its adjective on a
// masculine or feminine subject so nothing asks the learner to derive a -t; the
// forms are named in hints only. See unit1.js §8(b).
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT10 = {
  id: "no-u10",
  lang: "no",
  title: "Store og små ting",
  order: 10,
  stage: "a1",
  lessons: [
    // Lesson 1: how much and how many — the quantity words the rest of the unit needs.
    {
      id: "no-u10l1",
      unit: 10,
      lesson: 1,
      title: "Something, someone, nothing",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say that you have something, that someone is here, or that there is nobody and nothing at all.",
      items: [
        { id: "no-u10l1-enting", type: "vocab", front: "en ting", reading: "enting", meaning: "thing", example: { jp: "Jeg kjøper en ting i butikken.", en: "I am buying one thing in the shop." }, accept: ["a thing", "object", "item"], hint: "Masculine: en ting → tingen. The plural is irregular and simply does not change — mange ting, many things, never \"tinger\"." },
        { id: "no-u10l1-noe", type: "vocab", front: "noe", reading: "noe", meaning: "something", example: { jp: "Har du noe å drikke?", en: "Do you have something to drink?" }, accept: ["anything", "some"], hint: "NO-e. Used for stuff you cannot count — noe vann, noe mat. In a question or after ikke it becomes \"anything\": Jeg har ikke noe." },
        { id: "no-u10l1-noen", type: "vocab", front: "noen", reading: "noen", meaning: "someone", example: { jp: "Er det noen her?", en: "Is anyone here?" }, accept: ["somebody", "some", "any", "anyone"], hint: "NO-en. It carries three English words at once: \"someone\" for a person, and \"some\"/\"any\" in front of a countable plural — noen venner, some friends. noe is for stuff; noen is for people and for things you can count." },
        { id: "no-u10l1-ingen", type: "vocab", front: "ingen", reading: "ingen", meaning: "nobody", example: { jp: "Ingen kommer i kveld.", en: "Nobody is coming tonight." }, accept: ["no one", "noone", "no-one", "none", "no"], hint: "The negative twin of noen: ingen venner, no friends. In speech Norwegian usually prefers ikke noen inside a sentence — Jeg har ikke noen penger — and keeps ingen for the subject, where it is the natural choice." },
        { id: "no-u10l1-ingenting", type: "vocab", front: "ingenting", reading: "ingenting", meaning: "nothing", example: { jp: "Jeg forstår ingenting.", en: "I understand nothing." }, accept: ["not anything", "none"], hint: "Literally ingen + ting, \"no thing\", written as one word. The everyday alternative is ikke noe: Jeg forstår ikke noe." },
        { id: "no-u10l1-nok", type: "vocab", front: "nok", reading: "nok", meaning: "enough", example: { jp: "I dag har vi ikke nok penger.", en: "Today we do not have enough money." }, accept: ["sufficient", "sufficiently"], hint: "NOK. It goes after an adjective — stor nok, big enough — but in front of a noun: nok penger. Note the sentence: i dag opens, so har comes second and vi follows, with ikke behind the verb." },
      ],
    },
    // Lesson 2: size and shape.
    {
      id: "no-u10l2",
      unit: 10,
      lesson: 2,
      title: "Big and small",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe the size of something — big or small, long or short, high or low.",
      items: [
        { id: "no-u10l2-stor", type: "vocab", front: "stor", reading: "stor", meaning: "big", example: { jp: "Oslo er en stor by.", en: "Oslo is a big city." }, accept: ["large", "great", "tall"], hint: "STOOR. Neuter stort, plural store. The comparative is større, \"bigger\", and the superlative størst." },
        { id: "no-u10l2-liten", type: "vocab", front: "liten", reading: "liten", meaning: "small", example: { jp: "Erling har en liten hund.", en: "Erling has a small dog." }, accept: ["little", "a little", "tiny"], hint: "The most irregular adjective in the language, and worth meeting early: en liten hund, ei lita skjorte, et lite hus, små hunder. Four shapes for one word — no other Norwegian adjective does this." },
        { id: "no-u10l2-lang", type: "vocab", front: "lang", reading: "lang", meaning: "long", example: { jp: "Gata er lang.", en: "The street is long." }, accept: ["lengthy", "tall"], hint: "The ng of \"sing\", with no hard g on the end: LANG. Neuter langt; the comparative is lengre, which changes its vowel." },
        { id: "no-u10l2-kort", type: "vocab", front: "kort", reading: "kort", meaning: "short", example: { jp: "Sommeren i Norge er kort.", en: "The summer in Norway is short." }, accept: ["brief"], hint: "It already ends in -t, so the neuter is spelled the same: et kort år. It is about length and duration, never about height — a short person is liten." },
        { id: "no-u10l2-hoy", type: "vocab", front: "høy", reading: "hoy", meaning: "tall", example: { jp: "Kirka er høy.", en: "The church is tall." }, accept: ["high", "loud"], hint: "HOY. Do not mix it up with høyre, \"right\" — two different words that happen to start alike. It covers height and volume both: ikke snakk så høyt, do not talk so loudly." },
        { id: "no-u10l2-lav", type: "vocab", front: "lav", reading: "lav", meaning: "low", example: { jp: "I desember er sola lav.", en: "In December the sun is low." }, accept: ["short", "quiet"], hint: "LAAV. The opposite of høy in both of its senses — a low building, and a quiet voice. I desember opens the sentence, so er comes second and sola follows it." },
      ],
    },
    // Lesson 3: comparison, weight and speed.
    {
      id: "no-u10l3",
      unit: 10,
      lesson: 3,
      title: "Heavy and light, fast and slow",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Compare two things with enn, and say whether something is heavy, light, strong, fast or slow.",
      items: [
        { id: "no-u10l3-enn", type: "vocab", front: "enn", reading: "enn", meaning: "than", example: { jp: "Oslo er større enn Bergen.", en: "Oslo is bigger than Bergen." }, accept: [], hint: "The word that finishes a comparison. Norwegian does not say \"more big\" — it adds -ere or -re to the adjective itself (stor → større, lang → lengre), and enn then introduces what you are comparing it with." },
        { id: "no-u10l3-tung", type: "vocab", front: "tung", reading: "tung", meaning: "heavy", example: { jp: "Skåla er tung.", en: "The bowl is heavy." }, accept: ["hard", "difficult"], hint: "The ng of \"sing\", and the tight u of gul rather than an English \"oo\". It also means hard going, about work or about a day: en tung dag. Note skåla — ei skål takes -a in the definite." },
        { id: "no-u10l3-lett", type: "vocab", front: "lett", reading: "lett", meaning: "easy", example: { jp: "Norsk er ikke lett.", en: "Norwegian is not easy." }, accept: ["light", "simple", "easy-going"], hint: "Two meanings that are really one idea: light to carry, and easy to do. Double t keeps the vowel short: LETT. It is the opposite of tung in both senses." },
        { id: "no-u10l3-rask", type: "vocab", front: "rask", reading: "rask", meaning: "fast", example: { jp: "Bussen er rask.", en: "The bus is fast." }, accept: ["quick", "rapid", "swift"], hint: "RASK. For the adverb Norwegians usually reach for fort instead — han går fort, he walks fast — so you will hear fort far more often than raskt." },
        { id: "no-u10l3-sakte", type: "vocab", front: "sakte", reading: "sakte", meaning: "slowly", example: { jp: "Erling snakker sakte.", en: "Erling speaks slowly." }, accept: ["slow"], hint: "An adverb, so it never changes shape. Snakk sakte! is the single most useful sentence you can say to a Norwegian. The matching adjective is langsom." },
        { id: "no-u10l3-sterk", type: "vocab", front: "sterk", reading: "sterk", meaning: "strong", example: { jp: "Kaffen er sterk.", en: "The coffee is strong." }, accept: ["powerful", "hot", "spicy"], hint: "STERK. Of people, of coffee, and of taste — sterk mat is spicy food. Its opposite is svak, weak." },
      ],
    },
    // Lesson 4: quality — nice, ugly, bad, new, clean, dirty.
    {
      id: "no-u10l4",
      unit: 10,
      lesson: 4,
      title: "Nice and ugly, new and clean",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Judge a thing: say it is nice or ugly, new, clean or dirty, or simply bad.",
      items: [
        { id: "no-u10l4-fin", type: "vocab", front: "fin", reading: "fin", meaning: "nice (of a thing)", example: { jp: "Det er en fin dag i dag.", en: "It is a nice day today." }, accept: ["nice", "fine", "lovely", "smart", "pretty"], hint: "FEEN. The everyday compliment for a thing — en fin dag, ei fin skjorte. For a person you reach for hyggelig instead." },
        { id: "no-u10l4-stygg", type: "vocab", front: "stygg", reading: "stygg", meaning: "ugly", example: { jp: "Skjorta er stygg.", en: "The shirt is ugly." }, accept: ["nasty", "bad", "horrible"], hint: "STUEG, with the tight y of lys and a hard double g. It lands harder than English \"ugly\": stygt vær is genuinely foul weather, and to say something stygt is to say something cruel." },
        { id: "no-u10l4-darlig", type: "vocab", front: "dårlig", reading: "darlig", meaning: "bad", example: { jp: "Været er dårlig i Bergen.", en: "The weather is bad in Bergen." }, accept: ["poor", "badly", "ill"], hint: "DAWR-li — the -ig ending has a silent g, exactly like hyggelig and billig. It is the everyday opposite of bra and god, and about a person it means unwell." },
        { id: "no-u10l4-ny", type: "vocab", front: "ny", reading: "ny", meaning: "new", example: { jp: "Erling har en ny bil.", en: "Erling has a new car." }, accept: ["brand new", "recent"], hint: "NUE — the same tight y as lys. Neuter nytt with a double t, plural nye. Godt nyttår! is Happy New Year." },
        { id: "no-u10l4-ren", type: "vocab", front: "ren", reading: "ren", meaning: "clean", example: { jp: "Skjorta er ren nå.", en: "The shirt is clean now." }, accept: ["pure", "clear"], hint: "REHN. It also means pure — ren luft, clean air; rent vann, clean water. Neuter rent." },
        { id: "no-u10l4-skitten", type: "vocab", front: "skitten", reading: "skitten", meaning: "dirty", example: { jp: "Bilen er skitten.", en: "The car is dirty." }, accept: ["filthy", "unclean"], hint: "sk in front of an i is the broad hush again, as in skje: SHIT-ten. The opposite of ren, and the standing condition of every Norwegian car after a winter of salted roads." },
      ],
    },
  ],
};
