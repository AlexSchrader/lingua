// PT Unit 27 — As compras e os preços — A2
// Portuguese A2, block 1 (units 21-30). Conventions, the pt-PT corpus decision and
// the Spanish-trap policy are in the header of unit1.js and bind this file too.
// Every vocab item carries a `drill` authored inline beside its `example`
// (RUNBOOK §4): 3-8 tokens, no punctuation, the item's own front inside it as a
// whole word. Verified against cardRouting.js canCloze/canSentence, not the lint.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT27 = {
  id: "pt-u27",
  lang: "pt",
  title: "As compras e os preços",
  order: 27,
  stage: "a2",
  lessons: [
    {
      id: "pt-u27l1",
      unit: 27,
      lesson: 1,
      title: "As lojas",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the specialised shops a Portuguese high street still has, and say which one to go to for what.",
      items: [
        { id: "pt-u27l1-osupermercado", type: "vocab", front: "o supermercado", reading: "osupermercado", meaning: "supermarket", example: { jp: "Vou ao supermercado ao sábado de manhã porque está mais vazio.", en: "I go to the supermarket on Saturday morning because it is emptier." }, drill: { jp: "O supermercado abre às oito", en: "The supermarket opens at eight" }, accept: ["the supermarket", "grocery store"], hint: "super plus mercado, the market from Unit 7 — the same building trick as autocarro. A smaller corner shop is uma mercearia." },
        { id: "pt-u27l1-apadaria", type: "vocab", front: "a padaria", reading: "apadaria", meaning: "bakery", example: { jp: "Compro pão fresco na padaria todas as manhãs antes do trabalho.", en: "I buy fresh bread at the bakery every morning before work." }, drill: { jp: "A padaria da rua é boa", en: "The bakery on the street is good" }, accept: ["the bakery", "baker's", "bread shop"], hint: "pa-da-REE-a, from pão. The -aria ending marks the shop for a thing, and it runs right through this lesson: padaria, peixaria, livraria, sapataria." },
        { id: "pt-u27l1-otalho", type: "vocab", front: "o talho", reading: "otalho", meaning: "butcher's", example: { jp: "O talho do mercado vende a melhor carne de porco da cidade.", en: "The butcher's in the market sells the best pork in the city." }, drill: { jp: "O talho vende carne de porco", en: "The butcher's sells pork" }, accept: ["the butcher's", "butcher shop", "the butcher"], hint: "TA-lyu, the lh again. PORTUGAL SAYS TALHO. Brazil says o açougue, which nobody here uses. From talhar, to cut." },
        { id: "pt-u27l1-apeixaria", type: "vocab", front: "a peixaria", reading: "apeixaria", meaning: "fishmonger's", example: { jp: "Na peixaria há sempre peixe fresco porque o barco chega de manhã.", en: "At the fishmonger's there is always fresh fish because the boat arrives in the morning." }, drill: { jp: "A peixaria tem peixe fresco", en: "The fishmonger's has fresh fish" }, accept: ["the fishmonger's", "fish shop", "fish market"], hint: "pay-sha-REE-a, built on peixe from Unit 6 with the same -aria ending as padaria. Portugal buys fish daily and the queue tells you which one is good." },
        { id: "pt-u27l1-oquiosque", type: "vocab", front: "o quiosque", reading: "oquiosque", meaning: "kiosk", example: { jp: "Comprei o jornal no quiosque que fica ao lado da estação.", en: "I bought the newspaper at the kiosk next to the station." }, drill: { jp: "O quiosque fica perto da estação", en: "The kiosk is near the station" }, accept: ["the kiosk", "newsstand", "the newsstand"], hint: "kee-OSH-ke. In Lisbon the old green quiosques now sell drinks as often as newspapers, and sitting at one is a small institution." },
        { id: "pt-u27l1-ocentrocomercial", type: "vocab", front: "o centro comercial", reading: "ocentrocomercial", meaning: "shopping centre", example: { jp: "Ao domingo o centro comercial está cheio de famílias.", en: "On Sunday the shopping centre is full of families." }, drill: { jp: "O centro comercial está sempre cheio", en: "The shopping centre is always full" }, accept: ["the shopping centre", "mall", "the mall", "shopping mall"], hint: "Two words, no hyphen. Portugal shortens it to o centro comercial or just o centro, and Brazil says o shopping — a borrowing that sounds foreign here." },
      ],
    },
    {
      id: "pt-u27l2",
      unit: 27,
      lesson: 2,
      title: "Pesos e medidas",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Ask for an amount at a Portuguese counter — a kilo, a litre, a dozen — instead of pointing.",
      items: [
        { id: "pt-u27l2-oquilo", type: "vocab", front: "o quilo", reading: "oquilo", meaning: "kilo", example: { jp: "Queria um quilo de batatas e meio quilo de cebolas.", en: "I would like a kilo of potatoes and half a kilo of onions." }, drill: { jp: "O quilo de batatas é caro", en: "The kilo of potatoes is expensive" }, accept: ["the kilo", "kilogram", "kg"], hint: "KEE-lu. Portugal weighs everything in kilos and grams — meio quilo is the everyday half kilo, and 500 gramas is what the scale says." },
        { id: "pt-u27l2-olitro", type: "vocab", front: "o litro", reading: "olitro", meaning: "litre", example: { jp: "Bebo mais de um litro de água por dia desde que comecei a correr.", en: "I drink more than a litre of water a day since I started running." }, drill: { jp: "O litro de leite é barato", en: "The litre of milk is cheap" }, accept: ["the litre", "liter", "l"], hint: "LEE-tru. Milk, water and petrol all come in litros. Note Portugal writes litro where English writes litre and American English liter." },
        { id: "pt-u27l2-aembalagem", type: "vocab", front: "a embalagem", reading: "aembalagem", meaning: "packet", example: { jp: "A embalagem do queijo diz que é da Serra da Estrela.", en: "The cheese packet says it is from the Serra da Estrela." }, drill: { jp: "A embalagem do queijo é grande", en: "The cheese packet is big" }, accept: ["the packet", "package", "pack", "packaging"], hint: "em-ba-LA-zhem, the zh. It covers both the individual packet and packaging in general. The plural shifts the spelling: as embalagens." },
        { id: "pt-u27l2-alista", type: "vocab", front: "a lista", reading: "alista", meaning: "list", example: { jp: "Fiz uma lista mas esqueci-a em casa e comprei tudo outra vez.", en: "I made a list but forgot it at home and bought everything again." }, drill: { jp: "A lista é muito grande", en: "The list is very big" }, accept: ["the list", "shopping list"], hint: "LEESH-ta. Also a menu in a restaurant — a lista de vinhos is the wine list — and a phone directory, a lista telefónica." },
        { id: "pt-u27l2-ocarrinho", type: "vocab", front: "o carrinho", reading: "ocarrinho", meaning: "trolley", example: { jp: "O carrinho estava cheio e eu só tinha ido comprar pão.", en: "The trolley was full and I had only gone to buy bread." }, drill: { jp: "O carrinho estava cheio de comida", en: "The trolley was full of food" }, accept: ["the trolley", "cart", "shopping cart", "shopping trolley"], hint: "ka-RREE-nyu — strong rr and the nh. It is carro plus the -inho ending, which makes things small: a little car. That ending is everywhere in Portuguese." },
        { id: "pt-u27l2-aduzia", type: "vocab", front: "a dúzia", reading: "aduzia", meaning: "dozen", example: { jp: "Comprei uma dúzia de ovos na loja da esquina.", en: "I bought a dozen eggs at the corner shop." }, drill: { jp: "A dúzia é muito cara", en: "The dozen is very expensive" }, accept: ["the dozen", "twelve"], hint: "DOO-zia. Meia dúzia is half a dozen, and it is also the polite way to say six on the phone, which is where seis from Unit 5 gets its substitute." },
      ],
    },
    {
      id: "pt-u27l3",
      unit: 27,
      lesson: 3,
      title: "Preços e descontos",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read a Portuguese price tag and understand a sale — discount, promotion, receipt and change.",
      items: [
        { id: "pt-u27l3-odesconto", type: "vocab", front: "o desconto", reading: "odesconto", meaning: "discount", example: { jp: "Fizeram-me um desconto porque a camisola tinha um defeito.", en: "They gave me a discount because the jumper had a fault." }, drill: { jp: "O desconto foi de dez euros", en: "The discount was ten euros" }, accept: ["the discount", "reduction", "money off"], hint: "desh-KON-tu, from descontar. Com desconto is at a discount. Note the frame is fazer um desconto — you make a discount rather than give one." },
        { id: "pt-u27l3-apromocao", type: "vocab", front: "a promoção", reading: "apromocao", meaning: "special offer", example: { jp: "O leite está em promoção esta semana no supermercado.", en: "The milk is on offer this week at the supermarket." }, drill: { jp: "A promoção acaba na sexta-feira", en: "The offer ends on Friday" }, accept: ["the promotion", "offer", "special offer", "deal"], hint: "pro-mo-SAWNG, the -ção nasal. Em promoção is the sign you look for. It also means a promotion at work, exactly as in English." },
        { id: "pt-u27l3-osaldo", type: "vocab", front: "o saldo", reading: "osaldo", meaning: "sale", example: { jp: "Comprei o casaco nos saldos de janeiro por metade do preço.", en: "I bought the coat in the January sales for half price." }, drill: { jp: "O saldo de janeiro é grande", en: "The January sale is big" }, accept: ["the sale", "clearance", "balance"], hint: "SAL-du. Usually plural for the shop sense — os saldos, the seasonal sales. In the singular it is also a bank balance, which is what your app shows you." },
        { id: "pt-u27l3-aetiqueta", type: "vocab", front: "a etiqueta", reading: "aetiqueta", meaning: "label", example: { jp: "A etiqueta diz cinquenta euros mas na caixa pagou-se menos.", en: "The label says fifty euros but at the till less was paid." }, drill: { jp: "A etiqueta do vestido é pequena", en: "The dress label is small" }, accept: ["the label", "tag", "price tag"], hint: "e-ti-KE-ta. Also etiquette, the social kind — the French word arrived twice with both meanings and Portuguese kept them in one form." },
        { id: "pt-u27l3-amoeda", type: "vocab", front: "a moeda", reading: "amoeda", meaning: "coin", example: { jp: "Não tinha uma moeda de dois euros para o carrinho do supermercado.", en: "I didn't have a two-euro coin for the supermarket trolley." }, drill: { jp: "A moeda de dois euros", en: "The two-euro coin" }, accept: ["the coin", "currency", "change"], hint: "mo-E-da. It is both a single coin and a currency — a moeda europeia is the European currency. Portuguese trolleys still want one." },
        { id: "pt-u27l3-orecibo", type: "vocab", front: "o recibo", reading: "orecibo", meaning: "receipt", example: { jp: "Guarda o recibo, sem ele não podes trocar nada.", en: "Keep the receipt, without it you can't exchange anything." }, drill: { jp: "O recibo da loja é pequeno", en: "The shop receipt is small" }, accept: ["the receipt", "proof of purchase"], hint: "rre-SEE-bu, strong initial r. A fatura from Unit 18 is the formal invoice with your tax number; o recibo is the till slip. Portugal asks for your number at every till." },
      ],
    },
    {
      id: "pt-u27l4",
      unit: 27,
      lesson: 4,
      title: "Trocar e devolver",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Take something back to a Portuguese shop — exchange it, return it, or complain about it.",
      items: [
        { id: "pt-u27l4-devolver", type: "vocab", front: "devolver", reading: "devolver", meaning: "to return", example: { jp: "Devolvi os sapatos porque eram pequenos demais.", en: "I returned the shoes because they were too small." }, drill: { jp: "Devolver os sapatos é fácil", en: "Returning the shoes is easy" }, accept: ["return", "give back", "to give back", "take back"], hint: "de-vol-VER. It is returning a THING to someone. For going back yourself you want voltar from Unit 21 — Portuguese keeps the two apart where English uses return for both." },
        { id: "pt-u27l4-trocar", type: "vocab", front: "trocar", reading: "trocar", meaning: "to exchange", example: { jp: "Troquei a camisola azul por uma verde do mesmo tamanho.", en: "I exchanged the blue jumper for a green one of the same size." }, drill: { jp: "Trocar a camisola por outra", en: "Exchanging the jumper for another" }, accept: ["exchange", "swap", "to swap", "change"], hint: "tro-KAR, and the c becomes qu in the I form: troquei. Trocar POR is to swap for. o troco from Unit 18 is the change you get back — same root." },
        { id: "pt-u27l4-encomendar", type: "vocab", front: "encomendar", reading: "encomendar", meaning: "to order", example: { jp: "Encomendei o livro na segunda e chegou na sexta-feira.", en: "I ordered the book on Monday and it arrived on Friday." }, drill: { jp: "Encomendar o livro é fácil", en: "Ordering the book is easy" }, accept: ["order", "to place an order", "place an order"], hint: "en-ko-men-DAR. a encomenda is the parcel or the order itself. For ordering in a restaurant Portugal says pedir instead." },
        { id: "pt-u27l4-entregar", type: "vocab", front: "entregar", reading: "entregar", meaning: "to deliver", example: { jp: "Entregaram a encomenda em casa no dia seguinte.", en: "They delivered the parcel to the house the next day." }, drill: { jp: "Entregar a encomenda em casa", en: "Delivering the parcel to the house" }, accept: ["deliver", "hand in", "to hand over", "hand over"], hint: "en-tre-GAR. It covers delivering a parcel and handing in homework alike — entreguei o relatório, from Unit 24. a entrega is the delivery." },
        { id: "pt-u27l4-escolher", type: "vocab", front: "escolher", reading: "escolher", meaning: "to choose", example: { jp: "Escolhi o vestido mais barato porque os outros eram muito caros.", en: "I chose the cheapest dress because the others were very expensive." }, drill: { jp: "Escolher o vestido mais barato", en: "Choosing the cheapest dress" }, accept: ["choose", "pick", "to pick", "select"], hint: "esh-ko-LYER, the lh. escolho, escolhes, escolhe. Do not confuse it with a escola from Unit 7 — five shared letters and no shared root." },
        { id: "pt-u27l4-reclamar", type: "vocab", front: "reclamar", reading: "reclamar", meaning: "to complain", example: { jp: "Reclamei na loja porque o telemóvel deixou de funcionar numa semana.", en: "I complained at the shop because the phone stopped working within a week." }, drill: { jp: "Reclamar na loja é preciso", en: "Complaining at the shop is necessary" }, accept: ["complain", "to make a complaint", "make a complaint", "claim"], hint: "rre-kla-MAR, strong initial r. Every Portuguese shop must keep o livro de reclamações, the complaints book, and asking for it is a real and effective move." },
      ],
    },
  ],
};
