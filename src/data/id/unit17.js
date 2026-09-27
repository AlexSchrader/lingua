// ID Unit 17 — Di dalam rumah ("Inside the house") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Block 3 (u15–u20), authored 2026-09-27. The 12 conventions in unit1.js BIND
// this file. Scaffold slot was "Vocabulary 3" — retitled to what it teaches.
//
// WHY THIS IS NOT A REPEAT OF u4. u4's fourth lesson spent "the home" and took
// exactly four words: `rumah`, `kamar`, `pintu`, `dapur`. A learner could name
// the house and one room and had no word for the floor, the wall, the window, a
// table, a chair, a plate or a spoon — nor any verb for what happens in a house.
// This unit is the inside of the building and the things in it, which is untouched
// ground rather than a second pass. `jendela` is one of the fronts block 1
// explicitly reserved for this range.
//
// SAME-UNIT COMPOUND/COMPONENT PAIRS, DELIBERATELY SPLIT ACROSS LESSONS:
//   `kamar mandi` (l1) and `mandi` (l4) — convention 8 allows both, because the
//     bare verb has a use the phrase does not reveal (you mandi twice a day; the
//     room is where). They are in DIFFERENT lessons, and `mandi`'s drill contains
//     no "kamar mandi", so neither cloze blanks half of the other's front.
//   `tempat tidur` (l2) against u7's `tempat` and u4's `tidur` — different units,
//     and the compound is the ordinary word for a bed.
//
// AFFIX ROOTS CHECKED BY HAND (the LEXEME probe fails open for Indonesian — see
// unit1.js convention 3):
//   memasak → masak · mencuci → cuci · menyapu → sapu · membuka → buka ·
//   menutup → tutup    NONE of those five roots is taught anywhere in u1–u20, so
//     no root is taught twice. All five are transitive verbs that standard
//     Indonesian prefixes, so convention 4 keeps the prefix and the bare root goes
//     in the hint — which is also what makes the drill routable, since
//     findWholeWord cannot find "buka" inside "membuka".
//   mandi is itself a root and takes no prefix (convention 4, intransitive).
//   jendela · lantai · dinding · atap · halaman · meja · kursi · lemari · lampu ·
//   kulkas · piring · gelas · sendok · pisau · kunci · sabun — all roots.
//
// THREE FRONTS CARRY A SECOND UNRELATED SENSE, named in the hint because the
// learner will meet it and nothing in the spelling warns them:
//   `halaman` = a yard AND a page of a book (halaman dua) — at least as common
//   `lantai`  = a floor AND a storey (lantai dua)
//   `kunci`   = a key AND a lock, and mengunci is to lock
//
// ⚠️ `menutup` IS GLOSSED "to shut", NOT "to close", AND THAT IS A MEASURED
// DECISION. u7's `dekat` ("near") already carries "close" in its accept[], so a
// gloss of "to close" would normalise to "close" and make one typed answer
// correct for two different cards — the defect the gloss rule exists to stop.
// Glossing it "to shut" also lets the hint teach the real split, which English
// hides: menutup pintu shuts a door, dekat is close in distance, and the two are
// never interchangeable in Indonesian.
//
// ⚠️ `gelas` (drinking glass) vs `kaca` (the material) — `kaca` is NOT taught and
// is named in the hint only. Glossing `gelas` as bare "glass" would have been
// ambiguous between the vessel and the substance, so the gloss says which.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT17 = {
  id: "id-u17",
  lang: "id",
  title: "Di dalam rumah",
  order: 17,
  stage: "a1",
  lessons: [
    {
      id: "id-u17l1",
      unit: 17,
      lesson: 1,
      title: "Bagian rumah",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Name the parts of a house — floor, wall, window, roof — and say which room something is in.",
      items: [
        { id: "id-u17l1-jendela", type: "vocab", front: "jendela", reading: "jendela", meaning: "window", example: { jp: "Jendela kamar saya besar dan sangat bersih.", en: "My bedroom window is big and very clean." }, accept: ["a window", "windows", "windowpane"], drill: { jp: "Kucing itu tidur dekat jendela", en: "That cat sleeps near the window" }, hint: "juhn-DEH-la, swallowed first e. From the Portuguese janela — one of a handful of everyday Indonesian words that arrived with the spice trade. Buka jendela! is what you say when a room is too hot." },
        { id: "id-u17l1-lantai", type: "vocab", front: "lantai", reading: "lantai", meaning: "floor", example: { jp: "Lantai dapur kotor karena hujan dan angin.", en: "The kitchen floor is dirty because of the rain and wind." }, accept: ["the floor", "ground", "storey"], drill: { jp: "Kamar Budi ada di lantai dua", en: "Budi's room is on the second floor" }, hint: "LAHN-tai, the ai as in EYE. It is also a storey of a building — lantai dua is the second floor. Many Indonesian homes have a tiled lantai and no carpet at all, which is part of why shoes come off at the door." },
        { id: "id-u17l1-dinding", type: "vocab", front: "dinding", reading: "dinding", meaning: "wall", example: { jp: "Dinding kamar mandi kami sudah lama dan basah.", en: "Our bathroom wall is old and damp." }, accept: ["a wall", "walls", "partition"], drill: { jp: "Lampu itu ada di dinding", en: "That lamp is on the wall" }, hint: "DIN-ding, a hum at the end of each half. An interior or house wall; a thick brick boundary wall outside is a tembok instead. Di dinding means on the wall." },
        { id: "id-u17l1-atap", type: "vocab", front: "atap", reading: "atap", meaning: "roof", example: { jp: "Atap rumah kami basah setiap musim hujan.", en: "Our roof is wet every rainy season." }, accept: ["the roof", "rooftop", "cover overhead"], drill: { jp: "Kucing itu tidur di atap", en: "That cat sleeps on the roof" }, hint: "AH-tahp, with the final p held and never released. Traditionally clay tiles or palm thatch, and the reason a tropical house has such deep eaves. Do not mix it up with atas, which means above. ⚠️ And one letter from atau, or." },
        { id: "id-u17l1-kamarmandi", type: "vocab", front: "kamar mandi", reading: "kamarmandi", meaning: "bathroom", example: { jp: "Kamar mandi ada di belakang dapur.", en: "The bathroom is behind the kitchen." }, accept: ["the bathroom", "washroom", "shower room"], drill: { jp: "Sabun ada di kamar mandi", en: "The soap is in the bathroom" }, hint: "KAH-mahr MAHN-dee — literally bathing room, built from two words. An Indonesian kamar mandi usually has a tiled water tank and a scoop rather than a shower, and the toilet may or may not share it. For the toilet itself ask for the WC, said WEH-seh, or the kamar kecil." },
        { id: "id-u17l1-halaman", type: "vocab", front: "halaman", reading: "halaman", meaning: "yard", example: { jp: "Anak tetangga saya duduk di halaman setiap sore.", en: "My neighbour's child sits in the yard every afternoon." }, accept: ["the yard", "garden", "grounds"], drill: { jp: "Halaman rumah kami sangat bersih", en: "Our house yard is very clean" }, hint: "hah-LAH-mahn. The open ground around a house, front or back. ⚠️ The identical word also means a PAGE of a book — halaman dua, page two — and in writing that sense is the commoner one. Nothing but context separates them." },
      ],
    },
    {
      id: "id-u17l2",
      unit: 17,
      lesson: 2,
      title: "Perabot rumah",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Name the furniture in a room and say where each piece is.",
      items: [
        { id: "id-u17l2-meja", type: "vocab", front: "meja", reading: "meja", meaning: "table", example: { jp: "Meja di dapur penuh dengan piring dan gelas.", en: "The table in the kitchen is full of plates and glasses." }, accept: ["a table", "desk", "counter"], drill: { jp: "Sendok itu ada di meja", en: "That spoon is on the table" }, hint: "MEH-ja, a clear eh. Any table, and a desk too — meja makan is a dining table, meja kerja a work desk. From the Portuguese mesa, like jendela." },
        { id: "id-u17l2-kursi", type: "vocab", front: "kursi", reading: "kursi", meaning: "chair", example: { jp: "Kursi ini terlalu tinggi untuk anak kecil.", en: "This chair is too high for a small child." }, accept: ["a chair", "seat", "stool"], drill: { jp: "Tamu itu duduk di kursi", en: "That guest sits on the chair" }, hint: "KOOR-see. Chair, seat and stool are all one word here. Duduk di kursi is to sit on a chair. Kursi also means a seat in the political sense, exactly as in English." },
        { id: "id-u17l2-tempattidur", type: "vocab", front: "tempat tidur", reading: "tempattidur", meaning: "bed", example: { jp: "Tempat tidur di kamar itu sangat besar.", en: "The bed in that room is very big." }, accept: ["a bed", "bedstead", "sleeping place"], drill: { jp: "Kucing saya suka tempat tidur", en: "My cat likes the bed" }, hint: "tuhm-PAHT TEE-door — literally sleeping place, built from two words you already have. That is how a great deal of Indonesian works: it combines rather than borrows a new root. The mattress itself is a kasur, and plenty of people sleep on one laid straight on the floor." },
        { id: "id-u17l2-lemari", type: "vocab", front: "lemari", reading: "lemari", meaning: "cupboard", example: { jp: "Baju saya ada di lemari kamar saya.", en: "My shirts are in the cupboard in my room." }, accept: ["a cupboard", "wardrobe", "cabinet", "closet"], drill: { jp: "Lemari itu penuh dengan celana", en: "That cupboard is full of trousers" }, hint: "luh-MAH-ree, swallowed first e. Any cupboard, wardrobe or cabinet. Lemari es — literally ice cupboard — is the older word for a fridge, which is why you will hear it alongside kulkas." },
        { id: "id-u17l2-lampu", type: "vocab", front: "lampu", reading: "lampu", meaning: "lamp", example: { jp: "Lampu di kamar mandi tidak terang.", en: "The light in the bathroom is not bright." }, accept: ["a lamp", "light", "light bulb"], drill: { jp: "Lampu di dapur sangat terang", en: "The kitchen lamp is very bright" }, hint: "LAHM-poo. The lamp and the bulb both. Lampu merah, red light, is what everybody calls a traffic light — Belok kanan di lampu merah is a direction you will genuinely be given." },
        { id: "id-u17l2-kulkas", type: "vocab", front: "kulkas", reading: "kulkas", meaning: "fridge", example: { jp: "Air dingin ada di kulkas dapur kami.", en: "The cold water is in our kitchen fridge." }, accept: ["a fridge", "refrigerator", "icebox"], drill: { jp: "Ibu membeli kulkas baru kemarin", en: "Mother bought a new fridge yesterday" }, hint: "KOOL-kahs. Shortened from the Dutch koelkast, cold cupboard — Dutch is the other great source of everyday Indonesian loanwords, alongside Portuguese. Lemari es means the same and sounds a generation older." },
      ],
    },
    {
      id: "id-u17l3",
      unit: 17,
      lesson: 3,
      title: "Barang yang kita pakai",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask for the plate, glass or spoon you need at a table, and say what you eat and wash with.",
      items: [
        { id: "id-u17l3-piring", type: "vocab", front: "piring", reading: "piring", meaning: "plate", example: { jp: "Piring itu penuh dengan nasi dan ayam.", en: "That plate is full of rice and chicken." }, accept: ["a plate", "dish", "platter"], drill: { jp: "Saya mencuci piring setiap malam", en: "I wash the plates every night" }, hint: "PEE-ring, hum at the end. A plate, and by extension a portion — satu piring nasi goreng is one plate of fried rice, which is exactly how you order it. A bowl is a mangkuk." },
        { id: "id-u17l3-gelas", type: "vocab", front: "gelas", reading: "gelas", meaning: "drinking glass", example: { jp: "Saya mau satu gelas air dingin, tolong.", en: "I would like one glass of cold water, please." }, accept: ["a glass", "tumbler", "cup for drinking"], drill: { jp: "Gelas itu ada di meja dapur", en: "That glass is on the kitchen table" }, hint: "GEH-lahs, hard g and a clear eh. It is the vessel, never the material — window glass is kaca. Segelas means one glass of something, and satu gelas es teh is how iced tea arrives. ⚠️ One letter from gelap, dark." },
        { id: "id-u17l3-sendok", type: "vocab", front: "sendok", reading: "sendok", meaning: "spoon", example: { jp: "Kami makan nasi dengan sendok dan tangan.", en: "We eat rice with a spoon and with our hands." }, accept: ["a spoon", "spoonful", "tablespoon"], drill: { jp: "Budi makan telur dengan sendok", en: "Budi eats eggs with a spoon" }, hint: "SEHN-dohk, the final k caught in the throat. The spoon is the main Indonesian utensil — spoon in the right hand, fork in the left to push food onto it, and for many dishes the clean right hand on its own. A fork is a garpu." },
        { id: "id-u17l3-pisau", type: "vocab", front: "pisau", reading: "pisau", meaning: "knife", example: { jp: "Pisau di dapur kami sudah lama dan kotor.", en: "The knife in our kitchen is old and dirty." }, accept: ["a knife", "blade", "cutting knife"], drill: { jp: "Ibu memakai pisau di dapur", en: "Mother uses a knife in the kitchen" }, hint: "PEE-sow, the au as in HOW. A knife of any kind. It is rarely laid at the table, because food arrives already cut small enough for a spoon — so a pisau lives in the dapur." },
        { id: "id-u17l3-kunci", type: "vocab", front: "kunci", reading: "kunci", meaning: "key", example: { jp: "Kunci rumah saya ada di tas hitam itu.", en: "My house key is in that black bag." }, accept: ["the key", "keys", "to lock"], drill: { jp: "Saya mencari kunci mobil saya", en: "I am looking for my car key" }, hint: "KOON-chee — c is CH. It names both the key and the lock, and as a verb mengunci is to lock. Kunci also means the key to a problem, exactly as in English." },
        { id: "id-u17l3-sabun", type: "vocab", front: "sabun", reading: "sabun", meaning: "soap", example: { jp: "Saya memakai sabun dan air dingin setiap pagi.", en: "I use soap and cold water every morning." }, accept: ["a bar of soap", "hand soap", "washing soap"], drill: { jp: "Ibu membeli sabun di toko", en: "Mother buys soap at the shop" }, hint: "SAH-boon. Soap of any kind — bar, liquid or powder. Sabun mandi is bathing soap and sabun cuci the kind for clothes, so the word it pairs with tells you which. Same distant root as the French savon." },
      ],
    },
    {
      id: "id-u17l4",
      unit: 17,
      lesson: 4,
      title: "Kegiatan di dalam rumah",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Say what you are doing around the house — cooking, washing up, sweeping, bathing — and open or shut a door.",
      items: [
        { id: "id-u17l4-memasak", type: "vocab", front: "memasak", reading: "memasak", meaning: "to cook", example: { jp: "Ibu saya memasak ikan dan sayur di dapur.", en: "My mother cooks fish and vegetables in the kitchen." }, accept: ["cook", "to prepare food", "to make a meal"], drill: { jp: "Siti memasak nasi setiap pagi", en: "Siti cooks rice every morning" }, hint: "muh-MAH-sahk. Root masak, and Masak apa hari ini? — what are you cooking today — is an ordinary greeting between neighbours. Masakan is the food that results, so masakan Indonesia is Indonesian cuisine." },
        { id: "id-u17l4-mencuci", type: "vocab", front: "mencuci", reading: "mencuci", meaning: "to wash", example: { jp: "Saya mencuci piring dan gelas setiap malam.", en: "I wash the plates and glasses every night." }, accept: ["wash", "to launder", "to do the washing"], drill: { jp: "Ibu mencuci baju di halaman", en: "Mother washes clothes in the yard" }, hint: "muhn-CHOO-chee — both c's are CH. Root cuci. It covers dishes, clothes and hands alike, and cuci tangan, to wash your hands, will be asked of you before you eat with them. What you do to yourself is mandi, not mencuci." },
        { id: "id-u17l4-menyapu", type: "vocab", front: "menyapu", reading: "menyapu", meaning: "to sweep", example: { jp: "Tetangga saya menyapu halaman setiap pagi.", en: "My neighbour sweeps the yard every morning." }, accept: ["sweep", "to brush the floor", "to sweep up"], drill: { jp: "Budi menyapu lantai kamar mandi", en: "Budi sweeps the bathroom floor" }, hint: "muh-NYAH-poo, ny as one sound. Root sapu, which is also the broom itself — a stiff bundle of palm ribs rather than a brush. Sweeping the halaman at dawn is one of the daily sounds of an Indonesian street." },
        { id: "id-u17l4-membuka", type: "vocab", front: "membuka", reading: "membuka", meaning: "to open", example: { jp: "Saya membuka jendela karena kamar ini sangat panas.", en: "I open the window because this room is very hot." }, accept: ["open", "to unlock", "to turn on"], drill: { jp: "Toko itu membuka jam tujuh", en: "That shop opens at seven" }, hint: "muhm-BOO-ka. Root buka, and the bare root is the command: Buka pintu! It opens doors, windows, bottles and shops — Toko buka jam tujuh, the shop opens at seven. Buka is also the breaking of a fast." },
        { id: "id-u17l4-menutup", type: "vocab", front: "menutup", reading: "menutup", meaning: "to shut", example: { jp: "Kami menutup pintu dan jendela sebelum tidur.", en: "We shut the door and the window before sleeping." }, accept: ["shut", "to cover", "to close the door", "to put a lid on"], drill: { jp: "Siti menutup lemari kamar saya", en: "Siti shuts the cupboard in my room" }, hint: "muh-NOO-toop. Root tutup, and TUTUP is the sign on a shop that is shut. ⚠️ English uses close for two unrelated things and Indonesian does not: menutup pintu shuts a door, while dekat is close in distance. They are never interchangeable." },
        { id: "id-u17l4-mandi", type: "vocab", front: "mandi", reading: "mandi", meaning: "to bathe", example: { jp: "Saya mandi dengan air dingin setiap pagi.", en: "I bathe with cold water every morning." }, accept: ["bathe", "to shower", "to take a bath"], drill: { jp: "Anak kecil itu mandi sekarang", en: "That small child is bathing now" }, hint: "MAHN-dee. Not a soak in a tub: the Indonesian mandi is scooping cold water over yourself from a tank, twice a day, and skipping it gets noticed. Sudah mandi? is a perfectly friendly question. The room it happens in is the kamar mandi." },
      ],
    },
  ],
};
