// PT Unit 69 — O conjuntivo presente (slot: grammar-6) — B1
// ─────────────────────────────────────────────────────────────────────────────
// SLOT RETHEMED. The scaffold called this "Grammar 6 — linked and subordinate
// clauses", which is a Japanese-shaped slot name: Portuguese links clauses with
// connectives A2 already taught (u21's por isso / no entanto / além disso, u29's
// porque / portanto / pois, u36's enquanto / assim que / sempre que). What
// Portuguese actually opens at B1 is THE SUBJUNCTIVE, and it is not optional —
// "espero que seja" with an indicative is not an accent, it is a mistake.
//
// The crew split, approved by the lead: u69 present subjunctive + its triggers ·
// u70 imperfect + the counterfactual `se` · u71 future subjunctive + clitic
// placement. Three units, not two and a spare, because Portuguese has a LIVE
// future subjunctive with no working Spanish equivalent (u71's case).
//
// MODELLED AS VOCAB, like every grammar unit in this corpus: the forms are the
// fronts (u36 cards era / estava / tinha, u37 cards será / seria / falarmos) and
// the pattern lives in the examples. No new item type, per CLAUDE.md.
//
// `estar a` + infinitive is carded HERE (lesson 4) on the lead's ruling. The
// chunk came first: u13 already teaches `estou a falar` and `o que estás a
// fazer` as fixed phrases, so the learner has met the construction four times
// without ever being given the rule. This card is the generalization, not a
// re-teach — and no A1 rework follows from it, because an id-changing edit to a
// shipped unit would reset live mastery.
//
// `dê` is DELIBERATELY NOT CARDED, though it is the one missing common form:
// its ASCII fold is `de`, which u1 teaches, and the two would accept each
// other's typed answers. unit1.js's header predicted exactly this pair. It is
// used in examples and named in a hint instead.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT69 = {
  id: "pt-u69",
  lang: "pt",
  title: "O conjuntivo presente",
  order: 69,
  stage: "b1",
  lessons: [
    {
      id: "pt-u69l1",
      unit: 69,
      lesson: 1,
      title: "Quero que, espero que",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what you want or hope somebody else will do — the one pattern that forces the subjunctive in every sentence.",
      items: [
        { id: "pt-u69l1-esperoque", type: "vocab", front: "espero que", reading: "esperoque", meaning: "I hope that", example: { jp: "Espero que o tempo esteja melhor no domingo, porque já mudámos o almoço duas vezes.", en: "I hope the weather is better on Sunday, because we have already moved the lunch twice." }, drill: { jp: "Espero que o tempo esteja melhor", en: "I hope the weather is better" }, accept: ["I hope", "hopefully", "I hope that"], hint: "The trigger to learn first. Esperar que ALWAYS takes the subjunctive — espero que sejas feliz, never espero que és. If the subject is the same person, drop the que and use the infinitive: espero chegar cedo." },
        { id: "pt-u69l1-queroque", type: "vocab", front: "quero que", reading: "queroque", meaning: "I want (someone) to", example: { jp: "Quero que o médico veja os resultados hoje, no entanto a consulta só é na sexta.", en: "I want the doctor to see the results today; however, the appointment is only on Friday." }, drill: { jp: "Quero que o médico veja os resultados", en: "I want the doctor to see the results" }, accept: ["I want", "I want that", "I'd like"], hint: "English says \"I want you TO go\"; Portuguese cannot — it says quero QUE vás. Two different subjects means que plus the subjunctive, always. Same subject, plain infinitive: quero ir." },
        { id: "pt-u69l1-seja", type: "vocab", front: "seja", reading: "seja", meaning: "(that it) be", example: { jp: "Espero que a viagem seja tranquila, mas a estrada do norte está má este inverno.", en: "I hope the journey is calm, but the northern road is bad this winter." }, drill: { jp: "Espero que a viagem seja tranquila", en: "I hope the journey is calm" }, accept: ["be", "is", "that it be", "may be"], hint: "The present subjunctive of ser. Same form for eu, ele and você — seja. Also the way Portuguese says \"whatever\": seja o que for, seja quem for." },
        { id: "pt-u69l1-esteja", type: "vocab", front: "esteja", reading: "esteja", meaning: "(that it) be (state)", example: { jp: "Quero que a casa esteja limpa antes do verão, por isso o trabalho começa já em janeiro.", en: "I want the house to be clean before the summer, so the work starts in January." }, drill: { jp: "Quero que a casa esteja limpa", en: "I want the house to be clean" }, accept: ["be", "is", "that it be"], hint: "Present subjunctive of estar — the temporary half of the ser/estar pair u12 taught. Espero que esteja bem is the sentence every Portuguese email opens with." },
        { id: "pt-u69l1-tenha", type: "vocab", front: "tenha", reading: "tenha", meaning: "(that it) have", example: { jp: "Espero que tenha tempo para almoçar amanhã, porque quero falar da mudança com o senhor.", en: "I hope you have time for lunch tomorrow, because I want to talk to you about the move." }, drill: { jp: "Espero que tenha tempo amanhã", en: "I hope you have time tomorrow" }, accept: ["have", "has", "that it have"], hint: "Present subjunctive of ter. Note it doubles as the polite \"you\" form: espero que tenha um bom dia is said to a stranger, tenhas to a friend." },
        { id: "pt-u69l1-faca", type: "vocab", front: "faça", reading: "faca", meaning: "(that it) do", example: { jp: "Quero que faça o trabalho sem pressa, além disso ninguém precisa disto antes de sexta.", en: "I want you to do the work without rushing; what is more, nobody needs this before Friday." }, drill: { jp: "Quero que faça o trabalho sem pressa", en: "I want you to do the work without rushing" }, accept: ["do", "does", "make", "that it do"], hint: "Present subjunctive of fazer, from the eu form faço. The ç keeps the s sound, and the ASCII answer key is faca — the same letters as a faca, the knife in u15, though the words sound nothing alike." },
      ],
    },
    {
      id: "pt-u69l2",
      unit: 69,
      lesson: 2,
      title: "A dúvida e a possibilidade",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say that something may or may not be true, and doubt what somebody else said, without committing yourself.",
      items: [
        { id: "pt-u69l2-epossivelque", type: "vocab", front: "é possível que", reading: "epossivelque", meaning: "it is possible that", example: { jp: "É possível que a reunião mude para a próxima semana, por isso ainda não comprei o bilhete.", en: "It is possible that the meeting will move to next week, so I have not bought the ticket yet." }, drill: { jp: "É possível que a reunião mude", en: "It is possible that the meeting will move" }, accept: ["it is possible", "maybe", "it may be that", "possibly"], hint: "Any é + adjective + que takes the subjunctive: é possível, é importante, é melhor, é pena. Talvez (u28) does the same job in one word and also takes it: talvez venha." },
        { id: "pt-u69l2-podeserque", type: "vocab", front: "pode ser que", reading: "podeserque", meaning: "it may be that", example: { jp: "Pode ser que ele esteja doente, porque não disse nada a ninguém desde ontem.", en: "It may be that he is ill, because he has not said anything to anybody since yesterday." }, drill: { jp: "Pode ser que ele esteja doente", en: "It may be that he is ill" }, accept: ["maybe", "it may be", "it might be", "perhaps"], hint: "The spoken favourite — more common in conversation than é possível que, and softer than talvez." },
        { id: "pt-u69l2-duvidoque", type: "vocab", front: "duvido que", reading: "duvidoque", meaning: "I doubt that", example: { jp: "Duvido que o preço baixe este ano, no entanto as pessoas dizem outra coisa na televisão.", en: "I doubt the price will come down this year; people on television, however, say something else." }, drill: { jp: "Duvido que o preço baixe este ano", en: "I doubt the price will come down this year" }, accept: ["I doubt", "I doubt that", "I don't think"], hint: "Doubt takes the subjunctive; certainty does not. Compare duvido que seja verdade with sei que é verdade — the second is indicative, because you are sure." },
        { id: "pt-u69l2-possa", type: "vocab", front: "possa", reading: "possa", meaning: "(that it) can", example: { jp: "É possível que ela não possa ir ao jantar, porque trabalha até tarde às quintas.", en: "It is possible that she cannot go to the dinner, because she works late on Thursdays." }, drill: { jp: "É possível que ela não possa ir", en: "It is possible that she cannot go" }, accept: ["can", "may", "be able", "that it can"], hint: "Present subjunctive of poder. Also the polite request: quando possa, when you can — the register units come back to this." },
        { id: "pt-u69l2-saiba", type: "vocab", front: "saiba", reading: "saiba", meaning: "(that it) know", example: { jp: "Duvido que ele saiba a verdade, mas ninguém quer ser a pessoa que lhe conta.", en: "I doubt he knows the truth, but nobody wants to be the person who tells him." }, drill: { jp: "Duvido que ele saiba a verdade", en: "I doubt he knows the truth" }, accept: ["know", "knows", "that it know"], hint: "Present subjunctive of saber — irregular, from the eu form sei. Que eu saiba, \"as far as I know\", is the fixed phrase you will use constantly." },
        { id: "pt-u69l2-va", type: "vocab", front: "vá", reading: "va", meaning: "(that it) go", example: { jp: "Pode ser que eu vá ao Porto na sexta, além disso ainda tenho de falar com a minha irmã.", en: "It may be that I will go to Porto on Friday; what is more, I still have to talk to my sister." }, drill: { jp: "Pode ser que eu vá ao Porto", en: "It may be that I go to Porto" }, accept: ["go", "goes", "that it go"], hint: "Present subjunctive of ir. On its own, vá! is also \"go on!\" or \"come on!\" — one of the most-heard words in Portugal." },
      ],
    },
    {
      id: "pt-u69l3",
      unit: 69,
      lesson: 3,
      title: "As conjunções do conjuntivo",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Join two clauses with although, so that, before, until — the conjunctions that always force the subjunctive.",
      items: [
        { id: "pt-u69l3-embora", type: "vocab", front: "embora", reading: "embora", meaning: "although", example: { jp: "Embora a casa seja pequena, ficámos com ela por causa do preço.", en: "Although the house is small, we took it because of the price." }, drill: { jp: "Embora a casa seja pequena ficámos com ela", en: "Although the house is small we took it" }, accept: ["although", "even though", "though"], hint: "Always subjunctive, never indicative. Second life worth knowing: ir embora is to leave — vou embora agora. Same word, unrelated job." },
        { id: "pt-u69l3-paraque", type: "vocab", front: "para que", reading: "paraque", meaning: "so that (in order that)", example: { jp: "Vou dar a chave à vizinha para que ela possa entrar, porque volto só no domingo à noite.", en: "I am going to give the key to the neighbour so that she can get in, because I only come back on Sunday night." }, drill: { jp: "Dou a chave para que ela possa entrar", en: "I give the key so that she can get in" }, accept: ["so that", "in order that", "so"], hint: "Two subjects, so que plus the subjunctive. One subject and you use para plus the infinitive instead: saí cedo para chegar a tempo. Portuguese is strict about this split." },
        { id: "pt-u69l3-antesque", type: "vocab", front: "antes que", reading: "antesque", meaning: "before (conjunction)", example: { jp: "Quero falar com ele antes que a notícia saia no jornal, por isso vou ligar esta noite.", en: "I want to talk to him before the news comes out in the paper, so I am going to call tonight." }, drill: { jp: "Quero falar antes que a notícia saia", en: "I want to talk before the news comes out" }, accept: ["before", "before that"], hint: "Antes que + subjunctive when the two subjects differ; antes de + infinitive when they are the same (saí antes de comer). u28's antes on its own is the plain adverb." },
        { id: "pt-u69l3-ateque", type: "vocab", front: "até que", reading: "ateque", meaning: "until", example: { jp: "Vou esperar aqui até que eles cheguem, embora já sejam quase dez horas.", en: "I am going to wait here until they arrive, although it is already almost ten o'clock." }, drill: { jp: "Vou esperar até que eles cheguem", en: "I am going to wait until they arrive" }, accept: ["until", "till"], hint: "Subjunctive when the arrival is still ahead — the ordinary case. Looking BACK at something already over, careful EP writes esperei até que chegassem, with u70's imperfect subjunctive; everyday speech sidesteps both with até eles chegarem." },
        { id: "pt-u69l3-semque", type: "vocab", front: "sem que", reading: "semque", meaning: "without (someone doing)", example: { jp: "Saiu da reunião sem que ninguém visse, mas as pessoas falaram disso o dia todo.", en: "He left the meeting without anybody seeing, but people talked about it all day." }, drill: { jp: "Saiu sem que ninguém visse", en: "He left without anybody seeing" }, accept: ["without", "without anyone"], hint: "Sem que needs a second subject and a subjunctive; sem + infinitive when it is the same person: saiu sem falar. The example uses the imperfect subjunctive, which is unit 70." },
        { id: "pt-u69l3-desdeque", type: "vocab", front: "desde que", reading: "desdeque", meaning: "as long as", example: { jp: "Podem ficar cá desde que avisem antes, porque o quarto é pequeno para três pessoas.", en: "They can stay here as long as they let us know in advance, because the room is small for three people." }, drill: { jp: "Podem ficar desde que avisem antes", en: "They can stay as long as they let us know first" }, accept: ["as long as", "provided that", "so long as", "since"], hint: "TWO MEANINGS, split by mood. With the subjunctive it is the condition — as long as. With the indicative it is time — desde que chegou, since he arrived. The mood is the only signal." },
      ],
    },
    {
      id: "pt-u69l4",
      unit: 69,
      lesson: 4,
      title: "Pedidos e o presente contínuo",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Ask somebody to do something in the subjunctive, and say what is happening right now the way Portugal says it.",
      items: [
        { id: "pt-u69l4-diga", type: "vocab", front: "diga", reading: "diga", meaning: "(that it) say", example: { jp: "Quero que ele diga a verdade à irmã, embora isso vá criar uma discussão enorme.", en: "I want him to tell his sister the truth, although that is going to create a huge argument." }, drill: { jp: "Quero que ele diga a verdade", en: "I want him to tell the truth" }, accept: ["say", "says", "tell", "that it say"], hint: "Present subjunctive of dizer. On its own, Diga? is how a Portuguese shop assistant or a person answering the phone says \"yes, go ahead\" — you will hear it daily." },
        { id: "pt-u69l4-venha", type: "vocab", front: "venha", reading: "venha", meaning: "(that it) come", example: { jp: "Espero que venha muita família à estreia, por isso pedimos uma sala maior.", en: "I hope a lot of family come to the premiere, so we asked for a bigger room." }, drill: { jp: "Espero que venha muita família", en: "I hope a lot of family come" }, accept: ["come", "comes", "that it come"], hint: "Present subjunctive of vir. Venha cá is \"come here\" said politely to an adult; vem cá is the tu version." },
        { id: "pt-u69l4-ponha", type: "vocab", front: "ponha", reading: "ponha", meaning: "(that it) put", example: { jp: "É importante que ponha o nome no papel, porque depois ninguém sabe de quem é.", en: "It is important that you put your name on the paper, because afterwards nobody knows whose it is." }, drill: { jp: "É importante que ponha o nome no papel", en: "It is important that you put your name on the paper" }, accept: ["put", "puts", "place", "that it put"], hint: "Present subjunctive of pôr. The infinitive pôr carries a circumflex to keep it apart from por (u29) — and this corpus never cards it for exactly that reason; the subjunctive form has no such problem." },
        { id: "pt-u69l4-queira", type: "vocab", front: "queira", reading: "queira", meaning: "(that it) want", example: { jp: "Duvido que ela queira mudar de emprego agora, embora o salário seja melhor na outra empresa.", en: "I doubt she wants to change jobs now, although the salary is better at the other company." }, drill: { jp: "Duvido que ela queira mudar de emprego", en: "I doubt she wants to change jobs" }, accept: ["want", "wants", "that it want"], hint: "Present subjunctive of querer. Queira sentar-se, on a sign or from a receptionist, is the most formal \"please sit down\" Portuguese has." },
        { id: "pt-u69l4-haja", type: "vocab", front: "haja", reading: "haja", meaning: "(that there) be", example: { jp: "Espero que haja bilhetes no comboio das oito, porque a estrada fica cheia às segundas.", en: "I hope there are tickets for the eight o'clock train, because the road gets full on Mondays." }, drill: { jp: "Espero que haja bilhetes no comboio", en: "I hope there are tickets for the train" }, accept: ["there be", "there is", "there are", "that there be"], hint: "Present subjunctive of haver — the there-is verb behind há. Always singular, whatever follows: espero que haja lugares, never hajam. Haja paciência! is the national sigh." },
        { id: "pt-u69l4-estara", type: "vocab", front: "estar a", reading: "estara", meaning: "to be (doing)", example: { jp: "Ele deve estar a trabalhar agora, por isso é melhor ligar depois das seis.", en: "He must be working now, so it is better to call after six." }, drill: { jp: "Ele deve estar a trabalhar agora", en: "He must be working now" }, accept: ["to be doing", "be in the middle of", "to be -ing"], hint: "THE most Portuguese construction there is: estar a + infinitive for what is happening right now. Estou a comer, estás a ouvir? Brazil says estou comendo with a gerund; Portugal does not. u13 gave you estou a falar as a fixed chunk — this is the rule behind it, and it works with any verb." },
      ],
    },
  ],
};
