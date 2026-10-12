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
        { id: "es-u34l1-elplaneta", type: "vocab", front: "el planeta", reading: "elplaneta", meaning: "planet", example: { jp: "La Tierra es un planeta pequeño.", en: "Earth is a small planet." }, drill: { jp: "El planeta necesita más árboles", en: "The planet needs more trees" }, accept: ["the planet", "a world going round a star", "planets"], hint: "Masculine despite the -a: el planeta, este planeta — like el tema, el problema." },
        { id: "es-u34l1-latierra", type: "vocab", front: "la Tierra", reading: "latierra", meaning: "Earth", example: { jp: "La Tierra es nuestra casa.", en: "Earth is our home." }, drill: { jp: "La Tierra es un planeta pequeño", en: "The Earth is a small planet" }, accept: ["the earth", "the world", "our planet"], hint: "Capital T, the planet; small t, la tierra is the ground or soil you stand on." },
        { id: "es-u34l1-elaire", type: "vocab", front: "el aire", reading: "elaire", meaning: "air", example: { jp: "Necesito aire; abro la ventana.", en: "I need air; I'm opening the window." }, drill: { jp: "El aire de la montaña es puro", en: "The mountain air is pure" }, accept: ["the air", "what you breathe", "the gas around us"], hint: "Al aire libre = in the open air, outdoors — one of the commonest things you'll say with it." },
        { id: "es-u34l1-eluniverso", type: "vocab", front: "el universo", reading: "eluniverso", meaning: "universe", example: { jp: "El universo es muy grande.", en: "The universe is very big." }, drill: { jp: "El universo es muy grande", en: "The universe is very big" }, accept: ["the cosmos", "everything there is", "all of space"], hint: "The whole cosmos; la Tierra is one small part of it." },
        { id: "es-u34l1-lacosta", type: "vocab", front: "la costa", reading: "lacosta", meaning: "coast", example: { jp: "Madrid no está en la costa.", en: "Madrid isn't on the coast." }, drill: { jp: "La costa de España es larga", en: "Spain's coast is long" }, accept: ["the coast", "seaside", "shore"], hint: "Where the land meets the mar (u22). La costa española is famous for its beaches." },
        { id: "es-u34l1-eldesierto", type: "vocab", front: "el desierto", reading: "eldesierto", meaning: "desert", example: { jp: "En el desierto hace mucho calor.", en: "In the desert it's very hot." }, drill: { jp: "El desierto de México es enorme", en: "Mexico's desert is enormous" }, accept: ["the desert", "dry land with no rain", "sand with no water"], hint: "Also the adjective deserted: una calle desierta, an empty street." },
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
        { id: "es-u34l2-elexperimento", type: "vocab", front: "el experimento", reading: "elexperimento", meaning: "experiment", example: { jp: "El experimento no funciona hoy.", en: "The experiment isn't working today." }, drill: { jp: "El experimento del laboratorio es nuevo", en: "The laboratory experiment is new" }, accept: ["the experiment", "a scientific test", "a trial to find out"], hint: "The verb is experimentar. A straight cognate — one less thing to learn." },
        { id: "es-u34l2-descubrir", type: "vocab", front: "descubrir", reading: "descubrir", meaning: "to discover", example: { jp: "Voy a descubrir un lugar nuevo.", en: "I'm going to discover a new place." }, drill: { jp: "Quiero descubrir un país nuevo", en: "I want to discover a new country" }, accept: ["to find out", "to uncover", "come across for the first time"], hint: "cubrir is to cover; des-cubrir is to un-cover — to discover. The past is descubrí." },
        { id: "es-u34l2-eldescubrimiento", type: "vocab", front: "el descubrimiento", reading: "eldescubrimiento", meaning: "discovery", example: { jp: "Es un descubrimiento muy importante.", en: "It's a very important discovery." }, drill: { jp: "El descubrimiento es muy importante", en: "The discovery is very important" }, accept: ["the discovery", "finding", "something found for the first time"], hint: "The noun from descubrir — a long word for a big idea." },
        { id: "es-u34l2-laenergia", type: "vocab", front: "la energía", reading: "laenergia", meaning: "energy", example: { jp: "El sol da mucha energía.", en: "The sun gives a lot of energy." }, drill: { jp: "La energía del sol es gratis", en: "The sun's energy is free" }, accept: ["the energy", "power", "what makes things run"], hint: "Physical energy and personal energy alike — tengo mucha energía hoy, I've got lots of energy today." },
        { id: "es-u34l2-lafuerza", type: "vocab", front: "la fuerza", reading: "lafuerza", meaning: "strength", example: { jp: "El viento tiene mucha fuerza hoy.", en: "The wind is very strong today." }, drill: { jp: "La fuerza del viento es enorme", en: "The force of the wind is enormous" }, accept: ["the force", "power", "how strong something is"], hint: "From it comes fuerte, strong. La fuerza de la naturaleza — the force of nature." },
        { id: "es-u34l2-ellaboratorio", type: "vocab", front: "el laboratorio", reading: "ellaboratorio", meaning: "laboratory", example: { jp: "El experimento está en el laboratorio.", en: "The experiment is in the laboratory." }, drill: { jp: "El laboratorio está en la universidad", en: "The laboratory is at the university" }, accept: ["the lab", "where experiments are done", "a research room"], hint: "Shortened to el labo in speech, the way English says \"lab\"." },
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
        { id: "es-u34l3-lacontaminacion", type: "vocab", front: "la contaminación", reading: "lacontaminacion", meaning: "pollution", example: { jp: "Hay mucha contaminación en la ciudad.", en: "There's a lot of pollution in the city." }, drill: { jp: "La contaminación de la ciudad es mala", en: "The city's pollution is bad" }, accept: ["the pollution", "contamination", "dirty air and water"], hint: "The noun from contaminar — the dirty air of a big city." },
        { id: "es-u34l3-reciclar", type: "vocab", front: "reciclar", reading: "reciclar", meaning: "to recycle", example: { jp: "Reciclo el papel en casa.", en: "I recycle paper at home." }, drill: { jp: "Quiero reciclar el plástico", en: "I want to recycle the plastic" }, accept: ["to recycle", "use the material again", "turn waste into new things"], hint: "re + ciclar — to cycle again. The noun is el reciclaje." },
        { id: "es-u34l3-salvar", type: "vocab", front: "salvar", reading: "salvar", meaning: "to save (rescue)", example: { jp: "Los médicos salvan vidas.", en: "Doctors save lives." }, drill: { jp: "Quiero salvar el bosque", en: "I want to save the forest" }, accept: ["to rescue", "get someone out of danger", "to save a life"], hint: "To save from danger — not to save a file (guardar, u33) or save money (ahorrar). ¡Sálvese quien pueda!" },
        { id: "es-u34l3-elhumo", type: "vocab", front: "el humo", reading: "elhumo", meaning: "smoke", example: { jp: "Hay mucho humo en la ciudad.", en: "There's a lot of smoke in the city." }, drill: { jp: "El humo del fuego es negro", en: "The smoke from the fire is black" }, accept: ["the smoke", "fumes", "grey air from a fire"], hint: "The smoke of a fire or a car. Silent h: U-mo." },
        { id: "es-u34l3-peligroso", type: "vocab", front: "peligroso", reading: "peligroso", meaning: "dangerous", example: { jp: "La contaminación es peligrosa para todos.", en: "Pollution is dangerous for everyone." }, drill: { jp: "El río es peligroso en marzo", en: "The river is dangerous in March" }, accept: ["risky", "hazardous", "likely to cause harm"], hint: "From el peligro, danger. Feminine peligrosa: una zona peligrosa." },
        { id: "es-u34l3-elplastico", type: "vocab", front: "el plástico", reading: "elplastico", meaning: "plastic", example: { jp: "El plástico contamina el mar.", en: "Plastic pollutes the sea." }, drill: { jp: "El plástico del mar es un problema", en: "The plastic in the sea is a problem" }, accept: ["the plastic", "what bottles are made of", "a man-made material"], hint: "Also the adjective: una bolsa de plástico, a plastic bag." },
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
        { id: "es-u34l4-morir", type: "vocab", front: "morir", reading: "morir", meaning: "to die", example: { jp: "Sin agua, la planta muere.", en: "Without water, the plant dies." }, drill: { jp: "Las plantas pueden morir sin agua", en: "Plants can die without water" }, accept: ["to pass away", "to die", "stop living"], hint: "The opposite of vivir (A1) and of nacer, to be born. The past you'll meet is murió." },
        { id: "es-u34l4-laespecie", type: "vocab", front: "la especie", reading: "laespecie", meaning: "species", example: { jp: "Es una especie muy rara.", en: "It's a very rare species." }, drill: { jp: "La especie del pájaro es rara", en: "The bird's species is rare" }, accept: ["the species", "kind", "type"], hint: "Singular and plural look almost alike: una especie, dos especies." },
        { id: "es-u34l4-natural", type: "vocab", front: "natural", reading: "natural", meaning: "natural", example: { jp: "El parque es un lugar natural.", en: "The park is a natural place." }, drill: { jp: "El parque natural es enorme", en: "The natural park is enormous" }, accept: ["nature (adj)", "coming from nature", "not man-made"], hint: "The opposite of artificial. Es natural also means \"it's understandable\". Plural: naturales." },
        { id: "es-u34l4-salvaje", type: "vocab", front: "salvaje", reading: "salvaje", meaning: "wild", example: { jp: "Es una planta salvaje.", en: "It's a wild plant." }, drill: { jp: "El animal salvaje vive en el bosque", en: "The wild animal lives in the forest" }, accept: ["savage", "untamed", "not kept by people"], hint: "A wild animal or plant, not a tame one. La naturaleza salvaje = the wilderness." },
        { id: "es-u34l4-nacer", type: "vocab", front: "nacer", reading: "nacer", meaning: "to be born", example: { jp: "El bebé nace en el hospital.", en: "The baby is born in the hospital." }, drill: { jp: "Nacer en el campo es tranquilo", en: "Being born in the countryside is calm" }, accept: ["to be born", "come into the world", "begin life"], hint: "The opposite of morir. Nací en Madrid — I was born in Madrid." },
        { id: "es-u34l4-laraiz", type: "vocab", front: "la raíz", reading: "laraiz", meaning: "root", example: { jp: "La raíz del árbol es muy larga.", en: "The tree's root is very long." }, drill: { jp: "La raíz del árbol es fuerte", en: "The tree's root is strong" }, accept: ["the root", "the part of a plant underground", "roots"], hint: "The root of a plant, and of a word. Plural moves the accent: las raíces." },
      ],
    },
  ],
};
