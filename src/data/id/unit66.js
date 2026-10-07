// ID Unit 66 — Ekonomi dan pasar ("The economy and the markets") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 2 (u64–u76). unit1.js's 12 conventions and unit21.js's 10 A2
// conventions BIND this file. RETITLED AND NARROWED from "Money and the
// economy".
//
// THE HOLE. "Money" was spent twice before this slot and the second half of the
// title is the whole of what was left:
//   u16 took the SHOP COUNTER — `uang` `harga` `membeli` `menjual` `membayar`
//     `mahal` `murah` `rupiah` `belanja` `gratis` `menawar`.
//   u27 took the HOUSEHOLD PURSE — `menabung` `utang` `kembalian` `kaya`
//     `miskin` `dompet`.
//   u48 took the FIRM — `modal` `laba` `biaya` `pajak` `anggaran` `penjual`
//     `pembeli` `berdagang` `jasa` `menyewa` `membiayai` `kwitansi` `denda`
//     `pegawai` `pedagang` `gudang` `barang`.
//   SO WHAT WAS MISSING — the MACRO level, and this is the core-inventory gap
//   the crew lead flagged by name. Measured against all 1,200 cards there was no
//   word for **the economy**, nor for inflation, a crisis, demand, a consumer,
//   competing, a bank account, cash, a loan, interest, assets, a share,
//   investment, bankruptcy, industry, exporting, income, poverty,
//   unemployment, welfare or a subsidy. A learner could haggle over a shirt and
//   could not read a single line of a business page.
//
// ⚠️ SCOPE BOUNDARY WITH MY OWN u74 (politics), stated because the money of the
// state is the obvious overlap:
//   THIS UNIT OWNS MONEY AND MARKETS — prices in aggregate, banks, firms,
//   incomes, the poverty line. `ekonomi` is HERE, by the lead's allocation.
//   u74 OWNS THE PROCESS OF POWER. `pajak` is already taught (u48) and
//   `anggaran` is already taken (u48), so u74 reaches the state's money only
//   through `kebijakan` (a policy) — it does not re-card any of this.
//   `subsidi` sits exactly on the line and is HERE, because in Indonesia a
//   subsidy is a price (fuel, rice, cooking oil) before it is a policy.
//
// AFFIX ROOTS STRIPPED AND GREPPED BY HAND (unit1.js convention 3):
//   permintaan    → minta       ⚠️ `meminta` (u22, to ask for) is taught off the
//     same root. Carded anyway: convention 3's test fails — *to ask for* does not
//     give you *demand* in the economic sense, which is an aggregate, not an act.
//     Drill-safe: neither string whole-word-contains the other.
//   pinjaman      → pinjam      ⚠️ `meminjam` (u27, to borrow) is taught off the
//     same root and its accept[] carries "to take on loan"; this card's gloss is
//     the NOUN "a loan", which `normalizeMeaning` leaves as a different string.
//     Checked by hand against A4's rule. Drill-safe.
//   penghasilan   → hasil       ⚠️ `hasil` (u26, a result) IS taught. Carded: an
//     income is not a result. Drill-safe — "penghasilan" contains "hasil" at
//     index 4 preceded by `g`, a letter, so findWholeWord does not match.
//   kemiskinan    → miskin      ⚠️ `miskin` (u27, poor) IS taught. The ke-…-an
//     noun is the social fact rather than the personal state; A6's test passes.
//     Drill-safe (`m` before the root).
//   pengangguran  → anggur      root `anggur` not taught in any sense (it is also
//     the word for a grape, which the corpus does not teach either). No clash.
//   kesejahteraan → sejahtera   root not taught.
//   bersaing      → saing       root not taught.
//   mengekspor    → ekspor      the bare loan `ekspor` is NOT carded (see below),
//     so there is no second card on this root.
//   bunga bank    → bunga · bank  ⚠️ **`bunga` (u19) IS TAKEN — IT MEANS FLOWER.**
//     That is why interest is carded as the COMPOUND and never as the bare word:
//     a second `bunga` front is impossible, and `bunga` alone would be a
//     homograph with no way to tell the learner which one is wanted. The
//     compound is unambiguous, it is what a bank actually writes, and convention
//     8 allows a fixed phrase beside a component word. ⚠️ A drill containing
//     "bunga bank" DOES whole-word-match front `bunga`, which is harmless (that
//     card is u19's and has its own drill), but it is why `bunga bank`'s drill
//     must not be reused anywhere near u19.
//   kelas menengah → kelas · tengah  ⚠️ BOTH taught — `kelas` (u18, a class) and
//     `tengah` (u36, the middle). Carded as a fixed compound because the social
//     sense is not readable off the parts, and because `menengah` on its own
//     means intermediate (as in a school level) rather than middle-class.
//   ekonomi · inflasi · krisis · konsumen · rekening · tunai · dana · harta ·
//   saham · investasi · bangkrut · industri · impor · subsidi — roots or loans.
//
// ⛔ NOT CARDED:
//   `bank` — front and gloss are the same string: the `televisi`/`polisi`/`bus`
//     copy-task trap (unit1.js, A10). It is used freely in examples and lives in
//     `rekening`'s and `bunga bank`'s hints.
//   `ekspor` (the noun) — would be a second card on the root beside
//     `mengekspor`, and `impor` already carries the noun side of the pair.
//   `produksi` / `memproduksi` — `pabrik` (u42, a factory) and `barang` (u48,
//     goods) already cover the ground, and `industri` is the word a learner
//     actually needs for the sector.
//   `pertumbuhan` (growth) and `meningkat` (to increase) — GROWTH OVER TIME IS
//     NOT THIS UNIT'S. Block 1's u59 (Change over time) and u53 (Comparison and
//     degree) own that field; both roots are already taught (`tumbuh` u25,
//     `tingkat` u30) and reaching for them here is exactly how two blocks card
//     the same word. Deliberately left.
//   `upah` (wages) — `gaji` (u24) already accepts "wages", so the gloss is
//     unavailable and there is no honest second one. Named in `penghasilan`'s
//     hint.
//   `konsumen` is glossed "the consuming public" and NOT "a customer", because
//     `pelanggan` (u24) accepts "a client" and `pembeli` (u48) accepts "a
//     customer at a stall". A4's accept[] rule.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT66 = {
  id: "id-u66",
  lang: "id",
  title: "Ekonomi dan pasar",
  order: 66,
  stage: "b1",
  lessons: [
    {
      id: "id-u66l1",
      unit: 66,
      lesson: 1,
      title: "Ekonomi, inflasi, dan krisis",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Talk about an economy as a whole — whether prices are rising, whether there is a crisis, what people are demanding and who is competing for them.",
      items: [
        { id: "id-u66l1-ekonomi", type: "vocab", front: "ekonomi", reading: "ekonomi", meaning: "the economy", example: { jp: "Ekonomi negara ini tahun ini lebih baik dari tahun lalu.", en: "This country's economy is better this year than last year." }, accept: ["economic life as a whole", "the economic system", "the economic situation"], drill: { jp: "Ekonomi kota itu tergantung pasar besar", en: "That city's economy depends on the big market" }, hint: "eh-koh-NOH-mee, four syllables, stress on the third. ⚠️ THE SINGLE WORD THIS COURSE HAS BEEN MISSING MOST IN THIS FIELD — without it you cannot read a headline. It covers the economy and economics alike: ilmu ekonomi is the subject, using ilmu which you know. Ekonomi sulit means times are hard." },
        { id: "id-u66l1-inflasi", type: "vocab", front: "inflasi", reading: "inflasi", meaning: "inflation", example: { jp: "Inflasi tahun ini membuat harga makanan naik.", en: "Inflation this year has pushed food prices up." }, accept: ["a general rise in prices", "prices going up across the board", "the rate prices rise"], drill: { jp: "Inflasi di negara itu masih sangat tinggi", en: "Inflation in that country is still very high" }, hint: "een-FLAH-see. The -si ending for English -tion again, as in polusi and posisi which you know. It is a word ordinary Indonesians use constantly, because food prices move fast there: inflasi naik, inflasi turun, both in every news bulletin." },
        { id: "id-u66l1-krisis", type: "vocab", front: "krisis", reading: "krisis", meaning: "a crisis", example: { jp: "Krisis ekonomi itu membuat banyak orang kehilangan pekerjaan.", en: "That economic crisis made many people lose their jobs." }, accept: ["an emergency in an economy", "a bad turn of events", "a critical moment"], drill: { jp: "Krisis itu mulai di negara lain dulu", en: "That crisis started in another country first" }, hint: "KREE-sees. Note the single s in the middle and the -is ending. ⚠️ Krisis moneter — the 1998 currency crash — is a date every Indonesian over forty can name, so the word carries real weight and is not used lightly. Masa krisis is a time of crisis." },
        { id: "id-u66l1-permintaan", type: "vocab", front: "permintaan", reading: "permintaan", meaning: "demand", example: { jp: "Permintaan untuk kopi dari pulau itu sangat besar.", en: "Demand for coffee from that island is very large." }, accept: ["how much people want to buy", "the call for something", "buyers' appetite for a thing"], drill: { jp: "Permintaan barang itu turun pada musim hujan", en: "Demand for that product falls in the rainy season" }, hint: "puhr-meen-tah-AHN, five syllables with the last two separate. Built on minta, to ask for — you know meminta — in the per-…-an frame that makes an abstract whole. So it is literally the asking-for, the aggregate of everyone wanting a thing. It also means a request in ordinary use: permintaan saya sederhana." },
        { id: "id-u66l1-konsumen", type: "vocab", front: "konsumen", reading: "konsumen", meaning: "the consuming public", example: { jp: "Konsumen di kota besar mau harga yang lebih murah.", en: "Consumers in big cities want cheaper prices." }, accept: ["consumers as a group", "the people who buy and use things", "the buying public"], drill: { jp: "Konsumen muda itu suka barang dari luar negeri", en: "Those young consumers like goods from abroad" }, hint: "kon-SOO-men. ⚠️ Glossed the consuming public rather than *a customer*, because pelanggan and pembeli, which you both know, already hold the shop-counter senses — and two cards may never share one answer. Konsumen is the economic category: hak konsumen, consumer rights." },
        { id: "id-u66l1-bersaing", type: "vocab", front: "bersaing", reading: "bersaing", meaning: "to compete", example: { jp: "Dua pabrik itu bersaing untuk konsumen yang sama.", en: "Those two factories compete for the same consumers." }, accept: ["to be in competition", "to vie with somebody", "to go up against a rival"], drill: { jp: "Toko kecil itu susah bersaing dengan pasar besar", en: "That small shop finds it hard to compete with the big market" }, hint: "buhr-SAH-eeng, the a and i as two sounds. From saing, not taught alone, with ber- marking a mutual action — the same shape as bertemu and berdebat, which you know: it takes two. Harga yang bersaing is a competitive price. The rival itself is a saingan." },
      ],
    },
    {
      id: "id-u66l2",
      unit: 66,
      lesson: 2,
      title: "Bank, pinjaman, dan harta",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Deal with a bank — open an account, pay in cash, take out a loan, ask what the interest is, and say what you own.",
      items: [
        { id: "id-u66l2-rekening", type: "vocab", front: "rekening", reading: "rekening", meaning: "a bank account", example: { jp: "Saya mau membuka rekening baru di bank dekat kantor.", en: "I want to open a new account at the bank near the office." }, accept: ["an account at a bank", "the account money sits in", "a deposit account"], drill: { jp: "Nomor rekening saya ada di kwitansi itu", en: "My account number is on that receipt" }, hint: "ruh-KUH-ning, the first two e's both swallowed. Dutch rekening, a bill or a reckoning — which is still its other sense in some phrases. Nomor rekening is an account number, and in Indonesia you will be asked for one constantly, because bank transfer is how almost everything is paid. The word bank itself is spelled exactly as in English, so it has no card." },
        { id: "id-u66l2-tunai", type: "vocab", front: "tunai", reading: "tunai", meaning: "paid in notes and coins", example: { jp: "Warung kecil itu hanya mau uang tunai.", en: "That small food stall only wants cash." }, accept: ["in hard currency", "settled on the spot", "not on credit"], drill: { jp: "Kami membayar tunai untuk semua barang itu", en: "We paid cash for all those goods" }, hint: "TOO-nai, the ai as in EYE. ⚠️ Glossed the long way round because `uang`, which you know, already accepts *cash* — and two cards may never share an answer. Uang tunai is the full phrase for cash money; bayar tunai is to pay cash. It also means discharged in full, as of a promise: menunaikan janji." },
        { id: "id-u66l2-pinjaman", type: "vocab", front: "pinjaman", reading: "pinjaman", meaning: "a loan", example: { jp: "Pinjaman dari bank itu membantu dia membuka toko.", en: "That bank loan helped him open a shop." }, accept: ["borrowed money", "a sum lent to somebody", "credit extended to you"], drill: { jp: "Dia membayar pinjaman itu setiap bulan", en: "He pays that loan every month" }, hint: "peen-JAH-man. From pinjam, to borrow — you know meminjam — in the -an frame that makes the THING borrowed. ⚠️ Mind the direction: a pinjaman is the money, whoever is holding it. Indonesian does not split borrow and lend the way English does; meminjamkan, with -kan, is to lend." },
        { id: "id-u66l2-bungabank", type: "vocab", front: "bunga bank", reading: "bungabank", meaning: "interest on money", example: { jp: "Bunga bank di negara ini sekarang sangat tinggi.", en: "Bank interest in this country is very high now." }, accept: ["what a bank charges on a loan", "the percentage a loan costs", "what savings earn"], drill: { jp: "Bunga bank itu naik lagi bulan ini", en: "That bank interest went up again this month" }, hint: "BOO-nga BAHNK. ⚠️ AND HERE IS WHY IT IS TWO WORDS. Indonesian really does call interest bunga, a FLOWER — the money flowers. But bunga is already yours as flower, and one front cannot carry both, so interest is learned as the whole phrase bunga bank, which is what a bank writes anyway. The image is worth keeping: money that blossoms." },
        { id: "id-u66l2-dana", type: "vocab", front: "dana", reading: "dana", meaning: "a pool of money set aside", example: { jp: "Dana untuk sekolah baru itu datang dari pemerintah.", en: "The money for that new school came from the government." }, accept: ["a fund", "money earmarked for a purpose", "a financial pot"], drill: { jp: "Dana itu belum cukup untuk membuat jembatan", en: "That fund is not yet enough to build the bridge" }, hint: "DAH-na. Sanskrit, originally a gift or alms. ⚠️ Glossed the long way because `uang`, which you know, already accepts *funds*. A dana is money with a job attached: dana pensiun, dana bantuan. You already know membiayai, to fund — the verb to this noun's sense." },
        { id: "id-u66l2-harta", type: "vocab", front: "harta", reading: "harta", meaning: "assets", example: { jp: "Harta keluarga itu hanya rumah dan tanah di desa.", en: "That family's assets are only a house and land in the village." }, accept: ["property somebody owns", "wealth held as things", "possessions of value"], drill: { jp: "Harta orang itu sangat banyak di luar negeri", en: "That person's assets abroad are very large" }, hint: "HAR-ta. Arabic in origin, and it means what you OWN rather than what you earn — land, houses, gold, a business. ⚠️ Not kaya, which you know as rich: kaya describes the person, harta is the stuff. Harta warisan is inherited property, and harta karun is buried treasure." },
      ],
    },
    {
      id: "id-u66l3",
      unit: 66,
      lesson: 3,
      title: "Saham, industri, dan perdagangan dunia",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Talk about owning part of a business and about a country trading with the world — shares, investment, going bust, exports and imports.",
      items: [
        { id: "id-u66l3-saham", type: "vocab", front: "saham", reading: "saham", meaning: "a share in a company", example: { jp: "Dia membeli saham perusahaan itu lima tahun lalu.", en: "He bought shares in that company five years ago." }, accept: ["a stake in a firm", "equity in a business", "stock in a company"], drill: { jp: "Saham pabrik itu turun pada hari Senin", en: "That factory's shares fell on Monday" }, hint: "SAH-ham, with the h sounded. Arabic in origin. Note Indonesian does not mark number, so saham is one share or a whole holding as context decides: pemegang saham, a shareholder, literally a share-holder. Pasar saham is the stock market." },
        { id: "id-u66l3-investasi", type: "vocab", front: "investasi", reading: "investasi", meaning: "investment", example: { jp: "Investasi dari luar negeri itu membuat pabrik baru di pulau ini.", en: "That foreign investment built a new factory on this island." }, accept: ["money put in to grow", "a stake placed in something", "capital committed to a venture"], drill: { jp: "Investasi di daerah itu naik tahun ini", en: "Investment in that region rose this year" }, hint: "een-ves-TAH-see. The -si ending once more. Berinvestasi is the verb, to invest. ⚠️ You already know modal, capital — modal is the money you START a business with, investasi is money placed in order to earn. Indonesians say investasi for anything from shares to buying land." },
        { id: "id-u66l3-bangkrut", type: "vocab", front: "bangkrut", reading: "bangkrut", meaning: "bankrupt", example: { jp: "Perusahaan itu bangkrut karena krisis tahun lalu.", en: "That company went bankrupt because of last year's crisis." }, accept: ["gone bust", "unable to pay what it owes", "financially finished"], drill: { jp: "Toko besar itu bangkrut pada bulan lalu", en: "That big shop went bankrupt last month" }, hint: "BAHNG-kroot, ng as one hum. Dutch bankroet. It is a stative word in Indonesian, so no verb is needed — perusahaan itu bangkrut, that company is bankrupt. You already know utang, a debt; bangkrut is what happens when the utang wins." },
        { id: "id-u66l3-industri", type: "vocab", front: "industri", reading: "industri", meaning: "industry", example: { jp: "Industri di pulau itu masih kecil tetapi sudah mulai tumbuh.", en: "Industry on that island is still small but has begun to grow." }, accept: ["a sector of production", "manufacturing as a whole", "a branch of business"], drill: { jp: "Industri kayu itu memberi pekerjaan untuk desa", en: "That timber industry gives work to the village" }, hint: "een-DOOS-tree. Note the final i where English has -y, and no e before the r — Indonesian writes the sound. It covers a whole sector: industri makanan, industri pariwisata. You know pabrik, a factory; a pabrik is one building, an industri is all of them together." },
        { id: "id-u66l3-mengekspor", type: "vocab", front: "mengekspor", reading: "mengekspor", meaning: "to export", example: { jp: "Negara ini mengekspor kopi dan minyak ke banyak negara.", en: "This country exports coffee and oil to many countries." }, accept: ["to sell abroad", "to ship goods out", "to send out of the country"], drill: { jp: "Pulau itu mengekspor ikan ke negara lain", en: "That island exports fish to other countries" }, hint: "muhng-ek-SPOR. The meng- prefix glued onto the Dutch loan ekspor — Indonesian prefixes borrowed verbs exactly as it does its own, which is how you get mengekspor, mengunduh and memproduksi. The bare noun ekspor is not carded here; use impor's card as the pattern for both." },
        { id: "id-u66l3-impor", type: "vocab", front: "impor", reading: "impor", meaning: "imports", example: { jp: "Impor makanan itu membuat harga di pasar turun.", en: "Those food imports made prices in the market fall." }, accept: ["goods brought in from abroad", "what a country buys in", "incoming trade"], drill: { jp: "Impor dari negara itu naik setiap tahun", en: "Imports from that country rise every year" }, hint: "EEM-por. Note the single p and the final r — not the English -port. Barang impor is an imported product, and in Indonesia it still carries a faint ring of prestige. The verb is mengimpor, built exactly like mengekspor on the previous card." },
      ],
    },
    {
      id: "id-u66l4",
      unit: 66,
      lesson: 4,
      title: "Penghasilan, kemiskinan, dan subsidi",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Talk about who has enough and who does not — income, poverty, unemployment, welfare, subsidies and the middle class.",
      items: [
        { id: "id-u66l4-penghasilan", type: "vocab", front: "penghasilan", reading: "penghasilan", meaning: "income", example: { jp: "Penghasilan keluarga itu hanya dari pasar.", en: "That family's income comes only from the market." }, accept: ["what somebody earns", "money coming in", "earnings"], drill: { jp: "Penghasilan dia naik setelah dua tahun", en: "His income rose after two years" }, hint: "puhng-hah-SEE-lan. From hasil, a result or a yield, which you know, in the peng-…-an frame — so it is literally the yielding. ⚠️ Broader than gaji, which you know as a salary: a gaji is paid by an employer, penghasilan is everything you take in, including a stall, a field or a side job. Hourly pay would be upah, which this course does not card because gaji already accepts *wages*." },
        { id: "id-u66l4-kemiskinan", type: "vocab", front: "kemiskinan", reading: "kemiskinan", meaning: "poverty", example: { jp: "Kemiskinan di daerah itu turun sedikit tahun ini.", en: "Poverty in that region fell a little this year." }, accept: ["being poor as a social fact", "widespread want", "the state of having too little"], drill: { jp: "Kemiskinan di desa itu masih sangat besar", en: "Poverty in that village is still very great" }, hint: "kuh-mees-KEE-nan. The ke-…-an frame on miskin, poor, which you know — so it turns the adjective into the condition. You met the same frame in kerusakan last unit: it is the single most productive noun-maker in Indonesian, and the grammar unit at the end of this band is built on it. Garis kemiskinan is the poverty line." },
        { id: "id-u66l4-pengangguran", type: "vocab", front: "pengangguran", reading: "pengangguran", meaning: "unemployment", example: { jp: "Pengangguran di kota besar itu naik karena banyak pabrik berhenti.", en: "Unemployment in that big city rose because many factories stopped." }, accept: ["being out of work", "joblessness", "the number out of work"], drill: { jp: "Pengangguran muda di negara ini sangat tinggi", en: "Youth unemployment in this country is very high" }, hint: "puhng-ahng-GOO-ran, five syllables and two ng hums. From anggur, idle — which is a homograph of the word for a grape and is not taught in either sense. ⚠️ It means BOTH unemployment and an unemployed person, so dia pengangguran is he is out of work. Menganggur is the verb, to be idle." },
        { id: "id-u66l4-kesejahteraan", type: "vocab", front: "kesejahteraan", reading: "kesejahteraan", meaning: "welfare", example: { jp: "Pemerintah bilang kesejahteraan rakyat paling penting.", en: "The government says the people's welfare is most important." }, accept: ["wellbeing of a population", "prosperity and security together", "how well people are doing"], drill: { jp: "Kesejahteraan karyawan di pabrik itu lebih baik sekarang", en: "Worker welfare at that factory is better now" }, hint: "kuh-suh-jah-tuh-rah-AHN — six syllables, and the longest word in this unit. From sejahtera, prosperous and at peace, which is not taught alone, in the ke-…-an frame. ⚠️ Not just money: kesejahteraan means being comfortable, safe and well all at once, which is why it is in every government slogan." },
        { id: "id-u66l4-subsidi", type: "vocab", front: "subsidi", reading: "subsidi", meaning: "a subsidy", example: { jp: "Subsidi untuk bensin itu membuat harga lebih murah.", en: "That fuel subsidy makes the price cheaper." }, accept: ["state help with a price", "money the state pays to hold a price down", "support paid to keep costs low"], drill: { jp: "Subsidi makanan itu sudah berhenti tahun lalu", en: "That food subsidy stopped last year" }, hint: "soob-SEE-dee. ⚠️ In Indonesia this is not an abstraction — fuel, cooking oil, rice and electricity have all been subsidised for decades, and cutting a subsidi has brought governments down. Bensin bersubsidi is subsidised petrol. It is a price word before it is a politics word, which is why it sits in this unit and not with the ministries." },
        { id: "id-u66l4-kelasmenengah", type: "vocab", front: "kelas menengah", reading: "kelasmenengah", meaning: "the middle class", example: { jp: "Kelas menengah di kota itu sekarang lebih besar dari dulu.", en: "The middle class in that city is now larger than before." }, accept: ["middle-income people", "those between rich and poor", "the middle layer of society"], drill: { jp: "Kelas menengah baru itu membeli mobil dan rumah", en: "That new middle class buys cars and houses" }, hint: "KUH-las muh-NUH-ngah. Both halves are already yours: kelas, a class, and tengah, the middle. ⚠️ But menengah on its own means intermediate — sekolah menengah is secondary school — so the social sense lives only in this fixed phrase. Indonesia's kelas menengah has grown enormously in thirty years, which is why the phrase is everywhere in its newspapers." },
      ],
    },
  ],
};
