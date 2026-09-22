// NO Unit 90 — Systemer og abstraksjon (slot: abstraction) — B2
// Retitled from the scaffold's English placeholder "Systems and abstraction".
// B2 band conventions live in no/unit88.js's header; language-wide in unit1.js.
//
// u58 "Abstrakte begreper" is the B1 version of this and it took the single
// words: et begrep, et prinsipp, en helhet, konkret, å omfatte, et faktum.
// What it did NOT take is the vocabulary for talking about how parts fit
// together — en struktur, et ledd, gjensidig, ei vekselvirkning, innbyrdes.
// That is the honest B2 addition: not more abstract nouns, but the words that
// let a learner describe a SYSTEM rather than name a thing.
//
// ⚠️ et system itself is u75l4 and en sammenheng is u50l1 — both already taught,
// both used freely in the examples here, neither re-taught. Checked with
// `npm run taught -- no`, not from memory.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT90 = {
  id: "no-u90",
  lang: "no",
  title: "Systemer og abstraksjon",
  order: 90,
  stage: "b2",
  lessons: [
    {
      id: "no-u90l1",
      unit: 90,
      lesson: 1,
      title: "Struktur og oppbygning",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how something is built rather than what it is — its structure, the frame around it, and the part each piece plays.",
      items: [
        { id: "no-u90l1-enstruktur", type: "vocab", front: "en struktur", reading: "enstruktur", meaning: "structure (how the parts are arranged)", example: { jp: "Teksten har gode tanker, men den savner en struktur som folk kan følge.", en: "The text has good ideas, but it lacks a structure that people can follow." }, accept: ["an arrangement of parts", "an organisation"], drill: { jp: "Vi trenger en struktur her", en: "We need a structure here" }, hint: "en struktur → strukturen, flertall strukturer. Et system (u75) GJØR noe; en struktur er bare måten delene står på." },
        { id: "no-u90l1-etrammeverk", type: "vocab", front: "et rammeverk", reading: "etrammeverk", meaning: "framework (the agreed frame a thing works inside)", example: { jp: "Loven gir et rammeverk, og så bestemmer hver kommune resten selv.", en: "The law gives a framework, and then each municipality decides the rest itself." }, accept: ["a frame of rules", "a scaffold of principles"], drill: { jp: "Loven er et rammeverk for dette", en: "The law is a framework for this" }, hint: "et rammeverk → rammeverket. Ei ramme + et verk. Et rammeverk sier hvor grensene går, ikke hva du skal gjøre inni dem." },
        { id: "no-u90l1-enmekanisme", type: "vocab", front: "en mekanisme", reading: "enmekanisme", meaning: "mechanism (the working part that makes a thing happen)", example: { jp: "Ingen er uenige om tallene, men vi forstår ikke hvilken mekanisme som ligger under.", en: "Nobody disagrees about the figures, but we do not understand which mechanism lies underneath." }, accept: ["a working part", "what makes it happen"], drill: { jp: "Dette er en mekanisme vi kjenner", en: "This is a mechanism we know" }, hint: "en mekanisme → mekanismen, flertall mekanismer. Brukes langt utenfor maskiner: en mekanisme i kroppen, i markedet, i et språk." },
        { id: "no-u90l1-enmodell", type: "vocab", front: "en modell", reading: "enmodell", meaning: "model (a simplified picture you can think with)", example: { jp: "En modell er alltid for lett, og det er nettopp derfor den er til nytte.", en: "A model is always too simple, and that is exactly why it is useful." }, accept: ["a simplified representation", "a working picture"], drill: { jp: "Vi bygger en modell av dette", en: "We are building a model of this" }, hint: "en modell → modellen, flertall modeller. Den norske modellen er et fast uttrykk om arbeidsliv og velferd." },
        { id: "no-u90l1-etledd", type: "vocab", front: "et ledd", reading: "etledd", meaning: "link (one step in a chain of steps)", example: { jp: "Hvert ledd i saken er riktig, men til sammen blir svaret likevel galt.", en: "Every link in the matter is correct, but taken together the answer still comes out wrong." }, accept: ["a step in a chain", "one stage"], drill: { jp: "Her er et ledd som svikter", en: "Here is a link that fails" }, hint: "et ledd → leddet, flertall ledd (likt i flertall). Også kroppsdelen: et kne er et ledd. I språk er et ledd en del av setninga." },
        { id: "no-u90l1-autgjore", type: "vocab", front: "å utgjøre", reading: "autgjore", meaning: "to make up (amount to, as a share of a whole)", example: { jp: "Barn under ti år utgjør nesten halvparten av dem som bor der.", en: "Children under ten make up almost half of those who live there." }, accept: ["to constitute", "to amount to"], drill: { jp: "Det er lett å utgjøre en forskjell", en: "It is easy to make up a difference" }, hint: "å utgjøre → utgjør, utgjorde. Ut + å gjøre. Brukes om andeler og om forskjeller: det utgjør en forskjell. ø folder til o." },
      ],
    },
    {
      id: "no-u90l2",
      unit: 90,
      lesson: 2,
      title: "Å dele inn",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Sort things properly — put them in categories, say what marks each one out, and be clear about what you are leaving out.",
      items: [
        { id: "no-u90l2-enkategori", type: "vocab", front: "en kategori", reading: "enkategori", meaning: "category (a named box things are sorted into)", example: { jp: "Problemet passer ikke inn i noen kategori, og derfor er det ingen som eier det.", en: "The problem does not fit into any category, and that is why nobody owns it." }, accept: ["a class of things", "a grouping"], drill: { jp: "Dette hører til en kategori for seg", en: "This belongs to a category of its own" }, hint: "en kategori → kategorien, flertall kategorier. Trykk på siste stavelse: kategoRI. En kategori er laget av mennesker, ikke funnet i naturen." },
        { id: "no-u90l2-eiinndeling", type: "vocab", front: "ei inndeling", reading: "eiinndeling", meaning: "a division (the way a whole has been cut up)", example: { jp: "Ei inndeling i tre deler er lett å huske, men den skjuler mye.", en: "A division into three parts is easy to remember, but it hides a lot." }, accept: ["a way of dividing", "a breakdown"], drill: { jp: "Vi lager ei inndeling som er ny", en: "We are making a division that is new" }, hint: "ei inndeling → inndelinga. -ing er hunkjønn (unit88 regel B3). Inn + å dele (u27). Kategoriene er boksene; inndelinga er valget av bokser." },
        { id: "no-u90l2-etkjennetegn", type: "vocab", front: "et kjennetegn", reading: "etkjennetegn", meaning: "distinguishing mark (what lets you tell one from another)", example: { jp: "Et godt kjennetegn er ikke hva de sier, men hvem de spør først.", en: "A good distinguishing mark is not what they say, but who they ask first." }, accept: ["a hallmark", "a telltale feature"], drill: { jp: "Dette er et kjennetegn vi ser ofte", en: "This is a distinguishing mark we often see" }, hint: "et kjennetegn → kjennetegnet, flertall kjennetegn (likt). Å kjenne (u1) + et tegn. En egenskap (u31) har tingen; et kjennetegn bruker DU for å kjenne den igjen." },
        { id: "no-u90l2-overordnet", type: "vocab", front: "overordnet", reading: "overordnet", meaning: "overarching (standing above the rest and setting the terms)", example: { jp: "Målet er overordnet alt annet i denne saken, og det bestemmer hva vi gjør først.", en: "The goal is overarching above everything else in this matter, and it decides what we do first." }, accept: ["higher-order", "governing"], drill: { jp: "Dette er et overordnet hensyn", en: "This is an overarching consideration" }, hint: "Over + å ordne. Bøyes overordnet, overordnede. Også om folk: min overordnede er sjefen min." },
        { id: "no-u90l2-underordnet", type: "vocab", front: "underordnet", reading: "underordnet", meaning: "subordinate (giving way to something above it)", example: { jp: "Prisen er underordnet så lenge arbeidet blir gjort riktig.", en: "The price is subordinate as long as the work gets done properly." }, accept: ["of lesser rank", "secondary to"], drill: { jp: "Dette er underordnet det andre", en: "This is subordinate to the other" }, hint: "Under + å ordne, motsatt av overordnet. I grammatikk: ei underordnet setning er ei leddsetning (u69)." },
        { id: "no-u90l2-aavgrense", type: "vocab", front: "å avgrense", reading: "aavgrense", meaning: "to delimit (say where a subject stops)", example: { jp: "Hun avgrenser oppgaven til et år, ellers blir den aldri ferdig.", en: "She delimits the assignment to one year, otherwise it will never be finished." }, accept: ["to set bounds to", "to narrow the scope of"], drill: { jp: "Det er nødvendig å avgrense dette", en: "It is necessary to delimit this" }, hint: "å avgrense → avgrenser, avgrenset. Av + ei grense (u22). Å avgrense er å si hva du IKKE skal snakke om, og det er halve jobben." },
      ],
    },
    {
      id: "no-u90l3",
      unit: 90,
      lesson: 3,
      title: "Abstrakt og konkret",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Move up and down the ladder of abstraction on purpose — name the angle you are taking and how wide you are casting.",
      items: [
        { id: "no-u90l3-abstrakt", type: "vocab", front: "abstrakt", reading: "abstrakt", meaning: "abstract (away from any single case)", example: { jp: "Så lenge vi snakker abstrakt er alle enige, men det stemmer ikke når vi tar et eksempel.", en: "As long as we talk in the abstract everybody agrees, but that does not hold once we take an example." }, accept: ["general and theoretical", "not tied to a case"], drill: { jp: "Dette blir for abstrakt for meg", en: "This is getting too abstract for me" }, hint: "Bøyes abstrakt, abstrakte. Motsatt av konkret (u58). Abstrakt er ikke det samme som vanskelig — og ikke det samme som uklart." },
        { id: "no-u90l3-etperspektiv", type: "vocab", front: "et perspektiv", reading: "etperspektiv", meaning: "perspective (the distance and angle you look from)", example: { jp: "I et lengre perspektiv er dette en liten sak, men det hjelper ikke dem det gjelder nå.", en: "In a longer perspective this is a small matter, but that does not help those it concerns now." }, accept: ["a vantage point", "a way of seeing"], drill: { jp: "La oss ta et perspektiv til", en: "Let us take one more perspective" }, hint: "et perspektiv → perspektivet, flertall perspektiver. Et synspunkt (u88) er en MENING; et perspektiv er avstanden du ser fra." },
        { id: "no-u90l3-eninnfallsvinkel", type: "vocab", front: "en innfallsvinkel", reading: "eninnfallsvinkel", meaning: "angle of approach (where you choose to cut into a subject)", example: { jp: "Alle skriver om det samme, så hun leter etter en innfallsvinkel ingen har brukt.", en: "Everybody is writing about the same thing, so she is looking for an angle of approach nobody has used." }, accept: ["a way in to a subject", "a chosen approach"], drill: { jp: "Her trenger vi en innfallsvinkel til", en: "Here we need one more angle of approach" }, hint: "en innfallsvinkel → innfallsvinkelen. Inn + å falle + en vinkel. Journalister og forskere bruker dette ordet hele tida." },
        { id: "no-u90l3-eitilnaerming", type: "vocab", front: "ei tilnærming", reading: "eitilnaerming", meaning: "an approach (the method you go at a problem with)", example: { jp: "De to gruppene har samme mål, men ei helt ulik tilnærming til arbeidet.", en: "The two groups have the same goal, but a completely different approach to the work." }, accept: ["a method of tackling", "a way of going about it"], drill: { jp: "Vi prøver ei tilnærming som er ny", en: "We are trying an approach that is new" }, hint: "ei tilnærming → tilnærminga. -ing er hunkjønn (unit88 regel B3). Til + nær. NB: æ folder til ae, så lesinga er eitilnaerming." },
        { id: "no-u90l3-etomfang", type: "vocab", front: "et omfang", reading: "etomfang", meaning: "extent (how much ground a thing covers)", example: { jp: "Ingen visste hvor stort omfang saken hadde før avisa begynner å regne.", en: "Nobody knew how great an extent the matter had before the newspaper starts counting." }, accept: ["a scope", "a size of reach"], drill: { jp: "Vi kjenner ikke et omfang som dette", en: "We do not know an extent like this" }, hint: "et omfang → omfanget. Om + å fange: det du fanger rundt. Å omfatte (u58) er verbet. Brukes om skade, arbeid og problem." },
        { id: "no-u90l3-etsamspill", type: "vocab", front: "et samspill", reading: "etsamspill", meaning: "interplay (two things working on each other at once)", example: { jp: "Det er et samspill mellom det du spiser og hvor godt du sover.", en: "There is an interplay between what you eat and how well you sleep." }, accept: ["an interaction", "a working together"], drill: { jp: "Her er et samspill vi ser", en: "Here is an interplay we can see" }, hint: "et samspill → samspillet. Sammen + å spille. Opprinnelig om musikk, nå om alt som virker sammen." },
      ],
    },
    {
      id: "no-u90l4",
      unit: 90,
      lesson: 4,
      title: "Hvordan delene virker på hverandre",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how parts affect each other — mutually, back and forth, and which single factor is doing the work.",
      items: [
        { id: "no-u90l4-gjensidig", type: "vocab", front: "gjensidig", reading: "gjensidig", meaning: "mutual (running both ways between two sides)", example: { jp: "Avtalen bygger på gjensidig tillit, og uten den betyr papiret lite for begge.", en: "The agreement rests on mutual trust, and without it the paper means little to either." }, accept: ["reciprocal", "both ways"], drill: { jp: "Dette er en gjensidig avtale", en: "This is a mutual agreement" }, hint: "Gjen- (som i å gjenta, u33) + en side: fra hver side tilbake. Bøyes gjensidig, gjensidige." },
        { id: "no-u90l4-eivekselvirkning", type: "vocab", front: "ei vekselvirkning", reading: "eivekselvirkning", meaning: "feedback loop (each side changing the other in turn)", example: { jp: "Det er ei vekselvirkning her: dårlig søvn gir stress, og stress gir dårligere søvn.", en: "There is a feedback loop here: poor sleep gives stress, and stress gives poorer sleep." }, accept: ["a reciprocal effect", "a two-way influence"], drill: { jp: "Vi ser ei vekselvirkning mellom dem", en: "We see a feedback loop between them" }, hint: "ei vekselvirkning → vekselvirkninga. -ing er hunkjønn. Å veksle (u27) + å virke (u54). Sterkere enn gjensidig: her ENDRER de hverandre." },
        { id: "no-u90l4-enfaktor", type: "vocab", front: "en faktor", reading: "enfaktor", meaning: "factor (one cause among several at work)", example: { jp: "Prisen er en faktor, men den er ikke den viktige her, og det glemmer mange.", en: "The price is a factor, but it is not the important one here, and many forget that." }, accept: ["a contributing cause", "one element at work"], drill: { jp: "Her er en faktor vi glemte", en: "Here is a factor we forgot" }, hint: "en faktor → faktoren, flertall faktorer. En årsak (u52) forklarer alene; en faktor er én av flere som spiller inn." },
        { id: "no-u90l4-ainnga", type: "vocab", front: "å inngå", reading: "ainnga", meaning: "to form part of (belong inside a larger whole)", example: { jp: "Dette kurset inngår i utdanninga, så du kan ikke velge det bort.", en: "This course forms part of the education, so you cannot opt out of it." }, accept: ["to be included in", "to belong within"], drill: { jp: "Det er viktig å inngå i planen", en: "It is important to form part of the plan" }, hint: "å inngå → inngår, inngikk. Inn + å gå. NB: å inngå en avtale betyr å SLUTTE en avtale — samme verb, helt annen bruk." },
        { id: "no-u90l4-innbyrdes", type: "vocab", front: "innbyrdes", reading: "innbyrdes", meaning: "among themselves (between the members of one group)", example: { jp: "De er innbyrdes uenige, men ut mot andre sier de alltid det samme.", en: "They disagree among themselves, but outwardly they always say the same thing." }, accept: ["between one another", "internally among them"], drill: { jp: "De er innbyrdes ulike her", en: "They are different among themselves here" }, hint: "Bøyes ikke. Gjensidig er mellom TO sider; innbyrdes er inni ÉN gruppe. Et innbyrdes forhold, et innbyrdes oppgjør." },
        { id: "no-u90l4-enfunksjon", type: "vocab", front: "en funksjon", reading: "enfunksjon", meaning: "function (the job a part does in the whole)", example: { jp: "Regelen har en funksjon selv om ingen husker hvorfor den kom.", en: "The rule has a function even though nobody remembers why it came about." }, accept: ["a role in a system", "a purpose served"], drill: { jp: "Dette har en funksjon her", en: "This has a function here" }, hint: "en funksjon → funksjonen, flertall funksjoner. -sjon er hankjønn (unit88 regel B3). Å fungere (u84) er verbet. Ei rolle (u35) er om folk; en funksjon er om deler." },
      ],
    },
  ],
};
