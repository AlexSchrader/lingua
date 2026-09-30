// ID Unit 34 — Memasak dan bumbu ("Cooking and seasoning") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 2. unit1.js's 12 conventions and unit21.js's A1–A10 BIND this file.
//
// ⚠️ RETHEMED — BLOCK 1 PREDICTED THIS SLOT BY NAME, AND IT WAS RIGHT.
// The scaffold called it "Nature and science". Block 1's warning: *"u34 'Nature
// and science' duplicates u19 again."* Confirmed against the live corpus: A1's u19
// IS animals and nature, 24 for 24 (anjing · sapi · kuda · kambing · bebek ·
// binatang · burung · ular · monyet · gajah · nyamuk · semut · pohon · bunga ·
// daun · buah · gunung · sungai · pantai · laut · hutan · matahari · bintang ·
// desa). And the SCIENCE half is A2 block 3's assigned domain, not mine.
//   THE HOLE IT FILLS INSTEAD: A1's u6 gave the food NOUNS and four tastes
//   (manis · enak · pedas · asin); u17 gave memasak · piring · gelas · sendok ·
//   pisau; u27 gave the containers. Measured against all 720 live cards,
//   Indonesian had **no word for an ingredient, seasoning, salt, onion, chilli,
//   oil, food, a recipe, a pot, a stove, fire, to boil, to grill, to steam, to
//   stir, to slice, to pour, to taste, to serve, a flavour, cooked, raw, sour or
//   bitter.** The learner could name a dish and could not make one — and cooking
//   is the single most-used practical field in the language after greetings.
//
// ⚠️ `menggoreng` IS DELIBERATELY NOT CARDED. A1's u6 teaches `goreng` (fried) as
// a lexical word, and A6's ceiling applies: "a form whose meaning the learner can
// read straight off the parts" gets no second card. me- on `goreng` is exactly
// that. It is named in `merebus`'s hint so the learner meets it. `nasi goreng` and
// `ayam goreng` are already readable from A1.
// ⚠️ `memotong` (u25) already owns "to cut", so `mengiris` is glossed as the THIN
// cut specifically. `garam` and `asin` (u6, salty) are a noun/adjective pair on one
// idea and both are teachable — knowing "salty" does not give you the substance.
//
// AFFIX ROOTS CHECKED BY HAND (unit1.js §3 — LEXEME fails open for Indonesian):
//   makanan → makan          ⚠️ `makan` IS taught (u6). Block 1 RESERVED this -an
//     noun as genuinely untaught and free, and the convention-3 test passes: "to
//     eat" does not give you the noun for cooked food (English needs a different
//     word too). Drill-safe — findWholeWord("makanan", "makan") fails (the a after
//     it is a letter), so a drill carrying `makanan` does NOT satisfy front
//     `makan`, and this card's drill carries no bare `makan`.
//   merebus → rebus          root not taught.
//   memanggang → panggang    root not taught.
//   mengukus → kukus         root not taught.
//   mengaduk → aduk          root not taught.
//   mengiris → iris          root not taught.
//   menuang → tuang          root not taught.
//   mencicipi → cicip        root not taught.
//   menyajikan → saji        root not taught.
//   rasa → rasa              ⚠️ `merasa` IS taught (u20, to feel). Carded: a
//     FLAVOUR is not the act of feeling, and the split matters because Indonesian
//     uses one root for both. Drill-safe — "merasa" holds `rasa` behind an `e`,
//     so a drill with `merasa` does not satisfy front `rasa`; and this card's drill
//     carries no `merasa`. ⚠️ This makes `rasa` the SECOND card off this root; a
//     third (`terasa`, `perasaan`) is DECLINED here on A6 grounds.
//   bahan · bumbu · garam · bawang · cabai · matang · mentah · asam · pahit ·
//   panci · kompor · api · minyak · resep — roots.
//
// GLOSSES REGLOSSED TO CLEAR A LIVE `accept[]` (unit21.js §A4):
//   `makanan` does not accept "a dish" — u17's `piring` accepts "dish".
//   `matang` does not accept "done" — u13's `selesai` accepts it. → "ready to eat".
//   `mengiris` is NOT "to slice" — u27's `potong` accepts "a slice".
//     → "to cut into thin strips".
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT34 = {
  id: "id-u34",
  lang: "id",
  title: "Memasak dan bumbu",
  order: 34,
  stage: "a2",
  lessons: [
    {
      id: "id-u34l1",
      unit: 34,
      lesson: 1,
      title: "Bahan dan bumbu",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say what goes into a dish before you cook it — the ingredients, the seasoning, the salt, the onion, the chilli.",
      items: [
        { id: "id-u34l1-bahan", type: "vocab", front: "bahan", reading: "bahan", meaning: "an ingredient", example: { jp: "Semua bahan untuk nasi goreng sudah ada.", en: "All the ingredients for fried rice are here." }, accept: ["material", "what something is made of"], drill: { jp: "Ibu membeli bahan itu di pasar pagi", en: "Mother bought that ingredient at the morning market" }, hint: "BAH-han, both h's sounded. Not only food — bahan is any raw material, so bahan bangunan is building materials and bahan pelajaran is course material. In a recipe it is the list at the top. Bahan-bahan, doubled, is the plural you will see printed." },
        { id: "id-u34l1-bumbu", type: "vocab", front: "bumbu", reading: "bumbu", meaning: "seasoning", example: { jp: "Bumbu di warung itu sangat pedas.", en: "The seasoning at that stall is very spicy." }, accept: ["spices", "what you flavour a dish with"], drill: { jp: "Dia membuat bumbu sendiri di dapur", en: "She makes her own seasoning in the kitchen" }, hint: "BOOM-boo. The whole mixture of spices and aromatics a dish is built on, not one spice — Indonesian cooking thinks in bumbu, ground together, rather than in separate jars. Membumbui is to season something. Bumbu dapur is the everyday phrase for kitchen spices." },
        { id: "id-u34l1-garam", type: "vocab", front: "garam", reading: "garam", meaning: "salt", example: { jp: "Sayur itu kurang garam untuk saya.", en: "That vegetable dish needs more salt for me." }, accept: ["table salt"], drill: { jp: "Tolong beri garam sedikit di piring saya", en: "Please put a little salt on my plate" }, hint: "GAH-ram. You already have asin for salty, which describes the taste; garam is the substance. Both are worth having: kurang garam is a cook's complaint, terlalu asin is an eater's. Air garam is salt water." },
        { id: "id-u34l1-bawang", type: "vocab", front: "bawang", reading: "bawang", meaning: "onion", example: { jp: "Bumbu itu memakai bawang dan cabai.", en: "That seasoning uses onion and chilli." }, accept: ["an onion", "garlic"], drill: { jp: "Dia membeli bawang di pasar setiap minggu", en: "She buys onions at the market every week" }, hint: "BAH-wang. ⚠️ On its own it is vague, and the colour words you already have do the work: bawang merah is shallot, bawang putih is garlic, bawang bombay is the big round onion. So one card gives you three ingredients — which is why Indonesian does not need three words." },
        { id: "id-u34l1-cabai", type: "vocab", front: "cabai", reading: "cabai", meaning: "chilli", example: { jp: "Saya tidak mau cabai karena terlalu pedas.", en: "I do not want chilli because it is too spicy." }, accept: ["a hot pepper", "chilli pepper"], drill: { jp: "Cabai di warung itu sangat pedas", en: "The chilli at that stall is very spicy" }, hint: "cha-BIE — c is CH and the ai is the English eye. In speech you will hear cabe far more often, which is the same word spelled as it sounds. Sambal is the chilli paste made from it and is on every table. Tanpa cabai is how you order something mild." },
        { id: "id-u34l1-makanan", type: "vocab", front: "makanan", reading: "makanan", meaning: "food", example: { jp: "Makanan di warung ini murah dan enak.", en: "The food at this stall is cheap and tasty." }, accept: ["something to eat", "cooked food"], drill: { jp: "Makanan itu sudah dingin di meja", en: "That food has gone cold on the table" }, hint: "ma-KAH-nan. Built off makan, to eat, which you already have — the -an ending turns a verb into the thing it produces. Makanan is food that has been prepared; bahan is what it was made from. Its twin is minuman, a drink, off minum, and you meet that later in this band." },
      ],
    },
    {
      id: "id-u34l2",
      unit: 34,
      lesson: 2,
      title: "Cara memasak",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say HOW something is being cooked — boiled, grilled, steamed, stirred, sliced, poured — instead of only that it is being cooked.",
      items: [
        { id: "id-u34l2-merebus", type: "vocab", front: "merebus", reading: "merebus", meaning: "to boil", example: { jp: "Ibu merebus telur untuk sarapan.", en: "Mother is boiling eggs for breakfast." }, accept: ["to cook in water", "to bring to the boil"], drill: { jp: "Dia merebus air di kompor kecil", en: "He is boiling water on the small stove" }, hint: "muh-ruh-BOOS. Cooking in water. Its everyday partner is menggoreng, to fry, which is not a separate card because you already have goreng, fried, and me- on it means exactly what you would guess. Air rebus is boiled water and telur rebus is a boiled egg." },
        { id: "id-u34l2-memanggang", type: "vocab", front: "memanggang", reading: "memanggang", meaning: "to grill", example: { jp: "Ayah memanggang ikan di depan rumah.", en: "Father is grilling fish in front of the house." }, accept: ["to roast", "to bake"], drill: { jp: "Kami memanggang ayam untuk acara besok", en: "We are grilling chicken for tomorrow's event" }, hint: "muh-mang-GAHNG — two ng hums and a hard g in the middle. Covers grilling over coals, roasting and baking in an oven, which English splits into three. Ayam panggang is grilled chicken, on every menu. Bakar is the near-synonym used for grilling over open flame: ikan bakar." },
        { id: "id-u34l2-mengukus", type: "vocab", front: "mengukus", reading: "mengukus", meaning: "to steam", example: { jp: "Kami mengukus sayur supaya tetap enak.", en: "We steam vegetables so they stay tasty." }, accept: ["to cook over steam"], drill: { jp: "Dia mengukus nasi di panci besar", en: "She is steaming rice in the big pot" }, hint: "muh-NGOO-koos, opening with the ng hum. Steaming is the standard Indonesian way to cook rice and a great many snacks, so the word comes up constantly. Kukusan is the steamer basket. Nasi kukus is steamed rice, set against nasi goreng, which you can already read." },
        { id: "id-u34l2-mengaduk", type: "vocab", front: "mengaduk", reading: "mengaduk", meaning: "to stir", example: { jp: "Dia mengaduk kopi itu dengan sendok.", en: "He is stirring that coffee with a spoon." }, accept: ["to mix with a spoon", "to give it a stir"], drill: { jp: "Ibu mengaduk bumbu di panci itu", en: "Mother is stirring the seasoning in that pot" }, hint: "muh-NGAH-dook. Stirring liquid or a mixture, with a spoon or by hand. The bare stem aduk is what an imperative and a recipe use — Aduk sampai halus, stir until smooth, using the halus you already have. Campur is the other verb, to mix two things together." },
        { id: "id-u34l2-mengiris", type: "vocab", front: "mengiris", reading: "mengiris", meaning: "to cut into thin strips", example: { jp: "Dia mengiris bawang dengan pisau tajam.", en: "She is slicing onions with a sharp knife." }, accept: ["to slice thinly", "to shred"], drill: { jp: "Ibu mengiris cabai untuk bumbu itu", en: "Mother is slicing chilli for that seasoning" }, hint: "muh-NGEE-rees. ⚠️ Narrower than memotong, which you already have for cutting anything: mengiris is thin, flat slices — irisan bawang, sliced onion. If you just mean cut, memotong is the safer word. Both take dengan for the tool." },
        { id: "id-u34l2-menuang", type: "vocab", front: "menuang", reading: "menuang", meaning: "to pour", example: { jp: "Dia menuang susu ke gelas anak itu.", en: "He is pouring milk into that child's glass." }, accept: ["to tip in", "to pour out"], drill: { jp: "Saya menuang minyak ke panci besar", en: "I am pouring oil into the big pot" }, hint: "muh-NOO-ang. Takes ke or ke dalam for where the liquid goes. Menuangkan is the slightly more formal twin with the same meaning. For pouring a drink FOR someone the natural phrase is menuangkan air untuk tamu." },
      ],
    },
    {
      id: "id-u34l3",
      unit: 34,
      lesson: 3,
      title: "Rasa dan matang",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Judge a dish before you serve it — its flavour, whether it is cooked or still raw, whether it has gone sour or bitter — by tasting it.",
      items: [
        { id: "id-u34l3-rasa", type: "vocab", front: "rasa", reading: "rasa", meaning: "a flavour", example: { jp: "Rasa sayur ini kurang enak untuk saya.", en: "The flavour of these vegetables is not very nice to me." }, accept: ["how something tastes", "the sense of taste"], drill: { jp: "Rasa kopi di warung itu sangat kuat", en: "The flavour of the coffee at that stall is very strong" }, hint: "RAH-sa. ⚠️ Same root as merasa, to feel, which you already have — Indonesian uses one word for tasting and for feeling, which is why perasaan means a feeling. Here it is the flavour: rasa manis, rasa pedas. Rasanya enak means it tastes good, and rasanya also opens a hedge — rasanya begitu, I feel that's so." },
        { id: "id-u34l3-matang", type: "vocab", front: "matang", reading: "matang", meaning: "cooked through", example: { jp: "Ayam itu belum matang di dalam.", en: "That chicken is not cooked through inside." }, accept: ["ripe", "ready to eat"], drill: { jp: "Buah itu sudah matang dan manis", en: "That fruit is ripe and sweet" }, hint: "MAH-tang. One word for cooked and for ripe, because they are the same idea to Indonesian: the thing has come to its finished state. So buah matang is ripe fruit and ayam matang is cooked chicken. ⚠️ Not selesai, which you already have for a task being finished. Matang also describes a person who is mature." },
        { id: "id-u34l3-mentah", type: "vocab", front: "mentah", reading: "mentah", meaning: "raw", example: { jp: "Saya tidak mau makan ikan mentah.", en: "I do not want to eat raw fish." }, accept: ["uncooked", "not ready to eat"], drill: { jp: "Ikan mentah itu ada di piring", en: "That raw fish is on the plate" }, hint: "MUHN-tah, the first e swallowed. The exact opposite of matang, and it works the same two ways: raw food and unripe fruit alike. Also used of an idea or a plan that is only half formed — ide mentah. Learn it as the pair, matang and mentah." },
        { id: "id-u34l3-asam", type: "vocab", front: "asam", reading: "asam", meaning: "sour", example: { jp: "Buah itu masih asam karena belum matang.", en: "That fruit is still sour because it is not ripe." }, accept: ["tart", "sharp to the taste"], drill: { jp: "Rasa sayur ini agak asam sekarang", en: "The flavour of these vegetables is rather sour now" }, hint: "AH-sam. Joins manis, pedas and asin, which you already have, to complete the Indonesian taste set with pahit on the next card. ⚠️ Careful with asin, salty — the two look alike and mean different things. Asam is also the tamarind used to make food sour, and asam jawa is the paste." },
        { id: "id-u34l3-pahit", type: "vocab", front: "pahit", reading: "pahit", meaning: "bitter", example: { jp: "Kopi itu terlalu pahit karena kurang gula.", en: "That coffee is too bitter because it needs more sugar." }, accept: ["harsh to the taste"], drill: { jp: "Obat itu pahit tetapi sangat penting", en: "That medicine is bitter but very important" }, hint: "PAH-heet, the h clearly sounded between the vowels. The last of the five tastes. Used figuratively exactly as in English: kenyataan pahit, a bitter truth, and pengalaman pahit, a bitter experience. Kopi pahit is black coffee with no sugar, which you have to ask for." },
        { id: "id-u34l3-mencicipi", type: "vocab", front: "mencicipi", reading: "mencicipi", meaning: "to taste something", example: { jp: "Ibu mencicipi bumbu sebelum menaruh garam.", en: "Mother tastes the seasoning before adding salt." }, accept: ["to try a bit", "to sample a dish"], drill: { jp: "Dia mencicipi makanan baru di warung itu", en: "He is tasting the new food at that stall" }, hint: "muhn-chee-CHEE-pee — two CH sounds. Deliberately tasting a small amount to check it, which is a cook's action, not an eater's. ⚠️ Coba, which you already have, is to try anything; mencicipi is only food. Silakan cicipi is what a host says when they want your verdict." },
      ],
    },
    {
      id: "id-u34l4",
      unit: 34,
      lesson: 4,
      title: "Di dapur",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Work in a kitchen — naming the pot, the stove, the flame, the oil — follow a recipe, and put the food on the table.",
      items: [
        { id: "id-u34l4-panci", type: "vocab", front: "panci", reading: "panci", meaning: "a pot", example: { jp: "Panci itu masih ada di kompor.", en: "That pot is still on the stove." }, accept: ["a saucepan", "a cooking pan"], drill: { jp: "Panci besar itu masih kotor sekali", en: "That big pot is still very dirty" }, hint: "PAHN-chee, c is CH. A deep pot with a handle, for boiling and for soup. Wajan is the wide curved pan for frying, which is what an Indonesian kitchen actually reaches for most. You already have mencuci, to wash, which is what happens to a panci afterwards." },
        { id: "id-u34l4-kompor", type: "vocab", front: "kompor", reading: "kompor", meaning: "a stove", example: { jp: "Kompor di dapur kami sudah lama.", en: "The stove in our kitchen is old." }, accept: ["a cooker", "a hob"], drill: { jp: "Jangan menaruh kertas di dekat kompor", en: "Do not put paper near the stove" }, hint: "KOHM-por. The hob you cook on, gas or electric. From Dutch komfoor, which is why it looks nothing like the English. Kompor gas is the usual kind. Mengompori, oddly, means to stir someone up — the same image as turning the heat on." },
        { id: "id-u34l4-api", type: "vocab", front: "api", reading: "api", meaning: "fire", example: { jp: "Api di kompor itu terlalu besar.", en: "The flame on that stove is too high." }, accept: ["a flame", "the burner"], drill: { jp: "Api kecil itu lebih baik untuk nasi", en: "A low flame is better for rice" }, hint: "AH-pee. Fire and flame alike, including the burner on a stove: api besar is a high flame and api kecil a low one, which is how a recipe tells you the heat. ⚠️ Do not confuse it with apa, what, which you already have — one letter apart. Kereta api, literally fire carriage, is the train, so you already knew half of it." },
        { id: "id-u34l4-minyak", type: "vocab", front: "minyak", reading: "minyak", meaning: "oil", example: { jp: "Minyak di panci itu sudah panas.", en: "The oil in that pan is already hot." }, accept: ["cooking oil", "fat for frying"], drill: { jp: "Minyak goreng itu ada di dapur", en: "That cooking oil is in the kitchen" }, hint: "MEE-nyak, ny one sound. Any oil: minyak goreng is cooking oil, minyak tanah is kerosene, and minyak wangi, literally fragrant oil, is perfume. Note that bensin, which you already have, is specifically petrol and is not called minyak." },
        { id: "id-u34l4-resep", type: "vocab", front: "resep", reading: "resep", meaning: "a recipe", example: { jp: "Resep itu dari nenek saya.", en: "That recipe is from my grandmother." }, accept: ["the instructions for a dish", "a prescription"], drill: { jp: "Saya mencatat resep itu di buku kecil", en: "I wrote that recipe down in a small book" }, hint: "RUH-sep, the first e swallowed. ⚠️ Two senses that surprise English speakers with one word: a cooking recipe AND a doctor's prescription — resep dokter is what you take to the apotek. From Dutch recept. You already have mencatat, to note down, which is what you do with one." },
        { id: "id-u34l4-menyajikan", type: "vocab", front: "menyajikan", reading: "menyajikan", meaning: "to serve a dish", example: { jp: "Warung itu menyajikan makanan pedas.", en: "That stall serves spicy food." }, accept: ["to dish up", "to put food on the table"], drill: { jp: "Ibu menyajikan makanan untuk semua tamu", en: "Mother serves food for all the guests" }, hint: "muh-nya-JEE-kan, ny one sound. Putting food in front of people, and by extension presenting anything to an audience — a programme can menyajikan berita. ⚠️ Not memberi, which you already have for simply giving; menyajikan carries the idea of presenting it properly. Sajian is what has been served up." },
      ],
    },
  ],
};
