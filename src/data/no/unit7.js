// NO Unit 7 — I byen ("Town and places") — A1
// The buildings, how you get there, how you ask the way, and paying for it.
// Conventions are declared in no/unit1.js and bind every unit.
//
// `til` AND `på` LAND HERE (unit1.js §8c). Units 1–6 are written to need no
// preposition beyond `i` and `fra` (both u3); directions are the first place the
// other two are unavoidable, so this is where they are taught rather than dumped
// early. Blocks 2 and 3 inherit all four as taught.
//
// LESSON ORDER IS DELIBERATE, AND IT IS NOT THE ORDER I FIRST WROTE. The
// prepositions sit in LESSON 1, ahead of the places and directions that need
// them, because the natural Norwegian for the rest of the unit is på en skole,
// til høyre, i butikken. Putting transport + til/på first is what lets every
// example in l2–l4 be idiomatic with ZERO forward references.
// Worth knowing why this had to be caught by eye: `check-lang-scope.mjs` resolves
// example scope per UNIT (`u.order`), never per LESSON, so a word used in l1 and
// taught in l3 of the same unit is invisible to it. Blocks 2 and 3 get no warning
// for this class — order your lessons so the function words come first.
//
// THE SECOND NOUN EXCEPTION IS HERE: `penger` is plural-only (unit1.js §1a).
// Norwegian has no singular "a money", so the front carries no article and the
// hint names the definite plural, pengene. Same class as klær and foreldre, which
// blocks 2 and 3 will meet.
//
// A1 SIMPLIFICATION: `høyre` and `venstre` are taught as bare direction words. The
// full phrases (til høyre, på venstre side) are shown in the hints and used in the
// examples, but the front stays the single word so the card is not a phrasebook
// entry the learner cannot recombine.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT7 = {
  id: "no-u7",
  lang: "no",
  title: "I byen",
  order: 7,
  stage: "a1",
  lessons: [
    {
      id: "no-u7l1",
      unit: 7,
      lesson: 1,
      title: "Getting around",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name what you travel in — bil, tog, buss, båt — and say where something is or where you are going, with til and på.",
      items: [
        { id: "no-u7l1-enbil", type: "vocab", front: "en bil", reading: "enbil", meaning: "car", example: { jp: "Erling har en bil.", en: "Erling has a car." }, accept: ["a car", "automobile", "vehicle"], hint: "BEEL. Short for automobil, and nobody says the long form. Masculine: definite bilen, plural biler." },
        { id: "no-u7l1-ettog", type: "vocab", front: "et tog", reading: "ettog", meaning: "train", example: { jp: "Et tog går til Bergen.", en: "A train goes to Bergen." }, accept: ["a train"], hint: "TOOG. Neuter: definite toget, plural tog — unchanged. Keep it apart from et torg: torg has an r." },
        { id: "no-u7l1-enbuss", type: "vocab", front: "en buss", reading: "enbuss", meaning: "bus", example: { jp: "En buss er billig.", en: "A bus is cheap." }, accept: ["a bus", "coach"], hint: "BUESS, with the tight Norwegian u. Definite bussen, plural busser." },
        { id: "no-u7l1-enbat", type: "vocab", front: "en båt", reading: "enbat", meaning: "boat", example: { jp: "En båt er på en sjø.", en: "A boat is on a lake." }, accept: ["a boat", "ship", "vessel"], hint: "BOAT, with the rounded å. In a country this shape, a båt is transport, not a hobby." },
        { id: "no-u7l1-til", type: "vocab", front: "til", reading: "til", meaning: "to", example: { jp: "Jeg går til en kafé.", en: "I am walking to a café." }, accept: ["towards", "until", "for"], hint: "TIL. Motion toward something. With a place name it needs nothing else: til Oslo, til Bergen." },
        { id: "no-u7l1-pa", type: "vocab", front: "på", reading: "pa", meaning: "on", example: { jp: "En kopp er på et bord.", en: "A cup is on a table." }, accept: ["at", "upon", "in"], hint: "PAW. On a surface — but Norwegian also uses it where English says \"at\" or \"in\": på skolen, på jobb, på kino." },
      ],
    },
    {
      id: "no-u7l2",
      unit: 7,
      lesson: 2,
      title: "Buildings and places",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the places a Norwegian town is made of — skole, kirke, sykehus, gate, torg, kino — and say you work at one or are going to one.",
      items: [
        { id: "no-u7l2-enskole", type: "vocab", front: "en skole", reading: "enskole", meaning: "school", example: { jp: "Jeg jobber på en skole.", en: "I work at a school." }, accept: ["a school"], hint: "SKOO-le — sk before o is a hard sk, not the sh of skje. Masculine: definite skolen. Institutions take på, not i: på skolen." },
        { id: "no-u7l2-eikirke", type: "vocab", front: "ei kirke", reading: "eikirke", meaning: "church", example: { jp: "Vi går til ei kirke.", en: "We are walking to a church." }, accept: ["a church", "chapel"], hint: "HYIR-ke — k before i is the thin kj sound from unit 1. Feminine: definite kirka." },
        { id: "no-u7l2-etsykehus", type: "vocab", front: "et sykehus", reading: "etsykehus", meaning: "hospital", example: { jp: "Han jobber på et sykehus.", en: "He works at a hospital." }, accept: ["a hospital", "infirmary"], hint: "syke (sick) plus hus (house) — a sick-house. Norwegian builds long nouns by welding short ones together, and this is the pattern to expect everywhere." },
        { id: "no-u7l2-eigate", type: "vocab", front: "ei gate", reading: "eigate", meaning: "street", example: { jp: "Vi bor i ei gate i Oslo.", en: "We live on a street in Oslo." }, accept: ["a street", "road"], hint: "GAH-te, hard g. Feminine: definite gata. Karl Johans gate is Oslo's main street — gate, not \"gaten\", in the name." },
        { id: "no-u7l2-ettorg", type: "vocab", front: "et torg", reading: "ettorg", meaning: "square", example: { jp: "Et torg er i en by.", en: "A square is in a city." }, accept: ["a square", "market square", "marketplace"], hint: "TORG, both consonants sounded. The open market square at the centre of a town — where the fish and flowers are sold." },
        { id: "no-u7l2-enkino", type: "vocab", front: "en kino", reading: "enkino", meaning: "cinema", example: { jp: "En kino er hyggelig.", en: "A cinema is nice." }, accept: ["a cinema", "movie theater", "the movies"], hint: "HYEE-no — there is that thin kj sound again, because k comes before i. Masculine: definite kinoen. Going to see a film is å gå på kino, with no article at all." },
      ],
    },
    {
      id: "no-u7l3",
      unit: 7,
      lesson: 3,
      title: "Asking the way",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Give and follow directions — til høyre, til venstre — say whether somewhere is near, and get yourself there by car or by train.",
      items: [
        { id: "no-u7l3-hoyre", type: "vocab", front: "høyre", reading: "hoyre", meaning: "right", example: { jp: "Ei kirke er til høyre.", en: "A church is on the right." }, accept: ["right side", "to the right", "the right"], hint: "HOY-re, the øy diphthong from ei øy — and another hand-folded reading, hoyre. The full phrase is til høyre, \"to the right\"." },
        { id: "no-u7l3-venstre", type: "vocab", front: "venstre", reading: "venstre", meaning: "left", example: { jp: "En kino er til venstre.", en: "A cinema is on the left." }, accept: ["left side", "to the left", "the left"], hint: "VEN-stre. Same shape: til venstre. Both words are also the names of two Norwegian political parties, which confuses everyone." },
        { id: "no-u7l3-naer", type: "vocab", front: "nær", reading: "naer", meaning: "near", example: { jp: "En butikk er nær et torg.", en: "A shop is near a square." }, accept: ["close", "close to", "nearby"], hint: "NAIR, with the æ of unit 1. The opposite is langt — langt fra, far from." },
        { id: "no-u7l3-afinne", type: "vocab", front: "å finne", reading: "afinne", meaning: "to find", example: { jp: "Jeg finner ikke bussen.", en: "I cannot find the bus." }, accept: ["find", "to locate", "locate", "to discover"], hint: "FIN-ne, present finner. Note where ikke sits — straight after the verb, before the object: finner ikke bussen." },
        { id: "no-u7l3-akjore", type: "vocab", front: "å kjøre", reading: "akjore", meaning: "to drive", example: { jp: "Jeg kjører bil til Bergen.", en: "I am driving to Bergen." }, accept: ["drive", "to ride", "ride", "to go by vehicle"], hint: "HYUR-re — the thin kj again, and a hand-folded reading, akjore. Note kjøre bil, with no article: the means of travel is a bare noun. It covers riding too — du kjører buss." },
        { id: "no-u7l3-areise", type: "vocab", front: "å reise", reading: "areise", meaning: "to travel", example: { jp: "Vi reiser til Norge.", en: "We are travelling to Norway." }, accept: ["travel", "to go", "to journey", "journey"], hint: "RAY-se — the ei diphthong from hei and nei. Present reiser. Ei reise is a journey." },
      ],
    },
    {
      id: "no-u7l4",
      unit: 7,
      lesson: 4,
      title: "Money and opening hours",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Pay for something, say whether it is expensive, and tell whether a place is open or closed.",
      items: [
        { id: "no-u7l4-penger", type: "vocab", front: "penger", reading: "penger", meaning: "money", example: { jp: "Jeg har ikke penger.", en: "I do not have money." }, accept: ["cash", "funds", "the money"], hint: "PENG-er. Plural only — there is no \"a money\", so this front carries no article. The definite is pengene, \"the money\". Same class as klær, clothes." },
        { id: "no-u7l4-dyr", type: "vocab", front: "dyr", reading: "dyr", meaning: "expensive", example: { jp: "En bil er dyr.", en: "A car is expensive." }, accept: ["costly", "pricey", "high-priced"], hint: "DUER. The opposite of billig. Spelled exactly like et dyr, an animal — context does all the work." },
        { id: "no-u7l4-abetale", type: "vocab", front: "å betale", reading: "abetale", meaning: "to pay", example: { jp: "Vi betaler i butikken.", en: "We pay in the shop." }, accept: ["pay", "to pay for", "settle"], hint: "be-TAH-le, present betaler. Norway runs on cards — kort — so this is a word you will hear more than you say." },
        { id: "no-u7l4-etsted", type: "vocab", front: "et sted", reading: "etsted", meaning: "place", example: { jp: "En kafé er et hyggelig sted.", en: "A café is a nice place." }, accept: ["a place", "spot", "location"], hint: "STEH — the d is silent, as in god and bord. Neuter: definite stedet, plural steder." },
        { id: "no-u7l4-apen", type: "vocab", front: "åpen", reading: "apen", meaning: "open", example: { jp: "En butikk er åpen klokka ni.", en: "A shop is open at nine o'clock." }, accept: ["opened", "unlocked"], hint: "AW-pen, with the rounded å. The verb is å åpne, to open — two å's in a row." },
        { id: "no-u7l4-stengt", type: "vocab", front: "stengt", reading: "stengt", meaning: "closed", example: { jp: "En kino er stengt nå.", en: "A cinema is closed now." }, accept: ["shut", "not open"], hint: "STENGT. The sign on the door — and on a Sunday in Norway you will see it on almost every one." },
      ],
    },
  ],
};
