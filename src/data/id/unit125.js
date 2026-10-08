// ID Unit 125 — Masa purba dan penelusuran sejarah ("Antiquity and the search for the past") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u114–u126). Conventions: unit1.js §1–12, unit21.js, unit51.js
// §B1–B12, **block 1's §C1–C12 in unit88.js and §C-B4 in unit89.js** (which
// bind u88–u126 and outrank the D-series), and unit114.js §D1–D11. Read unit114.js's header before editing this.
//
// THE HOLE THIS FILLS. `sejarah` (u35), `zaman` (u35), `kuno` (u42), `abad`
// (u59) and `raja` (u47) were the whole of the past. A learner could say
// "ancient" and "a century" and could not name a civilisation, a temple, an
// inscription, a ruin, an artefact, a dynasty, an archaeologist, or the act of
// tracing something back — in a country whose tourism and national story rest
// almost entirely on Borobudur, Prambanan, Majapahit and Srivijaya.
//
// THE BOUNDARY WITH u95, WHICH IS BLOCK 1's AND MUST BE RESPECTED:
//   u95 owns THE MODERN NATIONAL PAST — colonialism, independence, reform.
//   u125 owns DEEP TIME and THE DIGGING UP of it. So nothing here names a
//   colonial power, an independence struggle or a twentieth-century event. The
//   `pribumi` card in u124 touches the colonial period and is a MIGRATION word,
//   not a history one; no card here goes near it.
//
// ALL 24 GLOSSES PROBED AND NOTHING COLLIDED — the second slot in my range
// (after u120) where the corpus was genuinely empty of the whole domain. Given
// that six of the thirteen units hit a collision on their first-choice gloss,
// an empty probe is itself the measurement: this vocabulary had no competitors.
//
// ⚠️ `naskah kuno` IS NOT CARDED. `naskah` is TAKEN (u81, the literature unit)
// and `kuno` is TAKEN (u42), so the phrase FIRES-INSIDE both — candidate-check
// reports exactly that. `prasasti` (an inscribed stone) carries the old-document
// job instead, and `babad` and `hikayat` carry the old-text job, which is the
// better split anyway: u81 owns the written WORK, u125 owns the ancient OBJECT.
//
// ⚠️ `penggalian` WAS ON MY OWN SHORTLIST AND I CUT IT. candidate-check reports
// "peng- off galian(u115)" — and u115 is MY OWN UNIT, eleven slots earlier in
// this same block. `menggali` (u83) + `galian` (u115) + `penggalian` would be
// THREE cards off root `gali`, at the ceiling, for a distinction (excavated
// material vs an excavation) too thin to be worth it. `hikayat` took the slot.
// This is the cross-block check catching a WITHIN-block collision, which is
// exactly what §D7 and the lead's step-4 instruction exist for.
//
// FRONTS REFUSED, NAMED NOT BURIED:
//   `naskah kuno` and `penggalian` — above.
//   `abad` TAKEN u59 (so `berabad-abad` carries the centuries and FIRES-INSIDE
//     it, which §D7 covers: the longer front is safe in its own card).
//   `zaman` TAKEN u35, `kuno` TAKEN u42, `raja` TAKEN u47, `situs` TAKEN u43 —
//     the lead's four claims for this slot plus one more I found. All verified.
//   `nenek moyang` FIRES-INSIDE `nenek`(u4), so `leluhur` carries ancestors.
//   `arca` `megalit` `purbakala` `mumi` `relik` `wangsa` `legenda` `mitos` —
//     probed free or unprobed, cut at 24. ⚠️ `arca` would also have fought
//     u120's `patung` for a gloss, so it is not a clean refill.
//
// AFFIX LEDGER, as block 1's §C4 requires — every derivation off a TAUGHT root,
// with its root and unit, and the justification for the count:
//   `kerajaan`    ke-...-an on `raja`(u47)      a state, not a man
//   `bersejarah`  ber- on `sejarah`(u35)        having history, i.e. protected
//   `prasejarah`  pra- on `sejarah`(u35)        before history was written
//   `sejarawan`   -wan on `sejarah`(u35)        the professional
//   `peradaban`   per-...-an on `adab`(u109)    a civilisation, not politeness
//   `peninggalan` pen-...-an on `tinggal`(u3)   what is left, not to remain
//   `pelestarian` pe-...-an on `lestari`(u59)   the work, not the state
//   `reruntuhan`  re-/-an on `runtuh`(u83)      a field of rubble, not a fall
// ⚠️ THAT IS SIX TAUGHT ROOTS AND EIGHT CARDS, ABOVE THE MAX OF 4 BLOCK 1
// MEASURED ACROSS u88–u100. §C4 says to say WHY if a unit needs more, so:
// **three of the eight are off `sejarah` alone, and they are the words this unit
// exists to teach.** Indonesian builds the whole vocabulary of history off that
// one root — bersejarah (historic), prasejarah (prehistoric), sejarawan (a
// historian) — and a learner who has only `sejarah` can say none of them.
// Refusing them to hold a number would reproduce exactly the failure CLAUDE.md
// records for German, which withheld 17 core words on that reasoning. Every one
// passes §C4's test (the derived word names something the root does not), none
// meets §C-B4's refusal test (no u70 grammar pattern, no compositional
// meaning), and every hint names its root.
//
// ⚠️ ASSUMED-TAUGHT AND OUT OF THE EXAMPLES: `kerajaan` (it is CARDED here
// instead, which is why the examples can use it), `Hindu`, `dahulu` (only
// `dulu`). `candi` needed care for this reason: the obvious example sentence
// says "a Hindu temple", and the course has `pura` and `kuil` (u77) but not the
// adjective, so the card describes the thing instead of naming the religion.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT125 = {
  id: "id-u125",
  lang: "id",
  title: "Masa purba dan penelusuran sejarah",
  order: 125,
  stage: "b2",
  lessons: [
    {
      id: "id-u125l1",
      unit: 125,
      lesson: 1,
      title: "Purba, silam, dan peradaban",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about time on the scale of centuries and civilisations rather than years — the deep past, times gone by, before writing existed.",
      items: [
        { id: "id-u125l1-purba", type: "vocab", front: "purba", reading: "purba", meaning: "of the deep past", example: { jp: "Binatang purba itu sudah tidak ada di dunia sekarang.", en: "That ancient animal no longer exists in the world now." }, accept: ["ancient beyond memory", "belonging to remote antiquity", "from the earliest times"], drill: { jp: "Binatang purba itu sudah tidak ada sekarang", en: "That ancient animal no longer exists now" }, hint: "POOR-ba, from Sanskrit. Deeper than kuno, which you already know: kuno is old-fashioned or antique, purba is prehistoric. Manusia purba, early humans, is the phrase every Indonesian schoolchild learns, because Java Man was found here — though manusia itself is a word this course has never taught." },
        { id: "id-u125l1-silam", type: "vocab", front: "silam", reading: "silam", meaning: "gone by", example: { jp: "Hal itu terjadi beberapa abad silam.", en: "That happened several centuries ago on this island." }, accept: ["of time that has passed", "elapsed, of years", "past, said of a span of time"], drill: { jp: "Hal itu terjadi beberapa abad silam", en: "That happened several centuries ago" }, hint: "SEE-lahm. Placed AFTER a span of time, exactly as in the example: dua tahun silam, two years ago. Formal and written — in speech you would say dua tahun lalu. Masa silam is the past as a whole." },
        { id: "id-u125l1-masalampau", type: "vocab", front: "masa lampau", reading: "masalampau", meaning: "the distant past", example: { jp: "Mereka belajar tentang masa lampau dari batu.", en: "They learn about the distant past from stones and writing." }, accept: ["times long gone", "the far-off former time", "the bygone age"], drill: { jp: "Mereka belajar tentang masa lampau dari batu", en: "They learn about the distant past from stones" }, hint: "MA-sa lam-PAU — two words, and the last part rhymes with cow. Masa is a period and lampau is passed by. ⚠️ It folds to \"masalampau\" as a reading, with the space stripped, which was checked against every reading in the corpus before this card was written." },
        { id: "id-u125l1-berabadabad", type: "vocab", front: "berabad-abad", reading: "berabadabad", meaning: "over hundreds of years", example: { jp: "Candi itu berdiri berabad-abad sebelum orang menemukan lagi.", en: "That temple stood for centuries before people found it again." }, accept: ["lasting for centuries", "across many centuries", "for century after century"], drill: { jp: "Candi itu berdiri berabad-abad sebelum orang menemukan", en: "That temple stood for centuries before people found it" }, hint: "ber-A-bahd A-bahd — ber- plus a doubled abad, the century you already know, and the doubling here means many of them. ⚠️ The shorter taught front abad sits inside this one; that is fine, because a card only ever blanks its OWN front out of its own drill." },
        { id: "id-u125l1-prasejarah", type: "vocab", front: "prasejarah", reading: "prasejarah", meaning: "before writing existed", example: { jp: "Zaman prasejarah di pulau ini sangat lama sebelum kerajaan.", en: "The prehistoric age on this island was long before the kingdoms." }, accept: ["the time before records", "the era with no written trace", "prehistoric times"], drill: { jp: "Zaman prasejarah di pulau ini lama sebelum kerajaan", en: "The prehistoric age on this island was long before the kingdoms" }, hint: "pra-suh-ja-RAH — pra-, the Sanskrit prefix meaning before, on sejarah, history, which you already know. The definition is exact and worth holding: prasejarah is not just very old, it is before there was any WRITING to record it." },
        { id: "id-u125l1-peradaban", type: "vocab", front: "peradaban", reading: "peradaban", meaning: "a civilisation", example: { jp: "Peradaban lama di sungai itu sudah hilang tanpa tulisan.", en: "The old civilisation on that river vanished without any writing." }, accept: ["a developed society of the past", "an advanced culture of its age", "a settled society with its own culture"], drill: { jp: "Peradaban lama di sungai itu sudah hilang", en: "The old civilisation on that river has vanished" }, hint: "puh-ra-DA-ban, per- and -an around adab, good manners and refinement, which IS taught in this band — so an Indonesian civilisation is literally a state of being civilised, and the word says so. Used of whole societies and of the idea of civilisation as such." },
      ],
    },
    {
      id: "id-u125l2",
      unit: 125,
      lesson: 2,
      title: "Kerajaan, kesultanan, dan dinasti",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the kinds of state that ruled these islands before the modern one — kingdom, sultanate, dynasty — and talk about ancestors and what counts as historic.",
      items: [
        { id: "id-u125l2-kerajaan", type: "vocab", front: "kerajaan", reading: "kerajaan", meaning: "a kingdom", example: { jp: "Kerajaan besar di Jawa itu berkuasa berabad-abad.", en: "That great kingdom in Java held power for centuries." }, accept: ["a realm ruled by a monarch", "a state under a king", "a monarchy as a state"], drill: { jp: "Kerajaan besar di Jawa itu berkuasa berabad-abad", en: "That great kingdom in Java held power for centuries" }, hint: "kuh-ra-JA-an — ke- and -an around raja, a king, which you already know. Majapahit and Srivijaya are the two every Indonesian can name. ⚠️ Kerajaan Inggris is the United Kingdom, so the word is current as well as historical." },
        { id: "id-u125l2-kesultanan", type: "vocab", front: "kesultanan", reading: "kesultanan", meaning: "a sultanate", example: { jp: "Kesultanan itu masih ada sampai sekarang di Yogyakarta.", en: "That sultanate still exists today in Yogyakarta." }, accept: ["a Muslim kingdom of the islands", "a realm ruled by a sultan", "an Islamic monarchy"], drill: { jp: "Kesultanan itu masih ada sampai sekarang di Yogyakarta", en: "That sultanate still exists today in Yogyakarta" }, hint: "kuh-sool-TA-nan — the same ke-/-an frame, on sultan. Against kerajaan: a kesultanan is specifically Muslim, which is most of the Indonesian polities after the fourteenth century. And the example is a live fact — the Sultan of Yogyakarta is also its governor." },
        { id: "id-u125l2-dinasti", type: "vocab", front: "dinasti", reading: "dinasti", meaning: "a ruling family line", example: { jp: "Dinasti itu berkuasa lebih dari dua ratus tahun.", en: "That family line held power for more than two hundred years." }, accept: ["a line of kings", "a royal house", "a succession of rulers from one family"], drill: { jp: "Dinasti itu berkuasa lebih dari dua ratus tahun", en: "That family line held power for more than two hundred years" }, hint: "dee-NAS-tee. The English word DYNASTY, kept out of the gloss for the usual reason. ⚠️ A sharp modern use: dinasti politik, political dynasty, is a live accusation in Indonesian elections, so the word is in the newspaper far more often than in a history book." },
        { id: "id-u125l2-ratu", type: "vocab", front: "ratu", reading: "ratu", meaning: "a queen", example: { jp: "Ratu dalam cerita lama itu berkuasa sendiri tanpa raja.", en: "The queen in that old story held power alone without a king." }, accept: ["the woman who rules", "a king's wife who reigns", "a female monarch"], drill: { jp: "Ratu dalam cerita lama itu berkuasa sendiri", en: "The queen in that old story held power alone" }, hint: "RA-too, the feminine counterpart of the raja you already know. Nyai Roro Kidul, the queen of the southern sea, is the most famous ratu in Javanese belief. Also used as English uses it: ratu kecantikan is a beauty queen." },
        { id: "id-u125l2-leluhur", type: "vocab", front: "leluhur", reading: "leluhur", meaning: "an ancestor", example: { jp: "Mereka masih menjaga kebun yang dari leluhur mereka.", en: "They still look after the land that came from their ancestors." }, accept: ["those from whom a family descends", "the forebears of a people", "the forefathers"], drill: { jp: "Mereka masih menjaga kebun yang dari leluhur mereka", en: "They still look after the land that came from their ancestors" }, hint: "luh-LOO-hoor. The forebears, usually spoken of with respect and often with obligation attached: tanah leluhur, ancestral land, is not simply inherited property. ⚠️ Indonesian also says nenek moyang, which is NOT taught, because nenek, a grandmother, sits inside it as a whole word." },
        { id: "id-u125l2-bersejarah", type: "vocab", front: "bersejarah", reading: "bersejarah", meaning: "of historical importance", example: { jp: "Gedung bersejarah itu tidak boleh dirusak atau diubah.", en: "That historic building may not be damaged or altered." }, accept: ["carrying history with it", "significant in the record of the past", "historic"], drill: { jp: "Gedung bersejarah itu tidak boleh dirusak atau diubah", en: "That historic building may not be damaged or altered" }, hint: "ber-suh-ja-RAH — ber- plus sejarah, history, which you know, and ber- here means \"having\": a bersejarah building has history. The legal term is bangunan bersejarah, and it is what stops a developer." },
      ],
    },
    {
      id: "id-u125l3",
      unit: 125,
      lesson: 3,
      title: "Candi, prasasti, dan reruntuhan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name what the deep past physically left behind — a temple, an inscribed stone, a ruin, an artefact, a fossil — and what a surviving legacy is called.",
      items: [
        { id: "id-u125l3-candi", type: "vocab", front: "candi", reading: "candi", meaning: "a stone temple of the old kingdoms", example: { jp: "Candi di Jawa Tengah itu dibuat dari batu tanpa semen.", en: "That temple in Central Java was built of stone without cement." }, accept: ["an ancient stepped temple of Java", "a stone sanctuary of the old kingdoms", "an ancient stone religious building"], drill: { jp: "Candi di Jawa Tengah itu dibuat dari batu", en: "That temple in Central Java was built of stone" }, hint: "CHAN-dee — c is CH. Specifically the ancient Hindu-Buddhist stone kind: Borobudur and Prambanan are candi. NOT a pura, which is a living Balinese temple, nor a kuil — both of which you met in the religion unit. A candi is archaeology." },
        { id: "id-u125l3-prasasti", type: "vocab", front: "prasasti", reading: "prasasti", meaning: "an inscribed stone", example: { jp: "Prasasti itu berisi nama raja dan tahun.", en: "That inscribed stone carries a king's name and a clear date." }, accept: ["a stone slab carrying old writing", "an ancient written stone", "a carved stone record"], drill: { jp: "Prasasti itu berisi nama raja dan tahun", en: "That inscribed stone carries a king's name and a date" }, hint: "pra-SAS-tee, from Sanskrit. How almost everything known about the early Indonesian kingdoms is known — they left stones, not books. ⚠️ Indonesian also says naskah kuno for an old manuscript; naskah is taught in the unit on written work and literature, and that phrase is not carded here, because this unit owns the ancient OBJECT and that one owns the written WORK." },
        { id: "id-u125l3-reruntuhan", type: "vocab", front: "reruntuhan", reading: "reruntuhan", meaning: "ruins", example: { jp: "Reruntuhan itu baru ditemukan waktu orang menggali tanah.", en: "Those ruins were only found when people dug the ground." }, accept: ["what is left standing of an old building", "the broken remains of a structure", "the fallen remains of a building"], drill: { jp: "Reruntuhan itu baru ditemukan waktu orang menggali", en: "Those ruins were only found when people dug" }, hint: "ruh-roon-TOO-han, from runtuh, to collapse, which you met in the building unit. The re- doubling at the front makes it a scattered mass of the thing — so reruntuhan is not one collapsed wall but the whole field of rubble." },
        { id: "id-u125l3-artefak", type: "vocab", front: "artefak", reading: "artefak", meaning: "an object dug up from the past", example: { jp: "Artefak dari tanah itu disimpan di tempat yang aman.", en: "The objects from that ground are kept somewhere safe." }, accept: ["an ancient made object", "a relic found by digging", "a made object recovered from the ground"], drill: { jp: "Artefak dari tanah itu disimpan di tempat aman", en: "The objects from that ground are kept somewhere safe" }, hint: "AR-tuh-fahk. The English word ARTEFACT, described rather than named in the gloss for the usual reason. The emphasis is on MADE: a pot is an artefak, a bone is not — a bone that has turned to stone is a fosil, which is the next card but one." },
        { id: "id-u125l3-fosil", type: "vocab", front: "fosil", reading: "fosil", meaning: "the stone trace of a dead creature", example: { jp: "Fosil binatang purba ditemukan di dekat sungai di Jawa.", en: "Remains of ancient animals were found near a river in Java." }, accept: ["the remains of life turned to rock", "a preserved ancient remain in stone", "an organic remain turned to stone"], drill: { jp: "Fosil binatang purba ditemukan dekat sungai", en: "Remains of ancient animals were found near a river" }, hint: "FO-seel. A FOSSIL. The example is a real and locally famous fact: the Java Man fossils were found at Trinil and Sangiran on the Solo river, and the example says binatang because manusia is not a taught word in this course, and Sangiran is a museum you can visit. Fosil also describes a person or idea that has not moved with the times." },
        { id: "id-u125l3-peninggalan", type: "vocab", front: "peninggalan", reading: "peninggalan", meaning: "what an earlier age left behind", example: { jp: "Peninggalan kerajaan itu masih banyak di daerah ini.", en: "There are still many remains of that kingdom in this area." }, accept: ["a surviving legacy of the past", "what has been handed down from long ago", "a surviving remain of an earlier time"], drill: { jp: "Peninggalan kerajaan itu masih banyak di daerah ini", en: "There are still many remains of that kingdom in this area" }, hint: "puh-ning-GA-lan, from tinggal, to remain, which you have known since early on — and the same root as meninggal in the mourning unit, which is literally to leave. Peninggalan sejarah is the standard phrase on an Indonesian heritage sign." },
      ],
    },
    {
      id: "id-u125l4",
      unit: 125,
      lesson: 4,
      title: "Arkeologi, menelusuri, dan babad",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about the work of finding the past out — the science, the historian, tracing something back, preserving it — and name the two kinds of old Indonesian chronicle.",
      items: [
        { id: "id-u125l4-arkeologi", type: "vocab", front: "arkeologi", reading: "arkeologi", meaning: "the study of ancient remains", example: { jp: "Dia belajar arkeologi karena suka menggali dan membaca batu.", en: "She studies the past because she likes digging and reading stones." }, accept: ["digging up the past as a science", "the science of old ruins", "the scientific study of ancient material"], drill: { jp: "Dia belajar arkeologi karena suka menggali dan membaca", en: "She studies the past because she likes digging and reading" }, hint: "ar-kay-o-LO-gee. ARCHAEOLOGY, described in the gloss rather than named. Indonesia has one of the richest archaeological records anywhere and relatively few archaeologists, which is why so much of it is still in the ground." },
        { id: "id-u125l4-sejarawan", type: "vocab", front: "sejarawan", reading: "sejarawan", meaning: "a historian", example: { jp: "Sejarawan itu menulis buku tentang kerajaan lama.", en: "That historian wrote a book about the kingdoms on this island." }, accept: ["a scholar of the past", "someone who studies history for a living", "a writer and student of history"], drill: { jp: "Sejarawan itu menulis buku tentang kerajaan lama", en: "That historian wrote a book about the old kingdoms" }, hint: "suh-ja-ra-WAHN — sejarah plus -wan, the suffix that makes a professional, the same one in ilmuwan, a scientist, and in antariksawan from the aviation unit. The feminine sejarawati exists and is rarely used." },
        { id: "id-u125l4-menelusuri", type: "vocab", front: "menelusuri", reading: "menelusuri", meaning: "to trace back", example: { jp: "Mereka menelusuri nama keluarga itu sampai ke prasasti lama.", en: "They trace that family name back as far as an old inscription." }, accept: ["to follow a trail into the past", "to track step by step", "to follow something back along its course"], drill: { jp: "Mereka menelusuri nama keluarga itu sampai ke prasasti", en: "They trace that family name back as far as an inscription" }, hint: "muh-nuh-loo-SOO-ree, from telusur. Following a trail step by step — a family line, a river, a rumour, a route. Menelusuri jejak, to follow the traces, is the phrase, and it is as much journalism as history." },
        { id: "id-u125l4-pelestarian", type: "vocab", front: "pelestarian", reading: "pelestarian", meaning: "conservation", example: { jp: "Pelestarian candi itu butuh uang dan orang yang ahli.", en: "Conserving that temple needs money and expert people." }, accept: ["the keeping safe of what is old", "the work of preserving heritage", "the protection of what must not be lost"], drill: { jp: "Pelestarian candi itu butuh uang dan orang ahli", en: "Conserving that temple needs money and expert people" }, hint: "puh-les-ta-REE-an, from lestari, meaning enduring or sustained. Used of buildings, of forests, and of languages — pelestarian bahasa daerah, preserving regional languages, is a live Indonesian concern with over 700 of them." },
        { id: "id-u125l4-babad", type: "vocab", front: "babad", reading: "babad", meaning: "an old prose chronicle", example: { jp: "Babad itu berisi cerita tentang raja dan perang.", en: "That chronicle contains stories of kings and wars." }, accept: ["a traditional historical tale", "a story handed down as history", "an old court chronicle"], drill: { jp: "Babad itu berisi cerita tentang raja lama", en: "That chronicle contains stories of old kings" }, hint: "BA-bahd. Specifically a JAVANESE court chronicle — Babad Tanah Jawi is the most famous. Part history and part legend, which is exactly the problem historians have with it, and the reason sejarawan and babad are both in this unit." },
        { id: "id-u125l4-hikayat", type: "vocab", front: "hikayat", reading: "hikayat", meaning: "an old Malay tale", example: { jp: "Hikayat lama itu ditulis dengan huruf lama.", en: "That old tale was written in Arabic letters on paper." }, accept: ["a traditional Malay prose story", "an old narrative handed down in writing", "a classical Malay story"], drill: { jp: "Hikayat lama itu ditulis dengan huruf lama", en: "That old tale was written in old letters" }, hint: "hee-ka-YAHT, from Arabic. The Malay counterpart of the Javanese babad: a long prose tale, usually written in Jawi, the Arabic-derived script Malay used before the Latin alphabet. Hikayat Hang Tuah is the best known. Also used loosely for any long story." },
      ],
    },
  ],
};
