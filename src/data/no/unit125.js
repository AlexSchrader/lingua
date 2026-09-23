// NO Unit 125 — Å sette i gang og komme i mål (slot: coverage-b2-15) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 15 (B2)" — a slot number, not an instruction.
// Theme chosen here. Conventions: unit1.js §1–§9, unit51.js B1–B9, unit88.js
// C1–C7.
//
// WHY THIS THEME. u100 took WORKING LIFE and u117 (this block) took CHANGE over
// time. Neither takes the arc of a single piece of work: who started it, who
// kept it alive when it was dull, how it was closed, and what it is called when
// somebody quietly stops. The corpus had `å begynne`, `å fullføre` (u60),
// `å gjennomføre` (u24), `å utsette` (u23), `å nøle` (u54) — the five verbs, and
// none of the vocabulary you need to ARGUE about whose job the middle was.
//   l1  taking the first step
//   l2  keeping it going
//   l3  closing it
//   l4  stopping, stalling, and holding off
//
// ⚠ CUT:
//   • `å ta initiativ` — the same lexeme as `et initiativ` in l1 of this unit.
//   • `ei oppfølging` — transparent from `å følge opp`, which is in l2 here.
//   • `utholdende` — `en utholdenhet` is taught at u113l4; block 2 cut the
//     adjective for exactly this reason and the reason still holds.
//   • `ei nølen` → `en nølen`. Verbal nouns in -en are masculine in Bokmål.
//
// GENDER: -ing FEMININE (`ei gjennomføring`), compounds from their LAST
// element — `en framdrift` because `en drift` is masculine, `et initiativ`
// neuter.
// FIRST FEMININE is `ei gjennomføring` (l3) and carries the en-/ei- note.
//
// DRILLS: å-verb drills use an å-frame; adjective drills take a COMMON-GENDER
// SINGULAR subject so the front appears verbatim. The multiword verbs here
// (`å komme i mål`, `å ro i havn`, `å gå i stå`, `å sette punktum`) must appear
// UNBROKEN in the drill — no object may be inserted inside them.
//
// SCOPE: the frozen base u1–u124 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT125 = {
  id: "no-u125",
  lang: "no",
  title: "Å sette i gang og komme i mål",
  order: 125,
  stage: "b2",
  lessons: [
    {
      id: "no-u125l1",
      unit: 125,
      lesson: 1,
      title: "Å ta det første steget",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say who got something started — and claim the credit or place the responsibility for it.",
      items: [
        { id: "no-u125l1-etinitiativ", type: "vocab", front: "et initiativ", reading: "etinitiativ", meaning: "an initiative (somebody's move to start something)", example: { jp: "Initiativet kom fra én person, og i teksten står det at avdelingen sto bak det.", en: "The initiative came from one person, and the text says the department was behind it." }, accept: ["an initiative"], drill: { jp: "Her kom et initiativ ingen ventet", en: "Here came an initiative nobody expected" }, hint: "et initiativ → initiativet, flertall initiativer. ⚠ Fast vending: «å ta initiativ til noe», uten artikkel. Ordet peker alltid på HVEM som startet — derfor er det verdt å krangle om." },
        { id: "no-u125l1-atafatt", type: "vocab", front: "å ta fatt", reading: "atafatt", meaning: "to get stuck in (start work in earnest)", example: { jp: "De tar fatt på det vanskelige til slutt, og da er det meste av tida gått.", en: "They get stuck into the hard part last, and by then most of the time is gone." }, accept: ["to set about", "to get down to it"], drill: { jp: "Det er på tide å ta fatt", en: "It is time to get stuck in" }, hint: "å ta fatt → tar fatt, tok fatt, har tatt fatt. Brukes med på. ⚠ Om ARBEID, ikke om et møte: du tar fatt på en oppgave. Det ligger en viss motvilje i ordet — du tar fatt på noe tungt." },
        { id: "no-u125l1-asetteigang", type: "vocab", front: "å sette i gang", reading: "asetteigang", meaning: "to get under way (start a process running)", example: { jp: "De setter i gang før budsjettet er på plass, og alle later som om det ikke er et problem.", en: "They get under way before the budget is in place, and everybody pretends that is not a problem." }, accept: ["to start up", "to launch"], drill: { jp: "Det går an å sette i gang nå", en: "It is possible to get under way now" }, hint: "å sette i gang → setter, satte, har satt. ⚠ Om en PROSESS som så går videre av seg selv, og det er den vanlige formen i tale: «vi setter i gang». Merk at objektet kommer ETTER: sette i gang arbeidet." },
        { id: "no-u125l1-ainnlede", type: "vocab", front: "å innlede", reading: "ainnlede", meaning: "to open (a talk, a text or a negotiation)", example: { jp: "Hun innleder møtet med det de er enige om, og det er derfor resten går fort.", en: "She opens the meeting with what they agree on, and that is why the rest goes quickly." }, accept: ["to begin (formally)", "to introduce"], drill: { jp: "Det er lurt å innlede med noe godt", en: "It is wise to open with something good" }, hint: "å innlede → innleder, innledet, har innledet. Inn + å lede. ⚠ Om noe med en STRUKTUR: et møte, et brev, forhandlinger, et samarbeid. Du innleder ikke et arbeid — det setter du i gang." },
        { id: "no-u125l1-enframdrift", type: "vocab", front: "en framdrift", reading: "enframdrift", meaning: "progress (the rate the work is moving at)", example: { jp: "Framdriften er god på papiret, og ingen av dem som gjør arbeidet er spurt om det.", en: "The progress is good on paper, and none of those doing the work have been asked about it." }, accept: ["momentum", "rate of progress"], drill: { jp: "Vi mangler en framdrift alle kan se", en: "We lack a progress everybody can see" }, hint: "en framdrift → framdriften. Hankjønn fordi en drift er det. Fram + drift. ⚠ Om TEMPO, ikke om resultat: du kan ha god framdrift mot feil mål. En framdriftsplan står i hvert eneste norske prosjektdokument." },
        { id: "no-u125l1-malbevisst", type: "vocab", front: "målbevisst", reading: "malbevisst", meaning: "purposeful (knows what it is working towards)", example: { jp: "Hun er målbevisst på en måte de andre kaller hard, og resultatene hennes er de beste i huset.", en: "She is purposeful in a way the others call hard, and her results are the best in the building." }, accept: ["single-minded", "focused"], drill: { jp: "Hun er målbevisst i alt hun gjør", en: "She is purposeful in everything she does" }, hint: "målbevisst → målbevisst, målbevisste. Merk å-folden: lesinga er malbevisst. Et mål (u44) + bevisst (u58). ⚠ Ros, men i norsk arbeidsliv en ros med en kant på: den som er målbevisst blir også beskrevet som lite fleksibel." },
      ],
    },
    {
      id: "no-u125l2",
      unit: 125,
      lesson: 2,
      title: "Å holde det gående",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that somebody kept going when it stopped being interesting — the part of a job nobody gets credit for.",
      items: [
        { id: "no-u125l2-aholdeut", type: "vocab", front: "å holde ut", reading: "aholdeut", meaning: "to endure (stay with something unpleasant)", example: { jp: "De holder ut fordi det ikke finnes noe annet sted å gå, og ledelsen kaller dem lojale.", en: "They endure because there is nowhere else to go, and the management calls them loyal." }, accept: ["to stick it out", "to bear it"], drill: { jp: "Det er tungt å holde ut så lenge", en: "It is hard to endure that long" }, hint: "å holde ut → holder, holdt, har holdt. Å holde (u59) + ut. ⚠ Alltid om noe VONDT. Fast vending: «jeg holder det ikke ut». Å stå på er om innsats; å holde ut er om å tåle." },
        { id: "no-u125l2-astapa", type: "vocab", front: "å stå på", reading: "astapa", meaning: "to keep at it (put in the effort day after day)", example: { jp: "Han står på i to år uten å be om noe, og så får en annen stillingen.", en: "He keeps at it for two years without asking for anything, and then somebody else gets the position." }, accept: ["to keep going", "to work hard at it"], drill: { jp: "Det lønner seg ikke alltid å stå på", en: "It does not always pay to keep at it" }, hint: "å stå på → står på, sto på, har stått på. Merk å-folden: lesinga er astapa. ⚠ Alltid POSITIVT om innsats, og «stå på!» er den vanligste oppmuntringen i norsk. Også: hva som står PÅ et papir — konteksten avgjør." },
        { id: "no-u125l2-utrettelig", type: "vocab", front: "utrettelig", reading: "utrettelig", meaning: "tireless (keeps on without visible cost)", example: { jp: "Hun er utrettelig i denne saka, og de andre har gitt opp den for lenge siden.", en: "She is tireless in this case, and the others gave it up long ago." }, accept: ["indefatigable", "unflagging"], drill: { jp: "Hun er utrettelig når det gjelder", en: "She is tireless when it matters" }, hint: "utrettelig → utrettelig, utrettelige. -ig-ord får ikke -t i intetkjønn. U- + trett (sliten) + lig. ⚠ Høy ros og litt høytidelig; du finner det i minnetaler og i omtale av ildsjeler." },
        { id: "no-u125l2-seig", type: "vocab", front: "seig", reading: "seig", meaning: "dogged (hard to wear down)", example: { jp: "Han er seig, og det er det ene alle i huset er enige om at han er.", en: "He is dogged, and that is the one thing everybody in the building agrees that he is." }, accept: ["tough", "persistent"], drill: { jp: "Han er seig når det gjelder", en: "He is dogged when it matters" }, hint: "seig → seigt, seige. ⚠ Om MENNESKER er det ros: du gir deg ikke. Om ting og møter er det kritikk: «et seigt møte» er et som ikke tar slutt. Og om mat: seigt kjøtt." },
        { id: "no-u125l2-afolgeopp", type: "vocab", front: "å følge opp", reading: "afolgeopp", meaning: "to follow up (do the second half nobody sees)", example: { jp: "Ingen følger opp vedtaket, og om et år kommer den samme saka tilbake til det samme møtet.", en: "Nobody follows up the decision, and in a year the same case comes back to the same meeting." }, accept: ["to see through", "to follow up on"], drill: { jp: "Noen burde prøve å følge opp dette", en: "Somebody ought to try to follow this up" }, hint: "å følge opp → følger, fulgte, har fulgt. Merk ø-folden: lesinga er afolgeopp. Å følge (u45) + opp. ⚠ Det norske forvaltningsordet for arbeidet ETTER vedtaket — og det som oftest ikke blir gjort." },
        { id: "no-u125l2-astrekkeseg", type: "vocab", front: "å strekke seg", reading: "astrekkeseg", meaning: "to go out of one's way (do more than required)", example: { jp: "Hun strekker seg langt for dem som spør henne selv, og de andre får det de har krav på.", en: "She goes a long way out of her way for those who ask her directly, and the others get what they are entitled to." }, accept: ["to stretch oneself", "to make an extra effort"], drill: { jp: "Det er lett å strekke seg for langt", en: "It is easy to go too far out of one's way" }, hint: "å strekke seg → strekker seg, strakk seg, har strukket seg. Alltid med seg. ⚠ To bruk: å gjøre mer enn du må, og om AVSTAND — «skogen strekker seg til grensa». Fast vending: «så langt det lar seg gjøre»." },
      ],
    },
    {
      id: "no-u125l3",
      unit: 125,
      lesson: 3,
      title: "Å komme i mål",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that something was finished — and pick the word that says how tidily it ended.",
      items: [
        { id: "no-u125l3-akommeimal", type: "vocab", front: "å komme i mål", reading: "akommeimal", meaning: "to get there (finish, often barely)", example: { jp: "De kom i mål med to dager igjen, og ingen av dem vil gjøre det på den måten igjen.", en: "They got there with two days to spare, and none of them wants to do it that way again." }, accept: ["to make it", "to get to the finish"], drill: { jp: "Vi kommer til å komme i mål", en: "We are going to get there" }, hint: "å komme i mål → kommer, kom, har kommet. Merk å-folden: lesinga er akommeimal. ⚠ Fra idretten og nå det vanligste ordet i norsk arbeidsliv for å bli ferdig. Det ligger ofte ANSTRENGELSE i det." },
        { id: "no-u125l3-asluttfore", type: "vocab", front: "å sluttføre", reading: "asluttfore", meaning: "to finalise (take the last steps properly)", example: { jp: "Arbeidet blir sluttført av noen andre, og de som begynte det får ingen omtale.", en: "The work is finalised by somebody else, and those who began it get no mention." }, accept: ["to complete", "to bring to a close"], drill: { jp: "Noen må prøve å sluttføre arbeidet", en: "Somebody has to try to finalise the work" }, hint: "å sluttføre → sluttfører, sluttførte, har sluttført. Merk ø-folden: lesinga er asluttfore. En slutt + å føre (u83). ⚠ Formelt. Å fullføre (u60) er om at INGENTING mangler; å sluttføre er om å gjøre de siste stegene ordentlig." },
        { id: "no-u125l3-eigjennomforing", type: "vocab", front: "ei gjennomføring", reading: "eigjennomforing", meaning: "an execution (how the plan was actually carried out)", example: { jp: "Planen var god, og gjennomføringa er det ingen i huset vil snakke om.", en: "The plan was good, and the execution is what nobody in the building wants to talk about." }, accept: ["implementation", "the carrying out"], drill: { jp: "Vi så ei gjennomføring ingen vil huske", en: "We saw an execution nobody will remember" }, hint: "ei gjennomføring → gjennomføringa. Hunkjønnsord kan du også skrive en gjennomføring / gjennomføringen, og den formen er den vanlige i saksdokumenter — merk begge. Merk ø-folden: lesinga er eigjennomforing. -ing er hunkjønn." },
        { id: "no-u125l3-aavrunde", type: "vocab", front: "å avrunde", reading: "aavrunde", meaning: "to round off (bring to a graceful end)", example: { jp: "Han avrunder møtet før noen har sagt det de kom for, og ingen sier fra.", en: "He rounds the meeting off before anybody has said what they came for, and nobody speaks up." }, accept: ["to wind up", "to round off"], drill: { jp: "Det er på tide å avrunde møtet", en: "It is time to round off the meeting" }, hint: "å avrunde → avrunder, avrundet, har avrundet. Av + rund. ⚠ To bruk: å avslutte pent, OG å runde av et tall — «avrundet til nærmeste hundre». Begge er vanlige." },
        { id: "no-u125l3-aroihavn", type: "vocab", front: "å ro i havn", reading: "aroihavn", meaning: "to bring home (land a hard negotiation)", example: { jp: "De ror avtalen i havn til slutt, og mye av innholdet må gjøres om neste år.", en: "They bring the agreement home in the end, and much of the content has to be redone next year." }, accept: ["to pull off", "to land (a deal)"], drill: { jp: "De prøver å ro i havn nå", en: "They are trying to bring it home now" }, hint: "å ro i havn → ror, rodde, har rodd. Å ro + en havn. ⚠ Fast uttrykk og svært vanlig i norsk om FORHANDLINGER: du ror en avtale i havn. Objektet står MELLOM ro og i havn når du bruker det fritt." },
        { id: "no-u125l3-asettepunktum", type: "vocab", front: "å sette punktum", reading: "asettepunktum", meaning: "to draw a line under (end it for good)", example: { jp: "Hun setter punktum for hele saka i et brev, og de andre bruker to år på å tro på det.", en: "She draws a line under the whole case in a letter, and the others take two years to believe it." }, accept: ["to put a full stop to", "to call it finished"], drill: { jp: "Det er på tide å sette punktum", en: "It is time to draw a line under it" }, hint: "å sette punktum → setter, satte, har satt. Å sette (u77) + punktum, uten artikkel. Brukes med for. ⚠ Alltid om noe som har vart FOR LENGE: en sak, en konflikt, en karriere." },
      ],
    },
    {
      id: "no-u125l4",
      unit: 125,
      lesson: 4,
      title: "Når du stanser underveis",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that something stopped short — and separate the person who chose to stop from the process that simply died.",
      items: [
        { id: "no-u125l4-agiseg", type: "vocab", front: "å gi seg", reading: "agiseg", meaning: "to give up (stop of your own accord)", example: { jp: "Hun ga seg etter fem år, og saka står nettopp der den sto da hun begynte.", en: "She gave up after five years, and the case stands exactly where it stood when she began." }, accept: ["to stop", "to call it a day"], drill: { jp: "Det er lurt å gi seg i tide", en: "It is wise to give up in good time" }, hint: "å gi seg → gir seg, ga seg, har gitt seg. Alltid med seg. ⚠ Tre bruk: å slutte, å innrømme at motparten har rett, og om vær og smerte — «regnet ga seg». Nøytralt, ikke nederlag." },
        { id: "no-u125l4-agitapt", type: "vocab", front: "å gi tapt", reading: "agitapt", meaning: "to concede defeat (stop because the other side won)", example: { jp: "De gir tapt på det store og får det lille, og i teksten står begge deler som en seier.", en: "They concede defeat on the big thing and get the small one, and in the text both are described as a victory." }, accept: ["to admit defeat", "to yield"], drill: { jp: "De kommer ikke til å gi tapt", en: "They are not going to concede defeat" }, hint: "å gi tapt → gir, ga, har gitt. Å gi + tapt (av å tape). ⚠ Forskjellen fra å gi seg er MOTPARTEN: du gir tapt FOR noen. Å gi seg kan skje uten at noen vant." },
        { id: "no-u125l4-alavaere", type: "vocab", front: "å la være", reading: "alavaere", meaning: "to refrain (choose not to do it)", example: { jp: "Han lar være å svare, og det blir lest som et svar av alle som venter på et.", en: "He refrains from answering, and it is read as an answer by everybody who is waiting for one." }, accept: ["to abstain", "to not do it"], drill: { jp: "Det er ofte best å la være", en: "It is often best to refrain" }, hint: "å la være → lar være, lot være, har latt være. Merk æ-folden: lesinga er alavaere. Brukes med å: «la være å svare». ⚠ Et VALG, ikke en forglemmelse (u119) — derfor kan det være både høflig og hardt." },
        { id: "no-u125l4-ennolen", type: "vocab", front: "en nølen", reading: "ennolen", meaning: "a hesitancy (visible reluctance to act)", example: { jp: "Det er en nølen i hele avdelingen, og ingen vil si hva den kommer av.", en: "There is a hesitancy in the whole department, and nobody will say what causes it." }, accept: ["hesitation", "reluctance"], drill: { jp: "Det er en nølen i hele huset", en: "There is a hesitancy in the whole building" }, hint: "en nølen → nølingen eller nølen; ordet bøyes lite. Merk ø-folden: lesinga er ennolen. Fra å nøle (u54). ⚠ Verbalsubstantiv på -en er hankjønn i bokmål. Om en STEMNING, ikke om én handling." },
        { id: "no-u125l4-adroye", type: "vocab", front: "å drøye", reading: "adroye", meaning: "to hold off (put it off a little longer)", example: { jp: "De drøyer svaret til fristen er ute, og da er det ingen som kan klage på det.", en: "They hold the answer off until the deadline has passed, and then nobody can complain about it." }, accept: ["to delay", "to put off"], drill: { jp: "Det er lett å drøye et svar", en: "It is easy to hold off an answer" }, hint: "å drøye → drøyer, drøyde, har drøyd. Merk ø-folden: lesinga er adroye. ⚠ Kortere og mer bevisst enn å utsette (u23): du drøyer noen dager, du utsetter til neste måned. Også: «det drøyer» = det tar tid." },
        { id: "no-u125l4-agaista", type: "vocab", front: "å gå i stå", reading: "agaista", meaning: "to grind to a halt (stop without anybody deciding it)", example: { jp: "Hele arbeidet går i stå når den ene er borte, og det er ingen som har tenkt på det før nå.", en: "The whole job grinds to a halt when that one person is away, and nobody has thought about it before now." }, accept: ["to stall", "to come to a standstill"], drill: { jp: "Slike prosesser pleier å gå i stå", en: "Such processes tend to grind to a halt" }, hint: "å gå i stå → går, gikk, har gått. Merk å-folden: lesinga er agaista. ⚠ INGEN er subjekt her — prosessen er. Derfor er det ordet folk bruker når de ikke vil peke på noen: «det gikk litt i stå»." },
      ],
    },
  ],
};
