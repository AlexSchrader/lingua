// ID Unit 115 — Tambang, logam, dan bahan galian ("Mining, metals and minerals") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u114–u126). Conventions: unit1.js §1–12, unit21.js, unit51.js
// §B1–B12, and unit114.js §C1–C9. Read unit114.js's header before editing this.
//
// THE HOLE THIS FILLS, measured against all 2,088 A1+B1 cards. `logam` (u42, a
// metal), `pasir` (u46), `batu` (u46), `bumi` (u46) and `minyak` (u34) are the
// entire mineral vocabulary of a country whose exports are coal, nickel, copper
// and tin. Not one metal has a name. No word for ore, a mine, a miner, a tunnel,
// rust, a furnace, or for smelting. A learner could read "logam" in a headline
// and could not read which metal.
//
// THE BOUNDARY WITH u82, AND IT IS THE ONE THAT DECIDES THIS UNIT'S SCOPE:
//   u82 (B1) owns HAND TOOLS and STOCK MATERIALS — `palu` `gergaji` `paku`
//   `kaca` `plastik` `karet` `kawat` `pipa` `benang`. Things you buy in a shop.
//   u115 owns WHAT COMES OUT OF THE GROUND and the smelting of it. So `kawat`
//   (wire) is u82's and `tembaga` (the copper it is drawn from) is this unit's,
//   and the hint on `tembaga` says exactly that.
//
// ONE GLOSS COLLISION MEASURED (gloss-taken.mjs id):
//   "lead" → kabel@u42, because `kabel`'s card accepts "a lead". So `timbal` is
//   glossed "the heaviest common soft metal" and the word lead appears only in
//   its hint. "tin" → kaleng@u27 was found the same way at draft stage, which is
//   why `timah` is glossed by description too.
//
// FRONTS REFUSED, NAMED NOT BURIED:
//   `aluminium`  the front is letter-for-letter its English gloss, so a gloss of
//                "aluminium" measures FREEPASS-produce AND FREEPASS-meaning on
//                the engine's own predicate — and while this band is unvoiced the
//                engine cannot reroute it, because the produce reroute needs a
//                `speak` clip. A descriptive gloss DOES clear it (measured), so
//                this is a space cut at 24, not a ban: the metal slots are full
//                at six. It is the first refill if the slot widens.
//   `bauksit` `kuarsa` `timah putih` — probed free, cut for space.
//   `besi`     TAKEN (u46). Iron is already the learner's; this unit teaches
//              what iron becomes (`baja`) and what eats it (`karat`).
//   `batuan`   -an on `batu`(u46) with no new meaning — rock vs rocks. Rule 5.
//   `tanah liat` FIRES-INSIDE `tanah`(u46) and clay is a craft material, so it
//              belongs beside u120's pottery, not here. Not carded either place;
//              named here so the next seat knows it is free.
//
// DERIVATION NOTES (unit1.js §3, strip the affix yourself):
//   `tambang`/`menambang`/`penambang` — THREE cards off one root, which is this
//     band's ceiling. They are the place, the act and the person, which is
//     convention 3's test passed cleanly (`bekerja`/`pekerjaan` precedent).
//     ⚠️ `tambang` is ALSO a homograph: it means a rope. The hint names both.
//   `karat`/`berkarat` — the substance and the process. ⚠️ `karat` is a
//     homograph too: a carat of gold. Hint names it.
//   `galian` — -an off `gali`, and `menggali` (to dig) is taught at u83. Second
//     card off that root; the hint names it.
//   `peleburan` — pe-/-an off `lebur`. `mencair` (to melt) is taught at u76 and
//     is NOT re-taught: peleburan is the industrial process, not the physics.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT115 = {
  id: "id-u115",
  lang: "id",
  title: "Tambang, logam, dan bahan galian",
  order: 115,
  stage: "b2",
  lessons: [
    {
      id: "id-u115l1",
      unit: 115,
      lesson: 1,
      title: "Tambang, penambang, dan terowongan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about a mine as a workplace — the site, the people, the tunnel, the ore being brought up — which is half of Indonesia's export news.",
      items: [
        { id: "id-u115l1-tambang", type: "vocab", front: "tambang", reading: "tambang", meaning: "a mine", example: { jp: "Tambang di Papua itu sudah bekerja lebih dari tiga puluh tahun.", en: "That mine in Papua has been working for more than thirty years." }, accept: ["a mining site", "a pit where ore is dug", "an open-cast mine"], drill: { jp: "Tambang di Papua itu sudah lama bekerja", en: "That mine in Papua has been working a long time" }, hint: "TAM-bang, with the ng hum. ⚠️ A homograph with a completely unrelated sense: tambang is also a thick ROPE, as in tarik tambang, tug of war. One spelling, two words, and context separates them absolutely — nobody digs a rope." },
        { id: "id-u115l1-menambang", type: "vocab", front: "menambang", reading: "menambang", meaning: "to dig ore out of the ground", example: { jp: "Mereka menambang nikel di pulau itu sejak lama.", en: "They have been mining nickel on that island for a long time." }, accept: ["to extract ore as an industry", "to work a seam", "to quarry for metal"], drill: { jp: "Mereka menambang nikel di pulau itu", en: "They mine nickel on that island" }, hint: "muh-nam-BANG — the verb off tambang. Not the same as menggali, to dig, which you met in the building unit: you dig a hole for anything, you menambang only to take something valuable out." },
        { id: "id-u115l1-penambang", type: "vocab", front: "penambang", reading: "penambang", meaning: "a miner", example: { jp: "Penambang itu bekerja di bawah tanah hampir setiap hari.", en: "That miner works underground almost every day." }, accept: ["someone who works underground", "a pit worker", "a person who digs for ore"], drill: { jp: "Penambang itu bekerja di bawah tanah", en: "That miner works underground" }, hint: "puh-nam-BANG. The third card in this course off the root tambang, after the place and the act — pe- makes the person, exactly as it made pekerja from kerja. Penambang liar, illegal miners, is a phrase in the Indonesian news most weeks." },
        { id: "id-u115l1-terowongan", type: "vocab", front: "terowongan", reading: "terowongan", meaning: "a tunnel", example: { jp: "Terowongan itu terlalu sempit untuk dua orang jalan bersama.", en: "That tunnel is too narrow for two people to walk side by side." }, accept: ["an underground passage", "a bored shaft", "a dug passage"], drill: { jp: "Terowongan itu terlalu sempit untuk dua orang", en: "That tunnel is too narrow for two people" }, hint: "tuh-ro-WONG-an. Any bored passage — a mine shaft, a road tunnel, a railway tunnel. Not the same as lorong, a corridor inside a building, which you met in the building unit." },
        { id: "id-u115l1-bijih", type: "vocab", front: "bijih", reading: "bijih", meaning: "ore", example: { jp: "Bijih dari tambang itu dibawa ke pabrik dengan kapal.", en: "Ore from that mine is taken to the factory by ship." }, accept: ["rock that holds metal", "raw metal rock", "unprocessed mineral rock"], drill: { jp: "Bijih dari tambang itu dibawa dengan kapal", en: "Ore from that mine is taken by ship" }, hint: "BEE-jih — note the h, which is what separates it in writing from biji, a seed, that you already know. Different words, and the near-identical spelling is worth one careful look." },
        { id: "id-u115l1-galian", type: "vocab", front: "galian", reading: "galian", meaning: "excavated material", example: { jp: "Galian dari terowongan itu ditaruh di sebelah jalan.", en: "The spoil from that tunnel is put beside the road." }, accept: ["spoil from a dig", "what is dug out", "earth taken from an excavation"], drill: { jp: "Galian dari terowongan itu ditaruh di jalan", en: "The spoil from that tunnel is put on the road" }, hint: "ga-LEE-an — -an on the root of menggali, to dig, which you met in the building unit. Bahan galian, literally dug material, is the official Indonesian term for minerals, and it is how mining law is written." },
      ],
    },
    {
      id: "id-u115l2",
      unit: 115,
      lesson: 2,
      title: "Batu bara, belerang, dan gamping",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the non-metal things dug out of Indonesian ground — coal, sulphur, limestone, gravel — and say what size a piece of rock is.",
      items: [
        { id: "id-u115l2-batubara", type: "vocab", front: "batu bara", reading: "batubara", meaning: "coal", example: { jp: "Kapal besar membawa batu bara dari Kalimantan setiap minggu.", en: "Big ships carry coal from Kalimantan every week." }, accept: ["black fuel rock", "the rock burned in power stations", "mineral coal"], drill: { jp: "Kapal itu membawa batu bara dari Kalimantan", en: "That ship carries coal from Kalimantan" }, hint: "BA-too BA-ra — literally glowing stone, from batu, stone, which you already know. Written as two words. Indonesia is one of the world's biggest exporters of it, and the two-word spelling matters: batubara as one word is a common misspelling." },
        { id: "id-u115l2-belerang", type: "vocab", front: "belerang", reading: "belerang", meaning: "sulphur", example: { jp: "Bau belerang di gunung itu sangat kuat sampai jauh.", en: "The smell of sulphur on that mountain is very strong even far away." }, accept: ["brimstone", "the yellow mineral that smells", "the yellow element from volcanoes"], drill: { jp: "Bau belerang di gunung itu sangat kuat", en: "The smell of sulphur on that mountain is very strong" }, hint: "buh-luh-RANG. Yellow, and in Indonesia it is carried out of the Ijen crater on men's backs in baskets — one of the hardest jobs in the country. Air belerang is a hot sulphur spring." },
        { id: "id-u115l2-gamping", type: "vocab", front: "gamping", reading: "gamping", meaning: "limestone", example: { jp: "Bukit gamping di sebelah selatan itu dipakai untuk membuat semen.", en: "The limestone hills to the south are used to make cement." }, accept: ["chalky building rock", "the rock lime comes from", "soft white sedimentary rock"], drill: { jp: "Bukit gamping itu dipakai untuk membuat semen", en: "Those limestone hills are used to make cement" }, hint: "GAM-ping. Also called batu kapur. It is what semen, the cement you met in the building unit, is burned from — and the gamping hills of southern Java are quarried flat for exactly that." },
        { id: "id-u115l2-kerikil", type: "vocab", front: "kerikil", reading: "kerikil", meaning: "gravel", example: { jp: "Jalan ke desa itu hanya kerikil, bukan jalan yang bagus.", en: "The road to that village is only gravel, not a good road." }, accept: ["small loose stones", "crushed stone", "pebbles on a road"], drill: { jp: "Jalan ke desa itu hanya kerikil saja", en: "The road to that village is only gravel" }, hint: "kuh-ree-KEEL. Loose small stones, and the standard Indonesian metaphor for a minor obstacle: kerikil dalam sepatu, a stone in your shoe, is a small problem that spoils everything." },
        { id: "id-u115l2-bongkahan", type: "vocab", front: "bongkahan", reading: "bongkahan", meaning: "a boulder", example: { jp: "Bongkahan batu itu terlalu berat untuk dibawa dengan tangan.", en: "That lump of rock is too heavy to carry by hand." }, accept: ["a broken-off lump of rock", "a chunk of stone", "a large loose block"], drill: { jp: "Bongkahan batu itu terlalu berat untuk dibawa", en: "That lump of rock is too heavy to carry" }, hint: "bong-KA-han. A single broken-off lump, of any hard thing — rock, ice, gold. The pairing is worth noticing: kerikil is what is too small to pick up one by one, a bongkahan is what is too big to." },
        { id: "id-u115l2-endapan", type: "vocab", front: "endapan", reading: "endapan", meaning: "a sediment layer", example: { jp: "Endapan di dasar sungai itu penuh pasir dan batu kecil.", en: "The sediment at the bottom of that river is full of sand and small stones." }, accept: ["settled deposits", "a deposit left by water", "what has settled to the bottom"], drill: { jp: "Endapan di sungai itu penuh pasir halus", en: "The sediment in that river is full of fine sand" }, hint: "un-DA-pan. What has settled out and stayed. The verb mengendap, to settle out, is taught in the next unit on liquids — this is the layer it leaves. Mining geologists use endapan for an ore body." },
      ],
    },
    {
      id: "id-u115l3",
      unit: 115,
      lesson: 3,
      title: "Tembaga, baja, dan perak",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name the five metals Indonesia actually digs and sells, instead of calling all of them logam.",
      items: [
        { id: "id-u115l3-tembaga", type: "vocab", front: "tembaga", reading: "tembaga", meaning: "copper", example: { jp: "Tambang tembaga di Papua itu salah satu yang paling besar di dunia.", en: "That copper mine in Papua is one of the biggest in the world." }, accept: ["the reddish metal of wires", "the metal of old coins and pans", "red metal used for wiring"], drill: { jp: "Tambang tembaga di Papua itu paling besar", en: "That copper mine in Papua is the biggest" }, hint: "tum-BA-ga. Reddish. The boundary with the tools unit in one sentence: kawat, the wire you learned there, is what you buy; tembaga is what it is drawn from, and this unit owns the metal." },
        { id: "id-u115l3-baja", type: "vocab", front: "baja", reading: "baja", meaning: "steel", example: { jp: "Pintu itu dari baja, jadi sangat berat dan tidak mudah rusak.", en: "That door is made of steel, so it is very heavy and not easily broken." }, accept: ["hardened iron", "iron with carbon added", "the metal of girders"], drill: { jp: "Pintu itu dari baja jadi sangat berat", en: "That door is made of steel so it is very heavy" }, hint: "BA-ja. Not besi, iron, which you already know — baja is iron that has been worked into something harder. Indonesian uses it as an adjective for toughness: mental baja, a steel mind." },
        { id: "id-u115l3-perak", type: "vocab", front: "perak", reading: "perak", meaning: "silver", example: { jp: "Cincin perak itu lebih murah daripada yang dari emas.", en: "That silver ring is cheaper than the gold one." }, accept: ["the white precious metal", "the metal of jewellery", "sterling metal"], drill: { jp: "Cincin perak itu lebih murah dari emas", en: "That silver ring is cheaper than gold" }, hint: "PUH-rahk. Kotagede in Yogyakarta is the silversmithing town, and perak there means the craft as much as the metal. ⚠️ Perak in old slang also meant a coin or small money, which is why the word turns up in prices." },
        { id: "id-u115l3-timah", type: "vocab", front: "timah", reading: "timah", meaning: "the soft low-melting metal used for solder", example: { jp: "Pulau Bangka terkenal karena timah, bukan karena pantai.", en: "Bangka island is famous for its tin, not for its beaches." }, accept: ["a soft silvery metal that melts easily", "the metal cans used to be lined with", "the metal mined on Bangka"], drill: { jp: "Pulau Bangka terkenal karena timah saja", en: "Bangka island is famous only for its tin" }, hint: "TEE-mah. This is TIN. ⚠️ It is not glossed with that word because kaleng, a can, already owns the gloss \"tin\" in this course and two cards under one gloss is a prompt with two right answers. Bangka and Belitung are tin islands and have been for 200 years." },
        { id: "id-u115l3-nikel", type: "vocab", front: "nikel", reading: "nikel", meaning: "a hard silver-white metal used in coins", example: { jp: "Nikel dari Sulawesi sekarang dipakai untuk membuat baterai.", en: "Nickel from Sulawesi is now used to make batteries." }, accept: ["the metal in stainless steel", "a corrosion-resistant metal", "the metal batteries need"], drill: { jp: "Nikel dari Sulawesi dipakai untuk baterai", en: "Nickel from Sulawesi is used for batteries" }, hint: "NEE-kel. This is NICKEL, and the English word is kept out of the gloss on purpose: a front that IS its own English gloss can be answered by typing the prompt back. Indonesia holds the world's largest nickel reserves, which is why this word is in every energy story." },
        { id: "id-u115l3-timbal", type: "vocab", front: "timbal", reading: "timbal", meaning: "the heaviest common soft metal", example: { jp: "Timbal dalam air itu bahaya untuk anak kecil.", en: "Lead in that water is dangerous for small children." }, accept: ["the dull grey metal of old pipes", "a poisonous heavy metal", "the metal once used in petrol"], drill: { jp: "Timbal dalam air itu bahaya untuk anak", en: "Lead in that water is dangerous for children" }, hint: "TIM-bahl. This is LEAD. ⚠️ Not glossed with that word: kabel, a cable, already accepts \"a lead\" and the grader treats \"a lead\" and \"lead\" as one string. Do not confuse timbal with timah, tin — two different metals, two letters apart." },
      ],
    },
    {
      id: "id-u115l4",
      unit: 115,
      lesson: 4,
      title: "Tungku, karat, dan batu keras",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe what happens to metal after it leaves the ground — the furnace, the smelting, the rust that eats it — and name the two hard stones buildings are faced with.",
      items: [
        { id: "id-u115l4-tungku", type: "vocab", front: "tungku", reading: "tungku", meaning: "a furnace", example: { jp: "Tungku itu harus sangat panas supaya logam bisa mencair.", en: "That furnace has to be very hot so the metal can melt." }, accept: ["a kiln", "a smelting hearth", "a fire chamber for melting"], drill: { jp: "Tungku itu harus sangat panas sekali", en: "That furnace has to be very hot" }, hint: "TOONG-koo. Originally the three stones a cooking pot sits on over a fire, and still used that way in village kitchens — then extended to an industrial furnace and a pottery kiln." },
        { id: "id-u115l4-peleburan", type: "vocab", front: "peleburan", reading: "peleburan", meaning: "smelting", example: { jp: "Peleburan bijih nikel itu butuh banyak sekali energi.", en: "Smelting that nickel ore needs a great deal of energy." }, accept: ["melting metal out of ore", "the works where ore becomes metal", "the process of refining ore by heat"], drill: { jp: "Peleburan bijih nikel butuh banyak energi", en: "Smelting nickel ore needs a lot of energy" }, hint: "puh-luh-BOO-ran, from lebur, to be melted down. The Indonesian word for a smelter plant is smelter, borrowed — but the PROCESS is peleburan, and that is the word in the law requiring ore to be smelted before export. Not the same as mencair, the plain physics of melting." },
        { id: "id-u115l4-karat", type: "vocab", front: "karat", reading: "karat", meaning: "rust", example: { jp: "Karat di pintu besi itu sudah tebal karena dekat laut.", en: "The rust on that iron door is already thick because it is near the sea." }, accept: ["the red flaking layer on old iron", "oxide on iron", "what eats iron in wet air"], drill: { jp: "Karat di pintu besi itu sudah tebal", en: "The rust on that iron door is already thick" }, hint: "KA-raht. ⚠️ A homograph: karat is ALSO a carat of gold, as in emas 24 karat. Same spelling, nothing in common. In a country this humid and this coastal, the rust sense is the one you will meet daily." },
        { id: "id-u115l4-berkarat", type: "vocab", front: "berkarat", reading: "berkarat", meaning: "to go rusty", example: { jp: "Pagar di dekat pantai cepat berkarat karena angin laut.", en: "Fences near the beach go rusty quickly because of the sea wind." }, accept: ["to corrode", "to turn red with rust", "to become covered in rust"], drill: { jp: "Pagar di dekat pantai cepat berkarat sekali", en: "Fences near the beach go rusty very quickly" }, hint: "ber-KA-raht — ber- plus karat, the second card off that root. Used figuratively too: ilmu yang berkarat is knowledge that has gone rusty from disuse, and Indonesians say it about their own English." },
        { id: "id-u115l4-marmer", type: "vocab", front: "marmer", reading: "marmer", meaning: "a polished patterned stone", example: { jp: "Lantai marmer itu dingin sekali di kaki dan memang dibuat begitu.", en: "That marble floor is very cold underfoot and is made that way on purpose." }, accept: ["a smooth decorative stone", "stone used for cool floors", "veined stone cut for floors"], drill: { jp: "Lantai marmer itu dingin sekali di kaki", en: "That marble floor is very cold underfoot" }, hint: "MAR-mer. This is MARBLE, from Dutch marmer. The English word is kept out of the gloss so the card cannot be answered by typing the prompt back. Tulungagung in East Java is the marble town." },
        { id: "id-u115l4-granit", type: "vocab", front: "granit", reading: "granit", meaning: "a hard speckled rock", example: { jp: "Batu granit lebih keras daripada marmer, jadi lebih susah dipotong.", en: "Granite is harder than marble, so it is more difficult to cut." }, accept: ["a tough building stone", "speckled igneous rock", "the grey stone with flecks in it"], drill: { jp: "Batu granit lebih keras daripada marmer biasa", en: "Granite is harder than ordinary marble" }, hint: "gra-NEET. This is GRANITE — again kept out of its own gloss on purpose. Indonesian tiling shops distinguish granit from keramik, and granit tiles are the harder and pricier choice." },
      ],
    },
  ],
};
