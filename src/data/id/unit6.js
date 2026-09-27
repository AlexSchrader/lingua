// ID Unit 6 — Makanan dan minuman (slot: food) — A1
// Ordering and eating. The unit is built around the WARUNG rather than a
// restaurant, because that is where an Indonesian A1 conversation actually
// happens and it needs fewer words to survive: point, name the dish, name the
// drink, say how it tastes.
// Conventions are declared in id/unit1.js and bind every id unit. Note the two
// short fronts here: `mi` and `es` are two characters each, which is the minimum
// canCloze accepts — verified they route, and verified the whole-word finder does
// not mistake the `mi` inside `minum` or the `es` inside `pesan` for the card.
// lang/unit/lesson are stamped in src/data/index.js.
export const ID_UNIT6 = {
  id: "id-u6",
  lang: "id",
  title: "Makanan dan minuman",
  order: 6,
  stage: "a1",
  lessons: [
    {
      id: "id-u6l1",
      unit: 6,
      lesson: 1,
      title: "Di warung",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Order a plate of food and something to drink at a warung.",
      items: [
        { id: "id-u6l1-makan", type: "vocab", front: "makan", reading: "makan", meaning: "to eat", example: { jp: "Saya makan nasi.", en: "I eat rice." }, accept: ["eat", "to have a meal", "have"], drill: { jp: "Saya makan nasi di warung", en: "I eat rice at the food stall" }, hint: "MAH-kahn. Stays bare — no prefix needed. makan is also the polite invitation at a table: silakan makan, please eat." },
        { id: "id-u6l1-minum", type: "vocab", front: "minum", reading: "minum", meaning: "to drink", example: { jp: "Saya minum air.", en: "I drink water." }, accept: ["drink", "to have a drink"], drill: { jp: "Saya minum air di rumah", en: "I drink water at home" }, hint: "MEE-noom. The pair to makan, and the two together — makan minum — is the ordinary way to say \"food and drink\" as an activity." },
        { id: "id-u6l1-nasi", type: "vocab", front: "nasi", reading: "nasi", meaning: "rice (cooked)", example: { jp: "Nasi di warung sangat enak.", en: "The rice at the stall is delicious." }, accept: ["rice", "cooked rice", "a meal"], drill: { jp: "Saya suka nasi di warung", en: "I like the rice at the food stall" }, hint: "NAH-see. Specifically COOKED rice — the plant and the raw grain are different words. For many Indonesians nasi means the meal itself: no nasi, no meal." },
        { id: "id-u6l1-air", type: "vocab", front: "air", reading: "air", meaning: "water", example: { jp: "Tolong, satu air!", en: "One water, please!" }, accept: ["a water", "liquid"], drill: { jp: "Saya mau minum air sekarang", en: "I want to drink water now" }, hint: "AH-eer, TWO syllables — never the English \"air\". Every vowel in Indonesian is sounded separately, and this is the word that proves it." },
        { id: "id-u6l1-warung", type: "vocab", front: "warung", reading: "warung", meaning: "food stall", example: { jp: "Saya bekerja di warung keluarga saya.", en: "I work at my family's food stall." }, accept: ["small shop", "stall", "kiosk", "small eatery"], drill: { jp: "Saya makan di warung sekarang", en: "I am eating at the food stall now" }, hint: "WAH-roong, ending in the hum. A tiny family-run place, half kitchen and half shop, and the single most useful word in this unit — there is one on every street." },
        { id: "id-u6l1-pesan", type: "vocab", front: "pesan", reading: "pesan", meaning: "to order", example: { jp: "Saya pesan nasi dan teh.", en: "I order rice and tea." }, accept: ["order", "to reserve", "message", "to place an order"], drill: { jp: "Saya pesan nasi dan air", en: "I order rice and water" }, hint: "puh-SAHN, swallowed e. The same word is also a noun meaning \"a message\" — one spelling, two jobs, as with bangun. In full standard form the verb is memesan." },
      ],
    },
    {
      id: "id-u6l2",
      unit: 6,
      lesson: 2,
      title: "Makanan sehari-hari",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the everyday dishes on a warung board and say which one you want.",
      items: [
        { id: "id-u6l2-ayam", type: "vocab", front: "ayam", reading: "ayam", meaning: "chicken", example: { jp: "Saya suka nasi ayam.", en: "I like chicken rice." }, accept: ["a chicken", "hen", "poultry"], drill: { jp: "Saya mau pesan nasi ayam", en: "I want to order chicken rice" }, hint: "AH-yahm, y as a consonant. Indonesian stacks nouns with no linking word: nasi ayam is \"rice chicken\", and the describing word comes SECOND — the opposite of English." },
        { id: "id-u6l2-ikan", type: "vocab", front: "ikan", reading: "ikan", meaning: "fish", example: { jp: "Ibu saya suka ikan.", en: "My mother likes fish." }, accept: ["a fish", "seafood"], drill: { jp: "Saya makan ikan di warung", en: "I eat fish at the food stall" }, hint: "EE-kahn. In the world's largest archipelago this is not a specialist word — ikan appears on every menu, usually grilled, and it covers freshwater and sea fish alike." },
        { id: "id-u6l2-sayur", type: "vocab", front: "sayur", reading: "sayur", meaning: "vegetable", example: { jp: "Saya makan sayur dan nasi.", en: "I eat vegetables and rice." }, accept: ["vegetables", "greens", "a vegetable"], drill: { jp: "Adik saya tidak suka sayur", en: "My younger sibling does not like vegetables" }, hint: "SAH-yoor. Unmarked for number as always, so sayur is one vegetable or a whole plate of them." },
        { id: "id-u6l2-telur", type: "vocab", front: "telur", reading: "telur", meaning: "egg", example: { jp: "Saya pesan nasi dan telur.", en: "I order rice and an egg." }, accept: ["an egg", "eggs"], drill: { jp: "Saya mau telur dan sayur", en: "I want an egg and vegetables" }, hint: "tuh-LOOR, swallowed e at the front. A fried egg on top of rice is the cheapest complete meal in the country and worth knowing how to ask for." },
        { id: "id-u6l2-mi", type: "vocab", front: "mi", reading: "mi", meaning: "noodles", example: { jp: "Saya makan mi goreng.", en: "I eat fried noodles." }, accept: ["noodle", "a noodle dish"], drill: { jp: "Saya suka mi goreng sekarang", en: "I like fried noodles now" }, hint: "MEE. The official reformed spelling is two letters, though you will see mie on signs everywhere — the older Dutch-era spelling never quite died." },
        { id: "id-u6l2-goreng", type: "vocab", front: "goreng", reading: "goreng", meaning: "fried", example: { jp: "Nasi goreng di warung sangat enak.", en: "The fried rice at the stall is delicious." }, accept: ["to fry", "fry", "deep-fried"], drill: { jp: "Saya pesan nasi goreng dan telur", en: "I order fried rice and an egg" }, hint: "GOH-rehng, both g's hard, ending in the hum. It FOLLOWS the food it describes: nasi goreng, mi goreng, ayam goreng. Learn that order once and half a menu opens up." },
      ],
    },
    {
      id: "id-u6l3",
      unit: 6,
      lesson: 3,
      title: "Minuman",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Order a drink the way you want it, with or without ice and sugar.",
      items: [
        { id: "id-u6l3-teh", type: "vocab", front: "teh", reading: "teh", meaning: "tea", example: { jp: "Saya minum teh pagi.", en: "I drink tea in the morning." }, accept: ["a tea"], drill: { jp: "Saya mau teh manis sekarang", en: "I want sweet tea now" }, hint: "TEH, with the final h breathed out. From Dutch thee. Unless you say otherwise it arrives sweet — very sweet — so teh manis is the default rather than a request." },
        { id: "id-u6l3-kopi", type: "vocab", front: "kopi", reading: "kopi", meaning: "coffee", example: { jp: "Ayah saya minum kopi pagi dan malam.", en: "My father drinks coffee morning and night." }, accept: ["a coffee"], drill: { jp: "Saya pesan kopi di warung", en: "I order coffee at the food stall" }, hint: "KOH-pee. Indonesia grows some of the world's best and drinks it kopi tubruk — grounds tipped straight into the glass, no filter, wait for them to sink." },
        { id: "id-u6l3-susu", type: "vocab", front: "susu", reading: "susu", meaning: "milk", example: { jp: "Anak saya minum susu.", en: "My child drinks milk." }, accept: ["a milk", "dairy"], drill: { jp: "Saya mau kopi dan susu", en: "I want coffee and milk" }, hint: "SOO-soo. Usually sweetened condensed milk rather than fresh, which is why kopi susu tastes like dessert." },
        { id: "id-u6l3-gula", type: "vocab", front: "gula", reading: "gula", meaning: "sugar", example: { jp: "Saya tidak mau gula.", en: "I don't want sugar." }, accept: ["sweetener"], drill: { jp: "Saya tidak mau gula sekarang", en: "I do not want sugar now" }, hint: "GOO-la, hard g. Worth learning early precisely so you can refuse it — tidak mau gula is a sentence you will use daily." },
        { id: "id-u6l3-es", type: "vocab", front: "es", reading: "es", meaning: "ice", example: { jp: "Saya mau es teh.", en: "I want iced tea." }, accept: ["iced", "frozen", "ice cube"], drill: { jp: "Saya pesan es teh manis", en: "I order sweet iced tea" }, hint: "EHS, from Dutch ijs. Put it in FRONT of the drink for the iced version — es teh, es kopi. That is the opposite of where goreng goes, so the position is worth noticing." },
        { id: "id-u6l3-manis", type: "vocab", front: "manis", reading: "manis", meaning: "sweet", example: { jp: "Kopi saya sangat manis.", en: "My coffee is very sweet." }, accept: ["sugary", "sweetened"], drill: { jp: "Teh di warung sangat manis", en: "The tea at the food stall is very sweet" }, hint: "MAH-nis. Like goreng it follows its noun: teh manis. Said about a person it means charming rather than sugary, and it is a common compliment." },
      ],
    },
    {
      id: "id-u6l4",
      unit: 6,
      lesson: 4,
      title: "Enak dan pedas",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Say how food tastes and whether you are hungry, thirsty or already full.",
      items: [
        { id: "id-u6l4-enak", type: "vocab", front: "enak", reading: "enak", meaning: "delicious", example: { jp: "Nasi goreng ibu saya sangat enak.", en: "My mother's fried rice is very delicious." }, accept: ["tasty", "nice", "pleasant", "yummy"], drill: { jp: "Mi goreng di warung enak", en: "The fried noodles at the stall are delicious" }, hint: "EH-na' — a clear eh, then the swallowed k. The single most useful word at an Indonesian table, and it stretches beyond food: a comfortable chair is enak too." },
        { id: "id-u6l4-pedas", type: "vocab", front: "pedas", reading: "pedas", meaning: "spicy", example: { jp: "Sayur di warung sangat pedas.", en: "The vegetables at the stall are very spicy." }, accept: ["hot", "chilli hot", "peppery"], drill: { jp: "Saya tidak suka nasi pedas", en: "I do not like spicy rice" }, hint: "puh-DAHS, swallowed e. Be careful what you agree to: Indonesian pedas is chilli heat, and tidak pedas is a request worth making early and clearly." },
        { id: "id-u6l4-asin", type: "vocab", front: "asin", reading: "asin", meaning: "salty", example: { jp: "Ikan di warung sangat asin.", en: "The fish at the stall is very salty." }, accept: ["salted", "briny"], drill: { jp: "Telur dan ikan sangat asin", en: "The egg and the fish are very salty" }, hint: "AH-sin. Salted dried fish, ikan asin, is a staple rather than a delicacy, so this word turns up on menus more than you would expect." },
        { id: "id-u6l4-lapar", type: "vocab", front: "lapar", reading: "lapar", meaning: "hungry", example: { jp: "Saya lapar, saya mau makan.", en: "I'm hungry, I want to eat." }, accept: ["starving", "famished"], drill: { jp: "Saya lapar dan mau makan", en: "I am hungry and want to eat" }, hint: "LAH-par. Note there is no \"am\" — saya lapar is the whole sentence. Indonesian needs no verb to link a subject to a description." },
        { id: "id-u6l4-haus", type: "vocab", front: "haus", reading: "haus", meaning: "thirsty", example: { jp: "Saya haus, saya mau minum air.", en: "I'm thirsty, I want to drink water." }, accept: ["parched", "dry"], drill: { jp: "Saya haus dan mau minum", en: "I am thirsty and want to drink" }, hint: "HAH-oos, two beats, with the h sounded. The partner to lapar, and like it it needs no verb: saya haus." },
        { id: "id-u6l4-kenyang", type: "vocab", front: "kenyang", reading: "kenyang", meaning: "full (after eating)", example: { jp: "Saya kenyang, terima kasih.", en: "I'm full, thank you." }, accept: ["satisfied", "had enough", "replete"], drill: { jp: "Saya kenyang dan tidak mau nasi", en: "I am full and do not want rice" }, hint: "kuh-NYAHNG — swallowed e, the ny as one sound, then the hum: three of this course's four sound traps in one word. Indonesian hosts will keep offering food until you say it." },
      ],
    },
  ],
};
