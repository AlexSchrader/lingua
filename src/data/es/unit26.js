// ES Unit 26 — La naturaleza (slot: nature-animals) — A2
// ─────────────────────────────────────────────────────────────────────────────
// A1 owns the sky and the weather — el sol, la luna, el cielo, la nube, la
// lluvia, la nieve, el viento, la tormenta, hace calor/frío/sol, está nublado —
// plus two animals a learner keeps at home, el perro and el gato. It has no
// landscape, no wild animal, no tree, and no way to talk about the environment.
// So A2 walks out of the house: the shapes of the land, the animals of the field,
// the plants that grow, and the climate and its care. Every A1 weather noun is
// used in the examples and re-taught nowhere.
//   el clima and el idioma-type nouns: masculine despite the -a ending — the
//   hints flag each one.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT26 = {
  id: "es-u26",
  lang: "es",
  title: "La naturaleza",
  order: 26,
  stage: "a2",
  lessons: [
    // Lesson 1: the shapes of the land
    {
      id: "es-u26l1",
      unit: 26,
      lesson: 1,
      title: "Landscape",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe where you are — la montaña, el río, el campo, la playa, el bosque — not just the weather over it.",
      items: [
        { id: "es-u26l1-elpaisaje", type: "vocab", front: "el paisaje", reading: "elpaisaje", meaning: "landscape", example: { jp: "El paisaje de España es muy bonito.", en: "Spain's landscape is very beautiful." }, drill: { jp: "El paisaje del campo es bonito", en: "The countryside landscape is pretty" }, accept: ["the scenery", "countryside", "view"], hint: "From el país, the country (A1). What the country looks like." },
        { id: "es-u26l1-lamontana", type: "vocab", front: "la montaña", reading: "lamontana", meaning: "mountain", example: { jp: "La montaña es muy alta.", en: "The mountain is very high." }, drill: { jp: "La montaña es muy alta", en: "The mountain is very high" }, accept: ["the mountain"], hint: "That ñ is the ny in canyon: mon-TA-nya. La sierra is a whole mountain range." },
        { id: "es-u26l1-elrio", type: "vocab", front: "el río", reading: "elrio", meaning: "river", example: { jp: "El río de la ciudad es largo.", en: "The city's river is long." }, drill: { jp: "El río de mi pueblo es pequeño", en: "My town's river is small" }, accept: ["the river", "stream"], hint: "Two syllables, stress on the first: RÍ-o. Río de Janeiro is literally \"river of January\"." },
        { id: "es-u26l1-elcampo", type: "vocab", front: "el campo", reading: "elcampo", meaning: "countryside", example: { jp: "Vivo en el campo, no en la ciudad.", en: "I live in the countryside, not in the city." }, drill: { jp: "El campo es muy tranquilo", en: "The countryside is very calm" }, accept: ["the country", "field"], hint: "The country as opposed to the city, and also a single field. Un campo de fútbol is a football pitch." },
        { id: "es-u26l1-laplaya", type: "vocab", front: "la playa", reading: "laplaya", meaning: "beach", example: { jp: "En verano voy a la playa con mi familia.", en: "In summer I go to the beach with my family." }, drill: { jp: "La playa está cerca del hotel", en: "The beach is near the hotel" }, accept: ["the beach", "seaside"], hint: "Where the mar (u22) meets the land. La costa is the wider coast." },
        { id: "es-u26l1-elbosque", type: "vocab", front: "el bosque", reading: "elbosque", meaning: "forest", example: { jp: "El bosque es grande y verde.", en: "The forest is big and green." }, drill: { jp: "El bosque es muy grande", en: "The forest is very big" }, accept: ["the forest", "woods"], hint: "That qu is a hard k: BOS-ke. La selva is the tropical jungle." },
      ],
    },
    // Lesson 2: the animals of the field
    {
      id: "es-u26l2",
      unit: 26,
      lesson: 2,
      title: "Animals",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the animals beyond cat and dog — el pájaro, el caballo, el pez, la vaca, el ratón.",
      items: [
        { id: "es-u26l2-elanimal", type: "vocab", front: "el animal", reading: "elanimal", meaning: "animal", example: { jp: "El perro es mi animal favorito.", en: "The dog is my favourite animal." }, drill: { jp: "El animal está en el campo", en: "The animal is in the countryside" }, accept: ["the animal"], hint: "Plural los animales, moving the stress: a-ni-MA-les." },
        { id: "es-u26l2-elpajaro", type: "vocab", front: "el pájaro", reading: "elpajaro", meaning: "bird", example: { jp: "Hay un pájaro pequeño en el jardín.", en: "There's a small bird in the garden." }, drill: { jp: "El pájaro está en el árbol", en: "The bird is in the tree" }, accept: ["the bird"], hint: "Stress on the first syllable: PÁ-ja-ro. Un ave is the more formal, scientific word for a bird." },
        { id: "es-u26l2-elcaballo", type: "vocab", front: "el caballo", reading: "elcaballo", meaning: "horse", example: { jp: "Monto a caballo en el campo.", en: "I ride a horse in the countryside." }, drill: { jp: "El caballo es de mi tío", en: "The horse is my uncle's" }, accept: ["the horse"], hint: "Watch the preposition: montar A caballo (on horseback), but montar EN bicicleta (u21). The ll is a y: ca-BA-yo." },
        { id: "es-u26l2-elpez", type: "vocab", front: "el pez", reading: "elpez", meaning: "fish", example: { jp: "El pez vive en el agua.", en: "The fish lives in the water." }, drill: { jp: "El pez está en el río", en: "The fish is in the river" }, accept: ["the fish (live)"], hint: "The living fish is el pez; on your plate it becomes el pescado (A1) — literally \"the fished\". Plural: los peces." },
        { id: "es-u26l2-lavaca", type: "vocab", front: "la vaca", reading: "lavaca", meaning: "cow", example: { jp: "Hay muchas vacas en el campo.", en: "There are many cows in the countryside." }, drill: { jp: "La vaca está en el campo", en: "The cow is in the field" }, accept: ["the cow"], hint: "The milk (A1: la leche) comes from here. La carne de vaca is beef." },
        { id: "es-u26l2-elraton", type: "vocab", front: "el ratón", reading: "elraton", meaning: "mouse", example: { jp: "El gato busca al ratón.", en: "The cat looks for the mouse." }, drill: { jp: "El ratón es muy pequeño", en: "The mouse is very small" }, accept: ["the mouse", "rat"], hint: "Also the computer mouse — same word. Plural loses the accent: los ratones." },
      ],
    },
    // Lesson 3: the plants that grow
    {
      id: "es-u26l3",
      unit: 26,
      lesson: 3,
      title: "Plants and trees",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about growing things — el árbol, la flor, la hoja, la planta, la hierba, crecer.",
      items: [
        { id: "es-u26l3-elarbol", type: "vocab", front: "el árbol", reading: "elarbol", meaning: "tree", example: { jp: "El árbol del jardín es muy viejo.", en: "The tree in the garden is very old." }, drill: { jp: "El árbol del jardín es viejo", en: "The garden tree is old" }, accept: ["the tree"], hint: "Stress on the first syllable: ÁR-bol. Plural los árboles keeps the accent." },
        { id: "es-u26l3-laflor", type: "vocab", front: "la flor", reading: "laflor", meaning: "flower", example: { jp: "Compro flores para mi madre.", en: "I buy flowers for my mother." }, drill: { jp: "La flor es amarilla", en: "The flower is yellow" }, accept: ["the flower", "blossom"], hint: "Feminine: LA flor. A florist's is una floristería, from flor + the -ería shop ending." },
        { id: "es-u26l3-lahoja", type: "vocab", front: "la hoja", reading: "lahoja", meaning: "leaf", example: { jp: "La hoja del árbol es verde.", en: "The tree's leaf is green." }, drill: { jp: "La hoja del árbol es verde", en: "The tree's leaf is green" }, accept: ["the leaf", "sheet (of paper)"], hint: "Silent h, and the j is throaty: O-ha. Also a sheet of paper — una hoja de papel." },
        { id: "es-u26l3-laplanta", type: "vocab", front: "la planta", reading: "laplanta", meaning: "plant", example: { jp: "Tengo muchas plantas en casa.", en: "I have many plants at home." }, drill: { jp: "La planta está en la ventana", en: "The plant is in the window" }, accept: ["the plant"], hint: "Also a floor of a building: la planta baja is the ground floor." },
        { id: "es-u26l3-lahierba", type: "vocab", front: "la hierba", reading: "lahierba", meaning: "grass", example: { jp: "La vaca come hierba en el campo.", en: "The cow eats grass in the field." }, drill: { jp: "La hierba del parque está verde", en: "The park grass is green" }, accept: ["the grass", "herb"], hint: "Silent h again: YER-ba. Also a herb — las hierbas in cooking." },
        { id: "es-u26l3-crecer", type: "vocab", front: "crecer", reading: "crecer", meaning: "to grow", example: { jp: "Las plantas crecen con agua y sol.", en: "Plants grow with water and sun." }, drill: { jp: "Crecer en el campo es tranquilo", en: "Growing up in the countryside is calm" }, accept: ["grow up", "increase"], hint: "For a person it means to grow up: mi hijo crece muy rápido." },
      ],
    },
    // Lesson 4: the climate and its care
    {
      id: "es-u26l4",
      unit: 26,
      lesson: 4,
      title: "Climate and care",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the natural world and caring for it — el clima, la naturaleza, el medio ambiente, contaminar, proteger.",
      items: [
        { id: "es-u26l4-elclima", type: "vocab", front: "el clima", reading: "elclima", meaning: "climate", example: { jp: "El clima de España es muy bueno.", en: "Spain's climate is very good." }, drill: { jp: "El clima de España es bueno", en: "Spain's climate is good" }, accept: ["the climate"], hint: "Masculine despite the -a: EL clima. El clima is the long-term pattern; el tiempo (A1) is today's weather." },
        { id: "es-u26l4-lanaturaleza", type: "vocab", front: "la naturaleza", reading: "lanaturaleza", meaning: "nature", example: { jp: "Me gusta mucho la naturaleza.", en: "I really like nature." }, drill: { jp: "La naturaleza es muy importante", en: "Nature is very important" }, accept: ["the nature", "the outdoors"], hint: "The z sounds like s in Latin America, like th in most of Spain: natu-ra-LE-tha." },
        { id: "es-u26l4-elmedioambiente", type: "vocab", front: "el medio ambiente", reading: "elmedioambiente", meaning: "the environment", example: { jp: "El medio ambiente es importante para todos.", en: "The environment is important for everyone." }, drill: { jp: "El medio ambiente es de todos", en: "The environment belongs to everyone" }, accept: ["the environment"], hint: "Two words, one idea — the natural environment. Nearly always with el medio in front." },
        { id: "es-u26l4-contaminar", type: "vocab", front: "contaminar", reading: "contaminar", meaning: "to pollute", example: { jp: "Los coches contaminan la ciudad.", en: "Cars pollute the city." }, drill: { jp: "Contaminar el río es malo", en: "Polluting the river is bad" }, accept: ["contaminate", "pollute"], hint: "The noun is la contaminación — pollution, and also contamination in general." },
        { id: "es-u26l4-proteger", type: "vocab", front: "proteger", reading: "proteger", meaning: "to protect", example: { jp: "Es importante proteger la naturaleza.", en: "It's important to protect nature." }, drill: { jp: "Quiero proteger el bosque", en: "I want to protect the forest" }, accept: ["to guard", "defend"], hint: "That g is soft before e: pro-te-HER. Proteger a with a person: proteger a los niños." },
        { id: "es-u26l4-elfuego", type: "vocab", front: "el fuego", reading: "elfuego", meaning: "fire", example: { jp: "Hay fuego en la montaña.", en: "There's a fire on the mountain." }, drill: { jp: "El fuego del bosque es enorme", en: "The forest fire is enormous" }, accept: ["the fire", "flame", "light"], hint: "The ue is a w-sound: FWE-go. ¿Tienes fuego? is how you ask for a light." },
      ],
    },
  ],
};
