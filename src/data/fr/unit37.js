// FR Unit 37 — Dans la maison ("Home and household") — A2
// A1's u17 taught the four rooms, six pieces of furniture and the building. This
// unit fills the house in: the parts a floor plan shows, the things on and under
// the furniture, the appliances, and what it costs to live there.
// The CHORES are not here — they are u28's, where they belong with the rest of
// the daily routine; this unit is the place and its objects.
// sous lands here rather than in a grammar unit for the same reason chez did in
// u31: it is the word these sentences need, and a function word is taught as
// vocab whose examples carry the pattern (RUNBOOK §4).
// Conventions + the A2 infinitive decision: see the header of fr/unit28.js.
export const FR_UNIT37 = {
  id: "fr-u37",
  lang: "fr",
  title: "Dans la maison",
  order: 37,
  stage: "a2",
  lessons: [
    {
      id: "fr-u37l1",
      unit: 37,
      lesson: 1,
      title: "Rooms and structure",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe a home from the outside in: how many rooms, the corridor, the garage, the balcony, the roof and the floor.",
      items: [
        { id: "fr-u37l1-lapiece", type: "vocab", front: "la pièce", reading: "lapiece", meaning: "room", example: { jp: "Il y a cinq pièces dans la maison.", en: "There are five rooms in the house." }, accept: ["a room", "the room"], hint: "la pièce is any room; la chambre is only the one you sleep in. A French advert counts pièces." },
        { id: "fr-u37l1-lecouloir", type: "vocab", front: "le couloir", reading: "lecouloir", meaning: "corridor", example: { jp: "Le couloir est long.", en: "The corridor is long." }, accept: ["hallway", "hall", "the corridor"] },
        { id: "fr-u37l1-legarage", type: "vocab", front: "le garage", reading: "legarage", meaning: "garage", example: { jp: "La voiture est dans le garage.", en: "The car is in the garage." }, accept: ["the garage"] },
        { id: "fr-u37l1-lebalcon", type: "vocab", front: "le balcon", reading: "lebalcon", meaning: "balcony", example: { jp: "Sur le balcon, il y a des fleurs.", en: "There are flowers on the balcony." }, accept: ["the balcony"] },
        { id: "fr-u37l1-letoit", type: "vocab", front: "le toit", reading: "letoit", meaning: "roof", example: { jp: "Le toit est rouge.", en: "The roof is red." }, accept: ["the roof", "rooftop"] },
        { id: "fr-u37l1-lesol", type: "vocab", front: "le sol", reading: "lesol", meaning: "floor (the surface)", example: { jp: "Le sol est propre.", en: "The floor is clean." }, accept: ["the floor", "floor surface", "floor"], hint: "le sol is the surface you walk on; l'étage is which storey you're on." },
      ],
    },
    {
      id: "fr-u37l2",
      unit: 37,
      lesson: 2,
      title: "Where things sit",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say where something is in a room — in the cupboard, on the shelf, under the table, in front of the window.",
      items: [
        { id: "fr-u37l2-leplacard", type: "vocab", front: "le placard", reading: "leplacard", meaning: "cupboard", example: { jp: "Le sucre est dans le placard.", en: "The sugar is in the cupboard." }, accept: ["closet", "cabinet", "the cupboard"] },
        { id: "fr-u37l2-letagere", type: "vocab", front: "l'étagère", reading: "letagere", meaning: "shelf", example: { jp: "Les livres sont sur l'étagère.", en: "The books are on the shelf." }, accept: ["shelving", "bookshelf", "the shelf"] },
        { id: "fr-u37l2-sous", type: "vocab", front: "sous", reading: "sous", meaning: "under", example: { jp: "Le chat est sous la chaise.", en: "The cat is under the chair." }, accept: ["underneath", "below", "beneath"], hint: "The opposite of sur. You already have both halves: sur la table, sous la table." },
        { id: "fr-u37l2-letapis", type: "vocab", front: "le tapis", reading: "letapis", meaning: "rug", example: { jp: "Le tapis est sous la table.", en: "The rug is under the table." }, accept: ["carpet", "mat", "the rug"] },
        { id: "fr-u37l2-lerideau", type: "vocab", front: "le rideau", reading: "lerideau", meaning: "curtain", example: { jp: "Le rideau est devant la fenêtre.", en: "The curtain is in front of the window." }, accept: ["drape", "the curtain"] },
        { id: "fr-u37l2-lemiroir", type: "vocab", front: "le miroir", reading: "lemiroir", meaning: "mirror", example: { jp: "Le miroir est dans la salle de bain.", en: "The mirror is in the bathroom." }, accept: ["the mirror", "looking glass"] },
      ],
    },
    {
      id: "fr-u37l3",
      unit: 37,
      lesson: 3,
      title: "Kitchen and bathroom",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the working parts of a home: fridge, oven, sink, shower, towel, soap.",
      items: [
        { id: "fr-u37l3-lefrigo", type: "vocab", front: "le frigo", reading: "lefrigo", meaning: "fridge", example: { jp: "Le lait est dans le frigo.", en: "The milk is in the fridge." }, accept: ["refrigerator", "the fridge", "icebox"], hint: "Everyday short form. The full word, le réfrigérateur, is what the shop writes on the box." },
        { id: "fr-u37l3-lefour", type: "vocab", front: "le four", reading: "lefour", meaning: "oven", example: { jp: "Le gâteau est dans le four.", en: "The cake is in the oven." }, accept: ["the oven", "stove"] },
        { id: "fr-u37l3-levier", type: "vocab", front: "l'évier", reading: "levier", meaning: "sink", example: { jp: "La vaisselle est dans l'évier.", en: "The dishes are in the sink." }, accept: ["kitchen sink", "the sink", "basin"] },
        { id: "fr-u37l3-ladouche", type: "vocab", front: "la douche", reading: "ladouche", meaning: "shower", example: { jp: "Je prends une douche le matin.", en: "I take a shower in the morning." }, accept: ["the shower", "a shower"] },
        { id: "fr-u37l3-laserviette", type: "vocab", front: "la serviette", reading: "laserviette", meaning: "towel", example: { jp: "La serviette est propre.", en: "The towel is clean." }, accept: ["napkin", "the towel"], hint: "Same word for the towel in the bathroom and the napkin on the table." },
        { id: "fr-u37l3-lesavon", type: "vocab", front: "le savon", reading: "lesavon", meaning: "soap", example: { jp: "Il n'y a plus de savon.", en: "There's no soap left." }, accept: ["the soap", "bar of soap"] },
      ],
    },
    {
      id: "fr-u37l4",
      unit: 37,
      lesson: 4,
      title: "Living somewhere",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about your place as a tenant: the neighbour, the rent, moving out, the lift, the bin and the noise.",
      items: [
        { id: "fr-u37l4-levoisin", type: "vocab", front: "le voisin", reading: "levoisin", meaning: "neighbour", example: { jp: "Mon voisin est très gentil.", en: "My neighbour is very kind." }, accept: ["neighbor", "the neighbour", "next-door neighbour"] },
        { id: "fr-u37l4-leloyer", type: "vocab", front: "le loyer", reading: "leloyer", meaning: "rent", example: { jp: "Le loyer est cher.", en: "The rent is expensive." }, accept: ["the rent", "rental"] },
        { id: "fr-u37l4-demenager", type: "vocab", front: "déménager", reading: "demenager", meaning: "to move house", example: { jp: "Je vais déménager en septembre.", en: "I'm going to move house in September." }, accept: ["move", "to move out", "to relocate"] },
        { id: "fr-u37l4-lascenseur", type: "vocab", front: "l'ascenseur", reading: "lascenseur", meaning: "lift", example: { jp: "Il y a un ascenseur dans l'immeuble.", en: "There's a lift in the building." }, accept: ["elevator", "the lift"] },
        { id: "fr-u37l4-lapoubelle", type: "vocab", front: "la poubelle", reading: "lapoubelle", meaning: "bin", example: { jp: "La poubelle est dans la cuisine.", en: "The bin is in the kitchen." }, accept: ["rubbish bin", "trash can", "the bin"] },
        { id: "fr-u37l4-lebruit", type: "vocab", front: "le bruit", reading: "lebruit", meaning: "noise", example: { jp: "Il y a trop de bruit ici.", en: "There's too much noise here." }, accept: ["a noise", "sound", "the noise"] },
      ],
    },
  ],
};
