// PT Unit 35 — A cultura e o lazer ("Culture and leisure") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A1's u19 (os tempos livres e o desporto) already owns the ACTIVE half of
// leisure — a música, a televisão, o cinema, o filme, o desporto, o futebol, o
// jogo, a festa, cantar, dançar, jogar, tocar, ouvir, ver, correr, passear, sair.
// So this unit takes the half A1 never opened: the arts you go and look at, the
// books you read, and the words for having a hobby at all.
//
// `o adepto` is the pt-PT card of the unit — Brazil says o torcedor, and neither
// word travels. It sits in l4 next to o passatempo because supporting a club is
// what Portuguese leisure vocabulary is mostly used for.
//
// SPELLING: o espetáculo and a coleção are the POST-1990 forms. Portugal wrote
// espectáculo and colecção until the accord and older posters still do; the c is
// gone in both, exactly as it went from elétrico in u7.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT35 = {
  id: "pt-u35",
  lang: "pt",
  title: "A cultura e o lazer",
  order: 35,
  stage: "a2",
  lessons: [
    {
      id: "pt-u35l1",
      unit: 35,
      lesson: 1,
      title: "A arte",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about art and exhibitions — what is on, who made it, and whether it is worth going to.",
      items: [
        { id: "pt-u35l1-acultura", type: "vocab", front: "a cultura", reading: "acultura", meaning: "culture", example: { jp: "A cultura de Portugal é importante para os turistas, mas também para quem vive aqui.", en: "Portugal's culture is important for tourists, but also for those who live here." }, drill: { jp: "A cultura de Portugal é importante", en: "Portugal's culture is important" }, accept: ["the culture", "heritage"], hint: "kul-TU-ra. Same double sense as English — a country's culture, and being cultured: ele é uma pessoa culta. Note culto, the adjective, is not the same word as o culto, a religious service." },
        { id: "pt-u35l1-aarte", type: "vocab", front: "a arte", reading: "aarte", meaning: "art", example: { jp: "A arte moderna é muito difícil para quem apenas quer ver quadros bonitos.", en: "Modern art is very difficult for someone who only wants to see beautiful paintings." }, drill: { jp: "A arte moderna é muito difícil", en: "Modern art is very difficult" }, accept: ["the art", "skill", "craft"], hint: "AR-te. The two a's on the card are just the article meeting the word: a + arte. As belas-artes is fine art; ter jeito para uma arte is to have a knack for a craft, which is the older sense the word keeps." },
        { id: "pt-u35l1-oartista", type: "vocab", front: "o artista", reading: "oartista", meaning: "artist", example: { jp: "O artista pinta quadros na rua e os turistas param sempre para ver.", en: "The artist paints pictures in the street and the tourists always stop to look." }, drill: { jp: "O artista pinta quadros na rua", en: "The artist paints pictures in the street" }, accept: ["the artist", "performer"], hint: "ar-TEESH-ta. Another -ista noun, so one form for both genders — o artista, a artista, exactly like o cientista in Unit 34. It covers painters, musicians and performers alike." },
        { id: "pt-u35l1-oquadro", type: "vocab", front: "o quadro", reading: "oquadro", meaning: "painting", example: { jp: "O quadro do museu é famoso, mas é bastante mais pequeno do que parece.", en: "The museum's painting is famous, but it is considerably smaller than it seems." }, drill: { jp: "O quadro do museu é famoso", en: "The museum's painting is famous" }, accept: ["picture", "the painting", "board", "frame"], hint: "KWA-dru — the qu is a real \"kw\", as in quatro. Three jobs: a painting, a blackboard in a classroom, and a table of figures. From the Latin for a square, which is where quadrado comes from too — the shape all three senses share." },
        { id: "pt-u35l1-pintar", type: "vocab", front: "pintar", reading: "pintar", meaning: "to paint", example: { jp: "Pintar a casa é um trabalho difícil, especialmente quando faz calor.", en: "Painting the house is difficult work, especially when it is hot." }, drill: { jp: "Pintar a casa é um trabalho difícil", en: "Painting the house is difficult work" }, accept: ["paint", "to colour", "to dye"], hint: "peen-TAR, regular -ar. Same verb for a masterpiece and a wall — o pintor does both jobs and Portuguese does not distinguish. Pintar o cabelo is to dye your hair." },
        { id: "pt-u35l1-aexposicao", type: "vocab", front: "a exposição", reading: "aexposicao", meaning: "exhibition", example: { jp: "A exposição do museu acaba domingo, por isso é agora ou nunca.", en: "The museum exhibition ends on Sunday, so it is now or never." }, drill: { jp: "A exposição do museu acaba domingo", en: "The museum exhibition ends on Sunday" }, accept: ["the exhibition", "show", "display", "expo"], hint: "esh-pu-zi-SAWNG. Another -ção noun, feminine, plural as exposições. Lisbon's Parque das Nações is named after the 1998 world expo — a Expo 98 — which is still how people give directions there." },
      ],
    },
    {
      id: "pt-u35l2",
      unit: 35,
      lesson: 2,
      title: "O teatro e o espetáculo",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Go to a show — say what is on, where it is, when it starts and how it went down with the audience.",
      items: [
        { id: "pt-u35l2-oteatro", type: "vocab", front: "o teatro", reading: "oteatro", meaning: "theatre", example: { jp: "O teatro de Lisboa é bonito, mas os lugares mais baratos são muito maus.", en: "The Lisbon theatre is beautiful, but the cheapest seats are very bad." }, drill: { jp: "O teatro de Lisboa é bonito", en: "The Lisbon theatre is beautiful" }, accept: ["theater", "the theatre", "drama"], hint: "te-A-tru, three syllables, stress in the middle. Portugal's national one is o Teatro Nacional D. Maria II, on the Rossio — you will walk past it. Fazer teatro also means to make a scene." },
        { id: "pt-u35l2-apeca", type: "vocab", front: "a peça", reading: "apeca", meaning: "play", example: { jp: "A peça do teatro foi muito boa, mas demorou quase três horas.", en: "The play at the theatre was very good, but it lasted almost three hours." }, drill: { jp: "A peça do teatro foi muito boa", en: "The play at the theatre was very good" }, accept: ["the play", "piece", "part", "item"], hint: "PE-sa, cedilla. Wide word: a theatre play, a piece of music, a spare part for a car — uma peça do motor. Uma peça de roupa is an item of clothing, which is how shops count." },
        { id: "pt-u35l2-oespetaculo", type: "vocab", front: "o espetáculo", reading: "oespetaculo", meaning: "show", example: { jp: "O espetáculo começa às nove, mas é melhor chegar meia hora antes.", en: "The show starts at nine, but it is better to arrive half an hour early." }, drill: { jp: "O espetáculo começa às nove", en: "The show starts at nine" }, accept: ["the show", "performance", "spectacle"], hint: "esh-pe-TA-ku-lu. POST-1990 SPELLING — no c: espetáculo, where Portugal wrote espectáculo before the accord. Old theatre posters still show the c and are not wrong, just old, exactly like eléctrico in Unit 7." },
        { id: "pt-u35l2-opalco", type: "vocab", front: "o palco", reading: "opalco", meaning: "stage", example: { jp: "O palco do teatro é enorme e por isso os artistas parecem pequenos.", en: "The theatre stage is enormous and so the performers look small." }, drill: { jp: "O palco do teatro é enorme", en: "The theatre stage is enormous" }, accept: ["the stage", "platform"], hint: "PAL-ku. Only the physical stage — a phase or stage of something is uma fase or uma etapa, never o palco. Entrar em palco is to go on stage." },
        { id: "pt-u35l2-oconcerto", type: "vocab", front: "o concerto", reading: "oconcerto", meaning: "concert", example: { jp: "O concerto na praça foi fantástico e não custou dinheiro a quem quis ouvir.", en: "The concert in the square was fantastic and cost nothing to anyone who wanted to listen." }, drill: { jp: "O concerto na praça foi fantástico", en: "The concert in the square was fantastic" }, accept: ["the concert", "gig", "recital"], hint: "kon-SER-tu, soft c before e. Careful with a near-twin: o conserto, with an s, means a repair, from consertar. Same sound, different spelling, completely different evening." },
        { id: "pt-u35l2-opublico", type: "vocab", front: "o público", reading: "opublico", meaning: "audience", example: { jp: "O público do concerto foi enorme, e no fim a praça inteira cantava.", en: "The concert audience was enormous, and at the end the entire square was singing." }, drill: { jp: "O público do concerto foi enorme", en: "The concert audience was enormous" }, accept: ["the audience", "the public", "crowd", "spectators"], hint: "POO-bli-ku. Noun AND adjective: o público is the audience, and público means public — os serviços públicos, from Unit 32. Note it is also the name of one of Portugal's main newspapers, o Público." },
      ],
    },
    {
      id: "pt-u35l3",
      unit: 35,
      lesson: 3,
      title: "Os livros",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about what you are reading — the writer, the kind of book, the characters in it.",
      items: [
        { id: "pt-u35l3-oescritor", type: "vocab", front: "o escritor", reading: "oescritor", meaning: "writer", example: { jp: "O escritor português escreveu este romance quando ainda vivia em Coimbra.", en: "The Portuguese writer wrote this novel when he still lived in Coimbra." }, drill: { jp: "O escritor português escreveu este romance", en: "The Portuguese writer wrote this novel" }, accept: ["the writer", "author", "novelist"], hint: "esh-kri-TOR, from escrever in A1 u17. Feminine a escritora. Portugal's Nobel is José Saramago, whose novels famously use almost no punctuation — which makes them a bad place to start reading in Portuguese." },
        { id: "pt-u35l3-oromance", type: "vocab", front: "o romance", reading: "oromance", meaning: "novel", example: { jp: "O romance é muito comprido, mas leio um bocado antes de dormir.", en: "The novel is very long, but I read a bit before sleeping." }, drill: { jp: "O romance é muito comprido", en: "The novel is very long" }, accept: ["the novel", "romance", "love affair"], hint: "rru-MAN-se. A NOVEL of any kind, not just a love story — um romance policial is a crime novel. It does also mean a romance between people, so context decides; and the Romance languages are as línguas românicas, a different word." },
        { id: "pt-u35l3-oconto", type: "vocab", front: "o conto", reading: "oconto", meaning: "short story", example: { jp: "O conto do escritor é bonito e tem apenas oito páginas, por isso lê-se numa tarde.", en: "The writer's short story is beautiful and has only eight pages, so it can be read in an afternoon." }, drill: { jp: "O conto do escritor é bonito", en: "The writer's short story is beautiful" }, accept: ["the short story", "tale", "story"], hint: "KON-tu, from contar, to tell — which Unit 36 teaches as a verb. Um conto de fadas is a fairy tale. Historically o conto was also a thousand escudos, and older Portuguese people still count in them." },
        { id: "pt-u35l3-apersonagem", type: "vocab", front: "a personagem", reading: "apersonagem", meaning: "character", example: { jp: "A personagem do romance é tímida no começo, mas muda muito até ao fim.", en: "The novel's character is shy at the beginning, but changes a lot by the end." }, drill: { jp: "A personagem do romance é tímida", en: "The novel's character is shy" }, accept: ["the character", "figure", "role"], hint: "per-su-NA-zhem. FEMININE in Portugal whoever the character is — a personagem principal, even for a male hero; Brazil often makes it masculine. A character in a story only: someone's character is o feitio, from Unit 31." },
        { id: "pt-u35l3-aleitura", type: "vocab", front: "a leitura", reading: "aleitura", meaning: "reading", example: { jp: "A leitura é o passatempo da Ana, especialmente no inverno.", en: "Reading is Ana's hobby, especially in winter." }, drill: { jp: "A leitura é o passatempo da Ana", en: "Reading is Ana's hobby" }, accept: ["the reading", "read"], hint: "lay-TU-ra, from ler in A1 u17 — note the stem changes, lê becoming leit-, the same way the past participle lido does not look like its verb either. Uma leitura is also one interpretation of something." },
        { id: "pt-u35l3-opoema", type: "vocab", front: "o poema", reading: "opoema", meaning: "poem", example: { jp: "O poema do livro é bonito, mas há palavras que ainda não percebo.", en: "The poem in the book is beautiful, but there are words I still don't understand." }, drill: { jp: "O poema do livro é bonito", en: "The poem in the book is beautiful" }, accept: ["the poem", "verse"], hint: "pu-E-ma, and MASCULINE despite the -a — the Greek group again, with o planeta and o clima from Unit 34. A poesia, feminine, is poetry as a whole; um poema is one of them." },
      ],
    },
    {
      id: "pt-u35l4",
      unit: 35,
      lesson: 4,
      title: "Divertir-se",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say what you do for fun, whether you enjoyed it, and which team you support.",
      items: [
        { id: "pt-u35l4-opassatempo", type: "vocab", front: "o passatempo", reading: "opassatempo", meaning: "hobby", example: { jp: "O passatempo da Ana é a leitura, mas ao domingo também joga futebol.", en: "Ana's hobby is reading, but on Sundays she also plays football." }, drill: { jp: "O passatempo da Ana é a leitura", en: "Ana's hobby is reading" }, accept: ["pastime", "the hobby", "interest"], hint: "pa-sa-TEM-pu — literally \"pass-time\", built from passar and o tempo, exactly as English built \"pastime\". Portugal also says um hobby, said the English way, but passatempo is the word on a form." },
        { id: "pt-u35l4-olazer", type: "vocab", front: "o lazer", reading: "olazer", meaning: "leisure", example: { jp: "O lazer é importante para todos, mas raramente temos tempo para ele.", en: "Leisure is important for everyone, but we rarely have time for it." }, drill: { jp: "O lazer é importante para todos", en: "Leisure is important for everyone" }, accept: ["the leisure", "free time", "recreation"], hint: "la-ZER. A slightly formal, written word — tempos livres, which A1 u19 is named after, is what people actually say. You will meet o lazer on council signs and in job adverts." },
        { id: "pt-u35l4-divertirse", type: "vocab", front: "divertir-se", reading: "divertirse", meaning: "to enjoy oneself", example: { jp: "Divertir-se é muito importante, e ao fim de semana os colegas não falam de trabalho.", en: "Enjoying yourself is very important, and at the weekend colleagues don't talk about work." }, drill: { jp: "Divertir-se é muito importante", en: "Enjoying yourself is very important" }, accept: ["have fun", "to have a good time", "enjoy yourself", "to amuse oneself"], hint: "Reflexive, with the enclitic -se the dictionary form carries, as portar-se did in Unit 31. Divertimo-nos muito is \"we had a great time\" — and note the nós form drops its s before the pronoun. Diverte-te! is what you say to someone going out." },
        { id: "pt-u35l4-aborrecido", type: "vocab", front: "aborrecido", reading: "aborrecido", meaning: "boring", example: { jp: "O filme foi muito aborrecido, e no fim já estávamos aborrecidos os dois.", en: "The film was very boring, and by the end we were both fed up." }, drill: { jp: "O filme foi muito aborrecido", en: "The film was very boring" }, accept: ["dull", "tedious", "annoyed", "fed up"], hint: "a-bu-rre-SEE-du. TWO meanings and the verb decides which: SER aborrecido is boring, ESTAR aborrecido is fed up or annoyed — the ser/estar split from Unit 12 doing real work. The example uses both in one sentence." },
        { id: "pt-u35l4-oadepto", type: "vocab", front: "o adepto", reading: "oadepto", meaning: "supporter", example: { jp: "O adepto do Benfica está contente esta semana, o que não acontece sempre.", en: "The Benfica supporter is happy this week, which doesn't always happen." }, drill: { jp: "O adepto do Benfica está contente", en: "The Benfica supporter is happy" }, accept: ["fan", "the supporter", "follower"], hint: "PORTUGAL SAYS ADEPTO. Brazil says o torcedor, from torcer, and neither word crosses. Feminine a adepta. The three clubs that matter here are o Benfica, o Porto and o Sporting, and being adepto of one is inherited, not chosen." },
        { id: "pt-u35l4-acolecao", type: "vocab", front: "a coleção", reading: "acolecao", meaning: "collection", example: { jp: "A coleção de livros do Tiago é enorme e já não cabe em casa.", en: "Tiago's book collection is enormous and no longer fits in the house." }, drill: { jp: "A coleção de livros é enorme", en: "The book collection is enormous" }, accept: ["the collection", "set", "series"], hint: "ku-le-SAWNG. POST-1990 SPELLING again — coleção with one c, where Portugal wrote colecção. The verb is colecionar. Museums use it for their holdings: a coleção do museu." },
      ],
    },
  ],
};
