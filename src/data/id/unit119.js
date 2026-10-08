// ID Unit 119 — Burung dan serangga ("Birds and insects") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u114–u126). Conventions: unit1.js §1–12, unit21.js, unit51.js
// §B1–B12, **block 1's §C1–C12 in unit88.js and §C-B4 in unit89.js** (which
// bind u88–u126 and outrank the D-series), and unit114.js §D1–D11. Read unit114.js's header before editing this.
//
// THE HOLE THIS FILLS, AND IT IS NARROWER THAN IT LOOKS BECAUSE u85 GOT THERE
// FIRST. u85 (B1) already taught `kupu-kupu` `lalat` `sayap` `bulu` `sarang`
// `menetas` `bertelur` `mencakar` `serangga` `katak` `cacing` `laba-laba`, and
// `burung` `bebek` `nyamuk` `semut` `ayam` came earlier still. So this unit does
// NOT re-teach a single one of those. What was genuinely missing: every named
// bird species, every bird body part, every bird sound, and the household insects
// an Indonesian house actually has — cockroaches, termites, lice, crickets.
//
// WHAT THIS UNIT TAKES, stated as a rule so the next seat can check it:
//   • the SPECIES u85 left — elang, merpati, angsa, lebah, capung, kumbang,
//     belalang, jangkrik, ulat, kecoa, rayap, kutu
//   • the BODY PARTS u85 left — paruh, cakar, sisik, sengat
//   • the SOUNDS AND MOVEMENTS — berkicau, bersiul, hinggap, mengepak,
//     mematuk, menukik, mengerami
//   • `kepompong`, which closes the ulat → kupu-kupu chain u85 half-built:
//     it taught the caterpillar's destination and the hatching, and had no word
//     for the stage in between.
//
// ⚠️ `cakar` AND `sengat` ARE ROOTS WHOSE me- VERBS ALREADY EXIST OR SHIP HERE,
// and that is deliberate under §D4 and unit1.js §3:
//   `cakar` (a claw, the thing) — `mencakar` (to scratch) is u85's. Second card
//     off the root, across units. The thing vs the act, the `pahat`/`memahat`
//     shape. The hint names u85's word by word, not by number (§10).
//   `sengat` (a sting, the organ) + `menyengat` (to sting) — both HERE, same
//     shape, same justification. An organ you can point at is not its verb.
//
// FOUR GLOSS NEAR-MISSES RESOLVED BY DESCRIPTION, not by dropping a card:
//   `merpati` is "a dove" and the hint gives pigeon; `angsa` is "a goose" and
//   the hint gives swan, because Indonesian does not split them. `belalang`
//   is "a grasshopper" with locust in the hint — one word, both animals.
//   `kutu` is "a louse" with tick in the hint; `tungau` (a mite) exists, probed
//   free, and is NOT carded, so kutu is not fighting a near-synonym for a gloss.
//
// FRONTS REFUSED, NAMED NOT BURIED:
//   `kepakan`  the noun off `kepak`, where `mengepak` the verb ships. Same root
//              twice with no new meaning — §D4's ❌ case.
//   `mengerat` `menggerogoti` `melata` `tungau` `mendesis` `mencabik`
//   `melayang` `bersarang` — probed free, cut at 24. `menggerogoti` (to gnaw
//              away at) is the best refill and pairs naturally with `rayap`.
//
// ⚠️ THREE WORDS I ASSUMED TAUGHT AND ARE NOT, measured before writing rather
// than after: `madu` (honey) — free, and a genuine gap nobody owns; `terbang`
// (to fly) — the course teaches `pesawat` and `bandara` and never the verb; and
// `gatal` (itchy), which is what a `kutu` example wants and cannot have. All
// three are named in hints, where prose can carry a word that no card grades.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT119 = {
  id: "id-u119",
  lang: "id",
  title: "Burung dan serangga",
  order: 119,
  stage: "b2",
  lessons: [
    {
      id: "id-u119l1",
      unit: 119,
      lesson: 1,
      title: "Elang, merpati, dan angsa",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name three birds beyond chicken and duck, and name the three hard parts a bird has that a person does not.",
      items: [
        { id: "id-u119l1-elang", type: "vocab", front: "elang", reading: "elang", meaning: "an eagle", example: { jp: "Elang itu diam di atas pohon tinggi dan melihat ke bawah.", en: "That eagle sits still at the top of a tall tree and looks down." }, accept: ["a large bird of prey", "a hawk that hunts from the air", "a big hunting bird"], drill: { jp: "Elang itu diam di atas pohon tinggi", en: "That eagle sits still at the top of a tall tree" }, hint: "UH-lang, with the ng hum. Covers eagles, hawks and kites — Indonesian does not split them finely. Garuda, the national emblem, is a mythical elang, which is why the word carries weight well beyond birdwatching." },
        { id: "id-u119l1-merpati", type: "vocab", front: "merpati", reading: "merpati", meaning: "a dove", example: { jp: "Banyak merpati di depan pasar itu setiap pagi.", en: "There are many pigeons in front of that market every morning." }, accept: ["a pigeon", "the grey bird kept for racing", "a town bird that coos"], drill: { jp: "Banyak merpati di depan pasar itu setiap pagi", en: "There are many pigeons in front of that market every morning" }, hint: "mer-PA-tee. ONE word for both dove and pigeon — Indonesian does not divide them the way English does, so merpati is the white bird of peace and the one eating rice off the pavement. Pigeon racing is a serious hobby in Java." },
        { id: "id-u119l1-angsa", type: "vocab", front: "angsa", reading: "angsa", meaning: "a goose", example: { jp: "Angsa di kebun itu lebih besar daripada bebek biasa.", en: "The geese in that yard are bigger than ordinary ducks." }, accept: ["a swan", "a large white water bird with a long neck", "a big web-footed bird"], drill: { jp: "Angsa di kebun itu lebih besar daripada bebek", en: "The geese in that yard are bigger than ducks" }, hint: "ANG-sa. From Sanskrit hamsa. Another word that does not split: angsa is a goose AND a swan, so the context or an adjective decides. Noisier and far more aggressive than the bebek you already know." },
        { id: "id-u119l1-paruh", type: "vocab", front: "paruh", reading: "paruh", meaning: "a beak", example: { jp: "Paruh burung itu panjang dan kuat untuk makan ikan.", en: "That bird's beak is long and strong for eating fish." }, accept: ["the hard mouth of a bird", "what a bird pecks with", "a bird's bill"], drill: { jp: "Paruh burung itu panjang dan kuat sekali", en: "That bird's beak is long and very strong" }, hint: "PA-rooh. ⚠️ Also a completely separate word meaning half: paruh waktu is part time, and paruh kedua is the second half of a match. Same spelling, nothing in common with the bird." },
        { id: "id-u119l1-cakar", type: "vocab", front: "cakar", reading: "cakar", meaning: "a claw", example: { jp: "Cakar elang itu sangat kuat dan bisa membawa ikan besar.", en: "That eagle's claws are very strong and can carry a big fish." }, accept: ["the hooked nail of a bird or cat", "a talon", "a sharp curved nail on an animal"], drill: { jp: "Cakar elang itu sangat kuat dan besar", en: "That eagle's claws are very strong and big" }, hint: "CHA-kar — c is CH. The THING, where mencakar, to scratch, which you met in the animals unit, is the act. Also a food: ceker ayam, chicken feet, is the same word in its Javanese-flavoured spelling." },
        { id: "id-u119l1-sisik", type: "vocab", front: "sisik", reading: "sisik", meaning: "a scale", example: { jp: "Sisik ikan itu harus hilang dulu sebelum memasak.", en: "The fish's scales have to come off before cooking." }, accept: ["one of the plates on a fish or snake", "the small hard plate on a reptile", "one of the overlapping plates on an animal"], drill: { jp: "Sisik ikan itu harus hilang sebelum memasak", en: "The fish scales have to come off before cooking" }, hint: "SEE-seek. On a fish, a snake, a lizard — and on a bird's legs, which is where it belongs in this lesson. Also used of flaking skin and of peeling paint: dinding yang bersisik." },
      ],
    },
    {
      id: "id-u119l2",
      unit: 119,
      lesson: 2,
      title: "Berkicau, hinggap, dan mengerami",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Say what a bird is doing — singing, whistling, perching, flapping, diving, pecking, sitting on eggs — none of which the course could say before.",
      items: [
        { id: "id-u119l2-berkicau", type: "vocab", front: "berkicau", reading: "berkicau", meaning: "to chirp", example: { jp: "Burung kecil itu berkicau sejak pagi di depan rumah.", en: "That small bird has been chirping since morning in front of the house." }, accept: ["to sing as a bird does", "to make bird calls", "to twitter"], drill: { jp: "Burung kecil itu berkicau sejak pagi sekali", en: "That small bird has been chirping since early morning" }, hint: "ber-kee-CHAU — c is CH, and the last part rhymes with cow. Burung kicauan, songbirds, are kept and competed in Indonesia the way Europeans race pigeons. Used of a person who talks too much, exactly as English uses twitter." },
        { id: "id-u119l2-bersiul", type: "vocab", front: "bersiul", reading: "bersiul", meaning: "to whistle", example: { jp: "Dia bersiul waktu jalan sendiri di jalan gelap.", en: "He whistles when walking alone on a dark road." }, accept: ["to make a note with the lips", "to pipe a tune without words", "to blow a tune through the lips"], drill: { jp: "Dia bersiul waktu jalan sendiri di jalan gelap", en: "He whistles when walking alone on a dark road" }, hint: "ber-SEE-ool. Of a person and of a bird and of the wind. ⚠️ A cultural note worth having: whistling indoors at night is considered unlucky in much of Indonesia, so the example puts him outdoors on purpose." },
        { id: "id-u119l2-hinggap", type: "vocab", front: "hinggap", reading: "hinggap", meaning: "to perch", example: { jp: "Kupu-kupu itu hinggap di kelopak mawar merah.", en: "That butterfly settles on a red rose petal." }, accept: ["to settle on a branch", "to land on something and stay", "to come to rest on a surface"], drill: { jp: "Kupu-kupu itu hinggap di kelopak mawar merah", en: "That butterfly settles on a red rose petal" }, hint: "HING-gahp, with ngg. Of a bird, an insect, a bat — anything that flies and then stops. Used of an illness arriving: penyakit itu hinggap, the disease settled on him. The animals unit described a butterfly on a flower because the course had no verb for it; this is the verb." },
        { id: "id-u119l2-mengepak", type: "vocab", front: "mengepak", reading: "mengepak", meaning: "to flap", example: { jp: "Angsa itu mengepak kuat waktu mau pergi dari air.", en: "That goose flaps hard when it wants to leave the water." }, accept: ["to beat the wings", "to work the wings up and down", "to move the wings hard"], drill: { jp: "Angsa itu mengepak kuat waktu mau pergi", en: "That goose flaps hard when it wants to leave" }, hint: "muh-NGUH-pahk, from kepak, a wing beat. ⚠️ A homograph worth flagging: mengepak also means to pack things into boxes, from a different root. Context separates them, and no bird is being boxed." },
        { id: "id-u119l2-menukik", type: "vocab", front: "menukik", reading: "menukik", meaning: "to dive from the air", example: { jp: "Elang itu menukik cepat ke air untuk mengambil ikan.", en: "That eagle dives fast to the water to take a fish." }, accept: ["to swoop down steeply", "to drop fast through the air", "to go into a steep descent"], drill: { jp: "Elang itu menukik cepat ke air untuk ikan", en: "That eagle dives fast to the water for a fish" }, hint: "muh-noo-KEEK. A steep downward plunge, nose first — of a bird, a plane, and of a graph: harga menukik is a price falling off a cliff. The opposite of menjulang, which you met in the aviation unit." },
        { id: "id-u119l2-mengerami", type: "vocab", front: "mengerami", reading: "mengerami", meaning: "to sit on eggs", example: { jp: "Ayam itu mengerami telur di kandang selama tiga minggu.", en: "That hen sits on her eggs in the coop for three weeks." }, accept: ["to brood", "to keep eggs warm until they hatch", "to cover eggs to warm them"], drill: { jp: "Ayam itu mengerami telur di kandang tiga minggu", en: "That hen sits on her eggs in the coop for three weeks" }, hint: "muh-nguh-RA-mee, from eram. This is the step between bertelur and menetas, both of which you met in the animals unit — the course taught laying and hatching and had no word for the three weeks in between." },
      ],
    },
    {
      id: "id-u119l3",
      unit: 119,
      lesson: 3,
      title: "Lebah, capung, dan kumbang",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the insects of a garden and a field, and follow a caterpillar through the cocoon to the butterfly.",
      items: [
        { id: "id-u119l3-lebah", type: "vocab", front: "lebah", reading: "lebah", meaning: "a bee", example: { jp: "Banyak lebah datang ke bunga di kebun waktu pagi.", en: "Many bees come to the flowers in the garden in the morning." }, accept: ["the insect that makes honey", "a stinging insect that pollinates", "a buzzing insect of flowers"], drill: { jp: "Banyak lebah datang ke bunga di kebun", en: "Many bees come to the flowers in the garden" }, hint: "luh-BAH. Honey is madu, which this course does not teach anywhere — worth knowing as a word even though it has no card: madu lebah hutan, wild forest honey, is a real Indonesian product. Sarang lebah is a beehive, using the sarang you already know." },
        { id: "id-u119l3-capung", type: "vocab", front: "capung", reading: "capung", meaning: "a dragonfly", example: { jp: "Capung banyak di atas air sawah waktu siang.", en: "There are many dragonflies over the paddy water at midday." }, accept: ["the long thin insect that hovers over water", "a four-winged insect of ponds", "a darting insect with a long body"], drill: { jp: "Capung banyak di atas air sawah waktu siang", en: "There are many dragonflies over the paddy water at midday" }, hint: "cha-POONG — c is CH. Over every sawah in the country, and caught by children with a stick and glue. A sign of clean water, which is why their disappearance from a field is noticed." },
        { id: "id-u119l3-kumbang", type: "vocab", front: "kumbang", reading: "kumbang", meaning: "a beetle", example: { jp: "Ada kumbang hitam besar di bawah daun kering itu.", en: "There is a big black beetle under that dry leaf." }, accept: ["a hard-shelled insect", "an insect with armoured wing cases", "a hard-backed crawling insect"], drill: { jp: "Ada kumbang hitam besar di bawah daun kering", en: "There is a big black beetle under that dry leaf" }, hint: "KOOM-bang. Any hard-shelled insect, from a rhinoceros beetle to a weevil. In old Malay poetry the kumbang is the lover who visits the flower, so the word turns up in love songs." },
        { id: "id-u119l3-belalang", type: "vocab", front: "belalang", reading: "belalang", meaning: "a grasshopper", example: { jp: "Belalang di sawah itu makan daun padi muda.", en: "The grasshoppers in that paddy eat young rice leaves." }, accept: ["the jumping insect of the fields", "a locust", "a long-legged jumping insect"], drill: { jp: "Belalang di sawah itu makan daun padi muda", en: "The grasshoppers in that paddy eat young rice leaves" }, hint: "buh-LA-lang. Grasshopper AND locust — one Indonesian word for both, so a swarm is still belalang. Fried and salted, belalang goreng is a snack in Gunungkidul, which is the kind of fact that makes a word stick." },
        { id: "id-u119l3-ulat", type: "vocab", front: "ulat", reading: "ulat", meaning: "a caterpillar", example: { jp: "Ada ulat hijau kecil di pucuk daun muda itu.", en: "There is a small green caterpillar on that young leaf tip." }, accept: ["the grub that becomes a butterfly", "a soft crawling larva", "a soft-bodied insect young"], drill: { jp: "Ada ulat hijau kecil di pucuk daun muda", en: "There is a small green caterpillar on that young leaf tip" }, hint: "OO-laht. Not the same word as ular, a snake, which you already know — one letter apart and worth a careful look. Ulat bulu, a hairy caterpillar, is the kind that stings." },
        { id: "id-u119l3-kepompong", type: "vocab", front: "kepompong", reading: "kepompong", meaning: "a cocoon", example: { jp: "Ulat itu masuk ke kepompong sebelum jadi kupu-kupu.", en: "That caterpillar goes into a cocoon before becoming a butterfly." }, accept: ["a chrysalis", "the case a caterpillar wraps itself in", "the closed shell an insect changes inside"], drill: { jp: "Ulat itu masuk ke kepompong sebelum jadi kupu-kupu", en: "That caterpillar goes into a cocoon before becoming a butterfly" }, hint: "kuh-pom-PONG. The missing link in this course: the animals unit taught kupu-kupu and menetas and had no word for the stage between the ulat and the butterfly. Used figuratively for someone sheltered who has not come out yet." },
      ],
    },
    {
      id: "id-u119l4",
      unit: 119,
      lesson: 4,
      title: "Kecoa, rayap, dan kutu",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Report a household pest problem in Indonesian — roaches, termites, lice, crickets at night — and say that something stung you.",
      items: [
        { id: "id-u119l4-kecoa", type: "vocab", front: "kecoa", reading: "kecoa", meaning: "a cockroach", example: { jp: "Ada kecoa di bawah lemari dapur itu.", en: "There is a cockroach under that kitchen cupboard." }, accept: ["the brown insect of a warm kitchen", "a roach", "a flat brown kitchen insect"], drill: { jp: "Ada kecoa di bawah lemari dapur itu", en: "There is a cockroach under that kitchen cupboard" }, hint: "kuh-CHO-ah — c is CH. Also spelled kecoak, and both are standard. In this climate every house has them, so this is a practical word and not a dramatic one." },
        { id: "id-u119l4-rayap", type: "vocab", front: "rayap", reading: "rayap", meaning: "a termite", example: { jp: "Rayap makan kayu dari dalam, jadi tidak terlihat dari luar.", en: "Termites eat wood from the inside, so it cannot be seen from outside." }, accept: ["the insect that eats wood from inside", "a white ant", "an insect that destroys timber"], drill: { jp: "Rayap makan kayu dari dalam rumah itu", en: "Termites eat the wood from inside that house" }, hint: "RA-yahp. The reason jati, the teak you met in the plants unit, costs what it does — it resists them and cheap wood does not. Merayap, from the same root, means to creep along, and it is what traffic does in Jakarta." },
        { id: "id-u119l4-kutu", type: "vocab", front: "kutu", reading: "kutu", meaning: "a louse", example: { jp: "Anak itu ada kutu di kepala dan harus memakai obat.", en: "That child has lice in her hair and has to use a treatment." }, accept: ["a tick", "a small biting parasite on skin", "a tiny insect that lives on a body"], drill: { jp: "Anak itu ada kutu di kepala", en: "That child has lice in her hair" }, hint: "KOO-too. Covers lice, fleas and ticks — Indonesian does not separate them, so kutu kasur is a bedbug and kutu air is athlete's foot. Kutu buku, a book louse, is a bookworm, and that is a compliment." },
        { id: "id-u119l4-jangkrik", type: "vocab", front: "jangkrik", reading: "jangkrik", meaning: "a cricket", example: { jp: "Bunyi jangkrik di kebun itu kuat sekali waktu malam.", en: "The sound of crickets in that garden is very loud at night." }, accept: ["the insect that chirps at night", "the insect kept in a cage for its song", "a night insect that sings"], drill: { jp: "Bunyi jangkrik di kebun itu kuat waktu malam", en: "The sound of crickets in that garden is loud at night" }, hint: "JANG-kreek, with the ng hum. The night sound of rural Java, and also kept in cages and sold as bird food. ⚠️ Jangkrik! on its own is a mild Javanese exclamation, roughly \"oh for goodness sake\" — useful to recognise, risky to use." },
        { id: "id-u119l4-sengat", type: "vocab", front: "sengat", reading: "sengat", meaning: "the stinger of an insect", example: { jp: "Sengat lebah itu kecil tetapi sakit sekali.", en: "A bee's sting is small but hurts a great deal." }, accept: ["the sharp part a bee stings with", "the organ an insect jabs with", "a stinging spine on an insect"], drill: { jp: "Sengat lebah itu kecil tetapi sakit sekali", en: "A bee's sting is small but hurts a great deal" }, hint: "SUH-ngaht. The ORGAN, the thing on the animal — the verb is the next card. Same noun-then-verb pair as cakar and mencakar earlier in this unit, and Indonesian builds a lot of vocabulary this way." },
        { id: "id-u119l4-menyengat", type: "vocab", front: "menyengat", reading: "menyengat", meaning: "to sting", example: { jp: "Lebah itu menyengat tangan saya waktu saya mengambil bunga.", en: "That bee stung my hand when I picked a flower." }, accept: ["to jab with a sting", "to inject venom with a sting", "to strike with a stinger"], drill: { jp: "Lebah itu menyengat tangan saya waktu pagi", en: "That bee stung my hand in the morning" }, hint: "muh-nyuh-NGAHT — ny is one sound. Of a bee, a wasp, a scorpion. Also of a smell that hits you: bau yang menyengat is a sharp, stinging smell, and that is the sense you will meet most often on a menu or in a complaint." },
      ],
    },
  ],
};
