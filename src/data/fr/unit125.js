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
        { id: "fr-u125l1-consolider", type: "vocab", front: "consolider", reading: "consolider", meaning: "to consolidate", example: { jp: "L'entreprise cherche à consolider sa place sur le marché.", en: "The company is seeking to consolidate its place in the market." }, accept: ["to consolidate", "to strengthen", "to shore up"], hint: "From solide. To make firm and lasting." },
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
        { id: "fr-u125l2-affaiblir", type: "vocab", front: "affaiblir", reading: "affaiblir", meaning: "to weaken", example: { jp: "La maladie l'a beaucoup affaibli en quelques mois.", en: "The illness weakened him a great deal in a few months." }, accept: ["to weaken", "to sap", "to undermine"], hint: "From faible, weak. The opposite of renforcer." },
        { id: "fr-u125l2-attenuer", type: "vocab", front: "atténuer", reading: "attenuer", meaning: "to lessen", example: { jp: "Ce médicament atténue la douleur, mais ne la fait pas disparaître.", en: "This medicine lessens the pain, but doesn't make it go away." }, accept: ["to lessen", "to ease", "to soften", "to reduce"], hint: "To soften the intensity of something — pain, noise, a shock." },
        { id: "fr-u125l2-sestomper", type: "vocab", front: "s'estomper", reading: "sestomper", meaning: "to fade", example: { jp: "Avec le temps, ces mauvais souvenirs se sont estompés.", en: "With time, those bad memories faded." }, accept: ["to fade", "to blur", "to dim", "to die down"], hint: "To grow blurry and faint — a memory, an outline, a sound." },
        { id: "fr-u125l2-ebranler", type: "vocab", front: "ébranler", reading: "ebranler", meaning: "to shake", example: { jp: "Ce scandale a ébranlé la confiance du public.", en: "This scandal shook the public's confidence." }, accept: ["to shake", "to undermine", "to rock", "to weaken"], hint: "To shake something solid — a wall, a belief, someone's resolve." },
        { id: "fr-u125l2-restreindre", type: "vocab", front: "restreindre", reading: "restreindre", meaning: "to restrict", example: { jp: "Il a dû restreindre ses dépenses après avoir perdu son travail.", en: "He had to restrict his spending after losing his job." }, accept: ["to restrict", "to limit", "to curb", "to cut back"], hint: "To narrow or limit. Past participle: restreint. Noun: la restriction." },
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
        { id: "fr-u125l3-susciter", type: "vocab", front: "susciter", reading: "susciter", meaning: "to arouse", example: { jp: "Cette annonce a suscité beaucoup de réactions sur les réseaux.", en: "This announcement aroused a lot of reactions on social media." }, accept: ["to arouse", "to raise", "to provoke", "to generate"], hint: "To call forth a feeling or a response — interest, anger, questions." },
        { id: "fr-u125l3-engendrer", type: "vocab", front: "engendrer", reading: "engendrer", meaning: "to generate", example: { jp: "La misère engendre souvent la violence, dit-on.", en: "Poverty often generates violence, they say." }, accept: ["to generate", "to breed", "to give rise to", "to cause"], hint: "A formal 'to cause' — to bring something into being as a result." },
        { id: "fr-u125l3-precipiter", type: "vocab", front: "précipiter", reading: "precipiter", meaning: "to hasten", example: { jp: "Sa démission a précipité la chute du gouvernement.", en: "His resignation hastened the fall of the government." }, accept: ["to hasten", "to speed up", "to bring on", "to rush"], hint: "To make something happen sooner and faster. se précipiter = to rush." },
        { id: "fr-u125l3-alimenter", type: "vocab", front: "alimenter", reading: "alimenter", meaning: "to fuel", example: { jp: "Ces rumeurs ne font qu'alimenter la peur des gens.", en: "These rumours only fuel people's fear." }, accept: ["to fuel", "to feed", "to supply", "to keep going"], hint: "From aliment, food. To feed a fire, a debate, a machine." },
        { id: "fr-u125l3-aviver", type: "vocab", front: "aviver", reading: "aviver", meaning: "to rekindle", example: { jp: "Ses paroles ont avivé la colère de la foule.", en: "His words rekindled the crowd's anger." }, accept: ["to rekindle", "to stir up", "to sharpen", "to revive"], hint: "From vif, lively. To make a feeling or a fire burn brighter." },
        { id: "fr-u125l3-amplifier", type: "vocab", front: "amplifier", reading: "amplifier", meaning: "to amplify", example: { jp: "Les médias ont amplifié un incident somme toute mineur.", en: "The media amplified an incident that was ultimately minor." }, accept: ["to amplify", "to magnify", "to blow up", "to increase"], hint: "From ample. To make larger or louder than it really is." },
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
        { id: "fr-u125l4-saccentuer", type: "vocab", front: "s'accentuer", reading: "saccentuer", meaning: "to grow sharper", example: { jp: "Les différences entre les deux régions s'accentuent chaque année.", en: "The differences between the two regions grow sharper every year." }, accept: ["to grow sharper", "to intensify", "to become more marked", "to increase"], hint: "From accent. A trend or contrast becoming more pronounced." },
        { id: "fr-u125l4-decouler", type: "vocab", front: "découler", reading: "decouler", meaning: "to follow from", example: { jp: "Tous ces problèmes découlent d'une seule erreur de départ.", en: "All these problems follow from a single mistake at the start." }, accept: ["to follow from", "to stem from", "to result from", "to arise from"], hint: "From couler, to flow. To flow logically as a consequence. découler de." },
        { id: "fr-u125l4-nuire", type: "vocab", front: "nuire", reading: "nuire", meaning: "to harm", example: { jp: "Le bruit constant nuit à la santé, à la longue.", en: "Constant noise harms your health, in the long run." }, accept: ["to harm", "to damage", "to be harmful to"], hint: "nuire à quelque chose. Adjective: nuisible, harmful." },
        { id: "fr-u125l4-entraver", type: "vocab", front: "entraver", reading: "entraver", meaning: "to hinder", example: { jp: "Le mauvais temps a entravé les recherches pendant deux jours.", en: "The bad weather hindered the search for two days." }, accept: ["to hinder", "to hamper", "to impede", "to obstruct"], hint: "To get in the way of. From une entrave, a shackle." },
      ],
    },
  ],
};
