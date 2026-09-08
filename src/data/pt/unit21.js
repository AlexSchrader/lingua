// PT Unit 21 — A rotina diária — A2
// Portuguese A2, block 1 (units 21-30). Conventions, the pt-PT corpus decision and
// the Spanish-trap policy are in the header of unit1.js and bind this file too.
// Every vocab item carries a `drill` authored inline beside its `example`
// (RUNBOOK §4): 3-8 tokens, no punctuation, the item's own front inside it as a
// whole word. Verified against cardRouting.js canCloze/canSentence, not the lint.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT21 = {
  id: "pt-u21",
  lang: "pt",
  title: "A rotina diária",
  order: 21,
  stage: "a2",
  lessons: [
    {
      id: "pt-u21l1",
      unit: 21,
      lesson: 1,
      title: "De manhã cedo",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe your morning in order — the alarm, the shower, getting dressed — using reflexive verbs with the pronoun on the back, the way Portugal says them.",
      items: [
        { id: "pt-u21l1-levantarse", type: "vocab", front: "levantar-se", reading: "levantarse", meaning: "to get up", example: { jp: "Levanto-me às sete e tomo o pequeno-almoço na cozinha.", en: "I get up at seven and have breakfast in the kitchen." }, drill: { jp: "Levantar-se é sempre difícil", en: "Getting up is always hard" }, accept: ["get up", "to rise", "to stand up"], hint: "levanto-me, levantas-te, levanta-se. The little pronoun hangs on the BACK in Portugal, joined by a hyphen. Brazil fronts it — me levanto — and that one habit places a speaker instantly." },
        { id: "pt-u21l1-lavar", type: "vocab", front: "lavar", reading: "lavar", meaning: "to wash", example: { jp: "Ao domingo lavo a roupa toda e limpo a casa.", en: "On Sunday I wash all the clothes and clean the house." }, drill: { jp: "Lavar a roupa ao domingo", en: "Washing the clothes on Sunday" }, accept: ["wash", "to clean", "to wash up"], hint: "lavo, lavas, lava. Turn it reflexive and it is washing YOURSELF: lavar-se. The machine in Unit 30 is a máquina de lavar — literally a washing machine." },
        { id: "pt-u21l1-oduche", type: "vocab", front: "o duche", reading: "oduche", meaning: "shower", example: { jp: "Tomo um duche quente e depois visto a camisola azul.", en: "I take a hot shower and then put on the blue jumper." }, drill: { jp: "O duche está frio hoje", en: "The shower is cold today" }, accept: ["the shower", "a shower"], hint: "PORTUGAL SAYS DUCHE — doosh, straight from the French douche. Brazil says o chuveiro for the fixture and tomar banho for the act. Here you tomar um duche." },
        { id: "pt-u21l1-atoalha", type: "vocab", front: "a toalha", reading: "atoalha", meaning: "towel", example: { jp: "A toalha limpa está na casa de banho, ao lado do espelho.", en: "The clean towel is in the bathroom, next to the mirror." }, drill: { jp: "A toalha está na cozinha", en: "The towel is in the kitchen" }, accept: ["the towel", "a towel", "cloth"], hint: "to-A-lya, the lh from Unit 1. One word covers the bath towel and the tablecloth — that one is a toalha de mesa." },
        { id: "pt-u21l1-oespelho", type: "vocab", front: "o espelho", reading: "oespelho", meaning: "mirror", example: { jp: "Vejo-me ao espelho e vejo que ainda estou cansado.", en: "I look at myself in the mirror and see that I am still tired." }, drill: { jp: "O espelho da casa de banho", en: "The bathroom mirror" }, accept: ["the mirror", "a mirror"], hint: "es-PE-lyu, lh again. A car's rear-view mirror is o espelho retrovisor, which is one of those words worth knowing before you rent a car." },
        { id: "pt-u21l1-odespertador", type: "vocab", front: "o despertador", reading: "odespertador", meaning: "alarm clock", example: { jp: "O despertador tocou às seis mas eu não o ouvi.", en: "The alarm went off at six but I didn't hear it." }, drill: { jp: "O despertador tocou às seis", en: "The alarm went off at six" }, accept: ["the alarm clock", "alarm", "the alarm"], hint: "From despertar, to wake. On a phone Portugal says o alarme, but the machine beside the bed keeps the older word." },
      ],
    },
    {
      id: "pt-u21l2",
      unit: 21,
      lesson: 2,
      title: "Durante o dia",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you start, finish, wait for and catch during an ordinary Portuguese day.",
      items: [
        { id: "pt-u21l2-comecar", type: "vocab", front: "começar", reading: "comecar", meaning: "to begin", example: { jp: "A aula começa às nove e acaba ao meio-dia.", en: "The class begins at nine and finishes at midday." }, drill: { jp: "Começar a aula às nove", en: "Beginning the class at nine" }, accept: ["begin", "start", "to start"], hint: "começo, começas, começa. Watch the cedilla: it appears only before a and o — começo, começamos — because c would harden there. Before e it is not needed." },
        { id: "pt-u21l2-acabar", type: "vocab", front: "acabar", reading: "acabar", meaning: "to finish", example: { jp: "O filme acabou tarde e eu fiquei com muito sono.", en: "The film finished late and I was left very sleepy." }, drill: { jp: "Acabar o trabalho hoje", en: "Finishing the work today" }, accept: ["finish", "end", "to end"], hint: "acabo, acabas, acaba. Acabar DE plus an infinitive means to have just done something: acabei de comer, I have just eaten. That is the everyday way to say it." },
        { id: "pt-u21l2-esperar", type: "vocab", front: "esperar", reading: "esperar", meaning: "to wait", example: { jp: "Esperei por Ana vinte minutos à chuva.", en: "I waited for Ana twenty minutes in the rain." }, drill: { jp: "Esperar por Ana todos os dias", en: "Waiting for Ana every day" }, accept: ["wait", "to hope", "hope", "expect"], hint: "Two meanings in one verb: to wait and to hope. Espero que sim means I hope so. Portugal puts por after it: espera por mim, esperar por Ana. The bare form is the Brazilian-leaning one." },
        { id: "pt-u21l2-apanhar", type: "vocab", front: "apanhar", reading: "apanhar", meaning: "to catch", example: { jp: "Apanho o comboio das oito para chegar a horas.", en: "I catch the eight o'clock train to arrive on time." }, drill: { jp: "Apanhar o comboio de manhã", en: "Catching the train in the morning" }, accept: ["catch", "to take", "take", "to pick up"], hint: "PORTUGAL USES APANHAR for catching transport, catching a cold and picking things up. Brazil says pegar, which in Portugal sounds like gluing something." },
        { id: "pt-u21l2-entrar", type: "vocab", front: "entrar", reading: "entrar", meaning: "to enter", example: { jp: "Entrei na sala e vi que a janela estava aberta.", en: "I went into the room and saw that the window was open." }, drill: { jp: "Entrar na sala de aula", en: "Going into the classroom" }, accept: ["enter", "go in", "come in", "to go in"], hint: "entro, entras, entra. It takes EM, not a bare object: entrar NA sala, entrar NO carro. The contraction is doing real work there." },
        { id: "pt-u21l2-voltar", type: "vocab", front: "voltar", reading: "voltar", meaning: "to return", example: { jp: "Volto a casa às seis e janto com a minha família.", en: "I come back home at six and have dinner with my family." }, drill: { jp: "Voltar a casa às seis", en: "Coming back home at six" }, accept: ["return", "come back", "go back", "to come back"], hint: "volto, voltas, volta. Voltar A plus an infinitive means to do something again — voltei a ler o livro, I read the book again. Portuguese prefers that to a word for again." },
      ],
    },
    {
      id: "pt-u21l3",
      unit: 21,
      lesson: 3,
      title: "À noite em casa",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say what you do at home in the evening, and use two more reflexive verbs correctly.",
      items: [
        { id: "pt-u21l3-cozinhar", type: "vocab", front: "cozinhar", reading: "cozinhar", meaning: "to cook", example: { jp: "O meu pai cozinha peixe todas as sextas-feiras.", en: "My father cooks fish every Friday." }, drill: { jp: "Cozinhar peixe à sexta-feira", en: "Cooking fish on Friday" }, accept: ["cook", "to do the cooking"], hint: "cozinho, cozinhas, cozinha. Built on a cozinha, the kitchen from Unit 15 — the room and the verb differ by one letter, so read the ending carefully." },
        { id: "pt-u21l3-arrumar", type: "vocab", front: "arrumar", reading: "arrumar", meaning: "to tidy", example: { jp: "Arrumei o quarto todo antes de os meus amigos chegarem.", en: "I tidied the whole bedroom before my friends arrived." }, drill: { jp: "Arrumar o quarto ao sábado", en: "Tidying the bedroom on Saturday" }, accept: ["tidy", "tidy up", "put away", "to sort out"], hint: "arrumo, arrumas, arruma. It is putting things in their place, where limpar from Unit 15 is making them clean. Portuguese keeps the two jobs separate." },
        { id: "pt-u21l3-deitarse", type: "vocab", front: "deitar-se", reading: "deitarse", meaning: "to lie down", example: { jp: "Deito-me sempre tarde e depois não me consigo levantar.", en: "I always go to bed late and then I can't get up." }, drill: { jp: "Deitar-se muito tarde hoje", en: "Going to bed very late today" }, accept: ["lie down", "go to bed", "to go to bed"], hint: "deito-me, deitas-te, deita-se — enclisis again. It is the pair to levantar-se: one ends the day, one starts it." },
        { id: "pt-u21l3-sentarse", type: "vocab", front: "sentar-se", reading: "sentarse", meaning: "to sit down", example: { jp: "Senta-te no sofá que eu faço um chá.", en: "Sit down on the sofa and I'll make some tea." }, drill: { jp: "Sentar-se no sofá da sala", en: "Sitting down on the living room sofa" }, accept: ["sit down", "take a seat", "to sit"], hint: "senta-te is the command form and you will hear it constantly. Note estar sentado is to BE seated — the verb is the movement, the adjective is the state." },
        { id: "pt-u21l3-olixo", type: "vocab", front: "o lixo", reading: "olixo", meaning: "rubbish", example: { jp: "Ponho o lixo na rua todas as noites antes de me deitar.", en: "I put the rubbish out every night before going to bed." }, drill: { jp: "O lixo está na cozinha", en: "The rubbish is in the kitchen" }, accept: ["the rubbish", "garbage", "trash", "the trash"], hint: "LEE-shu. Portugal says deitar o lixo fora for taking it out — the same deitar as deitar-se, here meaning to throw. Brazil says jogar o lixo." },
        { id: "pt-u21l3-arotina", type: "vocab", front: "a rotina", reading: "arotina", meaning: "routine", example: { jp: "A minha rotina mudou muito desde que comecei a trabalhar.", en: "My routine has changed a lot since I started working." }, drill: { jp: "A rotina de todos os dias", en: "The everyday routine" }, accept: ["the routine", "daily routine"], hint: "ro-TEE-na. A transparent word, but note the stress lands on the TI, not the RO — an unaccented word ending in -a takes the stress on the second-to-last syllable. An accent is what moves it: máquina, música." },
      ],
    },
    {
      id: "pt-u21l4",
      unit: 21,
      lesson: 4,
      title: "Ligar as ideias",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Join two sentences into one — give a reason, contrast, and offer an alternative — so your Portuguese stops stopping at every full stop.",
      items: [
        { id: "pt-u21l4-mas", type: "vocab", front: "mas", reading: "mas", meaning: "but", example: { jp: "Vou de comboio mas o autocarro é mais barato.", en: "I go by train but the bus is cheaper." }, drill: { jp: "Vou de comboio mas é caro", en: "I go by train but it is expensive" }, accept: ["however", "yet", "though"], hint: "MASH. The everyday contrast word. Do not confuse it with mais from Unit 1 — one letter apart, and in fast speech only the vowel separates them." },
        { id: "pt-u21l4-ou", type: "vocab", front: "ou", reading: "ou", meaning: "or", example: { jp: "Bebo café ou chá ao pequeno-almoço.", en: "I drink coffee or tea at breakfast." }, drill: { jp: "De comboio ou de autocarro", en: "By train or by bus" }, accept: ["either", "otherwise"], hint: "OH. Doubled it becomes either-or: ou de comboio ou de carro. Note it never takes an accent, unlike the French où." },
        { id: "pt-u21l4-entao", type: "vocab", front: "então", reading: "entao", meaning: "so", example: { jp: "Está frio, então fico em casa a ver um filme.", en: "It is cold, so I stay at home watching a film." }, drill: { jp: "Está frio então fico em casa", en: "It is cold so I stay at home" }, accept: ["then", "in that case", "well then"], hint: "en-TAWNG, two nasals. It concludes and it also opens a sentence conversationally — Então? on its own means so, what's happening?" },
        { id: "pt-u21l4-alemdisso", type: "vocab", front: "além disso", reading: "alemdisso", meaning: "besides", example: { jp: "O livro é caro e além disso é muito grande.", en: "The book is expensive and besides it is very big." }, drill: { jp: "É muito caro além disso", en: "It is very expensive besides that" }, accept: ["moreover", "furthermore", "in addition", "what's more"], hint: "a-LAING-dee-su. Literally beyond that. Além de is beyond or in addition to, and o Além is the hereafter — the same word doing heavy work." },
        { id: "pt-u21l4-noentanto", type: "vocab", front: "no entanto", reading: "noentanto", meaning: "however", example: { jp: "O exame foi difícil, no entanto a nota foi boa.", en: "The exam was hard, however the mark was good." }, drill: { jp: "É difícil no entanto é bom", en: "It is hard however it is good" }, accept: ["nevertheless", "nonetheless", "even so", "yet"], hint: "Three syllables and a fixed phrase. It is a shade more formal than mas and sits at the start of a clause, where mas joins two directly." },
        { id: "pt-u21l4-porisso", type: "vocab", front: "por isso", reading: "porisso", meaning: "that's why", example: { jp: "O comboio está cheio, por isso vou a pé.", en: "The train is full, so I am going on foot." }, drill: { jp: "Está cheio por isso vou hoje", en: "It is full so I am going today" }, accept: ["so", "therefore", "for that reason"], hint: "Built on por and isso from Unit 1. It is the everyday spoken cousin of portanto, which belongs more to writing." },
      ],
    },
  ],
};
