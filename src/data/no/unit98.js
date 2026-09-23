// NO Unit 98 — Risiko og usikkerhet (slot: risk-uncertainty) — B2
// Retitled from the scaffold's English placeholder "Risk and uncertainty".
// B2 band conventions live in no/unit88.js's header; language-wide in unit1.js.
//
// ⚠️ en risiko (u52l3), en trussel (u52l4), en konsekvens (u52l1), alvorlig
// (u52l4), ei forsikring (u66l2), et varsel (u75l1), en advarsel (u87l3) and
// å advare (u61l1) are ALL already taught. u54 "Tvil og forbehold" owns neppe
// and eventuelt, u73 owns et forbehold. This unit therefore does not teach
// "risk words" — it teaches the two things B1 left out: how you talk about
// what MIGHT happen (scenario, framskriving, i verste fall), and what you do
// about it BEFORE it does (å forebygge, en beredskap, å ta høyde for).
//
// ⚠️ THE GLOSS HAZARD HERE IS en usikkerhet vs en uvisshet (lesson 4). English
// gives both as "uncertainty". They are not the same in Norwegian: en
// usikkerhet is a MARGIN on a number, en uvisshet is the human state of not
// yet knowing. The glosses say so, per unit88.js B5.
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
      title: "Hva kan gå galt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a weakness before it is hit — the soft spot, the early sign, and how much harm would actually follow.",
      items: [
        { id: "no-u98l1-ensarbarhet", type: "vocab", front: "en sårbarhet", reading: "ensarbarhet", meaning: "vulnerability (the weak point that would be hit first)", example: { jp: "De kjente en sårbarhet i systemet i flere år uten å gjøre noe med den.", en: "They knew about a vulnerability in the system for several years without doing anything about it." }, accept: ["a weak point", "an exposure"], drill: { jp: "Her er en sårbarhet vi kjenner", en: "Here is a vulnerability we know about" }, hint: "en sårbarhet → sårbarheten. -het er HANKJØNN (unit88 regel B3), aldri ei. Fra sår + -bar. En svakhet (u71) er generell; en sårbarhet peker på en fare." },
        { id: "no-u98l1-etfaresignal", type: "vocab", front: "et faresignal", reading: "etfaresignal", meaning: "warning sign (the small thing that shows up first)", example: { jp: "Det kom et faresignal tidlig, men alle hadde for mye å gjøre til å se det.", en: "A warning sign came early, but everybody had too much to do to see it." }, accept: ["a red flag", "an early indication of trouble"], drill: { jp: "Dette er et faresignal vi ser", en: "This is a warning sign we can see" }, hint: "et faresignal → faresignalet, flertall faresignaler. En fare (u52) + et signal. Et varsel (u75) er en melding; et faresignal må du tolke sjøl." },
        { id: "no-u98l1-enuro", type: "vocab", front: "en uro", reading: "enuro", meaning: "disquiet (a feeling that something is wrong, before you know what)", example: { jp: "Det lå en uro i rommet lenge før noen sa noe høyt.", en: "There was a disquiet in the room long before anybody said anything out loud." }, accept: ["unease", "a sense that something is off"], drill: { jp: "Det er en uro her nå", en: "There is a disquiet here now" }, hint: "en uro → uroen. u- + ro (u45). ⚠️ En uro er FØR du vet hva det er. Er du redd, vet du hva du er redd for." },
        { id: "no-u98l1-eiskadevirkning", type: "vocab", front: "ei skadevirkning", reading: "eiskadevirkning", meaning: "harmful effect (the damage that actually follows)", example: { jp: "Ei skadevirkning kan komme mange år etter, og da er det vanskelig å vise hvor den kom fra.", en: "A harmful effect can come many years later, and then it is hard to show where it came from." }, accept: ["an adverse effect", "the damage done"], drill: { jp: "Vi ser ei skadevirkning her", en: "We see a harmful effect here" }, hint: "ei skadevirkning → skadevirkninga. -ning er hunkjønn (unit88 regel B3). En skade (u25) + å virke (u54). Ofte i flertall: skadevirkninger." },
        { id: "no-u98l1-enfeilmargin", type: "vocab", front: "en feilmargin", reading: "enfeilmargin", meaning: "margin of error (how far off the figure could be)", example: { jp: "Tallet er riktig, men en feilmargin på ti gjør at det ikke betyr så mye.", en: "The figure is right, but a margin of error of ten means it does not mean very much." }, accept: ["error bars", "how far off it may be"], drill: { jp: "Her er en feilmargin vi må nevne", en: "Here is a margin of error we must mention" }, hint: "en feilmargin → feilmarginen, flertall feilmarginer. En feil (u20) + en margin. ⚠️ Ei måling (u94) uten feilmargin er ikke ferdig." },
        { id: "no-u98l1-aavverge", type: "vocab", front: "å avverge", reading: "aavverge", meaning: "to avert (stop it just before it happens)", example: { jp: "De klarte å avverge det verste, og derfor er det ingen som husker saken.", en: "They managed to avert the worst, and that is why nobody remembers the case." }, accept: ["to head off", "to stop in time"], drill: { jp: "Det er mulig å avverge dette", en: "It is possible to avert this" }, hint: "å avverge → avverger, avverget. Av + å verge. Å forebygge (l3) er LENGE før; å avverge er i siste liten." },
      ],
    },
    {
      id: "no-u98l2",
      unit: 98,
      lesson: 2,
      title: "Å regne med det verste",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Lay out how things could go — a scenario, a projection forward, and the honest best and worst cases.",
      items: [
        { id: "no-u98l2-etscenario", type: "vocab", front: "et scenario", reading: "etscenario", meaning: "scenario (one whole way things could turn out)", example: { jp: "De viste tre scenarioer, og det andre er det ingen tror på.", en: "They showed three scenarios, and the second one is the one nobody believes." }, accept: ["a possible course of events", "a what-if case"], drill: { jp: "Her er et scenario til", en: "Here is one more scenario" }, hint: "et scenario → scenarioet, flertall scenarioer. Fra teatret. ⚠️ Et scenario er en HEL historie, ikke bare et tall." },
        { id: "no-u98l2-eiframskriving", type: "vocab", front: "ei framskriving", reading: "eiframskriving", meaning: "projection (running today's trend forward on paper)", example: { jp: "Ei framskriving sier hva som skjer om alt står stille, og noe skjer alltid.", en: "A projection says what happens if everything stands still, and something always happens." }, accept: ["a forward extrapolation", "a trend carried forward"], drill: { jp: "Dette er ei framskriving vi bruker", en: "This is a projection we use" }, hint: "ei framskriving → framskrivinga. -ing er hunkjønn (unit88 regel B3). Fram + å skrive (u12). ⚠️ Ei framskriving er ikke en spådom — den er en REGNESTYKKE med et vilkår." },
        { id: "no-u98l2-uforutsigbar", type: "vocab", front: "uforutsigbar", reading: "uforutsigbar", meaning: "unpredictable (you cannot say in advance what it will do)", example: { jp: "Været er uforutsigbart på denne tida av året, og det vet alle som bor her.", en: "The weather is unpredictable at this time of year, and everybody who lives here knows that." }, accept: ["not foreseeable", "impossible to call in advance"], drill: { jp: "En slik dag er uforutsigbar", en: "A day like that is unpredictable" }, hint: "u- + forut + å si + -bar. Bøyes uforutsigbar, uforutsigbart, uforutsigbare. Lang, men helt vanlig i norsk." },
        { id: "no-u98l2-forutsigbar", type: "vocab", front: "forutsigbar", reading: "forutsigbar", meaning: "predictable (it does the same thing every time)", example: { jp: "En forutsigbar sjef er lettere å arbeide for enn en som er hyggelig av og til.", en: "A predictable boss is easier to work for than one who is nice now and then." }, accept: ["you can tell in advance", "reliable in its behaviour"], drill: { jp: "Han er forutsigbar på jobben", en: "He is predictable at work" }, hint: "Motsatt av uforutsigbar. ⚠️ I norsk er forutsigbar POSITIVT om folk og systemer, og litt negativt om ei bok — der betyr det kjedelig." },
        { id: "no-u98l2-iverstefall", type: "vocab", front: "i verste fall", reading: "iverstefall", meaning: "at worst (the worst it could realistically come to)", example: { jp: "I verste fall må vi begynne på nytt, og det har vi tid til.", en: "At worst we have to start again, and we have time for that." }, accept: ["in the worst case", "if it goes as badly as it can"], drill: { jp: "Vi taper i verste fall alt", en: "At worst we lose everything" }, hint: "Fast uttrykk, tre ord. Verst er superlativ av vond (u25). Åpner ofte setninga, og da kommer verbet rett etter (V2)." },
        { id: "no-u98l2-ibestefall", type: "vocab", front: "i beste fall", reading: "ibestefall", meaning: "at best (and that is not saying much)", example: { jp: "Svaret er i beste fall bare delvis riktig, og det holder ikke her.", en: "The answer is at best only partly right, and that is not enough here." }, accept: ["in the best case", "even taken generously"], drill: { jp: "Dette er i beste fall dårlig", en: "This is at best poor" }, hint: "Fast uttrykk. ⚠️ I beste fall er ofte KRITISK i norsk: det sier at selv den snilleste lesinga er dårlig." },
      ],
    },
    {
      id: "no-u98l3",
      unit: 98,
      lesson: 3,
      title: "Å forebygge",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what is being done in advance — the measure, the standing readiness, and where the plan leaves room.",
      items: [
        { id: "no-u98l3-aforebygge", type: "vocab", front: "å forebygge", reading: "aforebygge", meaning: "to prevent in advance (act long before there is a problem)", example: { jp: "Det koster mindre å forebygge enn å ordne opp, og likevel gjør vi det sjelden.", en: "It costs less to prevent than to sort it out afterwards, and yet we rarely do it." }, accept: ["to head off before it starts", "to take preventive action"], drill: { jp: "Det er billig å forebygge slikt", en: "It is cheap to prevent such things" }, hint: "å forebygge → forebygger, forebygde. Fore + å bygge. Sentralt ord i norsk helse og skole: forebyggende arbeid." },
        { id: "no-u98l3-ettiltak", type: "vocab", front: "et tiltak", reading: "ettiltak", meaning: "measure (one concrete thing put in place to help)", example: { jp: "Kommunen satte inn et tiltak, men ingen hadde snakket med dem det gjelder.", en: "The municipality put a measure in place, but nobody had spoken to the people it concerns." }, accept: ["an intervention", "a step taken"], drill: { jp: "Vi trenger et tiltak her", en: "We need a measure here" }, hint: "et tiltak → tiltaket, flertall tiltak (likt i flertall). Til + å ta. ⚠️ Svært vanlig i norsk forvaltning — et vedtak (u78) bestemmer, et tiltak gjør." },
        { id: "no-u98l3-enberedskap", type: "vocab", front: "en beredskap", reading: "enberedskap", meaning: "contingency readiness (being set up for it before it happens)", example: { jp: "En beredskap koster penger hvert år og betyr ingenting før den dagen det skjer.", en: "Contingency readiness costs money every year and means nothing until the day it happens." }, accept: ["standing preparedness", "emergency readiness"], drill: { jp: "Landet har en beredskap for dette", en: "The country has readiness for this" }, hint: "en beredskap → beredskapen. Beredt + -skap. Sentralt ord i Norge: beredskap mot brann (u87), mot uvær og mot krise." },
        { id: "no-u98l3-agardereseg", type: "vocab", front: "å gardere seg", reading: "agardereseg", meaning: "to hedge (set something aside in case you are wrong)", example: { jp: "Han garderte seg ved å si begge deler, og da hadde han rett uansett.", en: "He hedged by saying both things, and then he was right either way." }, accept: ["to cover oneself", "to keep a way out"], drill: { jp: "Det er lurt å gardere seg her", en: "It is wise to hedge here" }, hint: "Refleksivt: jeg garderer meg, vi garderer oss. ⚠️ To sider: klokt om penger, litt feigt om meninger." },
        { id: "no-u98l3-atahoydefor", type: "vocab", front: "å ta høyde for", reading: "atahoydefor", meaning: "to allow for (build the possibility into the plan)", example: { jp: "Planen må ta høyde for at noen blir syke, ellers holder den ikke.", en: "The plan has to allow for somebody falling ill, otherwise it will not hold." }, accept: ["to make room for the possibility", "to factor in"], drill: { jp: "Det er lurt å ta høyde for dette", en: "It is wise to allow for this" }, hint: "Fast uttrykk, fire ord. Å ta + ei høyde + for. ⚠️ Ikke å frykte noe — å LA DET FÅ PLASS i planen. ø folder til o." },
        { id: "no-u98l3-abagatellisere", type: "vocab", front: "å bagatellisere", reading: "abagatellisere", meaning: "to play down (make something sound smaller than it is)", example: { jp: "De bagatelliserte det først, og derfor ble alt verre enn det måtte bli.", en: "They played it down at first, and that is why everything got worse than it had to." }, accept: ["to make light of", "to downplay"], drill: { jp: "Det er dumt å bagatellisere dette", en: "It is foolish to play this down" }, hint: "å bagatellisere → bagatelliserer, bagatelliserte. Fra en bagatell, en småting. Motsatt av å overdrive (u51)." },
      ],
    },
    {
      id: "no-u98l4",
      unit: 98,
      lesson: 4,
      title: "Hvor sikkert er det",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Be exact about what you do not know — the margin on a figure, the state of waiting, and what is still hanging over you.",
      items: [
        { id: "no-u98l4-ensannsynlighet", type: "vocab", front: "en sannsynlighet", reading: "ensannsynlighet", meaning: "probability (how likely it is, as a figure)", example: { jp: "En sannsynlighet på ti betyr ikke at det ikke skjer, bare at det skjer sjelden.", en: "A probability of ten does not mean it will not happen, only that it happens rarely." }, accept: ["likelihood expressed as a number", "the odds of it"], drill: { jp: "Her er en sannsynlighet vi kjenner", en: "Here is a probability we know" }, hint: "en sannsynlighet → sannsynligheten. -het er HANKJØNN (unit88 regel B3), aldri ei. Sann + å synes. Sannsynligvis (u69) er adverbet." },
        { id: "no-u98l4-enusikkerhet", type: "vocab", front: "en usikkerhet", reading: "enusikkerhet", meaning: "uncertainty in a figure (how far it could be off)", example: { jp: "Det er en usikkerhet i tallet, og den er større enn forskjellen de skriver om.", en: "There is an uncertainty in the figure, and it is larger than the difference they are writing about." }, accept: ["the error range", "how far the number may move"], drill: { jp: "Her er en usikkerhet vi må nevne", en: "Here is an uncertainty we must mention" }, hint: "en usikkerhet → usikkerheten. -het er HANKJØNN (unit88 regel B3). ⚠️ Dette er et TALL — en feilmargin (l1) er hvordan du oppgir den." },
        { id: "no-u98l4-enuvisshet", type: "vocab", front: "en uvisshet", reading: "enuvisshet", meaning: "not knowing (the human state of waiting without an answer)", example: { jp: "En uvisshet som varer i måneder tar mer på folk enn et dårlig svar.", en: "Not knowing that lasts for months takes more out of people than a bad answer." }, accept: ["the state of being in the dark", "suspense without news"], drill: { jp: "Dette er en uvisshet vi kjenner", en: "This is a not-knowing we recognise" }, hint: "en uvisshet → uvissheten. u- + viss + -het. ⚠️ Dette er en FØLELSE hos mennesker; en usikkerhet er et tall. Engelsk gir begge som uncertainty." },
        { id: "no-u98l4-eventuell", type: "vocab", front: "eventuell", reading: "eventuell", meaning: "any possible (a thing that may or may not turn out to exist)", example: { jp: "Send oss eventuelle saker før fredag, så tar vi dem samlet.", en: "Send us any possible matters before Friday, and we will take them together." }, accept: ["such as may arise", "any that there may be"], drill: { jp: "Vi tar en eventuell klage etterpå", en: "We will take any possible complaint afterwards" }, hint: "Bøyes eventuell, eventuelt, eventuelle. ⚠️ FALSK VENN: betyr ikke eventually. Adverbet eventuelt (u54) betyr «om nødvendig»." },
        { id: "no-u98l4-atrue", type: "vocab", front: "å true", reading: "atrue", meaning: "to threaten (hang a harm over somebody to make them act)", example: { jp: "De truet med å gå til sak, men alle visste at de ikke kom til å gjøre det.", en: "They threatened to go to court, but everybody knew they were not going to do it." }, accept: ["to menace", "to hold a harm over"], drill: { jp: "Det er galt å true noen", en: "It is wrong to threaten somebody" }, hint: "å true → truer, truet. Fra en trussel (u52). ⚠️ Også upersonlig: et uvær truer, en art er truet." },
        { id: "no-u98l4-sarbar", type: "vocab", front: "sårbar", reading: "sarbar", meaning: "vulnerable (easily hurt, and with little to fall back on)", example: { jp: "De mest sårbare taper mest når noe går galt, og de klager minst.", en: "The most vulnerable lose the most when something goes wrong, and they complain the least." }, accept: ["exposed to harm", "with little to fall back on"], drill: { jp: "Denne gruppa er særlig sårbar", en: "This group is particularly vulnerable" }, hint: "Et sår + -bar. Bøyes sårbar, sårbart, sårbare. Om folk, om systemer og om natur. Substantivet er en sårbarhet (l1)." },
      ],
    },
  ],
};
