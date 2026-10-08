// ID Unit 117 — Zat, aliran, dan wujud ("Substances, flows and states of matter") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u114–u126). Conventions: unit1.js §1–12, unit21.js, unit51.js
// §B1–B12, and unit114.js §C1–C10. Read unit114.js's header before editing this.
//
// THE HOLE THIS FILLS. The course taught `air` (u6), `menyiram` (u84),
// `membeku` (u76), `mencair` (u76), `menyusut` (u59), `kabut` and `asap` (u46) —
// and then stopped. A learner could not say a tap drips, a roof leaks, a pot has
// boiled over, milk has gone lumpy, or that something is too watery. These are
// kitchen and household verbs, not laboratory ones, and the absence showed.
//
// THE BOUNDARY WITH u94, WHICH IS BLOCK 1's AND MUST BE RESPECTED:
//   u94 owns CHEMISTRY AS A SCIENCE — `senyawa` `molekul` `atom` `reaksi`
//   `kimia`. u117 owns THE EVERYDAY PHYSICS of a liquid in a kitchen or a leak
//   in a roof. **`zat` is THIS unit's**, by the crew lead's explicit allocation,
//   and it is glossed as the plain word for a substance you can point at, not as
//   a chemical term. Nothing in this unit names a compound or an element.
//
// ⚠️⚠️ `menguap` IS A CROSS-BLOCK CLASH AND IT IS SETTLED HERE.
// The word is a genuine homograph with two unrelated senses:
//   • menguap = to EVAPORATE (from uap, vapour)   <- this unit
//   • menguap = to YAWN      (from kuap)          <- block 2's u113 list
// ONE FRONT, ONE HOME. The crew lead's allocation gives it to u117 for
// evaporation, and that is what ships. The yawning sense is NOT taught anywhere
// and is named in this card's hint so the learner is not ambushed by it. BLOCK 2
// MUST BE TOLD at merge: if u113 also cards it, the duplicate-front validator
// will error and one of the two has to go — and by allocation it is not this one.
//
// SIX GLOSS COLLISIONS MEASURED (gloss-taken.mjs id), every one before a card
// was written, and every one of them an obvious first-choice gloss:
//   "to flow"     → arus@u42       so `mengalir`  is "to run as a liquid along a channel"
//   "to boil"     → merebus@u34    so `mendidih`  is "to come to the boil by itself"
//   "a liquid"    → air@u6         so `cairan`    is "something in liquid form"
//   "steam"       → mengukus@u34   so `uap`       is "vapour"
//   "a substance" → substansi@u58  so `zat`       is "any material a thing is made of"
//   "thick"       → tebal@u30      so `kental`    is "sticky and slow to pour"
//
// NEAR-SYNONYMS SEPARATED BY GLOSS, NOT BY HOPE (§C2–C3):
//   `bocor` (to leak, through a hole) / `merembes` (to seep, through a material)
//   / `menyusup` (to slip in through a gap). Three ways water gets where it
//   should not be, and Indonesian distinguishes all three.
//   `mengembang` (to swell, as dough) / `memuai` (to expand WITH HEAT). The
//   second is the physics word; the first is what bread does.
//   `serbuk` (fine dust or pollen) / `bubuk` (ground powder, as of coffee).
//   `kental` (slow to pour) / `encer` (too thin). An antonym pair, carded as one.
//
// FRONTS REFUSED, NAMED NOT BURIED:
//   `lembab` `menggenang` `rembesan` `mengguyur` `semprot` `menyemprot`
//   `mengasapi` — all probed free, all cut for space at 24. `lembab` (damp) is
//   the strongest refill and `lembap` is the official spelling of it, which is
//   worth knowing before anyone adds it.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT117 = {
  id: "id-u117",
  lang: "id",
  title: "Zat, aliran, dan wujud",
  order: 117,
  stage: "b2",
  lessons: [
    {
      id: "id-u117l1",
      unit: 117,
      lesson: 1,
      title: "Mengalir, menetes, dan tumpah",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Say precisely what a liquid is doing — running, dripping, spilling, splashing — instead of only that there is water.",
      items: [
        { id: "id-u117l1-mengalir", type: "vocab", front: "mengalir", reading: "mengalir", meaning: "to run as a liquid along a channel", example: { jp: "Air dari gunung itu mengalir ke sungai di bawah.", en: "Water from that mountain runs down to the river below." }, accept: ["to move as water does", "to stream along", "to course along a channel"], drill: { jp: "Air dari gunung itu mengalir ke sungai", en: "Water from that mountain runs to the river" }, hint: "muh-nga-LEER. ⚠️ Not glossed \"to flow\": arus, a current, already owns that gloss in this course. Used of water, traffic, money and electricity — listrik mengalir is the power is on." },
        { id: "id-u117l1-menetes", type: "vocab", front: "menetes", reading: "menetes", meaning: "to drip", example: { jp: "Air menetes dari atap sejak hujan tadi malam.", en: "Water has been dripping from the roof since last night's rain." }, accept: ["to fall in drops", "to come down drop by drop", "to fall one drop at a time"], drill: { jp: "Air menetes dari atap sejak tadi malam", en: "Water has been dripping from the roof since last night" }, hint: "muh-NUH-tes, from tetes, a drop. One drop at a time, slowly — a tap, a roof, a drip line in a hospital. Setetes air is a single drop of water." },
        { id: "id-u117l1-tumpah", type: "vocab", front: "tumpah", reading: "tumpah", meaning: "to spill", example: { jp: "Kopi itu tumpah ke meja karena anak kecil berlari.", en: "That coffee spilled onto the table because a small child ran past." }, accept: ["to tip over and run out", "to be knocked over and lost", "to go over the edge of a container"], drill: { jp: "Kopi itu tumpah ke meja karena anak kecil", en: "That coffee spilled onto the table because of a child" }, hint: "TOOM-pah. The liquid is the subject, not the person: air tumpah, the water spilled, is what you say even if you knocked it. Tumpah darah, spilled blood, means one's native soil." },
        { id: "id-u117l1-memercik", type: "vocab", front: "memercik", reading: "memercik", meaning: "to splash", example: { jp: "Air kotor memercik ke kaki saya waktu mobil melewati saya.", en: "Dirty water splashed onto my legs as the car went past." }, accept: ["to fly up in drops", "to throw off droplets", "to spatter outward"], drill: { jp: "Air kotor memercik ke kaki saya sekarang", en: "Dirty water splashes onto my legs now" }, hint: "muh-mer-CHEEK — c is CH. Small drops flying off, not a stream. In the rainy season this is the word for every motorbike ride. The root percik also gives memercikkan, to sprinkle something deliberately." },
        { id: "id-u117l1-menyerap", type: "vocab", front: "menyerap", reading: "menyerap", meaning: "to absorb", example: { jp: "Tanah di kebun itu cepat menyerap air hujan.", en: "The soil in that garden absorbs rainwater quickly." }, accept: ["to soak up", "to draw liquid in", "to take in and hold"], drill: { jp: "Tanah di kebun itu cepat menyerap air", en: "The soil in that garden absorbs water quickly" }, hint: "muh-nyuh-RAHP — ny is one sound. Of soil, cloth, a sponge. Also of an economy absorbing workers, and of a student absorbing a lesson: menyerap pelajaran, which is how teachers talk." },
        { id: "id-u117l1-genangan", type: "vocab", front: "genangan", reading: "genangan", meaning: "a pool of standing water", example: { jp: "Ada genangan di jalan itu setiap kali hujan besar.", en: "There is standing water on that road every time it rains hard." }, accept: ["water lying on a surface", "a puddle left behind", "water that has not drained away"], drill: { jp: "Ada genangan di jalan itu setiap hujan", en: "There is standing water on that road every rain" }, hint: "guh-NANG-an, from genang, to stand as water. Not quite a puddle and not quite a flood — it is the word Jakarta's traffic reports use, because genangan is what stops a motorbike without being called banjir." },
      ],
    },
    {
      id: "id-u117l2",
      unit: 117,
      lesson: 2,
      title: "Bocor, merembes, dan menyusup",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Report a leak accurately — through a hole, through a wall, or in through a gap — which are three different words and three different repairs.",
      items: [
        { id: "id-u117l2-bocor", type: "vocab", front: "bocor", reading: "bocor", meaning: "to leak", example: { jp: "Atap kamar itu bocor, jadi kami menaruh ember di bawah.", en: "That room's roof leaks, so we put a bucket underneath." }, accept: ["to let liquid through a hole", "to have a hole liquid comes out of", "to be holed and losing liquid"], drill: { jp: "Atap kamar itu bocor jadi kami menaruh ember", en: "That room's roof leaks so we put a bucket" }, hint: "BO-chor — c is CH. Through an actual hole: a roof, a tyre, a pipe. Also used of secrets and exam papers: bocor means leaked, and soal bocor is a leaked exam question, which is a regular Indonesian news story." },
        { id: "id-u117l2-merembes", type: "vocab", front: "merembes", reading: "merembes", meaning: "to seep through", example: { jp: "Air merembes di dinding itu dan membuat kamar basah.", en: "Water seeps through that wall and makes the room damp." }, accept: ["to soak slowly through a wall", "to work through a material", "to pass slowly through something solid"], drill: { jp: "Air merembes di dinding dan membuat basah", en: "Water seeps through the wall and makes it damp" }, hint: "muh-rem-BES. No hole needed — this is water coming through the material itself, which is why it is the word for a damp wall in the rainy season. The repair is different from a bocor, and so is the word." },
        { id: "id-u117l2-menyusup", type: "vocab", front: "menyusup", reading: "menyusup", meaning: "to slip in through a gap", example: { jp: "Angin dingin menyusup di jendela yang tidak ditutup.", en: "Cold air slips in at a window that has not been shut." }, accept: ["to get in where it was not meant to", "to infiltrate", "to work its way inside unseen"], drill: { jp: "Angin dingin menyusup di jendela itu", en: "Cold air slips in through that window" }, hint: "muh-nyoo-SOOP. Of air, water, light — and of a person: menyusup is the standard word for infiltrating an organisation. The image is the same either way, something getting in through a gap nobody watched." },
        { id: "id-u117l2-larut", type: "vocab", front: "larut", reading: "larut", meaning: "to dissolve", example: { jp: "Gula itu cepat larut di air panas.", en: "That sugar dissolves quickly in hot water." }, accept: ["to melt away into liquid", "to break up in water", "to disappear into a liquid"], drill: { jp: "Gula itu cepat larut di air panas", en: "That sugar dissolves quickly in hot water" }, hint: "LA-root. ⚠️ Also an adjective for deep in the night: larut malam is the small hours, and that sense is the commoner one in speech. Both come from the same idea of being absorbed into something." },
        { id: "id-u117l2-mengendap", type: "vocab", front: "mengendap", reading: "mengendap", meaning: "to settle out", example: { jp: "Kalau air itu tidak bergerak, pasir halus akan mengendap.", en: "If that water does not move, fine sand will settle out." }, accept: ["to sink to the bottom as sediment", "to form a layer at the bottom", "to drop out of a liquid and lie still"], drill: { jp: "Kalau air tidak bergerak pasir akan mengendap", en: "If the water does not move sand will settle" }, hint: "muh-NGUN-dahp. The verb that makes the endapan you met in the mining unit. Used of coffee grounds, of silt, and of a feeling that has settled and stayed: rasa yang mengendap." },
        { id: "id-u117l2-mendidih", type: "vocab", front: "mendidih", reading: "mendidih", meaning: "to come to the boil by itself", example: { jp: "Air di tungku itu sudah mendidih sejak lima menit lalu.", en: "The water on that stove has been boiling since five minutes ago." }, accept: ["to bubble up at boiling point", "to reach boiling point", "to be boiling hot and bubbling"], drill: { jp: "Air di tungku itu sudah mendidih sekarang", en: "The water on that stove is boiling now" }, hint: "mun-DEE-dih. ⚠️ Not glossed \"to boil\": merebus, which you know, already owns that gloss — but the two are not the same verb. You merebus an egg, the water mendidih. One takes an object, the other does not. Also of anger: darahnya mendidih." },
      ],
    },
    {
      id: "id-u117l3",
      unit: 117,
      lesson: 3,
      title: "Menguap, mengembun, dan memuai",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe the change of state itself — water going into the air, coming back as dew, and metal growing with heat — in ordinary Indonesian.",
      items: [
        { id: "id-u117l3-menguap", type: "vocab", front: "menguap", reading: "menguap", meaning: "to evaporate", example: { jp: "Air di baju itu cepat menguap kalau ada angin.", en: "Water in that shirt evaporates quickly if there is wind." }, accept: ["to turn into vapour", "to dry off into the air", "to go off as vapour"], drill: { jp: "Air di baju itu cepat menguap kalau panas", en: "Water in that shirt evaporates quickly if it is hot" }, hint: "muh-NGOO-ahp — from uap, vapour. ⚠️ A TRUE HOMOGRAPH, and you need to be warned: menguap also means TO YAWN, from a different root entirely. The two are unrelated and the course teaches only the evaporation sense. Context separates them absolutely, since water does not get sleepy." },
        { id: "id-u117l3-uap", type: "vocab", front: "uap", reading: "uap", meaning: "vapour", example: { jp: "Uap dari air panas itu naik ke atas dan hilang.", en: "The vapour from that hot water rises and disappears." }, accept: ["the cloud that rises off hot water", "water in the form of a gas", "what hot water turns into"], drill: { jp: "Uap dari air panas itu naik ke atas", en: "The vapour from that hot water rises up" }, hint: "OO-ahp. ⚠️ Not glossed \"steam\": mengukus, to steam food, already owns that gloss. Kereta uap is a steam train, and kapal uap a steamer — both archaic and both still in the dictionary." },
        { id: "id-u117l3-mengembun", type: "vocab", front: "mengembun", reading: "mengembun", meaning: "to condense", example: { jp: "Kaca jendela mengembun waktu pagi masih dingin.", en: "The window glass condenses while the morning is still cold." }, accept: ["to form dew on a cold surface", "to turn from vapour to droplets", "to fog up with moisture"], drill: { jp: "Kaca jendela mengembun waktu pagi dingin", en: "The window glass fogs up while the morning is cold" }, hint: "muh-ngum-BOON, from embun, dew. The reverse of menguap, which you just met — and the pair is worth holding together, because they are the same water going two directions." },
        { id: "id-u117l3-memuai", type: "vocab", front: "memuai", reading: "memuai", meaning: "to expand when heated", example: { jp: "Besi memuai kalau panas, jadi jembatan harus ada tempat lebih.", en: "Iron expands when hot, so a bridge has to have extra space." }, accept: ["to grow bigger with heat", "to stretch from warmth", "to get larger as it warms"], drill: { jp: "Besi memuai kalau panas jadi harus ada tempat", en: "Iron expands when hot so there has to be space" }, hint: "muh-MOO-eye. Specifically the physics one, with heat — this is the word in every Indonesian school science book. It is NOT the same as mengembang, which you meet next and is what dough does." },
        { id: "id-u117l3-mengembang", type: "vocab", front: "mengembang", reading: "mengembang", meaning: "to swell up", example: { jp: "Tepung itu mengembang setelah satu jam di tempat hangat.", en: "That dough swells up after an hour in a warm place." }, accept: ["to rise as dough does", "to puff out", "to get bigger and fuller"], drill: { jp: "Tepung itu mengembang setelah satu jam saja", en: "That dough swells up after only an hour" }, hint: "muh-ngum-BANG, from kembang, to open out. Dough, a balloon, a sail, a flower opening. Against memuai: memuai is heat making metal longer, mengembang is something getting fuller. Indonesian keeps them apart and so should you." },
        { id: "id-u117l3-zat", type: "vocab", front: "zat", reading: "zat", meaning: "any material a thing is made of", example: { jp: "Ada zat di air itu yang membuat orang sakit.", en: "There is something in that water that makes people ill." }, accept: ["matter in general", "the stuff something consists of", "a material in the physical sense"], drill: { jp: "Ada zat di air itu yang membuat sakit", en: "There is something in that water that makes you ill" }, hint: "ZAHT — note the z, which Indonesian only has in Arabic borrowings, and this is one. ⚠️ Not glossed \"a substance\": substansi, which you met in the abstract sense, already owns that gloss. Zat is the concrete one — zat besi is dietary iron, zat gizi a nutrient." },
      ],
    },
    {
      id: "id-u117l4",
      unit: 117,
      lesson: 4,
      title: "Serbuk, gumpalan, kental, dan encer",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe the consistency of what is in front of you — powder, lumps, too thick, too thin — which is most of what a recipe or a complaint needs.",
      items: [
        { id: "id-u117l4-serbuk", type: "vocab", front: "serbuk", reading: "serbuk", meaning: "fine dust", example: { jp: "Serbuk kayu itu ada di lantai dan di meja.", en: "That fine wood dust is on the floor and on the table." }, accept: ["pollen or fine dust", "a powder of tiny grains", "very fine loose particles"], drill: { jp: "Serbuk kayu itu ada di lantai dan meja", en: "That wood dust is on the floor and the table" }, hint: "ser-BOOK. Finer than bubuk, which you meet next: serbuk is what floats, like sawdust or pollen. Serbuk bunga is pollen, and serbuk sari is the botanical term." },
        { id: "id-u117l4-bubuk", type: "vocab", front: "bubuk", reading: "bubuk", meaning: "ground powder", example: { jp: "Kopi bubuk lebih murah daripada kopi yang sudah jadi.", en: "Ground coffee is cheaper than coffee that is already made." }, accept: ["a powder like ground coffee", "something milled to a powder", "a granular powder for mixing"], drill: { jp: "Kopi bubuk lebih murah daripada kopi jadi", en: "Ground coffee is cheaper than ready-made coffee" }, hint: "BOO-book. The kitchen powder: kopi bubuk, susu bubuk, cabai bubuk. Ground on purpose, to be used. Against serbuk, which is dust that happens to you — the distinction is intention, and Indonesians keep it." },
        { id: "id-u117l4-cairan", type: "vocab", front: "cairan", reading: "cairan", meaning: "something in liquid form", example: { jp: "Cairan di botol itu bukan air, jadi jangan diminum.", en: "The fluid in that bottle is not water, so do not drink it." }, accept: ["a fluid", "a liquid substance", "anything that pours"], drill: { jp: "Cairan di botol itu bukan air biasa", en: "The fluid in that bottle is not ordinary water" }, hint: "chai-RAN — c is CH. From cair, liquid, the root of mencair, to melt, which you already know. ⚠️ Not glossed \"a liquid\": air itself already owns that gloss. Cairan is the general word a label or a doctor uses." },
        { id: "id-u117l4-gumpalan", type: "vocab", front: "gumpalan", reading: "gumpalan", meaning: "a clot", example: { jp: "Ada gumpalan di susu itu, jadi sudah tidak bisa dipakai.", en: "There are lumps in that milk, so it can no longer be used." }, accept: ["a solid lump in a liquid", "a congealed mass", "a clump that has formed in a fluid"], drill: { jp: "Ada gumpalan di susu itu dan tidak enak", en: "There are lumps in that milk and it is not nice" }, hint: "goom-PA-lan, from gumpal. A lump that has formed where there should be smoothness — in milk, in blood, in cement, in cloud. Gumpalan darah is a blood clot and is the medical term." },
        { id: "id-u117l4-kental", type: "vocab", front: "kental", reading: "kental", meaning: "sticky and slow to pour", example: { jp: "Susu kental itu terlalu manis untuk saya.", en: "That condensed milk is too sweet for me." }, accept: ["of a liquid that barely runs", "thick and heavy as a fluid", "viscous"], drill: { jp: "Susu kental itu terlalu manis untuk saya", en: "That condensed milk is too sweet for me" }, hint: "KUN-tahl. ⚠️ Not glossed \"thick\": tebal, which you know, already owns that gloss — and the two are genuinely different. Tebal is a thick BOOK; kental is a thick SAUCE. Susu kental manis, sweet condensed milk, is in every Indonesian kitchen." },
        { id: "id-u117l4-encer", type: "vocab", front: "encer", reading: "encer", meaning: "too thin a liquid", example: { jp: "Susu itu terlalu encer karena air yang dipakai banyak.", en: "That milk is too thin because a lot of water was used." }, accept: ["watery", "diluted", "runnier than it should be"], drill: { jp: "Susu itu terlalu encer karena air banyak", en: "That milk is too thin because of too much water" }, hint: "UN-cher — c is CH. The opposite of kental, and the pair is how Indonesians complain about food. Also used of a person who is quick-witted: otaknya encer, his brain runs easily, which is a compliment." },
      ],
    },
  ],
};
