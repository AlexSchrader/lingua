// FR Unit 87 — Textures et apparences ("Textures and appearances") — B1
// Strand D, coverage unit 7 of 14 (block 3). Slot: coverage-b1-7 (generic
// "Vocabulary 7 (B1)"); given a real theme so the lessons cohere — slot number kept.
// How a thing feels and looks. A1 taught the basic adjectives (grand, propre, sale);
// this is the next layer, the one you need to describe an object you can't name.
// See unit84.js for the block-3 strategy.
export const FR_UNIT87 = {
  id: "fr-u87",
  lang: "fr",
  title: "Textures et apparences",
  order: 87,
  stage: "b1",
  lessons: [
    {
      id: "fr-u87l1",
      unit: 87,
      lesson: 1,
      title: "How it feels",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a surface by touch: smooth, rough, soft, hard, flexible or stiff.",
      items: [
        { id: "fr-u87l1-lisse", type: "vocab", front: "lisse", reading: "lisse", meaning: "smooth", example: { jp: "Cette pierre est très lisse.", en: "This stone is very smooth." }, accept: ["sleek", "even"] },
        { id: "fr-u87l1-rugueux", type: "vocab", front: "rugueux", reading: "rugueux", meaning: "rough", example: { jp: "Le mur est rugueux.", en: "The wall is rough." }, accept: ["coarse", "scratchy"] },
        { id: "fr-u87l1-mou", type: "vocab", front: "mou", reading: "mou", meaning: "soft", example: { jp: "Ce fromage est trop mou.", en: "This cheese is too soft." }, accept: ["squishy", "limp", "floppy"], hint: "Soft as in giving way under your finger. Its feminine is irregular: molle." },
        { id: "fr-u87l1-dur", type: "vocab", front: "dur", reading: "dur", meaning: "hard", example: { jp: "Le pain est dur ce matin.", en: "The bread is hard this morning." }, accept: ["tough", "firm", "not soft"], hint: "Also \"hard\" of a task: un exercice dur." },
        { id: "fr-u87l1-souple", type: "vocab", front: "souple", reading: "souple", meaning: "flexible", example: { jp: "Ce plastique est souple.", en: "This plastic is flexible." }, accept: ["supple", "bendy", "pliable"] },
        { id: "fr-u87l1-raide", type: "vocab", front: "raide", meaning: "stiff", reading: "raide", example: { jp: "Ce fil de fer est raide.", en: "This iron wire is stiff." }, accept: ["rigid", "straight", "steep"], hint: "Also of hair (cheveux raides = straight hair) and of a hill (une côte raide = a steep climb)." },
      ],
    },
    {
      id: "fr-u87l2",
      unit: 87,
      lesson: 2,
      title: "How it looks",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how a surface catches the light: shiny, dull, see-through, opaque, dark-coloured or striped.",
      items: [
        { id: "fr-u87l2-brillant", type: "vocab", front: "brillant", reading: "brillant", meaning: "shiny", example: { jp: "Sa montre est brillante.", en: "Their watch is shiny." }, accept: ["glossy", "sparkling", "bright"], hint: "From briller. Also of a person: un élève brillant is a brilliant pupil." },
        { id: "fr-u87l2-terne", type: "vocab", front: "terne", reading: "terne", meaning: "dull", example: { jp: "Cette couleur est un peu terne.", en: "This colour is a little dull." }, accept: ["drab", "lacklustre", "faded"] },
        { id: "fr-u87l2-transparent", type: "vocab", front: "transparent", reading: "transparent", meaning: "see-through", example: { jp: "La bouteille est transparente.", en: "The bottle is see-through." }, accept: ["transparent", "clear"] },
        { id: "fr-u87l2-opaque", type: "vocab", front: "opaque", reading: "opaque", meaning: "not see-through", example: { jp: "Cette fenêtre est opaque.", en: "This window is not see-through." }, accept: ["opaque", "solid"] },
        { id: "fr-u87l2-fonce", type: "vocab", front: "foncé", reading: "fonce", meaning: "dark-coloured", example: { jp: "Je préfère le bleu foncé.", en: "I prefer dark blue." }, accept: ["dark", "deep"], hint: "Goes after the colour: bleu foncé, vert foncé. Its opposite is clair — bleu clair." },
        { id: "fr-u87l2-raye", type: "vocab", front: "rayé", reading: "raye", meaning: "striped", example: { jp: "Il porte une chemise rayée.", en: "He's wearing a striped shirt." }, accept: ["with stripes", "scratched"], hint: "Two senses: striped, and scratched — un disque rayé." },
      ],
    },
    {
      id: "fr-u87l3",
      unit: 87,
      lesson: 3,
      title: "New or worn out",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what condition something is in: worn, damaged, sturdy, fragile, bent or full of holes.",
      items: [
        { id: "fr-u87l3-use", type: "vocab", front: "usé", reading: "use", meaning: "worn", example: { jp: "Mon pull est vieux et usé.", en: "My sweater is old and worn." }, accept: ["worn out", "threadbare", "used up"] },
        { id: "fr-u87l3-abime", type: "vocab", front: "abîmé", reading: "abime", meaning: "damaged", example: { jp: "Le livre est abîmé par la pluie.", en: "The book is damaged by the rain." }, accept: ["spoiled", "ruined", "in bad condition"] },
        { id: "fr-u87l3-solide", type: "vocab", front: "solide", reading: "solide", meaning: "sturdy", example: { jp: "Cette table est très solide.", en: "This table is very sturdy." }, accept: ["strong", "robust", "hard-wearing"] },
        { id: "fr-u87l3-fragile", type: "vocab", front: "fragile", reading: "fragile", meaning: "breakable", example: { jp: "Ce verre est très fragile.", en: "This glass is very breakable." }, accept: ["fragile", "delicate"] },
        { id: "fr-u87l3-tordu", type: "vocab", front: "tordu", reading: "tordu", meaning: "bent", example: { jp: "La clé est tordue.", en: "The key is bent." }, accept: ["twisted", "crooked", "warped"] },
        { id: "fr-u87l3-troue", type: "vocab", front: "troué", reading: "troue", meaning: "full of holes", example: { jp: "Ma chaussette est trouée.", en: "My sock has a hole in it." }, accept: ["holey", "with holes", "torn"], hint: "Straight from le trou, the hole you already know." },
      ],
    },
    {
      id: "fr-u87l4",
      unit: 87,
      lesson: 4,
      title: "Naming what you see",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about an object's look in the abstract: its appearance, its surface, its pattern, its outline, its thickness — and the dust on it.",
      items: [
        { id: "fr-u87l4-laspect", type: "vocab", front: "l'aspect", reading: "laspect", meaning: "appearance", example: { jp: "Je n'aime pas l'aspect de ce plat.", en: "I don't like the appearance of this dish." }, accept: ["the appearance", "look", "aspect"], hint: "Masculine — un aspect. The p is silent." },
        { id: "fr-u87l4-lasurface", type: "vocab", front: "la surface", reading: "lasurface", meaning: "surface", example: { jp: "La surface de l'eau est calme.", en: "The surface of the water is calm." }, accept: ["the surface", "area"] },
        { id: "fr-u87l4-lemotif", type: "vocab", front: "le motif", reading: "lemotif", meaning: "pattern", example: { jp: "J'aime le motif de cette robe.", en: "I like the pattern on this dress." }, accept: ["the pattern", "design", "motif"] },
        { id: "fr-u87l4-lecontour", type: "vocab", front: "le contour", reading: "lecontour", meaning: "outline", example: { jp: "On voit le contour de la montagne.", en: "You can see the outline of the mountain." }, accept: ["the outline", "edge", "shape"] },
        { id: "fr-u87l4-lepaisseur", type: "vocab", front: "l'épaisseur", reading: "lepaisseur", meaning: "thickness", example: { jp: "Quelle est l'épaisseur du mur ?", en: "What's the thickness of the wall?" }, accept: ["the thickness", "depth"], hint: "Feminine, from épais — the pattern that also gives la largeur from large." },
        { id: "fr-u87l4-lapoussiere", type: "vocab", front: "la poussière", reading: "lapoussiere", meaning: "dust", example: { jp: "Il y a de la poussière sur l'étagère.", en: "There's dust on the shelf." }, accept: ["the dust"] },
      ],
    },
  ],
};
