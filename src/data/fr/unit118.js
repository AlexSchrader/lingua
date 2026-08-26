// FR Unit 118 — Coverage 1 (B2): verbs of analysis, cause and stance.
// A frequency/coverage unit closing the B2 thematic strands: the precise verbs
// an op-ed or essay leans on — causation (susciter, engendrer, découler de),
// support and damage (étayer, conforter, ébranler, nuire à), advocacy and
// dissent (prôner, préconiser, revendiquer, s'insurger). One register above the
// everyday verbs of A1-B1 (causer, aider, demander, refuser). Every front checked
// against the 2,168 live fr fronts + block1; examples use only in-scope vocab.
// Conventions: see fr/unit1.js.
export const FR_UNIT118 = {
  id: "fr-u118",
  lang: "fr",
  title: "Verbes de l'analyse et de la position",
  order: 118,
  stage: "b2",
  lessons: [
    {
      id: "fr-u118l1",
      unit: 118,
      lesson: 1,
      title: "Cause and effect",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how one thing causes, worsens or blocks another in careful, written French.",
      items: [
        { id: "fr-u118l1-susciter", type: "vocab", front: "susciter", reading: "susciter", meaning: "to arouse", example: { jp: "Cette décision a suscité beaucoup de colère, si bien que le gouvernement a dû s'expliquer.", en: "This decision aroused a lot of anger, so the government had to explain itself." }, accept: ["to arouse", "to provoke", "to give rise to", "to spark"], hint: "To give rise to a reaction or feeling: susciter l'intérêt, la colère, le débat. More formal than causer." },
        { id: "fr-u118l1-engendrer", type: "vocab", front: "engendrer", reading: "engendrer", meaning: "to generate", example: { jp: "La pauvreté engendre souvent la violence, mais la cause reste difficile à traiter.", en: "Poverty often generates violence, but the cause remains hard to address." }, accept: ["to generate", "to breed", "to produce", "to bring about"], hint: "To produce as a consequence — usually of something negative. Formal synonym of provoquer." },
        { id: "fr-u118l1-decoulerde", type: "vocab", front: "découler de", reading: "decoulerde", meaning: "to follow from", example: { jp: "Ce problème découle de choix anciens, dès lors il faut le comprendre avant d'agir.", en: "This problem follows from old choices, so it must be understood before acting." }, accept: ["to follow from", "to stem from", "to result from", "to arise from"], hint: "The effect side of cause: B découle de A. Formal, common in analysis." },
        { id: "fr-u118l1-saccentuer", type: "vocab", front: "s'accentuer", reading: "saccentuer", meaning: "to intensify", example: { jp: "Les tensions s'accentuent chaque jour, à tel point que personne n'ose parler.", en: "The tensions intensify every day, to the point that no one dares to speak." }, accept: ["to intensify", "to grow stronger", "to deepen", "to become more marked"], hint: "Of a trend or difference: to become more marked. From accentuer, to stress." },
        { id: "fr-u118l1-entraver", type: "vocab", front: "entraver", reading: "entraver", meaning: "to hinder", example: { jp: "Le manque d'argent entrave le projet, alors que la volonté est bien là.", en: "The lack of money hinders the project, whereas the will is certainly there." }, accept: ["to hinder", "to hamper", "to impede", "to obstruct"], hint: "To get in the way of an action or process. Stronger and more formal than gêner." },
        { id: "fr-u118l1-enrayer", type: "vocab", front: "enrayer", reading: "enrayer", meaning: "to curb", example: { jp: "Le gouvernement veut enrayer la crise, mais les mesures arrivent trop tard.", en: "The government wants to curb the crisis, but the measures come too late." }, accept: ["to curb", "to halt", "to check", "to stem"], hint: "To stop something harmful from spreading: enrayer une crise, une épidémie." },
      ],
    },
    {
      id: "fr-u118l2",
      unit: 118,
      lesson: 2,
      title: "Support and undermine",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say whether evidence strengthens or weakens a claim, and where a claim comes from.",
      items: [
        { id: "fr-u118l2-etayer", type: "vocab", front: "étayer", reading: "etayer", meaning: "to support", example: { jp: "Il faut étayer cette idée par des exemples, sans quoi personne ne sera convaincu.", en: "This idea must be supported with examples, otherwise no one will be convinced." }, accept: ["to support", "to back up", "to substantiate", "to bolster"], hint: "To support an argument with evidence: étayer une thèse. Literally, to prop up." },
        { id: "fr-u118l2-conforter", type: "vocab", front: "conforter", reading: "conforter", meaning: "to reinforce", example: { jp: "Ce résultat conforte notre position, de sorte que nous pouvons continuer.", en: "This result reinforces our position, so we can carry on." }, accept: ["to reinforce", "to strengthen", "to confirm", "to bolster"], hint: "To make an existing opinion or position stronger: conforter dans une idée." },
        { id: "fr-u118l2-ebranler", type: "vocab", front: "ébranler", reading: "ebranler", meaning: "to shake", example: { jp: "Ce scandale a ébranlé la confiance du public, alors même que rien n'est prouvé.", en: "This scandal shook the public's trust, even though nothing is proven." }, accept: ["to shake", "to weaken", "to undermine", "to rock"], hint: "To weaken something once solid — trust, a belief, a government. Figurative." },
        { id: "fr-u118l2-nuirea", type: "vocab", front: "nuire à", reading: "nuirea", meaning: "to harm", example: { jp: "Le bruit nuit à la santé, si bien que la ville a décidé d'agir.", en: "Noise harms health, so the city decided to act." }, accept: ["to harm", "to damage", "to be harmful to", "to hurt"], hint: "To do harm to: nuire à la santé, à l'image. Takes à. From this comes nuisible." },
        { id: "fr-u118l2-patirde", type: "vocab", front: "pâtir de", reading: "patirde", meaning: "to suffer from", example: { jp: "Les petites villes pâtissent de ce choix, tandis que les grandes en profitent.", en: "Small towns suffer from this choice, whereas big ones benefit from it." }, accept: ["to suffer from", "to be hurt by", "to bear the brunt of", "to lose out from"], hint: "To be harmed by something. Formal; the everyday verb is souffrir de." },
        { id: "fr-u118l2-emaner", type: "vocab", front: "émaner", reading: "emaner", meaning: "to emanate", example: { jp: "Cette décision émane de la direction, c'est pourquoi personne ne la conteste.", en: "This decision comes from management, which is why no one challenges it." }, accept: ["to emanate", "to come from", "to originate from", "to issue from"], hint: "To come from a source or authority: émaner de. Formal, often about power or documents." },
      ],
    },
    {
      id: "fr-u118l3",
      unit: 118,
      lesson: 3,
      title: "Advocate and oppose",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Argue for or against a position in the register of public debate.",
      items: [
        { id: "fr-u118l3-proner", type: "vocab", front: "prôner", reading: "proner", meaning: "to advocate", example: { jp: "Ce parti prône le changement, mais ses actes ne suivent pas toujours.", en: "This party advocates change, but its actions do not always follow." }, accept: ["to advocate", "to preach", "to champion", "to call for"], hint: "To recommend publicly and insistently: prôner une réforme. Slightly disapproving." },
        { id: "fr-u118l3-preconiser", type: "vocab", front: "préconiser", reading: "preconiser", meaning: "to recommend", example: { jp: "Les experts préconisent la prudence, dès lors que les risques sont réels.", en: "The experts recommend caution, given that the risks are real." }, accept: ["to recommend", "to advocate", "to advise", "to call for"], hint: "To recommend a course of action, in an expert or official voice. Neutral, unlike prôner." },
        { id: "fr-u118l3-revendiquer", type: "vocab", front: "revendiquer", reading: "revendiquer", meaning: "to demand", example: { jp: "Les employés revendiquent de meilleures conditions, tandis que la direction refuse d'écouter.", en: "The employees demand better conditions, whereas management refuses to listen." }, accept: ["to demand", "to claim", "to call for", "to lay claim to"], hint: "To claim as a right: revendiquer un droit, une hausse. Also to claim responsibility for an act." },
        { id: "fr-u118l3-sinsurger", type: "vocab", front: "s'insurger", reading: "sinsurger", meaning: "to protest", example: { jp: "Beaucoup s'insurgent contre cette loi, à tel point que la rue s'est remplie.", en: "Many protest against this law, to the point that the streets filled up." }, accept: ["to protest", "to rise up", "to rebel", "to speak out"], hint: "To protest indignantly against: s'insurger contre. Strong, from the root of insurrection." },
        { id: "fr-u118l3-deplorer", type: "vocab", front: "déplorer", reading: "deplorer", meaning: "to deplore", example: { jp: "Le maire déplore ce manque de moyens, sans pour autant proposer de solution.", en: "The mayor deplores this lack of resources, without however offering a solution." }, accept: ["to deplore", "to lament", "to regret", "to bemoan"], hint: "To express strong regret about something: déplorer une décision, des pertes." },
        { id: "fr-u118l3-sabstenir", type: "vocab", front: "s'abstenir", reading: "sabstenir", meaning: "to abstain", example: { jp: "Beaucoup de citoyens se sont abstenus, si bien que le résultat surprend peu.", en: "Many citizens abstained, so the result is hardly surprising." }, accept: ["to abstain", "to refrain", "to hold back", "to not vote"], hint: "To refrain from acting or voting: s'abstenir de. In an election, to not vote." },
      ],
    },
    {
      id: "fr-u118l4",
      unit: 118,
      lesson: 4,
      title: "Weigh and expect",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Weigh options, welcome or fear an outcome, and read what a sign points to.",
      items: [
        { id: "fr-u118l4-prevaloir", type: "vocab", front: "prévaloir", reading: "prevaloir", meaning: "to prevail", example: { jp: "C'est finalement la prudence qui a prévalu, alors que certains voulaient agir vite.", en: "In the end it was caution that prevailed, whereas some wanted to act fast." }, accept: ["to prevail", "to win out", "to take precedence", "to hold sway"], hint: "To win out in the end: c'est X qui l'emporte. Also se prévaloir de, to lay claim to." },
        { id: "fr-u118l4-simmiscer", type: "vocab", front: "s'immiscer", reading: "simmiscer", meaning: "to interfere", example: { jp: "L'État ne devrait pas s'immiscer dans ce choix, sauf à menacer les libertés.", en: "The state should not interfere in this choice, unless it means threatening freedoms." }, accept: ["to interfere", "to meddle", "to intrude", "to insert oneself"], hint: "To involve oneself where one is not wanted: s'immiscer dans. Formal and disapproving." },
        { id: "fr-u118l4-denoter", type: "vocab", front: "dénoter", reading: "denoter", meaning: "to indicate", example: { jp: "Cette réponse dénote une certaine gêne, quand bien même il dit le contraire.", en: "This answer indicates a certain unease, even though he says otherwise." }, accept: ["to indicate", "to denote", "to point to", "to reveal"], hint: "Of a sign or detail: to reveal or point to. Do not confuse with connoter." },
        { id: "fr-u118l4-saluer", type: "vocab", front: "saluer", reading: "saluer", meaning: "to welcome", example: { jp: "La presse salue cette avancée, tandis que l'opposition reste prudente.", en: "The press welcomes this advance, whereas the opposition stays cautious." }, accept: ["to welcome", "to hail", "to praise", "to commend"], hint: "Beyond \"to greet\": to publicly approve of. Saluer une décision, un geste." },
        { id: "fr-u118l4-redouter", type: "vocab", front: "redouter", reading: "redouter", meaning: "to dread", example: { jp: "Les habitants redoutent une nouvelle crise, si bien qu'ils gardent des réserves.", en: "The residents dread a new crisis, so they keep reserves." }, accept: ["to dread", "to fear", "to be afraid of", "to apprehend"], hint: "To fear something that may come. Stronger and more formal than craindre." },
        { id: "fr-u118l4-escompter", type: "vocab", front: "escompter", reading: "escompter", meaning: "to expect", example: { jp: "Ils escomptaient un accord rapide, mais la réalité s'est révélée plus dure.", en: "They were expecting a quick agreement, but reality turned out to be harder." }, accept: ["to expect", "to count on", "to anticipate", "to bank on"], hint: "To count on an expected outcome: escompter un succès. Formal; in finance, to discount." },
      ],
    },
  ],
};
