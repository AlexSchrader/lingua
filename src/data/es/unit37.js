// ES Unit 37 — Comparar y matizar ("Comparing and qualifying") — A2 GRAMMAR (slot: grammar-5)
// Strand C, unit 5. A1 gave the learner más / menos as bare words (u10). A2 turns
// them into real comparisons (más… que, tan… como), adds the -ísimo superlative,
// the conditional (would / could — the polite and hypothetical mood), and the
// obligation set (tener que / hay que / deber). Every pattern is modelled as
// function-word or verb-form vocab whose examples carry it.
//
// Conventions: see es/unit36.js (Latin-script front/reading split; example.jp is
// the Spanish sentence). BLOCK-3 SCOPE: examples use only the A1 corpus (u1–u20)
// plus this block's own fronts, for merge-safety against the still-stubbed blocks
// 1–2. FREE: proper names María, Pablo, Ana, Madrid, España; cognates el problema.
// The conditional and comparative FORMS taught here share a lexeme with A1
// infinitives (poder→podría, bueno→mejor) — that is the intended progression, the
// same way u14 taught hablé after u13 taught hablar, not a re-teach.
export const ES_UNIT37 = {
  id: "es-u37",
  lang: "es",
  title: "Comparar y matizar",
  order: 37,
  stage: "a2",
  lessons: [
    {
      id: "es-u37l1",
      unit: 37,
      lesson: 1,
      title: "Más que, tan como",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Compare two things: Pablo es más alto que María, esta casa es tan grande como la otra, este coche es mejor.",
      items: [
        { id: "es-u37l1-tan", type: "vocab", front: "tan", reading: "tan", meaning: "as / so", example: { jp: "Pablo es tan alto como María.", en: "Pablo is as tall as María." }, accept: ["so (much)", "as (…as)"], hint: "For \"as … as\" with a describing word, the frame is tan + adjective + como: tan alto como, tan fácil como. On its own, tan means \"so\": ¡es tan bonito!" },
        { id: "es-u37l1-tanto", type: "vocab", front: "tanto", reading: "tanto", meaning: "so much / as much", example: { jp: "No tengo tanto dinero como tú.", en: "I don't have as much money as you." }, accept: ["so many", "as many", "that much"], hint: "tanto is tan's partner for amounts of a NOUN: tanto dinero, tanta agua, tantos amigos, tantas cosas. It agrees like a normal -o/-a word." },
        { id: "es-u37l1-mejor", type: "vocab", front: "mejor", reading: "mejor", meaning: "better", example: { jp: "Este libro es mejor que el otro.", en: "This book is better than the other one." }, accept: ["best"], hint: "Spanish doesn't say más bueno — bueno has its own comparative, mejor. Same word for \"better\" and, with el/la, \"best\": el mejor café." },
        { id: "es-u37l1-peor", type: "vocab", front: "peor", reading: "peor", meaning: "worse", example: { jp: "Hoy el tiempo es peor que ayer.", en: "Today the weather is worse than yesterday." }, accept: ["worst"], hint: "The mirror of mejor: malo → peor, never más malo. el peor día = the worst day." },
        { id: "es-u37l1-mayor", type: "vocab", front: "mayor", reading: "mayor", meaning: "older / bigger", example: { jp: "Mi hermano es mayor que yo.", en: "My brother is older than me." }, accept: ["greater", "elder", "main"], hint: "Mostly \"older\" for people: mi hermana mayor. It also means \"greater/main\": la plaza mayor." },
        { id: "es-u37l1-menor", type: "vocab", front: "menor", reading: "menor", meaning: "younger / smaller", example: { jp: "Ana es menor que su hermano.", en: "Ana is younger than her brother." }, accept: ["lesser", "minor", "youngest"], hint: "The opposite of mayor: mi hermano menor = my younger brother." },
      ],
    },
    {
      id: "es-u37l2",
      unit: 37,
      lesson: 2,
      title: "El superlativo (-ísimo)",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say something is extremely so, without muy: el café está buenísimo, es carísimo, hay muchísima gente.",
      items: [
        { id: "es-u37l2-muchisimo", type: "vocab", front: "muchísimo", reading: "muchisimo", meaning: "a huge amount", example: { jp: "Hoy tengo muchísimo trabajo.", en: "Today I have a huge amount of work." }, accept: ["very much", "loads", "a whole lot"], hint: "Take an adjective, drop the last vowel, add -ísimo = \"extremely\". mucho → muchísimo. It agrees: muchísima gente, muchísimos coches." },
        { id: "es-u37l2-buenisimo", type: "vocab", front: "buenísimo", reading: "buenisimo", meaning: "excellent", example: { jp: "Este vino está buenísimo.", en: "This wine is excellent." }, accept: ["really good", "amazing", "delicious"], hint: "bueno → buenísimo = \"really, really good\". Stronger and warmer than muy bueno." },
        { id: "es-u37l2-malisimo", type: "vocab", front: "malísimo", reading: "malisimo", meaning: "terrible", example: { jp: "La comida está malísima.", en: "The food is terrible." }, accept: ["really bad", "awful"], hint: "malo → malísimo. The -ísimo ending works on almost any adjective you already know." },
        { id: "es-u37l2-grandisimo", type: "vocab", front: "grandísimo", reading: "grandisimo", meaning: "enormous", example: { jp: "Viven en una casa grandísima.", en: "They live in an enormous house." }, accept: ["huge", "really big"], hint: "grande → grandísimo. For \"the biggest of all\", use el más grande instead: el edificio más grande de la ciudad." },
        { id: "es-u37l2-carisimo", type: "vocab", front: "carísimo", reading: "carisimo", meaning: "very expensive", example: { jp: "Este coche es carísimo.", en: "This car is very expensive." }, accept: ["extremely expensive", "really pricey"], hint: "caro → carísimo. Note the spelling swap in words like this: rico → riquísimo, largo → larguísimo, to keep the hard c/g sound." },
        { id: "es-u37l2-facilisimo", type: "vocab", front: "facilísimo", reading: "facilisimo", meaning: "really easy", example: { jp: "La lección fue facilísima.", en: "The lesson was really easy." }, accept: ["very easy", "dead easy"], hint: "fácil → facilísimo. The accent moves onto the -í-, and the old one disappears." },
      ],
    },
    {
      id: "es-u37l3",
      unit: 37,
      lesson: 3,
      title: "El condicional (would)",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Be polite and hypothetical: me gustaría un café, ¿podrías ayudarme?, yo no haría eso.",
      items: [
        { id: "es-u37l3-megustaria", type: "vocab", front: "me gustaría", reading: "megustaria", meaning: "I would like", example: { jp: "Me gustaría un café, por favor.", en: "I would like a coffee, please." }, accept: ["i'd like", "i would love"], hint: "The polite \"I'd like\", softer than quiero. The conditional ending is -ía on the whole infinitive: gustar → gustaría, comer → comería." },
        { id: "es-u37l3-podria", type: "vocab", front: "podría", reading: "podria", meaning: "could / would be able to", example: { jp: "¿Podrías ayudarme con esto?", en: "Could you help me with this?" }, accept: ["i could", "you could", "would be able to"], hint: "poder → podría. The politest way to ask a favour: ¿Podrías…? = \"Could you…?\". Same form for I/he/she, tú adds -s: podrías." },
        { id: "es-u37l3-seria", type: "vocab", front: "sería", reading: "seria", meaning: "would be", example: { jp: "Sería mejor ir mañana.", en: "It would be better to go tomorrow." }, accept: ["it would be", "i would be"], hint: "ser → sería. For suggestions: sería mejor / sería bueno = \"it would be better / good\"." },
        { id: "es-u37l3-tendria", type: "vocab", front: "tendría", reading: "tendria", meaning: "would have", example: { jp: "Con más dinero, tendría un coche mejor.", en: "With more money, I'd have a better car." }, accept: ["i would have", "he would have"], hint: "tener → tendría. The stem drops the e, like the future you'll meet in u39: tendré / tendría." },
        { id: "es-u37l3-querria", type: "vocab", front: "querría", reading: "querria", meaning: "would like / would want", example: { jp: "Querría hablar con el jefe.", en: "I would like to speak with the boss." }, accept: ["i'd want", "i would like"], hint: "querer → querría (double r). A slightly more formal me gustaría; both ask for something politely." },
        { id: "es-u37l3-deberia", type: "vocab", front: "debería", reading: "deberia", meaning: "should", example: { jp: "Deberías descansar más.", en: "You should rest more." }, accept: ["ought to", "i should", "you should"], hint: "deber → debería = \"should / ought to\", advice softened by the conditional. Deberías + a plain verb: deberías comer, deberías ir." },
      ],
    },
    {
      id: "es-u37l4",
      unit: 37,
      lesson: 4,
      title: "Tener que, hay que",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what must be done: tengo que trabajar, hay que esperar, debes estudiar más.",
      items: [
        { id: "es-u37l4-tenerque", type: "vocab", front: "tener que", reading: "tenerque", meaning: "to have to", example: { jp: "Tengo que trabajar el sábado.", en: "I have to work on Saturday." }, accept: ["have to", "must", "need to"], hint: "Personal obligation: tener (u13) + que + a plain verb. Tengo que ir, tienes que comer. This is the everyday \"have to\"." },
        { id: "es-u37l4-hayque", type: "vocab", front: "hay que", reading: "hayque", meaning: "one has to / it's necessary to", example: { jp: "Hay que esperar aquí.", en: "One has to wait here." }, accept: ["you have to", "it is necessary to", "we must"], hint: "Impersonal obligation — a rule for everyone, no particular person: hay (u7) + que + plain verb. Hay que esperar = \"you have to wait\" (everybody does)." },
        { id: "es-u37l4-deber", type: "vocab", front: "deber", reading: "deber", meaning: "must / should", example: { jp: "Debes estudiar más.", en: "You must study more." }, accept: ["should", "ought to", "to owe"], hint: "debo, debes, debe + a plain verb. A shade stronger and more formal than tener que. Its conditional debería (this unit) softens it back to advice." },
        { id: "es-u37l4-nohayque", type: "vocab", front: "no hay que", reading: "nohayque", meaning: "there's no need to / one shouldn't", example: { jp: "No hay que trabajar tanto.", en: "There's no need to work so much." }, accept: ["you don't have to", "no need to"], hint: "Careful: no hay que = \"there's no need to\", NOT \"you must not\". For a real ban, Spanish says no se puede or no debes." },
        { id: "es-u37l4-esnecesario", type: "vocab", front: "es necesario", reading: "esnecesario", meaning: "it is necessary", example: { jp: "Es necesario tener pasaporte.", en: "It's necessary to have a passport." }, accept: ["it's necessary", "it is needed"], hint: "The neutral, written way to state a requirement: es necesario + a plain verb. No es necesario = it isn't necessary." },
        { id: "es-u37l4-tenerganasde", type: "vocab", front: "tener ganas de", reading: "tenerganasde", meaning: "to feel like (doing)", example: { jp: "Tengo ganas de ir al cine.", en: "I feel like going to the cinema." }, accept: ["to want to", "to be in the mood for"], hint: "The other side of obligation — desire. Tengo ganas de + plain verb = \"I feel like…\". No tengo ganas = I don't feel like it." },
      ],
    },
  ],
};
