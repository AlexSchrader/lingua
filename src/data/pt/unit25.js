// PT Unit 25 — A saúde e a doença — A2
// Portuguese A2, block 1 (units 21-30). Conventions, the pt-PT corpus decision and
// the Spanish-trap policy are in the header of unit1.js and bind this file too.
// Every vocab item carries a `drill` authored inline beside its `example`
// (RUNBOOK §4): 3-8 tokens, no punctuation, the item's own front inside it as a
// whole word. Verified against cardRouting.js canCloze/canSentence, not the lint.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT25 = {
  id: "pt-u25",
  lang: "pt",
  title: "A saúde e a doença",
  order: 25,
  stage: "a2",
  lessons: [
    {
      id: "pt-u25l1",
      unit: 25,
      lesson: 1,
      title: "Mais partes do corpo",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the parts of the body Unit 11 left out, and say which one hurts.",
      items: [
        { id: "pt-u25l1-odente", type: "vocab", front: "o dente", reading: "odente", meaning: "tooth", example: { jp: "Partiu um dente a comer pão e foi logo ao médico.", en: "He broke a tooth eating bread and went straight to the doctor." }, drill: { jp: "O dente partiu-se a comer", en: "The tooth broke while eating" }, accept: ["the tooth", "teeth"], hint: "DEN-te, nasal. Plural os dentes. o dentista treats them, and like o turista it takes either article depending on the person." },
        { id: "pt-u25l1-oouvido", type: "vocab", front: "o ouvido", reading: "oouvido", meaning: "ear", example: { jp: "Tenho uma dor de ouvido desde que fui nadar.", en: "I've had an earache since I went swimming." }, drill: { jp: "O ouvido dói muito hoje", en: "The ear hurts a lot today" }, accept: ["the ear", "hearing", "inner ear"], hint: "oh-VEE-du, from ouvir in Unit 19. Portuguese splits the ear in two: o ouvido is the inner ear you hear with, a orelha is the flap you can see." },
        { id: "pt-u25l1-ojoelho", type: "vocab", front: "o joelho", reading: "ojoelho", meaning: "knee", example: { jp: "Magoei o joelho a correr no jardim e agora custa-me andar.", en: "I hurt my knee running in the garden and now walking is hard." }, drill: { jp: "O joelho dói quando corro", en: "The knee hurts when I run" }, accept: ["the knee", "knees"], hint: "zho-A-lyu — the zh of measure, then the lh from Unit 1. De joelhos means kneeling." },
        { id: "pt-u25l1-oombro", type: "vocab", front: "o ombro", reading: "oombro", meaning: "shoulder", example: { jp: "Depois de carregar a mala todo o dia dói-me o ombro.", en: "After carrying the suitcase all day my shoulder hurts." }, drill: { jp: "O ombro está muito mau", en: "The shoulder is very bad" }, accept: ["the shoulder", "shoulders"], hint: "OM-bru, nasal first syllable. Encolher os ombros is to shrug — literally to shrink the shoulders." },
        { id: "pt-u25l1-ascostas", type: "vocab", front: "as costas", reading: "ascostas", meaning: "back", example: { jp: "As costas doem-me sempre quando durmo mal.", en: "My back always hurts when I sleep badly." }, drill: { jp: "As costas doem-me todos os dias", en: "My back hurts every day" }, accept: ["the back", "one's back"], hint: "ALWAYS PLURAL — as costas, never a costa, because a costa in the singular is the coastline. Portuguese treats the back as a set of parts." },
        { id: "pt-u25l1-opescoco", type: "vocab", front: "o pescoço", reading: "opescoco", meaning: "neck", example: { jp: "Adormeci no comboio e acordei com o pescoço todo torto.", en: "I fell asleep on the train and woke up with a crick in my neck." }, drill: { jp: "O pescoço dói muito hoje", en: "The neck hurts a lot today" }, accept: ["the neck"], hint: "pesh-KO-su, cedilla before the o. Note the s sounds: the first is sh, the ç is a hard s. One short word, two of Unit 1's rules." },
      ],
    },
    {
      id: "pt-u25l2",
      unit: 25,
      lesson: 2,
      title: "Quando dói",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Describe a symptom at a Portuguese pharmacy or surgery precisely enough to be helped.",
      items: [
        { id: "pt-u25l2-agarganta", type: "vocab", front: "a garganta", reading: "agarganta", meaning: "throat", example: { jp: "Tenho a garganta inflamada e quase não consigo falar.", en: "I have an inflamed throat and can hardly speak." }, drill: { jp: "A garganta dói muito", en: "The throat hurts a lot" }, accept: ["the throat", "sore throat"], hint: "gar-GAN-ta, nasal middle. Dor de garganta is a sore throat and is what you say at the pharmacy — the same dor de frame as dor de cabeça." },
        { id: "pt-u25l2-aalergia", type: "vocab", front: "a alergia", reading: "aalergia", meaning: "allergy", example: { jp: "Tenho uma alergia ao pó e espirro sempre na primavera.", en: "I have a dust allergy and always sneeze in spring." }, drill: { jp: "A alergia da primavera é forte", en: "The spring allergy is strong" }, accept: ["the allergy", "allergies"], hint: "a-ler-ZHEE-a, stress on the GI. Ser alérgico A something is the adjective frame — sou alérgico a gatos." },
        { id: "pt-u25l2-aferida", type: "vocab", front: "a ferida", reading: "aferida", meaning: "wound", example: { jp: "A ferida ainda não fechou, é melhor voltar ao hospital.", en: "The wound still hasn't closed, it is better to go back to the hospital." }, drill: { jp: "A ferida do braço é grande", en: "The arm wound is big" }, accept: ["the wound", "injury", "cut", "sore"], hint: "fe-REE-da. From ferir, to wound. Note it is a physical wound; for a feeling you would say magoado, from the verb in this same lesson." },
        { id: "pt-u25l2-magoarse", type: "vocab", front: "magoar-se", reading: "magoarse", meaning: "to hurt oneself", example: { jp: "Magoei-me no braço quando caí da bicicleta.", en: "I hurt my arm when I fell off the bike." }, drill: { jp: "Magoar-se no braço a correr", en: "Hurting your arm while running" }, accept: ["hurt oneself", "get hurt", "to get hurt", "injure oneself"], hint: "ma-gwar-se. It covers physical and emotional hurt alike — magoaste-me can mean you hurt my arm or my feelings, and Portuguese does not separate them." },
        { id: "pt-u25l2-atosse", type: "vocab", front: "a tosse", reading: "atosse", meaning: "cough", example: { jp: "A tosse não me deixou dormir a noite toda.", en: "The cough didn't let me sleep all night." }, drill: { jp: "A tosse não me deixa dormir", en: "The cough won't let me sleep" }, accept: ["the cough", "coughing"], hint: "TO-se, double s so a hard s — the rule from Unit 1. The verb is tossir. Xarope para a tosse is cough syrup, which is what the pharmacy will offer." },
        { id: "pt-u25l2-osangue", type: "vocab", front: "o sangue", reading: "osangue", meaning: "blood", example: { jp: "O médico pediu uma análise ao sangue antes do tratamento.", en: "The doctor asked for a blood test before the treatment." }, drill: { jp: "O sangue foi analisado no hospital", en: "The blood was analysed at the hospital" }, accept: ["the blood"], hint: "SAN-ge, nasal, and the gue is a hard g with a silent u — the same trick as in português. Sangrar is to bleed." },
      ],
    },
    {
      id: "pt-u25l3",
      unit: 25,
      lesson: 3,
      title: "Na urgência",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Get treated in a Portuguese hospital — go to A&E, be seen by a nurse, and understand what happens next.",
      items: [
        { id: "pt-u25l3-aurgencia", type: "vocab", front: "a urgência", reading: "aurgencia", meaning: "A&E", example: { jp: "Fomos à urgência às três da manhã e esperámos quatro horas.", en: "We went to A&E at three in the morning and waited four hours." }, drill: { jp: "A urgência esteve cheia toda a noite", en: "A&E was full all night" }, accept: ["the emergency room", "emergency", "A and E", "casualty", "urgency"], hint: "ur-ZHEN-sia. In a Portuguese hospital the sign says Urgência, and you are triaged by colour — the Manchester system — so the wait depends on the band, not the queue." },
        { id: "pt-u25l3-aambulancia", type: "vocab", front: "a ambulância", reading: "aambulancia", meaning: "ambulance", example: { jp: "A ambulância chegou em dez minutos e levou-o ao hospital.", en: "The ambulance arrived in ten minutes and took him to hospital." }, drill: { jp: "A ambulância chegou em dez minutos", en: "The ambulance arrived in ten minutes" }, accept: ["the ambulance"], hint: "am-bu-LAN-sia. The emergency number across Portugal and the whole of Europe is 112, and it is worth knowing before you need it." },
        { id: "pt-u25l3-oenfermeiro", type: "vocab", front: "o enfermeiro", reading: "oenfermeiro", meaning: "nurse", example: { jp: "O enfermeiro explicou-me como tomar o remédio.", en: "The nurse explained to me how to take the medicine." }, drill: { jp: "O enfermeiro explicou o tratamento", en: "The nurse explained the treatment" }, accept: ["the nurse", "male nurse"], hint: "en-fer-MAY-ru, and it agrees: a enfermeira. From enfermo, ill — the same root as English infirm and infirmary." },
        { id: "pt-u25l3-avacina", type: "vocab", front: "a vacina", reading: "avacina", meaning: "vaccine", example: { jp: "A vacina da gripe é gratuita para as pessoas mais velhas.", en: "The flu vaccine is free for older people." }, drill: { jp: "A vacina da gripe é boa", en: "The flu vaccine is good" }, accept: ["the vaccine", "vaccination", "jab"], hint: "va-SEE-na, soft c. Note the article stays: a vacina DA gripe, the flu's vaccine, where English drops the of. Vacinar-se is to get vaccinated." },
        { id: "pt-u25l3-aanalise", type: "vocab", front: "a análise", reading: "aanalise", meaning: "test", example: { jp: "A análise mostrou que estava tudo bem e fui para casa.", en: "The test showed that everything was fine and I went home." }, drill: { jp: "A análise do sangue é boa", en: "The blood test is good" }, accept: ["the test", "analysis", "blood test", "the analysis"], hint: "a-NA-li-ze, stressed on the NA — the accent says so. Análises ao sangue is what the doctor writes down; the plural is what you will actually see." },
        { id: "pt-u25l3-otratamento", type: "vocab", front: "o tratamento", reading: "otratamento", meaning: "treatment", example: { jp: "O tratamento dura três semanas e depois faço nova análise.", en: "The treatment lasts three weeks and then I have another test." }, drill: { jp: "O tratamento do médico é bom", en: "The doctor's treatment is good" }, accept: ["the treatment", "course of treatment", "therapy"], hint: "tra-ta-MEN-tu, from tratar. Tratar DE alguém is to look after someone, and o tratamento is what results." },
      ],
    },
    {
      id: "pt-u25l4",
      unit: 25,
      lesson: 4,
      title: "Estar saudável",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Talk about staying well — exercise, diet, and whether things are getting better or worse.",
      items: [
        { id: "pt-u25l4-saudavel", type: "vocab", front: "saudável", reading: "saudavel", meaning: "healthy", example: { jp: "Comer peixe e legumes todos os dias é muito saudável.", en: "Eating fish and vegetables every day is very healthy." }, drill: { jp: "Comer peixe é muito saudável", en: "Eating fish is very healthy" }, accept: ["health", "wholesome", "good for you"], hint: "sau-DA-vel, built on saúde from Unit 2. One form for both genders since it ends in -l; the plural is saudáveis. Note it describes the habit, not the person — a person is bem de saúde." },
        { id: "pt-u25l4-oexercicio", type: "vocab", front: "o exercício", reading: "oexercicio", meaning: "exercise", example: { jp: "O médico disse que preciso de mais exercício e menos açúcar.", en: "The doctor said I need more exercise and less sugar." }, drill: { jp: "O exercício faz bem ao coração", en: "Exercise is good for the heart" }, accept: ["the exercise", "workout", "physical exercise"], hint: "e-zer-SEE-siu — the x here says z, as it does in exame. Fazer exercício is the verb frame; it also means a school exercise." },
        { id: "pt-u25l4-adieta", type: "vocab", front: "a dieta", reading: "adieta", meaning: "diet", example: { jp: "Estou a fazer dieta desde janeiro mas ainda como bolo ao domingo.", en: "I've been on a diet since January but I still eat cake on Sundays." }, drill: { jp: "A dieta começou em janeiro", en: "The diet began in January" }, accept: ["the diet", "eating plan"], hint: "di-E-ta. Estar a fazer dieta is the pt-PT progressive again. It means a slimming diet here, more often than the neutral sense of what one eats." },
        { id: "pt-u25l4-melhorar", type: "vocab", front: "melhorar", reading: "melhorar", meaning: "to improve", example: { jp: "O tempo melhorou e conseguimos ir à praia.", en: "The weather improved and we managed to go to the beach." }, drill: { jp: "O tempo vai melhorar amanhã", en: "The weather is going to improve tomorrow" }, accept: ["improve", "get better", "to get better", "recover"], hint: "me-lyo-RAR, built on melhor from Unit 11 with the lh. For health it means to recover — o doente está a melhorar." },
        { id: "pt-u25l4-piorar", type: "vocab", front: "piorar", reading: "piorar", meaning: "to get worse", example: { jp: "A tosse piorou durante a noite e fomos à urgência.", en: "The cough got worse during the night and we went to A&E." }, drill: { jp: "O tempo vai piorar amanhã", en: "The weather is going to get worse tomorrow" }, accept: ["worsen", "to worsen", "deteriorate", "get worse"], hint: "piu-RAR, built on pior, worse. The exact opposite of melhorar and it behaves identically — Portuguese keeps the pair symmetrical." },
        { id: "pt-u25l4-curar", type: "vocab", front: "curar", reading: "curar", meaning: "to cure", example: { jp: "O remédio curou a alergia em poucos dias.", en: "The medicine cured the allergy in a few days." }, drill: { jp: "O remédio vai curar a alergia", en: "The medicine is going to cure the allergy" }, accept: ["cure", "to heal", "heal", "treat"], hint: "ku-RAR. Curar-se is to get better by yourself. a cura is the cure, and estar curado is to be healed." },
      ],
    },
  ],
};
