// NO Unit 92 — Politikk og rett (slot: politics-law) — B2
// Block 1 of Norwegian B2. Band constitution: no/unit88.js §C1–C7.
//
// Blocked before authoring: `en lov` u32, `et parti` u32, `en borger` u32,
// `en stat` u32, `en politiker` u32, `en kommune` u32, `ei regjering` u55,
// `en rettighet` u55, `ei bot` u55, `en straff` u55, `rettferdig` u55,
// `et vedtak` u78, `et flertall` u53, `en dommer` u44, `en debatt` u55,
// `å stemme` u32, `å anmelde` u55, `å krenke` u61. A2 and B1 between them had
// already built the CIVICS layer, so this unit is the two halves they left:
// how a decision is actually made (l1–l2) and what happens in court (l3–l4).
//
// `et storting` was drafted and CUT: the word is used in the definite in
// essentially every real sentence (Stortinget), so no natural 3–8-token drill
// contains the indefinite front — the same reason u87 dropped `politiet`.
// `ei rettferdighet` was cut as a transparent derivation of `rettferdig` (u55);
// `en rettssikkerhet` took its place and is the word Norwegian actually uses.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT92 = {
  id: "no-u92",
  lang: "no",
  title: "Politikk og rett",
  order: 92,
  stage: "b2",
  lessons: [
    {
      id: "no-u92l1",
      unit: 92,
      lesson: 1,
      title: "Vedtak og avstemning",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow a Norwegian political decision from proposal to vote — who put it forward, who was consulted, and who ended up in the minority.",
      items: [
        { id: "no-u92l1-eiavstemning", type: "vocab", front: "ei avstemning", reading: "eiavstemning", meaning: "ballot (vote taken)", example: { jp: "Avstemninga ble utsatt til neste uke, og da var halvparten på ferie.", en: "The ballot was postponed until the following week, and by then half of them were on holiday." }, accept: ["a vote", "a poll"], drill: { jp: "De hadde ei avstemning om saka", en: "They had a ballot about the case" }, hint: "ei avstemning → avstemninga. -ing/-ning-ord er hunkjønn; avstemningen finnes også i trykk, og begge er tillatt i bokmål. Av + å stemme (u32). Ei folkeavstemning er den hele landet er med på." },
        { id: "no-u92l1-enopposisjon", type: "vocab", front: "en opposisjon", reading: "enopposisjon", meaning: "opposition (political)", example: { jp: "Opposisjonen var uenig i alt, helt til de selv kom i regjering.", en: "The opposition disagreed with everything, right up until they were in government themselves." }, accept: ["the opposition"], drill: { jp: "Vi trenger en opposisjon som virker", en: "We need an opposition that works" }, hint: "en opposisjon → opposisjonen. -sjon-ord er hankjønn. Partiene (u32) som ikke sitter i regjering (u55)." },
        { id: "no-u92l1-etmindretall", type: "vocab", front: "et mindretall", reading: "etmindretall", meaning: "minority (in a vote)", example: { jp: "Et mindretall var uenig, men de fikk likevel kravet sitt gjennom.", en: "A minority disagreed, but they got their demand through anyway." }, accept: ["a minority"], drill: { jp: "Bare et mindretall var uenige", en: "Only a minority disagreed" }, hint: "et mindretall → mindretallet, flertall mindretall. Mindre + et tall (u5). Paret til et flertall (u53). Om tall i en avstemning — en minoritet er om folkegrupper." },
        { id: "no-u92l1-etlovforslag", type: "vocab", front: "et lovforslag", reading: "etlovforslag", meaning: "bill (proposed law)", example: { jp: "Lovforslaget er nytt, men mye i det er kjent fra før.", en: "The bill is new, but much in it is familiar from before." }, accept: ["a draft law", "a legislative proposal"], drill: { jp: "De la fram et lovforslag i går", en: "They put forward a bill yesterday" }, hint: "et lovforslag → lovforslaget, flertall lovforslag. En lov (u32) + et forslag. Blir lov først når det er vedtatt (l2)." },
        { id: "no-u92l1-etmandat", type: "vocab", front: "et mandat", reading: "etmandat", meaning: "seat (parliamentary mandate)", example: { jp: "Partiet har fire mandater, men bruker dem sjelden.", en: "The party has four seats, but rarely uses them." }, accept: ["a mandate", "a parliamentary seat"], drill: { jp: "De vant et mandat til i nord", en: "They won one more seat in the north" }, hint: "et mandat → mandatet, flertall mandater. To liv: plassen i salen, og oppdraget du har fått av dem som valgte deg." },
        { id: "no-u92l1-eihoring", type: "vocab", front: "ei høring", reading: "eihoring", meaning: "public consultation", example: { jp: "Høringa varte i tre måneder, og nesten ingen svarte.", en: "The consultation lasted three months, and almost nobody answered." }, accept: ["a hearing", "a consultation"], drill: { jp: "Saka skal ut på ei høring", en: "The case is going out to consultation" }, hint: "ei høring → høringa. -ing-ord er hunkjønn; høringen er vanlig i trykk. Merk ø-folden: lesinga er eihoring. Fra å høre (u11) — alle får si sitt før vedtaket." },
      ],
    },
    {
      id: "no-u92l2",
      unit: 92,
      lesson: 2,
      title: "Lov og forvaltning",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how a Norwegian law is made and applied — adopted, administered, enforced, and where the line between legal and illegal actually falls.",
      items: [
        { id: "no-u92l2-engrunnlov", type: "vocab", front: "en grunnlov", reading: "engrunnlov", meaning: "constitution", example: { jp: "Grunnloven er gammel, men den er ikke helt den samme som før.", en: "The constitution is old, but it is not quite the same as it was." }, accept: ["a constitution", "basic law"], drill: { jp: "Vi har en grunnlov som gjelder", en: "We have a constitution that applies" }, hint: "en grunnlov → grunnloven, flertall grunnlover. En grunn (u32) + en lov (u32). Den norske er fra 1814 og feires 17. mai (u86)." },
        { id: "no-u92l2-eiforvaltning", type: "vocab", front: "ei forvaltning", reading: "eiforvaltning", meaning: "public administration", example: { jp: "Forvaltninga bruker lang tid, men den følger reglene helt ut.", en: "The public administration takes a long time, but it follows the rules all the way." }, accept: ["the civil service", "administration"], drill: { jp: "Dette er ei forvaltning som virker", en: "This is a public administration that works" }, hint: "ei forvaltning → forvaltninga. -ing/-ning-ord er hunkjønn; forvaltningen er vanlig i trykk. Fra å forvalte. Alle kontorene som setter lovene ut i livet." },
        { id: "no-u92l2-avedta", type: "vocab", front: "å vedta", reading: "avedta", meaning: "to adopt (pass formally)", example: { jp: "Kommunen vedtok planen uten å høre på noen.", en: "The council adopted the plan without listening to anybody." }, accept: ["to pass", "to resolve", "to enact"], drill: { jp: "Det er lett å vedta nye regler", en: "It is easy to adopt new rules" }, hint: "å vedta → vedtar, vedtok. Bøyes som å ta. Et vedtak (u78) er resultatet. Bare et organ kan vedta noe — en person bestemmer (u21)." },
        { id: "no-u92l2-ahandheve", type: "vocab", front: "å håndheve", reading: "ahandheve", meaning: "to enforce", example: { jp: "Regelen finnes, men ingen håndhever den.", en: "The rule exists, but nobody enforces it." }, accept: ["to apply (a rule)", "to uphold"], drill: { jp: "Det er dyrt å håndheve slike regler", en: "It is expensive to enforce rules like these" }, hint: "å håndheve → håndhever, håndhevet. Ei hånd (u11) + å heve. Å vedta er å lage regelen; å håndheve er å passe på (u87) at den blir fulgt." },
        { id: "no-u92l2-lovlig", type: "vocab", front: "lovlig", reading: "lovlig", meaning: "lawful", example: { jp: "Det er lovlig, men det er ikke dermed greit.", en: "It is lawful, but that does not make it all right." }, accept: ["legal", "permitted"], drill: { jp: "Alt dette er helt lovlig", en: "All of this is entirely lawful" }, hint: "lovlig → lovlig, lovlige. En lov (u32) + -lig. Lovlig og ulovlig handler om regler; riktig (u51) og galt (u60) om moral." },
        { id: "no-u92l2-ulovlig", type: "vocab", front: "ulovlig", reading: "ulovlig", meaning: "unlawful", example: { jp: "Det er ulovlig å parkere her, men alle gjør det likevel.", en: "It is unlawful to park here, but everybody does it anyway." }, accept: ["illegal", "against the law"], drill: { jp: "Dette er ulovlig i hele Norge", en: "This is unlawful in the whole of Norway" }, hint: "ulovlig → ulovlig, ulovlige. U- + lovlig. Merk forskjellen i følgene: ulovlig parkering gir ei bot (u55), ikke straff (u55)." },
      ],
    },
    {
      id: "no-u92l3",
      unit: 92,
      lesson: 3,
      title: "I retten",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow a Norwegian court case — name the court, the lawyer, the charge, the witness, and what the court finally did.",
      items: [
        { id: "no-u92l3-endomstol", type: "vocab", front: "en domstol", reading: "endomstol", meaning: "court (institution)", example: { jp: "Domstolen bruker år på en slik sak, og ingen blir fornøyd.", en: "The court spends years on a case like that, and nobody ends up happy." }, accept: ["a tribunal", "a court of law"], drill: { jp: "Saka går til en domstol nå", en: "The case is going to a court now" }, hint: "en domstol → domstolen, flertall domstoler. En dom + en stol. Institusjonen; sjølve rommet er en rettssal (l4)." },
        { id: "no-u92l3-eirettssak", type: "vocab", front: "ei rettssak", reading: "eirettssak", meaning: "trial (court case)", example: { jp: "Rettssaka varte i fem uker, og alle avisene fulgte den.", en: "The trial lasted five weeks, and all the papers followed it." }, accept: ["legal proceedings", "a court case"], drill: { jp: "Det blir ei rettssak av dette", en: "This is going to end in a trial" }, hint: "ei rettssak → rettssaka. Følger ei sak (u50) og er hunkjønn; rettssaken finnes også i trykk. En rett + ei sak, med to s-er i skjøten." },
        { id: "no-u92l3-enadvokat", type: "vocab", front: "en advokat", reading: "enadvokat", meaning: "lawyer (advocate)", example: { jp: "Advokaten hennes sa ingenting på hele den første dagen.", en: "Her lawyer said nothing for the whole of the first day." }, accept: ["an attorney", "a solicitor", "a barrister"], drill: { jp: "Hun har en advokat som er grundig", en: "She has a lawyer who is thorough" }, hint: "en advokat → advokaten, flertall advokater. Trykket på siste stavelse: advo-KAT. En jurist har utdanninga; en advokat har rett til å møte i retten." },
        { id: "no-u92l3-entiltale", type: "vocab", front: "en tiltale", reading: "entiltale", meaning: "indictment (charge)", example: { jp: "Tiltalen kom to år etter, og da husket ingen noe som helst.", en: "The indictment came two years later, and by then nobody remembered a thing." }, accept: ["a charge", "a prosecution"], drill: { jp: "De tok ut en tiltale mot ham", en: "They brought a charge against him" }, hint: "en tiltale → tiltalen, flertall tiltaler. Å tiltale er verbet. Å ta ut tiltale er det faste uttrykket for å reise saka." },
        { id: "no-u92l3-adomme", type: "vocab", front: "å dømme", reading: "adomme", meaning: "to convict (pass judgement)", example: { jp: "Domstolen dømte ham, men straffa ble mye mindre enn ventet.", en: "The court convicted him, but the sentence turned out much lighter than expected." }, accept: ["to judge", "to sentence", "to rule"], drill: { jp: "Det er lett å dømme andre", en: "It is easy to judge other people" }, hint: "å dømme → dømmer, dømte. Merk ø-folden: lesinga er adomme. En dommer (u44) både i retten og i fotball. Å dømme noen er også å mene noe hardt om dem." },
        { id: "no-u92l3-etvitne", type: "vocab", front: "et vitne", reading: "etvitne", meaning: "witness", example: { jp: "Vitnet husket ingenting, og saka kom ikke lenger.", en: "The witness remembered nothing, and the case got no further." }, accept: ["a witness"], drill: { jp: "De fant et vitne i går", en: "They found a witness yesterday" }, hint: "et vitne → vitnet, flertall vitner. Intetkjønn selv om det er en person, akkurat som et menneske (u34). Å vitne er verbet." },
      ],
    },
    {
      id: "no-u92l4",
      unit: 92,
      lesson: 4,
      title: "Skyld og forbud",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say who is guilty of what, what is banned outright, and what is supposed to stop a person being convicted unfairly.",
      items: [
        { id: "no-u92l4-skyldig", type: "vocab", front: "skyldig", reading: "skyldig", meaning: "guilty", example: { jp: "Han ble funnet skyldig, men ingen var overrasket.", en: "He was found guilty, but nobody was surprised." }, accept: ["at fault", "culpable"], drill: { jp: "Ingen tror han er skyldig", en: "Nobody thinks he is guilty" }, hint: "skyldig → skyldig, skyldige. Fra å skylde (u27). To liv: skyldig i retten, og skyldig penger til noen." },
        { id: "no-u92l4-uskyldig", type: "vocab", front: "uskyldig", reading: "uskyldig", meaning: "innocent", example: { jp: "Hun var uskyldig hele tida, men det tok ni år å vise det.", en: "She was innocent the whole time, but it took nine years to show it." }, accept: ["not guilty", "blameless"], drill: { jp: "Han var uskyldig fra første dag", en: "He was innocent from the first day" }, hint: "uskyldig → uskyldig, uskyldige. U- + skyldig. Også om noe helt harmløst: et uskyldig spørsmål." },
        { id: "no-u92l4-enparagraf", type: "vocab", front: "en paragraf", reading: "enparagraf", meaning: "section (of a statute)", example: { jp: "Alt sammen handler om én paragraf, og ingen er helt enige om den.", en: "All of it turns on one section, and nobody entirely agrees about it." }, accept: ["a clause", "a provision", "a paragraph (of law)"], drill: { jp: "Dette står i en paragraf til", en: "This is in one more section" }, hint: "en paragraf → paragrafen, flertall paragrafer. Trykket på siste stavelse: para-GRAF. Tegnet § leses «paragraf»." },
        { id: "no-u92l4-etforbud", type: "vocab", front: "et forbud", reading: "etforbud", meaning: "ban (prohibition)", example: { jp: "Forbudet kom i mai, og siden har prisene bare gått opp.", en: "The ban came in May, and since then the prices have only gone up." }, accept: ["a prohibition"], drill: { jp: "De innførte et forbud mot dette", en: "They brought in a ban on this" }, hint: "et forbud → forbudet, flertall forbud. Fra å forby. Alltid et forbud MOT noe, aldri for noe." },
        { id: "no-u92l4-enrettssikkerhet", type: "vocab", front: "en rettssikkerhet", reading: "enrettssikkerhet", meaning: "due process", example: { jp: "Rettssikkerheten er god i Norge, men den tar både tid og penger.", en: "Due process is good in Norway, but it takes both time and money." }, accept: ["legal protection", "rule of law"], drill: { jp: "Dette handler om en rettssikkerhet alle har", en: "This is about a legal protection everybody has" }, hint: "en rettssikkerhet → rettssikkerheten. -het-ord er hankjønn (regel 1), aldri ei. En rett + sikkerhet (u87): at ingen dømmes uten lov og bevis." },
        { id: "no-u92l4-enrettssal", type: "vocab", front: "en rettssal", reading: "enrettssal", meaning: "courtroom", example: { jp: "Rettssalen var helt full, men bare to av dem fikk si noe.", en: "The courtroom was completely full, but only two of them got to say anything." }, accept: ["a court room"], drill: { jp: "Hun sto foran en rettssal i Oslo", en: "She stood in front of a courtroom in Oslo" }, hint: "en rettssal → rettssalen, flertall rettssaler. En rett + en sal, med to s-er i skjøten. Rommet; institusjonen er en domstol (l3)." },
      ],
    },
  ],
};
