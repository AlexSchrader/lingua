// NO Unit 117 — Endring og omstilling (slot: coverage-b2-7) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 7 (B2)" — a slot number, not an instruction.
// Theme chosen here. Conventions: unit1.js §1–§9, unit51.js B1–B9, unit88.js
// C1–C7.
//
// WHY THIS THEME. The corpus can say THAT something changed — `ei endring`
// (u24), `ei utvikling` (u43), `å utvikle seg`, `å forandre` — and it can say
// that something turned, because u63 took `et vendepunkt` and `en milepæl`.
// What it cannot do is say HOW FAST, IN WHICH DIRECTION and FOR HOW LONG, which
// is the whole of a B2 argument about a trend.
//   l1  when something changes course
//   l2  the speed and the direction of the change
//   l3  what is being wound up and what is breaking through
//   l4  what lasts, and what turns out not to have
//
// ⚠ COMPOUND GENDER — the trap that cost u114–u116 seven wrong fronts in their
// first drafts. A COMPOUND INHERITS THE GENDER OF ITS LAST ELEMENT, not the
// shape of its first. `ei kursendring` is feminine because `ei endring` (u24)
// is; `et omskifte` is neuter because `et skifte` is; `et tilbakeslag` is neuter
// because every -slag in this corpus is (`et forslag`, `et omslag`, `et
// utslag`). Grep the head with
//   grep -rho 'front: "\(en\|ei\|et\) [a-zæøå]*<head>"' src/data/no/
// before you mark anything.
//
// LEXEME RULE (corrected on main 2026-09-23): lexeme means INFLECTION; a
// DERIVED word is a different lexeme. `ei kursendring` is therefore not blocked
// by `ei endring` — it is a compound, which is new learning on both halves.
//
// FIRST FEMININE is `ei kursendring` (l1) and carries the en-/ei- note.
//
// DRILLS: å-verb drills use an å-frame (unit88.js C5); adjective drills take a
// COMMON-GENDER SINGULAR subject so the front appears verbatim.
//
// SCOPE: the frozen base u1–u116 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT117 = {
  id: "no-u117",
  lang: "no",
  title: "Endring og omstilling",
  order: 117,
  stage: "b2",
  lessons: [
    {
      id: "no-u117l1",
      unit: 117,
      lesson: 1,
      title: "Når noe legger om kursen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that something has changed course — and say how deep the change goes.",
      items: [
        { id: "no-u117l1-eikursendring", type: "vocab", front: "ei kursendring", reading: "eikursendring", meaning: "a change of course (a new direction of policy)", example: { jp: "De kaller det ei kursendring, men alle de gamle reglene står igjen i dokumentet.", en: "They call it a change of course, but all the old rules are still there in the document." }, accept: ["a change of direction", "a policy shift"], drill: { jp: "De kaller det ei kursendring her", en: "They call it a change of course here" }, hint: "ei kursendring → kursendringa. Hunkjønnsord kan du også skrive en kursendring / kursendringen, og avisene gjør det ofte — merk begge, for du møter begge i skrift. En kurs + ei endring (u50); sammensetninga arver kjønnet fra siste ledd." },
        { id: "no-u117l1-aomstille", type: "vocab", front: "å omstille", reading: "aomstille", meaning: "to restructure (turn an organisation to a new task)", example: { jp: "De må omstille hele avdelingen, og ingen har sagt hvem som skal gjøre arbeidet i år.", en: "They have to restructure the whole department, and nobody has said who is to do the work this year." }, accept: ["to convert", "to adapt (an organisation)"], drill: { jp: "Det er dyrt å omstille en hel avdeling", en: "It is expensive to restructure a whole department" }, hint: "å omstille → omstiller, omstilte, har omstilt. Om + å stille. ⚠ Nesten alltid om ARBEIDSLIV og INDUSTRI i norsk, og ordet omstilling er et av de mest brukte i norsk politikk. Om mennesker: å omstille seg." },
        { id: "no-u117l1-aomforme", type: "vocab", front: "å omforme", reading: "aomforme", meaning: "to reshape (give a new form to)", example: { jp: "Forslaget er omformet så mange ganger at ingen vet hva det opprinnelig skulle gjøre.", en: "The proposal has been reshaped so many times that nobody knows what it was originally meant to do." }, accept: ["to transform", "to recast"], drill: { jp: "Det er lett å omforme et gammelt forslag", en: "It is easy to reshape an old proposal" }, hint: "å omforme → omformer, omformet, har omformet. Om + å forme. ⚠ Om FORMEN, ikke om innholdet: du omformer en tekst, en setning, en plan. Å omstille er om hva noe GJØR." },
        { id: "no-u117l1-areversere", type: "vocab", front: "å reversere", reading: "areversere", meaning: "to reverse (undo a decision already made)", example: { jp: "Styret kan reversere vedtaket, men da må noen si høyt at det var galt.", en: "The board can reverse the decision, but then somebody has to say out loud that it was wrong." }, accept: ["to overturn", "to undo"], drill: { jp: "Det er vanskelig å reversere et slikt vedtak", en: "It is hard to reverse a decision like that" }, hint: "å reversere → reverserer, reverserte, har reversert. ⚠ Om VEDTAK og PROSESSER, ikke om biler — å rygge er ordet for det. Du kan bare reversere noe som alt er gjort." },
        { id: "no-u117l1-gjennomgripende", type: "vocab", front: "gjennomgripende", reading: "gjennomgripende", meaning: "far-reaching (changes everything it touches)", example: { jp: "Endringa er gjennomgripende på papiret, og på gulvet merker ingen noe som helst.", en: "The change is far-reaching on paper, and on the floor nobody notices a thing." }, accept: ["sweeping", "thoroughgoing"], drill: { jp: "Endringa er gjennomgripende og helt ny", en: "The change is far-reaching and completely new" }, hint: "gjennomgripende, bøyes ikke — -ende-former er like i alle kjønn. Gjennom + å gripe. ⚠ Det sterkeste ordet i denne leksjonen: det sier at INGEN del står igjen som før. Derfor må du kunne vise det." },
        { id: "no-u117l1-etomskifte", type: "vocab", front: "et omskifte", reading: "etomskifte", meaning: "an upheaval (a sudden turn in conditions)", example: { jp: "Det kom et omskifte ingen hadde regnet med, og hele planen måtte skrives om.", en: "There came an upheaval nobody had reckoned with, and the whole plan had to be rewritten." }, accept: ["a turn of events", "a shift"], drill: { jp: "Det kom et omskifte ingen ventet", en: "There came an upheaval nobody expected" }, hint: "et omskifte → omskiftet, flertall omskifter. Intetkjønn fordi et skifte er det. Om + å skifte. ⚠ Litterært og litt gammeldags; i tale sier folk «en snuoperasjon» eller bare «alt snudde»." },
      ],
    },
    {
      id: "no-u117l2",
      unit: 117,
      lesson: 2,
      title: "Fart og retning på endringa",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how fast something is moving and which way — the direction of a trend is usually the whole disagreement.",
      items: [
        { id: "no-u117l2-gradvis", type: "vocab", front: "gradvis", reading: "gradvis", meaning: "gradual (step by step)", example: { jp: "Endringa er gradvis, og nettopp derfor har ingen tenkt på å stoppe den.", en: "The change is gradual, and that is exactly why nobody has thought of stopping it." }, accept: ["gradually", "step by step"], drill: { jp: "Endringa er gradvis og helt ventet", en: "The change is gradual and completely expected" }, hint: "gradvis er både adjektiv og adverb: ei gradvis endring, og «det gikk gradvis bedre». En grad (u43) + -vis. ⚠ Det er ofte et FORSVAR: en gradvis endring er den ingen rakk å si nei til." },
        { id: "no-u117l2-atilta", type: "vocab", front: "å tilta", reading: "atilta", meaning: "to increase (grow stronger over time)", example: { jp: "Uenigheten tiltar hver gang de møtes, og likevel setter de opp et nytt møte.", en: "The disagreement increases every time they meet, and still they set up another meeting." }, accept: ["to grow", "to intensify"], drill: { jp: "Slikt pleier å tilta med tida", en: "That sort of thing tends to increase over time" }, hint: "å tilta → tiltar, tiltok, har tiltatt. Til + å ta. ⚠ Skriftlig; i tale sier folk «øker». Motstykket er å avta (u59). Om vind, uenighet, press — ikke om tall i et regneark." },
        { id: "no-u117l2-aeskalere", type: "vocab", front: "å eskalere", reading: "aeskalere", meaning: "to escalate (get worse in steps)", example: { jp: "Saka eskalerer fordi begge sider svarer på det nye innlegget og ingen leser det første.", en: "The case escalates because both sides answer the new post and nobody reads the first one." }, accept: ["to escalate"], drill: { jp: "Slike saker pleier å eskalere fort", en: "Such cases tend to escalate quickly" }, hint: "å eskalere → eskalerer, eskalerte, har eskalert. ⚠ Alltid til det verre og alltid i TRINN: hvert trinn er et svar på det forrige. Å tilta er jevn vekst uten trinn." },
        { id: "no-u117l2-atrappeopp", type: "vocab", front: "å trappe opp", reading: "atrappeopp", meaning: "to step up (increase on purpose)", example: { jp: "De trapper opp kravene i hvert møte, og det er en plan, ikke et uhell.", en: "They step up the demands at every meeting, and that is a plan, not an accident." }, accept: ["to scale up", "to ramp up"], drill: { jp: "De pleier å trappe opp kravene her", en: "They tend to step up the demands here" }, hint: "å trappe opp → trapper, trappet, har trappet. Ei trapp + opp. ⚠ Forskjellen fra å eskalere er HVEM: du trapper opp selv, med vilje; noe eskalerer av seg selv." },
        { id: "no-u117l2-atrappened", type: "vocab", front: "å trappe ned", reading: "atrappened", meaning: "to wind down (reduce in planned steps)", example: { jp: "Ordningen skal trappes ned over tre år, men budsjettet tar hele kuttet i det første.", en: "The arrangement is to be wound down over three years, but the budget takes the whole cut in the first one." }, accept: ["to scale down", "to phase down"], drill: { jp: "De prøver å trappe ned hele ordningen", en: "They are trying to wind down the whole arrangement" }, hint: "å trappe ned → trapper, trappet, har trappet. ⚠ Det VANLIGE ordet i norsk arbeidsliv og helsevesen: du trapper ned en medisin, en stilling, en ordning. Å avvikle er å ta den helt bort." },
        { id: "no-u117l2-astagnere", type: "vocab", front: "å stagnere", reading: "astagnere", meaning: "to stagnate (stop moving without falling)", example: { jp: "Tallene stagnerer, og det er verre enn et fall fordi ingen får det til å se ut som en krise.", en: "The figures stagnate, and that is worse than a fall because nobody can make it look like a crisis." }, accept: ["to level off", "to stall"], drill: { jp: "Slike tall pleier å stagnere etter hvert", en: "Such figures tend to stagnate eventually" }, hint: "å stagnere → stagnerer, stagnerte, har stagnert. ⚠ Alltid negativt, selv om ingenting blir verre: det ligger i ordet at noe BURDE ha beveget seg. Uforandret (l4) er nøytralt." },
      ],
    },
    {
      id: "no-u117l3",
      unit: 117,
      lesson: 3,
      title: "Det som blir lagt ned og det som slår gjennom",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that something is being ended or is taking hold — and pick the verb that says who decided it.",
      items: [
        { id: "no-u117l3-aavvikle", type: "vocab", front: "å avvikle", reading: "aavvikle", meaning: "to wind up (end an arrangement in an orderly way)", example: { jp: "Ordningen blir avviklet i år, og de som lever av den fikk vite det i et brev.", en: "The arrangement is being wound up this year, and those who live off it were told in a letter." }, accept: ["to discontinue", "to wind up"], drill: { jp: "De prøver å avvikle hele ordningen nå", en: "They are trying to wind up the whole arrangement now" }, hint: "å avvikle → avvikler, avviklet, har avviklet. Av + å vikle. ⚠ To betydninger og begge er vanlige: å AVSLUTTE noe for godt, og å GJENNOMFØRE noe etter planen — «møtet ble avviklet uten problemer»." },
        { id: "no-u117l3-afaseut", type: "vocab", front: "å fase ut", reading: "afaseut", meaning: "to phase out (end in stages, on a timetable)", example: { jp: "De faser ut den gamle ordningen, og de som står i den nå får ingen ny.", en: "They are phasing out the old arrangement, and those in it now get no new one." }, accept: ["to phase out"], drill: { jp: "De pleier å fase ut slike ordninger", en: "They tend to phase out such arrangements" }, hint: "å fase ut → faser, faset, har faset. En fase + ut. ⚠ Å trappe ned gjør noe mindre; å fase ut ender med at det er borte. Alltid etter en PLAN med datoer." },
        { id: "no-u117l3-aleggened", type: "vocab", front: "å legge ned", reading: "aleggened", meaning: "to close down (shut a place or body for good)", example: { jp: "De legger ned kontoret i år, og arbeidet skal gjøres av folk som bor tre timer fra byen.", en: "They are closing down the office this year, and the work is to be done by people who live three hours from the town." }, accept: ["to shut down", "to abolish"], drill: { jp: "De kommer til å legge ned hele kontoret", en: "They are going to close down the whole office" }, hint: "å legge ned → legger, la, har lagt. ⚠ Om STEDER og ORGANER: et kontor, en skole, et sykehus. Ordet er politisk sprengstoff i Norge. Også: å legge ned arbeidet = å streike." },
        { id: "no-u117l3-aslagjennom", type: "vocab", front: "å slå gjennom", reading: "aslagjennom", meaning: "to break through (win general acceptance)", example: { jp: "Ordet slo gjennom på et par år, og nå skriver alle det uten å tenke på hvor det kom fra.", en: "The word broke through in a couple of years, and now everybody writes it without thinking where it came from." }, accept: ["to catch on", "to make a breakthrough"], drill: { jp: "Slike ord pleier å slå gjennom fort", en: "Such words tend to break through quickly" }, hint: "å slå gjennom → slår, slo, har slått. ⚠ Om IDEER, ORD og MENNESKER som blir alminnelig godtatt: en artist slår gjennom. Ikke om ting som bare blir vanlige av seg selv." },
        { id: "no-u117l3-ainnarbeide", type: "vocab", front: "å innarbeide", reading: "ainnarbeide", meaning: "to work into (make part of a routine or text)", example: { jp: "Regelen er innarbeidet i avtalen, og derfor trenger ingen å huske den.", en: "The rule is worked into the agreement, and that is why nobody needs to remember it." }, accept: ["to incorporate", "to embed"], drill: { jp: "Det er lurt å innarbeide regelen i avtalen", en: "It is wise to work the rule into the agreement" }, hint: "å innarbeide → innarbeider, innarbeidet, har innarbeidet. Inn + å arbeide. ⚠ Også om VANER: «en innarbeidet praksis» er noe som skjer fordi det alltid har skjedd. Brukes med i." },
        { id: "no-u117l3-ataav", type: "vocab", front: "å ta av", reading: "ataav", meaning: "to take off (grow fast, suddenly)", example: { jp: "Ordet tok av etter den ene artikkelen, og ingen i huset kan forklare hvorfor.", en: "The word took off after that one article, and nobody in the building can explain why." }, accept: ["to soar", "to take off"], drill: { jp: "Slikt pleier å ta av etter hvert", en: "That sort of thing tends to take off eventually" }, hint: "å ta av → tar av, tok av, har tatt av. ⚠ Tre betydninger i norsk og konteksten avgjør: et fly tar av, salget tar av, og «å ta av seg jakka». Her: rask og uventet vekst." },
      ],
    },
    {
      id: "no-u117l4",
      unit: 117,
      lesson: 4,
      title: "Hva som varer og hva som ikke gjør det",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Argue about whether a change will last — and concede a setback without conceding the direction.",
      items: [
        { id: "no-u117l4-varig", type: "vocab", front: "varig", reading: "varig", meaning: "lasting (permanent)", example: { jp: "Endringa er varig, sier de, og det er noe ingen kan vite etter bare to år.", en: "The change is lasting, they say, and that is something nobody can know after only two years." }, accept: ["permanent", "durable"], drill: { jp: "Endringa er varig og helt ny", en: "The change is lasting and completely new" }, hint: "varig → varig, varige. -ig-ord får ikke -t i intetkjønn. Fra å vare (u28). ⚠ Juridisk tungt i sammensetninger: «varig men» og «varig opphold» er faste uttrykk med presist innhold." },
        { id: "no-u117l4-forbigaende", type: "vocab", front: "forbigående", reading: "forbigaende", meaning: "temporary (it will pass on its own)", example: { jp: "Problemet er forbigående, og nettopp derfor gjør ingen noe med det.", en: "The problem is temporary, and that is exactly why nobody does anything about it." }, accept: ["passing", "transient"], drill: { jp: "Problemet er forbigående og ganske lite", en: "The problem is temporary and rather small" }, hint: "forbigående, bøyes ikke — -ende-former er like i alle kjønn. Merk å-folden: lesinga er forbigaende. Forbi + å gå. ⚠ Den vanligste bortforklaringen i norsk offentlighet: «en forbigående svikt»." },
        { id: "no-u117l4-uforandret", type: "vocab", front: "uforandret", reading: "uforandret", meaning: "unchanged (exactly as before)", example: { jp: "Tallet står uforandret, men alt som lager tallet er nytt siden i vinter.", en: "The figure stands unchanged, but everything that makes the figure is new since the winter." }, accept: ["unaltered", "the same as before"], drill: { jp: "Tallet står uforandret fra i år", en: "The figure stands unchanged from this year" }, hint: "uforandret → uforandret, uforandrede. U- + å forandre. ⚠ Nøytralt, til forskjell fra å stagnere (l2), som alltid er en kritikk. Fast vending: «uforandret i forhold til i fjor»." },
        { id: "no-u117l4-ettilbakeslag", type: "vocab", front: "et tilbakeslag", reading: "ettilbakeslag", meaning: "a setback (a step backwards in an otherwise good run)", example: { jp: "Det er et tilbakeslag og ikke en slutt, men de som betaler for det ser ikke forskjellen.", en: "It is a setback and not an end, but those who pay for it do not see the difference." }, accept: ["a reversal", "a knock-back"], drill: { jp: "Dette er et tilbakeslag og ikke mer", en: "This is a setback and nothing more" }, hint: "et tilbakeslag → tilbakeslaget, flertall tilbakeslag (ubøyd). Intetkjønn fordi hvert -slag i dette kurset er det. Tilbake + slag. ⚠ Ordet innrømmer noe OG forsvarer noe: du gir motparten det siste året og beholder retningen." },
        { id: "no-u117l4-askjerpe", type: "vocab", front: "å skjerpe", reading: "askjerpe", meaning: "to tighten (make a rule stricter)", example: { jp: "De skjerper kravene hvert år, og likevel er det de samme som ikke klarer dem.", en: "They tighten the requirements every year, and still it is the same people who cannot meet them." }, accept: ["to sharpen", "to make stricter"], drill: { jp: "De pleier å skjerpe kravene hvert år", en: "They tend to tighten the requirements every year" }, hint: "å skjerpe → skjerper, skjerpet, har skjerpet. Fra skarp. ⚠ Om KRAV, REGLER og STRAFF. «Skjerp deg» er en hard tilsnakk i norsk — ikke bruk den til en kollega." },
        { id: "no-u117l4-alempepa", type: "vocab", front: "å lempe på", reading: "alempepa", meaning: "to relax (a rule, a little)", example: { jp: "De lemper på regelen for de store, og de små hører om det i avisa.", en: "They relax the rule for the big ones, and the small ones hear about it in the paper." }, accept: ["to ease", "to loosen"], drill: { jp: "De pleier å lempe på slike regler", en: "They tend to relax such rules" }, hint: "å lempe på → lemper, lempet, har lempet. ⚠ Motstykket til å skjerpe, og alltid DELVIS: du lemper på et krav, du fjerner det ikke. Uten på betyr å lempe å kaste noe tungt." },
      ],
    },
  ],
};
