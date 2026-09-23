// NO Unit 122 — Tillit, løfter og omdømme (slot: coverage-b2-12) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 12 (B2)" — a slot number, not an instruction.
// Theme chosen here. Conventions: unit1.js §1–§9, unit51.js B1–B9, unit88.js
// C1–C7.
//
// WHY THIS THEME. u97 took ETHICS (right and wrong) and u113 CHARACTER (what a
// person is like). Neither covers the currency those two are spent in: whether
// you can be RELIED ON, what you have bound yourself to, and what happens to
// your name when you fail. The corpus had `tillit` (u68), `pålitelig` (u54),
// `å stole på` (u54), `troverdig` (u89), `et rykte` (u49), `å love` (u17) —
// enough to say that trust exists, not enough to argue about who has lost it.
//   l1  binding yourself to something
//   l2  doing what you said
//   l3  when the trust goes
//   l4  what is left of your name afterwards
//
// ⚠ CUT, and each for a different reason:
//   • `en garanti` — would sit in the same LESSON as `å garantere`. One card.
//   • `en lojalitet` — same lesson as `lojal`. One card.
//   • `uredelig` — a transparent negation of `redelig`, which this unit teaches
//     one lesson earlier. Same learning twice.
//   • `å mistro` — too close to `mistillit` to sit in the same lesson with it;
//     `å så tvil` took the slot and is the move people actually make.
//   • `ei mistru` — nynorsk form; this corpus is Bokmål (unit1.js).
//
// ⚠ GENDER, AND TWO BARE NOUNS. `mistillit` (l3) and `tiltro` (l4) are taught
// BARE, with no article, exactly as `tillit` (u68), `makt` and `forskning`
// already are in this corpus: the indefinite singular «en tiltro» is not
// idiomatic Norwegian, and unit1.js §1 says the test is idiom, not countability.
// Their gender is named in the hint instead. `et omdømme` is neuter, `en
// anseelse` masculine (-else ALWAYS is), `ei anbefaling` and `ei oppreisning`
// feminine (-ing/-ning ALWAYS are).
// FIRST FEMININE is `ei anbefaling` (l1) and carries the en-/ei- note.
//
// DRILLS: å-verb drills use an å-frame; adjective drills take a COMMON-GENDER
// SINGULAR subject so the front appears verbatim.
//
// SCOPE: the frozen base u1–u121 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT122 = {
  id: "no-u122",
  lang: "no",
  title: "Tillit, løfter og omdømme",
  order: 122,
  stage: "b2",
  lessons: [
    {
      id: "no-u122l1",
      unit: 122,
      lesson: 1,
      title: "Å binde deg til noe",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Bind yourself to something in public — and know how much you have bound yourself with each of these words.",
      items: [
        { id: "no-u122l1-aforpliktetseg", type: "vocab", front: "å forplikte seg", reading: "aforplikteseg", meaning: "to commit oneself (take on a duty)", example: { jp: "De forplikter seg til tre år, og i avtalen står det at de kan gå ut etter det første.", en: "They commit themselves to three years, and the agreement says they can leave after the first." }, accept: ["to undertake", "to bind oneself"], drill: { jp: "Det er dyrt å forplikte seg for lenge", en: "It is expensive to commit oneself for too long" }, hint: "å forplikte seg → forplikter seg, forpliktet seg, har forpliktet seg. Alltid med seg og med til. Ei plikt + for. ⚠ Det TYNGSTE ordet i leksjonen: en forpliktelse (u97) kan tvinges gjennom, et løfte kan bare brytes." },
        { id: "no-u122l1-etlofte", type: "vocab", front: "et løfte", reading: "etlofte", meaning: "a promise (a word given, with nothing behind it but your name)", example: { jp: "Det var et løfte og ikke en avtale, og nettopp derfor kan ingen gjøre noe med det nå.", en: "It was a promise and not an agreement, and that is exactly why nobody can do anything about it now." }, accept: ["a pledge", "a promise"], drill: { jp: "Det var et løfte og ikke mer", en: "It was a promise and nothing more" }, hint: "et løfte → løftet, flertall løfter. Merk ø-folden: lesinga er etlofte. Fra å love (u17). ⚠ Også «et løft» i betydningen å løfte noe — men et LØFTE med e er alltid ordet du gir. Fast vending: «å holde et løfte»." },
        { id: "no-u122l1-aholdeord", type: "vocab", front: "å holde ord", reading: "aholdeord", meaning: "to keep one's word (do what you said you would)", example: { jp: "Han holder ord hver gang, og derfor kan han si nei uten at noen blir sint.", en: "He keeps his word every time, and that is why he can say no without anybody getting angry." }, accept: ["to be as good as one's word"], drill: { jp: "Det lønner seg å holde ord her", en: "It pays to keep one's word here" }, hint: "å holde ord → holder, holdt, har holdt. Fast uttrykk UTEN artikkel: «å holde ord», aldri «å holde et ord». ⚠ Den høyeste rosen i norsk arbeidsliv, og den sies sjelden høyt — den merkes." },
        { id: "no-u122l1-ainnestafor", type: "vocab", front: "å innestå for", reading: "ainnestafor", meaning: "to vouch for (put your own name behind a claim)", example: { jp: "Hun innestår for tallene, og hun er den ene i hele huset som har regnet dem selv.", en: "She vouches for the figures, and she is the one in the building who has worked them out herself." }, accept: ["to stand behind", "to warrant"], drill: { jp: "Hun pleier å innestå for alle tallene", en: "She tends to vouch for all the figures" }, hint: "å innestå for → innestår, innesto, har innestått. Inne + å stå. ⚠ Formelt og juridisk: du innestår for OPPLYSNINGER, og du hefter for dem hvis de er gale. Du innestår ikke for en person." },
        { id: "no-u122l1-eianbefaling", type: "vocab", front: "ei anbefaling", reading: "eianbefaling", meaning: "a recommendation (your name lent to somebody else)", example: { jp: "Anbefalinga er sterk, og den er skrevet av noen som bare kjenner ham fra to møter.", en: "The recommendation is strong, and it is written by somebody who only knows him from two meetings." }, accept: ["a reference", "an endorsement"], drill: { jp: "Vi fikk ei anbefaling ingen ville ha", en: "We got a recommendation nobody wanted" }, hint: "ei anbefaling → anbefalinga. Hunkjønnsord kan du også skrive en anbefaling / anbefalingen, og den formen er den vanligste i skrift — merk begge. -ing er hunkjønn. Fra å anbefale (u48)." },
        { id: "no-u122l1-agagodfor", type: "vocab", front: "å gå god for", reading: "agagodfor", meaning: "to vouch for (a person, not a fact)", example: { jp: "Ingen i styret vil gå god for ham nå, og for et år siden gjorde alle det.", en: "Nobody on the board will vouch for him now, and a year ago everybody did." }, accept: ["to answer for", "to speak for (somebody)"], drill: { jp: "Det er lett å gå god for noen", en: "It is easy to vouch for somebody" }, hint: "å gå god for → går, gikk, har gått. Fast uttrykk. ⚠ Forskjellen fra å innestå for: du går god for et MENNESKE, du innestår for OPPLYSNINGER. Å blande dem er en vanlig feil." },
      ],
    },
    {
      id: "no-u122l2",
      unit: 122,
      lesson: 2,
      title: "Å gjøre det du sa",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that somebody delivered — and pick the word that says what kind of reliability you mean.",
      items: [
        { id: "no-u122l2-ainnfri", type: "vocab", front: "å innfri", reading: "ainnfri", meaning: "to deliver on (meet what was promised or expected)", example: { jp: "Planen innfrir på tallene, og den gjør ingenting med grunnen til at de var så lave.", en: "The plan delivers on the figures, and it does nothing about the reason they were so low." }, accept: ["to fulfil", "to live up to"], drill: { jp: "Det er vanskelig å innfri slike løfter", en: "It is hard to deliver on such promises" }, hint: "å innfri → innfrir, innfridde, har innfridd. Inn + fri. ⚠ Brukes om LØFTER, KRAV og FORVENTNINGER — og om gjeld: å innfri et lån er å betale det helt ut." },
        { id: "no-u122l2-astaved", type: "vocab", front: "å stå ved", reading: "astaved", meaning: "to stand by (not take back what you said)", example: { jp: "Hun står ved det hun skrev, og hun sier samtidig at hun ville skrevet det på en annen måte i dag.", en: "She stands by what she wrote, and at the same time she says she would write it in another way today." }, accept: ["to stand behind", "to not retract"], drill: { jp: "Det er modig å stå ved slikt", en: "It is brave to stand by that sort of thing" }, hint: "å stå ved → står, sto, har stått. ⚠ Om noe DU har sagt eller gjort, ikke om en annen: du står ved en uttalelse, et vedtak, en feil. Å gå god for handler om andre." },
        { id: "no-u122l2-lojal", type: "vocab", front: "lojal", reading: "lojal", meaning: "loyal (backs the decision even when disagreeing)", example: { jp: "Han er lojal mot vedtaket, og alle i rommet vet at han stemte imot det.", en: "He is loyal to the decision, and everybody in the room knows he voted against it." }, accept: ["loyal"], drill: { jp: "Han er lojal mot dette vedtaket", en: "He is loyal to this decision" }, hint: "lojal → lojalt, lojale. Brukes med mot eller overfor. ⚠ I norsk arbeidsliv betyr lojalitet at du gjennomfører vedtaket du tapte — ikke at du er enig. Det er en profesjonell plikt, ikke en følelse." },
        { id: "no-u122l2-hederlig", type: "vocab", front: "hederlig", reading: "hederlig", meaning: "honourable (does the decent thing even when it costs)", example: { jp: "Det var hederlig gjort av ham, og det er ikke det samme som at det var lurt.", en: "It was honourably done by him, and that is not the same as it being wise." }, accept: ["honourable", "decent"], drill: { jp: "Han er hederlig i alle saker", en: "He is honourable in every case" }, hint: "hederlig → hederlig, hederlige. -ig-ord får ikke -t i intetkjønn. En heder (ære) + lig. ⚠ Om HANDLINGER mer enn om folk, og alltid når noe kostet: «en hederlig retrett» er å gi seg med æren i behold." },
        { id: "no-u122l2-redelig", type: "vocab", front: "redelig", reading: "redelig", meaning: "honest (straight in one's dealings)", example: { jp: "Framgangsmåten er redelig, og resultatet er likevel til å bli sint av.", en: "The procedure is honest, and the result is still something to get angry about." }, accept: ["upright", "fair-dealing"], drill: { jp: "Framgangsmåten er redelig og ganske åpen", en: "The procedure is honest and rather open" }, hint: "redelig → redelig, redelige. ⚠ Om METODEN, ikke om personen: en redelig behandling, en redelig debatt. Ærlig (u31) er om å si sannheten; redelig er om å følge spillereglene." },
        { id: "no-u122l2-astatilansvar", type: "vocab", front: "å stå til ansvar", reading: "astatilansvar", meaning: "to answer for (face those who can call you to account)", example: { jp: "Ingen står til ansvar for vedtaket, fordi alle de fire som gjorde det har sluttet.", en: "Nobody answers for the decision, because all four who made it have left." }, accept: ["to be accountable", "to be called to account"], drill: { jp: "Det er tungt å stå til ansvar", en: "It is hard to answer for it" }, hint: "å stå til ansvar → står, sto, har stått. Å stå + til + et ansvar (u50). ⚠ Brukes med for saka og OVERFOR den som spør. Å ta ansvar er frivillig; å stå til ansvar skjer enten du vil eller ikke." },
      ],
    },
    {
      id: "no-u122l3",
      unit: 122,
      lesson: 3,
      title: "Når tilliten går",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that trust has gone — and grade how much you are accusing somebody of, because these four are not the same charge.",
      items: [
        { id: "no-u122l3-ettillitsbrudd", type: "vocab", front: "et tillitsbrudd", reading: "ettillitsbrudd", meaning: "a breach of trust (the one thing you could not do)", example: { jp: "Det var et tillitsbrudd og ikke en feil, og det er derfor han ikke får komme tilbake.", en: "It was a breach of trust and not a mistake, and that is why he is not allowed back." }, accept: ["a breach of confidence", "a betrayal of trust"], drill: { jp: "Det var et tillitsbrudd og ikke mer", en: "It was a breach of trust and nothing more" }, hint: "et tillitsbrudd → tillitsbruddet, flertall tillitsbrudd (ubøyd). Intetkjønn fordi hvert -brudd i dette kurset er det. Tillit (u68) + brudd. ⚠ Det avgjørende ordet i en oppsigelsessak: en feil kan rettes, et tillitsbrudd kan ikke." },
        { id: "no-u122l3-mistillit", type: "vocab", front: "mistillit", reading: "mistillit", meaning: "want of confidence (formal, in a body)", example: { jp: "Det er mistillit i hele avdelingen, og ledelsen kaller det en dårlig periode.", en: "There is a want of confidence in the whole department, and the management calls it a bad patch." }, accept: ["distrust", "no confidence"], drill: { jp: "Det er mistillit i hele denne avdelingen", en: "There is a want of confidence in this whole department" }, hint: "mistillit → mistilliten, hankjønn. ⚠ Uten artikkel i ubestemt form, akkurat som tillit (u68): du sier «det er mistillit», ikke «en mistillit». Et mistillitsforslag i Stortinget kan felle en regjering." },
        { id: "no-u122l3-asatvil", type: "vocab", front: "å så tvil", reading: "asatvil", meaning: "to cast doubt (without claiming anything yourself)", example: { jp: "Han sår tvil om tallene uten å si at de er gale, og det holder for å stoppe hele saka.", en: "He casts doubt on the figures without saying they are wrong, and that is enough to stop the whole case." }, accept: ["to sow doubt", "to raise doubts"], drill: { jp: "Det er lett å så tvil om tall", en: "It is easy to cast doubt on figures" }, hint: "å så tvil → sår, sådde, har sådd. Å så (som korn) + tvil. Brukes med om. ⚠ Det PRESISE ordet for å angripe uten å påstå noe: du kan ikke motbevises, fordi du ikke sa noe. Derfor er det en anklage i seg selv." },
        { id: "no-u122l3-enskepsis", type: "vocab", front: "en skepsis", reading: "enskepsis", meaning: "scepticism (a settled doubt about a claim)", example: { jp: "Det er en skepsis her som er eldre enn saka, og ingen av dem som kom nå kan noe for den.", en: "There is a scepticism here that is older than the case, and none of those who came now can help it." }, accept: ["scepticism", "doubt (settled)"], drill: { jp: "Det er en skepsis her ingen nevner", en: "There is a scepticism here nobody mentions" }, hint: "en skepsis → skepsisen. Bøyes ikke i flertall. ⚠ Nøytralt og ofte ros i fag: sunn skepsis er en dyd. Mistillit gjelder MENNESKER, skepsis gjelder PÅSTANDER." },
        { id: "no-u122l3-asettesporsmalstegnved", type: "vocab", front: "å sette spørsmålstegn ved", reading: "asettesporsmalstegnved", meaning: "to call into question (say the thing needs defending)", example: { jp: "Hun setter spørsmålstegn ved hele metoden, og ingen av dem som brukte den svarer.", en: "She calls the whole method into question, and none of those who used it answer." }, accept: ["to question", "to put a question mark against"], drill: { jp: "Det er lett å sette spørsmålstegn ved alt", en: "It is easy to call everything into question" }, hint: "å sette spørsmålstegn ved → setter, satte, har satt. Merk ø- og å-folden: lesinga er asettesporsmalstegnved. ⚠ Svakere enn å bestride: du ber om et forsvar, du sier ikke at det er galt. Brukes med ved." },
        { id: "no-u122l3-asverte", type: "vocab", front: "å sverte", reading: "asverte", meaning: "to smear (attack somebody's name rather than their case)", example: { jp: "De svertet henne i mange uker, og ingen av påstandene kom fra noen som ville stå fram.", en: "They smeared her for many weeks, and none of the claims came from anybody willing to come forward." }, accept: ["to blacken", "to denigrate"], drill: { jp: "Det er lett å sverte noen på nett", en: "It is easy to smear somebody online" }, hint: "å sverte → sverter, svertet, har svertet. Fra svart (u8). ⚠ Alltid om et MENNESKES navn, og alltid urettmessig: du kan ikke sverte noen med sanne opplysninger. Å så tvil er nesten alltid mildere." },
      ],
    },
    {
      id: "no-u122l4",
      unit: 122,
      lesson: 4,
      title: "Navnet ditt etterpå",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about somebody's standing after a case — and separate what people think of them from what they are owed.",
      items: [
        { id: "no-u122l4-etomdomme", type: "vocab", front: "et omdømme", reading: "etomdomme", meaning: "a reputation (what the public thinks of you)", example: { jp: "Omdømmet tåler én slik sak, og de har hatt tre av dem på to år.", en: "The reputation can take one case like that, and they have had three of them in two years." }, accept: ["a public image", "standing"], drill: { jp: "De har et omdømme de må passe på", en: "They have a reputation they have to look after" }, hint: "et omdømme → omdømmet. Merk ø-folden: lesinga er etomdomme. Om + å dømme (u92). ⚠ Om ORGANISASJONER like ofte som om folk, og det er et fag i seg selv i Norge. Et rykte (u49) sprer seg; et omdømme bygges." },
        { id: "no-u122l4-enanseelse", type: "vocab", front: "en anseelse", reading: "enanseelse", meaning: "standing (the respect you have earned in a field)", example: { jp: "Han har stor anseelse blant dem som kan faget, og ingen utenfor det har hørt om ham.", en: "He has great standing among those who know the field, and nobody outside it has heard of him." }, accept: ["esteem", "prestige"], drill: { jp: "Han har en anseelse ingen andre har", en: "He has a standing nobody else has" }, hint: "en anseelse → anseelsen. ⚠ -else er ALLTID hankjønn. Fra å anse. Et omdømme kan et PR-byrå jobbe med; en anseelse må du ha gjort deg fortjent til, og den gjelder i en krets." },
        { id: "no-u122l4-tiltro", type: "vocab", front: "tiltro", reading: "tiltro", meaning: "confidence in (belief that somebody will manage)", example: { jp: "Hun har tiltro til folkene sine, og det er derfor de sier fra når noe går galt.", en: "She has confidence in her people, and that is why they speak up when something goes wrong." }, accept: ["faith in", "confidence in"], drill: { jp: "Vi har tiltro til dette styret", en: "We have confidence in this board" }, hint: "tiltro → tiltroen, hankjønn. ⚠ Uten artikkel i ubestemt form, som tillit (u68) og mistillit. Brukes med til. Tillit er at du STOLER på noen; tiltro er at du tror de FÅR DET TIL." },
        { id: "no-u122l4-astapaspill", type: "vocab", front: "å stå på spill", reading: "astapaspill", meaning: "to be at stake (be what can be lost)", example: { jp: "Det står mer på spill for de små enn for dem som skrev regelen.", en: "More is at stake for the small ones than for those who wrote the rule." }, accept: ["to be at stake", "to hang in the balance"], drill: { jp: "Her pleier mye å stå på spill", en: "A lot tends to be at stake here" }, hint: "å stå på spill → står, sto, har stått. Å stå + et spill. ⚠ Subjektet er det du kan MISTE, ikke personen: «omdømmet står på spill», aldri «han står på spill». Den aktive formen er å sette noe på spill, med objektet MELLOM sette og på." },
        { id: "no-u122l4-arenvaske", type: "vocab", front: "å renvaske", reading: "arenvaske", meaning: "to clear (show that the charge was false)", example: { jp: "Retten renvasket ham helt, og avisa som startet det skrev fire linjer om det.", en: "The court cleared him completely, and the paper that started it wrote four lines about it." }, accept: ["to exonerate", "to clear one's name"], drill: { jp: "Det tar år å renvaske et navn", en: "It takes years to clear a name" }, hint: "å renvaske → renvasker, renvasket, har renvasket. Ren (u10) + å vaske (u15). ⚠ Om SKYLDSPØRSMÅLET: en domstol eller en gransking renvasker deg. Det sier ingenting om hva folk fortsatt tror." },
        { id: "no-u122l4-eioppreisning", type: "vocab", front: "ei oppreisning", reading: "eioppreisning", meaning: "redress (what you are owed after being wronged)", example: { jp: "Han fikk ei oppreisning på papiret, og ingen av dem som tok feil sa noe til ham selv.", en: "He got redress on paper, and none of those who were wrong said anything to him directly." }, accept: ["vindication", "amends"], drill: { jp: "Han fikk ei oppreisning ingen la merke til", en: "He got redress nobody noticed" }, hint: "ei oppreisning → oppreisninga, og en oppreisning / oppreisningen er like vanlig i skrift. -ning er hunkjønn. Opp + å reise (u7). ⚠ Både moralsk og juridisk: oppreisningserstatning er penger for krenkelse, ikke for tap. Å renvaske fjerner skylda; ei oppreisning gir noe tilbake." },
      ],
    },
  ],
};
