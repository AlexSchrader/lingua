// PT Unit 76 — Os nomes abstratos (slot: vocabulary-3 B1) — B1
// ─────────────────────────────────────────────────────────────────────────────
// Third and last coverage unit of block 2, and the last unit of the block.
// Abstract nouns of CONDITION, CAUSE and CHOICE — the nouns a B1 speaker needs
// to talk about something that is not in the room.
//
// Kept clear of three neighbours on purpose:
//   - u40 "As palavras essenciais" already owns a ideia, o assunto, o facto, a
//     verdade, a mentira, o pormenor, a maneira, o exemplo, a diferença, a
//     vantagem, o objetivo and o caso. None is re-carded.
//   - Block 3's u82 (measure), u84 (information) and u86 (sequence) own the
//     quantity, data and ordering nouns. o grau, o limite, a quantidade and
//     their family are theirs, not mine, even though this slot is lower.
//   - a capacidade, a fase and a etapa were ceded to block 3's u85/u86 by
//     agreement, and a fonte (u55) and a etapa (u56) belong to block 1.
//
// `a palavra` is carded here at block 3's request — it is used across the
// shipped corpus and taught by no unit, and this is the lowest slot that wants
// it. Same class as a doença (u67), a relação (u68) and vender (u66).
//
// Pairs deliberately kept apart from their verbs, each named in its hint so the
// learner sees the family rather than two unrelated cards: a escolha / escolher
// (u27), a decisão / decidir (u24), a dúvida / duvido que (u69), a certeza /
// com certeza (u72).
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT76 = {
  id: "pt-u76",
  lang: "pt",
  title: "Os nomes abstratos",
  order: 76,
  stage: "b1",
  lessons: [
    {
      id: "pt-u76l1",
      unit: 76,
      lesson: 1,
      title: "A palavra e o sentido",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what something means and how sure you are of it — including saying you did not follow.",
      items: [
        { id: "pt-u76l1-apalavra", type: "vocab", front: "a palavra", reading: "apalavra", meaning: "word", example: { jp: "Não percebi a palavra que ele disse, por isso pedi para repetir mais devagarinho.", en: "I did not understand the word he said, so I asked him to repeat it more slowly." }, drill: { jp: "Não percebi a palavra que ele disse", en: "I did not understand the word he said" }, accept: ["word", "the word"], hint: "puh-LAH-vruh. Also a promise — dar a palavra, ter palavra. Em poucas palavras is \"in short\", and the course had used this word in examples for fifty units without ever teaching it." },
        { id: "pt-u76l1-aduvida", type: "vocab", front: "a dúvida", reading: "aduvida", meaning: "doubt", example: { jp: "Fico com uma dúvida sobre o contrato, por isso vou perguntar antes de assinar.", en: "I still have a doubt about the contract, so I am going to ask before signing." }, drill: { jp: "A dúvida do contrato ficou comigo", en: "The doubt about the contract stayed with me" }, accept: ["doubt", "question", "query", "the doubt"], hint: "DOO-vee-duh. In Portugal a dúvida is usually a QUESTION rather than suspicion — tenho uma dúvida is what a student says in class. u69's duvido que is the verb, and sem dúvida (u73) its strongest denial." },
        { id: "pt-u76l1-acerteza", type: "vocab", front: "a certeza", reading: "acerteza", meaning: "certainty", example: { jp: "Não tenho a certeza de que ele venha, mas deixei a mesa posta para cinco pessoas.", en: "I am not certain he is coming, but I laid the table for five people." }, drill: { jp: "Não tenho a certeza de que ele venha", en: "I am not certain he is coming" }, accept: ["certainty", "sureness", "the certainty"], hint: "ser-TAY-zuh. Ter a certeza is to be sure, and NOT having it takes the subjunctive — não tenho a certeza de que VENHA, exactly as u69's doubt triggers do. Com certeza (u72) is the willing yes." },
        { id: "pt-u76l1-aconfusao", type: "vocab", front: "a confusão", reading: "aconfusao", meaning: "confusion", example: { jp: "Houve uma confusão com as datas, por isso metade das pessoas chegou no dia errado.", en: "There was a mix-up with the dates, so half the people arrived on the wrong day." }, drill: { jp: "A confusão com as datas foi grande", en: "The mix-up with the dates was big" }, accept: ["confusion", "mix-up", "mess", "the confusion"], hint: "kon-foo-ZOWNG; plural as confusões. A mix-up, and also a commotion — houve confusão à porta do estádio. Não faças confusão is \"don't get it mixed up\"." },
        { id: "pt-u76l1-ocontraste", type: "vocab", front: "o contraste", reading: "ocontraste", meaning: "contrast", example: { jp: "O contraste entre as duas aldeias é enorme, embora estejam a dez minutos uma da outra.", en: "The contrast between the two villages is enormous, although they are ten minutes from each other." }, drill: { jp: "O contraste entre as duas aldeias é enorme", en: "The contrast between the two villages is enormous" }, accept: ["contrast", "the contrast", "difference"], hint: "kon-TRASH-tuh. Em contraste com is \"in contrast with\". Also the contrast on a screen, and the dye used in a hospital scan." },
        { id: "pt-u76l1-asemelhanca", type: "vocab", front: "a semelhança", reading: "asemelhanca", meaning: "similarity", example: { jp: "A semelhança entre as duas línguas ajuda no princípio, mas depois começa a atrapalhar.", en: "The similarity between the two languages helps at the beginning, but later it starts to get in the way." }, drill: { jp: "A semelhança entre as duas línguas ajuda", en: "The similarity between the two languages helps" }, accept: ["similarity", "the similarity", "resemblance", "likeness"], hint: "suh-muh-LYAN-suh. From semelhante, similar. À semelhança de is a formal \"like\" — à semelhança do ano passado." },
      ],
    },
    {
      id: "pt-u76l2",
      unit: 76,
      lesson: 2,
      title: "O motivo e a intenção",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Give the reason behind something and say what somebody meant to do — separating cause from intention.",
      items: [
        { id: "pt-u76l2-omotivo", type: "vocab", front: "o motivo", reading: "omotivo", meaning: "reason (the motive)", example: { jp: "Ninguém explicou o motivo da mudança, embora toda a equipa tenha perguntado na reunião.", en: "Nobody explained the reason for the change, although the whole team asked at the meeting." }, drill: { jp: "Ninguém explicou o motivo da mudança", en: "Nobody explained the reason for the change" }, accept: ["reason", "motive", "the reason", "cause"], hint: "mu-TEE-vu. The reason WHY something happened. A causa (u34) is what produced it; o motivo is what justifies it, and Portuguese keeps the two apart more carefully than English does." },
        { id: "pt-u76l2-ointeresse", type: "vocab", front: "o interesse", reading: "ointeresse", meaning: "interest (concern, appeal)", example: { jp: "Não há interesse nenhum em vender a casa agora, porque os preços ainda estão a subir.", en: "There is no interest at all in selling the house now, because prices are still going up." }, drill: { jp: "O interesse da empresa é o preço", en: "The company's interest is the price" }, accept: ["interest", "the interest", "concern"], hint: "een-tuh-RAY-suh. Curiosity and advantage alike — ter interesse em is to be interested, and no seu interesse is in your own interest. The bank kind is o juro (u45), a different word entirely." },
        { id: "pt-u76l2-aatencao", type: "vocab", front: "a atenção", reading: "aatencao", meaning: "attention", example: { jp: "Com a atenção toda no telemóvel, ninguém viu o senhor cair na rua.", en: "With all their attention on the phone, nobody saw the man fall in the street." }, drill: { jp: "A atenção estava toda no telemóvel", en: "The attention was all on the phone" }, accept: ["attention", "the attention", "care"], hint: "a-ten-SOWNG. Prestar atenção is to pay attention; atenção! shouted is \"look out!\". Chamar a atenção de alguém means both to get their attention and to tell them off." },
        { id: "pt-u76l2-ajustificacao", type: "vocab", front: "a justificação", reading: "ajustificacao", meaning: "justification", example: { jp: "A justificação que deram não convenceu ninguém, por isso o sindicato pediu uma reunião nova.", en: "The justification they gave convinced nobody, so the union asked for another meeting." }, drill: { jp: "A justificação não convenceu ninguém", en: "The justification convinced nobody" }, accept: ["justification", "the justification", "excuse", "explanation"], hint: "zhoosh-tee-fee-ka-SOWNG. The reason offered, whether or not it is true — which is what separates it from o motivo. A doctor's note for school or work is also uma justificação." },
        { id: "pt-u76l2-acoincidencia", type: "vocab", front: "a coincidência", reading: "acoincidencia", meaning: "coincidence", example: { jp: "Foi uma coincidência encontrá-lo no comboio, porque nem sabia que ele estava no país.", en: "It was a coincidence to run into him on the train, because I did not even know he was in the country." }, drill: { jp: "A coincidência foi enorme", en: "The coincidence was enormous" }, accept: ["coincidence", "the coincidence", "chance"], hint: "ku-een-see-DEN-syuh. Que coincidência! is the everyday exclamation. The example uses the -lo contraction from u71: encontrar + o = encontrá-lo." },
        { id: "pt-u76l2-oambito", type: "vocab", front: "o âmbito", reading: "oambito", meaning: "scope", example: { jp: "Isso não é do âmbito deste serviço, no entanto a senhora do balcão explicou onde devia ir.", en: "That is not within the scope of this service; the woman at the counter, however, explained where I should go." }, drill: { jp: "O âmbito deste serviço é pequeno", en: "The scope of this service is small" }, accept: ["scope", "the scope", "remit", "field"], hint: "AM-bee-tu, stress on the â. No âmbito de — \"as part of\" or \"within the framework of\" — is how official Portuguese introduces anything: no âmbito do programa novo." },
      ],
    },
    {
      id: "pt-u76l3",
      unit: 76,
      lesson: 3,
      title: "A situação e o estado",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how things stand — the situation, the condition something is in, and what is lacking.",
      items: [
        { id: "pt-u76l3-asituacao", type: "vocab", front: "a situação", reading: "asituacao", meaning: "situation", example: { jp: "A situação em casa melhorou muito desde que ele voltou a trabalhar.", en: "The situation at home has improved a lot since he went back to work." }, drill: { jp: "A situação em casa melhorou muito", en: "The situation at home has improved a lot" }, accept: ["situation", "the situation", "position"], hint: "see-too-uh-SOWNG; plural as situações. The general state of affairs — a situação do país, a situação em casa. For a single event Portuguese says o caso (u40)." },
        { id: "pt-u76l3-oestado", type: "vocab", front: "o estado", reading: "oestado", meaning: "state", example: { jp: "A casa está em muito mau estado, por isso o preço é mais baixo do que as outras da rua.", en: "The house is in very bad condition, so the price is lower than the others on the street." }, drill: { jp: "O estado da casa é mau", en: "The state of the house is bad" }, accept: ["state", "condition", "the state"], hint: "shtah-du. The state of a thing, and — capitalised — the State: o Estado paga as escolas. From estar (u12), which is why it describes what is temporary." },
        { id: "pt-u76l3-afalta", type: "vocab", front: "a falta", reading: "afalta", meaning: "lack", example: { jp: "A falta de médicos no interior é um problema antigo, e ainda ninguém encontrou uma solução.", en: "The lack of doctors inland is an old problem, and nobody has found a solution yet." }, drill: { jp: "A falta de médicos é um problema", en: "The lack of doctors is a problem" }, accept: ["lack", "shortage", "absence", "the lack"], hint: "FAL-tuh. From faltar (u74). Fazer falta is to be missed — fazes-me falta. And in football it is the foul, which is the word you will hear shouted most often." },
        { id: "pt-u76l3-oequilibrio", type: "vocab", front: "o equilíbrio", reading: "oequilibrio", meaning: "balance", example: { jp: "O equilíbrio entre o trabalho e a família é difícil, por isso mudou de horário este ano.", en: "The balance between work and family is difficult, so he changed his hours this year." }, drill: { jp: "O equilíbrio entre trabalho e família é difícil", en: "The balance between work and family is difficult" }, accept: ["balance", "the balance", "equilibrium"], hint: "e-kee-LEE-bree-u. Physical balance and the other kind alike — perder o equilíbrio is to lose your footing, and o equilíbrio da conta is whether the books add up." },
        { id: "pt-u76l3-aconclusao", type: "vocab", front: "a conclusão", reading: "aconclusao", meaning: "conclusion", example: { jp: "A conclusão do estudo é clara, embora os autores digam que faltam dados de outras cidades.", en: "The conclusion of the study is clear, although the authors say that data from other cities is missing." }, drill: { jp: "A conclusão do estudo é clara", en: "The conclusion of the study is clear" }, accept: ["conclusion", "the conclusion", "finding", "end"], hint: "kon-kloo-ZOWNG; plural as conclusões. Em conclusão opens the last paragraph of anything written. Chegar a uma conclusão is to reach one." },
        { id: "pt-u76l3-acoerencia", type: "vocab", front: "a coerência", reading: "acoerencia", meaning: "consistency", example: { jp: "Falta coerência ao plano, porque uma parte diz uma coisa e a outra diz o contrário.", en: "The plan lacks consistency, because one part says one thing and the other says the opposite." }, drill: { jp: "A coerência do plano é clara", en: "The consistency of the plan is clear" }, accept: ["consistency", "coherence", "the consistency"], hint: "ku-e-REN-syuh. Of an argument, a plan or a person — ter coerência is to act in line with what you say. Coerente is the adjective, and it is a compliment." },
      ],
    },
    {
      id: "pt-u76l4",
      unit: 76,
      lesson: 4,
      title: "A escolha e a oportunidade",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about choices, chances and habits — and about the thing nobody has said out loud.",
      items: [
        { id: "pt-u76l4-aescolha", type: "vocab", front: "a escolha", reading: "aescolha", meaning: "choice", example: { jp: "A escolha não foi fácil, porque as duas casas tinham vantagens diferentes.", en: "The choice was not easy, because the two houses had different advantages." }, drill: { jp: "A escolha não foi fácil", en: "The choice was not easy" }, accept: ["choice", "the choice", "selection"], hint: "shh-KOH-lyuh. From escolher (u27). Não tive escolha — I had no choice — is the phrase that carries most of this word's weight in conversation." },
        { id: "pt-u76l4-adecisao", type: "vocab", front: "a decisão", reading: "adecisao", meaning: "decision", example: { jp: "A decisão foi tomada na reunião de sexta, no entanto ninguém avisou os funcionários.", en: "The decision was taken at Friday's meeting; however, nobody told the staff." }, drill: { jp: "A decisão foi tomada na reunião", en: "The decision was taken at the meeting" }, accept: ["decision", "the decision", "ruling"], hint: "de-see-ZOWNG; plural as decisões. From decidir (u24). Portuguese TAKES a decision — tomar uma decisão — where English makes one." },
        { id: "pt-u76l4-aoportunidade", type: "vocab", front: "a oportunidade", reading: "aoportunidade", meaning: "opportunity", example: { jp: "Foi uma oportunidade única, mas ele não quis sair da cidade onde cresceu.", en: "It was a unique opportunity, but he did not want to leave the city where he grew up." }, drill: { jp: "A oportunidade era única para ele", en: "The opportunity was unique for him" }, accept: ["opportunity", "chance", "the opportunity"], hint: "u-por-too-nee-DAH-duh. Aproveitar a oportunidade (u74's verb) is to take the chance. A shorter everyday alternative is uma hipótese, which also means a hypothesis." },
        { id: "pt-u76l4-apossibilidade", type: "vocab", front: "a possibilidade", reading: "apossibilidade", meaning: "possibility (the chance of it)", example: { jp: "Existe a possibilidade de mudar de horário, desde que a equipa toda esteja de acordo.", en: "There is the possibility of changing the schedule, as long as the whole team agrees." }, drill: { jp: "Existe a possibilidade de mudar de horário", en: "There is the possibility of changing the schedule" }, accept: ["possibility", "the possibility", "chance", "option"], hint: "pu-see-bee-lee-DAH-duh. Takes de plus an infinitive. u69's é possível que is the same idea as an adjective, and it takes the subjunctive where this noun takes an infinitive." },
        { id: "pt-u76l4-osegredo", type: "vocab", front: "o segredo", reading: "osegredo", meaning: "secret", example: { jp: "O segredo já não é segredo nenhum, porque a aldeia inteira falou disso durante a festa.", en: "The secret is not a secret at all any more, because the whole village talked about it during the party." }, drill: { jp: "O segredo já não é segredo", en: "The secret is not a secret any more" }, accept: ["secret", "the secret"], hint: "suh-GRAY-du. Guardar um segredo is to keep one, from u33's guardar. Em segredo is \"secretly\", and o segredo é… is how a Portuguese cook starts every good story." },
        { id: "pt-u76l4-aautoridade", type: "vocab", front: "a autoridade", reading: "aautoridade", meaning: "authority", example: { jp: "Ninguém no balcão tem autoridade para mudar a decisão, por isso é preciso escrever à direção.", en: "Nobody at the counter has the authority to change the decision, so you have to write to the management." }, drill: { jp: "A autoridade da direção é clara", en: "The management's authority is clear" }, accept: ["authority", "the authority", "power"], hint: "aw-tu-ree-DAH-duh. The power to decide, and — in the plural — the people who hold it: as autoridades. Ter autoridade sobre alguém is to have it over them." },
      ],
    },
  ],
};
