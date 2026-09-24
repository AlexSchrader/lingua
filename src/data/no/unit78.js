// NO Unit 78 — Det offentlige (slot: coverage-b1-5) — B1
// COVERAGE UNIT, block 3. Retitled from the scaffold's "Vocabulary 5 (B1)".
//
// The register that decides whether a B1 learner can live in Norway rather than
// only talk about it. u32 "Samfunn og hverdag" teaches the CIVIC nouns — et
// samfunn, en kommune, en skatt, et skjema, en plikt, en regel, en kontrakt, en
// innbygger — and u24 teaches en søknad, en frist and å levere for a JOB
// application. Neither teaches what happens when the form goes in: et vedtak, et
// avslag, en saksbehandler, ei erklæring, ei fullmakt, ei trygd, å behandle, å
// fornye. That is the whole second half of every encounter with a public office,
// and it was missing.
//
// Deliberately NOT a "money" unit — bank and economy are a B1 thematic slot owned
// by another block (u66). This unit stops at the paperwork.
//
// Conventions per no/unit1.js. NB rule 1: -het and -else nouns are masculine with
// NO feminine form, so `en rettighet` is en, never ei; -ing/-ning take ei, so
// `ei erklæring` and `ei ordning` are ei.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT78 = {
  id: "no-u78",
  lang: "no",
  title: "Det offentlige",
  order: 78,
  stage: "b1",
  lessons: [
    {
      id: "no-u78l1",
      unit: 78,
      lesson: 1,
      title: "På det offentlige kontoret",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle an appointment at a public office — the letter calling you in, who handles your case, what a decision is called, and what they need from you.",
      items: [
        { id: "no-u78l1-etvedtak", type: "vocab", front: "et vedtak", reading: "etvedtak", meaning: "decision (official)", example: { jp: "Vi fikk et vedtak i postkassa to uker etter at vi søkte.", en: "We got a decision in the postbox two weeks after we applied." }, accept: ["a ruling", "a resolution"], drill: { jp: "Vi fikk et vedtak i dag", en: "We got a decision today" }, hint: "Intetkjønn: et vedtak → vedtaket, flertall vedtak. Fra å vedta. Alltid om en offentlig avgjørelse, aldri om din egen." },
        { id: "no-u78l1-ensaksbehandler", type: "vocab", front: "en saksbehandler", reading: "ensaksbehandler", meaning: "caseworker", example: { jp: "Saksbehandleren min ringte og spurte om et papir til.", en: "My caseworker called and asked for one more paper." }, accept: ["a case officer", "an administrator"], drill: { jp: "Hver sak får en saksbehandler", en: "Every case gets a caseworker" }, hint: "en saksbehandler → saksbehandleren. Ei sak (u50) + å behandle (denne uka). Personen som eier saken din." },
        { id: "no-u78l1-amoteopp", type: "vocab", front: "å møte opp", reading: "amoteopp", meaning: "to show up (attend)", example: { jp: "Du må møte opp klokka ni, ellers får du ikke timen.", en: "You have to turn up at nine, otherwise you do not get the appointment." }, accept: ["to show up", "to attend", "to turn up"], drill: { jp: "Det er viktig å møte opp tidlig", en: "It is important to turn up early" }, hint: "å møte (u2) + opp. Partikkelen gjør det til 'physically be there', ikke bare 'meet'." },
        { id: "no-u78l1-etpersonnummer", type: "vocab", front: "et personnummer", reading: "etpersonnummer", meaning: "national ID number", example: { jp: "Uten et personnummer er det vanskelig å få en konto i banken.", en: "Without a national ID number it's difficult to get an account at the bank." }, accept: ["a personal number", "an ID number"], drill: { jp: "Du trenger et personnummer her", en: "You need a national ID number here" }, hint: "et personnummer → personnummeret. Elleve siffer, og nøkkelen til alt offentlig i Norge. Et d-nummer er den midlertidige varianten." },
        { id: "no-u78l1-eipostkasse", type: "vocab", front: "ei postkasse", reading: "eipostkasse", meaning: "postbox", example: { jp: "Brevet lå i postkassa da vi kom hjem i går.", en: "The letter was in the postbox when we got home yesterday." }, accept: ["a mailbox", "a letterbox"], drill: { jp: "Hvert hus har ei postkasse", en: "Every house has a postbox" }, hint: "ei postkasse → postkassa. Hunkjønn; postkassen er også lov. Navnet ditt må stå på den, ellers kommer ikke posten fram." },
        { id: "no-u78l1-eiinnkalling", type: "vocab", front: "ei innkalling", reading: "eiinnkalling", meaning: "a summons to attend", example: { jp: "Du får ei innkalling i et brev før møtet.", en: "You get a letter summoning you, before the meeting." }, drill: { jp: "Han fikk ei innkalling fra kontoret", en: "He got a summons from the office" }, accept: ["a letter telling you to attend", "an appointment letter", "a call-in"], hint: "INN-kal-ling. Feminine, like every -ing word: definite innkallinga, plural innkallinger — and you will meet innkallingen in print, because Bokmål allows both. Å kalle inn is to call somebody in; this is the paper that does it, and it usually names a date you have to show up." },
      ],
    },
    {
      id: "no-u78l2",
      unit: 78,
      lesson: 2,
      title: "Skjemaet",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Fill in, attach, declare and sign — get a form out of the door correctly.",
      items: [
        { id: "no-u78l2-afylleut", type: "vocab", front: "å fylle ut", reading: "afylleut", meaning: "to fill in", example: { jp: "Jeg brukte en hel time på å fylle ut dette skjemaet.", en: "I spent a whole hour filling in this form." }, accept: ["to fill out", "to complete"], drill: { jp: "Det er lett å fylle ut skjemaet", en: "It is easy to fill in the form" }, hint: "å fylle ut → fyller ut, fylte ut. Partikkelverb: fyll ut skjemaet, fyll det ut." },
        { id: "no-u78l2-eierklaering", type: "vocab", front: "ei erklæring", reading: "eierklaering", meaning: "declaration", example: { jp: "De spurte etter ei erklæring fra legen før de kunne gjøre noe.", en: "They asked for a declaration from the doctor before they could do anything." }, accept: ["a statement", "a certificate"], drill: { jp: "Vi trenger ei erklæring fra legen", en: "We need a declaration from the doctor" }, hint: "ei erklæring → erklæringa. -ing-ord er hunkjønn (regel 1). Fra å erklære, to declare." },
        { id: "no-u78l2-asignere", type: "vocab", front: "å signere", reading: "asignere", meaning: "to sign", example: { jp: "Begge må signere på papiret i dag.", en: "Both of you have to sign on the paper today." }, accept: ["sign", "to endorse"], drill: { jp: "Det er nok å signere her", en: "It is enough to sign here" }, hint: "å signere → signerer. Litt formelt; å skrive under (skrive, u18) er det vanlige ordet i tale." },
        { id: "no-u78l2-ensignatur", type: "vocab", front: "en signatur", reading: "ensignatur", meaning: "signature", example: { jp: "Det står ingen signatur på papiret, så vi må sende alt igjen.", en: "There is no signature on the paper, so we have to send everything again." }, accept: ["an autograph"], drill: { jp: "Vi trenger en signatur her", en: "We need a signature here" }, hint: "en signatur → signaturen. Ei underskrift betyr det samme og er mer norsk." },
        { id: "no-u78l2-eifullmakt", type: "vocab", front: "ei fullmakt", reading: "eifullmakt", meaning: "power of attorney", example: { jp: "Moren min ga meg ei fullmakt så jeg kunne snakke med banken.", en: "My mother gave me a power of attorney so I could talk to the bank." }, accept: ["an authorisation", "a mandate"], drill: { jp: "Jeg har ei fullmakt fra henne", en: "I have a power of attorney from her" }, hint: "ei fullmakt → fullmakta. Full + makt: the full power to act for somebody else. Helt vanlig papir, ikke bare juss." },
        { id: "no-u78l2-akrysseav", type: "vocab", front: "å krysse av", reading: "akrysseav", meaning: "to tick a box", example: { jp: "Du må krysse av for riktig svar på skjemaet.", en: "You have to tick the box for the correct answer on the form." }, drill: { jp: "Husk å krysse av i skjemaet", en: "Remember to tick the box on the form" }, accept: ["to check a box", "to mark with a cross", "to tick off"], hint: "KRUES-se av. Et kryss is a cross, and in Norway you put one in the box rather than a tick. Present krysser av, past krysset av. You krysser av FOR the thing you are choosing." },
      ],
    },
    {
      id: "no-u78l3",
      unit: 78,
      lesson: 3,
      title: "Rettigheter og ytelser",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what you are entitled to, what has to be renewed, and how to complain about a decision.",
      items: [
        { id: "no-u78l3-eitrygd", type: "vocab", front: "ei trygd", reading: "eitrygd", meaning: "benefit (welfare)", example: { jp: "Han får ei trygd fordi han ikke kan jobbe mer.", en: "He gets a benefit because he can't work any more." }, accept: ["social security", "welfare"], drill: { jp: "Han får ei trygd hver måned", en: "He gets a benefit every month" }, hint: "ei trygd → trygda. Fra trygg, safe — the money that makes you safe. Trygdekontoret het det før NAV." },
        { id: "no-u78l3-entillatelse", type: "vocab", front: "en tillatelse", reading: "entillatelse", meaning: "permission", example: { jp: "Du trenger en tillatelse fra kommunen før du begynner.", en: "You need a permission from the municipality before you start." }, accept: ["a permit", "a licence"], drill: { jp: "Vi må ha en tillatelse først", en: "We must have a permission first" }, hint: "-else-ord er hankjønn (regel 1), aldri ei: en tillatelse → tillatelsen. Fra å tillate, to allow." },
        { id: "no-u78l3-afornye", type: "vocab", front: "å fornye", reading: "afornye", meaning: "to renew", example: { jp: "Passet mitt går ut i mai, så jeg må fornye det snart.", en: "My passport expires in May, so I have to renew it soon." }, accept: ["renew", "to extend"], drill: { jp: "Jeg må huske å fornye passet", en: "I must remember to renew the passport" }, hint: "å fornye → fornyer. For + ny (u10). Ei fornyelse er the renewal." },
        { id: "no-u78l3-abehandle", type: "vocab", front: "å behandle", reading: "abehandle", meaning: "to process (handle)", example: { jp: "De skal behandle søknaden min innen tre uker.", en: "They're going to process my application within three weeks." }, accept: ["to treat", "to deal with", "handle"], drill: { jp: "De begynner å behandle saken nå", en: "They are starting to process the case now" }, hint: "å behandle → behandler. Både om en sak og om en person: legen behandler pasienten." },
        { id: "no-u78l3-aklagepa", type: "vocab", front: "å klage på", reading: "aklagepa", meaning: "to appeal against", example: { jp: "Du har tre uker på deg til å klage på vedtaket.", en: "You have three weeks to appeal against the decision." }, accept: ["to complain about", "to contest"], drill: { jp: "Vi har lov til å klage på dette", en: "We are allowed to appeal against this" }, hint: "å klage (u49) + på gir målet for klagen. Klagefristen er som regel tre uker i Norge." },
        { id: "no-u78l3-enytelse", type: "vocab", front: "en ytelse", reading: "enytelse", meaning: "a benefit payment", example: { jp: "En ytelse fra staten kan ta lang tid å få.", en: "A benefit payment from the state can take a long time to get." }, drill: { jp: "Han søker om en ytelse fra staten", en: "He is applying for a benefit payment from the state" }, accept: ["a payment you are entitled to", "a state benefit", "an allowance"], hint: "UET-el-se. Masculine, like every -else: definite ytelsen, plural ytelser. Ei trygd is the everyday word for the money; en ytelse is what the office calls it on paper, and it covers anything the state pays out." },
      ],
    },
    {
      id: "no-u78l4",
      unit: 78,
      lesson: 4,
      title: "Svaret du får",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the answer — a refusal, a scheme, unemployment money — and say whether something is right or wrong.",
      items: [
        { id: "no-u78l4-etavslag", type: "vocab", front: "et avslag", reading: "etavslag", meaning: "rejection", example: { jp: "Vi fikk et avslag fordi vi glemte et vedlegg.", en: "We got a rejection because we forgot an attachment." }, accept: ["a refusal", "a denial"], drill: { jp: "Vi fikk et avslag i dag", en: "We got a rejection today" }, hint: "et avslag → avslaget, flertall avslag. Fra å avslå. Motsatt: søknaden ble innvilget, granted." },
        { id: "no-u78l4-eiordning", type: "vocab", front: "ei ordning", reading: "eiordning", meaning: "scheme (arrangement)", example: { jp: "Kommunen har ei ordning for folk som jobber om natta.", en: "The municipality has a scheme for people who work at night." }, accept: ["an arrangement", "a system"], drill: { jp: "Kommunen har ei ordning for dette", en: "The municipality has a scheme for this" }, hint: "ei ordning → ordninga. -ing-ord er hunkjønn. Fra å ordne (u21). Både offentlige ordninger og private avtaler." },
        { id: "no-u78l4-dagpenger", type: "vocab", front: "dagpenger", reading: "dagpenger", meaning: "unemployment benefit", example: { jp: "Han fikk dagpenger i seks måneder mens han søkte ny jobb.", en: "He received unemployment benefit for six months while he looked for a new job." }, accept: ["jobseeker's allowance", "unemployment pay"], drill: { jp: "Han får dagpenger nå", en: "He gets unemployment benefit now" }, hint: "Flertallsord, som penger (u7) — aldri en dagpeng. En dag + penger: money per day you are out of work." },
        { id: "no-u78l4-ainnvilge", type: "vocab", front: "å innvilge", reading: "ainnvilge", meaning: "to grant", example: { jp: "Kommunen innvilget søknaden min til slutt.", en: "The municipality granted my application in the end." }, accept: ["to approve", "to award", "to allow"], drill: { jp: "De pleier å innvilge slike søknader", en: "They usually grant such applications" }, hint: "å innvilge → innvilger, innvilget. Motsatt av et avslag. Det formelle ordet et offentlig kontor bruker når du får ja." },
        { id: "no-u78l4-abegrunne", type: "vocab", front: "å begrunne", reading: "abegrunne", meaning: "to give reasons for", example: { jp: "Kommunen må begrunne et avslag skriftlig.", en: "The municipality has to give reasons for a rejection in writing." }, accept: ["to justify", "to explain", "to substantiate"], drill: { jp: "Det er vanlig å begrunne et avslag", en: "It is normal to give reasons for a rejection" }, hint: "be- + en grunn (u32) → begrunner, begrunnet. Forvaltningsloven krever det: et vedtak uten begrunnelse kan du klage på."},
        { id: "no-u78l4-eianke", type: "vocab", front: "ei anke", reading: "eianke", meaning: "an appeal against a decision", example: { jp: "Ei anke på vedtaket må sendes innen tre uker.", en: "An appeal against the decision has to be sent within three weeks." }, drill: { jp: "Han sendte ei anke på vedtaket", en: "He sent an appeal against the decision" }, accept: ["a formal appeal", "a challenge to a ruling", "an objection (official)"], hint: "AN-ke. Feminine: definite anka, plural anker — you will also see anken in print. Å klage på is what you do; ei anke is the document that does it, and it goes to somebody above the person who decided." },
      ],
    },
  ],
};
