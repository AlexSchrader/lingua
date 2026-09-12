// PT Unit 85 — A capacidade e o empenho (slot: coverage-b1-12) — B1
// WHAT A PERSON CAN DO, AND WHETHER THEY KEEP AT IT. Re-aimed before authoring:
// the slot was slated as "o esforço e a capacidade" until block 2 checked the
// corpus and found o esforço ALREADY TAUGHT at u50 (O desporto e o ginásio),
// along with a força and treinar. The spine word was spent, so the unit moved
// off it — capacity, skill and persistence, with effort itself used in examples
// and never re-carded. esforçar-se is free as a string and is deliberately NOT
// carded either: it is the same lexeme as o esforço, which is the trap a green
// validator cannot see.
//
// SLOT BOUNDARIES:
//   u50 owns o esforço, a força, treinar; u37 tentar and conseguir; u25
//   melhorar; u40 o objetivo; u24 o emprego and a formação. All used here,
//   none re-taught.
//   u63 A experiência e a memória (block 1) owns what you have DONE; this unit
//   owns what you are able to do and whether you stay with it.
//   u76 Os nomes abstratos (block 2) owns abstract nouns of condition in
//   general; block 2 ceded a capacidade to this slot by name.
//   u81 (mine) keeps aguentar for objects holding up; here the holding-on verbs
//   are persistir and insistir, about a person.
//
// One lexeme per family: progredir without o progresso, exigir without a
// exigência, a conclusão left to u84.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT85 = {
  id: "pt-u85",
  lang: "pt",
  title: "A capacidade e o empenho",
  order: 85,
  stage: "b1",
  lessons: [
    {
      id: "pt-u85l1",
      unit: 85,
      lesson: 1,
      title: "Ser capaz",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Say what somebody is able to do in Portuguese — their capacity, their competence, their skill, their gift.",
      items: [
        { id: "pt-u85l1-acapacidade", type: "vocab", front: "a capacidade", reading: "acapacidade", meaning: "capacity", example: { jp: "A capacidade da turma para aprender é grande.", en: "The class's capacity for learning is great." }, drill: { jp: "A capacidade da turma é grande", en: "The class's capacity is great" }, accept: ["the capacity", "capacity", "ability", "the ability", "capability"], hint: "ka-pa-si-DA-de. Both senses at once: what a person is able to do, and how much a thing holds — a capacidade do carro. Capacidade de trabalho is what a Portuguese reference letter praises." },
        { id: "pt-u85l1-capaz", type: "vocab", front: "capaz", reading: "capaz", meaning: "able", example: { jp: "O meu filho é capaz de correr até à praia sem parar.", en: "My son is able to run to the beach without stopping." }, drill: { jp: "O meu filho é capaz de correr", en: "My son is able to run" }, accept: ["able", "capable", "up to it", "able to"], hint: "ka-PASH. Capaz DE doing something. Sou capaz de ir is I might well go — Portuguese uses it for likelihood as well as ability, which surprises learners." },
        { id: "pt-u85l1-acompetencia", type: "vocab", front: "a competência", reading: "acompetencia", meaning: "competence", example: { jp: "A competência do chefe é conhecida em toda a empresa.", en: "The boss's competence is known throughout the company." }, drill: { jp: "A competência do chefe é conhecida", en: "The boss's competence is known" }, accept: ["the competence", "competence", "skill", "the skill", "proficiency"], hint: "kom-pe-TEN-si-a. The proven skill of somebody who does the job well. In the plural, as competências are the skills listed on a CV — the word every Portuguese job advert uses." },
        { id: "pt-u85l1-ahabilidade", type: "vocab", front: "a habilidade", reading: "ahabilidade", meaning: "skill", example: { jp: "A habilidade do pai com as mãos começou na infância no campo.", en: "My father's skill with his hands started in his childhood in the countryside." }, drill: { jp: "A habilidade do pai é grande", en: "My father's skill is great" }, accept: ["the skill", "skill", "ability", "knack", "dexterity"], hint: "a-bi-li-DA-de, the h silent. Hands-on skill, the knack of doing a thing — where a competência is the professional standing. Hábil is the adjective." },
        { id: "pt-u85l1-otalento", type: "vocab", front: "o talento", reading: "otalento", meaning: "talent", example: { jp: "O talento da criança para a música começou muito cedo.", en: "The child's talent for music started very early." }, drill: { jp: "O talento da criança é grande", en: "The child's talent is great" }, accept: ["the talent", "talent", "gift", "the gift", "flair"], hint: "ta-LEN-tu. What you were born with, against a habilidade, which you built. Ter talento para is to have a talent for — with para, never de." },
        { id: "pt-u85l1-dominar", type: "vocab", front: "dominar", reading: "dominar", meaning: "to master", example: { jp: "A professora domina o assunto e escreve livros para a escola.", en: "The teacher has mastered the subject and writes books for the school." }, drill: { jp: "Vou dominar o assunto este ano", en: "I'm going to master the subject this year" }, accept: ["master", "to master", "to have a command of", "to dominate", "to control"], hint: "du-mi-NAR. To have full command of a skill or a language — domino bem o inglês on a CV. It also keeps the harder sense of dominating, so tone decides which you mean." },
      ],
    },
    {
      id: "pt-u85l2",
      unit: 85,
      lesson: 2,
      title: "Empenhar-se",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about putting yourself into something in Portuguese — commitment, performance, willingness, practice, habit.",
      items: [
        { id: "pt-u85l2-oempenho", type: "vocab", front: "o empenho", reading: "oempenho", meaning: "commitment (effort put in)", example: { jp: "O empenho da equipa no jogo de ontem foi muito grande.", en: "The team's commitment in yesterday's match was very great." }, drill: { jp: "O empenho da equipa foi grande", en: "The team's commitment was great" }, accept: ["the commitment", "commitment", "dedication", "effort", "application"], hint: "em-PE-nyu, nh. The personal investment you put in — com muito empenho. Empenhar-se em is to commit yourself to something, and the noun is what a school report praises." },
        { id: "pt-u85l2-persistir", type: "vocab", front: "persistir", reading: "persistir", meaning: "to persist", example: { jp: "A turma persistiu com o trabalho difícil e no fim aprendeu tudo.", en: "The class persisted with the hard work and in the end learned everything." }, drill: { jp: "Vou persistir com o trabalho difícil", en: "I'm going to persist with the hard work" }, accept: ["persist", "to persist", "to keep at it", "to persevere", "to carry on"], hint: "per-sish-TEER. To keep going when it is not working yet — quieter and more admiring than insistir, which is about not letting a point drop." },
        { id: "pt-u85l2-adedicacao", type: "vocab", front: "a dedicação", reading: "adedicacao", meaning: "dedication", example: { jp: "A dedicação da professora à turma é conhecida em toda a escola.", en: "The teacher's dedication to her class is known throughout the school." }, drill: { jp: "A dedicação da professora é grande", en: "The teacher's dedication is great" }, accept: ["the dedication", "dedication", "devotion", "commitment"], hint: "de-di-ka-SOWN. Giving your time and attention to something over years, where o empenho is the effort put in today. Dedicar-se a is the verb." },
        { id: "pt-u85l2-origor", type: "vocab", front: "o rigor", reading: "origor", meaning: "rigour", example: { jp: "O rigor do médico com as horas é conhecido no trabalho.", en: "The doctor's rigour about time is well known at work." }, drill: { jp: "O rigor do médico é conhecido", en: "The doctor's rigour is well known" }, accept: ["the rigour", "rigour", "the rigor", "rigor", "strictness", "precision"], hint: "rri-GOR. Doing a thing exactly and strictly. Com rigor means rigorously — and a rigor in Portugal, on an invitation, means formal dress." },
        { id: "pt-u85l2-amotivacao", type: "vocab", front: "a motivação", reading: "amotivacao", meaning: "motivation", example: { jp: "A motivação da equipa subiu depois do jogo de ontem.", en: "The team's motivation went up after yesterday's match." }, drill: { jp: "A motivação da equipa subiu muito", en: "The team's motivation went up a lot" }, accept: ["the motivation", "motivation", "drive", "the drive", "incentive"], hint: "mu-ti-va-SOWN. What keeps a person going, and in the singular also the reason behind an act — a motivação do crime, in a Portuguese news bulletin." },
        { id: "pt-u85l2-aambicao", type: "vocab", front: "a ambição", reading: "aambicao", meaning: "ambition", example: { jp: "A ambição do filho é dominar o trabalho do pai antes dos trinta.", en: "My son's ambition is to master his father's trade before he's thirty." }, drill: { jp: "A ambição do filho é grande", en: "My son's ambition is great" }, accept: ["the ambition", "ambition", "drive", "the drive", "aspiration"], hint: "am-bi-SOWN. What a person is reaching for. Ambicioso of a plan is a compliment; of a person it can cut either way, exactly as in English." },
      ],
    },
    {
      id: "pt-u85l3",
      unit: 85,
      lesson: 3,
      title: "Chegar lá",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Describe getting somewhere in Portuguese — the goal, reaching it, making progress, and the obstacle in the way.",
      items: [
        { id: "pt-u85l3-alcancar", type: "vocab", front: "alcançar", reading: "alcancar", meaning: "to reach", example: { jp: "A criança não alcança o livro que está no topo.", en: "The child can't reach the book at the top." }, drill: { jp: "A criança não vai alcançar o livro", en: "The child is not going to reach the book" }, accept: ["reach", "to reach", "to attain", "to achieve", "to catch up with"], hint: "al-kan-SAR, ç. Reaching with your arm and reaching a goal are the same verb. Ao alcance de is within reach of, and fora do meu alcance is beyond me." },
        { id: "pt-u85l3-atingir", type: "vocab", front: "atingir", reading: "atingir", meaning: "to achieve", example: { jp: "A turma atingiu a meta do ano com muito trabalho.", en: "The class achieved the year's goal with a lot of work." }, drill: { jp: "Vou atingir a meta do ano", en: "I'm going to achieve the year's goal" }, accept: ["achieve", "to achieve", "to reach", "to hit", "to attain"], hint: "a-tin-ZHEER. Hitting a number or a level — atingir os 40 graus, atingir o objetivo. Colder and more measurable than alcançar, and it is the one a news report uses." },
        { id: "pt-u85l3-progredir", type: "vocab", front: "progredir", reading: "progredir", meaning: "to make progress", example: { jp: "O filho progrediu muito na escola depois da mudança.", en: "My son made a lot of progress at school after the move." }, drill: { jp: "O filho vai progredir na escola", en: "My son is going to make progress at school" }, accept: ["progress", "to progress", "make progress", "to make progress", "to improve", "to advance"], hint: "pru-gre-DEER: progrido, progrides, progride. Moving forward step by step, where melhorar, which you know, is simply getting better. O progresso is the noun." },
        { id: "pt-u85l3-realizar", type: "vocab", front: "realizar", reading: "realizar", meaning: "to carry out (to get it done)", example: { jp: "A empresa realizou o trabalho todo antes do fim do ano.", en: "The company carried out all the work before the end of the year." }, drill: { jp: "A empresa vai realizar o trabalho", en: "The company is going to carry out the work" }, accept: ["carry out", "to carry out", "to achieve", "to accomplish", "to hold", "to realise"], hint: "rre-a-li-ZAR. Getting a thing actually done — a project, an event, a dream. Careful with the English realise in the sense of noticing: that is aperceber-se." },
        { id: "pt-u85l3-oavanco", type: "vocab", front: "o avanço", reading: "oavanco", meaning: "advance", example: { jp: "O avanço do trabalho da equipa foi grande este ano.", en: "The team's advance in the work was great this year." }, drill: { jp: "O avanço do trabalho foi grande", en: "The advance in the work was great" }, accept: ["the advance", "advance", "progress", "the progress", "step forward"], hint: "a-VAN-su. A step forward, in work, science or a football match. Um grande avanço is a breakthrough." },
        { id: "pt-u85l3-osucesso", type: "vocab", front: "o sucesso", reading: "osucesso", meaning: "success", example: { jp: "O sucesso do livro novo da professora foi grande na cidade.", en: "The success of the teacher's new book was great in the city." }, drill: { jp: "O sucesso do livro foi grande", en: "The success of the book was great" }, accept: ["the success", "success", "hit", "the hit"], hint: "su-SE-su. Success, and a hit — um sucesso do verão is the song of the summer. Ter sucesso is to be successful; the false friend to avoid is that it never means the English succession." },
      ],
    },
    {
      id: "pt-u85l4",
      unit: 85,
      lesson: 4,
      title: "Quando não dá",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say where the limit is in Portuguese — the difficulty, the weakness — and whether you give up, push back, or make demands.",
      items: [
        { id: "pt-u85l4-alimitacao", type: "vocab", front: "a limitação", reading: "alimitacao", meaning: "limitation", example: { jp: "A limitação do carro velho é o motor, mas ainda serve.", en: "The old car's limitation is the engine, but it still does the job." }, drill: { jp: "A limitação do carro é o motor", en: "The car's limitation is the engine" }, accept: ["the limitation", "limitation", "constraint", "restriction", "limit"], hint: "li-mi-ta-SOWN. What a thing or a person cannot do, where o limite is the line itself. Ter limitações is said of people without unkindness." },
        { id: "pt-u85l4-afraqueza", type: "vocab", front: "a fraqueza", reading: "afraqueza", meaning: "weakness", example: { jp: "A fraqueza da equipa não é a força mas a atenção.", en: "The team's weakness isn't strength but attention." }, drill: { jp: "A fraqueza da equipa é a atenção", en: "The team's weakness is attention" }, accept: ["the weakness", "weakness", "failing", "the failing", "frailty"], hint: "fra-KE-za, from fraco, which you met at Unit 10. A failing in a plan or a person, and also physical faintness — senti uma fraqueza." },
        { id: "pt-u85l4-desistir", type: "vocab", front: "desistir", reading: "desistir", meaning: "to give up", example: { jp: "O filho quase desistiu da escola no ano difícil.", en: "My son almost gave up on school in the hard year." }, drill: { jp: "Não vou desistir da escola", en: "I'm not going to give up on school" }, accept: ["give up", "to give up", "to quit", "to drop out", "to back out"], hint: "de-zish-TEER, with de for what you give up on: desistir DO curso. Não desistas! is don't give up — the one a Portuguese coach shouts." },
        { id: "pt-u85l4-abarreira", type: "vocab", front: "a barreira", reading: "abarreira", meaning: "barrier", example: { jp: "A barreira da equipa não é a força mas a falta de prática.", en: "The team's barrier isn't strength but lack of practice." }, drill: { jp: "A barreira da equipa não é a força", en: "The team's barrier isn't strength" }, accept: ["the barrier", "barrier", "obstacle", "the obstacle", "hurdle"], hint: "ba-RRAY-ra. A physical barrier and a personal one — a barreira da língua is the language barrier. Quebrar barreiras is to break them down." },
        { id: "pt-u85l4-ofracasso", type: "vocab", front: "o fracasso", reading: "ofracasso", meaning: "failure", example: { jp: "O fracasso do primeiro ano não parou a vontade da turma.", en: "The failure of the first year didn't stop the class's will." }, drill: { jp: "O fracasso do primeiro ano não parou nada", en: "The failure of the first year stopped nothing" }, accept: ["the failure", "failure", "flop", "the flop", "fiasco"], hint: "fra-KA-su. The failure of a plan, a business or a film — heavier than the verb falhar, and never used of a person to their face." },
        { id: "pt-u85l4-hesitar", type: "vocab", front: "hesitar", reading: "hesitar", meaning: "to hesitate", example: { jp: "A criança hesitou à entrada da escola nova e a mãe ficou calma.", en: "The child hesitated at the entrance of the new school and my mother stayed calm." }, drill: { jp: "A criança vai hesitar na entrada", en: "The child is going to hesitate at the entrance" }, accept: ["hesitate", "to hesitate", "to waver", "to think twice", "to hold back"], hint: "e-zi-TAR, the h silent. Stopping for a moment before acting. Sem hesitar is without hesitation, and não hesite em perguntar is the polite don't hesitate to ask." },
      ],
    },
  ],
};
