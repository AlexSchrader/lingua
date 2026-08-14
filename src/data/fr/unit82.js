// FR Unit 82 — Vocabulary 2 (B1) (slot: coverage-b1-2) — B1
// Second coverage unit: the ABSTRACT NOUNS that carry an argument. Unit 81 gave
// the verbs; these are the nouns those verbs act on, and they are what a learner
// is missing when they can follow a conversation about a restaurant but not one
// about a decision. Every front checked against the live corpus.
// Conventions: see fr/unit1.js.
export const FR_UNIT82 = {
  id: "fr-u82",
  lang: "fr",
  title: "Les mots de l'argumentation",
  order: 82,
  stage: "b1",
  lessons: [
    {
      id: "fr-u82l1",
      unit: 82,
      lesson: 1,
      title: "Evidence and level",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Point at evidence: une preuve, un exemple, la valeur, le niveau.",
      items: [
        { id: "fr-u82l1-lapreuve", type: "vocab", front: "la preuve", reading: "lapreuve", meaning: "the proof", example: { jp: "Il n'y a aucune preuve, donc l'enquête va s'arrêter là.", en: "There's no proof at all, so the investigation is going to stop there." }, accept: ["proof", "evidence", "the evidence"], hint: "From prouver (Unit 81). la preuve que + a whole clause." },
        { id: "fr-u82l1-lexemple", type: "vocab", front: "l'exemple", reading: "lexemple", meaning: "the example", example: { jp: "Prenons un exemple concret, ce sera plus clair pour tout le monde.", en: "Let's take a concrete example, it'll be clearer for everyone." }, accept: ["example", "the instance"], hint: "par exemple = for example, one of the most useful two words in the language." },
        { id: "fr-u82l1-lavaleur", type: "vocab", front: "la valeur", reading: "lavaleur", meaning: "the value", example: { jp: "La valeur de cette maison a beaucoup augmenté, ce qui surprend les voisins.", en: "The value of this house has risen a lot, which surprises the neighbours." }, accept: ["value", "the worth", "values"], hint: "Also moral values in the plural: les valeurs de la République." },
        { id: "fr-u82l1-leniveau", type: "vocab", front: "le niveau", reading: "leniveau", meaning: "the level", example: { jp: "Son niveau de français a beaucoup augmenté depuis qu'elle habite ici.", en: "Her level of French has risen a lot since she's been living here." }, accept: ["level", "the standard", "grade"], hint: "au niveau de = at the level of, and in speech, loosely, \"as far as … goes\"." },
        { id: "fr-u82l1-lensemble", type: "vocab", front: "l'ensemble", reading: "lensemble", meaning: "the whole", example: { jp: "L'ensemble du travail doit être fini avant vendredi.", en: "The whole job has to be finished before Friday." }, accept: ["whole", "the set", "overall"], hint: "You met dans l'ensemble (Unit 78) — this is the noun inside it." },
        { id: "fr-u82l1-legenre", type: "vocab", front: "le genre", reading: "legenre", meaning: "the kind", example: { jp: "Ce genre de problème arrive souvent, il ne faut pas s'inquiéter.", en: "This kind of problem happens often, there's no need to worry." }, accept: ["kind", "sort", "type", "genre"], hint: "ce genre de + noun. Also grammatical gender, and film genre." },
      ],
    },
    {
      id: "fr-u82l2",
      unit: 82,
      lesson: 2,
      title: "Weighing it up",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Set out a trade-off: l'avantage, l'inconvénient, la décision, la responsabilité.",
      items: [
        { id: "fr-u82l2-lavantage", type: "vocab", front: "l'avantage", reading: "lavantage", meaning: "the advantage", example: { jp: "L'avantage de cette méthode, c'est qu'elle ne coûte rien.", en: "The advantage of this method is that it costs nothing." }, accept: ["advantage", "the benefit", "upside"] },
        { id: "fr-u82l2-linconvenient", type: "vocab", front: "l'inconvénient", reading: "linconvenient", meaning: "the drawback", example: { jp: "Le seul inconvénient, c'est le délai, qui est vraiment long.", en: "The only drawback is the wait, which is really long." }, accept: ["drawback", "the disadvantage", "downside"], hint: "The standard pair: les avantages et les inconvénients — pros and cons." },
        { id: "fr-u82l2-ladecision", type: "vocab", front: "la décision", reading: "ladecision", meaning: "the decision", example: { jp: "La décision a été prise sans nous, ce qui a créé beaucoup de problèmes.", en: "The decision was made without us, which created a lot of problems." }, accept: ["decision", "the ruling"], hint: "prendre une décision — you TAKE a decision in French, never \"make\" it." },
        { id: "fr-u82l2-laresponsabilite", type: "vocab", front: "la responsabilité", reading: "laresponsabilite", meaning: "the responsibility", example: { jp: "Il a pris la responsabilité de l'échec, bien que ce ne soit pas sa faute.", en: "He took responsibility for the failure, although it wasn't his fault." }, accept: ["responsibility", "the liability", "duty"] },
        { id: "fr-u82l2-lacapacite", type: "vocab", front: "la capacité", reading: "lacapacite", meaning: "the ability", example: { jp: "Sa capacité à écouter les autres explique son succès.", en: "His ability to listen to others explains his success." }, accept: ["ability", "capacity", "the capability"] },
        { id: "fr-u82l2-loccasion", type: "vocab", front: "l'occasion", reading: "loccasion", meaning: "the opportunity", example: { jp: "C'est l'occasion de changer de travail, et il ne faut pas la perdre.", en: "It's the opportunity to change jobs, and it mustn't be lost." }, accept: ["opportunity", "the opening", "occasion"], hint: "d'occasion means second-hand: une voiture d'occasion." },
      ],
    },
    {
      id: "fr-u82l3",
      unit: 82,
      lesson: 3,
      title: "Effort and what's missing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name what a job takes: un effort, le manque, une tâche, un délai.",
      items: [
        { id: "fr-u82l3-leffort", type: "vocab", front: "l'effort", reading: "leffort", meaning: "the effort", example: { jp: "Ça demande un effort au début, mais après c'est une habitude.", en: "It takes an effort at first, but afterwards it's a habit." }, accept: ["effort", "the exertion"], hint: "faire un effort. Also faire des efforts, plural, for sustained trying." },
        { id: "fr-u82l3-lemanque", type: "vocab", front: "le manque", reading: "lemanque", meaning: "the lack", example: { jp: "Le manque de sommeil explique sa fatigue depuis une semaine.", en: "The lack of sleep explains his tiredness over the past week." }, accept: ["lack", "the shortage", "want"], hint: "The noun of il manque (Unit 77)." },
        { id: "fr-u82l3-lebesoin", type: "vocab", front: "le besoin", reading: "lebesoin", meaning: "the need", example: { jp: "Les besoins des habitants ne sont pas les mêmes en ville et à la campagne.", en: "Residents' needs are not the same in the city and in the countryside." }, accept: ["need", "the requirement"], hint: "The noun inside avoir besoin de. si besoin = if necessary." },
        { id: "fr-u82l3-latache", type: "vocab", front: "la tâche", reading: "latache", meaning: "the task", example: { jp: "Cette tâche prend une heure, à moins qu'on soit plusieurs.", en: "This task takes an hour, unless there are several of us." }, accept: ["task", "the job", "chore"], hint: "Watch the circumflex: la tâche is a task, une tache is a stain." },
        { id: "fr-u82l3-ledelai", type: "vocab", front: "le délai", reading: "ledelai", meaning: "the deadline", example: { jp: "Le délai est trop court, si bien que personne ne pourra finir.", en: "The deadline is too short, so nobody will be able to finish." }, accept: ["deadline", "the time limit", "waiting time"], hint: "False friend: un délai is the time ALLOWED, not a delay. A delay is un retard." },
        { id: "fr-u82l3-ledossier", type: "vocab", front: "le dossier", reading: "ledossier", meaning: "the file", example: { jp: "J'ai envoyé mon dossier la semaine dernière, et j'attends toujours une réponse.", en: "I sent my file last week, and I'm still waiting for a reply." }, accept: ["file", "the folder", "case", "application"], hint: "Your dossier is your paperwork for anything official — the word rules French admin." },
      ],
    },
    {
      id: "fr-u82l4",
      unit: 82,
      lesson: 4,
      title: "Luck, talent and daily life",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about chance and routine: la chance, le hasard, le talent, quotidien.",
      items: [
        { id: "fr-u82l4-lachance", type: "vocab", front: "la chance", reading: "lachance", meaning: "luck", example: { jp: "J'ai eu de la chance : le train est parti cinq minutes plus tard.", en: "I was lucky: the train left five minutes later." }, accept: ["the luck", "fortune", "good fortune"], hint: "avoir de la chance = to be lucky. Bonne chance ! = good luck!" },
        { id: "fr-u82l4-lehasard", type: "vocab", front: "le hasard", reading: "lehasard", meaning: "chance", example: { jp: "C'est le hasard qui nous a réunis, pas une décision.", en: "It was chance that brought us together, not a decision." }, accept: ["coincidence", "the randomness", "fluke"], hint: "par hasard = by chance. Aspirated h: le hasard, never \"l'hasard\"." },
        { id: "fr-u82l4-letalent", type: "vocab", front: "le talent", reading: "letalent", meaning: "the talent", example: { jp: "Elle a un vrai talent pour expliquer les choses complexes.", en: "She has a real talent for explaining complex things." }, accept: ["talent", "the gift", "flair"] },
        { id: "fr-u82l4-letemoin", type: "vocab", front: "le témoin", reading: "letemoin", meaning: "the witness", example: { jp: "Le témoin a tout vu, pourtant il refuse de parler.", en: "The witness saw everything, yet he refuses to speak." }, accept: ["witness", "the bystander"] },
        { id: "fr-u82l4-quotidien", type: "vocab", front: "quotidien", reading: "quotidien", meaning: "daily", example: { jp: "C'est un problème quotidien pour tout le monde ici.", en: "It's a daily problem for everyone here." }, accept: ["everyday", "day-to-day"], hint: "Also a noun: le quotidien is daily life — and a daily paper." },
        { id: "fr-u82l4-general", type: "vocab", front: "général", reading: "general", meaning: "general", example: { jp: "Le résultat général est bon, même s'il reste du travail à faire.", en: "The general result is good, even if there's work left to do." }, accept: ["overall", "broad", "widespread"], hint: "en général = generally. Plural généraux, like most -al adjectives." },
      ],
    },
  ],
};
