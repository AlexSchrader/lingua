// ID Unit 28 — Kata keterangan kalimat ("Sentence adverbs") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 1 (u21–u30). unit1.js's 12 conventions and unit21.js's A1–A10 BIND
// this file.
//
// 🚨 RETHEMED FROM "Time and adverbs", because A1 spent the TIME half four times
// over and never touched the ADVERB half. Measured against all 480 A1 cards:
//   • clock and calendar — u5 (jam · menit · pagi · siang · sore · malam · hari ·
//     besok · kemarin · nanti · waktu) and u9 (the weekdays · tanggal · bulan ·
//     tahun · minggu · kapan · lalu · setiap).
//   • aspect — u13 (sudah · belum · pernah · sedang · masih · akan · tadi ·
//     hampir · terus · berhenti · mulai · selesai).
//   • sequence and frequency — u15 l2 and l3 (sebelum · setelah · awal ·
//     terakhir · berikut · sementara · selalu · biasanya · kadang-kadang ·
//     langsung · segera · sebentar), plus u9's sering and jarang.
//   • **SENTENCE ADVERBS: nothing.** No *suddenly*, no *finally*, no *actually*,
//     no *it turns out*, no *on the contrary*, no *instead*, no *luckily*, no
//     *unfortunately*, no *no wonder*, no *especially*, no *at least*, no *even*,
//     no *on purpose*, no *by chance*, no *in a hurry*, no *secretly*.
// A1 gave the learner every way to say WHEN and no way to say HOW IT STRUCK HIM.
// These are the words that turn a report into a narrative, and they carry an
// enormous amount of everyday Indonesian.
//   l1  how a story turns  — tiba-tiba · akhirnya · ternyata · sebenarnya ·
//                            justru · malah
//   l2  how you feel about it — untung · sayang · kasihan · wajar · pantas · percuma
//   l3  scope and degree   — terutama · khusus · umum · kebanyakan · setidaknya · bahkan
//   l4  manner             — sengaja · buru-buru · pelan-pelan · diam-diam ·
//                            terpaksa · kebetulan
//
// 🚨 **THIS UNIT IS WHERE THE HYPHEN TRAP IS MOST DANGEROUS, AND FOUR CARDS TRIP
// IT.** unit21.js A7: `-` is not a letter, so `findWholeWord` matches a bare word
// at the edge of a reduplication. Every one of these four fronts contains, as a
// whole word, a SHORTER front taught elsewhere:
//   `tiba-tiba`   contains `tiba`   (to reach a destination — earlier in this block)
//   `diam-diam`   contains `diam`   (to be silent — earlier in this block)
//   `buru-buru`   → `buru` is NOT taught, so this one is safe in both directions
//   `pelan-pelan` → `pelan` is NOT taught, also safe
// For the two that are live, **the shorter card's drill was checked and carries
// only the bare word** — `tiba`'s drill and `diam`'s drill contain no doubled form.
// `lint:curriculum` sees none of this: its check is `.includes()`, which reports
// both directions as fine. The router's is whole-word, which does not.
//
// ⚠️ `kebanyakan` IS GLOSSED "most of them", NOT "most", because A1's `paling`
// (most) owns the bare word. That is not a fudge — the two are different parts of
// speech and the gloss makes it clear: `paling` is the superlative marker (paling
// besar, biggest), `kebanyakan` is a quantifier over a set (kebanyakan orang, most
// people). A learner who swaps them produces nonsense in both directions.
//
// ⚠️ `justru` AND `malah` ARE NEAR-TWINS AND BOTH ARE CARDED, which needs saying
// because convention 3 usually forbids that. They are not two registers of one
// word: `malah` says *instead, the opposite happened* and is neutral-to-negative;
// `justru` says *precisely the contrary, and that is the point*, and is emphatic.
// Indonesians use them in different slots and would not swap them. Both hints name
// the other, which is the honest way to card a genuinely close pair.
//
// AFFIX ROOTS CHECKED BY HAND (the LEXEME probe fails open for Indonesian —
// unit1.js convention 3; each root stripped off and grepped in TAUGHT-WORDS.md):
//   akhirnya → akhir    ⚠️ `akhir` (end) IS taught, and `terakhir` (final) is A1's
//     third card off it. So this is the FOURTH word on that root, and it still
//     passes convention 3 — *end* and *final* do not give you the discourse marker
//     *finally, at last*. Drill-safe: "akhirnya" holds "akhir" at index 0 but the
//     next character is "n", a letter, so findWholeWord("akhir") does NOT match.
//   sebenarnya → benar  ⚠️ `benar` (correct) IS taught. Carded: *correct* does not
//     give you *actually*. Drill-safe ("benar" at index 2, between "e" and "n").
//   setidaknya → tidak  ⚠️ `tidak` (not) IS taught. Carded: *not* does not give you
//     *at least*. Drill-safe ("tidak" at index 2, between "e" and "n").
//   terutama → utama    root not taught. ⚠️ ANOTHER ter- THAT IS NOT A SUPERLATIVE
//     — see unit30.js l1, where the split is taught head-on.
//   terpaksa → paksa    root not taught. Also a non-superlative ter-.
//   kebetulan → betul · kebanyakan → banyak ⚠️ (`banyak`, many, IS taught; carded
//     because *many* does not give you *most of them*, and drill-safe since
//     "kebanyakan" holds "banyak" at index 2 between "e" and "a") ·
//   tiba-tiba → tiba ⚠️ (see the hyphen note above) ·
//   diam-diam → diam ⚠️ (same) · ternyata → nyata · percuma · wajar · pantas ·
//   untung · sayang · kasihan · khusus · umum · bahkan · sengaja · justru · malah
//     — every other root above is untaught.
//
// ⚠️ `sayang` CARRIES TWO SENSES A LEARNER MUST NOT MIX UP, and the hint says both.
// As an interjection it is *what a pity*; as a noun and a term of address it is
// *darling*. Saying the second when you mean the first is a memorable mistake. The
// pity sense takes the card because it is the adverbial one this lesson is about.
//
// REDUPLICATIONS CARDED (convention 5 — non-plural doublings only): `tiba-tiba`,
// `buru-buru`, `pelan-pelan`, `diam-diam`. Not one is a plural; each builds a new
// adverb, which is precisely the pattern convention 5 says to card. `buru`,
// `pelan` and `tiba` bare are not adverbs at all.
//
// FOLD CHECK (measured through the real `normalizeReading(f, "id")`): "tibatiba" ·
// "buruburu" · "pelanpelan" · "diamdiam" — all `[a-z]+`, no collision with any of
// the 480 A1 readings or with this block's other 216.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT28 = {
  id: "id-u28",
  lang: "id",
  title: "Kata keterangan kalimat",
  order: 28,
  stage: "a2",
  lessons: [
    {
      id: "id-u28l1",
      unit: 28,
      lesson: 1,
      title: "Tiba-tiba dan akhirnya",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Tell a story with a shape — mark the sudden turn, the revelation, and how it finally ended.",
      items: [
        { id: "id-u28l1-tibatiba", type: "vocab", front: "tiba-tiba", reading: "tibatiba", meaning: "suddenly", example: { jp: "Tiba-tiba hujan besar datang sore ini.", en: "Suddenly heavy rain came this afternoon." }, accept: ["all at once", "out of nowhere", "abruptly"], drill: { jp: "Tiba-tiba kamar itu menjadi gelap", en: "Suddenly that room went dark" }, hint: "TEE-ba-TEE-ba. A doubling of tiba, to reach a destination — the thing ARRIVES on you with no warning, which is exactly the picture. It normally opens the clause, and it is the standard way an Indonesian story marks its turn." },
        { id: "id-u28l1-akhirnya", type: "vocab", front: "akhirnya", reading: "akhirnya", meaning: "finally", example: { jp: "Akhirnya kami tiba di rumah malam itu.", en: "Finally we reached home that night." }, accept: ["at last", "in the end", "eventually"], drill: { jp: "Akhirnya dia setuju dengan rencana kami", en: "In the end he agreed with our plan" }, hint: "ah-KHEER-nya, the kh a light rasp and the ny one sound. Built on akhir, the end, which you already have — the -nya turns it into *in the end*. ⚠️ It carries relief or impatience: akhirnya! on its own means at last!" },
        { id: "id-u28l1-ternyata", type: "vocab", front: "ternyata", reading: "ternyata", meaning: "it turns out", example: { jp: "Ternyata dia sudah tahu berita itu.", en: "It turns out he already knew that news." }, accept: ["as it happens", "apparently in fact", "it emerged that"], drill: { jp: "Ternyata kunci itu ada di kantong", en: "It turned out the key was in the pocket" }, hint: "tuhr-NYAH-ta, ny one sound. 🚨 ENORMOUSLY COMMON and hard for English speakers to place, because English has no single word for it. It marks the moment a belief is corrected: you thought X, ternyata Y. ⚠️ Here ter- does not mean most; nyata means evident." },
        { id: "id-u28l1-sebenarnya", type: "vocab", front: "sebenarnya", reading: "sebenarnya", meaning: "actually", example: { jp: "Sebenarnya saya tidak mau pergi.", en: "Actually I do not want to go." }, accept: ["in truth", "to be honest", "as a matter of fact"], drill: { jp: "Sebenarnya harga itu kurang lebih sama", en: "Actually that price is more or less the same" }, hint: "suh-buh-NAR-nya. Built on benar, correct — literally in-its-correctness. ⚠️ It is a POLITENESS TOOL as much as a fact marker: sebenarnya softens a disagreement or a refusal, exactly as English *actually* does, and Indonesians use it constantly for that." },
        { id: "id-u28l1-justru", type: "vocab", front: "justru", reading: "justru", meaning: "on the contrary", example: { jp: "Saya tidak marah, justru saya senang.", en: "I am not angry; on the contrary, I am glad." }, accept: ["quite the opposite", "precisely the reverse", "if anything"], drill: { jp: "Harga itu justru lebih murah sekarang", en: "That price is on the contrary cheaper now" }, hint: "JOOS-troo. Emphatic: it says the truth is the exact reverse of what was expected, and that this is the POINT. ⚠️ Compare malah, the next card: malah says *instead, the opposite happened*, neutrally; justru insists on it." },
        { id: "id-u28l1-malah", type: "vocab", front: "malah", reading: "malah", meaning: "instead", example: { jp: "Dia tidak diam, malah berbicara terus.", en: "He did not stay quiet; instead he kept talking." }, accept: ["rather the other way", "far from it", "on top of that"], drill: { jp: "Obat itu malah membuat saya pusing", en: "That medicine instead made me dizzy" }, hint: "MAH-lah. It marks a result that went the OTHER way from the one intended, usually to somebody's cost — the drill is the classic shape. ⚠️ Compare justru, which insists the reverse is precisely so. Malahan is the same word, slightly more formal." },
      ],
    },
    {
      id: "id-u28l2",
      unit: 28,
      lesson: 2,
      title: "Untung dan sayang",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "React to news rather than just report it — call it lucky, a shame, fair enough, or a waste of effort.",
      items: [
        { id: "id-u28l2-untung", type: "vocab", front: "untung", reading: "untung", meaning: "luckily", example: { jp: "Untung kami tidak terlambat pagi ini.", en: "Luckily we were not late this morning." }, accept: ["fortunately", "it was lucky that", "thankfully"], drill: { jp: "Untung hujan berhenti sebelum kami berangkat", en: "Luckily the rain stopped before we set off" }, hint: "OON-toong, ng hum to finish. ⚠️ It is ALSO the noun for a PROFIT — untung besar, a big profit — and beruntung means fortunate. Untungnya is the fuller adverb. It always opens the clause: Untung dia datang." },
        { id: "id-u28l2-sayang", type: "vocab", front: "sayang", reading: "sayang", meaning: "what a pity", example: { jp: "Sayang dia tidak bisa datang.", en: "What a pity he cannot come." }, accept: ["unfortunately", "a shame", "regrettably"], drill: { jp: "Sayang acara itu selesai lebih awal", en: "Unfortunately that event finished earlier" }, hint: "SAH-yang, ng hum at the end. ⚠️ TWO VERY DIFFERENT SENSES. As said here it is *what a pity*. As a noun and a term of address it means DARLING — and menyayangi is to love dearly, next door to the cinta you met in the very first unit. Context separates them absolutely, but the overlap catches everyone once." },
        { id: "id-u28l2-kasihan", type: "vocab", front: "kasihan", reading: "kasihan", meaning: "poor thing", example: { jp: "Kasihan anak itu sakit setiap minggu.", en: "Poor child, he is ill every week." }, accept: ["what a shame for them", "I feel sorry for them", "poor him"], drill: { jp: "Kasihan kucing itu tidak punya rumah", en: "Poor cat, it has no home" }, hint: "kah-see-AHN. Sympathy for a PERSON or an animal, where sayang is regret about a SITUATION. Built on kasih, love or to give — the same kasih inside terima kasih. ⚠️ Said with real feeling, not sarcastically; it is a kind word in Indonesian." },
        { id: "id-u28l2-wajar", type: "vocab", front: "wajar", reading: "wajar", meaning: "only natural", example: { jp: "Wajar dia marah karena kami terlambat.", en: "It is only natural he was angry because we were late." }, accept: ["reasonable", "fair enough", "understandable"], drill: { jp: "Wajar anak kecil takut di malam hari", en: "It is only natural a small child is afraid at night" }, hint: "WAH-jar. It says a reaction is FAIR, given the circumstances — the everyday way to excuse somebody. Kewajaran is reasonableness. ⚠️ Do not confuse it with pantas, the next card: wajar says a reaction is fair, pantas says a cause has been explained." },
        { id: "id-u28l2-pantas", type: "vocab", front: "pantas", reading: "pantas", meaning: "no wonder", example: { jp: "Pantas dia lelah, dia bekerja sampai malam.", en: "No wonder he is tired; he worked until night." }, accept: ["that explains it", "fitting", "small wonder"], drill: { jp: "Pantas jalan itu macet setiap pagi", en: "No wonder that road is jammed every morning" }, hint: "PAHN-tas. Two related uses: the exclamation *no wonder*, and the adjective *fitting, suitable* — baju itu pantas, that shirt suits you. ⚠️ Where wajar says a reaction is fair, pantas says a cause has just been explained." },
        { id: "id-u28l2-percuma", type: "vocab", front: "percuma", reading: "percuma", meaning: "pointless", example: { jp: "Percuma kami tunggu karena dia sudah pulang.", en: "It was pointless waiting because he had already gone home." }, accept: ["in vain", "a waste of effort", "for nothing"], drill: { jp: "Percuma saya membeli obat itu", en: "It was pointless buying that medicine" }, hint: "puhr-CHOO-ma — the c is CH. Effort that produced nothing, and it is said with real resignation. Sia-sia is the close twin, a doubling meaning the same. ⚠️ Not the same as gratis, free of charge, which you already have, even though both can translate English *for nothing*." },
      ],
    },
    {
      id: "id-u28l3",
      unit: 28,
      lesson: 3,
      title: "Terutama dan bahkan",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Narrow or widen a claim — single one case out, generalise, hedge to a minimum, or push past what was expected.",
      items: [
        { id: "id-u28l3-terutama", type: "vocab", front: "terutama", reading: "terutama", meaning: "especially", example: { jp: "Saya suka buah, terutama buah manis.", en: "I like fruit, especially sweet fruit." }, accept: ["above all", "particularly", "most of all"], drill: { jp: "Jalan itu macet terutama di pagi hari", en: "That road is jammed especially in the morning" }, hint: "tuhr-oo-TAH-ma. From utama, chief or main. ⚠️ Here ter- does NOT mean most — it is the stative ter-, as in terjadi and terlambat. It singles one case out of a set you have just named, which is why it usually follows a comma." },
        { id: "id-u28l3-khusus", type: "vocab", front: "khusus", reading: "khusus", meaning: "special", example: { jp: "Ada harga khusus untuk pelajar.", en: "There is a special price for pupils." }, accept: ["specific", "set aside for one purpose", "dedicated"], drill: { jp: "Kelas khusus itu hanya untuk pelajar baru", en: "That special class is only for new pupils" }, hint: "KHOO-soos — the kh is a light rasp at the back of the throat, from Arabic. It means reserved for one purpose, not *nice*: harga khusus is a special rate, kamar khusus a room set aside. Khususnya is the adverb, *particularly*, a close twin of terutama." },
        { id: "id-u28l3-umum", type: "vocab", front: "umum", reading: "umum", meaning: "general", example: { jp: "Ini masalah umum di kota besar.", en: "This is a general problem in big cities." }, accept: ["common to all", "public", "widespread"], drill: { jp: "Tempat umum itu selalu ramai", en: "That public place is always crowded" }, hint: "OO-moom. The opposite pole from khusus. ⚠️ Its commonest use is PUBLIC rather than general: tempat umum, a public place; kendaraan umum, public transport. Umumnya means generally. Pada umumnya is the fuller phrase you will read." },
        { id: "id-u28l3-kebanyakan", type: "vocab", front: "kebanyakan", reading: "kebanyakan", meaning: "most of them", example: { jp: "Kebanyakan orang di sini bekerja di pasar.", en: "Most people here work at the market." }, accept: ["the majority", "most of a group", "for the most part"], drill: { jp: "Kebanyakan pelajar sudah pulang sekarang", en: "Most of the pupils have gone home now" }, hint: "kuh-bah-NYAH-kan. Built on banyak, many. ⚠️ THE PAIR TO KEEP APART: paling, which you already have, makes a superlative (paling besar, the biggest); kebanyakan quantifies a GROUP (kebanyakan orang, most people). They are not interchangeable in either direction. Kebanyakan also means too much of something." },
        { id: "id-u28l3-setidaknya", type: "vocab", front: "setidaknya", reading: "setidaknya", meaning: "at least", example: { jp: "Setidaknya kami tiba sebelum malam.", en: "At least we arrived before nightfall." }, accept: ["at any rate", "if nothing else", "as a minimum"], drill: { jp: "Setidaknya dia sudah memberitahu kami", en: "At least he told us" }, hint: "suh-TEE-dak-nya. Built on tidak, not — literally *in its not-ness*, which is a very Indonesian way to arrive at *at least*. Paling tidak is the equally common alternative and means exactly the same. It concedes a minimum while admitting the rest went badly." },
        { id: "id-u28l3-bahkan", type: "vocab", front: "bahkan", reading: "bahkan", meaning: "even", example: { jp: "Semua datang, bahkan nenek saya.", en: "Everyone came, even my grandmother." }, accept: ["what is more", "and moreover", "going further"], drill: { jp: "Dia bekerja setiap hari bahkan hari Minggu", en: "He works every day, even Sunday" }, hint: "BAH-kan. It pushes a claim one step past what the listener expected, exactly like English *even* — and it can also mean *what is more*, adding a stronger case. ⚠️ Do not confuse it with masih, still, which you already have: bahkan escalates, masih continues." },
      ],
    },
    {
      id: "id-u28l4",
      unit: 28,
      lesson: 4,
      title: "Sengaja dan buru-buru",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say how something was done — on purpose or by accident, fast or gently, openly or in secret.",
      items: [
        { id: "id-u28l4-sengaja", type: "vocab", front: "sengaja", reading: "sengaja", meaning: "on purpose", example: { jp: "Saya tidak sengaja menutup pintu itu.", en: "I did not shut that door on purpose." }, accept: ["deliberately", "intentionally", "meaning to"], drill: { jp: "Dia sengaja datang lebih awal pagi ini", en: "He deliberately came earlier this morning" }, hint: "suh-NGAH-ja, opening on the ng hum. 🚨 LEARN THE NEGATIVE FIRST: tidak sengaja means *by accident*, and it is the standard apology for anything you knocked over or got wrong. Sengaja also works alone as an accusation: sengaja, ya?" },
        { id: "id-u28l4-buruburu", type: "vocab", front: "buru-buru", reading: "buruburu", meaning: "in a hurry", example: { jp: "Kami buru-buru karena kereta tidak tunggu lama.", en: "We were in a hurry because the train does not wait long." }, accept: ["hurriedly", "in a rush", "hastily"], drill: { jp: "Dia sarapan buru-buru sebelum berangkat", en: "He ate breakfast in a hurry before setting off" }, hint: "BOO-roo-BOO-roo. A doubling of buru, to chase — you are being chased by the clock. ⚠️ Jangan buru-buru, don't rush, is what you will hear from anyone patient; terburu-buru is the adjective, rushed." },
        { id: "id-u28l4-pelanpelan", type: "vocab", front: "pelan-pelan", reading: "pelanpelan", meaning: "gently", example: { jp: "Pelan-pelan saja, jangan buru-buru.", en: "Take it gently, do not rush." }, accept: ["slowly and carefully", "softly", "little by little"], drill: { jp: "Dia membuka pintu itu pelan-pelan", en: "He opened that door gently" }, hint: "puh-LAHN-puh-LAHN. ⚠️ Different from lambat, slow, which you already have: lambat is a criticism of speed, pelan-pelan is an instruction to be careful. It also means QUIETLY, of a voice. Pelan-pelan saja is the all-purpose take it easy." },
        { id: "id-u28l4-diamdiam", type: "vocab", front: "diam-diam", reading: "diamdiam", meaning: "secretly", example: { jp: "Dia diam-diam menabung untuk sepeda baru.", en: "He secretly saved up for a new bicycle." }, accept: ["on the quiet", "without telling anyone", "covertly"], drill: { jp: "Anak itu diam-diam mengambil gula", en: "That child secretly took some sugar" }, hint: "DEE-ahm-DEE-ahm. A doubling of diam, to be silent, which you already have — doing it silently means doing it unseen. ⚠️ It does not always imply wrongdoing: diam-diam is also how you arrange a surprise, so it is not always a reproach." },
        { id: "id-u28l4-terpaksa", type: "vocab", front: "terpaksa", reading: "terpaksa", meaning: "forced to", example: { jp: "Kami terpaksa berjalan karena mobil rusak.", en: "We were forced to walk because the car was broken." }, accept: ["with no choice", "obliged to", "having to"], drill: { jp: "Dia terpaksa menjual mobil untuk membayar utang", en: "He was forced to sell the car to pay a debt" }, hint: "tuhr-PAHK-sa. From paksa, to compel — with ter-, it happens TO you. ⚠️ Another ter- that is not a superlative. It is how Indonesians report an unwelcome necessity, and it carries a note of apology: saya terpaksa menolak, I have no choice but to refuse." },
        { id: "id-u28l4-kebetulan", type: "vocab", front: "kebetulan", reading: "kebetulan", meaning: "by chance", example: { jp: "Kebetulan saya bertemu rekan saya di pasar.", en: "By chance I met my colleague at the market." }, accept: ["as it happens", "coincidentally", "by coincidence"], drill: { jp: "Kebetulan kami menginap di kota yang sama", en: "As it happens we stayed in the same city" }, hint: "kuh-buh-TOO-lan. From betul, true or correct — a coincidence is a thing that happens to be so. ⚠️ It is also a polite softener when you offer something: kebetulan saya punya, as it happens I have one, which sounds much less boastful than saya punya." },
      ],
    },
  ],
};
