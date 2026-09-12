// PT Unit 16 — A roupa e as compras (slot: coverage-2) — A1
// Clothes, then the shop. Unit 7 gave the learner a loja and Unit 1 gave o preço,
// o dinheiro and caro — but nothing to buy and no way to pay. This unit closes
// that: what you wear, how to ask what it costs, and how a Portuguese till works.
//
// pt-PT markers carded here, all four of them words Brazil does not use:
// a camisola (Brazil: a NIGHTDRESS, not a sweater), a montra (Brazil: a vitrine),
// a prenda (Brazil: o presente) and o multibanco (Brazil: o caixa eletrônico).
// Spanish traps: a prenda (ES prenda = a garment), o troco (ES trozo = a chunk).
// The pair vestir / calçar is a genuine split English does not have — Portuguese
// uses a different verb for clothes and for footwear — and barato is carded here
// as the shopping antonym of caro (Unit 1), not as a general adjective.
//
// NOTE on two forms used in examples ahead of the grammar block: são (u16l1l2)
// and que (u16l3). Both are already in the corpus inside block 1's taught chunks
// — que horas são (u5), quantos anos tens (u3) — and plural clothing nouns
// (as calças, as meias, os sapatos) cannot take a subject without são. Unit 12's
// grammar block owns the analysis; these are used, not taught.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT16 = {
  id: "pt-u16",
  lang: "pt",
  title: "A roupa e as compras",
  order: 16,
  stage: "a1",
  lessons: [
    {
      id: "pt-u16l1",
      unit: 16,
      lesson: 1,
      title: "A roupa",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name what a Portuguese person is wearing and say whose it is.",
      items: [
        { id: "pt-u16l1-aroupa", type: "vocab", front: "a roupa", reading: "aroupa", meaning: "clothes", example: { jp: "A roupa de Ana é elegante.", en: "Ana's clothes are elegant." }, drill: { jp: "A roupa de Ana é elegante", en: "Ana's clothes are elegant" }, accept: ["the clothes", "clothing", "garments"], hint: "ROH-pa. Collective and SINGULAR — it covers everything you have on, so \"my clothes are new\" comes out as a minha roupa é nova. Laundry is a roupa suja." },
        { id: "pt-u16l1-acamisa", type: "vocab", front: "a camisa", reading: "acamisa", meaning: "shirt", example: { jp: "A camisa do pai de Tiago é elegante.", en: "Tiago's father's shirt is elegant." }, drill: { jp: "A camisa de Tiago é elegante", en: "Tiago's shirt is elegant" }, accept: ["the shirt", "blouse"], hint: "ka-MEE-za — s between vowels says z, as in a casa. A proper buttoned shirt; a t-shirt is uma t-shirt, said the English way. Do not mix it with a camisola in the next lesson, which is a sweater." },
        { id: "pt-u16l1-ascalcas", type: "vocab", front: "as calças", reading: "ascalcas", meaning: "trousers", example: { jp: "As calças de Tiago não são caras.", en: "Tiago's trousers aren't expensive." }, drill: { jp: "As calças de Tiago não são caras", en: "Tiago's trousers aren't expensive" }, accept: ["trousers", "pants", "the trousers", "the pants"], hint: "KAL-sash, cedilla giving an s and the final s shushing. ALWAYS PLURAL, like English trousers, so it takes as and umas — umas calças. Shorts are uns calções; Brazil says a calça, singular." },
        { id: "pt-u16l1-ovestido", type: "vocab", front: "o vestido", reading: "ovestido", meaning: "dress", example: { jp: "O vestido é elegante e não é caro.", en: "The dress is elegant and isn't expensive." }, drill: { jp: "O vestido de Maria é elegante", en: "Maria's dress is elegant" }, accept: ["the dress", "gown", "frock"], hint: "vesh-TEE-du — the s before t shushes. It is literally the past participle of vestir, \"the worn thing\", turned into a noun; the verb arrives in the next lesson." },
        { id: "pt-u16l1-asaia", type: "vocab", front: "a saia", reading: "asaia", meaning: "skirt", example: { jp: "A saia de Maria é moderna.", en: "Maria's skirt is modern." }, drill: { jp: "A saia de Maria é moderna", en: "Maria's skirt is modern" }, accept: ["the skirt"], hint: "SIGH-a. Spanish uses la falda, so there is no shortcut here — this one is learned fresh. Spelled identically, saia is also \"leave!\" from the verb sair; context never leaves it in doubt." },
        { id: "pt-u16l1-ocasaco", type: "vocab", front: "o casaco", reading: "ocasaco", meaning: "coat", example: { jp: "O casaco de Ana é caro.", en: "Ana's coat is expensive." }, drill: { jp: "O casaco de Ana é caro", en: "Ana's coat is expensive" }, accept: ["the coat", "jacket", "cardigan"], hint: "ka-ZA-ku. Coat, jacket and cardigan in one word. Despite the look of it there is no family link to a casa from Unit 1 — that resemblance is an accident of spelling." },
      ],
    },
    {
      id: "pt-u16l2",
      unit: 16,
      lesson: 2,
      title: "Sapatos e camisolas",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Name what you have on your feet and over your shoulders, and use the two different Portuguese verbs for putting clothes on.",
      items: [
        { id: "pt-u16l2-acamisola", type: "vocab", front: "a camisola", reading: "acamisola", meaning: "sweater", example: { jp: "A camisola de Tiago não é cara.", en: "Tiago's sweater isn't expensive." }, drill: { jp: "A camisola de Tiago não é cara", en: "Tiago's sweater isn't expensive" }, accept: ["the sweater", "jumper", "pullover", "jersey"], hint: "PORTUGAL SAYS CAMISOLA for a jumper — ka-mi-ZO-la. In Brazil a camisola is a NIGHTDRESS, so this word changes clothes across the Atlantic. A football shirt is also a camisola." },
        { id: "pt-u16l2-ossapatos", type: "vocab", front: "os sapatos", reading: "ossapatos", meaning: "shoes", example: { jp: "Os sapatos são de Ana.", en: "The shoes are Ana's." }, drill: { jp: "Os sapatos de Ana são caros", en: "Ana's shoes are expensive" }, accept: ["the shoes", "shoe"], hint: "sa-PA-tush — that final s shushes, which is most of why Portuguese plurals sound like \"-sh\". One shoe is um sapato; trainers are uns ténis." },
        { id: "pt-u16l2-asmeias", type: "vocab", front: "as meias", reading: "asmeias", meaning: "socks", example: { jp: "As meias não são caras.", en: "The socks aren't expensive." }, drill: { jp: "As meias não são caras", en: "The socks aren't expensive" }, accept: ["the socks", "sock", "stockings", "tights"], hint: "MAY-ash. Built on meio (half), the same word inside meio-dia from Unit 5 — a meia is literally a half-stocking. It covers socks and tights alike." },
        { id: "pt-u16l2-ochapeu", type: "vocab", front: "o chapéu", reading: "ochapeu", meaning: "hat", example: { jp: "O chapéu de Pedro é famoso.", en: "Pedro's hat is famous." }, drill: { jp: "O chapéu de Pedro é famoso", en: "Pedro's hat is famous" }, accept: ["the hat", "cap"], hint: "sha-PEU, ch as sh. The same word as French chapeau, and the accent over the e tells you the stress lands on that final syllable." },
        { id: "pt-u16l2-vestir", type: "vocab", front: "vestir", reading: "vestir", meaning: "to wear", example: { jp: "Vestir a camisa e o casaco.", en: "To put on the shirt and the coat." }, drill: { jp: "Vestir a camisa e o casaco", en: "To put on the shirt and the coat" }, accept: ["to put on", "wear", "to dress", "put on"], hint: "vesh-TEER: visto, vestes, veste — the e turns to i in the \"I\" form. Portuguese SPLITS English's \"put on\": vestir for clothes on the body, calçar for anything on the feet. Getting dressed is vestir-me, pronoun hooked on the end." },
        { id: "pt-u16l2-calcar", type: "vocab", front: "calçar", reading: "calcar", meaning: "to put on (footwear)", example: { jp: "Calçar os sapatos e as meias.", en: "To put on the shoes and the socks." }, drill: { jp: "Calçar os sapatos e as meias", en: "To put on the shoes and the socks" }, accept: ["to wear (shoes)", "put on shoes", "to put on footwear", "to shoe"], hint: "kal-SAR, cedilla. The footwear half of the pair — you vestir a camisa but calçar os sapatos, and mixing them up is instantly foreign. It also asks shoe size: que número calça? Gloves take a third verb again, pôr." },
      ],
    },
    {
      id: "pt-u16l3",
      unit: 16,
      lesson: 3,
      title: "Nas compras",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Go shopping in Portugal — ask what something costs, ask for your size, and try it on.",
      items: [
        { id: "pt-u16l3-comprar", type: "vocab", front: "comprar", reading: "comprar", meaning: "to buy", example: { jp: "Comprar um chapéu na loja de Ana.", en: "To buy a hat in Ana's shop." }, drill: { jp: "Comprar um chapéu na loja de Ana", en: "To buy a hat in Ana's shop" }, accept: ["buy", "to purchase", "purchase"], hint: "kom-PRAR: compro, compras, compra. Shopping as an activity is as compras — ir às compras, where a + as has fused into às." },
        { id: "pt-u16l3-quantocusta", type: "vocab", front: "quanto custa", reading: "quantocusta", meaning: "how much is it", example: { jp: "Quanto custa o casaco?", en: "How much is the coat?" }, drill: { jp: "Quanto custa o casaco de Ana", en: "How much is Ana's coat" }, accept: ["how much does it cost", "how much", "what does it cost", "how much is that", "how much is this"], hint: "A fixed chunk — the one question that gets you through any Portuguese shop. KWAN-tu KUSH-ta. For more than one thing it becomes quanto custam. The answer comes back as a number plus euros." },
        { id: "pt-u16l3-pagar", type: "vocab", front: "pagar", reading: "pagar", meaning: "to pay", example: { jp: "Pagar o bilhete e o café.", en: "To pay for the ticket and the coffee." }, drill: { jp: "Pagar o bilhete e o café", en: "To pay for the ticket and the coffee" }, accept: ["pay", "to pay for", "settle"], hint: "pa-GAR: pago, pagas, paga. No preposition follows it — you pagar a conta, never \"pay FOR\" it. Paying by card is pagar com cartão, and the sign meaning cash only is só dinheiro." },
        { id: "pt-u16l3-barato", type: "vocab", front: "barato", reading: "barato", meaning: "cheap", example: { jp: "O chapéu é barato e a camisola é cara.", en: "The hat is cheap and the sweater is expensive." }, drill: { jp: "O chapéu é barato e elegante", en: "The hat is cheap and elegant" }, accept: ["inexpensive", "low-priced", "affordable"], hint: "ba-RA-tu. The exact opposite of caro from Unit 1, and it agrees the same way: barato, barata, baratos, baratas. One warning — as a noun, uma barata is a cockroach." },
        { id: "pt-u16l3-otamanho", type: "vocab", front: "o tamanho", reading: "otamanho", meaning: "size", example: { jp: "Que tamanho é o vestido?", en: "What size is the dress?" }, drill: { jp: "O tamanho do vestido é importante", en: "The dress size is important" }, accept: ["the size"], hint: "ta-MA-nyu, with nh. Portuguese clothes use the European numbers — 38, 40, 42 — never S/M/L. Shoes are the exception: for those you ask o número, not o tamanho." },
        { id: "pt-u16l3-provar", type: "vocab", front: "provar", reading: "provar", meaning: "to try on", example: { jp: "Provar o vestido e a camisa na loja.", en: "To try on the dress and the shirt in the shop." }, drill: { jp: "Provar o vestido na loja", en: "To try on the dress in the shop" }, accept: ["try on", "to taste", "to try", "to test", "try"], hint: "pru-VAR. Two jobs and you need both: to try ON clothes, and to TASTE food or wine — provar o vinho. The fitting room is o gabinete de provas." },
      ],
    },
    {
      id: "pt-u16l4",
      unit: 16,
      lesson: 4,
      title: "Pagar na caixa",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Pay at a Portuguese till — by card or in cash — and understand the change you get back.",
      items: [
        { id: "pt-u16l4-amontra", type: "vocab", front: "a montra", reading: "amontra", meaning: "shop window", example: { jp: "A montra da loja é enorme.", en: "The shop window is enormous." }, drill: { jp: "A montra da loja é enorme", en: "The shop window is enormous" }, accept: ["the shop window", "window", "display", "store window"], hint: "PORTUGAL SAYS MONTRA — MON-tra, from the same root as \"demonstrate\". Brazil says a vitrine. Window shopping is ver montras, and the word SALDOS in one means the sales are on." },
        { id: "pt-u16l4-aprenda", type: "vocab", front: "a prenda", reading: "aprenda", meaning: "gift", example: { jp: "A prenda de aniversário de Ana é um chapéu.", en: "Ana's birthday present is a hat." }, drill: { jp: "A prenda de Ana é um chapéu", en: "Ana's present is a hat" }, accept: ["the gift", "present", "the present"], hint: "PORTUGAL SAYS PRENDA — PREN-da. Brazil says o presente, which sounds oddly formal here. And watch Spanish: una prenda there is a garment or a pledge, never a gift." },
        { id: "pt-u16l4-ocartao", type: "vocab", front: "o cartão", reading: "ocartao", meaning: "card", example: { jp: "O cartão é de Ana, não é o meu.", en: "The card is Ana's, it isn't mine." }, drill: { jp: "O cartão é de Ana", en: "The card is Ana's" }, accept: ["the card", "bank card", "credit card"], hint: "kar-TAWNG, the -ão nasal of o pão. It covers a bank card, a birthday card and plain cardboard. Your bank card is o cartão multibanco; the ID everyone here carries is o cartão de cidadão." },
        { id: "pt-u16l4-otroco", type: "vocab", front: "o troco", reading: "otroco", meaning: "change", example: { jp: "O troco é de dois euros.", en: "The change is two euros." }, drill: { jp: "O troco é de dois euros", en: "The change is two euros" }, accept: ["the change", "small change", "coins"], hint: "TRO-ku — the money that comes BACK to you, not money in general. Não tenho troco is what a Lisbon driver says when you hand over a fifty. Spanish trozo is a chunk or piece, a different word entirely." },
        { id: "pt-u16l4-acaixa", type: "vocab", front: "a caixa", reading: "acaixa", meaning: "checkout", example: { jp: "A caixa da loja é ali, à esquerda.", en: "The shop's checkout is there, on the left." }, drill: { jp: "A caixa da loja é ali", en: "The shop's checkout is there" }, accept: ["the checkout", "till", "cash register", "box", "cashier"], hint: "KIGH-sha — x says sh. Till, checkout, cashier and also simply a box. In a bank the gender splits the job: o caixa is the man at the counter, a caixa is the till itself." },
        { id: "pt-u16l4-omultibanco", type: "vocab", front: "o multibanco", reading: "omultibanco", meaning: "cash machine", example: { jp: "O multibanco é em frente à farmácia.", en: "The cash machine is opposite the pharmacy." }, drill: { jp: "O multibanco é em frente à farmácia", en: "The cash machine is opposite the pharmacy" }, accept: ["the cash machine", "atm", "cashpoint", "cash point"], hint: "PORTUGAL'S OWN WORD, and there is no alternative: Multibanco is the national bank network, so it names both the cash machine and paying by card. Brazil says o caixa eletrônico. Built on o banco from Unit 7." },
      ],
    },
  ],
};
