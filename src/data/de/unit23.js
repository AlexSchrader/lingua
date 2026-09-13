// DE Unit 23 — Travel and transport (slot: travel) — A2
// Conventions and the FREE list live in de/unit1.js — read that header first.
//
// A1 u18 already owns the vehicles and the station: Zug, Bus, Bahn, Flugzeug,
// Flughafen, Haltestelle, Fahrkarte, Fahrplan, Koffer, Gepäck, Pass, warten,
// abfahren, ankommen, einsteigen, umsteigen, dauern. ALL OF THAT IS BLOCKED.
// This unit is the layer above it — the things you do around a journey rather
// than the things you travel in: booking it, finding the platform, checking into
// a room, and driving.
//
// Two derived nouns were deliberately NOT taught because A1 already has the verb
// and the pair would be one lexeme twice: die Ankunft beside u18's ankommen, and
// die Abfahrt beside abfahren. die Verspätung is here because verspäten is a
// different lexeme from u1's spät, not an inflection of it.
//
// die Tankstelle was dropped for the same reason once tanken was in: one lexeme
// inside one lesson. der Führerschein took the slot.
//
// Verb fronts are modal-framed for the same reason as u22 — a German main clause
// conjugates the verb, so buchen, packen, abholen, fliegen, parken and tanken can
// only stand whole after a modal. abholen is separable and survives only there.
// FREE-STRUCTURAL: Auto
// das Auto is carded HERE but was licensed by u1's FREE list from unit 1, and
// A1 uses it seven times before this card. check-forward-refs flags that, and it
// is right to: the word's first appearance is u1, not u23. This is a DELIBERATE
// late formal treatment, not an accidental forward reference. A1 judged Auto
// transparent enough to use untaught — which it is — and the cost of that call is
// that it was never reviewable. Carding it here fixes that without invalidating
// the seven A1 examples, which would break if Auto left the FREE list.
// The alternative, dropping the card, would leave a core word permanently
// unreviewable purely to keep a checker quiet. Declared rather than silenced.
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT23 = {
  id: "de-u23",
  lang: "de",
  title: "Reise und Unterkunft",
  order: 23,
  stage: "a2",
  lessons: [
    {
      id: "de-u23l1",
      unit: 23,
      lesson: 1,
      title: "Die Reise planen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Plan a trip: book a room, name the place you are staying, choose what to go and see, and pack for it.",
      items: [
        { id: "de-u23l1-buchen", type: "vocab", front: "buchen", reading: "buchen", meaning: "to make a booking", example: { jp: "Wir buchen das Hotel im Januar.", en: "We book the hotel in January." }, drill: { jp: "Wir wollen das Hotel buchen", en: "We want to book the hotel" }, accept: ["to book", "book", "to reserve", "to make a booking"], hint: "Really from das Buch — to enter something in the book. Use buchen for rooms, tickets and flights; kaufen is for things you carry away." },
        { id: "de-u23l1-diereservierung", type: "vocab", front: "die Reservierung", reading: "diereservierung", meaning: "the reservation", example: { jp: "Die Reservierung ist auf meinen Namen.", en: "The reservation is in my name." }, drill: { jp: "Die Reservierung ist auf meinen Namen", en: "The reservation is in my name" }, accept: ["the reservation", "reservation", "the booking", "booking"], hint: "Auf den Namen, with the accusative — the reservation is put ONTO a name. The verb is reservieren, and reserviert on a table means taken." },
        { id: "de-u23l1-dieunterkunft", type: "vocab", front: "die Unterkunft", reading: "dieunterkunft", meaning: "the accommodation", example: { jp: "Die Unterkunft in der Stadt ist teuer.", en: "The accommodation in the city is expensive." }, drill: { jp: "Die Unterkunft in der Stadt ist teuer", en: "The accommodation in the city is expensive" }, accept: ["the accommodation", "accommodation", "the lodging", "a place to stay"], hint: "Unter + kommen, where you come to rest. It covers a hotel, a hostel or a friend's sofa — the neutral word for wherever you are sleeping." },
        { id: "de-u23l1-derausflug", type: "vocab", front: "der Ausflug", reading: "derausflug", meaning: "the excursion", example: { jp: "Der Ausflug in die Stadt dauert drei Stunden.", en: "The excursion into town lasts three hours." }, drill: { jp: "Der Ausflug dauert drei Stunden", en: "The excursion lasts three hours" }, accept: ["the excursion", "excursion", "the trip", "the day trip", "the outing"], hint: "Aus + Flug, a flight out — though you rarely fly on one. A day out and back; for a longer journey you want die Reise." },
        { id: "de-u23l1-diesehenswurdigkeit", type: "vocab", front: "die Sehenswürdigkeit", reading: "diesehenswurdigkeit", meaning: "the sight", example: { jp: "Die Sehenswürdigkeit ist heute sehr voll.", en: "The sight is very crowded today." }, drill: { jp: "Die Sehenswürdigkeit ist heute sehr voll", en: "The sight is very crowded today" }, accept: ["the sight", "sight", "the attraction", "the landmark"], hint: "Take it apart and it says itself: sehen + würdig + -keit, worthiness-of-being-seen. Long, but every piece is a word you already have." },
        { id: "de-u23l1-packen", type: "vocab", front: "packen", reading: "packen", meaning: "to pack", example: { jp: "Ich packe den Koffer am Abend.", en: "I pack the suitcase in the evening." }, drill: { jp: "Wir müssen den Koffer packen", en: "We have to pack the suitcase" }, accept: ["to pack", "pack"], hint: "You pack the container, not the contents: den Koffer packen. Einpacken is to wrap something up, auspacken to unpack it again." },
      ],
    },
    {
      id: "de-u23l2",
      unit: 23,
      lesson: 2,
      title: "Am Bahnhof und am Flughafen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Find your platform, ask at the information desk, show your ID, and say who is picking you up.",
      items: [
        { id: "de-u23l2-dasgleis", type: "vocab", front: "das Gleis", reading: "dasgleis", meaning: "the platform", example: { jp: "Der Zug wartet auf Gleis drei.", en: "The train is waiting on platform three." }, drill: { jp: "Das Gleis für den Zug ist hier", en: "The platform for the train is here" }, accept: ["the platform", "platform", "the track", "track"], hint: "Strictly the track itself, but it is the number you look for on the board: Gleis drei, with no article after auf." },
        { id: "de-u23l2-dieverspatung", type: "vocab", front: "die Verspätung", reading: "dieverspatung", meaning: "the delay", example: { jp: "Der Zug hat heute eine Verspätung.", en: "The train has a delay today." }, drill: { jp: "Die Verspätung ist heute sehr groß", en: "The delay is very long today" }, accept: ["the delay", "delay", "the lateness"], hint: "Built on u1's spät. Germans say Verspätung HABEN, not sein — der Zug hat Verspätung, and the word carries some national feeling." },
        { id: "de-u23l2-dieauskunft", type: "vocab", front: "die Auskunft", reading: "dieauskunft", meaning: "the information desk", example: { jp: "Die Auskunft ist im Bahnhof links.", en: "The information desk is on the left in the station." }, drill: { jp: "Die Auskunft ist im Bahnhof links", en: "The information desk is on the left in the station" }, accept: ["the information desk", "information", "the information", "the enquiry desk"], hint: "The same -kunft as in Unterkunft, from kommen. It means both the desk and the answer you get there: eine Auskunft geben." },
        { id: "de-u23l2-derausweis", type: "vocab", front: "der Ausweis", reading: "derausweis", meaning: "the ID card", example: { jp: "Der Ausweis liegt in der Tasche.", en: "The ID card is in the bag." }, drill: { jp: "Der Ausweis liegt in der Tasche", en: "The ID card is in the bag" }, accept: ["the ID card", "ID card", "the identity card", "ID"], hint: "Not the same as u18's Pass — the Pass crosses borders, the Ausweis proves inside the country who you are. Germans carry one from sixteen." },
        { id: "de-u23l2-abholen", type: "vocab", front: "abholen", reading: "abholen", meaning: "to pick up", example: { jp: "Ich hole dich am Flughafen ab.", en: "I pick you up at the airport." }, drill: { jp: "Wir können dich am Flughafen abholen", en: "We can pick you up at the airport" }, accept: ["to pick up", "pick up", "to collect", "to fetch"], hint: "Separable: ich hole ab. Used of people and of parcels — you go to where the thing is and bring it back, which is what ab- adds to holen." },
        { id: "de-u23l2-fliegen", type: "vocab", front: "fliegen", reading: "fliegen", meaning: "to fly", example: { jp: "Wir fliegen im Sommer nach Wien.", en: "We fly to Vienna in the summer." }, drill: { jp: "Wir wollen im Sommer nach Wien fliegen", en: "We want to fly to Vienna in the summer" }, accept: ["to fly", "fly"], hint: "The verb behind u18's Flugzeug — the vowel shifts from ie to u across the pair, a pattern you will see again in ziehen and Zug." },
      ],
    },
    {
      id: "de-u23l3",
      unit: 23,
      lesson: 3,
      title: "Im Hotel",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Check in at a hotel, ask whether a room is vacant, choose between a single and a double, and describe the view.",
      items: [
        { id: "de-u23l3-dierezeption", type: "vocab", front: "die Rezeption", reading: "dierezeption", meaning: "the reception", example: { jp: "Die Rezeption ist hier rechts.", en: "Reception is here on the right." }, drill: { jp: "Die Rezeption ist hier rechts", en: "Reception is here on the right" }, accept: ["the reception", "reception", "the front desk", "the reception desk"], hint: "Stress the last syllable: Rezep-TSION. The -tion ending is always feminine and always stressed at the end, which makes a whole class of words predictable." },
        { id: "de-u23l3-daseinzelzimmer", type: "vocab", front: "das Einzelzimmer", reading: "daseinzelzimmer", meaning: "the single room", example: { jp: "Das Einzelzimmer kostet vierzig Euro.", en: "The single room costs forty euros." }, drill: { jp: "Das Einzelzimmer kostet vierzig Euro", en: "The single room costs forty euros" }, accept: ["the single room", "single room", "a single"], hint: "Einzel- is the prefix for one-of, from ein. It reappears in Einzelkind, an only child, and Einzelfahrkarte, a single ticket." },
        { id: "de-u23l3-dasdoppelzimmer", type: "vocab", front: "das Doppelzimmer", reading: "dasdoppelzimmer", meaning: "the double room", example: { jp: "Das Doppelzimmer hat ein großes Fenster.", en: "The double room has a big window." }, drill: { jp: "Das Doppelzimmer hat ein Fenster", en: "The double room has a window" }, accept: ["the double room", "double room", "a double"], hint: "Doppel- is double, and it stacks the same way Einzel- does. Both take das, because the head of the compound is das Zimmer and the last word always decides." },
        { id: "de-u23l3-dieubernachtung", type: "vocab", front: "die Übernachtung", reading: "dieubernachtung", meaning: "the overnight stay", example: { jp: "Die Übernachtung im Hotel ist teuer.", en: "The overnight stay at the hotel is expensive." }, drill: { jp: "Die Übernachtung im Hotel ist teuer", en: "The overnight stay at the hotel is expensive" }, accept: ["the overnight stay", "overnight stay", "the night", "the stay"], hint: "Über + Nacht + -ung: the getting-through-a-night. It is what a hotel actually charges for, so it is the word on the bill." },
        { id: "de-u23l3-dieaussicht", type: "vocab", front: "die Aussicht", reading: "dieaussicht", meaning: "the view", example: { jp: "Die Aussicht aus dem Zimmer ist schön.", en: "The view from the room is lovely." }, drill: { jp: "Die Aussicht aus dem Zimmer ist schön", en: "The view from the room is lovely" }, accept: ["the view", "view", "the outlook", "the prospect"], hint: "Aus + Sicht, the seeing-out. It also means prospect in the sense of what lies ahead — gute Aussichten are good prospects." },
        { id: "de-u23l3-frei", type: "vocab", front: "frei", reading: "frei", meaning: "vacant", example: { jp: "Heute ist kein Zimmer frei.", en: "No room is vacant today." }, drill: { jp: "Heute ist kein Zimmer frei", en: "No room is vacant today" }, accept: ["vacant", "free", "available", "unoccupied"], hint: "Frei carries both senses English splits — a vacant room and a free afternoon. For free of charge Germans say kostenlos instead." },
      ],
    },
    {
      id: "de-u23l4",
      unit: 23,
      lesson: 4,
      title: "Unterwegs mit dem Auto",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about driving: parking, sitting in traffic, filling up, and reading the lights.",
      items: [
        { id: "de-u23l4-dasauto", type: "vocab", front: "das Auto", reading: "dasauto", meaning: "the car", example: { jp: "Das Auto fährt heute sehr schnell.", en: "The car is going very fast today." }, drill: { jp: "Das Auto fährt heute sehr schnell", en: "The car is going very fast today" }, accept: ["the car", "car", "the automobile"], hint: "Short for Automobil, and neuter. Mit dem Auto is by car — Germans name the vehicle in the dative after mit, exactly as with dem Zug." },
        { id: "de-u23l4-parken", type: "vocab", front: "parken", reading: "parken", meaning: "to park a car", example: { jp: "Wir parken vor dem Haus.", en: "We park in front of the house." }, drill: { jp: "Wir müssen vor dem Haus parken", en: "We have to park in front of the house" }, accept: ["to park", "park", "to park up"], hint: "Same root as u7's Park, oddly enough — both come from an enclosed ground. Der Parkplatz is the space or the car park." },
        { id: "de-u23l4-derstau", type: "vocab", front: "der Stau", reading: "derstau", meaning: "the traffic jam", example: { jp: "Der Stau auf der Straße ist lang.", en: "The traffic jam on the road is long." }, drill: { jp: "Der Stau auf der Straße ist lang", en: "The traffic jam on the road is long" }, accept: ["the traffic jam", "traffic jam", "the tailback", "the congestion"], hint: "From stauen, to dam up — a jam is water that has stopped. Im Stau stehen is to be stuck in one, and it is on the radio every morning." },
        { id: "de-u23l4-tanken", type: "vocab", front: "tanken", reading: "tanken", meaning: "to fill up", example: { jp: "Wir tanken hier in der Stadt.", en: "We fill up here in town." }, drill: { jp: "Wir müssen vor dem Ausflug tanken", en: "We have to fill up before the excursion" }, accept: ["to fill up", "fill up", "to refuel", "to get petrol"], hint: "The verb from der Tank, and it needs no object — you simply tankst. The place is die Tankstelle." },
        { id: "de-u23l4-derfuhrerschein", type: "vocab", front: "der Führerschein", reading: "derfuhrerschein", meaning: "the driving licence", example: { jp: "Der Führerschein kostet in Deutschland viel Geld.", en: "A driving licence costs a lot of money in Germany." }, drill: { jp: "Der Führerschein kostet viel Geld", en: "A driving licence costs a lot of money" }, accept: ["the driving licence", "driving licence", "the driver's license", "driver's license"], hint: "Führer, one who leads, plus Schein, a certificate — the paper that says you may lead the car. Der Schein on its own is also a banknote." },
        { id: "de-u23l4-dieampel", type: "vocab", front: "die Ampel", reading: "dieampel", meaning: "the traffic light", example: { jp: "Die Ampel vor der Schule ist rot.", en: "The traffic light in front of the school is red." }, drill: { jp: "Die Ampel vor der Schule ist rot", en: "The traffic light in front of the school is red" }, accept: ["the traffic light", "traffic light", "the traffic lights", "the lights"], hint: "Singular where English often goes plural — die Ampel ist rot, not are red. Germans wait at a red one even with no car in sight." },
      ],
    },
  ],
};
