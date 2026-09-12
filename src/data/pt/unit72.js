// PT Unit 72 — Tratar por tu ou por você (slot: register-1) — B1
// ─────────────────────────────────────────────────────────────────────────────
// REGISTER IS NOT OPTIONAL HERE, and the lead ruled it stays in full. The
// blueprint calls register the strand most likely to be skipped; Portuguese has
// MORE of it to teach than Spanish, not less, so copying es B1's "tú or usted +
// courtesy" pair would under-serve the language.
//
// What A1 left open, deliberately, and this unit closes:
//   - u2 taught tu, você, o senhor and como está / como estás side by side
//     without ever saying which one a stranger gets.
//   - u39 taught `tratar` and noted that tratar por tu or por você is decided in
//     the first ten seconds of meeting somebody — and then left the decision
//     untaught.
//
// RETITLED by the crew lead 2026-09-12, from "Tratar por tu ou por si". The
// content gate found that `si` / `consigo` appears on no card, in no example and
// in no hint anywhere in the pt corpus, so the old title promised a form the unit
// never taught. `si`/`consigo` is the commonest pt-PT polite address after
// o senhor and IS worth a card — it is deferred, not rejected, and the deferral
// is deliberate: adding it here would need a 25th card in a 24-card unit and a
// second reflexive sense (`si` = himself/herself) the band has no room for.
// Logged for the next pt band. The one place the corpus had quietly USED it
// untaught (u69l1 `falar da mudança consigo`) now says `com o senhor`.
//
// THE FACT THAT MATTERS MOST, and the reason a Brazilian-trained learner sounds
// wrong in Lisbon: `você` is NOT the neutral polite form in Portugal. To a
// stranger it can read as cold or presumptuous. The polite default is o senhor /
// a senhora, or — most Portuguese of all — the person's own name used in the
// third person: "O João quer um café?" said TO João. That construction has no
// English or Spanish equivalent. It is MODELLED in the examples of the two
// tratar cards in lesson 1 (which use it rather than describing it) and named
// in the hints, rather than being given an invented front of its own — a proper
// name is not a vocabulary card. NOTE the honest limit: a learner drills fronts
// and drills, not examples, so this construction is exposed rather than
// practised. If the lead wants it drilled it needs a card of its own, which
// means choosing a name to card and living with it.
//
// MESOCLISIS (dar-lhe-ei, far-se-á) is DEFERRED TO B2 by decision, not
// oversight: it is written-formal, nearly extinct in speech, and it needs the
// clitic rule from u71 to be solid first.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT72 = {
  id: "pt-u72",
  lang: "pt",
  title: "Tratar por tu ou por você",
  order: 72,
  stage: "b1",
  lessons: [
    {
      id: "pt-u72l1",
      unit: 72,
      lesson: 1,
      title: "Tu, você e o senhor",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Choose how to address somebody in Portugal — and know why 'você' is not the safe option an English speaker expects.",
      items: [
        { id: "pt-u72l1-tratarportu", type: "vocab", front: "tratar por tu", reading: "tratarportu", meaning: "to address as tu", example: { jp: "Podemos tratar por tu, porque trabalhamos juntos há dois anos; com a vizinha continuo a dizer «A Dona Maria precisa de ajuda?».", en: "We can use tu with each other, because we have worked together for two years; with the neighbour I still say \"Does Dona Maria need help?\", in the third person." }, drill: { jp: "Podemos tratar por tu", en: "We can address each other as tu" }, accept: ["address as tu", "use tu", "be on first-name terms", "speak informally"], hint: "The moment itself has a phrase: podemos tratar-nos por tu? — shall we switch to tu? In Portugal the older or senior person offers it, and until they do you stay formal." },
        { id: "pt-u72l1-tratarporvoce", type: "vocab", front: "tratar por você", reading: "tratarporvoce", meaning: "to address as você", example: { jp: "Em Portugal, tratar por você pode ser frio com um desconhecido, por isso dizemos antes «O João quer um café?», usando o nome da pessoa.", en: "In Portugal, using você can sound cold with a stranger, so instead we say \"Does João want a coffee?\", using the person's own name in the third person." }, drill: { jp: "Tratar por você pode ser frio", en: "Using você can sound cold" }, accept: ["address as você", "use você", "speak formally"], hint: "THE trap for anyone who learned Brazilian Portuguese, where você is simply \"you\". In Portugal it sits awkwardly between tu and o senhor: fine with a colleague you do not know well, cold with a stranger, rude to somebody older." },
        { id: "pt-u72l1-osenhordoutor", type: "vocab", front: "o senhor doutor", reading: "osenhordoutor", meaning: "sir (with a degree)", example: { jp: "O senhor doutor pode ver as análises hoje, ou é melhor voltar na próxima semana?", en: "Can you see the tests today, doctor, or is it better to come back next week?" }, drill: { jp: "O senhor doutor pode ver as análises", en: "Can the doctor see the tests" }, accept: ["doctor", "sir", "the doctor"], hint: "Portugal uses titles far more than English does — doutor for anyone with a degree, engenheiro, arquiteto, professor. Said TO the person, in the third person: o senhor doutor quer…? Dropping the title where it is expected reads as a snub." },
        { id: "pt-u72l1-amenina", type: "vocab", front: "a menina", reading: "amenina", meaning: "miss", example: { jp: "A menina já foi atendida, ou quer esperar mais um bocadinho?", en: "Have you been served, miss, or would you like to wait a little longer?" }, drill: { jp: "A menina já foi atendida", en: "Has the young lady been served" }, accept: ["miss", "young lady", "the girl"], hint: "Used to address a younger woman in a shop or an office, in the third person like every polite form here. It is ordinary in Portugal and can sound dated or off elsewhere — worth recognising even if you never use it." },
        { id: "pt-u72l1-agente", type: "vocab", front: "a gente", reading: "agente", meaning: "we (informal)", example: { jp: "A gente vai ao café depois do trabalho, se quiseres ir também.", en: "We are going to the café after work, if you want to go too." }, drill: { jp: "A gente vai ao café depois", en: "We are going to the café afterwards" }, accept: ["we", "us", "people"], hint: "Means WE and takes a singular verb — a gente VAI, never a gente vamos. Informal but everywhere in speech in Portugal — this is not a Brazilian import; in writing use nós. Do not confuse it with toda a gente (everybody), which the course has used since u34 and which is a different expression." },
        { id: "pt-u72l1-opessoal", type: "vocab", front: "o pessoal", reading: "opessoal", meaning: "the gang", example: { jp: "O pessoal do escritório vai jantar fora na sexta, e a gente fala da hora amanhã.", en: "The office lot are going out for dinner on Friday, and we will talk about the time tomorrow." }, drill: { jp: "O pessoal do escritório vai jantar fora", en: "The office lot are going out for dinner" }, accept: ["the gang", "everyone", "the people", "the staff"], hint: "A friendly collective for a group you belong to — o pessoal do trabalho, o pessoal lá de casa. Also the staff of a company in a formal sense, which is the same word wearing a tie." },
      ],
    },
    {
      id: "pt-u72l2",
      unit: 72,
      lesson: 2,
      title: "Pedir com jeito",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Ask a stranger for something without sounding blunt — the four openings Portugal actually uses.",
      items: [
        { id: "pt-u72l2-sefazfavor", type: "vocab", front: "se faz favor", reading: "sefazfavor", meaning: "please (in a shop or cafe)", example: { jp: "Um café e um copo de água, se faz favor.", en: "A coffee and a glass of water, please." }, drill: { jp: "Um café e água se faz favor", en: "A coffee and water please" }, accept: ["please", "if you please"], hint: "The Portuguese \"please\" you will hear in every café — more common in Portugal than por favor (u2), which is the one textbooks teach. Goes at the END of the request, after a small pause." },
        { id: "pt-u72l2-facafavor", type: "vocab", front: "faça favor", reading: "facafavor", meaning: "go ahead", example: { jp: "Faça favor, o senhor estava à frente e eu não tenho pressa nenhuma.", en: "Go ahead, you were in front and I am in no hurry at all." }, drill: { jp: "Faça favor o senhor estava à frente", en: "Go ahead you were in front" }, accept: ["go ahead", "after you", "please do", "here you are"], hint: "The giving half of the same phrase: faça favor is \"please, go on\" — holding a door, letting somebody pass, inviting them to speak. Faz favor is the tu version." },
        { id: "pt-u72l2-importasede", type: "vocab", front: "importa-se de", reading: "importasede", meaning: "would you mind", example: { jp: "Importa-se de fechar a janela? É que o barulho da rua não deixa ouvir nada.", en: "Would you mind closing the window? The noise from the street makes it impossible to hear anything." }, drill: { jp: "Importa-se de fechar a janela", en: "Would you mind closing the window" }, accept: ["would you mind", "do you mind", "could you"], hint: "The politest ordinary request in the language, and it uses the clitic placement of u71: importa-se, enclitic. Answer it with claro que não or à vontade — \"not at all\" — because yes would mean you DO mind." },
        { id: "pt-u72l2-sabedizerme", type: "vocab", front: "sabe dizer-me", reading: "sabedizerme", meaning: "could you tell me", example: { jp: "Sabe dizer-me onde fica a estação, se faz favor? Estou à procura há vinte minutos.", en: "Could you tell me where the station is, please? I have been looking for twenty minutes." }, drill: { jp: "Sabe dizer-me onde fica a estação", en: "Could you tell me where the station is" }, accept: ["could you tell me", "do you know", "can you tell me"], hint: "Portugal asks with SABER, not poder — sabe dizer-me, literally \"do you know how to tell me\". Pode dizer-me is also correct and slightly more direct." },
        { id: "pt-u72l2-desculpeincomodar", type: "vocab", front: "desculpe incomodar", reading: "desculpeincomodar", meaning: "sorry to bother you", example: { jp: "Desculpe incomodar, mas o senhor esqueceu o telemóvel em cima da mesa.", en: "Sorry to bother you, but you forgot your phone on the table." }, drill: { jp: "Desculpe incomodar mas esqueceu o telemóvel", en: "Sorry to bother you but you forgot the phone" }, accept: ["sorry to bother you", "sorry to disturb", "excuse me"], hint: "Opens an interruption. u2 gave you desculpe (sorry) and com licença (excuse me, passing through); this is the third, for taking somebody's time." },
        { id: "pt-u72l2-comcerteza", type: "vocab", front: "com certeza", reading: "comcerteza", meaning: "certainly", example: { jp: "Com certeza, o senhor pode esperar aqui e eu chamo a médica.", en: "Certainly, you can wait here and I will call the doctor." }, drill: { jp: "Com certeza pode esperar aqui", en: "Certainly you can wait here" }, accept: ["certainly", "of course", "sure", "absolutely"], hint: "The warm yes. Claro (u2) is the neutral one; com certeza adds willingness, which is why it is what a shop or an office says back to you." },
      ],
    },
    {
      id: "pt-u72l3",
      unit: 72,
      lesson: 3,
      title: "Suavizar com o imperfeito",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Soften a request by moving it into the past — the trick Portuguese uses where English says 'I would like'.",
      items: [
        { id: "pt-u72l3-queria", type: "vocab", front: "queria", reading: "queria", meaning: "I would like (polite, ordering)", example: { jp: "Queria dois bilhetes para o comboio das oito, se faz favor.", en: "I would like two tickets for the eight o'clock train, please." }, drill: { jp: "Queria dois bilhetes para o comboio", en: "I would like two tickets for the train" }, accept: ["I would like", "I'd like", "I wanted"], hint: "THE counter phrase in Portugal. Quero dois bilhetes is correct and blunt; queria dois bilhetes is what people actually say. The imperfect moves the want one step away from you and that distance IS the politeness." },
        { id: "pt-u72l3-eracapazde", type: "vocab", front: "era capaz de", reading: "eracapazde", meaning: "could you possibly", example: { jp: "Era capaz de me ajudar com estas caixas? São mais pesadas do que parecem.", en: "Could you possibly help me with these boxes? They are heavier than they look." }, drill: { jp: "Era capaz de me ajudar com estas caixas", en: "Could you possibly help me with these boxes" }, accept: ["could you", "would you be able to", "could you possibly"], hint: "Same imperfect trick, one step softer than importa-se de. Note me ajudar, with the pronoun in front: after de, para and sem the pronoun often comes before the infinitive, but ajudar-me is equally correct — and after a it is the normal order (começou a fazê-lo)." },
        { id: "pt-u72l3-davamejeito", type: "vocab", front: "dava-me jeito", reading: "davamejeito", meaning: "it would suit me", example: { jp: "Dava-me jeito sair mais cedo na sexta, embora saiba que a reunião é longa.", en: "It would suit me to leave earlier on Friday, although I know the meeting is long." }, drill: { jp: "Dava-me jeito sair mais cedo", en: "It would suit me to leave earlier" }, accept: ["it would suit me", "it would help me", "that would be handy"], hint: "Jeito is knack, way, convenience — one of the most Portuguese nouns there is. Dava-me jeito is how you ask for a favour without asking: the imperfect again, and the enclitic pronoun again." },
        { id: "pt-u72l3-naofazmal", type: "vocab", front: "não faz mal", reading: "naofazmal", meaning: "it doesn't matter", example: { jp: "Não faz mal, a gente espera pelo próximo autocarro e chegamos na mesma.", en: "It doesn't matter, we will wait for the next bus and get there all the same." }, drill: { jp: "Não faz mal a gente espera", en: "It doesn't matter we will wait" }, accept: ["it doesn't matter", "never mind", "no harm done", "that's fine"], hint: "The standard reply to an apology, alongside não tem importância. Said quickly, and usually twice — não faz mal, não faz mal." },
        { id: "pt-u72l3-avontade", type: "vocab", front: "à vontade", reading: "avontade", meaning: "at ease", example: { jp: "Fique à vontade, a casa é pequena mas pode usar a cozinha sempre que quiser.", en: "Make yourself at home; the house is small but you can use the kitchen whenever you want." }, drill: { jp: "Fique à vontade e use a cozinha", en: "Make yourself at home and use the kitchen" }, accept: ["at ease", "make yourself at home", "comfortable", "feel free"], hint: "Fique à vontade to a guest, esteja à vontade in an office. Also \"go ahead, no pressure\": pergunte à vontade. A vontade on its own is the will or the urge." },
        { id: "pt-u72l3-daquiapouco", type: "vocab", front: "daqui a pouco", reading: "daquiapouco", meaning: "in a little while", example: { jp: "Daqui a pouco vou ter com eles ao café, se a reunião acabar a horas.", en: "In a little while I will go and meet them at the café, if the meeting finishes on time." }, drill: { jp: "Daqui a pouco vou ter com eles", en: "In a little while I will go and meet them" }, accept: ["in a little while", "shortly", "in a bit", "soon"], hint: "Daqui a + time is how Portuguese says \"in\" about the future — daqui a dez minutos, daqui a um mês. Há is for the past: há dez minutos, ten minutes ago." },
      ],
    },
    {
      id: "pt-u72l4",
      unit: 72,
      lesson: 4,
      title: "O diminutivo e a conversa",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Use the -inho ending the way Portugal really uses it — to soften, not to shrink — and hold an informal conversation.",
      items: [
        { id: "pt-u72l4-umbocadinho", type: "vocab", front: "um bocadinho", reading: "umbocadinho", meaning: "a little bit", example: { jp: "Espere um bocadinho, se faz favor, que o médico está com outro doente.", en: "Wait a little moment, please, the doctor is with another patient." }, drill: { jp: "Espere um bocadinho se faz favor", en: "Wait a little moment please" }, accept: ["a little bit", "a moment", "a little while", "a bit"], hint: "Bocado is a piece or a while; bocadinho is the softened version, and softening is the point. Portugal runs on this word: um bocadinho de sal, espera um bocadinho." },
        { id: "pt-u72l4-devagarinho", type: "vocab", front: "devagarinho", reading: "devagarinho", meaning: "nice and slowly", example: { jp: "Fale devagarinho, se faz favor, porque ainda estou a aprender português.", en: "Speak nice and slowly, please, because I am still learning Portuguese." }, drill: { jp: "Fale devagarinho se faz favor", en: "Speak nice and slowly please" }, accept: ["slowly", "nice and slowly", "gently"], hint: "THE single most useful card in this unit for a learner in Portugal. Devagar is slow; devagarinho asks for it kindly, and nobody minds being asked. Adverbs take -inho too, not just nouns." },
        { id: "pt-u72l4-cedinho", type: "vocab", front: "cedinho", reading: "cedinho", meaning: "nice and early", example: { jp: "Saímos cedinho no sábado, para chegar à praia antes do calor.", en: "We are leaving nice and early on Saturday, to get to the beach before the heat." }, drill: { jp: "Saímos cedinho no sábado", en: "We are leaving nice and early on Saturday" }, accept: ["nice and early", "early", "bright and early"], hint: "Cedo (u28) plus the same ending. The -inho here is not about size at all: it adds warmth to the plan, which is what the ending mostly does in Portugal." },
        { id: "pt-u72l4-tudobem", type: "vocab", front: "tudo bem", reading: "tudobem", meaning: "all good", example: { jp: "Tudo bem contigo? Há semanas que a gente não se vê.", en: "Everything all right with you? We have not seen each other for weeks." }, drill: { jp: "Tudo bem contigo", en: "Everything all right with you" }, accept: ["all good", "everything ok", "how's it going", "fine"], hint: "Question and answer in two words. Informal — with a stranger or an older person use como está (u2). Portugal also says está tudo? with the same meaning and even less effort." },
        { id: "pt-u72l4-fixe", type: "vocab", front: "fixe", reading: "fixe", meaning: "cool", example: { jp: "O filme foi fixe, mas o livro é bem melhor do que isso.", en: "The film was cool, but the book is much better than that." }, drill: { jp: "O filme de ontem foi fixe", en: "Yesterday's film was cool" }, accept: ["cool", "great", "nice", "good"], hint: "FEE-shuh. Portugal's own slang for cool — Brazil says legal, and using legal in Lisbon marks you instantly. Informal only: never to a stranger, never in writing that matters." },
        { id: "pt-u72l4-pa", type: "vocab", front: "pá", reading: "pa", meaning: "mate", example: { jp: "Ó pá, não faz mal, a gente vai na próxima semana.", en: "Hey mate, it doesn't matter, we will go next week." }, drill: { jp: "Ó pá não faz mal", en: "Hey mate it doesn't matter" }, accept: ["mate", "man", "dude", "hey"], hint: "The Portuguese filler-address, roughly \"mate\". Between friends of any gender, never upwards, never at work with somebody you do not know. Recognising it matters more than saying it — it is in every conversation you will overhear." },
      ],
    },
  ],
};
