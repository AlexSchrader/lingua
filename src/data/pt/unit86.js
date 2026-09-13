// PT Unit 86 — A ordem e a sequência (slot: coverage-b1-13) — B1
// WHAT COMES FIRST, WHAT COMES AFTER, AND WHAT IS HOLDING IT UP. A1-A2 give the
// corpus the bare time words (primeiro u14, depois u28, antes u28, começar u21,
// acabar u21, durante u36) and u29 the connectives. What is missing is the
// vocabulary of a PROCESS: the stage it is at, the order the stages run in, the
// thing that got put off, the pause, the wait, and picking it up again.
//
// SLOT BOUNDARIES:
//   a etapa is the crew lead's, at u56 O trabalho e os processos — the natural
//   partner of a fase and deliberately NOT carded here. Lower slot wins.
//   entretanto (u28) is SPENT — the lead caught it on the first slate; o prazo
//   (u24), organizar (u24), a rotina (u21), a frequência left to u28's family,
//   depressa (u28), cedo (u28), logo (u28), ainda (u28), quase (u28): all used
//   in examples, none re-taught.
//   u62 Planos e intenções (block 1) owns intending to do a thing; this unit
//   owns the shape of the thing once it is under way.
//   u59 Mudança ao longo do tempo (block 1) owns things becoming different;
//   here nothing changes, it only moves through its stages.
//
// One lexeme per family: o fim without finalmente (both were on the slate),
// atrasar without o atraso, continuar beside prosseguir as genuinely different
// registers rather than as one word twice.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT86 = {
  id: "pt-u86",
  lang: "pt",
  title: "A ordem e a sequência",
  order: 86,
  stage: "b1",
  lessons: [
    {
      id: "pt-u86l1",
      unit: 86,
      lesson: 1,
      title: "Antes e depois",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Place one thing before or after another in Portuguese — the previous one, the next one, the start, the end.",
      items: [
        { id: "pt-u86l1-posterior", type: "vocab", front: "posterior", reading: "posterior", meaning: "later", example: { jp: "O trabalho posterior à reunião foi calmo e ninguém falou.", en: "The work after the meeting was calm and nobody spoke." }, drill: { jp: "O trabalho posterior foi calmo", en: "The later work was calm" }, accept: ["later", "subsequent", "following", "after", "rear"], hint: "posh-te-ri-OR, the mirror of anterior and built the same way. Posterior A something. It belongs to writing and notices; in speech Portuguese says depois." },
        { id: "pt-u86l1-previo", type: "vocab", front: "prévio", reading: "previo", meaning: "prior", example: { jp: "O estudo prévio da turma foi curto mas o teste correu bem.", en: "The class's prior study was short but the test went well." }, drill: { jp: "O estudo prévio da turma foi curto", en: "The class's prior study was short" }, accept: ["prior", "previous", "preliminary", "advance"], hint: "PRE-vi-u. What has to happen first for the rest to be possible — sem aviso prévio means without prior notice, the phrase in every Portuguese contract." },
        { id: "pt-u86l1-oinicio", type: "vocab", front: "o início", reading: "oinicio", meaning: "beginning", example: { jp: "O início do processo foi difícil para toda a equipa.", en: "The beginning of the process was hard for the whole team." }, drill: { jp: "O início do processo foi difícil", en: "The beginning of the process was hard" }, accept: ["the beginning", "beginning", "the start", "start", "outset"], hint: "i-NEE-si-u. The noun where começar is the verb. No início means at first — no início não gostei, at first I didn't like it — and a partir do início is from the top." },
        { id: "pt-u86l1-ofim", type: "vocab", front: "o fim", reading: "ofim", meaning: "end", example: { jp: "O fim do estudo foi melhor do que o início.", en: "The end of the study was better than the beginning." }, drill: { jp: "O fim do ano chega depressa", en: "The end of the year comes quickly" }, accept: ["the end", "end", "ending", "finish", "purpose"], hint: "FEENG, nasal. The end of a thing, and the purpose of it — com o fim de, with the aim of. O fim de semana is the weekend, and por fim means at last." },
        { id: "pt-u86l1-inicial", type: "vocab", front: "inicial", reading: "inicial", meaning: "initial", example: { jp: "A fase inicial do processo foi difícil para toda a equipa.", en: "The initial stage of the process was hard for the whole team." }, drill: { jp: "A fase inicial foi difícil", en: "The initial stage was hard" }, accept: ["initial", "first", "opening", "starting"], hint: "i-ni-si-AL, from o início. The first one in a series. As iniciais are your initials, the letters your name starts with." },
        { id: "pt-u86l1-ultimo", type: "vocab", front: "último", reading: "ultimo", meaning: "last", example: { jp: "O último dia do ano é calmo na aldeia e a família fica em casa.", en: "The last day of the year is quiet in the village and the family stays home." }, drill: { jp: "O último dia do ano é calmo", en: "The last day of the year is quiet" }, accept: ["last", "final", "latest", "the last"], hint: "OOL-ti-mu. The last in a series — and the most recent: as últimas notícias are the latest news. Por último means lastly." },
      ],
    },
    {
      id: "pt-u86l2",
      unit: 86,
      lesson: 2,
      title: "As fases",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how a process is built in Portuguese — its stage, its order, the gap in the middle, two things at once.",
      items: [
        { id: "pt-u86l2-afase", type: "vocab", front: "a fase", reading: "afase", meaning: "stage (a phase)", example: { jp: "A fase difícil do trabalho já acabou e a equipa está calma.", en: "The hard stage of the job is over and the team is calm." }, drill: { jp: "A fase difícil do trabalho já acabou", en: "The hard stage of the job is over" }, accept: ["the stage", "stage", "the phase", "phase", "period"], hint: "FA-ze. A stage of a process or of a life — está numa fase difícil is said kindly about a person. Por fases means bit by bit." },
        { id: "pt-u86l2-asequencia", type: "vocab", front: "a sequência", reading: "asequencia", meaning: "sequence", example: { jp: "A sequência das aulas na escola muda de ano para ano.", en: "The sequence of lessons at the school changes from year to year." }, drill: { jp: "A sequência das aulas muda sempre", en: "The sequence of lessons always changes" }, accept: ["the sequence", "sequence", "order", "the order", "series"], hint: "se-KWEN-si-a, the qu said kw. The order things come in, and a run of them — uma sequência de erros. Em sequência means one after another." },
        { id: "pt-u86l2-ointervalo", type: "vocab", front: "o intervalo", reading: "ointervalo", meaning: "break", example: { jp: "O intervalo entre as duas aulas é curto para o café.", en: "The break between the two lessons is short for a coffee." }, drill: { jp: "O intervalo entre as aulas é curto", en: "The break between the lessons is short" }, accept: ["the break", "break", "the interval", "interval", "gap"], hint: "in-ter-VA-lu. The school break, the interval at the theatre, and the gap between two numbers. Note that in a Portuguese school day, o intervalo is the thing everyone waits for." },
        { id: "pt-u86l2-simultaneo", type: "vocab", front: "simultâneo", reading: "simultaneo", meaning: "simultaneous", example: { jp: "O trabalho simultâneo das duas equipas foi mais eficaz.", en: "The simultaneous work of the two teams was more effective." }, drill: { jp: "O trabalho simultâneo foi mais eficaz", en: "The simultaneous work was more effective" }, accept: ["simultaneous", "concurrent", "at the same time", "parallel"], hint: "si-mul-TA-ne-u. Two things running at once. Em simultâneo is the adverbial form you will hear on the radio — a tradução em simultâneo is simultaneous interpreting." },
        { id: "pt-u86l2-ociclo", type: "vocab", front: "o ciclo", reading: "ociclo", meaning: "cycle", example: { jp: "O ciclo da água é a primeira aula de ciência da escola.", en: "The water cycle is the school's first science lesson." }, drill: { jp: "O ciclo começa outra vez em setembro", en: "The cycle starts again in September" }, accept: ["the cycle", "cycle", "the round", "round"], hint: "SEE-klu. Anything that comes round again — water, seasons, economics. In Portuguese schooling o primeiro ciclo is the first four years, which is how most people meet the word." },
        { id: "pt-u86l2-arepeticao", type: "vocab", front: "a repetição", reading: "arepeticao", meaning: "repetition", example: { jp: "A repetição da frase na aula ajudou a turma a aprender.", en: "The repetition of the sentence in the lesson helped the class learn." }, drill: { jp: "A repetição da frase ajudou a turma", en: "The repetition of the sentence helped the class" }, accept: ["the repetition", "repetition", "the repeat", "repeat"], hint: "rre-pe-ti-SOWN, from repetir. Doing the same thing again — in a lesson, in music, in a bad habit." },
      ],
    },
    {
      id: "pt-u86l3",
      unit: 86,
      lesson: 3,
      title: "Adiar ou antecipar",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Move something in the calendar in Portuguese — put it off, bring it forward, hold it up — and name the wait.",
      items: [
        { id: "pt-u86l3-antecipar", type: "vocab", front: "antecipar", reading: "antecipar", meaning: "to bring forward (to do it earlier)", example: { jp: "A empresa antecipou a reunião para a manhã de hoje.", en: "The company brought the meeting forward to this morning." }, drill: { jp: "A empresa vai antecipar a reunião", en: "The company is going to bring the meeting forward" }, accept: ["bring forward", "to bring forward", "to move up", "to anticipate", "to advance"], hint: "an-te-si-PAR, the opposite of adiar. It also carries the English sense of expecting something in advance — antecipar um problema." },
        { id: "pt-u86l3-atrasar", type: "vocab", front: "atrasar", reading: "atrasar", meaning: "to delay", example: { jp: "A chuva atrasou o comboio e a turma chegou depois da aula.", en: "The rain delayed the train and the class arrived after the lesson." }, drill: { jp: "A chuva vai atrasar o comboio", en: "The rain is going to delay the train" }, accept: ["delay", "to delay", "to hold up", "to make late", "to set back"], hint: "a-tra-ZAR, from atrás, behind. Atrasar-se is to be running late — atrasei-me, desculpa. A watch that atrasa is running slow." },
        { id: "pt-u86l3-apausa", type: "vocab", front: "a pausa", reading: "apausa", meaning: "pause", example: { jp: "A pausa no meio da aula ajudou a atenção da turma.", en: "The pause in the middle of the lesson helped the class's attention." }, drill: { jp: "A pausa do café é às onze", en: "The coffee break is at eleven" }, accept: ["the pause", "pause", "let-up"], hint: "PAU-za. A short stop inside something that is still running, where o intervalo is the scheduled gap. Fazer uma pausa is to take a break." },
        { id: "pt-u86l3-aespera", type: "vocab", front: "a espera", reading: "aespera", meaning: "wait", example: { jp: "A espera no médico foi grande e a mãe ficou calma.", en: "The wait at the doctor's was long and my mother stayed calm." }, drill: { jp: "A espera no médico foi grande", en: "The wait at the doctor's was long" }, accept: ["the wait", "wait", "waiting", "the waiting"], hint: "esh-PE-ra, from esperar. A sala de espera is the waiting room. Note à espera de, waiting for — estou à espera do comboio is the everyday sentence." },
        { id: "pt-u86l3-ademora", type: "vocab", front: "a demora", reading: "ademora", meaning: "delay (the wait)", example: { jp: "A demora do comboio da manhã foi grande e a turma chegou depois da aula.", en: "The delay of the morning train was long and the class arrived after the lesson." }, drill: { jp: "A demora do comboio foi grande", en: "The delay of the train was long" }, accept: ["the delay", "delay", "hold-up"], hint: "de-MO-ra, from demorar. The time something takes when it takes too much of it. Sem demora means without delay, the phrase on official letters." },
        { id: "pt-u86l3-apressa", type: "vocab", front: "a pressa", reading: "apressa", meaning: "hurry", example: { jp: "A pressa da manhã na cozinha estragou o bolo da festa.", en: "The morning hurry in the kitchen ruined the party cake." }, drill: { jp: "A pressa da manhã estragou o bolo", en: "The morning hurry ruined the cake" }, accept: ["the hurry", "hurry", "rush", "the rush", "haste"], hint: "PRE-sa. Ter pressa is to be in a hurry — estou com pressa, the sentence that ends a conversation politely. À pressa means done in a rush, and badly." },
      ],
    },
    {
      id: "pt-u86l4",
      unit: 86,
      lesson: 4,
      title: "Até ao fim",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Carry something through in Portuguese — keep going, take it up again, alternate, finish it, do it right now.",
      items: [
        { id: "pt-u86l4-continuar", type: "vocab", front: "continuar", reading: "continuar", meaning: "to carry on", example: { jp: "A turma continuou o trabalho depois da pausa do café.", en: "The class carried on with the work after the coffee break." }, drill: { jp: "A turma vai continuar o trabalho", en: "The class is going to carry on with the work" }, accept: ["continue", "to continue", "carry on", "to carry on", "to keep on", "to go on"], hint: "kon-ti-nu-AR. Continuar A fazer is to carry on doing. Continua! is keep going — and continua na mesma means nothing has changed." },
        { id: "pt-u86l4-prosseguir", type: "vocab", front: "prosseguir", reading: "prosseguir", meaning: "to proceed (to press on)", example: { jp: "O estudo prosseguiu com uma amostra maior no ano seguinte.", en: "The study proceeded with a larger sample the following year." }, drill: { jp: "O estudo vai prosseguir este ano", en: "The study is going to proceed this year" }, accept: ["proceed", "to proceed", "to press on", "to go ahead", "to continue"], hint: "pru-se-GEER, built on seguir. The formal twin of continuar — a report, a court or a project prossegue, where a person in a café continua." },
        { id: "pt-u86l4-retomar", type: "vocab", front: "retomar", reading: "retomar", meaning: "to resume", example: { jp: "A empresa retomou o processo depois do inverno.", en: "The company resumed the process after the winter." }, drill: { jp: "A empresa vai retomar o processo", en: "The company is going to resume the process" }, accept: ["resume", "to resume", "to take up again", "to pick up again", "to restart"], hint: "rre-tu-MAR — tomar, to take, with re-. Picking up something that was stopped, which is exactly what continuar cannot say: continuar never had a break in it." },
        { id: "pt-u86l4-terminar", type: "vocab", front: "terminar", reading: "terminar", meaning: "to finish (to come to an end)", example: { jp: "O jogo terminou cedo e o público saiu calmo.", en: "The match finished early and the crowd left calmly." }, drill: { jp: "O jogo vai terminar cedo", en: "The match is going to finish early" }, accept: ["finish", "to finish", "to end", "end", "to conclude", "to be over"], hint: "ter-mi-NAR. Slightly more formal than acabar, which you met at Unit 21, and the one on timetables and notices. O termo is the end point." },
        { id: "pt-u86l4-alternar", type: "vocab", front: "alternar", reading: "alternar", meaning: "to alternate", example: { jp: "O professor alterna as aulas de música com as aulas de história.", en: "The teacher alternates the music lessons with the history lessons." }, drill: { jp: "O professor vai alternar as aulas", en: "The teacher is going to alternate the lessons" }, accept: ["alternate", "to alternate", "to switch", "to take turns", "to rotate"], hint: "al-ter-NAR. Swapping between two things by turns — alternar A com B. Em dias alternados means on alternate days, which is how a Portuguese prescription is written." },
        { id: "pt-u86l4-imediatamente", type: "vocab", front: "imediatamente", reading: "imediatamente", meaning: "immediately", example: { jp: "O médico chegou imediatamente depois do email da família.", en: "The doctor arrived immediately after the family's email." }, drill: { jp: "O médico chegou imediatamente depois", en: "The doctor arrived immediately afterwards" }, accept: ["immediately", "at once", "right away", "straight away", "instantly"], hint: "i-me-di-a-ta-MEN-te — long, and the stress lands on the -men- as in every -mente adverb. Immediately, and stronger than logo, which is more like shortly. Imediato is the adjective." },
      ],
    },
  ],
};
