// FR Unit 7 — Les jours ("The days") — A1
// Time to talk about time: the seven days, today/tomorrow/yesterday, and the
// parts of the day with quand and maintenant. Conventions: see fr/unit1.js.
export const FR_UNIT8 = {
  id: "fr-u8",
  lang: "fr",
  title: "Les jours",
  order: 8,
  stage: "a1",
  lessons: [
    {
      id: "fr-u8l1",
      unit: 8,
      lesson: 1,
      title: "Monday to Saturday",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the days: lundi, mardi, mercredi, jeudi, vendredi, samedi.",
      items: [
        { id: "fr-u8l1-lundi", type: "vocab", front: "lundi", reading: "lundi", meaning: "Monday", example: { jp: "Lundi, je vais à l'école.", en: "On Monday I'm going to school." }, drill: { jp: "Lundi je vais à l'école", en: "Monday I go to school" }, accept: ["monday", "on monday", "mon"], hint: "Days aren't capitalized in French — and no \"on\": Lundi, je vais… says \"on Monday\" by itself." },
        { id: "fr-u8l1-mardi", type: "vocab", front: "mardi", reading: "mardi", meaning: "Tuesday", example: { jp: "Mardi, je vais à la gare.", en: "On Tuesday I go to the station." }, drill: { jp: "Mardi je vais à la gare", en: "Tuesday I go to the station" }, accept: ["tuesday", "on tuesday", "tue"], hint: "\"mar-DEE\" — all seven days end in -di, from the Latin dies, day. This is Mars's day, which is exactly where English Tuesday gets Tiw, the same war god." },
        { id: "fr-u8l1-mercredi", type: "vocab", front: "mercredi", reading: "mercredi", meaning: "Wednesday", example: { jp: "Mercredi, je mange avec Marie.", en: "On Wednesday I eat with Marie." }, drill: { jp: "Mercredi je mange avec Marie", en: "Wednesday I eat with Marie" }, accept: ["wednesday", "on wednesday", "wed"], hint: "\"mair-kruh-DEE\" — three syllables, and the middle one nearly vanishes. Mercury's day; English swapped in Woden instead." },
        { id: "fr-u8l1-jeudi", type: "vocab", front: "jeudi", reading: "jeudi", meaning: "Thursday", example: { jp: "Jeudi, je vais au parc.", en: "On Thursday I go to the park." }, drill: { jp: "Jeudi je vais au parc", en: "Thursday I go to the park" }, accept: ["thursday", "on thursday", "thu"], hint: "\"zhuh-DEE\" — the j is the soft zh of English \"measure\". Jupiter's day, and Thursday is Thor's: the same thunder god, renamed." },
        { id: "fr-u8l1-vendredi", type: "vocab", front: "vendredi", reading: "vendredi", meaning: "Friday", example: { jp: "Vendredi, je bois un café avec Paul.", en: "On Friday I have a coffee with Paul." }, drill: { jp: "Vendredi je bois un café", en: "Friday I drink a coffee" }, accept: ["friday", "on friday", "fri"], hint: "\"von-druh-DEE\" — the first syllable is nasal. Venus's day; English used Frigg, her Norse counterpart." },
        { id: "fr-u8l1-samedi", type: "vocab", front: "samedi", reading: "samedi", meaning: "Saturday", example: { jp: "Samedi ! Je vais en ville !", en: "Saturday! I'm going into town!" }, drill: { jp: "Samedi je vais en ville", en: "Saturday I go into town" }, accept: ["saturday", "on saturday", "sat"], hint: "\"sam-DEE\" — the middle e disappears in normal speech. The odd one out: it comes from Sabbath, not from a planet." },
      ],
    },
    {
      id: "fr-u8l2",
      unit: 8,
      lesson: 2,
      title: "Today and tomorrow",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Place yourself in the week: dimanche, le week-end, aujourd'hui, demain, hier — à demain !",
      items: [
        { id: "fr-u8l2-dimanche", type: "vocab", front: "dimanche", reading: "dimanche", meaning: "Sunday", example: { jp: "Dimanche, ça va — je suis avec la famille.", en: "Sunday is good — I'm with the family." }, drill: { jp: "Dimanche je suis avec la famille", en: "Sunday I'm with the family" }, accept: ["sunday", "on sunday", "sun"], hint: "\"dee-MONSH\" — nasal -an, then a final sh. The other odd one out: it is dies dominicus, the Lord's day, so it has no -di ending." },
        { id: "fr-u8l2-leweekend", type: "vocab", front: "le week-end", reading: "leweekend", meaning: "weekend", example: { jp: "Le week-end, je vais au parc.", en: "On weekends I go to the park." }, drill: { jp: "Le week-end je vais au parc", en: "At the weekend I go to the park" }, accept: ["the weekend", "weekend", "at the weekend"], hint: "Yes, it's just English in a beret. France says le week-end; type weekend and it counts." },
        { id: "fr-u8l2-aujourdhui", type: "vocab", front: "aujourd'hui", reading: "aujourdhui", meaning: "today", example: { jp: "Aujourd'hui, ça va très bien !", en: "Today it's going very well!" }, drill: { jp: "Aujourd'hui ça va très bien", en: "Today it's going very well" }, accept: ["today", "this day", "on this day"], hint: "\"oh-zhoor-DWEE\" — au is \"oh\", the apostrophe is an elision, and ui is one glide. It is literally \"on the day of today\", piled up over centuries." },
        { id: "fr-u8l2-demain", type: "vocab", front: "demain", reading: "demain", meaning: "tomorrow", example: { jp: "Demain, je vais à Paris.", en: "Tomorrow I'm going to Paris." }, drill: { jp: "Demain je vais à Paris", en: "Tomorrow I'm going to Paris" }, accept: ["tomorrow", "the next day", "the day after today"], hint: "\"duh-MAN\" — ain is nasal, so your tongue never reaches the n. À demain ! is the everyday see you tomorrow." },
        { id: "fr-u8l2-hier", type: "vocab", front: "hier", reading: "hier", meaning: "yesterday", example: { jp: "Hier, aujourd'hui et demain.", en: "Yesterday, today and tomorrow." }, drill: { jp: "Hier et aujourd'hui", en: "Yesterday and today" }, accept: ["yesterday", "the day before", "the previous day"], hint: "\"yair\" — the h is silent and the i becomes a y glide, so it is one syllable. Hier, aujourd'hui, demain is the whole timeline in three words." },
        { id: "fr-u8l2-ademain", type: "vocab", front: "à demain", reading: "ademain", meaning: "see you tomorrow", example: { jp: "Au revoir, à demain !", en: "Goodbye, see you tomorrow!" }, drill: { jp: "Au revoir et à demain", en: "Goodbye and see you tomorrow" }, accept: ["until tomorrow", "see you", "see you tomorrow!", "till tomorrow"], hint: "à + a time = \"see you then\": à demain, à lundi, à bientôt." },
      ],
    },
    {
      id: "fr-u8l3",
      unit: 8,
      lesson: 3,
      title: "Morning and night",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk through the day — le jour, le matin, le soir, la nuit — with quand, maintenant and l'heure.",
      items: [
        { id: "fr-u8l3-lejour", type: "vocab", front: "le jour", reading: "lejour", meaning: "day", example: { jp: "Le jour et la nuit.", en: "Day and night." }, drill: { jp: "Le jour et la nuit", en: "Day and night" }, accept: ["the day", "daytime", "daylight"], hint: "\"zhoor\" — soft zh, then the plain \"oo\" of ou. Masculine: le jour. You already say it every time you say bonjour, good day." },
        { id: "fr-u8l3-lanuit", type: "vocab", front: "la nuit", reading: "lanuit", meaning: "night", example: { jp: "La nuit, je bois un thé.", en: "At night I drink a tea." }, drill: { jp: "La nuit je bois un thé", en: "At night I drink a tea" }, accept: ["the night", "nighttime", "at night"], hint: "\"nwee\" — ui is one glide and the t is silent. Feminine: la nuit. Bonne nuit is only said when you are leaving for bed, not as a greeting." },
        { id: "fr-u8l3-lematin", type: "vocab", front: "le matin", reading: "lematin", meaning: "morning", example: { jp: "Le matin, je bois un café.", en: "In the morning I drink a coffee." }, drill: { jp: "Le matin je bois un café", en: "In the morning I drink a coffee" }, accept: ["the morning", "morning", "in the morning"], hint: "\"ma-TAN\" — in is nasal, so the n is never touched. Masculine: le matin. Ce matin is this morning." },
        { id: "fr-u8l3-lesoir", type: "vocab", front: "le soir", reading: "lesoir", meaning: "evening", example: { jp: "Le soir, je mange avec ma famille.", en: "In the evening I eat with my family." }, drill: { jp: "Le soir je mange avec ma famille", en: "In the evening I eat with my family" }, accept: ["the evening", "evening", "in the evening"], hint: "\"swahr\" — oi is \"wah\" and the r is sounded. Masculine: le soir. You already know it hidden inside bonsoir." },
        { id: "fr-u8l3-maintenant", type: "vocab", front: "maintenant", reading: "maintenant", meaning: "now", example: { jp: "Je vais à la gare maintenant.", en: "I'm going to the station now." }, drill: { jp: "Je vais à la gare maintenant", en: "I'm going to the station now" }, accept: ["right now", "at the moment", "currently", "now!"], hint: "\"man-tuh-NON\" — nasal at both ends and a silent t. It is main + tenant, holding in hand: the moment you are holding." },
        { id: "fr-u8l3-quand", type: "vocab", front: "quand", reading: "quand", meaning: "when", example: { jp: "Quand ? Maintenant ?", en: "When? Now?" }, drill: { jp: "C'est quand le week-end", en: "When is the weekend" }, accept: ["when?", "at what time", "whenever"], hint: "\"kon\" — qu is a hard k, -an is nasal, and the d is silent. Quand ? on its own is already a whole question." },
        { id: "fr-u8l3-lheure", type: "vocab", front: "l'heure", reading: "lheure", meaning: "hour", example: { jp: "Excusez-moi, l'heure, s'il vous plaît ?", en: "Excuse me, the time, please?" }, drill: { jp: "L'heure s'il vous plaît", en: "The time please" }, accept: ["the hour", "time", "the time"], hint: "The h is silent, so le squishes: l'heure. Asking the time politely = l'heure, s'il vous plaît ?" },
      ],
    },
  ],
};
