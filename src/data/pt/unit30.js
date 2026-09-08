// PT Unit 30 — A casa e as tarefas — A2
// Portuguese A2, block 1 (units 21-30). Conventions, the pt-PT corpus decision and
// the Spanish-trap policy are in the header of unit1.js and bind this file too.
// Every vocab item carries a `drill` authored inline beside its `example`
// (RUNBOOK §4): 3-8 tokens, no punctuation, the item's own front inside it as a
// whole word. Verified against cardRouting.js canCloze/canSentence, not the lint.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT30 = {
  id: "pt-u30",
  lang: "pt",
  title: "A casa e as tarefas",
  order: 30,
  stage: "a2",
  lessons: [
    {
      id: "pt-u30l1",
      unit: 30,
      lesson: 1,
      title: "As divisões",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the parts of a Portuguese house Unit 15 didn't reach — the ones outside the main rooms.",
      items: [
        { id: "pt-u30l1-oquintal", type: "vocab", front: "o quintal", reading: "oquintal", meaning: "backyard", example: { jp: "O quintal da casa dos meus avós tinha uma árvore enorme.", en: "The backyard of my grandparents' house had an enormous tree." }, drill: { jp: "O quintal tem uma árvore enorme", en: "The backyard has an enormous tree" }, accept: ["the backyard", "yard", "back garden", "the yard"], hint: "kin-TAL. It is the working yard behind a house, where o jardim from Unit 15 is planted for pleasure. Portuguese villages are full of them." },
        { id: "pt-u30l1-agaragem", type: "vocab", front: "a garagem", reading: "agaragem", meaning: "garage", example: { jp: "Deixo o carro na garagem porque a rua é muito estreita.", en: "I leave the car in the garage because the street is very narrow." }, drill: { jp: "A garagem é muito pequena", en: "The garage is very small" }, accept: ["the garage", "car port"], hint: "ga-RA-zhem, the zh. Plural as garagens. Careful — a garagem is where you park; the workshop that repairs the car is uma oficina, the false friend from Unit 7." },
        { id: "pt-u30l1-aescada", type: "vocab", front: "a escada", reading: "aescada", meaning: "stairs", example: { jp: "Subi a escada a correr porque o elevador estava avariado.", en: "I ran up the stairs because the lift was out of order." }, drill: { jp: "A escada é muito grande", en: "The staircase is very big" }, accept: ["the stairs", "staircase", "ladder", "steps"], hint: "esh-KA-da. Often plural in use — as escadas. It also means a ladder, and a escada rolante is an escalator." },
        { id: "pt-u30l1-avaranda", type: "vocab", front: "a varanda", reading: "avaranda", meaning: "balcony", example: { jp: "Tomamos o pequeno-almoço na varanda quando está sol.", en: "We have breakfast on the balcony when it is sunny." }, drill: { jp: "A varanda tem uma vista fantástica", en: "The balcony has a fantastic view" }, accept: ["the balcony", "veranda", "terrace"], hint: "va-RAN-da, nasal. The word travelled from Portuguese and Hindi into English as veranda. In Lisbon a marquise is a glassed-in balcony." },
        { id: "pt-u30l1-acave", type: "vocab", front: "a cave", reading: "acave", meaning: "basement", example: { jp: "Guardamos as malas na cave porque não há espaço em casa.", en: "We keep the suitcases in the basement because there is no room in the house." }, drill: { jp: "A cave está cheia de malas", en: "The basement is full of suitcases" }, accept: ["the basement", "cellar", "the cellar"], hint: "KA-ve. From the same Latin root as cave and cellar, but it means the floor below ground, not a hole in a hillside — that is uma gruta." },
        { id: "pt-u30l1-osotao", type: "vocab", front: "o sótão", reading: "osotao", meaning: "attic", example: { jp: "O sótão está cheio de coisas velhas que ninguém quer.", en: "The attic is full of old things nobody wants." }, drill: { jp: "O sótão está cheio de coisas", en: "The attic is full of things" }, accept: ["the attic", "loft", "the loft"], hint: "SO-tawng, nasal ending. Plural os sótãos. Note the accent on the o marks the stress, which sits on the first syllable and not the nasal." },
      ],
    },
    {
      id: "pt-u30l2",
      unit: 30,
      lesson: 2,
      title: "As partes da casa",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Describe the fabric of a building — wall, floor, ceiling, roof — and the things on it that ring and run.",
      items: [
        { id: "pt-u30l2-aparede", type: "vocab", front: "a parede", reading: "aparede", meaning: "wall", example: { jp: "A parede da cozinha ficou molhada por causa da chuva.", en: "The kitchen wall got wet because of the rain." }, drill: { jp: "A parede da cozinha está molhada", en: "The kitchen wall is wet" }, accept: ["the wall", "walls"], hint: "pa-RE-de. It is an interior or building wall. A garden or boundary wall is um muro — Portuguese splits them where English does not." },
        { id: "pt-u30l2-ochao", type: "vocab", front: "o chão", reading: "ochao", meaning: "floor", example: { jp: "O chão da sala é de madeira e faz barulho quando ando.", en: "The living room floor is wooden and creaks when I walk." }, drill: { jp: "O chão da sala está limpo", en: "The living room floor is clean" }, accept: ["the floor", "ground", "the ground"], hint: "SHAWNG, nasal. It covers both the floor indoors and the ground outside. For a storey of a building Portugal says o andar or o piso instead." },
        { id: "pt-u30l2-oteto", type: "vocab", front: "o teto", reading: "oteto", meaning: "ceiling", example: { jp: "O teto do quarto é muito alto e por isso a casa é fria.", en: "The bedroom ceiling is very high and so the house is cold." }, drill: { jp: "O teto do quarto é alto", en: "The bedroom ceiling is high" }, accept: ["the ceiling"], hint: "TE-tu. Since the 1990 accord Portugal writes teto, dropping the c of tecto — the same change that gave projeto and elétrico." },
        { id: "pt-u30l2-otelhado", type: "vocab", front: "o telhado", reading: "otelhado", meaning: "roof", example: { jp: "O telhado da igreja é vermelho, como quase todos em Portugal.", en: "The church roof is red, like almost all of them in Portugal." }, drill: { jp: "O telhado da igreja é vermelho", en: "The church roof is red" }, accept: ["the roof", "rooftop"], hint: "te-LYA-du, the lh. From telha, a roof tile — the terracotta ones that make a Portuguese town look the way it does from above." },
        { id: "pt-u30l2-acampainha", type: "vocab", front: "a campainha", reading: "acampainha", meaning: "doorbell", example: { jp: "A campainha tocou às sete da manhã e acordou toda a casa.", en: "The doorbell rang at seven in the morning and woke the whole house." }, drill: { jp: "A campainha tocou às sete", en: "The doorbell rang at seven" }, accept: ["the doorbell", "bell", "buzzer"], hint: "kam-pa-EE-nya — nasal, then the nh. From campana, a bell. The verb is tocar, from Unit 19, which also plays instruments." },
        { id: "pt-u30l2-atorneira", type: "vocab", front: "a torneira", reading: "atorneira", meaning: "tap", example: { jp: "A torneira da cozinha está a pingar desde ontem à noite.", en: "The kitchen tap has been dripping since last night." }, drill: { jp: "A torneira da cozinha é nova", en: "The kitchen tap is new" }, accept: ["the tap", "faucet", "the faucet"], hint: "tor-NAY-ra. PORTUGAL SAYS TORNEIRA, and so does Brazil — but American English says faucet, which is the trap for an English speaker rather than a Portuguese one." },
      ],
    },
    {
      id: "pt-u30l3",
      unit: 30,
      lesson: 3,
      title: "Na cozinha",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the machines and tools a Portuguese kitchen runs on, and say which one is broken.",
      items: [
        { id: "pt-u30l3-ofogao", type: "vocab", front: "o fogão", reading: "ofogao", meaning: "stove", example: { jp: "O fogão é a gás e por isso funciona mesmo quando falta a luz.", en: "The stove runs on gas and so it works even when the power is out." }, drill: { jp: "O fogão é a gás", en: "The stove runs on gas" }, accept: ["the stove", "cooker", "hob", "the cooker"], hint: "fo-GAWNG, nasal, from fogo, fire. Most Portuguese kitchens run on bottled gas — a botija — which is why the stove keeps working in a power cut." },
        { id: "pt-u30l3-oforno", type: "vocab", front: "o forno", reading: "oforno", meaning: "oven", example: { jp: "Pus o frango no forno e esqueci-me dele durante duas horas.", en: "I put the chicken in the oven and forgot about it for two hours." }, drill: { jp: "O forno está muito quente", en: "The oven is very hot" }, accept: ["the oven"], hint: "FOR-nu. No forno on a menu means oven-baked — bacalhau no forno is a national dish. o micro-ondas is the microwave." },
        { id: "pt-u30l3-amaquinadelavar", type: "vocab", front: "a máquina de lavar", reading: "amaquinadelavar", meaning: "washing machine", example: { jp: "A máquina de lavar avariou-se e tive de lavar tudo à mão.", en: "The washing machine broke down and I had to wash everything by hand." }, drill: { jp: "A máquina de lavar é nova", en: "The washing machine is new" }, accept: ["the washing machine", "washer"], hint: "Built on lavar from Unit 21. Portugal distinguishes máquina de lavar roupa from máquina de lavar loiça, the dishwasher — the second word tells you which." },
        { id: "pt-u30l3-oaspirador", type: "vocab", front: "o aspirador", reading: "oaspirador", meaning: "vacuum cleaner", example: { jp: "Passo o aspirador ao sábado, quando tenho tempo.", en: "I vacuum on Saturday, when I have time." }, drill: { jp: "Passo o aspirador ao sábado", en: "I vacuum on Saturday" }, accept: ["the vacuum cleaner", "hoover", "vacuum", "the hoover"], hint: "ash-pi-ra-DOR. The verb frame is passar o aspirador, to pass the vacuum — Portuguese has no single verb for it the way English has to hoover." },
        { id: "pt-u30l3-avassoura", type: "vocab", front: "a vassoura", reading: "avassoura", meaning: "broom", example: { jp: "A vassoura está atrás da porta, ao lado do balde.", en: "The broom is behind the door, next to the bucket." }, drill: { jp: "A vassoura está atrás da porta", en: "The broom is behind the door" }, accept: ["the broom", "brush", "sweeping brush"], hint: "va-SO-ra, double s so a hard s. Varrer is to sweep. Portugal sweeps far more than it vacuums, especially the tiled floors of an older house." },
        { id: "pt-u30l3-obalde", type: "vocab", front: "o balde", reading: "obalde", meaning: "bucket", example: { jp: "Enchi o balde de água quente para lavar o chão da cozinha.", en: "I filled the bucket with hot water to wash the kitchen floor." }, drill: { jp: "O balde está cheio de água", en: "The bucket is full of water" }, accept: ["the bucket", "pail"], hint: "BAL-de. It arrived in English as a nautical word, so a ship's bucket and this one share a root. Um balde de água fria is a cold shock, the same image as English." },
      ],
    },
    {
      id: "pt-u30l4",
      unit: 30,
      lesson: 4,
      title: "As tarefas de casa",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Run a Portuguese household — the drying, the heating, the electricity and the bill that comes with them.",
      items: [
        { id: "pt-u30l4-secar", type: "vocab", front: "secar", reading: "secar", meaning: "to dry", example: { jp: "Ponho a roupa a secar na varanda porque não tenho máquina.", en: "I put the clothes out to dry on the balcony because I don't have a machine." }, drill: { jp: "Ponho a roupa a secar", en: "I put the clothes out to dry" }, accept: ["dry", "to dry off", "dry off", "hang out to dry"], hint: "se-KAR, and the c becomes qu in the I form: sequei. Built on seco from Unit 26. Portugal dries clothes outdoors almost all year." },
        { id: "pt-u30l4-aquecer", type: "vocab", front: "aquecer", reading: "aquecer", meaning: "to heat", example: { jp: "Vou aquecer a sopa no fogão porque está fria.", en: "I'm going to heat the soup on the stove because it is cold." }, drill: { jp: "Vou aquecer a sopa hoje", en: "I am going to heat the soup today" }, accept: ["heat", "warm up", "to warm", "warm"], hint: "a-ke-SER. From quente, hot, in Unit 8. o aquecimento is the heating, which older Portuguese flats very often do not have." },
        { id: "pt-u30l4-aluz", type: "vocab", front: "a luz", reading: "aluz", meaning: "light", example: { jp: "Faltou a luz durante a trovoada e ficámos sem frigorífico.", en: "The power went out during the thunderstorm and we were left without a fridge." }, drill: { jp: "Faltou a luz durante a trovoada", en: "The power went out during the storm" }, accept: ["the light", "electricity", "power", "the power"], hint: "LOOSH, that final z shushing like an s. It means light AND the electricity supply — a conta da luz is the electricity bill, not a lighting bill." },
        { id: "pt-u30l4-aeletricidade", type: "vocab", front: "a eletricidade", reading: "aeletricidade", meaning: "electricity", example: { jp: "A eletricidade está mais cara este ano do que no ano passado.", en: "Electricity is more expensive this year than last year." }, drill: { jp: "A eletricidade está mais cara", en: "Electricity is more expensive" }, accept: ["the electricity", "power", "electric power"], hint: "e-le-tri-si-DA-de. Post-1990 spelling drops the c of electricidade, matching elétrico from Unit 7. The -dade ending again, as in cidade and idade." },
        { id: "pt-u30l4-ogas", type: "vocab", front: "o gás", reading: "ogas", meaning: "gas", example: { jp: "O gás acabou a meio do jantar e tivemos de encomendar outra botija.", en: "The gas ran out in the middle of dinner and we had to order another bottle." }, drill: { jp: "O gás acabou a meio do jantar", en: "The gas ran out mid-dinner" }, accept: ["the gas", "natural gas", "bottled gas"], hint: "GASH, with the accent marking the stress and the final s shushing. Água com gás is sparkling water — the same word does both jobs." },
        { id: "pt-u30l4-estender", type: "vocab", front: "estender", reading: "estender", meaning: "to hang out", example: { jp: "Estendi a roupa lá fora mas começou a chover meia hora depois.", en: "I hung the washing outside but it started raining half an hour later." }, drill: { jp: "Vou estender a roupa hoje", en: "I am going to hang out the washing today" }, accept: ["hang out", "spread", "to spread", "stretch out"], hint: "esh-ten-DER, nasal middle. Estender a roupa is the fixed phrase for hanging out washing. o estendal is the line or airer it goes on." },
      ],
    },
  ],
};
