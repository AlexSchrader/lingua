// ID Unit 65 — Lingkungan yang rusak ("The environment under strain") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 2 (u64–u76). unit1.js's 12 A1 conventions, unit21.js's 10 A2
// conventions and **unit51.js's B1–B12 (the crew lead's, binding on the whole
// band)** ALL BIND this file. This block's own layer is B2-1–B2-11, in unit69.js
// (grammar) and unit72.js (register). RETITLED AND NARROWED from "Environment and
// place".
//
// THE HOLE. "Place" was already spent three times over and had to be dropped
// from the slot entirely:
//   u7 built the town · u19 took the nature NOUNS (`pohon` `gunung` `sungai`
//   `pantai` `laut` `hutan`) · u23 took the journey · u38 took the street and
//   the address · u46 took the DISASTER (`banjir` `gempa` `kebakaran` `debu`
//   `asap`) and gave the course `lingkungan` (the environment) and `sampah`
//   (rubbish) — two words and nothing to do with them.
//   SO WHAT WAS MISSING — the environment as a PROBLEM. Measured against all
//   1,200 cards there was no word for pollution, waste, plastic, recycling,
//   emissions, carbon, energy, sustainability, extinction, wildlife, or for
//   felling a tree. A learner could name a forest and could not say it was
//   being cut down.
//
// ⚠️ SCOPE BOUNDARY WITH MY OWN u76, resolved internally because both halves
// were assigned to this seat on purpose:
//   THIS UNIT OWNS THE ENVIRONMENT AS A PROBLEM — pollution, waste, emissions,
//   conservation, what humans are doing to it. `pemanasan global` is HERE.
//   u76 OWNS THE PHYSICAL LANDSCAPE — landforms, climate, temperature, the
//   words for snow and a valley. `iklim` and `suhu` are THERE.
//   The hinge word is heat: `pemanasan global` (global warming, a problem) is
//   this unit's; `suhu` (temperature, a measurement) is u76's.
//
// AFFIX ROOTS STRIPPED AND GREPPED BY HAND (unit1.js convention 3):
//   mencemari   → cemar     root not taught.
//   pemanasan   → panas     ⚠️ `panas` (u8, hot) IS taught. `pemanasan global`
//     is carded as a FIXED COMPOUND, not as a free pe-…-an noun: on its own
//     pemanasan is also a warm-up before sport. Convention 8 (a fixed phrase may
//     be a card) plus convention 3 (the derived word is a new word). Drill-safe:
//     "pemanasan" contains "panas" at index 2 followed by `a`, a letter, so
//     findWholeWord does not match in either direction.
//   berkelanjutan → lanjut  root not taught (ber- + ke-…-an on one root).
//   menebang    → tebang    root not taught.
//   melestarikan → lestari  root not taught.
//   terancam    → ancam     root not taught. ⚠️ A2's convention A5 DEFERRED
//     "ter- on a root the learner does not have" to B1. This is B1, so the
//     deferral matures here: `terancam` is carded, and its hint says what ter-
//     is doing. This is the deferral working, not a breach of it.
//   merusak     → rusak     ⚠️ `rusak` (u25, broken) IS taught, and so is
//     `memperbaiki` (u25, to repair). `merusak` and `kerusakan` are the second
//     and third cards off that root, which A6 permits where each is a different
//     word: rusak is a STATE, merusak is an ACT, kerusakan is the RESULT.
//     Different lessons would be tidier but they belong in one, so they are
//     adjacent in l4 and each hint names the other two. Drill-safe — a drill
//     with "merusak" does not whole-word-match `rusak` (the `me` before it are
//     letters), so `rusak`'s own u25 drill is unaffected.
//   kerusakan   → rusak     as above.
//   beracun     → racun     ⚠️ `racun` (u45, poison) IS taught. The adjective is
//     a different word; named in the hint. Drill-safe ("beracun" has `be` before
//     the root).
//   membakar    → bakar     root not taught; ⚠️ `kebakaran` (u46, a fire) IS the
//     other card off it, and `memanggang` (u34) already accepts *to bake* and
//     *to roast*, and `menyalakan` (u42) accepts *to set alight* — so this card
//     is glossed "to burn something" and its accept[] avoids all three.
//   daur ulang  → daur · ulang   neither taught; a fixed two-word compound.
//   energi surya → surya    not taught; a fixed compound on `energi`, carded in
//     the same lesson (convention 8).
//   polusi · limbah · plastik · emisi · karbon · punah · satwa · langka ·
//   boros · menghemat (→ hemat, not taught) — roots or loans.
//
// ⛔ NOT CARDED:
//   `pencemaran` — would be a third card on cemar beside `mencemari`, and
//     `polusi` already holds the noun. A6's "adds nothing" clause.
//   `penebangan` — same, a pe-…-an noun beside `menebang`.
//   `konservasi` / `pelestarian` — both would be a second noun for conservation
//     beside `melestarikan`. The verb is the one a learner needs.
//   `kaca` (glass) — a STOCK MATERIAL, which is block 3's u82. Left for it.
//   `gas` — front and gloss are the same string; the copy-task trap.
//   `kemasan` (packaging) — CUT at the last pass to make room for `udara`, the
//     air itself, which the whole corpus lacked: a unit on air pollution with no
//     word for air is the `die Frage` failure in miniature. Named in `plastik`'s
//     hint instead.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT65 = {
  id: "id-u65",
  lang: "id",
  title: "Lingkungan yang rusak",
  order: 65,
  stage: "b1",
  lessons: [
    {
      id: "id-u65l1",
      unit: 65,
      lesson: 1,
      title: "Polusi dan limbah",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Say that a place is polluted and name what is doing it — factory waste, plastic, packaging — and say what can be recycled instead.",
      items: [
        { id: "id-u65l1-polusi", type: "vocab", front: "polusi", reading: "polusi", meaning: "pollution", example: { jp: "Polusi di kota besar itu sangat buruk pada pagi hari.", en: "Pollution in that big city is very bad in the morning." }, accept: ["dirty air or water", "contamination of a place", "polluted conditions"], drill: { jp: "Polusi udara membuat anak-anak sakit", en: "Air pollution makes the children ill" }, hint: "poh-LOO-see. Note the spelling: Indonesian writes -si where English writes -tion, the same trade you saw in posisi and provinsi. Polusi udara is air pollution, polusi suara is noise pollution. The verb is mencemari, the next card." },
        { id: "id-u65l1-mencemari", type: "vocab", front: "mencemari", reading: "mencemari", meaning: "to pollute", example: { jp: "Pabrik itu mencemari sungai dekat desa kami.", en: "That factory is polluting the river near our village." }, accept: ["to foul a place", "to make something dirty and unsafe", "to contaminate"], drill: { jp: "Limbah pabrik mencemari air sungai kami", en: "Factory waste pollutes our river water" }, hint: "muhn-chuh-MAH-ree, c as CH. From cemar, soiled, which is not taught on its own, plus the -i ending that aims a verb at a place: mencemari sungai, to pollute the river. ⚠️ Tercemar is the state — airnya tercemar, the water is polluted — and you will meet ter- forms properly later in this band." },
        { id: "id-u65l1-udara", type: "vocab", front: "udara", reading: "udara", meaning: "the air", example: { jp: "Udara di kota itu kotor karena mobil dan pabrik.", en: "The air in that city is dirty because of cars and factories." }, accept: ["air as we breathe it", "the atmosphere", "open air"], drill: { jp: "Udara di gunung lebih bersih dan dingin", en: "The air in the mountains is cleaner and colder" }, hint: "oo-DAH-ra, three syllables. ⚠️ KEEP IT APART FROM AIR, which you know as WATER — they look alike to an English reader and they are opposites. Udara is the air you breathe; air is water. The course has needed udara since the weather unit and never had it. Polusi udara is air pollution; di udara terbuka is in the open air." },
        { id: "id-u65l1-limbah", type: "vocab", front: "limbah", reading: "limbah", meaning: "industrial waste", example: { jp: "Limbah dari pabrik itu masuk ke sungai setiap hari.", en: "Waste from that factory goes into the river every day." }, accept: ["effluent", "waste from a works", "what a factory throws out"], drill: { jp: "Limbah itu beracun untuk ikan dan burung", en: "That waste is poisonous to fish and birds" }, hint: "LEEM-bah. ⚠️ Keep it apart from sampah, which you know: sampah is household rubbish, the bag you put out; limbah is what comes out of a pipe — factory effluent, sewage, chemical run-off. An Indonesian newspaper uses limbah for the serious kind." },
        { id: "id-u65l1-plastik", type: "vocab", front: "plastik", reading: "plastik", meaning: "plastic", example: { jp: "Banyak plastik di pantai itu datang dari sungai.", en: "Much of the plastic on that beach comes from the river." }, accept: ["plastic material", "a plastic bag", "the plastic stuff"], drill: { jp: "Kantong plastik itu tidak bisa daur ulang", en: "That plastic bag cannot be recycled" }, hint: "PLAS-teek. Note the final k where English has a c. On its own it very often means a plastic BAG — minta plastik, at a market stall, asks for one. Indonesia is one of the largest sources of ocean plastic in the world, so the word is politically loud as well as useful. The wrapping a product comes in is its kemasan, built on kemas, to pack up neatly." },
        { id: "id-u65l1-daurulang", type: "vocab", front: "daur ulang", reading: "daurulang", meaning: "recycling", example: { jp: "Daur ulang plastik itu susah dan mahal di kota kecil.", en: "Recycling that plastic is difficult and expensive in a small town." }, accept: ["putting waste back into use", "reprocessing of waste", "the recycling of material"], drill: { jp: "Daur ulang kertas sudah mulai di sekolah ini", en: "Paper recycling has already started at this school" }, hint: "DOW-oor OO-lang, four syllables, daur rhyming with POWER. Literally a cycle again — daur is a cycle and ulang is to repeat, and neither is taught on its own, so learn the pair as one word. Mendaur ulang is the verb. ⚠️ Fold check: it reads as one string, daurulang, and nothing else in the corpus folds to that." },
      ],
    },
    {
      id: "id-u65l2",
      unit: 65,
      lesson: 2,
      title: "Pemanasan global dan energi",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Talk about global warming — the emissions and the carbon behind it, and the energy choices that could be sustainable instead.",
      items: [
        { id: "id-u65l2-pemanasanglobal", type: "vocab", front: "pemanasan global", reading: "pemanasanglobal", meaning: "global warming", example: { jp: "Pemanasan global sudah mengubah musim di negara ini.", en: "Global warming has already changed the seasons in this country." }, accept: ["the warming of the planet", "the heating of the earth", "the global rise in heat"], drill: { jp: "Pemanasan global membuat laut lebih tinggi", en: "Global warming makes the sea higher" }, hint: "puh-mah-NAH-san GLOH-bal. Built on panas, hot, which you know: pe-…-an turns it into the warming-up of something. ⚠️ On its own pemanasan is a warm-up before sport, so the word global is doing real work and the two are learned as one phrase. Indonesia is a thousand islands at sea level, which is why this is a front-page phrase there and not an abstraction." },
        { id: "id-u65l2-emisi", type: "vocab", front: "emisi", reading: "emisi", meaning: "emissions", example: { jp: "Emisi dari mobil dan pabrik itu sangat besar.", en: "Emissions from those cars and factories are very large." }, accept: ["what is released into the air", "exhaust output", "gases given off"], drill: { jp: "Emisi karbon negara itu turun tahun lalu", en: "That country's carbon emissions fell last year" }, hint: "eh-MEE-see. The -si ending again where English has -ssion. It is almost always plural in sense even though Indonesian does not mark number — emisi karbon, carbon emissions. Mengurangi emisi is to cut emissions." },
        { id: "id-u65l2-karbon", type: "vocab", front: "karbon", reading: "karbon", meaning: "carbon", example: { jp: "Hutan besar itu bisa menyimpan banyak karbon.", en: "That big forest can store a lot of carbon." }, accept: ["the element carbon", "carbon in the air", "carbon as a substance"], drill: { jp: "Karbon di udara itu datang dari pabrik", en: "The carbon in the air comes from factories" }, hint: "KAR-bon. Note the k: Indonesian has no soft c, so every English hard c becomes k — the same rule that gives you kamera and kilo, which you know. Jejak karbon is a carbon footprint." },
        { id: "id-u65l2-energi", type: "vocab", front: "energi", reading: "energi", meaning: "energy", example: { jp: "Energi di negara ini masih datang dari minyak.", en: "Energy in this country still comes from oil." }, accept: ["power as a resource", "the power something runs on", "fuel and power together"], drill: { jp: "Energi baru itu lebih bersih dan lebih murah", en: "That new energy is cleaner and cheaper" }, hint: "eh-ner-GEE, the stress right at the end and the g hard. Note the single final i where English has -gy. It covers both the physics and the everyday sense of somebody's energy — tidak punya energi, to have no energy. Listrik, which you know, is specifically electricity." },
        { id: "id-u65l2-energisurya", type: "vocab", front: "energi surya", reading: "energisurya", meaning: "solar energy", example: { jp: "Energi surya bisa membantu desa yang jauh dari kota.", en: "Solar energy can help villages far from the city." }, accept: ["power from the sun", "solar power", "energy taken from sunlight"], drill: { jp: "Energi surya lebih bersih dari minyak", en: "Solar energy is cleaner than oil" }, hint: "eh-ner-GEE SOOR-ya. Surya is Sanskrit for the sun and is not used on its own in everyday speech — matahari, which you know, is the ordinary word. But in technical and official language Indonesian reaches for the Sanskrit, so it is energi surya and never energi matahari. That split between the plain word and the learned one runs right through the language." },
        { id: "id-u65l2-berkelanjutan", type: "vocab", front: "berkelanjutan", reading: "berkelanjutan", meaning: "sustainable", example: { jp: "Pemerintah mau membuat kota yang berkelanjutan.", en: "The government wants to build a sustainable city." }, accept: ["able to keep going", "lasting without running out", "that can be carried on"], drill: { jp: "Kota berkelanjutan lebih baik untuk semua orang", en: "A sustainable city is better for everybody" }, hint: "buhr-kuh-lan-JOO-tan, five syllables. A stack of three affixes on lanjut, to continue, which is not taught alone: ber- plus ke-…-an, giving roughly having-the-quality-of-continuing. It is a translation coined for international documents and it still sounds official — nobody says it in a market." },
      ],
    },
    {
      id: "id-u65l3",
      unit: 65,
      lesson: 3,
      title: "Hutan dan satwa",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Say that a forest is being felled and that the wildlife in it is rare, under threat, or already extinct — and that somebody is trying to conserve it.",
      items: [
        { id: "id-u65l3-menebang", type: "vocab", front: "menebang", reading: "menebang", meaning: "to fell a tree", example: { jp: "Mereka menebang pohon besar di hutan itu setiap tahun.", en: "They fell big trees in that forest every year." }, accept: ["to cut a tree down", "to chop down", "to take down timber"], drill: { jp: "Orang itu menebang pohon dekat sungai", en: "That person fells trees near the river" }, hint: "muh-nuh-BAHNG. From tebang, not taught alone, and it is specifically about TREES — you cannot menebang a wall. Penebangan liar, illegal logging, is the phrase in every Indonesian news report about Kalimantan and Papua." },
        { id: "id-u65l3-melestarikan", type: "vocab", front: "melestarikan", reading: "melestarikan", meaning: "to conserve", example: { jp: "Mereka mau melestarikan hutan dan satwa di pulau itu.", en: "They want to conserve the forest and wildlife on that island." }, accept: ["to preserve something", "to keep something from being lost", "to protect for the future"], drill: { jp: "Pemerintah melestarikan hutan di daerah itu", en: "The government conserves the forest in that region" }, hint: "muh-luhs-tah-REE-kan, five syllables. From lestari, enduring, a Sanskrit-rooted word not taught alone, plus -kan to make it something you DO to a thing. ⚠️ Not menjaga, which you know as to look after day to day: melestarikan is keeping something in existence across generations, and it is the word on every national park sign." },
        { id: "id-u65l3-satwa", type: "vocab", front: "satwa", reading: "satwa", meaning: "wildlife", example: { jp: "Satwa di hutan itu tidak ada di tempat lain.", en: "The wildlife in that forest exists nowhere else." }, accept: ["wild animals", "fauna", "the animals of a place"], drill: { jp: "Satwa langka itu hidup hanya di pulau ini", en: "That rare wildlife lives only on this island" }, hint: "SAHT-wa. Sanskrit, and the learned word where hewan and binatang are the plain ones — so satwa is what you read on a sign or in a law, never what you say about the cat. Satwa liar is wildlife proper; satwa langka is the endangered kind." },
        { id: "id-u65l3-langka", type: "vocab", front: "langka", reading: "langka", meaning: "rare", example: { jp: "Kami susah melihat burung langka itu di hutan.", en: "We find it hard to see that rare bird in the forest." }, accept: ["seldom found", "hard to come by", "scarce"], drill: { jp: "Ikan langka itu ada di sungai ini saja", en: "That rare fish is in this river only" }, hint: "LAHNG-ka, ng as one hum. Rare in the sense of SCARCE — few of them left, hard to get hold of. It is not the English *rare* meaning unusual or remarkable; for that Indonesian says aneh or jarang. Barang langka is a scarce commodity." },
        { id: "id-u65l3-terancam", type: "vocab", front: "terancam", reading: "terancam", meaning: "under threat", example: { jp: "Satwa di pulau itu terancam karena orang menebang hutan.", en: "The wildlife on that island is under threat because people are felling the forest." }, accept: ["threatened", "at risk of being lost", "in danger of going"], drill: { jp: "Hutan di daerah itu terancam setiap tahun", en: "The forest in that region is under threat every year" }, hint: "tuh-RAHN-cham, c as CH. Built on ancam, to threaten, which is not taught alone. ⚠️ This is the ter- you have been waiting for: on a verb root it makes a STATE that somebody or something is IN — not a superlative. Terancam punah, threatened with extinction, is the fixed phrase. Compare terkenal, which you know: well known, not most known." },
        { id: "id-u65l3-punah", type: "vocab", front: "punah", reading: "punah", meaning: "died out as a species", example: { jp: "Satwa itu sudah punah di negara ini.", en: "That animal is already extinct in this country." }, accept: ["gone for good", "no longer existing anywhere", "lost as a species"], drill: { jp: "Burung besar itu punah seratus tahun lalu", en: "That big bird went extinct a hundred years ago" }, hint: "POO-nah. ⚠️ Glossed the long way because `musnah` (taught earlier in this band) already accepts *extinct* — two cards may never share one answer; musnah is any total destruction, punah is a species ending. Of a whole species, never of one animal — for that you want mati, which you know. Sudah punah is extinct; hampir punah is nearly extinct; terancam punah is endangered. The word carries real finality in Indonesian and is not used loosely." },
      ],
    },
    {
      id: "id-u65l4",
      unit: 65,
      lesson: 4,
      title: "Merusak dan menghemat",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Say who is damaging what, how bad the damage is, and argue for using less instead of being wasteful.",
      items: [
        { id: "id-u65l4-merusak", type: "vocab", front: "merusak", reading: "merusak", meaning: "to damage", example: { jp: "Limbah itu merusak sungai dan tanah di sekitar pabrik.", en: "That waste damages the river and the soil around the factory." }, accept: ["to spoil something", "to do harm to", "to wreck"], drill: { jp: "Mobil lama itu merusak udara di kota", en: "That old car damages the air in the city" }, hint: "muh-ROO-sak. The ACT, where rusak, which you know, is the resulting STATE: saya merusak pintu, pintunya rusak. The third member of the family is kerusakan, the next card, which is the damage itself. Getting these three apart is most of what this lesson is for." },
        { id: "id-u65l4-kerusakan", type: "vocab", front: "kerusakan", reading: "kerusakan", meaning: "damage done", example: { jp: "Kerusakan di hutan itu sudah terlalu besar.", en: "The damage in that forest is already too great." }, accept: ["the harm caused", "destruction that has happened", "the extent of the harm"], drill: { jp: "Kerusakan hutan itu sangat buruk tahun ini", en: "The damage to that forest is very bad this year" }, hint: "kuh-roo-SAH-kan. The ke-…-an frame turns rusak into the damage AS A THING you can measure — kerusakan lingkungan, environmental damage. So: rusak is broken, merusak is to break it, kerusakan is the breakage. Indonesian builds whole families like this off one root and you will see the frame again in the grammar units at the end of this band." },
        { id: "id-u65l4-beracun", type: "vocab", front: "beracun", reading: "beracun", meaning: "poisonous", example: { jp: "Air di sungai itu beracun untuk ikan dan orang.", en: "The water in that river is poisonous to fish and people." }, accept: ["toxic", "full of poison", "harmful to drink or eat"], drill: { jp: "Limbah beracun itu masuk ke tanah desa", en: "That poisonous waste gets into the village soil" }, hint: "buh-RAH-choon, c as CH. From racun, poison, which you know, with ber- meaning having-it — the same shape as berisi, which you also know. So beracun is literally poison-bearing. Limbah beracun is toxic waste and is the phrase it appears in most." },
        { id: "id-u65l4-membakar", type: "vocab", front: "membakar", reading: "membakar", meaning: "to burn something", example: { jp: "Mereka membakar hutan untuk membuat tanah baru.", en: "They burn the forest to make new land." }, accept: ["to set fire to", "to put a match to", "to burn off"], drill: { jp: "Petani itu membakar sampah di belakang rumah", en: "That farmer burns rubbish behind the house" }, hint: "muhm-BAH-kar. From bakar, not taught alone, and you already know kebakaran, a fire, off the same root. ⚠️ Keep it apart from two you know: menyalakan is to switch on or light a lamp, memanggang is to grill or bake food. Membakar is destruction by fire — and burning land to clear it is the single biggest source of Indonesia's air pollution." },
        { id: "id-u65l4-menghemat", type: "vocab", front: "menghemat", reading: "menghemat", meaning: "to use less of something", example: { jp: "Kami mau menghemat air dan listrik di rumah.", en: "We want to use less water and electricity at home." }, accept: ["to economise on", "to be sparing with", "to cut down on using"], drill: { jp: "Lampu baru itu menghemat listrik setiap malam", en: "That new lamp saves electricity every night" }, hint: "muhng-HEH-mat. From hemat, thrifty, not taught alone. ⚠️ Not menabung, which you know: menabung is putting money in the bank, menghemat is spending less of anything in the first place — water, fuel, time. Hemat energi is the slogan on every Indonesian electricity bill." },
        { id: "id-u65l4-boros", type: "vocab", front: "boros", reading: "boros", meaning: "wasteful", example: { jp: "Mobil lama itu sangat boros dan mahal.", en: "That old car is very wasteful and expensive." }, accept: ["extravagant with resources", "using far too much", "profligate"], drill: { jp: "Orang itu boros air setiap hari", en: "That person is wasteful with water every day" }, hint: "BOH-ros. The exact opposite of hemat. It describes a person who spends too freely and equally a machine that drinks too much — mobil ini boros bensin, this car is heavy on petrol. There is no English adjective that covers both, which is why the gloss is the plain one." },
      ],
    },
  ],
};
