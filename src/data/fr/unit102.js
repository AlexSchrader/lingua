// FR Unit 102 — L'histoire et la culture (slot: history and culture) — B2
// B1 taught l'époque, le passé, ancien, autrefois, jadis (u66/u70). B2 adds the
// register of history proper: naming periods (le siècle, l'ère, l'Antiquité, le
// Moyen Âge), heritage (le patrimoine, l'héritage, la tradition, transmettre),
// civilisations (l'empire, la conquête, le règne, la dynastie) and cultural memory
// (le mythe, la légende, commémorer, le vestige). Fronts checked against the 2,168
// live fr fronts. Conventions: fr/unit1.js.
export const FR_UNIT102 = {
  id: "fr-u102",
  lang: "fr",
  title: "L'histoire et la culture",
  order: 102,
  stage: "b2",
  lessons: [
    {
      id: "fr-u102l1",
      unit: 102,
      lesson: 1,
      title: "Naming the ages",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Place things in historical time: le siècle, l'ère, l'Antiquité, le Moyen Âge.",
      items: [
        { id: "fr-u102l1-lesiecle", type: "vocab", front: "le siècle", reading: "lesiecle", meaning: "the century", example: { jp: "Cette histoire remonte à plusieurs siècles.", en: "This story goes back several centuries." }, accept: ["century"], hint: "A hundred years — le vingt-et-unième siècle. le siècle dernier = last century." },
        { id: "fr-u102l1-lere", type: "vocab", front: "l'ère", reading: "lere", meaning: "the era", example: { jp: "C'est le début d'une nouvelle ère pour le pays.", en: "It's the start of a new era for the country." }, accept: ["era", "the age"], hint: "A long historical age — l'ère numérique. Not to be confused with l'air or l'aire." },
        { id: "fr-u102l1-ladecennie", type: "vocab", front: "la décennie", reading: "ladecennie", meaning: "the decade", example: { jp: "En quelques décennies, la ville a beaucoup changé.", en: "In a few decades, the city changed a lot." }, accept: ["decade"], hint: "Ten years — la décennie précédente. From the Latin decem, ten." },
        { id: "fr-u102l1-lantiquite", type: "vocab", front: "l'Antiquité", reading: "lantiquite", meaning: "Antiquity", example: { jp: "Cette histoire remonte à l'Antiquité.", en: "This story goes back to Antiquity." }, accept: ["Antiquity", "ancient times"], hint: "The ancient Greek/Roman age — dans l'Antiquité. From antique." },
        { id: "fr-u102l1-lemoyenage", type: "vocab", front: "le Moyen Âge", reading: "lemoyenage", meaning: "the Middle Ages", example: { jp: "Au Moyen Âge, la vie était très difficile.", en: "In the Middle Ages, life was very hard." }, accept: ["the Middle Ages", "the medieval period"], hint: "Roughly 500–1500 — au Moyen Âge. The adjective is médiéval." },
        { id: "fr-u102l1-contemporain", type: "vocab", front: "contemporain", reading: "contemporain", meaning: "contemporary", example: { jp: "Elle aime beaucoup la musique contemporaine.", en: "She really likes contemporary music." }, accept: ["contemporary", "modern", "present-day"], hint: "Of today, or of the same time — l'art contemporain; un contemporain de Molière." },
      ],
    },
    {
      id: "fr-u102l2",
      unit: 102,
      lesson: 2,
      title: "What we inherit",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about heritage: le patrimoine, l'héritage, la tradition, transmettre.",
      items: [
        { id: "fr-u102l2-lepatrimoine", type: "vocab", front: "le patrimoine", reading: "lepatrimoine", meaning: "the heritage", example: { jp: "Ce monument fait partie du patrimoine national.", en: "This monument is part of the national heritage." }, accept: ["heritage", "the legacy"], hint: "A country's inherited treasures — le patrimoine mondial. Also personal wealth." },
        { id: "fr-u102l2-lheritage", type: "vocab", front: "l'héritage", reading: "lheritage", meaning: "the legacy", example: { jp: "Cette langue est un héritage de notre passé.", en: "This language is a legacy of our past." }, accept: ["legacy", "the inheritance", "the heritage"], hint: "What is handed down — un héritage culturel. Also money inherited. From hériter." },
        { id: "fr-u102l2-latradition", type: "vocab", front: "la tradition", reading: "latradition", meaning: "the tradition", example: { jp: "Chaque famille garde ses traditions.", en: "Each family keeps its traditions." }, accept: ["tradition", "the custom"], hint: "A long-standing practice — une vieille tradition. From the Latin for 'handing over'." },
        { id: "fr-u102l2-lacoutume", type: "vocab", front: "la coutume", reading: "lacoutume", meaning: "the custom", example: { jp: "Dans ce pays, cette coutume est très ancienne.", en: "In this country, this custom is very old." }, accept: ["custom", "the practice", "the usage"], hint: "A local custom or usage — les coutumes locales. avoir coutume de = to be in the habit of." },
        { id: "fr-u102l2-transmettre", type: "vocab", front: "transmettre", reading: "transmettre", meaning: "to pass on", example: { jp: "Les parents transmettent leur langue à leurs enfants.", en: "Parents pass on their language to their children." }, accept: ["to pass on", "to hand down", "to transmit"], hint: "To hand down — transmettre un savoir, une maladie. From mettre (to put across)." },
        { id: "fr-u102l2-lancetre", type: "vocab", front: "l'ancêtre", reading: "lancetre", meaning: "the ancestor", example: { jp: "Ses ancêtres venaient d'Italie.", en: "His ancestors came from Italy." }, accept: ["ancestor", "the forebear"], hint: "A forebear — nos ancêtres. The adjective is ancestral." },
      ],
    },
    {
      id: "fr-u102l3",
      unit: 102,
      lesson: 3,
      title: "Empires and ages",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about the rise and fall of powers: la civilisation, l'empire, la conquête, le règne.",
      items: [
        { id: "fr-u102l3-lacivilisation", type: "vocab", front: "la civilisation", reading: "lacivilisation", meaning: "the civilisation", example: { jp: "Cette vieille civilisation a disparu il y a longtemps.", en: "This old civilisation disappeared long ago." }, accept: ["civilisation", "civilization"], hint: "A whole society and its culture — une civilisation ancienne. From civil." },
        { id: "fr-u102l3-lempire", type: "vocab", front: "l'empire", reading: "lempire", meaning: "the empire", example: { jp: "Cet empire a duré plusieurs siècles.", en: "This empire lasted several centuries." }, accept: ["empire"], hint: "A large state ruling many peoples — l'Empire romain. Ruled by un empereur." },
        { id: "fr-u102l3-laconquete", type: "vocab", front: "la conquête", reading: "laconquete", meaning: "the conquest", example: { jp: "La conquête de cette région a duré des années.", en: "The conquest of this region took years." }, accept: ["conquest"], hint: "Taking land or power by force — partir à la conquête de. From conquérir." },
        { id: "fr-u102l3-leregne", type: "vocab", front: "le règne", reading: "leregne", meaning: "the reign", example: { jp: "Son long règne a duré trente ans.", en: "His long reign lasted thirty years." }, accept: ["reign", "the rule"], hint: "The period a ruler is in power — sous le règne de. From régner." },
        { id: "fr-u102l3-ladynastie", type: "vocab", front: "la dynastie", reading: "ladynastie", meaning: "the dynasty", example: { jp: "Cette dynastie a duré plus de deux siècles.", en: "This dynasty lasted more than two centuries." }, accept: ["dynasty"], hint: "A line of rulers from one family — une dynastie royale." },
        { id: "fr-u102l3-medieval", type: "vocab", front: "médiéval", reading: "medieval", meaning: "medieval", example: { jp: "Nous avons vu une belle ville médiévale.", en: "We saw a beautiful medieval town." }, accept: ["medieval"], hint: "Of the Middle Ages — un château médiéval. From le Moyen Âge." },
      ],
    },
    {
      id: "fr-u102l4",
      unit: 102,
      lesson: 4,
      title: "Cultural memory",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about stories and remains from the past: le mythe, la légende, commémorer, le vestige.",
      items: [
        { id: "fr-u102l4-lemythe", type: "vocab", front: "le mythe", reading: "lemythe", meaning: "the myth", example: { jp: "C'est un vieux mythe que tout le monde connaît.", en: "It's an old myth that everyone knows." }, accept: ["myth"], hint: "An ancient story, or a false widespread belief — un mythe grec; c'est un mythe." },
        { id: "fr-u102l4-lalegende", type: "vocab", front: "la légende", reading: "lalegende", meaning: "the legend", example: { jp: "Tout le monde connaît cette belle légende.", en: "Everyone knows this beautiful legend." }, accept: ["legend", "the tale"], hint: "A traditional tale, part-true — une légende locale. Also a map's key." },
        { id: "fr-u102l4-commemorer", type: "vocab", front: "commémorer", reading: "commemorer", meaning: "to commemorate", example: { jp: "Ce jour commémore la fin de la guerre.", en: "This day commemorates the end of the war." }, accept: ["to commemorate", "to mark", "to remember"], hint: "To mark the memory of an event — commémorer une victoire. From mémoire." },
        { id: "fr-u102l4-levestige", type: "vocab", front: "le vestige", reading: "levestige", meaning: "the remains", example: { jp: "Il reste quelques vestiges de cette époque.", en: "A few remains of that era are left." }, accept: ["the remains", "the relic", "the vestige"], hint: "What's left of the past — les vestiges d'un château. Usually plural." },
        { id: "fr-u102l4-lerecit", type: "vocab", front: "le récit", reading: "lerecit", meaning: "the account", example: { jp: "Elle a fait un long récit de son voyage.", en: "She gave a long account of her trip." }, accept: ["account", "the story", "the narrative"], hint: "A told or written account — le récit d'une aventure. From réciter." },
        { id: "fr-u102l4-lemonument", type: "vocab", front: "le monument", reading: "lemonument", meaning: "the monument", example: { jp: "Cette vieille ville a de beaux monuments.", en: "This old town has beautiful monuments." }, accept: ["monument", "the landmark"], hint: "A historic building or memorial — les monuments de Paris. From monere, to remind." },
      ],
    },
  ],
};
