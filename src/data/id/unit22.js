// ID Unit 22 — Bilang, setuju, dan janji ("Saying, agreeing and promising") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 1 (u21–u30). unit1.js's 12 conventions and unit21.js's A1–A10 BIND
// this file.
//
// 🚨 RETHEMED, NOT JUST RETITLED. The scaffold stubbed this slot "Feelings and
// states" — which is **A1's u20, all 24 cards of it** (marah · sedih · takut ·
// malu · bosan · kaget · rajin · malas · pintar · ramah · sabar · lucu · merasa ·
// berharap · menangis · tersenyum · khawatir · kecewa). Authoring that title
// would have been Norwegian's "character and personality" for the third time.
// See unit21.js A1 for the full audit of which slots A1 had already spent.
//
// THE HOLE IT FILLS INSTEAD: **A1 had no verb for saying anything.** Measured
// against all 480 A1 cards — no *to say*, no *to tell*, no *to agree*, no *to
// refuse*, no *to promise*, no *to invite*, no *to suggest*, no *to ask for*.
// A1 taught `tanya` (to ask a question) and `menjawab` (to answer) and stopped
// there, so a learner could interrogate and reply and could not report, consent,
// decline or commit. That is most of what speech is for.
//   l1  reporting     — bilang · memberitahu · menyebut · mengaku · mengeluh · memuji
//   l2  consenting    — setuju · menolak · mengizinkan · melarang · menerima · menyarankan
//   l3  committing    — berjanji · meminta · mengundang · menawarkan · mengucapkan · memaafkan
//   l4  talking with  — mengobrol · berdiskusi · berdebat · diam · menyapa · mengganggu
//
// ⚠️ `bilang` IS THE CARD AND `mengatakan` IS IN ITS HINT, and that is convention
// 7 applied, not a shortcut. `mengatakan` and `berkata` are the standard written
// forms; `bilang` is what every Indonesian actually says in every province, and
// a learner who meets only `mengatakan` sounds like a newsreader. Both are in the
// hint so neither is a surprise. This is the same call `kenapa`/`mengapa` and
// `tunggu`/`menunggu` got in A1.
//
// ⚠️ `menerima` CARRIES BOTH ITS SENSES ON ONE CARD, on purpose. It is "to accept"
// AND "to receive", and its accept[] covers both — so **no separate *receive*
// word is carded anywhere in this band**, and the handling lesson later in the
// block was written around that.
//
// AFFIX ROOTS CHECKED BY HAND (the LEXEME probe fails open for Indonesian —
// unit1.js convention 3; every root below was stripped off and grepped in
// TAUGHT-WORDS.md, since a `free` verdict on a prefixed form is worthless):
//   memberitahu → beri + tahu  ⚠️ BOTH halves are taught: `memberi` (to give) is
//     A1's, and `tahu` (to know) is this block's own l1 of the previous unit. It
//     is literally "to give-know", and carded anyway — knowing *give* and *know*
//     does not give you *tell*, any more than English *understand* falls out of
//     *under* + *stand*. Drill-safe: "memberitahu" contains "tahu" at index 7,
//     preceded by "i" (a letter), so findWholeWord("tahu") does NOT match inside
//     it — a drill carrying only `memberitahu` would fail front `tahu`. Checked:
//     `tahu`'s own drill in the previous unit carries the bare word.
//   memaafkan → maaf     ⚠️ `maaf` IS taught ("sorry"). Carded: "sorry" does not
//     give you "to forgive". Drill-safe — "maaf" sits at index 2 of "memaafkan"
//     preceded by "m", so no whole-word match either way.
//   menawarkan → tawar   ⚠️ `menawar` IS taught ("to bargain"). Same root, and
//     this is the confusable pair of the unit, so both hints name the other.
//     Drill-safe: "menawarkan" contains "menawar" at index 0 but the next
//     character is "k", a letter — so findWholeWord("menawar") does NOT match
//     inside it. Verified rather than assumed; this is exactly the A7 trap.
//   mengucapkan → ucap · menyarankan → saran · mengizinkan → izin ·
//   melarang → larang · mengaku → aku ⚠️ (`aku` the pronoun is DEFERRED by
//     convention 7 and is not taught, so there is no collision) · mengeluh →
//     keluh · memuji → puji · mengobrol → obrol · berdiskusi → diskusi ·
//     berdebat → debat · menyapa → sapa · mengganggu → ganggu ·
//     mengundang → undang · meminta → minta · berjanji → janji
//     — NONE of those roots is taught.
//   bilang · setuju · menolak (→ tolak, untaught) · diam — roots.
//
// ⚠️ `diam` AND `diam-diam` ARE IN DIFFERENT UNITS AND THAT IS A DRILL DECISION.
// `diam-diam` (secretly) is carded later in this block. A hyphen is not a letter,
// so a drill containing `diam-diam` WOULD whole-word-match front `diam` and blank
// half a doubled word. **This unit's `diam` drill deliberately carries no
// `diam-diam`.** Convention 5's warning, live.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT22 = {
  id: "id-u22",
  lang: "id",
  title: "Bilang, setuju, dan janji",
  order: 22,
  stage: "a2",
  lessons: [
    {
      id: "id-u22l1",
      unit: 22,
      lesson: 1,
      title: "Bilang dan mengaku",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Report what somebody said, pass a message on, and own up to something or complain about it.",
      items: [
        { id: "id-u22l1-bilang", type: "vocab", front: "bilang", reading: "bilang", meaning: "to say", example: { jp: "Dia bilang tidak bisa datang malam ini.", en: "He says he cannot come tonight." }, accept: ["say", "to put it", "to state"], drill: { jp: "Ibu bilang harga ikan sudah mahal", en: "Mother says the price of fish is already expensive" }, hint: "BEE-lang, ending in the ng hum. The everyday word in every province — standard writing prefers mengatakan or berkata, and both are understood, but nobody says them over lunch. Note it needs no word for THAT: dia bilang tidak bisa, he says he cannot." },
        { id: "id-u22l1-memberitahu", type: "vocab", front: "memberitahu", reading: "memberitahu", meaning: "to tell someone", example: { jp: "Saya akan memberitahu ayah besok pagi.", en: "I will tell my father tomorrow morning." }, accept: ["to inform", "to let someone know", "to pass word to"], drill: { jp: "Guru memberitahu semua pelajar pagi ini", en: "The teacher told all the pupils this morning" }, hint: "muhm-buh-ree-TAH-hoo — long, and worth the breath. Literally memberi plus tahu, give plus know: you give somebody the knowing. Unlike bilang it takes the PERSON as its object — memberitahu saya, tell me. Kasih tahu is the short spoken version." },
        { id: "id-u22l1-menyebut", type: "vocab", front: "menyebut", reading: "menyebut", meaning: "to mention", example: { jp: "Dia tidak menyebut nama tempat itu.", en: "She did not mention the name of that place." }, accept: ["to cite", "to refer to", "to bring up"], drill: { jp: "Ayah menyebut dua kota besar di Indonesia", en: "Father mentioned two big cities in Indonesia" }, hint: "muh-nyuh-BOOT, the ny one sound. Its root sebut is to utter a name, so menyebut is naming something out loud rather than explaining it. Disebut means is called — kota itu disebut Bandung." },
        { id: "id-u22l1-mengaku", type: "vocab", front: "mengaku", reading: "mengaku", meaning: "to admit", example: { jp: "Anak itu mengaku sudah makan semua nasi.", en: "The child admitted he had eaten all the rice." }, accept: ["to confess", "to own up", "to concede"], drill: { jp: "Dia mengaku lupa membayar harga baju", en: "He admits he forgot to pay for the shirt" }, hint: "muh-NGAH-koo, opening on the ng hum. Confessing to something you would rather not — mengaku salah is to admit you were wrong. It also means to CLAIM to be something: dia mengaku dokter, he claims to be a doctor, and context alone separates the two." },
        { id: "id-u22l1-mengeluh", type: "vocab", front: "mengeluh", reading: "mengeluh", meaning: "to complain", example: { jp: "Tamu itu mengeluh karena kamar sangat panas.", en: "That guest complained because the room was very hot." }, accept: ["to grumble", "to moan", "to make a complaint"], drill: { jp: "Dia selalu mengeluh di depan guru", en: "He always complains in front of the teacher" }, hint: "muh-NGUH-looh. The e is the swallowed one and the final h is a real breath. In Indonesia complaining out loud carries more social weight than in English, so mengeluh often sounds like criticism of the complainer. Keluhan is the complaint itself." },
        { id: "id-u22l1-memuji", type: "vocab", front: "memuji", reading: "memuji", meaning: "to praise", example: { jp: "Ibu memuji nenek karena nasi goreng itu enak.", en: "Mother praised grandmother because that fried rice is delicious." }, accept: ["to compliment", "to speak well of", "to commend"], drill: { jp: "Guru memuji pelajar yang rajin itu", en: "The teacher praised that diligent pupil" }, hint: "muh-MOO-jee. The natural opposite of mengeluh, and used far more freely than in English — praising food, effort and children out loud is ordinary politeness rather than flattery. Pujian is a compliment." },
      ],
    },
    {
      id: "id-u22l2",
      unit: 22,
      lesson: 2,
      title: "Setuju atau menolak",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Agree to something, turn it down, give or withhold permission, and float a suggestion instead.",
      items: [
        { id: "id-u22l2-setuju", type: "vocab", front: "setuju", reading: "setuju", meaning: "to agree", example: { jp: "Saya setuju dengan pendapat kamu.", en: "I agree with your opinion." }, accept: ["to be in agreement", "to go along with", "to say yes"], drill: { jp: "Semua guru setuju dengan jadwal baru", en: "All the teachers agree with the new schedule" }, hint: "suh-TOO-joo, first e swallowed. It takes dengan for the thing agreed with: setuju dengan pendapat itu. Tidak setuju is the neutral, entirely polite way to disagree — Indonesian does not require you to soften it further. Persetujuan is consent or an agreement." },
        { id: "id-u22l2-menolak", type: "vocab", front: "menolak", reading: "menolak", meaning: "to refuse", example: { jp: "Dia menolak pekerjaan itu dengan baik.", en: "He turned that job down graciously." }, accept: ["to turn down", "to decline", "to reject"], drill: { jp: "Ibu menolak membayar harga yang mahal", en: "Mother refused to pay the expensive price" }, hint: "muh-NOH-lak, final k caught in the throat. From tolak, to push away — so it is pushing the thing back rather than merely saying no, which is why tidak mau is far softer and much more common in person. ⚠️ Nothing to do with tolong, please, despite the look of it." },
        { id: "id-u22l2-mengizinkan", type: "vocab", front: "mengizinkan", reading: "mengizinkan", meaning: "to permit", example: { jp: "Ayah mengizinkan saya pergi ke pasar.", en: "Father permitted me to go to the market." }, accept: ["to allow", "to give permission", "to let someone"], drill: { jp: "Guru mengizinkan kami keluar lebih awal", en: "The teacher allowed us to leave earlier" }, hint: "muh-ngee-ZEEN-kan. From izin, permission — and izin on its own is the word you ask WITH: minta izin, to ask permission. Where boleh states that a thing is allowed, mengizinkan names the person doing the allowing." },
        { id: "id-u22l2-melarang", type: "vocab", front: "melarang", reading: "melarang", meaning: "to forbid", example: { jp: "Ibu melarang anak kecil bermain di jalan.", en: "Mother forbids small children from playing in the street." }, accept: ["to ban", "to prohibit", "to not allow"], drill: { jp: "Dokter melarang ayah minum kopi", en: "The doctor forbade father from drinking coffee" }, hint: "muh-LAH-rang, ending on the ng hum. The exact opposite of mengizinkan. Dilarang, the passive, is what you actually READ in public — dilarang masuk, no entry; dilarang merokok, no smoking — so learn to recognise that form even though the passive itself waits for later." },
        { id: "id-u22l2-menerima", type: "vocab", front: "menerima", reading: "menerima", meaning: "to accept", example: { jp: "Saya menerima uang dari kantor pagi ini.", en: "I received money from the office this morning." }, accept: ["to receive", "to get something sent", "to take in"], drill: { jp: "Dia menerima uang dari kakak saya", en: "He received money from my older sibling" }, hint: "muh-nuh-REE-ma. One word for BOTH accepting and receiving, so menerima surat is to receive a letter and menerima tawaran is to accept an offer. ⚠️ The root terima is the one hiding inside terima kasih, thank you — literally receive love, which is a good way to remember it." },
        { id: "id-u22l2-menyarankan", type: "vocab", front: "menyarankan", reading: "menyarankan", meaning: "to suggest", example: { jp: "Dokter menyarankan ayah lebih banyak istirahat.", en: "The doctor suggested father rest more." }, accept: ["to recommend", "to advise", "to put forward"], drill: { jp: "Guru menyarankan kami membaca buku itu", en: "The teacher suggested we read that book" }, hint: "muh-nya-RAHN-kan, the ny one sound. From saran, a piece of advice: minta saran is to ask for advice. It is the polite way to steer somebody without using harus, must — which in Indonesian lands much harder than English *should*." },
      ],
    },
    {
      id: "id-u22l3",
      unit: 22,
      lesson: 3,
      title: "Janji dan minta",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Make a promise, ask somebody for something, invite them, and apologise properly when it goes wrong.",
      items: [
        { id: "id-u22l3-berjanji", type: "vocab", front: "berjanji", reading: "berjanji", meaning: "to promise", example: { jp: "Saya berjanji akan datang tepat waktu.", en: "I promise I will arrive on time." }, accept: ["to give your word", "to vow", "to undertake"], drill: { jp: "Ayah berjanji membeli sepeda baru", en: "Father promised to buy a new bicycle" }, hint: "buhr-JAHN-jee. From janji, a promise — and janji alone is heard constantly, including in the resigned janji ya? that means you promise, right? Janjian is the separate, very useful word for arranging to meet up." },
        { id: "id-u22l3-meminta", type: "vocab", front: "meminta", reading: "meminta", meaning: "to ask for", example: { jp: "Dia meminta tolong ke tetangga.", en: "She asked the neighbour for help." }, accept: ["to request", "to ask somebody for", "to put in for"], drill: { jp: "Pelajar meminta waktu lebih banyak", en: "The pupils asked for more time" }, hint: "muh-MEEN-ta. ⚠️ Not the same as tanya. Tanya asks a QUESTION; meminta asks for a THING. The spoken short form is minta — minta air, can I have some water — and that bare minta is what you will use at every warung." },
        { id: "id-u22l3-mengundang", type: "vocab", front: "mengundang", reading: "mengundang", meaning: "to invite", example: { jp: "Kami mengundang semua teman ke acara itu.", en: "We invited all our friends to that event." }, accept: ["to ask somebody along", "to have somebody over", "to summon"], drill: { jp: "Nenek mengundang keluarga untuk makan bersama", en: "Grandmother invited the family to eat together" }, hint: "muh-NGOON-dang, opening ng hum and closing ng hum. Undangan is the invitation itself, printed or spoken. Indonesian weddings run on them, so it is a word you will meet on paper long before you need to say it." },
        { id: "id-u22l3-menawarkan", type: "vocab", front: "menawarkan", reading: "menawarkan", meaning: "to offer", example: { jp: "Kasir menawarkan tas yang lebih murah.", en: "The cashier offered a cheaper bag." }, accept: ["to hold out", "to put on the table", "to propose giving"], drill: { jp: "Ibu menawarkan teh ke semua tamu", en: "Mother offered tea to all the guests" }, hint: "muh-nah-WAR-kan. ⚠️ THE CONFUSABLE PAIR OF THIS UNIT: menawar, which you already have, is to HAGGLE over a price; menawarkan, with -kan, is to OFFER something to somebody. Same root tawar, opposite sides of the transaction. Tawaran is the offer itself." },
        { id: "id-u22l3-mengucapkan", type: "vocab", front: "mengucapkan", reading: "mengucapkan", meaning: "to utter", example: { jp: "Dia mengucapkan terima kasih dengan senang.", en: "He expressed his thanks gladly." }, accept: ["to express in words", "to voice", "to pronounce"], drill: { jp: "Saya mengucapkan selamat pagi ke guru", en: "I said good morning to the teacher" }, hint: "muh-ngoo-CHAP-kan — the c is CH. This is the verb for SET phrases: mengucapkan terima kasih, mengucapkan selamat. You do not use it for ordinary talk, where bilang does the work. From ucap; ucapan is both an utterance and a person's pronunciation." },
        { id: "id-u22l3-memaafkan", type: "vocab", front: "memaafkan", reading: "memaafkan", meaning: "to forgive", example: { jp: "Ibu memaafkan saya karena saya mengaku.", en: "Mother forgave me because I owned up." }, accept: ["to pardon", "to let it go", "to excuse somebody"], drill: { jp: "Dia sudah memaafkan teman yang salah", en: "He has already forgiven the friend who was wrong" }, hint: "muh-mah-AHF-kan, with both a's sounded separately. Built on maaf, the sorry you already know: maaf is what you SAY, memaafkan is what the other person then DOES. Saling memaafkan, forgiving one another, is the phrase you will hear at the end of Ramadan." },
      ],
    },
    {
      id: "id-u22l4",
      unit: 22,
      lesson: 4,
      title: "Mengobrol dan berdebat",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Describe a conversation as it actually goes — chatting, discussing, arguing, going quiet, or being interrupted.",
      items: [
        { id: "id-u22l4-mengobrol", type: "vocab", front: "mengobrol", reading: "mengobrol", meaning: "to chat", example: { jp: "Kami mengobrol di depan rumah sampai malam.", en: "We chatted in front of the house until night." }, accept: ["to have a natter", "to talk casually", "to hang out talking"], drill: { jp: "Tetangga mengobrol di depan pasar", en: "The neighbours are chatting in front of the market" }, hint: "muh-NGOB-rol. Aimless friendly talk, and a genuinely important social activity rather than a filler — ngobrol, with the me- dropped, is what everyone actually says. Contrast berbicara, which is simply to speak, and berdiskusi, which has a subject." },
        { id: "id-u22l4-berdiskusi", type: "vocab", front: "berdiskusi", reading: "berdiskusi", meaning: "to discuss", example: { jp: "Kami berdiskusi dengan guru pagi ini.", en: "We had a discussion with the teacher this morning." }, accept: ["to talk something over", "to confer", "to hold a discussion"], drill: { jp: "Guru berdiskusi dengan semua ayah dan ibu", en: "The teacher discussed things with all the parents" }, hint: "buhr-dees-KOO-see. Borrowed, so it looks easy — note it takes tentang for the topic: berdiskusi tentang harga. Diskusi alone is the noun. Where mengobrol is aimless, berdiskusi has a point it is trying to reach." },
        { id: "id-u22l4-berdebat", type: "vocab", front: "berdebat", reading: "berdebat", meaning: "to argue", example: { jp: "Mereka berdebat karena pendapat yang berbeda.", en: "They argued because of differing opinions." }, accept: ["to have an argument", "to dispute", "to wrangle"], drill: { jp: "Kami berdebat sampai malam di kantor", en: "We argued until night at the office" }, hint: "buhr-duh-BAT. Arguing about an ISSUE — the reasoned kind, as in a debate. For the shouting kind Indonesians say bertengkar, which is a quarrel between people rather than a clash of views. Keep berdebat for opinions." },
        { id: "id-u22l4-diam", type: "vocab", front: "diam", reading: "diam", meaning: "to be silent", example: { jp: "Semua orang diam karena guru sudah masuk.", en: "Everyone went quiet because the teacher had come in." }, accept: ["to keep quiet", "to say nothing", "to hold your tongue"], drill: { jp: "Anak itu diam karena takut", en: "That child is silent because he is afraid" }, hint: "DEE-ahm, two syllables. It covers both staying silent and staying STILL — diam di tempat is stay put. Diam! on its own is a sharp be quiet, so use it carefully. ⚠️ Doubled to diam-diam it becomes secretly, a different word, which you meet later in this band." },
        { id: "id-u22l4-menyapa", type: "vocab", front: "menyapa", reading: "menyapa", meaning: "to greet", example: { jp: "Dia menyapa saya dengan senang setiap pagi.", en: "He greets me warmly every morning." }, accept: ["to say hello to", "to acknowledge somebody", "to hail"], drill: { jp: "Ibu menyapa tetangga di depan rumah", en: "Mother greets the neighbour in front of the house" }, hint: "muh-NYAH-pa, the ny one sound. The ACT of greeting, where selamat pagi is the greeting itself. Failing to menyapa a neighbour you pass is a real discourtesy in Indonesia, so the verb comes up often. Sapaan is a form of address." },
        { id: "id-u22l4-mengganggu", type: "vocab", front: "mengganggu", reading: "mengganggu", meaning: "to disturb", example: { jp: "Mobil itu mengganggu ayah yang sedang tidur.", en: "That car is disturbing my father, who is sleeping." }, accept: ["to bother", "to interrupt", "to be a nuisance to"], drill: { jp: "Nyamuk mengganggu kami semua malam ini", en: "Mosquitoes are bothering us all tonight" }, hint: "muh-NGANG-goo — ngg is the hum plus a hard g, the trap from the sounds unit. Maaf mengganggu, sorry to bother you, is how you open any interruption, in person or on the phone. Gangguan is a disturbance or, of a phone line, interference." },
      ],
    },
  ],
};
