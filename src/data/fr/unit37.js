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
        { id: "fr-u37l1-lapiece", type: "vocab", front: "la pièce", reading: "lapiece", meaning: "room", example: { jp: "Il y a cinq pièces dans la maison.", en: "There are five rooms in the house." }, accept: ["a room", "the room", "room in a house"], drill: { jp: "La pièce est très propre", en: "The room is very clean" }, hint: "la pièce is any room; la chambre is only the one you sleep in. A French advert counts pièces." },
        { id: "fr-u37l1-lecouloir", type: "vocab", front: "le couloir", reading: "lecouloir", meaning: "corridor", example: { jp: "Le couloir est long.", en: "The corridor is long." }, accept: ["hallway", "hall", "the corridor"], drill: { jp: "Le couloir est devant la cuisine", en: "The corridor is in front of the kitchen" }, hint: "\"koo-LWAR\" — ou is \"oo\" and oi is \"wah\". Masculine: le couloir, from couler, to flow — the thing people flow along." },
        { id: "fr-u37l1-legarage", type: "vocab", front: "le garage", reading: "legarage", meaning: "garage", example: { jp: "La voiture est dans le garage.", en: "The car is in the garage." }, accept: ["the garage", "garage", "a garage"], drill: { jp: "Le garage est fermé la nuit", en: "The garage is closed at night" }, hint: "\"ga-RAHZH\" — the first g is hard and the second is the soft zh. Masculine: le garage, which also means the repair shop." },
        { id: "fr-u37l1-lebalcon", type: "vocab", front: "le balcon", reading: "lebalcon", meaning: "balcony", example: { jp: "Sur le balcon, il y a des fleurs.", en: "There are flowers on the balcony." }, accept: ["the balcony", "balcony", "a balcony"], drill: { jp: "Le balcon est très petit", en: "The balcony is very small" }, hint: "\"bal-KON\" — the l sounds and -on is nasal. Masculine: le balcon." },
        { id: "fr-u37l1-letoit", type: "vocab", front: "le toit", reading: "letoit", meaning: "roof", example: { jp: "Le toit est rouge.", en: "The roof is red." }, accept: ["the roof", "rooftop", "a roof"], drill: { jp: "Le toit de la maison est vieux", en: "The roof of the house is old" }, hint: "\"twah\" — oi is \"wah\" and the t is silent, so it sounds exactly like toi. Masculine: le toit." },
        { id: "fr-u37l1-lesol", type: "vocab", front: "le sol", reading: "lesol", meaning: "floor surface", example: { jp: "Le sol est propre.", en: "The floor is clean." }, accept: ["the floor", "floor", "the ground underfoot"], drill: { jp: "Le sol de la cuisine est sale", en: "The kitchen floor is dirty" }, hint: "le sol is the surface you walk on; l'étage is which storey you're on." },
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
        { id: "fr-u37l2-leplacard", type: "vocab", front: "le placard", reading: "leplacard", meaning: "cupboard", example: { jp: "Le sucre est dans le placard.", en: "The sugar is in the cupboard." }, accept: ["closet", "cabinet", "the cupboard"], drill: { jp: "Le savon est dans le placard", en: "The soap is in the cupboard" }, hint: "\"pla-KAR\" — the final d is silent, so the word ends on the r. Masculine: le placard." },
        { id: "fr-u37l2-letagere", type: "vocab", front: "l'étagère", reading: "letagere", meaning: "shelf", example: { jp: "Les livres sont sur l'étagère.", en: "The books are on the shelf." }, accept: ["shelving", "bookshelf", "the shelf"], drill: { jp: "L'étagère est près de la fenêtre", en: "The shelf is near the window" }, hint: "\"ay-ta-ZHAIR\" — the é is \"ay\" and the g before è is the soft zh. Feminine, hidden by l': une étagère." },
        { id: "fr-u37l2-sous", type: "vocab", front: "sous", reading: "sous", meaning: "under", example: { jp: "Le chat est sous la chaise.", en: "The cat is under the chair." }, accept: ["underneath", "below", "beneath"], drill: { jp: "Le chien dort sous le lit", en: "The dog sleeps under the bed" }, hint: "The opposite of sur. You already have both halves: sur la table, sous la table." },
        { id: "fr-u37l2-letapis", type: "vocab", front: "le tapis", reading: "letapis", meaning: "rug", example: { jp: "Le tapis est sous la table.", en: "The rug is under the table." }, accept: ["carpet", "mat", "the rug"], drill: { jp: "Le tapis est très sale", en: "The rug is very dirty" }, hint: "\"ta-PEE\" — the final s is silent, so singular and plural sound identical. Masculine: le tapis. Un tapis roulant is a treadmill." },
        { id: "fr-u37l2-lerideau", type: "vocab", front: "le rideau", reading: "lerideau", meaning: "curtain", example: { jp: "Le rideau est devant la fenêtre.", en: "The curtain is in front of the window." }, accept: ["drape", "the curtain", "curtains"], drill: { jp: "Le rideau est bleu et long", en: "The curtain is blue and long" }, hint: "\"ree-DOH\" — eau is \"oh\". Masculine, and the plural takes an x: rideaux." },
        { id: "fr-u37l2-lemiroir", type: "vocab", front: "le miroir", reading: "lemiroir", meaning: "mirror", example: { jp: "Le miroir est dans la salle de bain.", en: "The mirror is in the bathroom." }, accept: ["the mirror", "looking glass", "a mirror"], drill: { jp: "Le miroir est sur le mur", en: "The mirror is on the wall" }, hint: "\"mee-RWAR\" — oi is \"wah\" and the r sounds. Masculine: le miroir, from mirer, to gaze at." },
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
        { id: "fr-u37l3-lefrigo", type: "vocab", front: "le frigo", reading: "lefrigo", meaning: "fridge", example: { jp: "Le lait est dans le frigo.", en: "The milk is in the fridge." }, accept: ["refrigerator", "the fridge", "icebox"], drill: { jp: "Il y a du lait dans le frigo", en: "There is milk in the fridge" }, hint: "Everyday short form. The full word, le réfrigérateur, is what the shop writes on the box." },
        { id: "fr-u37l3-lefour", type: "vocab", front: "le four", reading: "lefour", meaning: "oven", example: { jp: "Le gâteau est dans le four.", en: "The cake is in the oven." }, accept: ["the oven", "stove", "an oven"], drill: { jp: "Le four est très chaud", en: "The oven is very hot" }, hint: "\"foor\" — ou is \"oo\" and the r sounds. Masculine: le four. Un four à micro-ondes is a microwave." },
        { id: "fr-u37l3-levier", type: "vocab", front: "l'évier", reading: "levier", meaning: "sink", example: { jp: "La vaisselle est dans l'évier.", en: "The dishes are in the sink." }, accept: ["kitchen sink", "the sink", "basin"], drill: { jp: "L'évier est dans la cuisine", en: "The sink is in the kitchen" }, hint: "\"ay-VYAY\" — the é is \"ay\" and -ier is the \"yay\" glide. Masculine: un évier is the KITCHEN sink; the bathroom basin is un lavabo." },
        { id: "fr-u37l3-ladouche", type: "vocab", front: "la douche", reading: "ladouche", meaning: "shower", example: { jp: "Je prends une douche le matin.", en: "I take a shower in the morning." }, accept: ["the shower", "a shower", "shower unit"], drill: { jp: "La douche est dans la salle de bain", en: "The shower is in the bathroom" }, hint: "\"doosh\" — ou is \"oo\" and -che is sh. Feminine: la douche, and you TAKE one with prendre." },
        { id: "fr-u37l3-laserviette", type: "vocab", front: "la serviette", reading: "laserviette", meaning: "towel", example: { jp: "La serviette est propre.", en: "The towel is clean." }, accept: ["napkin", "the towel", "a towel"], drill: { jp: "La serviette est sur l'étagère", en: "The towel is on the shelf" }, hint: "Same word for the towel in the bathroom and the napkin on the table." },
        { id: "fr-u37l3-lesavon", type: "vocab", front: "le savon", reading: "lesavon", meaning: "soap", example: { jp: "Il n'y a plus de savon.", en: "There's no soap left." }, accept: ["the soap", "bar of soap", "some soap"], drill: { jp: "Le savon est près de l'évier", en: "The soap is near the sink" }, hint: "\"sa-VON\" — a nasal ending, with the n never touched. Masculine: le savon; une savonnette is a small bar." },
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
        { id: "fr-u37l4-levoisin", type: "vocab", front: "le voisin", reading: "levoisin", meaning: "neighbour", example: { jp: "Mon voisin est très gentil.", en: "My neighbour is very kind." }, accept: ["neighbor", "the neighbour", "next-door neighbour"], drill: { jp: "Le voisin travaille à la banque", en: "The neighbour works at the bank" }, hint: "\"vwa-ZAN\" — oi is \"wah\", the single s buzzes as a z, and -in is nasal. Une voisine for a woman, where the n finally sounds." },
        { id: "fr-u37l4-leloyer", type: "vocab", front: "le loyer", reading: "leloyer", meaning: "rent", example: { jp: "Le loyer est cher.", en: "The rent is expensive." }, accept: ["the rent", "rental", "monthly rent"], drill: { jp: "Le loyer est trop cher ici", en: "The rent is too expensive here" }, hint: "\"lwa-YAY\" — oy is a \"wah-y\" glide and -er is the closed \"ay\". Masculine: le loyer, from louer, to rent." },
        { id: "fr-u37l4-demenager", type: "vocab", front: "déménager", reading: "demenager", meaning: "to move house", example: { jp: "Je vais déménager en septembre.", en: "I'm going to move house in September." }, accept: ["move", "to move out", "to relocate"], drill: { jp: "Nous allons déménager cette année", en: "We are going to move house this year" }, hint: "\"day-may-na-ZHAY\" — the g before e is the soft zh. It is dé- plus ménage: un-housekeeping, which is exactly moving out of a home." },
        { id: "fr-u37l4-lascenseur", type: "vocab", front: "l'ascenseur", reading: "lascenseur", meaning: "lift", example: { jp: "Il y a un ascenseur dans l'immeuble.", en: "There's a lift in the building." }, accept: ["elevator", "the lift", "a lift"], drill: { jp: "L'ascenseur est près de l'escalier", en: "The lift is near the stairs" }, hint: "\"a-son-SUR\" — the sc is a plain s, -en is nasal, and eu before r is open. Masculine: un ascenseur, from the root meaning to climb." },
        { id: "fr-u37l4-lapoubelle", type: "vocab", front: "la poubelle", reading: "lapoubelle", meaning: "bin", example: { jp: "La poubelle est dans la cuisine.", en: "The bin is in the kitchen." }, accept: ["rubbish bin", "trash can", "the bin"], drill: { jp: "La poubelle est dans le garage", en: "The bin is in the garage" }, hint: "\"poo-BEL\" — ou is \"oo\" and -elle a clean \"el\". Feminine, and named after Eugène Poubelle, the official who made bins compulsory in Paris." },
        { id: "fr-u37l4-lebruit", type: "vocab", front: "le bruit", reading: "lebruit", meaning: "noise", example: { jp: "Il y a trop de bruit ici.", en: "There's too much noise here." }, accept: ["a noise", "sound", "the noise"], drill: { jp: "Le bruit de la rue est fort", en: "The noise from the street is loud" }, hint: "\"brwee\" — ui is one glide and the t is silent. Masculine: le bruit. Un bruit also means a rumour." },
      ],
    },
  ],
};
