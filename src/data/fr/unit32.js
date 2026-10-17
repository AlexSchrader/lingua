// FR Unit 32 — La santé ("Health and the body") — A2
// A1's u15 taught the body parts and the four health nouns (médecin, hôpital,
// pharmacie, médicament) plus j'ai mal. This unit is what you actually say when
// something is wrong: name the illness, make the appointment, look after
// yourself — and, in lesson 4, call for help.
// The body itself is NOT re-taught; every part used in an example (le dos, le
// pied) is an A1 word being put to work.
// Conventions + the A2 infinitive decision: see the header of fr/unit28.js.
export const FR_UNIT32 = {
  id: "fr-u32",
  lang: "fr",
  title: "La santé",
  order: 32,
  stage: "a2",
  lessons: [
    {
      id: "fr-u32l1",
      unit: 32,
      lesson: 1,
      title: "Being ill",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name what's wrong: a cold, the flu, a cough, pain — and say you're going to get better.",
      items: [
        { id: "fr-u32l1-lerhume", type: "vocab", front: "le rhume", reading: "lerhume", meaning: "a cold", example: { jp: "J'ai un rhume.", en: "I have a cold." }, accept: ["head cold", "the cold", "a head cold", "a blocked nose and sneezing"], drill: { jp: "Le rhume est une petite maladie", en: "A cold is a small illness" }, hint: "Nothing to do with froid — le rhume is the illness, le froid is the weather." },
        { id: "fr-u32l1-lagrippe", type: "vocab", front: "la grippe", reading: "lagrippe", meaning: "the flu", example: { jp: "En hiver, j'ai souvent la grippe.", en: "In winter I often get the flu." }, accept: ["flu", "influenza", "the influenza", "a fever with aches and chills"], drill: { jp: "La grippe arrive souvent en hiver", en: "The flu often comes in winter" }, hint: "\"greep\" — the double p is one p and the final e is silent. Feminine, and French keeps the article: j'ai LA grippe." },
        { id: "fr-u32l1-latoux", type: "vocab", front: "la toux", reading: "latoux", meaning: "a cough", example: { jp: "Avec ce rhume, j'ai une toux.", en: "With this cold I have a cough." }, accept: ["the cough", "coughing", "a bad cough"], drill: { jp: "La toux est forte la nuit", en: "The cough is bad at night" }, hint: "\"too\" — ou is \"oo\" and the x is silent, so it sounds exactly like tout. Feminine: la toux; the verb is tousser." },
        { id: "fr-u32l1-ladouleur", type: "vocab", front: "la douleur", reading: "ladouleur", meaning: "pain", example: { jp: "La douleur est dans le dos.", en: "The pain is in my back." }, accept: ["ache", "the pain", "soreness"], drill: { jp: "La douleur est dans ma tête", en: "The pain is in my head" }, hint: "\"doo-LUR\" — ou is \"oo\" and eu before r is the open rounded vowel. Feminine: la douleur, and douloureux is the adjective, painful." },
        { id: "fr-u32l1-lamaladie", type: "vocab", front: "la maladie", reading: "lamaladie", meaning: "illness", example: { jp: "La grippe est une maladie.", en: "Flu is an illness." }, accept: ["disease", "sickness", "the illness"], drill: { jp: "Le médecin comprend la maladie", en: "The doctor understands the illness" }, hint: "The noun behind malade, which you already know." },
        { id: "fr-u32l1-guerir", type: "vocab", front: "guérir", reading: "guerir", meaning: "to get better", example: { jp: "Je vais guérir vite.", en: "I'm going to get better quickly." }, accept: ["to recover", "heal", "to cure"], drill: { jp: "Mon frère va guérir très vite", en: "My brother is going to get better very quickly" }, hint: "\"gay-REER\" — gu is a hard g with the u silent, and the final r of an -ir verb is sounded. It works both ways: to heal someone, and to get better." },
      ],
    },
    {
      id: "fr-u32l2",
      unit: 32,
      lesson: 2,
      title: "At the doctor's",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Get seen: make an appointment, take the prescription to the pharmacy, and know where the emergency room is.",
      items: [
        { id: "fr-u32l2-lerendezvous", type: "vocab", front: "le rendez-vous", reading: "lerendezvous", meaning: "appointment", example: { jp: "J'ai un rendez-vous chez le dentiste.", en: "I have an appointment at the dentist's." }, accept: ["the appointment", "an appointment", "a meeting time", "a time arranged to meet"], drill: { jp: "Le rendez-vous est à trois heures", en: "The appointment is at three o'clock" }, hint: "\"ron-day VOO\" — a nasal start and the final s silent. Literally \"present yourselves\": it is any appointment, medical or otherwise, not only a date." },
        { id: "fr-u32l2-lordonnance", type: "vocab", front: "l'ordonnance", reading: "lordonnance", meaning: "prescription", example: { jp: "J'ai une ordonnance pour la pharmacie.", en: "I have a prescription for the pharmacy." }, accept: ["the prescription", "prescription", "a prescription", "the written order for medicine", "prescriptions"], drill: { jp: "L'ordonnance est dans mon sac", en: "The prescription is in my bag" }, hint: "\"or-do-NONSS\" — nasal -on and a clean s at the end. Feminine: une ordonnance, from ordonner, to order." },
        { id: "fr-u32l2-linfirmier", type: "vocab", front: "l'infirmier", reading: "linfirmier", meaning: "nurse", example: { jp: "L'infirmier est très gentil.", en: "The nurse is very kind." }, accept: ["the nurse", "nurse", "a nurse", "the hospital worker who cares for patients", "nurses"], drill: { jp: "L'infirmier travaille aux urgences", en: "The nurse works in the emergency room" }, hint: "A woman in the job is une infirmière — the -ère ending is what you hear most often." },
        { id: "fr-u32l2-lesurgences", type: "vocab", front: "les urgences", reading: "lesurgences", meaning: "the emergency room", example: { jp: "Les urgences sont à l'hôpital.", en: "The emergency room is at the hospital." }, accept: ["accident and emergency", "casualty", "the er"], drill: { jp: "Les urgences sont ouvertes la nuit", en: "The emergency room is open at night" }, hint: "\"ewr-ZHONSS\" — the tight French u, a soft zh, and a nasal -en. Feminine PLURAL where English says one thing: aller aux urgences." },
        { id: "fr-u32l2-lapiqure", type: "vocab", front: "la piqûre", reading: "lapiqure", meaning: "injection", example: { jp: "Je n'aime pas les piqûres.", en: "I don't like injections." }, accept: ["a jab", "shot", "the injection"], drill: { jp: "La piqûre fait très mal", en: "The injection hurts a lot" }, hint: "\"pee-KEWR\" — the û is the tight French u, and its hat is only historical spelling. From piquer, to prick; the same word covers an insect sting." },
        { id: "fr-u32l2-soigner", type: "vocab", front: "soigner", reading: "soigner", meaning: "to treat", example: { jp: "Je vais soigner mon rhume.", en: "I'm going to treat my cold." }, accept: ["treat", "to look after", "to care for"], drill: { jp: "Le médecin va soigner mon frère", en: "The doctor is going to treat my brother" }, hint: "\"swa-NYAY\" — oi is \"wah\" and gn is the \"ny\" of onion. Le soin is care, and prendre soin de is to take care of." },
      ],
    },
    {
      id: "fr-u32l3",
      unit: 32,
      lesson: 3,
      title: "Looking after yourself",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say you're resting, how you feel, that you need sleep — and talk about exercise and eating well.",
      items: [
        { id: "fr-u32l3-jemerepose", type: "vocab", front: "je me repose", reading: "jemerepose", meaning: "I rest", example: { jp: "Le dimanche, je me repose.", en: "On Sundays I rest." }, accept: ["i am resting", "i take a break", "i relax"], drill: { jp: "Le soir je me repose un peu", en: "In the evening I rest a little" }, hint: "\"ruh-POHZ\" — the single s buzzes as a z and the final e is silent. Reflexive: se reposer. Careful: reposer without the me means to put something back down." },
        { id: "fr-u32l3-jemesens", type: "vocab", front: "je me sens", reading: "jemesens", meaning: "I feel", example: { jp: "Je me sens mieux aujourd'hui.", en: "I feel better today." }, accept: ["i am feeling", "how i feel", "i'm feeling"], drill: { jp: "Je me sens très fatigué ce matin", en: "I feel very tired this morning" }, hint: "For how you ARE, not what you want: je me sens bien, je me sens fatigué." },
        { id: "fr-u32l3-lesommeil", type: "vocab", front: "le sommeil", reading: "lesommeil", meaning: "sleep", example: { jp: "J'ai besoin de sommeil.", en: "I need sleep." }, accept: ["the sleep", "sleepiness", "being sleepy"], drill: { jp: "Le sommeil est important pour les enfants", en: "Sleep is important for children" }, hint: "\"so-MAY\" — -eil is the \"ay-y\" glide of soleil. Masculine: le sommeil, and avoir sommeil is to feel sleepy." },
        { id: "fr-u32l3-dormir", type: "vocab", front: "dormir", reading: "dormir", meaning: "to sleep", example: { jp: "J'ai envie de dormir.", en: "I feel like sleeping." }, accept: ["to be asleep", "to get some sleep", "sleep"], drill: { jp: "Je vais dormir huit heures", en: "I am going to sleep eight hours" }, hint: "The dictionary form of je dors." },
        { id: "fr-u32l3-leregime", type: "vocab", front: "le régime", reading: "leregime", meaning: "a diet", example: { jp: "Je suis au régime.", en: "I'm on a diet." }, accept: ["diet", "the diet", "a diet", "a controlled way of eating", "diets"], drill: { jp: "Le régime de ma mère est difficile", en: "My mother's diet is hard" }, hint: "\"ray-ZHEEM\" — the é is \"ay\" and the g before i is the soft zh. Masculine: le régime, which also means a political regime." },
        { id: "fr-u32l3-lexercice", type: "vocab", front: "l'exercice", reading: "lexercice", meaning: "exercise", example: { jp: "Je fais de l'exercice le matin.", en: "I exercise in the morning." }, accept: ["the exercise", "workout", "a workout", "a task done for training"], drill: { jp: "L'exercice est bon pour le corps", en: "Exercise is good for the body" }, hint: "\"eg-zair-SEESS\" — the x sounds as \"gz\" and the final ce is a clean s. Masculine, and you DO it with faire: faire de l'exercice." },
      ],
    },
    {
      id: "fr-u32l4",
      unit: 32,
      lesson: 4,
      title: "Accidents",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle an accident: say someone's going to fall, name an injury, and call for help.",
      items: [
        { id: "fr-u32l4-tomber", type: "vocab", front: "tomber", reading: "tomber", meaning: "to fall", example: { jp: "Il y a de l'eau : je vais tomber !", en: "There's water here: I'm going to fall!" }, accept: ["fall", "to fall over", "to drop"], drill: { jp: "Le vieux monsieur va tomber", en: "The old gentleman is going to fall" }, hint: "\"ton-BAY\" — nasal -om and -er as the closed \"ay\". In the past it takes être, not avoir: je suis tombé." },
        { id: "fr-u32l4-lablessure", type: "vocab", front: "la blessure", reading: "lablessure", meaning: "injury", example: { jp: "J'ai une blessure au pied.", en: "I have an injury on my foot." }, accept: ["wound", "the injury", "a cut"], drill: { jp: "La blessure est sur mon bras", en: "The injury is on my arm" }, hint: "\"ble-SEWR\" — the double s is hard and the ending is the tight French u. Feminine: une blessure, from blesser, to wound." },
        { id: "fr-u32l4-lesang", type: "vocab", front: "le sang", reading: "lesang", meaning: "blood", example: { jp: "Il y a du sang sur ma main.", en: "There's blood on my hand." }, drill: { jp: "Le sang est rouge", en: "Blood is red" }, accept: ["the blood", "blood", "some blood", "the red liquid in your veins"], hint: "\"son\" — nasal, with both the n and the g silent, so it sounds just like sans. Masculine: le sang; sanglant means bloody." },
        { id: "fr-u32l4-laccident", type: "vocab", front: "l'accident", reading: "laccident", meaning: "accident", example: { jp: "Il y a un accident sur la route.", en: "There's an accident on the road." }, accept: ["a crash", "the accident", "a collision"], drill: { jp: "L'accident est devant le pont", en: "The accident is in front of the bridge" }, hint: "\"ak-see-DON\" — the cc sounds as \"ks\" and -ent is nasal with the t silent. Masculine: un accident." },
        { id: "fr-u32l4-ausecours", type: "vocab", front: "au secours", reading: "ausecours", meaning: "help!", example: { jp: "Au secours ! J'ai peur !", en: "Help! I'm scared!" }, drill: { jp: "Au secours le chien est là", en: "Help the dog is there" }, accept: ["help", "rescue", "help me"], hint: "The word you shout. Asking for help calmly is a different word." },
        { id: "fr-u32l4-lambulance", type: "vocab", front: "l'ambulance", reading: "lambulance", meaning: "ambulance", example: { jp: "Il y a une ambulance devant l'hôpital.", en: "There's an ambulance in front of the hospital." }, accept: ["the ambulance", "ambulance", "an ambulance", "the vehicle that rushes patients to hospital", "ambulances"], drill: { jp: "L'ambulance arrive très vite", en: "The ambulance arrives very quickly" }, hint: "\"om-bew-LONSS\" — nasal at both ends with the tight French u between them. Feminine: une ambulance. The emergency number is 15, or 112 anywhere in Europe." },
      ],
    },
  ],
};
