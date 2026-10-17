// FR Unit 14 — Les mois ("Months") — A1
// The twelve months, the seasons, and the calendar words. Months and seasons are
// lowercase in French, like the days in Unit 7. `en` (in) is taught here because
// it's the preposition every date needs: en janvier, en été.
// Conventions: see fr/unit1.js.
export const FR_UNIT15 = {
  id: "fr-u15",
  lang: "fr",
  title: "Les mois",
  order: 15,
  stage: "a1",
  lessons: [
    {
      id: "fr-u15l1",
      unit: 15,
      lesson: 1,
      title: "January to June",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the first six months and place things in time with en.",
      items: [
        { id: "fr-u15l1-en", type: "vocab", front: "en", reading: "en", meaning: "in", example: { jp: "En mai, je vais à Paris.", en: "In May, I'm going to Paris." }, drill: { jp: "Je pars en France demain", en: "I'm leaving for France tomorrow" }, accept: ["to", "during", "in the month of"], hint: "en + month or season: en janvier, en été. (Days don't take it: lundi, je travaille.)" },
        { id: "fr-u15l1-janvier", type: "vocab", front: "janvier", reading: "janvier", meaning: "January", example: { jp: "En janvier, il fait très froid.", en: "In January, it's very cold." }, drill: { jp: "En janvier il fait froid", en: "In January it's cold" }, accept: ["january", "jan", "in january"], hint: "Months are lowercase in French, just like the days." },
        { id: "fr-u15l1-fevrier", type: "vocab", front: "février", reading: "fevrier", meaning: "February", example: { jp: "En février, il neige souvent.", en: "In February, it often snows." }, drill: { jp: "En février il neige souvent", en: "In February it often snows" }, accept: ["february", "feb", "in february"], hint: "\"fay-vree-AY\" — three syllables, both é's the closed \"ay\", and the r comes before the i, not after. Lowercase, like every month." },
        { id: "fr-u15l1-mars", type: "vocab", front: "mars", reading: "mars", meaning: "March", example: { jp: "En mars, il pleut beaucoup.", en: "In March, it rains a lot." }, drill: { jp: "En mars il pleut beaucoup", en: "In March it rains a lot" }, accept: ["march", "mar", "in march"], hint: "\"marss\" — unusually, the final s IS pronounced here. Same word as the planet and the god, which do take a capital M." },
        { id: "fr-u15l1-avril", type: "vocab", front: "avril", reading: "avril", meaning: "April", example: { jp: "En avril, il fait doux.", en: "In April, it's mild." }, drill: { jp: "En avril le temps est doux", en: "In April the weather is mild" }, accept: ["april", "apr", "in april"], hint: "\"a-VREEL\" — the final l sounds. Un poisson d'avril is the April Fool's prank: a paper fish stuck on your back." },
        { id: "fr-u15l1-mai", type: "vocab", front: "mai", reading: "mai", meaning: "May", example: { jp: "En mai, il y a beaucoup de fleurs.", en: "In May, there are a lot of flowers." }, drill: { jp: "En mai il fait beau", en: "In May the weather is fine" }, accept: ["may", "in may", "the month of may"], hint: "\"meh\" — ai is the open \"eh\", so it is one short syllable, nothing like English \"may\". Le premier mai is a public holiday." },
        { id: "fr-u15l1-juin", type: "vocab", front: "juin", reading: "juin", meaning: "June", example: { jp: "En juin, il fait beau.", en: "In June, the weather is nice." }, drill: { jp: "En juin il fait chaud", en: "In June it's hot" }, accept: ["june", "jun", "in june"], hint: "\"zhwan\" — soft zh, then ui nasalised by the n, all in one syllable. Resist saying it like English \"June\"." },
      ],
    },
    {
      id: "fr-u15l2",
      unit: 15,
      lesson: 2,
      title: "July to December",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the last six months: juillet, août, septembre, octobre, novembre, décembre.",
      items: [
        { id: "fr-u15l2-juillet", type: "vocab", front: "juillet", reading: "juillet", meaning: "July", example: { jp: "En juillet, il fait très chaud.", en: "In July, it's very hot." }, drill: { jp: "En juillet je pars à la mer", en: "In July I go to the sea" }, accept: ["july", "jul", "in july"], hint: "\"zhwee-YAY\" — soft zh, ui as a glide, and ill as the \"ee-y\" of papillon. Le quatorze juillet is the national holiday." },
        { id: "fr-u15l2-aout", type: "vocab", front: "août", reading: "aout", meaning: "August", example: { jp: "En août, je vais à la plage.", en: "In August, I go to the beach." }, drill: { jp: "En août il fait très chaud", en: "In August it's very hot" }, accept: ["august", "aug", "in august"], hint: "Two vowels, one sound: \"oot\". In August much of France is away." },
        { id: "fr-u15l2-septembre", type: "vocab", front: "septembre", reading: "septembre", meaning: "September", example: { jp: "En septembre, l'école commence.", en: "In September, school starts." }, drill: { jp: "En septembre je rentre au travail", en: "In September I go back to work" }, accept: ["september", "sep", "in september"], hint: "\"sep-TOMBR\" — here the p of sept DOES sound, unlike in the number seven. Nasal -em, and the final -re is barely a breath." },
        { id: "fr-u15l2-octobre", type: "vocab", front: "octobre", reading: "octobre", meaning: "October", example: { jp: "En octobre, il fait frais.", en: "In October, it's cool." }, drill: { jp: "En octobre le vent est fort", en: "In October the wind is strong" }, accept: ["october", "oct", "in october"], hint: "\"ok-TOBR\" — it ends in the same barely-there -bre as septembre, novembre and décembre. Learn all four as one family." },
        { id: "fr-u15l2-novembre", type: "vocab", front: "novembre", reading: "novembre", meaning: "November", example: { jp: "En novembre, il fait froid.", en: "In November, it's cold." }, drill: { jp: "En novembre il pleut souvent", en: "In November it often rains" }, accept: ["november", "nov", "in november"], hint: "\"no-VOMBR\" — nasal -em, and the -bre is a breath. Third of the four -bre months." },
        { id: "fr-u15l2-decembre", type: "vocab", front: "décembre", reading: "decembre", meaning: "December", example: { jp: "En décembre, il neige.", en: "In December, it snows." }, drill: { jp: "En décembre il neige ici", en: "In December it snows here" }, accept: ["december", "dec", "in december"], hint: "\"day-SOMBR\" — the é is \"ay\" and the c is soft before e. Last of the four -bre months." },
        { id: "fr-u15l2-lemois", type: "vocab", front: "le mois", reading: "lemois", meaning: "month", example: { jp: "Quel mois ? Avril.", en: "Which month? April." }, drill: { jp: "Le mois de mai est doux", en: "The month of May is mild" }, accept: ["the month", "month", "a month", "one of the twelve parts of a year", "months"], hint: "\"mwah\" — oi is \"wah\" and the s is silent, so singular and plural sound identical. Masculine: le mois, les mois." },
      ],
    },
    {
      id: "fr-u15l3",
      unit: 15,
      lesson: 3,
      title: "Seasons and dates",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the seasons and give a date: le printemps, l'été, l'automne, l'hiver, l'année, la semaine, la date.",
      items: [
        { id: "fr-u15l3-leprintemps", type: "vocab", front: "le printemps", reading: "leprintemps", meaning: "spring", example: { jp: "Le printemps commence en mars.", en: "Spring starts in March." }, drill: { jp: "Le printemps est ma saison", en: "Spring is my season" }, accept: ["the spring", "springtime", "in spring"], hint: "\"pran-TON\" — nasal twice, and the -ps on the end is completely silent. It is the one season that takes au: au printemps." },
        { id: "fr-u15l3-lete", type: "vocab", front: "l'été", reading: "lete", meaning: "summer", example: { jp: "En été, il fait chaud et sec.", en: "In summer, it's hot and dry." }, drill: { jp: "L'été est très chaud ici", en: "Summer is very hot here" }, accept: ["the summer", "summertime", "in summer"], hint: "\"ay-TAY\" — both é's are the closed \"ay\". Masculine, hidden by l'. En été means in summer; the look-alike été also means been." },
        { id: "fr-u15l3-lautomne", type: "vocab", front: "l'automne", reading: "lautomne", meaning: "autumn", example: { jp: "En automne, la forêt est très jolie.", en: "In autumn, the forest is very pretty." }, drill: { jp: "L'automne est doux cette année", en: "Autumn is mild this year" }, accept: ["the autumn", "fall", "the fall", "the season after summer"], hint: "\"o-TON\" — au is \"oh\" and the m is silent, so you never hear the mn. Masculine: en automne." },
        { id: "fr-u15l3-lhiver", type: "vocab", front: "l'hiver", reading: "lhiver", meaning: "winter", example: { jp: "En hiver, il neige à la montagne.", en: "In winter, it snows in the mountains." }, drill: { jp: "L'hiver est long ici", en: "Winter is long here" }, accept: ["the winter", "wintertime", "in winter"], hint: "\"ee-VAIR\" — the h is silent and the r sounds. Masculine: en hiver. Hivernal is the adjective, wintry." },
        { id: "fr-u15l3-lannee", type: "vocab", front: "l'année", reading: "lannee", meaning: "year", example: { jp: "Bonne année !", en: "Happy New Year!" }, drill: { jp: "L'année commence en janvier", en: "The year starts in January" }, accept: ["the year", "year", "a year", "twelve months", "years"], hint: "Bonne année ! is what everyone says on 1 January." },
        { id: "fr-u15l3-lasemaine", type: "vocab", front: "la semaine", reading: "lasemaine", meaning: "week", example: { jp: "Cette semaine, je travaille beaucoup.", en: "This week, I'm working a lot." }, drill: { jp: "La semaine commence lundi", en: "The week starts on Monday" }, accept: ["the week", "week", "a week", "seven days", "weeks"], hint: "cette = this (feminine): cette semaine, this week." },
        { id: "fr-u15l3-ladate", type: "vocab", front: "la date", reading: "ladate", meaning: "date", example: { jp: "Quelle est la date aujourd'hui ?", en: "What's the date today?" }, drill: { jp: "La date est le trente mai", en: "The date is the thirtieth of May" }, accept: ["the date", "date", "the day's date", "the day month and year"], hint: "\"dat\" — the final e is what makes the t sound. Feminine: la date. French writes day before month: le 14 juillet." },
      ],
    },
  ],
};
