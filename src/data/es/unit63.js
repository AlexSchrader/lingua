// ES Unit 63 — Experiencia y memoria (slot: experience-memory) — B1
// ─────────────────────────────────────────────────────────────────────────────
// The last thematic unit of B1 block 1. A2 gave the learner to remember and
// forget (recordar, olvidar, el recuerdo) and to live (vivir, la experiencia).
// B1 adds the machinery of memory (la memoria, acordarse, memorizar), the stages
// of a life, the vocabulary of looking back (nostalgia, añorar, la vivencia), and
// what leaves a mark on us. Examples stay indicative and past-tense-simple,
// leaning on the A2 preterite the learner owns. Every A2 memory/life word is used
// and re-taught nowhere.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT63 = {
  id: "es-u63",
  lang: "es",
  title: "Experiencia y memoria",
  order: 63,
  stage: "b1",
  lessons: [
    {
      id: "es-u63l1",
      unit: 63,
      lesson: 1,
      title: "Remembering and forgetting",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about memory itself — la memoria, acordarse, memorizar, olvidarse, familiar, evocar.",
      items: [
        { id: "es-u63l1-lamemoria", type: "vocab", front: "la memoria", reading: "lamemoria", meaning: "memory", example: { jp: "Mi abuela tiene muy buena memoria para las fechas.", en: "My grandmother has a very good memory for dates." }, accept: ["the recall"], hint: "The faculty of memory (not a single memory — that's el recuerdo, A2). De memoria = by heart: aprender de memoria." },
        { id: "es-u63l1-acordarse", type: "vocab", front: "acordarse", reading: "acordarse", meaning: "to remember", example: { jp: "No me acuerdo de su nombre, lo siento.", en: "I don't remember his name, sorry." }, accept: ["to recall"], hint: "acordarse DE algo. The o becomes ue: me acuerdo. The same as recordar (A2), but always reflexive and with de." },
        { id: "es-u63l1-memorizar", type: "vocab", front: "memorizar", reading: "memorizar", meaning: "to memorize", example: { jp: "Tuve que memorizar toda la lista de palabras.", en: "I had to memorize the whole list of words." }, accept: ["to learn by heart"], hint: "From la memoria. To commit to memory on purpose. la lista is A2." },
        { id: "es-u63l1-olvidarse", type: "vocab", front: "olvidarse", reading: "olvidarse", meaning: "to forget", example: { jp: "Se me olvidó por completo la reunión de ayer.", en: "I completely forgot yesterday's meeting." }, accept: ["to slip one's mind"], hint: "se me olvidó = it slipped my mind (the blame-free form). Reflexive of olvidar (A1). por completo is u53." },
        { id: "es-u63l1-familiar", type: "vocab", front: "familiar", reading: "familiar", meaning: "familiar", example: { jp: "Su cara me resulta familiar, pero no sé de qué.", en: "His face looks familiar to me, but I don't know from where." }, accept: ["known", "relative"], hint: "Known, recognizable — from la familia (A1). Me resulta familiar = it rings a bell. As a noun, un familiar = a relative." },
        { id: "es-u63l1-evocar", type: "vocab", front: "evocar", reading: "evocar", meaning: "to evoke", example: { jp: "Esa canción evoca mi infancia en el pueblo.", en: "That song evokes my childhood in the village." }, accept: ["to bring to mind", "to recall"], hint: "For a smell, a song, a place to bring back a memory. la canción is A2, la infancia is l2." },
      ],
    },
    {
      id: "es-u63l2",
      unit: 63,
      lesson: 2,
      title: "The stages of a life",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the phases of a life — la infancia, la juventud, la vejez, madurar, el adulto, la generación.",
      items: [
        { id: "es-u63l2-lainfancia", type: "vocab", front: "la infancia", reading: "lainfancia", meaning: "childhood", example: { jp: "Pasó toda su infancia en un pueblo pequeño.", en: "He spent his whole childhood in a small village." }, accept: ["the early years"], hint: "The years of being a child. Un amigo de la infancia = a childhood friend." },
        { id: "es-u63l2-lajuventud", type: "vocab", front: "la juventud", reading: "lajuventud", meaning: "youth", example: { jp: "En su juventud viajó por todo el mundo.", en: "In his youth he travelled all over the world." }, accept: ["young age", "young people"], hint: "The time of being young — and also young people as a group: la juventud de hoy. From joven." },
        { id: "es-u63l2-lavejez", type: "vocab", front: "la vejez", reading: "lavejez", meaning: "old age", example: { jp: "Quiere pasar la vejez cerca del mar.", en: "She wants to spend her old age near the sea." }, accept: ["the later years"], hint: "The last stage of life. From viejo (A1). The opposite end from la infancia." },
        { id: "es-u63l2-madurar", type: "vocab", front: "madurar", reading: "madurar", meaning: "to mature", example: { jp: "Ha madurado mucho desde que se fue de casa.", en: "He's matured a lot since he left home." }, accept: ["to grow up", "to ripen"], hint: "To grow up in character — and for fruit to ripen. From maduro, ripe/mature." },
        { id: "es-u63l2-eladulto", type: "vocab", front: "el adulto", reading: "eladulto", meaning: "adult", example: { jp: "De adulto, apenas ve a sus amigos del colegio.", en: "As an adult, he barely sees his school friends." }, accept: ["the grown-up"], hint: "De adulto = as an adult. As an adjective: la vida adulta. apenas is A2, el colegio (school) is common." },
        { id: "es-u63l2-lageneracion", type: "vocab", front: "la generación", reading: "lageneracion", meaning: "generation", example: { jp: "Cada generación vive de una manera distinta.", en: "Each generation lives in a different way." }, accept: ["the age group"], hint: "All the people born around the same time. La generación de mis padres = my parents' generation." },
      ],
    },
    {
      id: "es-u63l3",
      unit: 63,
      lesson: 3,
      title: "Looking back",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the past with feeling — el pasado, la nostalgia, añorar, la vivencia, la anécdota, aquel.",
      items: [
        { id: "es-u63l3-elpasado", type: "vocab", front: "el pasado", reading: "elpasado", meaning: "the past", example: { jp: "No sirve de nada vivir en el pasado.", en: "There's no point living in the past." }, accept: ["former times"], hint: "The noun from pasado (u28). No sirve de nada = it's no use. Its pair: el presente, el futuro (u28)." },
        { id: "es-u63l3-lanostalgia", type: "vocab", front: "la nostalgia", reading: "lanostalgia", meaning: "nostalgia", example: { jp: "Siente mucha nostalgia de su país.", en: "She feels a lot of nostalgia for her country." }, accept: ["homesickness", "longing"], hint: "A fond, sad longing for the past or for home. Sentir nostalgia de = to feel nostalgic for." },
        { id: "es-u63l3-anorar", type: "vocab", front: "añorar", reading: "anorar", meaning: "to long for", example: { jp: "Añora los veranos de su niñez en el campo.", en: "She longs for the summers of her childhood in the countryside." }, accept: ["to miss", "to yearn for"], hint: "To miss something deeply — near echar de menos (A2) but more wistful. la niñez (childhood) is close to el niño; el campo is u26." },
        { id: "es-u63l3-lavivencia", type: "vocab", front: "la vivencia", reading: "lavivencia", meaning: "personal experience", example: { jp: "Cada viaje deja una vivencia diferente.", en: "Each trip leaves a different experience." }, accept: ["the life experience"], hint: "A lived experience — more personal than la experiencia (A2). From vivir (A1)." },
        { id: "es-u63l3-laanecdota", type: "vocab", front: "la anécdota", reading: "laanecdota", meaning: "anecdote", example: { jp: "Siempre cuenta la misma anécdota de su viaje.", en: "He always tells the same anecdote from his trip." }, accept: ["the story"], hint: "A short story from real life. contar una anécdota = to tell a story. contar is A2." },
        { id: "es-u63l3-aquel", type: "vocab", front: "aquel", reading: "aquel", meaning: "that (far)", example: { jp: "Aquel verano fue el mejor de mi vida.", en: "That summer was the best of my life." }, accept: ["that (over there)", "that one"], hint: "The far \"that\" — este (here), ese (there), aquel (further, or long ago). Aquella época = that time back then." },
      ],
    },
    {
      id: "es-u63l4",
      unit: 63,
      lesson: 4,
      title: "Leaving a mark",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what stays with you — acostumbrarse, soñar, la huella, marcar, inolvidable, el hábito.",
      items: [
        { id: "es-u63l4-acostumbrarse", type: "vocab", front: "acostumbrarse", reading: "acostumbrarse", meaning: "to get used to", example: { jp: "Poco a poco me acostumbré a la vida en la ciudad.", en: "Little by little I got used to life in the city." }, accept: ["to adapt", "to grow accustomed"], hint: "acostumbrarse A algo. From la costumbre (A2). poco a poco is u40." },
        { id: "es-u63l4-sonar", type: "vocab", front: "soñar", reading: "sonar", meaning: "to dream", example: { jp: "De niño soñaba con ser futbolista.", en: "As a child he dreamed of being a footballer." }, accept: ["to daydream"], hint: "soñar CON algo = to dream of/about. The o becomes ue: sueño. From el sueño (A2, dream/sleep). de niño = as a child." },
        { id: "es-u63l4-lahuella", type: "vocab", front: "la huella", reading: "lahuella", meaning: "mark", example: { jp: "Aquel profesor dejó una huella en todos nosotros.", en: "That teacher left a mark on all of us." }, accept: ["the trace", "footprint"], hint: "dejar huella = to leave a lasting mark. Also a footprint or fingerprint (la huella dactilar). aquel is l3." },
        { id: "es-u63l4-marcar", type: "vocab", front: "marcar", reading: "marcar", meaning: "to mark", example: { jp: "Ese día marcó el resto de su vida.", en: "That day marked the rest of his life." }, accept: ["to shape", "to leave a mark on"], hint: "For an event to shape someone deeply. From la marca. Also to dial a number: marcar el teléfono." },
        { id: "es-u63l4-inolvidable", type: "vocab", front: "inolvidable", reading: "inolvidable", meaning: "unforgettable", example: { jp: "Fue un viaje inolvidable, nunca lo voy a olvidar.", en: "It was an unforgettable trip, I'll never forget it." }, accept: ["memorable"], hint: "in- (un-) + olvidar (A1) + -able: that can't be forgotten. The good kind of memory." },
        { id: "es-u63l4-elhabito", type: "vocab", front: "el hábito", reading: "elhabito", meaning: "habit", example: { jp: "Leer antes de dormir es un buen hábito.", en: "Reading before sleeping is a good habit." }, accept: ["the routine"], hint: "A regular habit — more neutral than la costumbre (A2). Coger el hábito de = to get into the habit of." },
      ],
    },
  ],
};
