// ES Unit 12 — La frase básica ("The basic sentence") — A1 GRAMMAR (slot: grammar-1)
// The first of the three Strand C units, in ja's order: sentence -> verbs/particles
// -> past & agreement. Grammar has no item type: every pattern here is modelled as
// function-word vocab whose example sentences carry it (same as ja's ぶんぽう units
// and fr/unit21.js).
//
// AUTHORING CONVENTIONS (Latin script — see fr/unit1.js, which is authoritative):
//   - `front` is real orthography (accents, spaces); `reading` is its ASCII fold,
//     because the contract requires [a-z]+. The checker folds typed accents back,
//     so a learner may type either "está" or "esta".
//   - `example.jp` holds the SPANISH sentence (the field name is historical —
//     "jp" = target language); `example.en` is the English gloss.
//   - Nouns are taught WITH their article so gender is learned as part of the word.
//
// ⚠️ BLOCK-3 SCOPE NOTE (read before editing examples). This unit was authored in
// parallel with blocks 1–2, which had committed nothing yet. Under the runbook's
// ownership rule (lower unit number wins) units 1–11 own the everyday vocabulary,
// so this block teaches none of it and only USES it in examples, from this assumed
// set: hola · gracias · por favor · adiós · sí · no · y · o · muy · bien ·
// soy/me llamo/el nombre · español · el amigo/la amiga · la familia · la madre ·
// el padre · el hermano/la hermana · el hijo/la hija · el niño · uno–diez, veinte ·
// la hora · hoy · mañana · ayer · la mañana/la tarde/la noche · el agua · el pan ·
// el café · la leche · la comida · la carne · comer · beber · la casa · la ciudad ·
// la calle · la tienda · la escuela · el parque · rojo/negro/blanco · el sol ·
// hace calor/hace frío · llueve · lunes–domingo, enero · el día · la semana ·
// grande/pequeño/bueno/nuevo/viejo/bonito/largo/corto/rápido/fácil/difícil ·
// mucho/poco ·
// la mano · el médico · ¿qué?/¿cómo?/¿dónde? (inside the block-1 greeting and
// self-introduction chunks). Proper names and transparent cognates (el taxi, el
// hospital, la música, el problema, la foto, México, Madrid) are free.
// TWO FAILURE MODES AT MERGE, and they cost very differently:
//   (a) blocks 1–2 SKIPPED an assumed word → swap the example word. Cheap; the item
//       never depends on it. "muy" is the largest exposure (used in 16 examples,
//       taught nowhere in this block).
//   (b) blocks 1–2 also TEACH one of this block's 218 fronts → NOT an example swap.
//       contract.js keys front-uniqueness on `${lang} ${front}` and errors, so
//       validate:content goes hard red on the merged tree, and §4's ownership rule
//       (lower unit number wins) means block 3 always loses. The merge seat deletes
//       the card and re-authors to keep the lesson inside the 5–8 band. Most exposed:
//       unit 20 lessons 1–3 (connectors, amounts, question words) and the function
//       words of units 12–14, where "non-overlapping domains" is no defence.
// A scope checker for (a) was written and run over all 218 examples (it found four
// real forward references); it is not committed because §4 keeps an authoring seat
// inside src/data/<lang>/. Rebuilding it is ~20 lines: fold accents, stem the
// infinitive/plural/gender endings off every taught front, map the irregular verb
// forms by hand, then walk each example word against the fronts available at or
// before its unit. Once blocks 1–2 exist, drop the assumed list entirely and run
// it strict.
//
// WHY `está` / `están` ARE TAUGHT HERE BUT USED EARLIER. Units 7 and 11 write
// "El parque está en la ciudad" long before this unit systematises the estar
// paradigm, so `node scripts/check-lang-scope.mjs es` reports 11 teach-before-use
// hits against them. That is the convention working, not a defect: the merge-day
// re-triage settled that a function word belongs to the unit that TEACHES it, not
// the one that first uses it — the same rule under which block 1 ceded ITS function
// words to these grammar units. The checker cannot express "systematised later", so
// those 11 stay reported. Leave them; do not move estar back into unit 7.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT12 = {
  id: "es-u12",
  lang: "es",
  title: "La frase básica",
  order: 12,
  stage: "a1",
  lessons: [
    {
      id: "es-u12l1",
      unit: 12,
      lesson: 1,
      title: "Esto, este, ese",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Point at things near and far and pick the right word for each: esto es agua, este pan, ese café.",
      items: [
        { id: "es-u12l1-esto", type: "vocab", front: "esto", reading: "esto", meaning: "this", example: { jp: "Esto es agua.", en: "This is water." }, drill: { jp: "Esto es una manzana", en: "This is an apple" }, accept: ["this thing", "this one"], hint: "esto points at a thing whose name you don't know yet — \"what's this?\". Once you name it you switch to este/esta." },
        { id: "es-u12l1-eso", type: "vocab", front: "eso", reading: "eso", meaning: "that", example: { jp: "Eso no es café.", en: "That isn't coffee." }, drill: { jp: "Eso es un libro", en: "That is a book" }, accept: ["that thing", "that one"] },
        { id: "es-u12l1-este", type: "vocab", front: "este", reading: "este", meaning: "this (with a masculine word)", example: { jp: "Este pan es muy bueno.", en: "This bread is very good." }, drill: { jp: "Este libro es viejo", en: "This book is old" }, accept: ["this"], hint: "este goes in front of a masculine noun, esta in front of a feminine one: este pan, esta casa." },
        { id: "es-u12l1-esta", type: "vocab", front: "esta", reading: "esta", meaning: "this (with a feminine word)", example: { jp: "Esta casa es pequeña.", en: "This house is small." }, drill: { jp: "Esta casa es nueva", en: "This house is new" }, accept: ["this"], hint: "esta goes in front of a feminine noun: esta casa, esta semana. Careful: está with an accent is a different word (Lesson 4)." },
        { id: "es-u12l1-ese", type: "vocab", front: "ese", reading: "ese", meaning: "that (with a masculine word)", example: { jp: "Ese café es muy bueno.", en: "That coffee is very good." }, drill: { jp: "Ese hotel es caro", en: "That hotel is expensive" }, accept: ["that"], hint: "The whole set in one line: este/esta for what's near you, ese/esa for what's further off — and esto/eso when you can't name the thing at all." },
        { id: "es-u12l1-esa", type: "vocab", front: "esa", reading: "esa", meaning: "that (with a feminine word)", example: { jp: "Esa tienda es nueva.", en: "That shop is new." }, drill: { jp: "Esa tienda es nueva", en: "That shop is new" }, accept: ["that"], hint: "The feminine partner of ese, and the last piece of the set: ese pan, esa tienda." },
      ],
    },
    {
      id: "es-u12l2",
      unit: 12,
      lesson: 2,
      title: "El, la, los, las",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Put the right \"the\" in front of any word, singular or plural: el pan, la casa, los amigos, las manos — and say \"some\" with unos.",
      items: [
        { id: "es-u12l2-el", type: "vocab", front: "el", reading: "el", meaning: "the (masculine)", example: { jp: "El médico es bueno.", en: "The doctor is good." }, drill: { jp: "El médico está aquí", en: "The doctor is here" }, accept: ["the"], hint: "Every Spanish noun is masculine or feminine, and the word for \"the\" tells you which. That's why words are always learned WITH their article: el pan, la casa." },
        { id: "es-u12l2-la", type: "vocab", front: "la", reading: "la", meaning: "the (feminine)", example: { jp: "La casa es grande.", en: "The house is big." }, drill: { jp: "La farmacia está cerca", en: "The pharmacy is nearby" }, accept: ["the"] },
        { id: "es-u12l2-los", type: "vocab", front: "los", reading: "los", meaning: "the (masculine plural)", example: { jp: "Los amigos son buenos.", en: "The friends are good." }, drill: { jp: "Los libros están en la mesa", en: "The books are on the table" }, accept: ["the"], hint: "Plural: el -> los, la -> las. The noun takes an -s too: el amigo -> los amigos." },
        { id: "es-u12l2-las", type: "vocab", front: "las", reading: "las", meaning: "the (feminine plural)", example: { jp: "Las manos son pequeñas.", en: "The hands are small." }, drill: { jp: "Las sillas están aquí", en: "The chairs are here" }, accept: ["the"] },
        { id: "es-u12l2-unos", type: "vocab", front: "unos", reading: "unos", meaning: "some (masculine)", example: { jp: "Hay unos amigos en el parque.", en: "There are some friends in the park." }, drill: { jp: "Unos amigos de mi hermano", en: "Some friends of my brother" }, accept: ["a few", "some"], hint: "un has a plural: un amigo -> unos amigos, una casa -> unas casas. English often drops it (\"there are friends\"), Spanish keeps it." },
        { id: "es-u12l2-unas", type: "vocab", front: "unas", reading: "unas", meaning: "some (feminine)", example: { jp: "Hay unas casas en la calle.", en: "There are some houses in the street." }, drill: { jp: "Unas amigas de mi hermana", en: "Some friends of my sister" }, accept: ["a few", "some"], hint: "The feminine of unos, exactly as las is the feminine of los." },
      ],
    },
    {
      id: "es-u12l3",
      unit: 12,
      lesson: 3,
      title: "Él, ella, ellos, ellas",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name who you are talking about when it isn't you: él, ella, nosotros, ellos, ellas.",
      items: [
        { id: "es-u12l3-el", type: "vocab", front: "él", reading: "el", meaning: "he", example: { jp: "Él es el médico.", en: "He's the doctor." }, drill: { jp: "Él es de México", en: "He is from Mexico" }, accept: ["him"], hint: "él with an accent is \"he\"; el without one is \"the\". The accent is the only difference. Spanish usually DROPS the pronoun anyway — the verb ending already says who — so él is for emphasis or contrast." },
        { id: "es-u12l3-ella", type: "vocab", front: "ella", reading: "ella", meaning: "she", example: { jp: "Ella es una amiga.", en: "She's a friend." }, drill: { jp: "Ella es mi amiga", en: "She is my friend" }, accept: ["her"] },
        { id: "es-u12l3-nosotros", type: "vocab", front: "nosotros", reading: "nosotros", meaning: "we", example: { jp: "Nosotros somos amigos.", en: "We're friends." }, drill: { jp: "Nosotros estamos aquí", en: "We are here" }, accept: ["us"], hint: "somos = \"we are\" — the nosotros form of the verb in Lesson 1. A group of women is nosotras." },
        { id: "es-u12l3-ellos", type: "vocab", front: "ellos", reading: "ellos", meaning: "they", example: { jp: "Ellos son buenos amigos.", en: "They're good friends." }, drill: { jp: "Ellos son de España", en: "They are from Spain" }, accept: ["them"] },
        { id: "es-u12l3-ellas", type: "vocab", front: "ellas", reading: "ellas", meaning: "they (all women)", example: { jp: "Ellas son mis hermanas.", en: "They're my sisters." }, drill: { jp: "Ellas son mis amigas", en: "They are my friends" }, accept: ["them", "they"], hint: "Spanish splits \"they\": ellas only when every one of them is female, ellos for a group of men OR any mixed group. One man in the room and it's ellos." },
        { id: "es-u12l3-nosotras", type: "vocab", front: "nosotras", reading: "nosotras", meaning: "we (all women)", example: { jp: "Nosotras somos hermanas.", en: "We're sisters." }, drill: { jp: "Nosotras estamos en el parque", en: "We are in the park" }, accept: ["us"], hint: "Same split as ellos/ellas, one person closer: nosotras only when the whole group is female, nosotros otherwise." },
      ],
    },
    {
      id: "es-u12l4",
      unit: 12,
      lesson: 4,
      title: "Estoy, estás, está",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where someone or something is, for every person: estoy en casa, estás en el parque, la tienda está en la calle.",
      items: [
        { id: "es-u12l4-estamos", type: "vocab", front: "estamos", reading: "estamos", meaning: "we are (somewhere)", example: { jp: "Estamos en el parque.", en: "We're in the park." }, drill: { jp: "Estamos en la ciudad", en: "We are in the city" }, accept: ["we're"] },
        { id: "es-u12l4-estas", type: "vocab", front: "estás", reading: "estas", meaning: "you are (somewhere)", example: { jp: "¿Dónde estás?", en: "Where are you?" }, drill: { jp: "Estás en el hospital", en: "You are in the hospital" }, accept: ["you're"], hint: "The whole set, one verb: estoy, estás, está, estamos, están. \"¿Dónde estás?\" is the text message you'll send most." },
        { id: "es-u12l4-estoy", type: "vocab", front: "estoy", reading: "estoy", meaning: "I am (here / like this)", example: { jp: "Estoy en casa.", en: "I'm at home." }, drill: { jp: "Estoy en la biblioteca", en: "I'm in the library" }, accept: ["i am", "i'm"], hint: "Spanish has TWO verbs for \"to be\". soy/es/son say what something IS; estoy/estás/está say where it is or how it is right now." },
        { id: "es-u12l4-esta", type: "vocab", front: "está", reading: "esta", meaning: "is (in a place / in a state)", example: { jp: "La escuela está en la ciudad.", en: "The school is in the city." }, drill: { jp: "Mi madre está en casa", en: "My mother is at home" }, accept: ["he is", "she is", "it is"], hint: "está with an accent = is located / is feeling. esta without one = \"this\" (Lesson 1)." },
        { id: "es-u12l4-estan", type: "vocab", front: "están", reading: "estan", meaning: "are (in a place / in a state)", example: { jp: "Los médicos están en el hospital.", en: "The doctors are at the hospital." }, drill: { jp: "Mis padres están en México", en: "My parents are in Mexico" }, accept: ["they are"] },
        { id: "es-u12l4-estar", type: "vocab", front: "estar", reading: "estar", meaning: "to be (in a place)", example: { jp: "Es bueno estar en casa.", en: "It's good to be at home." }, drill: { jp: "Estar en casa es tranquilo", en: "Being at home is calm" }, accept: ["be", "to be"], hint: "The name of the verb all five forms above belong to. A dictionary lists estar; a sentence uses estoy, estás, está, estamos, están." },
      ],
    },
  ],
};
