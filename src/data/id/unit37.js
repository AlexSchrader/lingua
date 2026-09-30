// ID Unit 37 — Perlu, layak, dan sebab ("Needing, being worth it, and what caused it") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 2. unit1.js's 12 conventions and unit21.js's A1–A10 BIND this file.
//
// ⚠️ RETHEMED — ALL THREE SUBJECTS THE SLOT NAMES ARE ALREADY SPENT.
// The scaffold called it "Grammar 5 — conditionals, ability, comparison". Probed
// against the live corpus, each third is gone:
//   CONDITIONALS → A1's u12 gave `kalau`; block 1's u29 gave `seandainya`,
//     `asalkan`, `selama`, `entah`. Nothing left to teach.
//   ABILITY      → A1's u12 gave `bisa`, `boleh`, `harus`, `mungkin`, `pasti`;
//     block 1's u21 gave `mampu` and `berani`. Nothing left.
//   COMPARISON   → A1's u14 gave `lebih`, `daripada`, `kurang`, `terlalu`, `agak`,
//     `seperti`, `paling`, `mirip`, `cocok`; block 1's u30 gave the whole ter-
//     superlative plus `membandingkan`, `perbedaan`, `tingkat`, `seimbang`.
//     Nothing left — and block 1 spent an entire convention (§A5) settling it.
// Three for three. A unit written to this title would have been a third pass.
//
//   THE HOLES IT FILLS INSTEAD, all measured against all 720 live cards:
//   • **NECESSITY. A1 taught `harus` (must) and NOTHING ELSE in the field.** No
//     word for to need, to require, to wish for, obligatory, had better, ought to
//     have. A learner could only ever say must — no advice, no regret, no degree.
//   • **EVALUATION.** Block 1's u30 took comparison, which is saying A is more
//     than B. Nobody taught how to rate ONE thing: useful, seriously bad,
//     impressive, perfect, extraordinary, worth doing.
//   • **THE VERBS OF CAUSE.** Block 1's u26 gave the NOUNS (`sebab` · `akibat` ·
//     `hasil`) and u29 the CONNECTORS (`sehingga` · `akibatnya` · `berkat` ·
//     `gara-gara` · `oleh karena itu`). Nobody gave the VERBS: to cause, to
//     prevent, to overcome, to resolve, to yield, an influence. A course that can
//     name a result and cannot say what produced it is the `die Frage` failure
//     one level up.
//   • **CONCEDING AND DEFERRING.** No `memang`, no `terserah`, no `rela` — the
//     three words an Indonesian conversation actually turns on.
//
// AUTHORING CALLS MADE HERE:
//   ⚠️ `sebaiknya` IS THE FOURTH CARD OFF THE ROOT `baik`, and that is deliberate,
//     declared, and at the ceiling. The chain is `baik` (A1 u2, fine) ·
//     `memperbaiki` (u25, to repair) · `terbaik` (u30, best) · `sebaiknya` (here,
//     had better). §A6 blesses three off one root "where each is a different
//     word" and this is a fourth — so the test was applied strictly: `sebaiknya`
//     is an ADVERB of advice, a different part of speech from all three, and
//     knowing "fine", "to repair" or "best" gives you none of it. Drill-safe:
//     findWholeWord("sebaiknya", "baik") FAILS (the e before and the n after are
//     letters). **If a later block wants a fifth off `baik`, the answer is no.**
//   ⚠️ `memerlukan` NOT CARDED — it is `perlu` with an affix and nothing else
//     (§A6's "readable off the parts"). Named in `perlu`'s hint.
//   ⚠️ `mengakibatkan` NOT CARDED — identical in meaning to `menyebabkan`, which
//     is carded. Convention 3. Named in `menyebabkan`'s hint.
//   ⚠️ `pantas` (u28) already accepts "fitting", so `layak` is glossed "worth
//     doing" and carries none of fitting/deserved-in-that-sense.
//   ⚠️ `dapat` NOT CARDED as the formal "can": A1's `bisa` accepts "able" and "a
//     can", and block 1 already carded `mendapat` off the same root. No honest
//     gloss remains.
//
// AFFIX ROOTS CHECKED BY HAND (unit1.js §3 — LEXEME fails open for Indonesian):
//   seharusnya → harus     ⚠️ `harus` IS taught (u12, must). Carded: seharusnya
//     carries COUNTERFACTUAL reproach ("should have, and did not"), which must
//     does not. Drill-safe — hidden behind `se` and before `nya`.
//   berguna → guna         root not taught.
//   luar biasa             a multi-word front (convention 8). ⚠️ `luar` is carded
//     in u36 and IS a whole word inside this front. Safe in both directions: this
//     card's cloze blanks the two-word span, and `luar`'s own u36 drill carries no
//     `biasa`. Verified with the real router.
//   menyebabkan → sebab    ⚠️ `sebab` IS taught (u26, a cause). Carded: the noun
//     does not give you the verb, and the gloss is "to bring something about"
//     precisely because `sebab` accepts "cause". Drill-safe — findWholeWord
//     ("menyebabkan", "sebab") FAILS (the y before it is a letter).
//   menghasilkan → hasil   ⚠️ `hasil` IS taught (u26, a result). Same shape, same
//     reasoning; glossed "to produce as a result" because `hasil` accepts "yield".
//   pengaruh → pengaruh    root not taught bare.
//   mencegah → cegah       root not taught.
//   mengatasi → atas       ⚠️ `atas` is carded in u36 (above)! This is atas + meng-
//     -i, literally to get on top of — a genuinely different word, and the image is
//     worth the hint. Drill-safe — findWholeWord("mengatasi", "atas") FAILS (the
//     g before and the i after are letters).
//   menyelesaikan → selesai ⚠️ `selesai` IS taught (u13, finished). Carded: the
//     -kan causative makes it transitive, which the learner cannot produce from the
//     stative. Drill-safe (hidden behind `meny`, and the k follows).
//   menilai → nilai        root not taught bare; no second card off it in this block.
//   menganggap → anggap    root not taught. ⚠️ NOT `anggota` (u32) — different word.
//   perlu · butuh · ingin · wajib · buruk · hebat · sempurna · layak · memang ·
//   sesuai · terserah · rela — roots.
//
// GLOSSES REGLOSSED TO CLEAR A LIVE `accept[]` (unit21.js §A4):
//   `buruk` is NOT "bad" — u10's `jelek` accepts it. → "seriously bad", which is
//     exactly the distinction block 1 reserved the word for.
//   `ingin` is NOT "to wish for" — u20's `berharap` accepts it. → "to long for".
//   `menyebabkan` is NOT "to cause"; `menghasilkan` is NOT "to yield". See above.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT37 = {
  id: "id-u37",
  lang: "id",
  title: "Perlu, layak, dan sebab",
  order: 37,
  stage: "a2",
  lessons: [
    {
      id: "id-u37l1",
      unit: 37,
      lesson: 1,
      title: "Perlu dan wajib",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say how strongly something is needed — needed, required, wished for, compulsory — and give advice or admit what you should have done, instead of only saying harus.",
      items: [
        { id: "id-u37l1-perlu", type: "vocab", front: "perlu", reading: "perlu", meaning: "to need", example: { jp: "Saya perlu bahan itu untuk memasak.", en: "I need that ingredient for cooking." }, accept: ["necessary", "to have to have"], drill: { jp: "Kami perlu dua hal dari toko", en: "We need two things from the shop" }, hint: "PUHR-loo. ⚠️ THE WORD A1 LEFT OUT. You had harus, must, and nothing softer — perlu is need, which is weaker and far more usable: tidak perlu is the everyday there's no need, and it is how you politely decline anything. It works before a noun or a verb. Memerlukan is the formal twin and is not a separate card." },
        { id: "id-u37l1-butuh", type: "vocab", front: "butuh", reading: "butuh", meaning: "to be in need of", example: { jp: "Anak itu butuh obat dan makanan.", en: "That child is in need of medicine and food." }, accept: ["to require", "cannot do without"], drill: { jp: "Saya butuh kertas untuk mencatat alasan", en: "I need paper to note down the reason" }, hint: "BOO-tooh. Very close to perlu and the split is one of emphasis: butuh is a real, felt need — butuh uang, butuh bantuan — while perlu can be merely necessary. Butuh is the more spoken of the two. Kebutuhan is a need or a requirement, and kebutuhan sehari-hari is daily necessities." },
        { id: "id-u37l1-ingin", type: "vocab", front: "ingin", reading: "ingin", meaning: "to long for", example: { jp: "Dia ingin pulang ke desa setiap tahun.", en: "She longs to go home to the village every year." }, accept: ["to desire", "to have a yearning for"], drill: { jp: "Saya ingin menari di panggung besar", en: "I long to dance on a big stage" }, hint: "EE-ngeen, ng one hum. ⚠️ Mau, which you already have, is want as an INTENTION — mau pergi, I'm going to go. Ingin is want as a DESIRE, deeper and more written: it is what you use when the wanting itself is the point. Keinginan is a wish. Berharap, which you also have, is to hope — about something you do not control." },
        { id: "id-u37l1-wajib", type: "vocab", front: "wajib", reading: "wajib", meaning: "obligatory", example: { jp: "Semua pelajar wajib datang ke upacara itu.", en: "All pupils are obliged to come to that ceremony." }, accept: ["compulsory", "required of everyone"], drill: { jp: "Aturan itu wajib untuk semua warga", en: "That rule is compulsory for all residents" }, hint: "WAH-jeeb. ⚠️ Stronger and more institutional than harus, which you already have: harus is a personal must, wajib is imposed from outside — by a law, a school or a religion. Wajib belajar is compulsory education. Kewajiban is a duty, and it is the natural pair to hak, a right." },
        { id: "id-u37l1-sebaiknya", type: "vocab", front: "sebaiknya", reading: "sebaiknya", meaning: "had better", example: { jp: "Kamu sebaiknya berdoa dan tidur sekarang.", en: "You had better pray and go to sleep now." }, accept: ["it would be best to", "the sensible thing is to"], drill: { jp: "Sebaiknya kita menghubungi dokter pagi ini", en: "We had better contact the doctor this morning" }, hint: "suh-BIKE-nya — the ai is the English eye, ny one sound. Built on baik, fine, which you already have: literally its best being. This is how Indonesians give advice without ordering: sebaiknya kamu… is much softer than kamu harus… ⚠️ Its mirror is on the next card — sebaiknya looks FORWARD, seharusnya looks BACK with reproach." },
        { id: "id-u37l1-seharusnya", type: "vocab", front: "seharusnya", reading: "seharusnya", meaning: "ought to have", example: { jp: "Saya seharusnya berangkat lebih pagi.", en: "I ought to have set off earlier." }, accept: ["was supposed to", "should have but did not"], drill: { jp: "Dia seharusnya membalas surat itu kemarin", en: "He ought to have written back to that letter yesterday" }, hint: "suh-ha-ROOS-nya. Built on harus, must, which you already have — but the se-…-nya wrapper turns it counterfactual: seharusnya says it did not happen and should have. That is why it so often arrives with menyesal, to regret. ⚠️ Compare the card before it: sebaiknya is advice about the future, seharusnya is regret about the past." },
      ],
    },
    {
      id: "id-u37l2",
      unit: 37,
      lesson: 2,
      title: "Berguna atau buruk",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Rate one thing on its own — useful, seriously bad, impressive, perfect, extraordinary, worth doing — rather than only comparing it with another.",
      items: [
        { id: "id-u37l2-berguna", type: "vocab", front: "berguna", reading: "berguna", meaning: "useful", example: { jp: "Kamus itu sangat berguna untuk pelajar baru.", en: "That dictionary is very useful for a new pupil." }, accept: ["of use", "handy"], drill: { jp: "Panci itu berguna di dapur kami", en: "That pot is useful in our kitchen" }, hint: "buhr-GOO-na. From guna, use or purpose. Tidak berguna means useless, and percuma, which you already have, is the sharper in vain. Bermanfaat is the near-identical twin, slightly more formal, and is not a separate card. Berguna takes untuk for who it is useful to." },
        { id: "id-u37l2-buruk", type: "vocab", front: "buruk", reading: "buruk", meaning: "seriously bad", example: { jp: "Keadaan di sana lebih buruk dari kemarin.", en: "The situation there is worse than yesterday." }, accept: ["awful", "in a bad state"], drill: { jp: "Cuaca buruk itu menyebabkan masalah besar", en: "That bad weather caused a big problem" }, hint: "BOO-rook. ⚠️ Heavier than jelek, which you already have: jelek is ugly or poor quality and is used of objects; buruk is bad in a serious, often abstract way — cuaca buruk, keadaan buruk, sifat buruk. Memburuk means to get worse. For a genuinely ugly thing, jelek is still the word." },
        { id: "id-u37l2-hebat", type: "vocab", front: "hebat", reading: "hebat", meaning: "impressive", example: { jp: "Hasil ujian dia hebat sekali.", en: "His exam result is really impressive." }, accept: ["amazing", "terrific"], drill: { jp: "Penonton bilang lukisan itu hebat", en: "The audience said that painting is impressive" }, hint: "HAY-bat. ⚠️ Bagus, which you already have, is simply good; hebat is good enough to impress you, and it is the everyday word of praise — Hebat! on its own means well done. It also has an older sense of formidable or violent: hujan hebat is a downpour. Kehebatan is prowess." },
        { id: "id-u37l2-sempurna", type: "vocab", front: "sempurna", reading: "sempurna", meaning: "perfect", example: { jp: "Bumbu itu sempurna untuk ikan dan ayam.", en: "That seasoning is perfect for fish and chicken." }, accept: ["flawless", "as good as it gets"], drill: { jp: "Laporan dia hampir sempurna sekarang", en: "His report is almost perfect now" }, hint: "suhm-POOR-na, three syllables. Absolute, so it usually comes with hampir, nearly, or belum, not yet — belum sempurna is the honest version of most things. Kesempurnaan is perfection. ⚠️ Do not use it where bagus or hebat would do; sempurna is a strong claim in Indonesian too." },
        { id: "id-u37l2-luarbiasa", type: "vocab", front: "luar biasa", reading: "luarbiasa", meaning: "extraordinary", example: { jp: "Suara anak itu luar biasa.", en: "That child's voice is extraordinary." }, accept: ["out of the ordinary", "remarkable"], drill: { jp: "Pengalaman itu luar biasa untuk saya", en: "That experience was extraordinary for me" }, hint: "LOO-ar bee-AH-sa, two words. Literally outside the ordinary, built on the luar you already have for outside. It is used as high praise and as plain description alike: anak luar biasa can mean a gifted child or a child with special needs, so context does real work. Biasa on its own means ordinary or usual." },
        { id: "id-u37l2-layak", type: "vocab", front: "layak", reading: "layak", meaning: "worth doing", example: { jp: "Pantai itu layak untuk acara besok.", en: "That beach is worth it for tomorrow's event." }, accept: ["deserving", "up to standard"], drill: { jp: "Rumah itu belum layak untuk keluarga besar", en: "That house is not yet up to standard for a big family" }, hint: "LAH-yak. Two uses that share one idea of meeting a bar: worth doing (layak dicoba, worth a try) and fit for purpose (layak huni, fit to live in). ⚠️ Pantas, which you already have, is fitting in the sense of no wonder or serves them right; layak is about deserving or measuring up. Kelayakan is feasibility." },
      ],
    },
    {
      id: "id-u37l3",
      unit: 37,
      lesson: 3,
      title: "Sebab dan pengaruh",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say what PRODUCED a result, not only that there was one — causing it, influencing it, preventing it, getting on top of it, settling it, yielding it.",
      items: [
        { id: "id-u37l3-menyebabkan", type: "vocab", front: "menyebabkan", reading: "menyebabkan", meaning: "to bring something about", example: { jp: "Hujan besar menyebabkan macet di jalan raya.", en: "Heavy rain brought about traffic jams on the main road." }, accept: ["to lead to", "to be the cause of"], drill: { jp: "Bumbu itu menyebabkan rasa pahit", en: "That seasoning brings about a bitter flavour" }, hint: "muh-nyuh-bab-KAHN, ny one sound. Built on sebab, a cause, which you already have — this is the VERB the corpus was missing. It takes the RESULT as its object: A menyebabkan B. Mengakibatkan means exactly the same and is not a separate card; akibat, a consequence, is the noun you already have." },
        { id: "id-u37l3-pengaruh", type: "vocab", front: "pengaruh", reading: "pengaruh", meaning: "an influence", example: { jp: "Budaya itu punya pengaruh besar di kota ini.", en: "That culture has a big influence in this city." }, accept: ["a bearing on something", "sway over something"], drill: { jp: "Pengaruh iklan itu jelas di pasar", en: "That advert's influence is plain in the market" }, hint: "puh-NGAH-rooh, three syllables opening the second with the ng hum. Takes terhadap or pada for what is influenced, which you now have from the last unit: pengaruh terhadap anak. Memengaruhi is the verb, to influence; berpengaruh means influential. Weaker than menyebabkan — an influence shapes, a cause produces." },
        { id: "id-u37l3-mencegah", type: "vocab", front: "mencegah", reading: "mencegah", meaning: "to prevent", example: { jp: "Aturan baru itu mencegah masalah di jalan.", en: "That new rule prevents problems on the road." }, accept: ["to head off", "to stop something from happening"], drill: { jp: "Obat itu mencegah demam pada anak", en: "That medicine prevents a fever in a child" }, hint: "muhn-chuh-GAH, c is CH. Stopping something before it starts, which is different from berhenti, which you already have for something stopping. ⚠️ Also different from melarang, to forbid, which you have from u22: melarang is a rule against it, mencegah is actually keeping it from happening. Pencegahan is prevention." },
        { id: "id-u37l3-mengatasi", type: "vocab", front: "mengatasi", reading: "mengatasi", meaning: "to overcome", example: { jp: "Kami mengatasi masalah itu tanpa uang.", en: "We overcame that problem without money." }, accept: ["to get on top of", "to deal with a problem"], drill: { jp: "Dia mengatasi masalah itu dengan tenang", en: "She overcame that problem calmly" }, hint: "muhng-ah-TAH-see. ⚠️ Look at the middle of it: atas, above, which you have from the last unit — to overcome is literally to get on top of, exactly the image English draws. Takes the problem straight: mengatasi kesulitan. Its natural partners are masalah and kesulitan, and its opposite outcome is gagal, which you already have." },
        { id: "id-u37l3-menyelesaikan", type: "vocab", front: "menyelesaikan", reading: "menyelesaikan", meaning: "to get something sorted", example: { jp: "Dia menyelesaikan tugas itu pada hari Senin.", en: "He got that task sorted on Monday." }, accept: ["to see something through", "to settle a matter"], drill: { jp: "Kami menyelesaikan laporan itu sebelum rapat", en: "We finished that report before the meeting" }, hint: "muh-nyuh-luh-SIGH-kan — five syllables, ny one sound, the ai as in eye. Built on selesai, finished, which you already have: selesai is the STATE, menyelesaikan is you DOING it to something. That pairing — a stative and a -kan verb built on it — is a pattern you will now see everywhere. Penyelesaian is a resolution." },
        { id: "id-u37l3-menghasilkan", type: "vocab", front: "menghasilkan", reading: "menghasilkan", meaning: "to produce as a result", example: { jp: "Proyek itu menghasilkan uang untuk perusahaan.", en: "That project produced money for the company." }, accept: ["to turn out", "to bring in"], drill: { jp: "Pohon itu menghasilkan buah setiap tahun", en: "That tree produces fruit every year" }, hint: "muhng-ha-SEEL-kan. Built on hasil, a result, which you already have — so it means to yield a result, and by extension to earn: menghasilkan uang. ⚠️ Membuat, which you already have, is to make a THING; menghasilkan is to produce an OUTCOME. The two are not interchangeable." },
      ],
    },
    {
      id: "id-u37l4",
      unit: 37,
      lesson: 4,
      title: "Menilai dan terserah",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Give a verdict and then get out of the way — assessing it, regarding it as something, conceding a point, calling it in line with the plan, or handing the choice over.",
      items: [
        { id: "id-u37l4-menilai", type: "vocab", front: "menilai", reading: "menilai", meaning: "to assess", example: { jp: "Guru menilai tugas itu setiap minggu.", en: "The teacher assesses that work every week." }, accept: ["to judge", "to rate"], drill: { jp: "Atasan menilai laporan setiap karyawan", en: "The boss assesses every employee's report" }, hint: "muh-nee-LIE, the ai as in eye. From nilai, a value or a mark — so menilai is to put a value on something, whether a school paper or a person's work. Penilaian is an assessment. ⚠️ Menghargai, which you met earlier in this block, is to VALUE something you respect; menilai is to judge it against a standard." },
        { id: "id-u37l4-menganggap", type: "vocab", front: "menganggap", reading: "menganggap", meaning: "to regard as", example: { jp: "Saya menganggap dia teman yang baik.", en: "I regard him as a good friend." }, accept: ["to consider something to be", "to take it as"], drill: { jp: "Mereka menganggap masalah itu sudah selesai", en: "They regard that problem as already settled" }, hint: "muhng-ang-GAP — ngg is the hum plus a hard g. Takes sebagai, as, for the thing you regard it AS: menganggap X sebagai Y. ⚠️ Pikir and menurut, which you already have, give an opinion; menganggap assigns something a STATUS, which is stronger — and it often carries the hint that the speaker may be wrong. Anggapan is an assumption." },
        { id: "id-u37l4-memang", type: "vocab", front: "memang", reading: "memang", meaning: "it is true that", example: { jp: "Memang harga di kota lebih mahal.", en: "It is true that prices in the city are higher." }, accept: ["admittedly", "indeed"], drill: { jp: "Dia memang pintar tetapi sangat malas", en: "He is admittedly clever but very lazy" }, hint: "MAY-mang. Concedes a point before you qualify it, which is why it pairs constantly with tetapi: memang A, tetapi B. Memang! on its own means exactly, that's right. ⚠️ Not the same as ternyata, which you already have for it turns out — ternyata is a discovery, memang is an admission of something already known." },
        { id: "id-u37l4-sesuai", type: "vocab", front: "sesuai", reading: "sesuai", meaning: "in keeping with", example: { jp: "Hasil itu sesuai dengan rencana kami.", en: "That result is in keeping with our plan." }, accept: ["in line with", "as agreed"], drill: { jp: "Harga itu sesuai dengan ukuran kamar", en: "That price is in line with the room size" }, hint: "suh-soo-AH-ee, four syllables. Takes dengan: sesuai dengan aturan, in accordance with the rules. ⚠️ Cocok, which you already have, is to MATCH or to suit — about two things fitting each other. Sesuai is about conforming to a standard, a plan or a rule, and it is the word every official notice uses. Menyesuaikan is to adjust something to fit." },
        { id: "id-u37l4-terserah", type: "vocab", front: "terserah", reading: "terserah", meaning: "up to you", example: { jp: "Terserah kamu mau makan di mana.", en: "It is up to you where you want to eat." }, accept: ["as you like", "your call"], drill: { jp: "Terserah kamu mau pergi atau tidak", en: "It is up to you whether you want to go or not" }, hint: "tuhr-suh-RAH. A complete answer on its own — Terserah. — and one of the most Indonesian words in this unit: handing a decision back is polite, not evasive. From serah, to hand over. ⚠️ Another ter- word that is not a superlative, like tergantung and terlambat, which you already have. Menyerahkan is to hand something over." },
        { id: "id-u37l4-rela", type: "vocab", front: "rela", reading: "rela", meaning: "willing to give something up", example: { jp: "Ibu rela bekerja malam untuk anaknya.", en: "Mother is willing to work nights for her child." }, accept: ["ready to let it go", "accepting of it"], drill: { jp: "Dia rela menjual mobil untuk keluarga", en: "He is willing to sell the car for his family" }, hint: "RAY-la. Not merely willing but willing at a COST — giving something up without resentment, which is why it so often appears with untuk and a person. ⚠️ Mau is want, siap is ready, mampu is able; rela is none of those. Its opposite is terpaksa, which you already have for forced into it. Merelakan is to let something go." },
      ],
    },
  ],
};
