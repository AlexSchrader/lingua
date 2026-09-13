// DE Unit 46 — Werkzeug und Reparatur (slot: vocabulary 7 (A2)) — A2
// Block 3 (u41–u50), coverage pass. Conventions: see de/unit1.js.
//
// THEME: tools and simple repair — an open concrete domain (reparieren, messen,
// das Werkzeug itself are taken; the individual tools are not). Fronts checked at
// FRONT and LEXEME level against A1 + all three A2 blocks. READING-FOLD NOTE: the
// verb "sägen" folds to "sagen", which collides with A1's "sagen" (to say) — a
// card that would accept the other's typed answer — so it is dropped; the noun
// "die Säge" (→ diesage) is kept. CONSEQUENCE: check-forward-refs reports `sage`
// "used from u29, taught u46". That is the fold, not a forward reference — u29's
// "Ich sage es" is the 1sg of sagen, carded at u20l2. Nothing to fix; do not
// rewrite u29 to silence it. der Meißel carries a HAND-WRITTEN reading
// (dermeissel): ß does not fold, so it is spelled ss by hand (see de/unit1.js).
export const DE_UNIT46 = {
  id: "de-u46",
  lang: "de",
  title: "Werkzeug und Reparatur",
  order: 46,
  stage: "a2",
  lessons: [
    {
      id: "de-u46l1",
      unit: 46,
      lesson: 1,
      title: "Handwerkzeug",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the tools on a workbench: hammer, screwdriver, pliers, saw, drill, brush.",
      items: [
        { id: "de-u46l1-derhammer", type: "vocab", front: "der Hammer", reading: "derhammer", meaning: "the hammer", example: { jp: "Kannst du mir bitte den Hammer geben?", en: "Can you give me the hammer, please?" }, drill: { jp: "Der Hammer ist schwer", en: "The hammer is heavy" }, accept: ["hammer", "the hammer"], hint: "Also slang: das ist der Hammer! = that's amazing (or terrible)." },
        { id: "de-u46l1-derschraubenzieher", type: "vocab", front: "der Schraubenzieher", reading: "derschraubenzieher", meaning: "the screwdriver", example: { jp: "Der Schraubenzieher ist zu klein.", en: "The screwdriver is too small." }, drill: { jp: "Der Schraubenzieher ist neu", en: "The screwdriver is new" }, accept: ["screwdriver", "the screwdriver"], hint: "die Schraube (screw) + ziehen (pull) — the screw-turner." },
        { id: "de-u46l1-diezange", type: "vocab", front: "die Zange", reading: "diezange", meaning: "the pliers", example: { jp: "Nimm die Zange, nicht die Hand!", en: "Use the pliers, not your hand!" }, drill: { jp: "Die Zange ist sehr alt", en: "The pliers are very old" }, accept: ["pliers", "the pliers", "the tongs"], hint: "Singular in German though 'pliers' is plural in English." },
        { id: "de-u46l1-diesage", type: "vocab", front: "die Säge", reading: "diesage", meaning: "the saw", example: { jp: "Mit der Säge schneidet man das Holz.", en: "You cut the wood with the saw." }, drill: { jp: "Die Säge ist scharf", en: "The saw is sharp" }, accept: ["saw", "the saw"], hint: "The tool. (The verb 'to saw' is not taught here — it would clash with sagen, to say.)" },
        { id: "de-u46l1-dasloch", type: "vocab", front: "das Loch", reading: "dasloch", meaning: "the hole", example: { jp: "In der Wand ist ein kleines Loch.", en: "There is a small hole in the wall." }, drill: { jp: "Das Loch ist sehr klein", en: "The hole is very small" }, accept: ["hole", "the hole"], hint: "Plural has an umlaut: die Löcher. ein Loch bohren = to drill a hole." },
        { id: "de-u46l1-derbohrer", type: "vocab", front: "der Bohrer", reading: "derbohrer", meaning: "the drill bit", example: { jp: "Der Bohrer macht ein Loch in die Wand.", en: "The drill bit makes a hole in the wall." }, drill: { jp: "Der Bohrer ist kaputt", en: "The drill bit is broken" }, accept: ["drill", "the drill", "drill bit", "the bit"], hint: "From bohren. The bit itself; the machine is die Bohrmaschine." },
        { id: "de-u46l1-derpinsel", type: "vocab", front: "der Pinsel", reading: "derpinsel", meaning: "the brush", example: { jp: "Mit dem Pinsel malt das Kind ein Bild.", en: "The child paints a picture with the brush." }, drill: { jp: "Der Pinsel ist voller Farbe", en: "The brush is full of paint" }, accept: ["brush", "the brush", "the paintbrush"], hint: "An artist's or painter's brush. A cleaning brush is die Bürste." },
      ],
    },
    {
      id: "de-u46l2",
      unit: 46,
      lesson: 2,
      title: "Nägel und Schrauben",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name what holds things together: nail, screw, wire, tape, hook, file.",
      items: [
        { id: "de-u46l2-dernagel", type: "vocab", front: "der Nagel", reading: "dernagel", meaning: "the nail", example: { jp: "Der Nagel ist zu lang für das Brett.", en: "The nail is too long for the board." }, drill: { jp: "Der Nagel ist sehr klein", en: "The nail is very small" }, accept: ["nail", "the nail"], hint: "For wood, and also a fingernail — der Fingernagel. Plural: die Nägel." },
        { id: "de-u46l2-dieschraube", type: "vocab", front: "die Schraube", reading: "dieschraube", meaning: "the screw", example: { jp: "Die Schraube ist zu klein.", en: "The screw is too small." }, drill: { jp: "Die Schraube ist lang", en: "The screw is long" }, accept: ["screw", "the screw", "the bolt"], hint: "The verb schrauben and der Schraubenzieher are built on it." },
        { id: "de-u46l2-derdraht", type: "vocab", front: "der Draht", reading: "derdraht", meaning: "the wire", example: { jp: "Der Draht ist sehr dünn.", en: "The wire is very thin." }, drill: { jp: "Der Draht ist lang", en: "The wire is long" }, accept: ["wire", "the wire"], hint: "Metal wire. Plural has an umlaut: die Drähte." },
        { id: "de-u46l2-dasklebeband", type: "vocab", front: "das Klebeband", reading: "dasklebeband", meaning: "the tape", example: { jp: "Ich brauche Klebeband für das Fenster.", en: "I need tape for the window." }, drill: { jp: "Das Klebeband ist weg", en: "The tape is gone" }, accept: ["tape", "the tape", "the sticky tape", "adhesive tape"], hint: "kleben (to stick) + das Band (band, tape)." },
        { id: "de-u46l2-derhaken", type: "vocab", front: "der Haken", reading: "derhaken", meaning: "the hook", example: { jp: "Am Haken hängt die Jacke.", en: "The jacket hangs on the hook." }, drill: { jp: "Der Haken ist an der Wand", en: "The hook is on the wall" }, accept: ["hook", "the hook", "the catch"], hint: "Also a snag or catch: die Sache hat einen Haken, there's a catch." },
        { id: "de-u46l2-diefeile", type: "vocab", front: "die Feile", reading: "diefeile", meaning: "the file", example: { jp: "Mit der Feile macht man den Draht glatt.", en: "You make the wire smooth with the file." }, drill: { jp: "Die Feile ist klein", en: "The file is small" }, accept: ["file", "the file"], hint: "The tool that smooths. A nail file is die Nagelfeile." },
      ],
    },
    {
      id: "de-u46l3",
      unit: 46,
      lesson: 3,
      title: "Etwas reparieren",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you do with the tools: drill, screw, hammer, sand, glue, tighten.",
      items: [
        { id: "de-u46l3-bohren", type: "vocab", front: "bohren", reading: "bohren", meaning: "to drill", example: { jp: "Ich muss ein Loch in die Wand bohren.", en: "I have to drill a hole in the wall." }, drill: { jp: "Wir bohren ein Loch", en: "We drill a hole" }, accept: ["to drill", "to bore"], hint: "The bit is der Bohrer, the machine die Bohrmaschine." },
        { id: "de-u46l3-schrauben", type: "vocab", front: "schrauben", reading: "schrauben", meaning: "to screw", example: { jp: "Er schraubt das Regal an die Wand.", en: "He screws the shelf to the wall." }, drill: { jp: "Wir schrauben das Brett fest", en: "We screw the board on tight" }, accept: ["to screw", "to bolt"], hint: "From die Schraube. anschrauben = to screw on." },
        { id: "de-u46l3-hammern", type: "vocab", front: "hämmern", reading: "hammern", meaning: "to hammer", example: { jp: "Der Mann hämmert lange.", en: "The man hammers for a long time." }, drill: { jp: "Wir hämmern den Nagel", en: "We hammer the nail" }, accept: ["to hammer", "to pound"], hint: "From der Hammer. Also of the heart: mein Herz hämmert." },
        { id: "de-u46l3-schleifen", type: "vocab", front: "schleifen", reading: "schleifen", meaning: "to sand", example: { jp: "Man muss die Tür noch schleifen.", en: "The door still has to be sanded." }, drill: { jp: "Wir schleifen das Brett", en: "We sand the board" }, accept: ["to sand", "to grind", "to sharpen"], hint: "To smooth or sharpen by rubbing — wood, or a knife." },
        { id: "de-u46l3-kleben", type: "vocab", front: "kleben", reading: "kleben", meaning: "to glue", example: { jp: "Ich klebe das Foto an die Wand.", en: "I stick the photo on the wall." }, drill: { jp: "Wir kleben das Bild an die Wand", en: "We stick the picture on the wall" }, accept: ["to glue", "to stick", "to paste"], hint: "das Klebeband (tape) is built on it. Also intransitive: to be sticky." },
        { id: "de-u46l3-festziehen", type: "vocab", front: "festziehen", reading: "festziehen", meaning: "to tighten", example: { jp: "Bitte die Schraube gut festziehen.", en: "Please tighten the screw well." }, drill: { jp: "Wir müssen die Schraube festziehen", en: "We have to tighten the screw" }, accept: ["to tighten", "to fasten"], hint: "Separable (zieht … fest), so it stays whole after a modal — which the drill uses. fest (tight) + ziehen (pull)." },
      ],
    },
    {
      id: "de-u46l4",
      unit: 46,
      lesson: 4,
      title: "In der Werkstatt",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name what else is in the workshop: board, ladder, handle, blade, chisel, the instructions.",
      items: [
        { id: "de-u46l4-dasholz", type: "vocab", front: "das Holz", reading: "dasholz", meaning: "the wood", example: { jp: "Der Tisch ist aus Holz.", en: "The table is made of wood." }, drill: { jp: "Das Holz ist alt", en: "The wood is old" }, accept: ["wood", "the wood", "timber"], hint: "The material, not a forest — that is der Wald. aus Holz = made of wood." },
        { id: "de-u46l4-dasbrett", type: "vocab", front: "das Brett", reading: "dasbrett", meaning: "the board", example: { jp: "Das Brett ist aus Holz.", en: "The board is made of wood." }, drill: { jp: "Das Brett ist zu kurz", en: "The board is too short" }, accept: ["board", "the board", "the plank", "the shelf"], hint: "A plank or board. das schwarze Brett = the notice board." },
        { id: "de-u46l4-dieleiter", type: "vocab", front: "die Leiter", reading: "dieleiter", meaning: "the ladder", example: { jp: "Er steht oben auf der Leiter.", en: "He is standing at the top of the ladder." }, drill: { jp: "Die Leiter ist sehr hoch", en: "The ladder is very high" }, accept: ["ladder", "the ladder"], hint: "die Leiter with a capital and 'die' is the ladder; der Leiter is a (male) manager." },
        { id: "de-u46l4-dergriff", type: "vocab", front: "der Griff", reading: "dergriff", meaning: "the handle", example: { jp: "Der Griff von der Tür ist aus Holz.", en: "The door's handle is made of wood." }, drill: { jp: "Der Griff ist kaputt", en: "The handle is broken" }, accept: ["handle", "the handle", "the grip"], hint: "From greifen, to grasp. The part you hold." },
        { id: "de-u46l4-dieklinge", type: "vocab", front: "die Klinge", reading: "dieklinge", meaning: "the blade", example: { jp: "Die Klinge vom Messer ist scharf.", en: "The knife's blade is sharp." }, drill: { jp: "Die Klinge ist sehr scharf", en: "The blade is very sharp" }, accept: ["blade", "the blade"], hint: "The sharp part of a knife or a tool." },
        { id: "de-u46l4-dermeissel", type: "vocab", front: "der Meißel", reading: "dermeissel", meaning: "the chisel", example: { jp: "Mit dem Meißel arbeitet man in Holz.", en: "You work in wood with the chisel." }, drill: { jp: "Der Meißel ist alt", en: "The chisel is old" }, accept: ["chisel", "the chisel"], hint: "For stone or wood. Note the ß — the reading is spelled dermeissel." },
        { id: "de-u46l4-dieanleitung", type: "vocab", front: "die Anleitung", reading: "dieanleitung", meaning: "the instructions", example: { jp: "Ohne Anleitung kann ich das nicht machen.", en: "Without the instructions I can't do it." }, drill: { jp: "Ich lese die Anleitung", en: "I read the instructions" }, accept: ["instructions", "the instructions", "the manual", "the guide"], hint: "From anleiten, to guide. The step-by-step manual." },
      ],
    },
  ],
};
