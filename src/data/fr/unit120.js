// FR Unit 120 — Coverage 3 (B2): abstract nouns of process, relation and degree.
// The nouns that structure educated argument: rise and fall (l'essor, la mutation,
// le tournant), scope and grounding (la portée, l'envergure, le socle), division
// and tension (le clivage, l'antagonisme, le décalage), grip and layers (la
// mainmise, la strate, le prisme). One register above the concrete nouns of A1-B1.
// All nouns carry their article for gender. Every front checked against the 2,168
// live fr fronts + block1 (l'ampleur is taught in u108 — not reused).
// Conventions: see fr/unit1.js.
export const FR_UNIT120 = {
  id: "fr-u120",
  lang: "fr",
  title: "Noms abstraits : processus et degré",
  order: 120,
  stage: "b2",
  lessons: [
    {
      id: "fr-u120l1",
      unit: 120,
      lesson: 1,
      title: "Rise and fall",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a trend rises, turns, flares up or calms down.",
      items: [
        { id: "fr-u120l1-lessor", type: "vocab", front: "l'essor", reading: "lessor", meaning: "the rise", example: { jp: "L'essor du numérique a tout changé, si bien que d'anciens métiers ont disparu.", en: "The rise of digital technology changed everything, so some old trades disappeared." }, accept: ["the rise", "the boom", "the growth", "the surge"], hint: "Rapid growth or take-off: l'essor d'un secteur. prendre son essor, to take off. Masculine." },
        { id: "fr-u120l1-lamutation", type: "vocab", front: "la mutation", reading: "lamutation", meaning: "the transformation", example: { jp: "Le secteur connaît une mutation profonde, dès lors les règles d'hier ne valent plus.", en: "The sector is undergoing a deep transformation, so yesterday's rules no longer apply." }, accept: ["the transformation", "the shift", "the change", "the mutation"], hint: "A deep, structural change: une mutation économique. Stronger than un changement." },
        { id: "fr-u120l1-letournant", type: "vocab", front: "le tournant", reading: "letournant", meaning: "the turning point", example: { jp: "Cette élection marque un tournant, alors que personne ne l'avait prévu.", en: "This election marks a turning point, whereas no one had foreseen it." }, accept: ["the turning point", "the watershed", "the turn"], hint: "A decisive moment of change: un tournant historique. From tourner." },
        { id: "fr-u120l1-larecrudescence", type: "vocab", front: "la recrudescence", reading: "larecrudescence", meaning: "the resurgence", example: { jp: "On observe une recrudescence des vols, si bien que la police renforce ses patrouilles.", en: "A resurgence of thefts is seen, so the police are stepping up their patrols." }, accept: ["the resurgence", "the upsurge", "the renewed increase", "the fresh outbreak"], hint: "A fresh increase in something bad, after a lull: une recrudescence de violence." },
        { id: "fr-u120l1-laccalmie", type: "vocab", front: "l'accalmie", reading: "laccalmie", meaning: "the lull", example: { jp: "Après des mois de tension, cette accalmie fait du bien, quand bien même elle est fragile.", en: "After months of tension, this lull is welcome, even though it is fragile." }, accept: ["the lull", "the respite", "the calm spell", "the break"], hint: "A calm period between two storms: une accalmie sur les marchés. From calme. Feminine." },
        { id: "fr-u120l1-linflexion", type: "vocab", front: "l'inflexion", reading: "linflexion", meaning: "the shift", example: { jp: "On note une légère inflexion du discours, sans pour autant un vrai changement de cap.", en: "A slight shift in the rhetoric is noticeable, without however a real change of course." }, accept: ["the shift", "the change of direction", "the inflection"], hint: "A slight change of direction in a policy or curve: une inflexion de la politique. Feminine." },
      ],
    },
    {
      id: "fr-u120l2",
      unit: 120,
      lesson: 2,
      title: "Scope and grounding",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about the reach of an idea and what it rests on.",
      items: [
        { id: "fr-u120l2-laportee", type: "vocab", front: "la portée", reading: "laportee", meaning: "the scope", example: { jp: "On mesure mal la portée de cette décision, dès lors la prudence s'impose.", en: "The scope of this decision is hard to gauge, so caution is called for." }, accept: ["the scope", "the reach", "the significance", "the impact"], hint: "How far the effect of something reaches: la portée d'une réforme. à la portée de, within reach of." },
        { id: "fr-u120l2-lenvergure", type: "vocab", front: "l'envergure", reading: "lenvergure", meaning: "the scale", example: { jp: "C'est un projet d'une grande envergure, si bien qu'il faudra des années pour le finir.", en: "It's a project of great scale, so it will take years to finish." }, accept: ["the scale", "the scope", "the stature", "the magnitude"], hint: "The scale or calibre of a project or person: de grande envergure. Feminine." },
        { id: "fr-u120l2-lesocle", type: "vocab", front: "le socle", reading: "lesocle", meaning: "the foundation", example: { jp: "Ces valeurs forment le socle du projet, sans quoi tout le reste s'effondre.", en: "These values form the foundation of the project, without which everything else collapses." }, accept: ["the foundation", "the base", "the bedrock", "the core"], hint: "The solid base an idea rests on: un socle commun de valeurs. Literally, a plinth." },
        { id: "fr-u120l2-leressort", type: "vocab", front: "le ressort", reading: "leressort", meaning: "the driving force", example: { jp: "La peur est le vrai ressort de son action, quand bien même il parle de courage.", en: "Fear is the real driving force of his action, even though he speaks of courage." }, accept: ["the driving force", "the motive", "the mainspring", "the spirit"], hint: "The hidden motive that makes someone act: le ressort d'une histoire. Also: within one's remit, du ressort de." },
        { id: "fr-u120l2-lateneur", type: "vocab", front: "la teneur", reading: "lateneur", meaning: "the content", example: { jp: "On ignore la teneur exacte de l'accord, dès lors les rumeurs vont bon train.", en: "The exact content of the agreement is unknown, so rumours are rife." }, accept: ["the content", "the substance", "the gist", "the tenor"], hint: "The substance or wording of a text or talk: la teneur des propos. Feminine." },
        { id: "fr-u120l2-lebienfonde", type: "vocab", front: "le bien-fondé", reading: "lebienfonde", meaning: "the validity", example: { jp: "Beaucoup doutent du bien-fondé de cette mesure, alors même qu'elle part d'une bonne intention.", en: "Many doubt the validity of this measure, even though it comes from a good intention." }, accept: ["the validity", "the merits", "the soundness", "the legitimacy"], hint: "Whether something is justified and sound: contester le bien-fondé de. Masculine, invariable." },
      ],
    },
    {
      id: "fr-u120l3",
      unit: 120,
      lesson: 3,
      title: "Division and gap",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a divide, a clash, a mismatch or a pitfall in analytical French.",
      items: [
        { id: "fr-u120l3-leclivage", type: "vocab", front: "le clivage", reading: "leclivage", meaning: "the divide", example: { jp: "Ce débat révèle un clivage profond, de sorte qu'aucun compromis ne semble possible.", en: "This debate reveals a deep divide, so no compromise seems possible." }, accept: ["the divide", "the split", "the cleavage", "the rift"], hint: "A structural split in a society or group: un clivage politique. From cliver, to split." },
        { id: "fr-u120l3-lantagonisme", type: "vocab", front: "l'antagonisme", reading: "lantagonisme", meaning: "the antagonism", example: { jp: "L'antagonisme entre les deux camps est ancien, quand bien même leurs intérêts se rejoignent.", en: "The antagonism between the two camps is old, even though their interests overlap." }, accept: ["the antagonism", "the hostility", "the rivalry", "the opposition"], hint: "Deep-seated opposition between two sides. Masculine, despite the -isme." },
        { id: "fr-u120l3-laconvergence", type: "vocab", front: "la convergence", reading: "laconvergence", meaning: "the convergence", example: { jp: "On note une convergence de vues, si bien qu'un accord devient enfin possible.", en: "A convergence of views is noticeable, so an agreement finally becomes possible." }, accept: ["the convergence", "the coming together", "the overlap"], hint: "When separate things move toward the same point: une convergence d'intérêts. Opposite of divergence." },
        { id: "fr-u120l3-ledecalage", type: "vocab", front: "le décalage", reading: "ledecalage", meaning: "the gap", example: { jp: "Il y a un décalage entre les promesses et les actes, dès lors la confiance s'érode.", en: "There is a gap between the promises and the actions, so trust erodes." }, accept: ["the gap", "the mismatch", "the discrepancy", "the disconnect"], hint: "A gap or mismatch between two things: un décalage entre le discours et la réalité. Also jet lag." },
        { id: "fr-u120l3-ladisparite", type: "vocab", front: "la disparité", reading: "ladisparite", meaning: "the disparity", example: { jp: "Les disparités entre régions se creusent, alors que l'on promettait le contraire.", en: "The disparities between regions are widening, whereas the opposite was promised." }, accept: ["the disparity", "the inequality", "the gap", "the imbalance"], hint: "A marked, often unfair difference: les disparités de revenus. Opposite of parité." },
        { id: "fr-u120l3-lecueil", type: "vocab", front: "l'écueil", reading: "lecueil", meaning: "the pitfall", example: { jp: "Le principal écueil serait d'aller trop vite, sauf à tout devoir recommencer.", en: "The main pitfall would be to go too fast, at the risk of having to start all over." }, accept: ["the pitfall", "the obstacle", "the stumbling block", "the snag"], hint: "A hidden danger that can wreck a plan: éviter cet écueil. Literally, a reef. Masculine." },
      ],
    },
    {
      id: "fr-u120l4",
      unit: 120,
      lesson: 4,
      title: "Grip and layers",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about control, currents and layers — the framing tools of analysis.",
      items: [
        { id: "fr-u120l4-lamainmise", type: "vocab", front: "la mainmise", reading: "lamainmise", meaning: "the grip", example: { jp: "On dénonce la mainmise de l'État sur les médias, alors que la loi promet l'indépendance.", en: "The state's grip on the media is denounced, whereas the law promises independence." }, accept: ["the grip", "the control", "the stranglehold", "the hold"], hint: "Total control over something, usually unwelcome: la mainmise sur. Feminine." },
        { id: "fr-u120l4-lamouvance", type: "vocab", front: "la mouvance", reading: "lamouvance", meaning: "the sphere", example: { jp: "Ce journal appartient à la mouvance écologiste, dès lors sa ligne surprend peu.", en: "This paper belongs to the ecologist sphere, so its stance is hardly surprising." }, accept: ["the sphere", "the movement", "the orbit", "the current"], hint: "A loose ideological current or orbit: la mouvance politique. From mouvoir, to move." },
        { id: "fr-u120l4-lastrate", type: "vocab", front: "la strate", reading: "lastrate", meaning: "the layer", example: { jp: "Chaque strate de la société vit la crise autrement, si bien qu'un seul discours ne suffit pas.", en: "Each layer of society experiences the crisis differently, so a single message is not enough." }, accept: ["the layer", "the stratum", "the level", "the tier"], hint: "A layer, of society or administration: les strates du pouvoir. Feminine." },
        { id: "fr-u120l4-leprisme", type: "vocab", front: "le prisme", reading: "leprisme", meaning: "the lens", example: { jp: "Il lit tout à travers le prisme de l'économie, quand bien même d'autres causes existent.", en: "He reads everything through the lens of economics, even though other causes exist." }, accept: ["the lens", "the prism", "the filter", "the perspective"], hint: "A biasing perspective through which one sees: à travers le prisme de. Masculine." },
        { id: "fr-u120l4-lecorollaire", type: "vocab", front: "le corollaire", reading: "lecorollaire", meaning: "the corollary", example: { jp: "La liberté a pour corollaire la responsabilité, dès lors l'une ne va pas sans l'autre.", en: "Freedom has responsibility as its corollary, so one does not go without the other." }, accept: ["the corollary", "the consequence", "the natural result"], hint: "A direct consequence of something else: le corollaire de. Masculine, from logic and maths." },
        { id: "fr-u120l4-lalea", type: "vocab", front: "l'aléa", reading: "lalea", meaning: "the hazard", example: { jp: "Il faut prévoir les aléas du marché, sans quoi le budget ne tiendra pas.", en: "The hazards of the market must be anticipated, otherwise the budget will not hold." }, accept: ["the hazard", "the uncertainty", "the contingency", "the vagary"], hint: "An unpredictable risk or chance event: les aléas de la vie. Masculine; often plural." },
      ],
    },
  ],
};
