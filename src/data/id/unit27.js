// ID Unit 27 — Satuan, wadah, dan uang ("Units, containers and money") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 1 (u21–u30). unit1.js's 12 conventions and unit21.js's A1–A10 BIND
// this file.
//
// 🚨 RETHEMED FROM "Shopping and money", because **A1's u16 IS shopping and money,
// all 24 cards of it** — membeli · menjual · harga · membayar · mahal · murah ·
// sebelas · dua puluh · ratus · ribu · juta · rupiah · belanja · tas · dompet ·
// kasir · gratis · menawar · baju · celana · sepatu · topi · jaket · memakai. The
// transaction is fully covered. What is NOT covered is everything a transaction
// needs you to be able to COUNT and CARRY.
//
// THE HOLE IT FILLS, and it closes A1's own deferral. Measured against all 480 A1
// cards: no classifiers at all, no unit of weight or volume, no container word of
// any kind, and no verb for saving, borrowing or owing. A learner could say
// *expensive* and could not say *two bottles* — and Indonesian markets are sold in
// containers, not in abstractions.
//   l1  the measure words — sebuah · seorang · ekor · kilo · liter · potong
//   l2  the containers    — kotak · botol · kaleng · bungkus · kantong · keranjang
//   l3  money moving      — menabung · meminjam · utang · kembalian · kaya · miskin
//   l4  how much roughly  — rata-rata · sisa · seluruh · kurang lebih ·
//                           berkali-kali · sekitar
//
// ✅ **THIS CLOSES A1's CLASSIFIER DEFERRAL, AND THE A2 CALL IS THAT IT WAS RIGHT
// TO DEFER AND IS NOW RIGHT TO TEACH.** unit1.js convention 11 deferred
// `sebuah`/`seorang`/`sebutir` as "optional in speech and a needless load before
// the nouns exist". Both halves of that were true. They are carded here because:
//   (a) **the nouns now exist** — 480 of them — so the load has somewhere to land;
//   (b) they are optional to PRODUCE and compulsory to READ. Every sign, price
//       list and news sentence uses them, and a learner who has not met `seorang`
//       reads "seorang guru" as two words he half-knows;
//   (c) they are a closed, tiny set, unlike the dozens Chinese or Thai demand —
//       three carry nearly all the traffic, and this unit cards exactly those
//       three (`sebuah` for things, `seorang` for people, `ekor` for animals).
//   ⚠️ `sebutir` (for grains and eggs) STAYS DEFERRED: genuinely optional,
//   genuinely rare, and the load-to-value ratio is wrong even at A2. It is named
//   in `sebuah`'s hint. **B1's job, if anyone's.**
//
// ⚠️ `kembalian` IS GLOSSED "change from a purchase", NOT "the change", and that is
// a measured collision: this block's own `berubah` (to change) normalises to
// "change", and `mengganti` and `mengubah` sit next to it. One prompt, two right
// answers, and the learner marked wrong for the other. unit21.js A4.
//
// ⚠️ `sekitar` IS GLOSSED "the area around", NOT "around", because A1's
// `kira-kira` (roughly) carries **"around"** AND **"about"** AND
// **"approximately"** in its accept[]. That forced the card onto `sekitar`'s
// SPATIAL sense — which is the honest outcome, not a dodge: sekitar rumah, the
// area round the house, is a real and separate use, and the approximate sense is
// named in the hint where it collides with nothing.
//
// AFFIX AND COMPOUND ROOTS CHECKED BY HAND (the LEXEME probe fails open for
// Indonesian — unit1.js convention 3; every root below was stripped off the front
// and grepped in TAUGHT-WORDS.md, since a `free` verdict on a prefixed form is
// worthless here):
//   sebuah → buah      ⚠️ `buah` (fruit) IS taught. Carded: *fruit* gives you no
//     hint at all that this is a classifier — the se- is "one". Drill-safe, since
//     "sebuah" holds "buah" at index 2 preceded by "e", a letter.
//   seorang → orang    ⚠️ `orang` (person) IS taught. Same shape, same verdict,
//     same drill-safety ("orang" at index 2, preceded by "e").
//   potong → potong    ⚠️ **THE SAME ROOT AS `memotong` (to cut), CARDED EARLIER IN
//     THIS BLOCK.** Two cards, two units, two parts of speech: the verb there, the
//     measure word here. Convention 3 passes — *to cut* does not tell you that a
//     slice is counted with `potong`. ⚠️ AND THE DRILL DIRECTION MATTERS: a drill
//     containing `memotong` does NOT satisfy front `potong` ("potong" sits at
//     index 2 preceded by "m", a letter), so this unit's drill carries the bare
//     word. Checked, not assumed — unit21.js A7.
//   kembalian → kembali  ⚠️ `kembali` (to return) IS taught. Carded: *to return*
//     does not give you *your change at a till*. Drill-safe — "kembalian" holds
//     "kembali" at index 0 but the next character is "a", a letter, so
//     findWholeWord("kembali") does NOT match inside it.
//   berkali-kali → kali  ⚠️ `kali` (times) IS taught, and 🚨 **THIS ONE IS THE
//     HYPHEN TRAP RUNNING THE OTHER WAY.** A hyphen is not a letter, so a drill
//     containing `berkali-kali` DOES whole-word-match front `kali` at the second
//     half. That would let a `kali` cloze blank half a doubled word. This unit's
//     `berkali-kali` drill is fine (it needs its own front); the direction to check
//     is `kali`'s own A1 drill, and it predates this word and cannot contain it.
//     Verified. unit21.js A7.
//   menabung → tabung · meminjam → pinjam · rata-rata → rata ·
//   seluruh → luruh · sekitar → kitar · kurang lebih ⚠️ (a two-word phrase whose
//     BOTH halves are taught — `kurang` (less) and `lebih` (more) — and carded
//     because the fixed phrase means *more or less*, which neither half predicts;
//     convention 8 licenses exactly this) · ekor · kilo · liter · kotak · botol ·
//   kaleng · bungkus · kantong · keranjang · utang · kaya · miskin · sisa
//     — every other root above is untaught.
//
// ⚠️ `kaya` IS A HOMOGRAPH IN COLLOQUIAL SPEECH and the hint says so. Standard
// `kaya` is *rich*; in Jakarta speech `kaya` also does the job of `seperti` (like),
// as in kaya gitu, like that. The colloquial layer is DEFERRED by convention 7, so
// only the standard sense is carded — but a learner will hear the other within a
// day of arriving, so it is named rather than hidden.
//
// FOLD CHECK (convention 9, measured through the real `normalizeReading(f, "id")`):
// `rata-rata` → "ratarata" · `berkali-kali` → "berkalikali" · `kurang lebih` →
// "kuranglebih". All `[a-z]+`, and none collides with any of the 480 A1 readings or
// with each other. ⚠️ The near-miss class is the space, per convention 9: this unit
// teaches only the SPACED form of `kurang lebih`, never a solid *kuranglebih*.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT27 = {
  id: "id-u27",
  lang: "id",
  title: "Satuan, wadah, dan uang",
  order: 27,
  stage: "a2",
  lessons: [
    {
      id: "id-u27l1",
      unit: 27,
      lesson: 1,
      title: "Sebuah, seorang, seekor",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Count things the way Indonesian counts them — with the right measure word for a thing, a person, an animal or a weight.",
      items: [
        { id: "id-u27l1-sebuah", type: "vocab", front: "sebuah", reading: "sebuah", meaning: "a single item of", example: { jp: "Saya membeli sebuah tas baru.", en: "I bought one new bag." }, accept: ["one of a thing", "a counter for objects", "one unit of"], drill: { jp: "Dia membawa sebuah koper besar", en: "He is carrying one big suitcase" }, hint: "suh-BOO-ah. Literally se, one, plus buah, fruit — Indonesian counts inanimate things with the word for fruit, which is a lovely oddity. ⚠️ It is OPTIONAL in speech: sebuah tas and tas both work, and dropping it is normal. You need it to READ, not to talk. Sebutir, for eggs and grains, exists but is rare." },
        { id: "id-u27l1-seorang", type: "vocab", front: "seorang", reading: "seorang", meaning: "a single person", example: { jp: "Seorang guru datang ke kelas kami.", en: "One teacher came to our class." }, accept: ["one person who is", "a counter for people", "an individual"], drill: { jp: "Seorang turis tanya arah ke pasar", en: "One tourist asked the way to the market" }, hint: "suh-OH-rang. Se, one, plus orang, person. ⚠️ Its real job is INTRODUCING somebody in writing and news: seorang dokter, a certain doctor — rather like English *a* carrying new information. Berdua means the two of us; sendiri, which you have, is alone." },
        { id: "id-u27l1-ekor", type: "vocab", front: "ekor", reading: "ekor", meaning: "a tail", example: { jp: "Kucing itu punya ekor panjang.", en: "That cat has a long tail." }, accept: ["the tail of an animal", "a counter for animals", "a creature counted"], drill: { jp: "Ayah membeli dua ekor ayam", en: "Father bought two chickens" }, hint: "EH-kor. A tail — and because of that, the measure word for ANIMALS: dua ekor ayam, literally two tails of chicken, is how you count livestock. The drill shows exactly that use. ⚠️ Never use it for people; seorang is for people and sebuah for things." },
        { id: "id-u27l1-kilo", type: "vocab", front: "kilo", reading: "kilo", meaning: "a kilogram", example: { jp: "Ibu membeli dua kilo sayur di pasar.", en: "Mother bought two kilos of vegetables at the market." }, accept: ["a kilo of something", "a unit of weight", "kilos"], drill: { jp: "Ikan itu berat satu kilo saja", en: "That fish weighs only one kilo" }, hint: "KEE-loh. The full kilogram exists but nobody says it. ⚠️ Indonesia is metric throughout, so this is the only weight you need — and note markets also sell by the ons, which is 100 grams and NOT an English ounce. Setengah kilo is half a kilo." },
        { id: "id-u27l1-liter", type: "vocab", front: "liter", reading: "liter", meaning: "a litre", example: { jp: "Kami mau lima liter bensin.", en: "We want five litres of petrol." }, accept: ["a litre of something", "a unit of volume", "litres"], drill: { jp: "Kami mau dua liter susu dingin", en: "We want two litres of cold milk" }, hint: "LEE-ter. Note the SPELLING, which is the whole lesson of a borrowed word in Indonesian: -er, not -re, because the language writes the sound it makes. Petrol is sold by the liter and so is milk." },
        { id: "id-u27l1-potong", type: "vocab", front: "potong", reading: "potong", meaning: "a slice", example: { jp: "Saya mau satu potong ayam goreng.", en: "I want one piece of fried chicken." }, accept: ["a piece cut off", "a cut portion", "a chunk"], drill: { jp: "Dia makan tiga potong ikan", en: "He ate three pieces of fish" }, hint: "POH-tong, ending on the ng hum. ⚠️ THE SAME ROOT YOU ALREADY HAVE IN memotong, to cut — here it is the measure word for what the cutting produced. Sepotong is one piece. It is how food is ordered and priced at any warung: dua potong ayam." },
      ],
    },
    {
      id: "id-u27l2",
      unit: 27,
      lesson: 2,
      title: "Kotak dan botol",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name the container something comes in, which is how Indonesian markets actually sell it.",
      items: [
        { id: "id-u27l2-kotak", type: "vocab", front: "kotak", reading: "kotak", meaning: "a box", example: { jp: "Kotak itu penuh dengan buku lama.", en: "That box is full of old books." }, accept: ["a carton", "a case", "a square container"], drill: { jp: "Saya menyimpan obat di kotak kecil", en: "I keep the medicine in a small box" }, hint: "KOH-tak, final k caught in the throat. ⚠️ It also means a SQUARE, the shape — kotak-kotak, doubled, means checked or chequered, of cloth. Sekotak is one boxful, and it works as a measure word: sekotak susu, a carton of milk." },
        { id: "id-u27l2-botol", type: "vocab", front: "botol", reading: "botol", meaning: "a bottle", example: { jp: "Botol air itu ada di meja.", en: "That water bottle is on the table." }, accept: ["a flask", "a glass bottle", "a plastic bottle"], drill: { jp: "Kami membeli dua botol susu", en: "We bought two bottles of milk" }, hint: "BOH-tol. From the Dutch bottel. Sebotol is one bottle of something, and it is the everyday measure for water, oil and sauce. ⚠️ Do not confuse it with gelas, a drinking glass, which you already have — one is the container it was sold in, the other what you pour it into." },
        { id: "id-u27l2-kaleng", type: "vocab", front: "kaleng", reading: "kaleng", meaning: "a tin", example: { jp: "Kaleng itu kosong dan sudah lama.", en: "That tin is empty and old." }, accept: ["a drinks can", "a metal container", "tinned packaging"], drill: { jp: "Ibu membeli dua kaleng ikan", en: "Mother bought two tins of fish" }, hint: "KAH-leng, ending on the ng hum. Any metal container — a drink can, a tin of fish, a biscuit tin. ⚠️ Its adjectival use is a warning: barang kaleng means cheap, tinny goods, so the word carries a faint suggestion of low quality." },
        { id: "id-u27l2-bungkus", type: "vocab", front: "bungkus", reading: "bungkus", meaning: "a packet", example: { jp: "Saya mau dua bungkus mi goreng.", en: "I want two packets of fried noodles." }, accept: ["a wrapper", "a wrapped portion", "a sachet"], drill: { jp: "Bungkus itu kosong dan kotor", en: "That packet is empty and dirty" }, hint: "BOONG-koos. 🚨 THE SINGLE MOST USEFUL WORD IN THIS LESSON, because it is also a VERB: bungkus! at a warung means wrap it to take away, the Indonesian equivalent of *to go*. Dibungkus atau makan di sini? — takeaway or eat in? Membungkus is to wrap." },
        { id: "id-u27l2-kantong", type: "vocab", front: "kantong", reading: "kantong", meaning: "a pocket", example: { jp: "Kunci saya ada di kantong celana.", en: "My key is in my trouser pocket." }, accept: ["a pouch", "a small bag", "a sack"], drill: { jp: "Dompet itu masuk ke kantong jaket saya", en: "That wallet fits into my jacket pocket" }, hint: "KAHN-tong, ng hum to finish. Both a pocket in clothing and a small bag — kantong plastik is a plastic bag, and shops will ask if you want one. ⚠️ Kantong kosong, empty pocket, is the idiom for being broke, exactly as in English." },
        { id: "id-u27l2-keranjang", type: "vocab", front: "keranjang", reading: "keranjang", meaning: "a basket", example: { jp: "Keranjang itu penuh dengan buah.", en: "That basket is full of fruit." }, accept: ["a hamper", "a woven container", "a shopping basket"], drill: { jp: "Ibu membawa keranjang ke pasar", en: "Mother takes a basket to the market" }, hint: "kuh-RAN-jang, first e swallowed and an ng hum at the end. Traditionally woven from bamboo or rattan, and still what you carry to a wet market. ⚠️ Bola keranjang, basket-ball, is the sport — the compound works exactly as in English." },
      ],
    },
    {
      id: "id-u27l3",
      unit: 27,
      lesson: 3,
      title: "Menabung dan utang",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Describe money over time rather than at the till — saving it, borrowing it, owing it, having it or not.",
      items: [
        { id: "id-u27l3-menabung", type: "vocab", front: "menabung", reading: "menabung", meaning: "to save money", example: { jp: "Saya menabung setiap bulan untuk berlibur.", en: "I save money every month for a holiday." }, accept: ["to put money aside", "to build up savings", "to bank money"], drill: { jp: "Anak itu menabung untuk membeli sepeda", en: "That child is saving up to buy a bicycle" }, hint: "muh-NAH-boong. From tabung, a tube or a canister — you saved by dropping coins into one. Tabungan is a savings account, and buku tabungan, the passbook, is still a real object in Indonesia. ⚠️ Only for money; for saving a file you want menyimpan." },
        { id: "id-u27l3-meminjam", type: "vocab", front: "meminjam", reading: "meminjam", meaning: "to borrow", example: { jp: "Saya meminjam buku itu dari teman.", en: "I borrowed that book from a friend." }, accept: ["to take on loan", "to have the use of", "to borrow from somebody"], drill: { jp: "Dia meminjam uang dari kakak saya", en: "He borrowed money from my older sibling" }, hint: "muh-MEEN-jam. ⚠️ ONE ROOT FOR BORROW AND LEND, and the prefix decides: meminjam is to BORROW (it comes to you), meminjamkan is to LEND (you give it out). English has two verbs; Indonesian has one root and a suffix. Pinjaman is a loan." },
        { id: "id-u27l3-utang", type: "vocab", front: "utang", reading: "utang", meaning: "a debt", example: { jp: "Utang dia sudah besar sekali.", en: "His debt is already very large." }, accept: ["money owed", "what you owe", "an outstanding sum"], drill: { jp: "Saya harus membayar utang bulan ini", en: "I must pay a debt this month" }, hint: "OO-tang, ng hum at the end. Also spelled hutang, and both are correct — the official spelling dropped the h but nobody minds either. Berutang means to be in debt. ⚠️ Utang budi, a debt of kindness, is a social obligation and matters a great deal more in Indonesia than a financial one." },
        { id: "id-u27l3-kembalian", type: "vocab", front: "kembalian", reading: "kembalian", meaning: "change from a purchase", example: { jp: "Kasir memberi kembalian dua ribu rupiah.", en: "The cashier gave two thousand rupiah in change." }, accept: ["money handed back", "the balance owed to you", "small change"], drill: { jp: "Saya lupa mengambil kembalian di kasir", en: "I forgot to pick up my change at the till" }, hint: "kuhm-bah-lee-AHN. Built on kembali, to return, which you already have: it is the money that comes BACK to you. ⚠️ Glossed change from a purchase because berubah, to change, already owns the plain word. Ada kembalian? — have you got change? — is worth memorising for every small shop." },
        { id: "id-u27l3-kaya", type: "vocab", front: "kaya", reading: "kaya", meaning: "rich", example: { jp: "Keluarga itu kaya tetapi sangat ramah.", en: "That family is rich but very friendly." }, accept: ["wealthy", "well off", "affluent"], drill: { jp: "Perusahaan itu kaya dan punya banyak kantor", en: "That business is rich and has many offices" }, hint: "KAH-ya, y a consonant. Kekayaan is wealth. ⚠️ A WARNING FOR WHEN YOU GET THERE: in Jakarta speech kaya is also used for seperti, like — kaya gitu, like that. That colloquial layer is not taught in this course, but you will hear it on day one, and the two senses are impossible to confuse in context." },
        { id: "id-u27l3-miskin", type: "vocab", front: "miskin", reading: "miskin", meaning: "poor", example: { jp: "Desa itu miskin tetapi orangnya senang.", en: "That village is poor but its people are glad." }, accept: ["badly off", "impoverished", "without money"], drill: { jp: "Keluarga miskin itu tidak mampu membayar", en: "That poor family cannot afford to pay" }, hint: "MEES-keen. The clean opposite of kaya, and used plainly — Indonesian has no softer euphemism in ordinary speech. Kemiskinan is poverty, a word you will meet constantly in the news." },
      ],
    },
    {
      id: "id-u27l4",
      unit: 27,
      lesson: 4,
      title: "Kurang lebih berapa",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Give an amount you are not sure of — an average, a remainder, a whole, or a rough estimate.",
      items: [
        { id: "id-u27l4-ratarata", type: "vocab", front: "rata-rata", reading: "ratarata", meaning: "the average", example: { jp: "Rata-rata gaji di kota itu tidak besar.", en: "The average salary in that city is not large." }, accept: ["on average", "the mean", "typically"], drill: { jp: "Rata-rata karyawan bekerja delapan jam", en: "On average employees work eight hours" }, hint: "RAH-ta-RAH-ta. From rata, level or even — so an average is what things level out to. A doubling that makes a new word rather than a plural, like kira-kira and hati-hati. It works as a noun and as an adverb with no change at all." },
        { id: "id-u27l4-sisa", type: "vocab", front: "sisa", reading: "sisa", meaning: "what is left over", example: { jp: "Sisa uang saya hanya sedikit.", en: "The money I have left is only a little." }, accept: ["the remainder", "the rest of it", "leftovers"], drill: { jp: "Sisa nasi itu untuk kucing kami", en: "The leftover rice is for our cat" }, hint: "SEE-sa. The remainder of anything — money, food, time. Sisa makanan is leftovers. ⚠️ Tersisa means remaining, and in arithmetic sisa is the remainder after division, so it is a school word as well as a kitchen one." },
        { id: "id-u27l4-seluruh", type: "vocab", front: "seluruh", reading: "seluruh", meaning: "the entire", example: { jp: "Seluruh keluarga datang ke acara itu.", en: "The entire family came to that event." }, accept: ["the whole of", "all of it together", "throughout"], drill: { jp: "Seluruh kota tahu berita itu", en: "The entire city knows that news" }, hint: "suh-LOO-rooh, final h breathed. ⚠️ Compare it with semua, which you already have: semua is ALL the individual members (semua orang, everybody), seluruh is the WHOLE as one thing (seluruh kota, the city entire). Seluruh dunia is the whole world." },
        { id: "id-u27l4-kuranglebih", type: "vocab", front: "kurang lebih", reading: "kuranglebih", meaning: "more or less", example: { jp: "Perjalanan itu kurang lebih dua jam.", en: "That journey is more or less two hours." }, accept: ["approximately", "give or take a bit", "thereabouts"], drill: { jp: "Harga tiket kurang lebih lima ratus ribu", en: "The ticket price is roughly five hundred thousand" }, hint: "KOO-rang LUH-beeh. Literally less more — both halves are words you already have, and the fixed phrase means neither of them. It is interchangeable with kira-kira, which you also have, and slightly more formal. Note the SPACE: it is two words, never one." },
        { id: "id-u27l4-berkalikali", type: "vocab", front: "berkali-kali", reading: "berkalikali", meaning: "over and over", example: { jp: "Saya tanya berkali-kali tetapi dia diam.", en: "I asked over and over but he stayed silent." }, accept: ["repeatedly", "again and again", "many times over"], drill: { jp: "Dia mengulang kata itu berkali-kali", en: "He repeated that word again and again" }, hint: "buhr-KAH-lee-KAH-lee. Built on kali, times, which you already have — ber- plus a doubled kali is *many times over*. ⚠️ It carries a note of impatience: berkali-kali usually implies the repetition should not have been necessary." },
        { id: "id-u27l4-sekitar", type: "vocab", front: "sekitar", reading: "sekitar", meaning: "the area around", example: { jp: "Sekitar rumah kami sangat sepi.", en: "The area around our house is very quiet." }, accept: ["the surroundings", "the vicinity", "nearby parts"], drill: { jp: "Sekitar pasar itu selalu ramai", en: "The area around that market is always crowded" }, hint: "suh-KEE-tar. ⚠️ TWO USES, and only the spatial one is carded because kira-kira already owns the other: sekitar rumah is the area round the house, and sekitar jam tujuh means at about seven. You will meet the time use constantly, so read it here and expect it. Lingkungan is the wider surroundings." },
      ],
    },
  ],
};
