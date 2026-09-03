// NO Unit 16 — Hjemme ("At home") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded as "Vocabulary 2"; retitled and rethemed per CLAUDE.md → "No
// front language" and the block-3 plan in unit15.js.
//
// WHAT THIS UNIT IS NOT. Unit 4 (block 1) already owns the HOME as a social
// idea — et hus, et hjem, et rom, en hage, and the family who live in it. This
// unit owns the INSIDE of it: the rooms you name, the furniture you sit on, the
// things in the kitchen and bathroom, and the words for a flat and a neighbour.
// Nothing here re-teaches a u4 front; et rom and et hus are used throughout and
// never taught again (RUNBOOK §4 — lower slot wins, always).
//
// Conventions are declared in no/unit1.js and bind every unit. Bokmål, not
// Nynorsk.
//
// FIRST FEMININE OF THE UNIT is `ei stue` (l1) and it carries the en-/ei-
// recognition note unit1.js requires.
//
// ø IS HAND-FOLDED, ø→o (unit1.js §3): `ei dør` → "eidor", `en nøkkel` →
// "ennokkel". å folds on its own, so `ei såpe` → "eisape" and `et håndkle` →
// "ethandkle" need no special case for the å — only the a-spelling of it.
//
// COMPOUNDING IS NAMED, NOT SMUGGLED. Norwegian welds short nouns into long
// ones and block 1 taught the pattern outright (et sykehus = syke + hus, u7l2).
// This unit does not TEACH a compound front, but its hints point at the ones the
// learner will meet the moment they open a Norwegian flat — et klesskap, ei
// bokhylle, et kjøleskap, et soverom. unit1.js §7's "do not extend the frozen-
// formula licence to ordinary compounds" is about FRONTS; a compound named in a
// hint costs no card and is how the pattern becomes productive.
//
// V2: "Her bor naboen min." (l4) is this unit's fronted-XP declarative — an
// adverb in first position forcing the subject behind the verb, the pattern
// English does not have. Its hint says so. "På hylla er det en kopp." (l2)
// fronts a prepositional phrase and does the same job.
//
// ⚠ MERGE SEAT — A SCOPE QUESTION THIS SEAT CANNOT SETTLE. l1's `et vindu` hint
// teaches the presentational det-frame (the definiteness effect), because the
// content-auditor found 24 block-3 examples using the English locative frame and
// the fix is unusable without an explanation. But u12 is block 2's "Setning og
// ordstilling", and a word-order unit may well cover it too. No FRONT collides —
// this is a hint, not a card, so nothing needs deleting either way. If u12 states
// the rule properly, trim this hint to a pointer rather than teaching it twice.
//
// LESSON ORDER: l1 and l2 supply the rooms and furniture that l3 and l4 stand
// things on and in, so no example looks forward. Checked by eye —
// check-lang-scope.mjs resolves scope per UNIT, never per LESSON (unit7.js).
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT16 = {
  id: "no-u16",
  lang: "no",
  title: "Hjemme",
  order: 16,
  stage: "a1",
  lessons: [
    // Lesson 1: the rooms, and the ways in and out of them.
    {
      id: "no-u16l1",
      unit: 16,
      lesson: 1,
      title: "Inne i huset",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the parts of a home you move through — stue, bad, trapp, dør, vindu — and say whether a door is open and where the key is.",
      items: [
        { id: "no-u16l1-eistue", type: "vocab", front: "ei stue", reading: "eistue", meaning: "living room", example: { jp: "Stua er veldig hyggelig.", en: "The living room is very nice." }, accept: ["a living room", "sitting room", "lounge", "the living room"], hint: "STOO-e. Feminine: definite stua. The room a Norwegian home is organised around. You will also see this written en stue / stuen; Bokmål allows both and the en form is common in print. This course writes ei, because ei is what tells you the definite ends in -a." },
        { id: "no-u16l1-etbad", type: "vocab", front: "et bad", reading: "etbad", meaning: "bathroom", example: { jp: "Huset har et bad.", en: "The house has a bathroom." }, accept: ["a bathroom", "bath", "toilet"], hint: "BAHD — and here the d IS sounded, unlike the silent one in god and sted. Neuter: definite badet, plural bad, unchanged. It is both the room and the bath itself: å bade is to bathe or to swim." },
        { id: "no-u16l1-eitrapp", type: "vocab", front: "ei trapp", reading: "eitrapp", meaning: "staircase", example: { jp: "Erling går i trappa.", en: "Erling is walking on the stairs." }, accept: ["stairs", "a staircase", "steps", "the stairs", "staircase"], hint: "TRAPP. Feminine: definite trappa, plural trapper. Norwegian counts a staircase as ONE thing where English insists on the plural \"stairs\": ei trapp, one staircase." },
        { id: "no-u16l1-eidor", type: "vocab", front: "ei dør", reading: "eidor", meaning: "door", example: { jp: "Døra er åpen.", en: "The door is open." }, accept: ["a door", "doorway"], hint: "DUR — and a hand-folded reading, eidor, because ø is the letter that never folds on its own. Feminine: definite døra, plural dører. Åpen and stengt from unit 7 are exactly what gets written on one." },
        { id: "no-u16l1-etvindu", type: "vocab", front: "et vindu", reading: "etvindu", meaning: "window", example: { jp: "Det er et vindu i stua.", en: "There is a window in the living room." }, accept: ["a window"], hint: "VIN-du. Neuter: definite vinduet, plural vinduer. From vind, wind, plus an old word for eye — a \"wind-eye\"; English borrowed that very word from Norse and it became \"window\". ⚠ And note the sentence frame. When a clause just says that something EXISTS or is LOCATED somewhere, Norwegian will not put an indefinite subject in front of the verb: \"Et vindu er i stua\" is not Norwegian. You say Det er et vindu i stua — det holds the front slot and the real subject follows the verb. Seven cards in this unit use that frame, and an eighth fronts the place instead — På hylla er det en kopp, where the preposition takes the front slot and det drops in behind the verb. It is ONLY for existence and location: an indefinite subject is perfectly normal when the clause says what something is like or what it does, as in Ei ku gir melk or En bonde jobber mye." },
        { id: "no-u16l1-ennokkel", type: "vocab", front: "en nøkkel", reading: "ennokkel", meaning: "key", example: { jp: "Jeg finner ikke nøkkelen.", en: "I cannot find the key." }, accept: ["a key"], hint: "NOK-kel, hand-folded to ennokkel. Masculine: definite nøkkelen — and the plural is nøkler, dropping the e. Å låse is to lock the dør it belongs to." },
      ],
    },
    // Lesson 2: the furniture the rooms are filled with.
    {
      id: "no-u16l2",
      unit: 16,
      lesson: 2,
      title: "Møbler",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the furniture in a room — seng, stol, hylle, teppe, lampe, bilde — and say what there is in a room, using the det er that Norwegian requires.",
      items: [
        { id: "no-u16l2-eiseng", type: "vocab", front: "ei seng", reading: "eiseng", meaning: "bed", example: { jp: "Kari har ei seng i rommet.", en: "Kari has a bed in the room." }, accept: ["a bed", "bunk"], hint: "SENG. Feminine: definite senga, plural senger. Å legge seg is to go to bed, and senga is where you end up." },
        { id: "no-u16l2-enstol", type: "vocab", front: "en stol", reading: "enstol", meaning: "chair", example: { jp: "Vi har en stol i stua.", en: "We have a chair in the living room." }, accept: ["a chair", "seat"], hint: "STOOL — and it is an ordinary chair with a back, not the English backless \"stool\". Masculine: definite stolen, plural stoler. An armchair is en lenestol." },
        { id: "no-u16l2-eihylle", type: "vocab", front: "ei hylle", reading: "eihylle", meaning: "shelf", example: { jp: "På hylla er det en kopp.", en: "On the shelf there is a cup." }, accept: ["a shelf", "rack", "ledge"], hint: "HUEL-le. Feminine: definite hylla, plural hyller. Ei bokhylle is a bookshelf — bok welded onto hylle, the compounding pattern from sykehus." },
        { id: "no-u16l2-etteppe", type: "vocab", front: "et teppe", reading: "etteppe", meaning: "rug", example: { jp: "Kari kjøper et teppe til stua.", en: "Kari is buying a rug for the living room." }, accept: ["a carpet", "carpet", "blanket", "a rug", "a blanket"], hint: "TEP-pe. Neuter: definite teppet, plural tepper. Both the rug on the floor and the blanket on a bed — one word for both. The throw over your legs is et pledd." },
        { id: "no-u16l2-eilampe", type: "vocab", front: "ei lampe", reading: "eilampe", meaning: "lamp", example: { jp: "Det er ei lampe på bordet.", en: "There is a lamp on the table." }, accept: ["a lamp", "light"], hint: "LAM-pe. Feminine: definite lampa, plural lamper. Norway is dark for half the year, so lamper are not decoration — they are the reason the rooms feel the way they do." },
        { id: "no-u16l2-etbilde", type: "vocab", front: "et bilde", reading: "etbilde", meaning: "picture", example: { jp: "Erling ser på et bilde.", en: "Erling is looking at a picture." }, accept: ["a picture", "photo", "image", "painting", "photograph"], hint: "BIL-de. Neuter: definite bildet, plural bilder. A photo, a painting or a picture on a screen — one word covers all three. Å se på is to look AT something, where plain å se is just to see." },
      ],
    },
    // Lesson 3: the kitchen and the bathroom. Unit 6 owns the cutlery
    // (gaffel, kniv, skje, skål); this is what surrounds it.
    {
      id: "no-u16l3",
      unit: 16,
      lesson: 3,
      title: "På kjøkkenet og badet",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name what a Norwegian kitchen and bathroom hold — tallerken, gryte, ovn, speil, såpe, håndkle — and say what there is in each room.",
      items: [
        { id: "no-u16l3-entallerken", type: "vocab", front: "en tallerken", reading: "entallerken", meaning: "plate", example: { jp: "Det er en fisk på tallerkenen.", en: "There is a fish on the plate." }, accept: ["a plate", "dish"], hint: "tal-LÆR-ken. Masculine: definite tallerkenen, plural tallerkener. Unit 6 gave you ei skål, the bowl; this is the flat one beside it." },
        { id: "no-u16l3-eigryte", type: "vocab", front: "ei gryte", reading: "eigryte", meaning: "pot", example: { jp: "Jeg lager middag i ei gryte.", en: "I am making dinner in a pot." }, accept: ["a pot", "saucepan", "pan", "casserole"], hint: "GRUE-te, hard g. Feminine: definite gryta, plural gryter. The deep pot on the stove — and lapskaus, the stew that lives in it." },
        { id: "no-u16l3-enovn", type: "vocab", front: "en ovn", reading: "enovn", meaning: "oven", example: { jp: "Det er et brød i ovnen.", en: "There is a loaf of bread in the oven." }, accept: ["an oven", "stove", "cooker", "heater"], hint: "OVN, both consonants sounded. Masculine: definite ovnen, plural ovner. It is also the heater in a room — en vedovn is the wood stove a hytte is built around." },
        { id: "no-u16l3-etspeil", type: "vocab", front: "et speil", reading: "etspeil", meaning: "mirror", example: { jp: "Erling ser i speilet.", en: "Erling is looking in the mirror." }, accept: ["a mirror", "looking glass"], hint: "SPEIL, with the ei diphthong of hei and reise. Neuter: definite speilet, plural speil, unchanged. Note på badet — rooms of a house take på here, the same as på skolen in unit 7." },
        { id: "no-u16l3-eisape", type: "vocab", front: "ei såpe", reading: "eisape", meaning: "soap", example: { jp: "Såpa er på badet.", en: "The soap is in the bathroom." }, accept: ["a bar of soap", "the soap"], hint: "SAW-pe, with the rounded å. Feminine: definite såpa. The reading folds to eisape on its own — å DOES decompose, unlike ø, so this one needed no hand-work." },
        { id: "no-u16l3-ethandkle", type: "vocab", front: "et håndkle", reading: "ethandkle", meaning: "towel", example: { jp: "Det er et håndkle på hylla.", en: "There is a towel on the shelf." }, accept: ["a towel"], hint: "HON-kle — hånd, hand, plus klede, cloth: a hand-cloth. Neuter: definite håndkleet, and the plural is håndklær, which ends exactly the way klær does." },
      ],
    },
    // Lesson 4: the home as an address — a flat, a neighbour, moving in,
    // and the two surfaces everything else sits on.
    {
      id: "no-u16l4",
      unit: 16,
      lesson: 4,
      title: "Hjemme hos folk",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where you live and who lives next door, say you are moving or tidying up, and put things on the floor and the wall.",
      items: [
        { id: "no-u16l4-enleilighet", type: "vocab", front: "en leilighet", reading: "enleilighet", meaning: "flat", example: { jp: "Anna bor i en leilighet i Oslo.", en: "Anna lives in a flat in Oslo." }, accept: ["an apartment", "apartment", "a flat"], hint: "LAY-li-het. Masculine: definite leiligheten, plural leiligheter. Most Norwegians in a city live in one. The ending -het builds abstract nouns the way English -ness does, and it always takes en." },
        { id: "no-u16l4-ennabo", type: "vocab", front: "en nabo", reading: "ennabo", meaning: "neighbour", example: { jp: "Her bor naboen min.", en: "My neighbour lives here." }, accept: ["a neighbor", "neighbor", "neighbour", "next-door neighbour"], hint: "NAH-bo. Masculine: definite naboen, plural naboer. Watch the word order: with her opening the sentence, the verb still has to come second, so the subject drops in behind it — Her bor naboen min, never Her naboen min bor." },
        { id: "no-u16l4-aflytte", type: "vocab", front: "å flytte", reading: "aflytte", meaning: "to move", example: { jp: "Vi flytter til Bergen.", en: "We are moving to Bergen." }, accept: ["move", "to move house", "move house", "relocate", "to relocate"], hint: "FLUET-te, present flytter. Moving house — and moving any object: flytt stolen, move the chair." },
        { id: "no-u16l4-etgulv", type: "vocab", front: "et gulv", reading: "etgulv", meaning: "floor", example: { jp: "Det er et teppe på gulvet.", en: "There is a rug on the floor." }, accept: ["a floor", "the floor", "ground"], hint: "GUELV, hard g. Neuter: definite gulvet, plural gulv, unchanged. This is the surface you walk on; a storey of a building is en etasje, a completely different word." },
        { id: "no-u16l4-envegg", type: "vocab", front: "en vegg", reading: "envegg", meaning: "wall", example: { jp: "Det er et bilde på veggen.", en: "There is a picture on the wall." }, accept: ["a wall"], hint: "VEGG. Masculine: definite veggen, plural vegger. An inside wall or the outside of a house; a free-standing garden wall is en mur." },
        { id: "no-u16l4-arydde", type: "vocab", front: "å rydde", reading: "arydde", meaning: "to tidy up", example: { jp: "Jeg rydder i stua.", en: "I am tidying up in the living room." }, accept: ["tidy", "to tidy", "tidy up", "clean up", "to clear up", "clear up"], hint: "RUED-de, present rydder. To tidy or clear away — the full phrase is å rydde opp. Keep it apart from å vaske in unit 15: rydde puts things where they belong, vaske gets them clean." },
      ],
    },
  ],
};
