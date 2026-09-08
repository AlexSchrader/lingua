// DE Unit 38 — Das Präteritum: schwache Verben (slot: conjugation-1) — A2
// Block 2 (u31–u40). Conventions: see de/unit1.js.
//
// ⚠️ SLOT REPURPOSED, AND WHY — the band-level reason, not tidiness. A1 teaches the
// Perfekt at u14 and never the Präteritum, so a learner finishing German A1 cannot
// read a narrative text: every Märchen, novel and newspaper report is written in a
// tense they have never met. u38 and u39 close that gap together — this unit takes
// the WEAK verbs and the -te pattern, u39 takes the strong verbs and the vowel change.
// Approved by Curriculum Claude via the crew lead. Norwegian is resolving the same
// template defect the same way, so both Germanic crews land consistently.
//
// ⚠️ WHY NOT THE SCAFFOLD'S "Conjugation drill 1": that card type cannot render for
// German. conjugate-latin.js:307 is ENGINES = { es, fr, no } with no German entry, and
// conjugate.js:139 falls through to JA_VERB_GROUPS when a language is missing — so a
// German item tagged group/conjForm validates GREEN against Japanese values and
// renders nothing. The contract's own error message names godan/ichidan/irregular
// "for de", which reads as an instruction to use Japanese classes on a German verb.
// No `group` and no `conjForm` is authored anywhere in this block, and the engine was
// not touched. Logged for Feature CC; affects de, pt, it and ko.
//
// ⚠️ DELIBERATE LEXEME CALL, flagged for the merge seat exactly as A1's u14 flagged
// its participles: every front here is a past form of a verb already taught. They are
// taught anyway because the tense itself is new and unreachable otherwise, and A1 set
// the precedent twice — sein's forms as separate fronts (u1, u3) and six participles
// in u14. The difference from u39 is the point of the pair: these forms are BUILDABLE
// from a rule, and the unit says so; u39's are not.
export const DE_UNIT38 = {
  id: "de-u38",
  lang: "de",
  title: "Das Präteritum: schwache Verben",
  order: 38,
  stage: "a2",
  lessons: [
    {
      id: "de-u38l1",
      unit: 38,
      lesson: 1,
      title: "Die Regel: Stamm plus -te",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Put a regular verb into the written past by adding -te to its stem — the one rule that covers most German verbs.",
      items: [
        { id: "de-u38l1-machte", type: "vocab", front: "machte", reading: "machte", meaning: "did / made — past of machen", example: { jp: "Sie machte die Aufgabe allein, obwohl sie schwer war.", en: "She did the task alone, although it was hard." }, drill: { jp: "Sie machte die Aufgabe allein", en: "She did the task alone" }, accept: ["did", "made"], hint: "The whole rule in one card: take machen, drop the -en, add -te. mach plus te. Every card in this lesson is built exactly this way." },
        { id: "de-u38l1-sagte", type: "vocab", front: "sagte", reading: "sagte", meaning: "said — past of sagen", example: { jp: "Er sagte nichts, weil er müde war.", en: "He said nothing because he was tired." }, drill: { jp: "Er sagte gestern nichts", en: "He said nothing yesterday" }, accept: ["said"], hint: "sag plus te. Compare English said, which is irregular — German's regular verbs are far more predictable than English's." },
        { id: "de-u38l1-lernte", type: "vocab", front: "lernte", reading: "lernte", meaning: "learned — past of lernen", example: { jp: "Ich lernte Deutsch, als ich in Berlin wohnte.", en: "I learned German when I lived in Berlin." }, drill: { jp: "Ich lernte damals viel Deutsch", en: "Back then I learned a lot of German" }, accept: ["learned", "learnt", "studied"], hint: "lern plus te. Note als (u29) in the example — a single past event takes als, never wenn." },
        { id: "de-u38l1-wohnte", type: "vocab", front: "wohnte", reading: "wohnte", meaning: "lived — past of wohnen", example: { jp: "Sie wohnte lang in der Stadt, bevor sie nach Berlin ging.", en: "She lived in the city for a long time before she went to Berlin." }, drill: { jp: "Sie wohnte lang in der Stadt", en: "She lived in the city a long time" }, accept: ["lived", "resided"], hint: "wohn plus te. For where someone used to live, German uses this plus früher (lesson 4) rather than a used-to construction." },
        { id: "de-u38l1-kaufte", type: "vocab", front: "kaufte", reading: "kaufte", meaning: "bought — past of kaufen", example: { jp: "Er kaufte das Buch, obwohl es sehr teuer war.", en: "He bought the book, although it was very expensive." }, drill: { jp: "Er kaufte das Buch gestern", en: "He bought the book yesterday" }, accept: ["bought"], hint: "kauf plus te. verkaufte works the same way — the ver- prefix changes nothing about the ending." },
        { id: "de-u38l1-spielte", type: "vocab", front: "spielte", reading: "spielte", meaning: "played — past of spielen", example: { jp: "Das Kind spielte im Park, während die Mutter arbeitete.", en: "The child played in the park while the mother worked." }, drill: { jp: "Das Kind spielte lang im Park", en: "The child played in the park a long time" }, accept: ["played"], hint: "spiel plus te. Both halves of the example are past — German keeps the tense consistent across a während clause." },
      ],
    },
    {
      id: "de-u38l2",
      unit: 38,
      lesson: 2,
      title: "Ein e mehr: -ete",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Add the extra e that a stem ending in t, d or a consonant cluster needs before -te.",
      items: [
        { id: "de-u38l2-arbeitete", type: "vocab", front: "arbeitete", reading: "arbeitete", meaning: "worked — past of arbeiten", example: { jp: "Mein Vater arbeitete hier, bevor das Büro zu war.", en: "My father worked here before the office was closed." }, drill: { jp: "Mein Vater arbeitete lang hier", en: "My father worked here a long time" }, accept: ["worked"], hint: "The stem arbeit already ends in t, so arbeitte would be unsayable — German slips in an e: arbeit-e-te. That is the whole of this lesson." },
        { id: "de-u38l2-wartete", type: "vocab", front: "wartete", reading: "wartete", meaning: "waited — past of warten", example: { jp: "Wir warteten lang, weil der Zug spät kam.", en: "We waited a long time because the train came late." }, drill: { jp: "Wir warteten sehr lang", en: "We waited a very long time" }, accept: ["waited"], hint: "wart plus e plus te, same reason as arbeitete. Say it aloud and you can hear why the e has to be there." },
        { id: "de-u38l2-antwortete", type: "vocab", front: "antwortete", reading: "antwortete", meaning: "answered — past of antworten", example: { jp: "Niemand antwortete, obwohl ich zweimal fragte.", en: "Nobody answered, although I asked twice." }, drill: { jp: "Niemand antwortete auf die Frage", en: "Nobody answered the question" }, accept: ["answered", "replied"], hint: "The longest form in the unit and still completely regular: antwort-e-te. It takes auf plus the accusative for what is answered." },
        { id: "de-u38l2-kostete", type: "vocab", front: "kostete", reading: "kostete", meaning: "cost — past of kosten", example: { jp: "Das Gerät kostete viel, deshalb kaufte er es nicht.", en: "The device cost a lot, therefore he did not buy it." }, drill: { jp: "Das Gerät kostete sehr viel", en: "The device cost a great deal" }, accept: ["cost"], hint: "kost-e-te. English cost does not change at all in the past; German still marks it, which is a habit worth building early." },
        { id: "de-u38l2-regnete", type: "vocab", front: "regnete", reading: "regnete", meaning: "rained — past of regnen", example: { jp: "Es regnete den ganzen Tag, deshalb blieben wir zu Hause.", en: "It rained all day, therefore we stayed at home." }, drill: { jp: "Es regnete sehr lang", en: "It rained a very long time" }, accept: ["rained"], hint: "regn-e-te, the e needed after the gn cluster. Weather verbs stay impersonal in the past too: es regnete, never ich regnete." },
        { id: "de-u38l2-dauerte", type: "vocab", front: "dauerte", reading: "dauerte", meaning: "lasted — past of dauern", example: { jp: "Die Prüfung dauerte zwei Stunden, obwohl sie kurz sein sollte.", en: "The exam lasted two hours, although it was supposed to be short." }, drill: { jp: "Die Prüfung dauerte zwei Stunden", en: "The exam lasted two hours" }, accept: ["lasted", "took"], hint: "dauern ends in -ern, not -en, so the stem is dauer and you simply add -te. The -ern and -eln verbs all behave like this." },
      ],
    },
    {
      id: "de-u38l3",
      unit: 38,
      lesson: 3,
      title: "Mehr schwache Verben",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use six more regular past forms, and hear that the rule has not changed once.",
      items: [
        { id: "de-u38l3-fragte", type: "vocab", front: "fragte", reading: "fragte", meaning: "asked — past of fragen", example: { jp: "Der Lehrer fragte, ob wir die Aufgabe verstehen.", en: "The teacher asked whether we understand the task." }, drill: { jp: "Der Lehrer fragte die Klasse", en: "The teacher asked the class" }, accept: ["asked"], hint: "frag plus te. It takes an accusative person: er fragte MICH, never mir — unlike antworten, which takes the dative." },
        { id: "de-u38l3-suchte", type: "vocab", front: "suchte", reading: "suchte", meaning: "looked for — past of suchen", example: { jp: "Ich suchte den Schlüssel, während sie im Auto wartete.", en: "I looked for the key while she waited in the car." }, drill: { jp: "Ich suchte lang den Schlüssel", en: "I looked for the key a long time" }, accept: ["looked for", "searched", "sought"], hint: "such plus te. Careful with the strong-looking ch — it changes nothing, because suchen is a perfectly regular verb." },
        { id: "de-u38l3-hoerte", type: "vocab", front: "hörte", reading: "horte", meaning: "heard — past of hören", example: { jp: "Wir hörten nichts, obwohl das Fenster offen war.", en: "We heard nothing, although the window was open." }, drill: { jp: "Wir hörten gestern nichts", en: "We heard nothing yesterday" }, accept: ["heard", "listened"], hint: "hör plus te — the umlaut belongs to the verb itself and does not move. English heard is irregular; German's is not." },
        { id: "de-u38l3-zeigte", type: "vocab", front: "zeigte", reading: "zeigte", meaning: "showed — past of zeigen", example: { jp: "Sie zeigte mir die Stadt, nachdem wir gegessen hatten.", en: "She showed me the city after we had eaten." }, drill: { jp: "Sie zeigte mir die Stadt", en: "She showed me the city" }, accept: ["showed", "pointed out"], hint: "zeig plus te. Two objects: the person in the dative (mir) and the thing in the accusative (die Stadt)." },
        { id: "de-u38l3-brauchte", type: "vocab", front: "brauchte", reading: "brauchte", meaning: "needed — past of brauchen", example: { jp: "Wir brauchten mehr Zeit, aber niemand gab sie uns.", en: "We needed more time, but nobody gave it to us." }, drill: { jp: "Wir brauchten viel mehr Zeit", en: "We needed much more time" }, accept: ["needed", "required"], hint: "brauch plus te. Do not confuse it with the strong-looking gebraucht — the participle is regular too." },
        { id: "de-u38l3-uebte", type: "vocab", front: "übte", reading: "ubte", meaning: "practised — past of üben", example: { jp: "Er übte jeden Abend, damit er besser sprechen konnte.", en: "He practised every evening so that he could speak better." }, drill: { jp: "Er übte sehr oft Deutsch", en: "He practised German very often" }, accept: ["practised", "practiced", "rehearsed"], hint: "üb plus te — one of the shortest verbs in German and still perfectly regular." },
      ],
    },
    {
      id: "de-u38l4",
      unit: 38,
      lesson: 4,
      title: "Modalverben im Präteritum",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Put a modal verb into the past — they all take -te, and they all drop their umlaut.",
      items: [
        { id: "de-u38l4-konnte", type: "vocab", front: "konnte", reading: "konnte", meaning: "could — past of können", example: { jp: "Ich konnte nicht kommen, weil ich krank war.", en: "I could not come because I was ill." }, drill: { jp: "Ich konnte gestern nicht kommen", en: "I could not come yesterday" }, accept: ["could", "was able to"], hint: "können loses its umlaut and takes -te: konnte. Compare u37's könnte, WITH the umlaut, which is the hypothetical could. Two dots, two tenses." },
        { id: "de-u38l4-musste", type: "vocab", front: "musste", reading: "musste", meaning: "had to — past of müssen", example: { jp: "Wir mussten warten, obwohl wir wenig Zeit hatten.", en: "We had to wait, although we had little time." }, drill: { jp: "Wir mussten sehr lang warten", en: "We had to wait a very long time" }, accept: ["had to", "must have"], hint: "müssen to musste, umlaut gone. The double s stays, so it is musste and never mußte in modern spelling." },
        { id: "de-u38l4-wollte", type: "vocab", front: "wollte", reading: "wollte", meaning: "wanted to — past of wollen", example: { jp: "Er wollte mehr lernen, aber die Zeit war zu kurz.", en: "He wanted to learn more, but the time was too short." }, drill: { jp: "Er wollte mehr Geld verdienen", en: "He wanted to earn more money" }, accept: ["wanted", "wanted to"], hint: "wollen never had an umlaut, so nothing is lost: woll plus te. The easiest modal past of the six." },
        { id: "de-u38l4-sollte", type: "vocab", front: "sollte", reading: "sollte", meaning: "was supposed to — past of sollen", example: { jp: "Der Zug sollte um acht kommen, aber er kam später.", en: "The train was supposed to come at eight, but it came later." }, drill: { jp: "Der Zug sollte um acht kommen", en: "The train was supposed to come at eight" }, accept: ["was supposed to", "should", "ought to"], hint: "sollen to sollte, no umlaut to lose. It doubles as the polite should — Du solltest schlafen — so context tells you which." },
        { id: "de-u38l4-durfte", type: "vocab", front: "durfte", reading: "durfte", meaning: "was allowed to — past of dürfen", example: { jp: "Als Kind durfte ich nicht allein in die Stadt gehen.", en: "As a child I was not allowed to go into town alone." }, drill: { jp: "Ich durfte nicht allein gehen", en: "I was not allowed to go alone" }, accept: ["was allowed to", "could", "might"], hint: "dürfen to durfte, umlaut gone like können and müssen. Nicht dürfen is the strong prohibition — not merely could not, but must not." },
        { id: "de-u38l4-wusste", type: "vocab", front: "wusste", reading: "wusste", meaning: "knew — past of wissen", example: { jp: "Niemand wusste, ob der Zug kommt.", en: "Nobody knew whether the train was coming." }, drill: { jp: "Niemand wusste die Antwort", en: "Nobody knew the answer" }, accept: ["knew"], hint: "wissen behaves like a modal here: the stem vowel changes to u and it still takes -te. dachte and brachte belong to the same small mixed group." },
      ],
    },
  ],
};
