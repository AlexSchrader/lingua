// FR Unit 13 — Le temps ("The weather") — A1
// Weather comes BEFORE months on purpose: "il fait froid" / "il pleut" are how a
// learner actually talks about January, so the months unit that follows can use
// them. `il fait` is taught explicitly here — it's the impersonal verb French uses
// for all weather, and nothing else introduces it. Conventions: see fr/unit1.js.
export const FR_UNIT14 = {
  id: "fr-u14",
  lang: "fr",
  title: "Le temps",
  order: 14,
  stage: "a1",
  lessons: [
    {
      id: "fr-u14l1",
      unit: 14,
      lesson: 1,
      title: "What's the weather?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about the weather: il fait beau, il pleut, il neige — le soleil, la pluie, le vent.",
      items: [
        { id: "fr-u14l1-ilfait", type: "vocab", front: "il fait", reading: "ilfait", meaning: "it is (weather)", example: { jp: "Il fait beau aujourd'hui !", en: "The weather is nice today!" }, drill: { jp: "Il fait froid ce matin", en: "It's cold this morning" }, accept: ["the weather is", "it's", "it feels"], hint: "Weather uses faire, not être: il fait beau / il fait chaud / il fait froid. Never \"il est chaud\" for weather." },
        { id: "fr-u14l1-lesoleil", type: "vocab", front: "le soleil", reading: "lesoleil", meaning: "sun", example: { jp: "Le soleil est jaune.", en: "The sun is yellow." }, drill: { jp: "Le soleil est chaud aujourd'hui", en: "The sun is hot today" }, accept: ["the sun", "sunshine", "sunlight"], hint: "\"so-LAY\" — eil ends in the \"ay-y\" glide, so that final l is a y, not an l. Masculine: le soleil. Il fait soleil means it is sunny." },
        { id: "fr-u14l1-lapluie", type: "vocab", front: "la pluie", reading: "lapluie", meaning: "rain", example: { jp: "Je n'aime pas la pluie.", en: "I don't like the rain." }, drill: { jp: "La pluie est froide", en: "The rain is cold" }, accept: ["the rain", "rain", "rainfall"], hint: "\"plwee\" — ui is one glide straight after the l, and the final e is silent. Feminine: la pluie; the matching verb is il pleut." },
        { id: "fr-u14l1-ilpleut", type: "vocab", front: "il pleut", reading: "ilpleut", meaning: "it is raining", example: { jp: "Il pleut ! Je rentre à la maison.", en: "It's raining! I'm going home." }, drill: { jp: "Il pleut beaucoup aujourd'hui", en: "It's raining a lot today" }, accept: ["it rains", "it's raining", "it is raining"], hint: "\"eel PLUH\" — eu is the rounded vowel of bleu and the t is silent. Weather verbs exist only with il: there is no \"je pleut\"." },
        { id: "fr-u14l1-ilneige", type: "vocab", front: "il neige", reading: "ilneige", meaning: "it is snowing", example: { jp: "Il neige et il fait très froid.", en: "It's snowing and it's very cold." }, drill: { jp: "Il neige sur la montagne", en: "It's snowing on the mountain" }, accept: ["it snows", "it's snowing", "it is snowing"], hint: "\"eel NEZH\" — ei is the open \"eh\" and -ge is the soft zh of \"measure\". Like il pleut it only ever takes il." },
        { id: "fr-u14l1-laneige", type: "vocab", front: "la neige", reading: "laneige", meaning: "snow", example: { jp: "La neige est blanche.", en: "The snow is white." }, drill: { jp: "La neige est blanche", en: "The snow is white" }, accept: ["the snow", "snow", "snowfall"], hint: "\"nezh\" — identical in sound to the verb il neige, which makes this pair the cheapest two words in the lesson. Feminine: la neige." },
        { id: "fr-u14l1-levent", type: "vocab", front: "le vent", reading: "levent", meaning: "wind", example: { jp: "Le vent est froid aujourd'hui.", en: "The wind is cold today." }, drill: { jp: "Le vent est fort aujourd'hui", en: "The wind is strong today" }, accept: ["the wind", "wind", "a breeze"], hint: "\"von\" — nasal -en with the t silent. Masculine: le vent. Il fait du vent is how you say it is windy." },
        { id: "fr-u14l1-lenuage", type: "vocab", front: "le nuage", reading: "lenuage", meaning: "cloud", example: { jp: "Le nuage est blanc.", en: "The cloud is white." }, drill: { jp: "Le nuage est gris", en: "The cloud is grey" }, accept: ["the cloud", "cloud", "clouds"], hint: "\"new-AHZH\" — the tight French u, then the soft zh of -age. Masculine: le nuage, and nuageux means cloudy." },
      ],
    },
    {
      id: "fr-u14l2",
      unit: 14,
      lesson: 2,
      title: "Outdoors",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name what's outside: le ciel, la mer, la montagne, la plage, la forêt, l'arbre, la fleur.",
      items: [
        { id: "fr-u14l2-leciel", type: "vocab", front: "le ciel", reading: "leciel", meaning: "sky", example: { jp: "Le ciel est bleu.", en: "The sky is blue." }, drill: { jp: "Le ciel est bleu aujourd'hui", en: "The sky is blue today" }, accept: ["the sky", "heaven", "the heavens"], hint: "\"syel\" — the c is soft before i and ie is one glide. Masculine: le ciel. Its plural is irregular: les cieux." },
        { id: "fr-u14l2-lamer", type: "vocab", front: "la mer", reading: "lamer", meaning: "sea", example: { jp: "La mer est bleue aujourd'hui.", en: "The sea is blue today." }, drill: { jp: "La mer est calme aujourd'hui", en: "The sea is calm today" }, accept: ["the sea", "ocean", "the ocean"], hint: "\"mair\" — the r sounds, which makes it a sound-twin of la mère, mother. Feminine: la mer. Au bord de la mer is at the seaside." },
        { id: "fr-u14l2-lamontagne", type: "vocab", front: "la montagne", reading: "lamontagne", meaning: "mountain", example: { jp: "À la montagne, il neige souvent.", en: "In the mountains, it often snows." }, drill: { jp: "La montagne est très haute", en: "The mountain is very high" }, accept: ["the mountain", "mountains", "the mountains"], hint: "\"mon-TAN-y\" — a nasal first syllable, then gn as the \"ny\" of onion. Feminine: la montagne. À la montagne means up in the mountains." },
        { id: "fr-u14l2-laplage", type: "vocab", front: "la plage", reading: "laplage", meaning: "beach", example: { jp: "La plage est très jolie.", en: "The beach is very pretty." }, drill: { jp: "La plage est près de la mer", en: "The beach is near the sea" }, accept: ["the beach", "beach", "the seaside"], hint: "\"plahzh\" — a plain a, then the soft zh of -age. Feminine: la plage. À la plage is at the beach." },
        { id: "fr-u14l2-laforet", type: "vocab", front: "la forêt", reading: "laforet", meaning: "forest", example: { jp: "La forêt est grande et verte.", en: "The forest is big and green." }, drill: { jp: "La forêt est très grande", en: "The forest is very big" }, accept: ["the forest", "woods", "the woods"], hint: "\"fo-REH\" — the ê is the open \"eh\" and the t is silent. The hat marks the lost s that English kept in forest. Feminine: la forêt." },
        { id: "fr-u14l2-larbre", type: "vocab", front: "l'arbre", reading: "larbre", meaning: "tree", example: { jp: "L'arbre est très vieux.", en: "The tree is very old." }, drill: { jp: "L'arbre est devant la maison", en: "The tree is in front of the house" }, accept: ["the tree", "tree", "a tree"], hint: "One syllable, \"ARBR\", with the final -re barely a breath. It is masculine, which l' hides from you: un grand arbre." },
        { id: "fr-u14l2-lafleur", type: "vocab", front: "la fleur", reading: "lafleur", meaning: "flower", example: { jp: "La fleur est rouge.", en: "The flower is red." }, drill: { jp: "La fleur est rouge", en: "The flower is red" }, accept: ["the flower", "flower", "a flower", "blossom"], hint: "\"flur\" — eu before r is a more open rounded vowel than in bleu. Feminine: la fleur. Un fleuriste is the florist." },
      ],
    },
    {
      id: "fr-u14l3",
      unit: 14,
      lesson: 3,
      title: "Hot, cold and in between",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe conditions: frais, doux, humide, sec, la température, le degré, l'orage.",
      items: [
        { id: "fr-u14l3-frais", type: "vocab", front: "frais", reading: "frais", meaning: "cool", example: { jp: "Ce matin, il fait frais.", en: "This morning, it's cool." }, drill: { jp: "Le matin est frais ici", en: "The morning is cool here" }, accept: ["fresh", "chilly", "cool (weather)"], hint: "Also \"fresh\" for food — le pain frais is fresh bread." },
        { id: "fr-u14l3-doux", type: "vocab", front: "doux", reading: "doux", meaning: "mild", example: { jp: "Il fait doux aujourd'hui.", en: "It's mild today." }, drill: { jp: "Le temps est doux aujourd'hui", en: "The weather is mild today" }, accept: ["soft", "gentle", "sweet"], hint: "\"doo\" — ou is \"oo\" and the x is silent. The feminine is douce, \"dooss\". One word covers soft, gentle, sweet and, of weather, mild." },
        { id: "fr-u14l3-humide", type: "vocab", front: "humide", reading: "humide", meaning: "damp", example: { jp: "Après la pluie, c'est humide.", en: "After the rain, it's damp." }, drill: { jp: "Le temps est humide aujourd'hui", en: "The weather is damp today" }, accept: ["humid", "wet", "moist"], hint: "après = after — a small word worth keeping." },
        { id: "fr-u14l3-sec", type: "vocab", front: "sec", reading: "sec", meaning: "dry", example: { jp: "Le vent est sec et froid.", en: "The wind is dry and cold." }, drill: { jp: "Le vent est sec ici", en: "The wind is dry here" }, accept: ["dried", "dry (masculine)", "arid"], hint: "\"sek\" — the final c sounds, one of the CaReFuL consonants. The feminine is irregular: sèche, with an accent and a sh." },
        { id: "fr-u14l3-latemperature", type: "vocab", front: "la température", reading: "latemperature", meaning: "temperature", example: { jp: "Quelle est la température aujourd'hui ?", en: "What's the temperature today?" }, drill: { jp: "La température est douce aujourd'hui", en: "The temperature is mild today" }, accept: ["the temperature", "temperature", "how warm it is"], hint: "\"tom-pay-ra-TEWR\" — nasal first syllable, é as \"ay\", and the ending is the tight French u. Feminine: la température." },
        { id: "fr-u14l3-ledegre", type: "vocab", front: "le degré", reading: "ledegre", meaning: "degree", example: { jp: "Il fait vingt degrés.", en: "It's twenty degrees." }, drill: { jp: "Le degré est une mesure", en: "The degree is a measurement" }, accept: ["the degree", "degrees", "a degree"], hint: "\"duh-GRAY\" — the é is the closed \"ay\". Masculine: le degré. Il fait vingt degrés uses faire, like every other weather phrase." },
        { id: "fr-u14l3-lorage", type: "vocab", front: "l'orage", reading: "lorage", meaning: "storm", example: { jp: "L'orage arrive ! Je rentre à la maison.", en: "The storm is coming! I'm going home." }, drill: { jp: "L'orage arrive ce soir", en: "The storm is coming this evening" }, accept: ["the storm", "thunderstorm", "a storm"], hint: "\"o-RAHZH\" — the soft zh of -age once more. Masculine, hidden by l': un gros orage. Orageux means stormy." },
      ],
    },
  ],
};
