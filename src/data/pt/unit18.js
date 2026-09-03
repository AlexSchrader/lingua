// PT Unit 18 — O trabalho e o dinheiro (slot: coverage-4) — A1
// Work and money. Unit 1 gave o trabalho and o dinheiro as nouns and Unit 3 gave
// three professions; Unit 7 gave o escritório and o banco as buildings. None of
// that lets a learner say what they do, who they do it with, or what anything
// costs them. This unit closes work, the office, money and four more jobs.
//
// o trabalho (u1) is the NOUN; trabalhar here is the VERB, and its hint names the
// pair explicitly. That is not a duplicate — it is the same shape block 1 already
// used in Unit 3, which teaches estudar and o estudante side by side. A merge
// seat deduping on lexeme rather than string must keep both; see the hand-back.
//
// pt-PT markers carded here: o telemóvel (Brazil: o celular) and o ecrã (Brazil:
// a tela, which in Portugal means canvas). ligar was reserved for block 3 by the
// block brief and carries three senses at once — to phone, to switch on, to
// connect — plus the Spanish trap, where ligar means to flirt.
// Two gender-by-article cards close the unit: o/a colega, o/a motorista and
// o polícia (a policeman) against a polícia (the police force).
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT18 = {
  id: "pt-u18",
  lang: "pt",
  title: "O trabalho e o dinheiro",
  order: 18,
  stage: "a1",
  lessons: [
    {
      id: "pt-u18l1",
      unit: 18,
      lesson: 1,
      title: "No trabalho",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about a Portuguese workplace — say that you work, who you work with, who is in charge, and when the meeting is.",
      items: [
        { id: "pt-u18l1-trabalhar", type: "vocab", front: "trabalhar", reading: "trabalhar", meaning: "to work", example: { jp: "Trabalhar em Lisboa é fantástico.", en: "Working in Lisbon is fantastic." }, accept: ["work", "to have a job", "to labour"], hint: "tra-ba-LYAR, with the lh of o bilhete: trabalho, trabalhas, trabalha. The noun o trabalho from Unit 1 is the same word wearing a different hat — Portuguese pairs them exactly as it pairs estudar and o estudante in Unit 3. Working AT a place takes em." },
        { id: "pt-u18l1-aentrevista", type: "vocab", front: "a entrevista", reading: "aentrevista", meaning: "interview", example: { jp: "A entrevista de Ana é amanhã, às nove.", en: "Ana's interview is tomorrow, at nine." }, accept: ["the interview", "job interview"], hint: "en-tre-VISH-ta. A job interview and a press interview both. Take it apart and it is entre (between) plus a form of ver (to see) — a seeing-between, exactly the image inside English \"interview\"." },
        { id: "pt-u18l1-ochefe", type: "vocab", front: "o chefe", reading: "ochefe", meaning: "boss", example: { jp: "O chefe de Tiago é português.", en: "Tiago's boss is Portuguese." }, accept: ["the boss", "chief", "head", "manager"], hint: "SHE-fe, ch as sh. Boss, head or chief — and in a kitchen, the chef. The spelling does not change for a woman: a chefe, with only the article moving." },
        { id: "pt-u18l1-ocolega", type: "vocab", front: "o colega", reading: "ocolega", meaning: "colleague", example: { jp: "O colega de Ana também é médico.", en: "Ana's colleague is also a doctor." }, accept: ["the colleague", "workmate", "coworker", "co-worker"], hint: "ku-LE-ga. It ends in -a but takes o for a man: o colega, a colega. A small family of nouns works like this, where the article alone carries the gender. A schoolmate is um colega de turma, from Unit 17." },
        { id: "pt-u18l1-aempresa", type: "vocab", front: "a empresa", reading: "aempresa", meaning: "company", example: { jp: "A empresa é enorme e o escritório é em Lisboa.", en: "The company is enormous and the office is in Lisbon." }, accept: ["the company", "firm", "business", "enterprise"], hint: "em-PRE-za, s between vowels saying z. Any business at all. Do not let English \"enterprise\" pull it toward something grander — this is the everyday word, and Spanish empresa matches it exactly." },
        { id: "pt-u18l1-areuniao", type: "vocab", front: "a reunião", reading: "areuniao", meaning: "meeting", example: { jp: "A reunião de hoje é às dez.", en: "Today's meeting is at ten." }, accept: ["the meeting", "gathering"], hint: "rreu-ni-AWNG — opening on the strong throat-r of a rua and closing on the -ão nasal of o pão. The plural makes the õe swap from Unit 1: as reuniões." },
      ],
    },
    {
      id: "pt-u18l2",
      unit: 18,
      lesson: 2,
      title: "No escritório",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Use a Portuguese office — the computer, the screen and the phone — and say that you are calling someone or switching something off.",
      items: [
        { id: "pt-u18l2-ocomputador", type: "vocab", front: "o computador", reading: "ocomputador", meaning: "computer", example: { jp: "O computador do escritório é moderno.", en: "The office computer is modern." }, accept: ["the computer", "pc"], hint: "kom-pu-ta-DOR, stressed on that last syllable like almost every -or ending. A laptop is um portátil — literally \"a portable\" — and that is the word people actually use." },
        { id: "pt-u18l2-otelemovel", type: "vocab", front: "o telemóvel", reading: "otelemovel", meaning: "mobile phone", example: { jp: "O telemóvel de Ana é caro.", en: "Ana's mobile is expensive." }, accept: ["the mobile", "mobile", "cell phone", "cellphone", "phone"], hint: "PORTUGAL SAYS TELEMÓVEL — te-le-MO-vel, from tele plus móvel (mobile). Brazil says o celular and may not place this word at first. One word, and it takes o." },
        { id: "pt-u18l2-oecra", type: "vocab", front: "o ecrã", reading: "oecra", meaning: "screen", example: { jp: "O ecrã do computador é enorme.", en: "The computer screen is enormous." }, accept: ["the screen", "display", "monitor"], hint: "PORTUGAL SAYS ECRÃ — i-KRAN, closing on the nasal ã of a maçã, and borrowed straight from French écran. Brazil says a tela, which in Portugal means canvas or cloth. Plural: os ecrãs." },
        { id: "pt-u18l2-ligar", type: "vocab", front: "ligar", reading: "ligar", meaning: "to phone", example: { jp: "Ligar a Ana é importante hoje.", en: "Phoning Ana is important today." }, accept: ["to call", "call", "phone", "to switch on", "to turn on", "to connect"], hint: "li-GAR: ligo, ligas, liga. THREE jobs in one verb — to PHONE someone (ligar a Ana, with the a), to SWITCH ON a machine (ligar o computador), and to connect two things. Careful in Spain: Spanish ligar means to flirt or pick someone up." },
        { id: "pt-u18l2-desligar", type: "vocab", front: "desligar", reading: "desligar", meaning: "to switch off", example: { jp: "Desligar o computador e o telemóvel.", en: "To switch off the computer and the mobile." }, accept: ["switch off", "to turn off", "turn off", "to hang up", "to disconnect"], hint: "desh-li-GAR — ligar with des- bolted on the front, the prefix that reverses a verb the way English \"un-\" does. It turns machines off and hangs the phone up, and the pair ligar / desligar is one of the most useful in the language." },
        { id: "pt-u18l2-amensagem", type: "vocab", front: "a mensagem", reading: "amensagem", meaning: "message", example: { jp: "A mensagem de Tiago é importante.", en: "Tiago's message is important." }, accept: ["the message", "text", "text message", "note"], hint: "men-SA-zhem — g before e says zh. A text is uma mensagem or, universally, um SMS. The plural swaps the m for an n: as mensagens." },
      ],
    },
    {
      id: "pt-u18l3",
      unit: 18,
      lesson: 3,
      title: "Ganhar e gastar",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about money in Portuguese — earning it, spending it, saving it — and ask for the bill.",
      items: [
        { id: "pt-u18l3-ganhar", type: "vocab", front: "ganhar", reading: "ganhar", meaning: "to earn", example: { jp: "Trabalhar e ganhar dinheiro em Lisboa.", en: "To work and earn money in Lisbon." }, accept: ["earn", "to win", "win", "to gain"], hint: "ga-NYAR, with nh: ganho, ganhas, ganha. One verb for earning money AND winning a game — ganhar o jogo — so payday and the football result share a word." },
        { id: "pt-u18l3-gastar", type: "vocab", front: "gastar", reading: "gastar", meaning: "to spend", example: { jp: "Gastar dinheiro na loja de roupa.", en: "To spend money in the clothes shop." }, accept: ["spend", "to use up", "to waste"], hint: "gash-TAR: gasto, gastas, gasta. Money and time both — gastar dinheiro, gastar tempo. Spanish gastar is the same verb doing the same job, so this one carries over intact. Its opposite is poupar, next." },
        { id: "pt-u18l3-poupar", type: "vocab", front: "poupar", reading: "poupar", meaning: "to save", example: { jp: "Poupar dinheiro é importante.", en: "Saving money is important." }, accept: ["save", "to save up", "to economise", "to economize"], hint: "POH-par: poupo, poupas, poupa — ou is a single \"oh\" sound. Spanish offers no help here at all, since it says ahorrar, so poupar has to be learned outright. Savings are as poupanças." },
        { id: "pt-u18l3-osalario", type: "vocab", front: "o salário", reading: "osalario", meaning: "salary", example: { jp: "O salário do médico não é o salário do professor.", en: "The doctor's salary isn't the teacher's salary." }, accept: ["the salary", "wage", "pay", "wages"], hint: "sa-LA-riu, the -ário ending once more. Portugal says o ordenado just as often for the same thing, and o vencimento on official paperwork. The minimum wage is o salário mínimo." },
        { id: "pt-u18l3-aconta", type: "vocab", front: "a conta", reading: "aconta", meaning: "bill", example: { jp: "A conta, por favor!", en: "The bill, please!" }, accept: ["the bill", "account", "check", "the check", "bank account"], hint: "KON-ta. Memorise the whole sentence — a conta, por favor — because it is how every Portuguese meal ends. It is also a bank account (uma conta no banco), and the verb contar means both to count and to tell a story." },
        { id: "pt-u18l3-afatura", type: "vocab", front: "a fatura", reading: "afatura", meaning: "invoice", example: { jp: "A fatura da loja é de dez euros.", en: "The shop's invoice is ten euros." }, accept: ["the invoice", "receipt", "the receipt", "bill"], hint: "fa-TU-ra. You will be asked fatura com contribuinte? at almost every till in the country — whether to print your tax number on the receipt, which is a genuinely national habit. Note the post-1990 spelling: fatura, no c." },
      ],
    },
    {
      id: "pt-u18l4",
      unit: 18,
      lesson: 4,
      title: "As profissões",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Name more Portuguese jobs than Unit 3 gave you — and spot the ones where the article, not the ending, tells you who is meant.",
      items: [
        { id: "pt-u18l4-oempregado", type: "vocab", front: "o empregado", reading: "oempregado", meaning: "employee", example: { jp: "O empregado do restaurante é de Braga.", en: "The restaurant's waiter is from Braga." }, accept: ["the employee", "waiter", "the waiter", "worker", "staff"], hint: "em-pre-GA-du. An employee — and crucially the WAITER, o empregado de mesa, the person you actually address in every Portuguese café. The feminine a empregada, standing alone, usually means a cleaner." },
        { id: "pt-u18l4-ocozinheiro", type: "vocab", front: "o cozinheiro", reading: "ocozinheiro", meaning: "cook", example: { jp: "O cozinheiro do restaurante é famoso.", en: "The restaurant's cook is famous." }, accept: ["the cook", "chef"], hint: "ku-zi-NYAY-ru. Straight out of a cozinha in Unit 15: the kitchen, the verb cozinhar, and here the person. The feminine is a cozinheira; a celebrity chef gets called o chefe instead." },
        { id: "pt-u18l4-oengenheiro", type: "vocab", front: "o engenheiro", reading: "oengenheiro", meaning: "engineer", example: { jp: "O engenheiro é o pai de Tiago.", en: "The engineer is Tiago's father." }, accept: ["the engineer"], hint: "en-zhe-NYAY-ru, carrying the same -eiro ending as o cozinheiro — the suffix that turns a thing into the person who works with it. Portugal puts Engenheiro in front of the name as a title, exactly as it does Doutor." },
        { id: "pt-u18l4-oadvogado", type: "vocab", front: "o advogado", reading: "oadvogado", meaning: "lawyer", example: { jp: "A mãe de Ana é advogada em Coimbra.", en: "Ana's mother is a lawyer in Coimbra." }, accept: ["the lawyer", "attorney", "solicitor", "barrister"], hint: "ad-vu-GA-du, and the d really is pronounced — Spanish abogado softens it away and drops the v entirely. The feminine is a advogada, and a law degree here is o curso de Direito." },
        { id: "pt-u18l4-omotorista", type: "vocab", front: "o motorista", reading: "omotorista", meaning: "driver", example: { jp: "O motorista do autocarro é de Lisboa.", en: "The bus driver is from Lisbon." }, accept: ["the driver", "chauffeur"], hint: "mu-tu-RISH-ta. Another noun ending in -a that is MASCULINE for a man: o motorista, a motorista. The -ista ending behaves this way across the board — o dentista, o turista. This is the professional driver; whoever happens to be at the wheel is o condutor." },
        { id: "pt-u18l4-opolicia", type: "vocab", front: "o polícia", reading: "opolicia", meaning: "policeman", example: { jp: "O polícia de Braga é o tio de Ana.", en: "The Braga policeman is Ana's uncle." }, accept: ["the policeman", "police officer", "officer", "cop"], hint: "pu-LEE-sia. THE ARTICLE CHANGES WHAT IT MEANS: o polícia is one policeman, a polícia is the police force itself. Same spelling, and only o or a tells you whether you mean a person or an institution. Portugal's two forces are the PSP in the cities and the GNR outside them." },
      ],
    },
  ],
};
