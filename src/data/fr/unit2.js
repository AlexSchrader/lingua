// FR Unit 2 — C'est moi ("It's me") — A1
// The first grammar layer, modeled as function-word vocab (no grammar item
// type, same as ja units 19–21): articles un/une/le/la, ici/là, then the être
// chunks (je suis, tu es, c'est…) that unlock real sentences, then the little
// question words that keep a conversation moving. Conventions: see fr/unit1.js.
export const FR_UNIT2 = {
  id: "fr-u2",
  lang: "fr",
  title: "C'est moi",
  order: 2,
  stage: "a1",
  lessons: [
    {
      id: "fr-u2l1",
      unit: 2,
      lesson: 1,
      title: "Little words",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use the articles un / une / le / la — French nouns are masculine or feminine — plus ici and là.",
      items: [
        { id: "fr-u2l1-un", type: "vocab", front: "un", reading: "un", meaning: "a (masculine)", example: { jp: "Un café, s'il vous plaît.", en: "A coffee, please." }, accept: ["a", "an", "one"], hint: "Every French noun is masculine or feminine. un = \"a\" for masculine nouns — and it's also the number one." },
        { id: "fr-u2l1-une", type: "vocab", front: "une", reading: "une", meaning: "a (feminine)", example: { jp: "Une pizza, s'il vous plaît.", en: "A pizza, please." }, accept: ["a", "an", "one"] },
        { id: "fr-u2l1-le", type: "vocab", front: "le", reading: "le", meaning: "the (masculine)", example: { jp: "Le café, s'il vous plaît.", en: "The coffee, please." }, accept: ["the"] },
        { id: "fr-u2l1-la", type: "vocab", front: "la", reading: "la", meaning: "the (feminine)", example: { jp: "La pizza, s'il vous plaît !", en: "The pizza, please!" }, accept: ["the"] },
        { id: "fr-u2l1-ici", type: "vocab", front: "ici", reading: "ici", meaning: "here", example: { jp: "Ici, s'il vous plaît.", en: "Here, please." }, accept: ["over here"] },
        { id: "fr-u2l1-la2", type: "vocab", front: "là", reading: "la", meaning: "there", example: { jp: "Le taxi ? Là !", en: "The taxi? There!" }, accept: ["over there"], hint: "là (with the accent) = there. la (no accent) = the. Same letters, different words." },
      ],
    },
    {
      id: "fr-u2l2",
      unit: 2,
      lesson: 2,
      title: "I am, you are",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say who's who with the être chunks: je suis, tu es, c'est, il est, elle est — and introduce yourself with je m'appelle.",
      items: [
        { id: "fr-u2l2-jesuis", type: "vocab", front: "je suis", reading: "jesuis", meaning: "I am", example: { jp: "Je suis Paul.", en: "I am Paul." }, accept: ["i'm", "am"], hint: "Learned as a chunk — je suis, tu es, il est are all forms of être (to be)." },
        { id: "fr-u2l2-tues", type: "vocab", front: "tu es", reading: "tues", meaning: "you are", example: { jp: "Tu es Marie ?", en: "Are you Marie?" }, accept: ["you're", "are you"] },
        { id: "fr-u2l2-cest", type: "vocab", front: "c'est", reading: "cest", meaning: "it is", example: { jp: "C'est Marie !", en: "It's Marie!" }, accept: ["it's", "this is", "that is"] },
        { id: "fr-u2l2-jemappelle", type: "vocab", front: "je m'appelle", reading: "jemappelle", meaning: "my name is", example: { jp: "Bonjour, je m'appelle Marie.", en: "Hello, my name is Marie." }, accept: ["i am called", "i'm called", "my name's"], hint: "Literally \"I call myself\" — THE way to introduce yourself." },
        { id: "fr-u2l2-ilest", type: "vocab", front: "il est", reading: "ilest", meaning: "he is", example: { jp: "Paul ? Il est ici.", en: "Paul? He is here." }, accept: ["he's", "it is (he)"] },
        { id: "fr-u2l2-elleest", type: "vocab", front: "elle est", reading: "elleest", meaning: "she is", example: { jp: "Marie ? Elle est là.", en: "Marie? She is there." }, accept: ["she's", "it is (she)"] },
      ],
    },
    {
      id: "fr-u2l3",
      unit: 2,
      lesson: 3,
      title: "Keeping it moving",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask and react: qui, comment, où — with d'accord, voilà and ça.",
      items: [
        { id: "fr-u2l3-qui", type: "vocab", front: "qui", reading: "qui", meaning: "who", example: { jp: "C'est qui ?", en: "Who is it?" }, accept: ["whom"] },
        { id: "fr-u2l3-comment", type: "vocab", front: "comment", reading: "comment", meaning: "how", example: { jp: "Comment ça va ?", en: "How's it going?" }, accept: ["what (pardon)"], hint: "Also the polite \"what?\" when you didn't catch something: Comment ?" },
        { id: "fr-u2l3-ou", type: "vocab", front: "où", reading: "ou", meaning: "where", example: { jp: "Tu es où ?", en: "Where are you?" }, accept: [], hint: "où (accent) = where. ou (no accent) = or. The accent is the whole difference." },
        { id: "fr-u2l3-daccord", type: "vocab", front: "d'accord", reading: "daccord", meaning: "okay", example: { jp: "D'accord, merci !", en: "Okay, thanks!" }, accept: ["ok", "agreed", "alright"] },
        { id: "fr-u2l3-voila", type: "vocab", front: "voilà", reading: "voila", meaning: "here it is", example: { jp: "Voilà Marie !", en: "Here's Marie!" }, accept: ["there it is", "there you go", "here you go"] },
        { id: "fr-u2l3-ca", type: "vocab", front: "ça", reading: "ca", meaning: "that", example: { jp: "Oui, c'est ça !", en: "Yes, that's it!" }, accept: ["it", "this"] },
      ],
    },
  ],
};
