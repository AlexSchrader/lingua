// ID Unit 23 — Perjalanan jauh ("The long journey") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 1 (u21–u30). unit1.js's 12 conventions and unit21.js's A1–A10 BIND
// this file.
//
// ✅ THE ONLY ONE OF THIS BLOCK'S TEN SLOTS THAT KEPT ITS THEME — and it kept it
// because the corpus said so, not because the scaffold did. A1's u7 ("Town and
// places") took the IN-TOWN half: `mobil` · `sepeda` · `kereta` · `motor` ·
// `naik` · `berjalan` · `belok` · `kiri` · `kanan` · `lurus` · `masuk` ·
// `keluar`. The LONG journey was untouched: measured 2026-09-29 against all 480
// A1 cards, Indonesian had **no word for airport, aeroplane, ship, harbour,
// station, ticket, passport, suitcase, map, petrol, fare, driver, traffic jam, to
// arrive, to stay overnight, to visit, or a tourist.** So the title is retitled
// into Indonesian and NARROWED to what is actually missing.
//   l1  what you travel on — pesawat · kapal · bandara · stasiun · pelabuhan · tiket
//   l2  setting off, arriving, sleeping — tiba · menginap · berlibur · perjalanan ·
//       koper · paspor
//   l3  on the road        — macet · arah · sopir · bensin · ongkos · peta
//   l4  being a visitor    — mengunjungi · pemandangan · turis · oleh-oleh ·
//       wisata · berfoto
//
// ⚠️ `tiba` IS GLOSSED "to reach a destination" AND THAT IS NOT PRECIOUSNESS. A1's
// `datang` (to come) carries **"to arrive"** and **"arrive"** in its accept[], so
// glossing `tiba` "to arrive" would put two right answers behind one prompt and
// mark the learner wrong for the other. Verified against the live accept[], not
// assumed. The distinction is real and worth teaching anyway: `datang` is
// somebody turning up, `tiba` is a journey ending — kereta tiba jam tujuh.
// See unit21.js A4 for the other eleven collisions of this shape.
//
// ⚠️ **`hotel` IS DELIBERATELY NOT CARDED.** Indonesian for hotel is `hotel`:
// identical string to its English gloss, which makes the card a copy task, not a
// teachable — the `televisi`/`polisi`/`bus` cognate trap named in unit21.js A10.
// The word is in `menginap`'s hint instead, where it costs nothing and teaches
// the same fact. **This is not an omission; do not "fix" it with a duplicate.**
// The travel cognates that DO differ in spelling are carded and are fine, because
// the learner has to learn the Indonesian spelling: `tiket` (not *ticket*),
// `paspor` (not *passport*), `stasiun` (not *station*), `turis` (not *tourist*).
// `bus` was dropped for the same reason as `hotel` — and A1's u7 already gives
// four vehicles, so nothing is lost.
//
// AFFIX ROOTS CHECKED BY HAND (`check-front.mjs`'s LEXEME verdict fails open for
// Indonesian — unit1.js convention 3; each root below was stripped off the front
// and grepped in TAUGHT-WORDS.md by hand):
//   perjalanan → jalan   ⚠️ **THE THIRD CARD OFF ONE ROOT.** `jalan` (street) and
//     `berjalan` (to walk) are both A1's. Carded anyway: neither *street* nor *to
//     walk* gives you *a journey*. Drill-safe — "perjalanan" contains "jalan" at
//     index 3, preceded by "r" (a letter), so findWholeWord("jalan") does NOT
//     match inside it, and a drill carrying only `perjalanan` would fail front
//     `jalan`. This is unit21.js A7's first trap, checked rather than assumed.
//   berlibur → libur     ⚠️ `libur` IS taught ("day off"). Carded: a day off does
//     not give you *to go on holiday*. Drill-safe ("libur" at index 3, preceded
//     by "r").
//   mengunjungi → kunjung  root not taught.
//   pemandangan → pandang  root not taught.
//   berfoto → foto         ⚠️ root NOT taught — and note that means `foto` itself
//     is free for a later block; it is not being withheld, it simply did not earn
//     one of these 24 slots against the verb.
//   oleh-oleh            a non-plural reduplication (convention 5) — it is a
//     souvenir, not "several olehs". ⚠️ `oleh` alone (the passive agent marker) is
//     NOT taught and stays deferred with the passive; there is therefore no
//     shorter front whose drill this one could break.
//   tiba · menginap (→ inap, untaught) · koper · paspor · macet · arah · sopir ·
//   bensin · ongkos · peta · pesawat · kapal · bandara · stasiun · pelabuhan ·
//   tiket · turis · wisata — all roots, none taught.
//
// ⚠️ `tiba` AND `tiba-tiba` ARE IN DIFFERENT UNITS, AND THE DRILL DIRECTION THAT
// BREAKS IS THE ONE LINT CANNOT SEE. `tiba-tiba` (suddenly) is carded later in
// this block. A hyphen is NOT a letter, so a drill containing `tiba-tiba` DOES
// whole-word-match front `tiba` and a cloze would blank half a doubled word.
// **This unit's `tiba` drill deliberately carries no `tiba-tiba`.** Verified.
//
// SCOPE NOTE: `tentang` (about) is NOT taught anywhere in A1 and is carded later
// in this block, so no example here can say "a story about the journey" yet.
// Every one coordinates with `dan` or subordinates with `karena` instead.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT23 = {
  id: "id-u23",
  lang: "id",
  title: "Perjalanan jauh",
  order: 23,
  stage: "a2",
  lessons: [
    {
      id: "id-u23l1",
      unit: 23,
      lesson: 1,
      title: "Pesawat, kapal, dan tiket",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name the vehicle and the terminal for a long trip, and say you are buying a ticket for it.",
      items: [
        { id: "id-u23l1-pesawat", type: "vocab", front: "pesawat", reading: "pesawat", meaning: "an aeroplane", example: { jp: "Pesawat ke Jakarta berangkat jam tujuh.", en: "The plane to Jakarta leaves at seven o'clock." }, accept: ["a plane", "an aircraft", "a jet"], drill: { jp: "Pesawat itu tiba dari kota besar", en: "That plane arrives from a big city" }, hint: "puh-SAH-wat, first e swallowed. The full form is pesawat terbang, flying machine, but nobody says the second word. ⚠️ Confusingly, pesawat is ALSO a telephone extension — kantor asks for your pesawat and means your extension number." },
        { id: "id-u23l1-kapal", type: "vocab", front: "kapal", reading: "kapal", meaning: "a ship", example: { jp: "Kami naik kapal ke kota besar itu.", en: "We took a ship to that big city." }, accept: ["a boat", "a ferry", "a vessel"], drill: { jp: "Kapal besar itu masuk ke pelabuhan pagi", en: "That big ship came into the harbour in the morning" }, hint: "KAH-pal. A serious vessel, not a canoe — for a small boat Indonesians say perahu. In the world's largest archipelago the kapal laut, the sea ferry, is ordinary transport rather than a holiday. Kapal terbang is an older word for an aeroplane." },
        { id: "id-u23l1-bandara", type: "vocab", front: "bandara", reading: "bandara", meaning: "an airport", example: { jp: "Bandara itu jauh dari kota.", en: "That airport is far from the city." }, accept: ["the airport", "an air terminal", "the airfield"], drill: { jp: "Kami sampai di bandara jam lima pagi", en: "We got to the airport at five in the morning" }, hint: "ban-DAH-ra. A squeeze of bandar udara, air harbour — Indonesian shortens long official compounds like this constantly, and the short form is the real word. Note it is built on bandar, a port, which is why a sea port is a pelabuhan and not a bandara." },
        { id: "id-u23l1-stasiun", type: "vocab", front: "stasiun", reading: "stasiun", meaning: "a railway station", example: { jp: "Stasiun kereta dekat pasar baru.", en: "The train station is near the new market." }, accept: ["a train station", "the station", "a depot"], drill: { jp: "Saya tunggu kakak di stasiun itu", en: "I am waiting for my older sibling at that station" }, hint: "stah-see-OON — four syllables, and the i and u are separate vowels. From the Dutch, and note the SPELLING is what you must learn: Indonesian writes what it hears, so there is no -tion ending anywhere in the language." },
        { id: "id-u23l1-pelabuhan", type: "vocab", front: "pelabuhan", reading: "pelabuhan", meaning: "a harbour", example: { jp: "Pelabuhan itu ramai setiap hari Minggu.", en: "That harbour is crowded every Sunday." }, accept: ["a port", "the docks", "a seaport"], drill: { jp: "Ayah bekerja di pelabuhan dekat laut", en: "Father works at the harbour near the sea" }, hint: "puh-lah-BOO-han. From labuh, to drop anchor. Tanjung Priok in Jakarta is the one you will hear named most; for anything involving a pesawat you want bandara instead." },
        { id: "id-u23l1-tiket", type: "vocab", front: "tiket", reading: "tiket", meaning: "a travel ticket", example: { jp: "Harga tiket pesawat sudah mahal.", en: "The price of a plane ticket is already expensive." }, accept: ["a ticket", "a fare document", "a boarding pass"], drill: { jp: "Saya membeli dua tiket kereta pagi", en: "I bought two morning train tickets" }, hint: "TEE-ket. Borrowed, but note the spelling carefully — Indonesian has no English -ck, so it is tiket with one k. For a cinema or a match you will also hear karcis, and for a paid entry generally, tanda masuk." },
      ],
    },
    {
      id: "id-u23l2",
      unit: 23,
      lesson: 2,
      title: "Berangkat dan tiba",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Describe a trip end to end — leaving, arriving, where you slept, and what you packed.",
      items: [
        { id: "id-u23l2-tiba", type: "vocab", front: "tiba", reading: "tiba", meaning: "to reach a destination", example: { jp: "Kereta tiba di stasiun jam delapan.", en: "The train reaches the station at eight o'clock." }, accept: ["to get in", "to pull in", "to land"], drill: { jp: "Kami tiba di kota itu malam ini", en: "We reached that city tonight" }, hint: "TEE-ba. ⚠️ Not interchangeable with datang, which you already have: datang is somebody TURNING UP, tiba is a journey ENDING — so a train, a plane or a parcel tiba, and a guest datang. Kedatangan on an airport board means arrivals." },
        { id: "id-u23l2-menginap", type: "vocab", front: "menginap", reading: "menginap", meaning: "to stay overnight", example: { jp: "Kami menginap di rumah nenek dua malam.", en: "We stayed two nights at grandmother's house." }, accept: ["to spend the night", "to lodge", "to sleep over"], drill: { jp: "Turis itu menginap dekat pantai", en: "That tourist is staying near the beach" }, hint: "muh-NGEE-nap, opening on the ng hum. Specifically sleeping somewhere that is not your home, so it covers a hotel, a friend's floor and a homestay alike. ⚠️ The Indonesian word for hotel IS hotel, spelled and said the same, which is why it gets no card of its own — there is nothing to learn. Penginapan is lodgings." },
        { id: "id-u23l2-berlibur", type: "vocab", front: "berlibur", reading: "berlibur", meaning: "to go on holiday", example: { jp: "Keluarga saya berlibur ke pantai setiap tahun.", en: "My family goes on holiday to the beach every year." }, accept: ["to take a holiday", "to go away", "to vacation"], drill: { jp: "Kami berlibur di desa dekat gunung", en: "We are holidaying in a village near the mountain" }, hint: "buhr-LEE-boor. Built on libur, the day off you already know — libur is the DAY, berlibur is what you do with a run of them. Liburan is the holiday period itself and is what a school child will say." },
        { id: "id-u23l2-perjalanan", type: "vocab", front: "perjalanan", reading: "perjalanan", meaning: "a journey", example: { jp: "Perjalanan ke desa itu sangat jauh.", en: "The journey to that village is very long." }, accept: ["a trip", "travel", "a voyage"], drill: { jp: "Perjalanan kami mulai pagi dan selesai malam", en: "Our journey started in the morning and finished at night" }, hint: "puhr-jah-LAH-nan. The third word this language builds on jalan: a street, berjalan to walk, and now the journey itself. Selamat jalan, the goodbye you already know, is literally safe journey — the same root wishing you well." },
        { id: "id-u23l2-koper", type: "vocab", front: "koper", reading: "koper", meaning: "a suitcase", example: { jp: "Koper saya berat karena banyak buku.", en: "My suitcase is heavy because of all the books." }, accept: ["a case", "luggage", "a travel bag"], drill: { jp: "Koper itu masih ada di mobil", en: "That suitcase is still in the car" }, hint: "KOH-per. From the Dutch koffer. A tas is any bag; a koper is the big rigid one you check in. Bagasi is the luggage as a whole, and it is what an airline counter will say to you." },
        { id: "id-u23l2-paspor", type: "vocab", front: "paspor", reading: "paspor", meaning: "a passport", example: { jp: "Saya lupa paspor saya di kamar.", en: "I left my passport in the room." }, accept: ["travel papers", "a travel document", "the passport book"], drill: { jp: "Paspor dan tiket ada di tas saya", en: "The passport and ticket are in my bag" }, hint: "PAHS-por. Note the spelling — one s, no t, and no silent letters, because Indonesian spells what it says. Visa is visa, and for a long stay you will meet izin tinggal, the residence permit, built on the izin and tinggal you already have." },
      ],
    },
    {
      id: "id-u23l3",
      unit: 23,
      lesson: 3,
      title: "Di jalan",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Handle the road itself — ask the direction, complain about the traffic, and settle the fare and the fuel.",
      items: [
        { id: "id-u23l3-macet", type: "vocab", front: "macet", reading: "macet", meaning: "jammed with traffic", example: { jp: "Jalan ke kantor macet setiap pagi.", en: "The road to the office is jammed every morning." }, accept: ["stuck in traffic", "gridlocked", "congested"], drill: { jp: "Kami terlambat karena jalan macet", en: "We were late because the road was jammed" }, hint: "MAH-chet — c is CH, and the final t is barely released. ⚠️ Learn this one early: in Jakarta macet is a daily fact of life and the standard excuse for any lateness. It also means jammed in the mechanical sense, of a lock or a zip that will not move." },
        { id: "id-u23l3-arah", type: "vocab", front: "arah", reading: "arah", meaning: "a direction", example: { jp: "Kami berjalan ke arah pasar.", en: "We walked in the direction of the market." }, accept: ["the way something faces", "a bearing", "the heading"], drill: { jp: "Arah ke pantai ada di kanan", en: "The way to the beach is on the right" }, hint: "AH-rah, both a's open and the final h breathed. Ke arah means towards, and it is softer than plain ke: ke pasar is to the market, ke arah pasar is in the market's direction. Searah means going the same way." },
        { id: "id-u23l3-sopir", type: "vocab", front: "sopir", reading: "sopir", meaning: "a driver", example: { jp: "Sopir mobil itu sangat sabar.", en: "That car driver is very patient." }, accept: ["a chauffeur", "the person driving", "a cabbie"], drill: { jp: "Sopir itu tahu jalan yang dekat", en: "That driver knows the short way" }, hint: "SOH-peer. From the French chauffeur by way of Dutch, which is why the spelling looks nothing like the sound's origin. Menyopir is to drive, and note there is no separate everyday verb for driving a car — naik mobil, to go by car, does most of that work." },
        { id: "id-u23l3-bensin", type: "vocab", front: "bensin", reading: "bensin", meaning: "petrol", example: { jp: "Harga bensin naik bulan ini.", en: "The price of petrol went up this month." }, accept: ["fuel", "gasoline", "gas for a car"], drill: { jp: "Kami membeli bensin di jalan besar", en: "We bought petrol on the main road" }, hint: "BEN-seen. From the Dutch benzine. The filling station is a pom bensin, and the two grades you will see on the sign are Pertalite and Pertamax, both brand names rather than words. Isi bensin is to fill up." },
        { id: "id-u23l3-ongkos", type: "vocab", front: "ongkos", reading: "ongkos", meaning: "a fare", example: { jp: "Ongkos kereta lebih murah dari pesawat.", en: "The train fare is cheaper than the plane." }, accept: ["the charge", "a transport cost", "what you pay to travel"], drill: { jp: "Ongkos ke bandara tidak mahal", en: "The fare to the airport is not expensive" }, hint: "ONG-kos, opening on the ng hum. ⚠️ Narrower than harga: harga is the price of a THING, ongkos is what you pay to be moved or to have work done. Ongkos kirim, shipping cost, is the one you will meet most when buying anything online." },
        { id: "id-u23l3-peta", type: "vocab", front: "peta", reading: "peta", meaning: "a map", example: { jp: "Saya melihat peta karena saya bingung.", en: "I looked at the map because I was lost." }, accept: ["a chart", "a street map", "the plan of a place" ], drill: { jp: "Peta itu ada di tas saya", en: "That map is in my bag" }, hint: "puh-TAH, first e swallowed. Short and easy, and it covers a paper map and the one on your phone alike. ⚠️ Do not confuse it with pesta, a party — one letter apart and both common." },
      ],
    },
    {
      id: "id-u23l4",
      unit: 23,
      lesson: 4,
      title: "Jalan-jalan dan oleh-oleh",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Behave like a visitor — visit a place, admire the view, take a photo, and bring something home.",
      items: [
        { id: "id-u23l4-mengunjungi", type: "vocab", front: "mengunjungi", reading: "mengunjungi", meaning: "to visit", example: { jp: "Kami mengunjungi nenek di desa itu.", en: "We visited grandmother in that village." }, accept: ["to call on", "to go and see", "to pay a visit to"], drill: { jp: "Turis mengunjungi pantai dan gunung", en: "Tourists visit the beach and the mountain" }, hint: "muh-ngoon-JOO-ngee — two ng hums. It takes the place or person directly, with no preposition: mengunjungi Bali. Kunjungan is a visit. In speech you will hear the much shorter berkunjung ke, or simply pergi ke, go to." },
        { id: "id-u23l4-pemandangan", type: "vocab", front: "pemandangan", reading: "pemandangan", meaning: "the scenery", example: { jp: "Pemandangan dari gunung itu sangat bagus.", en: "The view from that mountain is very good." }, accept: ["a view", "the landscape", "the outlook"], drill: { jp: "Pemandangan laut dari kamar kami cantik", en: "The sea view from our room is beautiful" }, hint: "puh-man-DAH-ngan. Built on pandang, to gaze — so it is literally what there is to look at. Indonesians use it freely for anything worth turning your head for, from a rice terrace to a city skyline." },
        { id: "id-u23l4-turis", type: "vocab", front: "turis", reading: "turis", meaning: "a tourist", example: { jp: "Banyak turis datang ke pantai ini setiap tahun.", en: "Many tourists come to this beach every year." }, accept: ["a visitor from abroad", "a holidaymaker", "a sightseer"], drill: { jp: "Turis itu tidak bisa bahasa Indonesia", en: "That tourist cannot speak Indonesian" }, hint: "TOO-rees. Note the spelling again: two syllables, no -ist ending, because Indonesian writes the sound. You will also hear wisatawan, the formal native-built word, on signs and in the news." },
        { id: "id-u23l4-oleholeh", type: "vocab", front: "oleh-oleh", reading: "oleholeh", meaning: "a souvenir", example: { jp: "Saya membeli oleh-oleh untuk semua teman.", en: "I bought souvenirs for all my friends." }, accept: ["a gift brought back", "a present from a trip", "something you bring home"], drill: { jp: "Ibu meminta oleh-oleh dari kota itu", en: "Mother asked for a souvenir from that city" }, hint: "OH-leh-OH-leh. A doubling that makes a NEW word rather than a plural, like sama-sama and hati-hati. ⚠️ It is a genuine social obligation, not a nicety: coming back from a trip empty-handed is noticed, and food is the usual answer." },
        { id: "id-u23l4-wisata", type: "vocab", front: "wisata", reading: "wisata", meaning: "leisure travel", example: { jp: "Kota itu punya banyak tempat wisata.", en: "That city has many tourist spots." }, accept: ["tourism", "sightseeing", "recreational travel"], drill: { jp: "Tempat wisata itu ramai hari Minggu", en: "That tourist spot is crowded on Sunday" }, hint: "wee-SAH-ta. Almost always seen in a compound: tempat wisata, a tourist spot; wisata kuliner, a food crawl. Where berlibur is what you DO, wisata is the category of thing you do it at." },
        { id: "id-u23l4-berfoto", type: "vocab", front: "berfoto", reading: "berfoto", meaning: "to have your photo taken", example: { jp: "Kami berfoto di depan sekolah kami.", en: "We had our photo taken in front of our school." }, accept: ["to pose for a picture", "to be photographed", "to take a photo together"], drill: { jp: "Turis berfoto di depan gunung itu", en: "Tourists pose for photos in front of that mountain" }, hint: "buhr-FOH-toh. ⚠️ The ber- matters: berfoto is BEING in the photo, where memfoto is pointing the camera at somebody else. Foto alone is a photograph. Expect to be asked — a stranger requesting a berfoto with a foreign visitor is friendly, not rude." },
      ],
    },
  ],
};
