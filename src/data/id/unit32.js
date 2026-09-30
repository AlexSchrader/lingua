// ID Unit 32 — Sopan dan bergaul ("Being polite and getting along") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 2. unit1.js's 12 conventions and unit21.js's A1–A10 BIND this file.
//
// RETITLED AND NARROWED from the scaffold's "Society and daily life". "Daily
// life" is not a theme, it is every theme — A1 spent routine (u18), home (u17),
// food (u6), shopping (u16) and the family (u4) on exactly that ground, and block
// 1 rethemed four of its own slots for the same reason. What is genuinely open,
// measured against all 720 live cards, is the SOCIAL machinery:
//   • **Indonesian address terms.** A1 taught saya · Anda · kamu · kakak · adik
//     and nothing you actually say to a stranger. A learner who cannot say
//     `Pak`, `Mas` or `Mbak` cannot open a conversation in a warung.
//   • **honesty and trust as vocabulary** — no word for honest, to lie, to
//     deceive, to accuse, a secret, fair.
//   • **looking after people** — `membantu` (to help) was the only verb in the
//     field; nothing for to look after, to rescue, to back up, to defend.
//   • **group life** — no word for society, a resident, a group, a member, a
//     rule, or to break a rule.
// Block 1's u22 took the SPEECH acts (setuju · menolak · memuji · mengeluh ·
// mengundang · berjanji); this unit takes the RELATIONSHIPS those acts happen in.
// The two do not overlap and neither repeats A1.
//
// ⚠️ REGISTER — the address terms, and why these three and not six (convention 7).
// `bapak` · `mas` · `mbak` are carded; `pak`, `bu`, `bang`, `kak` are not, and the
// reason is convention 3, not caution. `pak` is a clipping of `bapak` and `bu` a
// clipping of `ibu` — a learner who has one HAS the other, so the clipping goes in
// the hint. `bu` would also have needed a second gloss for a front A1 already owns
// (`ibu`, mother). `mas`/`mbak` are Javanese in origin and national in use: you
// will be called Mas in Medan and in Makassar. They are named in each other's
// hints so a learner meets the pair, not one half.
//
// AFFIX ROOTS CHECKED BY HAND (unit1.js §3 — the LEXEME verdict fails open here):
//   menghormati → hormat        root not taught.
//   memperkenalkan → kenal      ⚠️ `kenal` IS taught (u21, to know a person). This
//     is the per-…-kan causative, a different word: knowing "to be acquainted
//     with" does not give you "to introduce two people". Drill-safe —
//     findWholeWord("memperkenalkan", "kenal") fails (the r before it is a
//     letter). ⚠️ `mengenal` stays UNCARDED; block 1 recorded it as a register
//     twin of `kenal` and that call stands.
//   menipu → tipu               root not taught.
//   menuduh → tuduh             root not taught.
//   menjaga → jaga              root not taught.
//   menyelamatkan → selamat     ⚠️ `selamat` appears only INSIDE taught phrase
//     fronts (selamat pagi, selamat tinggal…), never bare, so there is no bare
//     front to collide with. Drill-safe in both directions.
//   mendukung → dukung          root not taught.
//   membela → bela              root not taught.
//   melanggar → langgar         root not taught.
//   bapak · mas · mbak · sopan · jujur · bohong · rahasia · adil · peduli ·
//   sikap · masyarakat · warga · kelompok · anggota · aturan — roots.
//
// GLOSSES REGLOSSED TO CLEAR A LIVE `accept[]` (unit21.js §A4):
//   `adil` does not accept "just" — A1's `hanya` and `saja` both do. → "impartial".
//   `kelompok` does not accept "a team" — u24's `tim` owns it. → "a cluster of people".
//   `masyarakat` does not accept bare "people" — u1's `orang` does. → "people in general".
//   ⚠️ `menolong` is NOT CARDED: `membantu` (u13) is glossed "to help" and there is
//   no honest second gloss. `tolong` (u2) already carries the imperative. Named in
//   `menyelamatkan`'s hint instead.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT32 = {
  id: "id-u32",
  lang: "id",
  title: "Sopan dan bergaul",
  order: 32,
  stage: "a2",
  lessons: [
    {
      id: "id-u32l1",
      unit: 32,
      lesson: 1,
      title: "Pak, Mas, dan Mbak",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Address a stranger correctly instead of avoiding it, show respect to someone older, and introduce two people to each other.",
      items: [
        { id: "id-u32l1-bapak", type: "vocab", front: "bapak", reading: "bapak", meaning: "sir", example: { jp: "Bapak itu guru di sekolah kami.", en: "That gentleman is a teacher at our school." }, accept: ["mister", "a man addressed with respect"], drill: { jp: "Bapak itu sudah datang ke kantor kami", en: "That gentleman has already come to our office" }, hint: "BAH-pak, the final k a light glottal catch. The respectful word for a man older than you or senior to you, and the way you address him: Pak Budi, or just Pak. ⚠️ Shortened to Pak in almost all speech, which is why Pak is not a second card — it is the same word. Its pair is Bu, the clipping of ibu, which you already have for mother. It also means father, where ayah is the neutral one." },
        { id: "id-u32l1-mas", type: "vocab", front: "mas", reading: "mas", meaning: "a young man you are speaking to", example: { jp: "Mas, tolong satu teh manis.", en: "Excuse me, one sweet tea please." }, accept: ["the way you address a man your own age"], drill: { jp: "Mas itu bekerja di warung dekat pasar", en: "That young man works at the stall near the market" }, hint: "MAHS, one syllable. Javanese in origin but used across the country: this is what you call a waiter, a driver, a shop assistant or any man roughly your own age. Its pair is Mbak for a woman, on the next card. Using Mas where you should use Pak is a small mistake; using nothing at all is the bigger one." },
        { id: "id-u32l1-mbak", type: "vocab", front: "mbak", reading: "mbak", meaning: "a young woman you are speaking to", example: { jp: "Mbak, harga sayur ini berapa?", en: "Excuse me, how much are these vegetables?" }, accept: ["the way you address a woman your own age"], drill: { jp: "Mbak itu menjual sayur di pasar", en: "That young woman sells vegetables at the market" }, hint: "m-BAHK — the m is its own tiny syllable before the b, which English never does at the start of a word. The exact counterpart of Mas. For an older woman you want Bu instead. In eastern Indonesia you will hear Kak used the same way, from kakak, which you already have." },
        { id: "id-u32l1-sopan", type: "vocab", front: "sopan", reading: "sopan", meaning: "polite", example: { jp: "Anak itu sopan dengan semua tamu.", en: "That child is polite to all the guests." }, accept: ["well mannered", "courteous"], drill: { jp: "Cara berbicara dia sangat sopan", en: "His way of speaking is very polite" }, hint: "SOH-pan. Covers manners, dress and speech together — baju sopan is modest clothing, not smart clothing. Kesopanan is politeness as a value, and it matters more in Indonesia than being direct does. Ramah, which you already have, is warm; sopan is correct." },
        { id: "id-u32l1-menghormati", type: "vocab", front: "menghormati", reading: "menghormati", meaning: "to show respect to", example: { jp: "Kami menghormati pendapat orang tua.", en: "We show respect to our parents' opinion." }, accept: ["to honour", "to look up to"], drill: { jp: "Pelajar menghormati guru di kelas itu", en: "The pupils show respect to the teacher in that class" }, hint: "muhng-hor-MAH-tee. Takes its object straight, with no preposition. Hormat on its own is a salute or a formal respect, and Hormat saya closes a formal letter. Menghargai, which you met for valuing an opinion, is about RATING something; menghormati is about deferring to someone." },
        { id: "id-u32l1-memperkenalkan", type: "vocab", front: "memperkenalkan", reading: "memperkenalkan", meaning: "to introduce one person to another", example: { jp: "Saya memperkenalkan teman saya di rapat itu.", en: "I introduced my friend at that meeting." }, accept: ["to make the introductions", "to present someone"], drill: { jp: "Guru memperkenalkan pelajar baru di kelas", en: "The teacher introduced the new pupil to the class" }, hint: "muhm-puhr-kuh-NAHL-kan, five syllables — say it slowly, it is a long word doing one simple job. Built on kenal, to know a person, which you already have: you are CAUSING two people to know each other. Perkenalkan on its own is what you say as you start an introduction. For introducing YOURSELF, Indonesians say memperkenalkan diri." },
      ],
    },
    {
      id: "id-u32l2",
      unit: 32,
      lesson: 2,
      title: "Jujur dan bohong",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say whether someone is telling you the truth — honest, lying, deceiving you — accuse them of it, and ask for something to be kept quiet.",
      items: [
        { id: "id-u32l2-jujur", type: "vocab", front: "jujur", reading: "jujur", meaning: "honest", example: { jp: "Karyawan itu jujur tentang uang perusahaan.", en: "That employee is honest about the company's money." }, accept: ["truthful", "straight with people"], drill: { jp: "Anak itu jujur dengan ibu dan ayah", en: "That child is honest with his mother and father" }, hint: "JOO-joor, j as in JAM. Jujur saja is the everyday to be honest, used to open an awkward sentence exactly as in English. Kejujuran is honesty. The opposite is on the next card, and Indonesians reach for it as a verb where English uses a noun." },
        { id: "id-u32l2-bohong", type: "vocab", front: "bohong", reading: "bohong", meaning: "to tell a lie", example: { jp: "Dia bohong tentang alasan dia terlambat.", en: "He lied about the reason he was late." }, accept: ["untrue", "a lie"], drill: { jp: "Anak itu bohong tentang ujian sekolah", en: "That child lied about the school exam" }, hint: "boh-HOHNG, two ng-free o sounds then the hum. One word for the verb and the noun: dia bohong, he is lying, and itu bohong, that is a lie. Berbohong is the standard written form; pembohong is a liar. ⚠️ Salah, which you already have, is being WRONG by mistake; bohong is doing it on purpose." },
        { id: "id-u32l2-menipu", type: "vocab", front: "menipu", reading: "menipu", meaning: "to deceive", example: { jp: "Orang itu menipu turis di pasar.", en: "That person deceives tourists at the market." }, accept: ["to cheat", "to con someone", "to take someone in"], drill: { jp: "Sopir itu menipu turis tentang ongkos", en: "That driver cheats tourists over the fare" }, hint: "muh-NEE-poo. Heavier than bohong: bohong is saying something untrue, menipu is getting something out of somebody by it. Penipu is a con artist and you will see the word on warning signs. Tertipu means to have been taken in." },
        { id: "id-u32l2-menuduh", type: "vocab", front: "menuduh", reading: "menuduh", meaning: "to accuse", example: { jp: "Jangan menuduh orang kalau belum ada tanda.", en: "Do not accuse people when there is no evidence yet." }, accept: ["to point the finger at", "to blame"], drill: { jp: "Atasan menuduh karyawan itu mengambil uang", en: "The boss accused that employee of taking money" }, hint: "muh-NOO-dooh. Takes the person straight and then the charge: menuduh saya bohong. Tuduhan is an accusation. It carries the same implication as the English — that the charge might not be fair — so a hedge like mungkin often goes in front of it." },
        { id: "id-u32l2-rahasia", type: "vocab", front: "rahasia", reading: "rahasia", meaning: "a secret", example: { jp: "Ini rahasia kita dan jangan bilang orang lain.", en: "This is our secret and do not tell anyone else." }, accept: ["confidential", "something kept quiet"], drill: { jp: "Dia menyimpan rahasia keluarga itu", en: "She keeps that family's secret" }, hint: "ra-ha-SEE-a, four syllables with both h's sounded. Noun and adjective at once: sebuah rahasia is a secret, and surat rahasia is a confidential letter. Merahasiakan is to keep something secret. Indonesians often soften it to Jangan bilang siapa-siapa, don't tell anyone." },
        { id: "id-u32l2-adil", type: "vocab", front: "adil", reading: "adil", meaning: "fair", example: { jp: "Guru itu selalu adil di kelas.", en: "That teacher is always fair in class." }, accept: ["even handed", "impartial"], drill: { jp: "Aturan baru itu tidak adil untuk warga", en: "That new rule is not fair to the residents" }, hint: "AH-deel. Fair in the sense of even-handed, never in the sense of pale or of passable. Keadilan is justice, and Keadilan Sosial is in the national motto, so the word carries weight. Tidak adil is the everyday that's not fair." },
      ],
    },
    {
      id: "id-u32l3",
      unit: 32,
      lesson: 3,
      title: "Peduli dan menjaga",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Take someone's side — caring about them, watching over them, getting them out of trouble, backing them up — and describe the attitude they take.",
      items: [
        { id: "id-u32l3-peduli", type: "vocab", front: "peduli", reading: "peduli", meaning: "to care about something", example: { jp: "Dia tidak peduli dengan pendapat orang lain.", en: "He does not care about other people's opinions." }, accept: ["to mind about it", "to be bothered about"], drill: { jp: "Warga di sini peduli dengan sungai itu", en: "The residents here care about that river" }, hint: "puh-DOO-lee. Overwhelmingly used in the negative: tidak peduli is the everyday I don't care, and it is blunt, so watch who you say it to. Takes dengan, tentang or pada. Kepedulian is concern for something, and it turns up in public campaigns." },
        { id: "id-u32l3-menjaga", type: "vocab", front: "menjaga", reading: "menjaga", meaning: "to look after", example: { jp: "Kakak saya menjaga adik di rumah.", en: "My older sister looks after our younger brother at home." }, accept: ["to keep an eye on", "to guard"], drill: { jp: "Dia menjaga toko itu setiap malam", en: "He guards that shop every night" }, hint: "muhn-JAH-ga. Both senses in one word: minding a child and guarding a building. Very common with an abstract object too — menjaga kesehatan, to look after your health; menjaga rahasia, to keep a secret. Penjaga is the guard or the caretaker. Jaga diri! means look after yourself." },
        { id: "id-u32l3-menyelamatkan", type: "vocab", front: "menyelamatkan", reading: "menyelamatkan", meaning: "to rescue", example: { jp: "Orang itu menyelamatkan anak dari sungai.", en: "That person rescued a child from the river." }, accept: ["to save someone", "to get someone out of danger"], drill: { jp: "Dokter menyelamatkan orang yang sakit itu", en: "The doctor saved that sick person" }, hint: "muh-nyuh-luh-MAHT-kan — ny is one sound, and the word is long but regular. Built on the selamat you already know from selamat pagi and selamat jalan, where it means safe: you are making somebody safe. Menolong is not carded because membantu, to help, already covers it; menyelamatkan is specifically FROM danger. Keselamatan is safety." },
        { id: "id-u32l3-mendukung", type: "vocab", front: "mendukung", reading: "mendukung", meaning: "to back someone up", example: { jp: "Keluarga saya mendukung rencana itu.", en: "My family backs that plan." }, accept: ["to support", "to be behind someone"], drill: { jp: "Semua rekan mendukung ide karyawan baru", en: "All the colleagues back the new employee's idea" }, hint: "muhn-DOO-koong. Backing a plan, a person or a team — not holding something up physically. Dukungan is support. ⚠️ Membantu, which you already have, is doing some of the WORK; mendukung is being on their side, which may cost you nothing but matters anyway." },
        { id: "id-u32l3-membela", type: "vocab", front: "membela", reading: "membela", meaning: "to stand up for", example: { jp: "Ibu membela anaknya di depan guru.", en: "The mother stood up for her child in front of the teacher." }, accept: ["to defend", "to take someone's side"], drill: { jp: "Rekan saya membela saya di rapat itu", en: "My colleague stood up for me in that meeting" }, hint: "muhm-BAY-la. Speaking up FOR someone who is being blamed — the natural answer to menuduh in the last lesson. Also the word for defending a country or a goal: pembela is a defender. Stronger than mendukung: mendukung is agreeing, membela is putting yourself in the way." },
        { id: "id-u32l3-sikap", type: "vocab", front: "sikap", reading: "sikap", meaning: "an attitude", example: { jp: "Sikap dia di rapat itu kurang sopan.", en: "His attitude in that meeting was not very polite." }, accept: ["a stance", "how someone carries themselves"], drill: { jp: "Sikap karyawan itu sangat baik", en: "That employee's attitude is very good" }, hint: "SEE-kap. How somebody positions themselves — towards a person, a decision or an argument. ⚠️ Keep it apart from sifat, which you met for a character TRAIT: sifat is what you are like, sikap is the line you take on this occasion. Bersikap means to behave a certain way." },
      ],
    },
    {
      id: "id-u32l4",
      unit: 32,
      lesson: 4,
      title: "Masyarakat dan aturan",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about the group rather than the individual — the community, its residents, a group and its members — and say when a rule has been broken.",
      items: [
        { id: "id-u32l4-masyarakat", type: "vocab", front: "masyarakat", reading: "masyarakat", meaning: "society", example: { jp: "Masyarakat di desa itu saling membantu.", en: "The community in that village helps one another." }, accept: ["the community", "people in general"], drill: { jp: "Masyarakat di kota ini sangat ramah", en: "The community in this city is very friendly" }, hint: "ma-sha-RA-kat — sy is the sh of SHOE, so four syllables, not five. Society and the local community alike; which one is meant comes from context. You will meet it constantly in news and in official language. Sosial is the borrowed adjective." },
        { id: "id-u32l4-warga", type: "vocab", front: "warga", reading: "warga", meaning: "a resident", example: { jp: "Semua warga di sini membayar untuk air.", en: "All the residents here pay for water." }, accept: ["a citizen", "a member of the community"], drill: { jp: "Warga desa itu menjaga hutan bersama", en: "The villagers look after the forest together" }, hint: "WAR-ga. The people who BELONG to a place — a neighbourhood, a city, a country. Warga negara is a citizen of a state, and it is the phrase on official forms. It is a countable noun but Indonesian does not mark plural, so semua warga covers all of them." },
        { id: "id-u32l4-kelompok", type: "vocab", front: "kelompok", reading: "kelompok", meaning: "a group", example: { jp: "Kami belajar dalam kelompok kecil.", en: "We study in a small group." }, accept: ["a cluster of people", "a band of them"], drill: { jp: "Kelompok itu berdiskusi tentang tugas baru", en: "That group is discussing the new task" }, hint: "kuh-LOHM-pok. The general word for a group of people or things. ⚠️ Not tim, which you already have — a tim has a shared goal and usually a name, a kelompok may just be whoever is standing there. Berkelompok means to form into groups, which is what a teacher asks a class to do." },
        { id: "id-u32l4-anggota", type: "vocab", front: "anggota", reading: "anggota", meaning: "a member", example: { jp: "Dia anggota kelompok belajar di sekolah.", en: "She is a member of the study group at school." }, accept: ["one of the group", "on the books"], drill: { jp: "Setiap anggota tim membawa laporan sendiri", en: "Each team member brings their own report" }, hint: "ang-GOH-ta — ngg is the hum plus a hard g. A member of anything with a list: a team, a club, a family, a parliament. Keanggotaan is membership. It also means a limb of the body in formal writing, which is the older sense." },
        { id: "id-u32l4-aturan", type: "vocab", front: "aturan", reading: "aturan", meaning: "a rule", example: { jp: "Aturan di sekolah itu penting untuk semua.", en: "The rules at that school are important for everyone." }, accept: ["the regulations", "how it is supposed to be done"], drill: { jp: "Semua warga tahu aturan baru itu", en: "All the residents know that new rule" }, hint: "ah-TOO-ran. From atur, to arrange — a rule is how things have been arranged. Peraturan is the more formal twin you will see on signs and in documents; both are understood everywhere. Menurut aturan means according to the rules." },
        { id: "id-u32l4-melanggar", type: "vocab", front: "melanggar", reading: "melanggar", meaning: "to break a rule", example: { jp: "Sopir itu melanggar aturan di jalan.", en: "That driver broke the rules on the road." }, accept: ["to violate", "to go against the rules"], drill: { jp: "Dia melanggar aturan sekolah tiga kali", en: "He broke the school rules three times" }, hint: "muh-LAHNG-gar. Only for rules, laws and agreements — never for breaking an object, which is rusak or memecahkan. Pelanggaran is an offence, and you will see it on traffic signs. Mematuhi is the opposite, to obey, and is the formal word." },
      ],
    },
  ],
};
