// NO Unit 101 — Klimapolitikk og det globale — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Environment and the global". Retitled in Norwegian per
// CLAUDE.md → "No front language". Conventions are unit1.js §1–§9.
//
// WHY THIS IS NOT A SECOND u65. B1's `Miljø og klima` (u65) owns the physical
// layer and spent it thoroughly: utslipp, klimagass, forurensning, avfall,
// gjenvinning, strøm, kraftverk, ressurs, bærekraftig, art, å verne. Repeating
// any of that here would be a B1 unit with a B2 number on it. B2 is register and
// abstraction, so this unit is the layer ABOVE the physics — the politics: who
// agrees to what, which lever a state actually pulls, who gets hit, and who pays.
// Every card is a word you meet in a news report or a government paper, not in a
// description of the weather.
//
// GENDER: `en klimaavtale`, `en avgift`, `en flom` are masculine; `ei omstilling`
// and `ei tilpasning` are feminine because unit1.js §1 marks -ing/-ning with `ei`.
// ⚠ FIRST FEMININE IN THIS UNIT is `ei omstilling` (l2) and it carries the
// §1 recognition note: moderate Bokmål writes `omstillingen` and the learner will
// meet that form in every newspaper.
// MASS/ABSTRACT NOUNS TAUGHT BARE per §1(b), and each was decided by §1's real
// test — is the indefinite singular idiomatic for the sense taught?
//   `tørke`    — "en tørke" is not what a Norwegian says about a dry season.
//   `bistand`  — mass; aid is never counted.
//   `havnivå`  — the sense taught is the level itself, which is spoken of as
//                `havnivået`; "et havnivå" would be one reading off an instrument.
// The three adjectives (internasjonal, fornybar, sårbar, global) are bare.
//
// SCOPE: frozen base u1–u87 plus this unit's own earlier cards. Blocks 1 (u88–u100)
// and 3 (u114–u126) were authoring in parallel and their fronts did not exist when
// this was written — nothing here leans on them.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT101 = {
  id: "no-u101",
  lang: "no",
  title: "Klimapolitikk og det globale",
  order: 101,
  stage: "b2",
  lessons: [
    // Lesson 1: the agreement itself — the document, the target, the room it was
    // signed in, and the two verbs a news report uses for entering into it.
    {
      id: "no-u101l1",
      unit: 101,
      lesson: 1,
      title: "Avtaler og mål",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow a news report about a climate agreement — name the target, the summit and the promise a country has made.",
      items: [
        { id: "no-u101l1-enklimaavtale", type: "vocab", front: "en klimaavtale", reading: "enklimaavtale", meaning: "a climate agreement", example: { jp: "Den nye klimaavtalen gjelder alle landene i Europa.", en: "The new climate agreement applies to all the countries in Europe." }, accept: ["climate deal", "climate treaty"], drill: { jp: "Landene ble enige om en klimaavtale", en: "The countries agreed on a climate agreement" }, hint: "Built from klima + avtale (u17), and that is how most of this unit works: B2 Norwegian compounds two words you already own rather than importing a new one. Masculine — klimaavtalen." },
        { id: "no-u101l1-etklimamal", type: "vocab", front: "et klimamål", reading: "etklimamal", meaning: "a climate target", example: { jp: "Det nye klimamålet gjelder for hele landet.", en: "The new climate target applies to the whole country." }, accept: ["climate goal", "emissions target"], drill: { jp: "Landet har et klimamål for utslipp", en: "The country has a climate target for emissions" }, hint: "klima + mål (u44). Neuter, because mål is neuter — a compound always takes the gender of its LAST part. That rule pays for itself across the whole of B2." },
        { id: "no-u101l1-ettoppmote", type: "vocab", front: "et toppmøte", reading: "ettoppmote", meaning: "a summit meeting", example: { jp: "Lederne fra mange land kom til toppmøtet i Oslo.", en: "The leaders from many countries came to the summit in Oslo." }, accept: ["a summit", "top-level meeting"], drill: { jp: "Lederne kom til et toppmøte i Oslo", en: "The leaders came to a summit in Oslo" }, hint: "topp + møte (u2). The news word for the meeting where heads of government sit down together. Neuter after møte." },
        { id: "no-u101l1-aforpliktseg", type: "vocab", front: "å forplikte seg", reading: "aforplikteseg", meaning: "to commit oneself", example: { jp: "Norge har forpliktet seg til å redusere utslippene sine.", en: "Norway has committed itself to reducing its emissions." }, accept: ["to undertake", "to bind oneself", "to pledge"], drill: { jp: "Landene valgte å forplikte seg til målet", en: "The countries chose to commit themselves to the target" }, hint: "A reflexive verb — the seg is part of the word and never drops. This is the verb a treaty uses about a country: Norge forplikter seg til …" },
        { id: "no-u101l1-avedta", type: "vocab", front: "å vedta", reading: "avedta", meaning: "to pass (a decision)", example: { jp: "Regjeringa vedtar et nytt krav til alle bilene i byen.", en: "The government is passing a new requirement for all the cars in the city." }, accept: ["to adopt", "to resolve", "to enact"], drill: { jp: "Det er viktig å vedta et klimamål", en: "It is important to adopt a climate target" }, hint: "å ta (u13) with ved- in front: vedtar, vedtok, har vedtatt. The noun et vedtak is already yours from u78 — this is the verb that produces one." },
        { id: "no-u101l1-internasjonal", type: "vocab", front: "internasjonal", reading: "internasjonal", meaning: "international", example: { jp: "Klimaendringene er et internasjonalt problem som ingen land klarer uten hjelp.", en: "Climate change is an international problem that no country manages without help." }, accept: ["cross-border", "worldwide"], drill: { jp: "Avtalen er internasjonal og viktig", en: "The agreement is international and important" }, hint: "Neuter takes -t: et internasjonalt problem. The drill keeps the bare form because avtalen is masculine — that is the form the card asks you to produce." },
      ],
    },
    // Lesson 2: the levers. A state has only a few, and Norwegian names them with
    // words a learner will otherwise guess wrong — virkemiddel is not "means".
    {
      id: "no-u101l2",
      unit: 101,
      lesson: 2,
      title: "Tiltak og virkemidler",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what a government is actually doing about a problem — the measure, the lever behind it and what it costs people.",
      items: [
        { id: "no-u101l2-ettiltak", type: "vocab", front: "et tiltak", reading: "ettiltak", meaning: "a measure (action taken)", example: { jp: "Regjeringa har innført flere tiltak mot forurensning.", en: "The government has introduced several measures against pollution." }, accept: ["an initiative", "a step", "an action"], drill: { jp: "Regjeringa innførte et tiltak mot forurensning", en: "The government introduced a measure against pollution" }, hint: "⚠ THE WORKHORSE OF THIS UNIT. Any concrete thing an authority DOES about a problem is et tiltak. Not a measurement — that is å måle (u34)." },
        { id: "no-u101l2-etvirkemiddel", type: "vocab", front: "et virkemiddel", reading: "etvirkemiddel", meaning: "a policy instrument", example: { jp: "En avgift er et sterkt virkemiddel når staten vil redusere forbruket.", en: "A levy is a strong policy instrument when the state wants to reduce consumption." }, accept: ["a lever", "a tool of policy", "a means"], drill: { jp: "Avgiften er et virkemiddel mot forurensning", en: "The levy is an instrument against pollution" }, hint: "å virke (u54) + middel — the thing that makes something work. A tiltak is the action; a virkemiddel is the KIND of lever it pulls: tax, ban, subsidy. Plural virkemidler." },
        { id: "no-u101l2-enavgift", type: "vocab", front: "en avgift", reading: "enavgift", meaning: "a levy", example: { jp: "Staten la en ny avgift på strøm og bensin.", en: "The state put a new levy on electricity and petrol." }, accept: ["a duty", "a charge", "an excise"], drill: { jp: "Staten innførte en avgift på strøm", en: "The state introduced a levy on electricity" }, hint: "Not the same as en skatt — a skatt is taken from your income, an avgift is put ON a thing you buy. Norwegian news distinguishes them every time." },
        { id: "no-u101l2-aredusere", type: "vocab", front: "å redusere", reading: "aredusere", meaning: "to bring down", example: { jp: "Landet må redusere utslippene sine i årene som kommer.", en: "The country must bring its emissions down in the years to come." }, accept: ["to reduce", "to lower", "to cut"], drill: { jp: "Vi jobber for å redusere utslippet", en: "We are working to bring the emission down" }, hint: "The formal twin of å kutte (u79). A newspaper reduserer; a person by the kitchen table kutter. Same act, different register — that contrast is what B2 is." },
        { id: "no-u101l2-fornybar", type: "vocab", front: "fornybar", reading: "fornybar", meaning: "renewable", example: { jp: "Norge lager mye fornybar strøm i store kraftverk.", en: "Norway makes a lot of renewable electricity in big power plants." }, accept: ["sustainable (of energy)", "regenerable"], drill: { jp: "Strøm fra vann er fornybar og billig", en: "Electricity from water is renewable and cheap" }, hint: "å fornye (u78) + -bar, the ending that means \"can be -ed\", exactly like English -able. Once you see -bar you can read a great many B2 adjectives: brukbar, lesbar, målbar." },
        { id: "no-u101l2-eiomstilling", type: "vocab", front: "ei omstilling", reading: "eiomstilling", meaning: "a changeover", example: { jp: "Ei grønn omstilling tar tid og koster mye penger.", en: "A green changeover takes time and costs a lot of money." }, accept: ["a restructuring", "a transition", "a shift"], drill: { jp: "Ei omstilling tar tid og penger", en: "A changeover takes time and money" }, hint: "⚠ FIRST FEMININE IN THIS UNIT. -ing takes ei (§1), definite omstillinga. But moderate Bokmål writes omstillingen, and that is what you will read in Aftenposten — recognise both, produce the -a form. Grønn omstilling is THE political phrase of the decade in Norway." },
      ],
    },
    // Lesson 3: who it lands on. The physical consequences are u65's; these are the
    // words for being ON THE RECEIVING END of them.
    {
      id: "no-u101l3",
      unit: 101,
      lesson: 3,
      title: "Følger og tilpasning",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe what a changing climate does to a place — flood, drought, rising sea — and how people adapt to it.",
      items: [
        { id: "no-u101l3-eitilpasning", type: "vocab", front: "ei tilpasning", reading: "eitilpasning", meaning: "an adaptation", example: { jp: "Byene må tenke på tilpasning til mer regn og flom.", en: "The cities have to think about adaptation to more rain and flooding." }, accept: ["an adjustment", "adapting"], drill: { jp: "Byen trenger ei tilpasning til mer regn", en: "The city needs an adaptation to more rain" }, hint: "From å tilpasse (u59). In climate Norwegian the whole field splits in two: kutt (stopping it) against tilpasning (living with it). Feminine, -ning per §1." },
        { id: "no-u101l3-enflom", type: "vocab", front: "en flom", reading: "enflom", meaning: "a flood", example: { jp: "En stor flom har ødelagt mange hus i byen.", en: "A big flood has destroyed many houses in the city." }, accept: ["flooding", "a deluge"], drill: { jp: "En flom kom etter mye regn", en: "A flood came after a lot of rain" }, hint: "Masculine, flommen. The verb is å flomme over, to overflow. Norway's rivers do this every spring, so the word is ordinary news rather than disaster vocabulary." },
        { id: "no-u101l3-torke", type: "vocab", front: "tørke", reading: "torke", meaning: "drought", example: { jp: "Etter lang tørke ble det lite mat i landet.", en: "After a long drought there was little food in the country." }, accept: ["dry spell", "dryness"], drill: { jp: "Lang tørke ga lite mat", en: "A long drought gave little food" }, hint: "⚠ BARE, NO ARTICLE (§1b): a dry season is mass, and \"en tørke\" is not what a Norwegian says. Gender is masculine if you ever need the definite — tørken. Note the example: after a fronted adverbial the verb comes SECOND — Etter lang tørke BLE det … (§4)." },
        { id: "no-u101l3-havniva", type: "vocab", front: "havnivå", reading: "havniva", meaning: "sea level", example: { jp: "Havnivået øker sakte i hele verden.", en: "The sea level is rising slowly all over the world." }, accept: ["the level of the sea"], drill: { jp: "Høyere havnivå rammer mange byer", en: "A higher sea level hits many cities" }, hint: "⚠ BARE (§1b). hav (u45) + nivå. The sense taught is the level itself, which Norwegian speaks of as havnivået; \"et havnivå\" would be one number read off an instrument. Neuter — havnivået." },
        { id: "no-u101l3-sarbar", type: "vocab", front: "sårbar", reading: "sarbar", meaning: "vulnerable", example: { jp: "Fattige land er mest sårbare for tørke og flom.", en: "Poor countries are most vulnerable to drought and flooding." }, accept: ["exposed", "fragile", "at risk"], drill: { jp: "Denne byen er sårbar for flom", en: "This city is vulnerable to flooding" }, hint: "sår (a wound) + -bar — literally \"woundable\", the same -bar as fornybar in l2. Takes for, not til: sårbar for noe. The drill uses byen because it is masculine, so the bare form is correct there." },
        { id: "no-u101l3-aramme", type: "vocab", front: "å ramme", reading: "aramme", meaning: "to hit hard", example: { jp: "Tørke rammer fattige land hardest.", en: "Drought hits poor countries hardest." }, accept: ["to strike", "to affect badly", "to hit"], drill: { jp: "Flommen begynner å ramme hele byen", en: "The flood is beginning to hit the whole city" }, hint: "Only ever for something bad — a flood, an illness, a closure. You cannot be rammet by good news. The s-passive you learned at u70 is extremely common here: landet rammes av tørke." },
      ],
    },
    // Lesson 4: the global frame — the part of the argument that is about fairness
    // between countries rather than about weather.
    {
      id: "no-u101l4",
      unit: 101,
      lesson: 4,
      title: "Det globale bildet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Take part in the global argument — say who is hit hardest, who pays, and how one country's choices reach another.",
      items: [
        { id: "no-u101l4-global", type: "vocab", front: "global", reading: "global", meaning: "global", example: { jp: "Klimaendringene er et globalt problem som ingen land klarer uten hjelp.", en: "Climate change is a global problem that no country manages without help." }, accept: ["worldwide", "planet-wide"], drill: { jp: "Denne endringa er global og alvorlig", en: "This change is global and serious" }, hint: "Neuter globalt, plural globale. Beside internasjonal (l1) it marks a real difference: internasjonal is BETWEEN states, global is the whole planet at once." },
        { id: "no-u101l4-etutviklingsland", type: "vocab", front: "et utviklingsland", reading: "etutviklingsland", meaning: "a developing country", example: { jp: "Mange utviklingsland blir rammet hardest av tørke.", en: "Many developing countries are hit hardest by drought." }, accept: ["developing nation", "poorer country"], drill: { jp: "Et utviklingsland trenger mer bistand", en: "A developing country needs more aid" }, hint: "å utvikle (u24) + -s- + land (u3). The -s- glues two nouns together in a great many Norwegian compounds and is not a genitive. Neuter after land, and the plural is unchanged: mange utviklingsland." },
        { id: "no-u101l4-bistand", type: "vocab", front: "bistand", reading: "bistand", meaning: "foreign aid", example: { jp: "Norge gir bistand til land som er rammet av flom.", en: "Norway gives aid to countries that have been hit by flooding." }, accept: ["development aid", "assistance"], drill: { jp: "Norge gir bistand til fattige land", en: "Norway gives aid to poor countries" }, hint: "⚠ BARE (§1b) — aid is mass and never counted. bi- (alongside) + stand, literally standing beside. Masculine: bistanden. A core word in Norwegian public debate." },
        { id: "no-u101l4-aforverre", type: "vocab", front: "å forverre", reading: "aforverre", meaning: "to make worse", example: { jp: "Mer forbruk vil forverre problemet i framtida.", en: "More consumption will make the problem worse in the future." }, accept: ["to worsen", "to aggravate"], drill: { jp: "Det er lett å forverre problemet", en: "It is easy to make the problem worse" }, hint: "for- + verre, the comparative of vond (u53). Norwegian builds verbs from comparatives like this freely: forbedre from bedre is its exact opposite and you will meet it constantly." },
        { id: "no-u101l4-etutslippskutt", type: "vocab", front: "et utslippskutt", reading: "etutslippskutt", meaning: "an emissions cut", example: { jp: "Avtalen krever et stort utslippskutt fra alle landene.", en: "The agreement demands a big emissions cut from all the countries." }, accept: ["emission reduction", "a cut in emissions"], drill: { jp: "Avtalen krever et utslippskutt fra landene", en: "The agreement demands an emissions cut from the countries" }, hint: "utslipp (u65) + -s- + kutt. A headline word: three nouns of yours stacked into one, which is how Norwegian newspapers write. Neuter after kutt." },
        { id: "no-u101l4-etkretslop", type: "vocab", front: "et kretsløp", reading: "etkretslop", meaning: "a cycle in nature", example: { jp: "Vannet går rundt i et stort kretsløp i naturen.", en: "The water goes round in a big cycle in nature." }, accept: ["a natural cycle", "a circuit"], drill: { jp: "Vannet går i et kretsløp", en: "The water goes in a cycle" }, hint: "krets (a circle) + løp (a run). Used for water, for carbon, and by extension for an economy that reuses what it makes — en sirkulær økonomi bygger på kretsløp. Neuter." },
      ],
    },
  ],
};
