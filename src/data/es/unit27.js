// ES Unit 27 — Las compras (slot: shopping-money) — A2
// ─────────────────────────────────────────────────────────────────────────────
// A1 can already buy: comprar, vender, pagar, costar, el dinero, el euro, la
// moneda, el precio, el cambio, barato, caro, la tienda, el mercado, el
// supermercado, la caja, la cuenta, la tarjeta, el banco, buscar, probar. What
// it cannot do is choose WHERE to shop, do anything with money except spend it,
// ask for an amount, or handle a return. So A2 builds the transaction out: the
// named shops (each with its -ería), the money verbs A1 skipped (gastar,
// ahorrar, prestar, deber), the containers and quantities you ask for, and the
// checkout — cash, a receipt, returning something. Every A1 shopping word is used
// in the examples and re-taught nowhere.
//   deber is taught here for "to owe"; it doubles as "must" (debo estudiar) and
//   that use falls out for free.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT27 = {
  id: "es-u27",
  lang: "es",
  title: "Las compras",
  order: 27,
  stage: "a2",
  lessons: [
    // Lesson 1: the named shops
    {
      id: "es-u27l1",
      unit: 27,
      lesson: 1,
      title: "Shops",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the right shop for each thing — la panadería, la carnicería, la frutería, el centro comercial.",
      items: [
        { id: "es-u27l1-lapanaderia", type: "vocab", front: "la panadería", reading: "lapanaderia", meaning: "bakery", example: { jp: "Compro pan en la panadería.", en: "I buy bread at the bakery." }, accept: ["the bakery", "baker's"], hint: "el pan (A1) + the -ería shop ending: the place that makes pan. That ending builds most shop names." },
        { id: "es-u27l1-lacarniceria", type: "vocab", front: "la carnicería", reading: "lacarniceria", meaning: "butcher's", example: { jp: "La carne de la carnicería es buena.", en: "The meat from the butcher's is good." }, accept: ["the butcher's", "butcher shop"], hint: "la carne (A1) + -ería. Same pattern: the shop is the product plus the ending." },
        { id: "es-u27l1-lafruteria", type: "vocab", front: "la frutería", reading: "lafruteria", meaning: "greengrocer's", example: { jp: "Compro fruta en la frutería.", en: "I buy fruit at the greengrocer's." }, accept: ["the greengrocer's", "fruit shop"], hint: "la fruta (A1) + -ería. Once you see the pattern you can name a shop you've never heard." },
        { id: "es-u27l1-lapescaderia", type: "vocab", front: "la pescadería", reading: "lapescaderia", meaning: "fishmonger's", example: { jp: "Compro pescado en la pescadería.", en: "I buy fish at the fishmonger's." }, accept: ["the fishmonger's", "fish shop"], hint: "el pescado (A1) + -ería. The last of the food shops built this way." },
        { id: "es-u27l1-elcentrocomercial", type: "vocab", front: "el centro comercial", reading: "elcentrocomercial", meaning: "shopping centre", example: { jp: "Vamos al centro comercial el sábado.", en: "We're going to the shopping centre on Saturday." }, accept: ["the mall", "shopping mall"], hint: "el centro (A1) + comercial. Where all the small shops are gathered under one roof." },
        { id: "es-u27l1-elescaparate", type: "vocab", front: "el escaparate", reading: "elescaparate", meaning: "shop window", example: { jp: "En el escaparate hay ropa nueva.", en: "There's new clothing in the shop window." }, accept: ["the shop window", "display"], hint: "The window a shop displays its goods in — not the window of a house, which is la ventana (A1)." },
      ],
    },
    // Lesson 2: what you do with money
    {
      id: "es-u27l2",
      unit: 27,
      lesson: 2,
      title: "Money verbs",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Do more than spend — gastar, ahorrar, prestar, deber — and spot a descuento or an oferta.",
      items: [
        { id: "es-u27l2-gastar", type: "vocab", front: "gastar", reading: "gastar", meaning: "to spend", example: { jp: "Gasto mucho dinero en ropa.", en: "I spend a lot of money on clothes." }, accept: ["spend (money)", "use up"], hint: "Spend money or use something up: gastar dinero, gastar agua. Spending TIME is pasar, not gastar." },
        { id: "es-u27l2-ahorrar", type: "vocab", front: "ahorrar", reading: "ahorrar", meaning: "to save", example: { jp: "Ahorro para un coche nuevo.", en: "I'm saving for a new car." }, accept: ["save (money)", "save up"], hint: "Save money or save time. Silent h: a-o-RRAR. The opposite of gastar." },
        { id: "es-u27l2-prestar", type: "vocab", front: "prestar", reading: "prestar", meaning: "to lend", example: { jp: "Mi amigo me presta dinero.", en: "My friend lends me money." }, accept: ["lend", "loan"], hint: "prestar is to lend; to borrow is pedir prestado — literally to ask for something lent." },
        { id: "es-u27l2-deber", type: "vocab", front: "deber", reading: "deber", meaning: "to owe", example: { jp: "Te debo diez euros.", en: "I owe you ten euros." }, accept: ["owe", "must", "should"], hint: "To owe money — and, with a verb after it, \"must\": debo estudiar, I must study. Same word, two jobs." },
        { id: "es-u27l2-eldescuento", type: "vocab", front: "el descuento", reading: "eldescuento", meaning: "discount", example: { jp: "La tienda tiene un descuento hoy.", en: "The shop has a discount today." }, accept: ["the discount", "reduction"], hint: "Un descuento del diez por ciento — a ten percent discount." },
        { id: "es-u27l2-laoferta", type: "vocab", front: "la oferta", reading: "laoferta", meaning: "offer", example: { jp: "Estos zapatos están en oferta.", en: "These shoes are on sale." }, accept: ["the offer", "deal", "sale"], hint: "Estar en oferta is to be on sale. Las rebajas are the big seasonal sales." },
      ],
    },
    // Lesson 3: asking for an amount
    {
      id: "es-u27l3",
      unit: 27,
      lesson: 3,
      title: "How much",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Ask for a quantity, not just a thing — un paquete, una botella, una lata, un kilo, un litro.",
      items: [
        { id: "es-u27l3-elpaquete", type: "vocab", front: "el paquete", reading: "elpaquete", meaning: "packet", example: { jp: "Compro un paquete de café.", en: "I buy a packet of coffee." }, accept: ["the packet", "package", "pack"], hint: "A packet of something, and also a parcel in the post." },
        { id: "es-u27l3-labotella", type: "vocab", front: "la botella", reading: "labotella", meaning: "bottle", example: { jp: "Una botella de agua, por favor.", en: "A bottle of water, please." }, accept: ["the bottle"], hint: "The ll is a y: bo-TE-ya. Un botellín is a small beer bottle." },
        { id: "es-u27l3-lalata", type: "vocab", front: "la lata", reading: "lalata", meaning: "can", example: { jp: "Una lata de tomate, por favor.", en: "A can of tomato, please." }, accept: ["the can", "tin"], hint: "A tin or can. ¡Qué lata! also means \"what a nuisance!\" — a can of boredom." },
        { id: "es-u27l3-elkilo", type: "vocab", front: "el kilo", reading: "elkilo", meaning: "kilo", example: { jp: "Un kilo de manzanas, por favor.", en: "A kilo of apples, please." }, accept: ["the kilo", "kilogram"], hint: "How fruit and meat are sold: un kilo de, medio kilo de. Half a kilo is medio kilo." },
        { id: "es-u27l3-ellitro", type: "vocab", front: "el litro", reading: "ellitro", meaning: "litre", example: { jp: "Compro un litro de leche.", en: "I buy a litre of milk." }, accept: ["the liter", "litre"], hint: "How milk and drinks are sold. Un litro de leche, dos litros de agua." },
        { id: "es-u27l3-lleno", type: "vocab", front: "lleno", reading: "lleno", meaning: "full", example: { jp: "La botella está llena de agua.", en: "The bottle is full of water." }, accept: ["filled", "packed"], hint: "Lleno DE — full of. The opposite is vacío, empty. That double ll is a y: YE-no." },
      ],
    },
    // Lesson 4: the checkout
    {
      id: "es-u27l4",
      unit: 27,
      lesson: 4,
      title: "At the checkout",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Deal with the till and returns — pagar en efectivo, pedir el recibo, devolver algo, hacer cola.",
      items: [
        { id: "es-u27l4-elefectivo", type: "vocab", front: "el efectivo", reading: "elefectivo", meaning: "cash", example: { jp: "Pago en efectivo, no con tarjeta.", en: "I pay in cash, not by card." }, accept: ["the cash"], hint: "Pagar en efectivo — pay in cash — against pagar con tarjeta (A1). El dinero is money in general; el efectivo is the physical cash." },
        { id: "es-u27l4-elrecibo", type: "vocab", front: "el recibo", reading: "elrecibo", meaning: "receipt", example: { jp: "¿Me da el recibo, por favor?", en: "Could you give me the receipt, please?" }, accept: ["the receipt", "proof of payment"], hint: "The proof you paid. Many shops call it el ticket instead — same thing." },
        { id: "es-u27l4-devolver", type: "vocab", front: "devolver", reading: "devolver", meaning: "to return", example: { jp: "Quiero devolver esta camisa.", en: "I want to return this shirt." }, accept: ["give back", "take back", "refund"], hint: "To give a thing back: de- + volver (A1, to go back). You return a shirt; you go back home." },
        { id: "es-u27l4-gratis", type: "vocab", front: "gratis", reading: "gratis", meaning: "free", example: { jp: "El primer café es gratis.", en: "The first coffee is free." }, accept: ["free of charge", "for free"], hint: "Free as in no cost. Free as in \"not busy\" is libre — don't mix them." },
        { id: "es-u27l4-lacola", type: "vocab", front: "la cola", reading: "lacola", meaning: "queue", example: { jp: "Hay mucha cola en la caja.", en: "There's a long queue at the till." }, accept: ["the queue", "line", "tail"], hint: "Hacer cola is to queue up. La cola is also an animal's tail — and cola the drink." },
        { id: "es-u27l4-laganga", type: "vocab", front: "la ganga", reading: "laganga", meaning: "bargain", example: { jp: "Estos zapatos son una ganga.", en: "These shoes are a bargain." }, accept: ["the bargain", "steal", "great deal"], hint: "¡Qué ganga! — what a bargain! From the same feel as ganar (u24), winning on the price." },
      ],
    },
  ],
};
