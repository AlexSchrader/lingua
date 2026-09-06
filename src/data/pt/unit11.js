// PT Unit 11 — O corpo e a saúde ("The body and health") — A1
// The body, then what goes wrong with it. The unit ends at the farmácia rather
// than the hospital because that is where Portugal actually sends you first: the
// green cross is open, staffed by a pharmacist who will diagnose a cold across
// the counter, and o hospital (u7) is for something serious.
//
// FALSE FRIEND, and this one is English rather than Spanish: `constipado` in
// Portuguese means having a COLD, not constipated. It is the single most
// embarrassing word an English speaker can get wrong in a pharmacy, so it opens
// Lesson 4 and its hint says the other word plainly.
//
// `dói-me` is carded as a fixed chunk, the way u3 carded `chamo-me` — the verb
// doer is impersonal and a beginner needs the phrase long before the paradigm.
// u13 owns the enclisis rule that explains the hyphen.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT11 = {
  id: "pt-u11",
  lang: "pt",
  title: "O corpo e a saúde",
  order: 11,
  stage: "a1",
  lessons: [
    // Lesson 1: the head. a mão is already taught in u1, so the body starts at
    // the top and the hand is used in examples rather than re-taught.
    {
      id: "pt-u11l1",
      unit: 11,
      lesson: 1,
      title: "A cabeça",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the parts of the head and face in Portuguese.",
      items: [
        { id: "pt-u11l1-ocorpo", type: "vocab", front: "o corpo", reading: "ocorpo", meaning: "body", example: { jp: "O corpo é uma coisa fantástica.", en: "The body is a fantastic thing." }, drill: { jp: "O corpo é uma coisa fantástica", en: "The body is a fantastic thing" }, accept: ["the body"], hint: "KOR-pu. Nothing to do with a cor, colour, from Unit 8 — different words, and the r sits in a different place. Um corpo is also a body of work or a corps." },
        { id: "pt-u11l1-acabeca", type: "vocab", front: "a cabeça", reading: "acabeca", meaning: "head", example: { jp: "A cabeça é pequena, o corpo é grande.", en: "The head is small, the body is big." }, drill: { jp: "A cabeça de Ana é pequena", en: "Ana's head is small" }, accept: ["the head", "mind"], hint: "ka-BE-sa — cedilla, so a soft s, like a maçã in Unit 1. It carries the same figurative load as English: perder a cabeça is to lose your head, and o cabeça de família is the head of the household." },
        { id: "pt-u11l1-ocabelo", type: "vocab", front: "o cabelo", reading: "ocabelo", meaning: "hair", example: { jp: "O cabelo de Ana é castanho.", en: "Ana's hair is brown." }, drill: { jp: "O cabelo de Ana é castanho", en: "Ana's hair is brown" }, accept: ["the hair"], hint: "ka-BE-lu. Singular for a whole head of hair — o cabelo, never \"os cabelos\", which would be individual strands. One letter from a cabeça, so keep them apart: cabeÇa is the head, cabeLo grows on it." },
        { id: "pt-u11l1-oolho", type: "vocab", front: "o olho", reading: "oolho", meaning: "eye", example: { jp: "O bebé tem um olho azul.", en: "The baby has one blue eye." }, drill: { jp: "O olho de Tiago é azul", en: "Tiago's eye is blue" }, accept: ["the eye"], hint: "O-lyu, with the lh. Plural os olhos, and that is how you will usually meet it. The two o's on the card are just the article meeting the word: o + olho." },
        { id: "pt-u11l1-aboca", type: "vocab", front: "a boca", reading: "aboca", meaning: "mouth", example: { jp: "A boca de um bebé é muito pequena.", en: "A baby's mouth is very small." }, drill: { jp: "A boca de um bebé é pequena", en: "A baby's mouth is small" }, accept: ["the mouth"], hint: "BO-ka, open o. Boca do metro is a metro entrance, and a Boca do Inferno is the sea cave at Cascais — Portuguese hands the word to any opening." },
        { id: "pt-u11l1-onariz", type: "vocab", front: "o nariz", reading: "onariz", meaning: "nose", example: { jp: "O nariz de Pedro é grande.", en: "Pedro's nose is big." }, drill: { jp: "O nariz de Pedro é grande", en: "Pedro's nose is big" }, accept: ["the nose"], hint: "na-REESH — stress at the end, and the final z shushes exactly like a final s. Plural narizes. Remember the nasal vowels of Unit 1 all come out through this." },
      ],
    },
    // Lesson 2: from the shoulders down, ending on the heart — which is also the
    // word the unit1 header uses as its worked example of the accent fold.
    {
      id: "pt-u11l2",
      unit: 11,
      lesson: 2,
      title: "O resto do corpo",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Name the rest of the body — arms, legs, feet and what is inside.",
      items: [
        { id: "pt-u11l2-obraco", type: "vocab", front: "o braço", reading: "obraco", meaning: "arm", example: { jp: "O braço é comprido.", en: "The arm is long." }, drill: { jp: "O braço é comprido", en: "The arm is long" }, accept: ["the arm"], hint: "BRA-su, cedilla. Plural os braços. Portugal uses it for the arm of a chair and for a branch of a river too — o braço do Tejo." },
        { id: "pt-u11l2-aperna", type: "vocab", front: "a perna", reading: "aperna", meaning: "leg", example: { jp: "O gato tem quatro pernas.", en: "The cat has four legs." }, drill: { jp: "A perna de Ana é comprida", en: "Ana's leg is long" }, accept: ["the leg"], hint: "PER-na. Do not let it collide with o pai or with pão — this one has the r. Esticar as pernas is to stretch your legs, and it is what everyone says after a long comboio ride." },
        { id: "pt-u11l2-ope", type: "vocab", front: "o pé", reading: "ope", meaning: "foot", example: { jp: "Ir a pé é fantástico.", en: "Going on foot is fantastic." }, drill: { jp: "O pé de Tiago é grande", en: "Tiago's foot is big" }, accept: ["the foot"], hint: "PEH, open e — you met the phrase a pé in Unit 7's ir card, the one way of travelling that does not take de. Plural os pés. Ao pé de something means next to it, which is a very Portuguese way to give directions." },
        { id: "pt-u11l2-odedo", type: "vocab", front: "o dedo", reading: "odedo", meaning: "finger", example: { jp: "A mão tem cinco dedos.", en: "The hand has five fingers." }, drill: { jp: "O dedo de Ana é pequeno", en: "Ana's finger is small" }, accept: ["the finger", "toe", "digit"], hint: "DE-du. One word for finger AND toe — a toe is o dedo do pé if you need to be precise. Built on the same Latin root as the Spanish dedo, and here they genuinely agree." },
        { id: "pt-u11l2-abarriga", type: "vocab", front: "a barriga", reading: "abarriga", meaning: "belly", example: { jp: "Hoje a barriga não está bem.", en: "Today my belly isn't well." }, drill: { jp: "Hoje a barriga não está bem", en: "Today my belly isn't well" }, accept: ["stomach", "tummy", "the belly"], hint: "ba-RREE-ga — strong rr from the back of the throat, like o carro. Dor de barriga is what you tell the pharmacist; o estômago is the clinical organ underneath it." },
        { id: "pt-u11l2-ocoracao", type: "vocab", front: "o coração", reading: "ocoracao", meaning: "heart", example: { jp: "O coração de Portugal é Lisboa.", en: "The heart of Portugal is Lisbon." }, drill: { jp: "O coração de Portugal é Lisboa", en: "The heart of Portugal is Lisbon" }, accept: ["the heart"], hint: "ku-ra-SAWNG — cedilla, then the ão nasal: two of Unit 1's rules in one word. Plural os corações. De coração means sincerely, and it is what fado is about." },
      ],
    },
    // Lesson 3: feeling ill. Portuguese states a symptom with ter (tenho febre)
    // or with the impersonal doer (dói-me a cabeça) — never with ser.
    {
      id: "pt-u11l3",
      unit: 11,
      lesson: 3,
      title: "Estou doente",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say that you feel ill and name what hurts, well enough to be understood by a doctor or a pharmacist.",
      items: [
        { id: "pt-u11l3-doente", type: "vocab", front: "doente", reading: "doente", meaning: "ill", example: { jp: "Hoje não estou bem: estou doente.", en: "Today I'm not well: I'm ill." }, drill: { jp: "Hoje estou doente", en: "Today I'm ill" }, accept: ["sick", "unwell", "patient", "the patient"], hint: "du-EN-te, same for both genders. Always with estar, never with ser — estou doente is a state you are in today. As a noun, um doente is a patient." },
        { id: "pt-u11l3-ador", type: "vocab", front: "a dor", reading: "ador", meaning: "pain", example: { jp: "A dor de cabeça não é uma coisa boa.", en: "A headache isn't a good thing." }, drill: { jp: "A dor de cabeça não é boa", en: "The headache isn't good" }, accept: ["ache", "the pain", "hurt", "sore"], hint: "DOR, and it is FEMININE — a dor — where o calor from Unit 8 is masculine on the same -or ending. Portuguese builds every ache this way: dor de cabeça, dor de barriga, dor de dentes." },
        { id: "pt-u11l3-doime", type: "vocab", front: "dói-me", reading: "doime", meaning: "it hurts me", example: { jp: "Dói-me a cabeça.", en: "My head hurts." }, drill: { jp: "Dói-me a cabeça", en: "My head hurts" }, accept: ["my ... hurts", "it hurts", "i have a pain in"], hint: "Learn it whole, like chamo-me in Unit 3. The verb is doer, and it works backwards from English: the head does the hurting and the me receives it — dói-me a cabeça, literally \"the head hurts me\". Plural things take doem-me: doem-me os pés." },
        { id: "pt-u11l3-afebre", type: "vocab", front: "a febre", reading: "afebre", meaning: "fever", example: { jp: "O bebé tem febre.", en: "The baby has a fever." }, drill: { jp: "A febre não é uma coisa boa", en: "A fever isn't a good thing" }, accept: ["temperature", "the fever", "high temperature"], hint: "FE-bre, open e. You HAVE it, with ter: tem febre, not \"é febre\". Portuguese drops the article here — tenho febre — which it does with most symptoms." },
        { id: "pt-u11l3-agripe", type: "vocab", front: "a gripe", reading: "agripe", meaning: "flu", example: { jp: "A gripe é um problema de inverno.", en: "Flu is a winter problem." }, drill: { jp: "A gripe é um problema de inverno", en: "Flu is a winter problem" }, accept: ["influenza", "the flu"], hint: "GREE-pe, hard g. Not a complaint — English \"gripe\" is a different word entirely. Portugal separates it firmly from uma constipação, a common cold, and Lesson 4 has the adjective for that." },
        { id: "pt-u11l3-cansado", type: "vocab", front: "cansado", reading: "cansado", meaning: "tired", example: { jp: "Um médico cansado não é bom.", en: "A tired doctor isn't good." }, drill: { jp: "Hoje o médico está cansado", en: "Today the doctor is tired" }, accept: ["exhausted", "weary", "worn out"], hint: "kan-SA-du; feminine cansada. With estar, like doente — estou cansado. The verb underneath is cansar, to tire, and its opposite descansar is the first card of the next lesson." },
      ],
    },
    // Lesson 4: the pharmacy. Opens on the false friend because it is the word
    // most likely to be needed and most likely to come out wrong.
    {
      id: "pt-u11l4",
      unit: 11,
      lesson: 4,
      title: "Na farmácia",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Explain a cold at the pharmacy, ask for something for it, and say you are feeling better.",
      items: [
        { id: "pt-u11l4-constipado", type: "vocab", front: "constipado", reading: "constipado", meaning: "having a cold", example: { jp: "Em janeiro, Tiago está sempre constipado.", en: "In January, Tiago always has a cold." }, drill: { jp: "Em janeiro Tiago está sempre constipado", en: "In January Tiago always has a cold" }, accept: ["with a cold", "bunged up", "stuffed up", "cold"], hint: "FALSE FRIEND, and this one is English, not Spanish. Estou constipado means I HAVE A COLD. It does not mean constipated — that word is obstipado, and you will not need it. Feminine constipada; the noun is uma constipação." },
        { id: "pt-u11l4-oremedio", type: "vocab", front: "o remédio", reading: "oremedio", meaning: "medicine", example: { jp: "A farmácia tem o remédio.", en: "The pharmacy has the medicine." }, drill: { jp: "A farmácia tem o remédio", en: "The pharmacy has the medicine" }, accept: ["remedy", "the medicine", "drug", "medication"], hint: "rre-ME-diu — strong initial r. The everyday word; um medicamento is the clinical one on the box. Não há remédio means nothing can be done about it." },
        { id: "pt-u11l4-areceita", type: "vocab", front: "a receita", reading: "areceita", meaning: "prescription", example: { jp: "O médico faz uma receita.", en: "The doctor writes a prescription." }, drill: { jp: "O médico faz a receita", en: "The doctor writes the prescription" }, accept: ["recipe", "the prescription", "the recipe"], hint: "rre-SAY-ta — soft c before e. ONE word for two things: a doctor's prescription and a cooking recipe. Context does all the work, and both are things somebody wrote down for you to follow." },
        { id: "pt-u11l4-descansar", type: "vocab", front: "descansar", reading: "descansar", meaning: "to rest", example: { jp: "Descansar é importante.", en: "Resting is important." }, drill: { jp: "Descansar é muito importante", en: "Resting is very important" }, accept: ["rest", "to relax", "take a break"], hint: "desh-kan-SAR. Literally to un-tire yourself — des- reverses cansar, the verb behind cansado in the last lesson. Bom descanso is what you say to someone going off to rest." },
        { id: "pt-u11l4-aconsulta", type: "vocab", front: "a consulta", reading: "aconsulta", meaning: "appointment", example: { jp: "A consulta com o médico é hoje.", en: "The appointment with the doctor is today." }, drill: { jp: "A consulta com o médico é hoje", en: "The appointment with the doctor is today" }, accept: ["consultation", "the appointment", "doctors appointment"], hint: "kon-SOOL-ta. Specifically a medical appointment — for a haircut or a meeting you would say uma marcação or um encontro. Marcar uma consulta is to book one." },
        { id: "pt-u11l4-melhor", type: "vocab", front: "melhor", reading: "melhor", meaning: "better", example: { jp: "Hoje estou melhor.", en: "Today I'm better." }, drill: { jp: "Hoje estou melhor", en: "Today I'm better" }, accept: ["best", "the best", "improved"], hint: "me-LYOR, with the lh. Irregular — it replaces \"mais bom\", which does not exist, exactly as English replaces \"more good\". Same word for better and best, and its opposite is pior. As melhoras! is what you wish someone who is ill." },
      ],
    },
  ],
};
