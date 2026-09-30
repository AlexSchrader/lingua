// ID Unit 38 — Di kota besar ("In the big city") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 2. unit1.js's 12 conventions and unit21.js's A1–A10 BIND this file.
//
// 🚨 RETHEMED BECAUSE THE SLOT NAMES SOMETHING INDONESIAN DOES NOT HAVE.
// The scaffold called this "Conjugation drill 1" and u39 "Conjugation drill 2".
// **INDONESIAN HAS NO CONJUGATION.** Not "little" — none: no tense, no person
// agreement, no number agreement, no mood inflection. unit1.js §3 records the
// measurement: "Indonesian has almost no inflection — no tense, no gender, no
// agreement, no article — so the 'lexeme = inflection' rule barely fires." `saya
// makan` is I eat, I ate and I will eat; sudah, sedang, akan and tadi carry the
// time, and those are A1's u13, already taught.
//   So a conjugation drill unit cannot be authored here at all — there is no form
//   to produce. This is exactly the artefact convention 12 warns about, one step
//   worse than u13's "Grammar 2 — verbs and particles": that slot at least named a
//   category Indonesian could re-theme, whereas this one names a mechanism the
//   language lacks. Both u38 and u39 are therefore rethemed outright, and the
//   `conjForm` field is used by NO Indonesian item in the corpus.
//   ⚠️ RECORDED FOR BLOCK 3 AND FOR THE B1 CREW: if a later scaffold hands you
//   "Conjugation drill 3", the answer is the same. Do not manufacture drills for a
//   paradigm that does not exist; retheme the slot and say so here.
//
//   THE HOLE THIS UNIT FILLS: A1's u7 gave the TOWN at walking scale (kota · pasar
//   · sekolah · kantor · jalan · toko · tempat · dekat · jauh · sebelah · depan ·
//   belakang · naik · mobil · sepeda · kereta · motor · berjalan · kiri · kanan ·
//   lurus · belok · masuk · keluar) and block 1's u23 took the LONG journey
//   (pesawat · kapal · bandara · stasiun · pelabuhan · tiket · koper · paspor ·
//   macet · sopir · bensin · ongkos · peta). Between them they left the CITY
//   ITSELF empty. Measured against all 720 live cards: **no word for a building, a
//   park, a bridge, the post office, the centre, an address, the main road, the
//   pavement, a traffic light, a junction, to park, to cross over, a motorbike
//   taxi, a taxi, a minibus, a bus stop, a passenger, to queue, safe, danger, the
//   residents, a district, an alley, or a light going out.** A learner could say
//   "turn left" and could not say where they lived.
//
// ⚠️ FOUR FRONTS WERE REFUSED ON THE COGNATE TRAP (§A10 — gloss == own front makes
// the card a copy task), and each is a decision, not a gap:
//   `bank`     — front "bank", gloss "a bank". Identical string.
//   `museum`   — front "museum", gloss "a museum". Identical string.
//   `terminal` — front "terminal", gloss "a terminal". Identical string.
//   `polisi`   — A1's conventions name it as a trap alongside `televisi`; not carded.
//   `hotel` and `bus` were already blocked by block 1 for the same reason.
//   The cognates that DO differ in spelling are carded and are fine: `taksi` ·
//   `trotoar` · `gang`. ⚠️ `taksi` is glossed "a taxi" — the strings "taksi" and
//   "taxi" are different, so `checkMeaning` does not equate them and the card is
//   a real question. Verified with the real normalizer, not assumed.
//
// ⚠️ ONE ITEM CROSSES INTO ANOTHER BLOCK'S DOMAIN AND IS FLAGGED, NOT HIDDEN:
//   `kecelakaan` (an accident) was on block 1's reserved list and belongs to A2
//   block 3's "health and the body" lane as much as to city traffic. **Not carded
//   here** — left to block 3. Named in `menyeberang`'s hint instead so the learner
//   meets the idea. `menyewa` (to rent) likewise left to block 3's money lane.
//
// AFFIX ROOTS CHECKED BY HAND (unit1.js §3 — LEXEME fails open for Indonesian):
//   persimpangan → simpang   root not taught.
//   menyeberang → seberang   ⚠️ `seberang` IS carded in u36 (the far side). Two
//     words off one root, two units (§A6): the noun for the far bank and the verb
//     for getting there. Drill-safe — findWholeWord("menyeberang", "seberang")
//     FAILS (the y before it is a letter), so a drill carrying the verb does NOT
//     satisfy the noun's front, and this card's drill carries no bare `seberang`.
//     Each hint names the other.
//   penduduk → duduk         ⚠️ `duduk` IS taught (u1, to sit). Carded: residents
//     are not sitting. The pe-…-an-less shape here is pen- + duduk, and the image
//     is those who are settled. Drill-safe — findWholeWord("penduduk", "duduk")
//     FAILS (the n before it is a letter). Hint draws the connection anyway.
//   kantor pos · jalan raya · lampu merah   three multi-word fronts (convention 8).
//     ⚠️ `kantor` (u7), `jalan` (u7), `lampu` (u17) and `merah` (u8) are ALL taught
//     and all are whole words inside their compound. Safe in both directions: each
//     card's cloze blanks its own multi-word span (verified with the real router —
//     exactly one blank each), and each component's own drill lives in a merged A1
//     unit that could not have carried the compound. `raya` is shared with u35's
//     `hari raya` and u35's `merayakan`: three words, three units, no fold
//     collision (jalanraya / hariraya / merayakan all distinct).
//   gedung · taman · jembatan · pusat · alamat · trotoar · parkir · ojek · taksi ·
//   angkot · halte · antre · aman · bahaya · daerah · gang · mati — roots.
//
// GLOSSES REGLOSSED TO CLEAR A LIVE `accept[]` (unit21.js §A4):
//   `gedung` is NOT "a building" — u4's `rumah` accepts "building". → "a big public
//     building".
//   `taman` is NOT "a park" — that normalises to "park", which collides with THIS
//     unit's own `parkir` ("to park"). The only same-block collision the probe
//     found. → "a public garden".
//   `penumpang` does not accept "a fare" — u23's `ongkos` does.
//
// ⚠️ REGISTER: `ojek` and `angkot` are carded and `nggak`/`banget` are not, and the
// line is convention 7's: these two are not slang, they are the NAMES of the two
// commonest forms of urban transport in Indonesia, understood in every province and
// printed on signs. A learner in a city needs `ojek` before `pesawat`.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT38 = {
  id: "id-u38",
  lang: "id",
  title: "Di kota besar",
  order: 38,
  stage: "a2",
  lessons: [
    {
      id: "id-u38l1",
      unit: 38,
      lesson: 1,
      title: "Gedung dan tempat umum",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name the places in a city you actually need to find — a building, a garden, a bridge, the post office, the centre — and give your address.",
      items: [
        { id: "id-u38l1-gedung", type: "vocab", front: "gedung", reading: "gedung", meaning: "a big public building", example: { jp: "Gedung itu terletak di pusat kota.", en: "That building is situated in the city centre." }, accept: ["a block", "a large structure"], drill: { jp: "Gedung baru itu tinggi dan besar", en: "That new building is tall and large" }, hint: "guh-DOONG, g hard as in GO. ⚠️ Rumah, which you already have, is a house or a home; a gedung is a large public or commercial building — an office block, a school building, a concert hall. Bangunan is the general word for any structure. Gedung olahraga is a sports hall." },
        { id: "id-u38l1-taman", type: "vocab", front: "taman", reading: "taman", meaning: "a public garden", example: { jp: "Anak kecil itu bermain di taman dekat sekolah.", en: "That small child plays in the garden near the school." }, accept: ["a garden square", "green space in a town"], drill: { jp: "Taman itu ada di seberang masjid", en: "That garden is across from the mosque" }, hint: "TAH-man. A planted public space — a park, a square, a garden. ⚠️ Halaman, which you already have, is the yard right by a house; a taman is public and planted. Taman kanak-kanak, literally children's garden, is kindergarten and is exactly the German idea. Bunga, which you have, is what grows in it." },
        { id: "id-u38l1-jembatan", type: "vocab", front: "jembatan", reading: "jembatan", meaning: "a bridge", example: { jp: "Jembatan itu terlalu sempit untuk mobil besar.", en: "That bridge is too narrow for a big car." }, accept: ["a crossing over water"], drill: { jp: "Jembatan itu ada di atas sungai", en: "That bridge is over the river" }, hint: "juhm-BAH-tan, j as in JAM. Over water or over a road. In a country of islands and rivers this is a genuinely high-frequency landmark, and people give directions by it: sebelum jembatan, before the bridge. Jembatan penyeberangan is a pedestrian footbridge, built on the same root as menyeberang later in this unit." },
        { id: "id-u38l1-kantorpos", type: "vocab", front: "kantor pos", reading: "kantorpos", meaning: "the post office", example: { jp: "Saya mengirim surat dari kantor pos.", en: "I sent the letter from the post office." }, accept: ["where you send letters", "the postal office"], drill: { jp: "Kantor pos itu libur pada hari Minggu", en: "That post office is closed on Sunday" }, hint: "KAHN-tor POHS, two words — kantor, an office, which you already have, plus pos. Indonesian builds most institution names this way, so once you have it you can read kantor polisi and kantor pajak too. Mengirim, to send, which you already have, is what you go there to do." },
        { id: "id-u38l1-pusat", type: "vocab", front: "pusat", reading: "pusat", meaning: "the centre", example: { jp: "Pusat kota ini selalu ramai pada pagi hari.", en: "This city centre is always busy in the morning." }, accept: ["downtown", "the hub"], drill: { jp: "Pusat kota itu jauh dari rumah kami", en: "That city centre is far from our house" }, hint: "POO-sat. ⚠️ Tengah, which you have from the last unit, is the geometric middle; pusat is the centre as the important part — pusat kota, pusat perbelanjaan (a shopping centre), pemerintah pusat (central government). Do not confuse it with pusing, dizzy, which you already have." },
        { id: "id-u38l1-alamat", type: "vocab", front: "alamat", reading: "alamat", meaning: "an address", example: { jp: "Saya menulis alamat baru di buku itu.", en: "I wrote the new address in that book." }, accept: ["where someone lives", "a street address"], drill: { jp: "Alamat itu ada di surat lama", en: "That address is on the old letter" }, hint: "ah-LAH-mat. Where somebody lives or where a letter goes — and now also an email address, alamat email. You already have nomor and jalan, which is most of one: Jalan Merdeka nomor lima. Beralamat di means to be located at." },
      ],
    },
    {
      id: "id-u38l2",
      unit: 38,
      lesson: 2,
      title: "Di jalan raya",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Get yourself along and across a city road — the main road, the pavement, the lights, a junction — parking, and crossing safely.",
      items: [
        { id: "id-u38l2-jalanraya", type: "vocab", front: "jalan raya", reading: "jalanraya", meaning: "the main road", example: { jp: "Jalan raya itu macet setiap pagi.", en: "That main road is jammed every morning." }, accept: ["a highway", "the big road"], drill: { jp: "Jalan raya itu lebar dan sangat ramai", en: "That main road is wide and very busy" }, hint: "JAH-lan RAH-ya, two words. Jalan, which you already have, is any road or street; jalan raya is the big through-road — literally the grand road, using the same raya as hari raya. ⚠️ Macet, which block 1 gave you, is what happens on it. Jalan tol is a toll motorway." },
        { id: "id-u38l2-trotoar", type: "vocab", front: "trotoar", reading: "trotoar", meaning: "the pavement", example: { jp: "Kami berjalan di trotoar yang sempit.", en: "We walked on the narrow pavement." }, accept: ["the sidewalk", "the footpath"], drill: { jp: "Trotoar itu penuh dengan warung kecil", en: "That pavement is full of small stalls" }, hint: "troh-toh-AR, three syllables. From Dutch trottoir, which is why the spelling looks odd for Indonesian — tr- at the start is rare. ⚠️ In practice an Indonesian trotoar is often occupied by parked motorbikes and food stalls, which is why pedestrians are usually on the road itself. Pejalan kaki, built on jalan and kaki, is a pedestrian." },
        { id: "id-u38l2-lampumerah", type: "vocab", front: "lampu merah", reading: "lampumerah", meaning: "the traffic light", example: { jp: "Mobil itu berhenti di lampu merah.", en: "That car stopped at the traffic light." }, accept: ["the stop light", "the signal at a junction"], drill: { jp: "Ada warung kopi dekat lampu merah", en: "There is a coffee stall near the traffic light" }, hint: "LAHM-poo MAY-rah, two words you already have separately: lampu, a lamp, and merah, red. ⚠️ Read it as an IDIOM, not as red lamp — it is the whole signal, whatever colour is showing, so lampu merah hijau makes sense to nobody. Traffic lights are also how Indonesians measure distance: dua lampu merah lagi, two lights further." },
        { id: "id-u38l2-persimpangan", type: "vocab", front: "persimpangan", reading: "persimpangan", meaning: "a junction", example: { jp: "Belok kanan di persimpangan itu.", en: "Turn right at that junction." }, accept: ["a crossroads", "an intersection"], drill: { jp: "Persimpangan itu selalu macet pada pagi hari", en: "That junction is always jammed in the morning" }, hint: "puhr-sim-PAHNG-an, five syllables — long, but it is the word on every direction sign. From simpang, to branch off. You already have belok, kiri and kanan, which is everything else you need: belok kiri di persimpangan. Simpang empat is a four-way crossroads." },
        { id: "id-u38l2-parkir", type: "vocab", front: "parkir", reading: "parkir", meaning: "to park", example: { jp: "Jangan parkir motor di trotoar itu.", en: "Do not park a motorbike on that pavement." }, accept: ["parking", "to leave a vehicle"], drill: { jp: "Dia parkir mobil di depan gedung", en: "He parked the car in front of the building" }, hint: "PAR-keer. Verb and noun at once, with no affix needed: saya parkir di sini, and tempat parkir is a car park. Memarkir is the formal transitive form. ⚠️ In Indonesia a tukang parkir will usually wave you in and expect a small fee — parkir is rarely free and rarely unattended." },
        { id: "id-u38l2-menyeberang", type: "vocab", front: "menyeberang", reading: "menyeberang", meaning: "to cross over", example: { jp: "Hati-hati ketika menyeberang jalan raya.", en: "Be careful when crossing the main road." }, accept: ["to cross the road", "to get to the other side"], drill: { jp: "Kami menyeberang di dekat lampu merah", en: "We cross near the traffic light" }, hint: "muh-nyuh-buh-RAHNG, ny one sound. Built on seberang, the far side, which you have from the last unit — you are going to the far side. ⚠️ Crossing an Indonesian road is done slowly and steadily with a raised hand, not in a dash; kecelakaan is the word for an accident if you get it wrong. Penyeberangan is a crossing place." },
      ],
    },
    {
      id: "id-u38l3",
      unit: 38,
      lesson: 3,
      title: "Angkutan kota",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Use city transport the way Indonesians do — hailing an ojek, a taxi or a minibus, waiting at a stop, being a passenger, and queuing.",
      items: [
        { id: "id-u38l3-ojek", type: "vocab", front: "ojek", reading: "ojek", meaning: "a motorbike taxi", example: { jp: "Saya naik ojek karena jalan raya macet.", en: "I took a motorbike taxi because the main road was jammed." }, accept: ["a motorcycle for hire", "a bike ride you pay for"], drill: { jp: "Ojek itu lebih cepat daripada mobil", en: "A motorbike taxi is faster than a car" }, hint: "OH-jek. ⚠️ THE MOST USEFUL TRANSPORT WORD IN THIS UNIT and it has no English equivalent: a motorbike you pay to ride pillion on, which is how most of urban Indonesia moves. Tukang ojek is the driver. Ojek online, ordered by app, has largely replaced the old street-corner kind. You already have naik, which is the verb for it." },
        { id: "id-u38l3-taksi", type: "vocab", front: "taksi", reading: "taksi", meaning: "a taxi", example: { jp: "Kami naik taksi dari bandara ke rumah.", en: "We took a taxi from the airport to the house." }, accept: ["a cab", "a taxi cab"], drill: { jp: "Taksi itu berhenti di depan gedung", en: "That taxi stopped in front of the building" }, hint: "TAHK-see. Note the Indonesian spelling: ks where English has x, which is the regular substitution — you will see it again in teks and taksir. Argo is the meter, and pakai argo is what you ask for to avoid negotiating. More expensive than an ojek and much slower in traffic." },
        { id: "id-u38l3-angkot", type: "vocab", front: "angkot", reading: "angkot", meaning: "a minibus", example: { jp: "Angkot itu penuh dengan pelajar sekolah.", en: "That minibus is full of school pupils." }, accept: ["a shared van", "a public minivan"], drill: { jp: "Angkot itu berhenti di setiap persimpangan", en: "That minibus stops at every junction" }, hint: "AHNG-kot. Short for angkutan kota, city transport — a small van running a fixed route that you flag down anywhere and get out of anywhere. ⚠️ It has no timetable and no proper stops, which is why halte on the next card matters less here than it would in Europe. Bemo and mikrolet are regional names for the same thing." },
        { id: "id-u38l3-halte", type: "vocab", front: "halte", reading: "halte", meaning: "a bus stop", example: { jp: "Angkot itu berhenti di halte dekat pasar.", en: "That minibus stopped at the stop near the market." }, accept: ["a stop where you wait", "a stopping place"], drill: { jp: "Halte itu ada di pinggir jalan raya", en: "That stop is at the side of the main road" }, hint: "HAHL-tuh, two syllables with the final e swallowed. From Dutch halte. A proper marked stop with a shelter, which in Indonesia mostly means the city bus systems — an angkot will stop wherever you wave. ⚠️ Berhenti, which you already have, is the verb; halte is the place." },
        { id: "id-u38l3-penumpang", type: "vocab", front: "penumpang", reading: "penumpang", meaning: "a passenger", example: { jp: "Penumpang itu turun di halte kecil.", en: "That passenger got off at a small stop." }, accept: ["someone being carried", "someone riding in a vehicle"], drill: { jp: "Semua penumpang harus antre di sini", en: "All passengers must queue here" }, hint: "puh-NOOM-pang. From tumpang, to ride along on something. The same pe- pattern that gives you penulis and penonton, which you now have three of. ⚠️ Ongkos, which block 1 gave you, is the fare a penumpang pays. Sopir, which you also have, is who drives them." },
        { id: "id-u38l3-antre", type: "vocab", front: "antre", reading: "antre", meaning: "to queue", example: { jp: "Kami antre lama di kantor pos.", en: "We queued a long time at the post office." }, accept: ["to line up", "to wait your turn"], drill: { jp: "Orang antre di depan toko baru", en: "People are queueing in front of the new shop" }, hint: "AHN-truh, the final e swallowed. Verb and noun: antre di sini, and antrean is the queue itself. ⚠️ Also spelled antri, and you will see both on signs — antre is the standard form. Mengantre is the prefixed twin with the same meaning. Tunggu, which you already have, is to wait; antre is to wait in line." },
      ],
    },
    {
      id: "id-u38l4",
      unit: 38,
      lesson: 4,
      title: "Aman atau bahaya",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say whether a part of the city is safe — naming the danger, the residents, the district, the alley — and report that a light has gone out.",
      items: [
        { id: "id-u38l4-aman", type: "vocab", front: "aman", reading: "aman", meaning: "safe", example: { jp: "Daerah ini aman pada malam hari.", en: "This district is safe at night." }, accept: ["out of danger", "secure"], drill: { jp: "Jalan itu aman untuk anak kecil", en: "That road is safe for a small child" }, hint: "AH-man. Safe and secure alike — of a place, a journey or a stored thing: simpan di tempat aman. Keamanan is security, and it is the word on every guard post. ⚠️ Selamat, which you know from greetings, also means safe, but as a wish or an outcome (Selamat jalan); aman describes a state." },
        { id: "id-u38l4-bahaya", type: "vocab", front: "bahaya", reading: "bahaya", meaning: "danger", example: { jp: "Ada bahaya besar di jalan raya itu.", en: "There is a big danger on that main road." }, accept: ["a hazard", "a risk to you"], drill: { jp: "Bahaya itu jelas untuk semua penumpang", en: "That danger is plain to all passengers" }, hint: "ba-HAH-ya, three syllables. The noun; berbahaya is the adjective, dangerous, and that is the form you will see on warning signs. ⚠️ Keep it apart from bahagia, deeply happy, which you met earlier in this block — two letters apart and opposite in feeling. Bahaya! shouted alone is a warning." },
        { id: "id-u38l4-penduduk", type: "vocab", front: "penduduk", reading: "penduduk", meaning: "the residents", example: { jp: "Penduduk di daerah ini kebanyakan pelajar.", en: "The residents in this district are mostly students." }, accept: ["the population", "the people living there"], drill: { jp: "Penduduk kota itu sangat banyak sekarang", en: "That city's population is very large now" }, hint: "puhn-DOO-dook. ⚠️ Look inside it: duduk, to sit, which you already have — the residents are those who have settled. Warga, which you met earlier in this block, is a member of a community with the rights that go with it; penduduk is simply whoever lives there, and it is the word a census uses. Kependudukan is demography." },
        { id: "id-u38l4-daerah", type: "vocab", front: "daerah", reading: "daerah", meaning: "a district", example: { jp: "Daerah itu terletak di luar pusat kota.", en: "That district is situated outside the city centre." }, accept: ["an area of a country", "a region"], drill: { jp: "Adat di daerah ini masih sangat kuat", en: "The customs in this district are still very strong" }, hint: "DIE-rah — the ae is one sound, like the English eye, then rah. Any area from a neighbourhood to a province: daerah ini, this area, and Pemerintah Daerah, local government. ⚠️ Tempat, which you already have, is a specific place; a daerah is a stretch of territory. Bahasa daerah is a regional language." },
        { id: "id-u38l4-gang", type: "vocab", front: "gang", reading: "gang", meaning: "an alley", example: { jp: "Rumah saya ada di gang kecil itu.", en: "My house is in that small alley." }, accept: ["a narrow lane", "a back street"], drill: { jp: "Gang itu terlalu sempit untuk mobil", en: "That alley is too narrow for a car" }, hint: "GAHNG, g hard, one syllable. ⚠️ Nothing to do with the English gang — this is a narrow residential lane too small for a car, and most Indonesian addresses include one: Gang Mawar nomor tiga. From Dutch gang, a passage. Masuk gang is what you tell an ojek driver." },
        { id: "id-u38l4-mati", type: "vocab", front: "mati", reading: "mati", meaning: "gone out", example: { jp: "Lampu di gang itu mati sejak kemarin.", en: "The light in that alley has been out since yesterday." }, accept: ["dead", "no longer working"], drill: { jp: "Kompor itu mati dan dapur gelap", en: "That stove has gone out and the kitchen is dark" }, hint: "MAH-tee. One word for everything that has stopped: a person who has died, a light that has gone out, an engine that has cut, a phone with no battery. Lampu mati and mesin mati are both everyday. ⚠️ Not matahari, the sun, which you already have and which is mata plus hari, eye of the day. Mematikan is to switch something off." },
      ],
    },
  ],
};
