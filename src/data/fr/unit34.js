// FR Unit 34 — Les achats ("Shopping and money") — A2
// A1 covered the food shops and the act of buying (u18) plus the money words
// (u11l3: l'euro, le prix, l'argent, je paie, la carte, gratuit). This unit is
// everything around the transaction: the other shops, the checkout, what a thing
// costs, and the bank.
// Front-collision notes (lower slot wins, so these resolve without coordination):
//   - le billet is already taught as a travel ticket (u19l2), so a banknote is not
//     taught here under that front; cash is carried by en espèces.
//   - la pièce goes to u37 as a room, so the wallet word here is le porte-monnaie.
//   - l'addition (u20l3) is the restaurant bill; la facture below is glossed
//     "invoice" so the two never compete for the same answer on a choice card.
// Conventions + the A2 infinitive decision: see the header of fr/unit28.js.
export const FR_UNIT34 = {
  id: "fr-u34",
  lang: "fr",
  title: "Les achats",
  order: 34,
  stage: "a2",
  lessons: [
    {
      id: "fr-u34l1",
      unit: 34,
      lesson: 1,
      title: "The shops",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say which shop you're going to: the bookshop, the butcher's, the cake shop, the shopping centre — and find the right aisle.",
      items: [
        { id: "fr-u34l1-laboutique", type: "vocab", front: "la boutique", reading: "laboutique", meaning: "small shop", example: { jp: "C'est une petite boutique.", en: "It's a small shop." }, accept: ["boutique", "shop"], hint: "le magasin is any shop; une boutique is a small one." },
        { id: "fr-u34l1-lalibrairie", type: "vocab", front: "la librairie", reading: "lalibrairie", meaning: "bookshop", example: { jp: "J'achète un livre à la librairie.", en: "I'm buying a book at the bookshop." }, accept: ["bookstore", "the bookshop"], hint: "A false friend: a library is la bibliothèque. La librairie sells books." },
        { id: "fr-u34l1-laboucherie", type: "vocab", front: "la boucherie", reading: "laboucherie", meaning: "butcher's", example: { jp: "À la boucherie, j'achète de la viande.", en: "At the butcher's I buy meat." }, accept: ["butcher shop", "the butchers"] },
        { id: "fr-u34l1-lapatisserie", type: "vocab", front: "la pâtisserie", reading: "lapatisserie", meaning: "cake shop", example: { jp: "Le gâteau de la pâtisserie est très bon.", en: "The cake from the cake shop is very good." }, accept: ["pastry shop", "the patisserie"] },
        { id: "fr-u34l1-lecentrecommercial", type: "vocab", front: "le centre commercial", reading: "lecentrecommercial", meaning: "shopping centre", example: { jp: "Le centre commercial est ouvert le dimanche.", en: "The shopping centre is open on Sundays." }, accept: ["shopping mall", "mall", "the shopping center"] },
        { id: "fr-u34l1-lerayon", type: "vocab", front: "le rayon", reading: "lerayon", meaning: "aisle", example: { jp: "Le rayon des fruits est là.", en: "The fruit aisle is over there." }, accept: ["section", "department", "the aisle"] },
      ],
    },
    {
      id: "fr-u34l2",
      unit: 34,
      lesson: 2,
      title: "At the checkout",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Get through the till: fill the basket, talk to the assistant, pay in cash and take your receipt.",
      items: [
        { id: "fr-u34l2-lacaisse", type: "vocab", front: "la caisse", reading: "lacaisse", meaning: "checkout", example: { jp: "Je paie à la caisse.", en: "I pay at the checkout." }, accept: ["the till", "cash register", "the checkout"] },
        { id: "fr-u34l2-levendeur", type: "vocab", front: "le vendeur", reading: "levendeur", meaning: "shop assistant", example: { jp: "Le vendeur est sympa.", en: "The shop assistant is nice." }, accept: ["salesman", "seller", "the assistant"] },
        { id: "fr-u34l2-lepanier", type: "vocab", front: "le panier", reading: "lepanier", meaning: "basket", example: { jp: "Je mets les pommes dans le panier.", en: "I put the apples in the basket." }, accept: ["the basket", "shopping basket"] },
        { id: "fr-u34l2-lerecu", type: "vocab", front: "le reçu", reading: "lerecu", meaning: "receipt", example: { jp: "Voilà votre reçu.", en: "Here's your receipt." }, accept: ["the receipt", "proof of purchase"] },
        { id: "fr-u34l2-enespeces", type: "vocab", front: "en espèces", reading: "enespeces", meaning: "in cash", example: { jp: "Je paie en espèces.", en: "I'm paying in cash." }, accept: ["cash", "with cash"], hint: "The alternative to la carte. Always plural — never une espèce." },
        { id: "fr-u34l2-leportemonnaie", type: "vocab", front: "le porte-monnaie", reading: "leportemonnaie", meaning: "purse", example: { jp: "Mon porte-monnaie est dans mon sac.", en: "My purse is in my bag." }, accept: ["wallet", "coin purse", "the purse"], hint: "It says what it does: it carries (porte) the change (monnaie)." },
      ],
    },
    {
      id: "fr-u34l3",
      unit: 34,
      lesson: 3,
      title: "What it costs",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about price: what something costs, spending, saving up, the sales and a discount.",
      items: [
        { id: "fr-u34l3-couter", type: "vocab", front: "coûter", reading: "couter", meaning: "to cost", example: { jp: "Combien ça va coûter ?", en: "How much is that going to cost?" }, accept: ["cost", "to be worth"] },
        { id: "fr-u34l3-depenser", type: "vocab", front: "dépenser", reading: "depenser", meaning: "to spend", example: { jp: "Je ne veux pas trop dépenser.", en: "I don't want to spend too much." }, accept: ["spend", "to spend money"], hint: "Money only. Spending TIME is a different verb." },
        { id: "fr-u34l3-economiser", type: "vocab", front: "économiser", reading: "economiser", meaning: "to save up", example: { jp: "Je veux économiser pour les vacances.", en: "I want to save up for the holidays." }, accept: ["save", "to save money", "to put aside"] },
        { id: "fr-u34l3-lessoldes", type: "vocab", front: "les soldes", reading: "lessoldes", meaning: "the sales", example: { jp: "En janvier, il y a les soldes.", en: "In January there are the sales." }, accept: ["sale", "the sale", "clearance"] },
        { id: "fr-u34l3-lareduction", type: "vocab", front: "la réduction", reading: "lareduction", meaning: "discount", example: { jp: "Il y a une réduction sur les chaussures.", en: "There's a discount on the shoes." }, drill: { jp: "La réduction est sur les chaussures", en: "The discount is on the shoes" }, accept: ["reduction", "money off", "the discount"] },
        { id: "fr-u34l3-bonmarche", type: "vocab", front: "bon marché", reading: "bonmarche", meaning: "cheap", example: { jp: "Ce pull est bon marché.", en: "This sweater is cheap." }, accept: ["inexpensive", "good value", "low-priced"], hint: "The opposite of cher. It never changes form — une robe bon marché." },
      ],
    },
    {
      id: "fr-u34l4",
      unit: 34,
      lesson: 4,
      title: "At the bank",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Deal with money that isn't in your pocket: the bank, your account, borrowing, lending, giving back, and the invoice.",
      items: [
        { id: "fr-u34l4-labanque", type: "vocab", front: "la banque", reading: "labanque", meaning: "bank", example: { jp: "La banque est fermée le dimanche.", en: "The bank is closed on Sundays." }, accept: ["the bank"] },
        { id: "fr-u34l4-lecompte", type: "vocab", front: "le compte", reading: "lecompte", meaning: "account", example: { jp: "J'ai un compte à la banque.", en: "I have an account at the bank." }, accept: ["bank account", "the account"] },
        { id: "fr-u34l4-emprunter", type: "vocab", front: "emprunter", reading: "emprunter", meaning: "to borrow", example: { jp: "Je ne veux pas emprunter d'argent.", en: "I don't want to borrow money." }, accept: ["borrow", "to take out a loan"] },
        { id: "fr-u34l4-preter", type: "vocab", front: "prêter", reading: "preter", meaning: "to lend", example: { jp: "Je vais prêter mon vélo à Paul.", en: "I'm going to lend Paul my bike." }, accept: ["lend", "to loan"], hint: "The pair to emprunter: you lend to someone, you borrow from them." },
        { id: "fr-u34l4-rendre", type: "vocab", front: "rendre", reading: "rendre", meaning: "to give back", example: { jp: "Je vais rendre le livre demain.", en: "I'm going to give the book back tomorrow." }, accept: ["return", "to hand back", "give back"] },
        { id: "fr-u34l4-lafacture", type: "vocab", front: "la facture", reading: "lafacture", meaning: "invoice", example: { jp: "Je paie la facture en espèces.", en: "I pay the invoice in cash." }, accept: ["the invoice", "an invoice"], hint: "The bill that arrives in the post. In a restaurant you ask for l'addition instead." },
      ],
    },
  ],
};
