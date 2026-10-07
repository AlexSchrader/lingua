// ID Unit 67 — Penyakit dan kebugaran ("Illness and fitness") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 2 (u64–u76). unit1.js's 12 conventions and unit21.js's 10 A2
// conventions BIND this file. RETITLED AND NARROWED from "Health and
// wellbeing".
//
// THE HOLE. Health was already spent TWICE, which is why "wellbeing" had to be
// dropped from the slot and the unit aimed at what a doctor actually says:
//   u11 took the SURGERY VISIT — `sakit` `demam` `batuk` `lelah` `dokter` `obat`
//     `sehat` `rumah sakit` `sembuh` `pusing` `badan`.
//   u45 took the BODY AND THE WARD — `darah` `tulang` `otot` `kulit` `leher`
//     `punggung` `bahu` `jantung` `luka` `racun` `perawat` `perban` `mengobati`
//     `ambulans` `operasi` `suntik` `pingsan` `bernapas` `menular`.
//   SO WHAT WAS MISSING — everything a doctor says ABOUT an illness and
//   everything a learner would say about keeping well. Measured against all
//   1,200 cards there was no word for a disease, an epidemic, an infection, a
//   symptom, suffering from something, chronic, a diagnosis, an allergy,
//   recovery, a relapse, a vaccine, immunity, nutrition, fibre, calories,
//   obesity, fitness, dieting, stress, addiction or smoking. The course could
//   say *I am ill* and could not say *what with*.
//
// ⚠️ THREE-WAY SCOPE BOUNDARY, the tightest one in the band:
//   THIS UNIT OWNS THE BODY'S HEALTH — illness, fitness, diet.
//   BLOCK 3's u78 OWNS CHARACTER — what a person IS. `setia` and its family are
//     theirs and appear nowhere here.
//   BLOCK 1's u57 OWNS FELT EMOTION — what a person FEELS right now.
//   The test, stated so it can be applied rather than re-argued: a TRAIT is
//   what someone IS, an EMOTION is what they FEEL now, and a SYMPTOM is what
//   their body is DOING. `stres` is carded here and only here because in
//   Indonesian it is medicalised — it names a bodily condition with physical
//   consequences, which is why it sits beside `kecanduan` and not beside the
//   emotion words.
//
// AFFIX ROOTS STRIPPED AND GREPPED BY HAND (unit1.js convention 3):
//   penyakit    → sakit   ⚠️ `sakit` (u11, ill) IS taught. Carded: an illness as
//     a NAMED THING is not the state of being unwell, and the pe-…-(k)an shape
//     here is irregular enough that no learner would derive it. Drill-safe —
//     "penyakit" contains "sakit" at index 3 preceded by `y`, a letter, so
//     findWholeWord does not match in either direction.
//   menderita   → derita  root not taught.
//   pemulihan   → pulih   root not taught. ⚠️ `sembuh` (u11, to recover) accepts
//     "to get well", "be cured" and "heal", so this card is the NOUN "recovery"
//     and its accept[] avoids all three. A4's rule.
//   kekebalan   → kebal   root not taught.
//   bergizi     → gizi    both carded, l3, adjacent on purpose — the noun and
//     the adjective are the pair a learner needs together, and ber- meaning
//     having-it is the same shape as `beracun` last unit and `berisi` (u49),
//     which you know. ⚠️ A drill containing "bergizi" does NOT satisfy front
//     `gizi` (the `r` before it is a letter), so `gizi`'s own drill carries the
//     bare noun.
//   kecanduan   → candu   root not taught (`candu` is opium; not in the corpus).
//   merokok     → rokok   root not taught. ⚠️ `asap` (u46, smoke) accepts
//     "to smoke", so this card is glossed "to smoke a cigarette". A4's rule.
//   berdiet     → diet    root not carded (see below).
//   pola makan  → pola · makan  `makan` (u6) IS taught, `pola` is not; a fixed
//     compound. ⚠️ A drill containing "pola makan" whole-word-matches `makan`
//     too, which is harmless — that card is u6's and has its own drill.
//   wabah · infeksi · gejala · kronis · diagnosa · alergi · kambuh · vaksin ·
//   serat · kalori · obesitas · stres · nyeri · kebugaran (→ bugar, not taught)
//   — roots or loans.
//
// ⛔ NOT CARDED:
//   `virus` — front and gloss are the same string: the copy-task trap
//     (unit1.js, A10). `wabah` (an epidemic) takes the slot instead, which is the
//     word a learner actually meets in Indonesian news, and `virus` is used
//     freely in examples.
//   `imun` — would be a second card for immunity beside `kekebalan`, which is
//     the word Indonesian actually uses.
//   `diet` (bare) — front and gloss identical again; the verb `berdiet` carries
//     it, and `pola makan` carries the neutral sense of a way of eating.
//   `dirawat` (to be hospitalised) — a `di-` passive, and the passive is a
//     PATTERN this block does not introduce until u70. Deliberately held back so
//     the pattern is not met as an unexplained one-off eight units early. Named
//     in `pemulihan`'s hint.
//   `kegemukan` — a ke-…-an noun off `gemuk` (u20, fat) that adds nothing
//     `obesitas` does not say more precisely. A6's clause.
//   `napas` — `bernapas` (u45) is taught off the same root and the bare noun adds
//     little; named in `gejala`'s hint.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT67 = {
  id: "id-u67",
  lang: "id",
  title: "Penyakit dan kebugaran",
  order: 67,
  stage: "b1",
  lessons: [
    {
      id: "id-u67l1",
      unit: 67,
      lesson: 1,
      title: "Penyakit dan gejalanya",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Name an illness rather than just say you are unwell — what the symptoms are, whether it is an infection, whether it is long-term, and whether it is spreading.",
      items: [
        { id: "id-u67l1-penyakit", type: "vocab", front: "penyakit", reading: "penyakit", meaning: "a disease", example: { jp: "Penyakit itu datang dari air yang tidak bersih.", en: "That disease comes from unclean water." }, accept: ["an illness with a name", "a medical condition", "an ailment"], drill: { jp: "Penyakit itu susah sembuh tanpa obat", en: "That disease is hard to cure without medicine" }, hint: "puh-NYAH-keet, ny as one sound. Built on sakit, ill, which you know — but where sakit is how you FEEL, penyakit is the THING you have, with a name a doctor can write down. Penyakit jantung is heart disease, pairing it with jantung which you know. Penyakit menular is a contagious disease." },
        { id: "id-u67l1-gejala", type: "vocab", front: "gejala", reading: "gejala", meaning: "a symptom", example: { jp: "Gejala pertama penyakit itu adalah demam dan batuk.", en: "The first symptom of that disease is fever and coughing." }, accept: ["a sign of illness", "what shows somebody is ill", "an indication of a condition"], drill: { jp: "Gejala itu mulai tiga hari sebelum dia sakit", en: "That symptom started three days before he fell ill" }, hint: "guh-JAH-la. A sign that something is happening — in medicine a symptom, and outside it a sign of anything at all: gejala krisis, signs of a crisis. ⚠️ What a doctor asks you to describe, so it is the word to recognise in a surgery. Susah bernapas, hard to breathe, which you already know, is a gejala." },
        { id: "id-u67l1-infeksi", type: "vocab", front: "infeksi", reading: "infeksi", meaning: "an infection", example: { jp: "Luka di tangan dia jadi infeksi karena tidak bersih.", en: "The wound on his hand became infected because it was not clean." }, accept: ["an infected condition", "germs in a wound", "a septic condition"], drill: { jp: "Infeksi itu hilang setelah dia minum obat", en: "That infection went away after he took medicine" }, hint: "een-FEK-see. The -si for English -tion once again, as in polusi and inflasi. Terkena infeksi is to catch an infection. ⚠️ Keep it apart from menular, which you know as contagious: an infeksi is what you have, menular is whether you can pass it on." },
        { id: "id-u67l1-menderita", type: "vocab", front: "menderita", reading: "menderita", meaning: "to suffer from", example: { jp: "Nenek saya menderita penyakit itu selama sepuluh tahun.", en: "My grandmother suffered from that disease for ten years." }, accept: ["to be afflicted with", "to live with an illness", "to bear an illness"], drill: { jp: "Banyak orang di desa menderita penyakit yang sama", en: "Many people in the village suffer from the same disease" }, hint: "muhn-duh-REE-ta. From derita, suffering, not taught alone. ⚠️ It is heavier than sakit, which you know: menderita implies a long affliction being borne, so a doctor uses it and you would not use it for a headache. It also works outside medicine: menderita kerugian, to suffer a loss." },
        { id: "id-u67l1-kronis", type: "vocab", front: "kronis", reading: "kronis", meaning: "chronic", example: { jp: "Penyakit kronis itu tidak bisa sembuh, tetapi obat bisa membantu.", en: "That chronic disease cannot be cured, but medicine can help." }, accept: ["long-lasting and recurring", "that never fully goes", "persistent over years"], drill: { jp: "Batuk kronis itu sudah dua tahun lebih", en: "That chronic cough has lasted over two years" }, hint: "KROH-nees. Note the k and the -is ending — Indonesian writes the sound, so English ch- becomes k- and -ic becomes -is, the same trade you saw in krisis. Its opposite in medical Indonesian is akut, acute. Outside medicine it is used loosely for a problem nothing fixes: macet kronis, chronic traffic jams." },
        { id: "id-u67l1-wabah", type: "vocab", front: "wabah", reading: "wabah", meaning: "an epidemic", example: { jp: "Wabah itu mulai di satu kota dan sampai ke semua provinsi.", en: "That epidemic started in one city and reached every province." }, accept: ["an outbreak of disease", "a disease sweeping a population", "a plague"], drill: { jp: "Wabah itu membuat semua sekolah berhenti", en: "That epidemic made all the schools stop" }, hint: "WAH-bah. Arabic in origin, and the word Indonesian reaches for before the Latinate ones — you will see wabah in a headline where English would say outbreak or epidemic. ⚠️ The word virus is spelled exactly as in English, so it gets no card of its own; it turns up inside wabah virus." },
      ],
    },
    {
      id: "id-u67l2",
      unit: 67,
      lesson: 2,
      title: "Diagnosa, vaksin, dan pemulihan",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Follow a course of treatment — get a diagnosis, mention an allergy, take a vaccine, build immunity, recover, and say when something has flared up again.",
      items: [
        { id: "id-u67l2-diagnosa", type: "vocab", front: "diagnosa", reading: "diagnosa", meaning: "a diagnosis", example: { jp: "Diagnosa dokter itu benar, tetapi obatnya salah.", en: "That doctor's diagnosis was right, but the medicine was wrong." }, accept: ["what a doctor concludes", "the naming of an illness", "a medical finding"], drill: { jp: "Diagnosa pertama itu berubah setelah dua minggu", en: "That first diagnosis changed after two weeks" }, hint: "dee-ahg-NOH-sa, four syllables. ⚠️ Note the -sa ending: Indonesian took this one through Dutch diagnose, not through English, so it does NOT end in -sis. The strictly correct modern form is diagnosis, but diagnosa is what people say and write. Mendiagnosa is the verb." },
        { id: "id-u67l2-alergi", type: "vocab", front: "alergi", reading: "alergi", meaning: "an allergy", example: { jp: "Saya alergi susu, jadi saya tidak bisa minum itu.", en: "I am allergic to milk, so I cannot drink it." }, accept: ["an allergic reaction", "being allergic to something", "a bad reaction to a food"], drill: { jp: "Dia alergi ikan dan tidak makan itu", en: "He is allergic to fish and does not eat it" }, hint: "ah-LER-gee, hard g, and one l where English has two. ⚠️ It works as an ADJECTIVE with no verb needed: saya alergi susu, I am allergic to milk — do not reach for a copula. Punya alergi is to have an allergy. Worth having before you order anything at a warung." },
        { id: "id-u67l2-vaksin", type: "vocab", front: "vaksin", reading: "vaksin", meaning: "a vaccine", example: { jp: "Vaksin itu gratis untuk semua anak di negara ini.", en: "That vaccine is free for every child in this country." }, accept: ["an inoculation", "a jab against a disease", "a shot that protects you"], drill: { jp: "Vaksin baru itu sudah ada di rumah sakit", en: "That new vaccine is already at the hospital" }, hint: "VAK-seen. The v is said as in English here, which is unusual — most Indonesian v's drift towards f. Note no final e. Vaksinasi is the programme, divaksin is to be vaccinated, and suntik, which you know, is the jab itself." },
        { id: "id-u67l2-kekebalan", type: "vocab", front: "kekebalan", reading: "kekebalan", meaning: "immunity", example: { jp: "Vaksin itu memberi kekebalan untuk dua tahun.", en: "That vaccine gives immunity for two years." }, accept: ["resistance to a disease", "the body's defence", "protection against illness"], drill: { jp: "Kekebalan anak kecil itu masih kurang", en: "That small child's immunity is still low" }, hint: "kuh-kuh-BAH-lan, four syllables all on a swallowed e except the stressed one. The ke-…-an frame again — you met it in kerusakan and kemiskinan — on kebal, impervious, which is not taught alone. Sistem kekebalan tubuh is the immune system. Kebal itself has a folk sense too: proof against knives or bullets." },
        { id: "id-u67l2-pemulihan", type: "vocab", front: "pemulihan", reading: "pemulihan", meaning: "recovery", example: { jp: "Pemulihan setelah operasi itu makan waktu tiga bulan.", en: "Recovery after that operation took three months." }, accept: ["the process of getting better", "convalescence", "the period of healing"], drill: { jp: "Pemulihan dia lebih cepat dari kata dokter", en: "His recovery was faster than the doctor said" }, hint: "puh-moo-LEE-han. From pulih, restored, not taught alone. ⚠️ Glossed recovery and nothing else, because sembuh, which you know, already accepts *to get well*, *be cured* and *heal* — two cards may never share an answer. So sembuh is the event of getting better, pemulihan is the stretch of time it takes. The word also covers an economy recovering: pemulihan ekonomi." },
        { id: "id-u67l2-kambuh", type: "vocab", front: "kambuh", reading: "kambuh", meaning: "to flare up again", example: { jp: "Penyakit lama dia kambuh setelah dia bekerja terlalu keras.", en: "His old illness flared up again after he worked too hard." }, accept: ["to relapse", "to come back after seeming gone", "to return as an illness"], drill: { jp: "Batuk dia kambuh setiap musim hujan", en: "His cough flares up again every rainy season" }, hint: "KAHM-booh. Only of an illness or a bad habit that had gone quiet and has come back — never of something new. ⚠️ It needs no auxiliary: penyakitnya kambuh, his illness has flared up. The opposite path is sembuh, which you know. It is also used of old quarrels reigniting." },
      ],
    },
    {
      id: "id-u67l3",
      unit: 67,
      lesson: 3,
      title: "Gizi dan pola makan",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Talk about food as nutrition — whether a meal is nourishing, how many calories it has, how much fibre, and what a person's way of eating is doing to them.",
      items: [
        { id: "id-u67l3-gizi", type: "vocab", front: "gizi", reading: "gizi", meaning: "nutrition", example: { jp: "Gizi anak di desa itu masih kurang baik.", en: "Children's nutrition in that village is still poor." }, accept: ["nourishment in food", "the food value of something", "dietary goodness"], drill: { jp: "Gizi dalam makanan itu sangat sedikit", en: "The nutrition in that food is very little" }, hint: "GEE-zee, hard g and a true z — one of very few Indonesian words with one. From Arabic. Kurang gizi is malnutrition, literally lacking nutrition, and ahli gizi, using ahli which you know, is a dietitian. The adjective bergizi is the next card." },
        { id: "id-u67l3-bergizi", type: "vocab", front: "bergizi", reading: "bergizi", meaning: "nutritious", example: { jp: "Makanan bergizi itu tidak harus mahal.", en: "Nutritious food does not have to be expensive." }, accept: ["nourishing", "full of food value", "good for the body"], drill: { jp: "Ibu membuat makan pagi yang bergizi", en: "Mother makes a nutritious breakfast" }, hint: "buhr-GEE-zee. Gizi plus ber-, having-it — exactly the shape of beracun from last unit and berisi, which you know. Makanan bergizi is the standard phrase and you will see it on school and clinic posters everywhere. Note it describes the FOOD, never the person." },
        { id: "id-u67l3-kalori", type: "vocab", front: "kalori", reading: "kalori", meaning: "a calorie", example: { jp: "Nasi dan minyak itu punya banyak kalori.", en: "Rice and oil have a lot of calories." }, accept: ["a unit of food energy", "an energy unit in food", "calories in a meal"], drill: { jp: "Kalori dalam makanan itu terlalu banyak", en: "The calories in that food are too many" }, hint: "kah-LOH-ree. Final i where English has -ie, and one l. Indonesian does not mark number, so kalori is one or a thousand as context decides. Menghitung kalori is to count calories, though Indonesians talk about it far less than English speakers do." },
        { id: "id-u67l3-serat", type: "vocab", front: "serat", reading: "serat", meaning: "fibre", example: { jp: "Buah dan sayur itu punya banyak serat.", en: "That fruit and vegetables have a lot of fibre." }, accept: ["roughage in food", "dietary fibre", "the fibrous part of food"], drill: { jp: "Serat dalam buah itu baik untuk badan", en: "The fibre in that fruit is good for the body" }, hint: "suh-RAHT, first e swallowed. Its first sense is a physical fibre or thread — serat kayu is wood grain — and the dietary sense rides on that. ⚠️ Not the same as isi, which you know as contents: serat is the stringy part that passes through you. Makanan berserat is high-fibre food, using the same ber- you just met." },
        { id: "id-u67l3-polamakan", type: "vocab", front: "pola makan", reading: "polamakan", meaning: "a way of eating", example: { jp: "Pola makan dia berubah setelah dokter bilang dia sakit.", en: "His way of eating changed after the doctor said he was ill." }, accept: ["eating habits", "what and how somebody eats", "a dietary pattern"], drill: { jp: "Pola makan anak itu kurang baik sekarang", en: "That child's eating habits are poor now" }, hint: "POH-la MAH-kan. Pola is a pattern — of cloth, of behaviour, of anything — and is not taught on its own; makan you know. ⚠️ This is the NEUTRAL word: a pola makan is simply how you eat, good or bad, where berdiet in the next lesson means deliberately cutting down. Pola tidur is the same frame for sleeping habits." },
        { id: "id-u67l3-obesitas", type: "vocab", front: "obesitas", reading: "obesitas", meaning: "obesity", example: { jp: "Obesitas di kota besar itu naik setiap tahun.", en: "Obesity in that big city rises every year." }, accept: ["being medically overweight", "excess body weight as a condition", "clinical overweight"], drill: { jp: "Obesitas anak muda itu jadi masalah besar", en: "Obesity among young people is becoming a big problem" }, hint: "oh-beh-see-TAHS. The -tas ending is how Indonesian takes Latin -tas words — the same shape as kualitas and universitas. ⚠️ It is the MEDICAL term and is neutral; gemuk, which you know, is the everyday word and can sting. A doctor says obesitas, a relative says gemuk." },
      ],
    },
    {
      id: "id-u67l4",
      unit: 67,
      lesson: 4,
      title: "Kebugaran, stres, dan kecanduan",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Talk about keeping well and about what wears you down — fitness, dieting, stress, addiction, smoking, and where it aches.",
      items: [
        { id: "id-u67l4-kebugaran", type: "vocab", front: "kebugaran", reading: "kebugaran", meaning: "physical fitness", example: { jp: "Kebugaran dia lebih baik setelah dia mulai berolahraga.", en: "His fitness is better since he started exercising." }, accept: ["bodily condition", "how fit a body is", "being in good shape"], drill: { jp: "Kebugaran pemain itu sangat penting untuk tim", en: "That player's fitness is very important to the team" }, hint: "kuh-boo-GAH-ran. The ke-…-an frame again, now on bugar, fresh and vigorous, which is not taught alone. ⚠️ Narrower than sehat, which you know: sehat is being free of illness, kebugaran is being physically capable — you can be sehat and unfit. Pusat kebugaran is a gym." },
        { id: "id-u67l4-berdiet", type: "vocab", front: "berdiet", reading: "berdiet", meaning: "to be on a diet", example: { jp: "Dia berdiet selama tiga bulan dan jadi lebih kurus.", en: "She was on a diet for three months and got thinner." }, accept: ["to diet", "to cut down what you eat", "to restrict your eating"], drill: { jp: "Ibu saya berdiet karena kata dokter", en: "My mother is on a diet because of what the doctor said" }, hint: "buhr-dee-ET, three syllables with the stress at the end. The English loan diet with ber- making it something you ARE DOING — the same shape as berolahraga, which you know. ⚠️ Keep it apart from pola makan from the last lesson: a pola makan is neutral, berdiet is deliberate restriction." },
        { id: "id-u67l4-stres", type: "vocab", front: "stres", reading: "stres", meaning: "stress", example: { jp: "Stres karena pekerjaan itu membuat dia tidak bisa tidur.", en: "Stress from that job stopped him sleeping." }, accept: ["mental pressure", "being under strain", "nervous strain"], drill: { jp: "Stres itu membuat badan dia sakit", en: "That stress makes his body ill" }, hint: "STRES, one syllable, no final s doubling and no t. ⚠️ Indonesian treats it as BOTH noun and adjective: saya stres means I am stressed, with no verb at all. It is medicalised here — a cause of real illness, which is why it sits in a health unit beside kecanduan rather than with the feelings. Tertekan is the heavier word for being under pressure." },
        { id: "id-u67l4-kecanduan", type: "vocab", front: "kecanduan", reading: "kecanduan", meaning: "addiction", example: { jp: "Kecanduan itu susah berhenti tanpa dokter.", en: "That addiction is hard to stop without a doctor." }, accept: ["dependence on something", "being hooked on something", "a habit you cannot stop"], drill: { jp: "Kecanduan anak muda pada aplikasi itu besar", en: "Young people's addiction to that app is large" }, hint: "kuh-chan-DOO-an, c as CH. From candu, opium, which is not taught — the history is literal. ⚠️ It is both the noun and an adjective: dia kecanduan rokok, he is addicted to cigarettes. The ke-…-an frame here makes a condition somebody is IN, the same sense as kebugaran two cards back." },
        { id: "id-u67l4-merokok", type: "vocab", front: "merokok", reading: "merokok", meaning: "to smoke a cigarette", example: { jp: "Dia merokok selama dua puluh tahun dan sekarang sakit.", en: "He smoked for twenty years and is ill now." }, accept: ["to have a cigarette", "to use tobacco", "to be a smoker"], drill: { jp: "Orang tidak boleh merokok di rumah sakit", en: "People may not smoke in the hospital" }, hint: "muh-ROH-kok. From rokok, a cigarette, not taught alone. ⚠️ Glossed the long way because asap, which you know as smoke, already accepts *to smoke* — two cards may never share an answer. Dilarang merokok is the sign on every wall; kretek is the clove cigarette Indonesia is known for." },
        { id: "id-u67l4-nyeri", type: "vocab", front: "nyeri", reading: "nyeri", meaning: "an ache", example: { jp: "Nyeri di punggung dia datang setelah dia bekerja terlalu lama.", en: "The ache in his back came after he worked too long." }, accept: ["a dull persistent pain", "soreness", "a localised pain"], drill: { jp: "Nyeri di otot itu hilang setelah dua hari", en: "The ache in that muscle went after two days" }, hint: "NYUH-ree, ny as one sound. ⚠️ Keep it apart from sakit, which you know: sakit is both ill and sore and covers everything; nyeri is specifically the physical ACHE, localised and usually dull, and it is the word a doctor writes down. Nyeri sendi is joint pain." },
      ],
    },
  ],
};
