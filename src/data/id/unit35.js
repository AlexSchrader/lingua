// ID Unit 35 — Perayaan dan kepercayaan ("Celebrations and belief") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 2. unit1.js's 12 conventions and unit21.js's A1–A10 BIND this file.
//
// RETITLED AND SHARPENED from the scaffold's "Culture and leisure". The slot
// survived the corpus probe — A1 and block 1 between them taught **nothing** in
// this field — but "culture" as a title invites an arts-history unit, which is not
// what an A2 learner in Indonesia needs. Sharpened to CULTURE AS SHARED RITUAL:
// the things a learner is actually invited to and asked about.
//   MEASURED AGAINST ALL 720 LIVE CARDS, the whole field was empty: **no word for
//   a party, to celebrate, a gift, a birthday, to dance, entertainment, a custom,
//   culture, a ceremony, an era, history, an ethnic group, a religion, to pray, a
//   mosque, a church, to fast, a religious holiday, a hobby, art, a painting, a
//   stage, an audience or music.** A1's u9 gave `libur` (a holiday) and `acara`
//   (an event) and stopped there.
//   ⚠️ WHY THIS MATTERS MORE IN INDONESIAN THAN IT WOULD IN FRENCH: agama is a
//   field on every Indonesian identity card, `suku` is how people introduce where
//   they are from, and `puasa` reorganises a whole month of the year. A learner
//   without these words cannot answer the questions they will actually be asked.
//
// AUTHORING CALLS MADE HERE, so nobody re-argues them:
//   `tradisi` NOT CARDED — identical in meaning to `adat`, which is carded.
//     Convention 3 forbids the second card; named in `adat`'s hint. (Same shape as
//     block 1's `walaupun`/`meskipun` and `agar`/`supaya` calls.)
//   `undangan` NOT CARDED — u22's `mengundang` is taught and the -an noun is
//     readable straight off it (A6's ceiling). Named in `pesta`'s hint.
//   `permainan` NOT CARDED — same reason off u18's `bermain`.
//   `film` / `radio` NOT CARDED — u33 records why: front == English gloss.
//   NO PROPER NOUNS ARE CARDED. `Idulfitri`, `Nyepi`, `Natal` and `Waisak` are all
//     named in hints, never as fronts: a proper noun is a fact, not vocabulary, and
//     `hari raya` is the word that lets the learner talk about all four.
//
// AFFIX ROOTS CHECKED BY HAND (unit1.js §3 — LEXEME fails open for Indonesian):
//   merayakan → raya         root not taught bare. ⚠️ `raya` also appears inside
//     this unit's `hari raya` front and inside u38's `jalan raya`. Three words off
//     one element, all in different lessons, none whole-word-containing another
//     (unit21.js §A6). Drill-safe: findWholeWord("merayakan", "raya") fails
//     (the k after it is a letter).
//   menari → tari           root not taught.
//   hiburan → hibur         root not taught; no verb carded off it in this block.
//   berdoa → doa            root not taught.
//   lukisan → lukis         root not taught.
//   penonton → tonton       ⚠️ `menonton` IS taught (u18, to watch). Same pe- AGENT
//     shape as A1's `belajar`→`pelajar` and this block's `menulis`→`penulis`; a
//     different word from the verb. Drill-safe both ways.
//   ulang tahun             a multi-word front (convention 8). `tahun` IS taught and
//     is a whole word inside it. Safe in both directions: this card's cloze blanks
//     the two-word span, and `tahun`'s own drill is in a merged A1 unit that could
//     not have carried an untaught word.
//   hari raya               same, with `hari`. Fold is "hariraya", distinct from
//     "ulangtahun" and from every live reading (measured).
//   pesta · hadiah · adat · budaya · upacara · zaman · sejarah · suku · agama ·
//   masjid · gereja · puasa · hobi · seni · panggung · musik — roots.
//
// GLOSSES REGLOSSED TO CLEAR A LIVE `accept[]` (unit21.js §A4):
//   `puasa` is NOT "to fast" — u10's `cepat` accepts "fast". → "to go without food".
//   `zaman` does not accept "the times" — u14's `kali` accepts "times".
//   `suku` does not accept "a people" — u1's `orang` accepts "people".
//   `lukisan` does not accept "a picture" — u26's `gambar` owns it. → "a painted work".
//   `sejarah` does not accept "the past" — kept to "the record of what happened".
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT35 = {
  id: "id-u35",
  lang: "id",
  title: "Perayaan dan kepercayaan",
  order: 35,
  stage: "a2",
  lessons: [
    {
      id: "id-u35l1",
      unit: 35,
      lesson: 1,
      title: "Pesta dan hadiah",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Take part in a celebration — throwing a party, marking a birthday, bringing a gift, dancing — and say what the entertainment was.",
      items: [
        { id: "id-u35l1-pesta", type: "vocab", front: "pesta", reading: "pesta", meaning: "a party", example: { jp: "Pesta di rumah tetangga itu ramai sekali.", en: "The party at the neighbour's house was very lively." }, accept: ["a celebration", "a big do"], drill: { jp: "Kami membuat pesta kecil untuk nenek", en: "We are putting on a small party for grandmother" }, hint: "PES-ta, the e as in PET. Bigger and more organised than a gathering: pesta pernikahan is a wedding reception and pesta rakyat is a public festival. You already have mengundang, to invite — the noun undangan, an invitation, comes straight off it and needs no card of its own. Berpesta is to party." },
        { id: "id-u35l1-merayakan", type: "vocab", front: "merayakan", reading: "merayakan", meaning: "to celebrate", example: { jp: "Keluarga kami merayakan acara itu setiap tahun.", en: "Our family celebrates that occasion every year." }, accept: ["to mark an occasion", "to throw a celebration for"], drill: { jp: "Mereka merayakan hasil ujian di warung", en: "They are celebrating the exam results at the food stall" }, hint: "muh-ra-YAH-kan. Takes the occasion straight: merayakan ulang tahun. From raya, great or grand — the same element in hari raya later in this unit and in jalan raya, a main road. Perayaan is the celebration itself." },
        { id: "id-u35l1-hadiah", type: "vocab", front: "hadiah", reading: "hadiah", meaning: "a gift", example: { jp: "Saya memberi hadiah kecil untuk adik saya.", en: "I gave a small gift to my younger brother." }, accept: ["a present", "a prize"], drill: { jp: "Hadiah itu masih ada di lemari", en: "That gift is still in the cupboard" }, hint: "ha-DEE-ah, three syllables with both h's sounded. ⚠️ Two senses in one word: a present you give and a prize you win — hadiah pertama is first prize. Kado is the borrowed word used specifically for a wrapped birthday present. Memberi hadiah is the natural verb phrase." },
        { id: "id-u35l1-ulangtahun", type: "vocab", front: "ulang tahun", reading: "ulangtahun", meaning: "a birthday", example: { jp: "Ulang tahun ibu saya bulan Maret.", en: "My mother's birthday is in March." }, accept: ["an anniversary", "the day someone was born"], drill: { jp: "Kami membuat pesta ulang tahun untuk kakak", en: "We are throwing a birthday party for our older sister" }, hint: "OO-lang TAH-hoon, two words. Literally the year repeating, built on the tahun you already have and on ulang, to repeat, which you have inside mengulang. ⚠️ It covers any anniversary, not only a person's: ulang tahun perusahaan is a company's founding day. Selamat ulang tahun is happy birthday." },
        { id: "id-u35l1-menari", type: "vocab", front: "menari", reading: "menari", meaning: "to dance", example: { jp: "Anak itu menari di depan semua tamu.", en: "That child danced in front of all the guests." }, accept: ["to do a dance", "dancing"], drill: { jp: "Mereka menari bersama di pesta itu", en: "They danced together at that party" }, hint: "muh-NAH-ree. Sits beside menyanyi, to sing, which you already have. Tarian is a dance as a piece — tari Bali is Balinese dance, a whole art form. Penari is a dancer, using the same pe- pattern that gives you penulis and penonton." },
        { id: "id-u35l1-hiburan", type: "vocab", front: "hiburan", reading: "hiburan", meaning: "entertainment", example: { jp: "Hiburan di acara itu hanya musik dan lagu.", en: "The entertainment at that event was only music and songs." }, accept: ["something to amuse people", "a diversion"], drill: { jp: "Hiburan di kota kecil itu kurang banyak", en: "There is not much entertainment in that small town" }, hint: "hee-BOO-ran. From hibur, to cheer somebody up — so hiburan is anything that lifts the mood, from a concert to a joke. Menghibur is to comfort or to entertain someone. Tempat hiburan is a place of entertainment." },
      ],
    },
    {
      id: "id-u35l2",
      unit: 35,
      lesson: 2,
      title: "Adat dan budaya",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Explain where a practice comes from — a custom, a culture, a ceremony, an era, an ethnic group — instead of only saying it is Indonesian.",
      items: [
        { id: "id-u35l2-adat", type: "vocab", front: "adat", reading: "adat", meaning: "a custom", example: { jp: "Adat di desa itu masih sangat kuat.", en: "The customs in that village are still very strong." }, accept: ["customary law", "the traditional way"], drill: { jp: "Adat itu berbeda di setiap desa", en: "That custom is different in every village" }, hint: "AH-dat. Much heavier than the English custom: adat is the body of traditional law that still governs land, marriage and inheritance in many regions, so rumah adat is a traditional house and hukum adat is customary law. Tradisi, the borrowed word, means the same thing and is not a separate card." },
        { id: "id-u35l2-budaya", type: "vocab", front: "budaya", reading: "budaya", meaning: "culture", example: { jp: "Budaya di setiap kota sangat berbeda.", en: "The culture in each city is very different." }, accept: ["the way of life of a people", "cultural"], drill: { jp: "Budaya itu penting untuk semua warga", en: "That culture is important for all the residents" }, hint: "boo-DAH-ya. Works as noun and adjective at once: acara budaya is a cultural event. Kebudayaan is the fuller, more formal noun and is what ministries use. ⚠️ Adat is the RULES a community keeps; budaya is everything it does — food, dress, language, art." },
        { id: "id-u35l2-upacara", type: "vocab", front: "upacara", reading: "upacara", meaning: "a ceremony", example: { jp: "Upacara itu mulai jam tujuh pagi.", en: "That ceremony starts at seven in the morning." }, accept: ["a formal rite", "a ritual"], drill: { jp: "Semua pelajar datang ke upacara sekolah", en: "All the pupils come to the school ceremony" }, hint: "oo-pa-CHA-ra, the c is CH. Any formal rite with an order of events: a wedding, a funeral, or the Monday flag ceremony every Indonesian school holds — upacara bendera. ⚠️ Acara, which you already have, is any event; an upacara is the formal kind with a set procedure." },
        { id: "id-u35l2-zaman", type: "vocab", front: "zaman", reading: "zaman", meaning: "an era", example: { jp: "Cerita itu dari zaman nenek saya.", en: "That story is from my grandmother's era." }, accept: ["an age", "a stretch of history"], drill: { jp: "Zaman itu sudah lama sekali", en: "That era was a very long time ago" }, hint: "ZAH-man — z is rare in Indonesian and marks the word as an Arabic borrowing. A named stretch of history: zaman dulu is the old days and zaman sekarang is these days, both extremely common. ⚠️ Waktu, which you already have, is time as a quantity; zaman is time as a period with a character." },
        { id: "id-u35l2-sejarah", type: "vocab", front: "sejarah", reading: "sejarah", meaning: "history", example: { jp: "Sejarah kota ini ada di buku itu.", en: "The history of this city is in that book." }, accept: ["the record of what happened", "the study of the past"], drill: { jp: "Guru menjelaskan sejarah desa itu", en: "The teacher explained that village's history" }, hint: "suh-JAH-rah, three syllables. Both the events and the subject you study, as in English. Sejarawan is a historian, using the same -wan ending you met in wartawan. Bersejarah means historic: tempat bersejarah, a historic place." },
        { id: "id-u35l2-suku", type: "vocab", front: "suku", reading: "suku", meaning: "an ethnic group", example: { jp: "Ada banyak suku di Indonesia.", en: "There are many ethnic groups in Indonesia." }, accept: ["a tribe", "one of the peoples of a country"], drill: { jp: "Suku itu tinggal di hutan besar", en: "That ethnic group lives in the great forest" }, hint: "SOO-koo. This is how Indonesians place each other: suku Jawa, suku Batak, suku Bugis, and the question is asked as readily as where are you from. It has none of the awkwardness the English tribe carries. It also means a quarter — suku kata is a syllable, literally a word-part." },
      ],
    },
    {
      id: "id-u35l3",
      unit: 35,
      lesson: 3,
      title: "Agama dan doa",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Answer the question about religion that Indonesians will actually ask you — naming a faith, a place of worship, praying, fasting, a holy day.",
      items: [
        { id: "id-u35l3-agama", type: "vocab", front: "agama", reading: "agama", meaning: "a religion", example: { jp: "Agama saya berbeda dengan agama tetangga.", en: "My religion is different from my neighbour's." }, accept: ["a faith", "religious belief"], drill: { jp: "Agama itu penting untuk keluarga mereka", en: "That religion is important to their family" }, hint: "ah-GAH-ma. ⚠️ Expect this question early and often — agama is a field on an Indonesian identity card, so asking it is ordinary politeness, not an intrusion. Beragama means to hold a religion. You already have percaya and kepercayaan, which cover belief in general; agama is the organised kind." },
        { id: "id-u35l3-berdoa", type: "vocab", front: "berdoa", reading: "berdoa", meaning: "to pray", example: { jp: "Keluarga itu berdoa sebelum makan.", en: "That family prays before eating." }, accept: ["to say a prayer", "to offer prayers"], drill: { jp: "Kami berdoa untuk nenek yang sakit", en: "We are praying for our sick grandmother" }, hint: "buhr-DOH-a — doa is two syllables, DOH-a, not one. Doa on its own is a prayer, and Minta doa is a request to be prayed for. Berdoa is used by every faith; salat is specifically the Muslim ritual prayer and sembahyang covers the ritual kind more generally." },
        { id: "id-u35l3-masjid", type: "vocab", front: "masjid", reading: "masjid", meaning: "a mosque", example: { jp: "Masjid itu ada di dekat pasar.", en: "That mosque is near the market." }, accept: ["a Muslim place of worship"], drill: { jp: "Masjid baru itu sangat besar dan bersih", en: "That new mosque is very big and clean" }, hint: "MAS-jeed. The call to prayer from a masjid is the sound that organises the Indonesian day, so this is a practical landmark word as much as a religious one — people give directions by it. Mesjid is an older spelling you will still see on buildings." },
        { id: "id-u35l3-gereja", type: "vocab", front: "gereja", reading: "gereja", meaning: "a church", example: { jp: "Mereka pergi ke gereja setiap hari Minggu.", en: "They go to church every Sunday." }, accept: ["a Christian place of worship"], drill: { jp: "Gereja itu ada di jalan dekat sekolah", en: "That church is on the road near the school" }, hint: "guh-RAY-ja, g hard as in GO. From Portuguese igreja, a reminder of who reached the archipelago first. Christianity is the majority faith in several provinces, so this is not a minority word. Pura is a Balinese Hindu temple and klenteng a Chinese one." },
        { id: "id-u35l3-puasa", type: "vocab", front: "puasa", reading: "puasa", meaning: "to go without food", example: { jp: "Dia puasa dari pagi sampai malam.", en: "He goes without food from morning until night." }, accept: ["fasting", "to keep the fast"], drill: { jp: "Bulan puasa itu penting untuk mereka", en: "The fasting month is important to them" }, hint: "poo-AH-sa, three syllables. ⚠️ Do not read the pua- as anything like the English fast — cepat, which you already have, is fast meaning quick, and the two are unrelated. Bulan puasa is Ramadan, and during it the working day, the traffic and the mealtimes of a whole country change. Berbuka is to break the fast at sunset." },
        { id: "id-u35l3-hariraya", type: "vocab", front: "hari raya", reading: "hariraya", meaning: "a religious holiday", example: { jp: "Kantor dan sekolah libur untuk hari raya.", en: "Offices and schools are closed for the religious holiday." }, accept: ["a feast day", "a high day"], drill: { jp: "Hari raya itu selalu ramai di desa", en: "That religious holiday is always lively in the village" }, hint: "HAH-ree RAH-ya, two words: literally the great day, built on the hari you already have. ⚠️ Not libur, which you already have for any day off — a hari raya is a religious festival. It covers Idulfitri for Muslims, Natal for Christians, Nyepi for Balinese Hindus and Waisak for Buddhists, which is exactly why the general word is the one worth learning." },
      ],
    },
    {
      id: "id-u35l4",
      unit: 35,
      lesson: 4,
      title: "Seni dan hobi",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say what you do for pleasure and what you went to see — a hobby, art, a painting, a stage, an audience, music.",
      items: [
        { id: "id-u35l4-hobi", type: "vocab", front: "hobi", reading: "hobi", meaning: "a hobby", example: { jp: "Hobi saya membaca buku dan berenang.", en: "My hobbies are reading books and swimming." }, accept: ["a pastime", "what someone does for fun"], drill: { jp: "Hobi dia menari di panggung besar", en: "Her hobby is dancing on a big stage" }, hint: "HOH-bee, two syllables with a full final i — not the English hobby with its swallowed ending. Apa hobi kamu? is a standard early question, and the natural answer is a plain verb: hobi saya memasak. It needs no adalah." },
        { id: "id-u35l4-seni", type: "vocab", front: "seni", reading: "seni", meaning: "art", example: { jp: "Seni di kota itu sangat terkenal.", en: "The art of that city is very famous." }, accept: ["the arts", "artistic work"], drill: { jp: "Seni itu bagian dari budaya mereka", en: "That art is part of their culture" }, hint: "SUH-nee, the first e swallowed. Art in every sense, and it combines freely: seni musik, seni tari, seni lukis. Kesenian is the arts as a field, seniman an artist. ⚠️ Keep it apart from sepi, deserted, and seni sits one letter from it." },
        { id: "id-u35l4-lukisan", type: "vocab", front: "lukisan", reading: "lukisan", meaning: "a painting", example: { jp: "Lukisan itu ada di dinding kantor.", en: "That painting is on the office wall." }, accept: ["a painted work", "a canvas"], drill: { jp: "Lukisan baru itu mahal sekali", en: "That new painting is very expensive" }, hint: "loo-KEE-san. From lukis, to paint a picture — melukis is the verb. ⚠️ Gambar, which you already have, is any image including a photo or a drawing; a lukisan is specifically painted. Pelukis is a painter, the same pe- pattern as penulis and penari." },
        { id: "id-u35l4-panggung", type: "vocab", front: "panggung", reading: "panggung", meaning: "a stage", example: { jp: "Anak itu menyanyi di panggung kecil.", en: "That child sang on a small stage." }, accept: ["a platform for performers", "the boards"], drill: { jp: "Panggung itu ada di depan gereja", en: "That stage is in front of the church" }, hint: "PANG-goong — ngg is the hum plus a hard g, twice. A raised platform for performers, and by extension the theatre as an art: seni panggung. Also used for a stage in the sense of a public arena — panggung politik." },
        { id: "id-u35l4-penonton", type: "vocab", front: "penonton", reading: "penonton", meaning: "the audience", example: { jp: "Penonton di acara itu sangat banyak.", en: "The audience at that event was very large." }, accept: ["the spectators", "the people watching"], drill: { jp: "Penonton itu tertawa karena cerita lucu", en: "The audience laughed because of the funny story" }, hint: "puh-NOHN-tohn. Built off menonton, to watch, which you already have — the third pe- agent noun in this block, after penulis and penari, and by now you should be able to build them yourself. Indonesian does not mark plural, so penonton is one viewer or ten thousand." },
        { id: "id-u35l4-musik", type: "vocab", front: "musik", reading: "musik", meaning: "music", example: { jp: "Musik di pesta itu terlalu keras.", en: "The music at that party was too loud." }, accept: ["a piece of music", "musical sound"], drill: { jp: "Musik itu dari zaman nenek saya", en: "That music is from my grandmother's era" }, hint: "MOO-seek, and note the spelling: one s, k at the end, so it is pronounced nothing like the English. Alat musik is a musical instrument and musisi a musician. You already have lagu for a song, which is one piece; musik is the whole art." },
      ],
    },
  ],
};
