// FR Unit 71 — Media and entertainment (slot: media) — B1
// First unit of block 2. B1 changes three things about how this is authored
// (BUILD-BRIEF-language-blueprint.md §"B1 and B2"): topics are abstract, the
// canDo names a discourse move rather than an errand, and — the one that shows
// on every card — EXAMPLES ARE TWO CLAUSES, joined by the thing being taught.
// The sentence is the lesson, not decoration around a word.
//
// SCOPE BOUNDARY: block 1's Unit 62 is "news and society", so this unit takes
// media as a CRAFT and an INDUSTRY — how a story is made, broadcast, and judged
// — and leaves the news-as-current-affairs reading to 62. A2 already owns the
// everyday nouns (le journal, les informations, la nouvelle, l'article,
// l'événement u39; la radio, la vidéo, la photo u40; le film, la série,
// l'émission, l'acteur u42), and every front here was checked against the live
// 1,287 before writing. Conventions: see fr/unit1.js.
export const FR_UNIT71 = {
  id: "fr-u71",
  lang: "fr",
  title: "Les médias",
  order: 71,
  stage: "b1",
  lessons: [
    {
      id: "fr-u71l1",
      unit: 71,
      lesson: 1,
      title: "The press",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about where a story comes from: la presse, un reportage, une enquête, une source.",
      items: [
        { id: "fr-u71l1-lapresse", type: "vocab", front: "la presse", reading: "lapresse", meaning: "the press", example: { jp: "La presse française est libre, mais elle n'est pas toujours d'accord avec le gouvernement.", en: "The French press is free, but it doesn't always agree with the government." }, accept: ["press", "the media", "newspapers"], hint: "The institution, not the paper — le journal is the object you hold, la presse is the whole trade." },
        { id: "fr-u71l1-laune", type: "vocab", front: "la une", reading: "laune", meaning: "the front page", example: { jp: "Cette histoire est à la une de tous les journaux depuis hier.", en: "That story has been on the front page of every newspaper since yesterday." }, accept: ["front page", "the headline", "page one"], hint: "Literally \"the one\" — page one. être à la une = to be the lead story." },
        { id: "fr-u71l1-lereportage", type: "vocab", front: "le reportage", reading: "lereportage", meaning: "the report", example: { jp: "J'ai regardé un reportage sur la vie à la campagne, et c'était vraiment intéressant.", en: "I watched a report on country life, and it was really interesting." }, accept: ["report", "feature", "coverage"], hint: "A journalist's piece from the field — not un rapport, which is a written business report." },
        { id: "fr-u71l1-lenquete", type: "vocab", front: "l'enquête", reading: "lenquete", meaning: "the investigation", example: { jp: "L'enquête a duré deux ans, si bien que tout le monde avait oublié l'affaire.", en: "The investigation lasted two years, so everyone had forgotten the case." }, accept: ["investigation", "inquiry", "survey"], hint: "Both a police investigation and a journalistic one — and also a survey." },
        { id: "fr-u71l1-lasource", type: "vocab", front: "la source", reading: "lasource", meaning: "the source", example: { jp: "Le journaliste n'a pas donné sa source, parce qu'il voulait la protéger.", en: "The journalist didn't give his source, because he wanted to protect them." }, accept: ["source", "the origin", "spring"], hint: "Also a spring of water — the metaphor is the same in both languages." },
        { id: "fr-u71l1-leredacteur", type: "vocab", front: "le rédacteur", reading: "leredacteur", meaning: "the editor", example: { jp: "Le rédacteur a lu mon article, puis il m'a demandé de le raccourcir.", en: "The editor read my article, then asked me to shorten it." }, accept: ["editor", "the writer", "sub-editor"], hint: "La rédactrice for a woman. The boss of them all is le rédacteur en chef." },
      ],
    },
    {
      id: "fr-u71l2",
      unit: 71,
      lesson: 2,
      title: "Broadcast",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how something reaches an audience: la chaîne diffuse en direct, les spectateurs, un abonnement.",
      items: [
        { id: "fr-u71l2-lachaine", type: "vocab", front: "la chaîne", reading: "lachaine", meaning: "the channel", example: { jp: "Cette chaîne passe surtout des films, tandis que l'autre passe surtout du sport.", en: "This channel mostly shows films, whereas the other mostly shows sport." }, accept: ["channel", "the network", "chain"], hint: "Also a chain (of shops, or the metal kind) — une chaîne de magasins." },
        { id: "fr-u71l2-diffuser", type: "vocab", front: "diffuser", reading: "diffuser", meaning: "to broadcast", example: { jp: "Ils vont diffuser le concert samedi soir, pour que tout le monde puisse le voir.", en: "They're going to broadcast the concert on Saturday evening, so that everyone can see it." }, accept: ["to air", "to show", "to spread"], hint: "Used for radio, TV and anything spread widely — diffuser une information." },
        { id: "fr-u71l2-ledirect", type: "vocab", front: "le direct", reading: "ledirect", meaning: "live broadcast", example: { jp: "L'émission est en direct, donc il n'est pas possible de corriger une erreur.", en: "The programme is live, so it isn't possible to correct a mistake." }, accept: ["live", "live TV", "the live show"], hint: "en direct = live. The opposite is en différé, recorded earlier." },
        { id: "fr-u71l2-lespectateur", type: "vocab", front: "le spectateur", reading: "lespectateur", meaning: "the viewer", example: { jp: "Les spectateurs ont aimé la fin, même si les critiques l'ont trouvée trop simple.", en: "Viewers liked the ending, although the critics found it too simple." }, accept: ["viewer", "the spectator", "audience member"] },
        { id: "fr-u71l2-lauditeur", type: "vocab", front: "l'auditeur", reading: "lauditeur", meaning: "the listener", example: { jp: "Les auditeurs peuvent téléphoner pendant l'émission et poser leurs questions.", en: "Listeners can phone in during the programme and ask their questions." }, accept: ["listener", "the radio listener"], hint: "The radio twin of le spectateur — one watches, the other listens." },
        { id: "fr-u71l2-labonnement", type: "vocab", front: "l'abonnement", reading: "labonnement", meaning: "the subscription", example: { jp: "J'ai pris un abonnement au journal, parce que je le lisais tous les jours.", en: "I took out a subscription to the newspaper, because I was reading it every day." }, accept: ["subscription", "membership", "season ticket"], hint: "Also a season ticket for transport or a gym." },
      ],
    },
    {
      id: "fr-u71l3",
      unit: 71,
      lesson: 3,
      title: "Behind a story",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how a film or novel is made: le scénario, le réalisateur, l'intrigue, le tournage.",
      items: [
        { id: "fr-u71l3-lescenario", type: "vocab", front: "le scénario", reading: "lescenario", meaning: "the screenplay", example: { jp: "Le scénario est excellent, mais le film n'a pas eu de succès.", en: "The screenplay is excellent, but the film wasn't a success." }, accept: ["script", "screenplay", "scenario"], hint: "Also a scenario in the everyday sense: dans le pire des scénarios." },
        { id: "fr-u71l3-lerealisateur", type: "vocab", front: "le réalisateur", reading: "lerealisateur", meaning: "the director", example: { jp: "Ce réalisateur travaille lentement, si bien que ses films sortent rarement.", en: "This director works slowly, with the result that his films rarely come out." }, accept: ["director", "the film-maker", "filmmaker"], hint: "Not le directeur, who runs a company. A film has un réalisateur." },
        { id: "fr-u71l3-lintrigue", type: "vocab", front: "l'intrigue", reading: "lintrigue", meaning: "the plot", example: { jp: "L'intrigue est compliquée au début, puis tout devient clair à la fin.", en: "The plot is complicated at the start, then everything becomes clear at the end." }, accept: ["plot", "the storyline", "intrigue"] },
        { id: "fr-u71l3-lecrivain", type: "vocab", front: "l'écrivain", reading: "lecrivain", meaning: "the writer", example: { jp: "Cet écrivain a publié dix livres, et pourtant peu de gens connaissent son nom.", en: "This writer has published ten books, and yet few people know his name." }, accept: ["writer", "the author", "novelist"], hint: "Une écrivaine is now standard for a woman, though you'll still hear une femme écrivain." },
        { id: "fr-u71l3-leromancier", type: "vocab", front: "le romancier", reading: "leromancier", meaning: "the novelist", example: { jp: "Le romancier a mis cinq ans à écrire ce livre, parce qu'il voulait tout vérifier.", en: "The novelist took five years to write this book, because he wanted to check everything." }, accept: ["novelist", "the fiction writer"], hint: "From le roman (Unit 42) — the writer of novels specifically." },
        { id: "fr-u71l3-letournage", type: "vocab", front: "le tournage", reading: "letournage", meaning: "the filming", example: { jp: "Le tournage a duré six mois, tandis que le film dure deux heures.", en: "The filming lasted six months, whereas the film lasts two hours." }, accept: ["filming", "the shoot", "shooting"] },
      ],
    },
    {
      id: "fr-u71l4",
      unit: 71,
      lesson: 4,
      title: "Judging it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "React to what you've seen or read: un succès, un échec, la critique, un sondage.",
      items: [
        { id: "fr-u71l4-lacritique", type: "vocab", front: "la critique", reading: "lacritique", meaning: "the review", example: { jp: "J'ai lu la critique avant d'aller au théâtre, ce qui était peut-être une erreur.", en: "I read the review before going to the theatre, which was perhaps a mistake." }, accept: ["review", "criticism", "the critic"], hint: "La critique is the review; le critique (masculine) is the person who writes it." },
        { id: "fr-u71l4-lesucces", type: "vocab", front: "le succès", reading: "lesucces", meaning: "the success", example: { jp: "Ce livre a eu un grand succès, même si personne ne l'attendait.", en: "This book was a great success, although nobody was expecting it." }, accept: ["success", "the hit"], hint: "avoir du succès = to be a hit. The final s is silent." },
        { id: "fr-u71l4-lechec", type: "vocab", front: "l'échec", reading: "lechec", meaning: "the failure", example: { jp: "Le film a été un échec au cinéma, mais il a beaucoup de succès à la télévision.", en: "The film was a failure in cinemas, but it's very successful on television." }, accept: ["failure", "the flop", "setback"], hint: "Les échecs, plural, is the game of chess — same word, different life." },
        { id: "fr-u71l4-lapublicite", type: "vocab", front: "la publicité", reading: "lapublicite", meaning: "the advert", example: { jp: "Il y a trop de publicité pendant l'émission, si bien que je change de chaîne.", en: "There are too many adverts during the programme, so I change channel." }, accept: ["advertising", "the ad", "commercial"], hint: "Everyone shortens it to la pub." },
        { id: "fr-u71l4-lesondage", type: "vocab", front: "le sondage", reading: "lesondage", meaning: "the poll", example: { jp: "Selon ce sondage, la moitié des Français ne regardent plus la télévision.", en: "According to this poll, half of French people no longer watch television." }, accept: ["poll", "survey", "the opinion poll"] },
        { id: "fr-u71l4-ledivertissement", type: "vocab", front: "le divertissement", reading: "ledivertissement", meaning: "entertainment", example: { jp: "Pour lui, le cinéma est un divertissement ; pour moi, c'est un art.", en: "For him, cinema is entertainment; for me, it's an art." }, accept: ["entertainment", "amusement", "the entertainment"] },
      ],
    },
  ],
};
