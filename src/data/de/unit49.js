// DE Unit 49 — Eigenschaften und Zustände (slot: vocabulary 10 (A2)) — A2
// Block 3 (u41–u50), coverage pass. Conventions: see de/unit1.js.
//
// THEME: descriptive ADJECTIVES of shape, texture and state — a frequency pass on
// the physical properties A1's "describing things" left out (groß, klein, alt,
// neu, hart, weich, sauber, leer, voll are taken; flach, steil, hohl, zäh are
// not). Fronts checked at FRONT and LEXEME level against A1 + all three A2 blocks.
// Folds: zäh→zah, glänzend→glanzend (umlauts fold on their own). Examples use only
// Examples and drills use only vocab introduced at or before u49:
// verified by `node scripts/scope-strict-de.mjs 45 50`, which applies NO inflection
// excuse and reports 0 out-of-scope tokens across u45-u50.
// Adjectives are shown in the predicate.
export const DE_UNIT49 = {
  id: "de-u49",
  lang: "de",
  title: "Eigenschaften und Zustände",
  order: 49,
  stage: "a2",
  lessons: [
    {
      id: "de-u49l1",
      unit: 49,
      lesson: 1,
      title: "Form und Fläche",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe shape: flat, steep, angular, crooked, pointed, oval.",
      items: [
        { id: "de-u49l1-flach", type: "vocab", front: "flach", reading: "flach", meaning: "flat", example: { jp: "Der Weg hier ist sehr flach.", en: "The path here is very flat." }, drill: { jp: "Der Teller ist flach", en: "The plate is flat" }, accept: ["flat", "shallow", "level"], hint: "Of land, a plate, or shallow water — flaches Wasser." },
        { id: "de-u49l1-steil", type: "vocab", front: "steil", reading: "steil", meaning: "steep", example: { jp: "Der Weg nach oben ist steil.", en: "The path up is steep." }, drill: { jp: "Der Berg ist steil", en: "The mountain is steep" }, accept: ["steep"], hint: "Of a hill, a road or stairs. The opposite of flach for a slope." },
        { id: "de-u49l1-eckig", type: "vocab", front: "eckig", reading: "eckig", meaning: "angular", example: { jp: "Der Tisch ist eckig, nicht oval.", en: "The table is square, not oval." }, drill: { jp: "Das Fenster ist eckig", en: "The window is square" }, accept: ["angular", "square", "cornered", "boxy"], hint: "From die Ecke, the corner. Having corners rather than being round." },
        { id: "de-u49l1-schief", type: "vocab", front: "schief", reading: "schief", meaning: "crooked", example: { jp: "Das Bild hängt schief an der Wand.", en: "The picture hangs crooked on the wall." }, drill: { jp: "Das Regal ist schief", en: "The shelf is crooked" }, accept: ["crooked", "slanted", "lopsided", "at an angle"], hint: "Not straight. schiefgehen = to go wrong." },
        { id: "de-u49l1-spitz", type: "vocab", front: "spitz", reading: "spitz", meaning: "pointed", example: { jp: "Das Messer ist vorne sehr spitz.", en: "The knife is very pointed at the front." }, drill: { jp: "Der Berg ist spitz", en: "The mountain is pointed" }, accept: ["pointed", "sharp", "pointy"], hint: "Coming to a point. die Spitze is the tip or point." },
        { id: "de-u49l1-oval", type: "vocab", front: "oval", reading: "oval", meaning: "oval", example: { jp: "Der Tisch ist oval.", en: "The table is oval." }, drill: { jp: "Das Ei ist oval", en: "The egg is oval" }, accept: ["oval"], hint: "Egg-shaped. Said 'o-VAAL'." },
      ],
    },
    {
      id: "de-u49l2",
      unit: 49,
      lesson: 2,
      title: "Fest und locker",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe how firm something is: blunt, hollow, dense, loose, bendy, stiff.",
      items: [
        { id: "de-u49l2-hart", type: "vocab", front: "hart", reading: "hart", meaning: "hard", example: { jp: "Der Boden ist hart und kalt.", en: "The floor is hard and cold." }, drill: { jp: "Das Holz ist hart", en: "The wood is hard" }, accept: ["hard", "tough", "harsh"], hint: "Hard to the touch, and of a winter or a life: harsh. Comparative: härter." },
        { id: "de-u49l2-stumpf", type: "vocab", front: "stumpf", reading: "stumpf", meaning: "blunt", example: { jp: "Das Messer ist stumpf und schneidet nicht.", en: "The knife is blunt and doesn't cut." }, drill: { jp: "Der Bohrer ist stumpf", en: "The drill bit is blunt" }, accept: ["blunt", "dull"], hint: "The opposite of scharf (sharp). Also of a colour or mood: dull." },
        { id: "de-u49l2-hohl", type: "vocab", front: "hohl", reading: "hohl", meaning: "hollow", example: { jp: "Der alte Baum ist hohl.", en: "The old tree is hollow." }, drill: { jp: "Der Ball ist hohl", en: "The ball is hollow" }, accept: ["hollow", "empty inside"], hint: "Empty on the inside. die Höhle is a cave." },
        { id: "de-u49l2-dicht", type: "vocab", front: "dicht", reading: "dicht", meaning: "dense", example: { jp: "Der Wald ist hier sehr dicht.", en: "The forest is very dense here." }, drill: { jp: "Der Nebel ist dicht", en: "The fog is dense" }, accept: ["dense", "thick", "tight"], hint: "Packed close together — traffic, fog, a forest. Also watertight." },
        { id: "de-u49l2-locker", type: "vocab", front: "locker", reading: "locker", meaning: "loose", example: { jp: "Die Schraube ist locker.", en: "The screw is loose." }, drill: { jp: "Der Zahn ist locker", en: "The tooth is loose" }, accept: ["loose", "slack", "relaxed"], hint: "Not tight. Also of a person: laid-back, easy-going." },
        { id: "de-u49l2-biegsam", type: "vocab", front: "biegsam", reading: "biegsam", meaning: "bendy", example: { jp: "Der Draht ist dünn und biegsam.", en: "The wire is thin and bendy." }, drill: { jp: "Das Holz ist biegsam", en: "The wood is bendy" }, accept: ["bendy", "flexible", "pliable"], hint: "From biegen, to bend. Bends without breaking." },
        { id: "de-u49l2-starr", type: "vocab", front: "starr", reading: "starr", meaning: "rigid", example: { jp: "Das Brett ist hart und starr.", en: "The board is hard and rigid." }, drill: { jp: "Der Körper ist starr", en: "The body is rigid" }, accept: ["rigid", "stiff", "fixed"], hint: "The opposite of biegsam. Also of a stare: starr ansehen." },
      ],
    },
    {
      id: "de-u49l3",
      unit: 49,
      lesson: 3,
      title: "Nass, trocken, roh",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe state: damp, dry, raw, ripe, tough, sticky.",
      items: [
        { id: "de-u49l3-ganz", type: "vocab", front: "ganz", reading: "ganz", meaning: "completely", example: { jp: "Das Glas ist ganz voll.", en: "The glass is completely full." }, drill: { jp: "Die Flasche ist ganz leer", en: "The bottle is completely empty" }, accept: ["completely", "quite", "whole", "entirely", "all"], hint: "As an intensifier: ganz nah, right up close. Before a noun it means whole: den ganzen Tag." },
        { id: "de-u49l3-feucht", type: "vocab", front: "feucht", reading: "feucht", meaning: "damp", example: { jp: "Die Wand im Keller ist feucht.", en: "The wall in the cellar is damp." }, drill: { jp: "Die Luft ist feucht", en: "The air is damp" }, accept: ["damp", "moist", "humid"], hint: "Between nass (wet) and trocken (dry). Of air, cloth, walls." },
        { id: "de-u49l3-trocken", type: "vocab", front: "trocken", reading: "trocken", meaning: "dry", example: { jp: "Im Sommer ist die Erde oft trocken.", en: "In summer the soil is often dry." }, drill: { jp: "Das Brot ist trocken", en: "The bread is dry" }, accept: ["dry"], hint: "The opposite of nass. trockene Weine = dry wines." },
        { id: "de-u49l3-roh", type: "vocab", front: "roh", reading: "roh", meaning: "raw", example: { jp: "Der Fisch ist noch roh.", en: "The fish is still raw." }, drill: { jp: "Das Ei ist roh", en: "The egg is raw" }, accept: ["raw", "uncooked"], hint: "Not cooked. Also rough or brutal: rohe Gewalt." },
        { id: "de-u49l3-reif", type: "vocab", front: "reif", reading: "reif", meaning: "ripe", example: { jp: "Die Banane ist jetzt reif.", en: "The banana is ripe now." }, drill: { jp: "Der Apfel ist reif", en: "The apple is ripe" }, accept: ["ripe", "mature"], hint: "Of fruit, and of a person: mature. der Reifen (tyre) is a different word." },
        { id: "de-u49l3-zah", type: "vocab", front: "zäh", reading: "zah", meaning: "tough", example: { jp: "Das Brot ist alt und zäh.", en: "The bread is old and tough." }, drill: { jp: "Das Essen ist zäh", en: "The food is tough" }, accept: ["tough", "chewy", "tenacious"], hint: "Hard to chew. Of a person: tough, persistent." },
        { id: "de-u49l3-klebrig", type: "vocab", front: "klebrig", reading: "klebrig", meaning: "sticky", example: { jp: "Meine Hände sind ganz klebrig.", en: "My hands are all sticky." }, drill: { jp: "Der Tisch ist klebrig", en: "The table is sticky" }, accept: ["sticky"], hint: "From kleben, to stick. Covered in something that sticks." },
      ],
    },
    {
      id: "de-u49l4",
      unit: 49,
      lesson: 4,
      title: "Oberfläche und mehr",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "More properties: rough, shiny, matt, see-through, poisonous, fragile.",
      items: [
        { id: "de-u49l4-rau", type: "vocab", front: "rau", reading: "rau", meaning: "rough", example: { jp: "Das Holz ist noch ganz rau.", en: "The wood is still quite rough." }, drill: { jp: "Die Hand ist rau", en: "The hand is rough" }, accept: ["rough", "coarse", "harsh"], hint: "Not smooth to the touch. Also of weather or a voice: harsh." },
        { id: "de-u49l4-glanzend", type: "vocab", front: "glänzend", reading: "glanzend", meaning: "shiny", example: { jp: "Das Auto ist neu und glänzend.", en: "The car is new and shiny." }, drill: { jp: "Die Schuhe sind glänzend", en: "The shoes are shiny" }, accept: ["shiny", "gleaming", "glossy", "brilliant"], hint: "From glänzen, to shine. Also figuratively: glänzende Idee, a brilliant idea." },
        { id: "de-u49l4-matt", type: "vocab", front: "matt", reading: "matt", meaning: "matt", example: { jp: "Die Farbe ist matt, nicht glänzend.", en: "The paint is matt, not shiny." }, drill: { jp: "Das Foto ist matt", en: "The photo is matt" }, accept: ["matt", "matte", "dull", "faint"], hint: "The opposite of glänzend. Also weak or worn out: matt sein." },
        { id: "de-u49l4-durchsichtig", type: "vocab", front: "durchsichtig", reading: "durchsichtig", meaning: "see-through", example: { jp: "Das Glas ist ganz durchsichtig.", en: "The glass is completely see-through." }, drill: { jp: "Das Wasser ist durchsichtig", en: "The water is see-through" }, accept: ["see-through", "transparent", "clear"], hint: "durch (through) + sichtig (from sehen). Light passes through." },
        { id: "de-u49l4-giftig", type: "vocab", front: "giftig", reading: "giftig", meaning: "poisonous", example: { jp: "Die Pflanze ist sehr giftig.", en: "The plant is very poisonous." }, drill: { jp: "Das Wasser ist giftig", en: "The water is poisonous" }, accept: ["poisonous", "toxic", "venomous"], hint: "From das Gift, poison (a false friend — Gift is not a present!)." },
        { id: "de-u49l4-zerbrechlich", type: "vocab", front: "zerbrechlich", reading: "zerbrechlich", meaning: "fragile", example: { jp: "Das Glas ist sehr zerbrechlich.", en: "The glass is very fragile." }, drill: { jp: "Die Vase ist zerbrechlich", en: "The vase is fragile" }, accept: ["fragile", "breakable", "delicate"], hint: "From zerbrechen, to shatter. The label on fragile parcels." },
      ],
    },
  ],
};
