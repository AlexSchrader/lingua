// ID Unit 10 — Menggambarkan sesuatu ("Describing things") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u8–u14), authored 2026-09-27. The 12 conventions in unit1.js BIND
// this file. Slot retitled from the scaffold's English "Describing things".
//
// 24 adjectives in OPPOSITE PAIRS, which is the whole design: Indonesian
// adjectives never inflect and never agree, so the only thing a learner can get
// wrong is picking the wrong member of a pair. Every lesson is three pairs.
//   l1  besar/kecil · tinggi/pendek · panjang + berat
//   l2  baru/lama · ringan/kuat · penuh/kosong
//   l3  bagus/jelek · cantik · bersih/kotor · penting
//   l4  cepat/lambat · mudah/susah · ramai/sepi
//
// ⚠️ THE NEAR-SYNONYM TRAP IS THE REAL HAZARD HERE, and every one of these is
// handled in a hint rather than left for the learner to discover:
//   bagus vs baik     — bagus is QUALITY, baik is character or health. It is why
//                       apa kabar is answered baik and never bagus.
//   penuh vs kenyang  — penuh is a full container, kenyang is a full stomach.
//   lama vs tua       — lama is an old OBJECT, tua an old PERSON. Calling a
//                       person lama is rude rather than wrong, so it is said.
//   ramai vs sibuk    — ramai is a crowded PLACE, sibuk a busy PERSON.
//   terang vs ringan  — English "light" is two different Indonesian words.
//
// ⚠️ ACCEPT-LIST OVERLAP THIS UNIT COULD NOT FIX, flagged for the block-1 lead:
// `baik` (u2) and `enak` (u6) both already carry "good" in their accept[], so
// with `bagus` glossed "good" the string is accepted by three cards. No gloss
// COLLISION exists (baik="fine", enak="delicious", bagus="good" are three
// distinct meanings) and nothing fails, but "good" is now a three-way answer.
// Fixing it means editing two merged block-1 units, which is not block 2's lane
// — `bagus`'s hint draws the bagus/baik line explicitly instead.
//
// SCOPE NOTE: `tetapi`, `untuk`, `karena`, `ini`, `itu` are all u12's, so not
// one example in this unit can say "small BUT clean" or "dirty BECAUSE it
// rained" — the two most natural frames for an adjective. Every example here
// coordinates with `dan` instead, or states the adjective bare.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT10 = {
  id: "id-u10",
  lang: "id",
  title: "Menggambarkan sesuatu",
  order: 10,
  stage: "a1",
  lessons: [
    {
      id: "id-u10l1",
      unit: 10,
      lesson: 1,
      title: "Besar dan kecil — rumah, mobil, orang",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Say how big, tall or long a thing is, and supply the right opposite when someone gets it wrong.",
      items: [
        { id: "id-u10l1-besar", type: "vocab", front: "besar", reading: "besar", meaning: "big", example: { jp: "Rumah nenek saya besar sekali.", en: "My grandmother's house is very big." }, accept: ["large", "great", "big in size"], drill: { jp: "Rumah nenek Budi besar sekali", en: "Budi's grandmother's house is very big" }, hint: "buh-SAR — swallowed first e, one light tap on the r. It carries physical size and also importance: orang besar is a big shot, not a tall man." },
        { id: "id-u10l1-kecil", type: "vocab", front: "kecil", reading: "kecil", meaning: "small", example: { jp: "Kamar saya kecil dan gelap.", en: "My room is small and dark." }, accept: ["little", "tiny", "small in size"], drill: { jp: "Kamar Budi kecil dan gelap", en: "Budi's room is small and dark" }, hint: "kuh-CHEEL — c is CH, first e swallowed. Anak kecil, \"small child\", is the everyday way to say \"kid\"." },
        { id: "id-u10l1-tinggi", type: "vocab", front: "tinggi", reading: "tinggi", meaning: "tall", example: { jp: "Ayah saya tinggi dan kakak saya pendek.", en: "My father is tall and my older sibling is short." }, accept: ["high", "tall in height"], drill: { jp: "Ayah Budi tinggi dan kuat", en: "Budi's father is tall and strong" }, hint: "TING-ghee — ngg is the hum plus a hard g, and the final i is clipped. A tall person and a high price are both tinggi; Indonesian does not split the two the way English does." },
        { id: "id-u10l1-pendek", type: "vocab", front: "pendek", reading: "pendek", meaning: "short", example: { jp: "Jalan ke pasar pendek dan mudah.", en: "The road to the market is short and easy." }, accept: ["low", "short in length", "brief"], drill: { jp: "Jalan ke sekolah pendek dan mudah", en: "The road to school is short and easy" }, hint: "PEN-dek — both e's are the swallowed kind, so it lands closer to PUN-duk. It is the opposite of tinggi AND of panjang: a short person and a short road are both pendek." },
        { id: "id-u10l1-panjang", type: "vocab", front: "panjang", reading: "panjang", meaning: "long", example: { jp: "Jalan ke kota panjang sekali.", en: "The road to the city is very long." }, accept: ["lengthy", "long in length"], drill: { jp: "Jalan ke pasar panjang dan basah", en: "The road to the market is long and wet" }, hint: "PAHN-jahng — J of judge, hum on the end. Length in space and in time both: libur panjang is a long holiday." },
        { id: "id-u10l1-berat", type: "vocab", front: "berat", reading: "berat", meaning: "heavy", example: { jp: "Motor ayah saya sangat berat.", en: "My father's motorbike is very heavy." }, accept: ["weighty", "hard going", "a heavy weight"], drill: { jp: "Motor Budi sangat berat dan besar", en: "Budi's motorbike is very heavy and big" }, hint: "buh-RAHT — swallowed e. Weight, and by extension difficulty: pekerjaan berat is heavy work in either sense. Despite the look of it this is NOT a ber- prefix word — berat is a root all the way through." },
      ],
    },
    {
      id: "id-u10l2",
      unit: 10,
      lesson: 2,
      title: "Baru dan lama — mobil, rumah, payung",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Say whether a thing is new or old, and whether it is full, empty, strong or light to carry.",
      items: [
        { id: "id-u10l2-baru", type: "vocab", front: "baru", reading: "baru", meaning: "new", example: { jp: "Mobil kakak saya baru dan biru.", en: "My older sibling's car is new and blue." }, accept: ["brand new", "recent", "just now"], drill: { jp: "Mobil Budi baru dan sangat besar", en: "Budi's car is new and very big" }, hint: "BAH-roo. It also means \"just\": baru pergi is \"only just left\". Watch the neighbours — baru is new, biru is blue, and beras is uncooked rice. Three words, one letter apart each time." },
        { id: "id-u10l2-lama", type: "vocab", front: "lama", reading: "lama", meaning: "old", example: { jp: "Rumah kakek saya lama dan besar.", en: "My grandfather's house is old and big." }, accept: ["a long time", "old (of things)", "long"], drill: { jp: "Rumah kakek Budi lama dan gelap", en: "Budi's grandfather's house is old and dark" }, hint: "LAH-ma. Two jobs: an old OBJECT, and a long TIME — lama sekali is \"ages\". An old PERSON is tua, never lama; using lama about someone is rude rather than ungrammatical, which is exactly why it gets noticed." },
        { id: "id-u10l2-ringan", type: "vocab", front: "ringan", reading: "ringan", meaning: "light in weight", example: { jp: "Payung saya ringan dan kecil.", en: "My umbrella is light and small." }, accept: ["lightweight", "not heavy", "light to carry"], drill: { jp: "Payung Budi ringan dan sangat kecil", en: "Budi's umbrella is light and very small" }, hint: "REE-ngahn, hum in the middle. The opposite of berat, and it follows berat into difficulty as well: pekerjaan ringan is easy work. It NEVER means light as in bright — that is terang, a completely different word." },
        { id: "id-u10l2-kuat", type: "vocab", front: "kuat", reading: "kuat", meaning: "strong", example: { jp: "Angin di pasar sangat kuat sekarang.", en: "The wind at the market is very strong now." }, accept: ["powerful", "tough", "firm"], drill: { jp: "Angin di kota sangat kuat sekarang", en: "The wind in the city is very strong now" }, hint: "KOO-aht — two syllables, both vowels sounded separately. Strong wind, strong coffee, strong person, all kuat. Kopi kuat is the cup that keeps you awake." },
        { id: "id-u10l2-penuh", type: "vocab", front: "penuh", reading: "penuh", meaning: "full", example: { jp: "Pasar penuh orang setiap hari Sabtu.", en: "The market is full of people every Saturday." }, accept: ["filled", "packed", "full up"], drill: { jp: "Pasar penuh orang hari Sabtu", en: "The market is full of people on Saturday" }, hint: "puh-NOOH — swallowed e, breathed h. It is full OF something: penuh orang, penuh air. Full after eating is kenyang instead — penuh is about the container, kenyang about your stomach." },
        { id: "id-u10l2-kosong", type: "vocab", front: "kosong", reading: "kosong", meaning: "empty", example: { jp: "Kamar kakak saya kosong dan bersih.", en: "My older sibling's room is empty and clean." }, accept: ["vacant", "blank", "unoccupied"], drill: { jp: "Kamar Budi kosong dan sangat gelap", en: "Budi's room is empty and very dark" }, hint: "KOH-song, hum at the end. Opposite of penuh — and it is also how the digit zero is SAID out loud in a phone number. Nol is the written zero, kosong the spoken one." },
      ],
    },
    {
      id: "id-u10l3",
      unit: 10,
      lesson: 3,
      title: "Bagus, cantik, dan bersih",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Give an opinion on how something looks, and say whether a place is clean or dirty.",
      items: [
        { id: "id-u10l3-bagus", type: "vocab", front: "bagus", reading: "bagus", meaning: "good", example: { jp: "Cuaca hari Minggu bagus sekali.", en: "Sunday's weather is really good." }, accept: ["great", "nice", "excellent", "of good quality"], drill: { jp: "Cuaca hari Sabtu bagus sekali", en: "Saturday's weather is really good" }, hint: "BAH-goos. Bagus is good QUALITY — a good film, good weather, good work. Baik is good CHARACTER or good health, and that is why apa kabar is answered baik and never bagus. Get this pair the wrong way round and you will be understood but marked as a beginner." },
        { id: "id-u10l3-cantik", type: "vocab", front: "cantik", reading: "cantik", meaning: "beautiful", example: { jp: "Langit di Bali sangat cantik.", en: "The sky in Bali is very beautiful." }, accept: ["pretty", "lovely", "good-looking"], drill: { jp: "Langit di kota saya sangat cantik", en: "The sky in my city is very beautiful" }, hint: "CHAHN-tik — c is CH. Said of women, places, flowers and views. A handsome man is ganteng, not cantik, and the two are not interchangeable." },
        { id: "id-u10l3-jelek", type: "vocab", front: "jelek", reading: "jelek", meaning: "ugly", example: { jp: "Cuaca hari Senin jelek dan hujan.", en: "Monday's weather is bad and rainy." }, accept: ["bad", "unpleasant", "poor quality"], drill: { jp: "Cuaca hari Senin jelek dan basah", en: "Monday's weather is bad and wet" }, hint: "JUH-lek — both e's swallowed. The opposite of bagus AND of cantik: bad weather, bad quality, or plain ugly. Blunter than English \"not very nice\", so aim it at things sooner than at people." },
        { id: "id-u10l3-bersih", type: "vocab", front: "bersih", reading: "bersih", meaning: "clean", example: { jp: "Dapur ibu saya bersih sekali.", en: "My mother's kitchen is very clean." }, accept: ["tidy", "spotless", "hygienic"], drill: { jp: "Dapur ibu Budi bersih sekali", en: "Budi's mother's kitchen is very clean" }, hint: "buhr-SEEH — swallowed first e, breathed h. Air bersih is clean drinking water and you will read it on signs everywhere. Not a ber- prefix word: bersih is a root." },
        { id: "id-u10l3-kotor", type: "vocab", front: "kotor", reading: "kotor", meaning: "dirty", example: { jp: "Jalan ke pasar kotor dan basah.", en: "The road to the market is dirty and wet." }, accept: ["filthy", "unclean", "messy"], drill: { jp: "Jalan ke sekolah kotor dan basah", en: "The road to school is dirty and wet" }, hint: "KOH-tor. The opposite of bersih. Both o's are the closed oh of \"go\", never the flat aw of English \"cot\"." },
        { id: "id-u10l3-penting", type: "vocab", front: "penting", reading: "penting", meaning: "important", example: { jp: "Bahasa Indonesia sangat penting di Bali.", en: "Indonesian is very important in Bali." }, accept: ["significant", "crucial", "matters"], drill: { jp: "Bahasa Indonesia sangat penting di kota", en: "Indonesian is very important in the city" }, hint: "PEN-ting — swallowed e, hum at the end. Tidak penting is the ordinary way to wave something away: \"doesn't matter\"." },
      ],
    },
    {
      id: "id-u10l4",
      unit: 10,
      lesson: 4,
      title: "Cepat dan lambat — jalan dan kota",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Say how fast something is, how hard it is, and whether a place is crowded or deserted.",
      items: [
        { id: "id-u10l4-cepat", type: "vocab", front: "cepat", reading: "cepat", meaning: "fast", example: { jp: "Kereta ke kota cepat sekali.", en: "The train to the city is very fast." }, accept: ["quick", "rapid", "quickly", "hurry"], drill: { jp: "Kereta ke Bali cepat sekali", en: "The train to Bali is very fast" }, hint: "chuh-PAHT — c is CH, first e swallowed. On its own, Cepat! is \"hurry up!\". It covers fast and soon with the same word." },
        { id: "id-u10l4-lambat", type: "vocab", front: "lambat", reading: "lambat", meaning: "slow", example: { jp: "Mobil di jalan sangat lambat sekarang.", en: "The cars on the road are very slow now." }, accept: ["sluggish", "slowly", "not fast"], drill: { jp: "Mobil di jalan lambat sekarang", en: "The cars on the road are slow now" }, hint: "LAHM-baht. The opposite of cepat. Pelan is the other word you will hear — pelan is moving gently or speaking quietly, lambat is taking too long." },
        { id: "id-u10l4-mudah", type: "vocab", front: "mudah", reading: "mudah", meaning: "easy", example: { jp: "Jalan ke pasar mudah dan pendek.", en: "The way to the market is easy and short." }, accept: ["simple", "not hard", "straightforward"], drill: { jp: "Jalan ke sekolah mudah dan pendek", en: "The way to school is easy and short" }, hint: "MOO-dah, breathed h. Gampang is the casual twin and just as common in speech. The doubled mudah-mudahan is a separate word meaning \"hopefully\"." },
        { id: "id-u10l4-susah", type: "vocab", front: "susah", reading: "susah", meaning: "difficult", example: { jp: "Pekerjaan ayah saya sangat susah.", en: "My father's job is very difficult." }, accept: ["hard", "tough", "not easy"], drill: { jp: "Pekerjaan ayah Budi sangat susah", en: "Budi's father's job is very difficult" }, hint: "SOO-sah. Opposite of mudah. It also reaches into being troubled about something — susah hati is \"heavy-hearted\". Sulit is the more formal twin you will meet in writing." },
        { id: "id-u10l4-ramai", type: "vocab", front: "ramai", reading: "ramai", meaning: "crowded", example: { jp: "Pasar ramai setiap hari Sabtu.", en: "The market is crowded every Saturday." }, accept: ["busy with people", "lively", "bustling", "packed"], drill: { jp: "Pasar ramai setiap hari Minggu", en: "The market is crowded every Sunday" }, hint: "RAH-my — the ai is one sound, like English \"my\". Crowded in a GOOD way: a lively market, a street with life in it, a party with a turnout. Not sibuk, which is about one person's schedule." },
        { id: "id-u10l4-sepi", type: "vocab", front: "sepi", reading: "sepi", meaning: "quiet", example: { jp: "Kota sepi hari Minggu pagi.", en: "The city is quiet on Sunday morning." }, accept: ["deserted", "empty of people", "still"], drill: { jp: "Jalan sepi hari Minggu pagi", en: "The street is quiet on Sunday morning" }, hint: "SUH-pee — swallowed e. The opposite of ramai: empty of people, and a little lonely with it. A shop that is sepi is a shop in trouble." },
      ],
    },
  ],
};
