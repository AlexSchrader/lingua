// FR Unit 78 — Grammar 8 — nuance, evidentiality, nominalization (slot: grammar-8) — B1
// The last of the three grammar units, and the most abstract. Its real subject is
// NOMINALIZATION: turning a verb into a noun (augmenter → l'augmentation) is what
// separates spoken French from written French, and a learner who cannot do it can
// speak but cannot read a report.
//
// SCOPE BOUNDARY: block 1's Unit 61 is "hedging and uncertainty", and Alex's
// scaffold warning already records that A2 owns peut-être · sans doute ·
// probablement · sûrement · apparemment · sembler · douter · hésiter, steering
// block 1 to il se peut que · avoir tendance à · il semblerait · quant à. This
// unit therefore takes NO hedges. Evidentiality (u77 l4) is a different job —
// naming where knowledge came from, not softening a claim — and the nuance items
// here are DEGREE, not doubt. Every front checked against the live corpus.
// Conventions: see fr/unit1.js.
export const FR_UNIT78 = {
  id: "fr-u78",
  lang: "fr",
  title: "Un peu de grammaire · 6",
  order: 78,
  stage: "b1",
  lessons: [
    {
      id: "fr-u78l1",
      unit: 78,
      lesson: 1,
      title: "Turning a verb into a noun",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read written French: l'augmentation, la diminution, le développement, la disparition.",
      items: [
        { id: "fr-u78l1-laugmentation", type: "vocab", front: "l'augmentation", reading: "laugmentation", meaning: "the increase", example: { jp: "L'augmentation des prix inquiète les familles, surtout les plus pauvres.", en: "The increase in prices worries families, especially the poorest." }, accept: ["increase", "the rise", "growth"], hint: "From augmenter. A newspaper writes l'augmentation des prix where speech says les prix augmentent." },
        { id: "fr-u78l1-ladiminution", type: "vocab", front: "la diminution", reading: "ladiminution", meaning: "the decrease", example: { jp: "On observe une diminution du chômage, bien que ce soit lent.", en: "A decrease in unemployment can be seen, although it's slow." }, accept: ["decrease", "the fall", "reduction"] },
        { id: "fr-u78l1-ledeveloppement", type: "vocab", front: "le développement", reading: "ledeveloppement", meaning: "the development", example: { jp: "Le développement de cette région dépend du tourisme, ce qui est risqué.", en: "The development of this region depends on tourism, which is risky." }, accept: ["development", "the growth", "expansion"], hint: "le développement durable = sustainable development, the phrase you'll meet everywhere." },
        { id: "fr-u78l1-ladisparition", type: "vocab", front: "la disparition", reading: "ladisparition", meaning: "the disappearance", example: { jp: "La disparition de ces espèces est due à la destruction de leur habitat.", en: "The disappearance of these species is due to the destruction of their habitat." }, accept: ["disappearance", "the loss", "extinction"], hint: "From disparaître (Unit 72). The pattern -aître → -ition is regular enough to guess with." },
        { id: "fr-u78l1-laconstruction", type: "vocab", front: "la construction", reading: "laconstruction", meaning: "the construction", example: { jp: "La construction du pont a duré quatre ans, et elle a coûté très cher.", en: "The construction of the bridge took four years, and it cost a great deal." }, accept: ["construction", "the building"] },
        { id: "fr-u78l1-lamiseenplace", type: "vocab", front: "la mise en place", reading: "lamiseenplace", meaning: "the introduction", example: { jp: "La mise en place du tri a pris six mois dans notre immeuble.", en: "The introduction of waste sorting took six months in our building." }, accept: ["setting up", "the implementation", "rollout"], hint: "Administrative French loves this one — it means putting a system in place." },
      ],
    },
    {
      id: "fr-u78l2",
      unit: 78,
      lesson: 2,
      title: "Naming the abstract",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle ideas as things: une notion, un concept, un aspect, un point de vue.",
      items: [
        { id: "fr-u78l2-lanotion", type: "vocab", front: "la notion", reading: "lanotion", meaning: "the notion", example: { jp: "La notion de liberté n'est pas la même partout, ce qui rend le débat difficile.", en: "The notion of freedom isn't the same everywhere, which makes the debate difficult." }, accept: ["notion", "the idea", "concept"], hint: "avoir des notions de = to have a basic grounding in something." },
        { id: "fr-u78l2-leconcept", type: "vocab", front: "le concept", reading: "leconcept", meaning: "the concept", example: { jp: "Le concept est simple, mais la mise en place est compliquée.", en: "The concept is simple, but the implementation is complicated." }, accept: ["concept", "the idea"] },
        { id: "fr-u78l2-laspect", type: "vocab", front: "l'aspect", reading: "laspect", meaning: "the aspect", example: { jp: "Cet aspect du problème n'a jamais été discuté, et pourtant il est central.", en: "This aspect of the problem has never been discussed, and yet it's central." }, accept: ["aspect", "the side", "appearance"], hint: "Also physical appearance: la maison a un drôle d'aspect." },
        { id: "fr-u78l2-lepointdevue", type: "vocab", front: "le point de vue", reading: "lepointdevue", meaning: "the point of view", example: { jp: "De mon point de vue, la solution est mauvaise, mais je peux me tromper.", en: "From my point of view, the solution is a bad one, but I may be wrong." }, accept: ["viewpoint", "the perspective", "standpoint"] },
        { id: "fr-u78l2-lecadre", type: "vocab", front: "le cadre", reading: "lecadre", meaning: "the framework", example: { jp: "Dans le cadre de ce projet, nous avons visité plusieurs entreprises.", en: "As part of this project, we visited several companies." }, accept: ["framework", "the context", "frame", "setting"], hint: "dans le cadre de = as part of. Also a picture frame, and a manager." },
        { id: "fr-u78l2-ledomaine", type: "vocab", front: "le domaine", reading: "ledomaine", meaning: "the field", example: { jp: "Elle travaille dans le domaine de la santé depuis quinze ans.", en: "She has worked in the field of health for fifteen years." }, accept: ["field", "the area", "domain", "sector"] },
      ],
    },
    {
      id: "fr-u78l3",
      unit: 78,
      lesson: 3,
      title: "Almost, roughly, even",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Grade a statement without hedging it: voire, en gros, dans l'ensemble, en quelque sorte.",
      items: [
        { id: "fr-u78l3-voire", type: "vocab", front: "voire", reading: "voire", meaning: "or even", example: { jp: "Le trajet prend deux heures, voire trois quand il pleut.", en: "The journey takes two hours, or even three when it rains." }, accept: ["even", "indeed", "not to say"], hint: "Adds a stronger second option. Careful: nothing to do with voir — it's never \"voir\" with an e." },
        { id: "fr-u78l3-engros", type: "vocab", front: "en gros", reading: "engros", meaning: "roughly", example: { jp: "En gros, il s'agit de dépenser moins et d'épargner plus.", en: "Roughly, it's about spending less and saving more." }, accept: ["broadly", "basically", "in short"], hint: "Also \"wholesale\" in commerce: acheter en gros." },
        { id: "fr-u78l3-danslensemble", type: "vocab", front: "dans l'ensemble", reading: "danslensemble", meaning: "on the whole", example: { jp: "Dans l'ensemble, les spectateurs ont aimé le spectacle, sauf la fin.", en: "On the whole, the audience liked the show, except the ending." }, accept: ["overall", "generally", "by and large"] },
        { id: "fr-u78l3-enquelquesorte", type: "vocab", front: "en quelque sorte", reading: "enquelquesorte", meaning: "in a way", example: { jp: "C'est en quelque sorte le même problème, mais à une autre échelle.", en: "It's the same problem in a way, but on another scale." }, accept: ["sort of", "so to speak", "as it were"] },
        { id: "fr-u78l3-ycompris", type: "vocab", front: "y compris", reading: "ycompris", meaning: "including", example: { jp: "Tout le monde était là, y compris les voisins que personne n'avait invités.", en: "Everyone was there, including the neighbours nobody had invited." }, accept: ["inclusive of", "even", "with"], hint: "Its opposite is sauf (Unit 76's sauf si) — y compris adds, sauf takes away." },
        { id: "fr-u78l3-avraidire", type: "vocab", front: "à vrai dire", reading: "avraidire", meaning: "to tell the truth", example: { jp: "À vrai dire, je n'ai pas lu le livre, j'ai seulement vu le film.", en: "To tell the truth, I didn't read the book, I only saw the film." }, accept: ["actually", "frankly", "truth be told"] },
      ],
    },
    {
      id: "fr-u78l4",
      unit: 78,
      lesson: 4,
      title: "The shape of an argument",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Structure a written point: d'une part, l'objectif, la démarche, la méthode.",
      items: [
        { id: "fr-u78l4-dunepart", type: "vocab", front: "d'une part", reading: "dunepart", meaning: "on the one hand", example: { jp: "D'une part le prix est bas, d'autre part la qualité n'est pas terrible.", en: "On the one hand the price is low; on the other, the quality isn't great." }, accept: ["for one thing", "firstly", "on one side"], hint: "Almost always followed by d'autre part — the pair carries a two-sided argument." },
        { id: "fr-u78l4-dautrepart", type: "vocab", front: "d'autre part", reading: "dautrepart", meaning: "on the other hand", example: { jp: "D'autre part, il faut penser aux gens qui habitent là depuis toujours.", en: "On the other hand, you have to think about the people who have always lived there." }, accept: ["moreover", "besides", "for another thing"] },
        { id: "fr-u78l4-lobjectif", type: "vocab", front: "l'objectif", reading: "lobjectif", meaning: "the aim", example: { jp: "L'objectif est clair, mais les moyens manquent.", en: "The aim is clear, but the means are lacking." }, accept: ["objective", "the goal", "target"], hint: "Also a camera lens — un objectif." },
        { id: "fr-u78l4-lamethode", type: "vocab", front: "la méthode", reading: "lamethode", meaning: "the method", example: { jp: "Sa méthode est lente, pourtant elle donne de bons résultats.", en: "His method is slow, yet it gives good results." }, accept: ["method", "the approach", "way"] },
        { id: "fr-u78l4-lademarche", type: "vocab", front: "la démarche", reading: "lademarche", meaning: "the approach", example: { jp: "Cette démarche demande du temps, mais elle évite beaucoup de problèmes.", en: "This approach takes time, but it avoids a lot of problems." }, accept: ["approach", "the process", "step", "procedure"], hint: "Also the administrative steps you take: faire les démarches. And someone's walk." },
        { id: "fr-u78l4-laprocedure", type: "vocab", front: "la procédure", reading: "laprocedure", meaning: "the procedure", example: { jp: "La procédure est longue, si bien que peu de gens vont jusqu'au bout.", en: "The procedure is long, so few people see it through." }, accept: ["procedure", "the process", "proceedings"] },
      ],
    },
  ],
};
