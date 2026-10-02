// PT Unit 91 — A gradação e a ressalva (slot: nuance-degree) — B2
//
// SAYING EXACTLY HOW MUCH. The slot title in the scaffold was the English
// placeholder "Nuance and degree"; retitled per CLAUDE.md "No front language".
//
// u53 (B1) taught comparison and degree — mais, menos, aproximadamente,
// ligeiramente, elevado, abaixo de. That lets the learner compare two things.
// What it does not let them do is CALIBRATE a statement: put a figure in a
// range, carve out the exception, add weight, or take weight off. B2 prose is
// full of exactly this — a Portuguese report almost never states a bare number
// without a word from this unit attached to it.
//
// SLOT BOUNDARIES:
//   aproximadamente and ligeiramente are SPENT at u53, de facto at u54, em
//   parte at u73, apenas at u28, destacar at u74. Used in examples, not
//   re-carded — this unit takes grosso modo, sensivelmente, em certa medida and
//   realçar in their place, which are the register-marked equivalents.
//   u54 A dúvida owns HEDGING a claim's truth; this unit owns its QUANTITY.
//   u88 (mine) owns concession as an argumentative move — contudo, ainda assim;
//   l2 here is the narrower business of carving out named exceptions.
//
// A NOTE FOR BLOCKS 2 AND 3: four of these six adverbs in l3-l4 end in -mente
// and the lint will not care, but the learner will. Do not build another
// lesson that is six -mente adverbs in a row; interleave them with the phrases
// (quando muito, em certa medida, à exceção de) as l2 and l4 do here.
//
// Conventions: see unit1.js header (language) and unit88.js (B2 band).
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT91 = {
  id: "pt-u91",
  lang: "pt",
  title: "A gradação e a ressalva",
  order: 91,
  stage: "b2",
  lessons: [
    {
      id: "pt-u91l1",
      unit: 91,
      lesson: 1,
      title: "A aproximação",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Give an approximate figure in Portuguese — broadly, roughly, practically, somewhere around.",
      items: [
        { id: "pt-u91l1-grossomodo", type: "vocab", front: "grosso modo", reading: "grossomodo", meaning: "broadly speaking", example: { jp: "Grosso modo, metade da turma passou no exame logo à primeira.", en: "Broadly speaking, half the class passed the exam first time." }, drill: { jp: "Grosso modo o resultado foi bom", en: "Broadly speaking the result was good" }, accept: ["broadly speaking", "roughly speaking", "by and large", "in broad terms"], hint: "GRO-su MO-du. A Latin phrase Portuguese kept whole, used exactly as English uses 'broadly speaking'. It never changes shape — never grossa modo." },
        { id: "pt-u91l1-sensivelmente", type: "vocab", front: "sensivelmente", reading: "sensivelmente", meaning: "roughly", example: { jp: "O trabalho demorou sensivelmente o mesmo tempo que o anterior.", en: "The work took roughly the same time as the previous one." }, drill: { jp: "O preço é sensivelmente igual ao antigo", en: "The price is roughly the same as the old one" }, accept: ["roughly", "approximately", "about", "more or less", "give or take"], hint: "sen-si-vel-MEN-te. A false friend worth pinning down: it does NOT mean 'sensibly'. It means approximately — sensivelmente igual, roughly the same." },
        { id: "pt-u91l1-praticamente", type: "vocab", front: "praticamente", reading: "praticamente", meaning: "practically", example: { jp: "O trabalho está praticamente pronto, falta só rever o fim.", en: "The work is practically finished, only the ending needs reviewing." }, drill: { jp: "O trabalho está praticamente pronto", en: "The work is practically finished" }, accept: ["practically", "virtually", "almost", "as good as", "near enough"], hint: "pra-ti-ka-MEN-te. Not quite, but close enough to treat as done. Quase is the neutral 'almost'; this one implies it already counts." },
        { id: "pt-u91l1-rondar", type: "vocab", front: "rondar", reading: "rondar", meaning: "to be around (a figure)", example: { jp: "O preço das casas naquela zona ronda os mil euros por metro.", en: "The price of houses in that area is around a thousand euros a metre." }, drill: { jp: "O preço deve rondar mil euros", en: "The price must be around a thousand euros" }, accept: ["to be around", "to hover around", "to be in the region of", "to come to about"], hint: "rron-DAR. Used with numbers: o valor ronda os cem euros. Its older sense is to prowl or patrol — a figure that ronda is circling the real one without landing on it." },
        { id: "pt-u91l1-escasso", type: "vocab", front: "escasso", reading: "escasso", meaning: "scarce", example: { jp: "O tempo era escasso e ninguém conseguiu acabar o exame.", en: "Time was scarce and nobody managed to finish the exam." }, drill: { jp: "O tempo é escasso este mês", en: "Time is scarce this month" }, accept: ["scarce", "in short supply", "scant", "meagre", "barely enough"], hint: "esh-KA-su. Too little of something — tempo escasso, recursos escassos. Put in front of a number it means barely: um escasso minuto is a bare minute." },
        { id: "pt-u91l1-umtanto", type: "vocab", front: "um tanto", reading: "umtanto", meaning: "somewhat", example: { jp: "A resposta pareceu-me um tanto estranha, mas não disse nada.", en: "The answer struck me as somewhat odd, but I said nothing." }, drill: { jp: "A resposta foi um tanto estranha", en: "The answer was somewhat odd" }, accept: ["somewhat", "rather", "a bit", "a little", "kind of"], hint: "oong TAN-tu. Softens an adjective the way English 'somewhat' does. You will also hear um tanto ou quanto, which means the same with more hesitation in it." },
      ],
    },
    {
      id: "pt-u91l2",
      unit: 91,
      lesson: 2,
      title: "A ressalva",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Carve out an exception in Portuguese — except for, namely, above all, at most.",
      items: [
        { id: "pt-u91l2-salvo", type: "vocab", front: "salvo", reading: "salvo", meaning: "except for", example: { jp: "Todos os serviços abrem amanhã de manhã, salvo os do tribunal.", en: "All the services open tomorrow morning, except for the court's." }, drill: { jp: "Abrimos todos os dias salvo domingo", en: "We open every day except Sunday" }, accept: ["except for", "except", "save for", "barring", "other than"], hint: "SAL-vu. The formal 'except' — salvo indicação em contrário, unless otherwise stated, is on half the forms in Portugal. It is also the adjective safe: são e salvo." },
        { id: "pt-u91l2-aexcecaode", type: "vocab", front: "à exceção de", reading: "aexcecaode", meaning: "with the exception of", example: { jp: "À exceção de um caso, o método funcionou em todas as escolas.", en: "With the exception of one case, the method worked in every school." }, drill: { jp: "Vieram todos à exceção de dois", en: "They all came with the exception of two" }, accept: ["with the exception of", "except for", "apart from", "other than", "excepting"], hint: "a ei-se-SOWN de. The written form of salvo, and the one to use in a report. Com exceção de is equally correct; Portugal writes both." },
        { id: "pt-u91l2-nomeadamente", type: "vocab", front: "nomeadamente", reading: "nomeadamente", meaning: "namely", example: { jp: "Faltam alguns documentos, nomeadamente o contrato e a carta final.", en: "Some documents are missing, namely the contract and the final letter." }, drill: { jp: "Faltam documentos nomeadamente o contrato", en: "Documents are missing, namely the contract" }, accept: ["namely", "that is to say", "to be precise", "specifically"], hint: "nu-me-a-da-MEN-te. Introduces the specific items behind a general statement you just made — the workhorse of Portuguese official prose." },
        { id: "pt-u91l2-designadamente", type: "vocab", front: "designadamente", reading: "designadamente", meaning: "particularly", example: { jp: "A lei protege os mais novos, designadamente quem ainda anda na escola.", en: "The law protects the young, particularly those still at school." }, drill: { jp: "A lei protege alguns designadamente os mais novos", en: "The law protects some, particularly the young" }, accept: ["particularly", "especially", "in particular", "namely", "specifically"], hint: "de-zig-na-da-MEN-te. A near-twin of nomeadamente and just as common in legal Portuguese. Learn one and recognise the other — they alternate purely to avoid repetition." },
        { id: "pt-u91l2-sobretudo", type: "vocab", front: "sobretudo", reading: "sobretudo", meaning: "above all", example: { jp: "O plano é caro, sobretudo por causa dos custos do primeiro ano.", en: "The plan is expensive, above all because of the first year's costs." }, drill: { jp: "O plano é caro sobretudo no início", en: "The plan is expensive, above all at the start" }, accept: ["above all", "especially", "most of all", "chiefly", "particularly"], hint: "so-bre-TU-du. The commonest of these in speech as well as writing. Written solid, it is also the word for an overcoat — um sobretudo, literally 'over-everything'." },
        { id: "pt-u91l2-quandomuito", type: "vocab", front: "quando muito", reading: "quandomuito", meaning: "at most", example: { jp: "O trabalho leva uma hora, quando muito, se ninguém interromper.", en: "The work takes an hour at most, if nobody interrupts." }, drill: { jp: "Leva uma hora quando muito", en: "It takes an hour at most" }, accept: ["at most", "at the very most", "if that", "at best"], hint: "KWAN-du MOOY-tu. Caps a figure you have just given — 'an hour, at most'. Its opposite is quando menos, and English 'if that' catches the tone exactly." },
      ],
    },
    {
      id: "pt-u91l3",
      unit: 91,
      lesson: 3,
      title: "Reforçar",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Put weight on a point in Portuguese — reinforce it, sharpen it, and confirm that it is indeed so.",
      items: [
        { id: "pt-u91l3-reforcar", type: "vocab", front: "reforçar", reading: "reforcar", meaning: "to reinforce", example: { jp: "O diretor reforçou que o prazo não ia mudar mais uma vez.", en: "The director reinforced that the deadline was not going to change again." }, drill: { jp: "Quero reforçar a importância do prazo", en: "I want to reinforce the importance of the deadline" }, accept: ["to reinforce", "reinforce", "to strengthen", "to restate firmly", "to shore up"], hint: "rre-for-SAR, built on a força. To make something stronger — a wall, a team, or a point already made. In the news, reforçar que is 'to stress once again that'." },
        { id: "pt-u91l3-acentuar", type: "vocab", front: "acentuar", reading: "acentuar", meaning: "to accentuate", example: { jp: "A falta de médicos acentuou os problemas do hospital durante o inverno.", en: "The shortage of doctors accentuated the hospital's problems over the winter." }, drill: { jp: "A crise veio acentuar o problema", en: "The crisis accentuated the problem" }, accept: ["to accentuate", "accentuate", "to sharpen", "to heighten", "to make more marked"], hint: "a-sen-TWAR, from o acento. To make a difference or a problem more pronounced. Acentuar-se, reflexive, is what a trend does as it gets stronger." },
        { id: "pt-u91l3-realcar", type: "vocab", front: "realçar", reading: "realcar", meaning: "to bring out", example: { jp: "A luz da manhã realça as cores antigas da parede.", en: "The morning light brings out the old colours in the wall." }, drill: { jp: "A luz vai realçar as cores", en: "The light will bring out the colours" }, accept: ["to bring out", "to highlight", "to set off", "to show off", "to emphasise"], hint: "rri-al-SAR — literally to raise up. To make something stand out and be noticed: a colour, a feature, a point in a text. A Portuguese recipe will tell you salt realça o sabor." },
        { id: "pt-u91l3-efetivamente", type: "vocab", front: "efetivamente", reading: "efetivamente", meaning: "indeed", example: { jp: "O comboio chegou efetivamente à hora prevista, para surpresa de todos.", en: "The train did indeed arrive on time, to everyone's surprise." }, drill: { jp: "O comboio chegou efetivamente a horas", en: "The train indeed arrived on time" }, accept: ["indeed", "in fact", "actually", "sure enough", "as it turned out"], hint: "e-fe-ti-va-MEN-te. Confirms that something expected really did happen — 'and indeed it did'. Since 1990 both Portugal and Brazil write it without the old c." },
        { id: "pt-u91l3-precisamente", type: "vocab", front: "precisamente", reading: "precisamente", meaning: "precisely", example: { jp: "Foi precisamente por essa razão que o plano acabou por falhar.", en: "It was precisely for that reason that the plan ended up failing." }, drill: { jp: "Foi precisamente isso que aconteceu", en: "That is precisely what happened" }, accept: ["precisely", "exactly", "just so", "quite so"], hint: "pre-si-za-MEN-te. Pins a word down: precisamente por isso. Said alone as an answer it means 'exactly so' — a very Portuguese way of agreeing hard." },
        { id: "pt-u91l3-marcadamente", type: "vocab", front: "marcadamente", reading: "marcadamente", meaning: "markedly", example: { jp: "O sul do país é marcadamente mais seco do que o norte.", en: "The south of the country is markedly drier than the north." }, drill: { jp: "O clima é marcadamente mais seco", en: "The climate is markedly drier" }, accept: ["markedly", "noticeably", "distinctly", "strikingly"], hint: "mar-ka-da-MEN-te. A difference big enough to see without measuring it. Built on marcado, marked — the same image English reaches for." },
      ],
    },
    {
      id: "pt-u91l4",
      unit: 91,
      lesson: 4,
      title: "Atenuar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Take weight off a point in Portuguese — soften it, limit it, or say it hardly applies at all.",
      items: [
        { id: "pt-u91l4-atenuar", type: "vocab", front: "atenuar", reading: "atenuar", meaning: "to soften (to mitigate)", example: { jp: "O apoio do Estado atenuou o efeito da subida dos preços.", en: "State support softened the effect of the rise in prices." }, drill: { jp: "O apoio veio atenuar o problema", en: "The support softened the problem" }, accept: ["to soften", "to mitigate", "to lessen", "to cushion", "to take the edge off"], hint: "a-te-NWAR. To make something less severe without removing it — a pain, a blow, a rule. In law, circunstâncias atenuantes are mitigating circumstances." },
        { id: "pt-u91l4-emcertamedida", type: "vocab", front: "em certa medida", reading: "emcertamedida", meaning: "to some extent", example: { jp: "Em certa medida, o problema resolveu-se sozinho com o passar do tempo.", en: "To some extent, the problem sorted itself out as time passed." }, drill: { jp: "Em certa medida o problema resolveu-se sozinho", en: "To some extent the problem sorted itself out" }, accept: ["to some extent", "to a degree", "up to a point", "in a way"], hint: "eng SER-ta me-DEE-da. Concedes that something is true, but only so far. Até certo ponto is the equally common twin, and either can open a sentence." },
        { id: "pt-u91l4-relativamente", type: "vocab", front: "relativamente", reading: "relativamente", meaning: "relatively", example: { jp: "O exame foi relativamente fácil para quem tinha estudado.", en: "The exam was relatively easy for anyone who had studied." }, drill: { jp: "O exame foi relativamente fácil", en: "The exam was relatively easy" }, accept: ["relatively", "comparatively", "fairly", "reasonably"], hint: "rre-la-ti-va-MEN-te. Fairly, measured against something else. Careful — relativamente a is a different job entirely: it means 'with regard to'." },
        { id: "pt-u91l4-minimamente", type: "vocab", front: "minimamente", reading: "minimamente", meaning: "in the slightest", example: { jp: "Ninguém ficou minimamente surpreendido quando a notícia saiu.", en: "Nobody was in the slightest surprised when the news came out." }, drill: { jp: "Ninguém ficou minimamente surpreendido", en: "Nobody was surprised in the slightest" }, accept: ["in the slightest", "in the least", "remotely", "even slightly"], hint: "mi-ni-ma-MEN-te. Almost always inside a negative — não está minimamente preocupado, not the least bit worried. Alone in the positive it means 'at a minimum'." },
        { id: "pt-u91l4-moderado", type: "vocab", front: "moderado", reading: "moderado", meaning: "moderate", example: { jp: "O aumento deste ano foi moderado e quase ninguém reclamou.", en: "This year's rise was moderate and almost nobody complained." }, drill: { jp: "O aumento deste ano foi moderado", en: "This year's rise was moderate" }, accept: ["moderate", "modest", "middling", "restrained"], hint: "mu-de-RA-du. In the middle, neither strong nor weak — of a rise, a wind or an opinion. The Portuguese forecast says vento moderado almost daily." },
        { id: "pt-u91l4-parcialmente", type: "vocab", front: "parcialmente", reading: "parcialmente", meaning: "partially", example: { jp: "A estrada está parcialmente cortada até ao fim do mês.", en: "The road is partially closed until the end of the month." }, drill: { jp: "A estrada está parcialmente cortada", en: "The road is partially closed" }, accept: ["partially", "partly", "in part", "half"], hint: "par-si-al-MEN-te. Only some of it — parcialmente nublado, partly cloudy. Its relative a parcialidade (Unit 89) is the bias that comes of seeing only one side." },
      ],
    },
  ],
};
