// PT Unit 51 — A opinião e o acordo (slot: opinion) — B1
// ─────────────────────────────────────────────────────────────────────────────
// FIRST UNIT OF THE B1 BAND, and the block-1 header for it. The language-wide
// contract lives in pt/unit1.js (European Portuguese, articles on nouns, the
// front/reading fold, the article trap, the four shipped fold collisions) and
// still binds every card here. THIS header carries only what B1 adds.
//
// WHAT CHANGES AT B1 (BUILD-BRIEF-language-blueprint.md §1):
//   - Examples are TWO OR MORE clauses joined by a connective. The sentence is
//     the lesson, not decoration around a word. One-clause examples belong to A1.
//   - Topics stop being picturable. A1/A2 spent the concrete domains; a B1 slot
//     takes the ABSTRACT / PROCESS layer of a domain A2 already spent, never the
//     domain again at the same altitude. If a B1 title could have sat in A2, it
//     is aimed too low.
//   - Register becomes its own strand (u72-u73, block 2).
//
// BAND MAP, so a later seat can see where this unit sits:
//   u51-u68 thematic · u69-u71 grammar · u72-u73 register · u74-u87 coverage.
//   Block 1 = u51-u63 (this block) · block 2 = u64-u76 · block 3 = u77-u87.
//
// RULES THIS BLOCK AUTHORS UNDER — all three are engine facts, not style:
//   (a) `pôr` IS FORBIDDEN AS A FRONT FOR THE WHOLE B1 BAND. It folds to `por`,
//       taught at u29, and normalizeReading() compares folds — so the two cards
//       would accept each other's typed answers for ever. Use it in examples via
//       its conjugated forms (põe, pôs) only. Same deliberate care for esta/está,
//       têm/tem, más/mas, dá/da, sê/se (pt/unit1.js lists them).
//   (b) EVERY DRILL IS VALIDATED AGAINST THE ENGINE, NEVER AGAINST THE LINT.
//       lint.js accent-folds and substring-matches; cardRouting's findWholeWord
//       is letter-boundary aware and does NOT fold, so the lint is strictly
//       WEAKER and will pass drills the engine then refuses (27 of them on pt A2
//       block 1). Since a Portuguese front carries its article, the three costumes
//       of the same defect are: possessive swallows it ("O meu ponto de vista" does
//       not contain "o ponto de vista"), preposition replaces it ("de acordo" does
//       not contain "o acordo"), conjugation hides it ("defendeu" does not contain
//       "defender"). Verb drills therefore use an infinitive frame — vou/vamos/
//       posso/é difícil + infinitive — which is also ordinary Portuguese.
//   (c) A front is only free when checked against the GENERATED taught list
//       (src/data/pt/TAUGHT-WORDS.md, 1,202 fronts at u1-u50), including its
//       inflectional relatives. A green validate:content is not evidence: it keys
//       on the exact string, so `concordar` (u24) and a `concordo` card would both
//       pass while being one word with two mastery tracks.
//
// WHAT THIS SLOT MAY NOT TEACH — already spent, examples only:
//   a opinião, concordar, sugerir, discutir, explicar, apresentar, decidir (u24)
//   · achar, dizer, contar, perguntar, saber (u36) · a ideia, o assunto, o facto,
//   a verdade, a mentira, o exemplo, a diferença, a vantagem, o objetivo, o caso
//   (u40) · ótimo, péssimo, elogiar, criticar (u39) · mas, ou, então, além disso,
//   no entanto, por isso (u21) · porque, portanto, pois (u29) · talvez (u28).
//   The B1 delta is therefore not "words for opinions" — A2 has those — but the
//   moves a speaker makes AROUND an opinion: framing it as yours, backing it,
//   conceding, denying, guaranteeing, and naming the argument itself.
//
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT51 = {
  id: "pt-u51",
  lang: "pt",
  title: "A opinião e o acordo",
  order: 51,
  stage: "b1",
  lessons: [
    // Lesson 1: framing a view as YOURS. A2 taught `a opinião` as a noun and
    // `achar que` as the everyday verb; what a B1 speaker needs is the frame that
    // marks a claim as a position rather than a fact.
    {
      id: "pt-u51l1",
      unit: 51,
      lesson: 1,
      title: "Dizer o que se pensa",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Give an opinion as your own view and say what it rests on, instead of only saying whether you like something.",
      items: [
        {
          id: "pt-u51l1-opontodevista",
          type: "vocab",
          front: "o ponto de vista",
          reading: "opontodevista",
          meaning: "point of view",
          example: { jp: "Do ponto de vista do chefe o projeto é importante, mas os colegas não concordam com o prazo.", en: "From the boss's point of view the project is important, but the colleagues don't agree about the deadline." },
          drill: { jp: "O ponto de vista do chefe é claro", en: "The boss's point of view is clear" },
          accept: ["viewpoint", "perspective", "standpoint", "the point of view"],
          hint: "Ponto = point, vista = view. The frame is do meu ponto de vista — de + o fuses to do, so it is never 'de o meu'. Careful with the article: the possessive swallows it (o MEU ponto de vista), which is why this card's drill keeps the bare form.",
        },
        {
          id: "pt-u51l1-naminhaopiniao",
          type: "vocab",
          front: "na minha opinião",
          reading: "naminhaopiniao",
          meaning: "in my opinion",
          example: { jp: "Na minha opinião a greve é importante, porque o governo ainda não falou com os empregados.", en: "In my opinion the strike matters, because the government still hasn't spoken to the employees." },
          drill: { jp: "Na minha opinião a empresa é enorme", en: "In my opinion the company is enormous" },
          accept: ["to my mind", "personally", "i think", "in my view"],
          hint: "You already have a opinião from u24 — this is the frame that puts it in a sentence. Literally 'in the my opinion': em + a = na, and Portuguese keeps the article before the possessive.",
        },
        {
          id: "pt-u51l1-afirmar",
          type: "vocab",
          front: "afirmar",
          reading: "afirmar",
          meaning: "to state",
          example: { jp: "O cientista vai afirmar que o clima mudou, e a imprensa vai dar a notícia hoje.", en: "The scientist is going to state that the climate has changed, and the press will give the news today." },
          drill: { jp: "O cientista vai afirmar a verdade", en: "The scientist is going to state the truth" },
          accept: ["to assert", "to claim", "state", "assert", "to declare"],
          hint: "Stronger than dizer: afirmar puts a claim on the record, and you can be asked to back it. Noun: a afirmação.",
        },
        {
          id: "pt-u51l1-considerar",
          type: "vocab",
          front: "considerar",
          reading: "considerar",
          meaning: "to consider",
          example: { jp: "Vamos considerar o problema com calma, porque o resultado vai mudar o bairro.", en: "Let's consider the problem calmly, because the result will change the neighbourhood." },
          drill: { jp: "Vamos considerar outro exemplo", en: "Let's consider another example" },
          accept: ["consider", "to weigh up", "to regard", "to think over"],
          hint: "To weigh something up, not merely to have a thought about it. Also takes a claim: considero que o prazo é curto.",
        },
        {
          id: "pt-u51l1-defender",
          type: "vocab",
          front: "defender",
          reading: "defender",
          meaning: "to defend",
          example: { jp: "Ele vai defender a ideia na reunião, mas o chefe quer esperar pelo relatório.", en: "He's going to defend the idea in the meeting, but the boss wants to wait for the report." },
          drill: { jp: "Vou defender a ideia na reunião", en: "I'm going to defend the idea in the meeting" },
          accept: ["defend", "to argue for", "to stand up for", "to back"],
          hint: "Defends an idea, not only a person: o advogado defende o cliente, e tu defendes uma ideia. The reflexive defender-se is 'to defend oneself'.",
        },
        {
          id: "pt-u51l1-convencer",
          type: "vocab",
          front: "convencer",
          reading: "convencer",
          meaning: "to convince",
          example: { jp: "É difícil convencer o governo, porque já decidiu tudo e ninguém quer discutir o assunto.", en: "It's hard to convince the government, because it has already decided everything and nobody wants to discuss the matter." },
          drill: { jp: "É difícil convencer o chefe", en: "It's hard to convince the boss" },
          accept: ["convince", "to persuade", "persuade"],
          hint: "convencer alguém DE alguma coisa. Reflexive convencer-se = to become convinced. Estou convencido is how you say you are sure without saying tenho a certeza.",
        },
      ],
    },
    // Lesson 2: the two directions of a disagreement, plus the flip. A2 gave
    // `concordar`; every card here is what a speaker needs once someone says no.
    {
      id: "pt-u51l2",
      unit: 51,
      lesson: 2,
      title: "Concordar e discordar",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say clearly that you agree or disagree, and put the opposite view without sounding rude.",
      items: [
        {
          id: "pt-u51l2-oacordo",
          type: "vocab",
          front: "o acordo",
          reading: "oacordo",
          meaning: "agreement",
          example: { jp: "Depois de duas reuniões há um acordo, mas o chefe ainda não assinou o contrato.", en: "After two meetings there's an agreement, but the boss still hasn't signed the contract." },
          drill: { jp: "O acordo com a empresa é bom", en: "The agreement with the company is good" },
          accept: ["the agreement", "deal", "accord", "an agreement"],
          hint: "The noun behind concordar (u24). Estar de acordo com alguém = to be in agreement with someone — and note that de acordo drops the article, which is why the drill keeps o acordo whole.",
        },
        {
          id: "pt-u51l2-odesacordo",
          type: "vocab",
          front: "o desacordo",
          reading: "odesacordo",
          meaning: "disagreement",
          example: { jp: "O desacordo dos dois colegas é claro, porque cada um defende uma ideia.", en: "The two colleagues' disagreement is obvious, because each one defends a different idea." },
          drill: { jp: "O desacordo dos colegas é claro", en: "The colleagues' disagreement is clear" },
          accept: ["the disagreement", "dispute", "discord"],
          hint: "des- + acordo, the same prefix English puts on 'disagreement'. Estar em desacordo com = to be at odds with.",
        },
        {
          id: "pt-u51l2-discordar",
          type: "vocab",
          front: "discordar",
          reading: "discordar",
          meaning: "to disagree",
          example: { jp: "Posso discordar do chefe na reunião, mas depois vou apresentar o relatório à empresa.", en: "I can disagree with the boss in the meeting, but afterwards I'll present the report to the company." },
          drill: { jp: "Posso discordar do chefe hoje", en: "I can disagree with the boss today" },
          accept: ["disagree", "to differ", "to dissent"],
          hint: "The exact opposite of concordar (u24), and it takes the same preposition: discordar DE. It fuses — discordar do chefe, discordar da ideia.",
        },
        {
          id: "pt-u51l2-apoiar",
          type: "vocab",
          front: "apoiar",
          reading: "apoiar",
          meaning: "to support",
          example: { jp: "A população vai apoiar a greve, porque o governo não quer discutir os salários.", en: "The public will support the strike, because the government won't discuss wages." },
          drill: { jp: "Vamos apoiar a ideia do colega", en: "Let's support the colleague's idea" },
          accept: ["support", "to back", "to back up", "to endorse"],
          hint: "To back something — uma ideia, uma greve, um cidadão. Noun: o apoio. It is NOT 'to support a family' financially; that is sustentar.",
        },
        {
          id: "pt-u51l2-rejeitar",
          type: "vocab",
          front: "rejeitar",
          reading: "rejeitar",
          meaning: "to reject",
          example: { jp: "O governo vai rejeitar a ideia dos cidadãos, e a imprensa vai falar do assunto amanhã.", en: "The government is going to reject the citizens' idea, and the press will talk about the matter tomorrow." },
          drill: { jp: "O chefe vai rejeitar o relatório", en: "The boss is going to reject the report" },
          accept: ["reject", "to turn down", "to refuse"],
          hint: "Formal and final: rejeitar uma ideia, uma candidatura, um pedido. In speech, não aceitar is the softer everyday version.",
        },
        {
          id: "pt-u51l2-pelocontrario",
          type: "vocab",
          front: "pelo contrário",
          reading: "pelocontrario",
          meaning: "on the contrary",
          example: { jp: "O prazo não é um problema; pelo contrário, ainda há tempo para organizar tudo.", en: "The deadline isn't a problem; on the contrary, there's still time to organise everything." },
          drill: { jp: "Pelo contrário o resultado é bom", en: "On the contrary the result is good" },
          accept: ["quite the opposite", "far from it", "on the contrary,", "quite the contrary"],
          hint: "Flips a claim you have just denied: não é caro — pelo contrário, é barato. Por + o = pelo, the same fusion you met in u29.",
        },
      ],
    },
    // Lesson 3: the honesty moves. Conceding, denying and guaranteeing are what
    // separate an argument from a shouting match, and all three are ordinary
    // pt-PT office and news vocabulary.
    {
      id: "pt-u51l3",
      unit: 51,
      lesson: 3,
      title: "Admitir, negar e garantir",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Concede a point, deny a claim, or give your word — the three moves that keep a disagreement honest.",
      items: [
        {
          id: "pt-u51l3-admitir",
          type: "vocab",
          front: "admitir",
          reading: "admitir",
          meaning: "to admit",
          example: { jp: "O chefe vai admitir que o prazo é difícil, porque o relatório ainda não está organizado.", en: "The boss is going to admit that the deadline is difficult, because the report still isn't organised." },
          drill: { jp: "Vou admitir a verdade ao chefe", en: "I'm going to admit the truth to the boss" },
          accept: ["admit", "to concede", "to acknowledge", "to own up to"],
          hint: "Two lives: admitir que (to concede a point) and admitir alguém (to let someone in, as a company admits staff). Context separates them.",
        },
        {
          id: "pt-u51l3-reconhecer",
          type: "vocab",
          front: "reconhecer",
          reading: "reconhecer",
          meaning: "to acknowledge",
          example: { jp: "É preciso reconhecer o direito dos vizinhos, quando a lei demora a mudar.", en: "It's necessary to acknowledge the neighbours' right, when the law is slow to change." },
          drill: { jp: "É preciso reconhecer o direito", en: "It's necessary to acknowledge the right" },
          accept: ["acknowledge", "to recognise", "to recognize", "recognise"],
          hint: "Also the everyday 'to recognise a face' — re + conhecer, to know something again. Admitir concedes a point against you; reconhecer grants one that was already true.",
        },
        {
          id: "pt-u51l3-negar",
          type: "vocab",
          front: "negar",
          reading: "negar",
          meaning: "to deny",
          example: { jp: "O cidadão vai negar tudo na televisão, mas a imprensa já tem o contrato.", en: "The citizen will deny everything on television, but the press already has the contract." },
          drill: { jp: "Ele vai negar tudo na reunião", en: "He's going to deny everything in the meeting" },
          accept: ["deny", "to refuse", "to turn down"],
          hint: "negar = to say something is not so; negar-se a = to refuse to do it. Do not confuse with não (u1), which just negates the verb.",
        },
        {
          id: "pt-u51l3-garantir",
          type: "vocab",
          front: "garantir",
          reading: "garantir",
          meaning: "to guarantee",
          example: { jp: "Posso garantir o resultado do projeto, porque a equipa já organizou o trabalho todo.", en: "I can guarantee the project's result, because the team has already organised all the work." },
          drill: { jp: "Posso garantir o resultado do projeto", en: "I can guarantee the project's result" },
          accept: ["guarantee", "to assure", "to ensure", "assure"],
          hint: "Used far more freely than English 'guarantee' — garanto que sim is simply 'I promise it is'. Noun: a garantia, which is also the warranty on something you buy.",
        },
        {
          id: "pt-u51l3-insistir",
          type: "vocab",
          front: "insistir",
          reading: "insistir",
          meaning: "to insist",
          example: { jp: "Não é preciso insistir no assunto, porque o governo já rejeitou a ideia duas vezes.", en: "There's no need to insist on the subject, because the government has already rejected the idea twice." },
          drill: { jp: "Vou insistir no assunto do prazo", en: "I'm going to insist on the matter of the deadline" },
          accept: ["insist", "to press", "to keep on"],
          hint: "insistir EM, and the preposition fuses with the article: insistir no assunto, insistir na ideia. Insistir com alguém is to press a person rather than a point.",
        },
        {
          id: "pt-u51l3-assumir",
          type: "vocab",
          front: "assumir",
          reading: "assumir",
          meaning: "to take on",
          example: { jp: "A empresa vai assumir o problema, e depois o chefe vai explicar tudo aos empregados.", en: "The company is going to take on the problem, and afterwards the boss will explain everything to the employees." },
          drill: { jp: "A empresa vai assumir o problema", en: "The company is going to take on the problem" },
          accept: ["to assume", "to take responsibility for", "to take charge of", "take on"],
          hint: "FALSE FRIEND, half the time. Portuguese assumir is to take something on or own up to it — assumir um cargo, assumir um erro. English 'assume' in the sense of supposing is supor or partir do princípio.",
        },
      ],
    },
    // Lesson 4: naming the argument itself. These are the nouns and verbs a
    // speaker needs to talk ABOUT a disagreement rather than just have one —
    // the vocabulary of a news panel or a meeting minute.
    {
      id: "pt-u51l4",
      unit: 51,
      lesson: 4,
      title: "O argumento e a razão",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the parts of an argument — the case being made, the reason behind it, and what someone adds or highlights.",
      items: [
        {
          id: "pt-u51l4-oargumento",
          type: "vocab",
          front: "o argumento",
          reading: "oargumento",
          meaning: "argument",
          example: { jp: "O argumento do advogado é bom, mas o juiz ainda não rejeitou o pedido da empresa.", en: "The lawyer's argument is good, but the judge still hasn't rejected the company's request." },
          drill: { jp: "O argumento do advogado é bom", en: "The lawyer's argument is good" },
          accept: ["the argument", "case", "reasoning", "point"],
          hint: "The CASE someone makes, never the row — a heated argument is uma discussão. It is also the plot of a film, which is why o argumento do filme is normal.",
        },
        {
          id: "pt-u51l4-argumentar",
          type: "vocab",
          front: "argumentar",
          reading: "argumentar",
          meaning: "to argue",
          example: { jp: "É melhor argumentar com factos, porque o governo respeita mais um relatório do que uma ideia.", en: "It's better to argue with facts, because the government respects a report more than an idea." },
          drill: { jp: "Vamos argumentar com factos e dados", en: "Let's argue with facts and figures" },
          accept: ["argue", "to make a case", "to reason"],
          hint: "To make a case, not to quarrel — discutir (u24) is what you do when it gets loud. Pairs with o argumento, exactly as in English.",
        },
        {
          id: "pt-u51l4-arazao",
          type: "vocab",
          front: "a razão",
          reading: "arazao",
          meaning: "reason",
          example: { jp: "Ninguém explicou a razão do acordo, e por isso os cidadãos ainda não apoiam a decisão do governo.", en: "Nobody explained the reason for the agreement, and so the citizens still don't support the government's decision." },
          drill: { jp: "Ninguém explicou a razão do acordo", en: "Nobody explained the reason for the agreement" },
          accept: ["the reason", "cause", "grounds", "rationale"],
          hint: "You already met it inside ter razão (u22), 'to be right'. On its own it is the reason FOR something: a razão do acordo, a razão da greve.",
        },
        {
          id: "pt-u51l4-justificar",
          type: "vocab",
          front: "justificar",
          reading: "justificar",
          meaning: "to justify",
          example: { jp: "O chefe vai justificar o prazo na reunião, porque a empresa já gastou o dinheiro do projeto.", en: "The boss is going to justify the deadline in the meeting, because the company has already spent the project's money." },
          drill: { jp: "Vou justificar o prazo na reunião", en: "I'm going to justify the deadline in the meeting" },
          accept: ["justify", "to account for", "to explain away"],
          hint: "To give the reason that makes something acceptable. A justificação is the written note you hand in — for a missed day at school or work, it is the ordinary word.",
        },
        {
          id: "pt-u51l4-salientar",
          type: "vocab",
          front: "salientar",
          reading: "salientar",
          meaning: "to point out",
          example: { jp: "É importante salientar a diferença entre os dois casos, porque a lei não é igual para todos.", en: "It's important to point out the difference between the two cases, because the law isn't the same for everyone." },
          drill: { jp: "Vou salientar a diferença entre os casos", en: "I'm going to point out the difference between the cases" },
          accept: ["point out", "to highlight", "to stress", "to emphasise"],
          hint: "Formal register — the verb of reports and news. In speech people say chamar a atenção para. Quero salientar que … is how a speaker flags the part that matters.",
        },
        {
          id: "pt-u51l4-acrescentar",
          type: "vocab",
          front: "acrescentar",
          reading: "acrescentar",
          meaning: "to add",
          example: { jp: "O cientista quis acrescentar um pormenor ao relatório, mas ninguém na reunião quis discutir mais.", en: "The scientist wanted to add a detail to the report, but nobody in the meeting wanted to discuss any more." },
          drill: { jp: "Quero acrescentar um pormenor ao relatório", en: "I want to add a detail to the report" },
          accept: ["add", "to add on", "to append"],
          hint: "Adding to what was said or written — acrescentar que … It is also the kitchen verb: acrescentar sal. For arithmetic, Portuguese uses somar.",
        },
      ],
    },
  ],
};
