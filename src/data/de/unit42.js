// DE Unit 42 — Im Restaurant (slot: vocabulary 3 (A2)) — A2
// Block 3 (u41–u50). Conventions: see de/unit1.js.
//
// THEME CHOSEN BY THIS SEAT, and signed off by the crew lead before authoring.
// A1's u7 taught das Restaurant as a building on a map and never went inside.
// This unit is the transaction: getting a table, ordering, the food arriving,
// and paying. It follows u41 deliberately — a restaurant unit needs a kitchen
// unit behind it, and the two share schmecken, frisch, süß and der Teller.
//
// BOUNDARY RULED BY THE LEAD: u35 is culture and leisure — what you go and SEE.
// Ordering, paying and being served is a transaction, so it is this unit's, and
// u35 stays off food service entirely. u27 buys groceries; this eats out.
// CROSS-BLOCK RULING (lead, dev-01): frei lost to block 1 u23 and der Gast to
// block 2 u40; both replaced from this unit's own reserve list. Three glosses
// re-cut off shared meaning fields — satt off A1 u10 voll, das Getränk off A1 u6
// trinken, probieren off u41 schmecken. The distinguishing clause goes OUTSIDE
// brackets: normalizeMeaning (answer.js:83) STRIPS parentheticals, so "full
// (after eating)" collapses back to "full" and an em dash survives.
// BUT THE GLOSS IS NOT THE LAYER THAT DECIDES. satt and A1 u10 voll BOTH carry
// "full" in accept[], so a learner typing "full" matches either card whatever the
// gloss says. Re-cutting the gloss cannot clear that; only editing accept[] can.
// DELIBERATELY NOT EDITED. Removing "full" from satt would mark the single most
// natural English answer wrong, and answer.js:78 says in terms that meaning
// answers are lenient BY DESIGN because pickiness was the #1 typing friction.
// German splits what English merges — voll is a full container, satt is a fed
// person — so this is a real cross-language overlap, the Sie/sie trade again:
// a cost, not a defect. The two glosses teach the difference; accept[] stays kind.
// xblock-de will keep reporting it; that is the tool being conservative, and its
// keys() additionally truncates at the em dash where normalizeMeaning does not.
// Rejected as already taught: der Platz, warten (u7, u18), die Küche (u1) — all
// used freely in examples instead.
// Rejected as the same lexeme: zahlen (~bezahlen u16, and ~die Zahl u16),
// die Bestellung (~bestellen, taught in this unit's own lesson 2), bedienen
// (~die Bedienung, same), die Nachspeise (~nach u14, and a second word for
// der Nachtisch, which this unit already teaches).
// Kept deliberately, all three true compounds of a taught word: die Speisekarte,
// der Nachtisch, das Trinkgeld. u11's das Krankenhaus over u7's das Haus set the
// precedent — none of the three is assemblable from its parts, and a learner who
// knows Karte, Tisch and Geld gets neither menu, dessert nor tip from them.
// RESERVE, screened clear against all 504 taught fronts, for merge-day
// substitution: die Kneipe, das Lokal, das Menü, die Theke, das Besteck,
// bedienen, die Bar.
// FREE: Restaurant, Hotel, Café, Salat, Suppe, Pizza, Euro, Portion, Serviette | Gäste, Getränke, Gläser, Tische, Rechnungen
export const DE_UNIT42 = {
  id: "de-u42",
  lang: "de",
  title: "Im Restaurant",
  order: 42,
  stage: "a2",
  lessons: [
    {
      id: "de-u42l1",
      unit: 42,
      lesson: 1,
      title: "Einen Tisch bekommen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Get a table: book one ahead, ask whether it is free or taken, and name the people who work there.",
      items: [
        { id: "de-u42l1-reservieren", type: "vocab", front: "reservieren", reading: "reservieren", meaning: "to reserve", example: { jp: "Wir möchten einen Tisch für heute Abend reservieren.", en: "We would like to reserve a table for this evening." }, drill: { jp: "Wir reservieren einen Tisch für morgen", en: "We are reserving a table for tomorrow" }, accept: ["to reserve", "to book"], hint: "Same word as English reserve. Einen Tisch reservieren is the whole phrase you need on the phone." },
        { id: "de-u42l1-dietheke", type: "vocab", front: "die Theke", reading: "dietheke", meaning: "the counter", example: { jp: "An der Theke kann ich auch essen.", en: "I can eat at the counter too." }, drill: { jp: "Die Theke ist sehr lang", en: "The counter is very long" }, accept: ["the counter", "the bar"], hint: "Where the drinks are poured and where you stand if no table is left. The th is a plain t." },
        { id: "de-u42l1-derkellner", type: "vocab", front: "der Kellner", reading: "derkellner", meaning: "the waiter", example: { jp: "Der Kellner gibt uns die Karte.", en: "The waiter gives us the menu." }, drill: { jp: "Der Kellner gibt uns die Karte", en: "The waiter gives us the menu" }, accept: ["the waiter", "the server"], hint: "A woman is die Kellnerin. Plural identical to the singular: der Kellner, die Kellner." },
        { id: "de-u42l1-diebedienung", type: "vocab", front: "die Bedienung", reading: "diebedienung", meaning: "the service", example: { jp: "Die Bedienung ist hier sehr gut, deshalb kommen wir oft.", en: "The service is very good here, which is why we come often." }, drill: { jp: "Die Bedienung ist heute sehr gut", en: "The service is very good today" }, accept: ["the service", "the waiting staff"], hint: "Both the service you get and the person giving it — Bedienung! is how you call one over." },
        { id: "de-u42l1-daslokal", type: "vocab", front: "das Lokal", reading: "daslokal", meaning: "the eating place", example: { jp: "Im Lokal kann ich gut essen.", en: "I can eat well in that place." }, drill: { jp: "Das Lokal ist heute voll", en: "The place is full today" }, accept: ["the eating place", "the restaurant", "the pub", "the venue"], hint: "The everyday word for any pub or restaurant you eat in — wider than das Restaurant and much more common in speech." },
        { id: "de-u42l1-besetzt", type: "vocab", front: "besetzt", reading: "besetzt", meaning: "taken / occupied", example: { jp: "Der große Tisch am Fenster ist besetzt.", en: "The big table by the window is taken." }, drill: { jp: "Der Tisch ist heute besetzt", en: "The table is taken today" }, accept: ["taken", "occupied", "engaged", "busy"], hint: "The exact opposite of frei. Also what a phone line says when it is engaged." },
      ],
    },
    {
      id: "de-u42l2",
      unit: 42,
      lesson: 2,
      title: "Bestellen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the menu, choose, order, and ask what the waiter recommends.",
      items: [
        { id: "de-u42l2-diespeisekarte", type: "vocab", front: "die Speisekarte", reading: "diespeisekarte", meaning: "the menu", example: { jp: "Die Speisekarte liegt hier auf dem Tisch.", en: "The menu is lying here on the table." }, drill: { jp: "Die Speisekarte liegt auf dem Tisch", en: "The menu is lying on the table" }, accept: ["the menu"], hint: "Speise, a dish, plus Karte. Everyone shortens it to die Karte in speech." },
        { id: "de-u42l2-bestellen", type: "vocab", front: "bestellen", reading: "bestellen", meaning: "to order", example: { jp: "Wir bestellen zwei Bier und ein Wasser.", en: "We are ordering two beers and a water." }, drill: { jp: "Wir bestellen zwei Bier und Wasser", en: "We are ordering two beers and water" }, accept: ["to order"], hint: "In a restaurant and online alike. The noun is die Bestellung, your order." },
        { id: "de-u42l2-wahlen", type: "vocab", front: "wählen", reading: "wahlen", meaning: "to choose", example: { jp: "Wir wählen das Hauptgericht zusammen.", en: "We choose the main course together." }, drill: { jp: "Wir wählen das Hauptgericht zusammen", en: "We choose the main course together" }, accept: ["to choose", "to select", "to pick"], hint: "Also to vote and to dial a number — one verb for all three." },
        { id: "de-u42l2-empfehlen", type: "vocab", front: "empfehlen", reading: "empfehlen", meaning: "to recommend", example: { jp: "Was können Sie uns heute empfehlen?", en: "What can you recommend to us today?" }, drill: { jp: "Wir empfehlen das Brot mit Käse", en: "We recommend the bread with cheese" }, accept: ["to recommend", "to suggest"], hint: "The person is dative, the thing accusative: ich empfehle IHNEN DEN Fisch. Stem change: er empfiehlt." },
        { id: "de-u42l2-dasgetrank", type: "vocab", front: "das Getränk", reading: "dasgetrank", meaning: "the beverage", example: { jp: "Das Getränk kostet vier Euro.", en: "The drink costs four euros." }, drill: { jp: "Das Getränk kostet vier Euro", en: "The drink costs four euros" }, accept: ["the drink", "the beverage"], hint: "Built on trinken. The Ge- prefix makes a noun of the whole activity — the same shape as das Gemüse." },
        { id: "de-u42l2-dieflasche", type: "vocab", front: "die Flasche", reading: "dieflasche", meaning: "the bottle", example: { jp: "Die Flasche Wasser ist leer, wir brauchen noch eine.", en: "The bottle of water is empty, we need another one." }, drill: { jp: "Die Flasche Wasser ist leer", en: "The bottle of water is empty" }, accept: ["the bottle"], hint: "No von between them: eine Flasche Wasser, a bottle of water. German just stacks the two nouns." },
      ],
    },
    {
      id: "de-u42l3",
      unit: 42,
      lesson: 3,
      title: "Das Essen kommt",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the three courses, say the food is being served, and say you are trying something or that the portion is wrong.",
      items: [
        { id: "de-u42l3-dievorspeise", type: "vocab", front: "die Vorspeise", reading: "dievorspeise", meaning: "the starter", example: { jp: "Die Vorspeise kommt sehr schnell, das Hauptgericht nicht.", en: "The starter comes very quickly, the main course does not." }, drill: { jp: "Die Vorspeise kommt sehr schnell", en: "The starter comes very quickly" }, accept: ["the starter", "the appetiser", "the first course"], hint: "vor, before, plus Speise, dish — the dish that comes before." },
        { id: "de-u42l3-dashauptgericht", type: "vocab", front: "das Hauptgericht", reading: "dashauptgericht", meaning: "the main course", example: { jp: "Das Hauptgericht ist heute sehr gut.", en: "The main course is very good today." }, drill: { jp: "Das Hauptgericht schmeckt sehr gut", en: "The main course tastes very good" }, accept: ["the main course", "the main dish", "the entree"], hint: "Haupt- means main or head, and it starts dozens of German compounds — die Hauptstadt is the capital." },
        { id: "de-u42l3-dernachtisch", type: "vocab", front: "der Nachtisch", reading: "dernachtisch", meaning: "the dessert", example: { jp: "Nach dem Essen nehmen wir einen Nachtisch.", en: "After the meal we will have a dessert." }, drill: { jp: "Der Nachtisch ist sehr gut", en: "The dessert is very good" }, accept: ["the dessert", "the pudding", "the sweet"], hint: "Literally after-table, and nothing to do with die Nacht, night. Zum Nachtisch is the set phrase." },
        { id: "de-u42l3-servieren", type: "vocab", front: "servieren", reading: "servieren", meaning: "to serve", example: { jp: "Hier servieren sie das Essen um acht Uhr.", en: "Here they serve the food at eight o'clock." }, drill: { jp: "Wir servieren das Essen um acht", en: "We serve the food at eight" }, accept: ["to serve"], hint: "Only food and drink. Serving a customer in a shop is bedienen." },
        { id: "de-u42l3-probieren", type: "vocab", front: "probieren", reading: "probieren", meaning: "to sample", example: { jp: "Du musst den Salat probieren, er ist sehr frisch.", en: "You have to try the salad, it is very fresh." }, drill: { jp: "Wir probieren den Salat und die Suppe", en: "We are trying the salad and the soup" }, accept: ["to try", "to taste", "to sample"], hint: "Trying food, or trying anything out. anprobieren, from u17, is the clothes-shop version." },
        { id: "de-u42l3-dieportion", type: "vocab", front: "die Portion", reading: "dieportion", meaning: "the portion", example: { jp: "Die Portion ist zu klein für den Preis.", en: "The portion is too small for the price." }, drill: { jp: "Die Portion ist zu klein", en: "The portion is too small" }, accept: ["the portion", "the helping", "the serving"], hint: "Stress the end: por-tsi-OHN. The t before -ion says ts, as in every German word of this shape." },
      ],
    },
    {
      id: "de-u42l4",
      unit: 42,
      lesson: 4,
      title: "Am Tisch und die Rechnung",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Finish the meal: say you have had enough, name what is on the table, ask for the bill and leave a tip.",
      items: [
        { id: "de-u42l4-dierechnung", type: "vocab", front: "die Rechnung", reading: "dierechnung", meaning: "the bill", example: { jp: "Wir bezahlen die Rechnung zusammen.", en: "We are paying the bill together." }, drill: { jp: "Die Rechnung kommt an den Tisch", en: "The bill comes to the table" }, accept: ["the bill", "the check", "the invoice"], hint: "Die Rechnung, bitte is how you ask for it. From rechnen, to calculate." },
        { id: "de-u42l4-dastrinkgeld", type: "vocab", front: "das Trinkgeld", reading: "dastrinkgeld", meaning: "the tip", example: { jp: "Das Trinkgeld ist für die Bedienung, nicht für die Küche.", en: "The tip is for the waiting staff, not for the kitchen." }, drill: { jp: "Das Trinkgeld ist für die Bedienung", en: "The tip is for the waiting staff" }, accept: ["the tip", "the gratuity"], hint: "Literally drink-money. In Germany you round up and say the total, rather than leaving coins." },
        { id: "de-u42l4-satt", type: "vocab", front: "satt", reading: "satt", meaning: "full — after eating", example: { jp: "Ich bin satt, deshalb nehme ich keinen Nachtisch.", en: "I am full, so I am not having any dessert." }, drill: { jp: "Ich bin jetzt satt", en: "I am full now" }, accept: ["full", "satisfied", "full up"], hint: "Only about food. Never voll, which for a person means drunk — a genuinely useful thing to keep apart." },
        { id: "de-u42l4-dasglas", type: "vocab", front: "das Glas", reading: "dasglas", meaning: "the glass", example: { jp: "Das Glas ist leer, also bestellen wir noch eins.", en: "The glass is empty, so we will order another one." }, drill: { jp: "Das Glas ist leer", en: "The glass is empty" }, accept: ["the glass"], hint: "Both the material and the thing you drink from. Plural umlauts: die Gläser." },
        { id: "de-u42l4-dieserviette", type: "vocab", front: "die Serviette", reading: "dieserviette", meaning: "the napkin", example: { jp: "Die Serviette liegt neben dem Teller.", en: "The napkin is lying next to the plate." }, drill: { jp: "Die Serviette liegt neben dem Teller", en: "The napkin is lying next to the plate" }, accept: ["the napkin", "the serviette"], hint: "From French, so the ending says -ET-te. Paper or cloth, both the same word." },
        { id: "de-u42l4-dasbesteck", type: "vocab", front: "das Besteck", reading: "dasbesteck", meaning: "the cutlery", example: { jp: "Das Besteck liegt links und rechts neben dem Teller.", en: "The cutlery lies to the left and right of the plate." }, drill: { jp: "Das Besteck liegt auf dem Tisch", en: "The cutlery is lying on the table" }, accept: ["the cutlery", "the silverware", "the flatware"], hint: "One collective noun for knife, fork and spoon together — German has no plural for it." },
      ],
    },
  ],
};
