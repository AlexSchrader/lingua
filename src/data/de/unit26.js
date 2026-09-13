// DE Unit 26 — Nature and animals (slot: nature) — A2
// Conventions and the FREE list live in de/unit1.js — read that header first.
// The CROSS-BLOCK COLLISION LEDGER is in de/unit21.js — read that before authoring.
//
// THIS UNIT DELIBERATELY TEACHES NO WEATHER. A1 u8 owns Sonne, Regen, Schnee,
// Wind, Wolke, Himmel, kalt, warm, heiß plus regnen and schneien, and block 3's
// u50 is "Wetter und Klima" — the A2 layer above them. I ruled that boundary for
// block 3 and this unit is me keeping my side of it: no temperature, no
// precipitation, no forecast, no seasons-as-climate. Nature here is THINGS —
// plants, landscape, animals.
//
// FOUR CANDIDATES DROPPED BY THE CROSS-BRANCH SCREEN, every one a duplicate that
// would otherwise have shipped silently:
//   die Blume    already block 2's at u40
//   die Erde     already block 2's at u34
//   die Umwelt   already block 2's at u34
//   die Natur    one lexeme with u2's natürlich, and far enough apart in length
//                that lint's isInflection would NOT have excused it either
// Block 2's u34 is "Wissenschaft und Umwelt", so the environmental register is
// theirs by theme as well as by slot. This unit stays on the concrete.
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT26 = {
  id: "de-u26",
  lang: "de",
  title: "Natur und Tiere",
  order: 26,
  stage: "a2",
  lessons: [
    {
      id: "de-u26l1",
      unit: 26,
      lesson: 1,
      title: "Der Wald",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe growing things: a tree, a wood, a plant, a leaf, grass, and say that something grows.",
      items: [
        { id: "de-u26l1-derbaum", type: "vocab", front: "der Baum", reading: "derbaum", meaning: "the tree", example: { jp: "Der Baum im Garten ist hoch.", en: "The tree in the garden is tall." }, drill: { jp: "Der Baum im Garten ist hoch", en: "The tree in the garden is tall" }, accept: ["the tree", "tree"], hint: "Plural takes an umlaut: der Baum, die Bäume. A Christmas tree is der Weihnachtsbaum, and Germans take it seriously." },
        { id: "de-u26l1-derwald", type: "vocab", front: "der Wald", reading: "derwald", meaning: "the forest", example: { jp: "Der Wald ist im Winter sehr dunkel.", en: "The forest is very dark in winter." }, drill: { jp: "Der Wald ist im Winter sehr dunkel", en: "The forest is very dark in winter" }, accept: ["the forest", "forest", "the wood", "the woods"], hint: "Covers both an English wood and an English forest — German does not split them. Im Wald spazieren gehen is close to a national pastime." },
        { id: "de-u26l1-diepflanze", type: "vocab", front: "die Pflanze", reading: "diepflanze", meaning: "the plant", example: { jp: "Die Pflanze im Zimmer ist neu.", en: "The plant in the room is new." }, drill: { jp: "Die Pflanze im Zimmer ist neu", en: "The plant in the room is new" }, accept: ["the plant", "plant"], hint: "Pf- at the start is one sound, both letters pronounced — press the lips for the p and release into the f. Pflanzen is also the verb, to plant." },
        { id: "de-u26l1-dasblatt", type: "vocab", front: "das Blatt", reading: "dasblatt", meaning: "the leaf", example: { jp: "Das Blatt am Baum ist grün.", en: "The leaf on the tree is green." }, drill: { jp: "Das Blatt am Baum ist grün", en: "The leaf on the tree is green" }, accept: ["the leaf", "leaf", "the sheet", "the sheet of paper"], hint: "Also a sheet of paper — the same picture in both, something flat and thin. Plural is die Blätter, with the umlaut." },
        { id: "de-u26l1-dasgras", type: "vocab", front: "das Gras", reading: "dasgras", meaning: "the grass", example: { jp: "Das Gras im Park ist kurz.", en: "The grass in the park is short." }, drill: { jp: "Das Gras im Park ist kurz", en: "The grass in the park is short" }, accept: ["the grass", "grass"], hint: "A close cognate of English grass, with a long a — Graas. Neuter, and normally singular the way English keeps it." },
        { id: "de-u26l1-wachsen", type: "vocab", front: "wachsen", reading: "wachsen", meaning: "to grow", example: { jp: "Der Baum wächst im Frühling.", en: "The tree grows in spring." }, drill: { jp: "Der Baum kann hier wachsen", en: "The tree can grow here" }, accept: ["to grow", "grow"], hint: "Strong, and the a takes an umlaut in the du and er forms: er wächst. It is only intransitive — things grow, but you cannot grow a thing; for that Germans say anbauen." },
      ],
    },
    {
      id: "de-u26l2",
      unit: 26,
      lesson: 2,
      title: "Die Landschaft",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the landscape around you: mountain, lake, river, sea, island and beach.",
      items: [
        { id: "de-u26l2-derberg", type: "vocab", front: "der Berg", reading: "derberg", meaning: "the mountain", example: { jp: "Der Berg im Winter ist weiß.", en: "The mountain is white in winter." }, drill: { jp: "Der Berg im Winter ist weiß", en: "The mountain is white in winter" }, accept: ["the mountain", "mountain", "the hill"], hint: "Covers both mountain and sizeable hill. In die Berge fahren means to go to the mountains — the plural, always, for the holiday." },
        { id: "de-u26l2-dersee", type: "vocab", front: "der See", reading: "dersee", meaning: "the lake", example: { jp: "Der See im Wald ist tief.", en: "The lake in the forest is deep." }, drill: { jp: "Der See im Wald ist tief", en: "The lake in the forest is deep" }, accept: ["the lake", "lake"], hint: "The gender does the work here: DER See is a lake, DIE See is the sea. Same spelling, opposite bodies of water — one of the sharpest article traps in German." },
        { id: "de-u26l2-derfluss", type: "vocab", front: "der Fluss", reading: "derfluss", meaning: "the river", example: { jp: "Der Fluss in der Stadt ist lang.", en: "The river in the city is long." }, drill: { jp: "Der Fluss in der Stadt ist lang", en: "The river in the city is long" }, accept: ["the river", "river"], hint: "From fließen, to flow. Note the double s after a short u — Fluss, but the plural lengthens the vowel: die Flüsse." },
        { id: "de-u26l2-dasmeer", type: "vocab", front: "das Meer", reading: "dasmeer", meaning: "the sea", example: { jp: "Das Meer ist heute sehr ruhig.", en: "The sea is very calm today." }, drill: { jp: "Das Meer ist heute sehr ruhig", en: "The sea is very calm today" }, accept: ["the sea", "sea", "the ocean", "ocean"], hint: "The everyday word for the sea, and the safe one — die See also means it but collides with der See, the lake. Use Meer and avoid the trap." },
        { id: "de-u26l2-dieinsel", type: "vocab", front: "die Insel", reading: "dieinsel", meaning: "the island", example: { jp: "Die Insel im Meer ist klein.", en: "The island in the sea is small." }, drill: { jp: "Die Insel im Meer ist klein", en: "The island in the sea is small" }, accept: ["the island", "island", "the isle"], hint: "From Latin insula, the same root that gives English insulate. The s is pronounced like a z: IN-zel." },
        { id: "de-u26l2-derstrand", type: "vocab", front: "der Strand", reading: "derstrand", meaning: "the beach", example: { jp: "Der Strand ist im Sommer sehr voll.", en: "The beach is very crowded in summer." }, drill: { jp: "Der Strand ist im Sommer sehr voll", en: "The beach is very crowded in summer" }, accept: ["the beach", "beach", "the shore"], hint: "The same word as English strand, which kept only the poetic sense of a shore. Am Strand is at the beach." },
      ],
    },
    {
      id: "de-u26l3",
      unit: 26,
      lesson: 3,
      title: "Tiere zu Hause",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about animals people keep: the dog, the cat, the horse, the cow — and say you feed them.",
      items: [
        { id: "de-u26l3-dastier", type: "vocab", front: "das Tier", reading: "dastier", meaning: "the animal", example: { jp: "Das Tier im Garten ist klein.", en: "The animal in the garden is small." }, drill: { jp: "Das Tier im Garten ist klein", en: "The animal in the garden is small" }, accept: ["the animal", "animal", "the creature"], hint: "Neuter, whatever the animal's own gender. Ein Haustier is a pet — literally a house-animal, built the transparent German way." },
        { id: "de-u26l3-derhund", type: "vocab", front: "der Hund", reading: "derhund", meaning: "the dog", example: { jp: "Der Hund läuft schnell in den Park.", en: "The dog runs quickly into the park." }, drill: { jp: "Der Hund läuft schnell in den Park", en: "The dog runs quickly into the park" }, accept: ["the dog", "dog"], hint: "Cognate with English hound, which narrowed to one kind of dog while German kept them all. The final d is said as a t: Hunt." },
        { id: "de-u26l3-diekatze", type: "vocab", front: "die Katze", reading: "diekatze", meaning: "the cat", example: { jp: "Die Katze schläft auf dem Sofa.", en: "The cat is sleeping on the sofa." }, drill: { jp: "Die Katze schläft auf dem Sofa", en: "The cat is sleeping on the sofa" }, accept: ["the cat", "cat"], hint: "Feminine as a species, whatever the individual cat is. Der Kater is specifically a tomcat — and also a hangover." },
        { id: "de-u26l3-daspferd", type: "vocab", front: "das Pferd", reading: "daspferd", meaning: "the horse", example: { jp: "Das Pferd läuft sehr schnell.", en: "The horse runs very fast." }, drill: { jp: "Das Pferd läuft sehr schnell", en: "The horse runs very fast" }, accept: ["the horse", "horse"], hint: "Another Pf- word, both letters sounded. Nothing like English horse — it comes from a late Latin word for a post-horse." },
        { id: "de-u26l3-diekuh", type: "vocab", front: "die Kuh", reading: "diekuh", meaning: "the cow", example: { jp: "Die Kuh gibt uns die Milch.", en: "The cow gives us the milk." }, drill: { jp: "Die Kuh gibt uns die Milch", en: "The cow gives us the milk" }, accept: ["the cow", "cow"], hint: "A close cognate of cow, with the h only lengthening the u — Kuuh, never a breathy sound. Plural die Kühe." },
        { id: "de-u26l3-futtern", type: "vocab", front: "füttern", reading: "futtern", meaning: "to feed", example: { jp: "Ich füttere den Hund am Morgen.", en: "I feed the dog in the morning." }, drill: { jp: "Wir müssen den Hund füttern", en: "We have to feed the dog" }, accept: ["to feed", "feed"], hint: "For animals and babies — anyone who cannot feed themselves. Das Futter is the feed itself, and also the lining of a coat." },
      ],
    },
    {
      id: "de-u26l4",
      unit: 26,
      lesson: 4,
      title: "Wilde Tiere",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe wild creatures — bird, fish, mouse, bee — where they nest, and call something wild.",
      items: [
        { id: "de-u26l4-dervogel", type: "vocab", front: "der Vogel", reading: "dervogel", meaning: "the bird", example: { jp: "Der Vogel singt im Frühling.", en: "The bird sings in spring." }, drill: { jp: "Der Vogel singt im Frühling", en: "The bird sings in spring" }, accept: ["the bird", "bird"], hint: "V is said as an f in German: FOH-gel. Plural umlauts to die Vögel, and fliegen from u23 is what it does." },
        { id: "de-u26l4-derfisch", type: "vocab", front: "der Fisch", reading: "derfisch", meaning: "the fish", example: { jp: "Der Fisch schwimmt im See.", en: "The fish swims in the lake." }, drill: { jp: "Der Fisch schwimmt im See", en: "The fish swims in the lake" }, accept: ["the fish", "fish"], hint: "Unlike English, it takes a normal plural — die Fische, several fish. The animal and the food are the same word, as in English." },
        { id: "de-u26l4-diemaus", type: "vocab", front: "die Maus", reading: "diemaus", meaning: "the mouse", example: { jp: "Die Maus ist sehr klein und grau.", en: "The mouse is very small and grey." }, drill: { jp: "Die Maus ist sehr klein und grau", en: "The mouse is very small and grey" }, accept: ["the mouse", "mouse"], hint: "Cognate with mouse and it changes the same way: die Maus, die Mäuse, exactly as mouse becomes mice. The computer one is also die Maus." },
        { id: "de-u26l4-diebiene", type: "vocab", front: "die Biene", reading: "diebiene", meaning: "the bee", example: { jp: "Die Biene fliegt in den Garten.", en: "The bee flies into the garden." }, drill: { jp: "Die Biene fliegt in den Garten", en: "The bee flies into the garden" }, accept: ["the bee", "bee"], hint: "Two syllables — BEE-neh — where English has one. Der Honig is what it makes, and Bienenstich is both a bee sting and a cake." },
        { id: "de-u26l4-dasnest", type: "vocab", front: "das Nest", reading: "dasnest", meaning: "the nest", example: { jp: "Das Nest im Baum ist klein.", en: "The nest in the tree is small." }, drill: { jp: "Das Nest im Baum ist klein", en: "The nest in the tree is small" }, accept: ["the nest", "nest"], hint: "Spelled and meant exactly as in English. Said of a village it is mildly rude — ein kleines Nest is a place where nothing happens." },
        { id: "de-u26l4-wild", type: "vocab", front: "wild", reading: "wild", meaning: "wild", example: { jp: "Das Tier im Wald ist wild.", en: "The animal in the forest is wild." }, drill: { jp: "Das Tier im Wald ist wild", en: "The animal in the forest is wild" }, accept: ["wild", "feral", "untamed"], hint: "Same spelling as English, said with a short i and a hard d — vilt. As a noun, das Wild is game in the hunting sense." },
      ],
    },
  ],
};
