// ID Unit 105 — Rasa yang bercampur ("Feelings that come mixed") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 2 (u101–u113). Band notes BB1–BB8 are in unit101.js's header; unit1's
// A1 conventions, unit21's A2 set and unit51's B1 set (B1–B12) all still bind.
//
// §P1. ⚠️ **THIS IS THE THIRD EMOTION UNIT IN THE LANGUAGE AND THE OTHER TWO
//      TOOK THE OBVIOUS WORDS.** u31 owns the BASIC feelings (`kecewa` `lega`
//      `gugup` `kagum` `cemburu` `rindu` `kesal` `bersyukur` `menyesal`), u57
//      owns FELT EMOTION at B1 (`canggung` `haru` `terharu` `tersinggung`
//      `dengki` `iri` `muak` `hampa` `getir` `pilu` `pasrah` `putus asa`
//      `lesu`), u78 owns CHARACTER, u112 (mine) owns the CLINICAL frame. So the
//      only ground left is what is **subtle or MIXED** — and that turned out to
//      be the right unit anyway, because it is exactly what B2 adds.
//      **Measured: 13 of my first 36 candidates were already theirs.** Named,
//      so the next seat does not re-probe them: canggung haru terharu
//      tersinggung dengki bimbang kesal muak iri cemburu rindu bersyukur lega
//      gugup kagum heran pasrah kewalahan hampa getir pilu rela.
//
// §P2. BOUNDARY WITH u112, WHICH IS ALSO MINE, STATED ONCE AND HELD BOTH WAYS.
//      **u105 owns what somebody FEELS RIGHT NOW. u112 owns the clinical frame
//      — a diagnosis, a therapy, a recovery.** So `murung` (low, downcast as a
//      lasting state) is u112's and `sendu` (a wistful sadness in a song or an
//      afternoon) is this unit's; `tertekan` (under pressure, the word a
//      counsellor uses) is u112's and `terbebani` (weighed down by what people
//      expect) is this unit's. The test: **would a doctor write it down?**
//
// §P3. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (unit1 §3 / unit51 B5). Six of
//      this unit's fronts are `ter-` forms, which is not an accident — Indonesian
//      marks "this happened TO me, I did not choose it" with ter-, and that is
//      the grammar of an involuntary feeling:
//      tersipu → sipu — `sipu` is not taught and is not a free word. Clean.
//      terenyuh → enyuh — not taught, not a free word. Clean.
//      terpesona → pesona — `pesona` is NOT taught, so no pair exists.
//      terkesima → kesima — not a free word. Clean.
//      tersanjung → menyanjung — `menyanjung` is NOT taught. Clean.
//      terpukul → memukul ⚠️ `memukul` IS taught (u45, "to hit"). Carded: being
//        hit and being devastated are two words, and Indonesian uses the same
//        picture English does. Drill-safe: the shared string is the root `pukul`,
//        which is taught **as a clock word** (u5, "o'clock") — and `pukul` is
//        NOT a whole word inside `terpukul` (index 3, preceded by `r`), nor the
//        reverse. Verified both directions by hand.
//      terbebani → beban ⚠️ `beban` IS taught (u60, "a burden"). Carded: a beban
//        is the load, terbebani is being under it. Drill-safe: "terbebani" holds
//        "beban" at index 3, preceded by `r` and followed by `i`.
//      campur aduk → campur/aduk — NEITHER is taught, so the two-word front is
//        clean in both directions. Fold is "campuraduk"; nothing else in the
//        corpus folds to it (`reading-taken.mjs id`, 0 duplicated).
//      was-was → was — `was` is not an Indonesian word on its own; the
//        reduplication IS the word (unit1 §5's "not a plural" case). Fold is
//        "waswas".
//
// §P4. ⚠️ **REGISTER NOTE ON `galau`, AND IT IS A DELIBERATE EXCEPTION.** unit1
//      §7 defers the Jakarta colloquial layer, and `galau` came up through it.
//      It is carded anyway because it has crossed over completely — it is in
//      KBBI, it is in newspaper headlines, and there is no standard word for the
//      specific thing it names (churning indecision about something personal).
//      `ambyar` and `baper` were REFUSED on the same test and are still slang.
//      The hint says plainly that `galau` is informal and what to use in writing.
export const ID_UNIT105 = {
  id: "id-u105",
  lang: "id",
  title: "Rasa yang bercampur",
  order: 105,
  stage: "b2",
  lessons: [
    {
      id: "id-u105l1",
      unit: 105,
      lesson: 1,
      title: "Tidak enak di depan orang",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the small discomforts of being among other people — being awkward, feeling watched, being embarrassed by praise, being reluctant to impose on somebody senior, hesitating to ask, and blushing.",
      items: [
        { id: "id-u105l1-kikuk", type: "vocab", front: "kikuk", reading: "kikuk", meaning: "awkward in one's own body", example: { jp: "Saya kikuk setiap kali harus berbicara di depan orang banyak.", en: "I feel awkward every time I have to speak in front of a lot of people." }, accept: ["clumsy with self-consciousness", "not knowing what to do with oneself", "ill at ease"], drill: { jp: "Saya kikuk setiap kali harus berbicara", en: "I feel awkward every time I have to speak" }, hint: "KEE-kook, both vowels short. ⚠️ You already know canggung from u57, and they are close but not the same: canggung is the SITUATION being awkward, kikuk is YOUR BODY being awkward in it — hands in the wrong place, standing badly. A first dance is canggung; the person treading on feet is kikuk." },
        { id: "id-u105l1-risih", type: "vocab", front: "risih", reading: "risih", meaning: "uncomfortable at being looked at", example: { jp: "Dia risih karena semua orang di kelas melihat dia.", en: "She felt uncomfortable because everybody in the class was looking at her." }, accept: ["ill at ease under attention", "squirming with discomfort", "uneasy at being watched"], drill: { jp: "Dia risih karena semua orang melihat dia", en: "She is uncomfortable because everybody is looking at her" }, hint: "REE-seeh, final h breathed. ⚠️ The word is specifically about EXPOSURE — a stare, a compliment that goes on too long, a question that is too personal. Keep it apart from takut, afraid, which you know: nothing bad is going to happen, you just want the attention to stop. Membuat risih is to make somebody squirm." },
        { id: "id-u105l1-jengah", type: "vocab", front: "jengah", reading: "jengah", meaning: "embarrassed into silence", example: { jp: "Anak itu jengah setelah ibu memuji dia di depan teman.", en: "That child was embarrassed after his mother praised him in front of his friends." }, accept: ["abashed", "mortified and quiet", "shamed into looking away"], drill: { jp: "Anak itu jengah setelah ibu memuji dia", en: "That child is embarrassed after his mother praised him" }, hint: "JUHNG-ah — ng is one hum. ⚠️ Stronger than malu, shy or ashamed, which you know from u31, and narrower: jengah is the specific heat of being singled out when you did not ask to be. Praise does it as often as criticism, which is why it belongs in this lesson rather than next to shame." },
        { id: "id-u105l1-sungkan", type: "vocab", front: "sungkan", reading: "sungkan", meaning: "reluctant to impose on somebody senior", example: { jp: "Saya sungkan meminta tolong kepada atasan yang baru.", en: "I feel reluctant to ask the new boss for help." }, accept: ["holding back out of deference", "too polite to ask", "unwilling to trouble someone"], drill: { jp: "Saya sungkan meminta tolong kepada atasan baru", en: "I am reluctant to ask the new boss for help" }, hint: "SOONG-kan. ⚠️ **This is one of the most Indonesian words in the course and English has no single word for it.** It is not shyness and not fear: it is the feeling that asking would cost the other person something they could not refuse. It only ever points UP or ACROSS a relationship — you are sungkan with a boss, a host, a mother-in-law, never with a child. Jangan sungkan is how a host says make yourself at home." },
        { id: "id-u105l1-segan", type: "vocab", front: "segan", reading: "segan", meaning: "hesitant to do something", example: { jp: "Dia segan tanya lagi karena takut dianggap kurang pintar.", en: "He is hesitant to ask again because he is afraid of being thought not clever enough." }, accept: ["reluctant", "holding back from doing something", "disinclined"], drill: { jp: "Dia segan tanya lagi di depan kelas", en: "He is hesitant to ask again in front of the class" }, hint: "suh-GAHN, hard g. ⚠️ The pair with the card before it is worth holding, because Indonesians use them differently: sungkan is about not wanting to BURDEN somebody, segan is about not wanting to EXPOSE yourself. And segan has a second, older sense — disegani means respected, held in a little awe — so read the voice before you translate it." },
        { id: "id-u105l1-tersipu", type: "vocab", front: "tersipu", reading: "tersipu", meaning: "to blush", example: { jp: "Perempuan muda itu tersipu ketika nama dia disebut di depan semua orang.", en: "That young woman blushed when her name was called out in front of everybody." }, accept: ["to go red in the face", "to flush with embarrassment", "to redden shyly"], drill: { jp: "Perempuan muda itu tersipu ketika nama disebut", en: "That young woman blushes when the name is called" }, hint: "tuhr-SEE-poo. ⚠️ Note the ter-: it marks something that HAPPENS to you rather than something you do, which is the grammar of six fronts in this unit. The full phrase tersipu malu is very common and means exactly the same thing twice over — Indonesian likes the doubling here. It is a warm word: a tersipu is pleased as well as embarrassed." },
      ],
    },
    {
      id: "id-u105l2",
      unit: 105,
      lesson: 2,
      title: "Tersentuh dan terpesona",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the feelings a beautiful or moving thing produces — being moved to tears, being spellbound, being awestruck, being struck dumb, being flattered, and losing yourself in something.",
      items: [
        { id: "id-u105l2-terenyuh", type: "vocab", front: "terenyuh", reading: "terenyuh", meaning: "moved almost to tears", example: { jp: "Saya terenyuh setelah membaca surat dari anak itu.", en: "I was moved almost to tears after reading the letter from that child." }, accept: ["touched deeply", "with a lump in the throat", "softened by something sad and kind"], drill: { jp: "Saya terenyuh setelah membaca surat itu", en: "I was moved to tears after reading that letter" }, hint: "tuh-ruh-NYOOH — ny is one sound, and the final h is breathed. ⚠️ You know terharu from u57, which is the general sense of being moved. Terenyuh is narrower and softer: it is specifically PITY mixed with tenderness, the feeling at a story about somebody small having a hard time. A wedding is terharu; a letter from a sick child is terenyuh." },
        { id: "id-u105l2-terpesona", type: "vocab", front: "terpesona", reading: "terpesona", meaning: "spellbound", example: { jp: "Semua penonton terpesona oleh suara perempuan muda itu.", en: "The whole audience was spellbound by that young woman's voice." }, accept: ["enchanted", "captivated", "held by something beautiful"], drill: { jp: "Semua penonton terpesona oleh suara itu", en: "The whole audience is spellbound by that voice" }, hint: "tuhr-puh-SOH-nah. The root pesona is a charm or a spell, and the ter- makes it something done to you — so the literal sense is enchanted, and Indonesian has not worn the magic out of it the way English has with fascinated. ⚠️ It takes oleh for what did it: terpesona oleh X." },
        { id: "id-u105l2-takjub", type: "vocab", front: "takjub", reading: "takjub", meaning: "awestruck", example: { jp: "Kami takjub melihat gunung itu pada pagi yang pertama.", en: "We were awestruck seeing that mountain on the first morning." }, accept: ["filled with awe", "amazed at something vast", "struck with wonder"], drill: { jp: "Kami takjub melihat gunung itu pagi ini", en: "We are awestruck seeing that mountain this morning" }, hint: "TAHK-joob. An Arabic loan, and it keeps a trace of the religious register — takjub is what you feel at something far bigger than you. ⚠️ Keep it apart from kagum, admiring, which you know from u31: kagum is for a person's skill and takjub is for scale and beauty. You are kagum at a surgeon and takjub at a mountain." },
        { id: "id-u105l2-terkesima", type: "vocab", front: "terkesima", reading: "terkesima", meaning: "struck dumb", example: { jp: "Dia terkesima dan tidak bisa bilang apa pun selama satu menit.", en: "He was struck dumb and could not say anything for a minute." }, accept: ["too stunned to speak", "dumbfounded", "frozen with surprise"], drill: { jp: "Dia terkesima dan tidak bisa bilang apa pun", en: "He is struck dumb and cannot say anything" }, hint: "tuhr-kuh-SEE-mah. ⚠️ Keep it apart from the card just above: terpesona is being HELD by something beautiful, terkesima is being STOPPED by something unexpected — and the second can be good news or bad. The tell is the silence: a terkesima person has lost the power of speech, which is why the next lesson's kelu is its darker cousin." },
        { id: "id-u105l2-tersanjung", type: "vocab", front: "tersanjung", reading: "tersanjung", meaning: "flattered", example: { jp: "Saya tersanjung karena mereka menyebut nama saya di depan rapat.", en: "I was flattered that they mentioned my name in front of the meeting." }, accept: ["pleased by praise", "honoured by what somebody said", "complimented"], drill: { jp: "Saya tersanjung karena mereka menyebut nama saya", en: "I am flattered that they mentioned my name" }, hint: "tuhr-sahn-JOONG. From menyanjung, to praise somebody highly, which this course does not card. ⚠️ Unlike the English flattered, it carries NO suspicion that the praise was false — saya tersanjung is a plain, warm thank-you and is the standard polite response to a compliment in Indonesian. It is the opposite number of l1's jengah: same praise, opposite reaction." },
        { id: "id-u105l2-hanyut", type: "vocab", front: "hanyut", reading: "hanyut", meaning: "carried away by something", example: { jp: "Dia hanyut dalam cerita itu dan lupa waktu sampai malam.", en: "He was carried away by that story and forgot the time until nightfall." }, accept: ["swept along", "lost in something", "drifting with it"], drill: { jp: "Dia hanyut dalam cerita itu dan lupa waktu", en: "He is carried away by that story and forgets the time" }, hint: "HAH-nyoot — ny is one sound. First the literal word for being swept away by water, which is how a flood report uses it, and then the obvious metaphor for being lost in a book or a feeling. ⚠️ Both senses are live and common, so the context does the work: rumah hanyut is a house washed away, hanyut dalam lagu is lost in a song." },
      ],
    },
    {
      id: "id-u105l3",
      unit: 105,
      lesson: 3,
      title: "Terpukul dan tak bertenaga",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the heavier feelings precisely — being devastated, being unable to get a word out, a long forlorn sadness, a wistful one, being weighed down by expectation, and quiet irritation.",
      items: [
        { id: "id-u105l3-terpukul", type: "vocab", front: "terpukul", reading: "terpukul", meaning: "devastated by bad news", example: { jp: "Ayah saya terpukul setelah teman lama dia mati pada bulan lalu.", en: "My father was devastated after his old friend died last month." }, accept: ["hit hard by something", "knocked down by bad news", "reeling"], drill: { jp: "Ayah saya terpukul setelah berita itu datang", en: "My father was devastated after that news came" }, hint: "tuhr-POO-kool. ⚠️ Indonesian uses exactly the English picture: you know memukul, to hit, from u45, and ter- makes this the state of having BEEN hit. The blow is always news or loss, never an actual fist — for that Indonesian says dipukul. Terpukul keras, hit hard, is the usual intensifier." },
        { id: "id-u105l3-kelu", type: "vocab", front: "kelu", reading: "kelu", meaning: "unable to get a word out", example: { jp: "Saya kelu dan tidak bisa menjawab pertanyaan dari dokter itu.", en: "I could not get a word out and was unable to answer that doctor's question." }, accept: ["tongue-tied by emotion", "speechless with grief", "struck silent"], drill: { jp: "Saya kelu dan tidak bisa menjawab pertanyaan itu", en: "I cannot get a word out and cannot answer that question" }, hint: "KUH-loo. A short, literary word, and the darker cousin of l2's terkesima: both take your speech, but terkesima is surprise and kelu is grief or dread. ⚠️ It describes the MOUTH — lidah kelu, a tongue gone numb — so Indonesian locates the feeling in the body. It is strong; do not use it for ordinary not knowing what to say." },
        { id: "id-u105l3-nelangsa", type: "vocab", front: "nelangsa", reading: "nelangsa", meaning: "forlorn and alone", example: { jp: "Perempuan tua itu nelangsa setelah anak dia pergi jauh dan tidak kembali.", en: "That old woman was forlorn after her child went far away and did not come back." }, accept: ["desolate", "sad and abandoned", "wretchedly lonely"], drill: { jp: "Perempuan tua itu nelangsa setelah anak pergi", en: "That old woman is forlorn after her child left" }, hint: "nuh-LAHNG-sah — ng is one hum. A Javanese word that standard Indonesian took whole, and it means a sadness with ABANDONMENT in it. ⚠️ Keep it apart from sedih, sad, which you know from u31, and from kesepian, lonely: nelangsa is both at once and lasts. Indonesians often say it half-joking about themselves, which does not make it a light word." },
        { id: "id-u105l3-sendu", type: "vocab", front: "sendu", reading: "sendu", meaning: "wistfully sad", example: { jp: "Lagu itu sendu dan membuat semua orang di kamar diam.", en: "That song is wistful and made everybody in the room go quiet." }, accept: ["melancholy", "sad in a soft, pleasant way", "plaintive"], drill: { jp: "Lagu itu sendu dan membuat semua orang diam", en: "That song is wistful and makes everybody go quiet" }, hint: "SEN-doo, e short. ⚠️ This is the only enjoyable sadness in the lesson, and Indonesian is clear about that: a lagu sendu, a sore sendu, a late afternoon with rain coming — the word describes atmospheres more often than people. Keep it apart from murung, which u112 will give you: murung is a PERSON being low, sendu is a MOOD being lovely." },
        { id: "id-u105l3-terbebani", type: "vocab", front: "terbebani", reading: "terbebani", meaning: "weighed down by expectation", example: { jp: "Dia terbebani oleh rencana dan aturan seluruh keluarga.", en: "He is weighed down by the whole family's plans and rules." }, accept: ["burdened", "under a weight one did not choose", "loaded with obligation"], drill: { jp: "Dia terbebani oleh rencana seluruh keluarga", en: "He is weighed down by the whole family's plans" }, hint: "tuhr-buh-BAH-nee. ⚠️ Built on beban, a burden, which you met in u60 — the beban is the LOAD, terbebani is being under it. Keep it apart from tertekan, which u112 will give you as the clinical word for being under pressure: terbebani names a weight somebody else put there, and is the word a learner needs for family expectation." },
        { id: "id-u105l3-mangkel", type: "vocab", front: "mangkel", reading: "mangkel", meaning: "quietly irritated", example: { jp: "Saya mangkel karena dia datang terlambat lagi dan tidak bilang apa pun.", en: "I was quietly annoyed because he came late again and said nothing about it." }, accept: ["peeved", "nursing an irritation", "put out and saying nothing"], drill: { jp: "Saya mangkel karena dia datang terlambat lagi", en: "I am quietly annoyed because he came late again" }, hint: "MAHNG-kuhl — ng one hum, final e a schwa. ⚠️ You know marah, angry, from u31, and kesal from the same unit. Mangkel is smaller than both and INWARD: you are not going to say anything, you are just going to carry it around. It is slightly informal and extremely common in speech, which is why it earns the card over a more literary word." },
      ],
    },
    {
      id: "id-u105l4",
      unit: 105,
      lesson: 4,
      title: "Perasaan yang bercampur",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Say that a feeling is not one feeling — all mixed up, churning over something personal, caught between two goods, uneasy without a reason, unwilling, and finally at peace with it.",
      items: [
        { id: "id-u105l4-campuraduk", type: "vocab", front: "campur aduk", reading: "campuraduk", meaning: "all mixed up together", example: { jp: "Rasa saya campur aduk pada hari terakhir di kantor itu.", en: "My feelings were all mixed up on my last day at that office." }, accept: ["jumbled together", "a mixture of everything", "all at once and contradictory"], drill: { jp: "Rasa saya campur aduk pada hari terakhir", en: "My feelings are all mixed up on the last day" }, hint: "CHAHM-poor AH-dook — c is CH, two words with a space. Campur is to mix and aduk is to stir, so the phrase is mixed-and-stirred. ⚠️ It is not only for feelings: a bad essay is campur aduk and so is a drawer. For feelings the full phrase is perasaan campur aduk, and it is the standard way to answer how was it when the honest answer is complicated." },
        { id: "id-u105l4-galau", type: "vocab", front: "galau", reading: "galau", meaning: "churning with indecision", example: { jp: "Dia galau selama dua minggu sebelum dia memutuskan hal itu.", en: "He was in turmoil for two weeks before he decided the matter." }, accept: ["in emotional turmoil", "unsettled and unable to decide", "torn up about something"], drill: { jp: "Dia galau selama dua minggu sebelum memutuskan", en: "He was in turmoil for two weeks before deciding" }, hint: "GAH-lau — the au is a single ow sound, like the English cow. ⚠️ **This one is informal and you should know that.** It came out of youth slang and crossed over completely — it is in the dictionary and in headlines now — but in a formal letter you would write bimbang or gelisah instead. Nothing standard covers what it means: churning, personal, undecided, usually about a person or a choice. Lagu galau is a whole music genre." },
        { id: "id-u105l4-dilema", type: "vocab", front: "dilema", reading: "dilema", meaning: "a dilemma", example: { jp: "Saya ada dalam dilema antara uang dan keluarga dan harus memutuskan cepat.", en: "I am in a dilemma between money and family and have to decide quickly." }, accept: ["a hard choice between two things", "being caught between two options", "a difficult fork"], drill: { jp: "Saya ada dalam dilema antara uang dan keluarga", en: "I am in a dilemma between money and family" }, hint: "dee-LAY-mah, no final double-m. ⚠️ Keep it apart from the card before it: galau is the FEELING of being torn, dilema is the SITUATION that does the tearing — so you can be galau because of a dilema, and the sentence sounds natural in Indonesian. It is also apart from masalah, a problem, which you know: a masalah has a right answer, a dilema does not." },
        { id: "id-u105l4-waswas", type: "vocab", front: "was-was", reading: "waswas", meaning: "uneasy without a clear reason", example: { jp: "Ibu saya was-was setiap kali saya pergi jauh dari rumah.", en: "My mother feels uneasy every time I go far from home." }, accept: ["apprehensive", "with a nagging worry", "vaguely anxious"], drill: { jp: "Ibu saya was-was setiap kali saya pergi jauh", en: "My mother feels uneasy every time I go far away" }, hint: "WAHS-wahs, the doubling is the word (unit 1's reduplication pattern again — this is not a plural). An Arabic loan, originally the whispering of doubt. ⚠️ Keep it apart from khawatir, worried, which you know from u31: khawatir has an object you can name, was-was is the feeling with no object — something is not right and you cannot say what." },
        { id: "id-u105l4-enggan", type: "vocab", front: "enggan", reading: "enggan", meaning: "unwilling", example: { jp: "Dia enggan cerita tentang hal lama itu dan selalu mengubah cerita.", en: "She is unwilling to talk about that old matter and always changes the story." }, accept: ["disinclined", "not wanting to", "holding back from doing something"], drill: { jp: "Dia enggan cerita tentang hal lama itu", en: "She is unwilling to talk about that old matter" }, hint: "UHNG-gan — the first e is a schwa, and ngg is the hum plus a hard g. ⚠️ Compare l1's segan and sungkan, which are also reluctance: those two are about other people, enggan is about YOU not wanting to. It is also the most neutral and the most written of the three, so a report says warga enggan where a friend would say malas." },
        { id: "id-u105l4-legawa", type: "vocab", front: "legawa", reading: "legawa", meaning: "at peace with letting something go", example: { jp: "Setelah lama dia legawa dan mulai melupakan masalah itu.", en: "After a long time he came to be at peace with it and began to forget that problem." }, accept: ["reconciled to it", "having accepted a loss with grace", "willing to let go"], drill: { jp: "Setelah lama dia legawa dan mulai melupakan", en: "After a long time he is at peace and begins to forget" }, hint: "luh-GAH-wah. Javanese, taken into standard Indonesian, and the usual full phrase is lapang dada legawa. ⚠️ It is the honourable end of this unit: not winning, not forgetting, but letting go without bitterness. Keep it apart from pasrah, which u57 gave you: pasrah is giving up because you have no choice, legawa is a choice you can be proud of." },
      ],
    },
  ],
};
