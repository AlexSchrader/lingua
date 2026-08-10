// FR Unit 21 — Dire non ("Saying no") — A1 GRAMMAR
// Negation as function-word vocab (no grammar item type — same modelling as the
// Japanese ぶんぽう units). The learner already met ne…pas frozen inside "je ne
// comprends pas"; here it becomes a pattern they can build themselves, plus the
// negative pronouns and the de-after-negation rule that trips everyone up.
// Conventions: see fr/unit1.js.
export const FR_UNIT21 = {
  id: "fr-u21",
  lang: "fr",
  title: "Dire non",
  order: 22,
  stage: "a1",
  lessons: [
    {
      id: "fr-u21l1",
      unit: 21,
      lesson: 1,
      title: "ne ... pas",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Make any sentence negative by wrapping the verb: je ne mange pas, ce n'est pas, il n'y a pas.",
      items: [
        { id: "fr-u21l1-nepas", type: "vocab", front: "ne … pas", reading: "nepas", meaning: "not", example: { jp: "Je ne travaille pas aujourd'hui.", en: "I'm not working today." }, accept: ["not at all", "negation"], hint: "Negation is a SANDWICH: ne goes before the verb, pas after it. je ne parle pas, il ne mange pas." },
        { id: "fr-u21l1-jenemangepas", type: "vocab", front: "je ne mange pas", reading: "jenemangepas", meaning: "I don't eat", example: { jp: "Je ne mange pas de viande.", en: "I don't eat meat." }, accept: ["i do not eat", "i'm not eating"], hint: "After a negative, un/une/du all become de: je mange de la viande → je ne mange pas DE viande." },
        { id: "fr-u21l1-cenestpas", type: "vocab", front: "ce n'est pas", reading: "cenestpas", meaning: "it is not", example: { jp: "Ce n'est pas cher, c'est gratuit !", en: "It's not expensive, it's free!" }, accept: ["that's not", "it's not"], hint: "ne shrinks to n' before a vowel: ce n'est pas, il n'a pas." },
        { id: "fr-u21l1-jenaipas", type: "vocab", front: "je n'ai pas", reading: "jenaipas", meaning: "I don't have", example: { jp: "Je n'ai pas d'argent.", en: "I don't have any money." }, accept: ["i have not", "i haven't"] },
        { id: "fr-u21l1-ilnyapas", type: "vocab", front: "il n'y a pas", reading: "ilnyapas", meaning: "there isn't", example: { jp: "Il n'y a pas de pain à la maison.", en: "There isn't any bread at home." }, accept: ["there is not", "there aren't"] },
        { id: "fr-u21l1-jenesuispas", type: "vocab", front: "je ne suis pas", reading: "jenesuispas", meaning: "I am not", example: { jp: "Je ne suis pas fatigué.", en: "I'm not tired." }, accept: ["i'm not", "i am not"] },
        { id: "fr-u21l1-pasdutout", type: "vocab", front: "pas du tout", reading: "pasdutout", meaning: "not at all", example: { jp: "Fatigué ? Pas du tout !", en: "Tired? Not at all!" }, accept: ["absolutely not", "no way"] },
      ],
    },
    {
      id: "fr-u21l2",
      unit: 21,
      lesson: 2,
      title: "Nothing, nobody, no more",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use the other negatives: ne … rien, ne … personne, ne … plus, ne … jamais.",
      items: [
        { id: "fr-u21l2-nerien", type: "vocab", front: "ne … rien", reading: "nerien", meaning: "nothing", example: { jp: "Je ne mange rien ce matin.", en: "I'm not eating anything this morning." }, accept: ["not anything"], hint: "Same sandwich, different filling: rien replaces pas. je ne vois rien." },
        { id: "fr-u21l2-rien", type: "vocab", front: "rien", reading: "rien", meaning: "nothing", example: { jp: "Qu'est-ce que c'est ? — Rien !", en: "What is it? — Nothing!" }, accept: ["anything"], hint: "Alone it's a full answer: Rien ! You already know it from de rien (Unit 1)." },
        { id: "fr-u21l2-nepersonne", type: "vocab", front: "ne … personne", reading: "nepersonne", meaning: "nobody", example: { jp: "Il n'y a personne dans la rue.", en: "There's nobody in the street." }, accept: ["no one", "not anyone"] },
        { id: "fr-u21l2-personne", type: "vocab", front: "personne", reading: "personne", meaning: "nobody", example: { jp: "Qui est là ? — Personne.", en: "Who's there? — Nobody." }, accept: ["no one"], hint: "Confusingly, une personne is also \"a person\". Context decides." },
        { id: "fr-u21l2-neplus", type: "vocab", front: "ne … plus", reading: "neplus", meaning: "not anymore", example: { jp: "Je ne travaille plus ici.", en: "I don't work here anymore." }, accept: ["no longer", "not any more"], hint: "Same word as plus = more (Unit 4) — but inside ne…plus it means the opposite." },
        { id: "fr-u21l2-nejamais", type: "vocab", front: "ne … jamais", reading: "nejamais", meaning: "never", example: { jp: "Je ne bois jamais de vin.", en: "I never drink wine." }, accept: ["not ever"] },
        { id: "fr-u21l2-pasencore", type: "vocab", front: "pas encore", reading: "pasencore", meaning: "not yet", example: { jp: "Tu as fini ? — Pas encore !", en: "Have you finished? — Not yet!" }, accept: ["not yet"] },
      ],
    },
    {
      id: "fr-u21l3",
      unit: 21,
      lesson: 3,
      title: "Asking properly",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask real questions: est-ce que, n'est-ce pas, qui est-ce, combien de — and answer a negative with si.",
      items: [
        { id: "fr-u21l3-estceque", type: "vocab", front: "est-ce que", reading: "estceque", meaning: "(question marker)", example: { jp: "Est-ce que tu parles français ?", en: "Do you speak French?" }, accept: ["do", "does", "is it that"], hint: "Put it in front of any statement and it becomes a question. No English equivalent — it just marks the question." },
        { id: "fr-u21l3-estcequilya", type: "vocab", front: "est-ce qu'il y a", reading: "estcequilya", meaning: "is there", example: { jp: "Est-ce qu'il y a un café près d'ici ?", en: "Is there a café near here?" }, accept: ["are there"] },
        { id: "fr-u21l3-nestcepas", type: "vocab", front: "n'est-ce pas", reading: "nestcepas", meaning: "isn't it", example: { jp: "Il fait beau, n'est-ce pas ?", en: "The weather's nice, isn't it?" }, accept: ["right", "isn't that so", "don't you think"], hint: "One tag for every English tag question: isn't it, aren't you, doesn't he." },
        { id: "fr-u21l3-quiestce", type: "vocab", front: "qui est-ce", reading: "quiestce", meaning: "who is it", example: { jp: "Qui est-ce ? — C'est Marie !", en: "Who is it? — It's Marie!" }, accept: ["who is that", "who's that", "who's it"] },
        { id: "fr-u21l3-combiende", type: "vocab", front: "combien de", reading: "combiende", meaning: "how many", example: { jp: "Combien de frères ? Deux.", en: "How many brothers? Two." }, accept: ["how much"], hint: "combien (Unit 4) asks the price; combien de + a noun counts things." },
        { id: "fr-u21l3-si", type: "vocab", front: "si", reading: "si", meaning: "yes (after a negative)", example: { jp: "Tu ne travailles pas ? — Si !", en: "You're not working? — Yes I am!" }, accept: ["yes"], hint: "French has a SECOND yes. Contradicting a negative question takes si, never oui — a real gap in English." },
        { id: "fr-u21l3-alors", type: "vocab", front: "alors", reading: "alors", meaning: "so", example: { jp: "Il pleut ? Alors je rentre.", en: "It's raining? Then I'm going home." }, accept: ["then", "well"] },
      ],
    },
  ],
};
