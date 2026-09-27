// ID Unit 19 — Binatang dan alam ("Animals and nature") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Block 3 (u15–u20), authored 2026-09-27. The 12 conventions in unit1.js BIND
// this file. Scaffold slot was "Vocabulary 5" — retitled to what it teaches.
// "Animals" is the second of the three themes block 1 left for this range.
//
// WHAT THE COURSE HAD BEFORE THIS UNIT: `kucing` (u1), plus `ayam` and `ikan`
// taught in u6 as FOOD. So one animal, and two menu items. And nothing outside a
// town at all — u7 spent places-in-town, and the whole natural world (tree,
// flower, mountain, river, sea, beach, forest, sun, star) had no words. That is
// what this unit is, and it is why the two halves belong in one unit: the animals
// are where they live.
//   l1  animals people keep: anjing · sapi · kuda · kambing · bebek · binatang
//   l2  wild and small: burung · ular · monyet · gajah · nyamuk · semut
//   l3  what grows: pohon · bunga · daun · buah · gunung · sungai
//   l4  sea and sky: pantai · laut · hutan · matahari · bintang · desa
//
// AFFIX ROOTS CHECKED BY HAND (the LEXEME probe fails open for Indonesian — see
// unit1.js convention 3): **every one of this unit's 24 fronts is a bare root.**
// There is no me-, ber-, pe-, per-, ter-, se- or ke- word anywhere in it, so there
// is nothing here that could be a second card on a root taught elsewhere. The one
// compound is `matahari`, and it is handled below.
//
// ⚠️ `matahari` IS A COMPOUND OF TWO WORDS THE LEARNER ALREADY HAS — u11's `mata`
// (eye) and u5's `hari` (day), literally the eye of the day. Carded as one word,
// and drill-safe in both directions because neither part is a whole word inside
// it: findWholeWord("mata") fails on "matahari" (followed by h) and
// findWholeWord("hari") fails too (preceded by a). The hint names the derivation,
// because seeing it is most of what makes the word memorable.
//
// 🌙 **THE MOON CANNOT BE CARDED IN THIS LANGUAGE AND THAT IS NOT AN OMISSION.**
// Indonesian for moon is `bulan` — the identical word as month, which u9 already
// teaches. Fronts are unique per language, so a second `bulan` card is a hard
// `validate:content` failure, and the right answer is exactly what unit1.js
// convention 1 says about the glyph cards: do not manufacture a card to fill a
// hole the language does not have. The sense is taught in `matahari`'s hint
// instead, where the learner meets it beside the sun.
//
// TWO NEAR-IDENTICAL PAIRS, FLAGGED IN BOTH HINTS RATHER THAN AVOIDED:
//   `binatang` (animal, l1) vs `bintang` (star, l4) — ONE letter, and they are
//     deliberately in different lessons so the learner never has to sort them out
//     inside one session. Fold-checked: "binatang" and "bintang" are distinct
//     readings, so no dictation card can accept the wrong one.
//   `pantai` (beach, l4) vs u17's `lantai` (floor) — one letter, and u17's card
//     already warns forward at it.
//
// THREE FRONTS CARRY A SECOND UNRELATED SENSE, named in the hint:
//   `bunga`  = a flower AND bank interest (bunga bank)
//   `buah`   = fruit AND the general counter for objects (dua buah rumah)
//   `bintang` = a star in the sky AND a star person, exactly as in English
//
// ONE CULTURAL NOTE THAT IS NOT DECORATION: `anjing` and `monyet` both carry
// weight a learner will step on. Dogs are not pets in much of Indonesia, and
// calling a person monyet is far harsher than the English "monkey". Both are in
// the hints, because a word list that teaches only the denotation teaches a
// learner to give offence fluently.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT19 = {
  id: "id-u19",
  lang: "id",
  title: "Binatang dan alam",
  order: 19,
  stage: "a1",
  lessons: [
    {
      id: "id-u19l1",
      unit: 19,
      lesson: 1,
      title: "Binatang di sekitar rumah",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Name the animals people keep around a house or a farm, and say how many of each there are.",
      items: [
        { id: "id-u19l1-anjing", type: "vocab", front: "anjing", reading: "anjing", meaning: "dog", example: { jp: "Anjing tetangga saya besar dan sangat kuat.", en: "My neighbour's dog is big and very strong." }, accept: ["a dog", "dogs", "hound"], drill: { jp: "Anjing itu tidur di halaman", en: "That dog sleeps in the yard" }, hint: "AHN-jing, hum at the end. ⚠️ Worth knowing before you use it: in much of Indonesia dogs are not pets and are widely considered unclean, so an anjing is usually a guard animal rather than a companion. Cats, kucing, are welcome everywhere." },
        { id: "id-u19l1-sapi", type: "vocab", front: "sapi", reading: "sapi", meaning: "cow", example: { jp: "Sapi itu makan sayur di halaman rumah.", en: "That cow is eating vegetables in the house yard." }, accept: ["a cow", "cattle", "bull"], drill: { jp: "Ada banyak sapi di desa itu", en: "There are many cows in that village" }, hint: "SAH-pee. The animal and its meat both — daging sapi is beef, and a menu says sapi where English says beef. The water buffalo that actually works the rice fields is a kerbau. ⚠️ One letter from sepi, quiet." },
        { id: "id-u19l1-kuda", type: "vocab", front: "kuda", reading: "kuda", meaning: "horse", example: { jp: "Kuda itu lebih tinggi daripada sapi kecil.", en: "That horse is taller than a small cow." }, accept: ["a horse", "horses", "pony"], drill: { jp: "Budi punya dua kuda putih", en: "Budi has two white horses" }, hint: "KOO-da. A horse cart still working the streets of some towns is a delman. Kuda laut, sea horse, is built exactly the way English builds it." },
        { id: "id-u19l1-kambing", type: "vocab", front: "kambing", reading: "kambing", meaning: "goat", example: { jp: "Kambing dan sapi ada di belakang rumah tetangga.", en: "There are goats and cows behind the neighbour's house." }, accept: ["a goat", "goats", "billy goat"], drill: { jp: "Kami membeli kambing di pasar", en: "We buy a goat at the market" }, hint: "KAHM-bing, hum at the end. Goat is everyday meat here — sate kambing is goat satay and gulai kambing a goat curry. Kambing hitam, black goat, means a scapegoat, so it is not about the animal at all." },
        { id: "id-u19l1-bebek", type: "vocab", front: "bebek", reading: "bebek", meaning: "duck", example: { jp: "Bebek itu ada di sungai dekat desa kami.", en: "Those ducks are in the river near our village." }, accept: ["a duck", "ducks", "duckling"], drill: { jp: "Ibu memasak bebek goreng hari ini", en: "Mother is cooking fried duck today" }, hint: "BEH-behk, both e's clear and the final k caught in the throat. Ducks are herded through wet rice fields in flocks, which is why you will meet a queue of them on a road. Bebek goreng, fried duck, is an East Javanese specialty." },
        { id: "id-u19l1-binatang", type: "vocab", front: "binatang", reading: "binatang", meaning: "animal", example: { jp: "Banyak binatang tinggal di hutan itu.", en: "Many animals live in that forest." }, accept: ["an animal", "animals", "a creature", "a beast"], drill: { jp: "Saya suka binatang kecil", en: "I like small animals" }, hint: "bee-NAH-tahng, hum at the end. The general word for an animal. Hewan means the same thing and is the more formal, scientific-sounding one you meet in writing and on signs. ⚠️ One letter from bintang, a star — the extra a is the whole difference." },
      ],
    },
    {
      id: "id-u19l2",
      unit: 19,
      lesson: 2,
      title: "Binatang di hutan dan di kamar",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Name the wild animals and the small ones that get indoors, and say where each of them is.",
      items: [
        { id: "id-u19l2-burung", type: "vocab", front: "burung", reading: "burung", meaning: "bird", example: { jp: "Burung kecil itu ada di pohon depan rumah.", en: "That small bird is in the tree in front of the house." }, accept: ["a bird", "birds", "songbird"], drill: { jp: "Banyak burung menyanyi setiap pagi", en: "Many birds sing every morning" }, hint: "BOO-roong, hum at the end. Keeping a songbird is a serious hobby in Java, and a burung kicau is one entered into singing competitions. The word also opens most bird names — burung hantu, ghost bird, is an owl." },
        { id: "id-u19l2-ular", type: "vocab", front: "ular", reading: "ular", meaning: "snake", example: { jp: "Ular panjang itu ada di sungai dekat hutan.", en: "That long snake is in the river near the forest." }, accept: ["a snake", "snakes", "serpent"], drill: { jp: "Ada ular besar di hutan itu", en: "There is a big snake in that forest" }, hint: "OO-lahr. One word for every snake. Ada ular! is a shout you want to understand the first time you hear it. The word is used about untrustworthy people, much as English uses snake." },
        { id: "id-u19l2-monyet", type: "vocab", front: "monyet", reading: "monyet", meaning: "monkey", example: { jp: "Monyet itu makan buah di pohon tinggi.", en: "That monkey is eating fruit in a tall tree." }, accept: ["a monkey", "monkeys", "ape"], drill: { jp: "Banyak monyet tinggal di hutan", en: "Many monkeys live in the forest" }, hint: "MOH-nyeht — ny as one sound, final t barely released. ⚠️ Calling a PERSON monyet is a serious insult, considerably harsher than in English, so keep the word for the animal. Kera is the neutral, scientific term." },
        { id: "id-u19l2-gajah", type: "vocab", front: "gajah", reading: "gajah", meaning: "elephant", example: { jp: "Gajah adalah binatang paling besar di hutan.", en: "The elephant is the biggest animal in the forest." }, accept: ["an elephant", "elephants", "a tusker"], drill: { jp: "Kami melihat gajah di hutan", en: "We saw an elephant in the forest" }, hint: "GAH-jah, hard g and a breathed h. The Sumatran elephant is one of the animals Indonesia is known for. Ingatan gajah, an elephant's memory, is the same idiom as in English. ⚠️ One letter from wajah, a face." },
        { id: "id-u19l2-nyamuk", type: "vocab", front: "nyamuk", reading: "nyamuk", meaning: "mosquito", example: { jp: "Banyak nyamuk di kamar tidur setiap malam.", en: "There are a lot of mosquitoes in the bedroom every night." }, accept: ["a mosquito", "mosquitoes", "gnat"], drill: { jp: "Saya menutup jendela karena nyamuk", en: "I shut the window because of mosquitoes" }, hint: "NYAH-mook — ny is one sound and the final k is caught in the throat. The most consequential animal in Indonesia, because it carries demam berdarah, dengue fever. Obat nyamuk, mosquito medicine, is the coil or spray you buy against it." },
        { id: "id-u19l2-semut", type: "vocab", front: "semut", reading: "semut", meaning: "ant", example: { jp: "Semut kecil ada di meja dapur karena gula.", en: "Small ants are on the kitchen table because of the sugar." }, accept: ["an ant", "ants", "a line of ants"], drill: { jp: "Banyak semut di dapur rumah kami", en: "There are many ants in our kitchen" }, hint: "suh-MOOT, swallowed first e. Leave sugar out in a tropical kitchen and you will learn this word within the hour. Gula semut, ant sugar, is a coarse palm sugar named for the shape of its grains, not for the insect. ⚠️ One letter from semua, all." },
      ],
    },
    {
      id: "id-u19l3",
      unit: 19,
      lesson: 3,
      title: "Pohon, bunga, dan gunung",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Describe a landscape: say what grows there and name the mountain and the river.",
      items: [
        { id: "id-u19l3-pohon", type: "vocab", front: "pohon", reading: "pohon", meaning: "tree", example: { jp: "Pohon di depan rumah kami sangat tinggi.", en: "The tree in front of our house is very tall." }, accept: ["a tree", "trees", "tree trunk"], drill: { jp: "Ada pohon besar di halaman sekolah", en: "There is a big tree in the school yard" }, hint: "POH-hohn, both o's closed. Pohon doubles as the counter for trees: dua pohon mangga, two mango trees. Wood as a material is kayu." },
        { id: "id-u19l3-bunga", type: "vocab", front: "bunga", reading: "bunga", meaning: "flower", example: { jp: "Bunga merah itu ada di halaman tetangga.", en: "That red flower is in the neighbour's yard." }, accept: ["a flower", "flowers", "blossom"], drill: { jp: "Ibu membeli bunga putih di pasar", en: "Mother buys white flowers at the market" }, hint: "BOO-nga, hard g. ⚠️ The identical word also means bank interest — bunga bank — from the sense of something that grows. Bunga matahari, sun flower, is a sunflower." },
        { id: "id-u19l3-daun", type: "vocab", front: "daun", reading: "daun", meaning: "leaf", example: { jp: "Daun pohon itu hijau dan sangat besar.", en: "That tree's leaves are green and very big." }, accept: ["a leaf", "leaves", "foliage"], drill: { jp: "Banyak daun kering di halaman", en: "There are many dry leaves in the yard" }, hint: "DAH-oon, two syllables — not the English down. Banana leaf, daun pisang, is the plate and the wrapper of half of Indonesian cooking, so the word turns up on menus. Daun teh is tea leaves." },
        { id: "id-u19l3-buah", type: "vocab", front: "buah", reading: "buah", meaning: "fruit", example: { jp: "Kami membeli buah manis di pasar pagi ini.", en: "We bought sweet fruit at the market this morning." }, accept: ["a fruit", "fruits", "a piece of fruit"], drill: { jp: "Anak kecil itu suka buah", en: "That small child likes fruit" }, hint: "BOO-ah, two syllables. Fruit, and also the general counter for objects — dua buah rumah, two houses. That second job is optional in speech, so you can leave it out and still be correct." },
        { id: "id-u19l3-gunung", type: "vocab", front: "gunung", reading: "gunung", meaning: "mountain", example: { jp: "Gunung itu sangat tinggi dan cuaca di sana dingin.", en: "That mountain is very high and the weather up there is cold." }, accept: ["a mountain", "mountains", "peak", "volcano"], drill: { jp: "Kami berjalan ke gunung besok", en: "We walk to the mountain tomorrow" }, hint: "GOO-noong, hard g and a hum at the end. Indonesia has more active volcanoes than any other country, so a gunung is usually one of them — a gunung berapi, a fire mountain. The word opens almost every Indonesian mountain name." },
        { id: "id-u19l3-sungai", type: "vocab", front: "sungai", reading: "sungai", meaning: "river", example: { jp: "Sungai di belakang desa itu panjang dan kotor.", en: "The river behind that village is long and dirty." }, accept: ["a river", "rivers", "stream"], drill: { jp: "Anak bermain di sungai setiap sore", en: "Children play in the river every afternoon" }, hint: "SOO-ngai — ng is one hum and the ai is as in EYE. Rivers are the roads of Kalimantan and Sumatra, and the word opens most Indonesian river names. A small stream is a kali, which is also the word for times." },
      ],
    },
    {
      id: "id-u19l4",
      unit: 19,
      lesson: 4,
      title: "Laut, pantai, dan langit",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where you are on an island — the sea, the beach, the forest — and describe what is in the sky.",
      items: [
        { id: "id-u19l4-pantai", type: "vocab", front: "pantai", reading: "pantai", meaning: "beach", example: { jp: "Pantai di Bali ramai setiap hari Minggu.", en: "The beach in Bali is crowded every Sunday." }, accept: ["a beach", "beaches", "the coast", "seaside"], drill: { jp: "Kami berenang di pantai kemarin", en: "We swam at the beach yesterday" }, hint: "PAHN-tai, the ai as in EYE. The beach and the coastline both. ⚠️ One letter from lantai, a floor — the p against the l is all that separates them." },
        { id: "id-u19l4-laut", type: "vocab", front: "laut", reading: "laut", meaning: "sea", example: { jp: "Laut di depan pantai itu sangat biru.", en: "The sea in front of that beach is very blue." }, accept: ["the sea", "ocean", "seawater"], drill: { jp: "Ikan itu dari laut dekat Bali", en: "That fish is from the sea near Bali" }, hint: "LAH-oot, two syllables. Indonesia is mostly laut — more than seventeen thousand islands — so the word is everywhere: ikan laut is sea fish, Laut Jawa the Java Sea. Anything from the sea takes laut after it." },
        { id: "id-u19l4-hutan", type: "vocab", front: "hutan", reading: "hutan", meaning: "forest", example: { jp: "Banyak pohon besar ada di hutan dekat gunung.", en: "There are many big trees in the forest near the mountain." }, accept: ["a forest", "jungle", "woods"], drill: { jp: "Gajah tinggal di hutan Indonesia", en: "Elephants live in the forests of Indonesia" }, hint: "HOO-tahn. Forest and jungle are one word here. Hutan hujan is a rain forest, and the great ape's name, orang hutan, is literally forest person — orang, which you already have, plus this word. ⚠️ One letter from hujan, rain — and hutan hujan puts both in one phrase, which is a good way to fix the difference." },
        { id: "id-u19l4-matahari", type: "vocab", front: "matahari", reading: "matahari", meaning: "sun", example: { jp: "Matahari pagi ini sangat terang dan panas.", en: "This morning's sun is very bright and hot." }, accept: ["the sun", "sunshine", "sunlight"], drill: { jp: "Saya memakai topi karena matahari", en: "I wear a hat because of the sun" }, hint: "mah-tah-HAH-ree. Built from mata, eye, and hari, day — the eye of the day, out of two words you already know. ⚠️ The MOON is bulan, the very same word as month, so Indonesian has no separate word to learn: when you hear bulan, the sentence tells you which is meant." },
        { id: "id-u19l4-bintang", type: "vocab", front: "bintang", reading: "bintang", meaning: "star", example: { jp: "Malam ini banyak bintang di langit desa.", en: "Tonight there are many stars in the village sky." }, accept: ["a star", "stars", "a celebrity"], drill: { jp: "Saya melihat bintang di langit", en: "I see stars in the sky" }, hint: "BIN-tahng, hum at the end. A star in the sky and a star person, exactly as in English — bintang film is a film star. ⚠️ One a apart from binatang, an animal. Say both slowly until the difference sticks." },
        { id: "id-u19l4-desa", type: "vocab", front: "desa", reading: "desa", meaning: "village", example: { jp: "Desa kami lebih sepi daripada kota besar.", en: "Our village is quieter than a big city." }, accept: ["a village", "the countryside", "rural area"], drill: { jp: "Ayah saya tinggal di desa", en: "My father lives in the village" }, hint: "DEH-sa, a clear eh. It is the official smallest unit of Indonesian local government as well as the everyday word for a village. Orang desa is a country person; kampung is the warmer, more personal word for the same place." },
      ],
    },
  ],
};
