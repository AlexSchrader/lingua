// ID Unit 57 — Haru, geram, dan canggung ("Finer shades of feeling") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 1 (u51–u63). unit51.js's 12 B1 band conventions BIND this file.
// RETITLED (theme kept) from "Emotion, finer shades".
//
// §A1. THE SLOT SURVIVES, BUT IT IS THE TIGHTEST ONE IN THE BLOCK AFTER u51.
//      **36 emotion words are already taught across two whole units:**
//        u20 — marah · sedih · takut · malu · bosan · kaget · merasa ·
//              berharap · menangis · tersenyum · khawatir · kecewa
//        u31 — bahagia · lega · bangga · puas · semangat · menikmati · kesal ·
//              gugup · tegang · kesepian · curiga · cemburu · rindu ·
//              membenci · kagum · menghargai · bersyukur · menyesal · hati ·
//              suasana · tenang · sifat · santai · menahan
//      So the easy emotions are gone, and that is the point: what is left is
//      the SHADES — the ones a learner reaches for when the plain word is
//      wrong. **Not one of this unit's 24 fronts existed in the 1,200.**
//
// §A2. ⚠️ CROSS-BLOCK BOUNDARY — THREE SEATS SIT IN THIS NEIGHBOURHOOD.
//      Band convention B3.5: **u67 owns THE BODY'S HEALTH, u78 owns THE
//      PERSON'S CHARACTER, u57 (this unit) owns FELT EMOTION.**
//      The test, and it decides every arguable card: **a trait is what somebody
//      IS, an emotion is what somebody FEELS RIGHT NOW.**
//        `sombong` `setia` `tulus` `tabah` `ikhlas` → u78. Not taken here.
//        `jengkel` `geram` `cemas` `canggung` → u57. Not u78's.
//      ⚠️ `tabah` (steadfast under hardship) is the closest call in the band and
//      it goes to **u78**, because it describes how a person is MADE rather than
//      how they feel today. `pasrah` (resigned) is taken HERE instead, because
//      it is a state you enter about a particular thing. Flagged in the
//      hand-back as adjacent.
//
// §A3. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (convention B5 / unit1 §3):
//      terharu → haru     `haru` is carded in THIS unit (l1), both in l1.
//        ⚠️ **HERE ter- DOES NOT MEAN MOST** — it is the ter- of state, the one
//        u49 flagged on `terbukti` and u53 on `tergolong`. Drill-safe, measured:
//        "terharu" holds "haru" at index 3, preceded by `r`, so findWholeWord
//        matches in neither direction.
//      tersinggung → singgung   root not taught, not carded. Same ter- of state.
//      bergairah → gairah   root not taught, not carded.
//      putus asa → putus    ⚠️ neither `putus` nor `asa` is taught, and this is
//        a fixed two-word phrase. Its `reading` is therefore **`putusasa`**, per
//        the id convention for multi-word fronts (`rumah sakit` → `rumahsakit`).
//        A reading with a space or a hyphen is a hard lint ERROR — measured on
//        this branch, four cards, 2026-10-07.
//      haru · pilu · getir · muram · lesu · hampa · jengkel · geram · gusar ·
//      muak · dendam · cemas · gelisah · canggung · frustrasi · pasrah · iri ·
//      dengki · antusias · iba — all roots, or loanwords.
//      ⚠️ `iri` is two letters and is NOT a prefix-stripping of anything taught;
//      `iba` likewise. Both trip nothing and need no working around.
//
// §A4. GLOSS TRAPS ROUTED AROUND (convention B8 — measured through the real
//      `normalizeMeaning`, and this unit is the second densest field in the
//      block after u55, because 36 neighbours already hold the obvious glosses):
//      `khawatir` (u20) accepts **"anxious"** → `cemas` is glossed "on edge
//        about what may come".
//      `cemburu` (u31) accepts **"envious"** → `iri` is "covetous".
//      `pahit` (u34) accepts **"bitter"** → `getir` is "galling" and accepts
//        "bitter to swallow", never bare "bitter".
//      `kosong` (u10) IS **"empty"** → `hampa` is "hollow".
//      `kasihan` (u28) IS **"pity"** → `iba` is "moved to compassion" and never
//        accepts bare "pity".
//      `kesal` (u31) IS **"irritated"** → `jengkel` is "exasperated" and
//        `gusar` is "cross"; neither accepts bare "annoyed" or "irritated".
//      `semangat` (u31) IS **"enthusiasm"** → `antusias` is the adjective
//        "enthusiastic", which normalizes to a different string.
//      `tegang` (u31) IS **"tense"** → `gelisah` is "restless" and `canggung`
//        is "awkward"; neither accepts bare "tense".
//      `sedih` (u20) IS **"sad"** → `pilu` is "heartsore" and `muram` is
//        "gloomy"; neither accepts bare "sad".
//
// §A5. ONE SAME-LESSON COMPONENT PAIR IS DELIBERATE AND MEASURED SAFE:
//      `haru`/`terharu` (l1). They are taught together on purpose — `haru` is
//      almost never used alone in speech, so meeting it next to the ter- form is
//      what makes it usable. Drill-safe both ways.
//
// §A6. ⛔ NOT CARDED, EACH WITH A REASON:
//      `risau` · `murung` · `sendu` — `cemas`, `muram` and `pilu` already hold
//        those three shades, and three more words for worried-and-sad is a
//        crowd, not a lesson. Named in their neighbours' hints.
//      `gembira` — a straight synonym of `bahagia` (u31) and `senang` (u2).
//      `sebal` · `masygul` — the first is slang that varies by region, the
//        second is literary and all but dead in speech.
//      `terkesan` — would be a second front off `kesan`, which **this block
//        already carded at u54**. Named in u54's hint instead.
//      `nekat` — reckless, which is closer to character than to feeling, so by
//        §A2's own test it belongs to u78. Left free for that seat.
//      `tabah` — u78's, per §A2.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT57 = {
  id: "id-u57",
  lang: "id",
  title: "Haru, geram, dan canggung",
  order: 57,
  stage: "b1",
  lessons: [
    {
      id: "id-u57l1",
      unit: 57,
      lesson: 1,
      title: "Haru dan pilu",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Name the sorrows the plain word misses — a surge of feeling, being moved by it, being heartsore, calling an experience galling, and calling a mood gloomy or listless.",
      items: [
        { id: "id-u57l1-haru", type: "vocab", front: "haru", reading: "haru", meaning: "a surge of feeling", example: { jp: "Ada rasa haru di antara semua tamu pada akhir upacara itu.", en: "There was a surge of feeling among all the guests at the end of that ceremony." }, accept: ["welling emotion", "a lump in the throat", "being choked up"], drill: { jp: "Rasa haru itu membuat ibu menangis", en: "That surge of feeling made Mother cry" }, hint: "HAH-roo. ⚠️ It is almost always said as rasa haru, using rasa from u34 — the bare word on its own is rare, which is why the ter- form on the next card is what you will actually hear. It is the feeling that rises in the throat at a wedding or a farewell: moved rather than sad, and never unpleasant." },
        { id: "id-u57l1-terharu", type: "vocab", front: "terharu", reading: "terharu", meaning: "moved", example: { jp: "Dia terharu ketika semua rekan memberi hadiah pada hari terakhir.", en: "She was moved when all her colleagues gave her a gift on the last day." }, accept: ["touched", "choked up", "deeply affected"], drill: { jp: "Kami terharu dengan dukungan dari warga", en: "We are moved by the backing from the citizens" }, hint: "tuhr-HAH-roo. ⚠️ HERE ter- DOES NOT MEAN MOST — it is the ter- of state, the same one you met in terkenal, famous, and terbukti, proven, in u49. So terharu is the state haru puts you in. Saya terharu is what you say when a kindness has got through to you, and it is never ironic in Indonesian." },
        { id: "id-u57l1-pilu", type: "vocab", front: "pilu", reading: "pilu", meaning: "heartsore", example: { jp: "Cerita tentang anak itu sangat pilu untuk semua orang.", en: "The story about that child is very heartsore for everybody." }, accept: ["aching with sorrow", "full of grief", "sore at heart"], drill: { jp: "Suara dia pilu sekali di ponsel", en: "Her voice was very heartsore on the phone" }, hint: "PEE-loo. ⚠️ Sedih, which you know from u20, is plain sadness and fits any size of trouble. Pilu is DEEP and it aches — it is what you feel at a death or a ruined life, and it is a literary word you will meet in writing more than in conversation. Memilukan is the adjective for the thing that causes it." },
        { id: "id-u57l1-getir", type: "vocab", front: "getir", reading: "getir", meaning: "galling", example: { jp: "Pengalaman getir itu masih dia ingat sampai sekarang.", en: "He still remembers that galling experience even now." }, accept: ["bitter to swallow", "leaving a sour taste", "hard and unfair"], drill: { jp: "Keadaan getir itu belum berubah", en: "That galling situation has not changed" }, hint: "guh-TEER, hard g. ⚠️ Pahit, which you know from u34, is bitter on the TONGUE and is also used of hardship. Getir is only ever figurative — a getir experience is one that was unjust as well as painful, and the word carries the taste of it. Pengalaman getir is the standard pairing." },
        { id: "id-u57l1-muram", type: "vocab", front: "muram", reading: "muram", meaning: "gloomy", example: { jp: "Suasana di kantor muram setelah berita tentang pabrik itu.", en: "The mood at the office was gloomy after the news about that factory." }, accept: ["dim and joyless", "downcast", "overcast in mood"], drill: { jp: "Wajah dia muram sejak pagi tadi", en: "His face has been gloomy since this morning" }, hint: "MOO-rahm. It works on a FACE, a MOOD or a PLACE, and the picture behind all three is dim light: a muram room is badly lit and a muram face has no light in it. ⚠️ Sedih is a feeling inside; muram is what somebody else can SEE. Murung means much the same and is not taught separately." },
        { id: "id-u57l1-lesu", type: "vocab", front: "lesu", reading: "lesu", meaning: "listless", example: { jp: "Semua pemain lesu pada tahap akhir pertandingan itu.", en: "All the players were listless in the last phase of that match." }, accept: ["drained of energy", "without spirit", "limp and tired"], drill: { jp: "Dia lesu karena belum makan sejak pagi", en: "She is listless because she has not eaten since morning" }, hint: "luh-SOO. ⚠️ Lelah, which you know from u20, is TIRED — you have spent your strength. Lesu is having no drive to begin with, and it is used of markets and economies as readily as of people: pasar lesu, a sluggish market. Malas, which you know, is lazy and is a judgement; lesu is not." },
      ],
    },
    {
      id: "id-u57l2",
      unit: 57,
      lesson: 2,
      title: "Jengkel dan geram",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Grade anger instead of just naming it — exasperated, seething, openly cross, sickened by something, taking offence, and nursing a grudge.",
      items: [
        { id: "id-u57l2-jengkel", type: "vocab", front: "jengkel", reading: "jengkel", meaning: "exasperated", example: { jp: "Saya jengkel karena dia selalu terlambat ke rapat.", en: "I am exasperated because he is always late to the meeting." }, accept: ["fed up", "put out", "worn down by it"], drill: { jp: "Pelanggan itu jengkel karena harga naik", en: "That customer is exasperated because the price went up" }, hint: "JUHNG-kuhl, hard g. ⚠️ Kesal, which you know from u31, is the general irritated. Jengkel is irritation that has BUILT UP from something repeated — the fifth time he is late, not the first. It is everyday spoken Indonesian and perfectly polite to say about a situation." },
        { id: "id-u57l2-geram", type: "vocab", front: "geram", reading: "geram", meaning: "seething", example: { jp: "Warga geram setelah pemerintah menolak semua keberatan itu.", en: "The citizens were seething after the government rejected all those objections." }, accept: ["boiling with anger", "furious and holding it in", "gritting the teeth"], drill: { jp: "Pelatih itu geram dengan hasil pertandingan", en: "That coach is seething about the match result" }, hint: "guh-RAHM, hard g. ⚠️ Marah, which you know from u20, is angry out loud. Geram is anger held IN, with the teeth together — the root means a low growl. It is the word every news report uses for public fury: warga geram, netizen geram. Stronger than jengkel and colder than marah." },
        { id: "id-u57l2-gusar", type: "vocab", front: "gusar", reading: "gusar", meaning: "vexed", example: { jp: "Atasan gusar karena laporan itu belum sampai pada tenggat.", en: "The boss is cross because that report did not arrive by the deadline." }, accept: ["displeased", "ruffled", "showing anger openly"], drill: { jp: "Dia gusar dengan tanggapan dari redaksi", en: "He is cross about the response from the editorial desk" }, hint: "GOO-sar. ⚠️ Slightly formal and a little old-fashioned, which makes it useful: gusar lets you report somebody's anger without the heat of marah, so it is what a careful writer uses about a person in authority. Geram is held in; gusar is showing, but with dignity." },
        { id: "id-u57l2-muak", type: "vocab", front: "muak", reading: "muak", meaning: "sickened", example: { jp: "Dia muak dengan semua hoaks tentang kasus itu.", en: "She is sickened by all the hoaxes about that case." }, accept: ["sick of it", "disgusted", "unable to stomach it"], drill: { jp: "Kami muak dengan cerita yang sama", en: "We are sick of the same story" }, hint: "MOO-ahk. First the body — muak is the feeling before you are sick — and then the obvious figure of speech, which is the commoner use. ⚠️ Bosan, which you know from u20, is BORED: nothing is happening. Muak is having had far too much of something you dislike, which is a different and much stronger complaint." },
        { id: "id-u57l2-tersinggung", type: "vocab", front: "tersinggung", reading: "tersinggung", meaning: "offended", example: { jp: "Tamu itu tersinggung karena tidak ada orang yang menyapa dia.", en: "That guest was offended because nobody greeted him." }, accept: ["taking it personally", "hurt by what was said", "slighted"], drill: { jp: "Jangan tersinggung dengan sanggahan itu", en: "Do not take offence at that counter-argument" }, hint: "tuhr-seeng-GOONG, hard g. Another ter- of state, like terharu in l1 — off singgung, to brush against. ⚠️ So the picture is of being grazed, and Indonesian treats giving offence as a thing you do by accident: maaf kalau tersinggung, sorry if that offended you, is the standard softener before a frank remark." },
        { id: "id-u57l2-dendam", type: "vocab", front: "dendam", reading: "dendam", meaning: "a grudge", example: { jp: "Dendam lama antara dua keluarga itu belum selesai.", en: "The old grudge between those two families is not over." }, accept: ["a wish to get even", "lasting resentment", "vengefulness"], drill: { jp: "Dia menyimpan dendam sejak tahun lalu", en: "He has kept a grudge since last year" }, hint: "DUHN-dahm. ⚠️ Not a feeling that passes: a dendam is carried, which is why it goes with menyimpan, to store, from u25. Membalas dendam is to take revenge, using membalas from u33. Membenci, which you know from u31, is to hate now; dendam is hate with a plan." },
      ],
    },
    {
      id: "id-u57l3",
      unit: 57,
      lesson: 3,
      title: "Cemas dan canggung",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Describe unease precisely — on edge about the future, unable to sit still, socially awkward, blocked and frustrated, past hoping, or resigned to whatever comes.",
      items: [
        { id: "id-u57l3-cemas", type: "vocab", front: "cemas", reading: "cemas", meaning: "on edge about what may come", example: { jp: "Ibu cemas karena anak dia belum sampai di rumah.", en: "Mother is on edge because her child has not got home yet." }, accept: ["uneasy about the future", "apprehensive", "fretting"], drill: { jp: "Semua warga cemas tentang ancaman banjir", en: "All the citizens are on edge about the flood threat" }, hint: "chuh-MAHS — c is CH. ⚠️ Khawatir, which you know from u20, is to be worried and is the everyday word. Cemas is stronger and more physical — it is the one with the churning stomach, pointed at something specific that has not happened yet. Risau means much the same and is not taught separately." },
        { id: "id-u57l3-gelisah", type: "vocab", front: "gelisah", reading: "gelisah", meaning: "restless", example: { jp: "Dia gelisah dan tidak bisa tidur sampai pagi.", en: "He was restless and could not sleep until morning." }, accept: ["unable to settle", "fidgety", "unsettled"], drill: { jp: "Penonton gelisah karena pertandingan belum mulai", en: "The spectators are restless because the match has not started" }, hint: "guh-lee-SAH, hard g. ⚠️ Cemas is in the mind and points at a cause; gelisah is in the BODY and may have no cause you can name — it is the pacing, the turning over in bed. Tegang, which you know from u31, is tense and braced. Gelisah is tense and unable to stay still." },
        { id: "id-u57l3-canggung", type: "vocab", front: "canggung", reading: "canggung", meaning: "awkward", example: { jp: "Suasana canggung di antara dua rekan itu setelah perselisihan.", en: "There was an awkward mood between those two colleagues after the dispute." }, accept: ["ill at ease in company", "clumsy socially", "stiff and self-conscious"], drill: { jp: "Dia canggung di depan semua tamu", en: "He is awkward in front of all the guests" }, hint: "CHAHNG-goong — c is CH, hard g. ⚠️ Malu, which you know from u20, is ASHAMED or shy; canggung is not about shame at all — it is not knowing where to put yourself. It describes both people and situations, and suasana canggung, an awkward atmosphere, is the pairing you will hear most." },
        { id: "id-u57l3-frustrasi", type: "vocab", front: "frustrasi", reading: "frustrasi", meaning: "frustrated", example: { jp: "Tim itu frustrasi karena redaksi menolak semua rancangan mereka.", en: "That team is frustrated because the editorial desk turned down all their drafts." }, accept: ["blocked and fed up", "thwarted", "at the end of one's patience"], drill: { jp: "Pelajar itu frustrasi dengan soal yang susah", en: "That pupil is frustrated with the hard question" }, hint: "froos-TRAH-see. ⚠️ Note the Indonesian spelling — frustrasi, with the second r, not frustasi, which you will hear constantly and which is not the standard form. Jengkel in l2 is irritation at somebody; frustrasi is being blocked from what you are trying to do, and the obstacle need not be a person." },
        { id: "id-u57l3-putusasa", type: "vocab", front: "putus asa", reading: "putusasa", meaning: "despairing", example: { jp: "Jangan putus asa meskipun tahap pertama itu gagal.", en: "Do not despair even though that first phase failed." }, accept: ["having given up hope", "in despair", "beyond hoping"], drill: { jp: "Dia putus asa setelah penolakan itu", en: "He despaired after that refusal" }, hint: "POO-toos AH-sa. Two words: putus, broken off, and asa, hope — so literally hope-snapped. ⚠️ It is the end of the scale this lesson has been climbing, and the fixed phrase jangan putus asa, do not despair, is one of the commonest things said in Indonesian encouragement. Berharap, which you know from u20, is its opposite." },
        { id: "id-u57l3-pasrah", type: "vocab", front: "pasrah", reading: "pasrah", meaning: "resigned", example: { jp: "Setelah dua tahun dia pasrah dengan keadaan di kantor itu.", en: "After two years she became resigned to the situation at that office." }, accept: ["accepting whatever comes", "submitting to it", "giving in to what cannot be changed"], drill: { jp: "Mereka pasrah karena tidak ada jalan lain", en: "They are resigned because there is no other way" }, hint: "PAHS-rah. ⚠️ Putus asa has stopped hoping and it hurts; pasrah has stopped FIGHTING and is at peace with it — in Indonesian the word carries a religious calm, pasrah kepada Tuhan. Terpaksa, which you know from u28, is being forced and resenting it. Pasrah no longer resents." },
      ],
    },
    {
      id: "id-u57l4",
      unit: 57,
      lesson: 4,
      title: "Iri dan antusias",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Name the feelings pointed at other people — covetous, spiteful, hollow inside, keen, full of drive, and moved to compassion by somebody's trouble.",
      items: [
        { id: "id-u57l4-iri", type: "vocab", front: "iri", reading: "iri", meaning: "covetous", example: { jp: "Dia iri karena rekan dia mendapat tunjangan lebih besar.", en: "He is covetous because his colleague got a bigger allowance." }, accept: ["grudging another's good luck", "wishing one had it too", "green with envy"], drill: { jp: "Jangan iri dengan hasil orang lain", en: "Do not envy other people's results" }, hint: "EE-ree, two syllables. ⚠️ Cemburu, which you know from u31, is JEALOUS in the possessive sense — somebody may take what is yours, as in love. Iri wants what somebody ELSE has and is not about losing anything. English blurs the two; Indonesian never does. Iri hati is the full phrase." },
        { id: "id-u57l4-dengki", type: "vocab", front: "dengki", reading: "dengki", meaning: "spiteful", example: { jp: "Sifat dengki itu membuat semua rekan dia pergi.", en: "That spiteful nature made all his colleagues leave." }, accept: ["wishing another ill", "malicious", "bearing ill will"], drill: { jp: "Tanggapan dengki itu tidak pantas di rapat", en: "That spiteful response was not fitting in a meeting" }, hint: "DUHNG-kee, hard g. ⚠️ Worse than iri in l1 of this lesson, and the difference is the direction: iri wants what you have, dengki wants you to LOSE it. The two are often said together as iri dengki, which is the standard Indonesian phrase for envy as a vice, and it is a serious accusation." },
        { id: "id-u57l4-hampa", type: "vocab", front: "hampa", reading: "hampa", meaning: "hollow", example: { jp: "Dia merasa hampa setelah proyek panjang itu selesai.", en: "He felt hollow after that long project was over." }, accept: ["void of feeling", "blank inside", "empty of meaning"], drill: { jp: "Hasil itu hampa tanpa dukungan dari tim", en: "That result is hollow without the team's backing" }, hint: "HAHM-pa. ⚠️ Kosong, which you know from u10, is EMPTY in the ordinary way — a glass, a room, a seat. Hampa is empty of worth or of feeling, and it is only ever figurative. Merasa hampa, to feel hollow, is the pairing you will meet, and janji hampa is an empty promise." },
        { id: "id-u57l4-antusias", type: "vocab", front: "antusias", reading: "antusias", meaning: "enthusiastic", example: { jp: "Semua peserta antusias pada tahap pertama latihan itu.", en: "All the participants were enthusiastic in the first phase of that training." }, accept: ["keen", "eager", "full of interest"], drill: { jp: "Penonton antusias dengan pemain muda itu", en: "The spectators are enthusiastic about that young player" }, hint: "ahn-too-see-AHS, four syllables. ⚠️ Semangat, which you know from u31, is the SPIRIT itself and can be a noun or a shout of encouragement. Antusias is the adjective describing a person who has it, and it is a little more formal — a news report says warga antusias, a friend says semangat." },
        { id: "id-u57l4-bergairah", type: "vocab", front: "bergairah", reading: "bergairah", meaning: "ardent", example: { jp: "Dosen itu bergairah ketika berbicara tentang ilmu dia sendiri.", en: "That lecturer is ardent when speaking about his own field." }, accept: ["full of drive", "passionate about it", "burning with keenness"], drill: { jp: "Dia bergairah dengan pekerjaan baru itu", en: "She is ardent about that new job" }, hint: "buhr-gah-ee-RAH, hard g. Off gairah, ardour. ⚠️ Stronger and warmer than antusias: antusias is keen about an occasion, bergairah is burning about a subject over years. The bare noun gairah also carries a sense of sexual desire, so bergairah about a PERSON means something different from bergairah about work — context does all the work here." },
        { id: "id-u57l4-iba", type: "vocab", front: "iba", reading: "iba", meaning: "moved to compassion", example: { jp: "Semua relawan iba ketika melihat keadaan anak itu.", en: "All the volunteers were moved to compassion when they saw that child's situation." }, accept: ["a stirring of compassion", "softened by somebody's plight", "tender towards suffering"], drill: { jp: "Hati dia iba dengan korban banjir itu", en: "Her heart was moved by those flood victims" }, hint: "EE-ba. ⚠️ Kasihan, which you know from u28, is said ABOUT somebody — kasihan dia, poor thing. Iba is what you FEEL, and it is usually said with hati, heart, from u31: hati saya iba. It is also the verb in the set phrase memelas iba, to plead for pity, which you will read before you ever say it." },
      ],
    },
  ],
};
