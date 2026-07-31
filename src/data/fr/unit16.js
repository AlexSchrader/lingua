// FR Unit 16 — Les vêtements ("Clothes") — A1
// Clothing, plus the words to describe and buy it. Colours (Unit 8) finally get
// something to attach to — and French puts them AFTER the noun: une robe rouge.
// Conventions: see fr/unit1.js.
export const FR_UNIT16 = {
  id: "fr-u16",
  lang: "fr",
  title: "Les vêtements",
  order: 16,
  stage: "a1",
  lessons: [
    {
      id: "fr-u16l1",
      unit: 16,
      lesson: 1,
      title: "Getting dressed",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name clothes: la chemise, le pantalon, la robe, la jupe, le manteau, les chaussures.",
      items: [
        { id: "fr-u16l1-levetement", type: "vocab", front: "le vêtement", reading: "levetement", meaning: "piece of clothing", example: { jp: "J'achète un vêtement au magasin.", en: "I'm buying a piece of clothing at the shop." }, accept: ["the clothing", "garment", "clothes"] },
        { id: "fr-u16l1-lachemise", type: "vocab", front: "la chemise", reading: "lachemise", meaning: "shirt", example: { jp: "La chemise blanche est jolie.", en: "The white shirt is pretty." }, accept: ["the shirt"], hint: "Colours go AFTER the noun in French: une chemise blanche, not \"une blanche chemise\"." },
        { id: "fr-u16l1-lepantalon", type: "vocab", front: "le pantalon", reading: "lepantalon", meaning: "trousers", example: { jp: "Le pantalon noir est trop grand.", en: "The black trousers are too big." }, accept: ["the trousers", "pants"], hint: "Singular in French — un pantalon, one pair." },
        { id: "fr-u16l1-larobe", type: "vocab", front: "la robe", reading: "larobe", meaning: "dress", example: { jp: "Elle porte une robe bleue.", en: "She's wearing a blue dress." }, accept: ["the dress"] },
        { id: "fr-u16l1-lajupe", type: "vocab", front: "la jupe", reading: "lajupe", meaning: "skirt", example: { jp: "La jupe est courte.", en: "The skirt is short." }, accept: ["the skirt"] },
        { id: "fr-u16l1-lemanteau", type: "vocab", front: "le manteau", reading: "lemanteau", meaning: "coat", example: { jp: "En hiver, je porte un manteau.", en: "In winter, I wear a coat." }, accept: ["the coat", "overcoat"] },
        { id: "fr-u16l1-leschaussures", type: "vocab", front: "les chaussures", reading: "leschaussures", meaning: "shoes", example: { jp: "Mes chaussures sont noires.", en: "My shoes are black." }, accept: ["the shoes", "shoe"], hint: "mes = my (plural) — mes chaussures, my shoes." },
      ],
    },
    {
      id: "fr-u16l2",
      unit: 16,
      lesson: 2,
      title: "More to wear",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the rest: le chapeau, les lunettes, la veste, le pull, la chaussette, le sac.",
      items: [
        { id: "fr-u16l2-lechapeau", type: "vocab", front: "le chapeau", reading: "lechapeau", meaning: "hat", example: { jp: "En été, je porte un chapeau.", en: "In summer, I wear a hat." }, accept: ["the hat"] },
        { id: "fr-u16l2-leslunettes", type: "vocab", front: "les lunettes", reading: "leslunettes", meaning: "glasses", example: { jp: "Mon père porte des lunettes.", en: "My father wears glasses." }, accept: ["the glasses", "spectacles", "eyeglasses"], hint: "des = some — the plural of un/une. Des lunettes, some glasses." },
        { id: "fr-u16l2-laveste", type: "vocab", front: "la veste", reading: "laveste", meaning: "jacket", example: { jp: "La veste est trop petite.", en: "The jacket is too small." }, accept: ["the jacket"] },
        { id: "fr-u16l2-lepull", type: "vocab", front: "le pull", reading: "lepull", meaning: "sweater", example: { jp: "Il fait froid : je porte un pull.", en: "It's cold: I'm wearing a sweater." }, accept: ["the sweater", "jumper", "pullover"] },
        { id: "fr-u16l2-lachaussette", type: "vocab", front: "la chaussette", reading: "lachaussette", meaning: "sock", example: { jp: "Où est ma chaussette bleue ?", en: "Where's my blue sock?" }, accept: ["the sock", "socks"] },
        { id: "fr-u16l2-lesac", type: "vocab", front: "le sac", reading: "lesac", meaning: "bag", example: { jp: "Mon sac est dans la chambre.", en: "My bag is in the bedroom." }, accept: ["the bag", "handbag"], hint: "dans = in (inside something) — dans le sac, dans la maison." },
        { id: "fr-u16l2-dans", type: "vocab", front: "dans", reading: "dans", meaning: "in", example: { jp: "L'argent est dans le sac.", en: "The money is in the bag." }, accept: ["inside", "into"], hint: "dans = physically inside. en (Unit 14) is for months and seasons." },
      ],
    },
    {
      id: "fr-u16l3",
      unit: 16,
      lesson: 3,
      title: "Trying it on",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Shop for clothes: je porte, la taille, la couleur — court, long, propre, sale.",
      items: [
        { id: "fr-u16l3-jeporte", type: "vocab", front: "je porte", reading: "jeporte", meaning: "I wear", example: { jp: "Je porte une chemise bleue.", en: "I'm wearing a blue shirt." }, accept: ["i'm wearing", "i carry"], hint: "Also \"I carry\" — je porte le sac." },
        { id: "fr-u16l3-lataille", type: "vocab", front: "la taille", reading: "lataille", meaning: "size", example: { jp: "Quelle taille ? Petite, s'il vous plaît.", en: "What size? Small, please." }, accept: ["the size", "waist"] },
        { id: "fr-u16l3-lacouleur", type: "vocab", front: "la couleur", reading: "lacouleur", meaning: "colour", example: { jp: "Quelle couleur ? Rouge ou vert ?", en: "What colour? Red or green?" }, accept: ["the color", "the colour"], hint: "ou = or (no accent). où with the accent is where — Unit 2." },
        { id: "fr-u16l3-court", type: "vocab", front: "court", reading: "court", meaning: "short", example: { jp: "En décembre, les jours sont courts.", en: "In December, the days are short." }, accept: ["brief"] },
        { id: "fr-u16l3-long", type: "vocab", front: "long", reading: "long", meaning: "long", example: { jp: "L'hiver est long ici.", en: "Winter is long here." }, accept: [] },
        { id: "fr-u16l3-propre", type: "vocab", front: "propre", reading: "propre", meaning: "clean", example: { jp: "Ma chemise est propre.", en: "My shirt is clean." }, accept: ["tidy"] },
        { id: "fr-u16l3-sale", type: "vocab", front: "sale", reading: "sale", meaning: "dirty", example: { jp: "Mon pantalon est sale !", en: "My trousers are dirty!" }, accept: ["filthy", "unclean"], hint: "Nothing to do with a shop sale — that's les soldes." },
        { id: "fr-u16l3-ou2", type: "vocab", front: "ou", reading: "ou", meaning: "or", example: { jp: "Le thé ou le café ?", en: "Tea or coffee?" }, accept: ["either"], hint: "ou = or. où (with the accent) = where. One accent, two words." },
      ],
    },
  ],
};
