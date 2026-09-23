// PT Unit 114 — A cidade e o urbanismo (slot: coverage-b2-4) — B2
// THE CITY AS A THING THAT IS PLANNED, ARGUED OVER AND REBUILT. The scaffold
// title was "Vocabulary 4 (B2)"; a coverage slot has no theme of its own, so
// block 3 gave the thirteen coverage slots themes that no NAMED B2 slot claims
// (u88-113: argument, evidence, abstraction, nuance, politics-law, business,
// science-tech, history-culture, arts-criticism, ethics, risk, identity-society,
// career, environment, health-systems, education-research, media-narrative,
// emotion-subtle, grammar 9-11, register 3-4). Urban form and the local state
// are claimed by none of them.
//
// SLOT BOUNDARIES:
//   u7 owns a praça, a rua, a cidade; u46 o norte, a região, a vila; u48 o
//   palácio, o castelo, o monumento; u61 o regulamento and o requisito; u65 o
//   terreno, a paisagem, urbano. All used here, none re-taught.
//   o regulamento was the first draft's word for u114l3 and is ALREADY TAUGHT at
//   u61l3 — replaced by o plano diretor, which is the Portuguese instrument
//   itself (PDM) and not a synonym of it.
//
// EUROPEAN PORTUGUESE: a autarquia and a freguesia are the real units of local
// government in Portugal and have no Brazilian equivalent; a calçada is the
// Lisbon pavement, not a Brazilian sidewalk.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT114 = {
  id: "pt-u114",
  lang: "pt",
  title: "A cidade e o urbanismo",
  order: 114,
  stage: "b2",
  lessons: [
    {
      id: "pt-u114l1",
      unit: 114,
      lesson: 1,
      title: "A forma da cidade",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe the physical shape of a Portuguese city — its blocks, its streets, its pavements and its main arteries.",
      items: [
        { id: "pt-u114l1-ourbanismo", type: "vocab", front: "o urbanismo", reading: "ourbanismo", meaning: "town planning", example: { jp: "O urbanismo da cidade mudou muito depois da guerra.", en: "The town planning of the city changed a lot after the war." }, drill: { jp: "O urbanismo da cidade mudou muito", en: "The town planning of the city changed a lot" }, accept: ["town planning", "urbanism", "urban planning", "city planning"], hint: "ur-ba-NIZH-mu. The discipline and the policy, not the result — o urbanismo decides where the blocks go. A newspaper headline about a city almost always uses this word." },
        { id: "pt-u114l1-oquarteirao", type: "vocab", front: "o quarteirão", reading: "oquarteirao", meaning: "city block", example: { jp: "O quarteirão entre a praça e o rio tem lojas em baixo e casas em cima.", en: "The block between the square and the river has shops below and homes above." }, drill: { jp: "O quarteirão tem lojas em baixo", en: "The block has shops below" }, accept: ["city block", "the city block", "block", "the block"], hint: "kwar-tay-ROWN. The square of buildings between four streets. Dar a volta ao quarteirão is to walk round the block — the standard way to say you went out for air." },
        { id: "pt-u114l1-acalcada", type: "vocab", front: "a calçada", reading: "acalcada", meaning: "cobbled pavement", example: { jp: "A calçada da rua é bonita mas fica perigosa quando chove.", en: "The cobbled pavement of the street is beautiful but becomes dangerous when it rains." }, drill: { jp: "A calçada fica perigosa quando chove", en: "The cobbled pavement becomes dangerous when it rains" }, accept: ["cobbled pavement", "the cobbled pavement", "cobblestone pavement", "calcada", "pavement"], hint: "kal-SA-da. Specifically the black-and-white Portuguese cobblestone pavement — a calçada portuguesa. In Brazil the same word just means sidewalk; in Portugal it names the stones." },
        { id: "pt-u114l1-oeixo", type: "vocab", front: "o eixo", reading: "oeixo", meaning: "axis (main artery)", example: { jp: "O eixo principal da cidade liga a estação ao centro.", en: "The city's main axis links the station to the centre." }, drill: { jp: "O eixo principal liga a estação", en: "The main axis links the station" }, accept: ["axis", "the axis", "main artery", "the main artery", "axle"], hint: "AY-shu. The line a city is organised along. It is also the literal axle of a wheel, and eixo rodoviário is a trunk road — the planning sense grew out of the mechanical one." },
        { id: "pt-u114l1-apraceta", type: "vocab", front: "a praceta", reading: "apraceta", meaning: "cul-de-sac", example: { jp: "A praceta atrás da escola não tem saída para o outro lado.", en: "The cul-de-sac behind the school has no way out to the other side." }, drill: { jp: "A praceta não tem saída", en: "The cul-de-sac has no way out" }, accept: ["cul-de-sac", "the cul-de-sac", "small square", "dead end", "close"], hint: "pra-SE-ta. Literally a little praça, but in a Portuguese address it means the quiet dead-end off a bigger street, and thousands of suburban addresses begin Praceta." },
        { id: "pt-u114l1-oarruamento", type: "vocab", front: "o arruamento", reading: "oarruamento", meaning: "street layout", example: { jp: "O arruamento do bairro novo foi decidido antes de construir as casas.", en: "The street layout of the new neighbourhood was decided before building the houses." }, drill: { jp: "O arruamento do bairro novo mudou", en: "The street layout of the new neighbourhood changed" }, accept: ["street layout", "the street layout", "street plan", "road layout"], hint: "a-rru-a-MEN-tu, rolled rr. The pattern the streets make, as drawn on a plan — the word a council document uses where English would say the roads." },
      ],
    },
    {
      id: "pt-u114l2",
      unit: 114,
      lesson: 2,
      title: "A cidade que cresce",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a city growing outwards in Portuguese — the edges, the suburbs, how tightly it is built.",
      items: [
        { id: "pt-u114l2-aperiferia", type: "vocab", front: "a periferia", reading: "aperiferia", meaning: "outskirts", example: { jp: "A periferia da cidade cresceu depressa nos anos em que havia trabalho.", en: "The outskirts of the city grew quickly in the years when there was work." }, drill: { jp: "A periferia da cidade cresceu depressa", en: "The outskirts of the city grew quickly" }, accept: ["outskirts", "the outskirts", "periphery", "the periphery", "outer areas"], hint: "pe-ri-fe-REE-a. The ring outside the centre, and in Portuguese it carries a social weight English does not — viver na periferia says something about money, not only distance." },
        { id: "pt-u114l2-osuburbio", type: "vocab", front: "o subúrbio", reading: "osuburbio", meaning: "suburb", example: { jp: "O subúrbio onde ela mora fica a vinte minutos de comboio.", en: "The suburb where she lives is twenty minutes away by train." }, drill: { jp: "O subúrbio fica a vinte minutos", en: "The suburb is twenty minutes away" }, accept: ["suburb", "the suburb", "the suburbs", "outer town"], hint: "su-BOOR-biu. One named place outside the city, against a periferia, which is the whole belt. Note comboio, not trem — this is European Portuguese." },
        { id: "pt-u114l2-adensidade", type: "vocab", front: "a densidade", reading: "adensidade", meaning: "density", example: { jp: "A densidade do centro é muito maior do que a do campo.", en: "The density of the centre is much higher than that of the countryside." }, drill: { jp: "A densidade do centro é maior", en: "The density of the centre is higher" }, accept: ["density", "the density", "population density", "denseness"], hint: "den-si-DA-de. How much is packed into a space — people, buildings or matter alike, so it serves the physics class and the planning meeting equally." },
        { id: "pt-u114l2-aexpansao", type: "vocab", front: "a expansão", reading: "aexpansao", meaning: "expansion", example: { jp: "A expansão da cidade para o sul começou quando abriram a ponte.", en: "The city's expansion to the south began when they opened the bridge." }, drill: { jp: "A expansão da cidade começou cedo", en: "The city's expansion began early" }, accept: ["expansion", "the expansion", "growth", "spread"], hint: "esh-pan-SOWN. Growth outwards in space. Where o crescimento is any increase, a expansão is specifically taking up more room." },
        { id: "pt-u114l2-oloteamento", type: "vocab", front: "o loteamento", reading: "oloteamento", meaning: "land parcelling", example: { jp: "O loteamento do terreno foi aprovado mas ainda não começaram as obras.", en: "The parcelling of the land was approved but the works have not started yet." }, drill: { jp: "O loteamento do terreno foi aprovado", en: "The parcelling of the land was approved" }, accept: ["land parcelling", "parcelling", "the land parcelling", "subdivision", "plotting"], hint: "lo-te-a-MEN-tu. Cutting a field into building plots — the legal step before anything is built. Um loteamento is also the resulting estate, so context decides." },
        { id: "pt-u114l2-amalha", type: "vocab", front: "a malha", reading: "amalha", meaning: "urban fabric", example: { jp: "A malha antiga da cidade não foi feita para os carros de hoje.", en: "The old fabric of the city was not made for today's cars." }, drill: { jp: "A malha antiga não serve hoje", en: "The old fabric is no use today" }, accept: ["urban fabric", "the urban fabric", "fabric", "mesh", "grid"], hint: "MA-lya, lh. A mesh — of wool, of a net, or of streets. A malha urbana is the standard planning phrase for the grain of a city." },
      ],
    },
    {
      id: "pt-u114l3",
      unit: 114,
      lesson: 3,
      title: "Quem decide",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the bodies that govern a place in Portugal and what they issue — the council, the parish, the permit, the plan.",
      items: [
        { id: "pt-u114l3-omunicipio", type: "vocab", front: "o município", reading: "omunicipio", meaning: "municipality", example: { jp: "O município decide o que se pode construir dentro da sua área.", en: "The municipality decides what may be built inside its area." }, drill: { jp: "O município decide o que construir", en: "The municipality decides what to build" }, accept: ["municipality", "the municipality", "council area", "borough"], hint: "mu-ni-SEE-piu. The territory and the legal body together. Portugal has 308 of them, and o município is the unit every national statistic is broken down by." },
        { id: "pt-u114l3-aautarquia", type: "vocab", front: "a autarquia", reading: "aautarquia", meaning: "local authority", example: { jp: "A autarquia abriu um centro novo para as crianças do bairro.", en: "The local authority opened a new centre for the children of the neighbourhood." }, drill: { jp: "A autarquia abriu um centro novo", en: "The local authority opened a new centre" }, accept: ["local authority", "the local authority", "local government", "council"], hint: "ow-tar-KEE-a. The elected local government itself. As autárquicas are the local elections — a word on every Portuguese ballot paper and in no Brazilian one." },
        { id: "pt-u114l3-afreguesia", type: "vocab", front: "a freguesia", reading: "afreguesia", meaning: "civil parish", example: { jp: "A freguesia trata dos papéis mais simples sem ser preciso ir ao centro.", en: "The civil parish handles the simpler paperwork without your having to go into the centre." }, drill: { jp: "A freguesia trata dos papéis simples", en: "The parish handles the simple paperwork" }, accept: ["civil parish", "the civil parish", "parish", "the parish"], hint: "fre-ge-ZEE-a. The smallest tier of Portuguese local government, below o município. Historically a church parish, today an office — and still the first place you go for a certificate." },
        { id: "pt-u114l3-olicenciamento", type: "vocab", front: "o licenciamento", reading: "olicenciamento", meaning: "permitting", example: { jp: "O licenciamento da obra demorou mais de um ano.", en: "The permitting of the works took more than a year." }, drill: { jp: "O licenciamento demorou mais de um ano", en: "The permitting took more than a year" }, accept: ["permitting", "the permitting", "licensing", "permit process", "planning permission"], hint: "li-sen-si-a-MEN-tu. The whole process of getting official permission, not the paper at the end. Careful: a licenciatura is a university degree — same root, different life." },
        { id: "pt-u114l3-oplanodiretor", type: "vocab", front: "o plano diretor", reading: "oplanodiretor", meaning: "master plan", example: { jp: "O plano diretor diz onde pode haver casas e onde tem de ficar campo.", en: "The master plan says where there may be housing and where countryside has to remain." }, drill: { jp: "O plano diretor diz onde construir", en: "The master plan says where to build" }, accept: ["master plan", "the master plan", "development plan", "local plan"], hint: "PLA-nu di-re-TOR. In full o Plano Diretor Municipal, the PDM — the binding map of what may be built where. Every Portuguese planning argument ends up citing it." },
        { id: "pt-u114l3-afiscalizacao", type: "vocab", front: "a fiscalização", reading: "afiscalizacao", meaning: "enforcement (inspection)", example: { jp: "A fiscalização passou pela obra e mandou parar tudo.", en: "The inspectors came by the works and ordered everything stopped." }, drill: { jp: "A fiscalização mandou parar a obra", en: "The inspectors ordered the works stopped" }, accept: ["enforcement", "the enforcement", "inspection", "the inspection", "policing", "monitoring"], hint: "fish-ka-li-za-SOWN. Checking that rules are being followed, and by extension the people who do it — a fiscalização chegou means the inspectors turned up." },
      ],
    },
    {
      id: "pt-u114l4",
      unit: 114,
      lesson: 4,
      title: "Refazer a cidade",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about rebuilding part of a city in Portuguese — restoring, demolishing, rehousing, and the site itself.",
      items: [
        { id: "pt-u114l4-arequalificacao", type: "vocab", front: "a requalificação", reading: "arequalificacao", meaning: "regeneration", example: { jp: "A requalificação da zona do rio trouxe gente nova ao bairro.", en: "The regeneration of the riverside area brought new people to the neighbourhood." }, drill: { jp: "A requalificação trouxe gente nova", en: "The regeneration brought new people" }, accept: ["regeneration", "the regeneration", "redevelopment", "upgrading", "renewal of an area"], hint: "rre-kwa-li-fi-ka-SOWN. Making a whole area good again — streets, squares and buildings together. The single commonest word on a Portuguese council hoarding." },
        { id: "pt-u114l4-areabilitacao", type: "vocab", front: "a reabilitação", reading: "areabilitacao", meaning: "refurbishment", example: { jp: "A reabilitação do prédio antigo manteve a frente e mudou tudo por dentro.", en: "The refurbishment of the old building kept the front and changed everything inside." }, drill: { jp: "A reabilitação manteve a frente antiga", en: "The refurbishment kept the old front" }, accept: ["refurbishment", "the refurbishment", "rehabilitation", "renovation", "restoration of a building"], hint: "rre-a-bi-li-ta-SOWN. One building brought back into use, where a requalificação is a whole quarter. It is also the medical word for rehabilitation." },
        { id: "pt-u114l4-ademolicao", type: "vocab", front: "a demolição", reading: "ademolicao", meaning: "demolition", example: { jp: "A demolição do edifício foi decidida depois de ninguém querer comprá-lo.", en: "The demolition of the building was decided after nobody wanted to buy it." }, drill: { jp: "A demolição do edifício foi decidida", en: "The demolition of the building was decided" }, accept: ["demolition", "the demolition", "knocking down", "tearing down"], hint: "de-mu-li-SOWN. Pulling a building down on purpose. Demolir is the verb; the noun is what appears in the licence." },
        { id: "pt-u114l4-orealojamento", type: "vocab", front: "o realojamento", reading: "orealojamento", meaning: "rehousing", example: { jp: "O realojamento das famílias foi feito antes de começar a demolição.", en: "The rehousing of the families was done before the demolition began." }, drill: { jp: "O realojamento das famílias foi feito", en: "The rehousing of the families was done" }, accept: ["rehousing", "the rehousing", "resettlement", "relocation of residents"], hint: "rre-a-lu-zha-MEN-tu, zh as in measure. Moving people into new housing because their old housing is going. A charged word in Lisbon, where whole bairros were realojados in the 1990s." },
        { id: "pt-u114l4-aempreitada", type: "vocab", front: "a empreitada", reading: "aempreitada", meaning: "works contract", example: { jp: "A empreitada foi dada à empresa que pediu menos dinheiro.", en: "The works contract was given to the company that asked for the least money." }, drill: { jp: "A empreitada foi dada à empresa", en: "The works contract was given to the company" }, accept: ["works contract", "the works contract", "contract", "the contract", "building contract"], hint: "em-pray-TA-da. The contract to carry out building work for a fixed price. In everyday speech uma empreitada is also any big job you have taken on — só me meti numa empreitada." },
        { id: "pt-u114l4-oestaleiro", type: "vocab", front: "o estaleiro", reading: "oestaleiro", meaning: "building site", example: { jp: "O estaleiro fica fechado ao sábado e ninguém pode entrar.", en: "The building site is closed on Saturdays and nobody may go in." }, drill: { jp: "O estaleiro fica fechado ao sábado", en: "The building site is closed on Saturdays" }, accept: ["building site", "the building site", "construction site", "site", "yard"], hint: "shta-LAY-ru. The fenced working area with the machines and the huts. Um estaleiro naval is a shipyard — the same idea of a place where big things are assembled." },
      ],
    },
  ],
};
