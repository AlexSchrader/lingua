// FR Unit 90 — Ordre et désordre ("Order and mess") — B1
// Strand D, coverage unit 10 of 14 (block 3). Slot: coverage-b1-10 (generic
// "Vocabulary 10 (B1)"); given a real theme so the lessons cohere — slot number kept.
// Sorting, stacking, clearing and labelling — the physical vocabulary of tidiness,
// which A1 only touched with propre / sale / ranger.
// See unit84.js for the block-3 strategy.
export const FR_UNIT90 = {
  id: "fr-u90",
  lang: "fr",
  title: "Ordre et désordre",
  order: 90,
  stage: "b1",
  lessons: [
    {
      id: "fr-u90l1",
      unit: 90,
      lesson: 1,
      title: "Sorting things out",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Impose order on a pile of things: name order and mess, sort, file, stack — or pile it up anyhow.",
      items: [
        { id: "fr-u90l1-lordre", type: "vocab", front: "l'ordre", reading: "lordre", meaning: "order", example: { jp: "Les livres sont en ordre.", en: "The books are in order." }, accept: ["the order", "tidiness", "sequence"], hint: "Masculine — un ordre. It also means an order you give someone." },
        { id: "fr-u90l1-ledesordre", type: "vocab", front: "le désordre", reading: "ledesordre", meaning: "mess", example: { jp: "Quel désordre dans ta chambre !", en: "What a mess in your bedroom!" }, accept: ["the mess", "disorder", "untidiness"], hint: "dé- reverses it again: ordre → désordre." },
        { id: "fr-u90l1-trier", type: "vocab", front: "trier", reading: "trier", meaning: "to sort", example: { jp: "Je trie les déchets.", en: "I sort the rubbish." }, accept: ["sort out", "separate", "pick out"] },
        { id: "fr-u90l1-classer", type: "vocab", front: "classer", reading: "classer", meaning: "to classify", example: { jp: "Je classe mes papiers.", en: "I file my papers." }, accept: ["file", "arrange", "rank"] },
        { id: "fr-u90l1-empiler", type: "vocab", front: "empiler", reading: "empiler", meaning: "to pile up", example: { jp: "Je vais empiler les assiettes.", en: "I'm going to stack the plates." }, accept: ["stack up", "heap into a stack"] },
        { id: "fr-u90l1-entasser", type: "vocab", front: "entasser", reading: "entasser", meaning: "to heap up", example: { jp: "Il entasse ses vêtements sur la chaise.", en: "He heaps his clothes on the chair." }, accept: ["cram", "pile up carelessly", "amass"], hint: "empiler makes a neat stack; entasser makes a heap." },
      ],
    },
    {
      id: "fr-u90l2",
      unit: 90,
      lesson: 2,
      title: "Heaps, piles and rows",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name how things are grouped: a heap, a stack, a row, a queue — line them up, or scatter them.",
      items: [
        { id: "fr-u90l2-eparpiller", type: "vocab", front: "éparpiller", reading: "eparpiller", meaning: "to scatter", example: { jp: "Le vent éparpille les feuilles.", en: "The wind scatters the leaves." }, accept: ["spread about", "strew", "disperse"] },
        { id: "fr-u90l2-letas", type: "vocab", front: "le tas", reading: "letas", meaning: "heap", example: { jp: "Il y a un tas de sable dans le jardin.", en: "There's a heap of sand in the garden." }, accept: ["the heap", "pile", "mound"], hint: "« un tas de » is also the casual way to say \"loads of\": un tas de gens." },
        { id: "fr-u90l2-lapile", type: "vocab", front: "la pile", reading: "lapile", meaning: "stack", example: { jp: "Une pile de livres est tombée.", en: "A stack of books fell over." }, accept: ["the stack", "pile"], hint: "Also a battery: la pile de la télécommande. Same word, different world." },
        { id: "fr-u90l2-lerang", type: "vocab", front: "le rang", reading: "lerang", meaning: "row", example: { jp: "Le rang devant moi est vide.", en: "The row in front of me is empty." }, accept: ["the row", "rank", "line"] },
        { id: "fr-u90l2-lafile", type: "vocab", front: "la file", reading: "lafile", meaning: "queue", example: { jp: "La file est longue devant le cinéma.", en: "The queue is long in front of the cinema." }, accept: ["the queue", "line", "lane"] },
        { id: "fr-u90l2-aligner", type: "vocab", front: "aligner", reading: "aligner", meaning: "to line up", example: { jp: "Il faut aligner les chaises.", en: "You have to line up the chairs." }, accept: ["align", "put in a row", "straighten"] },
      ],
    },
    {
      id: "fr-u90l3",
      unit: 90,
      lesson: 3,
      title: "Clearing up",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Deal with a cluttered space: call it cluttered, free it up, clear it out, sweep it — name the trail it left, and call a result clear-cut.",
      items: [
        { id: "fr-u90l3-encombre", type: "vocab", front: "encombré", reading: "encombre", meaning: "cluttered", example: { jp: "Le couloir est encombré.", en: "The corridor is cluttered." }, accept: ["crowded", "blocked", "congested"] },
        { id: "fr-u90l3-degager", type: "vocab", front: "dégager", reading: "degager", meaning: "to free up", example: { jp: "Il faut dégager le couloir.", en: "You have to clear the corridor." }, accept: ["clear", "unblock", "open up"] },
        { id: "fr-u90l3-debarrasser", type: "vocab", front: "débarrasser", reading: "debarrasser", meaning: "to clear away", example: { jp: "Je débarrasse la table après le repas.", en: "I clear the table after the meal." }, accept: ["clear off", "get rid of", "tidy away"] },
        { id: "fr-u90l3-balayer", type: "vocab", front: "balayer", reading: "balayer", meaning: "to sweep", example: { jp: "Je balaie la cuisine tous les jours.", en: "I sweep the kitchen every day." }, accept: ["sweep up", "brush"] },
        { id: "fr-u90l3-net", type: "vocab", front: "net", reading: "net", meaning: "clear-cut", example: { jp: "Sa réponse est nette.", en: "Their answer is clear-cut." }, accept: ["clean", "neat", "distinct", "sharp"], hint: "The t IS pronounced: « nète ». Its dominant sense is sharp and distinct; the \"clean\" sense survives mainly in fixed phrases like propre et net." },
        { id: "fr-u90l3-latrace", type: "vocab", front: "la trace", reading: "latrace", meaning: "trail", example: { jp: "Il y a des traces sur le verre.", en: "There are marks on the glass." }, accept: ["mark", "trace", "smudge"] },
      ],
    },
    {
      id: "fr-u90l4",
      unit: 90,
      lesson: 4,
      title: "Knowing where things are",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Keep track of things: a spot, a label, a landmark — spot something, jot it down, mark it.",
      items: [
        { id: "fr-u90l4-lemplacement", type: "vocab", front: "l'emplacement", reading: "lemplacement", meaning: "spot", example: { jp: "C'est le bon emplacement pour l'armoire.", en: "This is the right spot for the wardrobe." }, accept: ["the location", "site", "position"], hint: "Masculine. More precise than l'endroit: the exact space a thing occupies." },
        { id: "fr-u90l4-letiquette", type: "vocab", front: "l'étiquette", reading: "letiquette", meaning: "label", example: { jp: "Il n'y a pas d'étiquette sur la boîte.", en: "There's no label on the box." }, accept: ["the label", "tag", "sticker"], hint: "Feminine. It also means etiquette — the English word came from this one." },
        { id: "fr-u90l4-lerepere", type: "vocab", front: "le repère", reading: "lerepere", meaning: "landmark", example: { jp: "Cette gare est un bon repère.", en: "This station is a good landmark." }, accept: ["the marker", "reference point", "guide"] },
        { id: "fr-u90l4-reperer", type: "vocab", front: "repérer", reading: "reperer", meaning: "to locate", example: { jp: "J'ai repéré une bonne place.", en: "I've spotted a good spot." }, accept: ["pick out", "notice", "catch sight of"] },
        { id: "fr-u90l4-noter", type: "vocab", front: "noter", reading: "noter", meaning: "to jot down", example: { jp: "Je note la date sur un papier.", en: "I jot the date down on a piece of paper." }, accept: ["write down", "make a note", "note"], hint: "Also to mark schoolwork: noter les copies." },
        { id: "fr-u90l4-marquer", type: "vocab", front: "marquer", reading: "marquer", meaning: "to leave a mark", example: { jp: "Je marque la page avec un bout de papier.", en: "I mark the page with a bit of paper." }, accept: ["mark", "mark out", "score"] },
      ],
    },
  ],
};
