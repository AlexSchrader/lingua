// NO Unit 8 — Farger og vær ("Colours and weather") — A1
// First unit of block 2. Conventions are declared in no/unit1.js and bind every
// unit here: the indefinite article carries gender (en/ei/et), feminine is marked
// ei, verbs are headworded `å ...`, ø is hand-folded to o in `reading`, and
// example.jp holds the Norwegian.
//
// TWO HALVES, SIX CARDS EACH WAY. Lessons 1–2 are the colours; lessons 3–4 are
// the weather. They belong in one unit because in Norwegian they are the same
// conversation — sola er gul, himmelen er grå — and because colours give the
// weather half a stock of adjectives to lean on before it needs any of its own.
//
// `vær` IS A HOMOGRAPH AND IT IS TAUGHT ANYWAY. Unit 2 teaches the frozen formula
// `vær så snill`, whose `vær` is the imperative of å være. This unit's `vær` is
// the noun "weather" — a different word with the same four letters. The fronts
// differ as strings (`vær` vs `vær så snill`) so nothing collides, and the noun is
// unavoidable in a weather unit; u8l3's hint names the clash rather than hiding it.
//
// THREE NOUNS ARE TAUGHT BARE, under unit1.js §1(b): `vær`, and the nouns behind
// `å regne` and `å snø`. Weather is mass — "et vær" is not Norwegian for "the
// weather" — so the front carries no article and the hint names the definite
// (været). For rain and snow the VERB is what an A1 learner actually says (det
// regner, det snør), so the verb is the card and the noun sits in its hint.
//
// NEUTER -t IN EXAMPLES, NEVER AS A TASK. unit1.js §8(b) reserves adjective
// agreement for u14. Colours make the neuter unavoidable in a few places — the
// flag card is literally "rødt, hvitt og blått" — so those forms appear in
// examples and hints only, and the flag card's hint points forward to u14 by name.
// No card in this unit asks the learner to build a -t.
//
// V2: `I Bergen regner det mye.` and `Nå er kaffen kald.` are fronted-XP
// declaratives — the pattern English does not have — not questions.
//   FREE: Tromsø
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT8 = {
  id: "no-u8",
  lang: "no",
  title: "Farger og vær",
  order: 8,
  stage: "a1",
  lessons: [
    // Lesson 1: the six colours that carry most of the work.
    {
      id: "no-u8l1",
      unit: 8,
      lesson: 1,
      title: "Colours",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the six commonest colours and say what colour something is: Bilen er rød.",
      items: [
        { id: "no-u8l1-enfarge", type: "vocab", front: "en farge", reading: "enfarge", meaning: "colour", example: { jp: "Grønn er en god farge.", en: "Green is a good colour." }, accept: ["color", "a colour", "a color", "hue", "shade"], hint: "Masculine: en farge → fargen. The plural is farger — Norwegian marks a plural with -er, never with -s." },
        { id: "no-u8l1-rod", type: "vocab", front: "rød", reading: "rod", meaning: "red", example: { jp: "Bilen er rød.", en: "The car is red." }, accept: ["scarlet"], hint: "The ø rounded and the d silent: RUH. In the neuter it becomes rødt and in the plural røde — unit 14 makes that a rule; for now just notice it." },
        { id: "no-u8l1-bla", type: "vocab", front: "blå", reading: "bla", meaning: "blue", example: { jp: "Er båten blå?", en: "Is the boat blue?" }, accept: [], hint: "Long å — BLAW. Neuter blått, with double t; the plural stays blå." },
        { id: "no-u8l1-gronn", type: "vocab", front: "grønn", reading: "gronn", meaning: "green", example: { jp: "Hagen er grønn.", en: "The garden is green." }, accept: [], hint: "Double n keeps the vowel short: GRUHN. The neuter drops one n and adds t — grønt." },
        { id: "no-u8l1-gul", type: "vocab", front: "gul", reading: "gul", meaning: "yellow", example: { jp: "Skjorta er gul.", en: "The shirt is yellow." }, accept: [], hint: "Norwegian u is not English \"oo\" — the lips are tight and pushed forward, closer to \"ee\" said through a straw. Note skjorta: ei skjorte takes -a in the definite." },
        { id: "no-u8l1-hvit", type: "vocab", front: "hvit", reading: "hvit", meaning: "white", example: { jp: "Katten er hvit.", en: "The cat is white." }, accept: [], hint: "Silent h, exactly like hva and hvor: VEET. Neuter hvitt." },
      ],
    },
    // Lesson 2: the dark end of the palette, plus lys/mørk and the flag.
    {
      id: "no-u8l2",
      unit: 8,
      lesson: 2,
      title: "Light and dark",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name black, brown and grey, say whether something is light or dark, and describe the Norwegian flag.",
      items: [
        { id: "no-u8l2-svart", type: "vocab", front: "svart", reading: "svart", meaning: "black", example: { jp: "Telefonen er svart.", en: "The phone is black." }, accept: [], hint: "SVART. It already ends in -t, so the neuter form looks identical: et svart hus." },
        { id: "no-u8l2-brun", type: "vocab", front: "brun", reading: "brun", meaning: "brown", example: { jp: "Hunden er brun.", en: "The dog is brown." }, accept: [], hint: "BROON. Brunost — brown cheese — is a national institution: sweet, caramel-coloured, and made from ost." },
        { id: "no-u8l2-gra", type: "vocab", front: "grå", reading: "gra", meaning: "grey", example: { jp: "Kirka er grå.", en: "The church is grey." }, accept: ["gray"], hint: "GRAW, the same long å as blå. Note kirka — ei kirke takes -a in the definite." },
        { id: "no-u8l2-lys", type: "vocab", front: "lys", reading: "lys", meaning: "light", example: { jp: "Hun har ei lys skjorte.", en: "She has a light shirt." }, accept: ["pale", "bright", "light-coloured", "light-colored"], hint: "Of colour, not of weight — a pale shade. Norwegian y is the u of gul with the tongue even higher: LUES. As a noun et lys is a candle." },
        { id: "no-u8l2-mork", type: "vocab", front: "mørk", reading: "mork", meaning: "dark", example: { jp: "Kinoen er mørk.", en: "The cinema is dark." }, accept: ["gloomy", "deep"], hint: "MURK — ø again. Northern Norway takes this literally: in Tromsø the sun does not come up at all for weeks in winter." },
        { id: "no-u8l2-etflagg", type: "vocab", front: "et flagg", reading: "etflagg", meaning: "flag", example: { jp: "Flagget er rødt, hvitt og blått.", en: "The flag is red, white and blue." }, accept: ["a flag", "banner"], hint: "Neuter: et flagg → flagget. Look at what the neuter does to the colours — rødt, hvitt, blått all pick up a -t. Unit 14 turns that into a rule you can apply; here just let your eye get used to it." },
      ],
    },
    // Lesson 3: the weather nouns and the two weather verbs.
    {
      id: "no-u8l3",
      unit: 8,
      lesson: 3,
      title: "The weather",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what the weather is doing — sola er varm, det regner, det snør — and name the sun, the clouds and the wind.",
      items: [
        { id: "no-u8l3-vaer", type: "vocab", front: "vær", reading: "vaer", meaning: "weather", example: { jp: "Været i Bergen er ikke bra.", en: "The weather in Bergen is not good." }, accept: ["the weather"], hint: "A mass noun, so no en/ei/et — \"et vær\" is not how Norwegian says this. Neuter all the same: the definite is været. Careful: the same four letters appear in vær så snill, where vær is an order from å være — one spelling, two different words." },
        { id: "no-u8l3-eisol", type: "vocab", front: "ei sol", reading: "eisol", meaning: "sun", example: { jp: "Sola er gul.", en: "The sun is yellow." }, accept: ["a sun", "sunshine", "the sun"], hint: "Feminine: ei sol → sola. You will also see en sol / solen — Bokmål allows both and print often prefers the en form; this course writes ei because ei tells you the definite ends in -a. Sola skinner is far commoner than været er bra." },
        { id: "no-u8l3-eisky", type: "vocab", front: "ei sky", reading: "eisky", meaning: "cloud", example: { jp: "Det er mange skyer her.", en: "There are many clouds here." }, accept: ["a cloud"], hint: "Feminine: ei sky → skya, plural skyer. sk before y is the broad hush of skje and sjø: SHUE." },
        { id: "no-u8l3-envind", type: "vocab", front: "en vind", reading: "envind", meaning: "wind", example: { jp: "Vinden er kald.", en: "The wind is cold." }, accept: ["a wind", "breeze"], hint: "Masculine: en vind → vinden. Final d is silent, as in god and med: VINN." },
        { id: "no-u8l3-aregne", type: "vocab", front: "å regne", reading: "aregne", meaning: "to rain", example: { jp: "I Bergen regner det mye.", en: "It rains a lot in Bergen." }, accept: ["rain", "to be raining"], hint: "Always with det: det regner. Watch the word order — I Bergen opens the sentence, so the verb regner comes second and det is pushed behind it. The noun is regn (regnet)." },
        { id: "no-u8l3-asno", type: "vocab", front: "å snø", reading: "asno", meaning: "to snow", example: { jp: "Det snør mye her.", en: "It snows a lot here." }, accept: ["snow", "to be snowing"], hint: "Det snør — SNUHR. The noun is snø as well: snøen, the snow. Present is snør, the plain infinitive + -r." },
      ],
    },
    // Lesson 4: how it feels — cold, warm, wet, dry, windy, freezing.
    {
      id: "no-u8l4",
      unit: 8,
      lesson: 4,
      title: "Cold, warm, wet, dry",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say whether something is cold, warm, wet or dry, and say that you yourself are freezing.",
      items: [
        { id: "no-u8l4-kald", type: "vocab", front: "kald", reading: "kald", meaning: "cold", example: { jp: "Nå er kaffen kald.", en: "Now the coffee is cold." }, accept: ["chilly", "cool"], hint: "Silent d: KALL. Nå opens the sentence, so er comes second and kaffen follows it — that is Norwegian word order, not a stylistic choice. Neuter kaldt, and det er kaldt is how you say it about the weather." },
        { id: "no-u8l4-varm", type: "vocab", front: "varm", reading: "varm", meaning: "warm", example: { jp: "Sola er varm.", en: "The sun is warm." }, accept: ["hot"], hint: "VARM. Norwegian uses varm for both \"warm\" and \"hot\" — of drinks, of food and of weather. Neuter varmt." },
        { id: "no-u8l4-vat", type: "vocab", front: "våt", reading: "vat", meaning: "wet", example: { jp: "Skjorta er våt.", en: "The shirt is wet." }, accept: ["soaked", "damp"], hint: "Long å: VAWT. Neuter vått, with double t." },
        { id: "no-u8l4-torr", type: "vocab", front: "tørr", reading: "torr", meaning: "dry", example: { jp: "Gata er tørr nå.", en: "The street is dry now." }, accept: ["dried", "dried out"], hint: "TURR — ø with a rolled double r. The neuter drops one r: tørt. Note gata: ei gate takes -a in the definite." },
        { id: "no-u8l4-ablase", type: "vocab", front: "å blåse", reading: "ablase", meaning: "to blow", example: { jp: "Det blåser mye på øya.", en: "It is very windy on the island." }, accept: ["blow", "to be windy"], hint: "BLAW-se. Det blåser is the ordinary way to say \"it is windy\" — Norwegian makes the wind a verb where English makes it an adjective." },
        { id: "no-u8l4-afryse", type: "vocab", front: "å fryse", reading: "afryse", meaning: "to freeze", example: { jp: "Jeg fryser når det snør.", en: "I get cold when it snows." }, accept: ["freeze", "to be cold", "to feel cold"], hint: "FRUE-se. Jeg fryser means \"I am cold\" — about a person. A cold object is kald instead; the two are not interchangeable." },
      ],
    },
  ],
};
