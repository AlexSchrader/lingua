// DE Unit 30 — Home and household (slot: home) — A2
// Conventions and the FREE list live in de/unit1.js — read that header first.
// The CROSS-BLOCK COLLISION LEDGER is in de/unit21.js — read that before authoring.
//
// The last unit of block 1, and the close of German A2's first third.
//
// A1 u15 owns the rooms and the furniture: Zimmer, Schlafzimmer, Bad, Flur,
// Garten, Keller, Bett, Tisch, Stuhl, Schrank, Sofa, Regal, Fenster, Wand, Boden,
// Treppe, Lampe, Teppich, Schlüssel, Bild, Spiegel, Licht, Kühlschrank, Kissen.
// MY OWN u21 owns aufräumen, putzen, das Geschirr, die Wäsche and der Müll.
// All blocked. This unit is the layer above: renting and moving rather than
// living, the appliances rather than the furniture, and fixing the place up.
//
// FOUR CANDIDATES DROPPED BY THE SCREEN:
//   der Nachbar    block 2's at u32
//   der Strom      block 2's at u34
//   die Kerze      block 2's at u40
//   der Vermieter  one lexeme with die Miete, which I kept
//
// ONE GLOSS SET BY THE ENGINE RATHER THAN BY TASTE. der Stock is glossed "the
// storey", not "the floor", because A1 u15's der Boden is already "the floor" and
// normalizeMeaning would canonicalize both to "floor". Same reason der Herd is
// "the cooker" against der Ofen's "the oven" — a real German distinction that also
// happens to keep the two canonical glosses apart.
//
// der Mülleimer is kept beside u21's der Müll on the compound rule established in
// u27 and u28: Müll + Eimer builds on a taught word rather than replacing it.
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT30 = {
  id: "de-u30",
  lang: "de",
  title: "Wohnen und Haushalt",
  order: 30,
  stage: "a2",
  lessons: [
    {
      id: "de-u30l1",
      unit: 30,
      lesson: 1,
      title: "Die Wohnung mieten",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Rent and move: talk about the rent, moving house, the lift, which floor you live on, and the letterbox.",
      items: [
        { id: "de-u30l1-diemiete", type: "vocab", front: "die Miete", reading: "diemiete", meaning: "the rent", example: { jp: "Die Miete für die Wohnung ist hoch.", en: "The rent for the flat is high." }, drill: { jp: "Die Miete für die Wohnung ist hoch", en: "The rent for the flat is high" }, accept: ["the rent", "rent"], hint: "mieten is to rent FROM someone, vermieten to rent TO them — the ver- flips the direction. Germany is a nation of renters, so this word does a lot of work." },
        { id: "de-u30l1-umziehen", type: "vocab", front: "umziehen", reading: "umziehen", meaning: "to move house", example: { jp: "Wir ziehen im Sommer um.", en: "We are moving house in the summer." }, drill: { jp: "Wir wollen im Sommer umziehen", en: "We want to move house in the summer" }, accept: ["to move house", "to move", "move house", "to relocate"], hint: "Separable: ich ziehe um. The same ziehen as in u17's anziehen — moving house is a pulling-around. Der Umzug is the move itself." },
        { id: "de-u30l1-deraufzug", type: "vocab", front: "der Aufzug", reading: "deraufzug", meaning: "the lift", example: { jp: "Der Aufzug in dem Haus ist kaputt.", en: "The lift in the building is broken." }, drill: { jp: "Der Aufzug in dem Haus ist kaputt", en: "The lift in the building is broken" }, accept: ["the lift", "lift", "the elevator", "elevator"], hint: "auf + Zug, a pulling-up — the same Zug as the train in u18, because both are things that get pulled. Also the word for an act in a play." },
        { id: "de-u30l1-daserdgeschoss", type: "vocab", front: "das Erdgeschoss", reading: "daserdgeschoss", meaning: "the ground floor", example: { jp: "Das Erdgeschoss ist sehr dunkel.", en: "The ground floor is very dark." }, drill: { jp: "Das Erdgeschoss ist sehr dunkel", en: "The ground floor is very dark" }, accept: ["the ground floor", "ground floor", "the first floor"], hint: "Erde + Geschoss, the earth-storey. It is NOT counted as a floor: the first Stock is one above it, so German numbering runs one behind the American." },
        { id: "de-u30l1-derstock", type: "vocab", front: "der Stock", reading: "derstock", meaning: "the storey", example: { jp: "Der Stock über uns ist leer.", en: "The storey above us is empty." }, drill: { jp: "Der Stock über uns ist leer", en: "The storey above us is empty" }, accept: ["the storey", "storey", "the floor", "the level"], hint: "Im ersten Stock is one floor above the ground. The same word means a stick — the sense is an upright section, stacked." },
        { id: "de-u30l1-derbriefkasten", type: "vocab", front: "der Briefkasten", reading: "derbriefkasten", meaning: "the letterbox", example: { jp: "Der Briefkasten ist heute leer.", en: "The letterbox is empty today." }, drill: { jp: "Der Briefkasten ist heute leer", en: "The letterbox is empty today" }, accept: ["the letterbox", "letterbox", "the mailbox", "the postbox"], hint: "Brief + Kasten, letter-box, built exactly as English does it. It covers both the one on your door and the public one you post into." },
      ],
    },
    {
      id: "de-u30l2",
      unit: 30,
      lesson: 2,
      title: "Geräte im Haushalt",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the machines that run a home — cooker, oven, dishwasher, washing machine, vacuum cleaner, bin — and say when one is broken.",
      items: [
        { id: "de-u30l2-derherd", type: "vocab", front: "der Herd", reading: "derherd", meaning: "the cooker", example: { jp: "Der Herd in der Küche ist neu.", en: "The cooker in the kitchen is new." }, drill: { jp: "Der Herd in der Küche ist neu", en: "The cooker in the kitchen is new" }, accept: ["the cooker", "cooker", "the stove", "the hob"], hint: "The top you cook ON, as against der Ofen below, which is the box you bake IN. English blurs them into stove; German does not." },
        { id: "de-u30l2-derofen", type: "vocab", front: "der Ofen", reading: "derofen", meaning: "the oven", example: { jp: "Der Ofen ist sehr heiß.", en: "The oven is very hot." }, drill: { jp: "Der Ofen ist sehr heiß", en: "The oven is very hot" }, accept: ["the oven", "oven", "the furnace"], hint: "Cognate with oven, and it also covers a heating stove. Plural umlauts: die Öfen." },
        { id: "de-u30l2-diespulmaschine", type: "vocab", front: "die Spülmaschine", reading: "diespulmaschine", meaning: "the dishwasher", example: { jp: "Die Spülmaschine ist heute kaputt.", en: "The dishwasher is broken today." }, drill: { jp: "Die Spülmaschine ist heute kaputt", en: "The dishwasher is broken today" }, accept: ["the dishwasher", "dishwasher"], hint: "spülen is to rinse — you met Geschirr spülen in u21. Every -maschine compound is feminine, because die Maschine is and the last word decides." },
        { id: "de-u30l2-diewaschmaschine", type: "vocab", front: "die Waschmaschine", reading: "diewaschmaschine", meaning: "the washing machine", example: { jp: "Die Waschmaschine ist in dem Keller.", en: "The washing machine is in the cellar." }, drill: { jp: "Die Waschmaschine ist in dem Keller", en: "The washing machine is in the cellar" }, accept: ["the washing machine", "washing machine", "the washer"], hint: "Built on u21's sich waschen and die Wäsche. In a German block of flats it genuinely often lives in the cellar, shared." },
        { id: "de-u30l2-derstaubsauger", type: "vocab", front: "der Staubsauger", reading: "derstaubsauger", meaning: "the vacuum cleaner", example: { jp: "Der Staubsauger ist sehr laut.", en: "The vacuum cleaner is very loud." }, drill: { jp: "Der Staubsauger ist sehr laut", en: "The vacuum cleaner is very loud" }, accept: ["the vacuum cleaner", "vacuum cleaner", "the hoover", "the vacuum"], hint: "Staub is dust and saugen is to suck — the dust-sucker. German names appliances by what they do, which makes them long and guessable." },
        { id: "de-u30l2-dermulleimer", type: "vocab", front: "der Mülleimer", reading: "dermulleimer", meaning: "the bin", example: { jp: "Der Mülleimer in der Küche ist voll.", en: "The bin in the kitchen is full." }, drill: { jp: "Der Mülleimer in der Küche ist voll", en: "The bin in the kitchen is full" }, accept: ["the bin", "bin", "the rubbish bin", "the trash can", "the wastebasket"], hint: "u21's Müll plus der Eimer, a bucket. Germans sort their rubbish into several of these, so the plural gets used more than you would expect." },
      ],
    },
    {
      id: "de-u30l3",
      unit: 30,
      lesson: 3,
      title: "Bad und Wohnzimmer",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe the fittings of a home: towel and soap, curtain, ceiling, roof, and the heating.",
      items: [
        { id: "de-u30l3-dashandtuch", type: "vocab", front: "das Handtuch", reading: "dashandtuch", meaning: "the towel", example: { jp: "Das Handtuch im Bad ist weiß.", en: "The towel in the bathroom is white." }, drill: { jp: "Das Handtuch im Bad ist weiß", en: "The towel in the bathroom is white" }, accept: ["the towel", "towel", "the hand towel"], hint: "u11's Hand plus das Tuch, a cloth. Das Handtuch werfen is to throw in the towel, exactly as in English." },
        { id: "de-u30l3-dieseife", type: "vocab", front: "die Seife", reading: "dieseife", meaning: "the soap", example: { jp: "Die Seife im Bad ist neu.", en: "The soap in the bathroom is new." }, drill: { jp: "Die Seife im Bad ist neu", en: "The soap in the bathroom is new" }, accept: ["the soap", "soap"], hint: "A cognate of soap once you allow for the vowel — ZY-feh. The ei is always said like English eye, never like ee." },
        { id: "de-u30l3-dervorhang", type: "vocab", front: "der Vorhang", reading: "dervorhang", meaning: "the curtain", example: { jp: "Der Vorhang vor dem Fenster ist blau.", en: "The curtain in front of the window is blue." }, drill: { jp: "Der Vorhang vor dem Fenster ist blau", en: "The curtain in front of the window is blue" }, accept: ["the curtain", "curtain", "the drape"], hint: "vor + hängen, the thing that hangs in front. The same word for a theatre curtain." },
        { id: "de-u30l3-diedecke", type: "vocab", front: "die Decke", reading: "diedecke", meaning: "the ceiling", example: { jp: "Die Decke in dem Zimmer ist hoch.", en: "The ceiling in the room is high." }, drill: { jp: "Die Decke in dem Zimmer ist hoch", en: "The ceiling in the room is high" }, accept: ["the ceiling", "ceiling", "the blanket", "the cover"], hint: "Also a blanket, and a tablecloth — anything that covers, from decken. Context does all the work, and it usually does it easily." },
        { id: "de-u30l3-dasdach", type: "vocab", front: "das Dach", reading: "dasdach", meaning: "the roof", example: { jp: "Das Dach von dem Haus ist rot.", en: "The roof of the house is red." }, drill: { jp: "Das Dach von dem Haus ist rot", en: "The roof of the house is red" }, accept: ["the roof", "roof"], hint: "Related to decken and so to die Decke above — a roof is what covers. The ch is the rasped sound, as in u1's Buch." },
        { id: "de-u30l3-dieheizung", type: "vocab", front: "die Heizung", reading: "dieheizung", meaning: "the heating", example: { jp: "Die Heizung im Winter ist teuer.", en: "The heating in winter is expensive." }, drill: { jp: "Die Heizung im Winter ist teuer", en: "The heating in winter is expensive" }, accept: ["the heating", "heating", "the radiator", "the heater"], hint: "From heiß in u8 by way of heizen, to heat. It means both the system and the radiator on the wall." },
      ],
    },
    {
      id: "de-u30l4",
      unit: 30,
      lesson: 4,
      title: "Reparieren und einrichten",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Fix and furnish: use tools, repair something, furnish a room, and say whether a place feels cosy or cramped.",
      items: [
        { id: "de-u30l4-daswerkzeug", type: "vocab", front: "das Werkzeug", reading: "daswerkzeug", meaning: "the tool", example: { jp: "Das Werkzeug liegt in dem Keller.", en: "The tool is in the cellar." }, drill: { jp: "Das Werkzeug liegt in dem Keller", en: "The tool is in the cellar" }, accept: ["the tool", "tool", "the tools", "the toolkit"], hint: "Werk, a work, plus Zeug, stuff — work-stuff. Usually said as a singular for the whole set, the way English says equipment." },
        { id: "de-u30l4-reparieren", type: "vocab", front: "reparieren", reading: "reparieren", meaning: "to repair", example: { jp: "Der Vater repariert die Lampe.", en: "The father repairs the lamp." }, drill: { jp: "Wir müssen die Lampe reparieren", en: "We have to repair the lamp" }, accept: ["to repair", "repair", "to fix", "to mend"], hint: "One of the -ieren borrowings, like u27's reduziert — they never take ge- in the participle: repariert, not gerepariert." },
        { id: "de-u30l4-einrichten", type: "vocab", front: "einrichten", reading: "einrichten", meaning: "to furnish", example: { jp: "Wir richten das Zimmer ein.", en: "We are furnishing the room." }, drill: { jp: "Wir wollen das Zimmer einrichten", en: "We want to furnish the room" }, accept: ["to furnish", "furnish", "to set up", "to fit out"], hint: "Separable: ich richte ein. Die Einrichtung is the furnishings as a whole — and, in another sense, an institution." },
        { id: "de-u30l4-gemutlich", type: "vocab", front: "gemütlich", reading: "gemutlich", meaning: "cosy", example: { jp: "Das Zimmer ist sehr gemütlich.", en: "The room is very cosy." }, drill: { jp: "Das Zimmer ist sehr gemütlich", en: "The room is very cosy" }, accept: ["cosy", "cozy", "snug", "comfortable"], hint: "The word Germans will tell you has no English equivalent, and they are close to right: warmth, ease and no hurry, of a room or an evening or a person." },
        { id: "de-u30l4-eng", type: "vocab", front: "eng", reading: "eng", meaning: "cramped", example: { jp: "Die Wohnung ist klein und eng.", en: "The flat is small and cramped." }, drill: { jp: "Die Wohnung ist klein und eng", en: "The flat is small and cramped" }, accept: ["cramped", "narrow", "tight", "close"], hint: "Cognate with English anguish and anxiety, all from a root meaning narrow. Of clothes it means tight; of friends, close." },
        { id: "de-u30l4-dieklingel", type: "vocab", front: "die Klingel", reading: "dieklingel", meaning: "the doorbell", example: { jp: "Die Klingel an der Tür ist kaputt.", en: "The doorbell on the door is broken." }, drill: { jp: "Die Klingel an der Tür ist kaputt", en: "The doorbell on the door is broken" }, accept: ["the doorbell", "doorbell", "the bell"], hint: "An echo word — it sounds like what it does. klingeln is to ring, and es klingelt means someone is at the door." },
      ],
    },
  ],
};
