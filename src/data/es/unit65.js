// ES Unit 65 — El medio ambiente (slot: environment) — B1
// A2's Unit 34 taught the environment at beginner resolution (la naturaleza, el
// medio ambiente, la contaminación, la energía, el clima, reciclar, la basura,
// proteger) and A1 the weather and landscape. B1 goes up a level: the systems
// (biodiversidad, ecosistema), the events (calentamiento, sequía, inundación),
// and the language of policy (sostenible, renovable, el reciclaje). The A2 words
// appear here only in examples. Examples are two clauses joined by a live
// connective — the B1 shape. Every front is a level up on A2.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT65 = {
  id: "es-u65",
  lang: "es",
  title: "El medio ambiente",
  order: 65,
  stage: "b1",
  lessons: [
    {
      id: "es-u65l1",
      unit: 65,
      lesson: 1,
      title: "Landscape and place",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a region rather than a street — el terreno, el entorno, el territorio, la región, rural, urbano.",
      items: [
        { id: "es-u65l1-elterreno", type: "vocab", front: "el terreno", reading: "elterreno", meaning: "the land", example: { jp: "El terreno de esta región es muy seco, por lo que casi no crece nada.", en: "The land in this region is very dry, so almost nothing grows." }, accept: ["terrain", "the ground", "plot", "land"] },
        { id: "es-u65l1-elentorno", type: "vocab", front: "el entorno", reading: "elentorno", meaning: "the surroundings", example: { jp: "El entorno está protegido, de modo que no se puede construir nada aquí.", en: "The surroundings are protected, so nothing can be built here." }, accept: ["surroundings", "the setting", "environment"], hint: "The immediate surroundings of a place. el medio ambiente (u34) is the natural world at large; el entorno is closer in. Note no se puede — the impersonal se you meet in Unit 70." },
        { id: "es-u65l1-elterritorio", type: "vocab", front: "el territorio", reading: "elterritorio", meaning: "the territory", example: { jp: "Este territorio es enorme, pero muy poca gente vive en él.", en: "This territory is huge, but very few people live in it." }, accept: ["territory", "the area", "land"] },
        { id: "es-u65l1-laregion", type: "vocab", front: "la región", reading: "laregion", meaning: "the region", example: { jp: "Cada región tiene su propia cocina, así que se come de forma distinta según el lugar.", en: "Each region has its own cuisine, so people eat differently depending on the place." }, accept: ["region", "the area", "district"] },
        { id: "es-u65l1-rural", type: "vocab", front: "rural", reading: "rural", meaning: "rural", example: { jp: "Viene de una zona rural, mientras que su mujer creció en la ciudad.", en: "He comes from a rural area, whereas his wife grew up in the city." }, accept: ["country", "countryside"], hint: "Plural: rurales. The opposite is urbano." },
        { id: "es-u65l1-urbano", type: "vocab", front: "urbano", reading: "urbano", meaning: "urban", example: { jp: "Prefiere la vida urbana, aunque el aire de la ciudad no sea muy bueno.", en: "He prefers urban life, although the city air isn't very good." }, accept: ["city", "town", "of the city"], hint: "aunque + subjunctive (sea) when the fact is presented as a concession — a B1 pattern from Unit 69." },
      ],
    },
    {
      id: "es-u65l2",
      unit: 65,
      lesson: 2,
      title: "Living systems",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about nature as a system — la biodiversidad, el ecosistema, amenazar, desaparecer, el hábitat, la fauna.",
      items: [
        { id: "es-u65l2-labiodiversidad", type: "vocab", front: "la biodiversidad", reading: "labiodiversidad", meaning: "biodiversity", example: { jp: "La biodiversidad disminuye cada año, lo cual preocupa a muchos científicos.", en: "Biodiversity is decreasing every year, which worries a lot of scientists." }, accept: ["the biodiversity", "wildlife variety"] },
        { id: "es-u65l2-elecosistema", type: "vocab", front: "el ecosistema", reading: "elecosistema", meaning: "the ecosystem", example: { jp: "El ecosistema de la costa está en peligro, así que hay que protegerlo.", en: "The coastal ecosystem is in danger, so it has to be protected." }, accept: ["ecosystem", "the environment"], hint: "Masculine despite the -a, like el problema, el clima: el ecosistema." },
        { id: "es-u65l2-elhabitat", type: "vocab", front: "el hábitat", reading: "elhabitat", meaning: "the habitat", example: { jp: "Cada especie tiene su hábitat, y cuando este cambia, la especie desaparece.", en: "Each species has its habitat, and when it changes, the species disappears." }, accept: ["habitat", "the environment"], hint: "Masculine: el hábitat, este hábitat. The particular place a species lives." },
        { id: "es-u65l2-lafauna", type: "vocab", front: "la fauna", reading: "lafauna", meaning: "the wildlife", example: { jp: "La fauna de esta región es única, por lo que vienen científicos de todo el mundo.", en: "The wildlife of this region is unique, which is why scientists come from all over the world." }, accept: ["wildlife", "the fauna", "animal life"], hint: "The animals of a place; the plants are la flora." },
      ],
    },
    {
      id: "es-u65l3",
      unit: 65,
      lesson: 3,
      title: "A changing climate",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name what the climate is doing — el calentamiento, la sequía, la inundación, el recurso, preservar, agotar.",
      items: [
        { id: "es-u65l3-elcalentamiento", type: "vocab", front: "el calentamiento", reading: "elcalentamiento", meaning: "global warming", example: { jp: "El calentamiento es más rápido de lo que se pensaba, lo cual lo cambia todo.", en: "Global warming is faster than was thought, which changes everything." }, accept: ["warming", "the heating", "climate change"], hint: "Full form: el calentamiento global. From caliente, hot." },
        { id: "es-u65l3-lasequia", type: "vocab", front: "la sequía", reading: "lasequia", meaning: "the drought", example: { jp: "La sequía duró todo el verano, así que los agricultores lo perdieron todo.", en: "The drought lasted all summer, so the farmers lost everything." }, accept: ["drought", "the dry spell"], hint: "From seco, dry (u21)." },
        { id: "es-u65l3-lainundacion", type: "vocab", front: "la inundación", reading: "lainundacion", meaning: "the flood", example: { jp: "Después de la inundación, hubo que reparar todas las casas del pueblo.", en: "After the flood, all the houses in the village had to be repaired." }, accept: ["flood", "flooding"] },
        { id: "es-u65l3-elrecurso", type: "vocab", front: "el recurso", reading: "elrecurso", meaning: "the resource", example: { jp: "El agua es un recurso, y sin embargo la desperdiciamos todos los días.", en: "Water is a resource, and yet we waste it every day." }, accept: ["resource", "the means"], hint: "Los recursos naturales — natural resources, the phrase you'll meet everywhere." },
        { id: "es-u65l3-preservar", type: "vocab", front: "preservar", reading: "preservar", meaning: "to preserve", example: { jp: "Hay que preservar estas zonas, porque una vez que desaparecen no vuelven.", en: "These areas have to be preserved, because once they disappear they don't come back." }, accept: ["to conserve", "to safeguard"], hint: "A close cousin of proteger (u34); preservar leans on keeping something as it is." },
        { id: "es-u65l3-agotar", type: "vocab", front: "agotar", reading: "agotar", meaning: "to use up", example: { jp: "Si seguimos así, vamos a agotar los recursos antes de lo que creemos.", en: "If we carry on like this, we'll use up the resources sooner than we think." }, accept: ["to deplete", "to exhaust", "to run out of"], hint: "Reflexive it means to run out: se agotó el agua. estar agotado also means exhausted." },
      ],
    },
    {
      id: "es-u65l4",
      unit: 65,
      lesson: 4,
      title: "Doing something about it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about solutions, not just problems — sostenible, renovable, el desperdicio, el reciclaje, el residuo, la medida.",
      items: [
        { id: "es-u65l4-sostenible", type: "vocab", front: "sostenible", reading: "sostenible", meaning: "sustainable", example: { jp: "No es una solución sostenible, aunque funcione por el momento.", en: "It isn't a sustainable solution, even if it works for the moment." }, accept: ["lasting", "long-term"], hint: "el desarrollo sostenible = sustainable development, the standard phrase. aunque + subjunctive (funcione) again." },
        { id: "es-u65l4-renovable", type: "vocab", front: "renovable", reading: "renovable", meaning: "renewable", example: { jp: "La energía renovable cuesta menos que antes, así que cada vez más gente la usa.", en: "Renewable energy costs less than before, so more and more people use it." }, accept: ["replaceable", "green"] },
        { id: "es-u65l4-eldesperdicio", type: "vocab", front: "el desperdicio", reading: "eldesperdicio", meaning: "the waste", example: { jp: "El desperdicio de comida es enorme, mientras que hay gente que pasa hambre.", en: "Food waste is enormous, while there are people who go hungry." }, accept: ["waste", "wastefulness", "squandering"], hint: "The ACT of wasting; la basura (u34) is the rubbish itself." },
        { id: "es-u65l4-elreciclaje", type: "vocab", front: "el reciclaje", reading: "elreciclaje", meaning: "recycling", example: { jp: "El reciclaje es obligatorio aquí, de modo que cada edificio tiene varios contenedores.", en: "Recycling is compulsory here, so each building has several bins." }, accept: ["the recycling", "sorting"], hint: "The noun beside the verb reciclar (u34)." },
        { id: "es-u65l4-elresiduo", type: "vocab", front: "el residuo", reading: "elresiduo", meaning: "the waste item", example: { jp: "Cada residuo tiene su contenedor, y hay que aprender a separarlos bien.", en: "Each piece of waste has its own bin, and you have to learn to separate them properly." }, accept: ["waste", "residue", "the refuse"], hint: "The technical word for waste, usually plural: los residuos." },
        { id: "es-u65l4-lamedida", type: "vocab", front: "la medida", reading: "lamedida", meaning: "the measure", example: { jp: "El gobierno tomó varias medidas, aunque muchos piensan que llegaron tarde.", en: "The government took several measures, although many think they came too late." }, accept: ["measure", "the step", "action"], hint: "tomar medidas = to take steps. Also a measurement, from medir, to measure." },
      ],
    },
  ],
};
