// PT Unit 89 — As fontes e a prova (slot: evidence) — B2
//
// WHERE A CLAIM COMES FROM, AND WHETHER IT HOLDS. u84 (B1) taught the learner
// to go and look something up — procurar, consultar, a pesquisa, o dado, a
// amostra, verificar, rever. What it never taught is ATTRIBUTION: how to quote
// a source, judge whether that source is worth trusting, and report what
// somebody else claims without adopting the claim yourself. That is this unit.
//
// SLOT BOUNDARIES:
//   citar and a fonte are SPENT at u55, o relato at u55, a prova at u81, o
//   testemunho at u63, a referência / comprovar / verificar at u84. All are
//   used freely in examples here and none is re-carded — this unit takes the
//   words those units left behind (a citação beside citar, testemunhar beside
//   o testemunho, o fundamento beside u88's fundamentar).
//   u88 (mine) owns the SHAPE of an argument; this unit owns what it rests on.
//   u98 (mine) owns risk and likelihood — how PROBABLE a claim is, is not here.
//
// One lexeme per family: corroborar without a corroboração, aferir without a
// aferição.
//
// Conventions: see unit1.js header (language) and unit88.js (B2 band).
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT89 = {
  id: "pt-u89",
  lang: "pt",
  title: "As fontes e a prova",
  order: 89,
  stage: "b2",
  lessons: [
    {
      id: "pt-u89l1",
      unit: 89,
      lesson: 1,
      title: "Citar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Quote a source in Portuguese — reproduce the passage, point the reader elsewhere, and say you did it word for word.",
      items: [
        { id: "pt-u89l1-acitacao", type: "vocab", front: "a citação", reading: "acitacao", meaning: "quotation", example: { jp: "A citação do livro aparece logo no início do relatório.", en: "The quotation from the book appears right at the start of the report." }, drill: { jp: "A citação do livro está correta", en: "The quotation from the book is correct" }, accept: ["quotation", "the quotation", "quote", "the quote", "citation"], hint: "si-ta-SOWN. The quoted words themselves, as opposed to citar (Unit 55), the act of quoting. Entre aspas is in quotation marks." },
        { id: "pt-u89l1-oexcerto", type: "vocab", front: "o excerto", reading: "oexcerto", meaning: "extract (passage)", example: { jp: "O professor leu um excerto do romance em voz alta para a turma.", en: "The teacher read an extract from the novel aloud to the class." }, drill: { jp: "O excerto do romance é curto", en: "The extract from the novel is short" }, accept: ["extract", "the extract", "passage", "excerpt", "the passage"], hint: "ei-SHER-tu. A piece cut out of a longer text and shown on its own. Portuguese also says um trecho; excerto is the more formal of the two." },
        { id: "pt-u89l1-remeter", type: "vocab", front: "remeter", reading: "remeter", meaning: "to refer (to send on)", example: { jp: "O autor remete o leitor para a página anterior sempre que usa a palavra.", en: "The author refers the reader to the previous page whenever he uses the word." }, drill: { jp: "O texto vai remeter para outro estudo", en: "The text will refer to another study" }, accept: ["to refer", "refer", "to refer on", "to send on", "to point to"], hint: "rre-me-TER. To send the reader somewhere else — remeter para uma nota. At a post office it is to send a letter on, which is the same gesture with paper." },
        { id: "pt-u89l1-transcrever", type: "vocab", front: "transcrever", reading: "transcrever", meaning: "to transcribe", example: { jp: "A jornalista transcreveu a entrevista toda antes de escrever o artigo.", en: "The journalist transcribed the whole interview before writing the article." }, drill: { jp: "Vou transcrever a entrevista esta noite", en: "I'm going to transcribe the interview tonight" }, accept: ["to transcribe", "transcribe", "to write out", "to type up"], hint: "transh-kre-VER. To write speech down exactly as it was said. A transcrição is the resulting text — in Portugal, what a court secretary produces." },
        { id: "pt-u89l1-naintegra", type: "vocab", front: "na íntegra", reading: "naintegra", meaning: "in full", example: { jp: "O jornal publicou a carta na íntegra, sem cortar uma única linha.", en: "The paper published the letter in full, without cutting a single line." }, drill: { jp: "O jornal publicou o texto na íntegra", en: "The paper published the text in full" }, accept: ["in full", "in its entirety", "unabridged", "complete", "in full text"], hint: "na EEN-te-gra. The set phrase for a document reproduced whole, with nothing cut. You will see it above any Portuguese paper that prints a speech or a letter complete." },
        { id: "pt-u89l1-textualmente", type: "vocab", front: "textualmente", reading: "textualmente", meaning: "verbatim", example: { jp: "Foi exatamente isso que ele disse textualmente, e ficou gravado.", en: "That is exactly what he said verbatim, and it was recorded." }, drill: { jp: "Ele disse textualmente essas mesmas palavras", en: "He said those very words verbatim" }, accept: ["verbatim", "word for word", "literally", "in those exact words"], hint: "teksh-twal-MEN-te. Word for word, exactly as written or said — used when you want to stress that you are not paraphrasing." },
      ],
    },
    {
      id: "pt-u89l2",
      unit: 89,
      lesson: 2,
      title: "A credibilidade",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Judge a source in Portuguese — say whether it is credible, impartial, or quietly taking a side.",
      items: [
        { id: "pt-u89l2-credivel", type: "vocab", front: "credível", reading: "credivel", meaning: "credible", example: { jp: "A explicação é credível porque vem de quem esteve presente naquele dia.", en: "The explanation is credible because it comes from someone who was there that day." }, drill: { jp: "A fonte parece credível e recente", en: "The source seems credible and recent" }, accept: ["credible", "believable", "convincing", "worth believing"], hint: "kre-DEE-vel. Worth believing — of a source, a story or a threat. Note that pouco credível, 'not very credible', is the polite Portuguese way of calling something nonsense." },
        { id: "pt-u89l2-fidedigno", type: "vocab", front: "fidedigno", reading: "fidedigno", meaning: "reliable (trustworthy)", example: { jp: "O estudo usa apenas dados de instituições fidedignas e bem conhecidas.", en: "The study uses only data from reliable, well-known institutions." }, drill: { jp: "Este é um estudo fidedigno", en: "This is a reliable study" }, accept: ["reliable", "trustworthy", "dependable", "authoritative"], hint: "fi-de-DIG-nu, from the Latin for 'worthy of faith'. Said of a source rather than of a friend — uma fonte fidedigna. Higher praise than credível: it means proven over time." },
        { id: "pt-u89l2-aisencao", type: "vocab", front: "a isenção", reading: "aisencao", meaning: "impartiality", example: { jp: "A isenção do jornal é o que dá valor às notícias que publica.", en: "The paper's impartiality is what gives value to the news it publishes." }, drill: { jp: "A isenção do jornal foi elogiada", en: "The paper's impartiality was praised" }, accept: ["impartiality", "the impartiality", "neutrality", "even-handedness", "independence"], hint: "i-zen-SOWN. Not taking sides — the quality expected of a judge, a referee or a public broadcaster. It also means exemption: isenção de impostos is tax exemption." },
        { id: "pt-u89l2-tendencioso", type: "vocab", front: "tendencioso", reading: "tendencioso", meaning: "biased", example: { jp: "O título do artigo era tendencioso, mas os factos estavam todos certos.", en: "The article's headline was biased, but the facts were all correct." }, drill: { jp: "Esse artigo parece muito tendencioso", en: "That article seems very biased" }, accept: ["biased", "slanted", "loaded", "one-sided", "tendentious"], hint: "ten-den-si-O-zu. Written so as to push the reader one way — of a headline, a question or a report. The neutral word for a leaning is a tendência." },
        { id: "pt-u89l2-aparcialidade", type: "vocab", front: "a parcialidade", reading: "aparcialidade", meaning: "partiality", example: { jp: "A parcialidade do relatório ficou clara logo no início.", en: "The report's partiality was clear right from the start." }, drill: { jp: "A parcialidade do relatório incomodou muita gente", en: "The report's partiality bothered a lot of people" }, accept: ["partiality", "the partiality", "bias", "favouritism", "taking sides"], hint: "par-si-a-li-DA-de. The state of being on one side — the exact opposite of a isenção. Imparcialidade, with the negative prefix, says the same thing as isenção the long way round." },
        { id: "pt-u89l2-idoneo", type: "vocab", front: "idóneo", reading: "idoneo", meaning: "reputable", example: { jp: "Só uma empresa idónea consegue este tipo de contrato público.", en: "Only a reputable company gets this kind of public contract." }, drill: { jp: "Ele é um profissional idóneo", en: "He is a reputable professional" }, accept: ["reputable", "of good standing", "upstanding", "fit and proper", "above board"], hint: "i-DO-ne-u. Of proven good standing — the word Portuguese officialdom uses for a person or firm fit to be trusted with something. Brazil spells it idôneo, with a circumflex." },
      ],
    },
    {
      id: "pt-u89l3",
      unit: 89,
      lesson: 3,
      title: "Sustentar a afirmação",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Back a claim up in Portuguese — corroborate it, name the grounds it stands on, and say when it has none.",
      items: [
        { id: "pt-u89l3-corroborar", type: "vocab", front: "corroborar", reading: "corroborar", meaning: "to corroborate", example: { jp: "Um segundo estudo corroborou aquilo que o primeiro tinha concluído.", en: "A second study corroborated what the first one had concluded." }, drill: { jp: "Outro estudo veio corroborar a conclusão", en: "Another study came to corroborate the conclusion" }, accept: ["to corroborate", "corroborate", "to confirm", "to back up", "to bear out"], hint: "ku-rru-bu-RAR. To confirm something from a SECOND, independent place — which is exactly why one witness can never corroborate himself." },
        { id: "pt-u89l3-oindicio", type: "vocab", front: "o indício", reading: "oindicio", meaning: "sign (an indication)", example: { jp: "Não existe prova, mas existe mais de um indício de que o plano mudou.", en: "There is no proof, but there is more than one sign that the plan changed." }, drill: { jp: "O indício mais claro é o silêncio", en: "The clearest sign is the silence" }, accept: ["sign", "indication", "an indication", "clue", "pointer"], hint: "in-DEE-si-u. Something that points towards a conclusion without proving it — weaker than a prova (Unit 81), stronger than a guess. Indícios is what the police have before they have a case." },
        { id: "pt-u89l3-ofundamento", type: "vocab", front: "o fundamento", reading: "ofundamento", meaning: "basis (grounds)", example: { jp: "A queixa foi rejeitada logo no primeiro dia por falta de fundamento.", en: "The complaint was rejected on the first day for lack of grounds." }, drill: { jp: "A queixa não tem o fundamento necessário", en: "The complaint lacks the necessary grounds" }, accept: ["basis", "the basis", "grounds", "the grounds", "foundation"], hint: "fun-da-MEN-tu. The reasons a claim stands on — sem fundamento means groundless. The verb fundamentar, from Unit 88, is the act of putting those reasons in place." },
        { id: "pt-u89l3-aferir", type: "vocab", front: "aferir", reading: "aferir", meaning: "to gauge", example: { jp: "O teste serve para aferir o nível da turma no início do ano.", en: "The test is there to gauge the class's level at the start of the year." }, drill: { jp: "Queremos aferir o nível da turma", en: "We want to gauge the class's level" }, accept: ["to gauge", "gauge", "to assess", "to take the measure of", "to benchmark"], hint: "a-fe-RIR. To measure something against a standard in order to judge it — a school aferindo levels, an instrument being aferido against a reference. More precise than simply medir." },
        { id: "pt-u89l3-atestar", type: "vocab", front: "atestar", reading: "atestar", meaning: "to attest", example: { jp: "O documento atesta que o trabalho foi feito dentro do prazo.", en: "The document attests that the work was done within the deadline." }, drill: { jp: "Este papel vai atestar a formação", en: "This paper will attest to the training" }, accept: ["to attest", "attest", "to certify", "to vouch for", "to testify to"], hint: "a-tesh-TAR. To state officially that something is true, usually on paper — um atestado médico is the doctor's note, which is this verb turned into a document." },
        { id: "pt-u89l3-infundado", type: "vocab", front: "infundado", reading: "infundado", meaning: "unfounded", example: { jp: "O medo era infundado: nada daquilo chegou sequer a acontecer.", en: "The fear was unfounded: none of it even came to happen." }, drill: { jp: "O medo da turma era infundado", en: "The class's fear was unfounded" }, accept: ["unfounded", "groundless", "baseless", "without foundation"], hint: "in-fun-DA-du — literally un-founded, the negative of fundado. Said of a fear, a rumour or an accusation that turns out to rest on nothing at all." },
      ],
    },
    {
      id: "pt-u89l4",
      unit: 89,
      lesson: 4,
      title: "O relato dos factos",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Report what someone says they saw in Portuguese — the witness, the allegation, the denial, the competing version.",
      items: [
        { id: "pt-u89l4-testemunhar", type: "vocab", front: "testemunhar", reading: "testemunhar", meaning: "to testify", example: { jp: "Três pessoas testemunharam o acidente e todas contaram a mesma coisa.", en: "Three people witnessed the accident and all told the same story." }, drill: { jp: "Ninguém quis testemunhar no tribunal", en: "Nobody wanted to testify in court" }, accept: ["to testify", "testify", "to witness", "to give evidence", "to bear witness"], hint: "tesh-te-mu-NYAR. Both seeing a thing happen and saying so formally afterwards. O testemunho, the testimony itself, you already have from Unit 63." },
        { id: "pt-u89l4-aalegacao", type: "vocab", front: "a alegação", reading: "aalegacao", meaning: "allegation", example: { jp: "A alegação da defesa é que o documento nunca chegou a sair da empresa.", en: "The defence's allegation is that the document never left the company." }, drill: { jp: "A alegação da empresa parece fraca", en: "The company's allegation seems weak" }, accept: ["allegation", "the allegation", "claim", "the claim", "assertion"], hint: "a-le-ga-SOWN. A claim put forward but not yet proved — the noun of alegar, Unit 88. In court, as alegações finais are the closing arguments." },
        { id: "pt-u89l4-presenciar", type: "vocab", front: "presenciar", reading: "presenciar", meaning: "to be present at", example: { jp: "Quem presenciou a discussão diz que ninguém chegou a levantar a voz.", en: "Those present at the argument say that nobody actually raised their voice." }, drill: { jp: "Ela quis presenciar toda a discussão", en: "She wanted to be present for the whole argument" }, accept: ["to be present at", "to witness first-hand", "to see happen", "to be there for"], hint: "pre-zen-si-AR, built on presente. To be physically there when something happens — the seeing, not the telling. Testemunhar adds the telling." },
        { id: "pt-u89l4-desmentir", type: "vocab", front: "desmentir", reading: "desmentir", meaning: "to deny (publicly)", example: { jp: "A empresa desmentiu a notícia poucas horas depois de ela sair.", en: "The company denied the news story a few hours after it came out." }, drill: { jp: "A empresa veio desmentir a notícia", en: "The company came out to deny the news story" }, accept: ["to deny", "deny", "to refute publicly", "to issue a denial", "to contradict"], hint: "desh-men-TIR — literally to un-lie, built on mentir. To state publicly that a report is false. Um desmentido is the official denial itself." },
        { id: "pt-u89l4-averiguar", type: "vocab", front: "averiguar", reading: "averiguar", meaning: "to ascertain", example: { jp: "A direção quer averiguar o que aconteceu naquela noite na fábrica.", en: "The management wants to ascertain what happened that night at the factory." }, drill: { jp: "Vamos averiguar o que aconteceu ontem", en: "We're going to ascertain what happened yesterday" }, accept: ["to ascertain", "to establish", "to find out", "to look into", "to determine"], hint: "a-ve-ri-GWAR. To find out the facts by asking and checking — what an inquiry does. Stronger and more deliberate than descobrir (Unit 34), which can be an accident." },
        { id: "pt-u89l4-aversao", type: "vocab", front: "a versão", reading: "aversao", meaning: "account (version)", example: { jp: "A versão do condutor não bate certo com aquilo que o resto das pessoas viu.", en: "The driver's account doesn't square with what everyone else saw." }, drill: { jp: "A versão do condutor mudou outra vez", en: "The driver's account changed again" }, accept: ["account", "an account", "version", "the version", "side of the story"], hint: "ver-SOWN. One person's telling of events, with the quiet implication that another telling exists. A minha versão dos factos is the standard phrase, and it concedes there is another." },
      ],
    },
  ],
};
