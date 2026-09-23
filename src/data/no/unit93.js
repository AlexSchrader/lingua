// NO Unit 93 — Næringsliv og forhandling (slot: business) — B2
// Block 1 of Norwegian B2. Band constitution: no/unit88.js §C1–C7.
//
// Blocked before authoring: `en avtale` u17, `et krav` u32, `et tilbud` u32,
// `en kontrakt` u32, `en kunde` u27, `en frist` u24, `et marked` u66,
// `et overskudd` u66, `et underskudd` u66, `ei investering` u66, `å investere`
// u66, `en aksje` u66, `en kostnad` u66, `en vekst` u50, `et kompromiss` u68.
// u66 "Money" and u32 between them own the ECONOMY layer, so this unit is the
// DEAL and the FIRM: negotiating one (l1), buying and selling through one (l2),
// what it earns (l3), and who else is in the market (l4).
//
// `ei forhandling` was cut as a transparent derivation of `å forhandle` (l1),
// and `en lønnsomhet` as one of `lønnsom` (l3).
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
      title: "Å forhandle",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Negotiate a Norwegian deal — name the other side, bid for the work, close the agreement, and find the clause nobody read.",
      items: [
        { id: "no-u93l1-aforhandle", type: "vocab", front: "å forhandle", reading: "aforhandle", meaning: "to negotiate", example: { jp: "De forhandler fremdeles, men ingen tror på en avtale før jul.", en: "They are still negotiating, but nobody believes in a deal before Christmas." }, accept: ["to bargain", "to haggle"], drill: { jp: "Vi begynner å forhandle i morgen", en: "We start negotiating tomorrow" }, hint: "å forhandle → forhandler, forhandlet. Ei forhandling er prosessen. ⚠ En forhandler er både den som forhandler og den som selger deg bilen." },
        { id: "no-u93l1-enmotpart", type: "vocab", front: "en motpart", reading: "enmotpart", meaning: "opposite side (counterparty)", example: { jp: "Motparten hadde ti advokater, og vi hadde bare én.", en: "The other side had ten lawyers, and we only had one." }, accept: ["a counterparty", "the other party"], drill: { jp: "De har en motpart som er vanskelig", en: "They have an opposite side that is difficult" }, hint: "en motpart → motparten, flertall motparter. Mot + en part. Brukes både i ei forhandling og i ei rettssak (u92)." },
        { id: "no-u93l1-ainnga", type: "vocab", front: "å inngå", reading: "ainnga", meaning: "to conclude (enter into)", example: { jp: "De inngikk avtalen i mai, og angret allerede i juni.", en: "They concluded the agreement in May, and regretted it as early as June." }, accept: ["to enter into", "to strike (a deal)"], drill: { jp: "Vi håper å inngå en avtale i dag", en: "We hope to conclude an agreement today" }, hint: "å inngå → inngår, inngikk. Bøyes som å gå (u1). Inn + å gå. Om avtaler og ekteskap (u68), aldri om et vanlig kjøp." },
        { id: "no-u93l1-enklausul", type: "vocab", front: "en klausul", reading: "enklausul", meaning: "clause (contract term)", example: { jp: "Klausulen står i kontrakten, men ingen av dem hadde lest den.", en: "The clause is in the contract, but neither of them had read it." }, accept: ["a provision", "a stipulation"], drill: { jp: "Her er det en klausul du glemte", en: "Here there is a clause you forgot" }, hint: "en klausul → klausulen, flertall klausuler. Trykket på siste stavelse: klau-SUL. Én bestemmelse i en kontrakt (u32) — som regel den ingen leser." },
        { id: "no-u93l1-etanbud", type: "vocab", front: "et anbud", reading: "etanbud", meaning: "tender (bid)", example: { jp: "Jobben ble lagt ut på anbud, og den billigste vant til slutt.", en: "The job was put out to tender, and the cheapest one won in the end." }, accept: ["a bid", "an offer (formal)"], drill: { jp: "De ga et anbud som var for lavt", en: "They put in a tender that was too low" }, hint: "et anbud → anbudet, flertall anbud. An + et bud. Å legge ut på anbud er å be flere om pris; den som vinner, får oppdraget." },
        { id: "no-u93l1-etoppdrag", type: "vocab", front: "et oppdrag", reading: "etoppdrag", meaning: "commission (assignment)", example: { jp: "Oppdraget var lite, men det førte til mange flere seinere.", en: "The commission was small, but it led to many more later." }, accept: ["an assignment", "a task", "a job (paid)"], drill: { jp: "Hun fikk et oppdrag i Bergen", en: "She got a commission in Bergen" }, hint: "et oppdrag → oppdraget, flertall oppdrag. Opp + å dra (u20). En oppgave (u18) er noe du skal gjøre; et oppdrag er noe noen har bestilt og betaler for." },
      ],
    },
    {
      id: "no-u93l2",
      unit: 93,
      lesson: 2,
      title: "Kjøp og salg",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a Norwegian supply chain — who supplies, who commissions, what arrives when, and what the name on the box is worth.",
      items: [
        { id: "no-u93l2-enleverandor", type: "vocab", front: "en leverandør", reading: "enleverandor", meaning: "supplier", example: { jp: "Leverandøren er billig, men han kommer alltid for sent.", en: "The supplier is cheap, but he always arrives too late." }, accept: ["a vendor", "a provider"], drill: { jp: "Vi trenger en leverandør vi kan stole på", en: "We need a supplier we can rely on" }, hint: "en leverandør → leverandøren, flertall leverandører. Fra å levere (u24). Merk ø-folden: lesinga er enleverandor." },
        { id: "no-u93l2-enleveranse", type: "vocab", front: "en leveranse", reading: "enleveranse", meaning: "delivery (consignment)", example: { jp: "Leveransen kom for sent, og da hadde vi allerede kjøpt det selv.", en: "The delivery came too late, and by then we had already bought it ourselves." }, accept: ["a shipment", "a consignment"], drill: { jp: "Vi venter på en leveranse i dag", en: "We are waiting for a delivery today" }, hint: "en leveranse → leveransen, flertall leveranser. -anse-ord er hankjønn. Fra å levere (u24): både varene og det å få dem fram." },
        { id: "no-u93l2-eiomsetning", type: "vocab", front: "ei omsetning", reading: "eiomsetning", meaning: "turnover (revenue)", example: { jp: "Omsetninga har økt hvert år, men overskuddet er like lite.", en: "The turnover has increased every year, but the profit is just as small." }, accept: ["revenue", "sales"], drill: { jp: "De har ei omsetning på ti millioner", en: "They have a turnover of ten million" }, hint: "ei omsetning → omsetninga. -ing/-ning-ord er hunkjønn; omsetningen er vanlig i trykk. Om + å sette (u77): alt som selges, før utgiftene er trukket fra." },
        { id: "no-u93l2-etinnkjop", type: "vocab", front: "et innkjøp", reading: "etinnkjop", meaning: "procurement (business purchase)", example: { jp: "Innkjøpet var stort, og ingen spurte hva det skulle brukes til.", en: "The purchase was large, and nobody asked what it was going to be used for." }, accept: ["a purchase", "a buy-in"], drill: { jp: "De gjorde et innkjøp de angret på", en: "They made a purchase they regretted" }, hint: "et innkjøp → innkjøpet, flertall innkjøp. Merk ø-folden: lesinga er etinnkjop. Inn + å kjøpe (u1). Om bedrifter; privat handler du (u27)." },
        { id: "no-u93l2-enoppdragsgiver", type: "vocab", front: "en oppdragsgiver", reading: "enoppdragsgiver", meaning: "commissioning client", example: { jp: "Oppdragsgiveren er fornøyd, men kunden er ikke det.", en: "The commissioning client is happy, but the customer is not." }, accept: ["a principal", "a client"], drill: { jp: "Vi har en oppdragsgiver i Bergen", en: "We have a commissioning client in Bergen" }, hint: "en oppdragsgiver → oppdragsgiveren, flertall oppdragsgivere. Et oppdrag (l1) + en giver. Den som bestiller jobben — ikke den som bruker resultatet." },
        { id: "no-u93l2-enmerkevare", type: "vocab", front: "en merkevare", reading: "enmerkevare", meaning: "brand (the name on the product)", example: { jp: "Merkevaren er kjent i hele Norden, og det er hele grunnen til prisen.", en: "The brand is known across the whole of the Nordic region, and that is the entire reason for the price." }, accept: ["a branded product", "a trademark", "brand"], drill: { jp: "De bygde en merkevare på ti år", en: "They built a brand in ten years" }, hint: "en merkevare → merkevaren, flertall merkevarer. Et merke + ei vare. Det folk kjenner igjen — ikke tingen i seg selv." },
      ],
    },
    {
      id: "no-u93l3",
      unit: 93,
      lesson: 3,
      title: "Penger i drift",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say whether a Norwegian business makes money — the margin, the payout, the capital behind it, and what a loss looks like.",
      items: [
        { id: "no-u93l3-enfortjeneste", type: "vocab", front: "en fortjeneste", reading: "enfortjeneste", meaning: "margin (profit earned)", example: { jp: "Fortjenesten er liten, men de selger veldig mye av det.", en: "The margin is small, but they sell a great deal of it." }, accept: ["profit", "earnings", "a return"], drill: { jp: "Her er det en fortjeneste å hente", en: "Here there is a margin to be had" }, hint: "en fortjeneste → fortjenesten, flertall fortjenester. Fra å tjene. Et overskudd (u66) er det som er igjen til slutt; fortjenesten er det du tjener på hvert salg." },
        { id: "no-u93l3-lonnsom", type: "vocab", front: "lønnsom", reading: "lonnsom", meaning: "profitable", example: { jp: "Jobben er lønnsom, men bare fordi husleia er så lav.", en: "The job is profitable, but only because the rent is so low." }, accept: ["worthwhile", "paying"], drill: { jp: "Denne jobben er ikke lønnsom", en: "This job is not profitable" }, hint: "lønnsom → lønnsomt, lønnsomme. Merk ø-folden: lesinga er lonnsom. Ei lønn (u18) + -som. Verbet er å lønne seg (u66)." },
        { id: "no-u93l3-etutbytte", type: "vocab", front: "et utbytte", reading: "etutbytte", meaning: "dividend (payout)", example: { jp: "Utbyttet var stort i år, men jobbene forsvant likevel.", en: "The dividend was big this year, but the jobs disappeared all the same." }, accept: ["a return", "a yield", "a payout"], drill: { jp: "De tok ut et utbytte på millioner", en: "They took out a dividend in the millions" }, hint: "et utbytte → utbyttet, flertall utbytter. Ut + å bytte. Pengene eierne tar ut. Også i overført tyding: godt utbytte av et kurs (u56)." },
        { id: "no-u93l3-enkapital", type: "vocab", front: "en kapital", reading: "enkapital", meaning: "capital (money behind it)", example: { jp: "Uten kapital kommer du ingen vei, uansett hvor god ideen er.", en: "Without capital you get nowhere, however good the idea is." }, accept: ["funds", "financial backing"], drill: { jp: "De trenger en kapital som holder", en: "They need capital that will last" }, hint: "en kapital → kapitalen. Står oftest uten artikkel: å ha kapital. Pengene som ligger i bedriften, ikke de du bruker opp (u66)." },
        { id: "no-u93l3-afinansiere", type: "vocab", front: "å finansiere", reading: "afinansiere", meaning: "to fund", example: { jp: "Hele planen finansieres av kommunen, men ingen vet hvor lenge.", en: "The whole plan is funded by the council, but nobody knows for how long." }, accept: ["to finance", "to pay for"], drill: { jp: "Det er dyrt å finansiere slike planer", en: "It is expensive to fund plans like these" }, hint: "å finansiere → finansierer, finansierte. Ei finansiering er ordninga (u78). Å betale (u7) er å gjøre opp; å finansiere er å skaffe (u62) pengene." },
        { id: "no-u93l3-ettap", type: "vocab", front: "et tap", reading: "ettap", meaning: "loss (financial)", example: { jp: "Tapet ble stort, men de klarte seg likevel gjennom vinteren.", en: "The loss was large, but they got through the winter all the same." }, accept: ["a deficit", "a loss"], drill: { jp: "Dette blir et tap for alle", en: "This is going to be a loss for everybody" }, hint: "et tap → tapet, flertall tap. Fra å tape. Motsatt av en gevinst (l4). Også om mennesker: et stort tap for familien." },
      ],
    },
    {
      id: "no-u93l4",
      unit: 93,
      lesson: 4,
      title: "Marked og konkurranse",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Place a Norwegian business in its market — who else is in it, what it is betting on, how it is sold, and what it stands to win.",
      items: [
        { id: "no-u93l4-enkonkurrent", type: "vocab", front: "en konkurrent", reading: "enkonkurrent", meaning: "competitor", example: { jp: "Konkurrenten er mye større, men vi er raskere på alt.", en: "The competitor is much bigger, but we are faster at everything." }, accept: ["a rival"], drill: { jp: "De fikk en konkurrent de ikke ventet", en: "They got a competitor they were not expecting" }, hint: "en konkurrent → konkurrenten, flertall konkurrenter. Fra å konkurrere (u44). En konkurranse er sjølve kappløpet." },
        { id: "no-u93l4-eisatsing", type: "vocab", front: "ei satsing", reading: "eisatsing", meaning: "drive (major push)", example: { jp: "Satsinga var stor, men resultatet kom aldri.", en: "The push was large, but the result never came." }, accept: ["an initiative", "a big bet", "a venture"], drill: { jp: "Dette blir ei satsing for alle", en: "This is going to be a drive for everybody" }, hint: "ei satsing → satsinga. -ing-ord er hunkjønn; satsingen er vanlig i trykk. Fra å satse. En villet innsats med risiko (u52) i." },
        { id: "no-u93l4-eimarkedsforing", type: "vocab", front: "ei markedsføring", reading: "eimarkedsforing", meaning: "marketing", example: { jp: "Markedsføringa er dyr, men uten den kommer det ingen kunder.", en: "The marketing is expensive, but without it no customers come." }, accept: ["advertising", "promotion"], drill: { jp: "Alt dette er ei markedsføring", en: "All of this is marketing" }, hint: "ei markedsføring → markedsføringa. -ing-ord er hunkjønn; markedsføringen er vanlig i trykk. Et marked (u66) + å føre (u83). En reklame (u48) er én bit av den." },
        { id: "no-u93l4-enbransje", type: "vocab", front: "en bransje", reading: "enbransje", meaning: "sector (line of business)", example: { jp: "Bransjen er liten, og alle kjenner alle fra før.", en: "The sector is small, and everybody already knows everybody." }, accept: ["an industry", "a trade"], drill: { jp: "Han jobber i en bransje ingen kjenner", en: "He works in a sector nobody knows" }, hint: "en bransje → bransjen, flertall bransjer. Uttales -sje, som i garasje. Fransk låneord: en gren av næringslivet." },
        { id: "no-u93l4-envirksomhet", type: "vocab", front: "en virksomhet", reading: "envirksomhet", meaning: "operation (business activity)", example: { jp: "Virksomheten er lovlig, men mange mener den ikke burde være det.", en: "The operation is lawful, but many think it should not be." }, accept: ["a business", "an enterprise", "activity"], drill: { jp: "De har en virksomhet i Bergen", en: "They have an operation in Bergen" }, hint: "en virksomhet → virksomheten. -het-ord er hankjønn (regel 1), aldri ei. Fra å virke (u54). Både bedriften og det bedriften driver med." },
        { id: "no-u93l4-engevinst", type: "vocab", front: "en gevinst", reading: "engevinst", meaning: "gain (winnings)", example: { jp: "Gevinsten var stor, men den gikk til dem som ikke trengte den.", en: "The gain was large, but it went to the people who did not need it." }, accept: ["a prize", "a profit", "a win"], drill: { jp: "Her er det en gevinst å vinne", en: "Here there is a gain to be won" }, hint: "en gevinst → gevinsten, flertall gevinster. Uttales med sj-lyd i midten: ge-VINST. Både i lotteri og i forretninger. Motsatt av et tap (l3)." },
      ],
    },
  ],
};
