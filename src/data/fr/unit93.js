// FR Unit 93 — Le style et l'apparence ("Style and appearance") — B1
// Strand D, coverage unit 13 of 14 (block 3). Slot: coverage-b1-13 (generic
// "Vocabulary 13 (B1)"); given a real theme so the lessons cohere — slot number kept.
// A1 taught the garments (la chemise, le manteau); this is how they FIT and how you
// put yourself together. Another concrete everyday domain the abstract B1 slots miss.
// See unit84.js for the block-3 strategy.
export const FR_UNIT93 = {
  id: "fr-u93",
  lang: "fr",
  title: "Le style et l'apparence",
  order: 93,
  stage: "b1",
  lessons: [
    {
      id: "fr-u93l1",
      unit: 93,
      lesson: 1,
      title: "In fashion or out",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Judge how someone is dressed: fashion, a style, an outfit — call it elegant, in fashion or out of date.",
      items: [
        { id: "fr-u93l1-lamode", type: "vocab", front: "la mode", reading: "lamode", meaning: "fashion", example: { jp: "La mode change tous les ans.", en: "Fashion changes every year." }, accept: ["the fashion", "trend"], hint: "Feminine here. Careful: le mode (masculine) means a method or a setting." },
        { id: "fr-u93l1-lestyle", type: "vocab", front: "le style", reading: "lestyle", meaning: "look", example: { jp: "J'aime beaucoup son style.", en: "I really like their look." }, drill: { jp: "J'aime beaucoup le style", en: "I really like the look" }, accept: ["style", "the style"] },
        { id: "fr-u93l1-latenue", type: "vocab", front: "la tenue", reading: "latenue", meaning: "outfit", example: { jp: "Ta tenue est parfaite pour la fête.", en: "Your outfit is perfect for the party." }, drill: { jp: "La tenue est parfaite pour la fête", en: "The outfit is perfect for the party" }, accept: ["the outfit", "dress", "get-up"] },
        { id: "fr-u93l1-elegant", type: "vocab", front: "élégant", reading: "elegant", meaning: "smart", example: { jp: "Il est toujours très élégant.", en: "He's always very elegant." }, accept: ["elegant", "stylish", "chic"] },
        { id: "fr-u93l1-alamode", type: "vocab", front: "à la mode", reading: "alamode", meaning: "in fashion", example: { jp: "Ce manteau est très à la mode.", en: "This coat is very much in fashion." }, accept: ["fashionable", "trendy", "in style"] },
        { id: "fr-u93l1-demode", type: "vocab", front: "démodé", reading: "demode", meaning: "out of date", example: { jp: "Ce chapeau est un peu démodé.", en: "This hat is a little out of date." }, accept: ["old-fashioned", "dated", "unfashionable"], hint: "dé- reversing again: mode → démodé." },
      ],
    },
    {
      id: "fr-u93l2",
      unit: 93,
      lesson: 2,
      title: "How it fits",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how a garment sits on you: tight or loose, and name the pocket, the sleeve, the collar and the belt.",
      items: [
        { id: "fr-u93l2-serre", type: "vocab", front: "serré", reading: "serre", meaning: "tight", example: { jp: "Ce pantalon est trop serré.", en: "These trousers are too tight." }, accept: ["tight-fitting", "snug", "close-fitting"] },
        { id: "fr-u93l2-ample", type: "vocab", front: "ample", reading: "ample", meaning: "loose", example: { jp: "Je préfère une chemise ample.", en: "I prefer a loose shirt." }, accept: ["baggy", "roomy", "flowing"] },
        { id: "fr-u93l2-lapoche", type: "vocab", front: "la poche", reading: "lapoche", meaning: "pocket", example: { jp: "Mes clés sont dans ma poche.", en: "My keys are in my pocket." }, accept: ["the pocket"] },
        { id: "fr-u93l2-lamanche", type: "vocab", front: "la manche", reading: "lamanche", meaning: "sleeve", example: { jp: "La manche est trop longue.", en: "The sleeve is too long." }, accept: ["the sleeve"], hint: "Feminine for a sleeve. La Manche with a capital is the English Channel." },
        { id: "fr-u93l2-lecol", type: "vocab", front: "le col", reading: "lecol", meaning: "collar", example: { jp: "Le col de la chemise est sale.", en: "The shirt collar is dirty." }, accept: ["the collar", "neck"] },
        { id: "fr-u93l2-laceinture", type: "vocab", front: "la ceinture", reading: "laceinture", meaning: "belt", example: { jp: "J'ai besoin d'une ceinture.", en: "I need a belt." }, accept: ["the belt"], hint: "Also the seatbelt: la ceinture de sécurité." },
      ],
    },
    {
      id: "fr-u93l3",
      unit: 93,
      lesson: 3,
      title: "Jewellery and the finishing touch",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name what you add on top: jewellery, a ring, a necklace, a watch — and say things match.",
      items: [
        { id: "fr-u93l3-lesbijoux", type: "vocab", front: "les bijoux", reading: "lesbijoux", meaning: "jewellery", example: { jp: "Elle porte de beaux bijoux.", en: "She's wearing beautiful jewellery." }, accept: ["the jewellery", "jewels", "jewelry"], hint: "One of the handful of nouns whose plural takes -x: un bijou → des bijoux." },
        { id: "fr-u93l3-labague", type: "vocab", front: "la bague", reading: "labague", meaning: "ring", example: { jp: "Cette bague est en or.", en: "This ring is made of gold." }, drill: { jp: "La bague est en or", en: "The ring is gold" }, accept: ["the ring"] },
        { id: "fr-u93l3-lecollier", type: "vocab", front: "le collier", reading: "lecollier", meaning: "necklace", example: { jp: "Le collier va bien avec la robe.", en: "The necklace goes well with the dress." }, accept: ["the necklace"], hint: "From le cou (neck) — and it's also a dog's collar." },
        { id: "fr-u93l3-lamontre", type: "vocab", front: "la montre", reading: "lamontre", meaning: "watch", example: { jp: "Ma montre est arrêtée.", en: "My watch has stopped." }, accept: ["the watch", "wristwatch"] },
        { id: "fr-u93l3-assorti", type: "vocab", front: "assorti", reading: "assorti", meaning: "matching", example: { jp: "Le sac et les chaussures sont assortis.", en: "The bag and the shoes are matching." }, accept: ["matched", "coordinated", "to match"] },
        { id: "fr-u93l3-lepli", type: "vocab", front: "le pli", reading: "lepli", meaning: "crease", example: { jp: "Il y a un pli sur la jupe.", en: "There's a crease in the skirt." }, accept: ["the fold", "pleat", "wrinkle"], hint: "The noun from plier, which you already know." },
      ],
    },
    {
      id: "fr-u93l4",
      unit: 93,
      lesson: 4,
      title: "Getting ready",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe getting yourself ready: do your hair and make-up, and talk about a brand and a mark.",
      items: [
        { id: "fr-u93l4-semaquiller", type: "vocab", front: "se maquiller", reading: "semaquiller", meaning: "to put on make-up", example: { jp: "Elle se maquille avant de sortir.", en: "She puts on make-up before going out." }, drill: { jp: "Elle va se maquiller avant de sortir", en: "She is going to put on make-up before going out" }, accept: ["do one's make-up", "make oneself up"] },
        { id: "fr-u93l4-lacoiffure", type: "vocab", front: "la coiffure", reading: "lacoiffure", meaning: "hairstyle", example: { jp: "J'aime bien ta nouvelle coiffure.", en: "I really like your new hairstyle." }, drill: { jp: "La coiffure est très jolie", en: "The hairstyle is very pretty" }, accept: ["the hairstyle", "hairdo"], hint: "From le coiffeur, the hairdresser you already know." },
        { id: "fr-u93l4-lamarque", type: "vocab", front: "la marque", reading: "lamarque", meaning: "brand", example: { jp: "C'est une marque française.", en: "It's a French brand." }, accept: ["the brand", "make", "label"] },
        { id: "fr-u93l4-lepeigne", type: "vocab", front: "le peigne", reading: "lepeigne", meaning: "comb", example: { jp: "Je cherche un peigne.", en: "I'm looking for a comb." }, accept: ["the comb"] },
        { id: "fr-u93l4-labrosse", type: "vocab", front: "la brosse", reading: "labrosse", meaning: "brush", example: { jp: "La brosse est dans la salle de bain.", en: "The brush is in the bathroom." }, accept: ["the brush", "hairbrush"], hint: "You already meet it inside « je me brosse les dents »." },
        { id: "fr-u93l4-leparfum", type: "vocab", front: "le parfum", reading: "leparfum", meaning: "perfume", example: { jp: "Ton parfum sent très bon.", en: "Your perfume smells very good." }, drill: { jp: "Le parfum sent très bon", en: "The perfume smells very good" }, accept: ["the perfume", "scent", "fragrance"], hint: "Also an ice-cream flavour: quel parfum ? — which flavour?" },
      ],
    },
  ],
};
