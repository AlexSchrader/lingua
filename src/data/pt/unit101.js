// PT Unit 101 — O clima e o planeta (slot: environment-global) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Authored by the pt B2 block-2 seat (u101–u113), 2026-09-23, to the B2
// constitution §C1–C10 in src/data/pt/unit88.js and the language-wide
// conventions in src/data/pt/unit1.js. Nothing here overrides either.
//
// SLOT BOUNDARIES — the environment is taught THREE times in this corpus and
// this is the third, so the line matters more here than anywhere else in the
// block. u34 (A2) owns the furniture: o ambiente, a natureza, a poluição,
// poluir, reciclar, proteger, a Terra, o planeta, o clima, o ar. u65 (B1) owns
// the energy and territory half: a energia, renovável, o petróleo, o carvão,
// o consumo, o desperdício, os resíduos, a reciclagem, reduzir, a seca, a
// inundação, a espécie. NONE of that is re-taught. §C3: this unit teaches what
// a learner DOES with the topic — name the driver, argue about depletion, read
// a treaty, and talk about what cannot be undone.
// RESERVED, not spent here: o rascunho, o resumo, conforme, a intriga.
// lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT101 = {
  id: "pt-u101",
  lang: "pt",
  title: "O clima e o planeta",
  order: 101,
  stage: "b2",
  lessons: [
    {
      id: "pt-u101l1",
      unit: 101,
      lesson: 1,
      title: "Nomear o que aquece o planeta",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the thing that is driving the warming in Portuguese, not just the weather it produces — the fuel, the carbon, the footprint, the thaw.",
      items: [
        { id: "pt-u101l1-oaquecimento", type: "vocab", front: "o aquecimento", reading: "oaquecimento", meaning: "warming", example: { jp: "O aquecimento do planeta já é visível no norte, mas o governo ainda fala dele como um cenário.", en: "The planet's warming is already visible in the north, but the government still speaks of it as a scenario." }, drill: { jp: "O aquecimento do planeta é visível", en: "The planet's warming is visible" }, accept: ["warming", "the warming", "heating up", "global warming"], hint: "a-ke-si-MEN-tu, from aquecer. In Portuguese the word does double duty: o aquecimento is also the central heating in a house. Context, not a second word, tells them apart." },
        { id: "pt-u101l1-ocarbono", type: "vocab", front: "o carbono", reading: "ocarbono", meaning: "carbon", example: { jp: "O carbono da fábrica não desaparece, embora o ar da cidade esteja limpo hoje.", en: "The factory's carbon does not disappear, although the city air is clean today." }, drill: { jp: "O carbono da fábrica não desaparece", en: "The factory's carbon does not disappear" }, accept: ["carbon", "the carbon"], hint: "kar-BO-nu. The element, and by extension the whole accounting of emissions: neutralidade de carbono, mercado de carbono. Not o carvão, which is the black rock you burn." },
        { id: "pt-u101l1-ocombustivel", type: "vocab", front: "o combustível", reading: "ocombustivel", meaning: "fuel", example: { jp: "O combustível é barato hoje, mas o custo real chega cinquenta anos depois.", en: "Fuel is cheap today, but the real cost arrives fifty years later." }, drill: { jp: "O combustível é muito barato agora", en: "Fuel is very cheap now" }, accept: ["fuel", "the fuel", "combustible"], hint: "kom-bush-TEE-vel. Anything burned for energy — petrol, gas, wood. Combustíveis fósseis is the fixed phrase the whole debate turns on." },
        { id: "pt-u101l1-poluente", type: "vocab", front: "poluente", reading: "poluente", meaning: "polluting", example: { jp: "A indústria mais poluente do país é também a que tem mais trabalhadores, e daí que ninguém queira acabar com ela.", en: "The country's most polluting industry is also the one with the most workers, which is why nobody wants to do away with it." }, drill: { jp: "A fábrica mais poluente fica aqui", en: "The most polluting factory is here" }, accept: ["polluting", "pollutant", "a pollutant"], hint: "po-lu-EN-te. Adjective and noun at once: uma indústria poluente, and um poluente is the substance itself. Built on poluir with the -ente ending that turns a verb into the thing doing it." },
        { id: "pt-u101l1-apegada", type: "vocab", front: "a pegada", reading: "apegada", meaning: "footprint", example: { jp: "A pegada de uma família com dinheiro é enorme, mas ninguém fala do assunto.", en: "A moneyed family's footprint is enormous, but nobody talks about the subject." }, drill: { jp: "A pegada desta família é enorme", en: "This family's footprint is enormous" }, accept: ["footprint", "the footprint", "carbon footprint", "ecological footprint"], hint: "pe-GA-da. Literally the mark a foot leaves in sand; the environmental sense is a straight loan of the English metaphor and is now the ordinary word — a pegada ecológica, a pegada de carbono." },
        { id: "pt-u101l1-odegelo", type: "vocab", front: "o degelo", reading: "odegelo", meaning: "thaw", example: { jp: "O degelo no norte é grave, mas o público conhece os números anos depois.", en: "The thaw in the north is serious, but the public learns the figures years later." }, drill: { jp: "O degelo no norte é grave", en: "The thaw in the north is serious" }, accept: ["thaw", "the thaw", "melting", "the melting"], hint: "de-JE-lu, de- (undo) + gelo (ice). Also the political metaphor, exactly as in English: o degelo entre os dois países." },
      ],
    },
    {
      id: "pt-u101l2",
      unit: 101,
      lesson: 2,
      title: "Gastar até ao fim",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Argue in Portuguese about whether a resource lasts — say that something runs out, wears down, is kept, or is simply too scarce to share.",
      items: [
        { id: "pt-u101l2-sustentavel", type: "vocab", front: "sustentável", reading: "sustentavel", meaning: "sustainable", example: { jp: "O modelo é sustentável na teoria, mas ninguém sabe o que acontece quando a população duplica.", en: "The model is sustainable in theory, but nobody knows what happens when the population doubles." }, drill: { jp: "Este modelo não é sustentável", en: "This model is not sustainable" }, accept: ["sustainable", "viable long-term"], hint: "sush-ten-TA-vel, from sustentar — to hold something up. The -ável ending says can be held up, and that is exactly the claim: this can keep carrying its own weight." },
        { id: "pt-u101l2-esgotar", type: "vocab", front: "esgotar", reading: "esgotar", meaning: "to use up", example: { jp: "A fábrica esgota a água do terreno em dez anos, embora a licença fale em cinquenta.", en: "The factory uses up the land's water in ten years, although the licence talks about fifty." }, drill: { jp: "A fábrica vai esgotar a água", en: "The factory is going to use up the water" }, accept: ["to use up", "use up", "to exhaust", "exhaust", "to deplete", "deplete"], hint: "izh-go-TAR. To finish a stock so completely that there is none left. Esgotado on a ticket office window means sold out; esgotado said of a person means wrung dry." },
        { id: "pt-u101l2-preservar", type: "vocab", front: "preservar", reading: "preservar", meaning: "to preserve", example: { jp: "É mais barato preservar a paisagem agora do que recuperar tudo depois, mas o dinheiro chega sempre tarde.", en: "It is cheaper to preserve the landscape now than to recover everything later, but the money always arrives late." }, drill: { jp: "Queremos preservar esta paisagem rural", en: "We want to preserve this rural landscape" }, accept: ["to preserve", "preserve", "to conserve", "conserve", "to safeguard"], hint: "pre-zer-VAR. To keep something in the state it is already in. Proteger defends it from an attacker; preservar defends it from time." },
        { id: "pt-u101l2-aescassez", type: "vocab", front: "a escassez", reading: "aescassez", meaning: "scarcity", example: { jp: "A escassez de água não é um problema do futuro no sul, pois já muda a agricultura da região.", en: "Water scarcity is not a future problem in the south, since it is already changing the region's farming." }, drill: { jp: "A escassez de água muda tudo", en: "Water scarcity changes everything" }, accept: ["scarcity", "the scarcity", "shortage", "a shortage"], hint: "ish-ka-SESH. The noun of escasso. Watch the ending: -ez turns an adjective into the state of being it, the same machinery as rápido to rapidez." },
        { id: "pt-u101l2-degradar", type: "vocab", front: "degradar", reading: "degradar", meaning: "to degrade", example: { jp: "A obra degrada o terreno devagar, enquanto uma fábrica o estraga de uma vez.", en: "The building work degrades the land slowly, whereas a factory ruins it all at once." }, drill: { jp: "A obra vai degradar o terreno", en: "The building work is going to degrade the land" }, accept: ["to degrade", "degrade", "to spoil gradually", "to erode"], hint: "de-gra-DAR. Damage by stages, never in one blow — that gradualness is the whole difference from estragar, which happens at a moment you can name." },
        { id: "pt-u101l2-oaterro", type: "vocab", front: "o aterro", reading: "oaterro", meaning: "landfill", example: { jp: "O aterro da cidade está cheio, e no entanto a câmara continua a recusar a reciclagem.", en: "The city's landfill is full, and yet the council keeps refusing recycling." }, drill: { jp: "O aterro da cidade está cheio", en: "The city's landfill is full" }, accept: ["landfill", "the landfill", "landfill site", "tip"], hint: "a-TE-rru. Where os resíduos end up when nothing is done with them. Also the ordinary engineering sense: an aterro is any bank of earth built up to level ground." },
      ],
    },
    {
      id: "pt-u101l3",
      unit: 101,
      lesson: 3,
      title: "Decidir à escala global",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read and argue about an international agreement in Portuguese — say who went, what was signed, and whether it actually obliges anyone.",
      items: [
        { id: "pt-u101l3-global", type: "vocab", front: "global", reading: "global", meaning: "worldwide", example: { jp: "O problema é global, mas cada governo quer resolver apenas a parte dele.", en: "The problem is global, but each government wants to solve only its own part of it." }, drill: { jp: "Este problema é claramente global", en: "This problem is clearly global" }, accept: ["worldwide", "global", "overall", "across the world"], hint: "glo-BAL. Two senses and both are live: worldwide, and taken as a whole — uma visão global do processo is an overview, not a world tour." },
        { id: "pt-u101l3-acimeira", type: "vocab", front: "a cimeira", reading: "acimeira", meaning: "summit", example: { jp: "A cimeira acaba sem acordo, mas a declaração final fala de um grande passo.", en: "The summit ends without an agreement, but the closing declaration talks about a great step." }, drill: { jp: "A cimeira acaba sem acordo nenhum", en: "The summit ends without any agreement" }, accept: ["summit", "the summit", "summit meeting", "high-level meeting"], hint: "si-MAY-ra, from cima (the top). ⚠ pt-PT uses cimeira where Brazil says cúpula — and this corpus teaches a cúpula at u100 for the top of an organisation, which is the Brazilian word doing its OTHER job. For a meeting of heads of state in Portugal, it is a cimeira." },
        { id: "pt-u101l3-aconvencao", type: "vocab", front: "a convenção", reading: "aconvencao", meaning: "convention (treaty)", example: { jp: "O texto da convenção é simples, mas cada país o interpreta como quer.", en: "The convention text is simple, but each country interprets it as it likes." }, drill: { jp: "A convenção protege as espécies do rio", en: "The convention protects the river species" }, accept: ["convention", "the convention", "treaty", "international convention"], hint: "kon-ven-SOWN. A treaty many states sign at once — narrower than o tratado, which can be between two. The other English sense, what people conventionally do, is also carried by this word." },
        { id: "pt-u101l3-vinculativo", type: "vocab", front: "vinculativo", reading: "vinculativo", meaning: "binding", example: { jp: "O acordo não é vinculativo, por conseguinte nenhum país paga nada se falhar.", en: "The agreement is not binding, and consequently no country pays anything if it fails." }, drill: { jp: "Este acordo não é vinculativo", en: "This agreement is not binding" }, accept: ["binding", "legally binding", "obligatory in law"], hint: "vin-ku-la-TEE-vu, from o vínculo, the tie. This is the single word that decides whether an international text matters: não vinculativo means everyone may ignore it and nothing follows." },
        { id: "pt-u101l3-oprotocolo", type: "vocab", front: "o protocolo", reading: "oprotocolo", meaning: "protocol", example: { jp: "O protocolo acrescenta regras à convenção, mas não altera nada do resto do acordo.", en: "The protocol adds rules to the convention, but alters nothing in the rest of the agreement." }, drill: { jp: "O protocolo acrescenta regras novas hoje", en: "The protocol adds new rules today" }, accept: ["protocol", "the protocol", "supplementary agreement"], hint: "pro-to-KO-lu. In law, the text that is bolted onto an existing convention. In a hospital or a laboratory, the fixed procedure — same word, and Portuguese does not distinguish them." },
        { id: "pt-u101l3-adelegacao", type: "vocab", front: "a delegação", reading: "adelegacao", meaning: "delegation", example: { jp: "A delegação portuguesa chega tarde, e por isso não entra no debate mais importante.", en: "The Portuguese delegation arrives late, and so does not enter the most important debate." }, drill: { jp: "A delegação portuguesa chega muito tarde", en: "The Portuguese delegation arrives very late" }, accept: ["delegation", "the delegation", "the group sent"], hint: "de-le-ga-SOWN, from delegar. The people sent to speak for a country — and also the act of handing a task down, which is the sense the verb carries." },
      ],
    },
    {
      id: "pt-u101l4",
      unit: 101,
      lesson: 4,
      title: "O que já não volta atrás",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Say in Portuguese that a change cannot be undone, and describe what is built to survive it anyway.",
      items: [
        { id: "pt-u101l4-irreversivel", type: "vocab", front: "irreversível", reading: "irreversivel", meaning: "irreversible", example: { jp: "A perda é irreversível, mas o relatório fala apenas de uma alteração.", en: "The loss is irreversible, but the report talks only about a change." }, drill: { jp: "A perda de espécies é irreversível", en: "The loss of species is irreversible" }, accept: ["irreversible", "cannot be undone", "permanent"], hint: "i-rre-ver-SEE-vel. The prefix ir- (not) plus reverter plus -ível. The prefix doubles the r in writing and the sound is the strong Portuguese rr, as in carro." },
        { id: "pt-u101l4-atransicao", type: "vocab", front: "a transição", reading: "atransicao", meaning: "transition", example: { jp: "A transição vai custar muito dinheiro agora, mas custa ainda mais se ficar para depois.", en: "The transition is going to cost a lot of money now, but it costs even more if it is left for later." }, drill: { jp: "A transição vai custar muito dinheiro", en: "The transition is going to cost a lot of money" }, accept: ["transition", "the transition", "changeover", "shift"], hint: "tran-zi-SOWN. The passage from one state to another, with a beginning and an end — a alteração is the change itself, a transição is the crossing." },
        { id: "pt-u101l4-aresiliencia", type: "vocab", front: "a resiliência", reading: "aresiliencia", meaning: "resilience", example: { jp: "A resiliência de uma cidade não se conhece num ano bom, porque apenas a seca diz o que ela aguenta.", en: "A city's resilience is not known in a good year, because only drought says what it can take." }, drill: { jp: "A resiliência desta cidade é enorme", en: "This city's resilience is enormous" }, accept: ["resilience", "the resilience", "capacity to withstand"], hint: "re-zi-li-EN-sya. The capacity to take a blow and come back — of a material, a city or a person. Not a mere synonym of força: resiliência is about RECOVERY, not about resisting in the first place." },
        { id: "pt-u101l4-acatastrofe", type: "vocab", front: "a catástrofe", reading: "acatastrofe", meaning: "catastrophe", example: { jp: "A inundação é uma catástrofe para a região, mas o alerta chega sempre tarde.", en: "The flood is a catastrophe for the region, but the warning always arrives late." }, drill: { jp: "A catástrofe muda tudo na região", en: "The catastrophe changes everything in the region" }, accept: ["catastrophe", "a catastrophe", "disaster", "a disaster"], hint: "ka-TASH-tro-fe, stressed on the second syllable — not on the last, as an English speaker expects. Stronger than o desastre: a catástrofe is the scale at which recovery itself is in doubt." },
        { id: "pt-u101l4-oecossistema", type: "vocab", front: "o ecossistema", reading: "oecossistema", meaning: "ecosystem", example: { jp: "O ecossistema do rio recupera depois da lei, mas leva vinte anos a mudar.", en: "The river's ecosystem recovers after the law, but it takes twenty years to change." }, drill: { jp: "O ecossistema do rio já recupera", en: "The river's ecosystem is recovering" }, accept: ["ecosystem", "the ecosystem"], hint: "e-ko-sish-TE-ma. Note the double s: Portuguese writes ecossistema in one word, because a single s between vowels would be read as a z." },
        { id: "pt-u101l4-abiodiversidade", type: "vocab", front: "a biodiversidade", reading: "abiodiversidade", meaning: "biodiversity", example: { jp: "A biodiversidade do terreno é grande, e no entanto a câmara aprova o projeto sem estudo nenhum.", en: "The land's biodiversity is great, and yet the council approves the project without any study at all." }, drill: { jp: "A biodiversidade do terreno é grande", en: "The land's biodiversity is great" }, accept: ["biodiversity", "the biodiversity", "variety of species"], hint: "bi-o-di-ver-si-DA-de. Built on a diversidade, which this course teaches as a social word; here the same noun counts species instead of people." },
      ],
    },
  ],
};
