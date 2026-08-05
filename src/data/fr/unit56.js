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
      canDo: "Turn a statement up or down: really, so, rather, completely, absolutely — or barely at all.",
      items: [
        { id: "fr-u56l1-vraiment", type: "vocab", front: "vraiment", reading: "vraiment", meaning: "really", example: { jp: "C'est vraiment bien.", en: "That's really good." }, accept: ["truly", "genuinely"], hint: "vrai (true) + -ment, the ending that turns a French adjective into an adverb — the French -ly." },
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
      canDo: "Say how you feel about a fact and how sure of it you are: luckily, unfortunately, probably, surely, apparently, obviously.",
      items: [
        { id: "fr-u56l2-heureusement", type: "vocab", front: "heureusement", reading: "heureusement", meaning: "luckily", example: { jp: "Heureusement, il fait beau.", en: "Luckily, the weather is nice." }, accept: ["fortunately", "thankfully"], hint: "Starting a sentence with a stance adverb takes a comma in written French: Heureusement, ..." },
        { id: "fr-u56l2-malheureusement", type: "vocab", front: "malheureusement", reading: "malheureusement", meaning: "unfortunately", example: { jp: "Malheureusement, je ne peux pas.", en: "Unfortunately, I can't." }, accept: ["sadly", "regrettably", "unluckily"], hint: "mal- flips heureusement, the same mal- as in j'ai mal." },
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
      canDo: "Narrow down what you mean: especially, only, the same one — and say how something is done: otherwise, directly, gently.",
      items: [
        { id: "fr-u56l3-surtout", type: "vocab", front: "surtout", reading: "surtout", meaning: "especially", example: { jp: "J'aime surtout le fromage.", en: "I especially like cheese." }, accept: ["above all", "particularly", "mainly"] },
        { id: "fr-u56l3-seulement", type: "vocab", front: "seulement", reading: "seulement", meaning: "only", example: { jp: "Il y a seulement deux places.", en: "There are only two seats." }, accept: ["just", "merely"] },
        { id: "fr-u56l3-meme", type: "vocab", front: "même", reading: "meme", meaning: "same", example: { jp: "C'est le même prix.", en: "It's the same price." }, accept: ["even", "the same", "very same"], hint: "Two jobs: before a noun with le/la it means SAME (le même prix); on its own in front of a phrase it means EVEN (même moi)." },
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
      canDo: "Use the fixed adverb phrases French leans on: right away, at the same time, again, for example, in general, probably.",
      items: [
        { id: "fr-u56l4-toutdesuite", type: "vocab", front: "tout de suite", reading: "toutdesuite", meaning: "right away", example: { jp: "Je vais partir tout de suite.", en: "I'm going to leave right away." }, accept: ["immediately", "at once", "straight away"] },
        { id: "fr-u56l4-enmemetemps", type: "vocab", front: "en même temps", reading: "enmemetemps", meaning: "at the same time", example: { jp: "Je ne peux pas tout faire en même temps.", en: "I can't do everything at the same time." }, accept: ["simultaneously", "all at once", "meanwhile"] },
        { id: "fr-u56l4-denouveau", type: "vocab", front: "de nouveau", reading: "denouveau", meaning: "once more", example: { jp: "Il pleut de nouveau.", en: "It's raining again." }, accept: ["again", "yet again", "anew"], hint: "Same idea as encore, a shade more formal." },
        { id: "fr-u56l4-parexemple", type: "vocab", front: "par exemple", reading: "parexemple", meaning: "for example", example: { jp: "J'aime les fruits, par exemple la pomme.", en: "I like fruit, for example the apple." }, accept: ["for instance", "such as", "e.g."] },
        { id: "fr-u56l4-engeneral", type: "vocab", front: "en général", reading: "engeneral", meaning: "in general", example: { jp: "En général, je me lève tôt.", en: "In general, I get up early." }, accept: ["generally", "usually", "as a rule"] },
        { id: "fr-u56l4-sansdoute", type: "vocab", front: "sans doute", reading: "sansdoute", meaning: "most likely", example: { jp: "C'est sans doute vrai.", en: "It's most likely true." }, accept: ["presumably", "no doubt", "in all likelihood"], hint: "A trap: « sans doute » means PROBABLY — a shade LESS certain than it looks. For real certainty French says sans aucun doute." },
      ],
    },
  ],
};
