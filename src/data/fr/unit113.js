// FR Unit 113 — La condition et l'hypothèse (slot: grammar-9) — B2
// B1 already taught the everyday conditional layer: si-clauses (si + present/
// imparfait/plus-que-parfait), and the SUBJUNCTIVE connectives bien que / quoique /
// à condition que / à moins que / pourvu que / jusqu'à ce que / sans que / avant que /
// afin que. This B2 unit climbs one register above that: the formal, written and
// rhetorical machinery of hypothesis and counterfactual — how an educated native
// FRAMES a supposition (quand bien même, à supposer que, dans l'hypothèse où),
// carves out a PROVISION or exception (sous réserve de, à défaut de, quitte à),
// spells out the CONSEQUENCE of a condition (auquel cas, faute de quoi, le cas
// échéant), and takes a COUNTERFACTUAL stance (n'était, à ceci près que, pour autant).
// Grammar-as-vocab: each front is a connective/expression and its example CARRIES the
// mood it governs — subjunctive after à supposer que / en admettant que / si tant est
// que / pour peu que / quitte à ce que; conditional after quand bien même / dans
// l'hypothèse où; infinitive after à condition de / à moins de / sauf à / quitte à /
// au risque de; future after sans quoi / faute de quoi / auquel cas.
// None of the nine B1 subjunctive connectives are reused.
// Every front checked against the 2,168 live fr fronts + block1 (u95–107): no collisions.
export const FR_UNIT113 = {
  id: "fr-u113",
  lang: "fr",
  title: "La condition et l'hypothèse",
  order: 113,
  stage: "b2",
  lessons: [
    {
      id: "fr-u113l1",
      unit: 113,
      lesson: 1,
      title: "Framing a hypothesis",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Float a hypothesis for the sake of argument and flag how much weight you actually give it.",
      items: [
        { id: "fr-u113l1-quandbienmeme", type: "vocab", front: "quand bien même", reading: "quandbienmeme", meaning: "even if / even though", example: { jp: "Quand bien même il aurait raison, personne ne le croirait.", en: "Even if he were right, no one would believe him." }, drill: { jp: "Quand bien même tu pars je reste", en: "Even if you leave I am staying" }, accept: ["even if", "even though", "even if it were true"], hint: "+ conditional (aurait, croirait); literary concessive — the outcome holds 'even were it so'." },
        { id: "fr-u113l1-asupposerque", type: "vocab", front: "à supposer que", reading: "asupposerque", meaning: "supposing that / assuming that", example: { jp: "À supposer que cette loi soit votée, son application poserait problème.", en: "Supposing this law were passed, applying it would be a problem." }, accept: ["supposing that", "assuming that", "even supposing that"], hint: "+ subjunctive (soit); from supposer — opens a hypothesis for argument's sake." },
        { id: "fr-u113l1-enadmettantque", type: "vocab", front: "en admettant que", reading: "enadmettantque", meaning: "even assuming that / granting that", example: { jp: "En admettant que ce résultat soit exact, il ne prouve rien.", en: "Even assuming this result is accurate, it proves nothing." }, accept: ["even assuming that", "granting that", "assuming that"], hint: "+ subjunctive (soit); from admettre — concedes a point only for argument, not belief." },
        { id: "fr-u113l1-hypotheseou", type: "vocab", front: "dans l'hypothèse où", reading: "danslhypotheseou", meaning: "in the event that / should it happen that", example: { jp: "Dans l'hypothèse où le projet échouerait, il faudrait tout recommencer.", en: "In the event the project failed, we would have to start all over." }, accept: ["in the event that", "should it happen that", "in the case that", "in the hypothesis that"], hint: "+ conditional (échouerait, faudrait); formal; from l'hypothèse — projects a possible scenario." },
        { id: "fr-u113l1-sitantestque", type: "vocab", front: "si tant est que", reading: "sitantestque", meaning: "if indeed / assuming it's even true that", example: { jp: "Il finira le travail avant ce soir, si tant est que cela soit possible.", en: "He'll finish the work before tonight, if that's even possible." }, accept: ["if indeed", "assuming it is even true that", "if it is even the case that", "provided that is even true"], hint: "+ subjunctive (soit); casts doubt on whether the condition even holds — 'if that's even so'." },
        { id: "fr-u113l1-pourpeuque", type: "vocab", front: "pour peu que", reading: "pourpeuque", meaning: "if only / as long as (even a little)", example: { jp: "Pour peu qu'on lui laisse une chance, il trouvera la solution.", en: "Given even the slightest chance, he'll find the solution." }, drill: { jp: "Pour peu que tu restes ici", en: "As long as you stay here" }, accept: ["if only", "provided that", "as long as", "if only slightly"], hint: "+ subjunctive (laisse); a minimal condition — 'it takes only that much'." },
      ],
    },
    {
      id: "fr-u113l2",
      unit: 113,
      lesson: 2,
      title: "Provision and exception",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "State the single condition — or the one exception — under which a claim holds.",
      items: [
        { id: "fr-u113l2-aconditionde", type: "vocab", front: "à condition de", reading: "aconditionde", meaning: "provided / on condition of", example: { jp: "Tu réussiras, à condition de travailler chaque jour.", en: "You'll succeed, provided you work every day." }, accept: ["provided", "on condition of", "as long as", "provided that"], hint: "+ infinitive (same subject); cf. à condition que + subjunctive taught at B1." },
        { id: "fr-u113l2-amoinsde", type: "vocab", front: "à moins de", reading: "amoinsde", meaning: "unless / short of", example: { jp: "Nous ne réussirons pas, à moins de changer de méthode.", en: "We won't succeed unless we change our approach." }, accept: ["unless", "short of", "barring"], hint: "+ infinitive or noun; cf. à moins que + subjunctive taught at B1." },
        { id: "fr-u113l2-sousreservede", type: "vocab", front: "sous réserve de", reading: "sousreservede", meaning: "subject to / pending", example: { jp: "Le projet est accepté, sous réserve de quelques changements.", en: "The project is approved, subject to a few changes." }, accept: ["subject to", "pending", "provided there is", "conditional upon"], hint: "formal; + noun or infinitive; approval that still depends on something." },
        { id: "fr-u113l2-adefautde", type: "vocab", front: "à défaut de", reading: "adefautde", meaning: "for lack of / in the absence of", example: { jp: "À défaut de preuves solides, on ne peut rien affirmer.", en: "For lack of solid evidence, one can assert nothing." }, accept: ["for lack of", "in the absence of", "failing", "for want of"], hint: "+ noun/infinitive; from le défaut — here it means 'lack', not 'flaw'." },
        { id: "fr-u113l2-saufa", type: "vocab", front: "sauf à", reading: "saufa", meaning: "unless one is prepared to / at the risk of", example: { jp: "On ne peut pas continuer ainsi, sauf à tout perdre.", en: "We can't go on like this, unless we're prepared to lose everything." }, accept: ["unless one is prepared to", "at the risk of", "short of"], hint: "formal/literary; + infinitive; 'unless you're willing to...'." },
        { id: "fr-u113l2-quittea", type: "vocab", front: "quitte à", reading: "quittea", meaning: "even if it means / at the risk of", example: { jp: "Je dirai ce que je pense, quitte à perdre quelques amis.", en: "I'll say what I think, even if it means losing a few friends." }, accept: ["even if it means", "at the risk of", "even at the cost of"], hint: "+ infinitive (same subject); knowingly accepts a downside to reach the goal." },
      ],
    },
    {
      id: "fr-u113l3",
      unit: 113,
      lesson: 3,
      title: "The consequence of a condition",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Spell out, in a formal register, what follows once a condition is (or isn't) met.",
      items: [
        { id: "fr-u113l3-auquelcas", type: "vocab", front: "auquel cas", reading: "auquelcas", meaning: "in which case", example: { jp: "Le projet peut échouer, auquel cas il faudra tout recommencer.", en: "The project may fail, in which case we'll have to start over." }, accept: ["in which case", "and in that case"], hint: "links back to the prior clause: 'and if that happens, then...'." },
        { id: "fr-u113l3-sansquoi", type: "vocab", front: "sans quoi", reading: "sansquoi", meaning: "otherwise / or else", example: { jp: "Partons maintenant, sans quoi nous serons en retard.", en: "Let's leave now, otherwise we'll be late." }, accept: ["otherwise", "or else", "failing which"], hint: "= sinon, more formal; states what happens if you don't act." },
        { id: "fr-u113l3-fautedequoi", type: "vocab", front: "faute de quoi", reading: "fautedequoi", meaning: "failing which / otherwise", example: { jp: "Il faut remplir le dossier avant lundi, faute de quoi il sera refusé.", en: "The file must be completed by Monday, failing which it will be rejected." }, accept: ["failing which", "otherwise", "or else"], hint: "formal/administrative; = sinon; the consequence of not complying." },
        { id: "fr-u113l3-moyennantquoi", type: "vocab", front: "moyennant quoi", reading: "moyennantquoi", meaning: "in return for which / whereby", example: { jp: "Il a accepté d'aider, moyennant quoi sa dette a été réduite.", en: "He agreed to help, in return for which his debt was reduced." }, drill: { jp: "Il a accepté moyennant quoi sa dette baisse", en: "He agreed in return for which his debt goes down" }, accept: ["in return for which", "whereby", "in exchange for which"], hint: "formal; names what was obtained in exchange for the first clause." },
        { id: "fr-u113l3-lecasecheant", type: "vocab", front: "le cas échéant", reading: "lecasecheant", meaning: "if necessary / should the case arise", example: { jp: "Nous garderons ce plan et, le cas échéant, changerons de méthode.", en: "We'll keep this plan and, if necessary, change our approach." }, drill: { jp: "Nous changerons de méthode le cas échéant", en: "We will change method if necessary" }, accept: ["if necessary", "should the occasion arise", "where applicable", "if need be"], hint: "fixed formal phrase; = si besoin; drops in where you'd write 'if applicable'." },
        { id: "fr-u113l3-deslorsque", type: "vocab", front: "dès lors que", reading: "deslorsque", meaning: "once / given that / from the moment that", example: { jp: "Dès lors que les faits sont connus, la décision devient simple.", en: "Once the facts are known, the decision becomes simple." }, accept: ["once", "given that", "from the moment that", "as soon as"], hint: "+ indicative; causal-conditional — 'given that it's now the case'." },
      ],
    },
    {
      id: "fr-u113l4",
      unit: 113,
      lesson: 4,
      title: "Counterfactual and stance",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Concede a single caveat, or accept a downside, without giving up your position.",
      items: [
        { id: "fr-u113l4-netait", type: "vocab", front: "n'était", reading: "netait", meaning: "were it not for / if it weren't for", example: { jp: "N'était la pluie, nous aurions pu sortir.", en: "Were it not for the rain, we could have gone out." }, accept: ["were it not for", "if it weren't for", "but for"], hint: "literary; inverted counterfactual = s'il n'y avait pas; the verb fronts the clause." },
        { id: "fr-u113l4-acecipresque", type: "vocab", front: "à ceci près que", reading: "acecipresque", meaning: "except that / with the one difference that", example: { jp: "Le plan est bon, à ceci près qu'il coûte trop cher.", en: "The plan is good, except that it costs too much." }, accept: ["except that", "with the difference that", "save that"], hint: "restrictive; introduces the single reservation to what you just said." },
        { id: "fr-u113l4-quitteaceque", type: "vocab", front: "quitte à ce que", reading: "quitteaceque", meaning: "even if it means (that) / at the risk that", example: { jp: "Je dirai la vérité, quitte à ce que le patron soit en colère.", en: "I'll tell the truth, even if it means the boss gets angry." }, accept: ["even if it means that", "at the risk that", "even if that means"], hint: "+ subjunctive (soit); the different-subject form of quitte à." },
        { id: "fr-u113l4-pourautant", type: "vocab", front: "pour autant", reading: "pourautant", meaning: "for all that / nonetheless / even so", example: { jp: "Il a beaucoup travaillé; il n'a pas réussi pour autant.", en: "He worked hard; he didn't succeed for all that." }, accept: ["for all that", "nonetheless", "even so", "yet"], hint: "usually negative — 'not for all that'; concedes the first clause doesn't guarantee the second." },
        { id: "fr-u113l4-encasde", type: "vocab", front: "en cas de", reading: "encasde", meaning: "in case of / in the event of", example: { jp: "En cas de problème, appelez le responsable.", en: "In case of a problem, call the person in charge." }, accept: ["in case of", "in the event of"], hint: "+ noun; fixed; from le cas — 'should X occur'." },
        { id: "fr-u113l4-aurisquede", type: "vocab", front: "au risque de", reading: "aurisquede", meaning: "at the risk of", example: { jp: "Il a dit ce qu'il pensait, au risque de perdre son poste.", en: "He said what he thought, at the risk of losing his job." }, accept: ["at the risk of", "even at the risk of"], hint: "+ infinitive; from le risque — accepts a possible bad outcome." },
      ],
    },
  ],
};
