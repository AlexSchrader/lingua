// NO Unit 121 — Oppmerksomhet og det som blir oversett (slot: coverage-b2-11) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 11 (B2)" — a slot number, not an instruction.
// Theme chosen here. Conventions: unit1.js §1–§9, unit51.js B1–B9, unit88.js
// C1–C7.
//
// WHY THIS THEME. u89 took SOURCES and u104 the MEDIA, so the corpus can argue
// about what a text SAYS. It cannot argue about what a text LEAVES OUT, and
// that is the more common move: at B2 you win far more often by naming what is
// missing than by disputing what is there. The corpus had `å framheve` (u88),
// `påfallende` (u91), `synlig` (u71), `å granske` (u89) and `ei tilsløring`
// (u110) — five words, all of them about the visible half.
//   l1  turning the attention onto something
//   l2  what comes forward on its own, and what does not
//   l3  what you miss
//   l4  keeping something out of sight
//
// ⚠ CUT — `å tilsløre`. `ei tilsløring` is taught at u110 and the verb is a
// transparent derivation of it: a learner who has the noun produces the verb.
// That is the semantic test in unit51.js B2 and it fails it. `å dysse ned` and
// `å underspille` took the slots, and both are better cards anyway because they
// are what Norwegians actually say. `ei utelatelse` was cut for a different
// reason — it would have sat in the same LESSON as `å utelate`.
//
// ⚠ GENDER — THIS UNIT HAS NO FEMININE NOUN, and that is measured, not lazy.
// `et søkelys` is neuter because `et lys` is; `en blindsone` and `en bagatell`
// are masculine. Neither head is in the corpus, so both were decided from
// ordinary Bokmål and are flagged here rather than left silent. The en-/ei-
// note therefore does not appear in this unit; it is carried by u120
// (`ei rettesnor`) and u123 (`ei spørreundersøkelse`).
//
// DRILLS: å-verb drills use an å-frame; adjective drills take a COMMON-GENDER
// SINGULAR subject so the front appears verbatim.
//
// SCOPE: the frozen base u1–u120 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT121 = {
  id: "no-u121",
  lang: "no",
  title: "Oppmerksomhet og det som blir oversett",
  order: 121,
  stage: "b2",
  lessons: [
    {
      id: "no-u121l1",
      unit: 121,
      lesson: 1,
      title: "Å rette blikket mot noe",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Direct attention onto one part of a case — and say whether you are choosing it or just noticing it.",
      items: [
        { id: "no-u121l1-etsokelys", type: "vocab", front: "et søkelys", reading: "etsokelys", meaning: "a spotlight (public attention aimed somewhere)", example: { jp: "Søkelyset står på den ene kommunen, og de andre gjør nettopp det samme uten at noen ser det.", en: "The spotlight is on that one council, and the others are doing exactly the same without anybody seeing it." }, accept: ["the limelight", "public scrutiny"], drill: { jp: "Vi setter et søkelys på denne saka", en: "We put a spotlight on this case" }, hint: "et søkelys → søkelyset, flertall søkelys (ubøyd). Merk ø-folden: lesinga er etsokelys. Å søke + et lys. ⚠ Nesten alltid overført og nesten alltid om KRITIKK: «å sette søkelys på» betyr at noe er galt, ikke bare at det er interessant." },
        { id: "no-u121l1-atrekkefram", type: "vocab", front: "å trekke fram", reading: "atrekkefram", meaning: "to bring up (pick one thing out to talk about)", example: { jp: "Hun trekker fram det ene tallet som passer, og de andre står i den samme tabellen.", en: "She brings up the one figure that fits, and the others are in the same table." }, accept: ["to highlight", "to bring forward"], drill: { jp: "Det er lett å trekke fram gode tall", en: "It is easy to bring up good figures" }, hint: "å trekke fram → trekker, trakk, har trukket. Å trekke (u77) + fram. ⚠ Nøytralt i seg selv, men i en debatt er «hun trekker fram» ofte innledningen til en anklage om at hun bare trakk fram det ene." },
        { id: "no-u121l1-afestesegved", type: "vocab", front: "å feste seg ved", reading: "afestesegved", meaning: "to fasten on (be struck by one detail)", example: { jp: "Alle fester seg ved den ene setninga, og resten av brevet leser ingen i det hele tatt.", en: "Everybody fastens on that one sentence, and the rest of the letter nobody reads at all." }, accept: ["to fix on", "to be struck by"], drill: { jp: "Det er lett å feste seg ved slikt", en: "It is easy to fasten on that sort of thing" }, hint: "å feste seg ved → fester seg, festet seg, har festet seg. Alltid med seg og med ved. ⚠ Om noe som skjer MED deg: du velger ikke hva du fester deg ved. Å trekke fram er et valg." },
        { id: "no-u121l1-aleggemerketil", type: "vocab", front: "å legge merke til", reading: "aleggemerketil", meaning: "to notice (become aware of)", example: { jp: "Ingen la merke til endringa før den hadde stått i teksten i to år.", en: "Nobody noticed the change until it had been in the text for two years." }, accept: ["to notice", "to take note of"], drill: { jp: "Det er lett å legge merke til slikt", en: "It is easy to notice that sort of thing" }, hint: "å legge merke til → legger, la, har lagt. Å legge (u77) + et merke + til. ⚠ Det HELT VANLIGE ordet for «notice», og det er et fast uttrykk: du kan ikke si «å merke til». Å merke alene betyr å kjenne." },
        { id: "no-u121l1-afangeopp", type: "vocab", front: "å fange opp", reading: "afangeopp", meaning: "to pick up on (catch something before it grows)", example: { jp: "Systemet skal fange opp slike saker tidlig, og denne gikk gjennom det i tre år.", en: "The system is meant to pick up on such cases early, and this one went through it for three years." }, accept: ["to catch", "to detect"], drill: { jp: "Systemet skal prøve å fange opp slikt", en: "The system is meant to try to pick up on that" }, hint: "å fange opp → fanger, fanget, har fanget. Å fange + opp. ⚠ Et forvaltnings- og helseord i norsk: systemer fanger opp barn, saker, signaler. Å oppdage er å finne noe; å fange opp er å finne det I TIDE." },
        { id: "no-u121l1-aiaktta", type: "vocab", front: "å iaktta", reading: "aiaktta", meaning: "to observe (watch closely and without acting)", example: { jp: "De iakttar prosessen på lang vei, og ingen av dem kan gripe inn selv om de ser hva som skjer.", en: "They observe the process from a long way off, and none of them can intervene even if they see what is happening." }, accept: ["to observe", "to watch"], drill: { jp: "De pleier å iaktta slike prosesser lenge", en: "They tend to observe such processes for a long time" }, hint: "å iaktta → iakttar, iakttok, har iakttatt. Merk den doble t-en. I + akt + å ta. ⚠ Skriftlig og kjølig; i tale sier folk «å se på» eller «å følge med». Det ligger i ordet at du IKKE griper inn." },
      ],
    },
    {
      id: "no-u121l2",
      unit: 121,
      lesson: 2,
      title: "Det som trer fram av seg selv",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how visible something is on its own — and use that to argue that nobody could have missed it, or that everybody could.",
      items: [
        { id: "no-u121l2-ioynefallende", type: "vocab", front: "iøynefallende", reading: "ioynefallende", meaning: "striking (impossible not to see)", example: { jp: "Forskjellen er iøynefallende i tabellen, og ingen av dem som leste den sa noe.", en: "The difference is striking in the table, and none of those who read it said anything." }, accept: ["conspicuous", "eye-catching"], drill: { jp: "Forskjellen er iøynefallende i denne tabellen", en: "The difference is striking in this table" }, hint: "iøynefallende, bøyes ikke — -ende-former er like i alle kjønn. Merk ø-folden: lesinga er ioynefallende. I + et øye + å falle. ⚠ Det STERKESTE ordet for synlig, og derfor et argument: hvis noe er iøynefallende, kan ingen si at de ikke så det." },
        { id: "no-u121l2-framtredende", type: "vocab", front: "framtredende", reading: "framtredende", meaning: "prominent (occupies a leading place)", example: { jp: "Han har en framtredende plass i teksten, og arbeidet han gjorde er nevnt i en fotnote.", en: "He has a prominent place in the text, and the work he did is mentioned in a footnote." }, accept: ["leading", "notable"], drill: { jp: "Han har en framtredende plass her", en: "He has a prominent place here" }, hint: "framtredende, bøyes ikke. Fram + å tre. ⚠ Om PLASS og RANG, ikke om synlighet: en framtredende forsker, en framtredende rolle. Iøynefallende er om hva øyet ser." },
        { id: "no-u121l2-atrefram", type: "vocab", front: "å tre fram", reading: "atrefram", meaning: "to emerge (become visible as you look longer)", example: { jp: "Mønsteret trer fram først når du ser på alle årene samtidig, og de viser bare det ene.", en: "The pattern emerges only when you look at all the years at once, and they show only the one." }, accept: ["to come forward", "to stand out gradually"], drill: { jp: "Mønsteret pleier å tre fram etter hvert", en: "The pattern tends to emerge eventually" }, hint: "å tre fram → trer, trådte, har trådt. ⚠ To bruk: et mønster trer fram i tallene, OG et menneske trer fram i offentligheten, altså står fram med navn. Begge er vanlige." },
        { id: "no-u121l2-umerkelig", type: "vocab", front: "umerkelig", reading: "umerkelig", meaning: "imperceptible (too small to be caught as it happens)", example: { jp: "Endringa var umerkelig fra måned til måned, og etter fem år var ingenting likt.", en: "The change was imperceptible from month to month, and after five years nothing was the same." }, accept: ["unnoticeable", "slight"], drill: { jp: "Endringa er umerkelig fra dag til dag", en: "The change is imperceptible from day to day" }, hint: "umerkelig → umerkelig, umerkelige. -ig-ord får ikke -t i intetkjønn. U- + å merke + lig. ⚠ Nesten alltid om noe som til slutt BLIR stort: ordet bærer hele argumentet om at små endringer legger seg oppå hverandre." },
        { id: "no-u121l2-utydelig", type: "vocab", front: "utydelig", reading: "utydelig", meaning: "indistinct (there, but you cannot make it out)", example: { jp: "Svaret er utydelig med hensikt, og de som skrev det kan vise til det uansett hva som skjer.", en: "The answer is indistinct on purpose, and those who wrote it can point to it whatever happens." }, accept: ["unclear", "blurred"], drill: { jp: "Svaret er utydelig og ganske kort", en: "The answer is indistinct and rather short" }, hint: "utydelig → utydelig, utydelige. U- + tydelig (u51). ⚠ Om FORMEN på noe du faktisk ser: utydelig skrift, utydelig tale, et utydelig svar. Upresis (u119) er om innholdet." },
        { id: "no-u121l2-skjult", type: "vocab", front: "skjult", reading: "skjult", meaning: "hidden (put out of sight by somebody)", example: { jp: "Kostnaden er skjult et annet sted, og alle som satte opp budsjettet visste hvor den lå.", en: "The cost is hidden somewhere else, and everybody who drew up the budget knew where it was." }, accept: ["concealed", "covert"], drill: { jp: "Kostnaden er skjult i dette budsjettet", en: "The cost is hidden in this budget" }, hint: "skjult → skjult, skjulte. Perfektum partisipp av å skjule (u57), brukt som adjektiv. ⚠ Det ligger en HANDLING i ordet: noe er skjult fordi noen skjulte det. Umerkelig og utydelig kan være uskyldige." },
      ],
    },
    {
      id: "no-u121l3",
      unit: 121,
      lesson: 3,
      title: "Det du ikke får med deg",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that something was missed — and decide whether you are blaming somebody or explaining why nobody could have caught it.",
      items: [
        { id: "no-u121l3-aoverse", type: "vocab", front: "å overse", reading: "aoverse", meaning: "to overlook (fail to take account of)", example: { jp: "De overser den ene gruppa i hele teksten, og den er den største av dem alle.", en: "They overlook that one group in the whole text, and it is the biggest of them all." }, accept: ["to miss", "to disregard"], drill: { jp: "Det er lett å overse en hel gruppe", en: "It is easy to overlook a whole group" }, hint: "å overse → overser, overså, har oversett. Over + å se (u2). ⚠ To bruk og begge er alvorlige: å ikke få noe med seg, OG å late som om et MENNESKE ikke er der. Den siste er en av de vondeste tingene du kan si." },
        { id: "no-u121l3-agaglippav", type: "vocab", front: "å gå glipp av", reading: "agaglippav", meaning: "to miss out on (lose the chance at something good)", example: { jp: "De går glipp av hele ordningen fordi ingen sier fra om at den finnes.", en: "They miss out on the whole arrangement because nobody tells them it exists." }, accept: ["to miss out on", "to lose out on"], drill: { jp: "Mange kommer til å gå glipp av dette", en: "Many are going to miss out on this" }, hint: "å gå glipp av → går, gikk, har gått. Fast uttrykk. ⚠ Alltid om noe GODT du ikke fikk: en mulighet, et tilbud, en konsert. Å overse er noe DU gjør galt; å gå glipp av er noe du taper." },
        { id: "no-u121l3-enblindsone", type: "vocab", front: "en blindsone", reading: "enblindsone", meaning: "a blind spot (a place your method cannot see)", example: { jp: "Undersøkelsen har en blindsone, og de som faller i den er nettopp dem saka handler om.", en: "The study has a blind spot, and those who fall into it are exactly the ones the matter is about." }, accept: ["a blind spot"], drill: { jp: "Undersøkelsen har en blindsone ingen nevner", en: "The study has a blind spot nobody mentions" }, hint: "en blindsone → blindsonen, flertall blindsoner. Blind + en sone. ⚠ Både konkret om bilkjøring og overført om en metode. En blindsone er SYSTEMATISK: den samme typen sak forsvinner hver gang." },
        { id: "no-u121l3-aforbiga", type: "vocab", front: "å forbigå", reading: "aforbiga", meaning: "to pass over (leave somebody out when choosing)", example: { jp: "De forbigår henne igjen, og grunnen er den samme som i sommer.", en: "They pass her over again, and the reason is the same as this summer." }, accept: ["to pass over", "to bypass"], drill: { jp: "Det er lett å forbigå de beste her", en: "It is easy to pass over the best ones here" }, hint: "å forbigå → forbigår, forbigikk, har forbigått. Forbi + å gå. ⚠ Om MENNESKER i en ansettelse eller en fordeling, og det er et arbeidsrettslig ord. Fast vending: «å forbigå i stillhet», som betyr å la være å nevne noe." },
        { id: "no-u121l3-enbagatell", type: "vocab", front: "en bagatell", reading: "enbagatell", meaning: "a trifle (too small to matter)", example: { jp: "De kaller det en bagatell, og den bagatellen er hele grunnen til at saka kom opp.", en: "They call it a trifle, and that trifle is the whole reason the case came up." }, accept: ["a trifle", "a minor matter"], drill: { jp: "De kaller det en bagatell her", en: "They call it a trifle here" }, hint: "en bagatell → bagatellen, flertall bagateller. ⚠ Å kalle noe en bagatell er et GREP i en debatt, ikke en beskrivelse: du ber motparten slutte å snakke om det." },
        { id: "no-u121l3-uvesentlig", type: "vocab", front: "uvesentlig", reading: "uvesentlig", meaning: "immaterial (true, but it changes nothing)", example: { jp: "Feilen er uvesentlig for konklusjonen, og den er likevel den ene alle husker.", en: "The error is immaterial to the conclusion, and it is still the one thing everybody remembers." }, accept: ["insignificant", "beside the point"], drill: { jp: "Feilen er uvesentlig for denne konklusjonen", en: "The error is immaterial to this conclusion" }, hint: "uvesentlig → uvesentlig, uvesentlige. U- + vesentlig (u53). ⚠ Presist og sterkt: du innrømmer at det er sant og sier at det ikke virker inn. Derfor må du kunne si HVA det er uvesentlig FOR." },
      ],
    },
    {
      id: "no-u121l4",
      unit: 121,
      lesson: 4,
      title: "Å holde noe utenfor synsfeltet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Accuse somebody of keeping something out of sight — and grade the accusation, because these four are not equally serious.",
      items: [
        { id: "no-u121l4-autelate", type: "vocab", front: "å utelate", reading: "autelate", meaning: "to omit (leave out of the text)", example: { jp: "De utelater det ene året som ikke passer, og alle de andre står der i samme tabell.", en: "They omit the one year that does not fit, and all the others are there in the same table." }, accept: ["to leave out", "to exclude"], drill: { jp: "Det er lett å utelate et helt år", en: "It is easy to omit a whole year" }, hint: "å utelate → utelater, utelot, har utelatt. Ut + å late. ⚠ NØYTRALT i seg selv: enhver tekst utelater noe. Anklagen ligger i hva som ble utelatt, ikke i ordet." },
        { id: "no-u121l4-askyggefor", type: "vocab", front: "å skygge for", reading: "askyggefor", meaning: "to overshadow (take the attention another thing needed)", example: { jp: "Den ene saka skygger for alt annet i teksten, og den er den minst viktige i den.", en: "That one case overshadows everything else in the text, and it is the least important one in it." }, accept: ["to obscure", "to overshadow"], drill: { jp: "Den ene saka pleier å skygge for resten", en: "That one case tends to overshadow the rest" }, hint: "å skygge for → skygger, skygget, har skygget. En skygge + for. ⚠ Ofte UTEN skyld: en stor sak skygger for en liten uten at noen ville det. Derfor er det den mildeste anklagen i leksjonen." },
        { id: "no-u121l4-atildekke", type: "vocab", front: "å tildekke", reading: "atildekke", meaning: "to cover up (put something over it)", example: { jp: "Notatet tildekker mer enn det forklarer, og det er skrevet av dem som skulle forklare.", en: "The note covers up more than it explains, and it is written by those who were supposed to explain." }, accept: ["to cover over", "to mask"], drill: { jp: "Det går an å tildekke en hel sak", en: "It is possible to cover up a whole case" }, hint: "å tildekke → tildekker, tildekket, har tildekket. Til + å dekke (u46). ⚠ Både konkret og overført. Til forskjell fra å skjule (u57) sier å tildekke at noe er lagt OVER — det ligger der fortsatt." },
        { id: "no-u121l4-adyssened", type: "vocab", front: "å dysse ned", reading: "adyssened", meaning: "to hush up (keep a case from getting out)", example: { jp: "De dysset ned saka i tre år, og den kom ut fordi en av dem sluttet.", en: "They hushed the case up for three years, and it came out because one of them left." }, accept: ["to hush up", "to suppress (a story)"], drill: { jp: "De pleier å dysse ned slike saker", en: "They tend to hush up such cases" }, hint: "å dysse ned → dysser, dysset, har dysset. Fra å dysse (å vugge i søvn). ⚠ Alltid om en SAK som andre ville ha visst om, og alltid en anklage om at det var organisert. Det tyngste ordet her." },
        { id: "no-u121l4-aunderspille", type: "vocab", front: "å underspille", reading: "aunderspille", meaning: "to understate (make your own case sound smaller)", example: { jp: "Hun underspiller sin egen rolle, og det gjør at alle tror på resten av det hun sier.", en: "She understates her own role, and that makes everybody believe the rest of what she says." }, accept: ["to play down", "to downplay"], drill: { jp: "Det lønner seg å underspille sin egen rolle", en: "It pays to understate one's own role" }, hint: "å underspille → underspiller, underspilte, har underspilt. Under + å spille (u19). ⚠ Kan være ROS i Norge: å underspille egen innsats er god folkeskikk. Å bagatellisere (u120) er alltid kritikk." },
        { id: "no-u121l4-aavdekke", type: "vocab", front: "å avdekke", reading: "aavdekke", meaning: "to uncover (bring what was hidden into the open)", example: { jp: "Avisa avdekket hele ordningen, og den hadde stått i et vanlig dokument i seks år.", en: "The paper uncovered the whole arrangement, and it had been in an ordinary document for six years." }, accept: ["to expose", "to reveal"], drill: { jp: "Det tok lang tid å avdekke saka", en: "It took a long time to uncover the case" }, hint: "å avdekke → avdekker, avdekket, har avdekket. Av + å dekke (u46). ⚠ Motstykket til å tildekke, og det er PRESSENS ord: aviser avdekker, tilsyn avdekker. Å oppdage kan hvem som helst gjøre ved et tilfelle." },
      ],
    },
  ],
};
