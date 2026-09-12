// DE Unit 11 — Der Körper und die Gesundheit (slot: body-health) — A1
// Block 2 (u8–u14). Conventions: see de/unit1.js.
// Untouched by block 1 except der Hunger (u6l4), which the food unit took because
// German HAS hunger rather than IS hungry. This unit takes der Durst the same way,
// so the pair sits together in the learner's head even though it is split across
// two units: Ich habe Hunger / Ich habe Durst.
// One ß front — der Fuß — so its reading is HAND-WRITTEN as "derfuss" per unit1.js.
// Taught the noun der Husten, not the verb husten: one lexeme, one card.
// das Krankenhaus is a compound of krank (this unit) + das Haus (u7). Block 1 set
// the precedent for compounds with der Großvater beside groß; it is the ordinary
// word for hospital and there is no other.
export const DE_UNIT11 = {
  id: "de-u11",
  lang: "de",
  title: "Der Körper und die Gesundheit",
  order: 11,
  stage: "a1",
  lessons: [
    {
      id: "de-u11l1",
      unit: 11,
      lesson: 1,
      title: "Der Kopf",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the parts of the head and say that one of them hurts.",
      items: [
        { id: "de-u11l1-derkopf", type: "vocab", front: "der Kopf", reading: "derkopf", meaning: "head", example: { jp: "Der Kopf tut weh.", en: "My head hurts." }, accept: ["head", "the head"], hint: "German says THE head hurts, not MY head hurts — with a body part the owner is usually left out. Kopfschmerzen is the noun for a headache." },
        { id: "de-u11l1-dasauge", type: "vocab", front: "das Auge", reading: "dasauge", meaning: "eye", example: { jp: "Das Auge ist blau.", en: "The eye is blue." }, accept: ["eye", "the eye"], hint: "OW-ge, with the au of blau (u8). The plural is die Augen, and you normally have two, so that is the form you will meet." },
        { id: "de-u11l1-dienase", type: "vocab", front: "die Nase", reading: "dienase", meaning: "nose", example: { jp: "Die Nase ist kalt.", en: "The nose is cold." }, accept: ["nose", "the nose"], hint: "NAH-ze — that single s between vowels is a z. Almost the English word otherwise." },
        { id: "de-u11l1-dermund", type: "vocab", front: "der Mund", reading: "dermund", meaning: "mouth", example: { jp: "Der Mund ist klein.", en: "The mouth is small." }, accept: ["mouth", "the mouth"], hint: "MOONT — the d hardens to t at the end, the same rule as in Wind (u8). Nothing to do with English mound." },
        { id: "de-u11l1-dasohr", type: "vocab", front: "das Ohr", reading: "dasohr", meaning: "ear", example: { jp: "Das Ohr hört gut.", en: "The ear hears well." }, accept: ["ear", "the ear"], hint: "OHR, one long o with the h silent — it only marks length. Related to hören (u1), which is what the ear does." },
        { id: "de-u11l1-derzahn", type: "vocab", front: "der Zahn", reading: "derzahn", meaning: "tooth", example: { jp: "Der Zahn ist weiß.", en: "The tooth is white." }, accept: ["tooth", "the tooth"], hint: "TSAHN — z is ts, always. The plural umlauts: der Zahn, die Zähne." },
      ],
    },
    {
      id: "de-u11l2",
      unit: 11,
      lesson: 2,
      title: "Der Körper",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the rest of the body from the neck down.",
      items: [
        { id: "de-u11l2-derkoerper", type: "vocab", front: "der Körper", reading: "derkorper", meaning: "body", example: { jp: "Der Körper ist müde.", en: "The body is tired." }, accept: ["body", "the body"], hint: "KÖR-per. The ö is the o of Wolke said with the lips of an e. Type Körper or Korper." },
        { id: "de-u11l2-derhals", type: "vocab", front: "der Hals", reading: "derhals", meaning: "neck / throat", example: { jp: "Der Hals tut weh.", en: "My throat hurts." }, accept: ["neck", "throat", "the neck", "the throat"], hint: "One word for both neck and throat — Hals tut weh is what you say with a sore throat, and German does not distinguish the two." },
        { id: "de-u11l2-diehand", type: "vocab", front: "die Hand", reading: "diehand", meaning: "hand", example: { jp: "Die Hand ist sauber.", en: "The hand is clean." }, accept: ["hand", "the hand"], hint: "HANT, with the d hardened. One of the few German body words that is spelled exactly like its English cousin." },
        { id: "de-u11l2-derarm", type: "vocab", front: "der Arm", reading: "derarm", meaning: "arm", example: { jp: "Der Arm ist lang.", en: "The arm is long." }, accept: ["arm", "the arm"], hint: "Same spelling as English, said with a rolled or throaty r. Careful: arm with a small a is an adjective meaning poor." },
        { id: "de-u11l2-dasbein", type: "vocab", front: "das Bein", reading: "dasbein", meaning: "leg", example: { jp: "Das Bein tut sehr weh.", en: "The leg hurts a lot." }, accept: ["leg", "the leg"], hint: "BYNE, with the ei of nein (u1). A false friend: it is the leg, not the bone — bone is der Knochen." },
        { id: "de-u11l2-derfuss", type: "vocab", front: "der Fuß", reading: "derfuss", meaning: "foot", example: { jp: "Der Fuß ist kalt.", en: "The foot is cold." }, accept: ["foot", "the foot"], hint: "FOOSS, with the ß of weiß (u8). Zu Fuß gehen is to go on foot. Type Fuß or Fuss; both are accepted." },
      ],
    },
    {
      id: "de-u11l3",
      unit: 11,
      lesson: 3,
      title: "Krank und gesund",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say that you are ill or well, and say what hurts.",
      items: [
        { id: "de-u11l3-krank", type: "vocab", front: "krank", reading: "krank", meaning: "ill / sick", example: { jp: "Das Kind ist krank.", en: "The child is ill." }, accept: ["ill", "sick"], hint: "The single most useful word in the unit. It also builds das Krankenhaus in the next lesson — the sick-house." },
        { id: "de-u11l3-gesund", type: "vocab", front: "gesund", reading: "gesund", meaning: "healthy", example: { jp: "Das Obst ist gesund.", en: "Fruit is healthy." }, accept: ["healthy", "well", "good for you"], hint: "ge-ZOONT. Used both of a person who is well and of food that is good for you, exactly as English healthy is." },
        { id: "de-u11l3-wehtun", type: "vocab", front: "weh tun", reading: "wehtun", meaning: "to hurt", example: { jp: "Der Zahn tut weh.", en: "The tooth hurts." }, accept: ["to hurt", "hurt", "to ache", "to be sore"], hint: "Two words that split around the sentence: the tun goes second and the weh drops to the end — Der Zahn TUT weh. That split is u12's rule in miniature." },
        { id: "de-u11l3-derschmerz", type: "vocab", front: "der Schmerz", reading: "derschmerz", meaning: "pain", example: { jp: "Der Schmerz kommt und geht.", en: "The pain comes and goes." }, accept: ["pain", "the pain", "ache"], hint: "The noun for what weh tun describes. In real use it is usually plural — Schmerzen — and glued to a body part: Kopfschmerzen, Halsschmerzen." },
        { id: "de-u11l3-dasfieber", type: "vocab", front: "das Fieber", reading: "dasfieber", meaning: "fever / temperature", example: { jp: "Das Kind hat Fieber.", en: "The child has a fever." }, drill: { jp: "Das Fieber kommt und geht", en: "The fever comes and goes" }, accept: ["fever", "temperature", "a fever"], hint: "FEE-ber, with the ie of hier (u1). Fieber haben takes no article at all — the same bare pattern as Hunger haben (u6)." },
        { id: "de-u11l3-derhusten", type: "vocab", front: "der Husten", reading: "derhusten", meaning: "cough", example: { jp: "Ich habe Husten.", en: "I have a cough." }, drill: { jp: "Der Husten ist schlecht", en: "The cough is bad" }, accept: ["cough", "a cough", "the cough"], hint: "HOOS-ten. Like Fieber and Hunger it goes bare after haben. The verb husten is the same word doing the other job." },
      ],
    },
    {
      id: "de-u11l4",
      unit: 11,
      lesson: 4,
      title: "Beim Arzt",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Find help when you are ill: the doctor, the hospital, the chemist and the medicine.",
      items: [
        { id: "de-u11l4-derarzt", type: "vocab", front: "der Arzt", reading: "derarzt", meaning: "doctor", example: { jp: "Der Arzt ist sehr nett.", en: "The doctor is very nice." }, accept: ["doctor", "the doctor", "physician"], hint: "ARTST, three consonants at the end and all of them said. A woman doctor is die Ärztin, the same -in ending that made die Freundin from der Freund (u4)." },
        { id: "de-u11l4-daskrankenhaus", type: "vocab", front: "das Krankenhaus", reading: "daskrankenhaus", meaning: "hospital", example: { jp: "Das Krankenhaus ist nicht weit.", en: "The hospital is not far." }, accept: ["hospital", "the hospital"], hint: "krank (this unit) + das Haus (u7), glued together. The last piece sets the gender, so a Haus makes it das." },
        { id: "de-u11l4-dieapotheke", type: "vocab", front: "die Apotheke", reading: "dieapotheke", meaning: "pharmacy / chemist", example: { jp: "Die Apotheke ist hier rechts.", en: "The pharmacy is here on the right." }, accept: ["pharmacy", "chemist", "chemist's", "drugstore", "the pharmacy"], hint: "a-po-TAY-ke. In Germany this is where medicine is sold and nothing else — a Drogerie sells the soap and shampoo instead." },
        { id: "de-u11l4-diemedizin", type: "vocab", front: "die Medizin", reading: "diemedizin", meaning: "medicine", example: { jp: "Die Medizin ist teuer.", en: "The medicine is expensive." }, accept: ["medicine", "the medicine", "medication"], hint: "me-di-TSEEN, stressed at the end, with z as ts. It means both the substance and the field of study." },
        { id: "de-u11l4-dieerkaeltung", type: "vocab", front: "die Erkältung", reading: "dieerkaltung", meaning: "a cold", example: { jp: "Ich habe eine Erkältung.", en: "I have a cold." }, drill: { jp: "Die Erkältung ist sehr schlecht", en: "The cold is very bad" }, accept: ["a cold", "cold", "the cold"], hint: "Built on kalt (u8) — literally a becoming-cold. Note it takes eine, unlike Husten and Fieber, which go bare." },
        { id: "de-u11l4-derdurst", type: "vocab", front: "der Durst", reading: "derdurst", meaning: "thirst", example: { jp: "Ich habe Durst.", en: "I am thirsty." }, drill: { jp: "Der Durst ist groß", en: "The thirst is great" }, accept: ["thirst", "thirsty"], hint: "The twin of der Hunger (u6): German HAS thirst rather than IS thirsty. Ich habe Durst, never Ich bin durstig in ordinary speech." },
      ],
    },
  ],
};
