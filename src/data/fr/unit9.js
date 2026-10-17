// FR Unit 8 — Décrire ("Describing") — A1
// The describing toolkit: six colors, six thing-adjectives, six feel-adjectives
// — everything hangs off the est pattern learned in Unit 2. Conventions: see
// fr/unit1.js.
export const FR_UNIT9 = {
  id: "fr-u9",
  lang: "fr",
  title: "Décrire",
  order: 9,
  stage: "a1",
  lessons: [
    {
      id: "fr-u9l1",
      unit: 9,
      lesson: 1,
      title: "Colors",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the colors: rouge, bleu, vert, jaune, noir, blanc.",
      items: [
        { id: "fr-u9l1-rouge", type: "vocab", front: "rouge", reading: "rouge", meaning: "red", example: { jp: "Le vin est rouge.", en: "The wine is red." }, drill: { jp: "Le vin est rouge", en: "The wine is red" }, accept: ["red", "red (colour)", "in red", "the colour of blood"], hint: "\"roozh\" — the r scrapes at the back of the throat and -ge ends in the soft zh of \"measure\". It never changes for a feminine noun: une pomme rouge." },
        { id: "fr-u9l1-bleu", type: "vocab", front: "bleu", reading: "bleu", meaning: "blue", example: { jp: "Le métro est bleu et blanc.", en: "The metro is blue and white." }, drill: { jp: "Le métro est bleu", en: "The metro is blue" }, accept: ["blue", "blue (colour)", "in blue", "the colour of a clear sky"], hint: "\"bluh\" — eu is a rounded vowel made with your lips pushed forward, not an English \"oo\". The feminine adds an e you cannot hear: bleue." },
        { id: "fr-u9l1-vert", type: "vocab", front: "vert", reading: "vert", meaning: "green", example: { jp: "Le parc est très vert.", en: "The park is very green." }, drill: { jp: "Le parc est très vert", en: "The park is very green" }, accept: ["green", "green (colour)", "in green", "the colour of grass"], hint: "\"vair\" — the t is silent. The feminine wakes it up: verte, \"vairt\". Exactly the petit/petite pattern." },
        { id: "fr-u9l1-jaune", type: "vocab", front: "jaune", reading: "jaune", meaning: "yellow", example: { jp: "Le taxi est jaune.", en: "The taxi is yellow." }, drill: { jp: "Le taxi est jaune", en: "The taxi is yellow" }, accept: ["yellow", "yellow (colour)", "in yellow", "the colour of a lemon"], hint: "\"zhohn\" — soft zh, au is \"oh\", final e silent. One form for both genders, so no agreement to remember." },
        { id: "fr-u9l1-noir", type: "vocab", front: "noir", reading: "noir", meaning: "black", example: { jp: "Un café noir, s'il vous plaît.", en: "A black coffee, please." }, drill: { jp: "Un café noir s'il vous plaît", en: "A black coffee please" }, accept: ["black", "black (colour)", "dark", "the colour of night"], hint: "\"nwahr\" — oi is \"wah\" and the r sounds. The feminine noire is pronounced identically. Un café noir means a coffee with no milk." },
        { id: "fr-u9l1-blanc", type: "vocab", front: "blanc", reading: "blanc", meaning: "white", example: { jp: "Le lait est blanc.", en: "Milk is white." }, drill: { jp: "Le lait est blanc", en: "The milk is white" }, accept: ["white", "white (colour)", "blank", "the colour of snow"], hint: "Colors sit AFTER the noun in French: un café noir, un vin blanc." },
      ],
    },
    {
      id: "fr-u9l2",
      unit: 9,
      lesson: 2,
      title: "Nice or not",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Judge things: beau, joli, nouveau, vieux — facile, difficile.",
      items: [
        { id: "fr-u9l2-beau", type: "vocab", front: "beau", reading: "beau", meaning: "beautiful", example: { jp: "Paris est beau !", en: "Paris is beautiful!" }, drill: { jp: "Le parc est beau", en: "The park is beautiful" }, accept: ["handsome", "lovely", "good-looking", "beautiful"], hint: "\"boh\" — eau is simply \"oh\". Before a vowel it turns into bel: un bel hôtel. The feminine is belle, \"bel\"." },
        { id: "fr-u9l2-joli", type: "vocab", front: "joli", reading: "joli", meaning: "pretty", example: { jp: "Le parc est joli.", en: "The park is pretty." }, drill: { jp: "Le magasin est joli", en: "The store is pretty" }, accept: ["cute", "nice", "attractive", "pretty-looking"], hint: "\"zho-LEE\" — soft zh at the start. It is milder than beau: pretty rather than beautiful. The feminine jolie sounds exactly the same." },
        { id: "fr-u9l2-nouveau", type: "vocab", front: "nouveau", reading: "nouveau", meaning: "new", example: { jp: "Le magasin est nouveau.", en: "The store is new." }, drill: { jp: "Le magasin est nouveau", en: "The store is new" }, accept: ["new", "brand new", "new (masculine)", "not old"], hint: "\"noo-VOH\" — ou is \"oo\" and eau is \"oh\", two different sounds in one short word. The feminine is nouvelle, which is also the word for a piece of news." },
        { id: "fr-u9l2-vieux", type: "vocab", front: "vieux", reading: "vieux", meaning: "old", example: { jp: "L'hôtel est vieux, non ?", en: "The hotel is old, isn't it?" }, drill: { jp: "L'hôtel est vieux", en: "The hotel is old" }, accept: ["old", "elderly", "ancient", "old (masculine)"], hint: "Tacking non ? onto a sentence makes it a \"…right?\" question." },
        { id: "fr-u9l2-facile", type: "vocab", front: "facile", reading: "facile", meaning: "easy", example: { jp: "C'est facile !", en: "It's easy!" }, drill: { jp: "C'est très facile", en: "It's very easy" }, accept: ["simple", "straightforward", "not hard"], hint: "\"fa-SEEL\" — the c is soft before i and the final e is silent. Same form for both genders; its opposite is difficile." },
        { id: "fr-u9l2-difficile", type: "vocab", front: "difficile", reading: "difficile", meaning: "difficult", example: { jp: "C'est difficile ? Non, ça va !", en: "Is it hard? No, it's fine!" }, drill: { jp: "C'est difficile aujourd'hui", en: "It's difficult today" }, accept: ["hard", "tough", "not easy"], hint: "\"dee-fee-SEEL\" — three clean \"ee\" sounds, a soft c, a silent final e. Like facile it never changes for gender." },
      ],
    },
    {
      id: "fr-u9l3",
      unit: 9,
      lesson: 3,
      title: "Hot, cold and how you feel",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe states: chaud, froid, cher — je suis fatigué, content, malade.",
      items: [
        { id: "fr-u9l3-chaud", type: "vocab", front: "chaud", reading: "chaud", meaning: "hot", example: { jp: "Le café est très chaud !", en: "The coffee is very hot!" }, drill: { jp: "Le café est très chaud", en: "The coffee is very hot" }, accept: ["warm", "hot (masculine)", "heated"], hint: "\"shoh\" — ch is the sh of \"shoe\", au is \"oh\", and the d is silent. The feminine chaude wakes that d up." },
        { id: "fr-u9l3-froid", type: "vocab", front: "froid", reading: "froid", meaning: "cold", example: { jp: "Le lait est froid.", en: "The milk is cold." }, drill: { jp: "Le lait est froid", en: "The milk is cold" }, accept: ["cold", "chilly", "cool"], hint: "\"frwah\" — oi is \"wah\" and the d is silent. The feminine froide sounds it: \"frwad\". Its opposite is chaud." },
        { id: "fr-u9l3-cher", type: "vocab", front: "cher", reading: "cher", meaning: "expensive", example: { jp: "L'hôtel est très cher !", en: "The hotel is very expensive!" }, drill: { jp: "L'hôtel est très cher", en: "The hotel is very expensive" }, accept: ["dear", "costly", "pricey", "expensive"], hint: "\"shair\" — ch is sh and the r sounds. It carries both meanings at once: expensive, and dear as in Cher Paul at the top of a letter." },
        { id: "fr-u9l3-fatigue", type: "vocab", front: "fatigué", reading: "fatigue", meaning: "tired", example: { jp: "Je suis fatigué ce soir.", en: "I'm tired this evening." }, drill: { jp: "Je suis fatigué maintenant", en: "I'm tired now" }, accept: ["exhausted", "worn out", "weary"], hint: "ce soir = this evening. A woman writes fatiguée — it sounds exactly the same." },
        { id: "fr-u9l3-content", type: "vocab", front: "content", reading: "content", meaning: "happy", example: { jp: "Je suis très content !", en: "I'm very happy!" }, drill: { jp: "Je suis très content", en: "I'm very happy" }, accept: ["glad", "pleased", "happy (masculine)"], hint: "\"kon-TON\" — nasal twice and a silent t, which the feminine contente wakes up. This is everyday happy; heureux is the deeper word." },
        { id: "fr-u9l3-malade", type: "vocab", front: "malade", reading: "malade", meaning: "sick", example: { jp: "Paul est malade aujourd'hui.", en: "Paul is sick today." }, drill: { jp: "Paul est malade aujourd'hui", en: "Paul is sick today" }, accept: ["ill", "unwell", "sick (person)"], hint: "\"ma-LAD\" — both a's open, the final e silent so the d sounds. One form for both genders. The noun une maladie is an illness." },
      ],
    },
  ],
};
