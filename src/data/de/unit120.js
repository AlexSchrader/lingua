// DE Unit 120 — Alle, jeder, irgendwas (slot: coverage-b2-10) — B2
// Conventions: de/unit1.js + de/unit51.js + de/unit88.js (B2 band constitution).
// Coverage pass — method in u114's header, card count in u115's.
//
// ⚠️ THE MOST IMPORTANT UNIT IN THIS BLOCK, and the reason is structural.
// These are FUNCTION WORDS. A content word the learner lacks costs one sentence;
// a missing determiner or quantifier costs every sentence it appears in, and the
// learner cannot look it up because they do not know it is a word. The B1 seat
// found ihre and unsere taught NOWHERE in 87 units for exactly this reason — the
// word was invisible to every checker because nobody had written it. Both are
// taught now (u4); euer, the third member of the same paradigm, still was not.
//
// Self-check, dropped as same-lexeme duplicates: irgendwas was CHECKED and KEPT
// (its near hit irgendwann u28 is a different compound of the same prefix, not
// the same lexeme — the irgend- family is productive and each member is its own
// word). allein KEPT: its only near hit is alle (u4), reached by stripping a
// final -in, which is a false family. Dropped: die Notwendigkeit (noetig here).
// FREE: gemacht, gesagt, genutzt, gebracht, gefunden, geholfen, gelesen, gehoert, gehört, begonnen, kannte, ankamen, gib, jede, jenen, dieselbe
export const DE_UNIT120 = {
  id: "de-u120",
  lang: "de",
  title: "Alle, jeder, irgendwas",
  order: 120,
  stage: "b2",
  lessons: [
    {
      id: "de-u120l1",
      unit: 120,
      lesson: 1,
      title: "All, jeder, beide",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Quantify a group precisely — all of it, each one, both of two, on your own, or the very same thing.",
      items: [
        { id: "de-u120l1-all", type: "vocab", front: "all", reading: "all", meaning: "all of", example: { jp: "All das Geld reicht trotzdem nicht, weil die Preise seit dem Winter immer weiter steigen.", en: "All that money is still not enough, because prices have kept rising since the winter." }, drill: { jp: "All die Arbeit war am Ende zu viel", en: "All the work was too much in the end" }, accept: ["all", "all of", "all the"], hint: "Rank 494. The uninflected form that stands BEFORE another determiner: all das Geld, all meine Freunde. When it stands alone it takes endings instead — alle (u4), alles (u6)." },
        { id: "de-u120l1-jeder", type: "vocab", front: "jeder", reading: "jeder", meaning: "each one", example: { jp: "Jeder im Raum durfte eine Frage stellen, aber nur wenige haben die Gelegenheit genutzt.", en: "Each person in the room was allowed to ask a question, but only a few used the opportunity." }, drill: { jp: "Jeder kennt diese alte Geschichte", en: "Each one knows this old story" }, accept: ["each", "each one", "every", "everyone", "everybody"], hint: "Rank 524. Declines like dieser: jeder, jede, jedes, jeden, jedem. Always singular, even where English would say 'all' — jeder weiß, not 'jeder wissen'." },
        { id: "de-u120l1-beide", type: "vocab", front: "beide", reading: "beide", meaning: "both", example: { jp: "Beide Wege führen in die Stadt, aber der eine ist kürzer und der andere schöner.", en: "Both routes lead into the city, but one is shorter and the other nicer." }, drill: { jp: "Beide Seiten wollen das Gleiche", en: "Both sides want the same thing" }, accept: ["both", "the two", "both of them"], hint: "Rank 422. Only ever of exactly two. wir beide is 'the two of us'; alle beide adds emphasis. ⚠️ Untaught in 113 units although the course is full of two-sided comparisons." },
        { id: "de-u120l1-allein", type: "vocab", front: "allein", reading: "allein", meaning: "alone", example: { jp: "Sie hat die ganze Sache allein zu Ende gebracht, obwohl ihr drei Leute die Hilfe angeboten hatten.", en: "She brought the whole matter to an end alone, although three people had offered her help." }, drill: { jp: "Er arbeitet fast immer allein", en: "He almost always works alone" }, accept: ["alone", "on one's own", "by oneself", "solely", "only"], hint: "Rank 402, and tier C too: zusammen is taught in u1 and this half was missing. Also means 'merely' at the start of a clause — allein der Preis, the price alone." },
        { id: "de-u120l1-dasselbe", type: "vocab", front: "dasselbe", reading: "dasselbe", meaning: "the very same", example: { jp: "Wir reden seit Wochen über dasselbe, und trotzdem kommt die Gruppe zu keinem Ergebnis.", en: "We have been talking about the very same thing for weeks, and yet the group reaches no result." }, drill: { jp: "Das ist immer wieder dasselbe", en: "It is always the very same thing" }, accept: ["the same", "the same thing", "the very same", "identical"], hint: "Rank 1532. dasselbe is the SAME one; das gleiche is another one just like it. German keeps the distinction that English lost, and writers are fussy about it." },
      ],
    },
    {
      id: "de-u120l2",
      unit: 120,
      lesson: 2,
      title: "Irgendwas und sowas",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Refer to something you cannot or will not name — something, anything at all, any of them, that sort of thing, and what for.",
      items: [
        { id: "de-u120l2-irgendwas", type: "vocab", front: "irgendwas", reading: "irgendwas", meaning: "something (unspecified)", example: { jp: "Da stimmt irgendwas nicht, aber im Moment kann noch niemand genau sagen, was es ist.", en: "Something isn't right there, but at the moment nobody can say exactly what it is." }, drill: { jp: "Er hat irgendwas im Garten gefunden", en: "He found something in the garden" }, accept: ["something", "anything", "some thing"], hint: "Rank 733. The spoken form of irgendetwas, which is the next card. Both mean the same; this one belongs in speech." },
        { id: "de-u120l2-irgendetwas", type: "vocab", front: "irgendetwas", reading: "irgendetwas", meaning: "anything at all", example: { jp: "Wenn irgendetwas nicht klar ist, dann schreiben Sie uns bitte noch einmal.", en: "If anything at all is not clear, then please write to us again." }, drill: { jp: "Hat irgendetwas davon geholfen", en: "Did anything at all of it help" }, accept: ["anything", "anything at all", "something", "aught"], hint: "Rank 1443. The full written form of irgendwas above — identical in meaning, formal in register. Keep this one for letters and forms." },
        { id: "de-u120l2-irgendwelche", type: "vocab", front: "irgendwelche", reading: "irgendwelche", meaning: "any (of a kind)", example: { jp: "Falls irgendwelche Fragen bleiben, können Sie uns bis Freitag noch einmal schreiben.", en: "If any questions remain, you can write to us again by Friday." }, drill: { jp: "Gibt es irgendwelche neuen Briefe", en: "Are there any new letters" }, accept: ["any", "some", "any kind of", "whatever"], hint: "Rank 1886. The plural determiner of the irgend- family — it goes before a noun where irgendwas stands alone. Singular is irgendein." },
        { id: "de-u120l2-sowas", type: "vocab", front: "sowas", reading: "sowas", meaning: "that sort of thing", example: { jp: "Sowas passiert hier fast jede Woche, und deshalb regt sich kaum noch jemand darüber auf.", en: "That sort of thing happens here almost every week, and so hardly anyone gets upset about it any more." }, drill: { jp: "Sowas habe ich noch nie erlebt", en: "I have never experienced that sort of thing" }, accept: ["that sort of thing", "something like that", "such a thing", "that kind of thing"], hint: "Rank 1246. Spoken contraction of so etwas. On its own — Na sowas! — it is mild surprise, like English 'well I never'." },
        { id: "de-u120l2-wozu", type: "vocab", front: "wozu", reading: "wozu", meaning: "what for", example: { jp: "Wozu brauchen wir noch einen Bericht, wenn ihn bis heute niemand gelesen hat.", en: "What do we need another report for, when nobody has read it to this day." }, drill: { jp: "Wozu soll das alles gut sein", en: "What is all that supposed to be good for" }, accept: ["what for", "for what purpose", "to what end", "why"], hint: "Rank 1515. Asks about PURPOSE where warum asks about cause — wozu is 'what for', warum is 'why'. One of a family: womit, wofür, worüber." },
      ],
    },
    {
      id: "de-u120l3",
      unit: 120,
      lesson: 3,
      title: "Euer, jener, gegenüber",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the possessive and demonstrative forms the course had skipped — your (plural), that one yonder, opposite, far off, and gone.",
      items: [
        { id: "de-u120l3-euer", type: "vocab", front: "euer", reading: "euer", meaning: "your (plural)", example: { jp: "Ist das euer Wagen vor dem Haus, oder gehört er den Leuten aus dem ersten Stock?", en: "Is that your car in front of the house, or does it belong to the people on the first floor?" }, drill: { jp: "Wo steht euer neues Haus", en: "Where is your new house" }, accept: ["your", "your (plural)", "yours"], hint: "⚠️ THE CLEAREST FUNCTION-WORD HOLE LEFT. mein, dein, sein, ihr, unser are all taught; euer — the plural 'your' — was taught nowhere. It also drops its second e when an ending is added: euer Haus but eure Kinder, not 'euere'." },
        { id: "de-u120l3-jener", type: "vocab", front: "jener", reading: "jener", meaning: "that one (yonder)", example: { jp: "In jenen Jahren war die Stadt noch klein, und fast jeder kannte jeden auf der Straße.", en: "In those years the city was still small, and almost everyone knew everyone on the street." }, drill: { jp: "Jener Weg führt über den Berg", en: "That way leads over the mountain" }, accept: ["that", "that one", "those", "the former"], hint: "Tier C: dieser is taught in u12 and its partner was missing. Formal and literary — speech uses der da or das dort instead. In a pair, dieser is the latter and jener the former." },
        { id: "de-u120l3-gegenueber", type: "vocab", front: "gegenüber", reading: "gegenueber", meaning: "opposite", example: { jp: "Gegenüber dem Bahnhof gibt es ein Haus, in dem seit dem Krieg dieselbe Familie wohnt.", en: "Opposite the station there is a house in which the same family has lived since the war." }, drill: { jp: "Das Geschäft liegt gegenüber der Schule", en: "The shop is opposite the school" }, accept: ["opposite", "across from", "facing", "towards", "compared with"], hint: "Rank 1574. Takes the dative, and may stand before OR after its noun — dem Bahnhof gegenüber is equally correct. Also 'towards' of an attitude: höflich gegenüber Gästen." },
        { id: "de-u120l3-entfernt", type: "vocab", front: "entfernt", reading: "entfernt", meaning: "distant", example: { jp: "Das Dorf liegt nur wenige Kilometer entfernt, trotzdem fährt kein einziger Bus.", en: "The village lies only a few kilometres away; even so not a single bus goes." }, drill: { jp: "Der Ort ist weit entfernt", en: "The place is far away" }, accept: ["distant", "far away", "away", "remote", "removed"], hint: "Rank 1471. From entfernen (to remove), so literally 'removed'. With a measurement it means 'away': zehn Meter entfernt. Also figurative — entfernt verwandt, distantly related." },
        { id: "de-u120l3-fort", type: "vocab", front: "fort", reading: "fort", meaning: "gone away", example: { jp: "Als wir ankamen, war er schon fort, und niemand im Haus wusste, wohin er gegangen war.", en: "When we arrived he was already gone, and nobody in the house knew where he had gone." }, drill: { jp: "Der Wagen war plötzlich fort", en: "The car was suddenly gone" }, accept: ["gone", "away", "gone away", "off"], hint: "Rank 1285. Older and more written than weg, which is the everyday word. Very productive as a prefix meaning 'onward' — fortsetzen (u114), fortfahren." },
      ],
    },
    {
      id: "de-u120l4",
      unit: 120,
      lesson: 4,
      title: "Ein bisschen, egal, wenigstens",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Soften or dismiss a claim in one word — a little, never mind, that's why, at least, and strictly necessary.",
      items: [
        { id: "de-u120l4-bisschen", type: "vocab", front: "bisschen", reading: "bisschen", meaning: "a little bit", example: { jp: "Gib mir noch ein bisschen Zeit, dann ist der Rest der Arbeit bis zum Abend fertig.", en: "Give me a little more time, then the rest of the work will be finished by the evening." }, drill: { jp: "Ein bisschen Geduld hilft immer", en: "A little patience always helps" }, accept: ["a little", "a bit", "a little bit", "a touch", "slightly"], hint: "Rank 451. Almost always with ein in front — ein bisschen. From der Bissen, a bite, so literally 'a little bite of'. ⚠️ Untaught in 113 units, and it is one of the commonest words in spoken German." },
        { id: "de-u120l4-egal", type: "vocab", front: "egal", reading: "egal", meaning: "all the same", example: { jp: "Es ist mir egal, wer den Text am Ende schreibt, solange er bis Montag fertig wird.", en: "It's all the same to me who writes the text in the end, as long as it is finished by Monday." }, drill: { jp: "Der Preis ist mir völlig egal", en: "The price is completely all the same to me" }, accept: ["all the same", "not important", "doesn't matter", "indifferent", "whatever"], hint: "Rank 513. Used with a dative person: das ist mir egal. Also opens concessive clauses — egal wer, egal wann: no matter who, no matter when." },
        { id: "de-u120l4-darum", type: "vocab", front: "darum", reading: "darum", meaning: "for that reason", example: { jp: "Darum haben wir die Sache noch einmal von vorn begonnen, obwohl die Zeit eigentlich zu knapp war.", en: "For that reason we started the matter again from the beginning, although the time was really too short." }, drill: { jp: "Darum ist er heute nicht hier", en: "For that reason he is not here today" }, accept: ["for that reason", "therefore", "that's why", "so", "about it"], hint: "Rank 708. Two jobs: 'therefore', and the da- form of um — sich darum kümmern, to see to it. As a bare answer to warum, Darum! is a parent's 'because I said so'." },
        { id: "de-u120l4-wenigstens", type: "vocab", front: "wenigstens", reading: "wenigstens", meaning: "at least", example: { jp: "Wenigstens die halbe Gruppe war pünktlich, und damit konnten wir fast normal beginnen.", en: "At least half the group was on time, and with that we could begin almost normally." }, drill: { jp: "Wenigstens das Wetter war gut", en: "At least the weather was good" }, accept: ["at least", "at any rate", "anyway"], hint: "Rank 1153. The consoling 'at least' — the good part of a bad situation. For a minimum quantity German uses mindestens instead: mindestens zehn Euro." },
        { id: "de-u120l4-noetig", type: "vocab", front: "nötig", reading: "noetig", meaning: "necessary", example: { jp: "Mehr als drei Leute sind dafür nicht nötig, weil die Arbeit nicht schwer ist.", en: "More than three people are not necessary for it, because the work is not hard." }, drill: { jp: "Ein zweiter Schlüssel ist nicht nötig", en: "A second key is not necessary" }, accept: ["necessary", "needed", "required", "requisite"], hint: "Rank 1136. nötig haben is to need something; es ist nicht nötig is the polite 'there's no need'. notwendig is its formal twin and carries more weight." },
      ],
    },
  ],
};
