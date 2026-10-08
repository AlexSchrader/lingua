// ID Unit 120 — Kerajinan dan tenun ("Craft and weaving") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u114–u126). Conventions: unit1.js §1–12, unit21.js, unit51.js
// §B1–B12, and unit114.js §C1–C10. Read unit114.js's header before editing this.
//
// THE HOLE THIS FILLS. `batik` and `menjahit` (u87), `kain` (u82), `serat`
// (u67) and `pola` (u58) were the whole of making things by hand in a country
// whose export identity IS making things by hand. No word for weaving, for a
// loom cloth, for carving, for pottery, for an artisan, or for the craft trades
// Jepara, Kotagede, Kasongan and Palembang live on.
//
// THE BOUNDARY WITH u87, AND IT COST THIS UNIT ITS MOST OBVIOUS VERB:
//   u87 (B1) owns THE GARMENT AND GROOMING — `batik` `kemeja` `menjahit`
//   `penjahit` `sarung` `kancing` `lengan` `saku`. u120 owns THE CRAFT ITSELF.
//   ⚠️ `menjahit` (to sew) IS u87's, so this unit takes only `jahitan`, the
//   seam — the noun. That is the right split anyway: sewing a shirt is clothing,
//   and the stitched join is an object a craftsperson is judged on.
//
// §C4 APPLIED HARD, AND IT CUT FIVE FRONTS. A bare root plus its me- verb is
// one word twice unless the root is itself a noun with its own job. The crew
// lead's candidate list offered both halves of five pairs; one card ships from
// each:
//   `tenun`+`menenun`  → `menenun` ships (the act). `tenunan` ships separately
//                        as the CLOTH, which is a thing, not the act.
//   `sulam`+`menyulam` → `menyulam` ships; `sulam` is only the stem.
//   `rajut`+`merajut`  → `merajut` ships.
//   `tempa`+`menempa`  → `menempa` ships.
//   `pahat`+`memahat`  → BOTH ship, and this is the exception that proves the
//                        rule: `pahat` is a CHISEL, a tool you can hold, which
//                        is the `jalan`/`berjalan` shape. Not the verb's stem.
//   Same test passes `anyaman`/`menganyam` and `ukiran`/`mengukir`: the noun in
//   each is the finished object, not the action.
//
// ⚠️ `pengrajin` AND `kerajinan` ARE BOTH DERIVED FROM `rajin` (u20, diligent),
// and candidate-check flags the first one for it. Two cards off one taught root,
// which is inside the ceiling — and the meanings have travelled a long way from
// "hardworking". Both hints name the root, because a learner who spots the
// connection unaided will trust it, and it is a true one.
//
// GLOSSES: all 24 probed with gloss-taken.mjs before any card was written, and
// for once nothing collided — the craft vocabulary of this corpus was genuinely
// empty. The near-synonym risk was internal instead, and three pottery words
// needed separating by hand: `gerabah` is rough unglazed earthenware,
// `tembikar` is the glazed vessel, `keramik` is the hard glazed floor tile.
// Indonesian tile shops distinguish all three and so does this unit.
//
// FRONTS REFUSED, NAMED NOT BURIED:
//   bare `tenun` `sulam` `rajut` `tempa`  — §C4, above.
//   `renda` (lace)  probed free, cut at 24. It belongs with textiles and is the
//                   first refill for lesson 2.
//   `patung`  ⚠️ WAS CARDED HERE AND IS NOW DROPPED. Block 1 holds it at u96
//             (Seni rupa dan tilikan kritis) and the lower unit wins. Found at
//             merge by `dupes.mjs id`, not by any pre-authoring probe — a
//             sibling's branch is invisible until it is merged, which is the
//             whole reason step 4 exists. `cetakan` (a mould) took the slot and
//             `kerajinan` moved up a lesson to keep 4x6.
//   `sarung`  TAKEN (u87). `lukisan` TAKEN (u35). `pola` TAKEN (u58), which is
//             why `motif` and `corak` carry the pattern work here.
//   (`cetakan` was flagged here as unprobed in the first draft of this header.
//             It has since been probed, is free, and IS carded — see `patung`.)
//
// ⚠️ THREE WORDS I ASSUMED TAUGHT AND ARE NOT: `tradisional`, `pengunjung`
// (a visitor) and `kursus` (a course). All three were in draft examples and all
// three are out. `tradisional` in particular is the word a craft unit reaches
// for first, and the course has never taught it.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT120 = {
  id: "id-u120",
  lang: "id",
  title: "Kerajinan dan tenun",
  order: 120,
  stage: "b2",
  lessons: [
    {
      id: "id-u120l1",
      unit: 120,
      lesson: 1,
      title: "Menenun, songket, dan corak",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about woven cloth as a made object — the weaving, the finished cloth, the gold-thread formal kind, and the pattern and colouring on it.",
      items: [
        { id: "id-u120l1-menenun", type: "vocab", front: "menenun", reading: "menenun", meaning: "to weave", example: { jp: "Perempuan di desa itu menenun kain sendiri di rumah.", en: "The women in that village weave cloth themselves at home." }, accept: ["to make cloth on a loom", "to work thread into fabric", "to produce cloth by interlacing thread"], drill: { jp: "Perempuan di desa itu menenun kain sendiri", en: "The women in that village weave cloth themselves" }, hint: "muh-nuh-NOON. On a loom, with the kain and benang you already know. The bare root tenun is NOT taught as its own card — it is only this verb's stem, and carding both would teach one word twice." },
        { id: "id-u120l1-tenunan", type: "vocab", front: "tenunan", reading: "tenunan", meaning: "woven cloth", example: { jp: "Tenunan dari pulau itu mahal karena dibuat dengan tangan.", en: "Cloth woven on that island is expensive because it is made by hand." }, accept: ["hand-woven fabric", "cloth made on a loom", "the product of weaving"], drill: { jp: "Tenunan dari pulau itu mahal dan bagus", en: "Cloth woven on that island is expensive and good" }, hint: "tuh-NOO-nan. The finished THING, not the act — which is why this one gets a card and bare tenun does not. Tenun ikat is the tie-dyed-thread weaving of Flores, Sumba and Timor, and it is what tourists mean by Indonesian textiles." },
        { id: "id-u120l1-songket", type: "vocab", front: "songket", reading: "songket", meaning: "a gold-threaded brocade", example: { jp: "Songket itu dipakai hanya untuk hari besar di keluarga.", en: "That songket is worn only for important family occasions." }, accept: ["the gold-woven cloth of Sumatra", "a formal woven cloth with metal thread", "brocade woven with gold thread"], drill: { jp: "Songket itu dipakai hanya untuk hari besar", en: "That songket is worn only for important occasions" }, hint: "SONG-ket. Palembang and Minangkabau weaving, with real or imitation gold thread laid into the cloth. The formal counterpart of batik: batik is daily and ceremonial, songket is ceremonial only, and heavy." },
        { id: "id-u120l1-motif", type: "vocab", front: "motif", reading: "motif", meaning: "a repeated decorative figure", example: { jp: "Motif di kain itu sama sampai bawah.", en: "The figure on that cloth is the same down to the bottom." }, accept: ["a design element that repeats", "a figure worked into a surface", "a recurring decorative shape"], drill: { jp: "Motif di kain itu sama sampai bawah", en: "The figure on that cloth is the same down to the bottom" }, hint: "mo-TEEF. The English word MOTIF, kept out of the gloss on purpose — a card whose answer is written in its own prompt teaches nothing. ⚠️ Indonesian also uses motif for a motive, as in motif pembunuhan, so it carries both English senses." },
        { id: "id-u120l1-corak", type: "vocab", front: "corak", reading: "corak", meaning: "a pattern of colour", example: { jp: "Corak kain di daerah itu lebih gelap daripada di kota.", en: "The colouring of cloth in that area is darker than in the city." }, accept: ["the colouring scheme of a cloth", "the way colours are laid out", "a colour pattern on a surface"], drill: { jp: "Corak kain di daerah itu lebih gelap", en: "The colouring of cloth in that area is darker" }, hint: "CHO-rahk — c is CH. Against motif: a motif is one repeated figure, a corak is the overall look and colour scheme. Also used of a political or religious character: corak pemerintahan, the character of a government." },
        { id: "id-u120l1-bordir", type: "vocab", front: "bordir", reading: "bordir", meaning: "embroidery on cloth", example: { jp: "Bordir di baju itu dibuat dengan mesin, bukan dengan tangan.", en: "The embroidery on that shirt was done by machine, not by hand." }, accept: ["a raised thread design on fabric", "needlework laid onto cloth", "stitched decoration on a garment"], drill: { jp: "Bordir di baju itu dibuat dengan mesin", en: "The embroidery on that shirt was done by machine" }, hint: "BOR-deer, from Dutch borduren. The machine-made kind, as a product you buy — Tasikmalaya is the bordir town. The hand-worked verb is menyulam, which you meet in the next lesson, and Indonesians keep the two apart commercially." },
      ],
    },
    {
      id: "id-u120l2",
      unit: 120,
      lesson: 2,
      title: "Menganyam, merajut, dan menyulam",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name three hand crafts the course had no verbs for — plaiting, knitting, embroidering — and the rattan and the seam they produce.",
      items: [
        { id: "id-u120l2-menganyam", type: "vocab", front: "menganyam", reading: "menganyam", meaning: "to plait", example: { jp: "Dia menganyam daun kering jadi tempat untuk buah.", en: "She plaits dry leaves into a container for fruit." }, accept: ["to weave strips together", "to interlace by hand", "to braid flat strips into an object"], drill: { jp: "Dia menganyam daun kering jadi tempat buah", en: "She plaits dry leaves into a fruit container" }, hint: "muh-nga-NYAM — ny is one sound. Flat strips crossed over each other, by hand, with no loom — pandan leaf, bamboo, rattan. Different craft from menenun, which needs thread and a frame." },
        { id: "id-u120l2-anyaman", type: "vocab", front: "anyaman", reading: "anyaman", meaning: "plaited matting", example: { jp: "Anyaman bambu itu dipakai untuk dinding rumah di desa.", en: "That plaited bamboo is used for house walls in the village." }, accept: ["a woven mat of strips", "something made by plaiting", "a plaited panel or basket"], drill: { jp: "Anyaman bambu itu dipakai untuk dinding rumah", en: "That plaited bamboo is used for house walls" }, hint: "a-NYA-man. The finished object — a mat, a basket, a wall panel. Gedek, plaited bamboo wall, is anyaman doing structural work, and it is still how a great many Indonesian houses are built." },
        { id: "id-u120l2-rotan", type: "vocab", front: "rotan", reading: "rotan", meaning: "rattan", example: { jp: "Kursi dari rotan itu lebih ringan daripada kursi kayu.", en: "That rattan chair is lighter than a wooden chair." }, accept: ["the climbing palm used for furniture", "the cane furniture is made of", "a tough flexible palm stem"], drill: { jp: "Kursi dari rotan itu lebih ringan daripada kayu", en: "That rattan chair is lighter than wood" }, hint: "RO-tahn — and the English word rattan came from this one, via Malay. A climbing palm that grows wild in Kalimantan forest, cut, steamed and bent. Indonesia supplies most of the world's supply of it." },
        { id: "id-u120l2-merajut", type: "vocab", front: "merajut", reading: "merajut", meaning: "to knit", example: { jp: "Ibu saya merajut waktu malam kalau tidak sibuk.", en: "My mother knits in the evening if she is not busy." }, accept: ["to work wool with needles", "to make fabric from loops of yarn", "to loop yarn into cloth with needles"], drill: { jp: "Ibu saya merajut waktu malam kalau tidak sibuk", en: "My mother knits in the evening if she is not busy" }, hint: "muh-ra-JOOT. With needles and loops, not a loom. Used figuratively and rather beautifully: merajut kembali, to knit back together, is what Indonesian says about repairing a relationship or a divided country." },
        { id: "id-u120l2-menyulam", type: "vocab", front: "menyulam", reading: "menyulam", meaning: "to embroider", example: { jp: "Dia menyulam bunga kecil di sudut kain itu.", en: "She embroiders small flowers in the corner of that cloth." }, accept: ["to sew a raised design", "to work a picture in thread", "to stitch a pattern onto fabric"], drill: { jp: "Dia menyulam bunga kecil di sudut kain itu", en: "She embroiders small flowers in the corner of that cloth" }, hint: "muh-nyoo-LAHM — ny is one sound. The hand-worked craft, against bordir in the previous lesson, which is the machine product. Also means to patch or fill a gap: menyulam tanaman yang mati, replacing plants that died." },
        { id: "id-u120l2-jahitan", type: "vocab", front: "jahitan", reading: "jahitan", meaning: "a seam", example: { jp: "Jahitan di baju murah itu cepat rusak.", en: "The stitching on that cheap shirt comes apart quickly." }, accept: ["a line of stitching", "the sewn join in a garment", "sewn work on cloth"], drill: { jp: "Jahitan di baju murah itu cepat rusak", en: "The stitching on that cheap shirt comes apart quickly" }, hint: "ja-HEE-tan. The noun only. ⚠️ The VERB menjahit, to sew, and penjahit, a tailor, are both taught in the clothing unit and are NOT re-taught here — a craft unit owns the object a maker is judged on, and the clothing unit owns the trade. Jahitan is also surgical stitches: dapat lima jahitan, got five stitches." },
      ],
    },
    {
      id: "id-u120l3",
      unit: 120,
      lesson: 3,
      title: "Mengukir, memahat, dan patung",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe carved work — the act, the carved panel, the chisel it was made with, and the figure it becomes — which is Jepara's whole economy.",
      items: [
        { id: "id-u120l3-mengukir", type: "vocab", front: "mengukir", reading: "mengukir", meaning: "to carve", example: { jp: "Orang Jepara mengukir pintu dan meja dari kayu jati.", en: "The people of Jepara carve doors and tables from teak." }, accept: ["to cut a design into wood", "to work a relief into a surface", "to cut a pattern into wood or stone"], drill: { jp: "Orang Jepara mengukir pintu dari kayu jati", en: "The people of Jepara carve doors from teak" }, hint: "muh-NGOO-keer. Cutting a design INTO a surface, not shaping a figure out of it. Mengukir sejarah, to carve history, is the standard phrase for achieving something lasting — and it is used constantly in speeches." },
        { id: "id-u120l3-ukiran", type: "vocab", front: "ukiran", reading: "ukiran", meaning: "a carving", example: { jp: "Ukiran di dinding pura itu sudah sangat lama.", en: "The carving on that temple wall is already very old." }, accept: ["a carved panel", "a worked relief in wood or stone", "a cut design on a surface"], drill: { jp: "Ukiran di dinding pura itu sudah sangat lama", en: "The carving on that temple wall is already very old" }, hint: "oo-KEE-ran. The carved surface itself. Ukiran Jepara is a recognised style with its own motifs, and a Jepara door is sold by its ukiran rather than by its wood." },
        { id: "id-u120l3-pahat", type: "vocab", front: "pahat", reading: "pahat", meaning: "a hand blade struck with a hammer", example: { jp: "Pahat kecil itu untuk bagian yang paling halus.", en: "That small chisel is for the finest parts." }, accept: ["the tool a carver strikes", "a carver's cutting tool", "the sharp tool a hammer drives"], drill: { jp: "Pahat kecil itu untuk bagian yang paling halus", en: "That small chisel is for the finest parts" }, hint: "PA-haht. ⚠️ This is the ONE place this unit teaches a bare root alongside its me- verb, and it is deliberate: a chisel is a tool you can hold, not an action — the same reasoning that lets jalan, a street, live beside berjalan, to walk. The tools unit took palu and gergaji and left this one." },
        { id: "id-u120l3-memahat", type: "vocab", front: "memahat", reading: "memahat", meaning: "to chisel", example: { jp: "Dia memahat batu itu selama beberapa bulan.", en: "He chiselled that stone for several months." }, accept: ["to shape stone or wood with a blade", "to cut away with a chisel", "to work material away with a struck blade"], drill: { jp: "Dia memahat batu itu selama beberapa bulan", en: "He chiselled that stone for several months" }, hint: "muh-MA-haht. Striking a pahat to take material away — which is how a patung is made, against mengukir, which cuts a design into a surface that stays flat. Indonesian keeps the two verbs apart and a carver will correct you." },
        { id: "id-u120l3-kerajinan", type: "vocab", front: "kerajinan", reading: "kerajinan", meaning: "handicraft", example: { jp: "Kerajinan dari daerah itu dijual sampai ke kota besar.", en: "Handicrafts from that area are sold as far as the big cities." }, accept: ["things made by hand", "the output of hand workers", "handmade goods as a category"], drill: { jp: "Kerajinan dari daerah itu dijual sampai kota besar", en: "Handicrafts from that area are sold as far as the big cities" }, hint: "kuh-ra-JEE-nan. The second card off rajin in this unit, after pengrajin in the next lesson, and the everyday word for what seni kriya calls the same objects. ⚠️ It also still means diligence itself, so kerajinan siswa is a pupil's industriousness — one word, both meanings, and context separates them easily." },
        { id: "id-u120l3-kriya", type: "vocab", front: "kriya", reading: "kriya", meaning: "handicraft as an art form", example: { jp: "Dia belajar seni kriya di sekolah di Yogyakarta.", en: "She studies craft art at a school in Yogyakarta." }, accept: ["the making of objects by hand as a discipline", "the craft arts", "handmaking studied as an art"], drill: { jp: "Dia belajar seni kriya di sekolah di Yogyakarta", en: "She studies craft art at a school in Yogyakarta" }, hint: "KREE-ya, from Sanskrit. The academic word: seni kriya is the university faculty and the gallery label. Against kerajinan, which you meet in the next lesson and is the everyday word for the same objects — the difference is the register, and this is the formal one." },
      ],
    },
    {
      id: "id-u120l4",
      unit: 120,
      lesson: 4,
      title: "Gerabah, tembikar, dan menempa",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Tell three kinds of fired clay apart, name the forging of metal, and name the person who makes these things and the trade they belong to.",
      items: [
        { id: "id-u120l4-gerabah", type: "vocab", front: "gerabah", reading: "gerabah", meaning: "earthenware", example: { jp: "Gerabah dari desa itu masih dibuat dengan tangan.", en: "The earthenware from that village is still made by hand." }, accept: ["fired clay pots", "rough unglazed pottery", "plain baked clay vessels"], drill: { jp: "Gerabah dari desa itu masih dibuat dengan tangan", en: "The earthenware from that village is still made by hand" }, hint: "guh-RA-bah. The rough, unglazed, reddish kind — a water jar, a cooking pot, a plant pot. Kasongan outside Yogyakarta is the gerabah village and sells nothing else." },
        { id: "id-u120l4-tembikar", type: "vocab", front: "tembikar", reading: "tembikar", meaning: "a glazed clay vessel", example: { jp: "Tembikar itu lebih halus dan lebih mahal daripada gerabah.", en: "That pottery is finer and more expensive than earthenware." }, accept: ["fine fired clay ware", "a finished glazed pot", "smooth finished pottery"], drill: { jp: "Tembikar itu lebih halus dan mahal daripada gerabah", en: "That pottery is finer and dearer than earthenware" }, hint: "tem-BEE-kar. The finished, smooth, usually glazed kind. The three clay words in this lesson are a real distinction an Indonesian shop will make: gerabah is rough, tembikar is a finished vessel, keramik is the hard tile." },
        { id: "id-u120l4-keramik", type: "vocab", front: "keramik", reading: "keramik", meaning: "ceramic tile", example: { jp: "Lantai keramik lebih murah daripada lantai granit.", en: "A tiled floor is cheaper than a granite floor." }, accept: ["glazed tiling", "hard glazed clay for floors", "fired tile for a floor or wall"], drill: { jp: "Lantai keramik lebih murah daripada lantai granit", en: "A tiled floor is cheaper than a granite floor" }, hint: "kuh-RA-meek. In everyday Indonesian this means TILES, first and mostly — lantai keramik, a tiled floor, against the granit you met in the mining unit. The English word ceramic is kept out of the gloss on purpose." },
        { id: "id-u120l4-menempa", type: "vocab", front: "menempa", reading: "menempa", meaning: "to forge", example: { jp: "Orang itu menempa besi panas di depan tungku.", en: "That man forges hot iron in front of the furnace." }, accept: ["to beat hot metal into shape", "to hammer metal at a furnace", "to work heated metal with a hammer"], drill: { jp: "Orang itu menempa besi panas di depan tungku", en: "That man forges hot iron in front of the furnace" }, hint: "muh-num-PA. Beating hot metal, with the tungku you met in the mining unit. Used figuratively for shaping a person: menempa diri, to forge oneself through hardship, which is how Indonesian talks about discipline." },
        { id: "id-u120l4-pengrajin", type: "vocab", front: "pengrajin", reading: "pengrajin", meaning: "an artisan", example: { jp: "Pengrajin di desa itu menjual barang sendiri ke pasar.", en: "The artisans in that village sell their own goods at the market." }, accept: ["someone who makes things by hand for a living", "a craftsperson", "a maker of handmade goods"], drill: { jp: "Pengrajin di desa itu menjual barang ke pasar", en: "The artisans in that village sell goods at the market" }, hint: "peng-ra-JEEN — and yes, it is built on rajin, diligent, which you learned long ago. The connection is real: a pengrajin is defined by patient handwork. Also written perajin, which is the form the dictionary prefers." },
        { id: "id-u120l4-cetakan", type: "vocab", front: "cetakan", reading: "cetakan", meaning: "a mould", example: { jp: "Cetakan itu dipakai supaya semua bentuk sama.", en: "That mould is used so that every shape is the same." }, accept: ["a form something is cast in", "the shape a thing is pressed into", "a casting form"], drill: { jp: "Cetakan itu dipakai supaya semua bentuk sama", en: "That mould is used so that every shape is the same" }, hint: "chuh-TA-kan — c is CH, from cetak, to print or to cast. The craft that is neither carving nor weaving: pressing or pouring a material into a form. ⚠️ Also a printing: cetakan kedua is a second edition of a book, and that is the sense you will meet more often in writing." },
      ],
    },
  ],
};
