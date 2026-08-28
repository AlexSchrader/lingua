// FR Unit 97 — Les systèmes et l'abstraction (slot: systems and abstraction) — B2
// B1 taught le système, le réseau, le cadre, le concept, la notion (u65). B2 goes
// up: the anatomy of a system (la structure, le mécanisme, le composant,
// l'architecture), the abstract/concrete axis (abstrait, concret, le modèle, le
// paradigme), complexity and links (interdépendant, l'interaction, imbriqué) and
// how a system holds together (régir, structurer, la cohérence, sous-tendre).
// Fronts checked against the 2,168 live fr fronts. Conventions: fr/unit1.js.
export const FR_UNIT97 = {
  id: "fr-u97",
  lang: "fr",
  title: "Les systèmes et l'abstraction",
  order: 97,
  stage: "b2",
  lessons: [
    {
      id: "fr-u97l1",
      unit: 97,
      lesson: 1,
      title: "The anatomy of a system",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how something is built: la structure, le mécanisme, un composant, l'architecture.",
      items: [
        { id: "fr-u97l1-lastructure", type: "vocab", front: "la structure", reading: "lastructure", meaning: "the structure", example: { jp: "La structure de l'entreprise a beaucoup changé.", en: "The structure of the company has changed a lot." }, accept: ["structure", "the framework", "the build"], hint: "The structure of a thing, a text, or an organisation — from structurer." },
        { id: "fr-u97l1-lemecanisme", type: "vocab", front: "le mécanisme", reading: "lemecanisme", meaning: "the mechanism", example: { jp: "Personne ne comprend vraiment ce mécanisme.", en: "Nobody really understands this mechanism." }, accept: ["mechanism", "the workings", "the process"], hint: "The inner workings — le mécanisme d'une horloge, or of a policy." },
        { id: "fr-u97l1-lecomposant", type: "vocab", front: "le composant", reading: "lecomposant", meaning: "the component", example: { jp: "Ce composant est petit, mais il est essentiel au système.", en: "This component is small, but it's essential to the system." }, accept: ["component", "the part"], hint: "A component / part — les composants d'un ordinateur. From composer." },
        { id: "fr-u97l1-lelement", type: "vocab", front: "l'élément", reading: "lelement", meaning: "the element", example: { jp: "L'eau est un élément essentiel à la vie.", en: "Water is an essential element to life." }, accept: ["element", "the factor", "the part"], hint: "An element or part of a whole — un élément clé. Also a chemical element." },
        { id: "fr-u97l1-larchitecture", type: "vocab", front: "l'architecture", reading: "larchitecture", meaning: "the architecture", example: { jp: "Cette vieille ville a une très belle architecture.", en: "This old town has very beautiful architecture." }, accept: ["architecture", "the design"], hint: "Architecture — of buildings, or of a system: l'architecture d'un logiciel." },
        { id: "fr-u97l1-lossature", type: "vocab", front: "l'ossature", reading: "lossature", meaning: "the framework", example: { jp: "Ces quelques idées forment l'ossature du projet.", en: "These few ideas form the framework of the project." }, accept: ["framework", "the skeleton", "the backbone"], hint: "The framework / skeleton — l'ossature d'un texte. From os, bone." },
      ],
    },
    {
      id: "fr-u97l2",
      unit: 97,
      lesson: 2,
      title: "Abstract and concrete",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Move between the abstract and the concrete: abstrait, concret, un modèle, un paradigme.",
      items: [
        { id: "fr-u97l2-abstrait", type: "vocab", front: "abstrait", reading: "abstrait", meaning: "abstract", example: { jp: "Cette idée reste trop abstraite pour moi.", en: "This idea stays too abstract for me." }, accept: ["abstract"], hint: "Abstract, not concrete — l'art abstrait. The opposite is concret." },
        { id: "fr-u97l2-concret", type: "vocab", front: "concret", reading: "concret", meaning: "concrete", example: { jp: "Il préfère le concret aux idées abstraites.", en: "He prefers the concrete to abstract ideas." }, accept: ["concrete", "tangible", "real"], hint: "Concrete, tangible, real — un exemple concret. The opposite is abstrait." },
        { id: "fr-u97l2-lemodele", type: "vocab", front: "le modèle", reading: "lemodele", meaning: "the model", example: { jp: "Son travail est un vrai modèle pour les jeunes.", en: "His work is a real model for young people." }, accept: ["model", "the example", "the pattern"], hint: "A model, pattern, or role model — un modèle à suivre. Also a fashion model." },
        { id: "fr-u97l2-leparadigme", type: "vocab", front: "le paradigme", reading: "leparadigme", meaning: "the paradigm", example: { jp: "Ce nouveau paradigme change beaucoup de choses.", en: "This new paradigm changes a lot of things." }, accept: ["paradigm", "the framework", "the model"], hint: "A whole way of seeing a field — un changement de paradigme." },
        { id: "fr-u97l2-conceptuel", type: "vocab", front: "conceptuel", reading: "conceptuel", meaning: "conceptual", example: { jp: "Son travail reste très conceptuel et difficile à suivre.", en: "His work stays very conceptual and hard to follow." }, accept: ["conceptual"], hint: "Conceptual, of ideas rather than things — l'art conceptuel." },
        { id: "fr-u97l2-global", type: "vocab", front: "global", reading: "global", meaning: "overall", example: { jp: "Il faut voir le problème de façon globale.", en: "You have to see the problem in an overall way." }, accept: ["overall", "global", "comprehensive"], hint: "Overall, taking the whole into account — une vision globale. Also 'global' (worldwide)." },
      ],
    },
    {
      id: "fr-u97l3",
      unit: 97,
      lesson: 3,
      title: "Complexity and links",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how parts connect: interdépendant, une interaction, imbriqué, un rouage.",
      items: [
        { id: "fr-u97l3-interdependant", type: "vocab", front: "interdépendant", reading: "interdependant", meaning: "interdependent", example: { jp: "Dans une économie, tout est interdépendant.", en: "In an economy, everything is interdependent." }, accept: ["interdependent", "interconnected"], hint: "Mutually dependent — des marchés interdépendants. From dépendre." },
        { id: "fr-u97l3-linteraction", type: "vocab", front: "l'interaction", reading: "linteraction", meaning: "the interaction", example: { jp: "L'interaction entre les deux groupes est constante.", en: "The interaction between the two groups is constant." }, accept: ["interaction"], hint: "Two things acting on each other — l'interaction sociale. From agir." },
        { id: "fr-u97l3-hierarchique", type: "vocab", front: "hiérarchique", reading: "hierarchique", meaning: "hierarchical", example: { jp: "Cette entreprise a une organisation très hiérarchique.", en: "This company has a very hierarchical organisation." }, accept: ["hierarchical"], hint: "Hierarchical, in ranked levels — un système hiérarchique. From la hiérarchie." },
        { id: "fr-u97l3-imbrique", type: "vocab", front: "imbriqué", reading: "imbrique", meaning: "intertwined", example: { jp: "Ces deux problèmes sont trop imbriqués pour être séparés.", en: "These two problems are too intertwined to be separated." }, accept: ["intertwined", "interlocked", "nested"], hint: "Fitted or tangled into one another — des questions imbriquées." },
        { id: "fr-u97l3-lerouage", type: "vocab", front: "le rouage", reading: "lerouage", meaning: "the cog", example: { jp: "Chacun n'est qu'un petit rouage dans la machine.", en: "Each person is just a small cog in the machine." }, accept: ["cog", "the gear", "the wheel"], hint: "A cog / gear — un rouage de l'État. Literally a wheel in a machine." },
        { id: "fr-u97l3-latrame", type: "vocab", front: "la trame", reading: "latrame", meaning: "the underlying pattern", example: { jp: "La même trame revient dans toutes ses histoires.", en: "The same underlying pattern comes back in all his stories." }, accept: ["the underlying pattern", "the framework", "the weave", "the storyline"], hint: "The weave / underlying thread — la trame d'un récit = the storyline." },
      ],
    },
    {
      id: "fr-u97l4",
      unit: 97,
      lesson: 4,
      title: "Holding it together",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what orders a system: régir, structurer, la cohérence, sous-tendre.",
      items: [
        { id: "fr-u97l4-regir", type: "vocab", front: "régir", reading: "regir", meaning: "to govern", example: { jp: "Des règles précises régissent ce jeu.", en: "Precise rules govern this game." }, accept: ["to govern", "to rule", "to control"], hint: "To govern / determine — les lois qui régissent la société. Formal." },
        { id: "fr-u97l4-structurer", type: "vocab", front: "structurer", reading: "structurer", meaning: "to structure", example: { jp: "Il faut mieux structurer ce long texte.", en: "This long text needs to be better structured." }, accept: ["to structure", "to organise"], hint: "To organise into a structure — structurer ses idées, un texte bien structuré." },
        { id: "fr-u97l4-lacoherence", type: "vocab", front: "la cohérence", reading: "lacoherence", meaning: "the coherence", example: { jp: "Il manque de la cohérence entre ses idées.", en: "There's a lack of coherence between his ideas." }, accept: ["coherence", "the consistency"], hint: "Coherence, hanging-together — un manque de cohérence. From cohérent." },
        { id: "fr-u97l4-lagencement", type: "vocab", front: "l'agencement", reading: "lagencement", meaning: "the arrangement", example: { jp: "L'agencement des pièces rend la maison agréable.", en: "The arrangement of the rooms makes the house pleasant." }, accept: ["arrangement", "the layout", "the organisation"], hint: "The way parts are arranged / laid out — l'agencement d'un magasin. From agencer." },
        { id: "fr-u97l4-articuler", type: "vocab", front: "articuler", reading: "articuler", meaning: "to link together", example: { jp: "Il faut mieux articuler ces deux idées.", en: "These two ideas need to be linked together better." }, accept: ["to link together", "to connect", "to articulate"], hint: "To connect ideas / parts logically — articuler un raisonnement. Also to speak clearly." },
        { id: "fr-u97l4-soustendre", type: "vocab", front: "sous-tendre", reading: "soustendre", meaning: "to underlie", example: { jp: "La même idée sous-tend tout son travail.", en: "The same idea underlies all his work." }, accept: ["to underlie", "to underpin", "to be behind"], hint: "To lie beneath and support — l'idée qui sous-tend un projet." },
      ],
    },
  ],
};
