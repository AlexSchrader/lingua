// NO Unit 34 — Natur og vitenskap ("Nature and science") — A2
// Conventions are declared in no/unit1.js §1-§8 and bind every unit.
//
// THIS UNIT LEANS HARD TOWARD SCIENCE, AND THAT IS A DELIBERATE RETREAT. The slot
// is "Nature and science", but A1 u19 already owns the landscape and the animals
// (et fjell, en skog, ei elv, et tre, ei strand, et dyr, en fugl, en hest, ei ku),
// the crew lead's u26 is Nature and animals, and block 3's u43 already holds the
// nature observables: en blomst, et blad, en himmel, ei stjerne, is, en temperatur,
// en grad — with et hav at u45 and ei vekt at u47.
// I WIN ALL NINE OF THOSE ON LOWER SLOT AND TOOK NONE OF THEM. Curriculum CC's
// ruling is that a named thematic slot beats a coverage slot, so u34 could have
// taken the lot — but block 3's u43 is a coherent nature unit and pulling seven
// fronts out of it would have forced a re-author, which is precisely the
// whole-theme collision that cost Portuguese block 3 an entire unit. Winning a
// rule and invoking it are different decisions. The science half is unambiguously
// mine and is more than enough for 24 cards.
// `en lyd` (blk3 u49) and `et stoff` (blk3 u42) were dropped for the same reason,
// replaced by `en prosess` and `en verdi`.
//
// `ei utvikling` IS FEMININE ON PURPOSE. The crew lead first propagated a rule that
// "-ning nouns are masculine in Bokmål". The rule was wrong: utvikling, utstilling,
// forestilling, samling, feiring, løsning and endring are all f1/m1 and take either.
// The band marks them `ei` for consistency, because §1's entire argument for `ei`
// is that it makes the definite derivable — and -inga is what a learner then
// predicts.
// ⚠️ THE "MASCULINE-ONLY EXCEPTION" WAS ITSELF WRONG, AND IT TRAVELLED TO FIVE
// UNITS BEFORE ANYONE CHECKED IT. Bokmålsordboka lists BOTH `retning` and
// `setning` as "hankjønn eller hunkjønn" (ordbokene.no/nob/bm/retning,
// /setning) — retninga and setninga are correct Bokmål. There is no -ing/-ning
// exception at all: the whole class takes either gender, so the whole class is
// marked `ei` in this band. `en retning` in u23 and `en setning` in u49 were
// flipped to `ei` on that finding. What IS a real exception is -het and -else,
// which have no feminine form (there is no *muligheta, no *øvelsa) and stay `en`.
// This note has now been wrong twice in opposite directions — first "-ing nouns
// are masculine", then "retning and setning are masculine only". Both were
// generalised from one card without opening a dictionary. Check the dictionary.
//
// `en vitenskap` is built on `å vite` (A1 u12) plus -skap, the same ending as `en
// egenskap` in u31 — the hint cross-references it rather than pretending the words
// are unrelated.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT34 = {
  id: "no-u34",
  lang: "no",
  title: "Natur og vitenskap",
  order: 34,
  stage: "a2",
  lessons: [
    {
      id: "no-u34l1",
      unit: 34,
      lesson: 1,
      title: "Living things",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about living things — nature, a plant, a root, a human being, a life — and say that something grows.",
      items: [
        { id: "no-u34l1-ennatur", type: "vocab", front: "natur", reading: "natur", meaning: "nature", example: { jp: "Naturen i Norge er veldig fin.", en: "Nature in Norway is very beautiful." }, accept: ["the nature", "countryside"], drill: { jp: "Norge har fin natur", en: "Norway has beautiful nature" }, hint: "Masculine, and a mass noun — so it is taught bare, like vann and melk in A1: natur → naturen. Usually used in the definite — naturen — where English says just \"nature\". It also means someone's character: det ligger i naturen hans." },
        { id: "no-u34l1-eiplante", type: "vocab", front: "ei plante", reading: "eiplante", meaning: "plant", example: { jp: "Plantene på kjøkkenet trenger vann.", en: "The plants in the kitchen need water." }, accept: ["a plant"], drill: { jp: "Ei plante vokser i jord", en: "A plant grows in soil" }, hint: "Feminine: ei plante → planta, plural planter. You will also see en plante / planten; Bokmål allows both. Å plante is the verb, to plant." },
        { id: "no-u34l1-eirot", type: "vocab", front: "ei rot", reading: "eirot", meaning: "root", example: { jp: "Røttene går ned i jorda.", en: "The roots go down into the soil." }, accept: ["a root"], drill: { jp: "Det ligger ei rot under jorda", en: "There is a root lying under the soil" }, hint: "Feminine: ei rot → rota, and the plural changes its vowel — røtter, definite røttene, exactly like fot → føtter. Also the root of a word or of a problem." },
        { id: "no-u34l1-etmenneske", type: "vocab", front: "et menneske", reading: "etmenneske", meaning: "human being", example: { jp: "Et menneske kan lære et nytt språk.", en: "A human being can learn a new language." }, accept: ["a human", "a person", "human"], drill: { jp: "Et menneske trenger luft og vann", en: "A human being needs air and water" }, hint: "Neuter: et menneske → mennesket, plural mennesker. MEN-nes-ke. It is the neutral word for a person of any kind — en mann and ei kvinne are specific, et menneske is not." },
        { id: "no-u34l1-etliv", type: "vocab", front: "et liv", reading: "etliv", meaning: "life", example: { jp: "Han har hatt et godt liv i Bergen.", en: "He has had a good life in Bergen." }, accept: ["a life"], drill: { jp: "Et liv begynner og slutter", en: "A life begins and ends" }, hint: "Neuter: et liv → livet, and the plural takes no ending — liv. Å leve is to live. I live means \"alive\", and hele livet is \"all one's life\"." },
        { id: "no-u34l1-avokse", type: "vocab", front: "å vokse", reading: "avokse", meaning: "to grow", example: { jp: "Barna vokser når de er små.", en: "Children grow when they are small." }, accept: ["grow", "to increase", "increase"], drill: { jp: "Ei plante begynner å vokse", en: "A plant starts to grow" }, hint: "Present vokser, said VOK-ser. Of children, plants and numbers alike. A voksen is an adult — literally a grown one — which is the same word." },
      ],
    },
    {
      id: "no-u34l2",
      unit: 34,
      lesson: 2,
      title: "Earth and air",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the soil, the air, a planet and the environment, and talk about force and energy.",
      items: [
        { id: "no-u34l2-jord", type: "vocab", front: "jord", reading: "jord", meaning: "soil", example: { jp: "Det er god jord i hagen.", en: "There is good soil in the garden." }, accept: ["earth", "the earth", "ground", "the soil"], drill: { jp: "Vi finner jord i hagen", en: "We find soil in the garden" }, hint: "A mass noun, so no en/ei/et — you do not count soil. Feminine when it takes a definite: jorda. With a capital and in the definite it is the planet: Jorda." },
        { id: "no-u34l2-luft", type: "vocab", front: "luft", reading: "luft", meaning: "air", example: { jp: "Lufta på fjellet er ren og kald.", en: "The air in the mountains is clean and cold." }, accept: ["the air"], drill: { jp: "Vi trenger luft og vann", en: "We need air and water" }, hint: "A mass noun, like jord and vann. Feminine in the definite: lufta. Frisk luft — fresh air — is close to a national obsession." },
        { id: "no-u34l2-enplanet", type: "vocab", front: "en planet", reading: "enplanet", meaning: "planet", example: { jp: "Jorda er en planet, og den er ikke stor.", en: "The Earth is a planet, and it is not big." }, accept: ["a planet"], drill: { jp: "En planet er veldig gammel", en: "A planet is very old" }, hint: "Masculine: en planet → planeten, plural planeter. pla-NET, with the stress at the end — not on the first syllable as in English." },
        { id: "no-u34l2-etmiljo", type: "vocab", front: "et miljø", reading: "etmiljo", meaning: "environment", example: { jp: "Vi må tenke på miljøet når vi kjører bil.", en: "We have to think about the environment when we drive." }, accept: ["the environment", "surroundings"], drill: { jp: "Et miljø kan bli bedre", en: "An environment can get better" }, hint: "Neuter: et miljø → miljøet. mil-YUR. A French loan (milieu) spelled the Norwegian way. It is the natural environment and also a social one: et godt arbeidsmiljø." },
        { id: "no-u34l2-eikraft", type: "vocab", front: "ei kraft", reading: "eikraft", meaning: "force", example: { jp: "Vinden har stor kraft i dag.", en: "The wind has great force today." }, accept: ["power", "strength", "a force", "energy"], drill: { jp: "Ei kraft kan være sterk", en: "A force can be strong" }, hint: "Feminine: ei kraft → krafta, plural krefter — the vowel changes. You will also see en kraft / kraften. Vannkraft, hydroelectric power, is where most Norwegian electricity comes from." },
        { id: "no-u34l2-energi", type: "vocab", front: "energi", reading: "energi", meaning: "energy", example: { jp: "Vi bruker mye energi i desember.", en: "We use a lot of energy in December." }, accept: ["the energy", "power"], drill: { jp: "Energi koster mange penger nå", en: "Energy costs a lot of money now" }, hint: "Taught bare, as a mass noun — you do not usually count it. Masculine when it takes a definite: energien. e-ner-GEE, with a hard g and the stress at the end." },
      ],
    },
    {
      id: "no-u34l3",
      unit: 34,
      lesson: 3,
      title: "Science",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about science — a researcher, an experiment, a discovery, proof and a theory.",
      items: [
        { id: "no-u34l3-envitenskap", type: "vocab", front: "en vitenskap", reading: "envitenskap", meaning: "science", example: { jp: "Vitenskapen forklarer hvorfor dette skjer.", en: "Science explains why this happens." }, accept: ["a science", "the science"], drill: { jp: "En vitenskap trenger gode bevis", en: "A science needs good proof" }, hint: "Masculine: en vitenskap → vitenskapen. Built from å vite, to know (A1 unit 12), plus -skap — the same ending as en egenskap in unit 31. Literally \"knowing-ship\"." },
        { id: "no-u34l3-enforsker", type: "vocab", front: "en forsker", reading: "enforsker", meaning: "researcher", example: { jp: "En forsker jobber ofte på et museum.", en: "A researcher often works at a museum." }, accept: ["a scientist", "scholar"], drill: { jp: "En forsker leser mange bøker", en: "A researcher reads many books" }, hint: "Masculine: en forsker → forskeren, plural forskere. From å forske, to do research. Norwegian uses one word where English splits scientist and researcher." },
        { id: "no-u34l3-etforsok", type: "vocab", front: "et forsøk", reading: "etforsok", meaning: "experiment", example: { jp: "Vi gjorde et forsøk på skolen i går.", en: "We did an experiment at school yesterday." }, accept: ["an experiment", "attempt", "a try"], drill: { jp: "Et forsøk tar mange timer", en: "An experiment takes many hours" }, hint: "Neuter: et forsøk → forsøket, plural forsøk — no ending. From å forsøke, to try, which is why it is also simply \"an attempt\": et forsøk på å forklare." },
        { id: "no-u34l3-aoppdage", type: "vocab", front: "å oppdage", reading: "aoppdage", meaning: "to discover", example: { jp: "Forskeren oppdaget noe nytt i går.", en: "The researcher discovered something new yesterday." }, accept: ["discover", "to find out", "find out", "notice"], drill: { jp: "Vi begynner å oppdage et problem", en: "We are starting to discover a problem" }, hint: "Present oppdager. From opp plus dag, day — to bring something up into the daylight, which is a better picture than the English word gives you." },
        { id: "no-u34l3-etbevis", type: "vocab", front: "et bevis", reading: "etbevis", meaning: "proof", example: { jp: "Vi trenger et bevis, ikke en teori.", en: "We need proof, not a theory." }, accept: ["evidence", "a proof"], drill: { jp: "Et bevis er ikke en teori", en: "Proof is not a theory" }, hint: "Neuter: et bevis → beviset, plural bevis — no ending. From å bevise, to prove. Also the certificate you are given: et førerbevis is a driving licence." },
        { id: "no-u34l3-enteori", type: "vocab", front: "en teori", reading: "enteori", meaning: "theory", example: { jp: "Jeg har en teori, men den er ikke god.", en: "I have a theory, but it is not good." }, accept: ["a theory"], drill: { jp: "En teori trenger gode forsøk", en: "A theory needs good experiments" }, hint: "Masculine: en teori → teorien, plural teorier. te-o-REE, three syllables with the stress last. In practice is i praksis, its usual partner." },
      ],
    },
    {
      id: "no-u34l4",
      unit: 34,
      lesson: 4,
      title: "Measuring and describing",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Measure something and describe how it changes — a method, a development, a speed, a process and a value.",
      items: [
        { id: "no-u34l4-amale", type: "vocab", front: "å måle", reading: "amale", meaning: "to measure", example: { jp: "Vi måler hvor lang veien er.", en: "We measure how long the road is." }, accept: ["measure", "to gauge"], drill: { jp: "Vi begynner å måle et rom", en: "We start measuring a room" }, hint: "Present måler, said MAW-ler. Careful with the near-neighbours: å male with a short a is to paint (u35) — the two fold to the same typed answer, so either spelling is accepted; the card always shows you the front. et mål is both a goal and a measurement." },
        { id: "no-u34l4-enmetode", type: "vocab", front: "en metode", reading: "enmetode", meaning: "method", example: { jp: "Denne metoden er lett å forklare.", en: "This method is easy to explain." }, accept: ["a method", "way", "approach"], drill: { jp: "En metode kan være dårlig", en: "A method can be bad" }, hint: "Masculine: en metode → metoden, plural metoder. me-TOO-de, stress in the middle. En framgangsmåte is the everyday word for the same thing." },
        { id: "no-u34l4-eiutvikling", type: "vocab", front: "ei utvikling", reading: "eiutvikling", meaning: "development", example: { jp: "Utviklinga i byen har vært rask.", en: "The development in the city has been fast." }, accept: ["a development", "progress", "trend"], drill: { jp: "Ei utvikling tar mange år", en: "A development takes many years" }, hint: "Feminine: ei utvikling → utviklinga, plural utviklinger. You will also see en utvikling / utviklingen — Bokmål allows both for every -ing noun, and this course writes ei so the definite -a is derivable. The endings that have NO feminine at all are -het and -else: en mulighet, en øvelse." },
        { id: "no-u34l4-enfart", type: "vocab", front: "en fart", reading: "enfart", meaning: "speed", example: { jp: "Bilen har stor fart i gata.", en: "The car has great speed in the street." }, accept: ["a speed", "pace", "velocity"], drill: { jp: "Vi gjorde det i en fart", en: "We did it in a hurry" }, hint: "Masculine: en fart → farten. Usually in the definite: i farten, \"in a hurry\". Fartsgrense is a speed limit, and you will see the word on every Norwegian road sign." },
        { id: "no-u34l4-enprosess", type: "vocab", front: "en prosess", reading: "enprosess", meaning: "process", example: { jp: "Det er en lang prosess å lære et språk.", en: "It is a long process to learn a language." }, accept: ["a process"], drill: { jp: "En prosess kan bli lang", en: "A process can become long" }, hint: "Masculine: en prosess → prosessen, plural prosesser. pro-SESS, with the stress at the end and a sharp double s." },
        { id: "no-u34l4-enverdi", type: "vocab", front: "en verdi", reading: "enverdi", meaning: "value", example: { jp: "Huset har en høy verdi nå.", en: "The house has a high value now." }, accept: ["a value", "worth"], drill: { jp: "En verdi kan bli mindre", en: "A value can become smaller" }, hint: "Masculine: en verdi → verdien, plural verdier. ver-DEE, stress at the end. From verd, worth. In the plural it also means values in the moral sense: norske verdier." },
      ],
    },
  ],
};
