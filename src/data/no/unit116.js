// NO Unit 116 — Hensikt, motiv og påskudd (slot: coverage-b2-6) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 6 (B2)" — a slot number, not an instruction.
// Theme chosen here. Conventions: unit1.js §1–§9, unit51.js B1–B9, unit88.js
// C1–C7.
//
// WHY THIS THEME. u88 took the ARGUMENT and u97 took ETHICS (right and wrong).
// Between them sits the move neither covers: the claim about WHY somebody did
// it. The A2/B1 layer is spent — `en hensikt` (u36), `et mål` (u21), `et formål`
// (u52), `en grunn` (u32), `bevisst` (u58), `et motiv` (u96) — and every one of
// those lets you name a purpose the actor ADMITS to. This unit is the layer the
// actor does not admit to.
//   l1  what somebody is trying to achieve
//   l2  the reason behind the stated reason
//   l3  on purpose, or not
//   l4  when the real motive is not the one being given
//
// LEXEME RULE (CLAUDE.md / RUNBOOK §4, corrected on main 2026-09-23): lexeme
// means INFLECTION. A derived word is a different lexeme. `ei vinning` is not
// blocked by `å vinne` (u26) — «å vinne et valg» and «uten tanke på vinning»
// are not the same learning.
//
// NOT TAKEN, and why:
//   • `tilsiktet` — cut. It would sit in the SAME lesson as `utilsiktet`, which
//     is two cards for one piece of learning in one sitting (u113's rule).
//   • `å tilsikte` — cut for the same reason plus `å ta sikte på` in l1.
//   • `forsettlig` — cut LATE, after a cross-block sweep found it sitting in the
//     same lesson as `et forsett`, which is the same rule again: a learner who
//     owns the noun produces the adjective. `uaktsom` took the slot and is the
//     better card, because forsett vs uaktsomhet is the distinction the whole
//     of Norwegian criminal law is built on — and the two are now one lesson
//     apart in meaning rather than one suffix apart in form.
//   • `en unnskyldning` (u2) is taught, so `et påskudd` in l4 carries a hint
//     saying exactly how the two differ: an unnskyldning is offered AFTERWARDS,
//     a påskudd is built BEFOREHAND.
//
// GENDER: -ing/-ning FEMININE (ei vinning), -het MASCULINE (none here).
// `en beveggrunn`, `en baktanke` and `en egeninteresse` take `en`, NOT `ei`: a
// compound inherits the gender of its LAST element, and `en grunn` (u32), `en
// tanke` (u50) and `en interesse` (u35) are all masculine in this corpus. The
// first draft of this unit marked all three `ei` from the shape of the word and
// was wrong three times. Grep the head before you mark the compound.
// FIRST FEMININE is `ei vinning` (l2) and carries the en-/ei- note.
//
// DRILLS: every å-verb drill uses an å-frame; every adjective drill has a
// COMMON-GENDER singular subject so the base form appears verbatim (the trap
// that broke five drills in u115's first draft).
//
// SCOPE: the frozen base u1–u115 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT116 = {
  id: "no-u116",
  lang: "no",
  title: "Hensikt, motiv og påskudd",
  order: 116,
  stage: "b2",
  lessons: [
    {
      id: "no-u116l1",
      unit: 116,
      lesson: 1,
      title: "Hva noen prøver å oppnå",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "State the aim behind an action — and separate the aim somebody has from the aim they say they have.",
      items: [
        { id: "no-u116l1-etsiktemal", type: "vocab", front: "et siktemål", reading: "etsiktemal", meaning: "an aim (what the action is pointed at)", example: { jp: "Siktemålet er godt, men ingen har regnet på hva det koster.", en: "The aim is good, but nobody has worked out what it costs." }, accept: ["an objective", "a goal"], drill: { jp: "De har et siktemål ingen har regnet på", en: "They have an aim nobody has worked out" }, hint: "et siktemål → siktemålet, flertall siktemål (ubøyd). Å sikte + et mål (u44). ⚠ Et mål kan være en drøm; et siktemål er det du faktisk RETTER arbeidet mot, og det står nesten alltid i et dokument." },
        { id: "no-u116l1-atasiktepa", type: "vocab", front: "å ta sikte på", reading: "atasiktepa", meaning: "to aim at (set out to do)", example: { jp: "Planen tar sikte på hele landet, og likevel er alle tallene hentet fra samme sted.", en: "The plan aims at the whole country, and still all the figures are taken from the same place." }, accept: ["to aim to", "to be intended to"], drill: { jp: "Vi pleier å ta sikte på hele landet", en: "We tend to aim at the whole country" }, hint: "å ta sikte på → tar sikte på, tok sikte på, har tatt sikte på. ⚠ Den nøytrale, offentlige måten å si hva noe skal gjøre: du finner den i hver eneste stortingsmelding. Sier ingenting om at målet blir nådd." },
        { id: "no-u116l1-astrebeetter", type: "vocab", front: "å strebe etter", reading: "astrebeetter", meaning: "to strive for (reach for something hard)", example: { jp: "Han streber etter en stilling ingen har sagt at han kan få, og alle ser det.", en: "He is striving for a position nobody has said he can have, and everybody can see it." }, accept: ["to strive for", "to aspire to"], drill: { jp: "Det er lett å strebe etter noe større", en: "It is easy to strive for something bigger" }, hint: "å strebe etter → streber, strebte, har strebt. ⚠ Ordet streber som substantiv er negativt i norsk — en som vil opp på andres bekostning. Verbet er nøytralt, men det følger en skygge med." },
        { id: "no-u116l1-enambisjon", type: "vocab", front: "en ambisjon", reading: "enambisjon", meaning: "an ambition (a personal aim for oneself)", example: { jp: "Ambisjonen er hans egen, og det er derfor ingen andre i huset vil betale for den.", en: "The ambition is his own, and that is why nobody else in the building will pay for it." }, accept: ["an ambition"], drill: { jp: "Han har en ambisjon ingen vil betale for", en: "He has an ambition nobody will pay for" }, hint: "en ambisjon → ambisjonen, flertall ambisjoner. ⚠ Mindre negativt enn før, men fortsatt farligere i Norge enn i England: «hun er ambisiøs» kan fortsatt leses som en advarsel. Et siktemål er om en sak, en ambisjon om en person." },
        { id: "no-u116l1-agautpa", type: "vocab", front: "å gå ut på", reading: "agautpa", meaning: "to consist in (be what something amounts to)", example: { jp: "Hele ordningen går ut på å flytte kostnaden, og ingen av dem sier det høyt.", en: "The whole arrangement consists in moving the cost, and neither of them says so out loud." }, accept: ["to amount to", "to be about"], drill: { jp: "Det pleier å gå ut på lite", en: "It tends to amount to little" }, hint: "å gå ut på → går ut på, gikk ut på, har gått ut på. ⚠ Den kjølige avsløringen: «det går ut på» sier hva noe EGENTLIG er, når navnet sier noe annet. Å handle om er nøytralt." },
        { id: "no-u116l1-etinsentiv", type: "vocab", front: "et insentiv", reading: "etinsentiv", meaning: "an incentive (a reason built into the system)", example: { jp: "Insentivet peker feil vei, så folk gjør nettopp det ordningen skulle gjøre mindre av.", en: "The incentive points the wrong way, so people do exactly what the arrangement was meant to reduce." }, accept: ["an incentive"], drill: { jp: "Her er et insentiv som peker feil", en: "Here is an incentive that points the wrong way" }, hint: "et insentiv → insentivet, flertall insentiver. Kan også skrives incentiv. ⚠ Ikke et motiv inne i et menneske, men noe SYSTEMET legger ut. Derfor kan du kritisere et insentiv uten å anklage noen." },
      ],
    },
    {
      id: "no-u116l2",
      unit: 116,
      lesson: 2,
      title: "Grunnen bak grunnen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Claim there is a second reason under the stated one — and say what kind of interest it serves.",
      items: [
        { id: "no-u116l2-enbeveggrunn", type: "vocab", front: "en beveggrunn", reading: "enbeveggrunn", meaning: "a motive (what moved somebody to act)", example: { jp: "Beveggrunnen hennes er den samme som før, men denne gangen skriver hun den ned.", en: "Her motive is the same as before, but this time she writes it down." }, accept: ["a motive", "a reason for acting"], drill: { jp: "Vi kjenner en beveggrunn ingen skriver ned", en: "We know a motive nobody writes down" }, hint: "en beveggrunn → beveggrunnen, flertall beveggrunner. Hankjønn fordi en grunn (u32) er det. Å bevege + grunn. ⚠ Om det som FIKK noen til å handle, ikke om det som gjør handlingen riktig." },
        { id: "no-u116l2-enbaktanke", type: "vocab", front: "en baktanke", reading: "enbaktanke", meaning: "an ulterior motive (a second, hidden aim)", example: { jp: "Det ligger en baktanke i forslaget, og den kommer først fram når du leser vedlegget.", en: "There is an ulterior motive in the proposal, and it only comes out when you read the attachment." }, accept: ["a hidden agenda", "an ulterior motive"], drill: { jp: "Det ligger en baktanke i dette forslaget", en: "There is an ulterior motive in this proposal" }, hint: "en baktanke → baktanken, flertall baktanker. Hankjønn fordi en tanke (u50) er det. Bak (u76) + tanke. ⚠ Fast vending: «uten baktanker» = helt ærlig. En beveggrunn kan være åpen; en baktanke er per definisjon skjult." },
        { id: "no-u116l2-enegeninteresse", type: "vocab", front: "en egeninteresse", reading: "enegeninteresse", meaning: "self-interest (gain for oneself in the matter)", example: { jp: "Han har en egeninteresse i saka, og det gjør ikke argumentet hans galt i seg selv.", en: "He has a self-interest in the case, and that does not make his argument wrong in itself." }, accept: ["a vested interest", "self-interest"], drill: { jp: "Han har en egeninteresse i denne saka", en: "He has a self-interest in this case" }, hint: "en egeninteresse → egeninteressen, flertall egeninteresser. Hankjønn fordi en interesse (u35) er det. Egen (u14) + interesse. ⚠ Å påpeke en egeninteresse er IKKE å tilbakevise argumentet — det er bare å be om at det sjekkes av noen andre. Den forskjellen taper folk ofte i en debatt." },
        { id: "no-u116l2-eivinning", type: "vocab", front: "ei vinning", reading: "eivinning", meaning: "personal gain (what one stands to get out of it)", example: { jp: "Det er ingen vinning i det for henne, og likevel bruker hun hele tida si på saka.", en: "There is no personal gain in it for her, and still she spends all her time on the case." }, accept: ["gain", "profit (personal)"], drill: { jp: "Her er ei vinning ingen snakker om", en: "Here is a personal gain nobody talks about" }, hint: "ei vinning → vinninga. -ing er ALLTID hunkjønn. Hunkjønnsord kan du også skrive en vinning / vinningen, og den formen er den vanlige i lovtekst — merk begge, for du møter dem begge i skrift. Fra å vinne (u44). ⚠ Nesten alltid i juridisk og moralsk sammenheng: «uberettiget vinning» står i straffeloven. En gevinst (u93) er nøytral; ei vinning lukter av at noen tok den." },
        { id: "no-u116l2-beregnende", type: "vocab", front: "beregnende", reading: "beregnende", meaning: "calculating (acts only for advantage)", example: { jp: "Hun er beregnende på en måte alle ser, og nettopp derfor tror ingen på henne.", en: "She is calculating in a way everybody can see, and that is exactly why nobody believes her." }, accept: ["scheming", "self-serving"], drill: { jp: "Han er beregnende i alt han gjør", en: "He is calculating in everything he does" }, hint: "beregnende, bøyes ikke — -ende-former er like i alle kjønn. Fra å beregne (u62). ⚠ Ikke det samme som flink til å regne: dette er en anklage om at vennligheten er et verktøy." },
        { id: "no-u116l2-uselvisk", type: "vocab", front: "uselvisk", reading: "uselvisk", meaning: "unselfish (acts without gain for oneself)", example: { jp: "Han er uselvisk i denne saka, og det er nettopp derfor ingen tror på ham.", en: "He is unselfish in this case, and that is exactly why nobody believes him." }, accept: ["selfless", "altruistic"], drill: { jp: "Hun er uselvisk i denne saka", en: "She is unselfish in this case" }, hint: "uselvisk → uselvisk, uselviske. -isk-ord får ikke -t i intetkjønn. U- + selv (u77) + -isk. ⚠ Brukes sparsomt i norsk og virker fort høytidelig; det vanlige ordet i tale er «grei» eller «raus» (u113)." },
      ],
    },
    {
      id: "no-u116l3",
      unit: 116,
      lesson: 3,
      title: "Med vilje, eller ikke",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Argue about whether an act was deliberate — the whole weight of a case can rest on that one word.",
      items: [
        { id: "no-u116l3-etforsett", type: "vocab", front: "et forsett", reading: "etforsett", meaning: "intent (deliberate purpose, in law)", example: { jp: "Retten fant ikke et forsett, og da ble saka en helt annen.", en: "The court did not find intent, and then the case became a completely different one." }, accept: ["intent", "premeditation"], drill: { jp: "Retten fant ikke et forsett her", en: "The court did not find intent here" }, hint: "et forsett → forsettet, flertall forsett. For + å sette (u77). ⚠ Et juridisk ord først og fremst: forsett mot uaktsomhet er skillet hele straffeloven er bygd på. I dagligtale betyr «gode forsetter» nyttårsløfter." },
        { id: "no-u116l3-uaktsom", type: "vocab", front: "uaktsom", reading: "uaktsom", meaning: "negligent (did not mean it, but should have known)", example: { jp: "Handlingen var uaktsom, sier de, men ingen av vitnene så noe på forhånd.", en: "The act was negligent, they say, but none of the witnesses saw anything beforehand." }, accept: ["careless (in law)", "negligent"], drill: { jp: "Handlingen var uaktsom og ikke mer", en: "The act was negligent and nothing more" }, hint: "uaktsom → uaktsomt, uaktsomme. U- + akt + som. ⚠ MOTSTYKKET til et forsett, og hele norsk strafferett står på det skillet: forsett er at du ville det, uaktsomhet er at du burde ha skjønt det. Grov uaktsomhet ligger imellom." },
        { id: "no-u116l3-utilsiktet", type: "vocab", front: "utilsiktet", reading: "utilsiktet", meaning: "unintended (nobody aimed at this result)", example: { jp: "Bieffekten er utilsiktet, men den var lett å regne ut for alle som ville.", en: "The side effect is unintended, but it was easy to work out for anybody who wanted to." }, accept: ["unintentional", "inadvertent"], drill: { jp: "Denne bieffekten er utilsiktet men kjent", en: "This side effect is unintended but known" }, hint: "utilsiktet → utilsiktet, utilsiktede. U- + til + å sikte. ⚠ Det STERKESTE forsvaret og den svakeste unnskyldningen på én gang: utilsiktet betyr bare at ingen ville det, ikke at ingen kunne ha visst det." },
        { id: "no-u116l3-velment", type: "vocab", front: "velment", reading: "velment", meaning: "well-meant (kindly intended, often badly done)", example: { jp: "Forslaget er velment, og det er omtrent alt som er godt å si om det.", en: "The proposal is well-meant, and that is about all there is good to say about it." }, accept: ["well-meaning", "well-intentioned"], drill: { jp: "Forslaget er velment men ikke godt", en: "The proposal is well-meant but not good" }, hint: "velment → velment, velmente. Vel + å mene (u17). ⚠ I norsk er «velment» nesten alltid en høflig nedvurdering: du roser motivet for å slippe å rose resultatet." },
        { id: "no-u116l3-tilfeldigvis", type: "vocab", front: "tilfeldigvis", reading: "tilfeldigvis", meaning: "as it happens (by chance, not by design)", example: { jp: "Hun satt tilfeldigvis i det samme styret, og det gjør ikke saka bedre for noen av dem.", en: "She happened to sit on the same board, and that does not make the case better for either of them." }, accept: ["by chance", "as it happens"], drill: { jp: "Han satt tilfeldigvis i det samme møtet", en: "He happened to sit in the same meeting" }, hint: "tilfeldigvis er et adverb og bøyes ikke. Tilfeldig (u52) + -vis. ⚠ To bruk: ekte tilfeldighet, og den ironiske — «han var tilfeldigvis den eneste som visste det» betyr det motsatte av tilfeldig." },
        { id: "no-u116l3-aforhasteseg", type: "vocab", front: "å forhaste seg", reading: "aforhasteseg", meaning: "to act too hastily (and be wrong for it)", example: { jp: "Styret forhastet seg, og nå må hele saka tas opp igjen.", en: "The board acted too hastily, and now the whole case has to be taken up again." }, accept: ["to be too hasty", "to jump the gun"], drill: { jp: "Det er lett å forhaste seg her", en: "It is easy to act too hastily here" }, hint: "å forhaste seg → forhaster seg, forhastet seg, har forhastet seg. Alltid med seg. ⚠ Nesten alltid i fortid og alltid med etterpåklokskap: du forhaster deg aldri mens du gjør det. Fast vending: «en forhastet slutning»." },
      ],
    },
    {
      id: "no-u116l4",
      unit: 116,
      lesson: 4,
      title: "Når motivet ikke er det som blir sagt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Accuse somebody of giving a false reason — and know how much you are claiming when you do it.",
      items: [
        { id: "no-u116l4-etpaskudd", type: "vocab", front: "et påskudd", reading: "etpaskudd", meaning: "a pretext (a reason built to cover the real one)", example: { jp: "Tallene er bare et påskudd, for vedtaket var klart lenge før noen så dem.", en: "The figures are only a pretext, because the decision was ready long before anybody saw them." }, accept: ["a pretext", "an excuse (cover)"], drill: { jp: "Tallene er bare et påskudd her", en: "The figures are only a pretext here" }, hint: "et påskudd → påskuddet, flertall påskudd (ubøyd). Merk å-folden: lesinga er etpaskudd. ⚠ En unnskyldning kommer ETTERPÅ og kan være sann; et påskudd er laget PÅ FORHÅND og er per definisjon falskt. Brukes med under: under påskudd av." },
        { id: "no-u116l4-enagenda", type: "vocab", front: "en agenda", reading: "enagenda", meaning: "an agenda (a purpose being pursued quietly)", example: { jp: "Alle har en agenda i denne saka, og de som nekter for det har som regel den sterkeste.", en: "Everybody has an agenda in this case, and those who deny it usually have the strongest one." }, accept: ["an agenda"], drill: { jp: "Vi vet at alle har en agenda", en: "We know that everybody has an agenda" }, hint: "en agenda → agendaen, flertall agendaer. ⚠ To betydninger, og norsk bruker begge: saklista for et møte, OG det skjulte formålet. Den andre er den som brukes i debatt, og den er en anklage." },
        { id: "no-u116l4-atillegge", type: "vocab", front: "å tillegge", reading: "atillegge", meaning: "to impute to (ascribe a motive to somebody)", example: { jp: "Du tillegger henne et motiv hun aldri har gitt uttrykk for, og det er ikke et argument.", en: "You are imputing a motive to her that she has never expressed, and that is not an argument." }, accept: ["to ascribe to", "to attribute to"], drill: { jp: "Det er lett å tillegge folk et motiv", en: "It is easy to impute a motive to people" }, hint: "å tillegge → tillegger, tilla, har tillagt. Til + å legge (u77). ⚠ Tar to objekt: du tillegger NOEN NOE. Nesten alltid negativt om motiv, men nøytralt om verdi: «å tillegge tallene stor vekt»." },
        { id: "no-u116l4-aforegi", type: "vocab", front: "å foregi", reading: "aforegi", meaning: "to profess falsely (claim a reason one does not have)", example: { jp: "De foregir at det handler om kvalitet, men hvert vedtak handler om pris.", en: "They profess that it is about quality, but every decision is about price." }, accept: ["to pretend", "to purport"], drill: { jp: "Det er lett å foregi noe annet her", en: "It is easy to profess something else here" }, hint: "å foregi → foregir, foregav, har foregitt. Fore- + å gi (u1). ⚠ Skriftlig og anklagende. Å late som er dagligtale og kan være uskyldig lek; å foregi er alltid en beskyldning om løgn." },
        { id: "no-u116l4-aleggeskjulpa", type: "vocab", front: "å legge skjul på", reading: "aleggeskjulpa", meaning: "to conceal (keep a view or fact back)", example: { jp: "Hun legger ikke skjul på at hun er uenig, og det er mer enn de andre i styret gjør.", en: "She does not conceal that she disagrees, and that is more than the others on the board do." }, accept: ["to hide", "to make a secret of"], drill: { jp: "Hun pleier ikke å legge skjul på det", en: "She does not usually conceal it" }, hint: "å legge skjul på → legger, la, har lagt. Å legge (u77) + skjul. ⚠ Brukes nesten bare NEKTENDE: «legger ikke skjul på» er den vanlige formen, og den er ros. Å skjule (u57) er det nøytrale verbet." },
        { id: "no-u116l4-agiinntrykkav", type: "vocab", front: "å gi inntrykk av", reading: "agiinntrykkav", meaning: "to give the impression of (without quite saying it)", example: { jp: "Brevet gir inntrykk av at saka er avsluttet, men ingen steder står det at den er det.", en: "The letter gives the impression that the case is closed, but nowhere does it say that it is." }, accept: ["to suggest", "to make it look as if"], drill: { jp: "Brevet pleier å gi inntrykk av mer", en: "The letter tends to give the impression of more" }, hint: "å gi inntrykk av → gir, gav, har gitt. Å gi (u1) + et inntrykk (u50). ⚠ Den presise anklagen mot en tekst som ikke lyver: den sier ingenting galt, men leseren sitter igjen med noe galt. Å foregi er å si det selv." },
      ],
    },
  ],
};
