// ID Unit 86 — Hidangan dan rumah makan ("Dishes and eating out") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u77–u87). The 12 conventions in unit1.js and the 10 A2 conventions
// in unit21.js BIND this file. Read both before editing.
//
// ⚠️ THIS UNIT CLOSES TWO CORE-INVENTORY GAPS, AND BOTH ARE EMBARRASSING ONES.
// `scripts/qa/core-inventory.mjs` tracks the words a course of this size must
// have. Measured against all 1200 A1+A2 cards, Indonesian was missing:
//   • **`roti` — BREAD.** Not taught anywhere in 50 units.
//   • **`daging` — MEAT.** Also absent, although `sapi`, `ayam`, `kambing` and
//     `ikan` were all taught as animals and `memanggang`, `merebus`, `menggoreng`
//     and `mengukus` were all taught as things you do to food.
// A course that teaches four ways to cook and no word for meat has the German
// `die Frage` shape exactly. Both are carded in lesson 1.
//
// THE REST OF THE HOLE. A2 taught twenty basic foods (`nasi` · `mi` · `sayur` ·
// `buah` · `telur` · `susu` · `gula` · `garam` · `kopi` · `teh` · `air` · `es` ·
// `minyak` · `bawang` · `cabai` · `bumbu` · `ayam` · `sapi` · `ikan` · `bebek`)
// and the cooking verbs, and left out: a restaurant, a waiter, a portion, a
// course, a snack, and every named Indonesian dish. The learner could buy
// ingredients and could not order a meal.
//
// WORDS DECLINED FOR THE COPY-TASK RULE (A10 — the `skor` rejection):
//   `menu`      IDENTICAL in both languages. A card that shows "menu" and accepts
//               "menu" teaches nothing.
//   `restoran`  two letters from "restaurant", and the unit title's own
//               **`rumah makan`** is carded instead — a compound of two words the
//               learner already has, and the sign actually hanging over an
//               Indonesian eating house.
//   `apel`      one letter from "apple".
// ALSO DECLINED: `piring` (TAKEN at u17) · `bon` (`kwitansi` is already taught) ·
//   `nangka` (free, cut for space; four fruits is enough) · `tahu` (TAKEN — it is
//   the verb "to know", and the bean curd is a homograph this course cannot card).
//
// `kelapa` IS NOT HERE. It is u84's, as the crop on the tree — the internal
// boundary this block set: the plant and the farm are u84's, the living animal is
// u85's, the food on the plate is this unit's. `sapi` and `ayam` stay taught as
// animals; what this unit adds is `daging`, the meat.
//
// GLOSS REWRITTEN BECAUSE THE GRADER COLLIDED IT: `porsi` "a portion" ->
// `bagian` (a part) owns "portion". Carded as "a serving of food". Invisible to
// `lint:curriculum`, which compares exact strings.
//
// NOTE ON THE NAMED DISHES. `sate`, `bakso`, `rendang`, `kecap`, `sambal`,
// `kerupuk` and `tempe` are proper Indonesian food words with no English
// equivalent, so each gloss DESCRIBES rather than translates. That is deliberate
// and it is the opposite of a copy task: the front is Indonesian, the gloss is a
// description, and the produce card has real work to do.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT86 = {
  id: "id-u86",
  lang: "id",
  title: "Hidangan dan rumah makan",
  order: 86,
  stage: "b1",
  lessons: [
    {
      id: "id-u86l1",
      unit: 86,
      lesson: 1,
      title: "Roti, daging, dan keju",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Name the everyday foods a 1200-word course had somehow skipped: bread, meat, cheese, butter, flour, cake.",
      items: [
        { id: "id-u86l1-roti", type: "vocab", front: "roti", reading: "roti", meaning: "bread", example: { jp: "Saya makan roti dan telur setiap pagi.", en: "I eat bread and eggs every morning." }, accept: ["a loaf", "a bread roll"], drill: { jp: "Saya makan roti dan telur setiap pagi", en: "I eat bread and eggs every morning" }, hint: "RO-tee. From Hindi through Malay. It covers bread of every kind, and roti bakar, grilled bread, is a standard Indonesian breakfast and late-night snack. This word was missing from the whole course until now." },
        { id: "id-u86l1-daging", type: "vocab", front: "daging", reading: "daging", meaning: "meat", example: { jp: "Daging sapi lebih mahal dari daging ayam.", en: "Beef is more expensive than chicken." }, accept: ["flesh as food", "red meat"], drill: { jp: "Daging sapi lebih mahal dari daging ayam", en: "Beef is more expensive than chicken" }, hint: "DA-ging. Put the animal after it and you get the cut: daging sapi is beef, daging ayam is chicken, daging kambing is mutton. You have known sapi, ayam and kambing as animals since A2 — this is the word that turns them into food." },
        { id: "id-u86l1-keju", type: "vocab", front: "keju", reading: "keju", meaning: "cheese", example: { jp: "Roti dengan keju dan gula adalah makanan anak.", en: "Bread with cheese and sugar is a children's food." }, accept: ["a cheese", "dairy cheese"], drill: { jp: "Roti dengan keju dan gula adalah makanan anak", en: "Bread with cheese and sugar is a children's food" }, hint: "KEH-joo, from Portuguese queijo — one of the handful of Portuguese words Indonesian kept. Indonesians put it on sweet things as often as savoury: roti keju with condensed milk is a classic." },
        { id: "id-u86l1-mentega", type: "vocab", front: "mentega", reading: "mentega", meaning: "butter", example: { jp: "Mentega di lemari itu sudah tidak segar.", en: "The butter in that cupboard is no longer fresh." }, accept: ["dairy butter", "margarine"], drill: { jp: "Mentega di lemari itu sudah tidak segar", en: "The butter in that cupboard is no longer fresh" }, hint: "mun-TEH-ga, also from Portuguese. In practice Indonesians use mentega for margarine too, since real butter is the rarer thing; a label saying mentega may be either." },
        { id: "id-u86l1-tepung", type: "vocab", front: "tepung", reading: "tepung", meaning: "flour", example: { jp: "Untuk kue ini perlu tepung, gula dan telur.", en: "For this cake you need flour, sugar and eggs." }, accept: ["milled flour", "ground meal"], drill: { jp: "Untuk kue ini perlu tepung gula dan telur", en: "For this cake you need flour sugar and eggs" }, hint: "tuh-POONG. Any ground powder for cooking: tepung beras is rice flour, tepung terigu is wheat flour. Indonesian names the grain after it rather than assuming wheat." },
        { id: "id-u86l1-kue", type: "vocab", front: "kue", reading: "kue", meaning: "a cake", example: { jp: "Ibu membuat kue untuk hari raya setiap tahun.", en: "Mother makes cakes for the holiday every year." }, accept: ["a sweet pastry", "a small sweet snack"], drill: { jp: "Ibu membuat kue untuk hari raya setiap tahun", en: "Mother makes cakes for the holiday every year" }, hint: "KOO-eh, two syllables. MUCH wider than English \"cake\": any small sweet or savoury snack-sized thing, steamed, fried or baked. A kue basah is a soft steamed one, a kue kering a biscuit." },
      ],
    },
    {
      id: "id-u86l2",
      unit: 86,
      lesson: 2,
      title: "Lauk, camilan, dan kerupuk",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Describe how an Indonesian meal is actually put together: the rice, the things you eat with it, the crackers, the soy-bean cake, the snack between meals.",
      items: [
        { id: "id-u86l2-lauk", type: "vocab", front: "lauk", reading: "lauk", meaning: "a dish eaten with rice", example: { jp: "Nasi dengan dua lauk sudah cukup untuk saya.", en: "Rice with two side dishes is enough for me." }, accept: ["a side dish accompanying rice", "an accompaniment to rice"], drill: { jp: "Nasi dengan dua lauk sudah cukup untuk saya", en: "Rice with two side dishes is enough for me" }, hint: "LA-ook, two syllables. THIS WORD STRUCTURES THE WHOLE INDONESIAN MEAL and English has nothing like it. Rice is the meal; everything else on the plate is lauk, and you choose two or three. A warung asks mau lauk apa, not \"what do you want to eat\"." },
        { id: "id-u86l2-camilan", type: "vocab", front: "camilan", reading: "camilan", meaning: "a snack", example: { jp: "Dia selalu membawa camilan ke kantor.", en: "He always brings a snack to the office." }, accept: ["something nibbled between meals", "a nibble"], drill: { jp: "Dia selalu membawa camilan ke kantor", en: "He always brings a snack to the office" }, hint: "cha-MEE-lahn — c is CH. Root camil, to nibble. Eaten between meals and never instead of one. Also spelled cemilan in casual writing; camilan is the standard form." },
        { id: "id-u86l2-kerupuk", type: "vocab", front: "kerupuk", reading: "kerupuk", meaning: "a prawn cracker", example: { jp: "Nasi goreng selalu dengan kerupuk di atas.", en: "Fried rice always comes with crackers on top." }, accept: ["a deep-fried savoury cracker", "a puffed cracker"], drill: { jp: "Nasi goreng selalu dengan kerupuk di atas", en: "Fried rice always comes with crackers on top" }, hint: "kuh-ROO-pook. The puffed, deep-fried cracker that comes with almost everything. Indonesians regard a meal without kerupuk as incomplete, and the crunch is the point — kerupuk that has gone soft is the standard metaphor for something gone limp." },
        { id: "id-u86l2-tempe", type: "vocab", front: "tempe", reading: "tempe", meaning: "fermented soybean cake", example: { jp: "Tempe goreng murah dan enak sekali.", en: "Fried tempe is cheap and very tasty." }, accept: ["a pressed fermented bean block", "soybean cake"], drill: { jp: "Tempe goreng murah dan enak sekali", en: "Fried tempe is cheap and very tasty" }, hint: "TEM-peh. Indonesia's own invention and its most-exported food word. A firm cake of soybeans bound by a white mould, sliced and fried. The gloss describes rather than translates, because English borrowed the Indonesian word unchanged." },
        { id: "id-u86l2-hidangan", type: "vocab", front: "hidangan", reading: "hidangan", meaning: "a course of a meal", example: { jp: "Hidangan terakhir di pesta itu buah dan kue.", en: "The last course at that party was fruit and cake." }, accept: ["a dish as served", "food set out for guests"], drill: { jp: "Hidangan terakhir di pesta itu buah dan kue", en: "The last course at that party was fruit and cake" }, hint: "hee-DA-ngahn. Food as SERVED and brought out, where makanan is food in general. You already know menyajikan, to serve — same idea, and hidang is the root behind it." },
        { id: "id-u86l2-porsi", type: "vocab", front: "porsi", reading: "porsi", meaning: "a serving of food", example: { jp: "Satu porsi di warung itu besar sekali.", en: "One serving at that warung is very big." }, accept: ["a plated helping", "a single order of a dish"], drill: { jp: "Satu porsi di warung itu besar sekali", en: "One serving at that warung is very big" }, hint: "POR-see. What you order one of: satu porsi nasi goreng. The gloss avoids a bare \"a portion\" because bagian, which you know, already accepts that from the grader." },
      ],
    },
    {
      id: "id-u86l3",
      unit: 86,
      lesson: 3,
      title: "Di rumah makan",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Eat out: find the eating house, speak to the waiter, ask for a fork, and order three dishes by name.",
      items: [
        { id: "id-u86l3-rumahmakan", type: "vocab", front: "rumah makan", reading: "rumahmakan", meaning: "an eating house", example: { jp: "Rumah makan di dekat stasiun itu ramai sampai malam.", en: "The eating house near the station is busy until night." }, accept: ["a restaurant", "a sit-down eatery"], drill: { jp: "Rumah makan dekat stasiun itu ramai sampai malam", en: "The eating house near the station is busy until night" }, hint: "Two words you already know: rumah (house) and makan (to eat). This is what the sign over an Indonesian eatery actually says. It is a step up from a warung, which you know as a small stall, and the loanword restoran is reserved for the smartest places." },
        { id: "id-u86l3-pelayan", type: "vocab", front: "pelayan", reading: "pelayan", meaning: "a waiter", example: { jp: "Pelayan itu datang dengan air dan teh panas.", en: "The waiter came with water and hot tea." }, accept: ["a server at a table", "waiting staff"], drill: { jp: "Pelayan itu datang dengan air dan teh", en: "The waiter came with water and tea" }, hint: "puh-LA-yahn. Root layan, to serve a person — the pe- doer frame again, as in pemain and pembaca. Indonesians call a waiter over with mas or mbak, which you already know, rather than with the job title." },
        { id: "id-u86l3-garpu", type: "vocab", front: "garpu", reading: "garpu", meaning: "a fork", example: { jp: "Di warung itu hanya ada sendok, tidak ada garpu.", en: "At that warung there are only spoons, no forks." }, accept: ["a table fork", "an eating fork"], drill: { jp: "Di warung itu tidak ada garpu", en: "At that warung there are no forks" }, hint: "GAR-poo, from Dutch gaffel by way of Portuguese garfo. Indonesians eat most things with a sendok alone, or with the right hand, so asking for a garpu is a reasonable thing to need to say." },
        { id: "id-u86l3-sate", type: "vocab", front: "sate", reading: "sate", meaning: "grilled meat skewers", example: { jp: "Sate ayam itu enak dengan bumbu dan kecap.", en: "That chicken sate is good with spice paste and soy sauce." }, accept: ["meat grilled on a stick", "skewered grilled meat"], drill: { jp: "Sate ayam itu enak dengan bumbu dan kecap", en: "That chicken sate is good with spice paste and soy sauce" }, hint: "SA-teh. Small pieces of daging threaded on a stick and grilled over charcoal — the national street food, sold from a cart with a fan. The gloss describes it, because the English word is just the Indonesian one borrowed." },
        { id: "id-u86l3-bakso", type: "vocab", front: "bakso", reading: "bakso", meaning: "a meatball", example: { jp: "Bakso dengan mi dan sayur adalah makanan murah.", en: "Meatballs with noodles and vegetables are a cheap meal." }, accept: ["a meatball in soup", "a boiled meat ball"], drill: { jp: "Bakso dengan mi dan sayur makanan murah", en: "Meatballs with noodles and vegetables are a cheap meal" }, hint: "BAHK-so, from Hokkien Chinese. Boiled meatballs in clear broth with mi — which you already know — and the single most common cheap lunch in Indonesia. A whole trade of bakso carts runs on it." },
        { id: "id-u86l3-rendang", type: "vocab", front: "rendang", reading: "rendang", meaning: "slow-cooked beef curry", example: { jp: "Rendang dari Padang pedas dan sangat enak.", en: "Rendang from Padang is spicy and very good." }, accept: ["dry-braised spiced beef", "a Minangkabau beef dish"], drill: { jp: "Rendang dari Padang pedas dan sangat enak", en: "Rendang from Padang is spicy and very good" }, hint: "REN-dahng. Beef cooked for hours in coconut milk and spices until the liquid is gone — the Minangkabau dish from West Sumatra that gets voted the world's best food in internet polls. Padang is its home city." },
      ],
    },
    {
      id: "id-u86l4",
      unit: 86,
      lesson: 4,
      title: "Kecap, sambal, dan buah",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Ask for the two condiments on every Indonesian table, and name the fruit a market actually sells.",
      items: [
        { id: "id-u86l4-kecap", type: "vocab", front: "kecap", reading: "kecap", meaning: "soy sauce", example: { jp: "Kecap manis enak untuk nasi goreng dan sate.", en: "Sweet soy sauce is good with fried rice and sate." }, accept: ["sweet soy sauce", "a dark soy condiment"], drill: { jp: "Kecap manis untuk nasi goreng dan sate", en: "Sweet soy sauce is for fried rice and sate" }, hint: "KEH-chahp — c is CH. From Hokkien, and the ancestor of the English word \"ketchup\", which came the long way round through Malay. Indonesian kecap is normally kecap manis: thick, dark and sweet, not salty." },
        { id: "id-u86l4-sambal", type: "vocab", front: "sambal", reading: "sambal", meaning: "chilli paste", example: { jp: "Sambal di meja itu sangat pedas, jadi hati-hati.", en: "The chilli paste on that table is very spicy, so be careful." }, accept: ["a ground chilli relish", "hot chilli sauce"], drill: { jp: "Sambal di meja itu sangat pedas jadi hati-hati", en: "The chilli paste on that table is very spicy so be careful" }, hint: "SAHM-bahl. Ground cabai — which you already know — with salt and other things, and there are dozens of named kinds. It is on every table, and pedas, which you know, is what it is for." },
        { id: "id-u86l4-pisang", type: "vocab", front: "pisang", reading: "pisang", meaning: "a banana", example: { jp: "Pisang goreng dengan kopi adalah camilan sore.", en: "Fried banana with coffee is an afternoon snack." }, accept: ["bananas", "plantain"], drill: { jp: "Pisang goreng dengan kopi adalah camilan sore", en: "Fried banana with coffee is an afternoon snack" }, hint: "PEE-sahng. Indonesia grows dozens of varieties and fries the starchy ones: pisang goreng is the default afternoon camilan, which you met two lessons back." },
        { id: "id-u86l4-mangga", type: "vocab", front: "mangga", reading: "mangga", meaning: "a mango", example: { jp: "Mangga di pasar itu masih mentah dan asam.", en: "The mangoes at that market are still unripe and sour." }, accept: ["mangoes", "a tropical stone fruit"], drill: { jp: "Mangga di pasar itu masih mentah dan asam", en: "The mangoes at that market are still unripe and sour" }, hint: "MAHNG-ga, with ngg — the hum plus a hard g. Indonesians eat them mentah and asam with salt and chilli as readily as ripe and sweet, and both words are already yours." },
        { id: "id-u86l4-semangka", type: "vocab", front: "semangka", reading: "semangka", meaning: "a watermelon", example: { jp: "Semangka dingin enak sekali waktu panas.", en: "Cold watermelon is very good when it is hot." }, accept: ["watermelon", "a large green melon"], drill: { jp: "Semangka dingin enak sekali waktu panas", en: "Cold watermelon is very good when it is hot" }, hint: "suh-MAHNG-ka. Note it is not a compound of mangga, which it only resembles — different word, different fruit. Served in wedges at the end of a meal in every rumah makan." },
        { id: "id-u86l4-jeruk", type: "vocab", front: "jeruk", reading: "jeruk", meaning: "an orange", example: { jp: "Air jeruk di warung itu segar dan murah.", en: "The orange juice at that warung is fresh and cheap." }, accept: ["a citrus fruit", "oranges"], drill: { jp: "Air jeruk di warung itu segar dan murah", en: "The orange juice at that warung is fresh and cheap" }, hint: "JUH-rook. The whole citrus family, not just the orange: jeruk nipis is a lime, jeruk manis a sweet orange. air jeruk is the juice — air you have known since the first units." },
      ],
    },
  ],
};
