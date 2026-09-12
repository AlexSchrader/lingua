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
        { id: "pt-u85l1-dominar", type: "vocab", front: "dominar", reading: "dominar", meaning: "to master", example: { jp: "A professora domina o assunto e escreve livros sobre ele.", en: "The teacher has mastered the subject and writes books about it." }, drill: { jp: "Vou dominar o assunto este ano", en: "I'm going to master the subject this year" }, accept: ["master", "to master", "to have a command of", "to dominate", "to control"], hint: "du-mi-NAR. To have full command of a skill or a language — domino bem o inglês on a CV. It also keeps the harder sense of dominating, so tone decides which you mean." },
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
        { id: "pt-u85l2-oempenho", type: "vocab", front: "o empenho", reading: "oempenho", meaning: "commitment", example: { jp: "O empenho da equipa no jogo de ontem foi muito grande.", en: "The team's commitment in yesterday's match was very great." }, drill: { jp: "O empenho da equipa foi grande", en: "The team's commitment was great" }, accept: ["the commitment", "commitment", "dedication", "effort", "application"], hint: "em-PE-nyu, nh. The personal investment you put in — com muito empenho. Empenhar-se em is to commit yourself to something, and the noun is what a school report praises." },
        { id: "pt-u85l2-odesempenho", type: "vocab", front: "o desempenho", reading: "odesempenho", meaning: "performance", example: { jp: "O desempenho do filho na escola melhorou muito este ano.", en: "My son's performance at school improved a lot this year." }, drill: { jp: "O desempenho na escola melhorou muito", en: "Performance at school improved a lot" }, accept: ["the performance", "performance", "showing", "the showing", "output"], hint: "de-zem-PE-nyu. How well somebody or something actually did — a pupil, a team, an engine. Desempenhar um papel is to play a role, which is where the word comes from." },
        { id: "pt-u85l2-avontade", type: "vocab", front: "a vontade", reading: "avontade", meaning: "willingness", example: { jp: "A vontade de aprender é mais forte do que o talento.", en: "The will to learn is stronger than talent." }, drill: { jp: "A vontade de aprender é forte", en: "The will to learn is strong" }, accept: ["the will", "will", "willingness", "desire", "wish"], hint: "von-TA-de. Ter vontade de is to feel like doing something — the everyday one. And à vontade means at ease: esteja à vontade is make yourself at home, which you will hear at every Portuguese door." },
        { id: "pt-u85l2-apratica", type: "vocab", front: "a prática", reading: "apratica", meaning: "practice", example: { jp: "A prática no ginásio faz mais do que a força.", en: "Practice at the gym does more than strength." }, drill: { jp: "A prática no ginásio faz muito", en: "Practice at the gym does a lot" }, accept: ["the practice", "practice", "the practise", "experience"], hint: "PRA-ti-ka. Doing the thing repeatedly, and the opposite of theory: na prática, in practice. Note the noun keeps the accent, where prático, the adjective, means handy." },
        { id: "pt-u85l2-ohabito", type: "vocab", front: "o hábito", reading: "ohabito", meaning: "habit", example: { jp: "O hábito de estudar de manhã começou na infância.", en: "The habit of studying in the morning started in childhood." }, drill: { jp: "O hábito de estudar começou cedo", en: "The habit of studying started early" }, accept: ["the habit", "habit", "custom", "routine"], hint: "A-bi-tu, the h silent and the stress on the first syllable. Ter o hábito de is to be in the habit of. Note it is the person's habit, where a tradição is a whole country's." },
        { id: "pt-u85l2-persistir", type: "vocab", front: "persistir", reading: "persistir", meaning: "to persist", example: { jp: "A turma persistiu com o trabalho difícil e no fim aprendeu tudo.", en: "The class persisted with the hard work and in the end learned everything." }, drill: { jp: "Vou persistir com o trabalho difícil", en: "I'm going to persist with the hard work" }, accept: ["persist", "to persist", "to keep at it", "to persevere", "to carry on"], hint: "per-sish-TEER. To keep going when it is not working yet — quieter and more admiring than insistir, which is about not letting a point drop." },
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
        { id: "pt-u85l3-ameta", type: "vocab", front: "a meta", reading: "ameta", meaning: "goal", example: { jp: "A meta da equipa este ano é ganhar o jogo em casa.", en: "The team's goal this year is to win the match at home." }, drill: { jp: "A meta da equipa é ganhar", en: "The team's goal is to win" }, accept: ["the goal", "goal", "target", "the target", "finish line"], hint: "ME-ta. The target you set, and the finish line of a race — chegar à meta. Keep it apart from o objetivo, which is the aim in the abstract, and from um golo, the goal you score." },
        { id: "pt-u85l3-alcancar", type: "vocab", front: "alcançar", reading: "alcancar", meaning: "to reach", example: { jp: "A criança não alcança o livro que está no topo.", en: "The child can't reach the book at the top." }, drill: { jp: "A criança não vai alcançar o livro", en: "The child is not going to reach the book" }, accept: ["reach", "to reach", "to attain", "to achieve", "to catch up with"], hint: "al-kan-SAR, ç. Reaching with your arm and reaching a goal are the same verb. Ao alcance de is within reach of, and fora do meu alcance is beyond me." },
        { id: "pt-u85l3-atingir", type: "vocab", front: "atingir", reading: "atingir", meaning: "to achieve", example: { jp: "A turma atingiu a meta do ano com muito trabalho.", en: "The class achieved the year's goal with a lot of work." }, drill: { jp: "Vou atingir a meta do ano", en: "I'm going to achieve the year's goal" }, accept: ["achieve", "to achieve", "to reach", "to hit", "to attain"], hint: "a-tin-ZHEER. Hitting a number or a level — atingir os 40 graus, atingir o objetivo. Colder and more measurable than alcançar, and it is the one a news report uses." },
        { id: "pt-u85l3-progredir", type: "vocab", front: "progredir", reading: "progredir", meaning: "to make progress", example: { jp: "O filho progrediu muito na escola depois da mudança.", en: "My son made a lot of progress at school after the move." }, drill: { jp: "O filho vai progredir na escola", en: "My son is going to make progress at school" }, accept: ["progress", "to progress", "make progress", "to make progress", "to improve", "to advance"], hint: "pru-gre-DEER: progrido, progrides, progride. Moving forward step by step, where melhorar, which you know, is simply getting better. O progresso is the noun." },
        { id: "pt-u85l3-superar", type: "vocab", front: "superar", reading: "superar", meaning: "to overcome", example: { jp: "A empresa superou o ano difícil e hoje tem mais trabalho.", en: "The company overcame the hard year and today has more work." }, drill: { jp: "A empresa vai superar o ano difícil", en: "The company is going to overcome the hard year" }, accept: ["overcome", "to overcome", "to get over", "to surpass", "to beat"], hint: "su-pe-RAR. Getting past a difficulty, and also beating a mark — superar um recorde. Superar-se is to outdo yourself, which Portuguese says of athletes and students alike." },
        { id: "pt-u85l3-oobstaculo", type: "vocab", front: "o obstáculo", reading: "oobstaculo", meaning: "obstacle", example: { jp: "O obstáculo maior da equipa é o jogo fora de casa.", en: "The team's biggest obstacle is the away match." }, drill: { jp: "O obstáculo maior é o jogo", en: "The biggest obstacle is the match" }, accept: ["the obstacle", "obstacle", "hurdle", "the hurdle", "barrier"], hint: "obsh-TA-ku-lu. A thing standing in the way, on a track or in a life. Note the stress marked on the á, three syllables back from the end." },
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
        { id: "pt-u85l4-adificuldade", type: "vocab", front: "a dificuldade", reading: "adificuldade", meaning: "difficulty", example: { jp: "A dificuldade do trabalho novo é a distância, não as horas.", en: "The difficulty of the new job is the distance, not the hours." }, drill: { jp: "A dificuldade do trabalho é a distância", en: "The difficulty of the job is the distance" }, accept: ["the difficulty", "difficulty", "trouble", "hardship", "problem"], hint: "di-fi-kul-DA-de, from difícil. Com dificuldade is with difficulty; passar dificuldades means going through hard times, usually about money." },
        { id: "pt-u85l4-alimitacao", type: "vocab", front: "a limitação", reading: "alimitacao", meaning: "limitation", example: { jp: "A limitação do carro velho é o motor, mas ainda serve.", en: "The old car's limitation is the engine, but it still does the job." }, drill: { jp: "A limitação do carro é o motor", en: "The car's limitation is the engine" }, accept: ["the limitation", "limitation", "constraint", "restriction", "limit"], hint: "li-mi-ta-SOWN. What a thing or a person cannot do, where o limite is the line itself. Ter limitações is said of people without unkindness." },
        { id: "pt-u85l4-afraqueza", type: "vocab", front: "a fraqueza", reading: "afraqueza", meaning: "weakness", example: { jp: "A fraqueza da equipa não é a força mas a atenção.", en: "The team's weakness isn't strength but attention." }, drill: { jp: "A fraqueza da equipa é a atenção", en: "The team's weakness is attention" }, accept: ["the weakness", "weakness", "failing", "the failing", "frailty"], hint: "fra-KE-za, from fraco, which you met at Unit 10. A failing in a plan or a person, and also physical faintness — senti uma fraqueza." },
        { id: "pt-u85l4-desistir", type: "vocab", front: "desistir", reading: "desistir", meaning: "to give up", example: { jp: "O filho quase desistiu da escola no ano difícil.", en: "My son almost gave up on school in the hard year." }, drill: { jp: "Não vou desistir da escola", en: "I'm not going to give up on school" }, accept: ["give up", "to give up", "to quit", "to drop out", "to back out"], hint: "de-zish-TEER, with de for what you give up on: desistir DO curso. Não desistas! is don't give up — the one a Portuguese coach shouts." },
        { id: "pt-u85l4-insistir", type: "vocab", front: "insistir", reading: "insistir", meaning: "to insist", example: { jp: "O chefe insistiu na pergunta e ninguém disse nada.", en: "The boss insisted on the question and nobody said anything." }, drill: { jp: "O chefe vai insistir na pergunta", en: "The boss is going to insist on the question" }, accept: ["insist", "to insist", "to press", "to keep on", "to push"], hint: "in-sish-TEER, with em: insistir NUMA ideia. Where persistir is quietly keeping at a task, insistir is not letting a point go — and can be a compliment or a complaint." },
        { id: "pt-u85l4-exigir", type: "vocab", front: "exigir", reading: "exigir", meaning: "to demand", example: { jp: "O trabalho novo exige muita atenção e horas calmas.", en: "The new job demands a lot of attention and quiet hours." }, drill: { jp: "O trabalho novo vai exigir atenção", en: "The new job is going to demand attention" }, accept: ["demand", "to demand", "to require", "require", "to call for"], hint: "ai-zi-ZHEER, the x said as z. A person demands and a task requires — Portuguese uses one verb for both. Exigente, of a person, means hard to please." },
      ],
    },
  ],
};
