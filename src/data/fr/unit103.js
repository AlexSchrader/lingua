// FR Unit 103 — Les arts et la critique (slot: arts and criticism) — B2
// B1 taught le film, le roman, la chanson, la critique, le genre, l'artiste. B2
// adds the register of ART and its criticism: works (l'œuvre, le chef-d'œuvre, la
// toile, la sculpture), styles and movements (le courant, l'esthétique, figuratif,
// classique), interpretation (la poésie, interpréter, apprécier, subjectif) and
// aesthetic quality (raffiné, original, émouvant, sublime). Fronts checked against
// the 2,168 live fr fronts. Conventions: fr/unit1.js.
export const FR_UNIT103 = {
  id: "fr-u103",
  lang: "fr",
  title: "Les arts et la critique",
  order: 103,
  stage: "b2",
  lessons: [
    {
      id: "fr-u103l1",
      unit: 103,
      lesson: 1,
      title: "The works",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name kinds of artwork: une œuvre, un chef-d'œuvre, une toile, une sculpture.",
      items: [
        { id: "fr-u103l1-loeuvre", type: "vocab", front: "l'œuvre", reading: "loeuvre", meaning: "the work", example: { jp: "Cette œuvre a demandé dix ans de travail.", en: "This work took ten years of labour." }, accept: ["work", "the artwork", "the piece"], hint: "A work of art or a body of work — l'œuvre de Victor Hugo. Feminine: une œuvre." },
        { id: "fr-u103l1-lechefdoeuvre", type: "vocab", front: "le chef-d'œuvre", reading: "lechefdoeuvre", meaning: "the masterpiece", example: { jp: "Ce livre est un vrai chef-d'œuvre.", en: "This book is a real masterpiece." }, accept: ["masterpiece"], hint: "A masterpiece — literally 'the chief work'. Plural: des chefs-d'œuvre." },
        { id: "fr-u103l1-latoile", type: "vocab", front: "la toile", reading: "latoile", meaning: "the canvas", example: { jp: "Le peintre a fini sa dernière toile.", en: "The painter finished his latest canvas." }, drill: { jp: "Le peintre a fini la toile", en: "The painter finished the canvas" }, accept: ["canvas", "the painting", "the web"], hint: "A painting on canvas — une toile de maître. Also cloth, or the Web (la Toile)." },
        { id: "fr-u103l1-lasculpture", type: "vocab", front: "la sculpture", reading: "lasculpture", meaning: "the sculpture", example: { jp: "Il y a une belle sculpture dans le parc.", en: "There's a beautiful sculpture in the park." }, accept: ["sculpture"], hint: "A carved or moulded work — from sculpter. The artist is un sculpteur." },
        { id: "fr-u103l1-lerecueil", type: "vocab", front: "le recueil", reading: "lerecueil", meaning: "the collection", example: { jp: "Ce livre est un recueil de belles histoires.", en: "This book is a collection of beautiful stories." }, accept: ["collection", "the anthology"], hint: "A collection of texts — un recueil de poèmes. From recueillir, to gather." },
        { id: "fr-u103l1-lepeintre", type: "vocab", front: "le peintre", reading: "lepeintre", meaning: "the painter", example: { jp: "Ce peintre aime beaucoup les couleurs.", en: "This painter loves colours." }, drill: { jp: "Le peintre aime beaucoup les couleurs", en: "The painter really likes colours" }, accept: ["painter"], hint: "A painter — un peintre célèbre. From peindre. Une peintre for a woman." },
      ],
    },
    {
      id: "fr-u103l2",
      unit: 103,
      lesson: 2,
      title: "Styles and movements",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about artistic styles: un courant, un mouvement, l'esthétique, classique.",
      items: [
        { id: "fr-u103l2-lecourant", type: "vocab", front: "le courant", reading: "lecourant", meaning: "the trend", example: { jp: "Ce courant artistique vient d'Italie.", en: "This artistic trend comes from Italy." }, accept: ["the trend", "the current", "the school", "the movement"], hint: "A trend or school of thought — un courant artistique. Also a water/electric current." },
        { id: "fr-u103l2-lemouvement", type: "vocab", front: "le mouvement", reading: "lemouvement", meaning: "the movement", example: { jp: "Ce peintre fait partie d'un grand mouvement.", en: "This painter is part of a big movement." }, accept: ["movement", "the motion"], hint: "An art/political movement, or physical motion — le mouvement moderne." },
        { id: "fr-u103l2-lesthetique", type: "vocab", front: "l'esthétique", reading: "lesthetique", meaning: "the aesthetic", example: { jp: "J'aime beaucoup l'esthétique de ce film.", en: "I really like the aesthetic of this film." }, accept: ["aesthetic", "the look", "the beauty"], hint: "The sense of beauty / look of a work — une belle esthétique. Also 'aesthetic' (adj)." },
        { id: "fr-u103l2-figuratif", type: "vocab", front: "figuratif", reading: "figuratif", meaning: "figurative", example: { jp: "Il préfère l'art figuratif à l'art abstrait.", en: "He prefers figurative art to abstract art." }, accept: ["figurative", "representational"], hint: "Showing real recognisable things — the opposite of abstrait. From figure." },
        { id: "fr-u103l2-classique", type: "vocab", front: "classique", reading: "classique", meaning: "classical", example: { jp: "Elle écoute surtout de la musique classique.", en: "She mostly listens to classical music." }, accept: ["classical", "classic"], hint: "Classical, or a classic — un classique du cinéma. From classe." },
        { id: "fr-u103l2-linspiration", type: "vocab", front: "l'inspiration", reading: "linspiration", meaning: "the inspiration", example: { jp: "Ce peintre trouve son inspiration dans la nature.", en: "This painter finds his inspiration in nature." }, accept: ["inspiration"], hint: "The spark of a creative idea — manquer d'inspiration. From inspirer." },
      ],
    },
    {
      id: "fr-u103l3",
      unit: 103,
      lesson: 3,
      title: "Reading a work",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Interpret and judge art: la poésie, interpréter, apprécier, subjectif.",
      items: [
        { id: "fr-u103l3-lapoesie", type: "vocab", front: "la poésie", reading: "lapoesie", meaning: "poetry", example: { jp: "Il aime la poésie depuis son enfance.", en: "He has loved poetry since childhood." }, accept: ["poetry", "the poem"], hint: "Poetry, or a single poem — écrire de la poésie. From poète." },
        { id: "fr-u103l3-lepoete", type: "vocab", front: "le poète", reading: "lepoete", meaning: "the poet", example: { jp: "Ce poète est mort très jeune.", en: "This poet died very young." }, accept: ["poet"], hint: "A poet — un grand poète. Une poète (or poétesse) for a woman." },
        { id: "fr-u103l3-interpreter", type: "vocab", front: "interpréter", reading: "interpreter", meaning: "to interpret", example: { jp: "Chacun peut interpréter ce poème à sa façon.", en: "Everyone can interpret this poem in their own way." }, accept: ["to interpret", "to read", "to perform"], hint: "To read a meaning into, or to perform — interpréter un rôle, un morceau." },
        { id: "fr-u103l3-apprecier", type: "vocab", front: "apprécier", reading: "apprecier", meaning: "to appreciate", example: { jp: "Il faut du temps pour apprécier cette musique.", en: "It takes time to appreciate this music." }, accept: ["to appreciate", "to enjoy", "to value"], hint: "To value / enjoy — apprécier une œuvre. Also to appreciate a person." },
        { id: "fr-u103l3-subjectif", type: "vocab", front: "subjectif", reading: "subjectif", meaning: "subjective", example: { jp: "Le goût pour l'art est toujours subjectif.", en: "Taste in art is always subjective." }, accept: ["subjective", "personal"], hint: "Depending on the person, not the facts — the opposite of objectif." },
        { id: "fr-u103l3-lasensibilite", type: "vocab", front: "la sensibilité", reading: "lasensibilite", meaning: "the sensitivity", example: { jp: "Cette artiste peint avec beaucoup de sensibilité.", en: "This artist paints with a lot of sensitivity." }, drill: { jp: "La sensibilité est très grande", en: "The sensitivity is very great" }, accept: ["sensitivity", "the feeling"], hint: "Emotional finesse / feeling — une grande sensibilité. From sensible." },
      ],
    },
    {
      id: "fr-u103l4",
      unit: 103,
      lesson: 4,
      title: "What makes it good",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Praise a work precisely: raffiné, original, émouvant, sublime.",
      items: [
        { id: "fr-u103l4-raffine", type: "vocab", front: "raffiné", reading: "raffine", meaning: "refined", example: { jp: "Ce film a un style très raffiné.", en: "This film has a very refined style." }, accept: ["refined", "sophisticated", "elegant"], hint: "Refined, subtle and elegant — un goût raffiné. From raffiner." },
        { id: "fr-u103l4-original", type: "vocab", front: "original", reading: "original", meaning: "original", example: { jp: "Son idée est vraiment originale.", en: "Her idea is really original." }, accept: ["original", "novel", "unique"], hint: "New and unlike anything else — une œuvre originale. Also 'the original' (le/l'original)." },
        { id: "fr-u103l4-emouvant", type: "vocab", front: "émouvant", reading: "emouvant", meaning: "moving", example: { jp: "La fin du film est vraiment émouvante.", en: "The end of the film is really moving." }, accept: ["moving", "touching"], hint: "That stirs the emotions — un moment émouvant. From émouvoir (to move)." },
        { id: "fr-u103l4-lharmonie", type: "vocab", front: "l'harmonie", reading: "lharmonie", meaning: "the harmony", example: { jp: "Il y a une belle harmonie entre les couleurs.", en: "There's a beautiful harmony between the colours." }, accept: ["harmony"], hint: "A pleasing balance — l'harmonie des couleurs, en harmonie avec." },
        { id: "fr-u103l4-sublime", type: "vocab", front: "sublime", reading: "sublime", meaning: "sublime", example: { jp: "Le coucher de soleil était tout simplement sublime.", en: "The sunset was quite simply sublime." }, accept: ["sublime", "breathtaking", "gorgeous"], hint: "Breathtakingly beautiful — un paysage sublime. Stronger than beau." },
        { id: "fr-u103l4-levers", type: "vocab", front: "le vers", reading: "levers", meaning: "the line of verse", example: { jp: "Elle connaît ce poème vers par vers.", en: "She knows this poem line by line." }, accept: ["line of verse", "the verse", "the line"], hint: "A line of poetry — un poème en vers. Don't confuse with vers (towards) or le verre (glass)." },
      ],
    },
  ],
};
