// FR Unit 86 — Façons de parler ("Ways of speaking") — B1
// Strand D, coverage unit 6 of 14 (block 3). Slot: coverage-b1-6 (generic
// "Vocabulary 6 (B1)"); given a real theme so the lessons cohere — slot number kept.
// The MANNER of speech and the speech acts A2 didn't reach: shouting, whispering,
// interrupting, confessing, warning, promising. Deliberately NOT argument or
// opinion vocabulary — the crew board assigns concession and rebuttal
// (néanmoins, en revanche, certes, contester, convaincre…) to block 1's u58.
// See unit84.js for the block-3 strategy.
export const FR_UNIT86 = {
  id: "fr-u86",
  lang: "fr",
  title: "Façons de parler",
  order: 86,
  stage: "b1",
  lessons: [
    {
      id: "fr-u86l1",
      unit: 86,
      lesson: 1,
      title: "Loud and quiet",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say HOW someone spoke: shouted, yelled, murmured, whispered, chattered — or said nothing at all.",
      items: [
        { id: "fr-u86l1-crier", type: "vocab", front: "crier", reading: "crier", meaning: "to shout", example: { jp: "Il ne faut pas crier en classe.", en: "You mustn't shout in class." }, accept: ["yell", "call out", "shout out"] },
        { id: "fr-u86l1-hurler", type: "vocab", front: "hurler", reading: "hurler", meaning: "to scream", example: { jp: "Quelqu'un commence à hurler.", en: "Someone starts to scream." }, accept: ["howl", "shriek", "roar"], hint: "Much stronger than crier — a scream, or a wolf howling. The h is aspirate, so it stays « le hurlement », never l'h." },
        { id: "fr-u86l1-murmurer", type: "vocab", front: "murmurer", reading: "murmurer", meaning: "to murmur", example: { jp: "Elle murmure quelque chose à son ami.", en: "She murmurs something to her friend." }, accept: ["mutter", "mumble"] },
        { id: "fr-u86l1-chuchoter", type: "vocab", front: "chuchoter", reading: "chuchoter", meaning: "to whisper", example: { jp: "Les élèves chuchotent au fond de la classe.", en: "The pupils whisper at the back of the class." }, accept: ["speak softly", "whisper to"] },
        { id: "fr-u86l1-bavarder", type: "vocab", front: "bavarder", reading: "bavarder", meaning: "to chat", example: { jp: "On bavarde souvent après le cours.", en: "We often chat after the class." }, accept: ["chatter", "natter", "gossip"], hint: "The verb behind bavard, the adjective you already know." },
        { id: "fr-u86l1-setaire", type: "vocab", front: "se taire", reading: "setaire", meaning: "to keep quiet", example: { jp: "Il vaut mieux se taire.", en: "It's better to keep quiet." }, accept: ["be silent", "shut up", "stop talking"], hint: "« Tais-toi ! » is the blunt \"be quiet!\" — sharp, so use it carefully." },
      ],
    },
    {
      id: "fr-u86l2",
      unit: 86,
      lesson: 2,
      title: "Cutting in and owning up",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle a difficult exchange: interrupt, answer back, complain, admit something, deny it — or apologize properly.",
      items: [
        { id: "fr-u86l2-interrompre", type: "vocab", front: "interrompre", reading: "interrompre", meaning: "to interrupt", example: { jp: "Il ne faut pas interrompre les autres.", en: "You mustn't interrupt other people." }, accept: ["cut in", "break in", "cut off"] },
        { id: "fr-u86l2-repliquer", type: "vocab", front: "répliquer", reading: "repliquer", meaning: "to answer back", example: { jp: "Il aime répliquer à son frère.", en: "He likes to answer his brother back." }, accept: ["retort", "shoot back", "come back at"] },
        { id: "fr-u86l2-seplaindre", type: "vocab", front: "se plaindre", reading: "seplaindre", meaning: "to complain", example: { jp: "Les clients se plaignent du bruit.", en: "The customers complain about the noise." }, accept: ["moan", "grumble", "gripe"], hint: "You complain OF something: se plaindre de + the thing." },
        { id: "fr-u86l2-avouer", type: "vocab", front: "avouer", reading: "avouer", meaning: "to admit", example: { jp: "Je dois avouer que j'ai oublié.", en: "I have to admit that I forgot." }, accept: ["confess", "own up", "acknowledge"] },
        { id: "fr-u86l2-lexcuse", type: "vocab", front: "l'excuse", reading: "lexcuse", meaning: "excuse", example: { jp: "Ce n'est pas une bonne excuse.", en: "That's not a good excuse." }, accept: ["the excuse", "apology"], hint: "Feminine. In the plural it's the apology itself: présenter ses excuses = to apologize." },
        { id: "fr-u86l2-sejustifier", type: "vocab", front: "se justifier", reading: "sejustifier", meaning: "to justify oneself", example: { jp: "Il a essayé de se justifier devant tout le monde.", en: "He tried to justify himself in front of everyone." }, accept: ["to justify oneself", "to explain oneself", "to defend oneself"], hint: "Reflexive: se justifier auprès de quelqu'un. Justifier on its own justifies a thing, not a person." },
      ],
    },
    {
      id: "fr-u86l3",
      unit: 86,
      lesson: 3,
      title: "Warning and promising",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Commit or caution: warn someone in advance, warn them off, threaten, promise, swear — or beg.",
      items: [
        { id: "fr-u86l3-avertir", type: "vocab", front: "avertir", reading: "avertir", meaning: "to warn", example: { jp: "Le médecin va l'avertir du danger.", en: "The doctor is going to warn them of the danger." }, accept: ["caution", "alert"] },
        { id: "fr-u86l3-promettre", type: "vocab", front: "promettre", reading: "promettre", meaning: "to promise", example: { jp: "Je peux promettre une réponse demain.", en: "I can promise an answer tomorrow." }, accept: ["give one's word", "pledge"] },
        { id: "fr-u86l3-jurer", type: "vocab", front: "jurer", reading: "jurer", meaning: "to swear", example: { jp: "Je jure que c'est vrai.", en: "I swear that it's true." }, accept: ["vow", "swear to"], hint: "Swearing an oath. Swearing as in bad language is « dire des gros mots »." },
        { id: "fr-u86l3-supplier", type: "vocab", front: "supplier", reading: "supplier", meaning: "to beg", example: { jp: "Il ne faut pas le supplier.", en: "You mustn't plead with him." }, accept: ["plead", "implore", "beseech"] },
        { id: "fr-u86l3-garantir", type: "vocab", front: "garantir", reading: "garantir", meaning: "to guarantee", example: { jp: "Je ne peux rien garantir.", en: "I can't guarantee anything." }, accept: ["to guarantee", "to assure", "to ensure"], hint: "To guarantee — garantir un résultat. The noun is la garantie." },
        { id: "fr-u86l3-annoncer", type: "vocab", front: "annoncer", reading: "annoncer", meaning: "to announce", example: { jp: "Elle va annoncer une bonne nouvelle ce soir.", en: "She's going to announce good news this evening." }, accept: ["to announce", "to declare", "to break the news"], hint: "To announce — annoncer une nouvelle. The noun is l'annonce." },
      ],
    },
    {
      id: "fr-u86l4",
      unit: 86,
      lesson: 4,
      title: "Tone and delivery",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the delivery rather than the words: a tone, a speech, in a low voice, express yourself, a remark.",
      items: [
        { id: "fr-u86l4-leton", type: "vocab", front: "le ton", reading: "leton", meaning: "tone", example: { jp: "Je n'aime pas ce ton.", en: "I don't like that tone." }, accept: ["the tone", "manner", "pitch"], hint: "Careful with the spelling twin: le ton (tone) vs ton (your)." },
        { id: "fr-u86l4-avoixbasse", type: "vocab", front: "à voix basse", reading: "avoixbasse", meaning: "in a low voice", example: { jp: "Ils parlent à voix basse.", en: "They're speaking in a low voice." }, accept: ["quietly", "under one's breath", "softly"], hint: "Its opposite is à voix haute — out loud." },
        { id: "fr-u86l4-lediscours", type: "vocab", front: "le discours", reading: "lediscours", meaning: "speech", example: { jp: "Le discours du président était long.", en: "The president's speech was long." }, accept: ["the speech", "address", "talk"] },
        { id: "fr-u86l4-sexprimer", type: "vocab", front: "s'exprimer", reading: "sexprimer", meaning: "to express oneself", example: { jp: "Il s'exprime très bien en français.", en: "He expresses himself very well in French." }, accept: ["speak", "put it", "get one's meaning across"] },
        { id: "fr-u86l4-laremarque", type: "vocab", front: "la remarque", reading: "laremarque", meaning: "remark", example: { jp: "Sa remarque n'était pas gentille.", en: "Their remark wasn't kind." }, accept: ["the remark", "comment", "observation"], hint: "The noun behind remarquer, which you already know." },
        { id: "fr-u86l4-bafouiller", type: "vocab", front: "bafouiller", reading: "bafouiller", meaning: "to stammer", example: { jp: "Je bafouille quand je suis stressé.", en: "I stammer when I'm stressed." }, accept: ["stumble over words", "splutter", "mumble"] },
      ],
    },
  ],
};
