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
        { id: "fr-u32l1-lerhume", type: "vocab", front: "le rhume", reading: "lerhume", meaning: "a cold", example: { jp: "J'ai un rhume.", en: "I have a cold." }, accept: ["head cold", "the cold"], hint: "Nothing to do with froid — le rhume is the illness, le froid is the weather." },
        { id: "fr-u32l1-lagrippe", type: "vocab", front: "la grippe", reading: "lagrippe", meaning: "the flu", example: { jp: "En hiver, j'ai souvent la grippe.", en: "In winter I often get the flu." }, accept: ["flu", "influenza"] },
        { id: "fr-u32l1-latoux", type: "vocab", front: "la toux", reading: "latoux", meaning: "a cough", example: { jp: "Avec ce rhume, j'ai une toux.", en: "With this cold I have a cough." }, accept: ["the cough", "coughing"] },
        { id: "fr-u32l1-ladouleur", type: "vocab", front: "la douleur", reading: "ladouleur", meaning: "pain", example: { jp: "La douleur est dans le dos.", en: "The pain is in my back." }, accept: ["ache", "the pain", "soreness"] },
        { id: "fr-u32l1-lamaladie", type: "vocab", front: "la maladie", reading: "lamaladie", meaning: "illness", example: { jp: "La grippe est une maladie.", en: "Flu is an illness." }, accept: ["disease", "sickness", "the illness"], hint: "The noun behind malade, which you already know." },
        { id: "fr-u32l1-guerir", type: "vocab", front: "guérir", reading: "guerir", meaning: "to get better", example: { jp: "Je vais guérir vite.", en: "I'm going to get better quickly." }, accept: ["to recover", "heal", "to cure"] },
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
        { id: "fr-u32l2-lerendezvous", type: "vocab", front: "le rendez-vous", reading: "lerendezvous", meaning: "appointment", example: { jp: "J'ai un rendez-vous chez le dentiste.", en: "I have an appointment at the dentist's." }, accept: ["the appointment", "an appointment"] },
        { id: "fr-u32l2-lordonnance", type: "vocab", front: "l'ordonnance", reading: "lordonnance", meaning: "prescription", example: { jp: "J'ai une ordonnance pour la pharmacie.", en: "I have a prescription for the pharmacy." }, accept: ["the prescription"] },
        { id: "fr-u32l2-linfirmier", type: "vocab", front: "l'infirmier", reading: "linfirmier", meaning: "nurse", example: { jp: "L'infirmier est très gentil.", en: "The nurse is very kind." }, accept: ["the nurse"], hint: "A woman in the job is une infirmière — the -ère ending is what you hear most often." },
        { id: "fr-u32l2-lesurgences", type: "vocab", front: "les urgences", reading: "lesurgences", meaning: "the emergency room", example: { jp: "Les urgences sont à l'hôpital.", en: "The emergency room is at the hospital." }, accept: ["accident and emergency", "casualty", "the er"] },
        { id: "fr-u32l2-lapiqure", type: "vocab", front: "la piqûre", reading: "lapiqure", meaning: "injection", example: { jp: "Je n'aime pas les piqûres.", en: "I don't like injections." }, accept: ["a jab", "shot", "the injection"] },
        { id: "fr-u32l2-soigner", type: "vocab", front: "soigner", reading: "soigner", meaning: "to treat", example: { jp: "Je vais soigner mon rhume.", en: "I'm going to treat my cold." }, accept: ["treat", "to look after", "to care for"] },
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
        { id: "fr-u32l3-jemerepose", type: "vocab", front: "je me repose", reading: "jemerepose", meaning: "I rest", example: { jp: "Le dimanche, je me repose.", en: "On Sundays I rest." }, accept: ["i am resting", "i take a break", "i relax"] },
        { id: "fr-u32l3-jemesens", type: "vocab", front: "je me sens", reading: "jemesens", meaning: "I feel", example: { jp: "Je me sens mieux aujourd'hui.", en: "I feel better today." }, accept: ["i am feeling", "how i feel"], hint: "For how you ARE, not what you want: je me sens bien, je me sens fatigué." },
        { id: "fr-u32l3-lesommeil", type: "vocab", front: "le sommeil", reading: "lesommeil", meaning: "sleep", example: { jp: "J'ai besoin de sommeil.", en: "I need sleep." }, accept: ["the sleep", "sleepiness"] },
        { id: "fr-u32l3-dormir", type: "vocab", front: "dormir", reading: "dormir", meaning: "to sleep", example: { jp: "J'ai envie de dormir.", en: "I feel like sleeping." }, accept: ["to be asleep", "to get some sleep"], hint: "The dictionary form of je dors." },
        { id: "fr-u32l3-leregime", type: "vocab", front: "le régime", reading: "leregime", meaning: "a diet", example: { jp: "Je suis au régime.", en: "I'm on a diet." }, accept: ["diet", "the diet"] },
        { id: "fr-u32l3-lexercice", type: "vocab", front: "l'exercice", reading: "lexercice", meaning: "exercise", example: { jp: "Je fais de l'exercice le matin.", en: "I exercise in the morning." }, accept: ["the exercise", "workout"] },
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
        { id: "fr-u32l4-tomber", type: "vocab", front: "tomber", reading: "tomber", meaning: "to fall", example: { jp: "Il y a de l'eau : je vais tomber !", en: "There's water here: I'm going to fall!" }, accept: ["fall", "to fall over", "to drop"] },
        { id: "fr-u32l4-lablessure", type: "vocab", front: "la blessure", reading: "lablessure", meaning: "injury", example: { jp: "J'ai une blessure au pied.", en: "I have an injury on my foot." }, accept: ["wound", "the injury", "a cut"] },
        { id: "fr-u32l4-lesang", type: "vocab", front: "le sang", reading: "lesang", meaning: "blood", example: { jp: "Il y a du sang sur ma main.", en: "There's blood on my hand." }, drill: { jp: "Le sang est rouge", en: "Blood is red" }, accept: ["the blood"] },
        { id: "fr-u32l4-laccident", type: "vocab", front: "l'accident", reading: "laccident", meaning: "accident", example: { jp: "Il y a un accident sur la route.", en: "There's an accident on the road." }, accept: ["a crash", "the accident"] },
        { id: "fr-u32l4-ausecours", type: "vocab", front: "au secours", reading: "ausecours", meaning: "help!", example: { jp: "Au secours ! J'ai peur !", en: "Help! I'm scared!" }, drill: { jp: "Au secours le chien est là", en: "Help the dog is there" }, accept: ["help", "rescue"], hint: "The word you shout. Asking for help calmly is a different word." },
        { id: "fr-u32l4-lambulance", type: "vocab", front: "l'ambulance", reading: "lambulance", meaning: "ambulance", example: { jp: "Il y a une ambulance devant l'hôpital.", en: "There's an ambulance in front of the hospital." }, accept: ["the ambulance"] },
      ],
    },
  ],
};
