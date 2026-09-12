// DE Unit 3 — Introducing yourself (slot: introductions) — A1
// Conventions and the FREE list live in de/unit1.js — read that header first.
// Everything here is nominative; the case system is u12–u14's. The personal
// pronouns are taught in their SUBJECT forms only (ich, du, er, sie, wir, ihr,
// Sie) — mich/mir and dich/dir belong with the cases and are not opened here.
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT3 = {
  id: "de-u3",
  lang: "de",
  title: "Sich vorstellen",
  order: 3,
  stage: "a1",
  lessons: [
    {
      id: "de-u3l1",
      unit: 3,
      lesson: 1,
      title: "Ich bin, du bist",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say who you are, ask someone their name, and give your own: Ich heiße Anna.",
      items: [
        { id: "de-u3l1-ich", type: "vocab", front: "ich", reading: "ich", meaning: "I", example: { jp: "Ich bin Anna.", en: "I am Anna." }, accept: ["I"], hint: "Said with the soft ch of sprechen: ISH. Only capitalised at the start of a sentence — German does not capitalise it the way English does." },
        { id: "de-u3l1-bin", type: "vocab", front: "bin", reading: "bin", meaning: "am", example: { jp: "Ich bin hier.", en: "I am here." }, accept: ["am", "I am"], hint: "Goes only with ich. sein is wildly irregular — ich bin, du bist, er ist, wir sind — so each form is learned as its own word." },
        { id: "de-u3l1-du", type: "vocab", front: "du", reading: "du", meaning: "you (informal)", example: { jp: "Du bist sehr schnell.", en: "You are very fast." }, accept: ["you", "you informal"], hint: "For friends, family, children and fellow students. Using it with a stranger is a real misstep — see Sie in lesson 3." },
        { id: "de-u3l1-bist", type: "vocab", front: "bist", reading: "bist", meaning: "you are", example: { jp: "Bist du müde?", en: "Are you tired?" }, accept: ["you are", "are"], hint: "Goes only with du. To ask a question, put the verb first: Du bist müde → Bist du müde?" },
        { id: "de-u3l1-heissen", type: "vocab", front: "heißen", reading: "heissen", meaning: "to be called", example: { jp: "Ich heiße Thomas.", en: "My name is Thomas." }, drill: { jp: "Wir heißen Anna und Thomas", en: "We are called Anna and Thomas" }, accept: ["to be called", "to be named", "be called"], hint: "German says \"I am called\", not \"my name is\": ich heiße, du heißt, er heißt. Another ß word — type it heissen." },
        { id: "de-u3l1-dername", type: "vocab", front: "der Name", reading: "dername", meaning: "name", example: { jp: "Der Name ist schön.", en: "The name is beautiful." }, accept: ["name", "the name"], hint: "Masculine. In practice Germans ask Wie heißt du? far more often than they ask for der Name." },
      ],
    },
    {
      id: "de-u3l2",
      unit: 3,
      lesson: 2,
      title: "Woher kommst du?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask and say where someone comes from and where they live, and name the language you speak.",
      items: [
        { id: "de-u3l2-woher", type: "vocab", front: "woher", reading: "woher", meaning: "where from", example: { jp: "Woher kommst du?", en: "Where do you come from?" }, accept: ["where from", "from where"], hint: "wo = where, woher = where FROM, wohin = where TO. German keeps the three apart where English uses \"where\" for all of them." },
        { id: "de-u3l2-wo", type: "vocab", front: "wo", reading: "wo", meaning: "where", example: { jp: "Wo wohnst du?", en: "Where do you live?" }, accept: ["where"], hint: "For position, not movement. Do not confuse it with English \"who\" — German wo is where." },
        { id: "de-u3l2-wie", type: "vocab", front: "wie", reading: "wie", meaning: "how", example: { jp: "Wie heißt du?", en: "What is your name?" }, accept: ["how", "what"], hint: "Wie heißt du? is literally \"how are you called\" — German uses wie where English uses what." },
        { id: "de-u3l2-kommen", type: "vocab", front: "kommen", reading: "kommen", meaning: "to come", example: { jp: "Ich komme aus Berlin.", en: "I come from Berlin." }, drill: { jp: "Wir kommen aus Berlin", en: "We come from Berlin" }, accept: ["to come", "come"], hint: "ich komme, du kommst, er kommt. The -e, -st, -t endings are the regular pattern for nearly every German verb." },
        { id: "de-u3l2-aus", type: "vocab", front: "aus", reading: "aus", meaning: "from", example: { jp: "Anna kommt aus Wien.", en: "Anna comes from Vienna." }, accept: ["from", "out of"], hint: "For origin: aus Berlin, aus Deutschland. Pairs with kommen almost every time you introduce yourself." },
        { id: "de-u3l2-deutsch", type: "vocab", front: "Deutsch", reading: "deutsch", meaning: "German (the language)", example: { jp: "Wir sprechen Deutsch.", en: "We speak German." }, accept: ["German", "the German language"], hint: "Capitalised as a language name. Deutschland is the country; auf Deutsch means \"in German\"." },
      ],
    },
    {
      id: "de-u3l3",
      unit: 3,
      lesson: 3,
      title: "Du und Sie",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Choose between informal du and formal Sie, talk about other people, and say that something is not the case.",
      items: [
        { id: "de-u3l3-sieformal", type: "vocab", front: "Sie", reading: "sie", meaning: "you (formal)", example: { jp: "Woher kommen Sie?", en: "Where do you come from?" }, accept: ["you", "you formal", "you polite"], hint: "Always capitalised, and it takes the same verb form as wir: Sie kommen. Use it with any adult stranger until they offer du." },
        { id: "de-u3l3-er", type: "vocab", front: "er", reading: "er", meaning: "he", example: { jp: "Er ist Max und er wohnt hier.", en: "He is Max and he lives here." }, accept: ["he", "it"], hint: "Also \"it\" for any masculine noun: der Tisch → er. German pronouns follow grammatical gender, not biology." },
        { id: "de-u3l3-sie", type: "vocab", front: "sie", reading: "sie", meaning: "she / they", example: { jp: "Sie heißt Lena.", en: "She is called Lena." }, accept: ["she", "they", "it"], hint: "Lowercase sie is she OR they — the verb tells you which: sie heißt (she), sie heißen (they). Capital Sie is formal you." },
        { id: "de-u3l3-wir", type: "vocab", front: "wir", reading: "wir", meaning: "we", example: { jp: "Wir sind hier zusammen.", en: "We are here together." }, accept: ["we"], hint: "wir takes the plain infinitive ending -en: wir kommen, wir wohnen, wir sprechen." },
        { id: "de-u3l3-ihr", type: "vocab", front: "ihr", reading: "ihr", meaning: "you (plural, informal)", example: { jp: "Wo wohnt ihr?", en: "Where do you all live?" }, accept: ["you plural", "you all", "you"], hint: "du to one friend, ihr to several. English lost this distinction; German still needs it." },
        { id: "de-u3l3-nicht", type: "vocab", front: "nicht", reading: "nicht", meaning: "not", example: { jp: "Das ist nicht gut.", en: "That is not good." }, accept: ["not"], hint: "Negates a verb or an adjective and usually sits late in the sentence. To negate a NOUN you need kein instead — as in kein Problem." },
      ],
    },
    {
      id: "de-u3l4",
      unit: 3,
      lesson: 4,
      title: "Beruf und Alter",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you do for a living or study, ask someone's age, and add that you are the same.",
      items: [
        { id: "de-u3l4-derberuf", type: "vocab", front: "der Beruf", reading: "derberuf", meaning: "profession", example: { jp: "Der Beruf ist interessant.", en: "The profession is interesting." }, accept: ["profession", "job", "occupation", "the job"], hint: "Was sind Sie von Beruf? is the standard way to ask what someone does." },
        { id: "de-u3l4-arbeiten", type: "vocab", front: "arbeiten", reading: "arbeiten", meaning: "to work", example: { jp: "Ich arbeite hier.", en: "I work here." }, drill: { jp: "Anna und Thomas arbeiten hier", en: "Anna and Thomas work here" }, accept: ["to work", "work"], hint: "Stems ending in -t add an extra e so you can say them: du arbeitest, er arbeitet — not arbeitst." },
        { id: "de-u3l4-studieren", type: "vocab", front: "studieren", reading: "studieren", meaning: "to study", example: { jp: "Lena studiert Musik.", en: "Lena studies music." }, drill: { jp: "Wir studieren hier zusammen", en: "We study here together" }, accept: ["to study", "study"], hint: "Only at university. School study is lernen. Verbs in -ieren are almost all borrowings and all regular." },
        { id: "de-u3l4-alt", type: "vocab", front: "alt", reading: "alt", meaning: "old", example: { jp: "Wie alt bist du?", en: "How old are you?" }, accept: ["old", "aged"], hint: "Wie alt bist du? is the everyday way to ask an age — German has no separate verb for it." },
        { id: "de-u3l4-jung", type: "vocab", front: "jung", reading: "jung", meaning: "young", example: { jp: "Max ist jung und schnell.", en: "Max is young and fast." }, accept: ["young"], hint: "YOONG, with the y of yes. The opposite of alt." },
        { id: "de-u3l4-auch", type: "vocab", front: "auch", reading: "auch", meaning: "also / too", example: { jp: "Ich bin auch müde.", en: "I am tired too." }, accept: ["also", "too", "as well"], hint: "Sits right before the word it adds to: ich auch (me too), auch gut (good as well). The throaty ch of Buch." },
      ],
    },
  ],
};
