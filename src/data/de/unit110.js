// DE Unit 110 — Die amtliche Stimme ("The institutional voice") — B2 (slot: register-4)
// THEME CONTRACT (block 2, u101–u113): u107 owns the written register's GRAMMAR and
// u109 its politeness; this unit owns the INSTITUTION speaking — the documents it issues
// (l1), the body that meets and decides (l2), the procedure a citizen is part of (l3),
// and how any of it reaches the public (l4).
// u75 Recht und Verwaltung and u76 Auf dem Amt already teach the counter-side of this
// (der Antrag, die Genehmigung, die Gebühr, zuständig, die Bearbeitung, das Formular) —
// used here in examples, never re-taught.
// ⚠ Lexeme rule: der Sprecher and der Betreff are deliberately NOT taught here, because
// sprechen (u1) and betreffen (u52) already own those lexemes.
export const DE_UNIT110 = {
  id: "de-u110",
  lang: "de",
  title: "Die amtliche Stimme",
  order: 110,
  stage: "b2",
  lessons: [
    {
      id: "de-u110l1",
      unit: 110,
      lesson: 1,
      title: "Bescheid, Verfügung und Richtlinie",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Tell apart the papers a German institution sends you: the decision on your case, the order, the rule book, the statute and the leaflet that explains them.",
      items: [
        { id: "de-u110l1-derbescheid", type: "vocab", front: "der Bescheid", reading: "derbescheid", meaning: "official decision (letter deciding your case)", example: { jp: "Der Bescheid kam nach elf Wochen, und die Frist für einen Widerspruch lief einen Monat.", en: "The decision came after eleven weeks, and the deadline for an objection ran for one month." }, drill: { jp: "Der Bescheid kam erst nach elf Wochen", en: "The decision only came after eleven weeks" }, accept: ["official decision", "decision", "notice", "ruling"], hint: "The single most important word in German officialdom: your Antrag comes back as a Bescheid. Bescheid wissen — to be in the know — is a different animal." },
        { id: "de-u110l1-dieverfugung", type: "vocab", front: "die Verfügung", reading: "dieverfugung", meaning: "official order (binding instruction)", example: { jp: "Eine Verfügung der Behörde hat den Betrieb für zwei Wochen geschlossen.", en: "An order from the authority closed the plant for two weeks." }, drill: { jp: "Die Verfügung gilt ab dem ersten Januar", en: "The order applies from the first of January" }, accept: ["order", "official order", "directive", "decree"], hint: "Same noun as in zur Verfügung stellen (u107), other sense: here it is what an authority verfügt — orders." },
        { id: "de-u110l1-dierichtlinie", type: "vocab", front: "die Richtlinie", reading: "dierichtlinie", meaning: "guideline (binding rule for a whole field)", example: { jp: "Die Richtlinie gilt in allen Kliniken, auch wenn jede sie etwas anders umsetzt.", en: "The guideline applies in all clinics, even if each implements it somewhat differently." }, drill: { jp: "Die Richtlinie gilt in allen Kliniken", en: "The guideline applies in all clinics" }, accept: ["guideline", "directive", "policy", "regulation"], hint: "In EU German it is the Directive that member states must turn into their own law. Richtung + Linie — the line that gives the direction." },
        { id: "de-u110l1-diesatzung", type: "vocab", front: "die Satzung", reading: "diesatzung", meaning: "statutes (an organisation's own constitution)", example: { jp: "Was der Verein darf, steht in der Satzung und nicht im Gesetz.", en: "What the club may do is in the statutes, not in the law." }, drill: { jp: "Die Satzung erklärt alles ganz genau", en: "The statutes set everything out very precisely" }, accept: ["statutes", "articles", "constitution", "bylaws"], hint: "Every German Verein, Stiftung and Stadt has one. From setzen — what has been laid down." },
        { id: "de-u110l1-dererlass", type: "vocab", front: "der Erlass", reading: "dererlass", meaning: "decree (instruction from a ministry)", example: { jp: "Ein Erlass des Ministeriums hat die Prüfung für dieses Jahr ausgesetzt.", en: "A decree from the ministry suspended the examination for this year." }, drill: { jp: "Der Erlass kam aus der Behörde", en: "The decree came from the authority" }, accept: ["decree", "edict", "ministerial order", "directive"], hint: "Two opposite meanings from erlassen: to issue a rule, and to let someone off a debt — der Erlass der Schulden." },
        { id: "de-u110l1-dasmerkblatt", type: "vocab", front: "das Merkblatt", reading: "dasmerkblatt", meaning: "information leaflet (explaining a procedure)", example: { jp: "Im Merkblatt steht in einfachem Deutsch, welche Unterlagen man mitbringen muss.", en: "The leaflet says in simple German which documents you have to bring." }, drill: { jp: "Das Merkblatt erklärt alle wichtigen Unterlagen", en: "The leaflet explains all the important documents" }, accept: ["leaflet", "information sheet", "fact sheet", "guidance note"], hint: "merken + Blatt: the sheet you are meant to note. Usually the only readable document in the envelope." },
      ],
    },
    {
      id: "de-u110l2",
      unit: 110,
      lesson: 2,
      title: "Das Gremium tagt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a committee works: who sits on it, who chairs it, when it meets, what is on the agenda, and who calls the meeting.",
      items: [
        { id: "de-u110l2-dasgremium", type: "vocab", front: "das Gremium", reading: "dasgremium", meaning: "body (formally constituted group)", example: { jp: "Das Gremium hat elf Mitglieder und entscheidet über die Drittmittel.", en: "The body has eleven members and decides on the third-party funding." }, drill: { jp: "Das Gremium entscheidet über das Geld", en: "The body decides on the money" }, accept: ["body", "committee", "panel", "board"], hint: "Plural die Gremien. The umbrella word for any formal group that decides together — Ausschuss, Rat, Beirat are all Gremien." },
        { id: "de-u110l2-derbeirat", type: "vocab", front: "der Beirat", reading: "derbeirat", meaning: "advisory board (advises but does not decide)", example: { jp: "Der Beirat kann nur raten, entscheiden muss am Ende das Gremium.", en: "The advisory board can only advise; in the end the body has to decide." }, drill: { jp: "Der Beirat tagt nur zweimal im Jahr", en: "The advisory board meets only twice a year" }, accept: ["advisory board", "advisory council", "advisory committee"], hint: "bei + Rat (advice): it sits beside the decision and never in it. Every German Hochschule, Klinik and Stiftung has one." },
        { id: "de-u110l2-diesitzung", type: "vocab", front: "die Sitzung", reading: "diesitzung", meaning: "formal meeting (session)", example: { jp: "Die Sitzung war öffentlich, aber es kamen nur zwei Leute.", en: "The meeting was public, but only two people came." }, drill: { jp: "Die Sitzung dauerte fast vier Stunden", en: "The meeting lasted almost four hours" }, accept: ["meeting", "session", "sitting"], hint: "From sitzen. More formal than das Treffen (u20) and minuted: es wird ein Protokoll geführt." },
        { id: "de-u110l2-tagen", type: "vocab", front: "tagen", reading: "tagen", meaning: "to be in session (of a body)", example: { jp: "Der Ausschuss tagt einmal im Monat, im Sommer gar nicht.", en: "The committee is in session once a month, and not at all in summer." }, drill: { jp: "Das Gremium wird am Freitag tagen", en: "The body will be in session on Friday" }, accept: ["to be in session", "to meet", "to sit", "to convene"], hint: "From der Tag, and only used of bodies, never of people: der Bundestag tagt. Its noun is die Tagung, a conference." },
        { id: "de-u110l2-dietagesordnung", type: "vocab", front: "die Tagesordnung", reading: "dietagesordnung", meaning: "agenda (order of business)", example: { jp: "Der Punkt stand nicht auf der Tagesordnung und wurde trotzdem besprochen.", en: "The item was not on the agenda and was discussed all the same." }, drill: { jp: "Die Tagesordnung ist sehr lang", en: "The agenda is very long" }, accept: ["agenda", "order of business", "order of the day"], hint: "Note the idiom zur Tagesordnung übergehen — to move on as if nothing had happened." },
        { id: "de-u110l2-einberufen", type: "vocab", front: "einberufen", reading: "einberufen", meaning: "to convene (call a meeting)", example: { jp: "Der Vorsitz kann jederzeit eine Sitzung einberufen, wenn es eilt.", en: "The chair can convene a meeting at any time if it is urgent." }, drill: { jp: "Die Behörde will eine Sitzung einberufen", en: "The authority wants to convene a meeting" }, accept: ["to convene", "to call", "to summon", "to call together"], hint: "Separable: beruft … ein. Also of conscription — zum Wehrdienst einberufen." },
      ],
    },
    {
      id: "de-u110l3",
      unit: 110,
      lesson: 3,
      title: "Verfahren und Beteiligung",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Take part in an official procedure: who is the applicant, which level decides, when you get heard, and how your written comment enters the file.",
      items: [
        { id: "de-u110l3-derantragsteller", type: "vocab", front: "der Antragsteller", reading: "derantragsteller", meaning: "applicant (person making the application)", example: { jp: "Der Antragsteller muss selbst nachweisen, dass er alle Unterlagen geschickt hat.", en: "The applicant has to prove himself that he sent all the documents." }, drill: { jp: "Der Antragsteller wartet seit acht Wochen", en: "The applicant has been waiting for eight weeks" }, accept: ["applicant", "petitioner", "claimant"], hint: "Antrag + stellen: in German you *place* an application. Female: die Antragstellerin." },
        { id: "de-u110l3-dervorgang", type: "vocab", front: "der Vorgang", reading: "dervorgang", meaning: "case file (a matter as the office tracks it)", example: { jp: "Der Vorgang liegt seit August bei der Behörde und hat eine eigene Nummer.", en: "The case has been with the authority since August and has a number of its own." }, drill: { jp: "Der Vorgang hat eine lange Nummer", en: "The case has a long number" }, accept: ["case", "case file", "matter", "procedure"], hint: "Two lives: a process in general (ein natürlicher Vorgang) and, in an office, your file — Ihr Vorgang wird bearbeitet." },
        { id: "de-u110l3-dieanhorung", type: "vocab", front: "die Anhörung", reading: "dieanhorung", meaning: "hearing (formal chance to be heard)", example: { jp: "Vor der Verfügung gab es eine Anhörung, die zwanzig Minuten dauerte.", en: "Before the order there was a hearing that lasted twenty minutes." }, drill: { jp: "Die Anhörung dauerte nur zwanzig Minuten", en: "The hearing lasted only twenty minutes" }, accept: ["hearing", "formal hearing", "consultation"], hint: "From anhören. A right, not a favour: an authority must hear you before it decides against you." },
        { id: "de-u110l3-diestellungnahme", type: "vocab", front: "die Stellungnahme", reading: "diestellungnahme", meaning: "written comment (formal position taken)", example: { jp: "Die Klinik hat eine kurze Stellungnahme geschickt und sonst nichts gesagt.", en: "The clinic sent a short written comment and said nothing else." }, drill: { jp: "Die Stellungnahme hat nur zwei Seiten", en: "The written comment has only two pages" }, accept: ["statement", "written comment", "position", "response"], hint: "Stellung nehmen zu etwas — to take a position on something. The noun is what lands in the file." },
        { id: "de-u110l3-dervermerk", type: "vocab", front: "der Vermerk", reading: "dervermerk", meaning: "file note (short internal record)", example: { jp: "In der Akte liegt nur ein Vermerk über das Telefonat, kein Protokoll.", en: "In the file there is only a note about the phone call, no minutes." }, drill: { jp: "Der Vermerk liegt seit gestern vor", en: "The file note has been available since yesterday" }, accept: ["file note", "note", "memo", "annotation"], hint: "From vermerken, to note down. Ein handschriftlicher Vermerk on a document is how German administration talks to itself." },
        { id: "de-u110l3-zurkenntnisnehmen", type: "vocab", front: "zur Kenntnis nehmen", reading: "zurkenntnisnehmen", meaning: "to note (take official notice of)", example: { jp: "Das Gremium hat den Bericht zur Kenntnis genommen und nichts beschlossen.", en: "The body noted the report and decided nothing." }, drill: { jp: "Wir haben Ihr Schreiben zur Kenntnis nehmen können", en: "We have been able to note your letter" }, accept: ["to note", "to take note of", "to acknowledge", "to take notice of"], hint: "Deliberately weak: noting a thing is exactly what you do instead of agreeing with it. Zur Kenntnisnahme on a memo means for information only." },
      ],
    },
    {
      id: "de-u110l4",
      unit: 110,
      lesson: 4,
      title: "An die Öffentlichkeit",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow how an institution goes public: the official announcement, the press release, who speaks in whose name, and what makes a statement official.",
      items: [
        { id: "de-u110l4-diebekanntmachung", type: "vocab", front: "die Bekanntmachung", reading: "diebekanntmachung", meaning: "public notice (official announcement)", example: { jp: "Die Bekanntmachung hing zwei Wochen im Rathaus, gelesen hat sie kaum jemand.", en: "The public notice hung in the town hall for two weeks; hardly anybody read it." }, drill: { jp: "Die Bekanntmachung hing zwei Wochen aus", en: "The public notice was displayed for two weeks" }, accept: ["public notice", "announcement", "official notice", "proclamation"], hint: "A legal act, not just information: many German decisions only take effect once they have been bekannt gemacht." },
        { id: "de-u110l4-bekanntgeben", type: "vocab", front: "bekannt geben", reading: "bekanntgeben", meaning: "to announce (make officially known)", example: { jp: "Die Stadt will das Ergebnis erst am Montag bekannt geben.", en: "The city wants to announce the result only on Monday." }, drill: { jp: "Die Stadt will das Ergebnis bekannt geben", en: "The city wants to announce the result" }, accept: ["to announce", "to make known", "to disclose", "to declare"], hint: "Two words since the spelling reform. Its everyday cousin is mitteilen; bekannt geben always faces a public." },
        { id: "de-u110l4-diepressemitteilung", type: "vocab", front: "die Pressemitteilung", reading: "diepressemitteilung", meaning: "press release", example: { jp: "Die Pressemitteilung war vier Sätze lang und beantwortete keine einzige Frage.", en: "The press release was four sentences long and answered not a single question." }, drill: { jp: "Die Pressemitteilung war sehr kurz", en: "The press release was very short" }, accept: ["press release", "press statement", "media release"], hint: "Presse + Mitteilung. Journalists shorten it to die PM — and treat it as the beginning of the Recherche, not the end." },
        { id: "de-u110l4-amtlich", type: "vocab", front: "amtlich", reading: "amtlich", meaning: "official (issued by an authority)", example: { jp: "Erst wenn es amtlich ist, kann die Kasse etwas zahlen.", en: "Only once it is official can the insurer pay anything." }, drill: { jp: "Erst ab Montag ist alles amtlich", en: "Only from Monday is everything official" }, accept: ["official", "officially confirmed", "formal"], hint: "From das Amt (u32). Amtlich is stronger than offiziell: it means a public authority stands behind it. Es ist amtlich! = it's confirmed." },
        { id: "de-u110l4-imnamenvon", type: "vocab", front: "im Namen von", reading: "imnamenvon", meaning: "on behalf of", example: { jp: "Sie hat im Namen der ganzen Station gesprochen, nicht für sich.", en: "She spoke on behalf of the whole ward, not for herself." }, drill: { jp: "Er spricht im Namen von zwölf Betrieben", en: "He speaks on behalf of twelve plants" }, accept: ["on behalf of", "in the name of", "for", "representing"], hint: "With a bare genitive it is even more formal: im Namen des Volkes — the opening words of every German judgment." },
        { id: "de-u110l4-verlautbaren", type: "vocab", front: "verlautbaren", reading: "verlautbaren", meaning: "to state publicly (issue a formal word)", example: { jp: "Aus dem Ministerium wurde verlautbart, dass die Prüfung weiterläuft.", en: "It was stated publicly from the ministry that the examination continues." }, drill: { jp: "Die Behörde wollte dazu nichts verlautbaren", en: "The authority wanted to state nothing publicly on it" }, accept: ["to state publicly", "to announce officially", "to give out", "to issue a statement"], hint: "Stiff even for officialese, and usually passive: es wurde verlautbart. Its everyday relative is the far commoner verlauten lassen." },
      ],
    },
  ],
};
