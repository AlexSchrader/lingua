// PT Unit 74 — Os verbos · 2 (slot: vocabulary-1 B1) — B1
// ─────────────────────────────────────────────────────────────────────────────
// FIRST OF THREE COVERAGE UNITS, and they are deliberately WORD-CLASS units
// rather than thematic ones: u74 verbs, u75 adjectives, u76 abstract nouns.
// That choice was agreed with block 3, which owns eleven thematic coverage
// slots (u77-u87) — word-class units cut across every theme, so a thematic
// coverage unit here would have collided with all eleven. The boundary settled
// with block 3: it takes the DOMAIN, this block takes the WORD CLASS. An
// adjective that describes anything at all is mine; one that only makes sense
// of equipment wearing out (fiável, durável, o desgaste) is its, and I do not
// card those even though u75 outranks u81 on slot order.
//
// Continues u13 "Os verbos e os pronomes", hence the · 2.
//
// GAPS CLOSED HERE, all verified against the whole u1-u50 corpus rather than
// assumed: `responder`, `perceber`, `levar`, `deixar`, `parar`, `custar`,
// `existir`, `faltar` and `perder` are used by shipped units and carded by
// NONE. perceber and responder in particular are top-frequency and their
// absence was distorting examples all through this block.
//
// `separar` is NOT carded although it is free: u68 teaches separar-se, and the
// two are one lexeme with one meaning split by a pronoun. Same reasoning that
// kept alterar out of u65.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT74 = {
  id: "pt-u74",
  lang: "pt",
  title: "Os verbos · 2",
  order: 74,
  stage: "b1",
  lessons: [
    {
      id: "pt-u74l1",
      unit: 74,
      lesson: 1,
      title: "Dizer e perceber",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Answer, understand, point something out and put a proposal — the verbs a conversation runs on.",
      items: [
        { id: "pt-u74l1-responder", type: "vocab", front: "responder", reading: "responder", meaning: "to answer", example: { jp: "Ainda não respondeu ao email, por isso a empresa não sabe se ele aceita o lugar.", en: "He has not answered the email yet, so the company does not know whether he accepts the position." }, drill: { jp: "Ele vai responder ao email hoje", en: "He is going to answer the email today" }, accept: ["answer", "to reply", "respond"], hint: "Responder A alguém or a alguma coisa — the a is not optional. u17 gave you a resposta, the noun; this is the verb it comes from, and the course had never taught it." },
        { id: "pt-u74l1-perceber", type: "vocab", front: "perceber", reading: "perceber", meaning: "to understand", example: { jp: "Não percebi nada do que ele disse, porque falou muito depressa ao telefone.", en: "I did not understand anything he said, because he spoke very fast on the phone." }, drill: { jp: "É difícil perceber o que ele diz", en: "It is hard to understand what he says" }, accept: ["understand", "to get", "to realise", "realize"], hint: "THE Portuguese word for understanding — entender exists, but Portugal says percebo, percebeste?, não percebi. A learner's most-used sentence is não percebi, pode repetir?" },
        { id: "pt-u74l1-notar", type: "vocab", front: "notar", reading: "notar", meaning: "to notice", example: { jp: "Notei que a casa estava fria, mas não disse nada para não preocupar a minha mãe.", en: "I noticed the house was cold, but I said nothing so as not to worry my mother." }, drill: { jp: "É fácil notar a diferença", en: "It is easy to notice the difference" }, accept: ["notice", "to note", "to observe"], hint: "Notar QUE plus a clause is the ordinary shape. Nota-se que… — \"you can tell that…\" — uses the impersonal -se from u73 and is very common in speech." },
        { id: "pt-u74l1-mandar", type: "vocab", front: "mandar", reading: "mandar", meaning: "to send", example: { jp: "Mando-te a morada assim que chegar a casa, porque não a sei de cor.", en: "I will send you the address as soon as I get home, because I do not know it by heart." }, drill: { jp: "Vou mandar a morada esta noite", en: "I am going to send the address tonight" }, accept: ["send", "to order", "to have something done"], hint: "Two jobs: to send (mandar uma mensagem) and to order somebody about (quem manda aqui?). Mandar fazer is to have something done — mandei arranjar o carro." },
      ],
    },
    {
      id: "pt-u74l2",
      unit: 74,
      lesson: 2,
      title: "Deixar acontecer",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say who allows, forces, prevents or avoids something — the verbs that decide what other people can do.",
      items: [
        { id: "pt-u74l2-criar", type: "vocab", front: "criar", reading: "criar", meaning: "to create", example: { jp: "A câmara quer criar um espaço novo para as crianças, além disso vai plantar árvores em toda a rua.", en: "The council wants to create a new space for children; what is more, it is going to plant trees all along the street." }, drill: { jp: "A câmara quer criar um espaço novo", en: "The council wants to create a new space" }, accept: ["create", "to set up", "to raise", "to bring up"], hint: "Also to bring up a child or raise animals — foi criado em Braga means he was raised there. One verb, two lives, and context always separates them." },
        { id: "pt-u74l2-obrigar", type: "vocab", front: "obrigar", reading: "obrigar", meaning: "to force", example: { jp: "Ninguém o obriga a ficar naquele emprego, embora ele diga sempre o contrário à família.", en: "Nobody is forcing him to stay in that job, although he always tells his family the opposite." }, drill: { jp: "Ninguém o pode obrigar a ficar", en: "Nobody can force him to stay" }, accept: ["force", "to oblige", "to make someone"], hint: "Obrigar alguém A fazer. And yes — obrigado, the thank-you you learned in u2, is literally \"obliged\", the same word. Ser obrigado a is to have to." },
      ],
    },
    {
      id: "pt-u74l3",
      unit: 74,
      lesson: 3,
      title: "Mudar de estado",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say that something grew, stopped, exists, failed or was missing — the verbs that describe a change without naming who caused it.",
      items: [
        { id: "pt-u74l3-parar", type: "vocab", front: "parar", reading: "parar", meaning: "to stop", example: { jp: "A chuva não parou durante a noite toda, mas de manhã já fazia sol.", en: "The rain did not stop all night, but by morning it was already sunny." }, drill: { jp: "A chuva não quer parar hoje", en: "The rain will not stop today" }, accept: ["stop", "to halt", "to pull over"], hint: "Parar DE fazer is to stop doing: parei de fumar. A paragem is the bus stop, from the same root — and para! on its own is \"stop!\"." },
        { id: "pt-u74l3-existir", type: "vocab", front: "existir", reading: "existir", meaning: "to exist", example: { jp: "Ainda não existe cura para esta doença, no entanto o tratamento melhorou muito neste século.", en: "There is still no cure for this illness; the treatment, however, has improved a lot this century." }, drill: { jp: "Não pode existir cura para tudo", en: "There cannot be a cure for everything" }, accept: ["exist", "there is", "to be"], hint: "More formal than há for \"there is\", and it agrees: existem dois problemas, where há never changes. News and official writing prefer it." },
        { id: "pt-u74l3-falhar", type: "vocab", front: "falhar", reading: "falhar", meaning: "to fail", example: { jp: "O plano falhou por causa do tempo, embora toda a gente tenha feito a sua parte.", en: "The plan failed because of the weather, although everybody did their part." }, drill: { jp: "O plano pode falhar com esta chuva", en: "The plan may fail with this rain" }, accept: ["fail", "to go wrong", "to miss"], hint: "Of plans, machines and people alike — a luz falhou is the power went out. Falhar a alguém is to let somebody down." },
        { id: "pt-u74l3-faltar", type: "vocab", front: "faltar", reading: "faltar", meaning: "to be missing", example: { jp: "Falta uma chave para fechar tudo, por isso ninguém pode sair antes das seis.", en: "One key is missing to lock everything up, so nobody can leave before six." }, drill: { jp: "Vai faltar uma chave para tudo", en: "One key is going to be missing for everything" }, accept: ["be missing", "to lack", "to be short of", "to be absent"], hint: "Backwards from English: the THING missing is the subject — falta-me tempo, literally \"time is missing to me\". Also to miss school or work: faltou às aulas." },
      ],
    },
    {
      id: "pt-u74l4",
      unit: 74,
      lesson: 4,
      title: "Levar e deixar",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Take, leave, lose and join things — four verbs whose second meanings do far more work than their first.",
      items: [
        { id: "pt-u74l4-levar", type: "vocab", front: "levar", reading: "levar", meaning: "to take", example: { jp: "Levo o carro à oficina amanhã, porque a viagem ao Porto leva quase três horas.", en: "I am taking the car to the garage tomorrow, because the journey to Porto takes almost three hours." }, drill: { jp: "Vou levar o carro amanhã", en: "I am going to take the car tomorrow" }, accept: ["take", "to carry", "to take away", "to last"], hint: "Take AWAY from here — trazer is to bring TOWARDS. Second job: how long something takes, leva três horas. Third: para levar is takeaway food." },
        { id: "pt-u74l4-deixar", type: "vocab", front: "deixar", reading: "deixar", meaning: "to leave", example: { jp: "Deixei o telemóvel em casa, por isso ninguém me conseguiu apanhar a manhã toda.", en: "I left my phone at home, so nobody could reach me all morning." }, drill: { jp: "Não quero deixar o telemóvel em casa", en: "I do not want to leave the phone at home" }, accept: ["leave", "to let", "to quit", "to allow"], hint: "Three jobs worth learning together: leave something behind (deixei as chaves), let somebody do something (deixa-me ver), and quit a habit (deixar de fumar, u67)." },
        { id: "pt-u74l4-custar", type: "vocab", front: "custar", reading: "custar", meaning: "to cost", example: { jp: "A casa custou mais do que pensávamos, mas o terreno já estava incluído no preço.", en: "The house cost more than we thought, but the land was already included in the price." }, drill: { jp: "A casa vai custar mais este ano", en: "The house is going to cost more this year" }, accept: ["cost", "to be hard", "to be difficult"], hint: "Quanto custa? is A1's question and this is the verb behind it, plus o custo (u66). Second meaning you will hear constantly: custa-me acreditar — I find it hard to believe." },
        { id: "pt-u74l4-perder", type: "vocab", front: "perder", reading: "perder", meaning: "to lose", example: { jp: "Perdi o comboio das sete, por isso cheguei ao trabalho quase uma hora tarde.", en: "I missed the seven o'clock train, so I got to work almost an hour late." }, drill: { jp: "Não quero perder o comboio das sete", en: "I do not want to miss the seven o'clock train" }, accept: ["lose", "to miss", "to waste"], hint: "Lose AND miss — perder o comboio, perder a chave, perder tempo. u31 gave you perder-se, to get lost; this is the plain verb the course never taught." },
        { id: "pt-u74l4-juntar", type: "vocab", front: "juntar", reading: "juntar", meaning: "to put together", example: { jp: "Juntámos o dinheiro todo para comprar a casa, embora ainda falte quase metade.", en: "We put all the money together to buy the house, although almost half is still missing." }, drill: { jp: "Vamos juntar o dinheiro para a casa", en: "We are going to put the money together for the house" }, accept: ["put together", "to gather", "to join", "to save up"], hint: "From junto (u39's juntos). Juntar dinheiro is to save up; juntar-se a alguém is to join them." },
        { id: "pt-u74l4-aproveitar", type: "vocab", front: "aproveitar", reading: "aproveitar", meaning: "to make the most of", example: { jp: "Vamos aproveitar o bom tempo e almoçar lá fora, porque a semana que vem vai ser fria.", en: "Let's make the most of the good weather and have lunch outside, because next week is going to be cold." }, drill: { jp: "Vamos aproveitar o bom tempo", en: "Let's make the most of the good weather" }, accept: ["make the most of", "to take advantage of", "to enjoy", "to use"], hint: "No neat English equivalent, and Portugal uses it constantly: aproveita! is \"enjoy it while it lasts\". Aproveitar-se DE somebody, with the pronoun, is the negative sense — to take advantage of them." },
      ],
    },
  ],
};
