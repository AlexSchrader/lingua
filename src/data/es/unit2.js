// ES Unit 2 — Greetings (slot: greetings) — A1
// ─────────────────────────────────────────────────────────────────────────────
// The full greeting set, ordered by time of day, then the politeness core, then
// the two "how are you" exchanges with real answers to give back. Conventions
// (front/reading split, nouns with their article, cognates in examples) are
// documented in es/unit1.js — that header is authoritative for all es units.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT2 = {
  id: "es-u2",
  lang: "es",
  title: "Greetings",
  order: 2,
  stage: "a1",
  lessons: [
    // Lesson 1: hello and goodbye, keyed to the time of day
    {
      id: "es-u2l1",
      unit: 2,
      lesson: 1,
      title: "Hello and goodbye",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Greet someone at any hour of the day and part ways: hola, buenos días, buenas tardes, buenas noches, adiós, hasta luego.",
      items: [
        { id: "es-u2l1-hola", type: "vocab", front: "hola", reading: "hola", meaning: "hello", example: { jp: "¡Hola, Ana!", en: "Hi, Ana!" }, accept: ["hi", "hey"], hint: "Silent h, as always: O-la. Works at any hour and with anyone." },
        { id: "es-u2l1-buenosdias", type: "vocab", front: "buenos días", reading: "buenosdias", meaning: "good morning", example: { jp: "Buenos días, señor.", en: "Good morning, sir." }, accept: ["morning", "good day"], hint: "Literally \"good days\" — plural, always. Used until the midday meal, which in Spain is around two." },
        { id: "es-u2l1-buenastardes", type: "vocab", front: "buenas tardes", reading: "buenastardes", meaning: "good afternoon", example: { jp: "Buenas tardes, Ana.", en: "Good afternoon, Ana." }, accept: ["afternoon", "good evening"], hint: "From after lunch until dark — so it covers a lot of what English calls evening." },
        { id: "es-u2l1-buenasnoches", type: "vocab", front: "buenas noches", reading: "buenasnoches", meaning: "good night", example: { jp: "Buenas noches, señor.", en: "Good evening, sir." }, accept: ["good evening", "goodnight"], hint: "Both a hello and a goodbye once it is dark — greeting on the way in, farewell on the way out." },
        { id: "es-u2l1-adios", type: "vocab", front: "adiós", reading: "adios", meaning: "goodbye", example: { jp: "¡Adiós, Ana!", en: "Goodbye, Ana!" }, accept: ["bye", "farewell"], hint: "A little final. For an ordinary see-you, hasta luego does more work." },
        { id: "es-u2l1-hastaluego", type: "vocab", front: "hasta luego", reading: "hastaluego", meaning: "see you later", example: { jp: "Hasta luego, Ana.", en: "See you later, Ana." }, accept: ["later", "see you", "so long", "until later"], hint: "Literally \"until later\" — the everyday goodbye, even to someone you will not actually see later." },
      ],
    },
    // Lesson 2: the politeness core
    {
      id: "es-u2l2",
      unit: 2,
      lesson: 2,
      title: "Yes, no, please, thank you",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Be polite in Spanish: say yes and no, ask with por favor, thank someone and answer their thanks, and apologise for bumping into them.",
      items: [
        { id: "es-u2l2-si", type: "vocab", front: "sí", reading: "si", meaning: "yes", example: { jp: "—¿Es la casa de Ana? —Sí.", en: "\"Is it Ana's house?\" \"Yes.\"" }, accept: ["yeah", "yep"], hint: "The accent is the whole difference: sí is \"yes\", si without it is \"if\"." },
        { id: "es-u2l2-no", type: "vocab", front: "no", reading: "no", meaning: "no", example: { jp: "No, gracias.", en: "No, thank you." }, accept: ["not", "nope"], hint: "Also how you negate any sentence — put it straight before the verb: no es la casa de Ana." },
        { id: "es-u2l2-porfavor", type: "vocab", front: "por favor", reading: "porfavor", meaning: "please", example: { jp: "La llave, por favor.", en: "The key, please." }, accept: ["if you please"], hint: "Literally \"as a favour\". It goes at the end of the request, after a comma." },
        { id: "es-u2l2-gracias", type: "vocab", front: "gracias", reading: "gracias", meaning: "thank you", example: { jp: "Gracias, señor.", en: "Thank you, sir." }, accept: ["thanks", "thank you very much"], hint: "Always plural — there is no gracia here. Pile it on with muchas gracias." },
        { id: "es-u2l2-denada", type: "vocab", front: "de nada", reading: "denada", meaning: "you're welcome", example: { jp: "—Gracias. —De nada.", en: "\"Thanks.\" \"You're welcome.\"" }, accept: ["not at all", "it's nothing", "no problem"], hint: "Literally \"of nothing\" — the standard answer to gracias, said quickly and warmly." },
        { id: "es-u2l2-perdon", type: "vocab", front: "perdón", reading: "perdon", meaning: "excuse me", example: { jp: "Perdón, señor.", en: "Excuse me, sir." }, accept: ["sorry", "pardon", "pardon me"], hint: "Both \"sorry\" for a small bump and \"excuse me\" to get someone's attention." },
      ],
    },
    // Lesson 3: the how-are-you exchange, with answers worth giving
    {
      id: "es-u2l3",
      unit: 2,
      lesson: 3,
      title: "How are you?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Run the whole exchange: ask ¿cómo estás?, answer bien, muy bien, mal or más o menos, and hand the question back with ¿y tú?",
      items: [
        { id: "es-u2l3-comoestas", type: "vocab", front: "cómo estás", reading: "comoestas", meaning: "how are you", example: { jp: "—¿Cómo estás? —Bien, gracias.", en: "\"How are you?\" \"Fine, thanks.\"" }, accept: ["how're you", "how are you doing", "how's it going"], hint: "Casual, to one person you already know. To a stranger it becomes ¿cómo está usted?" },
        { id: "es-u2l3-bien", type: "vocab", front: "bien", reading: "bien", meaning: "well", example: { jp: "Bien, gracias.", en: "Fine, thanks." }, accept: ["good", "fine", "okay", "alright"], hint: "The default answer. Two vowels, one syllable: BYEN." },
        { id: "es-u2l3-muy", type: "vocab", front: "muy", reading: "muy", meaning: "very", example: { jp: "Muy bien, gracias.", en: "Very well, thanks." }, accept: ["really", "so"], hint: "Goes in front of whatever it boosts: muy bien, muy elegante, muy famoso." },
        { id: "es-u2l3-mal", type: "vocab", front: "mal", reading: "mal", meaning: "badly", example: { jp: "—¿Cómo estás? —Mal.", en: "\"How are you?\" \"Bad.\"" }, accept: ["bad", "poorly", "not well"], hint: "The opposite of bien, and just as short. Muy mal if it is really going wrong." },
        { id: "es-u2l3-masomenos", type: "vocab", front: "más o menos", reading: "masomenos", meaning: "so-so", example: { jp: "—¿Cómo estás? —Más o menos.", en: "\"How are you?\" \"So-so.\"" }, accept: ["more or less", "okay", "not bad", "sort of"], hint: "Literally \"more or less\" — the honest middle answer, and useful far beyond greetings." },
        { id: "es-u2l3-tu", type: "vocab", front: "tú", reading: "tu", meaning: "you", example: { jp: "Bien, gracias. ¿Y tú?", en: "Fine, thanks. And you?" }, accept: ["you (informal)"], hint: "The casual you — friends, family, anyone your age. The polite one, usted, arrives in Unit 3. The accent separates tú (you) from tu (your)." },
      ],
    },
    // Lesson 4: meeting someone, and the softer farewells
    {
      id: "es-u2l4",
      unit: 2,
      lesson: 4,
      title: "Nice to meet you",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Meet someone for the first time — ¿qué tal?, mucho gusto, encantado — apologise properly with lo siento, and address a woman as señora.",
      items: [
        { id: "es-u2l4-quetal", type: "vocab", front: "qué tal", reading: "quetal", meaning: "how's it going", example: { jp: "¡Hola! ¿Qué tal?", en: "Hi! How's it going?" }, accept: ["how are you", "what's up", "how are things"], hint: "Lighter and quicker than ¿cómo estás? — the drop-in greeting you can throw at anyone." },
        { id: "es-u2l4-muchogusto", type: "vocab", front: "mucho gusto", reading: "muchogusto", meaning: "nice to meet you", example: { jp: "Mucho gusto, señora.", en: "Nice to meet you, ma'am." }, accept: ["pleased to meet you", "a pleasure", "how do you do"], hint: "Literally \"much pleasure\" — said as you shake hands, and never changes form." },
        { id: "es-u2l4-encantado", type: "vocab", front: "encantado", reading: "encantado", meaning: "delighted", example: { jp: "Encantado, señor.", en: "Delighted to meet you, sir." }, accept: ["charmed", "nice to meet you", "pleased to meet you"], hint: "\"Charmed.\" A man says encantado, a woman encantada — the ending agrees with the speaker, not the person in front of them." },
        { id: "es-u2l4-hastamanana", type: "vocab", front: "hasta mañana", reading: "hastamanana", meaning: "see you tomorrow", example: { jp: "Hasta mañana, Ana.", en: "See you tomorrow, Ana." }, accept: ["until tomorrow", "till tomorrow", "see you"], hint: "Same hasta as hasta luego. Here mañana is tomorrow, not the morning." },
        { id: "es-u2l4-losiento", type: "vocab", front: "lo siento", reading: "losiento", meaning: "I'm sorry", example: { jp: "Lo siento, señora.", en: "I'm sorry, ma'am." }, accept: ["sorry", "i am sorry", "my apologies"], hint: "A real apology, heavier than perdón — literally \"I feel it\". Add mucho when it matters: lo siento mucho." },
        { id: "es-u2l4-lasenora", type: "vocab", front: "la señora", reading: "lasenora", meaning: "ma'am", example: { jp: "Buenas tardes, señora.", en: "Good afternoon, ma'am." }, accept: ["madam", "mrs", "lady", "the lady"], hint: "Mrs. or ma'am — the partner to el señor, abbreviated Sra. La señorita for a young woman is now old-fashioned in much of Spain." },
      ],
    },
  ],
};
