// FR Unit 88 — Fabriquer et réparer ("Making and mending") — B1
// Strand D, coverage unit 8 of 14 (block 3). Slot: coverage-b1-8 (generic
// "Vocabulary 8 (B1)"); given a real theme so the lessons cohere — slot number kept.
// The verbs of making something with your hands, plus the small hardware nouns.
// Deliberately NOT "work and process" — that abstract slot is block 1's u63.
// See unit84.js for the block-3 strategy.
export const FR_UNIT88 = {
  id: "fr-u88",
  lang: "fr",
  title: "Fabriquer et réparer",
  order: 88,
  stage: "b1",
  lessons: [
    {
      id: "fr-u88l1",
      unit: 88,
      lesson: 1,
      title: "Building it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how something gets made: manufacture it, build it, assemble it, screw it, nail it or sew it.",
      items: [
        { id: "fr-u88l1-fabriquer", type: "vocab", front: "fabriquer", reading: "fabriquer", meaning: "to manufacture", example: { jp: "Cette entreprise fabrique des vélos.", en: "This company manufactures bicycles." }, accept: ["make", "produce", "turn out"] },
        { id: "fr-u88l1-construire", type: "vocab", front: "construire", reading: "construire", meaning: "to build", example: { jp: "On va construire une école ici.", en: "They're going to build a school here." }, accept: ["construct", "put up", "erect"] },
        { id: "fr-u88l1-assembler", type: "vocab", front: "assembler", reading: "assembler", meaning: "to put together", example: { jp: "Il faut assembler les deux morceaux.", en: "You have to put the two pieces together." }, accept: ["assemble", "fit together"] },
        { id: "fr-u88l1-visser", type: "vocab", front: "visser", reading: "visser", meaning: "to screw in", example: { jp: "Je vais visser l'étagère au mur.", en: "I'm going to screw the shelf to the wall." }, accept: ["screw in", "screw on", "tighten"] },
        { id: "fr-u88l1-clouer", type: "vocab", front: "clouer", reading: "clouer", meaning: "to hammer in", example: { jp: "Il va clouer le bois au mur.", en: "He's going to nail the wood to the wall." }, accept: ["nail", "nail down"] },
        { id: "fr-u88l1-coudre", type: "vocab", front: "coudre", reading: "coudre", meaning: "to sew", example: { jp: "Ma mère sait coudre.", en: "My mother knows how to sew." }, accept: ["stitch", "sew up"] },
      ],
    },
    {
      id: "fr-u88l2",
      unit: 88,
      lesson: 2,
      title: "Mixing and pouring",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle liquids and loose stuff: mix, pour, fill, empty, dip and wipe.",
      items: [
        { id: "fr-u88l2-melanger", type: "vocab", front: "mélanger", reading: "melanger", meaning: "to mix", example: { jp: "Il faut mélanger le sucre et le beurre.", en: "You have to mix the sugar and the butter." }, accept: ["blend", "stir together", "combine"] },
        { id: "fr-u88l2-verser", type: "vocab", front: "verser", reading: "verser", meaning: "to pour", example: { jp: "Je vais verser l'eau dans le verre.", en: "I'm going to pour the water into the glass." }, accept: ["pour out", "tip in"] },
        { id: "fr-u88l2-remplir", type: "vocab", front: "remplir", reading: "remplir", meaning: "to fill", example: { jp: "Je remplis la bouteille.", en: "I'm filling the bottle." }, accept: ["fill up", "fill in"], hint: "Also what you do to a form: remplir un formulaire." },
        { id: "fr-u88l2-vider", type: "vocab", front: "vider", reading: "vider", meaning: "to empty out", example: { jp: "Il faut vider la poubelle.", en: "The bin needs emptying." }, accept: ["empty", "clear out", "drain"] },
        { id: "fr-u88l2-tremper", type: "vocab", front: "tremper", reading: "tremper", meaning: "to dip", example: { jp: "Je trempe le pain dans le lait.", en: "I dip the bread in the milk." }, accept: ["soak", "dunk", "steep"] },
        { id: "fr-u88l2-essuyer", type: "vocab", front: "essuyer", reading: "essuyer", meaning: "to wipe", example: { jp: "Je vais essuyer la table.", en: "I'm going to wipe the table." }, accept: ["wipe off", "dry", "mop up"] },
      ],
    },
    {
      id: "fr-u88l3",
      unit: 88,
      lesson: 3,
      title: "Cutting and fixing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Change an object's shape: dig, drill, cut out, tear off, attach and detach.",
      items: [
        { id: "fr-u88l3-creuser", type: "vocab", front: "creuser", reading: "creuser", meaning: "to dig", example: { jp: "Le chien creuse dans le jardin.", en: "The dog is digging in the garden." }, accept: ["dig out", "hollow out", "burrow"] },
        { id: "fr-u88l3-percer", type: "vocab", front: "percer", reading: "percer", meaning: "to drill", example: { jp: "Il faut percer le mur.", en: "You have to drill the wall." }, accept: ["pierce", "make a hole", "puncture"] },
        { id: "fr-u88l3-decouper", type: "vocab", front: "découper", reading: "decouper", meaning: "to cut out", example: { jp: "Je découpe la photo dans le journal.", en: "I'm cutting the photo out of the newspaper." }, accept: ["cut up", "carve", "snip out"], hint: "couper cuts; découper cuts something OUT, or carves a chicken." },
        { id: "fr-u88l3-arracher", type: "vocab", front: "arracher", reading: "arracher", meaning: "to tear off", example: { jp: "Le vent a arraché mon chapeau.", en: "The wind tore off my hat." }, accept: ["rip out", "pull off", "yank out"] },
        { id: "fr-u88l3-attacher", type: "vocab", front: "attacher", reading: "attacher", meaning: "to fasten", example: { jp: "Il faut attacher le vélo ici.", en: "You have to fasten the bike here." }, accept: ["tie", "attach", "do up"] },
        { id: "fr-u88l3-detacher", type: "vocab", front: "détacher", reading: "detacher", meaning: "to undo", example: { jp: "Je vais détacher le vélo.", en: "I'm going to unfasten the bike." }, accept: ["detach", "untie", "unfasten"], hint: "dé- reverses the verb, exactly as it does in English un-: attacher / détacher." },
      ],
    },
    {
      id: "fr-u88l4",
      unit: 88,
      lesson: 4,
      title: "The bits and pieces",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the small hardware: glue, a nail, a screw, thread, a ribbon — and DIY itself.",
      items: [
        { id: "fr-u88l4-lacolle", type: "vocab", front: "la colle", reading: "lacolle", meaning: "adhesive", example: { jp: "Je n'ai pas de colle.", en: "I don't have any glue." }, accept: ["glue", "the glue", "paste"], hint: "The noun behind coller, which you already know." },
        { id: "fr-u88l4-leclou", type: "vocab", front: "le clou", reading: "leclou", meaning: "nail", example: { jp: "Il y a un clou dans le mur.", en: "There's a nail in the wall." }, accept: ["the nail"], hint: "The metal kind. A fingernail is un ongle — a completely different word." },
        { id: "fr-u88l4-lavis", type: "vocab", front: "la vis", reading: "lavis", meaning: "screw", example: { jp: "Cette vis est trop petite.", en: "This screw is too small." }, accept: ["the screw"], hint: "Said « viss » — the s IS pronounced here, unusually." },
        { id: "fr-u88l4-lefil", type: "vocab", front: "le fil", reading: "lefil", meaning: "thread", example: { jp: "J'ai besoin de fil pour coudre.", en: "I need thread to sew." }, accept: ["the thread", "wire", "string"], hint: "Thread, wire and the flex on an appliance are all le fil." },
        { id: "fr-u88l4-leruban", type: "vocab", front: "le ruban", reading: "leruban", meaning: "ribbon", example: { jp: "Il y a un ruban rouge sur le cadeau.", en: "The present has a red ribbon." }, accept: ["the ribbon", "band"] },
        { id: "fr-u88l4-lebricolage", type: "vocab", front: "le bricolage", reading: "lebricolage", meaning: "DIY", example: { jp: "Mon père aime le bricolage.", en: "My father likes DIY." }, accept: ["do-it-yourself", "odd jobs", "handiwork"], hint: "A whole French pastime. The verb is bricoler, and un bricoleur is someone handy." },
      ],
    },
  ],
};
