// NO Unit 100 — Arbeidsliv og organisasjon (slot: work-career) — B2
// Block 1 of Norwegian B2. Band constitution: no/unit88.js §C1–C7.
// LAST UNIT OF BLOCK 1. Blocks 2 (u101–u113) and 3 (u114–u126) start at u101.
//
// Blocked before authoring: `ei stilling` u24, `en søknad` u24, `å ansette` u24,
// `ei avdeling` u24, `en sjef` u18, `en kollega` u18, `ei lønn` u18, `en jobb`
// u77, `en karriere` u62, `ei fagforening` u56, `en arbeidstaker` u56,
// `en arbeidsgiver` u56, `en kompetanse` u56, `en leder` u55, `ei erfaring` u50,
// `en oppsigelse` u80, `å si opp` u79, `dagpenger` u78. u24, u56 and u80 own the
// EMPLOYMENT layer three times over, so this unit is the ORGANISATION around the
// job: getting hired (l1), the shop floor (l2), who holds office (l3) and what
// happens when the employer shrinks (l4).
//
// `ei rekruttering`, `ei utlysing`, `ei permittering` and `en forfremmelse` were
// all cut as transparent derivations of the verbs taught beside them.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT100 = {
  id: "no-u100",
  lang: "no",
  title: "Arbeidsliv og organisasjon",
  order: 100,
  stage: "b2",
  lessons: [
    {
      id: "no-u100l1",
      unit: 100,
      lesson: 1,
      title: "Å bli ansatt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Get hired in Norway — read the advert, understand how recruitment works, say what qualifies you, and survive the first week of training.",
      items: [
        { id: "no-u100l1-alyseut", type: "vocab", front: "å lyse ut", reading: "alyseut", meaning: "to advertise (a post)", example: { jp: "Stillinga ble lyst ut i mai, og de fikk bare fire søknader.", en: "The post was advertised in May, and they only got four applications." }, accept: ["to post (a vacancy)", "to advertise a job"], drill: { jp: "De pleier å lyse ut alle stillinger", en: "They usually advertise all posts" }, hint: "å lyse ut → lyser ut, lyste ut. Å lyse + ut. Ei utlysing er resultatet. Alle offentlige stillinger i Norge må lyses ut." },
        { id: "no-u100l1-enstillingsannonse", type: "vocab", front: "en stillingsannonse", reading: "enstillingsannonse", meaning: "job advert", example: { jp: "Stillingsannonsen lover mye, men lønna står ikke der.", en: "The job advert promises a lot, but the salary is not in it." }, accept: ["a job advertisement", "a vacancy notice"], drill: { jp: "Han leste en stillingsannonse i avisa", en: "He read a job advert in the paper" }, hint: "en stillingsannonse → stillingsannonsen, flertall stillingsannonser. Ei stilling (u24) + en annonse. -anse-ord er hankjønn." },
        { id: "no-u100l1-arekruttere", type: "vocab", front: "å rekruttere", reading: "arekruttere", meaning: "to recruit", example: { jp: "De rekrutterer bare folk de kjenner fra før.", en: "They only recruit people they already know." }, accept: ["to hire", "to take on"], drill: { jp: "Det er dyrt å rekruttere nye folk", en: "It is expensive to recruit new people" }, hint: "å rekruttere → rekrutterer, rekrutterte. Ei rekruttering er prosessen. Å ansette (u24) er å skrive kontrakten (u32); å rekruttere er alt som skjer før." },
        { id: "no-u100l1-akvalifisere", type: "vocab", front: "å kvalifisere", reading: "akvalifisere", meaning: "to qualify (make eligible)", example: { jp: "Kurset kvalifiserer deg til å søke, men ikke til å få jobben.", en: "The course qualifies you to apply, but not to get the job." }, accept: ["to make eligible", "to entitle"], drill: { jp: "Kurset er nok til å kvalifisere deg", en: "The course is enough to qualify you" }, hint: "å kvalifisere → kvalifiserer, kvalifiserte. Refleksivt betyr det å komme videre i en konkurranse: laget kvalifiserte seg." },
        { id: "no-u100l1-enfagkunnskap", type: "vocab", front: "en fagkunnskap", reading: "enfagkunnskap", meaning: "professional expertise", example: { jp: "Fagkunnskapen er god, men han klarer ikke å forklare den.", en: "The professional expertise is good, but he cannot explain it." }, accept: ["subject expertise", "professional knowledge"], drill: { jp: "Vi trenger en fagkunnskap ingen har", en: "We need a professional expertise nobody has" }, hint: "en fagkunnskap → fagkunnskapen. Et fag + kunnskap (u24). Står oftest uten artikkel: å ha fagkunnskap." },
        { id: "no-u100l1-eiopplaering", type: "vocab", front: "ei opplæring", reading: "eiopplaering", meaning: "training (induction)", example: { jp: "Opplæringa varte i to dager, og så var du på egen hånd.", en: "The training lasted two days, and after that you were on your own." }, accept: ["instruction", "induction"], drill: { jp: "De gir ei opplæring som er kort", en: "They give a training that is short" }, hint: "ei opplæring → opplæringa. -ing-ord er hunkjønn; opplæringen er vanlig i trykk. Opp + å lære (u1). Et kurs (u24) er kortere og løsere." },
      ],
    },
    {
      id: "no-u100l2",
      unit: 100,
      lesson: 2,
      title: "På arbeidsplassen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a Norwegian workplace from the inside — colleagues, the working environment, who does what, and how long people have been there.",
      items: [
        { id: "no-u100l2-enmedarbeider", type: "vocab", front: "en medarbeider", reading: "enmedarbeider", meaning: "staff member (colleague)", example: { jp: "Medarbeiderne fikk vite det på radioen, ikke av sjefen.", en: "The staff found out about it on the radio, not from the boss." }, accept: ["an employee", "a co-worker"], drill: { jp: "Han er en medarbeider alle liker", en: "He is a staff member everybody likes" }, hint: "en medarbeider → medarbeideren, flertall medarbeidere. Med + en arbeider. Mildere enn «en ansatt» — ordet ledelsen bruker når den vil være vennlig." },
        { id: "no-u100l2-etarbeidsmiljo", type: "vocab", front: "et arbeidsmiljø", reading: "etarbeidsmiljo", meaning: "working environment", example: { jp: "Arbeidsmiljøet er godt, og det er hele grunnen til at folk blir.", en: "The working environment is good, and that is the whole reason people stay." }, accept: ["workplace climate", "work environment"], drill: { jp: "De har et arbeidsmiljø folk liker", en: "They have a working environment people like" }, hint: "et arbeidsmiljø → arbeidsmiljøet, flertall arbeidsmiljø. Merk ø-folden: lesinga er etarbeidsmiljo. Arbeidsmiljøloven er den viktigste loven (u32) i norsk arbeidsliv." },
        { id: "no-u100l2-eiarbeidsdeling", type: "vocab", front: "ei arbeidsdeling", reading: "eiarbeidsdeling", meaning: "division of labour", example: { jp: "Arbeidsdelinga er dårlig, og derfor gjør to personer det samme.", en: "The division of labour is poor, and that is why two people do the same thing." }, accept: ["allocation of tasks", "division of work"], drill: { jp: "Her er det ei arbeidsdeling som virker", en: "Here there is a division of labour that works" }, hint: "ei arbeidsdeling → arbeidsdelinga. -ing-ord er hunkjønn; arbeidsdelingen er vanlig i trykk. Et arbeid (u18) + å dele (u33)." },
        { id: "no-u100l2-enfagperson", type: "vocab", front: "en fagperson", reading: "enfagperson", meaning: "specialist (professional)", example: { jp: "De spurte en fagperson, og da ble alt sammen mye lettere.", en: "They asked a specialist, and then all of it got much easier." }, accept: ["an expert", "a professional"], drill: { jp: "Vi trenger en fagperson som kan dette", en: "We need a specialist who knows this" }, hint: "en fagperson → fagpersonen, flertall fagpersoner. Et fag + en person. Kjønnsnøytralt, og det er nettopp derfor ordet finnes: en fagmann var det gamle." },
        { id: "no-u100l2-etarsverk", type: "vocab", front: "et årsverk", reading: "etarsverk", meaning: "person-year (full-time equivalent)", example: { jp: "Jobben tar to årsverk, og de har fått penger til ett.", en: "The job takes two person-years, and they have been given money for one." }, accept: ["an FTE", "a full-time equivalent"], drill: { jp: "Dette blir et årsverk i tillegg", en: "This will be one more person-year" }, hint: "et årsverk → årsverket, flertall årsverk. Et år (u5) + et verk. Én person i full jobb i ett år — måleenheten i alle norske budsjett." },
        { id: "no-u100l2-enansiennitet", type: "vocab", front: "en ansiennitet", reading: "enansiennitet", meaning: "seniority (length of service)", example: { jp: "Ansienniteten bestemmer hvem som må gå først.", en: "Seniority decides who has to go first." }, accept: ["length of service"], drill: { jp: "Han har en ansiennitet ingen slår", en: "He has a seniority nobody beats" }, hint: "en ansiennitet → ansienniteten. -itet-ord er hankjønn (regel 1), aldri ei. Fransk låneord: ang-sjen-ni-TET. Avgjørende ved nedbemanning (l4)." },
      ],
    },
    {
      id: "no-u100l3",
      unit: 100,
      lesson: 3,
      title: "Ledelse og verv",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say who decides what in a Norwegian organisation — management, elected office, the union rep, the federation and the board meeting.",
      items: [
        { id: "no-u100l3-enledelse", type: "vocab", front: "en ledelse", reading: "enledelse", meaning: "management (the body)", example: { jp: "Ledelsen sa ingenting på tre uker, og det sa nok mer enn ord.", en: "Management said nothing for three weeks, and that probably said more than words." }, accept: ["the leadership", "senior management"], drill: { jp: "De har en ledelse ingen stoler på", en: "They have a management nobody trusts" }, hint: "en ledelse → ledelsen, flertall ledelser. -else-ord er hankjønn (regel 1), aldri ei. Fra å lede. En leder (u55) er personen; ledelsen er hele gruppa." },
        { id: "no-u100l3-etverv", type: "vocab", front: "et verv", reading: "etverv", meaning: "office (position of trust)", example: { jp: "Vervet gir ingen lønn, men det gir mye makt.", en: "The office pays no salary, but it gives a lot of power." }, accept: ["an honorary post", "an elected position"], drill: { jp: "Hun har et verv i kommunen", en: "She holds an office in the council" }, hint: "et verv → vervet, flertall verv. Noe du er VALGT til, ikke ansatt i: et verv i et styre eller i et parti (u32)." },
        { id: "no-u100l3-entillitsvalgt", type: "vocab", front: "en tillitsvalgt", reading: "entillitsvalgt", meaning: "union representative", example: { jp: "Den tillitsvalgte var med hele veien, og det hjalp mye.", en: "The union representative was there the whole way, and it helped a lot." }, accept: ["a shop steward", "an employee representative"], drill: { jp: "De valgte en tillitsvalgt i går", en: "They elected a union representative yesterday" }, hint: "en tillitsvalgt → den tillitsvalgte, flertall tillitsvalgte. Bøyes som et adjektiv. Ei tillit + valgt: den de ansatte har valgt til å tale for seg." },
        { id: "no-u100l3-etfagforbund", type: "vocab", front: "et fagforbund", reading: "etfagforbund", meaning: "trade union federation", example: { jp: "Fagforbundet tok saka videre, og da gikk det fort.", en: "The union federation took the case further, and then it went quickly." }, accept: ["a trade union", "a labour union"], drill: { jp: "Han er med i et fagforbund", en: "He is a member of a union federation" }, hint: "et fagforbund → fagforbundet, flertall fagforbund. Et fag + et forbund. Større enn ei fagforening (u56): forbundet samler mange foreninger." },
        { id: "no-u100l3-aforfremme", type: "vocab", front: "å forfremme", reading: "aforfremme", meaning: "to promote (to a higher post)", example: { jp: "De forfremmet henne etter ti år, og ingen var overrasket.", en: "They promoted her after ten years, and nobody was surprised." }, accept: ["to elevate", "to raise (in rank)"], drill: { jp: "Det er lett å forfremme feil folk", en: "It is easy to promote the wrong people" }, hint: "å forfremme → forfremmer, forfremmet. En forfremmelse er resultatet. ⚠ Ikke det samme som å fremme et forslag, som er å legge det fram." },
        { id: "no-u100l3-etstyremote", type: "vocab", front: "et styremøte", reading: "etstyremote", meaning: "board meeting", example: { jp: "Styremøtet varte i seks timer, og ingenting ble bestemt.", en: "The board meeting lasted six hours, and nothing was decided." }, accept: ["a meeting of the board"], drill: { jp: "De hadde et styremøte i går", en: "They had a board meeting yesterday" }, hint: "et styremøte → styremøtet, flertall styremøter. Merk ø-folden: lesinga er etstyremote. Et styre er valgt; ledelsen (l3) er ansatt." },
      ],
    },
    {
      id: "no-u100l4",
      unit: 100,
      lesson: 4,
      title: "Når bedriften krymper",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Survive a Norwegian restructuring — the downsizing, the temporary lay-off, the notice period, the severance deal and the sickness absence behind it all.",
      items: [
        { id: "no-u100l4-eiomstilling", type: "vocab", front: "ei omstilling", reading: "eiomstilling", meaning: "restructuring", example: { jp: "Omstillinga kostet mange jobber, og den er ikke ferdig ennå.", en: "The restructuring cost a lot of jobs, and it is not finished yet." }, accept: ["reorganisation", "adjustment"], drill: { jp: "Dette blir ei omstilling for alle", en: "This is going to be a restructuring for everybody" }, hint: "ei omstilling → omstillinga. -ing-ord er hunkjønn; omstillingen er vanlig i trykk. Om + å stille. Ordet ledelsen bruker når jobber forsvinner (u59)." },
        { id: "no-u100l4-einedbemanning", type: "vocab", front: "ei nedbemanning", reading: "einedbemanning", meaning: "downsizing", example: { jp: "Nedbemanninga kom først hos de yngste, og det var ventet.", en: "The downsizing came first among the youngest, and that was expected." }, accept: ["staff reduction", "redundancies"], drill: { jp: "Her blir det ei nedbemanning igjen", en: "There is going to be a downsizing here again" }, hint: "ei nedbemanning → nedbemanninga. -ing/-ning-ord er hunkjønn; nedbemanningen er vanlig i trykk. Ned + bemanning. Oppsigelser (u80) sagt på en pen måte." },
        { id: "no-u100l4-apermittere", type: "vocab", front: "å permittere", reading: "apermittere", meaning: "to lay off temporarily", example: { jp: "De permitterte hele avdelinga, men lovte at det var kort.", en: "They temporarily laid off the whole department, but promised it would be short." }, accept: ["to furlough", "to stand down (temporarily)"], drill: { jp: "Det er vanlig å permittere om vinteren", en: "It is normal to lay people off in winter" }, hint: "å permittere → permitterer, permitterte. Ei permittering er ordninga (u78): du er ikke oppsagt, men du jobber ikke og får dagpenger (u78)." },
        { id: "no-u100l4-eioppsigelsestid", type: "vocab", front: "ei oppsigelsestid", reading: "eioppsigelsestid", meaning: "notice period", example: { jp: "Oppsigelsestida er tre måneder, og den gjelder begge veier.", en: "The notice period is three months, and it applies in both directions." }, accept: ["a period of notice"], drill: { jp: "Hun har ei oppsigelsestid på et år", en: "She has a notice period of one year" }, hint: "ei oppsigelsestid → oppsigelsestida. Følger ei tid og er hunkjønn; oppsigelsestiden er vanlig i trykk. En oppsigelse (u80) + tid (u28). Tre måneder er vanlig i Norge." },
        { id: "no-u100l4-eisluttpakke", type: "vocab", front: "ei sluttpakke", reading: "eisluttpakke", meaning: "severance package", example: { jp: "Sluttpakka var god, og derfor sa mange ja med en gang.", en: "The severance package was good, and that is why many said yes immediately." }, accept: ["a redundancy package", "a severance deal"], drill: { jp: "De fikk ei sluttpakke de likte", en: "They got a severance package they liked" }, hint: "ei sluttpakke → sluttpakka. Følger ei pakke og er hunkjønn; sluttpakken er vanlig i trykk. Penger mot at du sier opp (u79) selv." },
        { id: "no-u100l4-etsykefravaer", type: "vocab", front: "et sykefravær", reading: "etsykefravaer", meaning: "sickness absence", example: { jp: "Sykefraværet gikk ned da arbeidsmiljøet ble bedre.", en: "The sickness absence went down when the working environment improved." }, accept: ["sick leave", "absenteeism"], drill: { jp: "De har et sykefravær som er høyt", en: "They have a sickness absence that is high" }, hint: "et sykefravær → sykefraværet. Syk (u11) + et fravær. Norge har et av Europas høyeste, og det diskuteres hver eneste høst." },
      ],
    },
  ],
};
