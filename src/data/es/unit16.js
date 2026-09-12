// ES Unit 16 — La ropa y las compras ("Clothes and shopping") — A1 COVERAGE (slot: coverage-2)
// Strand D, unit 2 of 6. Clothes, then the money words, then the six verbs a shop
// transaction actually needs. Colours are block 2's (unit 8) and are only used here.
// Conventions and the assumed block 1–2 vocabulary: see es/unit12.js.
//   FREE: María
//   (Only proper names and transparent cognates, per the checker's contract.
//   Conjugated forms of a verb this block teaches — voy, puedo, cuesta — are
//   deliberately NOT listed: they are the headword convention, and declaring
//   them free would hide a genuinely untaught form later.)
export const ES_UNIT16 = {
  id: "es-u16",
  lang: "es",
  title: "La ropa y las compras",
  order: 16,
  stage: "a1",
  lessons: [
    {
      id: "es-u16l1",
      unit: 16,
      lesson: 1,
      title: "La ropa",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name what somebody is wearing: la camisa, el pantalón, el vestido, los zapatos.",
      items: [
        { id: "es-u16l1-laropa", type: "vocab", front: "la ropa", reading: "laropa", meaning: "the clothes", example: { jp: "Mi ropa está en el armario.", en: "My clothes are in the wardrobe." }, drill: { jp: "La ropa está en el armario", en: "The clothes are in the wardrobe" }, accept: ["clothing", "clothes"], hint: "Singular in Spanish, plural in English: la ropa ES nueva = the clothes ARE new." },
        { id: "es-u16l1-lacamisa", type: "vocab", front: "la camisa", reading: "lacamisa", meaning: "the shirt", example: { jp: "La camisa es blanca.", en: "The shirt is white." }, drill: { jp: "La camisa es blanca", en: "The shirt is white" }, accept: ["shirt", "blouse"] },
        { id: "es-u16l1-elpantalon", type: "vocab", front: "el pantalón", reading: "elpantalon", meaning: "the trousers", example: { jp: "Compro un pantalón nuevo.", en: "I'm buying new trousers." }, drill: { jp: "El pantalón es negro", en: "The trousers are black" }, accept: ["pants", "trousers", "pair of trousers"], hint: "One garment, two ways to say it: un pantalón or unos pantalones. Both are standard, and the plural is the more common of the two in most of the Spanish-speaking world." },
        { id: "es-u16l1-elvestido", type: "vocab", front: "el vestido", reading: "elvestido", meaning: "the dress", example: { jp: "El vestido es muy bonito.", en: "The dress is very pretty." }, drill: { jp: "El vestido es muy bonito", en: "The dress is very pretty" }, accept: ["dress", "gown"] },
        { id: "es-u16l1-lachaqueta", type: "vocab", front: "la chaqueta", reading: "lachaqueta", meaning: "the jacket", example: { jp: "Hace frío; necesito una chaqueta.", en: "It's cold; I need a jacket." }, drill: { jp: "La chaqueta es azul", en: "The jacket is blue" }, accept: ["jacket", "coat"] },
        { id: "es-u16l1-loszapatos", type: "vocab", front: "los zapatos", reading: "loszapatos", meaning: "the shoes", example: { jp: "Mis zapatos son negros.", en: "My shoes are black." }, drill: { jp: "Los zapatos están sucios", en: "The shoes are dirty" }, accept: ["shoes", "pair of shoes"] },
      ],
    },
    {
      id: "es-u16l2",
      unit: 16,
      lesson: 2,
      title: "Más ropa",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Dress for the weather and carry your things: el abrigo, la falda, los calcetines, las gafas, el bolso.",
      items: [
        { id: "es-u16l2-elabrigo", type: "vocab", front: "el abrigo", reading: "elabrigo", meaning: "the coat", example: { jp: "En enero necesito un abrigo.", en: "In January I need a coat." }, drill: { jp: "El abrigo es para el frío", en: "The coat is for the cold" }, accept: ["overcoat", "coat"] },
        { id: "es-u16l2-lafalda", type: "vocab", front: "la falda", reading: "lafalda", meaning: "the skirt", example: { jp: "La falda es roja.", en: "The skirt is red." }, drill: { jp: "La falda es roja", en: "The skirt is red" }, accept: ["skirt"] },
        { id: "es-u16l2-loscalcetines", type: "vocab", front: "los calcetines", reading: "loscalcetines", meaning: "the socks", example: { jp: "Los calcetines están en el armario.", en: "The socks are in the wardrobe." }, drill: { jp: "Los calcetines son verdes", en: "The socks are green" }, accept: ["socks", "pair of socks"] },
        { id: "es-u16l2-elsombrero", type: "vocab", front: "el sombrero", reading: "elsombrero", meaning: "the hat", example: { jp: "Un sombrero para el sol.", en: "A hat for the sun." }, drill: { jp: "El sombrero es de México", en: "The hat is from Mexico" }, accept: ["hat", "sun hat"], hint: "From sombra, shade — a sombrero is literally a shade-maker." },
        { id: "es-u16l2-lasgafas", type: "vocab", front: "las gafas", reading: "lasgafas", meaning: "the glasses", example: { jp: "No veo bien sin gafas.", en: "I can't see well without glasses." }, drill: { jp: "Las gafas están en la mesa", en: "The glasses are on the table" }, accept: ["glasses", "spectacles", "eyeglasses"], hint: "Always plural, like English: las gafas son nuevas." },
        { id: "es-u16l2-elbolso", type: "vocab", front: "el bolso", reading: "elbolso", meaning: "the handbag", example: { jp: "La llave está en el bolso.", en: "The key is in the handbag." }, drill: { jp: "El bolso es de mi madre", en: "The handbag is my mother's" }, accept: ["handbag", "purse", "bag"], hint: "el bolso is the bag you carry; la bolsa (Unit 15) is the one the shop gives you." },
      ],
    },
    {
      id: "es-u16l3",
      unit: 16,
      lesson: 3,
      title: "El dinero",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Handle money in a shop: el dinero, el precio, la tarjeta, el cambio.",
      items: [
        { id: "es-u16l3-eldinero", type: "vocab", front: "el dinero", reading: "eldinero", meaning: "the money", example: { jp: "No tengo dinero hoy.", en: "I have no money today." }, drill: { jp: "El dinero está en el banco", en: "The money is in the bank" }, accept: ["money", "cash"] },
        { id: "es-u16l3-elprecio", type: "vocab", front: "el precio", reading: "elprecio", meaning: "the price", example: { jp: "El precio es muy bueno.", en: "The price is very good." }, drill: { jp: "El precio es muy caro", en: "The price is very high" }, accept: ["price", "cost"] },
        { id: "es-u16l3-latarjeta", type: "vocab", front: "la tarjeta", reading: "latarjeta", meaning: "the card", example: { jp: "Mi tarjeta está en el bolso.", en: "My card is in my handbag." }, drill: { jp: "La tarjeta está en el bolso", en: "The card is in the handbag" }, accept: ["bank card", "credit card", "card"] },
        { id: "es-u16l3-eleuro", type: "vocab", front: "el euro", reading: "eleuro", meaning: "the euro", example: { jp: "Tengo diez euros.", en: "I have ten euros." }, drill: { jp: "El euro es de Europa", en: "The euro is from Europe" }, accept: ["euro"] },
        { id: "es-u16l3-elcambio", type: "vocab", front: "el cambio", reading: "elcambio", meaning: "the change", example: { jp: "¿Tiene cambio de diez euros?", en: "Do you have change for ten euros?" }, drill: { jp: "El cambio es un euro", en: "The change is one euro" }, accept: ["change", "small change"] },
        { id: "es-u16l3-lamoneda", type: "vocab", front: "la moneda", reading: "lamoneda", meaning: "the coin", example: { jp: "Tengo una moneda de dos euros.", en: "I have a two-euro coin." }, drill: { jp: "La moneda está en el suelo", en: "The coin is on the floor" }, accept: ["coin", "currency"], hint: "Both the coin in your hand and the currency itself: el euro es la moneda de España." },
      ],
    },
    {
      id: "es-u16l4",
      unit: 16,
      lesson: 4,
      title: "Comprar y pagar",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Get through a shop: buscar what you want, probar it, ask what it cuesta, and pagar.",
      items: [
        { id: "es-u16l4-pagar", type: "vocab", front: "pagar", reading: "pagar", meaning: "to pay", example: { jp: "Pago con tarjeta.", en: "I'll pay by card." }, drill: { jp: "Quiero pagar con tarjeta", en: "I want to pay by card" }, accept: ["pay", "pays"], hint: "pagar con tarjeta = pay BY card. Spanish uses con where English uses \"by\" here." },
        { id: "es-u16l4-costar", type: "vocab", front: "costar", reading: "costar", meaning: "to cost", example: { jp: "El vestido cuesta doce euros.", en: "The dress costs twelve euros." }, drill: { jp: "El abrigo puede costar mucho", en: "The coat can cost a lot" }, accept: ["cost", "costs"], hint: "You almost only ever meet it in two forms: cuesta for one thing, cuestan for several." },
        { id: "es-u16l4-vender", type: "vocab", front: "vender", reading: "vender", meaning: "to sell", example: { jp: "La tienda vende ropa.", en: "The shop sells clothes." }, drill: { jp: "Quiero vender mi coche viejo", en: "I want to sell my old car" }, accept: ["sell", "sells"] },
        { id: "es-u16l4-llevar", type: "vocab", front: "llevar", reading: "llevar", meaning: "to wear", example: { jp: "María lleva un vestido rojo.", en: "María is wearing a red dress." }, drill: { jp: "Quiero llevar una camisa blanca", en: "I want to wear a white shirt" }, accept: ["carry", "take", "to carry"], hint: "One verb for wear AND carry — both are \"having it on you\": llevo una chaqueta, llevo el bolso." },
        { id: "es-u16l4-buscar", type: "vocab", front: "buscar", reading: "buscar", meaning: "to look for", example: { jp: "Busco unos zapatos negros.", en: "I'm looking for some black shoes." }, drill: { jp: "Quiero buscar mis gafas", en: "I want to look for my glasses" }, accept: ["search", "look for", "search for"], hint: "No preposition after it: busco un vestido, never \"busco para un vestido\"." },
        { id: "es-u16l4-probar", type: "vocab", front: "probar", reading: "probar", meaning: "to try", example: { jp: "¿Puedo probarme la chaqueta?", en: "Can I try the jacket on?" }, drill: { jp: "Quiero probar el vestido", en: "I want to try on the dress" }, accept: ["try on", "taste", "to try on"], hint: "Trying CLOTHES on takes -me on the end: probarme la chaqueta. Plain probar is tasting or testing: probar el café. (The -me pattern gets taught properly in Unit 19.)" },
      ],
    },
  ],
};
