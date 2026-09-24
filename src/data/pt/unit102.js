// PT Unit 102 — A saúde e os cuidados (slot: health-systems) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Authored by the pt B2 block-2 seat, 2026-09-23, to §C1–C10 (src/data/pt/unit88.js).
//
// SLOT BOUNDARIES. u11 and u25 own the body and the appointment (a dor, a
// consulta, a receita, a vacina, o tratamento, o enfermeiro); u67 owns the
// illness itself (a doença, o sintoma, o diagnóstico, crónico, a cirurgia,
// operar, recuperar, o comprimido, prevenir, a cura, a terapia, o idoso).
// NONE of that is re-taught. §C3: what a B2 learner cannot yet do is talk about
// the SYSTEM around the illness — being sorted into it, being prescribed
// something, an outbreak measured across a population, and life after the
// treatment ends. That is this unit.
//
// ⚠ pt-PT, not pt-BR, and it shows in this domain more than most: o utente is
// the Portuguese health service's own word for the person in the queue (Brazil
// says o usuário), a baixa is sick leave (Brazil: o afastamento), and the
// screening programme is o rastreio (Brazil: a triagem populacional).
// lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT102 = {
  id: "pt-u102",
  lang: "pt",
  title: "A saúde e os cuidados",
  order: 102,
  stage: "b2",
  lessons: [
    {
      id: "pt-u102l1",
      unit: 102,
      lesson: 1,
      title: "Entrar no sistema de saúde",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a health service sorts people in Portuguese — who you are to it, how urgent you are judged to be, and how you get in and out.",
      items: [
        { id: "pt-u102l1-outente", type: "vocab", front: "o utente", reading: "outente", meaning: "service user", example: { jp: "O utente espera um ano por uma consulta, mas o relatório diz que o sistema funciona.", en: "The service user waits a year for an appointment, but the report says the system works." }, drill: { jp: "O utente espera pela consulta", en: "The service user waits for the appointment" }, accept: ["service user", "the service user", "patient", "user"], hint: "u-TEN-te. ⚠ THE pt-PT WORD. Portugal's health service calls the person in the queue o utente, never o usuário (Brazil) and not always o doente — because an utente may be perfectly well and merely registered. The same word covers a library card holder or a bus passenger." },
        { id: "pt-u102l1-atriagem", type: "vocab", front: "a triagem", reading: "atriagem", meaning: "triage", example: { jp: "A triagem no hospital é boa, mas quem chega com menos dor espera muito tempo.", en: "Triage at the hospital is good, but whoever arrives with less pain waits a long time." }, drill: { jp: "A triagem no hospital é boa", en: "Triage at the hospital is good" }, accept: ["triage", "the triage", "sorting by urgency", "initial assessment"], hint: "tri-A-jayn. Sorting people by how urgent they are, not by who came first. In a Portuguese A&E it is the pulseira system — the coloured wristband IS the triagem." },
        { id: "pt-u102l1-orastreio", type: "vocab", front: "o rastreio", reading: "orastreio", meaning: "screening", example: { jp: "O rastreio apanha a doença cedo, ainda que muita gente não queira ir ao médico.", en: "Screening catches the illness early, even though a lot of people do not want to go to the doctor." }, drill: { jp: "O rastreio apanha a doença cedo", en: "Screening catches the illness early" }, accept: ["screening", "the screening", "screening programme", "mass testing"], hint: "rrash-TRAY-u, from rastrear. Testing a whole healthy population to find the few who are ill — the opposite direction of travel from a diagnóstico, which starts from someone who already feels wrong." },
        { id: "pt-u102l1-ointernamento", type: "vocab", front: "o internamento", reading: "ointernamento", meaning: "hospital admission", example: { jp: "O internamento dura dez dias, mas voltar ao trabalho leva um ano.", en: "The hospital admission lasts ten days, but going back to work takes a year." }, drill: { jp: "O internamento dura dez dias", en: "The hospital admission lasts ten days" }, accept: ["hospital admission", "admission", "hospital stay", "being admitted"], hint: "in-ter-na-MEN-tu. The stay itself, counted in nights. ⚠ Not the English word intern: a Portuguese medical trainee is o interno, and the confusion is worth carrying because both words come off the same verb internar." },
        { id: "pt-u102l1-aalta", type: "vocab", front: "a alta", reading: "aalta", meaning: "discharge (from hospital)", example: { jp: "A alta chega muito cedo, porque o hospital precisa da cama para outro doente.", en: "Discharge comes very early, because the hospital needs the bed for another patient." }, drill: { jp: "A alta chega sempre muito cedo", en: "Discharge always comes very early" }, accept: ["discharge", "the discharge", "being discharged", "release from hospital"], hint: "AL-ta. The noun built on alto, and in a hospital it is fixed: ter alta is to be discharged, dar alta is what the doctor does. ⚠ In money news the same word is a RISE — a alta dos preços — so the setting decides." },
        { id: "pt-u102l1-oencaminhamento", type: "vocab", front: "o encaminhamento", reading: "oencaminhamento", meaning: "referral", example: { jp: "O encaminhamento para o hospital demora, mas sem ele o doente não entra na consulta.", en: "The referral to the hospital takes time, but without it the patient does not get the appointment." }, drill: { jp: "O encaminhamento para o hospital demora", en: "The referral to the hospital takes time" }, accept: ["referral", "the referral", "being sent on", "onward referral"], hint: "en-ka-mi-nya-MEN-tu, from caminho — literally putting someone on the road. The paper that moves you from the health centre to the specialist, and the reason nothing happens without a family doctor first." },
      ],
    },
    {
      id: "pt-u102l2",
      unit: 102,
      lesson: 2,
      title: "O que se prescreve",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk in Portuguese about what a doctor decides — the dose, the side effect, the outlook, and the case where the treatment is not meant to cure.",
      items: [
        { id: "pt-u102l2-prescrever", type: "vocab", front: "prescrever", reading: "prescrever", meaning: "to prescribe", example: { jp: "O médico prescreve o comprimido, mas ninguém diz ao doente quanto tempo o deve tomar.", en: "The doctor prescribes the tablet, but nobody tells the patient how long to take it for." }, drill: { jp: "O médico vai prescrever um comprimido", en: "The doctor is going to prescribe a tablet" }, accept: ["to prescribe", "prescribe", "to order (a medicine)"], hint: "presh-kre-VER. What produces a receita. ⚠ Second, legal sense that trips readers of Portuguese news: um crime prescreve means it passes the statute of limitations — the same verb, the opposite of a doctor's act." },
        { id: "pt-u102l2-adosagem", type: "vocab", front: "a dosagem", reading: "adosagem", meaning: "dosage", example: { jp: "A dosagem muda com a idade, e por isso o mesmo comprimido pode ser grave para um idoso.", en: "The dosage changes with age, and so the same tablet can be serious for an elderly person." }, drill: { jp: "A dosagem muda com a idade", en: "The dosage changes with age" }, accept: ["dosage", "the dosage", "dose", "the dose"], hint: "do-ZA-jayn. The quantity AND the schedule together — a dose is the single amount, a dosagem is the whole regime of how much and how often." },
        { id: "pt-u102l2-oefeitosecundario", type: "vocab", front: "o efeito secundário", reading: "oefeitosecundario", meaning: "side effect", example: { jp: "O efeito secundário é raro, mas quando acontece o doente deixa de tomar tudo.", en: "The side effect is rare, but when it happens the patient stops taking everything." }, drill: { jp: "O efeito secundário é muito raro", en: "The side effect is very rare" }, accept: ["side effect", "the side effect", "adverse effect", "secondary effect"], hint: "Two taught words doing a new job: o efeito plus secundário. Portuguese keeps the noun phrase where English has almost fused it — and secundário here means beside the point aimed at, not second in importance." },
        { id: "pt-u102l2-oprognostico", type: "vocab", front: "o prognóstico", reading: "oprognostico", meaning: "prognosis", example: { jp: "O prognóstico é bom, embora a família queira ouvir outra opinião.", en: "The prognosis is good, although the family wants to hear another opinion." }, drill: { jp: "O prognóstico deste doente é bom", en: "This patient's prognosis is good" }, accept: ["prognosis", "the prognosis", "outlook", "expected course"], hint: "prog-NOSH-ti-ku. What is expected to HAPPEN — a diagnóstico names what is wrong now, o prognóstico says where it goes. Also used of an economy or a football season." },
        { id: "pt-u102l2-paliativo", type: "vocab", front: "paliativo", reading: "paliativo", meaning: "palliative", example: { jp: "O tratamento é paliativo, porque já não cura a doença mas acaba com a dor.", en: "The treatment is palliative, because it no longer cures the illness but does away with the pain." }, drill: { jp: "Este tratamento é apenas paliativo", en: "This treatment is only palliative" }, accept: ["palliative", "easing not curing", "comfort-focused"], hint: "pa-lya-TEE-vu. Aimed at the suffering rather than the cause. Portuguese uses it metaphorically far more readily than English does: uma medida paliativa is a political sticking plaster." },
        { id: "pt-u102l2-asequela", type: "vocab", front: "a sequela", reading: "asequela", meaning: "lasting after-effect", example: { jp: "A sequela do acidente fica para sempre, embora o corpo esteja bom.", en: "The lasting after-effect of the accident stays for good, although the body is fine." }, drill: { jp: "A sequela do acidente fica sempre", en: "The accident's after-effect stays for good" }, accept: ["lasting after-effect", "after-effect", "aftereffect", "permanent damage"], hint: "se-KE-la. Damage that outlives the illness that caused it. ⚠ Not the cinema sense: a film sequel in Portuguese is a sequela too, and a Portuguese speaker hears the medical meaning first." },
      ],
    },
    {
      id: "pt-u102l3",
      unit: 102,
      lesson: 3,
      title: "Uma doença que se espalha",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe an illness moving through a population in Portuguese — how it spreads, how it is counted, and what stops it.",
      items: [
        { id: "pt-u102l3-aepidemia", type: "vocab", front: "a epidemia", reading: "aepidemia", meaning: "epidemic", example: { jp: "A epidemia chega ao país em março, mas o governo muda as regras apenas em maio.", en: "The epidemic reaches the country in March, but the government changes the rules only in May." }, drill: { jp: "A epidemia chega ao país hoje", en: "The epidemic reaches the country today" }, accept: ["epidemic", "an epidemic", "the epidemic"], hint: "e-pi-de-MEE-a, stressed on the mi. An illness above its normal level in one region; uma pandemia is the same thing once it has crossed borders. Portuguese uses both words as freely as English." },
        { id: "pt-u102l3-osurto", type: "vocab", front: "o surto", reading: "osurto", meaning: "outbreak", example: { jp: "O surto começa numa escola, e no entanto ninguém acaba com as aulas durante uma semana.", en: "The outbreak begins in a school, and yet nobody puts a stop to the classes for a week." }, drill: { jp: "O surto começa numa escola grande", en: "The outbreak begins in a big school" }, accept: ["outbreak", "an outbreak", "the outbreak", "flare-up"], hint: "SUR-tu, from surgir. Smaller and sharper than uma epidemia: um surto is countable, has an address, and ends. Also said of a person — um surto is a psychiatric episode." },
        { id: "pt-u102l3-ocontagio", type: "vocab", front: "o contágio", reading: "ocontagio", meaning: "contagion", example: { jp: "O contágio entre crianças é grande, mas um adulto leva mais tempo a ficar doente.", en: "Contagion among children is great, but an adult takes longer to become ill." }, drill: { jp: "O contágio entre crianças é grande", en: "Contagion among children is great" }, accept: ["contagion", "the contagion", "spread", "transmission"], hint: "kon-TA-jyu. The passing of the thing from one body to the next. Portuguese extends it to panic, laughter and market crashes exactly as English does — o contágio do medo." },
        { id: "pt-u102l3-avacinacao", type: "vocab", front: "a vacinação", reading: "avacinacao", meaning: "vaccination", example: { jp: "A vacinação protege quem não pode tomar a vacina, e daí que o número tenha de ser alto.", en: "Vaccination protects those who cannot take the vaccine, which is why the figure has to be high." }, drill: { jp: "A vacinação protege quem está doente", en: "Vaccination protects those who are ill" }, accept: ["vaccination", "the vaccination", "vaccination programme", "immunisation"], hint: "va-si-na-SOWN. The PROGRAMME, not the substance: a vacina is what is in the syringe, a vacinação is the campaign and the rate. Carded separately for that reason." },
        { id: "pt-u102l3-aimunidade", type: "vocab", front: "a imunidade", reading: "aimunidade", meaning: "immunity", example: { jp: "A imunidade dura alguns anos, mas depois o corpo esquece a doença.", en: "Immunity lasts a few years, but afterwards the body forgets the illness." }, drill: { jp: "A imunidade dura apenas alguns anos", en: "Immunity lasts only a few years" }, accept: ["immunity", "the immunity", "resistance to infection"], hint: "i-mu-ni-DA-de. Biological, and also the parliamentary kind — a imunidade de um deputado is exactly the same word, and Portuguese news uses it more often in that second sense." },
        { id: "pt-u102l3-aincidencia", type: "vocab", front: "a incidência", reading: "aincidencia", meaning: "incidence", example: { jp: "A incidência da doença é maior no sul, embora o clima seja melhor.", en: "The incidence of the illness is higher in the south, although the climate is better." }, drill: { jp: "A incidência é maior no sul", en: "The incidence is higher in the south" }, accept: ["incidence", "the incidence", "rate of new cases"], hint: "in-si-DEN-sya. New cases per population per period — a rate, never a total. The word a learner needs to read a health graph, and the one that separates how many are ill from how many are falling ill." },
      ],
    },
    {
      id: "pt-u102l4",
      unit: 102,
      lesson: 4,
      title: "Depois do tratamento",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk in Portuguese about what happens once the acute illness is over — the recovery work, the paperwork, and the person doing the caring.",
      items: [
        { id: "pt-u102l4-areabilitacao", type: "vocab", front: "a reabilitação", reading: "areabilitacao", meaning: "rehabilitation", example: { jp: "A reabilitação demora um ano, mas sem ela o doente nunca volta ao trabalho.", en: "Rehabilitation takes a year, but without it the patient never returns to work." }, drill: { jp: "A reabilitação demora quase um ano", en: "Rehabilitation takes nearly a year" }, accept: ["rehabilitation", "the rehabilitation", "rehab", "recovery programme"], hint: "rre-a-bi-li-ta-SOWN. The structured work of getting a function back. Portuguese also uses it of buildings — a reabilitação urbana is what English calls regeneration." },
        { id: "pt-u102l4-aincapacidade", type: "vocab", front: "a incapacidade", reading: "aincapacidade", meaning: "incapacity", example: { jp: "A incapacidade é permanente, e por isso o Estado paga um apoio todos os anos.", en: "The incapacity is permanent, and so the State pays support every year." }, drill: { jp: "A incapacidade dele é permanente", en: "His incapacity is permanent" }, accept: ["incapacity", "the incapacity", "disability", "inability to work"], hint: "in-ka-pa-si-DA-de. The formal, measured version of not being able to — Portuguese assigns it a percentage (uma incapacidade de 60%), which is what makes it an administrative word rather than a judgement." },
        { id: "pt-u102l4-abaixa", type: "vocab", front: "a baixa", reading: "abaixa", meaning: "sick leave", example: { jp: "A baixa dura três semanas, mas o chefe continua a pedir o mesmo trabalho.", en: "The sick leave lasts three weeks, but the boss keeps asking for the same work." }, drill: { jp: "A baixa dura apenas três semanas", en: "The sick leave lasts only three weeks" }, accept: ["sick leave", "the sick leave", "signed off sick", "medical leave"], hint: "BAI-sha. ⚠ THE pt-PT WORD — Brazil says o afastamento or o atestado. Estar de baixa is to be signed off. The same noun elsewhere means a fall (a baixa dos preços) or the downtown of a Portuguese city (a Baixa de Lisboa)." },
        { id: "pt-u102l4-ocuidador", type: "vocab", front: "o cuidador", reading: "ocuidador", meaning: "carer", example: { jp: "O cuidador de um idoso trabalha todo o dia, mas ninguém conhece o nome dele.", en: "The carer of an elderly person works all day, but nobody knows his name." }, drill: { jp: "O cuidador do idoso trabalha muito", en: "The elderly person's carer works hard" }, accept: ["carer", "the carer", "caregiver", "informal carer"], hint: "kwi-da-DOR, from cuidar. Portuguese law now names o cuidador informal — the family member doing it unpaid — and that legal phrase is where most learners first meet the word." },
        { id: "pt-u102l4-afisioterapia", type: "vocab", front: "a fisioterapia", reading: "afisioterapia", meaning: "physiotherapy", example: { jp: "A fisioterapia custa muito dinheiro, e por isso muita gente para antes do fim.", en: "Physiotherapy costs a lot of money, and so many people stop before the end." }, drill: { jp: "A fisioterapia custa muito dinheiro", en: "Physiotherapy costs a lot of money" }, accept: ["physiotherapy", "the physiotherapy", "physical therapy", "physio"], hint: "fi-zyo-te-ra-PEE-a. Built on a terapia, which this course already teaches, plus fisio- for the body. Portuguese never shortens it the way English says physio." },
        { id: "pt-u102l4-alistadeespera", type: "vocab", front: "a lista de espera", reading: "alistadeespera", meaning: "waiting list", example: { jp: "A lista de espera não acaba nunca, embora o hospital tenha mais médicos.", en: "The waiting list never ends, although the hospital has more doctors." }, drill: { jp: "A lista de espera é enorme", en: "The waiting list is enormous" }, accept: ["waiting list", "the waiting list", "queue for treatment"], hint: "Three taught words in the fixed order Portuguese keeps: a lista de espera. Estar em lista de espera drops the article, exactly as English drops it in on a waiting list." },
      ],
    },
  ],
};
