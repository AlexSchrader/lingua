// NO Unit 120 — Det typiske og det som bryter med det (slot: coverage-b2-10) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 10 (B2)" — a slot number, not an instruction.
// Theme chosen here. Conventions: unit1.js §1–§9, unit51.js B1–B9, unit88.js
// C1–C7.
//
// WHY THIS THEME. u112 took QUANTITY AND TREND (how many, which way) and u115
// (this block) took COMPARISON. Neither covers the move that decides most real
// arguments: is this case the RULE or the EXCEPTION? The corpus has `vanlig`
// (u40), `sjelden` (u12), `et unntak` (u61), `en regel` (u32), `et mønster`
// (u42) — enough to state the question and not enough to argue it.
//   l1  what the ordinary case is
//   l2  the rule behind the ordinary case
//   l3  the case that does not fit
//   l4  using the exception as an argument, honestly and dishonestly
//
// ⚠ CUT — `et avvik`. The probe reports LEXEME against `å avvike` (u115l3, this
// block), and unlike most LEXEME hits this one FAILS the semantic test: a
// learner who has just been taught «tallene avviker fra» produces «et avvik»
// without being taught it, and the two would sit five units apart in the same
// band. The lexeme rule means INFLECTION, so LEXEME is advisory — but advisory
// means READ THE HIT, not ignore it. `en raritet` took the slot.
// Also cut: `atypisk` (a transparent negation of `typisk` in l1 of this same
// unit), `et normaltilfelle` and `et unntakstilfelle` (a third and fourth
// -tilfelle compound in one lesson teaches the suffix, not the words).
//
// ⚠ GENDER. `en tommelfingerregel` and `en hovedregel` are masculine because
// `en regel` (u32) is; `en sedvane` because `en vane` (u17) is. `ei rettesnor`
// is the one head not in the corpus — `snor` is ordinary feminine in Bokmål.
// -else stays masculine: `en overdrivelse`.
// FIRST FEMININE is `ei rettesnor` (l2) and carries the en-/ei- note.
//
// DRILLS: å-verb drills use an å-frame; adjective drills take a COMMON-GENDER
// SINGULAR subject so the front appears verbatim.
//
// SCOPE: the frozen base u1–u119 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT120 = {
  id: "no-u120",
  lang: "no",
  title: "Det typiske og det som bryter med det",
  order: 120,
  stage: "b2",
  lessons: [
    {
      id: "no-u120l1",
      unit: 120,
      lesson: 1,
      title: "Hva det vanlige tilfellet er",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that a case is the ordinary one — and pick the word that says how you know.",
      items: [
        { id: "no-u120l1-typisk", type: "vocab", front: "typisk", reading: "typisk", meaning: "typical (it fits the pattern)", example: { jp: "Saka er typisk for hele området, og likevel er den den ene de har sett på.", en: "The case is typical of the whole area, and still it is the one they have looked at." }, accept: ["characteristic", "representative"], drill: { jp: "Dette er typisk for hele landet", en: "This is typical of the whole country" }, hint: "typisk → typisk, typiske. -isk-ord får ikke -t i intetkjønn. ⚠ Brukes med for. «Typisk norsk» og «typisk henne» er faste vendinger, og den siste er alltid litt spydig." },
        { id: "no-u120l1-gjengs", type: "vocab", front: "gjengs", reading: "gjengs", meaning: "prevailing (what people generally hold or do)", example: { jp: "Den gjengse oppfatninga er den samme som for mange år siden, og ingen har målt den siden.", en: "The prevailing view is the same as many years ago, and nobody has measured it since." }, accept: ["commonly held", "current (usual)"], drill: { jp: "Dette er en gjengs oppfatning her", en: "This is a prevailing view here" }, hint: "gjengs → gjengs, gjengse. Fra å gå: det som «går» blant folk. ⚠ Nesten bare foran et substantiv: gjengs oppfatning, gjengs pris, gjengs praksis. Litt skriftlig, og aldri om en enkelt person." },
        { id: "no-u120l1-utbredt", type: "vocab", front: "utbredt", reading: "utbredt", meaning: "widespread (found in many places)", example: { jp: "Vanen er utbredt i hele landet, og ingen av dem som gjør det vet at den er ulovlig.", en: "The habit is widespread across the country, and none of those doing it know it is illegal." }, accept: ["common (in many places)", "prevalent"], drill: { jp: "Vanen er utbredt over hele landet", en: "The habit is widespread over the whole country" }, hint: "utbredt → utbredt, utbredte. Ut + å bre. ⚠ Om SPREDNING i rommet, ikke om hvor riktig noe er: «en utbredt misforståelse» er utbredt nettopp fordi den er gal." },
        { id: "no-u120l1-gjennomgaende", type: "vocab", front: "gjennomgående", reading: "gjennomgaende", meaning: "consistent (the same all the way through a set)", example: { jp: "Tallene er gjennomgående bedre i sør, og ingen av dem som skrev teksten nevner det.", en: "The figures are consistently better in the south, and none of those who wrote the text mention it." }, accept: ["throughout", "consistently"], drill: { jp: "Tallet er gjennomgående bedre i sør", en: "The figure is consistently better in the south" }, hint: "gjennomgående, bøyes ikke — -ende-former er like i alle kjønn. Merk å-folden: lesinga er gjennomgaende. Gjennom + å gå. ⚠ Oftest adverb: «gjennomgående bedre». Det sier at mønsteret holder i HELE materialet, ikke bare i snittet." },
        { id: "no-u120l1-normal", type: "vocab", front: "normal", reading: "normal", meaning: "matching the set expectation", example: { jp: "Tallet er normalt for tida, men det er ikke normalt for et sted som ligger så høyt.", en: "The figure is normal for the time of year, but it is not normal for a place that lies so high." }, accept: ["normal", "within the norm", "standard"], drill: { jp: "Tallet er normal for denne tida", en: "The figure is normal for this time" }, hint: "normal → normalt, normale. ⚠ Forskjellen fra vanlig (u40) er en NORM: normal måler mot en fastsatt forventning, vanlig teller bare hvor ofte noe skjer. Derfor krever normal at du sier hva normen er." },
        { id: "no-u120l1-iallhovedsak", type: "vocab", front: "i all hovedsak", reading: "iallhovedsak", meaning: "in the main (with small exceptions I am not disputing)", example: { jp: "Vi er i all hovedsak enige, og det som står igjen er det som koster penger.", en: "We agree in the main, and what is left is what costs money." }, accept: ["mainly", "for the most part"], drill: { jp: "Vi er i all hovedsak enige her", en: "We agree in the main here" }, hint: "i all hovedsak er et fast uttrykk og bøyes ikke. Ei hovedsak + all. ⚠ En forhandlingsvending: du gir motparten alt det store for å holde igjen det ene punktet som betyr noe. I hovedsak (u91) er den kortere formen." },
      ],
    },
    {
      id: "no-u120l2",
      unit: 120,
      lesson: 2,
      title: "Regelen bak det vanlige",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Point at the rule the ordinary case follows — and say how binding that rule actually is.",
      items: [
        { id: "no-u120l2-eirettesnor", type: "vocab", front: "ei rettesnor", reading: "eirettesnor", meaning: "a guiding principle (what you steer by)", example: { jp: "Loven er ei rettesnor og ikke et svar, og det er nettopp derfor de er uenige om den.", en: "The law is a guiding principle and not an answer, and that is exactly why they disagree about it." }, accept: ["a guideline", "a yardstick to steer by"], drill: { jp: "Loven er ei rettesnor og ikke mer", en: "The law is a guiding principle and nothing more" }, hint: "ei rettesnor → rettesnora. Hunkjønnsord kan du også skrive en rettesnor / rettesnoren, og begge er vanlige i skrift — merk begge. Å rette + ei snor; opphavet er snora en snekker slår for å få en rett strek. ⚠ Noe du STYRER etter, ikke noe du må lyde." },
        { id: "no-u120l2-entommelfingerregel", type: "vocab", front: "en tommelfingerregel", reading: "entommelfingerregel", meaning: "a rule of thumb (right often enough to use)", example: { jp: "Som en tommelfingerregel stemmer det, og de tilfellene der det ikke stemmer er nettopp de dyre.", en: "As a rule of thumb it holds, and the cases where it does not hold are exactly the expensive ones." }, accept: ["a rule of thumb"], drill: { jp: "Vi bruker en tommelfingerregel som ofte stemmer", en: "We use a rule of thumb that often holds" }, hint: "en tommelfingerregel → tommelfingerregelen, flertall tommelfingerregler. Hankjønn fordi en regel (u32) er det. En tommelfinger + regel. ⚠ Sier selv at den har unntak — derfor kan den ikke brukes til å avvise et enkelttilfelle." },
        { id: "no-u120l2-enhovedregel", type: "vocab", front: "en hovedregel", reading: "enhovedregel", meaning: "the general rule (with named exceptions below it)", example: { jp: "Hovedregelen er klar, og de tre unntakene under den dekker halvparten av alle saker.", en: "The general rule is clear, and the three exceptions under it cover half of all cases." }, accept: ["the main rule", "the default rule"], drill: { jp: "Vi har en hovedregel med tre unntak", en: "We have a general rule with three exceptions" }, hint: "en hovedregel → hovedregelen, flertall hovedregler. Et hode + regel. ⚠ Et LOVORD: i norsk lovspråk kommer hovedregelen først og unntakene rett etter, og strid om en sak er nesten alltid strid om hvilken av dem som gjelder." },
        { id: "no-u120l2-ensedvane", type: "vocab", front: "en sedvane", reading: "ensedvane", meaning: "established custom (binding because it has always been done)", example: { jp: "Det står ikke i avtalen, men det er en sedvane, og en sedvane er vanskeligere å forandre enn en regel.", en: "It is not in the agreement, but it is an established custom, and a custom is harder to change than a rule." }, accept: ["a custom", "customary practice"], drill: { jp: "Det er en sedvane ingen har skrevet ned", en: "It is an established custom nobody has written down" }, hint: "en sedvane → sedvanen, flertall sedvaner. Hankjønn fordi en vane (u17) er det. Sed + vane. ⚠ Et juridisk ord: sedvanerett er rett som gjelder fordi den har vært praktisert lenge, uten at noen har vedtatt den." },
        { id: "no-u120l2-enstandard", type: "vocab", front: "en standard", reading: "enstandard", meaning: "a standard (an agreed level or format)", example: { jp: "De viser til en standard ingen av dem har lest, og den koster penger å få tak i.", en: "They point to a standard neither of them has read, and it costs money to get hold of." }, accept: ["a standard", "a norm (technical)"], drill: { jp: "De viser til en standard ingen har lest", en: "They point to a standard nobody has read" }, hint: "en standard → standarden, flertall standarder. ⚠ To bruk: det tekniske dokumentet, og nivået — «standarden på arbeidet». Som adjektiv bøyes det ikke: en standard løsning." },
        { id: "no-u120l2-regelrett", type: "vocab", front: "regelrett", reading: "regelrett", meaning: "downright (plainly so, no hedging)", example: { jp: "Det er regelrett galt, og de som skrev det visste det da de skrev det.", en: "It is downright wrong, and those who wrote it knew it when they wrote it." }, accept: ["outright", "flatly"], drill: { jp: "Det er regelrett galt for alle", en: "It is downright wrong for everybody" }, hint: "regelrett er nesten alltid adverb: regelrett galt, regelrett farlig. ⚠ EN FELLE: det ser ut som «etter reglene» og betyr det motsatte av forsiktig — det er et forsterkende ord, som engelsk downright." },
      ],
    },
    {
      id: "no-u120l3",
      unit: 120,
      lesson: 3,
      title: "Tilfellet som ikke passer inn",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that a case does not fit the pattern — and say whether that is interesting or merely odd.",
      items: [
        { id: "no-u120l3-askillesegut", type: "vocab", front: "å skille seg ut", reading: "askillesegut", meaning: "to stand apart (be different from the rest)", example: { jp: "Den ene kommunen skiller seg ut på alle tall, og ingen har spurt hvorfor.", en: "That one council stands apart on every figure, and nobody has asked why." }, accept: ["to be different", "to stand out from"], drill: { jp: "Det er vanskelig å skille seg ut her", en: "It is hard to stand apart here" }, hint: "å skille seg ut → skiller seg, skilte seg, har skilt seg. Å skille (u53) + seg + ut. ⚠ NØYTRALT: å skille seg ut kan være godt eller dårlig. Å utmerke seg (u115) er alltid godt." },
        { id: "no-u120l3-astikkesegut", type: "vocab", front: "å stikke seg ut", reading: "astikkesegut", meaning: "to make oneself conspicuous (be noticed for it)", example: { jp: "Han stikker seg ut med hensikt, og i et norsk møte koster det mer enn det gir.", en: "He makes himself conspicuous on purpose, and in a Norwegian meeting that costs more than it gives." }, accept: ["to draw attention to oneself", "to be conspicuous"], drill: { jp: "Det lønner seg ikke å stikke seg ut", en: "It does not pay to make oneself conspicuous" }, hint: "å stikke seg ut → stikker seg, stakk seg, har stukket seg. ⚠ Om at ANDRE legger merke til deg, og i norsk kultur nesten alltid negativt — jantelovens kjerneord. Å skille seg ut kan gjelde et tall; å stikke seg ut gjelder et menneske." },
        { id: "no-u120l3-etsaerpreg", type: "vocab", front: "et særpreg", reading: "etsaerpreg", meaning: "a distinctive character (what makes it itself)", example: { jp: "Stedet har et særpreg de bruker i all reklame, og de river det som skapte det.", en: "The place has a distinctive character they use in all their advertising, and they are tearing down what created it." }, accept: ["a distinctive feature", "individuality"], drill: { jp: "Stedet har et særpreg alle kjenner", en: "The place has a distinctive character everybody knows" }, hint: "et særpreg → særpreget, flertall særpreg (ubøyd). Merk æ-folden: lesinga er etsaerpreg. Sær + et preg. ⚠ Alltid POSITIVT om steder og verk. Om et menneske sier du heller et vesen (u113)." },
        { id: "no-u120l3-etsaertilfelle", type: "vocab", front: "et særtilfelle", reading: "etsaertilfelle", meaning: "a special case (the rule was not written for this)", example: { jp: "De kaller det et særtilfelle, og da slipper de å forandre regelen for alle de andre.", en: "They call it a special case, and then they avoid changing the rule for everybody else." }, accept: ["a special case", "an exceptional case"], drill: { jp: "De kaller det et særtilfelle her", en: "They call it a special case here" }, hint: "et særtilfelle → særtilfellet, flertall særtilfeller. Sær + et tilfelle (u50). ⚠ Et FORSVAR for regelen: du innrømmer at den ikke passet her og beholder den overalt ellers." },
        { id: "no-u120l3-abrytemed", type: "vocab", front: "å bryte med", reading: "abrytemed", meaning: "to break with (deliberately leave a tradition)", example: { jp: "Vedtaket bryter med alt de har gjort før, og ingen i teksten sier at det gjør det.", en: "The decision breaks with everything they have done before, and nothing in the text says that it does." }, accept: ["to depart from", "to break away from"], drill: { jp: "Det er lett å bryte med gamle regler", en: "It is easy to break with old rules" }, hint: "å bryte med → bryter, brøt, har brutt. Å bryte (u61) + med. ⚠ Alltid et VALG: du bryter med en tradisjon, et parti, en familie. Å avvike (u115) kan skje av seg selv." },
        { id: "no-u120l3-enraritet", type: "vocab", front: "en raritet", reading: "enraritet", meaning: "an oddity (rare and of no consequence)", example: { jp: "Tilfellet er en raritet, og derfor forteller det oss ingenting om alle de andre.", en: "The case is an oddity, and that is why it tells us nothing about all the others." }, accept: ["a curiosity", "a rarity"], drill: { jp: "Tilfellet er en raritet og ikke mer", en: "The case is an oddity and nothing more" }, hint: "en raritet → rariteten, flertall rariteter. Fra rar. ⚠ Å kalle noe en raritet er å AVFEIE det: du sier at det er sjeldent OG at det ikke betyr noe. Et særtilfelle betyr noe, det passer bare ikke i regelen." },
      ],
    },
    {
      id: "no-u120l4",
      unit: 120,
      lesson: 4,
      title: "Når unntaket blir brukt som argument",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Call out somebody who is arguing from a single case — or concede one without giving up the rule.",
      items: [
        { id: "no-u120l4-unntaksvis", type: "vocab", front: "unntaksvis", reading: "unntaksvis", meaning: "in exceptional cases (rarely, and only then)", example: { jp: "Ordningen gjelder unntaksvis, og i år ble den brukt i halvparten av alle saker.", en: "The arrangement applies in exceptional cases, and this year it was used in half of all cases." }, accept: ["exceptionally", "by way of exception"], drill: { jp: "Ordningen gjelder unntaksvis for alle her", en: "The arrangement applies in exceptional cases for everybody here" }, hint: "unntaksvis er adverb og bøyes ikke. Et unntak (u61) + -vis. ⚠ Et FORVALTNINGSORD, og det brukes til å gjøre et unntak mindre synlig enn det er. Tell hvor ofte «unntaksvis» faktisk skjer." },
        { id: "no-u120l4-afravike", type: "vocab", front: "å fravike", reading: "afravike", meaning: "to depart from (set a rule aside in a case)", example: { jp: "De kan fravike regelen når det er gode grunner, og gode grunner står ikke noe sted.", en: "They may depart from the rule when there are good reasons, and good reasons are written down nowhere." }, accept: ["to set aside", "to waive"], drill: { jp: "Det går an å fravike en slik regel", en: "It is possible to depart from a rule like that" }, hint: "å fravike → fraviker, fravek, har fraveket. Fra + å vike. ⚠ Et vedtak, ikke en hendelse: NOEN fraviker regelen, med hjemmel. Å avvike (u115) er noe tallene gjør av seg selv." },
        { id: "no-u120l4-agenerelisere", type: "vocab", front: "å generalisere", reading: "agenerelisere", meaning: "to generalise (draw a rule from too few cases)", example: { jp: "Du generaliserer fra tre saker, og alle tre kom fra den samme avdelingen.", en: "You are generalising from three cases, and all three came from the same department." }, accept: ["to make a generalisation"], drill: { jp: "Det er lett å generalisere fra tre saker", en: "It is easy to generalise from three cases" }, hint: "å generalisere → generaliserer, generaliserte, har generalisert. ⚠ Nesten alltid en ANKLAGE i norsk debatt, selv om ordet i seg selv er nøytralt i fag. Å skjære over en kam (u115) er det bildet folk bruker i tale." },
        { id: "no-u120l4-aforvrenge", type: "vocab", front: "å forvrenge", reading: "aforvrenge", meaning: "to distort (repeat somebody's point in a worse shape)", example: { jp: "Han forvrenger det hun sa, og hun får ikke svare fordi programmet er slutt.", en: "He distorts what she said, and she does not get to answer because the programme is over." }, accept: ["to twist", "to misrepresent"], drill: { jp: "Det er lett å forvrenge det andre sier", en: "It is easy to distort what others say" }, hint: "å forvrenge → forvrenger, forvrengte, har forvrengt. For + å vrenge (å snu vrangen ut). ⚠ Om ORD og BILDER: du forvrenger et sitat, et ansikt, en lyd. Å underslå (u119) er å utelate; å forvrenge er å endre." },
        { id: "no-u120l4-abagatellisere", type: "vocab", front: "å bagatellisere", reading: "abagatellisere", meaning: "to play down (make something serious sound small)", example: { jp: "De bagatelliserer tallet i avisa, og i notatet til styret står det som et stort problem.", en: "They play the figure down in the paper, and in the note to the board it appears as a big problem." }, accept: ["to trivialise", "to make light of"], drill: { jp: "De pleier å bagatellisere slike tall", en: "They tend to play down such figures" }, hint: "å bagatellisere → bagatelliserer, bagatelliserte, har bagatellisert. Fra en bagatell. ⚠ Alltid en anklage om UÆRLIGHET, ikke om vurdering: du sier at de vet bedre. Å tone ned (u91) kan være ærlig." },
        { id: "no-u120l4-enoverdrivelse", type: "vocab", front: "en overdrivelse", reading: "enoverdrivelse", meaning: "an exaggeration (more than the case will carry)", example: { jp: "Det er en overdrivelse, men det er ikke galt, og forskjellen er hele saka her.", en: "It is an exaggeration, but it is not wrong, and the difference is the whole matter here." }, accept: ["an overstatement"], drill: { jp: "Det er en overdrivelse og ikke mer", en: "It is an exaggeration and nothing more" }, hint: "en overdrivelse → overdrivelsen, flertall overdrivelser. ⚠ -else er ALLTID hankjønn. Fra å overdrive (u51). Fast vending med understatement, som nordmenn bruker mye: «det er ingen overdrivelse å si at…»." },
      ],
    },
  ],
};
