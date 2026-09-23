// DE Unit 118 — Orte und Richtungen (slot: coverage-b2-8) — B2
// Conventions: de/unit1.js + de/unit51.js + de/unit88.js (B2 band constitution).
// Coverage pass — method in u114's header, card count in u115's.
//
// Self-check, dropped as same-lexeme duplicates: die Richtung was CHECKED and
// KEPT — its near hits (das Gericht u75, die Nachricht u33, richtig u20) are all
// false families; richten itself is not taught, so Richtung is a clean front.
// Dropped: der Punkt (puenktlich u21), offen (offenbar u54), heraus is kept but
// its cousin herausfinden was already taught in u114 of this block, so only the
// bare adverb is new here.
// (no FREE declarations needed)
export const DE_UNIT118 = {
  id: "de-u118",
  lang: "de",
  title: "Orte und Richtungen",
  order: 118,
  stage: "b2",
  lessons: [
    {
      id: "de-u118l1",
      unit: 118,
      lesson: 1,
      title: "Überall, irgendwo, drinnen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say where something is without naming the place — everywhere, somewhere, inside, outside, or over there.",
      items: [
        { id: "de-u118l1-ueberall", type: "vocab", front: "überall", reading: "ueberall", meaning: "everywhere", example: { jp: "Überall in der Stadt stehen jetzt neue Häuser, und trotzdem findet kaum jemand eine Wohnung.", en: "Everywhere in the city there are new houses now, and yet hardly anyone finds a flat." }, drill: { jp: "Überall liegt Schnee auf dem Boden", en: "Everywhere there is snow on the ground" }, accept: ["everywhere", "all over", "all around", "throughout"], hint: "Rank 817. über + all. Its opposite is nirgendwo (nowhere), and überallhin means 'to everywhere' — German marks direction separately." },
        { id: "de-u118l1-irgendwo", type: "vocab", front: "irgendwo", reading: "irgendwo", meaning: "somewhere", example: { jp: "Der Schlüssel muss irgendwo im Haus sein, weil ihn seit gestern niemand mit nach draußen genommen hat.", en: "The key must be somewhere in the house, because nobody has taken it outside since yesterday." }, drill: { jp: "Das Buch liegt irgendwo im Zimmer", en: "The book is lying somewhere in the room" }, accept: ["somewhere", "anywhere", "someplace"], hint: "Rank 922. The irgend- family is large and regular: irgendwo (somewhere), irgendwann (u28, sometime), irgendwas (something) — teach one and you can read them all." },
        { id: "de-u118l1-drinnen", type: "vocab", front: "drinnen", reading: "drinnen", meaning: "indoors", example: { jp: "Bei diesem Wetter bleiben wir lieber drinnen und machen den Rest der Arbeit am Tisch.", en: "In this weather we'd rather stay indoors and do the rest of the work at the table." }, drill: { jp: "Die Kinder spielen heute drinnen", en: "The children are playing indoors today" }, accept: ["indoors", "inside", "within"], hint: "Rank 1673. Position only, never movement — to go inside is hinein or just rein. Its pair draußen is the next card." },
        { id: "de-u118l1-draussen", type: "vocab", front: "draußen", reading: "draussen", meaning: "outdoors", example: { jp: "Draußen ist es schon dunkel, deshalb sollten wir den Weg durch den Wald lieber morgen gehen.", en: "It's already dark outside, so we should take the path through the forest tomorrow instead." }, drill: { jp: "Die Gäste warten schon draußen", en: "The guests are already waiting outside" }, accept: ["outdoors", "outside", "out there"], hint: "Rank 507. Pairs with drinnen above. Note the ß — draußen, not 'draussen', because the au is a long diphthong." },
        { id: "de-u118l1-drueben", type: "vocab", front: "drüben", reading: "drueben", meaning: "over on the other side", example: { jp: "Drüben auf der anderen Seite steht ein großes Geschäft.", en: "Over there on the other side stands a large shop." }, drill: { jp: "Drüben steht das alte Haus", en: "Over there stands the old house" }, accept: ["over there", "across", "on the other side"], hint: "Rank 829. Points across something — a street, a river, a border. In German history writing drüben meant the other German state, and older speakers still use it that way." },
      ],
    },
    {
      id: "de-u118l2",
      unit: 118,
      lesson: 2,
      title: "Hierher, herum, entlang",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe movement rather than position — towards here, around, out, along, and to that spot.",
      items: [
        { id: "de-u118l2-hierher", type: "vocab", front: "hierher", reading: "hierher", meaning: "to here", example: { jp: "Komm bitte hierher, weil man von dieser Stelle aus den ganzen Platz sehen kann.", en: "Please come over here, because from this spot you can see the whole square." }, drill: { jp: "Bring den Stuhl bitte hierher", en: "Please bring the chair over here" }, accept: ["to here", "over here", "here", "this way"], hint: "Rank 730. German splits 'here' in two: hier is where you are, hierher is motion towards it. English uses 'here' for both, which is why this one is easy to forget." },
        { id: "de-u118l2-herum", type: "vocab", front: "herum", reading: "herum", meaning: "around (encircling)", example: { jp: "Um das alte Haus herum wachsen viele Bäume.", en: "Around the old house grow many trees." }, drill: { jp: "Wir gehen einmal um den See herum", en: "We walk once around the lake" }, accept: ["around", "round", "about"], hint: "Rank 1064. Usually framed: um … herum, with herum closing the phrase. Alone it means 'about' in the sense of aimlessly — herumstehen, to stand about." },
        { id: "de-u118l2-heraus", type: "vocab", front: "heraus", reading: "heraus", meaning: "out", example: { jp: "Komm bitte heraus, wir warten schon seit zehn Minuten vor der Tür.", en: "Please come out, we have been waiting in front of the door for ten minutes." }, drill: { jp: "Der Rauch kommt aus dem Fenster heraus", en: "The smoke is coming out of the window" }, accept: ["out", "out of", "outwards", "forth"], hint: "Rank 969. her- means towards the speaker and hin- away from them, so heraus is out-towards-me and hinaus out-away-from-me. Speech shortens both to raus." },
        { id: "de-u118l2-entlang", type: "vocab", front: "entlang", reading: "entlang", meaning: "along", example: { jp: "Wir sind den ganzen Weg am Wasser entlang gegangen, weil die Straße zu laut gewesen wäre.", en: "We walked the whole way along the water, because the road would have been too loud." }, drill: { jp: "Der Weg läuft die Straße entlang", en: "The path runs along the street" }, accept: ["along", "alongside", "down"], hint: "Rank 1739. Comes AFTER its noun and takes the accusative — die Straße entlang. Put it in front and it takes the dative instead, which is rarer and more formal." },
        { id: "de-u118l2-dahin", type: "vocab", front: "dahin", reading: "dahin", meaning: "to there", example: { jp: "Bis dahin sind es noch zwei Stunden, also können wir in Ruhe etwas essen.", en: "It's still two hours until then, so we can eat something in peace." }, drill: { jp: "Der Weg dahin ist sehr weit", en: "The way there is very long" }, accept: ["to there", "there", "until then", "that way"], hint: "Rank 1228. Place and time at once: dahin gehen is to go there, bis dahin is 'until then'. dorthin is the same idea with more emphasis on the destination." },
        { id: "de-u118l2-mitkommen", type: "vocab", front: "mitkommen", reading: "mitkommen", meaning: "to come along", example: { jp: "Willst du morgen mitkommen, oder hast du schon etwas anderes vor?", en: "Do you want to come along tomorrow, or have you already got something else on?" }, drill: { jp: "Die Kinder wollen alle mitkommen", en: "The children all want to come along" }, accept: ["to come along", "come along", "to come too", "to come with", "to keep up"], hint: "Rank 1533. Separable: kommt mit. Also to keep up mentally — Ich komme nicht mit means you have lost the thread." },
      ],
    },
    {
      id: "de-u118l3",
      unit: 118,
      lesson: 3,
      title: "Der Ort und die Gegend",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a place at the right scale — a spot, an area, a village, a building and a bridge.",
      items: [
        { id: "de-u118l3-derort", type: "vocab", front: "der Ort", reading: "derort", meaning: "the place", example: { jp: "Der Ort für das Gespräch steht noch nicht fest.", en: "The place for the conversation has not been fixed yet." }, drill: { jp: "Der Ort liegt weit hinter der Grenze", en: "The place lies far beyond the border" }, accept: ["place", "the place", "location", "spot", "town", "village"], hint: "Rank 567. Both an abstract 'place' and a concrete small town — in meinem Ort means 'in my town'. vor Ort is a set phrase meaning 'on site'." },
        { id: "de-u118l3-diegegend", type: "vocab", front: "die Gegend", reading: "diegegend", meaning: "the area (locality)", example: { jp: "Die Gegend um den Bahnhof ist in zehn Jahren ganz neu geworden.", en: "The area around the station has become completely new in ten years." }, drill: { jp: "Die Gegend ist sehr ruhig", en: "The area is very quiet" }, accept: ["area", "the area", "region", "neighbourhood", "neighborhood", "district"], hint: "Rank 1582. Vaguer than der Bereich (u56) and warmer than die Region — a Gegend is where you'd say 'round here'. From gegen, as in what lies opposite you." },
        { id: "de-u118l3-dasdorf", type: "vocab", front: "das Dorf", reading: "dasdorf", meaning: "the village", example: { jp: "Im Dorf gibt es nur noch ein Geschäft, und das macht am Abend zu.", en: "In the village there is only one shop left, and it closes in the evening." }, drill: { jp: "Das Dorf liegt hinter dem Berg", en: "The village lies behind the mountain" }, accept: ["village", "the village", "hamlet"], hint: "Rank 1609. Plural Dörfer with an umlaut. auf dem Dorf (not 'im Dorf') is the idiom for village life in general — country living as opposed to the city." },
        { id: "de-u118l3-dasgebaeude", type: "vocab", front: "das Gebäude", reading: "dasgebaeude", meaning: "the building", example: { jp: "Das Gebäude steht seit zwei Jahren leer, weil niemand es kaufen will.", en: "The building has stood empty for two years, because nobody wants to buy it." }, drill: { jp: "Das Gebäude ist sehr alt", en: "The building is very old" }, accept: ["building", "the building", "structure", "premises"], hint: "Rank 1281. From bauen (taught in u124 of this block). Identical in singular and plural — das Gebäude, die Gebäude — so only the article tells you which." },
        { id: "de-u118l3-diebruecke", type: "vocab", front: "die Brücke", reading: "diebruecke", meaning: "the bridge", example: { jp: "Die Brücke ist seit dem Sommer zu, deshalb dauert der Weg viel länger.", en: "The bridge has been shut since the summer, so the way takes much longer." }, drill: { jp: "Die Brücke führt über den Fluss", en: "The bridge leads over the river" }, accept: ["bridge", "the bridge", "span"], hint: "Rank 1859. Literal and figurative alike — eine Brücke bauen works for both. die Brücke is also the bridge of a ship." },
        { id: "de-u118l3-dasland", type: "vocab", front: "das Land", reading: "dasland", meaning: "the country", example: { jp: "Das Land ist groß, aber fast alle Leute wohnen in der gleichen Gegend.", en: "The country is large, but almost everyone lives in the same area." }, drill: { jp: "Das Land ist groß und sehr alt", en: "The country is large and very old" }, accept: ["country", "the country", "land", "state", "countryside"], hint: "Rank 509. Country, countryside, and a German federal state all at once. ⚠️ The course taught das Ausland (u19) and die Landschaft (u65) — the compounds — but never the base noun." },
      ],
    },
    {
      id: "de-u118l4",
      unit: 118,
      lesson: 4,
      title: "Richtung, Adresse, Zentrum",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Give and follow directions in writing — a direction, an address, a centre, a letter and a sign.",
      items: [
        { id: "de-u118l4-dierichtung", type: "vocab", front: "die Richtung", reading: "dierichtung", meaning: "the direction", example: { jp: "Wir fahren in die falsche Richtung, aber das merkt man erst, wenn der Fluss auf der anderen Seite liegt.", en: "We're driving in the wrong direction, but you only notice that when the river is on the other side." }, drill: { jp: "Die Richtung war von Anfang an falsch", en: "The direction was wrong from the start" }, accept: ["direction", "the direction", "way", "course", "heading"], hint: "Rank 1135. in Richtung Berlin is 'towards Berlin' — no article after Richtung when a place name follows. Also figurative: eine neue Richtung, a new course." },
        { id: "de-u118l4-dieadresse", type: "vocab", front: "die Adresse", reading: "dieadresse", meaning: "the address", example: { jp: "Die Adresse auf dem Brief war alt, und deshalb kam die Antwort viel zu spät.", en: "The address on the letter was old, and so the reply came far too late." }, drill: { jp: "Die Adresse steht auf dem Brief", en: "The address is written on the letter" }, accept: ["address", "the address"], hint: "Tier B — the course USES this word in its own example sentences and never taught it. One d and a double s: Adresse, unlike English 'address'." },
        { id: "de-u118l4-daszentrum", type: "vocab", front: "das Zentrum", reading: "daszentrum", meaning: "the centre", example: { jp: "Im Zentrum darf man seit dem Sommer nicht mehr parken.", en: "In the centre you haven't been allowed to park since the summer." }, drill: { jp: "Das Zentrum ist immer voll", en: "The centre is always full" }, accept: ["centre", "center", "the centre", "the center", "middle", "downtown"], hint: "Tier B, like Adresse. Latin plural: die Zentren. die Innenstadt is the more everyday word for a town centre." },
        { id: "de-u118l4-derbrief", type: "vocab", front: "der Brief", reading: "derbrief", meaning: "the letter (post)", example: { jp: "Der Brief kam erst drei Wochen später an, weil die Adresse darauf schon alt war.", en: "The letter only arrived three weeks later, because the address on it was already old." }, drill: { jp: "Der Brief liegt noch auf dem Tisch", en: "The letter is still lying on the table" }, accept: ["letter", "the letter", "note", "missive"], hint: "Rank 1394. Paper post specifically — an email is die Mail. ⚠️ The course teaches der Briefkasten (u30, the letterbox) but never taught der Brief itself: the compound before the base word, the same shape as Freizeichen/Zeichen below." },
        { id: "de-u118l4-daszeichen", type: "vocab", front: "das Zeichen", reading: "daszeichen", meaning: "the sign (a mark)", example: { jp: "Das Zeichen an der Tür heißt, dass hier niemand ohne Schlüssel arbeiten darf.", en: "The sign on the door means that nobody may work here without a key." }, drill: { jp: "Das Zeichen war nicht zu sehen", en: "The sign was not visible" }, accept: ["sign", "the sign", "signal", "mark", "token", "character"], hint: "Rank 1359. A written character, a mark and an omen all at once. ⚠️ The course already taught das Freizeichen (u77, the dial tone) — the compound before the base word — which is how this hole stayed invisible." },
      ],
    },
  ],
};
