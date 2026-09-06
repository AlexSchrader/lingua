// FR Unit 127 — Paysages et reliefs ("Landscapes and terrain") — B2
// Strand D, coverage unit 10 of 13 (block 3, units 121-133). Generic slot
// "Vocabulary 10 (B2)"; given a real theme — DEVIATION FROM THE SLOT NAME ONLY.
//
// ONE LEVEL ABOVE THE SLOT: A2+B1 teach the common landscape words (la montagne,
// la mer, la rivière, la forêt, le paysage, le sable, la source, le champ). This
// unit authors the PRECISE terrain vocabulary a B2 speaker needs to describe a
// real landscape — la falaise, le versant, le torrent, la crête. Every front
// checked against the 2,168 fronts and the sibling B2 blocks. Conventions: see
// fr/unit1.js.
export const FR_UNIT127 = {
  id: "fr-u127",
  lang: "fr",
  title: "Paysages et reliefs",
  order: 127,
  stage: "b2",
  lessons: [
    {
      id: "fr-u127l1",
      unit: 127,
      lesson: 1,
      title: "Mountains and heights",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe high ground: le sommet, la falaise, le versant, la crête, le rocher, le ravin.",
      items: [
        { id: "fr-u127l1-lesommet", type: "vocab", front: "le sommet", reading: "lesommet", meaning: "the summit", example: { jp: "Du sommet, on voit toute la vallée en dessous.", en: "From the summit, you can see the whole valley below." }, accept: ["summit", "the summit", "the top", "the peak"], hint: "The very top of a mountain. Also a summit meeting of leaders." },
        { id: "fr-u127l1-lafalaise", type: "vocab", front: "la falaise", reading: "lafalaise", meaning: "the cliff", example: { jp: "La falaise tombe droit dans la mer, c'est impressionnant.", en: "The cliff drops straight into the sea; it's impressive." }, drill: { jp: "La falaise tombe droit dans la mer", en: "The cliff drops straight into the sea" }, accept: ["cliff", "the cliff"], hint: "A steep rock face, often by the sea — like the white cliffs of Étretat." },
        { id: "fr-u127l1-leversant", type: "vocab", front: "le versant", reading: "leversant", meaning: "the slope", example: { jp: "Le versant nord reste couvert de neige jusqu'en mai.", en: "The north slope stays covered in snow until May." }, accept: ["slope", "the slope", "the hillside", "the side"], hint: "One side of a mountain or valley. From verser, to pour down." },
        { id: "fr-u127l1-lacrete", type: "vocab", front: "la crête", reading: "lacrete", meaning: "the ridge", example: { jp: "Le sentier suit la crête pendant plusieurs kilomètres.", en: "The path follows the ridge for several kilometres." }, accept: ["ridge", "the ridge", "the crest"], hint: "The line along the top of a range. Also a rooster's crest." },
        { id: "fr-u127l1-lerocher", type: "vocab", front: "le rocher", reading: "lerocher", meaning: "the rock", example: { jp: "Les enfants aiment grimper sur les rochers au bord de l'eau.", en: "The children like climbing on the rocks by the water." }, accept: ["rock", "the rock", "the boulder"], hint: "A large mass of rock. La roche is the material; un rocher is one big piece." },
        { id: "fr-u127l1-leravin", type: "vocab", front: "le ravin", reading: "leravin", meaning: "the ravine", example: { jp: "La voiture a failli tomber dans le ravin sur la route de montagne.", en: "The car nearly fell into the ravine on the mountain road." }, accept: ["ravine", "the ravine", "the gully"], hint: "A deep, narrow valley with steep sides." },
      ],
    },
    {
      id: "fr-u127l2",
      unit: 127,
      lesson: 2,
      title: "Water in the land",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe fresh water: le fleuve, le ruisseau, le torrent, l'étang, la berge, le marais.",
      items: [
        { id: "fr-u127l2-lefleuve", type: "vocab", front: "le fleuve", reading: "lefleuve", meaning: "the river", example: { jp: "La Seine est un fleuve, car elle se jette dans la mer.", en: "The Seine is a fleuve, because it flows into the sea." }, accept: ["river", "the river"], hint: "A large river that reaches the sea; une rivière flows into another river." },
        { id: "fr-u127l2-leruisseau", type: "vocab", front: "le ruisseau", reading: "leruisseau", meaning: "the stream", example: { jp: "Un petit ruisseau traverse le pré derrière la maison.", en: "A little stream crosses the meadow behind the house." }, drill: { jp: "Le ruisseau traverse le pré", en: "The stream crosses the meadow" }, accept: ["stream", "the stream", "the brook"], hint: "A small natural watercourse. From ruisseler, to trickle." },
        { id: "fr-u127l2-letorrent", type: "vocab", front: "le torrent", reading: "letorrent", meaning: "the torrent", example: { jp: "Après l'orage, le torrent est devenu dangereux.", en: "After the storm, the torrent became dangerous." }, accept: ["torrent", "the torrent", "the mountain stream"], hint: "A fast, violent mountain stream. Also un torrent de larmes." },
        { id: "fr-u127l2-letang", type: "vocab", front: "l'étang", reading: "letang", meaning: "the pond", example: { jp: "Des canards vivent sur l'étang toute l'année.", en: "Ducks live on the pond all year round." }, accept: ["pond", "the pond", "the pool"], hint: "A small, still body of water — bigger than une mare, smaller than un lac." },
        { id: "fr-u127l2-laberge", type: "vocab", front: "la berge", reading: "laberge", meaning: "the bank", example: { jp: "On s'est assis sur la berge pour regarder passer les bateaux.", en: "We sat on the bank to watch the boats go by." }, accept: ["bank", "the bank", "the riverbank"], hint: "The edge of a river. Also la rive, especially for a wide fleuve." },
        { id: "fr-u127l2-lemarais", type: "vocab", front: "le marais", reading: "lemarais", meaning: "the marsh", example: { jp: "Le marais abrite de nombreux oiseaux rares.", en: "The marsh shelters many rare birds." }, accept: ["marsh", "the marsh", "the swamp", "the wetland"], hint: "Wet, muddy ground. Le Marais is also a district of Paris." },
      ],
    },
    {
      id: "fr-u127l3",
      unit: 127,
      lesson: 3,
      title: "Shapes of the ground",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe the lie of the land: la vallée, la colline, la plaine, la grotte, le gouffre, la clairière.",
      items: [
        { id: "fr-u127l3-lavallee", type: "vocab", front: "la vallée", reading: "lavallee", meaning: "the valley", example: { jp: "La vallée est verte au printemps, dorée à la fin de l'été.", en: "The valley is green in spring, golden at the end of summer." }, accept: ["valley", "the valley"], hint: "The low land between hills or mountains, often with a river." },
        { id: "fr-u127l3-lacolline", type: "vocab", front: "la colline", reading: "lacolline", meaning: "the hill", example: { jp: "Le village est bâti sur une colline, à l'abri du vent.", en: "The village is built on a hill, sheltered from the wind." }, accept: ["hill", "the hill"], hint: "A raised area smaller than une montagne." },
        { id: "fr-u127l3-laplaine", type: "vocab", front: "la plaine", reading: "laplaine", meaning: "the plain", example: { jp: "La plaine s'étend à perte de vue, sans un seul arbre.", en: "The plain stretches as far as the eye can see, without a single tree." }, accept: ["plain", "the plain", "the flatland"], hint: "Flat, open country. Don't confuse with pleine (full)." },
        { id: "fr-u127l3-lagrotte", type: "vocab", front: "la grotte", reading: "lagrotte", meaning: "the cave", example: { jp: "On a découvert des peintures très anciennes dans cette grotte.", en: "Very old paintings were discovered in this cave." }, accept: ["cave", "the cave", "the grotto"], hint: "A natural hollow in rock — like the painted caves of Lascaux." },
        { id: "fr-u127l3-legouffre", type: "vocab", front: "le gouffre", reading: "legouffre", meaning: "the chasm", example: { jp: "Un gouffre profond s'ouvre au milieu des rochers.", en: "A deep chasm opens up in the middle of the rocks." }, accept: ["chasm", "the chasm", "the abyss", "the pit"], hint: "A deep hole in the ground. Figuratively, un gouffre financier = a money pit." },
        { id: "fr-u127l3-laclairiere", type: "vocab", front: "la clairière", reading: "laclairiere", meaning: "the clearing", example: { jp: "Au milieu de la forêt, on a trouvé une clairière pleine de soleil.", en: "In the middle of the forest, we found a clearing full of sunlight." }, accept: ["clearing", "the clearing", "the glade"], hint: "From clair. An open, sunlit space among the trees." },
      ],
    },
    {
      id: "fr-u127l4",
      unit: 127,
      lesson: 4,
      title: "By the sea and the ice",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe coast and cold: la côte, le rivage, la vague, la dune, le glacier, le sentier.",
      items: [
        { id: "fr-u127l4-lacote", type: "vocab", front: "la côte", reading: "lacote", meaning: "the coast", example: { jp: "La côte est rocheuse ici, il y a peu de plages.", en: "The coast is rocky here; there are few beaches." }, drill: { jp: "La côte est très rocheuse", en: "The coast is very rocky" }, accept: ["coast", "the coast", "the coastline"], hint: "The land along the sea. Also une côte = a rib, and a slope up a road." },
        { id: "fr-u127l4-lerivage", type: "vocab", front: "le rivage", reading: "lerivage", meaning: "the shore", example: { jp: "Les vagues déposent des coquillages sur le rivage.", en: "The waves leave shells on the shore." }, accept: ["shore", "the shore", "the seashore"], hint: "The strip of land the water reaches. From la rive." },
        { id: "fr-u127l4-lavague", type: "vocab", front: "la vague", reading: "lavague", meaning: "the wave", example: { jp: "Les vagues étaient si hautes que personne n'osait nager.", en: "The waves were so high that nobody dared to swim." }, accept: ["wave", "the wave"], hint: "A wave of water — also une vague de chaleur, a heat wave. As an adjective, vague = vague." },
        { id: "fr-u127l4-ladune", type: "vocab", front: "la dune", reading: "ladune", meaning: "the dune", example: { jp: "Le vent déplace peu à peu le sable des dunes.", en: "The wind slowly shifts the sand of the dunes." }, accept: ["dune", "the dune", "the sand dune"], hint: "A hill of sand shaped by the wind — like the dune du Pilat." },
        { id: "fr-u127l4-leglacier", type: "vocab", front: "le glacier", reading: "leglacier", meaning: "the glacier", example: { jp: "Le glacier recule un peu plus chaque année.", en: "The glacier retreats a little more every year." }, accept: ["glacier", "the glacier"], hint: "From glace, ice. Also un glacier = an ice-cream maker or shop." },
        { id: "fr-u127l4-lesentier", type: "vocab", front: "le sentier", reading: "lesentier", meaning: "the path", example: { jp: "Un sentier étroit mène jusqu'au bord de la falaise.", en: "A narrow path leads right to the edge of the cliff." }, accept: ["path", "the path", "the trail", "the footpath"], hint: "A narrow walking path, especially in nature. Wider than une piste is for skiing." },
      ],
    },
  ],
};
