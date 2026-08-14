// FR Unit 84 — Gestes et mouvements ("Gestures and movement") — B1
// Strand D, coverage unit 4 of 14 (block 3, units 84-94). The slot is a generic
// "Vocabulary 4 (B1)" frequency pass; each coverage unit here is given a real theme
// so the four lessons cohere — DEVIATION FROM THE SLOT NAME ONLY, slot number kept.
//
// BLOCK-3 STRATEGY, and why it is not the obvious one. The crew board's warning
// (2026-08-14) is that French A2 ran to 57 units and already teaches most of the
// ABSTRACT material the B1 slot titles name. Blocks 1-2 own all 26 abstract /
// grammar / register slots (u58-u83) *and* coverage-b1-1..3 (u81-83) — and under
// "lower slot wins" they take any tie. So this block deliberately takes the
// CONCRETE/PHYSICAL half of B1 frequency instead: gesture, perception, manner of
// speaking, texture, making, chance, order, behaviour, cooking, appearance, idiom.
// It is the slice a generic coverage author reaches for LAST, which is exactly why
// it is still empty at B1 and why it is the safest thing for the last block to own.
//
// Every front was checked against the live 1,287-item fr corpus BEFORE writing
// (not after), per the board warning. Examples use A1+A2 (orders 1-57) plus
// earlier block-3 units; blocks 1-2 were locked stubs while this was written, so
// nothing here references them. Conventions: see fr/unit1.js.
export const FR_UNIT84 = {
  id: "fr-u84",
  lang: "fr",
  title: "Gestes et mouvements",
  order: 84,
  stage: "b1",
  lessons: [
    {
      id: "fr-u84l1",
      unit: 84,
      lesson: 1,
      title: "Pushing and pulling",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what your hands are doing to an object: push it, pull it, lift it, throw it, shake it — or slip on it.",
      items: [
        { id: "fr-u84l1-pousser", type: "vocab", front: "pousser", reading: "pousser", meaning: "to push", example: { jp: "Je vais pousser la porte.", en: "I'm going to push the door." }, accept: ["shove", "press"], hint: "Also what a plant does — pousser is to grow." },
        { id: "fr-u84l1-tirer", type: "vocab", front: "tirer", reading: "tirer", meaning: "to pull", example: { jp: "Il faut tirer, pas pousser.", en: "You have to pull, not push." }, accept: ["draw", "tug"], hint: "The word on half the doors in France: TIREZ / POUSSEZ." },
        { id: "fr-u84l1-soulever", type: "vocab", front: "soulever", reading: "soulever", meaning: "to raise", example: { jp: "Cette boîte est trop lourde à soulever.", en: "This box is too heavy to lift." }, accept: ["lift", "pick up", "heave"] },
        { id: "fr-u84l1-lancer", type: "vocab", front: "lancer", reading: "lancer", meaning: "to throw", example: { jp: "Il ne faut pas lancer les objets.", en: "You mustn't throw things." }, accept: ["toss", "hurl", "launch"] },
        { id: "fr-u84l1-glisser", type: "vocab", front: "glisser", reading: "glisser", meaning: "to slip", example: { jp: "Le sol est humide, on peut glisser.", en: "The floor is damp, you can slip." }, accept: ["slide", "skid"] },
        { id: "fr-u84l1-secouer", type: "vocab", front: "secouer", reading: "secouer", meaning: "to shake", example: { jp: "Il faut secouer la bouteille.", en: "You have to shake the bottle." }, accept: ["shake up", "jolt"] },
      ],
    },
    {
      id: "fr-u84l2",
      unit: 84,
      lesson: 2,
      title: "Holding a position",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Put your own body somewhere: lean over, lean against, sit down, lie down, turn round — or keep still.",
      items: [
        { id: "fr-u84l2-sepencher", type: "vocab", front: "se pencher", reading: "sepencher", meaning: "to lean over", example: { jp: "Je me penche pour ramasser le stylo.", en: "I lean over to pick up the pen." }, accept: ["bend over", "lean forward", "stoop"] },
        { id: "fr-u84l2-sappuyer", type: "vocab", front: "s'appuyer", reading: "sappuyer", meaning: "to lean on", example: { jp: "Je m'appuie contre le mur.", en: "I lean against the wall." }, accept: ["rest on", "prop oneself"], hint: "Takes contre or sur: s'appuyer contre le mur, s'appuyer sur la table." },
        { id: "fr-u84l2-sasseoir", type: "vocab", front: "s'asseoir", reading: "sasseoir", meaning: "to sit down", example: { jp: "Je vais m'asseoir sur la chaise.", en: "I'm going to sit down on the chair." }, accept: ["take a seat", "be seated"], hint: "The ACTION of sitting. Being already seated is « être assis »." },
        { id: "fr-u84l2-sallonger", type: "vocab", front: "s'allonger", reading: "sallonger", meaning: "to lie down", example: { jp: "Je vais m'allonger sur le lit.", en: "I'm going to lie down on the bed." }, accept: ["stretch out", "lay down"] },
        { id: "fr-u84l2-seretourner", type: "vocab", front: "se retourner", reading: "seretourner", meaning: "to turn round", example: { jp: "Je me retourne quand on m'appelle.", en: "I turn round when someone calls me." }, accept: ["turn around", "look back", "roll over"] },
        { id: "fr-u84l2-bouger", type: "vocab", front: "bouger", reading: "bouger", meaning: "to move", example: { jp: "Il ne faut pas bouger.", en: "You mustn't move." }, accept: ["budge", "stir", "shift"] },
      ],
    },
    {
      id: "fr-u84l3",
      unit: 84,
      lesson: 3,
      title: "Getting about",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how something moves through space: jump, climb, back up, go forward, crawl — or trip over.",
      items: [
        { id: "fr-u84l3-sauter", type: "vocab", front: "sauter", reading: "sauter", meaning: "to jump", example: { jp: "Le chat va sauter sur la table.", en: "The cat is going to jump onto the table." }, accept: ["leap", "hop", "skip"] },
        { id: "fr-u84l3-grimper", type: "vocab", front: "grimper", reading: "grimper", meaning: "to climb", example: { jp: "Les enfants aiment grimper aux arbres.", en: "Children like climbing trees." }, accept: ["clamber", "scale", "climb up"] },
        { id: "fr-u84l3-reculer", type: "vocab", front: "reculer", reading: "reculer", meaning: "to back up", example: { jp: "Je vais reculer un peu.", en: "I'm going to back up a little." }, accept: ["move back", "step back", "retreat"] },
        { id: "fr-u84l3-avancer", type: "vocab", front: "avancer", reading: "avancer", meaning: "to move forward", example: { jp: "La voiture avance lentement.", en: "The car moves forward slowly." }, accept: ["go forward", "advance", "progress"] },
        { id: "fr-u84l3-ramper", type: "vocab", front: "ramper", reading: "ramper", meaning: "to crawl", example: { jp: "L'insecte rampe sur le sol.", en: "The insect crawls on the floor." }, accept: ["creep", "slither"] },
        { id: "fr-u84l3-trebucher", type: "vocab", front: "trébucher", reading: "trebucher", meaning: "to stumble", example: { jp: "On peut trébucher dans le noir.", en: "You can stumble in the dark." }, accept: ["trip", "trip up", "lose one's footing"] },
      ],
    },
    {
      id: "fr-u84l4",
      unit: 84,
      lesson: 4,
      title: "What the hands do",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name six things a hand does to something: knock, type, scratch, stroke, pinch, twist.",
      items: [
        { id: "fr-u84l4-frapper", type: "vocab", front: "frapper", reading: "frapper", meaning: "to knock", example: { jp: "Il faut frapper à la porte.", en: "You have to knock on the door." }, accept: ["hit", "strike", "bang"] },
        { id: "fr-u84l4-taper", type: "vocab", front: "taper", reading: "taper", meaning: "to type", example: { jp: "Je tape le mot de passe.", en: "I type the password." }, accept: ["tap", "bang", "hit"], hint: "Same word for hitting a key and hitting anything else: taper à la porte." },
        { id: "fr-u84l4-gratter", type: "vocab", front: "gratter", reading: "gratter", meaning: "to scratch", example: { jp: "Le chien se gratte l'oreille.", en: "The dog scratches its ear." }, accept: ["scrape", "itch"] },
        { id: "fr-u84l4-caresser", type: "vocab", front: "caresser", reading: "caresser", meaning: "to stroke", example: { jp: "J'aime caresser le chat.", en: "I like stroking the cat." }, accept: ["pet", "caress"] },
        { id: "fr-u84l4-pincer", type: "vocab", front: "pincer", reading: "pincer", meaning: "to pinch", example: { jp: "Il ne faut pas pincer son frère.", en: "You mustn't pinch your brother." }, accept: ["nip", "squeeze"] },
        { id: "fr-u84l4-tordre", type: "vocab", front: "tordre", reading: "tordre", meaning: "to twist", example: { jp: "Il ne faut pas tordre la clé.", en: "You mustn't twist the key." }, accept: ["bend", "wring", "contort"] },
      ],
    },
  ],
};
