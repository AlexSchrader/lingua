// NO Unit 98 — Risiko og usikkerhet (slot: risk-uncertainty) — B2
// Block 1 of Norwegian B2. Band constitution: no/unit88.js §C1–C7.
//
// Blocked before authoring: `en risiko` u52, `en trussel` u52, `en konsekvens`
// u52, `tilfeldig` u52, `å forutse` u62, `å redde` u52, `ei ulykke` u50,
// `en fare` u50 (⚠ `ei fare` reported FREE by the unfixed probe — see unit88.js
// §C4), `ei forsikring` u66, `et utfall` u60, `å tvile` u74, `å varsle` u43,
// `et varsel` u75, `verst` u37, `sikkerhet` u87, `en beredskap`-adjacent
// `en alarm` u87. u52 is the risk unit of A2 and u87 the emergency unit of B1,
// so this band gets the ABSTRACT layer: how likely (l1), taking one on (l2),
// heading one off (l3), and what happens when it lands anyway (l4).
//
// `ei sårbarhet` was cut as a transparent derivation of `sårbar` (l2) and
// `ei sikring` as one of `å sikre` (l3).
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT98 = {
  id: "no-u98",
  lang: "no",
  title: "Risiko og usikkerhet",
  order: 98,
  stage: "b2",
  lessons: [
    {
      id: "no-u98l1",
      unit: 98,
      lesson: 1,
      title: "Hvor sannsynlig er det",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how likely something is in Norwegian, and separate not-knowing-the-number from not-knowing-the-answer.",
      items: [
        { id: "no-u98l1-ensannsynlighet", type: "vocab", front: "en sannsynlighet", reading: "ensannsynlighet", meaning: "probability", example: { jp: "Sannsynligheten er liten, men det som kan skje er svært alvorlig.", en: "The probability is small, but what can happen is very serious." }, accept: ["likelihood", "chance (statistical)"], drill: { jp: "Her er det en sannsynlighet vi kjenner", en: "Here there is a probability we know" }, hint: "en sannsynlighet → sannsynligheten. -het-ord er hankjønn (regel 1), aldri ei. Fra sannsynlig (u71). Regnes ut i prosent — eller gjettes og kalles utregnet." },
        { id: "no-u98l1-enusikkerhet", type: "vocab", front: "en usikkerhet", reading: "enusikkerhet", meaning: "uncertainty", example: { jp: "Usikkerheten er det verste, verre enn et dårlig svar.", en: "The uncertainty is the worst part, worse than a bad answer." }, accept: ["doubt", "indeterminacy"], drill: { jp: "Her er det en usikkerhet vi lever med", en: "Here there is an uncertainty we live with" }, hint: "en usikkerhet → usikkerheten. -het-ord er hankjønn (regel 1). U- + sikkerhet (u87). ⚠ Merk skjevheten: sikkerhet betyr trygghet, men usikkerhet betyr at du ikke vet." },
        { id: "no-u98l1-enuvisshet", type: "vocab", front: "en uvisshet", reading: "enuvisshet", meaning: "suspense (not knowing)", example: { jp: "Uvissheten varte i tre uker, og den var verst om natta.", en: "The not knowing lasted three weeks, and it was worst at night." }, accept: ["not knowing", "uncertainty (felt)"], drill: { jp: "De satt i en uvisshet hele året", en: "They sat in suspense the whole year" }, hint: "en uvisshet → uvissheten. -het-ord er hankjønn (regel 1). U- + viss. En usikkerhet er hvor mye du ikke VET; en uvisshet er kjensla av å vente på svar." },
        { id: "no-u98l1-etscenario", type: "vocab", front: "et scenario", reading: "etscenario", meaning: "scenario", example: { jp: "De laget tre scenario, og det verste var mest sannsynlig.", en: "They made three scenarios, and the worst one was the most likely." }, accept: ["a possible course of events"], drill: { jp: "Dette er et scenario ingen liker", en: "This is a scenario nobody likes" }, hint: "et scenario → scenarioet, flertall scenario eller scenarioer. Uttales med sj-lyd: SJE-na-rio. Ett mulig bilde av framtida, ikke en gjetning om hva som skjer." },
        { id: "no-u98l1-entilfeldighet", type: "vocab", front: "en tilfeldighet", reading: "entilfeldighet", meaning: "coincidence", example: { jp: "Det er en tilfeldighet, men den passer altfor godt.", en: "It is a coincidence, but it fits far too well." }, accept: ["a chance occurrence", "a fluke"], drill: { jp: "Her er det en tilfeldighet vi ser", en: "Here there is a coincidence we can see" }, hint: "en tilfeldighet → tilfeldigheten, flertall tilfeldigheter. -het-ord er hankjønn (regel 1). Fra tilfeldig (u52). «Det er ingen tilfeldighet» betyr at noen har villet det." },
        { id: "no-u98l1-uforutsigbar", type: "vocab", front: "uforutsigbar", reading: "uforutsigbar", meaning: "unpredictable", example: { jp: "Været er uforutsigbart her, og det gjelder hele året.", en: "The weather is unpredictable here, and that applies all year round." }, accept: ["erratic", "impossible to predict"], drill: { jp: "Han er helt uforutsigbar om dagen", en: "He is completely unpredictable these days" }, hint: "uforutsigbar → uforutsigbart, uforutsigbare. U- + å forutse (u62) + -bar. Om vær (u8), marked (u66) og folk." },
      ],
    },
    {
      id: "no-u98l2",
      unit: 98,
      lesson: 2,
      title: "Å ta en risiko",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about exposure in Norwegian — what you are risking, what looks dubious, who is vulnerable, and what cannot be dodged.",
      items: [
        { id: "no-u98l2-arisikere", type: "vocab", front: "å risikere", reading: "arisikere", meaning: "to risk", example: { jp: "De risikerer alt sammen på én avtale, og de vet det godt.", en: "They are risking all of it on one agreement, and they know it perfectly well." }, accept: ["to run the risk of", "to hazard"], drill: { jp: "Det er dumt å risikere alt nå", en: "It is stupid to risk everything now" }, hint: "å risikere → risikerer, risikerte. En risiko (u52) er substantivet. Du risikerer noe DU kan tape, ikke noe andre kan tape." },
        { id: "no-u98l2-tvilsom", type: "vocab", front: "tvilsom", reading: "tvilsom", meaning: "dubious", example: { jp: "Tallene er tvilsomme, men ingen har tid til å sjekke dem.", en: "The figures are dubious, but nobody has time to check them." }, accept: ["questionable", "doubtful", "shady"], drill: { jp: "Hele saka virker litt tvilsom", en: "The whole case seems a bit dubious" }, hint: "tvilsom → tvilsomt, tvilsomme. Fra å tvile (u74). ⚠ Om personer betyr det nesten alltid uærlig, ikke usikker (u22)." },
        { id: "no-u98l2-sarbar", type: "vocab", front: "sårbar", reading: "sarbar", meaning: "vulnerable", example: { jp: "Systemet er sårbart, og alle som jobber der vet hvorfor.", en: "The system is vulnerable, and everybody who works there knows why." }, accept: ["fragile", "exposed"], drill: { jp: "Denne gruppa er særlig sårbar", en: "This group is particularly vulnerable" }, hint: "sårbar → sårbart, sårbare. Et sår + -bar: noe som kan såres. Om folk, om systemer (u75) og om natur (u34)." },
        { id: "no-u98l2-atrue", type: "vocab", front: "å true", reading: "atrue", meaning: "to threaten", example: { jp: "Han truet med å gå, men ingen av dem trodde på ham.", en: "He threatened to leave, but none of them believed him." }, accept: ["to menace", "to endanger"], drill: { jp: "Det er ulovlig å true noen", en: "It is unlawful to threaten somebody" }, hint: "å true → truer, truet. En trussel (u52) er substantivet. Både om personer og om tilstander: isen er truet." },
        { id: "no-u98l2-uunngaelig", type: "vocab", front: "uunngåelig", reading: "uunngaelig", meaning: "unavoidable", example: { jp: "Det var uunngåelig, og alle visste det på forhånd.", en: "It was unavoidable, and everybody knew it beforehand." }, accept: ["inevitable", "inescapable"], drill: { jp: "Dette var helt uunngåelig for oss", en: "This was completely unavoidable for us" }, hint: "uunngåelig → uunngåelig, uunngåelige. U- + å unngå (u25) + -elig. Merk de to u-ene i skrift: u + unngåelig." },
        { id: "no-u98l2-eiskadevirkning", type: "vocab", front: "ei skadevirkning", reading: "eiskadevirkning", meaning: "harmful effect", example: { jp: "Skadevirkningene kom først etter mange år.", en: "The harmful effects only came after many years." }, accept: ["an adverse effect", "damage"], drill: { jp: "Her er det ei skadevirkning vi ser", en: "Here there is a harmful effect we can see" }, hint: "ei skadevirkning → skadevirkninga. -ing/-ning-ord er hunkjønn; skadevirkningen er vanlig i trykk. En skade (u25) + ei virkning. Ei bivirkning (u67) er utilsiktet; ei skadevirkning gjør vondt (u11)." },
      ],
    },
    {
      id: "no-u98l3",
      unit: 98,
      lesson: 3,
      title: "Å forebygge",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Get ahead of a risk in Norwegian — prevent it, take precautions, build readiness, secure things, and hedge in case you are wrong.",
      items: [
        { id: "no-u98l3-aforebygge", type: "vocab", front: "å forebygge", reading: "aforebygge", meaning: "to prevent (in advance)", example: { jp: "Det er mye billigere å forebygge enn å reparere.", en: "It is much cheaper to prevent than to repair." }, accept: ["to avert", "to head off early"], drill: { jp: "Det er lurt å forebygge slike skader", en: "It is wise to prevent injuries like these" }, hint: "å forebygge → forebygger, forebygde. Fore + å bygge (u46). Å hindre (u52) er å stoppe noe som skjer nå; å forebygge er før det begynner." },
        { id: "no-u98l3-enforholdsregel", type: "vocab", front: "en forholdsregel", reading: "enforholdsregel", meaning: "precaution", example: { jp: "De tok alle forholdsregler, og det gikk galt likevel.", en: "They took every precaution, and it went wrong all the same." }, accept: ["a precautionary measure", "a safeguard"], drill: { jp: "Her må vi ta en forholdsregel til", en: "Here we have to take one more precaution" }, hint: "en forholdsregel → forholdsregelen, flertall forholdsregler. Et forhold + en regel (u32). Alltid noe du gjør på forhånd (u62)." },
        { id: "no-u98l3-enberedskap", type: "vocab", front: "en beredskap", reading: "enberedskap", meaning: "preparedness", example: { jp: "Beredskapen er god i teorien, men ingen har prøvd den.", en: "The preparedness is good in theory, but nobody has tested it." }, accept: ["emergency readiness", "contingency"], drill: { jp: "Vi trenger en beredskap som virker", en: "We need a preparedness that works" }, hint: "en beredskap → beredskapen. Beredt + -skap. Planene og folkene som står klare før noe skjer. Et kjerneord i norsk krisearbeid." },
        { id: "no-u98l3-asikre", type: "vocab", front: "å sikre", reading: "asikre", meaning: "to secure (make safe)", example: { jp: "De sikret huset på forhånd, og det holdt gjennom hele natta.", en: "They secured the house beforehand, and it held all through the night." }, accept: ["to safeguard", "to ensure", "to make safe"], drill: { jp: "Det er viktig å sikre alt først", en: "It is important to secure everything first" }, hint: "å sikre → sikrer, sikret. Fra sikker (u22). ⚠ To liv: å gjøre trygt (å sikre et hus) og å skaffe seg (å sikre seg en plass)." },
        { id: "no-u98l3-aavverge", type: "vocab", front: "å avverge", reading: "aavverge", meaning: "to avert (at the last moment)", example: { jp: "De avverget det verste, men skaden var allerede gjort.", en: "They averted the worst of it, but the damage was already done." }, accept: ["to head off", "to fend off"], drill: { jp: "Det er mulig å avverge slike ting", en: "It is possible to avert things like these" }, hint: "å avverge → avverger, avverget. Av + å verge. Å forebygge er lenge før; å avverge er i siste øyeblikk." },
        { id: "no-u98l3-agardereseg", type: "vocab", front: "å gardere seg", reading: "agarderseg", meaning: "to hedge (cover oneself)", example: { jp: "Han garderer seg alltid, og derfor blir han aldri overrasket.", en: "He always hedges, and that is why he is never surprised." }, accept: ["to cover oneself", "to hedge one's bets"], drill: { jp: "Det er lurt å gardere seg her", en: "It is wise to hedge here" }, hint: "å gardere seg → garderer seg, garderte seg. Refleksivt: jeg garderer meg, han garderer seg. Du tar høyde for at du kan ta feil (u50)." },
      ],
    },
    {
      id: "no-u98l4",
      unit: 98,
      lesson: 4,
      title: "Når det går galt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about failure at scale in Norwegian — the catastrophe, the collapse, what survives it, and the slack that was built in on purpose.",
      items: [
        { id: "no-u98l4-enkatastrofe", type: "vocab", front: "en katastrofe", reading: "enkatastrofe", meaning: "catastrophe", example: { jp: "Det ble en katastrofe, men bare fordi ingen hørte etter.", en: "It became a catastrophe, but only because nobody listened." }, accept: ["a disaster"], drill: { jp: "Dette blir en katastrofe for alle", en: "This is going to be a catastrophe for everybody" }, hint: "en katastrofe → katastrofen, flertall katastrofer. Trykket på nest siste stavelse: kata-STRO-fe. Brukes også spøkefullt om middager (u6) som gikk galt." },
        { id: "no-u98l4-etsammenbrudd", type: "vocab", front: "et sammenbrudd", reading: "etsammenbrudd", meaning: "collapse (breakdown)", example: { jp: "Det var et sammenbrudd i hele systemet, ikke bare en feil.", en: "It was a collapse in the whole system, not just a single fault." }, accept: ["a breakdown"], drill: { jp: "Her var det et sammenbrudd i går", en: "There was a collapse here yesterday" }, hint: "et sammenbrudd → sammenbruddet, flertall sammenbrudd. Sammen + et brudd. Om maskiner, om marked (u66) og om mennesker." },
        { id: "no-u98l4-robust", type: "vocab", front: "robust", reading: "robust", meaning: "robust", example: { jp: "Løsninga er robust, men den er også dyr og treg.", en: "The solution is robust, but it is also expensive and slow." }, accept: ["sturdy", "hard-wearing"], drill: { jp: "Denne løsninga er ganske robust", en: "This solution is quite robust" }, hint: "robust → robust, robuste. Trykket på siste stavelse: ro-BUST. Motsatt av sårbar (l2). Om ting, om systemer (u75) og om folk." },
        { id: "no-u98l4-enmotstandskraft", type: "vocab", front: "en motstandskraft", reading: "enmotstandskraft", meaning: "resilience", example: { jp: "Motstandskraften er best hos dem som har opplevd det før.", en: "Resilience is greatest in those who have been through it before." }, accept: ["resistance (power to withstand)", "staying power"], drill: { jp: "De har en motstandskraft vi trenger", en: "They have a resilience we need" }, hint: "en motstandskraft → motstandskraften. En motstand (u88) + ei kraft. Brukt både i medisin og i psykologi; du vil også se motstandskrafta." },
        { id: "no-u98l4-eikrisehandtering", type: "vocab", front: "ei krisehåndtering", reading: "eikrisehandtering", meaning: "crisis management", example: { jp: "Krisehåndteringa var god, men den kom altfor sent i gang.", en: "The crisis management was good, but it got going far too late." }, accept: ["crisis handling", "emergency response"], drill: { jp: "Dette er ei krisehåndtering som virker", en: "This is a crisis management that works" }, hint: "ei krisehåndtering → krisehåndteringa. -ing-ord er hunkjønn; krisehåndteringen er vanlig i trykk. Ei krise (u59) + å håndtere. Det du gjør MENS det står på." },
        { id: "no-u98l4-ensikkerhetsmargin", type: "vocab", front: "en sikkerhetsmargin", reading: "ensikkerhetsmargin", meaning: "safety margin", example: { jp: "De la inn en sikkerhetsmargin, og det reddet hele jobben.", en: "They built in a safety margin, and it saved the whole job." }, accept: ["a margin of safety", "slack"], drill: { jp: "Legg inn en sikkerhetsmargin med en gang", en: "Build in a safety margin straight away" }, hint: "en sikkerhetsmargin → sikkerhetsmarginen, flertall sikkerhetsmarginer. Sikkerhet (u87) + en margin. Det ekstra du legger inn fordi anslaget (u89) kan bomme." },
      ],
    },
  ],
};
