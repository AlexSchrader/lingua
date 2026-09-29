// ID Unit 25 — Membuat, memakai, membawa ("Making, using, carrying") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 1 (u21–u30). unit1.js's 12 conventions and unit21.js's A1–A10 BIND
// this file.
//
// 🚨 RETHEMED FROM "Health and the body", because **A1's u11 IS body and health,
// all 24 cards of it** — kepala · tangan · kaki · mata · mulut · hidung · telinga
// · gigi · perut · badan · rambut · wajah · sakit · demam · batuk · pusing ·
// lelah · pilek · dokter · obat · sehat · rumah sakit · apotek · sembuh. Nothing
// was left to add at A2 that was not either a specialism (blood, nurse, injection)
// or a word the u11 header had already deliberately named and declined
// (`kesehatan`, `capek`, `tua`, `muka`). Authoring the slot as written would have
// been a second health unit chasing the first.
//
// THE HOLE IT FILLS INSTEAD: **A1 had almost no verbs for handling objects.** It
// taught `memberi` (to give) and `memakai` (to wear) and stopped. Measured
// against all 480 A1 cards: no *to take*, no *to bring*, no *to put*, no *to
// hold*, no *to lift*, no *to send*, no *to get*, no *to store*, no *to swap*,
// no *to collect*, no *to make*, no *to repair*, no *to replace*, no *to cut*,
// no *to become*, no *to happen*, no *to grow*, no *to disappear*. A learner
// could name every object in a kitchen and could not pick one up.
//   l1  moving things  — mengambil · membawa · menaruh · memegang · mengangkat · melepas
//   l2  passing things — mengirim · mendapat · menyimpan · membagi · menukar · mengumpulkan
//   l3  making things  — membuat · memperbaiki · mengganti · mengubah · memotong · memasang
//   l4  things changing — menjadi · terjadi · berubah · tumbuh · hilang · rusak
//
// ⚠️ `mengambil` IS GLOSSED "to pick up", NOT "to take", and it is a measured
// collision: A1's `naik` (to ride) carries **"to take"** in its accept[] — the
// *take a bus* sense — so "to take" here would give one prompt two right answers.
// Verified against the live array. unit21.js A4.
//
// 🚨 **`menggunakan` (to use) IS NOT CARDED ANYWHERE IN THIS BAND, AND THAT IS A
// DELIBERATE LOSS.** A1's `memakai` is glossed "to wear" but its accept[] carries
// **"to use"** — so the concept *use* is already claimed, and a `menggunakan`
// card glossed "to use" would collide head-on. There is no honest alternative
// gloss: "to operate" and "to employ" are both wrong for the ordinary sense. So
// the word goes in a hint rather than on a card, and **blocks 2 and 3 must not
// card it either** — the collision does not go away at u35 or u45. If it is ever
// wanted as a card, the fix is to edit `memakai`'s accept[] in A1, which is a
// separate decision about merged content and not one to bury in a new unit.
//
// ⚠️ THE me-/ber- VALENCY PAIR IS THE POINT OF l3 AND l4 TOGETHER. `mengubah` (I
// change something) and `berubah` (it changes by itself) are one root and two
// verbs, and this is the single commonest mistake an English speaker makes in
// Indonesian, because English uses *change* for both. A learner given only one
// WILL produce the wrong one. So they are carded separately, in different lessons,
// and each hint names the other. unit21.js A6 sets this out as the rule.
//
// AFFIX ROOTS CHECKED BY HAND (the LEXEME probe fails open for Indonesian —
// unit1.js convention 3; a `free` verdict on a prefixed form is worth nothing, so
// every root here was stripped off and grepped in TAUGHT-WORDS.md):
//   mendapat → dapat     ⚠️ root NOT taught, and `pendapat` (an opinion) is this
//     block's other card off it. Neither whole-word-contains the other, so both
//     drills route: "mendapat" has "dapat" at index 3, "pendapat" at index 2,
//     each preceded by "n". unit21.js A6.
//   memperbaiki → baik   ⚠️ `baik` IS taught ("fine"), and `terbaik` (best) is
//     carded later in this block — **three cards off one root**, each a different
//     word. Drill-safe: "baik" sits at index 6 of "memperbaiki" followed by "i",
//     a letter, so findWholeWord("baik") does not match inside it.
//   mengubah / berubah → ubah   root not taught; see the note above.
//   mengumpulkan → kumpul · menyimpan → simpan · menukar → tukar ·
//   membagi → bagi ⚠️ (`bagian`, a part, IS taught — but its root `bagi` is not a
//     taught front, and *a part* does not give you *to divide*; drill-safe, since
//     "membagi" does not contain "bagian" and "bagian" contains "bagi" followed by
//     the letter "a") · mengirim → kirim · membuat → buat · mengganti → ganti ·
//   memotong → potong ⚠️ (`potong`, a slice, is carded LATER in this block as a
//     measure word — two cards, two units, and drill-safe: "memotong" contains
//     "potong" at index 2 preceded by "m", so a drill carrying only `memotong`
//     would NOT satisfy front `potong`, and each unit's drill carries its own
//     form) · memasang → pasang · mengambil → ambil · membawa → bawa ·
//   menaruh → taruh · memegang → pegang · mengangkat → angkat · melepas → lepas ·
//   menjadi → jadi ⚠️ (`jadi`, "so", IS taught as a connector from the sounds unit.
//     Carded anyway: the connector *so* does not give you the verb *to become*,
//     and Indonesians feel them as one word wearing two hats. Drill-safe —
//     "menjadi" contains "jadi" at index 3 preceded by "n") · terjadi → jadi
//     (same root again, the ter- stative; see below) · tumbuh · hilang · rusak
//     — every other root above is untaught.
//
// ⚠️ `terjadi` IS ANOTHER ter- THAT IS NOT A SUPERLATIVE, and it is worth meeting
// before u30 teaches the superlative ones. ter- on a verb root makes a stative or
// accidental reading — terjadi (it happens, it came about) alongside A1's
// `tertawa`, `tersenyum`, `terlambat`, `terlalu`. u30 l1's `terkenal` card is
// where that split is taught head-on; this is a second live example of it.
//
// SCOPE NOTE: `tentang` (about) and `hal` (a thing, a matter) are both untaught at
// this point, so no example can say "the thing that happened". Every one names a
// concrete subject instead, which is better authoring anyway.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT25 = {
  id: "id-u25",
  lang: "id",
  title: "Membuat, memakai, membawa",
  order: 25,
  stage: "a2",
  lessons: [
    {
      id: "id-u25l1",
      unit: 25,
      lesson: 1,
      title: "Ambil dan bawa",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Move an object around — pick it up, carry it, set it down, hold it, lift it, or let it go.",
      items: [
        { id: "id-u25l1-mengambil", type: "vocab", front: "mengambil", reading: "mengambil", meaning: "to pick up", example: { jp: "Saya mengambil buku itu dari lemari.", en: "I took that book from the cupboard." }, accept: ["to fetch", "to get hold of", "to help yourself to"], drill: { jp: "Ibu mengambil piring dari dapur", en: "Mother fetched a plate from the kitchen" }, hint: "muh-NGAM-beel, opening on the ng hum. The everyday short form is ambil — ambil dulu, go and get it first. ⚠️ Glossed pick up rather than take because naik, to ride, already carries take in the sense of taking a train. Note mengambil is also to fetch FOR somebody." },
        { id: "id-u25l1-membawa", type: "vocab", front: "membawa", reading: "membawa", meaning: "to bring", example: { jp: "Jangan lupa membawa paspor kamu.", en: "Do not forget to bring your passport." }, accept: ["to carry", "to take along", "to bear"], drill: { jp: "Dia membawa koper besar ke stasiun", en: "He carried a big suitcase to the station" }, hint: "muhm-BAH-wa. ⚠️ ONE WORD FOR BRING AND TAKE-ALONG ALIKE — Indonesian does not care which way the object is moving relative to the speaker, so membawa covers both English verbs and the direction comes from ke or dari. Bawa is the spoken short form." },
        { id: "id-u25l1-menaruh", type: "vocab", front: "menaruh", reading: "menaruh", meaning: "to put down", example: { jp: "Saya menaruh kunci di meja dapur.", en: "I put the key on the kitchen table." }, accept: ["to set down", "to lay something somewhere", "to stand it somewhere"], drill: { jp: "Dia menaruh gelas di dekat piring", en: "He put the glass down near the plate" }, hint: "muh-NAH-rooh, final h breathed. It always wants a place after it: menaruh di, menaruh dekat. The near-twin meletakkan is more formal and slightly more precise about setting a thing flat; taruh is the short spoken form you will actually hear." },
        { id: "id-u25l1-memegang", type: "vocab", front: "memegang", reading: "memegang", meaning: "to hold", example: { jp: "Anak itu memegang tangan ibu.", en: "The child is holding his mother's hand." }, accept: ["to grip", "to keep hold of", "to grasp"], drill: { jp: "Dia memegang pisau dengan hati-hati", en: "She holds the knife carefully" }, hint: "muh-muh-GAHNG — three syllables and an ng hum to finish. Holding something IN YOUR HAND, as against menyimpan, keeping it somewhere. It also has the figurative sense English has: memegang janji, to keep a promise. Pegang is the short form." },
        { id: "id-u25l1-mengangkat", type: "vocab", front: "mengangkat", reading: "mengangkat", meaning: "to lift", example: { jp: "Dua orang mengangkat lemari yang berat.", en: "Two people lifted the heavy cupboard." }, accept: ["to raise", "to pick something up bodily", "to hoist"], drill: { jp: "Ayah mengangkat koper itu dengan mudah", en: "Father lifted that suitcase easily" }, hint: "muh-NGANG-kat — ng hum, then a hard k. Lifting against the weight of a thing, so it fits furniture and heavy bags. ⚠️ It is also the verb for answering a phone (mengangkat telepon) and for appointing somebody to a post — three senses, all from raising something up." },
        { id: "id-u25l1-melepas", type: "vocab", front: "melepas", reading: "melepas", meaning: "to take off", example: { jp: "Kami melepas sepatu sebelum masuk rumah.", en: "We take our shoes off before entering the house." }, accept: ["to remove", "to let go of", "to undo"], drill: { jp: "Dia melepas jaket karena panas", en: "He took his jacket off because it was hot" }, hint: "muh-luh-PAS. The exact opposite of memakai, to put on and to wear. ⚠️ Learn the shoe sentence — removing footwear indoors is not optional politeness in Indonesia, it is the rule, and melepas sepatu is the phrase. Lepas alone means loose or free." },
      ],
    },
    {
      id: "id-u25l2",
      unit: 25,
      lesson: 2,
      title: "Kirim dan simpan",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Move something between people — send it, get it, store it, share it out, swap it, or gather it up.",
      items: [
        { id: "id-u25l2-mengirim", type: "vocab", front: "mengirim", reading: "mengirim", meaning: "to send", example: { jp: "Saya mengirim uang ke keluarga setiap bulan.", en: "I send money to my family every month." }, accept: ["to dispatch", "to post", "to forward"], drill: { jp: "Dia mengirim oleh-oleh ke rumah nenek", en: "She sent a souvenir to grandmother's house" }, hint: "muh-NGEE-reem, opening ng hum. Covers post, courier and message alike — mengirim pesan is to send a message. Ongkos kirim, which you met as fare, is the shipping cost, and kirim is the short spoken form." },
        { id: "id-u25l2-mendapat", type: "vocab", front: "mendapat", reading: "mendapat", meaning: "to obtain", example: { jp: "Saya mendapat tunjangan dari perusahaan.", en: "I obtained an allowance from the business." }, accept: ["to come by", "to end up with", "to be given"], drill: { jp: "Dia mendapat gaji besar di kantor baru", en: "He gets a big salary at the new office" }, hint: "muhn-DAH-pat. From dapat, to be able to obtain — and note that dapat on its own is a formal twin of bisa, can. ⚠️ Same root as pendapat, an opinion, which you already have: an opinion is what you have ARRIVED at. Mendapatkan is the longer, equally common variant." },
        { id: "id-u25l2-menyimpan", type: "vocab", front: "menyimpan", reading: "menyimpan", meaning: "to keep", example: { jp: "Ibu menyimpan gula di lemari dapur.", en: "Mother keeps the sugar in the kitchen cupboard." }, accept: ["to put away", "to store away", "to save for later"], drill: { jp: "Saya menyimpan berkas itu di lemari", en: "I keep those files in the cupboard" }, hint: "muh-NYEEM-pan, ny one sound. Putting something away where it will stay, as against memegang, holding it now. It is also the verb for saving a file on a computer. Simpanan is savings or a stored supply." },
        { id: "id-u25l2-membagi", type: "vocab", front: "membagi", reading: "membagi", meaning: "to divide", example: { jp: "Guru membagi kelas menjadi dua tim.", en: "The teacher divided the class into two teams." }, accept: ["to split up", "to share out", "to hand round"], drill: { jp: "Ibu membagi nasi untuk semua anak", en: "Mother shared the rice out among all the children" }, hint: "muhm-BAH-gee, g hard. Both dividing and sharing out, and in arithmetic it is the divide operation. Membagi dua is to halve. ⚠️ Not the same as bagian, a part, which you already have: bagian is the PIECE, membagi is the cutting up." },
        { id: "id-u25l2-menukar", type: "vocab", front: "menukar", reading: "menukar", meaning: "to swap", example: { jp: "Saya mau menukar baju ini karena kecil.", en: "I want to exchange this shirt because it is small." }, accept: ["to exchange", "to trade one for another", "to change money"], drill: { jp: "Dia menukar tiket lama dengan tiket baru", en: "He swapped the old ticket for a new one" }, hint: "muh-NOO-kar. ⚠️ THIS IS THE MONEY-CHANGING VERB: menukar uang, to change currency, and tempat penukaran uang is the bureau de change. Do not confuse it with mengganti, to replace, which is coming in the next lesson — menukar implies a two-way trade, mengganti does not." },
        { id: "id-u25l2-mengumpulkan", type: "vocab", front: "mengumpulkan", reading: "mengumpulkan", meaning: "to collect", example: { jp: "Guru mengumpulkan semua berkas pagi ini.", en: "The teacher collected all the files this morning." }, accept: ["to gather up", "to bring together", "to amass"], drill: { jp: "Kami mengumpulkan uang untuk acara itu", en: "We collected money for that event" }, hint: "muh-ngoom-POOL-kan — five syllables, and worth saying slowly. From kumpul, to gather; berkumpul is what a crowd does by itself, mengumpulkan is what you do to the things. Kumpulan is a collection or a group." },
      ],
    },
    {
      id: "id-u25l3",
      unit: 25,
      lesson: 3,
      title: "Buat dan perbaiki",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Act on an object — make it, mend it, swap it out, alter it, cut it, or fit it in place.",
      items: [
        { id: "id-u25l3-membuat", type: "vocab", front: "membuat", reading: "membuat", meaning: "to make", example: { jp: "Ibu membuat teh manis untuk tamu.", en: "Mother made sweet tea for the guests." }, accept: ["to create", "to produce", "to put together"], drill: { jp: "Dia membuat tas dari baju lama", en: "He made a bag out of old shirts" }, hint: "muhm-BOO-at, the last two vowels separate. The general-purpose make, where memasak is specifically to cook. ⚠️ It also means to CAUSE: membuat saya bingung, it makes me baffled — an enormously useful pattern. Buat is the short spoken form and also means for, in place of untuk." },
        { id: "id-u25l3-memperbaiki", type: "vocab", front: "memperbaiki", reading: "memperbaiki", meaning: "to repair", example: { jp: "Ayah memperbaiki sepeda saya hari Minggu.", en: "Father repaired my bicycle on Sunday." }, accept: ["to mend", "to fix", "to put right"], drill: { jp: "Dia memperbaiki lampu yang rusak", en: "He is repairing the broken lamp" }, hint: "muhm-puhr-bah-EE-kee — five syllables. Built on baik, fine or good, which you have had since the greetings: to repair is literally to make good again. It also covers improving something that was not broken — memperbaiki nilai, to improve a grade. Perbaikan is a repair." },
        { id: "id-u25l3-mengganti", type: "vocab", front: "mengganti", reading: "mengganti", meaning: "to replace", example: { jp: "Kami mengganti pintu lama dengan pintu baru.", en: "We replaced the old door with a new one." }, accept: ["to substitute", "to change something for another", "to stand in for"], drill: { jp: "Saya mengganti baju karena basah", en: "I changed my shirt because it was wet" }, hint: "muh-NGAN-tee — ngg is the hum plus a hard g. ⚠️ Compare the three: mengganti puts a NEW one in the old one's place, menukar TRADES one for another, and mengubah (next card) alters the thing itself. Ganti is the short form; gantian means taking turns." },
        { id: "id-u25l3-mengubah", type: "vocab", front: "mengubah", reading: "mengubah", meaning: "to alter", example: { jp: "Kami mengubah jadwal rapat besok.", en: "We altered tomorrow's meeting schedule." }, accept: ["to change something", "to modify", "to amend"], drill: { jp: "Guru mengubah tugas untuk kelas itu", en: "The teacher changed the task for that class" }, hint: "muh-NGOO-bah, ng hum then the h breathed. 🚨 THE PAIR TO GET RIGHT: mengubah is what YOU do TO something — mengubah rencana, change the plan. For a thing that changes BY ITSELF you need berubah, which is the next lesson, and using mengubah there is the commonest Indonesian mistake an English speaker makes. Perubahan is a change." },
        { id: "id-u25l3-memotong", type: "vocab", front: "memotong", reading: "memotong", meaning: "to cut", example: { jp: "Ibu memotong sayur dengan pisau besar.", en: "Mother cut the vegetables with a big knife." }, accept: ["to chop", "to trim", "to cut through"], drill: { jp: "Dia memotong rambut anak itu", en: "He cut that child's hair" }, hint: "muh-MOH-tong, ending on the ng hum. It also means to interrupt — memotong pembicaraan, to cut in. ⚠️ The bare root potong is carded later in this block as the measure word for a SLICE, so you will meet the same root twice doing two jobs. Sepotong means a slice of something." },
        { id: "id-u25l3-memasang", type: "vocab", front: "memasang", reading: "memasang", meaning: "to install", example: { jp: "Dia memasang lampu baru di kamar.", en: "He installed a new lamp in the room." }, accept: ["to fit", "to put in place", "to set up"], drill: { jp: "Kami memasang jendela baru pagi ini", en: "We fitted the new window this morning" }, hint: "muh-MAH-sang, ng hum at the end. Fitting a thing where it belongs — a lamp, a window, a tyre, software. From pasang, which as a noun means a PAIR, and sepasang is a pair of something, a use you will meet again with measure words." },
      ],
    },
    {
      id: "id-u25l4",
      unit: 25,
      lesson: 4,
      title: "Jadi dan berubah",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Describe change that happens on its own — becoming, occurring, growing, going missing, or breaking.",
      items: [
        { id: "id-u25l4-menjadi", type: "vocab", front: "menjadi", reading: "menjadi", meaning: "to become", example: { jp: "Adik saya menjadi guru tahun ini.", en: "My younger sibling became a teacher this year." }, accept: ["to turn into", "to end up as", "to grow into"], drill: { jp: "Kota kecil itu menjadi besar dan ramai", en: "That small town became big and crowded" }, hint: "muhn-JAH-dee. Built on the jadi you met in the very first unit as so — one root, two hats, and Indonesians feel no join between them. Jadi guru, with the me- dropped, is perfectly ordinary speech. Menjadi also links a subject to its new state where English needs *become*." },
        { id: "id-u25l4-terjadi", type: "vocab", front: "terjadi", reading: "terjadi", meaning: "to happen", example: { jp: "Hujan besar terjadi setiap sore di kota ini.", en: "Heavy rain occurs every afternoon in this city." }, accept: ["to occur", "to take place", "to come about"], drill: { jp: "Macet itu terjadi karena hujan", en: "That traffic jam came about because of rain" }, hint: "tuhr-JAH-dee. Same root as menjadi, with ter- instead of me-: it happens by itself, with nobody doing it. ⚠️ HERE ter- DOES NOT MEAN MOST — it makes a stative, exactly as in tertawa and terlambat. Apa yang terjadi? is what happened? Kejadian is an event." },
        { id: "id-u25l4-berubah", type: "vocab", front: "berubah", reading: "berubah", meaning: "to change", example: { jp: "Cuaca berubah dengan cepat sore ini.", en: "The weather changed quickly this afternoon." }, accept: ["to change by itself", "to shift", "to turn out different"], drill: { jp: "Harga bensin berubah setiap bulan", en: "The price of petrol changes every month" }, hint: "buh-ROO-bah. 🚨 THE OTHER HALF OF THE PAIR. Same root as mengubah, opposite job: berubah is the thing changing ON ITS OWN, mengubah is you changing it. Cuaca berubah, the weather changes; saya mengubah rencana, I change the plan. Swap them and an Indonesian will notice immediately." },
        { id: "id-u25l4-tumbuh", type: "vocab", front: "tumbuh", reading: "tumbuh", meaning: "to grow", example: { jp: "Bunga itu tumbuh dekat pintu dapur.", en: "That flower grows near the kitchen door." }, accept: ["to sprout", "to grow up", "to develop"], drill: { jp: "Pohon itu tumbuh sangat cepat", en: "That tree grows very quickly" }, hint: "TOOM-booh, final h breathed. For plants, children and cities — anything that gets bigger by itself. ⚠️ Not for growing something on purpose: that is menanam, to plant. Tumbuhan is a plant; pertumbuhan is growth." },
        { id: "id-u25l4-hilang", type: "vocab", front: "hilang", reading: "hilang", meaning: "to disappear", example: { jp: "Kunci saya hilang dari meja.", en: "My key disappeared from the table." }, accept: ["to go missing", "to be lost", "to vanish"], drill: { jp: "Dompet saya hilang di pasar", en: "My wallet went missing at the market" }, hint: "HEE-lang, ng hum at the end. ⚠️ Note the grammar carefully: the THING is hilang, never the person — dompet saya hilang, my wallet is lost, and never *saya hilang dompet*. Kehilangan is to suffer the loss: saya kehilangan dompet." },
        { id: "id-u25l4-rusak", type: "vocab", front: "rusak", reading: "rusak", meaning: "broken", example: { jp: "Kulkas kami rusak dan susu menjadi panas.", en: "Our fridge is broken and the milk got warm." }, accept: ["out of order", "damaged", "not working"], drill: { jp: "Mobil itu rusak di jalan besar", en: "That car broke down on the main road" }, hint: "ROO-sak, final k caught in the throat. It covers broken, damaged, spoiled and out of order — a machine, a road, a piece of fruit. Rusak is also what you will read on a sign over a lift that is not working. Merusak is to break something on purpose." },
      ],
    },
  ],
};
