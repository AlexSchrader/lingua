// ID Unit 84 — Bertani dan tumbuhan ("Farming and plants") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u77–u87). The 12 conventions in unit1.js and the 10 A2 conventions
// in unit21.js BIND this file. Read both before editing.
//
// THE HOLE THIS FILLS, measured against all 1200 A1+A2 cards. Indonesia is an
// agricultural country and the A2 band taught farming in nine words:
//   `tanaman` · `menanam` · `akar` · `biji` · `rumput` (u46) · `pohon` ·
//   `daun` · `bunga` · `buah` (u19) · `petani` (u48) · `sawah`? NO — not taught.
// There was no word for a paddy field, for rice as a growing plant, for a
// harvest, a plantation, a dry field, fertiliser, a sprout, or for watering,
// working the land or picking fruit. A learner could say `petani` and could not
// say what a petani does. Three of Indonesia's staple crops — maize, cassava and
// sugar-cane — had no names at all, and `kentang` (potato) was missing from a
// 1200-word food vocabulary.
//
// ⚠️ THE BOUNDARIES, two of them from other blocks and one internal:
//   • THE ENVIRONMENT AS A PROBLEM is another block's slot, and so is THE
//     PHYSICAL LANDSCAPE. This unit keeps OFF both: no climate words, no
//     landforms. `subur` and `gersang` are here as properties of SOIL YOU FARM,
//     not as descriptions of a region.
//   • Internally: THIS unit owns the plant and the farm, u85 owns the animal,
//     u86 owns the dish. `kelapa` is HERE, as the palm and its nut on the tree.
//     `daging` is u86's, as meat on a plate. An animal kept for food is u85's
//     (`memelihara`, `kandang`); the food once cooked is u86's.
//
// `benih` WAS CARDED AND WAS CUT. `biji` ("a seed") is already taught, and the
// only honest gloss for `benih` is seed-for-planting — which the grader cannot
// tell apart from `biji` once `normalizeMeaning` has stripped the article. The
// slot went to `singkong` (cassava) instead, which closes a real staple-crop gap
// rather than splitting a gloss two ways. `bibit` is out for the same reason.
//
// FOUR PROBE FLAGS AND THREE OF THEM ARE WRONG:
//   `menuai`      flagged against `tua`, `dua` and `benua`. All letter accidents;
//                 root is `tuai`. CLEAN.
//   `memetik`     flagged against `mengetik` (to type). Roots `petik` and `ketik`.
//                 CLEAN. But its GLOSS did collide — see below.
//   `pekarangan`  flagged against `sekarang` (now). Root `karang`, not taught as a
//                 live word. CLEAN.
//   `bertani`     REAL. `petani` (a farmer) is taught, so this is a second card
//                 off root `tani`. Two off one root, A6 ceiling is three, and the
//                 hint names the pair.
//
// GLOSSES: `memetik` "to pick" collided with `pilih` (to choose), which accepts
// "to pick" — carded as "to pluck fruit" instead. And `panen`/`menuai` are kept
// apart deliberately: `panen` is "a harvest" (the event and its yield), `menuai`
// is "to reap" (the act). Their accept[] arrays were written not to overlap, and
// `accept-collisions.mjs` confirms it.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT84 = {
  id: "id-u84",
  lang: "id",
  title: "Bertani dan tumbuhan",
  order: 84,
  stage: "b1",
  lessons: [
    {
      id: "id-u84l1",
      unit: 84,
      lesson: 1,
      title: "Sawah, ladang, dan kebun",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Name the kinds of farmed land Indonesians actually distinguish — wet paddy, dry field, garden plot, estate — and say that someone farms for a living.",
      items: [
        { id: "id-u84l1-bertani", type: "vocab", front: "bertani", reading: "bertani", meaning: "to farm", example: { jp: "Keluarga itu bertani di desa sejak lama.", en: "That family has farmed in the village for a long time." }, accept: ["to work as a farmer", "to till the land for a living"], drill: { jp: "Keluarga itu bertani di desa sejak lama", en: "That family has farmed in the village for a long time" }, hint: "bur-TA-nee. You already know petani, a farmer — same root tani, with ber- making it the activity instead of the person. Indonesian builds occupations and their verbs this way constantly: bekerja and pekerja, berdagang and pedagang." },
        { id: "id-u84l1-sawah", type: "vocab", front: "sawah", reading: "sawah", meaning: "a paddy field", example: { jp: "Sawah di Bali terkenal karena sangat hijau.", en: "The paddy fields in Bali are famous for being very green." }, accept: ["a wet rice field", "a flooded rice terrace"], drill: { jp: "Sawah di Bali terkenal karena sangat hijau", en: "Bali's paddy fields are famous for being very green" }, hint: "SA-wah. A FLOODED rice field, and the single most important word in rural Indonesian. It is not a field in general — a dry one is a ladang, two cards along." },
        { id: "id-u84l1-padi", type: "vocab", front: "padi", reading: "padi", meaning: "rice in the field", example: { jp: "Padi di sawah itu sudah tinggi dan hijau.", en: "The rice in that field is already tall and green." }, accept: ["the growing rice plant", "unhusked rice"], drill: { jp: "Padi di sawah itu sudah tinggi dan hijau", en: "The rice in that field is already tall and green" }, hint: "PA-dee. INDONESIAN HAS THREE WORDS FOR RICE AND THEY ARE NOT INTERCHANGEABLE: padi is the plant in the field, beras is the raw grain in the sack, and nasi — which you already know — is cooked rice on the plate. English has one word for all three, so this is a real distinction to learn." },
        { id: "id-u84l1-ladang", type: "vocab", front: "ladang", reading: "ladang", meaning: "a dry field", example: { jp: "Mereka menanam jagung di ladang yang kering.", en: "They plant corn in a dry field." }, accept: ["a non-irrigated field", "upland cropland"], drill: { jp: "Mereka menanam jagung di ladang yang kering", en: "They plant corn in a dry field" }, hint: "LA-dahng. Farmed land with NO irrigation, usually on a slope, for maize or cassava. The sawah/ladang pair divides Indonesian agriculture in two. The example uses jagung, which arrives later in this unit." },
        { id: "id-u84l1-kebun", type: "vocab", front: "kebun", reading: "kebun", meaning: "a garden plot", example: { jp: "Di kebun belakang rumah ada pohon dan bunga.", en: "In the garden behind the house there are trees and flowers." }, accept: ["a cultivated garden", "an orchard plot"], drill: { jp: "Di kebun belakang rumah ada pohon dan bunga", en: "In the garden behind the house there are trees and flowers" }, hint: "kuh-BOON. A worked garden where things are GROWN, where taman — which you know — is a park or an ornamental garden. kebun binatang, literally animal garden, is the zoo." },
        { id: "id-u84l1-perkebunan", type: "vocab", front: "perkebunan", reading: "perkebunan", meaning: "a plantation", example: { jp: "Perkebunan karet itu sangat besar dan punya banyak buruh.", en: "That rubber plantation is very large and has many labourers." }, accept: ["a large commercial estate", "an agricultural estate"], drill: { jp: "Perkebunan karet itu besar dan punya banyak buruh", en: "That rubber plantation is big and has many labourers" }, hint: "pur-kuh-BOO-nahn. Same root as kebun, scaled up to an industrial estate — rubber, palm oil, tea, coffee. The per- -an frame turns a place into an enterprise. The karet in the example is from the materials unit." },
      ],
    },
    {
      id: "id-u84l2",
      unit: 84,
      lesson: 2,
      title: "Menggarap, pupuk, dan menyiram",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Say what work goes into a crop — working the soil, fertiliser, watering — and judge whether the ground is fertile or barren.",
      items: [
        { id: "id-u84l2-pekarangan", type: "vocab", front: "pekarangan", reading: "pekarangan", meaning: "a house yard", example: { jp: "Pekarangan rumah itu cukup besar untuk kebun kecil.", en: "That house's yard is big enough for a small garden." }, accept: ["the land around a house", "a home compound"], drill: { jp: "Pekarangan rumah itu cukup besar untuk kebun", en: "That house's yard is big enough for a garden" }, hint: "puh-ka-RA-ngahn. The open ground that belongs to a house — where Indonesian families keep chickens, dry washing and grow chillies. Not halaman, which you know as a yard or a page; a pekarangan is the whole plot." },
        { id: "id-u84l2-menggarap", type: "vocab", front: "menggarap", reading: "menggarap", meaning: "to work the land", example: { jp: "Petani itu menggarap sawah yang kecil di desa.", en: "That farmer works a small paddy field in the village." }, accept: ["to cultivate", "to break up the soil"], drill: { jp: "Petani itu menggarap sawah kecil di desa", en: "That farmer works a small paddy field in the village" }, hint: "mung-GA-rahp, with the ngg hum-plus-g. Root garap. Doing the whole job of cultivating a plot. Indonesian also uses it of taking on a project: menggarap proyek." },
        { id: "id-u84l2-pupuk", type: "vocab", front: "pupuk", reading: "pupuk", meaning: "fertiliser", example: { jp: "Harga pupuk naik, jadi petani kecil susah.", en: "The price of fertiliser went up, so small farmers are struggling." }, accept: ["manure or chemical feed for plants", "plant feed"], drill: { jp: "Harga pupuk naik jadi petani kecil susah", en: "Fertiliser prices rose so small farmers struggle" }, hint: "POO-pook. Both manure and the chemical kind. Fertiliser subsidies are a standing political issue in Indonesia, so the word turns up in the news constantly. The verb memupuk is also used figuratively: memupuk persahabatan." },
        { id: "id-u84l2-menyiram", type: "vocab", front: "menyiram", reading: "menyiram", meaning: "to water plants", example: { jp: "Saya menyiram bunga setiap pagi sebelum bekerja.", en: "I water the flowers every morning before work." }, accept: ["to pour water over", "to irrigate by hand"], drill: { jp: "Saya menyiram bunga setiap pagi sebelum bekerja", en: "I water the flowers every morning before work" }, hint: "muh-nyee-RAHM, ny as one hum. Root siram. Pouring water OVER something, so it is also the verb for flushing a toilet and for dousing a fire." },
        { id: "id-u84l2-subur", type: "vocab", front: "subur", reading: "subur", meaning: "fertile", example: { jp: "Tanah di sekitar gunung itu subur sekali.", en: "The soil around that mountain is very fertile." }, accept: ["rich and productive", "good for growing"], drill: { jp: "Tanah di sekitar gunung itu subur sekali", en: "The soil around that mountain is very fertile" }, hint: "SOO-boor. Said of SOIL and of anything that grows well in it, including hair. Java's volcanic soil being subur is the standard explanation of why so many people live there." },
        { id: "id-u84l2-gersang", type: "vocab", front: "gersang", reading: "gersang", meaning: "parched from lack of rain", example: { jp: "Ladang itu gersang karena hujan tidak turun.", en: "That field is barren because the rain has not come." }, accept: ["dry and unproductive", "parched and bare"], drill: { jp: "Ladang itu gersang karena hujan tidak turun", en: "That field is barren because the rain has not come" }, hint: "GUR-sahng. Dry, bare and nothing will grow — the opposite of subur. kering, which you know, is simply dry, including a dry towel; gersang is land that has given up." },
      ],
    },
    {
      id: "id-u84l3",
      unit: 84,
      lesson: 3,
      title: "Panen dan menuai",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about taking a crop in — the harvest as an event, reaping, picking fruit — and describe a plant's parts and the state it is in.",
      items: [
        { id: "id-u84l3-panen", type: "vocab", front: "panen", reading: "panen", meaning: "a harvest", example: { jp: "Panen tahun ini lebih banyak dari tahun lalu.", en: "This year's harvest is bigger than last year's." }, accept: ["the crop taken in", "harvest time"], drill: { jp: "Panen tahun ini lebih banyak dari tahun lalu", en: "This year's harvest is bigger than last year's" }, hint: "PA-nen. The EVENT and the yield both — musim panen is the harvest season. Indonesians also use it for a windfall of any kind: panen pesanan, a flood of orders." },
        { id: "id-u84l3-menuai", type: "vocab", front: "menuai", reading: "menuai", meaning: "to reap", example: { jp: "Mereka menuai padi di sawah pada bulan ini.", en: "They are reaping the rice in the field this month." }, accept: ["to cut and gather a crop", "to bring in grain"], drill: { jp: "Mereka menuai padi di sawah bulan ini", en: "They reap the rice in the field this month" }, hint: "muh-NOO-eye. The ACT of cutting and gathering, where panen is the event. Root tuai. It has the same proverbial use as English: menuai hasil, to reap what you have sown." },
        { id: "id-u84l3-memetik", type: "vocab", front: "memetik", reading: "memetik", meaning: "to pluck fruit", example: { jp: "Anak itu memetik buah dari pohon di kebun.", en: "That child picks fruit from a tree in the garden." }, accept: ["to pick off a plant", "to gather by hand"], drill: { jp: "Anak itu memetik buah dari pohon di kebun", en: "That child picks fruit from a tree in the garden" }, hint: "muh-muh-TEEK. Root petik — nothing to do with mengetik, \"to type\", which only looks similar. The gloss says \"to pluck fruit\" because pilih, which you know, already accepts \"to pick\" from the grader. It is also the verb for plucking a guitar string." },
        { id: "id-u84l3-layu", type: "vocab", front: "layu", reading: "layu", meaning: "wilted", example: { jp: "Bunga itu layu karena saya lupa menyiram.", en: "That flower wilted because I forgot to water it." }, accept: ["drooping and dying", "withered"], drill: { jp: "Bunga itu layu karena saya lupa menyiram", en: "That flower wilted because I forgot to water it" }, hint: "LA-yoo. Drooping for want of water and about to die — a plant, a flower, and by extension a face or a mood. It is not kering, dry; a layu leaf is still soft." },
        { id: "id-u84l3-tunas", type: "vocab", front: "tunas", reading: "tunas", meaning: "a shoot", example: { jp: "Tunas kecil itu keluar dari tanah setelah hujan.", en: "Small shoots came out of the ground after the rain." }, accept: ["a new sprout", "a young growing tip"], drill: { jp: "Tunas kecil itu keluar dari tanah setelah hujan", en: "Small shoots came out of the ground after the rain" }, hint: "TOO-nahs. The new green growth pushing out, where biji — which you know — is the seed it came from. Used of young people with promise too: tunas bangsa, the nation's shoots." },
        { id: "id-u84l3-batang", type: "vocab", front: "batang", reading: "batang", meaning: "a stem", example: { jp: "Batang pohon itu besar, jadi tidak mudah runtuh.", en: "That tree's trunk is thick, so it does not fall easily." }, accept: ["a trunk", "a stalk"], drill: { jp: "Batang pohon itu besar dan tidak mudah runtuh", en: "That tree trunk is thick and does not fall easily" }, hint: "BA-tahng. The stem of a plant and the trunk of a tree, one word for both. It is also Indonesian's counter for long thin things: dua batang rokok, two cigarettes." },
      ],
    },
    {
      id: "id-u84l4",
      unit: 84,
      lesson: 4,
      title: "Jagung, kentang, dan kelapa",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name the crops an Indonesian farm actually grows — maize, potato, cassava, coconut, bamboo — and say where a branch sits on the plant.",
      items: [
        { id: "id-u84l4-cabang", type: "vocab", front: "cabang", reading: "cabang", meaning: "a branch", example: { jp: "Cabang pohon itu panjang sampai ke jendela.", en: "That tree's branch reaches all the way to the window." }, accept: ["a limb of a tree", "a bough"], drill: { jp: "Cabang pohon itu panjang sampai ke jendela", en: "That tree branch reaches to the window" }, hint: "CHA-bahng — c is CH. The branch of a tree, and also a branch office or a branch of a subject: cabang ilmu. A batang is the main stem; a cabang comes off it." },
        { id: "id-u84l4-jagung", type: "vocab", front: "jagung", reading: "jagung", meaning: "corn", example: { jp: "Jagung dari ladang itu manis sekali.", en: "The corn from that field is very sweet." }, accept: ["maize", "sweetcorn"], drill: { jp: "Jagung dari ladang itu manis sekali", en: "The corn from that field is very sweet" }, hint: "JA-goong. Maize, Indonesia's second staple after rice, and grilled on the cob at every roadside in the evening: jagung bakar. Grown on a ladang, never a sawah." },
        { id: "id-u84l4-kentang", type: "vocab", front: "kentang", reading: "kentang", meaning: "a potato", example: { jp: "Saya mau kentang goreng dan sayur saja.", en: "I want fried potato and vegetables only." }, accept: ["potatoes", "a spud"], drill: { jp: "Saya mau kentang goreng dan sayur saja", en: "I want fried potato and vegetables only" }, hint: "kun-TAHNG. kentang goreng is chips, and kentang rebus is boiled potato — both built on verbs you already know. It is a highland crop in Indonesia, grown on a ladang and not in a sawah." },
        { id: "id-u84l4-singkong", type: "vocab", front: "singkong", reading: "singkong", meaning: "cassava", example: { jp: "Singkong tumbuh baik di tanah yang gersang.", en: "Cassava grows well in barren soil." }, accept: ["manioc", "tapioca root"], drill: { jp: "Singkong tumbuh baik di tanah yang gersang", en: "Cassava grows well in barren soil" }, hint: "SEENG-kong, two ng hums. The starchy root that grows where nothing else will, which is exactly why it matters in Indonesia — it is the food of a bad year, and also a snack, fried in slices." },
        { id: "id-u84l4-kelapa", type: "vocab", front: "kelapa", reading: "kelapa", meaning: "a coconut", example: { jp: "Pohon kelapa itu tinggi sekali di dekat pantai.", en: "That coconut palm is very tall near the beach." }, accept: ["coconut palm fruit", "the coconut and its tree"], drill: { jp: "Pohon kelapa itu tinggi sekali di dekat pantai", en: "That coconut palm is very tall near the beach" }, hint: "kuh-LA-pa. The nut and, with pohon in front, the palm. Its milk is santan, and nearly every Indonesian dish you will meet contains one or the other. This card is the crop on the tree; cooked food is a later unit's business." },
        { id: "id-u84l4-bambu", type: "vocab", front: "bambu", reading: "bambu", meaning: "bamboo", example: { jp: "Dinding rumah lama itu dari bambu, bukan dari bata.", en: "That old house's walls are of bamboo, not of brick." }, accept: ["bamboo cane", "bamboo as a material"], drill: { jp: "Dinding rumah itu dari bambu bukan bata", en: "That house's walls are bamboo not brick" }, hint: "BAHM-boo. A grass, not a tree, and Indonesia's universal building and cooking material — scaffolding, walls, furniture, steamers. It is lentur, which you met in the senses unit: it bends instead of breaking, which is why it is used for scaffolding at all." },
      ],
    },
  ],
};
