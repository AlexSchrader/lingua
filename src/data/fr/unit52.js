// FR Unit 52 — Les choses et les matières ("Things and materials") — A2
// Strand D, coverage unit 6 of 11 (block 3). Slot: coverage-a2-6 (generic
// "Vocabulary 6 (A2)"); given a real theme so the four lessons cohere — the slot
// NUMBER is kept, only the name deviates. See unit48.js for the block-3 rules.
// The generic words for stuff: a thing, an object, what it's made of, what shape it
// is, and what you do to it when it breaks. Deliberately generic — the named
// objects of a room, a kitchen or a device belong to the thematic units.
export const FR_UNIT52 = {
  id: "fr-u52",
  lang: "fr",
  title: "Les choses et les matières",
  order: 52,
  stage: "a2",
  lessons: [
    {
      id: "fr-u52l1",
      unit: 52,
      lesson: 1,
      title: "A thing, an object",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about an object when you don't know its name: a thing, an object, a box, a piece, a hole, a tool.",
      items: [
        { id: "fr-u52l1-lachose", type: "vocab", front: "la chose", reading: "lachose", meaning: "thing", example: { jp: "C'est une chose importante.", en: "It's an important thing." }, accept: ["the thing", "matter"] },
        { id: "fr-u52l1-lobjet", type: "vocab", front: "l'objet", reading: "lobjet", meaning: "object", example: { jp: "Cet objet est vieux.", en: "This object is old." }, accept: ["the object", "item", "article"], hint: "Masculine (cet objet). un objet is physical and solid; une chose can be anything, including an idea." },
        { id: "fr-u52l1-laboite", type: "vocab", front: "la boîte", reading: "laboite", meaning: "box", example: { jp: "Il y a du chocolat dans la boîte.", en: "There's chocolate in the box." }, accept: ["the box", "tin", "can"] },
        { id: "fr-u52l1-lebout", type: "vocab", front: "le bout", reading: "lebout", meaning: "bit", example: { jp: "Je vais manger un bout de pain.", en: "I'm going to eat a bit of bread." }, accept: ["piece", "the bit", "tip", "far end"], hint: "Two senses: a bit of something (un bout de pain) and the far end (le bout de la rue). Very close to le morceau, which you already know." },
        { id: "fr-u52l1-letrou", type: "vocab", front: "le trou", reading: "letrou", meaning: "hole", example: { jp: "Il y a un trou dans ma chaussette.", en: "There's a hole in my sock." }, accept: ["the hole", "gap"] },
        { id: "fr-u52l1-loutil", type: "vocab", front: "l'outil", reading: "loutil", meaning: "tool", example: { jp: "Cet outil est lourd.", en: "This tool is heavy." }, accept: ["the tool", "implement"], hint: "The final l is silent: it sounds like « ou-ti »." },
      ],
    },
    {
      id: "fr-u52l2",
      unit: 52,
      lesson: 2,
      title: "What it's made of",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what something is made of — en bois, en métal, en pierre — for the six everyday materials.",
      items: [
        { id: "fr-u52l2-lebois", type: "vocab", front: "le bois", reading: "lebois", meaning: "wood", example: { jp: "La table est en bois.", en: "The table is made of wood." }, accept: ["the wood", "timber"], hint: "en + material is how French says \"made of\": en bois, en métal, en plastique." },
        { id: "fr-u52l2-lemetal", type: "vocab", front: "le métal", reading: "lemetal", meaning: "metal", example: { jp: "Cette porte est en métal.", en: "This door is made of metal." }, accept: ["the metal"] },
        { id: "fr-u52l2-lefer", type: "vocab", front: "le fer", reading: "lefer", meaning: "iron", example: { jp: "Le fer est un métal.", en: "Iron is a metal." }, accept: ["the iron"] },
        { id: "fr-u52l2-lapierre", type: "vocab", front: "la pierre", reading: "lapierre", meaning: "stone", example: { jp: "Le mur est en pierre.", en: "The wall is made of stone." }, accept: ["the stone", "rock"] },
        { id: "fr-u52l2-leplastique", type: "vocab", front: "le plastique", reading: "leplastique", meaning: "plastic", example: { jp: "La bouteille est en plastique.", en: "The bottle is made of plastic." }, accept: ["the plastic"] },
        { id: "fr-u52l2-letissu", type: "vocab", front: "le tissu", reading: "letissu", meaning: "fabric", example: { jp: "J'aime ce tissu.", en: "I like this fabric." }, accept: ["cloth", "material", "the fabric"] },
      ],
    },
    {
      id: "fr-u52l3",
      unit: 52,
      lesson: 3,
      title: "Shapes and lines",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe the shape of a thing: a line, a dot, its shape — and whether it's round, flat or thick.",
      items: [
        { id: "fr-u52l3-laligne", type: "vocab", front: "la ligne", reading: "laligne", meaning: "line", example: { jp: "Il y a une ligne bleue sur le papier.", en: "There's a blue line on the paper." }, accept: ["the line"], hint: "Also a bus or metro line: la ligne quatre." },
        { id: "fr-u52l3-lepoint", type: "vocab", front: "le point", reading: "lepoint", meaning: "dot", example: { jp: "Il y a un point noir sur le mur.", en: "There's a black dot on the wall." }, accept: ["the point", "spot", "full stop", "period"] },
        { id: "fr-u52l3-laforme", type: "vocab", front: "la forme", reading: "laforme", meaning: "shape", example: { jp: "J'aime la forme de cette table.", en: "I like the shape of this table." }, accept: ["the shape", "form"] },
        { id: "fr-u52l3-rond", type: "vocab", front: "rond", reading: "rond", meaning: "round", example: { jp: "Ce fromage est rond.", en: "This cheese is round." }, accept: ["circular"] },
        { id: "fr-u52l3-plat", type: "vocab", front: "plat", reading: "plat", meaning: "level", example: { jp: "Le pays est très plat.", en: "The country is very flat." }, accept: ["flat", "even", "smooth"], hint: "The adjective for a flat SURFACE. A flat you live in is un appartement — a different word entirely." },
        { id: "fr-u52l3-epais", type: "vocab", front: "épais", reading: "epais", meaning: "thick", example: { jp: "Ce livre est épais.", en: "This book is thick." }, accept: ["dense", "chunky"], hint: "Of a thing, not a person — a heavy-set person is gros, never épais." },
      ],
    },
    {
      id: "fr-u52l4",
      unit: 52,
      lesson: 4,
      title: "Breaking and fixing",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Do things to objects: break, repair, cut, glue, fold — and shake someone's hand.",
      items: [
        { id: "fr-u52l4-casser", type: "vocab", front: "casser", reading: "casser", meaning: "to break", example: { jp: "Je ne veux pas casser le verre.", en: "I don't want to break the glass." }, accept: ["break", "smash"] },
        { id: "fr-u52l4-reparer", type: "vocab", front: "réparer", reading: "reparer", meaning: "to repair", example: { jp: "Je vais réparer mon vélo.", en: "I'm going to repair my bike." }, accept: ["fix", "mend", "repair"] },
        { id: "fr-u52l4-couper", type: "vocab", front: "couper", reading: "couper", meaning: "to cut", example: { jp: "Je vais couper le pain.", en: "I'm going to cut the bread." }, accept: ["cut", "slice", "cut off"] },
        { id: "fr-u52l4-coller", type: "vocab", front: "coller", reading: "coller", meaning: "to glue", example: { jp: "Je veux coller le papier.", en: "I want to glue the paper." }, accept: ["stick", "paste", "glue"] },
        { id: "fr-u52l4-plier", type: "vocab", front: "plier", reading: "plier", meaning: "to fold", example: { jp: "Je vais plier mes vêtements.", en: "I'm going to fold my clothes." }, accept: ["fold", "bend"] },
        { id: "fr-u52l4-serrer", type: "vocab", front: "serrer", reading: "serrer", meaning: "to squeeze", example: { jp: "Je vais serrer la main de Marie.", en: "I'm going to shake Marie's hand." }, accept: ["tighten", "grip", "hold tight"], hint: "serrer la main = to shake hands. French squeezes the hand where English shakes it." },
      ],
    },
  ],
};
