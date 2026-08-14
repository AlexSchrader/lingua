// FR Unit 76 — Grammar 6 — linked and subordinate clauses (slot: grammar-6) — B1
// Grammar has no item type here either: every subordinator is function-word
// vocab whose example sentence carries the pattern (CLAUDE.md), exactly as
// A1 u21/u23/u26 and A2 u43/u44 did.
//
// SCOPE BOUNDARY — the lesson of the A2 merge, applied in advance. In A2 this
// same slot pair (u36 "connecting words" vs u43 "linked clauses") collided on
// eight fronts because both blocks reached for the same connectors and neither
// could see the other. Here block 1 holds u58 opinion / u59 cause-effect /
// u60 comparison, and Alex's scaffold warning steers it explicitly toward
// néanmoins · en revanche · certes · par conséquent · étant donné que · dans la
// mesure où. So this unit takes NONE of the causal or concessive ADVERBS and
// none of that steer list. It takes the SUBJUNCTIVE-TRIGGERING SUBORDINATORS
// and the complex relative pronouns — clause machinery block 1 has no slot for.
//
// The subjunctive is the real content of Lesson 2. It is introduced the way A2
// introduced pour que: as a fixed pairing (this conjunction ⇒ this verb shape),
// with the rule shown in the examples rather than stated as a paradigm.
// Every front checked against the live 1,287 first. Conventions: fr/unit1.js.
export const FR_UNIT76 = {
  id: "fr-u76",
  lang: "fr",
  title: "Un peu de grammaire · 4",
  order: 76,
  stage: "b1",
  lessons: [
    {
      id: "fr-u76l1",
      unit: 76,
      lesson: 1,
      title: "Granting a point",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Concede something and still disagree: bien que ce soit vrai, quoique, tant que, sauf si.",
      items: [
        { id: "fr-u76l1-bienque", type: "vocab", front: "bien que", reading: "bienque", meaning: "although", example: { jp: "Bien que ce soit cher, je pense que ça vaut le prix.", en: "Although it's expensive, I think it's worth the price." }, accept: ["even though", "though", "albeit"], hint: "Takes the subjunctive: bien que ce SOIT, never \"bien que c'est\". This is the commonest subjunctive trigger in French." },
        { id: "fr-u76l1-quoique", type: "vocab", front: "quoique", reading: "quoique", meaning: "even though", example: { jp: "Quoiqu'il soit jeune, il dirige déjà une entreprise.", en: "Even though he's young, he already runs a company." }, accept: ["although", "though"], hint: "Same meaning and same subjunctive as bien que, one degree more literary. One word — quoi que in two words means \"whatever\"." },
        { id: "fr-u76l1-tantque", type: "vocab", front: "tant que", reading: "tantque", meaning: "as long as", example: { jp: "Tant que la sécheresse continue, les agriculteurs ne pourront rien faire.", en: "As long as the drought continues, farmers won't be able to do anything." }, accept: ["so long as", "while", "until"], hint: "Indicative, not subjunctive — tant que is about real time, not doubt." },
        { id: "fr-u76l1-saufsi", type: "vocab", front: "sauf si", reading: "saufsi", meaning: "unless", example: { jp: "Je viendrai demain, sauf si je suis malade.", en: "I'll come tomorrow, unless I'm ill." }, accept: ["except if", "other than if"], hint: "The everyday \"unless\". Its formal cousin à moins que is in the next lesson and takes the subjunctive." },
        { id: "fr-u76l1-aconditionque", type: "vocab", front: "à condition que", reading: "aconditionque", meaning: "provided that", example: { jp: "Tu peux sortir, à condition que tu rentres avant minuit.", en: "You can go out, provided that you're back before midnight." }, accept: ["on condition that", "as long as", "so long as"], hint: "Subjunctive again. With one subject you can shorten it: à condition de rentrer tôt." },
        { id: "fr-u76l1-lefaitque", type: "vocab", front: "le fait que", reading: "lefaitque", meaning: "the fact that", example: { jp: "Le fait que personne n'ait répondu montre bien le problème.", en: "The fact that nobody replied shows the problem clearly." }, accept: ["that fact that", "the point that"], hint: "Turns a whole clause into a noun, so it can be the subject of a sentence. From le fait (Unit 47)." },
      ],
    },
    {
      id: "fr-u76l2",
      unit: 76,
      lesson: 2,
      title: "Clauses that need the subjunctive",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Use the subjunctive triggers: à moins que, pourvu que, jusqu'à ce que, sans que, avant que.",
      items: [
        { id: "fr-u76l2-amoinsque", type: "vocab", front: "à moins que", reading: "amoinsque", meaning: "unless", example: { jp: "Nous partirons à huit heures, à moins qu'il y ait un problème.", en: "We'll leave at eight, unless there's a problem." }, accept: ["except if", "short of"], hint: "The formal twin of sauf si — and unlike it, this one takes the subjunctive." },
        { id: "fr-u76l2-pourvuque", type: "vocab", front: "pourvu que", reading: "pourvuque", meaning: "as long as", example: { jp: "Pourvu que tout se passe bien, nous serons là avant midi.", en: "As long as everything goes well, we'll be there before noon." }, accept: ["provided that", "let's hope", "hopefully"], hint: "On its own it becomes a wish: Pourvu qu'il fasse beau ! = Let's hope it's fine!" },
        { id: "fr-u76l2-jusquacequ", type: "vocab", front: "jusqu'à ce que", reading: "jusquaceque", meaning: "until", example: { jp: "J'ai attendu jusqu'à ce qu'il revienne.", en: "I waited until he came back." }, accept: ["up until", "till"], hint: "jusqu'à (Unit 35) takes a noun; jusqu'à ce que takes a whole clause, in the subjunctive." },
        { id: "fr-u76l2-sansque", type: "vocab", front: "sans que", reading: "sansque", meaning: "without (someone doing)", example: { jp: "Il est parti sans que personne s'en aperçoive.", en: "He left without anyone noticing." }, accept: ["without", "with nobody"], hint: "sans + verb when the subject is the same (sans parler); sans que + subjunctive when it changes." },
        { id: "fr-u76l2-avantque", type: "vocab", front: "avant que", reading: "avantque", meaning: "before (something happens)", example: { jp: "Finis ton travail avant que les autres arrivent.", en: "Finish your work before the others arrive." }, accept: ["before", "prior to"], hint: "Mirror of avant de (Unit 43): avant DE + verb keeps one subject, avant QUE + subjunctive changes it." },
        { id: "fr-u76l2-afinque", type: "vocab", front: "afin que", reading: "afinque", meaning: "so that", example: { jp: "Je répète la règle afin que tout le monde la comprenne.", en: "I'm repeating the rule so that everybody understands it." }, accept: ["in order that", "so as"], hint: "The formal version of pour que (Unit 43) — same subjunctive, same new subject." },
      ],
    },
    {
      id: "fr-u76l3",
      unit: 76,
      lesson: 3,
      title: "Relative pronouns, the long ones",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Attach a clause after a preposition: la raison pour laquelle, auquel, ce dont, là où.",
      items: [
        { id: "fr-u76l3-lequel", type: "vocab", front: "lequel", reading: "lequel", meaning: "which", example: { jp: "C'est le livre dans lequel j'ai trouvé cette histoire.", en: "That's the book in which I found this story." }, accept: ["which one", "the one which", "whom"], hint: "Used after a preposition, where qui and que cannot go. Agrees: lequel, laquelle, lesquels, lesquelles." },
        { id: "fr-u76l3-auquel", type: "vocab", front: "auquel", reading: "auquel", meaning: "to which", example: { jp: "Voilà le problème auquel je pense depuis une semaine.", en: "That's the problem which I've been thinking about for a week." }, accept: ["to whom", "which to"], hint: "à + lequel squashes together: auquel, à laquelle, auxquels." },
        { id: "fr-u76l3-duquel", type: "vocab", front: "duquel", reading: "duquel", meaning: "of which", example: { jp: "C'est la maison à côté de laquelle nous habitions.", en: "That's the house next to which we used to live." }, accept: ["from which", "of whom"], hint: "de + lequel. After a two-word preposition (à côté de, près de) you must use this, not dont." },
        { id: "fr-u76l3-cedont", type: "vocab", front: "ce dont", reading: "cedont", meaning: "what (with de)", example: { jp: "Ce dont j'ai besoin, c'est d'un peu de repos.", en: "What I need is a bit of rest." }, accept: ["the thing that", "that which"], hint: "ce que (Unit 43) for a plain verb, ce dont when the verb needs de — avoir besoin DE, parler DE." },
        { id: "fr-u76l3-ceaquoi", type: "vocab", front: "ce à quoi", reading: "ceaquoi", meaning: "what (with à)", example: { jp: "Ce à quoi je pense, c'est à ma famille.", en: "What I'm thinking about is my family." }, accept: ["the thing to which", "that which"], hint: "The à version of ce dont — penser À, s'attendre À." },
        { id: "fr-u76l3-laou", type: "vocab", front: "là où", reading: "laou", meaning: "where", example: { jp: "Je veux vivre là où il y a de la place et du soleil.", en: "I want to live where there's space and sunshine." }, accept: ["in the place where", "the place where"], hint: "où alone attaches to a named place (la ville où…); là où stands on its own with no noun before it." },
      ],
    },
    {
      id: "fr-u76l4",
      unit: 76,
      lesson: 4,
      title: "Starting from the clause",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Open a sentence with a clause: il est vrai que, il arrive que, ce qui compte, il vaut mieux que.",
      items: [
        { id: "fr-u76l4-ilestvraique", type: "vocab", front: "il est vrai que", reading: "ilestvraique", meaning: "it's true that", example: { jp: "Il est vrai que le prix a augmenté, mais la qualité aussi.", en: "It's true that the price has gone up, but so has the quality." }, accept: ["admittedly", "granted that", "it is true"], hint: "The standard way to concede a point before turning it round with mais." },
        { id: "fr-u76l4-ilarriveque", type: "vocab", front: "il arrive que", reading: "ilarriveque", meaning: "it happens that", example: { jp: "Il arrive que le train soit en retard, mais c'est rare.", en: "It happens that the train is late, but it's rare." }, accept: ["sometimes", "it can happen", "occasionally"], hint: "Subjunctive after it, because it's about possibility, not fact. il m'arrive de = I sometimes." },
        { id: "fr-u76l4-ilvautmieuxque", type: "vocab", front: "il vaut mieux que", reading: "ilvautmieuxque", meaning: "it's better that", example: { jp: "Il vaut mieux que tu partes maintenant, sinon tu vas rater ton train.", en: "It's better that you leave now, otherwise you'll miss your train." }, accept: ["better that", "we'd rather", "it is best that"], hint: "il vaut mieux + verb (Unit 44) has one subject; add que and a new subject, and the verb goes subjunctive." },
        { id: "fr-u76l4-cequicompte", type: "vocab", front: "ce qui compte", reading: "cequicompte", meaning: "what matters", example: { jp: "Ce qui compte, c'est la santé ; le reste vient après.", en: "What matters is health; the rest comes afterwards." }, accept: ["the thing that matters", "what counts"], hint: "A ready-made opening built on ce qui (Unit 43). Note the c'est that answers it." },
        { id: "fr-u76l4-desorteque", type: "vocab", front: "de sorte que", reading: "desorteque", meaning: "so that", example: { jp: "Il a tout expliqué de sorte que personne n'ait de question.", en: "He explained everything so that nobody would have a question." }, accept: ["in such a way that", "so as", "with the result that"], hint: "Subjunctive for a purpose, indicative for a result — the same sentence means two things depending on the mood." },
        { id: "fr-u76l4-alorsmeme", type: "vocab", front: "alors même que", reading: "alorsmemeque", meaning: "even though", example: { jp: "Elle a refusé, alors même qu'elle avait tout à gagner.", en: "She refused, even though she had everything to gain." }, accept: ["even as", "at the very time when", "although"], hint: "Stronger than même si (Unit 43): it stresses that the two things are true at the same moment." },
      ],
    },
  ],
};
