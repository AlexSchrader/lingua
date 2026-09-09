// NO Unit 23 — Reise og transport ("Travel and transport") — A2
// REVISITS TWO A1 UNITS, which is where duplicate fronts come from. A1 u20 På
// reise owns et fly, en flyplass, en billett, et pass, en koffert, å pakke, en
// vei, et kart, å stoppe, å bytte, ei bru, ei ferje, ei hytte, et telt, en
// gjest, en gave, å besøke, å låne, å dra, å hente, å sende, å vise, å ønske,
// ei melding. A1 u7 I byen owns en bil, et tog, en buss, en båt, til, på, ei
// gate, å kjøre, å reise. Every front below was screened against all 480 exact
// AND lexeme — `et stopp` was rejected as a relative of A1's `å stoppe`.
//
// A1 answers WHAT you travel in. This unit answers WHEN it leaves, WHERE it is
// going, and WHAT GOES WRONG — which is the A2 step and needs none of A1's nouns
// back.
//
// Conventions per unit1.js §1-§8. Subordinators are A1's real set: at, fordi,
// hvis, men, eller, når. NOT `som` — it is untaught in A1 and lint cannot see
// that (lint.js:226 excuses it as an inflection of `sommer`). u29 claims it.
//   FREE: Erling, Kari, Anna, Jonas, Oslo, Bergen, Norge, Europa | kafé, taxi, telefon, hotell, bank, kilometer | 2000
//   A FREE entry is exempt in EVERY unit, not just this one, so a word this
//   course teaches as a front must NEVER appear here — it would disable the
//   forward-reference check for that word corpus-wide.
export const NO_UNIT23 = {
  id: "no-u23",
  lang: "no",
  title: "Reise og transport",
  order: 23,
  stage: "a2",
  lessons: [
    {
      id: "no-u23l1",
      unit: 23,
      lesson: 1,
      title: "Leaving and arriving",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say when something leaves and arrives, and that it is late — en avgang, en ankomst, å ankomme, forsinket.",
      items: [
        { id: "no-u23l1-enavgang", type: "vocab", front: "en avgang", reading: "enavgang", meaning: "departure", example: { jp: "Neste avgang er klokka ti, men vi må komme en time før.", en: "The next departure is at ten, but we have to come an hour before." }, accept: ["a departure", "a service", "sailing"], drill: { jp: "Det er en avgang klokka ni", en: "There is a departure at nine" }, hint: "AV-gang — av plus gang, a going-off. Masculine: definite avgangen. On a timetable it is the departure itself, not the act of leaving." },
        { id: "no-u23l1-enankomst", type: "vocab", front: "en ankomst", reading: "enankomst", meaning: "arrival", example: { jp: "Vi vet ikke når ankomsten er, fordi toget ikke går før klokka ti.", en: "We do not know when the arrival is, because the train does not leave before ten." }, accept: ["an arrival"], drill: { jp: "En ankomst er alltid hyggelig", en: "An arrival is always nice" }, hint: "AN-komst. Definite ankomsten. The pair avgang/ankomst is what every Norwegian timetable and airport board is written in." },
        { id: "no-u23l1-aankomme", type: "vocab", front: "å ankomme", reading: "aankomme", meaning: "to arrive", example: { jp: "Toget ankommer Bergen klokka fem, hvis det ikke blir forsinket.", en: "The train arrives in Bergen at five, if it does not get delayed." }, accept: ["arrive", "to reach", "reach"], drill: { jp: "Det er godt å ankomme tidlig", en: "It is good to arrive early" }, hint: "AN-kom-me. Formal — a timetable and an announcement use it. In speech Norwegians say å komme fram." },
        { id: "no-u23l1-forsinket", type: "vocab", front: "forsinket", reading: "forsinket", meaning: "delayed", example: { jp: "Bussen er forsinket i dag, men sjåføren sier at vi rekker toget.", en: "The bus is delayed today, but the driver says we will catch the train." }, accept: ["late", "held up", "running late"], drill: { jp: "Toget er forsinket i dag", en: "The train is delayed today" }, hint: "for-SIN-ket, from sen (A1 u5, late). Used of things that run late; a PERSON who is late is also forsinket." },
        { id: "no-u23l1-aavreise", type: "vocab", front: "ei avreise", reading: "eiavreise", meaning: "outward journey", example: { jp: "Avreisa er på lørdag, og vi kommer tilbake neste uke.", en: "The outward journey is on Saturday, and we come back next week." }, accept: ["a departure", "setting off", "the journey out"], drill: { jp: "Ei avreise er alltid travel", en: "A departure day is always busy" }, hint: "AV-rei-se, av plus reise. Feminine: definite avreisa. It is the leg out, where en avgang is a single scheduled service." },
        { id: "no-u23l1-ahaste", type: "vocab", front: "å haste", reading: "ahaste", meaning: "to be urgent", example: { jp: "Det haster nå, fordi ferja går klokka ti og vi står i kø.", en: "It is urgent now, because the ferry leaves at ten and we are in a queue." }, accept: ["be urgent", "to be pressing", "to rush"], drill: { jp: "Det er tungt å haste alltid", en: "It is hard to always be rushing" }, hint: "HAS-te. Almost always impersonal: det haster. A person in a hurry uses å skynde seg, from u21." },
      ],
    },
    {
      id: "no-u23l2",
      unit: 23,
      lesson: 2,
      title: "Route and direction",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe a route and which way it goes — ei rute, en retning, å svinge, en omvei — beyond A1's høyre and venstre.",
      items: [
        { id: "no-u23l2-eirute", type: "vocab", front: "ei rute", reading: "eirute", meaning: "route", example: { jp: "Denne ruta går over fjellet, men den andre er raskere på vinteren.", en: "This route goes over the mountain, but the other one is faster in the winter." }, accept: ["a route", "a service", "line"], drill: { jp: "Ei rute går til Bergen", en: "A route goes to Bergen" }, hint: "ROO-te. Feminine: definite ruta. A bus line and a walking route are both ei rute." },
        { id: "no-u23l2-eiretning", type: "vocab", front: "en retning", reading: "enretning", meaning: "direction", example: { jp: "Vi går i en annen retning, fordi jeg leste kartet dårlig.", en: "We are going in another direction, because I read the map badly." }, accept: ["a direction", "way", "bearing"], drill: { jp: "Vi går i en retning", en: "We are walking in one direction" }, hint: "RET-ning, from rett, straight. Masculine: definite retningen. Most -ing nouns take either gender and the course marks those ei — but retning and setning are masculine only, so this one is en. I retning av means \"in the direction of\"." },
        { id: "no-u23l2-asvinge", type: "vocab", front: "å svinge", reading: "asvinge", meaning: "to turn", example: { jp: "Du må svinge til høyre etter kirka, og huset er nær ei gate.", en: "You have to turn right after the church, and the house is near a street." }, accept: ["turn", "to swing", "to bend"], drill: { jp: "Det er lett å svinge her", en: "It is easy to turn here" }, hint: "SVING-e. Sving til høyre is what a Norwegian gives you as a direction. A bend in the road is en sving." },
        { id: "no-u23l2-enomvei", type: "vocab", front: "en omvei", reading: "enomvei", meaning: "detour", example: { jp: "Vi tok en omvei fordi brua var stengt, og vi kom sent hjem.", en: "We took a detour because the bridge was closed, and we came home late." }, accept: ["a detour", "roundabout way", "diversion"], drill: { jp: "Vi tar en omvei i dag", en: "We are taking a detour today" }, hint: "OM-vei — om (around) plus vei (A1 u20). Definite omveien." },
        { id: "no-u23l2-etkryss", type: "vocab", front: "et kryss", reading: "etkryss", meaning: "crossroads", example: { jp: "Bilen stoppet i krysset, fordi en buss kom fra venstre.", en: "The car stopped at the crossroads, because a bus came from the left." }, accept: ["a crossroads", "junction", "intersection", "cross"], drill: { jp: "Det er et kryss her", en: "There is a crossroads here" }, hint: "KRUESS. Neuter: definite krysset, plural kryss unchanged. Note the drill: an indefinite subject cannot open a locative clause, so it is Det er et kryss, never \"Et kryss er her\"." },
        { id: "no-u23l2-underveis", type: "vocab", front: "underveis", reading: "underveis", meaning: "on the way", example: { jp: "Vi spiser underveis, fordi vi ikke kan stoppe nå.", en: "We eat on the way, because we cannot stop now." }, accept: ["en route", "in transit", "along the way"], drill: { jp: "Vi spiser noe underveis", en: "We eat something on the way" }, hint: "UN-der-veis — under plus vei. One word, never split, and it does not change form." },
      ],
    },
    {
      id: "no-u23l3",
      unit: 23,
      lesson: 3,
      title: "Booking and boarding",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Book a seat and get on board — å reservere, et sete, en passasjer, en kø — and say what a ticket cost you.",
      items: [
        { id: "no-u23l3-areservere", type: "vocab", front: "å reservere", reading: "areservere", meaning: "to book", example: { jp: "Jeg reserverte to seter på toget, fordi det er travelt i helga.", en: "I booked two seats on the train, because it is busy at the weekend." }, accept: ["book", "to reserve", "reserve"], drill: { jp: "Det er billig å reservere tidlig", en: "It is cheap to book early" }, hint: "re-ser-VEH-re. Past reserverte. Å bestille is the everyday twin and covers ordering food too." },
        { id: "no-u23l3-etsete", type: "vocab", front: "et sete", reading: "etsete", meaning: "seat", example: { jp: "Dette setet er ledig, men det koster litt mer enn de andre.", en: "This seat is free, but it costs a little more than the others." }, accept: ["a seat"], drill: { jp: "Et sete er ledig her", en: "A seat is free here" }, hint: "SEH-te, from å sitte (A1 u13). Neuter: definite setet, plural seter. En stol is a chair in a room; et sete is a place on a vehicle." },
        { id: "no-u23l3-enpassasjer", type: "vocab", front: "en passasjer", reading: "enpassasjer", meaning: "passenger", example: { jp: "Alle passasjerene må vise billetten når de kommer på bussen.", en: "All the passengers have to show their ticket when they get on the bus." }, accept: ["a passenger", "traveller"], drill: { jp: "En passasjer venter på bussen", en: "A passenger is waiting for the bus" }, hint: "pas-sa-SHEHR — the sj hush from A1 unit 1, stress on the end. Definite passasjeren, plural passasjerer." },
        { id: "no-u23l3-eiko", type: "vocab", front: "en kø", reading: "enko", meaning: "queue", example: { jp: "Det står en lang kø i butikken, fordi bare én person jobber i dag.", en: "There is a long queue in the shop, because only one person is working today." }, accept: ["a queue", "line", "traffic jam"], drill: { jp: "Det står en kø her", en: "There is a queue here" }, hint: "KUR, one syllable. Masculine: definite køen. It is also what Norwegians call a traffic jam: å stå i kø." },
        { id: "no-u23l3-enrabatt", type: "vocab", front: "en rabatt", reading: "enrabatt", meaning: "discount", example: { jp: "Elever får en rabatt på billetten, hvis de viser billetten.", en: "Pupils get a discount on the ticket, if they show the ticket." }, accept: ["a discount", "reduction"], drill: { jp: "Barn får en rabatt her", en: "Children get a discount here" }, hint: "ra-BATT, stress on the end. Definite rabatten." },
        { id: "no-u23l3-eibagasje", type: "vocab", front: "ei bagasje", reading: "eibagasje", meaning: "luggage", example: { jp: "Bagasjen er tung, fordi jeg pakket mange klær.", en: "The luggage is heavy, because I packed a lot of clothes." }, accept: ["baggage", "the luggage"], drill: { jp: "Ei bagasje kan bli tung", en: "Luggage can get heavy" }, hint: "ba-GA-she — sj again. Feminine: definite bagasjen. Usually singular, the way English \"luggage\" is." },
      ],
    },
    {
      id: "no-u23l4",
      unit: 23,
      lesson: 4,
      title: "When it goes wrong",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle a trip that does not go to plan — å utsette, et opphold, en trafikk, å parkere — and say where you ended up.",
      items: [
        { id: "no-u23l4-autsette", type: "vocab", front: "å utsette", reading: "autsette", meaning: "to postpone", example: { jp: "Vi måtte utsette turen, fordi været ble dårlig på fredag.", en: "We had to postpone the trip, because the weather got bad on Friday." }, accept: ["postpone", "to put off", "put off", "to delay"], drill: { jp: "Det er lett å utsette en tur", en: "It is easy to postpone a trip" }, hint: "OOT-set-te — ut plus sette. Past utsatte. Not the same as forsinket, which happens TO you." },
        { id: "no-u23l4-etopphold", type: "vocab", front: "et opphold", reading: "etopphold", meaning: "stay", example: { jp: "Oppholdet i Bergen var kort, fordi vi bare hadde to dager.", en: "The stay in Bergen was short, because we only had two days." }, accept: ["a stay", "a break", "a stop"], drill: { jp: "Et opphold i Oslo er dyrt", en: "A stay in Oslo is expensive" }, hint: "OPP-hold. Neuter: definite oppholdet, plural opphold unchanged. Also a break in the rain — opphold i regnet." },
        { id: "no-u23l4-entrafikk", type: "vocab", front: "en trafikk", reading: "entrafikk", meaning: "traffic", example: { jp: "Trafikken er verst tidlig, når alle skal jobbe samtidig.", en: "The traffic is worst early, when everyone is going to work at the same time." }, accept: ["the traffic"], drill: { jp: "En trafikk kan bli tung", en: "Traffic can get heavy" }, hint: "tra-FIKK, stress on the end. Definite trafikken, and that definite is the form you will nearly always hear." },
        { id: "no-u23l4-aparkere", type: "vocab", front: "å parkere", reading: "aparkere", meaning: "to park", example: { jp: "Du kan ikke parkere her, men du kan parkere på et torg.", en: "You cannot park here, but you can park at a square." }, accept: ["park", "to leave a car"], drill: { jp: "Det er lett å parkere her", en: "It is easy to park here" }, hint: "par-KEH-re. Past parkerte. En parkeringsplass is a car park." },
        { id: "no-u23l4-enhavn", type: "vocab", front: "en havn", reading: "enhavn", meaning: "harbour", example: { jp: "Ferja ligger i havna, og den går ikke før været blir bedre.", en: "The ferry is in the harbour, and it will not leave before the weather gets better." }, accept: ["a harbour", "port", "harbor"], drill: { jp: "En havn er nær en by", en: "A harbour is near a city" }, hint: "HAVN. Definite havna or havnen — both are standard. Bergen and Oslo are both built around one." },
        { id: "no-u23l4-etreisemal", type: "vocab", front: "et reisemål", reading: "etreisemal", meaning: "destination", example: { jp: "Norge er et fint reisemål, fordi mange vil se fjellene.", en: "Norway is a nice destination, because many people want to see the mountains." }, accept: ["a destination", "travel destination"], drill: { jp: "Norge er et reisemål", en: "Norway is a destination" }, hint: "REI-se-mawl — reise plus mål, a travel-goal. Neuter: definite reisemålet, plural reisemål unchanged." },
      ],
    },
  ],
};
