// PT Unit 71 — O conjuntivo futuro e os pronomes (slot: grammar-8) — B1
// ─────────────────────────────────────────────────────────────────────────────
// SLOT RETHEMED, and this is the unit the whole three-way grammar split was
// argued for. The scaffold called it "Grammar 8 — nuance, evidentiality,
// nominalization", which is Japanese's shape; Portuguese has two things at this
// point that no other unit in the language can hold:
//
// 1. THE FUTURE SUBJUNCTIVE. Portuguese is one of the very few Romance
//    languages that still uses it, and it is not literary — quando puder, se
//    precisares, assim que souber are ordinary spoken sentences. Spanish's
//    equivalent is dead, so es B1 is no guide here: an es-shaped B1 would skip
//    this entirely and leave the learner unable to say "when I can".
// 2. CLITIC PLACEMENT — ênclise vs próclise. u13 taught the FORMS me / te / se
//    / lhe and left the rule untaught: Portuguese attaches the pronoun AFTER
//    the verb by default (diz-me) and moves it BEFORE after a negative, a
//    question word, a que-clause or certain adverbs (não me digas). This is the
//    single most visible difference between European and Brazilian Portuguese,
//    and there is no other slot in the band where it fits.
//
// Both are modelled as vocab: forms and fixed phrases as fronts, the rule in
// the examples and hints, no new item type.
//
// A pt-PT NOTE CARRIED IN THE HINTS: Brazil puts the pronoun before the verb by
// default (me diz) where Portugal puts it after (diz-me). A learner who has
// heard Brazilian Portuguese will produce the Brazilian order without knowing
// it is marked, so each ênclise card names the contrast rather than leaving it.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT71 = {
  id: "pt-u71",
  lang: "pt",
  title: "O conjuntivo futuro e os pronomes",
  order: 71,
  stage: "b1",
  lessons: [
    {
      id: "pt-u71l1",
      unit: 71,
      lesson: 1,
      title: "Quando puder, se precisar",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say when something will happen without pretending to know — the tense Portuguese uses after quando and se about the future.",
      items: [
        { id: "pt-u71l1-quandofor", type: "vocab", front: "quando for", reading: "quandofor", meaning: "when I go", example: { jp: "Quando for ao Porto, levo os livros da tua irmã, porque já estão aqui há meses.", en: "When I go to Porto, I will take your sister's books, because they have been here for months." }, drill: { jp: "Quando for ao Porto levo os livros", en: "When I go to Porto I will take the books" }, accept: ["when I go", "when it is", "when I am"], hint: "After quando about the FUTURE, Portuguese cannot use the present — quando vou means \"when I go\" as a habit. For and fosse are different tenses of the same shared ser/ir form: quando for is ahead of you, se fosse is not real." },
        { id: "pt-u71l1-tiver", type: "vocab", front: "tiver", reading: "tiver", meaning: "when/if I have", example: { jp: "Quando tiver tempo, escrevo a todos os amigos, no entanto esta semana está muito cheia.", en: "When I have time, I will write to all my friends; however, this week is very full." }, drill: { jp: "Quando tiver tempo escrevo aos amigos", en: "When I have time I will write to my friends" }, accept: ["have", "when I have", "if I have"], hint: "Future subjunctive of ter, and the most-used of the whole set. Note the trio: tenho (now), tenha (present subjunctive), tiver (future subjunctive) — three forms English collapses into one." },
        { id: "pt-u71l1-estiver", type: "vocab", front: "estiver", reading: "estiver", meaning: "when/if it is", example: { jp: "Se o tempo estiver bom no sábado, vamos todos à serra, embora a estrada ainda esteja má.", en: "If the weather is good on Saturday, we will all go to the hills, although the road is still bad." }, drill: { jp: "Se o tempo estiver bom vamos à serra", en: "If the weather is good we will go to the hills" }, accept: ["is", "when it is", "if it is"], hint: "Future subjunctive of estar. Se estiver (it might happen) against se estivesse (it will not) — the first is a plan, the second a daydream, and swapping them changes the whole sentence." },
        { id: "pt-u71l1-puder", type: "vocab", front: "puder", reading: "puder", meaning: "when/if I can", example: { jp: "Liga-me quando puderes, porque preciso de falar contigo antes da reunião.", en: "Call me when you can, because I need to talk to you before the meeting." }, drill: { jp: "Faço isso quando puder", en: "I will do that when I can" }, accept: ["can", "when I can", "if I can"], hint: "Future subjunctive of poder, and the politest thing in this unit: quando puder is how you ask for something without setting a deadline. Note puder (future) against pudesse (imperfect) — one letter, two worlds." },
        { id: "pt-u71l1-fizer", type: "vocab", front: "fizer", reading: "fizer", meaning: "when/if it does", example: { jp: "Se fizer calor no domingo, comemos lá fora, mas ninguém quer decidir antes de ver o tempo.", en: "If it is hot on Sunday, we will eat outside, but nobody wants to decide before seeing the weather." }, drill: { jp: "Se fizer calor comemos lá fora", en: "If it is hot we will eat outside" }, accept: ["does", "makes", "if it does", "when it does"], hint: "Future subjunctive of fazer. Weather again runs on fazer: se fizer sol, se fizer frio. The form is built on the past stem fiz-, exactly like fizesse." },
        { id: "pt-u71l1-seprecisar", type: "vocab", front: "se precisar", reading: "seprecisar", meaning: "if you need", example: { jp: "Se precisar de alguma coisa, o meu número está no papel ao lado do telefone.", en: "If you need anything, my number is on the paper next to the telephone." }, drill: { jp: "Se precisar de alguma coisa diga", en: "If you need anything say so" }, accept: ["if you need", "if I need", "should you need"], hint: "For -ar verbs the future subjunctive looks EXACTLY like the infinitive — se precisar, se falar, se chegar. That is why this tense hides from learners: half of it looks like something you already know." },
      ],
    },
    {
      id: "pt-u71l2",
      unit: 71,
      lesson: 2,
      title: "Assim que souber",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Promise to do something as soon as a condition is met, and leave the choice open to somebody else.",
      items: [
        { id: "pt-u71l2-souber", type: "vocab", front: "souber", reading: "souber", meaning: "when/if I know", example: { jp: "Assim que souber alguma coisa, digo-te logo, porque sei que estás à espera.", en: "As soon as I know anything, I will tell you straight away, because I know you are waiting." }, drill: { jp: "Assim que souber alguma coisa digo-te", en: "As soon as I know something I will tell you" }, accept: ["know", "when I know", "if I know"], hint: "Future subjunctive of saber. Assim que (u36) is the trigger that most often carries it — assim que souber, assim que puder, assim que chegar." },
        { id: "pt-u71l2-disser", type: "vocab", front: "disser", reading: "disser", meaning: "when/if it says", example: { jp: "Faço o que o médico disser, embora não queira voltar ao hospital tão cedo.", en: "I will do whatever the doctor says, although I do not want to go back to the hospital so soon." }, drill: { jp: "Faço o que o médico disser", en: "I will do whatever the doctor says" }, accept: ["says", "tells", "when it says", "whatever it says"], hint: "Future subjunctive of dizer. O que ele disser is \"whatever he says\" — the pattern o que + future subjunctive is how Portuguese says \"whatever\", with no extra word." },
        { id: "pt-u71l2-vier", type: "vocab", front: "vier", reading: "vier", meaning: "when/if it comes", example: { jp: "Quando vier o inverno, a casa fica fria, por isso queremos mudar as janelas antes de novembro.", en: "When winter comes, the house gets cold, so we want to change the windows before November." }, drill: { jp: "Quando vier o inverno a casa fica fria", en: "When winter comes the house gets cold" }, accept: ["comes", "when it comes", "if it comes"], hint: "Future subjunctive of vir. The full set for this verb is worth saying aloud once: venho, venha, viesse, vier — present, present subjunctive, imperfect subjunctive, future subjunctive." },
        { id: "pt-u71l2-quiser", type: "vocab", front: "quiser", reading: "quiser", meaning: "when/if you want", example: { jp: "Pode ficar cá o tempo que quiser, no entanto o quarto é pequeno para duas pessoas.", en: "You can stay here as long as you want; however, the room is small for two people." }, drill: { jp: "Pode ficar cá o tempo que quiser", en: "You can stay here as long as you want" }, accept: ["want", "wants", "if you want", "whatever you want"], hint: "Future subjunctive of querer. Como quiser — \"as you wish\" — is the polite closing move in a Portuguese shop or office, and unit 73 comes back to it." },
        { id: "pt-u71l2-logoque", type: "vocab", front: "logo que", reading: "logoque", meaning: "as soon as (the moment that)", example: { jp: "Logo que a reunião acabar, mando-te uma mensagem com a decisão toda.", en: "As soon as the meeting finishes, I will send you a message with the whole decision." }, drill: { jp: "Logo que a reunião acabar mando uma mensagem", en: "As soon as the meeting finishes I will send a message" }, accept: ["as soon as", "the moment that", "once"], hint: "Interchangeable with assim que (u36) and slightly more formal. Both take the future subjunctive when they point forward. Logo on its own is \"later\" — até logo, u2." },
        { id: "pt-u71l2-der", type: "vocab", front: "der", reading: "der", meaning: "when/if it works out", example: { jp: "Passo por lá quando der, embora esta semana esteja quase toda ocupada.", en: "I will drop by when I can manage it, although this week is almost completely full." }, drill: { jp: "Passo por lá quando der", en: "I will drop by when it works out" }, accept: ["gives", "when it works out", "if it works out", "when I can"], hint: "Future subjunctive of dar. Quando der is the least committal promise in Portuguese — \"when it works out\" — and se der is the same hedge about a plan. Portuguese has no word for \"whatever\" either: it builds it from o que + this tense, as in o que ele disser." },
      ],
    },
    {
      id: "pt-u71l3",
      unit: 71,
      lesson: 3,
      title: "Os pronomes depois do verbo",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Attach a pronoun to the end of a verb the way Portugal does — and hear when a sentence sounds Brazilian.",
      items: [
        { id: "pt-u71l3-dizme", type: "vocab", front: "diz-me", reading: "dizme", meaning: "tell me", example: { jp: "Diz-me a verdade, porque a tua irmã já me contou quase tudo.", en: "Tell me the truth, because your sister has already told me almost everything." }, drill: { jp: "Diz-me a verdade por favor", en: "Tell me the truth please" }, accept: ["tell me", "say to me"], hint: "THE Portuguese default: pronoun AFTER the verb, joined with a hyphen. Brazil says me diz; Portugal says diz-me, and the difference is heard immediately. u13 gave you me — this is where it goes." },
        { id: "pt-u71l3-dame", type: "vocab", front: "dá-me", reading: "dame", meaning: "give me", example: { jp: "Dá-me um minuto, que ainda estou a falar ao telefone com o banco.", en: "Give me a minute, I am still on the phone with the bank." }, drill: { jp: "Dá-me um minuto por favor", en: "Give me a minute please" }, accept: ["give me", "hand me"], hint: "Same rule with dar. Dá-me / dê-me is the tu / você split — dê-me is what you say to a stranger, and the register units make that choice properly." },
        { id: "pt-u71l3-disselhe", type: "vocab", front: "disse-lhe", reading: "disselhe", meaning: "I told him/her", example: { jp: "Disse-lhe que a reunião mudou, mas ele já tinha saído do escritório.", en: "I told him that the meeting had moved, but he had already left the office." }, drill: { jp: "Disse-lhe que a reunião mudou", en: "I told him that the meeting moved" }, accept: ["I told him", "I told her", "I said to him", "I said to her"], hint: "lhe is the one that means TO him or TO her — u13 taught the form, this is the placement. Portuguese does not say disse a ele in careful speech; it says disse-lhe." },
        { id: "pt-u71l3-conhecoo", type: "vocab", front: "conheço-o", reading: "conhecoo", meaning: "I know him", example: { jp: "Conheço-o desde a escola, por isso sei que ele nunca diria uma coisa dessas.", en: "I have known him since school, so I know he would never say a thing like that." }, drill: { jp: "Conheço-o desde a escola", en: "I have known him since school" }, accept: ["I know him", "I know it"], hint: "o and a are the DIRECT-object pronouns — him, her, it — and this corpus teaches them here for the first time. Conheço-o (him), conheço-a (her). Portugal uses them where English would just say the name again." },
        { id: "pt-u71l3-vejoa", type: "vocab", front: "vejo-a", reading: "vejoa", meaning: "I see her", example: { jp: "Vejo-a todas as manhãs no autocarro, no entanto nunca falámos de nada.", en: "I see her every morning on the bus; however, we have never talked about anything." }, drill: { jp: "Vejo-a todas as manhãs no autocarro", en: "I see her every morning on the bus" }, accept: ["I see her", "I see it"], hint: "The feminine of the pair. Careful with the sound: after a verb ending in -r or -s the pronoun becomes -lo / -la and the verb loses its ending — ver + a = vê-la, the next card's shape." },
        { id: "pt-u71l3-ajudalo", type: "vocab", front: "ajudá-lo", reading: "ajudalo", meaning: "to help him", example: { jp: "Ninguém consegue ajudá-lo se ele não disser o que está a acontecer.", en: "Nobody can help him if he does not say what is happening." }, drill: { jp: "Ninguém consegue ajudá-lo agora", en: "Nobody can help him now" }, accept: ["to help him", "help him", "helping him"], hint: "The -r of the infinitive drops and the pronoun becomes -lo: ajudar + o = ajudá-lo, with an accent to keep the stress. Same for fazê-lo, vê-la, dizê-lo. This is the shape that makes written Portuguese look so different from Spanish." },
      ],
    },
    {
      id: "pt-u71l4",
      unit: 71,
      lesson: 4,
      title: "Os pronomes antes do verbo",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Put the pronoun in front of the verb in the four cases where Portuguese requires it — and know why it moved.",
      items: [
        { id: "pt-u71l4-naomedigas", type: "vocab", front: "não me digas", reading: "naomedigas", meaning: "don't tell me", example: { jp: "Não me digas que o comboio já saiu, porque o próximo é só daqui a duas horas.", en: "Don't tell me the train has already left, because the next one is only in two hours." }, drill: { jp: "Não me digas que o comboio saiu", en: "Don't tell me the train has left" }, accept: ["don't tell me", "do not tell me", "you don't say"], hint: "RULE 1: a negative pulls the pronoun in front. Diz-me becomes não me digas — never não digas-me. As an exclamation on its own, não me digas! is exactly English's \"you don't say!\"" },
        { id: "pt-u71l4-jalhedisse", type: "vocab", front: "já lhe disse", reading: "jalhedisse", meaning: "I already told him", example: { jp: "Já lhe disse duas vezes que a conta está paga, mas continua a ligar todas as semanas.", en: "I have already told him twice that the bill is paid, but he keeps calling every week." }, drill: { jp: "Já lhe disse que a conta está paga", en: "I already told him the bill is paid" }, accept: ["I already told him", "I have already told him", "I already told her"], hint: "RULE 2: certain adverbs pull it in front too — já, ainda, também, sempre, só. Disse-lhe on its own, já lhe disse with the adverb. The adverb is doing the pulling, not the tense." },
        { id: "pt-u71l4-nuncaavi", type: "vocab", front: "nunca a vi", reading: "nuncaavi", meaning: "I never saw her", example: { jp: "Nunca a vi tão cansada, por isso disse-lhe para ficar em casa esta semana.", en: "I have never seen her so tired, so I told her to stay at home this week." }, drill: { jp: "Nunca a vi tão cansada", en: "I never saw her so tired" }, accept: ["I never saw her", "I have never seen her", "I never saw it"], hint: "Nunca is both a negative and an adverb, so it pulls twice over. Compare vejo-a (lesson 3) with nunca a vi: the same pronoun, moved by one word in front of it." },
        { id: "pt-u71l4-ninguemoviu", type: "vocab", front: "ninguém o viu", reading: "ninguemoviu", meaning: "nobody saw him", example: { jp: "Ninguém o viu sair do escritório, embora a porta esteja sempre à vista de todos.", en: "Nobody saw him leave the office, although the door is always in everybody's view." }, drill: { jp: "Ninguém o viu sair do escritório", en: "Nobody saw him leave the office" }, accept: ["nobody saw him", "no one saw him", "nobody saw it"], hint: "RULE 3: a negative WORD as subject — ninguém, nada, nenhum — does the same job as não. Ninguém o viu, nada me disse." },
        { id: "pt-u71l4-semedisser", type: "vocab", front: "se me disser", reading: "semedisser", meaning: "if you tell me", example: { jp: "Se me disser a morada, levo-lhe as chaves amanhã de manhã.", en: "If you tell me the address, I will take the keys to you tomorrow morning." }, drill: { jp: "Se me disser a morada levo as chaves", en: "If you tell me the address I will take the keys" }, accept: ["if you tell me", "if he tells me", "should you tell me"], hint: "RULE 4: any subordinate clause — se, que, quando, porque — pulls the pronoun forward. This card carries both halves of the unit at once: the future subjunctive disser AND the próclise after se." },
        { id: "pt-u71l4-todososabem", type: "vocab", front: "todos o sabem", reading: "todososabem", meaning: "everybody knows it", example: { jp: "Todos o sabem na aldeia, no entanto ninguém fala disso à frente da família.", en: "Everybody in the village knows it; however, nobody talks about it in front of the family." }, drill: { jp: "Todos o sabem na aldeia", en: "Everybody in the village knows it" }, accept: ["everybody knows it", "everyone knows", "they all know it"], hint: "Quantifiers — todos, alguém, muitos, poucos — pull the pronoun forward as well. If you remember one thing from this lesson: the DEFAULT is after the verb, and something in front of the verb has to pull it back." },
      ],
    },
  ],
};
