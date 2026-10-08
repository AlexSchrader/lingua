// ID Unit 80 — Bunyi, cahaya, dan rabaan ("Sound, light and touch") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u77–u87). The 12 conventions in unit1.js and the 10 A2 conventions
// in unit21.js BIND this file. Read both before editing.
//
// THE HOLE THIS FILLS, measured against all 1200 A1+A2 cards. A2 covered two of
// the five senses properly and left three half-done:
//   • SMELL and TASTE: done. `bau` · `harum` · `asin` · `asam` · `pahit` ·
//     `manis` · `gurih` · `pedas` · `enak`.
//   • TEMPERATURE: done. `panas` · `hangat` · `dingin` · `segar`.
//   • SOUND: three words only — `bunyi` · `bising` · `getaran` — plus `suara`.
//     Nothing for silent, shrill, to whisper, to shriek, to echo, to buzz.
//   • LIGHT: `terang` · `gelap` · `lampu` · `nyala`. Nothing for the light
//     itself, a beam, a flash, dazzling, dim, blurred, a shadow, a reflection.
//   • TOUCH: `halus` · `kasar` · `keras` · `lembut` · `basah` · `kering`.
//     Nothing for slippery, stiff, flexible, damp, or TO FEEL WITH THE HAND.
// A learner could describe a meal in nine words and could not say "the floor is
// slippery" or "the photo is blurry".
//
// WHY THE LESSONS ARE 8/5/5/6 AND NOT 6/6/6/6. The three senses do not divide by
// four. Splitting sound across two lessons would have put berdengung in a light
// lesson or bergetar in a shadow lesson, and a lesson whose title has to say
// "and other things" is a bin. Every lesson is inside `src/data/lint.js`'s 5-8
// band and the total is the standard 24.
//
// TWO WORDS THE PROBE FLAGGED AND BOTH FLAGS ARE WRONG:
//   `kaku`  is NOT related to taught `mengaku` (to admit). Different roots; the
//           prefix-stripper produced it. The kickoff brief for this block names
//           this exact false positive, so it is settled, not re-argued here.
//   `kejam` same class, in the character unit.
// ONE WORD THE PROBE FLAGGED AND THE FLAG IS REAL: `bergetar` is a second card
// off root `getar`, whose noun `getaran` is already taught. Two off one root, A6
// ceiling is three, and the hint names the relationship.
//
// GLOSSES REWRITTEN BECAUSE THE GRADER COLLIDED THEM. `normalizeMeaning` strips a
// leading "to " and "a/an/the", so FOUR obvious glosses were already owned and
// `lint:curriculum` saw none of them (it compares exact lowercased strings):
//   `cahaya`    "light"  -> `lampu` accepts "light".     Now "light that shines".
//   `redup`     "dim"    -> `gelap` accepts "dim".       Now "faintly lit".
//   `lembap`    "damp"   -> `basah` accepts "damp".      Now "humid".
//   `mengkilap` "glossy" -> `majalah` accepts "glossy".  Now "shiny".
// That last one is worth keeping in mind: a magazine's accept[] silenced a word
// about polished surfaces, three units and one domain away.
//
// DECLINED, EACH FOR A NAMED REASON:
//   `gaung`   "an echo" normalises to the same string as this unit's `bergema`
//             ("to echo"), so the two would share one prompt. One of them only.
//   `berisik` `bising` (noisy) is already taught and owns the gloss space.
//   `senyap`  near-synonym of this unit's `sunyi` and `hening`. Two is enough.
//   `samar`   near-synonym of this unit's `buram`.
//   `sepi`    TAKEN at u10. `gelap` TAKEN at u8.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT80 = {
  id: "id-u80",
  lang: "id",
  title: "Bunyi, cahaya, dan rabaan",
  order: 80,
  stage: "b1",
  lessons: [
    {
      id: "id-u80l1",
      unit: 80,
      lesson: 1,
      title: "Sunyi, jerit, dan dengung",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Describe a sound across its whole range — from a silent room through a whisper to a shriek — and say that something echoes, buzzes or vibrates.",
      items: [
        { id: "id-u80l1-sunyi", type: "vocab", front: "sunyi", reading: "sunyi", meaning: "silent", example: { jp: "Jalan di desa itu sunyi setelah malam.", en: "The road in that village is silent after nightfall." }, accept: ["without a sound", "soundless"], drill: { jp: "Jalan di desa itu sunyi setelah malam", en: "The village road is silent after nightfall" }, hint: "SOO-nyee, one ny hum. The absence of SOUND. You already know sepi, which is the absence of PEOPLE — a crowded library is sunyi but not sepi, and an empty noisy market is sepi but not sunyi." },
        { id: "id-u80l1-hening", type: "vocab", front: "hening", reading: "hening", meaning: "hushed", example: { jp: "Kelas menjadi hening ketika guru masuk.", en: "The class went hushed when the teacher came in." }, accept: ["fallen quiet", "still and quiet"], drill: { jp: "Kelas menjadi hening ketika guru masuk", en: "The class went hushed when the teacher came in" }, hint: "HUH-ning. Quiet that has just FALLEN over a place, usually a roomful of people. Indonesians say mengheningkan cipta for a minute's silence at a ceremony. sunyi is a standing condition; hening is a sudden one." },
        { id: "id-u80l1-nyaring", type: "vocab", front: "nyaring", reading: "nyaring", meaning: "shrill", example: { jp: "Suara bayi itu nyaring sekali di malam hari.", en: "That baby's cry is very shrill at night." }, accept: ["piercingly loud", "high and carrying"], drill: { jp: "Suara bayi itu nyaring sekali", en: "That baby's cry is very shrill" }, hint: "NYA-ring, starting with the ny hum and ending with the ng one. HIGH and carrying, not merely loud — keras is loud, bising is noisy, nyaring is the one that cuts through." },
        { id: "id-u80l1-berbisik", type: "vocab", front: "berbisik", reading: "berbisik", meaning: "to whisper", example: { jp: "Dia berbisik karena tidak mau orang lain mendengar.", en: "He whispers because he does not want other people to hear." }, accept: ["to speak under one's breath", "to murmur quietly"], drill: { jp: "Dia berbisik di telinga saya", en: "He whispers in my ear" }, hint: "bur-BEE-seek. The root is bisik and ber- makes it something you DO rather than something done to a thing. Indonesians double it, bisik-bisik, for gossiping behind someone's back." },
        { id: "id-u80l1-menjerit", type: "vocab", front: "menjerit", reading: "menjerit", meaning: "to shriek", example: { jp: "Anak itu menjerit ketika melihat air panas.", en: "That child shrieked when he saw the hot water." }, accept: ["to scream out", "to let out a high cry"], drill: { jp: "Anak itu menjerit ketika kaget", en: "That child shrieks when startled" }, hint: "mun-juh-REET. A high scream of fear or pain. You already know menangis, to cry, and berteriak is a shout; menjerit is sharper and higher than either." },
        { id: "id-u80l1-bergema", type: "vocab", front: "bergema", reading: "bergema", meaning: "to echo", example: { jp: "Suara kami bergema di dalam gedung kosong.", en: "Our voices echo inside the empty building." }, accept: ["to reverberate", "to come back as an echo"], drill: { jp: "Suara kami bergema di gedung kosong", en: "Our voices echo in the empty building" }, hint: "bur-GEH-ma. The root gema is the echo itself. Indonesian prefers the verb here, which is why this card is bergema and there is no separate noun card." },
        { id: "id-u80l1-berdengung", type: "vocab", front: "berdengung", reading: "berdengung", meaning: "to buzz", example: { jp: "Telinga saya berdengung setelah musik yang keras.", en: "My ears buzz after the loud music." }, accept: ["to hum low", "to drone"], drill: { jp: "Telinga saya berdengung setelah musik keras", en: "My ears buzz after loud music" }, hint: "bur-duh-NGOONG, with two ng hums. The low continuous note of an insect, a machine or ringing ears. The root dengung is that sound; nyaring is its opposite in pitch." },
        { id: "id-u80l1-bergetar", type: "vocab", front: "bergetar", reading: "bergetar", meaning: "to tremble", example: { jp: "Ponsel saya bergetar di dalam tas.", en: "My phone vibrates inside my bag." }, accept: ["to vibrate", "to shake finely"], drill: { jp: "Ponsel saya bergetar di dalam tas", en: "My phone vibrates inside my bag" }, hint: "bur-guh-TAR. You already know the noun getaran, \"a vibration\" — this is the same root as a verb. Used for a phone, a hand shaking with nerves, and a voice about to break." },
      ],
    },
    {
      id: "id-u80l2",
      unit: 80,
      lesson: 2,
      title: "Cahaya, sorot, dan silau",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Talk about light itself rather than just lamps: name the light, a beam, a flash of lightning, and say a light is dazzling or too dim to read by.",
      items: [
        { id: "id-u80l2-cahaya", type: "vocab", front: "cahaya", reading: "cahaya", meaning: "light that shines", example: { jp: "Cahaya matahari masuk ke kamar saya pagi ini.", en: "Sunlight comes into my room this morning." }, accept: ["illumination", "the light a thing gives off"], drill: { jp: "Cahaya matahari masuk ke kamar saya", en: "Sunlight comes into my room" }, hint: "cha-HA-ya — c is CH. The light ITSELF, where lampu is the lamp producing it and terang is the brightness you perceive. The gloss avoids a bare \"light\" because the grader already gives that answer to lampu." },
        { id: "id-u80l2-sorot", type: "vocab", front: "sorot", reading: "sorot", meaning: "a beam of light", example: { jp: "Sorot lampu mobil itu masuk ke kamar saya.", en: "That car's headlight beam came into my room." }, accept: ["a directed shaft of light", "a spotlight beam"], drill: { jp: "Sorot lampu mobil masuk ke kamar", en: "The car's beam comes into the room" }, hint: "SO-rot. Light aimed in one DIRECTION: headlights, a torch, a stage light. The related verb menyoroti is how Indonesian newspapers say a story is under the spotlight." },
        { id: "id-u80l2-kilat", type: "vocab", front: "kilat", reading: "kilat", meaning: "a flash of lightning", example: { jp: "Ada kilat di langit sebelum hujan turun.", en: "There was lightning in the sky before the rain came down." }, accept: ["lightning", "a sudden flash"], drill: { jp: "Ada kilat di langit sebelum hujan", en: "There is lightning in the sky before the rain" }, hint: "KEE-laht. The flash you SEE; the thunder you hear is a different word. It also means \"express\": pos kilat is express post and kilat-kilat means in a flash." },
        { id: "id-u80l2-menyilaukan", type: "vocab", front: "menyilaukan", reading: "menyilaukan", meaning: "dazzling", example: { jp: "Matahari pagi itu menyilaukan mata saya.", en: "The morning sun dazzles my eyes." }, accept: ["too bright to look at", "glaring"], drill: { jp: "Matahari pagi menyilaukan mata saya", en: "The morning sun dazzles my eyes" }, hint: "muh-nyee-LAU-kahn, five syllables with the ny hum. Light so strong it stops you seeing. The root is silau, which on its own describes the EYE: mata saya silau." },
        { id: "id-u80l2-redup", type: "vocab", front: "redup", reading: "redup", meaning: "faintly lit", example: { jp: "Lampu di kamar itu redup, jadi saya tidak bisa membaca.", en: "The lamp in that room is faintly lit, so I cannot read." }, accept: ["weakly lit", "giving little light"], drill: { jp: "Lampu di kamar itu redup sekali", en: "The lamp in that room is very faint" }, hint: "ruh-DOOP. A light that is ON but weak — the exact opposite of menyilaukan. gelap, which you know, means there is no light at all, which is why this card is glossed \"faintly lit\" rather than \"dim\"." },
      ],
    },
    {
      id: "id-u80l3",
      unit: 80,
      lesson: 3,
      title: "Kilau, bayangan, dan pantulan",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe what a surface does with light — sparkle, shine, cast a shadow, throw back a reflection — and say an image is blurred.",
      items: [
        { id: "id-u80l3-berkilau", type: "vocab", front: "berkilau", reading: "berkilau", meaning: "to sparkle", example: { jp: "Air laut berkilau waktu matahari naik.", en: "The sea sparkles as the sun comes up." }, accept: ["to glitter", "to catch the light in points"], drill: { jp: "Air laut berkilau waktu pagi", en: "The sea sparkles in the morning" }, hint: "bur-KEE-lau, ending like English \"cow\". MOVING points of light: water, jewellery, eyes. The root kilau is the glint itself." },
        { id: "id-u80l3-mengkilap", type: "vocab", front: "mengkilap", reading: "mengkilap", meaning: "shiny", example: { jp: "Lantai itu mengkilap karena baru bersih.", en: "That floor is shiny because it has just been cleaned." }, accept: ["polished-looking", "with a bright smooth surface"], drill: { jp: "Lantai itu mengkilap dan sangat bersih", en: "That floor is shiny and very clean" }, hint: "mung-KEE-lahp. A smooth surface that reflects evenly — a polished floor, a new car, a leather shoe. berkilau twinkles; mengkilap just gleams." },
        { id: "id-u80l3-bayangan", type: "vocab", front: "bayangan", reading: "bayangan", meaning: "a shadow", example: { jp: "Bayangan pohon itu panjang pada sore hari.", en: "That tree's shadow is long in the late afternoon." }, accept: ["a cast shadow", "a silhouette"], drill: { jp: "Bayangan pohon itu panjang sekali", en: "That tree's shadow is very long" }, hint: "ba-ya-NGAHN. The dark shape a thing casts. The same word is \"a mental image\": tidak ada bayangan means you have no idea. Indonesia's shadow-puppet theatre is wayang, a related old word." },
        { id: "id-u80l3-pantulan", type: "vocab", front: "pantulan", reading: "pantulan", meaning: "a reflection", example: { jp: "Saya melihat pantulan wajah saya di air.", en: "I saw the reflection of my face in the water." }, accept: ["an image thrown back", "a bounced image"], drill: { jp: "Saya melihat pantulan wajah di air", en: "I see a reflection of a face in the water" }, hint: "pahn-TOO-lahn. The root pantul is to bounce back, so a ball and a light both memantul. A bayangan is dark and shapeless; a pantulan shows the thing itself." },
        { id: "id-u80l3-buram", type: "vocab", front: "buram", reading: "buram", meaning: "blurry", example: { jp: "Foto itu buram, jadi saya tidak bisa melihat nama.", en: "That photo is blurry, so I cannot see the name." }, accept: ["out of focus", "unclear to look at"], drill: { jp: "Foto itu buram dan sangat gelap", en: "That photo is blurry and very dark" }, hint: "BOO-rahm. An image you cannot make out — a photo, a window, old glasses. jelas, which you know, is its opposite: a buram photo is tidak jelas." },
      ],
    },
    {
      id: "id-u80l4",
      unit: 80,
      lesson: 4,
      title: "Rabaan: licin, kaku, dan lembap",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say what something feels like under the hand — slippery, stiff, flexible, grainy, damp — and say that you are feeling for something you cannot see.",
      items: [
        { id: "id-u80l4-meraba", type: "vocab", front: "meraba", reading: "meraba", meaning: "to feel with the hand", example: { jp: "Dia meraba dinding untuk mencari pintu.", en: "He feels along the wall to find the door." }, accept: ["to grope for", "to touch in order to find out"], drill: { jp: "Dia meraba dinding untuk mencari pintu", en: "He feels along the wall to find the door" }, hint: "muh-RA-ba. Touching in order to FIND OUT, in the dark or inside a bag. You already know menyentuh, which is just making contact; meraba is exploring by touch." },
        { id: "id-u80l4-licin", type: "vocab", front: "licin", reading: "licin", meaning: "slippery", example: { jp: "Lantai kamar mandi itu licin waktu basah.", en: "That bathroom floor is slippery when wet." }, accept: ["slick underfoot", "giving no grip"], drill: { jp: "Lantai kamar mandi itu licin", en: "That bathroom floor is slippery" }, hint: "LEE-cheen — c is CH. No grip. Indonesians also use it of a person who always escapes blame, the way English says \"slippery\". halus, which you know, is smooth to the touch without being dangerous." },
        { id: "id-u80l4-kaku", type: "vocab", front: "kaku", reading: "kaku", meaning: "stiff", example: { jp: "Tangan saya kaku karena sangat dingin.", en: "My hands are stiff because it is very cold." }, accept: ["rigid and unbending", "not supple"], drill: { jp: "Tangan saya kaku karena sangat dingin", en: "My hands are stiff because it is very cold" }, hint: "KA-koo. Will not bend — a cold hand, new leather, a nervous person's posture. It shares no root with mengaku, \"to admit\", which only looks similar. Also used of stiff, awkward language." },
        { id: "id-u80l4-lentur", type: "vocab", front: "lentur", reading: "lentur", meaning: "flexible", example: { jp: "Benda ini lentur, jadi tidak mudah patah.", en: "This thing is flexible, so it does not break easily." }, accept: ["bending without breaking", "supple"], drill: { jp: "Benda ini lentur dan tidak mudah patah", en: "This thing is flexible and does not break easily" }, hint: "lun-TOOR. Bends and springs back — the exact opposite of kaku. Indonesians use it about a rule or a schedule that can be bent, too: jadwal yang lentur." },
        { id: "id-u80l4-kesat", type: "vocab", front: "kesat", reading: "kesat", meaning: "rough to the touch", example: { jp: "Kertas ini kesat, tidak halus seperti yang lain.", en: "This paper is rough, not smooth like the others." }, accept: ["slightly gritty", "dry and not smooth"], drill: { jp: "Kertas ini kesat dan tidak halus", en: "This paper is rough and not smooth" }, hint: "kuh-SAHT. Dry and grippy under the finger — the opposite of licin, not of halus. kasar, which you know, is coarse enough to scratch; kesat just has no slip." },
        { id: "id-u80l4-lembap", type: "vocab", front: "lembap", reading: "lembap", meaning: "humid", example: { jp: "Kamar itu lembap karena tidak ada angin.", en: "That room is humid because there is no air moving." }, accept: ["slightly wet with moisture", "muggy"], drill: { jp: "Kamar itu lembap karena tidak ada angin", en: "That room is humid because there is no wind" }, hint: "LUM-bahp. Holding moisture without being wet, which is the standing condition of most of Indonesia. basah means actually wet, which is why this card is glossed \"humid\": the grader already gives \"damp\" to basah. Spelled lembab in older writing; lembap is the standard form." },
      ],
    },
  ],
};
