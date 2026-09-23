// NO Unit 93 — Næringsliv og forhandling (slot: business) — B2
// Retitled from the scaffold's English placeholder "Business and negotiation".
// B2 band conventions live in no/unit88.js's header; language-wide in unit1.js.
//
// ⚠️ u66 "Penger og økonomi" IS THE B1 VERSION AND IT IS GENEROUS — it already
// owns en kostnad, et overskudd, et underskudd, ei investering, å investere,
// en aksje and ei forsikring, and u27 owns et budsjett and en kunde. Measured
// while drafting: 9 of 44 first-draft candidates were already taught there.
// So this unit is NOT "money words". It is the vocabulary of DOING business
// with another party — the table, the contract, and the running of a firm.
//
// ⚠️ et kompromiss is u68l2 (relationships, not business) and is used here but
// not re-taught. et forlik (u92l4) is its legal cousin and the glosses keep
// them apart: a kompromiss settles a question, a forlik ends a court case, and
// giving ground at the table is å gi etter.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT93 = {
  id: "no-u93",
  lang: "no",
  title: "Næringsliv og forhandling",
  order: 93,
  stage: "b2",
  lessons: [
    {
      id: "no-u93l1",
      unit: 93,
      lesson: 1,
      title: "Ved forhandlingsbordet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Hold your own in a negotiation — make a counter-offer, give ground on purpose, and meet the other side part of the way.",
      items: [
        { id: "no-u93l1-eiforhandling", type: "vocab", front: "ei forhandling", reading: "eiforhandling", meaning: "a negotiation (the process of bargaining)", example: { jp: "Ei forhandling er ikke en kamp, og den som glemmer det taper som regel.", en: "A negotiation is not a fight, and whoever forgets that usually loses." }, accept: ["bargaining talks", "a round of talks"], drill: { jp: "Vi er nå inne i ei forhandling", en: "We are now in a negotiation" }, hint: "ei forhandling → forhandlinga, flertall forhandlinger. -ing er hunkjønn (unit88 regel B3). Ofte i flertall: lønnsforhandlinger." },
        { id: "no-u93l1-etmotbud", type: "vocab", front: "et motbud", reading: "etmotbud", meaning: "counter-offer (your price back to theirs)", example: { jp: "Hun sa ikke nei, hun kom med et motbud, og da visste alle at det gikk an.", en: "She did not say no, she came back with a counter-offer, and then everybody knew it was possible." }, accept: ["a counter-bid", "an offer in return"], drill: { jp: "De kom med et motbud i går", en: "They came with a counter-offer yesterday" }, hint: "et motbud → motbudet, flertall motbud (likt). Mot + et bud. Et motbud er et JA til å fortsette, ikke et nei." },
        { id: "no-u93l1-agietter", type: "vocab", front: "å gi etter", reading: "agietter", meaning: "to give ground (drop a demand you were holding)", example: { jp: "Han måtte gi etter på prisen, men han fikk ha alt det andre.", en: "He had to give ground on the price, but he got to keep everything else." }, accept: ["to yield on a point", "to back down"], drill: { jp: "Det er lurt å gi etter her", en: "It is wise to give ground here" }, hint: "Fast uttrykk, å gi (u1) + etter. Å gi etter er å slippe ETT krav; å gi opp er å slutte helt." },
        { id: "no-u93l1-akommeimote", type: "vocab", front: "å komme i møte", reading: "akommeimote", meaning: "to accommodate (move towards what the other side needs)", example: { jp: "De kom oss i møte på tida, og derfor sa vi ja til resten.", en: "They accommodated us on the timing, and that is why we said yes to the rest." }, accept: ["to meet halfway", "to make allowance for"], drill: { jp: "Vi prøver å komme i møte her", en: "We are trying to accommodate here" }, hint: "Fast uttrykk, fire ord. Å komme (u3) + i møte. NB: du kommer NOEN i møte — personen står mellom komme og i møte. ø folder til o." },
        { id: "no-u93l1-astrekkeseg", type: "vocab", front: "å strekke seg", reading: "astrekkeseg", meaning: "to stretch oneself (go further than you meant to)", example: { jp: "Vi kan strekke oss til neste fredag, men ikke lenge etter det.", en: "We can stretch ourselves to next Friday, but not long after that." }, accept: ["to go further than planned", "to extend oneself"], drill: { jp: "Det er nødvendig å strekke seg litt", en: "It is necessary to stretch oneself a little" }, hint: "Refleksivt: jeg strekker meg, vi strekker oss. Hvor langt du strekker deg er ditt siste tilbud, sagt pent." },
        { id: "no-u93l1-eninteressent", type: "vocab", front: "en interessent", reading: "eninteressent", meaning: "stakeholder (anybody the outcome will touch)", example: { jp: "De glemte en interessent, og det var nettopp de som bor nær.", en: "They forgot a stakeholder, and it was exactly those who live nearby." }, accept: ["an affected party", "somebody with an interest at stake"], drill: { jp: "Her er en interessent vi glemte", en: "Here is a stakeholder we forgot" }, hint: "en interessent → interessenten, flertall interessenter. Fra ei interesse (u35). En interessent trenger ikke sitte ved bordet — men blir berørt." },
      ],
    },
    {
      id: "no-u93l2",
      unit: 93,
      lesson: 2,
      title: "Avtale og vilkår",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read and close an agreement — the clause that matters, who delivers what, and the share each side ends up with.",
      items: [
        { id: "no-u93l2-ainngaavtale", type: "vocab", front: "å inngå avtale", reading: "ainngaavtale", meaning: "to enter into an agreement (make it binding)", example: { jp: "De brukte et halvt år på å snakke, og så inngår de avtale på ti minutter.", en: "They spent half a year talking, and then enter into an agreement in ten minutes." }, accept: ["to conclude a contract", "to strike a deal"], drill: { jp: "De klarte å inngå avtale til slutt", en: "They managed to enter into an agreement in the end" }, hint: "Å inngå (u90) + en avtale (u32). ⚠️ Uten artikkel i dette uttrykket: å inngå avtale, ikke å inngå en avtale." },
        { id: "no-u93l2-enklausul", type: "vocab", front: "en klausul", reading: "enklausul", meaning: "clause (one condition written into a contract)", example: { jp: "Det står en klausul nede som gjør hele resten mindre god enn den ser ut.", en: "There is a clause at the bottom that makes all the rest less good than it looks." }, accept: ["a contractual condition", "a written proviso"], drill: { jp: "Avtalen har en klausul om dette", en: "The agreement has a clause about this" }, hint: "en klausul → klausulen, flertall klausuler. En paragraf (u92) står i LOVEN; en klausul står i AVTALEN, og den har dere skrevet sjøl." },
        { id: "no-u93l2-enleverandor", type: "vocab", front: "en leverandør", reading: "enleverandor", meaning: "supplier (the firm that delivers to you)", example: { jp: "De byttet leverandør i sommer, og siden har ingenting kommet til rett tid.", en: "They changed supplier in the summer, and since then nothing has arrived on time." }, accept: ["a vendor", "a provider of goods"], drill: { jp: "Vi trenger en leverandør til", en: "We need one more supplier" }, hint: "en leverandør → leverandøren, flertall leverandører. Å levere (u27). En kunde (u27) kjøper; en leverandør selger. ø folder til o." },
        { id: "no-u93l2-etvilkarssett", type: "vocab", front: "et vilkårssett", reading: "etvilkarssett", meaning: "set of terms (all the conditions taken together)", example: { jp: "Hvert vilkårssett ser greit ut for seg, men til sammen er de umulige.", en: "Each set of terms looks fine on its own, but taken together they are impossible." }, accept: ["the terms as a package", "a body of conditions"], drill: { jp: "Vi fikk et vilkårssett i dag", en: "We got a set of terms today" }, hint: "et vilkårssett → vilkårssettet. Et vilkår (u61) + et sett. To s-er i midten: vilkårs-sett. Les alltid settet, ikke bare klausulen." },
        { id: "no-u93l2-eimalsetting", type: "vocab", front: "ei målsetting", reading: "eimalsetting", meaning: "stated objective (the goal a body has written down)", example: { jp: "Ei målsetting ingen kan måle er bare en fin setning i en plan.", en: "An objective nobody can measure is just a nice sentence in a plan." }, accept: ["a formal goal", "a declared aim"], drill: { jp: "Vi har ei målsetting for året", en: "We have an objective for the year" }, hint: "ei målsetting → målsettinga. -ing er hunkjønn (unit88 regel B3). Et mål (u24) + å sette. Et mål kan være privat; ei målsetting er skrevet ned." },
        { id: "no-u93l2-enandel", type: "vocab", front: "en andel", reading: "enandel", meaning: "share (the part of a whole that falls to you)", example: { jp: "Hun eier en liten andel, men hun har mer å si enn de store.", en: "She owns a small share, but she has more say than the big ones." }, accept: ["a portion of the whole", "a stake"], drill: { jp: "Han har en andel i selskapet", en: "He has a share in the company" }, hint: "en andel → andelen, flertall andeler. En del (u27) du har ANN — din del. En aksje (u66) er et papir; en andel er hvor mye av noe du har." },
      ],
    },
    {
      id: "no-u93l3",
      unit: 93,
      lesson: 3,
      title: "Tall i drifta",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read a firm's figures — what came in, what was left over, and who else is selling the same thing.",
      items: [
        { id: "no-u93l3-eiomsetning", type: "vocab", front: "ei omsetning", reading: "eiomsetning", meaning: "turnover (everything that came in before costs)", example: { jp: "Ei stor omsetning sier ingenting om du tjener penger, og det blander mange.", en: "A large turnover says nothing about whether you earn money, and many confuse that." }, accept: ["revenue", "gross sales"], drill: { jp: "Selskapet har ei omsetning på ti", en: "The company has a turnover of ten" }, hint: "ei omsetning → omsetninga. -ning er hunkjønn (unit88 regel B3). Om + å sette. ⚠️ Omsetning er FØR kostnader; fortjeneste er etter." },
        { id: "no-u93l3-eifortjeneste", type: "vocab", front: "ei fortjeneste", reading: "eifortjeneste", meaning: "profit (what is left when the costs are paid)", example: { jp: "Etter at alt var betalt, var det ei fortjeneste igjen på nesten ingenting.", en: "After everything was paid, there was a profit left of almost nothing." }, accept: ["earnings after costs", "the margin kept"], drill: { jp: "Her er ei fortjeneste vi kan bruke", en: "Here is a profit we can use" }, hint: "ei fortjeneste → fortjenesta. Å fortjene: det du har gjort deg fortjent til. Et overskudd (u66) er regnskapsordet; fortjeneste er hverdagsordet." },
        { id: "no-u93l3-engevinst", type: "vocab", front: "en gevinst", reading: "engevinst", meaning: "gain (what you come out ahead by)", example: { jp: "Den største gevinsten var ikke penger, men at folk begynner å stole på dem.", en: "The greatest gain was not money, but that people begin to trust them." }, accept: ["a benefit won", "an upside"], drill: { jp: "Dette gir en gevinst for alle", en: "This gives a gain for everybody" }, hint: "en gevinst → gevinsten, flertall gevinster. Fransk opphav, uttalt ge-VINST. Også premien i et lotteri. Motsatt: et tap." },
        { id: "no-u93l3-etinnkjop", type: "vocab", front: "et innkjøp", reading: "etinnkjop", meaning: "purchase made by a firm (buying in what it needs)", example: { jp: "Et stort innkjøp må flere si ja til, og derfor tar det tid.", en: "A large purchase has to be agreed by several people, and that is why it takes time." }, accept: ["a procurement", "a buying-in"], drill: { jp: "Vi gjorde et innkjøp i går", en: "We made a purchase yesterday" }, hint: "et innkjøp → innkjøpet, flertall innkjøp (likt). Inn + å kjøpe (u1). Om BEDRIFTER; privat sier du bare at du kjøpte noe. ø folder til o." },
        { id: "no-u93l3-enbransje", type: "vocab", front: "en bransje", reading: "enbransje", meaning: "industry sector (the trade a firm belongs to)", example: { jp: "Alle i bransjen kjenner hverandre, og det gjør det både lett og vanskelig.", en: "Everybody in the sector knows each other, and that makes it both easy and hard." }, accept: ["a line of business", "a trade"], drill: { jp: "Hun er ny i en bransje her", en: "She is new in a sector here" }, hint: "en bransje → bransjen, flertall bransjer. Fransk, uttalt BRANG-sje. Et fagfelt (u74) er kunnskap; en bransje er selskapene som lever av den." },
        { id: "no-u93l3-enkonkurrent", type: "vocab", front: "en konkurrent", reading: "enkonkurrent", meaning: "competitor (a firm after the same customers)", example: { jp: "Den største konkurrenten deres selger det samme til halve prisen.", en: "Their biggest competitor sells the same thing at half the price." }, accept: ["a rival firm", "somebody competing for the same trade"], drill: { jp: "De fikk en konkurrent i sommer", en: "They got a competitor in the summer" }, hint: "en konkurrent → konkurrenten, flertall konkurrenter. En motstander (u88) er i debatt eller sport; en konkurrent er i markedet (u66)." },
      ],
    },
    {
      id: "no-u93l4",
      unit: 93,
      lesson: 4,
      title: "Å drive et selskap",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about how a firm is run — who leads it, what gets handed to somebody else, and how much risk is being taken.",
      items: [
        { id: "no-u93l4-enkonkurranse", type: "vocab", front: "en konkurranse", reading: "enkonkurranse", meaning: "competition (the contest for the same market)", example: { jp: "En hard konkurranse er god for kundene og tung for dem som selger.", en: "Hard competition is good for the customers and heavy for those who sell." }, accept: ["rivalry in a market", "a contest for trade"], drill: { jp: "Det er en konkurranse om dette", en: "There is a competition about this" }, hint: "en konkurranse → konkurransen, flertall konkurranser. Også om sport og om en tevling. Konkurrenten (l3) er personen, konkurransen er tilstanden." },
        { id: "no-u93l4-asetteut", type: "vocab", front: "å sette ut", reading: "asetteut", meaning: "to outsource (have somebody outside do the work)", example: { jp: "De satte ut tallene, og nå bruker de mer tid på å forklare enn de sparte.", en: "They outsourced the figures, and now they spend more time explaining than they saved." }, accept: ["to contract out", "to hand to an outside firm"], drill: { jp: "Det er vanlig å sette ut arbeid", en: "It is common to outsource work" }, hint: "Fast uttrykk, å sette (u14) + ut. ⚠️ Også ordet for å slippe fisk i ei elv — sammenhengen avgjør." },
        { id: "no-u93l4-aloseinn", type: "vocab", front: "å løse inn", reading: "aloseinn", meaning: "to redeem (turn a paper claim into money)", example: { jp: "Du kan løse inn kortet når som helst, men da taper du renta.", en: "You can redeem the card whenever you like, but then you lose the interest." }, accept: ["to cash in", "to convert into money"], drill: { jp: "Det er mulig å løse inn dette", en: "It is possible to redeem this" }, hint: "Å løse (u60) + inn. Om gavekort, aksjer og forsikring (u66). ø folder til o, så lesinga er aloseinn." },
        { id: "no-u93l4-endagligleder", type: "vocab", front: "en daglig leder", reading: "endagligleder", meaning: "managing director (the one who runs the firm day to day)", example: { jp: "En daglig leder bestemmer mye, men ikke om selskapet skal selges.", en: "A managing director decides a lot, but not whether the company is to be sold." }, accept: ["a general manager", "the chief executive"], drill: { jp: "Hun er en daglig leder nå", en: "She is a managing director now" }, hint: "Fast tittel, tre ord. Daglig + en leder (u55). ⚠️ Adjektivet står INNE i tittelen, så dette er én enhet — ikke en leder som tilfeldigvis er daglig." },
        { id: "no-u93l4-atarisiko", type: "vocab", front: "å ta risiko", reading: "atarisiko", meaning: "to take on risk (accept that it may go wrong)", example: { jp: "Noen må ta risiko, ellers blir ingenting nytt laget i det hele tatt.", en: "Somebody has to take on risk, otherwise nothing new gets made at all." }, accept: ["to accept exposure", "to chance it"], drill: { jp: "Det er dumt å ta risiko her", en: "It is foolish to take on risk here" }, hint: "Å ta (u4) + en risiko (u52). ⚠️ Uten artikkel: å ta risiko, ikke å ta en risiko, når du mener det generelt." },
        { id: "no-u93l4-etstyremote", type: "vocab", front: "et styremøte", reading: "etstyremote", meaning: "board meeting (where the owners' side decides)", example: { jp: "Alt det viktige ble klart før styremøtet, og møtet var bare for å si det høyt.", en: "Everything important was settled before the board meeting, and the meeting was only to say it out loud." }, accept: ["a meeting of the board", "a directors' meeting"], drill: { jp: "Vi har et styremøte på mandag", en: "We have a board meeting on Monday" }, hint: "et styremøte → styremøtet, flertall styremøter. Å styre (u55) + et møte (u21). Styret er over daglig leder. ø folder til o." },
      ],
    },
  ],
};
