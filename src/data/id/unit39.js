// ID Unit 39 — Berdiri, berlari, jatuh ("Standing, running, falling") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 2. unit1.js's 12 conventions and unit21.js's A1–A10 BIND this file.
//
// 🚨 RETHEMED FOR THE SAME REASON AS u38, AND THE REASON IS STRUCTURAL.
// The scaffold called this "Conjugation drill 2". **INDONESIAN HAS NO
// CONJUGATION** — see unit38.js's header for the full measurement and the note to
// later crews. There is no paradigm to drill, so the slot is rethemed outright.
//
//   THE HOLE THIS UNIT FILLS, and it is the most surprising one in the whole band.
//   Measured against all 720 live cards, Indonesian had **NO WORD FOR TO STAND, TO
//   RUN, TO FALL, TO FIND, TO MOVE, TO PUSH, TO PULL, TO THROW, TO CATCH, TO
//   TOUCH, TO JUMP, TO CLIMB, TO CHASE, TO FOLLOW, TO AVOID, TO HIDE, TO LIE DOWN,
//   TO LEAN, TO SLIP or TO GO PAST.** Those are A1-frequency verbs in any
//   language, and their absence is not an oversight by one block — it is what
//   happens when three blocks all theme by TOPIC and whole-body motion belongs to
//   no topic:
//     • A1's u18 gave the leisure verbs (berenang · bermain · berolahraga) and
//       skipped `berlari`.
//     • A1's u7 gave `berjalan`, `naik`, `masuk`, `keluar` — walking and vehicles.
//     • A1's u1 gave `duduk` (to sit) and nobody ever gave `berdiri` (to stand).
//     • Block 1's u25 took HAND-handling (mengambil · membawa · menaruh ·
//       memegang · mengangkat · melepas) and stopped at the wrist.
//     • `mencari` (to look for) was taught in A1's u1 and `menemukan` (to FIND)
//       never was — so for thirty-eight units the learner could search and never
//       succeed. That is the single worst gap this block found.
//   This unit is the whole body moving through the city u38 just built.
//
// AUTHORING CALLS MADE HERE:
//   ⚠️ `menarik` MEANS BOTH "TO PULL" AND "INTERESTING", and the card teaches the
//     first with the second in its hint. This is one lexeme with two senses, not
//     two words, so it gets one card (convention 3). A learner who meets only
//     "interesting" will misread every physical use of it, and a learner who meets
//     only "to pull" will misread half of what people say about a book.
//   ⚠️ `ikut` AND `mengikuti` ARE BOTH CARDED and that is §A6's valency call
//     applied: `ikut` is to come along (you are in the group), `mengikuti` is to
//     follow or to take part in (it takes an object). An English speaker who has
//     only one WILL produce the wrong one — the same reasoning block 1 used for
//     `mengubah`/`berubah`. Different lessons is impossible here (only four), so
//     they are ADJACENT in l4 and each hint names the other explicitly.
//   ⚠️ `memukul` · `mengetuk` · `menendang` · `menjatuhkan` · `menabrak` are
//     DEFERRED TO u40 on purpose, not omitted: this unit's four lessons are
//     posture, speed, acting-on-things and going-with, and those five are the
//     impact verbs, which u40 groups together.
//
// AFFIX ROOTS CHECKED BY HAND (unit1.js §3 — LEXEME fails open for Indonesian):
//   berdiri → diri          root not carded. ⚠️ `sendiri` (u4, alone) contains
//     `diri` and IS taught; `diri` bare was DELIBERATELY NOT CARDED in u31 (u31's
//     header records why: `sendiri` accepts "oneself"). Drill-safe —
//     findWholeWord("berdiri", "diri") FAILS (the r before it is a letter) and
//     findWholeWord("sendiri", "diri") FAILS too (the n before it).
//   berbaring → baring      root not taught.
//   bersandar → sandar      root not taught.
//   bergerak → gerak        root not taught.
//   menoleh → toleh         root not taught.
//   berputar → putar        root not taught. ⚠️ NOT `memutuskan` (u21) — that is
//     putus, severed, a different root despite the look.
//   berlari → lari          root not taught bare.
//   melompat → lompat       root not taught.
//   memanjat → panjat       root not taught. ⚠️ NOT `panjang` (u10, long).
//   mengejar → kejar        root not taught.
//   tergelincir → gelincir  root not taught. ⚠️ A ter- word that is NOT a
//     superlative, and the third this block has carded (with terletak and
//     terserah) — §A5(d) says that split must keep being taught, and this hint
//     does it: ter- here marks something happening TO you, not by choice.
//   menarik → tarik         root not taught.
//   mendorong → dorong      root not taught.
//   melempar → lempar       root not taught.
//   menangkap → tangkap     root not taught. ⚠️ NOT `tangan` (u11, hand).
//   menyentuh → sentuh      root not taught.
//   menunjuk → tunjuk       root not taught. ⚠️ NOT `tunggu` (u1) and NOT
//     `menunggu` — different roots.
//   mengikuti → ikut        ⚠️ `ikut` is carded IN THIS LESSON. Drill-safe:
//     findWholeWord("mengikuti", "ikut") FAILS (the g before and the i after are
//     letters), so a drill carrying `mengikuti` does NOT satisfy front `ikut`, and
//     `ikut`'s own drill carries no `mengikuti`. Verified with the real router.
//   menghindari → hindar    root not taught.
//   melewati → lewat        root not taught bare. ⚠️ `melalui` (u36, by way of) is
//     the near-synonym — but it is a PREPOSITION and this is a VERB with an
//     object, so both are teachable; each hint names the other.
//   bersembunyi → sembunyi  root not taught.
//   menemukan → temu        ⚠️ `bertemu` (u2, to meet) IS taught. Carded: meeting a
//     person is not finding a thing, and English needs two words as well.
//     Drill-safe both ways (neither whole-word-contains the other).
//   ikut · jatuh — roots.
//
// GLOSSES REGLOSSED TO CLEAR A LIVE `accept[]` (unit21.js §A4):
//   `berlari` is NOT "to run" — u7's `berjalan` accepts "to run (of a machine)",
//     which `normalizeMeaning` strips to "run". → "to go at a run".
//   `memanjat` is NOT "to climb" — u7's `naik` accepts "climb". → "to climb up
//     something steep". ⚠️ And its gloss avoids the word "wall": u17's `dinding`
//     owns that, and `meaningVariants` SPLITS ON "or", so "to scale a tree or a
//     wall" would have handed `dinding` a second owner. Invisible to every gate.
//   `menemukan` does not accept "to come across" — u2's `bertemu` does.
//   `mengejar` does not accept "to go after" — that is `mengikuti`'s in this unit.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT39 = {
  id: "id-u39",
  lang: "id",
  title: "Berdiri, berlari, jatuh",
  order: 39,
  stage: "a2",
  lessons: [
    {
      id: "id-u39l1",
      unit: 39,
      lesson: 1,
      title: "Berdiri dan berbaring",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Put a body in a position and move it — standing, lying down, leaning, shifting, turning your head, spinning round.",
      items: [
        { id: "id-u39l1-berdiri", type: "vocab", front: "berdiri", reading: "berdiri", meaning: "to stand", example: { jp: "Semua penumpang berdiri di angkot itu.", en: "All the passengers are standing in that minibus." }, accept: ["to be on your feet", "to get up on your feet"], drill: { jp: "Dia berdiri di depan gedung besar", en: "He is standing in front of the big building" }, hint: "buhr-DEE-ree. ⚠️ THE PAIR TO duduk, to sit, which you have had since unit one — and berdiri was missing from the whole course until now. Silakan berdiri is please stand, and Berdiri! is stand up. It also means to be founded: perusahaan itu berdiri tahun 1990." },
        { id: "id-u39l1-berbaring", type: "vocab", front: "berbaring", reading: "berbaring", meaning: "to lie down", example: { jp: "Nenek berbaring di tempat tidur.", en: "Grandmother is lying down on the bed." }, accept: ["to stretch out flat", "to be lying down"], drill: { jp: "Anak itu berbaring di lantai kamar", en: "That child is lying down on the bedroom floor" }, hint: "buhr-BAH-ring. ⚠️ Not tidur, which you already have — tidur is to SLEEP, berbaring is only the position, so you can berbaring wide awake. A doctor says Silakan berbaring. The third posture word, with duduk and berdiri." },
        { id: "id-u39l1-bersandar", type: "vocab", front: "bersandar", reading: "bersandar", meaning: "to lean", example: { jp: "Dia bersandar di dinding dekat pintu.", en: "He is leaning against the wall near the door." }, accept: ["to rest against something", "to prop yourself up"], drill: { jp: "Saya bersandar di kursi dan santai", en: "I lean back in the chair and relax" }, hint: "buhr-SAHN-dar. Takes di or pada for what you lean on. From sandar, to rest against — sandaran is the back of a chair. Used figuratively too: bersandar pada keluarga, to lean on your family, exactly as in English." },
        { id: "id-u39l1-bergerak", type: "vocab", front: "bergerak", reading: "bergerak", meaning: "to move", example: { jp: "Mobil itu tidak bergerak karena macet.", en: "That car is not moving because of the jam." }, accept: ["to be in motion", "to shift position"], drill: { jp: "Jangan bergerak sebelum saya bilang", en: "Do not move before I say so" }, hint: "buhr-GAY-rak. ⚠️ Intransitive only — the thing moves ITSELF. To move an OBJECT you want memindahkan, or menaruh, which you already have. Gerakan is a movement, including a political one. Bergerak pelan-pelan is to move slowly, using the pelan-pelan you already have." },
        { id: "id-u39l1-menoleh", type: "vocab", front: "menoleh", reading: "menoleh", meaning: "to turn your head", example: { jp: "Dia menoleh ketika saya memanggil namanya.", en: "He turned his head when I called his name." }, accept: ["to look round", "to glance back"], drill: { jp: "Ibu menoleh ke arah suara itu", en: "Mother turned her head towards that sound" }, hint: "muh-NOH-leh. Turning only the HEAD, not the body — a small, precise word English needs a phrase for. ⚠️ Melihat, which you already have, is to look; menoleh is the turning that comes first. Tanpa menoleh means without looking back." },
        { id: "id-u39l1-berputar", type: "vocab", front: "berputar", reading: "berputar", meaning: "to spin round", example: { jp: "Anak itu berputar dan tertawa di taman.", en: "That child spins round and laughs in the garden." }, accept: ["to rotate", "to go round"], drill: { jp: "Mobil itu berputar di persimpangan besar", en: "That car turns round at the big junction" }, hint: "buhr-poo-TAR. Turning on the spot or going round in a circle — of a person, a wheel or a fan. ⚠️ Belok, which you already have, is to turn a corner and keep going; berputar is turning around. Putar balik is to make a U-turn, and you will see the sign. Memutar is to turn something, including to play a recording." },
      ],
    },
    {
      id: "id-u39l2",
      unit: 39,
      lesson: 2,
      title: "Berlari dan jatuh",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Move fast and come off badly — running, jumping, climbing, chasing, falling, slipping.",
      items: [
        { id: "id-u39l2-berlari", type: "vocab", front: "berlari", reading: "berlari", meaning: "to go at a run", example: { jp: "Anak itu berlari ke arah ibunya.", en: "That child runs towards his mother." }, accept: ["running", "to dash"], drill: { jp: "Dia berlari karena angkot sudah berangkat", en: "He is running because the minibus has already left" }, hint: "buhr-LAH-ree. ⚠️ ANOTHER A1-LEVEL VERB THAT WAS MISSING. You had berjalan, to walk, and berenang, to swim, and no way to run. Lari on its own is what speech uses — Lari! is run! — and lari is also the noun: lomba lari, a running race. Berlari-lari means running about." },
        { id: "id-u39l2-melompat", type: "vocab", front: "melompat", reading: "melompat", meaning: "to jump", example: { jp: "Kucing itu melompat ke atas lemari.", en: "That cat jumped on top of the cupboard." }, accept: ["to leap", "to spring up"], drill: { jp: "Anak itu melompat di atas kursi", en: "That child is jumping on the chair" }, hint: "muh-LOHM-pat. Takes ke for where you jump to and dari for where from. Lompat is the bare stem and is what a coach shouts. Lompat tinggi is the high jump. Melompat-lompat is to jump repeatedly, the doubling you already know from pelan-pelan and buru-buru." },
        { id: "id-u39l2-memanjat", type: "vocab", front: "memanjat", reading: "memanjat", meaning: "to climb up something steep", example: { jp: "Anak itu memanjat pohon di taman.", en: "That child is climbing the tree in the garden." }, accept: ["to clamber up", "to shin up something"], drill: { jp: "Dia memanjat jembatan tua itu", en: "He is climbing that old bridge" }, hint: "muh-MAHN-jat, j as in JAM. ⚠️ Naik, which you already have, is to go up by any means including stairs and vehicles; memanjat is climbing with your hands and feet on something steep — a tree, a wall, a rock face. Do not confuse it with panjang, long. Pemanjat is a climber." },
        { id: "id-u39l2-mengejar", type: "vocab", front: "mengejar", reading: "mengejar", meaning: "to chase", example: { jp: "Anjing itu mengejar kucing di gang.", en: "That dog is chasing a cat in the alley." }, accept: ["to run after", "to give chase"], drill: { jp: "Dia mengejar angkot yang sudah berangkat", en: "He is chasing the minibus that has already left" }, hint: "muh-NGUH-jar, opening with the ng hum. Takes its target straight. Also used of an abstract target — mengejar jadwal, to chase a deadline; mengejar mimpi, to chase a dream. ⚠️ Mencari, which you already have, is to look for something you cannot see; mengejar is going after something you can." },
        { id: "id-u39l2-jatuh", type: "vocab", front: "jatuh", reading: "jatuh", meaning: "to fall", example: { jp: "Piring itu jatuh dari meja dan rusak.", en: "That plate fell off the table and broke." }, accept: ["to drop down", "to take a tumble"], drill: { jp: "Anak itu jatuh di trotoar yang basah", en: "That child fell on the wet pavement" }, hint: "JAH-tooh, j as in JAM. Everything that comes down by itself: a person, an object, rain, a price, a government. ⚠️ Turun, which you have from u36, is going down deliberately; jatuh is uncontrolled. Jatuh cinta, to fall in love, is the same image as English. Menjatuhkan, to drop something, is later in this band." },
        { id: "id-u39l2-tergelincir", type: "vocab", front: "tergelincir", reading: "tergelincir", meaning: "to slip", example: { jp: "Ibu tergelincir di lantai dapur yang basah.", en: "Mother slipped on the wet kitchen floor." }, accept: ["to lose your footing", "to skid"], drill: { jp: "Dia tergelincir dan jatuh di trotoar", en: "She slipped and fell on the pavement" }, hint: "tuhr-guh-LEEN-cheer, c is CH. ⚠️ HERE ter- DOES NOT MEAN MOST — it marks something that happens TO you rather than by choice, which is the same ter- as in terlambat and terpaksa, both of which you already have. You do not choose to slip. Its natural sequel is jatuh, on the card before it." },
      ],
    },
    {
      id: "id-u39l3",
      unit: 39,
      lesson: 3,
      title: "Menarik dan mendorong",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Act on a thing with your body — pulling it, pushing it, throwing it, catching it, touching it, pointing at it.",
      items: [
        { id: "id-u39l3-menarik", type: "vocab", front: "menarik", reading: "menarik", meaning: "to pull", example: { jp: "Dia menarik kursi ke dekat meja.", en: "He pulled the chair over near the table." }, accept: ["to tug", "to draw towards you"], drill: { jp: "Anak itu menarik tangan ibunya", en: "That child is pulling his mother's hand" }, hint: "muh-NAH-reek. ⚠️ THE SAME WORD ALSO MEANS INTERESTING, and you will meet that sense far more often: buku yang menarik, an interesting book. It is one word with two senses — the image is that a thing DRAWS you in — so learn both here or you will misread one of them. The doors in Indonesia say TARIK and DORONG." },
        { id: "id-u39l3-mendorong", type: "vocab", front: "mendorong", reading: "mendorong", meaning: "to push", example: { jp: "Kami mendorong mobil itu ke pinggir jalan.", en: "We pushed that car to the side of the road." }, accept: ["to shove", "to press forward"], drill: { jp: "Dia mendorong sepeda tua di gang", en: "He is pushing an old bicycle in the alley" }, hint: "muhn-DOH-rong. The exact pair to menarik — DORONG and TARIK are printed on doors all over the country, so this pair is genuinely readable on day one. ⚠️ Also figurative: mendorong anak untuk belajar, to push a child to study, which is close to mendukung, to back up, which you met earlier in this block." },
        { id: "id-u39l3-melempar", type: "vocab", front: "melempar", reading: "melempar", meaning: "to throw", example: { jp: "Anak itu melempar topi ke atas atap.", en: "That child threw a hat onto the roof." }, accept: ["to hurl", "to toss"], drill: { jp: "Jangan melempar benda keras di kelas", en: "Do not throw hard objects in class" }, hint: "muh-LUHM-par. Takes ke for the target. Lempar is the bare stem: Lempar ke sini! Its natural pair is on the next card. Melemparkan is the -kan twin with the same meaning; lemparan is a throw." },
        { id: "id-u39l3-menangkap", type: "vocab", front: "menangkap", reading: "menangkap", meaning: "to catch", example: { jp: "Dia menangkap burung kecil di taman itu.", en: "He caught a small bird in that garden." }, accept: ["to grab hold of", "to seize"], drill: { jp: "Kucing itu menangkap nyamuk di dinding", en: "That cat caught a mosquito on the wall" }, hint: "muh-NAHNG-kap. Catching a thrown thing, and also catching a person — polisi menangkap pencuri is the arrest sense, which is how you will most often read it. ⚠️ Memegang, which you already have, is to HOLD something already in your hand; menangkap is the moment of getting hold of it. Do not confuse it with tangan, hand." },
        { id: "id-u39l3-menyentuh", type: "vocab", front: "menyentuh", reading: "menyentuh", meaning: "to touch", example: { jp: "Jangan menyentuh panci itu karena panas.", en: "Do not touch that pot because it is hot." }, accept: ["to make contact with", "to put a hand on"], drill: { jp: "Dia menyentuh layar dengan tangan kotor", en: "He touched the screen with a dirty hand" }, hint: "muh-nyuhn-TOOH, ny one sound. Physical contact, and also emotional: cerita yang menyentuh hati, a story that touches the heart, using the hati you met earlier in this block. ⚠️ Memegang is to hold on to; menyentuh is only contact, however brief." },
        { id: "id-u39l3-menunjuk", type: "vocab", front: "menunjuk", reading: "menunjuk", meaning: "to point at", example: { jp: "Guru menunjuk gambar di layar itu.", en: "The teacher pointed at the picture on that screen." }, accept: ["to indicate", "to single out"], drill: { jp: "Dia menunjuk alamat itu di peta", en: "He pointed at that address on the map" }, hint: "muh-NOON-jook. Pointing at something, and by extension appointing somebody to a post: menunjuk dia sebagai atasan. ⚠️ Not menunggu, to wait, which looks almost identical — read the middle carefully: -nunj- against -nungg-. Petunjuk is a clue or an instruction, and petunjuk arah is a direction sign." },
      ],
    },
    {
      id: "id-u39l4",
      unit: 39,
      lesson: 4,
      title: "Ikut dan menemukan",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Go along with something or get out of its way — coming along, following, avoiding, passing by, hiding — and finally FIND what you were looking for.",
      items: [
        { id: "id-u39l4-ikut", type: "vocab", front: "ikut", reading: "ikut", meaning: "to come along", example: { jp: "Saya ikut ke pasar dengan ibu.", en: "I am coming along to the market with mother." }, accept: ["to join in", "to tag along"], drill: { jp: "Dia mau ikut ke pesta besok", en: "He wants to come along to the party tomorrow" }, hint: "EE-koot. ⚠️ Enormously common and there is no neat English equivalent: ikut is being part of a group going somewhere or doing something — Ikut, ya? means can I come too? Ikut ujian is to sit an exam. The card after this one is its transitive twin and the two are easy to mix up, so read both hints." },
        { id: "id-u39l4-mengikuti", type: "vocab", front: "mengikuti", reading: "mengikuti", meaning: "to follow", example: { jp: "Anjing itu mengikuti saya sampai rumah.", en: "That dog followed me all the way home." }, accept: ["to go along behind", "to take part in"], drill: { jp: "Kami mengikuti aturan baru di sekolah", en: "We follow the new rule at school" }, hint: "muhng-ee-KOO-tee. ⚠️ THE SPLIT THAT MATTERS, and an English speaker will get it wrong: `ikut` on the card before takes NO object — saya ikut, I'm coming. Mengikuti takes one — saya mengikuti dia, I'm following him. Use ikut for joining in and mengikuti for following a person, a rule or a course." },
        { id: "id-u39l4-menghindari", type: "vocab", front: "menghindari", reading: "menghindari", meaning: "to avoid", example: { jp: "Kami menghindari jalan raya karena macet.", en: "We avoid the main road because of the jam." }, accept: ["to steer clear of", "to keep away from"], drill: { jp: "Dia menghindari makanan pedas dan asam", en: "He avoids spicy and sour food" }, hint: "muhng-hin-DAH-ree. Takes its object straight. ⚠️ Mencegah, which you met earlier in this block, is stopping something from happening to ANYONE; menghindari is getting yourself out of its way. Menghindar without the -i is the same verb with no object: dia menghindar, he dodged." },
        { id: "id-u39l4-melewati", type: "vocab", front: "melewati", reading: "melewati", meaning: "to go past", example: { jp: "Kami melewati jembatan itu setiap pagi.", en: "We go past that bridge every morning." }, accept: ["to pass by", "to get beyond"], drill: { jp: "Angkot itu melewati taman dan masjid", en: "That minibus goes past the garden and the mosque" }, hint: "muh-luh-WAH-tee. ⚠️ Its neighbour is melalui, by way of, which you met in u36 — and the difference is grammatical, not semantic: melalui is a PREPOSITION before a route, melewati is a VERB with an object. Lewat is the bare form and means past as a preposition too: lewat jam lima, after five." },
        { id: "id-u39l4-bersembunyi", type: "vocab", front: "bersembunyi", reading: "bersembunyi", meaning: "to hide", example: { jp: "Anak itu bersembunyi di bawah tempat tidur.", en: "That child is hiding under the bed." }, accept: ["to keep out of sight", "to take cover"], drill: { jp: "Kucing itu bersembunyi di belakang lemari", en: "That cat is hiding behind the cupboard" }, hint: "buhr-suhm-BOO-nyee, ny one sound. ⚠️ Intransitive — YOU hide. To hide a THING is menyembunyikan, which is the same ber-/me-kan split you have seen in berubah and mengubah. Sembunyi-sembunyian is hide and seek. Diam-diam, which you already have, is doing something secretly without hiding your body." },
        { id: "id-u39l4-menemukan", type: "vocab", front: "menemukan", reading: "menemukan", meaning: "to find", example: { jp: "Saya menemukan kunci itu di bawah kursi.", en: "I found that key under the chair." }, accept: ["to stumble on", "to discover"], drill: { jp: "Dia menemukan alamat itu di surat lama", en: "He found that address in an old letter" }, hint: "muh-nuh-MOO-kan. 🚨 THE BIGGEST GAP IN THE COURSE UNTIL NOW: you have had mencari, to look for, since unit one and no way to say you SUCCEEDED. ⚠️ Bertemu, which you already have, is to MEET a person; menemukan is to find a thing or a fact, and the two share the root temu. Penemuan is a discovery or an invention. Ketemu is the everyday spoken form of both." },
      ],
    },
  ],
};
