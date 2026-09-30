// ID Unit 36 — Di atas, di bawah, di antara ("Above, below, between") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 2. unit1.js's 12 conventions and unit21.js's A1–A10 BIND this file.
//
// ⚠️ RETHEMED — THE SCAFFOLD NAMED A SUBJECT BLOCK 1 HAD ALREADY FINISHED.
// The slot was "Grammar 4 — compound and linked clauses". Measured against the
// live corpus: **block 1's u29 IS the linked-clause unit**, 24 for 24 (meskipun ·
// namun · padahal · sedangkan · tetap · kecuali · sehingga · oleh karena itu ·
// akibatnya · berkat · gara-gara · demi · supaya · selain itu · serta · apalagi ·
// misalnya · yaitu · apakah · bahwa · entah · seandainya · asalkan · selama), and
// A1's u12l3 had already spent yang · atau · tetapi · karena · kalau · untuk.
// Authoring a second connector unit here would be the exact failure convention 12
// warns about: taking a scaffold slot title literally.
//
// ⚠️ SO THIS UNIT PAYS BLOCK 1'S OWN DEBT, and block 1 asked for it by name.
// Its hand-back note reads: *"FUNCTION WORDS, and these are the painful ones — A1
// never taught them and this block could not fit them, so every example in u21–u30
// works around them: kepada · pada · atas · bawah · antara · luar · ketika · hal.
// ⚠️ `antara` is the worst of them: u30's own `perbedaan` card wants 'perbedaan
// antara A dan B' and cannot say it. Card it early."*
//   Every one of those eight is carded here, `antara` in lesson 1. That is the
//   whole justification for the slot: a grammar unit whose subject is the
//   PREPOSITION, which is the one part of Indonesian grammar the corpus was
//   actually missing. Indonesian has no case and no articles, so relational
//   meaning is carried entirely by these words — modelled as function-word
//   vocabulary whose examples carry the pattern (CLAUDE.md: grammar has no item
//   type).
//   Measured against all 720: also missing were **terhadap · tanpa · melalui ·
//   sejak · benda · sesuatu · seseorang · saat · menuju · seberang · turun ·
//   terletak · rendah · pinggir · tengah · ujung**. The learner had di, ke, dari,
//   dekat, jauh, depan, belakang, sebelah — and no way to say above, below,
//   between, outside, without, via, since, or to whom.
//
// ⚠️ `dalam` IS NOT CARDED HERE AND THAT IS NOT AN OMISSION. Block 1's u30 took
// the front `dalam` for the adjective DEEP (texture and dimension). The
// preposition sense, inside, therefore has no front available — identical string,
// identical reading. It is named in `luar`'s hint (`di luar` / `di dalam` as a
// pair), which is how A1 and block 1 have handled every blocked front. Recorded
// so nobody spends a slot rediscovering it.
// ⚠️ `bagi` (for, as far as someone is concerned) was DROPPED, not deferred:
// A1's `untuk` owns "for" and u21's `menurut` owns "according to", so there is no
// honest gloss left. ⚠️ `oleh` (the agentive by) is DEFERRED to B1 with the di-
// passive it belongs to (convention 11) — teaching the agent marker without the
// passive is teaching half a pattern.
//
// AFFIX ROOTS CHECKED BY HAND (unit1.js §3 — LEXEME fails open for Indonesian):
//   kepada → ke + pada     ⚠️ BOTH pieces are fronts: `ke` is taught (u3) and
//     `pada` is carded in THIS lesson. Not an affix — a fused preposition, and it
//     is a single word with no space, so its fold is "kepada" and collides with
//     nothing. ⚠️ findWholeWord("kepada", "ke") FAILS (the p is a letter) and
//     findWholeWord("kepada", "pada") FAILS (the a before it is a letter), so no
//     drill carrying `kepada` can mis-satisfy either shorter front. Verified.
//   melalui → lalu         ⚠️ `lalu` IS taught (u9, ago). Carded: "ago" does not
//     give you "via". The stem here is lalu- with -i, and drills are safe both
//     ways (findWholeWord("melalui", "lalu") fails — the i after it is a letter).
//   terletak → letak       root not taught. ⚠️ A ter- word that is NOT a
//     superlative — the split unit21.js §A5(d) says must keep being taught. Its
//     hint says so explicitly.
//   seseorang → seorang    ⚠️ `seorang` IS taught (u27, the classifier for people).
//     Carded: a classifier is not the indefinite pronoun somebody. Drill-safe —
//     findWholeWord("seseorang", "seorang") FAILS (the e before it is a letter).
//   menuju → tuju          ⚠️ `tujuan` (a goal) IS taught (u24) and `tujuh` (seven)
//     is taught (u5). Neither is `tuju`, and none of the three whole-word-contains
//     another. Verified against the live corpus.
//   seberang → berang      root not taught. ⚠️ `menyeberang` (to cross) is this
//     block's u38 card off the same root — two words, two units (§A6), and
//     findWholeWord("menyeberang", "seberang") FAILS (the y is a letter).
//   atas · bawah · antara · tengah · luar · ujung · pada · terhadap · tanpa ·
//   sejak · hal · benda · sesuatu · ketika · saat · turun · rendah · pinggir — roots.
//
// ⚠️ DRILL TRAPS CHECKED IN THIS FILE — every one of these fronts sits inside a
// taught word, and a prefix HIDES a root while a hyphen does NOT (§A7):
//   `atas`   inside taught `atasan` (a boss) — `atas` is NOT a whole word there
//            (the a after it is a letter), so no cross-match. Safe.
//   `tengah` inside taught `setengah` (half) — hidden behind `se`. Safe.
//   `luar`   inside taught `keluar` (to go out) — hidden behind `ke`. Safe.
//   `turun`  no taught word contains it. `saat`, `hal`, `benda` likewise.
//   `antara` is NOT inside taught `sementara` ("entara", not "antara"). Verified.
//
// GLOSSES REGLOSSED TO CLEAR A LIVE `accept[]` (unit21.js §A4):
//   `kepada` is NOT glossed "to a person" — that normalises to "person", which
//     u1's `orang` owns. → "addressed to". And no gloss here is bare "to": u3's
//     `ke` owns it.
//   `pada` is NOT "at" — u3's `di` accepts it. → "at a point in time".
//   `saat` is NOT "a moment" — u5's `waktu` accepts "moment". → "the instant
//     something happens".
//   `rendah` is NOT "low" — u10's `pendek` accepts "low". → "not high up".
//   `tanpa` does not accept "lacking" — u14's `kurang` does.
//   `sesuatu` does not accept "some thing or other": `meaningVariants` SPLITS ON
//     "or", which would hand `lain` (u12, other) a second owner. → "some
//     unspecified thing". This one is invisible to every gate.
//   `ketika` does not accept bare "when" — u5's `waktu` accepts it.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT36 = {
  id: "id-u36",
  lang: "id",
  title: "Di atas, di bawah, di antara",
  order: 36,
  stage: "a2",
  lessons: [
    {
      id: "id-u36l1",
      unit: 36,
      lesson: 1,
      title: "Atas, bawah, antara",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Put one thing in position relative to another — above it, below it, between two of them, in the middle, outside, at the far end.",
      items: [
        { id: "id-u36l1-atas", type: "vocab", front: "atas", reading: "atas", meaning: "above", example: { jp: "Buku itu ada di atas meja.", en: "That book is on top of the table." }, accept: ["the top of something", "up on top"], drill: { jp: "Lukisan itu ada di atas kursi", en: "That painting is above the chair" }, hint: "AH-tas. Almost always with di in front of it: di atas is on top of or above, and it covers both — Indonesian does not separate them. Ke atas is upwards. ⚠️ It is a NOUN, the upper part, which is why di is needed: literally at the top of. Atasan, a boss, which you already have, is built on it — the person above you." },
        { id: "id-u36l1-bawah", type: "vocab", front: "bawah", reading: "bawah", meaning: "below", example: { jp: "Kucing itu tidur di bawah kursi.", en: "That cat is sleeping under the chair." }, accept: ["underneath", "the bottom of something"], drill: { jp: "Sepatu saya ada di bawah tempat tidur", en: "My shoes are under the bed" }, hint: "BAH-wah, both h's sounded. The exact mirror of atas, and it behaves the same way: di bawah is under or below, ke bawah is downwards. Learn the pair together — di atas and di bawah are two of the highest-frequency phrases in the language. Bawahan is a subordinate, mirroring atasan." },
        { id: "id-u36l1-antara", type: "vocab", front: "antara", reading: "antara", meaning: "between", example: { jp: "Ada perbedaan besar antara dua kota itu.", en: "There is a big difference between those two cities." }, accept: ["in among", "the space separating two things"], drill: { jp: "Jalan itu ada antara pasar dan sekolah", en: "That road is between the market and the school" }, hint: "an-TAH-ra. The pattern is fixed and worth memorising whole: antara A dan B — always dan, never atau. ⚠️ This is the word that lets you finally use perbedaan properly: perbedaan antara dua hal. Di antara means among a group rather than between two. Sementara, which you already have, only looks similar." },
        { id: "id-u36l1-tengah", type: "vocab", front: "tengah", reading: "tengah", meaning: "the middle", example: { jp: "Panggung itu ada di tengah kota.", en: "That stage is in the middle of the city." }, accept: ["the middle of it", "halfway along"], drill: { jp: "Meja besar itu ada di tengah kamar", en: "The big table is in the middle of the room" }, hint: "tuh-NGAH, opening the second syllable with the ng hum. Like atas and bawah it is a noun and takes di. ⚠️ You already have setengah, half — that is se- plus this word, one half being the middle cut. Tengah hari is midday and tengah malam midnight. Sedang tengah doing something means in the middle of it." },
        { id: "id-u36l1-luar", type: "vocab", front: "luar", reading: "luar", meaning: "the outside", example: { jp: "Anak itu bermain di luar rumah.", en: "That child is playing outside the house." }, accept: ["outdoors", "beyond something"], drill: { jp: "Kami duduk di luar warung itu", en: "We sat outside that food stall" }, hint: "LOO-ar, two syllables. ⚠️ Its opposite is di dalam, inside — and `dalam` is not a separate card here because block 1 already took that front for DEEP. Learn the pair from this hint: di luar and di dalam. Luar negeri means abroad, literally outside the country. Keluar, to go out, which you already have, is built on it." },
        { id: "id-u36l1-ujung", type: "vocab", front: "ujung", reading: "ujung", meaning: "the far end", example: { jp: "Toko itu ada di ujung jalan.", en: "That shop is at the far end of the road." }, accept: ["the tip", "the point at the end"], drill: { jp: "Rumah nenek ada di ujung desa", en: "Grandmother's house is at the far end of the village" }, hint: "OO-joong, j as in JAM. The end of something long — a road, a finger, a queue — and also the tip of a pointed thing: ujung pisau. ⚠️ Not terakhir, which you already have for last in a sequence; ujung is physical. Ujung-ujungnya, in speech, means in the end." },
      ],
    },
    {
      id: "id-u36l2",
      unit: 36,
      lesson: 2,
      title: "Kepada dan tanpa",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Attach an action to a person, a date or a route — saying who it is addressed to, when it happened, what it went through, since when, and what it lacked.",
      items: [
        { id: "id-u36l2-kepada", type: "vocab", front: "kepada", reading: "kepada", meaning: "addressed to", example: { jp: "Saya menulis surat kepada atasan saya.", en: "I wrote a letter to my boss." }, accept: ["over to someone", "for the attention of"], drill: { jp: "Dia menyampaikan kabar itu kepada ibu", en: "He passed that news on to my mother" }, hint: "kuh-PAH-da. ⚠️ THE SPLIT THAT MATTERS: ke, which you already have, goes to a PLACE — ke pasar. Kepada goes to a PERSON — kepada guru. English uses one word for both, Indonesian does not, and using ke for a person is one of the commonest beginner errors. It is ke plus pada fused into one word. In speech people often drop it: bilang sama dia." },
        { id: "id-u36l2-pada", type: "vocab", front: "pada", reading: "pada", meaning: "at a point in time", example: { jp: "Rapat itu mulai pada hari Senin.", en: "That meeting starts on Monday." }, accept: ["on a date", "in written Indonesian"], drill: { jp: "Acara itu ada pada bulan Maret", en: "That event is in March" }, hint: "PAH-da. ⚠️ Where di, which you already have, marks a PLACE, pada marks a TIME or an abstract point: pada hari Senin, pada tahun 2020. It also stands in for di before a person in formal writing — bergantung pada dia. Do not confuse it with padahal, whereas, which you already have — a different word." },
        { id: "id-u36l2-terhadap", type: "vocab", front: "terhadap", reading: "terhadap", meaning: "towards something", example: { jp: "Sikap dia terhadap aturan baru itu jelas.", en: "His attitude towards that new rule is clear." }, accept: ["with regard to", "in relation to"], drill: { jp: "Pendapat saya terhadap masalah itu berbeda", en: "My view on that problem is different" }, hint: "tuhr-HAH-dap. Directed AT something, usually an attitude, a feeling or an effect: sikap terhadap, pengaruh terhadap. ⚠️ Not the same as tentang, which you already have for about a topic — tentang introduces a subject, terhadap points a stance at it. It is a ter- word that is not a superlative." },
        { id: "id-u36l2-tanpa", type: "vocab", front: "tanpa", reading: "tanpa", meaning: "without", example: { jp: "Saya mau kopi tanpa gula.", en: "I want coffee without sugar." }, accept: ["having none of", "in the absence of"], drill: { jp: "Dia pergi tanpa memberitahu keluarga", en: "He left without telling his family" }, hint: "TAHN-pa. The exact opposite of dengan, which you already have, and it works the same way: before a noun (tanpa uang) or before a verb (tanpa berbicara). Tanpa alasan means for no reason. One of the most useful single words in this unit — you can now negate any dengan phrase." },
        { id: "id-u36l2-melalui", type: "vocab", front: "melalui", reading: "melalui", meaning: "by way of", example: { jp: "Kami pergi ke pasar melalui jalan kecil.", en: "We went to the market by way of a small road." }, accept: ["via", "through"], drill: { jp: "Kabar itu datang melalui teman saya", en: "That news came via my friend" }, hint: "muh-la-LOO-ee, four syllables. Through a route, and through a channel or an intermediary: melalui telepon, by phone. ⚠️ Built on lalu, which you already have meaning ago — the older sense is to pass by, which is where both come from. Lewat is the everyday spoken alternative and means the same." },
        { id: "id-u36l2-sejak", type: "vocab", front: "sejak", reading: "sejak", meaning: "ever since", example: { jp: "Dia tinggal di sini sejak tahun lalu.", en: "He has lived here since last year." }, accept: ["starting from a point in time", "from then on"], drill: { jp: "Saya belajar bahasa itu sejak kecil", en: "I have studied that language since I was small" }, hint: "suh-JAK. ⚠️ Three near neighbours to keep apart: dari is from a place, sejak is from a TIME onwards, and selama, which you already have, is for a whole stretch of time. Sejak kapan? is since when? Indonesian has no perfect tense, so sejak is how you say it." },
      ],
    },
    {
      id: "id-u36l3",
      unit: 36,
      lesson: 3,
      title: "Hal, benda, dan sesuatu",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Refer to a thing, a person or a moment WITHOUT naming it — a matter, an object, something, somebody, the time when, the instant it happened.",
      items: [
        { id: "id-u36l3-hal", type: "vocab", front: "hal", reading: "hal", meaning: "a matter", example: { jp: "Hal itu tidak penting untuk saya.", en: "That matter is not important to me." }, accept: ["a thing in the abstract", "a point under discussion"], drill: { jp: "Dua hal itu sangat penting untuk kami", en: "Those two matters are very important to us" }, hint: "HAL, one syllable. ⚠️ THE ABSTRACT thing — a matter, a point, an issue — never a physical object, which is benda on the next card. English says thing for both and Indonesian never does. Dalam hal ini means in this case, and hal-hal, doubled, is matters in the plural. Absolutely everywhere in writing." },
        { id: "id-u36l3-benda", type: "vocab", front: "benda", reading: "benda", meaning: "an object", example: { jp: "Benda itu terlalu berat untuk saya bawa.", en: "That object is too heavy for me to carry." }, accept: ["a physical thing", "an article"], drill: { jp: "Benda kecil itu ada di dalam tas", en: "That small object is inside the bag" }, hint: "BUHN-da, the first e swallowed. A PHYSICAL thing you can touch, set against hal on the last card for an abstract one. Benda tajam is a sharp object, which you will see on airport signs. Barang is the near neighbour and means goods or belongings." },
        { id: "id-u36l3-sesuatu", type: "vocab", front: "sesuatu", reading: "sesuatu", meaning: "something", example: { jp: "Ada sesuatu di bawah meja itu.", en: "There is something under that table." }, accept: ["some unspecified thing", "anything in particular"], drill: { jp: "Saya mau bilang sesuatu kepada kamu", en: "I want to tell you something" }, hint: "suh-soo-AH-too, four syllables. The indefinite thing, used exactly as the English something. Sesuatu yang penting is something important — note that yang, which you already have, is what attaches a description to it. For a question Indonesians prefer apa-apa: ada apa-apa? is is anything the matter?" },
        { id: "id-u36l3-seseorang", type: "vocab", front: "seseorang", reading: "seseorang", meaning: "somebody", example: { jp: "Seseorang mau berbicara dengan kamu.", en: "Somebody wants to speak with you." }, accept: ["a certain person", "one individual"], drill: { jp: "Ada seseorang yang mau menghubungi atasan", en: "There is somebody who wants to contact the boss" }, hint: "suh-suh-OH-rang, four syllables. ⚠️ Not seorang, which you already have — that is the classifier you put before a person's role, seorang guru. Seseorang stands alone as a pronoun: some unnamed person. The extra se- is the whole difference, so read carefully." },
        { id: "id-u36l3-ketika", type: "vocab", front: "ketika", reading: "ketika", meaning: "at the time when", example: { jp: "Ketika saya datang, dia sudah pergi.", en: "By the time I arrived, he had already left." }, accept: ["just as", "the moment that"], drill: { jp: "Ketika hujan datang kami masuk rumah", en: "When the rain came we went inside the house" }, hint: "kuh-TEE-ka. Joins two clauses in TIME, which is what block 1's connectors could not do: ketika A, B. ⚠️ Waktu, which you already have as a noun for time, doubles as the everyday spoken version of this — waktu saya kecil. Kalau, which you also have, is IF, not when, and mixing them is a real error. Saat on the next card is the third option." },
        { id: "id-u36l3-saat", type: "vocab", front: "saat", reading: "saat", meaning: "the instant something happens", example: { jp: "Saat itu saya tidak tahu alasannya.", en: "At that instant I did not know the reason." }, accept: ["the exact time of something", "just then"], drill: { jp: "Saat itu semua orang masih tidur", en: "At that instant everyone was still asleep" }, hint: "SAH-at, two syllables. A NOUN for a precise moment, where ketika is a joining word — so saat ini means right now and pada saat itu at that moment. In practice saat is used as a connector too, interchangeably with ketika, and you will hear both constantly. Sesaat means for an instant." },
      ],
    },
    {
      id: "id-u36l4",
      unit: 36,
      lesson: 4,
      title: "Menuju dan seberang",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Give directions and locations you could not give before — heading for somewhere, across from it, down from it, situated at it, low down, at the edge.",
      items: [
        { id: "id-u36l4-menuju", type: "vocab", front: "menuju", reading: "menuju", meaning: "to head for", example: { jp: "Kereta itu menuju kota besar.", en: "That train is heading for the big city." }, accept: ["bound for", "in the direction of"], drill: { jp: "Kami menuju pantai melalui jalan kecil", en: "We are heading for the beach by way of a small road" }, hint: "muh-NOO-joo. Takes its destination straight, with no ke — menuju Jakarta. You will read it on every departure board and hear it in every announcement, which is why it is worth having beside pergi ke. ⚠️ Tujuan, a goal, which you already have, is built on the same root: a destination is a goal." },
        { id: "id-u36l4-seberang", type: "vocab", front: "seberang", reading: "seberang", meaning: "the far side", example: { jp: "Masjid itu ada di seberang pasar.", en: "That mosque is across from the market." }, accept: ["across the way", "opposite"], drill: { jp: "Toko itu ada di seberang gereja", en: "That shop is across from the church" }, hint: "suh-buh-RAHNG. Di seberang means on the other side of — of a road, a river, a street. It is how Indonesians give directions, far more than left and right. ⚠️ Menyeberang, to cross over, is built on it and you meet it later in this band; its di- is nowhere in sight because seberang is a noun, the far bank." },
        { id: "id-u36l4-turun", type: "vocab", front: "turun", reading: "turun", meaning: "to go down", example: { jp: "Kami turun dari kereta di stasiun kecil.", en: "We got off the train at a small station." }, accept: ["to come down", "to get off"], drill: { jp: "Harga bawang turun di pasar itu", en: "The price of onions has come down at that market" }, hint: "TOO-roon. The exact opposite of naik, which you already have, and it copies all of naik's uses: getting off a vehicle, going downstairs, and a price falling. Turun dari mobil is to get out of a car. Menurunkan is to lower something or to drop somebody off." },
        { id: "id-u36l4-terletak", type: "vocab", front: "terletak", reading: "terletak", meaning: "to be situated", example: { jp: "Sekolah itu terletak di tengah kota.", en: "That school is situated in the middle of the city." }, accept: ["to lie somewhere", "to stand somewhere"], drill: { jp: "Rumah itu terletak di pinggir sungai", en: "That house is situated on the riverbank" }, hint: "tuhr-luh-TAK. The formal word for where a place IS — used in writing, on signs and in any description of a building or a town. ⚠️ HERE ter- DOES NOT MEAN MOST. You already have terlalu, terang, terus and terlambat, none of which is a superlative, and this is another: ter- also makes a stative, a thing in a settled state. Letak on its own is the position." },
        { id: "id-u36l4-rendah", type: "vocab", front: "rendah", reading: "rendah", meaning: "not high up", example: { jp: "Meja itu terlalu rendah untuk anak besar.", en: "That table is too low for a big child." }, accept: ["down near the ground", "of little height"], drill: { jp: "Suara dia rendah dan sangat tenang", en: "His voice is low and very calm" }, hint: "RUHN-dah. The opposite of tinggi, which you already have for high. ⚠️ Pendek, which you also have, is short in LENGTH — a short person, a short road. Rendah is low in HEIGHT or in level: harga rendah, suara rendah, rendah hati (humble, literally low-hearted). Merendahkan is to belittle somebody." },
        { id: "id-u36l4-pinggir", type: "vocab", front: "pinggir", reading: "pinggir", meaning: "the edge", example: { jp: "Kami duduk di pinggir sungai.", en: "We sat at the edge of the river." }, accept: ["the side of a road", "the margin"], drill: { jp: "Warung itu ada di pinggir jalan raya", en: "That stall is at the side of the main road" }, hint: "PING-geer — ngg is the hum plus a hard g. The edge or the side of something wide: pinggir jalan is the roadside and pinggir kota the city's outskirts. Pinggir laut is the shore. Tepi is the more formal twin and means the same. Meminggirkan is to push something aside." },
      ],
    },
  ],
};
