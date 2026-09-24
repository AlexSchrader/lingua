// PT Unit 111 — Vocabulário 1 (B2) — as palavras em falta (slot: coverage-b2-1) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Authored by the pt B2 block-2 seat, 2026-09-23, to §C1–C10 (src/data/pt/unit88.js).
//
// ⚠ THIS UNIT EXISTS TO CLOSE A MEASURED HOLE, NOT TO ADD MORE B2 VOCABULARY.
// Probed against the live corpus on 2026-09-23: at u110 the course had taught
// 2,418 words and STILL could not say esse, qual, certo, só, sobre, o ponto,
// o lugar, o grupo, o tipo, a forma, o modo, a vez, mostrar, acreditar, dar,
// vir, pôr, dever (the verb), pouco, bastar, valer, próprio, alheio or mero.
// Every one is ordinary Portuguese; the band simply never had a slot for them,
// because each earlier unit had a theme and none of these belongs to a theme.
// A coverage slot is the right place, and this is what it is for.
//
// ⚠ TWO DELIBERATE COSTS, both flagged rather than hidden:
//   · pôr FOLDS TO "por", which u29 already teaches. unit1.js's header lists
//     this exact pair as the one that matters and calls the fold a judgement
//     call, not a bar: the two cards read the same to a typed answer. Taken
//     anyway, because pôr is a top-thirty Portuguese verb and writing around it
//     was costing every later unit a natural sentence.
//   · dever (to owe) sits beside devia (u37), which is an inflection of the
//     same verb used as a modal. Carded because the OWING sense is a different
//     word to a learner and was otherwise unreachable.
// NOT taken, on purpose: toda, todas, mesma — feminine inflections of taught
// todo, todos and mesmo, and therefore lexeme duplicates under §C4's corrected
// rule. esse IS taken, because it is the third member of the este/esse/aquele
// series rather than an inflection of either.
// lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT111 = {
  id: "pt-u111",
  lang: "pt",
  title: "Vocabulário 1 (B2) — as palavras em falta",
  order: 111,
  stage: "b2",
  lessons: [
    {
      id: "pt-u111l1",
      unit: 111,
      lesson: 1,
      title: "Apontar e distinguir",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Point at one thing rather than another in Portuguese — that one near you, which one, a certain one, my own, someone else's, a mere one.",
      items: [
        { id: "pt-u111l1-esse", type: "vocab", front: "esse", reading: "esse", meaning: "that (near you)", example: { jp: "Esse livro é melhor do que este, mas custa mais.", en: "That book near you is better than this one, but it costs more." }, drill: { jp: "Esse livro é melhor que este", en: "That book is better than this one" }, accept: ["that (near you)", "that", "that one there", "that one by you"], hint: "E-se. ⚠ THE MISSING THIRD OF A SET: este (u12) is near me, esse is near YOU, aquele (u12) is near neither. Portuguese keeps all three alive where English has collapsed to this and that — and pointing with the wrong one is instantly audible." },
        { id: "pt-u111l1-qual", type: "vocab", front: "qual", reading: "qual", meaning: "which one", example: { jp: "Qual é o problema real, porque o relatório fala de três.", en: "Which one is the real problem, because the report mentions three." }, drill: { jp: "Qual é o problema real aqui", en: "Which one is the real problem here" }, accept: ["which one", "which", "what (which of these)", "which of them"], hint: "KWAL, plural quais. ⚠ Asks you to CHOOSE from a known set, where que asks what something is: qual é o teu nome is the normal Portuguese for what is your name, and que é o teu nome is wrong." },
        { id: "pt-u111l1-certo", type: "vocab", front: "certo", reading: "certo", meaning: "a certain", example: { jp: "Um certo médico diz o contrário, mas ninguém sabe o nome dele.", en: "A certain doctor says the opposite, but nobody knows his name." }, drill: { jp: "Um certo médico diz o contrário", en: "A certain doctor says the opposite" }, accept: ["a certain", "certain", "some (unnamed)", "a particular"], hint: "SER-tu. ⚠ POSITION CHANGES THE MEANING, which is the whole reason to learn it: um certo médico BEFORE the noun means an unnamed one; uma resposta certa AFTER it means a correct one. Portuguese marks the difference by word order alone." },
        { id: "pt-u111l1-proprio", type: "vocab", front: "próprio", reading: "proprio", meaning: "own", example: { jp: "O próprio autor admite o erro, mas o livro continua igual.", en: "The author himself admits the mistake, but the book stays the same." }, drill: { jp: "O próprio autor admite o erro", en: "The author himself admits the mistake" }, accept: ["own", "one's own", "himself", "itself", "very same"], hint: "PRO-pryu. Two jobs: possession (o meu próprio carro, my own car) and emphasis (o próprio presidente, the president himself). ⚠ Also means appropriate — não é próprio para crianças, not suitable for children." },
        { id: "pt-u111l1-alheio", type: "vocab", front: "alheio", reading: "alheio", meaning: "someone else's", example: { jp: "Ninguém quer pagar o erro alheio, mas alguém tem de o fazer.", en: "Nobody wants to pay for someone else's mistake, but somebody has to." }, drill: { jp: "Ninguém paga o erro alheio", en: "Nobody pays for someone else's mistake" }, accept: ["someone else's", "another's", "belonging to others", "not one's own"], hint: "a-LYAY-u. The exact opposite of próprio, and English has no single word for it — o dinheiro alheio, other people's money. ⚠ Second sense: alheio a means unaware of or indifferent to, which is where o alheamento (u105) comes from." },
        { id: "pt-u111l1-mero", type: "vocab", front: "mero", reading: "mero", meaning: "mere", example: { jp: "É um mero problema de prazo, mas a empresa fala de uma crise.", en: "It is a mere deadline problem, but the company talks about a crisis." }, drill: { jp: "É um mero problema de prazo", en: "It is a mere deadline problem" }, accept: ["mere", "just a", "nothing but a", "simple"], hint: "ME-ru. Always BEFORE the noun and always dismissive — um mero pormenor, a mere detail. It is how Portuguese shrinks something the other person has just inflated, which makes it an argument word as much as an adjective." },
      ],
    },
    {
      id: "pt-u111l2",
      unit: 111,
      lesson: 2,
      title: "Dizer que coisa",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name a thing by its kind rather than its name in Portuguese — this type of, the shape of, the way of, the time it happens, the point, the place.",
      items: [
        { id: "pt-u111l2-otipo", type: "vocab", front: "o tipo", reading: "otipo", meaning: "type", example: { jp: "Este tipo de erro é comum, mas ninguém quer falar dele.", en: "This type of mistake is common, but nobody wants to talk about it." }, drill: { jp: "O tipo de erro é comum", en: "The type of mistake is common" }, accept: ["type", "the type", "kind", "sort"], hint: "TEE-pu. The everyday classifier — este tipo de, that kind of. ⚠ In Portuguese slang um tipo also means a bloke, and uma tipa a woman; the register drops sharply when there is no de after it." },
        { id: "pt-u111l2-aforma", type: "vocab", front: "a forma", reading: "aforma", meaning: "shape", example: { jp: "A forma do texto é fraca, mas o conteúdo é bom.", en: "The shape of the text is weak, but the content is good." }, drill: { jp: "A forma do texto é fraca", en: "The shape of the text is weak" }, accept: ["shape", "the shape", "form", "the form", "way"], hint: "FOR-ma. Shape, and also manner — desta forma means in this way, and de forma a means so as to. ⚠ Not o formato (u104), which is the format something is produced in rather than the shape it has." },
        { id: "pt-u111l2-omodo", type: "vocab", front: "o modo", reading: "omodo", meaning: "manner", example: { jp: "O modo como o chefe fala ofende todos, ainda que a intenção seja boa.", en: "The manner in which the boss speaks offends everyone, even though the intention is good." }, drill: { jp: "O modo como ele fala ofende", en: "The manner in which he speaks offends" }, accept: ["manner", "the manner", "way", "the way", "mode"], hint: "MO-du. ⚠ O MODO COMO is the fixed frame for the way in which — never o modo que. Portuguese has already used this noun inside de modo que (u52), de certo modo (u91) and de qualquer modo (u106); this card finally teaches it on its own." },
        { id: "pt-u111l2-avez", type: "vocab", front: "a vez", reading: "avez", meaning: "turn", example: { jp: "Desta vez o plano resulta, mas ninguém sabe se dura.", en: "This time the plan works, but nobody knows whether it lasts." }, drill: { jp: "A vez dele chega agora", en: "His turn comes now" }, accept: ["turn", "the turn", "time (occasion)", "occasion", "go"], hint: "VESH. Two meanings that share one word: a turn in a queue (é a minha vez) and an occasion (uma vez, três vezes). ⚠ The course has used it inside uma vez que (u52) and de vez em quando (u36) without ever teaching it alone." },
        { id: "pt-u111l2-oponto", type: "vocab", front: "o ponto", reading: "oponto", meaning: "point", example: { jp: "O ponto fraco do estudo é a amostra, mas o autor não fala do assunto.", en: "The weak point of the study is the sample, but the author does not talk about it." }, drill: { jp: "O ponto fraco do estudo é claro", en: "The weak point of the study is clear" }, accept: ["point", "the point", "dot", "spot", "full stop"], hint: "PON-tu. A point in every English sense — a dot, a full stop, a score, a point in an argument, a spot on a map. ⚠ The course taught o ponto de vista (u51) as a chunk; this is the bare noun, which is used far more widely." },
        { id: "pt-u111l2-olugar", type: "vocab", front: "o lugar", reading: "olugar", meaning: "place", example: { jp: "O lugar do erro é claro, mas a causa continua por explicar.", en: "The place of the mistake is clear, but the cause remains unexplained." }, drill: { jp: "O lugar do erro é claro", en: "The place of the mistake is clear" }, accept: ["place", "the place", "spot", "seat", "position"], hint: "lu-GAR. Place, and also a SEAT — um lugar no comboio — and a job (perder o lugar, to lose one's position). ⚠ Em lugar de means instead of, and ter lugar means to take place." },
      ],
    },
    {
      id: "pt-u111l3",
      unit: 111,
      lesson: 3,
      title: "Os verbos que faltavam",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Use the six commonest Portuguese verbs this course had never taught — give, come, put, show, believe, owe.",
      items: [
        { id: "pt-u111l3-dar", type: "vocab", front: "dar", reading: "dar", meaning: "to give", example: { jp: "O chefe quer dar mais tempo à equipa, mas o cliente não aceita.", en: "The boss wants to give the team more time, but the client does not accept." }, drill: { jp: "O chefe quer dar mais tempo", en: "The boss wants to give more time" }, accept: ["to give", "give", "to hand over", "to provide"], hint: "DAR. Wildly irregular: dou, dás, dá, damos, dão. ⚠ It is also the engine of dozens of Portuguese idioms the course has already used — dar-me jeito (u72), dar alta (u102), dar a matéria — so learning the bare verb unlocks all of them at once." },
        { id: "pt-u111l3-vir", type: "vocab", front: "vir", reading: "vir", meaning: "to come", example: { jp: "O dinheiro vai vir do Estado, embora ninguém saiba quando.", en: "The money is going to come from the State, although nobody knows when." }, drill: { jp: "O dinheiro vai vir do Estado", en: "The money is going to come from the State" }, accept: ["to come", "come", "to arrive from", "to originate"], hint: "VEER. Irregular and worth the trouble: venho, vens, vem, vimos, vêm. ⚠ vem (he comes) and vêm (they come) differ only by the circumflex. The course already taught venha (u69), viesse (u70), vier (u71) and vir a (u106) — this is their headword." },
        { id: "pt-u111l3-por", type: "vocab", front: "pôr", reading: "por", meaning: "to put", example: { jp: "É preciso pôr o nome no papel, mas ninguém quer assinar.", en: "One has to put the name on the paper, but nobody wants to sign." }, drill: { jp: "É preciso pôr o nome aqui", en: "One has to put the name here" }, accept: ["to put", "put", "to place", "to set down"], hint: "POR with a closed o, and the circumflex is the whole difference from por (u29), the preposition. ⚠ A KNOWN COST: both fold to the same typed answer, flagged in unit1.js's header. Its own family is large — pôr-se, repor, compor, supor, dispor — and ponha (u69) is its subjunctive." },
        { id: "pt-u111l3-mostrar", type: "vocab", front: "mostrar", reading: "mostrar", meaning: "to show", example: { jp: "O estudo quer mostrar o problema, mas o dado principal diz outra coisa.", en: "The study wants to show the problem, but the main figure says something else." }, drill: { jp: "O estudo quer mostrar o problema", en: "The study wants to show the problem" }, accept: ["to show", "show", "to display", "to demonstrate"], hint: "mosh-TRAR. Regular, and the natural verb for evidence: o gráfico mostra que. ⚠ Distinguish from indicar (u77), which points at something without displaying it, and from a montra (u16), the shop window — same root, different word." },
        { id: "pt-u111l3-acreditar", type: "vocab", front: "acreditar", reading: "acreditar", meaning: "to believe", example: { jp: "É difícil acreditar no relatório, porque a empresa o paga.", en: "It is hard to believe the report, because the company pays for it." }, drill: { jp: "É difícil acreditar neste relatório", en: "It is hard to believe this report" }, accept: ["to believe", "believe", "to trust", "to have faith in"], hint: "a-kre-di-TAR. ⚠ TAKES EM, NOT A DIRECT OBJECT: acredito nele, acredito em ti, acredito que sim. Saying acredito ele is the commonest learner error with this verb, and it is the reason the card exists at all." },
        { id: "pt-u111l3-dever", type: "vocab", front: "dever", reading: "dever", meaning: "to owe", example: { jp: "A empresa deve dinheiro ao banco, mas continua a comprar.", en: "The company owes money to the bank, but it keeps buying." }, drill: { jp: "A empresa vai dever muito dinheiro", en: "The company is going to owe a lot of money" }, accept: ["to owe", "owe", "to be in debt for", "to be obliged to"], hint: "de-VER. ⚠ TWO JOBS IN ONE VERB. With a noun it means owe — deve dinheiro. With an infinitive it is the modal should — deve chegar às nove — which is the devia the course taught at u37. The noun o dever (u32) is a duty." },
      ],
    },
    {
      id: "pt-u111l4",
      unit: 111,
      lesson: 4,
      title: "As palavras pequenas que pesam",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Use the short words that change a whole sentence in Portuguese — only, little, about, the group, to be enough, to be worth.",
      items: [
        { id: "pt-u111l4-so", type: "vocab", front: "só", reading: "so", meaning: "only (and nothing more)", example: { jp: "O chefe só quer o resultado, mas o trabalho é difícil.", en: "The boss only wants the result, but the work is difficult." }, drill: { jp: "O chefe só quer o resultado", en: "The boss only wants the result" }, accept: ["only (and nothing more)", "only", "just", "merely"], hint: "SO, with a closed o. ⚠ The SPOKEN twin of apenas (u28), which is the written one — and it doubles as the adjective alone: estou só, I am on my own. Position matters: só quero isto (I only want this) against quero só isto (I want only this)." },
        { id: "pt-u111l4-pouco", type: "vocab", front: "pouco", reading: "pouco", meaning: "little", example: { jp: "O estudo prova pouco, mas o título diz muito.", en: "The study proves little, but the title says a lot." }, drill: { jp: "O estudo prova muito pouco", en: "The study proves very little" }, accept: ["little", "not much", "few", "a small amount"], hint: "PO-ku, the exact counterweight to muito (u2). ⚠ WATCH THE ARTICLE: pouco means little in the negative sense (not enough), while um pouco means a little in the positive one. Portuguese marks the whole difference with um." },
        { id: "pt-u111l4-sobre", type: "vocab", front: "sobre", reading: "sobre", meaning: "on (the subject of)", example: { jp: "O livro sobre a crise é bom, mas ninguém o compra.", en: "The book on the crisis is good, but nobody buys it." }, drill: { jp: "O livro sobre a crise é bom", en: "The book on the crisis is good" }, accept: ["on (the subject of)", "about", "concerning", "regarding", "on top of"], hint: "SO-bre. ⚠ ONE LETTER FROM SOB (u107), and the two are opposites: sobre is on or about, sob is under. It also keeps the literal sense — o livro está sobre a mesa — though em cima de is commoner in speech." },
        { id: "pt-u111l4-ogrupo", type: "vocab", front: "o grupo", reading: "ogrupo", meaning: "group", example: { jp: "O grupo decide tudo por acordo, mas na prática o chefe manda.", en: "The group decides everything by agreement, but in practice the boss gives the orders." }, drill: { jp: "O grupo decide tudo por acordo", en: "The group decides everything by agreement" }, accept: ["group", "the group", "team", "set"], hint: "GRU-pu. A plain, high-frequency noun the band somehow never spent a card on. ⚠ In business it is also a corporate group — o grupo detém três empresas — and in school um trabalho de grupo is group work." },
        { id: "pt-u111l4-bastar", type: "vocab", front: "bastar", reading: "bastar", meaning: "to be enough", example: { jp: "Um erro basta para acabar com o projeto, mas ninguém verifica nada.", en: "One mistake is enough to finish the project off, but nobody checks anything." }, drill: { jp: "Um relatório não vai bastar aqui", en: "One report is not going to be enough here" }, accept: ["to be enough", "be enough", "to suffice", "to be sufficient"], hint: "bash-TAR, the verb behind bastante (u28). ⚠ Basta! on its own is a Portuguese speaker saying that's enough — a complete sentence of one word, and the most common form you will hear it in." },
        { id: "pt-u111l4-valer", type: "vocab", front: "valer", reading: "valer", meaning: "to be worth", example: { jp: "O acordo não vale nada sem o papel, mas o cliente aceita tudo.", en: "The agreement is worth nothing without the paper, but the client accepts everything." }, drill: { jp: "Isso não vai valer nada agora", en: "That is not going to be worth anything now" }, accept: ["to be worth", "be worth", "to count", "to be valid"], hint: "va-LER. Irregular in the first person: valho. ⚠ Vale a pena is the phrase you will meet it in most — it is worth it — and vale as a one-word answer is the Portuguese OK, fine. The noun o valor is at u58." },
      ],
    },
  ],
};
