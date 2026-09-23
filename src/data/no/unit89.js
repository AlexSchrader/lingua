// NO Unit 89 — Kilder og dokumentasjon (slot: evidence) — B2
// Retitled from the scaffold's English placeholder "Evidence and sources".
// B2 band conventions live in no/unit88.js's header; language-wide in unit1.js.
//
// The unit B1 set up and did not finish. u55 (Nyheter og samfunn) gives the
// learner en kilde, en journalist and ei avis; u74 (Studier og forskning) gives
// forskning, en undersøkelse and et funn. Neither teaches how to WEIGH a source
// — nothing in the 2032-word base says troverdig, partisk, et belegg or et
// utsagn. A learner who can read a Norwegian newspaper and cannot say why one
// claim is better supported than another has the vocabulary and not the skill.
//
// ⚠️ å tilbakevise is u88l2 ("to refute — show a claim is wrong"); å avkrefte
// here is the NARROWER word (officially deny a report), and the glosses are
// written to keep them apart. Same care with et belegg vs et bevis (u58).
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT89 = {
  id: "no-u89",
  lang: "no",
  title: "Kilder og dokumentasjon",
  order: 89,
  stage: "b2",
  lessons: [
    {
      id: "no-u89l1",
      unit: 89,
      lesson: 1,
      title: "Kilder og opphav",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say where a claim comes from and how far the source can be trusted — cite it, quote it, and name its origin.",
      items: [
        { id: "no-u89l1-enreferanse", type: "vocab", front: "en referanse", reading: "enreferanse", meaning: "reference (a pointer to where something is from)", example: { jp: "Artikkelen er god, men den savner en referanse til forskningen den bygger på.", en: "The article is good, but it lacks a reference to the research it rests on." }, accept: ["a citation", "a source reference"], drill: { jp: "Teksten savner en referanse her", en: "The text lacks a reference here" }, hint: "en referanse → referansen, flertall referanser. Peker mot kilden. NB: en referanse er også en person som kan gå god for deg når du søker jobb." },
        { id: "no-u89l1-asitere", type: "vocab", front: "å sitere", reading: "asitere", meaning: "to quote (repeat the exact words)", example: { jp: "Hun siterer alltid folk riktig, og derfor tror de på henne.", en: "She always quotes people correctly, and that is why they believe her." }, accept: ["to cite verbatim", "to repeat word for word"], drill: { jp: "Det er lett å sitere noen feil", en: "It is easy to quote somebody wrongly" }, hint: "å sitere → siterer, siterte. Fra et sitat (u48). Å sitere er ORDRETT; å gjengi (u70) er med dine egne ord." },
        { id: "no-u89l1-enfotnote", type: "vocab", front: "en fotnote", reading: "enfotnote", meaning: "footnote (the small print at the bottom)", example: { jp: "Det viktige i hele undersøkelsen står i en fotnote nede på sida.", en: "The important thing in the whole survey is in a footnote at the bottom of the page." }, accept: ["a note at the foot", "a bottom-of-page note"], drill: { jp: "Han skriver alltid en fotnote til", en: "He always writes one more footnote" }, hint: "en fotnote → fotnoten, flertall fotnoter. En fot + en note: noten ved foten av sida. Der referansen din hører hjemme." },
        { id: "no-u89l1-etopphav", type: "vocab", front: "et opphav", reading: "etopphav", meaning: "origin (where a thing first came from)", example: { jp: "Ingen vet hvor bildet kommer fra, og uten et opphav betyr det lite.", en: "Nobody knows where the picture comes from, and without an origin it means little." }, accept: ["a provenance", "a point of origin"], drill: { jp: "Historien har et opphav vi kjenner", en: "The story has an origin we know" }, hint: "et opphav → opphavet. Opp + å ha: det noe har seg opp fra. Opphavsrett er ordet for copyright." },
        { id: "no-u89l1-enkildekritikk", type: "vocab", front: "en kildekritikk", reading: "enkildekritikk", meaning: "source criticism (weighing how far a source can be trusted)", example: { jp: "Barna lærer en lett kildekritikk på skolen nå, og det trenger de.", en: "Children learn a simple source criticism at school now, and they need it." }, accept: ["source evaluation", "critical use of sources"], drill: { jp: "Dette krever en kildekritikk vi savner", en: "This calls for a source criticism we lack" }, hint: "en kildekritikk → kildekritikken. -ikk er hankjønn (unit88 regel B3). En kilde (u55) + kritikk. Hvem sier det, og hvorfor sier de det?" },
        { id: "no-u89l1-troverdig", type: "vocab", front: "troverdig", reading: "troverdig", meaning: "credible (worth believing)", example: { jp: "Han virker troverdig fordi han sier hva han ikke vet.", en: "He seems credible because he says what he does not know." }, accept: ["believable", "trustworthy"], drill: { jp: "Kilden er ikke særlig troverdig", en: "The source is not very credible" }, hint: "Å tro (u12) + verdig: verd å tro. Bøyes troverdig, troverdige. Troverdighet er substantivet." },
      ],
    },
    {
      id: "no-u89l2",
      unit: 89,
      lesson: 2,
      title: "Å sjekke en påstand",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Check a claim instead of believing it — document it, test it yourself, and say plainly when it turns out to be untrue.",
      items: [
        { id: "no-u89l2-adokumentere", type: "vocab", front: "å dokumentere", reading: "adokumentere", meaning: "to document (show it on paper)", example: { jp: "Du må dokumentere hvor mye du har betalt, ellers hjelper de deg ikke.", en: "You have to document how much you have paid, otherwise they will not help you." }, accept: ["to evidence in writing", "to provide papers for"], drill: { jp: "Det er lurt å dokumentere alt sammen", en: "It is wise to document everything" }, hint: "å dokumentere → dokumenterer, dokumenterte. Papir, kvittering, skjermbilde. Det offentlige (u78) ber alltid om dette." },
        { id: "no-u89l2-aetterprove", type: "vocab", front: "å etterprøve", reading: "aetterprove", meaning: "to verify independently (run the check yourself)", example: { jp: "Alle kan etterprøve tallene, for de ligger åpent på nettet.", en: "Anybody can verify the figures, because they lie open on the net." }, accept: ["to check for oneself", "to replicate a check"], drill: { jp: "Det bør være mulig å etterprøve dette", en: "It ought to be possible to verify this" }, hint: "å etterprøve → etterprøver, etterprøvde. Etter + å prøve (u15): prøve det etter noen. NB: ø folder til o, så lesinga er aetterprove." },
        { id: "no-u89l2-aavkrefte", type: "vocab", front: "å avkrefte", reading: "aavkrefte", meaning: "to deny officially (state that a report is untrue)", example: { jp: "Selskapet avkrefter at noen må slutte, men ingen der tror helt på det.", en: "The company denies that anybody has to leave, but nobody there quite believes it." }, accept: ["to officially deny", "to say a report is false"], drill: { jp: "De nekter å avkrefte hele saken", en: "They refuse to deny the whole matter" }, hint: "å avkrefte → avkrefter, avkreftet. Av + å krefte. Motsatt av å bekrefte (u51). Smalere enn å tilbakevise (u88): dette gjelder rykter og meldinger." },
        { id: "no-u89l2-agranske", type: "vocab", front: "å granske", reading: "agranske", meaning: "to scrutinise (go through in close detail)", example: { jp: "De gransker hvert tall i papirene før de sier noe til avisa.", en: "They scrutinise every figure in the papers before they say anything to the newspaper." }, accept: ["to examine closely", "to go through in detail"], drill: { jp: "Vi trenger noen til å granske dette", en: "We need somebody to scrutinise this" }, hint: "å granske → gransker, gransket. Grundigere enn å sjekke, mindre formelt enn ei etterforskning. En granskingsrapport er vanlig i norsk presse." },
        { id: "no-u89l2-etutsagn", type: "vocab", front: "et utsagn", reading: "etutsagn", meaning: "statement (a particular thing somebody said)", example: { jp: "Hele saken bygger på et utsagn fra en person som ikke vil si navnet sitt.", en: "The whole matter rests on a statement from a person who will not say their name." }, accept: ["an utterance", "a thing said"], drill: { jp: "Dette er et utsagn vi sjekker", en: "This is a statement we are checking" }, hint: "et utsagn → utsagnet, flertall utsagn (likt i flertall). Ut + å si. En påstand (u71) vil overbevise deg; et utsagn er bare noe som ble sagt." },
        { id: "no-u89l2-enfeilkilde", type: "vocab", front: "en feilkilde", reading: "enfeilkilde", meaning: "source of error (what could have made the answer wrong)", example: { jp: "Den største feilkilden er at de bare spurte folk som hadde interesse fra før.", en: "The biggest source of error is that they only asked people who already had an interest." }, accept: ["a cause of error", "a flaw in method"], drill: { jp: "Her er det en feilkilde til", en: "Here there is one more source of error" }, hint: "en feilkilde → feilkilden, flertall feilkilder. En feil (u20) + en kilde (u55). Å nevne sine egne feilkilder gjør deg mer troverdig, ikke mindre." },
      ],
    },
    {
      id: "no-u89l3",
      unit: 89,
      lesson: 3,
      title: "Vitne og belegg",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about what backs a story up — who saw it, what was brought to light, and whether the teller is leaning one way.",
      items: [
        { id: "no-u89l3-etvitne", type: "vocab", front: "et vitne", reading: "etvitne", meaning: "witness (a person who saw it happen)", example: { jp: "De fant et vitne som stod rett ved siden av hele tida.", en: "They found a witness who was standing right beside it the whole time." }, accept: ["an eyewitness", "somebody who saw it"], drill: { jp: "Politiet leter etter et vitne", en: "The police are looking for a witness" }, hint: "et vitne → vitnet, flertall vitner. NB: INTETKJØNN om personen, som et menneske og et barn. Verbet er å vitne." },
        { id: "no-u89l3-aavdekke", type: "vocab", front: "å avdekke", reading: "aavdekke", meaning: "to uncover (bring to light what was hidden)", example: { jp: "De avdekket at flere hadde visst om det i mange år.", en: "They uncovered that several people had known about it for many years." }, accept: ["to bring to light", "to expose"], drill: { jp: "Det tar tid å avdekke slikt", en: "It takes time to uncover such things" }, hint: "å avdekke → avdekker, avdekket. Av + å dekke: ta dekket av. Å oppdage (u34) er å finne; å avdekke er å finne det noen SKJULTE." },
        { id: "no-u89l3-eiavsloring", type: "vocab", front: "ei avsløring", reading: "eiavsloring", meaning: "revelation (a hidden thing made public)", example: { jp: "Det ble ei avsløring som ingen i partiet klarte å svare på den dagen.", en: "It became a revelation that nobody in the party managed to answer that day." }, accept: ["an expose", "a disclosure"], drill: { jp: "Dette er ei avsløring folk husker", en: "This is a revelation people remember" }, hint: "ei avsløring → avsløringa, flertall avsløringer. -ing er hunkjønn (unit88 regel B3). Fra å avsløre (u57). ø folder til o: eiavsloring." },
        { id: "no-u89l3-etbelegg", type: "vocab", front: "et belegg", reading: "etbelegg", meaning: "supporting evidence (what a claim actually rests on)", example: { jp: "Han gjentar det ofte, men han gir oss aldri et belegg for det.", en: "He repeats it often, but he never gives us any supporting evidence for it." }, accept: ["grounds for a claim", "backing"], drill: { jp: "Påstanden har et belegg nå", en: "The claim has supporting evidence now" }, hint: "et belegg → belegget. Fra å belegge: å legge noe under. Et bevis (u58) avgjør saken; et belegg støtter den bare." },
        { id: "no-u89l3-partisk", type: "vocab", front: "partisk", reading: "partisk", meaning: "biased (leaning to one side)", example: { jp: "Avisa er tydelig partisk i denne saken, og det skjuler den ikke.", en: "The newspaper is clearly biased in this matter, and it does not hide that." }, accept: ["one-sided", "slanted"], drill: { jp: "Undersøkelsen virker litt partisk", en: "The survey seems somewhat biased" }, hint: "Fra et parti (u32): du holder med ett parti. Bøyes partisk, partiske. Ikke det samme som å ta feil — du kan være partisk og ha rett." },
        { id: "no-u89l3-upartisk", type: "vocab", front: "upartisk", reading: "upartisk", meaning: "impartial (not leaning either way)", example: { jp: "En dommer skal være upartisk, også når han mener noe selv.", en: "A judge is to be impartial, also when he has an opinion himself." }, accept: ["neutral between sides", "even-handed"], drill: { jp: "Vi trenger en upartisk person her", en: "We need an impartial person here" }, hint: "u- + partisk, som uvanlig og ulik (u71). Upartisk er et KRAV til roller: dommer, lærer, leder." },
      ],
    },
    {
      id: "no-u89l4",
      unit: 89,
      lesson: 4,
      title: "Tall og framstilling",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read figures critically — say what is an estimate, which way they lean, and how the presentation is shaping what you see.",
      items: [
        { id: "no-u89l4-aansla", type: "vocab", front: "å anslå", reading: "aansla", meaning: "to estimate (put a rough figure on)", example: { jp: "De anslår at arbeidet tar to år, men ingen vil love noe.", en: "They estimate that the work will take two years, but nobody will promise anything." }, accept: ["to put at roughly", "to reckon at"], drill: { jp: "Det er vanskelig å anslå prisen", en: "It is hard to estimate the price" }, hint: "å anslå → anslår, anslo. An + å slå. Substantivet er et anslag. Et anslag er et tall med vilje omtrent — ikke en måling." },
        { id: "no-u89l4-eikartlegging", type: "vocab", front: "ei kartlegging", reading: "eikartlegging", meaning: "a mapping (a survey of what is actually there)", example: { jp: "Kommunen har gjort ei kartlegging av hvem som savner et hus.", en: "The municipality has done a mapping of who lacks a home." }, accept: ["a survey of the ground", "a stocktaking"], drill: { jp: "Vi begynner med ei kartlegging", en: "We start with a mapping" }, hint: "ei kartlegging → kartlegginga. -ing er hunkjønn (unit88 regel B3). Et kart + å legge. En undersøkelse (u74) spør folk; ei kartlegging teller det som fins." },
        { id: "no-u89l4-objektiv", type: "vocab", front: "objektiv", reading: "objektiv", meaning: "objective (true regardless of who is looking)", example: { jp: "Ingen framstilling er helt objektiv, men noen prøver hardere enn andre.", en: "No account is completely objective, but some try harder than others." }, accept: ["free of personal view", "not coloured by the observer"], drill: { jp: "Tallene er objektiv opplysning her", en: "The figures are objective information here" }, hint: "Bøyes objektiv, objektivt, objektive. Upartisk (l3) er om PERSONEN som velger; objektiv er om SAKEN sjøl." },
        { id: "no-u89l4-subjektiv", type: "vocab", front: "subjektiv", reading: "subjektiv", meaning: "subjective (coloured by who is looking)", example: { jp: "At maten er god er subjektiv smak, men at den er dyr kan vi måle.", en: "That the food is good is subjective taste, but that it is expensive we can measure." }, accept: ["a matter of personal view", "dependent on the observer"], drill: { jp: "Dette er en subjektiv vurdering", en: "This is a subjective assessment" }, hint: "Motsatt av objektiv. Subjektiv er ikke et skjellsord — smak, opplevelse og følelse ER subjektive, og det er greit." },
        { id: "no-u89l4-eiframstilling", type: "vocab", front: "ei framstilling", reading: "eiframstilling", meaning: "an account (how a story is presented)", example: { jp: "De er enige om hva som skjer, men de gir hver si framstilling av hvorfor.", en: "They agree about what is happening, but each gives their own account of why." }, accept: ["a presentation of events", "a rendering"], drill: { jp: "Dette er ei framstilling vi kjenner", en: "This is an account we recognise" }, hint: "ei framstilling → framstillinga. -ing er hunkjønn. Fram + å stille. To sanne framstillinger av samme sak kan gi helt ulikt inntrykk (u50)." },
        { id: "no-u89l4-entendens", type: "vocab", front: "en tendens", reading: "entendens", meaning: "tendency (the way figures are leaning over time)", example: { jp: "Et år betyr lite, men over ti år ser vi en klar tendens.", en: "One year means little, but over ten years we see a clear tendency." }, accept: ["a trend in the data", "a drift"], drill: { jp: "Vi ser en tendens i tallene", en: "We see a tendency in the figures" }, hint: "en tendens → tendensen, flertall tendenser. Ei endring (u59) er ett hopp; en tendens er retningen mange tall peker i." },
      ],
    },
  ],
};
