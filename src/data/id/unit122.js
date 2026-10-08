// ID Unit 122 — Kematian dan perkabungan ("Death, mourning and inheritance") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u114–u126). Conventions: unit1.js §1–12, unit21.js, unit51.js
// §B1–B12, and unit114.js §C1–C10. §C8 governs the TONE of this unit in
// particular — read it before editing a single example here.
//
// THE JUSTIFICATION, AND IT IS THE STRONGEST IN THE BAND. Funeral, mourning and
// inheritance vocabulary was **0 of 2,088 cards** — the largest untouched human
// domain in the language. The only two hits in the whole corpus are `mati`
// (u38, of a machine or an animal) and `ahli` (u24, an expert), and neither is
// this theme. A learner with 2,088 words could not say that a relative had
// died, could not be told when a burial was, could not read a will, and could
// not take part in the single most socially obligatory event in Indonesian life.
// `mati` used of a person is blunt to the point of rudeness, so the corpus did
// not merely lack the vocabulary — the one word it had was the wrong one.
//
// ⚠️ HOW THIS UNIT IS WRITTEN (§C8), and it is a rule, not a preference:
//   • PLAIN AND FACTUAL, never grim and never pious. Every example is something
//     a learner will actually need to say or understand: telling someone a
//     relative has died, being told when the burial is, reading what was left.
//   • NO EXAMPLE ASSUMES THE LEARNER'S RELIGION, or anyone's. Indonesian
//     practice is Muslim-majority, so `takziah` and `tahlil` are taught as the
//     practice they are and their hints say so plainly — and `kremasi` is taught
//     beside them, because Bali and the Chinese-Indonesian community are not a
//     footnote. The `masjid`/`pura`/`kuil` the course already teaches are used
//     even-handedly.
//   • NO DEATH IS ATTRIBUTED TO A NAMED OR DESCRIBED PERSON in a way that reads
//     as a story about them. The sentences are about procedure and words.
//
// REGISTER IS THE SUBJECT OF THIS UNIT, NOT A SIDE NOTE. Indonesian grades
// death vocabulary by respect, and getting it wrong is a real social error:
//   `mati`      (taught u38) — of animals and machines. Of a person: rude.
//   `meninggal` — the ordinary respectful word. This is the one to use.
//   `jenazah`   — the body, spoken of with respect. Used in announcements.
//   `mayat`     — the body, plainly or forensically. Used in news of a find.
//   `almarhum`  — "the late", placed before a name. Marks respect explicitly.
// Four of the five are carded here; the hints name the fifth and the boundaries.
//
// TWO GLOSS COLLISIONS MEASURED (gloss-taken.mjs id), and both are instructive:
//   "the late" → terlambat@u18. The English phrase for the deceased is the same
//     string as the word for being late, once `normalizeMeaning` has run. So
//     `almarhum` is "the deceased", not "the late".
//   "a will"   → akan@u13. `akan`, the future marker, accepts "will". So
//     `wasiat` is "a written testament", never "a will".
// Neither was avoidable by reading; both came out of the probe.
//
// FRONTS REFUSED, NAMED NOT BURIED:
//   `kubur` `pusara` — two more words for a grave, on top of `makam`. `makam`
//     is "a grave", `pemakaman` is "a cemetery", `nisan` is "a headstone", and a
//     fourth and fifth under the same gloss is the shared-prompt defect. The
//     ACT ships instead, as `menguburkan`, which is built on `kubur` anyway.
//   `peti` — bare, it is a chest or a crate; the coffin sense needs `peti mati`
//     or `peti jenazah`, and `peti mati` FIRES-INSIDE `mati`(u38). Dropped
//     rather than carded weakly; named here so it is not re-proposed.
//   `maut` and `ajal` BOTH ship, and they are not synonyms: `maut` is death as
//     a force, `ajal` is one's appointed hour. Indonesian keeps them apart and
//     so do the glosses.
//   `santunan` ⚠️ WAS CARDED HERE AND IS NOW DROPPED. Block 2 holds it at u102
//     (Layanan kesehatan dan perawatan) and the lower unit wins — found at merge
//     by `dupes.mjs id`. `hibah` took the slot, which is a better fit for the
//     inheritance lesson anyway: a hibah is given away while the giver is still
//     alive and so sits outside the warisan rules entirely.
//   `fana` `liang` `berduka` — probed free, cut at 24. `berduka` was
//     cut specifically because `berkabung` already carries "to mourn" and two
//     fronts under one gloss is the defect this corpus has none of.
//
// I VERIFIED THE CREW LEAD'S `warisan` CLAIM MYSELF: it is FREE, and it is
// carded here. All 22 of this slot's candidates probed free — the only slot in
// my range where nothing at all was taken, which is what 0-of-2,088 means.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT122 = {
  id: "id-u122",
  lang: "id",
  title: "Kematian dan perkabungan",
  order: 122,
  stage: "b2",
  lessons: [
    {
      id: "id-u122l1",
      unit: 122,
      lesson: 1,
      title: "Meninggal, jenazah, dan almarhum",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Say that someone has died, in the register Indonesian expects — and understand why using mati about a person is a mistake.",
      items: [
        { id: "id-u122l1-meninggal", type: "vocab", front: "meninggal", reading: "meninggal", meaning: "to pass away", example: { jp: "Bapak itu meninggal di rumah sakit minggu lalu.", en: "That man passed away in hospital last week." }, accept: ["to die, said respectfully", "to be no longer living", "to die, of a person"], drill: { jp: "Bapak itu meninggal di rumah sakit minggu lalu", en: "That man passed away in hospital last week" }, hint: "muh-NING-gahl. ⚠️ THE IMPORTANT WORD IN THIS UNIT. You already know mati, which is correct for an animal, a plant, a machine or a battery and is RUDE about a person. Meninggal is the ordinary word for a human death, and the fuller meninggal dunia, left the world, is what an announcement says." },
        { id: "id-u122l1-jenazah", type: "vocab", front: "jenazah", reading: "jenazah", meaning: "the body prepared for burial", example: { jp: "Jenazah akan dibawa ke desa besok pagi.", en: "The body will be taken to the village tomorrow morning." }, accept: ["a body being carried to burial", "the remains spoken of with respect", "the deceased's body, said respectfully"], drill: { jp: "Jenazah akan dibawa ke desa besok pagi", en: "The body will be taken to the village tomorrow morning" }, hint: "juh-na-ZAH, from Arabic. The respectful word, and the one in every announcement and at every mosque: salat jenazah is the funeral prayer. Against mayat in the next card, which is the plain one." },
        { id: "id-u122l1-mayat", type: "vocab", front: "mayat", reading: "mayat", meaning: "a corpse", example: { jp: "Mayat itu ditemukan di dekat sungai pagi ini.", en: "The body was found near the river this morning." }, accept: ["a dead body", "the body of someone who has died", "a dead body spoken of plainly"], drill: { jp: "Mayat itu ditemukan di dekat sungai pagi ini", en: "The body was found near the river this morning" }, hint: "MA-yaht. The PLAIN word — this is what a news report or a police statement uses, and the example is exactly the sentence it appears in. Using mayat where a family can hear you is cold; say jenazah there. Both words are needed, for different rooms." },
        { id: "id-u122l1-almarhum", type: "vocab", front: "almarhum", reading: "almarhum", meaning: "the deceased", example: { jp: "Almarhum bapak saya tinggal di desa yang kecil.", en: "My late father lived in a small village." }, accept: ["someone who has died, named with respect", "said before the name of someone deceased", "the one who has died, named respectfully"], drill: { jp: "Almarhum bapak saya tinggal di desa kecil", en: "My late father lived in a small village" }, hint: "al-mar-HOOM, from Arabic, literally the one shown mercy. Placed BEFORE the name or the relationship, exactly as in the example. The feminine is almarhumah, and Indonesian uses it. ⚠️ Not glossed \"the late\": terlambat, late, already owns that gloss once the grader strips the article." },
        { id: "id-u122l1-maut", type: "vocab", front: "maut", reading: "maut", meaning: "death as a force", example: { jp: "Dalam cerita lama itu maut datang seperti orang biasa.", en: "In that old story death comes like an ordinary person." }, accept: ["the end of life as a thing that comes", "mortality", "death spoken of as a power"], drill: { jp: "Dalam cerita lama itu maut datang sendiri", en: "In that old story death comes by itself" }, hint: "MA-oot, two syllables. Death as a thing, a force, almost a character — not an event. Malaikat maut is the angel of death. Also used of something lethal: pukulan maut, a killing blow, which is sports commentary." },
        { id: "id-u122l1-ajal", type: "vocab", front: "ajal", reading: "ajal", meaning: "one's appointed hour of death", example: { jp: "Orang tua itu berbicara tentang ajal dengan tenang.", en: "That old person talks about their appointed time calmly." }, accept: ["the moment life is due to end", "the time of death that is fixed", "the hour of death that is set"], drill: { jp: "Orang tua itu berbicara tentang ajal dengan tenang", en: "That old person talks about their appointed time calmly" }, hint: "A-jahl, from Arabic. NOT a synonym of maut: maut is death as a force, ajal is YOUR appointed time, fixed in advance. Sudah sampai ajalnya, his time had come, is the phrase, and it carries acceptance rather than grief." },
      ],
    },
    {
      id: "id-u122l2",
      unit: 122,
      lesson: 2,
      title: "Menguburkan, makam, dan kremasi",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Follow the practical arrangements — burial, the grave, the cemetery, the headstone, the shroud, cremation — without needing to ask which religion is meant.",
      items: [
        { id: "id-u122l2-menguburkan", type: "vocab", front: "menguburkan", reading: "menguburkan", meaning: "to bury", example: { jp: "Keluarga menguburkan jenazah pada hari yang sama.", en: "The family buries the body on the same day." }, accept: ["to put a body in the ground", "to lay to rest in the earth", "to inter"], drill: { jp: "Keluarga menguburkan jenazah pada hari yang sama", en: "The family buries the body on the same day" }, hint: "muh-ngoo-boor-KAHN, from kubur. The example states the practical fact that matters most to a visitor: in Muslim practice burial is the same day if at all possible, so everything happens fast. The bare root kubur is not carded — this verb is where it lives." },
        { id: "id-u122l2-makam", type: "vocab", front: "makam", reading: "makam", meaning: "a grave", example: { jp: "Makam itu ada di belakang masjid di desa.", en: "That grave is behind the mosque in the village." }, accept: ["the place a body lies", "a tomb", "the plot where someone is buried"], drill: { jp: "Makam itu ada di belakang masjid di desa", en: "That grave is behind the mosque in the village" }, hint: "MA-kahm, from Arabic. ONE grave. ⚠️ Indonesian also has kubur and pusara for the same thing, and neither is taught: three fronts under one gloss would make a prompt with three right answers. Recognise them; say makam." },
        { id: "id-u122l2-pemakaman", type: "vocab", front: "pemakaman", reading: "pemakaman", meaning: "a cemetery", example: { jp: "Pemakaman di kota itu sudah penuh sejak lama.", en: "The cemetery in that city has been full for a long time." }, accept: ["a burial ground", "the place where graves are", "a graveyard"], drill: { jp: "Pemakaman di kota itu sudah penuh sejak lama", en: "The cemetery in that city has been full for a long time" }, hint: "puh-ma-KA-man — pe- and -an around makam, so one grave becomes the place full of them. ⚠️ It ALSO means the funeral as an event: upacara pemakaman is the burial ceremony, and context decides which you are being told about." },
        { id: "id-u122l2-nisan", type: "vocab", front: "nisan", reading: "nisan", meaning: "a headstone", example: { jp: "Nama di nisan itu sudah susah dibaca.", en: "The name on that headstone is already hard to read." }, accept: ["a grave marker", "the stone that names a grave", "the marker set at a grave"], drill: { jp: "Nama di nisan itu sudah susah dibaca", en: "The name on that headstone is already hard to read" }, hint: "NEE-san. Batu nisan in full is also usual. In Muslim practice it is plain and often small, with just the name and the dates — which is why the example is about it wearing away rather than about anything written on it." },
        { id: "id-u122l2-kafan", type: "vocab", front: "kafan", reading: "kafan", meaning: "a burial shroud", example: { jp: "Kain kafan selalu putih dan tidak ada warna lain.", en: "A burial shroud is always white and has no other colour." }, accept: ["the white cloth a body is wrapped in", "the cloth used to wrap the dead", "the plain cloth a body is buried in"], drill: { jp: "Kain kafan selalu putih dan tidak ada warna", en: "A burial shroud is always white with no colour" }, hint: "KA-fahn, from Arabic. Kain kafan in full, using the kain you already know. The whiteness and the plainness are the point: in Muslim practice everyone is buried identically, and the shroud is what makes that visible." },
        { id: "id-u122l2-kremasi", type: "vocab", front: "kremasi", reading: "kremasi", meaning: "burning a body instead of burying it", example: { jp: "Di Bali kremasi adalah bagian dari agama di sana.", en: "In Bali cremation is part of the religion there." }, accept: ["a funeral by fire", "the burning of the dead", "a cremation ceremony"], drill: { jp: "Di Bali kremasi adalah bagian dari agama", en: "In Bali cremation is part of religion" }, hint: "kruh-MA-see. The English word CREMATION, kept out of the gloss for the usual reason. Taught beside the burial words deliberately: Hindu Bali cremates, the Chinese-Indonesian community often does, and ngaben, the Balinese cremation ceremony, is one of the country's best-known rituals." },
      ],
    },
    {
      id: "id-u122l3",
      unit: 122,
      lesson: 3,
      title: "Berkabung, melayat, dan takziah",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Take part in what Indonesian expects after a death — going to the house, being one of the visitors, the condolence call, the prayer gathering — and say what mourning is.",
      items: [
        { id: "id-u122l3-berkabung", type: "vocab", front: "berkabung", reading: "berkabung", meaning: "to be in mourning", example: { jp: "Keluarga itu berkabung selama tujuh hari di rumah.", en: "That family is in mourning for seven days at home." }, accept: ["to observe a period of grief", "to wear mourning for someone", "to keep a time of mourning"], drill: { jp: "Keluarga itu berkabung selama tujuh hari di rumah", en: "That family is in mourning for seven days at home" }, hint: "ber-ka-BOONG, from kabung. The observed PERIOD, not the feeling — a family berkabung, and so does a country: hari berkabung nasional is a national day of mourning, declared after a disaster." },
        { id: "id-u122l3-duka", type: "vocab", front: "duka", reading: "duka", meaning: "grief", example: { jp: "Mereka datang untuk ikut merasa duka dengan keluarga.", en: "They come to share in the family's grief." }, accept: ["deep sorrow at a loss", "the sorrow of bereavement", "heavy sorrow"], drill: { jp: "Mereka datang untuk ikut merasa duka hari ini", en: "They come to share in the grief today" }, hint: "DOO-ka, from Sanskrit. The deep kind, heavier than the sedih you already know. Turut berduka cita is the fixed phrase for \"my condolences\" and is what you say or write; suka dan duka, joy and sorrow, is the pair Indonesian uses for a whole life." },
        { id: "id-u122l3-melayat", type: "vocab", front: "melayat", reading: "melayat", meaning: "to go and pay respects at a death", example: { jp: "Tetangga datang melayat sebelum jenazah dibawa pergi.", en: "Neighbours come to pay their respects before the body is taken away." }, accept: ["to visit a bereaved family", "to call on a house where someone has died", "to attend at a house of mourning"], drill: { jp: "Tetangga datang melayat sebelum jenazah dibawa pergi", en: "Neighbours come to pay respects before the body is taken away" }, hint: "muh-LA-yaht. ⚠️ THE SOCIALLY OBLIGATORY ONE. If a neighbour or colleague dies, you melayat — you go to the house, sit a while, and say turut berduka. Not going is noticed. This is the single most useful card in the unit." },
        { id: "id-u122l3-pelayat", type: "vocab", front: "pelayat", reading: "pelayat", meaning: "someone who comes to pay respects", example: { jp: "Banyak pelayat datang ke rumah itu sampai malam.", en: "Many visitors came to that house until nightfall." }, accept: ["a mourner at a house of death", "one of those who visit the bereaved", "a person calling on the bereaved"], drill: { jp: "Banyak pelayat datang ke rumah itu sampai malam", en: "Many visitors came to that house until nightfall" }, hint: "puh-LA-yaht — pe- makes the person who melayat, exactly as it made pelaut from laut. The word for the crowd at the gate, and in a close neighbourhood there will be a lot of them." },
        { id: "id-u122l3-takziah", type: "vocab", front: "takziah", reading: "takziah", meaning: "a visit of condolence", example: { jp: "Takziah biasa pada hari yang sama atau besok.", en: "A condolence visit is usually on the same day or the next." }, accept: ["the customary call on a bereaved family", "the offering of sympathy in person", "a formal condolence call"], drill: { jp: "Takziah biasa pada hari yang sama atau besok", en: "A condolence visit is usually the same day or the next" }, hint: "tahk-ZEE-ah, from Arabic. The visit as a NAMED practice in Muslim custom, where melayat is the plain verb anyone of any religion uses for the same act. Both are taught because you will hear both, in the same week, about the same visit." },
        { id: "id-u122l3-tahlil", type: "vocab", front: "tahlil", reading: "tahlil", meaning: "a prayer gathering for the dead", example: { jp: "Tahlil di rumah itu ada setiap malam selama satu minggu.", en: "There is a prayer gathering at that house every evening for a week." }, accept: ["the recitation held after a death", "the evening prayers said for someone who has died", "a gathering to recite prayers for the dead"], drill: { jp: "Tahlil di rumah itu ada setiap malam", en: "There is a prayer gathering at that house every evening" }, hint: "tah-LEEL, from Arabic. A specifically Indonesian-Muslim practice, and strongly a Nahdlatul Ulama one: neighbours gather at the house on seven consecutive evenings to recite. Taught as the custom it is — if you are invited to one, this is the word you will be given." },
      ],
    },
    {
      id: "id-u122l4",
      unit: 122,
      lesson: 4,
      title: "Wasiat, waris, dan warisan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Deal with what comes after — a written testament, the heirs, the inheritance, a grave visit, praying for someone, and the money a family is given.",
      items: [
        { id: "id-u122l4-wasiat", type: "vocab", front: "wasiat", reading: "wasiat", meaning: "a written testament", example: { jp: "Wasiat itu ditulis di kertas dan disimpan baik.", en: "That testament was written on paper and kept safely." }, accept: ["written instructions left for after death", "a last testament", "a document saying who gets what"], drill: { jp: "Wasiat itu ditulis di kertas dan disimpan", en: "That testament was written on paper and kept" }, hint: "wa-see-AHT, from Arabic. ⚠️ Not glossed \"a will\": akan, the future marker you learned early, already accepts \"will\" and the grader cannot tell them apart. Wasiat also means a dying instruction spoken aloud, not only a document." },
        { id: "id-u122l4-waris", type: "vocab", front: "waris", reading: "waris", meaning: "an heir", example: { jp: "Semua waris harus tanda tangan sebelum tanah itu dijual.", en: "All the heirs have to sign before that land can be sold." }, accept: ["the one who inherits", "a person entitled to what is left", "one of those who inherit"], drill: { jp: "Semua waris harus tanda tangan sebelum tanah dijual", en: "All the heirs have to sign before the land is sold" }, hint: "WA-rees. The PERSON. Ahli waris is the full legal phrase and is what every Indonesian land document says — and the example is the real-world fact behind it: family land cannot be sold until every heir has signed." },
        { id: "id-u122l4-warisan", type: "vocab", front: "warisan", reading: "warisan", meaning: "an inheritance", example: { jp: "Rumah itu warisan dari kakek, jadi tidak boleh dijual.", en: "That house is an inheritance from their grandfather, so it must not be sold." }, accept: ["what is left to the living", "property passed on at death", "what someone leaves behind"], drill: { jp: "Rumah itu warisan dari kakek saya", en: "That house is an inheritance from my grandfather" }, hint: "wa-REE-san — the second card off waris, the thing rather than the person. ⚠️ Also used of heritage in general: warisan budaya is cultural heritage, and Borobudur is warisan dunia, a world heritage site. One word, both senses." },
        { id: "id-u122l4-ziarah", type: "vocab", front: "ziarah", reading: "ziarah", meaning: "a visit to a grave", example: { jp: "Banyak orang ziarah ke makam keluarga sebelum bulan puasa.", en: "Many people visit family graves before the fasting month." }, accept: ["the customary visit to a burial place", "going to a grave to pray", "a pilgrimage to a grave"], drill: { jp: "Banyak orang ziarah ke makam keluarga sebelum puasa", en: "Many people visit family graves before the fast" }, hint: "zee-A-rah, from Arabic. The practice of going to a grave to pray — enormously common in Indonesia in the week before Ramadan, when cemeteries fill up. Also used of visiting the tomb of a saint, which is a whole domestic tourism industry." },
        { id: "id-u122l4-mendoakan", type: "vocab", front: "mendoakan", reading: "mendoakan", meaning: "to pray for someone", example: { jp: "Kami mendoakan keluarga itu setiap malam minggu ini.", en: "We pray for that family every evening this week." }, accept: ["to say prayers on another's behalf", "to ask blessing for someone", "to pray on someone's behalf"], drill: { jp: "Kami mendoakan keluarga itu setiap malam minggu ini", en: "We pray for that family every evening this week" }, hint: "mun-do-a-KAHN, from the same root as berdoa, to pray, which you already know. The -kan makes it FOR someone else, and that is the whole difference: berdoa is praying, mendoakan is praying for a person. Said constantly, by people of every religion here." },
        { id: "id-u122l4-hibah", type: "vocab", front: "hibah", reading: "hibah", meaning: "a bequest", example: { jp: "Tanah itu hibah dari almarhum, bukan warisan biasa.", en: "That land was a gift from the deceased, not an ordinary inheritance." }, accept: ["property given away as a gift", "a voluntary transfer of property", "a gift of property made freely"], drill: { jp: "Tanah itu hibah dari almarhum bukan warisan biasa", en: "That land was a gift from the deceased not an ordinary inheritance" }, hint: "HEE-bah, from Arabic. ⚠️ A real legal distinction in Indonesia and the reason it earns a card beside warisan: a hibah is given away while the giver is ALIVE and is therefore outside the inheritance rules, which is exactly why families use it. Hibah is also a grant from a government or donor." },
      ],
    },
  ],
};
