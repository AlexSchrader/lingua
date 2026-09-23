// NO Unit 100 — Karriere og organisasjon (slot: work-career) — B2
// Retitled from the scaffold's English placeholder "Career and organisations".
// B2 band conventions live in no/unit88.js's header; language-wide in unit1.js.
// LAST UNIT OF BLOCK 1 (u88-u100).
//
// ⚠️ THE MOST HEAVILY PRE-TAUGHT SLOT IN THE BLOCK. u24 owns ei stilling, en
// søknad, å søke, en frist and ei avdeling; u56 owns en kompetanse and ei
// fagforening; u48 owns et intervju; u55 owns en leder; u74 owns et fagfelt;
// u75 owns et nettverk; u79 owns å si opp; u80 owns en oppsigelse; u93 (this
// block) owns en daglig leder and et styremøte. Measured: 12 of 45 first-draft
// candidates were already taught. All are used freely below; none re-taught.
//
// So this unit is deliberately the NORWEGIAN WORKING-LIFE half that the base
// never reaches: en tillitsvalgt, ei lønnsforhandling, et arbeidsmiljø, ei
// sykemelding, en permisjon and en ansiennitet. Those six are the words a
// person employed in Norway meets in their first year and cannot get from a
// dictionary of "job words" — they are institutions of the Norwegian labour
// model, and the hints say what each one actually entitles you to.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT100 = {
  id: "no-u100",
  lang: "no",
  title: "Karriere og organisasjon",
  order: 100,
  stage: "b2",
  lessons: [
    {
      id: "no-u100l1",
      unit: 100,
      lesson: 1,
      title: "Å søke seg videre",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Go after a job properly — read the advert, know what the role asks for, and say who can vouch for you.",
      items: [
        { id: "no-u100l1-eiutlysning", type: "vocab", front: "ei utlysning", reading: "eiutlysning", meaning: "job advert (the public notice that a post is open)", example: { jp: "Ei utlysning sier like mye om stedet som om jobben, hvis du leser den godt.", en: "A job advert says as much about the place as about the job, if you read it well." }, accept: ["a vacancy notice", "an advertised post"], drill: { jp: "Vi så ei utlysning i dag", en: "We saw a job advert today" }, hint: "ei utlysning → utlysninga, flertall utlysninger. -ning er hunkjønn (unit88 regel B3). Fra å lyse ut (l4). En søknad (u24) er svaret ditt på den." },
        { id: "no-u100l1-enstillingsbeskrivelse", type: "vocab", front: "en stillingsbeskrivelse", reading: "enstillingsbeskrivelse", meaning: "job description (what the post is officially for)", example: { jp: "Ingen gjør bare det som står i en stillingsbeskrivelse, men den bestemmer hva du kan si nei til.", en: "Nobody does only what is in a job description, but it decides what you can say no to." }, accept: ["a written account of a post", "the duties of a role"], drill: { jp: "Vi savner en stillingsbeskrivelse her", en: "We lack a job description here" }, hint: "en stillingsbeskrivelse → stillingsbeskrivelsen. -else er HANKJØNN (unit88 regel B3), aldri ei. Ei stilling (u24) + ei beskrivelse." },
        { id: "no-u100l1-enreferanseperson", type: "vocab", front: "en referanseperson", reading: "enreferanseperson", meaning: "referee (somebody who will vouch for your work)", example: { jp: "Spør alltid en referanseperson før du gir bort navnet, ellers blir begge flaue.", en: "Always ask a referee before you give their name away, otherwise both of you are embarrassed." }, accept: ["somebody who speaks for you", "a work reference"], drill: { jp: "Hun er en referanseperson for meg", en: "She is a referee for me" }, hint: "en referanseperson → referansepersonen. En referanse (u89) + en person. ⚠️ I Norge ringer arbeidsgiveren som regel ÉN av dem, og det er ofte nok." },
        { id: "no-u100l1-akvalifisereseg", type: "vocab", front: "å kvalifisere seg", reading: "akvalifisereseg", meaning: "to qualify oneself (become formally good enough for something)", example: { jp: "Hun jobbet i tre år for å kvalifisere seg, og så kom det nye krav.", en: "She worked for three years to qualify herself, and then new requirements came." }, accept: ["to become eligible", "to meet the requirements"], drill: { jp: "Det tar tid å kvalifisere seg her", en: "It takes time to qualify oneself here" }, hint: "Refleksivt: jeg kvalifiserer meg, vi kvalifiserer oss. En kompetanse (u56) er hva du KAN; å kvalifisere seg er å få det godkjent på papir." },
        { id: "no-u100l1-enkarrierevei", type: "vocab", front: "en karrierevei", reading: "enkarrierevei", meaning: "career path (the route a job can actually lead along)", example: { jp: "De lovte en karrierevei, men ingen over henne hadde tenkt å slutte.", en: "They promised a career path, but nobody above her had any plans to leave." }, accept: ["a route through a career", "a path of advancement"], drill: { jp: "Dette er en karrierevei for henne", en: "This is a career path for her" }, hint: "en karrierevei → karriereveien, flertall karriereveier. En karriere (u50) + en vei (u7). Spør hvor den FORRIGE i stillinga gikk videre." },
        { id: "no-u100l1-aavansere", type: "vocab", front: "å avansere", reading: "aavansere", meaning: "to advance (move up a level at work)", example: { jp: "Han ville heller bli god der han var enn å avansere til noe han ikke likte.", en: "He would rather become good where he was than advance into something he did not like." }, accept: ["to move up", "to rise through the ranks"], drill: { jp: "Det er mulig å avansere her", en: "It is possible to advance here" }, hint: "å avansere → avanserer, avanserte. Fransk opphav. En forfremmelse (l3) er ÉN hendelse; å avansere er bevegelsen over tid." },
      ],
    },
    {
      id: "no-u100l2",
      unit: 100,
      lesson: 2,
      title: "I organisasjonen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a workplace is put together — the levels, who does what, and whether there are enough people.",
      items: [
        { id: "no-u100l2-enmedarbeider", type: "vocab", front: "en medarbeider", reading: "enmedarbeider", meaning: "colleague on the staff (somebody who works there, seen from the firm's side)", example: { jp: "De kaller alle en medarbeider, også dem som bestemmer alt.", en: "They call everybody a staff member, including those who decide everything." }, accept: ["a member of staff", "an employee"], drill: { jp: "Hun er en medarbeider hos oss", en: "She is a member of staff with us" }, hint: "en medarbeider → medarbeideren, flertall medarbeidere. Med + å arbeide. ⚠️ En kollega er din likemann; en medarbeider er ordet BEDRIFTA bruker." },
        { id: "no-u100l2-ethierarki", type: "vocab", front: "et hierarki", reading: "ethierarki", meaning: "hierarchy (the ladder of who answers to whom)", example: { jp: "Et hierarki uten nivåer betyr ikke at ingen bestemmer, bare at du ikke ser hvem.", en: "A hierarchy without levels does not mean that nobody decides, only that you cannot see who." }, accept: ["a chain of command", "ranked levels"], drill: { jp: "Her er et hierarki vi kjenner", en: "Here is a hierarchy we know" }, hint: "et hierarki → hierarkiet, flertall hierarkier. Uttales hi-er-ar-KI. ⚠️ Norsk arbeidsliv er kjent for FLATE hierarkier — du kan si imot sjefen." },
        { id: "no-u100l2-etlederskap", type: "vocab", front: "et lederskap", reading: "etlederskap", meaning: "leadership (the doing of leading, well or badly)", example: { jp: "Et godt lederskap ser du mest når noe går galt, ikke når alt går bra.", en: "Good leadership you see most when something goes wrong, not when everything goes well." }, accept: ["the practice of leading", "how a group is led"], drill: { jp: "Dette krever et lederskap vi savner", en: "This calls for a leadership we lack" }, hint: "et lederskap → lederskapet. En leder (u55) + -skap. ⚠️ Et lederskap er HVORDAN det ledes; en ledelse er gruppa av folk som gjør det." },
        { id: "no-u100l2-eiarbeidsoppgave", type: "vocab", front: "ei arbeidsoppgave", reading: "eiarbeidsoppgave", meaning: "work task (one named piece of what the job is)", example: { jp: "Hun fikk ei arbeidsoppgave ingen andre ville ha, og gjorde den til si egen.", en: "She was given a work task nobody else wanted, and made it her own." }, accept: ["a job duty", "an assigned piece of work"], drill: { jp: "Dette er ei arbeidsoppgave for oss", en: "This is a work task for us" }, hint: "ei arbeidsoppgave → arbeidsoppgava, flertall arbeidsoppgaver. Et arbeid (u24) + ei oppgave (u34). Det er disse som står i stillingsbeskrivelsen (l1)." },
        { id: "no-u100l2-eibemanning", type: "vocab", front: "ei bemanning", reading: "eibemanning", meaning: "staffing level (how many people are actually on)", example: { jp: "Ei bemanning som så vidt holder, holder ikke den dagen noen blir syk.", en: "A staffing level that barely holds does not hold the day somebody falls ill." }, accept: ["the number of staff on", "manning levels"], drill: { jp: "Vi har ei bemanning som holder", en: "We have a staffing level that holds" }, hint: "ei bemanning → bemanninga. -ing er hunkjønn (unit88 regel B3). Fra å bemanne. Stridstema i norsk helsevesen og skole hvert eneste år." },
        { id: "no-u100l2-enmentor", type: "vocab", front: "en mentor", reading: "enmentor", meaning: "mentor (somebody further along who takes you under their wing)", example: { jp: "En mentor sier deg det ingen andre vil si, og det er hele verdien.", en: "A mentor tells you what nobody else will say, and that is the whole value." }, accept: ["an experienced guide", "somebody who mentors you"], drill: { jp: "Han var en mentor for meg", en: "He was a mentor for me" }, hint: "en mentor → mentoren, flertall mentorer. Fra Odysseen. En leder (u55) har makt over deg; en mentor har det ikke, og det er nettopp poenget." },
      ],
    },
    {
      id: "no-u100l3",
      unit: 100,
      lesson: 3,
      title: "Rettigheter på jobb",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use what you are entitled to at a Norwegian workplace — your rep, the pay round, sick leave and time off.",
      items: [
        { id: "no-u100l3-entillitsvalgt", type: "vocab", front: "en tillitsvalgt", reading: "entillitsvalgt", meaning: "union representative (a colleague elected to speak for the staff)", example: { jp: "Ta med en tillitsvalgt i møtet, for da blir alt en annen sak med en gang.", en: "Bring a union representative to the meeting, because then it all becomes a different matter immediately." }, accept: ["an elected staff rep", "a shop steward"], drill: { jp: "Vi har en tillitsvalgt her", en: "We have a union representative here" }, hint: "en tillitsvalgt → den tillitsvalgte, flertall tillitsvalgte. Ei tillit + å velge (u15). ⚠️ EN RETT i Norge: du kan ha med deg en tillitsvalgt i ethvert møte om din egen sak." },
        { id: "no-u100l3-eilonnsforhandling", type: "vocab", front: "ei lønnsforhandling", reading: "eilonnsforhandling", meaning: "pay negotiation (the yearly round where wages are set)", example: { jp: "Ei lønnsforhandling handler om hele gruppa, ikke om hvor godt du selv gjorde det.", en: "A pay negotiation is about the whole group, not about how well you yourself did." }, accept: ["a wage round", "pay bargaining"], drill: { jp: "Vi venter på ei lønnsforhandling nå", en: "We are waiting for a pay negotiation now" }, hint: "ei lønnsforhandling → lønnsforhandlinga. -ing er hunkjønn (unit88 regel B3). Ei lønn (u24) + ei forhandling (u93). ø folder til o. Skjer om våren, kollektivt." },
        { id: "no-u100l3-etarbeidsmiljo", type: "vocab", front: "et arbeidsmiljø", reading: "etarbeidsmiljo", meaning: "working environment (how it actually is to be there, in law and in feel)", example: { jp: "Et dårlig arbeidsmiljø koster mer enn folk tror, og det er sjelden én person sin feil.", en: "A poor working environment costs more than people think, and it is rarely one person's fault." }, accept: ["conditions at work", "the workplace climate"], drill: { jp: "Vi har et arbeidsmiljø vi liker", en: "We have a working environment we like" }, hint: "et arbeidsmiljø → arbeidsmiljøet. Et arbeid (u24) + et miljø (u65). ⚠️ EGEN LOV I NORGE: arbeidsmiljøloven dekker både fysisk og psykisk miljø. ø folder til o." },
        { id: "no-u100l3-eisykemelding", type: "vocab", front: "ei sykemelding", reading: "eisykemelding", meaning: "sick note (the doctor's paper that keeps your pay running)", example: { jp: "Med ei sykemelding fra legen får du lønn, og de kan ikke si deg opp for det.", en: "With a sick note from the doctor you get paid, and they cannot dismiss you for it." }, accept: ["a medical certificate for work", "doctor's sick leave"], drill: { jp: "Han leverte ei sykemelding i går", en: "He handed in a sick note yesterday" }, hint: "ei sykemelding → sykemeldinga, flertall sykemeldinger. -ing er hunkjønn (unit88 regel B3). Syk (u11) + ei melding (u33). Egenmelding er den du skriver sjøl, uten lege." },
        { id: "no-u100l3-enpermisjon", type: "vocab", front: "en permisjon", reading: "enpermisjon", meaning: "leave of absence (time off with your job kept open)", example: { jp: "Han tok en permisjon for å være hjemme med barnet, og jobben stod der da han kom tilbake.", en: "He took a leave of absence to be at home with the child, and the job was there when he came back." }, accept: ["authorised time away", "a period off with the post held"], drill: { jp: "Hun har en permisjon i år", en: "She has a leave of absence this year" }, hint: "en permisjon → permisjonen, flertall permisjoner. -sjon er hankjønn (unit88 regel B3). ⚠️ Foreldrepermisjon i Norge deles mellom foreldra, og en del er reservert far." },
        { id: "no-u100l3-enansiennitet", type: "vocab", front: "en ansiennitet", reading: "enansiennitet", meaning: "seniority by years served (how long you have been there, as a formal claim)", example: { jp: "En ansiennitet teller når de må velge hvem som må gå, og det er ikke alltid rettferdig.", en: "Seniority counts when they have to choose who must go, and it is not always fair." }, accept: ["length of service", "years-served standing"], drill: { jp: "Han har en ansiennitet på ti", en: "He has a seniority of ten" }, hint: "en ansiennitet → ansienniteten. -itet er HANKJØNN (unit88 regel B3). Fransk opphav. ⚠️ Teller BÅDE for lønn og for hvem som beholder jobben ved nedbemanning." },
      ],
    },
    {
      id: "no-u100l4",
      unit: 100,
      lesson: 4,
      title: "Når ting endrer seg",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow a workplace through change — restructuring, a new advert, a promotion, and the terms on the way out.",
      items: [
        { id: "no-u100l4-eiomstilling", type: "vocab", front: "ei omstilling", reading: "eiomstilling", meaning: "transition (a whole workplace changing what it does)", example: { jp: "Ei omstilling tar lengre tid enn noen sier på forhånd, hver gang.", en: "A transition takes longer than anybody says beforehand, every time." }, accept: ["a shift in what an organisation does", "a restructuring of purpose"], drill: { jp: "Vi står i ei omstilling nå", en: "We are in a transition now" }, hint: "ei omstilling → omstillinga, flertall omstillinger. -ing er hunkjønn (unit88 regel B3). Om + å stille. Om HVA bedrifta gjør; ei omorganisering er om HVEM som sitter hvor." },
        { id: "no-u100l4-eiomorganisering", type: "vocab", front: "ei omorganisering", reading: "eiomorganisering", meaning: "reorganisation (moving people and boxes around)", example: { jp: "Ei omorganisering hvert andre år er et faresignal, ikke et tegn på at noen tenker nytt.", en: "A reorganisation every other year is a warning sign, not a sign that somebody is thinking afresh." }, accept: ["a restructuring of who reports to whom", "a shake-up"], drill: { jp: "De varslet ei omorganisering i går", en: "They announced a reorganisation yesterday" }, hint: "ei omorganisering → omorganiseringa. -ing er hunkjønn (unit88 regel B3). ⚠️ Ved ei omorganisering har den tillitsvalgte (l3) rett til å bli tatt med tidlig." },
        { id: "no-u100l4-alyseut", type: "vocab", front: "å lyse ut", reading: "alyseut", meaning: "to advertise a post (put a job out publicly)", example: { jp: "De måtte lyse ut stillinga på nytt, for ingen av dem som søkte passet.", en: "They had to advertise the post again, because none of those who applied fitted." }, accept: ["to put out a vacancy", "to open a post for applications"], drill: { jp: "De pleier å lyse ut om våren", en: "They usually advertise posts in the spring" }, hint: "Å lyse + ut. Ei utlysning (l1) er resultatet. ⚠️ I det offentlige MÅ stillinger lyses ut — du kan ikke bare gi jobben til noen du kjenner." },
        { id: "no-u100l4-enforfremmelse", type: "vocab", front: "en forfremmelse", reading: "enforfremmelse", meaning: "promotion (being moved up, as one event)", example: { jp: "En forfremmelse uten mer lønn er en ny tittel og mer arbeid, ikke noe annet.", en: "A promotion without more pay is a new title and more work, nothing else." }, accept: ["being raised to a higher post", "an advancement given"], drill: { jp: "Hun fikk en forfremmelse i sommer", en: "She got a promotion in the summer" }, hint: "en forfremmelse → forfremmelsen, flertall forfremmelser. -else er HANKJØNN (unit88 regel B3), aldri ei. Å avansere (l1) er veien; dette er trinnet." },
        { id: "no-u100l4-ensluttpakke", type: "vocab", front: "en sluttpakke", reading: "ensluttpakke", meaning: "severance package (what you are offered to leave by agreement)", example: { jp: "De ga alle som ville slutte en sluttpakke, og mange sa ja med en gang.", en: "They gave everybody who wanted to leave a severance package, and many said yes immediately." }, accept: ["a redundancy settlement", "terms for leaving"], drill: { jp: "De ga en sluttpakke til alle", en: "They gave a severance package to everybody" }, hint: "en sluttpakke → sluttpakken, flertall sluttpakker. Å slutte (u21) + ei pakke (u27). ⚠️ Du gir ofte fra deg retten til å klage — les den med en tillitsvalgt (l3)." },
        { id: "no-u100l4-enoppsigelsestid", type: "vocab", front: "en oppsigelsestid", reading: "enoppsigelsestid", meaning: "notice period (the time that must pass before you actually leave)", example: { jp: "En oppsigelsestid på tre måneder gjelder begge veier, og det glemmer folk når de er sinte.", en: "A notice period of three months applies both ways, and people forget that when they are angry." }, accept: ["required notice", "the run-out time on a job"], drill: { jp: "Vi har en oppsigelsestid på tre", en: "We have a notice period of three" }, hint: "en oppsigelsestid → oppsigelsestiden. En oppsigelse (u80) + ei tid. ⚠️ I Norge er en måned et vanlig minimum, og den øker med en ansiennitet (l3)." },
      ],
    },
  ],
};
