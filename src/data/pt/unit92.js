// PT Unit 92 — A política e o direito (slot: politics-law) — B2
//
// THE INSTITUTIONS, IN THE WORDS PORTUGAL ACTUALLY USES. u32 (A2) gave the
// learner society and rights — a sociedade, o cidadão, o direito, a igualdade,
// votar — and u44 gave o tribunal and o juiz as places and people. u61 gave
// obligation and permission. None of that lets a learner read the politics page
// of a Portuguese newspaper, because that page is written in the vocabulary of
// INSTITUTIONS: who sits where, how a law is made and unmade, and how a case
// climbs through the courts.
//
// SLOT BOUNDARIES:
//   o tribunal and o juiz are SPENT at u44, o cidadão and a sociedade and o
//   direito and a igualdade at u32, a manifestação at u55, votar at u32, o
//   abuso at u61. All used freely in examples, none re-carded — this unit takes
//   the level ABOVE each: a instância beside o tribunal, o arguido beside o
//   juiz, o eleitorado beside votar, a cidadania beside o cidadão.
//   `o parecer` was deliberately NOT carded: parecer (to seem) is taught at
//   u31 and the noun would be a lexeme duplicate. o despacho does that job.
//   u97 (mine) owns ethics and justice as MORAL questions; this unit is the
//   machinery, not the rights and wrongs of it.
//
// PT-PT SPECIFICS WORTH KEEPING: o arguido is a formal legal status in
// Portugal with rights attached, not a loose word for a suspect — Brazil says
// réu or indiciado. A Assembleia da República, not "o congresso".
//
// Conventions: see unit1.js header (language) and unit88.js (B2 band).
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT92 = {
  id: "pt-u92",
  lang: "pt",
  title: "A política e o direito",
  order: 92,
  stage: "b2",
  lessons: [
    {
      id: "pt-u92l1",
      unit: 92,
      lesson: 1,
      title: "O Estado",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the parts of the Portuguese state — the assembly, the member, the term of office, the executive.",
      items: [
        { id: "pt-u92l1-aassembleia", type: "vocab", front: "a assembleia", reading: "aassembleia", meaning: "assembly", example: { jp: "A assembleia votou a lei depois de três dias de discussão.", en: "The assembly voted on the law after three days of debate." }, drill: { jp: "A assembleia votou a nova lei", en: "The assembly voted on the new law" }, accept: ["assembly", "the assembly", "parliament", "chamber"], hint: "a-sem-BLAY-a. Any body that meets to decide. In Portugal, A Assembleia da República is parliament itself — and a assembleia de condóminos is the residents' meeting everyone dreads." },
        { id: "pt-u92l1-odeputado", type: "vocab", front: "o deputado", reading: "odeputado", meaning: "member of parliament", example: { jp: "Cada deputado tem de explicar o seu voto em público.", en: "Each member of parliament has to explain their vote publicly." }, drill: { jp: "O deputado explicou o seu voto", en: "The MP explained their vote" }, accept: ["member of parliament", "MP", "deputy", "representative", "member"], hint: "de-pu-TA-du. The elected member of the Assembleia — Portugal has 230 of them. The feminine a deputada is used as a matter of course." },
        { id: "pt-u92l1-omandato", type: "vocab", front: "o mandato", reading: "omandato", meaning: "term of office", example: { jp: "O mandato dura quatro anos e pode ser repetido uma vez.", en: "The term of office lasts four years and can be repeated once." }, drill: { jp: "O mandato dura quatro anos apenas", en: "The term of office lasts just four years" }, accept: ["term of office", "term", "mandate", "tenure", "time in office"], hint: "man-DA-tu. The fixed period someone holds an office for. It also means the authority the voters gave — ter mandato para, to have a mandate to." },
        { id: "pt-u92l1-governar", type: "vocab", front: "governar", reading: "governar", meaning: "to govern", example: { jp: "É difícil governar um país quando falta dinheiro para quase tudo.", en: "It's hard to govern a country when there's no money for almost anything." }, drill: { jp: "É difícil governar sem maioria", en: "It's hard to govern without a majority" }, accept: ["to govern", "govern", "to rule", "to be in power", "to run the country"], hint: "gu-ver-NAR. To run a country or a region. O governo is the government, and governar-se, reflexive, means to manage on what you have." },
        { id: "pt-u92l1-alegislatura", type: "vocab", front: "a legislatura", reading: "alegislatura", meaning: "parliamentary term", example: { jp: "A legislatura começou em outubro e ainda não produziu nenhuma lei.", en: "The parliamentary term began in October and has not produced a single law yet." }, drill: { jp: "A legislatura começou no mês passado", en: "The parliamentary term began last month" }, accept: ["parliamentary term", "legislature", "term of parliament", "session"], hint: "le-zhish-la-TU-ra. The whole life of one parliament between elections — where o mandato is one person's term, a legislatura is the house's. Not to be confused with a legislação, the laws themselves." },
        { id: "pt-u92l1-oexecutivo", type: "vocab", front: "o executivo", reading: "oexecutivo", meaning: "the executive", example: { jp: "O executivo apresentou o plano à assembleia na semana passada.", en: "The executive presented the plan to the assembly last week." }, drill: { jp: "O executivo apresentou o plano ontem", en: "The executive presented the plan yesterday" }, accept: ["the executive", "executive", "the government", "cabinet"], hint: "ei-ze-ku-TEE-vu. The government as the branch that ACTS, against the parliament that legislates — a Portuguese paper uses o executivo and o governo interchangeably. Also a business executive." },
      ],
    },
    {
      id: "pt-u92l2",
      unit: 92,
      lesson: 2,
      title: "A lei",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Follow a Portuguese law through its life — legislation, decree, coming into force, repeal.",
      items: [
        { id: "pt-u92l2-alegislacao", type: "vocab", front: "a legislação", reading: "alegislacao", meaning: "legislation", example: { jp: "A legislação do ambiente mudou muito nos últimos anos.", en: "Environmental legislation has changed a great deal in recent years." }, drill: { jp: "A legislação do ambiente vai mudar", en: "Environmental legislation is going to change" }, accept: ["legislation", "the legislation", "the law", "statute", "laws"], hint: "le-zhish-la-SOWN. The body of law taken as a whole, not one law — so it stays singular where English might reach for 'laws'. A lei is the individual act." },
        { id: "pt-u92l2-revogar", type: "vocab", front: "revogar", reading: "revogar", meaning: "to repeal", example: { jp: "O tribunal revogou a decisão que tinha sido tomada em janeiro.", en: "The court repealed the decision that had been taken in January." }, drill: { jp: "O governo quer revogar essa lei", en: "The government wants to repeal that law" }, accept: ["to repeal", "repeal", "to revoke", "to overturn", "to strike down"], hint: "rre-vu-GAR. To cancel a law or a decision formally. The papers write lei revogada; a driving licence taken away is instead cassada." },
        { id: "pt-u92l2-vigorar", type: "vocab", front: "vigorar", reading: "vigorar", meaning: "to be in force", example: { jp: "A nova regra passa a vigorar no primeiro dia do mês seguinte.", en: "The new rule comes into force on the first day of the following month." }, drill: { jp: "A regra passa a vigorar amanhã", en: "The rule comes into force tomorrow" }, accept: ["to be in force", "to apply", "to be in effect", "to take effect", "to hold"], hint: "vi-gu-RAR, from o vigor. Said of a rule that is live — em vigor is on every Portuguese form you will ever fill in, and entrar em vigor is to come into force." },
        { id: "pt-u92l2-odecreto", type: "vocab", front: "o decreto", reading: "odecreto", meaning: "decree", example: { jp: "O decreto foi publicado e entrou em vigor no mesmo dia.", en: "The decree was published and came into force the same day." }, drill: { jp: "O decreto foi publicado esta manhã", en: "The decree was published this morning" }, accept: ["decree", "the decree", "order", "statutory order"], hint: "de-KRE-tu. A rule issued by the government rather than voted in parliament. In Portugal the common form is o decreto-lei, published in the Diário da República." },
        { id: "pt-u92l2-promulgar", type: "vocab", front: "promulgar", reading: "promulgar", meaning: "to enact", example: { jp: "O presidente promulgou a lei sem pedir qualquer alteração.", en: "The president enacted the law without asking for any change." }, drill: { jp: "O presidente vai promulgar a lei", en: "The president is going to enact the law" }, accept: ["to enact", "enact", "to sign into law", "to promulgate", "to give assent to"], hint: "pru-mul-GAR. The final signature that turns a voted text into law — in Portugal the President's job. He may instead veto it or send it to the Constitutional Court." },
        { id: "pt-u92l2-odespacho", type: "vocab", front: "o despacho", reading: "odespacho", meaning: "official ruling", example: { jp: "O despacho chegou tarde e o prazo já tinha passado há uma semana.", en: "The official ruling arrived late and the deadline had already passed a week before." }, drill: { jp: "O despacho chegou tarde outra vez", en: "The official ruling arrived late again" }, accept: ["official ruling", "ruling", "order", "directive", "official decision"], hint: "desh-PA-shu. The written decision a minister or official issues on a file. In ordinary speech despachar is to deal with something quickly — the same word being optimistic." },
      ],
    },
    {
      id: "pt-u92l3",
      unit: 92,
      lesson: 3,
      title: "O tribunal",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Follow a Portuguese case through the courts — the trial, the accused, the ruling, the appeal.",
      items: [
        { id: "pt-u92l3-julgar", type: "vocab", front: "julgar", reading: "julgar", meaning: "to try (in court)", example: { jp: "O caso vai ser julgado no tribunal da cidade já em setembro.", en: "The case will be tried in the city court as early as September." }, drill: { jp: "O tribunal vai julgar o caso", en: "The court will try the case" }, accept: ["to try", "try", "to judge", "to hear a case", "to pass judgement on"], hint: "zhul-GAR. In court, to try a case; outside it, to reckon — julgo que sim, I think so. O julgamento is the trial itself." },
        { id: "pt-u92l3-asentenca", type: "vocab", front: "a sentença", reading: "asentenca", meaning: "sentence (ruling)", example: { jp: "A sentença foi lida em voz alta e ninguém na sala disse nada.", en: "The sentence was read out and nobody in the room said a word." }, drill: { jp: "A sentença foi lida esta manhã", en: "The sentence was read out this morning" }, accept: ["sentence", "the sentence", "ruling", "judgement", "verdict"], hint: "sen-TEN-sa. The court's decision, and the punishment it sets. Careful: a grammatical sentence is a frase — sentença is only ever the legal one." },
        { id: "pt-u92l3-recorrer", type: "vocab", front: "recorrer", reading: "recorrer", meaning: "to appeal", example: { jp: "A empresa decidiu recorrer da sentença para o tribunal superior.", en: "The company decided to appeal the sentence to the higher court." }, drill: { jp: "A empresa vai recorrer da sentença", en: "The company is going to appeal the sentence" }, accept: ["to appeal", "appeal", "to lodge an appeal", "to take to a higher court"], hint: "rre-ku-RRER. With de, to appeal a decision; with a, to resort to something — recorrer a um amigo. O recurso is both the appeal and the resource." },
        { id: "pt-u92l3-oarguido", type: "vocab", front: "o arguido", reading: "oarguido", meaning: "the accused", example: { jp: "O arguido não quis falar e o advogado respondeu por ele.", en: "The accused declined to speak and the lawyer answered for him." }, drill: { jp: "O arguido não quis falar", en: "The accused declined to speak" }, accept: ["the accused", "accused", "defendant", "the defendant", "suspect"], hint: "ar-GWEE-du. A precise and very Portuguese status: the person formally named in an investigation, with rights that follow. Constituir-se arguido is constantly in the news; Brazil says réu or indiciado." },
        { id: "pt-u92l3-oacordao", type: "vocab", front: "o acórdão", reading: "oacordao", meaning: "appeal-court ruling", example: { jp: "O acórdão do tribunal superior tem mais de cem folhas.", en: "The appeal court's ruling runs to more than a hundred pages." }, drill: { jp: "O acórdão foi publicado esta semana", en: "The appeal-court ruling was published this week" }, accept: ["appeal-court ruling", "ruling", "judgement", "court opinion", "collective decision"], hint: "a-KOR-downg. The written decision of a court where SEVERAL judges decide together — from acordar, to agree. One judge issues a sentença; the higher court issues um acórdão." },
        { id: "pt-u92l3-ainstancia", type: "vocab", front: "a instância", reading: "ainstancia", meaning: "court level", example: { jp: "O caso já passou por todas as instâncias e não existe mais recurso.", en: "The case has already been through every court level and there is no further appeal." }, drill: { jp: "O caso passou por outra instância", en: "The case went through another court level" }, accept: ["court level", "instance", "tier of court", "court of instance"], hint: "insh-TAN-si-a. One rung of the court ladder — primeira instância is the first-level court. Outside the law, em última instância means 'ultimately'." },
      ],
    },
    {
      id: "pt-u92l4",
      unit: 92,
      lesson: 4,
      title: "A cidadania",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about rights and public life in Portuguese — citizenship, the vote, demands, sovereignty.",
      items: [
        { id: "pt-u92l4-acidadania", type: "vocab", front: "a cidadania", reading: "acidadania", meaning: "citizenship", example: { jp: "A cidadania portuguesa pode ser pedida depois de cinco anos no país.", en: "Portuguese citizenship can be applied for after five years in the country." }, drill: { jp: "A cidadania pode ser pedida hoje", en: "Citizenship can be applied for today" }, accept: ["citizenship", "the citizenship", "nationality", "civic status"], hint: "si-da-da-NEE-a. Both the legal status and the idea of taking part in public life — exercer a cidadania. Built straight on o cidadão, Unit 32." },
        { id: "pt-u92l4-reivindicar", type: "vocab", front: "reivindicar", reading: "reivindicar", meaning: "to demand (a right)", example: { jp: "Os trabalhadores reivindicam melhores salários desde o ano passado.", en: "The workers have been demanding better wages since last year." }, drill: { jp: "Os trabalhadores vão reivindicar melhores salários", en: "The workers are going to demand better wages" }, accept: ["to demand", "demand", "to claim", "to press for", "to call for"], hint: "rray-vin-di-KAR. To demand what you believe is owed to you by right — a wage, a law, a territory. Uma reivindicação is the demand itself, the word on every Portuguese protest banner." },
        { id: "pt-u92l4-osufragio", type: "vocab", front: "o sufrágio", reading: "osufragio", meaning: "suffrage", example: { jp: "O sufrágio universal só chegou a Portugal no século passado.", en: "Universal suffrage only reached Portugal in the last century." }, drill: { jp: "O sufrágio universal chegou tarde", en: "Universal suffrage arrived late" }, accept: ["suffrage", "the suffrage", "the franchise", "the right to vote"], hint: "su-FRA-zhi-u. The right to vote as an institution — sufrágio universal. The everyday verb is votar; sufrágio belongs to history and to law." },
        { id: "pt-u92l4-asoberania", type: "vocab", front: "a soberania", reading: "asoberania", meaning: "sovereignty", example: { jp: "A soberania do país não se discute, mas o resto pode ser negociado.", en: "The country's sovereignty is not up for discussion, but the rest can be negotiated." }, drill: { jp: "A soberania do país não se discute", en: "The country's sovereignty is not up for discussion" }, accept: ["sovereignty", "the sovereignty", "independence", "self-rule"], hint: "su-be-ra-NEE-a. The state's power to decide for itself, answering to nobody above. O soberano was the king; the word outlived the monarchy and moved to the state." },
        { id: "pt-u92l4-oeleitorado", type: "vocab", front: "o eleitorado", reading: "oeleitorado", meaning: "electorate", example: { jp: "O eleitorado mais novo quase não foi votar desta vez.", en: "The younger electorate hardly went to vote this time." }, drill: { jp: "O eleitorado mais novo não votou", en: "The younger electorate did not vote" }, accept: ["electorate", "the electorate", "voters", "the voters"], hint: "ei-lay-tu-RA-du. All the voters taken together. From o eleitor, the individual voter, and eleger, to elect — as eleições being the elections themselves." },
        { id: "pt-u92l4-apeticao", type: "vocab", front: "a petição", reading: "apeticao", meaning: "petition", example: { jp: "A petição juntou mais de cem mil assinaturas em poucas semanas.", en: "The petition gathered more than a hundred thousand signatures in a few weeks." }, drill: { jp: "A petição juntou muitas assinaturas", en: "The petition gathered many signatures" }, accept: ["petition", "the petition", "public petition", "signed request"], hint: "pe-ti-SOWN. A signed public request. In Portugal a petition with enough signatures must be debated in the Assembleia, which is exactly why they make the news." },
      ],
    },
  ],
};
