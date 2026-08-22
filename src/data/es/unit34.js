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
        { id: "es-u34l1-lanaturaleza", type: "vocab", front: "la naturaleza", reading: "lanaturaleza", meaning: "nature", example: { jp: "La naturaleza es muy bonita aquí.", en: "Nature is very beautiful here." }, accept: ["the natural world", "the outdoors"], hint: "All of the natural world in one word — and also a person's nature: su naturaleza." },
        { id: "es-u34l1-elmedioambiente", type: "vocab", front: "el medio ambiente", reading: "elmedioambiente", meaning: "the environment", example: { jp: "El medio ambiente es un tema importante.", en: "The environment is an important topic." }, accept: ["the environment"], hint: "Literally the \"surrounding medium\". Always with el: cuidar el medio ambiente, to look after the environment." },
        { id: "es-u34l1-elplaneta", type: "vocab", front: "el planeta", reading: "elplaneta", meaning: "planet", example: { jp: "La Tierra es un planeta pequeño.", en: "Earth is a small planet." }, accept: ["the planet"], hint: "Masculine despite the -a: el planeta, este planeta — like el tema, el problema." },
        { id: "es-u34l1-latierra", type: "vocab", front: "la Tierra", reading: "latierra", meaning: "Earth", example: { jp: "La Tierra es nuestra casa.", en: "Earth is our home." }, accept: ["the earth", "the world"], hint: "Capital T, the planet; small t, la tierra is the ground or soil you stand on." },
        { id: "es-u34l1-elclima", type: "vocab", front: "el clima", reading: "elclima", meaning: "climate", example: { jp: "El clima de España es muy bueno.", en: "The climate in Spain is very good." }, accept: ["the climate"], hint: "The long-run climate, not today's weather (el tiempo, A1). Masculine: el clima." },
        { id: "es-u34l1-elaire", type: "vocab", front: "el aire", reading: "elaire", meaning: "air", example: { jp: "Necesito aire; abro la ventana.", en: "I need air; I'm opening the window." }, accept: ["the air"], hint: "Al aire libre = in the open air, outdoors — one of the commonest things you'll say with it." },
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
        { id: "es-u34l2-laciencia", type: "vocab", front: "la ciencia", reading: "laciencia", meaning: "science", example: { jp: "La ciencia estudia la naturaleza.", en: "Science studies nature." }, accept: ["the science"], hint: "The school subject is usually plural: una clase de ciencias." },
        { id: "es-u34l2-elexperimento", type: "vocab", front: "el experimento", reading: "elexperimento", meaning: "experiment", example: { jp: "El experimento no funciona hoy.", en: "The experiment isn't working today." }, accept: ["the experiment"], hint: "The verb is experimentar. A straight cognate — one less thing to learn." },
        { id: "es-u34l2-descubrir", type: "vocab", front: "descubrir", reading: "descubrir", meaning: "to discover", example: { jp: "Voy a descubrir un lugar nuevo.", en: "I'm going to discover a new place." }, accept: ["to find out", "to uncover"], hint: "cubrir is to cover; des-cubrir is to un-cover — to discover. The past is descubrí." },
        { id: "es-u34l2-eldescubrimiento", type: "vocab", front: "el descubrimiento", reading: "eldescubrimiento", meaning: "discovery", example: { jp: "Es un descubrimiento muy importante.", en: "It's a very important discovery." }, accept: ["the discovery", "finding"], hint: "The noun from descubrir — a long word for a big idea." },
        { id: "es-u34l2-laenergia", type: "vocab", front: "la energía", reading: "laenergia", meaning: "energy", example: { jp: "El sol da mucha energía.", en: "The sun gives a lot of energy." }, accept: ["the energy", "power"], hint: "Physical energy and personal energy alike — tengo mucha energía hoy, I've got lots of energy today." },
        { id: "es-u34l2-lafuerza", type: "vocab", front: "la fuerza", reading: "lafuerza", meaning: "strength", example: { jp: "El viento tiene mucha fuerza hoy.", en: "The wind is very strong today." }, accept: ["the force", "power"], hint: "From it comes fuerte, strong. La fuerza de la naturaleza — the force of nature." },
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
        { id: "es-u34l3-proteger", type: "vocab", front: "proteger", reading: "proteger", meaning: "to protect", example: { jp: "Quiero proteger mi casa.", en: "I want to protect my house." }, accept: ["to defend", "to keep safe"], hint: "proteger a las personas, proteger el medio ambiente. The noun is la protección." },
        { id: "es-u34l3-contaminar", type: "vocab", front: "contaminar", reading: "contaminar", meaning: "to pollute", example: { jp: "Los coches contaminan la ciudad.", en: "Cars pollute the city." }, accept: ["to contaminate", "to dirty"], hint: "To make dirty on a large scale — the opposite of limpiar (A1)." },
        { id: "es-u34l3-lacontaminacion", type: "vocab", front: "la contaminación", reading: "lacontaminacion", meaning: "pollution", example: { jp: "Hay mucha contaminación en la ciudad.", en: "There's a lot of pollution in the city." }, accept: ["the pollution", "contamination"], hint: "The noun from contaminar — the dirty air of a big city." },
        { id: "es-u34l3-reciclar", type: "vocab", front: "reciclar", reading: "reciclar", meaning: "to recycle", example: { jp: "Reciclo el papel en casa.", en: "I recycle paper at home." }, accept: ["to recycle"], hint: "re + ciclar — to cycle again. The noun is el reciclaje." },
        { id: "es-u34l3-labasura", type: "vocab", front: "la basura", reading: "labasura", meaning: "rubbish", example: { jp: "Hay mucha basura en la calle.", en: "There's a lot of rubbish in the street." }, accept: ["the trash", "garbage", "rubbish"], hint: "Tirar la basura = to take out the rubbish. The bin is el cubo de la basura." },
        { id: "es-u34l3-salvar", type: "vocab", front: "salvar", reading: "salvar", meaning: "to save (rescue)", example: { jp: "Los médicos salvan vidas.", en: "Doctors save lives." }, accept: ["to rescue"], hint: "To save from danger — not to save a file (guardar, u33) or save money (ahorrar). ¡Sálvese quien pueda!" },
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
        { id: "es-u34l4-crecer", type: "vocab", front: "crecer", reading: "crecer", meaning: "to grow", example: { jp: "Las plantas crecen con el sol y el agua.", en: "Plants grow with sun and water." }, accept: ["to grow up", "to increase"], hint: "For living things and for numbers — a child crece, a city crece. The past is creció." },
        { id: "es-u34l4-morir", type: "vocab", front: "morir", reading: "morir", meaning: "to die", example: { jp: "Sin agua, la planta muere.", en: "Without water, the plant dies." }, accept: ["to pass away", "to die"], hint: "The opposite of vivir (A1) and of nacer, to be born. The past you'll meet is murió." },
        { id: "es-u34l4-laplanta", type: "vocab", front: "la planta", reading: "laplanta", meaning: "plant", example: { jp: "Tengo muchas plantas en casa.", en: "I have a lot of plants at home." }, accept: ["the plant"], hint: "A plant, and also a floor of a building — la planta baja is the ground floor." },
        { id: "es-u34l4-laespecie", type: "vocab", front: "la especie", reading: "laespecie", meaning: "species", example: { jp: "Es una especie muy rara.", en: "It's a very rare species." }, accept: ["the species", "kind", "type"], hint: "Singular and plural look almost alike: una especie, dos especies." },
        { id: "es-u34l4-natural", type: "vocab", front: "natural", reading: "natural", meaning: "natural", example: { jp: "El parque es un lugar natural.", en: "The park is a natural place." }, accept: ["nature (adj)"], hint: "The opposite of artificial. Es natural also means \"it's understandable\". Plural: naturales." },
        { id: "es-u34l4-salvaje", type: "vocab", front: "salvaje", reading: "salvaje", meaning: "wild", example: { jp: "Es una planta salvaje.", en: "It's a wild plant." }, accept: ["savage", "untamed"], hint: "A wild animal or plant, not a tame one. La naturaleza salvaje = the wilderness." },
      ],
    },
  ],
};
