// ID Unit 123 — Gerak tubuh dan mimik ("Gesture, expression and bearing") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u114–u126). Conventions: unit1.js §1–12, unit21.js, unit51.js
// §B1–B12, and unit114.js §C1–C10. Read unit114.js's header before editing this.
//
// THE HOLE THIS FILLS. `tersenyum` (u20), `menunjuk` and `menyentuh` (u39) were
// the entire repertoire of what a body says without words. The learner could
// name emotions (u57 owns felt emotion) and could name body parts (u11), and
// had no way to describe the nod, the headshake, the handshake, the bow, the
// glance, or the face someone was making — in a culture where a great deal is
// communicated exactly that way and saying it outright would be rude.
//
// THE BOUNDARY WITH u39, AND IT IS THE AXIS OF THE WHOLE UNIT:
//   u39 (A2) owns GROSS BODY MOVEMENT — `berdiri` `berlari` `jatuh` `menunjuk`
//   `menyentuh` `mencakar` `melempar` `melewati` `bergerak`. Getting somewhere,
//   or moving something.
//   u123 owns the SMALL SIGNALLING movement — what a face and a hand say
//   without words. The test applied to every candidate: does it CARRY A MESSAGE
//   to someone watching? A nod does. Running does not.
//
// AND THE BOUNDARY WITH u57, which is block 1's B1 unit: u57 owns FELT EMOTION
// (`jengkel`, and the inner state). u123 owns its VISIBLE SIGN. So `cemberut`
// (sulky-faced) is here because it is a face, and the sulk itself is not.
//
// TWO GLOSS COLLISIONS MEASURED (gloss-taken.mjs id):
//   "to wave" → ombak@u76. A sea wave and a hand wave are one English word,
//     and `ombak`'s card got there first. So `melambai` is "to signal with a
//     raised hand". This is the purest example of why §C2 exists: the front was
//     free, the theme was free, and the obvious gloss belonged to a wave of water.
//   "to grip" → memegang@u25. So `menggenggam` is "to close the hand around
//     something" — which is also the truer gloss, since menggenggam is
//     specifically a closed fist and memegang is holding anything at all.
//
// ⚠️ `menatap` IS A FALSE POSITIVE AND I CHECKED IT. candidate-check reports
// "DERIVED: men- off atap(u17)", a roof. `menatap` is from `tatap`, not from
// `atap` — the stripper simply removed men- and found a taught word underneath.
// Letters only. The same class of false positive unit51.js §B9 lists four of.
//
// FRONTS REFUSED, NAMED NOT BURIED:
//   `melirik`  the verb beside `lirikan`, the noun, which ships. One root, and
//              the noun is the thing a learner needs to recognise in writing.
//              §C4's ❌ case.
//   `tersenyum` TAKEN u20. `menunjuk` and `menyentuh` TAKEN u39 — all three of
//              the lead's "taken" claims for this slot verified true.
//   `mengacungkan` `mendelik` `mengerling` `bertepuk tangan` `menjabat`
//   `menyilangkan` — probed free, cut at 24. `bertepuk tangan` (to clap) is the
//              best refill and is a real gap: the course cannot say applause.
//
// ⚠️ `mengerutkan` IS CARDED IN ITS -kan FORM ON PURPOSE. The bare root `kerut`
// is a wrinkle and the intransitive is `berkerut`; what a person DOES is
// `mengerutkan dahi`, to knit the brow, which needs the object. The drill
// carries the front as a whole word, which the -kan form makes natural and the
// bare root would not (§C5, and unit1.js §4's headwording rule).
//
// ⚠️ FIVE WORDS I ASSUMED TAUGHT AND ARE NOT, and three of them hurt this unit
// specifically: `muka` (face) — only `wajah` is taught; `lidah` (tongue), which
// is what `menjulurkan` wants as its object; `bicara` (only `berbicara`);
// `murid`; `pelan`. All five are out of the examples.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT123 = {
  id: "id-u123",
  lang: "id",
  title: "Gerak tubuh dan mimik",
  order: 123,
  stage: "b2",
  lessons: [
    {
      id: "id-u123l1",
      unit: 123,
      lesson: 1,
      title: "Isyarat, mengangguk, dan menggeleng",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Answer and greet without words — nod, shake the head, wave, pat someone, shake hands — and name what a signal is.",
      items: [
        { id: "id-u123l1-isyarat", type: "vocab", front: "isyarat", reading: "isyarat", meaning: "a hand signal", example: { jp: "Dia memberi isyarat dengan tangan supaya kami diam.", en: "He gives a hand signal so that we keep quiet." }, accept: ["a sign made without words", "a gesture that carries meaning", "a wordless sign"], drill: { jp: "Dia memberi isyarat dengan tangan supaya diam", en: "He gives a hand signal so we keep quiet" }, hint: "ee-sya-RAHT, from Arabic. Any wordless sign that MEANS something — a hand, a look, a traffic light. Bahasa isyarat is sign language, and lampu isyarat is a signal lamp." },
        { id: "id-u123l1-mengangguk", type: "vocab", front: "mengangguk", reading: "mengangguk", meaning: "to nod", example: { jp: "Dia hanya mengangguk waktu saya tanya, tanpa kata.", en: "He only nodded when I asked, without a word." }, accept: ["to tip the head in agreement", "to move the head down once in assent", "to dip the head in agreement"], drill: { jp: "Dia hanya mengangguk waktu saya tanya", en: "He only nodded when I asked" }, hint: "muh-NGANG-gook, with ngg. Agreement, and in Indonesia very often politeness rather than agreement — a nod can mean \"I hear you\" and nothing more, which is worth knowing before you count it as a yes." },
        { id: "id-u123l1-menggeleng", type: "vocab", front: "menggeleng", reading: "menggeleng", meaning: "to shake the head", example: { jp: "Anak itu menggeleng dan tidak mau makan lagi.", en: "That child shakes his head and does not want to eat any more." }, accept: ["to move the head side to side in refusal", "to signal no with the head", "to turn the head left and right in refusal"], drill: { jp: "Anak itu menggeleng dan tidak mau makan lagi", en: "That child shakes his head and will not eat any more" }, hint: "muh-NGUH-leng, with ngg. Side to side, meaning no. The pair with mengangguk, and the two of them are most of what a polite Indonesian conversation runs on." },
        { id: "id-u123l1-melambai", type: "vocab", front: "melambai", reading: "melambai", meaning: "to signal with a raised hand", example: { jp: "Mereka melambai dari dermaga sampai kapal jauh.", en: "They wave from the jetty until the ship is far away." }, accept: ["to move a hand in greeting", "to signal with an open hand", "to greet by moving the hand"], drill: { jp: "Mereka melambai dari dermaga sampai kapal jauh", en: "They wave from the jetty until the ship is far away" }, hint: "muh-lam-BYE. ⚠️ Not glossed \"to wave\": ombak, a sea wave, already owns that gloss, because English uses one word for both and the grader cannot tell them apart. Melambai is only the hand — and also what a flag or long grass does in wind." },
        { id: "id-u123l1-menepuk", type: "vocab", front: "menepuk", reading: "menepuk", meaning: "to pat", example: { jp: "Guru itu menepuk bahu anak itu sebelum pergi.", en: "That teacher pats that child's shoulder before leaving." }, accept: ["to tap with the flat of the hand", "to give a light slap of encouragement", "to touch lightly with an open hand"], drill: { jp: "Guru itu menepuk bahu anak itu sebelum pergi", en: "That teacher pats that child's shoulder before leaving" }, hint: "muh-nuh-POOK. Flat hand, light, friendly. Menepuk bahu, patting the shoulder, is the Indonesian gesture of reassurance between men. Menepuk tangan is clapping, which the course has no single word for." },
        { id: "id-u123l1-bersalaman", type: "vocab", front: "bersalaman", reading: "bersalaman", meaning: "to shake hands", example: { jp: "Semua tamu bersalaman dengan pemilik rumah di pintu.", en: "All the guests shake hands with the owner of the house at the door." }, accept: ["to greet by taking hands", "to clasp hands in greeting", "to take each other's hands in greeting"], drill: { jp: "Semua tamu bersalaman dengan pemilik rumah", en: "All the guests shake hands with the house owner" }, hint: "ber-sa-LA-man, from salam, the greeting you already know. ⚠️ The Indonesian handshake is NOT the Western one: it is light, often two-handed, and frequently followed by touching your own chest. With an older person you may take their hand and bring it to your forehead — that is a salim, and it is a different gesture again." },
      ],
    },
    {
      id: "id-u123l2",
      unit: 123,
      lesson: 2,
      title: "Menatap, melotot, dan mengedip",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe what someone's eyes are doing — gazing, glaring, blinking, glancing sideways, frowning — which is how a great deal gets said here without being said.",
      items: [
        { id: "id-u123l2-menatap", type: "vocab", front: "menatap", reading: "menatap", meaning: "to gaze at", example: { jp: "Dia menatap jendela lama sekali tanpa berbicara.", en: "She gazes at the window for a long time without speaking." }, accept: ["to look fixedly at", "to fix one's eyes on", "to hold one's eyes on something"], drill: { jp: "Dia menatap jendela lama sekali tanpa berbicara", en: "She gazes at the window for a long time without speaking" }, hint: "muh-NA-tahp, from tatap. ⚠️ It has NOTHING to do with atap, a roof, even though the probe reports it does — a stripper removed men- and found a taught word underneath. A steady, held look, neutral in itself: menatap mata, to meet someone's eyes, can be respectful or confronting depending on who." },
        { id: "id-u123l2-melotot", type: "vocab", front: "melotot", reading: "melotot", meaning: "to glare", example: { jp: "Ibu itu melotot waktu anak itu tidak sopan.", en: "That mother glares when that child is rude." }, accept: ["to open the eyes wide in anger", "to stare someone down", "to fix someone with angry wide eyes"], drill: { jp: "Ibu itu melotot waktu anak itu tidak sopan", en: "That mother glares when that child is rude" }, hint: "muh-LO-toht. Eyes wide, anger or shock. In a culture that avoids saying anger out loud this gesture does a lot of work — a melotot from a parent across a room is the whole reprimand. Mata melotot also describes bulging eyes from any cause." },
        { id: "id-u123l2-mengedip", type: "vocab", front: "mengedip", reading: "mengedip", meaning: "to blink", example: { jp: "Dia mengedip terus karena ada debu di mata.", en: "He keeps blinking because there is dust in his eye." }, accept: ["to shut and open the eyes quickly", "to wink", "to flick the eyelids"], drill: { jp: "Dia mengedip terus karena ada debu di mata", en: "He keeps blinking because there is dust in his eye" }, hint: "muh-nguh-DEEP, from kedip. Blinking AND winking — Indonesian does not separate them, so mengedipkan mata with an object is the deliberate wink and bare mengedip is usually the involuntary one. Also of a light flickering." },
        { id: "id-u123l2-lirikan", type: "vocab", front: "lirikan", reading: "lirikan", meaning: "a sideways glance", example: { jp: "Lirikan kecil itu sudah cukup untuk membuat dia diam.", en: "That small sideways glance was enough to make him quiet." }, accept: ["a quick look out of the corner of the eye", "a glance without turning the head", "a sidelong look"], drill: { jp: "Lirikan kecil itu sudah cukup untuk membuat diam", en: "That small sideways glance was enough to silence him" }, hint: "lee-REE-kan, from lirik. The NOUN — the verb melirik is not carded, because one root gets one card here and the noun is what you will meet in writing. ⚠️ Lirik also means song lyrics, a separate borrowing, and context separates them." },
        { id: "id-u123l2-mengerutkan", type: "vocab", front: "mengerutkan", reading: "mengerutkan", meaning: "to frown", example: { jp: "Dia mengerutkan wajah waktu membaca surat itu.", en: "He frowns as he reads that letter." }, accept: ["to draw the brows together", "to wrinkle the forehead", "to pull the brow into lines"], drill: { jp: "Dia mengerutkan wajah waktu membaca surat itu", en: "He frowns as he reads that letter" }, hint: "muh-nguh-root-KAHN, from kerut, a wrinkle. ⚠️ It needs an object and the object is almost always dahi, the forehead: mengerutkan dahi IS the Indonesian for frowning, and dahi, the forehead, is a word this course has never taught, which is why the example says wajah. Carded in the -kan form for that reason — the bare root is a wrinkle, not an act." },
        { id: "id-u123l2-mimik", type: "vocab", front: "mimik", reading: "mimik", meaning: "facial expression", example: { jp: "Mimik dia tidak berubah walaupun berita itu buruk.", en: "His expression does not change even though the news is bad." }, accept: ["the look on a face", "what a face is showing", "the play of expression on a face"], drill: { jp: "Mimik dia tidak berubah walaupun berita itu buruk", en: "His expression does not change even though the news is bad" }, hint: "MEE-meek. From the same European root as mime. The expression as a thing that can be read or hidden — mimik datar, a flat expression, is a compliment in some Indonesian contexts and a warning in others." },
      ],
    },
    {
      id: "id-u123l3",
      unit: 123,
      lesson: 3,
      title: "Menunduk, membungkuk, dan merangkul",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Use the body to show respect or closeness — lowering the head, bending forward, an arm round the shoulders, a full embrace — and know which of those is appropriate to whom.",
      items: [
        { id: "id-u123l3-menunduk", type: "vocab", front: "menunduk", reading: "menunduk", meaning: "to bow the head", example: { jp: "Anak itu menunduk waktu orang tua berbicara dengan dia.", en: "That child lowers his head when an adult speaks to him." }, accept: ["to lower the face", "to look down in deference", "to drop the head forward"], drill: { jp: "Anak itu menunduk waktu orang tua berbicara", en: "That child lowers his head when an adult speaks" }, hint: "muh-NOON-dook, from tunduk, to submit. Head down, eyes down. ⚠️ In Indonesia this is RESPECT, not shame or evasion — a child who looks an elder steadily in the eye is the one being rude, which is the reverse of the Western reading." },
        { id: "id-u123l3-membungkuk", type: "vocab", front: "membungkuk", reading: "membungkuk", meaning: "to bend at the waist", example: { jp: "Pelayan itu membungkuk sedikit sebelum pergi dari meja.", en: "That waiter bends slightly before leaving the table." }, accept: ["to stoop forward in respect", "to bend the body forward", "to bow from the waist"], drill: { jp: "Pelayan itu membungkuk sedikit sebelum pergi", en: "That waiter bends slightly before leaving" }, hint: "mum-boong-KOOK, from bungkuk. The whole upper body, not just the head. Slight and quick in Indonesia, nothing like a Japanese bow — and used when passing in front of seated people, which is the situation you will meet it in. Also describes a stooped back from age." },
        { id: "id-u123l3-merangkul", type: "vocab", front: "merangkul", reading: "merangkul", meaning: "to put an arm around", example: { jp: "Dia merangkul bahu teman dia waktu jalan bersama.", en: "He puts an arm around his friend's shoulders as they walk." }, accept: ["to draw someone in with one arm", "to hold by the shoulders", "to throw an arm round someone"], drill: { jp: "Dia merangkul bahu teman dia waktu jalan", en: "He puts an arm around his friend's shoulders as they walk" }, hint: "muh-rang-KOOL. ONE arm, round the shoulders, sideways — and between male friends in Indonesia it is completely ordinary. Used figuratively for bringing people in: merangkul semua pihak, to bring all parties on board, is standard political language." },
        { id: "id-u123l3-memeluk", type: "vocab", front: "memeluk", reading: "memeluk", meaning: "to embrace", example: { jp: "Ibu itu memeluk anak dia lama sekali di pintu.", en: "That mother holds her child for a long time at the door." }, accept: ["to hold someone in both arms", "to hug", "to take someone in one's arms"], drill: { jp: "Ibu itu memeluk anak dia lama sekali", en: "That mother holds her child for a long time at the door" }, hint: "muh-muh-LOOK. BOTH arms, face to face — against merangkul, which is one arm from the side. ⚠️ Memeluk agama means to embrace a religion, and that is a very common use: dia memeluk Islam, he converted. Same word, and worth recognising." },
        { id: "id-u123l3-mengusap", type: "vocab", front: "mengusap", reading: "mengusap", meaning: "to wipe gently", example: { jp: "Dia mengusap kepala anak itu dengan tangan kanan.", en: "She strokes that child's head with her right hand." }, accept: ["to stroke a surface with the hand", "to pass a hand over", "to smooth with the palm"], drill: { jp: "Dia mengusap kepala anak itu dengan tangan kanan", en: "She strokes that child's head with her right hand" }, hint: "muh-NGOO-sahp. A soft pass of the hand — over a head, over tears, over a table. The right hand matters: in Indonesia you touch a person, especially a head, with the right hand, and the example says so on purpose." },
        { id: "id-u123l3-gerakgerik", type: "vocab", front: "gerak-gerik", reading: "gerakgerik", meaning: "the way someone carries themselves", example: { jp: "Gerak-gerik orang itu aneh, jadi kami hati-hati.", en: "That person's movements were odd, so we were careful." }, accept: ["a person's movements and bearing", "how someone moves and gestures", "someone's manner of moving"], drill: { jp: "Gerak-gerik orang itu aneh jadi kami hati-hati", en: "That person's movements were odd so we were careful" }, hint: "GUH-rahk GUH-reek — a doubled form that is NOT a plural, like hati-hati and rempah-rempah: the doubling IS the word. Built on gerak, to move, which you know from bergerak. Specifically movements as something OBSERVED and read — which is why it turns up in the language of suspicion." },
      ],
    },
    {
      id: "id-u123l4",
      unit: 123,
      lesson: 4,
      title: "Raut, meringis, dan cemberut",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Read a face and say what it is doing — the set of the features, a wince, a sulk — and describe three small hand movements the course had no words for.",
      items: [
        { id: "id-u123l4-raut", type: "vocab", front: "raut", reading: "raut", meaning: "the cast of a face", example: { jp: "Raut wajah dia berubah waktu mendengar nama itu.", en: "The look of her face changed when she heard that name." }, accept: ["the set of someone's features", "the look of a face as a whole", "the shape and cast of someone's face"], drill: { jp: "Raut wajah dia berubah waktu mendengar nama", en: "The look of her face changed when she heard the name" }, hint: "RA-oot, two syllables. Raut wajah is the usual full phrase, using the wajah you already know. The SET of the features, the structure of the look — against mimik, which is the expression playing across it. Raut is slower and deeper." },
        { id: "id-u123l4-meringis", type: "vocab", front: "meringis", reading: "meringis", meaning: "to grimace", example: { jp: "Dia meringis waktu kaki dia sakit sekali.", en: "He winces when his leg hurts badly." }, accept: ["to pull a pained face", "to screw up the face", "to bare the teeth in pain"], drill: { jp: "Dia meringis waktu kaki dia sakit", en: "He winces when his leg hurts" }, hint: "muh-REE-ngees. Teeth showing, face pulled — from pain, or from an awkwardness that is close to a laugh. Indonesian uses it for the smile you make when you have been caught out, which has no single English word." },
        { id: "id-u123l4-cemberut", type: "vocab", front: "cemberut", reading: "cemberut", meaning: "sulky-faced", example: { jp: "Anak itu cemberut karena tidak boleh keluar rumah.", en: "That child is sulking because he is not allowed out of the house." }, accept: ["with a face set in displeasure", "pouting and unhappy", "with a face showing a sulk"], drill: { jp: "Anak itu cemberut karena tidak boleh keluar rumah", en: "That child is sulking because he is not allowed out" }, hint: "chem-buh-ROOT — c is CH. The FACE, not the feeling: the sulk itself belongs to the emotions unit and this is what it looks like. Muka cemberut is the usual phrase. Said of adults too, and it is mildly teasing." },
        { id: "id-u123l4-menjulurkan", type: "vocab", front: "menjulurkan", reading: "menjulurkan", meaning: "to stick out", example: { jp: "Anak kecil itu menjulurkan tangan untuk mengambil buah.", en: "That small child sticks out a hand to take the fruit." }, accept: ["to put out a hand or tongue", "to extend something forward", "to push something out in front"], drill: { jp: "Anak kecil itu menjulurkan tangan untuk mengambil buah", en: "That small child sticks out a hand to take the fruit" }, hint: "mun-joo-loor-KAHN, from julur. Needs an object: a hand, a tongue, a neck, a rope. Menjulurkan lidah, sticking out the tongue, is the rude-child version — and lidah, a tongue, is a word this course has never taught, which is why the example uses a hand." },
        { id: "id-u123l4-menggaruk", type: "vocab", front: "menggaruk", reading: "menggaruk", meaning: "to scratch oneself", example: { jp: "Dia menggaruk kepala waktu tidak tahu harus menjawab.", en: "He scratches his head when he does not know how to answer." }, accept: ["to rub at an itch", "to drag the nails across skin", "to scratch at the skin"], drill: { jp: "Dia menggaruk kepala waktu tidak tahu harus menjawab", en: "He scratches his head when he does not know how to answer" }, hint: "muh-nga-ROOK. ⚠️ Not the same as mencakar, to claw, which you met in the animals unit: menggaruk is relieving an itch on yourself, mencakar is injuring something else. The head-scratch in the example is a real and readable Indonesian gesture for not knowing." },
        { id: "id-u123l4-menggenggam", type: "vocab", front: "menggenggam", reading: "menggenggam", meaning: "to close the hand around something", example: { jp: "Dia menggenggam uang itu kuat sampai tangan dia sakit.", en: "She grips that money so tightly her hand hurts." }, accept: ["to hold tight in a fist", "to close the fist on something", "to clutch in a closed hand"], drill: { jp: "Dia menggenggam uang itu sampai tangan sakit", en: "She grips that money until her hand hurts" }, hint: "muh-ngung-GAHM, from genggam. ⚠️ Not glossed \"to grip\": memegang, to hold, which you learned early, already owns that gloss — and the distinction is real. Memegang is holding anything at all; menggenggam is a closed fist. Segenggam is a handful, as a measure." },
      ],
    },
  ],
};
