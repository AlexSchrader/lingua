// ID Unit 46 — Api, tanah, dan bencana ("Fire, earth and disaster") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 3 (u41–u50). unit1.js's 12 conventions and unit21.js's 10 A2
// conventions BIND this file. RETITLED AND RETHEMED from "Vocabulary 7 (A2)".
//
// ⚠️ THE SECOND SLOT AT RISK OF DUPLICATING A1, so it was measured before it was
// themed. Block 1's note reads: "u26 'Nature and animals' → **A1's u19 IS animals
// and nature, 24/24**", and block 1 rethemed its own u26 away entirely. A1's
// nature coverage is u8 (weather: cuaca · hujan · angin · panas · dingin · awan ·
// langit · cerah · musim · basah · kering) and u19 (scenery and animals: laut ·
// sungai · gunung · pohon · bunga · daun · hutan · desa · matahari · bintang ·
// pantai plus eleven animals).
//
// WHAT IT NEVER TOUCHED, measured against all 720 merged cards: **fire and smoke
// (no api, asap, kebakaran), the ground and what it is made of (no tanah, batu,
// pasir, debu, kayu, logam beyond u42's, emas, besi, minyak), the shape of a
// country (no pulau, bumi), DISASTER OF ANY KIND (no banjir, gempa, badai, kabut),
// and growing things as things you grow (no tanaman, menanam, akar, biji,
// rumput).** A1 gave a learner scenery to look at; this unit gives them the
// physical world to talk about, including the four hazards that dominate
// Indonesian news.
//
// ⚠️ `pulau` IS ON BLOCK 1's RESERVED LIST and is taken here (l2). Flagged in the
// hand-back. Indonesia is an archipelago of some seventeen thousand of them, so a
// course that cannot say island has a real hole.
//
// AFFIX ROOTS STRIPPED AND GREPPED BY HAND (convention 3):
//   kebakaran  → bakar   root not taught; a ke-…-an noun on an untaught root, so
//     nothing is taught twice. Same shape as kecelakaan and kecepatan.
//   lingkungan → lingkung root not taught.
//   menanam    → tanam   root not taught; `tanaman` is the -an noun off the same
//     root, SAME LESSON. Neither whole-word-contains the other ("tanaman" holds
//     "tanam" at index 0 but is followed by `a`, a letter, so findWholeWord fails),
//     and the root itself is not carded. The `bekerja`/`pekerjaan` precedent.
//   ⚠️ AND THEIR GLOSSES HAD TO BE PRISED APART. "a plant" and "to plant" BOTH
//     reduce to the single string "plant" under `normalizeMeaning`, which strips a
//     leading a/an/the AND a leading "to " — so those two obvious glosses would
//     have made one prompt with two right answers. Hence "a growing plant" and
//     "to plant in the ground". Caught by measurement, not by eye.
//   api · asap · debu · minyak · kayu · tanah · batu · pasir · pulau · bumi ·
//   rumput · banjir · gempa · badai · kabut · sampah · akar · biji · emas ·
//   besi — all roots.
//
// ⚠️ GLOSS TRAPS ROUTED AROUND (A2 convention A4 — an accept[] entry on a merged
// card, invisible to every linter, measured here through the real `checkMeaning`):
//   `lantai` (u17l1) accepts **"ground"**    → `tanah` is "soil", not "the ground"
//   `sekitar` (u27l4) accepts **"the surroundings"** → `lingkungan` is "what is
//       around you"
//   `menolak` (u22l2) IS **"to refuse"**     → `sampah` cannot accept "refuse"
//   `bensin` (u23l3) accepts **"fuel"/"gasoline"** → `minyak` is "oil"
//   `dunia` (u47l1, mine) is **"the world"** → `bumi` is "the earth", and its
//       accept[] carries no bare "world"
//
// ⛔ NOT CARDED: `gas` — front and gloss are the same string, the copy-task trap
// (A10). `tumbuh` (to grow) is already taught in u25l4, so only the deliberate
// `menanam` is added here.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT46 = {
  id: "id-u46",
  lang: "id",
  title: "Api, tanah, dan bencana",
  order: 46,
  stage: "a2",
  lessons: [
    {
      id: "id-u46l1",
      unit: 46,
      lesson: 1,
      title: "Api dan asap",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about fire and what comes with it — flame, smoke, a building alight, dust, oil and wood.",
      items: [
        { id: "id-u46l1-api", type: "vocab", front: "api", reading: "api", meaning: "fire", example: { jp: "Ada api kecil di dapur.", en: "There is a small fire in the kitchen." }, accept: ["a flame", "an open fire", "the fire itself"], drill: { jp: "Api itu besar dan sangat panas", en: "That fire is big and very hot" }, hint: "AH-pee. Three letters and very high frequency. ⚠️ It hides inside two words you already know: kereta api, literally fire-carriage, is a train, and gunung api is a volcano. Nothing to do with sapi, a cow, despite the ending." },
        { id: "id-u46l1-asap", type: "vocab", front: "asap", reading: "asap", meaning: "smoke", example: { jp: "Asap dari pabrik itu hitam.", en: "The smoke from that factory is black." }, accept: ["fumes", "the smoke", "exhaust"], drill: { jp: "Ada asap putih di atas gunung", en: "There is white smoke above the mountain" }, hint: "AH-sap. Also used for steam and for exhaust, so asap mobil is car fumes. Asap rokok is cigarette smoke. Diasap means smoked, of food — the same image as English." },
        { id: "id-u46l1-kebakaran", type: "vocab", front: "kebakaran", reading: "kebakaran", meaning: "a house fire", example: { jp: "Ada kebakaran di pasar tadi malam.", en: "There was a fire at the market last night." }, accept: ["a blaze that destroys", "a fire disaster", "a building on fire"], drill: { jp: "Kebakaran itu terjadi karena kabel lama", en: "That fire happened because of an old cable" }, hint: "kuh-bah-KAH-ran. ⚠️ Api is fire as a THING; kebakaran is fire as an EVENT that damages something — the word on a news report or an insurance form. Built on bakar, to burn, in the same ke-…-an frame as kecelakaan and kecepatan." },
        { id: "id-u46l1-debu", type: "vocab", front: "debu", reading: "debu", meaning: "dust", example: { jp: "Ada debu di atas lemari.", en: "There is dust on top of the cupboard." }, accept: ["fine dirt", "powdery dust", "grime in the air"], drill: { jp: "Debu di jalan itu sangat banyak", en: "There is a lot of dust on that road" }, hint: "DUH-boo, first e swallowed. Kotor, which you know, is the state of being dirty; debu is the stuff itself. Berdebu means dusty. On an unpaved road in the dry season it is the first complaint you will hear." },
        { id: "id-u46l1-minyak", type: "vocab", front: "minyak", reading: "minyak", meaning: "oil", example: { jp: "Minyak itu mahal di kota ini.", en: "Oil is expensive in this city." }, accept: ["cooking oil", "petroleum", "grease"], drill: { jp: "Ibu memakai minyak untuk memasak", en: "Mother uses oil for cooking" }, hint: "MEE-nyak — ny is one sound. One word for every kind of oil: minyak goreng for frying, minyak tanah for kerosene, minyak bumi for crude. ⚠️ Keep it apart from bensin, which you know for petrol at the pump." },
        { id: "id-u46l1-kayu", type: "vocab", front: "kayu", reading: "kayu", meaning: "wood", example: { jp: "Meja itu dari kayu dan kuat.", en: "That table is made of wood and strong." }, accept: ["timber", "a piece of wood", "wooden material"], drill: { jp: "Ada kayu kering di bawah pohon", en: "There is dry wood under the tree" }, hint: "KAH-yoo — y a consonant. The MATERIAL, where pohon, which you know, is the living tree. Dari kayu is the everyday made of wood. Tukang kayu is a carpenter, literally a wood-worker." },
      ],
    },
    {
      id: "id-u46l2",
      unit: 46,
      lesson: 2,
      title: "Tanah dan batu",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Describe the ground and the land — soil, rock, sand, an island, the planet itself, and the grass on top.",
      items: [
        { id: "id-u46l2-tanah", type: "vocab", front: "tanah", reading: "tanah", meaning: "soil", example: { jp: "Tanah di desa itu sangat baik.", en: "The soil in that village is very good." }, accept: ["the bare earth", "land you own", "earth you dig"], drill: { jp: "Anak itu duduk di tanah kering", en: "That child sits on dry earth" }, hint: "TAH-nah. Soil, and also LAND as property — harga tanah is the price of land, and it is a constant topic. ⚠️ Lantai, which you know, is the floor of a room; tanah is the ground outside. Bawah tanah, underground, pairs it with bawah." },
        { id: "id-u46l2-batu", type: "vocab", front: "batu", reading: "batu", meaning: "a stone", example: { jp: "Ada batu besar di tengah sungai.", en: "There is a big stone in the middle of the river." }, accept: ["a rock", "stone as a material", "a pebble"], drill: { jp: "Batu itu keras dan sangat berat", en: "That stone is hard and very heavy" }, hint: "BAH-too. One stone or stone in general. Batu bata is a brick; es batu, using es which you know, is an ice cube. Berbatu means rocky." },
        { id: "id-u46l2-pasir", type: "vocab", front: "pasir", reading: "pasir", meaning: "sand", example: { jp: "Pasir di pantai itu putih.", en: "The sand on that beach is white." }, accept: ["fine grains", "beach sand", "grit"], drill: { jp: "Kami duduk di pasir dekat laut", en: "We sit on the sand near the sea" }, hint: "PAH-seer. Always the mass noun, never counted — sebutir pasir is a single grain if you truly need one. Gula pasir, literally sand sugar, is granulated sugar, which is what you will see on a shop shelf." },
        { id: "id-u46l2-pulau", type: "vocab", front: "pulau", reading: "pulau", meaning: "an island", example: { jp: "Pulau itu kecil dan sangat sepi.", en: "That island is small and very quiet." }, accept: ["an isle", "a landmass in the sea", "an islet"], drill: { jp: "Kami pergi ke pulau dengan kapal", en: "We go to the island by boat" }, hint: "POO-lau, ending in the au diphthong like English how. ⚠️ AN ESSENTIAL WORD HERE: Indonesia is some seventeen thousand of them, so pulau turns up in every address, weather report and history lesson. Kepulauan is an archipelago." },
        { id: "id-u46l2-bumi", type: "vocab", front: "bumi", reading: "bumi", meaning: "the earth", example: { jp: "Bumi kita hanya satu.", en: "We have only one earth." }, accept: ["the planet", "our planet", "the globe"], drill: { jp: "Bumi ini rumah untuk semua orang", en: "This earth is a home for everyone" }, hint: "BOO-mee. The PLANET, where tanah is the soil under your feet — English uses earth for both and Indonesian keeps them apart. Minyak bumi is crude oil, literally earth-oil. Dunia, which comes later in this band, is the world as a human place." },
        { id: "id-u46l2-rumput", type: "vocab", front: "rumput", reading: "rumput", meaning: "grass", example: { jp: "Rumput di halaman itu tinggi.", en: "The grass in that yard is tall." }, accept: ["a lawn", "grasses", "green growth underfoot"], drill: { jp: "Sapi itu makan rumput di desa", en: "That cow eats grass in the village" }, hint: "ROOM-poot. Both a lawn and wild grass. Rumput laut is seaweed, literally sea-grass, and it is on every menu. Note the u in both syllables — do not let the English grass pull the first vowel toward an a." },
      ],
    },
    {
      id: "id-u46l3",
      unit: 46,
      lesson: 3,
      title: "Banjir dan gempa",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Report a natural disaster — a flood, an earthquake, a storm, thick fog — and talk about the environment and the rubbish in it.",
      items: [
        { id: "id-u46l3-banjir", type: "vocab", front: "banjir", reading: "banjir", meaning: "a flood", example: { jp: "Ada banjir di kota itu setiap musim hujan.", en: "There is a flood in that city every rainy season." }, accept: ["flooding", "high water", "a deluge"], drill: { jp: "Banjir itu masuk ke dalam rumah", en: "That flood got inside the house" }, hint: "BAHN-jeer. Noun and verb at once: jalan itu banjir means that road is flooded, no extra word needed. ⚠️ Also used figuratively for any overwhelming quantity — banjir pertanyaan, a flood of questions." },
        { id: "id-u46l3-gempa", type: "vocab", front: "gempa", reading: "gempa", meaning: "an earthquake", example: { jp: "Gempa itu kuat dan sangat lama.", en: "That earthquake was strong and very long." }, accept: ["a quake", "a tremor", "ground shaking"], drill: { jp: "Gempa itu membuat dinding rumah rusak", en: "That earthquake wrecked the house's wall" }, hint: "GUHM-pa, hard g, first e swallowed. The full form is gempa bumi, earth-quake, using bumi from the last lesson — but gempa alone is what everyone says. Indonesia sits on the Ring of Fire, so this word is in the news constantly." },
        { id: "id-u46l3-badai", type: "vocab", front: "badai", reading: "badai", meaning: "a storm", example: { jp: "Badai itu datang dari laut.", en: "That storm came in from the sea." }, accept: ["a tempest", "a gale", "a violent weather system"], drill: { jp: "Badai besar itu membuat pohon patah", en: "That big storm snapped the trees" }, hint: "BAH-dai, ending in the ai diphthong. Stronger than hujan besar, heavy rain: a badai has wind in it. ⚠️ Not to be confused with badan, the body, which you already know — one letter apart and both common." },
        { id: "id-u46l3-kabut", type: "vocab", front: "kabut", reading: "kabut", meaning: "fog", example: { jp: "Ada kabut di gunung pagi ini.", en: "There is fog on the mountain this morning." }, accept: ["mist", "haze", "thick low cloud"], drill: { jp: "Kabut pagi itu tebal dan dingin", en: "That morning fog was thick and cold" }, hint: "KAH-boot. Fog and mist alike. Kabut asap — fog-smoke — is the haze from burning land, an annual news story across the region, and it pairs this word with asap from lesson one. Berkabut means foggy." },
        { id: "id-u46l3-lingkungan", type: "vocab", front: "lingkungan", reading: "lingkungan", meaning: "the environment", example: { jp: "Lingkungan di desa itu bersih.", en: "The environment in that village is clean." }, accept: ["what is around you", "the natural world around", "a neighbourhood"], drill: { jp: "Lingkungan kota ini kotor dan ramai", en: "This city's environment is dirty and crowded" }, hint: "leeng-KOONG-an. Two live senses: the natural environment, and your immediate neighbourhood — lingkungan rumah saya. ⚠️ Sekitar, which you know as the area around, is a POSITION word; lingkungan is the place itself as a subject." },
        { id: "id-u46l3-sampah", type: "vocab", front: "sampah", reading: "sampah", meaning: "rubbish", example: { jp: "Ada banyak sampah di pinggir jalan.", en: "There is a lot of rubbish at the edge of the road." }, accept: ["litter", "discarded waste", "what you throw out"], drill: { jp: "Sampah itu membuat sungai sangat kotor", en: "That rubbish makes the river very dirty" }, hint: "SAHM-pah. Household rubbish and litter alike. Tempat sampah, using tempat which you know, is a bin. ⚠️ Do not reach for a word like refuse when translating it: menolak already owns to refuse and the two are unrelated." },
      ],
    },
    {
      id: "id-u46l4",
      unit: 46,
      lesson: 4,
      title: "Tanaman dan bahan",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Grow something and name its parts — the plant, putting it in the ground, its root and its seed — and name two metals worth having.",
      items: [
        { id: "id-u46l4-tanaman", type: "vocab", front: "tanaman", reading: "tanaman", meaning: "a growing plant", example: { jp: "Tanaman itu tinggi dan hijau.", en: "That plant is tall and green." }, accept: ["a cultivated plant", "a crop", "something grown"], drill: { jp: "Tanaman di halaman itu sudah besar", en: "The plants in that yard are already big" }, hint: "tah-NAH-man. The -an ending makes the THING resulting from an action, so a tanaman is what has been planted — a cultivated plant, not a wild one. Pohon is a tree and bunga a flower; tanaman is the general growing thing." },
        { id: "id-u46l4-menanam", type: "vocab", front: "menanam", reading: "menanam", meaning: "to plant in the ground", example: { jp: "Ibu menanam bunga di halaman.", en: "Mother planted flowers in the yard." }, accept: ["to put a plant in", "to sow", "to grow something deliberately"], drill: { jp: "Dia menanam pohon di pinggir jalan", en: "He plants a tree at the edge of the road" }, hint: "muh-NAH-nam. The action behind tanaman, off the same root tanam. ⚠️ Tumbuh, which you already know, is the plant growing BY ITSELF; menanam is you putting it in. It is also used for investing money: menanam modal." },
        { id: "id-u46l4-akar", type: "vocab", front: "akar", reading: "akar", meaning: "a root", example: { jp: "Akar pohon itu sangat panjang.", en: "That tree's roots are very long." }, accept: ["the root of a plant", "the underground part", "roots"], drill: { jp: "Akar itu ada di bawah tanah", en: "That root is under the ground" }, hint: "AH-kar. The root of a plant, and by extension the root of a problem — akar masalah, using masalah which you know. Berakar means deeply rooted. Not to be confused with akhir, the end, which you already have." },
        { id: "id-u46l4-biji", type: "vocab", front: "biji", reading: "biji", meaning: "a seed", example: { jp: "Biji itu kecil tetapi akan menjadi pohon.", en: "That seed is small but will become a tree." }, accept: ["a pip", "a kernel", "a grain you sow"], drill: { jp: "Dia menanam biji di tanah basah", en: "He plants a seed in wet soil" }, hint: "BEE-jee. A seed, and also a pip in fruit — biji buah. ⚠️ It doubles as a counting word for small round things, which is why you will hear dua biji telur, two eggs, in a market. Berbiji means having seeds." },
        { id: "id-u46l4-emas", type: "vocab", front: "emas", reading: "emas", meaning: "gold", example: { jp: "Harga emas naik tahun ini.", en: "The price of gold has gone up this year." }, accept: ["golden metal", "the metal gold", "bullion"], drill: { jp: "Ibu saya punya banyak emas", en: "My mother has a lot of gold" }, hint: "uh-MAHS, first e swallowed — two syllables with the weight on the second. The metal, and the colour: warna emas. Also used the way English does for something excellent — kesempatan emas, a golden opportunity." },
        { id: "id-u46l4-besi", type: "vocab", front: "besi", reading: "besi", meaning: "iron", example: { jp: "Pintu itu dari besi dan berat.", en: "That door is made of iron and heavy." }, accept: ["the metal iron", "ironwork", "made of iron"], drill: { jp: "Ada besi lama di bawah meja", en: "There is old iron under the table" }, hint: "BUH-see, first e swallowed. Iron and steel are both besi in ordinary speech; besi baja is steel when the difference matters. ⚠️ It is a specific metal where logam, from the machines unit, is metal in general." },
      ],
    },
  ],
};
