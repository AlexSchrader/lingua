// DE Unit 95 — Geschichte und Kultur (slot: history-culture) — B2
// Conventions: de/unit1.js + de/unit51.js + de/unit88.js (B2 band constitution).
// Already taught, used but never re-taught: die Vergangenheit (u28), die
// Tradition (u40), die Ausstellung (u35), die Quelle (u55), der Wandel (u59),
// das Jahrhundert (u59), der Zeitraum (u59), das Zeugnis (u24), die Geschichte
// (u59), prägen (u63), flüchten (u81).
// Self-check, dropped as same-lexeme duplicates: der Brauch (brauchen u13 — a
// false family but a real front collision), die Prägung (prägen u63), vergangen
// (die Vergangenheit u28), überliefern (kept die Überlieferung instead), die
// Flucht (flüchten u81), die Denkmalpflege (kept das Denkmal instead).
// ⚠️ NOTE FOR BLOCK 2/3 AND THE MERGE SEAT: this unit names real German history
// (Teilung, Besatzung, Wiedervereinigung, Nachkriegszeit, die Mauer). That is
// the honest content for a German B2 history slot, and the examples stay
// factual and neutral — no judgement is taught, only the vocabulary needed to read
// a German newspaper or museum label. Keep it that way.
//
// ⚠️ TWO CORPUS HOLES CLOSED HERE, NOT WRITTEN AROUND: der Krieg and der
// Frieden were taught NOWHERE in de u1-u94 (checked with check-front.mjs).
// A history unit is their right home, so u95 teaches them - which also licenses
// them for every later unit. Still open and routed to the coverage units
// (u111-u126): beginnen and enden, equally untaught, equally ordinary.
// Dropped to make room, and free for blocks 2/3: die Sitte, die Vorfahren.
//
// FREE: Epoche, Epochen, Museen, Museum, Details, Jahrzehnte, Osten, Westen, Berlin, Deutschland, DDR, Chronik, Tradition, Traditionen, Denkmal, Denkmaeler
export const DE_UNIT95 = {
  id: "de-u95",
  lang: "de",
  title: "Geschichte und Kultur",
  order: 95,
  stage: "b2",
  lessons: [
    {
      id: "de-u95l1",
      unit: 95,
      lesson: 1,
      title: "Zeit in großen Blöcken",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about history in periods rather than dates — name an epoch, an age, the Middle Ages, the modern era, a flowering and a decline.",
      items: [
        { id: "de-u95l1-dieepoche", type: "vocab", front: "die Epoche", reading: "dieepoche", meaning: "the epoch", example: { jp: "Eine neue Epoche beginnt selten an einem Tag, meistens merkt man den Wandel erst viel später.", en: "A new epoch rarely begins on a single day; usually you only notice the change much later." }, drill: { jp: "Die Epoche dauerte mehrere Jahrhunderte", en: "The epoch lasted several centuries" }, accept: ["epoch", "the epoch", "era", "the era", "period", "age"], hint: "A named stretch of history with a character of its own — in art and literature German uses it for style periods too: die Epoche der Romantik." },
        { id: "de-u95l1-daszeitalter", type: "vocab", front: "das Zeitalter", reading: "daszeitalter", meaning: "the era", example: { jp: "Wir leben im Zeitalter der Daten, aber die wichtigsten Rohdaten bleiben trotzdem im Labor.", en: "We live in the age of data, but the most important raw data nevertheless stay in the laboratory." }, drill: { jp: "Das Zeitalter dauerte sehr lange", en: "The age lasted a very long time" }, accept: ["age", "the age", "era", "the era", "epoch"], hint: "die Zeit + das Alter: the age of a thing rather than of a person. das digitale Zeitalter, das Zeitalter der Aufklärung — always with a defining genitive." },
        { id: "de-u95l1-dasmittelalter", type: "vocab", front: "das Mittelalter", reading: "dasmittelalter", meaning: "the Middle Ages", example: { jp: "Im Mittelalter war die Stadt reich, davon ist heute nur noch die alte Mauer übrig.", en: "In the Middle Ages the city was rich; of that only the old wall is left today." }, drill: { jp: "Das Mittelalter dauerte rund tausend Jahre", en: "The Middle Ages lasted around a thousand years" }, accept: ["Middle Ages", "the Middle Ages", "medieval period", "mediaeval period"], hint: "Singular in German where English is plural. The adjective is mittelalterlich — and, used of a person's opinions, it is an insult." },
        { id: "de-u95l1-dieneuzeit", type: "vocab", front: "die Neuzeit", reading: "dieneuzeit", meaning: "the modern era", example: { jp: "Die Neuzeit beginnt für viele Forscher mit dem Buchdruck, für andere erst hundert Jahre später.", en: "For many researchers the modern era begins with printing; for others only a hundred years later." }, drill: { jp: "Die Neuzeit dauert bis heute", en: "The modern era continues to this day" }, accept: ["modern era", "the modern era", "modern age", "modern times", "modernity"], hint: "neu + die Zeit: the period after the Middle Ages, not 'the present' — that is die Gegenwart. German history books split it again into die frühe Neuzeit." },
        { id: "de-u95l1-diebluetezeit", type: "vocab", front: "die Blütezeit", reading: "diebluetezeit", meaning: "the heyday", example: { jp: "Die Blütezeit der Stadt dauerte knapp hundert Jahre, danach kam ein langer Verfall.", en: "The city's heyday lasted barely a hundred years; after that came a long decline." }, drill: { jp: "Die Blütezeit dauerte hundert Jahre", en: "The heyday lasted a hundred years" }, accept: ["heyday", "the heyday", "golden age", "prime", "flowering", "peak"], hint: "die Blüte (blossom) + die Zeit: when a thing was in flower. Used of cities, art forms and companies; its opposite is der Verfall, below." },
        { id: "de-u95l1-derverfall", type: "vocab", front: "der Verfall", reading: "derverfall", meaning: "the decline", example: { jp: "Der Verfall kam über Jahre, deshalb hat ihn die Öffentlichkeit erst nach Jahrzehnten bemerkt.", en: "The decline came over years, which is why the public only noticed it after decades." }, drill: { jp: "Der Verfall dauerte viele Jahrzehnte", en: "The decline lasted many decades" }, accept: ["decline", "the decline", "decay", "the decay", "deterioration", "expiry"], hint: "From verfallen (to fall into ruin, and to expire). A building, a currency and a ticket can all verfallen — das Verfallsdatum is the expiry date on food." },
      ],
    },
    {
      id: "de-u95l2",
      unit: 95,
      lesson: 2,
      title: "Krieg, Herrschaft und Teilung",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about war and who holds power — name the war and the peace that follows it, the rule people live under, an occupation, a division and the rebuilding afterwards.",
      items: [
        { id: "de-u95l2-dieherrschaft", type: "vocab", front: "die Herrschaft", reading: "dieherrschaft", meaning: "the rule", example: { jp: "Unter dieser Herrschaft durfte niemand die Quellen frei lesen, und deshalb fehlen der Forschung heute ganze Jahrzehnte.", en: "Under this rule nobody was allowed to read the sources freely, and that is why whole decades are missing from research today." }, drill: { jp: "Die Herrschaft dauerte vierzig Jahre", en: "The rule lasted forty years" }, accept: ["rule", "the rule", "reign", "the reign", "dominion", "power"], hint: "From der Herr (lord, master): rule over people. Note the false friend with die Regel (u32) and die Vorschrift (u61) — those are rules you follow, this is rule you live under." },
        { id: "de-u95l2-diebesatzung", type: "vocab", front: "die Besatzung", reading: "diebesatzung", meaning: "the occupation", example: { jp: "Die Besatzung dauerte vier Jahre, und in dieser Zeit wurde die halbe Stadt neu aufgebaut.", en: "The occupation lasted four years, and in that time half the city was rebuilt." }, drill: { jp: "Die Besatzung dauerte vier Jahre", en: "The occupation lasted four years" }, accept: ["occupation", "the occupation", "occupying forces", "crew", "the crew"], hint: "From besetzen (to occupy). Two senses that sit oddly together: a military occupation, and the crew of a ship or plane." },
        { id: "de-u95l2-dieteilung", type: "vocab", front: "die Teilung", reading: "dieteilung", meaning: "the division", example: { jp: "Die Teilung des Landes war als Übergang gedacht, am Ende hielt sie über vierzig Jahre.", en: "The division of the country was meant as a transition; in the end it held for over forty years." }, drill: { jp: "Die Teilung dauerte vierzig Jahre", en: "The division lasted forty years" }, accept: ["division", "the division", "partition", "the partition", "split", "separation"], hint: "From teilen (to divide). In German history writing, die Teilung without further words means the division of Germany — the context does the rest." },
        { id: "de-u95l2-derkrieg", type: "vocab", front: "der Krieg", reading: "derkrieg", meaning: "the war", example: { jp: "Der Krieg dauerte sechs Jahre, und danach war von der alten Stadt fast nichts mehr übrig.", en: "The war lasted six years, and afterwards almost nothing was left of the old city." }, drill: { jp: "Der Krieg dauerte sechs Jahre", en: "The war lasted six years" }, accept: ["war", "the war", "warfare"], hint: "⚠️ German taught this word nowhere before u95 — see the header. im Krieg = at war; nach dem Krieg is how German writing dates the whole second half of the last century." },
        { id: "de-u95l2-derfrieden", type: "vocab", front: "der Frieden", reading: "derfrieden", meaning: "the peace", example: { jp: "Der Frieden hielt über siebzig Jahre, aber sicher war er in dieser Zeit nie.", en: "The peace held for over seventy years, but it was never safe in that time." }, drill: { jp: "Der Frieden hält seit siebzig Jahren", en: "The peace has held for seventy years" }, accept: ["peace", "the peace", "peacetime"], hint: "Note the -n in every case: der Frieden, des Friedens. friedlich is the adjective; in Frieden leben = to live in peace, der Friedensvertrag = the peace treaty." },
        { id: "de-u95l2-derwiederaufbau", type: "vocab", front: "der Wiederaufbau", reading: "derwiederaufbau", meaning: "the reconstruction", example: { jp: "Der Wiederaufbau dauerte Jahrzehnte, obwohl die wichtigsten Gebäude schon nach wenigen Jahren wieder standen.", en: "The reconstruction took decades, although the most important buildings were standing again after only a few years." }, drill: { jp: "Der Wiederaufbau kostete sehr viel Geld", en: "The reconstruction cost a great deal of money" }, accept: ["reconstruction", "the reconstruction", "rebuilding", "the rebuilding"], hint: "wieder (again) + der Aufbau (u90). Note wieder, not wider — the same trap as widerlegen (u88), in the other direction." },
      ],
    },
    {
      id: "de-u95l3",
      unit: 95,
      lesson: 3,
      title: "Was überliefert wird",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about how the past reaches us — inheritance, oral tradition, a chronicle, a monument, a memorial site and the witness who was there.",
      items: [
        { id: "de-u95l3-daserbe", type: "vocab", front: "das Erbe", reading: "daserbe", meaning: "the heritage", example: { jp: "Das Erbe ist schwer zu tragen, weil die zwei Seiten etwas anderes daraus machen wollen.", en: "The heritage is hard to bear, because the two sides want to make something different of it." }, drill: { jp: "Das Erbe bleibt bis heute wichtig", en: "The heritage remains important to this day" }, accept: ["heritage", "the heritage", "inheritance", "the inheritance", "legacy", "the legacy"], hint: "Both an inheritance in money and a cultural legacy — das Weltkulturerbe is the UNESCO term. The heir is der Erbe, masculine; the thing inherited is das Erbe." },
        { id: "de-u95l3-dieuberlieferung", type: "vocab", front: "die Überlieferung", reading: "dieuberlieferung", meaning: "the tradition handed down", example: { jp: "Nach der Überlieferung stand hier eine Kirche, aber die Forschung hat davon bisher nichts gefunden.", en: "According to tradition a church stood here, but research has found nothing of it so far." }, drill: { jp: "Die Überlieferung stimmt mit der Chronik", en: "The handed-down tradition agrees with the chronicle" }, accept: ["tradition handed down", "the tradition", "oral tradition", "transmission", "lore", "received account"], hint: "über + liefern (u83): handed across the generations. Distinct from die Tradition (u40), which is a practice — this is the account of what happened." },
        { id: "de-u95l3-diechronik", type: "vocab", front: "die Chronik", reading: "diechronik", meaning: "the chronicle", example: { jp: "Die Chronik der Stadt beginnt im Mittelalter, die ersten Seiten sind allerdings verloren.", en: "The city's chronicle begins in the Middle Ages; the first pages, however, are lost." }, drill: { jp: "Die Chronik liegt im Museum", en: "The chronicle is in the museum" }, accept: ["chronicle", "the chronicle", "annals", "record"], hint: "The year-by-year record. Every German town has one, usually written by a Heimatverein, and it is a primary Quelle (u55) for local historians." },
        { id: "de-u95l3-dasdenkmal", type: "vocab", front: "das Denkmal", reading: "dasdenkmal", meaning: "the monument", example: { jp: "Das Denkmal steht seit hundert Jahren am selben Platz, aber die Erklärung daneben wurde dreimal geändert.", en: "The monument has stood in the same square for a hundred years, but the explanation beside it has been changed three times." }, drill: { jp: "Das Denkmal steht seit hundert Jahren", en: "The monument has stood for a hundred years" }, accept: ["monument", "the monument", "memorial", "the memorial", "landmark"], hint: "denken + das Mal (a mark): a mark for thinking. Plural die Denkmäler. A protected building is denkmalgeschützt — a word every German renovation runs into." },
        { id: "de-u95l3-diegedenkstatte", type: "vocab", front: "die Gedenkstätte", reading: "diegedenkstatte", meaning: "the memorial site", example: { jp: "Die Gedenkstätte liegt außerhalb der Stadt, trotzdem kommen im Jahr Tausende von Schülern.", en: "The memorial site lies outside the city; nevertheless thousands of school students come in a year." }, drill: { jp: "Die Gedenkstätte liegt außerhalb der Stadt", en: "The memorial site lies outside the city" }, accept: ["memorial site", "the memorial site", "memorial", "place of remembrance"], hint: "gedenken (to commemorate) + die Stätte (place). The word German uses for the sites of the twentieth century — a Gedenkstätte is for remembering, a Denkmal for honouring." },
        { id: "de-u95l3-derzeitzeuge", type: "vocab", front: "der Zeitzeuge", reading: "derzeitzeuge", meaning: "the contemporary witness", example: { jp: "Der letzte Zeitzeuge ist vor zwei Jahren gestorben, seitdem arbeitet die Forschung nur noch mit Quellen.", en: "The last contemporary witness died two years ago; since then research works only with sources." }, drill: { jp: "Der Zeitzeuge spricht in der Schule", en: "The contemporary witness speaks at the school" }, accept: ["contemporary witness", "the contemporary witness", "eyewitness to history", "living witness", "witness of the time"], hint: "die Zeit + der Zeuge (u75): someone who was there. Weak masculine — den Zeitzeugen. German schools build whole lessons around a Zeitzeugengespräch." },
      ],
    },
    {
      id: "de-u95l4",
      unit: 95,
      lesson: 4,
      title: "Umbruch und Aufarbeitung",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Discuss how a country deals with its own past — an upheaval, an uprising, the reckoning that follows, reunification, the post-war period and a wall as a symbol.",
      items: [
        { id: "de-u95l4-dieaufarbeitung", type: "vocab", front: "die Aufarbeitung", reading: "dieaufarbeitung", meaning: "the reckoning", example: { jp: "Die Aufarbeitung hat spät begonnen, und deshalb fehlen heute viele Zeitzeugen für die Forschung.", en: "The reckoning began late, and that is why many contemporary witnesses are missing for research today." }, drill: { jp: "Die Aufarbeitung dauert bis heute", en: "The reckoning continues to this day" }, accept: ["reckoning", "the reckoning", "coming to terms with the past", "working through", "review", "processing"], hint: "auf + arbeiten: working something through rather than away. In German public life it almost always means facing a difficult past honestly — die Aufarbeitung der Geschichte." },
        { id: "de-u95l4-diewiedervereinigung", type: "vocab", front: "die Wiedervereinigung", reading: "diewiedervereinigung", meaning: "the reunification", example: { jp: "Nach der Wiedervereinigung änderte sich fast alles, aber der Unterschied zwischen Osten und Westen blieb sichtbar.", en: "After reunification almost everything changed, but the difference between East and West remained visible." }, drill: { jp: "Die Wiedervereinigung kam sehr schnell", en: "Reunification came very quickly" }, accept: ["reunification", "the reunification", "unification", "German reunification"], hint: "wieder + vereinigen (to unite). The date is the 3rd of October, and it is the German national holiday — der Tag der Deutschen Einheit (u90)." },
        { id: "de-u95l4-dienachkriegszeit", type: "vocab", front: "die Nachkriegszeit", reading: "dienachkriegszeit", meaning: "the post-war period", example: { jp: "In der Nachkriegszeit fehlte es an fast allem, trotzdem wurde in diesen Jahren die halbe Stadt neu gebaut.", en: "In the post-war period almost everything was lacking; nevertheless half the city was rebuilt in those years." }, drill: { jp: "Die Nachkriegszeit dauerte viele Jahre", en: "The post-war period lasted many years" }, accept: ["post-war period", "the post-war period", "post-war years", "aftermath of the war"], hint: "nach + der Krieg + die Zeit. A three-part compound that German treats as one ordinary word; the parallel die Vorkriegszeit exists too." },
        { id: "de-u95l4-diemauer", type: "vocab", front: "die Mauer", reading: "diemauer", meaning: "the outer wall", example: { jp: "Die Mauer stand achtundzwanzig Jahre, und ihr Verlauf ist heute nur noch an wenigen Stellen zu sehen.", en: "The wall stood twenty-eight years, and its course can be seen today at only a few places." }, drill: { jp: "Die Mauer stand fast dreissig Jahre", en: "The wall stood almost thirty years" }, accept: ["wall", "the wall", "the Berlin Wall"], hint: "A built wall of stone; die Wand is an interior wall. With the article and no further words, die Mauer means one specific wall in Berlin." },
        { id: "de-u95l4-derumbruch", type: "vocab", front: "der Umbruch", reading: "derumbruch", meaning: "the upheaval", example: { jp: "Der Umbruch kam schneller als die Prognose, und trotzdem war danach vieles wie vorher.", en: "The upheaval came faster than the forecast, and yet afterwards much was as it had been." }, drill: { jp: "Der Umbruch kam sehr schnell", en: "The upheaval came very quickly" }, accept: ["upheaval", "the upheaval", "radical change", "transformation", "turning point"], hint: "um + brechen: everything breaking over. Stronger than der Wandel (u59), which is gradual — ein Umbruch is the year everything changed." },
        { id: "de-u95l4-deraufstand", type: "vocab", front: "der Aufstand", reading: "deraufstand", meaning: "the uprising", example: { jp: "Der Aufstand dauerte wenige Tage, aber die Bilder davon kennt man in Deutschland bis heute.", en: "The uprising lasted a few days, but the images of it are known in Germany to this day." }, drill: { jp: "Der Aufstand dauerte wenige Tage", en: "The uprising lasted a few days" }, accept: ["uprising", "the uprising", "revolt", "the revolt", "rebellion", "insurrection"], hint: "auf + stehen: standing up against. einen Aufstand proben is also used ironically for a small domestic rebellion." },
      ],
    },
  ],
};
