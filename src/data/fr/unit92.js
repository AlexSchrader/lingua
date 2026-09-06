// FR Unit 92 — Cuisiner et goûter ("Cooking and tasting") — B1
// Strand D, coverage unit 12 of 14 (block 3). Slot: coverage-b1-12 (generic
// "Vocabulary 12 (B1)"); given a real theme so the lessons cohere — slot number kept.
// A1 taught the food; this teaches what you DO to it. Cooking is one of the few
// everyday domains the 26 abstract B1 slots don't reach, which is why it lands here.
// See unit84.js for the block-3 strategy.
export const FR_UNIT92 = {
  id: "fr-u92",
  lang: "fr",
  title: "Cuisiner et goûter",
  order: 92,
  stage: "b1",
  lessons: [
    {
      id: "fr-u92l1",
      unit: 92,
      lesson: 1,
      title: "Heat and the pan",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Apply heat to food: cook it, boil it, fry it, roast it — and name the frying pan and the saucepan.",
      items: [
        { id: "fr-u92l1-cuire", type: "vocab", front: "cuire", reading: "cuire", meaning: "to cook through", example: { jp: "Il faut cuire le poisson dix minutes.", en: "The fish needs to cook for ten minutes." }, accept: ["cook", "bake", "cook until done"], hint: "cuire is what the FOOD does under heat; faire la cuisine is the activity of cooking." },
        { id: "fr-u92l1-bouillir", type: "vocab", front: "bouillir", reading: "bouillir", meaning: "to boil", example: { jp: "Je fais bouillir de l'eau pour le thé.", en: "I'm boiling water for the tea." }, accept: ["come to the boil"], hint: "Usually in the pattern faire bouillir — to make something boil." },
        { id: "fr-u92l1-frire", type: "vocab", front: "frire", reading: "frire", meaning: "to fry", example: { jp: "Je vais faire frire les œufs.", en: "I'm going to fry the eggs." }, accept: ["deep-fry", "pan-fry"] },
        { id: "fr-u92l1-rotir", type: "vocab", front: "rôtir", reading: "rotir", meaning: "to roast", example: { jp: "Le poulet va rôtir au four.", en: "The chicken is going to roast in the oven." }, accept: ["roast in the oven"] },
        { id: "fr-u92l1-lapoele", type: "vocab", front: "la poêle", reading: "lapoele", meaning: "frying pan", example: { jp: "La poêle est déjà chaude.", en: "The frying pan is already hot." }, accept: ["the pan", "skillet"], hint: "Feminine, and said « pwal ». Careful: le poêle (masculine) is a wood stove." },
        { id: "fr-u92l1-lacasserole", type: "vocab", front: "la casserole", reading: "lacasserole", meaning: "saucepan", example: { jp: "Je mets de l'eau dans la casserole.", en: "I put some water in the saucepan." }, accept: ["the saucepan", "pot"], hint: "False friend: NOT an English casserole dish — it's the pan you boil things in." },
      ],
    },
    {
      id: "fr-u92l2",
      unit: 92,
      lesson: 2,
      title: "Preparing it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Get ingredients ready: peel, grate, beat, knead — and name the dough and a slice.",
      items: [
        { id: "fr-u92l2-eplucher", type: "vocab", front: "éplucher", reading: "eplucher", meaning: "to peel", example: { jp: "J'épluche les carottes.", en: "I'm peeling the carrots." }, accept: ["peel off", "to peel off"] },
        { id: "fr-u92l2-raper", type: "vocab", front: "râper", reading: "raper", meaning: "to grate", example: { jp: "Je râpe le fromage sur les pâtes.", en: "I grate the cheese onto the pasta." }, accept: ["shred", "grate up"] },
        { id: "fr-u92l2-battre", type: "vocab", front: "battre", reading: "battre", meaning: "to beat", example: { jp: "Il faut battre les œufs.", en: "You have to beat the eggs." }, accept: ["whisk", "whip", "beat up"] },
        { id: "fr-u92l2-petrir", type: "vocab", front: "pétrir", reading: "petrir", meaning: "to knead", example: { jp: "Le boulanger pétrit la pâte.", en: "The baker kneads the dough." }, accept: ["work the dough"] },
        { id: "fr-u92l2-lapate", type: "vocab", front: "la pâte", reading: "lapate", meaning: "dough", example: { jp: "La pâte doit reposer une heure.", en: "The dough has to rest for an hour." }, accept: ["the dough", "batter", "pastry"], hint: "Singular la pâte is dough; plural les pâtes is pasta — you already know the plural." },
        { id: "fr-u92l2-latranche", type: "vocab", front: "la tranche", reading: "latranche", meaning: "slice", example: { jp: "Je voudrais deux tranches de pain.", en: "I'd like two slices of bread." }, accept: ["the slice", "rasher"] },
      ],
    },
    {
      id: "fr-u92l3",
      unit: 92,
      lesson: 3,
      title: "Seasoning and flavour",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about flavour: season it, and call it salty, sweet, spicy, sharp or bland.",
      items: [
        { id: "fr-u92l3-assaisonner", type: "vocab", front: "assaisonner", reading: "assaisonner", meaning: "to season", example: { jp: "Il faut assaisonner la salade.", en: "You have to season the salad." }, accept: ["dress", "add seasoning"] },
        { id: "fr-u92l3-sale", type: "vocab", front: "salé", reading: "sale", meaning: "salty", example: { jp: "La soupe est trop salée.", en: "The soup is too salty." }, accept: ["savoury", "salted"], hint: "Careful with the accent: salé = salty, sale = dirty. Very different dinner." },
        { id: "fr-u92l3-sucre", type: "vocab", front: "sucré", reading: "sucre", meaning: "sweet", example: { jp: "Je n'aime pas le café sucré.", en: "I don't like sweet coffee." }, accept: ["sugary", "sweetened"] },
        { id: "fr-u92l3-epice", type: "vocab", front: "épicé", reading: "epice", meaning: "spicy", example: { jp: "Ce plat est trop épicé pour moi.", en: "This dish is too spicy for me." }, accept: ["hot", "peppery"] },
        { id: "fr-u92l3-acide", type: "vocab", front: "acide", reading: "acide", meaning: "sharp", example: { jp: "Cette orange est un peu acide.", en: "This orange is a little sharp." }, accept: ["sour", "tart", "acidic"] },
        { id: "fr-u92l3-fade", type: "vocab", front: "fade", reading: "fade", meaning: "bland", example: { jp: "Sans sel, c'est fade.", en: "Without salt, it's bland." }, accept: ["tasteless", "insipid", "flavourless"] },
      ],
    },
    {
      id: "fr-u92l4",
      unit: 92,
      lesson: 4,
      title: "The recipe",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow a recipe: name the recipe, an ingredient, the cooking time, a dish, a helping — and the lid that goes on the pan.",
      items: [
        { id: "fr-u92l4-larecette", type: "vocab", front: "la recette", reading: "larecette", meaning: "recipe", example: { jp: "C'est la recette de ma grand-mère.", en: "It's my grandmother's recipe." }, accept: ["the recipe"] },
        { id: "fr-u92l4-lingredient", type: "vocab", front: "l'ingrédient", reading: "lingredient", meaning: "ingredient", example: { jp: "Cet ingrédient est important.", en: "This ingredient is important." }, accept: ["the ingredient"], hint: "Masculine — un ingrédient." },
        { id: "fr-u92l4-lacuisson", type: "vocab", front: "la cuisson", reading: "lacuisson", meaning: "cooking time", example: { jp: "Le temps de cuisson est de vingt minutes.", en: "The cooking time is twenty minutes." }, accept: ["the cooking", "baking time"], hint: "The noun from cuire. In a restaurant it's also how you want your steak done." },
        { id: "fr-u92l4-leplat", type: "vocab", front: "le plat", reading: "leplat", meaning: "dish", example: { jp: "C'est mon plat préféré.", en: "It's my favourite dish." }, accept: ["the dish", "course", "serving dish"], hint: "Both the food and the thing you serve it in. Not to be confused with plat, the adjective for flat." },
        { id: "fr-u92l4-laportion", type: "vocab", front: "la portion", reading: "laportion", meaning: "helping", example: { jp: "La portion est trop grande.", en: "The portion is too big." }, accept: ["portion", "the portion", "serving"] },
        { id: "fr-u92l4-lecouvercle", type: "vocab", front: "le couvercle", reading: "lecouvercle", meaning: "lid", example: { jp: "Mets le couvercle sur la casserole.", en: "Put the lid on the saucepan." }, accept: ["the lid", "cover", "top"] },
      ],
    },
  ],
};
