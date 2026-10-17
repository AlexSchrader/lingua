// FR Unit 25 — Le monde ("The world") — A1
// Countries, nationalities and languages, plus animals and the everyday objects
// that fill out a beginner's vocabulary. Closes the A1 arc.
// Conventions: see fr/unit1.js.
export const FR_UNIT26 = {
  id: "fr-u26",
  lang: "fr",
  title: "Le monde",
  order: 26,
  stage: "a1",
  lessons: [
    {
      id: "fr-u26l1",
      unit: 26,
      lesson: 1,
      title: "Countries and languages",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where you're from and what you speak: la France, l'Angleterre, français, anglais, le monde.",
      items: [
        { id: "fr-u26l1-lafrance", type: "vocab", front: "la France", reading: "lafrance", meaning: "France", example: { jp: "La France est un beau pays.", en: "France is a beautiful country." }, drill: { jp: "La France est très belle", en: "France is very beautiful" }, accept: ["france", "the french republic", "france (country)"], hint: "Countries take an article in French: la France, l'Angleterre, le Japon." },
        { id: "fr-u26l1-lepays", type: "vocab", front: "le pays", reading: "lepays", meaning: "country", example: { jp: "Quel pays ? La France ou l'Angleterre ?", en: "Which country? France or England?" }, drill: { jp: "Le pays est très grand", en: "The country is very big" }, accept: ["the country", "nation", "a country"], hint: "\"pay-EE\" — two syllables, and the s is silent, so singular and plural sound identical: le pays, les pays." },
        { id: "fr-u26l1-langleterre", type: "vocab", front: "l'Angleterre", reading: "langleterre", meaning: "England", example: { jp: "En Angleterre, il pleut beaucoup.", en: "In England, it rains a lot." }, drill: { jp: "L'Angleterre est un beau pays", en: "England is a beautiful country" }, accept: ["england", "the country england", "england (country)"], hint: "\"on-gluh-TAIR\" — a nasal start and -erre as \"air\". Feminine, so en Angleterre. It is Angle + terre, the land of the Angles." },
        { id: "fr-u26l1-lejapon", type: "vocab", front: "le Japon", reading: "lejapon", meaning: "Japan", example: { jp: "Je vais au Japon en juillet.", en: "I'm going to Japan in July." }, drill: { jp: "Le Japon est très loin", en: "Japan is very far" }, accept: ["japan", "the country japan", "japan (country)"], hint: "au Japon (masculine), en France (feminine). The article decides." },
        { id: "fr-u26l1-lemonde", type: "vocab", front: "le monde", reading: "lemonde", meaning: "world", example: { jp: "Tout le monde parle anglais ici.", en: "Everybody speaks English here." }, drill: { jp: "Le monde est grand", en: "The world is big" }, accept: ["the world", "everyone", "the globe"], hint: "tout le monde = everybody — literally \"all the world\"." },
        { id: "fr-u26l1-francais", type: "vocab", front: "français", reading: "francais", meaning: "French (the adjective)", example: { jp: "Je suis français, et toi ?", en: "I'm French, and you?" }, drill: { jp: "Mon père est français", en: "My father is French" }, accept: ["french person", "french (nationality)", "from france"], hint: "Lowercase for the adjective (je suis français), capital for the person (un Français)." },
        { id: "fr-u26l1-anglais", type: "vocab", front: "anglais", reading: "anglais", meaning: "English (the adjective)", example: { jp: "Ma mère est anglaise.", en: "My mother is English." }, drill: { jp: "Je parle anglais avec Paul", en: "I speak English with Paul" }, accept: ["english person", "english (nationality)", "from england"], hint: "\"on-GLEH\" — nasal start, ai the open \"eh\", final s silent. The feminine anglaise buzzes that s as a z. Lowercase when it is the adjective." },
        { id: "fr-u26l1-toutlemonde", type: "vocab", front: "tout le monde", reading: "toutlemonde", meaning: "everybody", example: { jp: "Tout le monde est ici !", en: "Everybody is here!" }, drill: { jp: "Tout le monde est à la maison", en: "Everybody is at home" }, accept: ["everyone", "all", "every one"], hint: "\"too luh MOND\" — the t of tout is silent, and monde's final e makes the d sound. Literally all the world, and it takes a SINGULAR verb: tout le monde est ici." },
      ],
    },
    {
      id: "fr-u26l2",
      unit: 26,
      lesson: 2,
      title: "Animals",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name animals: le chien, le chat, l'oiseau, le cheval, la vache, la souris.",
      items: [
        { id: "fr-u26l2-lanimal", type: "vocab", front: "l'animal", reading: "lanimal", meaning: "animal", example: { jp: "J'aime beaucoup les animaux.", en: "I really like animals." }, drill: { jp: "L'animal est dans le jardin", en: "The animal is in the garden" }, accept: ["the animal", "animal", "a creature"], hint: "Irregular plural: l'animal → les animaux. Words in -al usually do this." },
        { id: "fr-u26l2-lechien", type: "vocab", front: "le chien", reading: "lechien", meaning: "dog", example: { jp: "Le chien est dans le jardin.", en: "The dog is in the garden." }, drill: { jp: "Le chien dort dans la cuisine", en: "The dog sleeps in the kitchen" }, accept: ["the dog", "dog", "a dog", "the animal that barks", "dogs"], hint: "\"shyan\" — ch is sh and -ien is a single nasal glide. Masculine: le chien; une chienne for a female, where the n finally sounds." },
        { id: "fr-u26l2-lechat", type: "vocab", front: "le chat", reading: "lechat", meaning: "cat", example: { jp: "Le chat dort sur le canapé.", en: "The cat is sleeping on the sofa." }, drill: { jp: "Le chat est sur la chaise", en: "The cat is on the chair" }, accept: ["the cat", "cat", "a cat", "the small animal that purrs", "cats"], hint: "dort = sleeps, from the same verb as je dors (Unit 22)." },
        { id: "fr-u26l2-loiseau", type: "vocab", front: "l'oiseau", reading: "loiseau", meaning: "bird", example: { jp: "L'oiseau est dans l'arbre.", en: "The bird is in the tree." }, drill: { jp: "Je vois l'oiseau dans le jardin", en: "I see the bird in the garden" }, accept: ["the bird", "bird", "a bird", "an animal with feathers and wings", "birds"], hint: "\"wa-ZOH\" — oi is \"wah\", the single s buzzes as a z, eau is \"oh\": three rules in one short word. Masculine; plural oiseaux." },
        { id: "fr-u26l2-lecheval", type: "vocab", front: "le cheval", reading: "lecheval", meaning: "horse", example: { jp: "Le cheval est très grand.", en: "The horse is very big." }, drill: { jp: "Le cheval mange beaucoup", en: "The horse eats a lot" }, accept: ["the horse", "horse", "a horse", "the large animal people ride", "horses"], hint: "\"shuh-VAL\" — ch is sh and the final l sounds. Masculine, with an irregular plural: les chevaux, exactly like animal to animaux." },
        { id: "fr-u26l2-lavache", type: "vocab", front: "la vache", reading: "lavache", meaning: "cow", example: { jp: "La vache est à la montagne.", en: "The cow is in the mountains." }, drill: { jp: "La vache est très grande", en: "The cow is very big" }, accept: ["the cow", "cow", "a cow", "the farm animal that gives milk", "cows"], hint: "\"vash\" — the final e is silent and -che is sh. Feminine: la vache. On its own, Oh la vache ! is a mild wow." },
        { id: "fr-u26l2-lasouris", type: "vocab", front: "la souris", reading: "lasouris", meaning: "mouse", example: { jp: "Le chat cherche la souris.", en: "The cat is looking for the mouse." }, drill: { jp: "La souris est très petite", en: "The mouse is very small" }, accept: ["the mouse", "mouse", "a mouse", "a small grey rodent", "mice"], hint: "\"soo-REE\" — ou is \"oo\" and the s is silent, so singular and plural sound alike. Feminine: la souris, and it is the computer mouse too." },
      ],
    },
    {
      id: "fr-u26l3",
      unit: 26,
      lesson: 3,
      title: "Everyday things",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name daily objects: le livre, le téléphone, l'ordinateur, le papier, le stylo, la musique.",
      items: [
        { id: "fr-u26l3-lelivre", type: "vocab", front: "le livre", reading: "lelivre", meaning: "book", example: { jp: "Je lis un livre français.", en: "I'm reading a French book." }, drill: { jp: "Le livre est sur la table", en: "The book is on the table" }, accept: ["the book", "book", "a book", "pages bound together to read", "books"], hint: "je lis = I read, from lire." },
        { id: "fr-u26l3-jelis", type: "vocab", front: "je lis", reading: "jelis", meaning: "I read", example: { jp: "Le soir, je lis dans mon lit.", en: "In the evening, I read in my bed." }, drill: { jp: "Je lis un livre le matin", en: "I read a book in the morning" }, accept: ["i'm reading", "i am reading", "i do read"], hint: "\"lee\" — the s is silent. From lire. Watch the twin: le lit, bed, is said exactly the same way." },
        { id: "fr-u26l3-letelephone", type: "vocab", front: "le téléphone", reading: "letelephone", meaning: "telephone", example: { jp: "Mon téléphone est sur la table.", en: "My phone is on the table." }, drill: { jp: "Le téléphone est dans le sac", en: "The phone is in the bag" }, accept: ["the phone", "telephone", "mobile"], hint: "\"tay-lay-FON\" — two closed \"ay\" sounds and ph as f. Masculine: le téléphone. A mobile is usually le portable." },
        { id: "fr-u26l3-lordinateur", type: "vocab", front: "l'ordinateur", reading: "lordinateur", meaning: "computer", example: { jp: "Je travaille avec un ordinateur.", en: "I work with a computer." }, drill: { jp: "L'ordinateur est sur la table", en: "The computer is on the table" }, accept: ["the computer", "pc", "a computer"], hint: "\"or-dee-na-TUR\" — eu before r is the open rounded vowel. Masculine: un ordinateur, from ordonner, to put in order; nothing to do with computing." },
        { id: "fr-u26l3-lepapier", type: "vocab", front: "le papier", reading: "lepapier", meaning: "paper", example: { jp: "Le papier est sur la table.", en: "The paper is on the table." }, drill: { jp: "Le papier est dans le sac", en: "The paper is in the bag" }, accept: ["the paper", "paper", "a sheet of paper"], hint: "\"pa-PYAY\" — the -ier ending is one \"yay\" glide. Masculine: le papier. In the plural, les papiers means your documents." },
        { id: "fr-u26l3-lestylo", type: "vocab", front: "le stylo", reading: "lestylo", meaning: "pen", example: { jp: "J'écris avec un stylo.", en: "I write with a pen." }, drill: { jp: "Le stylo est dans le sac", en: "The pen is in the bag" }, accept: ["the pen", "pen", "a pen", "what you write with in ink", "pens"], hint: "j'écris = I write, from écrire." },
        { id: "fr-u26l3-jecris", type: "vocab", front: "j'écris", reading: "jecris", meaning: "I write", example: { jp: "J'écris une liste.", en: "I'm writing a list." }, drill: { jp: "J'écris à ma mère le soir", en: "I write to my mother in the evening" }, accept: ["i'm writing", "i am writing", "i do write"], hint: "\"zhay-KREE\" — the é is \"ay\" and the final s is silent. From écrire; un écrivain is a writer." },
        { id: "fr-u26l3-lamusique", type: "vocab", front: "la musique", reading: "lamusique", meaning: "music", example: { jp: "J'aime beaucoup la musique.", en: "I really like music." }, drill: { jp: "J'écoute la musique le soir", en: "I listen to music in the evening" }, accept: ["the music", "music", "a piece of music"], hint: "\"mew-ZEEK\" — the tight French u, a single s buzzing as a z, and qu as a hard k. Feminine: la musique." },
      ],
    },
  ],
};
