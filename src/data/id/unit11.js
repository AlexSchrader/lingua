// ID Unit 11 — Badan dan kesehatan ("Body and health") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u8–u14), authored 2026-09-27. The 12 conventions in unit1.js BIND
// this file. Slot retitled from the scaffold's English "Body and health".
//
// TITLED WITH THE WORD IT ACTUALLY TEACHES. The obvious rendering is "Tubuh dan
// kesehatan", and `tubuh` is the word a dictionary gives for body — but it is
// the formal/anatomical one, and convention 7 says the everyday spoken form is
// the card where both are universally understood. So `badan` is the card, `tubuh`
// is in its hint, and the unit is named after the card. A title naming a word the
// unit never teaches is how a slot title starts drifting from its content.
//
//   l1  the parts you can point at — kepala, tangan, kaki, mata, mulut, hidung
//   l2  face and torso — telinga, gigi, perut, badan, rambut, wajah
//   l3  symptoms — sakit, demam, batuk, pusing, lelah, pilek
//   l4  the fix — dokter, obat, sehat, rumah sakit, apotek, sembuh
//
// ⚠️ TWO WORDS DO A JOB ENGLISH SPLITS IN TWO, and both are said in the hints:
// `tangan` is hand AND arm, `kaki` is foot AND leg. Indonesian simply does not
// make the cut, so a learner looking for "arm" and "leg" will look forever.
//
// `sakit` IS THE HINGE OF THE UNIT and it is deliberately in l3, not l1. It is
// both "the person is ill" (saya sakit) and "the part hurts" (kaki saya sakit),
// and prefixed to a body part it names the ailment (sakit kepala · sakit gigi ·
// sakit perut). Teaching it AFTER the body parts means every one of those
// compounds is available the moment it lands.
// ⚠️ `rumah sakit` (l4) and `sakit` (l3) are in different lessons on purpose, and
// `sakit`'s drill is checked to contain no "rumah sakit" — `findWholeWord` finds
// `sakit` inside it and a cloze would blank half the compound.
//
// DELIBERATELY DEFERRED, not a gap: `kesehatan` (health, the ke-…-an noun built
// on `sehat`) is named in `sehat`'s hint rather than carded. Convention 3 would
// license it as a separate word, but `sehat` is the A1-useful half and the 24
// slots are spent on parts and symptoms the learner needs first. Also uncarded
// and named in hints only: `tua`, `muka`, `capek`, `matahari`, `mata air`.
//
// SCOPE NOTE: `karena` is u12's, and "my stomach hurts BECAUSE I ate spicy food"
// is the single most natural sentence this unit could write. It cannot. Every
// symptom example coordinates with `dan` instead.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT11 = {
  id: "id-u11",
  lang: "id",
  title: "Badan dan kesehatan",
  order: 11,
  stage: "a1",
  lessons: [
    {
      id: "id-u11l1",
      unit: 11,
      lesson: 1,
      title: "Kepala, tangan, dan kaki",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Name the parts of the body you can point to on yourself, and describe one with a colour or a size.",
      items: [
        { id: "id-u11l1-kepala", type: "vocab", front: "kepala", reading: "kepala", meaning: "head", example: { jp: "Kepala saya besar dan rambut saya hitam.", en: "My head is big and my hair is black." }, accept: ["the head", "a head"], drill: { jp: "Kepala Budi besar dan rambut hitam", en: "Budi's head is big and his hair is black" }, hint: "kuh-PAH-la — swallowed first e. It is also the boss: kepala sekolah is the head teacher, kepala kantor the office head. The same metaphor English uses." },
        { id: "id-u11l1-tangan", type: "vocab", front: "tangan", reading: "tangan", meaning: "hand", example: { jp: "Tangan saya kotor dan saya mau air bersih.", en: "My hands are dirty and I want clean water." }, accept: ["hands", "the hand", "arm"], drill: { jp: "Tangan Budi kotor dan basah", en: "Budi's hands are dirty and wet" }, hint: "TAH-ngahn, hum in the middle. It covers hand AND arm — Indonesian does not divide them, so tangan kanan is your right hand or your right arm depending on what you are doing with it." },
        { id: "id-u11l1-kaki", type: "vocab", front: "kaki", reading: "kaki", meaning: "foot", example: { jp: "Kaki kakek saya lelah dan berat.", en: "My grandfather's legs are tired and heavy." }, accept: ["feet", "leg", "the foot"], drill: { jp: "Kaki kakek Budi lelah dan berat", en: "Budi's grandfather's legs are tired and heavy" }, hint: "KAH-kee. Foot AND leg in one word, the same economy as tangan. Kaki lima — \"five legs\" — is a street food cart, and kaki gunung is the foot of a mountain." },
        { id: "id-u11l1-mata", type: "vocab", front: "mata", reading: "mata", meaning: "eye", example: { jp: "Mata ibu saya cokelat dan cantik.", en: "My mother's eyes are brown and beautiful." }, accept: ["eyes", "the eye"], drill: { jp: "Mata ibu Budi cokelat dan besar", en: "Budi's mother's eyes are brown and big" }, hint: "MAH-ta. Two compounds are built on it and neither is carded here, so recognise them when they turn up: matahari, \"eye of the day\", is the sun, and mata air, \"eye of water\", is a spring." },
        { id: "id-u11l1-mulut", type: "vocab", front: "mulut", reading: "mulut", meaning: "mouth", example: { jp: "Mulut saya kering dan saya sangat haus.", en: "My mouth is dry and I am very thirsty." }, accept: ["the mouth", "a mouth"], drill: { jp: "Mulut Budi kering dan dia haus", en: "Budi's mouth is dry and he is thirsty" }, hint: "MOO-loot — both u's are the OO of \"food\". Say the final t; without it you have mulu, which is nothing. Keep it clear of mulai, to begin." },
        { id: "id-u11l1-hidung", type: "vocab", front: "hidung", reading: "hidung", meaning: "nose", example: { jp: "Hidung anak saya merah dan basah.", en: "My child's nose is red and runny." }, accept: ["the nose", "a nose"], drill: { jp: "Hidung anak Budi merah dan basah", en: "Budi's child's nose is red and runny" }, hint: "HEE-doong, hum at the end. Hidung mancung — a high, sharp nose — counts as a compliment here, and it comes up more often than an English speaker expects." },
      ],
    },
    {
      id: "id-u11l2",
      unit: 11,
      lesson: 2,
      title: "Wajah, gigi, dan perut",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Name the parts of the face and torso and describe someone else's, not just your own.",
      items: [
        { id: "id-u11l2-telinga", type: "vocab", front: "telinga", reading: "telinga", meaning: "ear", example: { jp: "Telinga kucing saya kecil dan hitam.", en: "My cat's ears are small and black." }, accept: ["ears", "the ear"], drill: { jp: "Telinga kucing Budi kecil dan hitam", en: "Budi's cat's ears are small and black" }, hint: "tuh-LEE-nga — swallowed first e, hum before the last vowel. Three syllables with the stress on the middle one." },
        { id: "id-u11l2-gigi", type: "vocab", front: "gigi", reading: "gigi", meaning: "tooth", example: { jp: "Gigi saya sakit dan saya mau ke dokter.", en: "My tooth hurts and I want to go to the doctor." }, accept: ["teeth", "the tooth"], drill: { jp: "Gigi Budi sakit dan dia pergi", en: "Budi's tooth hurts and he is going" }, hint: "GEE-ghee — both g's hard as in \"give\", never the soft g of \"gem\". Sakit gigi is toothache; tanggal is what a baby tooth does." },
        { id: "id-u11l2-perut", type: "vocab", front: "perut", reading: "perut", meaning: "stomach", example: { jp: "Perut saya sakit dan saya tidak lapar.", en: "My stomach hurts and I am not hungry." }, accept: ["belly", "the stomach", "tummy"], drill: { jp: "Perut Budi sakit dan tidak lapar", en: "Budi's stomach hurts and he is not hungry" }, hint: "puh-ROOT — swallowed e. Sakit perut is a stomach ache and it is far and away the commonest complaint a visitor has here. Not a per- prefix word; perut is a root." },
        { id: "id-u11l2-badan", type: "vocab", front: "badan", reading: "badan", meaning: "body", example: { jp: "Badan saya panas dan saya sakit.", en: "My body is hot and I am ill." }, accept: ["the body", "physique", "build"], drill: { jp: "Badan Budi panas dan dia sakit", en: "Budi's body is hot and he is ill" }, hint: "BAH-dahn. The everyday word; tubuh is the formal, anatomical one from a doctor's leaflet. Badan panas — \"hot body\" — is how most Indonesians report a fever before they reach for demam." },
        { id: "id-u11l2-rambut", type: "vocab", front: "rambut", reading: "rambut", meaning: "hair", example: { jp: "Rambut nenek saya putih dan panjang.", en: "My grandmother's hair is white and long." }, accept: ["the hair", "hair on the head"], drill: { jp: "Rambut nenek Budi putih dan panjang", en: "Budi's grandmother's hair is white and long" }, hint: "RAHM-boot. Head hair only. Keep it apart from Rabu, Wednesday — rambut has the m and the t, Rabu has neither." },
        { id: "id-u11l2-wajah", type: "vocab", front: "wajah", reading: "wajah", meaning: "face", example: { jp: "Wajah Siti cantik dan bersih.", en: "Siti's face is beautiful and clear." }, accept: ["the face", "a face", "countenance"], drill: { jp: "Wajah Budi bersih dan sangat cerah", en: "Budi's face is clean and very bright" }, hint: "WAH-jah — J of judge, breathed h. Muka is the commoner spoken word for the same thing; wajah is a shade more polite and is what you meet in writing." },
      ],
    },
    {
      id: "id-u11l3",
      unit: 11,
      lesson: 3,
      title: "Waktu sakit — demam dan batuk",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Tell a doctor or a friend what is wrong, using sakit with a body part or a symptom word on its own.",
      items: [
        { id: "id-u11l3-sakit", type: "vocab", front: "sakit", reading: "sakit", meaning: "ill", example: { jp: "Saya sakit dan tidak pergi ke kantor.", en: "I am ill and not going to the office." }, accept: ["sick", "to hurt", "painful", "in pain"], drill: { jp: "Budi sakit dan tidak pergi sekarang", en: "Budi is ill and not going now" }, hint: "SAH-kit — the hinge of this whole unit. Two jobs at once: the PERSON is ill (saya sakit) and the PART hurts (kaki saya sakit). Put it in FRONT of a body part and you name the ailment: sakit kepala, sakit gigi, sakit perut." },
        { id: "id-u11l3-demam", type: "vocab", front: "demam", reading: "demam", meaning: "fever", example: { jp: "Anak saya demam dan tidak mau makan.", en: "My child has a fever and does not want to eat." }, accept: ["a fever", "high temperature", "feverish"], drill: { jp: "Anak Budi demam dan tidak makan", en: "Budi's child has a fever and is not eating" }, hint: "duh-MAHM — swallowed first e, both m's said. It is a verb as much as a noun: saya demam is \"I have a fever\", with nothing at all standing in for \"have\"." },
        { id: "id-u11l3-batuk", type: "vocab", front: "batuk", reading: "batuk", meaning: "cough", example: { jp: "Saya batuk setiap malam dan tidak bisa tidur.", en: "I cough every night and cannot sleep." }, accept: ["a cough", "to cough", "coughing"], drill: { jp: "Budi batuk setiap malam dan lelah", en: "Budi coughs every night and is tired" }, hint: "BAH-took. Verb and noun in one, the same way hujan is: saya batuk is the entire sentence \"I have a cough\". Obat batuk is cough medicine, and you can ask for it by that name." },
        { id: "id-u11l3-pusing", type: "vocab", front: "pusing", reading: "pusing", meaning: "dizzy", example: { jp: "Kepala saya pusing dan saya mau istirahat.", en: "My head is spinning and I want to rest." }, accept: ["light-headed", "giddy", "confused"], drill: { jp: "Kepala Budi pusing dan dia istirahat", en: "Budi's head is spinning and he is resting" }, hint: "POO-sing, hum at the end — literally the room turning. Indonesians stretch it to \"stressed out\" and to a plain headache, so pusing about a problem is as ordinary as pusing from standing up too fast." },
        { id: "id-u11l3-lelah", type: "vocab", front: "lelah", reading: "lelah", meaning: "tired", example: { jp: "Saya lelah dan mau tidur sekarang.", en: "I am tired and want to sleep now." }, accept: ["weary", "exhausted", "worn out"], drill: { jp: "Budi lelah dan mau tidur sekarang", en: "Budi is tired and wants to sleep now" }, hint: "luh-LAH — swallowed first e, breathed h. Capek is the everyday spoken word and you will hear it far more often; lelah is the written and polite one. Both are correct, so use whichever comes out." },
        { id: "id-u11l3-pilek", type: "vocab", front: "pilek", reading: "pilek", meaning: "head cold", example: { jp: "Saya pilek dan hidung saya basah.", en: "I have a cold and my nose is running." }, accept: ["head cold", "runny nose", "the sniffles"], drill: { jp: "Budi pilek dan hidung dia basah", en: "Budi has a cold and his nose is running" }, hint: "PEE-lek — swallowed second e. Specifically the runny nose, not the fever. Masuk angin is the vaguer local cousin, and flu is what people reach for when it is worse than this." },
      ],
    },
    {
      id: "id-u11l4",
      unit: 11,
      lesson: 4,
      title: "Ke dokter dan sembuh",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Get to a doctor or a pharmacy, ask for the right medicine by naming the complaint, and say you are better.",
      items: [
        { id: "id-u11l4-dokter", type: "vocab", front: "dokter", reading: "dokter", meaning: "doctor", example: { jp: "Anak saya sakit dan saya pergi ke dokter.", en: "My child is ill and I am going to the doctor." }, accept: ["a doctor", "physician", "the doctor"], drill: { jp: "Budi sakit dan pergi ke dokter", en: "Budi is ill and going to the doctor" }, hint: "DOK-ter — two syllables, swallowed final e, and none of the English \"-or\" sound on the end. Dokter gigi is a dentist, literally \"tooth doctor\"." },
        { id: "id-u11l4-obat", type: "vocab", front: "obat", reading: "obat", meaning: "medicine", example: { jp: "Saya mau obat batuk dan obat demam.", en: "I want cough medicine and fever medicine." }, accept: ["medication", "a drug", "remedy"], drill: { jp: "Budi mau obat batuk sekarang", en: "Budi wants cough medicine now" }, hint: "OH-baht. Name the complaint straight after it and you have the product: obat batuk, obat demam, obat sakit kepala. That is how you ask at a counter without knowing any brand." },
        { id: "id-u11l4-sehat", type: "vocab", front: "sehat", reading: "sehat", meaning: "healthy", example: { jp: "Saya sehat dan sangat kuat sekarang.", en: "I am healthy and very strong now." }, accept: ["in good health", "well", "fit"], drill: { jp: "Budi sehat dan sangat kuat sekarang", en: "Budi is healthy and very strong now" }, hint: "SEH-haht — the h between the vowels is sounded, so it is two clear syllables. The noun built on it is kesehatan, health, which is on every clinic sign in the country. Sehat is the opposite of sakit." },
        { id: "id-u11l4-rumahsakit", type: "vocab", front: "rumah sakit", reading: "rumahsakit", meaning: "hospital", example: { jp: "Rumah sakit di kota saya besar dan bersih.", en: "The hospital in my city is big and clean." }, accept: ["a hospital", "the hospital", "clinic"], drill: { jp: "Rumah sakit di kota besar sekali", en: "The hospital in the city is very big" }, hint: "Literally \"sick house\", said as one unit: roo-MAH SAH-kit. Neither half is optional and it is never shortened in speech. RS is the written abbreviation you will see on road signs." },
        { id: "id-u11l4-apotek", type: "vocab", front: "apotek", reading: "apotek", meaning: "pharmacy", example: { jp: "Apotek di pasar punya obat batuk.", en: "The pharmacy at the market has cough medicine." }, accept: ["a pharmacy", "chemist", "drugstore"], drill: { jp: "Apotek di kota punya obat demam", en: "The pharmacy in the city has fever medicine" }, hint: "ah-poh-TEK — three syllables, stress at the end, and no r anywhere in it. Most medicine here is bought straight over the counter at an apotek, which makes it a more useful word than it looks." },
        { id: "id-u11l4-sembuh", type: "vocab", front: "sembuh", reading: "sembuh", meaning: "to recover", example: { jp: "Anak saya sembuh dan pergi ke sekolah.", en: "My child has recovered and is going to school." }, accept: ["recover", "to get well", "be cured", "heal"], drill: { jp: "Anak Budi sembuh dan pergi ke sekolah", en: "Budi's child recovered and went to school" }, hint: "suhm-BOOH — swallowed first e, breathed h. Cepat sembuh! is what you say to anyone who is ill — \"get well soon\". It is the standard message, so learn it whole." },
      ],
    },
  ],
};
