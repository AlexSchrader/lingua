// PT Unit 123 — O documento, o registo e o arquivo (slot: coverage-b2-13) — B2
// PAPER THAT PROVES THINGS. The scaffold title was "Vocabulary 13 (B2)". u89
// Evidence and sources (block 2) owns evidence as argument — citing, sourcing,
// proving a claim. This unit owns the physical and administrative document: the
// deed, the register, the file, the archive. Different register, different verbs,
// and it is the half a resident in Portugal actually has to deal with.
//
// SLOT BOUNDARIES:
//   u44 owns o documento, o formulário, a validade, a autorização; u49 o registo,
//   a certidão, o comprovativo, o requerimento, o selo; u17 a pasta; u56
//   o processo; u64 a emissão; u84 o arquivo, a referência; u11 a consulta.
//   TWELVE first-draft fronts for this unit were already taught — the highest
//   count in block 3 alongside u119, and for the same reason: u44, u49 and u84
//   have been over this ground. Replacements are different words, not synonyms:
//   o auto, o assento, a procuração, o duplicado, o impresso, o cadastro, o maço,
//   a minuta, a outorga, a salvaguarda, a indexação, a remissão.
//   a autenticidade was ALSO dropped, and for the reason a validator cannot see:
//   a autenticação is carded in l3 of this same unit, so the two are one lexeme.
//   Replaced by a salvaguarda.
//
// EUROPEAN PORTUGUESE: o registo (not registro), a certidão de nascimento, and
// the conservatória system these words belong to are Portugal's.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT123 = {
  id: "pt-u123",
  lang: "pt",
  title: "O documento, o registo e o arquivo",
  order: 123,
  stage: "b2",
  lessons: [
    {
      id: "pt-u123l1",
      unit: 123,
      lesson: 1,
      title: "O papel que vale",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the Portuguese documents that carry legal weight — the record of an act, the entry, the deed, the power of attorney.",
      items: [
        { id: "pt-u123l1-oauto", type: "vocab", front: "o auto", reading: "oauto", meaning: "official written record", example: { jp: "O auto foi assinado por todos os que estavam presentes.", en: "The official record was signed by everyone present." }, drill: { jp: "O auto foi assinado por todos", en: "The official record was signed by all" }, accept: ["official written record", "official record", "the official record", "report", "record of proceedings", "statement"], hint: "OW-tu. The written record of an official act — auto de notícia is a police report, auto de posse a record of taking office. Nothing to do with cars in Portuguese." },
        { id: "pt-u123l1-oassento", type: "vocab", front: "o assento", reading: "oassento", meaning: "register entry", example: { jp: "O assento de nascimento fica guardado para sempre.", en: "The birth register entry is kept for ever." }, drill: { jp: "O assento de nascimento fica guardado", en: "The birth register entry is kept" }, accept: ["register entry", "the register entry", "entry", "record", "seat"], hint: "a-SEN-tu. The entry written into an official register — o assento de nascimento is the original, a certidão the copy you are given. Also, plainly, a seat." },
        { id: "pt-u123l1-aprocuracao", type: "vocab", front: "a procuração", reading: "aprocuracao", meaning: "power of attorney", example: { jp: "A procuração deixa outra pessoa assinar por si.", en: "The power of attorney lets another person sign for you." }, drill: { jp: "A procuração deixa outro assinar", en: "The power of attorney lets another sign" }, accept: ["power of attorney", "the power of attorney", "proxy", "authorisation to act", "mandate"], hint: "pru-ku-ra-SOWN. The document giving someone authority to act for you, common for Portuguese abroad handling property at home. O procurador is the holder of it." },
        { id: "pt-u123l1-aescritura", type: "vocab", front: "a escritura", reading: "aescritura", meaning: "deed", example: { jp: "A escritura da casa foi feita no mesmo dia do pagamento.", en: "The deed of the house was done on the same day as the payment." }, drill: { jp: "A escritura da casa foi feita ontem", en: "The deed of the house was done yesterday" }, accept: ["deed", "the deed", "title deed", "conveyance", "notarial deed"], hint: "shkri-TOO-ra. The notarised deed transferring property — fazer a escritura is the moment a Portuguese house sale becomes real. Also scripture, capitalised." },
        { id: "pt-u123l1-oduplicado", type: "vocab", front: "o duplicado", reading: "oduplicado", meaning: "duplicate", example: { jp: "O duplicado serve enquanto o original não chega.", en: "The duplicate serves while the original has not arrived." }, drill: { jp: "O duplicado serve por agora", en: "The duplicate serves for now" }, accept: ["duplicate", "the duplicate", "second copy", "copy", "counterpart"], hint: "du-pli-KA-du. A second copy issued officially and carrying the same force, against a cópia, which merely reproduces. Em duplicado means in two copies." },
        { id: "pt-u123l1-oimpresso", type: "vocab", front: "o impresso", reading: "oimpresso", meaning: "printed form", example: { jp: "O impresso tem de ser preenchido a tinta azul.", en: "The form has to be filled in with blue ink." }, drill: { jp: "O impresso é preenchido a tinta azul", en: "The form is filled in with blue ink" }, accept: ["printed form", "the printed form", "form", "the form", "printed matter"], hint: "im-PRE-su. The blank printed sheet you fill in, from imprimir. O formulário (u44) is the form as a set of questions; o impresso is the physical printed paper." },
      ],
    },
    {
      id: "pt-u123l2",
      unit: 123,
      lesson: 2,
      title: "Onde fica guardado",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about where records are kept in Portuguese — the register, the dossier, the bundle, the inventory.",
      items: [
        { id: "pt-u123l2-ocadastro", type: "vocab", front: "o cadastro", reading: "ocadastro", meaning: "records register", example: { jp: "O cadastro tem os dados de todos os terrenos da zona.", en: "The register holds the details of every plot in the area." }, drill: { jp: "O cadastro tem os dados dos terrenos", en: "The register holds the plot details" }, accept: ["records register", "the records register", "register", "cadastre", "land registry", "record"], hint: "ka-DASH-tru. A systematic register, classically of land — cadastro predial. Careful: ter cadastro of a person means to have a criminal record, so the word carries a shadow." },
        { id: "pt-u123l2-odossie", type: "vocab", front: "o dossiê", reading: "odossie", meaning: "dossier", example: { jp: "O dossiê juntou tudo o que se sabia sobre o caso.", en: "The dossier brought together everything known about the case." }, drill: { jp: "O dossiê juntou tudo sobre o caso", en: "The dossier brought together everything on the case" }, accept: ["dossier", "the dossier", "file", "the file", "folder", "portfolio"], hint: "du-si-E. From French, and Portuguese also writes it dossier. The gathered papers on one subject, often used of a political or diplomatic issue — o dossiê da saúde." },
        { id: "pt-u123l2-omaco", type: "vocab", front: "o maço", reading: "omaco", meaning: "bundle", example: { jp: "O maço de papéis estava preso com um fio.", en: "The bundle of papers was tied with a string." }, drill: { jp: "O maço de papéis estava preso", en: "The bundle of papers was tied" }, accept: ["bundle", "the bundle", "bunch", "sheaf", "packet", "pack"], hint: "MA-su, ç. A bundle of like things tied or packed together. Um maço de tabaco is a packet of cigarettes — the commonest everyday use by far." },
        { id: "pt-u123l2-oinventario", type: "vocab", front: "o inventário", reading: "oinventario", meaning: "inventory", example: { jp: "O inventário foi feito antes de dividir os bens.", en: "The inventory was made before dividing the assets." }, drill: { jp: "O inventário foi feito antes de dividir", en: "The inventory was made before dividing" }, accept: ["inventory", "the inventory", "stocktake", "list of assets", "schedule"], hint: "in-ven-TA-riu. A full listing of what exists. In Portuguese law o inventário is specifically the process of listing and sharing out an estate after a death." },
        { id: "pt-u123l2-acopia", type: "vocab", front: "a cópia", reading: "acopia", meaning: "copy", example: { jp: "A cópia não serve se não estiver autenticada.", en: "The copy is no use unless it is certified." }, drill: { jp: "A cópia não serve sem autenticação", en: "The copy is no use without certification" }, accept: ["copy", "the copy", "photocopy", "reproduction", "duplicate copy"], hint: "KO-pia. Any reproduction, with no force of its own — which is why Portuguese offices ask for a cópia autenticada. Also copying in the sense of cheating in an exam." },
        { id: "pt-u123l2-ooriginal", type: "vocab", front: "o original", reading: "ooriginal", meaning: "original", example: { jp: "O original nunca sai do arquivo.", en: "The original never leaves the archive." }, drill: { jp: "O original nunca sai do arquivo", en: "The original never leaves the archive" }, accept: ["original", "the original", "master copy", "master"], hint: "u-ri-zhi-NAL. The first and authoritative document. As an adjective it means original in the creative sense too, exactly as in English." },
      ],
    },
    {
      id: "pt-u123l3",
      unit: 123,
      lesson: 3,
      title: "O que se lhe faz",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe what is done to a document in a Portuguese office — drafting, processing, certifying, endorsing, granting.",
      items: [
        { id: "pt-u123l3-aminuta", type: "vocab", front: "a minuta", reading: "aminuta", meaning: "draft document", example: { jp: "A minuta do contrato foi enviada para ser lida.", en: "The draft of the contract was sent to be read." }, drill: { jp: "A minuta do contrato foi enviada", en: "The draft of the contract was sent" }, accept: ["draft document", "the draft", "draft", "draft version", "template", "model document"], hint: "mi-NOO-ta. The formal draft of a legal document, circulated before signing. Nothing to do with minutes of time — and in a Portuguese restaurant à minuta means cooked to order." },
        { id: "pt-u123l3-atramitacao", type: "vocab", front: "a tramitação", reading: "atramitacao", meaning: "processing", example: { jp: "A tramitação do pedido levou mais tempo do que se esperava.", en: "The processing of the application took longer than expected." }, drill: { jp: "A tramitação do pedido levou tempo", en: "The processing of the application took time" }, accept: ["processing", "the processing", "handling", "procedure", "passage through the system"], hint: "tra-mi-ta-SOWN. A file moving through its required steps, from o trâmite (u118). Em tramitação means still going through — the answer you get when you telephone to ask." },
        { id: "pt-u123l3-aautenticacao", type: "vocab", front: "a autenticação", reading: "aautenticacao", meaning: "authentication", example: { jp: "A autenticação da cópia pode ser feita nos correios.", en: "Certification of the copy can be done at the post office." }, drill: { jp: "A autenticação pode ser feita nos correios", en: "Certification can be done at the post office" }, accept: ["authentication", "the authentication", "certification", "certifying", "attestation", "verification"], hint: "ow-ten-ti-ka-SOWN. Officially confirming a document is what it claims to be. In Portugal solicitors, notaries, post offices and parish councils can all do it." },
        { id: "pt-u123l3-oaverbamento", type: "vocab", front: "o averbamento", reading: "oaverbamento", meaning: "endorsement", example: { jp: "O averbamento do novo nome demorou duas semanas.", en: "The endorsement of the new name took two weeks." }, drill: { jp: "O averbamento do novo nome demorou", en: "The endorsement of the new name took time" }, accept: ["endorsement", "the endorsement", "annotation", "noting", "marginal entry", "amendment"], hint: "a-ver-ba-MEN-tu. A note added in the margin of an existing register entry to record a change — a marriage, a divorce, a name change. The entry is never rewritten, only annotated." },
        { id: "pt-u123l3-aoutorga", type: "vocab", front: "a outorga", reading: "aoutorga", meaning: "granting", example: { jp: "A outorga da licença foi decidida em reunião.", en: "The granting of the licence was decided in a meeting." }, drill: { jp: "A outorga da licença foi decidida", en: "The granting of the licence was decided" }, accept: ["granting", "the granting", "grant", "award", "conferral", "execution of a deed"], hint: "ow-TOR-ga. Formally conferring a right. Outorgar is the verb, and os outorgantes are the parties who sign a Portuguese deed — the word appears in its first line." },
        { id: "pt-u123l3-asalvaguarda", type: "vocab", front: "a salvaguarda", reading: "asalvaguarda", meaning: "safekeeping", example: { jp: "A salvaguarda dos documentos antigos custa dinheiro todos os anos.", en: "The safekeeping of the old documents costs money every year." }, drill: { jp: "A salvaguarda dos documentos custa dinheiro", en: "The safekeeping of the documents costs money" }, accept: ["safekeeping", "the safekeeping", "safeguarding", "safeguard", "protection", "backup"], hint: "sal-va-GWAR-da. Keeping something safe, and also the measure that protects — as salvaguardas do acordo. In computing it is the backup copy." },
      ],
    },
    {
      id: "pt-u123l4",
      unit: 123,
      lesson: 4,
      title: "Voltar a encontrar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Find your way back into a Portuguese archive — indexing, holdings, cross-references, listings and rough drafts.",
      items: [
        { id: "pt-u123l4-aindexacao", type: "vocab", front: "a indexação", reading: "aindexacao", meaning: "indexing", example: { jp: "A indexação dos papéis antigos ainda não está pronta.", en: "The indexing of the old papers is not yet finished." }, drill: { jp: "A indexação dos papéis não está pronta", en: "The indexing of the papers is not ready" }, accept: ["indexing", "the indexing", "cataloguing by index", "index-building", "index-linking"], hint: "in-de-xa-SOWN, the x as sh. Building the index that makes a collection findable. In finance indexação is index-linking, as of rents or pensions." },
        { id: "pt-u123l4-oacervo", type: "vocab", front: "o acervo", reading: "oacervo", meaning: "holdings", example: { jp: "O acervo do museu cresceu muito desde que abriu.", en: "The museum's holdings have grown a great deal since it opened." }, drill: { jp: "O acervo do museu cresceu muito", en: "The museum's holdings have grown a lot" }, accept: ["holdings", "the holdings", "collection", "the collection", "body of material", "stock"], hint: "a-SER-vu. The whole body of what an archive, library or museum holds. A coleção is assembled by choice; um acervo is simply everything that has accumulated." },
        { id: "pt-u123l4-aremissao", type: "vocab", front: "a remissão", reading: "aremissao", meaning: "cross-reference", example: { jp: "A remissão no fim manda o leitor para outro capítulo.", en: "The cross-reference at the end sends the reader to another chapter." }, drill: { jp: "A remissão manda o leitor para outro lado", en: "The cross-reference sends the reader elsewhere" }, accept: ["cross-reference", "the cross-reference", "reference", "pointer", "remission"], hint: "rre-mi-SOWN. A pointer from one entry to another, from remeter, to send on. It also keeps the religious sense of remission of sins and the medical one of a disease in remission." },
        { id: "pt-u123l4-acatalogacao", type: "vocab", front: "a catalogação", reading: "acatalogacao", meaning: "cataloguing", example: { jp: "A catalogação foi feita por ordem de data.", en: "The cataloguing was done in date order." }, drill: { jp: "A catalogação foi feita por data", en: "The cataloguing was done by date" }, accept: ["cataloguing", "the cataloguing", "cataloging", "classification", "listing and describing"], hint: "ka-ta-lu-ga-SOWN. Describing each item so it can be identified, where a indexação builds the finding aid on top. The two are separate jobs in a Portuguese archive." },
        { id: "pt-u123l4-alistagem", type: "vocab", front: "a listagem", reading: "alistagem", meaning: "listing", example: { jp: "A listagem completa foi enviada por correio.", en: "The complete listing was sent by post." }, drill: { jp: "A listagem completa foi enviada", en: "The complete listing was sent" }, accept: ["listing", "the listing", "list", "the list", "printout", "schedule"], hint: "lish-TA-zhayn. A produced list, usually printed out — the output rather than the idea. Uma lista is the list itself; a listagem is the document containing it." },
        { id: "pt-u123l4-orascunho", type: "vocab", front: "o rascunho", reading: "orascunho", meaning: "rough draft", example: { jp: "O rascunho foi escrito à mão e depois passado a limpo.", en: "The rough draft was written by hand and then written out neatly." }, drill: { jp: "O rascunho foi escrito à mão", en: "The rough draft was written by hand" }, accept: ["rough draft", "the rough draft", "draft", "rough copy", "scribble", "sketch"], hint: "rrash-KOO-nyu, nh. The private working version, against a minuta (l3), which is a formal draft circulated to others. Passar a limpo is to make the fair copy." },
      ],
    },
  ],
};
