// NO Unit 81 — Bil og trafikk (slot: coverage-b1-8) — B1
// COVERAGE UNIT, block 3. Retitled from the scaffold's "Vocabulary 8 (B1)".
//
// u7 and u23 teach TRAVEL — en bil, å kjøre, en vei, et kryss, å parkere, en kø,
// en sjåfør, en rabatt, å utsette. What no unit teaches is driving as a thing you
// do yourself and are responsible for: et førerkort, ei fartsgrense, ei bot, et
// skilt, et dekk, et verksted, ei rundkjøring, bompenger. The passenger
// vocabulary was complete and the driver vocabulary was empty.
//
// `et sentrum` lands here rather than in a geography unit because it is taught to
// the corpus as a road sign — it was used in u76 drafting and found untaught.
//
// Conventions per no/unit1.js. `bompenger` is taught bare, as a plural-only noun
// (rule 1a, like `penger` u7). lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT81 = {
  id: "no-u81",
  lang: "no",
  title: "Bil og trafikk",
  order: 81,
  stage: "b1",
  lessons: [
    {
      id: "no-u81l1",
      unit: 81,
      lesson: 1,
      title: "Å kjøre lovlig",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Drive legally — the licence, the speed limit, who gives way, the signs and the people crossing.",
      items: [
        { id: "no-u81l1-etforerkort", type: "vocab", front: "et førerkort", reading: "etforerkort", meaning: "driving licence", example: { jp: "Han tok førerkortet først da han var ganske gammel.", en: "He got his driving licence only when he was quite old." }, accept: ["a driver's license", "a licence"], drill: { jp: "Du trenger et førerkort her", en: "You need a driving licence here" }, hint: "et førerkort → førerkortet, flertall førerkort. En fører + et kort. Å ta førerkortet er det faste uttrykket for passing the test." },
        { id: "no-u81l1-eifartsgrense", type: "vocab", front: "ei fartsgrense", reading: "eifartsgrense", meaning: "speed limit", example: { jp: "Fartsgrensa er lav her, men alle kjører fortere.", en: "The speed limit is low here, but everybody drives faster." }, accept: ["a speed restriction"], drill: { jp: "Hver vei har ei fartsgrense", en: "Every road has a speed limit" }, hint: "ei fartsgrense → fartsgrensa. En fart (u34) + en grense (u22). Alltid i kilometer i timen." },
        { id: "no-u81l1-etskilt", type: "vocab", front: "et skilt", reading: "etskilt", meaning: "a road sign", example: { jp: "Skiltet sto bak et tre, så ingen så det.", en: "The sign was behind a tree, so nobody saw it." }, accept: ["a road sign", "a signpost", "sign"], drill: { jp: "Det står et skilt ved veien", en: "There is a sign by the road" }, hint: "et skilt → skiltet, flertall skilt. Både trafikkskilt og navneskiltet på døra." },
        { id: "no-u81l1-enfotgjenger", type: "vocab", front: "en fotgjenger", reading: "enfotgjenger", meaning: "pedestrian", example: { jp: "En fotgjenger har alltid rett i et kryss her.", en: "A pedestrian always has right of way at a crossing here." }, accept: ["a walker", "somebody on foot"], drill: { jp: "En fotgjenger krysset veien", en: "A pedestrian crossed the road" }, hint: "en fotgjenger → fotgjengeren. En fot (u11) + å gå (u1): the one going on foot." },
        { id: "no-u81l1-ablinke", type: "vocab", front: "å blinke", reading: "ablinke", meaning: "to indicate (signal)", example: { jp: "Du må blinke lenge før du svinger til høyre.", en: "You have to indicate well before you turn right." }, accept: ["to signal", "to flash", "to blink"], drill: { jp: "Husk å blinke i god tid", en: "Remember to indicate in good time" }, hint: "å blinke → blinker. Om bilen: to indicate. Om et lys eller et øye: to flash, to blink." },
        { id: "no-u81l1-vikeplikt", type: "vocab", front: "vikeplikt", reading: "vikeplikt", meaning: "a duty to give way", example: { jp: "Du har vikeplikt for bilene som kommer fra høyre.", en: "You have to give way to the cars coming from the right." }, drill: { jp: "Her har du vikeplikt for alle", en: "Here you have to give way to everybody" }, accept: ["right of way (the other car's)", "the obligation to yield", "having to yield"], hint: "VI-ke-plikt. Å vike, to give way, plus en plikt — so masculine like plikt itself: definite vikeplikten. Taught bare because Norwegian says å ha vikeplikt, never \"en vikeplikt\". The default rule in Norway is høyreregelen: the car on your right goes first." },
      ],
    },
    {
      id: "no-u81l2",
      unit: 81,
      lesson: 2,
      title: "Bilen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the car itself — the tyres, the engine, the garage, and reversing.",
      items: [
        { id: "no-u81l2-etdekk", type: "vocab", front: "et dekk", reading: "etdekk", meaning: "tyre", example: { jp: "Et dekk gikk i stykker på veien hjem fra hytta.", en: "A tyre broke on the way home from the cabin." }, accept: ["a tire", "a deck"], drill: { jp: "Et dekk gikk i stykker i går", en: "A tyre broke yesterday" }, hint: "et dekk → dekket, flertall dekk. Også a deck on a boat. Fra å dekke, to cover." },
        { id: "no-u81l2-enmotor", type: "vocab", front: "en motor", reading: "enmotor", meaning: "engine", example: { jp: "Motoren lager mye lyd når det er kaldt ute.", en: "The engine makes a lot of noise when it is cold outside." }, accept: ["a motor"], drill: { jp: "Bilen har en motor og fire dekk", en: "The car has an engine and four tyres" }, hint: "en motor → motoren, flertall motorer. Trykket ligger på første stavelse: MO-tor." },
        { id: "no-u81l2-etverksted", type: "vocab", front: "et verksted", reading: "etverksted", meaning: "garage (workshop)", example: { jp: "Bilen står på et verksted til over helga.", en: "The car is at a garage until after the weekend." }, accept: ["a repair shop", "a workshop"], drill: { jp: "Bilen står på et verksted", en: "The car is at a garage" }, hint: "et verksted → verkstedet, flertall verksteder. Et verk + et sted (u7). En garasje er der du parkerer, ikke der de reparerer." },
        { id: "no-u81l2-arygge", type: "vocab", front: "å rygge", reading: "arygge", meaning: "to reverse", example: { jp: "Det er vanskelig å rygge ut av denne gata.", en: "It's difficult to reverse out of this street." }, accept: ["to back up", "reverse"], drill: { jp: "Det er vanskelig å rygge her", en: "It is difficult to reverse here" }, hint: "å rygge → rygger. Fra en rygg (not taught in this course), a back: to go back-first." },
        { id: "no-u81l2-etpiggdekk", type: "vocab", front: "et piggdekk", reading: "etpiggdekk", meaning: "studded tyre", example: { jp: "Mange bytter til piggdekk om høsten hvert år.", en: "Many people change to studded tyres in the autumn every year." }, accept: ["a winter tyre", "a spiked tyre"], drill: { jp: "Vi kjøpte et piggdekk til bilen", en: "We bought a studded tyre for the car" }, hint: "et piggdekk → piggdekket, flertall piggdekk. En pigg + et dekk. Noen byer tar en avgift for å bruke dem." },
        { id: "no-u81l2-etkjoretoy", type: "vocab", front: "et kjøretøy", reading: "etkjoretoy", meaning: "vehicle", example: { jp: "Ingen kjøretøy får kjøre gjennom parken.", en: "No vehicles are allowed to drive through the park." }, accept: ["a motor vehicle"], drill: { jp: "Dette er et kjøretøy uten motor", en: "This is a vehicle without an engine" }, hint: "et kjøretøy → kjøretøyet, flertall kjøretøy. Å kjøre (u7) + et tøy (a thing, gammelt ord). Ordet på skilt og i loven." },
      ],
    },
    {
      id: "no-u81l3",
      unit: 81,
      lesson: 3,
      title: "På veien",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe what the road does to you — roundabouts, queues, roadworks and diversions.",
      items: [
        { id: "no-u81l3-eirundkjoring", type: "vocab", front: "ei rundkjøring", reading: "eirundkjoring", meaning: "roundabout", example: { jp: "Ta til høyre i den andre rundkjøringa etter brua.", en: "Turn right at the second roundabout after the bridge." }, accept: ["a traffic circle", "a rotary"], drill: { jp: "Det kommer ei rundkjøring her snart", en: "A roundabout is coming here soon" }, hint: "ei rundkjøring → rundkjøringa. Rundt (u45) + å kjøre. -ing-ord er hunkjønn." },
        { id: "no-u81l3-enbilko", type: "vocab", front: "en bilkø", reading: "enbilko", meaning: "traffic jam", example: { jp: "Vi sto i en bilkø i en halv time i dag.", en: "We sat in a traffic jam for half an hour today." }, accept: ["a tailback", "a queue of cars"], drill: { jp: "Vi sto i en bilkø", en: "We sat in a traffic jam" }, hint: "en bilkø → bilkøen. En bil (u7) + en kø (u23). Å stå i kø er det du gjør i den." },
        { id: "no-u81l3-etveiarbeid", type: "vocab", front: "et veiarbeid", reading: "etveiarbeid", meaning: "roadworks", example: { jp: "Det er veiarbeid hele sommeren på denne veien.", en: "There are roadworks all summer on this road." }, accept: ["road construction", "roadwork"], drill: { jp: "Vi møtte et veiarbeid på turen", en: "We met roadworks on the trip" }, hint: "et veiarbeid → veiarbeidet. En vei (u20) + et arbeid (u18). Brukes ofte uten artikkel: det er veiarbeid." },
        { id: "no-u81l3-eiomkjoring", type: "vocab", front: "ei omkjøring", reading: "eiomkjoring", meaning: "diversion", example: { jp: "Vi måtte ta ei lang omkjøring på grunn av veiarbeidet.", en: "We had to take a long diversion because of the roadworks." }, accept: ["a detour", "a bypass"], drill: { jp: "Vi måtte ta ei omkjøring", en: "We had to take a diversion" }, hint: "ei omkjøring → omkjøringa. Om + å kjøre: driving around it. Står på gule skilt." },
        { id: "no-u81l3-enfartshump", type: "vocab", front: "en fartshump", reading: "enfartshump", meaning: "speed bump", example: { jp: "Det er fartshumper hele veien forbi skolen.", en: "There are speed bumps all the way past the school." }, accept: ["a sleeping policeman", "a road hump"], drill: { jp: "Det ligger en fartshump her", en: "There is a speed bump here" }, hint: "en fartshump → fartshumpet, flertall fartshumper. En fart + en hump. Kalles også en fartsdemper." },
        { id: "no-u81l3-sentrum", type: "vocab", front: "sentrum", reading: "sentrum", meaning: "town centre", example: { jp: "Alle skiltene peker mot sentrum, men ingen sier hvor du skal parkere.", en: "All the signs point towards the centre, but none says where to park." }, accept: ["downtown", "the city centre"], drill: { jp: "Vi kjører mot sentrum nå", en: "We are driving towards the centre now" }, hint: "sentrum → sentrum eller sentrumet, flertall sentre. Står nesten alltid uten artikkel, og er derfor bart oppslag: i sentrum, mot sentrum." },
      ],
    },
    {
      id: "no-u81l4",
      unit: 81,
      lesson: 4,
      title: "Bensin og avgifter",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Pay for driving — fuel, tolls, charges, and what happens when winter closes the road.",
      items: [
        { id: "no-u81l4-bensin", type: "vocab", front: "bensin", reading: "bensin", meaning: "petrol", example: { jp: "Bensinen er dyrere her enn på den andre siden av grensa.", en: "Petrol is more expensive here than on the other side of the border." }, accept: ["gasoline", "gas", "fuel"], drill: { jp: "Bensin er dyrere her", en: "Petrol is more expensive here" }, hint: "bensin → bensinen. Massesubstantiv, derfor bart oppslag (regel 1b). Diesel er det andre drivstoffet." },
        { id: "no-u81l4-enbensinstasjon", type: "vocab", front: "en bensinstasjon", reading: "enbensinstasjon", meaning: "petrol station", example: { jp: "Bensinstasjonen før fjellet ligger i bygda.", en: "The petrol station before the mountain is in the village." }, accept: ["a gas station", "a filling station"], drill: { jp: "Det ligger en bensinstasjon i bygda", en: "There is a petrol station in the village" }, hint: "en bensinstasjon → bensinstasjonen. Ofte den eneste butikken som er åpen sent på bygda." },
        { id: "no-u81l4-bompenger", type: "vocab", front: "bompenger", reading: "bompenger", meaning: "road tolls", example: { jp: "Vi betaler bompenger hver gang vi kjører inn til byen.", en: "We pay road tolls every time we drive into the city." }, accept: ["a toll", "toll charges"], drill: { jp: "Vi betaler bompenger hver dag", en: "We pay road tolls every day" }, hint: "Flertallsord som penger (u7) — aldri en bompeng. En bom er the barrier; en bomring er the ring of them around a city." },
        { id: "no-u81l4-broyting", type: "vocab", front: "brøyting", reading: "broyting", meaning: "snow clearing", example: { jp: "Uten brøyting kommer ingen seg ut av gata om vinteren.", en: "Without snow clearing nobody gets out of the street in the winter." }, accept: ["ploughing", "snow ploughing"], drill: { jp: "Uten brøyting kommer ingen ut", en: "Without snow clearing nobody gets out" }, hint: "brøyting → brøytinga. Fra å brøyte. Massesubstantiv, derfor bart oppslag. En brøytebil er the snowplough, og den kommer før du står opp." },
        { id: "no-u81l4-etdrivstoff", type: "vocab", front: "drivstoff", reading: "drivstoff", meaning: "fuel", example: { jp: "Prisen på drivstoff har steget mye i år.", en: "The price of fuel has risen a lot this year." }, accept: ["motor fuel", "petrol or diesel"], drill: { jp: "Prisen på drivstoff stiger", en: "The price of fuel is rising" }, hint: "å drive + et stoff. Intetkjønn: bestemt drivstoffet. Massesubstantiv, derfor bart oppslag (unit1.js §1b). Samlebegrepet for bensin og diesel — det ordet staten og avisene bruker."},
        { id: "no-u81l4-enbomstasjon", type: "vocab", front: "en bomstasjon", reading: "enbomstasjon", meaning: "a toll gate", example: { jp: "Bilen kjører gjennom en bomstasjon på veien til Oslo.", en: "The car drives through a toll gate on the road to Oslo." }, drill: { jp: "Vi kjørte gjennom en bomstasjon i dag", en: "We drove through a toll gate today" }, accept: ["a toll point", "a toll booth", "a road toll station"], hint: "BOM-sta-sjon. En bom is a barrier and en stasjon is masculine, so the compound is too: definite bomstasjonen, plural bomstasjoner. There is no barrier any more — a camera reads the plate and bompenger turn up on a bill." },
      ],
    },
  ],
};
