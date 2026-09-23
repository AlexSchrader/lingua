// PT Unit 122 — O ofício, a matéria e o fabrico (slot: coverage-b2-12) — B2
// MAKING THINGS: the trade, the material, the working of it, the output. The
// scaffold title was "Vocabulary 12 (B2)". u94 Science and technology and u93
// Business (block 2) own the laboratory and the deal; u96 Arts and criticism
// owns the finished work judged as art. Nothing in u88-113 owns the workshop —
// the hands, the bench and the material — which for Portugal is not a marginal
// subject: cork, tiles, textiles and gold filigree are live industries.
//
// SLOT BOUNDARIES:
//   u42 owns o vidro, o couro, o barro, a madeira, o ferro; u31 o defeito;
//   u122 does NOT re-teach any of them. o couro, o barro and o defeito were in
//   the first draft and are already taught — replaced by o verniz, a cerâmica
//   and o refugo, which are different words rather than synonyms.
//   o molde was dropped for a different and more interesting reason: the FRONT
//   was free, but moldar is carded in l3 of this same unit, so the pair would
//   have taught one lexeme twice inside one unit. Replaced by a forja.
//   One lexeme per family throughout: o fabrico without fabricar, o acabamento
//   without acabar (taught u21).
//
// EUROPEAN PORTUGUESE: o ofício, a oficina culture and a matéria-prima are
// standard pt-PT; verniz and not laca.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT122 = {
  id: "pt-u122",
  lang: "pt",
  title: "O ofício, a matéria e o fabrico",
  order: 122,
  stage: "b2",
  lessons: [
    {
      id: "pt-u122l1",
      unit: 122,
      lesson: 1,
      title: "Quem faz e onde",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe a Portuguese workshop and the people in it — the trade, the craftsman, the bench, the apprentice.",
      items: [
        { id: "pt-u122l1-oficio", type: "vocab", front: "o ofício", reading: "oficio", meaning: "trade (craft)", example: { jp: "O ofício passou de pai para filho durante quatro gerações.", en: "The trade passed from father to son for four generations." }, drill: { jp: "O ofício passou de pai para filho", en: "The trade passed from father to son" }, accept: ["trade", "the trade", "craft", "the craft", "calling", "occupation"], hint: "u-FEE-siu. A skilled manual trade learned by doing. In administration um ofício is also an official letter — the same root as office, and both senses are current." },
        { id: "pt-u122l1-oartesao", type: "vocab", front: "o artesão", reading: "oartesao", meaning: "artisan", example: { jp: "O artesão trabalha sozinho e vende na feira da vila.", en: "The artisan works alone and sells at the town's market." }, drill: { jp: "O artesão vende na feira", en: "The artisan sells at the market" }, accept: ["artisan", "the artisan", "craftsman", "the craftsman", "craftsperson"], hint: "ar-te-ZOWN. Plural os artesãos. A artesanato is the craft trade as a whole — a significant part of the rural Portuguese economy and of its tourism." },
        { id: "pt-u122l1-abancada", type: "vocab", front: "a bancada", reading: "abancada", meaning: "workbench", example: { jp: "A bancada está cheia de ferramentas desde manhã.", en: "The workbench has been covered in tools since morning." }, drill: { jp: "A bancada está cheia de ferramentas", en: "The workbench is covered in tools" }, accept: ["workbench", "the workbench", "bench", "the bench", "worktop", "counter"], hint: "ban-KA-da. The work surface. Also a kitchen worktop, the stand at a stadium, and in parliament a bancada is a party's bloc of seats — one word doing three jobs." },
        { id: "pt-u122l1-oaprendiz", type: "vocab", front: "o aprendiz", reading: "oaprendiz", meaning: "apprentice", example: { jp: "O aprendiz começou por limpar e só depois pegou nas ferramentas.", en: "The apprentice started by cleaning and only later picked up the tools." }, drill: { jp: "O aprendiz começou por limpar", en: "The apprentice started by cleaning" }, accept: ["apprentice", "the apprentice", "trainee", "learner"], hint: "a-pren-DEEZH, from aprender. Someone learning a trade on the job. Aprendiz de feiticeiro is the sorcerer's apprentice — the same warning as in English." },
        { id: "pt-u122l1-aforja", type: "vocab", front: "a forja", reading: "aforja", meaning: "forge", example: { jp: "A forja aquece o ferro até ele ficar mole.", en: "The forge heats the iron until it goes soft." }, drill: { jp: "A forja aquece o ferro", en: "The forge heats the iron" }, accept: ["forge", "the forge", "smithy", "furnace"], hint: "FOR-zha. The hearth where metal is heated to be worked, and the workshop around it. Forjar is to forge, including the sense of forging a signature." },
        { id: "pt-u122l1-otorno", type: "vocab", front: "o torno", reading: "otorno", meaning: "lathe", example: { jp: "O torno faz peças redondas a partir de um bloco de madeira.", en: "The lathe makes round pieces out of a block of wood." }, drill: { jp: "O torno faz peças redondas", en: "The lathe makes round pieces" }, accept: ["lathe", "the lathe", "turning machine", "vice"], hint: "TOR-nu. The machine that spins work against a cutting tool. Related to tornear, to turn — and o torno de bancada is also the bench vice." },
      ],
    },
    {
      id: "pt-u122l2",
      unit: 122,
      lesson: 2,
      title: "De que é feito",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the materials a Portuguese workshop works in — leather finish, linen, ceramics, copper, steel.",
      items: [
        { id: "pt-u122l2-amateriaprima", type: "vocab", front: "a matéria-prima", reading: "amateriaprima", meaning: "raw material", example: { jp: "A matéria-prima vem de fora e por isso custa mais.", en: "The raw material comes from abroad and so costs more." }, drill: { jp: "A matéria-prima vem de fora", en: "The raw material comes from abroad" }, accept: ["raw material", "the raw material", "raw materials", "input", "feedstock"], hint: "ma-TE-ria PREE-ma. Hyphenated, plural matérias-primas — both parts inflect. What a factory buys before it makes anything, and a standing term in Portuguese economic reporting." },
        { id: "pt-u122l2-overniz", type: "vocab", front: "o verniz", reading: "overniz", meaning: "varnish", example: { jp: "O verniz protege a madeira da água e do sol.", en: "The varnish protects the wood from water and sun." }, drill: { jp: "O verniz protege a madeira", en: "The varnish protects the wood" }, accept: ["varnish", "the varnish", "lacquer", "polish", "gloss"], hint: "ver-NEEZH. The clear protective coat. Verniz das unhas is nail polish, and figuratively um verniz de educação is a thin veneer of manners — same metaphor as English." },
        { id: "pt-u122l2-olinho", type: "vocab", front: "o linho", reading: "olinho", meaning: "linen", example: { jp: "O linho é fresco no verão mas amarrota muito.", en: "Linen is cool in summer but creases a lot." }, drill: { jp: "O linho é fresco no verão", en: "Linen is cool in summer" }, accept: ["linen", "the linen", "flax"], hint: "LEE-nyu, nh. Both the flax plant and the cloth. Northern Portugal has woven it for centuries and o linho still means something specific in a craft market there." },
        { id: "pt-u122l2-aceramica", type: "vocab", front: "a cerâmica", reading: "aceramica", meaning: "ceramics", example: { jp: "A cerâmica da região é conhecida pelas cores fortes.", en: "The region's ceramics are known for their strong colours." }, drill: { jp: "A cerâmica da região é conhecida", en: "The region's ceramics are well known" }, accept: ["ceramics", "the ceramics", "pottery", "ceramic", "earthenware"], hint: "se-RA-mi-ka. The craft, the material and the objects. O barro (u42) is the wet clay; a cerâmica is what it becomes after firing, and Caldas da Rainha is the Portuguese name attached to it." },
        { id: "pt-u122l2-ocobre", type: "vocab", front: "o cobre", reading: "ocobre", meaning: "copper", example: { jp: "O cobre muda de cor com o tempo e fica verde.", en: "Copper changes colour over time and turns green." }, drill: { jp: "O cobre muda de cor com o tempo", en: "Copper changes colour over time" }, accept: ["copper", "the copper"], hint: "KO-bre. The metal. Identical in spelling to cobre, he covers, from cobrir — a homograph the learner meets often, resolved entirely by the article." },
        { id: "pt-u122l2-oaco", type: "vocab", front: "o aço", reading: "oaco", meaning: "steel", example: { jp: "O aço aguenta muito mais peso do que o ferro sozinho.", en: "Steel takes far more weight than iron alone." }, drill: { jp: "O aço aguenta muito peso", en: "Steel takes a lot of weight" }, accept: ["steel", "the steel"], hint: "A-su, ç. Iron worked with carbon. Aço inoxidável is stainless steel, shortened in speech to inox — the word on every Portuguese kitchen advert." },
      ],
    },
    {
      id: "pt-u122l3",
      unit: 122,
      lesson: 3,
      title: "Trabalhar a matéria",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Use the verbs of working material in Portuguese — shaping, polishing, welding, carving, weaving, smelting.",
      items: [
        { id: "pt-u122l3-moldar", type: "vocab", front: "moldar", reading: "moldar", meaning: "to shape by moulding", example: { jp: "É preciso moldar o barro antes de ele secar.", en: "The clay has to be shaped before it dries." }, drill: { jp: "É preciso moldar o barro cedo", en: "The clay has to be shaped early" }, accept: ["shape", "to shape", "to mould", "mould", "to mold", "to form", "to cast"], hint: "mol-DAR. To give a form to something soft. Used of people too — moldar o caráter, to shape someone's character. The noun o molde is deliberately not carded here: same lexeme." },
        { id: "pt-u122l3-polir", type: "vocab", front: "polir", reading: "polir", meaning: "to polish", example: { jp: "Depois de polir, a peça fica a brilhar.", en: "After polishing, the piece shines." }, drill: { jp: "Depois de polir a peça brilha", en: "After polishing the piece shines" }, accept: ["polish", "to polish", "to buff", "to shine", "to refine"], hint: "pu-LEER. To rub smooth and shiny. Also of writing and manners — polir um texto. Irregular in the present: eu pulo, tu pules, following the subir pattern." },
        { id: "pt-u122l3-soldar", type: "vocab", front: "soldar", reading: "soldar", meaning: "to weld", example: { jp: "Foi preciso soldar as duas peças de ferro.", en: "The two iron pieces had to be welded." }, drill: { jp: "Foi preciso soldar as duas peças", en: "The two pieces had to be welded" }, accept: ["weld", "to weld", "to solder", "to braze", "to fuse"], hint: "sol-DAR. Joining metal by melting it at the join. Both welding and soldering — the distinction English makes is carried in Portuguese by the context or by adding a ferro de soldar." },
        { id: "pt-u122l3-talhar", type: "vocab", front: "talhar", reading: "talhar", meaning: "to carve", example: { jp: "Aprendeu a talhar madeira com o avô.", en: "He learned to carve wood with his grandfather." }, drill: { jp: "Aprendeu a talhar madeira em novo", en: "He learned to carve wood when young" }, accept: ["carve", "to carve", "to cut", "to hew", "to whittle", "to shape by cutting"], hint: "ta-LYAR, lh. To cut a shape out of solid material. Talha dourada, gilt carved woodwork, is what covers the inside of Portuguese baroque churches." },
        { id: "pt-u122l3-tecer", type: "vocab", front: "tecer", reading: "tecer", meaning: "to weave", example: { jp: "Ainda há quem saiba tecer à mão nesta aldeia.", en: "There are still people who know how to weave by hand in this village." }, drill: { jp: "Ainda há quem saiba tecer à mão", en: "There are still people who can weave by hand" }, accept: ["weave", "to weave", "to knit together", "to spin"], hint: "te-SER. To make cloth on a loom. Also figurative — tecer comentários, to weave remarks, is the standard Portuguese way to say to offer comments." },
        { id: "pt-u122l3-fundir", type: "vocab", front: "fundir", reading: "fundir", meaning: "to smelt", example: { jp: "Para fundir o metal é preciso muito calor.", en: "To smelt the metal a great deal of heat is needed." }, drill: { jp: "Para fundir o metal é preciso calor", en: "To smelt the metal heat is needed" }, accept: ["smelt", "to smelt", "to melt", "to melt down", "to found", "to merge"], hint: "fun-DEER. To melt metal down, and by extension to merge — duas empresas fundiram-se, two firms merged. A fundição is the foundry." },
      ],
    },
    {
      id: "pt-u122l4",
      unit: 122,
      lesson: 4,
      title: "O que sai da oficina",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about production in Portuguese — the manufacture, the batch, the finish, the reject, the run.",
      items: [
        { id: "pt-u122l4-ofabrico", type: "vocab", front: "o fabrico", reading: "ofabrico", meaning: "manufacture", example: { jp: "O fabrico destas peças ainda é feito à mão.", en: "The manufacture of these pieces is still done by hand." }, drill: { jp: "O fabrico é feito à mão", en: "The manufacture is done by hand" }, accept: ["manufacture", "the manufacture", "making", "production", "manufacturing"], hint: "fa-BREE-ku. The pt-PT noun — Brazil says fabricação. De fabrico nacional, nationally made, is a label you see all over Portugal." },
        { id: "pt-u122l4-olote", type: "vocab", front: "o lote", reading: "olote", meaning: "batch", example: { jp: "O lote todo teve de voltar para a fábrica.", en: "The whole batch had to go back to the factory." }, drill: { jp: "O lote todo voltou para a fábrica", en: "The whole batch went back to the factory" }, accept: ["batch", "the batch", "lot", "the lot", "consignment", "plot"], hint: "LO-te. A group made or sold together — número de lote on any Portuguese food label. It is also a building plot, which is where o loteamento (u114) comes from." },
        { id: "pt-u122l4-oacabamento", type: "vocab", front: "o acabamento", reading: "oacabamento", meaning: "finish", example: { jp: "O acabamento é o que faz a diferença entre as duas peças.", en: "The finish is what makes the difference between the two pieces." }, drill: { jp: "O acabamento faz toda a diferença", en: "The finish makes all the difference" }, accept: ["finish", "the finish", "finishing", "final touches", "workmanship"], hint: "a-ka-ba-MEN-tu, from acabar. The final surface and the care taken over it — bom acabamento is the standard compliment for well-made work." },
        { id: "pt-u122l4-orefugo", type: "vocab", front: "o refugo", reading: "orefugo", meaning: "reject (scrap)", example: { jp: "O refugo desta semana foi maior do que o normal.", en: "This week's scrap was higher than usual." }, drill: { jp: "O refugo desta semana foi maior", en: "This week's scrap was higher" }, accept: ["reject", "the reject", "scrap", "rejects", "waste", "seconds"], hint: "rre-FOO-gu. What comes off the line unusable, from refugar, to reject. Distinct from o entulho (u115), which is building rubble, and from o lixo, ordinary rubbish." },
        { id: "pt-u122l4-aserie", type: "vocab", front: "a série", reading: "aserie", meaning: "production run", example: { jp: "A série foi pequena e por isso cada peça ficou cara.", en: "The run was small and so each piece came out expensive." }, drill: { jp: "A série foi pequena e ficou cara", en: "The run was small and came out expensive" }, accept: ["production run", "the production run", "series", "the series", "run", "batch run"], hint: "SE-rie. A set made to one design. Fabrico em série is mass production, and fora de série means both discontinued and, of a person, outstanding." },
        { id: "pt-u122l4-oprototipo", type: "vocab", front: "o protótipo", reading: "oprototipo", meaning: "prototype", example: { jp: "O protótipo foi mostrado antes de haver dinheiro para o resto.", en: "The prototype was shown before there was money for the rest." }, drill: { jp: "O protótipo foi mostrado primeiro", en: "The prototype was shown first" }, accept: ["prototype", "the prototype", "first model", "mock-up", "pilot"], hint: "pru-TO-ti-pu, stress on the second syllable. The first working example, built to be judged rather than sold." },
      ],
    },
  ],
};
