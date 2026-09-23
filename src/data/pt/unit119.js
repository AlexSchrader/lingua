// PT Unit 119 — A medida, a escala e a proporção (slot: coverage-b2-9) — B2
// HOW MUCH, HOW BIG, HOW EXACTLY. The scaffold title was "Vocabulary 9 (B2)".
// u91 Nuance and degree (block 2) owns the SOFT degree words — rather, somewhat,
// to an extent. This unit owns the HARD ones: the numbers a report puts on a
// claim, and the words for how reliable they are. The two do not overlap, but
// the boundary is thin enough that block 1 should check it once u91 is written.
//
// SLOT BOUNDARIES:
//   u43 owns o dobro, o grau; u82 a escala, a precisão, a proporção,
//   a percentagem, a fração, o índice, a estatística, a quantidade; u83
//   a dimensão; u86 o intervalo; u85 o rigor. All used here, none re-taught.
//   NINE first-draft fronts for this unit were already taught — the highest
//   collision rate of any unit in block 3, because u82 is itself a statistics
//   unit. Replacements are different words rather than synonyms: a bitola,
//   a envergadura, o coeficiente, a equivalência, o ponto percentual, a parcela,
//   o quádruplo, a gama, a fiabilidade.
//   o acréscimo is carded; o decréscimo deliberately is NOT — same lexeme, and
//   a quebra carries the falling sense instead.
//
// EUROPEAN PORTUGUESE: o rácio and a fiabilidade are the pt-PT spellings and
// forms (Brazil: razão, confiabilidade); exatidão without the c since 2009.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT119 = {
  id: "pt-u119",
  lang: "pt",
  title: "A medida, a escala e a proporção",
  order: 119,
  stage: "b2",
  lessons: [
    {
      id: "pt-u119l1",
      unit: 119,
      lesson: 1,
      title: "Medir",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Say how something is measured in Portuguese and on what scale — its size, its span, its concentration.",
      items: [
        { id: "pt-u119l1-amedicao", type: "vocab", front: "a medição", reading: "amedicao", meaning: "measurement", example: { jp: "A medição foi feita três vezes para não haver dúvidas.", en: "The measurement was taken three times so there would be no doubt." }, drill: { jp: "A medição foi feita três vezes", en: "The measurement was taken three times" }, accept: ["measurement", "the measurement", "measuring", "reading", "gauging"], hint: "me-di-SOWN. The ACT of measuring and the reading it produces, from medir. A medida is the quantity itself or the step taken — medição is the operation." },
        { id: "pt-u119l1-agrandeza", type: "vocab", front: "a grandeza", reading: "agrandeza", meaning: "magnitude", example: { jp: "A grandeza do problema só ficou clara depois dos números.", en: "The magnitude of the problem only became clear after the figures." }, drill: { jp: "A grandeza do problema ficou clara", en: "The magnitude of the problem became clear" }, accept: ["magnitude", "the magnitude", "scale", "size", "greatness", "quantity"], hint: "gran-DE-za. How big a thing is, in the sense a physicist means — uma grandeza física is a physical quantity. It also keeps the older sense of grandeur." },
        { id: "pt-u119l1-abitola", type: "vocab", front: "a bitola", reading: "abitola", meaning: "gauge", example: { jp: "A bitola da linha portuguesa não é igual à do resto da Europa.", en: "The gauge of the Portuguese line is not the same as the rest of Europe's." }, drill: { jp: "A bitola da linha não é igual", en: "The gauge of the line is not the same" }, accept: ["gauge", "the gauge", "standard measure", "calibre", "yardstick"], hint: "bi-TO-la. A fixed standard width — famously the Iberian railway gauge, wider than the European one. Figuratively a yardstick: medir tudo pela mesma bitola." },
        { id: "pt-u119l1-aenvergadura", type: "vocab", front: "a envergadura", reading: "aenvergadura", meaning: "span", example: { jp: "A envergadura do projeto obrigou a juntar várias empresas.", en: "The scale of the project meant several companies had to join in." }, drill: { jp: "A envergadura do projeto foi grande", en: "The span of the project was great" }, accept: ["span", "the span", "wingspan", "scope", "stature", "magnitude of an undertaking"], hint: "en-ver-ga-DOO-ra. Literally wingspan, and of a bridge the span. Used constantly of undertakings — uma obra de grande envergadura, a major piece of work." },
        { id: "pt-u119l1-oteor", type: "vocab", front: "o teor", reading: "oteor", meaning: "content (concentration)", example: { jp: "O teor de sal da água subiu neste ponto do rio.", en: "The salt content of the water rose at this point in the river." }, drill: { jp: "O teor de sal da água subiu", en: "The salt content of the water rose" }, accept: ["content", "the content", "concentration", "level", "proportion", "tenor"], hint: "te-OR. How much of a substance is in a mixture — teor alcoólico is alcohol content. Separately, o teor de uma carta is the gist or tenor of a letter." },
        { id: "pt-u119l1-ocoeficiente", type: "vocab", front: "o coeficiente", reading: "ocoeficiente", meaning: "coefficient", example: { jp: "O coeficiente usado no cálculo vem de um estudo antigo.", en: "The coefficient used in the calculation comes from an old study." }, drill: { jp: "O coeficiente vem de um estudo antigo", en: "The coefficient comes from an old study" }, accept: ["coefficient", "the coefficient", "factor", "multiplier"], hint: "ku-e-fi-si-EN-te. The number you multiply by. In Portuguese school reports o coeficiente is also the weighting a subject carries — a familiar sense before the mathematical one." },
      ],
    },
    {
      id: "pt-u119l2",
      unit: 119,
      lesson: 2,
      title: "Quanto em relação a quê",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Express one quantity against another in Portuguese — ratios, percentage points, shares and multiples.",
      items: [
        { id: "pt-u119l2-aequivalencia", type: "vocab", front: "a equivalência", reading: "aequivalencia", meaning: "equivalence", example: { jp: "A equivalência do curso feito fora demorou a ser aceite.", en: "The equivalence of the course taken abroad took time to be accepted." }, drill: { jp: "A equivalência do curso demorou a ser aceite", en: "The equivalence of the course took time to be accepted" }, accept: ["equivalence", "the equivalence", "equivalency", "recognition", "parity"], hint: "e-ki-va-LEN-si-a. Two things counting as equal. In Portugal pedir equivalência is the specific act of having a foreign qualification recognised — a very common errand." },
        { id: "pt-u119l2-oracio", type: "vocab", front: "o rácio", reading: "oracio", meaning: "ratio", example: { jp: "O rácio entre alunos e professores baixou nos últimos anos.", en: "The ratio between pupils and teachers fell in recent years." }, drill: { jp: "O rácio entre alunos e professores baixou", en: "The ratio between pupils and teachers fell" }, accept: ["ratio", "the ratio", "rate", "proportion between two things"], hint: "RRA-siu. The pt-PT borrowing, written with the accent; Brazil prefers razão for the same idea. Common in Portuguese economic and school reporting." },
        { id: "pt-u119l2-opontopercentual", type: "vocab", front: "o ponto percentual", reading: "opontopercentual", meaning: "percentage point", example: { jp: "O ponto percentual a mais fez uma diferença grande no fim.", en: "The extra percentage point made a big difference in the end." }, drill: { jp: "O ponto percentual fez muita diferença", en: "The percentage point made a lot of difference" }, accept: ["percentage point", "the percentage point", "point", "basis point"], hint: "PON-tu per-sen-tu-AL. The unit for the DIFFERENCE between two percentages — going from 4% to 6% is two pontos percentuais, not two per cent. Portuguese news makes the distinction carefully." },
        { id: "pt-u119l2-aparcela", type: "vocab", front: "a parcela", reading: "aparcela", meaning: "component part", example: { jp: "A parcela maior do valor vai para a casa.", en: "The largest share of the amount goes on housing." }, drill: { jp: "A parcela maior vai para a casa", en: "The largest share goes on housing" }, accept: ["component part", "the component part", "share", "portion", "part", "plot of land", "instalment"], hint: "par-SE-la. One piece of a total — in arithmetic the numbers you add, in land a plot, in a bill an instalment. Three senses, one idea: a part broken off a whole." },
        { id: "pt-u119l2-oquadruplo", type: "vocab", front: "o quádruplo", reading: "oquadruplo", meaning: "quadruple", example: { jp: "O quádruplo do que pagava antes é impossível para ele.", en: "Four times what he paid before is impossible for him." }, drill: { jp: "O quádruplo é impossível para ele", en: "Quadruple is impossible for him" }, accept: ["quadruple", "the quadruple", "four times as much", "fourfold"], hint: "KWA-dru-plu, stress on the first syllable. Four times the amount, built like o dobro (u43) and o triplo. The series runs dobro, triplo, quádruplo, quíntuplo." },
        { id: "pt-u119l2-oterco", type: "vocab", front: "o terço", reading: "oterco", meaning: "third (fraction)", example: { jp: "O terço da turma que faltou vai fazer o teste noutro dia.", en: "The third of the class that was absent will take the test on another day." }, drill: { jp: "O terço da turma vai fazer o teste", en: "The third of the class will take the test" }, accept: ["third", "a third", "the third", "one third", "third part"], hint: "TER-su. One of three equal parts — dois terços, two thirds. In a Portuguese church o terço is also the rosary, five decades of it, and that sense is heard as often." },
      ],
    },
    {
      id: "pt-u119l3",
      unit: 119,
      lesson: 3,
      title: "Mais ou menos",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe an increase, a fall, a margin and a threshold in formal Portuguese.",
      items: [
        { id: "pt-u119l3-oacrescimo", type: "vocab", front: "o acréscimo", reading: "oacrescimo", meaning: "increment", example: { jp: "O acréscimo de trabalho não veio com mais dinheiro.", en: "The added workload did not come with more money." }, drill: { jp: "O acréscimo de trabalho não trouxe dinheiro", en: "The extra work brought no money" }, accept: ["increment", "the increment", "increase", "addition", "extra amount", "surcharge"], hint: "a-KRE-si-mu. An amount added on. Its mirror o decréscimo exists but is deliberately not taught here — same lexeme, and a quebra below carries the falling sense with a different root." },
        { id: "pt-u119l3-aquebra", type: "vocab", front: "a quebra", reading: "aquebra", meaning: "drop (fall)", example: { jp: "A quebra nas vendas começou logo no início do ano.", en: "The drop in sales began right at the start of the year." }, drill: { jp: "A quebra nas vendas começou cedo", en: "The drop in sales began early" }, accept: ["drop", "the drop", "fall", "decline", "downturn", "break"], hint: "KE-bra, from quebrar, to break. A fall in a measured quantity, and also a breakage or a break in continuity — quebra de stock, quebra de sigilo." },
        { id: "pt-u119l3-amargem", type: "vocab", front: "a margem", reading: "amargem", meaning: "margin", example: { jp: "A margem de erro é pequena mas existe sempre.", en: "The margin of error is small but always exists." }, drill: { jp: "A margem de erro é pequena", en: "The margin of error is small" }, accept: ["margin", "the margin", "leeway", "bank of a river", "edge"], hint: "MAR-zhayn. The room you have left, the profit left over, the edge of a page — and the bank of a river, which is the oldest sense: as margens do Tejo." },
        { id: "pt-u119l3-olimiar", type: "vocab", front: "o limiar", reading: "olimiar", meaning: "threshold", example: { jp: "O limiar a partir do qual se paga mais subiu este ano.", en: "The threshold above which you pay more went up this year." }, drill: { jp: "O limiar subiu este ano", en: "The threshold went up this year" }, accept: ["threshold", "the threshold", "cut-off", "limit", "doorstep"], hint: "li-mi-AR. The point at which something starts to apply — limiar de pobreza is the poverty line. Literally the doorstep, which is exactly the English metaphor too." },
        { id: "pt-u119l3-agama", type: "vocab", front: "a gama", reading: "agama", meaning: "range of values", example: { jp: "A gama de valores encontrados foi maior do que se esperava.", en: "The range of values found was wider than expected." }, drill: { jp: "A gama de valores foi maior", en: "The range of values was wider" }, accept: ["range of values", "range", "the range", "spread", "spectrum", "gamut"], hint: "GA-ma. A range or spectrum — of values, of colours, of products. Uma gama alta de produtos is a high-end product range, an everyday commercial phrase." },
        { id: "pt-u119l3-aamplitude", type: "vocab", front: "a amplitude", reading: "aamplitude", meaning: "amplitude", example: { jp: "A amplitude entre o dia e a noite é grande no interior.", en: "The swing between day and night is wide in the interior." }, drill: { jp: "A amplitude no interior é grande", en: "The swing in the interior is wide" }, accept: ["amplitude", "the amplitude", "range", "swing", "breadth", "extent"], hint: "am-pli-TOO-de. The distance between the extremes — amplitude térmica, the day-to-night temperature swing, is on every Portuguese weather forecast." },
      ],
    },
    {
      id: "pt-u119l4",
      unit: 119,
      lesson: 4,
      title: "Ser exato",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how trustworthy a figure is in Portuguese — reliable, exact, rounded, estimated, or out by something.",
      items: [
        { id: "pt-u119l4-afiabilidade", type: "vocab", front: "a fiabilidade", reading: "afiabilidade", meaning: "reliability", example: { jp: "A fiabilidade dos dados depende de quem os recolheu.", en: "The reliability of the data depends on who collected it." }, drill: { jp: "A fiabilidade dos dados depende da recolha", en: "The reliability of the data depends on the collection" }, accept: ["reliability", "the reliability", "dependability", "trustworthiness"], hint: "fi-a-bi-li-DA-de. The pt-PT form, from fiar-se, to trust. Brazil says confiabilidade. Said of instruments, data and machines rather than of people." },
        { id: "pt-u119l4-aexatidao", type: "vocab", front: "a exatidão", reading: "aexatidao", meaning: "exactness", example: { jp: "A exatidão da hora importa muito neste trabalho.", en: "The exactness of the time matters a great deal in this work." }, drill: { jp: "A exatidão da hora importa muito", en: "The exactness of the time matters a lot" }, accept: ["exactness", "the exactness", "accuracy", "precision", "exactitude"], hint: "e-za-ti-DOWN. Being right, where a precisão (u82) is being finely divided — a clock can be precise to the second and still wrong. Spelled without the c since 2009." },
        { id: "pt-u119l4-oarredondamento", type: "vocab", front: "o arredondamento", reading: "oarredondamento", meaning: "rounding", example: { jp: "O arredondamento para cima explica a diferença de um cêntimo.", en: "Rounding up explains the one-cent difference." }, drill: { jp: "O arredondamento explica a diferença", en: "The rounding explains the difference" }, accept: ["rounding", "the rounding", "rounding off", "round number adjustment"], hint: "a-rre-don-da-MEN-tu, from redondo, round. Arredondar para cima is to round up, para baixo to round down. The escudo-to-euro changeover made this a national conversation." },
        { id: "pt-u119l4-aestimativa", type: "vocab", front: "a estimativa", reading: "aestimativa", meaning: "estimate", example: { jp: "A estimativa inicial ficou bem longe do valor final.", en: "The initial estimate ended up well away from the final figure." }, drill: { jp: "A estimativa inicial ficou longe do valor", en: "The initial estimate ended far from the figure" }, accept: ["estimate", "the estimate", "projection", "forecast", "approximation"], hint: "shti-ma-TEE-va. A figure arrived at by judgement rather than counting. For a builder's written quotation Portuguese says o orçamento, not a estimativa." },
        { id: "pt-u119l4-adiscrepancia", type: "vocab", front: "a discrepância", reading: "adiscrepancia", meaning: "discrepancy", example: { jp: "A discrepância entre as duas contas nunca foi explicada.", en: "The discrepancy between the two accounts was never explained." }, drill: { jp: "A discrepância entre as contas não foi explicada", en: "The discrepancy between the accounts was not explained" }, accept: ["discrepancy", "the discrepancy", "inconsistency", "mismatch", "divergence"], hint: "dish-kre-PAN-si-a. Two things that should agree and do not. Where o desvio (u118) is a departure from a rule, a discrepância is a disagreement between two records." },
        { id: "pt-u119l4-aafericao", type: "vocab", front: "a aferição", reading: "aafericao", meaning: "calibration", example: { jp: "A aferição das balanças é feita uma vez por ano.", en: "The calibration of the scales is done once a year." }, drill: { jp: "A aferição das balanças é feita anualmente", en: "The calibration of the scales is done annually" }, accept: ["calibration", "the calibration", "checking", "verification", "benchmarking"], hint: "a-fe-ri-SOWN. Checking an instrument against a standard and correcting it. In Portuguese schools as provas de aferição are the national benchmarking tests — the same idea applied to pupils." },
      ],
    },
  ],
};
