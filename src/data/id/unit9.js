// ID Unit 9 — Hari dan bulan ("Days and months") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u8–u14), authored 2026-09-27. The 12 conventions in unit1.js BIND
// this file. Slot retitled from the scaffold's English "Days and months".
//
//   l1  the six Arabic-named days, Senin–Sabtu
//   l2  the weekend, the day off, and being busy — where Minggu lives
//   l3  the date system, small-to-large, plus the three unguessable months
//   l4  week / when / ago / every / often / rarely — the frequency layer
//
// TWO DECISIONS WORTH THE INK, BOTH MEASURED:
//
// 1. **`hari Minggu` IS THE FRONT FOR SUNDAY, AND `minggu` IS A SEPARATE CARD
//    IN A DIFFERENT LESSON.** `Minggu` and `minggu` differ only in case, so
//    carding both would put TWO fronts on one reading fold ("minggu") — and a
//    dictation card would then accept the wrong word, the defect that bit `no`
//    and `de` (convention 9). `hari Minggu` folds to "hariminggu" instead, which
//    collides with nothing, and it is also what Indonesians actually say: the
//    `hari` is not optional with Minggu the way it is with Senin. Convention 8
//    (a fixed phrase and its component word may both be cards) is what licenses
//    the pair, exactly as it licenses `selamat pagi` beside `pagi`.
//    ⚠️ They are deliberately in DIFFERENT lessons (l2 and l4). Same-lesson
//    would put a drill containing "hari Minggu" next to a `minggu` cloze that
//    blanks half of it — `findWholeWord` matches `minggu` inside `hari Minggu`.
//    `minggu`'s drill here is checked to contain no `hari Minggu`.
//
// 2. **ONLY THREE MONTHS ARE CARDED — Maret, Mei, Agustus — AND THAT IS THE
//    COGNATE TRAP, NOT LAZINESS.** Nine of the twelve Indonesian month names
//    are the English name spelled identically or near-identically, and for
//    `April`, `September` and `November` the gloss IS the front. A card whose
//    answer is printed on its own prompt teaches nothing — the same reasoning
//    block 1 used to put ZERO glyph cards in unit 1. So the twelve are listed in
//    `bulan`'s hint, where they cost nothing, and the three that genuinely
//    cannot be guessed from their spelling get the cards. Deferring the rest is
//    not a gap for block 3 to fill; there is nothing there to teach.
//
// SCOPE NOTE: `ini`, `itu`, `ada`, `karena`, `bukan` are u12's and `kali` is
// u14's, so "this year", "there is an event" and "twice a week" are all
// unavailable here. `sampai` is NOT taught anywhere in the language (block 1
// took `sampai jumpa` and `sampai nanti` as whole phrases only), so no example
// uses it bare.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT9 = {
  id: "id-u9",
  lang: "id",
  title: "Hari dan bulan",
  order: 9,
  stage: "a1",
  lessons: [
    {
      id: "id-u9l1",
      unit: 9,
      lesson: 1,
      title: "Enam hari dengan nama Arab",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Say which day of the week something happens on, putting hari in front of the day name.",
      items: [
        { id: "id-u9l1-senin", type: "vocab", front: "Senin", reading: "senin", meaning: "Monday", example: { jp: "Hari Senin saya bekerja di kantor.", en: "On Monday I work at the office." }, accept: ["on Monday", "Mon"], drill: { jp: "Hari Senin Budi bekerja di kantor", en: "On Monday Budi works at the office" }, hint: "suh-NIN, swallowed first e. Day names are always capitalised, and you put hari in front of them when you mean \"on Monday\": hari Senin. From the Arabic for \"two\" — Monday is the second day when the week opens on Sunday." },
        { id: "id-u9l1-selasa", type: "vocab", front: "Selasa", reading: "selasa", meaning: "Tuesday", example: { jp: "Hari Selasa Siti pergi ke pasar.", en: "On Tuesday Siti goes to the market." }, accept: ["on Tuesday", "Tue"], drill: { jp: "Hari Selasa saya pergi ke pasar", en: "On Tuesday I go to the market" }, hint: "suh-LAH-sa. Arabic \"three\". Senin, Selasa, Rabu, Kamis are simply two, three, four, five in Arabic — that run is the cheapest way to hold all four at once." },
        { id: "id-u9l1-rabu", type: "vocab", front: "Rabu", reading: "rabu", meaning: "Wednesday", example: { jp: "Hari Rabu cuaca panas sekali.", en: "On Wednesday the weather is very hot." }, accept: ["on Wednesday", "Wed"], drill: { jp: "Hari Rabu Budi tidak bekerja", en: "On Wednesday Budi does not work" }, hint: "RAH-boo. Arabic \"four\", and the shortest of the six. Keep it apart from rambut, hair: Rabu has no m and no t." },
        { id: "id-u9l1-kamis", type: "vocab", front: "Kamis", reading: "kamis", meaning: "Thursday", example: { jp: "Hari Kamis kakak saya belajar bahasa Indonesia.", en: "On Thursday my older sibling studies Indonesian." }, accept: ["on Thursday", "Thu"], drill: { jp: "Hari Kamis saya belajar bahasa Indonesia", en: "On Thursday I study Indonesian" }, hint: "KAH-mis. Arabic \"five\", the last of the counted days. Do not mix it with kamar, a room — one ends -mis, the other -mar." },
        { id: "id-u9l1-jumat", type: "vocab", front: "Jumat", reading: "jumat", meaning: "Friday", example: { jp: "Hari Jumat ayah saya tidak bekerja.", en: "On Friday my father does not work." }, accept: ["on Friday", "Fri"], drill: { jp: "Hari Jumat ayah Budi tidak bekerja", en: "On Friday Budi's father does not work" }, hint: "JOO-maht. Not a number — it is the Arabic word for the congregational prayer, and that is why Friday around midday goes quiet in much of Indonesia." },
        { id: "id-u9l1-sabtu", type: "vocab", front: "Sabtu", reading: "sabtu", meaning: "Saturday", example: { jp: "Hari Sabtu saya suka tidur pagi.", en: "On Saturday I like to sleep in the morning." }, accept: ["on Saturday", "Sat"], drill: { jp: "Hari Sabtu Siti suka tidur", en: "On Saturday Siti likes to sleep" }, hint: "SAHB-too — the b and t bump straight into each other with no vowel between. Same Arabic root as English \"Sabbath\". Sabtu plus Minggu is the akhir minggu, the weekend." },
      ],
    },
    {
      id: "id-u9l2",
      unit: 9,
      lesson: 2,
      title: "Akhir minggu dan hari libur",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Say what you do at the weekend and on a day off, and ask whether someone has time.",
      items: [
        { id: "id-u9l2-hariminggu", type: "vocab", front: "hari Minggu", reading: "hariminggu", meaning: "Sunday", example: { jp: "Hari Minggu saya tidak bekerja.", en: "On Sunday I do not work." }, accept: ["on Sunday", "this Sunday"], drill: { jp: "Hari Minggu Budi tidak bekerja", en: "On Sunday Budi does not work" }, hint: "HAH-ree MING-goo, said as one unit. Sunday is the only day Indonesian does not name from Arabic, and it is the only one where hari is not optional — hari Minggu is the normal form. Strip the hari away and minggu means a week instead." },
        { id: "id-u9l2-akhir", type: "vocab", front: "akhir", reading: "akhir", meaning: "end", example: { jp: "Akhir minggu saya di rumah dengan keluarga.", en: "At the weekend I am at home with my family." }, accept: ["the end", "finish", "final part"], drill: { jp: "Akhir minggu Budi di rumah", en: "At the weekend Budi is at home" }, hint: "AH-khir — that kh is a throaty h made further back than an English one. Akhir minggu is the weekend, literally \"end of week\"; akhir bulan is the end of the month, which is when everyone gets paid." },
        { id: "id-u9l2-libur", type: "vocab", front: "libur", reading: "libur", meaning: "day off", example: { jp: "Hari Jumat libur dan saya tidur di rumah.", en: "Friday is a day off and I sleep at home." }, accept: ["holiday", "a holiday", "vacation", "time off"], drill: { jp: "Hari Sabtu libur di sekolah", en: "Saturday is a day off at school" }, hint: "LEE-boor. Hari libur is a public holiday; libur alone covers school holidays and any day you are not working. Indonesia has a great many of them, so the word comes up constantly." },
        { id: "id-u9l2-istirahat", type: "vocab", front: "istirahat", reading: "istirahat", meaning: "to rest", example: { jp: "Saya mau istirahat di kamar sekarang.", en: "I want to rest in my room now." }, accept: ["rest", "to take a break", "break"], drill: { jp: "Budi istirahat di kamar sekarang", en: "Budi is resting in his room now" }, hint: "is-tee-RAH-hat — four syllables, and the h is breathed. It is the verb and the noun at once: jam istirahat is the break at work or school." },
        { id: "id-u9l2-sibuk", type: "vocab", front: "sibuk", reading: "sibuk", meaning: "busy", example: { jp: "Hari Senin saya sangat sibuk di kantor.", en: "On Monday I am very busy at the office." }, accept: ["occupied", "tied up", "hard at work"], drill: { jp: "Hari Senin Siti sangat sibuk", en: "On Monday Siti is very busy" }, hint: "SEE-book. One word on its own — Sibuk? — is the ordinary way to ask \"are you busy?\" before taking up someone's time. Its opposite here is libur." },
        { id: "id-u9l2-acara", type: "vocab", front: "acara", reading: "acara", meaning: "event", example: { jp: "Acara hari Sabtu di rumah nenek saya.", en: "Saturday's event is at my grandmother's house." }, accept: ["an event", "occasion", "programme", "program"], drill: { jp: "Acara hari Minggu di sekolah Budi", en: "Sunday's event is at Budi's school" }, hint: "ah-CHAH-ra — c is CH. It stretches over a party, a meeting, a wedding and a TV programme. Ada acara? is how you ask \"got any plans?\"." },
      ],
    },
    {
      id: "id-u9l3",
      unit: 9,
      lesson: 3,
      title: "Tanggal, bulan, dan tahun",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Give a date the Indonesian way — the day number first, then the month, then the year.",
      items: [
        { id: "id-u9l3-tanggal", type: "vocab", front: "tanggal", reading: "tanggal", meaning: "date", example: { jp: "Tanggal tujuh saya pergi ke Bali.", en: "On the seventh I go to Bali." }, accept: ["the date", "day of the month", "calendar date"], drill: { jp: "Tanggal tujuh Budi pergi ke Bali", en: "On the seventh Budi goes to Bali" }, hint: "TAHNG-gal — ngg is the hum plus a hard g. Dates run small to large: tanggal 7 Mei, never the English order. The same word also means to come off or fall out, which is what a tooth does." },
        { id: "id-u9l3-bulan", type: "vocab", front: "bulan", reading: "bulan", meaning: "month", example: { jp: "Bulan Mei cuaca panas dan tidak hujan.", en: "In May the weather is hot and it does not rain." }, accept: ["the month", "moon"], drill: { jp: "Bulan Mei di Bali sangat panas", en: "May in Bali is very hot" }, hint: "BOO-lahn — and it is the moon as well, which is exactly how it came to mean a month. Nine of the twelve names are the English word with Indonesian spelling: Januari, Februari, April, Juni, Juli, September, Oktober, November, Desember. Only three cannot be guessed, and they are the next three cards." },
        { id: "id-u9l3-tahun", type: "vocab", front: "tahun", reading: "tahun", meaning: "year", example: { jp: "Saya belajar bahasa Indonesia satu tahun.", en: "I have been studying Indonesian for one year." }, accept: ["the year", "years old"], drill: { jp: "Budi belajar bahasa Indonesia satu tahun", en: "Budi has studied Indonesian for one year" }, hint: "TAH-hoon, with a clear h between the vowels. It gives ages too: lima tahun is five years old. Careful — tahun is a year and tahu is to know; the n is the entire difference." },
        { id: "id-u9l3-maret", type: "vocab", front: "Maret", reading: "maret", meaning: "March", example: { jp: "Bulan Maret hujan setiap hari.", en: "In March it rains every day." }, accept: ["the month of March", "Mar"], drill: { jp: "Bulan Maret hujan di kota Bali", en: "In March it rains in Bali" }, hint: "MAH-ret — one r, and an e where English has a c and an h. One of only three month names you cannot read straight off the English, which is why it is worth a card." },
        { id: "id-u9l3-mei", type: "vocab", front: "Mei", reading: "mei", meaning: "May", example: { jp: "Bulan Mei saya libur satu minggu.", en: "In May I have a week off." }, accept: ["the month of May"], drill: { jp: "Bulan Mei Budi libur satu minggu", en: "In May Budi has a week off" }, hint: "MAY — the ei is a single sound, exactly the English word \"may\". Three letters, unguessable from the spelling, so it earns its own card." },
        { id: "id-u9l3-agustus", type: "vocab", front: "Agustus", reading: "agustus", meaning: "August", example: { jp: "Bulan Agustus cuaca kering dan cerah.", en: "In August the weather is dry and clear." }, accept: ["the month of August", "Aug"], drill: { jp: "Bulan Agustus di Bali sangat kering", en: "August in Bali is very dry" }, hint: "ah-GOOS-toos — three syllables, with an extra -us on the end English does not have. 17 Agustus is Indonesia's independence day and the whole month fills up with flags." },
      ],
    },
    {
      id: "id-u9l4",
      unit: 9,
      lesson: 4,
      title: "Kapan dan seberapa sering",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Ask when something happens, and say how often you do it using sering, jarang or setiap.",
      items: [
        { id: "id-u9l4-minggu", type: "vocab", front: "minggu", reading: "minggu", meaning: "week", example: { jp: "Satu minggu punya tujuh hari.", en: "One week has seven days." }, accept: ["a week", "weeks"], drill: { jp: "Budi libur satu minggu di Bali", en: "Budi has a week off in Bali" }, hint: "MING-goo. Alone it is a week; with hari in front of it, hari Minggu, it becomes Sunday — the hari is the whole difference. Seminggu packs \"one week\" into a single word." },
        { id: "id-u9l4-kapan", type: "vocab", front: "kapan", reading: "kapan", meaning: "when", example: { jp: "Kapan Budi pergi ke kantor?", en: "When does Budi go to the office?" }, accept: ["at what time", "what day", "when is"], drill: { jp: "Kapan Siti pergi ke pasar", en: "When does Siti go to the market" }, hint: "KAH-pahn. Unlike warna apa, this question word LEADS: put kapan at the front. For a clock time specifically, Indonesians ask jam berapa instead." },
        { id: "id-u9l4-lalu", type: "vocab", front: "lalu", reading: "lalu", meaning: "ago", example: { jp: "Minggu lalu cuaca sangat panas.", en: "Last week the weather was very hot." }, accept: ["last", "past", "previous", "previously"], drill: { jp: "Minggu lalu Budi sibuk di kantor", en: "Last week Budi was busy at the office" }, hint: "LAH-loo. It FOLLOWS its time word: minggu lalu, bulan lalu, tahun lalu. Indonesian has no past tense at all, so lalu is carrying the work an English verb ending would do." },
        { id: "id-u9l4-setiap", type: "vocab", front: "setiap", reading: "setiap", meaning: "every", example: { jp: "Setiap hari Senin saya pergi ke kantor.", en: "Every Monday I go to the office." }, accept: ["each", "every single"], drill: { jp: "Setiap hari Minggu Budi istirahat", en: "Every Sunday Budi rests" }, hint: "suh-TEE-ahp. Built on tiap, which means the same and is what people say out loud. It goes in front of the time word: setiap hari, every day." },
        { id: "id-u9l4-sering", type: "vocab", front: "sering", reading: "sering", meaning: "often", example: { jp: "Bulan Maret sering hujan di kota saya.", en: "In March it often rains in my city." }, accept: ["frequently", "a lot", "many times"], drill: { jp: "Bulan Maret sering hujan di Bali", en: "In March it often rains in Bali" }, hint: "suh-RING — swallowed e, hum at the end. It sits BEFORE the verb: sering hujan, sering pergi. Keep it apart from sedikit: sering is how often, sedikit is how much." },
        { id: "id-u9l4-jarang", type: "vocab", front: "jarang", reading: "jarang", meaning: "rarely", example: { jp: "Bulan Agustus jarang hujan.", en: "In August it rarely rains." }, accept: ["seldom", "not often", "hardly ever"], drill: { jp: "Bulan Agustus jarang hujan di Bali", en: "In August it rarely rains in Bali" }, hint: "JAH-rahng, hum at the end. The exact opposite of sering and placed the same way, in front of the verb. Jarang sekali means \"almost never\"." },
      ],
    },
  ],
};
