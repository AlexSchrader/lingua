// FR Unit 31 — Le travail et l'école ("Work and school") — A2
// A1 taught the word le travail and six job names (u24l1). This unit is the
// place, the people and the school system around them: the office, the boss and
// the meeting; four more trades; the classroom; and what you do there — study,
// learn, teach, hand in homework.
// chez lands here rather than in a grammar unit: it is the word every one of
// these sentences needs (chez le dentiste, chez le coiffeur), and per the
// runbook a function word is taught as vocab whose examples carry the pattern.
// Conventions + the A2 infinitive decision: see the header of fr/unit28.js.
export const FR_UNIT31 = {
  id: "fr-u31",
  lang: "fr",
  title: "Le travail et l'école",
  order: 31,
  stage: "a2",
  lessons: [
    {
      id: "fr-u31l1",
      unit: 31,
      lesson: 1,
      title: "At the office",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe where you work and who's there: the office, the company, a colleague, the boss, the meeting, the pay.",
      items: [
        { id: "fr-u31l1-lebureau", type: "vocab", front: "le bureau", reading: "lebureau", meaning: "office", example: { jp: "Je travaille dans un bureau.", en: "I work in an office." }, accept: ["the office", "desk", "study"], hint: "Same word for the desk you sit at and the room it's in." },
        { id: "fr-u31l1-lentreprise", type: "vocab", front: "l'entreprise", reading: "lentreprise", meaning: "company", example: { jp: "Mon entreprise est à Paris.", en: "My company is in Paris." }, accept: ["business", "firm", "the company"] },
        { id: "fr-u31l1-lecollegue", type: "vocab", front: "le collègue", reading: "lecollegue", meaning: "colleague", example: { jp: "Mon collègue est très sympa.", en: "My colleague is really nice." }, accept: ["co-worker", "workmate", "the colleague"] },
        { id: "fr-u31l1-lepatron", type: "vocab", front: "le patron", reading: "lepatron", meaning: "boss", example: { jp: "Le patron est dans son bureau.", en: "The boss is in his office." }, accept: ["the boss", "manager", "owner"] },
        { id: "fr-u31l1-lareunion", type: "vocab", front: "la réunion", reading: "lareunion", meaning: "meeting", example: { jp: "La réunion est à dix heures.", en: "The meeting is at ten o'clock." }, accept: ["the meeting", "a meeting"] },
        { id: "fr-u31l1-lesalaire", type: "vocab", front: "le salaire", reading: "lesalaire", meaning: "salary", example: { jp: "J'ai un bon salaire.", en: "I have a good salary." }, accept: ["wage", "pay", "the salary"] },
      ],
    },
    {
      id: "fr-u31l2",
      unit: 31,
      lesson: 2,
      title: "Trades",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Ask what someone does for a living, name four more trades, and say you're going to somebody's place with chez.",
      items: [
        { id: "fr-u31l2-lemetier", type: "vocab", front: "le métier", reading: "lemetier", meaning: "trade", example: { jp: "Quel est ton métier ?", en: "What do you do for a living?" }, accept: ["job", "profession", "occupation"] },
        { id: "fr-u31l2-chez", type: "vocab", front: "chez", reading: "chez", meaning: "at (someone's place)", example: { jp: "Je vais chez le dentiste.", en: "I'm going to the dentist's." }, accept: ["to someones place", "at the house of", "at"], hint: "chez always takes a person, never a place: chez le médecin, chez Marie, chez moi." },
        { id: "fr-u31l2-lingenieur", type: "vocab", front: "l'ingénieur", reading: "lingenieur", meaning: "engineer", example: { jp: "Mon frère est ingénieur.", en: "My brother is an engineer." }, accept: ["the engineer"], hint: "No article after être with a job: il est ingénieur, never il est un ingénieur." },
        { id: "fr-u31l2-lagriculteur", type: "vocab", front: "l'agriculteur", reading: "lagriculteur", meaning: "farmer", example: { jp: "Mon père est agriculteur.", en: "My father is a farmer." }, accept: ["the farmer"] },
        { id: "fr-u31l2-lecoiffeur", type: "vocab", front: "le coiffeur", reading: "lecoiffeur", meaning: "hairdresser", example: { jp: "Je vais chez le coiffeur.", en: "I'm going to the hairdresser's." }, accept: ["barber", "the hairdresser"] },
        { id: "fr-u31l2-lepolicier", type: "vocab", front: "le policier", reading: "lepolicier", meaning: "police officer", example: { jp: "Il y a un policier dans la rue.", en: "There's a police officer in the street." }, accept: ["policeman", "the police officer", "cop"] },
      ],
    },
    {
      id: "fr-u31l3",
      unit: 31,
      lesson: 3,
      title: "At school",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about school: the class, the pupils, the classroom, secondary school, university and the exam.",
      items: [
        { id: "fr-u31l3-lecours", type: "vocab", front: "le cours", reading: "lecours", meaning: "class (a lesson)", example: { jp: "Le cours de français est à neuf heures.", en: "The French class is at nine o'clock." }, accept: ["lesson", "course", "the class"] },
        { id: "fr-u31l3-leleve", type: "vocab", front: "l'élève", reading: "leleve", meaning: "pupil", example: { jp: "L'élève est dans la classe.", en: "The pupil is in the classroom." }, accept: ["schoolchild", "the pupil"], hint: "l'élève is at school; l'étudiant is at university." },
        { id: "fr-u31l3-laclasse", type: "vocab", front: "la classe", reading: "laclasse", meaning: "classroom", example: { jp: "Il y a vingt élèves dans la classe.", en: "There are twenty pupils in the classroom." }, accept: ["the class", "the classroom", "form"] },
        { id: "fr-u31l3-lelycee", type: "vocab", front: "le lycée", reading: "lelycee", meaning: "secondary school", example: { jp: "Mon frère est au lycée.", en: "My brother is at secondary school." }, accept: ["high school", "sixth form", "the lycee"] },
        { id: "fr-u31l3-luniversite", type: "vocab", front: "l'université", reading: "luniversite", meaning: "university", example: { jp: "Ma sœur est à l'université.", en: "My sister is at university." }, accept: ["college", "the university"] },
        { id: "fr-u31l3-lexamen", type: "vocab", front: "l'examen", reading: "lexamen", meaning: "exam", example: { jp: "L'examen est difficile.", en: "The exam is difficult." }, accept: ["test", "the exam", "examination"] },
      ],
    },
    {
      id: "fr-u31l4",
      unit: 31,
      lesson: 4,
      title: "Studying",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you're studying, what you're learning, what mark you got and when you do your homework.",
      items: [
        { id: "fr-u31l4-etudier", type: "vocab", front: "étudier", reading: "etudier", meaning: "to study", example: { jp: "Je vais étudier le français.", en: "I'm going to study French." }, accept: ["study", "to revise"] },
        { id: "fr-u31l4-apprendre", type: "vocab", front: "apprendre", reading: "apprendre", meaning: "to learn", example: { jp: "J'aime apprendre le français.", en: "I like learning French." }, accept: ["learn", "to pick up"] },
        { id: "fr-u31l4-enseigner", type: "vocab", front: "enseigner", reading: "enseigner", meaning: "to teach", example: { jp: "Le professeur va enseigner l'anglais.", en: "The teacher is going to teach English." }, accept: ["teach", "to give lessons"] },
        { id: "fr-u31l4-lanote", type: "vocab", front: "la note", reading: "lanote", meaning: "mark", example: { jp: "J'ai une bonne note.", en: "I have a good mark." }, accept: ["grade", "score", "the mark"], hint: "Also the note you write down — same word for both." },
        { id: "fr-u31l4-lesdevoirs", type: "vocab", front: "les devoirs", reading: "lesdevoirs", meaning: "homework", example: { jp: "Je fais mes devoirs le soir.", en: "I do my homework in the evening." }, accept: ["the homework", "assignments"] },
        { id: "fr-u31l4-lamatiere", type: "vocab", front: "la matière", reading: "lamatiere", meaning: "school subject", example: { jp: "J'aime cette matière.", en: "I like this subject." }, accept: ["subject", "the subject"] },
      ],
    },
  ],
};
