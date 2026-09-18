// DE Unit 113 — Zeit und Menge im Text ("Time and quantity in a text") — B2 (slot: coverage-b2-3)
// SLOT RETITLED per RUNBOOK §4. The last coverage unit of block 2 takes the words that
// place a statement in TIME and in QUANTITY without a calendar or a number — where a
// report says derzeit rather than jetzt, bislang rather than bis jetzt, etliche rather
// than viele. They are frequent, they are everywhere in written German, and no thematic
// unit owns them.
// u87 owns jeweils/knapp/die Quote/der Durchschnitt (numbers and proportions), u59/u62/
// u63 own seither/seitdem/seinerzeit/künftig, u56 zunächst — used here, never re-taught.
// ⚠ Deliberately NOT here: the degree adverbs (erheblich, geringfügig, marginal), which
// are block 1's u91 "Nuance and degree"; lower slot wins.
export const DE_UNIT113 = {
  id: "de-u113",
  lang: "de",
  title: "Zeit und Menge im Text",
  order: 113,
  stage: "b2",
  lessons: [
    {
      id: "de-u113l1",
      unit: 113,
      lesson: 1,
      title: "Jetzt, bisher, künftig",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Place a statement in time the way a report does: at present, up to now, for the time being, from now on.",
      items: [
        { id: "de-u113l1-derzeit", type: "vocab", front: "derzeit", reading: "derzeit", meaning: "at present (currently)", example: { jp: "Die Bearbeitung dauert derzeit länger als sonst, weil Personal fehlt.", en: "Processing currently takes longer than usual because staff are missing." }, drill: { jp: "Die Wartezeit ist derzeit besonders lang", en: "The waiting time is currently particularly long" }, accept: ["at present", "currently", "at the moment", "presently"], hint: "The written form of im Moment. Zurzeit means the same thing; derzeit is a shade more official." },
        { id: "de-u113l1-bislang", type: "vocab", front: "bislang", reading: "bislang", meaning: "so far (up to now)", example: { jp: "Bislang hat die Behörde auf keinen der drei Briefe geantwortet.", en: "So far the authority has answered none of the three letters." }, drill: { jp: "Bislang hat niemand darauf geantwortet", en: "So far nobody has answered it" }, accept: ["so far", "up to now", "hitherto", "to date"], hint: "Identical in meaning to bisher, at home in reports and news. Both leave the future open." },
        { id: "de-u113l1-vorerst", type: "vocab", front: "vorerst", reading: "vorerst", meaning: "for the time being (until further notice)", example: { jp: "Die Station bleibt vorerst geschlossen, eine Entscheidung fällt im Herbst.", en: "The ward remains closed for the time being; a decision comes in autumn." }, drill: { jp: "Die Sitzung fällt vorerst aus", en: "The meeting is cancelled for the time being" }, accept: ["for the time being", "for now", "until further notice", "provisionally"], hint: "Marks the decision as temporary and unfinished — the honest word when nobody has decided yet." },
        { id: "de-u113l1-nunmehr", type: "vocab", front: "nunmehr", reading: "nunmehr", meaning: "now (as of this point, formal)", example: { jp: "Der Antrag liegt nunmehr bei der zweiten Instanz.", en: "The application is now with the second level of authority." }, drill: { jp: "Der Vorgang liegt nunmehr beim Ausschuss", en: "The matter now lies with the committee" }, accept: ["now", "as of now", "by now", "at this point"], hint: "nun + mehr: from now on, as things have turned out. Pure officialese — in speech, simply jetzt." },
        { id: "de-u113l1-fortan", type: "vocab", front: "fortan", reading: "fortan", meaning: "from then on (henceforth)", example: { jp: "Nach dem Erlass mussten die Betriebe fortan jeden Wert selbst melden.", en: "After the decree the plants had from then on to report every value themselves." }, drill: { jp: "Fortan musste jeder Betrieb selbst melden", en: "From then on every plant had to report itself" }, accept: ["from then on", "henceforth", "from now on", "thereafter"], hint: "Literary and a little solemn; in a story it marks the point where the new state begins." },
        { id: "de-u113l1-zeitgleich", type: "vocab", front: "zeitgleich", reading: "zeitgleich", meaning: "at the same time (simultaneously)", example: { jp: "Zeitgleich mit der Pressemitteilung stand der Bericht im Netz.", en: "At the same time as the press release, the report was online." }, drill: { jp: "Beide Sitzungen begannen zeitgleich am Montag", en: "Both meetings began simultaneously on Monday" }, accept: ["at the same time", "simultaneously", "concurrently", "in parallel"], hint: "From sport, where two runners finish zeitgleich. With mit + dative when you name the other event." },
      ],
    },
    {
      id: "de-u113l2",
      unit: 113,
      lesson: 2,
      title: "Vor Kurzem und seit Langem",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how recent something is and how long it has been going: lately, recently, for a good while, in the meantime.",
      items: [
        { id: "de-u113l2-unlangst", type: "vocab", front: "unlängst", reading: "unlangst", meaning: "recently (not long ago)", example: { jp: "Unlängst hat das Gremium genau darüber getagt.", en: "Recently the body met about exactly that." }, drill: { jp: "Unlängst hat der Ausschuss darüber getagt", en: "Recently the committee met about it" }, accept: ["recently", "not long ago", "lately", "the other day"], hint: "un + lang: literally not long ago. Neutral in register, slightly more written than neulich." },
        { id: "de-u113l2-neuerdings", type: "vocab", front: "neuerdings", reading: "neuerdings", meaning: "lately (there has been a change)", example: { jp: "Neuerdings muss man den Antrag online stellen, auf Papier geht es nicht mehr.", en: "Lately you have to submit the application online; on paper is no longer possible." }, drill: { jp: "Neuerdings muss man alles online machen", en: "Lately you have to do everything online" }, accept: ["lately", "recently", "these days", "of late"], hint: "Always carries the idea that something changed and is now different from before." },
        { id: "de-u113l2-geraumezeit", type: "vocab", front: "geraume Zeit", reading: "geraumezeit", meaning: "a good while (quite some time)", example: { jp: "Es hat geraume Zeit gedauert, bis der Bescheid kam.", en: "It took a good while until the decision came." }, drill: { jp: "Es hat geraume Zeit gedauert", en: "It took a good while" }, accept: ["a good while", "quite some time", "a considerable time", "a long while"], hint: "Geraum survives only in this phrase, and always means longer than you would have liked." },
        { id: "de-u113l2-einstweilen", type: "vocab", front: "einstweilen", reading: "einstweilen", meaning: "in the meantime (provisionally)", example: { jp: "Einstweilen gelten die alten Grenzwerte weiter.", en: "In the meantime the old limit values continue to apply." }, drill: { jp: "Einstweilen gelten die alten Regeln weiter", en: "In the meantime the old rules still apply" }, accept: ["in the meantime", "for now", "provisionally", "meanwhile"], hint: "Legal German keeps it alive in die einstweilige Verfügung — the interim injunction." },
        { id: "de-u113l2-hierzulande", type: "vocab", front: "hierzulande", reading: "hierzulande", meaning: "in this country (here where we are)", example: { jp: "Hierzulande zahlt die Kasse, in anderen Ländern der Patient selbst.", en: "In this country the insurer pays; in other countries the patient does." }, drill: { jp: "Hierzulande zahlt meistens die Kasse", en: "In this country the insurer usually pays" }, accept: ["in this country", "here", "in our country", "over here"], hint: "One word, and it always compares with abroad — a favourite opening of German feature articles." },
        { id: "de-u113l2-hierbei", type: "vocab", front: "hierbei", reading: "hierbei", meaning: "in this (in the case just mentioned)", example: { jp: "Hierbei ist zu beachten, dass die Frist am Wochenende nicht läuft.", en: "In this it is to be noted that the deadline does not run at the weekend." }, drill: { jp: "Hierbei ist die Frist besonders wichtig", en: "In this the deadline is particularly important" }, accept: ["in this", "here", "in this connection", "in doing so"], hint: "One of the hier- + preposition family (hierbei, hierzu, hierfür, hiermit) that written German uses to point back without repeating the noun." },
      ],
    },
    {
      id: "de-u113l3",
      unit: 113,
      lesson: 3,
      title: "Wie viele genau",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Give a quantity in words rather than digits: quite a few, numerous, isolated cases, the respective one.",
      items: [
        { id: "de-u113l3-etliche", type: "vocab", front: "etliche", reading: "etliche", meaning: "quite a few (more than a handful)", example: { jp: "Etliche Betriebe haben die Frist einfach verstreichen lassen.", en: "Quite a few plants simply let the deadline pass." }, drill: { jp: "Etliche Betriebe haben nicht geantwortet", en: "Quite a few plants did not reply" }, accept: ["quite a few", "several", "a good number of", "numerous"], hint: "More than einige, less than viele, and always faintly disapproving in a report." },
        { id: "de-u113l3-zahlreich", type: "vocab", front: "zahlreich", reading: "zahlreich", meaning: "numerous", example: { jp: "Zahlreiche Stellungnahmen sind eingegangen, gelesen wurden nur wenige.", en: "Numerous written comments came in; only a few were read." }, drill: { jp: "Die Stellungnahmen waren erstaunlich zahlreich", en: "The written comments were astonishingly numerous" }, accept: ["numerous", "many", "a large number of"], hint: "Zahl + reich, rich in number. Also used of people attending: zahlreich erscheinen — to turn up in force." },
        { id: "de-u113l3-vereinzelt", type: "vocab", front: "vereinzelt", reading: "vereinzelt", meaning: "isolated (occurring here and there)", example: { jp: "Vereinzelt gab es Kritik, aber kein Gremium hat sie aufgegriffen.", en: "There was isolated criticism, but no body took it up." }, drill: { jp: "Vereinzelt gab es deutliche Kritik", en: "There was isolated but clear criticism" }, accept: ["isolated", "sporadic", "here and there", "occasional"], hint: "From einzeln. In a weather forecast it is the standard word: vereinzelt Regen." },
        { id: "de-u113l3-allesamt", type: "vocab", front: "allesamt", reading: "allesamt", meaning: "all of them (every single one)", example: { jp: "Die drei Kliniken haben allesamt zu wenig Personal.", en: "The three clinics all of them have too little staff." }, drill: { jp: "Die Anträge wurden allesamt abgelehnt", en: "The applications were all of them refused" }, accept: ["all of them", "one and all", "every one", "all"], hint: "Stronger than alle: allesamt insists that not one is left out. It stands after the noun, never before it." },
        { id: "de-u113l3-nahezu", type: "vocab", front: "nahezu", reading: "nahezu", meaning: "virtually (almost entirely)", example: { jp: "Der Saal war nahezu leer, obwohl die Sitzung öffentlich war.", en: "The hall was virtually empty, although the meeting was public." }, drill: { jp: "Der Saal war nahezu völlig leer", en: "The hall was virtually completely empty" }, accept: ["virtually", "almost", "nearly", "practically"], hint: "Written German's fast. Fast is neutral, nahezu is the register you use next to a figure." },
        { id: "de-u113l3-einvielfaches", type: "vocab", front: "ein Vielfaches", reading: "einvielfaches", meaning: "many times as much", example: { jp: "Die Prävention kostet einen Bruchteil, die Behandlung ein Vielfaches.", en: "Prevention costs a fraction; the treatment many times as much." }, drill: { jp: "Die Reparatur kostet ein Vielfaches davon", en: "The repair costs many times that" }, accept: ["many times as much", "a multiple", "several times over"], hint: "Its opposite is ein Bruchteil, a fraction. Um ein Vielfaches teurer — many times more expensive." },
      ],
    },
    {
      id: "de-u113l4",
      unit: 113,
      lesson: 4,
      title: "Fristen und Grenzen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Set the edges of a statement: within a period, at the latest, approximately, and what counts as the outer limit.",
      items: [
        { id: "de-u113l4-binnen", type: "vocab", front: "binnen", reading: "binnen", meaning: "within (a period of time)", example: { jp: "Binnen zwei Wochen muss der Widerspruch bei der Behörde sein.", en: "Within two weeks the objection has to be with the authority." }, drill: { jp: "Binnen einer Woche muss alles vorliegen", en: "Within a week everything has to be available" }, accept: ["within", "inside", "in the space of"], hint: "Takes the dative, and only ever time, never place: binnen einer Stunde, binnen Wochen. Innerhalb works for both." },
        { id: "de-u113l4-spatestens", type: "vocab", front: "spätestens", reading: "spatestens", meaning: "at the latest", example: { jp: "Spätestens im Herbst muss das Gremium entscheiden.", en: "At the latest in autumn the body has to decide." }, drill: { jp: "Spätestens im Herbst fällt die Entscheidung", en: "At the latest in autumn the decision is made" }, accept: ["at the latest", "no later than", "by the latest"], hint: "Its pair is frühestens, at the earliest. Both are superlatives doing the work of a deadline." },
        { id: "de-u113l4-annahernd", type: "vocab", front: "annähernd", reading: "annahernd", meaning: "approximately (close to)", example: { jp: "Die zweite Klinik hat annähernd so viele Betten wie die erste.", en: "The second clinic has approximately as many beds as the first." }, drill: { jp: "Beide Zahlen sind annähernd gleich groß", en: "Both figures are approximately the same size" }, accept: ["approximately", "nearly", "roughly", "close to"], hint: "From sich annähern, to approach. Negated it is emphatic: nicht annähernd genug — nowhere near enough." },
                { id: "de-u113l4-dieobergrenze", type: "vocab", front: "die Obergrenze", reading: "dieobergrenze", meaning: "upper limit (cap)", example: { jp: "Für die Zuzahlung gibt es eine Obergrenze, die jedes Jahr neu gilt.", en: "For the co-payment there is an upper limit that applies anew each year." }, drill: { jp: "Die Obergrenze liegt bei zwei Prozent", en: "The upper limit is two per cent" }, accept: ["upper limit", "cap", "ceiling", "maximum"], hint: "oben + Grenze. Its pair is die Untergrenze, and both are the fixed numbers behind höchstens and mindestens (u87)." },
        { id: "de-u113l4-derhochststand", type: "vocab", front: "der Höchststand", reading: "derhochststand", meaning: "record high (highest level reached)", example: { jp: "Die Zahl der Anträge hat im Juni einen Höchststand erreicht.", en: "The number of applications reached a record high in June." }, drill: { jp: "Der Höchststand war schon im Juni", en: "The record high was already in June" }, accept: ["record high", "peak level", "high point", "all-time high"], hint: "Its opposite is der Tiefststand. Note the difference from der Höhepunkt (u111): a Höchststand is a measured level, a Höhepunkt a moment." },
        { id: "de-u113l4-einbruchteil", type: "vocab", front: "ein Bruchteil", reading: "einbruchteil", meaning: "a fraction (a tiny part)", example: { jp: "Nur ein Bruchteil der Betroffenen hat überhaupt einen Antrag gestellt.", en: "Only a fraction of those affected made an application at all." }, drill: { jp: "Nur ein Bruchteil der Leute hat geantwortet", en: "Only a fraction of the people replied" }, accept: ["a fraction", "a small part", "a tiny share"], hint: "Bruch + Teil, a broken-off part. In einem Bruchteil einer Sekunde — in a split second." },
      ],
    },
  ],
};
