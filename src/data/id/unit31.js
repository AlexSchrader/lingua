// ID Unit 31 — Perasaan yang lebih dalam ("Feelings, further in") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 2 (u31–u40), authored 2026-09-29. The 12 conventions in unit1.js and
// the 10 A2 conventions in unit21.js BIND this file. Read both before authoring.
// Block 1 (u21–u30) is the crew lead; this block hands back to it.
//
// ⚠️ RETHEMED, NOT JUST RETITLED — and block 1 predicted this one by name.
// The scaffold called this slot "Personality and character". Measured against the
// live corpus (all 720 cards, probe in unit21.js §A3): A1's u20 l1/l3 IS
// personality and character — tua · muda · ganteng · gemuk · kurus · rapi ·
// rajin · malas · pintar · ramah · sabar · lucu. A unit of character adjectives
// here would have been a second pass over a spent theme, which is the Norwegian
// "character and personality authored three times" failure.
//   THE HOLE IT FILLS INSTEAD: A1's u20 gave the learner SIX feelings (marah ·
//   sedih · takut · malu · bosan · kaget) plus merasa · khawatir · kecewa ·
//   berharap · menangis · tersenyum. Measured against all 720, Indonesian had
//   **no word for relieved, proud, content, lonely, nervous, tense, suspicious,
//   jealous, grateful, to regret, to hate, to miss someone, to admire, to
//   savour** — and no noun for **the heart, a mood, a character trait**. A
//   learner could say "saya sedih" and nothing between that and "saya senang".
//   This unit spends 24 cards on the middle of that range.
//   `sifat` is the one honest survivor of the scaffold's title: the learner needs
//   the WORD for a character trait far more than a twelfth trait adjective.
//
// AFFIX ROOTS CHECKED BY HAND (unit1.js §3 — `check-front.mjs`'s LEXEME verdict
// fails open for Indonesian, so every prefixed front was stripped and grepped
// against the live corpus rather than probed):
//   menikmati → nikmat    root not taught.
//   membenci → benci      root not taught. Headworded with me- per convention 4:
//     `benci` alone is not what a standard sentence carries.
//   menghargai → harga    ⚠️ `harga` IS taught ("a price"). Carded anyway: a price
//     does not give you "to value". Drill-safe — findWholeWord("menghargai",
//     "harga") fails (the g before it is a letter) and this card's drill carries
//     no bare `harga`.
//   bersyukur → syukur    root not taught.
//   menyesal → sesal      root not taught.
//   kesepian → sepi       ⚠️ `sepi` IS taught ("deserted"). Carded: a quiet place
//     is not a lonely person. Drill-safe — "kesepian" holds `sepi` behind an `e`.
//   menahan → tahan       root not taught. ⚠️ NOT `tahu` (u21) — different word.
//   bahagia · lega · bangga · puas · semangat · kesal · gugup · tegang · curiga ·
//   cemburu · rindu · kagum · hati · suasana · tenang · sifat · santai — roots.
//
// ⚠️ DRILL TRAP CHECKED IN THIS FILE: front `hati` is a WHOLE WORD inside the
// taught front `hati-hati` (a hyphen is not a letter, so `findWholeWord` matches
// at index 0 — unit21.js §A7). So `hati`'s own drill carries bare `hati` and no
// `hati-hati`; verified. The reverse direction is safe: `hati-hati`'s drill lives
// in a merged A1 unit and is graded against its own front.
//
// GLOSSES THAT WERE REGLOSSED TO CLEAR A LIVE `accept[]` (unit21.js §A4 — the
// collisions are in accept[], not meaning, and no gate sees them):
//   `puas` is NOT "satisfied" — A1's `kenyang` accepts it. → "content with a result".
//   `menikmati` is NOT "to enjoy" — `suka` accepts "to enjoy". → "to savour".
//   `kesal` does not accept "put out" — `kecewa` does. → "riled".
//   `diri` (oneself) was DROPPED, not reglossed: `sendiri` accepts "oneself" and
//   there is no honest second gloss; `santai` took the slot instead.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT31 = {
  id: "id-u31",
  lang: "id",
  title: "Perasaan yang lebih dalam",
  order: 31,
  stage: "a2",
  lessons: [
    {
      id: "id-u31l1",
      unit: 31,
      lesson: 1,
      title: "Bahagia dan lega",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name a good feeling precisely — relieved, proud, content, keen — instead of reaching for senang every time, and say what brought it on.",
      items: [
        { id: "id-u31l1-bahagia", type: "vocab", front: "bahagia", reading: "bahagia", meaning: "deeply happy", example: { jp: "Ibu saya bahagia karena semua anaknya pulang.", en: "My mother is deeply happy because all her children have come home." }, accept: ["joyful", "full of happiness", "blissful"], drill: { jp: "Keluarga itu bahagia di rumah baru", en: "That family is deeply happy in the new house" }, hint: "ba-HA-gee-a, four syllables, the h sounded. Deeper and slower than senang, which is the everyday glad: senang is how a good afternoon feels, bahagia is how a good life feels. Kebahagiaan is happiness itself, and Selamat berbahagia is what you write on a wedding card." },
        { id: "id-u31l1-lega", type: "vocab", front: "lega", reading: "lega", meaning: "relieved", example: { jp: "Saya lega karena ujian itu sudah selesai.", en: "I am relieved because that exam is over." }, accept: ["a weight off your mind", "at ease now", "unburdened"], drill: { jp: "Ibu lega setelah anaknya sampai di rumah", en: "Mother was relieved after her child got home" }, hint: "LAY-ga. The feeling AFTER the worry lifts, so it almost always follows sudah, setelah or akhirnya. Pair it with khawatir, which you already have: khawatir first, lega after. Literally it means roomy — the chest opens up." },
        { id: "id-u31l1-bangga", type: "vocab", front: "bangga", reading: "bangga", meaning: "proud", example: { jp: "Ayah bangga karena saya berhasil.", en: "Father is proud because I succeeded." }, accept: ["full of pride", "chuffed about someone"], drill: { jp: "Guru bangga dengan hasil pelajar itu", en: "The teacher is proud of that pupil's result" }, hint: "BAHNG-ga — ngg is the hum plus a hard g, the ngg of tunggu. Takes dengan or akan for what you are proud OF: bangga dengan anaknya. It carries none of the English warning about pride; kebanggaan is a source of pride and is a compliment." },
        { id: "id-u31l1-puas", type: "vocab", front: "puas", reading: "puas", meaning: "content with a result", example: { jp: "Atasan saya puas dengan laporan itu.", en: "My boss is content with that report." }, accept: ["pleased with how it went", "with no complaints"], drill: { jp: "Pelanggan puas dengan harga di toko itu", en: "The customer is content with the price in that shop" }, hint: "POO-as, two syllables. ⚠️ Not the full-after-eating kind — that is kenyang, which you already have. Puas is about an OUTCOME meeting what you wanted: puas dengan hasilnya. Kepuasan is satisfaction; tidak puas is the polite way to complain." },
        { id: "id-u31l1-semangat", type: "vocab", front: "semangat", reading: "semangat", meaning: "enthusiasm", example: { jp: "Anak itu belajar dengan semangat besar.", en: "That child studies with great enthusiasm." }, accept: ["drive", "spirit", "a burst of energy"], drill: { jp: "Tim itu bekerja dengan semangat setiap hari", en: "That team works with enthusiasm every day" }, hint: "suh-MAHNG-at, the first e swallowed. Shouted on its own as encouragement — Semangat! is what Indonesians say where English says you can do it. Bersemangat is the adjective, and it is the opposite of malas, which you already have." },
        { id: "id-u31l1-menikmati", type: "vocab", front: "menikmati", reading: "menikmati", meaning: "to savour", example: { jp: "Kami menikmati kopi di warung dekat pasar.", en: "We are savouring coffee at the stall near the market." }, accept: ["to take pleasure in", "to make the most of"], drill: { jp: "Saya menikmati makan malam dengan teman", en: "I am savouring dinner with a friend" }, hint: "muh-nik-MAH-tee. ⚠️ Not the same as suka, which is simply to like — menikmati is being IN the pleasure while it happens, so it takes a moment or a meal, not a preference. Nikmat on its own means delicious or blissful, and is what you say after a very good plate of food." },
      ],
    },
    {
      id: "id-u31l2",
      unit: 31,
      lesson: 2,
      title: "Kesal dan gugup",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say exactly which bad feeling you have — annoyed, nervous, tense, lonely, suspicious, jealous — rather than falling back on marah or sedih.",
      items: [
        { id: "id-u31l2-kesal", type: "vocab", front: "kesal", reading: "kesal", meaning: "annoyed", example: { jp: "Saya kesal karena dia selalu terlambat.", en: "I am annoyed because he is always late." }, accept: ["irritated", "riled", "narked"], drill: { jp: "Ibu kesal melihat kamar yang kotor", en: "Mother is annoyed seeing the dirty room" }, hint: "kuh-SAHL. Milder and longer-lasting than marah, which you already have: marah is anger you can see, kesal is the low grumble underneath it. Kesal takes dengan for the person and karena for the reason. Jengkel is the near-identical twin you will also hear." },
        { id: "id-u31l2-gugup", type: "vocab", front: "gugup", reading: "gugup", meaning: "nervous", example: { jp: "Dia gugup sebelum wawancara itu.", en: "He is nervous before that interview." }, accept: ["jittery", "flustered", "on edge"], drill: { jp: "Pelajar itu gugup sebelum ujian pertama", en: "That pupil is nervous before the first exam" }, hint: "GOO-goop, both u like the oo in book. Body nerves, not fear: takut is being afraid OF something, gugup is your hands shaking before you speak. It is the normal word for stage fright and for a job interview." },
        { id: "id-u31l2-tegang", type: "vocab", front: "tegang", reading: "tegang", meaning: "tense", example: { jp: "Rapat pagi ini tegang karena laporan itu.", en: "This morning's meeting was tense because of that report." }, accept: ["strained", "keyed up", "taut"], drill: { jp: "Wajah anak itu tegang di depan guru", en: "That child's face is tense in front of the teacher" }, hint: "tuh-GAHNG, ng one hum. ⚠️ Three lookalikes now: terang is bright, tenang is calm, tegang is tense — and tegang is the opposite of tenang. It describes a SITUATION or a body as much as a person: otot tegang, a tight muscle; suasana tegang, a tense atmosphere." },
        { id: "id-u31l2-kesepian", type: "vocab", front: "kesepian", reading: "kesepian", meaning: "lonely", example: { jp: "Nenek saya kesepian karena tinggal sendiri.", en: "My grandmother is lonely because she lives alone." }, accept: ["feeling alone", "lonesome"], drill: { jp: "Dia kesepian di kota yang baru", en: "He is lonely in the new city" }, hint: "kuh-suh-PEE-an. Built on sepi, which you already have for a deserted, quiet PLACE — kesepian moves it into a PERSON. That split matters: a beach is sepi, you are kesepian. And sendiri means alone without any of the sadness, so tinggal sendiri is a fact and kesepian is a feeling." },
        { id: "id-u31l2-curiga", type: "vocab", front: "curiga", reading: "curiga", meaning: "suspicious", example: { jp: "Saya curiga karena harga itu terlalu murah.", en: "I am suspicious because that price is too cheap." }, accept: ["having doubts about someone", "distrustful"], drill: { jp: "Atasan curiga dengan laporan karyawan baru", en: "The boss is suspicious of the new employee's report" }, hint: "choo-REE-ga, c is CH. It is the opposite of percaya, which you already have: percaya is trusting someone, curiga is the itch that they are not telling you everything. Ragu is doubting a FACT; curiga is doubting a PERSON. Mencurigakan is the thing that looks dodgy." },
        { id: "id-u31l2-cemburu", type: "vocab", front: "cemburu", reading: "cemburu", meaning: "jealous", example: { jp: "Adik saya cemburu karena kakak mendapat sepeda baru.", en: "My younger brother is jealous because our older brother got a new bicycle." }, accept: ["envious", "possessive"], drill: { jp: "Dia cemburu karena rekan itu naik gaji", en: "He is jealous because that colleague got a pay rise" }, hint: "chuhm-boo-ROO, c is CH again. Covers both English words: wanting what someone has, and not wanting to share the person you love. Takes kepada or sama for the person. Iri is the narrower one for envying a possession." },
      ],
    },
    {
      id: "id-u31l3",
      unit: 31,
      lesson: 3,
      title: "Rindu dan benci",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Point a feeling AT someone or something — missing them, hating it, admiring it, valuing it — and own up to regret.",
      items: [
        { id: "id-u31l3-rindu", type: "vocab", front: "rindu", reading: "rindu", meaning: "to miss someone", example: { jp: "Saya rindu ibu saya di desa.", en: "I miss my mother back in the village." }, accept: ["to pine for", "to ache for someone far away"], drill: { jp: "Anak itu rindu ayahnya yang jauh", en: "That child misses his faraway father" }, hint: "REEN-doo, r a single light tap. It takes its object straight, with no preposition: saya rindu kamu. Kerinduan is longing as a noun, and merindukan is the formal twin you will see in writing. Indonesians use it for places and for food as readily as for people." },
        { id: "id-u31l3-membenci", type: "vocab", front: "membenci", reading: "membenci", meaning: "to hate", example: { jp: "Dia membenci macet di kota besar ini.", en: "He hates the traffic jams in this big city." }, accept: ["to detest", "to loathe"], drill: { jp: "Adik saya membenci sayur dan telur", en: "My younger brother hates vegetables and eggs" }, hint: "muhm-BUHN-chee, the c is CH. Strong — much stronger than tidak suka, which is what you want for a dislike. Benci is the root and you will hear it bare in speech (saya benci hujan). Kebencian is hatred; the standard written form is the me- one on this card." },
        { id: "id-u31l3-kagum", type: "vocab", front: "kagum", reading: "kagum", meaning: "full of admiration", example: { jp: "Kami kagum dengan pemandangan di pantai itu.", en: "We are full of admiration for the view at that beach." }, accept: ["in awe", "deeply impressed"], drill: { jp: "Guru kagum dengan cerita pelajar itu", en: "The teacher is full of admiration for that pupil's story" }, hint: "KAH-goom. Warmer than heran, which you already have for a puzzled surprise: heran is I cannot believe it, kagum is I am impressed by it. Takes dengan or pada for what impresses you. Mengagumkan is the thing that does the impressing." },
        { id: "id-u31l3-menghargai", type: "vocab", front: "menghargai", reading: "menghargai", meaning: "to value something", example: { jp: "Saya menghargai pendapat teman saya.", en: "I value my friend's opinion." }, accept: ["to appreciate", "to hold in high regard"], drill: { jp: "Atasan menghargai pengalaman karyawan lama", en: "The boss values the long-serving employee's experience" }, hint: "muhng-har-GAH-ee. Built on harga, a price, which you already have — literally to put a price on something, and that is exactly the image: what you value, you rate. Used constantly for respecting an effort or a decision: saya menghargai keputusan kamu. Penghargaan is an award." },
        { id: "id-u31l3-bersyukur", type: "vocab", front: "bersyukur", reading: "bersyukur", meaning: "to be grateful", example: { jp: "Keluarga kami bersyukur karena semua sehat.", en: "Our family is grateful because everyone is healthy." }, accept: ["thankful", "to count your blessings"], drill: { jp: "Saya bersyukur karena ujian itu berhasil", en: "I am grateful that the exam went well" }, hint: "buhr-SHOO-koor — sy is the sh of SHOE. Wider than terima kasih, which you say TO somebody: bersyukur is how you feel about your situation, often with a religious colour. Syukurlah is the everyday thank goodness, said out loud when bad news turns out fine." },
        { id: "id-u31l3-menyesal", type: "vocab", front: "menyesal", reading: "menyesal", meaning: "to regret", example: { jp: "Dia menyesal karena tidak belajar.", en: "He regrets not studying." }, accept: ["to wish you had not", "remorseful"], drill: { jp: "Saya menyesal menjual sepeda lama itu", en: "I regret selling that old bicycle" }, hint: "muh-nyuh-SAHL, ny one sound. Stronger than kecewa, which you already have: kecewa is being let down by someone else, menyesal is wishing YOU had done otherwise. Penyesalan is regret as a noun. It takes a plain verb after it, with no untuk." },
      ],
    },
    {
      id: "id-u31l4",
      unit: 31,
      lesson: 4,
      title: "Hati yang tenang",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about the inner life itself — a person's heart, a room's mood, someone's character — and say you are keeping calm about it.",
      items: [
        { id: "id-u31l4-hati", type: "vocab", front: "hati", reading: "hati", meaning: "the heart as the seat of feeling", example: { jp: "Kata ibu, hati anak itu baik.", en: "Mother says that child has a good heart." }, accept: ["the inner self", "how a person feels deep down"], drill: { jp: "Hati saya tenang di rumah nenek", en: "My heart is calm at my grandmother's house" }, hint: "HAH-tee. ⚠️ Not the organ that pumps blood — this is the heart you mean when you say someone is kind-hearted, and the same word also names the liver. You already know it doubled: hati-hati, literally heart-heart, means be careful. Sakit hati is hurt feelings, not chest pain." },
        { id: "id-u31l4-suasana", type: "vocab", front: "suasana", reading: "suasana", meaning: "the atmosphere of a place", example: { jp: "Suasana di warung itu ramai setiap malam.", en: "The atmosphere in that food stall is lively every evening." }, accept: ["the mood in the room", "the feel of a place"], drill: { jp: "Suasana kelas pagi ini sangat tenang", en: "The atmosphere in class this morning is very calm" }, hint: "soo-a-SAH-na, four syllables. What a PLACE or an OCCASION feels like, not what a person feels — for the person you want perasaan or hati. Suasana hati together is somebody's mood. Very common in writing about a city, a market or a meeting." },
        { id: "id-u31l4-tenang", type: "vocab", front: "tenang", reading: "tenang", meaning: "calm", example: { jp: "Ibu tetap tenang meskipun anaknya sakit.", en: "Mother stayed calm even though her child was ill." }, accept: ["at peace", "unruffled", "quiet in yourself"], drill: { jp: "Laut di pantai itu tenang sekali", en: "The sea at that beach is very calm" }, hint: "tuh-NAHNG. Works on water, on a room and on a person, exactly as English calm does. ⚠️ Keep it apart from tegang, tense, which you met in this unit, and from terang, bright. Tenang! on its own is the everyday calm down. Ketenangan is peace of mind. Sabar is willing to WAIT; tenang is not agitated." },
        { id: "id-u31l4-sifat", type: "vocab", front: "sifat", reading: "sifat", meaning: "a trait of character", example: { jp: "Sifat adik saya mirip dengan ayah.", en: "My younger brother's character is like my father's." }, accept: ["what someone is like", "a disposition"], drill: { jp: "Sifat sabar itu penting untuk seorang guru", en: "A patient character is important for a teacher" }, hint: "SEE-fat, the t barely released. This is the WORD for a character trait, which is what lets you talk about the adjectives you already have: sifat sabar, sifat malas. It also covers the properties of a thing — sifat air, the nature of water. Bersifat means to be of a certain nature." },
        { id: "id-u31l4-santai", type: "vocab", front: "santai", reading: "santai", meaning: "relaxed", example: { jp: "Hari Minggu kami santai di rumah.", en: "On Sunday we are relaxed at home." }, accept: ["easy-going", "laid back", "taking it easy"], drill: { jp: "Ayah santai di kursi depan rumah", en: "Father is relaxed in the chair in front of the house" }, hint: "SAHN-tie, the ai as in the English eye. Describes a person, a pace or a place: baju santai is casual clothes, Santai saja! means just take it easy. Wider than tenang — tenang is not agitated, santai is not in a hurry. Bersantai is the verb, to take it easy." },
        { id: "id-u31l4-menahan", type: "vocab", front: "menahan", reading: "menahan", meaning: "to hold something back", example: { jp: "Dia menahan marah di depan atasan.", en: "He held his anger back in front of his boss." }, accept: ["to restrain", "to keep something in", "to endure"], drill: { jp: "Anak itu menahan pintu dengan tangan", en: "That child is holding the door with his hand" }, hint: "muh-NAH-han. Two everyday uses that are one idea: holding a feeling in (menahan marah, menahan tangis) and physically holding something back or stopping it. From tahan, to withstand — tidak tahan means I cannot stand it. ⚠️ Nothing to do with tahu, to know, despite the look of it." },
      ],
    },
  ],
};
