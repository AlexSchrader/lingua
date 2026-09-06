// DE Unit 7 — Town and places (slot: town) — A1
// Conventions and the FREE list live in de/unit1.js — read that header first.
// ⚠️ Everything here is nominative, and that is why this unit teaches dort,
// der Weg, weit and nah rather than the obvious in/neben/hinter/vor/zwischen.
// Those are the TWO-WAY prepositions whose entire point is the accusative/dative
// contrast (in die Stadt vs in der Stadt), and they belong to u13–u14. Teaching
// them here would force the learner to memorise der/den/dem as unrelated words.
// Where a verb takes an object the examples use neuter or feminine nouns only,
// whose accusative is identical to the nominative.
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT7 = {
  id: "de-u7",
  lang: "de",
  title: "Die Stadt",
  order: 7,
  stage: "a1",
  lessons: [
    {
      id: "de-u7l1",
      unit: 7,
      lesson: 1,
      title: "In der Stadt",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the parts of a town — the town itself, a house, a flat, the station, the market and the square.",
      items: [
        { id: "de-u7l1-diestadt", type: "vocab", front: "die Stadt", reading: "diestadt", meaning: "town / city", example: { jp: "Die Stadt ist sehr groß.", en: "The city is very big." }, accept: ["town", "city", "the city", "the town"], hint: "SHTAT — st- is \"sht\" at the start of a word. Plural die Städte, with the umlaut." },
        { id: "de-u7l1-dashaus", type: "vocab", front: "das Haus", reading: "dashaus", meaning: "house", example: { jp: "Das Haus ist alt.", en: "The house is old." }, accept: ["house", "the house", "home"], hint: "HOWS, with the ow of English \"house\". Plural die Häuser." },
        { id: "de-u7l1-diewohnung", type: "vocab", front: "die Wohnung", reading: "diewohnung", meaning: "flat / apartment", example: { jp: "Die Wohnung ist klein.", en: "The flat is small." }, accept: ["flat", "apartment", "the flat", "the apartment"], hint: "Built from wohnen, to live. Nouns ending in -ung are always die — as with die Zeitung." },
        { id: "de-u7l1-derbahnhof", type: "vocab", front: "der Bahnhof", reading: "derbahnhof", meaning: "station", example: { jp: "Der Bahnhof ist dort.", en: "The station is over there." }, accept: ["station", "the station", "train station"], hint: "Bahn (rail) + Hof (yard). Hauptbahnhof, often shortened to Hbf on signs, is the main station." },
        { id: "de-u7l1-dermarkt", type: "vocab", front: "der Markt", reading: "dermarkt", meaning: "market", example: { jp: "Der Markt ist heute hier.", en: "The market is here today." }, accept: ["market", "the market"], hint: "MARKT. The square it happens on is usually called the Marktplatz." },
        { id: "de-u7l1-derplatz", type: "vocab", front: "der Platz", reading: "derplatz", meaning: "square / space", example: { jp: "Der Platz ist groß und schön.", en: "The square is big and beautiful." }, accept: ["square", "the square", "space", "place", "seat"], hint: "PLATS, with the ts of z. Both a town square and \"room\" in the sense of space: Hier ist Platz." },
      ],
    },
    {
      id: "de-u7l2",
      unit: 7,
      lesson: 2,
      title: "Orte",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the places you look for as a visitor — restaurant, hotel, bank, post office, museum and park.",
      items: [
        { id: "de-u7l2-dasrestaurant", type: "vocab", front: "das Restaurant", reading: "dasrestaurant", meaning: "restaurant", example: { jp: "Das Restaurant ist sehr gut.", en: "The restaurant is very good." }, accept: ["restaurant", "the restaurant"], hint: "Borrowed from French and still said that way: res-toh-RAHNG. The German-style alternative is das Lokal." },
        { id: "de-u7l2-dashotel", type: "vocab", front: "das Hotel", reading: "dashotel", meaning: "hotel", example: { jp: "Das Hotel ist nah.", en: "The hotel is nearby." }, accept: ["hotel", "the hotel"], hint: "ho-TELL, stress on the second syllable — unlike English." },
        { id: "de-u7l2-diebank", type: "vocab", front: "die Bank", reading: "diebank", meaning: "bank", example: { jp: "Die Bank ist dort.", en: "The bank is over there." }, accept: ["bank", "the bank", "bench"], hint: "Two words in one: die Banken are banks for money, die Bänke are benches to sit on. The plural tells you which." },
        { id: "de-u7l2-diepost", type: "vocab", front: "die Post", reading: "diepost", meaning: "post office / mail", example: { jp: "Die Post ist hier.", en: "The post office is here." }, accept: ["post office", "post", "mail", "the post"], hint: "Both the building and the letters that arrive. Die Post ist da — the post has come." },
        { id: "de-u7l2-dasmuseum", type: "vocab", front: "das Museum", reading: "dasmuseum", meaning: "museum", example: { jp: "Das Museum ist fantastisch.", en: "The museum is fantastic." }, accept: ["museum", "the museum"], hint: "mu-ZAY-um, four syllables. Plural is irregular: die Museen." },
        { id: "de-u7l2-derpark", type: "vocab", front: "der Park", reading: "derpark", meaning: "park", example: { jp: "Der Park ist sehr schön.", en: "The park is very beautiful." }, accept: ["park", "the park"], hint: "PARK, same as English. Plural die Parks — one of the few German plurals that just adds -s." },
      ],
    },
    {
      id: "de-u7l3",
      unit: 7,
      lesson: 3,
      title: "Der Weg",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Give and follow simple directions: go straight on, it is left, it is right, it is far.",
      items: [
        { id: "de-u7l3-gehen", type: "vocab", front: "gehen", reading: "gehen", meaning: "to go / to walk", example: { jp: "Wir gehen zusammen.", en: "We are going together." }, accept: ["to go", "to walk", "go"], hint: "GAY-en. For going on foot; going by vehicle is fahren. Wie geht's? from u2 is the same verb." },
        { id: "de-u7l3-fahren", type: "vocab", front: "fahren", reading: "fahren", meaning: "to go (by vehicle) / to drive", example: { jp: "Ich fahre morgen.", en: "I am travelling tomorrow." }, drill: { jp: "Wir fahren morgen zusammen", en: "We are travelling together tomorrow" }, accept: ["to drive", "to go by vehicle", "to travel", "to ride"], hint: "Any wheels or rails — car, bike, train. Mixing it up with gehen is the classic English-speaker error." },
        { id: "de-u7l3-links", type: "vocab", front: "links", reading: "links", meaning: "left", example: { jp: "Die Post ist links.", en: "The post office is on the left." }, accept: ["left", "on the left", "to the left"], hint: "Already an adverb, so no extra word is needed: Die Post ist links." },
        { id: "de-u7l3-rechts", type: "vocab", front: "rechts", reading: "rechts", meaning: "right", example: { jp: "Der Markt ist rechts.", en: "The market is on the right." }, accept: ["right", "on the right", "to the right"], hint: "REKHTS. Also the political right, and recht on its own means correct: Du hast recht." },
        { id: "de-u7l3-geradeaus", type: "vocab", front: "geradeaus", reading: "geradeaus", meaning: "straight ahead", example: { jp: "Gehen Sie geradeaus!", en: "Go straight ahead!" }, accept: ["straight ahead", "straight on", "straight"], hint: "gerade (straight) + aus. The single most useful word when someone gives you directions." },
        { id: "de-u7l3-weit", type: "vocab", front: "weit", reading: "weit", meaning: "far", example: { jp: "Der Bahnhof ist weit.", en: "The station is far." }, accept: ["far", "distant", "wide"], hint: "VYTE, with the ei of Zeit. Ist es weit? is how you ask whether somewhere is a walk." },
      ],
    },
    {
      id: "de-u7l4",
      unit: 7,
      lesson: 4,
      title: "Wo ist das?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask where something is, say it is over there or nearby, and say you are looking for it or have found it.",
      items: [
        { id: "de-u7l4-dort", type: "vocab", front: "dort", reading: "dort", meaning: "over there", example: { jp: "Dort ist das Museum.", en: "Over there is the museum." }, accept: ["over there", "there"], hint: "The far counterpart of hier. Da is the everyday spoken version and covers both." },
        { id: "de-u7l4-derweg", type: "vocab", front: "der Weg", reading: "derweg", meaning: "way / path", example: { jp: "Der Weg ist weit.", en: "The way is far." }, accept: ["way", "the way", "path", "route"], hint: "VAYK — long e, final g hardens to k. Not to be confused with weg (away), which is said VEK with a short e." },
        { id: "de-u7l4-diekarte", type: "vocab", front: "die Karte", reading: "diekarte", meaning: "map / card", example: { jp: "Die Karte ist hier.", en: "The map is here." }, accept: ["map", "the map", "card", "ticket", "menu"], hint: "A hard-working word: map, card, ticket, and the menu in a restaurant — die Speisekarte." },
        { id: "de-u7l4-finden", type: "vocab", front: "finden", reading: "finden", meaning: "to find", example: { jp: "Wir finden das Hotel nicht.", en: "We cannot find the hotel." }, accept: ["to find", "find"], hint: "Also \"to think\" in the sense of an opinion: Ich finde das gut — I think that's good." },
        { id: "de-u7l4-suchen", type: "vocab", front: "suchen", reading: "suchen", meaning: "to look for", example: { jp: "Ich suche die Post.", en: "I am looking for the post office." }, drill: { jp: "Wir suchen die Post", en: "We are looking for the post office" }, accept: ["to look for", "to search for", "to seek", "search"], hint: "ZOO-khen. One word where English needs two — no separate \"for\" follows it." },
        { id: "de-u7l4-nah", type: "vocab", front: "nah", reading: "nah", meaning: "near", example: { jp: "Der Park ist sehr nah.", en: "The park is very near." }, accept: ["near", "close", "nearby"], hint: "NAH, the h silent and lengthening. The opposite of weit. In der Nähe means \"in the area\"." },
      ],
    },
  ],
};
