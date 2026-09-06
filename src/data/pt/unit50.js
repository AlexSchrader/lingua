// PT Unit 50 — O desporto e o ginásio (slot: coverage-a2-11) — A2
// The last unit of block 3 and of the A2 band. A1's u19 gave o desporto,
// o futebol, a equipa, o jogo and jogar — football and nothing else. This unit
// is everything past football: the other sports, the gym, the competition, and
// winning and losing.
//
// Sited away from block 1's u25, which owns o exercício, saudável and a dieta —
// the HEALTH side of moving your body. Nothing here is medical. It is also kept
// clear of block 2's u35 (culture and leisure): this is sport as competition and
// training, not leisure as a category.
//
// pt-PT markers carded here, four of them: o golo (Brazil: o gol), o ténis
// (Brazil: o tênis), o basquetebol (Brazil: o basquete) and o prémio (Brazil:
// o prêmio) — two vocabulary splits and two accent splits.
// vencer is taught against ganhar from Unit 18, which also means "to win": the
// hint names the pair rather than pretending the learner will not notice.
// a final is the unit's gender card — a final is the match, o final is the end.
// o músculo reaches back to o rato in Unit 1: both descend from Latin for
// "little mouse", which is the same joke English is carrying without knowing it.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT50 = {
  id: "pt-u50",
  lang: "pt",
  title: "O desporto e o ginásio",
  order: 50,
  stage: "a2",
  lessons: [
    {
      id: "pt-u50l1",
      unit: 50,
      lesson: 1,
      title: "Os desportos",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the sports Portuguese people actually play, beyond football.",
      items: [
        { id: "pt-u50l1-otenis", type: "vocab", front: "o ténis", reading: "otenis", meaning: "tennis", example: { jp: "O ténis é o desporto de Ana e o jogo de ontem foi rápido.", en: "Tennis is Ana's sport and yesterday's match was fast." }, drill: { jp: "O ténis é o desporto de Ana", en: "Tennis is Ana's sport" }, accept: ["tennis", "the tennis"], hint: "TE-nish — and note the accent: Portugal writes o ténis with é, Brazil o tênis with ê. It does not change in the plural. Uns ténis is also a pair of trainers, which is what a Portuguese shoe shop calls them." },
        { id: "pt-u50l1-ociclismo", type: "vocab", front: "o ciclismo", reading: "ociclismo", meaning: "cycling", example: { jp: "O ciclismo é duro e a Volta a Portugal é famosa em agosto.", en: "Cycling is hard and the Tour of Portugal is famous in August." }, drill: { jp: "O ciclismo é duro e rápido", en: "Cycling is hard and fast" }, accept: ["the cycling", "bike racing"], hint: "si-KLEESH-mu. A Volta a Portugal has been run every August since 1927. The cyclist is um ciclista — one of those -ista nouns that takes o or a without changing its ending." },
        { id: "pt-u50l1-anatacao", type: "vocab", front: "a natação", reading: "anatacao", meaning: "swimming", example: { jp: "A natação é boa no verão e nadar no mar é perigoso no inverno.", en: "Swimming is good in summer and swimming in the sea is dangerous in winter." }, drill: { jp: "A natação é boa no verão", en: "Swimming is good in summer" }, accept: ["the swimming"], hint: "na-ta-SAWNG, -ção nasal, built straight on nadar from Unit 20. This is swimming as a SPORT; the act of swimming is just nadar. Portugal's pools are mostly municipal, run by a câmara." },
        { id: "pt-u50l1-oatletismo", type: "vocab", front: "o atletismo", reading: "oatletismo", meaning: "athletics", example: { jp: "O atletismo é duro e correr é o trabalho de todos os dias.", en: "Athletics is hard and running is the work of every day." }, drill: { jp: "O atletismo é um desporto duro", en: "Athletics is a hard sport" }, accept: ["athletics", "track and field", "the athletics"], hint: "a-tle-TEESH-mu — track and field. Portugal's great names are Rosa Mota and Carlos Lopes, both marathon runners, which is why uma maratona carries real weight in this country." },
        { id: "pt-u50l1-obasquetebol", type: "vocab", front: "o basquetebol", reading: "obasquetebol", meaning: "basketball", example: { jp: "O basquetebol não é o futebol e o jogo é muito rápido.", en: "Basketball isn't football and the game is very fast." }, drill: { jp: "O basquetebol é um jogo rápido", en: "Basketball is a fast game" }, accept: ["basketball", "the basketball"], hint: "PORTUGAL SAYS BASQUETEBOL — bash-ke-te-BOL, the whole word. Brazil shortens it to o basquete. Same pattern as o andebol, handball, which Portugal is genuinely good at." },
        { id: "pt-u50l1-ogolfe", type: "vocab", front: "o golfe", reading: "ogolfe", meaning: "golf", example: { jp: "O golfe do Algarve é famoso em toda a Europa.", en: "The Algarve's golf is famous across Europe." }, drill: { jp: "O golfe do Algarve é famoso", en: "The Algarve's golf is famous" }, accept: ["golf", "the golf"], hint: "GOL-fe — with an e on the end, because Portuguese will not let a word finish on that consonant cluster. The Algarve has more courses than anywhere else in Europe, which is much of why it looks the way it does." },
      ],
    },
    {
      id: "pt-u50l2",
      unit: 50,
      lesson: 2,
      title: "O ginásio",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Talk about training in Portuguese — the gym, the coach, and the effort it takes.",
      items: [
        { id: "pt-u50l2-oginasio", type: "vocab", front: "o ginásio", reading: "oginasio", meaning: "gym", example: { jp: "O ginásio da cidade é enorme e o treinador é simpático.", en: "The city gym is enormous and the coach is friendly." }, drill: { jp: "O ginásio da cidade é enorme", en: "The city gym is enormous" }, accept: ["the gym", "gymnasium", "fitness centre", "fitness center"], hint: "zhi-NA-ziu, with the -ásio ending. In older Portuguese it also meant a secondary school, straight from the Greek — but nobody uses that sense today." },
        { id: "pt-u50l2-treinar", type: "vocab", front: "treinar", reading: "treinar", meaning: "to train", example: { jp: "Vou treinar no ginásio todos os dias e o corpo fica forte.", en: "I'm going to train at the gym every day and the body gets strong." }, drill: { jp: "Treinar no ginásio é duro", en: "Training at the gym is hard" }, accept: ["train", "to work out", "to practise", "to practice"], hint: "tray-NAR: treino, treinas, treina. O treino is the training SESSION — vou ao treino, I'm off to training, which is how a Portuguese athlete puts it." },
        { id: "pt-u50l2-otreinador", type: "vocab", front: "o treinador", reading: "otreinador", meaning: "coach", example: { jp: "O treinador da equipa é famoso e o jogo da final é amanhã.", en: "The team's coach is famous and the final's match is tomorrow." }, drill: { jp: "O treinador da equipa é famoso", en: "The team's coach is famous" }, accept: ["the coach", "manager", "trainer"], hint: "tray-na-DOR, with the -dor ending that makes the doer of a thing, as in o computador. Portuguese football calls its great managers mister, borrowed from English a century ago and never given back." },
        { id: "pt-u50l2-omusculo", type: "vocab", front: "o músculo", reading: "omusculo", meaning: "muscle", example: { jp: "O músculo fica forte no ginásio da cidade.", en: "Muscle gets strong at the city gym." }, drill: { jp: "O músculo fica forte e duro", en: "Muscle gets strong and hard" }, accept: ["the muscle"], hint: "MOOSH-ku-lu, stress on the first syllable. Fazer músculo is to build muscle. The word is Latin for \"little mouse\" — so it is the same animal as o rato in Unit 1, and English \"muscle\" is carrying the same joke without noticing." },
        { id: "pt-u50l2-aforca", type: "vocab", front: "a força", reading: "aforca", meaning: "strength", example: { jp: "A força do soldado é enorme e o trabalho do exército é duro.", en: "The soldier's strength is enormous and the army's work is hard." }, drill: { jp: "A força do corpo é enorme", en: "The body's strength is enormous" }, accept: ["the strength", "force", "power"], hint: "FOR-sa, cedilla, from forte in Unit 10. Strength and force. Shouted on its own, Força! is Portugal's \"come on!\" — at a match, or to a friend having a bad week. À força means by force." },
        { id: "pt-u50l2-oesforco", type: "vocab", front: "o esforço", reading: "oesforco", meaning: "effort", example: { jp: "O esforço no ginásio é enorme e o corpo fica cansado.", en: "The effort at the gym is enormous and the body gets tired." }, drill: { jp: "O esforço do ginásio é enorme", en: "The effort at the gym is enormous" }, accept: ["the effort", "exertion", "attempt"], hint: "esh-FOR-su, cedilla — a força with es- bolted on the front. Fazer um esforço is to make an effort, sem esforço is effortlessly. Do not confuse it with o reforço, a reinforcement." },
      ],
    },
    {
      id: "pt-u50l3",
      unit: 50,
      lesson: 3,
      title: "A competição",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Follow a Portuguese match — the championship, the opponent, the referee and the goal.",
      items: [
        { id: "pt-u50l3-ocampeonato", type: "vocab", front: "o campeonato", reading: "ocampeonato", meaning: "championship", example: { jp: "O campeonato de futebol é enorme e a equipa do Porto é forte.", en: "The football championship is enormous and the Porto team is strong." }, drill: { jp: "O campeonato de futebol é enorme", en: "The football championship is enormous" }, accept: ["the championship", "league", "tournament"], hint: "kam-pi-u-NA-tu. Portugal's football league is o Campeonato Nacional and everybody calls it a Liga. Built on o campo from Unit 20 — the field it is played on." },
        { id: "pt-u50l3-acompeticao", type: "vocab", front: "a competição", reading: "acompeticao", meaning: "competition", example: { jp: "A competição de natação é amanhã na piscina da cidade.", en: "The swimming competition is tomorrow at the city pool." }, drill: { jp: "A competição de natação é amanhã", en: "The swimming competition is tomorrow" }, accept: ["the competition", "contest", "event"], hint: "kom-pe-ti-SAWNG, -ção nasal; plural as competições. The verb is competir, and um concorrente is a competitor — from concorrer, to compete for something." },
        { id: "pt-u50l3-oadversario", type: "vocab", front: "o adversário", reading: "oadversario", meaning: "opponent", example: { jp: "O adversário da equipa é forte e o jogo vai ser duro.", en: "The team's opponent is strong and the match is going to be hard." }, drill: { jp: "O adversário da equipa é forte", en: "The team's opponent is strong" }, accept: ["the opponent", "rival", "adversary"], hint: "ad-ver-SA-riu, with the -ário ending. Portuguese also says o rival for a traditional enemy — and o clássico is the Benfica-Porto match itself, which needs no other name." },
        { id: "pt-u50l3-afinal", type: "vocab", front: "a final", reading: "afinal", meaning: "final", example: { jp: "A final do campeonato é no Porto e o povo vai ali.", en: "The championship final is in Porto and people are going there." }, drill: { jp: "A final do campeonato é no Porto", en: "The championship final is in Porto" }, accept: ["the final", "final match", "finals"], hint: "fi-NAL — feminine when it is the MATCH. Masculine o final is the END of something, and as an adjective final means last. The gender is the only thing separating the game from the ending." },
        { id: "pt-u50l3-oarbitro", type: "vocab", front: "o árbitro", reading: "oarbitro", meaning: "referee", example: { jp: "O árbitro do jogo não foi bom e o campeonato é duro.", en: "The match referee wasn't good and the championship is tough." }, drill: { jp: "O árbitro do jogo não foi bom", en: "The match referee wasn't good" }, accept: ["the referee", "umpire", "ref"], hint: "AR-bi-tru, stress on the first syllable, from the same Latin root as English \"arbiter\". Portuguese crowds address him with a vocabulary this course will not be teaching you." },
        { id: "pt-u50l3-ogolo", type: "vocab", front: "o golo", reading: "ogolo", meaning: "goal", example: { jp: "O golo da equipa foi enorme e o povo do Porto celebrou na rua.", en: "The team's goal was enormous and Porto's people celebrated in the street." }, drill: { jp: "O golo da equipa foi enorme", en: "The team's goal was enormous" }, accept: ["the goal", "score"], hint: "PORTUGAL SAYS GOLO — GO-lu. Brazil says o gol, and you can hear which country a commentary comes from in one syllable. Marcar um golo is to score, and GOLO! is what the radio holds for ten seconds." },
      ],
    },
    {
      id: "pt-u50l4",
      unit: 50,
      lesson: 4,
      title: "Ganhar e perder",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say who won and who lost in Portuguese, and what they took home for it.",
      items: [
        { id: "pt-u50l4-vencer", type: "vocab", front: "vencer", reading: "vencer", meaning: "to win", example: { jp: "A equipa vai vencer o campeonato e o povo vai celebrar na praça.", en: "The team is going to win the championship and people will celebrate in the square." }, drill: { jp: "Vencer o campeonato é difícil", en: "Winning the championship is hard" }, accept: ["win", "to defeat", "to beat", "to overcome"], hint: "ven-SER: venço, vences, vence — the c takes a cedilla before o to keep the s sound. Ganhar from Unit 18 also means to win and is commoner in speech; vencer is the sharper, more formal word, and it can take an opponent as its object." },
        { id: "pt-u50l4-ocampeao", type: "vocab", front: "o campeão", reading: "ocampeao", meaning: "champion", example: { jp: "O campeão do ano é a equipa do Porto e o povo está na rua.", en: "This year's champion is the Porto team and the people are in the street." }, drill: { jp: "O campeão do ano é famoso", en: "The year's champion is famous" }, accept: ["the champion", "title holder", "winner"], hint: "kam-pi-AWNG, -ão nasal; plural os campeões, feminine a campeã. Same root as o campeonato and o campo — a champion is literally the one who held the field." },
        { id: "pt-u50l4-empatar", type: "vocab", front: "empatar", reading: "empatar", meaning: "to draw", example: { jp: "Empatar não é vencer e o campeonato fica difícil.", en: "Drawing isn't winning and the championship gets hard." }, drill: { jp: "Empatar não é vencer", en: "Drawing isn't winning" }, accept: ["draw", "to tie", "tie", "to end level"], hint: "em-pa-TAR: empato, empatas, empata. Um empate is the draw itself. It also means to tie money up or hold something back — the same image of two things locked together." },
        { id: "pt-u50l4-avitoria", type: "vocab", front: "a vitória", reading: "avitoria", meaning: "victory", example: { jp: "A vitória da equipa foi enorme e a final foi no Porto.", en: "The team's victory was enormous and the final was in Porto." }, drill: { jp: "A vitória da equipa foi enorme", en: "The team's victory was enormous" }, accept: ["the victory", "win", "triumph"], hint: "vi-TO-ria. Note it does NOT come from vencer — it is straight from Latin victoria — so in Portuguese the verb and its own noun look unrelated and simply have to be learned as a pair." },
        { id: "pt-u50l4-aderrota", type: "vocab", front: "a derrota", reading: "aderrota", meaning: "defeat", example: { jp: "A derrota da equipa foi enorme e o treinador não falou.", en: "The team's defeat was enormous and the coach didn't speak." }, drill: { jp: "A derrota da equipa foi enorme", en: "The team's defeat was enormous" }, accept: ["the defeat", "loss", "beating"], hint: "de-RRO-ta, strong rr, from derrotar, to defeat. Careful with uma rota, a route — and note that derrota once meant a ship's course, which is where the word actually started." },
        { id: "pt-u50l4-opremio", type: "vocab", front: "o prémio", reading: "opremio", meaning: "prize", example: { jp: "O prémio do campeonato é de ouro e a equipa vai celebrar.", en: "The championship prize is gold and the team is going to celebrate." }, drill: { jp: "O prémio do campeonato é de ouro", en: "The championship prize is gold" }, accept: ["the prize", "award", "reward"], hint: "PRE-miu — and note the accent: Portugal writes o prémio with é, Brazil o prêmio with ê. O Prémio Camões is the great prize of the Portuguese language, awarded jointly by both countries." },
      ],
    },
  ],
};

// RESERVE LIST — in-scope swap-ins if the merge seat has to drop a collided card.
// None collide with A1's 482 or block 1's 240.
//   l1 Os desportos  : o andebol (handball) · a vela (sailing) · o surf (surfing)
//   l2 O ginásio     : o treino (training session) · a musculação (weight training) · o vestiário (changing room)
//   l3 A competição  : o estádio (stadium) · o adepto (fan — the pt-PT word) · a bancada (stand)
//   l4 Ganhar/perder : o troféu (trophy) · a medalha (medal) · o recorde (record)
