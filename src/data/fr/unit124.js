// FR Unit 124 — Penser et comprendre ("Thinking and understanding") — B2
// Strand D, coverage unit 7 of 13 (block 3, units 121-133). Generic slot
// "Vocabulary 7 (B2)"; given a real theme — DEVIATION FROM THE SLOT NAME ONLY.
//
// ONE LEVEL ABOVE THE SLOT: A2+B1 already teach penser, croire, comprendre (je
// comprends), réaliser, se rendre compte, envisager, supposer, imaginer,
// distinguer. This unit authors the PRECISE verbs of thought a B2 speaker needs
// to describe reasoning itself — percevoir, concevoir, déduire, cerner. Lexeme
// check applied: comprendre is dropped (its conjugated form is already live);
// appréhender/apprehension avoided (noun is in u123). Every front checked against
// the 2,168 fronts and the sibling B2 blocks. Conventions: see fr/unit1.js.
export const FR_UNIT124 = {
  id: "fr-u124",
  lang: "fr",
  title: "Penser et comprendre",
  order: 124,
  stage: "b2",
  lessons: [
    {
      id: "fr-u124l1",
      unit: 124,
      lesson: 1,
      title: "Taking it in",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how an idea reaches you: percevoir, saisir, concevoir, assimiler, discerner, entrevoir.",
      items: [
        { id: "fr-u124l1-percevoir", type: "vocab", front: "percevoir", reading: "percevoir", meaning: "to perceive", example: { jp: "On perçoit vite une différence entre les deux, même sans les connaître bien.", en: "You quickly perceive a difference between the two, even without knowing them well." }, accept: ["to perceive", "to make out", "to sense"], hint: "To pick up through the senses or the mind. Also to collect (taxes, rent)." },
        { id: "fr-u124l1-saisir", type: "vocab", front: "saisir", reading: "saisir", meaning: "to grasp", example: { jp: "Je n'ai pas bien saisi ton idée, peux-tu l'expliquer autrement ?", en: "I didn't quite grasp your idea; can you explain it differently?" }, accept: ["to grasp", "to catch", "to seize", "to understand"], hint: "To grab — with the hand, or the mind. saisir une occasion = to seize a chance." },
        { id: "fr-u124l1-concevoir", type: "vocab", front: "concevoir", reading: "concevoir", meaning: "to conceive", example: { jp: "Il est difficile de concevoir un monde sans électricité aujourd'hui.", en: "It's hard to conceive of a world without electricity today." }, accept: ["to conceive", "to imagine", "to design"], hint: "To form in the mind, or to design something. Past participle: conçu." },
        { id: "fr-u124l1-assimiler", type: "vocab", front: "assimiler", reading: "assimiler", meaning: "to assimilate", example: { jp: "Elle assimile les nouvelles règles très vite, si bien qu'elle aide déjà les autres.", en: "She assimilates the new rules very fast, so much so that she's already helping others." }, accept: ["to assimilate", "to absorb", "to take in", "to learn"], hint: "To take in and fully understand — knowledge, or food." },
        { id: "fr-u124l1-discerner", type: "vocab", front: "discerner", reading: "discerner", meaning: "to discern", example: { jp: "Dans le noir, on discerne à peine les formes des meubles.", en: "In the dark, you can barely discern the shapes of the furniture." }, accept: ["to discern", "to make out", "to distinguish"], hint: "To tell apart, or barely see. discerner le vrai du faux." },
        { id: "fr-u124l1-entrevoir", type: "vocab", front: "entrevoir", reading: "entrevoir", meaning: "to glimpse", example: { jp: "On commence à entrevoir une solution, même si tout n'est pas clair.", en: "We're beginning to glimpse a solution, even if not everything is clear." }, accept: ["to glimpse", "to catch sight of", "to foresee"], hint: "To half-see — a shape, or a possibility ahead. From entre + voir." },
      ],
    },
    {
      id: "fr-u124l2",
      unit: 124,
      lesson: 2,
      title: "Thinking it over",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how you mull something: réfléchir, songer, méditer, raisonner, approfondir, élaborer.",
      items: [
        { id: "fr-u124l2-reflechir", type: "vocab", front: "réfléchir", reading: "reflechir", meaning: "to think over", example: { jp: "Laisse-moi réfléchir avant de répondre, car la question est importante.", en: "Let me think it over before answering, because the question is important." }, accept: ["to think", "to think over", "to reflect", "to ponder"], hint: "To think carefully. réfléchir à quelque chose. Also to reflect light." },
        { id: "fr-u124l2-songer", type: "vocab", front: "songer", reading: "songer", meaning: "to think of", example: { jp: "Il songe à changer de travail, mais il n'a encore rien décidé.", en: "He's thinking of changing jobs, but he hasn't decided anything yet." }, accept: ["to think of", "to contemplate", "to consider", "to dream"], hint: "songer à = to give thought to. From le songe, a dream — a touch literary." },
        { id: "fr-u124l2-mediter", type: "vocab", front: "méditer", reading: "mediter", meaning: "to meditate", example: { jp: "Elle a longuement médité sur ces mots avant d'agir.", en: "She meditated at length on those words before acting." }, accept: ["to meditate", "to ponder", "to muse", "to reflect"], hint: "To turn something over deeply and quietly. méditer sur." },
        { id: "fr-u124l2-raisonner", type: "vocab", front: "raisonner", reading: "raisonner", meaning: "to reason", example: { jp: "Il raisonne bien, mais il part parfois d'une idée fausse.", en: "He reasons well, but he sometimes starts from a false idea." }, accept: ["to reason", "to think logically"], hint: "From la raison. To follow a logical chain. Don't confuse with résonner, to echo." },
        { id: "fr-u124l2-approfondir", type: "vocab", front: "approfondir", reading: "approfondir", meaning: "to go deeper into", example: { jp: "Il faudrait approfondir la question avant de prendre une décision.", en: "We should go deeper into the question before making a decision." }, accept: ["to go deeper into", "to deepen", "to explore further", "to look into"], hint: "From profond, deep. To study something more thoroughly." },
        { id: "fr-u124l2-elaborer", type: "vocab", front: "élaborer", reading: "elaborer", meaning: "to work out", example: { jp: "L'équipe a élaboré un plan précis, point par point.", en: "The team worked out a precise plan, point by point." }, accept: ["to work out", "to develop", "to draw up", "to devise"], hint: "To build up carefully — a plan, a theory, a recipe." },
      ],
    },
    {
      id: "fr-u124l3",
      unit: 124,
      lesson: 3,
      title: "Working it out",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how you reason to a result: analyser, déduire, examiner, conclure, constater, s'apercevoir.",
      items: [
        { id: "fr-u124l3-analyser", type: "vocab", front: "analyser", reading: "analyser", meaning: "to analyse", example: { jp: "Avant de juger, il faut analyser les faits avec soin.", en: "Before judging, you have to analyse the facts carefully." }, accept: ["to analyse", "to analyze", "to examine"], hint: "To break something down to understand it. Noun: l'analyse." },
        { id: "fr-u124l3-deduire", type: "vocab", front: "déduire", reading: "deduire", meaning: "to deduce", example: { jp: "De son silence, on peut déduire qu'il n'est pas d'accord.", en: "From his silence, you can deduce that he doesn't agree." }, accept: ["to deduce", "to infer", "to work out"], hint: "To draw a conclusion from clues. Also to deduct (an amount)." },
        { id: "fr-u124l3-examiner", type: "vocab", front: "examiner", reading: "examiner", meaning: "to examine", example: { jp: "Le médecin l'a examiné longuement avant de se prononcer.", en: "The doctor examined him at length before giving an opinion." }, accept: ["to examine", "to inspect", "to look at closely"], hint: "To look at closely and carefully. From un examen." },
        { id: "fr-u124l3-conclure", type: "vocab", front: "conclure", reading: "conclure", meaning: "to conclude", example: { jp: "J'en conclus que le problème vient d'ailleurs.", en: "I conclude from this that the problem comes from elsewhere." }, accept: ["to conclude", "to draw a conclusion", "to finish"], hint: "en conclure que = to conclude from it that. Also to seal a deal." },
        { id: "fr-u124l3-constater", type: "vocab", front: "constater", reading: "constater", meaning: "to note", example: { jp: "On constate que les prix montent chaque année, sans exception.", en: "One notes that prices rise every year, without exception." }, accept: ["to note", "to observe", "to see", "to find"], hint: "To register a plain fact you can see. Neutral, not an opinion." },
        { id: "fr-u124l3-sapercevoir", type: "vocab", front: "s'apercevoir", reading: "sapercevoir", meaning: "to realise", example: { jp: "Il s'est aperçu trop tard qu'il s'était trompé de route.", en: "He realised too late that he had taken the wrong road." }, accept: ["to realise", "to realize", "to notice", "to become aware"], hint: "s'apercevoir de / que = to suddenly notice. Reflexive, unlike apercevoir (to catch sight of)." },
      ],
    },
    {
      id: "fr-u124l4",
      unit: 124,
      lesson: 4,
      title: "Making sense of it",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how you untangle meaning: interpréter, démêler, cerner, décortiquer, récapituler, élucider.",
      items: [
        { id: "fr-u124l4-interpreter", type: "vocab", front: "interpréter", reading: "interpreter", meaning: "to interpret", example: { jp: "Chacun interprète ce poème à sa façon, et c'est bien normal.", en: "Everyone interprets this poem in their own way, and that's quite normal." }, accept: ["to interpret", "to read", "to construe", "to perform"], hint: "To give a meaning to. Also to perform a role or a piece of music." },
        { id: "fr-u124l4-demeler", type: "vocab", front: "démêler", reading: "demeler", meaning: "to untangle", example: { jp: "Il est difficile de démêler le vrai du faux dans cette histoire.", en: "It's hard to untangle the true from the false in this story." }, accept: ["to untangle", "to sort out", "to unravel"], hint: "From mêler, to mix. To separate what's confused — hair, or a mystery." },
        { id: "fr-u124l4-cerner", type: "vocab", front: "cerner", reading: "cerner", meaning: "to pin down", example: { jp: "On a du mal à cerner sa vraie pensée, car il change souvent d'avis.", en: "It's hard to pin down his real thinking, because he often changes his mind." }, accept: ["to pin down", "to grasp", "to define", "to figure out"], hint: "To draw a circle around — to define the edges of an idea or a person." },
        { id: "fr-u124l4-decortiquer", type: "vocab", front: "décortiquer", reading: "decortiquer", meaning: "to dissect", example: { jp: "Les journalistes ont décortiqué le discours mot par mot.", en: "The journalists dissected the speech word by word." }, accept: ["to dissect", "to analyse in detail", "to pick apart", "to shell"], hint: "Literally to shell (a nut); figuratively, to take an argument apart piece by piece." },
        { id: "fr-u124l4-recapituler", type: "vocab", front: "récapituler", reading: "recapituler", meaning: "to recap", example: { jp: "Récapitulons ce qui a été dit, pour être sûrs de bien se comprendre.", en: "Let's recap what has been said, to be sure we understand each other." }, accept: ["to recap", "to summarise", "to sum up", "to go over"], hint: "To go back over the main points. Short form: récapituler → 'récap'." },
        { id: "fr-u124l4-elucider", type: "vocab", front: "élucider", reading: "elucider", meaning: "to clear up", example: { jp: "La police n'a jamais réussi à élucider ce mystère.", en: "The police never managed to clear up this mystery." }, accept: ["to clear up", "to solve", "to elucidate", "to unravel"], hint: "From lucide. To shed light on something obscure — a mystery, a case." },
      ],
    },
  ],
};
