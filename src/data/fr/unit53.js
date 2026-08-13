// FR Unit 53 — Changer et devenir ("Changing and becoming") — A2
// Strand D, coverage unit 7 of 11 (block 3). Slot: coverage-a2-7 (generic
// "Vocabulary 7 (A2)"); given a real theme so the four lessons cohere — the slot
// NUMBER is kept, only the name deviates. See unit48.js for the block-3 rules.
// Verbs of process and change — the ones that describe how a situation moves rather
// than what happens in any one topic: become, last, start, stop, rise, fall, keep,
// lose. A1 taught je commence / je finis as fixed chunks; here the infinitives
// arrive so they can ride the je vais / je veux frames.
export const FR_UNIT53 = {
  id: "fr-u53",
  lang: "fr",
  title: "Changer et devenir",
  order: 53,
  stage: "a2",
  lessons: [
    {
      id: "fr-u53l1",
      unit: 53,
      lesson: 1,
      title: "Becoming and changing",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say that something is changing: become, change, last, carry on, stop — and name the change itself.",
      items: [
        { id: "fr-u53l1-devenir", type: "vocab", front: "devenir", reading: "devenir", meaning: "to become", example: { jp: "Je veux devenir médecin.", en: "I want to become a doctor." }, accept: ["become", "get", "turn into"], hint: "No article before a job: je veux devenir médecin, never « un médecin »." },
        { id: "fr-u53l1-changer", type: "vocab", front: "changer", reading: "changer", meaning: "to switch", example: { jp: "Je vais changer de chemise.", en: "I'm going to change my shirt." }, accept: ["change", "swap", "to change"], hint: "Swapping one for another takes de: changer de chemise, changer de train. Don't confuse it with la monnaie — the change you get back in coins." },
        { id: "fr-u53l1-durer", type: "vocab", front: "durer", reading: "durer", meaning: "to last", example: { jp: "Le film va durer deux heures.", en: "The film is going to last two hours." }, accept: ["last", "go on", "take"], hint: "« va + infinitive » is the same near-future as je vais manger, just with il/elle: le film va durer." },
        { id: "fr-u53l1-continuer", type: "vocab", front: "continuer", reading: "continuer", meaning: "to continue", example: { jp: "Je vais continuer demain.", en: "I'm going to continue tomorrow." }, accept: ["carry on", "keep going", "go on", "continue"] },
        { id: "fr-u53l1-arreter", type: "vocab", front: "arrêter", reading: "arreter", meaning: "to halt", example: { jp: "Je vais arrêter ici.", en: "I'm going to stop here." }, accept: ["stop", "to stop", "cease", "quit"], hint: "The noun you already know is l'arrêt — the bus stop." },
        { id: "fr-u53l1-lechangement", type: "vocab", front: "le changement", reading: "lechangement", meaning: "shift", example: { jp: "C'est un grand changement.", en: "That's a big change." }, accept: ["the change", "a change", "transformation"] },
      ],
    },
    {
      id: "fr-u53l2",
      unit: 53,
      lesson: 2,
      title: "Starting and finishing",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Frame something from end to end: begin, finish, start over, resume after a break — and name the step you're on.",
      items: [
        { id: "fr-u53l2-commencer", type: "vocab", front: "commencer", reading: "commencer", meaning: "to begin", example: { jp: "Le film va commencer.", en: "The film is going to begin." }, accept: ["begin", "start"] },
        { id: "fr-u53l2-finir", type: "vocab", front: "finir", reading: "finir", meaning: "to finish", example: { jp: "Je veux finir mon travail.", en: "I want to finish my work." }, accept: ["complete", "get done", "finish off"] },
        { id: "fr-u53l2-recommencer", type: "vocab", front: "recommencer", reading: "recommencer", meaning: "to start over", example: { jp: "Je vais recommencer.", en: "I'm going to start over." }, accept: ["start again", "begin again", "do it again"], hint: "re- + commencer, the same re- as in répéter and reconnaître." },
        { id: "fr-u53l2-reprendre", type: "vocab", front: "reprendre", reading: "reprendre", meaning: "to resume", example: { jp: "Je vais reprendre demain.", en: "I'm going to resume tomorrow." }, accept: ["pick up again", "carry on", "start again", "take back"], hint: "re- + prendre: to take something up again after a break." },
        { id: "fr-u53l2-lapause", type: "vocab", front: "la pause", reading: "lapause", meaning: "pause", example: { jp: "Je vais faire une pause.", en: "I'm going to take a break." }, accept: ["break", "the break", "rest", "breather"], hint: "You MAKE a break in French: faire une pause is the standard pairing. « Prendre une pause » is normal in Quebec but reads as an anglicism in France." },
        { id: "fr-u53l2-letape", type: "vocab", front: "l'étape", reading: "letape", meaning: "step", example: { jp: "Chaque étape est importante.", en: "Each step is important." }, accept: ["the step", "stage", "phase"] },
      ],
    },
    {
      id: "fr-u53l3",
      unit: 53,
      lesson: 3,
      title: "More and less",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say a quantity is moving: go up, go down, grow, shrink, improve — and call it progress.",
      items: [
        { id: "fr-u53l3-augmenter", type: "vocab", front: "augmenter", reading: "augmenter", meaning: "to increase", example: { jp: "Le prix va augmenter.", en: "The price is going to increase." }, accept: ["go up", "rise", "raise", "increase"] },
        { id: "fr-u53l3-baisser", type: "vocab", front: "baisser", reading: "baisser", meaning: "to go down", example: { jp: "La température va baisser.", en: "The temperature is going to go down." }, accept: ["drop", "lower", "come down"], hint: "Works both ways: something baisse on its own (la température baisse), or you baisse it (baisser le prix)." },
        { id: "fr-u53l3-grandir", type: "vocab", front: "grandir", reading: "grandir", meaning: "to grow", example: { jp: "Mon enfant va grandir vite.", en: "My child is going to grow quickly." }, accept: ["grow up", "get bigger", "grow"] },
        { id: "fr-u53l3-diminuer", type: "vocab", front: "diminuer", reading: "diminuer", meaning: "to decrease", example: { jp: "Le nombre va diminuer.", en: "The number is going to decrease." }, accept: ["reduce", "shrink", "lessen"] },
        { id: "fr-u53l3-ameliorer", type: "vocab", front: "améliorer", reading: "ameliorer", meaning: "to improve", example: { jp: "Je veux améliorer mon français.", en: "I want to improve my French." }, accept: ["improve", "make better", "better"] },
        { id: "fr-u53l3-leprogres", type: "vocab", front: "le progrès", reading: "leprogres", meaning: "progress", example: { jp: "Je fais des progrès.", en: "I'm making progress." }, accept: ["the progress", "improvement", "headway"], hint: "Nearly always plural in everyday speech — faire des progrès. The singular le progrès is the abstract idea, and sounds bookish." },
      ],
    },
    {
      id: "fr-u53l4",
      unit: 53,
      lesson: 4,
      title: "Winning and losing",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what happens to a thing you hold: win, lose, keep, leave it behind, give up — and find it again.",
      items: [
        { id: "fr-u53l4-gagner", type: "vocab", front: "gagner", reading: "gagner", meaning: "to win", example: { jp: "Je veux gagner.", en: "I want to win." }, accept: ["win", "earn", "gain"], hint: "Also how you earn money: gagner de l'argent." },
        { id: "fr-u53l4-perdre", type: "vocab", front: "perdre", reading: "perdre", meaning: "to lose", example: { jp: "Je ne veux pas perdre ma clé.", en: "I don't want to lose my key." }, accept: ["lose", "mislay"] },
        { id: "fr-u53l4-garder", type: "vocab", front: "garder", reading: "garder", meaning: "to keep", example: { jp: "Je vais garder le billet.", en: "I'm going to keep the ticket." }, accept: ["keep", "hold on to", "look after"] },
        { id: "fr-u53l4-laisser", type: "vocab", front: "laisser", reading: "laisser", meaning: "to leave behind", example: { jp: "Je vais laisser mon sac ici.", en: "I'm going to leave my bag here." }, accept: ["leave", "to leave", "let", "drop off"], hint: "laisser = leave a THING somewhere. partir = leave a place yourself. Never swap them." },
        { id: "fr-u53l4-abandonner", type: "vocab", front: "abandonner", reading: "abandonner", meaning: "to give up", example: { jp: "Je ne veux pas abandonner.", en: "I don't want to give up." }, accept: ["abandon", "quit", "drop out"] },
        { id: "fr-u53l4-retrouver", type: "vocab", front: "retrouver", reading: "retrouver", meaning: "to find again", example: { jp: "Je vais retrouver mes clés.", en: "I'm going to find my keys again." }, accept: ["find again", "get back", "meet up with"], hint: "re- + trouver: to find something you had lost. It's also how you meet a friend as arranged: on se retrouve à midi." },
      ],
    },
  ],
};
