// ES Unit 15 — La casa ("The home") — A1 COVERAGE (slot: coverage-1)
// First of the six Strand D units. Strand D thickens the band to its A1 frequency
// target, so the six coverage units deliberately take the domains the thematic
// strand (units 2–11) does NOT hold: the home, clothes and money, travel, work and
// study, the daily routine, and the high-frequency closers.
// Conventions and the assumed block 1–2 vocabulary: see es/unit12.js.
export const ES_UNIT15 = {
  id: "es-u15",
  lang: "es",
  title: "La casa",
  order: 15,
  stage: "a1",
  lessons: [
    {
      id: "es-u15l1",
      unit: 15,
      lesson: 1,
      title: "Las habitaciones",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the parts of a home and ask where one is: la cocina, el dormitorio, el salón, ¿dónde está el baño?",
      items: [
        { id: "es-u15l1-lacocina", type: "vocab", front: "la cocina", reading: "lacocina", meaning: "the kitchen", example: { jp: "La cocina es pequeña.", en: "The kitchen is small." }, accept: ["kitchen"], hint: "Same word family as cocinar, to cook — the room and the verb travel together." },
        { id: "es-u15l1-eldormitorio", type: "vocab", front: "el dormitorio", reading: "eldormitorio", meaning: "the bedroom", example: { jp: "Mi dormitorio es grande.", en: "My bedroom is big." }, accept: ["bedroom", "the bed room"], hint: "From dormir, to sleep — literally the sleeping room." },
        { id: "es-u15l1-elsalon", type: "vocab", front: "el salón", reading: "elsalon", meaning: "the living room", example: { jp: "El salón es muy grande y bonito.", en: "The living room is very big and pretty." }, accept: ["living room", "lounge", "sitting room"] },
        { id: "es-u15l1-elbano", type: "vocab", front: "el baño", reading: "elbano", meaning: "the bathroom", example: { jp: "¿Dónde está el baño?", en: "Where's the bathroom?" }, accept: ["bathroom", "toilet", "restroom"], hint: "The single most useful question in a new country: ¿dónde está el baño?" },
        { id: "es-u15l1-lapuerta", type: "vocab", front: "la puerta", reading: "lapuerta", meaning: "the door", example: { jp: "Abro la puerta.", en: "I open the door." }, accept: ["door", "gate"] },
        { id: "es-u15l1-laventana", type: "vocab", front: "la ventana", reading: "laventana", meaning: "the window", example: { jp: "Hay una ventana en la cocina.", en: "There's a window in the kitchen." }, accept: ["window"] },
      ],
    },
    {
      id: "es-u15l2",
      unit: 15,
      lesson: 2,
      title: "Los muebles",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what furniture is in a room: hay una silla y una cama en el dormitorio.",
      items: [
        { id: "es-u15l2-lasilla", type: "vocab", front: "la silla", reading: "lasilla", meaning: "the chair", example: { jp: "Hay seis sillas en la cocina.", en: "There are six chairs in the kitchen." }, accept: ["chair", "seat"] },
        { id: "es-u15l2-lacama", type: "vocab", front: "la cama", reading: "lacama", meaning: "the bed", example: { jp: "La cama está en el dormitorio.", en: "The bed is in the bedroom." }, accept: ["bed"] },
        { id: "es-u15l2-elsofa", type: "vocab", front: "el sofá", reading: "elsofa", meaning: "the sofa", example: { jp: "El sofá del salón es nuevo.", en: "The living room sofa is new." }, accept: ["sofa", "couch", "settee"] },
        { id: "es-u15l2-elarmario", type: "vocab", front: "el armario", reading: "elarmario", meaning: "the wardrobe", example: { jp: "El armario está en el dormitorio.", en: "The wardrobe is in the bedroom." }, accept: ["wardrobe", "closet", "cupboard"] },
        { id: "es-u15l2-lalampara", type: "vocab", front: "la lámpara", reading: "lalampara", meaning: "the lamp", example: { jp: "Hay una lámpara en el salón.", en: "There's a lamp in the living room." }, accept: ["lamp", "light"] },
        { id: "es-u15l2-elespejo", type: "vocab", front: "el espejo", reading: "elespejo", meaning: "the mirror", example: { jp: "Hay un espejo en el baño.", en: "There's a mirror in the bathroom." }, accept: ["mirror"] },
      ],
    },
    {
      id: "es-u15l3",
      unit: 15,
      lesson: 3,
      title: "Cosas de casa",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the everyday objects you look for around the house: la llave, el reloj, la bolsa, el papel.",
      items: [
        { id: "es-u15l3-lallave", type: "vocab", front: "la llave", reading: "lallave", meaning: "the key", example: { jp: "No tengo la llave de la casa.", en: "I don't have the house key." }, accept: ["key"], hint: "ll sounds like the y in \"yes\" across most of the Spanish-speaking world: la llave = \"ya-veh\"." },
        { id: "es-u15l3-elreloj", type: "vocab", front: "el reloj", reading: "elreloj", meaning: "the clock", example: { jp: "El reloj del salón es muy viejo.", en: "The living room clock is very old." }, accept: ["watch", "clock", "wristwatch"], hint: "One word for both a clock on the wall and a watch on your wrist." },
        { id: "es-u15l3-lacaja", type: "vocab", front: "la caja", reading: "lacaja", meaning: "the box", example: { jp: "La caja está en la cocina.", en: "The box is in the kitchen." }, accept: ["box", "case"] },
        { id: "es-u15l3-labolsa", type: "vocab", front: "la bolsa", reading: "labolsa", meaning: "the bag", example: { jp: "Compro una bolsa en la tienda.", en: "I buy a bag at the shop." }, accept: ["bag", "carrier bag"] },
        { id: "es-u15l3-elpapel", type: "vocab", front: "el papel", reading: "elpapel", meaning: "the paper", example: { jp: "Necesito papel para escribir.", en: "I need paper to write on." }, accept: ["paper", "sheet of paper"] },
        { id: "es-u15l3-lafoto", type: "vocab", front: "la foto", reading: "lafoto", meaning: "the photo", example: { jp: "Hay una foto de María en el salón.", en: "There's a photo of María in the living room." }, accept: ["photo", "picture", "photograph"], hint: "Feminine even though it ends in -o — it's short for la fotografía." },
      ],
    },
    {
      id: "es-u15l4",
      unit: 15,
      lesson: 4,
      title: "En el edificio",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe the building you live in: vivo en un piso, hay un jardín, hay una escalera en el edificio.",
      items: [
        { id: "es-u15l4-laluz", type: "vocab", front: "la luz", reading: "laluz", meaning: "the light", example: { jp: "No hay luz en la cocina.", en: "There's no light in the kitchen." }, accept: ["light", "electricity"] },
        { id: "es-u15l4-elsuelo", type: "vocab", front: "el suelo", reading: "elsuelo", meaning: "the floor", example: { jp: "El niño está en el suelo.", en: "The child is on the floor." }, accept: ["floor", "ground"], hint: "el suelo is the surface you stand on. In Spain el piso (below) is the storey or the whole flat; in Latin America piso is usually this same surface, so the two words overlap there." },
        { id: "es-u15l4-eljardin", type: "vocab", front: "el jardín", reading: "eljardin", meaning: "the garden", example: { jp: "Hay un jardín pequeño en la casa.", en: "The house has a small garden." }, accept: ["garden", "yard"] },
        { id: "es-u15l4-elpiso", type: "vocab", front: "el piso", reading: "elpiso", meaning: "the flat", example: { jp: "Vivo en un piso en Madrid.", en: "I live in a flat in Madrid." }, accept: ["apartment", "floor", "storey"], hint: "In Spain el piso is the apartment you live in. In Latin America that's el apartamento or el departamento, and piso there usually means the floor underfoot." },
        { id: "es-u15l4-eledificio", type: "vocab", front: "el edificio", reading: "eledificio", meaning: "the building", example: { jp: "El edificio es muy grande.", en: "The building is very big." }, accept: ["building", "block"] },
        { id: "es-u15l4-laescalera", type: "vocab", front: "la escalera", reading: "laescalera", meaning: "the stairs", example: { jp: "Hay una escalera en el edificio.", en: "There are stairs in the building." }, accept: ["staircase", "stairway", "ladder"] },
      ],
    },
  ],
};
