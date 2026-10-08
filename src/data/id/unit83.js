// ID Unit 83 — Membangun dan merombak ("Building and tearing down") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u77–u87). The 12 conventions in unit1.js and the 10 A2 conventions
// in unit21.js BIND this file. Read both before editing.
//
// THE HOLE THIS FILLS, measured against all 1200 A1+A2 cards. A2 furnished the
// INSIDE of a house (`rumah` · `kamar` · `dapur` · `pintu` · `jendela` ·
// `dinding` · `lantai` · `atap` · `lemari` · `kursi` · `meja` · `tempat tidur`)
// and the FURNITURE of a city (`gedung` · `jembatan` · `jalan raya` · `trotoar` ·
// `halte` · `stasiun` · `pelabuhan` · `bandara` · `pabrik` · `gudang`). It taught
// no word for TO BUILD, a fence, a gate, a brick, cement, concrete, a tile, a
// foundation, a pillar, an engineer, an architect, or anything at all about
// taking a structure down again. A learner could name a building and could not
// say it was being built.
//
// ⚠️ THE SPLIT WITH u82, WHICH IS ALSO MINE AND IS DECIDED IN ITS HEADER.
// u82 owns the hand tool and the material still on the shelf; THIS UNIT owns the
// material once it is IN the structure, plus the structure itself.
//   • HERE:  `semen` · `bata` · `genteng` · `ubin` — in a wall, on a roof, on a floor.
//   • THERE: `kaca` · `karet` · `kain` · `kawat` — bought by the metre or the sheet.
//   • `lift` is HERE (part of the building). `tangga` is THERE (you carry it).
//
// ⚠️ `membangun` IS A GENUINE SENSE SPLIT OFF A TAUGHT ROOT, AND IT IS THE
// INTERESTING CARD IN THIS UNIT. `bangun` is already taught meaning TO WAKE UP.
// The same root with me- means TO BUILD. Convention 3's test passes decisively —
// a learner who knows "to wake up" has no way to guess "to build" — so it is a
// separate card and its hint names the pair. Two cards off root `bangun`, under
// A6's ceiling of three. `bangunan` (a building) is NOT carded: `gedung` is
// already taught and would share its gloss space.
//
// `lift` IS GLOSSED "elevator", NEVER "lift", AND THAT IS NOT A STYLE CHOICE.
// `mengangkat` (u25) accepts "to lift", and `normalizeMeaning` strips the leading
// "to ", so the two would be one string to the grader and the produce card would
// show one prompt with two right answers. Caught by the crew lead's probe before
// this unit was written; `lint:curriculum` would never have seen it.
//
// `renovasi` WAS THE OBVIOUS CARD AND IS NOT HERE. `merombak` is carded in its
// place: `renovasi`/"a renovation" is three letters from a copy task, and
// `merombak` is the word that is actually in the unit's title. Four demolition
// words is deliberate, not a bin, because they are four different actions:
//   `runtuh`      a structure falls down by itself
//   `merobohkan`  someone knocks it down
//   `membongkar`  someone takes it apart, piece by piece
//   `merombak`    someone overhauls it and rebuilds differently
//
// ALSO DECLINED: `tukang` (TAKEN at u48) · `mandor` (a foreman — free, cut for
// space; `insinyur` and `arsitek` carry the trades strand) · `bangunan` (see above).
//
// GLOSSES REWRITTEN BECAUSE THE GRADER COLLIDED THEM (`lint` compares exact
// strings and saw none of these):
//   `membangun` "to build"  -> `badan` (the body) accepts "build". Now "to put up
//                              a building". That one is worth remembering: a body
//                              part's accept[] blocked the verb for construction.
//   `gerbang`   "a gate"    -> `pintu` accepts "a gate". Now "a main gateway".
//   `tiang`     "a post"    -> `mengirim` accepts "to post". Now "a pillar".
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT83 = {
  id: "id-u83",
  lang: "id",
  title: "Membangun dan merombak",
  order: 83,
  stage: "b1",
  lessons: [
    {
      id: "id-u83l1",
      unit: 83,
      lesson: 1,
      title: "Bata, semen, dan beton",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Say that something is being built, and name what it is being built out of: brick, cement, concrete, roof tile, floor tile.",
      items: [
        { id: "id-u83l1-membangun", type: "vocab", front: "membangun", reading: "membangun", meaning: "to put up a building", example: { jp: "Mereka membangun sekolah baru di desa itu.", en: "They are building a new school in that village." }, accept: ["to construct", "to erect"], drill: { jp: "Mereka membangun sekolah baru di desa", en: "They are building a new school in the village" }, hint: "mum-ba-NGOON. YOU ALREADY KNOW THIS ROOT, AND IT MEANS SOMETHING ELSE: bangun on its own is \"to wake up\". Add me- and the same root builds a house. Indonesian does this often, and there is no rule that predicts it — learn the pair. The gloss avoids a bare \"to build\" because the grader already gives \"build\" to badan, the body." },
        { id: "id-u83l1-bata", type: "vocab", front: "bata", reading: "bata", meaning: "a brick", example: { jp: "Dinding itu dari bata merah yang tua.", en: "That wall is of old red brick." }, accept: ["a building brick", "fired clay block"], drill: { jp: "Dinding itu dari bata merah yang tua", en: "That wall is of old red brick" }, hint: "BA-ta. In full batu bata, literally \"brick stone\", and you already know batu. Indonesians say both; bata alone is normal on a building site." },
        { id: "id-u83l1-semen", type: "vocab", front: "semen", reading: "semen", meaning: "cement", example: { jp: "Satu karung semen cukup untuk lantai kecil.", en: "One sack of cement is enough for a small floor." }, accept: ["cement powder", "mortar mix"], drill: { jp: "Satu karung semen cukup untuk lantai kecil", en: "One sack of cement is enough for a small floor" }, hint: "suh-MEN, from Dutch cement. The grey powder, which becomes beton once mixed. The karung it comes in you met in the tools unit." },
        { id: "id-u83l1-beton", type: "vocab", front: "beton", reading: "beton", meaning: "concrete", example: { jp: "Jembatan itu dari beton, jadi sangat kuat.", en: "That bridge is of concrete, so it is very strong." }, accept: ["set concrete", "cement and stone mixed and set"], drill: { jp: "Jembatan itu dari beton jadi sangat kuat", en: "That bridge is concrete so it is very strong" }, hint: "buh-TON, from Dutch beton. semen is the powder in the sack; beton is what you get after mixing it with pasir and water and letting it set." },
        { id: "id-u83l1-genteng", type: "vocab", front: "genteng", reading: "genteng", meaning: "a roof tile", example: { jp: "Genteng di atap itu jatuh waktu hujan besar.", en: "A tile on that roof fell during the heavy rain." }, accept: ["a clay roofing tile", "roofing"], drill: { jp: "Genteng di atap itu jatuh waktu hujan", en: "A tile on that roof fell in the rain" }, hint: "GEN-teng, both g hard and the final ng a hum. The curved red clay tile on most Indonesian roofs. atap, which you know, is the roof as a whole; the genteng are the pieces." },
        { id: "id-u83l1-ubin", type: "vocab", front: "ubin", reading: "ubin", meaning: "a floor tile", example: { jp: "Ubin di dapur itu putih dan mengkilap.", en: "The tiles in that kitchen are white and shiny." }, accept: ["a floor tile slab", "tiling on a floor"], drill: { jp: "Ubin di dapur itu putih dan mengkilap", en: "The kitchen tiles are white and shiny" }, hint: "OO-been. The square tile on a FLOOR, where a genteng goes on a roof — the pair is worth learning together. The example uses mengkilap, \"shiny\", from the senses unit." },
      ],
    },
    {
      id: "id-u83l2",
      unit: 83,
      lesson: 2,
      title: "Pagar, gerbang, dan tiang",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Describe the parts that hold a building up and shut it in: a fence, a gateway, a pillar, a beam, a frame, a foundation.",
      items: [
        { id: "id-u83l2-pagar", type: "vocab", front: "pagar", reading: "pagar", meaning: "a fence", example: { jp: "Pagar di depan rumah itu tinggi dan hitam.", en: "The fence in front of that house is tall and black." }, accept: ["a boundary fence", "railings"], drill: { jp: "Pagar di depan rumah itu tinggi", en: "The fence in front of that house is tall" }, hint: "PA-gar. The fence or railing round a plot. Almost every Indonesian town house has one, so you will hear it daily. The verb memagari is to fence something in." },
        { id: "id-u83l2-gerbang", type: "vocab", front: "gerbang", reading: "gerbang", meaning: "a main gateway", example: { jp: "Gerbang universitas itu sangat tinggi dan tua.", en: "The university main gate is very tall and old." }, accept: ["a large entrance gate", "a portal"], drill: { jp: "Gerbang universitas itu sangat tinggi dan tua", en: "The university main gate is very tall and old" }, hint: "gur-BAHNG. The BIG ceremonial entrance to a campus, a city or a complex, not a garden gate. pintu, which you know, already accepts \"a gate\" from the grader, which is why this card says main gateway. Bali's split temple gate is a gerbang." },
        { id: "id-u83l2-tiang", type: "vocab", front: "tiang", reading: "tiang", meaning: "a pillar", example: { jp: "Tiang di depan gedung itu dari beton.", en: "The pillars in front of that building are of concrete." }, accept: ["a column holding a weight", "an upright support"], drill: { jp: "Tiang di depan gedung itu dari beton", en: "The pillars in front of that building are concrete" }, hint: "TEE-ahng, two syllables. An upright carrying weight: a pillar, a flagpole, a mast. The gloss avoids \"a post\" because the grader already reads mengirim, \"to post\", as the same answer." },
        { id: "id-u83l2-balok", type: "vocab", front: "balok", reading: "balok", meaning: "a beam", example: { jp: "Balok kayu itu panjang dan sangat berat.", en: "That wooden beam is long and very heavy." }, accept: ["a joist", "a squared timber"], drill: { jp: "Balok kayu itu panjang dan sangat berat", en: "That wooden beam is long and very heavy" }, hint: "BA-lok. A squared length of wood or concrete lying ACROSS, where a tiang stands upright. In maths it is also a cuboid, which is how most Indonesians first meet the word at school." },
        { id: "id-u83l2-rangka", type: "vocab", front: "rangka", reading: "rangka", meaning: "a frame", example: { jp: "Rangka gedung itu sudah ada tetapi dinding belum.", en: "The frame of that building is up but the walls are not." }, accept: ["a skeleton structure", "a framework"], drill: { jp: "Rangka gedung itu sudah ada tetapi dinding belum", en: "The building's frame is up but the walls are not" }, hint: "RAHNG-ka. The load-bearing skeleton — of a building, a bicycle or a body. It also lives in the phrase dalam rangka, \"in the framework of\", which is how Indonesian announcements say \"in connection with\"." },
        { id: "id-u83l2-fondasi", type: "vocab", front: "fondasi", reading: "fondasi", meaning: "a building's footing", example: { jp: "Fondasi rumah itu harus kuat karena tanah basah.", en: "That house's foundation has to be strong because the ground is wet." }, accept: ["the footing of a building", "the base it stands on"], drill: { jp: "Fondasi rumah itu harus kuat karena tanah basah", en: "The house foundation must be strong because the ground is wet" }, hint: "fon-DA-see. The part under the ground. Also spelled pondasi, which you will see as often — f and p swap in Indonesian borrowings, and fondasi is the standard dictionary form. Used figuratively too, for the basis of an argument." },
      ],
    },
    {
      id: "id-u83l3",
      unit: 83,
      lesson: 3,
      title: "Kokoh, lorong, dan lift",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Move around and judge a finished building: say it is solidly built, find the corridor and the elevator, and talk about digging a hole and assembling parts.",
      items: [
        { id: "id-u83l3-kokoh", type: "vocab", front: "kokoh", reading: "kokoh", meaning: "sturdy", example: { jp: "Gedung lama itu masih kokoh setelah gempa.", en: "That old building is still sturdy after the earthquake." }, accept: ["solidly built", "standing firm"], drill: { jp: "Gedung lama itu masih kokoh setelah gempa", en: "That old building is still sturdy after the earthquake" }, hint: "KO-koh. Solid and unlikely to fall. kuat, which you know, is strong in general including a strong person; kokoh is specifically about a STRUCTURE staying up. Used of institutions too." },
        { id: "id-u83l3-lorong", type: "vocab", front: "lorong", reading: "lorong", meaning: "a corridor", example: { jp: "Lorong di rumah sakit itu panjang dan sunyi.", en: "The corridor in that hospital is long and silent." }, accept: ["a passageway", "an aisle"], drill: { jp: "Lorong di rumah sakit itu panjang dan sunyi", en: "The hospital corridor is long and silent" }, hint: "LO-rong. An inside passage, and also a narrow alley between houses. You already know gang for the alley sense; a lorong is more often indoors. The example uses sunyi from the senses unit." },
        { id: "id-u83l3-lift", type: "vocab", front: "lift", reading: "lift", meaning: "elevator", example: { jp: "Lift di gedung itu rusak, jadi kami naik tangga.", en: "The elevator in that building is broken, so we took the stairs." }, accept: ["a passenger elevator", "the car that carries you between floors"], drill: { jp: "Lift di gedung itu rusak sejak pagi", en: "The elevator in that building has been broken since morning" }, hint: "Pronounced LEEF, with the t barely there. THE GLOSS IS \"elevator\" AND IT HAS TO BE: mengangkat, which you already know, accepts \"to lift\", and the grader strips the \"to\" — so glossing this card \"a lift\" would give one prompt two right answers. The tangga in the example is the stairs sense you met in the tools unit." },
        { id: "id-u83l3-lubang", type: "vocab", front: "lubang", reading: "lubang", meaning: "a hole", example: { jp: "Ada lubang besar di jalan depan kantor.", en: "There is a big hole in the road in front of the office." }, accept: ["an opening", "a pit"], drill: { jp: "Ada lubang besar di jalan depan kantor", en: "There is a big hole in the road in front of the office" }, hint: "LOO-bahng. A hole of any kind: in a road, in a wall, in a sock. Indonesian road conversation runs on it, because jalan berlubang is a potholed road." },
        { id: "id-u83l3-menggali", type: "vocab", front: "menggali", reading: "menggali", meaning: "to dig", example: { jp: "Mereka menggali tanah untuk fondasi rumah baru.", en: "They are digging the ground for the new house's foundation." }, accept: ["to excavate", "to dig out"], drill: { jp: "Mereka menggali tanah untuk fondasi rumah", en: "They dig the ground for the house foundation" }, hint: "muh-NGGA-lee: the ngg is the hum plus a hard g, the tunggu sound. Root gali. Also used figuratively, menggali informasi, to dig up information." },
        { id: "id-u83l3-menyusun", type: "vocab", front: "menyusun", reading: "menyusun", meaning: "to assemble", example: { jp: "Dia menyusun bata dengan sangat hati-hati.", en: "He stacks the bricks very carefully." }, accept: ["to arrange in order", "to stack in order"], drill: { jp: "Dia menyusun bata dengan sangat hati-hati", en: "He stacks the bricks very carefully" }, hint: "muh-nyoo-SOON, ny as one hum. Putting pieces together in ORDER — bricks, a report, a schedule. Root susun. Indonesian uses it for drafting a document too: menyusun laporan." },
      ],
    },
    {
      id: "id-u83l4",
      unit: 83,
      lesson: 4,
      title: "Merombak dan merobohkan",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Talk about undoing a building: say who designed it, and distinguish between it falling down, being knocked down, being taken apart, and being overhauled.",
      items: [
        { id: "id-u83l4-insinyur", type: "vocab", front: "insinyur", reading: "insinyur", meaning: "an engineer", example: { jp: "Insinyur itu memeriksa rangka gedung setiap minggu.", en: "That engineer inspects the building's frame every week." }, accept: ["a qualified engineer", "a technical professional"], drill: { jp: "Insinyur itu memeriksa rangka gedung setiap minggu", en: "That engineer inspects the building frame every week" }, hint: "een-see-NYOOR, with the ny hum — from Dutch ingenieur, which is why it looks nothing like the English word. Abbreviated Ir. in front of a name on Indonesian business cards." },
        { id: "id-u83l4-arsitek", type: "vocab", front: "arsitek", reading: "arsitek", meaning: "an architect", example: { jp: "Arsitek muda itu membuat gambar untuk rumah kami.", en: "That young architect made the drawings for our house." }, accept: ["a building designer", "one who designs buildings"], drill: { jp: "Arsitek muda itu membuat gambar untuk rumah kami", en: "That young architect made the drawings for our house" }, hint: "ar-see-TEK. The one who DESIGNS; the insinyur works out whether it will stand up. Indonesian also uses it figuratively for the architect of a plan." },
        { id: "id-u83l4-runtuh", type: "vocab", front: "runtuh", reading: "runtuh", meaning: "to collapse", example: { jp: "Dinding tua itu runtuh sendiri setelah hujan.", en: "That old wall collapsed on its own after the rain." }, accept: ["to fall down", "to cave in"], drill: { jp: "Dinding tua itu runtuh sendiri setelah hujan", en: "That old wall collapsed by itself after the rain" }, hint: "ROON-tooh. The structure falls down BY ITSELF, with nobody pushing — which is what separates it from the next three cards. Used of governments and of hopes as well." },
        { id: "id-u83l4-merobohkan", type: "vocab", front: "merobohkan", reading: "merobohkan", meaning: "to knock down", example: { jp: "Pemerintah mau merobohkan pasar lama itu tahun depan.", en: "The government wants to knock down that old market next year." }, accept: ["to demolish", "to bring down deliberately"], drill: { jp: "Pemerintah mau merobohkan pasar lama itu", en: "The government wants to knock down that old market" }, hint: "muh-ro-BOH-kahn. SOMEONE does it, on purpose, and the thing ends up flat. runtuh happens; merobohkan is done. Root roboh, which on its own means toppled over." },
        { id: "id-u83l4-membongkar", type: "vocab", front: "membongkar", reading: "membongkar", meaning: "to dismantle", example: { jp: "Mereka membongkar atap dulu sebelum dinding.", en: "They take the roof apart first, before the walls." }, accept: ["to take apart piece by piece", "to strip down"], drill: { jp: "Mereka membongkar atap dulu sebelum dinding", en: "They take the roof apart first before the walls" }, hint: "mum-BONG-kar. Taking it apart in PIECES, which is the opposite of menyusun. Also used for unloading a truck and for exposing a scandal: membongkar kasus." },
        { id: "id-u83l4-merombak", type: "vocab", front: "merombak", reading: "merombak", meaning: "to overhaul", example: { jp: "Kami merombak dapur dan kamar mandi tahun lalu.", en: "We overhauled the kitchen and bathroom last year." }, accept: ["to remodel completely", "to rebuild in a different shape"], drill: { jp: "Kami merombak dapur dan kamar mandi", en: "We overhauled the kitchen and bathroom" }, hint: "muh-ROM-bahk. Tearing down in order to BUILD BACK differently — the fourth and most hopeful of the four, and the one in this unit's title. Indonesian uses it about a cabinet reshuffle or a team rebuild too: merombak tim." },
      ],
    },
  ],
};
