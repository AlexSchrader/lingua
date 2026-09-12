// NO Unit 31 — Personlighet og egenskaper ("Personality and character") — A2
// First unit of A2 block 2. Conventions are declared in no/unit1.js §1-§8 and bind
// every unit: indefinite noun fronts with en/ei/et, feminine marked ei, verbs
// headworded å + infinitive, ø written o in `reading`, example.jp holds the
// Norwegian. What changes at A2 is that the EXAMPLE may take a subordinate clause;
// the DRILL does not grow, because its job is to be tokenizable, not to teach.
//
// THE LINE THIS UNIT HOLDS: TRAITS, NOT FEELINGS. A1 u17 owns the emotions (glad,
// trist, sint, redd, å le, å smile, å håpe, å mene) and A2 u21-u22 own routine and
// mood (en følelse, nervøs, spent, stolt, rolig, ensom, ei stemning, et forhold).
// Everything here is a STABLE DISPOSITION instead — what someone is like, not how
// they are today. That is what keeps a personality unit from being a second
// feelings unit, and it is why `rolig`, `sikker` and `usikker` are absent: they are
// u22's, and lower slot wins.
//
// `snill` IS NEW, THOUGH IT LOOKS OLD. A1 u2 teaches `vær så snill` as a frozen
// formula under unit1.js §7, and that formula froze `snill` WITHOUT ever teaching
// it as a word — the same shape as `morgen` inside `god morgen`. So this is a gap
// being closed, not a re-teach; the hint names the formula so the learner connects
// them rather than meeting the word twice.
//
// TWO COMPOUNDS CARRY UNTAUGHT PIECES, and that is fine: `omtenksom` contains `om`
// and `nysgjerrig` contains `ny` + `gjerrig`. A compound is a distinct lexeme, not a
// use of its parts — A1 already ships `et sykehus` (hus u4) and `en bestefar` (far
// u4). The `nysgjerrig` hint cross-references `gjerrig` in lesson 3 on purpose.
//
// NOT AVAILABLE TO THIS BAND YET: `som`, `for` and `der` are claimed by the crew
// lead at u29 and had not landed when this was written, so no example here uses a
// relative clause. Subordination is carried by at / fordi / hvis / men / når, all A1.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT31 = {
  id: "no-u31",
  lang: "no",
  title: "Personlighet og egenskaper",
  order: 31,
  stage: "a2",
  lessons: [
    {
      id: "no-u31l1",
      unit: 31,
      lesson: 1,
      title: "Good qualities",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe what someone is like as a person — kind, easy-going, polite, honest, considerate — rather than how they happen to feel today.",
      items: [
        { id: "no-u31l1-enpersonlighet", type: "vocab", front: "en personlighet", reading: "enpersonlighet", meaning: "personality", example: { jp: "Jeg synes at Kari har en sterk personlighet.", en: "I think Kari has a strong personality." }, accept: ["a personality", "character"], drill: { jp: "En personlighet kan være grei", en: "A personality can be easy-going" }, hint: "Masculine: en personlighet → personligheten. Built from person plus -lig plus -het, and it is the -het that does the work: it turns an adjective into a noun, exactly as English -ness does." },
        { id: "no-u31l1-snill", type: "vocab", front: "snill", reading: "snill", meaning: "kind", example: { jp: "Læreren er snill når vi gjør lekser.", en: "The teacher is kind when we do homework." }, accept: ["nice", "good", "sweet"], drill: { jp: "En snill lege hjelper alle", en: "A kind doctor helps everyone" }, hint: "SNILL. You have met it inside vær så snill — \"please\", literally \"be so kind\" — but that was a frozen phrase and this is the word itself. Neuter snilt, plural snille." },
        { id: "no-u31l1-grei", type: "vocab", front: "grei", reading: "grei", meaning: "easy-going", example: { jp: "Sjefen min er grei, men han er også streng.", en: "My boss is easy-going, but he is also strict." }, accept: ["nice", "fine", "decent", "okay"], drill: { jp: "Naboen min er veldig grei", en: "My neighbour is very easy-going" }, hint: "GRAY. The everyday compliment for a person who is easy to deal with. You will hear the neuter far more than the adjective: det er greit, \"that's fine\", is one of the commonest sentences in Norwegian." },
        { id: "no-u31l1-hoflig", type: "vocab", front: "høflig", reading: "hoflig", meaning: "polite", example: { jp: "Det er høflig å hilse på naboen.", en: "It is polite to greet the neighbour." }, accept: ["courteous", "well-mannered"], drill: { jp: "En høflig gjest sier takk", en: "A polite guest says thank you" }, hint: "HURF-li — the -ig ending has a silent g, like hyggelig and viktig. From hov, an old word for a royal court: courtly, and so courteous." },
        { id: "no-u31l1-aerlig", type: "vocab", front: "ærlig", reading: "aerlig", meaning: "honest", example: { jp: "Jeg tror at han er ærlig.", en: "I think that he is honest." }, accept: ["truthful", "sincere"], drill: { jp: "Vær ærlig med meg", en: "Be honest with me" }, hint: "AER-li, silent g again. From ære, honour. It sits lower and heavier in Norwegian than \"honest\" does in English — closer to a baseline you are expected to meet than to a compliment." },
        { id: "no-u31l1-omtenksom", type: "vocab", front: "omtenksom", reading: "omtenksom", meaning: "considerate", example: { jp: "Det er omtenksomt å ringe når noen er syk.", en: "It is considerate to call when someone is ill." }, accept: ["thoughtful", "caring"], drill: { jp: "Kari er en omtenksom nabo", en: "Kari is a considerate neighbour" }, hint: "om-TENK-som. Built on tenke, to think — someone who thinks about others. The -som ending makes adjectives of disposition, and you meet another one this unit: morsom." },
      ],
    },
    {
      id: "no-u31l2",
      unit: 31,
      lesson: 2,
      title: "Shy or outgoing",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say whether someone is shy or outgoing, brave, careful or curious, and contrast two people with men.",
      items: [
        { id: "no-u31l2-sjenert", type: "vocab", front: "sjenert", reading: "sjenert", meaning: "shy", example: { jp: "Han er sjenert når han snakker med nye elever.", en: "He is shy when he talks to new pupils." }, accept: ["bashful", "timid"], drill: { jp: "En sjenert elev sier ikke mye", en: "A shy pupil does not say much" }, hint: "she-NEHRT — sj is the broad hush of sjø and skje. A French loan, and it keeps the French stress on the last syllable, which is unusual for Norwegian." },
        { id: "no-u31l2-stille", type: "vocab", front: "stille", reading: "stille", meaning: "quiet", example: { jp: "Det er stille i huset når barna sover.", en: "It is quiet in the house when the children are asleep." }, accept: ["silent", "calm", "still"], drill: { jp: "Det er stille i skogen", en: "It is quiet in the forest" }, hint: "STIL-le. Quiet of a person and still of a place, both. It never changes shape — an adjective already ending in -e takes no neuter -t and no plural -e." },
        { id: "no-u31l2-utadvendt", type: "vocab", front: "utadvendt", reading: "utadvendt", meaning: "outgoing", example: { jp: "Kari er utadvendt, men søsteren hennes er sjenert.", en: "Kari is outgoing, but her sister is shy." }, accept: ["extroverted", "sociable"], drill: { jp: "En utadvendt elev snakker mye", en: "An outgoing pupil talks a lot" }, hint: "OO-tad-vent — literally \"turned outward\", from ut plus vende, to turn. Its opposite is innadvendt, turned inward, built the same way." },
        { id: "no-u31l2-modig", type: "vocab", front: "modig", reading: "modig", meaning: "brave", example: { jp: "Det er modig å snakke norsk når du er ny.", en: "It is brave to speak Norwegian when you are new." }, accept: ["courageous", "bold"], drill: { jp: "En modig hund er ikke redd", en: "A brave dog is not afraid" }, hint: "MOO-di, silent g. From mot, courage — the noun, not the preposition. Like every -ig adjective it stays modig in the neuter: -ig never takes a -t." },
        { id: "no-u31l2-forsiktig", type: "vocab", front: "forsiktig", reading: "forsiktig", meaning: "careful", example: { jp: "Vær forsiktig når du kjører i snø.", en: "Be careful when you drive in snow." }, accept: ["cautious", "gentle"], drill: { jp: "Legen er forsiktig med barn", en: "The doctor is careful with children" }, hint: "for-SIK-ti. Built on sikt, sight — someone who looks ahead. Printed on a parcel, Forsiktig! means Fragile." },
        { id: "no-u31l2-nysgjerrig", type: "vocab", front: "nysgjerrig", reading: "nysgjerrig", meaning: "curious", example: { jp: "Barn er nysgjerrige fordi alt er nytt.", en: "Children are curious because everything is new." }, accept: ["inquisitive", "nosy"], drill: { jp: "En nysgjerrig katt går ut", en: "A curious cat goes out" }, hint: "nues-YER-ri — gj is a plain y sound, as in gjøre. Literally \"new-greedy\": ny plus gjerrig, which you meet in lesson 3. A curious person is greedy for what is new." },
      ],
    },
    {
      id: "no-u31l3",
      unit: 31,
      lesson: 3,
      title: "Less good qualities",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say that someone is lazy, stubborn, strict, stingy or mean — and know which of those a Norwegian would take as a compliment.",
      items: [
        { id: "no-u31l3-lat", type: "vocab", front: "lat", reading: "lat", meaning: "lazy", example: { jp: "Jeg er lat på søndager.", en: "I am lazy on Sundays." }, accept: ["idle"], drill: { jp: "En lat elev gjør ingenting", en: "A lazy pupil does nothing" }, hint: "LAAT. Do not confuse it with å la, to let, which is a verb and a different word entirely." },
        { id: "no-u31l3-dum", type: "vocab", front: "dum", reading: "dum", meaning: "stupid", example: { jp: "Det var dumt at vi glemte billetten.", en: "It was stupid that we forgot the ticket." }, accept: ["silly", "foolish", "dumb"], drill: { jp: "Han er dum og lat", en: "He is stupid and lazy" }, hint: "DOOM. Much softer about an act than about a person — det var dumt is nearer \"that was a shame\" than an insult. Neuter dumt." },
        { id: "no-u31l3-sta", type: "vocab", front: "sta", reading: "sta", meaning: "stubborn", example: { jp: "Han er sta og sier aldri unnskyld.", en: "He is stubborn and never says sorry." }, accept: ["obstinate", "headstrong"], drill: { jp: "En sta bonde gir ikke opp", en: "A stubborn farmer does not give up" }, hint: "STAA. Short, blunt, and it never changes form — sta in the neuter and the plural alike. In Norway it is about as often a compliment as a criticism." },
        { id: "no-u31l3-streng", type: "vocab", front: "streng", reading: "streng", meaning: "strict", example: { jp: "Læreren er streng, men elevene liker henne.", en: "The teacher is strict, but the pupils like her." }, accept: ["severe", "stern", "harsh"], drill: { jp: "En streng lærer gir mange lekser", en: "A strict teacher gives a lot of homework" }, hint: "STRENG, with the ng of \"sing\". Also \"severe\" of weather or of rules: strenge regler. Neuter strengt." },
        { id: "no-u31l3-gjerrig", type: "vocab", front: "gjerrig", reading: "gjerrig", meaning: "stingy", example: { jp: "Han er gjerrig og betaler aldri.", en: "He is stingy and never pays." }, accept: ["mean", "miserly", "greedy"], drill: { jp: "En gjerrig mann låner ikke bort penger", en: "A stingy man does not lend out money" }, hint: "YER-ri — gj is a y sound, and the -ig ending has its silent g. This is the same gjerrig hiding inside nysgjerrig in lesson 2." },
        { id: "no-u31l3-slem", type: "vocab", front: "slem", reading: "slem", meaning: "mean", example: { jp: "Han er slem når han er trøtt.", en: "He is mean when he is tired." }, accept: ["naughty", "nasty", "bad", "unkind"], drill: { jp: "Hunden er slem i dag", en: "The dog is naughty today" }, hint: "SLEM. This is the word Norwegian parents use with small children — du er slem. Neuter slemt, and its exact opposite is snill from lesson 1." },
      ],
    },
    {
      id: "no-u31l4",
      unit: 31,
      lesson: 4,
      title: "Qualities and behaviour",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name a quality as a thing in itself, say someone is wise or good at something, and say how a person behaves.",
      items: [
        { id: "no-u31l4-enegenskap", type: "vocab", front: "en egenskap", reading: "enegenskap", meaning: "quality", example: { jp: "Å være ærlig er en god egenskap.", en: "Being honest is a good quality." }, accept: ["a quality", "trait", "characteristic", "property"], drill: { jp: "En egenskap kan være god eller dårlig", en: "A quality can be good or bad" }, hint: "Masculine: en egenskap → egenskapen, plural egenskaper. Built on egen, \"own\", from A1 unit 14, plus -skap — the ending that makes abstract nouns, as in vennskap, friendship, and kunnskap, knowledge." },
        { id: "no-u31l4-morsom", type: "vocab", front: "morsom", reading: "morsom", meaning: "funny", example: { jp: "Filmen var morsom, men boka var bedre.", en: "The film was funny, but the book was better." }, accept: ["amusing", "fun", "entertaining"], drill: { jp: "En morsom film er aldri kjedelig", en: "A funny film is never boring" }, hint: "MOSH-om — the rs runs together into a sh sound, as in norsk. From moro, fun, plus the same -som as omtenksom. Det var morsomt is what you say after a good evening." },
        { id: "no-u31l4-kjedelig", type: "vocab", front: "kjedelig", reading: "kjedelig", meaning: "boring", example: { jp: "Det er kjedelig å vente på bussen.", en: "It is boring to wait for the bus." }, accept: ["dull", "tedious"], drill: { jp: "En kjedelig dag går sakte", en: "A boring day passes slowly" }, hint: "HYEH-de-li — the thin kj of kjøpe, and a silent g on the end. Like every -ig adjective it does not change in the neuter." },
        { id: "no-u31l4-klok", type: "vocab", front: "klok", reading: "klok", meaning: "wise", example: { jp: "Bestemor er klok, og hun forstår mye.", en: "Grandmother is wise, and she understands a lot." }, accept: ["clever", "sensible", "smart"], drill: { jp: "En klok kvinne sier lite", en: "A wise woman says little" }, hint: "KLOOK. Wise rather than quick — a klok decision is a well-judged one. Neuter klokt. No relation at all to ei klokke, a clock, despite the spelling." },
        { id: "no-u31l4-flink", type: "vocab", front: "flink", reading: "flink", meaning: "good at", example: { jp: "Kari er flink til å synge.", en: "Kari is good at singing." }, accept: ["skilled", "clever", "capable", "able"], drill: { jp: "Han er flink i norsk", en: "He is good at Norwegian" }, hint: "FLINK, and it takes til å in front of a verb: flink til å synge. Flink gutt and flink jente are probably the two most-said phrases in any Norwegian primary school. Neuter flinkt." },
        { id: "no-u31l4-aoppforeseg", type: "vocab", front: "å oppføre seg", reading: "aoppforeseg", meaning: "to behave", example: { jp: "Barna oppfører seg godt når bestemor kommer.", en: "The children behave well when grandmother comes." }, accept: ["behave", "to act", "act"], drill: { jp: "Vi lærer barn å oppføre seg", en: "We teach children to behave" }, hint: "opp-FUR-re say. A reflexive verb, and the seg is not optional — it changes with the person: jeg oppfører meg, du oppfører deg, han oppfører seg. Present oppfører." },
      ],
    },
  ],
};
