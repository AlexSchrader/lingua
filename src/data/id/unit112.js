// ID Unit 112 — Kesehatan jiwa dan pemulihan ("Mental health and recovery") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 2 (u101–u113). Band notes BB1–BB8 are in unit101.js's header; unit1's
// A1 conventions, unit21's A2 set and unit51's B1 set (B1–B12) all still bind.
//
// §P1. BOUNDARY WITH u105, WHICH IS ALSO MINE, AND WITH u67/u57. **u112 owns the
//      CLINICAL frame — a condition, a professional, a course of treatment, a
//      recovery. u105 owns what somebody FEELS RIGHT NOW.** The test I used both
//      ways: **would a doctor write it down?**
//        → `murung` and `tertekan` are HERE (a counsellor writes them down).
//        → `sendu` and `terbebani` are u105's (nobody records them).
//      u67 owns illness and fitness, u57 owns B1 felt emotion.
//      ⚠️ Taken and therefore NOT re-carded: **`stres` u67 · `kecanduan` u67 ·
//      `gejala` u67 · `menderita` u67 · `gelisah` u57 · `cemas` u57 ·
//      `putus asa` u57 · `hampa` `getir` `pilu` u57 · `sembuh` u11 ·
//      `tenang` u31 · `lelah` u11.** That is twelve, and it is why the unit goes
//      at the subject through nouns and professionals rather than through more
//      adjectives for feeling bad.
//
// §P2. ⚠️ **`trauma` AND `stigma` WERE REFUSED AS EXACT COGNATES** (band note
//      BB4): each is its own gloss after folding, so the produce card would
//      show "trauma" and accept "trauma" — a copy task, and `ship-gate.mjs`
//      fails on any. `terguncang` and `rapuh` shipped off that ground instead,
//      and both are real Indonesian words doing the same work.
//      ⚠️ Checked and kept: `depresi`/depression, `terapi`/therapy,
//      `konseling`/counselling, `psikolog`/psychologist, `kecemasan`/anxiety —
//      none of these is its own gloss after folding, so none is a free pass.
//
// §P3. ⚠️ **SUBJECT NOTE, STATED ONCE.** This is a unit about mental illness
//      and it is carded plainly: a learner who can discuss a broken leg and not
//      a breakdown is not equipped for the conversation they will have. Every
//      example is matter-of-fact, every hint teaches the word's grammar and
//      register, and nothing is dramatised. `waras` is included precisely
//      because the learner needs to recognise it when it is used as an insult.
//      Flagged here so the merge seat sees the decision rather than the cards.
//
// §P4. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (unit1 §3 / unit51 B5):
//      gangguan → mengganggu ⚠️ `mengganggu` IS taught (u22, "to disturb").
//        Carded: disturbing somebody is an act, a gangguan in this unit is a
//        named condition. Drill-safe: the shared string is `ganggu`, a whole
//        word in neither form.
//      kecemasan → cemas ⚠️ `cemas` IS taught (u57, "on edge about what may
//        come"). Carded: the feeling and the CONDITION. Drill-safe: index 2,
//        preceded by `e`, followed by `a`.
//      tertekan → menekan/tekan — neither is taught; `tekanan` is not a front.
//        Clean. ⚠️ **But `stres`(u67) is the near-neighbour** — the hint names
//        it, and the division is that stres is the pressure and tertekan is
//        being under it.
//      kejiwaan → jiwa ⚠️ `jiwa` IS taught (u77, "the soul"). Carded: a soul
//        and a clinical field are two things. Drill-safe: "kejiwaan" holds
//        "jiwa" at index 2, preceded by `e` and followed by `a`.
//      berkonsultasi → konsultasi — the bare noun is NOT taught and is not
//        carded. Clean.
//      pendampingan → mendampingi — NOT taught. Clean.
//      candu → kecanduan ⚠️ `kecanduan` IS taught (u67, "addiction"). Carded
//        anyway, and this is the closest call in the unit: `candu` is the
//        SUBSTANCE or hold (it is the old word for opium), `kecanduan` is the
//        state of being addicted. Drill-safe: "kecanduan" holds "candu" at
//        index 2, preceded by `e` and followed by `a`, so findWholeWord matches
//        in neither direction — verified both ways.
//      mengidap → idap — not a free word. Clean. ⚠️ `menderita`(u67) is the
//        near-neighbour; the hint gives the division (mengidap takes a named
//        disease, menderita takes any suffering).
//      pulih / memulihkan → pulih is carded here and memulihkan is its -kan
//        form, both in l4 and deliberately (band note BB7). Drill-safe:
//        "memulihkan" holds "pulih" at index 3, preceded by `m` and followed by
//        `k`. ⚠️ **And `pulih` is NOT glossed "to recover"** —
//        `gloss-taken.mjs id` showed that COLLIDES with `sembuh`@u11, so the
//        card reads "to get back on one's feet". A duplicate `meaning` makes
//        one card unanswerable, and that defect is at ZERO corpus-wide.
//      penyembuhan → sembuh ⚠️ `sembuh` IS taught (u11, "to recover"). Carded
//        as the pe-…-an PROCESS noun, using u107's frame. Drill-safe: index 3,
//        preceded by `y`, followed by `a`.
//      kelelahan → lelah ⚠️ `lelah` IS taught (u11, "tired"). Carded: being
//        tired is tonight, kelelahan is a diagnosis. Drill-safe: index 2,
//        preceded by `e`, followed by `a`.
//      menenangkan / ketenangan → tenang ⚠️ `tenang` IS taught (u31, "calm").
//        Two cards off it here, in the SAME lesson (l4) and deliberately — the
//        act of calming somebody and the state of calm are the two things a
//        recovery lesson needs. Drill-safe both ways: "menenangkan" holds
//        "tenang" at index 3 (preceded by `n`, followed by `k`), "ketenangan"
//        at index 2 (preceded by `e`, followed by `a`).
//
// §P5. DEFERRED FROM THIS UNIT, named not buried, all probed FREE: `kejiwaan`'s
//      neighbours `penderita` `mengidap`-adjacent nouns, plus `pendamping`
//      `bangkit` `kesembuhan` `menyembuhkan`
//      `steril`-adjacent. Refused: `trauma` `stigma` (exact cognates, §P2).
export const ID_UNIT112 = {
  id: "id-u112",
  lang: "id",
  title: "Kesehatan jiwa dan pemulihan",
  order: 112,
  stage: "b2",
  lessons: [
    {
      id: "id-u112l1",
      unit: 112,
      lesson: 1,
      title: "Gangguan dan tekanan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name a mental-health condition the way a clinic does — a disorder, clinical depression, anxiety as a condition, being under psychological pressure, being downcast for a long stretch, and the field itself.",
      items: [
        { id: "id-u112l1-gangguan", type: "vocab", front: "gangguan", reading: "gangguan", meaning: "a disorder", example: { jp: "Gangguan tidur itu membuat dia susah bekerja pada pagi hari.", en: "That sleep disorder makes it hard for him to work in the morning." }, accept: ["a medical condition that interferes", "a disturbance of normal function", "a complaint"], drill: { jp: "Gangguan tidur itu membuat dia susah bekerja", en: "That sleep disorder makes it hard for him to work" }, hint: "gahng-GOO-an, hard g. ⚠️ Built on mengganggu, to disturb, which you know from u22 — and in this unit it is the clinical word: gangguan jiwa, gangguan tidur, gangguan makan. **Indonesian uses the SAME noun for a technical fault** — gangguan listrik is a power cut, gangguan jaringan a network outage — so a learner should read the following word before translating." },
        { id: "id-u112l1-depresi", type: "vocab", front: "depresi", reading: "depresi", meaning: "clinical depression", example: { jp: "Dokter bilang bahwa depresi itu bisa sembuh dengan obat dan terapi.", en: "The doctor said that depression can be cured with medicine and therapy." }, accept: ["depression as an illness", "a depressive condition", "the clinical low mood"], drill: { jp: "Dokter bilang bahwa depresi itu bisa sembuh", en: "The doctor said that depression can be cured" }, hint: "duh-PRAY-see. ⚠️ Keep it apart from sedih, sad, which you know from u20, and from murung later in this lesson: sedih has a cause and passes, murung describes how somebody looks and moves for weeks, depresi is an illness with a diagnosis. Indonesian uses the loanword only for the illness — nobody says saya depresi about a bad afternoon." },
        { id: "id-u112l1-kecemasan", type: "vocab", front: "kecemasan", reading: "kecemasan", meaning: "anxiety as a condition", example: { jp: "Kecemasan dia bertambah setiap kali dia harus berbicara di depan orang.", en: "Her anxiety grows every time she has to speak in front of people." }, accept: ["an anxiety disorder", "clinical worry", "persistent apprehension"], drill: { jp: "Kecemasan dia bertambah setiap kali dia berbicara", en: "Her anxiety grows every time she speaks" }, hint: "kuh-chuh-MAH-san — c is CH, four syllables. ⚠️ You know cemas from u57, on edge about what may come — the ke-…-an frame turns the feeling into a THING that can grow, be measured and be treated, which is exactly the difference between a mood and a condition. That frame is u107's and this is it doing clinical work." },
        { id: "id-u112l1-tertekan", type: "vocab", front: "tertekan", reading: "tertekan", meaning: "under psychological pressure", example: { jp: "Dia tertekan karena pekerjaan dan uang pada waktu yang sama.", en: "He is under pressure because of work and money at the same time." }, accept: ["weighed on by pressure", "feeling the strain", "oppressed by circumstances"], drill: { jp: "Dia tertekan karena pekerjaan dan uang", en: "He is under pressure because of work and money" }, hint: "tuhr-tuh-KAHN. The root tekan is to press, and the ter- marks something done TO you — the same ter- that gave you terpukul and terbebani in u105. ⚠️ Keep it apart from stres (u67), stress: stres is the PRESSURE itself, tertekan is the person under it. And keep it apart from u105's terbebani: a beban is put there by other people's expectations, tertekan can come from anything." },
        { id: "id-u112l1-murung", type: "vocab", front: "murung", reading: "murung", meaning: "downcast for a long stretch", example: { jp: "Anak itu murung selama dua bulan setelah dia masuk ke sekolah baru.", en: "That child was downcast for two months after he started at a new school." }, accept: ["low and withdrawn", "gloomy over a period", "sunk in low spirits"], drill: { jp: "Anak itu murung selama dua bulan", en: "That child was downcast for two months" }, hint: "MOO-roong — ng one hum. ⚠️ Not a feeling but a VISIBLE STATE: a murung person is quiet, slow and closed, and somebody else can see it from across a room. That is why it belongs here rather than in u105 with the subtle feelings — a parent or a teacher reports it about somebody else. Keep it apart from sendu, which u105 gave you: sendu is a lovely mood, murung is a worrying one." },
        { id: "id-u112l1-kejiwaan", type: "vocab", front: "kejiwaan", reading: "kejiwaan", meaning: "to do with mental health", example: { jp: "Rumah sakit itu punya bagian kejiwaan yang baru dan besar.", en: "That hospital has a new, big mental-health department." }, accept: ["psychological, as a field", "psychiatric", "of the mind as a medical matter"], drill: { jp: "Rumah sakit itu punya bagian kejiwaan yang baru", en: "That hospital has a new mental-health department" }, hint: "kuh-jee-WAH-an, four syllables. ⚠️ Built on jiwa, the soul, which you met in u77 — and the ke-…-an frame turns it into a FIELD: kesehatan jiwa or kesehatan kejiwaan is mental health, and gangguan kejiwaan a psychiatric disorder. It is the formal, institutional word, which is why it is on the sign above the department door rather than in anybody's conversation." },
      ],
    },
    {
      id: "id-u112l2",
      unit: 112,
      lesson: 2,
      title: "Mencari bantuan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe getting help — a course of therapy, counselling at an institution, a psychologist, consulting a professional, being accompanied through something, and being of sound mind.",
      items: [
        { id: "id-u112l2-terapi", type: "vocab", front: "terapi", reading: "terapi", meaning: "therapy", example: { jp: "Terapi itu berjalan satu jam setiap minggu selama enam bulan.", en: "The therapy ran for an hour a week over six months." }, accept: ["a course of treatment", "treatment by talking or exercise", "a therapeutic programme"], drill: { jp: "Terapi itu berjalan satu jam setiap minggu", en: "The therapy runs an hour a week" }, hint: "tuh-RAH-pee. ⚠️ **It is not related to api, fire, which you know from u34** — a prefix-stripping tool reads terapi as ter- plus api and is simply wrong, the same class of false positive as kejam/jam and kemeja/meja. It covers physical as well as mental treatment: terapi bicara, speech therapy; fisioterapi, physiotherapy." },
        { id: "id-u112l2-konseling", type: "vocab", front: "konseling", reading: "konseling", meaning: "counselling", example: { jp: "Konseling di sekolah itu ada setiap hari Rabu pada jam dua.", en: "Counselling at that school is available every Wednesday at two." }, accept: ["a guidance session", "talking help from a trained adviser", "advisory support"], drill: { jp: "Konseling di sekolah itu ada setiap hari Rabu", en: "Counselling at that school is available every Wednesday" }, hint: "kohn-SAY-leeng. ⚠️ Note the spelling, which is the giveaway that Indonesian took it by ear: konseling, one l and no final g-sound beyond the hum. In Indonesian schools the person who does it is a guru BK — bimbingan dan konseling — and that abbreviation is on the door of every secondary school in the country." },
        { id: "id-u112l2-psikolog", type: "vocab", front: "psikolog", reading: "psikolog", meaning: "a psychologist", example: { jp: "Psikolog itu tanya tentang keluarga dan pekerjaan dia.", en: "The psychologist asked about his family and his work." }, accept: ["a mental-health professional", "a trained psychologist", "a therapist with a psychology degree"], drill: { jp: "Psikolog itu tanya tentang keluarga dan pekerjaan", en: "The psychologist asks about family and work" }, hint: "psee-KOH-lohg — and yes, the ps at the start is said, both letters, which English does not do. ⚠️ Keep it apart from psikiater, a psychiatrist, which is a medical doctor who can prescribe: in Indonesia the distinction matters for insurance and referral. Psikologi with the final i is the subject; psikolog with none is the person." },
        { id: "id-u112l2-berkonsultasi", type: "vocab", front: "berkonsultasi", reading: "berkonsultasi", meaning: "to consult a professional", example: { jp: "Dia berkonsultasi dengan dokter sebelum memakai obat yang baru.", en: "He consulted a doctor before using the new medicine." }, accept: ["to seek professional advice", "to take advice from an expert", "to have a consultation"], drill: { jp: "Dia berkonsultasi dengan dokter sebelum memakai obat", en: "He consults a doctor before using the medicine" }, hint: "buhr-kohn-sool-TAH-see, five syllables. ⚠️ It takes dengan for the person consulted, never a direct object: berkonsultasi dengan psikolog. Keep it apart from bertanya and meminta nasihat: berkonsultasi implies a professional with standing, usually paid, and is the word on a clinic's price list." },
        { id: "id-u112l2-pendampingan", type: "vocab", front: "pendampingan", reading: "pendampingan", meaning: "ongoing support alongside somebody", example: { jp: "Pendampingan untuk keluarga itu berjalan selama satu tahun penuh.", en: "The support for that family ran for a full year." }, accept: ["accompaniment through a difficulty", "sustained practical support", "a support programme"], drill: { jp: "Pendampingan untuk keluarga itu berjalan satu tahun", en: "The support for that family ran a year" }, hint: "puhn-dahm-PEENG-an, four syllables. The root damping is beside, so mendampingi is to be at somebody's side. ⚠️ **This is a specifically Indonesian concept and the word is everywhere in social work**: pendampingan is not advice and not treatment — it is somebody staying beside you through the whole of a hard process, a court case, an illness, a bereavement. Keep it apart from bantuan, help, which is a thing given once." },
        { id: "id-u112l2-waras", type: "vocab", front: "waras", reading: "waras", meaning: "of sound mind", example: { jp: "Dia masih waras meskipun semua orang bilang hal yang lain.", en: "He is still of sound mind, even though everybody says otherwise." }, accept: ["sane", "in one's right mind", "mentally sound"], drill: { jp: "Dia masih waras meskipun semua orang bilang lain", en: "He is still of sound mind even though everybody says otherwise" }, hint: "WAH-rahs. ⚠️ **Learn this one to RECOGNISE it, not to use it.** Tidak waras, not sane, is a blunt insult in Indonesian — it is what people shout in an argument — and the polite clinical phrasing is gangguan jiwa, which this unit gave you in l1. The word itself is Javanese and originally just means healthy, which is why it sounds so plain and lands so hard." },
      ],
    },
    {
      id: "id-u112l3",
      unit: 112,
      lesson: 3,
      title: "Terguncang dan rapuh",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe damage and depletion — badly shaken, fragile, exhaustion as a state, being saturated and sick of something, an addictive hold, and suffering from a named condition.",
      items: [
        { id: "id-u112l3-terguncang", type: "vocab", front: "terguncang", reading: "terguncang", meaning: "badly shaken", example: { jp: "Keluarga itu terguncang setelah berita tentang kecelakaan itu datang.", en: "That family was badly shaken after the news about the accident arrived." }, accept: ["rocked by something", "destabilised by a shock", "thrown off balance"], drill: { jp: "Keluarga itu terguncang setelah berita itu datang", en: "That family was badly shaken after that news arrived" }, hint: "tuhr-goon-CHAHNG — c is CH, ng one hum. The root guncang is to shake something violently, and the ter- again marks what was done to you. ⚠️ **This is the card the unit took instead of the loanword trauma**, which would have been a word you type by copying the English. It applies to institutions as well as people: ekonomi terguncang, an economy shaken." },
        { id: "id-u112l3-rapuh", type: "vocab", front: "rapuh", reading: "rapuh", meaning: "fragile", example: { jp: "Dia rapuh setelah dua tahun yang sangat susah untuk keluarga dia.", en: "He is fragile after two very hard years for his family." }, accept: ["brittle and easily broken", "frail", "liable to give way"], drill: { jp: "Dia rapuh setelah dua tahun yang sangat susah", en: "He is fragile after two very hard years" }, hint: "RAH-pooh, final h breathed. First a physical word — rapuh wood crumbles rather than bending — and then exactly that picture for a person. ⚠️ Keep it apart from lemah, weak, which you know: lemah has no strength, rapuh has some and will SNAP rather than bend. Of a person it is sympathetic, not contemptuous, which lemah can be." },
        { id: "id-u112l3-kelelahan", type: "vocab", front: "kelelahan", reading: "kelelahan", meaning: "exhaustion as a state", example: { jp: "Kelelahan karena bekerja terus membuat dia sakit pada bulan lalu.", en: "Exhaustion from working without a break made him ill last month." }, accept: ["being worn out", "fatigue as a condition", "depletion"], drill: { jp: "Kelelahan karena bekerja terus membuat dia sakit", en: "Exhaustion from working without a break made him ill" }, hint: "kuh-luh-LAH-han. ⚠️ You know lelah from u11, tired — and the ke-…-an frame is doing the same work it did for kecemasan in l1: lelah is tonight, kelelahan is a state with consequences, and it can be a cause in a sentence. Indonesian also uses it as a passive-ish verb: dia kelelahan, he was overcome by exhaustion, with no verb at all." },
        { id: "id-u112l3-jenuh", type: "vocab", front: "jenuh", reading: "jenuh", meaning: "saturated and sick of it", example: { jp: "Saya jenuh dengan pekerjaan yang sama setiap hari selama lima tahun.", en: "I am sick of the same work every day for five years." }, accept: ["fed up to the point of saturation", "burnt out on something", "unable to take any more of it"], drill: { jp: "Saya jenuh dengan pekerjaan yang sama setiap hari", en: "I am sick of the same work every day" }, hint: "JUH-nooh, final h breathed. ⚠️ Its first sense is chemical — a jenuh solution is saturated, it cannot dissolve any more — and the human sense keeps that exactly: you have taken in as much of this as you can hold. Keep it apart from bosan, bored, which you know from u20: bosan wants something interesting, jenuh wants it all to STOP." },
        { id: "id-u112l3-candu", type: "vocab", front: "candu", reading: "candu", meaning: "an addictive hold", example: { jp: "Candu pada obat itu susah hilang untuk orang muda.", en: "The addictive hold of that drug is hard to shake for young people." }, accept: ["the grip of an addiction", "opium, in the old sense", "something that hooks you"], drill: { jp: "Candu pada obat itu susah hilang", en: "The addictive hold of that drug is hard to shake" }, hint: "CHAHN-doo — c is CH. ⚠️ Originally opium, which is why it sounds heavy, and now the word for anything that hooks you. You already know kecanduan from u67, addiction — and that is the STATE a person is in, while candu is the HOLD the thing has. The pair is close and the hint is the only thing keeping them apart, so read it twice: kecanduan belongs to the person, candu to the substance." },
        { id: "id-u112l3-mengidap", type: "vocab", front: "mengidap", reading: "mengidap", meaning: "to suffer from a named condition", example: { jp: "Dia mengidap penyakit itu sejak dia masih kecil.", en: "He has suffered from that illness since he was small." }, accept: ["to have a chronic disease", "to be a sufferer of", "to carry a long-term condition"], drill: { jp: "Dia mengidap penyakit itu sejak dia kecil", en: "He has suffered from that illness since he was small" }, hint: "muh-ngee-DAHP — ng one hum. ⚠️ You know menderita from u67, to suffer from — and the division is real: **menderita takes any suffering, including poverty and grief; mengidap takes a NAMED disease and nothing else.** Mengidap depresi, mengidap diabetes; never mengidap kesedihan. The person is a pengidap, which u107's frame lets you read unaided." },
      ],
    },
    {
      id: "id-u112l4",
      unit: 112,
      lesson: 4,
      title: "Pulih dan menguat",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about getting better — getting back on your feet, restoring somebody, a course of healing, calming somebody, a settled calm, and being steady under strain.",
      items: [
        { id: "id-u112l4-pulih", type: "vocab", front: "pulih", reading: "pulih", meaning: "to get back on one's feet", example: { jp: "Setelah enam bulan dia pulih dan kembali bekerja di kantor lama.", en: "After six months he got back on his feet and returned to work at his old office." }, accept: ["to come back to how one was", "to be restored", "to pull through"], drill: { jp: "Setelah enam bulan dia pulih dan kembali bekerja", en: "After six months he got back on his feet and returned to work" }, hint: "POO-leeh, final h breathed. ⚠️ You know sembuh from u11, to recover — and the difference is scope: sembuh is a DISEASE ending, pulih is a whole person or thing returning to its former state. An economy, a reputation, a river and a patient can all pulih; only a body sembuh. So pulih is the word this unit needs and sembuh is the one l1 used about depression." },
        { id: "id-u112l4-memulihkan", type: "vocab", front: "memulihkan", reading: "memulihkan", meaning: "to restore somebody", example: { jp: "Obat itu tidak bisa memulihkan dia tanpa keluarga di dekat dia.", en: "That medicine cannot restore him without family nearby." }, accept: ["to bring somebody back to health", "to put right again", "to rehabilitate"], drill: { jp: "Obat itu tidak bisa memulihkan dia tanpa keluarga", en: "That medicine cannot restore him without family" }, hint: "muh-moo-leeh-KAHN. ⚠️ The -kan form of the card before it, and the pair is the point: pulih is what the person DOES, memulihkan is what the treatment does TO them. Same -kan that turned lahir into melahirkan in u111. It is also the word for restoring a name or a right: memulihkan nama baik, to clear somebody's name." },
        { id: "id-u112l4-penyembuhan", type: "vocab", front: "penyembuhan", reading: "penyembuhan", meaning: "a course of healing", example: { jp: "Penyembuhan itu perlu waktu dan uang yang banyak dari keluarga.", en: "That healing needs a lot of time and money from the family." }, accept: ["the healing process", "a programme of recovery", "treatment over time"], drill: { jp: "Penyembuhan itu perlu waktu dan uang yang banyak", en: "That healing needs a lot of time and money" }, hint: "puh-nyuhm-boo-HAHN — ny one sound, five syllables. ⚠️ On sembuh, to recover, which you know from u11, built with u107's pe-…-an frame — so it names the PROCESS rather than the moment. Keep the three apart: sembuh is the end point, pulih is coming back to yourself, penyembuhan is the long middle that costs money." },
        { id: "id-u112l4-menenangkan", type: "vocab", front: "menenangkan", reading: "menenangkan", meaning: "to calm somebody", example: { jp: "Suara ibu itu menenangkan anak yang menangis di kamar belakang.", en: "That mother's voice calmed the crying child in the back room." }, accept: ["to soothe", "to settle somebody down", "to put at ease"], drill: { jp: "Suara ibu itu menenangkan anak yang menangis", en: "That mother's voice calms the crying child" }, hint: "muh-nuh-nahng-KAHN, four syllables. ⚠️ On tenang, calm, which you know from u31, with the me-…-kan frame that makes an adjective into something you do to somebody — the same frame as membesarkan and memanjakan in u111. It is also used of things rather than people: pemandangan yang menenangkan, a calming view." },
        { id: "id-u112l4-ketenangan", type: "vocab", front: "ketenangan", reading: "ketenangan", meaning: "a settled calm", example: { jp: "Ketenangan di rumah itu membantu dia tidur lagi setelah dua bulan.", en: "The calm in that house helped him sleep again after two months." }, accept: ["peace of mind", "quiet as a state", "tranquillity"], drill: { jp: "Ketenangan di rumah itu membantu dia tidur lagi", en: "The calm in that house helped him sleep again" }, hint: "kuh-tuh-NAHNG-an, four syllables. ⚠️ The ke-…-an noun off the same tenang as the card before it, and the two sit together on purpose: menenangkan is what somebody does, ketenangan is the condition that results. **Both frames you have now met several times, which is the point of putting them side by side** — the roots change and the frames do not. Ketenangan jiwa is peace of mind." },
        { id: "id-u112l4-tegar", type: "vocab", front: "tegar", reading: "tegar", meaning: "steady under strain", example: { jp: "Dia tegar meskipun semua orang di sekitar dia menangis.", en: "She stayed steady even though everybody around her was crying." }, accept: ["resilient", "unbowed", "holding firm under pressure"], drill: { jp: "Dia tegar meskipun semua orang di sekitar menangis", en: "She stays steady even though everybody around is crying" }, hint: "tuh-GAHR, hard g. ⚠️ Keep it apart from kuat, strong, which you know from u10, and from the earlier rapuh, fragile: kuat is capacity, tegar is holding your shape while something presses on you — it is the exact opposite of rapuh and the word Indonesians use at a funeral. Tetap tegar, stay strong, is what you write to somebody who has lost a person." },
      ],
    },
  ],
};
