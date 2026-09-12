// FR Unit 14 — Les mois ("Months") — A1
// The twelve months, the seasons, and the calendar words. Months and seasons are
// lowercase in French, like the days in Unit 7. `en` (in) is taught here because
// it's the preposition every date needs: en janvier, en été.
// Conventions: see fr/unit1.js.
export const FR_UNIT14 = {
  id: "fr-u14",
  lang: "fr",
  title: "Les mois",
  order: 15,
  stage: "a1",
  lessons: [
    {
      id: "fr-u14l1",
      unit: 14,
      lesson: 1,
      title: "January to June",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the first six months and place things in time with en.",
      items: [
        { id: "fr-u14l1-en", type: "vocab", front: "en", reading: "en", meaning: "in", example: { jp: "En mai, je vais à Paris.", en: "In May, I'm going to Paris." }, drill: { jp: "Je pars en France demain", en: "I'm leaving for France tomorrow" }, accept: ["to"], hint: "en + month or season: en janvier, en été. (Days don't take it: lundi, je travaille.)" },
        { id: "fr-u14l1-janvier", type: "vocab", front: "janvier", reading: "janvier", meaning: "January", example: { jp: "En janvier, il fait très froid.", en: "In January, it's very cold." }, drill: { jp: "En janvier il fait froid", en: "In January it's cold" }, accept: ["january"], hint: "Months are lowercase in French, just like the days." },
        { id: "fr-u14l1-fevrier", type: "vocab", front: "février", reading: "fevrier", meaning: "February", example: { jp: "En février, il neige souvent.", en: "In February, it often snows." }, drill: { jp: "En février il neige souvent", en: "In February it often snows" }, accept: ["february"] },
        { id: "fr-u14l1-mars", type: "vocab", front: "mars", reading: "mars", meaning: "March", example: { jp: "En mars, il pleut beaucoup.", en: "In March, it rains a lot." }, drill: { jp: "En mars il pleut beaucoup", en: "In March it rains a lot" }, accept: ["march"] },
        { id: "fr-u14l1-avril", type: "vocab", front: "avril", reading: "avril", meaning: "April", example: { jp: "En avril, il fait doux.", en: "In April, it's mild." }, drill: { jp: "En avril le temps est doux", en: "In April the weather is mild" }, accept: ["april"] },
        { id: "fr-u14l1-mai", type: "vocab", front: "mai", reading: "mai", meaning: "May", example: { jp: "En mai, il y a beaucoup de fleurs.", en: "In May, there are a lot of flowers." }, drill: { jp: "En mai il fait beau", en: "In May the weather is fine" }, accept: ["may"] },
        { id: "fr-u14l1-juin", type: "vocab", front: "juin", reading: "juin", meaning: "June", example: { jp: "En juin, il fait beau.", en: "In June, the weather is nice." }, drill: { jp: "En juin il fait chaud", en: "In June it's hot" }, accept: ["june"] },
      ],
    },
    {
      id: "fr-u14l2",
      unit: 14,
      lesson: 2,
      title: "July to December",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the last six months: juillet, août, septembre, octobre, novembre, décembre.",
      items: [
        { id: "fr-u14l2-juillet", type: "vocab", front: "juillet", reading: "juillet", meaning: "July", example: { jp: "En juillet, il fait très chaud.", en: "In July, it's very hot." }, drill: { jp: "En juillet je pars à la mer", en: "In July I go to the sea" }, accept: ["july"] },
        { id: "fr-u14l2-aout", type: "vocab", front: "août", reading: "aout", meaning: "August", example: { jp: "En août, je vais à la plage.", en: "In August, I go to the beach." }, drill: { jp: "En août il fait très chaud", en: "In August it's very hot" }, accept: ["august"], hint: "Two vowels, one sound: \"oot\". In August much of France is away." },
        { id: "fr-u14l2-septembre", type: "vocab", front: "septembre", reading: "septembre", meaning: "September", example: { jp: "En septembre, l'école commence.", en: "In September, school starts." }, drill: { jp: "En septembre je rentre au travail", en: "In September I go back to work" }, accept: ["september"] },
        { id: "fr-u14l2-octobre", type: "vocab", front: "octobre", reading: "octobre", meaning: "October", example: { jp: "En octobre, il fait frais.", en: "In October, it's cool." }, drill: { jp: "En octobre le vent est fort", en: "In October the wind is strong" }, accept: ["october"] },
        { id: "fr-u14l2-novembre", type: "vocab", front: "novembre", reading: "novembre", meaning: "November", example: { jp: "En novembre, il fait froid.", en: "In November, it's cold." }, drill: { jp: "En novembre il pleut souvent", en: "In November it often rains" }, accept: ["november"] },
        { id: "fr-u14l2-decembre", type: "vocab", front: "décembre", reading: "decembre", meaning: "December", example: { jp: "En décembre, il neige.", en: "In December, it snows." }, drill: { jp: "En décembre il neige ici", en: "In December it snows here" }, accept: ["december"] },
        { id: "fr-u14l2-lemois", type: "vocab", front: "le mois", reading: "lemois", meaning: "month", example: { jp: "Quel mois ? Avril.", en: "Which month? April." }, drill: { jp: "Le mois de mai est doux", en: "The month of May is mild" }, accept: ["the month"] },
      ],
    },
    {
      id: "fr-u14l3",
      unit: 14,
      lesson: 3,
      title: "Seasons and dates",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the seasons and give a date: le printemps, l'été, l'automne, l'hiver, l'année, la semaine, la date.",
      items: [
        { id: "fr-u14l3-leprintemps", type: "vocab", front: "le printemps", reading: "leprintemps", meaning: "spring", example: { jp: "Le printemps commence en mars.", en: "Spring starts in March." }, drill: { jp: "Le printemps est ma saison", en: "Spring is my season" }, accept: ["the spring", "springtime"] },
        { id: "fr-u14l3-lete", type: "vocab", front: "l'été", reading: "lete", meaning: "summer", example: { jp: "En été, il fait chaud et sec.", en: "In summer, it's hot and dry." }, drill: { jp: "L'été est très chaud ici", en: "Summer is very hot here" }, accept: ["the summer", "summertime"] },
        { id: "fr-u14l3-lautomne", type: "vocab", front: "l'automne", reading: "lautomne", meaning: "autumn", example: { jp: "En automne, la forêt est très jolie.", en: "In autumn, the forest is very pretty." }, drill: { jp: "L'automne est doux cette année", en: "Autumn is mild this year" }, accept: ["the autumn", "fall"] },
        { id: "fr-u14l3-lhiver", type: "vocab", front: "l'hiver", reading: "lhiver", meaning: "winter", example: { jp: "En hiver, il neige à la montagne.", en: "In winter, it snows in the mountains." }, drill: { jp: "L'hiver est long ici", en: "Winter is long here" }, accept: ["the winter", "wintertime"] },
        { id: "fr-u14l3-lannee", type: "vocab", front: "l'année", reading: "lannee", meaning: "year", example: { jp: "Bonne année !", en: "Happy New Year!" }, drill: { jp: "L'année commence en janvier", en: "The year starts in January" }, accept: ["the year"], hint: "Bonne année ! is what everyone says on 1 January." },
        { id: "fr-u14l3-lasemaine", type: "vocab", front: "la semaine", reading: "lasemaine", meaning: "week", example: { jp: "Cette semaine, je travaille beaucoup.", en: "This week, I'm working a lot." }, drill: { jp: "La semaine commence lundi", en: "The week starts on Monday" }, accept: ["the week"], hint: "cette = this (feminine): cette semaine, this week." },
        { id: "fr-u14l3-ladate", type: "vocab", front: "la date", reading: "ladate", meaning: "date", example: { jp: "Quelle est la date aujourd'hui ?", en: "What's the date today?" }, drill: { jp: "La date est le trente mai", en: "The date is the thirtieth of May" }, accept: ["the date"] },
      ],
    },
  ],
};
