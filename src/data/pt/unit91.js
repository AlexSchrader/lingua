// PT Unit 91 — O matiz e o grau (slot: nuance-degree) — B2
// SAYING HOW MUCH, AND MEANING IT. u53 gave the corpus its comparison band
// (ligeiramente, consideravelmente, o nível, o limite, mais/menos); u82 gave
// o excesso and a escala; u59 abrandar. None re-taught. What a B1 learner still
// cannot do is HEDGE with precision — commit to a quantity loosely on purpose,
// turn a claim up or down, and mark a difference as either barely there or
// impossible to miss.
//
// THIS IS THE MOST META UNIT IN THE BLOCK (§C3): almost nothing here names a
// thing. Eight of the twenty-four cards are fixed multiword adverbials, because
// that is how Portuguese actually grades a statement — em larga medida, quanto
// muito, por assim dizer. They are carded as single fronts, exactly as u1's
// chunk convention prescribes, and their pieces (certo, modo, tanto, grosso,
// limite) legitimately enter the corpus with them.
//
// SLOT BOUNDARIES: u53 owns plain comparison; this unit owns hedged degree.
// The HEDGING OF TRUTH rather than of quantity (talvez, parece que, ao que
// tudo indica) is u108's, block 3's — deliberately not spent here.
// RESERVED for blocks 2/3: a par, salvo, o grau de certeza.
// Conventions: unit1.js header · B2 constitution §C1–C10: unit88.js header.
export const PT_UNIT91 = {
  id: "pt-u91",
  lang: "pt",
  title: "O matiz e o grau",
  order: 91,
  stage: "b2",
  lessons: [
    {
      id: "pt-u91l1",
      unit: 91,
      lesson: 1,
      title: "Quase, mas não bem",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Qualify a quantity in Portuguese instead of overstating it — relatively, practically, noticeably, only in part.",
      items: [
        { id: "pt-u91l1-relativamente", type: "vocab", front: "relativamente", reading: "relativamente", meaning: "relatively", example: { jp: "O preço é relativamente baixo para a cidade, mas continua alto para quem ganha pouco.", en: "The price is relatively low for the city, but it is still high for someone who earns little." }, drill: { jp: "O preço é relativamente baixo", en: "The price is relatively low" }, accept: ["relatively", "comparatively", "fairly", "rather"], hint: "rre-la-ti-va-MEN-te. It only means anything against a comparison, and a careful speaker says which: relativamente ao ano passado. Used bare it is a soft 'fairly' — and that vagueness is sometimes the point." },
        { id: "pt-u91l1-praticamente", type: "vocab", front: "praticamente", reading: "praticamente", meaning: "practically", example: { jp: "A escola está praticamente sem gente, mas o governo continua a dizer que tem crianças.", en: "The school is practically without people, but the government still says it has children." }, drill: { jp: "A escola está praticamente sem gente", en: "The school is practically without people" }, accept: ["practically", "virtually", "almost entirely", "as good as"], hint: "pra-ti-ka-MEN-te. Not 'in practice' — that is na prática. This is the quantity word: close enough to all of it that the difference does not matter. Quase says almost; praticamente says almost, and I am done arguing." },
        { id: "pt-u91l1-sensivelmente", type: "vocab", front: "sensivelmente", reading: "sensivelmente", meaning: "noticeably", example: { jp: "O número de casos é sensivelmente maior este ano, mas o jornal não diz nada.", en: "The number of cases is noticeably higher this year, but the newspaper says nothing." }, drill: { jp: "O número é sensivelmente maior este ano", en: "The figure is noticeably higher this year" }, accept: ["noticeably", "appreciably", "markedly", "perceptibly", "by a noticeable amount"], hint: "sen-si-vel-MEN-te. Big enough to be felt. Beware the trap: sensivelmente ALSO means approximately in pt-PT — sensivelmente às três, around three — so the noun it modifies decides which sense you are reading." },
        { id: "pt-u91l1-parcialmente", type: "vocab", front: "parcialmente", reading: "parcialmente", meaning: "partially", example: { jp: "O trabalho está parcialmente feito, mas a parte difícil fica para o ano seguinte.", en: "The work is partially done, but the hard part is left for the following year." }, drill: { jp: "O trabalho está parcialmente feito", en: "The work is partially done" }, accept: ["partially", "in part", "partly", "to some extent"], hint: "par-syal-MEN-te, from a parte (u43). Careful with its cousin: parcial also means biased, so uma decisão parcial is a partial ruling in the WRONG sense — u97's imparcial is the fix." },
        { id: "pt-u91l1-escasso", type: "vocab", front: "escasso", reading: "escasso", meaning: "scarce", example: { jp: "O tempo é escasso, mas a escola quer fazer tudo antes do fim do mês.", en: "Time is scarce, but the school wants to do everything before the end of the month." }, drill: { jp: "O tempo da escola é escasso", en: "The school's time is scarce" }, accept: ["scarce", "in short supply", "scant", "meagre", "thin on the ground"], hint: "esh-KA-ssu. Not merely little, but less than is needed — which is why it goes with water, time and money and not with height. Escassos dez minutos means a bare ten minutes." },
        { id: "pt-u91l1-avultado", type: "vocab", front: "avultado", reading: "avultado", meaning: "substantial (of a sum)", example: { jp: "O valor é avultado para um banco pequeno, mas o chefe diz que não é problema.", en: "The sum is substantial for a small bank, but the boss says it is no problem." }, drill: { jp: "O valor do banco é avultado", en: "The bank's sum is substantial" }, accept: ["substantial", "sizeable", "hefty", "considerable", "large (of a sum)"], hint: "a-vul-TA-du, from o vulto, a bulk. Almost always of MONEY: um valor avultado, uma dívida avultada. Grande would work and say nothing; avultado says the number is big enough to matter." },
      ],
    },
    {
      id: "pt-u91l2",
      unit: 91,
      lesson: 2,
      title: "Subir e descer o tom",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Turn a claim up or down in Portuguese — soften it, sharpen it, or call it excessive.",
      items: [
        { id: "pt-u91l2-atenuar", type: "vocab", front: "atenuar", reading: "atenuar", meaning: "to soften (tone down)", example: { jp: "A empresa quer atenuar o problema no jornal, mas o número já é público.", en: "The company wants to tone the problem down in the press, but the figure is already public." }, drill: { jp: "A empresa quer atenuar o problema", en: "The company wants to tone down the problem" }, accept: ["to soften", "soften", "to tone down", "tone down", "to lessen", "to mitigate"], hint: "a-te-nu-AR. To make something less strong — a pain, a rule, a sentence, a claim. Circunstâncias atenuantes are mitigating circumstances, which is the word in its legal coat." },
        { id: "pt-u91l2-acentuar", type: "vocab", front: "acentuar", reading: "acentuar", meaning: "to heighten", example: { jp: "A falta de dinheiro vai acentuar o problema da escola, mas ninguém no governo quer falar disso.", en: "The lack of money will heighten the school's problem, but nobody in government wants to talk about it." }, drill: { jp: "A falta de dinheiro vai acentuar o problema", en: "The lack of money will heighten the problem" }, accept: ["to heighten", "heighten", "to sharpen", "to accentuate", "to make more marked"], hint: "a-sen-tu-AR — the same root as o acento. Two lives: to put an accent on a letter, and to make a difference or a problem more pronounced. Acentuar-se is what a trend does when it gets stronger." },
        { id: "pt-u91l2-moderado", type: "vocab", front: "moderado", reading: "moderado", meaning: "moderate", example: { jp: "O preço é moderado este ano, mas depois de três anos assim a conta já é grande.", en: "The price is moderate this year, but after three years like this the bill is already large." }, drill: { jp: "O preço deste ano é moderado", en: "This year's price is moderate" }, accept: ["moderate", "measured", "middling", "restrained"], hint: "mu-de-RA-du. Of quantities, of weather, of opinions — and in politics it is a label people claim for themselves. Um moderado is a person; um aumento moderado is a number." },
        { id: "pt-u91l2-extremo", type: "vocab", front: "extremo", reading: "extremo", meaning: "extreme", example: { jp: "O caso é extremo, mas a lei tem de servir para os casos normais também.", en: "The case is extreme, but the law has to work for ordinary cases too." }, drill: { jp: "O caso do tribunal é extremo", en: "The court's case is extreme" }, accept: ["extreme", "at the far end", "outermost", "drastic"], hint: "esh-TRE-mu. Adjective and noun at once: um caso extremo, and no extremo do país, at the far end. Em último extremo means as a last resort." },
        { id: "pt-u91l2-desmedido", type: "vocab", front: "desmedido", reading: "desmedido", meaning: "excessive", example: { jp: "O poder do chefe é desmedido, mas ninguém na empresa quer ser o primeiro a dizer.", en: "The boss's power is excessive, but nobody at the company wants to be first to say so." }, drill: { jp: "O poder do chefe é desmedido", en: "The boss's power is excessive" }, accept: ["excessive", "out of all proportion", "immoderate", "unrestrained", "beyond measure"], hint: "desh-me-DEE-du — literally un-measured, from medir. Stronger and more literary than demasiado: it says the thing has no natural limit, not merely that it is too much." },
        { id: "pt-u91l2-aintensidade", type: "vocab", front: "a intensidade", reading: "aintensidade", meaning: "intensity", example: { jp: "A intensidade da chuva foi grande, mas dura pouco e o campo fica igual.", en: "The rain's intensity was great, but it lasts a short time and the fields stay the same." }, drill: { jp: "A intensidade da chuva foi grande", en: "The rain's intensity was great" }, accept: ["the intensity", "intensity", "strength", "force", "how strong it is"], hint: "in-ten-si-DA-de. How strong, as against how long or how often — a distinction Portuguese weather reports and pain scales both live on. A força (u50) is power; a intensidade is its concentration." },
      ],
    },
    {
      id: "pt-u91l3",
      unit: 91,
      lesson: 3,
      title: "Fórmulas de grau",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Use the fixed Portuguese degree phrases — to a large extent, in a way, at most, at a push, somewhat, so to speak.",
      items: [
        { id: "pt-u91l3-emlargamedida", type: "vocab", front: "em larga medida", reading: "emlargamedida", meaning: "to a large extent", example: { jp: "O problema é em larga medida do governo, mas a empresa também não fez o trabalho.", en: "The problem is to a large extent the government's, but the company also failed to do the work." }, drill: { jp: "O problema é em larga medida do governo", en: "The problem is to a large extent the government's" }, accept: ["to a large extent", "largely", "in large part", "for the most part"], hint: "The written register's 'mostly'. Em grande medida is its equally common twin. It concedes that something else is also true, which is why it so often arrives just before a mas." },
        { id: "pt-u91l3-decertomodo", type: "vocab", front: "de certo modo", reading: "decertomodo", meaning: "in a way", example: { jp: "De certo modo o estudo tem razão, mas o número não chega para o provar.", en: "In a way the study is right, but the figure is not enough to prove it." }, drill: { jp: "De certo modo o estudo tem razão", en: "In a way the study is right" }, accept: ["in a way", "in a sense", "up to a point", "sort of", "in some respects"], hint: "The polite half-agreement. De certa forma is the same phrase in another suit. Note that certo here means 'a certain', not 'correct' — the sense it has in de certa idade, of a certain age." },
        { id: "pt-u91l3-quantomuito", type: "vocab", front: "quanto muito", reading: "quantomuito", meaning: "at most", example: { jp: "O trabalho leva quanto muito três horas, mas a empresa quer um dia todo.", en: "The job takes three hours at most, but the company wants a whole day." }, drill: { jp: "O trabalho leva quanto muito três horas", en: "The job takes three hours at most" }, accept: ["at most", "at the very most", "no more than", "at best"], hint: "Sets a ceiling and sounds slightly grudging, which is its job. No máximo is the neutral version; quanto muito carries the shrug. pt-BR prefers quando muito — pt-PT says quanto." },
        { id: "pt-u91l3-nolimite", type: "vocab", front: "no limite", reading: "nolimite", meaning: "at a push", example: { jp: "No limite a casa serve para quatro pessoas, mas ninguém vai ficar bem.", en: "At a push the house will do for four people, but nobody is going to be comfortable." }, drill: { jp: "No limite a casa serve para quatro pessoas", en: "At a push the house will do for four people" }, accept: ["at a push", "at the outside", "if it comes to it", "in the extreme case"], hint: "Built on o limite (u53). It grants a possibility while warning you it is the edge of one. Estar no limite, of a person, is a different thing entirely: to be at the end of your rope." },
        { id: "pt-u91l3-umtanto", type: "vocab", front: "um tanto", reading: "umtanto", meaning: "somewhat", example: { jp: "A resposta do chefe foi um tanto dura, mas ele tinha razão no que disse.", en: "The boss's answer was somewhat harsh, but he was right in what he said." }, drill: { jp: "A resposta do chefe foi um tanto dura", en: "The boss's answer was somewhat harsh" }, accept: ["somewhat", "rather", "a bit", "a touch", "slightly"], hint: "The understatement particle. Um tanto or um tanto ou quanto, both before an adjective. It usually signals criticism the speaker is choosing not to press — the Portuguese equivalent of 'a touch'." },
        { id: "pt-u91l3-porassimdizer", type: "vocab", front: "por assim dizer", reading: "porassimdizer", meaning: "so to speak", example: { jp: "A empresa é, por assim dizer, uma família, mas ninguém paga a conta de um filho.", en: "The company is, so to speak, a family, but nobody pays a child's bills." }, drill: { jp: "A empresa é por assim dizer uma família", en: "The company is so to speak a family" }, accept: ["so to speak", "as it were", "in a manner of speaking", "if you like"], hint: "Flags the word you just used as a metaphor you do not want held against you. It sits between commas in writing. Digamos assim is the conversational version." },
      ],
    },
    {
      id: "pt-u91l4",
      unit: 91,
      lesson: 4,
      title: "Onde a diferença conta",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Mark how big a difference is in Portuguese — the shade nobody notices, the marginal one, and the one that is impossible to miss.",
      items: [
        { id: "pt-u91l4-omatiz", type: "vocab", front: "o matiz", reading: "omatiz", meaning: "shade of meaning", example: { jp: "O matiz entre os dois nomes é pequeno, mas num tribunal muda todo o caso.", en: "The shade of meaning between the two names is small, but in a court it changes the whole case." }, drill: { jp: "O matiz entre os nomes é pequeno", en: "The shade of meaning between the names is small" }, accept: ["the shade of meaning", "shade", "nuance", "the nuance", "fine distinction"], hint: "ma-TEEZ — originally a shade of colour, and the colour sense is still live. Of language it is the difference two near-synonyms actually carry: alegar and afirmar (u88) differ by a matiz, not by a definition." },
        { id: "pt-u91l4-marginal", type: "vocab", front: "marginal", reading: "marginal", meaning: "marginal", example: { jp: "O lucro é marginal, mas a empresa quer levar uma boa conta ao banco.", en: "The profit is marginal, but the company wants to take a good set of figures to the bank." }, drill: { jp: "O lucro da empresa é marginal", en: "The company's profit is marginal" }, accept: ["marginal", "negligible", "barely significant", "slight", "at the edge"], hint: "mar-ji-NAL, from a margem. Small enough to sit at the edge of what counts. Careful with the human sense in Portuguese: um marginal is a criminal, so the word is never a neutral description of a person." },
        { id: "pt-u91l4-tenue", type: "vocab", front: "ténue", reading: "tenue", meaning: "faint", example: { jp: "A diferença entre os dois planos é ténue, mas o preço de um é o dobro do outro.", en: "The difference between the two plans is faint, but the price of one is double the other." }, drill: { jp: "A diferença entre os planos é ténue", en: "The difference between the plans is faint" }, accept: ["faint", "tenuous", "slender", "barely there", "thin"], hint: "TE-nwe, two syllables, and pt-PT writes the acute — ténue; Brazil writes tênue. Of light, of a line, of a hope, of a difference. Uma ligação ténue is a connection you would not want to argue from." },
        { id: "pt-u91l4-gritante", type: "vocab", front: "gritante", reading: "gritante", meaning: "glaring", example: { jp: "A diferença entre os dois países é gritante, mas o estudo fala em números pequenos.", en: "The difference between the two countries is glaring, but the study talks in small numbers." }, drill: { jp: "A diferença entre os países é gritante", en: "The difference between the countries is glaring" }, accept: ["glaring", "blatant", "stark", "screaming", "impossible to miss"], hint: "gri-TAN-te, from gritar — literally shouting. The exact opposite of ténue, and the pair is worth learning together. Uma injustiça gritante is the collocation Portuguese reaches for most." },
        { id: "pt-u91l4-nemporisso", type: "vocab", front: "nem por isso", reading: "nemporisso", meaning: "not particularly", example: { jp: "O filme é bom? Nem por isso, mas a música vale a pena.", en: "Is the film good? Not particularly, but the music is worth it." }, drill: { jp: "Nem por isso o filme é bom", en: "The film is not particularly good" }, accept: ["not particularly", "not really", "not especially", "not that much"], hint: "The standard Portuguese soft no. It answers a question rather than starting a sentence, and it declines without arguing — which is why it is everywhere in conversation and almost absent from writing." },
        { id: "pt-u91l4-grossomodo", type: "vocab", front: "grosso modo", reading: "grossomodo", meaning: "roughly speaking", example: { jp: "Grosso modo, o plano funciona, mas o número do primeiro ano não chega.", en: "Roughly speaking, the plan works, but the first year's figure falls short." }, drill: { jp: "Grosso modo o plano do governo funciona", en: "Roughly speaking the government's plan works" }, accept: ["roughly speaking", "broadly", "in broad terms", "by and large"], hint: "Latin, and kept as Latin — two words, no a in front. A very common written error in Portugal is à grosso modo, which is wrong for exactly that reason. It warns that what follows is an approximation." },
      ],
    },
  ],
};
