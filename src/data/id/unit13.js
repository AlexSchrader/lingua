// ID Unit 13 — Tata bahasa 2 — kata kerja dan aspek ("Grammar 2 — verbs and aspect") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u8–u14), authored 2026-09-27. The 12 conventions in unit1.js BIND
// this file.
//
// 🚨 THIS SLOT WAS RETHEMED, NOT JUST TRANSLATED. The scaffold stubbed it
// **"Grammar 2 — verbs and particles"**. That is a JAPANESE slot title, and
// Indonesian has no particles and no case — the title named a thing the language
// does not contain. Convention 12 in unit1.js flags it, block 1 recommended the
// replacement, and the merge seat endorsed it; retitling and rethemeing a slot is
// ordinary authoring, not an escalation (CLAUDE.md "No front language").
//   ⚠️ The failure this avoids is on the record: Portuguese AND Norwegian both
//   shipped a unit called *"Register 3 — 敬語: humble and honorific"* because a
//   seat took a scaffold title literally. 敬語 is Japanese. Neither language has it.
//
// SO WHAT IS THE HONEST INDONESIAN EQUIVALENT? **Aspect.** Indonesian verbs never
// conjugate — not for tense, not for person, not for number — so the work English
// does with verb endings is done here by five free-standing markers placed in
// front of the verb: `sudah` · `belum` · `sedang` · `akan` · `masih`. That is
// where the language actually puts "Grammar 2", and those five are precisely
// what block 1 reserved for this slot.
//   l1  sudah / belum — done or not-yet, plus pernah, selesai, mulai, tadi
//   l2  sedang / masih — in progress, plus sambil, terus, berhenti, hampir
//   l3  akan — the future, plus rencana, datang, siap, jadwal, kembali
//   l4  six me-/ber- verbs the aspect markers now have something to mark
//
// 🚨 `belum` IS NOT `tidak`, AND THIS IS THE ERROR THAT MARKS A BEGINNER. Asked
// "Sudah makan?", the answer is **Belum** if you have not eaten yet. `tidak`
// there means you are REFUSING to eat. Indonesians hear the difference at once,
// and no amount of context repairs it. It is in `belum`'s hint in those words.
//
// AFFIX SPLITS IN THIS UNIT, checked BY HAND because the probe cannot help.
// `check-front.mjs`'s LEXEME verdict fails open for Indonesian — `stem()` strips
// GERMAN SUFFIXES and Indonesian derives by PREFIX, so it reported `free` on 0 of
// 14 real derivations block 1 tested. So every prefixed front here had its root
// stripped and grepped against TAUGHT-WORDS.md by hand:
//   melihat → lihat · mendengar → dengar · berbicara → bicara · mengerti → erti
//   memberi → beri · membantu → bantu · berhenti → henti · berbeda → beda
//   NONE of those eight roots is taught anywhere in id. No root is taught twice.
// Each is carded ONCE, with the prefix kept, per convention 4 — a `drill` must
// contain its front as a WHOLE WORD, and `cari` is not a whole word inside
// `mencari`. The bare roots are named in the hints as the register variants they
// are (`lihat`, `bicara`, `paham`, `kasih`, `bantu`), never as second cards.
//
// ⚠️ A GAP THIS UNIT COULD NOT FILL, flagged for the block-1 lead: **Indonesian
// has no word for "we" anywhere in the corpus.** `kita` (inclusive) and `kami`
// (exclusive) are both untaught through u13, and the distinction between them is
// one of the first things a learner needs. u3 owns the pronouns and is merged, so
// it is not block 2's to add. `siap`'s example wanted "we can go" and had to be
// rewritten around the hole.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT13 = {
  id: "id-u13",
  lang: "id",
  title: "Tata bahasa 2 — kata kerja dan aspek",
  order: 13,
  stage: "a1",
  lessons: [
    {
      id: "id-u13l1",
      unit: 13,
      lesson: 1,
      title: "Sudah dan belum — selesai atau belum",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Say whether you have already done a thing or have not done it yet, and answer a sudah question with belum rather than tidak.",
      items: [
        { id: "id-u13l1-sudah", type: "vocab", front: "sudah", reading: "sudah", meaning: "already", example: { jp: "Saya sudah makan dan tidak lapar.", en: "I have already eaten and I am not hungry." }, accept: ["have done", "have already", "did"], drill: { jp: "Budi sudah makan dan tidak lapar", en: "Budi has already eaten and is not hungry" }, hint: "SOO-dah, breathed h. Indonesian has NO past tense — sudah is how the language says a thing is done, and it goes in front of the verb: sudah makan. Sudah? on its own asks \"done yet?\" and Sudah. answers it. Udah is the short spoken form, and you will hear it constantly." },
        { id: "id-u13l1-belum", type: "vocab", front: "belum", reading: "belum", meaning: "not yet", example: { jp: "Saya belum makan karena saya sibuk.", en: "I have not eaten yet because I am busy." }, accept: ["have not yet", "still not", "not so far"], drill: { jp: "Budi belum makan karena dia sibuk", en: "Budi has not eaten yet because he is busy" }, hint: "buh-LOOM — swallowed first e. This is the ONLY right answer to a sudah question when the thing has not happened: Sudah makan? — Belum. Never tidak there. Tidak would mean you are refusing to eat at all, where belum means simply not yet, and Indonesians hear the difference immediately." },
        { id: "id-u13l1-pernah", type: "vocab", front: "pernah", reading: "pernah", meaning: "ever", example: { jp: "Saya pernah ke Bali dan saya suka.", en: "I have been to Bali and I liked it." }, accept: ["have ever", "once", "at some time"], drill: { jp: "Budi pernah ke Bali dan suka", en: "Budi has been to Bali and liked it" }, hint: "PUHR-nah — swallowed first e, breathed h. It marks EXPERIENCE rather than completion: pernah ke Bali is \"have been to Bali at some point in my life\". Belum pernah is \"never yet\"; tidak pernah is a flat \"never\"." },
        { id: "id-u13l1-selesai", type: "vocab", front: "selesai", reading: "selesai", meaning: "finished", example: { jp: "Pekerjaan saya selesai dan saya mau istirahat.", en: "My work is finished and I want to rest." }, accept: ["done", "complete", "over", "to finish"], drill: { jp: "Pekerjaan Budi selesai dan dia istirahat", en: "Budi's work is finished and he rests" }, hint: "suh-luh-SIGH — three syllables, and the final ai is a single sound. This is a STATE, not a marker, so it happily sits beside one: sudah selesai, \"already finished\", is completely normal." },
        { id: "id-u13l1-mulai", type: "vocab", front: "mulai", reading: "mulai", meaning: "to begin", example: { jp: "Sekolah mulai jam tujuh pagi.", en: "School begins at seven in the morning." }, accept: ["begin", "to start", "start"], drill: { jp: "Kantor mulai jam delapan setiap hari", en: "The office starts at eight every day" }, hint: "MOO-lye — the ai is one sound, like English \"eye\". The opposite of selesai. Mulai dari is \"starting from\". Keep it clear of mulut, mouth: one ends -lai, the other -lut." },
        { id: "id-u13l1-tadi", type: "vocab", front: "tadi", reading: "tadi", meaning: "earlier today", example: { jp: "Tadi saya pergi ke pasar dan beberapa toko.", en: "Earlier today I went to the market and a few shops." }, accept: ["just now", "a while ago", "earlier"], drill: { jp: "Tadi Budi pergi ke pasar kota", en: "Earlier today Budi went to the city market" }, hint: "TAH-dee — and it means earlier TODAY specifically. Kemarin is yesterday, lalu is further back than that. Tadi pagi is \"this morning\", tadi malam \"last night\". It usually opens the sentence." },
      ],
    },
    {
      id: "id-u13l2",
      unit: 13,
      lesson: 2,
      title: "Sedang dan masih — yang belum berhenti",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Say what is going on right now, what is still going on, and what has very nearly happened.",
      items: [
        { id: "id-u13l2-sedang", type: "vocab", front: "sedang", reading: "sedang", meaning: "in the middle of", example: { jp: "Budi sedang makan di warung.", en: "Budi is eating at the food stall." }, accept: ["currently", "in the process of", "is doing", "right now doing"], drill: { jp: "Budi sedang makan di warung pasar", en: "Budi is eating at the market food stall" }, hint: "suh-DAHNG — swallowed e, hum at the end. It marks an action IN PROGRESS, in front of the verb: sedang makan. Indonesian needs it far less often than English needs \"-ing\" — Budi makan is already enough unless you want to stress that it is happening right now. The same word also means \"medium\" as a size, doing a completely separate job." },
        { id: "id-u13l2-masih", type: "vocab", front: "masih", reading: "masih", meaning: "still", example: { jp: "Ibu saya masih sakit dan belum sembuh.", en: "My mother is still ill and has not recovered yet." }, accept: ["yet", "even now", "continuing to be"], drill: { jp: "Ibu Budi masih sakit dan belum sembuh", en: "Budi's mother is still ill and not yet recovered" }, hint: "MAH-sih, breathed h. It goes in front of a verb or an adjective alike: masih sakit, masih makan. Masih ada? is how you ask a shop whether they still have something, and it will be the phrase you use most." },
        { id: "id-u13l2-sambil", type: "vocab", front: "sambil", reading: "sambil", meaning: "while", example: { jp: "Saya makan sambil melihat langit.", en: "I eat while looking at the sky." }, accept: ["at the same time as", "whilst", "as"], drill: { jp: "Budi makan sambil melihat langit biru", en: "Budi eats while looking at the blue sky" }, hint: "SAHM-bil. It joins TWO things ONE person is doing at once, and a verb has to follow it: makan sambil belajar. It cannot join two different people — that needs dan." },
        { id: "id-u13l2-terus", type: "vocab", front: "terus", reading: "terus", meaning: "to keep on", example: { jp: "Hujan terus dan jalan sangat basah.", en: "It keeps raining and the street is very wet." }, accept: ["continue", "keep going", "straight on", "then"], drill: { jp: "Hujan terus dan kota sangat basah", en: "It keeps raining and the city is very wet" }, hint: "tuh-ROOS — swallowed e. Three jobs: keep on doing something (hujan terus), carry straight on down a road (terus saja), and \"and then\" in a story. The road sense is why every taxi driver says it." },
        { id: "id-u13l2-berhenti", type: "vocab", front: "berhenti", reading: "berhenti", meaning: "to stop", example: { jp: "Hujan berhenti dan langit cerah sekarang.", en: "The rain stopped and the sky is clear now." }, accept: ["stop", "to halt", "cease", "pull over"], drill: { jp: "Hujan berhenti dan Budi pergi sekarang", en: "The rain stopped and Budi is going now" }, hint: "buhr-HEN-tee — ber- built onto the root henti, which almost never appears alone. The opposite of terus, and it is what you say to a driver: Berhenti di sini." },
        { id: "id-u13l2-hampir", type: "vocab", front: "hampir", reading: "hampir", meaning: "almost", example: { jp: "Saya hampir selesai dan mau istirahat.", en: "I am almost finished and want to rest." }, accept: ["nearly", "about to", "just about"], drill: { jp: "Budi hampir selesai dan mau istirahat", en: "Budi is almost finished and wants to rest" }, hint: "HAHM-pir. In front of a verb or an adjective: hampir selesai, hampir hujan. Hampir tidak pernah is \"hardly ever\" and hampir semua is \"nearly all\"." },
      ],
    },
    {
      id: "id-u13l3",
      unit: 13,
      lesson: 3,
      title: "Akan — rencana dan jadwal",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Talk about a plan — what will happen, who is coming, and what the timetable says.",
      items: [
        { id: "id-u13l3-akan", type: "vocab", front: "akan", reading: "akan", meaning: "will", example: { jp: "Saya akan pergi ke Bali bulan Mei.", en: "I will go to Bali in May." }, accept: ["going to", "shall", "is about to"], drill: { jp: "Budi akan pergi ke Bali bulan Mei", en: "Budi will go to Bali in May" }, hint: "AH-kahn — the mirror image of sudah, in front of the verb, marking the future. Indonesian often drops it when a time word is already doing the job: besok saya pergi needs no akan at all. Mau also serves as a casual future, and that is what people actually say." },
        { id: "id-u13l3-rencana", type: "vocab", front: "rencana", reading: "rencana", meaning: "plan", example: { jp: "Rencana saya hari Sabtu adalah ke pasar.", en: "My plan on Saturday is to go to the market." }, accept: ["a plan", "scheme", "intention"], drill: { jp: "Rencana Budi hari Sabtu ke pasar", en: "Budi's plan on Saturday is the market" }, hint: "ruhn-CHAH-na — c is CH, first e swallowed. Ada rencana? is \"got plans?\", asking the same thing acara asks a shade more casually. The verb built on it, merencanakan, needs an ending you have not met." },
        { id: "id-u13l3-datang", type: "vocab", front: "datang", reading: "datang", meaning: "to come", example: { jp: "Ibu saya akan datang hari Minggu.", en: "My mother will come on Sunday." }, accept: ["come", "to arrive", "arrive", "turn up"], drill: { jp: "Ibu Budi akan datang hari Minggu", en: "Budi's mother will come on Sunday" }, hint: "DAH-tahng, hum at the end. Selamat datang — \"welcome\" — is this word, and it is painted on every airport wall in the country. It covers coming AND arriving; Indonesian does not split the two." },
        { id: "id-u13l3-siap", type: "vocab", front: "siap", reading: "siap", meaning: "ready", example: { jp: "Nasi goreng siap dan sangat panas.", en: "The fried rice is ready and very hot." }, accept: ["prepared", "all set", "get ready"], drill: { jp: "Nasi goreng siap dan Budi makan", en: "The fried rice is ready and Budi eats" }, hint: "SEE-ahp — two syllables, both vowels sounded. Siap? — Siap! is the whole exchange for \"ready?\" — \"ready!\". Keep it clear of siapa, who: siap has no final a." },
        { id: "id-u13l3-jadwal", type: "vocab", front: "jadwal", reading: "jadwal", meaning: "schedule", example: { jp: "Jadwal kereta ke kota ada di sana.", en: "The train schedule to the city is over there." }, accept: ["a schedule", "timetable", "the timetable"], drill: { jp: "Jadwal kereta ke kota ada sekarang", en: "The train schedule to the city is available now" }, hint: "JAHD-wal — two syllables, and the dw is said as written with no vowel squeezed between. From Arabic, like the day names. Jadwal kereta, jadwal sekolah, jadwal dokter — it works with anything that runs to a timetable." },
        { id: "id-u13l3-kembali", type: "vocab", front: "kembali", reading: "kembali", meaning: "to return", example: { jp: "Budi akan kembali ke kantor hari Senin.", en: "Budi will return to the office on Monday." }, accept: ["return", "to come back", "go back", "head back"], drill: { jp: "Budi akan kembali ke kantor Senin", en: "Budi will return to the office Monday" }, hint: "kuhm-BAH-lee — swallowed first e. It doubles as a polite reply to thanks: say terima kasih and you may hear Kembali, a shade more formal than sama-sama. Uang kembali is your change in a shop." },
      ],
    },
    {
      id: "id-u13l4",
      unit: 13,
      lesson: 4,
      title: "Kata kerja dengan me- dan ber-",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Say what you can see, hear and understand, and offer to help someone with it.",
      items: [
        { id: "id-u13l4-melihat", type: "vocab", front: "melihat", reading: "melihat", meaning: "to see", example: { jp: "Saya melihat awan hitam di langit.", en: "I see black clouds in the sky." }, accept: ["see", "to look at", "watch", "to watch"], drill: { jp: "Budi melihat awan hitam di langit", en: "Budi sees black clouds in the sky" }, hint: "muh-LEE-hat — me- plus the root lihat. The bare root as a command, Lihat!, is \"look!\", but inside a sentence standard Indonesian keeps the prefix. Lihat and melihat are one word in two registers, so only this one gets a card." },
        { id: "id-u13l4-mendengar", type: "vocab", front: "mendengar", reading: "mendengar", meaning: "to hear", example: { jp: "Saya mendengar hujan dan angin malam ini.", en: "I hear the rain and the wind tonight." }, accept: ["hear", "to listen to", "listen"], drill: { jp: "Budi mendengar hujan dan angin malam", en: "Budi hears the rain and the wind at night" }, hint: "muhn-DUH-ngar — men- plus dengar, hum in the middle. Do NOT let it blur into dengan, \"with\" — mendengar has the r on the end. Mendengarkan, with an ending you have not met, is listening ON PURPOSE rather than merely hearing." },
        { id: "id-u13l4-berbicara", type: "vocab", front: "berbicara", reading: "berbicara", meaning: "to speak", example: { jp: "Saya bisa berbicara bahasa Indonesia sedikit.", en: "I can speak a little Indonesian." }, accept: ["speak", "to talk", "talk", "converse"], drill: { jp: "Budi bisa berbicara bahasa Indonesia sedikit", en: "Budi can speak a little Indonesian" }, hint: "buhr-bee-CHAH-ra — c is CH. Ber- plus bicara. This is the verb for naming a language: berbicara bahasa Indonesia. Ngomong is the casual spoken word for it, and bare bicara is normal too — the prefix is kept here so the whole word is findable in a sentence." },
        { id: "id-u13l4-mengerti", type: "vocab", front: "mengerti", reading: "mengerti", meaning: "to understand", example: { jp: "Saya tidak mengerti karena Anda berbicara cepat.", en: "I do not understand because you speak fast." }, accept: ["understand", "to get it", "comprehend"], drill: { jp: "Budi tidak mengerti karena saya berbicara cepat", en: "Budi does not understand because I speak fast" }, hint: "muh-NGUHR-tee — the ng is the single hum, so it opens muh-NG and not men-g. Tidak mengerti is the sentence that will rescue you most often. Paham is the shorter twin and just as common, and Mengerti? asks \"got it?\"." },
        { id: "id-u13l4-memberi", type: "vocab", front: "memberi", reading: "memberi", meaning: "to give", example: { jp: "Ibu saya memberi obat untuk anak saya.", en: "My mother gives medicine for my child." }, accept: ["give", "to hand over", "hand over", "to provide"], drill: { jp: "Ibu Budi memberi obat untuk anak", en: "Budi's mother gives medicine for the child" }, hint: "muhm-buh-REE — mem- plus beri. Kasih is the everyday spoken word and you will hear it far more — and it is the kasih of terima kasih, which means something like \"receive the giving\"." },
        { id: "id-u13l4-membantu", type: "vocab", front: "membantu", reading: "membantu", meaning: "to help", example: { jp: "Saya mau membantu ibu di dapur.", en: "I want to help my mother in the kitchen." }, accept: ["help", "to assist", "assist", "give a hand"], drill: { jp: "Budi mau membantu ibu di dapur", en: "Budi wants to help his mother in the kitchen" }, hint: "muhm-BAHN-too — mem- plus bantu. Bisa bantu? is the short spoken way to ask for help, dropping the prefix. Tolong is what you shout in an emergency; membantu is the ordinary act of helping." },
      ],
    },
  ],
};
