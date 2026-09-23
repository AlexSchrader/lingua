// NO Unit 102 — Helsevesen og omsorg (slot: health-systems) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot "Health systems and care", retitled. Conventions: unit1.js §1–§9,
// unit51.js B1–B9, unit88.js C1–C7.
//
// ⚠ THE BODY AND THE ILLNESS ARE ALREADY SPENT — u25 and u67 own them: en lege,
// en pasient, en medisin, ei behandling, ei bedring, en resept, et sykehus, et
// blodtrykk, feber, helse, frisk, syk, en smerte, en forkjølelse, ei belastning,
// stresset, å frykte, å plage, en diagnose, ei legevakt, kronisk, en epidemi,
// en vaksine, et sykehjem. u98 took å forebygge, u100 took et sykefravær.
// So this unit is the SYSTEM around the illness, not the illness: the way in
// (l1), who pays and what runs out (l2), being looked after (l3), and the
// population-level view (l4). At B2 the argument is about priority, not symptoms.
//
// ⚠ `ei henvisning` IS CARDED HERE (l1), AND AN EARLIER DRAFT HAD CUT IT. The
// lexeme rule was narrowed on main 2026-09-23 (commit 5928ca20): "lexeme" means
// INFLECTION — the same word in another form — NOT derivation. `å henvise` (u73)
// and `ei henvisning` are two lexemes, and the referral is the single most
// important institutional word in this unit: it is the whole mechanism between
// the fastlege and the spesialist. Block 1 cut it on the old reading; that cut
// is reversed here. The test is "would a learner who knows one already know the
// other?", not "do they share a stem".
// NOT TAKEN, on merit rather than on the lexeme rule: `ei prioritering`,
// `ei nedprioritering`, `ei avlastning`, `ei venteliste`, `en ventetid` (which
// this card displaced — vente + tid is fully decodable from two taught words,
// and `en helsekø` in l2 already carries the queue).
//
// GENDER: -else is MASCULINE (en innleggelse), -het is MASCULINE (en verdighet),
// -tet is MASCULINE (en livskvalitet), -asje is MASCULINE (en slitasje), -ing is
// FEMININE (ei finansiering, ei bevilgning, ei ernæring, ei rehabilitering).
// `en levealder` is masculine because en alder (u28) is — the compound takes the
// LAST element's gender, not the first.
// FIRST FEMININE is `ei henvisning` (l1) and carries the en-/ei- note.
//
// SCOPE: the frozen base u1–u101 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT102 = {
  id: "no-u102",
  lang: "no",
  title: "Helsevesen og omsorg",
  order: 102,
  stage: "b2",
  lessons: [
    {
      id: "no-u102l1",
      unit: 102,
      lesson: 1,
      title: "Veien inn i systemet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how somebody actually gets treated — name the door they come in through, who they meet, and what the wait costs them.",
      items: [
        { id: "no-u102l1-ethelsevesen", type: "vocab", front: "et helsevesen", reading: "ethelsevesen", meaning: "health service (system)", example: { jp: "Helsevesenet er godt her, men det er bygd for folk som klarer å be om hjelp selv.", en: "The health service is good here, but it is built for people who manage to ask for help themselves." }, accept: ["the health system", "healthcare"], drill: { jp: "Vi har et helsevesen som virker", en: "We have a health service that works" }, hint: "et helsevesen → helsevesenet. Helse (u25) + et vesen. Alltid om HELE systemet; det enkelte sykehuset er en institusjon." },
        { id: "no-u102l1-enfastlege", type: "vocab", front: "en fastlege", reading: "enfastlege", meaning: "regular GP", example: { jp: "Alle har rett til en fastlege, men i noen kommuner finnes det ingen å få.", en: "Everybody has the right to a regular GP, but in some municipalities there is none to be had." }, accept: ["a family doctor", "a GP"], drill: { jp: "Hun bytter en fastlege hvert år", en: "She changes regular GP every year" }, hint: "en fastlege → fastlegen, flertall fastleger. Fast (u28) + en lege (u11). En norsk ordning: du står på lista til ÉN lege, og det er den du får time hos." },
        { id: "no-u102l1-etakuttmottak", type: "vocab", front: "et akuttmottak", reading: "etakuttmottak", meaning: "emergency department", example: { jp: "Et akuttmottak tar imot alle, og nettopp derfor møter du folk der som burde vært et annet sted.", en: "An emergency department receives everybody, and precisely for that reason you meet people there who should have been somewhere else." }, accept: ["A&E", "the emergency room"], drill: { jp: "De kjørte henne til et akuttmottak", en: "They drove her to an emergency department" }, hint: "et akuttmottak → akuttmottaket. Akutt + et mottak. Sammensetninger tar kjønnet til siste ledd. På sykehuset; legevakta (u67) er utenfor." },
        { id: "no-u102l1-eihenvisning", type: "vocab", front: "ei henvisning", reading: "eihenvisning", meaning: "referral", example: { jp: "Uten ei henvisning kommer du ikke til spesialisten, og fastlegen din har noen få minutter på å bestemme seg.", en: "Without a referral you do not get to the specialist, and your GP has a few minutes to make up their mind." }, accept: ["a referral"], drill: { jp: "Du trenger ei henvisning fra fastlegen", en: "You need a referral from your GP" }, hint: "ei henvisning → henvisninga. Hunkjønnsord kan du også skrive en henvisning / henvisningen; -ning er alltid hunkjønn i denne kursen (regel 1). Fra å henvise (u89): legen viser deg VIDERE. Uten den slipper du ikke inn til en spesialist." },
        { id: "no-u102l1-enspesialist", type: "vocab", front: "en spesialist", reading: "enspesialist", meaning: "specialist (consultant)", example: { jp: "Du kommer til en spesialist først når fastlegen mener det, og den regelen bærer hele systemet.", en: "You get to a specialist only when your GP thinks so, and that rule carries the whole system." }, accept: ["a consultant"], drill: { jp: "Han venter på en spesialist i byen", en: "He is waiting for a specialist in town" }, hint: "en spesialist → spesialisten, flertall spesialister. -ist-ord er hankjønn og navngir mennesker. Å spesialisere seg er verbet." },
        { id: "no-u102l1-eninnleggelse", type: "vocab", front: "en innleggelse", reading: "eninnleggelse", meaning: "admission (to hospital)", example: { jp: "Innleggelsen varte i to døgn, men papirene om den tok flere uker.", en: "The admission lasted two days, but the paperwork about it took several weeks." }, accept: ["being admitted", "a hospital stay"], drill: { jp: "Det ble en innleggelse på sykehuset", en: "It became an admission to the hospital" }, hint: "en innleggelse → innleggelsen, flertall innleggelser. ⚠ -else er ALLTID hankjønn, aldri ei. Inn + å legge (u77): du blir lagt inn." },
      ],
    },
    {
      id: "no-u102l2",
      unit: 102,
      lesson: 2,
      title: "Hvem betaler, og hva som slites ut",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Argue about what a health service costs — name who pays, where the money comes from, and what runs out before the money does.",
      items: [
        { id: "no-u102l2-eifinansiering", type: "vocab", front: "ei finansiering", reading: "eifinansiering", meaning: "funding (arrangement)", example: { jp: "Finansieringa er på plass, men ingen har regnet på hva sykehuset koster om ti år.", en: "The funding is in place, but nobody has calculated what the hospital costs in ten years." }, accept: ["financing", "funding"], drill: { jp: "De fant ei finansiering som holder", en: "They found a funding that holds" }, hint: "ei finansiering → finansieringa. -ing er hunkjønn (regel 1). ORDNINGA, ikke pengene — pengene er ei bevilgning." },
        { id: "no-u102l2-enegenandel", type: "vocab", front: "en egenandel", reading: "enegenandel", meaning: "patient contribution (co-payment)", example: { jp: "Egenandelen er lav, men den er høy nok til at noen lar være å gå til legen.", en: "The co-payment is low, but it is high enough that some people avoid going to the doctor." }, accept: ["an excess", "a co-payment", "out-of-pocket fee"], drill: { jp: "Du betaler en egenandel hos legen", en: "You pay a patient contribution at the doctor" }, hint: "en egenandel → egenandelen, flertall egenandeler. Egen + en andel (u89). Den delen DU betaler selv; resten betaler staten." },
        { id: "no-u102l2-eibevilgning", type: "vocab", front: "ei bevilgning", reading: "eibevilgning", meaning: "grant (of public money)", example: { jp: "Bevilgninga kom i januar, og da hadde avdelingen allerede sagt opp to av dem den skulle betale for.", en: "The grant came in January, and by then the department had already given notice to two of the people it was meant to pay for." }, accept: ["an appropriation", "an allocation"], drill: { jp: "De venter på ei bevilgning fra staten", en: "They are waiting for a grant from the state" }, hint: "ei bevilgning → bevilgninga. -ning er hunkjønn (regel 1). Fra å bevilge: en offentlig sum som er VEDTATT, ikke søkt om." },
        { id: "no-u102l2-eibemanning", type: "vocab", front: "ei bemanning", reading: "eibemanning", meaning: "staffing level", example: { jp: "Bemanninga er etter planen på papiret, men om natta er de to på en hel avdeling.", en: "Staffing is according to plan on paper, but at night they are two on a whole ward." }, accept: ["staffing", "manning"], drill: { jp: "Avdelingen har ei bemanning som er for lav", en: "The ward has a staffing that is too low" }, hint: "ei bemanning → bemanninga. Fra å bemanne. Hvor mange som FAKTISK er på jobb — ikke hvor mange stillinger som finnes." },
        { id: "no-u102l2-enhelseko", type: "vocab", front: "en helsekø", reading: "enhelseko", meaning: "health-service queue", example: { jp: "Helsekøen blir kortere like før et valg, og lengre igjen så snart valget er over.", en: "The health-service queue gets shorter just before an election, and longer again as soon as the election is over." }, accept: ["waiting list", "the queue for treatment"], drill: { jp: "Det står mange i en helsekø", en: "Many people are standing in a health-service queue" }, hint: "en helsekø → helsekøen, flertall helsekøer. Helse + en kø (u23). Merk ø-folden: lesinga er enhelseko. Et politisk ord: du hører det i hver valgkamp." },
        { id: "no-u102l2-enslitasje", type: "vocab", front: "en slitasje", reading: "enslitasje", meaning: "wear and tear", example: { jp: "Slitasjen på folk vises ikke i noe budsjett, men den koster mer enn alt annet gjør.", en: "The wear and tear on people does not show in any budget, but it costs more than everything else does." }, accept: ["wear", "attrition"], drill: { jp: "Det er en slitasje på folk her", en: "There is a wear and tear on people here" }, hint: "en slitasje → slitasjen. ⚠ -asje er hankjønn, som en bagasje (u23). Fra å slite (u25). Om utstyr OG om mennesker, og den andre bruken er den vanligste." },
      ],
    },
    {
      id: "no-u102l3",
      unit: 102,
      lesson: 3,
      title: "Å bli tatt vare på",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about care rather than treatment — name who is around the patient, what keeps them going, and what is left when the illness cannot be fixed.",
      items: [
        { id: "no-u102l3-enparorende", type: "vocab", front: "en pårørende", reading: "enparorende", meaning: "next of kin", example: { jp: "En pårørende gjør mye av jobben gratis, og det er nettopp det systemet regner med.", en: "A next of kin does a lot of the work for free, and that is exactly what the system counts on." }, accept: ["a relative (of a patient)", "a family carer"], drill: { jp: "De ringte til en pårørende med en gang", en: "They called a next of kin at once" }, hint: "en pårørende → den pårørende, flertall pårørende (ubøyd). Merk å- og ø-folden: lesinga er enparorende. -ende-former bøyes ikke. Juridisk ord: den som har rett til å få vite." },
        { id: "no-u102l3-ethjelpemiddel", type: "vocab", front: "et hjelpemiddel", reading: "ethjelpemiddel", meaning: "assistive device", example: { jp: "Et hjelpemiddel koster lite, men det kan være forskjellen på å bo hjemme og å flytte.", en: "An assistive device costs little, but it can be the difference between living at home and moving out." }, accept: ["an aid", "a device"], drill: { jp: "Hun søkte om et hjelpemiddel i vår", en: "She applied for an assistive device in the spring" }, hint: "et hjelpemiddel → hjelpemidlet, flertall hjelpemidler. Merk at -el mister e-en i bestemt form: middel → midlet. Hjelp + et middel." },
        { id: "no-u102l3-eifunksjonsevne", type: "vocab", front: "ei funksjonsevne", reading: "eifunksjonsevne", meaning: "functional capacity", example: { jp: "Funksjonsevna er god nok til å bo hjemme, men ikke god nok til å gå i trappa hver dag.", en: "Functional capacity is good enough to live at home, but not good enough to take the stairs every day." }, accept: ["ability to function", "functional ability"], drill: { jp: "De måler ei funksjonsevne hvert år", en: "They measure a functional capacity every year" }, hint: "ei funksjonsevne → funksjonsevna. Ei evne (u58) er hunkjønn, og sammensetninga arver det. Hva du KLARER, ikke hva du feiler." },
        { id: "no-u102l3-enverdighet", type: "vocab", front: "en verdighet", reading: "enverdighet", meaning: "dignity", example: { jp: "Verdigheten forsvinner fort på et rom med fire senger, uansett hvor god behandlingen er.", en: "Dignity disappears fast in a room with four beds, however good the treatment is." }, accept: ["dignity"], drill: { jp: "Det handler om en verdighet til slutt", en: "In the end it is about a dignity" }, hint: "en verdighet → verdigheten. ⚠ -het er ALLTID hankjønn (regel 1), aldri ei. Fra verdi (u27) via verdig. Det norske ordet i eldreomsorgen." },
        { id: "no-u102l3-enlivskvalitet", type: "vocab", front: "en livskvalitet", reading: "enlivskvalitet", meaning: "quality of life", example: { jp: "Livskvaliteten gikk opp da hun fikk hjelp hjemme, selv om sykdommen var helt den samme.", en: "Quality of life went up when she got help at home, even though the illness was exactly the same." }, accept: ["quality of life"], drill: { jp: "Hun har en livskvalitet ingen ventet", en: "She has a quality of life nobody expected" }, hint: "en livskvalitet → livskvaliteten. -tet er hankjønn, som en kvalitet (u56). Et liv (u34) + kvalitet. Måles med spørreskjema, og det er omstridt nettopp derfor." },
        { id: "no-u102l3-alindre", type: "vocab", front: "å lindre", reading: "alindre", meaning: "to relieve (ease)", example: { jp: "Vi kan lindre smerten, men vi kan ikke love at hun blir frisk igjen.", en: "We can relieve the pain, but we cannot promise that she will get well again." }, accept: ["to ease", "to alleviate", "to soothe"], drill: { jp: "Det er mulig å lindre smerten her", en: "It is possible to relieve the pain here" }, hint: "å lindre → lindrer, lindret. Å gjøre vondt mindre vondt UTEN å fjerne årsaken. Å behandle (u78) prøver å fjerne den." },
      ],
    },
    {
      id: "no-u102l4",
      unit: 102,
      lesson: 4,
      title: "Folkehelse og forebygging",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Argue at population level — say what is measured across everybody, and why a number that moves slowly is still the strongest argument there is.",
      items: [
        { id: "no-u102l4-eifolkehelse", type: "vocab", front: "ei folkehelse", reading: "eifolkehelse", meaning: "public health", example: { jp: "Folkehelsa er bedre enn før, men forskjellen mellom folk har blitt større samtidig.", en: "Public health is better than before, but the difference between people has grown at the same time." }, accept: ["population health"], drill: { jp: "Tallene viser ei folkehelse i endring", en: "The figures show a public health in change" }, hint: "ei folkehelse → folkehelsa. Folk (u77) + helse (u25). Helsa til HELE befolkninga, ikke til pasienten foran deg." },
        { id: "no-u102l4-etsmittevern", type: "vocab", front: "et smittevern", reading: "etsmittevern", meaning: "infection control", example: { jp: "Smittevernet virket, og det er nettopp derfor ingen kan bevise at det var nødvendig.", en: "Infection control worked, and that is exactly why nobody can prove it was necessary." }, accept: ["infection prevention"], drill: { jp: "Sykehuset har et smittevern som virker", en: "The hospital has an infection control that works" }, hint: "et smittevern → smittevernet. Ei smitte + vern (u65). Alle reglene til sammen — håndvask, avstand, munnbind." },
        { id: "no-u102l4-enlevealder", type: "vocab", front: "en levealder", reading: "enlevealder", meaning: "life expectancy", example: { jp: "Levealderen stiger jevnt, men de årene som kommer til slutt er ikke alltid gode år.", en: "Life expectancy is rising steadily, but the years that come at the end are not always good years." }, accept: ["life span", "life expectancy"], drill: { jp: "Landet har en levealder som stiger", en: "The country has a life expectancy that is rising" }, hint: "en levealder → levealderen. Å leve + en alder (u28). Hankjønn fordi alder er det — sammensetninga arver siste ledd." },
        { id: "no-u102l4-endodelighet", type: "vocab", front: "en dødelighet", reading: "endodelighet", meaning: "mortality (rate)", example: { jp: "Dødeligheten gikk ned etter at rutinen ble lagt om, men ingen klarte å si hvilken del av den som virket.", en: "Mortality went down after the routine was rearranged, but nobody managed to say which part of it worked." }, accept: ["mortality", "death rate"], drill: { jp: "Tallene viser en dødelighet som er lav", en: "The figures show a mortality that is low" }, hint: "en dødelighet → dødeligheten. -het er hankjønn. Merk ø-folden: lesinga er endodelighet. Fra dødelig. Alltid en ANDEL, aldri et antall." },
        { id: "no-u102l4-eiernaering", type: "vocab", front: "ei ernæring", reading: "eiernaering", meaning: "nutrition", example: { jp: "Ernæringa er en billig medisin, men den er også vanskelig å få folk til å ta.", en: "Nutrition is a cheap medicine, but it is also hard to get people to take." }, accept: ["nutrition", "diet (nutritional)"], drill: { jp: "Pasienten trenger ei ernæring som passer", en: "The patient needs a nutrition that fits" }, hint: "ei ernæring → ernæringa. -ing er hunkjønn. Merk æ-folden: lesinga er eiernaering. Fagordet; et kosthold (u67) er det folk sier." },
        { id: "no-u102l4-eirehabilitering", type: "vocab", front: "ei rehabilitering", reading: "eirehabilitering", meaning: "rehabilitation", example: { jp: "Rehabiliteringa tar måneder, og det er den delen av behandlingen som ofte blir kuttet først.", en: "Rehabilitation takes months, and it is the part of the treatment that often gets cut first." }, accept: ["rehab", "recovery programme"], drill: { jp: "Han begynte på ei rehabilitering i vår", en: "He started a rehabilitation in the spring" }, hint: "ei rehabilitering → rehabiliteringa. -ing er hunkjønn. Arbeidet med å komme TILBAKE etter sykdom — ikke behandlinga av sykdommen selv." },
      ],
    },
  ],
};
