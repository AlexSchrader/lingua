// ID Unit 45 — Darah, tulang, dan luka ("Blood, bone and injury") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 3 (u41–u50). unit1.js's 12 conventions and unit21.js's 10 A2
// conventions BIND this file. RETITLED AND RETHEMED from "Vocabulary 6 (A2)".
//
// ⚠️ THIS IS THE SLOT MOST AT RISK OF THE DUPLICATION BLOCK 1 WARNED ABOUT, so it
// was measured first. Block 1's A1 note reads: "u25 'Health and the body' → **A1's
// u11 IS body and health, 24/24**" — and block 1 rethemed its own u25 away from
// health entirely for that reason. A1's u11 is SURFACE anatomy plus three
// complaints: kepala · tangan · kaki · mata · mulut · hidung · badan · rambut ·
// telinga · gigi · perut · wajah · sakit · lelah · pusing · batuk · pilek ·
// demam · dokter · obat · rumah sakit · apotek · sehat · sembuh.
//
// WHAT IT NEVER TOUCHED, measured against all 720 merged cards: **the inside of the
// body (no blood, heart, bone, muscle, skin, breathing), the joints (no neck,
// chest, back, knee, shoulder, finger), and injury or treatment of any kind (no
// wound, accident, fracture, fainting, poison, infection, nurse, prescription,
// injection, surgery, ambulance).** That is a whole unit's worth and none of it
// overlaps u11. Four of these words — `darah` · `jantung` · `perawat` ·
// `kecelakaan` — are on block 1's reserved list as "the health specialisms u25
// declined"; they are taken here, as intended, and flagged in the hand-back.
//
// AFFIX ROOTS STRIPPED AND GREPPED BY HAND (convention 3):
//   bernapas  → napas   root not taught, and DELIBERATELY not carded: the noun adds
//     nothing a learner cannot get from the verb plus the hint, so one card only.
//   menular   → tular   root not taught.
//   mengobati → obat    ⚠️ `obat` IS taught ("medicine", u11l4). Carded anyway:
//     medicine is a thing, treating a patient is an act — convention 3's test
//     passes. Drill-safe: "mengobati" contains "obat" at index 4, preceded by `g`,
//     so findWholeWord does not match in either direction.
//   perawat · resep · suntik · operasi · ambulans · darah · jantung · tulang ·
//   otot · kulit · leher · dada · punggung · lutut · bahu · jari · luka · patah ·
//   pingsan · racun — all roots.
//   kecelakaan → celaka  root not taught (a ke-…-an noun on an untaught root, so
//     nothing is taught twice).
//
// ⚠️ GLOSS TRAPS THIS LESSON HAD TO ROUTE AROUND — every one of them is an
// accept[] entry on an ALREADY-MERGED card, which A2 convention A4 names as the
// defect class no linter sees. Resolved by measurement through the real
// `checkMeaning`, not by eye:
//   `belakang` (u7l2) accepts **"back"**        → `punggung` is "the back of the body"
//   `rusak` (u25l4) IS **"broken"**             → `patah` is "to be broken in two"
//   `angka` (u26l1) IS **"a digit"**            → `jari` is "a finger"
//   `sakit` (u11l3) accepts **"to hurt"**/"in pain" → `luka` is "a wound"
//
// ⛔ NOT CARDED: `muka` (a face) — A1's `wajah` (u11l2) already owns it and the two
// are the same word in two registers; convention 3 forbids the second card. Named
// in `kulit`'s hint. `sakit kepala` is not carded either: `sakit` and `kepala` are
// both taught and the compound is transparent.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT45 = {
  id: "id-u45",
  lang: "id",
  title: "Darah, tulang, dan luka",
  order: 45,
  stage: "a2",
  lessons: [
    {
      id: "id-u45l1",
      unit: 45,
      lesson: 1,
      title: "Di dalam badan",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name what is inside the body — blood, heart, bone, muscle, skin — and say whether someone is breathing easily.",
      items: [
        { id: "id-u45l1-darah", type: "vocab", front: "darah", reading: "darah", meaning: "blood", example: { jp: "Ada darah di tangan anak itu.", en: "There is blood on that child's hand." }, accept: ["the blood", "bloodstream", "bodily blood"], drill: { jp: "Darah di luka itu sudah kering", en: "The blood on that wound has dried" }, hint: "DAH-rah, both a's open and the h sounded lightly. Also used for family line, exactly as English says blood relative: saudara sedarah. Tekanan darah is blood pressure, and darah tinggi — high blood — is how Indonesians say hypertension." },
        { id: "id-u45l1-jantung", type: "vocab", front: "jantung", reading: "jantung", meaning: "the heart", example: { jp: "Jantung saya bekerja cepat sekali.", en: "My heart is working very fast." }, accept: ["the heart organ", "the pump in the chest", "your heartbeat"], drill: { jp: "Dokter memeriksa jantung anak itu", en: "The doctor checks that child's heart" }, hint: "JAHN-toong. ⚠️ THE ORGAN ONLY. Indonesian splits what English calls the heart in two: jantung is the pump, and hati — literally the liver — is the seat of feeling. So sakit jantung is heart disease, but sakit hati is hurt feelings. Never swap them." },
        { id: "id-u45l1-tulang", type: "vocab", front: "tulang", reading: "tulang", meaning: "a bone", example: { jp: "Tulang kaki saya sakit.", en: "The bone in my leg hurts." }, accept: ["a bone in the body", "bone as a material", "the skeleton"], drill: { jp: "Tulang itu keras dan panjang", en: "That bone is hard and long" }, hint: "TOO-lang. One bone or bone in general, and also a fish bone, so it turns up at dinner as often as at the doctor's. Tulang belakang, the bone at the back, is the spine — a useful pairing with belakang, which you already know." },
        { id: "id-u45l1-otot", type: "vocab", front: "otot", reading: "otot", meaning: "a muscle", example: { jp: "Otot tangan saya lelah sekali.", en: "The muscles in my arm are very tired." }, accept: ["muscle tissue", "the muscles", "a body muscle"], drill: { jp: "Otot kaki dia sangat kuat", en: "His leg muscles are very strong" }, hint: "OH-tot, both o's short, final t barely released. Berotot means muscular. It is also used for sheer force in an argument — main otot, to use muscle rather than reason." },
        { id: "id-u45l1-kulit", type: "vocab", front: "kulit", reading: "kulit", meaning: "skin", example: { jp: "Kulit bayi itu sangat halus.", en: "That baby's skin is very smooth." }, accept: ["the skin", "hide", "the outer layer of a body"], drill: { jp: "Kulit tangan saya kering sekali", en: "The skin on my hands is very dry" }, hint: "KOO-leet. The outer layer of anything living: human skin, animal hide, and the peel of a fruit — kulit buah. Made into leather it is still kulit, so tas kulit is a leather bag. The face itself is wajah, which you already know." },
        { id: "id-u45l1-bernapas", type: "vocab", front: "bernapas", reading: "bernapas", meaning: "to breathe", example: { jp: "Anak itu susah bernapas.", en: "That child is having trouble breathing." }, accept: ["to take a breath", "to draw breath", "to respire"], drill: { jp: "Dia bernapas pelan-pelan di kamar", en: "He breathes slowly in the room" }, hint: "buhr-NAH-pas. The ber- makes a state you are in rather than something you do to a thing. The noun is napas, a breath — tarik napas, take a breath, using menarik which you met for to pull. Also spelled nafas in older writing." },
      ],
    },
    {
      id: "id-u45l2",
      unit: 45,
      lesson: 2,
      title: "Leher sampai jari",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Point to the parts of the body A1 skipped — the neck, chest, back, knee, shoulder and fingers — and say which one hurts.",
      items: [
        { id: "id-u45l2-leher", type: "vocab", front: "leher", reading: "leher", meaning: "the neck", example: { jp: "Leher saya sakit sejak pagi.", en: "My neck has hurt since this morning." }, accept: ["the throat area", "the neck part", "where the head joins the body"], drill: { jp: "Leher anak itu panjang dan kecil", en: "That child's neck is long and small" }, hint: "LEH-hehr, both e's open and the h clearly sounded between them. It covers the outside of the neck; for the throat you swallow with, Indonesians say tenggorokan. Sakit leher is a stiff neck." },
        { id: "id-u45l2-dada", type: "vocab", front: "dada", reading: "dada", meaning: "the chest", example: { jp: "Dada saya sakit ketika bernapas.", en: "My chest hurts when I breathe." }, accept: ["the breast area", "the front of the torso", "the ribcage"], drill: { jp: "Dokter memeriksa dada orang itu", en: "The doctor checks that person's chest" }, hint: "DAH-da, both syllables the same. The whole front of the upper body. ⚠️ Not a reduplication despite the shape — dada is simply a two-syllable word, unlike sama-sama or hati-hati where the doubling does work. Dada ayam is chicken breast." },
        { id: "id-u45l2-punggung", type: "vocab", front: "punggung", reading: "punggung", meaning: "the back of the body", example: { jp: "Punggung ayah saya sering sakit.", en: "My father's back often hurts." }, accept: ["the spine side", "your back", "the rear of the torso"], drill: { jp: "Punggung saya sakit karena kursi itu", en: "My back hurts because of that chair" }, hint: "POONG-goong — ngg twice over, so it is the hum plus a hard g in both halves. ⚠️ You already know belakang for behind, which is a POSITION; punggung is the body part. Sakit punggung is backache, a complaint you will hear constantly." },
        { id: "id-u45l2-lutut", type: "vocab", front: "lutut", reading: "lutut", meaning: "the knee", example: { jp: "Lutut saya sakit setelah berjalan jauh.", en: "My knee hurt after walking a long way." }, accept: ["the knee joint", "where the leg bends", "the kneecap area"], drill: { jp: "Lutut anak itu kotor dan luka", en: "That child's knee is dirty and cut" }, hint: "LOO-toot. Berlutut is to kneel. The word is short and easy to confuse with lutut's near neighbour lurus, straight — which you know — so say them side by side once and the difference sticks." },
        { id: "id-u45l2-bahu", type: "vocab", front: "bahu", reading: "bahu", meaning: "the shoulder", example: { jp: "Bahu kanan saya sangat sakit.", en: "My right shoulder hurts a lot." }, accept: ["the shoulder joint", "where the arm meets the body", "your shoulders"], drill: { jp: "Dia membawa tas di bahu kiri", en: "He carries the bag on his left shoulder" }, hint: "BAH-hoo, the h sounded. Bahu jalan is the hard shoulder of a road, the same image English uses. ⚠️ Note that A1's tangan covers both hand and arm, so the shoulder is the first point on the arm Indonesian names separately." },
        { id: "id-u45l2-jari", type: "vocab", front: "jari", reading: "jari", meaning: "a finger", example: { jp: "Jari saya kecil dan pendek.", en: "My fingers are small and short." }, accept: ["a finger or toe", "the fingers", "a digit of the hand"], drill: { jp: "Ada lima jari di tangan kanan", en: "There are five fingers on the right hand" }, hint: "JAH-ree. One word for fingers AND toes — jari tangan and jari kaki when you must be exact. Jari tengah, using tengah which you now know, is the middle finger. Not to be confused with jarak, a distance, or jarang, rarely." },
      ],
    },
    {
      id: "id-u45l3",
      unit: 45,
      lesson: 3,
      title: "Luka dan kecelakaan",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Report that something has gone wrong with a body — a wound, a crash, a break, a faint — and say when a thing is poisonous or catching.",
      items: [
        { id: "id-u45l3-luka", type: "vocab", front: "luka", reading: "luka", meaning: "a wound", example: { jp: "Ada luka kecil di kaki saya.", en: "There is a small wound on my foot." }, accept: ["an injury", "a gash", "a sore place"], drill: { jp: "Luka itu sakit dan sangat merah", en: "That wound hurts and is very red" }, hint: "LOO-ka. Both the noun and the state: dia luka means he is injured, with no extra word. Melukai is to injure someone. ⚠️ Sakit, which you know, is the FEELING of pain or being ill; luka is the physical damage." },
        { id: "id-u45l3-kecelakaan", type: "vocab", front: "kecelakaan", reading: "kecelakaan", meaning: "an accident", example: { jp: "Ada kecelakaan di jalan besar itu.", en: "There was an accident on that main road." }, accept: ["a crash", "a mishap", "an unlucky event"], drill: { jp: "Kecelakaan itu terjadi pada malam Sabtu", en: "That accident happened on Saturday night" }, hint: "kuh-chuh-lah-KAH-an — five syllables, c is CH. Built on celaka, misfortune, in the ke-…-an frame you met in kecepatan. It is the standard word on a news report or a police form, and it covers a road crash, a fall and a workplace injury alike." },
        { id: "id-u45l3-patah", type: "vocab", front: "patah", reading: "patah", meaning: "to be broken in two", example: { jp: "Tulang tangan dia patah.", en: "The bone in his arm is broken." }, accept: ["snapped", "fractured", "broken across"], drill: { jp: "Kursi itu patah karena terlalu berat", en: "That chair snapped because it was too heavy" }, hint: "PAH-tah. ⚠️ Keep it apart from rusak, which you know as broken: rusak is a thing that no longer WORKS, patah is a thing SNAPPED IN TWO. A phone is rusak; a bone or a stick is patah. Patah hati — a snapped liver — is heartbroken." },
        { id: "id-u45l3-pingsan", type: "vocab", front: "pingsan", reading: "pingsan", meaning: "to faint", example: { jp: "Anak itu pingsan di kelas pagi ini.", en: "That child fainted in class this morning." }, accept: ["to pass out", "to black out", "to lose consciousness"], drill: { jp: "Dia pingsan karena terlalu lelah", en: "He fainted because he was too tired" }, hint: "PEENG-san. A complete word in itself — no verb needed, just dia pingsan. Its opposite is sadar, which you know as aware: dia sudah sadar means he has come round. Pusing, dizzy, is the warning sign before it." },
        { id: "id-u45l3-racun", type: "vocab", front: "racun", reading: "racun", meaning: "poison", example: { jp: "Ada racun di obat lama itu.", en: "There is poison in that old medicine." }, accept: ["a toxic substance", "venom", "something that poisons"], drill: { jp: "Racun itu masuk ke dalam darah", en: "That poison got into the bloodstream" }, hint: "RAH-choon — c is CH. One word for poison and venom alike. Beracun is the adjective, poisonous, and meracuni is to poison someone. Keracunan is food poisoning, which is the sense you are most likely to need." },
        { id: "id-u45l3-menular", type: "vocab", front: "menular", reading: "menular", meaning: "to be catching", example: { jp: "Batuk itu menular dengan cepat.", en: "That cough spreads quickly." }, accept: ["infectious", "to spread from person to person", "contagious"], drill: { jp: "Pilek anak itu menular ke saya", en: "That child's cold spread to me" }, hint: "muh-NOO-lar. Said of the ILLNESS, not the person: penyakit menular is a contagious disease, and you never say a person menular. It takes ke plus whoever caught it. Tertular is to have caught something from someone." },
      ],
    },
    {
      id: "id-u45l4",
      unit: 45,
      lesson: 4,
      title: "Perawat dan obat",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Get someone treated — call the ambulance, see the nurse, take the prescription, and face the needle or the operating table.",
      items: [
        { id: "id-u45l4-perawat", type: "vocab", front: "perawat", reading: "perawat", meaning: "a nurse", example: { jp: "Perawat itu sangat ramah dan sabar.", en: "That nurse is very friendly and patient." }, accept: ["a hospital carer", "someone who nurses the sick", "a care worker"], drill: { jp: "Perawat memeriksa luka di kaki saya", en: "The nurse checks the wound on my foot" }, hint: "puh-RAH-wat. From rawat, to care for — merawat is to nurse or look after, and perawatan is the care itself. The pe- doer shape, the same as pelajar off ajar. Suster is also widely heard for a female nurse, from Dutch." },
        { id: "id-u45l4-resep", type: "vocab", front: "resep", reading: "resep", meaning: "a prescription", example: { jp: "Dokter memberi resep untuk obat itu.", en: "The doctor gave a prescription for that medicine." }, accept: ["a doctor's note for medicine", "a written order for a drug", "a recipe"], drill: { jp: "Saya membawa resep ke apotek", en: "I take the prescription to the pharmacy" }, hint: "RUH-suhp, both e's swallowed. ⚠️ THE SAME WORD IS A COOKING RECIPE — resep masakan — because both are a written set of instructions. Dutch recept. You take it to the apotek, which you already know." },
        { id: "id-u45l4-suntik", type: "vocab", front: "suntik", reading: "suntik", meaning: "an injection", example: { jp: "Anak itu takut suntik.", en: "That child is afraid of injections." }, accept: ["a jab", "a shot from a needle", "a syringe dose"], drill: { jp: "Suntik itu sakit sekali di bahu", en: "That injection really hurt in the shoulder" }, hint: "SOON-teek. Noun and verb at once: takut suntik, afraid of injections, and menyuntik, to inject. Suntikan is the dose itself. A vaccination is a suntik, so this is the word on any clinic sign." },
        { id: "id-u45l4-operasi", type: "vocab", front: "operasi", reading: "operasi", meaning: "surgery", example: { jp: "Operasi itu berhasil dan cepat.", en: "That surgery was successful and quick." }, accept: ["an operation on a patient", "a surgical procedure", "going under the knife"], drill: { jp: "Dia ada operasi pada hari Rabu", en: "He has surgery on Wednesday" }, hint: "oh-puh-RAH-see, four syllables, no stress on the first. ⚠️ It also means an operation in the police or military sense — operasi polisi — so context decides. Dioperasi, to be operated on, is the form you will hear in a hospital." },
        { id: "id-u45l4-mengobati", type: "vocab", front: "mengobati", reading: "mengobati", meaning: "to treat a patient", example: { jp: "Dokter mengobati luka di kaki saya.", en: "The doctor treated the wound on my foot." }, accept: ["to give treatment to", "to tend to someone ill", "to medicate"], drill: { jp: "Perawat mengobati anak yang sakit", en: "The nurse treats the child who is ill" }, hint: "muh-ngoh-BAH-tee. Built straight on obat, medicine, which you know — treating someone is giving them medicine. Pengobatan is the course of treatment. Note it takes the PERSON or the wound as its object, never the illness." },
        { id: "id-u45l4-ambulans", type: "vocab", front: "ambulans", reading: "ambulans", meaning: "an ambulance", example: { jp: "Ambulans datang dengan sangat cepat.", en: "The ambulance came very quickly." }, accept: ["an emergency vehicle", "the hospital van", "a medical van"], drill: { jp: "Ambulans itu membawa orang ke rumah sakit", en: "That ambulance takes people to the hospital" }, hint: "AHM-boo-lans. Note the spelling: no final e, and an s where English has ce — Indonesian writes what it hears. Stress is even across the three syllables, unlike the heavy English first syllable." },
      ],
    },
  ],
};
