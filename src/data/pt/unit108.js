// PT Unit 108 — Gramática 11 — o discurso e a coesão (slot: grammar-11) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Authored by the pt B2 block-2 seat, 2026-09-23, to §C1–C10 (src/data/pt/unit88.js).
// Retitled from the scaffold's English placeholder (CLAUDE.md, "No front language").
//
// WHAT IS LEFT AFTER u91 AND u88. This is the third unit in the band that could
// be called "connectors", so the boundary was drawn by probe, not by feel:
//   · u91 owns DEGREE — relativamente, praticamente, sensivelmente, em larga
//     medida, de certo modo, quanto muito, no limite, um tanto, por assim dizer,
//     grosso modo, nem por isso. Not re-taught.
//   · u88 owns ARGUMENT MOVES — por conseguinte, a ressalva, o contraponto.
//   · u21 owns mas, no entanto, ALÉM DISSO; u29 portanto, pois; u51 pelo
//     contrário; u52 daí que, de modo que; u54 DE FACTO, AO QUE PARECE,
//     aparentemente, afinal de contas; u73 POR UM LADO, EM CONTRAPARTIDA.
// What none of them covers is the TEXT-LEVEL machinery: restating, ordering,
// softening a claim you are not certain of, and chaining causes in writing.
// That is this unit, and every card is a phrase no earlier unit can express.
// lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT108 = {
  id: "pt-u108",
  lang: "pt",
  title: "Gramática 11 — o discurso e a coesão",
  order: 108,
  stage: "b2",
  lessons: [
    {
      id: "pt-u108l1",
      unit: 108,
      lesson: 1,
      title: "Dizer outra vez por outras palavras",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Restate what you just said in Portuguese — that is to say, in other words, to wit, strictly speaking, deep down.",
      items: [
        { id: "pt-u108l1-ouseja", type: "vocab", front: "ou seja", reading: "ouseja", meaning: "in other words", example: { jp: "O prazo acaba hoje, ou seja não há mais tempo.", en: "The deadline ends today, in other words there is no more time." }, drill: { jp: "O prazo é hoje ou seja temos pressa", en: "The deadline is today in other words we are in a hurry" }, accept: ["in other words", "that is to say", "which is to say", "i.e."], hint: "Literally or let it be. THE commonest restating phrase in spoken Portuguese, and it is frozen — never ou sejam, even about plural things. Portuguese speakers also use it as a filler while thinking." },
        { id: "pt-u108l1-istoe", type: "vocab", front: "isto é", reading: "istoe", meaning: "that is", example: { jp: "O texto é claro, isto é qualquer pessoa o percebe.", en: "The text is clear, that is anyone can understand it." }, drill: { jp: "O texto é claro isto é simples", en: "The text is clear that is simple" }, accept: ["that is", "namely", "that is to say", "meaning"], hint: "⚠ Same job as ou seja but NARROWER: isto é defines a term, ou seja reformulates a whole point. Written Portuguese prefers isto é and abbreviates it i.e., just as English does with the Latin." },
        { id: "pt-u108l1-poroutraspalavras", type: "vocab", front: "por outras palavras", reading: "poroutraspalavras", meaning: "to put it another way", example: { jp: "O plano falha, por outras palavras o dinheiro desaparece.", en: "The plan fails, to put it another way the money disappears." }, drill: { jp: "Por outras palavras o plano não resulta", en: "To put it another way the plan does not work" }, accept: ["to put it another way", "in other words", "put differently", "to rephrase"], hint: "⚠ pt-PT SAYS OUTRAS, Brazil says outras too but prefers em outras palavras with em. In Portugal the preposition is por. A small marker, and a reliable one for telling the two varieties apart." },
        { id: "pt-u108l1-asaber", type: "vocab", front: "a saber", reading: "asaber", meaning: "to wit", example: { jp: "Falta um documento, a saber a licença da câmara, mas ninguém repara.", en: "One document is missing, to wit the council licence, but nobody notices." }, drill: { jp: "Falta um documento a saber a licença", en: "One document is missing to wit the licence" }, accept: ["to wit", "namely", "specifically these", "as follows"], hint: "Introduces the ITEMS themselves, usually a list. ⚠ Nomeadamente (u107) picks out an example from a larger set; a saber promises the complete enumeration is about to follow. A Portuguese legal text keeps the distinction." },
        { id: "pt-u108l1-emrigor", type: "vocab", front: "em rigor", reading: "emrigor", meaning: "strictly speaking", example: { jp: "Em rigor o estudo não prova nada, mas o jornal escreve o contrário.", en: "Strictly speaking the study proves nothing, but the paper writes the opposite." }, drill: { jp: "Em rigor o estudo não prova nada", en: "Strictly speaking the study proves nothing" }, accept: ["strictly speaking", "strictly", "properly speaking", "technically"], hint: "Built on o rigor (u85). Signals that what follows is the exact version and what came before was loose — which makes it a polite way to correct someone without naming them." },
        { id: "pt-u108l1-nofundo", type: "vocab", front: "no fundo", reading: "nofundo", meaning: "deep down", example: { jp: "No fundo ele quer o cargo, mas nunca o diz a ninguém.", en: "Deep down he wants the post, but he never says so to anyone." }, drill: { jp: "No fundo ele quer o cargo", en: "Deep down he wants the post" }, accept: ["deep down", "at bottom", "fundamentally", "when it comes down to it"], hint: "From o fundo (u83), the bottom. Restates the SURFACE claim as what is really meant — so it belongs with ou seja rather than with an emotion word, even though English deep down sounds psychological." },
      ],
    },
    {
      id: "pt-u108l2",
      unit: 108,
      lesson: 2,
      title: "Arrumar o texto",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Organise a piece of writing in Portuguese — for its part, on the other hand, for the rest, in short, that said, above all.",
      items: [
        { id: "pt-u108l2-porsuavez", type: "vocab", front: "por sua vez", reading: "porsuavez", meaning: "in turn", example: { jp: "O governo aprova a lei, e o tribunal por sua vez recusa o texto.", en: "The government approves the law, and the court in turn rejects the text." }, drill: { jp: "O tribunal por sua vez recusa tudo", en: "The court in turn rejects everything" }, accept: ["in turn", "for its part", "for his part", "on its side"], hint: "Agrees with whoever it refers to: por sua vez, por seu turno, and in the first person por minha vez. Hands the floor to the next actor, which is why a Portuguese news report uses it to move between the parties in a dispute." },
        { id: "pt-u108l2-poroutrolado", type: "vocab", front: "por outro lado", reading: "poroutrolado", meaning: "on the other hand", example: { jp: "Por um lado o custo desce, por outro lado o risco cresce.", en: "On one hand the cost falls, on the other hand the risk grows." }, drill: { jp: "Por outro lado o risco cresce muito", en: "On the other hand the risk grows a lot" }, accept: ["on the other hand", "on the other side", "conversely", "then again"], hint: "The second half of the pair u73 opened with por um lado. ⚠ Portuguese allows it WITHOUT the first half, exactly as English does — por outro lado alone simply introduces a counterweight." },
        { id: "pt-u108l2-deresto", type: "vocab", front: "de resto", reading: "deresto", meaning: "for the rest", example: { jp: "O início é fraco, de resto o livro é bom.", en: "The opening is weak, for the rest the book is good." }, drill: { jp: "De resto o livro é muito bom", en: "For the rest the book is very good" }, accept: ["for the rest", "otherwise", "apart from that", "in other respects"], hint: "From o resto (u40). Fences off the exception you just made so the general verdict can stand. ⚠ A second, concessive use is common in Portuguese writing: de resto, como já disse — besides, as I said." },
        { id: "pt-u108l2-emsuma", type: "vocab", front: "em suma", reading: "emsuma", meaning: "in short", example: { jp: "Em suma o plano não resulta, mas ninguém quer dizer isso ao chefe.", en: "In short the plan does not work, but nobody wants to say so to the boss." }, drill: { jp: "Em suma o plano não resulta", en: "In short the plan does not work" }, accept: ["in short", "in sum", "to sum up", "in a word"], hint: "Built on a soma, the sum. ⚠ Distinguish from a conclusão (u76): em suma compresses what was already said, a conclusão draws something new out of it. Em resumo and em síntese are its interchangeable twins." },
        { id: "pt-u108l2-postoisto", type: "vocab", front: "posto isto", reading: "postoisto", meaning: "that said", example: { jp: "Posto isto o tribunal decide amanhã, mas o prazo é curto.", en: "That said the court decides tomorrow, but the deadline is short." }, drill: { jp: "Posto isto o tribunal decide amanhã", en: "That said the court decides tomorrow" }, accept: ["that said", "this being so", "having said that", "given this"], hint: "Past participle of pôr plus isto — literally this having been placed. Closes what came before and turns to the consequence, which is why Portuguese reports use it to move from findings to decision." },
        { id: "pt-u108l2-sobretudo", type: "vocab", front: "sobretudo", reading: "sobretudo", meaning: "above all", example: { jp: "O erro é do sistema, sobretudo da falta de tempo, mas o chefe culpa o trabalhador.", en: "The mistake is the system's, above all the lack of time, but the boss blames the worker." }, drill: { jp: "O erro é sobretudo do sistema", en: "The mistake is above all the system's" }, accept: ["above all", "especially", "chiefly", "most of all"], hint: "⚠ ONE WORD as an adverb, and the identical noun um sobretudo is an overcoat — literally an over-everything. Portuguese uses the adverb far more often than English uses above all; it is the default for especially." },
      ],
    },
    {
      id: "pt-u108l3",
      unit: 108,
      lesson: 3,
      title: "Atenuar o que se afirma",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Make a claim in Portuguese without owning all of it — by the look of it, in principle, from the outset, supposedly, presumably, by all indications.",
      items: [
        { id: "pt-u108l3-pelovisto", type: "vocab", front: "pelo visto", reading: "pelovisto", meaning: "by the look of it", example: { jp: "Pelo visto o estudo não chega a tempo, mas ninguém diz nada ao cliente.", en: "By the look of it the study will not arrive in time, but nobody says anything to the client." }, drill: { jp: "Pelo visto o estudo não chega", en: "By the look of it the study is not arriving" }, accept: ["by the look of it", "apparently", "seemingly", "from the looks of things"], hint: "Spoken, and slightly resigned — the speaker is reporting what appears to be so and declining responsibility for it. ⚠ Aparentemente (u54) is the neutral written version; pelo visto carries a shrug." },
        { id: "pt-u108l3-emprincipio", type: "vocab", front: "em princípio", reading: "emprincipio", meaning: "in principle", example: { jp: "Em princípio o acordo é bom, mas o advogado ainda tem dúvidas.", en: "In principle the agreement is good, but the lawyer still has doubts." }, drill: { jp: "Em princípio o acordo é bom", en: "In principle the agreement is good" }, accept: ["in principle", "as things stand", "in theory (as planned)", "barring problems"], hint: "⚠ NOT the same as English in principle, which often means I agree with the idea. In Portuguese it means as currently planned, and it is the standard way to give a soft yes: em princípio vou, I'm going unless something changes." },
        { id: "pt-u108l3-apartida", type: "vocab", front: "à partida", reading: "apartida", meaning: "from the outset", example: { jp: "À partida o plano parece simples, mas o custo real é outro.", en: "From the outset the plan seems simple, but the real cost is another matter." }, drill: { jp: "À partida o plano parece simples", en: "From the outset the plan seems simple" }, accept: ["from the outset", "at first sight", "to begin with", "initially"], hint: "a-par-TEE-da, from partir (u20), to depart. Marks a first impression you expect to be revised — which is why it almost always has a mas after it in Portuguese." },
        { id: "pt-u108l3-supostamente", type: "vocab", front: "supostamente", reading: "supostamente", meaning: "supposedly", example: { jp: "O relatório é supostamente honesto, mas a empresa paga o estudo.", en: "The report is supposedly honest, but the company pays for the study." }, drill: { jp: "O relatório é supostamente honesto", en: "The report is supposedly honest" }, accept: ["supposedly", "allegedly", "purportedly", "so it is claimed"], hint: "From supor (u54). ⚠ Carries the same doubt as English supposedly. Distinguish from alegadamente (u55), which Portuguese journalism uses when a legal claim is at stake and which implies no scepticism." },
        { id: "pt-u108l3-presumivelmente", type: "vocab", front: "presumivelmente", reading: "presumivelmente", meaning: "presumably", example: { jp: "O erro é presumivelmente do sistema, mas ninguém o quer verificar.", en: "The mistake is presumably the system's, but nobody wants to check it." }, drill: { jp: "O erro é presumivelmente do sistema", en: "The mistake is presumably the system's" }, accept: ["presumably", "it is presumed", "most likely", "in all likelihood"], hint: "From presumir (u98). ⚠ Unlike supostamente, this one expresses the speaker's OWN reasonable inference rather than reporting someone else's claim — the difference between I assume and they say." },
        { id: "pt-u108l3-aoquetudoindica", type: "vocab", front: "ao que tudo indica", reading: "aoquetudoindica", meaning: "by all indications", example: { jp: "Ao que tudo indica o prazo muda, mas a câmara não confirma nada.", en: "By all indications the deadline is changing, but the council confirms nothing." }, drill: { jp: "Ao que tudo indica o prazo muda", en: "By all indications the deadline is changing" }, accept: ["by all indications", "all the signs suggest", "by all accounts", "everything points to"], hint: "The weightiest hedge in this lesson — it claims that the EVIDENCE points one way while stopping short of asserting it. Built from the same frame as ao que parece (u54), with tudo indica raising the confidence." },
      ],
    },
    {
      id: "pt-u108l4",
      unit: 108,
      lesson: 4,
      title: "Encadear por escrito",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Chain a cause to its consequence on the page in Portuguese — insofar as, indeed, for that matter, whence, all the more so since, specifically.",
      items: [
        { id: "pt-u108l4-namedidaemque", type: "vocab", front: "na medida em que", reading: "namedidaemque", meaning: "insofar as", example: { jp: "O plano é bom na medida em que reduz o custo, mas falha no resto.", en: "The plan is good insofar as it reduces the cost, but it fails in the rest." }, drill: { jp: "Aceito na medida em que compreendo tudo", en: "I accept insofar as I understand everything" }, accept: ["insofar as", "to the extent that", "in so far as", "given that"], hint: "Built on a medida (u55). ⚠ TWO USES and Portuguese does not mark which: to the extent that (a limit) and because (a cause). A Portuguese essay uses the causal one constantly, which surprises readers who learned only the first." },
        { id: "pt-u108l4-comefeito", type: "vocab", front: "com efeito", reading: "comefeito", meaning: "indeed", example: { jp: "Com efeito o número desce todos os anos, mas o governo fala de sucesso.", en: "Indeed the figure falls every year, but the government talks of success." }, drill: { jp: "Com efeito o número desce sempre", en: "Indeed the figure always falls" }, accept: ["indeed", "in fact", "and sure enough", "quite so"], hint: "Built on o efeito (u34). CONFIRMS what was just claimed by supplying the evidence — so it never introduces a contradiction, which is where de facto (u54) and English in fact can go." },
        { id: "pt-u108l4-alias", type: "vocab", front: "aliás", reading: "alias", meaning: "for that matter", example: { jp: "O estudo é fraco, aliás o autor admite isso.", en: "The study is weak, for that matter the author admits it." }, drill: { jp: "O estudo é fraco aliás é mau", en: "The study is weak for that matter it is bad" }, accept: ["for that matter", "indeed", "besides", "what is more", "or rather"], hint: "a-li-ASH. Adds a stronger point in the same direction — and can also CORRECT what you just said: fomos na terça, aliás na quarta. ⚠ Nothing to do with English alias, which in Portuguese is o pseudónimo." },
        { id: "pt-u108l4-donde", type: "vocab", front: "donde", reading: "donde", meaning: "whence", example: { jp: "O prazo é curto e o custo é alto, donde a decisão de parar.", en: "The deadline is short and the cost is high, whence the decision to stop." }, drill: { jp: "O custo é alto donde a decisão", en: "The cost is high whence the decision" }, accept: ["whence", "hence", "from which", "and so"], hint: "de plus onde, contracted. Draws a conclusion out of what precedes, and takes a NOUN rather than a clause: donde a decisão, donde a dúvida. Formal and compact — a Portuguese academic writes it where speech says por isso." },
        { id: "pt-u108l4-tantomaisque", type: "vocab", front: "tanto mais que", reading: "tantomaisque", meaning: "all the more so since", example: { jp: "O plano não resulta, tanto mais que ninguém o quer apoiar.", en: "The plan does not work, all the more so since nobody wants to back it." }, drill: { jp: "Recusamos tanto mais que o prazo acaba", en: "We refuse all the more so since the deadline is ending" }, accept: ["all the more so since", "especially as", "the more so because", "particularly since"], hint: "Adds a reason that STRENGTHENS one already given, rather than a new one. Portuguese also writes tanto mais quanto with the same meaning. Built on tanto (u29)." },
        { id: "pt-u108l4-designadamente", type: "vocab", front: "designadamente", reading: "designadamente", meaning: "specifically", example: { jp: "A lei muda as regras, designadamente as do prazo, mas ninguém explica nada.", en: "The law changes the rules, specifically those about the deadline, but nobody explains anything." }, drill: { jp: "A lei muda regras designadamente as do prazo", en: "The law changes rules specifically the deadline ones" }, accept: ["specifically", "namely", "in particular", "notably"], hint: "de-zig-na-da-MEN-te. Interchangeable with nomeadamente (u107) — Portuguese officialese alternates them to avoid repeating itself, and there is no difference in meaning to learn." },
      ],
    },
  ],
};
