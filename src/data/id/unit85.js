// ID Unit 85 — Hewan dan hidupnya ("Animals and how they live") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u77–u87). The 12 conventions in unit1.js and the 10 A2 conventions
// in unit21.js BIND this file. Read both before editing.
//
// THE HOLE THIS FILLS, measured against all 1200 A1+A2 cards. A2 taught twelve
// animal NAMES and then stopped: `kucing` · `anjing` · `ayam` · `bebek` ·
// `sapi` · `kambing` · `kuda` · `monyet` · `gajah` · `burung` · `ular` ·
// `nyamuk` · `semut`, plus `binatang`, `ikan` and `ekor`. Not one word for a
// wing, fur, a nest, a cage, an egg being laid, hatching, biting, scratching,
// keeping an animal, or for whether an animal is wild, tame or dangerous. A
// learner could list a zoo and could not say an animal bit them.
//
// ⚠️ `beruang` WAS ON THE CANDIDATE LIST AND IS DELIBERATELY NOT CARDED.
// IT IS A HOMOGRAPH TRAP, AND BOTH HALVES ARE LIVE IN THIS COURSE:
//   • `beruang` = a bear.
//   • `beruang` = ber- + `uang`, "wealthy" — and `uang` (money) is taught in
//     UNIT 1, lesson 2, so the learner has had the pieces since their first week.
// A single card cannot teach both, a hint naming both makes the meaning card a
// coin-toss, and the `type:meaning` grader would accept one answer for a prompt
// with two right ones. The brief allowed carding it with a hint or dropping it.
// DROPPED — there were 23 other clean candidates, and a bear is not worth a card
// the learner cannot be graded on. `kelinci` (a rabbit) and `serangga` (an
// insect) took the space, and `serangga` closes a core-inventory gap: the course
// taught `semut` and `nyamuk` and had no word for an insect.
//
// ⚠️ THE BOUNDARY WITH u86, WHICH IS ALSO MINE: this unit owns the LIVING
// animal, u86 owns the food. An animal kept to be eaten is still this unit's
// (`memelihara`, `kandang`); the meat on the plate is `daging`, which is u86's,
// and `sapi`/`ayam` are already taught as animals in A2. So: no food words here.
//
// FOUR FRONTS WERE BLOCKED AS ALREADY TAUGHT and are not re-carded: `ular`,
// `burung`, `nyamuk` (u19) and `ikan` (u6). `ekor` (u27) too — it is taught as
// the counter for animals, and as a tail; this unit does not touch it.
//
// TWO PROBE FLAGS, ONE REAL:
//   `babi`     flagged against `sebab` (because) and `menyebabkan`. Letters only.
//              CLEAN.
//   `bertelur` REAL. `telur` (an egg) is taught, so this is a second card off
//              that root. Two off one root, A6 ceiling is three, hint names it.
//              `mencakar` is likewise the only card off root `cakar`.
//
// FOLD AND DRILL NOTES (unit1.js §9 and the whole-word rule):
//   • `kupu-kupu`, `kura-kura` and `laba-laba` are reduplications that are NOT
//     plurals — each is its own word, so convention 5 permits them. They fold to
//     "kupukupu", "kurakura", "labababa"? no: "labalaba". All three are unique in
//     the corpus, confirmed by `reading-taken.mjs`.
//   • A drill containing `kupu-kupu` DOES whole-word-match at index 0 because a
//     hyphen is not a letter, but no shorter front `kupu` exists, so nothing is
//     shadowed. Same for the other two.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT85 = {
  id: "id-u85",
  lang: "id",
  title: "Hewan dan hidupnya",
  order: 85,
  stage: "b1",
  lessons: [
    {
      id: "id-u85l1",
      unit: 85,
      lesson: 1,
      title: "Harimau, singa, dan kelinci",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Name the larger animals the A2 band left out — tiger, lion, pig, rabbit, rat, turtle — and say which of them Indonesia actually has.",
      items: [
        { id: "id-u85l1-harimau", type: "vocab", front: "harimau", reading: "harimau", meaning: "a tiger", example: { jp: "Harimau di hutan Sumatra hampir hilang.", en: "The tiger in Sumatra's forests is almost gone." }, accept: ["a tiger in the wild", "the striped big cat"], drill: { jp: "Harimau di hutan Sumatra hampir hilang", en: "The tiger in Sumatra's forests is almost gone" }, hint: "ha-ri-MAU, ending like English \"cow\". The Sumatran tiger is a real and endangered animal, so this is not a zoo word in Indonesia. Also written macan in Javanese-influenced Indonesian." },
        { id: "id-u85l1-singa", type: "vocab", front: "singa", reading: "singa", meaning: "a lion", example: { jp: "Singa tidak ada di Indonesia, hanya di kebun binatang.", en: "There are no lions in Indonesia, only in the zoo." }, accept: ["the maned big cat", "a lion in a zoo"], drill: { jp: "Singa tidak ada di Indonesia hanya di kebun binatang", en: "Lions are not in Indonesia only in the zoo" }, hint: "SEE-nga, with the ng hum. From Sanskrit, and the same root as Singapura, \"lion city\". The example's kebun binatang, literally animal garden, is the zoo — kebun you met in the farming unit." },
        { id: "id-u85l1-babi", type: "vocab", front: "babi", reading: "babi", meaning: "a pig", example: { jp: "Umat Islam tidak makan babi.", en: "Muslims do not eat pork." }, accept: ["a hog", "swine"], drill: { jp: "Babi ada di kebun belakang rumah itu", en: "There is a pig in the yard behind that house" }, hint: "BA-bee. Worth knowing precisely because of what it means socially: babi is haram for the Muslim majority, so menus in Bali and in Chinese-Indonesian restaurants mark it explicitly. It shares no root with sebab, \"because\"." },
        { id: "id-u85l1-kelinci", type: "vocab", front: "kelinci", reading: "kelinci", meaning: "a rabbit", example: { jp: "Anak saya memelihara dua kelinci di pekarangan.", en: "My child keeps two rabbits in the yard." }, accept: ["a bunny", "a hare"], drill: { jp: "Anak saya punya dua kelinci di pekarangan", en: "My child has two rabbits in the yard" }, hint: "kuh-LEEN-chee — c is CH. The usual Indonesian pet after cats and birds. kelinci percobaan, a test rabbit, is how Indonesian says \"guinea pig\" in the figurative sense." },
        { id: "id-u85l1-tikus", type: "vocab", front: "tikus", reading: "tikus", meaning: "a rat", example: { jp: "Ada tikus di dapur, jadi makanan harus di lemari.", en: "There is a rat in the kitchen, so food has to go in the cupboard." }, accept: ["a mouse", "a rodent"], drill: { jp: "Ada tikus di dapur jadi makanan harus di lemari", en: "There is a rat in the kitchen so food goes in the cupboard" }, hint: "TEE-koos. Rat AND mouse — Indonesian does not separate them, so size goes in an adjective. tikus is also the standard metaphor for a corrupt official: tikus kantor." },
        { id: "id-u85l1-kurakura", type: "vocab", front: "kura-kura", reading: "kurakura", meaning: "a turtle", example: { jp: "Kura-kura itu jalan sangat lambat di pasir.", en: "That turtle walks very slowly on the sand." }, accept: ["a tortoise", "a shelled reptile"], drill: { jp: "Kura-kura itu jalan sangat lambat di pasir", en: "That turtle walks very slowly on the sand" }, hint: "KOO-ra-KOO-ra. A doubled word that is NOT a plural — like hati-hati and kira-kira, which you already know, the doubling IS the word. One turtle is still kura-kura." },
      ],
    },
    {
      id: "id-u85l2",
      unit: 85,
      lesson: 2,
      title: "Serangga, lalat, dan cacing",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Name the small creatures Indonesian daily life is full of, and use the general word for an insect instead of listing them one by one.",
      items: [
        { id: "id-u85l2-katak", type: "vocab", front: "katak", reading: "katak", meaning: "a frog", example: { jp: "Katak di sawah itu bunyi setiap malam.", en: "The frogs in that paddy field sound every night." }, accept: ["a toad", "an amphibian"], drill: { jp: "Katak di sawah itu bunyi setiap malam", en: "The frogs in that paddy field sound every night" }, hint: "KA-tahk. Also kodok, which is just as common in speech. The sound of katak in the sawah after rain is one of the defining noises of rural Java." },
        { id: "id-u85l2-serangga", type: "vocab", front: "serangga", reading: "serangga", meaning: "an insect", example: { jp: "Banyak serangga datang ke lampu pada malam hari.", en: "Many insects come to the lamp at night." }, accept: ["a bug", "insects as a group"], drill: { jp: "Banyak serangga datang ke lampu pada malam hari", en: "Many insects come to the lamp at night" }, hint: "suh-RAHNG-ga, with ngg — the hum plus a hard g. The GENERAL word. You already know semut and nyamuk, two particular insects, and until this card the course had no way to say \"insect\" at all." },
        { id: "id-u85l2-lalat", type: "vocab", front: "lalat", reading: "lalat", meaning: "a fly", example: { jp: "Makanan itu harus di lemari supaya lalat tidak datang.", en: "The food has to be in the cupboard so flies do not come." }, accept: ["a housefly", "a buzzing fly"], drill: { jp: "Makanan harus di lemari supaya lalat tidak datang", en: "Food must be in the cupboard so flies do not come" }, hint: "LA-laht. The housefly. Food is kept covered in every Indonesian warung for exactly this reason, and a lalat in your drink is the standard complaint." },
        { id: "id-u85l2-kupukupu", type: "vocab", front: "kupu-kupu", reading: "kupukupu", meaning: "a butterfly", example: { jp: "Kupu-kupu itu sangat cantik dan kuning.", en: "That butterfly is very pretty and yellow." }, accept: ["a moth", "a winged insect with broad wings"], drill: { jp: "Kupu-kupu itu ada di bunga di kebun", en: "That butterfly is on a flower in the garden" }, hint: "KOO-poo-KOO-poo. Another non-plural reduplication: the doubling is the word, and one butterfly is kupu-kupu. The course teaches no verb for perching, so the example describes the butterfly instead." },
        { id: "id-u85l2-labalaba", type: "vocab", front: "laba-laba", reading: "labalaba", meaning: "a spider", example: { jp: "Ada laba-laba besar di dinding kamar mandi.", en: "There is a big spider on the bathroom wall." }, accept: ["an arachnid", "a web-spinning creature"], drill: { jp: "Ada laba-laba besar di kamar mandi", en: "There is a big spider in the bathroom" }, hint: "LA-ba-LA-ba. The third non-plural reduplication in this unit. Note that laba on its own means profit, which you already know — but laba-laba is not two profits, it is a spider, and that is exactly why convention 5 treats a doubled word as its own lexeme." },
        { id: "id-u85l2-cacing", type: "vocab", front: "cacing", reading: "cacing", meaning: "a worm", example: { jp: "Cacing di tanah itu baik untuk kebun.", en: "Worms in the soil are good for a garden." }, accept: ["an earthworm", "a soil worm"], drill: { jp: "Cacing di tanah itu baik untuk kebun", en: "Worms in the soil are good for a garden" }, hint: "CHA-ching — c is CH both times. The earthworm, and also an intestinal one, which is why cacingan is a childhood illness Indonesians talk about openly." },
      ],
    },
    {
      id: "id-u85l3",
      unit: 85,
      lesson: 3,
      title: "Sayap, bulu, dan sarang",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe an animal's body and where it lives, and talk about it laying eggs and the eggs hatching.",
      items: [
        { id: "id-u85l3-sayap", type: "vocab", front: "sayap", reading: "sayap", meaning: "a wing", example: { jp: "Sayap burung itu panjang dan sangat halus.", en: "That bird's wings are long and very soft." }, accept: ["a bird's wing", "a wing of an insect or plane"], drill: { jp: "Sayap burung itu panjang dan sangat halus", en: "That bird's wings are long and very soft" }, hint: "SA-yahp. A bird's, an insect's or an aeroplane's. Also a wing of a building and a wing in football, the same two extra senses English gives it." },
        { id: "id-u85l3-bulu", type: "vocab", front: "bulu", reading: "bulu", meaning: "fur", example: { jp: "Bulu kucing itu putih dan sangat halus.", en: "That cat's fur is white and very soft." }, accept: ["an animal's coat", "a feather"], drill: { jp: "Bulu kucing itu putih dan sangat halus", en: "That cat's fur is white and very soft" }, hint: "BOO-loo. Fur, feathers AND body hair — one word for all three, where rambut, which you know, is specifically the hair on a head. You have met it inside bulu tangkis, badminton, which is literally \"struck feather\"." },
        { id: "id-u85l3-sarang", type: "vocab", front: "sarang", reading: "sarang", meaning: "a nest", example: { jp: "Ada sarang burung di cabang pohon itu.", en: "There is a bird's nest in that tree's branch." }, accept: ["a nest of a bird or insect", "a lair"], drill: { jp: "Ada sarang burung di cabang pohon itu", en: "There is a bird's nest in that tree's branch" }, hint: "SA-rahng. A nest built by the animal itself — birds, ants, bees. Indonesia exports sarang burung, edible swiftlet nests, which is why you will see the phrase on signs. Figuratively a sarang is a den of criminals." },
        { id: "id-u85l3-kandang", type: "vocab", front: "kandang", reading: "kandang", meaning: "a pen for animals", example: { jp: "Ayam itu tidur di kandang di belakang rumah.", en: "The chickens sleep in a pen behind the house." }, accept: ["an animal enclosure", "a coop or stall"], drill: { jp: "Ayam itu tidur di kandang di belakang rumah", en: "The chickens sleep in a pen behind the house" }, hint: "KAHN-dahng. The pen or coop a PERSON builds, where a sarang is built by the animal. In football commentary kandang means a home ground: main di kandang sendiri." },
        { id: "id-u85l3-bertelur", type: "vocab", front: "bertelur", reading: "bertelur", meaning: "to lay eggs", example: { jp: "Ayam itu bertelur setiap pagi di kandang.", en: "That hen lays eggs every morning in the pen." }, accept: ["to produce eggs", "to lay"], drill: { jp: "Ayam itu bertelur setiap pagi di kandang", en: "That hen lays eggs every morning in the pen" }, hint: "bur-tuh-LOOR. You already know telur, an egg — ber- plus a noun means \"to have or produce that thing\", so bertelur is literally to have-egg. The same frame gave you berguna and berisi." },
        { id: "id-u85l3-menetas", type: "vocab", front: "menetas", reading: "menetas", meaning: "to hatch", example: { jp: "Telur itu menetas setelah tiga minggu.", en: "The eggs hatched after three weeks." }, accept: ["to break out of the egg", "to emerge from an egg"], drill: { jp: "Telur itu menetas setelah tiga minggu", en: "The eggs hatched after three weeks" }, hint: "muh-nuh-TAHS. Root tetas. What the egg DOES — Indonesian puts the egg as the subject, exactly as English does. The chick that comes out is an anak ayam." },
      ],
    },
    {
      id: "id-u85l4",
      unit: 85,
      lesson: 4,
      title: "Liar, jinak, dan buas",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Say whether an animal is wild, tame or dangerous, whether someone keeps it, and what it does if you get too close.",
      items: [
        { id: "id-u85l4-memelihara", type: "vocab", front: "memelihara", reading: "memelihara", meaning: "to keep an animal", example: { jp: "Mereka memelihara kambing dan ayam di desa.", en: "They keep goats and chickens in the village." }, accept: ["to raise and look after", "to bring up an animal"], drill: { jp: "Mereka memelihara kambing dan ayam di desa", en: "They keep goats and chickens in the village" }, hint: "muh-muh-lee-HA-ra, five syllables. Keeping and looking after an animal over time, whether as a pet or for food. Root pelihara. It extends to maintaining anything: memelihara kesehatan, to look after your health." },
        { id: "id-u85l4-liar", type: "vocab", front: "liar", reading: "liar", meaning: "wild", example: { jp: "Binatang liar itu tidak boleh ada di rumah.", en: "That wild animal must not be in the house." }, accept: ["living in the wild", "untamed"], drill: { jp: "Binatang liar itu tidak boleh ada di rumah", en: "That wild animal must not be in the house" }, hint: "LEE-ar, two syllables. Living outside human control. Indonesian also applies it to anything unauthorised: parkir liar is illegal parking, pedagang liar an unlicensed hawker." },
        { id: "id-u85l4-jinak", type: "vocab", front: "jinak", reading: "jinak", meaning: "tame", example: { jp: "Kuda itu jinak, jadi anak kecil bisa naik.", en: "That horse is tame, so a small child can ride it." }, accept: ["used to people", "docile"], drill: { jp: "Kuda itu jinak jadi anak kecil bisa naik", en: "That horse is tame so a small child can ride" }, hint: "JEE-nahk. The opposite of liar: used to people and safe to handle. The verb menjinakkan is to tame, and it is also what Indonesian says about defusing a bomb." },
        { id: "id-u85l4-buas", type: "vocab", front: "buas", reading: "buas", meaning: "ferocious", example: { jp: "Harimau itu buas, jadi kandang harus kuat.", en: "That tiger is ferocious, so the enclosure has to be strong." }, accept: ["savage and dangerous", "predatory"], drill: { jp: "Harimau itu buas jadi kandang harus kuat", en: "That tiger is ferocious so the pen must be strong" }, hint: "BOO-ahs, two syllables. Dangerous because it attacks — which liar is not: a liar rabbit is wild and harmless. kejam, from the character unit, is cruelty in a person; buas is a predator's nature." },
        { id: "id-u85l4-menggigit", type: "vocab", front: "menggigit", reading: "menggigit", meaning: "to bite", example: { jp: "Anjing itu menggigit kaki saya waktu kecil.", en: "That dog bit my leg when I was small." }, accept: ["to nip with the teeth", "to sink teeth into"], drill: { jp: "Anjing itu menggigit kaki saya waktu kecil", en: "That dog bit my leg when I was small" }, hint: "mung-GEE-geet, the ngg hum-plus-g. Root gigit, and you already know gigi, a tooth — same family. Used of a person biting food too, and figuratively of cold that bites." },
        { id: "id-u85l4-mencakar", type: "vocab", front: "mencakar", reading: "mencakar", meaning: "to scratch with claws", example: { jp: "Kucing itu mencakar kursi sampai rusak.", en: "That cat scratched the chair until it was ruined." }, accept: ["to claw at", "to rake with claws"], drill: { jp: "Kucing itu mencakar kursi sampai rusak", en: "That cat scratched the chair until it was ruined" }, hint: "mun-CHA-kar — c is CH. Root cakar, a claw. The gloss says \"with claws\" on purpose: a person scratching an itch is a different verb, and this card is about the animal." },
      ],
    },
  ],
};
