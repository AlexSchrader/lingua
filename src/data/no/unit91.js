// NO Unit 91 — Nyanser og presisjon (slot: nuance-degree) — B2
// Block 1 of Norwegian B2. Band constitution: no/unit88.js §C1–C7.
//
// ⚠ SLOT RETHEMED, and this is the clearest case in the block. The scaffold
// title was "Nuance and degree", and the DEGREE half is spent: u43 `en grad`,
// u53 `knapt`, `temmelig`, `vesentlig`, `et flertall`, `færre`, u73
// `forholdsvis`, `snarere`, `mer eller mindre`, u51 `delvis`, `å overdrive`,
// u54 `noenlunde`, u70 `å antyde`, u73 `å presisere`, u22 `en grense`. Fourteen
// of the obvious twenty were already cards.
// So this unit is PRECISION AND HEDGING instead: how much (l1), how to suggest
// without stating (l2), how to turn a claim up or down (l3), and how to be
// honest about an approximation (l4). It is the same CEFR job done with the
// vocabulary the learner does not already have.
//
// ⚠ BLOCK 2: u105 "Emotion, subtle and mixed" is the neighbour most at risk.
// Take the FEELING words; the MEASURING words are here.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT91 = {
  id: "no-u91",
  lang: "no",
  title: "Nyanser og presisjon",
  order: 91,
  stage: "b2",
  lessons: [
    {
      id: "no-u91l1",
      unit: 91,
      lesson: 1,
      title: "Hvor mye",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how much, the way written Norwegian actually says it — considerably, marginally, predominantly, on the high side.",
      items: [
        { id: "no-u91l1-atskillig", type: "vocab", front: "atskillig", reading: "atskillig", meaning: "considerably", example: { jp: "Det tok atskillig lengre tid enn vi hadde regnet med.", en: "It took considerably longer than we had reckoned with." }, accept: ["a good deal", "substantially"], drill: { jp: "Han har atskillig mer erfaring enn meg", en: "He has considerably more experience than me" }, hint: "atskillig bøyes ikke når det står som adverb. Skriftlig og litt formelt; muntlig sier folk mye eller en god del." },
        { id: "no-u91l1-ubetydelig", type: "vocab", front: "ubetydelig", reading: "ubetydelig", meaning: "negligible", example: { jp: "Forskjellen er ubetydelig, men den står likevel i alle avisene.", en: "The difference is negligible, but it is in all the papers anyway." }, accept: ["insignificant", "trivial"], drill: { jp: "Denne forskjellen er helt ubetydelig", en: "This difference is completely negligible" }, hint: "ubetydelig → ubetydelig, ubetydelige. U- + å bety. Også om folk: en ubetydelig mann er en ingen husker." },
        { id: "no-u91l1-marginal", type: "vocab", front: "marginal", reading: "marginal", meaning: "marginal (slight)", example: { jp: "Endringa er marginal, og den betyr ingenting for folk flest.", en: "The change is marginal, and it means nothing to most people." }, accept: ["slight", "minimal"], drill: { jp: "Forskjellen deres var helt marginal", en: "Their difference was completely marginal" }, hint: "marginal → marginalt, marginale. Fra en margin: så lite at det ligger i kanten. Marginalt som adverb: marginalt bedre." },
        { id: "no-u91l1-enovervekt", type: "vocab", front: "en overvekt", reading: "enovervekt", meaning: "preponderance (majority weight)", example: { jp: "Det er en klar overvekt av unge i gruppa som svarer.", en: "There is a clear preponderance of young people in the group that answers." }, accept: ["a predominance", "a majority (in weight)"], drill: { jp: "Her er det en overvekt av kvinner", en: "Here there is a preponderance of women" }, hint: "en overvekt → overvekten. Over + ei vekt. ⚠ Det andre livet er kroppsvekt: overvekt betyr å veie for mye. Sammenhengen avgjør hver gang." },
        { id: "no-u91l1-overveiende", type: "vocab", front: "overveiende", reading: "overveiende", meaning: "predominantly", example: { jp: "Svarene er overveiende gode, men de dårlige er de lengste.", en: "The answers are predominantly good, but the bad ones are the longest." }, accept: ["mainly", "for the most part"], drill: { jp: "Dette er overveiende en god plan", en: "This is predominantly a good plan" }, hint: "overveiende bøyes ikke: -ende-former er like i alle kjønn og tall. Over + å veie: det meste veier den ene veien. Muntlig sier folk stort sett (u73)." },
        { id: "no-u91l1-ioverkant", type: "vocab", front: "i overkant", reading: "ioverkant", meaning: "on the high side", example: { jp: "Prisen er i overkant av det vi hadde tenkt oss.", en: "The price is on the high side of what we had in mind." }, accept: ["a bit too much", "somewhat over"], drill: { jp: "Dette er litt i overkant dyrt", en: "This is a bit on the expensive side" }, hint: "i overkant er et fast uttrykk og bøyes ikke. To bruk: i overkant av hundre (litt mer enn), og i overkant dyrt (litt for dyrt). Motsatsen er i underkant." },
      ],
    },
    {
      id: "no-u91l2",
      unit: 91,
      lesson: 2,
      title: "Å antyde",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say something without quite saying it — hint at it, register a difference almost too small to see, and name the shade you actually mean.",
      items: [
        { id: "no-u91l2-eiantydning", type: "vocab", front: "ei antydning", reading: "eiantydning", meaning: "hint (suggestion)", example: { jp: "Det lå ei antydning i svaret, men ingen forstod den.", en: "There was a hint in the answer, but nobody understood it." }, accept: ["a suggestion", "a trace", "an intimation"], drill: { jp: "Han kom med ei antydning om noe", en: "He came out with a hint about something" }, hint: "ei antydning → antydninga. -ing-ord er hunkjønn; antydningen finnes også i trykk, og begge er tillatt i bokmål. Fra å antyde (u70). Også om mengde: ei antydning til smil." },
        { id: "no-u91l2-subtil", type: "vocab", front: "subtil", reading: "subtil", meaning: "subtle", example: { jp: "Forskjellen er subtil, og de fleste hører den ikke i det hele tatt.", en: "The difference is subtle, and most people do not hear it at all." }, accept: ["fine", "understated", "delicate"], drill: { jp: "Humoren hans er alltid subtil", en: "His humour is always subtle" }, hint: "subtil → subtilt, subtile. Låneord, litt akademisk. Om noe som er der, men som du må lete etter." },
        { id: "no-u91l2-ennyanse", type: "vocab", front: "en nyanse", reading: "ennyanse", meaning: "nuance (shade of meaning)", example: { jp: "Det er en nyanse mellom å love og å håpe, og den er viktig.", en: "There is a nuance between promising and hoping, and it matters." }, accept: ["a shade", "a subtle difference"], drill: { jp: "Her er det en nyanse du glemte", en: "Here there is a nuance you forgot" }, hint: "en nyanse → nyansen, flertall nyanser. Uttales -anse. Både om farger og om mening. Verbet å nyansere er u73." },
        { id: "no-u91l2-naermest", type: "vocab", front: "nærmest", reading: "naermest", meaning: "practically (all but)", example: { jp: "Det er nærmest umulig å få svar før jul.", en: "It is practically impossible to get an answer before Christmas." }, accept: ["almost", "virtually"], drill: { jp: "Hun var nærmest ferdig allerede", en: "She was practically finished already" }, hint: "nærmest bøyes ikke når det står som adverb. Superlativ av nær (u7). ⚠ To bruk: nærmest umulig (nesten), og den nærmeste butikken (closest)." },
        { id: "no-u91l2-pafallende", type: "vocab", front: "påfallende", reading: "pafallende", meaning: "conspicuous (striking)", example: { jp: "Det er påfallende hvor få som svarer, men ingen vil snakke om det.", en: "It is conspicuous how few answer, but nobody wants to talk about it." }, accept: ["striking", "noticeable", "marked"], drill: { jp: "Han var påfallende rolig hele tida", en: "He was conspicuously calm the whole time" }, hint: "påfallende bøyes ikke. På + å falle: det faller deg inn, du legger merke til det. Nesten alltid om noe som burde vært annerledes." },
        { id: "no-u91l2-merkbar", type: "vocab", front: "merkbar", reading: "merkbar", meaning: "perceptible (noticeable)", example: { jp: "Det ble merkbart bedre etter at de fikk ny leder.", en: "It got perceptibly better after they got a new manager." }, accept: ["noticeable", "appreciable"], drill: { jp: "Forskjellen var merkbar med en gang", en: "The difference was perceptible straight away" }, hint: "merkbar → merkbart, merkbare. Fra å merke: stor nok til at du kjenner den. Merkbar handler om sansene, påfallende om oppmerksomheten (u58)." },
      ],
    },
    {
      id: "no-u91l3",
      unit: 91,
      lesson: 3,
      title: "Å dempe og forsterke",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Turn the volume of a claim up or down — soften it, play it down, qualify it, or mark it as strong.",
      items: [
        { id: "no-u91l3-adempe", type: "vocab", front: "å dempe", reading: "adempe", meaning: "to dampen (turn down)", example: { jp: "De prøver å dempe uenigheten ved å love mer penger.", en: "They are trying to dampen the disagreement by promising more money." }, accept: ["to soften", "to muffle", "to subdue"], drill: { jp: "Det er lurt å dempe lyden litt", en: "It is wise to turn the sound down a little" }, hint: "å dempe → demper, dempet. Om lyd, lys og følelser. Å dempe er å skru ned styrken; å tone ned er å gjøre noe mindre viktig." },
        { id: "no-u91l3-atonened", type: "vocab", front: "å tone ned", reading: "atonened", meaning: "to play down", example: { jp: "Avisa tonet ned hele saka etter at sjefen deres ringte.", en: "The paper played the whole case down after their boss rang." }, accept: ["to downplay", "to soft-pedal"], drill: { jp: "De begynte å tone ned kravene", en: "They began to play down the demands" }, hint: "å tone ned → toner ned, tonet ned. En tone + ned. Om betydning, ikke om lyd: du toner ned en sak for at den skal virke mindre alvorlig." },
        { id: "no-u91l3-amodifisere", type: "vocab", front: "å modifisere", reading: "amodifisere", meaning: "to qualify (a claim)", example: { jp: "Hun modifiserte påstanden med en gang hun så tallene.", en: "She qualified the claim the moment she saw the figures." }, accept: ["to modify", "to temper", "to soften"], drill: { jp: "Han begynte å modifisere alt han sa", en: "He began to qualify everything he said" }, hint: "å modifisere → modifiserer, modifiserte. Formelt. Du tar ikke tilbake påstanden, du gjør den svakere. Å nyansere (u73) er å legge til flere sider." },
        { id: "no-u91l3-markant", type: "vocab", front: "markant", reading: "markant", meaning: "marked (pronounced)", example: { jp: "Det er en markant forskjell mellom de to gruppene.", en: "There is a marked difference between the two groups." }, accept: ["distinct", "significant", "pronounced"], drill: { jp: "Dette er en markant endring", en: "This is a marked change" }, hint: "markant → markant, markante. Fra å markere (u63). Stor nok til at ingen kan overse den." },
        { id: "no-u91l3-utpreget", type: "vocab", front: "utpreget", reading: "utpreget", meaning: "distinctly (characteristically)", example: { jp: "Han er utpreget grundig, men ikke særlig rask.", en: "He is distinctly thorough, but not particularly quick." }, accept: ["markedly", "typically", "strongly"], drill: { jp: "Hun er utpreget rolig under press", en: "She is distinctly calm under pressure" }, hint: "utpreget → utpreget, utpregede. Ut + å prege (u63). Om egenskaper (u31), ikke om tall: utpreget norsk, utpreget rolig." },
        { id: "no-u91l3-ytterst", type: "vocab", front: "ytterst", reading: "ytterst", meaning: "extremely (utterly)", example: { jp: "Det er ytterst sjelden at noen klager på maten her.", en: "It is extremely rare for anybody to complain about the food here." }, accept: ["utterly", "exceedingly"], drill: { jp: "Dette er ytterst viktig for oss", en: "This is extremely important for us" }, hint: "ytterst bøyes ikke som adverb. Superlativ av ytre. ⚠ To bruk: ytterst viktig (svært), og huset ytterst på øya (u1) — furthest out." },
      ],
    },
    {
      id: "no-u91l4",
      unit: 91,
      lesson: 4,
      title: "Omtrent, ikke nøyaktig",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Handle an approximation honestly — name the trend, weigh the trade-off, and flag what is only roughly true.",
      items: [
        { id: "no-u91l4-entendens", type: "vocab", front: "en tendens", reading: "entendens", meaning: "trend (tendency)", example: { jp: "Tendensen er klar, men fem år er for lite til å være sikker.", en: "The trend is clear, but five years is too little to be certain." }, accept: ["a tendency", "an inclination"], drill: { jp: "Her er det en tendens vi ser ofte", en: "Here there is a trend we often see" }, hint: "en tendens → tendensen, flertall tendenser. Både om tall som beveger seg og om folk: han har en tendens til å komme for sent." },
        { id: "no-u91l4-eiavveining", type: "vocab", front: "ei avveining", reading: "eiavveining", meaning: "trade-off (balancing)", example: { jp: "Alt sammen handler om ei avveining mellom tid og penger.", en: "All of it is about a trade-off between time and money." }, accept: ["a balancing act", "a weighing-up"], drill: { jp: "Dette er ei avveining hver gang", en: "This is a trade-off every time" }, hint: "ei avveining → avveininga. -ing-ord er hunkjønn; avveiningen finnes også i trykk. Av + å veie: du legger to goder på hver si vekt og velger." },
        { id: "no-u91l4-moderat", type: "vocab", front: "moderat", reading: "moderat", meaning: "moderate", example: { jp: "Planen er moderat, og kanskje er det derfor ingen er helt fornøyd.", en: "The plan is moderate, and perhaps that is why nobody is entirely happy." }, accept: ["modest", "restrained", "middling"], drill: { jp: "Endringa var moderat og helt ventet", en: "The change was moderate and entirely expected" }, hint: "moderat → moderat, moderate. Verken mye eller lite. I politikken er en moderat en som ligger i midten." },
        { id: "no-u91l4-overdreven", type: "vocab", front: "overdreven", reading: "overdreven", meaning: "exaggerated", example: { jp: "Hele saka ble overdreven i avisene, men noe av den var sann.", en: "The whole case was exaggerated in the papers, but some of it was true." }, accept: ["excessive", "overblown", "over the top"], drill: { jp: "Hele historia er litt overdreven", en: "The whole story is a bit exaggerated" }, hint: "overdreven → overdrevent, overdrevne. Merk at -en-adjektiv mister en e i flertall. Fra å overdrive (u51)." },
        { id: "no-u91l4-unoyaktig", type: "vocab", front: "unøyaktig", reading: "unoyaktig", meaning: "imprecise", example: { jp: "Tallene er unøyaktige, men de er gode nok til å bruke.", en: "The figures are imprecise, but they are good enough to use." }, accept: ["inaccurate", "approximate", "rough"], drill: { jp: "Dette tallet er altfor unøyaktig", en: "This figure is far too imprecise" }, hint: "unøyaktig → unøyaktig, unøyaktige. U- + nøyaktig. Merk ø-folden: lesinga er unoyaktig. Om målinger og om folk som ikke er nøye." },
        { id: "no-u91l4-ihovedsak", type: "vocab", front: "i hovedsak", reading: "ihovedsak", meaning: "in the main", example: { jp: "Vi er i hovedsak enige, og det andre kan vente til seinere.", en: "We agree in the main, and the rest can wait until later." }, accept: ["mainly", "essentially", "by and large"], drill: { jp: "Vi er i hovedsak ferdige nå", en: "We are in the main finished now" }, hint: "i hovedsak er et fast uttrykk og bøyes ikke. Hoved- (som i en hovedperson, u64) + ei sak (u50). Skriftlig; muntlig sier folk heller stort sett (u73)." },
      ],
    },
  ],
};
