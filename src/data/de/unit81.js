// DE Unit 81 — Notfall und Sicherheit (slot: coverage-b1-8) — B1
// Block 3 (u76-u87), the COVERAGE PASS. Conventions: see de/unit1.js.
//
// WHY THIS THEME. u25 has ONE lesson called "Notfall und Erholung" and it carries
// der Notfall, der Krankenwagen, sich verletzen, die Wunde and das Blut — the
// PATIENT's half. Nothing in u1-u75 teaches the half a learner needs to be useful
// to somebody else: making the call, naming the fire brigade, finding the exit,
// warning a stranger, saying what the risk is.
//
// FRONTS DROPPED as already taught, used in examples only:
//   der Notfall, der Krankenwagen, sich verletzen, die Wunde, das Blut (u25) ·
//   vorsichtig (u31) · loeschen (u33, to delete) · sicher (u12) so sichern and
//   die Sicherheit are its lexemes · schuetzen (u34) so der Schutz is its lexeme.
// ⚠️ "loeschen" being taught as "to delete" is why the fire verb is missing here:
// the fire sense is the same front. der Feuerloescher carries it instead.
export const DE_UNIT81 = {
  id: "de-u81",
  lang: "de",
  title: "Notfall und Sicherheit",
  order: 81,
  stage: "b1",
  lessons: [
    {
      id: "de-u81l1",
      unit: 81,
      lesson: 1,
      title: "Der Notruf",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Call the German emergency number and say what has happened and where.",
      items: [
        { id: "de-u81l1-dernotruf", type: "vocab", front: "der Notruf", reading: "dernotruf", meaning: "the emergency call", example: { jp: "Bei einem Unfall macht man einen Notruf.", en: "In an accident you make an emergency call." }, drill: { jp: "Der Notruf kommt sehr schnell", en: "The emergency call goes through very fast" }, accept: ["emergency call", "the emergency call", "the emergency number", "the 999 call"], hint: "In Germany 112 for fire and ambulance, 110 for the police." },
        { id: "de-u81l1-derunfall", type: "vocab", front: "der Unfall", reading: "derunfall", meaning: "the accident", example: { jp: "Auf der Straße war ein Unfall.", en: "There was an accident on the street." }, drill: { jp: "Der Unfall war sehr groß", en: "The accident was very big" }, accept: ["accident", "the accident", "the crash", "the collision"], hint: "einen Unfall haben = to have an accident. Plural: die Unfälle." },
        { id: "de-u81l1-diefeuerwehr", type: "vocab", front: "die Feuerwehr", reading: "diefeuerwehr", meaning: "the fire brigade", example: { jp: "Die Feuerwehr kommt in fünf Minuten.", en: "The fire brigade is coming in five minutes." }, drill: { jp: "Die Feuerwehr ist schon hier", en: "The fire brigade is already here" }, accept: ["fire brigade", "the fire brigade", "fire service", "the fire department", "the firefighters"], hint: "das Feuer + die Wehr, the defence. In small towns they are volunteers." },
        { id: "de-u81l1-dersanitater", type: "vocab", front: "der Sanitäter", reading: "dersanitater", meaning: "the paramedic", example: { jp: "Der Sanitäter hilft dem Mann auf der Straße.", en: "The paramedic helps the man in the street." }, drill: { jp: "Der Sanitäter kommt mit dem Krankenwagen", en: "The paramedic comes with the ambulance" }, accept: ["paramedic", "the paramedic", "the medic", "the first responder", "the ambulance crew"], hint: "From die Sanität. The person who arrives in the Krankenwagen." },
        { id: "de-u81l1-dienotaufnahme", type: "vocab", front: "die Notaufnahme", reading: "dienotaufnahme", meaning: "the emergency department", example: { jp: "In der Notaufnahme muss man lange warten.", en: "In the emergency department you have to wait a long time." }, drill: { jp: "Die Notaufnahme ist im Krankenhaus", en: "The emergency department is in the hospital" }, accept: ["emergency department", "the emergency department", "A and E", "the emergency room", "casualty"], hint: "die Not + aufnehmen: where a hospital takes you in with no appointment." },
        { id: "de-u81l1-reagieren", type: "vocab", front: "reagieren", reading: "reagieren", meaning: "to react", example: { jp: "Bei einem Unfall muss man schnell reagieren.", en: "In an accident you have to react quickly." }, drill: { jp: "Man muss schnell reagieren", en: "You have to react quickly" }, accept: ["to react", "react", "to respond", "respond"], hint: "Said 'ree-a-GEE-ren'. reagieren auf etwas = to react to something." },
      ],
    },
    {
      id: "de-u81l2",
      unit: 81,
      lesson: 2,
      title: "Feuer und Rauch",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Report a fire in German, find the exit and get people out of the building.",
      items: [
        { id: "de-u81l2-brennen", type: "vocab", front: "brennen", reading: "brennen", meaning: "to burn", example: { jp: "Es brennt im Keller!", en: "There's a fire in the cellar!" }, drill: { jp: "Das Haus kann schnell brennen", en: "The house can burn quickly" }, accept: ["to burn", "burn", "to be on fire", "be on fire"], hint: "Es brennt! is how a German shouts FIRE. Strong verb: brannte, gebrannt." },
        { id: "de-u81l2-derrauch", type: "vocab", front: "der Rauch", reading: "derrauch", meaning: "the smoke", example: { jp: "Der Rauch kommt unter der Tür durch.", en: "The smoke is coming through under the door." }, drill: { jp: "Der Rauch ist schon im Flur", en: "The smoke is already in the hallway" }, accept: ["smoke", "the smoke", "the fumes"], hint: "rauchen = to smoke, both a cigarette and a chimney. der Rauchmelder = smoke alarm." },
        { id: "de-u81l2-derfeuerloscher", type: "vocab", front: "der Feuerlöscher", reading: "derfeuerloscher", meaning: "the fire extinguisher", example: { jp: "Der Feuerlöscher hängt neben der Tür.", en: "The fire extinguisher hangs next to the door." }, drill: { jp: "Der Feuerlöscher ist sehr schwer", en: "The fire extinguisher is very heavy" }, accept: ["fire extinguisher", "the fire extinguisher", "the extinguisher"], hint: "löschen = to put out. Every German stairwell has one on the wall." },
        { id: "de-u81l2-dernotausgang", type: "vocab", front: "der Notausgang", reading: "dernotausgang", meaning: "the emergency exit", example: { jp: "Der Notausgang ist dort links.", en: "The emergency exit is over there on the left." }, drill: { jp: "Der Notausgang ist dort rechts", en: "The emergency exit is over there on the right" }, accept: ["emergency exit", "the emergency exit", "fire exit", "the fire exit"], hint: "die Not + der Ausgang. The green running-man sign above the door." },
        { id: "de-u81l2-fluchten", type: "vocab", front: "flüchten", reading: "fluchten", meaning: "to flee", example: { jp: "Wir müssen aus dem Haus flüchten.", en: "We have to flee the building." }, drill: { jp: "Wir müssen schnell flüchten", en: "We have to flee quickly" }, accept: ["to flee", "flee", "to escape", "escape", "to run away"], hint: "die Flucht = the escape. A refugee is ein Flüchtling." },
        { id: "de-u81l2-deralarm", type: "vocab", front: "der Alarm", reading: "deralarm", meaning: "the alarm", example: { jp: "Der Alarm ist sehr laut.", en: "The alarm is very loud." }, drill: { jp: "Der Alarm kommt aus dem Keller", en: "The alarm is coming from the cellar" }, accept: ["alarm", "the alarm", "the alert", "the siren"], hint: "Alarm schlagen = to raise the alarm. Said 'a-LARM', stress at the end." },
      ],
    },
    {
      id: "de-u81l3",
      unit: 81,
      lesson: 3,
      title: "Erste Hilfe",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Give first aid and describe someone who has collapsed.",
      items: [
        { id: "de-u81l3-dieerstehilfe", type: "vocab", front: "die Erste Hilfe", reading: "dieerstehilfe", meaning: "first aid", example: { jp: "Die Erste Hilfe ist nicht schwer.", en: "First aid is not difficult." }, drill: { jp: "Die Erste Hilfe lernt man schnell", en: "You learn first aid quickly" }, accept: ["first aid", "the first aid", "emergency first aid"], hint: "A first-aid course is required before you get a German driving licence." },
        { id: "de-u81l3-derverband", type: "vocab", front: "der Verband", reading: "derverband", meaning: "the bandage", example: { jp: "Der Arzt macht einen Verband um den Arm.", en: "The doctor puts a bandage round the arm." }, drill: { jp: "Der Verband ist noch sauber", en: "The bandage is still clean" }, accept: ["bandage", "the bandage", "the dressing", "the wrapping"], hint: "verbinden = to bind up. It also means an association: der Sportverband." },
        { id: "de-u81l3-ohnmachtig", type: "vocab", front: "ohnmächtig", reading: "ohnmachtig", meaning: "unconscious", example: { jp: "Die Frau ist ohnmächtig, sie hört nichts.", en: "The woman is unconscious, she can't hear anything." }, drill: { jp: "Der Mann ist schon ohnmächtig", en: "The man is already unconscious" }, accept: ["unconscious", "in a faint", "passed out", "fainted"], hint: "ohne + die Macht, without power. ohnmächtig werden = to faint." },
        { id: "de-u81l3-derschock", type: "vocab", front: "der Schock", reading: "derschock", meaning: "the shock", example: { jp: "Nach dem Unfall hat er einen Schock.", en: "After the accident he is in shock." }, drill: { jp: "Der Schock kommt oft später", en: "The shock often comes later" }, accept: ["shock", "the shock", "the state of shock"], hint: "unter Schock stehen = to be in shock. Said like English 'shock'." },
        { id: "de-u81l3-retten", type: "vocab", front: "retten", reading: "retten", meaning: "to rescue", example: { jp: "Die Feuerwehr kann das Kind retten.", en: "The fire brigade can rescue the child." }, drill: { jp: "Wir müssen das Kind retten", en: "We have to rescue the child" }, accept: ["to rescue", "rescue", "to save", "save"], hint: "die Rettung = the rescue; der Rettungswagen is the other word for ambulance." },
        { id: "de-u81l3-diepanik", type: "vocab", front: "die Panik", reading: "diepanik", meaning: "the panic", example: { jp: "In der Panik findet niemand den Notausgang.", en: "In the panic nobody finds the emergency exit." }, drill: { jp: "Die Panik kommt sehr schnell", en: "The panic comes very quickly" }, accept: ["panic", "the panic", "panicking"], hint: "Keine Panik! = Don't panic. Stress on the front: PA-nik." },
      ],
    },
    {
      id: "de-u81l4",
      unit: 81,
      lesson: 4,
      title: "Gefahr und Ausrüstung",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Warn someone about a danger and name the safety gear you need.",
      items: [
        { id: "de-u81l4-diegefahr", type: "vocab", front: "die Gefahr", reading: "diegefahr", meaning: "the danger", example: { jp: "Bei Rauch ist die Gefahr sehr groß.", en: "With smoke the danger is very great." }, drill: { jp: "Die Gefahr kommt von der Straße", en: "The danger comes from the road" }, accept: ["danger", "the danger", "hazard", "the hazard", "the peril"], hint: "gefährlich = dangerous. außer Gefahr = out of danger." },
        { id: "de-u81l4-warnen", type: "vocab", front: "warnen", reading: "warnen", meaning: "to warn", example: { jp: "Ich will dich vor der Gefahr warnen.", en: "I want to warn you about the danger." }, drill: { jp: "Wir müssen die Bewohner warnen", en: "We have to warn the residents" }, accept: ["to warn", "warn", "to alert", "alert", "to caution"], hint: "warnen vor = to warn about. die Warnung = the warning." },
        { id: "de-u81l4-dasrisiko", type: "vocab", front: "das Risiko", reading: "dasrisiko", meaning: "the risk", example: { jp: "Das Risiko ist bei dem Wetter zu groß.", en: "The risk is too great in this weather." }, drill: { jp: "Das Risiko ist sehr hoch", en: "The risk is very high" }, accept: ["risk", "the risk", "the chance of harm"], hint: "Plural die Risiken. ein Risiko eingehen = to take a risk." },
        { id: "de-u81l4-dasungluck", type: "vocab", front: "das Unglück", reading: "dasungluck", meaning: "the disaster", example: { jp: "Nach dem Unglück kommt die Feuerwehr.", en: "After the disaster the fire brigade comes." }, drill: { jp: "Das Unglück war sehr groß", en: "The disaster was very big" }, accept: ["disaster", "the disaster", "the misfortune", "the calamity", "bad luck"], hint: "un + das Glück: the opposite of luck. A disaster, and also plain bad luck." },
        { id: "de-u81l4-dieausrustung", type: "vocab", front: "die Ausrüstung", reading: "dieausrustung", meaning: "the equipment", example: { jp: "Die Feuerwehr hat eine gute Ausrüstung.", en: "The fire brigade has good equipment." }, drill: { jp: "Die Ausrüstung ist sehr teuer", en: "The equipment is very expensive" }, accept: ["equipment", "the equipment", "the gear", "the kit"], hint: "ausrüsten = to equip. Sports, climbing and fire gear are all Ausrüstung." },
        { id: "de-u81l4-derhelm", type: "vocab", front: "der Helm", reading: "derhelm", meaning: "the helmet", example: { jp: "Auf dem Fahrrad trage ich einen Helm.", en: "On the bike I wear a helmet." }, drill: { jp: "Der Helm ist zu klein", en: "The helmet is too small" }, accept: ["helmet", "the helmet", "the hard hat"], hint: "der Fahrradhelm, der Bauhelm. Plural: die Helme." },
      ],
    },
  ],
};
