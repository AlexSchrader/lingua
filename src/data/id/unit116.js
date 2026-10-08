// ID Unit 116 — Penerbangan dan angkasa ("Aviation and space") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u114–u126). Conventions: unit1.js §1–12, unit21.js, unit51.js
// §B1–B12, and unit114.js §C1–C10. Read unit114.js's header before editing this.
//
// THE HOLE THIS FILLS. `bandara` (u23) was the entire aviation vocabulary of a
// country where flying between islands is the only practical way to travel.
// `bintang` (u19), `bulan` and `matahari` (u9/u19) were the whole sky. No word
// for a flight, an airline, baggage, taking off, landing, altitude — and nothing
// at all above the atmosphere.
//
// ⚠️ `landasan` IS NOT CARDED, WHICH IS WHY TAKE-OFF IS `lepas landas`.
// `landasan` is TAKEN (u58) and the taught sense is "a foundation / a basis" —
// an abstract one, used of an argument. The runway sense is therefore blocked by
// rule 12. `lepas landas` is the standard Indonesian phrase for take-off and
// needs no runway noun, so nothing is lost; the hint on it names landasan pacu,
// the runway, as a phrase the learner will read at an airport.
//
// TWO GLOSS COLLISIONS MEASURED (gloss-taken.mjs id):
//   "to take off" → melepas@u25   so `lepas landas` is "to take off from a runway"
//   "to land"     → tiba@u23      so `mendarat` is "to bring an aircraft down
//                                 onto a runway"
// Both were found BEFORE a card was written and both are the same trap: the
// plain English phrasal verb was already somebody's accept entry.
//
// COGNATES — EVERY ONE CARRIES A DESCRIPTIVE GLOSS (§C1), AND THIS UNIT IS WHERE
// THAT RULE EARNS ITS KEEP. `satelit` `roket` `orbit` `planet` `teleskop`
// `gravitasi` `pilot` `komet` are all readable by an English speaker, so a gloss
// of the English twin makes `produceIsFreePass` TRUE and the learner types the
// prompt back for a pass. MEASURED on the engine's own predicate:
//     front `planet` + gloss "a planet"              → FREEPASS
//     front `planet` + gloss "a world that goes around a star"  → clean
// The English word is in the hint of every one of them, where it teaches and
// cannot be graded.
//
// FRONTS REFUSED, NAMED NOT BURIED:
//   `orbit`     bare. It is the root of `mengorbit`, which this unit DOES teach,
//               so carding both is one word twice (§C4) — and the bare noun is
//               the harder of the two to gloss without its English twin.
//   `astronaut` the English spelling. Indonesian's own forms are `astronot` and
//               `antariksawan`; `antariksawan` is -wan off `antariksa`, which
//               this unit also teaches, so `astronot` ships and the other two
//               are named in its hint.
//   `meteor` `galaksi` `teropong` `penerbang` — probed free, cut for space at 24.
//               `teropong` is the everyday word for a spyglass and is the first
//               refill if this slot ever widens.
//
// DERIVATION NOTES (unit1.js §3):
//   `penerbangan` = pe-/-an off `terbang`, to fly, which is taught. One card off
//     that root here, not two: `penerbang` (an airman) is refused above.
//   `peluncuran`/`meluncurkan` — two off `luncur`, the noun and the verb. Rule 3
//     passed: an event vs an act, the `bekerja`/`pekerjaan` shape.
//   `ketinggian` = ke-/-an off `tinggi`, tall, which is taught. The abstract
//     quantity, not the adjective.
//   `awak kabin` is a multi-word front built on `awak`, which u114 teaches as a
//     ship's crew. Deliberate: it is the same word doing the aviation job, and
//     u114's hint points forward to it by name, not by unit number (§10).
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT116 = {
  id: "id-u116",
  lang: "id",
  title: "Penerbangan dan angkasa",
  order: 116,
  stage: "b2",
  lessons: [
    {
      id: "id-u116l1",
      unit: 116,
      lesson: 1,
      title: "Maskapai, bagasi, dan awak kabin",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Deal with a domestic flight in Indonesian — the airline, the flight itself, the checked bag, and who is who on board.",
      items: [
        { id: "id-u116l1-penerbangan", type: "vocab", front: "penerbangan", reading: "penerbangan", meaning: "a flight", example: { jp: "Penerbangan ke Lombok hanya satu jam dari Surabaya.", en: "The flight to Lombok is only an hour from Surabaya." }, accept: ["a scheduled air service", "a trip by plane", "an air journey"], drill: { jp: "Penerbangan ke Lombok hanya satu jam", en: "The flight to Lombok is only an hour" }, hint: "puh-ner-BANG-an — pe- and -an wrapped around terbang, to fly — a root you meet here for the first time, since the course taught you pesawat and bandara and never the verb. The flight as a service: penerbangan pagi, the morning flight. It also means aviation as an industry." },
        { id: "id-u116l1-maskapai", type: "vocab", front: "maskapai", reading: "maskapai", meaning: "an airline", example: { jp: "Maskapai itu punya banyak penerbangan ke pulau kecil.", en: "That airline has a lot of flights to small islands." }, accept: ["a carrier company", "the company that runs the planes", "an air carrier"], drill: { jp: "Maskapai itu punya banyak penerbangan murah", en: "That airline has a lot of cheap flights" }, hint: "mas-ka-PIE, rhyming with the English word pie. From Dutch maatschappij, a company — which is why it looks like nothing else in Indonesian. Maskapai penerbangan in full; maskapai alone is understood." },
        { id: "id-u116l1-bagasi", type: "vocab", front: "bagasi", reading: "bagasi", meaning: "checked luggage", example: { jp: "Bagasi saya tidak datang, jadi saya harus tunggu di bandara.", en: "My luggage did not arrive, so I have to wait at the airport." }, accept: ["bags put in the hold", "hold baggage", "the suitcases that go under the plane"], drill: { jp: "Bagasi saya tidak datang jadi saya tunggu", en: "My luggage did not arrive so I wait" }, hint: "ba-GA-see. Specifically the bag that goes in the hold, with a weight limit — what you carry on is a tas kabin. Bagasi is also the boot of a car, which is where the word came from." },
        { id: "id-u116l1-pilot", type: "vocab", front: "pilot", reading: "pilot", meaning: "the person who flies an aircraft", example: { jp: "Pilot bilang kita akan mendarat lebih cepat dari biasa.", en: "The pilot said we will land earlier than usual." }, accept: ["an aviator", "one who flies a plane", "the one at the aircraft controls"], drill: { jp: "Pilot bilang kita akan mendarat lebih cepat", en: "The pilot said we will land earlier" }, hint: "PEE-loht. The English word, kept out of the gloss on purpose: a card whose answer is written in its own prompt teaches nothing. Indonesian also has penerbang, an airman, which is more formal and much rarer. A ship's captain is a nakhoda, never a pilot." },
        { id: "id-u116l1-pramugari", type: "vocab", front: "pramugari", reading: "pramugari", meaning: "a female flight attendant", example: { jp: "Pramugari itu berbicara dua bahasa dengan semua orang di pesawat.", en: "That flight attendant speaks two languages with everyone on the plane." }, accept: ["a stewardess", "the woman who serves on a plane", "a female cabin attendant"], drill: { jp: "Pramugari itu berbicara dua bahasa dengan kami", en: "That flight attendant speaks two languages with us" }, hint: "pra-moo-GA-ree. Indonesian marks this one for gender and you need both: pramugari is a woman, pramugara is a man. Built from pramu-, a serving prefix, plus the Sanskrit feminine -i. Also used of train and ferry staff." },
        { id: "id-u116l1-awakkabin", type: "vocab", front: "awak kabin", reading: "awakkabin", meaning: "cabin crew", example: { jp: "Awak kabin harus ada di tempat sebelum orang masuk.", en: "The cabin crew have to be in place before people board." }, accept: ["the staff who work in the cabin", "the people who look after passengers in flight", "the flight attendants as a group"], drill: { jp: "Awak kabin harus ada di tempat dulu", en: "The cabin crew have to be in place first" }, hint: "A-wahk KA-bin. The same awak you met as a ship's crew, doing the aviation job — one word, two vehicles, which is exactly how Indonesian builds vocabulary. The announcement you will actually hear is awak kabin, siap untuk lepas landas." },
      ],
    },
    {
      id: "id-u116l2",
      unit: 116,
      lesson: 2,
      title: "Lepas landas, mendarat, dan ketinggian",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Narrate a flight from the runway to the ground — taking off, climbing, cruising altitude, landing — and use the same verbs for a rocket.",
      items: [
        { id: "id-u116l2-lepaslandas", type: "vocab", front: "lepas landas", reading: "lepaslandas", meaning: "to take off from a runway", example: { jp: "Pesawat itu lepas landas terlambat karena hujan.", en: "That plane took off late because of rain." }, accept: ["to get a plane into the air", "to leave the ground at the start of a flight", "to lift off"], drill: { jp: "Pesawat itu lepas landas terlambat sekali", en: "That plane took off very late" }, hint: "LUH-pahs LAN-dahs — lepas, to let go, plus landas. ⚠️ Not glossed \"to take off\": melepas, which you know, already owns that gloss and the grader cannot tell them apart. The runway itself is landasan pacu, and bare landasan is taught in this course meaning a foundation." },
        { id: "id-u116l2-mendarat", type: "vocab", front: "mendarat", reading: "mendarat", meaning: "to bring an aircraft down onto a runway", example: { jp: "Kami mendarat di Makassar sebelum matahari turun.", en: "We landed at Makassar before the sun went down." }, accept: ["to put an aircraft down", "to touch down at an airport", "to come down onto the ground"], drill: { jp: "Kami mendarat di Makassar sebelum malam", en: "We landed at Makassar before night" }, hint: "mun-DA-raht — men- plus darat, dry land. ⚠️ Not glossed \"to land\": tiba, to arrive, already owns that gloss. Also used of a helicopter, a rocket and a bird, and figuratively of an idea that finally touches down." },
        { id: "id-u116l2-ketinggian", type: "vocab", front: "ketinggian", reading: "ketinggian", meaning: "altitude", example: { jp: "Pada ketinggian itu udara di luar sangat dingin.", en: "At that altitude the air outside is very cold." }, accept: ["height above the ground", "how high something is", "elevation"], drill: { jp: "Pada ketinggian itu udara sangat dingin", en: "At that altitude the air is very cold" }, hint: "kuh-ting-GEE-an — ke- and -an around tinggi, tall, which you already know. The MEASURED height, as a number. ⚠️ Spoken Indonesian also uses ketinggian to mean too high, so kursinya ketinggian is the chair is too tall; context decides." },
        { id: "id-u116l2-menjulang", type: "vocab", front: "menjulang", reading: "menjulang", meaning: "to tower above", example: { jp: "Gunung itu menjulang di atas kota dan terlihat dari jauh.", en: "That mountain towers above the city and is visible from far away." }, accept: ["to rise high over everything around", "to loom tall", "to stand far above the rest"], drill: { jp: "Gunung itu menjulang di atas kota kami", en: "That mountain towers above our city" }, hint: "mun-joo-LANG. Used of a mountain, a tower, a wave, and of a price going through the roof: harga menjulang. The sense is always rising far above what is around it, not just being tall." },
        { id: "id-u116l2-meluncurkan", type: "vocab", front: "meluncurkan", reading: "meluncurkan", meaning: "to send a craft up", example: { jp: "Mereka meluncurkan satelit itu dari pulau di sebelah timur.", en: "They launched that satellite from an island to the east." }, accept: ["to fire off into the air", "to set a rocket on its way", "to put into the sky"], drill: { jp: "Mereka meluncurkan satelit dari pulau itu", en: "They launched the satellite from that island" }, hint: "muh-loon-koor-KAHN, from luncur, to slide or shoot forward. Used of a rocket, a ship down a slipway, and of a company launching a product — meluncurkan buku baru, to launch a new book." },
        { id: "id-u116l2-peluncuran", type: "vocab", front: "peluncuran", reading: "peluncuran", meaning: "the launching of a craft", example: { jp: "Peluncuran itu harus tunggu sampai angin lebih tenang.", en: "The launch has to wait until the wind is calmer." }, accept: ["the firing of a rocket", "the event of sending a craft up", "a lift-off as an occasion"], drill: { jp: "Peluncuran itu harus tunggu sampai angin tenang", en: "The launch has to wait until the wind is calm" }, hint: "puh-loon-COO-ran — the second card off luncur, the event rather than the act. The pair works the way kerja and pekerjaan do: one is what you do, one is the thing itself." },
      ],
    },
    {
      id: "id-u116l3",
      unit: 116,
      lesson: 3,
      title: "Roket, satelit, dan antariksa",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Read an Indonesian news story about a rocket launch or a satellite and follow what is going where, including why it stays up.",
      items: [
        { id: "id-u116l3-roket", type: "vocab", front: "roket", reading: "roket", meaning: "a launch vehicle for space", example: { jp: "Roket itu rusak di udara sebelum sampai ke atas.", en: "That rocket broke up in the air before reaching the top." }, accept: ["a space rocket", "a craft that burns fuel to climb", "a vehicle that is fired upward"], drill: { jp: "Roket itu rusak di udara sebelum sampai atas", en: "That rocket broke up in the air before reaching the top" }, hint: "RO-ket. The English word ROCKET, deliberately not used as the gloss — see the hint on pilot for why. Also the Indonesian name for the firework kind, and roket air is the water-bottle rocket every Indonesian schoolchild builds." },
        { id: "id-u116l3-antariksa", type: "vocab", front: "antariksa", reading: "antariksa", meaning: "outer space", example: { jp: "Di antariksa tidak ada udara, jadi tidak ada bunyi.", en: "In outer space there is no air, so there is no sound." }, accept: ["the void beyond the sky", "space beyond the atmosphere", "the emptiness past the air"], drill: { jp: "Di antariksa tidak ada udara dan bunyi", en: "In outer space there is no air and no sound" }, hint: "an-ta-REEK-sa, from Sanskrit antar plus iksa, roughly the space between. The formal word, and the one in Indonesia's space agency name. Everyday speech also says luar angkasa, outside the sky." },
        { id: "id-u116l3-astronot", type: "vocab", front: "astronot", reading: "astronot", meaning: "someone who travels in space", example: { jp: "Astronot itu ada di atas sana hampir satu tahun.", en: "That astronaut was up there for almost a year." }, accept: ["a space traveller", "a crew member on a spacecraft", "a person who goes into orbit"], drill: { jp: "Astronot itu ada di atas sana satu tahun", en: "That astronaut was up there for a year" }, hint: "as-tro-NOHT — note the Indonesian spelling, with o and no final e. This is an ASTRONAUT, and the English spelling astronaut is NOT the front for exactly that reason. Indonesian also has antariksawan, built from antariksa, which is the formal native alternative." },
        { id: "id-u116l3-satelit", type: "vocab", front: "satelit", reading: "satelit", meaning: "a craft put into orbit", example: { jp: "Satelit itu dipakai untuk sinyal ponsel di pulau jauh.", en: "That satellite is used for mobile signal on distant islands." }, accept: ["an orbiting craft", "a man-made moon", "a relay craft above the earth"], drill: { jp: "Satelit itu dipakai untuk sinyal ponsel di pulau", en: "That satellite is used for mobile signal on islands" }, hint: "sa-tuh-LEET. A SATELLITE — the English word stays in this hint, not in the gloss. For an archipelago this matters practically: satellite signal is how the outer islands are connected at all." },
        { id: "id-u116l3-mengorbit", type: "vocab", front: "mengorbit", reading: "mengorbit", meaning: "to go round a planet", example: { jp: "Satelit itu mengorbit bumi beberapa kali setiap hari.", en: "That satellite goes round the earth several times a day." }, accept: ["to circle a body in space", "to travel a closed path in space", "to move around in orbit"], drill: { jp: "Satelit itu mengorbit bumi beberapa kali", en: "That satellite orbits the earth several times" }, hint: "muh-ngor-BEET — meng- on the borrowed noun orbit, which is how Indonesian verbs a loanword. The bare noun orbit is NOT taught as its own card: it is the stem of this one, and carding both would be one word twice." },
        { id: "id-u116l3-gravitasi", type: "vocab", front: "gravitasi", reading: "gravitasi", meaning: "the pull that keeps us on the ground", example: { jp: "Karena gravitasi, semua barang jatuh ke bawah.", en: "Because of gravity, everything falls downward." }, accept: ["the force that makes things fall", "the earth's downward pull", "the attraction of a large body"], drill: { jp: "Karena gravitasi semua barang jatuh ke bawah", en: "Because of gravity everything falls downward" }, hint: "gra-vee-TA-see. This is GRAVITY. Described rather than named in the gloss, for the same reason as the other loanwords in this unit. Indonesian also says gaya tarik bumi, the earth's pulling force, which is the plainer way to say it." },
      ],
    },
    {
      id: "id-u116l4",
      unit: 116,
      lesson: 4,
      title: "Planet, komet, dan gerhana",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about the sky beyond the moon — planets, the solar system, a comet, an eclipse — and say what you would look through to see it.",
      items: [
        { id: "id-u116l4-planet", type: "vocab", front: "planet", reading: "planet", meaning: "a world that goes around a star", example: { jp: "Bumi adalah planet yang paling dekat dengan kita.", en: "The earth is the world closest to us." }, accept: ["a body orbiting a star", "one of the worlds in space", "a large body circling a sun"], drill: { jp: "Bumi adalah planet yang paling dekat", en: "The earth is the nearest world" }, hint: "PLA-net. This is a PLANET. The gloss describes it instead of naming it, because the front and the English word are letter-for-letter identical and a card like that can be answered by copying the prompt." },
        { id: "id-u116l4-tatasurya", type: "vocab", front: "tata surya", reading: "tatasurya", meaning: "the sun and its planets", example: { jp: "Ada delapan planet di tata surya kita.", en: "There are eight planets in our solar system." }, accept: ["our star system", "the family of worlds around our sun", "the sun's system of planets"], drill: { jp: "Ada delapan planet di tata surya kita", en: "There are eight planets in our solar system" }, hint: "TA-ta SOOR-ya — tata, an arrangement, plus surya, the Sanskrit word for the sun. A compound Indonesian built itself rather than borrowing, and the everyday matahari sits beside it quite happily." },
        { id: "id-u116l4-komet", type: "vocab", front: "komet", reading: "komet", meaning: "an icy body with a tail", example: { jp: "Komet itu bisa dilihat dengan mata sendiri selama beberapa malam.", en: "That comet could be seen with the naked eye for several nights." }, accept: ["a visitor from the outer system", "a bright object in the sky with a long tail", "an icy wanderer in space"], drill: { jp: "Komet itu bisa dilihat selama beberapa malam", en: "That comet could be seen for several nights" }, hint: "KO-met. A COMET, described not named for the usual reason. Indonesian folk name: bintang berekor, the star with a tail, and ekor is the animal tail you already know." },
        { id: "id-u116l4-gerhana", type: "vocab", front: "gerhana", reading: "gerhana", meaning: "an eclipse", example: { jp: "Banyak orang keluar untuk melihat gerhana bulan itu.", en: "Many people went outside to watch that lunar eclipse." }, accept: ["when one body hides another", "the darkening of the sun or moon", "a blocking of the sun or moon"], drill: { jp: "Banyak orang keluar untuk melihat gerhana bulan", en: "Many people went outside to watch the lunar eclipse" }, hint: "ger-HA-na, from Sanskrit. Gerhana bulan is a lunar eclipse, gerhana matahari a solar one — both built on words you have known since early on. Indonesia sits under more total eclipses than almost anywhere, and shalat gerhana is a prayer held for them." },
        { id: "id-u116l4-teleskop", type: "vocab", front: "teleskop", reading: "teleskop", meaning: "an instrument for seeing far objects", example: { jp: "Dengan teleskop itu mereka bisa melihat gunung di bulan.", en: "With that telescope they can see mountains on the moon." }, accept: ["a stargazing instrument", "a long viewing tube", "a device that makes distant things look near"], drill: { jp: "Dengan teleskop itu mereka bisa melihat bulan", en: "With that telescope they can see the moon" }, hint: "tuh-les-KOHP. A TELESCOPE. Indonesia's observatory is Bosscha, in the hills above Bandung, and it is where most Indonesians who have looked through one did it. The handheld kind is a teropong." },
        { id: "id-u116l4-antariksawan", type: "vocab", front: "antariksawan", reading: "antariksawan", meaning: "a person trained for spaceflight", example: { jp: "Indonesia belum punya antariksawan sendiri sampai sekarang.", en: "Indonesia does not have its own spacefarer even now." }, accept: ["a spacefarer", "a trained space crew member", "one who is prepared to fly into space"], drill: { jp: "Indonesia belum punya antariksawan sendiri sekarang", en: "Indonesia does not have its own spacefarer now" }, hint: "an-ta-reek-sa-WAHN — antariksa plus -wan, the suffix that makes a professional, the same one in ilmuwan, a scientist. The native formal twin of astronot, which you met earlier in this unit: astronot is who you say, antariksawan is what the newspaper writes." },
      ],
    },
  ],
};
