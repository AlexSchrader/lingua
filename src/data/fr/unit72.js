// FR Unit 72 — Environment and place (slot: environment) — B1
// A2's Unit 41 already taught the environment at beginner resolution
// (l'environnement, la pollution, l'énergie, le climat, les déchets, je recycle)
// and A1 Unit 13 the weather and landscape. B1 goes up a level: the systems
// (biodiversité, écosystème, espèce), the events (réchauffement, sécheresse,
// inondation), and the vocabulary of policy (durable, renouvelable, le tri).
// Every front checked against the live 1,287 first.
// Examples are two clauses joined by an already-live connective — the B1 shape.
// Conventions: see fr/unit1.js.
export const FR_UNIT72 = {
  id: "fr-u72",
  lang: "fr",
  title: "L'environnement",
  order: 72,
  stage: "b1",
  lessons: [
    {
      id: "fr-u72l1",
      unit: 72,
      lesson: 1,
      title: "Landscape and place",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a region rather than a street: le paysage, le littoral, une zone rurale ou urbaine.",
      items: [
        { id: "fr-u72l1-lepaysage", type: "vocab", front: "le paysage", reading: "lepaysage", meaning: "the landscape", example: { jp: "Le paysage change complètement quand on quitte la ville.", en: "The landscape changes completely when you leave the city." }, accept: ["landscape", "scenery", "the countryside"] },
        { id: "fr-u72l1-lelittoral", type: "vocab", front: "le littoral", reading: "lelittoral", meaning: "the coast", example: { jp: "Le littoral est protégé, donc on ne peut rien faire ici.", en: "The coast is protected, so you can't do anything here." }, accept: ["coast", "the coastline", "shoreline"], hint: "The formal word — la côte is the everyday one." },
        { id: "fr-u72l1-leterritoire", type: "vocab", front: "le territoire", reading: "leterritoire", meaning: "the territory", example: { jp: "Ce territoire est très grand, mais peu de personnes y habitent.", en: "This territory is very big, but few people live there." }, accept: ["territory", "the area", "land"] },
        { id: "fr-u72l1-laregion", type: "vocab", front: "la région", reading: "laregion", meaning: "the region", example: { jp: "Chaque région a sa cuisine, si bien qu'on mange différemment selon l'endroit.", en: "Each region has its own cooking, so people eat differently depending on the place." }, accept: ["region", "the area", "district"] },
        { id: "fr-u72l1-rural", type: "vocab", front: "rural", reading: "rural", meaning: "rural", example: { jp: "Il vient d'un milieu rural, tandis que sa femme a grandi en ville.", en: "He comes from a rural background, whereas his wife grew up in the city." }, accept: ["country", "countryside", "rustic"], hint: "Plural is ruraux, not \"rurals\" — like most -al adjectives." },
        { id: "fr-u72l1-urbain", type: "vocab", front: "urbain", reading: "urbain", meaning: "urban", example: { jp: "Il préfère le milieu urbain, tandis que sa sœur aime la campagne.", en: "He prefers the urban environment, whereas his sister loves the countryside." }, accept: ["city", "town", "of the city"] },
      ],
    },
    {
      id: "fr-u72l2",
      unit: 72,
      lesson: 2,
      title: "Living things",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about nature as a system: la biodiversité, une espèce menacée, l'écosystème.",
      items: [
        { id: "fr-u72l2-labiodiversite", type: "vocab", front: "la biodiversité", reading: "labiodiversite", meaning: "biodiversity", example: { jp: "La biodiversité diminue chaque année, ce qui inquiète beaucoup de scientifiques.", en: "Biodiversity is decreasing every year, which worries a lot of scientists." }, accept: ["the biodiversity", "wildlife variety"] },
        { id: "fr-u72l2-lespece", type: "vocab", front: "l'espèce", reading: "lespece", meaning: "the species", example: { jp: "Cette espèce a disparu de la région, parce que la forêt a disparu.", en: "This species has disappeared from the region, because the forest has gone." }, accept: ["species", "the kind", "sort"], hint: "une espèce, des espèces — regular. Also used loosely for \"kind of\": une espèce de sac." },
        { id: "fr-u72l2-lecosysteme", type: "vocab", front: "l'écosystème", reading: "lecosysteme", meaning: "the ecosystem", example: { jp: "L'écosystème du littoral est en danger, donc il faut le protéger.", en: "The coastal ecosystem is in danger, so it has to be protected." }, accept: ["ecosystem", "the environment"] },
        { id: "fr-u72l2-menacer", type: "vocab", front: "menacer", reading: "menacer", meaning: "to threaten", example: { jp: "Le réchauffement menace beaucoup d'espèces, et personne ne sait quoi faire.", en: "Global warming threatens many species, and nobody knows what to do." }, accept: ["to endanger", "to put at risk"] },
        { id: "fr-u72l2-disparaitre", type: "vocab", front: "disparaître", reading: "disparaitre", meaning: "to disappear", example: { jp: "Ces oiseaux vont disparaître si rien ne change.", en: "These birds are going to disappear if nothing changes." }, accept: ["to vanish", "to go extinct", "to die out"] },
        { id: "fr-u72l2-proteger", type: "vocab", front: "protéger", reading: "proteger", meaning: "to protect", example: { jp: "On protège cette forêt depuis vingt ans, si bien que les animaux sont revenus.", en: "This forest has been protected for twenty years, so the animals have come back." }, accept: ["to safeguard", "to shield", "to defend"] },
      ],
    },
    {
      id: "fr-u72l3",
      unit: 72,
      lesson: 3,
      title: "A changing climate",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name what the climate is doing: le réchauffement, la sécheresse, une inondation, polluer.",
      items: [
        { id: "fr-u72l3-lerechauffement", type: "vocab", front: "le réchauffement", reading: "lerechauffement", meaning: "global warming", example: { jp: "Le réchauffement est plus rapide que prévu, ce qui change tout.", en: "Global warming is faster than expected, which changes everything." }, accept: ["warming", "the heating", "climate change"], hint: "Full form: le réchauffement climatique. Built from chaud — literally \"re-warming\"." },
        { id: "fr-u72l3-lasecheresse", type: "vocab", front: "la sécheresse", reading: "lasecheresse", meaning: "the drought", example: { jp: "La sécheresse a duré tout l'été, donc les agriculteurs ont tout perdu.", en: "The drought lasted all summer, so the farmers lost everything." }, accept: ["drought", "the dry spell"], hint: "From sec (Unit 13), dry." },
        { id: "fr-u72l3-linondation", type: "vocab", front: "l'inondation", reading: "linondation", meaning: "the flood", example: { jp: "Après l'inondation, il a fallu réparer toutes les maisons du village.", en: "After the flood, all the houses in the village had to be repaired." }, accept: ["flood", "flooding", "the flooding"] },
        { id: "fr-u72l3-polluer", type: "vocab", front: "polluer", reading: "polluer", meaning: "to pollute", example: { jp: "Cette entreprise pollue la rivière, même si elle dit le contraire.", en: "This company pollutes the river, even though it says otherwise." }, accept: ["to contaminate", "to foul"] },
        { id: "fr-u72l3-laressource", type: "vocab", front: "la ressource", reading: "laressource", meaning: "the resource", example: { jp: "L'eau est une ressource, et pourtant on la gaspille tous les jours.", en: "Water is a resource, and yet we waste it every day." }, accept: ["resource", "the supply"] },
        { id: "fr-u72l3-preserver", type: "vocab", front: "préserver", reading: "preserver", meaning: "to preserve", example: { jp: "Il faut préserver ces zones, parce qu'elles vont disparaître.", en: "These areas must be preserved, because they are going to disappear." }, accept: ["to conserve", "to safeguard from harm", "to save"] },
      ],
    },
    {
      id: "fr-u72l4",
      unit: 72,
      lesson: 4,
      title: "Doing something about it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about solutions, not just problems: durable, renouvelable, le tri, le gaspillage.",
      items: [
        { id: "fr-u72l4-durable", type: "vocab", front: "durable", reading: "durable", meaning: "sustainable", example: { jp: "Ce n'est pas une solution durable, même si elle marche pour le moment.", en: "It isn't a sustainable solution, even if it works for now." }, accept: ["lasting", "long-term", "hard-wearing"], hint: "le développement durable = sustainable development, the standard phrase." },
        { id: "fr-u72l4-renouvelable", type: "vocab", front: "renouvelable", reading: "renouvelable", meaning: "renewable", example: { jp: "L'énergie renouvelable coûte moins cher qu'avant, du coup tout le monde s'y met.", en: "Renewable energy costs less than before, so everyone is taking it up." }, accept: ["replaceable", "green"] },
        { id: "fr-u72l4-legaspillage", type: "vocab", front: "le gaspillage", reading: "legaspillage", meaning: "the waste", example: { jp: "Le gaspillage est très important, tandis qu'il y a des personnes qui ont faim.", en: "Waste is very large, while there are people going hungry." }, accept: ["waste", "wastefulness", "squandering"], hint: "The ACT of wasting; les déchets (Unit 41) are the rubbish itself." },
        { id: "fr-u72l4-letri", type: "vocab", front: "le tri", reading: "letri", meaning: "sorting", example: { jp: "Le tri des déchets est obligatoire ici, donc chaque immeuble a plusieurs poubelles.", en: "Waste sorting is compulsory here, so each building has several bins." }, accept: ["the sorting", "separation", "recycling"] },
        { id: "fr-u72l4-ledechet", type: "vocab", front: "le déchet", reading: "ledechet", meaning: "the piece of waste", example: { jp: "Chaque déchet a sa poubelle, et il faut apprendre à le reconnaître.", en: "Each piece of waste has its own bin, and you have to learn to recognise it." }, accept: ["waste item", "rubbish", "refuse"], hint: "Usually plural (les déchets, Unit 41); the singular names one individual item." },
        { id: "fr-u72l4-lazone", type: "vocab", front: "la zone", reading: "lazone", meaning: "the zone", example: { jp: "C'est une zone protégée, si bien qu'on ne peut rien y faire.", en: "It's a protected zone, so nothing can be done there." }, accept: ["zone", "the area", "district"] },
      ],
    },
  ],
};
