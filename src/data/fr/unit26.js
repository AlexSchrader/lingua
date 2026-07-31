// FR Unit 26 — Un peu de grammaire ("A bit of grammar") — A1 GRAMMAR
// The four structural pieces A1 genuinely requires that the thematic units kept
// gesturing at without ever teaching (content-auditor G1):
//   1. the PARTITIVE du / de la / des — "some", unavoidable for talking about food
//   2. the rest of the POSSESSIVES — mes, tes, son/sa/ses, notre, votre, leur
//   3. the DEMONSTRATIVES ce / cet / cette / ces — hint-glossed three times before this
//   4. the PLURAL rule — plurals had only ever appeared pre-formed
//
// This unit is placed LAST on purpose: every earlier unit was rewritten to avoid
// the partitive entirely (the audit found it used 12× untaught, and — worse — the
// same sentence appearing with "le pain" in one lesson and "du pain" in another,
// which teaches a learner the two are interchangeable). From here on it's fair game.
// Conventions: see fr/unit1.js.
export const FR_UNIT26 = {
  id: "fr-u26",
  lang: "fr",
  title: "Un peu de grammaire",
  order: 27,
  stage: "a1",
  lessons: [
    {
      id: "fr-u26l1",
      unit: 26,
      lesson: 1,
      title: "Some of it",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say \"some\" with du, de la, des — and drop it to de after a negative.",
      items: [
        { id: "fr-u26l1-du", type: "vocab", front: "du", reading: "du", meaning: "some (masculine)", example: { jp: "Je mange du pain.", en: "I'm eating some bread." }, accept: ["of the", "any"], hint: "English drops \"some\" — French can't. \"I'm eating bread\" MUST be je mange du pain. This is the partitive." },
        { id: "fr-u26l1-dela", type: "vocab", front: "de la", reading: "dela", meaning: "some (feminine)", example: { jp: "Je bois de la soupe.", en: "I'm drinking some soup." }, accept: ["of the", "any"] },
        { id: "fr-u26l1-des", type: "vocab", front: "des", reading: "des", meaning: "some (plural)", example: { jp: "J'achète des fruits au marché.", en: "I'm buying some fruit at the market." }, accept: ["of the", "any"], hint: "Also just the plural of un/une: un fruit → des fruits." },
        { id: "fr-u26l1-delo", type: "vocab", front: "de l'", reading: "del", meaning: "some (before a vowel)", example: { jp: "Je voudrais de l'eau, s'il vous plaît.", en: "I'd like some water, please." }, accept: ["of the", "any"], hint: "du and de la both shrink to de l' before a vowel: de l'eau, de l'argent." },
        { id: "fr-u26l1-pasde", type: "vocab", front: "pas de", reading: "pasde", meaning: "no / not any", example: { jp: "Je ne mange pas de viande.", en: "I don't eat meat." }, accept: ["not any", "no"], hint: "After a negative, du / de la / des ALL collapse to de. je mange du pain → je ne mange pas de pain." },
        { id: "fr-u26l1-unpeude", type: "vocab", front: "un peu de", reading: "unpeude", meaning: "a little of", example: { jp: "Un peu de sucre, s'il vous plaît.", en: "A little sugar, please." }, accept: ["a bit of", "some"], hint: "Quantities take plain de, never du: beaucoup de pain, un kilo de pommes." },
        { id: "fr-u26l1-assez", type: "vocab", front: "assez", reading: "assez", meaning: "enough", example: { jp: "J'ai assez de pain, merci.", en: "I have enough bread, thank you." }, accept: ["quite", "rather"] },
      ],
    },
    {
      id: "fr-u26l2",
      unit: 26,
      lesson: 2,
      title: "Whose it is",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Complete the possessives: mes, tes, son, sa, ses, notre, votre, leur.",
      items: [
        { id: "fr-u26l2-mes", type: "vocab", front: "mes", reading: "mes", meaning: "my (plural)", example: { jp: "Mes chaussures sont propres.", en: "My shoes are clean." }, accept: ["my"], hint: "mon / ma / mes — masculine, feminine, plural. The gender is the NOUN's, never yours." },
        { id: "fr-u26l2-tes", type: "vocab", front: "tes", reading: "tes", meaning: "your (plural)", example: { jp: "Tes amis sont très sympa.", en: "Your friends are very nice." }, accept: ["your"] },
        { id: "fr-u26l2-son", type: "vocab", front: "son", reading: "son", meaning: "his / her (masculine)", example: { jp: "Son frère travaille à Paris.", en: "His brother works in Paris." }, accept: ["his", "her", "its"], hint: "The trap: son/sa follow the NOUN's gender, so son frère is \"his brother\" OR \"her brother\". French doesn't tell you whose." },
        { id: "fr-u26l2-sa", type: "vocab", front: "sa", reading: "sa", meaning: "his / her (feminine)", example: { jp: "Sa sœur est étudiante.", en: "His sister is a student." }, accept: ["his", "her", "its"] },
        { id: "fr-u26l2-ses", type: "vocab", front: "ses", reading: "ses", meaning: "his / her (plural)", example: { jp: "Ses parents habitent à Lyon.", en: "His parents live in Lyon." }, accept: ["his", "her", "its"] },
        { id: "fr-u26l2-notre", type: "vocab", front: "notre", reading: "notre", meaning: "our", example: { jp: "Notre maison est petite.", en: "Our house is small." }, accept: ["ours"] },
        { id: "fr-u26l2-votre", type: "vocab", front: "votre", reading: "votre", meaning: "your (polite)", example: { jp: "Votre café, monsieur.", en: "Your coffee, sir." }, accept: ["yours"] },
        { id: "fr-u26l2-leur", type: "vocab", front: "leur", reading: "leur", meaning: "their", example: { jp: "Leur voiture est devant la maison.", en: "Their car is in front of the house." }, accept: ["theirs"] },
      ],
    },
    {
      id: "fr-u26l3",
      unit: 26,
      lesson: 3,
      title: "This one, those ones",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Point at things with ce, cet, cette, ces — and form plurals with -s.",
      items: [
        { id: "fr-u26l3-ce", type: "vocab", front: "ce", reading: "ce", meaning: "this (masculine)", example: { jp: "Ce livre est très bon.", en: "This book is very good." }, accept: ["that"], hint: "You've met it in ce soir and ce matin — here's the rule behind it." },
        { id: "fr-u26l3-cet", type: "vocab", front: "cet", reading: "cet", meaning: "this (before a vowel)", example: { jp: "Cet homme est mon père.", en: "This man is my father." }, accept: ["that"], hint: "ce → cet before a vowel sound, so it doesn't collide: cet homme, cet arbre." },
        { id: "fr-u26l3-cette", type: "vocab", front: "cette", reading: "cette", meaning: "this (feminine)", example: { jp: "Cette robe est jolie.", en: "This dress is pretty." }, accept: ["that"] },
        { id: "fr-u26l3-ces", type: "vocab", front: "ces", reading: "ces", meaning: "these", example: { jp: "Ces fleurs sont pour toi.", en: "These flowers are for you." }, accept: ["those"] },
        { id: "fr-u26l3-lepluriel", type: "vocab", front: "le pluriel", reading: "lepluriel", meaning: "the plural", example: { jp: "Le pluriel est facile : un chat, des chats.", en: "The plural is easy: one cat, some cats." }, accept: ["plural"], hint: "Add -s and say nothing different — French plurals are silent. Only the article (le → les, un → des) tells your ear." },
        { id: "fr-u26l3-tout", type: "vocab", front: "tout", reading: "tout", meaning: "all", example: { jp: "Tout est prêt !", en: "Everything is ready!" }, accept: ["everything", "every"], hint: "You've used it in tout le monde and tous les jours." },
        { id: "fr-u26l3-pret", type: "vocab", front: "prêt", reading: "pret", meaning: "ready", example: { jp: "Je suis prêt, on part !", en: "I'm ready, let's go!" }, accept: ["prepared"] },
      ],
    },
  ],
};
