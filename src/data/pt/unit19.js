// PT Unit 19 — Os tempos livres e o desporto (slot: coverage-5) — A1
// What a learner does when they are not working. Blocks 1-2 give the days, the
// hours and the food but nothing to do with them: no sport, no music, no film,
// no way to say you are going out. This unit is that, and it ends on the
// esplanada, which is where Portugal actually spends its free time.
//
// pt-PT markers carded here: o desporto (Brazil: o esporte) and a equipa
// (Brazil: o time / a equipe) — two of the cleanest single-word tells between
// the two countries. Spanish trap: a esplanada (ES explanada = a bare open
// space, not a café terrace).
//
// THE THREE-WAY VERB SPLIT is the real grammar of this unit and is taught
// through hints rather than as a rule: English "play" is jogar for games and
// sport, tocar for an instrument, and brincar for a child at play. tocar's card
// also carries the estar A + infinitive progressive (está a tocar), which is
// European Portuguese and never the Brazilian "está tocando".
// ver (u19l4) is hinted against viver (Unit 4) — one letter apart, and the stem
// probe will pair them; they are not duplicates.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT19 = {
  id: "pt-u19",
  lang: "pt",
  title: "Os tempos livres e o desporto",
  order: 19,
  stage: "a1",
  lessons: [
    {
      id: "pt-u19l1",
      unit: 19,
      lesson: 1,
      title: "Ao fim de semana",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you do at the weekend in Portugal — sleep in, wake up late, go for a walk, and invite someone to a party.",
      items: [
        { id: "pt-u19l1-acordar", type: "vocab", front: "acordar", reading: "acordar", meaning: "to wake up", example: { jp: "Acordar tarde ao domingo é fantástico.", en: "Waking up late on Sunday is fantastic." }, drill: { jp: "Acordar tarde é fantástico", en: "Waking up late is fantastic" }, accept: ["wake up", "to awaken", "to wake"], hint: "a-kor-DAR. The pair to dormir in the next card — dormir e acordar. For getting out of bed rather than merely waking, Portugal says levantar-se, with the pronoun on the back." },
        { id: "pt-u19l1-brincar", type: "vocab", front: "brincar", reading: "brincar", meaning: "to play", example: { jp: "As crianças brincam no jardim.", en: "The children play in the garden." }, drill: { jp: "Brincar é o trabalho das crianças", en: "Playing is children's work" }, accept: ["play", "to play (children)", "to mess about", "to joke"], hint: "Portuguese has THREE verbs for \"play\" and this unit teaches them all: brincar is what children do, jogar is a game or a sport (Lesson 2), tocar is an instrument (Lesson 3). Using the wrong one is the mistake every learner makes. It also means to joke — estás a brincar!" },
        { id: "pt-u19l1-dormir", type: "vocab", front: "dormir", reading: "dormir", meaning: "to sleep", example: { jp: "Dormir oito horas é importante.", en: "Sleeping eight hours is important." }, drill: { jp: "Dormir oito horas é importante", en: "Sleeping eight hours is important" }, accept: ["sleep", "to be asleep"], hint: "dur-MEER: durmo, dormes, dorme — the o turns to u in the \"I\" form, which is worth noticing now because several verbs do it. A nap is uma sesta; to fall asleep is adormecer." },
        { id: "pt-u19l1-passear", type: "vocab", front: "passear", reading: "passear", meaning: "to go for a walk", example: { jp: "Passear no jardim de Lisboa.", en: "To go for a walk in the Lisbon garden." }, drill: { jp: "Passear no jardim de Lisboa", en: "To go for a walk in the Lisbon garden" }, accept: ["to stroll", "stroll", "to walk", "walk", "to go for a stroll"], hint: "pa-si-AR: passeio, passeias, passeia. Not walking to get somewhere — strolling for the pleasure of it, which on a Sunday is close to a national activity. Walking the dog is passear o cão, from Unit 4." },
        { id: "pt-u19l1-afesta", type: "vocab", front: "a festa", reading: "afesta", meaning: "party", example: { jp: "A festa de aniversário de Ana é amanhã.", en: "Ana's birthday party is tomorrow." }, drill: { jp: "A festa de Ana é amanhã", en: "Ana's party is tomorrow" }, accept: ["the party", "celebration", "festival", "feast"], hint: "FESH-ta. A party, and also a public holiday or a saint's festival. Lisbon's are as Festas de Santo António every June, when the entire city grills sardines in the street." },
        { id: "pt-u19l1-convidar", type: "vocab", front: "convidar", reading: "convidar", meaning: "to invite", example: { jp: "Convidar os colegas do escritório.", en: "To invite the colleagues from the office." }, drill: { jp: "Convidar os colegas do escritório", en: "To invite the colleagues from the office" }, accept: ["invite", "to ask", "to invite over"], hint: "kon-vi-DAR: convido, convidas, convida. One root, three words — an invitation is um convite and the guest is um convidado. Inviting someone TO something takes para." },
      ],
    },
    {
      id: "pt-u19l2",
      unit: 19,
      lesson: 2,
      title: "O desporto",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Talk about sport in Portugal — the game, the team and who plays — using the words Portugal uses rather than Brazil's.",
      items: [
        { id: "pt-u19l2-odesporto", type: "vocab", front: "o desporto", reading: "odesporto", meaning: "sport", example: { jp: "O desporto é importante em Portugal.", en: "Sport is important in Portugal." }, drill: { jp: "O desporto é importante em Portugal", en: "Sport is important in Portugal" }, accept: ["the sport", "sports", "athletics"], hint: "PORTUGAL SAYS DESPORTO — desh-POR-tu. Brazil says o esporte, and the two do not swap. Both descend from the same Old French root that gave English \"disport\" and then \"sport\"." },
        { id: "pt-u19l2-ofutebol", type: "vocab", front: "o futebol", reading: "ofutebol", meaning: "football", example: { jp: "O futebol é o desporto de Portugal.", en: "Football is Portugal's sport." }, drill: { jp: "O futebol é o desporto de Portugal", en: "Football is Portugal's sport" }, accept: ["football", "soccer", "the football"], hint: "fu-te-BOL, stressed on the end. The three big clubs — o Benfica, o Porto, o Sporting — are known as os três grandes, and which one you support is a real question you will be asked. A match is um jogo." },
        { id: "pt-u19l2-jogar", type: "vocab", front: "jogar", reading: "jogar", meaning: "to play", example: { jp: "Jogar futebol na praça é fantástico.", en: "Playing football in the square is fantastic." }, drill: { jp: "Jogar futebol na praça é fantástico", en: "Playing football in the square is fantastic" }, accept: ["play", "to play a game", "to gamble"], hint: "zhu-GAR: jogo, jogas, joga. For GAMES and sport only — jogar futebol. An instrument takes tocar instead, and a child at play is brincar. English's single \"play\" is three separate verbs here." },
        { id: "pt-u19l2-aequipa", type: "vocab", front: "a equipa", reading: "aequipa", meaning: "team", example: { jp: "A equipa de Ana é a mais famosa.", en: "Ana's team is the most famous." }, drill: { jp: "A equipa de Ana é famosa", en: "Ana's team is famous" }, accept: ["the team", "squad", "side"], hint: "PORTUGAL SAYS EQUIPA — i-KEE-pa. Brazil says o time, taken straight from English, and also writes a equipe with the French e. This is one of the sharpest single-word tells between the two countries." },
        { id: "pt-u19l2-ojogo", type: "vocab", front: "o jogo", reading: "ojogo", meaning: "game", example: { jp: "O jogo de futebol é às três.", en: "The football game is at three." }, drill: { jp: "O jogo de futebol é às três", en: "The football game is at three" }, accept: ["the game", "match", "the match", "play"], hint: "ZHO-gu — the first o stays open, the last one closes to \"oo\". Twin of the verb jogar: o jogo is the match, jogar is what happens in it. The Olympics are os Jogos Olímpicos." },
        { id: "pt-u19l2-correr", type: "vocab", front: "correr", reading: "correr", meaning: "to run", example: { jp: "Correr no jardim é fantástico.", en: "Running in the garden is fantastic." }, drill: { jp: "Correr no jardim é fantástico", en: "Running in the garden is fantastic" }, accept: ["run", "to jog", "jog"], hint: "ku-RRER, the double rr giving that strong throat sound: corro, corres, corre. Running as exercise is correr or fazer corrida. It also means to flow, of water, and to go round, of a rumour." },
      ],
    },
    {
      id: "pt-u19l3",
      unit: 19,
      lesson: 3,
      title: "A música e o cinema",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about music and films in Portuguese — and use the right verb for playing an instrument, which is not the one for playing a game.",
      items: [
        { id: "pt-u19l3-amusica", type: "vocab", front: "a música", reading: "amusica", meaning: "music", example: { jp: "A música de Portugal é famosa.", en: "Portugal's music is famous." }, drill: { jp: "A música de Portugal é famosa", en: "Portugal's music is famous" }, accept: ["the music", "song", "a song"], hint: "MU-zi-ka — the accent pulls the stress onto the first syllable and the s says z. It means music in general and also one single song, uma música. Portugal's own is o fado, sung in Lisbon and in Coimbra and nowhere else quite the same way." },
        { id: "pt-u19l3-ofilme", type: "vocab", front: "o filme", reading: "ofilme", meaning: "film", example: { jp: "O filme é português e é fantástico.", en: "The film is Portuguese and it's fantastic." }, drill: { jp: "O filme é português e fantástico", en: "The film is Portuguese and fantastic" }, accept: ["the film", "movie", "the movie"], hint: "FEEL-me. Portugal does NOT dub foreign films — everything is subtitled, which is a large part of why Portuguese people speak the English they do. Keep it apart from o filho in Unit 4." },
        { id: "pt-u19l3-ocinema", type: "vocab", front: "o cinema", reading: "ocinema", meaning: "cinema", example: { jp: "O cinema é em frente à praça.", en: "The cinema is opposite the square." }, drill: { jp: "O cinema é em frente à praça", en: "The cinema is opposite the square" }, accept: ["the cinema", "movies", "movie theater", "movie theatre"], hint: "si-NE-ma, soft c before i. A masculine noun ending in -a, like o problema and o mapa — the words Portuguese took from Greek almost all behave this way, and the article is your only warning." },
        { id: "pt-u19l3-cantar", type: "vocab", front: "cantar", reading: "cantar", meaning: "to sing", example: { jp: "Cantar e dançar na festa de Ana.", en: "To sing and dance at Ana's party." }, drill: { jp: "Cantar e dançar na festa", en: "To sing and dance at the party" }, accept: ["sing", "to chant"], hint: "kan-TAR: canto, cantas, canta. A song is uma canção, with the -ção ending from Unit 1, and the singer is um cantor or uma cantora." },
        { id: "pt-u19l3-dancar", type: "vocab", front: "dançar", reading: "dancar", meaning: "to dance", example: { jp: "Dançar na festa do fim de semana.", en: "To dance at the weekend party." }, drill: { jp: "Dançar na festa de Ana", en: "To dance at Ana's party" }, accept: ["dance", "to have a dance"], hint: "dan-SAR, cedilla giving the s: danço, danças, dança. Watch where the ç goes — it appears only before a and o, where c would otherwise go hard, so danço takes it and danças does not." },
        { id: "pt-u19l3-tocar", type: "vocab", front: "tocar", reading: "tocar", meaning: "to play (an instrument)", example: { jp: "Tocar a música de Portugal.", en: "To play Portugal's music." }, drill: { jp: "Tocar a música de Portugal", en: "To play Portugal's music" }, accept: ["to play music", "to touch", "touch", "to ring", "play"], hint: "tu-KAR: toco, tocas, toca. Three jobs — to PLAY an instrument (never jogar), to TOUCH something, and to RING, of a phone or a doorbell. O telemóvel está a tocar is the phone ringing, and that estar A + infinitive is how Portugal builds \"is -ing\"; Brazil would say está tocando." },
      ],
    },
    {
      id: "pt-u19l4",
      unit: 19,
      lesson: 4,
      title: "Sair à noite",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Go out for a Portuguese evening — watch something, listen to something, and sit down on the terrace where the country spends its free time.",
      items: [
        { id: "pt-u19l4-sair", type: "vocab", front: "sair", reading: "sair", meaning: "to go out", example: { jp: "Sair à noite em Lisboa é fantástico.", en: "Going out at night in Lisbon is fantastic." }, drill: { jp: "Sair à noite em Lisboa", en: "Going out at night in Lisbon" }, accept: ["go out", "to leave", "leave", "to exit"], hint: "sa-EER — two syllables with the stress on the i: saio, sais, sai. To leave a place, and to go out for the evening. Its opposite is entrar, and a saída is the EXIT sign above every door." },
        { id: "pt-u19l4-ouvir", type: "vocab", front: "ouvir", reading: "ouvir", meaning: "to hear", example: { jp: "Ouvir música em casa é fantástico.", en: "Listening to music at home is fantastic." }, drill: { jp: "Ouvir música em casa", en: "Listening to music at home" }, accept: ["hear", "to listen", "listen", "to listen to"], hint: "oh-VEER: ouço, ouves, ouve — that ouço is irregular enough to learn on its own. One verb covers hearing and listening; Portuguese does not split them the way English does. Escutar exists but sounds more deliberate." },
        { id: "pt-u19l4-ver", type: "vocab", front: "ver", reading: "ver", meaning: "to see", example: { jp: "Ver o jogo de futebol na televisão.", en: "To watch the football game on television." }, drill: { jp: "Ver o jogo na televisão", en: "To watch the game on television" }, accept: ["see", "to watch", "watch", "to look at"], hint: "VER, one syllable: vejo, vês, vê — the j in vejo appears from nowhere and simply has to be memorised. It covers see and watch alike. Careful with viver from Unit 4: one letter apart, and that one means to live." },
        { id: "pt-u19l4-atelevisao", type: "vocab", front: "a televisão", reading: "atelevisao", meaning: "television", example: { jp: "A televisão do quarto não é enorme.", en: "The bedroom television isn't enormous." }, drill: { jp: "A televisão do quarto é enorme", en: "The bedroom television is enormous" }, accept: ["the television", "tv", "telly"], hint: "te-le-vi-ZAWNG, closing on the -ão nasal of o pão, and universally shortened to a TV, said \"tê-vê\". Plural: as televisões." },
        { id: "pt-u19l4-ojornal", type: "vocab", front: "o jornal", reading: "ojornal", meaning: "newspaper", example: { jp: "Ler o jornal de Lisboa é o trabalho de Tiago.", en: "Reading the Lisbon newspaper is Tiago's job." }, drill: { jp: "O jornal de Lisboa é importante", en: "The Lisbon newspaper is important" }, accept: ["the newspaper", "paper", "the paper", "news"], hint: "zhur-NAL, stressed at the end. Spanish says el periódico, so there is no shortcut — but English \"journal\" is the same root. It also means the TV news: o jornal da noite is the evening bulletin." },
        { id: "pt-u19l4-aesplanada", type: "vocab", front: "a esplanada", reading: "aesplanada", meaning: "terrace", example: { jp: "A esplanada do café é em frente ao museu.", en: "The café terrace is opposite the museum." }, drill: { jp: "A esplanada do café é enorme", en: "The café terrace is enormous" }, accept: ["the terrace", "outdoor seating", "café terrace", "patio", "sidewalk cafe"], hint: "esh-pla-NA-da. The outdoor tables of a café, and the moment there is sun this is where the country goes. Careful with Spanish: una explanada there is a bare open space, not somewhere you sit and drink coffee." },
      ],
    },
  ],
};
