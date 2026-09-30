// ID Unit 42 — Listrik dan mesin ("Electricity and machines") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 3 (u41–u50). unit1.js's 12 conventions and unit21.js's 10 A2
// conventions BIND this file.
//
// RETITLED AND RETHEMED from "Vocabulary 3 (A2)" — a slot title that names no
// subject, and one `lint.js` hard-errors on once a lesson unlocks.
//
// THE HOLE, MEASURED against all 720 merged cards: Indonesian had **no word for
// electricity, a machine, an engine, a tool, a cable, a battery, a button, or for
// switching anything on or off.** A1's u17 furnished a house down to `sabun` and
// `lampu` and never said how the lamp is powered. This is the single largest
// untouched domain in the corpus and it takes two units (u42 here, u43 for the
// digital half).
//
// ⚠️ THE ONE WORD FROM BLOCK 1's RESERVED LIST: `mati` ("dead, of a light or
// engine"). Taken here because that is exactly the lesson it belongs in.
//
// ⚠️ THE me-/BARE VALENCY PAIR, AND IT IS SPLIT ACROSS LESSONS ON PURPOSE (A2
// convention A6: "the me-/ber- valency pair is the one that MUST be carded
// twice… different lessons, and each hint names the other"):
//     `mati` (l1 — the lamp goes out by itself)
//     `mematikan` (l2 — you switch the lamp off)
//   Drill safety verified through the real router: "mematikan" contains "mati" at
//   index 2 but it is preceded by `e`, a letter, so findWholeWord does NOT match.
//   Neither card can steal the other's blank, and each drill carries its own form.
//
// AFFIX ROOTS STRIPPED AND GREPPED BY HAND (convention 3 — `check-front.mjs`'s
// LEXEME verdict fails open for Indonesian):
//   menyalakan  → nyala    root not taught.
//   mematikan   → mati     ⚠️ carded in l1 of this unit. See above.
//   menekan     → tekan    root not taught.
//   berfungsi   → fungsi   root not taught.
//   memutar     → putar    root not taught.
//   menarik     → tarik    root not taught.
//   mendorong   → dorong   root not taught.
//   mengukur    → ukur     root not taught; `ukuran` (u14l4, size) is the other
//     card off it. Neither whole-word-contains the other. See A6.
//   memindahkan → pindah   root not taught.
//   kecepatan   → cepat    ⚠️ `cepat` IS taught ("fast"). This is a ke-…-an noun,
//     and the precedent is already in the corpus: `keadaan` (a situation) off
//     `ada`, and `kembalian` off `kembali`. "Fast" does not give you "speed" —
//     the learner has never been taught ke-…-an as a pattern (A1 convention 11
//     defers the affix system past me-/ber-/pe-/-an), so the derivation is not
//     readable off the parts. The hint is where ke-…-an gets named.
//     Drill-safe: "kecepatan" contains "cepat" at index 2, preceded by `e`.
//   listrik · mesin · alat · kabel · logam · baterai · tombol · bunyi · suara ·
//   otomatis · canggih · kuno · pabrik — all roots.
//
// ⛔ NOT CARDED, AND EACH FOR A NAMED REASON:
//   `modern`, `robot`, `video`, `digital`, `gas` — the front and the English gloss
//     are the SAME STRING, so the card is a copy task. This is block 1's `hotel` /
//     `bus` rule (A10) and it is measured, not guessed: `normalizeMeaning` strips a
//     leading a/an/the, so "a robot" reduces to exactly "robot".
//   `menghidupkan` (to switch on) — `menyalakan` already owns it and the two are
//     interchangeable for a lamp or a machine. Convention 3 forbids the second
//     card; named in `menyalakan`'s hint. (`hidup` itself is carded in u50 as
//     "alive", which is a different word.)
//   `memperbaiki` · `rusak` · `memasang` — already taught in u25.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT42 = {
  id: "id-u42",
  lang: "id",
  title: "Listrik dan mesin",
  order: 42,
  stage: "a2",
  lessons: [
    {
      id: "id-u42l1",
      unit: 42,
      lesson: 1,
      title: "Listrik dan alat",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name the power, the machines and the tools around a house or a workshop, and say when the power has gone.",
      items: [
        { id: "id-u42l1-listrik", type: "vocab", front: "listrik", reading: "listrik", meaning: "electricity", example: { jp: "Di desa itu belum ada listrik.", en: "There is no electricity in that village yet." }, accept: ["electric power", "the mains", "an electric current"], drill: { jp: "Rumah baru itu belum punya listrik", en: "That new house does not have electricity yet" }, hint: "LEES-treek. One word for the current, the supply and the bill alike: bayar listrik is to pay the electricity. Listrik mati is a power cut, and you will hear it constantly. The adjective is the same word — alat listrik, an electrical appliance." },
        { id: "id-u42l1-mesin", type: "vocab", front: "mesin", reading: "mesin", meaning: "a machine", example: { jp: "Mesin di kantor itu sangat besar.", en: "The machine in that office is very big." }, accept: ["an engine", "a motor", "a mechanical device"], drill: { jp: "Mesin ini berjalan sejak pagi", en: "This machine has been running since morning" }, hint: "muh-SEEN. It covers both a machine and the engine inside one — mesin mobil is a car engine, mesin cuci a washing machine. Borrowed through Dutch, so the stress lands on the second syllable, not the first as in English machine." },
        { id: "id-u42l1-alat", type: "vocab", front: "alat", reading: "alat", meaning: "a tool", example: { jp: "Ayah saya punya banyak alat di rumah.", en: "My father has a lot of tools at home." }, accept: ["an implement", "a piece of equipment", "an instrument"], drill: { jp: "Alat itu ada di dalam kotak", en: "That tool is inside the box" }, hint: "AH-lat. Deliberately broad: anything you use to do a job, from a hammer to a stethoscope to a musical instrument (alat musik). Peralatan is the whole kit of them. A mesin runs on its own; an alat is worked by a person." },
        { id: "id-u42l1-kabel", type: "vocab", front: "kabel", reading: "kabel", meaning: "a cable", example: { jp: "Kabel itu panjang dan hitam.", en: "That cable is long and black." }, accept: ["a wire", "a lead", "a flex"], drill: { jp: "Ada kabel hitam di bawah meja", en: "There is a black cable under the table" }, hint: "KAH-buhl, second e swallowed — not cable with a long a. Any electrical lead, from a phone charger to a power line. Dutch again, which is why the spelling has a k where English has a c." },
        { id: "id-u42l1-arus", type: "vocab", front: "arus", reading: "arus", meaning: "a flow", example: { jp: "Arus listrik di rumah ini tidak kuat.", en: "The electric current in this house is not strong." }, accept: ["a current in a wire", "a stream of power", "a flowing movement"], drill: { jp: "Arus itu masuk melalui kabel besar", en: "That current comes in through a big cable" }, hint: "AH-roos. A FLOW — of electricity, of water in a river, of traffic on a road. Arus listrik is the current proper. ⚠️ It hides inside harus, must, and seharusnya, which you both know, but it is unrelated to either: listen for it standing alone after arus or before listrik." },
        { id: "id-u42l1-logam", type: "vocab", front: "logam", reading: "logam", meaning: "metal", example: { jp: "Kursi di kantor itu dari logam.", en: "The chairs in that office are made of metal." }, accept: ["a metal", "metalwork", "made of metal"], drill: { jp: "Alat baru itu dari logam kuat", en: "That new tool is made of strong metal" }, hint: "LOH-gam. The material in general — dari logam is the everyday made of metal. Specific metals have their own words, and you meet emas, gold, and besi, iron, later in this band." },
      ],
    },
    {
      id: "id-u42l2",
      unit: 42,
      lesson: 2,
      title: "Menyalakan dan mematikan",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Switch a machine on and off, press the right button, and say whether the thing is working at all.",
      items: [
        { id: "id-u42l2-menyalakan", type: "vocab", front: "menyalakan", reading: "menyalakan", meaning: "to switch on", example: { jp: "Saya menyalakan lampu di kamar.", en: "I switched on the lamp in the room." }, accept: ["to power up", "to set alight", "to start up"], drill: { jp: "Ibu menyalakan mesin di dapur", en: "Mother switches on the machine in the kitchen" }, hint: "muh-nya-LAH-kan — ny is one sound, from unit 1. Built on nyala, a flame, so it began as to set alight and now covers a lamp, a machine, a phone and a fire alike. Menghidupkan is an equally common twin and means the same thing for a machine; either is correct." },
        { id: "id-u42l2-mematikan", type: "vocab", front: "mematikan", reading: "mematikan", meaning: "to switch off", example: { jp: "Jangan lupa mematikan lampu.", en: "Do not forget to switch off the lamp." }, accept: ["to turn off", "to shut down", "to kill the power to"], drill: { jp: "Dia mematikan mesin sebelum pulang", en: "He switches off the engine before going home" }, hint: "muh-mah-TEE-kan. The one you DO, built straight on mati from the last lesson: mati is the lamp going out by itself, mematikan is you switching it off. ⚠️ English uses turn off for both and Indonesian does not — saying lampu mematikan would mean the lamp switches something else off." },
        { id: "id-u42l2-baterai", type: "vocab", front: "baterai", reading: "baterai", meaning: "a battery", example: { jp: "Baterai di alat ini sudah mati.", en: "The battery in this device is dead." }, accept: ["a cell", "the power pack", "a dry cell"], drill: { jp: "Baterai baru itu mahal sekali", en: "That new battery is very expensive" }, hint: "bah-tuh-RAI, the last two letters sliding into one sound like English eye. Note the spelling ends -ai, not -y. Baterai habis, literally the battery is used up, is how you say it has run out." },
        { id: "id-u42l2-tombol", type: "vocab", front: "tombol", reading: "tombol", meaning: "a button", example: { jp: "Ada tombol merah di mesin itu.", en: "There is a red button on that machine." }, accept: ["a key on a device", "a switch", "a push-button"], drill: { jp: "Tombol ini untuk menyalakan lampu", en: "This button is for switching on the lamp" }, hint: "TOM-bol. A button you PRESS on a machine — never a button on a shirt, which is kancing. It is also a key on a keyboard and a button on a screen, so it will carry over to the next unit." },
        { id: "id-u42l2-menekan", type: "vocab", front: "menekan", reading: "menekan", meaning: "to press down", example: { jp: "Saya menekan tombol itu dua kali.", en: "I pressed that button twice." }, accept: ["to push down on", "to apply pressure", "to hold down"], drill: { jp: "Dia menekan tombol merah dengan cepat", en: "He presses the red button quickly" }, hint: "muh-nuh-KAHN. Pressure straight DOWN onto something — a button, a wound, a pedal. Mendorong, two cards further on, is pushing something AWAY from you. Menekan also carries the figurative to pressure a person, exactly as English does." },
        { id: "id-u42l2-berfungsi", type: "vocab", front: "berfungsi", reading: "berfungsi", meaning: "to work properly", example: { jp: "Mesin lama itu masih berfungsi.", en: "That old machine still works." }, accept: ["to function", "to be in working order", "to do its job"], drill: { jp: "Alat ini tidak berfungsi sejak kemarin", en: "This tool has not worked since yesterday" }, hint: "buhr-FOONG-see. Said of a THING doing what it was built for — bekerja is a person having a job, berfungsi is a device functioning. Tidak berfungsi is the polite it is out of order, milder than rusak, which means actually broken." },
      ],
    },
    {
      id: "id-u42l3",
      unit: 42,
      lesson: 3,
      title: "Bunyi dan gerak",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Describe what a machine does — the noise it makes, which way it turns, whether you pull or push it, and how fast it goes.",
      items: [
        { id: "id-u42l3-bunyi", type: "vocab", front: "bunyi", reading: "bunyi", meaning: "a sound", example: { jp: "Ada bunyi keras di luar rumah.", en: "There is a loud sound outside the house." }, accept: ["a noise", "the noise a thing makes", "an audible signal"], drill: { jp: "Bunyi mesin itu sangat keras", en: "The noise of that machine is very loud" }, hint: "BOO-nyee — ny one sound. The noise a THING makes: a machine, a bell, a phone, a letter of the alphabet. Berbunyi is the verb, to make that noise. The next card, suara, is the one for a PERSON." },
        { id: "id-u42l3-roda", type: "vocab", front: "roda", reading: "roda", meaning: "a wheel", example: { jp: "Roda mobil itu berputar sangat cepat.", en: "The wheel of that car spins very fast." }, accept: ["a wheel on a vehicle", "a round turning part", "a cog"], drill: { jp: "Ada empat roda di bawah mobil itu", en: "There are four wheels under that car" }, hint: "ROH-da. Every wheel — on a car, a bicycle, a machine, a trolley. Roda dua and roda empat, two-wheeler and four-wheeler, are how Indonesians classify vehicles on a road sign. Figuratively roda kehidupan is the wheel of life, which turns whether you like it or not." },
        { id: "id-u42l3-memutar", type: "vocab", front: "memutar", reading: "memutar", meaning: "to rotate", example: { jp: "Saya memutar tombol itu ke kanan.", en: "I turned that knob to the right." }, accept: ["to spin", "to twist round", "to play a recording"], drill: { jp: "Dia memutar kunci di pintu depan", en: "He turns the key in the front door" }, hint: "muh-MOO-tar. Turning something round its own centre — a key, a knob, a wheel. Belok, which you know, is a VEHICLE turning a corner; memutar is rotation. It is also what you do to a song or a film: memutar lagu, to play a song." },
        { id: "id-u42l3-getaran", type: "vocab", front: "getaran", reading: "getaran", meaning: "a vibration", example: { jp: "Getaran mesin itu membuat lantai bergerak.", en: "The vibration of that machine makes the floor move." }, accept: ["a shaking", "a shudder", "a buzz you can feel"], drill: { jp: "Getaran itu membuat gelas di meja bergerak", en: "That vibration made the glass on the table move" }, hint: "guh-tah-RAHN. Off getar, to tremble. It covers a machine humming, a phone on silent, and the shaking of an earthquake — getaran gempa. A sound you HEAR is bunyi; a getaran is one you feel through the thing touching you." },
        { id: "id-u42l3-bising", type: "vocab", front: "bising", reading: "bising", meaning: "noisy", example: { jp: "Pabrik itu sangat bising pada siang hari.", en: "That factory is very noisy during the day." }, accept: ["full of noise", "loud and unpleasant", "din-filled"], drill: { jp: "Mesin bising itu ada di dalam kamar kecil", en: "That noisy machine is inside a small room" }, hint: "BEE-sing, ng one hum. Noise you do not want — traffic, machinery, a crowd. Keras describes a loud sound neutrally; bising says it is bothering you. Kebisingan is the noise itself, the word on a public-health sign." },
        { id: "id-u42l3-kecepatan", type: "vocab", front: "kecepatan", reading: "kecepatan", meaning: "speed", example: { jp: "Kecepatan kereta ini sangat tinggi.", en: "The speed of this train is very high." }, accept: ["how fast a thing goes", "the rate of something", "velocity"], drill: { jp: "Kecepatan mobil itu terlalu tinggi", en: "That car's speed is too high" }, hint: "kuh-chuh-PAH-tan — remember c is CH. Here is a pattern worth having: ke- around a word plus -an turns a quality into the NOUN for it. Cepat is fast, kecepatan is speed; you have already met keadaan, a situation, built the same way on ada." },
      ],
    },
    {
      id: "id-u42l4",
      unit: 42,
      lesson: 4,
      title: "Mesin lama, mesin baru",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say whether a machine is modern or dated, measure it, shift it somewhere else, and name the place it was built.",
      items: [
        { id: "id-u42l4-otomatis", type: "vocab", front: "otomatis", reading: "otomatis", meaning: "automatic", example: { jp: "Pintu toko itu otomatis.", en: "The door of that shop is automatic." }, accept: ["self-acting", "working by itself", "done by the machine"], drill: { jp: "Mesin baru ini otomatis dan cepat", en: "This new machine is automatic and fast" }, hint: "oh-toh-MAH-tees. Note the o at the start where English has au, and that it ends -is, the standard Indonesian ending for adjectives borrowed from Dutch. It doubles as the adverb: pintu itu buka otomatis, the door opens automatically." },
        { id: "id-u42l4-canggih", type: "vocab", front: "canggih", reading: "canggih", meaning: "high-tech", example: { jp: "Alat itu canggih dan mahal.", en: "That device is high-tech and expensive." }, accept: ["sophisticated", "advanced", "state of the art"], drill: { jp: "Mesin canggih itu bekerja tanpa orang", en: "That high-tech machine works without a person" }, hint: "CHAHNG-gheeh — c is CH and ngg is the hum plus a hard g, both unit-1 traps in one short word. A genuinely Indonesian word, not a borrowing, and it is the everyday compliment for anything technically clever. The opposite in this lesson is kuno." },
        { id: "id-u42l4-kuno", type: "vocab", front: "kuno", reading: "kuno", meaning: "old-fashioned", example: { jp: "Mesin di pabrik itu sudah kuno.", en: "The machines in that factory are already old-fashioned." }, accept: ["antiquated", "from an earlier age", "outdated"], drill: { jp: "Alat kuno itu masih berfungsi", en: "That old-fashioned tool still works" }, hint: "KOO-noh. Lama means old in the sense of long-standing and is neutral; kuno means old in STYLE and usually carries a mild dig — unless you are talking about history, where it simply means ancient: kota kuno, an ancient city." },
        { id: "id-u42l4-bekas", type: "vocab", front: "bekas", reading: "bekas", meaning: "second-hand", example: { jp: "Ayah saya membeli mesin bekas karena lebih murah.", en: "My father bought a second-hand machine because it was cheaper." }, accept: ["used", "previously owned", "not new"], drill: { jp: "Mobil bekas itu masih berfungsi dengan baik", en: "That second-hand car still works properly" }, hint: "BUH-kas, first e swallowed. It follows the noun: barang bekas, second-hand goods; mobil bekas, a used car. The root sense is a TRACE left behind, so it also means former — bekas guru saya, my former teacher — and a mark: bekas luka is a scar." },
        { id: "id-u42l4-memindahkan", type: "vocab", front: "memindahkan", reading: "memindahkan", meaning: "to move something", example: { jp: "Kami memindahkan mesin itu ke kamar lain.", en: "We moved that machine to another room." }, accept: ["to carry elsewhere", "to relocate", "to transfer"], drill: { jp: "Saya memindahkan kursi ke pinggir kamar", en: "I move the chair to the edge of the room" }, hint: "muh-meen-DAH-kan. From pindah, to move house — so this is moving a THING from one place to another, and it always wants a ke plus the destination. Menaruh, which you know, is putting something down; this is taking it somewhere else." },
        { id: "id-u42l4-pabrik", type: "vocab", front: "pabrik", reading: "pabrik", meaning: "a factory", example: { jp: "Ayah saya bekerja di pabrik.", en: "My father works at a factory." }, accept: ["a works", "a manufacturing site", "an industrial plant"], drill: { jp: "Pabrik itu besar dan sangat ramai", en: "That factory is big and very busy" }, hint: "PAH-breek. Dutch fabriek with the f softened to p — a very common sound swap in older borrowings, and the reason it does not look like factory. Pabrik gula is a sugar mill; buatan pabrik means factory-made." },
      ],
    },
  ],
};
