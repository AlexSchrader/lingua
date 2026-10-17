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
        { id: "fr-u87l1-lisse", type: "vocab", front: "lisse", reading: "lisse", meaning: "smooth", example: { jp: "Cette pierre est très lisse.", en: "This stone is very smooth." }, drill: { jp: "Le bois est très lisse", en: "The wood is very smooth" }, accept: ["sleek", "even", "smooth to touch"], hint: "Smooth to the touch, with one form for both genders. The verb lisser is to smooth something down." },
        { id: "fr-u87l1-rugueux", type: "vocab", front: "rugueux", reading: "rugueux", meaning: "rough", example: { jp: "Le mur est rugueux.", en: "The wall is rough." }, drill: { jp: "Ce papier est rugueux", en: "This paper is rough" }, accept: ["coarse", "scratchy", "rough to touch"], hint: "Rough to the touch, the opposite of lisse; the feminine is rugueuse. Of behaviour, French uses brusque instead." },
        { id: "fr-u87l1-mou", type: "vocab", front: "mou", reading: "mou", meaning: "soft", example: { jp: "Ce fromage est trop mou.", en: "This cheese is too soft." }, drill: { jp: "Le gâteau est trop mou", en: "The cake is too soft" }, accept: ["squishy", "limp", "floppy"], hint: "Soft as in giving way under your finger. Its feminine is irregular: molle." },
        { id: "fr-u87l1-dur", type: "vocab", front: "dur", reading: "dur", meaning: "hard", example: { jp: "Le pain est dur ce matin.", en: "The bread is hard this morning." }, drill: { jp: "Ce fromage est très dur", en: "This cheese is very hard" }, accept: ["tough", "firm", "not soft"], hint: "Also \"hard\" of a task: un exercice dur." },
        { id: "fr-u87l1-souple", type: "vocab", front: "souple", reading: "souple", meaning: "flexible", example: { jp: "Ce plastique est souple.", en: "This plastic is flexible." }, drill: { jp: "Ce tissu est très souple", en: "This fabric is very flexible" }, accept: ["supple", "bendy", "pliable"], hint: "Flexible — of a material, a body or a rule alike. One form for both genders, and its opposite here is rigide." },
        { id: "fr-u87l1-raide", type: "vocab", front: "raide", meaning: "stiff", reading: "raide", example: { jp: "J'ai les jambes raides ce matin.", en: "My legs are stiff this morning." }, drill: { jp: "Mon dos est raide ce matin", en: "My back is stiff this morning" }, accept: ["rigid", "straight", "steep"], hint: "Also of hair (cheveux raides = straight hair) and of a hill (une côte raide = a steep climb)." },
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
        { id: "fr-u87l2-brillant", type: "vocab", front: "brillant", reading: "brillant", meaning: "shiny", example: { jp: "Le métal est brillant.", en: "The metal is shiny." }, drill: { jp: "Le sol est très brillant", en: "The floor is very shiny" }, accept: ["glossy", "sparkling", "bright"], hint: "From briller. Also of a person: un élève brillant is a brilliant pupil." },
        { id: "fr-u87l2-terne", type: "vocab", front: "terne", reading: "terne", meaning: "dull", example: { jp: "Cette couleur est un peu terne.", en: "This colour is a little dull." }, drill: { jp: "Ce gris est vraiment terne", en: "This grey is really dull" }, accept: ["drab", "lacklustre", "faded"], hint: "Dull, with no shine and no interest — one form for both genders. Of a colour it is faded; of a person, colourless." },
        { id: "fr-u87l2-transparent", type: "vocab", front: "transparent", reading: "transparent", meaning: "see-through", example: { jp: "La bouteille est transparente.", en: "The bottle is see-through." }, drill: { jp: "Le verre est transparent", en: "The glass is see-through" }, accept: ["transparent", "clear", "see through"], hint: "See-through — the feminine transparente sounds the final t. Also used of a process: open and above board." },
        { id: "fr-u87l2-opaque", type: "vocab", front: "opaque", reading: "opaque", meaning: "not see-through", example: { jp: "Cette fenêtre est opaque.", en: "This window is not see-through." }, drill: { jp: "Le verre est opaque", en: "The glass isn't see-through" }, accept: ["opaque", "solid", "not clear"], hint: "Not see-through — qu is a hard k. One form for both genders, and the direct opposite of transparent." },
        { id: "fr-u87l2-fonce", type: "vocab", front: "foncé", reading: "fonce", meaning: "dark-coloured", example: { jp: "Je préfère le bleu foncé.", en: "I prefer dark blue." }, drill: { jp: "Ce vert est trop foncé", en: "This green is too dark" }, accept: ["dark", "deep", "dark shade"], hint: "Goes after the colour: bleu foncé, vert foncé. Its opposite is clair — bleu clair." },
        { id: "fr-u87l2-raye", type: "vocab", front: "rayé", reading: "raye", meaning: "striped", example: { jp: "Il porte une chemise rayée.", en: "He's wearing a striped shirt." }, drill: { jp: "Mon pull est rayé", en: "My jumper is striped" }, accept: ["with stripes", "scratched", "stripy"], hint: "Two senses: striped, and scratched — un disque rayé." },
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
        { id: "fr-u87l3-use", type: "vocab", front: "usé", reading: "use", meaning: "worn", example: { jp: "Mon pull est vieux et usé.", en: "My sweater is old and worn." }, drill: { jp: "Ce tapis est déjà usé", en: "This rug is already worn" }, accept: ["worn out", "threadbare", "used up"], hint: "Worn out from use, from user — not the same as vieux, which is simply old. Des vêtements usés are threadbare clothes." },
        { id: "fr-u87l3-abime", type: "vocab", front: "abîmé", reading: "abime", meaning: "damaged", example: { jp: "Le livre est abîmé par la pluie.", en: "The book is damaged by the rain." }, drill: { jp: "Mon manteau est abîmé", en: "My coat is damaged" }, accept: ["spoiled", "ruined", "in bad condition"], hint: "Damaged or spoiled, from abîmer — note the circumflex. Un livre abîmé is a book in bad condition." },
        { id: "fr-u87l3-solide", type: "vocab", front: "solide", reading: "solide", meaning: "sturdy", example: { jp: "Cette table est très solide.", en: "This table is very sturdy." }, drill: { jp: "Ce mur est vraiment solide", en: "This wall is really sturdy" }, accept: ["strong", "robust", "hard-wearing"], hint: "Sturdy and hard-wearing, one form for both genders. Of a thing it means strong; of an argument, sound." },
        { id: "fr-u87l3-fragile", type: "vocab", front: "fragile", reading: "fragile", meaning: "breakable", example: { jp: "Ce verre est très fragile.", en: "This glass is very breakable." }, drill: { jp: "Ce miroir est très fragile", en: "This mirror is very breakable" }, accept: ["fragile", "delicate", "easily broken"], hint: "Breakable, with one form for both genders — the word stamped on parcels in France, exactly as in English." },
        { id: "fr-u87l3-tordu", type: "vocab", front: "tordu", reading: "tordu", meaning: "bent", example: { jp: "La clé est tordue.", en: "The key is bent." }, drill: { jp: "Mon vélo est tordu", en: "My bike is bent" }, accept: ["twisted", "crooked", "warped"], hint: "Bent or twisted, the past participle of tordre. Of a person or an idea it means warped." },
        { id: "fr-u87l3-troue", type: "vocab", front: "troué", reading: "troue", meaning: "full of holes", example: { jp: "Ma chaussette est trouée.", en: "My sock has a hole in it." }, drill: { jp: "Ce sac est troué", en: "This bag is full of holes" }, accept: ["holey", "with holes", "torn"], hint: "Straight from le trou, the hole you already know." },
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
        { id: "fr-u87l4-lasurface", type: "vocab", front: "la surface", reading: "lasurface", meaning: "surface", example: { jp: "La surface de l'eau est calme.", en: "The surface of the water is calm." }, drill: { jp: "La surface est très lisse", en: "The surface is very smooth" }, accept: ["the surface", "area", "floor area"], hint: "A surface, and also a floor area in square metres — la surface d'un appartement. Une grande surface is a supermarket." },
        { id: "fr-u87l4-lemotif", type: "vocab", front: "le motif", reading: "lemotif", meaning: "pattern", example: { jp: "J'aime le motif de cette robe.", en: "I like the pattern on this dress." }, drill: { jp: "Le motif est vraiment joli", en: "The pattern is really pretty" }, accept: ["the pattern", "design", "motif"], hint: "A pattern on fabric, and also a motive or reason — le motif d'un refus. Masculine: le motif." },
        { id: "fr-u87l4-lecontour", type: "vocab", front: "le contour", reading: "lecontour", meaning: "outline", example: { jp: "On voit le contour de la montagne.", en: "You can see the outline of the mountain." }, drill: { jp: "Le contour est difficile à voir", en: "The outline is hard to see" }, accept: ["the outline", "edge", "shape"], hint: "The outline or edge of a shape, from contourner, to go round. In the plural, les contours means the broad shape of something." },
        { id: "fr-u87l4-lepaisseur", type: "vocab", front: "l'épaisseur", reading: "lepaisseur", meaning: "thickness", example: { jp: "Quelle est l'épaisseur du mur ?", en: "What's the thickness of the wall?" }, drill: { jp: "L'épaisseur du livre me surprend", en: "The thickness of the book surprises me" }, accept: ["the thickness", "depth", "how thick"], hint: "Feminine, from épais — the pattern that also gives la largeur from large." },
        { id: "fr-u87l4-lapoussiere", type: "vocab", front: "la poussière", reading: "lapoussiere", meaning: "dust", example: { jp: "Il y a de la poussière sur l'étagère.", en: "There's dust on the shelf." }, drill: { jp: "La poussière est partout ici", en: "The dust is everywhere here" }, accept: ["the dust", "dust", "a layer of dust", "the fine dirt that settles"], hint: "Dust — faire la poussière means to dust. Feminine: la poussière, and poussiéreux is the adjective." },
        { id: "fr-u87l4-lapparence", type: "vocab", front: "l'apparence", reading: "lapparence", meaning: "the appearance", example: { jp: "Son apparence a beaucoup changé cette année.", en: "His appearance has changed a lot this year." }, drill: { jp: "L'apparence compte moins que le reste", en: "Appearance counts less than the rest" }, accept: ["the appearance", "the look", "the outward look"], hint: "Feminine. En apparence = on the face of it; les apparences sont trompeuses = looks deceive." },
      ],
    },
  ],
};
