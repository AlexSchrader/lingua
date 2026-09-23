// NO Unit 99 — Identitet og samfunn (slot: identity-society) — B2
// Retitled from the scaffold's English placeholder "Identity and society".
// B2 band conventions live in no/unit88.js's header; language-wide in unit1.js.
//
// u68 "Forhold og fellesskap" owns et fellesskap and ei likestilling; u51 owns
// en fordom; u61 owns en norm; u32 owns en borger and ei plikt; u95l3 (this
// block) owns ei folkegruppe and en innvandrer. All used here, none re-taught.
//
// ⚠️ THE ONE SLOT IN THIS BLOCK WHERE THE WORDS CARRY POLITICS. Written to name
// what the words MEAN and how Norwegians actually use them, not to take a side:
// et utenforskap is a real term in Norwegian policy writing, ei stigmatisering
// is what a label does to a person, and et urfolk is a legal status the Sámi
// hold, not a description. Where a word is contested, the hint says so plainly
// rather than pretending it is neutral.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT99 = {
  id: "no-u99",
  lang: "no",
  title: "Identitet og samfunn",
  order: 99,
  stage: "b2",
  lessons: [
    {
      id: "no-u99l1",
      unit: 99,
      lesson: 1,
      title: "Hvem hører til",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about belonging — who is inside, who is left out, and what actually connects somebody to a place.",
      items: [
        { id: "no-u99l1-enidentitet", type: "vocab", front: "en identitet", reading: "enidentitet", meaning: "identity (who somebody takes themselves to be)", example: { jp: "En identitet er ikke én ting, og de fleste bærer flere samtidig.", en: "An identity is not one thing, and most people carry several at once." }, accept: ["sense of who one is", "self-definition"], drill: { jp: "Dette er en identitet hun deler", en: "This is an identity she shares" }, hint: "en identitet → identiteten, flertall identiteter. -itet er HANKJØNN (unit88 regel B3). ⚠️ Også papirene dine: å vise identitet i banken." },
        { id: "no-u99l1-entilhorighet", type: "vocab", front: "en tilhørighet", reading: "entilhorighet", meaning: "sense of belonging (feeling you are one of them)", example: { jp: "Hun fikk en tilhørighet til stedet lenge før hun forstår språket.", en: "She gains a sense of belonging to the place long before she understands the language." }, accept: ["feeling of being part of", "attachment to a group"], drill: { jp: "Han savner en tilhørighet her", en: "He lacks a sense of belonging here" }, hint: "en tilhørighet → tilhørigheten. -het er HANKJØNN (unit88 regel B3), aldri ei. Å høre til + -het. En FØLELSE, ikke en rett. ø folder til o." },
        { id: "no-u99l1-etutenforskap", type: "vocab", front: "et utenforskap", reading: "etutenforskap", meaning: "exclusion (standing outside the ordinary life of a society)", example: { jp: "Et utenforskap begynner sjelden med en dør som blir stengt, men med mange små.", en: "Exclusion rarely begins with one door being shut, but with many small ones." }, accept: ["being on the outside", "social exclusion"], drill: { jp: "Dette er et utenforskap vi ser", en: "This is an exclusion we can see" }, hint: "et utenforskap → utenforskapet. Utenfor + -skap. ⚠️ Fast ord i norsk politikk: å stå utenfor skole, arbeid og fellesskap (u68)." },
        { id: "no-u99l1-eitilknytning", type: "vocab", front: "ei tilknytning", reading: "eitilknytning", meaning: "a tie (a concrete link to a place or group)", example: { jp: "Han har ei tilknytning til landet gjennom mora, og det holder for loven.", en: "He has a tie to the country through his mother, and that is enough for the law." }, accept: ["a formal connection", "a link that counts"], drill: { jp: "Hun har ei tilknytning til byen", en: "She has a tie to the town" }, hint: "ei tilknytning → tilknytninga. -ning er hunkjønn (unit88 regel B3). Til + å knytte. ⚠️ En tilhørighet FØLES; ei tilknytning kan vises fram på papir." },
        { id: "no-u99l1-eideltaking", type: "vocab", front: "ei deltaking", reading: "eideltaking", meaning: "participation (actually taking part, not just being allowed to)", example: { jp: "Ei deltaking på papiret er ikke nok, og det vet alle som prøver.", en: "Participation on paper is not enough, and everybody who tries knows that." }, accept: ["taking part", "active involvement"], drill: { jp: "Vi ønsker ei deltaking fra alle", en: "We want participation from everybody" }, hint: "ei deltaking → deltakinga. -ing er hunkjønn (unit88 regel B3). Fra å delta (u21). Formen deltakelse er også lov — begge er bokmål." },
        { id: "no-u99l1-etsjikt", type: "vocab", front: "et sjikt", reading: "etsjikt", meaning: "stratum (one layer of a society, seen from outside)", example: { jp: "Det er et sjikt i byen som aldri møter de andre, og de vet det ikke selv.", en: "There is a stratum in the town that never meets the others, and they do not know it themselves." }, accept: ["a layer of society", "a social tier"], drill: { jp: "Dette er et sjikt vi glemmer", en: "This is a stratum we forget" }, hint: "et sjikt → sjiktet, flertall sjikt (likt i flertall). Uttales med sj-lyd (u1). ⚠️ Et sjikt er et ORD UTENFRA — ingen sier at de sjøl er i et sjikt." },
      ],
    },
    {
      id: "no-u99l2",
      unit: 99,
      lesson: 2,
      title: "Forskjellsbehandling",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name unfair treatment precisely — the act itself, the label that sticks, and being pushed to the edge.",
      items: [
        { id: "no-u99l2-eidiskriminering", type: "vocab", front: "ei diskriminering", reading: "eidiskriminering", meaning: "discrimination (treating somebody worse for who they are)", example: { jp: "Ei diskriminering trenger ikke være ment slik for å være mot loven.", en: "Discrimination does not have to be meant that way in order to be against the law." }, accept: ["unequal treatment on grounds of identity", "unlawful differential treatment"], drill: { jp: "Dette er ei diskriminering av dem", en: "This is a discrimination against them" }, hint: "ei diskriminering → diskrimineringa. -ing er hunkjønn (unit88 regel B3). ⚠️ I norsk lov teller VIRKNINGA, ikke hensikten (u50)." },
        { id: "no-u99l2-eistigmatisering", type: "vocab", front: "ei stigmatisering", reading: "eistigmatisering", meaning: "stigmatisation (making a trait into a mark against somebody)", example: { jp: "Ei stigmatisering gjør at folk lar være å søke hjelp, og da blir alt verre.", en: "Stigmatisation makes people avoid seeking help, and then everything gets worse." }, accept: ["marking somebody out negatively", "attaching shame to a trait"], drill: { jp: "Her ser vi ei stigmatisering av syke", en: "Here we see a stigmatisation of the ill" }, hint: "ei stigmatisering → stigmatiseringa. -ing er hunkjønn. ⚠️ Ei diskriminering er en HANDLING; ei stigmatisering er hva folk TENKER om deg etterpå." },
        { id: "no-u99l2-etstempel", type: "vocab", front: "et stempel", reading: "etstempel", meaning: "a label that sticks (a judgement somebody cannot get rid of)", example: { jp: "Han fikk et stempel som ung, og han bærer det fortsatt.", en: "He got a label when he was young, and he is still carrying it." }, accept: ["a brand put on somebody", "a lasting reputation"], drill: { jp: "Hun fikk et stempel her", en: "She got a label here" }, hint: "et stempel → stempelet, flertall stempler. Egentlig det du trykker på et papir. ⚠️ Fast uttrykk: å få et stempel, å bli stemplet som noe." },
        { id: "no-u99l2-enminoritet", type: "vocab", front: "en minoritet", reading: "enminoritet", meaning: "minority group (a people who are fewer within a larger society)", example: { jp: "En minoritet kan ha rett uten å ha flertallet, og derfor verner loven dem.", en: "A minority can be right without having the majority, and that is why the law protects them." }, accept: ["a smaller group within society", "a minority people"], drill: { jp: "De er en minoritet i landet", en: "They are a minority in the country" }, hint: "en minoritet → minoriteten, flertall minoriteter. -itet er HANKJØNN (unit88 regel B3). ⚠️ Et mindretall (u92) er om STEMMER i en sak; en minoritet er om FOLK." },
        { id: "no-u99l2-eimarginalisering", type: "vocab", front: "ei marginalisering", reading: "eimarginalisering", meaning: "marginalisation (being pushed to the edge over time)", example: { jp: "Ei marginalisering skjer sakte, og ingen kan peke på dagen den begynner.", en: "Marginalisation happens slowly, and nobody can point to the day it begins." }, accept: ["being pushed to the margins", "gradual sidelining"], drill: { jp: "Vi ser ei marginalisering av unge", en: "We see a marginalisation of the young" }, hint: "ei marginalisering → marginaliseringa. -ing er hunkjønn. Fra marginal (u91), kanten. Et utenforskap (l1) er TILSTANDEN; dette er veien dit." },
        { id: "no-u99l2-etflertallssamfunn", type: "vocab", front: "et flertallssamfunn", reading: "etflertallssamfunn", meaning: "majority society (the way of life everybody is measured against)", example: { jp: "Et flertallssamfunn ser ikke sine egne normer, for de er bare slik ting er.", en: "A majority society does not see its own norms, because they are just how things are." }, accept: ["the mainstream of a society", "the dominant society"], drill: { jp: "Dette er et flertallssamfunn som andre", en: "This is a majority society like others" }, hint: "et flertallssamfunn → flertallssamfunnet. Et flertall (u53) + et samfunn (u32). To s-er i midten. Brukes særlig når man snakker om urfolk (l4)." },
      ],
    },
    {
      id: "no-u99l3",
      unit: 99,
      lesson: 3,
      title: "Å passe inn",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about fitting in and refusing to — what is expected of you, what it costs to break with it, and being seen as you are.",
      items: [
        { id: "no-u99l3-eiintegrering", type: "vocab", front: "ei integrering", reading: "eiintegrering", meaning: "integration (joining a society while staying yourself)", example: { jp: "Ei integrering som bare går én vei heter noe annet, og folk merker forskjellen.", en: "An integration that only goes one way is called something else, and people notice the difference." }, accept: ["being brought into a society", "becoming part of it"], drill: { jp: "Dette handler om ei integrering", en: "This is about an integration" }, hint: "ei integrering → integreringa. -ing er hunkjønn (unit88 regel B3). ⚠️ Ordet er omstridt i norsk debatt fordi folk mener ulike ting med det — noen mener å delta, andre mener å bli lik." },
        { id: "no-u99l3-eitilpasning", type: "vocab", front: "ei tilpasning", reading: "eitilpasning", meaning: "adaptation (changing yourself to fit what is there)", example: { jp: "Ei tilpasning koster noe hver gang, og sjelden for den som ønsker den.", en: "An adaptation costs something every time, and rarely for the one who wants it." }, accept: ["adjusting oneself to fit", "an accommodation made"], drill: { jp: "Her trenger vi ei tilpasning til", en: "Here we need one more adaptation" }, hint: "ei tilpasning → tilpasninga. -ning er hunkjønn. Til + å passe. ⚠️ Også positivt og teknisk: ei tilpasning av en arbeidsplass for en som trenger det." },
        { id: "no-u99l3-eirolleforventning", type: "vocab", front: "ei rolleforventning", reading: "eirolleforventning", meaning: "role expectation (what people assume you will do, being who you are)", example: { jp: "Ei rolleforventning sier du aldri høyt, og likevel merker alle når du bryter den.", en: "A role expectation you never say out loud, and yet everybody notices when you break it." }, accept: ["an unspoken expectation of a role", "what is assumed of you"], drill: { jp: "Dette er ei rolleforventning vi kjenner", en: "This is a role expectation we know" }, hint: "ei rolleforventning → rolleforventninga. -ning er hunkjønn. Ei rolle (u35) + ei forventning (u71). En norm (u61) gjelder alle; denne gjelder DEG." },
        { id: "no-u99l3-abrytemed", type: "vocab", front: "å bryte med", reading: "abrytemed", meaning: "to break with (step out of what was expected of you)", example: { jp: "Det er dyrt å bryte med det familien venter, og noen gjør det likevel.", en: "It is costly to break with what the family expects, and some do it anyway." }, accept: ["to break away from", "to depart from what was expected"], drill: { jp: "Det er tungt å bryte med alt", en: "It is hard to break with everything" }, hint: "Å bryte + med. ⚠️ Du bryter MED en tradisjon eller en person, og du bryter en regel — ulik preposisjon, ulik betydning." },
        { id: "no-u99l3-enanerkjennelse", type: "vocab", front: "en anerkjennelse", reading: "enanerkjennelse", meaning: "recognition (being seen as what you actually are)", example: { jp: "En anerkjennelse betyr mer enn penger for mange, og den koster ingenting å gi.", en: "Recognition means more than money to many people, and it costs nothing to give." }, accept: ["being acknowledged", "due acknowledgement"], drill: { jp: "Dette er en anerkjennelse vi savner", en: "This is a recognition we lack" }, hint: "en anerkjennelse → anerkjennelsen. -else er HANKJØNN (unit88 regel B3), aldri ei. An + å erkjenne. Å rose (u49) er om noe du GJORDE; dette er om hvem du ER." },
        { id: "no-u99l3-enselvforstaelse", type: "vocab", front: "en selvforståelse", reading: "enselvforstaelse", meaning: "self-understanding (the story somebody tells about themselves)", example: { jp: "En selvforståelse kan være feil og likevel styre hvert valg du tar.", en: "A self-understanding can be wrong and still govern every choice you make." }, accept: ["how one sees oneself", "one's own account of oneself"], drill: { jp: "Dette er en selvforståelse vi møter", en: "This is a self-understanding we meet" }, hint: "en selvforståelse → selvforståelsen. -else er HANKJØNN (unit88 regel B3). Selv + å forstå (u9). En identitet (l1) er hva du ER; dette er hva du TROR du er." },
      ],
    },
    {
      id: "no-u99l4",
      unit: 99,
      lesson: 4,
      title: "Språk, klasse og urfolk",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about the divides Norwegians actually discuss — dialect, class, generation, and the rights of an indigenous people.",
      items: [
        { id: "no-u99l4-endialekt", type: "vocab", front: "en dialekt", reading: "endialekt", meaning: "dialect (the local way of speaking, kept in public)", example: { jp: "I Norge snakker folk sin egen dialekt på radio, og det er ikke slik i alle land.", en: "In Norway people speak their own dialect on the radio, and it is not like that in every country." }, accept: ["a regional way of speaking", "local speech"], drill: { jp: "Han snakker en dialekt fra nord", en: "He speaks a dialect from the north" }, hint: "en dialekt → dialekten, flertall dialekter. ⚠️ NORSK SÆRTREKK: ingen talemålsnorm. Du beholder dialekten din som lærer, som lege og på tv." },
        { id: "no-u99l4-etspraksamfunn", type: "vocab", front: "et språksamfunn", reading: "etspraksamfunn", meaning: "speech community (everybody who shares one way of speaking)", example: { jp: "Et språksamfunn holder sammen om hva ord betyr, uten å bli enige om det.", en: "A speech community holds together about what words mean, without agreeing about it." }, accept: ["a linguistic community", "the speakers of one variety"], drill: { jp: "Dette er et språksamfunn for seg", en: "This is a speech community of its own" }, hint: "et språksamfunn → språksamfunnet. Et språk (u1) + et samfunn (u32). Norge har to skriftspråk (bokmål og nynorsk) i ett språksamfunn." },
        { id: "no-u99l4-eigenerasjonskloft", type: "vocab", front: "ei generasjonskløft", reading: "eigenerasjonskloft", meaning: "generation gap (the distance between young and old in how they see things)", example: { jp: "Ei generasjonskløft handler sjelden om alder, men om hva folk har sett.", en: "A generation gap is rarely about age, but about what people have seen." }, accept: ["a gulf between generations", "an age divide"], drill: { jp: "Her er ei generasjonskløft vi ser", en: "Here is a generation gap we can see" }, hint: "ei generasjonskløft → generasjonskløfta. Ei kløft er en sprekk i fjellet. Ø folder til o, så lesinga er eigenerasjonskloft." },
        { id: "no-u99l4-eturfolk", type: "vocab", front: "et urfolk", reading: "eturfolk", meaning: "indigenous people (a people who were there before the state)", example: { jp: "Et urfolk har egne rettigheter fordi de var her før landet ble til.", en: "An indigenous people has its own rights because they were here before the country came about." }, accept: ["an aboriginal people", "a first people"], drill: { jp: "Dette folket er et urfolk i Norge", en: "This people is an indigenous people in Norway" }, hint: "et urfolk → urfolket, flertall urfolk (likt). Ur- betyr opprinnelig. ⚠️ En STATUS i norsk lov, ikke en beskrivelse: samene har eget språk, eget ting og egne rettigheter." },
        { id: "no-u99l4-ensamfunnsklasse", type: "vocab", front: "en samfunnsklasse", reading: "ensamfunnsklasse", meaning: "social class (the group you are born into economically)", example: { jp: "Mange i Norge mener at en samfunnsklasse ikke betyr noe her, og tallene sier noe annet.", en: "Many in Norway think that social class does not matter here, and the figures say otherwise." }, accept: ["a class in society", "an economic stratum"], drill: { jp: "Dette handler om en samfunnsklasse", en: "This is about a social class" }, hint: "en samfunnsklasse → samfunnsklassen, flertall samfunnsklasser. Et samfunn (u32) + ei klasse (u85). Et sjikt (l1) er beskrivende; klasse er politisk." },
        { id: "no-u99l4-etklasseskille", type: "vocab", front: "et klasseskille", reading: "etklasseskille", meaning: "class divide (the line that keeps the classes apart)", example: { jp: "Et klasseskille går ikke bare på penger, men på hvem du kjenner fra før.", en: "A class divide does not run only on money, but on who you already know." }, accept: ["a divide between classes", "a social barrier"], drill: { jp: "Her går et klasseskille i byen", en: "Here a class divide runs through the town" }, hint: "et klasseskille → klasseskillet, flertall klasseskiller. Ei klasse + et skille. ⚠️ Norsk debatt bruker dette oftere enn ordet klasse aleine." },
      ],
    },
  ],
};
