// PT Unit 100 — A carreira e as organizações (slot: work-career) — B2
//
// THE ORGANISATION FROM THE INSIDE. u24 gave the job hunt (o cargo, o
// currículo, o estágio, a carreira, despedir), u56 gave the work process (a
// chefia, delegar, a meta, o desempenho, o rendimento, avaliar), u85 gave
// ambition and effort. What none of them gives is the SHAPE of an organisation
// — who answers to whom, how a post is actually filled in Portugal, and the
// paperwork that holds it all together.
//
// SLOT BOUNDARIES:
//   a chefia and delegar and a meta and o desempenho and o rendimento at u56;
//   o estágio and o cargo and o currículo and a carreira at u24; a promoção at
//   u27; atingir and progredir and a ambição at u85; a equipa and a reunião
//   earlier. Used in examples, none re-carded — hence a tutela rather than a
//   chefia, incumbir rather than delegar, o balanço rather than o desempenho,
//   and l4 titled "Os resultados" rather than "O desempenho".
//   u93 (mine) owns the firm as a COMMERCIAL actor — the deal, the contract,
//   the market. This unit is the same firm seen from an employee's desk.
//
// PT-PT SPECIFICS WORTH THE CARDS: o concurso is the formal open competition by
// which Portuguese public posts are filled — there is no neat English
// equivalent and the learner will meet it constantly. os quadros superiores is
// standard Portuguese HR vocabulary. a ata, not a acta, since 1990.
//
// Conventions: see unit1.js header (language) and unit88.js (B2 band).
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT100 = {
  id: "pt-u100",
  lang: "pt",
  title: "A carreira e as organizações",
  order: 100,
  stage: "b2",
  lessons: [
    {
      id: "pt-u100l1",
      unit: 100,
      lesson: 1,
      title: "A hierarquia",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say who answers to whom in Portuguese — the hierarchy, the subordinate, the senior manager, the oversight.",
      items: [
        { id: "pt-u100l1-ahierarquia", type: "vocab", front: "a hierarquia", reading: "ahierarquia", meaning: "hierarchy", example: { jp: "A hierarquia da empresa é curta e clara, o que ajuda bastante.", en: "The company's hierarchy is short and clear, which helps a lot." }, drill: { jp: "A hierarquia da empresa é curta", en: "The company's hierarchy is short" }, accept: ["hierarchy", "the hierarchy", "chain of command", "pecking order"], hint: "i-e-rar-KEE-a. Note the silent h and the stress right at the end. The ranked order of an organisation — and Portuguese uses it of the Church too, where it began." },
        { id: "pt-u100l1-reportar", type: "vocab", front: "reportar", reading: "reportar", meaning: "to report (up the line)", example: { jp: "Cada equipa reporta à direção uma vez por mês, sem falta.", en: "Each team reports to management once a month, without fail." }, drill: { jp: "Cada equipa deve reportar à direção", en: "Each team must report to management" }, accept: ["to report to", "report to", "to answer to", "to report up", "to be answerable to"], hint: "rre-por-TAR. With a: reportar a alguém, to have them as your boss — a recent business borrowing. Reportar-se a, reflexive, means to refer back to something." },
        { id: "pt-u100l1-osubordinado", type: "vocab", front: "o subordinado", reading: "osubordinado", meaning: "subordinate", example: { jp: "Um bom chefe ouve o subordinado antes de tomar a decisão.", en: "A good boss listens to the subordinate before taking the decision." }, drill: { jp: "O chefe ouve sempre o subordinado", en: "The boss always listens to the subordinate" }, accept: ["subordinate", "the subordinate", "junior", "direct report", "underling"], hint: "su-bor-di-NA-du. The person below you in the line. Also the grammatical subordinate clause — uma oração subordinada — which is the same idea of one thing depending on another." },
        { id: "pt-u100l1-incumbir", type: "vocab", front: "incumbir", reading: "incumbir", meaning: "to task (someone with)", example: { jp: "A direção resolveu incumbir a equipa nova de todo o projeto.", en: "Management decided to task the new team with the whole project." }, drill: { jp: "Vão incumbir a equipa desse trabalho", en: "They're going to task the team with that work" }, accept: ["to task with", "task with", "to entrust with", "to charge with", "to assign to"], hint: "in-koom-BIR. To give someone a duty — incumbir alguém de. It also works the other way round: incumbe-me a mim, it falls to me." },
        { id: "pt-u100l1-atutela", type: "vocab", front: "a tutela", reading: "atutela", meaning: "oversight", example: { jp: "O museu funciona sob a tutela do Estado desde o ano passado.", en: "The museum has operated under state oversight since last year." }, drill: { jp: "O museu está sob a tutela do Estado", en: "The museum is under state oversight" }, accept: ["oversight", "the oversight", "supervision", "guardianship", "remit"], hint: "tu-TE-la. The authority one body holds over another — sob a tutela de. In family law it is legal guardianship of a child, which is the original sense." },
        { id: "pt-u100l1-oquadrosuperior", type: "vocab", front: "o quadro superior", reading: "oquadrosuperior", meaning: "senior manager", example: { jp: "O quadro superior decide e a equipa executa, e quase nunca se encontram.", en: "The senior manager decides and the team carries it out, and they almost never meet." }, drill: { jp: "O quadro superior decide quase tudo", en: "The senior manager decides almost everything" }, accept: ["senior manager", "senior executive", "the senior manager", "top management"], hint: "Os quadros of a company are its salaried professional staff; os quadros superiores are the senior ones. Very Portuguese HR vocabulary, and on every job advert." },
      ],
    },
    {
      id: "pt-u100l2",
      unit: 100,
      lesson: 2,
      title: "A progressão",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Apply for a job in Portuguese — the vacancy, the open competition, the recruitment, the climb.",
      items: [
        { id: "pt-u100l2-aprogressao", type: "vocab", front: "a progressão", reading: "aprogressao", meaning: "progression", example: { jp: "A progressão na carreira depende mais do tempo do que do mérito.", en: "Career progression depends more on time served than on merit." }, drill: { jp: "A progressão na carreira é lenta", en: "Career progression is slow" }, accept: ["progression", "the progression", "advancement", "career progression", "progress"], hint: "pru-gre-SOWN. Moving up a scale — a progressão na carreira. Progredir (Unit 85) is the verb you already have for it." },
        { id: "pt-u100l2-candidatarse", type: "vocab", front: "candidatar-se", reading: "candidatarse", meaning: "to apply (for a post)", example: { jp: "Vale a pena candidatar-se mesmo sem ter toda a experiência pedida.", en: "It's worth applying even without having all the experience asked for." }, drill: { jp: "Vale a pena candidatar-se a isso", en: "It's worth applying for that" }, accept: ["to apply", "apply", "to apply for", "to put oneself forward", "to stand for"], hint: "kan-di-da-TAR-se. Always reflexive, always with a: candidatar-se a um lugar. O candidato is the applicant, and the same verb covers standing for election." },
        { id: "pt-u100l2-avaga", type: "vocab", front: "a vaga", reading: "avaga", meaning: "vacancy", example: { jp: "A vaga foi ocupada antes mesmo do fim do mês.", en: "The vacancy was filled even before the end of the month." }, drill: { jp: "A vaga foi ocupada muito depressa", en: "The vacancy was filled very quickly" }, accept: ["vacancy", "the vacancy", "opening", "position", "place"], hint: "VA-ga. An open place — a job, a university place, a parking space. It is the noun of vago (Unit 90): the space that is empty. It is also a wave at sea." },
        { id: "pt-u100l2-recrutar", type: "vocab", front: "recrutar", reading: "recrutar", meaning: "to recruit", example: { jp: "A empresa quer recrutar mais dez pessoas até ao fim do verão.", en: "The company wants to recruit ten more people by the end of the summer." }, drill: { jp: "A empresa quer recrutar mais pessoas", en: "The company wants to recruit more people" }, accept: ["to recruit", "recruit", "to hire", "to take on", "to bring in"], hint: "rre-kru-TAR. To bring new people into an organisation. O recrutamento is the process, o recrutador the recruiter. Its origin is military, exactly as in English." },
        { id: "pt-u100l2-aascensao", type: "vocab", front: "a ascensão", reading: "aascensao", meaning: "rise (advancement)", example: { jp: "A ascensão do jovem chefe foi rápida e surpreendeu toda a gente.", en: "The young boss's rise was fast and surprised everybody." }, drill: { jp: "A ascensão do jovem chefe foi rápida", en: "The young boss's rise was fast" }, accept: ["rise", "the rise", "advancement", "climb", "ascent"], hint: "ash-sen-SOWN. Moving upward — in a career, in power, or physically. Ascender is the verb, and a ascensão social is social mobility." },
        { id: "pt-u100l2-oconcurso", type: "vocab", front: "o concurso", reading: "oconcurso", meaning: "open competition", example: { jp: "O concurso para o lugar abriu em janeiro e acaba em março.", en: "The open competition for the post opened in January and ends in March." }, drill: { jp: "O concurso para o lugar abriu ontem", en: "The competition for the post opened yesterday" }, accept: ["open competition", "competition", "the competition", "recruitment competition", "contest"], hint: "kon-KUR-su. In Portugal, the formal open competition by which public posts are filled — abrir concurso. It is also a contest of any kind, including a television quiz." },
      ],
    },
    {
      id: "pt-u100l3",
      unit: 100,
      lesson: 3,
      title: "A organização",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Run things in Portuguese — the department, the minutes, the guideline, joining up two teams' work.",
      items: [
        { id: "pt-u100l3-odepartamento", type: "vocab", front: "o departamento", reading: "odepartamento", meaning: "department", example: { jp: "O departamento novo junta pessoas de três equipas antigas.", en: "The new department brings together people from three old teams." }, drill: { jp: "O departamento novo junta três equipas", en: "The new department brings together three teams" }, accept: ["department", "the department", "division", "unit", "section"], hint: "de-par-ta-MEN-tu. A named part of an organisation. A Portuguese university has departamentos too; a government one is o ministério." },
        { id: "pt-u100l3-coordenar", type: "vocab", front: "coordenar", reading: "coordenar", meaning: "to coordinate", example: { jp: "Alguém tem de coordenar o trabalho das várias equipas todas.", en: "Somebody has to coordinate the work of all the various teams." }, drill: { jp: "Alguém tem de coordenar as equipas", en: "Somebody has to coordinate the teams" }, accept: ["to coordinate", "coordinate", "to run", "to manage", "to bring together"], hint: "ku-or-de-NAR. To make separate efforts work together. O coordenador is a very common Portuguese job title, in schools especially." },
        { id: "pt-u100l3-aata", type: "vocab", front: "a ata", reading: "aata", meaning: "minutes (of a meeting)", example: { jp: "A ata da reunião passada não foi aprovada por toda a gente.", en: "The minutes of the last meeting weren't approved by everybody." }, drill: { jp: "A ata da reunião foi aprovada", en: "The minutes of the meeting were approved" }, accept: ["minutes", "the minutes", "record of a meeting", "meeting record"], hint: "A-ta. The written record of what a meeting decided — lavrar a ata is to write it up. Portugal has written ata since 1990; older documents have acta." },
        { id: "pt-u100l3-oorganigrama", type: "vocab", front: "o organigrama", reading: "oorganigrama", meaning: "org chart", example: { jp: "O organigrama da empresa mudou três vezes num só ano.", en: "The company's org chart changed three times in a single year." }, drill: { jp: "O organigrama da empresa mudou outra vez", en: "The company's org chart changed again" }, accept: ["org chart", "organisation chart", "the org chart", "organogram", "structure chart"], hint: "or-ga-ni-GRA-ma. The diagram of who reports to whom. Portugal says organigrama, Brazil organograma, and both are understood either side of the Atlantic." },
        { id: "pt-u100l3-adiretriz", type: "vocab", front: "a diretriz", reading: "adiretriz", meaning: "guideline", example: { jp: "A diretriz nova chegou por email e ninguém a percebeu bem.", en: "The new guideline arrived by email and nobody really understood it." }, drill: { jp: "A diretriz nova chegou por email", en: "The new guideline arrived by email" }, accept: ["guideline", "the guideline", "directive", "instruction", "policy line"], hint: "di-re-TREESH. An instruction from above setting the line to follow; plural as diretrizes. Portugal has written diretriz since 1990, older texts directriz." },
        { id: "pt-u100l3-articular", type: "vocab", front: "articular", reading: "articular", meaning: "to join up (work)", example: { jp: "É preciso articular melhor o trabalho da escola e o da câmara.", en: "The school's work and the council's need to be joined up better." }, drill: { jp: "É preciso articular melhor as respostas", en: "The responses need to be joined up better" }, accept: ["to join up", "join up", "to coordinate jointly", "to dovetail", "to align"], hint: "ar-ti-ku-LAR. To make two organisations' work fit together — articular com. This joined-up sense is far commoner in Portuguese officialese than the 'speak clearly' one." },
      ],
    },
    {
      id: "pt-u100l4",
      unit: 100,
      lesson: 4,
      title: "Os resultados",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Report on how it went in Portuguese — the indicator, the effectiveness, the return, and falling short.",
      items: [
        { id: "pt-u100l4-produtivo", type: "vocab", front: "produtivo", reading: "produtivo", meaning: "productive", example: { jp: "O dia foi produtivo apesar de tudo o que correu mal de manhã.", en: "The day was productive despite everything that went wrong in the morning." }, drill: { jp: "O dia foi produtivo apesar de tudo", en: "The day was productive despite everything" }, accept: ["productive", "efficient", "fruitful", "worthwhile"], hint: "pru-du-TEE-vu. Getting a lot done. A produtividade is the measure of it, and it is the word Portuguese economists use most often about the country itself." },
        { id: "pt-u100l4-obalanco", type: "vocab", front: "o balanço", reading: "obalanco", meaning: "stocktaking (review)", example: { jp: "O balanço do ano foi bastante melhor do que se esperava.", en: "The year's stocktaking was considerably better than expected." }, drill: { jp: "O balanço do ano foi positivo", en: "The year's review was positive" }, accept: ["stocktaking", "review", "the review", "assessment", "balance sheet"], hint: "ba-LAN-su. Fazer o balanço is to take stock of a period. It is also the accounting balance sheet, and physically a swing — all from balançar, to rock." },
        { id: "pt-u100l4-oindicador", type: "vocab", front: "o indicador", reading: "oindicador", meaning: "indicator", example: { jp: "O indicador mais fiável é o número de pessoas que ficam.", en: "The most reliable indicator is the number of people who stay." }, drill: { jp: "O indicador mais fiável é este", en: "The most reliable indicator is this one" }, accept: ["indicator", "the indicator", "measure", "metric", "sign"], hint: "in-di-ka-DOR. A number that stands in for something bigger — indicadores económicos. Also the indicator light on a car, and the index finger: o dedo indicador." },
        { id: "pt-u100l4-aeficacia", type: "vocab", front: "a eficácia", reading: "aeficacia", meaning: "effectiveness", example: { jp: "A eficácia do método já foi provada em várias escolas do país.", en: "The method's effectiveness has already been proven in several schools around the country." }, drill: { jp: "A eficácia do método foi provada", en: "The method's effectiveness was proven" }, accept: ["effectiveness", "the effectiveness", "efficacy", "how well it works"], hint: "e-fi-KA-si-a. Whether a thing achieves what it set out to. Portuguese keeps it firmly apart from a eficiência, achieving it without waste — the distinction is real and enforced." },
        { id: "pt-u100l4-oretorno", type: "vocab", front: "o retorno", reading: "oretorno", meaning: "return (on effort)", example: { jp: "O retorno do investimento só aparece ao fim de vários anos.", en: "The return on the investment only appears after several years." }, drill: { jp: "O retorno do investimento é lento", en: "The return on the investment is slow" }, accept: ["return", "the return", "payback", "yield", "return on investment"], hint: "rre-TOR-nu. What you get back for what you put in — o retorno do investimento. Its plain sense is a return journey, and on a Portuguese motorway o retorno is the turnaround." },
        { id: "pt-u100l4-aquem", type: "vocab", front: "aquém", reading: "aquem", meaning: "short of", example: { jp: "O resultado ficou aquém daquilo que toda a gente esperava.", en: "The result fell short of what everyone was expecting." }, drill: { jp: "O resultado ficou aquém do esperado", en: "The result fell short of expectations" }, accept: ["short of", "below", "falling short of", "less than", "not up to"], hint: "a-KENG. Ficar aquém de is to fall short of. Its opposite is além, beyond — learn the pair together, because Portuguese uses both constantly." },
      ],
    },
  ],
};
