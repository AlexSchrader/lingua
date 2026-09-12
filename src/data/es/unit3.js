// ES Unit 3 — Introducing yourself (slot: self) — A1
// ─────────────────────────────────────────────────────────────────────────────
// Everything you need for the first two minutes of a conversation: your name,
// where you are from, what you do, and the same three questions asked back. The
// verbs arrive as person-marked chunks (soy / eres, hablo / hablas) rather than
// infinitives — that is the deliberate A1 simplification recorded in unit1.js;
// the infinitive belongs with the grammar units. Conventions: see es/unit1.js.
// NOTE: "un poco" is taught here as a fixed chunk, before un/una are formally
// taught in Unit 4. That is intentional — it is learned whole, like mucho gusto.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT3 = {
  id: "es-u3",
  lang: "es",
  title: "Presentarse",
  order: 3,
  stage: "a1",
  lessons: [
    // Lesson 1: your name, and the two ways to say "you"
    {
      id: "es-u3l1",
      unit: 3,
      lesson: 1,
      title: "My name is",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Give your name and ask for someone else's — me llamo, ¿cómo te llamas? — and choose between casual tú and polite usted.",
      items: [
        { id: "es-u3l1-mellamo", type: "vocab", front: "me llamo", reading: "mellamo", meaning: "my name is", example: { jp: "Me llamo Ana.", en: "My name is Ana." }, drill: { jp: "Me llamo Ana", en: "My name is Ana" }, accept: ["i'm called", "i am called", "my name's"], hint: "Literally \"I call myself\". Those ll's take the y sound: me YA-mo." },
        { id: "es-u3l1-comotellamas", type: "vocab", front: "cómo te llamas", reading: "comotellamas", meaning: "what's your name", example: { jp: "¿Cómo te llamas?", en: "What's your name?" }, drill: { jp: "Hola cómo te llamas", en: "Hello what's your name" }, accept: ["what is your name", "what are you called"], hint: "Literally \"how do you call yourself\". Casual, to a tú — the polite form is ¿cómo se llama usted?" },
        { id: "es-u3l1-elnombre", type: "vocab", front: "el nombre", reading: "elnombre", meaning: "name", example: { jp: "Mi nombre es Ana.", en: "My name is Ana." }, drill: { jp: "El nombre de la amiga de Ana", en: "The name of Ana’s friend" }, accept: ["the name", "first name"], hint: "Your first name. The surname is el apellido — and Spanish speakers carry two, one from each parent." },
        { id: "es-u3l1-yo", type: "vocab", front: "yo", reading: "yo", meaning: "I", example: { jp: "Yo soy Ana.", en: "I'm Ana." }, drill: { jp: "Yo soy de México", en: "I am from Mexico" }, accept: ["me"], hint: "Usually left out, because soy already says \"I am\". You put yo back in for emphasis or contrast." },
        { id: "es-u3l1-soy", type: "vocab", front: "soy", reading: "soy", meaning: "I am", example: { jp: "Soy de México.", en: "I'm from Mexico." }, drill: { jp: "Soy de España", en: "I'm from Spain" }, accept: ["i'm"], hint: "The \"I\" form of the same verb as es. Yo soy, tú eres, él es — worth learning as a set." },
        { id: "es-u3l1-usted", type: "vocab", front: "usted", reading: "usted", meaning: "you (formal)", example: { jp: "¿Y usted, señor?", en: "And you, sir?" }, drill: { jp: "Y usted señor", en: "And you sir" }, accept: ["you polite", "you"], hint: "The polite you — strangers, elders, officials. Oddly, it takes the same verb form as he/she: usted es." },
      ],
    },
    // Lesson 2: where you are from
    {
      id: "es-u3l2",
      unit: 3,
      lesson: 2,
      title: "Where are you from?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask and answer where someone is from — ¿de dónde eres? soy de… — and name the country and the two languages in the room.",
      items: [
        { id: "es-u3l2-donde", type: "vocab", front: "dónde", reading: "donde", meaning: "where", example: { jp: "¿De dónde eres?", en: "Where are you from?" }, drill: { jp: "De dónde eres tú", en: "Where are you from" }, accept: ["where?", "whereabouts"], hint: "Question words carry an accent — dónde, qué, cómo — and questions open with the upside-down ¿." },
        { id: "es-u3l2-eres", type: "vocab", front: "eres", reading: "eres", meaning: "you are", example: { jp: "¿Eres de España?", en: "Are you from Spain?" }, drill: { jp: "Eres de España", en: "You're from Spain" }, accept: ["you're"], hint: "The tú form of soy. To ask a question you keep the same words and just raise your voice — Spanish needs no do or are." },
        { id: "es-u3l2-elpais", type: "vocab", front: "el país", reading: "elpais", meaning: "country", example: { jp: "¿De qué país eres?", en: "What country are you from?" }, drill: { jp: "El país es enorme", en: "The country is enormous" }, accept: ["the country", "nation"], hint: "The accent on the í splits the vowels apart: pa-ÍS, two syllables, not \"pice\"." },
        { id: "es-u3l2-elespanol", type: "vocab", front: "el español", reading: "elespanol", meaning: "Spanish", example: { jp: "El español es fantástico.", en: "Spanish is fantastic." }, drill: { jp: "El español es fantástico", en: "Spanish is fantastic" }, accept: ["the spanish language", "spaniard", "spanish"], hint: "Languages are lowercase in Spanish. El español is also \"a Spanish man\" — and in much of Latin America the language is called el castellano." },
        { id: "es-u3l2-elingles", type: "vocab", front: "el inglés", reading: "elingles", meaning: "English", example: { jp: "El inglés es importante.", en: "English is important." }, drill: { jp: "El inglés es importante", en: "English is important" }, accept: ["the english language", "englishman", "english"], hint: "Lowercase too, and stressed on the last syllable: in-GLÉS." },
        { id: "es-u3l2-elmundo", type: "vocab", front: "el mundo", reading: "elmundo", meaning: "world", example: { jp: "El mundo es enorme.", en: "The world is enormous." }, drill: { jp: "El mundo es enorme", en: "The world is enormous" }, accept: ["the world", "earth"], hint: "Todo el mundo — \"all the world\" — is the everyday way to say \"everybody\"." },
      ],
    },
    // Lesson 3: what you do — the -o ending that means "I"
    {
      id: "es-u3l3",
      unit: 3,
      lesson: 3,
      title: "What I do",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you speak, where you live and where you work — hablo, vivo, trabajo — and soften any of it with un poco.",
      items: [
        { id: "es-u3l3-hablo", type: "vocab", front: "hablo", reading: "hablo", meaning: "I speak", example: { jp: "Hablo español.", en: "I speak Spanish." }, drill: { jp: "Hablo español y inglés", en: "I speak Spanish and English" }, accept: ["i talk", "i am speaking", "i do speak"], hint: "That final -o is \"I\" on almost every Spanish verb: hablo, vivo, trabajo, como, bebo." },
        { id: "es-u3l3-vivo", type: "vocab", front: "vivo", reading: "vivo", meaning: "I live", example: { jp: "Vivo en España.", en: "I live in Spain." }, drill: { jp: "Vivo en México", en: "I live in Mexico" }, accept: ["i am living", "i reside"], hint: "Remember the v sounds close to a b: BEE-bo." },
        { id: "es-u3l3-trabajo", type: "vocab", front: "trabajo", reading: "trabajo", meaning: "I work", example: { jp: "Trabajo en el museo.", en: "I work at the museum." }, drill: { jp: "Trabajo en el museo", en: "I work at the museum" }, accept: ["i am working", "my job", "work"], hint: "Also the noun: el trabajo is the job. And that j is the throaty one — tra-BA-ho." },
        { id: "es-u3l3-en", type: "vocab", front: "en", reading: "en", meaning: "in", example: { jp: "Vivo en México.", en: "I live in Mexico." }, drill: { jp: "Vivo en Madrid", en: "I live in Madrid" }, accept: ["on", "at", "into"], hint: "One little word covering in, on and at. Spanish does not split them the way English does." },
        { id: "es-u3l3-tambien", type: "vocab", front: "también", reading: "tambien", meaning: "also", example: { jp: "Hablo inglés también.", en: "I speak English too." }, drill: { jp: "Hablo inglés también", en: "I speak English too" }, accept: ["too", "as well", "likewise"], hint: "Fits at either end: también hablo español, or hablo español también." },
        { id: "es-u3l3-unpoco", type: "vocab", front: "un poco", reading: "unpoco", meaning: "a little", example: { jp: "Hablo un poco de español.", en: "I speak a little Spanish." }, drill: { jp: "Hablo un poco de español", en: "I speak a little Spanish" }, accept: ["a bit", "a little bit", "slightly"], hint: "The great softener. Add de to attach it to a noun: un poco de café." },
      ],
    },
    // Lesson 4: the same questions, aimed back
    {
      id: "es-u3l4",
      unit: 3,
      lesson: 4,
      title: "Asking someone else",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Turn your own sentences into questions — ¿hablas? ¿vives? ¿trabajas? — and talk about mi amigo and mi amiga.",
      items: [
        { id: "es-u3l4-hablas", type: "vocab", front: "hablas", reading: "hablas", meaning: "you speak", example: { jp: "¿Hablas español?", en: "Do you speak Spanish?" }, drill: { jp: "Hablas español muy bien", en: "You speak Spanish very well" }, accept: ["do you speak", "you talk", "are you speaking"], hint: "-o is I, -as is you. Learn them as a pair: hablo / hablas." },
        { id: "es-u3l4-vives", type: "vocab", front: "vives", reading: "vives", meaning: "you live", example: { jp: "¿Dónde vives?", en: "Where do you live?" }, drill: { jp: "Dónde vives tú", en: "Where do you live" }, accept: ["do you live", "you are living"], hint: "Same swap: vivo / vives. The -es ending belongs to verbs whose infinitive ends in -er or -ir." },
        { id: "es-u3l4-trabajas", type: "vocab", front: "trabajas", reading: "trabajas", meaning: "you work", example: { jp: "¿Dónde trabajas?", en: "Where do you work?" }, drill: { jp: "Trabajas en el museo", en: "You work at the museum" }, accept: ["do you work", "you are working"], hint: "trabajo / trabajas. Notice there is no \"do\" anywhere in the Spanish question." },
        { id: "es-u3l4-elamigo", type: "vocab", front: "el amigo", reading: "elamigo", meaning: "friend (male)", example: { jp: "Mi amigo es de México.", en: "My friend is from Mexico." }, drill: { jp: "El amigo de Ana es de México", en: "Ana’s friend is from Mexico" }, accept: ["the friend", "buddy", "male friend"], hint: "g before o is the hard g of \"go\": a-MEE-go." },
        { id: "es-u3l4-laamiga", type: "vocab", front: "la amiga", reading: "laamiga", meaning: "friend (female)", example: { jp: "Mi amiga es de España.", en: "My friend is from Spain." }, drill: { jp: "La amiga de Pablo es de España", en: "Pablo’s friend is from Spain" }, accept: ["the friend", "female friend"], hint: "Same word, feminine ending. Spanish marks your friend's gender whether you meant to or not." },
        { id: "es-u3l4-mi", type: "vocab", front: "mi", reading: "mi", meaning: "my", example: { jp: "Mi amigo es muy elegante.", en: "My friend is very elegant." }, drill: { jp: "Mi amigo es elegante", en: "My friend is elegant" }, accept: ["mine"], hint: "No accent — mi is \"my\", mí with an accent is \"me\". For more than one thing it becomes mis." },
      ],
    },
  ],
};
