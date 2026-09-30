// ID Unit 40 — Kata sehari-hari ("The everyday words") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 2. unit1.js's 12 conventions and unit21.js's A1–A10 BIND this file.
//
// RETITLED from the scaffold's "Vocabulary 1 (A2)". `lint.js` hard-errors on a
// unit still carrying a scaffold title once it is authored, and `/^Vocabulary \d+$/`
// is on that list — so retitling in Indonesian is compulsory, not stylistic.
//
// ⚠️ THIS IS A COVERAGE UNIT AND ITS SHAPE IS DELIBERATELY MIXED. The scaffold puts
// eleven of them at A2 (coverage-a2-1 through -11). **This block owns only THIS one**
// — u41–u50 are A2 block 3's, by range. So it is filled the way a coverage unit
// should be: with the highest-value words left over from THIS block's own assigned
// domains, not with a twelfth theme.
//   Four groups, each a measured leftover:
//   l1 the SENSORY adjectives A1 skipped. A1's u10 gave size, age, weight and
//      cleanliness; u6 gave four tastes; u8 gave hot and cold. Nothing for
//      comfortable, fresh, pleasantly warm, savoury, fragrant, or a smell.
//   l2 the SOCIAL words u32 could not fit — a habit, being used to something,
//      mixing with people, being on close terms, a relationship, pulling
//      somebody up.
//   l3 the IMPACT verbs u39 deferred — hit, knock, drop, crash into, kick, plus
//      the warning shout `awas`.
//   l4 QUANTITY BEYOND A1, which is this block's assigned domain and the one slice
//      block 1's u27 left: u27 took classifiers, containers and rough amounts, and
//      nobody taught **to count, to measure, to weigh, to increase, to decrease or
//      per cent.** A course with numbers to a million and no verb for counting.
//
// AUTHORING CALLS MADE HERE:
//   ⚠️ `bertambah` AND `berkurang` ARE THE ber-/me- VALENCY PAIR §A6 SAYS MUST BE
//     CARDED, seen from the other side. A1's u14 taught `tambah` (to add — you do
//     it) and `kurang` (less). `bertambah` and `berkurang` are what the thing does
//     BY ITSELF: harga bertambah, the price goes up on its own. This is the exact
//     `mengubah`/`berubah` case block 1 named as "the single commonest Indonesian
//     error an English speaker makes", so both are carded and each hint names its
//     transitive partner. Drill-safe: findWholeWord("bertambah", "tambah") and
//     findWholeWord("berkurang", "kurang") both FAIL (the r before each is a letter).
//   ⚠️ `terbiasa` IS THE THIRD CARD OFF THE ROOT `biasa`, declared. The chain is
//     `biasanya` (A1 u15, usually) · `kebiasaan` (here, a habit) · `terbiasa`
//     (here, used to something). §A6 blesses three off one root where each is a
//     different word, and these are an adverb, a noun and a stative adjective.
//     ⚠️ `biasa` BARE IS NOT CARDED — it is readable off `biasanya` and it also
//     appears inside u37's `luar biasa` front. A fourth is refused.
//     ⚠️ `terbiasa` is also the FOURTH ter- non-superlative this block cards (with
//     terletak, terserah, tergelincir); §A5(d) says keep teaching that split, and
//     its hint does.
//   ⚠️ `jengkel` NOT CARDED — identical in meaning to u31's `kesal`. Convention 3;
//     named in that card's hint already.
//   ⚠️ `perasaan` NOT CARDED — readable straight off u20's `merasa` (§A6's ceiling),
//     and u31's `hati` and `suasana` already cover the field.
//   ⚠️ `barang` · `kain` · `pulau` · `negara` were on block 1's reserved list and are
//     LEFT for A2 block 3: `barang` is shopping (block 1's own u27 field), `kain` is
//     clothing (A1's u16), and `pulau`/`negara` are geography, which is block 3's
//     nature lane. Named here so nobody thinks they were missed.
//
// AFFIX ROOTS CHECKED BY HAND (unit1.js §3 — LEXEME fails open for Indonesian):
//   kebiasaan → biasa      see the declaration above.
//   terbiasa → biasa       same.
//   bergaul → gaul         root not taught bare.
//   hubungan → hubung      ⚠️ `menghubungi` (u33, to get in touch) is this block's
//     other card off this root — two words, two units (§A6). Neither
//     whole-word-contains the other.
//   menegur → tegur        root not taught.
//   memukul → pukul        root not taught bare. ⚠️ `pukul` also means o'clock in
//     time-telling, which A1 taught as `jam` instead — so there is no front clash.
//   mengetuk → ketuk       root not taught.
//   menjatuhkan → jatuh    ⚠️ `jatuh` IS carded in u39. This is the -kan causative
//     and it is §A6's valency pair again: jatuh is it falls, menjatuhkan is you
//     drop it. Drill-safe — findWholeWord("menjatuhkan", "jatuh") FAILS (the n
//     before and the k after are letters).
//   menabrak → tabrak      root not taught.
//   menendang → tendang    root not taught.
//   menghitung → hitung    root not taught bare.
//   mengukur → ukur        ⚠️ `ukuran` (a size) IS taught (u14). Carded: a size is
//     not the act of measuring. Drill-safe (neither whole-word-contains the other).
//   menimbang → timbang    root not taught.
//   bertambah → tambah     see the declaration above.
//   berkurang → kurang     see the declaration above.
//   nyaman · segar · hangat · gurih · harum · bau · akrab · awas · persen — roots.
//
// GLOSSES REGLOSSED TO CLEAR A LIVE `accept[]` (unit21.js §A4):
//   `hangat` is NOT "warm" — u8's `panas` accepts it. → "pleasantly warm".
//   `akrab` is NOT "close, of friends" — that splits on the comma and "close" is
//     u7's `dekat`. → "on close terms", comma-free.
//   `bertambah` does not accept "to rise" (u4's `bangun`) or "to go up" (u7's
//     `naik`); `berkurang` does not accept "to drop off" (u18's `mengantar`).
//   `awas` does not accept "watch out" — u2's `hati-hati` owns it. → "look out".
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT40 = {
  id: "id-u40",
  lang: "id",
  title: "Kata sehari-hari",
  order: 40,
  stage: "a2",
  lessons: [
    {
      id: "id-u40l1",
      unit: 40,
      lesson: 1,
      title: "Nyaman dan segar",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Describe how a place or a dish strikes your senses — comfortable, fresh, pleasantly warm, savoury, fragrant — or say it smells.",
      items: [
        { id: "id-u40l1-nyaman", type: "vocab", front: "nyaman", reading: "nyaman", meaning: "comfortable", example: { jp: "Kursi di gedung itu sangat nyaman.", en: "The chairs in that building are very comfortable." }, accept: ["cosy", "pleasant to be in"], drill: { jp: "Kamar itu nyaman dan sangat bersih", en: "That room is comfortable and very clean" }, hint: "NYAH-man, ny one sound. Of a chair, a room, a journey or a pair of shoes — physical ease. ⚠️ Not santai, which you met earlier in this block: santai is a relaxed PERSON, nyaman is a comfortable THING. Kenyamanan is comfort. Do not confuse the spelling with nyamuk, a mosquito, which you already have." },
        { id: "id-u40l1-segar", type: "vocab", front: "segar", reading: "segar", meaning: "fresh", example: { jp: "Sayur di pasar pagi itu masih segar.", en: "The vegetables at that morning market are still fresh." }, accept: ["just picked", "refreshing"], drill: { jp: "Air dingin itu segar pada siang hari", en: "That cold water is refreshing at midday" }, hint: "SUH-gar. Of food that has not gone off, of air, and of a person who feels restored — badan segar after a shower. ⚠️ Baru, which you already have, is new; segar is fresh as in not stale. Menyegarkan is refreshing as an adjective, and minuman segar is a cold drink." },
        { id: "id-u40l1-hangat", type: "vocab", front: "hangat", reading: "hangat", meaning: "pleasantly warm", example: { jp: "Kopi itu masih hangat di gelas.", en: "That coffee is still pleasantly warm in the glass." }, accept: ["lukewarm", "mild in temperature"], drill: { jp: "Air hangat itu baik untuk badan", en: "That warm water is good for the body" }, hint: "HAH-ngat, ng one hum. ⚠️ THE MIDDLE TEMPERATURE A1 LEFT OUT: you had panas, hot, and dingin, cold, and nothing between them. Air hangat is warm water, which is what you actually ask for. Also used of a welcome or an argument — sambutan hangat, a warm welcome; berita hangat, hot news." },
        { id: "id-u40l1-gurih", type: "vocab", front: "gurih", reading: "gurih", meaning: "savoury", example: { jp: "Bumbu itu membuat rasa ikan lebih gurih.", en: "That seasoning makes the fish taste more savoury." }, accept: ["rich in flavour", "with a satisfying saltiness"], drill: { jp: "Makanan gurih itu terkenal di daerah ini", en: "That savoury food is famous in this district" }, hint: "GOO-reeh. The sixth taste word, after manis, asin, pedas, asam and pahit — and the one English struggles with: gurih is the rich, satisfying savoury of coconut milk, fried shallots or a good broth. It is a compliment, and asin, salty, is not. Closest to the Japanese idea of umami." },
        { id: "id-u40l1-harum", type: "vocab", front: "harum", reading: "harum", meaning: "fragrant", example: { jp: "Bunga di taman itu sangat harum.", en: "The flowers in that garden are very fragrant." }, accept: ["sweet smelling", "with a lovely scent"], drill: { jp: "Nasi hangat itu harum di dapur", en: "That warm rice smells lovely in the kitchen" }, hint: "HAH-room. Always positive — flowers, rice, soap, a person. ⚠️ Do not confuse the spelling with harus, must, which you already have: one letter apart and nothing alike. Wangi is the near-identical twin and equally common; minyak wangi is perfume. The opposite is on the next card." },
        { id: "id-u40l1-bau", type: "vocab", front: "bau", reading: "bau", meaning: "a smell", example: { jp: "Ada bau ikan di gang kecil itu.", en: "There is a fish smell in that small alley." }, accept: ["an odour", "smelly"], drill: { jp: "Bau ikan itu masih ada di dapur", en: "That fish smell is still in the kitchen" }, hint: "BAH-oo, two syllables. ⚠️ Noun and adjective at once, and USUALLY NEGATIVE: bau on its own means it stinks, so kamar ini bau is a complaint. For a good smell you want harum, on the card before. Berbau means to smell of something. Bau badan is body odour." },
      ],
    },
    {
      id: "id-u40l2",
      unit: 40,
      lesson: 2,
      title: "Kebiasaan dan hubungan",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Describe how you get on with people over time — a habit, being used to something, mixing, being close, a relationship — and pull somebody up when needed.",
      items: [
        { id: "id-u40l2-kebiasaan", type: "vocab", front: "kebiasaan", reading: "kebiasaan", meaning: "a habit", example: { jp: "Kebiasaan itu susah untuk berhenti.", en: "That habit is hard to stop." }, accept: ["what someone always does", "a routine"], drill: { jp: "Kebiasaan buruk itu menyebabkan masalah besar", en: "That bad habit causes a big problem" }, hint: "kuh-bee-a-SAH-an, five syllables. Built on biasa, ordinary — a habit is what has become ordinary for you. ⚠️ Biasanya, usually, which you already have, is the adverb off the same root, and the card after this one is a third. Kebiasaan also means a custom, close to the adat you met earlier in this block." },
        { id: "id-u40l2-terbiasa", type: "vocab", front: "terbiasa", reading: "terbiasa", meaning: "used to something", example: { jp: "Saya sudah terbiasa dengan makanan pedas.", en: "I am already used to spicy food." }, accept: ["accustomed to it", "no longer thrown by it"], drill: { jp: "Dia terbiasa berdiri di angkot penuh", en: "He is used to standing in a full minibus" }, hint: "tuhr-bee-AH-sa. Takes dengan for what you are used to. ⚠️ ANOTHER ter- THAT IS NOT A SUPERLATIVE — the fourth in this block, with terletak, terserah and tergelincir: ter- here marks a settled state you arrived at. Belum terbiasa is the honest answer for a newcomer, and Indonesians will ask you it constantly." },
        { id: "id-u40l2-bergaul", type: "vocab", front: "bergaul", reading: "bergaul", meaning: "to mix with people", example: { jp: "Dia mudah bergaul dengan penduduk daerah itu.", en: "He mixes easily with the residents of that district." }, accept: ["to socialise", "to get on with others"], drill: { jp: "Anak itu bergaul dengan semua tetangga", en: "That child mixes with all the neighbours" }, hint: "buhr-GAH-ool. Mudah bergaul, easy to mix with, is high praise in Indonesia and is what a job advert asks for. ⚠️ Bertemu, which you already have, is to meet once; bergaul is keeping company over time. Pergaulan is one's social circle, and bahasa gaul is slang — the colloquial layer this course defers." },
        { id: "id-u40l2-akrab", type: "vocab", front: "akrab", reading: "akrab", meaning: "on close terms", example: { jp: "Mereka akrab sejak masih kecil.", en: "They have been on close terms since they were small." }, accept: ["thick as thieves", "familiar with each other"], drill: { jp: "Dia akrab dengan semua rekan di kantor", en: "She is on close terms with all her colleagues" }, hint: "AHK-rab. ⚠️ Dekat, which you already have, is physically near — and it accepts close, which is why this card does not. Akrab is close as in intimate, of people only: teman akrab is a close friend. Keakraban is closeness. Sejak, which you have from u36, is its natural partner." },
        { id: "id-u40l2-hubungan", type: "vocab", front: "hubungan", reading: "hubungan", meaning: "a relationship", example: { jp: "Hubungan antara dua keluarga itu masih baik.", en: "The relationship between those two families is still good." }, accept: ["a connection between people", "ties"], drill: { jp: "Hubungan itu berubah sejak tahun lalu", en: "That relationship has changed since last year" }, hint: "hoo-BOONG-an. Built on hubung, to link — and you already have menghubungi, to get in touch, from the same root. Covers every kind of connection: family, romantic, diplomatic, and a logical link. Ada hubungan? means is there a connection? Berhubungan dengan means to be connected with." },
        { id: "id-u40l2-menegur", type: "vocab", front: "menegur", reading: "menegur", meaning: "to pull someone up", example: { jp: "Guru menegur pelajar yang melanggar aturan.", en: "The teacher pulled up the pupil who broke the rules." }, accept: ["to have a word with someone", "to reprimand"], drill: { jp: "Atasan menegur karyawan itu dengan tenang", en: "The boss had a word with that employee calmly" }, hint: "muh-nuh-GOOR. ⚠️ Two senses that sit oddly together for an English speaker: to greet somebody, and to tell them off. Both are addressing them directly, and context decides which. Menyapa, which you already have, is the safe word for greeting; menegur usually means correcting. Teguran is a reprimand." },
      ],
    },
    {
      id: "id-u40l3",
      unit: 40,
      lesson: 3,
      title: "Awas dan menabrak",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Shout a warning and describe the impact — hitting, knocking, dropping something, crashing into it, kicking it.",
      items: [
        { id: "id-u40l3-awas", type: "vocab", front: "awas", reading: "awas", meaning: "look out", example: { jp: "Awas, ada mobil dari belakang!", en: "Look out, there is a car behind you!" }, accept: ["mind out", "beware"], drill: { jp: "Awas ada anjing besar di gang", en: "Look out, there is a big dog in the alley" }, hint: "AH-was. Shouted on its own as an immediate warning — Awas! — and printed on signs: Awas anjing, beware of the dog. ⚠️ Hati-hati, which you already have, is be careful in general and is advice; awas is the shout when something is about to hit you. Mengawasi is to supervise or keep watch over." },
        { id: "id-u40l3-memukul", type: "vocab", front: "memukul", reading: "memukul", meaning: "to hit", example: { jp: "Jangan memukul adik kamu lagi.", en: "Do not hit your younger brother again." }, accept: ["to strike", "to give someone a smack"], drill: { jp: "Dia memukul pintu dengan tangan kanan", en: "He hit the door with his right hand" }, hint: "muh-MOO-kool. Striking a person or a thing deliberately. Pukul is the bare stem and also means o'clock in formal time-telling — pukul tujuh, seven o'clock — where you already have jam for the everyday version. Pukulan is a blow or a stroke." },
        { id: "id-u40l3-mengetuk", type: "vocab", front: "mengetuk", reading: "mengetuk", meaning: "to knock", example: { jp: "Dia mengetuk pintu tiga kali.", en: "He knocked on the door three times." }, accept: ["to tap on a door", "to rap on something"], drill: { jp: "Tamu itu mengetuk pintu dengan sopan", en: "That guest knocked on the door politely" }, hint: "muh-NGUH-took, opening with the ng hum. Specifically the polite knock, not a blow — so it is memukul's gentle cousin. Ketuk pintu is the phrase. In Indonesia a knock is usually accompanied by Permisi, which you already have." },
        { id: "id-u40l3-menjatuhkan", type: "vocab", front: "menjatuhkan", reading: "menjatuhkan", meaning: "to drop something", example: { jp: "Saya menjatuhkan gelas di lantai dapur.", en: "I dropped a glass on the kitchen floor." }, accept: ["to let something fall", "to bring something down"], drill: { jp: "Dia menjatuhkan kunci di dalam angkot", en: "He dropped the key inside the minibus" }, hint: "muhn-ja-TOOH-kan. ⚠️ THE PAIR TO jatuh, to fall, which you met in the last unit, and the split is the one English speakers get wrong: jatuh is it falls BY ITSELF, menjatuhkan is YOU drop it. Gelas itu jatuh against saya menjatuhkan gelas. That ber-/me-kan pattern runs right through the language." },
        { id: "id-u40l3-menabrak", type: "vocab", front: "menabrak", reading: "menabrak", meaning: "to crash into", example: { jp: "Motor itu menabrak pintu gedung.", en: "That motorbike crashed into the building door." }, accept: ["to run into something", "to collide with"], drill: { jp: "Mobil itu menabrak pohon di pinggir jalan", en: "That car crashed into a tree at the roadside" }, hint: "muh-NAH-brak. The moving thing is the subject and what it hits is the object: A menabrak B. Kecelakaan is the accident that results, and tabrakan is the collision itself. ⚠️ Ditabrak, the passive, is what you will actually hear in the news — that pattern is deferred to B1, but recognise it here." },
        { id: "id-u40l3-menendang", type: "vocab", front: "menendang", reading: "menendang", meaning: "to kick", example: { jp: "Anak itu menendang kaleng di trotoar.", en: "That child kicked a tin along the pavement." }, accept: ["to boot something", "to give it a kick"], drill: { jp: "Dia menendang pintu lemari yang rusak", en: "He kicked the broken cupboard door" }, hint: "muh-nuhn-DAHNG. With the foot, so it goes with kaki, which you already have. Tendangan is a kick, and it is football vocabulary you will hear constantly: tendangan bebas, a free kick. Menendang bola is to kick a ball." },
      ],
    },
    {
      id: "id-u40l4",
      unit: 40,
      lesson: 4,
      title: "Menghitung dan mengukur",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Do something WITH a number instead of only saying it — counting, measuring, weighing, and reporting that an amount went up, went down, or changed by a percentage.",
      items: [
        { id: "id-u40l4-menghitung", type: "vocab", front: "menghitung", reading: "menghitung", meaning: "to count", example: { jp: "Kasir itu menghitung uang di kotak.", en: "That cashier is counting the money in the box." }, accept: ["to work out a total", "to do the sums"], drill: { jp: "Guru menghitung jumlah pelajar di kelas", en: "The teacher counts the number of pupils in the class" }, hint: "muhng-hee-TOONG. 🚨 A COURSE WITH NUMBERS TO A MILLION AND NO VERB FOR COUNTING — until now. Covers counting items and calculating a sum alike. Hitung is the bare stem: Hitung dulu! Hitungan is a calculation, and perhitungan is the reckoning. You already have jumlah, an amount, which is what it produces." },
        { id: "id-u40l4-mengukur", type: "vocab", front: "mengukur", reading: "mengukur", meaning: "to measure", example: { jp: "Dia mengukur panjang meja itu.", en: "He measured the length of that table." }, accept: ["to take the measurements of", "to gauge"], drill: { jp: "Kami mengukur jarak antara dua gedung", en: "We measure the distance between two buildings" }, hint: "muhng-OO-koor. ⚠️ Ukuran, a size, which you already have, is built on the same root — a size is the result of measuring. Takes the dimension as its object: mengukur tinggi, mengukur berat. Also figurative: mengukur kemampuan, to gauge an ability. Pengukuran is measurement." },
        { id: "id-u40l4-menimbang", type: "vocab", front: "menimbang", reading: "menimbang", meaning: "to weigh", example: { jp: "Ibu menimbang bawang di pasar itu.", en: "Mother weighed the onions at that market." }, accept: ["to put on the scales", "to weigh something up"], drill: { jp: "Dokter menimbang bayi setiap bulan", en: "The doctor weighs the baby every month" }, hint: "muh-NEEM-bang. Putting something on scales, and also weighing a decision up: menimbang untung dan rugi. Timbangan is the scales themselves. ⚠️ Berat, which you already have, is heavy or the weight itself; menimbang is finding out what it is. Pertimbangan is a consideration." },
        { id: "id-u40l4-bertambah", type: "vocab", front: "bertambah", reading: "bertambah", meaning: "to grow in number", example: { jp: "Jumlah penumpang bertambah setiap tahun.", en: "The number of passengers grows every year." }, accept: ["to keep growing", "to build up"], drill: { jp: "Anggota kelompok itu bertambah setiap bulan", en: "That group's membership grows every month" }, hint: "buhr-TAHM-bah. ⚠️ THE PAIR TO tambah, to add, which you already have — and the split matters: YOU tambah something, but a number bertambah by itself. ⚠️ Use it for COUNTS, not prices: jumlah bertambah, anggota bertambah. A price naik or turun — harga bertambah is not what Indonesians say. Its opposite is on the next card, and the two are a set. Tambahan is an addition." },
        { id: "id-u40l4-berkurang", type: "vocab", front: "berkurang", reading: "berkurang", meaning: "to decrease", example: { jp: "Jumlah penduduk di desa itu berkurang.", en: "The population in that village is decreasing." }, accept: ["to dwindle", "to shrink"], drill: { jp: "Bahaya di jalan itu berkurang sejak kemarin", en: "The danger on that road has decreased since yesterday" }, hint: "buhr-KOO-rang. ⚠️ Built on kurang, less, which you already have, and it is bertambah's exact mirror: the amount goes down on its own. Mengurangi is the transitive twin, to reduce something — so mengurangi harga is you cutting the price, harga berkurang is it falling. Learn bertambah and berkurang as one pair." },
        { id: "id-u40l4-persen", type: "vocab", front: "persen", reading: "persen", meaning: "per cent", example: { jp: "Harga itu berkurang sepuluh persen.", en: "That price went down ten per cent." }, accept: ["percentage", "out of a hundred"], drill: { jp: "Hanya lima persen penduduk tinggal di sini", en: "Only five per cent of the residents live here" }, hint: "puhr-SEN. Goes AFTER the number, like every Indonesian measure word you have met: lima persen, sepuluh persen. Persentase is a percentage as a noun. ⚠️ Persen also means a tip or a small gift in casual speech — minta persen — so context matters. You already have ratus, a hundred, which is what it literally divides by." },
      ],
    },
  ],
};
