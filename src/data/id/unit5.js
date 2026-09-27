// ID Unit 5 — Angka dan waktu (slot: numbers-time) — A1
// Numbers one to ten, the clock, and the words that place an event in time.
// Indonesian has NO TENSE, so this unit is doing grammatical work as well as
// vocabulary: sekarang, besok, kemarin and nanti are what carry time in a
// language whose verbs never change shape. Say that in the hints — a learner
// hunting for a past form needs to be told there isn't one.
// ⚠️ THE BARE TIME WORDS LIVE HERE ON PURPOSE (id/unit1.js §8). pagi, siang,
// sore and malam are separate cards from the selamat-greetings that contain
// them: the greeting teaches a ritual, the bare word teaches a time of day and
// unlocks jam tujuh pagi. Glosses are distinct on both sides ("good morning" vs
// "morning"), so neither competes with the other for one prompt.
// lang/unit/lesson are stamped in src/data/index.js.
export const ID_UNIT5 = {
  id: "id-u5",
  lang: "id",
  title: "Angka dan waktu",
  order: 5,
  stage: "a1",
  lessons: [
    {
      id: "id-u5l1",
      unit: 5,
      lesson: 1,
      title: "Satu sampai lima",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count from one to five and say how many of something you have.",
      items: [
        { id: "id-u5l1-satu", type: "vocab", front: "satu", reading: "satu", meaning: "one", example: { jp: "Saya punya satu kucing.", en: "I have one cat." }, accept: ["1", "a single", "single"], drill: { jp: "Budi punya satu adik", en: "Budi has one younger sibling" }, hint: "SAH-too. Numbers go BEFORE the noun and the noun never changes: satu kucing, dua kucing — no plural ending anywhere, because the number has already said how many." },
        { id: "id-u5l1-dua", type: "vocab", front: "dua", reading: "dua", meaning: "two", example: { jp: "Saya punya dua anak.", en: "I have two children." }, accept: ["2", "a pair", "both"], drill: { jp: "Siti punya dua kucing", en: "Siti has two cats" }, hint: "DOO-a, two beats. Once a number is there you never double the noun for plural — dua anak, never dua anak-anak." },
        { id: "id-u5l1-tiga", type: "vocab", front: "tiga", reading: "tiga", meaning: "three", example: { jp: "Keluarga saya punya tiga kamar.", en: "My family has three rooms." }, accept: ["3"], drill: { jp: "Rumah saya punya tiga kamar", en: "My house has three rooms" }, hint: "TEE-ga, hard g. Indonesian numbers are unusually regular — learn one to ten and the tens, hundreds and thousands are built from them with no exceptions to memorise." },
        { id: "id-u5l1-empat", type: "vocab", front: "empat", reading: "empat", meaning: "four", example: { jp: "Nenek saya punya empat cucu.", en: "My grandmother has four grandchildren." }, accept: ["4"], drill: { jp: "Budi punya empat saudara", en: "Budi has four relatives" }, hint: "UHM-pat — the e is the swallowed kind and the final t is a real, if soft, t. Not \"em-PAT\": Indonesian stress sits on the second-to-last syllable." },
        { id: "id-u5l1-lima", type: "vocab", front: "lima", reading: "lima", meaning: "five", example: { jp: "Paman saya punya lima anak.", en: "My uncle has five children." }, accept: ["5"], drill: { jp: "Saya bekerja lima hari", en: "I work five days" }, hint: "LEE-ma. Same word as in Swahili and across the Austronesian world — Indonesian's numbers are a family heirloom shared from Madagascar to Hawaii." },
        { id: "id-u5l1-berapa", type: "vocab", front: "berapa", reading: "berapa", meaning: "how many", example: { jp: "Berapa anak Anda?", en: "How many children do you have?" }, accept: ["how much", "what number", "how many are there"], drill: { jp: "Budi punya berapa saudara", en: "How many relatives does Budi have" }, hint: "buh-RAH-pa. One word for both \"how many\" and \"how much\", because Indonesian does not divide nouns into countable and uncountable. It is also how you ask a price." },
      ],
    },
    {
      id: "id-u5l2",
      unit: 5,
      lesson: 2,
      title: "Enam sampai sepuluh",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Finish counting to ten and read a phone number or a price out digit by digit.",
      items: [
        { id: "id-u5l2-enam", type: "vocab", front: "enam", reading: "enam", meaning: "six", example: { jp: "Saya bekerja enam hari.", en: "I work six days." }, accept: ["6"], drill: { jp: "Budi bekerja enam hari", en: "Budi works six days" }, hint: "uh-NAHM, swallowed e at the front. Do not confuse it with empat, which starts the same way — the m at the end is the tell." },
        { id: "id-u5l2-tujuh", type: "vocab", front: "tujuh", reading: "tujuh", meaning: "seven", example: { jp: "Kakek saya punya tujuh cucu.", en: "My grandfather has seven grandchildren." }, accept: ["7"], drill: { jp: "Nenek punya tujuh cucu", en: "Grandmother has seven grandchildren" }, hint: "TOO-jooh, with the j of JUDGE and a breathy h you can actually hear. Indonesian sounds its final h — dropping it makes tujuh sound like a different word." },
        { id: "id-u5l2-delapan", type: "vocab", front: "delapan", reading: "delapan", meaning: "eight", example: { jp: "Rumah nenek saya punya delapan kamar.", en: "My grandmother's house has eight rooms." }, accept: ["8"], drill: { jp: "Rumah Budi punya delapan kamar", en: "Budi's house has eight rooms" }, hint: "duh-LAH-pahn, first e swallowed. The longest of the ten and the one learners stumble on — say it as three even beats." },
        { id: "id-u5l2-sembilan", type: "vocab", front: "sembilan", reading: "sembilan", meaning: "nine", example: { jp: "Bibi saya punya sembilan kucing.", en: "My aunt has nine cats." }, accept: ["9"], drill: { jp: "Siti punya sembilan kucing", en: "Siti has nine cats" }, hint: "suhm-BEE-lahn. Another swallowed e at the front — you will have noticed that a great many Indonesian words start with one." },
        { id: "id-u5l2-sepuluh", type: "vocab", front: "sepuluh", reading: "sepuluh", meaning: "ten", example: { jp: "Saya punya sepuluh teman di Jakarta.", en: "I have ten friends in Jakarta." }, accept: ["10"], drill: { jp: "Budi punya sepuluh teman", en: "Budi has ten friends" }, hint: "suh-POO-looh. The se- at the front is the same se- that means \"one\", and puluh is the unit of ten — so \"ten\" is literally \"one ten\". Every later number reuses puluh." },
        { id: "id-u5l2-nol", type: "vocab", front: "nol", reading: "nol", meaning: "zero", example: { jp: "Nol, satu, dua, tiga.", en: "Zero, one, two, three." }, accept: ["0", "nought", "nil"], drill: { jp: "Nol dan satu dan dua", en: "Zero and one and two" }, hint: "NOL, from Dutch nul. Used for digits and scores; for \"empty\" or \"vacant\" Indonesian reaches for kosong instead, and you will hear kosong read out in phone numbers too." },
      ],
    },
    {
      id: "id-u5l3",
      unit: 5,
      lesson: 3,
      title: "Jam berapa?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask what time it is, say the hour, and name which part of the day you mean.",
      items: [
        { id: "id-u5l3-jam", type: "vocab", front: "jam", reading: "jam", meaning: "o'clock", example: { jp: "Jam berapa sekarang?", en: "What time is it now?" }, accept: ["hour", "clock", "watch", "time"], drill: { jp: "Jam berapa Budi pergi", en: "What time does Budi go" }, hint: "JAHM. It means the hour, the clock and the wristwatch all at once. jam berapa, literally \"what-number hour\", is how you ask the time." },
        { id: "id-u5l3-menit", type: "vocab", front: "menit", reading: "menit", meaning: "minute", example: { jp: "Tunggu lima menit!", en: "Wait five minutes!" }, accept: ["minutes", "a minute"], drill: { jp: "Tunggu lima menit dan pergi", en: "Wait five minutes and go" }, hint: "MUH-nit, swallowed e, from Dutch minuut. Like every Indonesian noun it does not change for plural: lima menit, not lima menits." },
        { id: "id-u5l3-pagi", type: "vocab", front: "pagi", reading: "pagi", meaning: "morning", example: { jp: "Saya bangun pagi.", en: "I get up in the morning." }, accept: ["in the morning", "early", "a.m."], drill: { jp: "Saya bangun pagi dan bekerja", en: "I get up in the morning and work" }, hint: "You already know this word from the greeting selamat pagi. On its own it is the time of day, and it is what you attach to a clock hour: jam tujuh pagi, seven in the morning." },
        { id: "id-u5l3-siang", type: "vocab", front: "siang", reading: "siang", meaning: "midday", example: { jp: "Budi bekerja siang dan malam di Jakarta.", en: "Budi works day and night in Jakarta." }, accept: ["noon", "daytime", "afternoon", "in the daytime"], drill: { jp: "Saya bekerja siang dan malam", en: "I work day and night" }, hint: "SEE-ahng, ending in the hum. The stretch around noon, when the sun is overhead — the part of the day English has no single word for." },
        { id: "id-u5l3-sore", type: "vocab", front: "sore", reading: "sore", meaning: "afternoon", example: { jp: "Sore saya pergi ke rumah teman saya.", en: "In the afternoon I go to my friend's house." }, accept: ["late afternoon", "early evening", "in the afternoon"], drill: { jp: "Sore saya pergi ke Jakarta", en: "In the afternoon I go to Jakarta" }, hint: "SOH-reh — and that final e is the OTHER e, a clear eh, not a swallowed uh. Compare it with the swallowed one in menit: same letter, two sounds, no spelling clue." },
        { id: "id-u5l3-malam", type: "vocab", front: "malam", reading: "malam", meaning: "night", example: { jp: "Malam saya tidur di kamar saya.", en: "At night I sleep in my room." }, accept: ["evening", "at night", "nighttime", "p.m."], drill: { jp: "Malam saya tidur di rumah", en: "At night I sleep at home" }, hint: "MAH-lahm. From about six onwards. Attach it to a clock hour for the evening: jam delapan malam, eight at night." },
      ],
    },
    {
      id: "id-u5l4",
      unit: 5,
      lesson: 4,
      title: "Hari, besok dan kemarin",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Place an event in time relative to today, in a language whose verbs never change shape.",
      items: [
        { id: "id-u5l4-hari", type: "vocab", front: "hari", reading: "hari", meaning: "day", example: { jp: "Saya belajar bahasa Indonesia tiga hari.", en: "I have been studying Indonesian for three days." }, accept: ["a day", "days", "date"], drill: { jp: "Saya belajar tiga hari lagi", en: "I study three more days" }, hint: "HAH-ree. The building block for every day-word in the language, and the h at the front is sounded." },
        { id: "id-u5l4-besok", type: "vocab", front: "besok", reading: "besok", meaning: "tomorrow", example: { jp: "Besok saya pergi ke Bali.", en: "Tomorrow I am going to Bali." }, accept: ["the next day", "the following day"], drill: { jp: "Besok saya bertemu teman saya", en: "Tomorrow I am meeting my friend" }, hint: "BEH-so' — a clear eh this time, then the swallowed k. This word is doing the job English does with \"will\": Indonesian has no future tense, so besok IS the future marker." },
        { id: "id-u5l4-kemarin", type: "vocab", front: "kemarin", reading: "kemarin", meaning: "yesterday", example: { jp: "Kemarin saya bertemu Budi.", en: "Yesterday I met Budi." }, accept: ["the day before", "last day"], drill: { jp: "Kemarin saya pergi ke Jakarta", en: "Yesterday I went to Jakarta" }, hint: "kuh-MAH-rin, swallowed e. The verb in kemarin saya bertemu Budi is in no past form at all — there isn't one. If you catch yourself looking for a past ending, this is the word that replaces it." },
        { id: "id-u5l4-nanti", type: "vocab", front: "nanti", reading: "nanti", meaning: "later", example: { jp: "Nanti saya tidur.", en: "I'll sleep later." }, accept: ["in a while", "afterwards", "soon"], drill: { jp: "Nanti saya pergi ke rumah", en: "Later I will go home" }, hint: "NAHN-tee. You have met it in the goodbye sampai nanti. On its own it means later TODAY — for tomorrow you need besok instead." },
        { id: "id-u5l4-waktu", type: "vocab", front: "waktu", reading: "waktu", meaning: "time", example: { jp: "Saya tidak punya waktu sekarang.", en: "I don't have time now." }, accept: ["a time", "period", "when", "moment"], drill: { jp: "Budi tidak punya waktu pagi", en: "Budi does not have time in the morning" }, hint: "WAHK-too, with the k swallowed into a catch before the t. Time as a quantity — jam is the hour on the clock, waktu is the stuff you run out of." },
        { id: "id-u5l4-lagi", type: "vocab", front: "lagi", reading: "lagi", meaning: "again", example: { jp: "Besok saya bertemu Budi lagi.", en: "Tomorrow I'll meet Budi again." }, accept: ["more", "another", "once more", "still"], drill: { jp: "Saya mau belajar lagi sekarang", en: "I want to study again now" }, hint: "LAH-ghee, hard g. After a number it means \"more\": tiga hari lagi, three more days. In front of a verb it can also mean \"currently\", which is a second job worth watching for." },
      ],
    },
  ],
};
