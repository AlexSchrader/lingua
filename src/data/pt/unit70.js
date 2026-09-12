// PT Unit 70 — O conjuntivo imperfeito e o se (slot: grammar-7) — B1
// ─────────────────────────────────────────────────────────────────────────────
// SLOT RETHEMED. The scaffold called this "Grammar 7 — passive, causative,
// indirect", which is the Japanese shape of the slot; Portuguese's B1 opening
// at this point is the IMPERFECT SUBJUNCTIVE and the counterfactual `se`, which
// is what every "if I were you" sentence in the language runs on. The passive
// is covered where Portuguese actually uses it — the se-passive, named in u66's
// vender hint and in u71 — and needs no unit of its own at B1.
//
// This is unit 2 of the approved three-unit grammar split: u69 present
// subjunctive · u70 imperfect + counterfactual se · u71 future subjunctive +
// clitic placement.
//
// THE PAIRING IS THE LESSON. A1/A2 gave the learner both halves separately —
// u37 cards seria / teria / gostaria (the conditional) and u36 cards era /
// tinha (the imperfect) — but never the sentence that joins them. Portuguese
// requires se + imperfect subjunctive on one side and the conditional on the
// other: se tivesse tempo, ia ao Porto. Getting the two moods the wrong way
// round is the single commonest B1 error an English speaker makes here, and
// every example in this unit shows the pair.
//
// A NOTE ON REGISTER, which unit 73 picks up: spoken Portugal very often
// replaces the conditional half with the imperfect indicative — se tivesse
// tempo, IA ao Porto rather than IRIA. Both are correct; the imperfect is what
// you will hear. The cards teach the written pairing and the hints name the
// spoken one, rather than pretending the formal version is the only one.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT70 = {
  id: "pt-u70",
  lang: "pt",
  title: "O conjuntivo imperfeito e o se",
  order: 70,
  stage: "b1",
  lessons: [
    {
      id: "pt-u70l1",
      unit: 70,
      lesson: 1,
      title: "Se eu fosse…",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what you would do in a situation that is not true — the if-clause Portuguese cannot build any other way.",
      items: [
        { id: "pt-u70l1-visse", type: "vocab", front: "visse", reading: "visse", meaning: "(if it) saw", example: { jp: "Se visse o estado da casa, não pagava aquele preço, mas comprou tudo pela internet.", en: "If he had seen the state of the house, he would not have paid that price, but he bought it all online." }, drill: { jp: "Se visse a casa não pagava tanto", en: "If he saw the house he would not pay so much" }, accept: ["saw", "if it saw", "were to see"], hint: "Imperfect subjunctive of ver — and the neighbour that catches everyone: VISSE is ver, VIESSE is vir. One letter, and the lesson on vir is three cards away." },
        { id: "pt-u70l1-fosse", type: "vocab", front: "fosse", reading: "fosse", meaning: "(if it) were", example: { jp: "Se a casa fosse maior, ficávamos todos lá no domingo, mas assim não é fácil.", en: "If the house were bigger, we would all stay there on Sunday, but as it is, it is not easy." }, drill: { jp: "Se a casa fosse maior ficávamos todos", en: "If the house were bigger we would all stay" }, accept: ["were", "was", "if it were", "went"], hint: "Imperfect subjunctive of BOTH ser and ir — the two verbs share it, and only the sentence tells you which. Se fosse rico (ser) versus se fosse a Lisboa (ir). The phrase to keep whole: se eu fosse A TI — Portuguese puts the person after a, where English says \"in your place\"." },
        { id: "pt-u70l1-estivesse", type: "vocab", front: "estivesse", reading: "estivesse", meaning: "(if it) were (state)", example: { jp: "Se o tempo estivesse melhor, íamos à praia hoje, no entanto está muito frio desde as seis.", en: "If the weather were better, we would go to the beach today; however, it has been very cold since six." }, drill: { jp: "Se o tempo estivesse melhor íamos à praia", en: "If the weather were better we would go to the beach" }, accept: ["were", "was", "if it were"], hint: "Imperfect subjunctive of estar. The ser/estar split (u12) holds in every mood: se fosse médico is a permanent thing, se estivesse doente a passing one." },
        { id: "pt-u70l1-tivesse", type: "vocab", front: "tivesse", reading: "tivesse", meaning: "(if it) had", example: { jp: "Se tivesse mais tempo, aprendia a cozinhar melhor, mas o emprego novo come os fins de semana.", en: "If I had more time, I would learn to cook better, but the new job eats up the weekends." }, drill: { jp: "Se tivesse mais tempo aprendia a cozinhar", en: "If I had more time I would learn to cook" }, accept: ["had", "if it had", "were to have"], hint: "Imperfect subjunctive of ter, and the workhorse of this unit — se tivesse tempo / dinheiro / mais anos. It is also the half that builds the past version in lesson 4." },
        { id: "pt-u70l1-fizesse", type: "vocab", front: "fizesse", reading: "fizesse", meaning: "(if it) did", example: { jp: "Se fizesse sol, o jogo era na rua, por isso toda a família espera pelas notícias do tempo.", en: "If it were sunny, the match would be outside, so the whole family is waiting for the weather news." }, drill: { jp: "Se fizesse sol o jogo era na rua", en: "If it were sunny the match would be outside" }, accept: ["did", "made", "if it did", "were to do"], hint: "Imperfect subjunctive of fazer. Weather runs on fazer in Portuguese — faz sol, faz frio — so this form carries every \"if the weather were…\" sentence you will need." },
        { id: "pt-u70l1-podia", type: "vocab", front: "podia", reading: "podia", meaning: "could", example: { jp: "Se tivesse carro, podia ir ver a avó todas as semanas, mas o comboio só vai lá duas vezes por dia.", en: "If I had a car, I could go and see my grandmother every week, but the train only goes there twice a day." }, drill: { jp: "Se tivesse carro podia ver a avó", en: "If I had a car I could see my grandmother" }, accept: ["could", "was able", "would be able"], hint: "The other half of the pair — the imperfect of poder doing the conditional's job, which is what Portugal says. Poderia exists and sounds formal. Podia also softens a request: podia ajudar-me?" },
      ],
    },
    {
      id: "pt-u70l2",
      unit: 70,
      lesson: 2,
      title: "O desejo",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what you wish were true, and make a wish about somebody else, in the two ways Portuguese does it.",
      items: [
        { id: "pt-u70l2-pudesse", type: "vocab", front: "pudesse", reading: "pudesse", meaning: "(if it) could", example: { jp: "Se pudesse escolher, trabalhava só quatro dias, no entanto ninguém na empresa faz isso.", en: "If I could choose, I would work only four days; however, nobody at the company does that." }, drill: { jp: "Se pudesse escolher trabalhava quatro dias", en: "If I could choose I would work four days" }, accept: ["could", "were able", "if it could"], hint: "Imperfect subjunctive of poder — pudesse with u, against the present subjunctive possa. One letter apart and easy to mix up in writing." },
        { id: "pt-u70l2-soubesse", type: "vocab", front: "soubesse", reading: "soubesse", meaning: "(if it) knew", example: { jp: "Se soubesse a resposta, dizia já, mas ninguém no escritório sabe destas coisas.", en: "If I knew the answer, I would say so right away, but nobody in the office knows about these things." }, drill: { jp: "Se soubesse a resposta dizia já", en: "If I knew the answer I would say so right away" }, accept: ["knew", "if it knew", "were to know"], hint: "Imperfect subjunctive of saber. Se eu soubesse… on its own, trailing off, is a whole sentence in Portuguese — the regret is in the silence after it." },
        { id: "pt-u70l2-quisesse", type: "vocab", front: "quisesse", reading: "quisesse", meaning: "(if it) wanted", example: { jp: "Se ela quisesse mudar de cidade, a família apoiava tudo, embora ninguém queira dizer isso em voz alta.", en: "If she wanted to move city, the family would support it all, although nobody wants to say that out loud." }, drill: { jp: "Se ela quisesse mudar a família apoiava", en: "If she wanted to move the family would support it" }, accept: ["wanted", "if it wanted", "wished"], hint: "Imperfect subjunctive of querer, built on the past stem quis-. Same shape as fizesse from fiz — the irregular past is where these forms come from." },
        { id: "pt-u70l2-quemmedera", type: "vocab", front: "quem me dera", reading: "quemmedera", meaning: "I wish", example: { jp: "Quem me dera ter mais tempo para a família, mas o trabalho está pior este ano.", en: "I wish I had more time for the family, but work is worse this year." }, drill: { jp: "Quem me dera ter mais tempo", en: "I wish I had more time" }, accept: ["I wish", "if only", "I would love"], hint: "Literally \"who would give me\" — a fixed phrase, no conjugation. With an infinitive for yourself (quem me dera ter), with que + imperfect subjunctive for somebody else (quem me dera que viesses)." },
        { id: "pt-u70l2-oxala", type: "vocab", front: "oxalá", reading: "oxala", meaning: "hopefully", example: { jp: "Oxalá o tempo esteja bom no domingo, porque a festa é toda na rua.", en: "Hopefully the weather will be good on Sunday, because the party is all outdoors." }, drill: { jp: "Oxalá o tempo esteja bom no domingo", en: "Hopefully the weather is good on Sunday" }, accept: ["hopefully", "I hope", "God willing", "if only"], hint: "From the Arabic inshallah, one of the clearest traces of eight centuries of Arabic in Portuguese. Takes the subjunctive: present for what may still happen, imperfect for what you know will not." },
        { id: "pt-u70l2-gostariaque", type: "vocab", front: "gostaria que", reading: "gostariaque", meaning: "I would like (someone) to", example: { jp: "Gostaria que os filhos aprendessem português, embora vivam fora desde pequenos.", en: "I would like the children to learn Portuguese, although they have lived abroad since they were small." }, drill: { jp: "Gostaria que os filhos aprendessem português", en: "I would like the children to learn Portuguese" }, accept: ["I would like", "I'd like", "I wish"], hint: "u37 gave you gostaria on its own. With que and a second person it needs the IMPERFECT subjunctive, not the present — gostaria que viesses, never que venhas. The conditional pulls the past form after it." },
      ],
    },
    {
      id: "pt-u70l3",
      unit: 70,
      lesson: 3,
      title: "Como se, nem que",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say that something looks a certain way without being it, and concede a point you do not accept.",
      items: [
        { id: "pt-u70l3-comose", type: "vocab", front: "como se", reading: "comose", meaning: "as if", example: { jp: "Ele fala como se fosse o chefe, no entanto chegou à empresa no mês passado.", en: "He talks as if he were the boss; however, he arrived at the company last month." }, drill: { jp: "Ele fala como se fosse o chefe", en: "He talks as if he were the boss" }, accept: ["as if", "as though", "like"], hint: "Como se ALWAYS takes the imperfect subjunctive, never the present — the comparison is by definition not true. Como on its own (u2's como estás) is a different word doing a different job." },
        { id: "pt-u70l3-nemque", type: "vocab", front: "nem que", reading: "nemque", meaning: "even if", example: { jp: "Não vou lá outra vez, nem que me pagassem o dobro, porque a viagem é horrível.", en: "I am not going there again, even if they paid me double, because the journey is dreadful." }, drill: { jp: "Não vou lá nem que me pagassem", en: "I am not going there even if they paid me" }, accept: ["even if", "not even if", "no matter if"], hint: "The stubborn one — nem que carries a refusal the speaker will not move on. Portugal also says nem que fosse a última coisa, \"even if it were the last thing\"." },
        { id: "pt-u70l3-mesmoque", type: "vocab", front: "mesmo que", reading: "mesmoque", meaning: "even though", example: { jp: "Mesmo que a reunião acabe cedo, não consigo chegar ao Porto antes das nove.", en: "Even if the meeting finishes early, I cannot get to Porto before nine." }, drill: { jp: "Mesmo que a reunião acabe cedo não chego", en: "Even if the meeting finishes early I do not arrive" }, accept: ["even if", "even though", "although"], hint: "Milder than nem que and interchangeable with embora (u69) in most sentences. Present subjunctive when it is still open, imperfect when it is not." },
        { id: "pt-u70l3-aindaque", type: "vocab", front: "ainda que", reading: "aindaque", meaning: "although", example: { jp: "Ainda que o preço seja alto, a casa vale o dinheiro por causa do terreno.", en: "Although the price is high, the house is worth the money because of the land." }, drill: { jp: "Ainda que o preço seja alto compro", en: "Although the price is high I am buying" }, accept: ["although", "even though", "even if"], hint: "The written cousin of embora — you will meet it in the newspaper more than in the café. u28's ainda on its own means \"still\", which is a different word entirely." },
        { id: "pt-u70l3-anaoserque", type: "vocab", front: "a não ser que", reading: "anaoserque", meaning: "unless", example: { jp: "Vamos a pé, a não ser que esteja frio outra vez.", en: "We will walk, unless it is cold again." }, drill: { jp: "Fico em casa a não ser que melhore", en: "I stay at home unless it gets better" }, accept: ["unless", "except if", "other than if"], hint: "Portuguese has no single word for \"unless\" — this four-word phrase is it, and it always takes the subjunctive. Salvo se and exceto se exist but sound legal." },
        { id: "pt-u70l3-viesse", type: "vocab", front: "viesse", reading: "viesse", meaning: "(if it) came", example: { jp: "Seria melhor se ele viesse de comboio, porque o carro fica caro com a viagem toda.", en: "It would be better if he came by train, because the car works out expensive with the whole journey." }, drill: { jp: "Seria melhor se ele viesse de comboio", en: "It would be better if he came by train" }, accept: ["came", "if it came", "were to come"], hint: "Imperfect subjunctive of vir. Careful with its neighbour: viesse is vir (to come), visse is ver (to see), and one letter is the whole difference." },
      ],
    },
    {
      id: "pt-u70l4",
      unit: 70,
      lesson: 4,
      title: "O que não aconteceu",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the past that did not happen — what you would have done, and what you should have done.",
      items: [
        { id: "pt-u70l4-dissesse", type: "vocab", front: "dissesse", reading: "dissesse", meaning: "(if it) said", example: { jp: "Se ele dissesse a verdade desde o início, ninguém ficava zangado com ele agora.", en: "If he had told the truth from the beginning, nobody would be angry with him now." }, drill: { jp: "Se ele dissesse a verdade ninguém ficava zangado", en: "If he told the truth nobody would be angry" }, accept: ["said", "told", "if it said"], hint: "Imperfect subjunctive of dizer, from the past stem disse-. Portuguese often uses it where English jumps to the pluperfect — \"if he HAD told\" is frequently se dissesse." },
        { id: "pt-u70l4-desse", type: "vocab", front: "desse", reading: "desse", meaning: "(if it) gave", example: { jp: "Se a empresa desse mais um mês, o trabalho ficava bem feito, mas ninguém quis esperar.", en: "If the company gave us one more month, the work would be done properly, but nobody wanted to wait." }, drill: { jp: "Se a empresa desse mais um mês", en: "If the company gave one more month" }, accept: ["gave", "if it gave", "were to give"], hint: "Imperfect subjunctive of dar. Note the present subjunctive of the same verb, dê, is NOT taught in this course: its ASCII fold collides with de (u1), so it appears only in examples." },
        { id: "pt-u70l4-tivessefeito", type: "vocab", front: "tivesse feito", reading: "tivessefeito", meaning: "had done", example: { jp: "Se tivesse feito as análises no ano passado, a doença não ficava tão grave.", en: "If he had had the tests done last year, the illness would not have become so serious." }, drill: { jp: "Se tivesse feito as análises mais cedo", en: "If he had had the tests done earlier" }, accept: ["had done", "had made", "if it had done"], hint: "tivesse + past participle: the past of the past. Same machinery as tinha feito (u36) one step further back, and it pairs with teria feito on the other side of the sentence." },
        { id: "pt-u70l4-teriafeito", type: "vocab", front: "teria feito", reading: "teriafeito", meaning: "would have done", example: { jp: "Teria feito a mesma coisa no lugar dele, embora hoje seja fácil dizer isso.", en: "I would have done the same thing in his place, although today it is easy to say that." }, drill: { jp: "Teria feito a mesma coisa", en: "I would have done the same thing" }, accept: ["would have done", "would have made"], hint: "u37 gave you teria; this is what it does with a participle. The spoken language shortens the whole thing to tinha feito — se tivesse sabido, tinha feito diferente — which is what you will hear at a Portuguese table." },
        { id: "pt-u70l4-deviater", type: "vocab", front: "devia ter", reading: "deviater", meaning: "should have", example: { jp: "Devia ter falado com a irmã antes da reunião, por isso agora ninguém sabe o que ela decidiu.", en: "He should have talked to his sister before the meeting, so now nobody knows what she decided." }, drill: { jp: "Devia ter falado com a irmã", en: "He should have talked to his sister" }, accept: ["should have", "ought to have"], hint: "u37 gave you devia for the plain \"should\"; with ter plus a participle it becomes the regret. Devia ter dito, devia ter ido — the most useful three words in this unit for real conversation." },
        { id: "pt-u70l4-houvesse", type: "vocab", front: "houvesse", reading: "houvesse", meaning: "(if there) were", example: { jp: "Se houvesse mais comboios ao domingo, ninguém precisava de carro nesta aldeia.", en: "If there were more trains on Sundays, nobody in this village would need a car." }, drill: { jp: "Se houvesse mais comboios ao domingo", en: "If there were more trains on Sundays" }, accept: ["there were", "if there were", "were there"], hint: "Imperfect subjunctive of haver, the there-is verb. Always singular whatever follows — se houvesse mais comboios, never houvessem. u69 gave you its present, haja." },
      ],
    },
  ],
};
