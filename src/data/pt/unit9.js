// PT Unit 9 — Os dias e os meses ("Days and months") — A1
// The calendar. Portuguese numbers its weekdays instead of naming them after
// gods — segunda-feira through sexta-feira — which is unlike every other
// language in this app and is the whole point of Lesson 1. Sábado and domingo
// keep their names, and that asymmetry is worth noticing.
// `quando` sits in Lesson 2 rather than in a grammar unit: it is the question a
// calendar exists to answer, and block 1 taught `onde` the same way, inside the
// unit about places.
// NOT CARDED HERE, deliberately: the teens (onze…dezanove) and the tens above
// fifty, which u5 carries inside the `dez` and `cinquenta` hints. Dates compose
// from what is already taught — vinte e cinco de abril — so spending six cards
// on numbers would have cost half the months. `trinta` and `quarenta` are a real
// gap; they are flagged to block 3, whose coverage units are the right home.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT9 = {
  id: "pt-u9",
  lang: "pt",
  title: "Os dias e os meses",
  order: 9,
  stage: "a1",
  lessons: [
    // Lesson 1: the numbered weekdays. Every hint carries the same fact from a
    // different angle, because a learner who has not understood WHY Monday is
    // "the second" will never remember which number goes where.
    {
      id: "pt-u9l1",
      unit: 9,
      lesson: 1,
      title: "Os dias da semana",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what day it is, and understand Portugal's numbered weekdays instead of guessing at them.",
      items: [
        { id: "pt-u9l1-odia", type: "vocab", front: "o dia", reading: "odia", meaning: "day", example: { jp: "Hoje é um dia importante.", en: "Today is an important day." }, accept: ["the day", "daytime"], hint: "DEE-a. It ends in -a but is MASCULINE — o dia, um bom dia — one of the handful of Greek-derived words that break the rule, along with o problema and o mapa. You have been saying it since bom dia in Unit 2." },
        { id: "pt-u9l1-segundafeira", type: "vocab", front: "segunda-feira", reading: "segundafeira", meaning: "Monday", example: { jp: "Hoje é segunda-feira.", en: "Today is Monday." }, accept: ["mon", "on monday"], hint: "Literally \"second fair\". Portuguese counts the week from domingo, so Monday is the SECOND day, not the first. In speech the -feira usually drops: na segunda, até segunda. Days are lowercase in Portuguese." },
        { id: "pt-u9l1-tercafeira", type: "vocab", front: "terça-feira", reading: "tercafeira", meaning: "Tuesday", example: { jp: "Amanhã é terça-feira.", en: "Tomorrow is Tuesday." }, accept: ["tue", "tues", "on tuesday"], hint: "TER-sa, cedilla. The third day — and note it is terça, not terceira: the weekday keeps an older, shorter form of the ordinal that survives nowhere else." },
        { id: "pt-u9l1-quartafeira", type: "vocab", front: "quarta-feira", reading: "quartafeira", meaning: "Wednesday", example: { jp: "Quarta-feira é um dia de trabalho.", en: "Wednesday is a working day." }, accept: ["wed", "weds", "on wednesday"], hint: "From quatro, Unit 5 — the fourth day. KWAR-ta, with the kw sound quatro also has. Halfway through the working week, which in Portugal runs segunda to sexta." },
        { id: "pt-u9l1-quintafeira", type: "vocab", front: "quinta-feira", reading: "quintafeira", meaning: "Thursday", example: { jp: "Quinta-feira é o dia de mercado em Braga.", en: "Thursday is market day in Braga." }, accept: ["thu", "thurs", "on thursday"], hint: "The fifth day, from cinco. Careful with the other quinta: uma quinta is a farm or country estate, which is why Portuguese wine labels start with the word — Quinta do Noval, Quinta da Rosa." },
        { id: "pt-u9l1-sextafeira", type: "vocab", front: "sexta-feira", reading: "sextafeira", meaning: "Friday", example: { jp: "Em Portugal, sexta-feira é um dia de trabalho.", en: "In Portugal, Friday is a working day." }, accept: ["fri", "on friday"], hint: "The sixth day, from seis — and said SESH-ta, not \"sex-ta\". Sexta-feira Santa is Good Friday. After it the numbering simply stops: the last two days have real names." },
      ],
    },
    // Lesson 2: where the numbering stops. Then the month, the night, and the
    // question word the whole unit is an answer to.
    {
      id: "pt-u9l2",
      unit: 9,
      lesson: 2,
      title: "O fim de semana",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Talk about the weekend and the month, and ask when something is happening.",
      items: [
        { id: "pt-u9l2-sabado", type: "vocab", front: "sábado", reading: "sabado", meaning: "Saturday", example: { jp: "Sábado não é um dia de trabalho.", en: "Saturday isn't a working day." }, accept: ["sat", "on saturday"], hint: "SA-ba-du. The counting stops here — sábado comes from the Sabbath, not from sete. No -feira, and no number." },
        { id: "pt-u9l2-domingo", type: "vocab", front: "domingo", reading: "domingo", meaning: "Sunday", example: { jp: "Domingo é um dia de família.", en: "Sunday is a family day." }, accept: ["sun", "on sunday"], hint: "du-MEEN-gu, from the Latin for \"the Lord's day\" — and it is day ONE, which is why Monday ended up second. Shops open, but the long Sunday lunch is still real in Portugal." },
        { id: "pt-u9l2-ofimdesemana", type: "vocab", front: "o fim de semana", reading: "ofimdesemana", meaning: "weekend", example: { jp: "O fim de semana em Lisboa é fantástico.", en: "The weekend in Lisbon is fantastic." }, accept: ["the weekend"], hint: "Literally \"end of week\", built on a semana from Unit 5. Portugal writes it as three loose words; Brazil hyphenates it, fim-de-semana. O fim on its own is the end of anything." },
        { id: "pt-u9l2-omes", type: "vocab", front: "o mês", reading: "omes", meaning: "month", example: { jp: "Um mês tem quatro semanas.", en: "A month has four weeks." }, accept: ["the month"], hint: "MESH — circumflex, closed e, and the final s shushes like três. Plural os meses, where the e opens right up again: MEH-zesh. Nothing to do with a mesa, a table." },
        { id: "pt-u9l2-anoite", type: "vocab", front: "a noite", reading: "anoite", meaning: "night", example: { jp: "A noite de sábado é fantástica em Lisboa.", en: "Saturday night is fantastic in Lisbon." }, accept: ["the night", "evening", "nighttime"], hint: "NOY-te. It covers evening AND night — Portuguese has no separate word, which is why boa noite from Unit 2 does the work of both \"good evening\" and \"good night\". Its daytime partner is a tarde, the afternoon inside boa tarde." },
        { id: "pt-u9l2-quando", type: "vocab", front: "quando", reading: "quando", meaning: "when", example: { jp: "Quando é o teu aniversário?", en: "When is your birthday?" }, accept: ["when?", "whenever", "at what time"], hint: "KWAN-du, nasal. The partner of onde from Unit 7 — onde asks where, quando asks when. Also works as a plain link: quando faz sol, a praça é cheia." },
      ],
    },
    // Lesson 3: the first half of the year. Months are lowercase, and they take
    // em rather than an article: em maio, never "no maio".
    {
      id: "pt-u9l3",
      unit: 9,
      lesson: 3,
      title: "De janeiro a junho",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the first six months of the year and say what month something happens in.",
      items: [
        { id: "pt-u9l3-janeiro", type: "vocab", front: "janeiro", reading: "janeiro", meaning: "January", example: { jp: "Em janeiro faz muito frio.", en: "In January it's very cold." }, accept: ["jan", "in january"], hint: "zha-NAY-ru — the j is the \"zh\" of \"measure\", never the English j. Months are lowercase in Portuguese, and they take em: em janeiro, not \"no janeiro\"." },
        { id: "pt-u9l3-fevereiro", type: "vocab", front: "fevereiro", reading: "fevereiro", meaning: "February", example: { jp: "Fevereiro tem vinte e oito dias.", en: "February has twenty-eight days." }, accept: ["feb", "in february"], hint: "fe-ve-RAY-ru. Portuguese keeps both r's, unlike the English word most people mispronounce. Carnaval falls here, and in Portugal it is a serious excuse for a long weekend." },
        { id: "pt-u9l3-marco", type: "vocab", front: "março", reading: "marco", meaning: "March", example: { jp: "Em março é primavera.", en: "In March it's spring." }, accept: ["mar", "in march"], hint: "MAR-su, cedilla — the same soft s the maçã of Unit 1 has. Note the spelling trap: um marco without the cedilla is a milestone or a landmark, a completely different word." },
        { id: "pt-u9l3-abril", type: "vocab", front: "abril", reading: "abril", meaning: "April", example: { jp: "O vinte e cinco de abril é um dia importante em Portugal.", en: "The twenty-fifth of April is an important day in Portugal." }, accept: ["apr", "in april"], hint: "a-BREEL. The date in the example is the Carnation Revolution of 1974 — say \"o 25 de Abril\" to anyone in Portugal and they know exactly what you mean. Dates are built number-de-month: dois de maio." },
        { id: "pt-u9l3-maio", type: "vocab", front: "maio", reading: "maio", meaning: "May", example: { jp: "Em maio faz sol em Lisboa.", en: "In May it's sunny in Lisbon." }, accept: ["in may"], hint: "MY-u, two syllables. The shortest month name, and the only one an English speaker will read correctly by accident. Do not confuse it with mais, \"more\", from Unit 1." },
        { id: "pt-u9l3-junho", type: "vocab", front: "junho", reading: "junho", meaning: "June", example: { jp: "Junho é o mês de Santo António em Lisboa.", en: "June is the month of Saint Anthony in Lisbon." }, accept: ["jun", "in june"], hint: "ZHOO-nyu — zh again, then the nh of manhã. The whole month is os Santos Populares: sardines, paper decorations, and Lisbon awake all night on the twelfth." },
      ],
    },
    // Lesson 4: the second half. julho/junho are a minimal pair a beginner mixes
    // up for months, so they sit either side of the lesson boundary on purpose.
    {
      id: "pt-u9l4",
      unit: 9,
      lesson: 4,
      title: "De julho a dezembro",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Name the rest of the months, and give a date in Portuguese from beginning to end.",
      items: [
        { id: "pt-u9l4-julho", type: "vocab", front: "julho", reading: "julho", meaning: "July", example: { jp: "Em julho faz muito calor.", en: "In July it's very hot." }, accept: ["jul", "in july"], hint: "ZHOO-lyu — lh, where junho has nh. Those two letters are the ONLY difference between June and July in Portuguese, so say them apart deliberately: ZHOO-nyu, ZHOO-lyu." },
        { id: "pt-u9l4-agosto", type: "vocab", front: "agosto", reading: "agosto", meaning: "August", example: { jp: "Agosto é um mês de calor.", en: "August is a month of heat." }, accept: ["aug", "in august"], hint: "a-GOSH-tu. The month Portugal closes: much of Lisbon empties, small shops hang up encerrado para férias, and the whole country appears to be at the beach at once." },
        { id: "pt-u9l4-setembro", type: "vocab", front: "setembro", reading: "setembro", meaning: "September", example: { jp: "Em setembro é outono.", en: "In September it's autumn." }, accept: ["sep", "sept", "in september"], hint: "se-TEM-bru. From sete — it was the seventh month before the Romans moved the new year, which is also why outubro, novembro and dezembro are all two out of step." },
        { id: "pt-u9l4-outubro", type: "vocab", front: "outubro", reading: "outubro", meaning: "October", example: { jp: "Outubro não é um mês quente.", en: "October isn't a hot month." }, accept: ["oct", "in october"], hint: "oh-TOO-bru — the same ou-as-plain-o as outono. From oito, the eighth. This is when the rain comes back to the north." },
        { id: "pt-u9l4-novembro", type: "vocab", front: "novembro", reading: "novembro", meaning: "November", example: { jp: "Novembro é um mês de chuva.", en: "November is a month of rain." }, accept: ["nov", "in november"], hint: "nu-VEM-bru, from nove. Nothing to do with novo, \"new\" — the resemblance is a coincidence of the same Latin root for \"nine\" and \"new\"." },
        { id: "pt-u9l4-dezembro", type: "vocab", front: "dezembro", reading: "dezembro", meaning: "December", example: { jp: "Vinte e cinco de dezembro é Natal.", en: "The twenty-fifth of December is Christmas." }, accept: ["dec", "in december"], hint: "de-ZEM-bru, from dez. The full date pattern, one last time: number + de + month, no article on the month — vinte e cinco de dezembro. Boas Festas is what you wish people." },
      ],
    },
  ],
};
