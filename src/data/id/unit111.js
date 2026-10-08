// ID Unit 111 — Kelahiran dan pengasuhan ("Birth and bringing up a child") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 2 (u101–u113). Band notes BB1–BB8 are in unit101.js's header; unit1's
// A1 conventions, unit21's A2 set and unit51's B1 set (B1–B12) all still bind.
//
// §P1. BOUNDARY, AS BRIEFED AND AS MEASURED. **u102 (mine) owns hospitals,
//      insurance and institutional care; u111 owns the pregnancy → infancy →
//      parenting arc.** So the midwife is here and the obstetric ward is not;
//      the immunisation schedule a mother queues for is here and the
//      vaccination programme a ministry runs is u102's. u67 owns illness and
//      fitness, u3 and u15 own the family nouns.
//      ⚠️ Taken and therefore NOT re-carded: **`bayi` u15** (so this unit says
//      `balita` for the toddler and uses `bayi` in examples only) ·
//      **`menimbang` u40** (the weighing verb — see §P3's false-positive note) ·
//      `anak` u3 · `ibu` `ayah` `kakak` `adik` u3 · `keluarga` u3 ·
//      `disiplin` u61.
//      Of 22 candidates handed down, **22 probed free** — the only slot in my
//      range where the allocation held completely.
//
// §P2. ⚠️ **REGISTER AND SUBJECT NOTE, STATED ONCE.** This unit contains
//      `keguguran`, a miscarriage. It is carded because a learner who can talk
//      about pregnancy and cannot talk about losing one is not equipped for the
//      conversation they will actually have, and because the word appears in
//      every Indonesian antenatal leaflet. The example and the drill are plain
//      and clinical, with no sentiment loaded onto them, and the hint teaches
//      the word's grammar rather than dwelling on it. Flagged here so the merge
//      seat sees the decision rather than discovering the card.
//
// §P3. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (unit1 §3 / unit51 B5):
//      mengandung → kandung — `kandung` is not taught as a front. `kandungan`
//        is carded in THIS unit, same lesson (l1), and that pairing is
//        deliberate (band note BB7): the act of carrying and the thing carried.
//        Drill-safe: the shared string is `kandung`, a whole word in neither
//        (`mengandung` has `m` before it and nothing after, `kandungan` has `a`
//        after it) — verified in both directions.
//      melahirkan → lahir ⚠️ `lahir` IS taught (u20, "to be born"). Carded:
//        being born happens to you, melahirkan is what the mother does.
//        Drill-safe: "melahirkan" holds "lahir" at index 2, preceded by `e` and
//        followed by `k`.
//      keguguran → gugur — `gugur` is NOT taught. Clean.
//      menyusui → susu ⚠️ `susu` IS taught (u6, "milk"). Carded: the noun and
//        the act. Drill-safe: "menyusui" holds "susu" at index 3, preceded by
//        `y` and followed by `i`.
//      menyapih → sapih — not taught, not a free word. Clean.
//      menyuapi → suap — `suap` is NOT taught. Clean. ⚠️ Note that `suap` also
//        means a bribe in Indonesian; the hint says so, since a learner meeting
//        `menyuapi` in the news needs to know which sense is live.
//      menggendong → gendong — not taught on its own. Clean.
//      mengasuh / pengasuhan → asuh — `asuh` is not taught. Two cards off it
//        here, in DIFFERENT lessons (l3 has both, so they are checked):
//        "pengasuhan" holds "asuh" at index 2 followed by `a`, "mengasuh" holds
//        it at index 4 preceded by `g` — no whole-word match either way.
//        `asuhan` was deliberately NOT carded: three off one root is one too
//        many (§P5).
//      membesarkan → besar ⚠️ `besar` IS taught (u10, "big"). Carded: making a
//        child big is bringing them up. Drill-safe: index 3, preceded by `m`,
//        followed by `k`. **And the gloss is NOT "to bring up"** —
//        `gloss-taken.mjs id` showed that COLLIDES with `menyebut`@u22, so the
//        card reads "to raise a child to adulthood". A duplicate `meaning`
//        makes one card unanswerable and that defect is at ZERO corpus-wide.
//      mendidik → didik — not taught on its own; `pendidikan` is not a front
//        either. Clean. ⚠️ Keep apart from `mengajar`(u1), to teach.
//      imunisasi → no Indonesian root; a Dutch loan. Clean, and NOT an exact
//        cognate (English has "immunisation" with an n and an s in different
//        places), so it passes the free-pass check.
//      memanjakan → manja — `manja` is carded in THIS unit, same lesson (l4).
//        Drill-safe: "memanjakan" holds "manja" at index 3, preceded by `m` and
//        followed by `k`. The adjective and the act, deliberately paired.
//      merengek → rengek — not a free word. Clean.
//      menimang → timang — not taught. ⚠️ **`menimbang`(u40) is NOT its root** —
//        this is one of unit51 B9's four measured false positives, the mirror of
//        the `pertimbangan` note in my u107 §P3. timang is to dandle, timbang is
//        to weigh, and no stripper that compares prefixes can tell them apart.
//        Do not write around it.
//      buaian → buai — not taught. Clean.
//
// §P4. ⚠️ **`balita` IS AN ACRONYM AND THE HINT SAYS SO.** It is bawah lima
//      tahun, under five years, compressed into one word — the same process
//      that gave `puskesmas` in u102. Indonesian makes these constantly and a
//      learner who recognises the pattern can decode the next one unaided, so
//      the two cards are cross-referenced by name in both hints.
//
// §P5. DEFERRED FROM THIS UNIT, named not buried, all probed FREE: `kelahiran`
//      `asuhan` `pengasuh` `ayunan` `gendongan` `menidurkan` `kembar` `sulung`
//      `bungsu` `yatim` `mengadopsi` `cengeng` `ngidam`. `kelahiran` is the
//      closest call — it is the obvious noun off `melahirkan` — and it was left
//      because two cards off `lahir` plus the taught adjective is enough, and
//      because `bidan`'s example needs it as a word the learner can read from
//      context rather than one more card to hold.
export const ID_UNIT111 = {
  id: "id-u111",
  lang: "id",
  title: "Kelahiran dan pengasuhan",
  order: 111,
  stage: "b2",
  lessons: [
    {
      id: "id-u111l1",
      unit: 111,
      lesson: 1,
      title: "Hamil dan melahirkan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about a pregnancy from outside and inside — being pregnant, carrying a child, the womb and its check-ups, giving birth, losing a pregnancy, and the midwife who attends it.",
      items: [
        { id: "id-u111l1-hamil", type: "vocab", front: "hamil", reading: "hamil", meaning: "pregnant", example: { jp: "Kakak saya hamil dan akan melahirkan pada bulan depan.", en: "My older sister is pregnant and will give birth next month." }, accept: ["expecting a baby", "with child", "carrying"], drill: { jp: "Kakak saya hamil dan sangat senang", en: "My older sister is pregnant and very happy" }, hint: "HAH-meel. An Arabic loan and the plain everyday word — a woman says saya hamil with no formality at all. ⚠️ It is an ADJECTIVE, so it takes no verb: hamil tiga bulan, three months pregnant, needs nothing between the word and the number. Hamil muda means early in a pregnancy, which is worth knowing because muda, young, is doing unexpected work there." },
        { id: "id-u111l1-mengandung", type: "vocab", front: "mengandung", reading: "mengandung", meaning: "to be carrying a child", example: { jp: "Dia mengandung anak yang pertama pada tahun itu.", en: "She was carrying her first child that year." }, accept: ["to be pregnant with", "to bear in the womb", "to be gestating"], drill: { jp: "Dia mengandung anak yang pertama pada tahun itu", en: "She was carrying her first child that year" }, hint: "muh-ngahn-DOONG — ng one hum, twice. ⚠️ Softer and more formal than hamil, which is why a doctor or a newspaper prefers it. **And it has a second life you will meet far more often: to CONTAIN** — makanan itu mengandung gula, that food contains sugar, obat ini mengandung dua bahan. Same word, and the context always decides." },
        { id: "id-u111l1-kandungan", type: "vocab", front: "kandungan", reading: "kandungan", meaning: "the womb and what is in it", example: { jp: "Dokter memeriksa kandungan dia setiap bulan di klinik kecil itu.", en: "The doctor checked her pregnancy every month at that small clinic." }, accept: ["a pregnancy as a medical matter", "the uterus", "the contents of something"], drill: { jp: "Dokter memeriksa kandungan dia setiap bulan", en: "The doctor checks her pregnancy every month" }, hint: "kahn-DOONG-an. ⚠️ The noun off the card before it, and it inherits BOTH senses: a pregnancy as a medical matter — dokter kandungan is an obstetrician, which is the phrase you will need at a hospital desk — and the contents of anything, as in kandungan gula, sugar content. The pair sits in one lesson on purpose: the verb and the thing." },
        { id: "id-u111l1-melahirkan", type: "vocab", front: "melahirkan", reading: "melahirkan", meaning: "to give birth to", example: { jp: "Ibu saya melahirkan tiga anak di rumah tanpa dokter.", en: "My mother gave birth to three children at home without a doctor." }, accept: ["to bear a child", "to be delivered of", "to bring into the world"], drill: { jp: "Ibu saya melahirkan tiga anak di rumah", en: "My mother gave birth to three children at home" }, hint: "muh-lah-heer-KAHN. ⚠️ You know lahir from u20, to be born — and the pair is the clearest example in the course of how -kan works: lahir happens to the baby, melahirkan is what the mother does, and the -kan is what turns one into the other. It also goes figurative: melahirkan ide, to produce an idea." },
        { id: "id-u111l1-keguguran", type: "vocab", front: "keguguran", reading: "keguguran", meaning: "a miscarriage", example: { jp: "Setelah keguguran dia perlu waktu lama untuk sehat lagi.", en: "After the miscarriage she needed a long time to be well again." }, accept: ["the loss of a pregnancy", "a spontaneous end to a pregnancy", "losing a baby before birth"], drill: { jp: "Setelah keguguran dia perlu waktu lama", en: "After the miscarriage she needed a long time" }, hint: "kuh-goo-GOO-ran. The root gugur is to fall, of a leaf or a flower, which is the picture Indonesian chose. ⚠️ Grammatically it behaves like something that HAPPENS TO you, not something you do — dia keguguran, she had a miscarriage, with no verb and no possessive. That ke-…-an-as-misfortune pattern also gives kehilangan and kecelakaan, which you know." },
        { id: "id-u111l1-bidan", type: "vocab", front: "bidan", reading: "bidan", meaning: "a midwife", example: { jp: "Bidan di desa itu sudah membantu lebih dari dua ribu ibu.", en: "The midwife in that village has helped more than two thousand mothers." }, accept: ["a trained birth attendant", "the woman who delivers babies", "a maternity nurse"], drill: { jp: "Bidan di desa itu sudah membantu dua ribu ibu", en: "The midwife in that village has helped two thousand mothers" }, hint: "BEE-dahn. ⚠️ **In Indonesia this is not a quaint word — the bidan is the primary health worker for birth across most of the country**, trained, licensed and often the only one for a day's travel. Keep her apart from dukun bayi, a traditional birth attendant, and from dokter kandungan, an obstetrician. A learner who only has dokter cannot describe how most Indonesians are born." },
      ],
    },
    {
      id: "id-u111l2",
      unit: 111,
      lesson: 2,
      title: "Balita, popok, dan susu",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Handle the first years — a child under five, a nappy, breastfeeding, weaning, spoon-feeding, and carrying a child on your hip.",
      items: [
        { id: "id-u111l2-balita", type: "vocab", front: "balita", reading: "balita", meaning: "a child under five", example: { jp: "Balita di desa itu mendapat makanan dari puskesmas setiap minggu.", en: "The under-fives in that village get food from the health centre every week." }, accept: ["a toddler", "an infant up to five", "a pre-school child"], drill: { jp: "Balita di desa itu mendapat makanan setiap minggu", en: "The under-fives in that village get food every week" }, hint: "bah-LEE-tah. ⚠️ **It is an acronym: bawah lima tahun, under five years** — exactly the same compression that gave you puskesmas in u102, and Indonesian does this constantly. Learn to spot the pattern and you can decode the next one. Keep it apart from bayi (u15), a baby: a bayi is under one, a balita is under five, and Indonesian health programmes count them separately." },
        { id: "id-u111l2-popok", type: "vocab", front: "popok", reading: "popok", meaning: "a nappy", example: { jp: "Ibu harus mengganti popok yang kotor supaya anak tidak sakit.", en: "A mother has to change a dirty nappy so that the child does not get ill." }, accept: ["a diaper", "the cloth a baby wears", "baby wrap"], drill: { jp: "Ibu harus mengganti popok yang kotor", en: "A mother has to change a dirty nappy" }, hint: "POH-pohk, both o's short. ⚠️ The verb that goes with it is mengganti, to replace, which you know from u25 — Indonesian changes a nappy by replacing it, with no special verb. Popok kain is a cloth one and popok sekali pakai a disposable, and that second phrase quietly teaches you sekali pakai, single-use, which you will see on packaging everywhere." },
        { id: "id-u111l2-menyusui", type: "vocab", front: "menyusui", reading: "menyusui", meaning: "to breastfeed", example: { jp: "Ibu muda itu menyusui anak dia di kamar yang tenang.", en: "That young mother breastfed her child in a quiet room." }, accept: ["to nurse a baby", "to feed at the breast", "to suckle a child"], drill: { jp: "Ibu muda itu menyusui anak dia di kamar", en: "That young mother breastfeeds her child in the room" }, hint: "muh-nyoo-SOO-ee — ny one sound, four syllables. ⚠️ Built on susu, milk, which you know from u6, with -i marking the person being fed. **Note the direction carefully: ibu menyusui anak, the mother feeds the child** — it takes the CHILD as its object, not the milk. The related menyusu, with no -i, is what the baby does." },
        { id: "id-u111l2-menyapih", type: "vocab", front: "menyapih", reading: "menyapih", meaning: "to wean", example: { jp: "Dia mulai menyapih anak itu setelah dua tahun.", en: "She started weaning that child after two years." }, accept: ["to take a child off the breast", "to stop breastfeeding gradually", "to bring to solid food"], drill: { jp: "Dia mulai menyapih anak itu setelah dua tahun", en: "She starts weaning that child after two years" }, hint: "muh-nyah-PEEH — ny one sound, final h breathed. ⚠️ The opposite number of the card before it, and Indonesian has one word for it where English needs *take off the breast*. It is also used of animals. The noun is penyapihan, which you can now build yourself using u107's pe-…-an frame — that is the frame doing work in a real sentence." },
        { id: "id-u111l2-menyuapi", type: "vocab", front: "menyuapi", reading: "menyuapi", meaning: "to spoon-feed", example: { jp: "Nenek menyuapi anak kecil itu dengan sabar setiap pagi.", en: "The grandmother spoon-fed that small child patiently every morning." }, accept: ["to feed somebody by hand", "to put food in someone's mouth", "to feed a child mouthful by mouthful"], drill: { jp: "Nenek menyuapi anak kecil itu dengan sabar", en: "The grandmother spoon-feeds that small child patiently" }, hint: "muh-nyoo-ah-PEE, four syllables. The root suap is a mouthful of food. ⚠️ **And `suap` is also the ordinary Indonesian word for a BRIBE**, so menyuap means to bribe somebody while menyuapi, with the -i, means to feed them — one letter apart, and the newspapers use the first one constantly. Hold the -i carefully." },
        { id: "id-u111l2-menggendong", type: "vocab", front: "menggendong", reading: "menggendong", meaning: "to carry a child on the hip", example: { jp: "Ibu itu menggendong anak dan membawa tas besar sekaligus.", en: "That mother carried a child on her hip and a big bag at the same time." }, accept: ["to carry a child in a sling", "to hold a child against the body", "to tote a child"], drill: { jp: "Ibu itu menggendong anak dan membawa tas besar", en: "That mother carries a child on her hip and a big bag" }, hint: "muhng-guhn-DOHNG — ngg is the hum plus a hard g. ⚠️ Keep it apart from membawa, to carry, which you know from u13: membawa is anything in your hands, menggendong is specifically a person held against your body, on the hip, the back or in a cloth sling. A gendongan is the sling itself — most Indonesian mothers carry a child this way, which is why the language has a dedicated verb." },
      ],
    },
    {
      id: "id-u111l3",
      unit: 111,
      lesson: 3,
      title: "Mengasuh dan membesarkan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about raising a child as work and as a responsibility — looking after one, the whole business of upbringing, raising a child to adulthood, bringing them up with discipline, the immunisation schedule, and a legal guardian.",
      items: [
        { id: "id-u111l3-mengasuh", type: "vocab", front: "mengasuh", reading: "mengasuh", meaning: "to look after a child", example: { jp: "Nenek saya mengasuh lima anak sendiri setelah perang itu.", en: "My grandmother looked after five children alone after that war." }, accept: ["to care for a child day to day", "to nurse and tend", "to mind a child"], drill: { jp: "Nenek saya mengasuh lima anak sendiri", en: "My grandmother looked after five children alone" }, hint: "muh-ngah-SOOH — ng one hum, final h breathed. ⚠️ Keep it apart from menjaga, to guard or watch, which you know from u30: menjaga is keeping something safe for a while, mengasuh is the whole daily work of feeding, washing and settling. It is also what a radio or television host does to a programme — mengasuh acara — because they tend it week after week." },
        { id: "id-u111l3-pengasuhan", type: "vocab", front: "pengasuhan", reading: "pengasuhan", meaning: "the raising of a child", example: { jp: "Pengasuhan anak di kota berbeda sekali dari pengasuhan di desa.", en: "Child-raising in the city is very different from child-raising in the village." }, accept: ["parenting as a practice", "the upbringing of children", "childcare as a subject"], drill: { jp: "Pengasuhan anak di kota berbeda dari di desa", en: "Child-raising in the city differs from in the village" }, hint: "puh-ngah-soo-HAHN, five syllables. ⚠️ The pe-…-an noun off the card before it, built with the frame u107 taught you — and it is the word for parenting as a SUBJECT: pola pengasuhan, parenting style, is the phrase in every Indonesian article about it. Mengasuh is what one grandmother does on a Tuesday; pengasuhan is what a book is about." },
        { id: "id-u111l3-membesarkan", type: "vocab", front: "membesarkan", reading: "membesarkan", meaning: "to raise a child to adulthood", example: { jp: "Orang tua itu membesarkan empat anak dengan uang yang sedikit.", en: "Those parents raised four children on very little money." }, accept: ["to bring a child up", "to rear", "to see a child grown"], drill: { jp: "Orang tua itu membesarkan empat anak dengan susah", en: "Those parents raised four children with difficulty" }, hint: "muhm-buh-sahr-KAHN. ⚠️ Built on besar, big, which you know from u10, so the literal sense is *to make big* — and Indonesian uses it for the whole twenty-year job. Keep it apart from the card above it: mengasuh is the daily tending, membesarkan is the span. It also means to enlarge a picture and to turn up a volume, which is the same verb doing its literal work." },
        { id: "id-u111l3-mendidik", type: "vocab", front: "mendidik", reading: "mendidik", meaning: "to bring up with discipline", example: { jp: "Sekolah dan rumah sama-sama mendidik anak setiap hari.", en: "School and home both bring children up every day." }, accept: ["to educate in the broad sense", "to form a child's character", "to train and instruct"], drill: { jp: "Sekolah dan rumah sama-sama mendidik anak", en: "School and home both bring children up" }, hint: "muhn-DEE-deek. ⚠️ You know mengajar from u1, to teach — and the difference matters in Indonesian: mengajar passes on knowledge, mendidik forms a person. A parent mendidik; a teacher does both and is judged on the second. Pendidikan, education, is its noun, and mendidik as an adjective means edifying: film yang mendidik." },
        { id: "id-u111l3-imunisasi", type: "vocab", front: "imunisasi", reading: "imunisasi", meaning: "a child's immunisation schedule", example: { jp: "Imunisasi untuk balita di desa itu sudah selesai pada bulan lalu.", en: "The immunisation for the under-fives in that village finished last month." }, accept: ["the course of baby jabs", "routine childhood vaccination", "immunisation"], drill: { jp: "Imunisasi untuk balita di desa itu sudah selesai", en: "The immunisation for the under-fives in that village is finished" }, hint: "ee-moo-nee-SAH-see, five syllables. ⚠️ Keep it apart from vaksinasi, which u102 gave you: in Indonesian practice vaksinasi is the programme a ministry runs for anybody, and imunisasi is specifically the schedule a baby goes through at the puskesmas, recorded in a little book the mother keeps. Different words, different rooms, and a parent uses this one." },
        { id: "id-u111l3-wali", type: "vocab", front: "wali", reading: "wali", meaning: "a legal guardian", example: { jp: "Anak itu tidak punya orang tua jadi paman dia menjadi wali.", en: "That child has no parents, so his uncle became his legal guardian." }, accept: ["the adult responsible for a child", "a guardian in law", "a proxy for a parent"], drill: { jp: "Anak itu tidak punya orang tua jadi paman menjadi wali", en: "That child has no parents so the uncle became guardian" }, hint: "WAH-lee. An Arabic word, and in Indonesia a formal role with real force: a wali signs for a child at school (wali murid is the parent or guardian on the register), and a wali gives a bride away at a marriage. ⚠️ Keep it apart from wakil (u74), a deputy: a wakil stands in for somebody who exists, a wali holds authority over somebody who cannot act for themselves." },
      ],
    },
    {
      id: "id-u111l4",
      unit: 111,
      lesson: 4,
      title: "Rewel, manja, dan tidur",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe how a small child behaves and how adults answer it — fretful and hard to settle, indulged, spoiling a child, whining for something, dandling a child in your arms, and the cradle it sleeps in.",
      items: [
        { id: "id-u111l4-rewel", type: "vocab", front: "rewel", reading: "rewel", meaning: "fretful and hard to settle", example: { jp: "Anak itu rewel karena dia belum tidur sejak pagi.", en: "That child is fretful because he has not slept since morning." }, accept: ["grizzly", "fussing and complaining", "difficult to please"], drill: { jp: "Anak itu rewel karena dia belum tidur", en: "That child is fretful because he has not slept" }, hint: "RAY-wuhl — first e like the English say, final e a schwa. ⚠️ **The single most useful word in this unit for anybody around an Indonesian family**, and English has no one-word equivalent: it is crying, complaining and refusing to be comforted, all at once. It is used of adults too, where it means fussy and hard to satisfy, and of machines that keep breaking." },
        { id: "id-u111l4-manja", type: "vocab", front: "manja", reading: "manja", meaning: "indulged", example: { jp: "Anak yang manja susah di sekolah pada tahun yang pertama.", en: "An indulged child has a hard time at school in the first year." }, accept: ["spoilt", "used to getting its way", "pampered"], drill: { jp: "Anak yang manja susah di sekolah pada tahun pertama", en: "An indulged child has a hard time at school in the first year" }, hint: "MAHN-jah. ⚠️ Not purely an insult, which is where English *spoilt* misleads: manja also describes affectionate clinginess that Indonesians find endearing — bermanja-manja is to snuggle up and be babied, and an adult can be manja with a partner. The criticism arrives only with anak manja, which is the phrase in the example." },
        { id: "id-u111l4-memanjakan", type: "vocab", front: "memanjakan", reading: "memanjakan", meaning: "to spoil a child", example: { jp: "Nenek sering memanjakan anak itu dengan hadiah dan uang.", en: "The grandmother often spoils that child with presents and money." }, accept: ["to indulge", "to pamper", "to give in to a child"], drill: { jp: "Nenek sering memanjakan anak itu dengan hadiah", en: "The grandmother often spoils that child with presents" }, hint: "muh-mahn-jah-KAHN, four syllables. ⚠️ The verb off the card before it, deliberately beside it: manja is the state, memanjakan is the adult producing it. It also has a warm use — memanjakan diri, to treat oneself — which is exactly the English *to indulge oneself*. The frame is me-…-kan on an adjective, the same one that gave you membesarkan in lesson 3." },
        { id: "id-u111l4-merengek", type: "vocab", front: "merengek", reading: "merengek", meaning: "to whine for something", example: { jp: "Anak kecil itu merengek karena dia ingin makanan yang manis.", en: "That small child whined because he wanted something sweet." }, accept: ["to wheedle", "to nag in a crying voice", "to beg and grizzle"], drill: { jp: "Anak kecil itu merengek karena dia ingin makanan", en: "That small child whines because he wants food" }, hint: "muh-RUH-ngek — ng one hum. ⚠️ It names a SOUND and a tactic at once: a drawn-out complaining note, used to get something. Keep it apart from menangis, to cry, which you know from u31 — crying can be about anything, merengek is always aimed at an adult who could say yes. It is also used of an adult pestering, dismissively." },
        { id: "id-u111l4-menimang", type: "vocab", front: "menimang", reading: "menimang", meaning: "to dandle in the arms", example: { jp: "Ibu menimang anak itu sampai dia tidur dengan tenang.", en: "The mother dandled that child until he fell peacefully asleep." }, accept: ["to rock a baby in the arms", "to jiggle a child gently", "to soothe by rocking"], drill: { jp: "Ibu menimang anak itu sampai dia tidur", en: "The mother dandles that child until he sleeps" }, hint: "muh-NEE-mahng — ng one hum. ⚠️ **This is NOT menimbang, to weigh, which you met at u40** — one letter apart, unrelated, and a classic trap: timang is to bounce a baby on your hands, timbang is to put something on a scale. Nothing that strips prefixes can tell them apart, so hold the b. Figuratively menimang cita-cita means to cherish an ambition." },
        { id: "id-u111l4-buaian", type: "vocab", front: "buaian", reading: "buaian", meaning: "a hanging cradle", example: { jp: "Buaian di rumah lama itu masih ada di kamar belakang.", en: "The cradle in that old house is still in the back room." }, accept: ["a baby's swing cot", "a cradle slung from the ceiling", "a hammock for a baby"], drill: { jp: "Buaian di rumah lama itu masih ada di kamar", en: "The cradle in that old house is still in the room" }, hint: "boo-ah-EE-an, four syllables. From buai, to swing or rock — and the thing is specifically HUNG, a cloth slung from a spring or a beam, which is how Indonesian babies have always been put to sleep. ⚠️ Figuratively it is the English *lulled*: terbuai means swayed into comfortable agreement, which is how a newspaper describes voters." },
      ],
    },
  ],
};
