// FR Unit 73 — Money and the economy (slot: money-economy) — B1
// A1 Unit 11 taught the coins (l'euro, le prix, l'argent, je paie, gratuit) and
// A2 Unit 34 the shop counter (la caisse, coûter, dépenser, économiser, la
// banque, le compte, emprunter, prêter, la facture). B1 is the level above the
// till: a household budget, a wage, and the words a news bulletin uses about the
// economy. Every front checked against the live 1,287 first.
// Conventions: see fr/unit1.js.
export const FR_UNIT73 = {
  id: "fr-u73",
  lang: "fr",
  title: "L'argent et l'économie",
  order: 73,
  stage: "b1",
  lessons: [
    {
      id: "fr-u73l1",
      unit: 73,
      lesson: 1,
      title: "Managing your own money",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle your own finances: faire un budget, épargner, rembourser un prêt.",
      items: [
        { id: "fr-u73l1-lebudget", type: "vocab", front: "le budget", reading: "lebudget", meaning: "the budget", example: { jp: "Je fais un budget chaque mois, parce que je dépense trop facilement.", en: "I make a budget every month, because I spend too easily." }, drill: { jp: "Le budget est déjà trop petit", en: "The budget is already too small" }, accept: ["budget", "the funds"] },
        { id: "fr-u73l1-epargner", type: "vocab", front: "épargner", reading: "epargner", meaning: "to save up", example: { jp: "Elle épargne depuis trois ans, parce qu'elle voudrait acheter un appartement.", en: "She's been saving for three years, because she wants to buy a flat." }, drill: { jp: "Elle va épargner beaucoup d'argent", en: "She is going to save up a lot of money" }, accept: ["to save", "to put aside"], hint: "Money you set aside. économiser (Unit 34) is closer to \"to cut back\"." },
        { id: "fr-u73l1-lepret", type: "vocab", front: "le prêt", reading: "lepret", meaning: "the loan", example: { jp: "Nous avons demandé un prêt à la banque, mais elle a refusé.", en: "We asked the bank for a loan, but it refused." }, drill: { jp: "Le prêt dure quinze ans", en: "The loan lasts fifteen years" }, accept: ["loan", "the credit", "lending"], hint: "From prêter (Unit 34), to lend. Careful: prêt also means \"ready\" (Unit 26)." },
        { id: "fr-u73l1-rembourser", type: "vocab", front: "rembourser", reading: "rembourser", meaning: "to pay back", example: { jp: "Je dois rembourser mon prêt avant la fin de l'année.", en: "I have to pay back my loan before the end of the year." }, drill: { jp: "Je dois rembourser avant juin", en: "I have to pay back before June" }, accept: ["to repay", "to refund", "to reimburse"] },
        { id: "fr-u73l1-lacartebancaire", type: "vocab", front: "la carte bancaire", reading: "lacartebancaire", meaning: "the bank card", example: { jp: "J'ai perdu ma carte bancaire, du coup je paie tout en espèces.", en: "I lost my bank card, so I'm paying for everything in cash." }, drill: { jp: "J'ai perdu la carte bancaire", en: "I lost the bank card" }, accept: ["bank card", "debit card", "the card"], hint: "La carte (Unit 11) on its own already means this in a shop — this is the full name." },
        { id: "fr-u73l1-ledistributeur", type: "vocab", front: "le distributeur", reading: "ledistributeur", meaning: "the cash machine", example: { jp: "Le distributeur est fermé, donc il faut passer à la banque.", en: "The cash machine is closed, so we have to stop by the bank." }, drill: { jp: "Le distributeur est en panne", en: "The cash machine is out of order" }, accept: ["cash machine", "atm", "the dispenser"], hint: "Also a vending machine — un distributeur de boissons." },
      ],
    },
    {
      id: "fr-u73l2",
      unit: 73,
      lesson: 2,
      title: "Work and income",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about employment as a condition: un salarié, le chômage, la retraite, un congé.",
      items: [
        { id: "fr-u73l2-lesalarie", type: "vocab", front: "le salarié", reading: "lesalarie", meaning: "the employee", example: { jp: "Les salariés de cette entreprise travaillent quatre jours par semaine.", en: "The employees of this company work four days a week." }, drill: { jp: "Le salarié travaille quatre jours", en: "The employee works four days" }, accept: ["employee", "the worker", "wage earner"], hint: "From le salaire (Unit 31) — someone who draws one." },
        { id: "fr-u73l2-lechomeur", type: "vocab", front: "le chômeur", reading: "lechomeur", meaning: "the unemployed person", example: { jp: "Ce chômeur cherche du travail depuis six mois, et il commence à être fatigué.", en: "This unemployed man has been looking for work for six months, and he's starting to get tired." }, drill: { jp: "Le chômeur cherche un travail", en: "The unemployed person is looking for work" }, accept: ["jobless person", "the unemployed"] },
        { id: "fr-u73l2-lechomage", type: "vocab", front: "le chômage", reading: "lechomage", meaning: "unemployment", example: { jp: "Le chômage a baissé cette année, mais il reste important dans cette région.", en: "Unemployment has fallen this year, but it remains high in this region." }, drill: { jp: "Le chômage a baissé cette année", en: "Unemployment fell this year" }, accept: ["the unemployment", "joblessness"], hint: "être au chômage = to be out of work." },
        { id: "fr-u73l2-laretraite", type: "vocab", front: "la retraite", reading: "laretraite", meaning: "retirement", example: { jp: "Mon père est à la retraite depuis deux ans, et il n'a jamais été aussi content.", en: "My father has been retired for two years, and he has never been so happy." }, drill: { jp: "La retraite arrive dans cinq ans", en: "Retirement comes in five years" }, accept: ["the pension", "retirement", "the retirement"] },
        { id: "fr-u73l2-leconge", type: "vocab", front: "le congé", reading: "leconge", meaning: "the leave", example: { jp: "Elle a pris un congé de trois mois pour aider sa mère.", en: "She took three months' leave to help her mother." }, drill: { jp: "Le congé commence lundi prochain", en: "The leave starts next Monday" }, accept: ["leave", "time off", "holiday"], hint: "Les congés payés = paid holiday, a phrase with real history in France." },
        { id: "fr-u73l2-lassurance", type: "vocab", front: "l'assurance", reading: "lassurance", meaning: "the insurance", example: { jp: "L'assurance a tout remboursé, si bien que l'accident ne m'a rien coûté.", en: "The insurance paid for everything, so the accident cost me nothing." }, drill: { jp: "L'assurance coûte trop cher", en: "The insurance costs too much" }, accept: ["insurance", "the cover", "confidence"], hint: "Also self-assurance: parler avec assurance." },
      ],
    },
    {
      id: "fr-u73l3",
      unit: 73,
      lesson: 3,
      title: "The economy",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow an economics story: la croissance, l'inflation, investir, le commerce.",
      items: [
        { id: "fr-u73l3-leconomie", type: "vocab", front: "l'économie", reading: "leconomie", meaning: "the economy", example: { jp: "L'économie va mieux, pourtant tout le monde ne le voit pas encore.", en: "The economy is doing better, yet not everybody sees it yet." }, drill: { jp: "L'économie du pays reste faible", en: "The country's economy stays weak" }, accept: ["economy", "economics", "the saving"] },
        { id: "fr-u73l3-lacroissance", type: "vocab", front: "la croissance", reading: "lacroissance", meaning: "growth", example: { jp: "La croissance est très basse cette année, du coup le gouvernement s'inquiète.", en: "Growth is very low this year, so the government is worried." }, drill: { jp: "La croissance reste très basse", en: "Growth stays very low" }, accept: ["the growth", "expansion"] },
        { id: "fr-u73l3-linflation", type: "vocab", front: "l'inflation", reading: "linflation", meaning: "inflation", example: { jp: "Avec l'inflation, tout coûte plus cher qu'il y a deux ans.", en: "With inflation, everything costs more than it did two years ago." }, drill: { jp: "L'inflation change tous les prix", en: "Inflation changes all the prices" }, accept: ["the inflation", "rising prices"] },
        { id: "fr-u73l3-investir", type: "vocab", front: "investir", reading: "investir", meaning: "to invest", example: { jp: "Ils ont investi dans une petite entreprise, et ça a très bien réussi.", en: "They invested in a small company, and it worked out very well." }, drill: { jp: "Il veut investir dans une maison", en: "He wants to invest in a house" }, accept: ["to put money into", "to invest in"] },
        { id: "fr-u73l3-lecommerce", type: "vocab", front: "le commerce", reading: "lecommerce", meaning: "trade", example: { jp: "Le commerce entre les deux pays a beaucoup augmenté depuis dix ans.", en: "Trade between the two countries has increased a lot over ten years." }, drill: { jp: "Le commerce marche bien ici", en: "Trade works well here" }, accept: ["the trade", "business", "shop"], hint: "Also a shop itself: un petit commerce de quartier." },
        { id: "fr-u73l3-lentrepreneur", type: "vocab", front: "l'entrepreneur", reading: "lentrepreneur", meaning: "the entrepreneur", example: { jp: "Cet entrepreneur a créé trois entreprises, même s'il n'a jamais étudié le commerce.", en: "This entrepreneur has created three companies, even though he never studied business." }, drill: { jp: "L'entrepreneur a créé trois entreprises", en: "The entrepreneur created three companies" }, accept: ["entrepreneur", "business owner", "the contractor"] },
      ],
    },
    {
      id: "fr-u73l4",
      unit: 73,
      lesson: 4,
      title: "Rich and poor",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Discuss inequality of means: la richesse, la pauvreté, les impôts, le pouvoir d'achat.",
      items: [
        { id: "fr-u73l4-riche", type: "vocab", front: "riche", reading: "riche", meaning: "rich", example: { jp: "Ce pays est riche, et pourtant beaucoup de personnes sont pauvres.", en: "This country is rich, and yet many people are poor." }, drill: { jp: "Ce pays n'est pas riche", en: "This country isn't rich" }, accept: ["wealthy", "well off"] },
        { id: "fr-u73l4-pauvre", type: "vocab", front: "pauvre", reading: "pauvre", meaning: "poor", example: { jp: "Sa famille était pauvre, si bien qu'il a travaillé dès quinze ans.", en: "His family was poor, so he worked from the age of fifteen." }, drill: { jp: "Ce village est vraiment pauvre", en: "This village is really poor" }, accept: ["hard up", "needy"], hint: "Before the noun it turns sympathetic: un pauvre homme = a poor (pitiable) man." },
        { id: "fr-u73l4-larichesse", type: "vocab", front: "la richesse", reading: "larichesse", meaning: "wealth", example: { jp: "La richesse de ce pays vient surtout des visiteurs étrangers.", en: "This country's wealth comes mainly from foreign visitors." }, drill: { jp: "La richesse ne fait pas tout", en: "Wealth isn't everything" }, accept: ["the wealth", "riches", "richness"] },
        { id: "fr-u73l4-lapauvrete", type: "vocab", front: "la pauvreté", reading: "lapauvrete", meaning: "poverty", example: { jp: "La pauvreté a augmenté en ville, tandis qu'elle a baissé à la campagne.", en: "Poverty has risen in the cities, whereas it has fallen in the countryside." }, drill: { jp: "La pauvreté reste un grand problème", en: "Poverty stays a big problem" }, accept: ["the poverty", "hardship"] },
        { id: "fr-u73l4-limpot", type: "vocab", front: "l'impôt", reading: "limpot", meaning: "the tax", example: { jp: "On paie des impôts chaque année, même quand on travaille peu.", en: "You pay taxes every year, even when you work little." }, drill: { jp: "L'impôt arrive chaque automne", en: "The tax comes every autumn" }, accept: ["tax", "taxes", "the taxation"], hint: "Income tax specifically is l'impôt sur le revenu." },
        { id: "fr-u73l4-lepouvoirdachat", type: "vocab", front: "le pouvoir d'achat", reading: "lepouvoirdachat", meaning: "purchasing power", example: { jp: "Le pouvoir d'achat baisse, donc tout le monde achète moins.", en: "Purchasing power is falling, so everybody is buying less." }, drill: { jp: "Le pouvoir d'achat baisse encore", en: "Purchasing power is falling again" }, accept: ["buying power", "spending power"], hint: "Literally \"the power of buying\" — a phrase you'll hear in every French election." },
      ],
    },
  ],
};
