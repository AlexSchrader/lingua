// FR Unit 126 — Les qualités d'une chose bien faite ("What makes something good") — B2
// Strand D, coverage unit 9 of 13 (block 3, units 121-133). Generic slot
// "Vocabulary 9 (B2)"; given a real theme — DEVIATION FROM THE SLOT NAME ONLY.
//
// ONE LEVEL ABOVE THE SLOT: A2+B1 teach the adjectives (précis, clair, simple,
// efficace, solide) and a few nouns (la qualité, la valeur). This unit authors
// the ABSTRACT QUALITY NOUNS a B2 speaker uses to praise or fault a piece of work
// — la rigueur, la clarté, la cohérence, la finesse. Every front checked against
// the 2,168 fronts and the sibling B2 blocks (la nuance is in B1 u61 and avoided).
// Conventions: see fr/unit1.js.
export const FR_UNIT126 = {
  id: "fr-u126",
  lang: "fr",
  title: "Les qualités d'une chose bien faite",
  order: 126,
  stage: "b2",
  lessons: [
    {
      id: "fr-u126l1",
      unit: 126,
      lesson: 1,
      title: "A clear mind's work",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Praise clear thinking: la clarté, la précision, la rigueur, la cohérence, l'exactitude, la justesse.",
      items: [
        { id: "fr-u126l1-laclarte", type: "vocab", front: "la clarté", reading: "laclarte", meaning: "clarity", example: { jp: "La clarté de ses explications aide même les débutants à suivre.", en: "The clarity of his explanations helps even beginners follow." }, accept: ["clarity", "the clarity", "clearness", "brightness"], hint: "From clair. Of an idea, or of light." },
        { id: "fr-u126l1-laprecision", type: "vocab", front: "la précision", reading: "laprecision", meaning: "precision", example: { jp: "Il a décrit la scène avec une précision étonnante.", en: "He described the scene with astonishing precision." }, accept: ["precision", "the precision", "accuracy"], hint: "From précis. Exactness of detail. avec précision = precisely." },
        { id: "fr-u126l1-laminutie", type: "vocab", front: "la minutie", reading: "laminutie", meaning: "meticulousness", example: { jp: "Il classe ses documents avec une minutie impressionnante.", en: "He files his documents with impressive meticulousness." }, accept: ["meticulousness", "the meticulousness", "attention to detail", "thoroughness"], hint: "Painstaking care over the smallest details. avec minutie = painstakingly." },
        { id: "fr-u126l1-lalogique", type: "vocab", front: "la logique", reading: "lalogique", meaning: "the logic", example: { jp: "Je ne vois pas la logique de sa décision, elle semble se contredire.", en: "I don't see the logic of his decision; it seems to contradict itself." }, accept: ["logic", "the logic", "reasoning", "rationale"], hint: "The reasoning that holds an argument together. Also an adjective: c'est logique." },
        { id: "fr-u126l1-lexactitude", type: "vocab", front: "l'exactitude", reading: "lexactitude", meaning: "accuracy", example: { jp: "On peut douter de l'exactitude de ces chiffres.", en: "One may doubt the accuracy of these figures." }, accept: ["accuracy", "the accuracy", "exactness", "correctness"], hint: "From exact. Being correct in every detail." },
        { id: "fr-u126l1-lajustesse", type: "vocab", front: "la justesse", reading: "lajustesse", meaning: "aptness", example: { jp: "La justesse de sa remarque a surpris tout le monde.", en: "The aptness of his remark surprised everyone." }, accept: ["aptness", "the aptness", "accuracy", "rightness"], hint: "From juste. Being exactly right — a word, a note, an observation." },
      ],
    },
    {
      id: "fr-u126l2",
      unit: 126,
      lesson: 2,
      title: "Depth and subtlety",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Praise richness of thought: la profondeur, la finesse, la subtilité, la pertinence, la portée, l'ampleur.",
      items: [
        { id: "fr-u126l2-laprofondeur", type: "vocab", front: "la profondeur", reading: "laprofondeur", meaning: "depth", example: { jp: "On mesure la profondeur de sa pensée à chaque phrase.", en: "You can measure the depth of his thinking in every sentence." }, accept: ["depth", "the depth", "profundity"], hint: "From profond. Physical depth, or depth of thought." },
        { id: "fr-u126l2-lafinesse", type: "vocab", front: "la finesse", reading: "lafinesse", meaning: "finesse", example: { jp: "Il faut de la finesse pour comprendre ce genre d'humour.", en: "You need subtlety to understand this kind of humour." }, accept: ["subtlety", "the subtlety", "finesse", "delicacy"], hint: "From fin. A delicate, sharp sense of nuance." },
        { id: "fr-u126l2-lasubtilite", type: "vocab", front: "la subtilité", reading: "lasubtilite", meaning: "subtlety", example: { jp: "La subtilité de ce raisonnement échappe à beaucoup de gens.", en: "The subtlety of this reasoning escapes many people." }, accept: ["subtlety", "the subtlety", "nuance"], hint: "From subtil. A fine distinction that's easy to miss." },
        { id: "fr-u126l2-lapertinence", type: "vocab", front: "la pertinence", reading: "lapertinence", meaning: "relevance", example: { jp: "Personne ne conteste la pertinence de sa question.", en: "Nobody disputes the relevance of his question." }, accept: ["relevance", "the relevance", "pertinence", "aptness"], hint: "From pertinent. Being right to the point." },
        { id: "fr-u126l2-ladimension", type: "vocab", front: "la dimension", reading: "ladimension", meaning: "the scope", example: { jp: "On n'a pas tout de suite mesuré la dimension de cette découverte.", en: "The scope of this discovery wasn't grasped straight away." }, accept: ["scope", "the scope", "the dimension", "the scale", "the significance"], hint: "The size or importance of something — also a physical dimension." },
        { id: "fr-u126l2-letendue", type: "vocab", front: "l'étendue", reading: "letendue", meaning: "the extent", example: { jp: "On a vite compris l'étendue des dégâts après la tempête.", en: "The extent of the damage was quickly understood after the storm." }, accept: ["extent", "the extent", "the expanse", "the range", "the scale"], hint: "From étendre, to spread. How far something stretches — land, damage, knowledge." },
      ],
    },
    {
      id: "fr-u126l3",
      unit: 126,
      lesson: 3,
      title: "How well it holds",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Praise reliability: la solidité, la stabilité, la fiabilité, la validité, l'efficacité, l'harmonie.",
      items: [
        { id: "fr-u126l3-lasolidite", type: "vocab", front: "la solidité", reading: "lasolidite", meaning: "sturdiness", example: { jp: "La solidité de ce pont a été testée pendant des années.", en: "The sturdiness of this bridge was tested for years." }, accept: ["sturdiness", "the sturdiness", "solidity", "strength", "soundness"], hint: "From solide. Also of an argument or a friendship." },
        { id: "fr-u126l3-lastabilite", type: "vocab", front: "la stabilité", reading: "lastabilite", meaning: "stability", example: { jp: "La stabilité du pays attire les investisseurs étrangers.", en: "The country's stability attracts foreign investors." }, accept: ["stability", "the stability"], hint: "From stable. Not changing or wobbling. The opposite of l'instabilité." },
        { id: "fr-u126l3-lafiabilite", type: "vocab", front: "la fiabilité", reading: "lafiabilite", meaning: "reliability", example: { jp: "On choisit cette marque pour la fiabilité de ses appareils.", en: "People choose this brand for the reliability of its devices." }, accept: ["reliability", "the reliability", "dependability"], hint: "From fiable. Something you can trust to work every time." },
        { id: "fr-u126l3-lavalidite", type: "vocab", front: "la validité", reading: "lavalidite", meaning: "validity", example: { jp: "On peut discuter la validité de cette méthode.", en: "One can debate the validity of this method." }, accept: ["validity", "the validity", "soundness"], hint: "From valide. Whether something holds up — an argument, a ticket, a law." },
        { id: "fr-u126l3-lefficacite", type: "vocab", front: "l'efficacité", reading: "lefficacite", meaning: "effectiveness", example: { jp: "On juge une méthode à son efficacité, pas à sa beauté.", en: "You judge a method by its effectiveness, not its beauty." }, accept: ["effectiveness", "the effectiveness", "efficiency"], hint: "From efficace. Getting the result you want." },
        { id: "fr-u126l3-laregularite", type: "vocab", front: "la régularité", reading: "laregularite", meaning: "regularity", example: { jp: "La régularité de ses résultats montre un vrai sérieux.", en: "The regularity of his results shows real dedication." }, accept: ["regularity", "the regularity", "consistency", "steadiness"], hint: "From régulier. Being steady and even over time — the opposite of erratic." },
      ],
    },
    {
      id: "fr-u126l4",
      unit: 126,
      lesson: 4,
      title: "Its texture and feel",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a thing behaves: la souplesse, la fluidité, la netteté, la simplicité, la complexité, la densité.",
      items: [
        { id: "fr-u126l4-lasouplesse", type: "vocab", front: "la souplesse", reading: "lasouplesse", meaning: "flexibility", example: { jp: "La souplesse de ces horaires convient bien aux parents.", en: "The flexibility of these hours suits parents well." }, accept: ["flexibility", "the flexibility", "suppleness"], hint: "From souple. Of a body, a material, or a set of rules." },
        { id: "fr-u126l4-lafluidite", type: "vocab", front: "la fluidité", reading: "lafluidite", meaning: "smoothness", example: { jp: "On apprécie la fluidité de la circulation à cette heure.", en: "You appreciate the smoothness of the traffic flow at this hour." }, accept: ["smoothness", "the smoothness", "fluidity", "flow"], hint: "From fluide. When things flow without blockage — traffic, a style, movement." },
        { id: "fr-u126l4-lanettete", type: "vocab", front: "la netteté", reading: "lanettete", meaning: "sharpness", example: { jp: "La netteté de l'image dépend surtout de la lumière.", en: "The sharpness of the image depends mainly on the light." }, accept: ["sharpness", "the sharpness", "clearness", "crispness"], hint: "From net, sharp/clean. Of an image, an outline, an answer." },
        { id: "fr-u126l4-lasimplicite", type: "vocab", front: "la simplicité", reading: "lasimplicite", meaning: "simplicity", example: { jp: "La simplicité de cette recette explique son succès.", en: "The simplicity of this recipe explains its success." }, accept: ["simplicity", "the simplicity"], hint: "From simple. The opposite of la complexité." },
        { id: "fr-u126l4-lacomplexite", type: "vocab", front: "la complexité", reading: "lacomplexite", meaning: "complexity", example: { jp: "La complexité du problème décourage beaucoup de gens.", en: "The complexity of the problem discourages a lot of people." }, accept: ["complexity", "the complexity", "intricacy"], hint: "From complexe. Many parts, hard to grasp at once." },
        { id: "fr-u126l4-ladensite", type: "vocab", front: "la densité", reading: "ladensite", meaning: "density", example: { jp: "La densité de ce texte oblige à le lire deux fois.", en: "The density of this text forces you to read it twice." }, accept: ["density", "the density", "denseness"], hint: "From dense. Of population, of a forest, or of a rich text." },
      ],
    },
  ],
};
