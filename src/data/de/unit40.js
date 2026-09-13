// DE Unit 40 — Feste und Feiern (slot: coverage-a2-1) — A2
// Block 2 (u31–u40). Conventions: see de/unit1.js.
//
// DOMAIN CHOSEN FOR THIS UNNAMED COVERAGE SLOT, and why this one. It had to stay clear
// of the lead's u21–u30 (routine, feelings, travel, work/school, health, nature and
// animals, shopping and money, time and adverbs, connectives, home) and of my own
// u31–u37. Celebration is the one everyday domain nothing in the band touches: A1 gave
// birthdays no word at all, and a learner can describe a government and a hard drive
// before they can accept an invitation or congratulate anybody.
// The obvious alternative was food and the restaurant, and it was rejected: its
// kitchenware (Teller, Gabel, Messer, Topf) sits squarely in the lead's u30 "Home and
// household", and its bill and tip sit in u27 "Shopping and money". Two collisions
// against zero is not a close call.
// BOUNDARY with my own u35 "Kultur und Freizeit": u35 is art you go and look at, u40 is
// an occasion you are invited to. Nothing here is about the arts.
// Rejected as the same lexeme: das Glück (~u10 glücklich); die Einladung (~einladen in
// this same lesson); schenken (~das Geschenk, same lesson); der Brauch (~u13 brauchen);
// die Feier (~feiern, same lesson).
export const DE_UNIT40 = {
  id: "de-u40",
  lang: "de",
  title: "Feste und Feiern",
  order: 40,
  stage: "a2",
  lessons: [
    {
      id: "de-u40l1",
      unit: 40,
      lesson: 1,
      title: "Feste im Jahr",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the fixed points of the German year and say that you are celebrating.",
      items: [
        { id: "de-u40l1-dasfest", type: "vocab", front: "das Fest", reading: "dasfest", meaning: "festival / celebration", example: { jp: "Das Fest dauerte bis in die Nacht.", en: "The celebration lasted into the night." }, drill: { jp: "Das Fest ist am Sonntag", en: "The celebration is on Sunday" }, accept: ["festival", "celebration", "party", "feast"], hint: "Any organised occasion, from a village fair to a wedding. Frohes Fest is what you wish someone at Christmas." },
        { id: "de-u40l1-derfeiertag", type: "vocab", front: "der Feiertag", reading: "derfeiertag", meaning: "public holiday", example: { jp: "Am Feiertag sind die Geschäfte zu.", en: "On the public holiday the shops are closed." }, drill: { jp: "Der Feiertag ist am Montag", en: "The public holiday is on Monday" }, accept: ["public holiday", "holiday", "bank holiday"], hint: "feiern plus der Tag (u5) — a day for celebrating. Not a holiday you travel on: that is der Urlaub (u18)." },
        { id: "de-u40l1-weihnachten", type: "vocab", front: "Weihnachten", reading: "weihnachten", meaning: "Christmas", example: { jp: "An Weihnachten kommt die Familie zusammen.", en: "At Christmas the family comes together." }, drill: { jp: "An Weihnachten kommt die Familie", en: "At Christmas the family comes" }, accept: ["christmas", "christmastime"], hint: "One of the few German nouns used without an article, like a place name. Built from weihen, to consecrate, plus die Nacht (u5)." },
        { id: "de-u40l1-ostern", type: "vocab", front: "Ostern", reading: "ostern", meaning: "Easter", example: { jp: "An Ostern feiern wir zusammen.", en: "At Easter we celebrate together." }, drill: { jp: "An Ostern feiern wir zusammen", en: "At Easter we celebrate together" }, accept: ["easter"], hint: "Article-free like Weihnachten, and it takes an as well: an Ostern. The English word is its direct cousin." },
        { id: "de-u40l1-dietradition", type: "vocab", front: "die Tradition", reading: "dietradition", meaning: "tradition", example: { jp: "Die Tradition ist alt, obwohl niemand den Grund weiß.", en: "The tradition is old, although nobody knows the reason." }, drill: { jp: "Die Tradition ist sehr alt", en: "The tradition is very old" }, accept: ["tradition", "custom"], hint: "tra-di-tsi-OHN, stress at the end, and the t before the ion is said ts. Feminine, like every German noun ending in -ion." },
        { id: "de-u40l1-feiern", type: "vocab", front: "feiern", reading: "feiern", meaning: "to celebrate", example: { jp: "Wir feiern heute, weil mein Bruder Geburtstag hat.", en: "We are celebrating today because my brother has a birthday." }, drill: { jp: "Wir feiern heute im Garten", en: "We are celebrating in the garden today" }, accept: ["to celebrate", "to party", "celebrate"], hint: "An -ern verb, so the stem is feier: ich feiere. die Feier, the party itself, is the same word wearing a noun's clothes." },
      ],
    },
    {
      id: "de-u40l2",
      unit: 40,
      lesson: 2,
      title: "Einladen und gratulieren",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Invite someone, congratulate them, wish them something, and call it off if you must.",
      items: [
        { id: "de-u40l2-einladen", type: "vocab", front: "einladen", reading: "einladen", meaning: "to invite", example: { jp: "Ich möchte dich einladen, weil wir am Samstag feiern.", en: "I would like to invite you because we are celebrating on Saturday." }, drill: { jp: "Ich will dich einladen", en: "I want to invite you" }, accept: ["to invite", "invite", "to treat"], hint: "Separable — ich lade dich ein — so the infinitive only stands whole after a modal, as in both sentences here. It also means to treat: ich lade dich ein, this one is on me." },
        { id: "de-u40l2-dergast", type: "vocab", front: "der Gast", reading: "dergast", meaning: "guest", example: { jp: "Der Gast kam spät zum Fest.", en: "The guest came late to the celebration." }, drill: { jp: "Der Gast kam sehr spät", en: "The guest came very late" }, accept: ["guest", "visitor"], hint: "Its plural umlauts: die Gäste. A restaurant calls its customers Gäste rather than Kunden (u16), which is a nicer way to be thought of." },
        { id: "de-u40l2-gratulieren", type: "vocab", front: "gratulieren", reading: "gratulieren", meaning: "to congratulate", example: { jp: "Wir gratulieren dir zum Geburtstag.", en: "We congratulate you on your birthday." }, drill: { jp: "Wir gratulieren dir sehr herzlich", en: "We congratulate you very warmly" }, accept: ["to congratulate", "congratulate"], hint: "Takes a DATIVE person: ich gratuliere DIR, never dich. Herzlichen Glückwunsch is what you actually say out loud." },
        { id: "de-u40l2-wuenschen", type: "vocab", front: "wünschen", reading: "wunschen", meaning: "to wish someone something", example: { jp: "Ich wünsche dir viel Zeit.", en: "I wish you plenty of time." }, drill: { jp: "Wir wünschen dir viel Zeit", en: "We wish you plenty of time" }, accept: ["to wish", "wish"], hint: "Dative person, accusative thing: ich wünsche DIR ein gutes JAHR. der Wunsch (u37) is the noun behind it." },
        { id: "de-u40l2-dierede", type: "vocab", front: "die Rede", reading: "dierede", meaning: "speech", example: { jp: "Die Rede war kurz, deshalb waren die Gäste glücklich.", en: "The speech was short, therefore the guests were happy." }, drill: { jp: "Die Rede war sehr kurz", en: "The speech was very short" }, accept: ["speech", "talk", "address"], hint: "eine Rede halten is to give a speech — German holds one where English gives one. From reden, to talk." },
        { id: "de-u40l2-absagen", type: "vocab", front: "absagen", reading: "absagen", meaning: "to cancel / call off", example: { jp: "Wir mussten das Fest absagen, weil zu viele krank waren.", en: "We had to cancel the celebration because too many were ill." }, drill: { jp: "Wir müssen das Fest absagen", en: "We have to cancel the celebration" }, accept: ["to cancel", "to call off", "to decline", "cancel"], hint: "Separable, like einladen: ich sage ab. It is both to cancel an event and to decline an invitation — the polite opposite of zusagen." },
      ],
    },
    {
      id: "de-u40l3",
      unit: 40,
      lesson: 3,
      title: "Geschenke",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about presents and the things that go with them — a candle, flowers, a surprise, a birthday.",
      items: [
        { id: "de-u40l3-dasgeschenk", type: "vocab", front: "das Geschenk", reading: "dasgeschenk", meaning: "present / gift", example: { jp: "Das Geschenk war klein, aber sehr schön.", en: "The present was small, but very beautiful." }, drill: { jp: "Das Geschenk war sehr klein", en: "The present was very small" }, accept: ["present", "gift"], hint: "From schenken, to give as a gift — a verb German keeps quite separate from geben (u19), which is any giving at all." },
        { id: "de-u40l3-diekerze", type: "vocab", front: "die Kerze", reading: "diekerze", meaning: "candle", example: { jp: "Auf dem Kuchen ist eine Kerze.", en: "There is a candle on the cake." }, drill: { jp: "Die Kerze ist auf dem Kuchen", en: "The candle is on the cake" }, accept: ["candle"], hint: "KER-tse, with z as ts. Germans light them far beyond birthdays — an Advent wreath carries four." },
        { id: "de-u40l3-dieblume", type: "vocab", front: "die Blume", reading: "dieblume", meaning: "flower", example: { jp: "Er kaufte Blumen für die Mutter.", en: "He bought flowers for his mother." }, drill: { jp: "Die Blume ist sehr schön", en: "The flower is very beautiful" }, accept: ["flower", "bloom"], hint: "The standard gift when invited to a German home — but never an even number, and never chrysanthemums, which are for graves." },
        { id: "de-u40l3-dieueberraschung", type: "vocab", front: "die Überraschung", reading: "dieuberraschung", meaning: "surprise", example: { jp: "Die Überraschung war gut, obwohl sie klein war.", en: "The surprise was good, although it was small." }, drill: { jp: "Die Überraschung war sehr gut", en: "The surprise was very good" }, accept: ["surprise"], hint: "Five syllables: ü-ber-RA-schung. From überraschen, to surprise, which itself hides rasch, quick." },
        { id: "de-u40l3-dergeburtstag", type: "vocab", front: "der Geburtstag", reading: "dergeburtstag", meaning: "birthday", example: { jp: "Am Geburtstag feiern wir zusammen.", en: "On the birthday we celebrate together." }, drill: { jp: "Der Geburtstag ist im Sommer", en: "The birthday is in the summer" }, accept: ["birthday"], hint: "die Geburt, birth, plus der Tag (u5). Germans do not wish it early — congratulating before the day is genuinely thought unlucky." },
        { id: "de-u40l3-herzlich", type: "vocab", front: "herzlich", reading: "herzlich", meaning: "cordial", example: { jp: "Wir gratulieren herzlich zum Geburtstag.", en: "We congratulate you warmly on your birthday." }, drill: { jp: "Wir gratulieren dir sehr herzlich", en: "We congratulate you very warmly" }, accept: ["warm", "heartfelt", "cordial", "sincere"], hint: "From das Herz, the heart. Herzlichen Glückwunsch is THE German congratulation, and herzlich willkommen the standard welcome." },
      ],
    },
    {
      id: "de-u40l4",
      unit: 40,
      lesson: 4,
      title: "Die Feier",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe the party itself — a wedding, the cake, the toast, the mood.",
      items: [
        { id: "de-u40l4-diehochzeit", type: "vocab", front: "die Hochzeit", reading: "diehochzeit", meaning: "wedding", example: { jp: "Die Hochzeit war im Sommer, weil das Wetter dann gut ist.", en: "The wedding was in the summer because the weather is good then." }, drill: { jp: "Die Hochzeit ist im Sommer", en: "The wedding is in the summer" }, accept: ["wedding", "marriage"], hint: "hoch (u10) plus die Zeit (u1) — the high time. Said HOCH-tsyte, and the ch is the throaty one." },
        { id: "de-u40l4-derkuchen", type: "vocab", front: "der Kuchen", reading: "derkuchen", meaning: "cake", example: { jp: "Der Kuchen war gut, obwohl er sehr süß war.", en: "The cake was good, although it was very sweet." }, drill: { jp: "Der Kuchen war sehr gut", en: "The cake was very good" }, accept: ["cake"], hint: "KOO-chen. One letter and a very different word from die Küche (u1), the kitchen — the umlaut is doing all the work." },
        { id: "de-u40l4-anstossen", type: "vocab", front: "anstoßen", reading: "anstossen", meaning: "to clink glasses / toast", example: { jp: "Wir wollen anstoßen, bevor wir essen.", en: "We want to toast before we eat." }, drill: { jp: "Wir wollen zusammen anstoßen", en: "We want to toast together" }, accept: ["to toast", "to clink glasses", "to drink to", "toast"], hint: "Separable, so the infinitive needs a modal to stand whole. Look the other person in the eye as you do it — Germans mind about that." },
        { id: "de-u40l4-suess", type: "vocab", front: "süß", reading: "suss", meaning: "sweet", example: { jp: "Der Kuchen ist zu süß für mich.", en: "The cake is too sweet for me." }, drill: { jp: "Der Kuchen ist sehr süß", en: "The cake is very sweet" }, accept: ["sweet", "cute"], hint: "Of taste, and of anything small and charming — ein süßes Kind. Type süß or suess; the ß folds to ss." },
        { id: "de-u40l4-froehlich", type: "vocab", front: "fröhlich", reading: "frohlich", meaning: "merry", example: { jp: "Die Gäste waren fröhlich, weil die Musik gut war.", en: "The guests were cheerful because the music was good." }, drill: { jp: "Die Gäste waren sehr fröhlich", en: "The guests were very cheerful" }, accept: ["cheerful", "merry", "happy", "jolly"], hint: "Fröhliche Weihnachten is Merry Christmas. Lighter and more outward than glücklich (u10), which is a deeper contentment." },
        { id: "de-u40l4-diestimmung", type: "vocab", front: "die Stimmung", reading: "diestimmung", meaning: "atmosphere", example: { jp: "Die Stimmung war gut, obwohl das Fest kurz war.", en: "The mood was good, although the celebration was short." }, drill: { jp: "Die Stimmung war sehr gut", en: "The mood was very good" }, accept: ["mood", "atmosphere", "spirits", "vibe"], hint: "From die Stimme, the voice — the tuning of a room. It describes a group, where a single person's mood would be die Laune." },
      ],
    },
  ],
};
