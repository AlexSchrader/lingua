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
export const FR_UNIT27 = {
  id: "fr-u27",
  lang: "fr",
  title: "Un peu de grammaire",
  order: 27,
  stage: "a1",
  lessons: [
    {
      id: "fr-u27l1",
      unit: 27,
      lesson: 1,
      title: "Some of it",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say \"some\" with du, de la, des — and drop it to de after a negative.",
      items: [
        { id: "fr-u27l1-du", type: "vocab", front: "du", reading: "du", meaning: "some (masculine)", example: { jp: "Je mange du pain.", en: "I'm eating some bread." }, drill: { jp: "Je bois du café le matin", en: "I drink some coffee in the morning" }, accept: ["of the", "any", "some (m)"], hint: "English drops \"some\" — French can't. \"I'm eating bread\" MUST be je mange du pain. This is the partitive." },
        { id: "fr-u27l1-dela", type: "vocab", front: "de la", reading: "dela", meaning: "some (feminine)", example: { jp: "Je bois de la soupe.", en: "I'm drinking some soup." }, drill: { jp: "Je mange de la salade", en: "I'm eating some salad" }, accept: ["of the", "any", "some (f)"], hint: "\"duh lah\" — two short sounds. The feminine partner of du: je bois de la soupe. Before a vowel it shrinks to de l'." },
        { id: "fr-u27l1-des", type: "vocab", front: "des", reading: "des", meaning: "some (plural)", example: { jp: "J'achète des fruits au marché.", en: "I'm buying some fruit at the market." }, drill: { jp: "J'ai des amis à Paris", en: "I have friends in Paris" }, accept: ["of the", "any", "some (plural)"], hint: "Also just the plural of un/une: un fruit → des fruits." },
        { id: "fr-u27l1-delo", type: "vocab", front: "de l'", reading: "del", meaning: "some (before a vowel)", example: { jp: "Je voudrais de l'eau, s'il vous plaît.", en: "I'd like some water, please." }, accept: ["of the", "any", "some (vowel)"], hint: "du and de la both shrink to de l' before a vowel: de l'eau, de l'argent." },
        { id: "fr-u27l1-pasde", type: "vocab", front: "pas de", reading: "pasde", meaning: "no / not any", example: { jp: "Je ne mange pas de viande.", en: "I don't eat meat." }, drill: { jp: "Il n'y a pas de sucre", en: "There is no sugar" }, accept: ["not any", "no", "none of"], hint: "After a negative, du / de la / des ALL collapse to de. je mange du pain → je ne mange pas de pain." },
        { id: "fr-u27l1-unpeude", type: "vocab", front: "un peu de", reading: "unpeude", meaning: "a little of", example: { jp: "Un peu de sucre, s'il vous plaît.", en: "A little sugar, please." }, drill: { jp: "Je voudrais un peu de pain", en: "I'd like a little bread" }, accept: ["a bit of", "some", "a little"], hint: "Quantities take plain de, never du: beaucoup de pain, un kilo de pommes." },
        { id: "fr-u27l1-assez", type: "vocab", front: "assez", reading: "assez", meaning: "enough", example: { jp: "J'ai assez de pain, merci.", en: "I have enough bread, thank you." }, drill: { jp: "J'ai assez de temps ce matin", en: "I have enough time this morning" }, accept: ["quite", "rather", "sufficiently"], hint: "\"a-SAY\" — the z is silent, so it ends on the closed \"ay\". Before a noun it takes de: assez de pain. Before an adjective it means quite: assez cher." },
      ],
    },
    {
      id: "fr-u27l2",
      unit: 27,
      lesson: 2,
      title: "Whose it is",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Complete the possessives: mes, tes, son, sa, ses, notre, votre, leur.",
      items: [
        { id: "fr-u27l2-mes", type: "vocab", front: "mes", reading: "mes", meaning: "my (plural)", example: { jp: "Mes chaussures sont propres.", en: "My shoes are clean." }, drill: { jp: "Mes amis sont à Paris", en: "My friends are in Paris" }, accept: ["my", "my (plural)", "mine"], hint: "mon / ma / mes — masculine, feminine, plural. The gender is the NOUN's, never yours." },
        { id: "fr-u27l2-tes", type: "vocab", front: "tes", reading: "tes", meaning: "your (plural)", example: { jp: "Tes amis sont très sympa.", en: "Your friends are very nice." }, drill: { jp: "Tes livres sont sur la table", en: "Your books are on the table" }, accept: ["your", "your (plural)", "yours"], hint: "\"tay\" — the s is silent, so it ends on the closed \"ay\" like mes and ses. It is the plural of both ton and ta, and makes no gender distinction at all." },
        { id: "fr-u27l2-son", type: "vocab", front: "son", reading: "son", meaning: "his / her (masculine)", example: { jp: "Son frère travaille à Paris.", en: "His brother works in Paris." }, drill: { jp: "Son chien est très gentil", en: "His dog is very kind" }, accept: ["his", "her", "its"], hint: "The trap: son/sa follow the NOUN's gender, so son frère is \"his brother\" OR \"her brother\". French doesn't tell you whose." },
        { id: "fr-u27l2-sa", type: "vocab", front: "sa", reading: "sa", meaning: "his / her (feminine)", example: { jp: "Sa sœur est étudiante.", en: "His sister is a student." }, drill: { jp: "Sa maison est très grande", en: "Her house is very big" }, accept: ["his", "her", "its"], hint: "\"sah\", one short sound — and the trap for English speakers. It matches the NOUN, not the owner: sa sœur is his sister OR her sister, and only the context tells you which." },
        { id: "fr-u27l2-ses", type: "vocab", front: "ses", reading: "ses", meaning: "his / her (plural)", example: { jp: "Ses parents habitent à Lyon.", en: "His parents live in Lyon." }, drill: { jp: "Ses enfants sont à l'école", en: "His children are at school" }, accept: ["his", "her", "its"], hint: "\"say\" — the s is silent, like tes and mes. The plural of son and sa, and like them it says nothing about whether the owner is male or female." },
        { id: "fr-u27l2-notre", type: "vocab", front: "notre", reading: "notre", meaning: "our", example: { jp: "Notre maison est petite.", en: "Our house is small." }, drill: { jp: "Notre voiture est trop petite", en: "Our car is too small" }, accept: ["ours", "our (singular)", "of ours"], hint: "\"NOTR\" — one syllable with the -re a breath. One form for both genders, and the plural is nos. The stressed form le nôtre wears a hat." },
        { id: "fr-u27l2-votre", type: "vocab", front: "votre", reading: "votre", meaning: "your (polite)", example: { jp: "Votre café, monsieur.", en: "Your coffee, sir." }, drill: { jp: "Votre train arrive à midi", en: "Your train arrives at noon" }, accept: ["yours", "your (polite)", "of yours"], hint: "\"VOTR\" — built exactly like notre, with the plural vos. It is the polite your, the one that matches vous." },
        { id: "fr-u27l2-leur", type: "vocab", front: "leur", reading: "leur", meaning: "their", example: { jp: "Leur voiture est devant la maison.", en: "Their car is in front of the house." }, drill: { jp: "Leur maison est près du parc", en: "Their house is near the park" }, accept: ["theirs", "their (singular)", "of theirs"], hint: "\"lur\" — eu before r is the open rounded vowel. As a possessive the plural is leurs; careful, because leur also means to them." },
      ],
    },
    {
      id: "fr-u27l3",
      unit: 27,
      lesson: 3,
      title: "This one, those ones",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Point at things with ce, cet, cette, ces — and form plurals with -s.",
      items: [
        { id: "fr-u27l3-ce", type: "vocab", front: "ce", reading: "ce", meaning: "this (masculine)", example: { jp: "Ce livre est très bon.", en: "This book is very good." }, drill: { jp: "Ce film est trop long", en: "This film is too long" }, accept: ["that", "this one", "this (m)"], hint: "You've met it in ce soir and ce matin — here's the rule behind it." },
        { id: "fr-u27l3-cet", type: "vocab", front: "cet", reading: "cet", meaning: "this (before a vowel)", example: { jp: "Cet homme est mon père.", en: "This man is my father." }, drill: { jp: "Cet hôtel est très cher", en: "This hotel is very expensive" }, accept: ["that", "this one", "this (vowel)"], hint: "ce → cet before a vowel sound, so it doesn't collide: cet homme, cet arbre." },
        { id: "fr-u27l3-cette", type: "vocab", front: "cette", reading: "cette", meaning: "this (feminine)", example: { jp: "Cette robe est jolie.", en: "This dress is pretty." }, drill: { jp: "Cette chambre est très petite", en: "This room is very small" }, accept: ["that", "this one", "this (f)"], hint: "\"set\" — a clean \"et\" ending, so it sounds exactly like sept, seven. It is simply the feminine of ce." },
        { id: "fr-u27l3-ces", type: "vocab", front: "ces", reading: "ces", meaning: "these", example: { jp: "Ces fleurs sont pour toi.", en: "These flowers are for you." }, drill: { jp: "Ces livres sont à moi", en: "These books are mine" }, accept: ["those", "these ones", "these (plural)"], hint: "\"say\" — the s is silent, so it sounds like ses. One plural form covers both genders: ces livres, ces fleurs." },
        { id: "fr-u27l3-lepluriel", type: "vocab", front: "le pluriel", reading: "lepluriel", meaning: "the plural", example: { jp: "Le pluriel est facile : un chat, des chats.", en: "The plural is easy: one cat, some cats." }, drill: { jp: "Le pluriel est très facile", en: "The plural is very easy" }, accept: ["plural", "the plural form", "plural form"], hint: "Add -s and say nothing different — French plurals are silent. Only the article (le → les, un → des) tells your ear." },
        { id: "fr-u27l3-tout", type: "vocab", front: "tout", reading: "tout", meaning: "all", example: { jp: "Tout est prêt !", en: "Everything is ready!" }, drill: { jp: "Tout est fermé le dimanche", en: "Everything is closed on Sundays" }, accept: ["everything", "every", "all of it"], hint: "You've used it in tout le monde and tous les jours." },
        { id: "fr-u27l3-pret", type: "vocab", front: "prêt", reading: "pret", meaning: "ready", example: { jp: "Je suis prêt, on part !", en: "I'm ready, let's go!" }, drill: { jp: "Le dîner est prêt", en: "Dinner is ready" }, accept: ["prepared", "set", "all set"], hint: "\"preh\" — the ê is open and the t is silent, so it sounds exactly like près, near. The feminine prête wakes the t up." },
      ],
    },
  ],
};
