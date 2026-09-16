// FR Unit 67 — Les problèmes et les solutions (slot: problems and solutions) — B1
// SCOPE BOUNDARY: A2 owns le problème, la solution, la difficulté, réparer; the
// sibling blocks own résoudre, éviter, empêcher, échouer, l'avantage,
// l'inconvénient, le souci. So this unit is the register above: kinds of problem
// (l'obstacle, le défi, l'enjeu, la faille), facing them (affronter, surmonter,
// résister, assumer), fixing them (régler, remédier, corriger, aggraver) and the
// outcome (l'issue, la menace, le dilemme, le blocage). Fronts checked against
// the live 1,287 and the sibling B1 blocks. Conventions: fr/unit1.js.
export const FR_UNIT67 = {
  id: "fr-u67",
  lang: "fr",
  title: "Les problèmes et les solutions",
  order: 67,
  stage: "b1",
  lessons: [
    {
      id: "fr-u67l1",
      unit: 67,
      lesson: 1,
      title: "Kinds of problem",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a difficulty precisely: un obstacle, un défi, un enjeu, une faille.",
      items: [
        { id: "fr-u67l1-lobstacle", type: "vocab", front: "l'obstacle", reading: "lobstacle", meaning: "the obstacle", example: { jp: "Chaque obstacle rend le projet plus difficile.", en: "Each obstacle makes the project harder." }, drill: { jp: "L'obstacle est très grand", en: "The obstacle is very big" }, accept: ["obstacle", "the hurdle", "the barrier"], hint: "An obstacle, hurdle — un obstacle à surmonter. Also a physical one in the road." },
        { id: "fr-u67l1-ledefi", type: "vocab", front: "le défi", reading: "ledefi", meaning: "the challenge", example: { jp: "Apprendre une langue est un vrai défi.", en: "Learning a language is a real challenge." }, drill: { jp: "Le défi est trop grand pour moi", en: "The challenge is too big for me" }, accept: ["challenge", "the dare"], hint: "A challenge — relever un défi = to take up a challenge." },
        { id: "fr-u67l1-lenjeu", type: "vocab", front: "l'enjeu", reading: "lenjeu", meaning: "the stake", example: { jp: "L'enjeu de cette élection est très important.", en: "What's at stake in this election is very important." }, drill: { jp: "L'enjeu est vraiment important", en: "The stake is really important" }, accept: ["the stake", "what's at stake", "the issue"], hint: "What's at stake — les enjeux d'un débat. From le jeu, the game." },
        { id: "fr-u67l1-lapanne", type: "vocab", front: "la panne", reading: "lapanne", meaning: "the breakdown", example: { jp: "Ma voiture est en panne depuis hier.", en: "My car has been broken down since yesterday." }, drill: { jp: "La panne est arrivée ce matin", en: "The breakdown happened this morning" }, accept: ["breakdown", "the fault", "the failure"], hint: "A breakdown — tomber en panne = to break down. une panne d'électricité = a power cut." },
        { id: "fr-u67l1-lafaille", type: "vocab", front: "la faille", reading: "lafaille", meaning: "the flaw", example: { jp: "Il y a une faille dans ton raisonnement.", en: "There's a flaw in your reasoning." }, drill: { jp: "La faille est facile à voir", en: "The flaw is easy to see" }, accept: ["flaw", "the weakness", "the fault"], hint: "A flaw or weakness — une faille dans un plan. Also a geological fault line." },
        { id: "fr-u67l1-lepointfaible", type: "vocab", front: "le point faible", reading: "lepointfaible", meaning: "the weak point", example: { jp: "Son point faible, c'est qu'il parle trop vite.", en: "His weak point is that he talks too fast." }, drill: { jp: "Le point faible reste le prix", en: "The weak point is still the price" }, accept: ["weak point", "the weakness", "the soft spot"], hint: "A weak point, weakness — the opposite of le point fort." },
      ],
    },
    {
      id: "fr-u67l2",
      unit: 67,
      lesson: 2,
      title: "Facing it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how you deal with trouble: faire face à, affronter, surmonter, résister.",
      items: [
        { id: "fr-u67l2-fairefacea", type: "vocab", front: "faire face à", reading: "fairefacea", meaning: "to face", example: { jp: "Elle sait faire face à ses problèmes seule.", en: "She knows how to face her problems on her own." }, drill: { jp: "Il faut faire face à ça", en: "You have to face that" }, accept: ["to face", "to deal with", "to cope with"], hint: "To face / deal with — faire face à une crise. Stand and confront it." },
        { id: "fr-u67l2-affronter", type: "vocab", front: "affronter", reading: "affronter", meaning: "to confront", example: { jp: "Il faut parfois affronter ses peurs.", en: "Sometimes you have to confront your fears." }, drill: { jp: "Elle veut affronter ce problème seule", en: "She wants to confront this problem alone" }, accept: ["to confront", "to face", "to take on"], hint: "To confront, face head-on — affronter un adversaire, affronter le danger." },
        { id: "fr-u67l2-surmonter", type: "vocab", front: "surmonter", reading: "surmonter", meaning: "to overcome", example: { jp: "Elle a surmonté toutes les difficultés.", en: "She overcame all the difficulties." }, drill: { jp: "Tu vas surmonter cette difficulté", en: "You're going to overcome this difficulty" }, accept: ["to overcome", "to get past", "to get over"], hint: "To overcome, get past — surmonter un obstacle, une peur." },
        { id: "fr-u67l2-resister", type: "vocab", front: "résister", reading: "resister", meaning: "to resist", example: { jp: "Difficile de résister à un bon gâteau !", en: "Hard to resist a good cake!" }, drill: { jp: "On ne peut pas résister longtemps", en: "You can't resist for long" }, accept: ["to resist", "to hold out", "to withstand"], hint: "To resist — résister à la tentation. Also to hold up: le mur résiste." },
        { id: "fr-u67l2-assumer", type: "vocab", front: "assumer", reading: "assumer", meaning: "to take on", example: { jp: "Il assume toujours ses choix.", en: "He always takes responsibility for his choices." }, drill: { jp: "Il va assumer ses choix", en: "He is going to take on his choices" }, accept: ["to take on", "to own", "to take responsibility for"], hint: "To take on / own — assumer ses responsabilités, assumer un choix." },
        { id: "fr-u67l2-sensortir", type: "vocab", front: "s'en sortir", reading: "sensortir", meaning: "to get through it", example: { jp: "C'est difficile, mais il va s'en sortir.", en: "It's hard, but he'll pull through." }, drill: { jp: "Elle va s'en sortir toute seule", en: "She's going to get through it on her own" }, accept: ["to get through it", "to pull through", "to manage", "to cope"], hint: "To get by / pull through — s'en sortir bien = to do well. Very common in speech." },
      ],
    },
    {
      id: "fr-u67l3",
      unit: 67,
      lesson: 3,
      title: "Fixing it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about putting things right: régler, remédier, corriger, aggraver.",
      items: [
        { id: "fr-u67l3-regler", type: "vocab", front: "régler", reading: "regler", meaning: "to sort out", example: { jp: "Il faut régler ce problème avant ce soir.", en: "We have to sort out this problem before this evening." }, drill: { jp: "Je vais régler cette question demain", en: "I'm going to sort out this question tomorrow" }, accept: ["to sort out", "to settle", "to fix"], hint: "To settle, sort out — régler un problème, une facture. Also to adjust: régler la télé." },
        { id: "fr-u67l3-remedier", type: "vocab", front: "remédier", reading: "remedier", meaning: "to remedy", example: { jp: "On doit vite remédier à cette situation.", en: "We must quickly remedy this situation." }, drill: { jp: "On peut remédier à ce défaut", en: "We can remedy this flaw" }, accept: ["to remedy", "to put right", "to fix"], hint: "remédier à = to put right, remedy. From le remède." },
        { id: "fr-u67l3-corriger", type: "vocab", front: "corriger", reading: "corriger", meaning: "to correct", example: { jp: "Le professeur va corriger le travail ce soir.", en: "The teacher is going to mark the work this evening." }, drill: { jp: "Je dois corriger cette erreur", en: "I have to correct this mistake" }, accept: ["to correct", "to mark", "to fix"], hint: "To correct, mark — corriger une erreur, un devoir." },
        { id: "fr-u67l3-aggraver", type: "vocab", front: "aggraver", reading: "aggraver", meaning: "to make worse", example: { jp: "Ne rien faire va aggraver le problème.", en: "Doing nothing will make the problem worse." }, drill: { jp: "Ce retard va aggraver la situation", en: "This delay is going to make the situation worse" }, accept: ["to make worse", "to worsen", "to aggravate"], hint: "To make worse — aggraver un problème. The opposite is améliorer." },
        { id: "fr-u67l3-leremede", type: "vocab", front: "le remède", reading: "leremede", meaning: "the remedy", example: { jp: "Contre ce problème, il n'y a pas de remède simple.", en: "There's no simple remedy for this problem." }, drill: { jp: "Le remède est pire que le mal", en: "The remedy is worse than the illness" }, accept: ["remedy", "the cure", "the solution"], hint: "A remedy, cure — un remède contre le rhume. Also a solution to a problem." },
        { id: "fr-u67l3-lacomplication", type: "vocab", front: "la complication", reading: "lacomplication", meaning: "the complication", example: { jp: "Il y a eu une complication de dernière minute.", en: "There was a last-minute complication." }, drill: { jp: "La complication vient toujours après", en: "The complication always comes afterwards" }, accept: ["complication", "the snag", "the hitch"], hint: "A complication, snag — sans complication = smoothly. From compliquer." },
      ],
    },
    {
      id: "fr-u67l4",
      unit: 67,
      lesson: 4,
      title: "The way out",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about outcomes and hard choices: une issue, une menace, un dilemme, un blocage.",
      items: [
        { id: "fr-u67l4-lissue", type: "vocab", front: "l'issue", reading: "lissue", meaning: "the way out", example: { jp: "On cherche une issue à cette crise.", en: "We're looking for a way out of this crisis." }, drill: { jp: "L'issue reste difficile à trouver", en: "The way out is still hard to find" }, accept: ["way out", "the outcome", "the exit"], hint: "A way out, or an outcome — l'issue de secours = emergency exit. l'issue d'un match." },
        { id: "fr-u67l4-lamenace", type: "vocab", front: "la menace", reading: "lamenace", meaning: "the threat", example: { jp: "Ce problème est une vraie menace pour l'entreprise.", en: "This problem is a real threat to the company." }, drill: { jp: "La menace est enfin partie", en: "The threat is finally gone" }, accept: ["threat", "the menace"], hint: "A threat, menace — une menace sérieuse. From menacer, to threaten." },
        { id: "fr-u67l4-lespoir", type: "vocab", front: "l'espoir", reading: "lespoir", meaning: "the hope", example: { jp: "Il garde toujours l'espoir de réussir.", en: "He always keeps the hope of succeeding." }, drill: { jp: "L'espoir est plus fort que la peur", en: "Hope is stronger than fear" }, accept: ["hope", "the hope"], hint: "Hope — garder l'espoir = to keep hoping. From espérer." },
        { id: "fr-u67l4-lepiege", type: "vocab", front: "le piège", reading: "lepiege", meaning: "the trap", example: { jp: "Elle n'a pas vu le piège dans cette question.", en: "She didn't see the trap in this question." }, drill: { jp: "Le piège est vraiment bien fait", en: "The trap is really well made" }, accept: ["trap", "the pitfall"], hint: "A trap — tomber dans le piège = to fall into the trap. Also for animals." },
        { id: "fr-u67l4-ledilemme", type: "vocab", front: "le dilemme", reading: "ledilemme", meaning: "the dilemma", example: { jp: "Elle est face à un vrai dilemme : partir ou rester.", en: "She faces a real dilemma: leave or stay." }, drill: { jp: "Le dilemme est difficile à régler", en: "The dilemma is hard to settle" }, accept: ["dilemma"], hint: "A dilemma — a hard choice between two options. être face à un dilemme." },
        { id: "fr-u67l4-leblocage", type: "vocab", front: "le blocage", reading: "leblocage", meaning: "the deadlock", example: { jp: "Il y a un blocage entre les deux équipes.", en: "There's a deadlock between the two teams." }, drill: { jp: "Le blocage vient du prix", en: "The deadlock comes from the price" }, accept: ["deadlock", "the block", "the standstill"], hint: "A deadlock, mental block — un blocage complet. From bloquer, to block." },
      ],
    },
  ],
};
