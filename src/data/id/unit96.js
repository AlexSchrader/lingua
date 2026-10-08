// ID Unit 96 — Seni rupa dan tilikan kritis ("Visual art and critique") — B2
// B2 block 1 (u88–u100). CONVENTIONS: see unit88.js §C1–§C12 — binding here.
//
// §C-I1. NARROWED TO THE VISUAL ARTS, BECAUSE THE OTHER ARTS ARE ALREADY TAKEN.
//        "Arts and criticism" collides with **u81 `Karya tulis dan sastra`**
//        (`novel` `puisi` `sastra` `karya` `pengarang` `tokoh` `bab` `naskah`
//        `dongeng` `mengkritik` `kutipan` `sajak` `alur` `latar`) and **u64
//        `Film, panggung, dan penggemar`** (`seniman` `wayang` `gamelan`
//        `lelucon` `ulasan` `menghibur`). Probed 28 candidates for the visual
//        arts specifically: **19 free of 28**, and the nine taken are all
//        general words (`seni` u35, `karya` u64, `warna` `gelap` `terang` u8,
//        `kuas` u82, `lukisan` u35, `membuat` u25, `seniman` u64).
//        **So this unit owns THE EYE: painting, sculpture, the gallery, the
//        aesthetic judgement, and the critic who makes it.** It takes no
//        literature word and no stage word.
//
// §C-I2. ⚠️ `lukisan` IS TAUGHT (u35) AND `melukis`/`pelukis` STILL SHIP. This
//        is the exact case CLAUDE.md insists on: a base word and words derived
//        from it are separate lexemes, and withholding one because the course
//        owns another is how German shipped *survey*, *enquiry* and *demand* and
//        never taught **question** — 17 core words, measured. u35 teaches the
//        OBJECT (a painting, as a thing on a wall, inside a culture unit);
//        this unit teaches the ACT (`melukis`) and the PERSON (`pelukis`), which
//        no learner derives from the object. Both hints name `lukisan`.
//        `me-` plain verb formation is not one of u70's taught patterns, so
//        §C-B4's line does not bite here.
//
// §C-I3. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (C3/C4). ZERO circumfix hits
//        against the frozen base — measured, not assumed:
//        `melukis`/`pelukis`←lukis (the BARE root is not a taught front; only
//        `lukisan` is, see §C-I2) · `pematung`←patung (taught in THIS lesson,
//        agent noun, house style) · `keindahan`←indah — ⚠️ **`indah` is NOT a
//        taught front in this course; I checked rather than assumed, because it
//        looks like an A1 word** · `kritikus`/`kritik`←**mengkritik (u81)** — the
//        NOUN and the PERSON off a taught verb, both named in their hints ·
//        `tilikan`/`menilik`←tilik (not taught) · `menafsirkan`←tafsir (not
//        taught) · `memamerkan`←pamer (not taught; `pameran` is in l1 and the
//        pair is house style) · `apresiasi` `estetika` `komposisi` `perspektif`
//        `rupa` `aliran` `galeri` `sketsa` `kanvas` `mahakarya` `arsitektur`
//        `pigura` — roots not taught.
//
// §C-I4. REFUSED / CEDED. `pahat` and `memahat` — the allocation gives carving
//        to **u120 `Kerajinan dan tenun`**; this unit takes `patung` and
//        `pematung` and leaves the chisel to u120. `ulasan` is u64's and
//        `mengkritik` is u81's, so the critique vocabulary here is `kritik`
//        (the noun), `kritikus` (the person) and `tilikan` (the act of looking
//        closely) — never a second review word. `motif` and `corak` are u120's
//        per the allocation. `seni` is TAKEN (u35), so the field is named in
//        the unit TITLE as `seni rupa` but never carded.
export const ID_UNIT96 = {
  id: "id-u96",
  lang: "id",
  title: "Seni rupa dan tilikan kritis",
  order: 96,
  stage: "b2",
  lessons: [
    {
      id: "id-u96l1",
      unit: 96,
      lesson: 1,
      title: "Lukisan dan patung",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name who makes visual art and where it is shown — say somebody paints, name a painter, name a sculpture, name a sculptor, name a gallery, and name an exhibition.",
      items: [
        { id: "id-u96l1-melukis", type: "vocab", front: "melukis", reading: "melukis", meaning: "to paint a picture", example: { jp: "Dia melukis pemandangan laut setiap pagi di dekat pantai.", en: "She paints sea views every morning near the beach." }, accept: ["to paint a work", "to make a painting", "to depict in paint"], drill: { jp: "Dia melukis pemandangan laut setiap pagi", en: "She paints sea views every morning" }, hint: "muh-LOO-kees. ⚠️ You already know lukisan, a painting, from u35 — that is the OBJECT, and this is the act, which no learner derives from it. Note what it does NOT mean: painting a wall is mengecat, from cat, paint-the-substance. So you melukis a portrait and mengecat a fence, and mixing them is a real error." },
        { id: "id-u96l1-pelukis", type: "vocab", front: "pelukis", reading: "pelukis", meaning: "a person who paints pictures", example: { jp: "Pelukis muda itu belum pernah mengadakan pameran sendiri.", en: "That young painter has never held an exhibition of her own." }, accept: ["a painter", "an artist who works in paint", "a picture-maker"], drill: { jp: "Pelukis muda itu belum pernah mengadakan pameran", en: "That young painter has never held an exhibition" }, hint: "puh-LOO-kees. The agent noun beside the card before it. ⚠️ Narrower than seniman, an artist, which you know from u64: a seniman may work in any medium, a pelukis specifically paints. Indonesian builds this whole family the same way, so once you have it you can read pematung, penulis and penyair without being told." },
        { id: "id-u96l1-patung", type: "vocab", front: "patung", reading: "patung", meaning: "a figure made in three dimensions", example: { jp: "Patung batu di depan galeri itu dibuat seratus tahun yang lalu.", en: "The stone figure in front of that gallery was made a hundred years ago." }, accept: ["a sculpture", "a statue", "a carved or cast figure"], drill: { jp: "Patung batu di depan galeri itu sangat besar", en: "The stone statue in front of that gallery is very big" }, hint: "PAH-toong. ⚠️ One word where English has two: a patung is a statue, a sculpture, and also a shop mannequin or a doll. There is no separate word for statue, so the material or the setting does the distinguishing — patung batu, patung perunggu, patung kayu. Note that the chisel and the carving of it belong to u120, not here." },
        { id: "id-u96l1-pematung", type: "vocab", front: "pematung", reading: "pematung", meaning: "a person who makes sculpture", example: { jp: "Pematung itu bekerja dengan batu dan kayu selama empat puluh tahun.", en: "That sculptor worked with stone and wood for forty years." }, accept: ["a sculptor", "an artist who works in three dimensions", "a figure-maker"], drill: { jp: "Pematung itu bekerja dengan batu dan kayu", en: "That sculptor works with stone and wood" }, hint: "puh-mah-TOONG. The agent noun off the card before it, built exactly as pelukis is. ⚠️ Worth noticing that Indonesian derives the person from the OBJECT here (patung → pematung) and from the ACT with painting (lukis → pelukis). The pattern is pe- plus whatever the root happens to be, and it is one of the most productive things in the language." },
        { id: "id-u96l1-galeri", type: "vocab", front: "galeri", reading: "galeri", meaning: "a room where art is shown and sold", example: { jp: "Galeri kecil itu hanya dibuka pada akhir minggu.", en: "That small gallery only opens at the weekend." }, accept: ["an art gallery", "a showroom for artworks", "an exhibition space"], drill: { jp: "Galeri kecil itu hanya dibuka akhir minggu", en: "That small gallery only opens at the weekend" }, hint: "gah-LEH-ree, hard g. ⚠️ Keep it apart from museum, which you know: a museum keeps and interprets a collection, a galeri shows work that is usually for sale and usually by the living. Indonesian uses both loanwords with exactly that split, and galeri seni is the full form you will see on a sign." },
        { id: "id-u96l1-pameran", type: "vocab", front: "pameran", reading: "pameran", meaning: "a temporary public showing of work", example: { jp: "Pameran itu berjalan dua minggu dan dilihat banyak orang.", en: "That exhibition ran for two weeks and was seen by many people." }, accept: ["an exhibition", "a show put on for the public", "a display event"], drill: { jp: "Pameran itu berjalan dua minggu saja", en: "That exhibition ran for two weeks only" }, hint: "pah-MEH-ran. From pamer, to show off. ⚠️ Far wider than art: pameran buku is a book fair, pameran dagang a trade fair, and pameran otomotif a motor show — so the word covers any temporary public display. The verb is memamerkan, which you meet in lesson 4 of this unit, and it keeps a faint flavour of showing off." },
      ],
    },
    {
      id: "id-u96l2",
      unit: 96,
      lesson: 2,
      title: "Estetika dan komposisi",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about how a work is made and judged — name the study of beauty, name beauty itself as a quality, name how the parts are arranged, name depth on a flat surface, name visual form, and name a school of artists.",
      items: [
        { id: "id-u96l2-estetika", type: "vocab", front: "estetika", reading: "estetika", meaning: "the study of what makes something beautiful", example: { jp: "Dosen itu menguraikan estetika di balik lukisan yang mudah itu.", en: "That lecturer unpacked the aesthetics behind that simple painting." }, accept: ["aesthetics", "the theory of beauty", "principles of visual judgement"], drill: { jp: "Dosen itu menguraikan estetika lukisan mudah itu", en: "That lecturer unpacks that simple painting's aesthetics" }, hint: "ehs-TEH-tee-kah. ⚠️ A field of study, not a compliment: do not use it where English says *the aesthetic* of a thing loosely. The adjective is estetis, pleasing to look at, and that IS the everyday word — nilai estetis, aesthetic value. Note the Indonesian spelling, which keeps the e and drops nothing." },
        { id: "id-u96l2-keindahan", type: "vocab", front: "keindahan", reading: "keindahan", meaning: "beauty as a quality a thing has", example: { jp: "Keindahan pemandangan di lembah itu susah diuraikan dengan kata.", en: "The beauty of the view in that valley is hard to put into words." }, accept: ["beauty", "loveliness as a property", "the quality of being beautiful"], drill: { jp: "Keindahan pemandangan di lembah itu susah diuraikan", en: "The beauty of the view in that valley is hard to describe" }, hint: "kuh-een-DAH-han. From indah, beautiful — a word worth meeting here because this course has not carded it. ⚠️ Indonesian splits beauty by object in a way English does not: indah is used of SCENERY, art and sound, while cantik, which you know, is used of people and ganteng of men. Keindahan alam, natural beauty, is the commonest collocation of all." },
        { id: "id-u96l2-komposisi", type: "vocab", front: "komposisi", reading: "komposisi", meaning: "how the parts of a work are arranged", example: { jp: "Komposisi dalam lukisan itu membuat mata pembaca berhenti di tengah.", en: "The arrangement in that painting makes the viewer's eye stop in the middle." }, accept: ["composition", "the arrangement of elements", "how a work is laid out"], drill: { jp: "Komposisi dalam lukisan itu sangat mudah", en: "The composition in that painting is very simple" }, hint: "kohm-poh-SEE-see. ⚠️ Two senses and the second will surprise you: besides arrangement in art and music, komposisi is the word on every Indonesian food packet for the INGREDIENTS list. So komposisi bahan is what a thing is made of. In this lesson it is strictly the arrangement, and you met susunan and struktur in u58 and u83 for other kinds of arrangement." },
        { id: "id-u96l2-perspektif", type: "vocab", front: "perspektif", reading: "perspektif", meaning: "the illusion of depth on a flat surface", example: { jp: "Perspektif dalam sketsa itu belum tepat, jadi jalannya terlihat janggal.", en: "The perspective in that sketch is not right yet, so the road looks odd." }, accept: ["perspective in drawing", "depth rendered on a flat plane", "the drawn recession of space"], drill: { jp: "Perspektif dalam sketsa itu belum tepat", en: "The perspective in that sketch is not right yet" }, hint: "puhr-spehk-TEEF. ⚠️ It also carries the figurative sense English gives it — dari perspektif petani, from the farmers' perspective — but you already have u51's sudut pandang for exactly that, and sudut pandang is the more natural Indonesian choice. Keep perspektif for drawing, where no other word will do." },
        { id: "id-u96l2-rupa", type: "vocab", front: "rupa", reading: "rupa", meaning: "the visible form a thing has", example: { jp: "Rupa benda dalam lukisan itu susah dikenali dari dekat.", en: "The visible form of the objects in that painting is hard to make out from close up." }, accept: ["outward form", "visual appearance", "shape as seen"], drill: { jp: "Rupa benda dalam lukisan itu susah dikenali", en: "The form of the objects in that painting is hard to recognise" }, hint: "ROO-pah, from Sanskrit. ⚠️ This is the word that names the whole field: seni rupa, visual art, is literally form-art, which is why this unit is titled that way — and `seni` itself is u35's, so `rupa` is where the field lives for you. Two idioms worth whole: rupanya, apparently, and bermacam-macam rupa, of all kinds." },
        { id: "id-u96l2-aliran", type: "vocab", front: "aliran", reading: "aliran", meaning: "a school of artists sharing an approach", example: { jp: "Aliran itu dimulai di Eropa dan baru datang ke pulau ini puluhan tahun kemudian.", en: "That school began in Europe and only reached this island decades later." }, accept: ["an artistic school", "a movement in style", "a current of practice"], drill: { jp: "Aliran itu dimulai di Eropa puluhan tahun lalu", en: "That school began in Europe decades ago" }, hint: "ah-LEE-ran. From alir, to flow — so a current, and the metaphor runs through every sense. ⚠️ Enormously wide: aliran listrik is an electric current, aliran sungai a river's flow, aliran politik a political tendency, and aliran agama a religious denomination. In this lesson it is a school of art, and the context always has to tell you which." },
      ],
    },
    {
      id: "id-u96l3",
      unit: 96,
      lesson: 3,
      title: "Kritikus dan tilikan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe criticism as a practice — name the critic, name criticism itself, name a close examining look, say somebody is examining something closely, say they are reading a meaning into it, and name informed appreciation.",
      items: [
        { id: "id-u96l3-kritikus", type: "vocab", front: "kritikus", reading: "kritikus", meaning: "somebody whose work is judging art", example: { jp: "Kritikus itu menulis tentang pameran itu di dua koran besar.", en: "That critic wrote about the exhibition in two large newspapers." }, accept: ["a critic", "a professional reviewer of art", "a commentator on works"], drill: { jp: "Kritikus itu menulis tentang pameran di koran", en: "That critic writes about the exhibition in the paper" }, hint: "kree-TEE-koos. ⚠️ Built on the same root as mengkritik, to criticise, which you met in u81 — but this names a PROFESSION, which the verb does not, and that is why it earns a card. Keep it apart from pengamat, an observer, and from penggemar, a fan, which you know from u64: a kritikus is paid to have a considered judgement." },
        { id: "id-u96l3-kritik", type: "vocab", front: "kritik", reading: "kritik", meaning: "a reasoned judgement of a work", example: { jp: "Kritik terhadap lukisan itu lebih panjang daripada paparan pelukisnya.", en: "The critique of that painting is longer than the painter's own account of it." }, accept: ["criticism as a reasoned judgement", "a critique", "a considered appraisal"], drill: { jp: "Kritik terhadap lukisan itu sangat panjang", en: "The critique of that painting is very long" }, hint: "KREE-teek. The noun off u81's mengkritik. ⚠️ It runs two ways in Indonesian exactly as in English, and the register tells you which: kritik sastra is literary criticism, a respected discipline, while menerima kritik means taking criticism, which stings. Keep it apart from u64's ulasan, a review, which simply describes and rates; a kritik argues." },
        { id: "id-u96l3-tilikan", type: "vocab", front: "tilikan", reading: "tilikan", meaning: "a close examining look that sees into something", example: { jp: "Tilikan pengarang itu terhadap keluarga kecil sangat halus.", en: "That author's close look at a small family is very fine-grained." }, accept: ["insight gained by looking closely", "a penetrating examination", "a discerning view"], drill: { jp: "Tilikan pengarang itu terhadap keluarga kecil halus", en: "That author's insight into a small family is subtle" }, hint: "tee-LEE-kan. From tilik, to inspect with attention. ⚠️ A quiet, slightly literary word, and the reason it is here rather than a loanword: it is what Indonesian reaches for when English says *insight*. Keep it apart from u90's analogi and u51's sudut pandang — a tilikan is what you SAW by looking hard, not a position you argue from." },
        { id: "id-u96l3-menilik", type: "vocab", front: "menilik", reading: "menilik", meaning: "to look into something closely", example: { jp: "Kritikus itu menilik setiap sketsa sebelum menulis ulasannya.", en: "That critic looked closely into every sketch before writing his review." }, accept: ["to inspect attentively", "to examine with care", "to scrutinise"], drill: { jp: "Kritikus itu menilik setiap sketsa dengan sabar", en: "That critic examines every sketch patiently" }, hint: "muh-NEE-leek. The verb beside the card before it. ⚠️ Note a second, very common use as a DISCOURSE opener: menilik dari segi hukum, looking at it from the legal angle, is how an Indonesian essay changes vantage point. There it works almost like a preposition, and u108 will give you more of that machinery." },
        { id: "id-u96l3-menafsirkan", type: "vocab", front: "menafsirkan", reading: "menafsirkan", meaning: "to say what something means", example: { jp: "Setiap kritikus menafsirkan lukisan itu dengan cara yang berbeda.", en: "Every critic interprets that painting in a different way." }, accept: ["to interpret", "to read a meaning into", "to construe"], drill: { jp: "Setiap kritikus menafsirkan lukisan itu berbeda", en: "Every critic interprets that painting differently" }, hint: "muh-nahf-seer-KAHN. From tafsir, exegesis, an Arabic word whose first home is scriptural commentary. ⚠️ That origin colours it: menafsirkan claims to bring out a meaning that is really there, which is why it is also the verb for interpreting a law or a dream. It is not menerjemahkan, to translate, and not mengartikan, to give a word's plain sense." },
        { id: "id-u96l3-apresiasi", type: "vocab", front: "apresiasi", reading: "apresiasi", meaning: "informed enjoyment of a work", example: { jp: "Apresiasi terhadap seni rupa di sekolah itu diajarkan sejak kelas kecil.", en: "Appreciation of visual art at that school is taught from the junior classes." }, accept: ["appreciation of art", "cultivated enjoyment", "an informed regard for a work"], drill: { jp: "Apresiasi terhadap seni rupa diajarkan sejak kecil", en: "Appreciation of visual art is taught from childhood" }, hint: "ah-preh-see-AH-see, five syllables. ⚠️ Two senses and the Indonesian ones are both common: cultivated appreciation, which is this lesson's, and simple thanks or recognition — memberi apresiasi means to express appreciation for somebody's work, and you will hear it constantly in offices. It is the counterweight to kritik two cards back: both require having looked properly." },
      ],
    },
    {
      id: "id-u96l4",
      unit: 96,
      lesson: 4,
      title: "Sketsa dan mahakarya",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the physical things art is made and shown with — a quick drawing, the stretched cloth it is painted on, a supreme work, say somebody is putting work on show, name the design of buildings, and name a picture frame.",
      items: [
        { id: "id-u96l4-sketsa", type: "vocab", front: "sketsa", reading: "sketsa", meaning: "a quick drawing made before the real work", example: { jp: "Sketsa pertama itu dibuat dengan pensil dalam waktu lima menit.", en: "That first sketch was made in pencil in five minutes." }, accept: ["a sketch", "a preliminary drawing", "a rough study"], drill: { jp: "Sketsa pertama itu dibuat dalam lima menit", en: "That first sketch was made in five minutes" }, hint: "SKEHT-sah. ⚠️ Note the Indonesian spelling with -ts-, which is the pattern this language uses for the English -tch: sketsa, and likewise in a handful of other borrowings. It also means a short dramatic sketch on stage, which is u64's territory rather than this unit's; in art it is always the drawing." },
        { id: "id-u96l4-kanvas", type: "vocab", front: "kanvas", reading: "kanvas", meaning: "the stretched cloth a picture is painted on", example: { jp: "Kanvas besar itu terlalu berat untuk dibawa sendiri.", en: "That large canvas is too heavy to carry alone." }, accept: ["a painter's canvas", "stretched painting cloth", "the surface a painting is made on"], drill: { jp: "Kanvas besar itu terlalu berat untuk dibawa", en: "That large canvas is too heavy to carry" }, hint: "KAHN-fahs — the v is said like an f, as it is in every Indonesian borrowing. ⚠️ Keep it apart from kain, cloth, which is u82's: all kanvas is kain, but kanvas is specifically the heavy prepared cloth on a frame. In boxing Indonesian also borrows it for the floor of the ring, so jatuh ke kanvas means to be knocked down." },
        { id: "id-u96l4-mahakarya", type: "vocab", front: "mahakarya", reading: "mahakarya", meaning: "the greatest work of an artist's life", example: { jp: "Lukisan itu disebut mahakarya karena tidak ada yang menyerupainya.", en: "That painting is called a masterpiece because nothing resembles it." }, accept: ["a masterpiece", "a supreme achievement", "the crowning work of a career"], drill: { jp: "Lukisan itu disebut mahakarya oleh banyak kritikus", en: "That painting is called a masterpiece by many critics" }, hint: "mah-hah-KAHR-yah, four syllables. Built from maha-, great, plus karya, a work, which you know from u64 — and maha- is a Sanskrit prefix you will meet everywhere once you notice it: mahasiswa is a great-student, that is, a university student, and Mahakuasa means Almighty. ⚠️ Reserve it for the real thing; Indonesian does not use it loosely." },
        { id: "id-u96l4-memamerkan", type: "vocab", front: "memamerkan", reading: "memamerkan", meaning: "to put work out on public show", example: { jp: "Galeri itu memamerkan dua puluh karya pelukis muda bulan ini.", en: "That gallery is showing twenty works by young painters this month." }, accept: ["to exhibit", "to display publicly", "to put on show"], drill: { jp: "Galeri itu memamerkan dua puluh karya baru", en: "That gallery exhibits twenty new works" }, hint: "muh-mah-muhr-KAHN. The verb beside pameran in lesson 1. ⚠️ It keeps a flavour of showing off from its root pamer, so watch the object: memamerkan karya is to exhibit work, neutral and professional, while memamerkan kekayaan is to flaunt one's wealth and is a criticism. The bare verb pamer on its own means to show off, full stop." },
        { id: "id-u96l4-arsitektur", type: "vocab", front: "arsitektur", reading: "arsitektur", meaning: "the art and practice of designing buildings", example: { jp: "Arsitektur gedung kolonial itu masih dipelajari oleh mahasiswa.", en: "The architecture of that colonial building is still studied by students." }, accept: ["architecture", "building design as a discipline", "the designed character of a building"], drill: { jp: "Arsitektur gedung kolonial itu masih dipelajari", en: "That colonial building's architecture is still studied" }, hint: "ahr-see-TEHK-toor, four syllables. ⚠️ The person is arsitek, without the -tur, and u83 already gave you that word — so this is the FIELD rather than the professional, and the pair works like estetika beside estetis in lesson 2. Note that Indonesian also uses it figuratively for the design of a system, as English does." },
        { id: "id-u96l4-pigura", type: "vocab", front: "pigura", reading: "pigura", meaning: "the frame a picture is set in", example: { jp: "Pigura kayu itu lebih tua daripada lukisan di dalamnya.", en: "That wooden frame is older than the painting inside it." }, accept: ["a picture frame", "the surround of a painting", "a framing border"], drill: { jp: "Pigura kayu itu lebih tua daripada lukisannya", en: "That wooden frame is older than its painting" }, hint: "pee-GOO-rah, hard g. From the Portuguese figura, which is a reminder of how old some of Indonesian's European borrowings are. ⚠️ Keep it apart from kerangka, a framework, which you know from u58: a kerangka is the skeleton INSIDE a structure, a pigura surrounds and presents a picture. The everyday spoken alternative is frame, said in English." },
      ],
    },
  ],
};
