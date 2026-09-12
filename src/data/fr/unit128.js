// FR Unit 128 — Les arts et la création ("The arts and creation") — B2
// Strand D, coverage unit 11 of 13 (block 3, units 121-133). Generic slot
// "Vocabulary 11 (B2)"; given a real theme — DEVIATION FROM THE SLOT NAME ONLY.
//
// ONE LEVEL ABOVE THE SLOT: A2+B1 teach the everyday culture words (le film, la
// musique, le livre, le roman, l'écrivain, l'auteur, le tableau, la scène, le
// spectacle, le musée, l'artiste, l'exposition). This unit authors the CREATOR'S
// vocabulary a B2 speaker needs to talk about how art is made — le vers, la
// strophe, le pinceau, la partition. Every front checked against the 2,168 fronts
// and the sibling B2 blocks. Conventions: see fr/unit1.js.
export const FR_UNIT128 = {
  id: "fr-u128",
  lang: "fr",
  title: "Les arts et la création",
  order: 128,
  stage: "b2",
  lessons: [
    {
      id: "fr-u128l1",
      unit: 128,
      lesson: 1,
      title: "Words on the page",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about writing: l'œuvre, le poème, le vers, la strophe, la rime, le recueil.",
      items: [
        { id: "fr-u128l1-louvrage", type: "vocab", front: "l'ouvrage", reading: "louvrage", meaning: "the work", example: { jp: "Cet ouvrage a demandé dix ans de travail à son auteur.", en: "This work took its author ten years of labour." }, accept: ["work", "the work", "the book", "the volume"], hint: "A substantial written work or piece of craftsmanship. From ouvrer, to work." },
        { id: "fr-u128l1-lepoeme", type: "vocab", front: "le poème", reading: "lepoeme", meaning: "the poem", example: { jp: "Elle a appris ce poème par cœur à l'école.", en: "She learned this poem by heart at school." }, drill: { jp: "Le poème est très beau", en: "The poem is very beautiful" }, accept: ["poem", "the poem"], hint: "The text itself; la poésie is poetry as an art. Note: un poème (masculine)." },
        { id: "fr-u128l1-lesonnet", type: "vocab", front: "le sonnet", reading: "lesonnet", meaning: "the sonnet", example: { jp: "Ce sonnet de quatorze lignes parle d'un amour perdu.", en: "This fourteen-line sonnet speaks of a lost love." }, accept: ["sonnet", "the sonnet"], hint: "A fixed poem of fourteen lines — a favourite form of Ronsard and Baudelaire." },
        { id: "fr-u128l1-lastrophe", type: "vocab", front: "la strophe", reading: "lastrophe", meaning: "the stanza", example: { jp: "Chaque strophe de la chanson raconte une saison.", en: "Each stanza of the song tells of a season." }, accept: ["stanza", "the stanza", "the verse"], hint: "A group of lines — what English often calls a 'verse' of a song." },
        { id: "fr-u128l1-larime", type: "vocab", front: "la rime", reading: "larime", meaning: "the rhyme", example: { jp: "La rime entre ces deux mots rend le vers plus musical.", en: "The rhyme between these two words makes the line more musical." }, accept: ["rhyme", "the rhyme"], hint: "Matching sounds at line ends. rimer = to rhyme." },
        { id: "fr-u128l1-lanthologie", type: "vocab", front: "l'anthologie", reading: "lanthologie", meaning: "the anthology", example: { jp: "Cette anthologie réunit les plus beaux poèmes du siècle.", en: "This anthology brings together the finest poems of the century." }, accept: ["anthology", "the anthology", "the collection"], hint: "A book of chosen texts. From the Greek for 'a gathering of flowers'." },
      ],
    },
    {
      id: "fr-u128l2",
      unit: 128,
      lesson: 2,
      title: "Stories and stage",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about narrative and theatre: le conte, le chapitre, la comédie, la tragédie, le décor, le refrain.",
      items: [
        { id: "fr-u128l2-leconte", type: "vocab", front: "le conte", reading: "leconte", meaning: "the tale", example: { jp: "Ce conte pour enfants finit toujours bien.", en: "This children's tale always ends well." }, accept: ["tale", "the tale", "the story", "the fairy tale"], hint: "A short traditional story, often magical — un conte de fées. Not le comte (count) or le compte (account)." },
        { id: "fr-u128l2-lechapitre", type: "vocab", front: "le chapitre", reading: "lechapitre", meaning: "the chapter", example: { jp: "Le dernier chapitre explique enfin tout le mystère.", en: "The last chapter finally explains the whole mystery." }, accept: ["chapter", "the chapter"], hint: "A numbered part of a book. Also a topic: passons à un autre chapitre." },
        { id: "fr-u128l2-lacomedie", type: "vocab", front: "la comédie", reading: "lacomedie", meaning: "the comedy", example: { jp: "Cette comédie fait rire toute la salle du début à la fin.", en: "This comedy makes the whole room laugh from start to finish." }, accept: ["comedy", "the comedy"], hint: "A funny play or film. jouer la comédie = to put on an act." },
        { id: "fr-u128l2-latragedie", type: "vocab", front: "la tragédie", reading: "latragedie", meaning: "the tragedy", example: { jp: "La pièce est une tragédie, donc elle finit mal.", en: "The play is a tragedy, so it ends badly." }, drill: { jp: "La tragédie finit toujours mal", en: "The tragedy always ends badly" }, accept: ["tragedy", "the tragedy"], hint: "A serious play with an unhappy end; also a real-life disaster." },
        { id: "fr-u128l2-ledecor", type: "vocab", front: "le décor", reading: "ledecor", meaning: "the set", example: { jp: "Le décor de la pièce représente un vieux château.", en: "The set of the play represents an old castle." }, accept: ["set", "the set", "the scenery", "the decor"], hint: "The scenery on a stage; also the setting of a scene or a room's decor." },
        { id: "fr-u128l2-lerefrain", type: "vocab", front: "le refrain", reading: "lerefrain", meaning: "the chorus", example: { jp: "Tout le monde connaît le refrain, même sans connaître les couplets.", en: "Everyone knows the chorus, even without knowing the verses." }, accept: ["chorus", "the chorus", "the refrain"], hint: "The repeated part of a song. Figuratively, c'est toujours le même refrain = same old story." },
      ],
    },
    {
      id: "fr-u128l3",
      unit: 128,
      lesson: 3,
      title: "Paint and stone",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about visual art: le peintre, le pinceau, la toile, le portrait, la sculpture, le sculpteur.",
      items: [
        { id: "fr-u128l3-lafresque", type: "vocab", front: "la fresque", reading: "lafresque", meaning: "the fresco", example: { jp: "Une immense fresque couvre tout le mur de l'église.", en: "A huge fresco covers the whole wall of the church." }, accept: ["fresco", "the fresco", "the mural", "the wall painting"], hint: "A painting made straight onto a wall. Figuratively, a broad portrait of an era." },
        { id: "fr-u128l3-lepinceau", type: "vocab", front: "le pinceau", reading: "lepinceau", meaning: "the brush", example: { jp: "D'un coup de pinceau, il a changé toute la scène.", en: "With one stroke of the brush, he changed the whole scene." }, drill: { jp: "Le pinceau a changé toute la scène", en: "The brush changed the whole scene" }, accept: ["brush", "the brush", "the paintbrush"], hint: "An artist's or decorator's brush. Plural: les pinceaux." },
        { id: "fr-u128l3-laquarelle", type: "vocab", front: "l'aquarelle", reading: "laquarelle", meaning: "the watercolour", example: { jp: "Elle peint surtout des aquarelles de paysages.", en: "She mainly paints watercolours of landscapes." }, accept: ["watercolour", "the watercolour", "watercolor"], hint: "Paint thinned with water, and a painting made with it. From aqua." },
        { id: "fr-u128l3-leportrait", type: "vocab", front: "le portrait", reading: "leportrait", meaning: "the portrait", example: { jp: "Son portrait est accroché dans l'entrée du musée.", en: "Her portrait hangs in the museum's entrance." }, accept: ["portrait", "the portrait"], hint: "A picture of a person; also a written description. Un autoportrait = a self-portrait." },
        { id: "fr-u128l3-lebuste", type: "vocab", front: "le buste", reading: "lebuste", meaning: "the bust", example: { jp: "Un buste en pierre du vieux roi se trouve dans l'entrée.", en: "A stone bust of the old king stands in the entrance." }, accept: ["bust", "the bust"], hint: "A sculpture of the head and shoulders. Also the chest or torso." },
        { id: "fr-u128l3-lesculpteur", type: "vocab", front: "le sculpteur", reading: "lesculpteur", meaning: "the sculptor", example: { jp: "Le sculpteur travaille la pierre depuis trente ans.", en: "The sculptor has worked with stone for thirty years." }, accept: ["sculptor", "the sculptor"], hint: "The artist. The 'p' is silent: sculpteur sounds like 'skul-teur'." },
      ],
    },
    {
      id: "fr-u128l4",
      unit: 128,
      lesson: 4,
      title: "Music and showing",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about music and display: la mélodie, le compositeur, la partition, exposer, publier, le chef-d'œuvre.",
      items: [
        { id: "fr-u128l4-lamelodie", type: "vocab", front: "la mélodie", reading: "lamelodie", meaning: "the melody", example: { jp: "La mélodie est simple, mais on ne l'oublie plus.", en: "The melody is simple, but you never forget it again." }, accept: ["melody", "the melody", "the tune"], hint: "The tune you can hum. From the same root as mélodieux." },
        { id: "fr-u128l4-lecompositeur", type: "vocab", front: "le compositeur", reading: "lecompositeur", meaning: "the composer", example: { jp: "Ce compositeur a écrit la musique de nombreux films.", en: "This composer wrote the music for many films." }, accept: ["composer", "the composer"], hint: "From composer, to compose. The one who writes the music." },
        { id: "fr-u128l4-lapartition", type: "vocab", front: "la partition", reading: "lapartition", meaning: "the score", example: { jp: "Le musicien joue sans jamais regarder la partition.", en: "The musician plays without ever looking at the score." }, accept: ["score", "the score", "the sheet music"], hint: "The written music. Not to be confused with une partie (a part)." },
        { id: "fr-u128l4-exposer", type: "vocab", front: "exposer", reading: "exposer", meaning: "to exhibit", example: { jp: "Le musée expose ses tableaux jusqu'à la fin du mois.", en: "The museum is exhibiting his paintings until the end of the month." }, accept: ["to exhibit", "to display", "to show", "to set out"], hint: "To put on show; also to set out an idea, or to expose to danger." },
        { id: "fr-u128l4-publier", type: "vocab", front: "publier", reading: "publier", meaning: "to publish", example: { jp: "Il a publié son premier roman à vingt ans.", en: "He published his first novel at twenty." }, drill: { jp: "Il va publier son premier roman", en: "He is going to publish his first novel" }, accept: ["to publish", "to bring out", "to release"], hint: "From public. To bring a text out into the world. Noun: la publication." },
        { id: "fr-u128l4-levernissage", type: "vocab", front: "le vernissage", reading: "levernissage", meaning: "the opening", example: { jp: "Le vernissage de l'exposition a lieu jeudi soir.", en: "The opening of the exhibition takes place on Thursday evening." }, accept: ["opening", "the opening", "the private view", "the preview"], hint: "The opening event of an art show. From vernir, to varnish — artists once varnished their canvases that day." },
      ],
    },
  ],
};
