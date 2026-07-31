// FR Unit 25 — Le monde ("The world") — A1
// Countries, nationalities and languages, plus animals and the everyday objects
// that fill out a beginner's vocabulary. Closes the A1 arc.
// Conventions: see fr/unit1.js.
export const FR_UNIT25 = {
  id: "fr-u25",
  lang: "fr",
  title: "Le monde",
  order: 25,
  stage: "a1",
  lessons: [
    {
      id: "fr-u25l1",
      unit: 25,
      lesson: 1,
      title: "Countries and languages",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where you're from and what you speak: la France, l'Angleterre, français, anglais, le monde.",
      items: [
        { id: "fr-u25l1-lafrance", type: "vocab", front: "la France", reading: "lafrance", meaning: "France", example: { jp: "La France est un beau pays.", en: "France is a beautiful country." }, accept: ["france"], hint: "Countries take an article in French: la France, l'Angleterre, le Japon." },
        { id: "fr-u25l1-lepays", type: "vocab", front: "le pays", reading: "lepays", meaning: "country", example: { jp: "Quel pays ? La France ou l'Angleterre ?", en: "Which country? France or England?" }, accept: ["the country", "nation"] },
        { id: "fr-u25l1-langleterre", type: "vocab", front: "l'Angleterre", reading: "langleterre", meaning: "England", example: { jp: "En Angleterre, il pleut beaucoup.", en: "In England, it rains a lot." }, accept: ["england"] },
        { id: "fr-u25l1-lejapon", type: "vocab", front: "le Japon", reading: "lejapon", meaning: "Japan", example: { jp: "Je vais au Japon en juillet.", en: "I'm going to Japan in July." }, accept: ["japan"], hint: "au Japon (masculine), en France (feminine). The article decides." },
        { id: "fr-u25l1-lemonde", type: "vocab", front: "le monde", reading: "lemonde", meaning: "world", example: { jp: "Tout le monde parle anglais ici.", en: "Everybody speaks English here." }, accept: ["the world", "everyone"], hint: "tout le monde = everybody — literally \"all the world\"." },
        { id: "fr-u25l1-francais", type: "vocab", front: "français", reading: "francais", meaning: "French", example: { jp: "Je suis français, et toi ?", en: "I'm French, and you?" }, accept: ["french person"], hint: "Lowercase for the adjective (je suis français), capital for the person (un Français)." },
        { id: "fr-u25l1-anglais", type: "vocab", front: "anglais", reading: "anglais", meaning: "English", example: { jp: "Ma mère est anglaise.", en: "My mother is English." }, accept: ["english person"] },
        { id: "fr-u25l1-toutlemonde", type: "vocab", front: "tout le monde", reading: "toutlemonde", meaning: "everybody", example: { jp: "Tout le monde est ici !", en: "Everybody is here!" }, accept: ["everyone", "all"] },
      ],
    },
    {
      id: "fr-u25l2",
      unit: 25,
      lesson: 2,
      title: "Animals",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name animals: le chien, le chat, l'oiseau, le cheval, la vache, le poisson.",
      items: [
        { id: "fr-u25l2-lanimal", type: "vocab", front: "l'animal", reading: "lanimal", meaning: "animal", example: { jp: "J'aime beaucoup les animaux.", en: "I really like animals." }, accept: ["the animal"], hint: "Irregular plural: l'animal → les animaux. Words in -al usually do this." },
        { id: "fr-u25l2-lechien", type: "vocab", front: "le chien", reading: "lechien", meaning: "dog", example: { jp: "Le chien est dans le jardin.", en: "The dog is in the garden." }, accept: ["the dog"] },
        { id: "fr-u25l2-lechat", type: "vocab", front: "le chat", reading: "lechat", meaning: "cat", example: { jp: "Le chat dort sur le canapé.", en: "The cat is sleeping on the sofa." }, accept: ["the cat"], hint: "dort = sleeps, from the same verb as je dors (Unit 22)." },
        { id: "fr-u25l2-loiseau", type: "vocab", front: "l'oiseau", reading: "loiseau", meaning: "bird", example: { jp: "L'oiseau est dans l'arbre.", en: "The bird is in the tree." }, accept: ["the bird"] },
        { id: "fr-u25l2-lecheval", type: "vocab", front: "le cheval", reading: "lecheval", meaning: "horse", example: { jp: "Le cheval est très grand.", en: "The horse is very big." }, accept: ["the horse"] },
        { id: "fr-u25l2-lavache", type: "vocab", front: "la vache", reading: "lavache", meaning: "cow", example: { jp: "La vache est à la montagne.", en: "The cow is in the mountains." }, accept: ["the cow"] },
        { id: "fr-u25l2-lasouris", type: "vocab", front: "la souris", reading: "lasouris", meaning: "mouse", example: { jp: "Le chat cherche la souris.", en: "The cat is looking for the mouse." }, accept: ["the mouse"] },
      ],
    },
    {
      id: "fr-u25l3",
      unit: 25,
      lesson: 3,
      title: "Everyday things",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name daily objects: le livre, le téléphone, l'ordinateur, le papier, le stylo, la musique.",
      items: [
        { id: "fr-u25l3-lelivre", type: "vocab", front: "le livre", reading: "lelivre", meaning: "book", example: { jp: "Je lis un livre français.", en: "I'm reading a French book." }, accept: ["the book"], hint: "je lis = I read, from lire." },
        { id: "fr-u25l3-jelis", type: "vocab", front: "je lis", reading: "jelis", meaning: "I read", example: { jp: "Le soir, je lis dans mon lit.", en: "In the evening, I read in my bed." }, accept: ["i'm reading"] },
        { id: "fr-u25l3-letelephone", type: "vocab", front: "le téléphone", reading: "letelephone", meaning: "telephone", example: { jp: "Mon téléphone est sur la table.", en: "My phone is on the table." }, accept: ["the phone", "telephone", "mobile"] },
        { id: "fr-u25l3-lordinateur", type: "vocab", front: "l'ordinateur", reading: "lordinateur", meaning: "computer", example: { jp: "Je travaille avec un ordinateur.", en: "I work with a computer." }, accept: ["the computer", "pc"] },
        { id: "fr-u25l3-lepapier", type: "vocab", front: "le papier", reading: "lepapier", meaning: "paper", example: { jp: "Un papier et un stylo, s'il vous plaît.", en: "A paper and a pen, please." }, accept: ["the paper"] },
        { id: "fr-u25l3-lestylo", type: "vocab", front: "le stylo", reading: "lestylo", meaning: "pen", example: { jp: "J'écris avec un stylo.", en: "I write with a pen." }, accept: ["the pen"], hint: "j'écris = I write, from écrire." },
        { id: "fr-u25l3-jecris", type: "vocab", front: "j'écris", reading: "jecris", meaning: "I write", example: { jp: "J'écris une liste pour les courses.", en: "I'm writing a list for the shopping." }, accept: ["i'm writing"] },
        { id: "fr-u25l3-lamusique", type: "vocab", front: "la musique", reading: "lamusique", meaning: "music", example: { jp: "J'écoute de la musique tous les jours.", en: "I listen to music every day." }, accept: ["the music"] },
      ],
    },
  ],
};
