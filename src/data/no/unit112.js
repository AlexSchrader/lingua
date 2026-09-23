// NO Unit 112 — Omfang, fordeling og utvikling (slot: coverage-b2-2) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 2 (B2)" — a slot number, not an instruction. Theme
// chosen here. Conventions: unit1.js §1–§9, unit51.js B1–B9, unit88.js C1–C7.
//
// WHY THIS THEME. u47 taught measurement at A2 (et antall, ei mengde, å måle,
// omtrent), u53 taught comparison at B1, and u89 took the evidence layer at B2
// (en statistikk, et gjennomsnitt, en andel, en tabell). What NONE of them took
// is the vocabulary you need to argue ABOUT a number rather than state one: how
// big a thing is (l1), how it is spread (l2), which way it is moving (l3), and
// what you measured it against (l4). This is the layer a B2 learner needs to
// read a Norwegian newspaper's economy pages without taking every figure on
// trust.
//
// ⚠ RESERVED FOR BLOCK 3, NOT TAKEN HERE. unit88.js C6 lists fronts it measured
// free and earmarked for u114–u126: `et diagram`, `ei feilmargin`,
// `ei spørreundersøkelse`, `etterrettelig`. This unit deliberately stays off all
// four even though they would fit, because a lower slot taking them would leave
// block 3 with a spent theme and no warning.
//
// ⚠ "LEXEME" MEANS INFLECTION, NOT DERIVATION (CLAUDE.md / RUNBOOK §4, corrected
// on main 2026-09-23, commit 5928ca20). A word DERIVED from a taught one is a
// DIFFERENT lexeme and MAY be carded; only the SAME word in another form is
// blocked. `SAME` (article variant) and `TAKEN` from check-front.mjs are still
// hard blocks; `LEXEME` is advisory. The fronts below were left out on MERIT —
// twenty-four slots, and these lost — or because the learner genuinely already
// owns them; they are NOT blocked by the lexeme rule and a later block may card
// any of them:
// `ei stigning`, `ei telling`, `ei beregning`. Two more are NOT free, and the
// reason is not the lexeme rule: `et snitt` is a clipping of `et gjennomsnitt`
// (u89) with the IDENTICAL gloss, so it would collide on a produce card; and
// `ei kurve` shares its definite form `kurven` with `en kurv` (u27), which the
// validator cannot see and a learner would trip over.
//
// GENDER: -het is MASCULINE (en knapphet, en hyppighet, en skjevhet, en
// ytterlighet, en enhet), -ing/-ning is FEMININE (ei fordeling, ei spredning,
// ei svingning, ei utflating, ei vektlegging, ei kartlegging). `en nedgang` and
// `en framvekst` are masculine because en gang and en vekst (u50) are.
// FIRST FEMININE is `ei vektlegging` (l1) and carries the en-/ei- note.
//
// SCOPE: the frozen base u1–u111 plus this unit's own earlier cards.
// FREE: prosent | statistikk
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT112 = {
  id: "no-u112",
  lang: "no",
  title: "Omfang, fordeling og utvikling",
  order: 112,
  stage: "b2",
  lessons: [
    {
      id: "no-u112l1",
      unit: 112,
      lesson: 1,
      title: "Hvor mye og hvor stort",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how big a problem is without giving a figure — and say what you are weighting most heavily when you do.",
      items: [
        { id: "no-u112l1-etomfang", type: "vocab", front: "et omfang", reading: "etomfang", meaning: "extent (scale)", example: { jp: "Omfanget er større enn de sa i vår, og det er fremdeles ingen som vet hvor det stopper.", en: "The extent is bigger than they said in the spring, and there is still nobody who knows where it stops." }, accept: ["the scale", "the scope"], drill: { jp: "Saka har et omfang ingen ventet", en: "The case has an extent nobody expected" }, hint: "et omfang → omfanget. Om + å fange. Står nesten alltid i bestemt form og uten tall: omfanget er stort. Ei størrelse er målet; et omfang er hvor langt det rekker." },
        { id: "no-u112l1-enstorrelsesorden", type: "vocab", front: "en størrelsesorden", reading: "enstorrelsesorden", meaning: "order of magnitude", example: { jp: "Vi snakker om en helt annen størrelsesorden nå, og likevel bruker de det samme skjemaet.", en: "We are talking about a completely different order of magnitude now, and still they use the same form." }, accept: ["a scale (magnitude)", "a ballpark"], drill: { jp: "Dette er en størrelsesorden vi kjenner", en: "This is an order of magnitude we know" }, hint: "en størrelsesorden → størrelsesordenen. Ei størrelse (u10) + en orden (u61). Merk ø-folden: lesinga er enstorrelsesorden. Ikke tallet — hvilken KLASSE av tall det er." },
        { id: "no-u112l1-enknapphet", type: "vocab", front: "en knapphet", reading: "enknapphet", meaning: "scarcity", example: { jp: "Det er en knapphet på folk, ikke på penger, og det er en mye vanskeligere sak.", en: "There is a scarcity of people, not of money, and that is a much harder matter." }, accept: ["shortage", "scarcity"], drill: { jp: "Det er en knapphet på tid her", en: "There is a scarcity of time here" }, hint: "en knapphet → knappheten. ⚠ -het er ALLTID hankjønn. Fra knapp (u47), som betyr så vidt nok. Alltid med på: knapphet PÅ noe." },
        { id: "no-u112l1-enhyppighet", type: "vocab", front: "en hyppighet", reading: "enhyppighet", meaning: "frequency (how often)", example: { jp: "Hyppigheten har gått opp, men hver sak er mindre alvorlig enn før.", en: "The frequency has gone up, but each case is less serious than before." }, accept: ["frequency", "rate of occurrence"], drill: { jp: "De målte en hyppighet som var høy", en: "They measured a frequency that was high" }, hint: "en hyppighet → hyppigheten. -het er hankjønn. Fra hyppig (u28). Hvor OFTE noe skjer; et antall er hvor mange ganger til sammen." },
        { id: "no-u112l1-etmaltall", type: "vocab", front: "et måltall", reading: "etmaltall", meaning: "target figure", example: { jp: "Måltallet stemte på papiret, og ingen spurte om hva de sluttet å gjøre for å nå det.", en: "The target figure matched on paper, and nobody asked what they stopped doing in order to reach it." }, accept: ["a target", "a key figure"], drill: { jp: "De satte et måltall for året", en: "They set a target figure for the year" }, hint: "et måltall → måltallet, flertall måltall (ubøyd). Et mål (u44) + et tall (u5). Merk å-folden: lesinga er etmaltall. ⚠ Et tall du skal NÅ, ikke et du har målt." },
        { id: "no-u112l1-eivektlegging", type: "vocab", front: "ei vektlegging", reading: "eivektlegging", meaning: "emphasis (weighting)", example: { jp: "Vektlegginga av prisen forklarer hele konklusjonen, og den er aldri skrevet ned noe sted.", en: "The weighting of price explains the whole conclusion, and it is never written down anywhere." }, accept: ["weighting", "emphasis"], drill: { jp: "De valgte ei vektlegging som var ny", en: "They chose a weighting that was new" }, hint: "ei vektlegging → vektlegginga. Hunkjønnsord kan du også skrive en vektlegging / vektleggingen; -ing er alltid hunkjønn i denne kursen (regel 1). Ei vekt (u47) + å legge (u77)." },
      ],
    },
    {
      id: "no-u112l2",
      unit: 112,
      lesson: 2,
      title: "Hvordan det fordeler seg",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Attack an average by describing the spread behind it — and name the point where the two halves meet.",
      items: [
        { id: "no-u112l2-eifordeling", type: "vocab", front: "ei fordeling", reading: "eifordeling", meaning: "distribution", example: { jp: "Fordelinga er ulik, og et gjennomsnitt sier derfor nesten ingenting om hvem dette gjelder.", en: "The distribution is uneven, and an average therefore says almost nothing about whom this concerns." }, accept: ["a spread", "an allocation"], drill: { jp: "Tallene viser ei fordeling vi kjenner", en: "The figures show a distribution we know" }, hint: "ei fordeling → fordelinga. -ing er hunkjønn. Fra å fordele (u93). Både hvordan noe FAKTISK ligger og hvordan noen har DELT det ut." },
        { id: "no-u112l2-eispredning", type: "vocab", front: "ei spredning", reading: "eispredning", meaning: "dispersion (variation)", example: { jp: "Spredninga er stor nok til at de to gruppene er like, og da holder ikke konklusjonen.", en: "The dispersion is big enough that the two groups are alike, and then the conclusion does not hold." }, accept: ["variation", "scatter"], drill: { jp: "Det er ei spredning i tallene her", en: "There is a dispersion in the figures here" }, hint: "ei spredning → spredninga. -ning er hunkjønn. Fra å spre. ⚠ Også om sykdom og nyheter: spredning av smitte. I statistikk er det hvor langt fra hverandre tallene ligger." },
        { id: "no-u112l2-enytterlighet", type: "vocab", front: "en ytterlighet", reading: "enytterlighet", meaning: "extreme", example: { jp: "Begge ytterlighetene er lette å avvise, og svaret ligger sjelden mellom dem likevel.", en: "Both extremes are easy to dismiss, and the answer still seldom lies between them." }, accept: ["an extreme", "an extreme position"], drill: { jp: "Han går fra en ytterlighet til en annen", en: "He goes from one extreme to another" }, hint: "en ytterlighet → ytterligheten, flertall ytterligheter. -het er hankjønn. Fra ytre. Om MENINGER og om tall; ytterst (u91) er adverbet." },
        { id: "no-u112l2-enmedian", type: "vocab", front: "en median", reading: "enmedian", meaning: "median", example: { jp: "Medianen er lavere enn gjennomsnittet, og forskjellen mellom dem er hele saka.", en: "The median is lower than the average, and the difference between them is the whole story." }, accept: ["the median"], drill: { jp: "De brukte en median i stedet", en: "They used a median instead" }, hint: "en median → medianen, flertall medianer. Det MIDTERSTE tallet når du stiller dem på rekke. ⚠ Tåler ytterligheter mye bedre enn et gjennomsnitt (u89) gjør." },
        { id: "no-u112l2-ettyngdepunkt", type: "vocab", front: "et tyngdepunkt", reading: "ettyngdepunkt", meaning: "centre of gravity", example: { jp: "Tyngdepunktet i debatten har flyttet seg, og ingen av sidene har forandret seg.", en: "The centre of gravity in the debate has moved, and neither side has changed." }, accept: ["the centre of mass", "the focal point"], drill: { jp: "Saka har et tyngdepunkt et annet sted", en: "The case has a centre of gravity somewhere else" }, hint: "et tyngdepunkt → tyngdepunktet. Ei tyngde + et punkt. Fra fysikken, men brukes mest om debatter og organisasjoner: hvor makta eller oppmerksomheten faktisk ligger." },
        { id: "no-u112l2-enskjevhet", type: "vocab", front: "en skjevhet", reading: "enskjevhet", meaning: "skew (bias)", example: { jp: "Det er en skjevhet i utvalget, og den gjør tallene gale selv om alle har gjort jobben sin.", en: "There is a skew in the sample, and it makes the figures wrong even though everybody has done their job." }, accept: ["a bias", "an imbalance"], drill: { jp: "Det er en skjevhet i tallene her", en: "There is a skew in the figures here" }, hint: "en skjevhet → skjevheten, flertall skjevheter. ⚠ -het er ALLTID hankjønn. Fra skjev (u46). Om statistikk OG om samfunn: sosiale skjevheter." },
      ],
    },
    {
      id: "no-u112l3",
      unit: 112,
      lesson: 3,
      title: "Hvilken vei det går",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a movement over time — and say whether it is a real change of direction or just noise.",
      items: [
        { id: "no-u112l3-eisvingning", type: "vocab", front: "ei svingning", reading: "eisvingning", meaning: "fluctuation", example: { jp: "Det er ei svingning og ikke en endring, og forskjellen ser du først når du har tall for fem år.", en: "It is a fluctuation and not a change, and you only see the difference when you have figures for five years." }, accept: ["a fluctuation", "a swing"], drill: { jp: "Det kom ei svingning i tallene igjen", en: "A fluctuation came in the figures again" }, hint: "ei svingning → svingninga. -ning er hunkjønn. Fra å svinge (u45). Går OPP OG NED igjen; en trend går én vei." },
        { id: "no-u112l3-entrend", type: "vocab", front: "en trend", reading: "entrend", meaning: "trend", example: { jp: "Trenden er tydelig nok, men den bygger på tre tall og det er altfor lite.", en: "The trend is clear enough, but it is built on three figures and that is far too few." }, accept: ["a trend"], drill: { jp: "Vi ser en trend i tallene nå", en: "We see a trend in the figures now" }, hint: "en trend → trenden, flertall trender. ⚠ Også om mote og vaner. I tall betyr det RETNING over tid, ikke det som er populært nå." },
        { id: "no-u112l3-ennedgang", type: "vocab", front: "en nedgang", reading: "ennedgang", meaning: "decline", example: { jp: "Nedgangen kom to år før krisa, og det er nettopp derfor krisa ikke forklarer den.", en: "The decline came two years before the crisis, and that is exactly why the crisis does not explain it." }, accept: ["a fall", "a downturn"], drill: { jp: "Det ble en nedgang i vår", en: "There was a decline in the spring" }, hint: "en nedgang → nedgangen. Ned (u13) + en gang (u28). Hankjønn fordi -gang er det. Motstykket heter en oppgang." },
        { id: "no-u112l3-enframvekst", type: "vocab", front: "en framvekst", reading: "enframvekst", meaning: "rise (emergence)", example: { jp: "Framveksten av små partier forandrer alt, selv om ingen av dem er store nok til å styre.", en: "The rise of small parties changes everything, even though none of them is big enough to govern." }, accept: ["emergence", "growth (of something new)"], drill: { jp: "Vi ser en framvekst av nye grupper", en: "We see a rise of new groups" }, hint: "en framvekst → framveksten. Fram (u62) + en vekst (u50). Denne kursen skriver fram-, ikke frem-. ⚠ Om noe NYTT som kommer til, ikke om at noe kjent blir større." },
        { id: "no-u112l3-eiutflating", type: "vocab", front: "ei utflating", reading: "eiutflating", meaning: "levelling off", example: { jp: "Ei utflating er godt nytt her, for da slutter tallene å stige uten å falle.", en: "A levelling off is good news here, because then the figures stop rising without falling." }, accept: ["a plateau", "flattening"], drill: { jp: "Vi ser ei utflating i tallene nå", en: "We see a levelling off in the figures now" }, hint: "ei utflating → utflatinga. -ing er hunkjønn. Ut + flat (u46). Kurven slutter å stige uten å falle — ikke det samme som en nedgang." },
        { id: "no-u112l3-etomslag", type: "vocab", front: "et omslag", reading: "etomslag", meaning: "turnaround (reversal)", example: { jp: "Det kom et omslag i løpet av en uke, og etterpå husket alle at de hadde sett det komme.", en: "A turnaround came in the course of a week, and afterwards everybody remembered having seen it coming." }, accept: ["a reversal", "a shift"], drill: { jp: "Det kom et omslag i stemningen", en: "A turnaround came in the mood" }, hint: "et omslag → omslaget, flertall omslag (ubøyd). Om + å slå. ⚠ Også permen på ei bok, og om været: et omslag i været. En trend snur — det er et omslag." },
      ],
    },
    {
      id: "no-u112l4",
      unit: 112,
      lesson: 4,
      title: "Å måle det",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what a figure was measured against — and name the thing that stands in for what you actually wanted to know.",
      items: [
        { id: "no-u112l4-enmalestokk", type: "vocab", front: "en målestokk", reading: "enmalestokk", meaning: "yardstick (scale)", example: { jp: "De bytter målestokk underveis, og da er ikke de to tallene mulige å sammenligne.", en: "They change the yardstick along the way, and then the two figures are not possible to compare." }, accept: ["a scale", "a benchmark"], drill: { jp: "De brukte en målestokk ingen kjente", en: "They used a yardstick nobody knew" }, hint: "en målestokk → målestokken, flertall målestokker. Å måle (u47) + en stokk. Merk å-folden: lesinga er enmalestokk. Både på kart og i overført tydning." },
        { id: "no-u112l4-enenhet", type: "vocab", front: "en enhet", reading: "enenhet", meaning: "unit (of measurement)", example: { jp: "Tallene er i to ulike enheter, og feilen sto i tabellen i fire år før noen så den.", en: "The figures are in two different units, and the error stood in the table for four years before anybody saw it." }, accept: ["a unit"], drill: { jp: "De brukte en enhet som var gal", en: "They used a unit that was wrong" }, hint: "en enhet → enheten, flertall enheter. ⚠ -het er hankjønn. Fra en (u5). Både måleenheten OG en avdeling: en militær enhet." },
        { id: "no-u112l4-eikartlegging", type: "vocab", front: "ei kartlegging", reading: "eikartlegging", meaning: "survey (mapping)", example: { jp: "Kartlegginga viser hvor problemet er, og den sier ingenting om hvorfor det er der.", en: "The mapping shows where the problem is, and it says nothing about why it is there." }, accept: ["a mapping", "a survey"], drill: { jp: "De gjorde ei kartlegging i fire fylker", en: "They did a mapping in four counties" }, hint: "ei kartlegging → kartlegginga. -ing er hunkjønn. Et kart (u20) + å legge (u77). Å finne ut hva som FINNES, systematisk — ikke å forklare det." },
        { id: "no-u112l4-enoversikt", type: "vocab", front: "en oversikt", reading: "enoversikt", meaning: "overview", example: { jp: "Ingen har en oversikt over hele saka, og hver etat tror at en annen har den.", en: "Nobody has an overview of the whole case, and each agency believes another one has it." }, accept: ["an overview", "a summary view"], drill: { jp: "Vi trenger en oversikt over alt dette", en: "We need an overview of all of this" }, hint: "en oversikt → oversikten, flertall oversikter. Over + å se (u2). ⚠ Hankjønn. Alltid med over: oversikt OVER noe." },
        { id: "no-u112l4-etestimat", type: "vocab", front: "et estimat", reading: "etestimat", meaning: "estimate", example: { jp: "Estimatet er tre år gammelt, og de bruker det fremdeles som om det var et tall de hadde målt.", en: "The estimate is three years old, and they still use it as if it were a figure they had measured." }, accept: ["an estimate"], drill: { jp: "De la fram et estimat for året", en: "They put forward an estimate for the year" }, hint: "et estimat → estimatet, flertall estimater. Et REGNET tall, ikke et målt. Norsk sier ofte et anslag om det samme, men estimat er fagordet." },
        { id: "no-u112l4-enindikator", type: "vocab", front: "en indikator", reading: "enindikator", meaning: "indicator (proxy)", example: { jp: "En indikator er aldri det du vil måle, bare noe som følger det, og folk glemmer forskjellen fort.", en: "An indicator is never what you want to measure, only something that follows it, and people forget the difference fast." }, accept: ["an indicator", "a proxy"], drill: { jp: "De valgte en indikator som var ny", en: "They chose an indicator that was new" }, hint: "en indikator → indikatoren, flertall indikatorer. -tor er hankjønn. Fra å indikere. ⚠ Det som STÅR FOR det du egentlig vil vite — og derfor kan den manipuleres." },
      ],
    },
  ],
};
