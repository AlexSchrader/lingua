// FR Unit 6 — La ville ("The town") — A1
// Getting around: place nouns, je vais + à (the movement pattern), il y a
// (there is), and the direction set for asking/understanding the way.
// Conventions: see fr/unit1.js.
export const FR_UNIT7 = {
  id: "fr-u7",
  lang: "fr",
  title: "La ville",
  order: 7,
  stage: "a1",
  lessons: [
    {
      id: "fr-u7l1",
      unit: 7,
      lesson: 1,
      title: "Places",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the places around you: la ville, la rue, la maison, l'école, le magasin, la gare.",
      items: [
        { id: "fr-u7l1-laville", type: "vocab", front: "la ville", reading: "laville", meaning: "city", example: { jp: "La ville est grande !", en: "The city is big!" }, drill: { jp: "La ville est très grande", en: "The city is very big" }, accept: ["the city", "town", "the town", "a large place where many people live"], hint: "\"veel\" — ill here is the rare \"eel\", not the \"ee-y\" of la fille, and the final e is silent. Feminine: la ville. Keep it apart from la vie, life, which has no l sound." },
        { id: "fr-u7l1-larue", type: "vocab", front: "la rue", reading: "larue", meaning: "street", example: { jp: "La rue est petite.", en: "The street is small." }, drill: { jp: "La rue est là", en: "The street is there" }, accept: ["the street", "road", "the road", "a street", "a named way between buildings"], hint: "\"rew\" — the r scrapes at the back of the throat and the u is the tight flûte u. Feminine: la rue. French addresses run 10, rue de Paris." },
        { id: "fr-u7l1-lamaison", type: "vocab", front: "la maison", reading: "lamaison", meaning: "house", example: { jp: "Voilà la maison de Marie !", en: "There's Marie's house!" }, drill: { jp: "Voilà la maison de Marie", en: "Here's Marie's house" }, accept: ["the house", "home", "at home", "a house"], hint: "\"meh-ZON\" — ai is the open \"eh\", a single s between vowels buzzes as a z, and -on is nasal. Feminine: la maison. À la maison means at home." },
        { id: "fr-u7l1-lecole", type: "vocab", front: "l'école", reading: "lecole", meaning: "school", example: { jp: "L'école est ici.", en: "The school is here." }, drill: { jp: "Je vais à l'école", en: "I'm going to school" }, accept: ["the school", "school", "a school", "the place where children go to learn", "schools"], hint: "\"ay-KOL\" — the é is the closed \"ay\" and the final e is silent. It is feminine, which l' hides from you: une grande école, never \"un\"." },
        { id: "fr-u7l1-lemagasin", type: "vocab", front: "le magasin", reading: "lemagasin", meaning: "store", example: { jp: "Le magasin est là.", en: "The store is there." }, drill: { jp: "Le magasin est à droite", en: "The store is on the right" }, accept: ["the store", "shop", "the shop", "a place that sells things"], hint: "\"ma-ga-ZAN\" — the s buzzes as a z between vowels and -in is nasal. Masculine: le magasin. Do not read it as English \"magazine\"; that is un magazine." },
        { id: "fr-u7l1-lagare", type: "vocab", front: "la gare", reading: "lagare", meaning: "train station", example: { jp: "Excusez-moi, la gare, s'il vous plaît ?", en: "Excuse me, the train station, please?" }, drill: { jp: "La gare est à gauche", en: "The station is on the left" }, accept: ["the station", "station", "the train station", "where you catch a train"], hint: "\"[Place], s'il vous plaît ?\" is a complete, polite way to ask where anything is." },
      ],
    },
    {
      id: "fr-u7l2",
      unit: 7,
      lesson: 2,
      title: "Going places",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Move around: je vais à… — and spot what's around with il y a: le restaurant, l'hôtel, le parc.",
      items: [
        { id: "fr-u7l2-jevais", type: "vocab", front: "je vais", reading: "jevais", meaning: "I go", example: { jp: "Je vais à la gare.", en: "I'm going to the station." }, drill: { jp: "Je vais à la gare", en: "I'm going to the station" }, accept: ["i'm going", "i am going", "i go to"], hint: "je vais + à = the going-somewhere pattern: je vais à Paris, je vais à l'école." },
        { id: "fr-u7l2-a", type: "vocab", front: "à", reading: "a", meaning: "to", example: { jp: "Je vais à Paris !", en: "I'm going to Paris!" }, drill: { jp: "Je vais à Paris", en: "I'm going to Paris" }, accept: ["at", "in", "to the"], hint: "à (with accent) = to/at. a (no accent) = has. Tiny accent, different word." },
        { id: "fr-u7l2-ilya", type: "vocab", front: "il y a", reading: "ilya", meaning: "there is", example: { jp: "Il y a un café ici ?", en: "Is there a café here?" }, drill: { jp: "Il y a un restaurant ici", en: "There is a restaurant here" }, accept: ["there are", "there's", "there exists"], hint: "Literally \"it has there\" — don't translate it, just use it: il y a = there is/are." },
        { id: "fr-u7l2-lerestaurant", type: "vocab", front: "le restaurant", reading: "lerestaurant", meaning: "restaurant", example: { jp: "Il y a un restaurant ici.", en: "There's a restaurant here." }, drill: { jp: "Le restaurant est tout près", en: "The restaurant is very near" }, accept: ["the restaurant", "restaurant", "a restaurant", "a place where you pay to eat a meal", "restaurants"], hint: "\"res-toh-RON\" — au is \"oh\", -ant is nasal, and the t is silent. Masculine: le restaurant. It comes from restaurer, to restore." },
        { id: "fr-u7l2-lhotel", type: "vocab", front: "l'hôtel", reading: "lhotel", meaning: "hotel", example: { jp: "L'hôtel est grand !", en: "The hotel is big!" }, drill: { jp: "L'hôtel est loin", en: "The hotel is far" }, accept: ["the hotel", "hotel", "a hotel", "a building where travellers pay to sleep", "hotels"], hint: "The little hat (ô) often marks a lost s — hôtel was once \"hostel\"." },
        { id: "fr-u7l2-leparc", type: "vocab", front: "le parc", reading: "leparc", meaning: "park", example: { jp: "Je vais au parc avec ma sœur.", en: "I'm going to the park with my sister." }, drill: { jp: "Le parc est près de la maison", en: "The park is near the house" }, accept: ["the park", "park", "a park", "a public green space in a town", "parks"], hint: "à + le squishes into au: je vais au parc, never \"à le parc\"." },
      ],
    },
    {
      id: "fr-u7l3",
      unit: 7,
      lesson: 3,
      title: "Which way?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Follow directions: à gauche, à droite, tout droit — loin, près, le métro.",
      items: [
        { id: "fr-u7l3-agauche", type: "vocab", front: "à gauche", reading: "agauche", meaning: "to the left", example: { jp: "La gare est à gauche.", en: "The station is to the left." }, drill: { jp: "Le métro est à gauche", en: "The metro is on the left" }, accept: ["left", "on the left", "to your left"], hint: "\"a GOHSH\" — au is \"oh\" and -che is the sh of English \"shoe\". As a noun, la gauche is also the political left." },
        { id: "fr-u7l3-adroite", type: "vocab", front: "à droite", reading: "adroite", meaning: "to the right", example: { jp: "Le café est à droite.", en: "The café is to the right." }, drill: { jp: "Le café est à droite", en: "The café is on the right" }, accept: ["right", "on the right", "to your right"], hint: "\"a DRWAT\" — oi is \"wah\", and the final e is what makes the t sound at all, unlike in droit. As a noun, la droite is also the political right." },
        { id: "fr-u7l3-toutdroit", type: "vocab", front: "tout droit", reading: "toutdroit", meaning: "straight ahead", example: { jp: "Tout droit, madame !", en: "Straight ahead, ma'am!" }, drill: { jp: "Tout droit et à gauche", en: "Straight ahead and to the left" }, accept: ["straight", "straight on", "straight forward"], hint: "droit = straight, droite = right. One letter keeps you from walking in circles." },
        { id: "fr-u7l3-loin", type: "vocab", front: "loin", reading: "loin", meaning: "far", example: { jp: "C'est loin ?", en: "Is it far?" }, drill: { jp: "Le parc est loin", en: "The park is far" }, accept: ["far away", "a long way", "distant"], hint: "\"lwan\" — oi is \"wah\", nasalised by the n behind it, so the whole word is one syllable through your nose. loin de means far from; its opposite is près." },
        { id: "fr-u7l3-pres", type: "vocab", front: "près", reading: "pres", meaning: "near", example: { jp: "Non, c'est près !", en: "No, it's close!" }, drill: { jp: "Le métro est tout près", en: "The metro is very near" }, accept: ["close", "nearby", "close by"], hint: "\"preh\" — the è is open and the s is silent, so it sounds exactly like prêt, ready. You almost always see it as près de, near to." },
        { id: "fr-u7l3-lemetro", type: "vocab", front: "le métro", reading: "lemetro", meaning: "metro", example: { jp: "Le métro est à gauche, près de l'hôtel.", en: "The metro is to the left, near the hotel." }, drill: { jp: "Le métro est près de la gare", en: "The metro is near the station" }, accept: ["the metro", "subway", "the subway", "underground"], hint: "\"may-TROH\" — the é is the closed \"ay\". It is short for le chemin de fer métropolitain, which nobody says; it is le métro." },
      ],
    },
  ],
};
