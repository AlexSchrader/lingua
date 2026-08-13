// FR Unit 42 — Culture and leisure (slot: culture) — A2
// SCOPE BOUNDARY (deliberate): block 1's Unit 28 owns "activities and routine",
// i.e. what you DO with your free time. This unit takes the other reading of the
// slot — the cultural objects themselves: the places you go, the arts, books,
// and what's on a screen. Two near-collisions are handled by hint rather than
// avoidance, because both pairs are genuinely confusable and worth teaching:
// le tableau vs la table (Unit 17), and le personnage vs le caractère (Unit 38).
// Conventions: see fr/unit1.js. Examples use A1 vocab plus Units 38–41.
export const FR_UNIT42 = {
  id: "fr-u42",
  lang: "fr",
  title: "La culture et les loisirs",
  order: 42,
  stage: "a2",
  lessons: [
    {
      id: "fr-u42l1",
      unit: 42,
      lesson: 1,
      title: "Going out",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Plan an evening out and say how it went: le théâtre, un concert, un spectacle, une exposition, un festival.",
      items: [
        { id: "fr-u42l1-letheatre", type: "vocab", front: "le théâtre", reading: "letheatre", meaning: "the theatre", example: { jp: "Nous allons au théâtre ce soir.", en: "We're going to the theatre this evening." }, accept: ["theater", "the theatre", "playhouse"] },
        { id: "fr-u42l1-leconcert", type: "vocab", front: "le concert", reading: "leconcert", meaning: "the concert", example: { jp: "Le concert commence à neuf heures.", en: "The concert starts at nine." }, accept: ["concert", "gig", "the concert"] },
        { id: "fr-u42l1-lespectacle", type: "vocab", front: "le spectacle", reading: "lespectacle", meaning: "the show", example: { jp: "Le spectacle est très beau.", en: "The show is beautiful." }, accept: ["show", "performance", "the show"] },
        { id: "fr-u42l1-lexposition", type: "vocab", front: "l'exposition", reading: "lexposition", meaning: "the exhibition", example: { jp: "Il y a une exposition en ville.", en: "There's an exhibition in town." }, accept: ["exhibition", "exhibit", "show", "display"], hint: "Everyone says une expo." },
        { id: "fr-u42l1-lefestival", type: "vocab", front: "le festival", reading: "lefestival", meaning: "the festival", example: { jp: "Le festival commence en juillet.", en: "The festival starts in July." }, accept: ["festival", "the festival"] },
        { id: "fr-u42l1-lepublic", type: "vocab", front: "le public", reading: "lepublic", meaning: "the audience", example: { jp: "Le public écoute le concert.", en: "The audience listens to the concert." }, accept: ["audience", "the public", "crowd"], hint: "The people watching — at a concert, a play, a match. The adjective public exists too, but this is the noun." },
      ],
    },
    {
      id: "fr-u42l2",
      unit: 42,
      lesson: 2,
      title: "The arts",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about art and performance: l'art, un tableau, un artiste, la scène, la danse.",
      items: [
        { id: "fr-u42l2-lart", type: "vocab", front: "l'art", reading: "lart", meaning: "art", example: { jp: "J'aime l'art français.", en: "I like French art." }, accept: ["the art", "arts"] },
        { id: "fr-u42l2-letableau", type: "vocab", front: "le tableau", reading: "letableau", meaning: "the painting", example: { jp: "Ce tableau est très vieux.", en: "This painting is very old." }, accept: ["painting", "picture", "board", "the painting"], hint: "Careful: un tableau is a painting — and also the board a teacher writes on. Nothing to do with la table." },
        { id: "fr-u42l2-lartiste", type: "vocab", front: "l'artiste", reading: "lartiste", meaning: "the artist", example: { jp: "Cet artiste habite à Paris.", en: "This artist lives in Paris." }, accept: ["artist", "performer", "the artist"], hint: "One form for both genders: un artiste, une artiste." },
        { id: "fr-u42l2-lascene", type: "vocab", front: "la scène", reading: "lascene", meaning: "the stage", example: { jp: "L'artiste est sur la scène.", en: "The artist is on stage." }, accept: ["stage", "scene", "the scene"], hint: "Both the stage you stand on and a scene in a film." },
        { id: "fr-u42l2-ladanse", type: "vocab", front: "la danse", reading: "ladanse", meaning: "dance", example: { jp: "La danse est un art.", en: "Dance is an art." }, accept: ["dancing", "the dance"] },
        { id: "fr-u42l2-ledessin", type: "vocab", front: "le dessin", reading: "ledessin", meaning: "the drawing", example: { jp: "C'est un beau dessin.", en: "That's a lovely drawing." }, accept: ["drawing", "design", "sketch", "the drawing"] },
      ],
    },
    {
      id: "fr-u42l3",
      unit: 42,
      lesson: 3,
      title: "Books and stories",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about what you're reading: un roman, une histoire, le personnage, l'auteur, la bibliothèque.",
      items: [
        { id: "fr-u42l3-leroman", type: "vocab", front: "le roman", reading: "leroman", meaning: "the novel", example: { jp: "Je lis un roman français.", en: "I'm reading a French novel." }, accept: ["novel", "book", "the novel"], hint: "False friend: un roman is a novel of any kind, not a romance." },
        { id: "fr-u42l3-lhistoire", type: "vocab", front: "l'histoire", reading: "lhistoire", meaning: "the story", example: { jp: "C'est une belle histoire.", en: "It's a lovely story." }, accept: ["story", "history", "the history", "tale"], hint: "Both jobs in one word: une histoire is a story, l'histoire is history." },
        { id: "fr-u42l3-lepersonnage", type: "vocab", front: "le personnage", reading: "lepersonnage", meaning: "the character (in a story)", example: { jp: "Ce personnage est très drôle.", en: "This character is very funny." }, accept: ["character", "figure", "the character"], hint: "A character in a book or film. What a real person is LIKE is le caractère (Unit 38)." },
        { id: "fr-u42l3-lauteur", type: "vocab", front: "l'auteur", reading: "lauteur", meaning: "the author", example: { jp: "Qui est l'auteur de ce roman ?", en: "Who is the author of this novel?" }, accept: ["author", "writer", "the writer"] },
        { id: "fr-u42l3-lapage", type: "vocab", front: "la page", reading: "lapage", meaning: "the page", example: { jp: "Je lis dix pages tous les jours.", en: "I read ten pages every day." }, accept: ["page", "the page"] },
        { id: "fr-u42l3-labibliotheque", type: "vocab", front: "la bibliothèque", reading: "labibliotheque", meaning: "the library", example: { jp: "Je travaille à la bibliothèque.", en: "I work at the library." }, accept: ["library", "bookcase", "the library"], hint: "False friend: la bibliothèque is a library. A bookshop is une librairie." },
      ],
    },
    {
      id: "fr-u42l4",
      unit: 42,
      lesson: 4,
      title: "Music and screens",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you listen to and watch: une chanson, un chanteur, un acteur, une série, une émission.",
      items: [
        { id: "fr-u42l4-lachanson", type: "vocab", front: "la chanson", reading: "lachanson", meaning: "the song", example: { jp: "Cette chanson est très belle.", en: "This song is beautiful." }, accept: ["song", "the song"] },
        { id: "fr-u42l4-lechanteur", type: "vocab", front: "le chanteur", reading: "lechanteur", meaning: "the singer", example: { jp: "Ce chanteur est français.", en: "This singer is French." }, accept: ["singer", "the singer", "vocalist"], hint: "La chanteuse for a woman — the same -eur/-euse swap as everywhere else." },
        { id: "fr-u42l4-lacteur", type: "vocab", front: "l'acteur", reading: "lacteur", meaning: "the actor", example: { jp: "J'aime beaucoup cet acteur.", en: "I really like this actor." }, accept: ["actor", "the actor"], hint: "L'actrice for a woman." },
        { id: "fr-u42l4-laserie", type: "vocab", front: "la série", reading: "laserie", meaning: "the series", example: { jp: "Je regarde une série le soir.", en: "I watch a series in the evening." }, accept: ["series", "show", "tv series", "the series"] },
        { id: "fr-u42l4-lemission", type: "vocab", front: "l'émission", reading: "lemission", meaning: "the programme", example: { jp: "Cette émission est à huit heures.", en: "That programme is on at eight." }, accept: ["program", "programme", "show", "broadcast"] },
        { id: "fr-u42l4-legroupe", type: "vocab", front: "le groupe", reading: "legroupe", meaning: "the group", example: { jp: "Mon frère écoute ce groupe.", en: "My brother listens to this band." }, accept: ["group", "band", "the group"], hint: "Also a band: un groupe de musique." },
      ],
    },
  ],
};
