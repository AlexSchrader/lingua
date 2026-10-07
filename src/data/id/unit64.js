// ID Unit 64 — Film, panggung, dan penggemar ("Screen, stage and fans") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 2 (u64–u76). unit1.js's 12 conventions and unit21.js's 10 A2
// conventions BIND this file. The B1 layer this block settled is at the head of
// unit69.js (the grammar conventions) and unit72.js (the register conventions);
// read both before touching u64–u76.
//
// RETITLED AND NARROWED from the scaffold's "Media and entertainment".
//
// THE HOLE, counted against all 1,200 merged cards. Indonesian already had a
// surprising amount of this field, which is exactly why the slot had to be
// narrowed rather than taken at face value:
//   TAKEN ALREADY — `siaran` (a broadcast, u33) · `merekam`/`rekaman` (u33/u43) ·
//   `layar` (a screen, u33) · `iklan` (u33) · `majalah` (u33) · `wartawan` (u33) ·
//   `foto`/`memotret`/`kamera` (u33/u43) · `lagu` (u33) · `panggung` (a stage,
//   u35) · `penonton` (the audience, u35) · `musik` · `seni` · `lukisan` (u35) ·
//   `menari` (u35) · `menonton` (u18) · `menyanyi` (u18) · `judul` (u26) ·
//   `cerita` (u26) · `berita` · `koran` (u26) · `bintang` (a star, u19) ·
//   `jadwal` (u13) · `acara` (u9) · `wawancara` (u24).
//   SO WHAT WAS MISSING — the people who MAKE it and the places it happens:
//   no word for a film, a cinema, a director, a scene, a channel, a performance,
//   a role, a singer, a dancer, a concert, an artist, a fan, a review, a joke,
//   or for comedy. The course could say *I watch television* and could not say
//   *who directed it*.
//
// ⚠️ SCOPE BOUNDARY WITH BLOCK 3's u81 — the one that was pre-negotiated, and
// both seats were warned they would otherwise both card the actor.
//   THIS UNIT OWNS THE SCREEN AND THE STAGE: film, broadcast, performer,
//   audience, the live event.
//   u81 OWNS THE WRITTEN WORK: `novel` · `puisi` · `sastra` · `pengarang` ·
//   `bab` · `penerbit` · `naskah` · `tokoh` (a character in a story) · `alur`
//   (a plot) · `kritik`/`mengkritik`.
//   So this unit takes `ulasan` (a review) and NOT `kritik`, and `peran` (a
//   role) and NOT `tokoh`. Neither word appears here.
//
// AFFIX ROOTS STRIPPED AND GREPPED BY HAND (unit1.js convention 3 — a `free`
// verdict from check-front.mjs on a PREFIXED Indonesian form is worth nothing):
//   menyiarkan → siar    root not taught. ⚠️ `siaran` (u33, a broadcast) IS the
//     other card off this root, and its accept[] carries **"to broadcast"** — so
//     this card is glossed "to put on air" instead. Drill-safe: "menyiarkan"
//     does not contain "siaran" and vice versa.
//   pertunjukan → tunjuk ⚠️ `menunjuk` (u39, to point at) is taught off the same
//     root. Different word entirely; named in the hint. Drill-safe — neither
//     string whole-word-contains the other.
//   berperan → peran     both carded here, l2, adjacent on purpose: the noun and
//     the verb are the pair an English speaker needs together. A6's me-/ber-
//     valency precedent. ⚠️ A drill containing "berperan" does NOT satisfy front
//     `peran` (the `r` before it is a letter), so `peran`'s own drill carries the
//     bare noun.
//   penyanyi → nyanyi    ⚠️ `menyanyi` (u18, to sing) IS taught. Carded anyway:
//     convention 3's test fails — knowing *to sing* does not give you *a
//     singer*, and pe- agent nouns are the single most productive shape in the
//     language. Drill-safe (no shared whole word).
//   penari → tari        ⚠️ `menari` (u35, to dance) IS taught. Same reasoning.
//   seniman → seni       ⚠️ `seni` (u35, art) IS taught. Carded: the agent noun
//     is a different word. Drill-safe — "seniman" contains "seni" at index 0
//     followed by `m`, a letter, so findWholeWord does not match.
//   penggemar → gemar    root not taught.
//   menghibur → hibur    ⚠️ `hiburan` (u35, entertainment) IS taught, same root.
//     Carded: the verb is what the course lacked. Drill-safe both ways.
//   ulasan → ulas        root not taught.
//   adegan · saluran · sutradara · konser · komedi · karya · bioskop ·
//   sinetron · dangdut · wayang · gamelan · lelucon · pemirsa · film — roots or
//   loans, no affix.
//
// ⛔ NOT CARDED, and each for a measured reason:
//   `aktor` / `aktris` — front and gloss are the same word to an English reader
//     (the `televisi`/`polisi`/`bus` copy-task trap, unit1.js). The job is done
//     by `peran` + `berperan`, which is also how Indonesians usually say it.
//   `drama` / `episode` / `rating` — same copy-task trap: `normalizeMeaning`
//     leaves "drama", "episode", "rating" and the front is that string.
//   `tayangan` — would be a second noun for a programme going out, and `siaran`
//     (u33) already accepts "a programme going out". A4's accept[] collision.
//   `pembawa acara` (a presenter) — `acara` is taught (u9) and the compound adds
//     a third card to a field already carrying `pemirsa` and `penonton`. Named in
//     `saluran`'s hint instead.
//   `gosip` — low value against `berita` (u26) and a near-copy of the English.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT64 = {
  id: "id-u64",
  lang: "id",
  title: "Film, panggung, dan penggemar",
  order: 64,
  stage: "b1",
  lessons: [
    {
      id: "id-u64l1",
      unit: 64,
      lesson: 1,
      title: "Film dan layar kaca",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Talk about a film and about television — where you watch it, who directed it, which scene you mean, and which channel it went out on.",
      items: [
        { id: "id-u64l1-film", type: "vocab", front: "film", reading: "film", meaning: "a movie", example: { jp: "Film itu sangat bagus, tetapi terlalu panjang.", en: "That movie is very good, but too long." }, accept: ["a motion picture", "a feature film", "a picture you watch"], drill: { jp: "Film baru itu mulai jam tujuh", en: "That new movie starts at seven o'clock" }, hint: "FEELM, one syllable, i as in FIT. From Dutch, so the spelling is the English one — but the word covers both the single movie and film as an art form, where English splits them. Note it does NOT mean the roll of film in a camera; that is also film, and context decides." },
        { id: "id-u64l1-bioskop", type: "vocab", front: "bioskop", reading: "bioskop", meaning: "a cinema", example: { jp: "Kami menonton film baru di bioskop dekat pasar.", en: "We watched a new movie at the cinema near the market." }, accept: ["a movie theatre", "the pictures", "the place you watch films"], drill: { jp: "Bioskop itu penuh pada hari Sabtu", en: "That cinema is full on Saturdays" }, hint: "bee-OS-kop, four syllables. Dutch again, from bioscoop — the old projector brand that gave half the world its word for a cinema. The building, never the film: nonton film di bioskop." },
        { id: "id-u64l1-sinetron", type: "vocab", front: "sinetron", reading: "sinetron", meaning: "an Indonesian soap opera", example: { jp: "Ibu saya suka menonton sinetron setiap malam.", en: "My mother likes watching soap operas every evening." }, accept: ["a long-running TV serial", "a daily television drama", "a soap on Indonesian TV"], drill: { jp: "Sinetron itu sudah berjalan tiga tahun", en: "That soap opera has been running for three years" }, hint: "see-neh-TRON. A squeeze of sinema elektronik — the same shortening habit that gave you pemilu and ponsel. It is enormous in Indonesia: hundreds of episodes, shown nightly, and the first thing anyone will ask whether you watch. Say it to an Indonesian and you have said something about their evening." },
        { id: "id-u64l1-sutradara", type: "vocab", front: "sutradara", reading: "sutradara", meaning: "a director", example: { jp: "Sutradara film itu masih sangat muda.", en: "The director of that movie is still very young." }, accept: ["the person who directs it", "a film director", "the one in charge of a production"], drill: { jp: "Sutradara terkenal itu datang ke bioskop kami", en: "That famous director came to our cinema" }, hint: "soo-tra-DAH-ra, four syllables. Sanskrit, literally the one who holds the thread — a lovely image for the job. It covers film and stage alike. ⚠️ Not produser, who finds the money; the sutradara decides what the camera does." },
        { id: "id-u64l1-adegan", type: "vocab", front: "adegan", reading: "adegan", meaning: "a scene", example: { jp: "Adegan terakhir film itu membuat semua orang menangis.", en: "The last scene of that movie made everybody cry." }, accept: ["one part of a film", "a single scene in a play", "a passage of a film"], drill: { jp: "Adegan di pantai itu sangat bagus", en: "That scene on the beach is very good" }, hint: "ah-DEH-gan. One continuous stretch of a film or a play, from Javanese. It is what you reach for when you want to talk about a bit of a film rather than the whole thing: adegan pertama, the opening scene." },
        { id: "id-u64l1-saluran", type: "vocab", front: "saluran", reading: "saluran", meaning: "a channel", example: { jp: "Saluran itu hanya menyiarkan berita dan olahraga.", en: "That channel only broadcasts news and sport." }, accept: ["a television station", "a broadcast channel", "a station you tune to"], drill: { jp: "Ada tiga saluran baru di televisi ini", en: "There are three new channels on this television" }, hint: "sah-LOO-ran. Originally a pipe or a duct, which is still its other meaning — saluran air is a drain — and the broadcasting sense is the same picture, a channel that something flows down. The person who fronts the programme is a pembawa acara, built on acara, which you know." },
      ],
    },
    {
      id: "id-u64l2",
      unit: 64,
      lesson: 2,
      title: "Panggung dan pemain",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Describe a live performance — who put it on, what part each person played, who sang and who danced.",
      items: [
        { id: "id-u64l2-pertunjukan", type: "vocab", front: "pertunjukan", reading: "pertunjukan", meaning: "a performance", example: { jp: "Pertunjukan di panggung itu mulai jam delapan malam.", en: "The performance on that stage starts at eight in the evening." }, accept: ["a show put on for an audience", "a staged event", "a live show"], drill: { jp: "Pertunjukan malam ini sudah penuh", en: "Tonight's performance is already full" }, hint: "puhr-toon-JOO-kan. Built on tunjuk, to show — the same root as menunjuk, to point at, which you already know, though the two words have gone different ways. A pertunjukan is anything staged for people to watch: music, dance, wayang, a school concert." },
        { id: "id-u64l2-peran", type: "vocab", front: "peran", reading: "peran", meaning: "a role", example: { jp: "Peran ibu dalam film itu sangat penting.", en: "The mother's role in that movie is very important." }, accept: ["a part in a play", "the part somebody plays", "a part in a production"], drill: { jp: "Peran itu susah untuk anak kecil", en: "That role is difficult for a small child" }, hint: "puh-RAHN. The part an actor plays, and by extension the part anyone plays in anything — peran pemerintah, the role of government. Indonesian has no everyday word for an actor that is not a near-copy of the English, so it says pemain, which you know from sport, or it talks about the peran instead." },
        { id: "id-u64l2-berperan", type: "vocab", front: "berperan", reading: "berperan", meaning: "to play a part", example: { jp: "Dia berperan sebagai ibu dalam sinetron itu.", en: "She plays the part of the mother in that soap opera." }, accept: ["to act a role", "to take a part in something", "to have a hand in it"], drill: { jp: "Teman saya berperan di pertunjukan sekolah", en: "My friend plays a part in the school performance" }, hint: "buhr-puh-RAHN. The verb to peran's noun, and it takes sebagai — berperan sebagai raja, to play the king. Like the noun it has escaped the theatre: uang berperan besar di sini means money plays a big part here." },
        { id: "id-u64l2-penyanyi", type: "vocab", front: "penyanyi", reading: "penyanyi", meaning: "a singer", example: { jp: "Penyanyi itu sudah terkenal di semua provinsi.", en: "That singer is already famous in every province." }, accept: ["a vocalist", "somebody who sings for a living", "the one singing"], drill: { jp: "Penyanyi muda itu membawa lagu lama", en: "That young singer performs an old song" }, hint: "puh-NYAH-nyee, with ny twice as one sound each. From menyanyi, to sing, which you know — pe- plus a verb makes the person who does it, the commonest word-building shape in the language. You will meet it again all through this unit: penari, penggemar, pemirsa." },
        { id: "id-u64l2-penari", type: "vocab", front: "penari", reading: "penari", meaning: "a dancer", example: { jp: "Penari itu belajar di Bali selama dua tahun.", en: "That dancer studied in Bali for two years." }, accept: ["somebody who dances", "a performer who dances", "the one dancing"], drill: { jp: "Semua penari sudah siap di panggung", en: "All the dancers are already ready on the stage" }, hint: "puh-NAH-ree. The pe- agent noun off menari, to dance, which you know. Indonesia's dance traditions are regional and named — penari Bali, penari Jawa — and a penari is usually understood to be trained, not somebody having a good time at a party." },
        { id: "id-u64l2-konser", type: "vocab", front: "konser", reading: "konser", meaning: "a concert", example: { jp: "Konser musik itu ada di kota besar dekat pantai.", en: "That music concert is in the big city near the beach." }, accept: ["a live music event", "a gig", "a music performance"], drill: { jp: "Konser itu sudah penuh dua minggu lalu", en: "That concert was full two weeks ago" }, hint: "KON-ser, two syllables, final r a light tap. Note the spelling: Indonesian writes what it hears, so the English -ce-rt becomes -ser. A konser is the paid-ticket event; a pertunjukan is any staged show, including a free one." },
      ],
    },
    {
      id: "id-u64l3",
      unit: 64,
      lesson: 3,
      title: "Seniman dan karyanya",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Talk about the people who make art and what they make — their body of work, whether it is funny, and whether it entertains.",
      items: [
        { id: "id-u64l3-seniman", type: "vocab", front: "seniman", reading: "seniman", meaning: "an artist", example: { jp: "Seniman itu tinggal di desa kecil di gunung.", en: "That artist lives in a small village in the mountains." }, accept: ["somebody who makes art", "a creative worker", "an art maker"], drill: { jp: "Seniman muda itu membuat karya baru", en: "That young artist makes a new work" }, hint: "suh-nee-MAHN. From seni, art, which you know, plus -man, a rare Sanskrit-borrowed agent suffix that only a handful of words take — wartawan, which you also know, and budayawan. It covers every art form: a painter, a musician, a dalang. A woman artist is a seniwati, though seniman is used for both." },
        { id: "id-u64l3-karya", type: "vocab", front: "karya", reading: "karya", meaning: "a body of work", example: { jp: "Karya seniman itu ada di semua bioskop sekarang.", en: "That artist's work is in every cinema now." }, accept: ["a created work", "what somebody has made", "an artistic output"], drill: { jp: "Karya itu terkenal di luar negeri", en: "That work is famous abroad" }, hint: "KAR-ya, two syllables. Sanskrit, and it means a thing MADE rather than the making — a film, a book, a painting, a bridge. Karya tulis is a written work. ⚠️ Not pekerjaan, which you know as a job: karya is what is produced, pekerjaan is the labour." },
        { id: "id-u64l3-wayang", type: "vocab", front: "wayang", reading: "wayang", meaning: "shadow puppet theatre", example: { jp: "Pertunjukan wayang itu mulai malam dan sampai pagi.", en: "That shadow puppet performance starts at night and goes on until morning." }, accept: ["the Javanese puppet play", "a shadow play", "puppet theatre"], drill: { jp: "Wayang itu bagian penting dari seni Jawa", en: "Wayang is an important part of Javanese art" }, hint: "WAH-yang, ng as one hum. Literally a shadow. Flat leather puppets held against a lit screen while one man, the dalang, voices every character and the gamelan plays — all night, from dusk to dawn. It is the art form Indonesia is best known for, so the word is worth having even if you never see one." },
        { id: "id-u64l3-gamelan", type: "vocab", front: "gamelan", reading: "gamelan", meaning: "a gamelan orchestra", example: { jp: "Musik gamelan itu datang dari Jawa dan Bali.", en: "Gamelan music comes from Java and Bali." }, accept: ["a Javanese percussion orchestra", "the bronze orchestra of Java", "a set of tuned gongs"], drill: { jp: "Gamelan itu punya lebih dari dua puluh alat", en: "That gamelan has more than twenty instruments" }, hint: "GAH-muh-lan, the middle e swallowed. From gamel, to strike — an orchestra of tuned bronze gongs and metal keys, tuned to itself rather than to any outside scale, so two gamelan are never quite in tune with each other. The one word on this list an English speaker may already half know." },
        { id: "id-u64l3-komedi", type: "vocab", front: "komedi", reading: "komedi", meaning: "a funny show", example: { jp: "Komedi di televisi itu membuat anak-anak senang.", en: "That comedy on television makes the children happy." }, accept: ["comedy as a genre", "something made to be funny", "a comic show"], drill: { jp: "Komedi itu lebih bagus dari film lama", en: "That comedy is better than the old movie" }, hint: "koh-MEH-dee. The genre and a single comic work alike. ⚠️ Glossed as a funny show rather than comedy because the Indonesian and the English are the same string to read — the point of the card is the SPELLING, which drops the final y and writes the k. Lucu, which you know, is the adjective." },
        { id: "id-u64l3-lelucon", type: "vocab", front: "lelucon", reading: "lelucon", meaning: "a joke", example: { jp: "Lelucon itu tidak lucu untuk ibu saya.", en: "That joke was not funny to my mother." }, accept: ["something said to make people laugh", "a gag", "a funny remark"], drill: { jp: "Lelucon itu membuat semua tamu tertawa", en: "That joke made all the guests laugh" }, hint: "luh-loo-CHON, with c as CH. Built on lucu, funny, which you know, by doubling the first syllable — a rare and old pattern, not one to copy. A single joke, where komedi is the whole show. Bercanda, to be joking, is the verb Indonesians actually use most." },
      ],
    },
    {
      id: "id-u64l4",
      unit: 64,
      lesson: 4,
      title: "Pemirsa, penggemar, dan ulasan",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Say who is watching and what they thought — the viewers at home, the fans, the review, and whether the thing entertained anybody.",
      items: [
        { id: "id-u64l4-pemirsa", type: "vocab", front: "pemirsa", reading: "pemirsa", meaning: "the viewers", example: { jp: "Pemirsa di rumah bisa pilih saluran lain.", en: "Viewers at home can choose another channel." }, accept: ["the television audience", "people watching at home", "the viewing public"], drill: { jp: "Pemirsa sinetron itu sangat banyak", en: "That soap opera has very many viewers" }, hint: "puh-MEER-sa. Specifically the people watching a BROADCAST, at home, which is why every Indonesian news reader opens with pemirsa — it is their word for *ladies and gentlemen*. ⚠️ Keep it apart from penonton, which you know: penonton are present, in a room or a stadium; pemirsa are scattered in front of screens." },
        { id: "id-u64l4-penggemar", type: "vocab", front: "penggemar", reading: "penggemar", meaning: "a fan", example: { jp: "Penggemar penyanyi itu datang dari semua kota.", en: "That singer's fans came from every city." }, accept: ["an enthusiast", "a follower of somebody", "a keen supporter"], drill: { jp: "Penggemar film lama itu masih banyak", en: "There are still many fans of that old movie" }, hint: "puhng-guh-MAR. From gemar, to be keen on, which is not taught on its own. A pe- agent noun again, and it takes a bare possessor: penggemar sepak bola, a football fan. Note it is warmer than pendukung, a backer — a penggemar likes the thing, a pendukung is on its side." },
        { id: "id-u64l4-menyiarkan", type: "vocab", front: "menyiarkan", reading: "menyiarkan", meaning: "to put on air", example: { jp: "Saluran itu akan menyiarkan pertunjukan itu besok malam.", en: "That channel will broadcast the performance tomorrow evening." }, accept: ["to send out over the air", "to put out a programme", "to air something"], drill: { jp: "Televisi menyiarkan berita itu pagi ini", en: "Television broadcast that news this morning" }, hint: "muh-nyee-AR-kan. You already know siaran, a broadcast; this is the verb behind it, off the same root siar, to spread. ⚠️ Glossed to put on air, not to broadcast, because siaran's own card already accepts *to broadcast* and two cards may never share an answer. It also covers spreading word of something: menyiarkan kabar." },
        { id: "id-u64l4-menghibur", type: "vocab", front: "menghibur", reading: "menghibur", meaning: "to entertain", example: { jp: "Pertunjukan itu menghibur semua pemirsa di rumah.", en: "That performance entertained all the viewers at home." }, accept: ["to amuse people", "to keep people happy", "to divert somebody"], drill: { jp: "Lelucon itu menghibur anak-anak di kelas", en: "That joke entertains the children in the class" }, hint: "muhng-HEE-boor. You already know hiburan, entertainment; this is its verb. ⚠️ Its OTHER sense matters just as much and is not in the gloss: menghibur orang yang sedih is to comfort somebody who is sad. The word covers cheering somebody up and putting on a show, and Indonesians hear one meaning in the other." },
        { id: "id-u64l4-ulasan", type: "vocab", front: "ulasan", reading: "ulasan", meaning: "a review", example: { jp: "Ulasan film itu di koran sangat bagus.", en: "The review of that movie in the newspaper was very good." }, accept: ["a written appraisal", "a piece going over something", "a notice of a new work"], drill: { jp: "Ulasan itu membuat banyak orang menonton film", en: "That review made many people watch the movie" }, hint: "oo-LAH-san. From ulas, to go over something, not taught alone. A piece of writing that goes over a film, a book or a match and says how it was. Mengulas is the verb. Note it is descriptive and neutral in a way the English *review* is not — it need not pass judgement at all." },
        { id: "id-u64l4-dangdut", type: "vocab", front: "dangdut", reading: "dangdut", meaning: "Indonesian pop music", example: { jp: "Musik dangdut itu bisa membuat semua tamu menari.", en: "That dangdut music can get all the guests dancing." }, accept: ["the dangdut style", "Indonesia's own pop style", "a popular Indonesian music genre"], drill: { jp: "Penyanyi dangdut itu terkenal di seluruh negara", en: "That dangdut singer is famous throughout the country" }, hint: "DANG-doot, both syllables short. The name is the drum: dang-DUT is the two-beat tabla pattern the whole style hangs on. Indian film music crossed with Malay and Arabic, and it is the music of ordinary Indonesia — weddings, street stalls, political rallies, every province. Sinetron, dangdut and wayang between them are three quarters of Indonesian popular culture." },
      ],
    },
  ],
};
