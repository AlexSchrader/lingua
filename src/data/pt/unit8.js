// PT Unit 8 — As cores e o tempo ("Colours and the weather") — A1
// The colours, then the weather — one unit because Portuguese joins them at the
// sky and because both are adjective practice before u14 makes agreement a rule.
// Three of the colour cards are pt-PT/pt-BR splits with no overlap at all —
// castanho/marrom, cinzento/cinza, cor-de-rosa/rosa — and one is a Spanish trap
// this corpus had not yet caught: roxo is PURPLE, where Spanish rojo is red.
// `o tempo` carries both meanings Portuguese gives it, weather and time.
// Weather in Portugal takes fazer — faz sol, faz frio, faz calor — so examples
// here use `faz`, a form of the fazer taught in u3; the scope check reads it as
// morphology of a taught headword, which is what it is.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT8 = {
  id: "pt-u8",
  lang: "pt",
  title: "As cores e o tempo",
  order: 8,
  stage: "a1",
  lessons: [
    // Lesson 1: the six colours a beginner cannot do without. Each headword is
    // the masculine; the feminine and the plural live in the hint, the same way
    // u1 carried `uma` inside `um` rather than spending a card on it.
    {
      id: "pt-u8l1",
      unit: 8,
      lesson: 1,
      title: "As cores",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the colour of something in Portuguese, and start noticing that the colour word changes its ending to match the thing it describes.",
      items: [
        { id: "pt-u8l1-acor", type: "vocab", front: "a cor", reading: "acor", meaning: "colour", example: { jp: "O verde é a cor de Portugal.", en: "Green is the colour of Portugal." }, accept: ["color", "the colour", "the color", "shade"], hint: "KOR, and it is feminine — a cor, as cores. Watch the plural: -or becomes -ores, never just -ors. Saber de cor means to know something by heart, the way English says \"by heart\" and not \"by colour\"." },
        { id: "pt-u8l1-verde", type: "vocab", front: "verde", reading: "verde", meaning: "green", example: { jp: "A salada é verde.", en: "The salad is green." }, accept: ["the green"], hint: "VER-de. One of the colours that does NOT change for gender — um livro verde, uma casa verde — because it already ends in -e. Plural verdes." },
        { id: "pt-u8l1-vermelho", type: "vocab", front: "vermelho", reading: "vermelho", meaning: "red", example: { jp: "O carro vermelho é muito rápido.", en: "The red car is very rapid." }, accept: ["the red", "scarlet"], hint: "ver-ME-lyu — the lh from Unit 1. Feminine vermelha. Two Portuguese habits to learn with it: red wine is vinho TINTO, never vinho vermelho; and for football shirts and flags Portugal often says encarnado instead." },
        { id: "pt-u8l1-azul", type: "vocab", front: "azul", reading: "azul", meaning: "blue", example: { jp: "O livro azul é caro.", en: "The blue book is expensive." }, accept: ["the blue"], hint: "a-ZOOL. Same for masculine and feminine, but the plural is irregular and worth memorising now: azuis, not azuls. Every Portuguese -l word does this — hospital/hospitais." },
        { id: "pt-u8l1-branco", type: "vocab", front: "branco", reading: "branco", meaning: "white", example: { jp: "O vinho branco é delicioso.", en: "The white wine is delicious." }, accept: ["the white", "blank"], hint: "BRAN-ku, nasal first syllable. Feminine branca. It also means blank — uma folha em branco is a blank sheet, and votar em branco is to cast a blank vote." },
        { id: "pt-u8l1-preto", type: "vocab", front: "preto", reading: "preto", meaning: "black", example: { jp: "O gato preto é de Ana.", en: "The black cat is Ana's." }, accept: ["the black"], hint: "PRE-tu, closed e. Feminine preta. This is the everyday colour word for objects; for coffee Portugal says um café, or uma bica in Lisbon, and never \"café preto\"." },
      ],
    },
    // Lesson 2: the colours where Portugal and Brazil share no word at all, plus
    // the Spanish trap. roxo/rojo is the exact mirror of the u1 rato/rato pair —
    // same shape, different colour — and it is the one a Spanish speaker gets
    // wrong every single time.
    {
      id: "pt-u8l2",
      unit: 8,
      lesson: 2,
      title: "Mais cores",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Use the colour words Portugal uses — which for brown, grey and pink are not the Brazilian ones — and avoid the roxo/rojo trap Spanish sets.",
      items: [
        { id: "pt-u8l2-amarelo", type: "vocab", front: "amarelo", reading: "amarelo", meaning: "yellow", example: { jp: "O elétrico de Lisboa é amarelo.", en: "The Lisbon tram is yellow." }, accept: ["the yellow"], hint: "a-ma-RE-lu. Feminine amarela. The colour of Lisbon's trams and of the older postboxes — the current ones are vermelhos, and the blue CTT box next to them is for express post." },
        { id: "pt-u8l2-castanho", type: "vocab", front: "castanho", reading: "castanho", meaning: "brown", example: { jp: "O cão de Tiago é castanho.", en: "Tiago's dog is brown." }, accept: ["the brown", "chestnut", "hazel"], hint: "PORTUGAL SAYS CASTANHO. Brazil says marrom, which is not used here at all. kash-TA-nyu, with the nh from Unit 1 — it comes from a castanha, the chestnut. It is also the word for brown eyes and brown hair." },
        { id: "pt-u8l2-cinzento", type: "vocab", front: "cinzento", reading: "cinzento", meaning: "grey", example: { jp: "O carro cinzento não é caro.", en: "The grey car isn't expensive." }, accept: ["gray", "the grey", "the gray"], hint: "PORTUGAL SAYS CINZENTO. Brazil says cinza — which in Portugal is the ash itself, not the colour. seen-ZEN-tu; feminine cinzenta." },
        { id: "pt-u8l2-corderosa", type: "vocab", front: "cor-de-rosa", reading: "corderosa", meaning: "pink", example: { jp: "A casa cor-de-rosa é famosa em Lisboa.", en: "The pink house is famous in Lisbon." }, accept: ["the pink", "rose"], hint: "Literally \"colour of rose\", and Portugal keeps all three hyphens where Brazil just says rosa. It never changes — uma casa cor-de-rosa, dois livros cor-de-rosa — because you cannot pluralise a whole phrase." },
        { id: "pt-u8l2-roxo", type: "vocab", front: "roxo", reading: "roxo", meaning: "purple", example: { jp: "O bolo de Ana é roxo!", en: "Ana's cake is purple!" }, accept: ["the purple", "violet"], hint: "FALSE FRIEND, and the worst one in this unit. Spanish rojo is RED; Portuguese roxo is PURPLE. Red is vermelho, two cards back. RRO-shu — strong initial r, like o rato in Unit 1. Feminine roxa." },
        { id: "pt-u8l2-escuro", type: "vocab", front: "escuro", reading: "escuro", meaning: "dark", example: { jp: "O café é muito escuro.", en: "The coffee is very dark." }, accept: ["darkness", "gloomy"], hint: "esh-KOO-ru — that s shushing before a consonant again. Its opposite is claro, which you already met in Unit 2 meaning \"of course\": claro is light, clear AND obvious, all in one word." },
      ],
    },
    // Lesson 3: the weather. Portuguese asks it with fazer, not with ser — and
    // the answer usually starts with faz or está, never with é.
    {
      id: "pt-u8l3",
      unit: 8,
      lesson: 3,
      title: "Que tempo faz?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask what the weather is like and answer — sun, rain, wind or cold — using the verb Portuguese actually uses for weather.",
      items: [
        { id: "pt-u8l3-otempo", type: "vocab", front: "o tempo", reading: "otempo", meaning: "weather", example: { jp: "O tempo em Lisboa é fantástico.", en: "The weather in Lisbon is fantastic." }, accept: ["the weather", "time", "the time"], hint: "TEM-pu, nasal first syllable. ONE word for two English ones: o tempo is the weather AND time in general — não tenho tempo, I don't have time. A clock hour is a hora, from Unit 5, never o tempo." },
        { id: "pt-u8l3-quetempofaz", type: "vocab", front: "que tempo faz", reading: "quetempofaz", meaning: "what's the weather like", example: { jp: "Que tempo faz hoje em Braga?", en: "What's the weather like today in Braga?" }, accept: ["how is the weather", "what is the weather like", "hows the weather"], hint: "Learn it as one block. Literally \"what weather does it make\" — Portuguese hands the weather to fazer, the verb from Unit 3, where English uses \"to be\". The answer comes back the same way: faz sol, faz frio." },
        { id: "pt-u8l3-osol", type: "vocab", front: "o sol", reading: "osol", meaning: "sun", example: { jp: "Hoje faz sol.", en: "Today it's sunny." }, accept: ["the sun", "sunshine", "sunny"], hint: "SOL, short and open. Faz sol and está sol are both normal; \"é sol\" is not. Sunglasses are óculos de sol, and sunbathing is apanhar sol — literally catching sun." },
        { id: "pt-u8l3-achuva", type: "vocab", front: "a chuva", reading: "achuva", meaning: "rain", example: { jp: "A chuva não é um problema em Lisboa.", en: "The rain isn't a problem in Lisbon." }, accept: ["the rain", "rainfall"], hint: "SHOO-va — ch in Portuguese is always \"sh\", never the \"ch\" of English \"church\". The verb is chover: está a chover means it is raining, and that a is not a mistake — Unit 13 explains it." },
        { id: "pt-u8l3-ovento", type: "vocab", front: "o vento", reading: "ovento", meaning: "wind", example: { jp: "Hoje faz muito vento.", en: "Today it's very windy." }, accept: ["the wind", "windy"], hint: "VEN-tu, nasal. Portuguese counts wind rather than measuring it: faz muito vento, literally \"it makes a lot of wind\". The Atlantic coast north of Lisbon runs on it." },
        { id: "pt-u8l3-ofrio", type: "vocab", front: "o frio", reading: "ofrio", meaning: "cold", example: { jp: "Em Braga faz frio.", en: "In Braga it's cold." }, accept: ["the cold", "chilly", "coldness"], hint: "FREE-u. Both a noun and an adjective: faz frio (the weather is cold) but também a água está fria (this particular water is cold). Careful with people — you don't \"are\" cold in Portuguese, you HAVE it: tenho frio." },
      ],
    },
    // Lesson 4: heat, and the four seasons. as estações do ano reuses a estação
    // from u7, which is the same word for a railway station and a season — a
    // coincidence Portuguese shares with nothing else the learner knows.
    {
      id: "pt-u8l4",
      unit: 8,
      lesson: 4,
      title: "As estações do ano",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Name the four seasons and say what the weather does in each one, hot or cold.",
      items: [
        { id: "pt-u8l4-ocalor", type: "vocab", front: "o calor", reading: "ocalor", meaning: "heat", example: { jp: "O calor de Lisboa é enorme.", en: "The heat of Lisbon is enormous." }, accept: ["the heat", "warmth", "hot"], hint: "ka-LOR, stress at the end. Masculine, even though it ends in -or — Portuguese gender has to be learned word by word, which is why every noun on these cards carries its article. Tenho calor = I'm hot." },
        { id: "pt-u8l4-quente", type: "vocab", front: "quente", reading: "quente", meaning: "hot", example: { jp: "O café está quente.", en: "The coffee is hot." }, accept: ["warm", "heated"], hint: "KEN-te — the u after q is silent here, unlike quatro. Like verde it never changes for gender: um café quente, uma sopa quente. Its opposite is frio, the card before." },
        { id: "pt-u8l4-aprimavera", type: "vocab", front: "a primavera", reading: "aprimavera", meaning: "spring", example: { jp: "A primavera em Portugal é fantástica.", en: "Spring in Portugal is fantastic." }, accept: ["springtime", "the spring"], hint: "pri-ma-VE-ra. Seasons stay lowercase in Portuguese, always. The set is as estações do ano — the same estação you learned in Unit 7 for a railway station, doing a second job." },
        { id: "pt-u8l4-overao", type: "vocab", front: "o verão", reading: "overao", meaning: "summer", example: { jp: "O verão em Portugal é quente.", en: "Summer in Portugal is hot." }, accept: ["summertime", "the summer"], hint: "ve-RAWNG — the ão nasal from Unit 1. Plural os verões, with that õe spelling. Note it is NOT built on verde or on ver; the resemblance is an accident." },
        { id: "pt-u8l4-ooutono", type: "vocab", front: "o outono", reading: "ooutono", meaning: "autumn", example: { jp: "O outono não é frio em Lisboa.", en: "Autumn isn't cold in Lisbon." }, accept: ["fall", "the autumn", "the fall"], hint: "oh-TO-nu — the ou is said as a plain long o in Portugal. Two o's in a row on the card is just the article meeting the word: o + outono." },
        { id: "pt-u8l4-oinverno", type: "vocab", front: "o inverno", reading: "oinverno", meaning: "winter", example: { jp: "O inverno em Braga é muito frio.", en: "Winter in Braga is very cold." }, accept: ["wintertime", "the winter"], hint: "een-VER-nu. Portugal's winter is wet rather than freezing, and houses are famously badly heated — which is why the country talks about o frio indoors more than the thermometer would suggest." },
      ],
    },
  ],
};
