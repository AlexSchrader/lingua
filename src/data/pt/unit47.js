// PT Unit 47 — As emergências e a segurança (slot: coverage-a2-8) — A2
// What to say when something goes wrong. A1 gave o hospital, a farmácia and
// o polícia as nouns; nothing yet lets a learner warn someone, report a theft,
// or shout for help.
//
// Sited away from block 1's u25, which owns the MEDICAL emergency (a urgência,
// a ambulância, o enfermeiro, a ferida, o sangue). None of those is carded here.
// This unit is danger, fire, crime and rescue — the civil side, not the clinical
// one — and it deliberately stops at the hospital door.
//
// pt-PT markers carded here: a esquadra (the PSP police station; Brazil says
// a delegacia) and o fumo, where Portugal uses one word for smoke and tobacco
// while Brazil splits off a fumaça.
// arder carries the European progressive — está A ARDER, never "está ardendo" —
// and roubar and escapar both show enclisis (roubaram-me, escapou-me).
// a testemunha and a vítima are the unit's grammar pair: both stay FEMININE
// whoever they describe, which is a small closed class worth meeting twice.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT47 = {
  id: "pt-u47",
  lang: "pt",
  title: "As emergências e a segurança",
  order: 47,
  stage: "a2",
  lessons: [
    {
      id: "pt-u47l1",
      unit: 47,
      lesson: 1,
      title: "O perigo",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Warn someone about a danger in Portuguese and say whether a place is safe.",
      items: [
        { id: "pt-u47l1-operigo", type: "vocab", front: "o perigo", reading: "operigo", meaning: "danger", example: { jp: "O perigo do mar é a corrente e a onda da praia é enorme.", en: "The danger of the sea is the current and the beach's wave is enormous." }, drill: { jp: "O perigo do mar é enorme", en: "The danger of the sea is enormous" }, accept: ["the danger", "peril", "hazard"], hint: "pe-REE-gu. The road sign reads PERIGO in red capitals. Correr perigo is to be in danger, and the adjective built on it, perigoso, is the next card." },
        { id: "pt-u47l1-perigoso", type: "vocab", front: "perigoso", reading: "perigoso", meaning: "dangerous", example: { jp: "O mar é perigoso no inverno e nadar ali não é bom.", en: "The sea is dangerous in winter and swimming there isn't good." }, drill: { jp: "O mar é perigoso no inverno", en: "The sea is dangerous in winter" }, accept: ["risky", "hazardous", "unsafe"], hint: "pe-ri-GO-zu, s saying z; agrees perigoso/perigosa. That -oso ending builds adjectives from nouns right across Portuguese — o perigo gives perigoso the same way o sabor gives saboroso." },
        { id: "pt-u47l1-orisco", type: "vocab", front: "o risco", reading: "orisco", meaning: "risk", example: { jp: "O risco do trabalho é pequeno e a segurança da empresa é boa.", en: "The job's risk is small and the company's safety is good." }, drill: { jp: "O risco do trabalho é pequeno", en: "The job's risk is small" }, accept: ["the risk", "danger", "chance", "scratch"], hint: "RRISH-ku, strong r. A risk — and also a scratch or a pencil line, from riscar, to cross out. Correr o risco de is to run the risk of something." },
        { id: "pt-u47l1-oalarme", type: "vocab", front: "o alarme", reading: "oalarme", meaning: "alarm", example: { jp: "O alarme do prédio é forte e o perigo é enorme.", en: "The building's alarm is loud and the danger is enormous." }, drill: { jp: "O alarme do prédio é forte", en: "The building's alarm is loud" }, accept: ["the alarm", "alert", "siren"], hint: "a-LAR-me — the device, and the state of alarm. Dar o alarme is to raise it. The one that wakes you in the morning is a different machine with its own word, o despertador." },
        { id: "pt-u47l1-seguro", type: "vocab", front: "seguro", reading: "seguro", meaning: "safe", example: { jp: "O prédio é seguro e a porta da rua é muito forte.", en: "The building is safe and the street door is very strong." }, drill: { jp: "O prédio é seguro e forte", en: "The building is safe and strong" }, accept: ["secure", "certain", "sure", "insurance"], hint: "se-GOO-ru. Safe — and as a NOUN, insurance: o seguro do carro, which Portugal requires by law. Estar seguro also means to be certain, so context decides between safe and sure." },
        { id: "pt-u47l1-avisar", type: "vocab", front: "avisar", reading: "avisar", meaning: "to warn", example: { jp: "Vou avisar o chefe do perigo no escritório da empresa.", en: "I'm going to warn the boss about the danger in the company's office." }, drill: { jp: "Avisar o chefe do perigo", en: "To warn the boss about the danger" }, accept: ["warn", "to let know", "to notify", "to tell"], hint: "a-vi-ZAR: aviso, avisas, avisa. To warn, and also just to let someone know — avisa-me, let me know, with the pronoun hooked on the end. The noun o aviso is a notice." },
      ],
    },
    {
      id: "pt-u47l2",
      unit: 47,
      lesson: 2,
      title: "O fogo",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Report a fire in Portuguese, say what is burning, and name who comes to fight it.",
      items: [
        { id: "pt-u47l2-oincendio", type: "vocab", front: "o incêndio", reading: "oincendio", meaning: "blaze", example: { jp: "O incêndio foi enorme no verão e os bombeiros do Porto trabalharam muito.", en: "The blaze was enormous in the summer and Porto's firefighters worked hard." }, drill: { jp: "O incêndio do verão foi enorme", en: "The summer blaze was enormous" }, accept: ["blaze", "wildfire", "the blaze", "conflagration"], hint: "in-SEN-diu — fire in the destructive sense. Portugal's summer fires are a national emergency every single year, and os incêndios florestais is the phrase the news uses for them." },
        { id: "pt-u47l2-ofogo", type: "vocab", front: "o fogo", reading: "ofogo", meaning: "fire", example: { jp: "O fogo da cozinha é pequeno e o incêndio da serra é enorme.", en: "The kitchen fire is small and the mountain blaze is enormous." }, drill: { jp: "O fogo da cozinha é pequeno", en: "The kitchen fire is small" }, accept: ["the fire", "flame"], hint: "FO-gu — fire the element and the flame. Um fogo can be controlled where um incêndio never is. On its own, Fogo! is also a very common Portuguese exclamation, somewhere near \"blimey\"." },
        { id: "pt-u47l2-ofumo", type: "vocab", front: "o fumo", reading: "ofumo", meaning: "smoke", example: { jp: "O fumo do incêndio é escuro e enorme, e a serra está a arder.", en: "The blaze's smoke is dark and enormous, and the mountains are burning." }, drill: { jp: "O fumo do incêndio é escuro", en: "The blaze's smoke is dark" }, accept: ["the smoke", "fumes", "tobacco"], hint: "FOO-mu. Portugal uses ONE word for smoke in the air and for tobacco; Brazil splits them, keeping a fumaça for smoke. Fumar is to smoke a cigarette, and the sign on the door reads não fumadores." },
        { id: "pt-u47l2-obombeiro", type: "vocab", front: "o bombeiro", reading: "obombeiro", meaning: "firefighter", example: { jp: "O bombeiro de Braga é forte e o trabalho é muito perigoso.", en: "The Braga firefighter is strong and the work is very dangerous." }, drill: { jp: "O bombeiro de Braga é forte", en: "The Braga firefighter is strong" }, accept: ["the firefighter", "fireman", "fire fighter"], hint: "bom-BAY-ru, with the -eiro ending that turns a thing into the person who works it — here from a bomba, the pump. Portugal's are largely os Bombeiros Voluntários, and every town has a station with a siren on the roof." },
        { id: "pt-u47l2-queimar", type: "vocab", front: "queimar", reading: "queimar", meaning: "to burn (something)", example: { jp: "O fogo vai queimar a madeira e o fumo é muito escuro.", en: "The fire is going to burn the wood and the smoke is very dark." }, drill: { jp: "Queimar a madeira é perigoso", en: "Burning the wood is dangerous" }, accept: ["burn", "to scorch", "to set fire to", "scorch"], hint: "kay-MAR: queimo, queimas, queima. To burn SOMETHING ELSE — where arder, next, is the thing burning of its own accord. Queimar-se is to get burnt, uma queimadura is the burn, and Portugal's controlled burns are as queimadas." },
        { id: "pt-u47l2-arder", type: "vocab", front: "arder", reading: "arder", meaning: "to burn", example: { jp: "A casa está a arder e o fumo é escuro.", en: "The house is burning and the smoke is dark." }, drill: { jp: "A casa está a arder", en: "The house is burning" }, accept: ["burn", "to be on fire", "to sting"], hint: "ar-DER: ardo, ardes, arde. This is the thing ON FIRE burning — a casa arde. To burn something else is queimar. And note the European progressive here: está A ARDER, never \"está ardendo\"." },
      ],
    },
    {
      id: "pt-u47l3",
      unit: 47,
      lesson: 3,
      title: "O crime e o roubo",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Report a theft in Portuguese and name the place you go to report it.",
      items: [
        { id: "pt-u47l3-oroubo", type: "vocab", front: "o roubo", reading: "oroubo", meaning: "theft", example: { jp: "O roubo foi na rua de Ana e a polícia chegou muito rápido.", en: "The theft was on Ana's street and the police arrived very quickly." }, drill: { jp: "O roubo foi na rua de Ana", en: "The theft was on Ana's street" }, accept: ["the theft", "robbery", "burglary", "stealing"], hint: "RROH-bu, strong r. A theft. Um assalto is the more violent word and is what a bank job is called. The verb roubar comes two cards along." },
        { id: "pt-u47l3-oladrao", type: "vocab", front: "o ladrão", reading: "oladrao", meaning: "thief", example: { jp: "O ladrão foi rápido e a polícia chegou tarde ao prédio.", en: "The thief was fast and the police arrived late at the building." }, drill: { jp: "O ladrão foi muito rápido", en: "The thief was very fast" }, accept: ["the thief", "robber", "burglar"], hint: "la-DRAWNG, -ão nasal; plural os ladrões, feminine a ladra. Ladrão is also the overflow pipe on a water tank — Portuguese plumbing humour, and a good way to remember the word." },
        { id: "pt-u47l3-roubar", type: "vocab", front: "roubar", reading: "roubar", meaning: "to steal", example: { jp: "Roubar é um crime e o tribunal de Lisboa é claro.", en: "Stealing is a crime and the Lisbon court is clear about it." }, drill: { jp: "Roubar é um crime", en: "Stealing is a crime" }, accept: ["steal", "to rob", "rob"], hint: "rroh-BAR: roubo, roubas, rouba. One verb where English splits steal and rob. To report it you say roubaram-me o telemóvel — \"they stole from me the phone\" — with the pronoun hooked on the end." },
        { id: "pt-u47l3-aesquadra", type: "vocab", front: "a esquadra", reading: "aesquadra", meaning: "police station", example: { jp: "A esquadra da cidade é ali, à direita da praça.", en: "The city's police station is there, to the right of the square." }, drill: { jp: "A esquadra da cidade é ali", en: "The city's police station is there" }, accept: ["the police station", "station", "precinct"], hint: "PORTUGAL SAYS ESQUADRA — esh-KWA-dra, the PSP station in a town. Brazil says a delegacia. Outside the towns the GNR calls its own o posto. Esquadra also means a naval fleet, which is where the word started." },
        { id: "pt-u47l3-atestemunha", type: "vocab", front: "a testemunha", reading: "atestemunha", meaning: "witness", example: { jp: "A testemunha do roubo é a mulher da loja de roupa.", en: "The witness to the theft is the woman from the clothes shop." }, drill: { jp: "A testemunha do roubo é importante", en: "The witness to the theft is important" }, accept: ["the witness", "bystander"], hint: "tesh-te-MOO-nya, with nh. It does NOT change for a man: o João é a testemunha. Portuguese keeps a small set of nouns permanently feminine whoever they describe, and a vítima in Lesson 4 is another." },
        { id: "pt-u47l3-denunciar", type: "vocab", front: "denunciar", reading: "denunciar", meaning: "to report", example: { jp: "Vou denunciar o roubo na esquadra da cidade hoje.", en: "I'm going to report the theft at the city's police station today." }, drill: { jp: "Denunciar o roubo na esquadra", en: "To report the theft at the police station" }, accept: ["report", "to denounce", "to report a crime"], hint: "de-nun-si-AR. The formal act of reporting a crime to the authorities. The complaint you physically file is uma queixa, and fazer queixa is what people actually say. Denunciar also means to denounce a person, so it carries weight." },
      ],
    },
    {
      id: "pt-u47l4",
      unit: 47,
      lesson: 4,
      title: "Socorro",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Call for help in Portuguese, and say what happened and who was hurt.",
      items: [
        { id: "pt-u47l4-socorro", type: "vocab", front: "socorro", reading: "socorro", meaning: "help", example: { jp: "Socorro! O homem está na água e o mar é muito perigoso.", en: "Help! The man is in the water and the sea is very dangerous." }, drill: { jp: "O socorro chegou muito rápido", en: "Help arrived very quickly" }, accept: ["help!", "rescue", "aid", "assistance"], hint: "su-KO-rru, strong rr. This is the SHOUT — Socorro! is Portugal's \"Help!\". As a noun it is aid or rescue, and os primeiros socorros is first aid. The emergency number here is 112." },
        { id: "pt-u47l4-salvar", type: "vocab", front: "salvar", reading: "salvar", meaning: "to save", example: { jp: "O bombeiro vai salvar a criança do incêndio da casa.", en: "The firefighter is going to save the child from the house fire." }, drill: { jp: "Salvar a criança do incêndio", en: "To save the child from the fire" }, accept: ["save", "to rescue", "rescue"], hint: "sal-VAR: salvo, salvas, salva. To rescue — and to save a file, which Portuguese took straight from English. As an adjective salvo means safe: são e salvo, safe and sound." },
        { id: "pt-u47l4-oacidente", type: "vocab", front: "o acidente", reading: "oacidente", meaning: "accident", example: { jp: "O acidente foi na estrada de Braga e o hospital está cheio.", en: "The accident was on the Braga road and the hospital is full." }, drill: { jp: "O acidente foi na estrada de Braga", en: "The accident was on the Braga road" }, accept: ["the accident", "crash", "collision"], hint: "a-si-DEN-te. Por acidente means by chance. Portuguese does not stretch it to the light English sense of a mishap — for that you would just say um problema." },
        { id: "pt-u47l4-avitima", type: "vocab", front: "a vítima", reading: "avitima", meaning: "victim", example: { jp: "A vítima do acidente está no hospital e a família também.", en: "The accident's victim is in hospital and so is the family." }, drill: { jp: "A vítima do acidente está no hospital", en: "The accident's victim is in hospital" }, accept: ["the victim", "casualty"], hint: "VEE-ti-ma, stress on the first syllable. Like a testemunha in Lesson 3, it stays FEMININE whoever it describes: o homem foi a vítima. Portuguese has only a handful of these, and they catch learners every time." },
        { id: "pt-u47l4-aemergencia", type: "vocab", front: "a emergência", reading: "aemergencia", meaning: "emergency", example: { jp: "A emergência do hospital é enorme e a vítima do acidente está ali.", en: "The hospital's emergency department is enormous and the accident's victim is there." }, drill: { jp: "A emergência do hospital é enorme", en: "The hospital's emergency is enormous" }, accept: ["the emergency", "crisis", "urgent situation"], hint: "i-mer-ZHEN-sia. The number is 112, the same across Europe. Note the hospital department is plural in Portugal — as Urgências — so you go às Urgências even though the situation itself is uma emergência." },
        { id: "pt-u47l4-escapar", type: "vocab", front: "escapar", reading: "escapar", meaning: "to escape", example: { jp: "O ladrão não vai escapar da polícia de Lisboa.", en: "The thief isn't going to escape the Lisbon police." }, drill: { jp: "Escapar da polícia não é fácil", en: "Escaping the police isn't easy" }, accept: ["escape", "to get away", "to flee", "flee"], hint: "esh-ka-PAR: escapo, escapas, escapa. Escapou-me is \"it slipped my mind\", again with the pronoun on the end. The escape itself is uma fuga — which is also a leak in a pipe." },
      ],
    },
  ],
};

// RESERVE LIST — in-scope swap-ins if the merge seat has to drop a collided card.
// None collide with A1's 482 or block 1's 240.
//   l1 O perigo        : o alarme (alarm) · a ameaça (threat) · prevenir (to prevent)
//   l2 O fogo          : a chama (flame) · o extintor (fire extinguisher) · queimar (to burn something)
//   l3 O crime         : o assalto (armed robbery) · o suspeito (suspect) · a prisão (prison)
//   l4 Socorro         : a emergência (emergency) · o resgate (rescue) · o ferido (injured person)
