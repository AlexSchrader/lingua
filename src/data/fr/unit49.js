// FR Unit 49 — Penser et savoir ("Thinking and knowing") — A2
// Strand D, coverage unit 3 of 11 (block 3). Slot: coverage-a2-3 (generic
// "Vocabulary 3 (A2)"); given a real theme so the four lessons cohere — the slot
// NUMBER is kept, only the name deviates. See unit48.js for the block-3 rules.
// The mental-verb half of the frequency pass: remembering, believing, choosing,
// hoping. Examples use A1 vocab (u1-u27) plus u48 where useful.
export const FR_UNIT49 = {
  id: "fr-u49",
  lang: "fr",
  title: "Penser et savoir",
  order: 49,
  stage: "a2",
  lessons: [
    {
      id: "fr-u49l1",
      unit: 49,
      lesson: 1,
      title: "Remembering and forgetting",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you remember, forget, know and learn — and talk about your memory.",
      items: [
        { id: "fr-u49l1-oublier", type: "vocab", front: "oublier", reading: "oublier", meaning: "to forget", example: { jp: "Je ne veux pas oublier la date.", en: "I don't want to forget the date." }, accept: ["forget"] },
        { id: "fr-u49l1-sesouvenir", type: "vocab", front: "se souvenir", reading: "sesouvenir", meaning: "to remember", example: { jp: "Je vais me souvenir de ce jour.", en: "I'm going to remember this day." }, accept: ["remember", "recall", "to recall"], hint: "Reflexive like je me lève: se becomes me with je — je me souviens. And you remember OF something: se souvenir de." },
        { id: "fr-u49l1-connaitre", type: "vocab", front: "connaître", reading: "connaitre", meaning: "to know", example: { jp: "Je veux connaître ce pays.", en: "I want to know this country." }, accept: ["know", "be familiar with", "to be familiar with"], hint: "French has two \"know\"s: connaître a person or place you're familiar with; savoir (je sais) a fact or a skill." },
        { id: "fr-u49l1-reconnaitre", type: "vocab", front: "reconnaître", reading: "reconnaitre", meaning: "to recognize", example: { jp: "Je vais reconnaître la gare.", en: "I'm going to recognize the station." }, accept: ["recognise", "know again"], hint: "re- + connaître: to know something again." },
        { id: "fr-u49l1-retenir", type: "vocab", front: "retenir", reading: "retenir", meaning: "to memorize", example: { jp: "Je veux retenir ce mot.", en: "I want to memorize this word." }, accept: ["memorise", "retain", "hold on to", "learn by heart"], hint: "re- + tenir, literally \"to hold back\" — what your memory does with a word." },
        { id: "fr-u49l1-lamemoire", type: "vocab", front: "la mémoire", reading: "lamemoire", meaning: "memory", example: { jp: "J'ai une bonne mémoire.", en: "I have a good memory." }, accept: ["the memory"] },
      ],
    },
    {
      id: "fr-u49l2",
      unit: 49,
      lesson: 2,
      title: "Sure or not sure",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how sure you are: believe, doubt, be right or wrong, and call something certain or not.",
      items: [
        { id: "fr-u49l2-croire", type: "vocab", front: "croire", reading: "croire", meaning: "to believe", example: { jp: "C'est difficile à croire.", en: "It's difficult to believe." }, accept: ["believe", "to think", "think"] },
        { id: "fr-u49l2-douter", type: "vocab", front: "douter", reading: "douter", meaning: "to doubt", example: { jp: "Je commence à douter.", en: "I'm starting to doubt." }, accept: ["doubt", "have doubts"] },
        { id: "fr-u49l2-avoirraison", type: "vocab", front: "avoir raison", reading: "avoirraison", meaning: "to be right", example: { jp: "Je veux avoir raison.", en: "I want to be right." }, accept: ["be right", "to be correct", "be correct"], hint: "French HAS reason where English IS right — tu as raison = you're right. Same trick as avoir faim." },
        { id: "fr-u49l2-avoirtort", type: "vocab", front: "avoir tort", reading: "avoirtort", meaning: "to be wrong", example: { jp: "Je ne veux pas avoir tort.", en: "I don't want to be wrong." }, accept: ["be wrong", "to be mistaken", "be mistaken"] },
        { id: "fr-u49l2-hesiter", type: "vocab", front: "hésiter", reading: "hesiter", meaning: "to hesitate", example: { jp: "J'hésite un peu.", en: "I'm hesitating a little." }, accept: ["waver", "be unsure", "think twice"], hint: "The headword is the infinitive hésiter. The h is silent, so je contracts onto it: j'hésite — and hesitating isn't something you plan, so it rarely takes « je vais »." },
        { id: "fr-u49l2-certain", type: "vocab", front: "certain", reading: "certain", meaning: "definite", example: { jp: "Ce n'est pas certain.", en: "It's not definite." }, accept: ["certain", "settled", "for sure"], hint: "Spelled like English, said nothing like it: the -ain is a single nasal vowel, « ser-TAN », with no n sounded on the end. sûr is how YOU feel; certain is how settled the FACT is." },
      ],
    },
    {
      id: "fr-u49l3",
      unit: 49,
      lesson: 3,
      title: "Choosing and deciding",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Make a decision out loud: decide, choose, prefer, try, succeed — and call it a good choice.",
      items: [
        { id: "fr-u49l3-decider", type: "vocab", front: "décider", reading: "decider", meaning: "to decide", example: { jp: "Je vais décider demain.", en: "I'm going to decide tomorrow." }, accept: ["decide", "make up one's mind"] },
        { id: "fr-u49l3-choisir", type: "vocab", front: "choisir", reading: "choisir", meaning: "to choose", example: { jp: "Je veux choisir la couleur.", en: "I want to choose the colour." }, accept: ["choose", "pick", "select"] },
        { id: "fr-u49l3-preferer", type: "vocab", front: "préférer", reading: "preferer", meaning: "to prefer", example: { jp: "Je préfère le train.", en: "I prefer the train." }, accept: ["prefer", "like better"], hint: "The headword is the infinitive préférer; with je it becomes je préfère. Preferring isn't something you plan, so it rarely takes « je vais »." },
        { id: "fr-u49l3-essayer", type: "vocab", front: "essayer", reading: "essayer", meaning: "to try", example: { jp: "Je veux essayer.", en: "I want to try." }, accept: ["try", "have a go", "attempt"] },
        { id: "fr-u49l3-reussir", type: "vocab", front: "réussir", reading: "reussir", meaning: "to succeed", example: { jp: "Je vais réussir.", en: "I'm going to succeed." }, accept: ["succeed", "manage", "pull it off"] },
        { id: "fr-u49l3-lechoix", type: "vocab", front: "le choix", reading: "lechoix", meaning: "choice", example: { jp: "C'est un bon choix.", en: "That's a good choice." }, accept: ["the choice", "option"] },
      ],
    },
    {
      id: "fr-u49l4",
      unit: 49,
      lesson: 4,
      title: "Imagining and hoping",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about what is only in your head: imagine, hope, dream, notice, and say what something seems like.",
      items: [
        { id: "fr-u49l4-imaginer", type: "vocab", front: "imaginer", reading: "imaginer", meaning: "to imagine", example: { jp: "Je peux imaginer la mer.", en: "I can imagine the sea." }, accept: ["imagine", "picture"] },
        { id: "fr-u49l4-esperer", type: "vocab", front: "espérer", reading: "esperer", meaning: "to hope", example: { jp: "On peut espérer.", en: "We can hope." }, accept: ["hope", "to hope for", "hope for"], hint: "peut is the on/il/elle form of the je peux you already know — same verb, different person." },
        { id: "fr-u49l4-rever", type: "vocab", front: "rêver", reading: "rever", meaning: "to dream", example: { jp: "Je vais rêver de la plage.", en: "I'm going to dream about the beach." }, accept: ["dream", "daydream"], hint: "You dream OF something: rêver de la plage." },
        { id: "fr-u49l4-remarquer", type: "vocab", front: "remarquer", reading: "remarquer", meaning: "to notice", example: { jp: "C'est difficile à remarquer.", en: "It's difficult to notice." }, accept: ["notice", "spot", "observe"] },
        { id: "fr-u49l4-sembler", type: "vocab", front: "sembler", reading: "sembler", meaning: "to seem", example: { jp: "Ça peut sembler difficile.", en: "That can seem difficult." }, accept: ["seem", "appear", "look"], hint: "peut is the ça/il/elle form of je peux — the same verb in another person." },
        { id: "fr-u49l4-laraison", type: "vocab", front: "la raison", reading: "laraison", meaning: "reason", example: { jp: "Je ne comprends pas la raison.", en: "I don't understand the reason." }, accept: ["the reason", "cause"] },
      ],
    },
  ],
};
