// ES Unit 34 — La naturaleza y la ciencia (slot: science) — A2
// The scaffold slot is "science", and this unit reads it as the big-picture
// natural world plus basic science — deliberately NOT the concrete animals-and-
// flowers vocabulary block 1's Unit 26 (nature) owns. Where 26 names a tree, this
// unit talks about the planet, energy, pollution and how living things grow: the
// abstractions A2 is allowed to reach for. Any everyday nature word 26 also teaches
// defers to it by slot number at merge — here those words appear only in examples.
// Examples use A1 vocab plus this unit; the cognate fronts (planeta, energía,
// clima, natural…) are taught here, so they need no FREE line.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT34 = {
  id: "es-u34",
  lang: "es",
  title: "La naturaleza y la ciencia",
  order: 34,
  stage: "a2",
  lessons: [
    {
      id: "es-u34l1",
      unit: 34,
      lesson: 1,
      title: "The planet",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the natural world at large — la naturaleza, el medio ambiente, el planeta, la Tierra, el clima, el aire.",
      items: [
        { id: "es-u34l1-elplaneta", type: "vocab", front: "el planeta", reading: "elplaneta", meaning: "planet", example: { jp: "La Tierra es un planeta pequeño.", en: "Earth is a small planet." }, accept: ["the planet"], hint: "Masculine despite the -a: el planeta, este planeta — like el tema, el problema." },
        { id: "es-u34l1-latierra", type: "vocab", front: "la Tierra", reading: "latierra", meaning: "Earth", example: { jp: "La Tierra es nuestra casa.", en: "Earth is our home." }, accept: ["the earth", "the world"], hint: "Capital T, the planet; small t, la tierra is the ground or soil you stand on." },
        { id: "es-u34l1-elaire", type: "vocab", front: "el aire", reading: "elaire", meaning: "air", example: { jp: "Necesito aire; abro la ventana.", en: "I need air; I'm opening the window." }, accept: ["the air"], hint: "Al aire libre = in the open air, outdoors — one of the commonest things you'll say with it." },
        { id: "es-u34l1-eluniverso", type: "vocab", front: "el universo", reading: "eluniverso", meaning: "universe", example: { jp: "El universo es muy grande.", en: "The universe is very big." }, accept: ["the cosmos"], hint: "The whole cosmos; la Tierra is one small part of it." },
        { id: "es-u34l1-lacosta", type: "vocab", front: "la costa", reading: "lacosta", meaning: "coast", example: { jp: "Madrid no está en la costa.", en: "Madrid isn't on the coast." }, accept: ["the coast", "seaside", "shore"], hint: "Where the land meets the mar (u22). La costa española is famous for its beaches." },
        { id: "es-u34l1-eldesierto", type: "vocab", front: "el desierto", reading: "eldesierto", meaning: "desert", example: { jp: "En el desierto hace mucho calor.", en: "In the desert it's very hot." }, accept: ["the desert"], hint: "Also the adjective deserted: una calle desierta, an empty street." },
      ],
    },
    {
      id: "es-u34l2",
      unit: 34,
      lesson: 2,
      title: "Science and discovery",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about science in simple terms — la ciencia, el experimento, descubrir, el descubrimiento, la energía, la fuerza.",
      items: [
        { id: "es-u34l2-elexperimento", type: "vocab", front: "el experimento", reading: "elexperimento", meaning: "experiment", example: { jp: "El experimento no funciona hoy.", en: "The experiment isn't working today." }, accept: ["the experiment"], hint: "The verb is experimentar. A straight cognate — one less thing to learn." },
        { id: "es-u34l2-descubrir", type: "vocab", front: "descubrir", reading: "descubrir", meaning: "to discover", example: { jp: "Voy a descubrir un lugar nuevo.", en: "I'm going to discover a new place." }, accept: ["to find out", "to uncover"], hint: "cubrir is to cover; des-cubrir is to un-cover — to discover. The past is descubrí." },
        { id: "es-u34l2-eldescubrimiento", type: "vocab", front: "el descubrimiento", reading: "eldescubrimiento", meaning: "discovery", example: { jp: "Es un descubrimiento muy importante.", en: "It's a very important discovery." }, accept: ["the discovery", "finding"], hint: "The noun from descubrir — a long word for a big idea." },
        { id: "es-u34l2-laenergia", type: "vocab", front: "la energía", reading: "laenergia", meaning: "energy", example: { jp: "El sol da mucha energía.", en: "The sun gives a lot of energy." }, accept: ["the energy", "power"], hint: "Physical energy and personal energy alike — tengo mucha energía hoy, I've got lots of energy today." },
        { id: "es-u34l2-lafuerza", type: "vocab", front: "la fuerza", reading: "lafuerza", meaning: "strength", example: { jp: "El viento tiene mucha fuerza hoy.", en: "The wind is very strong today." }, accept: ["the force", "power"], hint: "From it comes fuerte, strong. La fuerza de la naturaleza — the force of nature." },
        { id: "es-u34l2-ellaboratorio", type: "vocab", front: "el laboratorio", reading: "ellaboratorio", meaning: "laboratory", example: { jp: "El experimento está en el laboratorio.", en: "The experiment is in the laboratory." }, accept: ["the lab"], hint: "Shortened to el labo in speech, the way English says \"lab\"." },
      ],
    },
    {
      id: "es-u34l3",
      unit: 34,
      lesson: 3,
      title: "Looking after the planet",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the environment — proteger, contaminar, la contaminación, reciclar, la basura, salvar.",
      items: [
        { id: "es-u34l3-lacontaminacion", type: "vocab", front: "la contaminación", reading: "lacontaminacion", meaning: "pollution", example: { jp: "Hay mucha contaminación en la ciudad.", en: "There's a lot of pollution in the city." }, accept: ["the pollution", "contamination"], hint: "The noun from contaminar — the dirty air of a big city." },
        { id: "es-u34l3-reciclar", type: "vocab", front: "reciclar", reading: "reciclar", meaning: "to recycle", example: { jp: "Reciclo el papel en casa.", en: "I recycle paper at home." }, accept: ["to recycle"], hint: "re + ciclar — to cycle again. The noun is el reciclaje." },
        { id: "es-u34l3-salvar", type: "vocab", front: "salvar", reading: "salvar", meaning: "to save (rescue)", example: { jp: "Los médicos salvan vidas.", en: "Doctors save lives." }, accept: ["to rescue"], hint: "To save from danger — not to save a file (guardar, u33) or save money (ahorrar). ¡Sálvese quien pueda!" },
        { id: "es-u34l3-elhumo", type: "vocab", front: "el humo", reading: "elhumo", meaning: "smoke", example: { jp: "Hay mucho humo en la ciudad.", en: "There's a lot of smoke in the city." }, accept: ["the smoke", "fumes"], hint: "The smoke of a fire or a car. Silent h: U-mo." },
        { id: "es-u34l3-peligroso", type: "vocab", front: "peligroso", reading: "peligroso", meaning: "dangerous", example: { jp: "La contaminación es peligrosa para todos.", en: "Pollution is dangerous for everyone." }, accept: ["risky", "hazardous"], hint: "From el peligro, danger. Feminine peligrosa: una zona peligrosa." },
        { id: "es-u34l3-elplastico", type: "vocab", front: "el plástico", reading: "elplastico", meaning: "plastic", example: { jp: "El plástico contamina el mar.", en: "Plastic pollutes the sea." }, accept: ["the plastic"], hint: "Also the adjective: una bolsa de plástico, a plastic bag." },
      ],
    },
    {
      id: "es-u34l4",
      unit: 34,
      lesson: 4,
      title: "Living things",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about how living things grow and change — crecer, morir, la planta, la especie, natural, salvaje.",
      items: [
        { id: "es-u34l4-morir", type: "vocab", front: "morir", reading: "morir", meaning: "to die", example: { jp: "Sin agua, la planta muere.", en: "Without water, the plant dies." }, accept: ["to pass away", "to die"], hint: "The opposite of vivir (A1) and of nacer, to be born. The past you'll meet is murió." },
        { id: "es-u34l4-laespecie", type: "vocab", front: "la especie", reading: "laespecie", meaning: "species", example: { jp: "Es una especie muy rara.", en: "It's a very rare species." }, accept: ["the species", "kind", "type"], hint: "Singular and plural look almost alike: una especie, dos especies." },
        { id: "es-u34l4-natural", type: "vocab", front: "natural", reading: "natural", meaning: "natural", example: { jp: "El parque es un lugar natural.", en: "The park is a natural place." }, accept: ["nature (adj)"], hint: "The opposite of artificial. Es natural also means \"it's understandable\". Plural: naturales." },
        { id: "es-u34l4-salvaje", type: "vocab", front: "salvaje", reading: "salvaje", meaning: "wild", example: { jp: "Es una planta salvaje.", en: "It's a wild plant." }, accept: ["savage", "untamed"], hint: "A wild animal or plant, not a tame one. La naturaleza salvaje = the wilderness." },
        { id: "es-u34l4-nacer", type: "vocab", front: "nacer", reading: "nacer", meaning: "to be born", example: { jp: "El bebé nace en el hospital.", en: "The baby is born in the hospital." }, accept: ["to be born"], hint: "The opposite of morir. Nací en Madrid — I was born in Madrid." },
        { id: "es-u34l4-laraiz", type: "vocab", front: "la raíz", reading: "laraiz", meaning: "root", example: { jp: "La raíz del árbol es muy larga.", en: "The tree's root is very long." }, accept: ["the root"], hint: "The root of a plant, and of a word. Plural moves the accent: las raíces." },
      ],
    },
  ],
};
