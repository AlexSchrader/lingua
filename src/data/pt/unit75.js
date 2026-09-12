// PT Unit 75 — Os adjetivos (slot: vocabulary-2 B1) — B1
// ─────────────────────────────────────────────────────────────────────────────
// Second word-class coverage unit. u10 "Descrever as coisas" is the A1
// adjective unit — it is not titled as one, which is why this unit needs no
// "· 2" — and it owns the physical scale: grande, pequeno, alto, baixo, forte,
// fraco, largo, escuro, vazio, cheio, novo, antigo, limpo, sujo, caro. u31 owns
// character (a personalidade e o feitio) and u42 owns material properties.
//
// What is left, and what this unit takes, is the EVALUATIVE layer — whether
// something is true, fair, obvious, necessary, current or urgent. None of it is
// about the look of a thing, which is the whole difference from u10.
//
// AGREEMENT IS THE TRAP IN A UNIT OF ADJECTIVES, and it is an engine trap as
// much as a grammar one: a drill written about a feminine noun turns `sério`
// into `séria`, and the engine then cannot find the front in its own drill.
// Every drill here is built on a masculine subject for that reason, and the
// hints carry the feminine form instead.
//
// CEDED TO BLOCK 3, and deliberately absent though this slot outranks theirs:
// fiável, durável, resistente, frágil, adequado and eficaz belong to u81, whose
// theme is equipment and wear. An adjective that describes anything at all is
// this unit's; an adjective that only makes sense of a machine is theirs.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT75 = {
  id: "pt-u75",
  lang: "pt",
  title: "Os adjetivos",
  order: 75,
  stage: "b1",
  lessons: [
    {
      id: "pt-u75l1",
      unit: 75,
      lesson: 1,
      title: "Certo e errado",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say whether something is right, wrong, true or fair — and argue about which.",
      items: [
        { id: "pt-u75l1-correto", type: "vocab", front: "correto", reading: "correto", meaning: "correct", example: { jp: "O preço que me deram não estava correto, por isso paguei mais do que devia.", en: "The price they gave me was not correct, so I paid more than I should have." }, drill: { jp: "O preço não estava correto", en: "The price was not correct" }, accept: ["correct", "right", "accurate"], hint: "ku-RREH-tu; feminine correta. Spelled correto since the 1990 spelling agreement; older books print correcto. Certo is the everyday alternative and is what you will hear far more often." },
        { id: "pt-u75l1-errado", type: "vocab", front: "errado", reading: "errado", meaning: "wrong", example: { jp: "O diagnóstico estava errado, no entanto o médico percebeu isso logo na segunda consulta.", en: "The diagnosis was wrong; however, the doctor realised that at the second appointment." }, drill: { jp: "O diagnóstico estava errado", en: "The diagnosis was wrong" }, accept: ["wrong", "incorrect", "mistaken"], hint: "e-RRAH-du; feminine errada. Used of facts, numbers and directions. About a PERSON, Portuguese says estar enganado — estás enganado, you are mistaken — rather than estar errado." },
        { id: "pt-u75l1-exato", type: "vocab", front: "exato", reading: "exato", meaning: "exact", example: { jp: "Ninguém sabe o preço exato das casas vazias na cidade, embora a câmara tenha feito um estudo no ano passado.", en: "Nobody knows the exact price of the empty houses in the city, although the council did a study last year." }, drill: { jp: "Ninguém sabe o preço exato", en: "Nobody knows the exact price" }, accept: ["exact", "precise", "accurate"], hint: "e-ZAH-tu — the x says z here, as in exemplo. Exato! on its own is \"exactly!\", one of the commonest agreements in Portuguese conversation." },
        { id: "pt-u75l1-verdadeiro", type: "vocab", front: "verdadeiro", reading: "verdadeiro", meaning: "true", example: { jp: "O boato não era verdadeiro, mas já toda a aldeia falava disso quando o jornal explicou tudo.", en: "The rumour was not true, but the whole village was already talking about it when the paper explained everything." }, drill: { jp: "O boato não era verdadeiro", en: "The rumour was not true" }, accept: ["true", "real", "genuine"], hint: "ver-duh-DAY-ru; feminine verdadeira. From a verdade (u40). Also \"genuine\" about a person — um amigo verdadeiro is a real friend, not a truthful one." },
        { id: "pt-u75l1-falso", type: "vocab", front: "falso", reading: "falso", meaning: "false", example: { jp: "O documento era falso, por isso o banco chamou a polícia no mesmo dia.", en: "The document was false, so the bank called the police the same day." }, drill: { jp: "O documento era falso", en: "The document was false" }, accept: ["false", "fake", "forged"], hint: "FAL-su; feminine falsa. Of documents, money and teeth. About a person it means two-faced — é muito falso — which is a serious insult in Portugal, not a mild one." },
        { id: "pt-u75l1-justo", type: "vocab", front: "justo", reading: "justo", meaning: "fair", example: { jp: "O acordo não me parece justo, porque uma parte fica com quase tudo e a outra com o trabalho.", en: "The agreement does not seem fair to me, because one side gets almost everything and the other gets the work." }, drill: { jp: "O acordo não me parece justo", en: "The agreement does not seem fair to me" }, accept: ["fair", "just", "right"], hint: "ZHOOSH-tu; feminine justa. Also \"tight\" about clothes and \"exact\" about an amount — o dinheiro certo is the exact change, while justo about an amount means only just enough. The opposite, injusto, is in the same family and just as common." },
      ],
    },
    {
      id: "pt-u75l2",
      unit: 75,
      lesson: 2,
      title: "Simples e complicado",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how difficult, obvious, ordinary or strange something is — the judgements a B1 conversation keeps needing.",
      items: [
        { id: "pt-u75l2-complicado", type: "vocab", front: "complicado", reading: "complicado", meaning: "complicated", example: { jp: "O pedido é complicado, além disso ninguém no balcão consegue explicar os papéis todos.", en: "The request is complicated; what is more, nobody at the counter can explain all the paperwork." }, drill: { jp: "O pedido é complicado demais", en: "The request is too complicated" }, accept: ["complicated", "complex", "tricky"], hint: "kom-plee-KAH-du; feminine complicada. Of paperwork, relationships and people. Está complicado is also how Portugal says \"things are difficult right now\" without explaining." },
        { id: "pt-u75l2-obvio", type: "vocab", front: "óbvio", reading: "obvio", meaning: "obvious", example: { jp: "Era óbvio que ele não queria ir, mas ninguém disse nada durante o jantar.", en: "It was obvious that he did not want to go, but nobody said anything during dinner." }, drill: { jp: "Era óbvio que ele não queria ir", en: "It was obvious that he did not want to go" }, accept: ["obvious", "clear", "evident"], hint: "OHB-vyu; feminine óbvia. Óbvio! answers a question the way English says \"obviously\" — and, like the English, it can sound impatient." },
        { id: "pt-u75l2-estranho", type: "vocab", front: "estranho", reading: "estranho", meaning: "strange", example: { jp: "É estranho que ainda não tenha respondido, porque costuma ligar todos os domingos.", en: "It is strange that he has not answered yet, because he usually calls every Sunday." }, drill: { jp: "É estranho que não tenha respondido", en: "It is strange that he has not answered" }, accept: ["strange", "odd", "weird", "stranger"], hint: "shtrah-nyu; feminine estranha. Also a noun — um estranho is a stranger. É estranho que takes the subjunctive, like every é + adjective + que from u69." },
        { id: "pt-u75l2-comum", type: "vocab", front: "comum", reading: "comum", meaning: "common", example: { jp: "É comum trabalhar até tarde nesta empresa, no entanto ninguém é obrigado a ficar.", en: "It is common to work late at this company; however, nobody is forced to stay." }, drill: { jp: "É comum trabalhar até tarde aqui", en: "It is common to work late here" }, accept: ["common", "usual", "ordinary", "shared"], hint: "ku-MOONG. SAME FORM for both genders — um problema comum, uma ideia comum — like every -m adjective. Em comum is \"in common\"; o comum dos mortais is \"ordinary people\"." },
        { id: "pt-u75l2-raro", type: "vocab", front: "raro", reading: "raro", meaning: "rare", example: { jp: "É raro ver neve em Lisboa, por isso as fotos do ano passado correram o país todo.", en: "It is rare to see snow in Lisbon, so last year's photos went round the whole country." }, drill: { jp: "É raro ver neve em Lisboa", en: "It is rare to see snow in Lisbon" }, accept: ["rare", "unusual", "uncommon"], hint: "RRAH-ru; feminine rara. Raramente is the adverb. Raras vezes is a slightly formal \"seldom\", and it is how the news writes it." },
        { id: "pt-u75l2-profundo", type: "vocab", front: "profundo", reading: "profundo", meaning: "deep", example: { jp: "O rio é mais profundo do que parece, por isso as crianças não podem ir sozinhas.", en: "The river is deeper than it looks, so the children cannot go on their own." }, drill: { jp: "O rio é mais profundo do que parece", en: "The river is deeper than it looks" }, accept: ["deep", "profound"], hint: "pru-FOON-du; feminine profunda. Physical depth and the other kind alike — uma conversa profunda. The noun is a profundidade." },
      ],
    },
    {
      id: "pt-u75l3",
      unit: 75,
      lesson: 3,
      title: "Antes e depois",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Place something in time — current, recent, previous, next — and say whether a person is free or busy.",
      items: [
        { id: "pt-u75l3-atual", type: "vocab", front: "atual", reading: "atual", meaning: "current (present-day)", example: { jp: "O contrato atual acaba em março, por isso temos de decidir alguma coisa este mês.", en: "The current contract ends in March, so we have to decide something this month." }, drill: { jp: "O contrato atual acaba em março", en: "The current contract ends in March" }, accept: ["current", "present", "present-day"], hint: "a-too-AL; plural atuais, same form for both genders. FALSE FRIEND: it means current, not \"actual\" — for that Portuguese says verdadeiro or real. Atualmente is \"currently\", not \"actually\"." },
        { id: "pt-u75l3-recente", type: "vocab", front: "recente", reading: "recente", meaning: "recent", example: { jp: "O estudo é recente, mas os números já mudaram por causa da subida dos preços.", en: "The study is recent, but the figures have already changed because of the rise in prices." }, drill: { jp: "O estudo é recente mas já mudou", en: "The study is recent but it has already changed" }, accept: ["recent", "new"], hint: "rre-SEN-tuh. Same form for both genders. Recentemente is the adverb; há pouco tempo is what people actually say in conversation." },
        { id: "pt-u75l3-anterior", type: "vocab", front: "anterior", reading: "anterior", meaning: "previous", example: { jp: "O vizinho anterior deixou tudo limpo, no entanto a casa já precisava de trabalho.", en: "The previous neighbour left everything clean; however, the house already needed work." }, drill: { jp: "O vizinho anterior deixou tudo limpo", en: "The previous neighbour left everything clean" }, accept: ["previous", "earlier", "former", "before"], hint: "an-te-ree-OR; same form for both genders, plural anteriores. Na semana anterior is \"the week before\" — as opposed to na semana passada, last week from now." },
        { id: "pt-u75l3-seguinte", type: "vocab", front: "seguinte", reading: "seguinte", meaning: "next", example: { jp: "No dia seguinte já ninguém falava do assunto, embora a discussão tenha sido horrível.", en: "The next day nobody was talking about the matter any more, although the argument had been dreadful." }, drill: { jp: "No dia seguinte ninguém falava disso", en: "The next day nobody talked about it" }, accept: ["next", "following", "subsequent"], hint: "se-GHEEN-tuh. Next AFTER something already mentioned — o dia seguinte. Próximo is next from NOW: na próxima semana. Mixing them is a common slip." },
        { id: "pt-u75l3-ocupado", type: "vocab", front: "ocupado", reading: "ocupado", meaning: "busy", example: { jp: "O senhor doutor está ocupado até às cinco, mas pode deixar uma mensagem na receção.", en: "The doctor is busy until five, but you can leave a message at reception." }, drill: { jp: "O senhor doutor está ocupado até às cinco", en: "The doctor is busy until five" }, accept: ["busy", "occupied", "taken"], hint: "u-ku-PAH-du; feminine ocupada. Of people, seats and toilets — está ocupado on a door. The line being engaged is a linha está impedida, not ocupada." },
        { id: "pt-u75l3-imediato", type: "vocab", front: "imediato", reading: "imediato", meaning: "immediate", example: { jp: "O efeito do remédio não é imediato, por isso é preciso esperar quase uma hora.", en: "The effect of the medicine is not immediate, so you have to wait almost an hour." }, drill: { jp: "O efeito do remédio não é imediato", en: "The effect of the medicine is not immediate" }, accept: ["immediate", "instant", "right away"], hint: "ee-me-dee-AH-tu; feminine imediata. De imediato is the adverb phrase — at once. Imediatamente exists and is heavier; Portugal says logo (u28) far more often." },
      ],
    },
    {
      id: "pt-u75l4",
      unit: 75,
      lesson: 4,
      title: "O que importa",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how much something matters and how long it runs — necessary, urgent, main, serious, short, long.",
      items: [
        { id: "pt-u75l4-necessario", type: "vocab", front: "necessário", reading: "necessario", meaning: "necessary", example: { jp: "É necessário levar os documentos todos, a não ser que já tenha feito o pedido pela internet.", en: "It is necessary to take all the documents, unless you have already made the request online." }, drill: { jp: "É necessário levar os documentos todos", en: "It is necessary to take all the documents" }, accept: ["necessary", "needed", "required"], hint: "ne-se-SAH-ryu; feminine necessária. É necessário que takes the subjunctive; é necessário + infinitive does not. Se for necessário — \"if need be\" — uses u71's future subjunctive." },
        { id: "pt-u75l4-principal", type: "vocab", front: "principal", reading: "principal", meaning: "main", example: { jp: "O problema principal é o preço, porque tudo o resto se pode resolver com tempo.", en: "The main problem is the price, because everything else can be sorted out with time." }, drill: { jp: "O problema principal é o preço", en: "The main problem is the price" }, accept: ["main", "principal", "chief", "primary"], hint: "preen-see-PAL; plural principais. Goes after the noun like almost every Portuguese adjective — o prato principal, a rua principal. Principalmente is \"mainly\"." },
        { id: "pt-u75l4-serio", type: "vocab", front: "sério", reading: "serio", meaning: "serious (earnest)", example: { jp: "É um problema sério para a aldeia toda, por isso a câmara vai falar com o governo.", en: "It is a serious problem for the whole village, so the council is going to talk to the government." }, drill: { jp: "É um problema sério para a aldeia", en: "It is a serious problem for the village" }, accept: ["serious", "earnest", "reliable"], hint: "SEH-ryu; feminine séria. Of problems and of people — uma pessoa séria is trustworthy, not humourless. A sério? is \"really?\", and grave (u67) is the word for a serious illness." },
        { id: "pt-u75l4-curto", type: "vocab", front: "curto", reading: "curto", meaning: "short", example: { jp: "O prazo é demasiado curto para fazer tudo, embora a empresa diga que é possível.", en: "The deadline is too short to do everything, although the company says it is possible." }, drill: { jp: "O prazo é demasiado curto", en: "The deadline is too short" }, accept: ["short", "brief"], hint: "KOOR-tu; feminine curta. Of time, of clothes and of hair — never of a person's height, which is baixo (u10). A curto prazo is \"in the short term\"." },
        { id: "pt-u75l4-longo", type: "vocab", front: "longo", reading: "longo", meaning: "long (in time)", example: { jp: "Foi um ano longo para a família toda, mas as coisas melhoraram desde o verão.", en: "It was a long year for the whole family, but things have improved since the summer." }, drill: { jp: "Foi um ano longo para a família", en: "It was a long year for the family" }, accept: ["long", "lengthy"], hint: "LON-gu; feminine longa. The pair of curto. For physical length Portugal often prefers comprido — um vestido comprido — and keeps longo for time and for formal writing. Ao longo de is \"throughout\"." },
        { id: "pt-u75l4-essencial", type: "vocab", front: "essencial", reading: "essencial", meaning: "essential (crucial)", example: { jp: "O descanso é essencial depois da cirurgia, embora quase ninguém pare o tempo que devia.", en: "Rest is essential after surgery, although almost nobody stops for as long as they should." }, drill: { jp: "O descanso é essencial depois da cirurgia", en: "Rest is essential after surgery" }, accept: ["essential", "vital", "crucial", "key"], hint: "e-sen-see-AL; plural essenciais, same form for both genders. O essencial as a noun is \"the main thing\": o essencial é chegar bem." },
      ],
    },
  ],
};
