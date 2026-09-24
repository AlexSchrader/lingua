// PT Unit 88 — A argumentação (slot: argument) — B2
// ═════════════════════════════════════════════════════════════════════════════
// THE PORTUGUESE B2 CONSTITUTION — §C1–C10
// Settled by the pt B2 block-1 seat (crew lead), 2026-09-23. Blocks 2 and 3
// (u101–u113, u114–u126) author to these. They are not style preferences; every
// one of them is a failure another language's crew already paid for. Read the
// unit1.js header first — it governs the whole language and nothing here
// overrides it. This adds only what the B2 band needs.
//
// §C1  VARIETY: EUROPEAN PORTUGUESE (pt-PT). Settled in unit1.js by the
//      companion voice (Tiago, Lisbon) and held by every unit from u1 to u87.
//      At B2 the divergence stops being an accent and becomes grammar:
//        · a equipa / o comboio / o telemóvel / o facto — not time, trem,
//          celular, fato.
//        · ESTAR A + infinitive for the progressive (está a crescer), never
//          está crescendo.
//        · CLITIC PLACEMENT is the giveaway a B2 text is pt-PT: ENCLISIS in an
//          affirmative main clause (destacou-se, chamo-me), PROCLISIS after a
//          negative, an adverb, a quantifier or any subordinator (não se
//          destacou, que se destacou, já se destacou).
//      If a card would be wrong in Portugal, it is wrong.
//
// §C2  WHAT A B2 EXAMPLE MUST DO: TWO CLAUSES THAT ARGUE. One clause qualifies,
//      concedes, undercuts or contrasts the other — mas, embora, ainda que,
//      enquanto, no entanto, porque, quando. Two clauses that merely CONTINUE
//      ("and then…") are a B1 example wearing a B2 word. The English gloss must
//      show the same relation, because the gloss is what the cloze card renders.
//
// §C3  VOCABULARY IS META, NOT TOPICAL. A unit slotted "Politics" does not teach
//      the furniture of politics — o governo, votar, o povo are already taught at
//      u32/u48. It teaches what you DO with it in language: legislar, revogar,
//      vigorar, o escrutínio. The test before you spend a card: "does this let
//      the learner say something ABOUT the topic they could not say before?" If
//      it only NAMES a thing, it belongs to an A2 coverage unit and this band is
//      the wrong place to spend it.
//
// §C4  ONE LEXEME PER FAMILY INSIDE A UNIT — BUT A DERIVATION IS A SECOND
//      LEXEME AND MAY BE TAUGHT. Corrected project-wide 2026-09-23: "lexeme"
//      means INFLECTION (falar/falou, o/a variants), not derivation. falar and
//      a fala are two words and both may be carded — the German corpus taught
//      survey, enquiry and demand but not QUESTION because of the old reading,
//      and lost 17 of its commonest words. The working test is "would a learner
//      who knows one already produce the other?" Where the answer is no, both
//      are allowed, but SPLIT THEM ACROSS UNITS: alegar (u88l1) and a alegação
//      (u88l1) sit together only because the noun is the one a learner meets in
//      a news headline and the verb is the one they need to write.
//
// §C5  THE GLOSS IS THE PROMPT, AND IT IS GLOBALLY UNIQUE ACROSS pt. Two cards
//      glossed the same show one question with two right answers, and the
//      learner who types the synonym this course itself taught is marked wrong.
//      German shipped nine such pairs. Before adding a card, check its English
//      gloss against the corpus; if it is taken, DISCRIMINATE with a parenthetical
//      (the es-u14l4-todo pattern: "all (masculine)") — never retreat to a
//      vaguer synonym, and never let a gloss equal its own front.
//
// §C6  reading = THE BARE NFD FOLD OF front. normalizeReading runs NFD and drops
//      the combining marks, so ã→a, ç→c, ó→o, ê→e, and articles/spaces/hyphens
//      collapse with no separator: a objeção → aobjecao, por conseguinte →
//      porconseguinte. NEVER invent a digraph — German stored "oe" for ö while
//      the grader folded to "o", and 37 cards marked the correct answer wrong.
//
// §C7  DRILL IN THE SAME KEYSTROKE AS THE EXAMPLE, NEVER IN A LATER PASS. Every
//      vocab card carries BOTH: `example` teaches (long, subordinate, punctuated)
//      and `drill` is the same idea cut to what the router can take apart —
//      3–8 whitespace tokens, NO sentence-internal punctuation, the item's own
//      front present as a whole word. Those are exactly cloze:choice and
//      sentence:build's preconditions (src/store/cardRouting.js sentenceTokens).
//      Retrofitting them is a second full pass over the band.
//
// §C8  A (uNN) IN A HINT IS A CLAIM, SO CHECK IT — DO NOT REMEMBER IT. The
//      Norwegian B2 seats fabricated ~83 unit citations between them, one
//      pointing twelve units FORWARD to a word not yet taught. Resolve every
//      citation against the live corpus with a script before you commit. A
//      forward citation is worse than none: delete it rather than renumber.
//
// §C9  DELIBERATELY DEFERRED — DO NOT SPEND IT HERE:
//      · the subjunctive/conditional MACHINERY → u106 (counterfactuals), u107
//        (formal written structures), u108 (discourse and hedged claims). This
//        block USES embora/ainda que + already-taught forms in examples and
//        cards no new mood morphology.
//      · ADDRESS AND REGISTER — tu / você / o senhor, and the pt-PT vs pt-BR
//        axis → u109 and u110. ⚠ u109's scaffold stub arrived titled
//        "Register 3 — 敬語: humble and honorific", which is the JAPANESE
//        honorific system in a language that has none; the stub has been
//        rethemed to the real Portuguese address axis (see that file). Retitle
//        rather than inherit — CLAUDE.md, "No front language".
//      · environment/global → u101 · health systems → u102 · education and
//        research → u103 · media and narrative → u104 · fine-grained emotion →
//        u105. This block names none of them.
//
// §C10 THEMES SPENT BY BLOCK 1 (u88–u100) — DO NOT AUTHOR THEM AGAIN. Norwegian
//      authored "character and personality" three times because nobody tracked
//      this. Argumentation · evidence and sourcing · systems/abstraction ·
//      degree and hedging adverbs · legislature and courts · commercial
//      negotiation and company finance · scientific method and engineering ·
//      empire, regime and periodisation · the artwork and its criticism ·
//      professional ethics and misconduct · risk, threat and mitigation ·
//      belonging and social exclusion · how an organisation is run from inside.
//
// ─────────────────────────────────────────────────────────────────────────────
// THIS UNIT. The corpus can already agree, disagree, give a reason and state an
// opinion (u24 a opinião/concordar, u51 afirmar/discordar/o argumento/apoiar/
// defender/salientar, u55 o debate). What it cannot do is handle an argument as
// an OBJECT: name the claim, name what the claim rests on, take a piece of it
// apart, give ground on purpose, and close. That is this unit.
//
// SLOT BOUNDARIES: u51 owns o argumento, afirmar, defender, apoiar, convencer,
// admitir, salientar, a razão — none re-taught. u76 owns a conclusão and o
// âmbito; u29 owns portanto, so the closing connective carded here is por
// conseguinte, which is the written register portanto is not. u89 owns the
// EVIDENCE half (a citação, o indício, corroborar) — this unit argues, that one
// sources. RESERVED, not spent: a retórica, a réplica, o reparo, questionar.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT88 = {
  id: "pt-u88",
  lang: "pt",
  title: "A argumentação",
  order: 88,
  stage: "b2",
  lessons: [
    {
      id: "pt-u88l1",
      unit: 88,
      lesson: 1,
      title: "Pôr a tese",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Put a claim on the table in Portuguese and say what it rests on — the thesis, the premise, the assumption nobody stated.",
      items: [
        { id: "pt-u88l1-atese", type: "vocab", front: "a tese", reading: "atese", meaning: "thesis", example: { jp: "A tese do estudo parece forte, mas a prova que a sustenta é do século passado.", en: "The study's thesis seems strong, but the evidence supporting it is a century old." }, drill: { jp: "A tese do estudo parece forte", en: "The study's thesis seems strong" }, accept: ["the thesis", "thesis", "central claim", "the central claim", "proposition"], hint: "TE-ze. The claim a whole text exists to defend, not a passing opinion — uma opinião (u24) you may change tomorrow, uma tese you have undertaken to prove. Also the dissertation itself: uma tese de mestrado." },
        { id: "pt-u88l1-apremissa", type: "vocab", front: "a premissa", reading: "apremissa", meaning: "premise", example: { jp: "A premissa do governo é que o povo aceita a lei, mas ninguém verifica isso.", en: "The government's premise is that the people accept the law, but nobody checks that." }, drill: { jp: "A premissa do governo é falsa", en: "The government's premise is false" }, accept: ["the premise", "premise", "starting point", "the starting point"], hint: "pre-MISS-a. What an argument starts FROM, before it proves anything. Partir de uma premissa errada is to begin from a false start — and everything built on it falls with it." },
        { id: "pt-u88l1-opressuposto", type: "vocab", front: "o pressuposto", reading: "opressuposto", meaning: "unstated assumption", example: { jp: "O pressuposto do texto é que a família tem um computador, mas no campo isso não é verdade.", en: "The text's unstated assumption is that the family has a computer, but in the countryside that isn't true." }, drill: { jp: "O pressuposto do texto é claro", en: "The text's unstated assumption is clear" }, accept: ["the assumption", "assumption", "unstated assumption", "presupposition", "given"], hint: "pre-ssu-POSH-tu. The premise nobody writes down. A premissa (this lesson) is declared; um pressuposto is smuggled in, and naming it is half of any B2 rebuttal. Supor, to assume, you met at u54." },
        { id: "pt-u88l1-alegar", type: "vocab", front: "alegar", reading: "alegar", meaning: "to allege", example: { jp: "A empresa alega que o preço é alto por causa da guerra, mas o estudo diz outra coisa.", en: "The company alleges the price is high because of the war, but the study says otherwise." }, drill: { jp: "A empresa vai alegar um problema grave", en: "The company is going to allege a serious problem" }, accept: ["to allege", "allege", "to claim", "claim", "to assert"], hint: "a-le-GAR. To state something AS your reason, with the proof still owing — the verb a Portuguese court report uses. Afirmar (u51) just says it; alegar says it while asking to be believed." },
        { id: "pt-u88l1-aalegacao", type: "vocab", front: "a alegação", reading: "aalegacao", meaning: "allegation", example: { jp: "A alegação do trabalhador é grave, mas o tribunal ainda não viu nenhuma prova.", en: "The worker's allegation is serious, but the court has not yet seen any evidence." }, drill: { jp: "A alegação do cliente parece grave", en: "The client's allegation seems serious" }, accept: ["the allegation", "allegation", "claim made", "assertion"], hint: "a-le-ga-SOWN. The noun of alegar, and the word Portuguese news uses before anything is proven: alegações de corrupção. Carded beside its verb on purpose — the headline uses the noun, you write with the verb." },
        { id: "pt-u88l1-oraciocinio", type: "vocab", front: "o raciocínio", reading: "oraciocinio", meaning: "line of reasoning", example: { jp: "O raciocínio do professor é bom até ao fim, mas o princípio está errado.", en: "The teacher's reasoning is sound right to the end, but the starting point is wrong." }, drill: { jp: "O raciocínio do professor parece correto", en: "The teacher's reasoning seems correct" }, accept: ["the reasoning", "reasoning", "line of reasoning", "train of thought", "thinking"], hint: "rra-syo-SEE-nyu. The chain of steps, not the conclusion. A lógica (u58) is the system; o raciocínio is one person walking through it, and it can be perfeito and still start somewhere false." },
      ],
    },
    {
      id: "pt-u88l2",
      unit: 88,
      lesson: 2,
      title: "Contestar",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Push back on a claim in Portuguese — name the objection, answer it, and say which part of it will not survive.",
      items: [
        { id: "pt-u88l2-contestar", type: "vocab", front: "contestar", reading: "contestar", meaning: "to dispute", example: { jp: "A família contesta a decisão do tribunal, mas o advogado já não quer continuar.", en: "The family disputes the court's decision, but the lawyer no longer wants to carry on." }, drill: { jp: "A família vai contestar a decisão", en: "The family is going to dispute the decision" }, accept: ["to dispute", "dispute", "to contest", "contest", "to challenge"], hint: "kon-tesh-TAR. To formally refuse to accept something — a bill, a ruling, a figure. Discordar (u51) is disagreeing in conversation; contestar is disagreeing on the record." },
        { id: "pt-u88l2-aobjecao", type: "vocab", front: "a objeção", reading: "aobjecao", meaning: "objection", example: { jp: "A objeção da família é forte, mas o chefe quer continuar.", en: "The family's objection is strong, but the boss wants to carry on." }, drill: { jp: "A objeção da família parece forte", en: "The family's objection seems strong" }, accept: ["the objection", "objection", "reservation raised", "protest"], hint: "ob-je-SOWN. pt-PT spells it objeção, with no c before the ç since the 1990 accord. Levantar uma objeção is to raise one — the formal move a meeting expects, where não concordo is the conversational one." },
        { id: "pt-u88l2-refutar", type: "vocab", front: "refutar", reading: "refutar", meaning: "to refute", example: { jp: "O cientista refuta a tese do livro porque o estudo dele diz outra coisa.", en: "The scientist refutes the book's thesis because his own study says otherwise." }, drill: { jp: "O cientista quer refutar a tese", en: "The scientist wants to refute the thesis" }, accept: ["to refute", "refute", "to disprove", "disprove", "to rebut"], hint: "rre-fu-TAR. To show a claim is FALSE, with something — not merely to deny it. In Portuguese as in English the word is often used loosely for 'deny'; at B2 keep it for the case where evidence does the work." },
        { id: "pt-u88l2-rebater", type: "vocab", front: "rebater", reading: "rebater", meaning: "to hit back at", example: { jp: "O governo rebate a alegação do jornal, mas não apresenta nenhum número novo.", en: "The government hits back at the newspaper's allegation, but presents no new figures." }, drill: { jp: "O governo vai rebater a alegação", en: "The government is going to hit back at the allegation" }, accept: ["to hit back at", "hit back", "to counter", "counter", "to rebut", "to bat back"], hint: "rre-ba-TER, literally to bat a ball back. What you do to the OTHER side's point, at once and in public. Refutar proves it wrong; rebater returns it — and the second does not require the first." },
        { id: "pt-u88l2-afalacia", type: "vocab", front: "a falácia", reading: "afalacia", meaning: "fallacy", example: { jp: "A falácia do texto é simples: o livro diz que um facto causa o outro, mas nunca prova nada.", en: "The text's fallacy is simple: the book says one fact causes the other, but it never proves anything." }, drill: { jp: "A falácia do texto é simples", en: "The text's fallacy is simple" }, accept: ["the fallacy", "fallacy", "false reasoning", "flawed argument"], hint: "fa-LA-sya. A step in the reasoning that only LOOKS valid — the defect is in the raciocínio, not in the facts. Note the trap: falácia is not falsehood; a mentira (u40) is a lie, a falácia can be told in perfect good faith." },
        { id: "pt-u88l2-discutivel", type: "vocab", front: "discutível", reading: "discutivel", meaning: "arguable", example: { jp: "O resultado do estudo é discutível, mas ninguém na escola quer dizer isso ao professor.", en: "The study's result is arguable, but nobody at the school wants to say so to the teacher." }, drill: { jp: "O resultado do estudo é discutível", en: "The study's result is arguable" }, accept: ["arguable", "debatable", "open to question", "questionable", "contestable"], hint: "dish-ku-TEE-vel, from discutir. The polite Portuguese way to say you think something is wrong: isso é discutível concedes that a case exists while refusing it. -ável/-ível is the productive 'can be X-ed' ending." },
      ],
    },
    {
      id: "pt-u88l3",
      unit: 88,
      lesson: 3,
      title: "Ceder terreno",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Give ground in Portuguese without losing the argument — concede the point, attach the caveat, and keep your own.",
      items: [
        { id: "pt-u88l3-conceder", type: "vocab", front: "conceder", reading: "conceder", meaning: "to grant (a point)", example: { jp: "O professor concede que o exemplo é bom, mas continua a dizer que o raciocínio está errado.", en: "The teacher grants that the example is good, but still says the reasoning is wrong." }, drill: { jp: "O professor vai conceder um ponto", en: "The teacher is going to grant a point" }, accept: ["to grant", "grant", "to concede", "concede", "to allow"], hint: "kon-se-DER. To hand the other side a piece on purpose, so the rest holds. Ceder (u81) is what a shelf does under weight; conceder is a decision. Also the bureaucratic 'to award': conceder uma bolsa." },
        { id: "pt-u88l3-aconcessao", type: "vocab", front: "a concessão", reading: "aconcessao", meaning: "concession", example: { jp: "A concessão da empresa não chega, mas ninguém tem força para continuar.", en: "The company's concession isn't enough, but nobody has the strength to carry on." }, drill: { jp: "A concessão da empresa não chega", en: "The company's concession isn't enough" }, accept: ["the concession", "concession", "ground given", "climbdown"], hint: "kon-se-SOWN. The thing given up, in an argument or a negotiation. In Portugal you will also meet it commercially — uma concessão is a franchise or a licensed operation, the same idea of ground handed over." },
        { id: "pt-u88l3-aressalva", type: "vocab", front: "a ressalva", reading: "aressalva", meaning: "caveat", example: { jp: "O estudo é bom, mas com a ressalva de que o número de pessoas é baixo.", en: "The study is good, but with the caveat that the number of people is low." }, drill: { jp: "A ressalva do estudo é importante", en: "The study's caveat is important" }, accept: ["the caveat", "caveat", "proviso", "qualification", "reservation"], hint: "rre-SSAL-va, from salvar. The condition you attach so your agreement is not read as total. Com a ressalva de que… is the fixed frame; a ressalva protects your position rather than attacking theirs." },
        { id: "pt-u88l3-ocontraponto", type: "vocab", front: "o contraponto", reading: "ocontraponto", meaning: "counterpoint", example: { jp: "O contraponto do jornal é forte, mas não muda nada no resultado do debate.", en: "The newspaper's counterpoint is strong, but it changes nothing in the debate's outcome." }, drill: { jp: "O contraponto do jornal é forte", en: "The newspaper's counterpoint is strong" }, accept: ["the counterpoint", "counterpoint", "counterargument", "the other side"], hint: "kon-tra-PON-tu. The point set AGAINST yours to balance it — borrowed from music, where two lines run against each other. Como contraponto is how a Portuguese essay introduces the other view without conceding it." },
        { id: "pt-u88l3-ponderar", type: "vocab", front: "ponderar", reading: "ponderar", meaning: "to weigh up", example: { jp: "O tribunal pondera a alegação da família antes de decidir, porque o caso não é claro.", en: "The court weighs up the family's allegation before deciding, because the case isn't clear." }, drill: { jp: "O tribunal vai ponderar a alegação", en: "The court is going to weigh up the allegation" }, accept: ["to weigh up", "weigh up", "to consider", "consider", "to weigh"], hint: "pon-de-RAR, from o peso — to put things on the scales. Decidir (u24) ends it; ponderar is the slow part before. Uma resposta ponderada is a measured answer, and it is a compliment." },
        { id: "pt-u88l3-subentender", type: "vocab", front: "subentender", reading: "subentender", meaning: "to imply", example: { jp: "A carta subentende que a culpa é da família, mas não diz isso em nenhuma parte.", en: "The letter implies that the fault is the family's, but it never says so anywhere." }, drill: { jp: "A carta parece subentender uma culpa", en: "The letter seems to imply fault" }, accept: ["to imply", "imply", "to hint at", "to leave understood", "to suggest"], hint: "sub-en-ten-DER — literally to understand UNDER. Portuguese splits what English calls implying: subentender is what the TEXT leaves under the surface; the reader who takes it out deduz. Fica subentendido = it goes without saying." },
      ],
    },
    {
      id: "pt-u88l4",
      unit: 88,
      lesson: 4,
      title: "Fechar o argumento",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Close an argument in Portuguese — draw the consequence, press the crux, and say what is now beyond dispute.",
      items: [
        { id: "pt-u88l4-porconseguinte", type: "vocab", front: "por conseguinte", reading: "porconseguinte", meaning: "consequently", example: { jp: "O raciocínio está errado e, por conseguinte, tudo o que o livro diz a seguir cai, mas o livro continua a vender.", en: "The reasoning is wrong and, consequently, everything the book says afterwards falls, but the book keeps selling." }, drill: { jp: "O raciocínio está errado por conseguinte tudo cai", en: "The reasoning is wrong consequently everything falls" }, accept: ["consequently", "therefore", "hence", "accordingly", "as a result"], hint: "The written cousin of portanto (u29), which you already have. Portanto is what you SAY; por conseguinte is what a report, a ruling or an essay writes. Using it in conversation sounds like reading aloud." },
        { id: "pt-u88l4-ocerne", type: "vocab", front: "o cerne", reading: "ocerne", meaning: "crux", example: { jp: "O cerne do problema não é o preço, mas o tempo que a empresa demora a responder.", en: "The crux of the problem is not the price, but the time the company takes to respond." }, drill: { jp: "O cerne do problema é o tempo", en: "The crux of the problem is time" }, accept: ["the crux", "crux", "the heart", "heart of the matter", "core"], hint: "SER-ne — the heartwood of a tree, the dense part at the centre. No cerne da questão is the fixed phrase, and it does what 'the heart of the matter' does: it claims the rest is surface." },
        { id: "pt-u88l4-aenfase", type: "vocab", front: "a ênfase", reading: "aenfase", meaning: "emphasis", example: { jp: "A ênfase do governo é no dinheiro, enquanto o problema das pessoas fica sem resposta.", en: "The government's emphasis is on money, while people's problem goes unanswered." }, drill: { jp: "A ênfase do governo é no dinheiro", en: "The government's emphasis is on money" }, accept: ["the emphasis", "emphasis", "stress", "the stress", "focus"], hint: "EN-fa-ze, stress on the first syllable, which the circumflex marks. Dar ênfase a is to emphasise. Note that where ênfase falls is itself an argument — what a speaker stressed is evidence of what they wanted believed." },
        { id: "pt-u88l4-persuadir", type: "vocab", front: "persuadir", reading: "persuadir", meaning: "to persuade", example: { jp: "O advogado persuade o tribunal com o raciocínio, mas o caso dele não é forte.", en: "The lawyer persuades the court with his reasoning, but his case isn't strong." }, drill: { jp: "O advogado quer persuadir o tribunal", en: "The lawyer wants to persuade the court" }, accept: ["to persuade", "persuade", "to win over", "win over", "to sway"], hint: "per-swa-DEER. Convencer (u51) leaves someone believing something; persuadir leaves them DOING it — the second half is the point. Deixar-se persuadir is to let yourself be talked round." },
        { id: "pt-u88l4-oapelo", type: "vocab", front: "o apelo", reading: "oapelo", meaning: "appeal (to feeling)", example: { jp: "O apelo do governo é forte, mas o povo já não quer ouvir nada.", en: "The government's appeal is strong, but the people no longer want to hear anything." }, drill: { jp: "O apelo do governo é forte", en: "The government's appeal is strong" }, accept: ["the appeal", "appeal", "plea", "the plea", "call"], hint: "a-PE-lu. A public call on people's feeling or duty — fazer um apelo à calma. Careful: the LEGAL appeal against a ruling is o recurso, a different word entirely; the two never swap in Portuguese." },
        { id: "pt-u88l4-incontestavel", type: "vocab", front: "incontestável", reading: "incontestavel", meaning: "indisputable", example: { jp: "O número é incontestável, mas o que ele significa é discutível.", en: "The figure is indisputable, but what it means is arguable." }, drill: { jp: "O número do estudo é incontestável", en: "The study's figure is indisputable" }, accept: ["indisputable", "undeniable", "beyond dispute", "incontestable", "unquestionable"], hint: "in-kon-tesh-TA-vel — literally 'not contestable', built straight off contestar in lesson 2. Pair it with discutível and you have the two ends of the same scale, which is why they close and open this unit." },
      ],
    },
  ],
};
