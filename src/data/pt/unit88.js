// PT Unit 88 — A argumentação e a persuasão (slot: argument) — B2
//
// ============================================================================
// PT B2 BAND CONVENTIONS — settled by the block-1 crew lead, 2026-09-22.
// BLOCKS 2 (u101-113) AND 3 (u114-126) READ THIS HEADER FIRST. It is the
// contract for the whole band; unit1.js's header remains the contract for the
// LANGUAGE (articles, folding, the front/reading split) and still governs.
// ============================================================================
//
// WHAT B2 IS HERE, AND WHAT IT IS NOT. B2 is register, abstraction and
// precision — not harder B1. B1 already taught the learner to have an opinion
// (u51), give a cause (u52), compare (u53) and hedge (u54). B2 teaches them to
// ARGUE: to concede a point and turn it, to say what a claim rests on, to name
// a bad argument, and to do all of it in the register a Portuguese newspaper,
// court or company actually writes in. If a card would sit comfortably in B1,
// it is the wrong card.
//
// 1. REGISTER IS THE POINT. Prefer the word that belongs to written and public
//    Portuguese over its spoken twin: contudo over mas, não obstante over
//    apesar de, o despacho over a decisão. The learner already has the spoken
//    form; B2 is where the formal one arrives.
//
// 2. ONE LEXEME PER FAMILY, band-wide. u84 set this for B1 and it holds here:
//    refutar without a refutação, a patente without patentear, produtivo
//    without a produtividade. The engine teaches the family through examples.
//
// 3. EVERY VOCAB ITEM CARRIES A `drill`. Second short sentence, 3-8 tokens, no
//    sentence-internal punctuation, containing the front VERBATIM — article
//    included ("a tese" must appear as "a tese", never as "uma tese"). Written
//    in the same keystroke as the example, never in a later pass.
//
// 4. GLOSSES MUST BE UNIQUE INSIDE A LESSON AND, WHERE YOU CAN MANAGE IT,
//    ACROSS pt. GUARD 1 (tests/unit/corpus-guards.test.mjs) is a hard failure
//    with an EMPTY debt list: the produce card prompts with the gloss and
//    grades against ONE front, so two items glossed "outcome" in one lesson
//    mark a right answer wrong. Discriminate in the gloss — "sign (an
//    indication)", "trace (remnant)" — and let accept[] carry the bare word.
//
// 5. CHECK THE FOLD, NOT JUST THE STRING (GUARD 3). normalizeReading strips
//    accents, spaces and hyphens, so a front can collide with a DIFFERENT
//    taught word and make the grader accept it. This is not theoretical: this
//    block had to drop `acolher` (to take in) because `a colher` — the spoon,
//    pt-u15l3 — folds to exactly "acolher". pt already ships é/e, nós/nos,
//    às/as and porquê/porque. Run every candidate front through
//    normalizeReading and look it up against the taught fronts BOTH WAYS.
//
// 6. EUROPEAN PORTUGUESE (pt-PT), NOT BRAZILIAN. This has already produced
//    shipped errors in pt. Concretely: registar not registrar, o ficheiro not
//    o arquivo for a computer file, a equipa not a equipe, o autocarro not o
//    ônibus, and tu/você used as Portugal uses them (u72). Do NOT claim that
//    unstressed i/u reduce — that is false for pt-PT; what pt-PT does reduce is
//    unstressed /a/, /e/ and /o/, and final -e is often silent. Verify any
//    pronunciation claim in a hint before you write it.
//
// 7. THE TOOLING, AND ITS REAL SIGNATURES. Run these; do not trust a word list
//    written in a header, including this one.
//      npm run taught -- pt                  every front already taught + unit
//      node scripts/scope-strict-pt.mjs      [repoRoot] — NOT <from> <to>; it
//                                            takes an optional repo root only
//      npm run lint:curriculum 2>&1 | grep "different pt items"
//    Planning 312 fronts against the 2,106 already taught caught 95 collisions
//    BEFORE a card was written. Doing that check first is the cheapest hour in
//    the band.
//
// 8. KNOWN OPEN DEFECT, NOT YOURS TO FIX HERE. pt uses many words in examples
//    that it never teaches anywhere, including `dar`, `vir`, `sobre`, `seu`,
//    `dele`, `qual`, `isto`, `contra` and `duas` — verified against the corpus
//    on 2026-09-22, and machine-checked here: UNTAUGHT(pt:dar), UNTAUGHT(pt:vir),
//    UNTAUGHT(pt:sobre), UNTAUGHT(pt:duas). These are A1/A2 core and their home
//    is an A1 backfill, NOT a B2 thematic slot — do not smuggle `dar` into a
//    unit on abstraction to close the gap. Filed in BUILD-CHECKLIST.md.
//
// ----------------------------------------------------------------------------
// THIS UNIT. B1 left the learner able to state an opinion (u51 afirmar, o
// argumento, convencer, discordar, admitir, reconhecer, insistir, assumir),
// give a reason (u52), and hedge (u54). What it cannot do is RUN an argument:
// concede and turn, say what the claim rests on, or name the fault in a bad
// one. That is this unit.
//
// SLOT BOUNDARIES:
//   u51 A opinião owns HAVING and stating a position — argumentar, o argumento,
//   convencer, concordar, discordar, admitir, reconhecer, insistir are all
//   SPENT there, used freely in examples here and never re-carded.
//   u73 A linguagem formal owns `por um lado`; this unit takes its partner
//   `por outro lado`, which Portuguese uses alone far more often.
//   u54 A dúvida owns hedging a claim (a hipótese, arriscar, de facto), and
//   u89 (mine, next) owns where a claim's EVIDENCE comes from. This unit stops
//   at the shape of the argument itself.
//   `a versão` and `a alegação` are mine at u89 and are not carded here.
//
// Conventions: see unit1.js header (language) and the band block above (B2).
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT88 = {
  id: "pt-u88",
  lang: "pt",
  title: "A argumentação e a persuasão",
  order: 88,
  stage: "b2",
  lessons: [
    {
      id: "pt-u88l1",
      unit: 88,
      lesson: 1,
      title: "Defender uma posição",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "State a position in Portuguese and say what it rests on — the thesis, the premise, the assumption nobody stated.",
      items: [
        { id: "pt-u88l1-atese", type: "vocab", front: "a tese", reading: "atese", meaning: "thesis", example: { jp: "A tese do professor é que a igualdade começa na escola e não no tribunal.", en: "The teacher's thesis is that equality begins at school and not in court." }, drill: { jp: "A tese do professor é clara", en: "The teacher's thesis is clear" }, accept: ["thesis", "the thesis", "proposition", "claim", "argument"], hint: "TE-ze. The one claim a whole text exists to defend — an essay, a paper, a case in court. Defender uma tese is to argue it; a tese de doutoramento is the doctoral thesis." },
        { id: "pt-u88l1-refutar", type: "vocab", front: "refutar", reading: "refutar", meaning: "to refute", example: { jp: "O professor refutou a conclusão do estudo com dados mais recentes.", en: "The teacher refuted the study's conclusion with more recent data." }, drill: { jp: "O professor vai refutar a conclusão", en: "The teacher is going to refute the conclusion" }, accept: ["refute", "to refute", "to disprove", "to rebut", "to counter"], hint: "rre-fu-TAR. To show a claim is false, with evidence — much stronger than simply disagreeing with it. Irrefutável, which you can now read, is a claim nobody managed to knock down." },
        { id: "pt-u88l1-alegar", type: "vocab", front: "alegar", reading: "alegar", meaning: "to claim (to allege)", example: { jp: "A empresa alegou que não tinha recebido o documento a tempo.", en: "The company claimed it had not received the document in time." }, drill: { jp: "A empresa vai alegar falta de tempo", en: "The company is going to claim lack of time" }, accept: ["allege", "to allege", "claim", "to claim", "to plead", "to assert"], hint: "a-le-GAR. To state something as your reason or your defence without having proved it yet — which is why the news says alegadamente, allegedly." },
        { id: "pt-u88l1-fundamentar", type: "vocab", front: "fundamentar", reading: "fundamentar", meaning: "to ground (an argument)", example: { jp: "O tribunal tem de fundamentar todas as decisões que toma.", en: "The court has to ground every decision it makes." }, drill: { jp: "O tribunal deve fundamentar a decisão", en: "The court must ground the decision" }, accept: ["to ground", "ground", "to substantiate", "to justify", "to back up"], hint: "fun-da-men-TAR, built on o fundamento. To put reasons underneath a claim so it can stand up. Uma opinião fundamentada is a well-founded one — high praise in Portuguese." },
        { id: "pt-u88l1-apremissa", type: "vocab", front: "a premissa", reading: "apremissa", meaning: "premise", example: { jp: "A premissa do argumento é falsa e por isso a conclusão também não se sustenta.", en: "The argument's premise is false, and so the conclusion doesn't hold either." }, drill: { jp: "A premissa do argumento é falsa", en: "The argument's premise is false" }, accept: ["premise", "the premise", "starting point", "given"], hint: "pre-MIS-sa. The statement an argument starts from and does not itself prove. Partir de uma premissa is to take it as given — and a bad one ruins everything built on top of it." },
        { id: "pt-u88l1-opressuposto", type: "vocab", front: "o pressuposto", reading: "opressuposto", meaning: "assumption (unstated)", example: { jp: "O plano parte do pressuposto de que a economia vai crescer este ano.", en: "The plan starts from the assumption that the economy will grow this year." }, drill: { jp: "O pressuposto do plano parece correto", en: "The plan's assumption seems right" }, accept: ["assumption", "the assumption", "presupposition", "the presupposition", "unstated assumption"], hint: "pre-su-POSH-tu. What an argument quietly takes for granted without ever saying it — distinct from a premissa, which is stated out loud." },
      ],
    },
    {
      id: "pt-u88l2",
      unit: 88,
      lesson: 2,
      title: "A concessão",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Concede a point in Portuguese and then turn it — even so, on the other hand, notwithstanding.",
      items: [
        { id: "pt-u88l2-conceder", type: "vocab", front: "conceder", reading: "conceder", meaning: "to concede", example: { jp: "O professor concedeu que a crítica da turma era correta.", en: "The teacher conceded that the class's criticism was right." }, drill: { jp: "Posso conceder que o erro foi meu", en: "I can concede that the mistake was mine" }, accept: ["to concede", "concede", "to grant", "to allow", "to give ground"], hint: "kon-se-DER. To give the other side a point before making your own — the move that makes an argument sound fair rather than stubborn. It also means to grant formally: conceder uma bolsa." },
        { id: "pt-u88l2-contudo", type: "vocab", front: "contudo", reading: "contudo", meaning: "and yet", example: { jp: "Os dados do relatório são claros; contudo, ninguém chegou a uma conclusão.", en: "The report's data are clear; and yet nobody reached a conclusion." }, drill: { jp: "O estudo é curto contudo é bom", en: "The study is short and yet it is good" }, accept: ["and yet", "however", "nevertheless", "yet", "nonetheless", "still"], hint: "kon-TU-du. The written however — at home in a report or an essay where mas would sound spoken. Portugal writes contudo and no entanto far more often than porém in ordinary prose." },
        { id: "pt-u88l2-aindaassim", type: "vocab", front: "ainda assim", reading: "aindaassim", meaning: "even so", example: { jp: "O prazo era curto e a equipa era pequena; ainda assim, o trabalho ficou pronto.", en: "The deadline was short and the team was small; even so, the work was finished." }, drill: { jp: "O preço é alto ainda assim compramos", en: "The price is high and even so we bought it" }, accept: ["even so", "still", "nevertheless", "all the same", "nonetheless"], hint: "a-IN-da a-SSIM. Concedes the entire previous sentence and carries on anyway — 'granted, and even so'. Stronger than mas, because it admits the objection has real weight." },
        { id: "pt-u88l2-naoobstante", type: "vocab", front: "não obstante", reading: "naoobstante", meaning: "notwithstanding", example: { jp: "Não obstante as dificuldades do primeiro ano, a empresa conseguiu crescer.", en: "Notwithstanding the difficulties of the first year, the company managed to grow." }, drill: { jp: "Não obstante o preço o projeto avançou", en: "Notwithstanding the price the project went ahead" }, accept: ["notwithstanding", "nevertheless", "despite that", "in spite of that", "for all that"], hint: "nown obsh-TAN-te. The most formal of the concession words — legal texts, academic writing, a newspaper editorial. Takes a noun after it (não obstante o atraso) or simply isso." },
        { id: "pt-u88l2-poroutrolado", type: "vocab", front: "por outro lado", reading: "poroutrolado", meaning: "on the other hand", example: { jp: "O salário é bom; por outro lado, a viagem até ao escritório demora uma hora.", en: "The pay is good; on the other hand, the journey to the office takes an hour." }, drill: { jp: "Por outro lado a cidade fica longe", en: "On the other hand the city is far away" }, accept: ["on the other hand", "then again", "conversely", "by contrast"], hint: "You met por um lado at Unit 73; this is its partner — and Portuguese uses it alone, without the first half, far more often than English does. It introduces the counterweight, not a contradiction." },
        { id: "pt-u88l2-ressalvar", type: "vocab", front: "ressalvar", reading: "ressalvar", meaning: "to qualify (a statement)", example: { jp: "O relatório elogia o plano, mas ressalva que os custos ainda podem subir.", en: "The report praises the plan, but qualifies that the costs may still rise." }, drill: { jp: "Devo ressalvar que o prazo é curto", en: "I should qualify that the deadline is short" }, accept: ["to qualify", "qualify", "to caveat", "to add a caveat", "to note an exception"], hint: "rre-sal-VAR. To add the exception that keeps a statement honest — 'I agree, with one reservation'. A ressalva is that reservation, and com a ressalva de que is the set formula." },
      ],
    },
    {
      id: "pt-u88l3",
      unit: 88,
      lesson: 3,
      title: "Persuadir",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Persuade in Portuguese — make an appeal, stress what matters, and say why a case is plausible.",
      items: [
        { id: "pt-u88l3-persuadir", type: "vocab", front: "persuadir", reading: "persuadir", meaning: "to persuade", example: { jp: "A campanha tentou persuadir os mais jovens a votar pela primeira vez.", en: "The campaign tried to persuade younger people to vote for the first time." }, drill: { jp: "Vamos persuadir a turma a participar", en: "We're going to persuade the class to take part" }, accept: ["to persuade", "persuade", "to convince", "to win over", "to talk round"], hint: "per-swa-DIR. To bring someone round by argument, over time — where convencer (Unit 51) is the moment they finally agree. A persuasão is the craft itself." },
        { id: "pt-u88l3-oapelo", type: "vocab", front: "o apelo", reading: "oapelo", meaning: "appeal (a public call)", example: { jp: "O apelo da escola às famílias teve resposta quase imediata.", en: "The school's appeal to families got an almost immediate response." }, drill: { jp: "O apelo da escola foi ouvido", en: "The school's appeal was heard" }, accept: ["appeal", "the appeal", "call", "plea", "the call"], hint: "a-PE-lu. A public call for people to act — fazer um apelo. In court it is NOT the appeal: that is o recurso, which you meet at Unit 92. This one is the moral or emotional call." },
        { id: "pt-u88l3-aretorica", type: "vocab", front: "a retórica", reading: "aretorica", meaning: "rhetoric", example: { jp: "A retórica do discurso era boa, mas os números não apoiavam quase nada.", en: "The speech's rhetoric was good, but the figures supported almost none of it." }, drill: { jp: "A retórica do discurso convenceu poucos", en: "The speech's rhetoric convinced few people" }, accept: ["rhetoric", "the rhetoric", "oratory", "way with words"], hint: "rre-TO-ri-ka. The art of speaking persuasively — and, exactly as in English, usually a dig: é retórica means it is all style and no substance." },
        { id: "pt-u88l3-enfatizar", type: "vocab", front: "enfatizar", reading: "enfatizar", meaning: "to emphasise", example: { jp: "O professor enfatizou que a data do exame não iria mudar.", en: "The teacher emphasised that the exam date was not going to change." }, drill: { jp: "Quero enfatizar a importância deste prazo", en: "I want to emphasise the importance of this deadline" }, accept: ["to emphasise", "emphasise", "to emphasize", "to stress", "to underline"], hint: "en-fa-ti-ZAR. To give a point extra weight as you say it. Portuguese also says pôr a tónica em or sublinhar; enfatizar is the neutral, slightly formal choice." },
        { id: "pt-u88l3-omerito", type: "vocab", front: "o mérito", reading: "omerito", meaning: "merit", example: { jp: "O plano tem o mérito de ser simples, mas fica caro no segundo ano.", en: "The plan has the merit of being simple, but it gets expensive in the second year." }, drill: { jp: "O mérito do plano é ser simples", en: "The plan's merit is being simple" }, accept: ["merit", "the merit", "worth", "virtue", "strength"], hint: "ME-ri-tu, stress on the first syllable. The good in something, judged fairly. Por mérito próprio is on one's own merits, and a bolsa de mérito is the scholarship." },
        { id: "pt-u88l3-plausivel", type: "vocab", front: "plausível", reading: "plausivel", meaning: "plausible", example: { jp: "A explicação é plausível, mas até hoje ninguém conseguiu confirmá-la.", en: "The explanation is plausible, but to this day nobody has managed to confirm it." }, drill: { jp: "Essa explicação é plausível e simples", en: "That explanation is plausible and simple" }, accept: ["plausible", "believable", "reasonable", "likely enough"], hint: "plow-ZI-vel. Could well be true, on the face of it — it says nothing about whether it IS true. A hypothesis is plausível long before anyone tests it." },
      ],
    },
    {
      id: "pt-u88l4",
      unit: 88,
      lesson: 4,
      title: "O contra-argumento",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Push back in Portuguese — object, rebut, call something into question, and name a bad argument for what it is.",
      items: [
        { id: "pt-u88l4-contestar", type: "vocab", front: "contestar", reading: "contestar", meaning: "to contest", example: { jp: "Vários professores contestaram os números apresentados no relatório.", en: "Several teachers contested the figures presented in the report." }, drill: { jp: "Ninguém quis contestar o resultado final", en: "Nobody wanted to contest the final result" }, accept: ["to contest", "contest", "to challenge", "to dispute", "to question"], hint: "kon-tesh-TAR. To formally dispute something — a result, a fine, a decision. Contestar uma multa is to appeal a parking ticket, and a contestação is organised opposition." },
        { id: "pt-u88l4-aobjecao", type: "vocab", front: "a objeção", reading: "aobjecao", meaning: "objection", example: { jp: "A objeção mais séria ao plano veio de quem teria de o pagar.", en: "The most serious objection to the plan came from the people who would have to pay for it." }, drill: { jp: "A objeção do grupo foi aceite", en: "The group's objection was accepted" }, accept: ["objection", "the objection", "protest", "point against"], hint: "ob-zhe-SOWN. The specific point raised against a proposal — levantar uma objeção is to raise one. Texts printed before the 1990 spelling agreement write objecção, with two c's." },
        { id: "pt-u88l4-rebater", type: "vocab", front: "rebater", reading: "rebater", meaning: "to rebut", example: { jp: "O autor rebate cada crítica no último capítulo, uma de cada vez.", en: "The author rebuts each criticism in the last chapter, one at a time." }, drill: { jp: "É fácil rebater esse argumento fraco", en: "It's easy to rebut that weak argument" }, accept: ["to rebut", "rebut", "to counter", "to hit back at", "to answer"], hint: "rre-ba-TER — literally to hit back. To answer an argument point by point, where refutar goes further and proves it false outright." },
        { id: "pt-u88l4-poremcausa", type: "vocab", front: "pôr em causa", reading: "poremcausa", meaning: "to call into question", example: { jp: "Os novos dados põem em causa quase tudo o que o estudo concluiu.", en: "The new data call into question almost everything the study concluded." }, drill: { jp: "Isto vem pôr em causa o acordo", en: "This calls the agreement into question" }, accept: ["to call into question", "call into question", "to cast doubt on", "to undermine", "to question"], hint: "pohr eng KOW-za. The standard Portuguese phrase for making something doubtful rather than disproving it. Pôr keeps its circumflex and stays irregular: eu ponho, ele põe." },
        { id: "pt-u88l4-afalacia", type: "vocab", front: "a falácia", reading: "afalacia", meaning: "fallacy", example: { jp: "Dizer que o plano é bom só porque foi caro é uma falácia conhecida.", en: "Saying the plan is good just because it was expensive is a well-known fallacy." }, drill: { jp: "Isso é uma falácia muito comum", en: "That is a very common fallacy" }, accept: ["fallacy", "the fallacy", "flawed reasoning", "false argument"], hint: "fa-LA-si-a. An argument whose SHAPE is wrong, not merely its facts — which is why a fallacy can still arrive at a true conclusion by accident." },
        { id: "pt-u88l4-oreparo", type: "vocab", front: "o reparo", reading: "oreparo", meaning: "criticism (a remark)", example: { jp: "O chefe fez um reparo sobre o atraso, mas não levantou a voz.", en: "The boss made a remark about the delay, but didn't raise his voice." }, drill: { jp: "O reparo do chefe surpreendeu toda a equipa", en: "The boss's remark surprised the whole team" }, accept: ["criticism", "a criticism", "a remark", "comment", "observation"], hint: "rre-PA-ru. A small, pointed criticism said out loud — fazer um reparo. Don't confuse it with reparar, which is the same root pulling two ways: to notice, and to repair." },
      ],
    },
  ],
};
