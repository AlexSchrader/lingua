// ID Unit 109 — Ragam hormat dan kata sapaan ("Deference and terms of address") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 2 (u101–u113). Band notes BB1–BB8 are in unit101.js's header; unit1's
// A1 conventions, unit21's A2 set and unit51's B1 set (B1–B12) all still bind.
//
// §P1. 🚨 **THE SCAFFOLD TITLE FOR THIS SLOT WAS "Register 3 — 敬語: humble and
//      honorific", AND THAT IS A JAPANESE VERB PARADIGM INDONESIAN DOES NOT
//      HAVE.** The crew lead fixed the template before I started. **pt and no
//      both shipped a unit literally titled "Register 3 — 敬語"** by taking the
//      slot title at face value, so this is not a hypothetical. Nothing in this
//      unit models Japanese: there is no plain/polite verb pair in Indonesian,
//      no humble register of a verb, and no honorific conjugation.
//      **Indonesian carries deference three ways, and all three are LEXICAL:**
//        1. **terms of address** — the bulk of this unit (l1, l2);
//        2. **a verb that only ever points upward** — `menghadap` (you present
//           yourself before a superior; a superior never menghadap you),
//           `berkenan`, `memohon` (l3);
//        3. **Arabic / Sanskrit / Javanese-derived formality** — `hamba`
//           `Paduka` `baginda` `adab` `anugerah` `tata krama`.
//      That is the honest Indonesian equivalent and it is what shipped.
//
// §P2. ⚠️ **"TEACH STATUS-MARKED NOUNS, NOT POLITENESS FORMULAS" — THE BRIEF'S
//      INSTRUCTION, AND THE CORPUS ENFORCES IT ANYWAY.** The formulas are all
//      taught already: `Anda` `kamu` (u3), `tolong` `silakan` (u2), `bapak`
//      `mas` `mbak` `sopan` `menghormati` (u32), `beliau` `hormat` (u73),
//      `permisi` (u2), `izin` (u50). `menyapa` is TAKEN (u22) — so this unit
//      takes the NOUN `sapaan` off that ground, never a second greeting verb.
//      `beliau` is used in two examples and is deliberately NOT carded.
//
// §P3. **THE u109 / u110 SPLIT.** Both slots are mine; band note BB3 states the
//      settled division and the test. In one line: **u109 is how you address a
//      PERSON above you, u110 is how you speak to a ROOM** — and the test for a
//      borderline word is whether it needs an addressee with a RANK or an
//      AUDIENCE. `Yang Mulia` is said TO one person, so it is here even though
//      you say it from a courtroom floor; `terhormat` labels the room, so it is
//      u110's; `berkenan` needs a superior, so it is here; `sudilah` begs a
//      roomful, so it is u110's.
//
// §P4. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (unit1 §3 / unit51 B5):
//      sapaan → menyapa ⚠️ `menyapa` IS taught (u22, "to greet"). Carded as the
//        NOUN only. Drill-safe: the shared string is the root `sapa`, carded
//        nowhere, and it is not a whole word inside either form.
//      panggilan → panggil ⚠️ `panggil` IS taught (u3, "to call"). Carded: what
//        somebody is CALLED is not the act of calling. Drill-safe: "panggilan"
//        holds "panggil" at index 0 followed by `a`, so no whole-word match.
//      mewakili → wakil ⚠️ `wakil` IS taught (u74, "a deputy"). Carded: being a
//        deputy is a post, mewakili is the act. Drill-safe: index 2, preceded by
//        `e` and followed by `i`.
//      memohon → mohon — `mohon` is NOT taught on its own (only `mohon maaf`
//        inside u2's formulas as a phrase learners meet, not as a front).
//        Clean.
//      berkenan → kena — `kena` is NOT taught; `mengenai`(u73) is a different
//        word and shares no whole word with this one.
//      anugerah → no Indonesian root; Sanskrit. Clean. ⚠️ It replaced
//        `kehormatan` at step 4, when merging block 1 showed that front TAKEN
//        at u99l1 — band note BB9. `kehormatan` had been glossed "a point of
//        honour" rather than "honour", because `gloss-taken.mjs id` showed
//        "honour" COLLIDES with `menghormati`@u32; block 1's card is the one
//        that survives.
//      kedudukan → duduk ⚠️ `duduk` IS taught (u4, "to sit"). Carded: standing
//        in a hierarchy is not sitting down. Drill-safe: index 2, preceded by
//        `e`, followed by `a`. ⚠️ And keep it apart from `jabatan`(u74), a post
//        held — glossed separately for exactly that reason.
//      tata krama → neither word is taught; the fold is "tatakrama" and nothing
//        else in the corpus folds to it (`reading-taken.mjs id`, 0 duplicated).
//
// §P5. DEFERRED FROM THIS UNIT, named not buried, all probed FREE: `kiai`
//      `ustaz` `takzim` `kesantunan` `beradab` `tabik` `titah` `anugerah`
//      `junjungan` `penghormatan` `atas nama` `mohon izin` `merendah`
//      `bawahan`. `santun` was refused as a near-twin of taught `sopan`(u32)
//      (band note BB5), and `rendah hati` is TAKEN (u78).
export const ID_UNIT109 = {
  id: "id-u109",
  lang: "id",
  title: "Ragam hormat dan kata sapaan",
  order: 109,
  stage: "b2",
  lessons: [
    {
      id: "id-u109l1",
      unit: 109,
      lesson: 1,
      title: "Sapaan berkedudukan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Address somebody by their standing rather than their name — a senior religious teacher, sir, madam, Your Excellency, Your Honour, and His Majesty.",
      items: [
        { id: "id-u109l1-kiai", type: "vocab", front: "kiai", reading: "kiai", meaning: "a senior Islamic teacher", example: { jp: "Kiai di desa itu menjadi orang yang paling penting untuk semua warga.", en: "The kiai in that village became the most important person to all the residents." }, accept: ["a respected religious scholar", "the head of a religious school", "an honoured teacher of religion"], drill: { jp: "Kiai di desa itu paling penting untuk semua warga", en: "The kiai in that village is the most important to all residents" }, hint: "KEE-ah-ee, three syllables \u2014 the ai is two vowels said in a row, not an English long i. \u26a0\ufe0f It is a term of address as well as a noun: you call him Kiai, capitalised, exactly as you would call a judge Yang Mulia. In Java a kiai heads a pesantren, a religious boarding school, and his standing is social and political as much as religious \u2014 which is why he belongs in a lesson about rank." },
        { id: "id-u109l1-tuan", type: "vocab", front: "Tuan", reading: "tuan", meaning: "sir, to a man of standing", example: { jp: "Pelayan di kantor itu menyebut semua laki-laki dengan kata Tuan.", en: "The attendant at that office called every man Tuan." }, accept: ["master", "a formal sir", "the title for a gentleman"], drill: { jp: "Pelayan di kantor itu menyebut laki-laki dengan Tuan", en: "The attendant at that office calls men Tuan" }, hint: "TOO-ahn, two syllables. ⚠️ Originally master or lord, and it still carries that: Indonesians use it for foreigners, in hotels and in formal letters, but between Indonesians it sounds colonial or sarcastic. **Bapak, which you know from u32, is the ordinary respectful word for a man** — Tuan is the one you must be able to READ without using it carelessly." },
        { id: "id-u109l1-nyonya", type: "vocab", front: "Nyonya", reading: "nyonya", meaning: "madam, to a married woman", example: { jp: "Nyonya rumah itu menerima semua tamu di depan pintu.", en: "The lady of that house received every guest at the door." }, accept: ["the mistress of a house", "a formal madam", "the title for a married lady"], drill: { jp: "Nyonya rumah itu menerima semua tamu di pintu", en: "The lady of that house receives every guest at the door" }, hint: "NYOH-nyah — both ny's are one sound each. The female counterpart of the card above it and with the same colonial weight. ⚠️ Nyonya rumah, the lady of the house, is the one phrase that is completely neutral. For ordinary respect to a woman Indonesian says Ibu, which you know from u32, or Mbak to a younger one." },
        { id: "id-u109l1-paduka", type: "vocab", front: "Paduka", reading: "paduka", meaning: "Your Excellency", example: { jp: "Rakyat masih menyebut pemimpin lama itu dengan kata Paduka.", en: "The people still call that old leader Paduka." }, accept: ["His Excellency", "the address for a head of state", "a very high honorific"], drill: { jp: "Rakyat masih menyebut pemimpin lama itu Paduka", en: "The people still call that old leader Paduka" }, hint: "pah-DOO-kah. Sanskrit, and literally *the sandal* — you addressed a king by naming the lowest thing you could touch, which tells you how far below him you were placing yourself. ⚠️ Live in Indonesian today only for heads of state and in historical writing: Paduka Yang Mulia is the full form on a state invitation." },
        { id: "id-u109l1-yangmulia", type: "vocab", front: "Yang Mulia", reading: "yangmulia", meaning: "Your Honour", example: { jp: "Hakim di pengadilan itu disebut Yang Mulia oleh semua orang.", en: "The judge in that court was called Yang Mulia by everybody." }, accept: ["Your Honour in court", "His or Her Excellency", "the honorific for a judge or envoy"], drill: { jp: "Hakim di pengadilan itu disebut Yang Mulia", en: "The judge in that court is called Yang Mulia" }, hint: "yahng MOO-lee-ah, two words. Literally *the one who is noble* — yang, which you know from u12, plus mulia, noble. ⚠️ This is the live one: every Indonesian courtroom uses it to a judge, and a diplomat uses it to an ambassador. **It addresses ONE PERSON of rank**, which is why it sits here rather than in u110 with the words you say to a room." },
        { id: "id-u109l1-baginda", type: "vocab", front: "baginda", reading: "baginda", meaning: "His Majesty", example: { jp: "Cerita lama itu tentang baginda yang adil dan kuat.", en: "That old story is about a king who was just and strong." }, accept: ["the king, spoken of with reverence", "His Highness", "the sovereign"], drill: { jp: "Cerita lama itu tentang baginda yang adil", en: "That old story is about a king who was just" }, hint: "bah-GEEN-dah. ⚠️ You know raja, a king, from u47 — and that is the plain word for the office. Baginda is how you speak OF him or TO him with reverence, so it belongs to folk tales, royal courts and the sultanates that still exist in Indonesia. In a story it functions almost as a name: baginda berkata, the king said." },
      ],
    },
    {
      id: "id-u109l2",
      unit: 109,
      lesson: 2,
      title: "Sapaan surat dan keluarga",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Use the high letter-writing register for family and talk about naming itself — revered mother, revered father, beloved elder, beloved younger one, a term of address, and what somebody is called.",
      items: [
        { id: "id-u109l2-ibunda", type: "vocab", front: "Ibunda", reading: "ibunda", meaning: "revered mother", example: { jp: "Surat dari anak itu mulai dengan kata Ibunda yang saya cinta.", en: "The letter from that child began with the words my beloved mother." }, accept: ["mother, in the high register", "honoured mother", "the formal word for one's mother"], drill: { jp: "Surat dari anak itu mulai dengan kata Ibunda", en: "The letter from that child begins with the word Ibunda" }, hint: "ee-BOON-dah. ⚠️ You know ibu from u3 — and -nda is the honorific suffix Indonesian adds to a kinship word to raise it. It is the word a formal letter, an obituary or a speech uses: Ibunda Presiden, the President's mother. In speech it would sound theatrical, so this is a reading word, like most of this lesson." },
        { id: "id-u109l2-ayahanda", type: "vocab", front: "Ayahanda", reading: "ayahanda", meaning: "revered father", example: { jp: "Ayahanda saya sudah pergi dari desa itu sejak lama.", en: "My honoured father left that village long ago." }, accept: ["father, in the high register", "honoured father", "the formal word for one's father"], drill: { jp: "Ayahanda saya sudah pergi dari desa itu", en: "My honoured father left that village" }, hint: "ah-yah-HAHN-dah, four syllables. ⚠️ The same -nda on ayah, father, which you know from u3 — **and seeing the suffix twice is the point of putting these two cards together: once you know -nda you can read ananda (dear child), kakanda and adinda without being taught them.** Those last two are the next cards, so this is the frame doing real work." },
        { id: "id-u109l2-kakanda", type: "vocab", front: "kakanda", reading: "kakanda", meaning: "beloved elder", example: { jp: "Dalam surat lama kakanda adalah kata untuk kakak dalam surat cinta.", en: "In old letters kakanda is the word for an elder sibling in a love letter." }, accept: ["dear elder brother or sister", "my elder, affectionately", "the high word for an older sibling"], drill: { jp: "Dalam surat lama kakanda adalah kata untuk kakak", en: "In old letters kakanda is the word for an elder sibling" }, hint: "kah-KAHN-dah. The -nda suffix on kakak, elder sibling, which you know from u3. ⚠️ Its real home is the love letter and the classical poem, where a woman addresses her husband or lover as kakanda whether or not he is older. So it is tender as well as formal — a combination English has to reach for *my dearest* to get." },
        { id: "id-u109l2-adinda", type: "vocab", front: "adinda", reading: "adinda", meaning: "beloved younger one", example: { jp: "Adinda dalam surat itu adalah nama untuk adik perempuan.", en: "Adinda in that letter is the word for a younger sister." }, accept: ["dear younger brother or sister", "my younger one, affectionately", "the high word for a younger sibling"], drill: { jp: "Adinda dalam surat itu adalah nama untuk adik", en: "Adinda in that letter is the word for a younger sibling" }, hint: "ah-DEEN-dah. The -nda on adik, younger sibling, which you know from u3. ⚠️ The pair with kakanda, and the pair is how classical Malay letters work: kakanda writes to adinda and back. It is also a common given name for Indonesian girls, so you will meet it as a person before you meet it as a word." },
        { id: "id-u109l2-sapaan", type: "vocab", front: "sapaan", reading: "sapaan", meaning: "a term of address", example: { jp: "Sapaan yang salah bisa membuat orang tersinggung di rapat resmi.", en: "The wrong term of address can offend somebody at a formal meeting." }, accept: ["the word you use to address somebody", "a form of address", "how you call somebody by their standing"], drill: { jp: "Sapaan yang salah bisa membuat orang tersinggung", en: "The wrong term of address can offend somebody" }, hint: "sah-PAH-an. The noun off menyapa, to greet, which you know from u22. ⚠️ **This is the word for the whole system this lesson and the last one describe**: sapaan is the slot a title goes in, and Indonesians discuss it explicitly because getting it wrong is a real social cost. Kata sapaan is the grammatical term you will meet in any Indonesian textbook." },
        { id: "id-u109l2-panggilan", type: "vocab", front: "panggilan", reading: "panggilan", meaning: "what somebody is called", example: { jp: "Panggilan untuk guru di sekolah itu berbeda dari nama di surat resmi.", en: "What the teacher is called at that school is different from the name on official papers." }, accept: ["a nickname in use", "the name people actually use", "a calling or summons"], drill: { jp: "Panggilan untuk guru itu berbeda dari nama resmi", en: "What that teacher is called differs from the official name" }, hint: "pahng-GEE-lan, hard g. From panggil, to call, which you know from u3. ⚠️ Keep it apart from the card above it: a sapaan is the TITLE that marks rank, a panggilan is the name actually in use — nama panggilan is a short form or nickname. It also means a summons (panggilan polisi) and a vocation (panggilan hidup), so three senses off one root." },
      ],
    },
    {
      id: "id-u109l3",
      unit: 109,
      lesson: 3,
      title: "Merendahkan diri di hadapan yang lebih tinggi",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Speak upward the way Indonesian does it — call yourself a servant, present yourself before a superior, ask whether they are graciously willing, petition humbly, act on somebody's behalf, and name the capacity you are acting in.",
      items: [
        { id: "id-u109l3-hamba", type: "vocab", front: "hamba", reading: "hamba", meaning: "your humble servant", example: { jp: "Dalam cerita lama hamba adalah kata untuk saya sendiri di depan raja.", en: "In old stories hamba is the word for oneself in front of a king." }, accept: ["a servant or slave", "the humble I", "the self-lowering first person"], drill: { jp: "Dalam cerita lama hamba adalah kata untuk saya", en: "In old stories hamba is the word for oneself" }, hint: "HAHM-bah. ⚠️ **This is the closest Indonesian comes to a humble register, and it is a NOUN, not a verb form**: you lower yourself by calling yourself a servant, not by conjugating anything. You know saya (u1) and aku — hamba is the step below saya. It is live in religion (hamba Allah, a servant of God) and in historical writing, and dead in conversation." },
        { id: "id-u109l3-menghadap", type: "vocab", front: "menghadap", reading: "menghadap", meaning: "to present oneself before a superior", example: { jp: "Semua pegawai baru harus menghadap kepala kantor pada hari pertama.", en: "Every new employee has to present himself before the head of the office on the first day." }, accept: ["to appear before somebody senior", "to go and face", "to report to a superior in person"], drill: { jp: "Semua pegawai baru harus menghadap kepala kantor", en: "Every new employee must present himself before the office head" }, hint: "muhng-hah-DAHP. The root hadap is to face, and the plain sense is to face towards — rumah itu menghadap laut, that house faces the sea. ⚠️ **Used of people it ONLY points upward**: you menghadap a boss, a minister, a king. A boss never menghadap you, and a learner who uses it symmetrically has said something very strange. That asymmetry IS the deference, and it is lexical, not grammatical." },
        { id: "id-u109l3-berkenan", type: "vocab", front: "berkenan", reading: "berkenan", meaning: "to be graciously willing", example: { jp: "Kami berharap Bapak berkenan datang ke acara kecil kami.", en: "We hope you will be graciously willing to come to our small event." }, accept: ["to deign to", "to be pleased to", "to consent as a favour"], drill: { jp: "Kami berharap Bapak berkenan datang ke acara kami", en: "We hope you will graciously come to our event" }, hint: "buhr-kuh-NAHN. ⚠️ It attributes the willingness to THEM as a kindness, which is why it only works upward — you cannot say saya berkenan datang about yourself without sounding absurd. Keep it apart from mau, to want, and bersedia, to be willing: those are neutral. Every Indonesian wedding invitation has berkenan on it." },
        { id: "id-u109l3-memohon", type: "vocab", front: "memohon", reading: "memohon", meaning: "to petition humbly", example: { jp: "Kami memohon izin untuk memakai kantor itu pada hari Senin.", en: "We humbly request permission to use that office on Monday." }, accept: ["to request formally and humbly", "to beg leave", "to supplicate"], drill: { jp: "Kami memohon izin untuk memakai kantor itu", en: "We humbly request permission to use that office" }, hint: "muh-MOH-hohn. ⚠️ You know meminta, to ask for, from u22 — memohon is the same act performed from below, and the step up in formality is large. It is the verb on every application form (memohon beasiswa, memohon izin) and in prayer. Mohon alone is the softener you will hear a hundred times a day: mohon tunggu, please wait." },
        { id: "id-u109l3-mewakili", type: "vocab", front: "mewakili", reading: "mewakili", meaning: "to act on behalf of", example: { jp: "Dia mewakili seluruh keluarga dalam rapat tentang tanah itu.", en: "He acted on behalf of the whole family in the meeting about that land." }, accept: ["to represent", "to stand in for", "to speak for somebody else"], drill: { jp: "Dia mewakili seluruh keluarga dalam rapat itu", en: "He acts on behalf of the whole family in that meeting" }, hint: "muh-wah-KEE-lee, four syllables. Built on wakil, a deputy, which you know from u74 — being a wakil is a POST, mewakili is the ACT, and you can mewakili somebody without holding any post at all. ⚠️ It belongs in this lesson because it is how you announce standing in formal Indonesian: saya mewakili X opens a speech, a complaint and a negotiation." },
        { id: "id-u109l3-selaku", type: "vocab", front: "selaku", reading: "selaku", meaning: "in the capacity of", example: { jp: "Dia datang ke rapat itu selaku kepala sekolah bukan orang tua anak.", en: "He came to that meeting in his capacity as head teacher, not as a child's parent." }, accept: ["acting as", "in one's role as", "qua"], drill: { jp: "Dia datang ke rapat itu selaku kepala sekolah", en: "He came to that meeting as head teacher" }, hint: "suh-LAH-koo. The root laku is conduct or how a thing goes. ⚠️ You know sebagai, as, and selaku is its formal twin with one extra requirement: **it names an OFFICE, not a comparison.** Dia bekerja sebagai guru is a job; dia hadir selaku kepala sekolah is a capacity he is exercising. Official letters use selaku almost exclusively, and it is how a signature line is introduced." },
      ],
    },
    {
      id: "id-u109l4",
      unit: 109,
      lesson: 4,
      title: "Kedudukan, gelar, dan tata krama",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about rank and manners as things — a title before a name, a rank, a standing in a hierarchy, the code of manners, proper conduct, and an honour conferred on somebody.",
      items: [
        { id: "id-u109l4-gelar", type: "vocab", front: "gelar", reading: "gelar", meaning: "a title placed before a name", example: { jp: "Gelar di depan nama orang itu adalah tanda bahwa dia sudah selesai pascasarjana.", en: "The title in front of that person's name is a sign that he has finished postgraduate study." }, accept: ["an academic or noble title", "a style attached to a name", "a conferred designation"], drill: { jp: "Gelar di depan nama orang itu adalah tanda penting", en: "The title in front of that person's name is an important sign" }, hint: "GUH-lahr. ⚠️ Indonesia takes titles seriously and writes them out: an academic gelar goes after the name (Budi Santoso, S.H.) and a noble or honorific one goes before it. Keep it apart from nama, a name, which you know from u3, and from sarjana, which u103 gave you: a sarjana is the person, the gelar is the string of letters they are entitled to." },
        { id: "id-u109l4-pangkat", type: "vocab", front: "pangkat", reading: "pangkat", meaning: "a rank in a service", example: { jp: "Pangkat dia di kantor polisi itu lebih tinggi daripada dulu.", en: "His rank at that police station is higher than before." }, accept: ["a grade in a hierarchy", "a step in a ladder of seniority", "military or civil-service rank"], drill: { jp: "Pangkat dia di kantor polisi itu lebih tinggi", en: "His rank at that police station is higher" }, hint: "PAHNG-kaht — ng one hum. ⚠️ Specifically a NUMBERED step in a service: army, police, civil service. You know jabatan from u74, a post held — a jabatan is a job with duties, a pangkat is a level with a salary band, and an Indonesian official has both and they move separately. The word also means a power in arithmetic, which is unrelated and harmless." },
        { id: "id-u109l4-kedudukan", type: "vocab", front: "kedudukan", reading: "kedudukan", meaning: "a standing in a hierarchy", example: { jp: "Kedudukan dia di perusahaan itu masih belum jelas sampai sekarang.", en: "His standing in that company is still not clear." }, accept: ["one's position relative to others", "status", "where somebody sits in an order"], drill: { jp: "Kedudukan dia di perusahaan itu masih belum jelas", en: "His standing in that company is still not clear" }, hint: "kuh-doo-DOO-kan. ⚠️ From duduk, to sit, which you know from u4 — Indonesian builds *standing* out of *sitting*, so where you sit is where you stand. Keep the three apart: a pangkat is a numbered rank, a jabatan (u74) is a named post, a kedudukan is your position relative to everybody else, and it can exist with no title at all." },
        { id: "id-u109l4-tatakrama", type: "vocab", front: "tata krama", reading: "tatakrama", meaning: "the code of manners", example: { jp: "Tata krama di rumah itu sangat kuat dan semua anak tahu aturan itu.", en: "The code of manners in that house is very strong and all the children know the rules." }, accept: ["etiquette", "the rules of courteous behaviour", "good form"], drill: { jp: "Tata krama di rumah itu sangat kuat", en: "The code of manners in that house is very strong" }, hint: "TAH-tah KRAH-mah, two words. Tata is an arrangement or system and krama is Javanese for the refined register — so the phrase literally means *the ordering of refinement*, which is a fair description of etiquette. ⚠️ It is a SYSTEM, not a feeling: you learn tata krama, you can break it, and an Indonesian school will have a lesson in it." },
        { id: "id-u109l4-adab", type: "vocab", front: "adab", reading: "adab", meaning: "proper conduct", example: { jp: "Adab di meja makan berbeda di setiap daerah di negara ini.", en: "Proper conduct at the dinner table differs in every region of this country." }, accept: ["decorum", "right behaviour as a moral matter", "good breeding"], drill: { jp: "Adab di meja makan berbeda di setiap daerah", en: "Proper conduct at the table differs in every region" }, hint: "AH-dahb, final b breathed. An Arabic loan and the deeper of this lesson's two manners words. ⚠️ The difference is real: tata krama is a code you can be taught, adab is a quality a person either has or lacks — tidak punya adab is a serious insult, and tidak tahu tata krama is merely a complaint about upbringing. You know sopan (u32), polite, which is the behaviour both produce." },
        { id: "id-u109l4-anugerah", type: "vocab", front: "anugerah", reading: "anugerah", meaning: "an honour conferred", example: { jp: "Pemerintah memberi anugerah kepada lima guru dari desa yang jauh.", en: "The government gave an honour to five teachers from far-off villages." }, accept: ["an award bestowed from above", "a boon granted", "a distinction given to somebody"], drill: { jp: "Pemerintah memberi anugerah kepada lima guru", en: "The government gave an honour to five teachers" }, hint: "ah-noo-guh-RAH, four syllables. Sanskrit, and originally a gift from a king or a god — which is why it always comes DOWNWARD from somebody with standing. ⚠️ Keep it apart from hadiah, a present, which you know: a hadiah can pass between equals, an anugerah cannot. Menganugerahkan is to confer one, and anugerah Tuhan, a gift of God, is the everyday religious use." },
      ],
    },
  ],
};
