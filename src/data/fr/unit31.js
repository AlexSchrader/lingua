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
        { id: "fr-u31l1-lebureau", type: "vocab", front: "le bureau", reading: "lebureau", meaning: "office", example: { jp: "Je travaille dans un bureau.", en: "I work in an office." }, drill: { jp: "Je travaille dans le bureau", en: "I work in the office" }, accept: ["the office", "desk", "study"], hint: "Same word for the desk you sit at and the room it's in." },
        { id: "fr-u31l1-lentreprise", type: "vocab", front: "l'entreprise", reading: "lentreprise", meaning: "company", example: { jp: "Mon entreprise est à Paris.", en: "My company is in Paris." }, accept: ["business", "firm", "the company"], drill: { jp: "L'entreprise de mon père est grande", en: "My father's company is big" }, hint: "\"on-truh-PREEZ\" — a nasal start, the s buzzing as a z, and a silent final e. Feminine: une entreprise, from entreprendre, to undertake." },
        { id: "fr-u31l1-lecollegue", type: "vocab", front: "le collègue", reading: "lecollegue", meaning: "colleague", example: { jp: "Mon collègue est très sympa.", en: "My colleague is really nice." }, drill: { jp: "Le collègue est très sympa", en: "The colleague is very nice" }, accept: ["co-worker", "workmate", "the colleague"], hint: "\"ko-LEG\" — the è is open and gue is a hard g with the ue silent. One form for both genders: le collègue, la collègue." },
        { id: "fr-u31l1-lepatron", type: "vocab", front: "le patron", reading: "lepatron", meaning: "boss", example: { jp: "Le patron est dans son bureau.", en: "The boss is in his office." }, accept: ["the boss", "manager", "owner"], drill: { jp: "Le patron arrive à neuf heures", en: "The boss arrives at nine o'clock" }, hint: "\"pa-TRON\" — nasal ending, tongue nowhere near the n. Masculine: le patron; une patronne for a woman, where the n finally sounds." },
        { id: "fr-u31l1-lareunion", type: "vocab", front: "la réunion", reading: "lareunion", meaning: "meeting", example: { jp: "La réunion est à dix heures.", en: "The meeting is at ten o'clock." }, accept: ["the meeting", "a meeting", "get-together"], drill: { jp: "La réunion commence dans dix minutes", en: "The meeting starts in ten minutes" }, hint: "\"ray-ew-NYON\" — three distinct vowels in a row: \"ay\", the tight u, then a nasal \"yon\". Feminine, like every -ion noun." },
        { id: "fr-u31l1-lesalaire", type: "vocab", front: "le salaire", reading: "lesalaire", meaning: "salary", example: { jp: "J'ai un bon salaire.", en: "I have a good salary." }, accept: ["wage", "pay", "the salary"], drill: { jp: "Le salaire de ma sœur est petit", en: "My sister's salary is small" }, hint: "\"sa-LAIR\" — the -aire ending is \"air\". Masculine: le salaire, from the Latin word for salt, part of what a Roman soldier was paid in." },
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
        { id: "fr-u31l2-lemetier", type: "vocab", front: "le métier", reading: "lemetier", meaning: "trade", example: { jp: "Quel est ton métier ?", en: "What do you do for a living?" }, accept: ["job", "profession", "occupation"], drill: { jp: "Le métier de mon frère est difficile", en: "My brother's trade is difficult" }, hint: "\"may-TYAY\" — the é is \"ay\" and -ier is the \"yay\" glide. Masculine: le métier. Quel est ton métier ? is how you ask what someone does." },
        { id: "fr-u31l2-chez", type: "vocab", front: "chez", reading: "chez", meaning: "at (someone's place)", example: { jp: "Je vais chez le dentiste.", en: "I'm going to the dentist's." }, accept: ["to someones place", "at the house of", "at"], drill: { jp: "Je mange chez mes parents ce soir", en: "I eat at my parents' place tonight" }, hint: "chez always takes a person, never a place: chez le médecin, chez Marie, chez moi." },
        { id: "fr-u31l2-lingenieur", type: "vocab", front: "l'ingénieur", reading: "lingenieur", meaning: "engineer", example: { jp: "Mon frère est ingénieur.", en: "My brother is an engineer." }, drill: { jp: "L'ingénieur travaille dans le bureau", en: "The engineer works in the office" }, accept: ["the engineer", "engineer", "an engineer", "someone who designs machines and structures", "engineers"], hint: "No article after être with a job: il est ingénieur, never il est un ingénieur." },
        { id: "fr-u31l2-lagriculteur", type: "vocab", front: "l'agriculteur", reading: "lagriculteur", meaning: "farmer", example: { jp: "Mon père est agriculteur.", en: "My father is a farmer." }, accept: ["the farmer", "farmer", "a farmer", "someone who grows crops for a living", "farmers"], drill: { jp: "L'agriculteur travaille tous les jours", en: "The farmer works every day" }, hint: "\"a-gree-kewl-TUR\" — the tight u in the middle and eu before r as the open rounded vowel. Masculine; une agricultrice for a woman." },
        { id: "fr-u31l2-lecoiffeur", type: "vocab", front: "le coiffeur", reading: "lecoiffeur", meaning: "hairdresser", example: { jp: "Je vais chez le coiffeur.", en: "I'm going to the hairdresser's." }, accept: ["barber", "the hairdresser", "a hairdresser"], drill: { jp: "Le coiffeur est près du marché", en: "The hairdresser is near the market" }, hint: "\"kwa-FUR\" — oi is \"wah\" and eu before r is open. Une coiffeuse for a woman, and une coiffure is a hairstyle." },
        { id: "fr-u31l2-lepolicier", type: "vocab", front: "le policier", reading: "lepolicier", meaning: "police officer", example: { jp: "Il y a un policier dans la rue.", en: "There's a police officer in the street." }, drill: { jp: "Le policier est dans la rue", en: "The police officer is in the street" }, accept: ["policeman", "the police officer", "cop"], hint: "\"po-lee-SYAY\" — the c is soft before i and -ier is the \"yay\" glide. Masculine: un policier. Un film policier is a crime film." },
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
        { id: "fr-u31l3-lecours", type: "vocab", front: "le cours", reading: "lecours", meaning: "class (a lesson)", example: { jp: "Le cours de français est à neuf heures.", en: "The French class is at nine o'clock." }, accept: ["course", "the class", "a lesson"], drill: { jp: "Le cours commence à huit heures", en: "The class starts at eight o'clock" }, hint: "\"koor\" — ou is \"oo\" and the s is silent, so singular and plural sound identical. Masculine: le cours. La cour, with no s, is a courtyard." },
        { id: "fr-u31l3-leleve", type: "vocab", front: "l'élève", reading: "leleve", meaning: "pupil", example: { jp: "L'élève est dans la classe.", en: "The pupil is in the classroom." }, accept: ["schoolchild", "the pupil", "a pupil"], drill: { jp: "L'élève écoute le professeur", en: "The pupil listens to the teacher" }, hint: "l'élève is at school; l'étudiant is at university." },
        { id: "fr-u31l3-laclasse", type: "vocab", front: "la classe", reading: "laclasse", meaning: "classroom", example: { jp: "Il y a vingt élèves dans la classe.", en: "There are twenty pupils in the classroom." }, accept: ["the classroom", "form", "the class"], drill: { jp: "La classe est très grande", en: "The classroom is very big" }, hint: "\"klass\" — the double s is hard and the final e is silent. Feminine: la classe, meaning both the room and the group of pupils in it." },
        { id: "fr-u31l3-lelycee", type: "vocab", front: "le lycée", reading: "lelycee", meaning: "secondary school", example: { jp: "Mon frère est au lycée.", en: "My brother is at secondary school." }, accept: ["high school", "sixth form", "the lycee"], drill: { jp: "Le lycée est loin de la maison", en: "The secondary school is far from home" }, hint: "\"lee-SAY\" — the c is soft before e and -ée is one closed \"ay\". Masculine in spite of the ending. It covers roughly ages 15 to 18." },
        { id: "fr-u31l3-luniversite", type: "vocab", front: "l'université", reading: "luniversite", meaning: "university", example: { jp: "Ma sœur est à l'université.", en: "My sister is at university." }, accept: ["college", "the university", "a university"], drill: { jp: "L'université de Paris est belle", en: "The university of Paris is beautiful" }, hint: "\"ew-nee-vair-see-TAY\" — the tight French u at the start and -té as the closed \"ay\". Feminine, like every -té noun." },
        { id: "fr-u31l3-lexamen", type: "vocab", front: "l'examen", reading: "lexamen", meaning: "exam", example: { jp: "L'examen est difficile.", en: "The exam is difficult." }, accept: ["test", "the exam", "examination"], drill: { jp: "L'examen commence à deux heures", en: "The exam starts at two o'clock" }, hint: "\"eg-za-MAN\" — the x sounds as \"gz\" and -en is nasal \"an\" here, not \"on\". Masculine: un examen. Careful: passer un examen means to SIT one, not to pass it." },
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
        { id: "fr-u31l4-etudier", type: "vocab", front: "étudier", reading: "etudier", meaning: "to study", example: { jp: "Je vais étudier le français.", en: "I'm going to study French." }, accept: ["study", "to revise", "to do some study"], drill: { jp: "Ma sœur va étudier à l'université", en: "My sister is going to study at university" }, hint: "\"ay-tew-DYAY\" — the é is \"ay\", the u tight, and -ier the \"yay\" glide. Same root as un étudiant." },
        { id: "fr-u31l4-apprendre", type: "vocab", front: "apprendre", reading: "apprendre", meaning: "to learn", example: { jp: "J'aime apprendre le français.", en: "I like learning French." }, accept: ["learn", "to pick up", "to learn about"], drill: { jp: "Je vais apprendre l'espagnol cette année", en: "I am going to learn Spanish this year" }, hint: "\"a-PRONDR\" — nasal -en, and the final -re is a breath. It is prendre, to take, with ap- in front: taking something in." },
        { id: "fr-u31l4-enseigner", type: "vocab", front: "enseigner", reading: "enseigner", meaning: "to teach", example: { jp: "Le professeur va enseigner l'anglais.", en: "The teacher is going to teach English." }, accept: ["teach", "to give lessons", "to instruct"], drill: { jp: "Mon père va enseigner le français", en: "My father is going to teach French" }, hint: "\"on-say-NYAY\" — a nasal start, and gn is the \"ny\" of onion. Un enseignant is a teacher, the formal word alongside professeur." },
        { id: "fr-u31l4-lanote", type: "vocab", front: "la note", reading: "lanote", meaning: "mark", example: { jp: "J'ai une bonne note.", en: "I have a good mark." }, accept: ["grade", "score", "the mark"], drill: { jp: "La note de l'examen est bonne", en: "The exam mark is good" }, hint: "Also the note you write down — same word for both." },
        { id: "fr-u31l4-lesdevoirs", type: "vocab", front: "les devoirs", reading: "lesdevoirs", meaning: "homework", example: { jp: "Je fais mes devoirs le soir.", en: "I do my homework in the evening." }, accept: ["the homework", "assignments", "school work"], drill: { jp: "Les devoirs sont très difficiles aujourd'hui", en: "The homework is very hard today" }, hint: "\"duh-VWAR\" — oi is \"wah\" and the s is silent. Masculine plural: les devoirs. In the singular, le devoir means duty." },
        { id: "fr-u31l4-lamatiere", type: "vocab", front: "la matière", reading: "lamatiere", meaning: "school subject", example: { jp: "J'aime cette matière.", en: "I like this subject." }, accept: ["subject", "the subject", "a school subject"], drill: { jp: "La matière est difficile pour moi", en: "The subject is difficult for me" }, hint: "\"ma-TYAIR\" — ie is one glide and the è is open. Feminine: la matière, which also means matter or material." },
      ],
    },
  ],
};
