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
      title: "Esto es...",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Point at something and say what it is: esto es agua, eso no es café, María y Pablo son amigos.",
      items: [
        { id: "es-u12l1-esto", type: "vocab", front: "esto", reading: "esto", meaning: "this", example: { jp: "Esto es agua.", en: "This is water." }, accept: ["this thing", "this one"], hint: "esto points at a thing whose name you don't know yet — \"what's this?\". Once you name it you switch to este/esta." },
        { id: "es-u12l1-eso", type: "vocab", front: "eso", reading: "eso", meaning: "that", example: { jp: "Eso no es café.", en: "That isn't coffee." }, accept: ["that thing", "that one"] },
        { id: "es-u12l1-este", type: "vocab", front: "este", reading: "este", meaning: "this (with a masculine word)", example: { jp: "Este pan es muy bueno.", en: "This bread is very good." }, accept: ["this"], hint: "este goes in front of a masculine noun, esta in front of a feminine one: este pan, esta casa." },
        { id: "es-u12l1-esta", type: "vocab", front: "esta", reading: "esta", meaning: "this (with a feminine word)", example: { jp: "Esta casa es pequeña.", en: "This house is small." }, accept: ["this"], hint: "esta goes in front of a feminine noun: esta casa, esta semana. Careful: está with an accent is a different word (Lesson 4)." },
        { id: "es-u12l1-es", type: "vocab", front: "es", reading: "es", meaning: "is", example: { jp: "El café es bueno.", en: "The coffee is good." }, accept: ["it is", "he is", "she is"], hint: "One word covers is / he is / she is / it is — Spanish leaves the subject out when it's obvious." },
        { id: "es-u12l1-son", type: "vocab", front: "son", reading: "son", meaning: "are", example: { jp: "María y Pablo son amigos.", en: "María and Pablo are friends." }, accept: ["they are"] },
      ],
    },
    {
      id: "es-u12l2",
      unit: 12,
      lesson: 2,
      title: "El, la, un, una",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Put the right \"the\" and \"a\" in front of a word: el pan, la casa, los amigos, las manos, un parque, una escuela.",
      items: [
        { id: "es-u12l2-el", type: "vocab", front: "el", reading: "el", meaning: "the (masculine)", example: { jp: "El médico es bueno.", en: "The doctor is good." }, accept: ["the"], hint: "Every Spanish noun is masculine or feminine, and the word for \"the\" tells you which. That's why words are always learned WITH their article: el pan, la casa." },
        { id: "es-u12l2-la", type: "vocab", front: "la", reading: "la", meaning: "the (feminine)", example: { jp: "La casa es grande.", en: "The house is big." }, accept: ["the"] },
        { id: "es-u12l2-los", type: "vocab", front: "los", reading: "los", meaning: "the (masculine plural)", example: { jp: "Los amigos son buenos.", en: "The friends are good." }, accept: ["the"], hint: "Plural: el -> los, la -> las. The noun takes an -s too: el amigo -> los amigos." },
        { id: "es-u12l2-las", type: "vocab", front: "las", reading: "las", meaning: "the (feminine plural)", example: { jp: "Las manos son pequeñas.", en: "The hands are small." }, accept: ["the"] },
        { id: "es-u12l2-un", type: "vocab", front: "un", reading: "un", meaning: "a (masculine)", example: { jp: "Es un parque grande.", en: "It's a big park." }, accept: ["an", "one"] },
        { id: "es-u12l2-una", type: "vocab", front: "una", reading: "una", meaning: "a (feminine)", example: { jp: "Es una escuela nueva.", en: "It's a new school." }, accept: ["an", "one"] },
      ],
    },
    {
      id: "es-u12l3",
      unit: 12,
      lesson: 3,
      title: "Yo, tú, él",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name who you are talking about: yo, tú, él, ella, nosotros, ellos.",
      items: [
        { id: "es-u12l3-yo", type: "vocab", front: "yo", reading: "yo", meaning: "I", example: { jp: "Yo soy María. ¿Y tú?", en: "I'm María. And you?" }, accept: ["me"], hint: "Spanish usually DROPS the pronoun — the verb ending already says who. yo is for emphasis or contrast: yo sí, él no." },
        { id: "es-u12l3-tu", type: "vocab", front: "tú", reading: "tu", meaning: "you", example: { jp: "Tú eres el médico, ¿no?", en: "You're the doctor, right?" }, accept: ["you (informal)"], hint: "eres is the tú form of es. And note the accent: tú is the person, tu without one means \"your\" (Unit 14) — same sound, different job." },
        { id: "es-u12l3-el", type: "vocab", front: "él", reading: "el", meaning: "he", example: { jp: "Él es el médico.", en: "He's the doctor." }, accept: ["him"], hint: "él with an accent is \"he\"; el without one is \"the\". The accent is the only difference." },
        { id: "es-u12l3-ella", type: "vocab", front: "ella", reading: "ella", meaning: "she", example: { jp: "Ella es una amiga.", en: "She's a friend." }, accept: ["her"] },
        { id: "es-u12l3-nosotros", type: "vocab", front: "nosotros", reading: "nosotros", meaning: "we", example: { jp: "Nosotros somos amigos.", en: "We're friends." }, accept: ["us"], hint: "somos = \"we are\" — the nosotros form of the verb in Lesson 1. A group of women is nosotras." },
        { id: "es-u12l3-ellos", type: "vocab", front: "ellos", reading: "ellos", meaning: "they", example: { jp: "Ellos son buenos amigos.", en: "They're good friends." }, accept: ["them"] },
      ],
    },
    {
      id: "es-u12l4",
      unit: 12,
      lesson: 4,
      title: "Hay y está",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what exists and where it is: hay un parque en la ciudad, la tienda está en la calle, estamos en casa.",
      items: [
        { id: "es-u12l4-hay", type: "vocab", front: "hay", reading: "hay", meaning: "there is", example: { jp: "Hay un parque en la ciudad.", en: "There's a park in the city." }, accept: ["there are", "there's"], hint: "One word for both \"there is\" and \"there are\", and it never changes: hay un café, hay dos cafés. The negative is just no hay: no hay pan." },
        { id: "es-u12l4-estamos", type: "vocab", front: "estamos", reading: "estamos", meaning: "we are (somewhere)", example: { jp: "Estamos en el parque.", en: "We're in the park." }, accept: ["we're"] },
        { id: "es-u12l4-en", type: "vocab", front: "en", reading: "en", meaning: "in", example: { jp: "La tienda está en la calle.", en: "The shop is on the street." }, accept: ["on", "at"], hint: "en covers English in, on and at: en la casa, en la ciudad, en la escuela." },
        { id: "es-u12l4-estoy", type: "vocab", front: "estoy", reading: "estoy", meaning: "I am (here / like this)", example: { jp: "Estoy en casa.", en: "I'm at home." }, accept: ["i am", "i'm"], hint: "Spanish has TWO verbs for \"to be\". soy/es/son say what something IS; estoy/está/están say where it is or how it is right now." },
        { id: "es-u12l4-esta", type: "vocab", front: "está", reading: "esta", meaning: "is (in a place / in a state)", example: { jp: "La escuela está en la ciudad.", en: "The school is in the city." }, accept: ["he is", "she is", "it is"], hint: "está with an accent = is located / is feeling. esta without one = \"this\" (Lesson 1)." },
        { id: "es-u12l4-estan", type: "vocab", front: "están", reading: "estan", meaning: "are (in a place / in a state)", example: { jp: "Los médicos están en el hospital.", en: "The doctors are at the hospital." }, accept: ["they are"] },
      ],
    },
  ],
};
