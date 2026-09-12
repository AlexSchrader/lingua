// PT Unit 28 — O tempo e a frequência — A2
// Portuguese A2, block 1 (units 21-30). Conventions, the pt-PT corpus decision and
// the Spanish-trap policy are in the header of unit1.js and bind this file too.
// Every vocab item carries a `drill` authored inline beside its `example`
// (RUNBOOK §4): 3-8 tokens, no punctuation, the item's own front inside it as a
// whole word. Verified against cardRouting.js canCloze/canSentence, not the lint.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT28 = {
  id: "pt-u28",
  lang: "pt",
  title: "O tempo e a frequência",
  order: 28,
  stage: "a2",
  lessons: [
    {
      id: "pt-u28l1",
      unit: 28,
      lesson: 1,
      title: "Antes e depois",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Put two events in order and say whether something has happened yet or is still going on.",
      items: [
        { id: "pt-u28l1-antes", type: "vocab", front: "antes", reading: "antes", meaning: "before", example: { jp: "Antes de sair de casa verifico sempre se levo as chaves.", en: "Before leaving home I always check whether I have the keys." }, drill: { jp: "Antes de sair de casa", en: "Before leaving home" }, accept: ["beforehand", "previously", "earlier"], hint: "AN-tesh, nasal then the sh. Antes DE plus an infinitive is the everyday frame. On its own it means earlier or first." },
        { id: "pt-u28l1-depois", type: "vocab", front: "depois", reading: "depois", meaning: "after", example: { jp: "Primeiro tomo um duche e depois tomo o pequeno-almoço.", en: "First I take a shower and afterwards I have breakfast." }, drill: { jp: "Primeiro o duche e depois o café", en: "First the shower and then the coffee" }, accept: ["afterwards", "then", "later", "after that"], hint: "de-POYSH. Depois DE plus an infinitive, mirroring antes de. On its own it is afterwards, and depois de amanhã is the day after tomorrow." },
        { id: "pt-u28l1-ainda", type: "vocab", front: "ainda", reading: "ainda", meaning: "still", example: { jp: "Ainda não acabei o relatório e o prazo é amanhã.", en: "I still haven't finished the report and the deadline is tomorrow." }, drill: { jp: "Ainda não acabei o relatório", en: "I still haven't finished the report" }, accept: ["yet", "even", "still now"], hint: "a-EEN-da, nasal. Ainda não is not yet and is one of the most useful pairs in the language. Ainda bem que means it's just as well that." },
        { id: "pt-u28l1-ja", type: "vocab", front: "já", reading: "ja", meaning: "already", example: { jp: "Já comi, obrigado, mas aceito um café.", en: "I've already eaten, thank you, but I'll take a coffee." }, drill: { jp: "Já comi o pequeno-almoço", en: "I have already had breakfast" }, accept: ["yet", "now", "by now"], hint: "ZHA, the zh of measure. Statement já is already; question já is yet — já comeste? have you eaten yet? Já não means not any more." },
        { id: "pt-u28l1-logo", type: "vocab", front: "logo", reading: "logo", meaning: "soon", example: { jp: "Vou ao mercado logo à tarde, depois de acabar isto.", en: "I'm going to the market later this afternoon, after finishing this." }, drill: { jp: "Vou ao mercado logo à tarde", en: "I am going to the market later" }, accept: ["shortly", "later", "right away", "in a while"], hint: "LO-gu. Até logo from Unit 2 is built on it. Careful — it means shortly or later today, NOT the English logo, and Brazil often uses it for immediately." },
        { id: "pt-u28l1-entretanto", type: "vocab", front: "entretanto", reading: "entretanto", meaning: "meanwhile", example: { jp: "O comboio está atrasado, entretanto podemos tomar um café.", en: "The train is late, meanwhile we can have a coffee." }, drill: { jp: "Entretanto tomamos um café", en: "Meanwhile we have a coffee" }, accept: ["in the meantime", "meantime", "however"], hint: "en-tre-TAN-tu. Two nasals. It fills the gap between two events, and in writing it can also swing toward however, which context settles." },
      ],
    },
    {
      id: "pt-u28l2",
      unit: 28,
      lesson: 2,
      title: "Com que frequência",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say how often you do something, from every day to almost never.",
      items: [
        { id: "pt-u28l2-asvezes", type: "vocab", front: "às vezes", reading: "asvezes", meaning: "sometimes", example: { jp: "Às vezes vou de bicicleta, mas quando chove apanho o autocarro.", en: "Sometimes I go by bike, but when it rains I catch the bus." }, drill: { jp: "Às vezes vou de bicicleta", en: "Sometimes I go by bike" }, accept: ["at times", "occasionally", "now and then"], hint: "The às you met in Unit 12 plus vezes, times. Uma vez is once, duas vezes twice — the whole family is built on that one noun." },
        { id: "pt-u28l2-muitasvezes", type: "vocab", front: "muitas vezes", reading: "muitasvezes", meaning: "often", example: { jp: "Vou muitas vezes à padaria porque fica ao lado de casa.", en: "I often go to the bakery because it is next door." }, drill: { jp: "Vou muitas vezes à padaria", en: "I often go to the bakery" }, accept: ["many times", "frequently", "a lot"], hint: "Literally many times. Portuguese builds frequency out of vezes rather than a single adverb, so muitas vezes does the work of often." },
        { id: "pt-u28l2-raramente", type: "vocab", front: "raramente", reading: "raramente", meaning: "rarely", example: { jp: "Raramente vejo televisão porque chego tarde do trabalho.", en: "I rarely watch television because I get home late from work." }, drill: { jp: "Raramente vou ao cinema", en: "I rarely go to the cinema" }, accept: ["seldom", "hardly ever", "not often"], hint: "ra-ra-MEN-te. The -mente ending is Portuguese's -ly and it attaches to the FEMININE adjective: rara plus mente. That rule holds across the language." },
        { id: "pt-u28l2-normalmente", type: "vocab", front: "normalmente", reading: "normalmente", meaning: "usually", example: { jp: "Normalmente levanto-me às sete, mas ao domingo durmo mais.", en: "I usually get up at seven, but on Sunday I sleep longer." }, drill: { jp: "Normalmente levanto-me às sete", en: "I usually get up at seven" }, accept: ["normally", "generally", "as a rule"], hint: "nor-mal-MEN-te, the same -mente ending. Note normal ends in -l so there is no feminine to change; the ending simply attaches." },
        { id: "pt-u28l2-outravez", type: "vocab", front: "outra vez", reading: "outravez", meaning: "again", example: { jp: "Li o contrato outra vez porque não percebi a primeira parte.", en: "I read the contract again because I didn't understand the first part." }, drill: { jp: "Estudei o livro outra vez", en: "I studied the book again" }, accept: ["once more", "one more time", "another time"], hint: "Literally another time. Portuguese has de novo too, but outra vez is what you will hear. Voltar a from Unit 21 does the same job with a verb." },
        { id: "pt-u28l2-quase", type: "vocab", front: "quase", reading: "quase", meaning: "almost", example: { jp: "Quase todos os dias vou a pé, só apanho o metro quando chove.", en: "Almost every day I walk, I only take the metro when it rains." }, drill: { jp: "Quase todos os dias vou", en: "Almost every day I go" }, accept: ["nearly", "just about", "practically"], hint: "KWA-ze, s as z. Quase nunca is hardly ever and quase sempre almost always — it stacks in front of the words from this lesson." },
      ],
    },
    {
      id: "pt-u28l3",
      unit: 28,
      lesson: 3,
      title: "Cedo ou tarde",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about points and stretches of time — a moment, a decade, how long something lasts.",
      items: [
        { id: "pt-u28l3-cedo", type: "vocab", front: "cedo", reading: "cedo", meaning: "early", example: { jp: "Levanto-me cedo durante a semana e tarde ao fim de semana.", en: "I get up early during the week and late at the weekend." }, drill: { jp: "Levanto-me cedo durante a semana", en: "I get up early during the week" }, accept: ["soon", "early on", "ahead of time"], hint: "SE-du. Its opposite is tarde, which you met inside boa tarde in Unit 2. Mais cedo ou mais tarde is sooner or later." },
        { id: "pt-u28l3-omomento", type: "vocab", front: "o momento", reading: "omomento", meaning: "moment", example: { jp: "Naquele momento percebi que tinha esquecido o passaporte.", en: "At that moment I realised I had forgotten the passport." }, drill: { jp: "O momento foi muito difícil", en: "The moment was very hard" }, accept: ["the moment", "instant", "minute"], hint: "mo-MEN-tu, nasal. Um momento! is the everyday hold on a second. De momento means for the time being." },
        { id: "pt-u28l3-oseculo", type: "vocab", front: "o século", reading: "oseculo", meaning: "century", example: { jp: "A igreja é do século doze e é a mais antiga da cidade.", en: "The church is from the twelfth century and is the oldest in the city." }, drill: { jp: "O século foi muito importante", en: "The century was very important" }, accept: ["the century", "100 years"], hint: "SE-ku-lu, stressed on the first syllable. Portuguese writes centuries in Roman numerals — século XII — and reads them as ordinary numbers." },
        { id: "pt-u28l3-adecada", type: "vocab", front: "a década", reading: "adecada", meaning: "decade", example: { jp: "A década passada mudou muito a cidade e os preços subiram.", en: "The past decade changed the city a lot and prices rose." }, drill: { jp: "A década passada mudou a cidade", en: "The past decade changed the city" }, accept: ["the decade", "ten years"], hint: "DE-ka-da, stressed on the first syllable again — the accent tells you. Nos anos oitenta is how Portugal more often says in the eighties." },
        { id: "pt-u28l3-durar", type: "vocab", front: "durar", reading: "durar", meaning: "to last", example: { jp: "O filme durou três horas e eu adormeci no meio.", en: "The film lasted three hours and I fell asleep in the middle." }, drill: { jp: "O filme vai durar três horas", en: "The film is going to last three hours" }, accept: ["last", "to go on for", "go on for", "take"], hint: "du-RAR. It describes the length of something. a duração is the noun, which is what a cinema listing prints." },
        { id: "pt-u28l3-demorar", type: "vocab", front: "demorar", reading: "demorar", meaning: "to take time", example: { jp: "O comboio demorou mais de uma hora por causa da chuva.", en: "The train took over an hour because of the rain." }, drill: { jp: "O comboio vai demorar uma hora", en: "The train is going to take an hour" }, accept: ["take time", "to take long", "take long", "be late", "delay"], hint: "de-mo-RAR. Very close to durar but with a note of taking TOO long. Não demoro is I won't be long, and it is what you say on the way out of the door." },
      ],
    },
    {
      id: "pt-u28l4",
      unit: 28,
      lesson: 4,
      title: "Como e quanto",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say how something is done and how much of it there is — slowly, quickly, enough, too much.",
      items: [
        { id: "pt-u28l4-devagar", type: "vocab", front: "devagar", reading: "devagar", meaning: "slowly", example: { jp: "Fala mais devagar, por favor, ainda não percebo bem português.", en: "Speak more slowly, please, I still don't understand Portuguese well." }, drill: { jp: "Fala mais devagar por favor", en: "Speak more slowly please" }, accept: ["slow", "at a slow pace", "gently"], hint: "de-va-GAR. It is already an adverb, so there is no -mente form — devagarmente does not exist. Devagar se vai ao longe is the proverb." },
        { id: "pt-u28l4-depressa", type: "vocab", front: "depressa", reading: "depressa", meaning: "quickly", example: { jp: "Comi depressa demais e depois fiquei com dor de barriga.", en: "I ate too quickly and afterwards I had a stomach ache." }, drill: { jp: "Comi muito depressa hoje", en: "I ate very quickly today" }, accept: ["fast", "quick", "in a hurry", "rapidly"], hint: "de-PRE-sa, double s so a hard s. Like devagar it is an adverb already. Depressa! on its own is hurry up." },
        { id: "pt-u28l4-bastante", type: "vocab", front: "bastante", reading: "bastante", meaning: "quite", example: { jp: "O exame foi bastante difícil mas consegui uma boa nota.", en: "The exam was quite hard but I got a good mark." }, drill: { jp: "O exame foi bastante difícil", en: "The exam was quite hard" }, accept: ["enough", "fairly", "rather", "a fair amount"], hint: "bash-TAN-te, nasal. It swings between enough and quite depending on where it sits — bastante bom is quite good, comi bastante is I ate enough." },
        { id: "pt-u28l4-demasiado", type: "vocab", front: "demasiado", reading: "demasiado", meaning: "too much", example: { jp: "O café estava demasiado quente e queimei a boca.", en: "The coffee was too hot and I burned my mouth." }, drill: { jp: "O café estava demasiado quente", en: "The coffee was too hot" }, accept: ["too", "excessively", "too many"], hint: "de-ma-zi-A-du. PORTUGAL SAYS DEMASIADO where Brazil says demais more often. It agrees when it describes a noun: demasiadas pessoas." },
        { id: "pt-u28l4-talvez", type: "vocab", front: "talvez", reading: "talvez", meaning: "perhaps", example: { jp: "Talvez vá ao cinema logo à noite, ainda não decidi.", en: "Perhaps I'll go to the cinema later tonight, I haven't decided yet." }, drill: { jp: "Talvez sim talvez não", en: "Maybe yes maybe no" }, accept: ["maybe", "possibly", "might"], hint: "tal-VESH. Built from tal plus vez, such a time. In careful Portuguese it pulls the subjunctive after it, which is why the verb here is vá and not vou." },
        { id: "pt-u28l4-apenas", type: "vocab", front: "apenas", reading: "apenas", meaning: "only", example: { jp: "Apenas dois alunos chegaram a horas por causa da trovoada.", en: "Only two students arrived on time because of the thunderstorm." }, drill: { jp: "Apenas dois alunos chegaram cedo", en: "Only two students arrived early" }, accept: ["just", "merely", "barely"], hint: "a-PE-nash. It is a shade more formal than só, which means the same thing and is far commoner in speech. Both are worth recognising." },
      ],
    },
  ],
};
