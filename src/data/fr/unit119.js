// FR Unit 119 — Coverage 2 (B2): evaluative and abstract adjectives.
// The precise adjectives an educated speaker uses to qualify and weigh: evident
// vs hidden (patent, manifeste / latent, sous-jacent), harmful vs beneficial
// (délétère / salutaire), and matters of degree (prépondérant, dérisoire,
// disproportionné). One register above the everyday adjectives of A1-B1 (clair,
// caché, grave, petit). Each front is the masculine singular; examples inflect
// for agreement. Every front checked against the 2,168 live fr fronts + block1.
// Conventions: see fr/unit1.js.
export const FR_UNIT119 = {
  id: "fr-u119",
  lang: "fr",
  title: "Adjectifs de l'appréciation",
  order: 119,
  stage: "b2",
  lessons: [
    {
      id: "fr-u119l1",
      unit: 119,
      lesson: 1,
      title: "Clear and evident",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that something is obvious or undeniable in a precise, formal way.",
      items: [
        { id: "fr-u119l1-patent", type: "vocab", front: "patent", reading: "patent", meaning: "obvious", example: { jp: "L'échec de la méthode est patent, si bien que personne ne le nie plus.", en: "The failure of the method is obvious, so no one denies it any more." }, accept: ["obvious", "patent", "blatant", "evident"], hint: "Obvious and undeniable, of a fault or failure: une injustice patente." },
        { id: "fr-u119l1-manifeste", type: "vocab", front: "manifeste", reading: "manifeste", meaning: "manifest", example: { jp: "Sa mauvaise foi est manifeste, alors même qu'il prétend le contraire.", en: "His bad faith is manifest, even though he claims otherwise." }, accept: ["manifest", "obvious", "clear", "evident"], hint: "Plainly visible to all: une erreur manifeste. As a noun, un manifeste is a manifesto." },
        { id: "fr-u119l1-indeniable", type: "vocab", front: "indéniable", reading: "indeniable", meaning: "undeniable", example: { jp: "Son talent est indéniable, mais son caractère pose problème.", en: "His talent is undeniable, but his character is a problem." }, accept: ["undeniable", "indisputable", "unquestionable"], hint: "That cannot be denied. From nier (to deny) with in- + -able." },
        { id: "fr-u119l1-flagrant", type: "vocab", front: "flagrant", reading: "flagrant", meaning: "glaring", example: { jp: "Entre ses paroles et ses actes, le contraste est flagrant.", en: "Between his words and his deeds, the contrast is glaring." }, accept: ["glaring", "blatant", "flagrant", "striking"], hint: "Strikingly obvious, of an error or contradiction. Legal: un flagrant délit, caught in the act." },
        { id: "fr-u119l1-criant", type: "vocab", front: "criant", reading: "criant", meaning: "blatant", example: { jp: "Cette différence de traitement est criante, à tel point qu'elle choque tout le monde.", en: "This difference in treatment is blatant, to the point that it shocks everyone." }, accept: ["blatant", "glaring", "crying", "stark"], hint: "So obvious it \"cries out\": une injustice criante. From crier, to shout." },
        { id: "fr-u119l1-tangible", type: "vocab", front: "tangible", reading: "tangible", meaning: "tangible", example: { jp: "On attend des résultats tangibles, sans quoi le projet sera arrêté.", en: "Tangible results are expected, otherwise the project will be stopped." }, accept: ["tangible", "concrete", "real", "palpable"], hint: "Real and measurable, that you can point to: des preuves tangibles." },
      ],
    },
    {
      id: "fr-u119l2",
      unit: 119,
      lesson: 2,
      title: "Hidden and telling",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Point to what is not obvious: an underlying cause, a slight difference, a telling sign.",
      items: [
        { id: "fr-u119l2-latent", type: "vocab", front: "latent", reading: "latent", meaning: "latent", example: { jp: "Le conflit était latent depuis longtemps, dès lors sa reprise n'étonne personne.", en: "The conflict had been latent for a long time, so its return surprises no one." }, accept: ["latent", "dormant", "underlying", "simmering"], hint: "Present but not yet visible: une tension latente. Opposite of manifeste." },
        { id: "fr-u119l2-sousjacent", type: "vocab", front: "sous-jacent", reading: "sousjacent", meaning: "underlying", example: { jp: "La cause sous-jacente est économique, quand bien même on parle surtout de culture.", en: "The underlying cause is economic, even though people mainly talk about culture." }, accept: ["underlying", "hidden", "beneath the surface"], hint: "Lying underneath, of a cause or idea: le problème sous-jacent. Feminine: sous-jacente." },
        { id: "fr-u119l2-tenu", type: "vocab", front: "ténu", reading: "tenu", meaning: "tenuous", example: { jp: "Le lien entre les deux faits est ténu, si bien qu'on ne peut rien conclure.", en: "The link between the two facts is tenuous, so nothing can be concluded." }, accept: ["tenuous", "slight", "flimsy", "faint"], hint: "Very thin or slight, of a link, a hope, a difference: un espoir ténu." },
        { id: "fr-u119l2-revelateur", type: "vocab", front: "révélateur", reading: "revelateur", meaning: "revealing", example: { jp: "Son silence est révélateur, alors même qu'il refuse de s'expliquer.", en: "His silence is revealing, even though he refuses to explain himself." }, accept: ["revealing", "telling", "indicative", "significant"], hint: "That reveals something deeper: un détail révélateur. Feminine: révélatrice." },
        { id: "fr-u119l2-probant", type: "vocab", front: "probant", reading: "probant", meaning: "convincing", example: { jp: "Les résultats ne sont pas probants, dès lors il faut refaire l'étude.", en: "The results are not convincing, so the study must be redone." }, accept: ["convincing", "conclusive", "compelling", "cogent"], hint: "That proves the point, of evidence or a result: un argument probant. From prouver." },
        { id: "fr-u119l2-saillant", type: "vocab", front: "saillant", reading: "saillant", meaning: "salient, striking", example: { jp: "On observe un changement saillant, si bien que personne ne peut le nier.", en: "A striking change is observed, so no one can deny it." }, accept: ["salient", "striking", "prominent", "standout", "conspicuous"], hint: "The point that stands out most: le trait saillant. From saillir (to jut out). Feminine: saillante." },
      ],
    },
    {
      id: "fr-u119l3",
      unit: 119,
      lesson: 3,
      title: "Harmful and lasting",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Judge whether something is harmful or beneficial, fragile or built to last.",
      items: [
        { id: "fr-u119l3-deletere", type: "vocab", front: "délétère", reading: "deletere", meaning: "harmful", example: { jp: "Ce climat délétère nuit à l'équipe, de sorte que plusieurs sont partis.", en: "This toxic atmosphere harms the team, so several people left." }, accept: ["harmful", "toxic", "noxious", "damaging"], hint: "Deeply harmful, often of an atmosphere or influence: une ambiance délétère." },
        { id: "fr-u119l3-salutaire", type: "vocab", front: "salutaire", reading: "salutaire", meaning: "beneficial", example: { jp: "Cette crise a eu un effet salutaire, puisqu'elle a forcé un vrai changement.", en: "This crisis had a beneficial effect, since it forced a real change." }, accept: ["beneficial", "salutary", "healthy", "good for one"], hint: "Beneficial, often a hard lesson that does good: un choc salutaire. From salut." },
        { id: "fr-u119l3-preoccupant", type: "vocab", front: "préoccupant", reading: "preoccupant", meaning: "worrying", example: { jp: "La situation est préoccupante, si bien que les experts demandent d'agir vite.", en: "The situation is worrying, so the experts are calling for fast action." }, accept: ["worrying", "concerning", "alarming", "troubling"], hint: "Cause for concern: un niveau préoccupant. From préoccuper, to worry." },
        { id: "fr-u119l3-perenne", type: "vocab", front: "pérenne", reading: "perenne", meaning: "lasting", example: { jp: "On cherche une solution pérenne, plutôt qu'une mesure qui dure un an.", en: "A lasting solution is sought, rather than a measure that lasts a year." }, accept: ["lasting", "long-lasting", "enduring", "permanent"], hint: "Made to last over time: un financement pérenne. Noun: la pérennité." },
        { id: "fr-u119l3-chancelant", type: "vocab", front: "chancelant", reading: "chancelant", meaning: "shaky, faltering", example: { jp: "Le gouvernement paraît chancelant, si bien que personne ne lui fait plus confiance.", en: "The government looks shaky, so no one trusts it any more." }, accept: ["shaky", "faltering", "tottering", "wobbly", "unsteady"], hint: "On the point of falling — of a government, a voice, a régime: un pouvoir chancelant. From chanceler (to totter)." },
        { id: "fr-u119l3-redoutable", type: "vocab", front: "redoutable", reading: "redoutable", meaning: "formidable", example: { jp: "C'est un adversaire redoutable, si bien que personne ne prend le match à la légère.", en: "He's a formidable opponent, so no one takes the match lightly." }, accept: ["formidable", "fearsome", "daunting", "dreaded"], hint: "To be feared, impressively so: une efficacité redoutable. From redouter." },
      ],
    },
    {
      id: "fr-u119l4",
      unit: 119,
      lesson: 4,
      title: "Weight and degree",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Rank the importance of things: decisive, unavoidable, out of proportion, or trivial.",
      items: [
        { id: "fr-u119l4-preponderant", type: "vocab", front: "prépondérant", reading: "preponderant", meaning: "predominant", example: { jp: "L'argent a joué un rôle prépondérant, alors que le talent comptait moins.", en: "Money played a predominant role, whereas talent counted for less." }, accept: ["predominant", "prevailing", "decisive", "leading"], hint: "Carrying the most weight: un rôle prépondérant. Feminine: prépondérante." },
        { id: "fr-u119l4-incontournable", type: "vocab", front: "incontournable", reading: "incontournable", meaning: "unavoidable", example: { jp: "Ce sujet est devenu incontournable, dès lors qu'il touche tout le monde.", en: "This topic has become unavoidable, given that it affects everyone." }, accept: ["unavoidable", "essential", "must-see", "inescapable"], hint: "Impossible to get around or ignore: une référence incontournable. Literally, un-go-around-able." },
        { id: "fr-u119l4-disproportionne", type: "vocab", front: "disproportionné", reading: "disproportionne", meaning: "disproportionate", example: { jp: "La réaction paraît disproportionnée, quand bien même la faute est réelle.", en: "The reaction seems disproportionate, even though the fault is real." }, accept: ["disproportionate", "out of proportion", "excessive"], hint: "Out of proportion with its cause: une peine disproportionnée." },
        { id: "fr-u119l4-derisoire", type: "vocab", front: "dérisoire", reading: "derisoire", meaning: "derisory", example: { jp: "La somme proposée est dérisoire, de sorte que l'offre a été refusée.", en: "The sum offered is derisory, so the offer was refused." }, accept: ["derisory", "laughable", "paltry", "pitiful"], hint: "So small as to be laughable: un prix dérisoire. From la dérision." },
        { id: "fr-u119l4-cinglant", type: "vocab", front: "cinglant", reading: "cinglant", meaning: "scathing", example: { jp: "Il a répondu par une remarque cinglante, si bien que la salle s'est tue.", en: "He replied with a scathing remark, so the room fell silent." }, accept: ["scathing", "cutting", "stinging", "biting"], hint: "Sharp and wounding, of a reply or defeat: une critique cinglante." },
        { id: "fr-u119l4-tranche", type: "vocab", front: "tranché", reading: "tranche", meaning: "clear-cut", example: { jp: "Son avis est tranché, alors que la question reste ouverte pour beaucoup.", en: "His opinion is clear-cut, whereas the question stays open for many." }, accept: ["clear-cut", "categorical", "firm", "decided"], hint: "Sharply defined, leaving no middle ground: une position tranchée. From trancher." },
      ],
    },
  ],
};
