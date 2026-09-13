// DE Unit 25 — Health and the body (slot: health) — A2
// Conventions and the FREE list live in de/unit1.js — read that header first.
// The CROSS-BLOCK COLLISION LEDGER is in de/unit21.js — read that before authoring.
//
// A1 u11 already owns the head-and-limbs body and the basics of being ill: Kopf,
// Auge, Nase, Mund, Ohr, Zahn, Körper, Hals, Hand, Arm, Bein, Fuß, krank, gesund,
// weh tun, der Schmerz, das Fieber, der Husten, der Arzt, das Krankenhaus, die
// Apotheke, die Medizin, die Erkältung, der Durst. ALL BLOCKED.
//
// This unit is the layer above: the doctor's surgery rather than the symptom, the
// trunk of the body rather than the head, injury and infection rather than a cold,
// and getting better afterwards.
//
// THREE CANDIDATES WERE DROPPED BY THE CROSS-BRANCH SCREEN, and they are the
// reason that screen now reads all three branches instead of this worktree alone:
//   untersuchen        already block 2's at u34
//   die Haut           already block 3's at u43
//   der Termin         already A1's at u19
// die Untersuchung went with untersuchen — one lexeme, and block 2 got there
// first. That is screening, not a collision ruling: nothing of mine existed to
// lose. die Verletzung was dropped beside sich verletzen, and die Gesundheit
// beside u11's gesund — one lexeme each.
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT25 = {
  id: "de-u25",
  lang: "de",
  title: "Gesundheit und Körper",
  order: 25,
  stage: "a2",
  lessons: [
    {
      id: "de-u25l1",
      unit: 25,
      lesson: 1,
      title: "Beim Arzt",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Go to the doctor: name the surgery, be the patient, and talk about a prescription, tablets, an injection and the treatment.",
      items: [
        { id: "de-u25l1-diepraxis", type: "vocab", front: "die Praxis", reading: "diepraxis", meaning: "the surgery", example: { jp: "Die Praxis ist heute sehr voll.", en: "The surgery is very busy today." }, drill: { jp: "Die Praxis ist neben der Schule", en: "The surgery is next to the school" }, accept: ["the surgery", "surgery", "the practice", "the doctor's office", "the office"], hint: "The doctor's rooms, not an operation — an operation is die Operation. Plural is Praxen, one of the Greek-derived nouns that changes its ending." },
        { id: "de-u25l1-derpatient", type: "vocab", front: "der Patient", reading: "derpatient", meaning: "the patient", example: { jp: "Der Patient wartet in der Praxis.", en: "The patient is waiting at the surgery." }, drill: { jp: "Der Patient ist sehr krank", en: "The patient is very ill" }, accept: ["the patient", "patient"], hint: "One of the nouns that adds -en everywhere except the nominative: der Patient, but den Patienten. Der Kollege from u19 does the same." },
        { id: "de-u25l1-dasrezept", type: "vocab", front: "das Rezept", reading: "dasrezept", meaning: "the prescription", example: { jp: "Der Arzt schreibt das Rezept.", en: "The doctor writes the prescription." }, drill: { jp: "Das Rezept liegt auf dem Tisch", en: "The prescription is lying on the table" }, accept: ["the prescription", "prescription", "the recipe", "recipe"], hint: "The same word does duty as a cooking recipe — both are instructions to be made up by someone else. Context alone tells them apart." },
        { id: "de-u25l1-dietablette", type: "vocab", front: "die Tablette", reading: "dietablette", meaning: "the tablet", example: { jp: "Die Tablette ist klein und weiß.", en: "The tablet is small and white." }, drill: { jp: "Die Tablette hilft gegen die Schmerzen", en: "The tablet helps against the pain" }, accept: ["the tablet", "tablet", "the pill", "pill"], hint: "Note it is not the computer, which Germans also call ein Tablet — spelled without the final -e and pronounced the English way." },
        { id: "de-u25l1-diespritze", type: "vocab", front: "die Spritze", reading: "diespritze", meaning: "the injection", example: { jp: "Der Arzt gibt die Spritze.", en: "The doctor gives the injection." }, drill: { jp: "Die Spritze tut nicht weh", en: "The injection does not hurt" }, accept: ["the injection", "injection", "the jab", "the shot", "the syringe"], hint: "Both the syringe and the jab it delivers. From spritzen, to squirt — which is also what a garden hose does." },
        { id: "de-u25l1-diebehandlung", type: "vocab", front: "die Behandlung", reading: "diebehandlung", meaning: "the treatment", example: { jp: "Die Behandlung dauert eine Woche.", en: "The treatment lasts a week." }, drill: { jp: "Die Behandlung ist sehr teuer", en: "The treatment is very expensive" }, accept: ["the treatment", "treatment", "the course of treatment"], hint: "Hiding u11's Hand — behandeln is literally to put hands on. The -ung ending makes it feminine, as it did in Bewerbung and Erfahrung." },
      ],
    },
    {
      id: "de-u25l2",
      unit: 25,
      lesson: 2,
      title: "Der Körper",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the parts of the body A1 left out — back, shoulder, stomach, knee, finger, heart — and say which one hurts.",
      items: [
        { id: "de-u25l2-derrucken", type: "vocab", front: "der Rücken", reading: "derrucken", meaning: "the back", example: { jp: "Ich habe oft Schmerzen im Rücken.", en: "I often have pain in my back." }, drill: { jp: "Der Rücken tut oft weh", en: "The back often hurts" }, accept: ["the back", "back"], hint: "Only the body part — the back of a room is hinten. Rückenschmerzen is the national complaint, and zurück, which you will meet, is the same root." },
        { id: "de-u25l2-dieschulter", type: "vocab", front: "die Schulter", reading: "dieschulter", meaning: "the shoulder", example: { jp: "Ich habe seit Montag Schmerzen in der Schulter.", en: "I have had pain in my shoulder since Monday." }, drill: { jp: "Die Schulter tut seit Montag weh", en: "The shoulder has hurt since Monday" }, accept: ["the shoulder", "shoulder"], hint: "No relation to u1's Schule despite the look of it. Note German uses the present with seit where English needs a perfect: seit Montag, has been since Monday." },
        { id: "de-u25l2-derbauch", type: "vocab", front: "der Bauch", reading: "derbauch", meaning: "the stomach", example: { jp: "Der Bauch ist nach dem Essen voll.", en: "The stomach is full after the meal." }, drill: { jp: "Der Bauch tut heute weh", en: "The stomach hurts today" }, accept: ["the stomach", "stomach", "the belly", "belly", "the tummy"], hint: "The outside — the belly you can point at. Der Magen is the organ inside, and Bauchschmerzen is what you say either way." },
        { id: "de-u25l2-dasknie", type: "vocab", front: "das Knie", reading: "dasknie", meaning: "the knee", example: { jp: "Ich habe heute Schmerzen im Knie.", en: "I have pain in my knee today." }, drill: { jp: "Das Knie tut heute weh", en: "The knee hurts today" }, accept: ["the knee", "knee"], hint: "The k IS pronounced, unlike English — k'nee, two sounds at the front. Plural die Knie, spelled the same and said with a long final -e." },
        { id: "de-u25l2-derfinger", type: "vocab", front: "der Finger", reading: "derfinger", meaning: "the finger", example: { jp: "Der Finger an der Hand ist klein.", en: "The finger on the hand is small." }, drill: { jp: "Der Finger tut sehr weh", en: "The finger hurts a lot" }, accept: ["the finger", "finger"], hint: "Spelled like English but said with a hard g — FING-er, never a soft j. Plural is die Finger, unchanged, like u18's Koffer." },
        { id: "de-u25l2-dasherz", type: "vocab", front: "das Herz", reading: "dasherz", meaning: "the heart", example: { jp: "Das Herz vom Kind ist gesund.", en: "The child's heart is healthy." }, drill: { jp: "Das Herz arbeitet Tag und Nacht", en: "The heart works day and night" }, accept: ["the heart", "heart"], hint: "Irregular in a way no other German noun quite is: des Herzens, dem Herzen. Herzlich, warmly or cordially, is built straight on it." },
      ],
    },
    {
      id: "de-u25l3",
      unit: 25,
      lesson: 3,
      title: "Krank sein",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what is wrong: flu, an allergy, an injury or a wound, and that an illness is catching.",
      items: [
        { id: "de-u25l3-diegrippe", type: "vocab", front: "die Grippe", reading: "diegrippe", meaning: "the flu", example: { jp: "Die Grippe kommt oft im Winter.", en: "The flu often comes in winter." }, drill: { jp: "Die Grippe dauert eine Woche", en: "The flu lasts a week" }, accept: ["the flu", "flu", "the influenza", "influenza"], hint: "Stronger than u11's Erkältung, which is only a cold. Germans distinguish the two firmly and will correct you if you blur them." },
        { id: "de-u25l3-dieallergie", type: "vocab", front: "die Allergie", reading: "dieallergie", meaning: "the allergy", example: { jp: "Die Allergie kommt im Frühling.", en: "The allergy comes in spring." }, drill: { jp: "Die Allergie macht die Augen rot", en: "The allergy makes the eyes red" }, accept: ["the allergy", "allergy"], hint: "Stress the last syllable — aller-GIE, with a soft g like the s in measure. Nouns in -ie are feminine and end-stressed as a class." },
        { id: "de-u25l3-sichverletzen", type: "vocab", front: "sich verletzen", reading: "sichverletzen", meaning: "to injure oneself", example: { jp: "Das Kind verletzt sich im Garten.", en: "The child hurts itself in the garden." }, drill: { jp: "Das Kind kann sich verletzen", en: "The child can hurt itself" }, accept: ["to injure oneself", "to hurt oneself", "to get hurt", "to injure"], hint: "Without sich it takes someone else as the object. Verletzt as an adjective means injured, and also hurt in the feelings sense." },
        { id: "de-u25l3-diewunde", type: "vocab", front: "die Wunde", reading: "diewunde", meaning: "the wound", example: { jp: "Die Wunde an der Hand ist klein.", en: "The wound on the hand is small." }, drill: { jp: "Die Wunde tut sehr weh", en: "The wound hurts a lot" }, accept: ["the wound", "wound", "the cut", "the injury"], hint: "The same word as English wound, and one of the clearest cognates in the language. Wund on its own is an adjective meaning sore." },
        { id: "de-u25l3-sichanstecken", type: "vocab", front: "sich anstecken", reading: "sichanstecken", meaning: "to catch an illness", example: { jp: "Ich stecke mich bei dem Kollegen an.", en: "I catch it from my colleague." }, drill: { jp: "Die Kinder können sich anstecken", en: "The children can catch it" }, accept: ["to catch an illness", "to catch something", "to become infected", "to catch it"], hint: "Reflexive AND separable: ich stecke mich an. Ansteckend as an adjective means contagious — and is used of laughter too." },
        { id: "de-u25l3-dasblut", type: "vocab", front: "das Blut", reading: "dasblut", meaning: "the blood", example: { jp: "Das Blut ist rot und warm.", en: "The blood is red and warm." }, drill: { jp: "Das Blut kommt aus der Wunde", en: "The blood comes out of the wound" }, accept: ["the blood", "blood"], hint: "Singular only, like u21's Geschirr — there is no plural. Bluten is the verb, to bleed." },
      ],
    },
    {
      id: "de-u25l4",
      unit: 25,
      lesson: 4,
      title: "Notfall und Erholung",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle an emergency — call the ambulance, mention the insurance — and talk about breathing, resting and recovering.",
      items: [
        { id: "de-u25l4-dernotfall", type: "vocab", front: "der Notfall", reading: "dernotfall", meaning: "the emergency", example: { jp: "Der Notfall kommt immer sehr schnell.", en: "The emergency always comes very fast." }, drill: { jp: "Der Notfall ist im Krankenhaus", en: "The emergency is at the hospital" }, accept: ["the emergency", "emergency"], hint: "Die Not is distress and der Fall is a case — a case of distress. Im Notfall means in an emergency, and the number is 112." },
        { id: "de-u25l4-derkrankenwagen", type: "vocab", front: "der Krankenwagen", reading: "derkrankenwagen", meaning: "the ambulance", example: { jp: "Der Krankenwagen kommt in zehn Minuten.", en: "The ambulance arrives in ten minutes." }, drill: { jp: "Der Krankenwagen fährt sehr schnell", en: "The ambulance drives very fast" }, accept: ["the ambulance", "ambulance"], hint: "Kranken + Wagen, the sick-people's vehicle, built on u11's krank exactly as Krankenhaus was. German prefers a transparent compound to a borrowed word." },
        { id: "de-u25l4-dieversicherung", type: "vocab", front: "die Versicherung", reading: "dieversicherung", meaning: "the insurance", example: { jp: "Die Versicherung bezahlt die Behandlung.", en: "The insurance pays for the treatment." }, drill: { jp: "Die Versicherung ist sehr teuer", en: "The insurance is very expensive" }, accept: ["the insurance", "insurance", "the insurance company"], hint: "Built on u12's sicher — insurance is the making-certain. Health cover is compulsory in Germany, so the word comes up early and often." },
        { id: "de-u25l4-atmen", type: "vocab", front: "atmen", reading: "atmen", meaning: "to breathe", example: { jp: "Der Patient atmet ruhig.", en: "The patient is breathing calmly." }, drill: { jp: "Der Patient kann wieder atmen", en: "The patient can breathe again" }, accept: ["to breathe", "breathe"], hint: "The -men ending keeps an e in the conjugation for sound: er atmet, not er atmt. Der Atem is the breath itself." },
        { id: "de-u25l4-sicherholen", type: "vocab", front: "sich erholen", reading: "sicherholen", meaning: "to recover", example: { jp: "Ich erhole mich im Urlaub.", en: "I recover on holiday." }, drill: { jp: "Der Patient will sich erholen", en: "The patient wants to recover" }, accept: ["to recover", "recover", "to recuperate", "to get better"], hint: "Getting your strength back over time, from an illness or from work. Die Erholung is the recovery, and erholsam describes a restful holiday." },
        { id: "de-u25l4-sichausruhen", type: "vocab", front: "sich ausruhen", reading: "sichausruhen", meaning: "to rest", example: { jp: "Ich ruhe mich am Sonntag aus.", en: "I rest on Sunday." }, drill: { jp: "Die Eltern wollen sich ausruhen", en: "The parents want to rest" }, accept: ["to rest", "rest", "to take a rest", "to have a rest"], hint: "Reflexive and separable — ich ruhe mich aus. Shorter than sich erholen: this is one afternoon on the sofa, that is a fortnight getting better. Built on u10's ruhig." },
      ],
    },
  ],
};
