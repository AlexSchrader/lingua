// PT Unit 29 — As palavras de ligação — A2
// Portuguese A2, block 1 (units 21-30). Conventions, the pt-PT corpus decision and
// the Spanish-trap policy are in the header of unit1.js and bind this file too.
// Every vocab item carries a `drill` authored inline beside its `example`
// (RUNBOOK §4): 3-8 tokens, no punctuation, the item's own front inside it as a
// whole word. Verified against cardRouting.js canCloze/canSentence, not the lint.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT29 = {
  id: "pt-u29",
  lang: "pt",
  title: "As palavras de ligação",
  order: 29,
  stage: "a2",
  lessons: [
    {
      id: "pt-u29l1",
      unit: 29,
      lesson: 1,
      title: "Por e para",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Choose between por and para — the distinction that decides whether you mean a cause or a destination — and give a reason.",
      items: [
        { id: "pt-u29l1-por", type: "vocab", front: "por", reading: "por", meaning: "by", example: { jp: "Passei por Lisboa a caminho do Porto e parei para almoçar.", en: "I passed through Lisbon on the way to Porto and stopped for lunch." }, drill: { jp: "Passei por Lisboa de comboio", en: "I passed through Lisbon by train" }, accept: ["through", "because of", "per", "for"], hint: "POR. It marks the route, the cause and the exchange — por causa de, because of. It fuses with articles: por + o = pelo, por + a = pela." },
        { id: "pt-u29l1-para", type: "vocab", front: "para", reading: "para", meaning: "for", example: { jp: "Este comboio vai para o Porto e sai da linha três.", en: "This train goes to Porto and leaves from platform three." }, drill: { jp: "Este comboio vai para o Porto", en: "This train goes to Porto" }, accept: ["to", "towards", "in order to", "so as to"], hint: "PA-ra. It marks the destination and the purpose. The rule of thumb: por is why or through, para is where to or what for. Portuguese never merges them." },
        { id: "pt-u29l1-porque", type: "vocab", front: "porque", reading: "porque", meaning: "because", example: { jp: "Não fui à praia porque estava a chover desde manhã.", en: "I didn't go to the beach because it had been raining since morning." }, drill: { jp: "Não fui porque estava a chover", en: "I didn't go because it was raining" }, accept: ["cause", "since", "as"], hint: "pur-KE, one word, no accent — that is the ANSWER word. It is por plus que, literally for that." },
        { id: "pt-u29l1-porqueq", type: "vocab", front: "porquê", reading: "porque", meaning: "why", example: { jp: "Não percebi porquê, mas o voo foi cancelado outra vez.", en: "I didn't understand why, but the flight was cancelled again." }, drill: { jp: "Porquê tanto trabalho hoje", en: "Why so much work today" }, accept: ["what for", "how come", "for what reason"], hint: "pur-KE with the stress marked. Portuguese splits four spellings: por que and porquê ask, porque answers, and o porquê is the noun, the reason." },
        { id: "pt-u29l1-portanto", type: "vocab", front: "portanto", reading: "portanto", meaning: "therefore", example: { jp: "Estava atrasado, portanto apanhei um táxi em vez do metro.", en: "I was late, therefore I took a taxi instead of the metro." }, drill: { jp: "Estava atrasado portanto apanhei um táxi", en: "I was late so I took a taxi" }, accept: ["so", "thus", "hence"], hint: "por-TAN-tu, nasal. It draws a conclusion. Do not confuse it with a porta from Unit 15 — the resemblance is an accident of spelling." },
        { id: "pt-u29l1-pois", type: "vocab", front: "pois", reading: "pois", meaning: "since", example: { jp: "Não te preocupes, pois ainda temos muito tempo.", en: "Don't worry, since we still have plenty of time." }, drill: { jp: "Não te preocupes pois temos tempo", en: "Don't worry since we have time" }, accept: ["because", "as", "well then"], hint: "POYSH. In Portugal it is also a conversational filler meaning right or indeed — pois é is agreement, and you will hear it constantly." },
      ],
    },
    {
      id: "pt-u29l2",
      unit: 29,
      lesson: 2,
      title: "As contrações no plural",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the plural contractions A1 left out — dos, das, nos, nas, aos — so you stop saying de os and em as.",
      items: [
        { id: "pt-u29l2-dos", type: "vocab", front: "dos", reading: "dos", meaning: "of the", example: { jp: "Os livros dos alunos ficaram na sala depois da aula.", en: "The students' books stayed in the room after the class." }, drill: { jp: "Os livros dos alunos ficaram", en: "The students' books stayed" }, accept: ["from the", "of the (masculine plural)", "belonging to the"], hint: "de plus os. Unit 12 taught the six singular contractions and stopped; this lesson finishes the set. The fusion is compulsory — de os is never written." },
        { id: "pt-u29l2-das", type: "vocab", front: "das", reading: "das", meaning: "of the (feminine)", example: { jp: "As flores das árvores caem todas em outubro.", en: "The blossom of the trees all falls in October." }, drill: { jp: "As flores das árvores são bonitas", en: "The blossom of the trees is beautiful" }, accept: ["from the", "of the (feminine plural)"], hint: "de plus as. Note this is the exact word that caused a defect in the A1 band — it was used in a sentence two units before anything taught it." },
        { id: "pt-u29l2-nos", type: "vocab", front: "nos", reading: "nos", meaning: "in the", example: { jp: "Os documentos estão nos armários da sala ao lado.", en: "The documents are in the cupboards in the next room." }, drill: { jp: "Os documentos estão nos armários", en: "The documents are in the cupboards" }, accept: ["at the", "on the", "in the (masculine plural)"], hint: "em plus os. Careful — nos is also the object pronoun meaning us, and nós with an accent is we. Three words, one spelling, and only the accent separates the last." },
        { id: "pt-u29l2-nas", type: "vocab", front: "nas", reading: "nas", meaning: "in the (feminine)", example: { jp: "Nas férias do verão fico sempre em casa dos meus avós.", en: "In the summer holidays I always stay at my grandparents' house." }, drill: { jp: "Nas férias fico em casa", en: "In the holidays I stay at home" }, accept: ["at the", "on the", "in the (feminine plural)"], hint: "em plus as. It fuses exactly like nos, and the same rule covers num and numa when the article is indefinite." },
        { id: "pt-u29l2-aos", type: "vocab", front: "aos", reading: "aos", meaning: "to the", example: { jp: "Aos domingos vou ao mercado com a minha mãe.", en: "On Sundays I go to the market with my mother." }, drill: { jp: "Aos domingos vou ao mercado", en: "On Sundays I go to the market" }, accept: ["at the", "on the", "to the (masculine plural)"], hint: "a plus os. With days of the week it means every — aos domingos is on Sundays generally, where no domingo would be one particular Sunday." },
        { id: "pt-u29l2-num", type: "vocab", front: "num", reading: "num", meaning: "in a", example: { jp: "Moro num prédio novo perto da estação do metro.", en: "I live in a new building near the metro station." }, drill: { jp: "Moro num prédio novo", en: "I live in a new building" }, accept: ["in one", "into a", "at a"], hint: "em plus um. The indefinite article contracts too: num, numa, nuns, numas. Portuguese fuses these without exception, so em um is simply not written." },
      ],
    },
    {
      id: "pt-u29l3",
      unit: 29,
      lesson: 3,
      title: "Outros verbos úteis",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Use the everyday verbs that connect a sentence to what you actually need — needing, helping, remembering and changing.",
      items: [
        { id: "pt-u29l3-tomar", type: "vocab", front: "tomar", reading: "tomar", meaning: "to take", example: { jp: "Tomo café ao pequeno-almoço e um chá à noite.", en: "I have coffee at breakfast and a tea in the evening." }, drill: { jp: "Tomar café ao pequeno-almoço", en: "Having coffee at breakfast" }, accept: ["take", "to have", "have", "to drink"], hint: "Portuguese uses tomar for what you consume — tomar café, tomar um duche, tomar um remédio. For picking something up you want apanhar or levar instead." },
        { id: "pt-u29l3-precisar", type: "vocab", front: "precisar", reading: "precisar", meaning: "to need", example: { jp: "Preciso de dinheiro para o bilhete do comboio.", en: "I need money for the train ticket." }, drill: { jp: "Precisar de mais dinheiro hoje", en: "Needing more money today" }, accept: ["need", "to require", "require"], hint: "It drags a DE behind it, always: preciso DE ajuda, never preciso ajuda. Portuguese marks the need as need OF something." },
        { id: "pt-u29l3-ajudar", type: "vocab", front: "ajudar", reading: "ajudar", meaning: "to help", example: { jp: "O meu irmão ajudou-me a arrumar a casa toda.", en: "My brother helped me tidy the whole house." }, drill: { jp: "Ajudar a família em casa", en: "Helping the family at home" }, accept: ["help", "to assist", "assist"], hint: "ajudo, ajudas, ajuda. Note the pronoun on the back when someone helps you — ajudou-me. A ajuda is the noun, help itself." },
        { id: "pt-u29l3-esquecer", type: "vocab", front: "esquecer", reading: "esquecer", meaning: "to forget", example: { jp: "Esqueci o telemóvel em casa e não pude ligar a ninguém.", en: "I forgot my phone at home and couldn't call anyone." }, drill: { jp: "Esquecer o telemóvel em casa", en: "Forgetting the phone at home" }, accept: ["forget", "to forget about"], hint: "esqueço, esqueces, esquece. Very often reflexive with de — esqueci-me de ti. Do not confuse it with esquerda, left, from Unit 7; they share five letters and nothing else." },
        { id: "pt-u29l3-lembrar", type: "vocab", front: "lembrar", reading: "lembrar", meaning: "to remember", example: { jp: "Lembro-me bem do dia em que cheguei a Lisboa.", en: "I remember well the day I arrived in Lisbon." }, drill: { jp: "Lembrar o nome do professor", en: "Remembering the teacher's name" }, accept: ["remember", "to recall", "recall", "remind"], hint: "Reflexive with de for remembering — lembro-me DE ti. Without the pronoun it means to remind: lembra-me de comprar pão." },
        { id: "pt-u29l3-mudar", type: "vocab", front: "mudar", reading: "mudar", meaning: "to change", example: { jp: "Mudei de casa em janeiro e agora moro perto do rio.", en: "I moved house in January and now I live near the river." }, drill: { jp: "Mudar de casa em janeiro", en: "Moving house in January" }, accept: ["change", "to move", "move", "to switch"], hint: "mudo, mudas, muda. Mudar DE is to change one thing for another — mudar de casa, de roupa, de ideia. A mudança is a house move." },
      ],
    },
    {
      id: "pt-u29l4",
      unit: 29,
      lesson: 4,
      title: "Comparar",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Compare two things directly — bigger than, as much as, less than, both — using the frames Portuguese actually requires.",
      items: [
        { id: "pt-u29l4-doque", type: "vocab", front: "do que", reading: "doque", meaning: "than", example: { jp: "O comboio é mais rápido do que o autocarro mas custa mais.", en: "The train is faster than the bus but costs more." }, drill: { jp: "O comboio é melhor do que", en: "The train is better than" }, accept: ["than (comparison)", "compared to"], hint: "The comparison frame is mais or menos plus adjective plus DO QUE. Portuguese can shorten it to que alone, but do que is what you will hear said." },
        { id: "pt-u29l4-tao", type: "vocab", front: "tão", reading: "tao", meaning: "as", example: { jp: "O centro comercial não é tão caro como o do Porto.", en: "The shopping centre isn't as expensive as the one in Porto." }, drill: { jp: "Não é tão caro como isso", en: "It is not as expensive as that" }, accept: ["so", "such"], hint: "TAWNG, nasal. The equality frame is tão plus adjective plus COMO. On its own before an adjective it means so — está tão frio." },
        { id: "pt-u29l4-tanto", type: "vocab", front: "tanto", reading: "tanto", meaning: "so much", example: { jp: "Não comas tanto ao jantar, depois não dormes bem.", en: "Don't eat so much at dinner, afterwards you don't sleep well." }, drill: { jp: "Não comas tanto ao jantar", en: "Don't eat so much at dinner" }, accept: ["as much", "so many", "that much"], hint: "TAN-tu, nasal. With a noun it agrees — tanta água, tantos livros. Tão goes with adjectives, tanto with nouns and verbs, and mixing them is the usual slip." },
        { id: "pt-u29l4-menos", type: "vocab", front: "menos", reading: "menos", meaning: "less", example: { jp: "Este mês gastei menos dinheiro porque fui menos vezes ao restaurante.", en: "This month I spent less money because I went to the restaurant fewer times." }, drill: { jp: "Este mês gastei menos dinheiro", en: "This month I spent less money" }, accept: ["fewer", "least", "minus"], hint: "ME-nush. The mirror of mais from Unit 1, and it takes the same do que frame. Pelo menos means at least." },
        { id: "pt-u29l4-igual", type: "vocab", front: "igual", reading: "igual", meaning: "equal", example: { jp: "A minha mochila é igual à tua, só muda a cor.", en: "My backpack is the same as yours, only the colour is different." }, drill: { jp: "A mochila é igual à minha", en: "The backpack is the same as mine" }, accept: ["the same", "identical", "alike"], hint: "i-GWAL. Igual A is the same as — note the à, which is the fused a plus a from Unit 12. Plural iguais." },
        { id: "pt-u29l4-ambos", type: "vocab", front: "ambos", reading: "ambos", meaning: "both", example: { jp: "Ambos os irmãos estudam na mesma universidade em Coimbra.", en: "Both brothers study at the same university in Coimbra." }, drill: { jp: "Ambos os irmãos estudam em Coimbra", en: "Both brothers study in Coimbra" }, accept: ["the two", "both of them", "either"], hint: "AM-bush, nasal. It agrees: ambas as irmãs. In speech Portugal more often says os dois, and ambos keeps a slightly written feel." },
      ],
    },
  ],
};
