// FR Unit 125 — Renforcer et transformer ("Strengthening and changing") — B2
// Strand D, coverage unit 8 of 13 (block 3, units 121-133). Generic slot
// "Vocabulary 8 (B2)"; given a real theme — DEVIATION FROM THE SLOT NAME ONLY.
//
// ONE LEVEL ABOVE THE SLOT: B1 unit 59 ("Cause and consequence") teaches the
// NOUNS and connectors of causation (le facteur, causer, provoquer, entraîner,
// la conséquence, par conséquent) plus transformer, évoluer, aggraver, réduire,
// diminuer. This unit authors the VERBS OF DEGREE a B2 speaker uses to say how
// much a force acts — renforcer, atténuer, susciter, ébranler — a complementary
// set, not a repeat. Every front checked against the 2,168 fronts and the sibling
// B2 blocks. Conventions: see fr/unit1.js.
export const FR_UNIT125 = {
  id: "fr-u125",
  lang: "fr",
  title: "Renforcer et transformer",
  order: 125,
  stage: "b2",
  lessons: [
    {
      id: "fr-u125l1",
      unit: 125,
      lesson: 1,
      title: "Strengthening",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say something grows stronger: renforcer, consolider, accroître, intensifier, décupler, stimuler.",
      items: [
        { id: "fr-u125l1-renforcer", type: "vocab", front: "renforcer", reading: "renforcer", meaning: "to strengthen", example: { jp: "Ces résultats renforcent l'idée qu'il faut agir vite.", en: "These results strengthen the idea that we must act quickly." }, accept: ["to strengthen", "to reinforce", "to bolster"], hint: "From fort. To make stronger — a wall, a team, or an argument." },
        { id: "fr-u125l1-consolider", type: "vocab", front: "consolider", reading: "consolider", meaning: "to consolidate", example: { jp: "L'entreprise cherche à consolider sa place sur le marché.", en: "The company is seeking to consolidate its place in the market." }, drill: { jp: "L'entreprise veut consolider sa place", en: "The company wants to consolidate its position" }, accept: ["to consolidate", "to strengthen", "to shore up"], hint: "From solide. To make firm and lasting." },
        { id: "fr-u125l1-accroitre", type: "vocab", front: "accroître", reading: "accroitre", meaning: "to increase", example: { jp: "La publicité a accru l'intérêt du public pour ce produit.", en: "The advertising increased the public's interest in this product." }, accept: ["to increase", "to boost", "to raise", "to grow"], hint: "A formal 'to increase'. From croître, to grow. Past participle: accru." },
        { id: "fr-u125l1-intensifier", type: "vocab", front: "intensifier", reading: "intensifier", meaning: "to intensify", example: { jp: "La police a intensifié ses contrôles après cette affaire.", en: "The police intensified their checks after this case." }, accept: ["to intensify", "to step up", "to increase"], hint: "From intense. To make more intense or more frequent." },
        { id: "fr-u125l1-decupler", type: "vocab", front: "décupler", reading: "decupler", meaning: "to boost tenfold", example: { jp: "La colère a décuplé ses forces sur le moment.", en: "Anger boosted his strength tenfold in the moment." }, accept: ["to boost tenfold", "to multiply", "to increase greatly"], hint: "From dix, ten. Literally to multiply by ten — figuratively, hugely." },
        { id: "fr-u125l1-stimuler", type: "vocab", front: "stimuler", reading: "stimuler", meaning: "to stimulate", example: { jp: "Un bon professeur sait stimuler la curiosité de ses élèves.", en: "A good teacher knows how to stimulate his students' curiosity." }, accept: ["to stimulate", "to encourage", "to spur"], hint: "To spur into action or growth. From stimulus." },
      ],
    },
    {
      id: "fr-u125l2",
      unit: 125,
      lesson: 2,
      title: "Weakening",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say something loses force: affaiblir, atténuer, s'estomper, ébranler, restreindre, freiner.",
      items: [
        { id: "fr-u125l2-affaiblir", type: "vocab", front: "affaiblir", reading: "affaiblir", meaning: "to weaken", example: { jp: "La maladie l'a beaucoup affaibli en quelques mois.", en: "The illness weakened him a great deal in a few months." }, drill: { jp: "La maladie peut affaiblir le corps", en: "Illness can weaken the body" }, accept: ["to weaken", "to sap", "to undermine"], hint: "From faible, weak. The opposite of renforcer." },
        { id: "fr-u125l2-amoindrir", type: "vocab", front: "amoindrir", reading: "amoindrir", meaning: "to diminish", example: { jp: "Rien ne peut amoindrir le mérite de ce qu'elle a accompli.", en: "Nothing can diminish the merit of what she has achieved." }, accept: ["to diminish", "to lessen", "to reduce", "to weaken"], hint: "From moindre, lesser. To make smaller in importance or force." },
        { id: "fr-u125l2-sestomper", type: "vocab", front: "s'estomper", reading: "sestomper", meaning: "to fade", example: { jp: "Avec le temps, ces mauvais souvenirs se sont estompés.", en: "With time, those bad memories faded." }, accept: ["to fade", "to blur", "to dim", "to die down"], hint: "To grow blurry and faint — a memory, an outline, a sound." },
        { id: "fr-u125l2-fragiliser", type: "vocab", front: "fragiliser", reading: "fragiliser", meaning: "to undermine", example: { jp: "Ce scandale a fragilisé la confiance du public.", en: "This scandal weakened the public's confidence." }, accept: ["to weaken", "to undermine", "to make fragile", "to destabilise"], hint: "From fragile. To make something more likely to break or fail." },
        { id: "fr-u125l2-restreindre", type: "vocab", front: "restreindre", reading: "restreindre", meaning: "to restrict", example: { jp: "Il a dû restreindre ses dépenses après avoir perdu son travail.", en: "He had to restrict his spending after losing his job." }, drill: { jp: "Il doit restreindre ses dépenses", en: "He must restrict his spending" }, accept: ["to restrict", "to limit", "to curb", "to cut back"], hint: "To narrow or limit. Past participle: restreint. Noun: la restriction." },
        { id: "fr-u125l2-freiner", type: "vocab", front: "freiner", reading: "freiner", meaning: "to slow down", example: { jp: "La crise a freiné la croissance de tout le secteur.", en: "The crisis slowed the growth of the whole sector." }, accept: ["to slow down", "to curb", "to hold back", "to brake"], hint: "From le frein, the brake. To hold back or slow the pace." },
      ],
    },
    {
      id: "fr-u125l3",
      unit: 125,
      lesson: 3,
      title: "Setting off and feeding",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say something triggers or fuels another: susciter, engendrer, précipiter, alimenter, aviver, amplifier.",
      items: [
        { id: "fr-u125l3-eveiller", type: "vocab", front: "éveiller", reading: "eveiller", meaning: "to arouse", example: { jp: "Cette annonce a éveillé la curiosité de beaucoup de gens.", en: "This announcement aroused the curiosity of many people." }, drill: { jp: "Cette annonce va éveiller la curiosité", en: "This announcement is going to arouse curiosity" }, accept: ["to arouse", "to awaken", "to stir", "to spark"], hint: "To wake a feeling or interest. From le réveil; also s'éveiller, to awaken." },
        { id: "fr-u125l3-occasionner", type: "vocab", front: "occasionner", reading: "occasionner", meaning: "to cause", example: { jp: "Les travaux occasionnent beaucoup de bruit dans le quartier.", en: "The building works cause a lot of noise in the neighbourhood." }, accept: ["to cause", "to bring about", "to give rise to", "to lead to"], hint: "From l'occasion. A formal 'to cause', usually of trouble or expense." },
        { id: "fr-u125l3-precipiter", type: "vocab", front: "précipiter", reading: "precipiter", meaning: "to hasten", example: { jp: "Sa démission a précipité la chute du gouvernement.", en: "His resignation hastened the fall of the government." }, accept: ["to hasten", "to speed up", "to bring on", "to rush"], hint: "To make something happen sooner and faster. se précipiter = to rush." },
        { id: "fr-u125l3-alimenter", type: "vocab", front: "alimenter", reading: "alimenter", meaning: "to fuel", example: { jp: "Ces rumeurs ne font qu'alimenter la peur des gens.", en: "These rumours only fuel people's fear." }, drill: { jp: "Ces rumeurs vont alimenter la peur", en: "These rumours are going to fuel fear" }, accept: ["to fuel", "to feed", "to supply", "to keep going"], hint: "From aliment, food. To feed a fire, a debate, a machine." },
        { id: "fr-u125l3-aviver", type: "vocab", front: "aviver", reading: "aviver", meaning: "to rekindle", example: { jp: "Ses paroles ont avivé la colère de la foule.", en: "His words rekindled the crowd's anger." }, accept: ["to rekindle", "to stir up", "to sharpen", "to revive"], hint: "From vif, lively. To make a feeling or a fire burn brighter." },
        { id: "fr-u125l3-amplifier", type: "vocab", front: "amplifier", reading: "amplifier", meaning: "to amplify", example: { jp: "Les médias amplifient souvent des incidents sans grande importance.", en: "The media often amplify incidents of no great importance." }, accept: ["to amplify", "to magnify", "to blow up", "to increase"], hint: "From ample. To make larger or louder than it really is." },
      ],
    },
    {
      id: "fr-u125l4",
      unit: 125,
      lesson: 4,
      title: "Changing and hindering",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say something alters or blocks another: modifier, bouleverser, s'accentuer, découler, nuire, entraver.",
      items: [
        { id: "fr-u125l4-modifier", type: "vocab", front: "modifier", reading: "modifier", meaning: "to modify", example: { jp: "Il a fallu modifier le plan à la dernière minute.", en: "The plan had to be modified at the last minute." }, accept: ["to modify", "to change", "to alter", "to amend"], hint: "To change in part, not completely. Noun: la modification." },
        { id: "fr-u125l4-bouleverser", type: "vocab", front: "bouleverser", reading: "bouleverser", meaning: "to turn upside down", example: { jp: "Cette nouvelle a bouleversé toute la famille.", en: "This news turned the whole family upside down." }, accept: ["to turn upside down", "to disrupt", "to shatter", "to overwhelm"], hint: "To upset deeply — an order of things, or someone's emotions." },
        { id: "fr-u125l4-secreuser", type: "vocab", front: "se creuser", reading: "secreuser", meaning: "to deepen", example: { jp: "L'écart entre les riches et les pauvres se creuse chaque année.", en: "The gap between rich and poor deepens every year." }, accept: ["to deepen", "to widen", "to grow", "to become more marked"], hint: "From creuser, to dig. A gap or difference growing wider. se creuser la tête = to rack one's brains." },
        { id: "fr-u125l4-decouler", type: "vocab", front: "découler", reading: "decouler", meaning: "to follow from", example: { jp: "Tous ces problèmes découlent d'une seule erreur de départ.", en: "All these problems follow from a single mistake at the start." }, accept: ["to follow from", "to stem from", "to result from", "to arise from"], hint: "From couler, to flow. To flow logically as a consequence. découler de." },
        { id: "fr-u125l4-leser", type: "vocab", front: "léser", reading: "leser", meaning: "to wrong", example: { jp: "Cette décision lèse les petits commerçants du centre-ville.", en: "This decision wrongs the small shopkeepers in the town centre." }, accept: ["to wrong", "to harm", "to disadvantage", "to prejudice"], hint: "To damage someone's rights or interests. Formal, often in a legal sense." },
        { id: "fr-u125l4-contrarier", type: "vocab", front: "contrarier", reading: "contrarier", meaning: "to thwart", example: { jp: "Le mauvais temps a contrarié tous nos projets de week-end.", en: "The bad weather thwarted all our weekend plans." }, accept: ["to thwart", "to frustrate", "to upset", "to annoy"], hint: "To go against a plan, or to annoy someone. From contraire." },
      ],
    },
  ],
};
