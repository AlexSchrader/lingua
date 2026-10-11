// FR Unit 9 — Les verbes ("Verbs") — A1
// The verb engine: avoir chunks (j'ai faim!), the everyday -er verbs as je/tu
// chunks, and the power verbs (want/can/know/do) including the lifesaver
// "je ne comprends pas". Conjugation as a SYSTEM (nous/vous, infinitives,
// passé composé) is A2 material — here verbs live as chunks, like ja's ～ます
// forms did before U45's conjugation drills. Conventions: see fr/unit1.js.
export const FR_UNIT10 = {
  id: "fr-u10",
  lang: "fr",
  title: "Les verbes",
  order: 10,
  stage: "a1",
  lessons: [
    {
      id: "fr-u10l1",
      unit: 10,
      lesson: 1,
      title: "Having",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use avoir: j'ai, tu as, il a, elle a — give your age with it, and feel it: j'ai faim, j'ai soif.",
      items: [
        { id: "fr-u10l1-jai", type: "vocab", front: "j'ai", reading: "jai", meaning: "I have", example: { jp: "J'ai un frère et une sœur.", en: "I have a brother and a sister." }, drill: { jp: "J'ai un frère et une sœur", en: "I have a brother and a sister" }, accept: ["i've", "have", "i have got", "i got"], hint: "je + ai squishes to j'ai — French hates two vowels bumping." },
        { id: "fr-u10l1-tuas", type: "vocab", front: "tu as", reading: "tuas", meaning: "you have", example: { jp: "Tu as un café ?", en: "Do you have a coffee?" }, drill: { jp: "Tu as un café", en: "You have a coffee" }, accept: ["you've", "do you have", "you have got"], hint: "\"tew ah\" — the s is silent, so it is two short vowels. From avoir; tu as… ? with a rising voice is already a question, no word order to change." },
        { id: "fr-u10l1-ila", type: "vocab", front: "il a", reading: "ila", meaning: "he has", example: { jp: "Il a une petite maison.", en: "He has a small house." }, drill: { jp: "Il a une maison à Paris", en: "He has a house in Paris" }, accept: ["he's got", "he has got", "he owns"], hint: "\"ee lah\" — two separate syllables, with nothing linking them, unlike il est where the l jumps across. From avoir, to have." },
        { id: "fr-u10l1-ellea", type: "vocab", front: "elle a", reading: "ellea", meaning: "she has", example: { jp: "Elle a douze ans.", en: "She is twelve years old." }, drill: { jp: "Elle a douze ans", en: "She is twelve years old" }, accept: ["she's got", "she has got", "she owns"], hint: "Age uses avoir, not être: elle a douze ans = \"she HAS twelve years\"." },
        { id: "fr-u10l1-ans", type: "vocab", front: "ans", reading: "ans", meaning: "years old", example: { jp: "Mon frère a dix ans.", en: "My brother is ten years old." }, drill: { jp: "Mon frère a dix ans", en: "My brother is ten years old" }, accept: ["years", "years of age", "years old (age)"], hint: "Never dropped the way English drops it: « j'ai douze » is not French — you must say « j'ai douze ans »." },
        { id: "fr-u10l1-faim", type: "vocab", front: "faim", reading: "faim", meaning: "hunger", example: { jp: "J'ai faim !", en: "I'm hungry!" }, drill: { jp: "J'ai faim maintenant", en: "I'm hungry now" }, accept: ["hungry", "starving", "being hungry"], hint: "French HAS hunger: j'ai faim = I'm hungry. Never je suis faim." },
        { id: "fr-u10l1-soif", type: "vocab", front: "soif", reading: "soif", meaning: "thirst", example: { jp: "Tu as soif ? Voilà l'eau !", en: "Are you thirsty? Here's the water!" }, drill: { jp: "Tu as soif", en: "You're thirsty" }, accept: ["thirsty", "parched", "being thirsty"], hint: "\"swahf\" — oi is \"wah\" and the f sounds, one of the CaReFuL consonants. Like faim you HAVE it: j'ai soif, never \"je suis soif\"." },
      ],
    },
    {
      id: "fr-u10l2",
      unit: 10,
      lesson: 2,
      title: "Doing things",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Live your day in -er verbs: je parle, j'habite, je travaille, je regarde, j'écoute.",
      items: [
        { id: "fr-u10l2-jeparle", type: "vocab", front: "je parle", reading: "jeparle", meaning: "I speak", example: { jp: "Je parle avec ma mère le soir.", en: "I talk with my mother in the evening." }, drill: { jp: "Je parle avec ma mère", en: "I speak with my mother" }, accept: ["i talk", "i'm speaking", "i am speaking"], hint: "\"zhuh PARL\" — the final e is silent, so the word stops on the l. From parler, and it covers I speak and I am speaking alike." },
        { id: "fr-u10l2-tuparles", type: "vocab", front: "tu parles", reading: "tuparles", meaning: "you speak", example: { jp: "Tu parles très bien !", en: "You speak very well!" }, drill: { jp: "Tu parles très bien", en: "You speak very well" }, accept: ["you talk", "you're speaking", "do you speak", "you are speaking"], hint: "Sounds identical to je parle — the -s is silent. The tu is what you hear." },
        { id: "fr-u10l2-jhabite", type: "vocab", front: "j'habite", reading: "jhabite", meaning: "I live", example: { jp: "J'habite à Paris, et toi ?", en: "I live in Paris, and you?" }, drill: { jp: "J'habite à Paris", en: "I live in Paris" }, accept: ["i live in", "i reside", "i live at", "i dwell"], hint: "et toi ? = \"and you?\" — the easiest way to bounce any question back." },
        { id: "fr-u10l2-jetravaille", type: "vocab", front: "je travaille", reading: "jetravaille", meaning: "I work", example: { jp: "Je travaille le matin.", en: "I work in the morning." }, drill: { jp: "Je travaille le matin", en: "I work in the morning" }, accept: ["i'm working", "i am working", "i work at"], hint: "\"zhuh tra-VYE\" — ill is the \"ee-y\" glide of papillon, so the ending is \"vy\", never \"vail\". The noun le travail is work." },
        { id: "fr-u10l2-jeregarde", type: "vocab", front: "je regarde", reading: "jeregarde", meaning: "I watch", example: { jp: "Je regarde la ville, la nuit.", en: "I watch the city at night." }, drill: { jp: "Je regarde la ville", en: "I watch the city" }, accept: ["i look at", "i'm watching", "i look"], hint: "\"ruh-GARD\" — the first e is barely there and the final e is silent. It means watch or look at with no extra word attached: je regarde la ville." },
        { id: "fr-u10l2-jecoute", type: "vocab", front: "j'écoute", reading: "jecoute", meaning: "I listen", example: { jp: "J'écoute, madame !", en: "I'm listening, ma'am!" }, drill: { jp: "J'écoute Marie et Paul", en: "I'm listening to Marie and Paul" }, accept: ["i'm listening", "i listen to", "i am listening"], hint: "\"zhay-KOOT\" — the é is the closed \"ay\", ou is \"oo\", the final e is silent. From écouter, to listen on purpose, as against entendre, to simply hear." },
      ],
    },
    {
      id: "fr-u10l3",
      unit: 10,
      lesson: 3,
      title: "Want, can, know",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Get things done: je veux, je peux, je sais, je fais, je comprends — je ne comprends pas.",
      items: [
        { id: "fr-u10l3-jeveux", type: "vocab", front: "je veux", reading: "jeveux", meaning: "I want", example: { jp: "Je veux un croissant !", en: "I want a croissant!" }, drill: { jp: "Je veux un croissant", en: "I want a croissant" }, accept: ["i want to", "i'd like", "i wish", "i want it"], hint: "Direct — fine with friends. In a shop, je voudrais is the polite version of the same wish." },
        { id: "fr-u10l3-jepeux", type: "vocab", front: "je peux", reading: "jepeux", meaning: "I can", example: { jp: "Je peux ? — Oui, oui !", en: "May I? — Yes, yes!" }, drill: { jp: "Oui je peux madame", en: "Yes I can madam" }, accept: ["may i", "i am able", "i can do it", "i'm able to"], hint: "Je peux ? alone, with rising voice, is a full polite \"may I?\"." },
        { id: "fr-u10l3-jesais", type: "vocab", front: "je sais", reading: "jesais", meaning: "I know", example: { jp: "Oui, je sais !", en: "Yes, I know!" }, drill: { jp: "Oui je sais madame", en: "Yes I know madam" }, accept: ["i know it", "i do know", "i know that"], hint: "\"zhuh seh\" — ai is the open \"eh\" and the final s is silent. From savoir; je ne sais pas is the sentence you will reach for most." },
        { id: "fr-u10l3-jefais", type: "vocab", front: "je fais", reading: "jefais", meaning: "I make", example: { jp: "Je fais un café ce matin.", en: "I'm making a coffee this morning." }, drill: { jp: "Je fais un café", en: "I'm making a coffee" }, accept: ["i do", "i'm making", "i'm doing"], hint: "\"zhuh feh\" — the same open \"eh\" ending as je sais, with the s silent. From faire, which covers do and make both: je fais un café, je fais le travail." },
        { id: "fr-u10l3-jecomprends", type: "vocab", front: "je comprends", reading: "jecomprends", meaning: "I understand", example: { jp: "Ah, oui — je comprends !", en: "Ah, yes — I understand!" }, drill: { jp: "Je comprends très bien", en: "I understand very well" }, accept: ["i get it", "understood", "i see", "i follow"], hint: "\"zhuh kon-PRON\" — nasal twice, and the -ds on the end is completely silent. From comprendre, literally to take together." },
        { id: "fr-u10l3-jenecomprendspas", type: "vocab", front: "je ne comprends pas", reading: "jenecomprendspas", meaning: "I don't understand", example: { jp: "Pardon, je ne comprends pas.", en: "Sorry, I don't understand." }, drill: { jp: "Pardon je ne comprends pas", en: "Sorry I don't understand" }, accept: ["i do not understand", "i don't get it", "i don't follow"], hint: "ne … pas wraps around the verb to say NOT — the single most useful sentence in your first week." },
      ],
    },
  ],
};
