// PT Unit 5 — Os números e as horas ("Numbers and time") — A1
// Counting, the clock, and the three days a beginner actually needs. The teens
// are carried in a hint rather than on cards, because catorze / dezasseis /
// dezassete / dezanove are exactly where pt-PT and pt-BR diverge and the contrast
// teaches better in one place than spread over six cards.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT5 = {
  id: "pt-u5",
  lang: "pt",
  title: "Os números e as horas",
  order: 5,
  stage: "a1",
  lessons: [
    {
      id: "pt-u5l1",
      unit: 5,
      lesson: 1,
      title: "De um a sete",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count to seven, say how many of something there are, and give someone's age in years.",
      items: [
        { id: "pt-u5l1-dois", type: "vocab", front: "dois", reading: "dois", meaning: "two", example: { jp: "Dois livros e um carro.", en: "Two books and a car." }, drill: { jp: "Dois livros e um carro", en: "Two books and a car" }, accept: ["2", "a couple"], hint: "The only number besides one that changes gender: dois livros but DUAS casas. Get in the habit early — duas is not optional." },
        { id: "pt-u5l1-tres", type: "vocab", front: "três", reading: "tres", meaning: "three", example: { jp: "Três anos em Portugal.", en: "Three years in Portugal." }, drill: { jp: "Três anos em Portugal", en: "Three years in Portugal" }, accept: ["3"], hint: "The circumflex closes the vowel and the final s shushes: TRESH. Same for all the numbers ending in -s." },
        { id: "pt-u5l1-quatro", type: "vocab", front: "quatro", reading: "quatro", meaning: "four", example: { jp: "Quatro maçãs, por favor.", en: "Four apples, please." }, drill: { jp: "Quatro maçãs por favor", en: "Four apples please" }, accept: ["4"], hint: "KWA-tru — here the qu really is said \"kw\", unlike in que and quem where the u goes silent." },
        { id: "pt-u5l1-cinco", type: "vocab", front: "cinco", reading: "cinco", meaning: "five", example: { jp: "Cinco minutos, por favor.", en: "Five minutes, please." }, drill: { jp: "Cinco minutos por favor", en: "Five minutes please" }, accept: ["5"], hint: "SEEN-ku. c before i is soft, c before o is hard — both jobs of the letter c in one short word." },
        { id: "pt-u5l1-seis", type: "vocab", front: "seis", reading: "seis", meaning: "six", example: { jp: "O meu filho tem seis anos.", en: "My son is six years old." }, drill: { jp: "O meu filho tem seis anos", en: "My son is six years old" }, accept: ["6"], hint: "SAYSH. On the phone Portuguese speakers often say meia instead of seis, short for meia dúzia — half a dozen — to avoid confusing it with três." },
        { id: "pt-u5l1-sete", type: "vocab", front: "sete", reading: "sete", meaning: "seven", example: { jp: "Sete dias em Lisboa.", en: "Seven days in Lisbon." }, drill: { jp: "Sete dias em Lisboa", en: "Seven days in Lisbon" }, accept: ["7"], hint: "SEH-te, open e. Do not let it drift toward Spanish siete — Portuguese has no i in this word." },
      ],
    },
    {
      id: "pt-u5l2",
      unit: 5,
      lesson: 2,
      title: "Até cem",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count past ten, give a price in euros, and say how old an adult is.",
      items: [
        { id: "pt-u5l2-oito", type: "vocab", front: "oito", reading: "oito", meaning: "eight", example: { jp: "Oito euros, por favor.", en: "Eight euros, please." }, drill: { jp: "Oito euros por favor", en: "Eight euros please" }, accept: ["8"], hint: "OY-tu. The oi is one gliding sound, as in coisa from Unit 1." },
        { id: "pt-u5l2-nove", type: "vocab", front: "nove", reading: "nove", meaning: "nine", example: { jp: "São nove horas.", en: "It's nine o'clock." }, drill: { jp: "São nove horas em Lisboa", en: "It is nine o'clock in Lisbon" }, accept: ["9"], hint: "NO-ve with an open o. It is the root of novembro and of nono (ninth)." },
        { id: "pt-u5l2-dez", type: "vocab", front: "dez", reading: "dez", meaning: "ten", example: { jp: "Dez anos em Coimbra.", en: "Ten years in Coimbra." }, drill: { jp: "Dez anos em Coimbra", en: "Ten years in Coimbra" }, accept: ["10"], hint: "DEHSH. The teens build on it, and this is where Portugal and Brazil part company: Portugal writes catorze, dezasseis, dezassete, dezanove — Brazil writes quatorze, dezesseis, dezessete, dezenove. The rest match: onze, doze, treze, quinze, dezoito." },
        { id: "pt-u5l2-vinte", type: "vocab", front: "vinte", reading: "vinte", meaning: "twenty", example: { jp: "Tenho vinte anos.", en: "I'm twenty years old." }, drill: { jp: "Tenho vinte anos", en: "I am twenty years old" }, accept: ["20"], hint: "VEEN-te. From here the tens are regular and you just add e: vinte e um, vinte e dois. That little e is written and said." },
        { id: "pt-u5l2-cinquenta", type: "vocab", front: "cinquenta", reading: "cinquenta", meaning: "fifty", example: { jp: "Cinquenta euros! É muito caro.", en: "Fifty euros! That's very expensive." }, drill: { jp: "Cinquenta euros é muito caro", en: "Fifty euros is very expensive" }, accept: ["50"], hint: "The tens follow a pattern you can guess once you have this one: trinta, quarenta, cinquenta, sessenta, setenta, oitenta, noventa." },
        { id: "pt-u5l2-cem", type: "vocab", front: "cem", reading: "cem", meaning: "one hundred", example: { jp: "O preço é cem euros.", en: "The price is a hundred euros." }, drill: { jp: "O preço é cem euros", en: "The price is a hundred euros" }, accept: ["100", "hundred", "a hundred"], hint: "Nasal: SAING. Exactly one hundred is cem; anything above it switches to cento — cento e um, cento e vinte. Two different words for the same number." },
      ],
    },
    {
      id: "pt-u5l3",
      unit: 5,
      lesson: 3,
      title: "Que horas são?",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Ask what time it is, tell someone the hour, and say midday, midnight and right now.",
      items: [
        { id: "pt-u5l3-ahora", type: "vocab", front: "a hora", reading: "ahora", meaning: "hour", example: { jp: "É a hora de estudar.", en: "It's time to study." }, drill: { jp: "É a hora de estudar", en: "It is time to study" }, accept: ["the hour", "time", "o'clock"], hint: "Silent h, so it sounds exactly like ora: O-ra. It covers both a sixty-minute hour and \"the time\" for doing something." },
        { id: "pt-u5l3-quehorassao", type: "vocab", front: "que horas são", reading: "quehorassao", meaning: "what time is it", example: { jp: "Desculpe, que horas são?", en: "Excuse me, what time is it?" }, drill: { jp: "Desculpe que horas são", en: "Excuse me what time is it" }, accept: ["what time is it?", "what's the time", "whats the time"], hint: "Literally \"what hours are they?\" — plural, because Portuguese counts the hours. The answer matches: São três horas, but É uma hora for one o'clock only." },
        { id: "pt-u5l3-meiodia", type: "vocab", front: "meio-dia", reading: "meiodia", meaning: "midday", example: { jp: "É meio-dia e o pai não está em casa.", en: "It's midday and dad isn't at home." }, drill: { jp: "É meio-dia em Lisboa", en: "It is midday in Lisbon" }, accept: ["noon", "12pm", "midday"], hint: "meio is \"half\", so this is literally \"half-day\". Portugal writes the hyphen. Lunch is usually well after it — one o'clock at the earliest." },
        { id: "pt-u5l3-meianoite", type: "vocab", front: "a meia-noite", reading: "ameianoite", meaning: "midnight", example: { jp: "A meia-noite é tranquila.", en: "Midnight is tranquil." }, drill: { jp: "A meia-noite é tranquila", en: "Midnight is tranquil" }, accept: ["midnight", "12am"], hint: "meia is the feminine of meio, because a noite is feminine — the halving word has to agree with what it halves." },
        { id: "pt-u5l3-ominuto", type: "vocab", front: "o minuto", reading: "ominuto", meaning: "minute", example: { jp: "Cinco minutos e estou em casa.", en: "Five minutes and I'm at home." }, drill: { jp: "O minuto e a hora", en: "The minute and the hour" }, accept: ["the minute", "min"], hint: "Um minuto! on its own is \"just a second!\" — Portugal says it constantly. The clock runs on the same words as English: a hora, o minuto, o segundo." },
        { id: "pt-u5l3-agora", type: "vocab", front: "agora", reading: "agora", meaning: "now", example: { jp: "Agora não, obrigado.", en: "Not now, thank you." }, drill: { jp: "Agora não obrigado", en: "Not now thank you" }, accept: ["right now", "at the moment", "currently"], hint: "Hiding inside it is a hora — \"at this hour\". agora mesmo means right this second." },
      ],
    },
    {
      id: "pt-u5l4",
      unit: 5,
      lesson: 4,
      title: "Hoje, ontem e amanhã",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Place something in time without a calendar — today, yesterday, tomorrow, this week — and say whether you always or never do it.",
      items: [
        { id: "pt-u5l4-hoje", type: "vocab", front: "hoje", reading: "hoje", meaning: "today", example: { jp: "Hoje é o aniversário de Ana.", en: "Today is Ana's birthday." }, drill: { jp: "Hoje é o aniversário de Ana", en: "Today is Ana's birthday" }, accept: ["this day", "nowadays"], hint: "OH-zhe. Silent h again, and that j is the soft zh of \"measure\" — never the English j of \"jam\". hoje em dia means \"these days\"." },
        { id: "pt-u5l4-amanha", type: "vocab", front: "amanhã", reading: "amanha", meaning: "tomorrow", example: { jp: "Hoje não, amanhã.", en: "Not today, tomorrow." }, drill: { jp: "Hoje não amanhã", en: "Not today tomorrow" }, accept: ["the next day"], hint: "Look closely: a manhã is \"the morning\" (Unit 1), amanhã written solid is \"tomorrow\". One space apart, and the stress moves to the end." },
        { id: "pt-u5l4-ontem", type: "vocab", front: "ontem", reading: "ontem", meaning: "yesterday", example: { jp: "Ontem, hoje e amanhã.", en: "Yesterday, today and tomorrow." }, drill: { jp: "Ontem hoje e amanhã", en: "Yesterday today and tomorrow" }, accept: ["the day before"], hint: "ON-taing, nasal at both ends. anteontem, stuck together, is the day before yesterday." },
        { id: "pt-u5l4-asemana", type: "vocab", front: "a semana", reading: "asemana", meaning: "week", example: { jp: "A semana em Lisboa é fantástica.", en: "The week in Lisbon is fantastic." }, drill: { jp: "A semana em Lisboa é fantástica", en: "The week in Lisbon is fantastic" }, accept: ["the week"], hint: "se-MA-na. o fim de semana is the weekend — literally the end of the week — and Portugal says it as three words." },
        { id: "pt-u5l4-sempre", type: "vocab", front: "sempre", reading: "sempre", meaning: "always", example: { jp: "Ana está sempre em casa.", en: "Ana is always at home." }, drill: { jp: "Ana está sempre em casa", en: "Ana is always at home" }, accept: ["ever", "all the time"], hint: "SAING-pre, nasal first syllable. It normally sits after the verb, not before it: é sempre, está sempre." },
        { id: "pt-u5l4-nunca", type: "vocab", front: "nunca", reading: "nunca", meaning: "never", example: { jp: "Nunca é tarde.", en: "It's never too late." }, drill: { jp: "Nunca é tarde", en: "It is never too late" }, accept: ["not ever", "never ever"], hint: "The opposite of sempre and it sits in the same slot. Portuguese happily doubles its negatives: Nunca não is wrong, but Não é nunca tarde is fine." },
      ],
    },
  ],
};
