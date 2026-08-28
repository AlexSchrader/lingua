// ES Unit 10 — Describing things (slot: describing) — A1
// Block 2. Conventions: see the header of src/data/es/unit7.js.
// Adjectives are taught in the masculine singular citation form (pequeño, not
// pequeña). Agreement is glossed in hints and formally taught in unit 14 — this
// unit gives that lesson its raw material, so it deliberately does NOT try to
// teach the rule itself.
// Adjectives are placed AFTER the noun in every example, which is where Spanish
// puts them; the two-word "es + adjective" frame is the one from unit 7.
// cerca / lejos / aquí / allí sit here rather than in the places unit because they
// answer "what is it like / where is it", which is what this unit is for.
export const ES_UNIT10 = {
  id: "es-u10",
  lang: "es",
  title: "Describir",
  order: 10,
  stage: "a1",
  lessons: [
    {
      id: "es-u10l1",
      unit: 10,
      lesson: 1,
      title: "Size and shape",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how big something is: grande, pequeño, largo, corto, alto, bajo.",
      items: [
        { id: "es-u10l1-grande", type: "vocab", front: "grande", reading: "grande", meaning: "big", example: { jp: "El supermercado es grande.", en: "The supermarket is big." }, accept: ["large", "great"], hint: "Ends in -e, so it works for both genders: un parque grande, una ciudad grande." },
        { id: "es-u10l1-pequeno", type: "vocab", front: "pequeño", reading: "pequeno", meaning: "small", example: { jp: "El pueblo es pequeño.", en: "The town is small." }, accept: ["tiny", "small in size", "not big"], hint: "Size, not amount — the other \"little\", for how much there is, is poco. The ñ is the ny of \"canyon\": pe-QUE-nyo. And qu is just a k sound." },
        { id: "es-u10l1-largo", type: "vocab", front: "largo", reading: "largo", meaning: "long", example: { jp: "El tren es muy largo.", en: "The train is very long." }, accept: ["lengthy"], hint: "False friend — largo is LONG, not large. Big is grande." },
        { id: "es-u10l1-corto", type: "vocab", front: "corto", reading: "corto", meaning: "short", example: { jp: "El día es corto en diciembre.", en: "The day is short in December." }, accept: ["brief", "short in length"], hint: "Same root as \"curtail\" — corto is short in length or time, never short in height. For a person, that's bajo." },
        { id: "es-u10l1-alto", type: "vocab", front: "alto", reading: "alto", meaning: "tall", example: { jp: "El hotel es muy alto.", en: "The hotel is very tall." }, accept: ["high"], hint: "Tall or high — and for a voice or music, loud. Same root as \"altitude\"." },
        { id: "es-u10l1-bajo", type: "vocab", front: "bajo", reading: "bajo", meaning: "short (in height)", example: { jp: "Carlos es alto y María es baja.", en: "Carlos is tall and María is short." }, accept: ["low", "short in height", "small in height", "not tall"], hint: "The opposite of alto — height only. Corto is the other \"short\", for length. Note baja for María: an -o adjective takes -a for a feminine noun." },
      ],
    },
    {
      id: "es-u10l2",
      unit: 10,
      lesson: 2,
      title: "Good, bad, new, old",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Give an opinion about a place or a thing: bueno, malo, bonito, feo, nuevo, viejo.",
      items: [
        { id: "es-u10l2-bueno", type: "vocab", front: "bueno", reading: "bueno", meaning: "good", example: { jp: "El hotel es muy bueno.", en: "The hotel is very good." }, accept: ["nice", "fine"], hint: "Right before a masculine noun it drops the -o: un buen hotel, but el hotel es bueno." },
        { id: "es-u10l2-malo", type: "vocab", front: "malo", reading: "malo", meaning: "bad", example: { jp: "El hotel es malo.", en: "The hotel is bad." }, accept: ["poor", "nasty"], hint: "Shortens the same way: un mal día. For weather, Spanish prefers a whole phrase: hace mal tiempo." },
        { id: "es-u10l2-bonito", type: "vocab", front: "bonito", reading: "bonito", meaning: "pretty", example: { jp: "El pueblo es muy bonito.", en: "The town is very pretty." }, accept: ["nice", "lovely", "beautiful", "good-looking"], hint: "The everyday word for nice-looking — used for places and things far more than for people." },
        { id: "es-u10l2-feo", type: "vocab", front: "feo", reading: "feo", meaning: "ugly", example: { jp: "El aeropuerto es feo.", en: "The airport is ugly." }, accept: ["unattractive", "unpleasant"] },
        { id: "es-u10l2-nuevo", type: "vocab", front: "nuevo", reading: "nuevo", meaning: "new", example: { jp: "Hay un supermercado nuevo en la calle.", en: "There's a new supermarket in the street." }, accept: ["brand new"], hint: "Same root as \"novel\" and \"innovate\"." },
        { id: "es-u10l2-viejo", type: "vocab", front: "viejo", reading: "viejo", meaning: "old", example: { jp: "La iglesia es muy vieja.", en: "The church is very old." }, accept: ["ancient", "aged"], hint: "Vieja here, not viejo — la iglesia is feminine, so the adjective follows it." },
        { id: "es-u10l2-joven", type: "vocab", front: "joven", reading: "joven", meaning: "young", example: { jp: "Mi hermano es joven, pero mi padre es viejo.", en: "My brother is young, but my father is old." }, accept: ["young"], hint: "The pair for viejo, the card before it. Same form for both genders — un chico joven, una chica joven — and the plural is jóvenes." },
      ],
    },
    {
      id: "es-u10l3",
      unit: 10,
      lesson: 3,
      title: "Easy, hard, near, far",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say whether something is fácil or difícil, and whether a place is cerca, lejos, aquí or allí.",
      items: [
        { id: "es-u10l3-facil", type: "vocab", front: "fácil", reading: "facil", meaning: "easy", example: { jp: "El examen es fácil.", en: "The exam is easy." }, accept: ["simple", "straightforward"], hint: "Same root as \"facile\" and \"facility\". The accent sits on the first syllable: FÁ-cil." },
        { id: "es-u10l3-dificil", type: "vocab", front: "difícil", reading: "dificil", meaning: "difficult", example: { jp: "El examen de diciembre es difícil.", en: "The December exam is difficult." }, accept: ["hard", "tough"], hint: "Stress in the middle: di-FÍ-cil — not on the last syllable like English \"difficult\"." },
        { id: "es-u10l3-cerca", type: "vocab", front: "cerca", reading: "cerca", meaning: "near", example: { jp: "El parque está cerca.", en: "The park is near." }, accept: ["close", "nearby", "close by"], hint: "To say near WHAT, add de: el banco está cerca de la plaza." },
        { id: "es-u10l3-lejos", type: "vocab", front: "lejos", reading: "lejos", meaning: "far", example: { jp: "El aeropuerto está lejos de la ciudad.", en: "The airport is far from the city." }, accept: ["far away", "distant", "a long way"], hint: "Always ends in -s, even about one thing." },
        { id: "es-u10l3-aqui", type: "vocab", front: "aquí", reading: "aqui", meaning: "here", example: { jp: "Aquí está el mercado.", en: "Here's the market." }, accept: ["over here", "right here"] },
        { id: "es-u10l3-alli", type: "vocab", front: "allí", reading: "alli", meaning: "there", example: { jp: "La estación está allí.", en: "The station is over there." }, accept: ["over there", "yonder"], hint: "Double l once more: a-YÍ. Aquí is by me, allí is away from us both." },
      ],
    },
    {
      id: "es-u10l4",
      unit: 10,
      lesson: 4,
      title: "Cost, condition and amount",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say whether something is expensive or cheap, clean or dirty, and whether there's a lot of it: caro, barato, limpio, sucio, mucho, poco.",
      items: [
        { id: "es-u10l4-caro", type: "vocab", front: "caro", reading: "caro", meaning: "expensive", example: { jp: "El hotel es muy caro.", en: "The hotel is very expensive." }, accept: ["dear", "pricey", "costly"], hint: "Also \"dear\" as in beloved — querido and caro both do that job." },
        { id: "es-u10l4-barato", type: "vocab", front: "barato", reading: "barato", meaning: "cheap", example: { jp: "El mercado es barato.", en: "The market is cheap." }, accept: ["inexpensive", "low-priced", "cheap (price)"], hint: "The opposite of caro, and the word you want in a market." },
        { id: "es-u10l4-limpio", type: "vocab", front: "limpio", reading: "limpio", meaning: "clean", example: { jp: "El parque está limpio.", en: "The park is clean." }, accept: ["tidy", "spotless"], hint: "Clean and dirty are states, so they take estar: está limpio, not es limpio." },
        { id: "es-u10l4-sucio", type: "vocab", front: "sucio", reading: "sucio", meaning: "dirty", example: { jp: "El tren está sucio.", en: "The train is dirty." }, accept: ["filthy", "unclean"] },
        { id: "es-u10l4-mucho", type: "vocab", front: "mucho", reading: "mucho", meaning: "a lot of", example: { jp: "Hoy hay mucho viento.", en: "There's a lot of wind today." }, accept: ["much", "many", "lots of", "a lot"], hint: "It agrees with what it counts: mucho viento, mucha lluvia." },
        { id: "es-u10l4-poco", type: "vocab", front: "poco", reading: "poco", meaning: "little", example: { jp: "En diciembre hay poco sol.", en: "There's little sun in December." }, accept: ["few", "not much", "hardly any", "little (amount)"], hint: "The opposite of mucho, and it agrees the same way: poco sol, poca nieve. On its own poco means a shortage — the friendly \"a little\" is un poco." },
      ],
    },
  ],
};
