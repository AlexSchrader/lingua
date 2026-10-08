// ID Unit 121 — Rawat, rusak, dan perbaikan ("Wear, failure and repair") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u114–u126). Conventions: unit1.js §1–12, unit21.js, unit51.js
// §B1–B12, **block 1's §C1–C12 in unit88.js and §C-B4 in unit89.js** (which
// bind u88–u126 and outrank the D-series), and unit114.js §D1–D11. Read unit114.js's header before editing this.
//
// THE HOLE THIS FILLS. `rusak` (u25) was the single word for everything that
// has gone wrong with an object, from a hairline crack to a collapsed roof, and
// `memperbaiki` (u25) was the single word for fixing it. In a climate this wet
// and this hot, where everything decays visibly, a learner could report that
// something was broken and could not say HOW — cracked, dented, bent, clogged,
// scratched, rotten, rusted thin, or simply past it.
//
// THE BOUNDARY WITH u83:
//   u83 (B1) owns DEMOLITION AND STRUCTURE — `runtuh` `membongkar`
//   `merobohkan` `fondasi` `kokoh`. Something being pulled down on purpose, or
//   failing structurally.
//   u121 owns SLOW DECAY and the maintenance that fights it. `ambruk` is the
//   one close call and it stays here: `runtuh` is a building coming down,
//   `ambruk` is a rotten thing giving way under its own weight. The hint says so.
//
// ⚠️ `memperbaiki` IS TAKEN (u25) AND THAT SHAPED THE WHOLE UNIT. The repair
// VERB is spent, so this unit teaches the NOUNS and the care verbs instead:
// `perbaikan` (the putting right of a fault), `merawat` (to tend), `perawatan`
// (upkeep), `memugar` (to restore a building). That is not a workaround — it is
// a better unit, because "maintenance" and "restoration" are the B2 concepts and
// "to fix" was already A2's.
//
// TWO GLOSS COLLISIONS MEASURED (gloss-taken.mjs id), both on the first choice:
//   "to look after" → menjaga@u32      so `merawat`    is "to tend and keep in good order"
//   "a repair"      → memperbaiki@u25  so `perbaikan`  is "the putting right of a fault"
//
// FRONTS REFUSED, NAMED NOT BURIED:
//   `melapuk`     the me- verb of `lapuk`, which ships as the adjective. §D4 ❌.
//   `tahan lama`  a near-synonym of `awet` with no honest discriminating gloss,
//                 AND it FIRES-INSIDE `lama` (u10). `awet` ships; `tahan lama`
//                 is named in its hint (§D3).
//   `memperbaiki` TAKEN u25, above. `macet` TAKEN u23. `pudar` TAKEN u59.
//                 `longgar` TAKEN u61. `berfungsi` TAKEN u42. `terbengkalai`
//                 TAKEN u60 — all five probed and all five are somebody's.
//   `basi` `pemugaran` `pengabaian` `mengabaikan` `terabaikan` `menumpuk`
//   `melepuh` `pelihara` — probed free, cut at 24.
//
// DERIVATION NOTES:
//   `perawatan` candidate-check reports "-an on perawat(u45)", a nurse. The
//     shared root is `rawat` and both are real derivations of it: a nurse and
//     the upkeep of a machine. Two off one root, inside the ceiling, hint names
//     it. `merawat` is the third and is the verb itself — in this one case the
//     bare-root rule does not bite, because the root `rawat` is NOT carded.
//   `berdebu` = ber- + `debu` (u46). `berkarat` was the same shape in u115.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT121 = {
  id: "id-u121",
  lang: "id",
  title: "Rawat, rusak, dan perbaikan",
  order: 121,
  stage: "b2",
  lessons: [
    {
      id: "id-u121l1",
      unit: 121,
      lesson: 1,
      title: "Aus, lapuk, dan usang",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Say how something has aged — rubbed thin, rotten with damp, shabby, eaten hollow, dull, dusty — instead of only that it is old.",
      items: [
        { id: "id-u121l1-aus", type: "vocab", front: "aus", reading: "aus", meaning: "worn smooth by use", example: { jp: "Karet di sepeda itu sudah aus, jadi tidak aman.", en: "The rubber on that bicycle is worn smooth, so it is not safe." }, accept: ["rubbed thin from friction", "worn down by rubbing", "worn away where it rubs"], drill: { jp: "Karet di sepeda itu sudah aus sekali", en: "The rubber on that bicycle is very worn smooth" }, hint: "OW-s, one syllable, rhyming with English house without the h. Specifically worn by RUBBING — a tyre, a brake, a gear, a shoe sole. Not the same as rusak, broken, which you already know: an aus part still works, badly." },
        { id: "id-u121l1-lapuk", type: "vocab", front: "lapuk", reading: "lapuk", meaning: "rotten from damp", example: { jp: "Kayu di bawah atap itu sudah lapuk karena air hujan.", en: "The wood under that roof is rotten because of rainwater." }, accept: ["decayed as old wood does", "soft and crumbling with age", "rotted by wet"], drill: { jp: "Kayu di bawah atap itu sudah lapuk sekali", en: "The wood under that roof is thoroughly rotten" }, hint: "LA-pook. Of wood, cloth, rope, paper — anything organic left wet. In this climate it is the default fate of untreated wood, which is why jati and rayap, from earlier units, matter so much. Also of ideas: pikiran lapuk is outdated thinking." },
        { id: "id-u121l1-usang", type: "vocab", front: "usang", reading: "usang", meaning: "shabby from long use", example: { jp: "Baju usang itu masih dipakai setiap hari di rumah.", en: "That shabby shirt is still worn every day at home." }, accept: ["old and faded from wear", "past its best from age", "worn-looking and tired"], drill: { jp: "Baju usang itu masih dipakai setiap hari", en: "That shabby shirt is still worn every day" }, hint: "OO-sang. Not damaged — just old-looking and tired. Against aus, which is physical wear, and lapuk, which is rot: usang is about appearance and age. Used of arguments too: alasan usang, a worn-out excuse." },
        { id: "id-u121l1-keropos", type: "vocab", front: "keropos", reading: "keropos", meaning: "porous and eaten through", example: { jp: "Besi di bawah jembatan itu keropos karena karat.", en: "The iron under that bridge is eaten hollow because of rust." }, accept: ["crumbling inside", "hollowed out by decay", "full of holes from decay"], drill: { jp: "Besi di bawah jembatan itu keropos karena karat", en: "The iron under that bridge is eaten hollow because of rust" }, hint: "kuh-RO-pos. Sound outside, hollow inside — which is what makes it dangerous. Of rusted metal, of termite-eaten wood, and in medicine of bone: tulang keropos is osteoporosis." },
        { id: "id-u121l1-kusam", type: "vocab", front: "kusam", reading: "kusam", meaning: "dull and dusty-looking", example: { jp: "Kaca di jendela itu kusam karena tidak pernah bersih.", en: "The glass in that window is dull because it is never cleaned." }, accept: ["having lost its shine", "no longer bright", "gone matt and lifeless"], drill: { jp: "Kaca di jendela itu kusam karena tidak bersih", en: "The glass in that window is dull because it is not clean" }, hint: "KOO-sahm. Having lost its shine, of glass, paint, metal and skin — kulit kusam is the single commonest word in Indonesian skincare advertising, which is a good way to remember it." },
        { id: "id-u121l1-berdebu", type: "vocab", front: "berdebu", reading: "berdebu", meaning: "covered in dust", example: { jp: "Lemari di kamar itu berdebu karena lama tidak dipakai.", en: "The cupboard in that room is dusty because it has not been used for a long time." }, accept: ["grey with settled dust", "thick with dust", "with dust lying on it"], drill: { jp: "Lemari di kamar itu berdebu karena lama", en: "The cupboard in that room is dusty from long disuse" }, hint: "ber-DUH-boo — ber- plus debu, dust, which you already know. The ber- prefix here means \"having\": berdebu is having dust on you, exactly as berkarat, from the mining unit, is having rust." },
      ],
    },
    {
      id: "id-u121l2",
      unit: 121,
      lesson: 2,
      title: "Retak, penyok, dan bengkok",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Report damage precisely enough for someone to act on it — cracked, dented, bent, scratched, scuffed, pitted — rather than just rusak.",
      items: [
        { id: "id-u121l2-retak", type: "vocab", front: "retak", reading: "retak", meaning: "cracked", example: { jp: "Dinding itu retak sejak tanah bergerak tahun lalu.", en: "That wall has been cracked since the ground moved last year." }, accept: ["split with a hairline break", "having a crack in it", "broken along a line but still whole"], drill: { jp: "Dinding itu retak sejak tanah bergerak tahun lalu", en: "That wall has been cracked since the ground moved last year" }, hint: "RUH-tahk. A line, not a break — the thing is still in one piece, which is the whole distinction from rusak. Also of relationships: hubungan yang retak is a cracked relationship, and that is the commoner use in conversation." },
        { id: "id-u121l2-penyok", type: "vocab", front: "penyok", reading: "penyok", meaning: "dented", example: { jp: "Mobil itu penyok di belakang karena motor kecil.", en: "That car is dented at the back because of a small motorbike." }, accept: ["pushed in from a knock", "with a hollow from a blow", "bashed inward"], drill: { jp: "Mobil itu penyok di belakang karena motor", en: "That car is dented at the back because of a motorbike" }, hint: "PUH-nyok — ny is one sound. Pushed in, not broken — a car panel, a pan, a tin. In Jakarta traffic this is the single most useful damage word there is." },
        { id: "id-u121l2-bengkok", type: "vocab", front: "bengkok", reading: "bengkok", meaning: "bent out of true", example: { jp: "Besi itu bengkok dan harus diganti dengan yang baru.", en: "That iron bar is bent and has to be replaced with a new one." }, accept: ["crooked from a knock", "no longer straight", "warped out of line"], drill: { jp: "Besi itu bengkok dan harus diganti sekarang", en: "That iron bar is bent and has to be replaced now" }, hint: "BENG-kok. Bent when it should be straight. ⚠️ A strong figurative sense you will meet in the news: orang bengkok is a crooked person, and pejabat bengkok a corrupt official — the metaphor runs exactly as it does in English." },
        { id: "id-u121l2-tergores", type: "vocab", front: "tergores", reading: "tergores", meaning: "scratched", example: { jp: "Meja baru itu tergores waktu dibawa masuk rumah.", en: "That new table got scratched while being carried into the house." }, accept: ["marked with a scratch", "lined by something sharp", "left with a scratch mark"], drill: { jp: "Meja baru itu tergores waktu dibawa masuk", en: "That new table got scratched while being carried in" }, hint: "ter-GO-res. The ter- prefix means it happened without anyone intending it, which is the whole point of this word: tergores is got scratched, and the blame is left out. Indonesian uses ter- constantly for exactly that." },
        { id: "id-u121l2-lecet", type: "vocab", front: "lecet", reading: "lecet", meaning: "scuffed", example: { jp: "Kulit di tangan saya lecet karena bekerja di kebun.", en: "The skin on my hand is grazed from working in the garden." }, accept: ["grazed on the surface", "rubbed raw", "with the surface rubbed off"], drill: { jp: "Kulit di tangan saya lecet karena bekerja", en: "The skin on my hand is grazed from working" }, hint: "LUH-chet — c is CH. Surface rubbed off, of skin, leather, paint, a shoe. Of a person it is the commonest minor-injury word in Indonesian: lecet sedikit, just a graze, is what you say to play down a fall." },
        { id: "id-u121l2-bopeng", type: "vocab", front: "bopeng", reading: "bopeng", meaning: "pitted with small holes", example: { jp: "Jalan di depan rumah itu bopeng karena hujan terus.", en: "The road in front of that house is pitted because of constant rain." }, accept: ["pockmarked", "marked with small hollows", "covered in small dents"], drill: { jp: "Jalan di depan rumah itu bopeng karena hujan", en: "The road in front of that house is pitted because of rain" }, hint: "BO-peng. Many small hollows across a surface — a road, a wall, a face scarred by illness. ⚠️ Applied to a person it is blunt and can wound; of a road it is purely descriptive, and that is the use to prefer." },
      ],
    },
    {
      id: "id-u121l3",
      unit: 121,
      lesson: 3,
      title: "Reyot, ambruk, dan rongsok",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe something that has reached the end — shaky, collapsed, clogged, slack, scrap, out of date — and know which of those is a warning and which is a verdict.",
      items: [
        { id: "id-u121l3-reyot", type: "vocab", front: "reyot", reading: "reyot", meaning: "rickety", example: { jp: "Rumah reyot itu masih ada orang yang tinggal di dalam.", en: "There are still people living inside that rickety house." }, accept: ["shaky and about to give way", "unsound from neglect", "wobbly and barely standing"], drill: { jp: "Rumah reyot itu masih ada orang di dalam", en: "There are still people inside that rickety house" }, hint: "RUH-yot. Standing, but visibly not for long — a house, a bridge, a chair. The warning, where ambruk in the next card is the verdict. Rumah reyot is a set phrase for the poorest kind of housing." },
        { id: "id-u121l3-ambruk", type: "vocab", front: "ambruk", reading: "ambruk", meaning: "to collapse under its own weight", example: { jp: "Atap gedung lama itu ambruk waktu hujan besar.", en: "The roof of that old building collapsed during heavy rain." }, accept: ["to come down from decay", "to give way and fall in", "to fall in from being unsound"], drill: { jp: "Atap gedung lama itu ambruk waktu hujan besar", en: "The roof of that old building collapsed during heavy rain" }, hint: "AM-brook. ⚠️ The boundary with runtuh, which you met in the building unit, and it is a real one: runtuh is a structure coming down, ambruk is a rotten or exhausted thing giving way. Also of a person: dia ambruk, he collapsed, from illness or overwork." },
        { id: "id-u121l3-tersumbat", type: "vocab", front: "tersumbat", reading: "tersumbat", meaning: "blocked up", example: { jp: "Air tidak mengalir karena saluran itu tersumbat.", en: "The water is not running because that channel is blocked." }, accept: ["clogged so nothing passes", "stopped up with debris", "plugged and not letting anything through"], drill: { jp: "Air tidak mengalir karena saluran itu tersumbat", en: "The water does not run because that channel is blocked" }, hint: "ter-soom-BAHT. Of a drain, a pipe, a nose, a road. The ter- prefix again means it just happened, with no one blamed. ⚠️ Not the same as macet, which you learned for traffic — macet is stuck and moving slowly, tersumbat is stopped completely." },
        { id: "id-u121l3-mengendur", type: "vocab", front: "mengendur", reading: "mengendur", meaning: "to go slack", example: { jp: "Tali itu mengendur setelah dipakai beberapa bulan.", en: "That rope goes slack after being used for a few months." }, accept: ["to lose its tension", "to sag from use", "to stop being tight"], drill: { jp: "Tali itu mengendur setelah dipakai beberapa bulan", en: "That rope goes slack after a few months of use" }, hint: "muh-ngun-DOOR, from kendur. Of a rope, a belt, a chain, skin. ⚠️ Not the same as longgar, which you know for clothes that are loose — longgar is roomy, mengendur is losing tension. Also of effort flagging: semangatnya mengendur." },
        { id: "id-u121l3-rongsok", type: "vocab", front: "rongsok", reading: "rongsok", meaning: "scrap", example: { jp: "Mobil rongsok itu dijual untuk besi saja.", en: "That scrap car is sold only for the iron." }, accept: ["junk fit only for scrap", "worn-out goods", "something fit only to be broken up"], drill: { jp: "Mobil rongsok itu dijual untuk besi saja", en: "That scrap car is sold only for the iron" }, hint: "RONG-sok. Past repair, worth only its material. Tukang rongsok, the scrap man who buys your old metal and plastic off a cart, is a real and visible trade in every Indonesian neighbourhood." },
        { id: "id-u121l3-kadaluarsa", type: "vocab", front: "kadaluarsa", reading: "kadaluarsa", meaning: "past its use-by date", example: { jp: "Obat itu kadaluarsa, jadi tidak boleh dipakai lagi.", en: "That medicine is out of date, so it must not be used any more." }, accept: ["no longer valid for use", "expired", "out of date and no longer good"], drill: { jp: "Obat itu kadaluarsa jadi tidak boleh dipakai", en: "That medicine is out of date so it must not be used" }, hint: "ka-da-loo-AR-sa. Of medicine, food, a passport, a warranty. Printed on every Indonesian package, usually as kadaluarsa or the abbreviation ED. ⚠️ Also spelled kedaluwarsa, which is what the dictionary prefers and almost nobody writes." },
      ],
    },
    {
      id: "id-u121l4",
      unit: 121,
      lesson: 4,
      title: "Merawat, memugar, dan suku cadang",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about maintenance rather than breakage — tending a thing, its upkeep, a repair job, restoring an old building, and getting the part you need.",
      items: [
        { id: "id-u121l4-merawat", type: "vocab", front: "merawat", reading: "merawat", meaning: "to tend and keep in good order", example: { jp: "Dia merawat mesin itu sendiri setiap bulan.", en: "He tends that machine himself every month." }, accept: ["to maintain by caring for", "to keep in working condition", "to care for so it lasts"], drill: { jp: "Dia merawat mesin itu sendiri setiap bulan", en: "He tends that machine himself every month" }, hint: "muh-RA-waht. ⚠️ Not glossed \"to look after\": menjaga, which you learned for looking after people, already owns that gloss. Merawat is about keeping a thing in condition — a machine, a garden, a patient. The same root gives perawat, a nurse." },
        { id: "id-u121l4-perawatan", type: "vocab", front: "perawatan", reading: "perawatan", meaning: "upkeep", example: { jp: "Perawatan mesin lama itu lebih mahal daripada yang baru.", en: "The upkeep of that old machine is more expensive than a new one." }, accept: ["the care that keeps a thing working", "maintenance", "regular servicing"], drill: { jp: "Perawatan mesin lama itu lebih mahal sekarang", en: "The upkeep of that old machine is more expensive now" }, hint: "puh-ra-WA-tan. The second card off rawat in this lesson. ⚠️ The same root also gives perawat, a nurse, which you already know — the probe flags this one as derived from that word, and the real link is the shared root, not one from the other." },
        { id: "id-u121l4-perbaikan", type: "vocab", front: "perbaikan", reading: "perbaikan", meaning: "the putting right of a fault", example: { jp: "Perbaikan jalan itu akan mulai bulan depan.", en: "Work on that road will start next month." }, accept: ["the mending of something broken", "repair work", "the fixing of a defect"], drill: { jp: "Perbaikan jalan itu akan mulai bulan depan", en: "Work on that road will start next month" }, hint: "per-bye-KAN. ⚠️ Not glossed \"a repair\": memperbaiki, to fix, which you learned early, already owns that gloss. Perbaikan is the job as a noun — dalam perbaikan, under repair, is what the sign on a broken lift says." },
        { id: "id-u121l4-memugar", type: "vocab", front: "memugar", reading: "memugar", meaning: "to restore a building", example: { jp: "Mereka memugar gedung tua itu tanpa mengubah bentuk.", en: "They are restoring that old building without changing its shape." }, accept: ["to put an old building back in order", "to renovate historic work", "to bring an old structure back"], drill: { jp: "Mereka memugar gedung tua itu tahun ini", en: "They are restoring that old building this year" }, hint: "muh-MOO-gar. Specifically restoring something OLD to what it was, not improving it — the word used of Borobudur, of colonial buildings, of a mosque. Not the same as membangun, to build, or memperbaiki, to fix." },
        { id: "id-u121l4-awet", type: "vocab", front: "awet", reading: "awet", meaning: "long-keeping", example: { jp: "Kayu jati awet sekali kalau tidak basah terus.", en: "Teak lasts very well if it is not constantly wet." }, accept: ["slow to spoil", "lasting well without care", "durable over a long time"], drill: { jp: "Kayu jati awet sekali kalau tidak basah", en: "Teak lasts very well if it does not stay wet" }, hint: "A-wet. Of food, wood, cloth, and of a person's looks: awet muda, staying young-looking, is a compliment people actually pay. ⚠️ Indonesian also has tahan lama, hard-wearing, which means nearly the same and is NOT taught — two cards under one gloss would be a prompt with two right answers." },
        { id: "id-u121l4-sukucadang", type: "vocab", front: "suku cadang", reading: "sukucadang", meaning: "a spare part", example: { jp: "Suku cadang untuk mesin lama itu susah dicari sekarang.", en: "Spare parts for that old machine are hard to find now." }, accept: ["a replacement component", "a part kept for repairs", "a spare component for a machine"], drill: { jp: "Suku cadang untuk mesin lama itu susah dicari", en: "Spare parts for that old machine are hard to find" }, hint: "SOO-koo CHA-dang — c is CH, and it is two words. Literally a reserve piece: cadang means held in reserve, and suku here is a part rather than the ethnic group sense you learned earlier. Every Indonesian workshop sign has this phrase on it." },
      ],
    },
  ],
};
