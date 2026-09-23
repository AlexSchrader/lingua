// NO Unit 115 — Sammenlikning og motsetning (slot: coverage-b2-5) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 5 (B2)" — a slot number, not an instruction.
// Theme chosen here. Conventions: unit1.js §1–§9, unit51.js B1–B9, unit88.js
// C1–C7. All three bind.
//
// WHY THIS THEME. u114 (this block) took CAUSE. The move next to it is the
// COMPARISON — and the corpus only had the connective layer for it: `i
// motsetning til` (u108), `tilsvarende` (u53), `ulik` (u71), `en forskjell`
// (u40), `en parallell` (u96), `en målestokk` (u112). All of those let you
// SIGNAL a comparison; none of them let you say what KIND of comparison you
// are making, which is the B2 job.
//   l1  putting two things side by side
//   l2  saying how far they match
//   l3  saying where they part company
//   l4  the scale they sit on, and the fallacy of flattening it
//
// ⚠ CUT, AND WHY — the probe said free and it was still wrong. `ei motsetning`
// probes free because the taught front is the CONNECTIVE `i motsetning til`
// (u108), which is a different string. It is the same word in the learner's
// head, and a produce card glossed "contrast" against a learner who already
// owns "i motsetning til" teaches nothing. `en motpol` took the slot: it is a
// genuinely different card (a PERSON or POSITION at the other end, not a
// relation between two things). Run the probe, then read the hits — the probe
// compares strings and the learner does not.
//
// Also cut: `et skille` (SAME as `å skille`, u53), `å speile` (transparent from
// `et speil`, u16), `ei sammenlikning` (transparent from `å sammenlikne`, which is itself NOT a taught front — `å sammenlikne` probes free, so the corpus reaches comparison only through `tilsvarende` and `en forskjell`).
//
// GENDER: this unit has NO feminine noun, and that is a decision, not an
// oversight. `en gradsforskjell`, `en vesensforskjell` and `en middelvei` all
// take `en` because A COMPOUND INHERITS THE GENDER OF ITS LAST ELEMENT and `en
// forskjell` (u50) and `en vei` (u20) are masculine. The first draft marked all
// three `ei` from the shape of the first element and was wrong three times.
// Grep the head before you mark the compound. The en-/ei- note therefore lands
// in u116 (`ei vinning`), not here.
//
// DRILLS: every å-verb drill uses an å-frame (unit88.js C5).
//
// SCOPE: the frozen base u1–u114 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT115 = {
  id: "no-u115",
  lang: "no",
  title: "Sammenlikning og motsetning",
  order: 115,
  stage: "b2",
  lessons: [
    {
      id: "no-u115l1",
      unit: 115,
      lesson: 1,
      title: "Å sette to ting ved siden av hverandre",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Put two things side by side on purpose — and make the pairing itself the point you are arguing.",
      items: [
        { id: "no-u115l1-asidestille", type: "vocab", front: "å sidestille", reading: "asidestille", meaning: "to put on a par (treat as equal in rank)", example: { jp: "Han sidestiller de to sakene, og det er nettopp der argumentet hans faller.", en: "He puts the two cases on a par, and that is exactly where his argument falls down." }, accept: ["to equate", "to put side by side"], drill: { jp: "Det er lett å sidestille to ulike saker", en: "It is easy to put two different cases on a par" }, hint: "å sidestille → sidestiller, sidestilte, har sidestilt. Ei side (u33) + å stille. ⚠ Å sidestille er å si at de to er LIKE MYE VERDT. Derfor er det et angrepspunkt: motparten trenger bare vise én forskjell som betyr noe." },
        { id: "no-u115l1-astilleoppmot", type: "vocab", front: "å stille opp mot", reading: "astilleoppmot", meaning: "to set against (contrast deliberately)", example: { jp: "Hun stiller den nye ordningen opp mot den gamle, men de har aldri hatt samme formål.", en: "She sets the new arrangement against the old one, but they have never had the same purpose." }, accept: ["to pit against", "to contrast with"], drill: { jp: "Vi pleier å stille opp mot gamle tall", en: "We tend to set it against old figures" }, hint: "å stille opp mot → stiller, stilte, har stilt. ⚠ Å sidestille sier at de er like; å stille opp mot sier at de er MOTSATTE og at du må velge. Partikkelen opp kan flyttes: stille den opp mot noe." },
        { id: "no-u115l1-etmotstykke", type: "vocab", front: "et motstykke", reading: "etmotstykke", meaning: "a counterpart (the matching thing on the other side)", example: { jp: "Regelen har et motstykke i loven, og de to sier ikke helt det samme.", en: "The rule has a counterpart in the law, and the two do not say quite the same thing." }, accept: ["a counterpart", "an equivalent"], drill: { jp: "Denne regelen har et motstykke i loven", en: "This rule has a counterpart in the law" }, hint: "et motstykke → motstykket, flertall motstykker. Mot (u76) + et stykke (u47). ⚠ Ikke noe motsatt: et motstykke er det TILSVARENDE i det andre systemet, slik en norsk lov har et motstykke i en svensk." },
        { id: "no-u115l1-enmotpol", type: "vocab", front: "en motpol", reading: "enmotpol", meaning: "an opposite pole (person or position at the far end)", example: { jp: "De trenger en motpol i styret, for alle de andre mener allerede det samme.", en: "They need an opposite pole on the board, because all the others already think the same." }, accept: ["an opposite number", "a polar opposite"], drill: { jp: "Styret trenger en motpol som sier imot", en: "The board needs an opposite pole who objects" }, hint: "en motpol → motpolen, flertall motpoler. Mot (u76) + en pol. ⚠ Om MENNESKER og STANDPUNKTER, ikke om ting: du er en motpol til noen. Et motstykke er nøytralt, en motpol er alltid uenig." },
        { id: "no-u115l1-enkontrast", type: "vocab", front: "en kontrast", reading: "enkontrast", meaning: "a contrast (the gap you can see between two things)", example: { jp: "Kontrasten mellom det de skriver og det de gjør er større enn saka i seg selv.", en: "The contrast between what they write and what they do is bigger than the case itself." }, accept: ["a contrast"], drill: { jp: "Her er en kontrast alle kan se", en: "Here is a contrast everybody can see" }, hint: "en kontrast → kontrasten, flertall kontraster. ⚠ Brukes med mellom: kontrasten MELLOM to ting. Den taughte formen i motsetning til (u108) binder sammen to setninger; en kontrast er selve forskjellen, som en ting du kan peke på." },
        { id: "no-u115l1-alikestille", type: "vocab", front: "å likestille", reading: "alikestille", meaning: "to place on equal footing (in rights or rules)", example: { jp: "Loven likestiller de to gruppene, men de har aldri hatt de samme kostnadene.", en: "The law places the two groups on an equal footing, but they have never had the same costs." }, accept: ["to treat as equal", "to give equal status"], drill: { jp: "Det er vanskelig å likestille to ulike grupper", en: "It is hard to place two different groups on an equal footing" }, hint: "å likestille → likestiller, likestilte, har likestilt. Lik + å stille. ⚠ Nesten alltid om RETTIGHETER og REGLER, og ordet likestilling er en hel politisk historie i Norge. Å sidestille er om verdi i et argument." },
      ],
    },
    {
      id: "no-u115l2",
      unit: 115,
      lesson: 2,
      title: "Å si hvor langt likheten rekker",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how far two things actually match — and stop the comparison at the point where it stops holding.",
      items: [
        { id: "no-u115l2-etfellestrekk", type: "vocab", front: "et fellestrekk", reading: "etfellestrekk", meaning: "a shared feature (what both have)", example: { jp: "Fellestrekket er alderen, og den forklarer ingenting av det de fant.", en: "The shared feature is the age, and that explains nothing of what they found." }, accept: ["a common trait", "a shared characteristic"], drill: { jp: "De har et fellestrekk ingen så", en: "They have a shared feature nobody saw" }, hint: "et fellestrekk → fellestrekket, flertall fellestrekk (ubøyd). Felles (u51) + et trekk. ⚠ Et fellestrekk er en OBSERVASJON, ikke et argument: to ting kan dele et trekk uten at det betyr noe." },
        { id: "no-u115l2-asvaretil", type: "vocab", front: "å svare til", reading: "asvaretil", meaning: "to correspond to (line up with, point for point)", example: { jp: "Tallene svarer til det de meldte før, og likevel kaller de det en ny utvikling.", en: "The figures correspond to what they reported before, and still they call it a new development." }, accept: ["to match", "to be equivalent to"], drill: { jp: "Dette pleier å svare til gamle tall", en: "This tends to correspond to old figures" }, hint: "å svare til → svarer, svarte, har svart. Fra å svare (u12). ⚠ Ingenting med å svare på et brev: her betyr det at to størrelser PASSER SAMMEN, som en oversettelse eller en sum." },
        { id: "no-u115l2-asamsvare", type: "vocab", front: "å samsvare", reading: "asamsvare", meaning: "to tally (agree with, of accounts)", example: { jp: "Det hun sier samsvarer med brevet, men brevet kan hun ha skrevet selv.", en: "What she says tallies with the letter, but she may have written the letter herself." }, accept: ["to be consistent with", "to agree with"], drill: { jp: "Slike tall pleier å samsvare med hverandre", en: "Such figures tend to tally with each other" }, hint: "å samsvare → samsvarer, samsvarte, har samsvart. Sam- (sammen) + å svare (u12). ⚠ Brukes med med. Om FORKLARINGER og DOKUMENTER som ikke sier imot hverandre. Å svare til er om størrelser; å samsvare er om innhold." },
        { id: "no-u115l2-sammenliknbar", type: "vocab", front: "sammenliknbar", reading: "sammenliknbar", meaning: "comparable (fair to compare)", example: { jp: "De to landene er ikke sammenliknbare, og alle som bruker tallene vet det godt.", en: "The two countries are not comparable, and everybody who uses the figures knows it well." }, accept: ["comparable"], drill: { jp: "Denne saka er ikke sammenliknbar med den andre", en: "This case is not comparable with the other one" }, hint: "sammenliknbar → sammenliknbart, sammenliknbare. Fra å sammenlikne. ⚠ Kan også skrives sammenlignbar — begge er lov i bokmål, og avisene bruker g-formen oftere. Sier at sammenlikningen er FAGLIG FORSVARLIG, ikke at tingene er like." },
        { id: "no-u115l2-enanalogi", type: "vocab", front: "en analogi", reading: "enanalogi", meaning: "an analogy (an argument by likeness)", example: { jp: "Analogien hans er god helt til du spør hvem som betaler, og da holder den ikke.", en: "His analogy is good right up until you ask who pays, and then it does not hold." }, accept: ["an analogy"], drill: { jp: "Vi hørte en analogi som ikke holder", en: "We heard an analogy that does not hold" }, hint: "en analogi → analogien, flertall analogier. ⚠ En analogi er et ARGUMENT, ikke en beskrivelse: du hevder at fordi to ting likner, gjelder samme regel for begge. Derfor angripes den alltid på ett punkt der de IKKE likner." },
        { id: "no-u115l2-amalesegmed", type: "vocab", front: "å måle seg med", reading: "amalesegmed", meaning: "to measure up to (be in the same league as)", example: { jp: "Ingen av de nye kan måle seg med den gamle ordningen på pris, og det innrømmer de selv.", en: "None of the new ones can measure up to the old arrangement on price, and they admit that themselves." }, accept: ["to compare with", "to be a match for"], drill: { jp: "Ingen klarer å måle seg med dette", en: "Nobody manages to measure up to this" }, hint: "å måle seg med → måler seg, målte seg, har målt seg. Å måle (u34) + seg. ⚠ Alltid med seg, og nesten alltid i nektende form: «kan ikke måle seg med». Om RANG, ikke om likhet." },
      ],
    },
    {
      id: "no-u115l3",
      unit: 115,
      lesson: 3,
      title: "Å si hvor de skiller lag",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what kind of difference you are pointing at — a difference of degree is a weaker objection than a difference in kind.",
      items: [
        { id: "no-u115l3-engradsforskjell", type: "vocab", front: "en gradsforskjell", reading: "engradsforskjell", meaning: "a difference of degree (more or less of the same thing)", example: { jp: "Det er en gradsforskjell og ikke noe mer, så begge sider bruker de samme reglene.", en: "It is a difference of degree and nothing more, so both sides use the same rules." }, accept: ["a difference in degree", "a matter of degree"], drill: { jp: "Her er en gradsforskjell og ikke mer", en: "Here is a difference of degree and nothing more" }, hint: "en gradsforskjell → gradsforskjellen, flertall gradsforskjeller. Hankjønn fordi en forskjell (u50) er det — ei sammensetning arver kjønnet fra siste ledd, ikke fra det første. En grad (u43) + forskjell. ⚠ Den SVAKE innvendingen: mer av det samme." },
        { id: "no-u115l3-envesensforskjell", type: "vocab", front: "en vesensforskjell", reading: "envesensforskjell", meaning: "a difference in kind (not the same thing at all)", example: { jp: "Det er en vesensforskjell mellom de to, og derfor kan ikke samme regel gjelde for begge.", en: "There is a difference in kind between the two, and that is why the same rule cannot apply to both." }, accept: ["a fundamental difference", "a difference in kind"], drill: { jp: "Vi ser en vesensforskjell her", en: "We see a difference in kind here" }, hint: "en vesensforskjell → vesensforskjellen, flertall vesensforskjeller. Hankjønn av samme grunn som gradsforskjell. Et vesen (u113) + forskjell. ⚠ Den STERKE innvendingen, og den du må bevise: du sier at de to ikke er samme slags ting i det hele tatt." },
        { id: "no-u115l3-aavvike", type: "vocab", front: "å avvike", reading: "aavvike", meaning: "to deviate (depart from what was expected)", example: { jp: "Tallene avviker fra alt de har målt før, og ingen har sjekket om måleren virker.", en: "The figures deviate from everything they have measured before, and nobody has checked whether the meter works." }, accept: ["to depart from", "to differ from"], drill: { jp: "Slike tall pleier å avvike fra hverandre", en: "Such figures tend to deviate from each other" }, hint: "å avvike → avviker, avvek, har avveket. Av + å vike. ⚠ Brukes med fra, og forutsetter alltid en NORM å avvike fra. To tall kan være ulike uten at noe avviker." },
        { id: "no-u115l3-uforenlig", type: "vocab", front: "uforenlig", reading: "uforenlig", meaning: "irreconcilable (cannot both be true or both be done)", example: { jp: "De to kravene er uforenlige, og styret later som om de ikke har sett det.", en: "The two demands are irreconcilable, and the board is pretending it has not seen that." }, accept: ["incompatible", "mutually exclusive"], drill: { jp: "Dette kravet er uforenlig med det andre", en: "This demand is irreconcilable with the other one" }, hint: "uforenlig → uforenlig, uforenlige. -ig-ord får ikke -t i intetkjønn. U- + å forene + lig. ⚠ Brukes med med. Sterkere enn ulik (u71): du sier at du ikke kan ha begge, ikke bare at de er forskjellige." },
        { id: "no-u115l3-astatilbakefor", type: "vocab", front: "å stå tilbake for", reading: "astatilbakefor", meaning: "to be inferior to (come second in a comparison)", example: { jp: "Den nye planen står tilbake for den gamle på alt som koster penger, og det sier de ingenting om.", en: "The new plan is inferior to the old one in everything that costs money, and they say nothing about that." }, accept: ["to be second to", "to fall short of"], drill: { jp: "Den pleier å stå tilbake for andre", en: "It tends to be inferior to others" }, hint: "å stå tilbake for → står, sto, har stått. ⚠ Ofte i nektende form som ros: «den står ikke tilbake for noen» = den er like god som de beste. Å måle seg med er om å NÅ OPP; å stå tilbake for er om å ligge under." },
        { id: "no-u115l3-autmerkeseg", type: "vocab", front: "å utmerke seg", reading: "autmerkeseg", meaning: "to stand out (be notably better)", example: { jp: "Hun utmerker seg på et område ingen andre i huset kan noe om, og derfor blir hun aldri spurt.", en: "She stands out in an area nobody else in the building knows anything about, and that is why she is never asked." }, accept: ["to distinguish oneself", "to excel"], drill: { jp: "Det er vanskelig å utmerke seg her", en: "It is hard to stand out here" }, hint: "å utmerke seg → utmerker seg, utmerket seg, har utmerket seg. Ut + å merke. ⚠ Alltid med seg, og alltid POSITIVT. Å skille seg ut (u120, denne blokka) er nøytralt og kan være negativt." },
      ],
    },
    {
      id: "no-u115l4",
      unit: 115,
      lesson: 4,
      title: "Skalaen og de som flater den ut",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Place a case on the scale between two extremes — and call out an opponent who has flattened the scale to make a point.",
      items: [
        { id: "no-u115l4-etytterpunkt", type: "vocab", front: "et ytterpunkt", reading: "etytterpunkt", meaning: "an extreme end (one end of a scale)", example: { jp: "Begge sider bruker bare ytterpunktene, og alt det vanlige blir borte.", en: "Both sides use only the extreme ends, and everything ordinary disappears." }, accept: ["an extreme", "a far end"], drill: { jp: "De bruker bare et ytterpunkt hver", en: "They use only one extreme end each" }, hint: "et ytterpunkt → ytterpunktet, flertall ytterpunkter. Ytre + et punkt. ⚠ Et ytterpunkt er en PLASS på skalaen, ikke en mening: du kan navngi et ytterpunkt uten å mene det." },
        { id: "no-u115l4-enmiddelvei", type: "vocab", front: "en middelvei", reading: "enmiddelvei", meaning: "a middle way (the compromise position)", example: { jp: "De fant en middelvei ingen av dem ville ha, og den står der ennå fordi ingen orker mer.", en: "They found a middle way neither of them wanted, and it is still there because nobody can face any more." }, accept: ["a middle ground", "a happy medium"], drill: { jp: "De fant en middelvei ingen ville ha", en: "They found a middle way nobody wanted" }, hint: "en middelvei → middelveien, flertall middelveier. Hankjønn fordi en vei (u20) er det. Middel + vei. ⚠ Ofte litt nedsettende i norsk: en middelvei er det du får når ingen vant. Et kompromiss (u68) er nøytralt." },
        { id: "no-u115l4-ekstrem", type: "vocab", front: "ekstrem", reading: "ekstrem", meaning: "extreme (far out on the scale)", example: { jp: "Kravet er ekstremt bare hvis du ser på det uten resten, og det vil ingen av dem.", en: "The demand is extreme only if you look at it without the rest, and neither of them will." }, accept: ["extreme"], drill: { jp: "Denne planen er ekstrem for alle her", en: "This plan is extreme for everybody here" }, hint: "ekstrem → ekstremt, ekstreme. ⚠ Adverbet ekstremt betyr bare «veldig» i tale: ekstremt godt vær. Som adjektiv om en mening er det et sterkt angrep — velg det med vilje." },
        { id: "no-u115l4-ensartet", type: "vocab", front: "ensartet", reading: "ensartet", meaning: "uniform (all of one kind)", example: { jp: "Gruppa er ikke så ensartet som tallene viser, og derfor sier gjennomsnittet lite.", en: "The group is not as uniform as the figures show, and that is why the average says little." }, accept: ["homogeneous", "of one kind"], drill: { jp: "Gruppa er ikke så ensartet her", en: "The group is not so uniform here" }, hint: "ensartet → ensartet, ensartede. Ens (lik) + en art. ⚠ Nesten alltid i nektende form når det gjelder mennesker, fordi påstanden om at ei gruppe er ensartet er den du må forsvare." },
        { id: "no-u115l4-aveieopp", type: "vocab", front: "å veie opp", reading: "aveieopp", meaning: "to offset (balance a drawback)", example: { jp: "Prisen veier opp for det meste, men den veier ikke opp for at ingen kan bruke det.", en: "The price offsets most of it, but it does not offset the fact that nobody can use it." }, accept: ["to make up for", "to compensate for"], drill: { jp: "Prisen pleier å veie opp for det meste", en: "The price tends to offset most of it" }, hint: "å veie opp → veier, veide, har veid. Å veie (u97) + opp, brukes med for. ⚠ Du veier opp FOR en ulempe. Å motvirke (u114) fjerner virkningen; å veie opp lar den stå og legger noe godt ved siden av." },
        { id: "no-u115l4-askjaereoverenkam", type: "vocab", front: "å skjære over en kam", reading: "askjaereoverenkam", meaning: "to tar with the same brush (flatten a scale)", example: { jp: "Han skjærer hele gruppa over en kam, og da forsvinner nettopp de tilfellene saka handler om.", en: "He tars the whole group with the same brush, and then exactly the cases the matter is about disappear." }, accept: ["to lump together", "to treat as all alike"], drill: { jp: "Det er lett å skjære over en kam", en: "It is easy to tar with the same brush" }, hint: "å skjære over en kam → skjærer, skar, har skåret. Merk æ-folden: lesinga er askjaereoverenkam. Fast uttrykk fra klipping av ull. ⚠ Alltid en ANKLAGE. Du sier at motparten har gjort ei gruppe ensartet som ikke er det." },
      ],
    },
  ],
};
