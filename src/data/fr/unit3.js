// FR Unit 2 — C'est moi ("It's me") — A1
// The first grammar layer, modeled as function-word vocab (no grammar item
// type, same as ja units 19–21): articles un/une/le/la, ici/là, then the être
// chunks (je suis, tu es, c'est…) that unlock real sentences, then the little
// question words that keep a conversation moving. Conventions: see fr/unit1.js.
export const FR_UNIT3 = {
  id: "fr-u3",
  lang: "fr",
  title: "C'est moi",
  order: 3,
  stage: "a1",
  lessons: [
    {
      id: "fr-u3l1",
      unit: 3,
      lesson: 1,
      title: "Little words",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use the articles un / une / le / la — French nouns are masculine or feminine — plus ici and là.",
      items: [
        { id: "fr-u3l1-un", type: "vocab", front: "un", reading: "un", meaning: "a (masculine)", example: { jp: "Un café, s'il vous plaît.", en: "A coffee, please." }, drill: { jp: "Un taxi s'il vous plaît", en: "A taxi please" }, accept: ["a", "an", "one"], hint: "Every French noun is masculine or feminine. un = \"a\" for masculine nouns — and it's also the number one." },
        { id: "fr-u3l1-une", type: "vocab", front: "une", reading: "une", meaning: "a (feminine)", example: { jp: "Une pizza, s'il vous plaît.", en: "A pizza, please." }, drill: { jp: "Une pizza s'il vous plaît", en: "A pizza please" }, accept: ["a", "an", "one"], hint: "\"ewn\" — the tight French u, never \"oo\". It is also the number one, so une pizza is both a pizza and one pizza; it is the feminine partner of un." },
        { id: "fr-u3l1-le", type: "vocab", front: "le", reading: "le", meaning: "the (masculine)", example: { jp: "Le café, s'il vous plaît.", en: "The coffee, please." }, drill: { jp: "Le taxi est ici", en: "The taxi is here" }, accept: ["the", "the (m)", "the (masc)"], hint: "\"luh\", a short lazy vowel. Its job is to mark the noun masculine, which is not guessable — so learn le café, not café. Before a vowel it shrinks to l'." },
        { id: "fr-u3l1-la", type: "vocab", front: "la", reading: "la", meaning: "the (feminine)", example: { jp: "La pizza, s'il vous plaît !", en: "The pizza, please!" }, drill: { jp: "La pizza est là", en: "The pizza is there" }, accept: ["the", "the (f)", "the (fem)"], hint: "\"lah\", with no accent — that is the only thing separating it from là, there. It marks the noun feminine, and shrinks to l' before a vowel: l'amie." },
        { id: "fr-u3l1-ici", type: "vocab", front: "ici", reading: "ici", meaning: "here", example: { jp: "Ici, s'il vous plaît.", en: "Here, please." }, drill: { jp: "Marie est ici", en: "Marie is here" }, accept: ["over here", "right here", "in here"], hint: "\"ee-SEE\" — both i's are the clean \"ee\" sound and the stress lands at the end. It is the near one; là is the far one. Viens ici = come here." },
        { id: "fr-u3l1-la2", type: "vocab", front: "là", reading: "la", meaning: "there", example: { jp: "Le taxi ? Là !", en: "The taxi? There!" }, drill: { jp: "Le taxi est là", en: "The taxi is there" }, accept: ["over there", "there!", "right there"], hint: "là (with the accent) = there. la (no accent) = the. Same letters, different words." },
      ],
    },
    {
      id: "fr-u3l2",
      unit: 3,
      lesson: 2,
      title: "I am, you are",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say who's who with the être chunks: je suis, tu es, c'est, il est, elle est — and introduce yourself with je m'appelle.",
      items: [
        { id: "fr-u3l2-jesuis", type: "vocab", front: "je suis", reading: "jesuis", meaning: "I am", example: { jp: "Je suis Paul.", en: "I am Paul." }, drill: { jp: "Je suis ici", en: "I am here" }, accept: ["i'm", "am", "i am (être)"], hint: "Learned as a chunk — je suis, tu es, il est are all forms of être (to be)." },
        { id: "fr-u3l2-tues", type: "vocab", front: "tu es", reading: "tues", meaning: "you are", example: { jp: "Tu es Marie ?", en: "Are you Marie?" }, drill: { jp: "Tu es là", en: "You are there" }, accept: ["you're", "are you", "you are (casual)"], hint: "\"tew eh\" — the s of es is silent, so the two words blur into one short sound. tu is the casual you, for a friend, a child or family." },
        { id: "fr-u3l2-cest", type: "vocab", front: "c'est", reading: "cest", meaning: "it is", example: { jp: "C'est Marie !", en: "It's Marie!" }, drill: { jp: "C'est une pizza", en: "It's a pizza" }, accept: ["it's", "this is", "that is"], hint: "One syllable, \"say\". The apostrophe is ce + est squeezed together, because French refuses to let two vowels collide. It is the workhorse of pointing: c'est Marie, c'est ça." },
        { id: "fr-u3l2-jemappelle", type: "vocab", front: "je m'appelle", reading: "jemappelle", meaning: "my name is", example: { jp: "Bonjour, je m'appelle Marie.", en: "Hello, my name is Marie." }, drill: { jp: "Je m'appelle Marie", en: "My name is Marie" }, accept: ["i am called", "i'm called", "my name's"], hint: "Literally \"I call myself\" — THE way to introduce yourself." },
        { id: "fr-u3l2-ilest", type: "vocab", front: "il est", reading: "ilest", meaning: "he is", example: { jp: "Paul ? Il est ici.", en: "Paul? He is here." }, drill: { jp: "Il est ici", en: "He is here" }, accept: ["he's", "it is (he)", "it's (masculine)"], hint: "\"ee-LAY\" — the l of il jumps onto est and the final t stays silent. il covers both he and it for a masculine noun: le café ? Il est là." },
        { id: "fr-u3l2-elleest", type: "vocab", front: "elle est", reading: "elleest", meaning: "she is", example: { jp: "Marie ? Elle est là.", en: "Marie? She is there." }, drill: { jp: "Elle est là", en: "She is there" }, accept: ["she's", "it is (she)", "it's (feminine)"], hint: "\"eh-LAY\" — the double l is a plain l and the final e is silent, so elle sounds just like el. It covers she and it for a feminine noun." },
      ],
    },
    {
      id: "fr-u3l3",
      unit: 3,
      lesson: 3,
      title: "Keeping it moving",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask and react: qui, comment, où — with d'accord, voilà and ça.",
      items: [
        { id: "fr-u3l3-qui", type: "vocab", front: "qui", reading: "qui", meaning: "who", example: { jp: "C'est qui ?", en: "Who is it?" }, drill: { jp: "C'est qui madame", en: "Who is it madam" }, accept: ["whom", "who?", "the one who"], hint: "\"kee\" — qu is a hard k and the u is silent, as in almost every French qu word. C'est qui ? is the everyday who is it?" },
        { id: "fr-u3l3-comment", type: "vocab", front: "comment", reading: "comment", meaning: "how", example: { jp: "Comment ça va ?", en: "How's it going?" }, drill: { jp: "Comment ça va Paul", en: "How's it going Paul" }, accept: ["what (pardon)", "how?", "in what way"], hint: "Also the polite \"what?\" when you didn't catch something: Comment ?" },
        { id: "fr-u3l3-ou", type: "vocab", front: "où", reading: "ou", meaning: "where", example: { jp: "Tu es où ?", en: "Where are you?" }, drill: { jp: "Marie tu es où", en: "Marie where are you" }, accept: ["where?", "where at", "what place"], hint: "où (accent) = where. ou (no accent) = or. The accent is the whole difference." },
        { id: "fr-u3l3-daccord", type: "vocab", front: "d'accord", reading: "daccord", meaning: "okay", example: { jp: "D'accord, merci !", en: "Okay, thanks!" }, drill: { jp: "D'accord merci madame", en: "Okay thank you madam" }, accept: ["ok", "agreed", "alright"], hint: "\"da-KOR\" — the final d is silent. Literally \"in agreement\": être d'accord is to agree, so d'accord alone is a spoken okay, fine by me." },
        { id: "fr-u3l3-voila", type: "vocab", front: "voilà", reading: "voila", meaning: "here it is", example: { jp: "Voilà Marie !", en: "Here's Marie!" }, drill: { jp: "Voilà le taxi", en: "Here's the taxi" }, accept: ["there it is", "there you go", "here you go"], hint: "\"vwa-LAH\" — oi is \"wah\" and the à is a plain a. It is vois + là, see there: used when handing something over, or to mean and there you have it." },
        { id: "fr-u3l3-ca", type: "vocab", front: "ça", reading: "ca", meaning: "that", example: { jp: "Oui, c'est ça !", en: "Yes, that's it!" }, drill: { jp: "Oui c'est ça", en: "Yes that's it" }, accept: ["it", "this", "that one"], hint: "\"sah\" — the cedilla keeps the c soft before a, so never \"kah\". It is the all-purpose that or it: ça va, c'est ça, ça suffit." },
      ],
    },
  ],
};
