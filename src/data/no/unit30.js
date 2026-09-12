// NO Unit 30 — Hjem og husarbeid ("Home and household") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A1 furnished the home at rest — et hus, ei leilighet, the rooms, and the basic
// furniture — plus å vaske, å rydde, å flytte. A2 makes the home WORK: the chores
// with their tools, the appliances a kitchen actually holds, the fittings A1
// skipped, and the business of renting. Every A1 home word is used in the examples
// and re-taught nowhere.
//
// GENDER matters here and is the easiest thing to get wrong: ei bøtte and ei
// husleie are feminine (the corpus marks feminines `ei`, no/unit1.js), et kjøleskap
// / et møbel / et tak are neuter, the rest masculine en-. The hints carry the
// definite so the gender is learnable, not guessable.
// A1 conventions bind: ø→o, æ→ae, å→a in `reading`; the definiteness effect holds
// (Det står en vaskemaskin på badet, not "En vaskemaskin står på badet").
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT30 = {
  id: "no-u30",
  lang: "no",
  title: "Hjem og husarbeid",
  order: 30,
  stage: "a2",
  lessons: [
    {
      id: "no-u30l1",
      unit: 30,
      lesson: 1,
      title: "Housework and tools",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what housework you do and with what — å vaske opp, å støvsuge, å tørke, en klut, ei bøtte, en søppelkasse.",
      items: [
        { id: "no-u30l1-avaskeopp", type: "vocab", front: "å vaske opp", reading: "avaskeopp", meaning: "to wash up", example: { jp: "Jeg lager maten, og etterpå vasker du opp.", en: "I make the food, and afterwards you wash up." }, accept: ["to do the dishes"], hint: "VAS-ke opp. From å vaske (A1) plus opp — washing the dishes, not clothes. The opp splits off: du vasker OPP." },
        { id: "no-u30l1-astovsuge", type: "vocab", front: "å støvsuge", reading: "astovsuge", meaning: "to vacuum", example: { jp: "Jeg må støvsuge stua fordi det er så skittent.", en: "I have to vacuum the living room because it's so dirty." }, accept: ["to hoover"], hint: "STOOV-su-ge. støv (dust) plus suge (to suck). The noun is en støvsuger (l2), the machine that does it." },
        { id: "no-u30l1-atorke", type: "vocab", front: "å tørke", reading: "atorke", meaning: "to wipe", example: { jp: "Kan du tørke bordet mens jeg vasker opp?", en: "Can you wipe the table while I wash up?" }, accept: ["to dry", "to dust"], hint: "TOR-ke. To wipe or to dry — tørke bordet, tørke hendene. Also for weather drying out." },
        { id: "no-u30l1-enklut", type: "vocab", front: "en klut", reading: "enklut", meaning: "cloth", example: { jp: "Jeg trenger en klut for å tørke gulvet.", en: "I need a cloth to wipe the floor." }, accept: ["the rag", "wipe"], hint: "KLUT. Definite kluten. A cleaning cloth or rag — en våt klut, a wet cloth." },
        { id: "no-u30l1-eibotte", type: "vocab", front: "ei bøtte", reading: "eibotte", meaning: "bucket", example: { jp: "Det står ei bøtte med vann på gulvet.", en: "There's a bucket of water on the floor." }, accept: ["the pail"], hint: "BOT-te. Feminine: definite bøtta. Note the definiteness effect — DET STÅR ei bøtte, you can't front it with \"ei bøtte står\"." },
        { id: "no-u30l1-ensoppelkasse", type: "vocab", front: "en søppelkasse", reading: "ensoppelkasse", meaning: "rubbish bin", example: { jp: "Søppelkassa står ute bak huset.", en: "The rubbish bin is outside behind the house." }, accept: ["the trash can", "waste bin"], hint: "SOP-pel-kas-se. søppel (rubbish) plus kasse (box). Definite søppelkassa. Å ta ut søpla = to take out the rubbish." },
      ],
    },
    {
      id: "no-u30l2",
      unit: 30,
      lesson: 2,
      title: "Appliances",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the machines — et kjøleskap, en vaskemaskin, en oppvaskmaskin, en mikrobølgeovn, en stikkontakt, en støvsuger.",
      items: [
        { id: "no-u30l2-etkjoleskap", type: "vocab", front: "et kjøleskap", reading: "etkjoleskap", meaning: "fridge", example: { jp: "Melka står i kjøleskapet, hvis du vil ha litt.", en: "The milk is in the fridge, if you want some." }, accept: ["the refrigerator"], hint: "CHO-le-skap. Neuter: definite kjøleskapet. kjøle (to cool) plus skap (cupboard, A1)." },
        { id: "no-u30l2-envaskemaskin", type: "vocab", front: "en vaskemaskin", reading: "envaskemaskin", meaning: "washing machine", example: { jp: "Jeg tar klærne ut av vaskemaskinen etterpå.", en: "I take the clothes out of the washing machine afterwards." }, accept: ["the washer"], hint: "From å vaske (A1) plus maskin. Definite vaskemaskinen. For clothes; the dish one is next." },
        { id: "no-u30l2-enoppvaskmaskin", type: "vocab", front: "en oppvaskmaskin", reading: "enoppvaskmaskin", meaning: "dishwasher", example: { jp: "Vi har en oppvaskmaskin, så vi vasker sjelden opp for hånd.", en: "We have a dishwasher, so we rarely wash up by hand." }, accept: ["the dish washer"], hint: "From oppvask (the washing-up) plus maskin. Definite oppvaskmaskinen." },
        { id: "no-u30l2-enmikrobolgeovn", type: "vocab", front: "en mikrobølgeovn", reading: "enmikrobolgeovn", meaning: "microwave", example: { jp: "Jeg lager maten i mikrobølgeovnen fordi det går fort.", en: "I make the food in the microwave because it is quick." }, accept: ["the microwave oven"], hint: "MI-kro-bol-ge-ovn. From en ovn (A1). Everyone just says mikroen in speech." },
        { id: "no-u30l2-enstikkontakt", type: "vocab", front: "en stikkontakt", reading: "enstikkontakt", meaning: "power socket", example: { jp: "Det er en stikkontakt bak senga, hvis du trenger den.", en: "There's a power socket behind the bed, if you need it." }, accept: ["the outlet", "plug socket"], hint: "STIKK-kon-takt. Definite stikkontakten. What you plug a lampe or a mobil into." },
        { id: "no-u30l2-enstovsuger", type: "vocab", front: "en støvsuger", reading: "enstovsuger", meaning: "vacuum cleaner", example: { jp: "Støvsugeren er gammel, så jeg kan ikke støvsuge i dag.", en: "The vacuum cleaner is old, so I can't vacuum today." }, accept: ["the hoover"], hint: "The machine from å støvsuge (l1). Definite støvsugeren." },
      ],
    },
    {
      id: "no-u30l3",
      unit: 30,
      lesson: 3,
      title: "Fittings and furniture",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the parts A1 skipped — et tak, en skuff, en gardin, et møbel, en kjeller, en balkong.",
      items: [
        { id: "no-u30l3-ettak", type: "vocab", front: "et tak", reading: "ettak", meaning: "ceiling", example: { jp: "Det er en lampe i taket i rommet.", en: "There is a lamp in the ceiling of the room." }, accept: ["the roof"], hint: "TAK. Neuter: definite taket. Both the ceiling inside and the roof outside. Not takk (thanks)." },
        { id: "no-u30l3-enskuff", type: "vocab", front: "en skuff", reading: "enskuff", meaning: "drawer", example: { jp: "Knivene ligger i skuffen på kjøkkenet.", en: "The knives are in the drawer in the kitchen." }, accept: ["the drawer"], hint: "SKUFF. Definite skuffen. Don't mix it with skuffet (disappointed), which sounds close." },
        { id: "no-u30l3-engardin", type: "vocab", front: "en gardin", reading: "engardin", meaning: "curtain", example: { jp: "Vi har nye gardiner på kjøkkenet.", en: "We have new curtains in the kitchen." }, accept: ["the curtains"], hint: "gar-DEEN. Definite gardinen; usually plural, gardinene." },
        { id: "no-u30l3-etmobel", type: "vocab", front: "et møbel", reading: "etmobel", meaning: "piece of furniture", example: { jp: "En stol er også et vanlig møbel.", en: "A chair is also a common piece of furniture." }, accept: ["furniture"], hint: "MO-bel. Neuter: definite møbelet. The plural møbler is the everyday word: nye møbler, new furniture." },
        { id: "no-u30l3-enkjeller", type: "vocab", front: "en kjeller", reading: "enkjeller", meaning: "basement", example: { jp: "Vi setter de gamle tingene i kjelleren om vinteren.", en: "We put the old things in the basement in winter." }, accept: ["the cellar"], hint: "CHEL-ler. Definite kjelleren. The floor below the house; the attic above is et loft." },
        { id: "no-u30l3-enbalkong", type: "vocab", front: "en balkong", reading: "enbalkong", meaning: "balcony", example: { jp: "Om sommeren spiser vi ofte på balkongen.", en: "In summer we often eat on the balcony." }, accept: ["the terrace"], hint: "bal-KONG. Definite balkongen. The little outdoor space off a leilighet (A1)." },
      ],
    },
    {
      id: "no-u30l4",
      unit: 30,
      lesson: 4,
      title: "Renting and living",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle a place to live — å leie, ei husleie, en huseier, å lufte, å henge opp, en entré.",
      items: [
        { id: "no-u30l4-aleie", type: "vocab", front: "å leie", reading: "aleie", meaning: "to rent", example: { jp: "Vi leier en leilighet i byen fordi et hus er for dyrt.", en: "We rent a flat in the town because a house is too expensive." }, accept: ["to hire", "to let"], hint: "LEI-e. To rent from someone (or to rent out). Don't confuse it with å leke, to play." },
        { id: "no-u30l4-eihusleie", type: "vocab", front: "ei husleie", reading: "eihusleie", meaning: "rent", example: { jp: "Husleia er høy, men leiligheten er stor og fin.", en: "The rent is high, but the flat is big and nice." }, accept: ["the rent"], hint: "HOOS-lei-e. Feminine: definite husleia. From hus (A1) plus å leie — the money you pay each month." },
        { id: "no-u30l4-enhuseier", type: "vocab", front: "en huseier", reading: "enhuseier", meaning: "landlord", example: { jp: "Huseieren bor i samme hus som oss.", en: "The landlord lives in the same house as us." }, accept: ["the homeowner", "landlady"], hint: "HOOS-ei-er. hus plus eier (owner). Definite huseieren. Same form for a man or a woman." },
        { id: "no-u30l4-alufte", type: "vocab", front: "å lufte", reading: "alufte", meaning: "to air out", example: { jp: "Jeg lufter rommet litt hver morgen når jeg står opp.", en: "I air out the room a bit every morning when I get up." }, accept: ["to ventilate"], hint: "LUF-te. From ei luft (air). To let fresh air in — lufte rommet, and also to walk a dog: lufte hunden." },
        { id: "no-u30l4-ahengeopp", type: "vocab", front: "å henge opp", reading: "ahengeopp", meaning: "to hang up", example: { jp: "Kan du henge opp klærne etterpå?", en: "Can you hang up the clothes afterwards?" }, accept: ["to put up"], hint: "From å henge (A1) plus opp. The opp splits off: jeg henger OPP klærne. Used for clothes, pictures, coats." },
        { id: "no-u30l4-enentre", type: "vocab", front: "en entré", reading: "enentre", meaning: "entrance hall", example: { jp: "Vi setter skoene i entréen når vi kommer hjem.", en: "We put our shoes in the entrance hall when we come home." }, accept: ["the hallway", "entryway"], hint: "ang-TRE, from French. Definite entréen. The small hall just inside the front door." },
      ],
    },
  ],
};
