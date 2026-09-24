// PT Unit 113 — Vocabulário 3 (B2) — o juízo e a medida (slot: coverage-b2-3) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Authored by the pt B2 block-2 seat, 2026-09-23, to §C1–C10 (src/data/pt/unit88.js).
// The last unit of block 2; u114–u126 belong to block 3.
//
// The third coverage slot, and the same rule as u111 and u112: words the themed
// units had no room for, not new B2 ideas. Probed 2026-09-23 — the corpus had
// julgar-adjacent vocabulary at u97 (a ética, íntegro, imparcial) and quantity
// vocabulary at u82 (o total, a proporção, a quantidade, o excesso), and STILL
// could not say condenar, convir, digno, severo, apto, amplo, restrito, vasto,
// pleno, vago, a série, o reembolso, a soma, a sobra, o acréscimo, a mistura,
// o par, a essência, o âmago, o item, o alvo, o exemplar or o bocado.
// condenar, o reparo and o reembolso are three of the fronts block 1 reserved.
//
// HANDOVER TO BLOCK 3 — fronts RE-PROBED against the live corpus on 2026-09-23
// and deliberately not spent, so u114–u126 can take them. A timestamp, not a
// promise: probe again before you commit to one.
//   o rascunho · o resumo · conforme · a intriga · o juízo · o proveito ·
//   a aptidão · a cátedra · o estabelecimento · exíguo · avulso · afim ·
//   segundo consta · tanto quanto sei · ora · eis · o decréscimo ·
//   o sobressalto · a apatia · o distanciamento · brusco · descontraído ·
//   o vocativo · a petição · o articulado
//   — plus six ordinary words the corpus still cannot say, which this block's
//   examples had to write around: o doente · o aluno · o texto · o ministro ·
//   o presidente · a imagem.
// ⚠ TWO ENTRIES WERE CUT FROM THIS LIST BEFORE COMMIT because the probe said
// so: a moral is taught at u97l1 and o saldo at u27l3. A reserved-front list is
// a claim, and §C8's rule applies to it as much as to a (uNN) in a hint.
// lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT113 = {
  id: "pt-u113",
  lang: "pt",
  title: "Vocabulário 3 (B2) — o juízo e a medida",
  order: 113,
  stage: "b2",
  lessons: [
    {
      id: "pt-u113l1",
      unit: 113,
      lesson: 1,
      title: "Julgar em voz alta",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Pass judgement in Portuguese without shouting — condemn it, make one pointed remark, say what is advisable, and say who is worthy or fit.",
      items: [
        { id: "pt-u113l1-condenar", type: "vocab", front: "condenar", reading: "condenar", meaning: "to condemn", example: { jp: "É fácil condenar o erro de fora, mas ninguém conhece o caso todo.", en: "It is easy to condemn the mistake from outside, but nobody knows the whole case." }, drill: { jp: "É fácil condenar o erro alheio", en: "It is easy to condemn someone else's mistake" }, accept: ["to condemn", "condemn", "to convict", "to denounce"], hint: "kon-de-NAR. ⚠ TWO REGISTERS IN ONE VERB. In a court it means to convict and pass sentence — condenado a cinco anos. In public argument it means to denounce. Portuguese keeps both and only the setting separates them; absolver (u92) is its courtroom opposite." },
        { id: "pt-u113l1-oreparo", type: "vocab", front: "o reparo", reading: "oreparo", meaning: "critical remark", example: { jp: "O reparo do chefe é justo, mas a forma é dura.", en: "The boss's critical remark is fair, but the way it is put is hard." }, drill: { jp: "O reparo do chefe é justo", en: "The boss's critical remark is fair" }, accept: ["critical remark", "the remark", "criticism (mild)", "observation", "comment"], hint: "rre-PA-ru. Fazer um reparo is to make ONE pointed observation — smaller than a crítica (u64) and more pointed than um comentário (u77). ⚠ Built on reparar (u78), to notice: the remark is what noticing turns into." },
        { id: "pt-u113l1-convir", type: "vocab", front: "convir", reading: "convir", meaning: "to be advisable", example: { jp: "Vai convir avisar o cliente hoje, mas ninguém quer ser o primeiro.", en: "It is going to be advisable to warn the client today, but nobody wants to be the first." }, drill: { jp: "Não vai convir dizer isso agora", en: "It will not be advisable to say that now" }, accept: ["to be advisable", "to be fitting", "to suit", "to be in one's interest"], hint: "kon-VEER, conjugated like vir (u111): convém, convinha, conviesse. ⚠ Almost always impersonal — convém fazer, it is advisable to do — and that is the form to learn. Convém-me means it suits me." },
        { id: "pt-u113l1-digno", type: "vocab", front: "digno", reading: "digno", meaning: "worthy", example: { jp: "O comportamento é digno de um chefe, mas o resultado é fraco.", en: "The behaviour is worthy of a boss, but the result is weak." }, drill: { jp: "O comportamento dele é sempre digno", en: "His behaviour is always worthy" }, accept: ["worthy", "dignified", "deserving", "fit to be"], hint: "DIG-nu. Takes de: digno de confiança, digno de nota. ⚠ The root of a dignidade (u97) and of indignação (u105) — three cards across three units, one Latin root meaning fitting." },
        { id: "pt-u113l1-severo", type: "vocab", front: "severo", reading: "severo", meaning: "severe", example: { jp: "O tom do parecer é severo, embora o erro seja pequeno.", en: "The tone of the official opinion is severe, although the mistake is small." }, drill: { jp: "O tom do parecer é severo", en: "The official opinion's tone is severe" }, accept: ["severe", "harsh", "stern", "strict"], hint: "se-VE-ru. Of a person, a punishment or a tone. ⚠ Distinguish from grave (u67): grave measures how BAD something is, severo measures how hard the response to it is. A doença grave, uma pena severa." },
        { id: "pt-u113l1-apto", type: "vocab", front: "apto", reading: "apto", meaning: "fit for", example: { jp: "O trabalhador é apto para o cargo, mas ninguém o quer.", en: "The worker is fit for the post, but nobody wants him." }, drill: { jp: "O trabalhador é apto para o cargo", en: "The worker is fit for the post" }, accept: ["fit for", "suitable", "qualified", "able", "eligible"], hint: "AP-tu. Takes para or a: apto para o serviço. ⚠ Formal and administrative — a Portuguese medical certificate says apto or inapto. Capaz (u85) is about ability; apto is about meeting a requirement." },
      ],
    },
    {
      id: "pt-u113l2",
      unit: 113,
      lesson: 2,
      title: "Quanto e até onde",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Say how far something reaches in Portuguese — broad, restricted, vast, in full force, vague, or one of a run.",
      items: [
        { id: "pt-u113l2-amplo", type: "vocab", front: "amplo", reading: "amplo", meaning: "broad", example: { jp: "O acordo é amplo, mas cada país assina apenas a parte dele.", en: "The agreement is broad, but each country signs only its own part of it." }, drill: { jp: "O acordo é amplo e claro", en: "The agreement is broad and clear" }, accept: ["broad", "wide-ranging", "ample", "extensive", "spacious"], hint: "AM-plu. Physical (uma sala ampla) and abstract (um debate amplo). ⚠ Not largo (u10), which measures WIDTH across; amplo is about how much it takes in." },
        { id: "pt-u113l2-restrito", type: "vocab", front: "restrito", reading: "restrito", meaning: "restricted", example: { jp: "O grupo com direito a ver o documento é restrito, mas o jornal publica tudo.", en: "The group entitled to see the document is restricted, but the paper publishes everything." }, drill: { jp: "O grupo com direito é restrito", en: "The entitled group is restricted" }, accept: ["restricted", "limited", "narrow", "closed"], hint: "rresh-TREE-tu. The opposite of amplo. ⚠ Acesso restrito is the standard sign on a Portuguese door. Distinguish from reduzido (u53), which means small in quantity rather than closed to outsiders." },
        { id: "pt-u113l2-vasto", type: "vocab", front: "vasto", reading: "vasto", meaning: "vast", example: { jp: "O tema é vasto, mas o curso dura um mês.", en: "The subject is vast, but the course lasts a month." }, drill: { jp: "O tema deste curso é vasto", en: "This course's subject is vast" }, accept: ["vast", "huge", "immense", "wide"], hint: "VASH-tu. Stronger than amplo, and slightly literary. ⚠ Common in the fixed phrase um vasto conhecimento — a deep and wide knowledge — where English would say extensive." },
        { id: "pt-u113l2-pleno", type: "vocab", front: "pleno", reading: "pleno", meaning: "full-fledged", example: { jp: "O acordo está em pleno vigor, mas ninguém o cumpre.", en: "The agreement is in full force, but nobody complies with it." }, drill: { jp: "O acordo está em pleno vigor", en: "The agreement is in full force" }, accept: ["full-fledged", "full (complete)", "in full", "total", "at its height"], hint: "PLE-nu. Complete and at its height — em pleno inverno is in the depths of winter, em pleno dia in broad daylight. ⚠ Not cheio (u10), which means physically full of something." },
        { id: "pt-u113l2-vago", type: "vocab", front: "vago", reading: "vago", meaning: "vague", example: { jp: "O texto é vago no ponto mais importante, e por isso ninguém sabe o que fazer.", en: "The text is vague at the most important point, and so nobody knows what to do." }, drill: { jp: "O texto é vago no essencial", en: "The text is vague on the essentials" }, accept: ["vague", "unclear", "imprecise", "woolly", "vacant"], hint: "VA-gu. ⚠ SECOND SENSE IS COMMON AND CONCRETE: um lugar vago is a VACANT seat, and that is the sense behind a vaga (u100), an opening. Same word, one meaning abstract and one physical." },
        { id: "pt-u113l2-aserie", type: "vocab", front: "a série", reading: "aserie", meaning: "series", example: { jp: "A série de erros é grande, mas o relatório culpa uma pessoa.", en: "The series of mistakes is large, but the report blames one person." }, drill: { jp: "A série de erros é grande", en: "The series of mistakes is large" }, accept: ["series", "the series", "run", "string", "sequence"], hint: "SE-rye, invariable in the plural: as séries. ⚠ Also the television sense, and uma série de is the ordinary Portuguese for a whole lot of — uma série de problemas. A sequência (u86) is ordered; uma série need not be." },
      ],
    },
    {
      id: "pt-u113l3",
      unit: 113,
      lesson: 3,
      title: "Contas e trocas",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Do the arithmetic of an exchange in Portuguese — the refund, the sum, the leftover, the extra, the mixture, the pair.",
      items: [
        { id: "pt-u113l3-oreembolso", type: "vocab", front: "o reembolso", reading: "oreembolso", meaning: "refund", example: { jp: "O reembolso chega um ano depois, mas a lei fala de um mês.", en: "The refund arrives a year later, but the law talks about a month." }, drill: { jp: "O reembolso chega um ano depois", en: "The refund arrives a year later" }, accept: ["refund", "the refund", "reimbursement", "money back"], hint: "rre-em-BOL-su. Money paid back after you spent it — a ticket, a medical bill, a tax return. ⚠ Not o troco (u16), which is the change from a purchase, and not o desconto, which reduces the price before you pay." },
        { id: "pt-u113l3-asoma", type: "vocab", front: "a soma", reading: "asoma", meaning: "sum", example: { jp: "A soma dos custos é maior do que o preço, mas ninguém verifica nada.", en: "The sum of the costs is larger than the price, but nobody checks anything." }, drill: { jp: "A soma dos custos é maior", en: "The sum of the costs is larger" }, accept: ["sum", "the sum", "total", "addition"], hint: "SO-ma, the noun of somar (u82). ⚠ Not o total (u82), which is the figure the sum arrives at: a soma names the operation and o total the answer. Em suma (u108) is this word doing discourse work." },
        { id: "pt-u113l3-asobra", type: "vocab", front: "a sobra", reading: "asobra", meaning: "leftover", example: { jp: "A sobra do dinheiro volta ao Estado, mas o serviço ainda precisa do apoio.", en: "The leftover money goes back to the State, but the service still needs the support." }, drill: { jp: "A sobra do dinheiro volta ao Estado", en: "The leftover money goes back to the State" }, accept: ["leftover", "the leftover", "surplus", "remainder", "what is left"], hint: "SO-bra, from sobrar, to be left over. ⚠ In the plural as sobras is leftover food. Distinguish from o resto (u40), which is the rest of something whole; uma sobra is what nobody needed." },
        { id: "pt-u113l3-oacrescimo", type: "vocab", front: "o acréscimo", reading: "oacrescimo", meaning: "increment", example: { jp: "O acréscimo no preço é pequeno, mas para uma família não é.", en: "The increment in the price is small, but for a family it is not." }, drill: { jp: "O acréscimo no preço é pequeno", en: "The increment in the price is small" }, accept: ["increment", "the increase", "addition", "surcharge", "extra amount"], hint: "a-KRESH-si-mu, from acrescentar (u51). The amount ADDED, not the new total — which is the whole difference from o aumento. ⚠ Its opposite, o decréscimo, is equally common in Portuguese statistics." },
        { id: "pt-u113l3-amistura", type: "vocab", front: "a mistura", reading: "amistura", meaning: "mixture", example: { jp: "A mistura de dados fracos e fortes estraga o estudo todo, mas ninguém o nota.", en: "The mixture of weak and strong data ruins the whole study, but nobody notices it." }, drill: { jp: "A mistura de dados estraga tudo", en: "The mixture of data ruins everything" }, accept: ["mixture", "the mixture", "mix", "blend", "combination"], hint: "mish-TU-ra, from misturar (u41). ⚠ Sem mistura means unadulterated, and uma mistura de is often mildly negative in Portuguese — a muddle rather than a blend." },
        { id: "pt-u113l3-opar", type: "vocab", front: "o par", reading: "opar", meaning: "pair", example: { jp: "O par de erros parece pequeno, mas o resultado muda com os dois.", en: "The pair of mistakes seems small, but the result changes because of the two." }, drill: { jp: "O par de erros parece pequeno", en: "The pair of mistakes seems small" }, accept: ["pair", "the pair", "couple", "a pair of", "counterpart"], hint: "PAR. Two of a kind, and also a person's equal — um par do reino, a peer. ⚠ Do not confuse with the fixed phrase a par de (u104), which means informed about: same three letters, unrelated job." },
      ],
    },
    {
      id: "pt-u113l4",
      unit: 113,
      lesson: 4,
      title: "O que a coisa é por dentro",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Get at what something actually is in Portuguese — its essence, its core, one entry in a list, what it aims at, one copy of it, a small piece of it.",
      items: [
        { id: "pt-u113l4-aessencia", type: "vocab", front: "a essência", reading: "aessencia", meaning: "essence", example: { jp: "A essência do problema é o prazo, mas o relatório fala do custo.", en: "The essence of the problem is the deadline, but the report talks about the cost." }, drill: { jp: "A essência do problema é o prazo", en: "The essence of the problem is the deadline" }, accept: ["essence", "the essence", "the heart of it", "core nature"], hint: "e-SEN-sya. What a thing is once everything removable is gone — the noun behind essencial (u75). ⚠ Also a perfume or a food essence, exactly as in English." },
        { id: "pt-u113l4-oamago", type: "vocab", front: "o âmago", reading: "oamago", meaning: "core", example: { jp: "O âmago da questão fica de fora do debate, e por isso nada muda.", en: "The core of the question is left out of the debate, and so nothing changes." }, drill: { jp: "O âmago da questão fica de fora", en: "The core of the question is left out" }, accept: ["core", "the core", "innermost part", "heart", "kernel"], hint: "A-ma-gu, stressed on the first syllable. Originally the heartwood of a tree. ⚠ More literary than o cerne (u88), which is the same image and the commoner word — a difference of register, not of meaning." },
        { id: "pt-u113l4-oitem", type: "vocab", front: "o item", reading: "oitem", meaning: "item", example: { jp: "Cada item da lista tem um custo, mas o total não está no papel.", en: "Each item on the list has a cost, but the total is not on the paper." }, drill: { jp: "O item da lista tem custo", en: "The item on the list has a cost" }, accept: ["item", "the item", "entry", "line item"], hint: "EE-tayn. ⚠ Plural is itens, with no accent and one n — a spelling Portuguese speakers themselves get wrong. One entry in a list, a form or a budget; for a thing in a shop Portuguese says o artigo (u64)." },
        { id: "pt-u113l4-oalvo", type: "vocab", front: "o alvo", reading: "oalvo", meaning: "the mark aimed at", example: { jp: "O alvo do estudo é o sistema, mas quem paga é o trabalhador.", en: "The study's target is the system, but the one who pays is the worker." }, drill: { jp: "O alvo do estudo é o sistema", en: "The study's target is the system" }, accept: ["the mark aimed at", "target", "the target", "aim", "object of attack"], hint: "AL-vu. What is AIMED AT — a bullseye, a criticism, a policy. ⚠ Not a meta (u56), which is the goal you want to reach: a meta is where you are going, o alvo is what you are pointing at. Ser alvo de críticas is to come under fire." },
        { id: "pt-u113l4-oexemplar", type: "vocab", front: "o exemplar", reading: "oexemplar", meaning: "copy", example: { jp: "O exemplar do jornal custa dois euros, mas o site não custa nada.", en: "A copy of the paper costs two euros, but the site costs nothing." }, drill: { jp: "O exemplar do jornal custa dois euros", en: "A copy of the paper costs two euros" }, accept: ["copy", "a copy", "single copy", "specimen", "issue"], hint: "e-zayn-PLAR. ONE physical copy out of a print run — which is why it sits beside a tiragem (u104). ⚠ Also an adjective meaning exemplary: um comportamento exemplar. And in biology, one specimen of a species." },
        { id: "pt-u113l4-obocado", type: "vocab", front: "o bocado", reading: "obocado", meaning: "bit", example: { jp: "Um bocado de sorte ajuda, mas o trabalho conta mais.", en: "A bit of luck helps, but the work counts for more." }, drill: { jp: "O bocado de sorte ajuda sempre", en: "The bit of luck always helps" }, accept: ["bit", "a bit", "piece", "chunk", "a while"], hint: "bu-KA-du. ⚠ THOROUGHLY pt-PT. A piece of a thing, and also a stretch of TIME — espera um bocado, wait a bit. The course already taught its diminutive um bocadinho at u72; this is the base word." },
      ],
    },
  ],
};
