// FR Unit 104 — L'éthique et la responsabilité (slot: ethics and responsibility) — B2
// B1 taught la morale, la conscience, la vertu (u65), la responsabilité, le
// respect. B2 adds the register of moral judgement: values (l'éthique,
// l'intégrité, la dignité, la loyauté), right and wrong (légitime, condamnable,
// coupable, l'hypocrisie), fault and harm (la faute, nuire, le préjudice, le
// remords) and judging conduct (blâmer, pardonner, l'indulgence, la corruption).
// Fronts checked against the 2,168 live fr fronts. Conventions: fr/unit1.js.
export const FR_UNIT104 = {
  id: "fr-u104",
  lang: "fr",
  title: "L'éthique et la responsabilité",
  order: 104,
  stage: "b2",
  lessons: [
    {
      id: "fr-u104l1",
      unit: 104,
      lesson: 1,
      title: "Moral values",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name moral qualities: l'éthique, l'intégrité, la dignité, la loyauté.",
      items: [
        { id: "fr-u104l1-lethique", type: "vocab", front: "l'éthique", reading: "lethique", meaning: "ethics", example: { jp: "Cette question pose un vrai problème d'éthique.", en: "This question raises a real ethical problem." }, accept: ["ethics", "the ethics"], hint: "Moral principles guiding conduct — l'éthique professionnelle. Also 'ethical' (adj)." },
        { id: "fr-u104l1-lintegrite", type: "vocab", front: "l'intégrité", reading: "lintegrite", meaning: "integrity", example: { jp: "Personne ne doute de son intégrité.", en: "Nobody doubts his integrity." }, accept: ["integrity", "honesty"], hint: "Moral uprightness — un homme d'une grande intégrité. Also wholeness." },
        { id: "fr-u104l1-ladignite", type: "vocab", front: "la dignité", reading: "ladignite", meaning: "dignity", example: { jp: "Elle a gardé toute sa dignité.", en: "She kept all her dignity." }, accept: ["dignity"], hint: "The quality of being worthy of respect — la dignité humaine. From digne." },
        { id: "fr-u104l1-laloyaute", type: "vocab", front: "la loyauté", reading: "laloyaute", meaning: "loyalty", example: { jp: "Il montre une grande loyauté à ses amis.", en: "He shows great loyalty to his friends." }, accept: ["loyalty", "faithfulness"], hint: "Faithfulness to people or principles — la loyauté envers. From loyal." },
        { id: "fr-u104l1-labienveillance", type: "vocab", front: "la bienveillance", reading: "labienveillance", meaning: "kindness", example: { jp: "Elle écoute les autres avec bienveillance.", en: "She listens to others with kindness." }, accept: ["kindness", "benevolence", "goodwill"], hint: "Kindly goodwill — regarder avec bienveillance. Literally 'wishing well'." },
        { id: "fr-u104l1-sincere", type: "vocab", front: "sincère", reading: "sincere", meaning: "sincere", example: { jp: "Je crois qu'il est vraiment sincère.", en: "I think he's really sincere." }, accept: ["sincere", "genuine", "heartfelt"], hint: "Genuine, truly felt — des excuses sincères. The noun is la sincérité." },
      ],
    },
    {
      id: "fr-u104l2",
      unit: 104,
      lesson: 2,
      title: "Right and wrong",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Judge whether something is acceptable: légitime, condamnable, coupable, innocent.",
      items: [
        { id: "fr-u104l2-legitime", type: "vocab", front: "légitime", reading: "legitime", meaning: "legitimate", example: { jp: "Sa colère est tout à fait légitime.", en: "His anger is completely legitimate." }, accept: ["legitimate", "justified", "rightful"], hint: "Fair and justified — une demande légitime. Also lawful. From la loi." },
        { id: "fr-u104l2-condamnable", type: "vocab", front: "condamnable", reading: "condamnable", meaning: "reprehensible", example: { jp: "Cette faute est vraiment condamnable.", en: "This fault is truly reprehensible." }, accept: ["reprehensible", "blameworthy", "wrong"], hint: "Deserving to be condemned — un acte condamnable. From condamner." },
        { id: "fr-u104l2-coupable", type: "vocab", front: "coupable", reading: "coupable", meaning: "guilty", example: { jp: "Il se sent coupable de son erreur.", en: "He feels guilty about his mistake." }, accept: ["guilty", "the culprit"], hint: "Guilty, or the guilty person — plaider coupable. From la coulpe (fault)." },
        { id: "fr-u104l2-innocent", type: "vocab", front: "innocent", reading: "innocent", meaning: "innocent", example: { jp: "Le juge l'a déclaré innocent.", en: "The judge declared him innocent." }, accept: ["innocent"], hint: "Not guilty, or harmless / naive — un enfant innocent. The opposite of coupable." },
        { id: "fr-u104l2-juste", type: "vocab", front: "juste", reading: "juste", meaning: "fair", example: { jp: "Ce n'est pas juste de le punir seul.", en: "It's not fair to punish him alone." }, accept: ["fair", "just", "right"], hint: "Fair, morally right — une décision juste. Also 'exactly / correct': c'est juste." },
        { id: "fr-u104l2-lhypocrisie", type: "vocab", front: "l'hypocrisie", reading: "lhypocrisie", meaning: "hypocrisy", example: { jp: "Son hypocrisie finit toujours par se voir.", en: "His hypocrisy always ends up showing." }, accept: ["hypocrisy"], hint: "Pretending to values you don't hold — from hypocrite." },
      ],
    },
    {
      id: "fr-u104l3",
      unit: 104,
      lesson: 3,
      title: "Fault and harm",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about wrongdoing and its cost: la faute, nuire, un préjudice, le remords.",
      items: [
        { id: "fr-u104l3-lafaute", type: "vocab", front: "la faute", reading: "lafaute", meaning: "the fault", example: { jp: "Ce n'est pas ma faute, j'ai fait de mon mieux.", en: "It's not my fault; I did my best." }, accept: ["fault", "the mistake", "the blame"], hint: "Fault or blame — c'est de ta faute. Also a mistake (une faute d'orthographe)." },
        { id: "fr-u104l3-nuire", type: "vocab", front: "nuire", reading: "nuire", meaning: "to harm", example: { jp: "Trop de travail peut nuire à la santé.", en: "Too much work can harm your health." }, accept: ["to harm", "to damage", "to hurt"], hint: "nuire à = to harm / be bad for. From nuisible, harmful." },
        { id: "fr-u104l3-leprejudice", type: "vocab", front: "le préjudice", reading: "leprejudice", meaning: "the harm", example: { jp: "Cette erreur a causé un grave préjudice.", en: "This mistake caused serious harm." }, accept: ["harm", "the damage", "the wrong", "the loss"], hint: "Harm / damage done, often legal — subir un préjudice. Not le préjugé (prejudice)." },
        { id: "fr-u104l3-leremords", type: "vocab", front: "le remords", reading: "leremords", meaning: "the remorse", example: { jp: "Il n'a montré aucun remords après coup.", en: "He showed no remorse afterwards." }, accept: ["remorse", "the guilt"], hint: "Deep regret for a wrong done — être rongé par le remords. Note the silent -ds." },
        { id: "fr-u104l3-lescrupule", type: "vocab", front: "le scrupule", reading: "lescrupule", meaning: "the scruple", example: { jp: "Il prend leur argent sans le moindre scrupule.", en: "He takes their money without the slightest scruple." }, accept: ["scruple", "the qualm", "the misgiving"], hint: "A moral hesitation — sans scrupule = unscrupulous. Usually plural: des scrupules." },
        { id: "fr-u104l3-sabstenir", type: "vocab", front: "s'abstenir", reading: "sabstenir", meaning: "to refrain", example: { jp: "Il vaut mieux s'abstenir de tout commentaire.", en: "It's better to refrain from any comment." }, accept: ["to refrain", "to abstain", "to hold back"], hint: "s'abstenir de = to refrain from. Also to abstain in a vote." },
      ],
    },
    {
      id: "fr-u104l4",
      unit: 104,
      lesson: 4,
      title: "Judging conduct",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "React to what people do: blâmer, pardonner, l'indulgence, altruiste.",
      items: [
        { id: "fr-u104l4-blamer", type: "vocab", front: "blâmer", reading: "blamer", meaning: "to blame", example: { jp: "On ne peut pas le blâmer d'avoir dit la vérité.", en: "You can't blame him for having told the truth." }, accept: ["to blame", "to reproach"], hint: "To blame / reproach — blâmer quelqu'un pour. The noun is le blâme." },
        { id: "fr-u104l4-pardonner", type: "vocab", front: "pardonner", reading: "pardonner", meaning: "to forgive", example: { jp: "Elle a fini par lui pardonner sa faute.", en: "She eventually forgave him his mistake." }, accept: ["to forgive", "to pardon"], hint: "To forgive — pardonner à quelqu'un. The noun is le pardon." },
        { id: "fr-u104l4-lindulgence", type: "vocab", front: "l'indulgence", reading: "lindulgence", meaning: "the leniency", example: { jp: "Le juge a fait preuve d'indulgence.", en: "The judge showed leniency." }, accept: ["leniency", "the indulgence", "the forbearance"], hint: "Gentle tolerance of faults — juger avec indulgence. From indulgent." },
        { id: "fr-u104l4-consciencieux", type: "vocab", front: "consciencieux", reading: "consciencieux", meaning: "conscientious", example: { jp: "C'est un travailleur consciencieux et sérieux.", en: "He's a conscientious and serious worker." }, accept: ["conscientious", "diligent", "careful"], hint: "Doing one's duty carefully — un élève consciencieux. From la conscience." },
        { id: "fr-u104l4-altruiste", type: "vocab", front: "altruiste", reading: "altruiste", meaning: "altruistic", example: { jp: "Son geste était vraiment altruiste.", en: "Her act was truly altruistic." }, accept: ["altruistic", "selfless"], hint: "Putting others first — the opposite of égoïste. From autrui (others)." },
        { id: "fr-u104l4-lacorruption", type: "vocab", front: "la corruption", reading: "lacorruption", meaning: "corruption", example: { jp: "Ce scandale de corruption a surpris tout le pays.", en: "This corruption scandal surprised the whole country." }, accept: ["corruption"], hint: "Abuse of power for money — un cas de corruption. From corrompre." },
      ],
    },
  ],
};
