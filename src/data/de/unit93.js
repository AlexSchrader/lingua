// DE Unit 93 — Wirtschaft und Verhandlung (slot: business) — B2
// Conventions: de/unit1.js + de/unit51.js + de/unit88.js (B2 band constitution).
// Like u92, a slot the earlier bands already mined: das Angebot (u27), der
// Rabatt (u27), der Kunde (u18), kündigen (u24), die Frist (u56), der Auftrag
// (u56), verhandeln (u56), das Risiko (u60), nachgeben (u60), die Nachfrage
// (u66), der Umsatz (u66), die Bilanz (u66), die Forderung (u71), die Lieferung
// (u71), abschließen (u79), der Zuschlag (u79), die Zusage (u79), die Laufzeit
// (u79), die Anzahlung (u79), verbindlich (u61), liefern (u83) — all used in
// examples here, none re-taught. This unit takes what is left and what B2
// actually needs: the market you sit in, the money words, and the moves inside
// a negotiation.
// Self-check, dropped as same-lexeme duplicates: die Verhandlung (verhandeln
// u56 — the tool did not catch this one, the noun and verb stem differently;
// caught by eye, which is why the header rule says check both), die Absage
// (absagen u40), die Zahlung (die Zahl u17 — a false family, real collision).
//
// FREE: Preise, Kosten, Kunden, Firmen, Prozent, Euro, Details, Markt, Märkte, Produkt, Produkte, Investition, Investitionen, Kapital, Branche, Marge, Rendite, Manager, Konkurrenz
export const DE_UNIT93 = {
  id: "de-u93",
  lang: "de",
  title: "Wirtschaft und Verhandlung",
  order: 93,
  stage: "b2",
  lessons: [
    {
      id: "de-u93l1",
      unit: 93,
      lesson: 1,
      title: "Der Markt, in dem man sitzt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Place a company in its market — name the competition, the share it holds, the sector it belongs to, and the suppliers it depends on.",
      items: [
        { id: "de-u93l1-diekonkurrenz", type: "vocab", front: "die Konkurrenz", reading: "diekonkurrenz", meaning: "the competitors", example: { jp: "Die Konkurrenz ist billiger, aber ihre Lieferung dauert fast drei Wochen länger.", en: "The competition is cheaper, but their delivery takes almost three weeks longer." }, drill: { jp: "Die Konkurrenz wächst in diesem Bereich", en: "The competition is growing in this area" }, accept: ["competition", "the competition", "competitors", "the competitors", "rivalry"], hint: "The rivals themselves, not the contest — for that German says der Wettbewerb (below). die Konkurrenz schläft nicht is the standard German business cliché." },
        { id: "de-u93l1-derwettbewerb", type: "vocab", front: "der Wettbewerb", reading: "derwettbewerb", meaning: "the contest", example: { jp: "Der Wettbewerb ist hart, trotzdem hält die Firma ihre Preise seit Jahren stabil.", en: "Competition is tough, and yet the company has kept its prices stable for years." }, drill: { jp: "Der Wettbewerb bleibt in Europa hart", en: "Competition remains tough in Europe" }, accept: ["competition", "the competition", "contest", "the contest", "competitive environment"], hint: "der Wettbewerb is the contest or the competitive conditions; die Konkurrenz is who you are up against. Also the word for a competition you enter." },
        { id: "de-u93l1-dermarktanteil", type: "vocab", front: "der Marktanteil", reading: "dermarktanteil", meaning: "the market share", example: { jp: "Der Marktanteil ist geringfügig gewachsen, aber der Gewinn ist im gleichen Jahr gefallen.", en: "The market share grew marginally, but the profit fell in the same year." }, drill: { jp: "Der Marktanteil schrumpft seit zwei Jahren", en: "The market share has been shrinking for two years" }, accept: ["market share", "the market share", "share of the market"], hint: "der Markt + der Anteil (u53). Measured in Prozent, and the number every German annual report leads with." },
        { id: "de-u93l1-diebranche", type: "vocab", front: "die Branche", reading: "diebranche", meaning: "the sector", example: { jp: "In dieser Branche zahlt fast niemand mehr die alten Preise, seit die Konkurrenz aus Asien kam.", en: "In this sector almost nobody pays the old prices any more, since the competition from Asia arrived." }, drill: { jp: "Die Branche steckt in einer Krise", en: "The sector is in a crisis" }, accept: ["sector", "the sector", "industry", "the industry", "line of business", "trade"], hint: "French in origin and pronounced that way: BRAHN-sche. die Baubranche, die Autobranche — German builds it into compounds freely." },
        { id: "de-u93l1-derlieferant", type: "vocab", front: "der Lieferant", reading: "derlieferant", meaning: "the supplier", example: { jp: "Der Lieferant hat die Frist nicht gehalten, deshalb steht jetzt die ganze Lieferkette still.", en: "The supplier did not meet the deadline, which is why the whole supply chain is now at a standstill." }, drill: { jp: "Der Lieferant kommt aus dem Ausland", en: "The supplier comes from abroad" }, accept: ["supplier", "the supplier", "vendor", "the vendor", "delivery man"], hint: "From liefern (u83). Weak masculine: den Lieferanten, dem Lieferanten — the -en shows up in every case but the nominative." },
        { id: "de-u93l1-dielieferkette", type: "vocab", front: "die Lieferkette", reading: "dielieferkette", meaning: "the supply chain", example: { jp: "Die Lieferkette ist an einer einzigen Stelle unterbrochen, und trotzdem fehlt am Ende das ganze Produkt.", en: "The supply chain is broken at a single point, and yet in the end the whole product is missing." }, drill: { jp: "Die Lieferkette bleibt sehr lang", en: "The supply chain stays very long" }, accept: ["supply chain", "the supply chain"], hint: "liefern + die Kette (chain). A word that was technical until 2020 and is now in every German newspaper — das Lieferkettengesetz is real law." },
      ],
    },
    {
      id: "de-u93l2",
      unit: 93,
      lesson: 2,
      title: "Was am Ende übrig bleibt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about money that stays rather than money that moves — profit, margin, return, capital, reserves and a markup.",
      items: [
        { id: "de-u93l2-dergewinn", type: "vocab", front: "der Gewinn", reading: "dergewinn", meaning: "the profit", example: { jp: "Der Gewinn ist gestiegen, obwohl die Firma weniger verkauft hat als im Jahr davor.", en: "The profit has risen, although the company sold less than in the year before." }, drill: { jp: "Der Gewinn fällt in diesem Jahr", en: "The profit is falling this year" }, accept: ["profit", "the profit", "gain", "the gain", "winnings", "prize"], hint: "Also what you win in a lottery — der Hauptgewinn is the jackpot. Its opposite in a balance sheet is der Verlust." },
        { id: "de-u93l2-diemarge", type: "vocab", front: "die Marge", reading: "diemarge", meaning: "the margin", example: { jp: "Die Marge ist winzig, deshalb tut ein Rabatt dem Ergebnis sofort weh.", en: "The margin is tiny, which is why a discount hurts the result immediately." }, drill: { jp: "Die Marge bleibt in dieser Branche klein", en: "The margin stays small in this sector" }, accept: ["margin", "the margin", "profit margin"], hint: "French again — the g is the soft zh of 'measure': [ˈmaʁʒə]. What is left between what you pay and what you charge. Not to be confused with der Spielraum (l4), which is room to move in a talk." },
        { id: "de-u93l2-dierendite", type: "vocab", front: "die Rendite", reading: "dierendite", meaning: "the return", example: { jp: "Die Rendite ist gut, aber das Risiko trägt am Ende der Kunde.", en: "The return is good, but in the end it is the customer who bears the risk." }, drill: { jp: "Die Rendite liegt bei vier Prozent", en: "The return is around four percent" }, accept: ["return", "the return", "yield", "the yield", "return on investment"], hint: "What an investment brings back, in Prozent. The German savings debate runs on this word: Rendite gegen Sicherheit." },
        { id: "de-u93l2-daskapital", type: "vocab", front: "das Kapital", reading: "daskapital", meaning: "the capital", example: { jp: "Das Kapital kommt von außen, und deshalb entscheidet der Vorstand nicht mehr selbst.", en: "The capital comes from outside, and that is why the board no longer decides for itself." }, drill: { jp: "Das Kapital kommt aus dem Ausland", en: "The capital comes from abroad" }, accept: ["capital", "the capital", "funds", "assets"], hint: "The money that works, not the city — that is die Hauptstadt. aus etwas Kapital schlagen = to make capital out of something." },
        { id: "de-u93l2-dierucklage", type: "vocab", front: "die Rücklage", reading: "dierucklage", meaning: "the reserve", example: { jp: "Ohne Rücklagen hält keine Firma zwei schlechte Jahre aus, egal wie gut das Produkt ist.", en: "Without reserves no company survives two bad years, no matter how good the product is." }, drill: { jp: "Die Rücklage reicht für zwei Jahre", en: "The reserve is enough for two years" }, accept: ["reserve", "the reserve", "reserves", "savings", "provision", "nest egg"], hint: "zurück + legen: money laid back. Usually plural — Rücklagen bilden = to build up reserves, the thing every German finance minister claims to do." },
        { id: "de-u93l2-deraufschlag", type: "vocab", front: "der Aufschlag", reading: "deraufschlag", meaning: "the markup", example: { jp: "Der Aufschlag für die schnelle Lieferung ist beträchtlich, trotzdem nehmen ihn viele Kunden.", en: "The surcharge for fast delivery is considerable, and yet a lot of customers take it." }, drill: { jp: "Der Aufschlag kostet zehn Prozent", en: "The surcharge costs ten percent" }, accept: ["surcharge", "the surcharge", "markup", "the markup", "extra charge", "serve"], hint: "auf + schlagen: what is struck on top of the price. In tennis it is the serve — same picture, different court." },
      ],
    },
    {
      id: "de-u93l3",
      unit: 93,
      lesson: 3,
      title: "Am Verhandlungstisch",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Move inside a negotiation — meet the other side halfway, put a counter-proposal on the table, name your room to move, and describe the pressure on the price.",
      items: [
        { id: "de-u93l3-entgegenkommen", type: "vocab", front: "entgegenkommen", reading: "entgegenkommen", meaning: "to accommodate", example: { jp: "Wir können Ihnen beim Preis entgegenkommen, wenn Sie den Auftrag für zwei Jahre unterschreiben.", en: "We can accommodate you on the price if you sign the order for two years." }, drill: { jp: "Wir wollen dem Kunden entgegenkommen", en: "We want to accommodate the customer" }, accept: ["to accommodate", "accommodate", "to meet halfway", "meet halfway", "to oblige", "to come towards"], hint: "entgegen (towards) + kommen: to walk towards the other person. Separable and dative: jemandem entgegenkommen. As a noun, das Entgegenkommen is a goodwill gesture." },
        { id: "de-u93l3-dergegenvorschlag", type: "vocab", front: "der Gegenvorschlag", reading: "dergegenvorschlag", meaning: "the counter-proposal", example: { jp: "Der Gegenvorschlag kam sofort, aber er war für die zwei Seiten zu teuer.", en: "The counter-proposal came immediately, but it was too expensive for both sides." }, drill: { jp: "Der Gegenvorschlag liegt seit Montag vor", en: "The counter-proposal has been on the table since Monday" }, accept: ["counter-proposal", "the counter-proposal", "counter-offer", "counterproposal"], hint: "gegen + der Vorschlag (u51). German builds Gegen- onto almost anything: die Gegenfrage, das Gegenangebot, die Gegenseite." },
        { id: "de-u93l3-derspielraum", type: "vocab", front: "der Spielraum", reading: "derspielraum", meaning: "the leeway", example: { jp: "Beim Preis haben wir kaum Spielraum, bei der Frist dagegen ziemlich viel.", en: "On price we have hardly any leeway, on the deadline by contrast quite a lot." }, drill: { jp: "Der Spielraum bleibt sehr klein", en: "The leeway stays very small" }, accept: ["leeway", "the leeway", "room for manoeuvre", "scope", "latitude", "margin"], hint: "das Spiel (play, in the mechanical sense of slack) + der Raum: the slack you have. Spielraum haben = to have room to move." },
        { id: "de-u93l3-derpreisdruck", type: "vocab", front: "der Preisdruck", reading: "derpreisdruck", meaning: "the price pressure", example: { jp: "Der Preisdruck kommt aus dem Ausland, und deshalb hilft ein besseres Produkt wenig.", en: "The price pressure comes from abroad, which is why a better product helps little." }, drill: { jp: "Der Preisdruck steigt in der ganzen Branche", en: "The price pressure is rising across the whole sector" }, accept: ["price pressure", "the price pressure", "pricing pressure", "pressure on prices"], hint: "der Preis + der Druck (pressure). unter Druck stehen = to be under pressure; German business German runs on Druck compounds." },
        { id: "de-u93l3-dieausschreibung", type: "vocab", front: "die Ausschreibung", reading: "dieausschreibung", meaning: "the tender", example: { jp: "Die Ausschreibung läuft bis Ende Mai, danach entscheidet die Behörde über den Zuschlag.", en: "The tender runs until the end of May; after that the authority decides on the contract award." }, drill: { jp: "Die Ausschreibung läuft bis Mai", en: "The tender runs until May" }, accept: ["tender", "the tender", "invitation to tender", "call for bids", "job advertisement", "public tender"], hint: "aus + schreiben: to write something out publicly. Both a public tender and a job posting — eine Stelle ausschreiben." },
        { id: "de-u93l3-kalkulieren", type: "vocab", front: "kalkulieren", reading: "kalkulieren", meaning: "to calculate", example: { jp: "Wir kalkulieren mit steigenden Kosten, weil der Lieferant schon eine Erhöhung angekündigt hat.", en: "We are calculating with rising costs, because the supplier has already announced an increase." }, drill: { jp: "Die Firmen kalkulieren sehr genau", en: "The companies calculate very precisely" }, accept: ["to calculate", "calculate", "to cost", "to budget", "to reckon with", "to factor in"], hint: "Commercial rather than mathematical — rechnen is the arithmetic. mit etwas kalkulieren = to factor something in; knapp kalkuliert = costed with no slack." },
      ],
    },
    {
      id: "de-u93l4",
      unit: 93,
      lesson: 4,
      title: "Wer entscheidet, und was danach kommt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name who decides and what follows — the board, an investment, a takeover, a supplier on the market, a drop in sales, and the number of units involved.",
      items: [
        { id: "de-u93l4-dervorstand", type: "vocab", front: "der Vorstand", reading: "dervorstand", meaning: "the executive board", example: { jp: "Der Vorstand hat den Beschluss schon gefasst, bevor die Mitarbeiter überhaupt davon gehört haben.", en: "The board had already taken the decision before the employees had even heard about it." }, drill: { jp: "Der Vorstand entscheidet am Montag", en: "The board decides on Monday" }, accept: ["board", "the board", "executive board", "management board", "committee"], hint: "vor + stehen: those who stand in front. In a German company the Vorstand runs it and der Aufsichtsrat supervises — two separate bodies, unlike the single English board." },
        { id: "de-u93l4-dieinvestition", type: "vocab", front: "die Investition", reading: "dieinvestition", meaning: "the investment", example: { jp: "Die Investition rechnet sich erst nach acht Jahren, und deshalb zweifelt der halbe Vorstand daran.", en: "The investment only pays off after eight years, which is why half the board doubts it." }, drill: { jp: "Die Investition kostet viel Kapital", en: "The investment costs a lot of capital" }, accept: ["investment", "the investment", "capital expenditure"], hint: "The act and the money both. investieren in + accusative. Note the German plural: die Investitionen, which is what politicians promise." },
        { id: "de-u93l4-dieubernahme", type: "vocab", front: "die Übernahme", reading: "dieubernahme", meaning: "the takeover", example: { jp: "Nach der Übernahme blieb der Name gleich, aber fast der ganze Vorstand wurde ausgetauscht.", en: "After the takeover the name stayed the same, but almost the entire board was replaced." }, drill: { jp: "Die Übernahme kostet sehr viel Kapital", en: "The takeover costs a great deal of capital" }, accept: ["takeover", "the takeover", "acquisition", "the acquisition", "assumption", "adoption"], hint: "From übernehmen (to take over): a company, a cost, or a responsibility — die Übernahme der Kosten is on every German insurance letter." },
        { id: "de-u93l4-deranbieter", type: "vocab", front: "der Anbieter", reading: "deranbieter", meaning: "the provider", example: { jp: "Der günstigste Anbieter hat am Ende gewonnen, obwohl seine Bilanz ziemlich fragwürdig aussieht.", en: "The cheapest provider won in the end, although its balance sheet looks rather dubious." }, drill: { jp: "Der Anbieter kommt aus dem Ausland", en: "The provider comes from abroad" }, accept: ["provider", "the provider", "supplier", "vendor", "operator"], hint: "From anbieten (to offer): whoever puts the offer on the market. Used for phone companies, insurers and energy firms — der günstigste Anbieter." },
        { id: "de-u93l4-derumsatzruckgang", type: "vocab", front: "der Umsatzrückgang", reading: "derumsatzruckgang", meaning: "the drop in sales", example: { jp: "Der Umsatzrückgang war deutlich, trotzdem spricht der Bericht von einem guten Jahr.", en: "The drop in sales was clear, and yet the report speaks of a good year." }, drill: { jp: "Der Umsatzrückgang kostet viele Stellen", en: "The drop in sales costs many jobs" }, accept: ["drop in sales", "the drop in sales", "decline in revenue", "fall in turnover", "sales decline"], hint: "der Umsatz (u66) + der Rückgang (a going-back). A three-noun compound is normal German, not showing off: zurückgehen is the verb underneath." },
        { id: "de-u93l4-diestuckzahl", type: "vocab", front: "die Stückzahl", reading: "diestuckzahl", meaning: "the number of units", example: { jp: "Bei dieser Stückzahl ist der Preis kaum zu halten, es sei denn der Kunde wartet länger.", en: "At this number of units the price can hardly be held, unless the customer waits longer." }, drill: { jp: "Die Stückzahl steigt mit dem Auftrag", en: "The number of units rises with the order" }, accept: ["number of units", "the number of units", "quantity", "unit count", "volume"], hint: "das Stück (piece) + die Zahl (u17). Quantity as a count, where die Menge is quantity as an amount — the distinction matters in any German order form." },
      ],
    },
  ],
};
