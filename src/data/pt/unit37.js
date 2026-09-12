// PT Unit 37 — O futuro, o condicional e o infinitivo pessoal — A2 (slot: grammar-5)
// ─────────────────────────────────────────────────────────────────────────────
// SLOT RETHEME. The scaffold called this "Grammar 5 — conditionals, ability,
// comparison". Ability and conditionals are real A2 openings and are here.
// COMPARISON is NOT, and deliberately: block 1's u29 owns mais, menos, tão,
// tanto, do que and igual, and A1's u11 owns melhor. Re-teaching comparison would
// duplicate an entire lesson of a lower-numbered unit, so the fourth lesson goes
// instead to the PERSONAL INFINITIVE — which the kickoff names as a genuine A2
// opening, is the most distinctively Portuguese thing in the band, and has no
// Spanish equivalent at all. The absolute superlative (-íssimo) is NOT carded; it
// is flagged in the hand-back as the one comparison gap left over.
//
// REFLEXIVES are likewise not a lesson here. A1's u13l4 taught me/te/se/lhe and
// enclisis, and block 1 teaches seven reflexive verbs across u21-u25
// (levantar-se, deitar-se, sentar-se, perder-se, magoar-se, inscrever-se,
// preocupar-se). This block adds portar-se, divertir-se, encontrar-se,
// apaixonar-se and desculpar-se in their thematic units. The system is covered;
// a dedicated lesson would have been padding.
//
// `devia` rather than the bare infinitive dever: Portuguese says "you should" with
// the IMPERFECT of dever — devias ir ao médico — not with its present. Teaching
// devia also keeps the modal apart from o dever, the noun in u32l3.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT37 = {
  id: "pt-u37",
  lang: "pt",
  title: "O futuro, o condicional e o infinitivo pessoal",
  order: 37,
  stage: "a2",
  lessons: [
    {
      id: "pt-u37l1",
      unit: 37,
      lesson: 1,
      title: "Poder, querer, dever",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you can, want, must and manage to do — the four verbs that carry every other verb in the sentence.",
      items: [
        { id: "pt-u37l1-poder", type: "vocab", front: "poder", reading: "poder", meaning: "to be able", example: { jp: "Poder escolher é muito bom, mas às vezes há escolhas de mais.", en: "Being able to choose is very good, but sometimes there are too many choices." }, drill: { jp: "Poder escolher é muito bom", en: "Being able to choose is very good" }, accept: ["can", "may", "to be allowed", "power"], hint: "pu-DER, irregular: posso, podes, pode, podemos, podem. Can AND may — posso? at a door asks permission. As a noun o poder is power, exactly as o dever in Unit 32 was a verb wearing an article." },
        { id: "pt-u37l1-querer", type: "vocab", front: "querer", reading: "querer", meaning: "to want", example: { jp: "Querer é poder, dizem os portugueses quando um projeto é difícil.", en: "Where there is a will there is a way, the Portuguese say when a project is difficult." }, drill: { jp: "Querer é poder", en: "Where there is a will there is a way" }, accept: ["want", "to wish", "to love"], hint: "ke-RER, irregular: quero, queres, quer, queremos, querem. Querer é poder is the real Portuguese proverb, the one English says as where there is a will there is a way. Careful in a shop — quero um café is blunt; queria um café, the imperfect, is the polite form and is what people actually say." },
        { id: "pt-u37l1-devia", type: "vocab", front: "devia", reading: "devia", meaning: "should", example: { jp: "Ele devia ir ao médico, mas diz sempre que não tem tempo.", en: "He should go to the doctor, but he always says he doesn't have time." }, drill: { jp: "Ele devia ir ao médico", en: "He should go to the doctor" }, accept: ["ought to", "was supposed to", "had to", "should have"], hint: "PORTUGUESE SAYS \"SHOULD\" WITH THE IMPERFECT. devia, from dever, using the tense Unit 36 just taught — devias ir, ele devia ir. The present deve is more like \"must\" or \"probably is\": ele deve estar em casa. The noun o dever is u32l3." },
        { id: "pt-u37l1-conseguir", type: "vocab", front: "conseguir", reading: "conseguir", meaning: "to manage", example: { jp: "Conseguir falar português ao telefone é muito mais difícil do que falar na rua.", en: "Managing to speak Portuguese on the phone is much harder than speaking in the street." }, drill: { jp: "Conseguir falar português é difícil", en: "Managing to speak Portuguese is difficult" }, accept: ["manage", "to succeed", "to be able", "to achieve"], hint: "kon-se-GEER — the u after g is silent. The difference from poder matters: poder is being allowed or being in a position to, conseguir is pulling it off. Não consigo abrir a porta means the door beat me; não posso abrir means I'm not permitted." },
        { id: "pt-u37l1-terde", type: "vocab", front: "ter de", reading: "terde", meaning: "to have to", example: { jp: "Ter de trabalhar ao domingo é mau, mas no restaurante é normal.", en: "Having to work on Sundays is bad, but in a restaurant it is normal." }, drill: { jp: "Ter de trabalhar ao domingo é mau", en: "Having to work on Sundays is bad" }, accept: ["must", "have to", "to be obliged to", "need to"], hint: "PORTUGAL SAYS TER DE. Brazil says ter que, and Portugal accepts it in speech but writes de. This is the strong obligation — tenho de ir — where devia is only a recommendation. Block 1's u21 teaches precisar de, which is closer to \"need\"." },
        { id: "pt-u37l1-tentar", type: "vocab", front: "tentar", reading: "tentar", meaning: "to try", example: { jp: "Tentar outra vez é importante, e quem desiste raramente aprende.", en: "Trying again is important, and whoever gives up rarely learns." }, drill: { jp: "Tentar outra vez é muito importante", en: "Trying again is very important" }, accept: ["try", "to attempt", "to tempt"], hint: "ten-TAR, regular -ar; tentar + infinitive, with no preposition: vou tentar falar. It also means to tempt, which is where a tentação comes from. Experimentar is the other \"try\" — the one for tasting food or testing something out." },
      ],
    },
    {
      id: "pt-u37l2",
      unit: 37,
      lesson: 2,
      title: "O futuro",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Read and use the written future tense, and know when a Portuguese speaker would say it the short way instead.",
      items: [
        { id: "pt-u37l2-sera", type: "vocab", front: "será", reading: "sera", meaning: "will be", example: { jp: "Amanhã será um dia melhor, dizem sempre as pessoas que não têm de trabalhar.", en: "Tomorrow will be a better day, always say the people who don't have to work." }, drill: { jp: "Amanhã será um dia melhor", en: "Tomorrow will be a better day" }, accept: ["it will be", "he will be", "she will be", "shall be"], hint: "se-RA, stress on the end — the accent marks it. THE FUTURE IS BUILT ON THE INFINITIVE: ser + á. Same endings for every verb in the language: -ei, -ás, -á, -emos, -ão. But note the honest caveat on the last card of this lesson." },
        { id: "pt-u37l2-tera", type: "vocab", front: "terá", reading: "tera", meaning: "will have", example: { jp: "Ele terá muito trabalho amanhã, porque hoje não fez nada.", en: "He will have a lot of work tomorrow, because today he did nothing." }, drill: { jp: "Ele terá muito trabalho amanhã", en: "He will have a lot of work tomorrow" }, accept: ["he will have", "she will have", "will have", "you will have"], hint: "te-RA — ter + á, exactly the same ending as será. It also does supposition: terá uns quarenta anos means \"he must be about forty\", which is a very Portuguese use of the future and has nothing to do with time." },
        { id: "pt-u37l2-farei", type: "vocab", front: "farei", reading: "farei", meaning: "I will do", example: { jp: "Amanhã farei o jantar em casa, porque o restaurante está sempre cheio ao sábado.", en: "Tomorrow I will make dinner at home, because the restaurant is always full on Saturdays." }, drill: { jp: "Amanhã farei o jantar em casa", en: "Tomorrow I will make dinner at home" }, accept: ["i will make", "i shall do", "will do", "i'll do"], hint: "fa-RAY. -ei is the eu ending. Fazer is one of only THREE verbs with an irregular future stem — far-, dir- and trar- — so farei, not \"fazerei\". The other two are the next card and trazer." },
        { id: "pt-u37l2-direi", type: "vocab", front: "direi", reading: "direi", meaning: "I will say", example: { jp: "Direi isso ao professor amanhã, mas acho que ele já sabe.", en: "I will say that to the teacher tomorrow, but I think he already knows." }, drill: { jp: "Direi isso ao professor amanhã", en: "I will say that to the teacher tomorrow" }, accept: ["i will tell", "i shall say", "will say", "i'll say"], hint: "di-RAY, from dizer — the second irregular stem, diz- shortened to dir-. So direi, dirás, dirá. Learn farei and direi as a pair; the third, trarei from trazer, you will meet later." },
        { id: "pt-u37l2-havera", type: "vocab", front: "haverá", reading: "havera", meaning: "there will be", example: { jp: "Amanhã haverá uma greve dos comboios, por isso é melhor ir de autocarro.", en: "Tomorrow there will be a train strike, so it is better to go by bus." }, drill: { jp: "Amanhã haverá uma greve dos comboios", en: "Tomorrow there will be a train strike" }, accept: ["there will be (plural)", "will exist", "will there be"], hint: "a-ve-RA, silent h. The future of haver, completing the set with há (Unit 13) and havia (Unit 36) — and like both of them it NEVER changes for number: haverá um problema, haverá dois problemas." },
        { id: "pt-u37l2-ofuturo", type: "vocab", front: "o futuro", reading: "ofuturo", meaning: "the future", example: { jp: "O futuro é sempre difícil de saber, mas em Portugal fala-se muito dele.", en: "The future is always hard to know, but in Portugal people talk about it a lot." }, drill: { jp: "O futuro é sempre difícil de saber", en: "The future is always hard to know" }, accept: ["future", "time to come"], hint: "THE HONEST NOTE THIS LESSON NEEDS: in everyday spoken Portuguese the tense you have just learned is rare. People say vou fazer, not farei — the ir + infinitive you already had from Unit 13. Learn these forms to READ them, on signs, in news and in writing, and keep saying vou." },
      ],
    },
    {
      id: "pt-u37l3",
      unit: 37,
      lesson: 3,
      title: "O condicional",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what would happen, and use the conditional the way Portugal mostly uses it — to be polite.",
      items: [
        { id: "pt-u37l3-seria", type: "vocab", front: "seria", reading: "seria", meaning: "would be", example: { jp: "Seria bom ter mais tempo, mas com dois filhos e um emprego isso não acontece.", en: "It would be good to have more time, but with two children and a job that doesn't happen." }, drill: { jp: "Seria bom ter mais tempo", en: "It would be good to have more time" }, accept: ["it would be", "would be", "he would be", "should be"], hint: "se-REE-a. THE CONDITIONAL IS ALSO BUILT ON THE INFINITIVE, with the imperfect's own endings bolted on: ser + ia. Endings -ia, -ias, -ia, -íamos, -iam for every verb. Compare será, two cards back: será is a promise, seria is a supposition." },
        { id: "pt-u37l3-teria", type: "vocab", front: "teria", reading: "teria", meaning: "would have", example: { jp: "Com um emprego melhor ele teria mais dinheiro, mas também menos tempo.", en: "With a better job he would have more money, but also less time." }, drill: { jp: "Ele teria mais dinheiro assim", en: "He would have more money that way" }, accept: ["he would have", "she would have", "would have", "i would have"], hint: "te-REE-a — ter + ia, the same build as seria. The irregular stems from the future carry over unchanged: faria and diria, not \"fazeria\". Learn one set of stems and you have both tenses." },
        { id: "pt-u37l3-gostaria", type: "vocab", front: "gostaria", reading: "gostaria", meaning: "I would like", example: { jp: "Gostaria de falar com o médico hoje, se for possível.", en: "I would like to speak with the doctor today, if possible." }, drill: { jp: "Gostaria de falar com o médico", en: "I would like to speak with the doctor" }, accept: ["would like", "i'd like", "he would like", "she would like"], hint: "THE POLITE ONE, and the reason this lesson matters at A2. From gostar, A1 u4, and it keeps gostar's DE: gostaria DE falar. In a shop or an office Portugal softens everything this way — gostaria, queria, podia — and quero on its own sounds abrupt." },
        { id: "pt-u37l3-poderia", type: "vocab", front: "poderia", reading: "poderia", meaning: "could", example: { jp: "Ele poderia trabalhar mais horas, mas prefere estar com os filhos ao fim do dia.", en: "He could work more hours, but he prefers to be with his children at the end of the day." }, drill: { jp: "Ele poderia trabalhar mais horas", en: "He could work more hours" }, accept: ["would be able", "might", "he could", "may"], hint: "pu-de-REE-a, from poder. In practice Portugal often just uses the imperfect podia instead — podia ajudar-me? is the everyday polite request, and poderia is its more formal twin. Both are correct; podia is what you will hear." },
        { id: "pt-u37l3-faria", type: "vocab", front: "faria", reading: "faria", meaning: "would do", example: { jp: "Eu faria o jantar com muito gosto, mas hoje cheguei tarde do trabalho.", en: "I would make dinner with great pleasure, but today I got home late from work." }, drill: { jp: "Eu faria o jantar com muito gosto", en: "I would make dinner with great pleasure" }, accept: ["would make", "i would do", "he would do", "i'd do"], hint: "fa-REE-a — the irregular far- stem again, shared with farei. Com muito gosto in the drill is the standard Portuguese \"gladly\", built on the gostar you already know." },
        { id: "pt-u37l3-secalhar", type: "vocab", front: "se calhar", reading: "secalhar", meaning: "maybe", example: { jp: "Se calhar vamos ao teatro amanhã, mas ainda não comprámos bilhetes.", en: "Maybe we will go to the theatre tomorrow, but we haven't bought tickets yet." }, drill: { jp: "Se calhar vamos ao teatro amanhã", en: "Maybe we will go to the theatre tomorrow" }, accept: ["perhaps", "possibly", "it might be that"], hint: "PORTUGAL SAYS SE CALHAR. It is the everyday \"maybe\" here and is barely used in Brazil, which says talvez — block 1 teaches talvez in u28. Se calhar takes the ordinary indicative, which is why it is easier than talvez, and that is half of why Portugal reaches for it." },
      ],
    },
    {
      id: "pt-u37l4",
      unit: 37,
      lesson: 4,
      title: "O infinitivo pessoal",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Use the personal infinitive — a verb form no other language you know has — to say who the infinitive is about.",
      items: [
        { id: "pt-u37l4-epreciso", type: "vocab", front: "é preciso", reading: "epreciso", meaning: "it is necessary", example: { jp: "É preciso estudar todos os dias, mas é preciso os estudantes quererem estudar.", en: "It is necessary to study every day, but it is necessary that the students want to study." }, drill: { jp: "É preciso estudar todos os dias", en: "It is necessary to study every day" }, accept: ["you need to", "one must", "it's necessary", "we need to"], hint: "Impersonal — no subject at all, so preciso never agrees with anything here. Do not confuse it with eu preciso, \"I need\", from block 1's precisar. É preciso + infinitive is one of the two frames that open the door to the next three cards." },
        { id: "pt-u37l4-emelhor", type: "vocab", front: "é melhor", reading: "emelhor", meaning: "it is better", example: { jp: "É melhor ir ao médico hoje do que esperar até segunda-feira.", en: "It is better to go to the doctor today than to wait until Monday." }, drill: { jp: "É melhor ir ao médico hoje", en: "It is better to go to the doctor today" }, accept: ["better to", "you'd better", "it's better", "best to"], hint: "Built on melhor from A1 u11. The gentlest way to give advice in Portuguese — é melhor ires, é melhor esperarmos — and far more common than the imperative, which can sound sharp. Like é preciso, it takes a plain infinitive when nobody in particular is meant." },
        { id: "pt-u37l4-falarmos", type: "vocab", front: "falarmos", reading: "falarmos", meaning: "for us to speak", example: { jp: "É melhor falarmos com o professor antes do exame, e não depois.", en: "It is better for us to speak with the teacher before the exam, and not after." }, drill: { jp: "É melhor falarmos com o professor", en: "It is better for us to speak with the teacher" }, accept: ["us to speak", "we speak", "our speaking"], hint: "THE PERSONAL INFINITIVE, and Portuguese is nearly alone in Europe in having one — Spanish cannot do this at all. You take the plain infinitive falar and add the person: falar, falares, falar, falarMOS, falarem. It is not a tense; it just says WHO the infinitive is about." },
        { id: "pt-u37l4-fazerem", type: "vocab", front: "fazerem", reading: "fazerem", meaning: "for them to do", example: { jp: "É preciso eles fazerem o trabalho antes de sexta-feira, ou o chefe vai perguntar porquê.", en: "It is necessary for them to do the work before Friday, or the boss will ask why." }, drill: { jp: "É preciso eles fazerem o trabalho", en: "It is necessary for them to do the work" }, accept: ["them to do", "they do", "them to make", "their doing"], hint: "-em is the eles ending, and it is the one you will meet most. Compare the plain É preciso fazer o trabalho — somebody must do it — with É preciso ELES fazerem — those specific people must. That single -em is the whole difference." },
        { id: "pt-u37l4-termos", type: "vocab", front: "termos", reading: "termos", meaning: "for us to have", example: { jp: "Antes de termos casa própria vivíamos num apartamento muito pequeno no centro.", en: "Before we had our own house we lived in a very small flat in the centre." }, drill: { jp: "Antes de termos casa vivíamos aqui", en: "Before we had a house we lived here" }, accept: ["us to have", "we have", "our having"], hint: "AFTER A PREPOSITION is where the personal infinitive really earns its keep: antes de termos, depois de saírem, para fazermos, sem sabermos. English needs a whole clause for each; Portuguese just inflects the infinitive. Note os termos, unrelated, means terms." },
        { id: "pt-u37l4-serem", type: "vocab", front: "serem", reading: "serem", meaning: "for them to be", example: { jp: "Para serem médicos têm de estudar seis anos e depois fazer o internato.", en: "For them to be doctors they have to study six years and then do the residency." }, drill: { jp: "Para serem médicos têm de estudar", en: "For them to be doctors they have to study" }, accept: ["them to be", "they be", "their being"], hint: "para + personal infinitive is the commonest frame of all, and the drill pairs it with ter de from Lesson 1. Ser is irregular everywhere else and completely regular here — ser, seres, ser, sermos, serem — because the personal infinitive is built on the infinitive itself." },
      ],
    },
  ],
};
