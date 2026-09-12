// PT Unit 87 — A manutenção e o conserto (slot: coverage-b1-14) — B1
// WHEN THINGS BREAK, AND WHO FIXES THEM. The corpus can already say a machine
// works (funcionar u33), that something lasts (durar u28) and that you cleaned
// it (limpar u15) — but it has no word for a breakdown, a workshop, a tool, or
// for putting a thing back together. This unit is the whole repair cycle:
// breaking, diagnosing, the tools, and the four verbs of fixing.
//
// SLOT BOUNDARIES:
//   a peça is SPENT at u35 (crew-lead ruling) — used in examples, never carded.
//   u42 Os materiais e os objetos owns o fio, o botão, o vidro, a madeira; u15
//   a chave; u27 trocar; u18 gastar; u33 funcionar; u28 durar. None re-taught.
//   reparar belongs to u78 as "to notice", its everyday sense — so this unit
//   takes arranjar and consertar for the repair sense rather than splitting one
//   verb across two slots. The hint at u78 carries the link.
//   u81 A fiabilidade e o desgaste (my u81) owns whether a thing is fit to last;
//   this unit owns the event of it failing and the act of fixing it.
//
// One lexeme per family again: avariar without a avaria, consertar without o
// conserto, manter without a manutenção (the unit title uses both nouns, which
// costs nothing — a title is not a card).
// montar/desmontar ARE both carded: the des- pair is a productive prefix the
// corpus already teaches at u18 (ligar/desligar), so the second one is genuinely
// new learning rather than a second mastery track on the same word.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT87 = {
  id: "pt-u87",
  lang: "pt",
  title: "A manutenção e o conserto",
  order: 87,
  stage: "b1",
  lessons: [
    {
      id: "pt-u87l1",
      unit: 87,
      lesson: 1,
      title: "Quando avaria",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say that something has broken in Portuguese — the car, the flowers, the drain — and what state it is in now.",
      items: [
        { id: "pt-u87l1-avariar", type: "vocab", front: "avariar", reading: "avariar", meaning: "to break down", example: { jp: "O carro avariou na estrada e ninguém chegou ao trabalho.", en: "The car broke down on the road and nobody got to work." }, drill: { jp: "O carro vai avariar na estrada", en: "The car is going to break down on the road" }, accept: ["break down", "to break down", "to break", "to fail", "to go wrong"], hint: "a-va-ri-AR. Machines avariam — a car, a lift, a washing machine. People and food estragam-se instead. Avariado on a lift door is the sign you will meet first: out of order." },
        { id: "pt-u87l1-estragar", type: "vocab", front: "estragar", reading: "estragar", meaning: "to ruin", example: { jp: "A chuva estragou as flores do jardim e o cão ficou dentro de casa.", en: "The rain ruined the garden flowers and the dog stayed inside the house." }, drill: { jp: "A chuva vai estragar as flores", en: "The rain is going to ruin the flowers" }, accept: ["ruin", "to ruin", "to spoil", "spoil", "to damage", "to wreck"], hint: "esh-tra-GAR. Food goes off, plans fall apart, a child is spoiled — estragar covers all three. Reflexively, o leite estragou-se is the milk has gone bad." },
        { id: "pt-u87l1-riscar", type: "vocab", front: "riscar", reading: "riscar", meaning: "to scratch", example: { jp: "O cão riscou a porta da cozinha e o pai não gostou.", en: "The dog scratched the kitchen door and my father wasn't happy." }, drill: { jp: "O cão vai riscar a porta", en: "The dog is going to scratch the door" }, accept: ["scratch", "to scratch", "to scrape", "to cross out", "to score"], hint: "rrish-KAR, from um risco, a line or a scratch. It also means to cross out — riscar da lista. And um risco on its own is a risk, so the noun leads two lives." },
        { id: "pt-u87l1-entupir", type: "vocab", front: "entupir", reading: "entupir", meaning: "to block", example: { jp: "O buraco da cozinha entupiu com o óleo velho.", en: "The kitchen drain got blocked with old oil." }, drill: { jp: "O buraco da cozinha vai entupir", en: "The kitchen drain is going to block up" }, accept: ["block", "to block", "to clog", "to block up", "to get blocked"], hint: "en-tu-PEER. What a drain, a nose or a road does when nothing gets through. O cano entupiu is the sentence that calls a plumber; estou entupido is what you say with a cold." },
        { id: "pt-u87l1-oburaco", type: "vocab", front: "o buraco", reading: "oburaco", meaning: "hole", example: { jp: "O buraco na estrada é grande e a chuva fica ali.", en: "The hole in the road is big and the rain sits in it." }, drill: { jp: "O buraco na estrada é grande", en: "The hole in the road is big" }, accept: ["the hole", "hole", "gap", "the gap", "pothole"], hint: "bu-RA-ku. A hole in anything — a road, a sock, a budget. Um buraco negro is a black hole, and estar num buraco is to be in a bad place." },
      ],
    },
    {
      id: "pt-u87l2",
      unit: 87,
      lesson: 2,
      title: "A oficina",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Get something looked at in Portuguese — name the workshop, the mechanic, the technician, the machine and its guarantee.",
      items: [
        { id: "pt-u87l2-aoficina", type: "vocab", front: "a oficina", reading: "aoficina", meaning: "workshop", example: { jp: "A oficina da cidade arranja carros e máquinas velhas.", en: "The town workshop repairs cars and old machines." }, drill: { jp: "A oficina da cidade arranja carros", en: "The town workshop repairs cars" }, accept: ["the workshop", "workshop", "garage", "the garage", "repair shop"], hint: "o-fi-SEE-na. Where things get mended — cars, shoes, furniture. Careful with the English false friend: an office is um escritório, never an oficina." },
        { id: "pt-u87l2-omecanico", type: "vocab", front: "o mecânico", reading: "omecanico", meaning: "mechanic", example: { jp: "O mecânico da oficina arranjou o motor do carro numa manhã.", en: "The workshop mechanic fixed the car engine in one morning." }, drill: { jp: "O mecânico arranjou o motor do carro", en: "The mechanic fixed the car engine" }, accept: ["the mechanic", "mechanic", "the engineer"], hint: "me-KA-ni-ku, stress on the second syllable, which the accent marks. The person; mecânico as an adjective is mechanical, and a mecânica is the field." },
        { id: "pt-u87l2-otecnico", type: "vocab", front: "o técnico", reading: "otecnico", meaning: "technician", example: { jp: "O técnico da empresa chegou hoje para ver a internet.", en: "The company technician arrived today to look at the internet." }, drill: { jp: "O técnico da empresa chegou hoje", en: "The company technician arrived today" }, accept: ["the technician", "technician", "the engineer", "specialist"], hint: "TEK-ni-ku. The person who comes to your house for the boiler or the router. In football it is also the manager — o técnico da equipa — which surprises learners at first." },
        { id: "pt-u87l2-amaquina", type: "vocab", front: "a máquina", reading: "amaquina", meaning: "machine", example: { jp: "A máquina da cozinha já é velha mas ainda funciona bem.", en: "The kitchen machine is old now but still works well." }, drill: { jp: "A máquina da cozinha ainda funciona", en: "The kitchen machine still works" }, accept: ["the machine", "machine", "appliance", "the appliance"], hint: "MA-ki-na. In a Portuguese house a máquina on its own usually means the washing machine — máquina de lavar. Máquina fotográfica is a camera, and à máquina means done by machine." },
        { id: "pt-u87l2-omotor", type: "vocab", front: "o motor", reading: "omotor", meaning: "engine", example: { jp: "O motor do carro faz muito barulho de manhã.", en: "The car engine makes a lot of noise in the morning." }, drill: { jp: "O motor do carro faz barulho", en: "The car engine makes noise" }, accept: ["the engine", "engine", "motor", "the motor"], hint: "mu-TOR. Engine and motor at once. Um motor de busca is a search engine, and o motor da economia is the same metaphor Portuguese and English share." },
        { id: "pt-u87l2-agarantia", type: "vocab", front: "a garantia", reading: "agarantia", meaning: "guarantee", example: { jp: "A garantia da televisão é de dois anos e ainda funciona.", en: "The television's guarantee is for two years and it still works." }, drill: { jp: "A garantia da televisão é boa", en: "The television's guarantee is good" }, accept: ["the guarantee", "guarantee", "warranty", "the warranty"], hint: "ga-ran-TEE-a. Ainda está na garantia is still under warranty — the sentence that decides who pays. Garantir is the verb, to guarantee or to assure." },
      ],
    },
    {
      id: "pt-u87l3",
      unit: 87,
      lesson: 3,
      title: "As ferramentas",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name what is in a Portuguese toolbox — the tool, the hammer, the screw, the nail, the paint, the battery.",
      items: [
        { id: "pt-u87l3-aferramenta", type: "vocab", front: "a ferramenta", reading: "aferramenta", meaning: "tool", example: { jp: "A ferramenta do pai está na caixa ao fundo da escada.", en: "My father's tool is in the box at the bottom of the stairs." }, drill: { jp: "A ferramenta do pai está ali", en: "My father's tool is there" }, accept: ["the tool", "tool", "implement", "instrument"], hint: "fe-rra-MEN-ta, from ferro, iron. Also used of software and methods, exactly as in English: uma ferramenta de trabalho. As ferramentas is the toolkit." },
        { id: "pt-u87l3-omartelo", type: "vocab", front: "o martelo", reading: "omartelo", meaning: "hammer", example: { jp: "O martelo do avô é velho mas é bom.", en: "My grandfather's hammer is old but it's a good one." }, drill: { jp: "O martelo do avô é velho", en: "My grandfather's hammer is old" }, accept: ["the hammer", "hammer", "mallet"], hint: "mar-TE-lu. Martelar is to hammer, and it stretches to hammering a point home. A marteladas means by brute force, which is not a compliment about the work." },
        { id: "pt-u87l3-oparafuso", type: "vocab", front: "o parafuso", reading: "oparafuso", meaning: "screw", example: { jp: "O parafuso da cadeira caiu no fundo da caixa.", en: "The chair screw fell to the bottom of the box." }, drill: { jp: "O parafuso da cadeira caiu ali", en: "The chair screw fell there" }, accept: ["the screw", "screw", "bolt", "the bolt"], hint: "pa-ra-FOO-zu. Aparafusar is to screw something in; a chave de fendas is the screwdriver. Faltar um parafuso, to be missing a screw, means the same about a person as in English." },
        { id: "pt-u87l3-oprego", type: "vocab", front: "o prego", reading: "oprego", meaning: "nail", example: { jp: "O prego da madeira saiu com o martelo do pai.", en: "The nail came out of the wood with my father's hammer." }, drill: { jp: "O prego da madeira saiu logo", en: "The nail came out of the wood straight away" }, accept: ["the nail", "nail", "tack", "the tack"], hint: "PRE-gu. The metal nail — a fingernail is a unha. And on a Portuguese menu um prego is a steak sandwich, which is one of the better surprises in this language." },
        { id: "pt-u87l3-atinta", type: "vocab", front: "a tinta", reading: "atinta", meaning: "paint", example: { jp: "A tinta branca da porta já é velha e o pai quer pintar.", en: "The white paint on the door is old now and my father wants to paint." }, drill: { jp: "A tinta branca da porta é velha", en: "The white paint on the door is old" }, accept: ["the paint", "paint", "ink", "the ink", "dye"], hint: "TIN-ta. Paint and ink both — a tinta da caneta is the pen's ink. Pintar, which you met in Unit 35, is the verb for putting it on." },
        { id: "pt-u87l3-apilha", type: "vocab", front: "a pilha", reading: "apilha", meaning: "battery", example: { jp: "A pilha do telemóvel do avô não dura nada.", en: "The battery in my grandfather's mobile doesn't last at all." }, drill: { jp: "A pilha do telemóvel não dura", en: "The mobile's battery doesn't last" }, accept: ["the battery", "battery", "cell", "the pile", "pile"], hint: "PEE-lya, lh. A small battery — the rechargeable one in a car is a bateria. It also means a pile of things, uma pilha de livros, and estar uma pilha de nervos is to be a bundle of nerves." },
      ],
    },
    {
      id: "pt-u87l4",
      unit: 87,
      lesson: 4,
      title: "Arranjar e manter",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Get it working again in Portuguese — fix it, replace the part, put it together, take it apart, keep it running.",
      items: [
        { id: "pt-u87l4-arranjar", type: "vocab", front: "arranjar", reading: "arranjar", meaning: "to fix", example: { jp: "O pai arranjou a janela do quarto com a ferramenta do avô.", en: "My father fixed the bedroom window with my grandfather's tool." }, drill: { jp: "Vou arranjar a janela do quarto", en: "I'm going to fix the bedroom window" }, accept: ["fix", "to fix", "to repair", "repair", "to get hold of", "to arrange"], hint: "a-rran-ZHAR. The everyday word for fixing — and, just as commonly, for getting hold of something: arranjei um bilhete, I got myself a ticket. Arranjar-se is to manage." },
        { id: "pt-u87l4-consertar", type: "vocab", front: "consertar", reading: "consertar", meaning: "to repair", example: { jp: "O mecânico consertou o motor e o carro funciona bem.", en: "The mechanic repaired the engine and the car works well." }, drill: { jp: "Vou consertar o motor do carro", en: "I'm going to repair the car engine" }, accept: ["repair", "to repair", "to mend", "mend", "to fix"], hint: "kon-ser-TAR. The more technical twin of arranjar, for shoes, watches and engines. Watch the spelling against concertar, to arrange together — and um concerto, with a c, is the music." },
        { id: "pt-u87l4-substituir", type: "vocab", front: "substituir", reading: "substituir", meaning: "to replace", example: { jp: "O técnico substituiu a pilha da máquina e tudo ficou bem.", en: "The technician replaced the machine's battery and everything was fine." }, drill: { jp: "Vou substituir a pilha da máquina", en: "I'm going to replace the machine's battery" }, accept: ["replace", "to replace", "to substitute", "to stand in for", "to swap"], hint: "sub-sti-tu-EER: substituo, substituis, substitui. A part, and also a person — o professor foi substituído. Um substituto is the stand-in, on a pitch or in a classroom." },
        { id: "pt-u87l4-montar", type: "vocab", front: "montar", reading: "montar", meaning: "to assemble", example: { jp: "A família montou a mesa nova na cozinha em duas horas.", en: "The family assembled the new table in the kitchen in two hours." }, drill: { jp: "Vou montar a mesa na cozinha", en: "I'm going to assemble the table in the kitchen" }, accept: ["assemble", "to assemble", "to put together", "to set up", "to ride"], hint: "mon-TAR. Putting a thing together from its parts — furniture, a business, a show. It also means to ride a horse, montar a cavalo, which is the older sense." },
        { id: "pt-u87l4-desmontar", type: "vocab", front: "desmontar", reading: "desmontar", meaning: "to take apart", example: { jp: "O mecânico desmontou o motor todo e depois montou tudo outra vez.", en: "The mechanic took the whole engine apart and then put it all back together." }, drill: { jp: "Vou desmontar o motor do carro", en: "I'm going to take the car engine apart" }, accept: ["take apart", "to take apart", "to dismantle", "to disassemble", "to strip down"], hint: "desh-mon-TAR. The same des- that turned ligar into desligar back in Unit 18, doing the same job here: montar builds, desmontar undoes. It also means to debunk an argument." },
      ],
    },
  ],
};
