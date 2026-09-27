// ID Unit 16 — Berbelanja ("Shopping") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Block 3 (u15–u20), authored 2026-09-27. The 12 conventions in unit1.js BIND
// this file. Scaffold slot was "Vocabulary 2" — a slot with no subject, retitled
// to what it teaches.
//
// 🚨 THE SECOND MEASURED HOLE IN THE LANGUAGE: **INDONESIAN COULD NOT COUNT PAST
// TEN.** u5 teaches satu…sepuluh and nol and stops, so through u14 the course had
// no way to say eleven, twenty, a hundred or a thousand — in a country whose
// prices are written in tens of thousands. l2 closes it, and it is placed in the
// shopping unit on purpose: `ribu` is not an abstract counting word here, it is
// the unit every price tag is denominated in.
//
// THE FRONT FORM OF EACH VERB — convention 4, applied and not guessed:
//   PREFIXED, because standard Indonesian prefixes a transitive verb and because
//   `findWholeWord` (cardRouting.js) cannot find a bare root inside its own
//   prefixed form, which would make the drill unroutable:
//     `membeli` (beli) · `menjual` (jual) · `membayar` (bayar) · `menawar` (tawar)
//   BARE, because convention 4's "intransitive / prefix-optional → bare" clause
//   applies and the word is independently a noun:
//     `belanja` — it is the shopping ITSELF as well as the act of doing it
//     (Belanja saya banyak hari ini), so it is not a colloquial reduction of
//     `berbelanja` the way `beli` is of `membeli`. `berbelanja` is in its hint.
//   Every bare root is named in its card's hint, since that is what a learner
//   will actually hear across a market stall.
//
// AFFIX ROOTS CHECKED BY HAND (the LEXEME probe fails open for Indonesian — see
// unit1.js convention 3):
//   membeli → beli · menjual → jual · membayar → bayar · menawar → tawar ·
//   memakai → pakai · belanja → (root) · sebelas → belas · dua puluh → puluh
//     NONE of those roots is taught anywhere in u1–u20, so no root is taught
//     twice. `belas` and `puluh` are bound morphemes, not free words, and are
//     taught through `sebelas` and `dua puluh` rather than as cards of their own —
//     a gloss like "teen marker" is not a prompt a learner can answer.
//   harga · mahal · murah · ratus · ribu · juta · rupiah · tas · dompet ·
//   kasir · gratis · baju · celana · sepatu · topi · jaket — all roots.
//
// ⚠️ `rupiah` IS THE COGNATE TRAP AND IT IS HANDLED. A gloss equal to its own
// front normalises to the front and makes the card unanswerable-by-design (the
// produce card would show "rupiah" and accept "rupiah"). So it is glossed
// **"Indonesian currency"**, not "rupiah". Same class as `hotel`, `bus`, `radio`,
// `internet` and `film`, which is why none of those five is carded anywhere in
// this block.
//
// TWO FRONTS CARRY A SECOND UNRELATED SENSE, named in the hint because a learner
// WILL meet the other one:
//   `menawar` → the identical `tawar` also means bland/unsweetened (teh tawar)
//   `murah` → low in price and complimentary; `murahan` is the insult (shoddy)
//
// SAME-UNIT COMPOUND/COMPONENT PAIR, kept in different lessons: `dua puluh` (l2)
// against u5's `dua`. A drill for `dua puluh` also contains `dua` as a whole
// word, which is harmless — each drill is only ever checked against its OWN
// front — but the cloze for `dua puluh` blanks the whole phrase, as intended.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT16 = {
  id: "id-u16",
  lang: "id",
  title: "Berbelanja",
  order: 16,
  stage: "a1",
  lessons: [
    {
      id: "id-u16l1",
      unit: 16,
      lesson: 1,
      title: "Membeli dan menjual",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Ask what something costs, say it is too expensive or a good price, and pay for it.",
      items: [
        { id: "id-u16l1-membeli", type: "vocab", front: "membeli", reading: "membeli", meaning: "to buy", example: { jp: "Saya mau membeli sayur dan telur di pasar.", en: "I want to buy vegetables and eggs at the market." }, accept: ["buy", "to purchase", "to get"], drill: { jp: "Saya mau membeli sayur di pasar", en: "I want to buy vegetables at the market" }, hint: "muhm-buh-LEE. The root is beli, and across a market stall you will hear the root bare — Mau beli apa? In a careful or written sentence standard Indonesian keeps the me-, and that is the form carded." },
        { id: "id-u16l1-menjual", type: "vocab", front: "menjual", reading: "menjual", meaning: "to sell", example: { jp: "Toko itu menjual payung dan obat setiap hari.", en: "That shop sells umbrellas and medicine every day." }, accept: ["sell", "to trade in", "to have for sale"], drill: { jp: "Toko itu menjual payung setiap hari", en: "That shop sells umbrellas every day" }, hint: "muhn-JOO-ahl. Root jual, and the pair beli/jual is one of the neatest in the language: jual beli is trade itself. Jualan is the goods being sold, and a penjual is the seller." },
        { id: "id-u16l1-harga", type: "vocab", front: "harga", reading: "harga", meaning: "price", example: { jp: "Harga nasi goreng di warung ini sangat murah.", en: "The price of fried rice at this stall is very cheap." }, accept: ["the price", "cost", "how much it costs"], drill: { jp: "Harga nasi goreng di warung ini murah", en: "The price of fried rice at this stall is cheap" }, hint: "HAHR-ga, hard g and a light tap on the r. Berapa harganya? is how you ask what something costs — literally how much is its price. Harga mati means the price is fixed and there is nothing to bargain over." },
        { id: "id-u16l1-membayar", type: "vocab", front: "membayar", reading: "membayar", meaning: "to pay", example: { jp: "Kami membayar dengan uang kecil di toko itu.", en: "We pay with small change at that shop." }, accept: ["pay", "to pay for", "to settle up"], drill: { jp: "Kami membayar dengan uang kecil", en: "We pay with small change" }, hint: "muhm-bah-YAHR. Root bayar, and again the bare root is what is spoken: Saya bayar dulu. Uang kecil, literally small money, is what Indonesians call change — and carrying some matters, because a warung often cannot break a large note." },
        { id: "id-u16l1-mahal", type: "vocab", front: "mahal", reading: "mahal", meaning: "expensive", example: { jp: "Mobil baru itu terlalu mahal untuk keluarga kami.", en: "That new car is too expensive for our family." }, accept: ["costly", "pricey", "dear"], drill: { jp: "Mobil baru itu terlalu mahal", en: "That new car is too expensive" }, hint: "MAH-hahl, breathed h. Kemahalan means too expensive and is the one word that does most of the work while bargaining. Its opposite is murah, and the pair is the first thing you will actually need in a pasar." },
        { id: "id-u16l1-murah", type: "vocab", front: "murah", reading: "murah", meaning: "cheap", example: { jp: "Sayur di pasar lebih murah daripada sayur di toko.", en: "Vegetables at the market are cheaper than vegetables at the shop." }, accept: ["inexpensive", "low in price", "good value"], drill: { jp: "Sayur di pasar lebih murah", en: "Vegetables at the market are cheaper" }, hint: "MOO-rah, breathed h. ⚠️ Murah means low in price and carries nothing negative — telling a seller their price is murah is a compliment. Murahan, with the tail, is the insult: cheap as in shoddy. Keep the two apart." },
      ],
    },
    {
      id: "id-u16l2",
      unit: 16,
      lesson: 2,
      title: "Angka besar dan harga",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count past ten, and say or read a real Indonesian price in thousands and millions of rupiah.",
      items: [
        { id: "id-u16l2-sebelas", type: "vocab", front: "sebelas", reading: "sebelas", meaning: "eleven", example: { jp: "Anak saya sudah sebelas tahun sekarang.", en: "My child is eleven years old now." }, accept: ["11", "ten and one"], drill: { jp: "Anak saya sudah sebelas tahun", en: "My child is already eleven" }, hint: "suh-buh-LAHS. Eleven to nineteen all end in -belas: sebelas, dua belas, tiga belas, sembilan belas. The se- stands for satu, one — the same se- that starts sepuluh. So a teen is just the digit plus belas." },
        { id: "id-u16l2-duapuluh", type: "vocab", front: "dua puluh", reading: "duapuluh", meaning: "twenty", example: { jp: "Ada dua puluh orang di pasar pagi ini.", en: "There are twenty people at the market this morning." }, accept: ["20", "two tens"], drill: { jp: "Ada dua puluh orang di pasar", en: "There are twenty people at the market" }, hint: "DOO-a POO-looh. The tens are the digit plus puluh: dua puluh, tiga puluh, sembilan puluh. Twenty-one is dua puluh satu — you simply keep adding. Sepuluh, ten, is the same puluh with se- standing for one." },
        { id: "id-u16l2-ratus", type: "vocab", front: "ratus", reading: "ratus", meaning: "hundred", example: { jp: "Harga payung ini dua ratus ribu rupiah.", en: "The price of this umbrella is two hundred thousand rupiah." }, accept: ["100", "a hundred", "hundreds"], drill: { jp: "Harga payung ini dua ratus ribu", en: "This umbrella costs two hundred thousand" }, hint: "RAH-toos. Always with a number in front of it: seratus is one hundred, dua ratus two hundred. Se- again does the work of satu. The number never changes form — there is no plural to add." },
        { id: "id-u16l2-ribu", type: "vocab", front: "ribu", reading: "ribu", meaning: "thousand", example: { jp: "Saya hanya punya lima ribu rupiah di dompet saya.", en: "I only have five thousand rupiah in my wallet." }, accept: ["1000", "a thousand", "thousands"], drill: { jp: "Saya hanya punya lima ribu rupiah", en: "I only have five thousand rupiah" }, hint: "REE-boo. The unit you will use constantly, because Indonesian prices are written in thousands: seribu, dua ribu, lima puluh ribu. In speech people often drop it altogether — dua puluh for twenty thousand — and the context carries the rest." },
        { id: "id-u16l2-juta", type: "vocab", front: "juta", reading: "juta", meaning: "million", example: { jp: "Mobil itu dua puluh juta rupiah dan sangat mahal.", en: "That car is twenty million rupiah and very expensive." }, accept: ["1000000", "a million", "millions"], drill: { jp: "Mobil itu dua puluh juta rupiah", en: "That car is twenty million rupiah" }, hint: "JOO-ta. An everyday word in Indonesia for any large purchase: sejuta, dua juta, seratus juta. There is no common single word for billion — you say seribu juta, or the loanword miliar." },
        { id: "id-u16l2-rupiah", type: "vocab", front: "rupiah", reading: "rupiah", meaning: "Indonesian currency", example: { jp: "Satu juta rupiah cukup untuk membeli sepeda baru.", en: "One million rupiah is enough to buy a new bicycle." }, accept: ["the rupiah", "Indonesian money", "IDR"], drill: { jp: "Satu juta rupiah cukup untuk sepeda", en: "One million rupiah is enough for a bicycle" }, hint: "roo-PEE-ah. Written Rp on a price tag, and the tag shows the full number: Rp 25.000 is twenty-five thousand — note that Indonesian uses a DOT where English would use a comma. Spoken, people shorten it to dua puluh lima ribu, or just dua puluh lima." },
      ],
    },
    {
      id: "id-u16l3",
      unit: 16,
      lesson: 3,
      title: "Di toko dan di pasar",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Get through a shop or a market: carry your money, find the till, and bargain for a better price.",
      items: [
        { id: "id-u16l3-belanja", type: "vocab", front: "belanja", reading: "belanja", meaning: "to go shopping", example: { jp: "Ibu saya belanja di pasar setiap hari Sabtu.", en: "My mother goes shopping at the market every Saturday." }, accept: ["shopping", "to do the shopping", "to buy groceries"], drill: { jp: "Ibu saya belanja di pasar", en: "My mother shops at the market" }, hint: "buh-LAHN-ja. Berbelanja is the full standard verb and belanja is what everyone actually says. It is also a noun — the shopping itself: Belanja saya banyak hari ini. Membeli is buying one thing; belanja is the whole trip." },
        { id: "id-u16l3-tas", type: "vocab", front: "tas", reading: "tas", meaning: "bag", example: { jp: "Tas saya penuh dengan sayur dari pasar.", en: "My bag is full of vegetables from the market." }, accept: ["a bag", "handbag", "sack"], drill: { jp: "Tas saya penuh dengan sayur", en: "My bag is full of vegetables" }, hint: "TAHS, one syllable. It covers every kind of bag — handbag, school bag, shopping bag. A thin plastic carrier is a kresek, and at a market you will often be asked whether you brought your own." },
        { id: "id-u16l3-dompet", type: "vocab", front: "dompet", reading: "dompet", meaning: "wallet", example: { jp: "Dompet saya kosong karena saya belanja banyak.", en: "My wallet is empty because I did a lot of shopping." }, accept: ["a wallet", "purse", "billfold"], drill: { jp: "Dompet saya kosong karena saya belanja", en: "My wallet is empty because I shopped" }, hint: "DOHM-peht, swallowed e at the end. One word for both a wallet and a purse. Watch it in a crowd — Hati-hati dompet! is what a stranger may call out to you, and it is meant kindly." },
        { id: "id-u16l3-kasir", type: "vocab", front: "kasir", reading: "kasir", meaning: "cashier", example: { jp: "Kasir di toko itu sangat cepat dan baik.", en: "The cashier at that shop is very quick and kind." }, accept: ["the cashier", "till", "checkout"], drill: { jp: "Kasir di toko itu sangat cepat", en: "The cashier at that shop is very quick" }, hint: "KAH-seer. It names both the person and the counter they sit at — Bayar di kasir means pay at the checkout. From the same European root as cashier, which makes it one of the easy ones to keep." },
        { id: "id-u16l3-gratis", type: "vocab", front: "gratis", reading: "gratis", meaning: "free of charge", example: { jp: "Air di warung ini gratis untuk semua tamu.", en: "Water at this stall is free for all guests." }, accept: ["no charge", "at no cost", "on the house"], drill: { jp: "Air di warung ini gratis untuk tamu", en: "Water at this stall is free for guests" }, hint: "GRAH-tees, hard g. Free as in costing nothing — never free as in unrestricted, which is bebas. A sign reading GRATIS is a promotion, and Gratis, Pak? is a perfectly ordinary question to ask." },
        { id: "id-u16l3-menawar", type: "vocab", front: "menawar", reading: "menawar", meaning: "to bargain", example: { jp: "Di pasar kami selalu menawar harga sebelum membeli.", en: "At the market we always bargain over the price before buying." }, accept: ["to haggle", "to negotiate a price", "to make an offer"], drill: { jp: "Kami selalu menawar harga sebelum membeli", en: "We always bargain over the price before buying" }, hint: "muh-NAH-wahr. Root tawar; tawar-menawar is the haggling itself, and the bare tawar is what you hear in the act. ⚠️ The identical word tawar also means bland or unsweetened — teh tawar is tea without sugar. Two completely separate senses, and only context tells you which." },
      ],
    },
    {
      id: "id-u16l4",
      unit: 16,
      lesson: 4,
      title: "Membeli pakaian",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Buy clothes: name what you and other people are wearing, and say what is too big or too small.",
      items: [
        { id: "id-u16l4-baju", type: "vocab", front: "baju", reading: "baju", meaning: "shirt", example: { jp: "Baju putih itu lebih mahal daripada baju biru.", en: "That white shirt is more expensive than the blue shirt." }, accept: ["a shirt", "top", "clothes", "blouse"], drill: { jp: "Baju putih itu lebih mahal", en: "That white shirt is more expensive" }, hint: "BAH-joo. The everyday word for a top of any kind, and loosely for clothes in general — baju baru, new clothes. A button-up shirt specifically is a kemeja; pakaian is the formal word for clothing." },
        { id: "id-u16l4-celana", type: "vocab", front: "celana", reading: "celana", meaning: "trousers", example: { jp: "Celana hitam saya sudah lama dan sangat kotor.", en: "My black trousers are old and very dirty." }, accept: ["pants", "a pair of trousers", "slacks"], drill: { jp: "Celana hitam saya sudah lama", en: "My black trousers are old" }, hint: "chuh-LAH-na — c is CH, and the first e is swallowed. One pair or several, since Indonesian marks no number. Celana pendek, short trousers, is shorts." },
        { id: "id-u16l4-sepatu", type: "vocab", front: "sepatu", reading: "sepatu", meaning: "shoes", example: { jp: "Sepatu baru saya terlalu kecil untuk kaki saya.", en: "My new shoes are too small for my feet." }, accept: ["a shoe", "footwear", "pair of shoes"], drill: { jp: "Sepatu baru saya terlalu kecil", en: "My new shoes are too small" }, hint: "suh-PAH-too, swallowed first e. Shoes with a closed toe; flip-flops and sandals are sandal, and they are what most people wear most of the time. Ukuran sepatu is shoe size, and you will be asked for it as a number." },
        { id: "id-u16l4-topi", type: "vocab", front: "topi", reading: "topi", meaning: "hat", example: { jp: "Saya memakai topi karena hari ini sangat panas.", en: "I am wearing a hat because today is very hot." }, accept: ["a hat", "cap", "headgear"], drill: { jp: "Saya memakai topi karena hari panas", en: "I wear a hat because the day is hot" }, hint: "TOH-pee, closed o. Any hat or cap. One exception worth knowing: the black cap worn for prayer and formal occasions is a peci or songkok, and calling it a topi in that setting is wrong." },
        { id: "id-u16l4-jaket", type: "vocab", front: "jaket", reading: "jaket", meaning: "jacket", example: { jp: "Jaket ini cukup untuk cuaca dingin dan hujan.", en: "This jacket is enough for cold and rainy weather." }, accept: ["a jacket", "coat", "outer layer"], drill: { jp: "Jaket ini cukup untuk cuaca dingin", en: "This jacket is enough for cold weather" }, hint: "JAH-keht, swallowed e at the end. Borrowed straight from jacket. In a tropical country a jaket is for rain, for riding a motorbike and for fiercely air-conditioned rooms, not for winter." },
        { id: "id-u16l4-memakai", type: "vocab", front: "memakai", reading: "memakai", meaning: "to wear", example: { jp: "Tamu itu memakai baju putih dan sepatu hitam.", en: "That guest is wearing a white shirt and black shoes." }, accept: ["to put on", "to use", "to have on"], drill: { jp: "Tamu itu memakai baju putih", en: "That guest is wearing a white shirt" }, hint: "muh-mah-KAI. Root pakai, and pakai bare is what you hear: Pakai jaket! One verb covers wearing clothes AND using anything at all — memakai sepeda, to use a bicycle. Pakaian, clothing, is the same root with a tail on it." },
      ],
    },
  ],
};
