// PT Unit 67 — A saúde e o bem-estar (slot: health) — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 2, unit 4 of 13. u11 owns the body and the everyday complaint (a dor,
// a febre, a gripe, o remédio, a consulta, doente) and u25 owns the A2 clinical
// layer — and it is already deep: o tratamento, a vacina, a análise, a urgência,
// a ambulância, o enfermeiro, saudável, o exercício, a dieta, melhorar, piorar,
// curar. NOTHING from either list is re-carded here; the crew ruling that a B1
// slot takes the abstract/process layer of a domain applies to this unit more
// than any other in the block.
//
// So this unit is the layer above both: naming an illness rather than a
// symptom, what a course of treatment does over time, the mind as well as the
// body, and the habits that decide all of it.
//
// A GAP FIXED HERE, not invented: `a doença` — illness itself — is taught by NO
// unit in u1-u50, even though u25's own title is "A saúde e a doença". Same
// class as `a comida`, `a vida` and `vender`: a word the corpus uses and never
// cards. This is the lowest slot in the band that wants it, so it is carded in
// lesson 1 and listed for the lead in the hand-back.
//
// Deliberate boundaries:
//   - u25 owns `curar` (the verb). This unit cards `a cura` (the thing) and
//     `recuperar` (the process the patient goes through), which are three
//     different ideas, and each hint names the others.
//   - u11's `o remédio` and `a receita` are used in examples and carded nowhere.
//   - `o stress` keeps the English spelling because that is what Portugal
//     writes; the hint gives the pronunciation, which is not the English one.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT67 = {
  id: "pt-u67",
  lang: "pt",
  title: "A saúde e o bem-estar",
  order: 67,
  stage: "b1",
  lessons: [
    {
      id: "pt-u67l1",
      unit: 67,
      lesson: 1,
      title: "Os sintomas e o diagnóstico",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe an illness rather than a single ache — how serious it is, how long it lasts, and what the doctor concluded.",
      items: [
        { id: "pt-u67l1-adoenca", type: "vocab", front: "a doença", reading: "adoenca", meaning: "illness", example: { jp: "A doença começou devagar, no entanto em dois meses já não conseguia trabalhar.", en: "The illness began slowly; however, within two months he could no longer work." }, drill: { jp: "A doença começou devagar", en: "The illness began slowly" }, accept: ["illness", "disease", "sickness", "the illness"], hint: "du-EN-suh. The noun behind doente (u11), which you already have as the adjective: estou doente is how you feel, uma doença is what you have. Estar com uma doença and ter uma doença are both ordinary." },
        { id: "pt-u67l1-osintoma", type: "vocab", front: "o sintoma", reading: "osintoma", meaning: "symptom", example: { jp: "O primeiro sintoma foi uma dor nas costas, mas o médico só descobriu tudo depois das análises.", en: "The first symptom was a pain in the back, but the doctor only found everything out after the tests." }, drill: { jp: "O sintoma começou com uma dor", en: "The symptom started with a pain" }, accept: ["symptom", "the symptom", "sign"], hint: "seen-TOH-muh. Masculine despite the -a, like o problema and o sistema — Greek nouns in Portuguese keep their gender. Plural os sintomas." },
        { id: "pt-u67l1-odiagnostico", type: "vocab", front: "o diagnóstico", reading: "odiagnostico", meaning: "diagnosis", example: { jp: "O diagnóstico demorou três semanas, por isso o tratamento começou tarde.", en: "The diagnosis took three weeks, so the treatment started late." }, drill: { jp: "O diagnóstico demorou três semanas", en: "The diagnosis took three weeks" }, accept: ["diagnosis", "the diagnosis"], hint: "dee-ag-NOSH-tee-ku. Stress on the ó. The verb is diagnosticar, but in speech Portugal more often says o médico descobriu que…" },
        { id: "pt-u67l1-grave", type: "vocab", front: "grave", reading: "grave", meaning: "serious (severe)", example: { jp: "O problema não é grave, mas o médico quer ver o doente outra vez na próxima semana.", en: "The problem is not serious, but the doctor wants to see the patient again next week." }, drill: { jp: "O problema não é grave", en: "The problem is not serious" }, accept: ["serious", "severe", "grave"], hint: "GRAH-vuh. Same form for both genders. Used of illness, of accidents and of problems — and of a low voice, which is the musical sense. Não é nada de grave is the phrase a Portuguese doctor uses to reassure you." },
        { id: "pt-u67l1-cronico", type: "vocab", front: "crónico", reading: "cronico", meaning: "chronic", example: { jp: "A dor crónica muda a vida toda, por isso o hospital tem uma consulta só para isso.", en: "Chronic pain changes your whole life, which is why the hospital has a clinic just for it." }, drill: { jp: "O stress crónico muda a vida", en: "Chronic stress changes your life" }, accept: ["chronic", "long-term"], hint: "KROH-nee-ku; feminine crónica. Portugal writes crónico with ó, Brazil crônico with ô — the accent is the whole difference. Note a crónica, the newspaper column, is a different word with the same shape." },
        { id: "pt-u67l1-agravarse", type: "vocab", front: "agravar-se", reading: "agravarse", meaning: "to get worse (an illness)", example: { jp: "A doença pode agravar-se no inverno, além disso os hospitais estão sempre cheios nessa altura.", en: "The illness can get worse in winter; what is more, the hospitals are always full at that time." }, drill: { jp: "A doença pode agravar-se no inverno", en: "The illness can get worse in winter" }, accept: ["get worse", "to worsen", "deteriorate"], hint: "a-gra-VAR-suh. Built on grave. The reflexive -se is what makes it happen BY ITSELF; agravar without it is to make something worse. Piorar (u25) is the everyday word; agravar-se is what the news and the doctor say." },
      ],
    },
    {
      id: "pt-u67l2",
      unit: 67,
      lesson: 2,
      title: "O tratamento e a recuperação",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow a course of treatment through time — the operation, the pills, the recovery, and the prevention afterwards.",
      items: [
        { id: "pt-u67l2-acirurgia", type: "vocab", front: "a cirurgia", reading: "acirurgia", meaning: "surgery", example: { jp: "A cirurgia correu bem, no entanto o médico quer esperar mais uma semana antes de dizer alguma coisa.", en: "The surgery went well; however, the doctor wants to wait another week before saying anything." }, drill: { jp: "A cirurgia correu bem", en: "The surgery went well" }, accept: ["surgery", "operation", "the operation"], hint: "see-roor-ZHEE-uh. The operation and the discipline. In speech Portugal says uma operação just as often; a cirurgia is the word on the letter from the hospital." },
        { id: "pt-u67l2-operar", type: "vocab", front: "operar", reading: "operar", meaning: "to operate", example: { jp: "O hospital vai operar amanhã de manhã, por isso o doente não pode comer nada esta noite.", en: "The hospital is going to operate tomorrow morning, so the patient cannot eat anything tonight." }, drill: { jp: "O hospital vai operar amanhã", en: "The hospital is going to operate tomorrow" }, accept: ["operate", "to have surgery", "perform surgery"], hint: "u-pe-RAR. Ser operado is what happens TO you — fui operado ao joelho. The doctor operates, the patient é operado, and Portuguese keeps those two apart." },
        { id: "pt-u67l2-recuperar", type: "vocab", front: "recuperar", reading: "recuperar", meaning: "to recover", example: { jp: "O doente vai recuperar em casa, mas precisa de descanso durante um mês.", en: "The patient is going to recover at home, but needs rest for a month." }, drill: { jp: "O doente vai recuperar em casa", en: "The patient is going to recover at home" }, accept: ["recover", "to get better", "recuperate"], hint: "rre-ku-pe-RAR. Also to recover a thing — recuperei o telemóvel. Curar (u25) is what the medicine does to the illness; recuperar is what the person does afterwards." },
        { id: "pt-u67l2-ocomprimido", type: "vocab", front: "o comprimido", reading: "ocomprimido", meaning: "pill", example: { jp: "Este comprimido é para a dor, no entanto não se pode tomar mais de três por dia.", en: "This pill is for the pain; however, you cannot take more than three a day." }, drill: { jp: "O comprimido é para a dor", en: "The pill is for the pain" }, accept: ["pill", "tablet", "the pill"], hint: "kom-pree-MEE-du. The little round one. O remédio (u11) is medicine in general, and a farmácia (u7) is where both come from." },
        { id: "pt-u67l2-prevenir", type: "vocab", front: "prevenir", reading: "prevenir", meaning: "to prevent (illness)", example: { jp: "É mais fácil prevenir do que curar, por isso o centro de saúde chama toda a gente uma vez por ano.", en: "It is easier to prevent than to cure, which is why the health centre calls everyone in once a year." }, drill: { jp: "É mais fácil prevenir do que curar", en: "It is easier to prevent than to cure" }, accept: ["prevent", "to avoid", "ward off"], hint: "pre-ve-NEER. Irregular eu form — eu previno. Mais vale prevenir que remediar is the Portuguese proverb behind this card, and you will hear it." },
        { id: "pt-u67l2-acura", type: "vocab", front: "a cura", reading: "acura", meaning: "cure", example: { jp: "Ainda não há cura para esta doença, mas os médicos conseguem tratar quase todos os sintomas.", en: "There is still no cure for this illness, but doctors can treat almost all the symptoms." }, drill: { jp: "A cura desta doença ainda não chegou", en: "The cure for this illness has not arrived yet" }, accept: ["cure", "the cure", "healing"], hint: "KOO-ruh. The noun of curar (u25). Não tem cura is the blunt phrase; tem tratamento — it can be treated — is the one doctors prefer." },
      ],
    },
    {
      id: "pt-u67l3",
      unit: 67,
      lesson: 3,
      title: "A cabeça e o sono",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about mental health and rest — pressure, worry, sleeping badly, and what actually helps.",
      items: [
        { id: "pt-u67l3-ostress", type: "vocab", front: "o stress", reading: "ostress", meaning: "stress", example: { jp: "O stress do trabalho pode agravar-se com o tempo, por isso a empresa mudou os horários.", en: "Work stress can get worse over time, so the company changed the schedules." }, drill: { jp: "O stress do trabalho pode agravar-se", en: "Work stress can get worse" }, accept: ["stress", "the stress"], hint: "shtress, with the Portuguese sh- in front. Portugal keeps the English spelling; Brazil writes estresse. Stressado is the everyday adjective — ando muito stressado." },
        { id: "pt-u67l3-ainsonia", type: "vocab", front: "a insónia", reading: "ainsonia", meaning: "insomnia", example: { jp: "A insónia começou com o stress do novo emprego, além disso o café à noite não ajudou nada.", en: "The insomnia began with the stress of the new job; what is more, coffee at night did not help at all." }, drill: { jp: "A insónia começou com o stress", en: "The insomnia began with the stress" }, accept: ["insomnia", "sleeplessness", "the insomnia"], hint: "een-SOH-nyuh — Portugal's ó, where Brazil writes insônia. Ter insónias, plural, is how most people say it about themselves." },
        { id: "pt-u67l3-odescanso", type: "vocab", front: "o descanso", reading: "odescanso", meaning: "rest", example: { jp: "O descanso é parte do tratamento, mas quase ninguém consegue descansar uma semana inteira.", en: "Rest is part of the treatment, but almost nobody manages to rest for a whole week." }, drill: { jp: "O descanso é parte do tratamento", en: "Rest is part of the treatment" }, accept: ["rest", "the rest", "break"], hint: "desh-KAN-su. The noun of descansar (u11). Um dia de descanso is a day off; o descanso do jogo is half-time." },
        { id: "pt-u67l3-obemestar", type: "vocab", front: "o bem-estar", reading: "obemestar", meaning: "wellbeing", example: { jp: "O bem-estar não é só o corpo, por isso as consultas falam também do sono e do trabalho.", en: "Wellbeing is not only the body, which is why appointments also cover sleep and work." }, drill: { jp: "O bem-estar não é só o corpo", en: "Wellbeing is not only the body" }, accept: ["wellbeing", "welfare", "the wellbeing", "comfort"], hint: "baym-shtar. Hyphenated, and the hyphen disappears in the ASCII answer key. Literally \"well-being\", built exactly as in English, and the opposite is o mal-estar — feeling off, physically or socially." },
        { id: "pt-u67l3-cuidar", type: "vocab", front: "cuidar", reading: "cuidar", meaning: "to look after", example: { jp: "Ela cuida da mãe desde o ano passado, no entanto continua a trabalhar todos os dias.", en: "She has been looking after her mother since last year; however, she continues to work every day." }, drill: { jp: "Ela vai cuidar da mãe", en: "She is going to look after her mother" }, accept: ["look after", "to care for", "take care of"], hint: "kwee-DAR. Takes de: cuidar DE alguém, never cuidar alguém. Cuidar-se, reflexive, is to look after yourself — tem de se cuidar is what your family will tell you." },
        { id: "pt-u67l3-aterapia", type: "vocab", front: "a terapia", reading: "aterapia", meaning: "therapy", example: { jp: "Começou a terapia depois da doença do pai, e hoje dorme muito melhor.", en: "He started therapy after his father's illness, and today he sleeps much better." }, drill: { jp: "Começou a terapia depois da doença", en: "He started therapy after the illness" }, accept: ["therapy", "the therapy", "treatment", "counselling"], hint: "te-ruh-PEE-uh. Talking therapy and physical therapy alike; the person is o terapeuta, same form for both genders. Portugal says andar na terapia for being in treatment." },
      ],
    },
    {
      id: "pt-u67l4",
      unit: 67,
      lesson: 4,
      title: "Os hábitos e o risco",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Discuss habits that affect health — smoking, dependence, weight — and talk about older people's care without sounding clinical.",
      items: [
        { id: "pt-u67l4-fumar", type: "vocab", front: "fumar", reading: "fumar", meaning: "to smoke", example: { jp: "Deixou de fumar há dois anos, por isso dorme muito melhor agora.", en: "He gave up smoking two years ago, so he sleeps much better now." }, drill: { jp: "Deixou de fumar há dois anos", en: "He gave up smoking two years ago" }, accept: ["smoke", "to smoke"], hint: "fu-MAR. Deixar de fumar is to quit — the deixar de + infinitive pattern is worth keeping for anything you stop doing. O fumo (u47) is the smoke itself." },
        { id: "pt-u67l4-ovicio", type: "vocab", front: "o vício", reading: "ovicio", meaning: "bad habit", example: { jp: "O café é o vício dele, mas bebe seis por dia e dorme mal.", en: "Coffee is his vice, but he drinks six a day and sleeps badly." }, drill: { jp: "O vício dele é o café", en: "His vice is coffee" }, accept: ["vice", "addiction", "the habit", "bad habit"], hint: "VEE-syu. Lighter than English \"vice\" — a vício can be chocolate. For the medical sense Portuguese uses a dependência, the next card." },
        { id: "pt-u67l4-adependencia", type: "vocab", front: "a dependência", reading: "adependencia", meaning: "dependence", example: { jp: "A dependência do jogo é uma doença, no entanto muitas famílias ainda falam disso como um problema pequeno.", en: "Gambling dependence is an illness; many families, however, still talk about it as a small problem." }, drill: { jp: "A dependência do jogo é uma doença", en: "Gambling dependence is an illness" }, accept: ["dependence", "addiction", "the dependency"], hint: "de-pen-DEN-syuh. Takes de. Also a room: a dependência of a house is an outbuilding, and as dependências of a company are its premises." },
        { id: "pt-u67l4-engordar", type: "vocab", front: "engordar", reading: "engordar", meaning: "to put on weight", example: { jp: "Engordou dois quilos no inverno, mas não está preocupado com isso.", en: "He put on two kilos over the winter, but he is not worried about it." }, drill: { jp: "Não quero engordar este inverno", en: "I do not want to put on weight this winter" }, accept: ["put on weight", "gain weight", "to fatten"], hint: "en-gor-DAR. From gordo, fat. Also said of food: o pão engorda — bread is fattening, with the food as the subject, which English cannot do." },
        { id: "pt-u67l4-emagrecer", type: "vocab", front: "emagrecer", reading: "emagrecer", meaning: "to lose weight", example: { jp: "Emagreceu sem dieta nenhuma, porque começou a ir a pé para o trabalho.", en: "He lost weight without any diet at all, because he started walking to work." }, drill: { jp: "Ele quer emagrecer sem dieta nenhuma", en: "He wants to lose weight without any diet" }, accept: ["lose weight", "to slim", "get thinner"], hint: "e-ma-gre-SER. From magro, thin — the pair of engordar. Portugal says perder peso too, but emagrecer is the one verb that does the whole job." },
        { id: "pt-u67l4-oidoso", type: "vocab", front: "o idoso", reading: "oidoso", meaning: "elderly person", example: { jp: "Os idosos da aldeia vivem sozinhos quase todo o ano, por isso o centro de saúde vai lá uma vez por semana.", en: "The village's elderly people live alone almost all year, so the health centre goes there once a week." }, drill: { jp: "O idoso da aldeia vive sozinho", en: "The elderly man in the village lives alone" }, accept: ["elderly person", "old person", "the elderly", "senior"], hint: "ee-DOH-zu; feminine a idosa. The respectful word — velho about a person can sound blunt, though it is normal about things. Os idosos as a group is what policy and the news use." },
      ],
    },
  ],
};
