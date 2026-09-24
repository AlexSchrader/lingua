// PT Unit 114 — O texto e a sua feitura (slot: coverage-b2-4) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Authored by the pt B2 block-3 seat, 2026-09-23, to §C1–C10 (src/data/pt/unit88.js).
// Block 3 is u114–u126, the last thirteen slots of the last unfinished language.
//
// THE SLOT ARRIVED TITLED "Vocabulary 4 (B2)". That is the scaffold's English
// working title, not a theme — lint.js's SCAFFOLD_TITLE_PATTERNS matches
// /^Vocabulary \d+/ and would have flagged it on the Ladder in English. All
// thirteen of block 3's slots arrived this way and all thirteen are retitled in
// Portuguese; CLAUDE.md, "No front language". This is ordinary authoring.
//
// WHAT THIS UNIT IS FOR. u84 owns RESEARCH (a pesquisa, consultar, o arquivo),
// u64 owns PUBLISHING (publicar, o artigo, o título, o leitor) and u107 owns
// FORMAL WRITTEN STRUCTURE. None of them owns the physical making of a text: the
// stage it is at, the part of it you are pointing to, and what you do to a page.
// A B2 learner who can argue in writing still cannot say "that is only a draft"
// or "see the appendix", and that is this unit.
//
// SLOT BOUNDARIES: o esboço is u96's (the artist's sketch) and a versão and
// o excerto are u89's, so the drafting words here are the ones neither claimed:
// o rascunho, a minuta, a redação. rever is u84's, so the noun a revisão is
// carded and the verb is not re-taught — §C4, a derivation is a second lexeme.
// o texto and o resumo are two of the fronts block 2 reserved for this block.
// lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT114 = {
  id: "pt-u114",
  lang: "pt",
  title: "O texto e a sua feitura",
  order: 114,
  stage: "b2",
  lessons: [
    {
      id: "pt-u114l1",
      unit: 114,
      lesson: 1,
      title: "Do rascunho à versão final",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what stage a text is at in Portuguese — and refuse to be judged on one that is not finished yet.",
      items: [
        { id: "pt-u114l1-orascunho", type: "vocab", front: "o rascunho", reading: "orascunho", meaning: "rough draft", example: { jp: "O rascunho do relatório parece bom, mas o chefe ainda não aceita o título.", en: "The rough draft of the report seems good, but the boss still does not accept the title." }, drill: { jp: "O rascunho do relatório parece bom", en: "The report's rough draft seems good" }, accept: ["rough draft", "the draft", "draft", "first draft"], hint: "rrash-KU-nyu. The version you would be embarrassed to be judged on. ⚠ Saying é só um rascunho is the standard Portuguese move for handing over unfinished work — it changes what the reader is entitled to complain about." },
        { id: "pt-u114l1-aminuta", type: "vocab", front: "a minuta", reading: "aminuta", meaning: "draft of an official document", example: { jp: "A minuta do contrato chega hoje, mas o advogado quer mudar o prazo.", en: "The draft of the contract arrives today, but the lawyer wants to change the deadline." }, drill: { jp: "A minuta do contrato chega hoje", en: "The draft contract arrives today" }, accept: ["draft of an official document", "draft document", "draft contract", "draft version"], hint: "mi-NU-ta. ⚠ NOT a minute of time (o minuto, u5) and not the minutes of a meeting (a ata, u110) — a minuta is the unsigned draft of a contract or a formal letter, circulated so it can still be argued with." },
        { id: "pt-u114l1-redigir", type: "vocab", front: "redigir", reading: "redigir", meaning: "to draft in writing", example: { jp: "O funcionário vai redigir o aviso, embora ninguém saiba ainda a data.", en: "The official is going to draft the notice, although nobody yet knows the date." }, drill: { jp: "O funcionário vai redigir o aviso", en: "The official is going to draft the notice" }, accept: ["to draft in writing", "to draft", "draft", "to word", "to write up"], hint: "rre-di-JIR. To put something into its written words, with care about which words. Escrever (u17) is the plain act; redigir is what a lawyer, a journalist or a secretary does to a text that will be read by strangers." },
        { id: "pt-u114l1-aredacao", type: "vocab", front: "a redação", reading: "aredacao", meaning: "drafting", example: { jp: "A redação do artigo parece simples, mas o sentido muda no fim.", en: "The drafting of the article seems simple, but the meaning changes at the end." }, drill: { jp: "A redação do artigo parece simples", en: "The article's drafting seems simple" }, accept: ["drafting", "the drafting", "composition", "the wording process", "editorial writing"], hint: "rre-da-SOWN, the noun of redigir. Two senses that share the idea of a text being made: the ACT of drafting, and a newspaper's editorial office — a redação do jornal. ⚠ In school it is also the essay you are set to write." },
        { id: "pt-u114l1-arevisao", type: "vocab", front: "a revisão", reading: "arevisao", meaning: "revision pass", example: { jp: "A revisão do texto demora uma semana, mas sem ela o erro fica.", en: "The revision of the text takes a week, but without it the mistake stays." }, drill: { jp: "A revisão do texto demora uma semana", en: "The text's revision takes a week" }, accept: ["revision pass", "the revision", "proofreading", "review pass", "a going-over"], hint: "rre-vi-ZOWN, the noun of rever (u84). Not rewriting but going BACK OVER what is written, looking for what is wrong. ⚠ Also the revision you do for an exam, and a car's service — a revisão do carro." },
        { id: "pt-u114l1-aerrata", type: "vocab", front: "a errata", reading: "aerrata", meaning: "list of corrections", example: { jp: "A errata sai depois do livro, e por isso o leitor guarda um texto errado.", en: "The list of corrections comes out after the book, and so the reader keeps a wrong text." }, drill: { jp: "A errata sai depois do livro", en: "The corrections list comes out after the book" }, accept: ["list of corrections", "errata", "the errata", "corrections slip"], hint: "e-RRA-ta, a Latin plural Portuguese treats as one feminine noun: uma errata. The slip of paper admitting what the printed book got wrong — the example turns on the fact that it always arrives too late." },
      ],
    },
    {
      id: "pt-u114l2",
      unit: 114,
      lesson: 2,
      title: "As partes de um texto",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Point at the exact part of a document you mean in Portuguese, instead of saying 'that bit near the end'.",
      items: [
        { id: "pt-u114l2-oparagrafo", type: "vocab", front: "o parágrafo", reading: "oparagrafo", meaning: "paragraph", example: { jp: "O primeiro parágrafo promete muito, mas o resto do artigo não cumpre.", en: "The first paragraph promises a lot, but the rest of the article does not deliver." }, drill: { jp: "O parágrafo promete muito e explica pouco", en: "The paragraph promises a lot and explains little" }, accept: ["paragraph", "the paragraph"], hint: "pa-RA-gra-fu. ⚠ In a Portuguese law or contract o parágrafo is a NUMBERED subdivision you can cite, not just a block of prose — nos termos do parágrafo segundo. That is why it sits beside a alínea in this lesson." },
        { id: "pt-u114l2-aalinea", type: "vocab", front: "a alínea", reading: "aalinea", meaning: "lettered sub-point", example: { jp: "A alínea do contrato muda tudo, mas quase ninguém procura o detalhe.", en: "The sub-point of the contract changes everything, but almost nobody looks for the detail." }, drill: { jp: "A alínea do contrato muda tudo", en: "The contract's sub-point changes everything" }, accept: ["lettered sub-point", "sub-point", "subparagraph", "item", "clause point"], hint: "a-LEE-ne-a. The a), b), c) level of a Portuguese legal text — the one that carries the exception. ⚠ Knowing the word is how you ask WHICH alínea, which is the difference between reading a contract and being told what it says." },
        { id: "pt-u114l2-oinciso", type: "vocab", front: "o inciso", reading: "oinciso", meaning: "inserted remark", example: { jp: "O inciso no meio da frase explica o motivo, mas deixa o texto pesado.", en: "The inserted remark in the middle of the sentence explains the reason, but it makes the text heavy." }, drill: { jp: "O inciso explica o motivo do atraso", en: "The inserted remark explains the reason for the delay" }, accept: ["inserted remark", "parenthetical remark", "aside", "interpolation", "insertion"], hint: "in-SEE-zu, from the idea of cutting IN. The clause dropped into the middle of a sentence between commas or dashes. ⚠ Portuguese formal prose uses far more of these than English does, which is exactly why they make a translated text feel heavy." },
        { id: "pt-u114l2-ocabecalho", type: "vocab", front: "o cabeçalho", reading: "ocabecalho", meaning: "header block", example: { jp: "O cabeçalho da carta tem a morada do cliente, mas o nome não é o meu.", en: "The letter's header block has the client's address, but the name is not mine." }, drill: { jp: "O cabeçalho da carta tem a morada", en: "The letter's header has the address" }, accept: ["header block", "the header", "letterhead", "heading"], hint: "ka-be-SA-lyu, built on a cabeça (u11) — the head of the page. The block at the top carrying who is writing, to whom, and under what reference number. ⚠ Not o título (u64), which is what the text is called." },
        { id: "pt-u114l2-oapendice", type: "vocab", front: "o apêndice", reading: "oapendice", meaning: "appendix", example: { jp: "O apêndice tem os números todos, mas o relatório principal não os mostra.", en: "The appendix has all the figures, but the main report does not show them." }, drill: { jp: "O apêndice tem os números todos", en: "The appendix has all the figures" }, accept: ["appendix", "the appendix", "annex"], hint: "a-PEN-di-se. What is attached at the end because it would drown the argument if left inside it. ⚠ Same word as the organ, exactly as in English. Anexar (u73) is the verb for attaching a document to a letter." },
        { id: "pt-u114l2-oglossario", type: "vocab", front: "o glossário", reading: "oglossario", meaning: "glossary", example: { jp: "O glossário explica cada termo difícil, e por isso o livro serve para quem começa.", en: "The glossary explains each difficult term, and so the book works for a beginner." }, drill: { jp: "O glossário explica cada termo difícil", en: "The glossary explains each difficult term" }, accept: ["glossary", "the glossary", "list of terms"], hint: "glo-SSA-ryu. The list at the back saying what the book's own words mean. ⚠ Not o dicionário (u17): a dictionary covers a language, a glossary covers only this text's vocabulary, and it is written by the author." },
      ],
    },
    {
      id: "pt-u114l3",
      unit: 114,
      lesson: 3,
      title: "O que se faz a uma página",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe in Portuguese what was physically done to a document — copied, paged, leafed through, transcribed.",
      items: [
        { id: "pt-u114l3-transcrever", type: "vocab", front: "transcrever", reading: "transcrever", meaning: "to transcribe", example: { jp: "O tribunal manda transcrever tudo o que a testemunha diz, mas o processo fica caro.", en: "The court orders everything the witness says to be transcribed, but the case becomes expensive." }, drill: { jp: "O tribunal manda transcrever tudo", en: "The court orders everything transcribed" }, accept: ["to transcribe", "transcribe", "to write out", "to type up"], hint: "trans-kre-VER, built on escrever (u17). To move words from speech, or from another document, into writing WITHOUT changing them. ⚠ Not traduzir (u77) — a transcription stays in the same language; that is the whole point of it." },
        { id: "pt-u114l3-acopia", type: "vocab", front: "a cópia", reading: "acopia", meaning: "duplicate copy", example: { jp: "A cópia do documento chega por email, mas o banco exige o papel.", en: "The duplicate copy of the document arrives by email, but the bank demands the paper." }, drill: { jp: "A cópia do documento chega por email", en: "The document's copy arrives by email" }, accept: ["duplicate copy", "copy", "the copy", "photocopy"], hint: "KO-pya. ⚠ In Portuguese officialdom the distinction that matters is cópia versus original (this lesson): a cópia simples is accepted for most things, and a certified one, cópia autenticada, for the rest." },
        { id: "pt-u114l3-ooriginal", type: "vocab", front: "o original", reading: "ooriginal", meaning: "the original document", example: { jp: "O original fica no arquivo, e por isso o cidadão leva apenas uma cópia.", en: "The original document stays in the archive, and so the citizen takes only a copy." }, drill: { jp: "O original fica sempre no arquivo", en: "The original always stays in the archive" }, accept: ["the original document", "the original", "original"], hint: "o-ri-ji-NAL. The one with the real signature on it. ⚠ Also the ordinary adjective meaning original/novel — uma ideia original — and Portuguese uses the same word for both, so the article is what tells you which you are getting." },
        { id: "pt-u114l3-paginar", type: "vocab", front: "paginar", reading: "paginar", meaning: "to lay out in pages", example: { jp: "O editor vai paginar o livro outra vez, porque o texto novo não cabe.", en: "The editor is going to lay the book out again, because the new text does not fit." }, drill: { jp: "O editor vai paginar o livro", en: "The editor is going to lay out the book" }, accept: ["to lay out in pages", "to paginate", "to lay out", "to set the pages"], hint: "pa-ji-NAR. To break a text into pages and decide what sits where — the job between writing and printing. Caber (u83) is the verb the example needs: a paginação fails when the text does not fit." },
        { id: "pt-u114l3-folhear", type: "vocab", front: "folhear", reading: "folhear", meaning: "to leaf through", example: { jp: "O cliente costuma folhear o contrato, mas quase nunca percebe o texto.", en: "The client tends to leaf through the contract, but hardly ever understands the text." }, drill: { jp: "O cliente costuma folhear o contrato", en: "The client tends to leaf through the contract" }, accept: ["to leaf through", "leaf through", "to flick through", "to browse", "to thumb through"], hint: "fo-LYAR, built on a folha (u26), the leaf or sheet. Turning pages without really reading them. ⚠ The example is the standard Portuguese complaint about contracts, and folhear is precisely the verb that concedes you did not read it." },
        { id: "pt-u114l3-oapontamento", type: "vocab", front: "o apontamento", reading: "oapontamento", meaning: "jotted note", example: { jp: "O apontamento do médico é curto, mas explica bem o caso do doente.", en: "The doctor's jotted note is short, but it explains the patient's case well." }, drill: { jp: "O apontamento do médico é curto", en: "The doctor's jotted note is short" }, accept: ["jotted note", "note", "the note", "jotting", "memo"], hint: "a-pon-ta-MEN-tu, from apontar (u79), to point. Something written down quickly for yourself, not for a reader. ⚠ Not a nota (u17), which in school is the MARK you are given — a very common trap for an English speaker." },
      ],
    },
    {
      id: "pt-u114l4",
      unit: 114,
      lesson: 4,
      title: "O curto e o completo",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say in Portuguese whether somebody read the whole thing or only the short version — and insist on the difference.",
      items: [
        { id: "pt-u114l4-otexto", type: "vocab", front: "o texto", reading: "otexto", meaning: "the text itself", example: { jp: "O texto da lei é claro, mas o jornal conta outra história.", en: "The text of the law is clear, but the newspaper tells another story." }, drill: { jp: "O texto da lei é claro", en: "The text of the law is clear" }, accept: ["the text itself", "the text", "text", "wording of a text"], hint: "TESH-tu. ⚠ AN ORDINARY WORD THE COURSE HAD NEVER TAUGHT — 113 units of reading and arguing about documents with no word for the document's own words. o texto is what is actually written, as against what people say it says, which is the argument the example makes." },
        { id: "pt-u114l4-oresumo", type: "vocab", front: "o resumo", reading: "oresumo", meaning: "summary (abstract)", example: { jp: "O resumo do estudo é honesto, mas deixa de fora o dado mais grave.", en: "The summary of the study is honest, but it leaves out the most serious piece of data." }, drill: { jp: "O resumo do estudo é honesto", en: "The study's summary is honest" }, accept: ["summary", "the summary", "abstract", "précis"], hint: "rre-ZU-mu, the noun of resumir (u77). ⚠ Em resumo is the ordinary way to say in short. In an academic paper o resumo is the ABSTRACT at the top, which is the sense the example plays on — honest and still incomplete." },
        { id: "pt-u114l4-aintegra", type: "vocab", front: "a íntegra", reading: "aintegra", meaning: "the full unabridged version", example: { jp: "A íntegra do discurso está no site, mas a televisão mostra apenas um minuto.", en: "The full version of the speech is on the website, but television shows only a minute." }, drill: { jp: "A íntegra do discurso está no site", en: "The speech's full version is on the site" }, accept: ["the full unabridged version", "the full text", "the full version", "in full", "unabridged text"], hint: "EEN-te-gra. Almost always in the phrase na íntegra — in full, uncut. ⚠ The exact opposite of o resumo (this lesson), and the word a Portuguese reader uses to demand the whole thing: quero ler na íntegra." },
        { id: "pt-u114l4-aentrelinha", type: "vocab", front: "a entrelinha", reading: "aentrelinha", meaning: "what is implied but unwritten", example: { jp: "A entrelinha da carta é grave, embora o tom pareça educado.", en: "What the letter implies is serious, although the tone seems polite." }, drill: { jp: "A entrelinha da carta é grave", en: "The letter's implication is serious" }, accept: ["what is implied but unwritten", "the implication", "between the lines", "subtext", "the unsaid"], hint: "en-tre-LEE-nya, literally between-line. Usually plural in the phrase ler nas entrelinhas, to read between the lines. ⚠ The single most useful word in this lesson for reading a polite Portuguese refusal, which says no without the word no." },
        { id: "pt-u114l4-apauta", type: "vocab", front: "a pauta", reading: "apauta", meaning: "agreed list of points", example: { jp: "A pauta da reunião tem seis temas, mas o grupo discute apenas o primeiro.", en: "The meeting's list of points has six topics, but the group discusses only the first." }, drill: { jp: "A pauta da reunião tem seis temas", en: "The meeting's agenda has six topics" }, accept: ["agreed list of points", "agenda", "the agenda", "order of business", "list of items"], hint: "POW-ta. ⚠ Close to a agenda (u62) but not the same: uma agenda is the diary or the political agenda, a pauta is the written running order for THIS meeting. Also the ruled staff that music is written on." },
        { id: "pt-u114l4-acaligrafia", type: "vocab", front: "a caligrafia", reading: "acaligrafia", meaning: "handwriting", example: { jp: "A caligrafia do médico é difícil, mas a farmácia percebe sempre a receita.", en: "The doctor's handwriting is hard to read, but the pharmacy always understands the prescription." }, drill: { jp: "A caligrafia do médico é difícil", en: "The doctor's handwriting is hard to read" }, accept: ["handwriting", "the handwriting", "penmanship", "hand"], hint: "ka-li-gra-FEE-a. The shape of somebody's hand on the page. ⚠ Covers both the neutral sense (whose handwriting is this) and the art of fine lettering, where English splits handwriting from calligraphy." },
      ],
    },
  ],
};
