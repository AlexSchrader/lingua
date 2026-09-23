// NO Unit 95 — Historie og kulturarv (slot: history-culture) — B2
// Block 1 of Norwegian B2. Band constitution: no/unit88.js §C1–C7.
//
// Blocked before authoring: `et århundre` u59, `ei fortid` u28, `en skikk` u50,
// `en myte` u58 (⚠ found only after check-front.mjs was fixed — the probe had
// reported `ei myte` free; see unit88.js §C4), `en bonde` u18, `en kilde` u54,
// `opprinnelig` u59, `å bevare` u59, `å avskaffe` u59. u59 is a history-adjacent
// unit and takes most of the abstract time vocabulary, so this unit is TIME (l1),
// OLD POWER (l2), UPHEAVAL (l3) and WHAT IS LEFT BEHIND (l4).
//
// `ei erobring` was cut as a transparent derivation of `å erobre` (l2) and
// `en hersker` as one of `å herske`.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT95 = {
  id: "no-u95",
  lang: "no",
  title: "Historie og kulturarv",
  order: 95,
  stage: "b2",
  lessons: [
    {
      id: "no-u95l1",
      unit: 95,
      lesson: 1,
      title: "Tid og epoker",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Place something in Norwegian historical time — the epoch, the age, your own era, and what earlier ages handed on.",
      items: [
        { id: "no-u95l1-enepoke", type: "vocab", front: "en epoke", reading: "enepoke", meaning: "epoch", example: { jp: "Epoken varte i tre hundre år, og få skrev noe ned.", en: "The epoch lasted three hundred years, and few wrote anything down." }, accept: ["an era", "a period (historical)"], drill: { jp: "Dette var en epoke uten krig", en: "This was an epoch without war" }, hint: "en epoke → epoken, flertall epoker. Trykket på nest siste stavelse: e-PO-ke. Lengre enn en periode (u28), kortere enn en tidsalder." },
        { id: "no-u95l1-entidsalder", type: "vocab", front: "en tidsalder", reading: "entidsalder", meaning: "age (great era)", example: { jp: "Vi lever i en tidsalder der alt sammen blir målt.", en: "We live in an age where everything gets measured." }, accept: ["an era", "an epoch"], drill: { jp: "Dette er en tidsalder uten grenser", en: "This is an age without borders" }, hint: "en tidsalder → tidsalderen, flertall tidsaldrer. Tid (u28) + en alder (u28). Større enn en epoke: steinalderen er en tidsalder." },
        { id: "no-u95l1-eisamtid", type: "vocab", front: "ei samtid", reading: "eisamtid", meaning: "the present age", example: { jp: "Forfatteren skrev om samtida, ikke om fortida.", en: "The author wrote about the present age, not about the past." }, accept: ["contemporary times", "one's own time"], drill: { jp: "Boka handler om ei samtid vi kjenner", en: "The book is about a present age we recognise" }, hint: "ei samtid → samtida. Følger ei tid og er hunkjønn; samtiden er vanlig i trykk, og begge er tillatt. Sam- + tid: den tida du selv lever i. Paret til ei fortid (u28)." },
        { id: "no-u95l1-enarv", type: "vocab", front: "en arv", reading: "enarv", meaning: "legacy (inheritance)", example: { jp: "Arven etter dem er mye større enn noen trodde.", en: "The legacy they left is much bigger than anybody thought." }, accept: ["an inheritance", "a heritage"], drill: { jp: "Dette er en arv ingen ville ha", en: "This is a legacy nobody wanted" }, hint: "en arv → arven. Står oftest uten artikkel: å få arv. Både penger etter noen døde og det én tid gir videre til den neste." },
        { id: "no-u95l1-enkulturarv", type: "vocab", front: "en kulturarv", reading: "enkulturarv", meaning: "cultural heritage", example: { jp: "Kulturarven er ikke bare hus, men også ord og melodier.", en: "Cultural heritage is not only buildings, but also words and melodies." }, accept: ["heritage", "cultural legacy"], drill: { jp: "Dette er en kulturarv vi deler", en: "This is a cultural heritage we share" }, hint: "en kulturarv → kulturarven. Kultur + en arv. Står ofte uten artikkel: å ta vare på kulturarv. Stavkirkene er det eksempelet alle nevner." },
        { id: "no-u95l1-etopphav", type: "vocab", front: "et opphav", reading: "etopphav", meaning: "origin", example: { jp: "Ordet har et opphav ingen er helt sikre på.", en: "The word has an origin nobody is entirely sure about." }, accept: ["a source", "provenance"], drill: { jp: "Dette har et opphav i nord", en: "This has an origin in the north" }, hint: "et opphav → opphavet, flertall opphav. Opp + å ha (u3). Om ord, skikker (u50) og folk: hvor noe kommer fra." },
      ],
    },
    {
      id: "no-u95l2",
      unit: 95,
      lesson: 2,
      title: "Makt og samfunn før",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how an older society was held together — who conquered, who ruled, who was born into what, and who went to war.",
      items: [
        { id: "no-u95l2-aerobre", type: "vocab", front: "å erobre", reading: "aerobre", meaning: "to conquer", example: { jp: "De erobret byen på én dag, og ga den fra seg igjen etter ti år.", en: "They conquered the city in one day, and gave it up again after ten years." }, accept: ["to capture", "to take (by force)"], drill: { jp: "Det er lett å erobre en by", en: "It is easy to conquer a city" }, hint: "å erobre → erobrer, erobret. Trykket på nest siste stavelse: e-ROB-re. Ei erobring er resultatet. Også i overført tyding: å erobre et marked (u66)." },
        { id: "no-u95l2-aherske", type: "vocab", front: "å herske", reading: "aherske", meaning: "to rule", example: { jp: "Han hersket lenge, og svært få likte det.", en: "He ruled for a long time, and very few liked it." }, accept: ["to reign", "to dominate"], drill: { jp: "Det er ikke lett å herske her", en: "It is not easy to rule here" }, hint: "å herske → hersker, hersket. En hersker er personen. Også om tilstander: det hersket ro (u22) i rommet." },
        { id: "no-u95l2-etrike", type: "vocab", front: "et rike", reading: "etrike", meaning: "realm (kingdom)", example: { jp: "Riket var stort, men det holdt bare i hundre år.", en: "The realm was large, but it only lasted a hundred years." }, accept: ["a kingdom", "an empire"], drill: { jp: "Dette var et rike uten grenser", en: "This was a realm without borders" }, hint: "et rike → riket, flertall riker. Fra rik (u55). Norge var flere riker før det ble ett." },
        { id: "no-u95l2-enadel", type: "vocab", front: "en adel", reading: "enadel", meaning: "nobility", example: { jp: "Norge hadde nesten ingen adel, og det preger landet ennå.", en: "Norway had almost no nobility, and that still marks the country." }, accept: ["the aristocracy", "the gentry"], drill: { jp: "Landet hadde en adel som var liten", en: "The country had a nobility that was small" }, hint: "en adel → adelen. Står oftest uten artikkel: å høre til adelen. Adelig er adjektivet. Norsk adel ble avskaffet (u59) i 1821." },
        { id: "no-u95l2-etsamfunnslag", type: "vocab", front: "et samfunnslag", reading: "etsamfunnslag", meaning: "social stratum", example: { jp: "Alle samfunnslag betalte, men slett ikke like mye.", en: "Every social stratum paid, but by no means the same amount." }, accept: ["a social layer", "a stratum"], drill: { jp: "Dette er et samfunnslag vi glemmer", en: "This is a social stratum we forget" }, hint: "et samfunnslag → samfunnslaget, flertall samfunnslag. Et samfunn (u32) + et lag. Ei klasse (u85) er skarpere; et lag er mykere og går over i hverandre." },
        { id: "no-u95l2-enkrig", type: "vocab", front: "en krig", reading: "enkrig", meaning: "war", example: { jp: "Krigen varte i fem år, og byen ble aldri helt den samme.", en: "The war lasted five years, and the city was never quite the same." }, accept: ["warfare", "conflict (armed)"], drill: { jp: "Familien kom gjennom en krig sammen", en: "The family came through a war together" }, hint: "en krig → krigen, flertall kriger. Uttales med hard g til slutt. ⚠ I Norge betyr «krigen» uten mer alltid 1940–45." },
      ],
    },
    {
      id: "no-u95l3",
      unit: 95,
      lesson: 3,
      title: "Omveltninger",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a society turning over — peace, upheaval, revolution, independence, and people leaving or arriving in large numbers.",
      items: [
        { id: "no-u95l3-enfred", type: "vocab", front: "en fred", reading: "enfred", meaning: "peace", example: { jp: "Freden kom i mai, og folk danset hele natta.", en: "Peace came in May, and people danced all night." }, accept: ["peace", "quiet"], drill: { jp: "Alle håper på en fred som varer", en: "Everybody hopes for a peace that lasts" }, hint: "en fred → freden. Står oftest uten artikkel: å slutte fred. Også om ro: la meg få fred. Fredag har ingenting med fred å gjøre." },
        { id: "no-u95l3-eiomveltning", type: "vocab", front: "ei omveltning", reading: "eiomveltning", meaning: "upheaval", example: { jp: "Det ble ei omveltning ingen hadde sett komme.", en: "It became an upheaval nobody had seen coming." }, accept: ["a radical change", "an overturning"], drill: { jp: "Dette blir ei omveltning for alle", en: "This is going to be an upheaval for everybody" }, hint: "ei omveltning → omveltninga. -ing/-ning-ord er hunkjønn; omveltningen er vanlig i trykk. Om + å velte: hele samfunnet snus rundt." },
        { id: "no-u95l3-enrevolusjon", type: "vocab", front: "en revolusjon", reading: "enrevolusjon", meaning: "revolution", example: { jp: "Revolusjonen kom aldri til Norge, men ideene gjorde det.", en: "The revolution never came to Norway, but the ideas did." }, accept: ["an uprising", "a revolution"], drill: { jp: "Dette var en revolusjon for alle", en: "This was a revolution for everybody" }, hint: "en revolusjon → revolusjonen, flertall revolusjoner. -sjon-ord er hankjønn. Også i overført tyding: en revolusjon på kjøkkenet (u1)." },
        { id: "no-u95l3-enselvstendighet", type: "vocab", front: "en selvstendighet", reading: "enselvstendighet", meaning: "independence", example: { jp: "Selvstendigheten kom uten krig, og det er sjelden i Europa.", en: "Independence came without war, and that is rare in Europe." }, accept: ["autonomy", "self-reliance"], drill: { jp: "Landet fikk en selvstendighet det ville ha", en: "The country got an independence it wanted" }, hint: "en selvstendighet → selvstendigheten. -het-ord er hankjønn (regel 1), aldri ei. Selv + å stå. Norge ble selvstendig i 1905, og det skjedde uten krig." },
        { id: "no-u95l3-eiutvandring", type: "vocab", front: "ei utvandring", reading: "eiutvandring", meaning: "emigration", example: { jp: "Utvandringa var stor i hundre år, og få av dem kom tilbake.", en: "Emigration was large for a hundred years, and few of them came back." }, accept: ["outward migration"], drill: { jp: "Dette var ei utvandring ingen glemmer", en: "This was an emigration nobody forgets" }, hint: "ei utvandring → utvandringa. -ing/-ning-ord er hunkjønn; utvandringen er vanlig i trykk. Ut + å vandre. Paret til ei innvandring." },
        { id: "no-u95l3-eiinnvandring", type: "vocab", front: "ei innvandring", reading: "eiinnvandring", meaning: "immigration", example: { jp: "Innvandringa har gjort byen både større og yngre.", en: "Immigration has made the city both bigger and younger." }, accept: ["inward migration"], drill: { jp: "Dette handler om ei innvandring alle ser", en: "This is about an immigration everybody can see" }, hint: "ei innvandring → innvandringa. -ing/-ning-ord er hunkjønn; innvandringen er vanlig i trykk. Inn + å vandre. Paret til ei utvandring." },
      ],
    },
    {
      id: "no-u95l4",
      unit: 95,
      lesson: 4,
      title: "Spor etter fortida",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about what the past leaves behind in Norway — a dig, a memorial, a legend, and beliefs that were never written down.",
      items: [
        { id: "no-u95l4-eiutgraving", type: "vocab", front: "ei utgraving", reading: "eiutgraving", meaning: "excavation (archaeological dig)", example: { jp: "Utgravinga tok hele sommeren, og de fant to knapper.", en: "The dig took the whole summer, and they found two buttons." }, accept: ["a dig", "an excavation"], drill: { jp: "Her var det ei utgraving i sommer", en: "There was a dig here this summer" }, hint: "ei utgraving → utgravinga. -ing-ord er hunkjønn; utgravingen er vanlig i trykk. Ut + å grave (u26). Om arkeologi, ikke om en vanlig grøft." },
        { id: "no-u95l4-etminnesmerke", type: "vocab", front: "et minnesmerke", reading: "etminnesmerke", meaning: "memorial", example: { jp: "Minnesmerket står i byen, men få vet hvem det er for.", en: "The memorial stands in the city, but few know who it is for." }, accept: ["a monument"], drill: { jp: "De satte opp et minnesmerke her", en: "They put up a memorial here" }, hint: "et minnesmerke → minnesmerket, flertall minnesmerker. Et minne (u63) + et merke. Om folk og hendelser (u55) — sjelden om seire (u44)." },
        { id: "no-u95l4-etsagn", type: "vocab", front: "et sagn", reading: "etsagn", meaning: "folk legend", example: { jp: "Sagnet er gammelt, og noe av det er sikkert sant.", en: "The legend is old, and some of it is certainly true." }, accept: ["a legend", "a tale"], drill: { jp: "Her finnes det et sagn om dette", en: "There is a legend about this here" }, hint: "et sagn → sagnet, flertall sagn. Fra å si (u12): det som blir sagt videre. Et eventyr er dikta opp; et sagn skal være sant." },
        { id: "no-u95l4-eioverlevering", type: "vocab", front: "ei overlevering", reading: "eioverlevering", meaning: "oral tradition", example: { jp: "Alt sammen bygger på overlevering, ikke på noe skrevet.", en: "All of it rests on oral tradition, not on anything written." }, accept: ["handing down", "transmission (of tradition)"], drill: { jp: "Dette er ei overlevering fra gammelt av", en: "This is an oral tradition from long ago" }, hint: "ei overlevering → overleveringa. -ing-ord er hunkjønn; overleveringen er vanlig i trykk. Over + å levere (u24). Det som gis videre uten å bli skrevet ned." },
        { id: "no-u95l4-eifolketro", type: "vocab", front: "ei folketro", reading: "eifolketro", meaning: "folk belief", example: { jp: "Folketrua lever ennå, særlig på små steder.", en: "Folk belief is still alive, especially in small places." }, accept: ["popular belief", "folklore"], drill: { jp: "Her er det ei folketro som lever", en: "Here there is a folk belief that is alive" }, hint: "ei folketro → folketrua. Følger ei tro og er hunkjønn; folketroen finnes også i trykk. Folk (u77) + å tro (u12). Nissen og huldra hører hit." },
        { id: "no-u95l4-eibosetting", type: "vocab", front: "ei bosetting", reading: "eibosetting", meaning: "settlement", example: { jp: "Bosettinga her er eldre enn byen selv.", en: "The settlement here is older than the city itself." }, accept: ["habitation", "a settlement"], drill: { jp: "Dette var ei bosetting i nord", en: "This was a settlement in the north" }, hint: "ei bosetting → bosettinga. -ing-ord er hunkjønn; bosettingen er vanlig i trykk. Fra å bosette (u62). Både stedet og det å slå seg ned der." },
      ],
    },
  ],
};
