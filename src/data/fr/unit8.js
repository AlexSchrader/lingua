// FR Unit 8 — Décrire ("Describing") — A1
// The describing toolkit: six colors, six thing-adjectives, six feel-adjectives
// — everything hangs off the est pattern learned in Unit 2. Conventions: see
// fr/unit1.js.
export const FR_UNIT8 = {
  id: "fr-u8",
  lang: "fr",
  title: "Décrire",
  order: 8,
  stage: "a1",
  lessons: [
    {
      id: "fr-u8l1",
      unit: 8,
      lesson: 1,
      title: "Colors",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the colors: rouge, bleu, vert, jaune, noir, blanc.",
      items: [
        { id: "fr-u8l1-rouge", type: "vocab", front: "rouge", reading: "rouge", meaning: "red", example: { jp: "Le vin est rouge.", en: "The wine is red." }, accept: [] },
        { id: "fr-u8l1-bleu", type: "vocab", front: "bleu", reading: "bleu", meaning: "blue", example: { jp: "Le métro est bleu et blanc.", en: "The metro is blue and white." }, accept: [] },
        { id: "fr-u8l1-vert", type: "vocab", front: "vert", reading: "vert", meaning: "green", example: { jp: "Le parc est très vert.", en: "The park is very green." }, accept: [] },
        { id: "fr-u8l1-jaune", type: "vocab", front: "jaune", reading: "jaune", meaning: "yellow", example: { jp: "Le taxi est jaune.", en: "The taxi is yellow." }, accept: [] },
        { id: "fr-u8l1-noir", type: "vocab", front: "noir", reading: "noir", meaning: "black", example: { jp: "Un café noir, s'il vous plaît.", en: "A black coffee, please." }, accept: [] },
        { id: "fr-u8l1-blanc", type: "vocab", front: "blanc", reading: "blanc", meaning: "white", example: { jp: "Le lait est blanc.", en: "Milk is white." }, accept: [], hint: "Colors sit AFTER the noun in French: un café noir, un vin blanc." },
      ],
    },
    {
      id: "fr-u8l2",
      unit: 8,
      lesson: 2,
      title: "Nice or not",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Judge things: beau, joli, nouveau, vieux — facile, difficile.",
      items: [
        { id: "fr-u8l2-beau", type: "vocab", front: "beau", reading: "beau", meaning: "beautiful", example: { jp: "Paris est beau !", en: "Paris is beautiful!" }, accept: ["handsome", "lovely"] },
        { id: "fr-u8l2-joli", type: "vocab", front: "joli", reading: "joli", meaning: "pretty", example: { jp: "Le parc est joli.", en: "The park is pretty." }, accept: ["cute", "nice"] },
        { id: "fr-u8l2-nouveau", type: "vocab", front: "nouveau", reading: "nouveau", meaning: "new", example: { jp: "Le magasin est nouveau.", en: "The store is new." }, accept: [] },
        { id: "fr-u8l2-vieux", type: "vocab", front: "vieux", reading: "vieux", meaning: "old", example: { jp: "L'hôtel est vieux, non ?", en: "The hotel is old, isn't it?" }, accept: [], hint: "Tacking non ? onto a sentence makes it a \"…right?\" question." },
        { id: "fr-u8l2-facile", type: "vocab", front: "facile", reading: "facile", meaning: "easy", example: { jp: "C'est facile !", en: "It's easy!" }, accept: ["simple"] },
        { id: "fr-u8l2-difficile", type: "vocab", front: "difficile", reading: "difficile", meaning: "difficult", example: { jp: "C'est difficile ? Non, ça va !", en: "Is it hard? No, it's fine!" }, accept: ["hard"] },
      ],
    },
    {
      id: "fr-u8l3",
      unit: 8,
      lesson: 3,
      title: "Hot, cold and how you feel",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe states: chaud, froid, cher — je suis fatigué, content, malade.",
      items: [
        { id: "fr-u8l3-chaud", type: "vocab", front: "chaud", reading: "chaud", meaning: "hot", example: { jp: "Le café est très chaud !", en: "The coffee is very hot!" }, accept: ["warm"] },
        { id: "fr-u8l3-froid", type: "vocab", front: "froid", reading: "froid", meaning: "cold", example: { jp: "Le lait est froid.", en: "The milk is cold." }, accept: [] },
        { id: "fr-u8l3-cher", type: "vocab", front: "cher", reading: "cher", meaning: "expensive", example: { jp: "L'hôtel est très cher !", en: "The hotel is very expensive!" }, accept: ["dear", "costly"] },
        { id: "fr-u8l3-fatigue", type: "vocab", front: "fatigué", reading: "fatigue", meaning: "tired", example: { jp: "Je suis fatigué ce soir.", en: "I'm tired this evening." }, accept: ["exhausted"], hint: "ce soir = this evening. A woman writes fatiguée — it sounds exactly the same." },
        { id: "fr-u8l3-content", type: "vocab", front: "content", reading: "content", meaning: "happy", example: { jp: "Je suis très content !", en: "I'm very happy!" }, accept: ["glad", "pleased"] },
        { id: "fr-u8l3-malade", type: "vocab", front: "malade", reading: "malade", meaning: "sick", example: { jp: "Paul est malade aujourd'hui.", en: "Paul is sick today." }, accept: ["ill", "unwell"] },
      ],
    },
  ],
};
