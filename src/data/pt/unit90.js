// PT Unit 90 — Os sistemas e a abstração (slot: abstraction) — B2
//
// TALKING ABOUT A THING'S STRUCTURE RATHER THAN THE THING. u58 (B1) gave the
// learner the abstract nouns themselves — a teoria, o conceito, a noção, o
// critério, o modelo, abstrato, concreto, representar — and u76 added more. So
// the vocabulary of ideas exists. What does not exist is the vocabulary of
// STRUCTURE: parts and how they connect, what a model's adjustable pieces are
// called, how to say a word is ambiguous, and how to sort things into classes.
//
// SLOT BOUNDARIES:
//   o conceito, a noção, o critério, o modelo, abstrato, concreto, representar,
//   o conjunto are SPENT at u58; simplificar at u77; o padrão at u82; a fronteira
//   at u46; o pormenor at u40; distinguir at u78. Used in examples, not re-carded.
//   This unit deliberately teaches o esquema and o diagrama as a PAIR with
//   u58's o modelo: the rough sketch, the printed figure, the thing modelled.
//   u94 (mine) owns instruments and measurement; the numbers are not here.
//
// One lexeme per family: delimitar without a delimitação, classificar without a
// classificação, rigoroso without o rigor.
//
// Conventions: see unit1.js header (language) and unit88.js (B2 band).
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT90 = {
  id: "pt-u90",
  lang: "pt",
  title: "Os sistemas e a abstração",
  order: 90,
  stage: "b2",
  lessons: [
    {
      id: "pt-u90l1",
      unit: 90,
      lesson: 1,
      title: "O sistema",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a system is put together in Portuguese — its parts, how they connect, and what lies underneath it.",
      items: [
        { id: "pt-u90l1-omecanismo", type: "vocab", front: "o mecanismo", reading: "omecanismo", meaning: "mechanism", example: { jp: "O mecanismo de apoio às famílias funciona mal quando falta dinheiro.", en: "The support mechanism for families works badly when money is short." }, drill: { jp: "O mecanismo de apoio funciona bem", en: "The support mechanism works well" }, accept: ["mechanism", "the mechanism", "workings", "machinery", "device"], hint: "me-ka-NEEZ-mu. Both the moving parts inside a machine and the arrangement that makes a rule or a scheme work — um mecanismo de apoio is a support scheme." },
        { id: "pt-u90l1-ocomponente", type: "vocab", front: "o componente", reading: "ocomponente", meaning: "component", example: { jp: "Cada componente do sistema pode ser trocado sem parar o resto.", en: "Each component of the system can be swapped without stopping the rest." }, drill: { jp: "O componente mais caro é este", en: "The most expensive component is this one" }, accept: ["component", "the component", "part", "element", "piece"], hint: "kom-pu-NEN-te. A named part of a larger whole, in engineering or in an argument. Portuguese also uses it as an adjective: a parte componente." },
        { id: "pt-u90l1-interligar", type: "vocab", front: "interligar", reading: "interligar", meaning: "to interconnect", example: { jp: "As escolas estão interligadas pela mesma rede desde o ano passado.", en: "The schools have been interconnected by the same network since last year." }, drill: { jp: "Queremos interligar as escolas da região", en: "We want to interconnect the schools in the region" }, accept: ["to interconnect", "interconnect", "to link up", "to connect together", "to network"], hint: "in-ter-li-GAR — ligar with inter- in front. To connect things to EACH OTHER, not merely to a centre: the difference between a network and a hub." },
        { id: "pt-u90l1-sistematico", type: "vocab", front: "sistemático", reading: "sistematico", meaning: "systematic", example: { jp: "O erro não foi um acidente: era sistemático e repetia-se todos os meses.", en: "The error wasn't an accident: it was systematic and repeated itself every month." }, drill: { jp: "O problema é sistemático e antigo", en: "The problem is systematic and long-standing" }, accept: ["systematic", "methodical", "consistent", "across the board"], hint: "sish-te-MA-ti-ku. Following a system — either praise (a systematic method) or an accusation (a systematic failure). In reports it is almost always the accusation." },
        { id: "pt-u90l1-aengrenagem", type: "vocab", front: "a engrenagem", reading: "aengrenagem", meaning: "cog (gearing)", example: { jp: "Cada funcionário sente-se apenas uma engrenagem numa máquina enorme.", en: "Each employee feels like just a cog in an enormous machine." }, drill: { jp: "A engrenagem do sistema está gasta", en: "The system's gearing is worn out" }, accept: ["cog", "the cog", "gearing", "gears", "cog in the machine"], hint: "en-gre-na-ZHENG. The toothed wheel, and by extension the person who is only a small part of a big machine — ser uma engrenagem is the Portuguese complaint about bureaucracy." },
        { id: "pt-u90l1-subjacente", type: "vocab", front: "subjacente", reading: "subjacente", meaning: "underlying", example: { jp: "A ideia subjacente a todo o projeto é simples: menos regras e mais confiança.", en: "The idea underlying the whole project is simple: fewer rules and more trust." }, drill: { jp: "A ideia subjacente é bastante simples", en: "The underlying idea is quite simple" }, accept: ["underlying", "beneath the surface", "implicit", "lying beneath"], hint: "sub-zha-SEN-te — literally lying underneath. Of an idea, a cause or an assumption that is never stated but holds everything else up. Takes a: subjacente a este plano." },
      ],
    },
    {
      id: "pt-u90l2",
      unit: 90,
      lesson: 2,
      title: "O modelo e o esquema",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe how something is modelled in Portuguese — the outline, the variable, the setting you are allowed to change.",
      items: [
        { id: "pt-u90l2-oesquema", type: "vocab", front: "o esquema", reading: "oesquema", meaning: "outline (sketch)", example: { jp: "O professor desenhou um esquema no quadro para explicar todo o processo.", en: "The teacher drew an outline on the board to explain the whole process." }, drill: { jp: "O esquema do quadro estava errado", en: "The outline on the board was wrong" }, accept: ["outline", "sketch", "diagram", "the outline", "scheme"], hint: "esh-KE-ma. A simplified drawing or plan showing how the parts relate. It has a shady second life too: um esquema, said of people, is a racket." },
        { id: "pt-u90l2-avariavel", type: "vocab", front: "a variável", reading: "avariavel", meaning: "variable", example: { jp: "Existe uma variável que ninguém mediu e que muda todo o resultado.", en: "There is a variable nobody measured which changes the whole result." }, drill: { jp: "A variável mais importante é o tempo", en: "The most important variable is time" }, accept: ["variable", "the variable", "factor", "changing factor"], hint: "va-ri-A-vel. What is allowed to change in a system, in maths or in an argument. As an adjective it means changeable: tempo variável is the forecast nobody trusts." },
        { id: "pt-u90l2-oparametro", type: "vocab", front: "o parâmetro", reading: "oparametro", meaning: "parameter", example: { jp: "É preciso mudar apenas um parâmetro para o modelo dar outra resposta.", en: "You only need to change one parameter for the model to give a different answer." }, drill: { jp: "O parâmetro do estudo mudou outra vez", en: "The study's parameter changed again" }, accept: ["parameter", "the parameter", "setting", "limit", "boundary condition"], hint: "pa-RA-me-tru, stress on the second syllable. A value fixed before you start, which then shapes everything after. Dentro dos parâmetros means within the agreed limits." },
        { id: "pt-u90l2-simular", type: "vocab", front: "simular", reading: "simular", meaning: "to simulate", example: { jp: "O computador consegue simular o clima de toda a região durante anos.", en: "The computer can simulate the climate of the whole region over years." }, drill: { jp: "Vamos simular o clima da região", en: "We're going to simulate the region's climate" }, accept: ["to simulate", "simulate", "to model", "to mimic", "to run a simulation of"], hint: "si-mu-LAR. To reproduce a real process artificially so you can watch it happen. It also keeps the older sense of feigning: simular uma doença is to fake an illness." },
        { id: "pt-u90l2-areplica", type: "vocab", front: "a réplica", reading: "areplica", meaning: "replica", example: { jp: "A réplica do barco está no museu da cidade desde o ano passado.", en: "The replica of the ship has been in the city museum since last year." }, drill: { jp: "A réplica do barco é perfeita", en: "The replica of the ship is perfect" }, accept: ["replica", "the replica", "copy", "exact copy", "reproduction"], hint: "RE-pli-ka. An exact copy made deliberately. Careful: dar uma réplica means to answer back, so in a debate a réplica is the reply, not the copy." },
        { id: "pt-u90l2-odiagrama", type: "vocab", front: "o diagrama", reading: "odiagrama", meaning: "chart (schematic)", example: { jp: "O diagrama mostra como o dinheiro passa de um serviço para outro.", en: "The chart shows how the money passes from one department to another." }, drill: { jp: "O diagrama explica bem o processo", en: "The chart explains the process well" }, accept: ["chart", "diagram", "the chart", "schematic", "figure"], hint: "di-a-GRA-ma. The drawn figure in a report — boxes and arrows. Where um esquema can be a rough sketch on a board, um diagrama is the finished, printed version." },
      ],
    },
    {
      id: "pt-u90l3",
      unit: 90,
      lesson: 3,
      title: "O conceito e o limite",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Be precise in Portuguese about what a word covers — draw its limits, and say when it is vague or ambiguous.",
      items: [
        { id: "pt-u90l3-delimitar", type: "vocab", front: "delimitar", reading: "delimitar", meaning: "to delimit", example: { jp: "O primeiro passo é delimitar bem o problema antes de procurar soluções.", en: "The first step is to delimit the problem clearly before looking for solutions." }, drill: { jp: "Temos de delimitar bem o problema", en: "We have to delimit the problem clearly" }, accept: ["to delimit", "delimit", "to define the limits of", "to demarcate", "to scope"], hint: "de-li-mi-TAR. To draw the line around what you are talking about — a piece of land, a topic, a responsibility. Bem delimitado is high praise for a research question." },
        { id: "pt-u90l3-ambiguo", type: "vocab", front: "ambíguo", reading: "ambiguo", meaning: "ambiguous", example: { jp: "O texto da lei é ambíguo e cada tribunal lê-o à sua maneira.", en: "The text of the law is ambiguous and each court reads it its own way." }, drill: { jp: "O texto da lei é ambíguo", en: "The text of the law is ambiguous" }, accept: ["ambiguous", "open to two readings", "equivocal", "unclear"], hint: "am-BEE-gwu. Capable of two readings, both defensible — a precise fault, not merely fuzziness. A ambiguidade is what lawyers are paid to exploit." },
        { id: "pt-u90l3-acecao", type: "vocab", front: "a aceção", reading: "acecao", meaning: "sense (of a word)", example: { jp: "Nesta aceção, a palavra significa outra coisa por completo.", en: "In this sense, the word means something else entirely." }, drill: { jp: "A aceção antiga da palavra desapareceu", en: "The old sense of the word disappeared" }, accept: ["sense", "the sense", "meaning", "shade of meaning", "acceptation"], hint: "a-se-SOWN. One of the listed meanings of a word in a dictionary — each numbered entry is uma aceção. Portugal writes aceção; before the 1990 agreement it was acepção." },
        { id: "pt-u90l3-rigoroso", type: "vocab", front: "rigoroso", reading: "rigoroso", meaning: "rigorous", example: { jp: "O método é rigoroso e por isso o resultado pode ser repetido por outros.", en: "The method is rigorous and so the result can be repeated by others." }, drill: { jp: "O método do estudo é rigoroso", en: "The study's method is rigorous" }, accept: ["rigorous", "exacting", "strict", "thorough", "precise"], hint: "rri-gu-RO-zu. Strict in method, leaving no loose ends. Careful: of weather or of a person it means harsh — um inverno rigoroso is a severe winter." },
        { id: "pt-u90l3-vago", type: "vocab", front: "vago", reading: "vago", meaning: "vague", example: { jp: "A resposta foi vaga e ninguém ficou a saber o que ia acontecer.", en: "The answer was vague and nobody came away knowing what was going to happen." }, drill: { jp: "O plano ainda está muito vago", en: "The plan is still very vague" }, accept: ["vague", "imprecise", "woolly", "non-committal"], hint: "VA-gu. Short on detail, by accident or on purpose. Its other life is emptiness: um lugar vago is a free seat, and uma vaga (Unit 100) is a job vacancy." },
        { id: "pt-u90l3-aminucia", type: "vocab", front: "a minúcia", reading: "aminucia", meaning: "fine detail", example: { jp: "O relatório descreve cada passo do processo com enorme minúcia.", en: "The report describes each step of the process in enormous detail." }, drill: { jp: "A minúcia do relatório é rara", en: "The report's fine detail is rare" }, accept: ["fine detail", "minute detail", "meticulousness", "painstaking detail"], hint: "mi-NU-si-a. Detail so fine it verges on excessive — com minúcia means painstakingly. Minucioso, of a person, is someone who misses nothing." },
      ],
    },
    {
      id: "pt-u90l4",
      unit: 90,
      lesson: 4,
      title: "Classificar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Sort things in Portuguese — put them in categories, name the property they share, and say when two things amount to the same.",
      items: [
        { id: "pt-u90l4-classificar", type: "vocab", front: "classificar", reading: "classificar", meaning: "to classify", example: { jp: "O museu classifica as peças pela época em que foram feitas.", en: "The museum classifies the pieces by the period in which they were made." }, drill: { jp: "O museu vai classificar todas as peças", en: "The museum is going to classify all the pieces" }, accept: ["to classify", "classify", "to categorise", "to sort", "to grade"], hint: "kla-si-fi-KAR. To sort into named groups. In Portugal it is also what a school does to your work — a classificação is your grade — and what protects a building: um edifício classificado is listed." },
        { id: "pt-u90l4-acategoria", type: "vocab", front: "a categoria", reading: "acategoria", meaning: "category", example: { jp: "Este caso não entra em nenhuma categoria das que já existem.", en: "This case doesn't fit into any of the categories that already exist." }, drill: { jp: "Esta categoria inclui quase tudo", en: "This category includes almost everything" }, accept: ["category", "the category", "class", "group", "bracket"], hint: "ka-te-gu-REE-a. A named group within a classification. De primeira categoria means first-rate, and in sport a categoria is the weight or age class." },
        { id: "pt-u90l4-apropriedade", type: "vocab", front: "a propriedade", reading: "apropriedade", meaning: "property (attribute)", example: { jp: "A principal propriedade deste material é não deixar passar a água.", en: "This material's main property is that it doesn't let water through." }, drill: { jp: "A propriedade mais útil é esta", en: "The most useful property is this one" }, accept: ["property", "the property", "attribute", "characteristic", "quality"], hint: "pru-pri-e-DA-de. A quality a thing has in itself. It is also property in the legal sense — a propriedade privada — so context does the work, exactly as in English." },
        { id: "pt-u90l4-inerente", type: "vocab", front: "inerente", reading: "inerente", meaning: "inherent", example: { jp: "O risco é inerente a este trabalho e não se consegue eliminar por completo.", en: "The risk is inherent in this job and can't be eliminated entirely." }, drill: { jp: "O risco é inerente a este trabalho", en: "The risk is inherent in this job" }, accept: ["inherent", "intrinsic", "built in", "part and parcel", "innate"], hint: "i-ne-REN-te. Belonging to something by its very nature, so it cannot be removed without removing the thing itself. Takes a: inerente ao cargo." },
        { id: "pt-u90l4-equivaler", type: "vocab", front: "equivaler", reading: "equivaler", meaning: "to amount to", example: { jp: "O silêncio, neste caso, equivale a concordar com tudo o que foi dito.", en: "Silence, in this case, amounts to agreeing with everything that was said." }, drill: { jp: "Isso pode equivaler a dizer não", en: "That can amount to saying no" }, accept: ["to amount to", "to be equivalent", "to be the same as", "to equal", "to come to the same thing as"], hint: "e-ki-va-LER. To come to the same thing, in value or in effect — equivaler a. Constant in Portuguese argument: isso equivale a dizer que…" },
        { id: "pt-u90l4-otraco", type: "vocab", front: "o traço", reading: "otraco", meaning: "trait", example: { jp: "A paciência é o traço que toda a gente lhe reconhece.", en: "Patience is the trait everyone recognises in him." }, drill: { jp: "O traço mais forte é a paciência", en: "The strongest trait is patience" }, accept: ["trait", "the trait", "feature", "characteristic", "streak"], hint: "TRA-su. A single distinguishing feature of a character or a style. Its first sense is the stroke of a pen, which is the same idea: one deliberate line." },
      ],
    },
  ],
};
