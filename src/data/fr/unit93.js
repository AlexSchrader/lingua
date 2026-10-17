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
        { id: "fr-u93l1-lamode", type: "vocab", front: "la mode", reading: "lamode", meaning: "fashion", example: { jp: "La mode change tous les ans.", en: "Fashion changes every year." }, drill: { jp: "La mode change très vite", en: "Fashion changes very fast" }, accept: ["the fashion", "trend", "fashion sense"], hint: "Feminine here. Careful: le mode (masculine) means a method or a setting." },
        { id: "fr-u93l1-lestyle", type: "vocab", front: "le style", reading: "lestyle", meaning: "look", example: { jp: "J'aime beaucoup son style.", en: "I really like their look." }, drill: { jp: "J'aime beaucoup le style", en: "I really like the look" }, accept: ["style", "the style", "a look"], hint: "A look or style — the final e is silent. Masculine: le style, and avoir du style is to have style." },
        { id: "fr-u93l1-latenue", type: "vocab", front: "la tenue", reading: "latenue", meaning: "outfit", example: { jp: "Ta tenue est parfaite pour la fête.", en: "Your outfit is perfect for the party." }, drill: { jp: "La tenue est parfaite pour la fête", en: "The outfit is perfect for the party" }, accept: ["the outfit", "dress", "get-up"], hint: "An outfit, and also conduct or upkeep — tenue correcte exigée is the dress-code sign. From tenir." },
        { id: "fr-u93l1-elegant", type: "vocab", front: "élégant", reading: "elegant", meaning: "smart", example: { jp: "Il est toujours très élégant.", en: "He's always very elegant." }, drill: { jp: "Ton frère est très élégant", en: "Your brother is very smart" }, accept: ["elegant", "stylish", "chic"], hint: "Smart or elegant — the feminine élégante sounds the final t. L'élégance is the noun." },
        { id: "fr-u93l1-alamode", type: "vocab", front: "à la mode", reading: "alamode", meaning: "in fashion", example: { jp: "Ce manteau est très à la mode.", en: "This coat is very much in fashion." }, drill: { jp: "Ce sac est à la mode", en: "This bag is in fashion" }, accept: ["fashionable", "trendy", "in style"], hint: "In fashion — la mode is fashion. Careful: in cooking, à la mode de means in the style of." },
        { id: "fr-u93l1-demode", type: "vocab", front: "démodé", reading: "demode", meaning: "out of date", example: { jp: "Ce chapeau est un peu démodé.", en: "This hat is a little out of date." }, drill: { jp: "Mon manteau est démodé", en: "My coat is out of date" }, accept: ["old-fashioned", "dated", "unfashionable"], hint: "dé- reversing again: mode → démodé." },
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
        { id: "fr-u93l2-serre", type: "vocab", front: "serré", reading: "serre", meaning: "tight", example: { jp: "Ce pantalon est trop serré.", en: "These trousers are too tight." }, drill: { jp: "Ce pull est trop serré", en: "This jumper is too tight" }, accept: ["tight-fitting", "snug", "close-fitting"], hint: "Tight-fitting, from serrer, to squeeze — serrer la main is to shake hands. Also of a schedule: un emploi du temps serré." },
        { id: "fr-u93l2-ample", type: "vocab", front: "ample", reading: "ample", meaning: "loose", example: { jp: "Je préfère une chemise ample.", en: "I prefer a loose shirt." }, drill: { jp: "Cette robe est trop ample", en: "This dress is too loose" }, accept: ["baggy", "roomy", "flowing"], hint: "Loose and flowing, of a garment — one form for both genders. Of information it means ample: de plus amples renseignements." },
        { id: "fr-u93l2-lapoche", type: "vocab", front: "la poche", reading: "lapoche", meaning: "pocket", example: { jp: "Mes clés sont dans ma poche.", en: "My keys are in my pocket." }, drill: { jp: "La poche est trouée", en: "The pocket has a hole in it" }, accept: ["the pocket", "pocket", "a pocket", "the small pouch sewn into clothing", "pockets"], hint: "A pocket — un livre de poche is a paperback. Feminine: la poche." },
        { id: "fr-u93l2-lamanche", type: "vocab", front: "la manche", reading: "lamanche", meaning: "sleeve", example: { jp: "La manche est trop longue.", en: "The sleeve is too long." }, drill: { jp: "La manche est trop courte", en: "The sleeve is too short" }, accept: ["the sleeve", "sleeve", "a sleeve", "the part of a garment covering the arm", "sleeves"], hint: "Feminine for a sleeve. La Manche with a capital is the English Channel." },
        { id: "fr-u93l2-lecol", type: "vocab", front: "le col", reading: "lecol", meaning: "collar", example: { jp: "Le col de la chemise est sale.", en: "The shirt collar is dirty." }, drill: { jp: "Le col est trop serré", en: "The collar is too tight" }, accept: ["the collar", "neck", "a collar"], hint: "A collar, and also a mountain pass — the l sounds. Masculine: le col; the neck itself is le cou." },
        { id: "fr-u93l2-laceinture", type: "vocab", front: "la ceinture", reading: "laceinture", meaning: "belt", example: { jp: "J'ai besoin d'une ceinture.", en: "I need a belt." }, drill: { jp: "La ceinture est dans l'armoire", en: "The belt is in the wardrobe" }, accept: ["the belt", "belt", "a belt", "the strap worn around the waist", "belts"], hint: "Also the seatbelt: la ceinture de sécurité." },
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
        { id: "fr-u93l3-lesbijoux", type: "vocab", front: "les bijoux", reading: "lesbijoux", meaning: "jewellery", example: { jp: "Elle porte de beaux bijoux.", en: "She's wearing beautiful jewellery." }, drill: { jp: "Les bijoux sont dans la boîte", en: "The jewellery is in the box" }, accept: ["the jewellery", "jewels", "jewelry"], hint: "One of the handful of nouns whose plural takes -x: un bijou → des bijoux." },
        { id: "fr-u93l3-labague", type: "vocab", front: "la bague", reading: "labague", meaning: "ring", example: { jp: "Cette bague est en or.", en: "This ring is made of gold." }, drill: { jp: "La bague est en or", en: "The ring is gold" }, accept: ["the ring", "ring", "a ring", "the band of metal worn on a finger", "rings"], hint: "A ring for a finger — gu is a hard g with the ue silent. Feminine: la bague; a plain band is un anneau." },
        { id: "fr-u93l3-lecollier", type: "vocab", front: "le collier", reading: "lecollier", meaning: "necklace", example: { jp: "Le collier va bien avec la robe.", en: "The necklace goes well with the dress." }, drill: { jp: "Le collier est vraiment beau", en: "The necklace is really beautiful" }, accept: ["the necklace", "necklace", "a necklace", "the jewellery worn around the neck", "necklaces"], hint: "From le cou (neck) — and it's also a dog's collar." },
        { id: "fr-u93l3-lamontre", type: "vocab", front: "la montre", reading: "lamontre", meaning: "watch", example: { jp: "Ma montre est arrêtée.", en: "My watch has stopped." }, drill: { jp: "La montre coûte très cher", en: "The watch costs a lot" }, accept: ["the watch", "wristwatch", "a watch"], hint: "A watch, from montrer, to show: the thing that shows you the time. Feminine: la montre." },
        { id: "fr-u93l3-assorti", type: "vocab", front: "assorti", reading: "assorti", meaning: "matching", example: { jp: "Le sac et les chaussures sont assortis.", en: "The bag and the shoes are matching." }, drill: { jp: "Ce chapeau est assorti", en: "This hat matches" }, accept: ["matched", "coordinated", "to match"], hint: "Matching, from assortir — une chemise assortie au pantalon. Un assortiment is a selection." },
        { id: "fr-u93l3-lepli", type: "vocab", front: "le pli", reading: "lepli", meaning: "crease", example: { jp: "Il y a un pli sur la jupe.", en: "There's a crease in the skirt." }, drill: { jp: "Le pli se voit beaucoup", en: "The crease shows a lot" }, accept: ["the fold", "pleat", "wrinkle"], hint: "The noun from plier, which you already know." },
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
        { id: "fr-u93l4-semaquiller", type: "vocab", front: "se maquiller", reading: "semaquiller", meaning: "to put on make-up", example: { jp: "Elle se maquille avant de sortir.", en: "She puts on make-up before going out." }, drill: { jp: "Elle va se maquiller avant de sortir", en: "She is going to put on make-up before going out" }, accept: ["do one's make-up", "make oneself up", "put make-up on"], hint: "To put on make-up; le maquillage is the make-up itself. Without the se, maquiller means to disguise or doctor something." },
        { id: "fr-u93l4-lacoiffure", type: "vocab", front: "la coiffure", reading: "lacoiffure", meaning: "hairstyle", example: { jp: "J'aime bien ta nouvelle coiffure.", en: "I really like your new hairstyle." }, drill: { jp: "La coiffure est très jolie", en: "The hairstyle is very pretty" }, accept: ["the hairstyle", "hairdo", "a hairstyle"], hint: "From le coiffeur, the hairdresser you already know." },
        { id: "fr-u93l4-lamarque", type: "vocab", front: "la marque", reading: "lamarque", meaning: "brand", example: { jp: "C'est une marque française.", en: "It's a French brand." }, drill: { jp: "La marque est très connue", en: "The brand is very well known" }, accept: ["the brand", "make", "label"], hint: "A brand, and also a mark — qu is a hard k. Feminine: la marque, and marquer means to mark or to score." },
        { id: "fr-u93l4-lepeigne", type: "vocab", front: "le peigne", reading: "lepeigne", meaning: "comb", example: { jp: "Je cherche un peigne.", en: "I'm looking for a comb." }, drill: { jp: "Le peigne est sur l'étagère", en: "The comb is on the shelf" }, accept: ["the comb", "comb", "a comb", "the toothed object for tidying hair", "combs"], hint: "A comb — gn is the \"ny\" of onion. Masculine: le peigne, and se peigner is to comb your hair." },
        { id: "fr-u93l4-labrosse", type: "vocab", front: "la brosse", reading: "labrosse", meaning: "brush", example: { jp: "La brosse est dans la salle de bain.", en: "The brush is in the bathroom." }, drill: { jp: "La brosse est déjà vieille", en: "The brush is already old" }, accept: ["the brush", "hairbrush", "a brush"], hint: "You already meet it inside « je me brosse les dents »." },
        { id: "fr-u93l4-leparfum", type: "vocab", front: "le parfum", reading: "leparfum", meaning: "perfume", example: { jp: "Ton parfum sent très bon.", en: "Your perfume smells very good." }, drill: { jp: "Le parfum sent très bon", en: "The perfume smells very good" }, accept: ["the perfume", "scent", "fragrance"], hint: "Also an ice-cream flavour: quel parfum ? — which flavour?" },
      ],
    },
  ],
};
