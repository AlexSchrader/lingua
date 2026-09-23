// PT Unit 125 — O desporto, a competição e o desempenho (slot: coverage-b2-15) — B2
// SPORT AS A PUBLIC INSTITUTION, not as exercise. The scaffold title was
// "Vocabulary 15 (B2)". u50 O desporto e o ginásio (B1) owns playing and keeping
// fit; this unit owns the competition around it — the league, the squad, the
// standings, the reporting. No named B2 slot (u88-113) claims sport, and in
// Portugal the sports press is a daily genre with its own vocabulary, so a B2
// learner meets these words constantly.
//
// SLOT BOUNDARIES:
//   u50 owns o campeonato, o adversário, o árbitro, o treinador, a vitória,
//   a derrota, o esforço, a força, treinar, o golfe; u56 o desempenho;
//   u66 a marca; u35 o adepto; u81 a prova. All used here, none re-taught.
//   NINE first-draft fronts for this unit were already taught at u50 alone —
//   the predictable result of putting a B2 sport unit above a B1 sport unit, and
//   the reason the whole 312-card list was probed before a single card existed.
//   Replacements are narrower, more technical words rather than synonyms: a liga,
//   o rival, o juiz de linha, o selecionador, a exibição, o recorde, o triunfo,
//   a goleada, o certame.
//   a época desportiva was ALSO dropped though its front was free: a época is
//   taught at u48l3, so the compound is the same lexeme wearing a modifier.
//   Replaced by a jornada.
//
// EUROPEAN PORTUGUESE: a claque, o plantel, o selecionador, a goleada and
// a jornada are the pt-PT sports-page words; Brazil says torcida for claque and
// técnico for selecionador.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT125 = {
  id: "pt-u125",
  lang: "pt",
  title: "O desporto, a competição e o desempenho",
  order: 125,
  stage: "b2",
  lessons: [
    {
      id: "pt-u125l1",
      unit: 125,
      lesson: 1,
      title: "A competição",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe how a Portuguese competition is organised — the event, the discipline, the rounds, the league, the matchday.",
      items: [
        { id: "pt-u125l1-ocertame", type: "vocab", front: "o certame", reading: "ocertame", meaning: "contest", example: { jp: "O certame juntou equipas de todo o país.", en: "The contest brought together teams from all over the country." }, drill: { jp: "O certame juntou equipas do país todo", en: "The contest brought together teams from the whole country" }, accept: ["contest", "the contest", "competition", "event", "tournament", "fair"], hint: "ser-TA-me. A formal organised competition — the word a Portuguese sports report uses to avoid repeating competição. Also used of trade fairs and literary prizes." },
        { id: "pt-u125l1-amodalidade", type: "vocab", front: "a modalidade", reading: "amodalidade", meaning: "sporting discipline", example: { jp: "A modalidade cresceu muito depois de aparecer na televisão.", en: "The sport grew a great deal after appearing on television." }, drill: { jp: "A modalidade cresceu depois da televisão", en: "The sport grew after television" }, accept: ["sporting discipline", "discipline", "sport", "the sport", "event", "category", "type"], hint: "mu-da-li-DA-de. An individual sport within the whole — as modalidades olímpicas. Outside sport it means an option or form: modalidade de pagamento, method of payment." },
        { id: "pt-u125l1-aeliminatoria", type: "vocab", front: "a eliminatória", reading: "aeliminatoria", meaning: "qualifying round", example: { jp: "A eliminatória foi ganha nos últimos minutos.", en: "The qualifying round was won in the final minutes." }, drill: { jp: "A eliminatória foi ganha no fim", en: "The qualifying round was won at the end" }, accept: ["qualifying round", "the qualifying round", "knockout round", "heat", "qualifier", "tie"], hint: "e-li-mi-na-TO-ria. A round you must win to stay in — knockout rather than points. In athletics it is a heat; in football a two-legged tie." },
        { id: "pt-u125l1-otorneio", type: "vocab", front: "o torneio", reading: "otorneio", meaning: "tournament", example: { jp: "O torneio dura três dias e acaba no domingo.", en: "The tournament lasts three days and ends on Sunday." }, drill: { jp: "O torneio dura três dias", en: "The tournament lasts three days" }, accept: ["tournament", "the tournament", "competition", "cup", "meet"], hint: "tur-NAY-u. A self-contained competition played over a short period, against o campeonato (u50), which runs a whole season. From the medieval tournament." },
        { id: "pt-u125l1-aliga", type: "vocab", front: "a liga", reading: "aliga", meaning: "league", example: { jp: "A liga tem dezoito equipas e joga de agosto a maio.", en: "The league has eighteen teams and runs from August to May." }, drill: { jp: "A liga tem dezoito equipas", en: "The league has eighteen teams" }, accept: ["league", "the league", "division", "championship body", "alliance"], hint: "LEE-ga. The competition and the body that runs it. Also an alliance in politics, and — a useful false friend warning — uma liga is a garter. Ligar is to connect or to switch on." },
        { id: "pt-u125l1-ajornada", type: "vocab", front: "a jornada", reading: "ajornada", meaning: "matchday", example: { jp: "A jornada deste fim de semana decide quem fica em primeiro.", en: "This weekend's matchday decides who stays top." }, drill: { jp: "A jornada deste fim de semana decide tudo", en: "This weekend's matchday decides everything" }, accept: ["matchday", "the matchday", "round of fixtures", "round", "fixture list", "working day"], hint: "zhur-NA-da. One full round of fixtures — a primeira jornada, the opening weekend. It also means a day's work or a long day's journey: jornada de trabalho is the working day." },
      ],
    },
    {
      id: "pt-u125l2",
      unit: 125,
      lesson: 2,
      title: "Quem está lá",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the people around a Portuguese sporting contest — the athlete, the rival, the officials, the supporters, the squad.",
      items: [
        { id: "pt-u125l2-oatleta", type: "vocab", front: "o atleta", reading: "oatleta", meaning: "athlete", example: { jp: "O atleta treina de manhã e à tarde todos os dias.", en: "The athlete trains morning and afternoon every day." }, drill: { jp: "O atleta treina todos os dias", en: "The athlete trains every day" }, accept: ["athlete", "the athlete", "sportsperson", "competitor"], hint: "at-LE-ta. Masculine in form but used of both sexes with the article changing: o atleta, a atleta. Covers any competitive sportsperson, not only track and field." },
        { id: "pt-u125l2-orival", type: "vocab", front: "o rival", reading: "orival", meaning: "rival", example: { jp: "O rival de sempre ganhou outra vez no último minuto.", en: "The old rival won again in the last minute." }, drill: { jp: "O rival de sempre ganhou outra vez", en: "The old rival won again" }, accept: ["rival", "the rival", "opponent", "competitor", "arch-rival"], hint: "rri-VAL. Distinct from o adversário (u50), which is simply whoever you face today: um rival is a standing opposition with history. O eterno rival is the Portuguese phrase for the derby opponent." },
        { id: "pt-u125l2-ojuizdelinha", type: "vocab", front: "o juiz de linha", reading: "ojuizdelinha", meaning: "linesman", example: { jp: "O juiz de linha levantou a bandeira e o golo não contou.", en: "The linesman raised his flag and the goal did not count." }, drill: { jp: "O juiz de linha levantou a bandeira", en: "The linesman raised his flag" }, accept: ["linesman", "the linesman", "assistant referee", "line judge", "touch judge"], hint: "ZHOO-eezh de LEE-nya. The official on the touchline, formally o árbitro assistente but universally called this. O juiz on its own is a judge in court." },
        { id: "pt-u125l2-aclaque", type: "vocab", front: "a claque", reading: "aclaque", meaning: "supporters' group", example: { jp: "A claque cantou durante todo o jogo sem parar.", en: "The supporters' group sang throughout the match without stopping." }, drill: { jp: "A claque cantou durante todo o jogo", en: "The supporters' group sang all through the match" }, accept: ["supporters' group", "the supporters' group", "supporters", "ultras", "fan group", "claque"], hint: "KLA-ke. The organised, singing section behind the goal. The pt-PT word — Brazil says a torcida. One adepto (u35) is an individual fan; a claque is the organised body." },
        { id: "pt-u125l2-oplantel", type: "vocab", front: "o plantel", reading: "oplantel", meaning: "squad", example: { jp: "O plantel tem quase trinta jogadores este ano.", en: "The squad has almost thirty players this year." }, drill: { jp: "O plantel tem quase trinta jogadores", en: "The squad has almost thirty players" }, accept: ["squad", "the squad", "roster", "playing staff", "panel"], hint: "plan-TEL. All the players registered at a club, as against a equipa, the eleven who start. A pt-PT sports-page staple with no everyday use outside it." },
        { id: "pt-u125l2-oselecionador", type: "vocab", front: "o selecionador", reading: "oselecionador", meaning: "national team manager", example: { jp: "O selecionador chamou dois jogadores novos para o jogo.", en: "The national manager called up two new players for the match." }, drill: { jp: "O selecionador chamou jogadores novos", en: "The national manager called up new players" }, accept: ["national team manager", "national manager", "national coach", "selector", "manager"], hint: "se-le-siu-na-DOR. Specifically the manager of a national team, from a seleção, the national side. A club's manager is o treinador (u50) — Portuguese keeps the two apart." },
      ],
    },
    {
      id: "pt-u125l3",
      unit: 125,
      lesson: 3,
      title: "Como correu",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Assess a Portuguese sporting performance — the display, the record, stamina, speed, recovery, injury.",
      items: [
        { id: "pt-u125l3-aexibicao", type: "vocab", front: "a exibição", reading: "aexibicao", meaning: "display (showing)", example: { jp: "A exibição da equipa foi a melhor do ano.", en: "The team's display was the best of the year." }, drill: { jp: "A exibição da equipa foi a melhor", en: "The team's display was the best" }, accept: ["display", "the display", "showing", "performance on the day", "exhibition", "screening"], hint: "e-zi-bi-SOWN. How a team or player performed on the day — uma boa exibição. Distinct from o desempenho (u56), which is performance measured over time. Also a film screening." },
        { id: "pt-u125l3-orecorde", type: "vocab", front: "o recorde", reading: "orecorde", meaning: "record (best mark)", example: { jp: "O recorde do país caiu na segunda corrida.", en: "The national record fell in the second race." }, drill: { jp: "O recorde do país caiu ontem", en: "The national record fell yesterday" }, accept: ["record", "the record", "best mark", "record time", "best"], hint: "rre-KOR-de, stress on the second syllable — not like the English word. Only the sporting best; a written record is o registo (u49), and the two are never confused in Portuguese." },
        { id: "pt-u125l3-aresistencia", type: "vocab", front: "a resistência", reading: "aresistencia", meaning: "stamina", example: { jp: "A resistência dele cresceu muito depois de um ano a treinar.", en: "His stamina grew a great deal after a year of training." }, drill: { jp: "A resistência dele cresceu muito", en: "His stamina grew a lot" }, accept: ["stamina", "the stamina", "endurance", "resistance", "staying power"], hint: "rre-zish-TEN-si-a. Staying power. It carries every English sense of resistance too — electrical, political, and a Resistência of the war years." },
        { id: "pt-u125l3-avelocidade", type: "vocab", front: "a velocidade", reading: "avelocidade", meaning: "speed", example: { jp: "A velocidade nos primeiros metros decide a corrida.", en: "The speed over the first metres decides the race." }, drill: { jp: "A velocidade decide a corrida", en: "The speed decides the race" }, accept: ["speed", "the speed", "pace", "velocity", "quickness"], hint: "ve-lu-si-DA-de. Speed in general — of a runner, a car, a connection. Excesso de velocidade is speeding, and the word on every Portuguese road sign about limits." },
        { id: "pt-u125l3-arecuperacao", type: "vocab", front: "a recuperação", reading: "arecuperacao", meaning: "recovery (rest)", example: { jp: "A recuperação entre os jogos foi curta demais.", en: "The recovery between matches was far too short." }, drill: { jp: "A recuperação entre os jogos foi curta", en: "The recovery between matches was short" }, accept: ["recovery", "the recovery", "rest", "recuperation", "recovery time", "rehabilitation"], hint: "rre-ku-pe-ra-SOWN. Getting the body back to strength, whether after effort or after injury. In football tempo de recuperação is also injury time." },
        { id: "pt-u125l3-alesao", type: "vocab", front: "a lesão", reading: "alesao", meaning: "injury", example: { jp: "A lesão no joelho tirou-o do resto da época.", en: "The knee injury took him out for the rest of the season." }, drill: { jp: "A lesão no joelho tirou-o do jogo", en: "The knee injury took him out of the match" }, accept: ["injury", "the injury", "strain", "damage", "lesion"], hint: "le-ZOWN. A sporting or bodily injury. A ferida (u25) is an open wound; uma lesão is internal damage — muscle, ligament, joint. Lesionado is the adjective." },
      ],
    },
    {
      id: "pt-u125l4",
      unit: 125,
      lesson: 4,
      title: "Ganhar e perder",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Report a Portuguese result — the win, the thrashing, the draw, disqualification, the standings, the podium.",
      items: [
        { id: "pt-u125l4-otriunfo", type: "vocab", front: "o triunfo", reading: "otriunfo", meaning: "triumph", example: { jp: "O triunfo fora de casa valeu o primeiro lugar.", en: "The away win was worth first place." }, drill: { jp: "O triunfo fora de casa valeu muito", en: "The away win was worth a lot" }, accept: ["triumph", "the triumph", "win", "the win", "victory", "success"], hint: "tri-UN-fu. A win with weight to it. A vitória (u50) is the neutral result word; um triunfo is what a headline calls it. Also a trump card in cards." },
        { id: "pt-u125l4-agoleada", type: "vocab", front: "a goleada", reading: "agoleada", meaning: "thrashing", example: { jp: "A goleada de cinco a zero não deixou dúvidas a ninguém.", en: "The five-nil thrashing left nobody in any doubt." }, drill: { jp: "A goleada não deixou dúvidas", en: "The thrashing left no doubt" }, accept: ["thrashing", "the thrashing", "rout", "hammering", "big win", "drubbing"], hint: "gu-li-A-da, from o golo, the goal. A win by a wide margin. Note golo, not gol — Portugal and Brazil differ on the base word, so they differ here too." },
        { id: "pt-u125l4-oempate", type: "vocab", front: "o empate", reading: "oempate", meaning: "draw", example: { jp: "O empate chegou para continuar em primeiro.", en: "The draw was enough to stay top." }, drill: { jp: "O empate chegou para continuar em primeiro", en: "The draw was enough to stay top" }, accept: ["draw", "the draw", "tie", "the tie", "stalemate", "dead heat"], hint: "em-PA-te. A tied result. Empatar is to draw, and in a vote or a queue it means to be deadlocked or to hold things up — estar empatado." },
        { id: "pt-u125l4-adesclassificacao", type: "vocab", front: "a desclassificação", reading: "adesclassificacao", meaning: "disqualification", example: { jp: "A desclassificação foi decidida depois do fim da prova.", en: "The disqualification was decided after the end of the event." }, drill: { jp: "A desclassificação foi decidida depois", en: "The disqualification was decided afterwards" }, accept: ["disqualification", "the disqualification", "being disqualified", "exclusion", "DQ"], hint: "desh-kla-si-fi-ka-SOWN. Being struck out of the result. Built on a classificação below, which makes the pair easy to hold together." },
        { id: "pt-u125l4-aclassificacao", type: "vocab", front: "a classificação", reading: "aclassificacao", meaning: "ranking", example: { jp: "A classificação mudou toda depois da última jornada.", en: "The standings changed completely after the last matchday." }, drill: { jp: "A classificação mudou toda depois", en: "The standings changed completely afterwards" }, accept: ["ranking", "the ranking", "standings", "the standings", "table", "league table", "grade"], hint: "kla-si-fi-ka-SOWN. The table of who is where. In school it is also your mark — a classificação final do aluno — so Portuguese pupils and football fans share the word." },
        { id: "pt-u125l4-opodio", type: "vocab", front: "o pódio", reading: "opodio", meaning: "podium", example: { jp: "O pódio ficou com três atletas do mesmo país.", en: "The podium went to three athletes from the same country." }, drill: { jp: "O pódio ficou com três atletas", en: "The podium went to three athletes" }, accept: ["podium", "the podium", "rostrum", "top three"], hint: "PO-diu, stress on the first syllable. The platform and, by extension, a top-three finish — subir ao pódio, to make the podium." },
      ],
    },
  ],
};
