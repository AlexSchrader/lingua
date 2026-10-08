// ID Unit 118 — Tumbuhan, bunga, dan pepohonan ("Plants, flowers and trees") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u114–u126). Conventions: unit1.js §1–12, unit21.js, unit51.js
// §B1–B12, **block 1's §C1–C12 in unit88.js and §C-B4 in unit89.js** (which
// bind u88–u126 and outrank the D-series), and unit114.js §D1–D11. Read unit114.js's header before editing this.
//
// THE HOLE THIS FILLS. The course taught `pohon` `daun` `bunga` (u19), `akar`
// `rumput` `menanam` `biji` (u46) and the whole farm at u84 — and had no word
// for a single named flower, a petal, a bud, a thorn, sap, moss, a fern, or any
// of the timber trees Indonesia is actually built and traded on. A learner could
// say "tree" and could not say "teak".
//
// THE BOUNDARY WITH u84, AND IT DECIDES THE HARDEST CALL IN THIS UNIT:
//   u84 (B1) owns THE FARM AND THE CROP — `sawah` `padi` `panen` `pupuk`
//   `benih` `tunas` `batang` `cabang` `subur` `gersang` `layu` `memetik`.
//   u118 owns THE WILD AND ORNAMENTAL plant.
//   ⚠️ `batang` and `cabang` ARE u84's, so this unit uses `dahan` and `ranting`.
//   That is not a workaround, it is the right pair: cabang is a branch off the
//   trunk, dahan is a heavy limb, ranting is a twig. Indonesian has all three.
//
// ⚠️ `bunga` IS TAKEN (u19) AND THE TAUGHT SENSE IS **INTEREST ON MONEY**.
// So bare `bunga` is blocked by rule 12 and this unit reaches the flower through
// its parts and its verbs — `kelopak` (a petal), `kuncup` (a bud), `berbunga`
// (to be in flower), `mekar` (to open out) — plus four named flowers. Nothing is
// lost: the learner already has the noun, from a unit that taught it as a bank
// charge, and the hints say so by word rather than by unit number (§10).
//
// TWO GLOSS COLLISIONS MEASURED (gloss-taken.mjs id):
//   "spices"  → bumbu@u34    so `rempah-rempah` is "the dried plant flavourings
//                            these islands were traded for" — and that is a more
//                            honest gloss anyway, because bumbu is the paste you
//                            cook with and rempah-rempah is the trade commodity.
//   "a bough" → cabang@u84   so `dahan` is "a thick tree limb". The word for a
//                            branch was genuinely already spent.
//
// FRONTS REFUSED, NAMED NOT BURIED:
//   `semai`   a bare root, and sowing seedlings is u84's farm work, not this
//             unit's wild plant. Probed free; left free, and named here so the
//             next seat does not re-propose it as a gap.
//   `rindang`/`rimbun`  a synonym pair for leafy shade. `rindang` ships;
//             `rimbun` is named in its hint (§D3).
//   `teratai` `kamboja` ship; `bugenvil` `perdu` `belukar` `pupus` `gugur`
//             `tunggul` `bonggol` `umbi` `rimpang` `kunyit` `jahe` `serai`
//             `pandan` all probed free and were cut at 24. The spice PLANTS
//             (kunyit, jahe, serai, pandan) are the obvious next lesson if this
//             slot widens, and no other unit owns them.
//   `nangka`  probed free but it is a FRUIT, which is u86's and u19's territory.
//             Left alone deliberately.
//
// DERIVATION NOTES (unit1.js §3):
//   `berbunga` = ber- + `bunga` (u19). candidate-check flagged it and it is a
//     real derivation — but of the INTEREST sense's homograph twin, so the
//     learner meeting "to be in flower" is meeting a new word, not a form.
//   `berbuah`  = ber- + `buah` (u19). Same shape, same reasoning.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT118 = {
  id: "id-u118",
  lang: "id",
  title: "Tumbuhan, bunga, dan pepohonan",
  order: 118,
  stage: "b2",
  lessons: [
    {
      id: "id-u118l1",
      unit: 118,
      lesson: 1,
      title: "Mawar, melati, dan anggrek",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the four flowers that actually matter in Indonesia — at a wedding, on a grave, in a pond, on a tree — and name the petal they are made of.",
      items: [
        { id: "id-u118l1-mawar", type: "vocab", front: "mawar", reading: "mawar", meaning: "a rose", example: { jp: "Dia membawa mawar merah untuk ibu saya.", en: "He brought red roses for my mother." }, accept: ["the thorned flower given as a gift", "a red garden flower with thorns", "a cultivated thorny flower"], drill: { jp: "Dia membawa mawar merah untuk ibu saya", en: "He brought red roses for my mother" }, hint: "MA-war. From Persian, like a surprising amount of Indonesian flower and ship vocabulary. Air mawar, rose water, is used in cooking and in washing a body before burial." },
        { id: "id-u118l1-melati", type: "vocab", front: "melati", reading: "melati", meaning: "jasmine", example: { jp: "Melati putih itu harum sekali pada malam hari.", en: "That white jasmine is very fragrant at night." }, accept: ["the small white scented flower", "the flower used in Indonesian weddings", "a tiny strongly scented white bloom"], drill: { jp: "Melati putih itu harum sekali pada malam", en: "That white jasmine is very fragrant at night" }, hint: "muh-LA-tee. One of Indonesia's three national flowers and the one you will actually meet: strung into garlands for a bride, laid at a grave, and floated in a finger bowl. Tiny, white, and astonishingly strong after dark." },
        { id: "id-u118l1-anggrek", type: "vocab", front: "anggrek", reading: "anggrek", meaning: "an orchid", example: { jp: "Anggrek itu tumbuh di pohon, bukan di tanah.", en: "That orchid grows on a tree, not in the ground." }, accept: ["the flower that grows on a tree trunk", "a showy tropical flower", "a flower that lives on bark"], drill: { jp: "Anggrek itu tumbuh di pohon bukan di tanah", en: "That orchid grows on a tree not in the ground" }, hint: "ANG-grek, with ngg — the hum plus a hard g. Indonesia has more wild orchid species than almost anywhere, and the example states the fact that surprises people: most of them are not planted in soil at all." },
        { id: "id-u118l1-teratai", type: "vocab", front: "teratai", reading: "teratai", meaning: "a lotus", example: { jp: "Teratai di air itu mekar waktu pagi.", en: "The lotus in that water opens in the morning." }, accept: ["the flower that floats on a pond", "a water flower on a broad leaf", "a flower that rises out of water"], drill: { jp: "Teratai di air itu mekar waktu pagi", en: "The lotus in that water opens in the morning" }, hint: "tuh-ra-TIE, the last part rhyming with English tie. Sacred in both Hindu and Buddhist Indonesia, which is why it is carved on Borobudur and Prambanan. Grows out of mud and comes up clean, which is the whole point of the symbol." },
        { id: "id-u118l1-kamboja", type: "vocab", front: "kamboja", reading: "kamboja", meaning: "frangipani", example: { jp: "Pohon kamboja banyak di pura dan di jalan.", en: "Frangipani trees are common at temples and along the road." }, accept: ["the white tree flower planted at graves", "a scented tree flower with five petals", "the temple flower of Bali"], drill: { jp: "Pohon kamboja banyak di pura dan jalan", en: "Frangipani trees are common at temples and roads" }, hint: "kam-BO-ja — the same word as the country Cambodia, which is where Indonesian thinks it came from. In Java it is the graveyard tree and carries that association heavily; in Bali it is a temple offering and carries none of it. The mourning unit later in this band teaches the words for a grave." },
        { id: "id-u118l1-kelopak", type: "vocab", front: "kelopak", reading: "kelopak", meaning: "a petal", example: { jp: "Kelopak mawar itu jatuh ke meja waktu malam.", en: "The rose petals fell onto the table during the night." }, accept: ["one leaf of a flower", "one of the coloured parts of a blossom", "a single piece of a flower head"], drill: { jp: "Kelopak mawar itu jatuh ke meja malam", en: "The rose petals fell onto the table at night" }, hint: "kuh-LO-pahk. Also an eyelid — kelopak mata — and the connection is visible once you see it: both are a thin covering that opens. The flower noun bunga is taught in this course meaning INTEREST on money, so the parts are how you talk about the flower itself." },
      ],
    },
    {
      id: "id-u118l2",
      unit: 118,
      lesson: 2,
      title: "Kuncup, berbunga, dan mekar",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe a plant through its year — in bud, in flower, fully open, bearing fruit — and name the thorn and the sap that come with it.",
      items: [
        { id: "id-u118l2-kuncup", type: "vocab", front: "kuncup", reading: "kuncup", meaning: "a bud", example: { jp: "Masih banyak kuncup di pohon itu, belum ada yang terbuka.", en: "There are still many buds on that tree, none has opened yet." }, accept: ["a flower not yet open", "a closed blossom", "a flower still shut tight"], drill: { jp: "Masih banyak kuncup di pohon itu sekarang", en: "There are still many buds on that tree now" }, hint: "KOON-choop — c is CH. The closed flower. Also a verb for closing up: hatinya kuncup, his heart shut, is to lose nerve. Not the same as tunas, a shoot, which you met in the farming unit." },
        { id: "id-u118l2-berbunga", type: "vocab", front: "berbunga", reading: "berbunga", meaning: "to be in flower", example: { jp: "Pohon itu berbunga dua kali setiap tahun.", en: "That tree flowers twice a year." }, accept: ["to carry blossom", "to have flowers out", "to be covered in blossom"], drill: { jp: "Pohon itu berbunga dua kali setiap tahun", en: "That tree flowers twice every year" }, hint: "ber-BOO-nga — ber- plus bunga. ⚠️ Worth being clear about: bunga is taught in this course as INTEREST on money, which is a real second sense of the word, not a mistake. Berbunga is the plant sense — and it means to bear interest too, which is why a savings account berbunga." },
        { id: "id-u118l2-mekar", type: "vocab", front: "mekar", reading: "mekar", meaning: "to open out", example: { jp: "Teratai itu mekar penuh waktu matahari sudah tinggi.", en: "That lotus opens fully once the sun is already high." }, accept: ["to come into full bloom", "of a bud that opens", "to unfold and spread open"], drill: { jp: "Teratai itu mekar penuh waktu matahari tinggi", en: "That lotus opens fully when the sun is high" }, hint: "MUH-kar. The moment of opening, not the state of being in flower — berbunga is the season, mekar is the morning. Used of a person too: wajahnya mekar, her face opened up, is to light up." },
        { id: "id-u118l2-duri", type: "vocab", front: "duri", reading: "duri", meaning: "a thorn", example: { jp: "Hati-hati, ada duri di bawah daun itu.", en: "Be careful, there is a thorn under that leaf." }, accept: ["a sharp spine on a plant", "a prickle", "a woody spike on a stem"], drill: { jp: "Hati-hati ada duri di bawah daun itu", en: "Be careful there is a thorn under that leaf" }, hint: "DOO-ree. On a rose, on a cactus — and also a fish bone, which is the sense you are more likely to need at dinner: duri ikan. Durian, the fruit, is literally the thorny one." },
        { id: "id-u118l2-getah", type: "vocab", front: "getah", reading: "getah", meaning: "tree sap", example: { jp: "Getah dari pohon itu susah hilang dari tangan.", en: "Sap from that tree is hard to get off your hands." }, accept: ["the sticky fluid inside a plant", "latex from a tree", "the sticky juice of a cut plant"], drill: { jp: "Getah dari pohon itu susah hilang dari tangan", en: "Sap from that tree is hard to get off your hands" }, hint: "GUH-tah. Sticky plant fluid, and economically a big word: getah karet is rubber latex, and the rubber plantations of Sumatra ran on it. Kena getah, to get sap on you, means to be caught up in someone else's trouble." },
        { id: "id-u118l2-berbuah", type: "vocab", front: "berbuah", reading: "berbuah", meaning: "to bear fruit", example: { jp: "Pohon kelapa itu berbuah terus selama satu tahun.", en: "That coconut tree bears fruit right through the year." }, accept: ["to come into fruit", "to produce fruit on the plant", "to be carrying fruit"], drill: { jp: "Pohon kelapa itu berbuah terus selama satu tahun", en: "That coconut tree bears fruit right through the year" }, hint: "ber-BOO-ah — ber- plus buah, fruit, which you already know. Used figuratively exactly as in English: usahanya berbuah, his effort bore fruit, is the standard phrase for work paying off." },
      ],
    },
    {
      id: "id-u118l3",
      unit: 118,
      lesson: 3,
      title: "Lumut, pakis, dan bakau",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the plants that grow where nothing was planted — moss on wet stone, ferns in shade, mangrove in salt mud — and describe a vine and a shady tree.",
      items: [
        { id: "id-u118l3-lumut", type: "vocab", front: "lumut", reading: "lumut", meaning: "moss", example: { jp: "Batu di sungai itu penuh lumut dan sangat licin.", en: "The stones in that river are covered in moss and very slippery." }, accept: ["the green film on wet stone", "a soft green growth on damp surfaces", "green growth on something always wet"], drill: { jp: "Batu di sungai itu penuh lumut dan licin", en: "The stones in that river are mossy and slippery" }, hint: "LOO-moot. The green on anything permanently wet — river stones, a bathroom wall, a boat hull. Hijau lumut is a colour name, moss green, and you will see it on paint charts." },
        { id: "id-u118l3-pakis", type: "vocab", front: "pakis", reading: "pakis", meaning: "a fern", example: { jp: "Pakis tumbuh baik di tempat yang gelap dan basah.", en: "Ferns grow well in a dark, damp place." }, accept: ["a plant with feathery fronds", "a shade plant with divided leaves", "a soft-leaved plant of damp shade"], drill: { jp: "Pakis tumbuh baik di tempat gelap dan basah", en: "Ferns grow well in a dark damp place" }, hint: "PA-kees. Also eaten: pucuk pakis, fern tips, is a vegetable in Sumatra and Kalimantan, stir-fried. Which makes this both a botany word and a menu word." },
        { id: "id-u118l3-bakau", type: "vocab", front: "bakau", reading: "bakau", meaning: "a mangrove", example: { jp: "Bakau di pesisir itu menahan air laut waktu air tinggi.", en: "The mangroves on that coast hold back the sea when the water is high." }, accept: ["the tree that grows in salt mud", "the coastal tree with roots in water", "a tree that stands in tidal water"], drill: { jp: "Bakau di pesisir itu menahan air laut", en: "The mangroves on that coast hold back the sea" }, hint: "BA-kao, the last part like English cow. Hutan bakau, mangrove forest, is the subject of most Indonesian coastal conservation work — and the reason is the example: cut the bakau and the pesisir you met in the sea unit goes with it." },
        { id: "id-u118l3-merambat", type: "vocab", front: "merambat", reading: "merambat", meaning: "to climb as a vine", example: { jp: "Tanaman itu merambat di dinding sampai ke atas.", en: "That plant climbs up the wall all the way to the top." }, accept: ["to creep up a wall", "to spread by trailing", "to grow along a surface"], drill: { jp: "Tanaman itu merambat di dinding sampai atas", en: "That plant climbs the wall up to the top" }, hint: "muh-ram-BAHT. Of a vine, and of anything that spreads slowly along: api merambat is fire creeping, and a rumour merambat too. The sense is always sideways and gradual." },
        { id: "id-u118l3-rindang", type: "vocab", front: "rindang", reading: "rindang", meaning: "casting deep shade", example: { jp: "Pohon rindang itu tempat orang duduk setiap siang.", en: "That shady tree is where people sit every midday." }, accept: ["with thick overhanging leaves", "shady with foliage", "leafy enough to sit under"], drill: { jp: "Pohon rindang itu tempat orang duduk siang", en: "That shady tree is where people sit at midday" }, hint: "REEN-dang. Leafy enough to shelter under, which in this climate is the whole value of a tree. ⚠️ Indonesian also has rimbun, which means almost the same thing and is NOT taught: two cards under one gloss would be a prompt with two right answers. Rimbun leans towards dense, rindang towards shade." },
        { id: "id-u118l3-pucuk", type: "vocab", front: "pucuk", reading: "pucuk", meaning: "a leafy shoot tip", example: { jp: "Pucuk daun yang masih muda itu bisa dimakan.", en: "Those young leaf tips can be eaten." }, accept: ["the new growth at the end of a stem", "the tender tip of a plant", "the youngest leaves at the top"], drill: { jp: "Pucuk daun yang masih muda bisa dimakan", en: "Those young leaf tips can be eaten" }, hint: "POO-chook — c is CH. The soft new tip, and a food word as much as a plant one: pucuk pakis, pucuk ubi. Also a counter for letters — sepucuk surat, one letter — and the top of anything: pucuk pimpinan, the top of the leadership." },
      ],
    },
    {
      id: "id-u118l4",
      unit: 118,
      lesson: 4,
      title: "Jati, mahoni, dan cendana",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the three timbers Indonesian furniture and trade are built on, say which part of the tree is which, and name what the Spice Islands were actually traded for.",
      items: [
        { id: "id-u118l4-jati", type: "vocab", front: "jati", reading: "jati", meaning: "teak", example: { jp: "Meja dari kayu jati itu mahal karena sangat kuat.", en: "That teak table is expensive because the wood is very strong." }, accept: ["the hard brown timber tree", "the wood Javanese furniture is made of", "a dense brown hardwood"], drill: { jp: "Meja dari kayu jati itu mahal dan kuat", en: "That teak table is expensive and strong" }, hint: "JA-tee. Kayu jati is the wood every piece of good Javanese furniture is made of, and Jepara is the carving town. ⚠️ Jati is also an adjective meaning true or genuine, as in jati diri, one's real identity — same spelling, different word." },
        { id: "id-u118l4-mahoni", type: "vocab", front: "mahoni", reading: "mahoni", meaning: "mahogany", example: { jp: "Pohon mahoni banyak di jalan besar di kota.", en: "Mahogany trees are common on the big roads in town." }, accept: ["a dark red timber tree", "the reddish hardwood of furniture", "a red-brown timber used for furniture"], drill: { jp: "Pohon mahoni banyak di jalan besar kota", en: "Mahogany trees are common on the city's big roads" }, hint: "ma-HO-nee. Cheaper and softer than jati, which is why it is the street tree of choice in Java and the wood of mid-price furniture. Brought from the Americas by the Dutch." },
        { id: "id-u118l4-cendana", type: "vocab", front: "cendana", reading: "cendana", meaning: "sandalwood", example: { jp: "Cendana dari pulau Sumba harum sekali waktu dibakar.", en: "Sandalwood from Sumba island is very fragrant when burned." }, accept: ["the scented timber of Sumba", "the fragrant wood burned as incense", "a sweet-smelling pale hardwood"], drill: { jp: "Cendana dari pulau Sumba harum waktu dibakar", en: "Sandalwood from Sumba is fragrant when burned" }, hint: "chen-DA-na — c is CH. Sumba and Timor were called the sandalwood islands and were traded for this one wood for centuries. Burned as incense, carved into beads, and now scarce enough that cutting it is controlled." },
        { id: "id-u118l4-rempahrempah", type: "vocab", front: "rempah-rempah", reading: "rempahrempah", meaning: "the dried plant flavourings these islands were traded for", example: { jp: "Orang Eropa datang ke pulau ini karena rempah-rempah.", en: "Europeans came to these islands because of the spices." }, accept: ["cloves nutmeg and pepper together", "the aromatic dried plants of the spice trade", "the trade spices of the archipelago"], drill: { jp: "Orang Eropa datang ke pulau ini karena rempah-rempah", en: "Europeans came to these islands because of the spices" }, hint: "REM-pah REM-pah — a doubled word that is NOT a plural; the doubling is the word, like hati-hati. ⚠️ Not glossed \"spices\": bumbu, which you know, already owns that gloss — and the two are genuinely different. Bumbu is the paste you cook with; rempah-rempah is the commodity Maluku was invaded for." },
        { id: "id-u118l4-dahan", type: "vocab", front: "dahan", reading: "dahan", meaning: "a thick tree limb", example: { jp: "Anak kecil duduk di dahan pohon besar itu.", en: "A small child sits on a limb of that big tree." }, accept: ["the heavy branch of a big tree", "a limb strong enough to sit on", "a major arm of a tree"], drill: { jp: "Anak kecil duduk di dahan pohon besar itu", en: "A small child sits on a limb of that big tree" }, hint: "DA-han. ⚠️ Not glossed \"a bough\": cabang, which you met in the farming unit, already owns that gloss. Indonesian has three sizes and keeps them apart — cabang comes off the trunk, dahan is the heavy limb, ranting is the twig." },
        { id: "id-u118l4-ranting", type: "vocab", front: "ranting", reading: "ranting", meaning: "a twig", example: { jp: "Dia memakai ranting kering untuk membuat api kecil.", en: "He uses dry twigs to make a small fire." }, accept: ["a thin woody shoot", "the smallest wooden part of a tree", "a slender dry stick off a tree"], drill: { jp: "Dia memakai ranting kering untuk membuat api", en: "He uses dry twigs to make a fire" }, hint: "RAN-ting. The smallest of the three, and the one you pick up off the ground. Also the word for a branch office — kantor ranting — which is the same metaphor English uses with branch, arrived at independently." },
      ],
    },
  ],
};
