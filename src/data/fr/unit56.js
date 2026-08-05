// FR Unit 56 — Vraiment et surtout ("Really and especially") — A2
// Strand D, coverage unit 10 of 11 (block 3). Slot: coverage-a2-10 (generic
// "Vocabulary 10 (A2)"); given a real theme so the four lessons cohere — the slot
// NUMBER is kept, only the name deviates. See unit48.js for the block-3 rules.
// Adverbs of DEGREE, STANCE and MANNER — how strongly you mean it and how you feel
// about it. Deliberately NOT discourse connectors (donc, alors, pourtant): those
// belong to the connecting-words unit.
export const FR_UNIT56 = {
  id: "fr-u56",
  lang: "fr",
  title: "Vraiment et surtout",
  order: 56,
  stage: "a2",
  lessons: [
    {
      id: "fr-u56l1",
      unit: 56,
      lesson: 1,
      title: "Really and completely",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Turn a statement up or down: extremely, so much, rather, completely, absolutely — or barely at all.",
      items: [
        { id: "fr-u56l1-extremement", type: "vocab", front: "extrêmement", reading: "extremement", meaning: "extremely", example: { jp: "C'est extrêmement cher.", en: "It's extremely expensive." }, accept: ["exceedingly", "hugely"], hint: "-ment is the ending that turns a French adjective into an adverb — the French -ly. You'll see it on most words in this unit." },
        { id: "fr-u56l1-tellement", type: "vocab", front: "tellement", reading: "tellement", meaning: "so much", example: { jp: "C'est tellement cher.", en: "It's so expensive." }, accept: ["so", "such a lot"], hint: "The intensifier \"so\" — not the linking \"so\" of alors and donc, which joins two clauses." },
        { id: "fr-u56l1-plutot", type: "vocab", front: "plutôt", reading: "plutot", meaning: "rather", example: { jp: "Il fait plutôt froid.", en: "It's rather cold." }, accept: ["quite", "fairly", "instead"] },
        { id: "fr-u56l1-completement", type: "vocab", front: "complètement", reading: "completement", meaning: "completely", example: { jp: "Je suis complètement fatigué.", en: "I'm completely tired." }, accept: ["totally", "utterly", "all the way"] },
        { id: "fr-u56l1-absolument", type: "vocab", front: "absolument", reading: "absolument", meaning: "absolutely", example: { jp: "Je veux absolument essayer.", en: "I absolutely want to try." }, accept: ["definitely", "at all costs", "no matter what"] },
        { id: "fr-u56l1-apeine", type: "vocab", front: "à peine", reading: "apeine", meaning: "barely", example: { jp: "Je comprends à peine.", en: "I barely understand." }, accept: ["hardly", "scarcely", "only just"] },
      ],
    },
    {
      id: "fr-u56l2",
      unit: 56,
      lesson: 2,
      title: "Luckily and probably",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how you stand towards a fact and how sure of it you are: frankly, indeed, probably, surely, apparently, obviously.",
      items: [
        { id: "fr-u56l2-franchement", type: "vocab", front: "franchement", reading: "franchement", meaning: "frankly", example: { jp: "Franchement, je ne sais pas.", en: "Frankly, I don't know." }, accept: ["honestly", "to be honest", "candidly"], hint: "Starting a sentence with a stance adverb takes a comma in written French: Franchement, ..." },
        { id: "fr-u56l2-eneffet", type: "vocab", front: "en effet", reading: "eneffet", meaning: "indeed", example: { jp: "En effet, c'est vrai.", en: "Indeed, it's true." }, accept: ["that's right", "sure enough", "as a matter of fact"] },
        { id: "fr-u56l2-probablement", type: "vocab", front: "probablement", reading: "probablement", meaning: "probably", example: { jp: "Il est probablement malade.", en: "He's probably ill." }, accept: ["likely", "in all probability"] },
        { id: "fr-u56l2-surement", type: "vocab", front: "sûrement", reading: "surement", meaning: "surely", example: { jp: "C'est sûrement vrai.", en: "That's surely true." }, accept: ["certainly", "definitely"] },
        { id: "fr-u56l2-apparemment", type: "vocab", front: "apparemment", reading: "apparemment", meaning: "apparently", example: { jp: "Apparemment, c'est fermé.", en: "Apparently, it's closed." }, accept: ["seemingly", "from what I hear"], hint: "Watch the spelling trap: -emment, but it's said « -amment »." },
        { id: "fr-u56l2-evidemment", type: "vocab", front: "évidemment", reading: "evidemment", meaning: "obviously", example: { jp: "Évidemment, je suis d'accord.", en: "Obviously, I agree." }, accept: ["clearly", "naturally"] },
      ],
    },
    {
      id: "fr-u56l3",
      unit: 56,
      lesson: 3,
      title: "Especially and only",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Narrow down what you mean: solely, notably, mainly — and say how something is done: otherwise, directly, gently.",
      items: [
        { id: "fr-u56l3-uniquement", type: "vocab", front: "uniquement", reading: "uniquement", meaning: "solely", example: { jp: "C'est uniquement pour toi.", en: "It's solely for you." }, accept: ["only", "just", "exclusively"] },
        { id: "fr-u56l3-notamment", type: "vocab", front: "notamment", reading: "notamment", meaning: "notably", example: { jp: "J'aime les fruits, notamment la pomme.", en: "I like fruit, notably the apple." }, accept: ["in particular", "particularly", "especially"], hint: "Another -emment word said « -amment », like apparemment." },
        { id: "fr-u56l3-principalement", type: "vocab", front: "principalement", reading: "principalement", meaning: "mainly", example: { jp: "Je travaille principalement le matin.", en: "I work mainly in the morning." }, accept: ["chiefly", "for the most part", "above all"] },
        { id: "fr-u56l3-autrement", type: "vocab", front: "autrement", reading: "autrement", meaning: "otherwise", example: { jp: "Je ne peux pas faire autrement.", en: "I can't do otherwise." }, accept: ["differently", "another way", "or else"] },
        { id: "fr-u56l3-directement", type: "vocab", front: "directement", reading: "directement", meaning: "directly", example: { jp: "Je vais directement à la gare.", en: "I'm going directly to the station." }, accept: ["straight", "straight there", "without stopping"] },
        { id: "fr-u56l3-doucement", type: "vocab", front: "doucement", reading: "doucement", meaning: "gently", example: { jp: "Je vais commencer doucement.", en: "I'm going to begin gently." }, accept: ["softly", "quietly", "carefully"], hint: "From doux (mild), which you met in the weather unit." },
      ],
    },
    {
      id: "fr-u56l4",
      unit: 56,
      lesson: 4,
      title: "Right away and in general",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the fixed adverb phrases French leans on: right now, at the same time, again, usually, all the time, little by little.",
      items: [
        { id: "fr-u56l4-encemoment", type: "vocab", front: "en ce moment", reading: "encemoment", meaning: "right now", example: { jp: "Je travaille en ce moment.", en: "I'm working right now." }, accept: ["at the moment", "currently", "these days"] },
        { id: "fr-u56l4-enmemetemps", type: "vocab", front: "en même temps", reading: "enmemetemps", meaning: "at the same time", example: { jp: "Je ne peux pas tout faire en même temps.", en: "I can't do everything at the same time." }, accept: ["simultaneously", "all at once", "meanwhile"] },
        { id: "fr-u56l4-denouveau", type: "vocab", front: "de nouveau", reading: "denouveau", meaning: "once more", example: { jp: "Il pleut de nouveau.", en: "It's raining again." }, accept: ["again", "yet again", "anew"], hint: "Same idea as encore, a shade more formal." },
        { id: "fr-u56l4-dhabitude", type: "vocab", front: "d'habitude", reading: "dhabitude", meaning: "usually", example: { jp: "D'habitude, je me lève tôt.", en: "Usually, I get up early." }, accept: ["normally", "as a rule", "generally"] },
        { id: "fr-u56l4-toutletemps", type: "vocab", front: "tout le temps", reading: "toutletemps", meaning: "all the time", example: { jp: "Il pleut tout le temps.", en: "It rains all the time." }, accept: ["constantly", "always", "non-stop"] },
        { id: "fr-u56l4-peuapeu", type: "vocab", front: "peu à peu", reading: "peuapeu", meaning: "little by little", example: { jp: "Je fais des progrès peu à peu.", en: "I'm making progress little by little." }, accept: ["gradually", "bit by bit", "step by step"] },
      ],
    },
  ],
};
