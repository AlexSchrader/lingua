// ID Unit 124 — Merantau dan perpindahan ("Migration and settlement") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u114–u126). Conventions: unit1.js §1–12, unit21.js, unit51.js
// §B1–B12, **block 1's §C1–C12 in unit88.js and §C-B4 in unit89.js** (which
// bind u88–u126 and outrank the D-series), and unit114.js §D1–D11. Read unit114.js's header before editing this.
//
// THE HOLE THIS FILLS. `desa` (u19), `penduduk` (u38), `paspor` (u23),
// `urbanisasi` (u55), `bangsa` `asing` `warga` (u47) and `pengungsi`/`mengungsi`
// (u75) were everything the course had about people moving. Not one word for
// `merantau` — which is not a vocabulary gap but a cultural one: leaving your
// home region to make a living is a defining Indonesian life pattern, with its
// own name, its own social expectations and its own annual return journey, and
// the course could not say any of it.
//
// TWO BOUNDARIES, BOTH RESPECTED:
//   u75 (B1) owns WAR DISPLACEMENT — `pengungsi` (a refugee) and `mengungsi`
//     (to flee). This unit takes `pengungsian`, the CAMP and the act as a noun,
//     and NEVER a second word for a refugee. One card off that root, not two.
//   u47 owns THE NATION — `bangsa` `asing` `warga`. This unit takes
//     `kewarganegaraan`, the legal STATUS, which is built on u47's `warga` and
//     `negara` and is a different thing from either.
//
// ⚠⚠ `pribumi` WAS CARDED HERE AND IS NOW DROPPED. Block 1 holds it at u99
// (Jati diri dan kesenjangan) and the lower unit wins — found at merge by
// `dupes.mjs id`, like the five other collisions this block had to fix. That is
// the right home for it: pribumi is an identity-and-inequality word, not a
// migration one, and block 1's unit is where the argument it belongs to lives.
// `deportasi` took the slot — it had been refused for space at 24 and this
// freed it — and `menampung` moved up to lesson 2 to keep 4x6.
//
// ⚠️ `urbanisasi` IS TAKEN (u55) AND THE LEAD LEFT IT ON THE LIST VISIBLY SO
// IT WOULD NOT BE RE-PROPOSED. I confirmed it: candidate-check reports TAKEN
// u55. It is not carded here and the move to the city is carried by
// `pendatang`, `pemukiman` and `merantau` instead.
//
// ONE GLOSS COLLISION MEASURED (gloss-taken.mjs id):
//   "a settlement" → kesepakatan@u51. A settlement of people and a settlement
//   of a dispute are one English word, and the B1 negotiation unit got there
//   first. So `pemukiman` is "a place where people have settled". Exactly the
//   same shape as u123's "to wave" → ombak collision: the English homograph,
//   not the Indonesian one, is what bites.
//
// ⚠️ `mudik` AND `pulang kampung` ARE THE SAME THING AND ONLY ONE SHIPS.
// `mudik` is the card. `pulang kampung` is refused on two counts: it is a
// synonym under one gloss (§D3), and it FIRES-INSIDE `pulang`(u18), so the
// shorter taught front sits inside it as a whole word. `mudik`'s hint names
// `pulang kampung` by word, which is how the learner still meets it.
//
// DERIVATION NOTES — THIS UNIT IS DENSE WITH THEM AND EVERY PAIR WAS TESTED
// AGAINST §D4 AND unit1.js §3:
//   `merantau`/`perantau`  the act and the person. Ships as a pair — rantau is
//     not carded, and the two words are not predictable from each other.
//   `pemukim`/`pemukiman`  the settler and the settlement. Same shape.
//   `pendatang` = pen- + `datang`(u13). candidate-check flags it; it is a real
//     derivation and a genuinely new word — a newcomer, with social weight
//     `datang` does not carry.
//   `setempat` = se- + `tempat`(u7). Flagged, real, and new: local TO the place.
//   `pengungsian` = -an on `pengungsi`(u75). Flagged, real, and the only card
//     this unit takes off that root, by the boundary above.
//
// FRONTS REFUSED, NAMED NOT BURIED:
//   `pulang kampung` and `urbanisasi` — above.
//   (`deportasi` was refused for space here in the first draft of this header.
//     It IS now carded — see `pribumi` above.) `hijrah` `menumpang` `betah`
//     `perumahan` `gubuk` all ship. `boyongan` and `kependudukan` probed free
//     and were cut; the fixed probe reports `kependudukan` as a ke-...-an
//     circumfix on `penduduk`(u38), which is correct and is why it stayed out.
//   `kerabat` TAKEN u68. `rindu` TAKEN u31. `tanah air` FIRES-INSIDE both
//     `tanah`(u46) and `air`(u6). `desa` TAKEN u19, `penduduk` TAKEN u38,
//     `paspor` TAKEN u23 — all three of the lead's claims verified true.
//
// AFFIX LEDGER, as block 1's §C4 requires — derivations off a TAUGHT root:
//   `pendatang`    pen- on `datang`(u13)      a newcomer, with social weight
//   `setempat`     se- on `tempat`(u7)        local TO here, not just a place
//   `menetap`      men- on `tetap`(u29)       to settle for good
//   `pengungsian`  pe-...-an on `mengungsi`(u75)  the camp, not the fleeing
//   `perumahan`    pe-...-an on `rumah`(u4)   a built estate, not a house
// ⚠️ FIVE TAUGHT ROOTS, above the max of 4 block 1 measured, so per §C4 here
// is why: this unit's SUBJECT is derivational. Indonesian says migration with
// affixes — merantau/perantau, pemukim/pemukiman, pendatang vs setempat — and
// the contrasts ARE the content. Each names something its root does not; none
// meets §C-B4's refusal test. Three further pairs are internal to this unit
// (`merantau`/`perantau`, `pemukim`/`pemukiman`, and `perpindahan`, whose root
// `pindah` is NOT taught), which §C4 explicitly calls house style.
//
// ⚠️ ASSUMED-TAUGHT WORDS CHECKED AND OUT OF THE EXAMPLES: `pindah` (so
// `perpindahan` has no taught root to lean on and its hint says so), `hidup`,
// `lebaran`, `hari raya`. `puasa` IS taught and is what the `mudik` example
// uses, since Ramadan is what the journey is timed to.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT124 = {
  id: "id-u124",
  lang: "id",
  title: "Merantau dan perpindahan",
  order: 124,
  stage: "b2",
  lessons: [
    {
      id: "id-u124l1",
      unit: 124,
      lesson: 1,
      title: "Merantau, perantau, dan mudik",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe the single most common Indonesian life story — leaving your home region to earn, being a person who has left, and going back each year.",
      items: [
        { id: "id-u124l1-merantau", type: "vocab", front: "merantau", reading: "merantau", meaning: "to leave home to seek a living elsewhere", example: { jp: "Banyak orang muda merantau ke kota besar untuk bekerja.", en: "Many young people leave home for the big cities to work." }, accept: ["to go away to make one's way", "to seek work far from where one was born", "to go off to earn far from home"], drill: { jp: "Banyak orang muda merantau ke kota besar", en: "Many young people leave home for the big cities" }, hint: "muh-ran-TAU, the last part rhyming with cow, from rantau, a foreign shore. ⚠️ THE KEY WORD IN THIS UNIT, and it has no English equivalent. It is not emigrating and not just moving: it is leaving your home region to make your way, with the expectation that you will come back, and among the Minangkabau it is close to an obligation for young men." },
        { id: "id-u124l1-perantau", type: "vocab", front: "perantau", reading: "perantau", meaning: "one who has left home to make a living", example: { jp: "Perantau dari pulau itu banyak yang punya warung di Jakarta.", en: "Many people from that island who have moved away have food stalls in Jakarta." }, accept: ["a person living away from their birthplace", "someone working far from home", "a person who has gone away to earn"], drill: { jp: "Perantau dari pulau itu banyak di Jakarta", en: "There are many migrants from that island in Jakarta" }, hint: "puh-ran-TAU — pe- makes the person who merantau, as it made pelaut from laut. A perantau is not an immigrant: they are from here, living elsewhere, and still counted as belonging to home." },
        { id: "id-u124l1-mudik", type: "vocab", front: "mudik", reading: "mudik", meaning: "to travel back to one's home town for a holiday", example: { jp: "Juta orang mudik setiap tahun sebelum bulan puasa.", en: "Millions of people travel home every year before the fasting month." }, accept: ["to go home for a festival", "the yearly journey back to where one is from", "to return to one's home region for a holiday"], drill: { jp: "Juta orang mudik setiap tahun sebelum puasa", en: "Millions travel home every year before the fast" }, hint: "MOO-deek. The annual return, timed to the end of Ramadan, and the largest regular human migration on earth — tens of millions of people at once. ⚠️ Indonesian also says pulang kampung for the same thing; it is NOT taught, because two fronts under one gloss is a prompt with two right answers." },
        { id: "id-u124l1-kampung", type: "vocab", front: "kampung", reading: "kampung", meaning: "a village as a home place", example: { jp: "Dia sudah lama di kota tetapi masih punya rumah di kampung.", en: "He has been in the city a long time but still has a house back home." }, accept: ["the kind of place one is from", "one's home neighbourhood", "a home village or quarter"], drill: { jp: "Dia masih punya rumah di kampung", en: "He still has a house back home" }, hint: "KAM-poong. Not quite desa, the village you already know: desa is an administrative village, kampung is where you are FROM, and it works inside a city too — a kampung is also a dense old neighbourhood. ⚠️ Kampungan, as an adjective, means unsophisticated and is an insult." },
        { id: "id-u124l1-pendatang", type: "vocab", front: "pendatang", reading: "pendatang", meaning: "a newcomer", example: { jp: "Pendatang baru di kota itu susah mencari rumah.", en: "New arrivals in that city find it hard to look for housing." }, accept: ["someone who has arrived from elsewhere", "a person not originally from here", "an incomer to a place"], drill: { jp: "Pendatang baru di kota itu susah mencari rumah", en: "New arrivals in that city find it hard to find housing" }, hint: "pun-da-TANG — pen- plus datang, to come, which you already know. A genuinely different word from its root: pendatang carries social weight that datang does not, and it is the word used about people who moved in and are not yet considered local." },
        { id: "id-u124l1-setempat", type: "vocab", front: "setempat", reading: "setempat", meaning: "local to the place", example: { jp: "Orang setempat tahu jalan yang paling cepat ke dermaga.", en: "Local people know the quickest way to the jetty." }, accept: ["belonging to the place itself", "of the area rather than from outside", "from the immediate area"], drill: { jp: "Orang setempat tahu jalan paling cepat ke dermaga", en: "Local people know the quickest way to the jetty" }, hint: "suh-tem-PAHT — se- plus tempat, a place, which you know. Specifically local as opposed to brought in: pemerintah setempat is the local government, warga setempat the local residents. The exact opposite of pendatang." },
      ],
    },
    {
      id: "id-u124l2",
      unit: 124,
      lesson: 2,
      title: "Pemukim, pemukiman, dan transmigrasi",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about settling rather than arriving — settlers, a settlement, staying for good, the state programme that moved millions, and a relocation.",
      items: [
        { id: "id-u124l2-pemukim", type: "vocab", front: "pemukim", reading: "pemukim", meaning: "a settler", example: { jp: "Pemukim pertama di daerah itu datang lebih dari lima tahun lalu.", en: "The first settlers in that area came more than five years ago." }, accept: ["one of those who have settled somewhere new", "a person who has made a new place home", "one of the people who settled a place"], drill: { jp: "Pemukim pertama datang lima tahun lalu", en: "The first settlers came five years ago" }, hint: "puh-moo-KEEM, from mukim, to be resident. Someone who came and STAYED, which is what separates a pemukim from a pendatang in the previous lesson: the pendatang has arrived, the pemukim has settled." },
        { id: "id-u124l2-pemukiman", type: "vocab", front: "pemukiman", reading: "pemukiman", meaning: "a place where people have settled", example: { jp: "Pemukiman baru itu dibangun di tanah yang dulu kosong.", en: "That new settlement was built on land that used to be empty." }, accept: ["a built-up area where people have settled", "a residential area", "an area of housing"], drill: { jp: "Pemukiman baru itu dibangun di tanah yang kosong", en: "That new settlement was built on empty land" }, hint: "puh-moo-KEE-man. ⚠️ Not glossed \"a settlement\": kesepakatan, an agreement, already owns that gloss, because English uses one word for a settlement of people and a settlement of a dispute. Pemukiman kumuh is a slum, and that is the phrase you will meet in the news." },
        { id: "id-u124l2-menetap", type: "vocab", front: "menetap", reading: "menetap", meaning: "to settle permanently", example: { jp: "Mereka akhirnya menetap di kota itu lagi.", en: "They finally settled in that city and did not go back." }, accept: ["to make a lasting home somewhere", "to stay for good rather than passing through", "to put down roots in a place"], drill: { jp: "Mereka akhirnya menetap di kota itu", en: "They finally settled in that city" }, hint: "muh-nuh-TAHP, from tetap, which you know meaning fixed or still. The opposite ending to merantau: a perantau who menetap has stopped being one. Also used of a doctor's verdict and of weather settling." },
        { id: "id-u124l2-transmigrasi", type: "vocab", front: "transmigrasi", reading: "transmigrasi", meaning: "the state resettlement programme", example: { jp: "Keluarga itu ikut transmigrasi ke Sumatra pada tahun lalu.", en: "That family joined the resettlement programme to Sumatra last year." }, accept: ["government-organised moving of families", "planned internal resettlement", "the official moving of people between islands"], drill: { jp: "Keluarga itu ikut transmigrasi ke Sumatra tahun lalu", en: "That family joined the resettlement programme to Sumatra last year" }, hint: "trans-mee-GRA-see. A specifically Indonesian word for a specifically Indonesian policy: the state moved millions of families from crowded Java and Bali to Sumatra, Kalimantan and Papua, with land and a house at the far end. Still controversial, and essential background to a lot of Indonesian news." },
        { id: "id-u124l2-perpindahan", type: "vocab", front: "perpindahan", reading: "perpindahan", meaning: "a relocation", example: { jp: "Perpindahan kantor itu akan selesai bulan depan.", en: "That office move will be finished next month." }, accept: ["a move from one place to another", "the shifting of people or things elsewhere", "a transfer to another place"], drill: { jp: "Perpindahan kantor itu akan selesai bulan depan", en: "That office move will be finished next month" }, hint: "per-peen-DA-han, from pindah, to move — and pindah itself is NOT taught in this course, so this noun is the first you meet of that root. Used of an office, a school transfer, a population shift, and of a capital city being relocated, which Indonesia is doing." },
        { id: "id-u124l2-menampung", type: "vocab", front: "menampung", reading: "menampung", meaning: "to take people in", example: { jp: "Sekolah itu menampung dua ratus orang selama dua minggu.", en: "That school took in two hundred people for two weeks." }, accept: ["to give shelter to those with nowhere", "to house and provide for", "to accommodate people who need somewhere"], drill: { jp: "Sekolah itu menampung dua ratus orang dua minggu", en: "That school took in two hundred people for two weeks" }, hint: "muh-nam-POONG, from tampung. First meaning is to catch and hold liquid — menampung air hujan, collecting rainwater, which every Indonesian house does. Then extended to people: a building, a camp or a country menampung those who need somewhere." },
      ],
    },
    {
      id: "id-u124l3",
      unit: 124,
      lesson: 3,
      title: "Migran, visa, dan imigrasi",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Handle the formal side of crossing a border — a migrant, citizenship, a visa, the immigration desk — which the course had `paspor` for and nothing else.",
      items: [
        { id: "id-u124l3-migran", type: "vocab", front: "migran", reading: "migran", meaning: "a person who moves country", example: { jp: "Banyak migran dari negara itu bekerja di kapal.", en: "Many migrants from that country work on ships." }, accept: ["someone who migrates", "an incomer from abroad", "a person who has moved between countries"], drill: { jp: "Banyak migran dari negara itu bekerja di kapal", en: "Many migrants from that country work on ships" }, hint: "MEE-grahn. The English word MIGRANT, kept out of the gloss so the card cannot be answered by copying the prompt. Pekerja migran, migrant worker, is the official Indonesian term and matters here: millions of Indonesians work abroad under it." },
        { id: "id-u124l3-kewarganegaraan", type: "vocab", front: "kewarganegaraan", reading: "kewarganegaraan", meaning: "citizenship", example: { jp: "Dia harus pilih satu kewarganegaraan sebelum tahun ini.", en: "She has to choose one citizenship before this year." }, accept: ["the legal status of belonging to a country", "the right to be a national of a state", "nationality as a legal status"], drill: { jp: "Dia harus pilih satu kewarganegaraan sebelum tahun ini", en: "She has to choose one citizenship before this year" }, hint: "kuh-war-ga-nuh-ga-RA-an — the longest word in this band, and it is built entirely out of pieces you have: ke- + warga (a citizen) + negara (a state) + -an. Indonesia does not permit dual citizenship for adults, which is the fact behind the example." },
        { id: "id-u124l3-visa", type: "vocab", front: "visa", reading: "visa", meaning: "an entry permit", example: { jp: "Visa itu hanya berlaku tiga bulan, tidak lebih.", en: "That permit is only valid for three months, no more." }, accept: ["a travel permit in a passport", "a stamp that lets you enter", "permission to enter a country"], drill: { jp: "Visa itu hanya berlaku tiga bulan saja", en: "That permit is only valid for three months" }, hint: "VEE-sa. The same word as in English, which is exactly why the gloss describes it instead: front and gloss being the same string makes a card answerable by typing the prompt back. Bebas visa, visa-free, is the phrase on an Indonesian arrival sign." },
        { id: "id-u124l3-imigrasi", type: "vocab", front: "imigrasi", reading: "imigrasi", meaning: "the border control desk", example: { jp: "Di imigrasi mereka meminta surat dari tempat bekerja.", en: "At passport control they asked for a letter from the workplace." }, accept: ["the immigration authority", "the office that checks entry", "the authority that controls entry"], drill: { jp: "Di imigrasi mereka meminta surat dari tempat bekerja", en: "At passport control they asked for a letter from the workplace" }, hint: "ee-mee-GRA-see. In practice this means the DESK and the OFFICE, not the phenomenon: kantor imigrasi is where you renew a permit, and antre di imigrasi is queueing at the airport. The English word stays in this hint." },
        { id: "id-u124l3-pengungsian", type: "vocab", front: "pengungsian", reading: "pengungsian", meaning: "a refugee camp", example: { jp: "Pengungsian itu dibuat di sekolah setelah gunung bergerak.", en: "The shelter was set up in a school after the mountain moved." }, accept: ["the sheltering of displaced people", "the place displaced people are housed", "an emergency shelter for the displaced"], drill: { jp: "Pengungsian itu dibuat di sekolah dekat gunung", en: "The shelter was set up in a school near the mountain" }, hint: "puh-ngoong-SEE-an. ⚠️ Built on pengungsi, a refugee, which you met in the war unit — and this unit deliberately teaches ONLY this one card off that root, because a second word for a refugee would be a prompt with two right answers. In Indonesia the commonest cause is not war but a volcano, which is what the example says." },
        { id: "id-u124l3-deportasi", type: "vocab", front: "deportasi", reading: "deportasi", meaning: "being sent out of a country", example: { jp: "Dia mengalami deportasi karena surat izin dia sudah selesai.", en: "He was removed from the country because his permit had run out." }, accept: ["removal from a country by order", "expulsion from a country", "forced return to one's own country"], drill: { jp: "Dia mengalami deportasi karena surat izin selesai", en: "He was deported because his permit had run out" }, hint: "day-por-TA-see. The English word DEPORTATION, described in the gloss for the usual reason. A live word at this end of the business: Indonesians working abroad on expired papers, and foreigners overstaying in Indonesia, both meet it, and kena deportasi is the phrase — though kena itself is not a word this course has taught, so the example says mengalami." },
      ],
    },
    {
      id: "id-u124l4",
      unit: 124,
      lesson: 4,
      title: "Terlantar dan kembali",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Say what happens when a move goes wrong — being left with nobody — and put the whole chapter together: leaving, settling, going back.",
      items: [
        { id: "id-u124l4-terlantar", type: "vocab", front: "terlantar", reading: "terlantar", meaning: "left with no one to care for them", example: { jp: "Anak terlantar di kota besar itu dibantu oleh sekolah kecil.", en: "Children left with nobody in that big city are helped by a small school." }, accept: ["abandoned and uncared for", "destitute and without shelter", "left to fend for themselves"], drill: { jp: "Anak terlantar itu dibantu sekolah kecil", en: "Children left with nobody are helped by a small school" }, hint: "ter-lan-TAHR. The ter- prefix again marks something that happened to someone with no one named as doing it, which is precisely the point of the word. Anak terlantar, abandoned children, is an official welfare category. ⚠️ Also spelled telantar, which the dictionary prefers." },
        { id: "id-u124l4-perumahan", type: "vocab", front: "perumahan", reading: "perumahan", meaning: "a housing estate", example: { jp: "Perumahan baru di luar kota itu masih kosong.", en: "The new housing estate outside that city is still empty." }, accept: ["a planned area of houses", "a built development of homes", "a residential development"], drill: { jp: "Perumahan baru di luar kota itu masih kosong", en: "The new housing estate outside that city is still empty" }, hint: "puh-roo-MA-han — pe- and -an around rumah, a house, which you have had since the first week. The PLANNED kind, built all at once and sold: the Indonesian suburb. Against pemukiman, which is any settled area however it grew." },
        { id: "id-u124l4-gubuk", type: "vocab", front: "gubuk", reading: "gubuk", meaning: "a hut", example: { jp: "Gubuk kecil itu dibuat dari kayu dan anyaman bambu.", en: "That small hut is made of wood and plaited bamboo." }, accept: ["a rough small shelter", "a shack", "a simple shelter of wood or leaf"], drill: { jp: "Gubuk kecil itu dibuat dari kayu dan bambu", en: "That small hut is made of wood and bamboo" }, hint: "GOO-book. A small rough shelter — in a field, beside a road, on the edge of a city. Not an insult in itself: a gubuk in a rice field is where you shelter from the sun. Gubuk derita, a hut of suffering, is the melodramatic version in song titles." },
        { id: "id-u124l4-betah", type: "vocab", front: "betah", reading: "betah", meaning: "to feel at home somewhere", example: { jp: "Dia tidak betah di kota, jadi pulang ke kampung lagi.", en: "He did not feel at home in the city, so he went back home again." }, accept: ["to be settled and comfortable in a place", "to like a place enough to stay", "to be content where one is"], drill: { jp: "Dia tidak betah di kota besar itu", en: "He did not feel at home in that big city" }, hint: "BUH-tah. ⚠️ NO ENGLISH EQUIVALENT, and it is the counterweight to merantau: betah is being settled enough somewhere that you want to stay. Tidak betah, said of a job or a city, is the standard reason an Indonesian gives for leaving one, and it needs no further explanation locally." },
        { id: "id-u124l4-menumpang", type: "vocab", front: "menumpang", reading: "menumpang", meaning: "to stay in someone else's place", example: { jp: "Dia menumpang di rumah paman waktu pertama di Jakarta.", en: "He stayed at an uncle's house when he was first in Jakarta." }, accept: ["to lodge with someone", "to live under another's roof for a while", "to put up at someone else's house"], drill: { jp: "Dia menumpang di rumah paman saya", en: "He stayed at my uncle's house" }, hint: "muh-noom-PANG, from tumpang. Also means to ride with someone — menumpang bus — but the sense here is the one that matters socially: almost every perantau starts out menumpang with a relative who got there first, and that network is how the whole pattern works." },
        { id: "id-u124l4-hijrah", type: "vocab", front: "hijrah", reading: "hijrah", meaning: "to move away and start again", example: { jp: "Kata hijrah sekarang juga dipakai untuk mengubah cara tinggal.", en: "The word hijrah is now also used for changing how one lives." }, accept: ["to leave one place for a fresh start", "to migrate in order to begin anew", "to make a decisive move elsewhere"], drill: { jp: "Kata hijrah sekarang juga dipakai untuk orang muda", en: "The word hijrah is now also used for young people" }, hint: "HEEJ-rah, from Arabic — originally the Prophet's migration from Mecca to Medina, which the Islamic calendar counts from. ⚠️ In Indonesian today it has a strong second life meaning a personal religious turn: anak hijrah is a young person who has become observant. Both senses are live." },
      ],
    },
  ],
};
