// PT Unit 40 — As palavras essenciais — A2 (slot: vocabulary-1)
// ─────────────────────────────────────────────────────────────────────────────
// The A2 coverage unit, and it closes a real hole rather than padding a number.
// A1 taught tu, eu, ele, este, aquele, outro, todo, uns — and then stopped. The
// INDEFINITES were never opened at all: a learner leaving A1 and block 1 cannot
// say anybody, nobody, something, nothing, each, several, any or most. Those are
// eight of the highest-frequency words in the language and Lessons 1-2 are them.
//
// Lessons 3-4 are the abstract nouns an A2 learner needs to talk ABOUT things
// rather than only about objects — the fact, the truth, the difference, the
// point. `o facto` carries the sharpest pt-PT/pt-BR split left in the band:
// Portugal writes facto, Brazil writes fato, and in Portugal um fato is a suit.
// `o pormenor` is the other one — Brazil says o detalhe, and Portugal says both
// but writes pormenor.
//
// NOT taught here, and flagged in the hand-back rather than smuggled in: the
// productive -íssimo absolute superlative. u39 teaches ótimo and péssimo, which
// are the two suppletive forms, but the ending itself has no card anywhere in
// A1 or A2.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT40 = {
  id: "pt-u40",
  lang: "pt",
  title: "As palavras essenciais",
  order: 40,
  stage: "a2",
  lessons: [
    {
      id: "pt-u40l1",
      unit: 40,
      lesson: 1,
      title: "Tudo e nada",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say everything, nothing, somebody and nobody — and handle the double negative Portuguese requires and English forbids.",
      items: [
        { id: "pt-u40l1-tudo", type: "vocab", front: "tudo", reading: "tudo", meaning: "everything", example: { jp: "Ele quer saber tudo de futebol, mas não sabe o nome de um jogador da equipa.", en: "He wants to know everything about football, but doesn't know the name of one player on the team." }, drill: { jp: "Ele quer saber tudo", en: "He wants to know everything" }, accept: ["all", "it all", "the lot"], hint: "TOO-du. NEVER changes and never takes a noun — tudo stands alone. That is the whole difference from todo, A1 u14, which agrees and attaches: TODO o dia, all day, but TUDO, everything. Está tudo bem? is the standard \"is everything OK?\"." },
        { id: "pt-u40l1-nada", type: "vocab", front: "nada", reading: "nada", meaning: "nothing", example: { jp: "Ele não disse nada ontem, e por isso ninguém sabe o que aconteceu.", en: "He said nothing yesterday, and so nobody knows what happened." }, drill: { jp: "Ele não disse nada ontem", en: "He said nothing yesterday" }, accept: ["anything", "not a thing", "at all"], hint: "THE DOUBLE NEGATIVE IS OBLIGATORY. Portuguese says não disse NADA — literally \"didn't say nothing\" — and dropping the não is wrong, not casual. English forbids exactly what Portuguese requires. The one exception is word order — put nada FIRST and the não disappears: nada aconteceu. De nada, from A1 u2, is this word saying \"it's nothing\"." },
        { id: "pt-u40l1-alguem", type: "vocab", front: "alguém", reading: "alguem", meaning: "somebody", example: { jp: "Alguém vai chegar às oito para abrir a loja, mas ainda não sabemos quem.", en: "Somebody is going to arrive at eight to open the shop, but we still don't know who." }, drill: { jp: "Alguém vai chegar às oito", en: "Somebody is going to arrive at eight" }, accept: ["someone", "anybody", "anyone"], hint: "al-GENG, nasal ending. Invariable, and always singular — alguém VAI, never \"vão\". In a question it does the work of English \"anybody\": está aqui alguém?" },
        { id: "pt-u40l1-ninguem", type: "vocab", front: "ninguém", reading: "ninguem", meaning: "nobody", example: { jp: "Ninguém sabe o que aconteceu, e quem sabe não quer dizer nada.", en: "Nobody knows what happened, and those who know don't want to say anything." }, drill: { jp: "Ninguém sabe o que aconteceu", en: "Nobody knows what happened" }, accept: ["no one", "not anybody", "anyone"], hint: "neen-GENG. The negative twin of alguém. When it comes FIRST no não is needed — ninguém sabe. When it comes after the verb the não returns: não sabe ninguém. Same rule as nada, and it is worth practising both orders." },
        { id: "pt-u40l1-algo", type: "vocab", front: "algo", reading: "algo", meaning: "something", example: { jp: "Ele disse algo muito importante na reunião, mas falou tão baixo que os colegas não o ouviram.", en: "He said something very important in the meeting, but spoke so quietly that his colleagues didn't hear him." }, drill: { jp: "Ele disse algo muito importante", en: "He said something very important" }, accept: ["anything", "somewhat"], hint: "AL-gu, invariable. Slightly formal — in speech Portugal much prefers alguma coisa, which means exactly the same and is two words. Learn algo to read it; say alguma coisa." },
        { id: "pt-u40l1-cada", type: "vocab", front: "cada", reading: "cada", meaning: "each", example: { jp: "Cada pessoa tem uma opinião diferente, e quase sempre a diz sem lhe perguntarem.", en: "Each person has a different opinion, and almost always says it without being asked." }, drill: { jp: "Cada pessoa tem uma opinião", en: "Each person has an opinion" }, accept: ["every", "apiece", "each one"], hint: "KA-da. NEVER changes — cada homem, cada mulher, cada dia — and it is always followed by a SINGULAR noun, even though English says \"each of the books\". Cada vez mais means \"more and more\", which you will hear constantly." },
      ],
    },
    {
      id: "pt-u40l2",
      unit: 40,
      lesson: 2,
      title: "Alguns e vários",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say how many of something you mean when you do not want to count — some, several, none, any, most.",
      items: [
        { id: "pt-u40l2-alguns", type: "vocab", front: "alguns", reading: "alguns", meaning: "some", example: { jp: "Alguns livros são muito caros, mas na biblioteca da universidade estão todos.", en: "Some books are very expensive, but they are all in the university library." }, drill: { jp: "Alguns livros são muito caros", en: "Some books are very expensive" }, accept: ["a few", "several", "some of them"], hint: "al-GOONSH, nasal. It AGREES: alguns livros, algumas casas. Note the singular algum/alguma means \"some\" or \"any\" of one thing, and after the noun it flips to negative — livro algum means no book at all." },
        { id: "pt-u40l2-varios", type: "vocab", front: "vários", reading: "varios", meaning: "several", example: { jp: "Vários amigos vão ao concerto, por isso é melhor comprar os bilhetes já.", en: "Several friends are going to the concert, so it is better to buy the tickets now." }, drill: { jp: "Vários amigos vão ao concerto", en: "Several friends are going to the concert" }, accept: ["various", "a number of", "many"], hint: "VA-ri-ush; feminine várias. More than alguns and fewer than muitos. Careful with the singular vário, which means varied rather than several and is rare — this word lives in the plural." },
        { id: "pt-u40l2-nenhum", type: "vocab", front: "nenhum", reading: "nenhum", meaning: "no", example: { jp: "Nenhum livro é assim tão caro, mas este custa quase quarenta euros.", en: "No book is that expensive, but this one costs almost forty euros." }, drill: { jp: "Nenhum livro é assim tão caro", en: "No book is that expensive" }, accept: ["none", "not any", "no one", "neither"], hint: "ne-NYOONG, nasal, with the nh; feminine nenhuma. The negative of algum, and it takes the same double negative as nada: não tenho nenhum. After the noun it is emphatic — não há problema nenhum, no problem whatsoever." },
        { id: "pt-u40l2-qualquer", type: "vocab", front: "qualquer", reading: "qualquer", meaning: "any", example: { jp: "Qualquer pessoa com dezoito anos pode votar aqui.", en: "Any person aged eighteen can vote here." }, drill: { jp: "Qualquer pessoa pode votar aqui", en: "Any person can vote here" }, accept: ["whichever", "whatever", "either", "any at all"], hint: "kwal-KER. \"Any\" in the sense of it-doesn't-matter-which — qualquer dia, qualquer coisa. Its plural is IRREGULAR and splits down the middle: quaisquer, not \"qualqueres\", because it is qual + quer welded together." },
        { id: "pt-u40l2-amaioria", type: "vocab", front: "a maioria", reading: "amaioria", meaning: "most", example: { jp: "A maioria das pessoas gosta de futebol, mas nem todas vão ao estádio.", en: "Most people like football, but not all of them go to the stadium." }, drill: { jp: "A maioria das pessoas gosta de futebol", en: "Most people like football" }, accept: ["the majority", "most of them", "the bulk"], hint: "ma-yu-REE-a, from maior, bigger. A maioria DAS pessoas, with the plural contraction block 1 teaches in u29. The verb after it is usually SINGULAR — a maioria gosta — because a maioria is one group, which is the opposite of the English habit." },
        { id: "pt-u40l2-oresto", type: "vocab", front: "o resto", reading: "oresto", meaning: "the rest", example: { jp: "O resto do dinheiro está no banco, e apenas o vamos gastar para o ano.", en: "The rest of the money is in the bank, and we will only spend it next year." }, drill: { jp: "O resto do dinheiro está no banco", en: "The rest of the money is in the bank" }, accept: ["remainder", "what's left", "the others"], hint: "RRESH-tu, strong initial r. O resto DE something. Plural os restos is leftovers — of food, or of anything else. De resto, at the start of a sentence, means \"besides\" or \"in any case\"." },
      ],
    },
    {
      id: "pt-u40l3",
      unit: 40,
      lesson: 3,
      title: "As ideias",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about ideas rather than objects — the point, the fact, the truth, and the detail everyone forgot.",
      items: [
        { id: "pt-u40l3-aideia", type: "vocab", front: "a ideia", reading: "aideia", meaning: "idea", example: { jp: "A ideia da Ana foi muito boa, mas ninguém a quis ouvir na reunião.", en: "Ana's idea was very good, but nobody wanted to hear it in the meeting." }, drill: { jp: "A ideia da Ana foi muito boa", en: "Ana's idea was very good" }, accept: ["the idea", "notion", "thought", "plan"], hint: "i-DAY-a, three syllables, and NO accent in the Portuguese spelling — Brazil writes ideia too since the accord, but you will still see the old idéia in older Brazilian books. Não faço ideia is \"I have no idea\"." },
        { id: "pt-u40l3-oassunto", type: "vocab", front: "o assunto", reading: "oassunto", meaning: "subject", example: { jp: "O assunto da reunião foi o dinheiro, como sempre, e ninguém falou de outra coisa.", en: "The subject of the meeting was money, as always, and nobody talked about anything else." }, drill: { jp: "O assunto da reunião foi o dinheiro", en: "The subject of the meeting was money" }, accept: ["the subject", "matter", "topic", "issue"], hint: "a-SOON-tu, with the hard ss. The topic of a conversation or the subject line of an email — Portuguese email headers say Assunto where English says Subject. A school subject is different: that is uma disciplina, A1 u17." },
        { id: "pt-u40l3-ofacto", type: "vocab", front: "o facto", reading: "ofacto", meaning: "fact", example: { jp: "O facto é que ninguém sabe nada, e por isso toda a gente diz o que quer.", en: "The fact is that nobody knows anything, and so everybody says whatever they want." }, drill: { jp: "O facto é que ninguém sabe nada", en: "The fact is that nobody knows anything" }, accept: ["the fact", "reality"], hint: "PORTUGAL WRITES FACTO, WITH THE C, and pronounces it — FAK-tu. Brazil writes fato. And in Portugal um fato is a SUIT, the thing you wear to a casamento, so the two words are fully distinct here and fully merged there. De facto means \"in fact\"." },
        { id: "pt-u40l3-averdade", type: "vocab", front: "a verdade", reading: "averdade", meaning: "truth", example: { jp: "A verdade é sempre mais difícil de dizer do que uma mentira pequena.", en: "The truth is always harder to tell than a small lie." }, drill: { jp: "A verdade é sempre mais difícil", en: "The truth is always harder" }, accept: ["the truth", "reality"], hint: "ver-DA-de — another -dade noun, feminine. Na verdade means \"actually\" and is one of the commonest fillers in spoken Portuguese. É verdade? is how you say \"really?\" when someone tells you something surprising." },
        { id: "pt-u40l3-amentira", type: "vocab", front: "a mentira", reading: "amentira", meaning: "lie", example: { jp: "A mentira é sempre um problema, porque é preciso lembrar tudo o que se disse.", en: "A lie is always a problem, because you have to remember everything you said." }, drill: { jp: "A mentira é sempre um problema", en: "A lie is always a problem" }, accept: ["the lie", "falsehood", "untruth"], hint: "men-TEE-ra, from mentir, to lie. Its opposite is the card before. Note um mentiroso is a liar; and mentira! shouted on its own is how Portuguese says \"no way!\" to something unbelievable." },
        { id: "pt-u40l3-opormenor", type: "vocab", front: "o pormenor", reading: "opormenor", meaning: "detail", example: { jp: "O pormenor do quadro é bonito, mas apenas se vê de muito perto.", en: "The detail of the painting is beautiful, but you only see it from very close up." }, drill: { jp: "O pormenor do quadro é bonito", en: "The detail of the painting is beautiful" }, accept: ["the detail", "particular", "fine point"], hint: "PORTUGAL SAYS PORMENOR. Brazil says o detalhe — and Portugal says that too, but pormenor is the native word and the one on forms. Literally \"by the smaller\": por + menor. Em pormenor means in detail." },
      ],
    },
    {
      id: "pt-u40l4",
      unit: 40,
      lesson: 4,
      title: "Explicar e comparar",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Explain something properly — give an example, name the difference, state the advantage and say what the point was.",
      items: [
        { id: "pt-u40l4-amaneira", type: "vocab", front: "a maneira", reading: "amaneira", meaning: "way", example: { jp: "A maneira de falar é tão importante como o que se diz, especialmente no trabalho.", en: "The way of speaking is as important as what is said, especially at work." }, drill: { jp: "A maneira de falar é importante", en: "The way of speaking is important" }, accept: ["manner", "the way", "method", "fashion"], hint: "ma-NAY-ra. De maneira que means \"so that\". Its close twin o modo means the same and is a touch more formal. As boas maneiras are good manners — which links straight back to educado in Unit 31." },
        { id: "pt-u40l4-oexemplo", type: "vocab", front: "o exemplo", reading: "oexemplo", meaning: "example", example: { jp: "O exemplo do professor foi bom, mas metade da turma não o percebeu.", en: "The teacher's example was good, but half the class didn't understand it." }, drill: { jp: "O exemplo do professor foi bom", en: "The teacher's example was good" }, accept: ["the example", "instance", "model"], hint: "i-ZEM-plu — that x says z, as in exame and exigente. Por exemplo is the phrase you will use daily, and it abbreviates to p. ex. in writing. Dar o exemplo is to set an example." },
        { id: "pt-u40l4-adiferenca", type: "vocab", front: "a diferença", reading: "adiferenca", meaning: "difference", example: { jp: "A diferença de preço é enorme, mas a diferença de qualidade quase não se nota.", en: "The price difference is enormous, but the difference in quality is barely noticeable." }, drill: { jp: "A diferença de preço é enorme", en: "The price difference is enormous" }, accept: ["the difference", "gap", "distinction"], hint: "di-fe-REN-sa, cedilla. Fazer a diferença is to make the difference. The adjective is diferente, which does not change for gender — like grande and forte from Unit 10." },
        { id: "pt-u40l4-avantagem", type: "vocab", front: "a vantagem", reading: "avantagem", meaning: "advantage", example: { jp: "A vantagem de morar aqui é o mar, e a desvantagem é o preço das casas.", en: "The advantage of living here is the sea, and the disadvantage is the price of the houses." }, drill: { jp: "A vantagem de morar aqui é o mar", en: "The advantage of living here is the sea" }, accept: ["the advantage", "benefit", "upside", "edge"], hint: "van-TA-zhem. Feminine, like every -agem noun — a viagem, a garagem, a paragem. Its opposite takes the des- prefix you have now met five times: a desvantagem. Plural as vantagens, with -m becoming -ns." },
        { id: "pt-u40l4-oobjetivo", type: "vocab", front: "o objetivo", reading: "oobjetivo", meaning: "aim", example: { jp: "O objetivo do projeto é claro, mas o prazo não chega para ninguém.", en: "The project's aim is clear, but the deadline isn't enough for anyone." }, drill: { jp: "O objetivo do projeto é claro", en: "The project's aim is clear" }, accept: ["objective", "the aim", "goal", "purpose"], hint: "ob-zhe-TEE-vu. POST-1990 SPELLING — objetivo with no c, where Portugal wrote objectivo. Also the adjective \"objective\", and a camera lens. The two o's on the card are the article meeting the word: o + objetivo." },
        { id: "pt-u40l4-ocaso", type: "vocab", front: "o caso", reading: "ocaso", meaning: "case", example: { jp: "O caso do banco está nos jornais há três semanas e ainda ninguém foi preso.", en: "The bank case has been in the papers for three weeks and nobody has been arrested yet." }, drill: { jp: "O caso do banco está nos jornais", en: "The bank case is in the papers" }, accept: ["the case", "instance", "affair", "matter"], hint: "KA-zu, with the s saying z. Em caso de means \"in case of\" and is on every emergency sign in Portugal. Neste caso, in this case; fazer caso de, to pay attention to. Nothing to do with a casa, which has an a." },
      ],
    },
  ],
};
