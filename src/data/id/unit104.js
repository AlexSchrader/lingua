// ID Unit 104 — Penceritaan dan pembingkaian ("Telling and framing") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 2 (u101–u113). Band notes BB1–BB8 are in unit101.js's header; unit1's
// A1 conventions, unit21's A2 set and unit51's B1 set (B1–B12) all still bind.
//
// §P1. ⚠️ **THE SLOT WAS RETHEMED, AND THE MEASUREMENT IS WHY.** The scaffold
//      called it "Media and narrative". Probing all 26 obvious media candidates
//      on this branch returned **9 free**: `liputan` `meliput` `tajuk` `hoaks`
//      `narasumber` `redaksi` `menyiarkan` `media` are **u55's**, `wartawan`
//      and `siaran` are **u33's**, `berita` is u26's, `wawancara` u24's,
//      `penonton` u35's, `mengunggah` u43's, and u64 owns screen and stage while
//      u81 owns the written work. Authoring the slot as titled would have been a
//      second journalism unit built out of leftovers — which is exactly the
//      measured id-A2 failure (u36/u41, 62 re-authored cards).
//      **What is 0-covered is HOW an account is built and slanted**, and that is
//      a real B2 capability: tell a sequence, frame it, pick what to spotlight,
//      blur what you would rather not say, and then talk about whether the
//      telling was fair. Every one of this unit's 24 fronts probed free.
//
// §P2. BOUNDARY WITH u49, u51 AND u55. u49 owns EVIDENCE AND VERDICTS (`bukti`
//      `fakta` `membuktikan` `menyangkal` `membantah`), u51 owns THE MACHINERY
//      OF DISPUTE (`pendirian` `sudut pandang` `pihak` `sanggahan` `menanggapi`),
//      u55 owns THE NEWS INDUSTRY. So this unit takes **no evidence word, no
//      stance word and no newsroom word**. `sudut pandang` is u51's, so the
//      framing here is done with `membingkai` and `penggambaran`, never with a
//      second angle-of-view noun.
//      ⚠️ `klarifikasi` `dalih` `kredibel` `sensor` `menyensor` `pemberitaan`
//      `memutarbalikkan` `desas-desus` all probed FREE and are deferred (§P4) —
//      the unit took the 24 that make four coherent lessons, not the 32 available.
//
// §P3. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (unit1 §3 / unit51 B5):
//      menuturkan → tutur — `tutur` is NOT taught and is deliberately NOT
//        carded (u110 took `bertutur`, see band note BB5). Clean front.
//      mengisahkan → kisah — `kisah` is NOT taught; `cerita`(u18) is the taught
//        word and this unit uses it in examples only.
//      membingkai → bingkai — `bingkai` is NOT taught and is NOT carded here
//        (the frame as an object belongs to no slot; the verb is the B2 skill).
//      penggambaran → menggambarkan/gambar ⚠️ `gambar` IS taught (u18, "a
//        picture"). Carded: a picture is a thing, a penggambaran is the way a
//        text portrays something. Drill-safe: "penggambaran" holds "gambar" at
//        index 4, preceded by `g` and followed by `a`, so findWholeWord matches
//        in neither direction.
//      melebih-lebihkan → lebih ⚠️ `lebih` IS taught (u14, "more"). Carded:
//        exaggerating is not a comparative. ⚠️ AND THE HYPHEN MATTERS — the
//        reduplication fold gives "melebihlebihkan", and `findWholeWord` treats
//        the hyphen as a non-letter, so `lebih` DOES match at index 7 inside it
//        (unit1 §5's warning). Checked: `lebih`'s own card is a u14 A1 item with
//        no drill containing this word, and this card's drill contains the full
//        front, so neither cloze misfires. Named here because the next seat to
//        add a hyphenated front needs to run the same check.
//      menyudutkan → sudut ⚠️ `sudut` is NOT taught on its own; `sudut pandang`
//        (u51) is a two-word front and `sudut` is not a whole word inside it in
//        the direction that matters. Verified by candidate-check: free.
//      memihak → pihak ⚠️ `pihak` IS taught (u51 l1, "a party to a matter").
//        Carded: a pihak is a side, memihak is choosing one. Drill-safe:
//        "memihak" holds "pihak" at index 2, preceded by `e`.
//      pencitraan → citra — `citra` is carded in THIS unit, same lesson (l4),
//        and that pairing is deliberate (band note BB7). Drill-safe:
//        "pencitraan" holds "citra" at index 3, preceded by `n` and followed by
//        `a`, so no whole-word match either way.
//      anggapan → menganggap — `menganggap` is NOT taught. Clean.
//
// §P4. DEFERRED FROM THIS UNIT, named not buried, all probed FREE:
//      `klarifikasi` `dalih` `kredibel` `sensor` `menyensor` `propaganda`
//      `pemberitaan` `memutarbalikkan` `desas-desus` `menarasikan` `penuturan`
//      `pembingkaian` `sorotan` `jurnalis`. Refused outright as exact cognates
//      (band note BB4): `editor` `viral` `propaganda` `rumor`.
export const ID_UNIT104 = {
  id: "id-u104",
  lang: "id",
  title: "Penceritaan dan pembingkaian",
  order: 104,
  stage: "b2",
  lessons: [
    {
      id: "id-u104l1",
      unit: 104,
      lesson: 1,
      title: "Menceritakan sebuah peristiwa",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about an account of something that happened — the narrative itself, the order of events, relating what you saw, telling a life story, a rival version, and an account as somebody told it.",
      items: [
        { id: "id-u104l1-narasi", type: "vocab", front: "narasi", reading: "narasi", meaning: "a narrative", example: { jp: "Narasi dalam berita itu berubah setelah polisi memberi keterangan baru.", en: "The narrative in that news report changed after the police gave a new statement." }, accept: ["the story being told", "an account as it is shaped", "the line a story takes"], drill: { jp: "Narasi dalam berita itu sudah berubah", en: "The narrative in that news report has changed" }, hint: "nah-RAH-see. ⚠️ Keep it apart from cerita, a story, which you know from u18: a cerita is what happened, a narasi is the SHAPE somebody gave it, with a chosen beginning and a chosen villain. In Indonesian political writing narasi is used almost accusingly — membangun narasi means building a line." },
        { id: "id-u104l1-kronologi", type: "vocab", front: "kronologi", reading: "kronologi", meaning: "the order events happened in", example: { jp: "Kronologi kejadian itu belum jelas sampai sekarang.", en: "The chronology of that incident is still not clear." }, accept: ["a timeline", "the sequence of what happened", "chronology"], drill: { jp: "Kronologi kejadian itu belum jelas", en: "The chronology of that incident is not clear" }, hint: "kroh-noh-LOH-gee, hard g. ⚠️ Indonesian news uses it as a section heading, not just a concept: an article will literally print Kronologi and then a numbered list of times. So it is the opposite of the card before it — a kronologi tries to have no shape at all, just the order." },
        { id: "id-u104l1-menuturkan", type: "vocab", front: "menuturkan", reading: "menuturkan", meaning: "to relate what one saw", example: { jp: "Saksi itu menuturkan semua kejadian pada malam itu.", en: "That witness related everything that happened that night." }, accept: ["to recount", "to give an account of", "to tell in one's own words"], drill: { jp: "Saksi itu menuturkan semua kejadian itu", en: "That witness relates all those events" }, hint: "muh-noo-toor-KAHN. The root tutur is speech, and this is the formal, careful verb for giving an account. ⚠️ Three verbs you now have and they are not the same: bilang is to say, bercerita is to tell a story for pleasure, menuturkan is to set out what happened for the record. A witness menuturkan; a friend bercerita." },
        { id: "id-u104l1-mengisahkan", type: "vocab", front: "mengisahkan", reading: "mengisahkan", meaning: "to tell the story of", example: { jp: "Nenek saya suka mengisahkan masa kecil di desa sebelum perang.", en: "My grandmother likes telling the story of her childhood in the village before the war." }, accept: ["to narrate a tale", "to recount a story about", "to tell of"], drill: { jp: "Nenek saya suka mengisahkan desa itu", en: "My grandmother likes telling the story of that village" }, hint: "muh-ngee-sah-KAHN — ng is one hum. The root kisah is a tale, a word you will meet in book titles. ⚠️ It takes an OBJECT and it leans literary: a film mengisahkan a family, a novel mengisahkan a war. For the everyday act of telling your friend what happened, Indonesian still says bercerita, which you know." },
        { id: "id-u104l1-versi", type: "vocab", front: "versi", reading: "versi", meaning: "one side's version of events", example: { jp: "Cerita dari pihak sekolah berbeda sekali dari versi orang tua anak itu.", en: "The account from the school side is very different from that child's parents' version." }, accept: ["an account as one party tells it", "a variant telling", "somebody's rendering of events"], drill: { jp: "Versi orang tua anak itu sangat berbeda", en: "That child's parents' version is very different" }, hint: "VEHR-see. ⚠️ Note the s where English has -sion: the -sion → -si mapping again, same as globalisasi. In Indonesian it carries a quiet doubt — saying menurut versi mereka signals that you are not vouching for it. It also means a software version, exactly as in English." },
        { id: "id-u104l1-penuturan", type: "vocab", front: "penuturan", reading: "penuturan", meaning: "an account as told", example: { jp: "Menurut penuturan dua orang itu kejadian pada malam itu berbeda sekali.", en: "According to the account of those two people, what happened that night was very different." }, accept: ["somebody's telling of events", "a narration", "what a person relates"], drill: { jp: "Menurut penuturan dua orang itu kejadian itu berbeda", en: "According to those two people's account that event was different" }, hint: "puh-noo-TOO-ran. \u26a0\ufe0f The noun off menuturkan, the card two along from this one \u2014 and the phrase to learn is menurut penuturan X, according to X's account, which is how a careful Indonesian report attributes a version of events without vouching for it. Keep it apart from cerita, a story, which you know: a cerita can be invented, a penuturan is offered as true." },
      ],
    },
    {
      id: "id-u104l2",
      unit: 104,
      lesson: 2,
      title: "Membingkai dan menyoroti",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe how a text steers its reader — framing an issue as one kind of thing, spotlighting part of it, pushing something forward, portraying a place, blurring a number, and overstating a danger.",
      items: [
        { id: "id-u104l2-membingkai", type: "vocab", front: "membingkai", reading: "membingkai", meaning: "to frame an issue as something", example: { jp: "Koran itu membingkai masalah itu seperti masalah uang bukan masalah hukum.", en: "That newspaper framed the problem as a money problem, not a legal one." }, accept: ["to present something in a chosen light", "to put a frame around", "to cast an issue a certain way"], drill: { jp: "Koran itu membingkai masalah itu seperti masalah uang", en: "That newspaper frames the problem as a money problem" }, hint: "muhm-beeng-KAH-ee. Literally to put a frame round a picture — bingkai is a picture frame — and then exactly the English metaphor. ⚠️ The frame is the CHOICE of what counts as the subject, so a sentence with membingkai always says what the issue was framed AS: sebagai or seperti follows it almost every time." },
        { id: "id-u104l2-menyoroti", type: "vocab", front: "menyoroti", reading: "menyoroti", meaning: "to put the spotlight on", example: { jp: "Laporan itu menyoroti satu keluarga dan tidak menyebut keluarga yang lain.", en: "That report put the spotlight on one family and did not mention the others." }, accept: ["to highlight", "to focus attention on", "to shine a light on"], drill: { jp: "Laporan itu menyoroti satu keluarga", en: "That report puts the spotlight on one family" }, hint: "muh-nyoh-ROH-tee — ny is one sound. The root sorot is a beam of light, and you met the noun territory in u80. ⚠️ A text menyoroti what it chooses to light up, which means the rest goes dark — that is why the word is paired with framing rather than with simply mentioning. Menjadi sorotan, to become the focus, is the passive-sounding phrase you will read." },
        { id: "id-u104l2-menonjolkan", type: "vocab", front: "menonjolkan", reading: "menonjolkan", meaning: "to push something forward", example: { jp: "Iklan itu menonjolkan harga murah dan tidak menyebut biaya lain.", en: "That advert pushed the low price forward and did not mention other costs." }, accept: ["to make prominent", "to show off a feature", "to emphasise one thing over others"], drill: { jp: "Iklan itu menonjolkan harga murah", en: "That advert pushes the low price forward" }, hint: "muh-nohn-johl-KAHN. The root tonjol is a bump that sticks out, so this is to make something stick out. ⚠️ Keep it apart from the card before it: menyoroti is where you point the light, menonjolkan is making the thing itself bigger. Menonjolkan diri, to push oneself forward, is mildly rude about a person." },
        { id: "id-u104l2-penggambaran", type: "vocab", front: "penggambaran", reading: "penggambaran", meaning: "the way something is portrayed", example: { jp: "Penggambaran kota itu dalam film terlalu bersih dan terlalu sepi.", en: "The portrayal of that city in the film is too clean and too quiet." }, accept: ["a depiction", "how a thing is shown", "a representation in words or pictures"], drill: { jp: "Penggambaran kota itu terlalu bersih", en: "The portrayal of that city is too clean" }, hint: "puhng-gahm-BAH-ran, four syllables. ⚠️ You know gambar, a picture, from u18 — and the pe-…-an frame turns it from the object into the ACT and the RESULT of depicting. It is the word a review reaches for when it wants to say the depiction was wrong without saying the facts were wrong." },
        { id: "id-u104l2-mengaburkan", type: "vocab", front: "mengaburkan", reading: "mengaburkan", meaning: "to blur something deliberately", example: { jp: "Pejabat itu mengaburkan jumlah uang yang sudah hilang.", en: "That official blurred the amount of money that had gone missing." }, accept: ["to obscure", "to make unclear on purpose", "to muddy"], drill: { jp: "Pejabat itu mengaburkan jumlah uang itu", en: "That official blurs that amount of money" }, hint: "muh-ngah-boor-KAHN. The root kabur is out of focus, and the -kan makes it something you DO to a fact. ⚠️ Keep it apart from berbohong, to lie, which you know: a lie says something false, mengaburkan keeps everything technically true and unreadable. It is the politest accusation in this lesson and the most damning." },
        { id: "id-u104l2-melebihlebihkan", type: "vocab", front: "melebih-lebihkan", reading: "melebihlebihkan", meaning: "to overstate", example: { jp: "Orang sering melebih-lebihkan bahaya yang jarang terjadi.", en: "People often overstate dangers that rarely happen." }, accept: ["to exaggerate", "to blow out of proportion", "to make more of something than it is"], drill: { jp: "Orang sering melebih-lebihkan bahaya itu", en: "People often overstate that danger" }, hint: "muh-luh-beeh-luh-beeh-KAHN — six syllables, and the hyphen is part of the word. ⚠️ You know lebih, more, from u14, and doubling it with me-…-kan around it makes the doubling itself mean overdoing: this is the reduplication pattern unit 1 promised you, working for real. Jangan melebih-lebihkan is what you say to someone telling a story too well." },
      ],
    },
    {
      id: "id-u104l3",
      unit: 104,
      lesson: 3,
      title: "Berpihak dan memutarbalikkan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Judge whether an account is fair — objective, subjective, taking a side, cornering somebody, twisting the facts outright, and cutting out what may not be said.",
      items: [
        { id: "id-u104l3-objektif", type: "vocab", front: "objektif", reading: "objektif", meaning: "objective", example: { jp: "Berita itu berusaha objektif tetapi masih memakai kata yang sangat keras.", en: "That report tried to be objective but still used very harsh words." }, accept: ["free of personal feeling", "based on the facts alone", "impartial in method"], drill: { jp: "Berita itu berusaha objektif tetapi gagal", en: "That report tries to be objective but fails" }, hint: "ohb-yek-TEEF — note that the j is said as a Y here, the Dutch way, and the final f is an f not a v. ⚠️ Keep it apart from netral, neutral, which you met in u51: netral is about not taking a side, objektif is about method — a report can be objektif and still conclude that one side is wrong." },
        { id: "id-u104l3-subjektif", type: "vocab", front: "subjektif", reading: "subjektif", meaning: "subjective", example: { jp: "Pendapat dia subjektif karena dia sendiri ada di dalam masalah itu.", en: "His opinion is subjective because he is inside the problem himself." }, accept: ["coloured by personal feeling", "based on one's own view", "not impartial"], drill: { jp: "Pendapat dia subjektif dan tidak jelas", en: "His opinion is subjective and not clear" }, hint: "soob-yek-TEEF, same Dutch j-as-Y. ⚠️ Indonesian uses it as a straightforward criticism in writing — ini subjektif means this cannot be relied on — but with no insult attached when describing taste: penilaian rasa memang subjektif, judging flavour really is subjective. Tone depends entirely on what is being judged." },
        { id: "id-u104l3-memutarbalikkan", type: "vocab", front: "memutarbalikkan", reading: "memutarbalikkan", meaning: "to twist the facts", example: { jp: "Tulisan itu memutarbalikkan kejadian dan membuat pembaca salah mengerti.", en: "That piece twisted what happened and made readers misunderstand." }, accept: ["to turn something on its head", "to misrepresent completely", "to reverse the truth of something"], drill: { jp: "Tulisan itu memutarbalikkan kejadian pada malam itu", en: "That piece twists what happened that night" }, hint: "muh-moo-tahr-bah-leek-KAHN \u2014 six syllables, and worth saying slowly once. Inside it are putar, to turn, and balik, to flip over, so the literal sense is to turn-and-reverse. \u26a0\ufe0f It is the strongest accusation in this lesson: mengaburkan merely blurs, memutarbalikkan states the opposite of what happened. Memutarbalikkan fakta is the fixed phrase." },
        { id: "id-u104l3-memihak", type: "vocab", front: "memihak", reading: "memihak", meaning: "to take a side", example: { jp: "Wartawan itu memihak satu calon sejak awal kampanye.", en: "That journalist took one candidate's side from the start of the campaign." }, accept: ["to be partial to", "to favour one party", "to side with"], drill: { jp: "Wartawan itu memihak satu calon sejak awal", en: "That journalist takes one candidate's side from the start" }, hint: "muh-MEE-hahk. Built straight on pihak, a party to a matter, which you met in u51 — so to memihak is to become one of the sides instead of describing them. ⚠️ Tidak memihak is the standard way to claim neutrality, and it is a stronger claim than berimbang: a report can be berimbang while its author quietly memihak." },
        { id: "id-u104l3-menyudutkan", type: "vocab", front: "menyudutkan", reading: "menyudutkan", meaning: "to corner somebody unfairly", example: { jp: "Berita itu menyudutkan guru itu tanpa memberi waktu untuk menjawab.", en: "That report cornered the teacher without giving him time to answer." }, accept: ["to put someone in a bad light", "to back into a corner", "to single out for blame"], drill: { jp: "Berita itu menyudutkan guru itu tanpa alasan", en: "That report corners that teacher with no reason" }, hint: "muh-nyoo-doot-KAHN — ny is one sound. The root sudut is a corner, so the picture is exactly the English one: pushing somebody into a corner with nowhere to go. ⚠️ It implies UNFAIRNESS, not strength — saying a report menyudutkan somebody is an accusation against the report, never a compliment to it." },
        { id: "id-u104l3-menyensor", type: "vocab", front: "menyensor", reading: "menyensor", meaning: "to censor", example: { jp: "Pemerintah lama itu menyensor setiap koran sebelum koran itu keluar.", en: "That old government censored every newspaper before it came out." }, accept: ["to cut out what may not be said", "to vet and suppress", "to black out part of something"], drill: { jp: "Pemerintah lama itu menyensor setiap koran", en: "That old government censored every newspaper" }, hint: "muh-nyen-SOHR \u2014 ny one sound. \u26a0\ufe0f The noun sensor means censorship in Indonesian, NOT a device \u2014 an electronic sensor is a sensor too, and only context separates them, which is a genuine trap. Indonesia has a Lembaga Sensor Film, a film censorship board, and the word carries the weight of the New Order years." },
      ],
    },
    {
      id: "id-u104l4",
      unit: 104,
      lesson: 4,
      title: "Citra dan anggapan orang",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about reputation and received ideas — the image a body has, the work of building one, a reputation, a widely held assumption, how people perceive something, and the correction you issue when it goes wrong.",
      items: [
        { id: "id-u104l4-citra", type: "vocab", front: "citra", reading: "citra", meaning: "the public image of something", example: { jp: "Citra perusahaan itu rusak setelah berita tentang sungai yang kotor keluar.", en: "That company's image was damaged after the news about the dirty river came out." }, accept: ["an image in the public mind", "how a body is seen", "public face"], drill: { jp: "Citra perusahaan itu rusak setelah berita itu", en: "That company's image was damaged after that news" }, hint: "CHEE-trah — c is CH. A Sanskrit word, and a formal one: citra is the image an institution or a public figure HAS, never a picture on paper, which is a gambar. ⚠️ Membangun citra, to build an image, and citra buruk, a bad image, are the two phrases you will meet; the next card is what happens when building it becomes the whole job." },
        { id: "id-u104l4-pencitraan", type: "vocab", front: "pencitraan", reading: "pencitraan", meaning: "image-building for show", example: { jp: "Pencitraan calon itu berhasil tetapi semua orang tahu bahwa itu tidak jujur.", en: "That candidate's image-building worked but everybody knows it was not honest." }, accept: ["spin", "deliberate cultivation of an image", "public-relations work"], drill: { jp: "Pencitraan calon itu berhasil tetapi tidak jujur", en: "That candidate's image-building worked but was not honest" }, hint: "puhn-chee-trah-AHN, five syllables. ⚠️ The pe-…-an noun off the card just before it — and in Indonesian it is almost always an INSULT. Hanya pencitraan, it is only image-building, is what you say about a politician visiting a flood with a camera crew. English spin is the closest fit; public relations is too neutral." },
        { id: "id-u104l4-reputasi", type: "vocab", front: "reputasi", reading: "reputasi", meaning: "a reputation", example: { jp: "Reputasi dokter itu baik di seluruh kota dan pasien datang dari jauh.", en: "That doctor's reputation is good across the whole city and patients come from far away." }, accept: ["standing among people", "how well regarded someone is", "a name for something"], drill: { jp: "Reputasi dokter itu baik di seluruh kota", en: "That doctor's reputation is good across the whole city" }, hint: "ray-poo-TAH-see. ⚠️ Keep it apart from citra, the card at the top of this lesson: a citra is CONSTRUCTED and can be managed, a reputasi is EARNED and belongs to the people who hold it. A company works on its citra; a surgeon has a reputasi. Mixing them is a real register error in Indonesian." },
        { id: "id-u104l4-anggapan", type: "vocab", front: "anggapan", reading: "anggapan", meaning: "a widely held assumption", example: { jp: "Anggapan bahwa orang desa kurang pintar itu salah dan sudah lama salah.", en: "The assumption that village people are less clever is wrong, and has been wrong for a long time." }, accept: ["a supposition", "what people take to be true", "a received idea"], drill: { jp: "Anggapan bahwa orang desa kurang pintar salah", en: "The assumption that village people are less clever is wrong" }, hint: "ahng-GAH-pan, hard g. From menganggap, to consider something to be so, which this course does not card. ⚠️ Keep it apart from pendapat, an opinion, which you know from u21: a pendapat belongs to a named person who will defend it, an anggapan floats around unowned and usually unexamined." },
        { id: "id-u104l4-persepsi", type: "vocab", front: "persepsi", reading: "persepsi", meaning: "how people perceive something", example: { jp: "Persepsi warga tentang polisi berubah sangat lambat meskipun aturan sudah baru.", en: "Residents' perception of the police changes very slowly even though the rules are already new." }, accept: ["perception", "the impression people have", "how something is understood by the public"], drill: { jp: "Persepsi warga tentang polisi berubah sangat lambat", en: "Residents' perception of the police changes very slowly" }, hint: "puhr-SEP-see. ⚠️ Same -tion → -si mapping, and note that Indonesian has no separate word for the psychological sense — persepsi covers both the public mood and what your eyes report. In survey writing it is a technical term: survei persepsi is an opinion survey about how something is seen rather than about what people want." },
        { id: "id-u104l4-klarifikasi", type: "vocab", front: "klarifikasi", reading: "klarifikasi", meaning: "a public correction", example: { jp: "Perusahaan itu memberi klarifikasi satu hari setelah berita pertama keluar.", en: "That company issued a correction one day after the first report came out." }, accept: ["a clarifying statement", "a formal setting-straight", "a public explanation of what was meant"], drill: { jp: "Perusahaan itu memberi klarifikasi satu hari setelah berita", en: "That company issued a correction a day after the report" }, hint: "klah-ree-fee-KAH-see, five syllables. \u26a0\ufe0f It belongs in a lesson about reputation because that is its job: a damaged citra produces a klarifikasi, and everybody knows it. Memberi klarifikasi, to issue one, is the collocation. Keep it apart from menjelaskan, to explain, which you know: a klarifikasi is PUBLIC and defensive, and an explanation between two people is not one." },
      ],
    },
  ],
};
