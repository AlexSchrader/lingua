// NO Unit 118 — Vilkår, rammer og begrensninger (slot: coverage-b2-8) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 8 (B2)" — a slot number, not an instruction.
// Theme chosen here. Conventions: unit1.js §1–§9, unit51.js B1–B9, unit88.js
// C1–C7.
//
// WHY THIS THEME. u92 took LAW and u110 the INSTITUTIONAL voice, so the corpus
// can already say that a rule exists (`et vilkår` u58, `en regel`, `et krav`,
// `å tillate` u72, `å utelukke` u58, `å avgrense` u111). What it cannot do is
// argue about the SHAPE of the constraint — how much room is left inside it,
// what has to hold for it to apply, and what is jamming the flow. That is the
// B2 move, and it is the one a learner needs to read a budget debate.
//   l1  what has to be in place first
//   l2  how much room you have left
//   l3  what is standing in the way
//   l4  narrowing somebody else's room
//
// ⚠ GENDER, AND THE -ELSE RULE (unit88.js C1). -het and -else are ALWAYS
// masculine: `en betingelse`, `en handlefrihet`. -ing and -ning are ALWAYS
// feminine: `ei forutsetning`, `ei hindring`, `ei sperring`, `ei begrensning`,
// `ei føring`, `ei avgrensning`. A COMPOUND otherwise inherits from its LAST
// element: `en hemsko` because `en sko` is masculine, `et spillerom` /
// `et handlingsrom` / `et frirom` because `et rom` is neuter. `ei tvangstrøye`
// is the one call not settled by a taught head — `ei trøye` is not in the
// corpus, and feminine is the ordinary Bokmål marking for it.
// FIRST FEMININE is `ei forutsetning` (l1) and carries the en-/ei- note.
//
// ⚠ A NEAR-SYNONYM CLUSTER IS THE LESSON, NOT A DEFECT (unit88.js C2c). l2 runs
// four words for "room to act" — `et spillerom`, `et handlingsrom`, `en
// handlefrihet`, `et frirom`. Each hint says what separates it from its
// neighbours; if you cannot tell them apart from the hints, the lesson has
// failed and should be cut back, not shipped.
//
// SCOPE: the frozen base u1–u117 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT118 = {
  id: "no-u118",
  lang: "no",
  title: "Vilkår, rammer og begrensninger",
  order: 118,
  stage: "b2",
  lessons: [
    {
      id: "no-u118l1",
      unit: 118,
      lesson: 1,
      title: "Hva som må være på plass først",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "State what has to hold before a claim or a plan applies at all — and attack a plan by attacking that.",
      items: [
        { id: "no-u118l1-eiforutsetning", type: "vocab", front: "ei forutsetning", reading: "eiforutsetning", meaning: "a premise (what must hold for the rest to work)", example: { jp: "Hele planen hviler på ei forutsetning ingen har sjekket, og den står bare i en fotnote.", en: "The whole plan rests on a premise nobody has checked, and it appears only in a footnote." }, accept: ["a precondition", "an assumption"], drill: { jp: "Planen hviler på ei forutsetning ingen sjekker", en: "The plan rests on a premise nobody checks" }, hint: "ei forutsetning → forutsetninga. Hunkjønnsord kan du også skrive en forutsetning / forutsetningen, og den formen er den vanlige i saksdokumenter — merk begge. -ning er hunkjønn. Forut + å sette. ⚠ Det svakeste punktet i et hvert argument, fordi det sjelden blir sagt høyt." },
        { id: "no-u118l1-enbetingelse", type: "vocab", front: "en betingelse", reading: "enbetingelse", meaning: "a condition (a term that must be met)", example: { jp: "De sa ja på én betingelse, og den betingelsen gjør hele avtalen umulig for oss.", en: "They said yes on one condition, and that condition makes the whole agreement impossible for us." }, accept: ["a condition", "a stipulation"], drill: { jp: "Avtalen har en betingelse vi ikke liker", en: "The agreement has a condition we do not like" }, hint: "en betingelse → betingelsen, flertall betingelser. ⚠ -else er ALLTID hankjønn. Et vilkår (u58) er det samme i lovspråk; en betingelse er ordet i avtaler og i tale." },
        { id: "no-u118l1-aavhengeav", type: "vocab", front: "å avhenge av", reading: "aavhengeav", meaning: "to hinge on (be decided by)", example: { jp: "Svaret avhenger av hvem du spør, og det er nettopp derfor tallet ikke betyr noe.", en: "The answer hinges on whom you ask, and that is exactly why the figure means nothing." }, accept: ["to depend on", "to turn on"], drill: { jp: "Alt pleier å avhenge av hvem som spør", en: "Everything tends to hinge on who asks" }, hint: "å avhenge av → avhenger, avhang, har avhengt. Av + å henge. ⚠ Alltid med av. Å komme an på er det muntlige ordet; å avhenge av hører hjemme i skrift og i et argument." },
        { id: "no-u118l1-ubetinget", type: "vocab", front: "ubetinget", reading: "ubetinget", meaning: "unconditional (with no strings at all)", example: { jp: "Avtalen er ubetinget i brevet, og likevel kommer det et nytt krav hvert år.", en: "The agreement is unconditional in the letter, and still a new demand comes every year." }, accept: ["unqualified", "absolute"], drill: { jp: "Avtalen er ubetinget i dette brevet", en: "The agreement is unconditional in this letter" }, hint: "ubetinget → ubetinget, ubetingede. U- + å betinge. ⚠ Også adverb og da betyr det «helt klart»: «det er ubetinget det beste». I jussen: ubetinget fengsel, altså uten prøvetid." },
        { id: "no-u118l1-ufravikelig", type: "vocab", front: "ufravikelig", reading: "ufravikelig", meaning: "absolute (a rule nobody may set aside)", example: { jp: "Regelen er ufravikelig for de små, og de store har fått tre unntak i år.", en: "The rule is absolute for the small ones, and the big ones have had three exceptions this year." }, accept: ["mandatory", "not to be departed from"], drill: { jp: "Regelen er ufravikelig for alle her", en: "The rule is absolute for everybody here" }, hint: "ufravikelig → ufravikelig, ufravikelige. -ig-ord får ikke -t i intetkjønn. U- + å fravike (u120, denne blokka). ⚠ Et lovord: «ufravikelige rettigheter» er de du ikke kan avtale deg bort fra, selv om du vil." },
        { id: "no-u118l1-amuliggjore", type: "vocab", front: "å muliggjøre", reading: "amuliggjore", meaning: "to make possible (remove what blocked it)", example: { jp: "Avtalen muliggjør arbeidet, men den betaler ikke for noen av dem som skal gjøre det.", en: "The agreement makes the work possible, but it pays for none of those who are to do it." }, accept: ["to enable", "to permit (of a thing)"], drill: { jp: "Avtalen ser ut til å muliggjøre mye", en: "The agreement seems to make a lot possible" }, hint: "å muliggjøre → muliggjør, muliggjorde, har muliggjort. Merk ø-folden: lesinga er amuliggjore. Mulig (u40) + å gjøre. ⚠ Subjektet er alltid en TING, aldri en person: en avtale, en teknologi, en regel muliggjør noe." },
      ],
    },
    {
      id: "no-u118l2",
      unit: 118,
      lesson: 2,
      title: "Hvor stort rommet ditt er",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how much freedom of action is left inside the rules — and pick the word that says who the freedom belongs to.",
      items: [
        { id: "no-u118l2-etspillerom", type: "vocab", front: "et spillerom", reading: "etspillerom", meaning: "leeway (slack inside a rule)", example: { jp: "Regelen gir et spillerom ingen bruker, fordi alle er redde for å gjøre feil.", en: "The rule gives leeway nobody uses, because everybody is afraid of making a mistake." }, accept: ["leeway", "latitude"], drill: { jp: "Her er et spillerom ingen bruker", en: "Here is leeway nobody uses" }, hint: "et spillerom → spillerommet. Intetkjønn fordi et rom (u4) er det. Et spill + rom. ⚠ Om SLAKKEN i en regel: hvor mye du kan bøye den uten å bryte den. Fast vending: «fritt spillerom»." },
        { id: "no-u118l2-ethandlingsrom", type: "vocab", front: "et handlingsrom", reading: "ethandlingsrom", meaning: "room for manoeuvre (what an actor can actually do)", example: { jp: "Kommunen har et handlingsrom på papiret, og hele budsjettet er brukt opp fra før.", en: "The council has room for manoeuvre on paper, and the whole budget is used up already." }, accept: ["room to act", "scope for action"], drill: { jp: "Kommunen har et handlingsrom bare på papiret", en: "The council has room for manoeuvre only on paper" }, hint: "et handlingsrom → handlingsrommet. Ei handling + rom. ⚠ Om en AKTØR, ikke om en regel: en kommune, en leder, en stat har et handlingsrom. Et spillerom ligger i regelen selv." },
        { id: "no-u118l2-enhandlefrihet", type: "vocab", front: "en handlefrihet", reading: "enhandlefrihet", meaning: "freedom of action (the right to choose for oneself)", example: { jp: "De ga fra seg handlefriheten i den ene setningen, og resten av avtalen betyr lite.", en: "They gave away their freedom of action in that one sentence, and the rest of the agreement means little." }, accept: ["freedom to act", "discretion"], drill: { jp: "De ga fra seg en handlefrihet de trengte", en: "They gave away a freedom of action they needed" }, hint: "en handlefrihet → handlefriheten. ⚠ -het er ALLTID hankjønn. Å handle + frihet. Et handlingsrom er hvor stort rommet ER; en handlefrihet er RETTEN til å velge inne i det." },
        { id: "no-u118l2-etfrirom", type: "vocab", front: "et frirom", reading: "etfrirom", meaning: "a free space (a place the rules do not reach)", example: { jp: "Møtet skulle være et frirom, og så ble alt som ble sagt der kjent dagen etter.", en: "The meeting was meant to be a free space, and then everything said there was known the next day." }, accept: ["a safe space", "a space free of rules"], drill: { jp: "Møtet skulle være et frirom for alle", en: "The meeting was meant to be a free space for everybody" }, hint: "et frirom → frirommet, flertall frirom (ubøyd). Fri + rom. ⚠ Om et STED eller et MØTE der noe annet gjelder. De tre andre orda i denne leksjonen er om mengde; dette er om et sted." },
        { id: "no-u118l2-eiavgrensning", type: "vocab", front: "ei avgrensning", reading: "eiavgrensning", meaning: "a delimitation (the line you draw round a subject)", example: { jp: "Avgrensninga er gjort før tallene kom inn, og det er derfor svaret ser så rent ut.", en: "The delimitation was made before the figures came in, and that is why the answer looks so clean." }, accept: ["a scoping", "a boundary drawn"], drill: { jp: "Vi gjorde ei avgrensning før tallene kom", en: "We made a delimitation before the figures came" }, hint: "ei avgrensning → avgrensninga. -ning er hunkjønn. Fra å avgrense (u111). ⚠ Om et EMNE eller et SAKSOMRÅDE, ikke om et gjerde: du avgrenser en undersøkelse. Ei dårlig avgrensning er den vanligste feilen i en rapport." },
        { id: "no-u118l2-asettetakpa", type: "vocab", front: "å sette tak på", reading: "asettetakpa", meaning: "to cap (put a ceiling on an amount)", example: { jp: "De satte tak på prisen, og så flyttet alle kostnadene seg til en annen plass.", en: "They capped the price, and then all the costs moved to a different place." }, accept: ["to put a ceiling on", "to cap"], drill: { jp: "De pleier å sette tak på alt", en: "They tend to cap everything" }, hint: "å sette tak på → setter, satte, har satt. Å sette (u77) + et tak (u30). ⚠ Et tak er ØVRE grense; en nedre grense heter et gulv, akkurat som i engelsk. Brukes med på." },
      ],
    },
    {
      id: "no-u118l3",
      unit: 118,
      lesson: 3,
      title: "Det som står i veien",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the obstacle precisely — a bottleneck, a brake and a barrier call for three different answers.",
      items: [
        { id: "no-u118l3-eihindring", type: "vocab", front: "ei hindring", reading: "eihindring", meaning: "an obstacle (something in the way)", example: { jp: "Den største hindringa er ikke penger, men at ingen av dem snakker med hverandre.", en: "The biggest obstacle is not money, but that neither of them talks to the other." }, accept: ["a barrier", "an impediment"], drill: { jp: "Her er ei hindring ingen snakker om", en: "Here is an obstacle nobody talks about" }, hint: "ei hindring → hindringa. -ing er hunkjønn. Fra å hindre. ⚠ Det ALMINNELIGE ordet: noe som gjør det vanskelig, ikke umulig. Brukes også konkret om sport." },
        { id: "no-u118l3-enflaskehals", type: "vocab", front: "en flaskehals", reading: "enflaskehals", meaning: "a bottleneck (the one narrow point that holds up everything)", example: { jp: "Flaskehalsen er den ene personen som skal skrive under, og hun er syk denne uka.", en: "The bottleneck is the one person who has to sign, and she is ill this week." }, accept: ["a bottleneck", "a choke point"], drill: { jp: "Her er en flaskehals ingen ser", en: "Here is a bottleneck nobody sees" }, hint: "en flaskehals → flaskehalsen, flertall flaskehalser. Ei flaske (u47) + hals. ⚠ Alltid ETT sted, og det er hele poenget: du finner flaskehalsen for å slippe å gjøre alt annet raskere." },
        { id: "no-u118l3-enhemsko", type: "vocab", front: "en hemsko", reading: "enhemsko", meaning: "a drag on things (a lasting hindrance)", example: { jp: "Systemet er en hemsko for hele avdelingen, og likevel skal det vare i tre år til.", en: "The system is a drag on the whole department, and still it is to last three more years." }, accept: ["a millstone", "a hindrance"], drill: { jp: "Systemet er en hemsko for hele huset", en: "The system is a drag on the whole building" }, hint: "en hemsko → hemskoen. Hankjønn fordi en sko (u15) er det. Å hemme + sko; opphavet er bremseskoen på et vognhjul. ⚠ Alltid noe som har VART lenge og alltid negativt." },
        { id: "no-u118l3-eisperring", type: "vocab", front: "ei sperring", reading: "eisperring", meaning: "a block (something put there on purpose)", example: { jp: "Det ligger ei sperring i systemet, og den ble lagt inn av noen som ikke jobber her lenge.", en: "There is a block in the system, and it was put in by somebody who does not work here long." }, accept: ["a barrier put in place", "a lock"], drill: { jp: "Det ligger ei sperring i dette systemet", en: "There is a block in this system" }, hint: "ei sperring → sperringa. -ing er hunkjønn. Fra å sperre (u84). ⚠ Forskjellen fra ei hindring er VILJE: noen har lagt ei sperring der med vilje. Også konkret om en vei." },
        { id: "no-u118l3-aforhindre", type: "vocab", front: "å forhindre", reading: "aforhindre", meaning: "to prevent (stop something from happening at all)", example: { jp: "Regelen skal forhindre den store feilen, og den lager ti små hver uke.", en: "The rule is meant to prevent the big error, and it makes ten small ones every week." }, accept: ["to prevent", "to avert"], drill: { jp: "Regelen skal prøve å forhindre store feil", en: "The rule is meant to try to prevent big errors" }, hint: "å forhindre → forhindrer, forhindret, har forhindret. For + å hindre. ⚠ Sterkere enn å hindre: å forhindre betyr at det IKKE SKJER. Fast vending: «med mindre noe forhindrer det»." },
        { id: "no-u118l3-abremse", type: "vocab", front: "å bremse", reading: "abremse", meaning: "to slow down (without stopping)", example: { jp: "De bremser prosessen med nye krav, og ingen av dem sier at de er imot den.", en: "They are slowing the process with new demands, and none of them says they are against it." }, accept: ["to slow", "to put the brakes on"], drill: { jp: "De pleier å bremse hele prosessen slik", en: "They tend to slow the whole process that way" }, hint: "å bremse → bremser, bremset, har bremset. Fra en brems. ⚠ Den POLITISKE måten å stoppe noe på uten å stemme imot: du bremser ved å be om mer utredning. Å forhindre er å stoppe helt." },
      ],
    },
    {
      id: "no-u118l4",
      unit: 118,
      lesson: 4,
      title: "Å snevre inn andres rom",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that somebody's room to act is being narrowed — and say how openly it is being done.",
      items: [
        { id: "no-u118l4-eibegrensning", type: "vocab", front: "ei begrensning", reading: "eibegrensning", meaning: "a limitation (a limit on what is allowed or possible)", example: { jp: "Begrensninga står til slutt i brevet, og alt det gode står først.", en: "The limitation is at the end of the letter, and all the good things are at the start." }, accept: ["a restriction", "a limit"], drill: { jp: "Her er ei begrensning ingen leser", en: "Here is a limitation nobody reads" }, hint: "ei begrensning → begrensninga. -ning er hunkjønn. Fra å begrense (u52). ⚠ Også om et MENNESKE og da er det nesten alltid høflig kritikk: «han har sine begrensninger»." },
        { id: "no-u118l4-ainnskrenke", type: "vocab", front: "å innskrenke", reading: "ainnskrenke", meaning: "to curtail (cut back what somebody may do)", example: { jp: "De innskrenker retten til å klage, og de kaller det et bedre skjema.", en: "They are curtailing the right to complain, and they call it a better form." }, accept: ["to restrict", "to cut back"], drill: { jp: "De prøver å innskrenke retten til å klage", en: "They are trying to curtail the right to complain" }, hint: "å innskrenke → innskrenker, innskrenket, har innskrenket. Inn + å skrenke. ⚠ Alltid om RETTIGHETER og FRIHET, og alltid et angrepsord: ingen sier at de innskrenker noe selv." },
        { id: "no-u118l4-eiforing", type: "vocab", front: "ei føring", reading: "eiforing", meaning: "a steer (a signal from above about how to decide)", example: { jp: "Det kom ei føring fra staten, og den står ikke i noe dokument noen kan vise til.", en: "A steer came from the state, and it is in no document anybody can point to." }, accept: ["a directive (informal)", "guidance from above"], drill: { jp: "Det kom ei føring fra staten i går", en: "A steer came from the state yesterday" }, hint: "ei føring → føringa. -ing er hunkjønn. Merk ø-folden: lesinga er eiforing. Fra å føre (u83). ⚠ Det norske forvaltningsordet for en instruks som IKKE er et vedtak. «Å legge føringer» er å styre uten å skrive det ned." },
        { id: "no-u118l4-eitvangstroye", type: "vocab", front: "ei tvangstrøye", reading: "eitvangstroye", meaning: "a straitjacket (a rule that leaves no room at all)", example: { jp: "Budsjettet er ei tvangstrøye, og de som laget det sier at det gir stor frihet.", en: "The budget is a straitjacket, and those who made it say it gives great freedom." }, accept: ["a straitjacket"], drill: { jp: "Budsjettet er ei tvangstrøye for alle", en: "The budget is a straitjacket for everybody" }, hint: "ei tvangstrøye → tvangstrøya, og en tvangstrøye / tvangstrøyen er like lov. Merk ø-folden: lesinga er eitvangstroye. En tvang + trøye. ⚠ Alltid overført i debatt; det konkrete plagget nevnes nesten aldri." },
        { id: "no-u118l4-adiktere", type: "vocab", front: "å diktere", reading: "adiktere", meaning: "to dictate (set the terms alone)", example: { jp: "Den ene siden dikterer vilkårene, og de kaller det likevel en avtale.", en: "One side dictates the terms, and they still call it an agreement." }, accept: ["to lay down", "to impose"], drill: { jp: "Det går ikke an å diktere slike vilkår", en: "It is not possible to dictate such terms" }, hint: "å diktere → dikterer, dikterte, har diktert. ⚠ To betydninger: å bestemme alene, og å lese høyt for at noen skal skrive det ned. Den første er den du møter i en debatt." },
        { id: "no-u118l4-aholdeigjen", type: "vocab", front: "å holde igjen", reading: "aholdeigjen", meaning: "to hold back (keep something you could have released)", example: { jp: "De holder igjen den delen som gjelder dem selv, og resten kom ut med en gang.", en: "They are holding back the part that concerns themselves, and the rest came out at once." }, accept: ["to withhold", "to keep back"], drill: { jp: "De pleier å holde igjen den beste delen", en: "They tend to hold back the best part" }, hint: "å holde igjen → holder, holdt, har holdt. Å holde (u59) + igjen. ⚠ Om PENGER, OPPLYSNINGER og om deg selv: «hun holdt igjen i møtet» betyr at hun lot være å si det hun mente." },
      ],
    },
  ],
};
