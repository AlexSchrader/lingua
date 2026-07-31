// FR Unit 9 — Les verbes ("Verbs") — A1
// The verb engine: avoir chunks (j'ai faim!), the everyday -er verbs as je/tu
// chunks, and the power verbs (want/can/know/do) including the lifesaver
// "je ne comprends pas". Conjugation as a SYSTEM (nous/vous, infinitives,
// passé composé) is A2 material — here verbs live as chunks, like ja's ～ます
// forms did before U45's conjugation drills. Conventions: see fr/unit1.js.
export const FR_UNIT9 = {
  id: "fr-u9",
  lang: "fr",
  title: "Les verbes",
  order: 9,
  stage: "a1",
  lessons: [
    {
      id: "fr-u9l1",
      unit: 9,
      lesson: 1,
      title: "Having",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use avoir: j'ai, tu as, il a, elle a — and feel it: j'ai faim, j'ai soif.",
      items: [
        { id: "fr-u9l1-jai", type: "vocab", front: "j'ai", reading: "jai", meaning: "I have", example: { jp: "J'ai un frère et une sœur.", en: "I have a brother and a sister." }, accept: ["i've", "have"], hint: "je + ai squishes to j'ai — French hates two vowels bumping." },
        { id: "fr-u9l1-tuas", type: "vocab", front: "tu as", reading: "tuas", meaning: "you have", example: { jp: "Tu as un café ?", en: "Do you have a coffee?" }, accept: ["you've", "do you have"] },
        { id: "fr-u9l1-ila", type: "vocab", front: "il a", reading: "ila", meaning: "he has", example: { jp: "Il a une petite maison.", en: "He has a small house." }, accept: ["he's got"] },
        { id: "fr-u9l1-ellea", type: "vocab", front: "elle a", reading: "ellea", meaning: "she has", example: { jp: "Elle a douze ans.", en: "She is twelve years old." }, accept: ["she's got"], hint: "Age uses avoir, not être: elle a douze ans = \"she HAS twelve years\"." },
        { id: "fr-u9l1-faim", type: "vocab", front: "faim", reading: "faim", meaning: "hunger", example: { jp: "J'ai faim !", en: "I'm hungry!" }, accept: ["hungry"], hint: "French HAS hunger: j'ai faim = I'm hungry. Never je suis faim." },
        { id: "fr-u9l1-soif", type: "vocab", front: "soif", reading: "soif", meaning: "thirst", example: { jp: "Tu as soif ? Il y a de l'eau.", en: "Are you thirsty? There's water." }, accept: ["thirsty"] },
      ],
    },
    {
      id: "fr-u9l2",
      unit: 9,
      lesson: 2,
      title: "Doing things",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Live your day in -er verbs: je parle, j'habite, je travaille, je regarde, j'écoute.",
      items: [
        { id: "fr-u9l2-jeparle", type: "vocab", front: "je parle", reading: "jeparle", meaning: "I speak", example: { jp: "Je parle avec ma mère le soir.", en: "I talk with my mother in the evening." }, accept: ["i talk", "i'm speaking", "i am speaking"] },
        { id: "fr-u9l2-tuparles", type: "vocab", front: "tu parles", reading: "tuparles", meaning: "you speak", example: { jp: "Tu parles très bien !", en: "You speak very well!" }, accept: ["you talk", "you're speaking"], hint: "Sounds identical to je parle — the -s is silent. The tu is what you hear." },
        { id: "fr-u9l2-jhabite", type: "vocab", front: "j'habite", reading: "jhabite", meaning: "I live", example: { jp: "J'habite à Paris, et toi ?", en: "I live in Paris, and you?" }, accept: ["i live in", "i reside"], hint: "et toi ? = \"and you?\" — the easiest way to bounce any question back." },
        { id: "fr-u9l2-jetravaille", type: "vocab", front: "je travaille", reading: "jetravaille", meaning: "I work", example: { jp: "Je travaille le matin.", en: "I work in the morning." }, accept: ["i'm working", "i am working"] },
        { id: "fr-u9l2-jeregarde", type: "vocab", front: "je regarde", reading: "jeregarde", meaning: "I watch", example: { jp: "Je regarde la ville, la nuit.", en: "I watch the city at night." }, accept: ["i look at", "i'm watching", "i look"] },
        { id: "fr-u9l2-jecoute", type: "vocab", front: "j'écoute", reading: "jecoute", meaning: "I listen", example: { jp: "J'écoute, madame !", en: "I'm listening, ma'am!" }, accept: ["i'm listening", "i listen to", "i am listening"] },
      ],
    },
    {
      id: "fr-u9l3",
      unit: 9,
      lesson: 3,
      title: "Want, can, know",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Get things done: je veux, je peux, je sais, je fais, je comprends — je ne comprends pas.",
      items: [
        { id: "fr-u9l3-jeveux", type: "vocab", front: "je veux", reading: "jeveux", meaning: "I want", example: { jp: "Je veux un croissant !", en: "I want a croissant!" }, accept: ["i want to"], hint: "Direct — fine with friends. In a shop, je voudrais is the polite version of the same wish." },
        { id: "fr-u9l3-jepeux", type: "vocab", front: "je peux", reading: "jepeux", meaning: "I can", example: { jp: "Je peux ? — Oui, oui !", en: "May I? — Yes, yes!" }, accept: ["may i", "i am able"], hint: "Je peux ? alone, with rising voice, is a full polite \"may I?\"." },
        { id: "fr-u9l3-jesais", type: "vocab", front: "je sais", reading: "jesais", meaning: "I know", example: { jp: "Oui, je sais !", en: "Yes, I know!" }, accept: ["i know it"] },
        { id: "fr-u9l3-jefais", type: "vocab", front: "je fais", reading: "jefais", meaning: "I make", example: { jp: "Je fais le café ce matin.", en: "I'm making the coffee this morning." }, accept: ["i do", "i'm making", "i'm doing"] },
        { id: "fr-u9l3-jecomprends", type: "vocab", front: "je comprends", reading: "jecomprends", meaning: "I understand", example: { jp: "Ah, oui — je comprends !", en: "Ah, yes — I understand!" }, accept: ["i get it", "understood"] },
        { id: "fr-u9l3-jenecomprendspas", type: "vocab", front: "je ne comprends pas", reading: "jenecomprendspas", meaning: "I don't understand", example: { jp: "Pardon, je ne comprends pas.", en: "Sorry, I don't understand." }, accept: ["i do not understand", "i don't get it"], hint: "ne … pas wraps around the verb to say NOT — the single most useful sentence in your first week." },
      ],
    },
  ],
};
