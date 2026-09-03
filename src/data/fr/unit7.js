// FR Unit 7 — Les jours ("The days") — A1
// Time to talk about time: the seven days, today/tomorrow/yesterday, and the
// parts of the day with quand and maintenant. Conventions: see fr/unit1.js.
export const FR_UNIT7 = {
  id: "fr-u7",
  lang: "fr",
  title: "Les jours",
  order: 8,
  stage: "a1",
  lessons: [
    {
      id: "fr-u7l1",
      unit: 7,
      lesson: 1,
      title: "Monday to Saturday",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the days: lundi, mardi, mercredi, jeudi, vendredi, samedi.",
      items: [
        { id: "fr-u7l1-lundi", type: "vocab", front: "lundi", reading: "lundi", meaning: "Monday", example: { jp: "Lundi, je vais à l'école.", en: "On Monday I'm going to school." }, drill: { jp: "Lundi je vais à l'école", en: "Monday I go to school" }, accept: ["monday"], hint: "Days aren't capitalized in French — and no \"on\": Lundi, je vais… says \"on Monday\" by itself." },
        { id: "fr-u7l1-mardi", type: "vocab", front: "mardi", reading: "mardi", meaning: "Tuesday", example: { jp: "Mardi, je vais à la gare.", en: "On Tuesday I go to the station." }, drill: { jp: "Mardi je vais à la gare", en: "Tuesday I go to the station" }, accept: ["tuesday"] },
        { id: "fr-u7l1-mercredi", type: "vocab", front: "mercredi", reading: "mercredi", meaning: "Wednesday", example: { jp: "Mercredi, je mange avec Marie.", en: "On Wednesday I eat with Marie." }, drill: { jp: "Mercredi je mange avec Marie", en: "Wednesday I eat with Marie" }, accept: ["wednesday"] },
        { id: "fr-u7l1-jeudi", type: "vocab", front: "jeudi", reading: "jeudi", meaning: "Thursday", example: { jp: "Jeudi, je vais au parc.", en: "On Thursday I go to the park." }, drill: { jp: "Jeudi je vais au parc", en: "Thursday I go to the park" }, accept: ["thursday"] },
        { id: "fr-u7l1-vendredi", type: "vocab", front: "vendredi", reading: "vendredi", meaning: "Friday", example: { jp: "Vendredi, je bois un café avec Paul.", en: "On Friday I have a coffee with Paul." }, drill: { jp: "Vendredi je bois un café", en: "Friday I drink a coffee" }, accept: ["friday"] },
        { id: "fr-u7l1-samedi", type: "vocab", front: "samedi", reading: "samedi", meaning: "Saturday", example: { jp: "Samedi ! Je vais à la ville !", en: "Saturday! I'm going into town!" }, drill: { jp: "Samedi je vais à la ville", en: "Saturday I go into town" }, accept: ["saturday"] },
      ],
    },
    {
      id: "fr-u7l2",
      unit: 7,
      lesson: 2,
      title: "Today and tomorrow",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Place yourself in the week: dimanche, le week-end, aujourd'hui, demain, hier — à demain !",
      items: [
        { id: "fr-u7l2-dimanche", type: "vocab", front: "dimanche", reading: "dimanche", meaning: "Sunday", example: { jp: "Dimanche, ça va — je suis avec la famille.", en: "Sunday is good — I'm with the family." }, drill: { jp: "Dimanche je suis avec la famille", en: "Sunday I'm with the family" }, accept: ["sunday"] },
        { id: "fr-u7l2-leweekend", type: "vocab", front: "le week-end", reading: "leweekend", meaning: "weekend", example: { jp: "Le week-end, je vais au parc.", en: "On weekends I go to the park." }, drill: { jp: "Le week-end je vais au parc", en: "At the weekend I go to the park" }, accept: ["the weekend"], hint: "Yes, it's just English in a beret. France says le week-end; type weekend and it counts." },
        { id: "fr-u7l2-aujourdhui", type: "vocab", front: "aujourd'hui", reading: "aujourdhui", meaning: "today", example: { jp: "Aujourd'hui, ça va très bien !", en: "Today it's going very well!" }, drill: { jp: "Aujourd'hui ça va très bien", en: "Today it's going very well" }, accept: [] },
        { id: "fr-u7l2-demain", type: "vocab", front: "demain", reading: "demain", meaning: "tomorrow", example: { jp: "Demain, je vais à Paris.", en: "Tomorrow I'm going to Paris." }, drill: { jp: "Demain je vais à Paris", en: "Tomorrow I'm going to Paris" }, accept: [] },
        { id: "fr-u7l2-hier", type: "vocab", front: "hier", reading: "hier", meaning: "yesterday", example: { jp: "Hier, aujourd'hui et demain.", en: "Yesterday, today and tomorrow." }, drill: { jp: "Hier et aujourd'hui", en: "Yesterday and today" }, accept: [] },
        { id: "fr-u7l2-ademain", type: "vocab", front: "à demain", reading: "ademain", meaning: "see you tomorrow", example: { jp: "Au revoir, à demain !", en: "Goodbye, see you tomorrow!" }, drill: { jp: "Au revoir et à demain", en: "Goodbye and see you tomorrow" }, accept: ["until tomorrow", "see you"], hint: "à + a time = \"see you then\": à demain, à lundi, à bientôt." },
      ],
    },
    {
      id: "fr-u7l3",
      unit: 7,
      lesson: 3,
      title: "Morning and night",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk through the day — le jour, le matin, le soir, la nuit — with quand, maintenant and l'heure.",
      items: [
        { id: "fr-u7l3-lejour", type: "vocab", front: "le jour", reading: "lejour", meaning: "day", example: { jp: "Le jour et la nuit.", en: "Day and night." }, drill: { jp: "Le jour et la nuit", en: "Day and night" }, accept: ["the day", "daytime"] },
        { id: "fr-u7l3-lanuit", type: "vocab", front: "la nuit", reading: "lanuit", meaning: "night", example: { jp: "La nuit, je bois un thé.", en: "At night I drink a tea." }, drill: { jp: "La nuit je bois un thé", en: "At night I drink a tea" }, accept: ["the night", "nighttime"] },
        { id: "fr-u7l3-lematin", type: "vocab", front: "le matin", reading: "lematin", meaning: "morning", example: { jp: "Le matin, je bois un café.", en: "In the morning I drink a coffee." }, drill: { jp: "Le matin je bois un café", en: "In the morning I drink a coffee" }, accept: ["the morning"] },
        { id: "fr-u7l3-lesoir", type: "vocab", front: "le soir", reading: "lesoir", meaning: "evening", example: { jp: "Le soir, je mange avec ma famille.", en: "In the evening I eat with my family." }, drill: { jp: "Le soir je mange avec ma famille", en: "In the evening I eat with my family" }, accept: ["the evening"] },
        { id: "fr-u7l3-maintenant", type: "vocab", front: "maintenant", reading: "maintenant", meaning: "now", example: { jp: "Je vais à la gare maintenant.", en: "I'm going to the station now." }, drill: { jp: "Je vais à la gare maintenant", en: "I'm going to the station now" }, accept: ["right now"] },
        { id: "fr-u7l3-quand", type: "vocab", front: "quand", reading: "quand", meaning: "when", example: { jp: "Quand ? Maintenant ?", en: "When? Now?" }, drill: { jp: "Quand est le train", en: "When is the train" }, accept: [] },
        { id: "fr-u7l3-lheure", type: "vocab", front: "l'heure", reading: "lheure", meaning: "hour", example: { jp: "Excusez-moi, l'heure, s'il vous plaît ?", en: "Excuse me, the time, please?" }, drill: { jp: "L'heure s'il vous plaît", en: "The time please" }, accept: ["the hour", "time", "the time"], hint: "The h is silent, so le squishes: l'heure. Asking the time politely = l'heure, s'il vous plaît ?" },
      ],
    },
  ],
};
