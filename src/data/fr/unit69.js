// FR Unit 69 — Les projets et les intentions (slot: plans and intentions) — B1
// SCOPE BOUNDARY: A2 owns the basic future (je vais + inf, demain, bientôt, le
// plan, décider, espérer); the sibling blocks own l'objectif, fixer, organiser,
// promettre, and this block's own u63 owns le projet, u61 envisager. So this unit
// is the register above: stating intent (avoir l'intention de, compter, viser,
// tenir à), planning (prévoir, planifier, l'échéance, à long terme), drive
// (déterminé, ambitieux, s'engager, aspirer) and what's ahead (reporter, à venir,
// le calendrier). Fronts checked against the live 1,287 and the sibling B1
// blocks. Conventions: fr/unit1.js.
export const FR_UNIT69 = {
  id: "fr-u69",
  lang: "fr",
  title: "Les projets et les intentions",
  order: 69,
  stage: "b1",
  lessons: [
    {
      id: "fr-u69l1",
      unit: 69,
      lesson: 1,
      title: "Stating an intention",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what you mean to do: avoir l'intention de, compter, viser, un souhait.",
      items: [
        { id: "fr-u69l1-avoirlintentionde", type: "vocab", front: "avoir l'intention de", reading: "avoirlintentionde", meaning: "to intend to", example: { jp: "J'ai l'intention de changer de travail bientôt.", en: "I intend to change jobs soon." }, accept: ["to intend to", "to mean to", "to plan to"], hint: "To intend to — avoir l'intention de faire. A firm plan, not just a wish." },
        { id: "fr-u69l1-compter", type: "vocab", front: "compter", reading: "compter", meaning: "to plan to", example: { jp: "Je compte finir ce livre avant la fin du mois.", en: "I plan to finish this book before the end of the month." }, accept: ["to plan to", "to intend to", "to count", "to reckon"], hint: "compter + infinitive = to plan/intend to. Also to count, and to matter." },
        { id: "fr-u69l1-viser", type: "vocab", front: "viser", reading: "viser", meaning: "to aim for", example: { jp: "Elle vise un bon résultat à l'examen.", en: "She's aiming for a good result in the exam." }, accept: ["to aim for", "to target", "to aim"], hint: "To aim for / target — viser un objectif. Also to aim a weapon." },
        { id: "fr-u69l1-tenira", type: "vocab", front: "tenir à", reading: "tenira", meaning: "to be keen to", example: { jp: "Elle tient à finir son travail toute seule.", en: "She insists on finishing her work all by herself." }, drill: { jp: "Elle va tenir à finir seule", en: "She is going to be keen to finish alone" }, accept: ["to be keen to", "to insist on", "to be attached to"], hint: "tenir à faire = to be keen to / insist on. Also to be attached to: je tiens à toi." },
        { id: "fr-u69l1-lesouhait", type: "vocab", front: "le souhait", reading: "lesouhait", meaning: "the wish", example: { jp: "Son souhait, c'est de trouver un bon travail.", en: "His wish is to find a good job." }, drill: { jp: "Le souhait est très simple", en: "The wish is very simple" }, accept: ["wish", "the desire"], hint: "A wish — faire un souhait = to make a wish. In France, best wishes = meilleurs vœux."},
        { id: "fr-u69l1-souhaiter", type: "vocab", front: "souhaiter", reading: "souhaiter", meaning: "to wish", example: { jp: "Je vous souhaite une bonne année !", en: "I wish you a happy new year!" }, accept: ["to wish"], hint: "To wish — souhaiter bonne chance. souhaiter que + subjunctive." },
      ],
    },
    {
      id: "fr-u69l2",
      unit: 69,
      lesson: 2,
      title: "Planning ahead",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Plan and schedule: prévoir, planifier, préparer, une échéance.",
      items: [
        { id: "fr-u69l2-prevoir", type: "vocab", front: "prévoir", reading: "prevoir", meaning: "to plan for", example: { jp: "Il faut prévoir assez de temps pour le voyage.", en: "You have to allow enough time for the trip." }, accept: ["to plan for", "to foresee", "to expect", "to allow for"], hint: "To plan ahead or to foresee — comme prévu = as planned." },
        { id: "fr-u69l2-planifier", type: "vocab", front: "planifier", reading: "planifier", meaning: "to plan", example: { jp: "Il faut bien planifier chaque étape.", en: "You have to plan each step carefully." }, accept: ["to plan", "to schedule", "to map out"], hint: "To plan out, schedule — planifier un projet. From le plan." },
        { id: "fr-u69l2-preparer", type: "vocab", front: "préparer", reading: "preparer", meaning: "to prepare", example: { jp: "Elle prépare son examen depuis des semaines.", en: "She's been preparing for her exam for weeks." }, accept: ["to prepare", "to get ready"], hint: "To prepare, get ready — préparer un repas, un examen. se préparer = to get ready." },
        { id: "fr-u69l2-leprogramme", type: "vocab", front: "le programme", reading: "leprogramme", meaning: "the schedule", example: { jp: "Quel est le programme pour demain ?", en: "What's the plan for tomorrow?" }, accept: ["the schedule", "the programme", "the plan", "the program"], hint: "A programme, plan or schedule — le programme de la journée. Also TV or software." },
        { id: "fr-u69l2-lecheance", type: "vocab", front: "l'échéance", reading: "lecheance", meaning: "the deadline", example: { jp: "Il reste peu de temps avant l'échéance.", en: "There's little time left before the deadline." }, accept: ["deadline", "the due date"], hint: "A deadline or due date — respecter une échéance. Also a payment date." },
        { id: "fr-u69l2-alongterme", type: "vocab", front: "à long terme", reading: "alongterme", meaning: "in the long term", example: { jp: "À long terme, ce choix sera le meilleur.", en: "In the long term, this choice will be the best." }, accept: ["in the long term", "in the long run"], hint: "In the long run — the opposite of à court terme. un projet à long terme." },
      ],
    },
    {
      id: "fr-u69l3",
      unit: 69,
      lesson: 3,
      title: "Drive and ambition",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe determination: déterminé, motivé, ambitieux, s'engager.",
      items: [
        { id: "fr-u69l3-determine", type: "vocab", front: "déterminé", reading: "determine", meaning: "determined", example: { jp: "Elle est très déterminée à réussir.", en: "She is very determined to succeed." }, accept: ["determined", "resolved"], hint: "Determined, resolved — déterminé à faire. From déterminer." },
        { id: "fr-u69l3-motive", type: "vocab", front: "motivé", reading: "motive", meaning: "motivated", example: { jp: "Un employé motivé travaille mieux.", en: "A motivated employee works better." }, accept: ["motivated", "keen"], hint: "Motivated, keen — from la motivation. être motivé pour faire." },
        { id: "fr-u69l3-ambitieux", type: "vocab", front: "ambitieux", reading: "ambitieux", meaning: "ambitious", example: { jp: "C'est un projet ambitieux mais intéressant.", en: "It's an ambitious but interesting project." }, accept: ["ambitious"], hint: "Ambitious — un projet ambitieux, une personne ambitieuse. From l'ambition." },
        { id: "fr-u69l3-lambition", type: "vocab", front: "l'ambition", reading: "lambition", meaning: "the ambition", example: { jp: "Il a une grande ambition : devenir médecin.", en: "He has a big ambition: to become a doctor." }, drill: { jp: "L'ambition est très grande", en: "The ambition is very great" }, accept: ["ambition"], hint: "Ambition, a driving goal — avoir de l'ambition. réaliser son ambition." },
        { id: "fr-u69l3-sengager", type: "vocab", front: "s'engager", reading: "sengager", meaning: "to commit", example: { jp: "Il s'est engagé à finir le travail à temps.", en: "He committed to finishing the work on time." }, accept: ["to commit", "to pledge", "to undertake"], hint: "To commit oneself — s'engager à faire. Also to join up (army) or take a path." },
        { id: "fr-u69l3-aspirer", type: "vocab", front: "aspirer", reading: "aspirer", meaning: "to aspire", example: { jp: "Elle aspire à une vie plus calme.", en: "She aspires to a quieter life." }, accept: ["to aspire", "to long for", "to yearn for"], hint: "aspirer à = to aspire to, long for. Also to breathe in / suck up." },
      ],
    },
    {
      id: "fr-u69l4",
      unit: 69,
      lesson: 4,
      title: "What lies ahead",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about timing and what's to come: à court terme, reporter, à venir, prochainement.",
      items: [
        { id: "fr-u69l4-acourtterme", type: "vocab", front: "à court terme", reading: "acourtterme", meaning: "in the short term", example: { jp: "À court terme, la situation ne va pas changer.", en: "In the short term, the situation won't change." }, accept: ["in the short term", "in the short run"], hint: "In the short run — the opposite of à long terme. penser à court terme." },
        { id: "fr-u69l4-reporter", type: "vocab", front: "reporter", reading: "reporter", meaning: "to postpone", example: { jp: "La réunion est reportée à demain matin.", en: "The meeting is postponed until tomorrow morning." }, accept: ["to postpone", "to put back", "to put off"], hint: "To postpone, put back — reporter un rendez-vous. Not 'to report'!" },
        { id: "fr-u69l4-remettre", type: "vocab", front: "remettre", reading: "remettre", meaning: "to put off", example: { jp: "Ne remets pas à demain ce que tu peux faire aujourd'hui.", en: "Don't put off until tomorrow what you can do today." }, drill: { jp: "Il va remettre le travail à demain", en: "He is going to put the work off until tomorrow" }, accept: ["to put off", "to hand in", "to put back"], hint: "To put off (remettre à plus tard), or to hand in / put back. From mettre." },
        { id: "fr-u69l4-avenir", type: "vocab", front: "à venir", reading: "avenir", meaning: "upcoming", example: { jp: "Dans les jours à venir, il fera plus froid.", en: "In the coming days, it will be colder." }, accept: ["upcoming", "to come", "coming"], hint: "Upcoming, still to come — les jours à venir. les générations à venir = future generations." },
        { id: "fr-u69l4-lecalendrier", type: "vocab", front: "le calendrier", reading: "lecalendrier", meaning: "the calendar", example: { jp: "Le calendrier des examens est enfin sorti.", en: "The exam calendar is finally out." }, accept: ["calendar", "the schedule", "the timetable"], hint: "A calendar, or a schedule of dates — le calendrier scolaire." },
        { id: "fr-u69l4-prochainement", type: "vocab", front: "prochainement", reading: "prochainement", meaning: "shortly", example: { jp: "Ce film sortira prochainement au cinéma.", en: "This film will be out shortly in cinemas." }, accept: ["shortly", "soon", "in the near future"], hint: "Soon, shortly — often on adverts: prochainement dans vos salles." },
      ],
    },
  ],
};
