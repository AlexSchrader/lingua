// ID Unit 48 — Dagang dan milik ("Trade and ownership") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 3 (u41–u50). unit1.js's 12 conventions and unit21.js's 10 A2
// conventions BIND this file. RETITLED AND RETHEMED from "Vocabulary 9 (A2)".
//
// ⚠️ THE THIRD SLOT AT RISK, and money is the most heavily spent domain in the
// corpus, so this one was measured hardest. THREE merged units already own parts
// of it:
//   u16 (A1) — retail: harga · murah · mahal · membeli · menjual · membayar ·
//              belanja · menawar · kasir · gratis · kembalian · rupiah · tas
//   u24 (A2b1) — the workplace: perusahaan · atasan · rekan · karyawan ·
//              pelanggan · gaji · tunjangan · lembur · tugas · laporan · melamar ·
//              wawancara · kontrak · proyek · berhasil · gagal
//   u27 (A2b1) — money over time: menabung · utang · kaya · miskin · kantong
// So this unit takes NONE of retail, NONE of employment terms, and NONE of saving.
//
// WHAT IS LEFT, measured against all 720 merged cards: **the business side.** No
// word exists for capital, profit, loss, an expense, tax, producing anything, a
// seller, a buyer, trading, goods, a warehouse, a service, an owner, renting,
// funding, a receipt, a fine, or reaching a target — and **no trade or profession
// beyond guru · dokter · sopir · kasir.** A learner could buy a mango and could
// not say what anybody does for a living.
//
// ⚠️ `barang` and `menyewa` ARE ON BLOCK 1's RESERVED LIST and are taken here.
// Flagged in the hand-back.
//
// AFFIX ROOTS STRIPPED AND GREPPED BY HAND (convention 3):
//   menghasilkan → hasil  ⚠️ `hasil` IS taught ("a result", u26l3). Carded anyway:
//     a result is a thing, producing is an act. Drill-safe — "menghasilkan" holds
//     "hasil" at index 4, preceded by `g`, so findWholeWord does not match.
//     ⚠️ AND ITS GLOSS HAD TO MOVE TWICE: `membuat` (u25l3) accepts "to produce"
//     AND `hasil` accepts "the yield", so neither "to produce" nor "to yield" was
//     available. It is "to generate".
//   membiayai → biaya  ⚠️ `biaya` is carded in l1 of THIS unit. Two cards off one
//     root in one unit, in different lessons — A6 allows it where each is a
//     different word, and a cost is not the act of paying for something. Drill-safe:
//     "membiayai" holds "biaya" at index 3, preceded by `m`.
//   penjual  → jual  ⚠️ `menjual` (u16l1) is taught. pe- agent noun; the
//     `pelajar`/`mengajar` precedent. Neither whole-word-contains the other.
//   pembeli  → beli  ⚠️ `membeli` (u16l1) is taught. Same shape, same reasoning.
//   pedagang → dagang  root not taught; `berdagang` (l2 of this unit) is the other
//     card off it, in a different lesson. Neither form contains the other.
//   pemilik  → milik   root not taught. ⚠️ `memiliki` is DECLINED: `punya` (u4l3)
//     already owns "to have" and memiliki is its formal twin — convention 3's
//     one-card rule for a register variant. Named in `pemilik`'s hint.
//   petani → tani · nelayan → layan · pegawai → gawai · buruh (a root) ·
//   mencapai → capai · menyewa → sewa — all roots untaught, none carded.
//   modal · laba · rugi · pajak · barang · gudang · jasa · kwitansi · denda ·
//   tukang — all roots.
//
// ⚠️ ONE PAIR WAS DELIBERATELY BROKEN UP FOR THE LEARNER'S SAKE, and no tool would
// have flagged it. `pelayan` (a waiter) was the natural sixth trade in l4 — and
// `nelayan` (a fisherman) is already there. The two differ by ONE letter, and a
// choice card drawing its distractors from the same lesson would have offered them
// against each other. That is manufactured confusion, not teaching. `buruh` (a
// labourer) took the slot; `pelayan` is left for a later band.
//
// ⛔ NOT CARDED: `bon` (a chit) — a near-synonym of `kwitansi`, which is carded;
// convention 3. `sewa` as a noun — `menyewa` covers it and the noun adds nothing.
// `untung` is already taught (u28l2) as "luckily", which is why `laba` carries the
// profit sense here.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT48 = {
  id: "id-u48",
  lang: "id",
  title: "Dagang dan milik",
  order: 48,
  stage: "a2",
  lessons: [
    {
      id: "id-u48l1",
      unit: 48,
      lesson: 1,
      title: "Modal dan laba",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about the money side of a business — what you put in, what comes back, what it costs, what the state takes, and what the place turns out.",
      items: [
        { id: "id-u48l1-modal", type: "vocab", front: "modal", reading: "modal", meaning: "capital", example: { jp: "Modal untuk toko itu sangat besar.", en: "The capital for that shop is very large." }, accept: ["start-up money", "the money you put in", "funds to begin with"], drill: { jp: "Dia tidak punya modal untuk toko", en: "He does not have capital for a shop" }, hint: "MOH-dal. The money you put IN at the start, as opposed to laba, what comes back out. Menanam modal, literally to plant capital, is to invest — and it uses menanam, which you now know. Dutch kapitaal gave Indonesian modal via Arabic." },
        { id: "id-u48l1-laba", type: "vocab", front: "laba", reading: "laba", meaning: "a profit", example: { jp: "Laba toko itu kecil tahun ini.", en: "That shop's profit is small this year." }, accept: ["a gain", "what a business earns", "the surplus"], drill: { jp: "Laba pabrik itu naik bulan ini", en: "That factory's profit went up this month" }, hint: "LAH-ba. The commercial word. ⚠️ Untung, which you already know as luckily, ALSO means profit in everyday speech — so hearing untung about a business is normal, and laba is the one on the accounts. Keuntungan covers both senses formally." },
        { id: "id-u48l1-rugi", type: "vocab", front: "rugi", reading: "rugi", meaning: "a loss", example: { jp: "Perusahaan itu rugi tahun lalu.", en: "That company made a loss last year." }, accept: ["out of pocket", "at a deficit", "a financial loss"], drill: { jp: "Dia rugi karena harga turun", en: "He lost money because the price went down" }, hint: "ROO-ghee, hard g. Both the noun and the state — perusahaan itu rugi needs no verb. The exact opposite of laba. Kerugian is the amount lost. ⚠️ Rugi is also used of wasted effort: rugi waktu, a waste of time." },
        { id: "id-u48l1-biaya", type: "vocab", front: "biaya", reading: "biaya", meaning: "an expense", example: { jp: "Biaya sekolah anak itu mahal.", en: "That child's school expenses are high." }, accept: ["a cost you must pay", "an outlay", "charges"], drill: { jp: "Biaya perjalanan itu terlalu besar", en: "The cost of that journey is too much" }, hint: "bee-AH-ya, three syllables. ⚠️ Harga, which you know, is the PRICE on a thing; biaya is the cost of DOING something — biaya sekolah, biaya perjalanan. Ongkos, which you also know, is narrower still: a fare. The verb off this root comes in lesson three." },
        { id: "id-u48l1-pajak", type: "vocab", front: "pajak", reading: "pajak", meaning: "tax", example: { jp: "Semua warga harus membayar pajak.", en: "All citizens must pay tax." }, accept: ["a levy", "duty paid to the state", "taxation"], drill: { jp: "Pajak rumah itu naik tahun ini", en: "The tax on that house went up this year" }, hint: "PAH-jak. Bayar pajak is to pay tax and is the phrase you will see everywhere. Pajak is also the word for a market in North Sumatra, which is worth knowing if you travel — but the tax sense is the national one." },
        { id: "id-u48l1-anggaran", type: "vocab", front: "anggaran", reading: "anggaran", meaning: "a budget", example: { jp: "Anggaran untuk proyek itu tidak cukup.", en: "The budget for that project is not enough." }, accept: ["a spending plan", "funds set aside", "an allocation"], drill: { jp: "Kami membuat anggaran baru untuk tahun depan", en: "We are making a new budget for next year" }, hint: "ang-gah-RAHN — ngg is the hum plus a hard g, the trap from unit 1. The money planned for a purpose, where biaya is money actually spent. Every Indonesian office and government body talks about its anggaran; the national one is the APBN, read out letter by letter." },
      ],
    },
    {
      id: "id-u48l2",
      unit: 48,
      lesson: 2,
      title: "Penjual dan pembeli",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Describe both sides of a trade — who is selling, who is buying, what is changing hands, where it is stored, and what is sold that is not a thing at all.",
      items: [
        { id: "id-u48l2-penjual", type: "vocab", front: "penjual", reading: "penjual", meaning: "a seller", example: { jp: "Penjual di pasar itu ramah.", en: "The seller at that market is friendly." }, accept: ["a vendor", "the one selling", "a stallholder"], drill: { jp: "Penjual itu memberi harga lebih murah", en: "That seller gives a cheaper price" }, hint: "puhn-JOO-al. Built on menjual, to sell, which you know — pe- in front of a verb makes the one who does it, exactly as pelajar comes off ajar. Its opposite is the next card, and the two are worth learning as a pair." },
        { id: "id-u48l2-pembeli", type: "vocab", front: "pembeli", reading: "pembeli", meaning: "a buyer", example: { jp: "Ada banyak pembeli di toko baru.", en: "There are many buyers at the new shop." }, accept: ["a purchaser", "the one buying", "a customer at a stall"], drill: { jp: "Pembeli itu menawar harga dengan sabar", en: "That buyer haggles over the price patiently" }, hint: "puhm-buh-LEE. From membeli, to buy. ⚠️ Pelanggan, which you already know, is a REGULAR customer of a place; a pembeli is simply whoever is buying right now. Same pe- doer shape as penjual." },
        { id: "id-u48l2-berdagang", type: "vocab", front: "berdagang", reading: "berdagang", meaning: "to trade", example: { jp: "Ayah saya berdagang di pasar.", en: "My father trades at the market." }, accept: ["to do business", "to buy and sell", "to deal in goods"], drill: { jp: "Dia berdagang buah di pinggir jalan", en: "He trades fruit at the roadside" }, hint: "buhr-DAH-gang. The ber- makes it an activity you engage in rather than something done to an object — so berdagang is being a trader, not selling one item. The root dagang gives pedagang, a trader, later in this unit." },
        { id: "id-u48l2-barang", type: "vocab", front: "barang", reading: "barang", meaning: "goods", example: { jp: "Barang di toko itu mahal.", en: "The goods in that shop are expensive." }, accept: ["merchandise", "items for sale", "a thing you own"], drill: { jp: "Semua barang itu ada di gudang", en: "All those goods are in the warehouse" }, hint: "BAH-rang. Enormously useful and much broader than goods: it covers merchandise, luggage, possessions, and in casual speech just stuff. Barang-barang saya is my things. ⚠️ Not to be confused with orang, a person, which is one letter away." },
        { id: "id-u48l2-gudang", type: "vocab", front: "gudang", reading: "gudang", meaning: "a warehouse", example: { jp: "Gudang pabrik itu besar dan gelap.", en: "That factory's warehouse is big and dark." }, accept: ["a store room", "a goods store", "a place goods are kept"], drill: { jp: "Barang baru ada di dalam gudang", en: "The new goods are inside the warehouse" }, hint: "GOO-dang, hard g. Any storage space from a household box room to an industrial depot. Note the -dang ending it shares with berdagang, which is coincidence, not a pattern — gudang is a whole word from Malay." },
        { id: "id-u48l2-jasa", type: "vocab", front: "jasa", reading: "jasa", meaning: "a service", example: { jp: "Jasa itu mahal tetapi cepat.", en: "That service is expensive but fast." }, accept: ["a service you pay for", "work provided", "the service trade"], drill: { jp: "Kami memakai jasa perusahaan itu", en: "We use that company's service" }, hint: "JAH-sa. A service SOLD, in contrast to barang, a good — the pair barang dan jasa is the standard phrase for goods and services. It also means a meritorious deed: berjasa, to have rendered good service." },
      ],
    },
    {
      id: "id-u48l3",
      unit: 48,
      lesson: 3,
      title: "Milik dan sewa",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Settle who owns and who pays — the owner, renting instead of buying, footing the bill, the receipt, the fine, and hitting the target.",
      items: [
        { id: "id-u48l3-pemilik", type: "vocab", front: "pemilik", reading: "pemilik", meaning: "an owner", example: { jp: "Pemilik toko itu sudah tua.", en: "That shop's owner is already old." }, accept: ["the person who owns it", "a proprietor", "the holder of a thing"], drill: { jp: "Pemilik rumah ini bekerja di kantor", en: "This house's owner works at an office" }, hint: "puh-MEE-leek. From milik, property or belonging — the pe- doer shape again. ⚠️ The verb off the same root, memiliki, is NOT taught separately: punya, which you know, already means to have, and memiliki is simply its formal written twin." },
        { id: "id-u48l3-menyewa", type: "vocab", front: "menyewa", reading: "menyewa", meaning: "to rent", example: { jp: "Kami menyewa rumah di kota itu.", en: "We rent a house in that city." }, accept: ["to hire", "to take on lease", "to pay to use"], drill: { jp: "Dia menyewa mobil untuk perjalanan itu", en: "He rents a car for that journey" }, hint: "muh-nyuh-WAH — ny one sound. ⚠️ It means to rent FROM someone. To rent OUT is menyewakan, with the extra -kan, and that single syllable reverses the direction — a distinction worth noticing now, because Indonesian uses -kan that way constantly. Sewa is the rent itself." },
        { id: "id-u48l3-membiayai", type: "vocab", front: "membiayai", reading: "membiayai", meaning: "to fund", example: { jp: "Ayah membiayai sekolah anak itu.", en: "The father funds that child's schooling." }, accept: ["to pay the costs of", "to finance", "to bankroll"], drill: { jp: "Pemerintah membiayai jembatan baru itu", en: "The government funds that new bridge" }, hint: "muhm-bee-ah-YAH-ee, five syllables — take it slowly. Built on biaya, an expense, from the first lesson: funding something is carrying its costs. Membayar, which you know, is paying a specific bill; membiayai is bearing the whole cost of a project." },
        { id: "id-u48l3-kwitansi", type: "vocab", front: "kwitansi", reading: "kwitansi", meaning: "a receipt", example: { jp: "Saya meminta kwitansi di toko itu.", en: "I asked for a receipt at that shop." }, accept: ["a written proof of payment", "a docket", "a payment slip"], drill: { jp: "Kwitansi itu ada di dalam dompet", en: "That receipt is inside the wallet" }, hint: "kwee-TAHN-see. ⚠️ Note the kw- at the start: Indonesian writes the sound English spells qu-, so quittance became kwitansi. Dutch kwitantie. Minta kwitansi is what you say when you need proof of payment, and you will need it often." },
        { id: "id-u48l3-denda", type: "vocab", front: "denda", reading: "denda", meaning: "a monetary penalty", example: { jp: "Denda itu mahal untuk pelajar.", en: "That fine is expensive for a pupil." }, accept: ["a fine you must pay", "a punishment in money", "a fixed penalty"], drill: { jp: "Dia membayar denda karena datang terlambat", en: "He pays a fine for arriving late" }, hint: "DEHN-da. Money you pay as a punishment — a traffic fine, a library fine, a late fee. Didenda is to be fined. ⚠️ Keep it apart from biaya, a cost you agreed to, and from pajak, a tax: a denda is owed because something went wrong." },
        { id: "id-u48l3-mencapai", type: "vocab", front: "mencapai", reading: "mencapai", meaning: "to reach a target", example: { jp: "Kami mencapai tujuan itu tahun ini.", en: "We reached that goal this year." }, accept: ["to attain", "to get as far as", "to hit a figure"], drill: { jp: "Laba pabrik mencapai jumlah besar", en: "The factory's profit reached a large figure" }, hint: "muhn-chah-PAH-ee — c is CH, four syllables. Reaching a goal, a number or a place. ⚠️ Sampai, which you know, is arriving somewhere; mencapai is achieving something, and it takes a target rather than a destination. Pencapaian is an achievement." },
      ],
    },
    {
      id: "id-u48l4",
      unit: 48,
      lesson: 4,
      title: "Petani dan tukang",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say what someone does for a living — work on the land, at sea, with their hands, in an office, at a stall, or for a daily wage.",
      items: [
        { id: "id-u48l4-petani", type: "vocab", front: "petani", reading: "petani", meaning: "a farmer", example: { jp: "Petani itu bekerja di tanah sendiri.", en: "That farmer works his own land." }, accept: ["someone who farms", "a person on the land", "a cultivator"], drill: { jp: "Petani menanam biji pada pagi hari", en: "The farmer plants seeds in the morning" }, hint: "puh-TAH-nee. From tani, farming, with the pe- that names a doer. Pertanian is agriculture as a field. It is the single commonest occupation word in Indonesian, so it earns the first slot here." },
        { id: "id-u48l4-nelayan", type: "vocab", front: "nelayan", reading: "nelayan", meaning: "a fisherman", example: { jp: "Nelayan itu pergi ke laut pagi ini.", en: "That fisherman went out to sea this morning." }, accept: ["someone who fishes for a living", "a fisher", "a person who works at sea"], drill: { jp: "Nelayan membawa ikan ke pasar", en: "The fisherman brings fish to the market" }, hint: "nuh-LAH-yan. ⚠️ Note the ne- at the front, not pe- — this word does not follow the usual doer pattern, so learn it whole. It means someone who fishes FOR A LIVING; someone fishing for fun would memancing." },
        { id: "id-u48l4-tukang", type: "vocab", front: "tukang", reading: "tukang", meaning: "a handyman", example: { jp: "Tukang itu memperbaiki pintu kami.", en: "That handyman repaired our door." }, accept: ["a tradesman", "a skilled workman", "someone who does a manual trade"], drill: { jp: "Tukang kayu itu bekerja di pabrik", en: "That carpenter works at the factory" }, hint: "TOO-kang. It names a trade when you put the material or job after it: tukang kayu is a carpenter, tukang cuci a laundry worker, tukang becak a rickshaw driver. On its own it means the man you call to fix things. ⚠️ Casually it can also mean someone who habitually does something — tukang tidur, a great sleeper." },
        { id: "id-u48l4-pegawai", type: "vocab", front: "pegawai", reading: "pegawai", meaning: "an office worker", example: { jp: "Pegawai kantor itu sangat sibuk.", en: "That office's staff are very busy." }, accept: ["a salaried employee", "an official on the payroll", "a clerk"], drill: { jp: "Pegawai baru itu datang pagi ini", en: "That new employee came this morning" }, hint: "puh-gah-WAH-ee, four syllables. ⚠️ Karyawan, which you already know, is a company employee; pegawai leans official and is the standard word for a civil servant — pegawai negeri. Both are correct for an office job, and pegawai is the more formal." },
        { id: "id-u48l4-pedagang", type: "vocab", front: "pedagang", reading: "pedagang", meaning: "a trader", example: { jp: "Pedagang itu menjual sayur dan buah.", en: "That trader sells vegetables and fruit." }, accept: ["a merchant", "someone who trades", "a dealer"], drill: { jp: "Pedagang kecil itu ada di pasar", en: "That small trader is at the market" }, hint: "puh-DAH-gang. From the same root as berdagang, to trade, in the second lesson — so the two are the activity and the person. Pedagang kaki lima, literally a five-foot trader, is the name for a street vendor and is a phrase you will see constantly." },
        { id: "id-u48l4-buruh", type: "vocab", front: "buruh", reading: "buruh", meaning: "a labourer", example: { jp: "Buruh di pabrik itu bekerja lembur.", en: "The labourers at that factory work overtime." }, accept: ["a manual worker", "a hired hand", "a worker paid by the day"], drill: { jp: "Buruh itu membawa besi ke gudang", en: "That labourer carries iron to the warehouse" }, hint: "BOO-rooh, the final h breathed. Physical wage labour, especially in a factory or on a site. ⚠️ It carries political weight in Indonesia: Hari Buruh is Labour Day and serikat buruh a trade union, so the word implies workers as a class, not just a job." },
      ],
    },
  ],
};
