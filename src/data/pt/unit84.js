// PT Unit 84 — A informação e a pesquisa (slot: coverage-b1-11) — B1
// WHERE A FACT COMES FROM AND WHETHER IT HOLDS. The corpus can already read the
// news (a notícia, o jornal u18-u33), keep a list (a lista u27), file something
// (o ficheiro u33) and discover a thing (descobrir u34). What it cannot do is
// look something up, check it against a second place, or say what the finding
// rests on. That is this unit: search, data, verification, analysis.
//
// SLOT BOUNDARIES:
//   a fonte is the crew lead's, at u55 A atualidade e o debate público — it is
//   the obvious front for this slot and it is NOT carded here; it appears in
//   examples and the lead's unit teaches it. Lower slot wins, no negotiation.
//   o relatório (u24), a lista (u27), o ficheiro (u33), descobrir (u34), o
//   documento (u44), o registo (u49) are all SPENT — registar is carded here as
//   the VERB, which u49's noun does not cover.
//   u51 A opinião (block 1) owns arguing a position and u54 hedging a claim;
//   this unit stops at establishing what is actually the case.
//   a prova is mine at u81, so this unit takes a evidência instead of doubling it.
//
// One lexeme per family: analisar without a análise, concluir without a
// conclusão, a pesquisa with procurar rather than with pesquisar.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT84 = {
  id: "pt-u84",
  lang: "pt",
  title: "A informação e a pesquisa",
  order: 84,
  stage: "b1",
  lessons: [
    {
      id: "pt-u84l1",
      unit: 84,
      lesson: 1,
      title: "Procurar",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Go and find something out in Portuguese — look for it, find it, look it up, and say how you went about it.",
      items: [
        { id: "pt-u84l1-procurar", type: "vocab", front: "procurar", reading: "procurar", meaning: "to look for", example: { jp: "A turma procurou o significado da frase no livro do professor.", en: "The class looked for the meaning of the sentence in the teacher's book." }, drill: { jp: "Vou procurar o significado da frase", en: "I'm going to look for the meaning of the sentence" }, accept: ["look for", "to look for", "to search for", "to seek", "to try to find"], hint: "pru-ku-RAR. Looking for, whether or not you find it. Procura-se on a shop window means wanted, and a procura is demand, the twin of a oferta in any Portuguese economics page." },
        { id: "pt-u84l1-localizar", type: "vocab", front: "localizar", reading: "localizar", meaning: "to locate", example: { jp: "O pai localizou o parafuso no fundo da caixa da escada.", en: "My father located the screw at the bottom of the box on the stairs." }, drill: { jp: "Vou localizar o livro na escola", en: "I'm going to locate the book at the school" }, accept: ["locate", "to locate", "to find", "to track down", "to pinpoint"], hint: "lu-ka-li-ZAR, from o local. Finding WHERE a thing is, rather than finding it at all — a phone, a file, a person on a map. A localização is the location." },
        { id: "pt-u84l1-apesquisa", type: "vocab", front: "a pesquisa", reading: "apesquisa", meaning: "research (a search, a survey)", example: { jp: "A pesquisa do estudo novo aumentou a informação da cidade.", en: "The new study's research increased the city's information." }, drill: { jp: "A pesquisa do estudo foi grande", en: "The study's research was extensive" }, accept: ["the research", "research", "the search", "search", "survey"], hint: "pesh-KEE-za. Academic research and an internet search alike — fazer uma pesquisa covers both. Pesquisar is the verb, built straight off it." },
        { id: "pt-u84l1-examinar", type: "vocab", front: "examinar", reading: "examinar", meaning: "to examine", example: { jp: "O jornal examinou o caso da empresa durante um ano.", en: "The paper examined the company's case for a year." }, drill: { jp: "O jornal vai examinar o caso", en: "The paper is going to examine the case" }, accept: ["examine", "to examine", "to look at", "to inspect", "to go over"], hint: "ai-za-mi-NAR. Looking closely and in order — a doctor, an inspector, an auditor. Um exame is both the medical test and the school exam, which is a very Portuguese pairing." },
        { id: "pt-u84l1-consultar", type: "vocab", front: "consultar", reading: "consultar", meaning: "to look up", example: { jp: "O médico consultou os dados antes de falar com a família.", en: "The doctor looked up the data before speaking to the family." }, drill: { jp: "Vou consultar os dados do estudo", en: "I'm going to look up the study's data" }, accept: ["consult", "to consult", "look up", "to look up", "to check", "to refer to"], hint: "kon-sul-TAR. To look a thing up in a book, a file or a list — and to consult a person. A consulta is the doctor's appointment, which is the same act from the other chair." },
        { id: "pt-u84l1-ometodo", type: "vocab", front: "o método", reading: "ometodo", meaning: "method", example: { jp: "O método do professor é simples e a turma aprende bem.", en: "The teacher's method is simple and the class learns well." }, drill: { jp: "O método do professor é simples", en: "The teacher's method is simple" }, accept: ["the method", "method", "approach", "the approach", "way"], hint: "ME-tu-du, stress on the first syllable. The way of going about something, in a lab or a classroom. Com método means systematically, and metódico of a person is methodical." },
      ],
    },
    {
      id: "pt-u84l2",
      unit: 84,
      lesson: 2,
      title: "Os dados",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Name what information comes as in Portuguese — a figure, a survey, a sample — and record it somewhere.",
      items: [
        { id: "pt-u84l2-odado", type: "vocab", front: "o dado", reading: "odado", meaning: "piece of data", example: { jp: "O dado mais claro do estudo é a percentagem de pessoas jovens.", en: "The clearest piece of data in the study is the percentage of young people." }, drill: { jp: "O dado mais claro é a percentagem", en: "The clearest piece of data is the percentage" }, accept: ["the data", "data", "the figure", "figure", "fact", "piece of data"], hint: "DA-du. Almost always plural in use: os dados, the data. The singular also means a dice, so os dados can be figures or a pair of dice — context decides, and it usually is not close." },
        { id: "pt-u84l2-ainformacao", type: "vocab", front: "a informação", reading: "ainformacao", meaning: "information", example: { jp: "A informação do jornal não é igual à informação da televisão.", en: "The newspaper's information isn't the same as the television's information." }, drill: { jp: "A informação do jornal não é igual", en: "The newspaper's information isn't the same" }, accept: ["the information", "information", "info", "news"], hint: "in-for-ma-SOWN. Uncountable in English, countable in Portuguese: uma informação is a single piece of it, and as informações is the information desk at a Portuguese station." },
        { id: "pt-u84l2-aamostra", type: "vocab", front: "a amostra", reading: "aamostra", meaning: "sample", example: { jp: "A amostra do inquérito foi pequena e o resultado não é claro.", en: "The survey's sample was small and the result isn't clear." }, drill: { jp: "A amostra do inquérito foi pequena", en: "The survey's sample was small" }, accept: ["the sample", "sample", "specimen", "the specimen"], hint: "a-MOSH-tra, from mostrar, to show — a sample is the bit shown. Uma amostra grátis is a free sample, and in a lab it is the specimen." },
        { id: "pt-u84l2-registar", type: "vocab", front: "registar", reading: "registar", meaning: "to record", example: { jp: "A empresa regista a hora de entrada de todos os dias.", en: "The company records the arrival time every day." }, drill: { jp: "A empresa vai registar a hora", en: "The company is going to record the time" }, accept: ["record", "to record", "to register", "to log", "to write down"], hint: "rre-zhish-TAR — Portugal says registar where Brazil says registrar, with no r in the middle. It is writing a fact down officially; recording sound is gravar." },
        { id: "pt-u84l2-oarquivo", type: "vocab", front: "o arquivo", reading: "oarquivo", meaning: "archive", example: { jp: "O arquivo da cidade tem documentos do século passado.", en: "The city archive has documents from the last century." }, drill: { jp: "O arquivo da cidade tem documentos", en: "The city archive has documents" }, accept: ["the archive", "archive", "the file", "file", "records"], hint: "ar-KEE-vu. The archive, and the filing cabinet it lives in. On a computer Portugal says o ficheiro for a file, which you met at Unit 33 — arquivo in that sense is the Brazilian word." },
        { id: "pt-u84l2-oquestionario", type: "vocab", front: "o questionário", reading: "oquestionario", meaning: "questionnaire", example: { jp: "O questionário da escola foi curto e a turma toda respondeu.", en: "The school questionnaire was short and the whole class answered." }, drill: { jp: "O questionário da escola foi curto", en: "The school questionnaire was short" }, accept: ["the questionnaire", "questionnaire", "form", "the form", "survey"], hint: "kesh-ti-u-NA-ri-u, built on a questão. The sheet of questions itself, where o inquérito is the whole survey it belongs to. Preencher um questionário is to fill one in." },
      ],
    },
    {
      id: "pt-u84l3",
      unit: 84,
      lesson: 3,
      title: "Conferir",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Check something in Portuguese before you repeat it — verify it, confirm it, prove it, go back over it, name the error.",
      items: [
        { id: "pt-u84l3-verificar", type: "vocab", front: "verificar", reading: "verificar", meaning: "to check", example: { jp: "O chefe verificou os dados do inquérito antes do relatório.", en: "The boss checked the survey data before the report." }, drill: { jp: "Vou verificar os dados do inquérito", en: "I'm going to check the survey data" }, accept: ["check", "to check", "to verify", "verify", "to make sure"], hint: "ve-ri-fi-KAR, with verdade, truth, inside it. Checking a fact against something else. Verificar-se means to turn out to be true: a previsão verificou-se." },
        { id: "pt-u84l3-comprovar", type: "vocab", front: "comprovar", reading: "comprovar", meaning: "to prove", example: { jp: "O estudo comprovou o que a professora dizia na aula.", en: "The study proved what the teacher was saying in the lesson." }, drill: { jp: "O estudo vai comprovar tudo", en: "The study is going to prove everything" }, accept: ["prove", "to prove", "to demonstrate", "to substantiate", "to bear out"], hint: "kom-pru-VAR. To show by evidence that a thing holds — heavier than confirmar, which only says yes to something already claimed. Um comprovativo is the receipt that proves you paid." },
        { id: "pt-u84l3-rever", type: "vocab", front: "rever", reading: "rever", meaning: "to review", example: { jp: "O chefe reviu o trabalho todo antes de falar com a empresa.", en: "The boss reviewed the whole job before speaking to the company." }, drill: { jp: "Vou rever o trabalho todo", en: "I'm going to review the whole job" }, accept: ["review", "to review", "to go over", "to revise", "to see again"], hint: "rre-VER, ver with re- in front and following it exactly: revejo, revês, revê. Going over work again, and also seeing a person again — até à próxima, espero rever-te." },
        { id: "pt-u84l3-aevidencia", type: "vocab", front: "a evidência", reading: "aevidencia", meaning: "evidence", example: { jp: "A evidência do inquérito é clara mas a turma não quer aceitar.", en: "The survey's evidence is clear but the class doesn't want to accept it." }, drill: { jp: "A evidência do inquérito é clara", en: "The survey's evidence is clear" }, accept: ["the evidence", "evidence", "proof", "the proof"], hint: "e-vi-DEN-si-a. What makes a thing plain. Careful with the adjective evidente, which means obvious rather than evidence-based — é evidente que… is a very common opener." },
        { id: "pt-u84l3-oengano", type: "vocab", front: "o engano", reading: "oengano", meaning: "mistake (a mix-up)", example: { jp: "O engano do jornal com o nome da empresa foi grande.", en: "The paper's mistake with the company's name was a big one." }, drill: { jp: "O engano do jornal foi grande", en: "The paper's mistake was a big one" }, accept: ["the mistake", "mistake", "error", "the error", "misunderstanding"], hint: "en-GA-nu. A mistake made in good faith, where um erro can be any error at all. Enganar-se is to be mistaken, and engano! is what you say when someone rings a wrong number." },
        { id: "pt-u84l3-conferir", type: "vocab", front: "conferir", reading: "conferir", meaning: "to check over", example: { jp: "O chefe conferiu os dados do estudo antes de falar com o jornal.", en: "The boss checked the study's data over before talking to the paper." }, drill: { jp: "Vou conferir os dados do estudo", en: "I'm going to check the study's data over" }, accept: ["check", "to check", "to check over", "to verify", "to cross-check"], hint: "kon-fe-REER. Checking item by item against a list — a bill, a delivery, a set of figures. It also means to confer a title, which is the older sense." },
      ],
    },
    {
      id: "pt-u84l4",
      unit: 84,
      lesson: 4,
      title: "Analisar",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Make something of the figures in Portuguese — analyse them, compare them, quote the study, and land a conclusion.",
      items: [
        { id: "pt-u84l4-analisar", type: "vocab", front: "analisar", reading: "analisar", meaning: "to analyse", example: { jp: "A empresa analisou os dados do ano antes da reunião de janeiro.", en: "The company analysed the year's data before the January meeting." }, drill: { jp: "Vou analisar os dados do ano", en: "I'm going to analyse the year's data" }, accept: ["analyse", "to analyse", "analyze", "to analyze", "to examine", "to look at"], hint: "a-na-li-ZAR. Taking a thing apart to see how it works — data, a text, blood. A análise is the noun, and análises at a Portuguese clinic means blood tests." },
        { id: "pt-u84l4-oestudo", type: "vocab", front: "o estudo", reading: "oestudo", meaning: "study", example: { jp: "O estudo da escola das horas de trabalho é novo.", en: "The school's study of working hours is new." }, drill: { jp: "O estudo da escola é novo", en: "The school's study is new" }, accept: ["the study", "study", "research", "survey", "paper"], hint: "esh-TOO-du, from estudar. A research study, and also the act of studying: o estudo é importante. Um estúdio, with the í, is a recording studio — different word, one letter apart." },
        { id: "pt-u84l4-asintese", type: "vocab", front: "a síntese", reading: "asintese", meaning: "summary", example: { jp: "A síntese do estudo tem duas frases e diz tudo.", en: "The summary of the study is two sentences long and says everything." }, drill: { jp: "A síntese do estudo tem duas frases", en: "The summary of the study is two sentences long" }, accept: ["the summary", "summary", "synthesis", "the synthesis", "overview"], hint: "SEEN-te-ze. The short form that pulls the whole thing together — em síntese opens the closing paragraph of a Portuguese report, where em resumo is its everyday twin." },
        { id: "pt-u84l4-ografico", type: "vocab", front: "o gráfico", reading: "ografico", meaning: "chart", example: { jp: "O gráfico do jornal mostra a percentagem de pessoas na cidade.", en: "The paper's chart shows the percentage of people in the city." }, drill: { jp: "O gráfico do jornal é claro", en: "The paper's chart is clear" }, accept: ["the chart", "chart", "graph", "the graph", "diagram"], hint: "GRA-fi-ku. The chart itself. As an adjective it means graphic — design gráfico. Note the stress on the first syllable, which the accent marks." },
        { id: "pt-u84l4-odetalhe", type: "vocab", front: "o detalhe", reading: "odetalhe", meaning: "detail (a particular)", example: { jp: "O detalhe mais claro do estudo é a idade das pessoas.", en: "The clearest detail in the study is the people's age." }, drill: { jp: "O detalhe mais claro é a idade", en: "The clearest detail is the age" }, accept: ["the detail", "detail", "particular", "the particulars", "point"], hint: "de-TA-lye, lh. Em detalhe means in detail. Portuguese also has o pormenor for exactly the same thing — por menor, by the smaller — and uses both without preference." },
        { id: "pt-u84l4-areferencia", type: "vocab", front: "a referência", reading: "areferencia", meaning: "reference", example: { jp: "A referência do livro é clara e o estudo diz tudo.", en: "The book's reference is clear and the study says everything." }, drill: { jp: "A referência do livro é clara", en: "The book's reference is clear" }, accept: ["the reference", "reference", "the citation", "citation", "mention"], hint: "rre-fe-REN-si-a, from referir. The pointer to a source in a text — and a reference for a job, which in Portugal is usually uma carta de recomendação." },
      ],
    },
  ],
};
