// DE Unit 82 — Verkehr und Regeln (slot: coverage-b1-9) — B1
// Block 3 (u76-u87), the COVERAGE PASS. Conventions: see de/unit1.js.
//
// WHY THIS THEME. u19 teaches public transport and u23 teaches the traveller's
// nouns (der Fuehrerschein, die Ampel, der Stau, tanken, parken) — the words you
// need as a PASSENGER. Nothing in u1-u75 teaches the words you need behind the
// wheel or crossing a German road: right of way, lanes, overtaking, braking,
// roadworks, a diversion, a fine.
//
// FRONTS DROPPED as already taught, used in examples only:
//   der Fuehrerschein, die Ampel, der Stau, tanken, parken (all u23) ·
//   das Lenkrad (lexeme of lenken, which IS carded here).
// ⚠️ CORRECTED — "die Werkstatt (u46)" was listed here as already taught. IT IS
// NOT TAUGHT ANYWHERE: the only occurrence in u46 is the LESSON TITLE "In der
// Werkstatt", and a title is not a card. It is a real gap, deferred rather than
// dropped — flagged to the lead. Caught by fact-checker, not by me.
// ⚠️ SS READINGS BY HAND (de/unit1.js): dasbussgeld, derfussganger.
export const DE_UNIT82 = {
  id: "de-u82",
  lang: "de",
  title: "Verkehr und Regeln",
  order: 82,
  stage: "b1",
  lessons: [
    {
      id: "de-u82l1",
      unit: 82,
      lesson: 1,
      title: "Fahren lernen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Take a German driving lesson: belt up, steer, indicate and reverse.",
      items: [
        { id: "de-u82l1-diefahrschule", type: "vocab", front: "die Fahrschule", reading: "diefahrschule", meaning: "the driving school", example: { jp: "Die Fahrschule kostet in Deutschland viel Geld.", en: "Driving school costs a lot of money in Germany." }, drill: { jp: "Die Fahrschule ist in der Stadt", en: "The driving school is in town" }, accept: ["driving school", "the driving school", "the driving lessons"], hint: "In Germany the lessons are compulsory — around two thousand euros." },
        { id: "de-u82l1-lenken", type: "vocab", front: "lenken", reading: "lenken", meaning: "to steer", example: { jp: "Mit einer Hand kann man nicht gut lenken.", en: "You can't steer well with one hand." }, drill: { jp: "Man muss das Auto lenken", en: "You have to steer the car" }, accept: ["to steer", "steer", "to guide", "to direct"], hint: "das Lenkrad = the steering wheel. Also: die Aufmerksamkeit lenken." },
        { id: "de-u82l1-anschnallen", type: "vocab", front: "anschnallen", reading: "anschnallen", meaning: "to fasten the seatbelt", example: { jp: "Bitte im Auto immer anschnallen.", en: "Please always fasten your seatbelt in the car." }, drill: { jp: "Wir müssen uns anschnallen", en: "We have to fasten our seatbelts" }, accept: ["to fasten the seatbelt", "fasten the seatbelt", "to buckle up", "buckle up", "to belt up"], hint: "Reflexive in use: ich schnalle mich an. der Gurt = the belt." },
        { id: "de-u82l1-derblinker", type: "vocab", front: "der Blinker", reading: "derblinker", meaning: "the indicator", example: { jp: "Vor der Kreuzung macht er den Blinker an.", en: "He puts the indicator on before the junction." }, drill: { jp: "Der Blinker ist schon an", en: "The indicator is already on" }, accept: ["indicator", "the indicator", "turn signal", "the turn signal", "the blinker"], hint: "blinken = to flash. Germans say: den Blinker setzen." },
        { id: "de-u82l1-ruckwarts", type: "vocab", front: "rückwärts", reading: "ruckwarts", meaning: "backwards", example: { jp: "Er fährt rückwärts auf den Stellplatz.", en: "He reverses into the parking space." }, drill: { jp: "Wir fahren jetzt rückwärts", en: "We are driving backwards now" }, accept: ["backwards", "in reverse", "back"], hint: "der Rücken = the back. The opposite is vorwärts." },
        { id: "de-u82l1-diegeschwindigkeit", type: "vocab", front: "die Geschwindigkeit", reading: "diegeschwindigkeit", meaning: "the speed", example: { jp: "Die Geschwindigkeit in der Stadt ist fünfzig.", en: "The speed in town is fifty." }, drill: { jp: "Die Geschwindigkeit ist zu hoch", en: "The speed is too high" }, accept: ["speed", "the speed", "the velocity", "the rate of travel"], hint: "Long but everyday — it is on every German road sign discussion." },
      ],
    },
    {
      id: "de-u82l2",
      unit: 82,
      lesson: 2,
      title: "Regeln auf der Straße",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow German road rules: signs, right of way, junctions and pedestrians.",
      items: [
        { id: "de-u82l2-dasverkehrsschild", type: "vocab", front: "das Verkehrsschild", reading: "dasverkehrsschild", meaning: "the road sign", example: { jp: "Das Verkehrsschild sagt: hier ist eine Schule.", en: "The road sign says: there is a school here." }, drill: { jp: "Das Verkehrsschild ist rot", en: "The road sign is red" }, accept: ["road sign", "the road sign", "traffic sign", "the traffic sign"], hint: "der Verkehr + das Schild. Round and red usually means a ban." },
        { id: "de-u82l2-dievorfahrt", type: "vocab", front: "die Vorfahrt", reading: "dievorfahrt", meaning: "the right of way", example: { jp: "An der Kreuzung hat er Vorfahrt.", en: "He has right of way at the junction." }, drill: { jp: "Die Vorfahrt hat der Bus", en: "The bus has right of way" }, accept: ["right of way", "the right of way", "priority", "the priority"], hint: "vor + fahren. With no sign, rechts vor links: the car on the right goes first." },
        { id: "de-u82l2-diekreuzung", type: "vocab", front: "die Kreuzung", reading: "diekreuzung", meaning: "the junction", example: { jp: "Die Kreuzung vor dem Bahnhof ist groß.", en: "The junction in front of the station is big." }, drill: { jp: "Die Kreuzung ist vor der Bank", en: "The junction is in front of the bank" }, accept: ["junction", "the junction", "crossroads", "the crossroads", "the intersection"], hint: "das Kreuz = the cross. A roundabout is der Kreisverkehr." },
        { id: "de-u82l2-abbiegen", type: "vocab", front: "abbiegen", reading: "abbiegen", meaning: "to turn off", example: { jp: "Sie müssen an der Ampel links abbiegen.", en: "You have to turn left at the traffic light." }, drill: { jp: "Wir müssen hier rechts abbiegen", en: "We have to turn right here" }, accept: ["to turn off", "turn off", "to turn", "turn", "to make a turn"], hint: "Separable: ich biege links ab. biegen = to bend." },
        { id: "de-u82l2-derfussganger", type: "vocab", front: "der Fußgänger", reading: "derfussganger", meaning: "the pedestrian", example: { jp: "Der Fußgänger geht über die Straße.", en: "The pedestrian walks across the road." }, drill: { jp: "Der Fußgänger wartet an der Ampel", en: "The pedestrian waits at the traffic light" }, accept: ["pedestrian", "the pedestrian", "the person on foot", "the walker"], hint: "der Fuß + gehen. die Fußgängerzone = the pedestrian precinct." },
        { id: "de-u82l2-hupen", type: "vocab", front: "hupen", reading: "hupen", meaning: "to honk", example: { jp: "In der Stadt darf man nicht hupen.", en: "You are not allowed to honk in town." }, drill: { jp: "Man darf hier nicht hupen", en: "You must not honk here" }, accept: ["to honk", "honk", "to sound the horn", "to hoot", "to beep"], hint: "die Hupe = the horn. In Germany it is legally a warning, not a greeting." },
      ],
    },
    {
      id: "de-u82l3",
      unit: 82,
      lesson: 3,
      title: "Auf der Autobahn",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Drive on a German motorway: lanes, overtaking, exits and braking.",
      items: [
        { id: "de-u82l3-dieautobahn", type: "vocab", front: "die Autobahn", reading: "dieautobahn", meaning: "the motorway", example: { jp: "Auf der Autobahn fahren die Autos sehr schnell.", en: "The cars drive very fast on the motorway." }, drill: { jp: "Die Autobahn ist heute voll", en: "The motorway is full today" }, accept: ["motorway", "the motorway", "highway", "the highway", "the freeway"], hint: "das Auto + die Bahn. Much of it still has no general speed limit." },
        { id: "de-u82l3-diespur", type: "vocab", front: "die Spur", reading: "diespur", meaning: "the lane", example: { jp: "Auf der Autobahn gibt es drei Spuren.", en: "On the motorway there are three lanes." }, drill: { jp: "Die Spur links ist voll", en: "The left lane is full" }, accept: ["lane", "the lane", "the track", "the trace"], hint: "Also a trace or a track: die Spur im Schnee. die Spur wechseln = change lanes." },
        { id: "de-u82l3-uberholen", type: "vocab", front: "überholen", reading: "uberholen", meaning: "to overtake", example: { jp: "Hier darf man nicht überholen.", en: "You are not allowed to overtake here." }, drill: { jp: "Wir wollen den Bus überholen", en: "We want to overtake the bus" }, accept: ["to overtake", "overtake", "to pass", "to pass another car"], hint: "In Germany you overtake on the LEFT only. NOT separable: ich überhole." },
        { id: "de-u82l3-dieausfahrt", type: "vocab", front: "die Ausfahrt", reading: "dieausfahrt", meaning: "the motorway exit", example: { jp: "Die Ausfahrt zur Stadt kommt jetzt.", en: "The exit to the town is coming up now." }, drill: { jp: "Die Ausfahrt ist schon hier", en: "The exit is already here" }, accept: ["motorway exit", "the motorway exit", "exit", "the exit", "the slip road"], hint: "aus + fahren. On a motorway the way ON is die Auffahrt; die Einfahrt is a driveway." },
        { id: "de-u82l3-rasen", type: "vocab", front: "rasen", reading: "rasen", meaning: "to speed along", example: { jp: "Er rast auf der Autobahn.", en: "He is speeding along the motorway." }, drill: { jp: "Man darf hier nicht rasen", en: "You must not speed here" }, accept: ["to speed along", "speed along", "to race", "to tear along", "to go too fast"], hint: "Stronger and more critical than schnell fahren. der Raser = the speeder." },
        { id: "de-u82l3-bremsen", type: "vocab", front: "bremsen", reading: "bremsen", meaning: "to brake", example: { jp: "Vor der Ampel muss man bremsen.", en: "You have to brake before the traffic light." }, drill: { jp: "Du musst jetzt schnell bremsen", en: "You have to brake quickly now" }, accept: ["to brake", "brake", "to slow down", "to put the brakes on"], hint: "die Bremse = the brake. Also used of people: jemanden bremsen." },
      ],
    },
    {
      id: "de-u82l4",
      unit: 82,
      lesson: 4,
      title: "Wenn etwas passiert",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Deal with a breakdown, roadworks, a diversion and a fine.",
      items: [
        { id: "de-u82l4-abschleppen", type: "vocab", front: "abschleppen", reading: "abschleppen", meaning: "to tow away", example: { jp: "Nach der Panne muss man das Auto abschleppen lassen.", en: "After the breakdown you have to have the car towed away." }, drill: { jp: "Sie können das Auto abschleppen", en: "They can tow the car away" }, accept: ["to tow away", "tow away", "to tow", "tow"], hint: "Separable: sie schleppen es ab. Park badly and you get abgeschleppt." },
        { id: "de-u82l4-derreifen", type: "vocab", front: "der Reifen", reading: "derreifen", meaning: "the tyre", example: { jp: "Der Reifen ist kaputt, wir können nicht fahren.", en: "The tyre is broken, we can't drive." }, drill: { jp: "Der Reifen ist ganz neu", en: "The tyre is completely new" }, accept: ["tyre", "the tyre", "tire", "the tire"], hint: "Winterreifen are legally required in German winter conditions." },
        { id: "de-u82l4-diebaustelle", type: "vocab", front: "die Baustelle", reading: "diebaustelle", meaning: "the roadworks", example: { jp: "Vor der Stadt ist eine große Baustelle.", en: "There are big roadworks before the town." }, drill: { jp: "Die Baustelle ist sehr lang", en: "The roadworks are very long" }, accept: ["roadworks", "the roadworks", "building site", "the building site", "the construction site"], hint: "bauen + die Stelle. Both roadworks and a building site." },
        { id: "de-u82l4-dieumleitung", type: "vocab", front: "die Umleitung", reading: "dieumleitung", meaning: "the diversion", example: { jp: "Bei der Baustelle gibt es eine Umleitung.", en: "There is a diversion at the roadworks." }, drill: { jp: "Die Umleitung geht durch die Stadt", en: "The diversion goes through the town" }, accept: ["diversion", "the diversion", "detour", "the detour"], hint: "um + leiten: led around. The yellow U sign on a German road." },
        { id: "de-u82l4-dasbussgeld", type: "vocab", front: "das Bußgeld", reading: "dasbussgeld", meaning: "the fine", example: { jp: "Wer zu schnell fährt, muss ein Bußgeld bezahlen.", en: "Whoever drives too fast has to pay a fine." }, drill: { jp: "Das Bußgeld ist sehr hoch", en: "The fine is very high" }, accept: ["fine", "the fine", "the penalty", "the penalty payment"], hint: "die Buße = the penance + das Geld. Written with ß." },
      ],
    },
  ],
};
