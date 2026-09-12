// PT Unit 32 — A sociedade e a cidadania ("Society and daily life") — A2
// ─────────────────────────────────────────────────────────────────────────────
// The scaffold slot is "Society and daily life", but DAILY LIFE is block 1's u21
// (a rotina diária) and u30 (a casa e as tarefas). What is left, and what A2
// genuinely needs, is the public half: the people you live among, the rules you
// live under, the values behind them, and how you hear about any of it.
// So this unit is society, not routine, and the title says so.
//
// `a greve` earns its card on cultural grounds: Portugal strikes — transport,
// teachers, doctors — and a learner who cannot read "greve dos comboios" on a
// station board will simply not get home.
// Word families taught together on purpose here: respeitar / o respeito, and
// acontecer / o acontecimento. See the u31 header.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT32 = {
  id: "pt-u32",
  lang: "pt",
  title: "A sociedade e a cidadania",
  order: 32,
  stage: "a2",
  lessons: [
    {
      id: "pt-u32l1",
      unit: 32,
      lesson: 1,
      title: "A sociedade",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the people around you — your neighbourhood, your community, the population of a place.",
      items: [
        { id: "pt-u32l1-asociedade", type: "vocab", front: "a sociedade", reading: "asociedade", meaning: "society", example: { jp: "A sociedade portuguesa está a mudar depressa, especialmente nas cidades grandes.", en: "Portuguese society is changing fast, especially in the big cities." }, drill: { jp: "A sociedade portuguesa está a mudar", en: "Portuguese society is changing" }, accept: ["the society", "community"], hint: "su-si-e-DA-de. Another -dade noun, so feminine and stressed at the end. In business it also means a company — uma sociedade anónima is what Portugal writes where English writes plc." },
        { id: "pt-u32l1-apopulacao", type: "vocab", front: "a população", reading: "apopulacao", meaning: "population", example: { jp: "A população de Lisboa cresceu muito quando os turistas começaram a chegar.", en: "Lisbon's population grew a lot when the tourists began to arrive." }, drill: { jp: "A população de Lisboa é grande", en: "Lisbon's population is big" }, accept: ["the population", "people", "inhabitants"], hint: "pu-pu-la-SAWNG — the -ção ending from Unit 7, nasal at the end, and always feminine. Plural as populações, with the õe spelling." },
        { id: "pt-u32l1-ocidadao", type: "vocab", front: "o cidadão", reading: "ocidadao", meaning: "citizen", example: { jp: "Qualquer cidadão pode escrever ao governo quando um serviço público não funciona.", en: "Any citizen can write to the government when a public service doesn't work." }, drill: { jp: "O cidadão tem direitos e deveres", en: "The citizen has rights and duties" }, accept: ["the citizen", "national", "member of the public"], hint: "si-da-DAWNG, built on a cidade from Unit 7 — literally a city-dweller. Feminine a cidadã, plural os cidadãos and as cidadãs, exactly the -ão/-ã pattern Unit 14 taught with alemão." },
        { id: "pt-u32l1-acomunidade", type: "vocab", front: "a comunidade", reading: "acomunidade", meaning: "community", example: { jp: "A comunidade da aldeia é pequena, por isso todos se conhecem.", en: "The village community is small, so everyone knows each other." }, drill: { jp: "A comunidade da aldeia é pequena", en: "The village community is small" }, accept: ["the community", "group"], hint: "ku-mu-ni-DA-de. Note how much work -dade does across this unit: sociedade, comunidade, and then liberdade and igualdade in Lesson 3. Spot the ending and you know the gender before you know the word." },
        { id: "pt-u32l1-ovizinho", type: "vocab", front: "o vizinho", reading: "ovizinho", meaning: "neighbour", example: { jp: "O vizinho faz muito barulho ao domingo, mas é uma pessoa amável.", en: "The neighbour makes a lot of noise on Sundays, but he is a kind person." }, drill: { jp: "O vizinho é uma pessoa amável", en: "The neighbour is a kind person" }, accept: ["neighbor", "the neighbour", "the neighbor"], hint: "vi-ZEE-nyu, with the nh; feminine a vizinha. In a Portuguese prédio the vizinhos are an institution — o vizinho de cima, o vizinho do lado — and a vizinhança is the whole neighbourhood." },
        { id: "pt-u32l1-obairro", type: "vocab", front: "o bairro", reading: "obairro", meaning: "neighbourhood", example: { jp: "O bairro onde moro é tranquilo e tem padaria, farmácia e mercado.", en: "The neighbourhood where I live is quiet and has a bakery, a pharmacy and a market." }, drill: { jp: "O bairro onde moro é tranquilo", en: "The neighbourhood where I live is quiet" }, accept: ["neighborhood", "district", "quarter", "the neighbourhood"], hint: "BY-rru, with the strong rr of carro. Lisbon's are famous enough to be proper names — o Bairro Alto, Alfama, a Mouraria — and o bairro is a much warmer word than English \"district\"." },
      ],
    },
    {
      id: "pt-u32l2",
      unit: 32,
      lesson: 2,
      title: "O governo e as leis",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Follow a conversation about government, laws, voting and taxes well enough to know what is being complained about.",
      items: [
        { id: "pt-u32l2-ogoverno", type: "vocab", front: "o governo", reading: "ogoverno", meaning: "government", example: { jp: "O governo já explicou que vai mudar a lei dos impostos para o ano.", en: "The government has already explained that it will change the tax law next year." }, drill: { jp: "O governo vai mudar a lei", en: "The government is going to change the law" }, accept: ["the government", "administration"], hint: "gu-VER-nu. From governar, to govern. Portugal is SEMI-PRESIDENTIAL: o primeiro-ministro runs the government, while o Presidente da República is separately and directly elected, appoints the prime minister, and can veto a law or dissolve parliament. Neither an American president nor a ceremonial one." },
        { id: "pt-u32l2-alei", type: "vocab", front: "a lei", reading: "alei", meaning: "law", example: { jp: "A lei é igual para todos, mas raramente funciona assim.", en: "The law is the same for everyone, but it rarely works that way." }, drill: { jp: "A lei é igual para todos", en: "The law is the same for everyone" }, accept: ["the law", "act", "statute"], hint: "LAY, one syllable. Plural as leis. Do not confuse it with o leite from Unit 6 — the l and the vowel are all they share." },
        { id: "pt-u32l2-votar", type: "vocab", front: "votar", reading: "votar", meaning: "to vote", example: { jp: "Em Portugal pode votar quem já tem dezoito anos.", en: "In Portugal anyone who is already eighteen can vote." }, drill: { jp: "Votar é um direito e um dever", en: "Voting is a right and a duty" }, accept: ["vote", "to cast a vote"], hint: "vu-TAR, regular -ar. Votar EM someone — voto no Tiago — with the contraction from Unit 12. Votar em branco, using branco from Unit 8, is to hand in a deliberately blank ballot, and Portugal counts those separately." },
        { id: "pt-u32l2-aeleicao", type: "vocab", front: "a eleição", reading: "aeleicao", meaning: "election", example: { jp: "A eleição é em setembro e ainda não sabemos quem vai ganhar.", en: "The election is in September and we still don't know who is going to win." }, drill: { jp: "A eleição é em setembro", en: "The election is in September" }, accept: ["the election", "vote", "poll"], hint: "e-lay-SAWNG. Another -ção noun, feminine, plural as eleições. Portugal votes on a Sunday, always, which is why domingo turns up in every news report about one." },
        { id: "pt-u32l2-oimposto", type: "vocab", front: "o imposto", reading: "oimposto", meaning: "tax", example: { jp: "O imposto da gasolina subiu outra vez, e por isso ir de carro ficou muito caro.", en: "Fuel tax has gone up again, and so going by car has become very expensive." }, drill: { jp: "O imposto é muito alto este ano", en: "The tax is very high this year" }, accept: ["the tax", "duty", "levy"], hint: "eem-POSH-tu. The one you meet daily is o IVA, Portugal's VAT, printed on every recibo. From impor, to impose — literally the thing imposed on you." },
        { id: "pt-u32l2-odireito", type: "vocab", front: "o direito", reading: "odireito", meaning: "right", example: { jp: "O direito ao trabalho e à saúde está escrito na Constituição.", en: "The right to work and to health is written in the Constitution." }, drill: { jp: "O direito ao trabalho é importante", en: "The right to work is important" }, accept: ["the right", "entitlement", "law"], hint: "di-RAY-tu. THREE jobs in one word: a right you hold, the study of law (ele estuda Direito), and the direction right — which you already met inside à direita, Unit 7. Only the last one takes a feminine form." },
      ],
    },
    {
      id: "pt-u32l3",
      unit: 32,
      lesson: 3,
      title: "Os valores",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the values people argue about — freedom, equality, safety — and say what you owe other people.",
      items: [
        { id: "pt-u32l3-aliberdade", type: "vocab", front: "a liberdade", reading: "aliberdade", meaning: "freedom", example: { jp: "A liberdade de imprensa chegou a Portugal apenas depois do vinte e cinco de abril.", en: "Press freedom came to Portugal only after the twenty-fifth of April." }, drill: { jp: "A liberdade é muito importante para todos", en: "Freedom is very important for everyone" }, accept: ["liberty", "the freedom"], hint: "li-ber-DA-de. A loaded word here: the 25 de Abril you met in Unit 9 is the day Portugal got it back, and Lisbon's bridge was renamed a Ponte 25 de Abril the same year." },
        { id: "pt-u32l3-aigualdade", type: "vocab", front: "a igualdade", reading: "aigualdade", meaning: "equality", example: { jp: "A igualdade entre homens e mulheres no trabalho ainda não é completa.", en: "Equality between men and women at work is still not complete." }, drill: { jp: "A igualdade é um direito de todos", en: "Equality is a right for everyone" }, accept: ["the equality", "fairness", "parity"], hint: "i-gwal-DA-de, built on igual. Its opposite is a desigualdade — Portuguese builds most opposites with des-, the same prefix that turns cansar into descansar." },
        { id: "pt-u32l3-aseguranca", type: "vocab", front: "a segurança", reading: "aseguranca", meaning: "safety", example: { jp: "A segurança do bairro melhorou muito quando puseram mais luz nas ruas.", en: "The neighbourhood's safety improved a lot when they put more light in the streets." }, drill: { jp: "A segurança do bairro melhorou muito", en: "The neighbourhood's safety has improved a lot" }, accept: ["security", "the safety"], hint: "se-gu-RAN-sa, cedilla. Safety AND security in one word, plus the seatbelt: o cinto de segurança. From seguro, which means both safe and insured — o seguro is an insurance policy." },
        { id: "pt-u32l3-odever", type: "vocab", front: "o dever", reading: "odever", meaning: "duty", example: { jp: "O dever de um cidadão não é apenas votar, é também pagar os impostos.", en: "A citizen's duty is not only to vote, it is also to pay taxes." }, drill: { jp: "O dever de um cidadão é votar", en: "A citizen's duty is to vote" }, accept: ["obligation", "the duty", "homework"], hint: "de-VER. This is the INFINITIVE dever used as a noun, which Portuguese does freely — o dever, o poder, o jantar are all verbs wearing an article. Unit 37 teaches dever as the verb \"must\". In school, os deveres are the homework." },
        { id: "pt-u32l3-respeitar", type: "vocab", front: "respeitar", reading: "respeitar", meaning: "to respect", example: { jp: "Respeitar quem tem outra opinião é mais difícil do que parece.", en: "Respecting people who hold a different opinion is harder than it seems." }, drill: { jp: "Respeitar os vizinhos é muito importante", en: "Respecting the neighbours is very important" }, accept: ["respect", "to honour", "to abide by"], hint: "rresh-pay-TAR, strong initial r. It covers respecting a person AND obeying a rule — respeitar a lei, respeitar o horário. Regular -ar throughout." },
        { id: "pt-u32l3-orespeito", type: "vocab", front: "o respeito", reading: "orespeito", meaning: "respect", example: { jp: "O respeito pelos mais velhos ainda é muito forte nas aldeias.", en: "Respect for older people is still very strong in the villages." }, drill: { jp: "O respeito é uma qualidade importante", en: "Respect is an important quality" }, accept: ["the respect", "regard", "esteem"], hint: "rresh-PAY-tu, the noun of the card before — learn the pair as one item. It takes POR: respeito POR alguém. And a respeito de means \"regarding\", which is how formal letters open." },
      ],
    },
    {
      id: "pt-u32l4",
      unit: 32,
      lesson: 4,
      title: "As notícias",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say what has happened and where you heard it, and understand a strike notice well enough to change your plans.",
      items: [
        { id: "pt-u32l4-anoticia", type: "vocab", front: "a notícia", reading: "anoticia", meaning: "news", example: { jp: "A notícia está no jornal de hoje, mas a imprensa ainda não explicou o caso.", en: "The news is in today's paper, but the press still hasn't explained the case." }, drill: { jp: "A notícia está no jornal de hoje", en: "The news is in today's paper" }, accept: ["the news", "news item", "story", "report"], hint: "nu-TEE-si-a. COUNTABLE, unlike English: uma notícia is one news story, and as notícias is the news bulletin — vou ver as notícias. For news in general Portuguese goes plural: as notícias." },
        { id: "pt-u32l4-aimprensa", type: "vocab", front: "a imprensa", reading: "aimprensa", meaning: "the press", example: { jp: "A imprensa fala muito do governo, mas quase nunca dos bairros como o meu.", en: "The press talks a lot about the government, but almost never about neighbourhoods like mine." }, drill: { jp: "A imprensa fala muito do governo", en: "The press talks a lot about the government" }, accept: ["press", "media", "newspapers"], hint: "eem-PREN-sa. Same root as imprimir, to print, which you will meet in Unit 33 — the press is literally the printing. Portugal's dailies are o Público, o Expresso and o Jornal de Notícias." },
        { id: "pt-u32l4-acontecer", type: "vocab", front: "acontecer", reading: "acontecer", meaning: "to happen", example: { jp: "Isso vai acontecer outra vez se o governo não mudar a lei.", en: "That is going to happen again if the government doesn't change the law." }, drill: { jp: "Isso vai acontecer em setembro", en: "That is going to happen in September" }, accept: ["happen", "to occur", "to take place"], hint: "a-kon-te-SER, regular -er. Usually third person only, because things happen rather than people — o que aconteceu? is the standard \"what happened?\". Acontece que… opens an explanation, like English \"it turns out that\"." },
        { id: "pt-u32l4-oacontecimento", type: "vocab", front: "o acontecimento", reading: "oacontecimento", meaning: "event", example: { jp: "O acontecimento foi na praça e o jornal de hoje fala dele em duas páginas.", en: "The event took place in the square and today's paper covers it in two pages." }, drill: { jp: "O acontecimento foi na praça", en: "The event was in the square" }, accept: ["the event", "occurrence", "happening", "incident"], hint: "The -mento noun of acontecer, exactly as o comportamento comes from comportar-se. Use it for something that HAPPENED; for a scheduled event — a concert, a match — Portugal says um evento or um espetáculo." },
        { id: "pt-u32l4-agreve", type: "vocab", front: "a greve", reading: "agreve", meaning: "strike", example: { jp: "A greve dos comboios começa amanhã, por isso vou de autocarro para o trabalho.", en: "The train strike starts tomorrow, so I'm going to work by bus." }, drill: { jp: "A greve dos comboios começa amanhã", en: "The train strike starts tomorrow" }, accept: ["the strike", "walkout", "industrial action"], hint: "GREH-ve, open e. Learn this one for practical reasons: Portugal strikes often and the notices say GREVE in capitals at every station. Fazer greve is to strike; os grevistas are the strikers." },
        { id: "pt-u32l4-oservico", type: "vocab", front: "o serviço", reading: "oservico", meaning: "service", example: { jp: "O serviço do hotel é muito bom, mas na semana da greve o restaurante fechou.", en: "The hotel service is very good, but in the week of the strike the restaurant closed." }, drill: { jp: "O serviço do hotel é muito bom", en: "The hotel service is very good" }, accept: ["the service", "duty", "shift"], hint: "ser-VEE-su, cedilla. From servir. Two useful set phrases: os serviços públicos are public services, and a farmácia de serviço from Unit 7 is the pharmacy on duty tonight. Estar de serviço is to be on duty." },
      ],
    },
  ],
};
