// DE Unit 80 — Wohnungssuche und Umzug (slot: coverage-b1-7) — B1
// Block 3 (u76-u87), the COVERAGE PASS. Conventions: see de/unit1.js.
//
// WHY THIS THEME. u15 furnishes a flat and u30 rents one (die Miete, umziehen,
// das Erdgeschoss, der Aufzug), and neither teaches the German rental system a
// learner actually collides with: the ad, the viewing, the agent, the deposit,
// the Nebenkosten, the handover, and the renovation clause. This is the single
// most predictable bureaucratic encounter for anyone moving to Germany.
//
// FRONTS DROPPED as already taught, used in examples only:
//   umziehen (u30) + der Umzug (its lexeme) · ausziehen (u18) · der Mieter
//   (lexeme of die Miete u30) · das Erdgeschoss, der Aufzug (u30) · der Keller
//   (u15) · die Etage (gloss owned by der Stock u30).
// GLOSS SPLIT INSIDE THIS BLOCK: die Kaution is "the rental deposit" and
// u79's die Anzahlung is "the down payment" — one English word per card.
export const DE_UNIT80 = {
  id: "de-u80",
  lang: "de",
  title: "Wohnungssuche und Umzug",
  order: 80,
  stage: "b1",
  lessons: [
    {
      id: "de-u80l1",
      unit: 80,
      lesson: 1,
      title: "Eine Wohnung suchen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read a German flat advert and turn up at the viewing.",
      items: [
        { id: "de-u80l1-dasinserat", type: "vocab", front: "das Inserat", reading: "dasinserat", meaning: "the classified ad", example: { jp: "Das Inserat für die Wohnung ist neu.", en: "The ad for the flat is new." }, drill: { jp: "Das Inserat ist in der Zeitung", en: "The ad is in the newspaper" }, accept: ["classified ad", "the classified ad", "advert", "the advert", "the listing", "the ad"], hint: "The small ad in a paper or on a website. Also die Anzeige." },
        { id: "de-u80l1-diebesichtigung", type: "vocab", front: "die Besichtigung", reading: "diebesichtigung", meaning: "the viewing", example: { jp: "Die Besichtigung ist am Samstag um drei.", en: "The viewing is on Saturday at three." }, drill: { jp: "Die Besichtigung ist am Samstag", en: "The viewing is on Saturday" }, accept: ["viewing", "the viewing", "inspection", "the inspection", "the tour"], hint: "besichtigen = to look round. Used for flats, museums and factories alike." },
        { id: "de-u80l1-dermakler", type: "vocab", front: "der Makler", reading: "dermakler", meaning: "the estate agent", example: { jp: "Der Makler will Geld für die Wohnung.", en: "The estate agent wants money for the flat." }, drill: { jp: "Der Makler kommt um zwei", en: "The estate agent comes at two" }, accept: ["estate agent", "the estate agent", "broker", "the broker", "realtor", "the agent"], hint: "Also der Immobilienmakler. In Germany whoever hires him pays him." },
        { id: "de-u80l1-mobliert", type: "vocab", front: "möbliert", reading: "mobliert", meaning: "furnished", example: { jp: "Das Zimmer ist möbliert, es hat ein Bett.", en: "The room is furnished, it has a bed." }, drill: { jp: "Die Wohnung ist schon möbliert", en: "The flat is already furnished" }, accept: ["furnished", "fully furnished", "with furniture"], hint: "die Möbel = the furniture. Said 'mö-BLEERT', stress at the end." },
        { id: "de-u80l1-diewohnflache", type: "vocab", front: "die Wohnfläche", reading: "diewohnflache", meaning: "the living space", example: { jp: "Die Wohnfläche ist für uns zu klein.", en: "The living space is too small for us." }, drill: { jp: "Die Wohnfläche ist sehr klein", en: "The living space is very small" }, accept: ["living space", "the living space", "floor space", "the floor area", "the living area"], hint: "wohnen + die Fläche, the area. The number every German ad leads with." },
        { id: "de-u80l1-derquadratmeter", type: "vocab", front: "der Quadratmeter", reading: "derquadratmeter", meaning: "the square metre", example: { jp: "Die Wohnung hat sechzig Quadratmeter.", en: "The flat has sixty square metres." }, drill: { jp: "Der Quadratmeter ist hier teuer", en: "The square metre is expensive here" }, accept: ["square metre", "the square metre", "square meter", "the square meter"], hint: "Written qm or m². German says a flat HAS sixty Quadratmeter." },
      ],
    },
    {
      id: "de-u80l2",
      unit: 80,
      lesson: 2,
      title: "Mieter und Vermieter",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Understand a German tenancy: landlord, deposit, extra costs, house rules.",
      items: [
        { id: "de-u80l2-dermietvertrag", type: "vocab", front: "der Mietvertrag", reading: "dermietvertrag", meaning: "the tenancy agreement", example: { jp: "Der Mietvertrag hat eine lange Laufzeit.", en: "The tenancy agreement has a long term." }, drill: { jp: "Der Mietvertrag ist sehr lang", en: "The tenancy agreement is very long" }, accept: ["tenancy agreement", "the tenancy agreement", "lease", "the lease", "rental contract", "the rental contract"], hint: "die Miete + der Vertrag. German leases are often unbefristet, open-ended." },
        { id: "de-u80l2-dervermieter", type: "vocab", front: "der Vermieter", reading: "dervermieter", meaning: "the landlord", example: { jp: "Der Vermieter wohnt oben im Haus.", en: "The landlord lives upstairs in the building." }, drill: { jp: "Der Vermieter ist sehr nett", en: "The landlord is very nice" }, accept: ["landlord", "the landlord", "the landlady", "the lessor"], hint: "vermieten = to let out; mieten = to rent. The tenant is der Mieter." },
        { id: "de-u80l2-diekaution", type: "vocab", front: "die Kaution", reading: "diekaution", meaning: "the rental deposit", example: { jp: "Für die Wohnung will er eine Kaution.", en: "He wants a deposit for the flat." }, drill: { jp: "Die Kaution ist sehr hoch", en: "The deposit is very high" }, accept: ["rental deposit", "the rental deposit", "deposit", "the deposit", "the security deposit"], hint: "Up to three months' rent, held and given back. Said 'kau-tsi-OHN'." },
        { id: "de-u80l2-dienebenkosten", type: "vocab", front: "die Nebenkosten", reading: "dienebenkosten", meaning: "the extra costs", example: { jp: "Zu der Miete kommen noch die Nebenkosten.", en: "On top of the rent come the extra costs." }, drill: { jp: "Die Nebenkosten sind sehr hoch", en: "The extra costs are very high" }, accept: ["extra costs", "the extra costs", "service charges", "the service charges", "the utilities"], hint: "neben + die Kosten: heating, water, rubbish. Warmmiete = rent WITH them." },
        { id: "de-u80l2-diehausordnung", type: "vocab", front: "die Hausordnung", reading: "diehausordnung", meaning: "the house rules", example: { jp: "Die Hausordnung sagt: am Sonntag ist es ruhig.", en: "The house rules say: on Sunday it is quiet." }, drill: { jp: "Die Hausordnung ist sehr alt", en: "The house rules are very old" }, accept: ["house rules", "the house rules", "the building rules", "the rules of the house"], hint: "das Haus + die Ordnung. It usually forbids noise between 22:00 and 07:00." },
        { id: "de-u80l2-derbewohner", type: "vocab", front: "der Bewohner", reading: "derbewohner", meaning: "the resident", example: { jp: "Die Bewohner im Haus sind sehr nett.", en: "The residents in the building are very nice." }, drill: { jp: "Der Bewohner hat einen Schlüssel", en: "The resident has a key" }, accept: ["resident", "the resident", "occupant", "the occupant", "the inhabitant"], hint: "bewohnen = to live in. Also used for a town's inhabitants." },
      ],
    },
    {
      id: "de-u80l3",
      unit: 80,
      lesson: 3,
      title: "Einziehen und übergeben",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Move in, clear out, hand the keys over and describe the layout.",
      items: [
        { id: "de-u80l3-einziehen", type: "vocab", front: "einziehen", reading: "einziehen", meaning: "to move in", example: { jp: "Wir wollen im August einziehen.", en: "We want to move in in August." }, drill: { jp: "Wir können im August einziehen", en: "We can move in in August" }, accept: ["to move in", "move in", "to take up residence"], hint: "Separable: ich ziehe ein. Out is ausziehen; house-to-house is umziehen." },
        { id: "de-u80l3-raumen", type: "vocab", front: "räumen", reading: "raumen", meaning: "to clear out", example: { jp: "Sie müssen die Wohnung bis Mai räumen.", en: "You have to clear the flat out by May." }, drill: { jp: "Wir müssen das Zimmer räumen", en: "We have to clear the room out" }, accept: ["to clear out", "clear out", "to vacate", "vacate", "to clear"], hint: "der Raum = the space. aufräumen = to tidy up; abräumen = to clear the table." },
        { id: "de-u80l3-dieubergabe", type: "vocab", front: "die Übergabe", reading: "dieubergabe", meaning: "the handover", example: { jp: "Bei der Übergabe geht der Vermieter durch das Haus.", en: "At the handover the landlord walks through the house." }, drill: { jp: "Die Übergabe ist am Freitag", en: "The handover is on Friday" }, accept: ["handover", "the handover", "the handing over", "the transfer"], hint: "übergeben = to hand over. Keys and a written Protokoll change hands." },
        { id: "de-u80l3-dergrundriss", type: "vocab", front: "der Grundriss", reading: "dergrundriss", meaning: "the floor plan", example: { jp: "Der Grundriss zeigt vier Zimmer.", en: "The floor plan shows four rooms." }, drill: { jp: "Der Grundriss ist im Inserat", en: "The floor plan is in the ad" }, accept: ["floor plan", "the floor plan", "the layout", "the ground plan"], hint: "der Grund + der Riss, the drawing. Written with ss, not ß." },
        { id: "de-u80l3-derstellplatz", type: "vocab", front: "der Stellplatz", reading: "derstellplatz", meaning: "the parking space", example: { jp: "Für das Auto gibt es einen Stellplatz.", en: "There is a parking space for the car." }, drill: { jp: "Der Stellplatz kostet zwanzig Euro", en: "The parking space costs twenty euros" }, accept: ["parking space", "the parking space", "the parking spot", "the space"], hint: "stellen + der Platz. Underground it is der Tiefgaragenplatz." },
        { id: "de-u80l3-derdachboden", type: "vocab", front: "der Dachboden", reading: "derdachboden", meaning: "the attic", example: { jp: "Auf dem Dachboden ist es sehr warm.", en: "It is very warm up in the attic." }, drill: { jp: "Der Dachboden ist noch leer", en: "The attic is still empty" }, accept: ["attic", "the attic", "the loft", "the roof space"], hint: "das Dach + der Boden: the floor directly under the roof." },
      ],
    },
    {
      id: "de-u80l4",
      unit: 80,
      lesson: 4,
      title: "Renovieren und reparieren",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Get a flat painted, papered and repaired — and name the damp on the wall.",
      items: [
        { id: "de-u80l4-renovieren", type: "vocab", front: "renovieren", reading: "renovieren", meaning: "to renovate", example: { jp: "Wir wollen die Küche im Sommer renovieren.", en: "We want to renovate the kitchen in the summer." }, drill: { jp: "Wir müssen die Küche renovieren", en: "We have to renovate the kitchen" }, accept: ["to renovate", "renovate", "to do up", "do up", "to refurbish"], hint: "Said 'reno-VEE-ren'. A German lease often demands it before you leave." },
        { id: "de-u80l4-streichen", type: "vocab", front: "streichen", reading: "streichen", meaning: "to paint a wall", example: { jp: "Er will die Wand weiß streichen.", en: "He wants to paint the wall white." }, drill: { jp: "Ich muss die Wand streichen", en: "I have to paint the wall" }, accept: ["to paint a wall", "paint a wall", "to paint", "to give a coat of paint"], hint: "Painting a PICTURE is malen. streichen also means to delete a line." },
        { id: "de-u80l4-dietapete", type: "vocab", front: "die Tapete", reading: "dietapete", meaning: "the wallpaper", example: { jp: "Die Tapete im Flur ist alt.", en: "The wallpaper in the hall is old." }, drill: { jp: "Die Tapete ist sehr dunkel", en: "The wallpaper is very dark" }, accept: ["wallpaper", "the wallpaper", "the paper on the wall"], hint: "tapezieren = to wallpaper. Nothing to do with English tape." },
        { id: "de-u80l4-derhandwerker", type: "vocab", front: "der Handwerker", reading: "derhandwerker", meaning: "the tradesman", example: { jp: "Der Handwerker kommt am Dienstag.", en: "The tradesman comes on Tuesday." }, drill: { jp: "Der Handwerker kommt heute nicht", en: "The tradesman is not coming today" }, accept: ["tradesman", "the tradesman", "craftsman", "the craftsman", "the workman", "the builder"], hint: "die Hand + das Werk. Plumber, electrician, painter — all Handwerker." },
        { id: "de-u80l4-derschimmel", type: "vocab", front: "der Schimmel", reading: "derschimmel", meaning: "the mould", example: { jp: "Im Bad ist Schimmel an der Wand.", en: "There is mould on the wall in the bathroom." }, drill: { jp: "Der Schimmel ist hinter dem Schrank", en: "The mould is behind the cupboard" }, accept: ["mould", "the mould", "mold", "the mold", "the mildew"], hint: "Also a white horse. In a flat it means one thing: lüften, air the rooms." },
        { id: "de-u80l4-derhausmeister", type: "vocab", front: "der Hausmeister", reading: "derhausmeister", meaning: "the caretaker", example: { jp: "Der Hausmeister macht die Treppe sauber.", en: "The caretaker cleans the stairs." }, drill: { jp: "Der Hausmeister ist im Keller", en: "The caretaker is in the cellar" }, accept: ["caretaker", "the caretaker", "janitor", "the janitor", "the building manager"], hint: "das Haus + der Meister. He holds the keys and fixes the small things." },
      ],
    },
  ],
};
