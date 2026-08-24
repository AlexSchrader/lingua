// ES Unit 42 — Adjetivos · 1 ("Adjectives 1") — A2 COVERAGE (slot: coverage-a2-3)
// Judgment and quality adjectives — the words for saying what something IS like
// beyond A1's size/colour set. Many are transparent cognates (importante, posible,
// normal), which makes them fast A2 wins. All agree -o/-a/-os/-as unless they end
// in -e or a consonant (importante, útil, común stay put but add -s in the plural).
// Conventions and BLOCK-3 SCOPE: see es/unit13.js. FREE: María, Pablo, Ana, Madrid.
export const ES_UNIT42 = {
  id: "es-u42",
  lang: "es",
  title: "Adjetivos · 1",
  order: 42,
  stage: "a2",
  lessons: [
    {
      id: "es-u42l1",
      unit: 42,
      lesson: 1,
      title: "Importante, seguro, evidente",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Judge how things stand: es importante, es posible, no estoy seguro, es evidente.",
      items: [
        { id: "es-u42l1-importante", type: "vocab", front: "importante", reading: "importante", meaning: "important", example: { jp: "Esta reunión es muy importante.", en: "This meeting is very important." }, accept: ["significant", "major"], hint: "Ends in -e, so no -o/-a change: un libro importante, una cosa importante. Lo importante = the important thing." },
        { id: "es-u42l1-posible", type: "vocab", front: "posible", reading: "posible", meaning: "possible", example: { jp: "Es posible llegar a las seis.", en: "It's possible to arrive at six." }, accept: ["feasible", "likely"], hint: "es posible + a plain verb, or es posible que + a clause. Lo antes posible = as soon as possible." },
        { id: "es-u42l1-imposible", type: "vocab", front: "imposible", reading: "imposible", meaning: "impossible", example: { jp: "Es imposible terminar hoy.", en: "It's impossible to finish today." }, accept: ["not possible"], hint: "posible with im- on the front, the same negative prefix as in English." },
        { id: "es-u42l1-seguro", type: "vocab", front: "seguro", reading: "seguro", meaning: "sure / safe", example: { jp: "No estoy seguro de la hora.", en: "I'm not sure of the time." }, accept: ["certain", "safe", "secure"], hint: "estar seguro = to be sure; ser seguro = to be safe. Seguro que sí = surely yes / of course." },
        { id: "es-u42l1-evidente", type: "vocab", front: "evidente", reading: "evidente", meaning: "obvious / evident", example: { jp: "Es evidente que hoy hace frío.", en: "It's obvious that it's cold today." }, accept: ["clear", "plain", "evident"], hint: "Ends in -e. Es evidente que… = it's obvious that… A stronger, more formal claro." },
        { id: "es-u42l1-obvio", type: "vocab", front: "obvio", reading: "obvio", meaning: "obvious", example: { jp: "La respuesta es obvia.", en: "The answer is obvious." }, accept: ["clear", "plain"], hint: "A close cognate of \"obvious\". ¡Es obvio! = it's obvious! Agrees: obvio / obvia." },
      ],
    },
    {
      id: "es-u42l2",
      unit: 42,
      lesson: 2,
      title: "Ocupado, listo, disponible",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe availability and readiness: estar ocupado, estar listo, estar disponible, ser útil.",
      items: [
        { id: "es-u42l2-disponible", type: "vocab", front: "disponible", reading: "disponible", meaning: "available", example: { jp: "¿Estás disponible el sábado?", en: "Are you available on Saturday?" }, accept: ["free", "on hand", "vacant"], hint: "Ends in -e. The everyday word for \"available\": una mesa disponible, ¿estás disponible?" },
        { id: "es-u42l2-ocupado", type: "vocab", front: "ocupado", reading: "ocupado", meaning: "busy / taken", example: { jp: "El médico está muy ocupado hoy.", en: "The doctor is very busy today." }, accept: ["engaged", "occupied"], hint: "The opposite of libre. From ocupar (u41). ¿Está ocupada esta silla? = is this seat taken?" },
        { id: "es-u42l2-listo", type: "vocab", front: "listo", reading: "listo", meaning: "ready / clever", example: { jp: "¿Estás listo para salir?", en: "Are you ready to go out?" }, accept: ["prepared", "smart", "bright"], hint: "The classic ser/estar trap: estar listo = ready, ser listo = clever. ¿Listo? = Ready?" },
        { id: "es-u42l2-capaz", type: "vocab", front: "capaz", reading: "capaz", meaning: "capable / able", example: { jp: "Es capaz de hacer todo solo.", en: "He's capable of doing everything by himself." }, accept: ["able"], hint: "ser capaz de + a plain verb = to be able to. Its plural is capaces." },
        { id: "es-u42l2-util", type: "vocab", front: "útil", reading: "util", meaning: "useful", example: { jp: "Este libro es muy útil.", en: "This book is very useful." }, accept: ["handy", "helpful"], hint: "Ends in a consonant, plural útiles. The accent is on the ú." },
        { id: "es-u42l2-inutil", type: "vocab", front: "inútil", reading: "inutil", meaning: "useless", example: { jp: "Es inútil esperar más.", en: "It's useless to wait any longer." }, accept: ["pointless", "no use"], hint: "útil with the negative in- on the front. Es inútil + a plain verb = there's no point in…" },
      ],
    },
    {
      id: "es-u42l3",
      unit: 42,
      lesson: 3,
      title: "Común, especial, típico",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Place things on a scale of ordinary to special: común, especial, general, típico.",
      items: [
        { id: "es-u42l3-tipico", type: "vocab", front: "típico", reading: "tipico", meaning: "typical", example: { jp: "Es una comida típica de aquí.", en: "It's a typical food from here." }, accept: ["classic", "usual", "traditional"], hint: "típico de = typical of. ¡Qué típico! = how typical! Agrees: típico / típica." },
        { id: "es-u42l3-comun", type: "vocab", front: "común", reading: "comun", meaning: "common", example: { jp: "Es un problema muy común.", en: "It's a very common problem." }, accept: ["ordinary", "shared"], hint: "Plural comunes (the accent drops). En común = in common: tenemos mucho en común." },
        { id: "es-u42l3-especial", type: "vocab", front: "especial", reading: "especial", meaning: "special", example: { jp: "Hoy es un día especial.", en: "Today is a special day." }, accept: ["particular"], hint: "Note the e- at the front (español, escuela, España all do it). En especial = especially." },
        { id: "es-u42l3-general", type: "vocab", front: "general", reading: "general", meaning: "general", example: { jp: "En general, me gusta mi trabajo.", en: "In general, I like my job." }, accept: ["overall", "broad"], hint: "En general / por lo general = generally, on the whole — a very common way to open a sentence." },
        { id: "es-u42l3-principal", type: "vocab", front: "principal", reading: "principal", meaning: "main", example: { jp: "La calle principal está cerca.", en: "The main street is nearby." }, accept: ["chief", "primary", "leading"], hint: "The main/most important one: la puerta principal, el problema principal." },
        { id: "es-u42l3-final", type: "vocab", front: "final", reading: "final", meaning: "final / last", example: { jp: "Estamos en la parte final del libro.", en: "We're in the final part of the book." }, accept: ["last", "the end"], hint: "As a noun, el final = the end. Al final = in the end / finally." },
      ],
    },
    {
      id: "es-u42l4",
      unit: 42,
      lesson: 4,
      title: "Verdadero, propio, único",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what's real and what's one's own: verdadero, falso, mi propio coche, el único día.",
      items: [
        { id: "es-u42l4-verdadero", type: "vocab", front: "verdadero", reading: "verdadero", meaning: "true / real", example: { jp: "Es un amigo verdadero.", en: "He's a true friend." }, accept: ["genuine", "actual"], hint: "A real/genuine one, as against a fake. Related to la verdad (u45, \"truth\")." },
        { id: "es-u42l4-falso", type: "vocab", front: "falso", reading: "falso", meaning: "false / fake", example: { jp: "Lo que dices es falso.", en: "What you're saying is false." }, accept: ["untrue", "counterfeit"], hint: "The opposite of verdadero and of cierto. Un amigo falso = a fake friend." },
        { id: "es-u42l4-real", type: "vocab", front: "real", reading: "real", meaning: "real", example: { jp: "El problema es real.", en: "The problem is real." }, accept: ["actual", "royal"], hint: "Real as in actual — and, oddly, also \"royal\": la familia real = the royal family." },
        { id: "es-u42l4-propio", type: "vocab", front: "propio", reading: "propio", meaning: "own", example: { jp: "Tengo mi propio coche.", en: "I have my own car." }, accept: ["one's own", "very"], hint: "Goes between the possessive and the noun: mi propio coche = my own car. It stresses ownership." },
        { id: "es-u42l4-unico", type: "vocab", front: "único", reading: "unico", meaning: "only / unique", example: { jp: "Es el único día libre que tengo.", en: "It's the only free day I have." }, accept: ["sole", "single", "one and only"], hint: "el único = the only one. Lo único = the only thing. Hijo único = an only child." },
        { id: "es-u42l4-simple", type: "vocab", front: "simple", reading: "simple", meaning: "simple", example: { jp: "Es una pregunta simple.", en: "It's a simple question." }, accept: ["plain", "easy", "straightforward"], hint: "Ends in -e. A close friend of fácil (u10). Es muy simple = it's very straightforward." },
      ],
    },
  ],
};
