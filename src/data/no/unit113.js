// NO Unit 113 — Karakter og framferd (slot: coverage-b2-3) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 3 (B2)" — a slot number, not an instruction. Theme
// chosen here, and it is the LAST unit of B2 block 2. Conventions: unit1.js
// §1–§9, unit51.js B1–B9, unit88.js C1–C7.
//
// WHY THIS THEME. u31 "Personlighet og egenskaper" took the A2 character layer
// (sta, gjerrig, utadvendt, ærlig, hensynsfull at u97, grundig at u56), and u105
// HERE took the feelings. What is left, and what B2 needs, is the layer BETWEEN
// them: the words you use to characterise somebody in an argument — a reference,
// a review, a disagreement about whether a person can be trusted with a job.
//   l1  the nouns: what somebody IS, as a thing you can point at
//   l2  the qualities you would write in a reference
//   l3  the ones you would only say out loud
//   l4  how somebody carries themselves under pressure
//
// ⚠ THE ADJECTIVE-DRILL TRAP (unit88.js C5, and the checker enforces it): an
// adjective front is the COMMON-GENDER form, so a drill must not put a neuter
// subject in front of it — «et svar er raus» would need raust, and the front has
// to appear verbatim. Every adjective drill here has a person as its subject.
//
// NOT TAKEN, and NONE of it on the lexeme rule — which means INFLECTION, not
// derivation (CLAUDE.md / RUNBOOK §4, corrected on main 2026-09-23, commit
// 5928ca20), so a derived word is a different lexeme and may be carded:
//   • `beskjeden` — a REAL block of a different kind: its form collides exactly
//     with the definite `beskjeden` of `en beskjed` (u21, *the message*). The
//     validator compares fronts and cannot see it; a learner would.
//   • `forfengelig` / `ei forfengelighet` and `utholdende` — both halves of each
//     pair would land in the SAME lesson, which is two cards for one piece of
//     learning in one sitting. `en utholdenhet` is the half that survived.
//   • `stødig` and `sindig` — no gloss that separates them from `behersket` on a
//     produce card, which is the u71 warning, not a lexeme question.
//
// GENDER: -het is MASCULINE (en modenhet, en selvinnsikt, en utholdenhet), -ing
// is FEMININE (ei legning), `ei framferd` is feminine because ei ferd is.
// FIRST FEMININE is `ei framferd` (l1) and carries the en-/ei- note.
//
// ⚠ HAND-BACK NOTE FOR BLOCK 3 (u114–u126): character is now SPENT across three
// units — u31 (A2), u105 (feelings) and this one. Pick another theme.
//
// SCOPE: the frozen base u1–u112 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT113 = {
  id: "no-u113",
  lang: "no",
  title: "Karakter og framferd",
  order: 113,
  stage: "b2",
  lessons: [
    {
      id: "no-u113l1",
      unit: 113,
      lesson: 1,
      title: "Hvordan noen framstår",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe what somebody is like as a thing you can name — and separate what they are from how they happen to behave today.",
      items: [
        { id: "no-u113l1-eiframferd", type: "vocab", front: "ei framferd", reading: "eiframferd", meaning: "conduct (how one behaves)", example: { jp: "Framferda hans er det saka handler om, og ingen har sagt noe om arbeidet han gjorde.", en: "His conduct is what the case is about, and nobody has said anything about the work he did." }, accept: ["behaviour", "conduct"], drill: { jp: "Vi snakket om ei framferd ingen liker", en: "We talked about a conduct nobody likes" }, hint: "ei framferd → framferda. Hunkjønnsord kan du også skrive en framferd / framferden; ei ferd er hunkjønn og sammensetninga arver det (regel 1). Fram (u62) + ferd. Hvordan du OPPFØRER deg, ikke hvem du er." },
        { id: "no-u113l1-etvesen", type: "vocab", front: "et vesen", reading: "etvesen", meaning: "manner (nature)", example: { jp: "Hun har et rolig vesen, og det gjør at folk tror hun er enig når hun bare hører på.", en: "She has a calm manner, and that makes people think she agrees when she is only listening." }, accept: ["a nature", "a way about one"], drill: { jp: "Han har et vesen folk liker", en: "He has a manner people like" }, hint: "et vesen → vesenet. ⚠ Også et levende VESEN, og en etat (u110) heter et helsevesen. Om mennesker betyr det den rolige eller urolige måten du er på." },
        { id: "no-u113l1-ettemperament", type: "vocab", front: "et temperament", reading: "ettemperament", meaning: "temperament", example: { jp: "Temperamentet hans er kjent i hele huset, og likevel blir alle overrasket hver gang.", en: "His temperament is known in the whole building, and still everybody is surprised every time." }, accept: ["a temper"], drill: { jp: "Hun har et temperament vi kjenner", en: "She has a temperament we know" }, hint: "et temperament → temperamentet, flertall temperamenter. ⚠ I norsk betyr det nesten alltid SINT temperament når det står alene: «han har temperament»." },
        { id: "no-u113l1-eilegning", type: "vocab", front: "ei legning", reading: "eilegning", meaning: "disposition (bent)", example: { jp: "Det ligger i legninga hans å si imot, og han gjør det også når han er enig.", en: "It is in his disposition to contradict, and he does it even when he agrees." }, accept: ["an inclination", "a bent"], drill: { jp: "Det ligger i ei legning han har", en: "It lies in a disposition he has" }, hint: "ei legning → legninga. -ning er hunkjønn. Fra å legge (u77). ⚠ Ordet brukes også om seksuell legning, og det er den vanligste bruken i dag — vær varsom." },
        { id: "no-u113l1-etselvbilde", type: "vocab", front: "et selvbilde", reading: "etselvbilde", meaning: "self-image", example: { jp: "Selvbildet hans tåler ikke at noen andre har rett, og derfor får han aldri hjelp.", en: "His self-image cannot take anybody else being right, and that is why he never gets help." }, accept: ["self-perception", "self-image"], drill: { jp: "Hun har et selvbilde som er godt", en: "She has a self-image that is good" }, hint: "et selvbilde → selvbildet, flertall selvbilder. Selv (u29) + et bilde (u16). Hva du TROR du er; selvtillit (u67) er hvor mye du tør." },
        { id: "no-u113l1-enmodenhet", type: "vocab", front: "en modenhet", reading: "enmodenhet", meaning: "maturity", example: { jp: "Det er en modenhet i svaret hennes som ingen ventet av en så ung person.", en: "There is a maturity in her answer that nobody expected from somebody so young." }, accept: ["maturity"], drill: { jp: "Det er en modenhet i alt han sier", en: "There is a maturity in everything he says" }, hint: "en modenhet → modenheten. ⚠ -het er ALLTID hankjønn. Fra moden, som om frukt betyr klar til å spises. Ikke det samme som alder." },
      ],
    },
    {
      id: "no-u113l2",
      unit: 113,
      lesson: 2,
      title: "Det du skriver i en attest",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Praise somebody precisely — pick the word that says which good quality you mean, because Norwegian references are read closely.",
      items: [
        { id: "no-u113l2-raus", type: "vocab", front: "raus", reading: "raus", meaning: "generous (big-hearted)", example: { jp: "Hun er raus med tida si, og det er en dyrere gave enn penger i denne jobben.", en: "She is generous with her time, and that is a more expensive gift than money in this job." }, accept: ["big-hearted", "liberal (giving)"], drill: { jp: "Han er raus med alle her", en: "He is generous with everybody here" }, hint: "raus → raust, rause. ⚠ Om HOLDNING like mye som om penger: å være raus i en diskusjon er å gi motparten rett der det står seg. Gjerrig (u31) er motsatsen." },
        { id: "no-u113l2-noktern", type: "vocab", front: "nøktern", reading: "noktern", meaning: "level-headed (sober)", example: { jp: "Han er nøktern når alle andre er sikre, og det gjør ham lite populær nettopp da vi trenger ham.", en: "He is level-headed when everybody else is certain, and that makes him unpopular exactly when we need him." }, accept: ["sober", "matter-of-fact", "restrained"], drill: { jp: "Hun er nøktern når det gjelder", en: "She is level-headed when it matters" }, hint: "nøktern → nøkternt, nøkterne. Merk ø-folden: lesinga er noktern. Verken over- eller undervurderer. ⚠ Høy ros i Norge — høyere enn begeistret." },
        { id: "no-u113l2-samvittighetsfull", type: "vocab", front: "samvittighetsfull", reading: "samvittighetsfull", meaning: "conscientious", example: { jp: "Hun er samvittighetsfull med alt hun gjør, og det er derfor hun aldri blir ferdig i tide.", en: "She is conscientious with everything she does, and that is why she is never finished on time." }, accept: ["diligent", "thorough (morally)"], drill: { jp: "Han er samvittighetsfull med arbeidet sitt", en: "He is conscientious with his work" }, hint: "samvittighetsfull → samvittighetsfullt, samvittighetsfulle. Ei samvittighet (u97) + full. Grundig (u56) er om KVALITETEN; samvittighetsfull er om at du ikke klarer å la være." },
        { id: "no-u113l2-prinsippfast", type: "vocab", front: "prinsippfast", reading: "prinsippfast", meaning: "principled (unbending)", example: { jp: "Han er prinsippfast, og det er en fin ting å være helt til noen må gi seg.", en: "He is principled, and that is a fine thing to be right up until somebody has to give way." }, accept: ["of firm principle", "unbending"], drill: { jp: "Hun er prinsippfast i alle saker", en: "She is principled in every case" }, hint: "prinsippfast → prinsippfast, prinsippfaste. Et prinsipp (u58) + fast (u28). ⚠ Ros og kritikk på én gang, avhengig av hvem som sier det. Sta (u31) er det samme uten prinsippet." },
        { id: "no-u113l2-omgjengelig", type: "vocab", front: "omgjengelig", reading: "omgjengelig", meaning: "easy to get on with", example: { jp: "Han er omgjengelig med alle, og ingen av dem kjenner ham særlig godt.", en: "He is easy to get on with for everybody, and none of them knows him particularly well." }, accept: ["sociable", "affable"], drill: { jp: "Hun er omgjengelig med alle på jobben", en: "She is easy to get on with for everybody at work" }, hint: "omgjengelig → omgjengelig, omgjengelige. -ig-ord får ikke -t i intetkjønn. Å omgås + lig. Utadvendt (u31) er om ENERGI; omgjengelig er om at du er lett å ha med å gjøre." },
        { id: "no-u113l2-pliktoppfyllende", type: "vocab", front: "pliktoppfyllende", reading: "pliktoppfyllende", meaning: "dutiful", example: { jp: "Hun er pliktoppfyllende, og det er nettopp derfor ingen har spurt om hun vil gjøre noe annet.", en: "She is dutiful, and that is exactly why nobody has asked whether she wants to do something else." }, accept: ["conscientious (duty-bound)", "reliable"], drill: { jp: "Han er pliktoppfyllende på alle måter", en: "He is dutiful in every way" }, hint: "pliktoppfyllende, bøyes ikke — -ende-former er like i alle kjønn. Ei plikt (u32) + å oppfylle. Du gjør det du SKAL; samvittighetsfull er at du gjør det godt." },
      ],
    },
    {
      id: "no-u113l3",
      unit: 113,
      lesson: 3,
      title: "Det du bare sier høyt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Criticise a person precisely — name the fault you actually mean, instead of a general insult.",
      items: [
        { id: "no-u113l3-arrogant", type: "vocab", front: "arrogant", reading: "arrogant", meaning: "arrogant", example: { jp: "Han er ikke arrogant, han er bare sikker på tallene sine, og de to tingene ser helt like ut for andre.", en: "He is not arrogant, he is just certain about his figures, and the two things look exactly alike to other people." }, accept: ["haughty", "conceited"], drill: { jp: "Hun var arrogant på møtet i går", en: "She was arrogant at the meeting yesterday" }, hint: "arrogant → arrogant, arrogante. ⚠ Det sterkeste i denne leksjonen, og i Norge et av de verste orda du kan bruke om noen — mer alvorlig enn i mange andre språk." },
        { id: "no-u113l3-pastaelig", type: "vocab", front: "påståelig", reading: "pastaelig", meaning: "insistent (won't be told)", example: { jp: "Hun er påståelig om ting hun ikke kan noe om, og saklig om det hun faktisk kan.", en: "She is insistent about things she knows nothing about, and reasonable about what she actually knows." }, accept: ["opinionated", "assertive (stubbornly)"], drill: { jp: "Han er påståelig når han er usikker", en: "He is insistent when he is uncertain" }, hint: "påståelig → påståelig, påståelige. Merk å-folden: lesinga er pastaelig. Fra å påstå (u49). Du HOLDER på påstanden din uansett hva som kommer fram." },
        { id: "no-u113l3-egenradig", type: "vocab", front: "egenrådig", reading: "egenradig", meaning: "high-handed (does as he likes)", example: { jp: "Han er egenrådig, og det går bra helt til han tar feil én gang.", en: "He is high-handed, and it goes fine right up until he is wrong once." }, accept: ["wilful", "autocratic"], drill: { jp: "Hun er egenrådig i alt hun gjør", en: "She is high-handed in everything she does" }, hint: "egenrådig → egenrådig, egenrådige. Egen + et råd (u60). Merk å-folden: lesinga er egenradig. Du tar avgjørelser ALENE som burde vært tatt sammen." },
        { id: "no-u113l3-selvhoytidelig", type: "vocab", front: "selvhøytidelig", reading: "selvhoytidelig", meaning: "self-important", example: { jp: "Han er selvhøytidelig på en måte ingen orker å si noe om, og alle snakker om det når han ikke hører.", en: "He is self-important in a way nobody can be bothered to say anything about, and everybody talks about it when he cannot hear." }, accept: ["pompous", "takes himself too seriously"], drill: { jp: "Hun er selvhøytidelig om jobben sin", en: "She is self-important about her job" }, hint: "selvhøytidelig → selvhøytidelig, selvhøytidelige. Selv + høytidelig (u109). Merk ø-folden: lesinga er selvhoytidelig. ⚠ En norsk spesialitet av en fornærmelse: å ta seg selv for høytidelig er alvorlig her." },
        { id: "no-u113l3-godtroende", type: "vocab", front: "godtroende", reading: "godtroende", meaning: "gullible", example: { jp: "Han er godtroende, og det er nettopp derfor folk liker å jobbe med ham.", en: "He is gullible, and that is exactly why people like working with him." }, accept: ["credulous", "trusting (too much)"], drill: { jp: "Hun er godtroende med folk hun møter", en: "She is gullible with people she meets" }, hint: "godtroende, bøyes ikke — -ende-former er like i alle kjønn. God (u1) + å tro (u12). ⚠ Mildere enn engelsk gullible: det ligger noe godt i ordet også." },
        { id: "no-u113l3-hensynslos", type: "vocab", front: "hensynsløs", reading: "hensynslos", meaning: "ruthless (inconsiderate)", example: { jp: "Han er hensynsløs når det haster, og resten av tida er han hyggelig mot alle.", en: "He is ruthless when there is a hurry, and the rest of the time he is nice to everybody." }, accept: ["inconsiderate", "reckless"], drill: { jp: "Hun var hensynsløs mot alle rundt seg", en: "She was ruthless towards everybody around her" }, hint: "hensynsløs → hensynsløst, hensynsløse. Merk ø-folden: lesinga er hensynslos. Et hensyn (u61) + løs. Motstykket hensynsfull er u97." },
      ],
    },
    {
      id: "no-u113l4",
      unit: 113,
      lesson: 4,
      title: "Hvordan noen bærer seg under press",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how somebody holds up when it gets hard — and name what they have that the others in the room do not.",
      items: [
        { id: "no-u113l4-behersket", type: "vocab", front: "behersket", reading: "behersket", meaning: "composed (self-controlled)", example: { jp: "Hun var behersket hele veien, og det kostet henne mer enn om hun hadde sagt hva hun mente.", en: "She was composed the whole way, and it cost her more than if she had said what she thought." }, accept: ["restrained", "in control of oneself"], drill: { jp: "Han var behersket da han svarte", en: "He was composed when he answered" }, hint: "behersket → behersket, beherskede. Fra å beherske (å ha kontroll over). ⚠ Også om ferdigheter: «hun behersker fire språk». Rolig (u17) er en tilstand; behersket er noe du GJØR med deg selv." },
        { id: "no-u113l4-impulsiv", type: "vocab", front: "impulsiv", reading: "impulsiv", meaning: "impulsive", example: { jp: "Han er impulsiv, og halvparten av de gode tankene i huset kommer fra ham.", en: "He is impulsive, and half the good thoughts in the building come from him." }, accept: ["spontaneous", "rash"], drill: { jp: "Hun er impulsiv når hun er glad", en: "She is impulsive when she is happy" }, hint: "impulsiv → impulsivt, impulsive. Du handler FØR du tenker. ⚠ Ikke bare negativt i norsk — det står ofte sammen med kreativ." },
        { id: "no-u113l4-ettertenksom", type: "vocab", front: "ettertenksom", reading: "ettertenksom", meaning: "reflective (thoughtful)", example: { jp: "Hun er ettertenksom, og i et møte der alle snakker fort blir hun aldri hørt.", en: "She is reflective, and in a meeting where everybody talks fast she never gets heard." }, accept: ["thoughtful", "pensive"], drill: { jp: "Han er ettertenksom etter slike møter", en: "He is reflective after meetings like those" }, hint: "ettertenksom → ettertenksomt, ettertenksomme. Etter + å tenke (u17) + som. Du tenker ETTERPÅ, om det som skjedde — ikke i forkant." },
        { id: "no-u113l4-lunefull", type: "vocab", front: "lunefull", reading: "lunefull", meaning: "moody (unpredictable)", example: { jp: "Sjefen er lunefull, og hele avdelingen bruker den første timen på å finne ut hvilken dag det er.", en: "The boss is moody, and the whole department spends the first hour finding out what kind of day it is." }, accept: ["capricious", "temperamental"], drill: { jp: "Han er lunefull om morgenen", en: "He is moody in the morning" }, hint: "lunefull → lunefullt, lunefulle. Ei lune (et innfall) + full. ⚠ Også om vær og om hav: et lunefullt farvann. Det du ikke kan regne med." },
        { id: "no-u113l4-enselvinnsikt", type: "vocab", front: "en selvinnsikt", reading: "enselvinnsikt", meaning: "self-awareness", example: { jp: "Det er en selvinnsikt i det han sier, og den er sjelden nok til at folk husker samtalen i mange år.", en: "There is a self-awareness in what he says, and it is rare enough that people remember the conversation for many years." }, accept: ["self-knowledge", "self-awareness"], drill: { jp: "Hun har en selvinnsikt de andre mangler", en: "She has a self-awareness the others lack" }, hint: "en selvinnsikt → selvinnsikten. Selv (u29) + en innsikt (u58). ⚠ Hankjønn fordi innsikt er det. Å se deg selv som andre ser deg — ikke å like det du ser." },
        { id: "no-u113l4-enutholdenhet", type: "vocab", front: "en utholdenhet", reading: "enutholdenhet", meaning: "endurance (staying power)", example: { jp: "Utholdenheten hennes vant saka til slutt, og ingen av argumentene gjorde det.", en: "Her endurance won the case in the end, and none of the arguments did." }, accept: ["stamina", "perseverance"], drill: { jp: "Han har en utholdenhet vi trenger", en: "He has an endurance we need" }, hint: "en utholdenhet → utholdenheten. ⚠ -het er ALLTID hankjønn. Ut + å holde (u59). Om kropp OG om vilje: å holde ut lenger enn de andre." },
      ],
    },
  ],
};
