// NO Unit 90 — System og struktur (slot: abstraction) — B2
// Block 1 of Norwegian B2. Band constitution: no/unit88.js §C1–C7.
//
// Blocked before authoring: `et system` u75, `et prinsipp` u58, `et nivå` u50,
// `en helhet` u47, `konkret` u58, `et mønster` u42, `en sammenheng` u50,
// `en orden` u61, `en grad` u43. So this unit teaches the PARTS and the SORTING
// rather than the words for "system" and "level", which the learner already has.
// `ei forenkling` was cut as a transparent derivation of `å forenkle` (l3) and
// `ei rangering` as one of `å rangere`; `en kategori` and `et kriterium` took
// their places and are the better cards.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT90 = {
  id: "no-u90",
  lang: "no",
  title: "System og struktur",
  order: 90,
  stage: "b2",
  lessons: [
    {
      id: "no-u90l1",
      unit: 90,
      lesson: 1,
      title: "Delene i et system",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a system hangs together — name its parts, say how they act on each other, and point at where the loop closes.",
      items: [
        { id: "no-u90l1-enstruktur", type: "vocab", front: "en struktur", reading: "enstruktur", meaning: "structure", example: { jp: "Strukturen er lett å forstå, men ingen bruker den slik den er tenkt.", en: "The structure is easy to understand, but nobody uses it the way it was meant." }, accept: ["an organisation (of parts)", "a framework"], drill: { jp: "Vi trenger en struktur som holder", en: "We need a structure that holds" }, hint: "en struktur → strukturen, flertall strukturer. Hvordan delene er satt sammen. Strukturell er adjektivet: et strukturelt problem." },
        { id: "no-u90l1-enmekanisme", type: "vocab", front: "en mekanisme", reading: "enmekanisme", meaning: "mechanism", example: { jp: "Mekanismen er grei nok, men den virker bare når alle gjør sitt.", en: "The mechanism is fine enough, but it only works when everybody does their bit." }, accept: ["a mechanism", "a device"], drill: { jp: "De laget en mekanisme ingen liker", en: "They made a mechanism nobody likes" }, hint: "en mekanisme → mekanismen, flertall mekanismer. Både om maskiner og om samfunn: en mekanisme som fordeler (u56) penger." },
        { id: "no-u90l1-etledd", type: "vocab", front: "et ledd", reading: "etledd", meaning: "link (element in a chain)", example: { jp: "Hvert ledd i prosessen tar tid, og alle er like viktige.", en: "Every link in the process takes time, and all of them matter equally." }, accept: ["a step", "a stage", "a joint"], drill: { jp: "Dette er et ledd i planen", en: "This is a link in the plan" }, hint: "et ledd → leddet, flertall ledd (likt i flertall). Også kroppsdelen: et kne er et ledd. I et system er det ett steg i kjeden." },
        { id: "no-u90l1-etsamspill", type: "vocab", front: "et samspill", reading: "etsamspill", meaning: "interplay", example: { jp: "Resultatet kommer av et samspill mellom mange ting, ikke av én grunn.", en: "The result comes from an interplay between many things, not from one cause." }, accept: ["interaction", "teamwork"], drill: { jp: "Alt dette krever et samspill", en: "All of this requires an interplay" }, hint: "et samspill → samspillet, flertall samspill. Sammen + å spille (u19). Om musikk, om lag og om systemer: delene virker sammen." },
        { id: "no-u90l1-etkretslop", type: "vocab", front: "et kretsløp", reading: "etkretslop", meaning: "cycle (circuit)", example: { jp: "Vannet går i et kretsløp, og ingenting av det forsvinner.", en: "The water goes in a cycle, and none of it disappears." }, accept: ["a cycle", "a circuit"], drill: { jp: "Alt dette er et kretsløp", en: "All of this is a cycle" }, hint: "et kretsløp → kretsløpet, flertall kretsløp. Merk ø-folden: lesinga er etkretslop. En krets + et løp. Vannets kretsløp lærer alle norske barn på barneskolen (u85)." },
        { id: "no-u90l1-gjensidig", type: "vocab", front: "gjensidig", reading: "gjensidig", meaning: "mutual (both ways)", example: { jp: "Avtalen er gjensidig, så begge kan si den opp når de vil.", en: "The agreement is mutual, so either side can terminate it whenever they want." }, accept: ["reciprocal", "two-way"], drill: { jp: "Respekten mellom dem er gjensidig", en: "The respect between them is mutual" }, hint: "gjensidig → gjensidig, gjensidige. Gjen- + ei side (u33): begge sider gjør det samme. Gjensidig respekt (u73), gjensidig hjelp." },
      ],
    },
    {
      id: "no-u90l2",
      unit: 90,
      lesson: 2,
      title: "Modell og ramme",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Build a model of something — name what is allowed to vary, what is held fixed, and where the edges of the frame are.",
      items: [
        { id: "no-u90l2-enmodell", type: "vocab", front: "en modell", reading: "enmodell", meaning: "model", example: { jp: "Modellen passer godt med tallene, helt til noe uvanlig skjer.", en: "The model fits the figures well, right up until something unusual happens." }, accept: ["a model"], drill: { jp: "De laget en modell av hele byen", en: "They made a model of the whole city" }, hint: "en modell → modellen, flertall modeller. Trykket på siste stavelse: mo-DELL. Om biler, om mennesker og om tankemodeller." },
        { id: "no-u90l2-enfaktor", type: "vocab", front: "en faktor", reading: "enfaktor", meaning: "factor", example: { jp: "Prisen er bare én faktor, og for mange er den ikke viktig.", en: "The price is only one factor, and for many people it is not an important one." }, accept: ["an element", "a consideration"], drill: { jp: "Dette er en faktor vi glemte", en: "This is a factor we forgot" }, hint: "en faktor → faktoren, flertall faktorer. Noe som virker inn på resultatet. I matematikk er det tallet du ganger med." },
        { id: "no-u90l2-envariabel", type: "vocab", front: "en variabel", reading: "envariabel", meaning: "variable", example: { jp: "Vi prøver én variabel om gangen, ellers vet vi ikke hva som virket.", en: "We try one variable at a time, otherwise we do not know what worked." }, accept: ["a variable"], drill: { jp: "Her er det en variabel til", en: "Here there is one more variable" }, hint: "en variabel → variabelen, flertall variabler. Merk at flertallet mister en e. Det som får lov til å endre seg i en modell." },
        { id: "no-u90l2-etrammeverk", type: "vocab", front: "et rammeverk", reading: "etrammeverk", meaning: "framework (formal)", example: { jp: "Rammeverket er nytt, men reglene inni er de gamle.", en: "The framework is new, but the rules inside it are the old ones." }, accept: ["a framework", "a regulatory framework"], drill: { jp: "De laget et rammeverk alle måtte følge", en: "They made a framework everybody had to follow" }, hint: "et rammeverk → rammeverket, flertall rammeverk. Ei ramme + et verk. Byråkratisk; i dagligtale sier folk bare reglene (u32)." },
        { id: "no-u90l2-eiramme", type: "vocab", front: "ei ramme", reading: "eiramme", meaning: "frame (limit set)", example: { jp: "Vi holder oss innenfor ramma, selv om den er for liten.", en: "We stay inside the frame, even though it is too small." }, accept: ["a limit", "a frame"], drill: { jp: "Alt må skje innenfor ei ramme", en: "Everything has to happen inside a frame" }, hint: "ei ramme → ramma, flertall rammer. Også ramma rundt et bilde. Du vil se rammen i trykk — bokmål tillater begge, og denne kursen skriver ei/-a fordi det gjør den bestemte forma forutsigbar." },
        { id: "no-u90l2-eitilnaerming", type: "vocab", front: "ei tilnærming", reading: "eitilnaerming", meaning: "approach (way of tackling it)", example: { jp: "Tilnærminga hans er ny, og kanskje er det derfor den virker.", en: "His approach is new, and perhaps that is why it works." }, accept: ["an approach", "a way in"], drill: { jp: "Vi trenger ei tilnærming som virker", en: "We need an approach that works" }, hint: "ei tilnærming → tilnærminga. -ing-ord er hunkjønn. Fra å nærme seg. Måten du går løs på et problem — ikke løsninga (u50)." },
      ],
    },
    {
      id: "no-u90l3",
      unit: 90,
      lesson: 3,
      title: "Abstrakt og konkret",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Move up and down the ladder of abstraction — simplify without lying, and say when something is too tangled to reduce.",
      items: [
        { id: "no-u90l3-abstrakt", type: "vocab", front: "abstrakt", reading: "abstrakt", meaning: "abstract", example: { jp: "Forklaringa er for abstrakt til at noen klarer å bruke den.", en: "The explanation is too abstract for anybody to be able to use it." }, accept: ["theoretical"], drill: { jp: "Dette blir altfor abstrakt for meg", en: "This gets far too abstract for me" }, hint: "abstrakt → abstrakt, abstrakte. Motsatt av konkret (u58). Abstrakt kunst er den uten gjenkjennelige ting i." },
        { id: "no-u90l3-etperspektiv", type: "vocab", front: "et perspektiv", reading: "etperspektiv", meaning: "perspective (viewpoint)", example: { jp: "Fra hennes perspektiv er saka helt grei, og hun tar ikke feil.", en: "From her perspective the case is perfectly fine, and she is not wrong." }, accept: ["a point of view", "an angle"], drill: { jp: "Dette gir oss et perspektiv til", en: "This gives us one more perspective" }, hint: "et perspektiv → perspektivet, flertall perspektiver. Både i kunst og i tanke: hvor du står når du ser på noe." },
        { id: "no-u90l3-aforenkle", type: "vocab", front: "å forenkle", reading: "aforenkle", meaning: "to simplify", example: { jp: "Han forenkler så mye at forklaringa til slutt blir feil.", en: "He simplifies so much that the explanation ends up being wrong." }, accept: ["to make simpler", "simplify"], drill: { jp: "Det er lett å forenkle for mye", en: "It is easy to simplify too much" }, hint: "å forenkle → forenkler, forenklet. For- + enkel. Ei forenkling er resultatet, og sier noen at du forenkler, er det ikke ment som et kompliment." },
        { id: "no-u90l3-enkompleksitet", type: "vocab", front: "en kompleksitet", reading: "enkompleksitet", meaning: "complexity", example: { jp: "Kompleksiteten øker for hvert år, og ingen forstår hele systemet lenger.", en: "The complexity increases every year, and nobody understands the whole system any more." }, accept: ["complicatedness"], drill: { jp: "Dette har en kompleksitet ingen ventet", en: "This has a complexity nobody expected" }, hint: "en kompleksitet → kompleksiteten. -itet-ord er hankjønn (regel 1), aldri ei. Kompleks er adjektivet: et komplekst problem." },
        { id: "no-u90l3-sammensatt", type: "vocab", front: "sammensatt", reading: "sammensatt", meaning: "composite (of several parts)", example: { jp: "Problemet er sammensatt, og én forklaring holder rett og slett ikke.", en: "The problem is composite, and one explanation simply does not do." }, accept: ["complex", "multi-layered"], drill: { jp: "Saka er mer sammensatt enn den ser ut", en: "The case is more composite than it looks" }, hint: "sammensatt → sammensatt, sammensatte. Fra å sette sammen. Også om ord: motargument (u88) er et sammensatt ord." },
        { id: "no-u90l3-eivekselvirkning", type: "vocab", front: "ei vekselvirkning", reading: "eivekselvirkning", meaning: "two-way effect", example: { jp: "Det er ei vekselvirkning her, for begge sider påvirker hverandre.", en: "There is a two-way effect here, because both sides influence each other." }, accept: ["interaction", "mutual influence", "feedback"], drill: { jp: "Her er det ei vekselvirkning", en: "Here there is a two-way effect" }, hint: "ei vekselvirkning → vekselvirkninga. -ing-ord er hunkjønn; vekselvirkningen finnes også i trykk. Å veksle (u27) + ei virkning: A virker på B, og B virker tilbake på A." },
      ],
    },
    {
      id: "no-u90l4",
      unit: 90,
      lesson: 4,
      title: "Å ordne systemet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Sort things properly — put them above or below each other, name the test you sorted by, and say where the cut-off falls.",
      items: [
        { id: "no-u90l4-overordnet", type: "vocab", front: "overordnet", reading: "overordnet", meaning: "overarching (superordinate)", example: { jp: "Den overordnede planen er klar, men veien dit er den ikke.", en: "The overarching plan is clear, but the road there is not." }, accept: ["higher-level", "overall", "superordinate"], drill: { jp: "Dette er et overordnet problem", en: "This is an overarching problem" }, hint: "overordnet → overordnet, overordnede. Over + å ordne (u21). Også om personer: en overordnet er sjefen (u18) din." },
        { id: "no-u90l4-underordnet", type: "vocab", front: "underordnet", reading: "underordnet", meaning: "secondary (subordinate)", example: { jp: "Prisen er underordnet så lenge kvaliteten holder.", en: "The price is secondary as long as the quality holds up." }, accept: ["subordinate", "of lesser importance"], drill: { jp: "Alt annet er underordnet nå", en: "Everything else is secondary now" }, hint: "underordnet → underordnet, underordnede. Paret til overordnet. «Det er underordnet» betyr at det ikke spiller noen rolle (u35)." },
        { id: "no-u90l4-eiinndeling", type: "vocab", front: "ei inndeling", reading: "eiinndeling", meaning: "classification (way of dividing)", example: { jp: "Inndelinga er gammel, men ingen har tid til å lage ei ny.", en: "The classification is old, but nobody has time to make a new one." }, accept: ["a breakdown", "a grouping", "a division"], drill: { jp: "De laget ei inndeling ingen liker", en: "They made a classification nobody likes" }, hint: "ei inndeling → inndelinga. -ing-ord er hunkjønn. Inn + å dele (u33). Måten noe er delt opp på, ikke delene selv." },
        { id: "no-u90l4-enkategori", type: "vocab", front: "en kategori", reading: "enkategori", meaning: "category", example: { jp: "Halvparten passer ikke i noen kategori, og det sier noe om inndelinga.", en: "Half of them do not fit any category, and that says something about the classification." }, accept: ["a class", "a type"], drill: { jp: "Dette hører til en kategori vi glemte", en: "This belongs to a category we forgot" }, hint: "en kategori → kategorien, flertall kategorier. Trykket på siste stavelse: katego-RI. Å kategorisere er verbet." },
        { id: "no-u90l4-etkriterium", type: "vocab", front: "et kriterium", reading: "etkriterium", meaning: "criterion", example: { jp: "Vi hadde tre kriterier, og bare ett av dem var mulig å måle.", en: "We had three criteria, and only one of them was possible to measure." }, accept: ["a standard", "a test (for judging)"], drill: { jp: "Dette er et kriterium ingen klarer", en: "This is a criterion nobody manages" }, hint: "et kriterium → kriteriet, flertall kriterier. Latinsk flertall: ett kriterium, flere kriterier. Målestokken du sorterer etter." },
        { id: "no-u90l4-enterskel", type: "vocab", front: "en terskel", reading: "enterskel", meaning: "threshold (cut-off)", example: { jp: "Terskelen for å klage er høy, og derfor gjør nesten ingen det.", en: "The threshold for complaining is high, and that is why almost nobody does it." }, accept: ["a cut-off", "a barrier", "a doorstep"], drill: { jp: "Her er det en terskel du må over", en: "Here there is a threshold you have to get over" }, hint: "en terskel → terskelen, flertall terskler. Merk at flertallet mister en e. Egentlig treet under døra; brukt om grensa (u22) der noe slår inn." },
      ],
    },
  ],
};
