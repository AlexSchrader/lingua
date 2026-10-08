// ID Unit 126 — Canda, usik, dan taruhan ("Joking, teasing and wagering") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u114–u126) — THE LAST UNIT OF THE BAND. Conventions: unit1.js
// §1–12, unit21.js, unit51.js §B1–B12, unit88.js §C1–C12, unit89.js §C-B4, and
// unit114.js §C1–C10. Read unit114.js's header before editing this.
//
// THE HOLE THIS FILLS. `lucu` and `tertawa` (u18/u20) were the whole of humour,
// and u64 (B1) took SCREEN AND STAGE entertainment — `lelucon` `menghibur`
// `hiburan`. Nothing for the interpersonal act of joking: teasing someone,
// mocking them, making an indirect dig, being the one laughed at. And nothing
// at all for betting, which in Indonesia is both a real social activity and
// formally illegal, so the vocabulary is live and the register matters.
//
// THE BOUNDARY WITH u64, which took the obvious nouns first:
//   u64 owns the PERFORMANCE and the PRODUCT — a joke you watch, an
//   entertainment you consume. u126 owns the INTERPERSONAL ACT — joking WITH
//   someone, teasing them, mocking them — and the act of betting on an outcome.
//   `melawak`/`pelawak` sit on that line and come here, because they are a
//   person doing it rather than a thing being watched; u64 has `menghibur` for
//   the entertaining and `hiburan` for the entertainment.
//
// TWO GLOSS COLLISIONS MEASURED (gloss-taken.mjs id):
//   "to wager" → taruhan@u52. `taruhan` is taught meaning what is at stake, and
//     its accept list reaches "to wager" once the grader normalises. So
//     `bertaruh` is "to place a bet" and "to put money on a result".
//   "fate"     → takdir@u77. The religion unit owns divine decree. So `nasib`
//     is "how things turn out for someone" — which is also the truer gloss:
//     takdir is what God has written, nasib is the hand you were dealt.
//
// ⚠⚠ `menyindir` AND `sindiran` WERE CARDED HERE AND ARE NOW DROPPED. Block 1
// holds BOTH at u88 (Bujukan dan retorika) and the lower unit wins. Found at
// merge by `dupes.mjs id` — invisible to every pre-authoring probe, because a
// sibling's branch does not exist in this tree until it is merged. `mengejek`
// (to taunt) and `ejekan` (the mocking words) took the two slots, and both
// hints name `sindiran` so the learner still meets the indirect-dig idea and
// knows where it differs: an ejekan is open, a sindiran names nobody.
// One further edit fell out of it: `mengolok`'s accept list held "to jeer at",
// which `mengejek` now needed, so mengolok accepts "to deride" instead.
//
// ⚠️ THREE TAKEN FRONTS CONFIRMED, which is what shaped this unit's word list:
//   `taruhan` TAKEN u52  → `bertaruh` ships instead.
//   `menebak` and `tebakan` TAKEN u54 → `menerka` ships as the guess verb.
//   `lucu` TAKEN u20, `tertawa` TAKEN u18, `kartu` TAKEN u41.
// All five of the crew lead's claims for this slot verified true.
//
// §C4 CUT FOUR MORE FRONTS, all of them one root wearing a second coat:
//   `gurau` family — `gurauan` (the jest) ships; `bergurau` and `senda gurau`
//     are the same word doing the same job and are named in its hint.
//   `canda` family — `bercanda` (the act) ships; `candaan` is cut.
//   `judi` — `berjudi` ships; the bare noun is the verb's stem.
//
// FRONTS REFUSED, NAMED NOT BURIED:
//   `peluang` and `kesempatan` BOTH probed FREE and I checked them because the
//     lead asked me to. Neither is carded: `peluang` would have fought
//     `keberuntungan` and `nasib` for the luck gloss, and `kesempatan` (an
//     opportunity) is a general A2-level word that belongs to no theme and
//     certainly not to a unit about betting. ⚠️ **`kesempatan` being free is a
//     REAL CORPUS GAP** — 2,088 cards and no word for an opportunity — and it
//     is named here so the next seat finds it rather than re-measuring it.
//   `gegabah` is carded, but note the boundary it sits on: recklessness as a
//     CHARACTER TRAIT is u78's, so this card is glossed as the act in the
//     moment, not the disposition.
//   `imbalan` `sial` — `sial` ships; `imbalan` (a reward) is cut, because a
//     payment for work belongs with employment, not with luck.
//
// ⚠️ SIX ASSUMED-TAUGHT WORDS CHECKED AND OUT OF THE EXAMPLES: `main` (only
// `bermain`), `bodoh`, `bicara` (only `berbicara`), `jawab` (only `menjawab`),
// `bertanya` (only `tanya`), and `nasib` itself, which is carded here.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT126 = {
  id: "id-u126",
  lang: "id",
  title: "Canda, usik, dan taruhan",
  order: 126,
  stage: "b2",
  lessons: [
    {
      id: "id-u126l1",
      unit: 126,
      lesson: 1,
      title: "Bercanda, gurauan, dan iseng",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Say that something was meant as a joke and not as an insult — which is the single most useful repair move in a second language.",
      items: [
        { id: "id-u126l1-bercanda", type: "vocab", front: "bercanda", reading: "bercanda", meaning: "to joke around", example: { jp: "Saya hanya bercanda, jangan marah sama saya.", en: "I was only joking, do not be angry with me." }, accept: ["to say things in fun", "to kid about", "to speak in jest"], drill: { jp: "Saya hanya bercanda jangan marah sama saya", en: "I was only joking do not be angry with me" }, hint: "ber-CHAN-da — c is CH. ⚠️ LEARN THIS SENTENCE, not just the word: saya cuma bercanda is how you undo an accidental insult in Indonesian, and as a learner you will need it. Candaan exists as a noun and is not taught, because this verb is the useful half." },
        { id: "id-u126l1-gurauan", type: "vocab", front: "gurauan", reading: "gurauan", meaning: "a jest", example: { jp: "Gurauan itu tidak lucu untuk orang yang tidak kenal dia.", en: "That joke is not funny to someone who does not know him." }, accept: ["something said to raise a laugh", "a quip", "a remark made in fun"], drill: { jp: "Gurauan itu tidak lucu untuk orang lain", en: "That joke is not funny to other people" }, hint: "goo-ra-OO-an, from gurau. The joke as a THING said. ⚠️ Indonesian also has bergurau and senda gurau, which mean the same and are NOT taught — three fronts under one gloss would be a prompt with three right answers. Gurauan is more formal than candaan." },
        { id: "id-u126l1-jenaka", type: "vocab", front: "jenaka", reading: "jenaka", meaning: "witty", example: { jp: "Cerita jenaka itu dibaca anak kecil di sekolah.", en: "That witty story is read by young children at school." }, accept: ["amusing in a clever way", "droll", "humorous and clever"], drill: { jp: "Cerita jenaka itu dibaca anak kecil di sekolah", en: "That witty story is read by young children at school" }, hint: "juh-NA-ka. Clever-funny rather than silly-funny, and distinctly literary: cerita jenaka is a genre of traditional Indonesian comic tale. Against lucu, which you already know and which is plain funny." },
        { id: "id-u126l1-konyol", type: "vocab", front: "konyol", reading: "konyol", meaning: "absurd", example: { jp: "Alasan itu konyol, tidak ada orang yang percaya.", en: "That excuse is absurd, nobody believes it." }, accept: ["silly in a way that invites laughter", "daft", "ridiculous"], drill: { jp: "Alasan itu konyol dan tidak ada yang percaya", en: "That excuse is absurd and nobody believes it" }, hint: "KO-nyol — ny is one sound. Stupid-funny, and usually mildly critical: a konyol plan is one you laugh at rather than admire. Mati konyol, to die pointlessly, is the darkest use and is quite common." },
        { id: "id-u126l1-iseng", type: "vocab", front: "iseng", reading: "iseng", meaning: "idly, for something to do", example: { jp: "Dia membuka buku itu iseng saja, bukan untuk belajar.", en: "He opened that book idly, not in order to study." }, accept: ["out of boredom rather than purpose", "for no reason but amusement", "just for the sake of it"], drill: { jp: "Dia membuka buku itu iseng saja", en: "He opened that book just idly" }, hint: "EE-seng. ⚠️ NO CLEAN ENGLISH EQUIVALENT and you will hear it constantly: doing something out of idleness, with no purpose, often slightly mischievously. Iseng-iseng is the doubled form; kerjaan iseng is pointless busywork, and iseng aja is the standard answer to \"why did you do that?\"." },
        { id: "id-u126l1-geli", type: "vocab", front: "geli", reading: "geli", meaning: "ticklish", example: { jp: "Anak itu geli kalau kaki dia disentuh.", en: "That child is ticklish if his feet are touched." }, accept: ["squeamish at being touched", "easily set off laughing by a touch", "sensitive to tickling"], drill: { jp: "Anak itu geli kalau kaki dia disentuh", en: "That child is ticklish if his feet are touched" }, hint: "GUH-lee. ⚠️ Wider than ticklish in English: geli also covers the squirming revulsion you feel at something slimy or creepy, so geli lihat ulat is being grossed out by a caterpillar. One word for both, and the context decides which." },
      ],
    },
    {
      id: "id-u126l2",
      unit: 126,
      lesson: 2,
      title: "Menggoda, mengolok, dan menyindir",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Tell apart four things that all look like teasing — playful needling, pestering, open mockery, and the indirect dig Indonesian prefers to a direct complaint.",
      items: [
        { id: "id-u126l2-menggoda", type: "vocab", front: "menggoda", reading: "menggoda", meaning: "to tease", example: { jp: "Teman dia menggoda dia karena dia malu.", en: "His friends tease him because he is shy." }, accept: ["to needle someone playfully", "to provoke for fun", "to rib someone"], drill: { jp: "Teman itu menggoda dia karena dia malu", en: "That friend teases him because he is shy" }, hint: "muh-NGO-da, from goda. ⚠️ It has a second, stronger sense you must know: menggoda is also to TEMPT or to flirt with, so makanan yang menggoda is tempting food and menggoda perempuan is quite different from teasing a friend. Context does the work, and the stakes are high if you misjudge it." },
        { id: "id-u126l2-mengusik", type: "vocab", front: "mengusik", reading: "mengusik", meaning: "to bother for amusement", example: { jp: "Jangan mengusik kucing itu waktu dia tidur.", en: "Do not bother that cat while it is sleeping." }, accept: ["to poke at someone to get a reaction", "to pester playfully", "to disturb for the fun of it"], drill: { jp: "Jangan mengusik kucing itu waktu dia tidur", en: "Do not bother that cat while it is sleeping" }, hint: "muh-NGOO-seek, from usik. Poking at something to get a reaction — a cat, a sibling, a sore subject. Stronger than menggoda and closer to provoking: mengusik perasaan orang is to needle someone's feelings, and that one is not funny." },
        { id: "id-u126l2-mengolok", type: "vocab", front: "mengolok", reading: "mengolok", meaning: "to mock", example: { jp: "Mereka mengolok cara dia berbicara karena dari daerah lain.", en: "They mock the way he speaks because he is from another region." }, accept: ["to make fun of openly", "to deride", "to hold up to ridicule"], drill: { jp: "Mereka mengolok cara dia berbicara di sekolah", en: "They mock the way he speaks at school" }, hint: "muh-NGO-lok. Open and unkind, not playful — the line between this and menggoda is whether the target is in on it. Usually doubled as mengolok-olok, which intensifies it. The example is a real thing that happens to accents in Indonesia." },
        { id: "id-u126l2-mengejek", type: "vocab", front: "mengejek", reading: "mengejek", meaning: "to taunt", example: { jp: "Anak itu mengejek teman dia karena nilai yang jelek.", en: "That child taunts his friend because of a bad mark." }, accept: ["to call out mocking words at", "to goad with words", "to jeer words at someone"], drill: { jp: "Anak itu mengejek teman dia karena nilai jelek", en: "That child taunts his friend over a bad mark" }, hint: "muh-NGUH-jek, from ejek. Mocking OUT LOUD, with words, at someone present — where mengolok in the previous card can be behind their back. The commonest schoolyard word in Indonesia and the one a parent uses when telling a child to stop." },
        { id: "id-u126l2-ejekan", type: "vocab", front: "ejekan", reading: "ejekan", meaning: "a mocking remark thrown at someone", example: { jp: "Ejekan itu membuat dia tidak mau masuk sekolah lagi.", en: "That mocking made him not want to go to school again." }, accept: ["words shouted to mock", "jeering words", "a taunting shout"], drill: { jp: "Ejekan itu membuat dia tidak mau masuk sekolah", en: "That mocking made him not want to go to school" }, hint: "uh-JEH-kan — the noun off ejek, where the verb is the previous card. The thing said. ⚠️ Indonesian also has sindiran, a veiled dig, and that one is TAUGHT in the rhetoric unit — the difference is that an ejekan is open and a sindiran names nobody." },
        { id: "id-u126l2-menertawakan", type: "vocab", front: "menertawakan", reading: "menertawakan", meaning: "to laugh at someone", example: { jp: "Jangan menertawakan orang yang sedang belajar bahasa baru.", en: "Do not laugh at someone who is learning a new language." }, accept: ["to make someone the butt of laughter", "to ridicule by laughing", "to laugh in derision at"], drill: { jp: "Jangan menertawakan orang yang sedang belajar bahasa", en: "Do not laugh at someone who is learning a language" }, hint: "muh-ner-ta-wa-KAHN, built on tertawa, to laugh, which you already know. The -kan makes it take an object and changes the meaning entirely: tertawa is laughing, menertawakan is laughing AT. Same shape as berdoa and mendoakan in the mourning unit." },
      ],
    },
    {
      id: "id-u126l3",
      unit: 126,
      lesson: 3,
      title: "Melawak, teka-teki, dan menerka",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about comedy as a job and guessing as a game — the comic, the riddle, hazarding an answer, a pure gamble, acting without thinking.",
      items: [
        { id: "id-u126l3-melawak", type: "vocab", front: "melawak", reading: "melawak", meaning: "to perform comedy", example: { jp: "Dia melawak di depan banyak orang tanpa takut.", en: "He performs comedy in front of a lot of people without fear." }, accept: ["to tell jokes for an audience", "to do a comic turn", "to clown for an audience"], drill: { jp: "Dia melawak di depan banyak orang tanpa takut", en: "He performs comedy in front of many people without fear" }, hint: "muh-LA-wahk, from lawak. Performing, not joking with a friend — that is bercanda, in the first lesson of this unit. Indonesian stand-up is stand-up comedy as a borrowed phrase, but the older lawak tradition is its own thing entirely." },
        { id: "id-u126l3-pelawak", type: "vocab", front: "pelawak", reading: "pelawak", meaning: "a comedian", example: { jp: "Pelawak itu sudah terkenal sebelum tahun itu.", en: "That comedian was already famous before that year." }, accept: ["a professional joker", "someone who performs comedy", "a comic by trade"], drill: { jp: "Pelawak itu sudah terkenal sebelum tahun itu", en: "That comedian was already famous before that year" }, hint: "puh-LA-wahk — pe- makes the person, exactly as in pelaut and pelayat earlier in this band. Indonesian comedy groups like Srimulat made pelawak a respected trade, and the word carries none of the condescension that clown does in English." },
        { id: "id-u126l3-tekateki", type: "vocab", front: "teka-teki", reading: "tekateki", meaning: "a riddle", example: { jp: "Teka-teki itu susah sampai tidak ada yang bisa menjawab.", en: "That riddle is so hard that nobody can answer." }, accept: ["a puzzle set as a question", "a brain-teaser", "a question posed as a puzzle"], drill: { jp: "Teka-teki itu susah dan tidak ada yang tahu", en: "That riddle is hard and nobody knows it" }, hint: "TUH-ka TUH-kee — a doubled word that is NOT a plural, like hati-hati: the doubling IS the word. Teka-teki silang is a crossword. Also used of any mystery: masih jadi teka-teki, still a puzzle, is newspaper language." },
        { id: "id-u126l3-menerka", type: "vocab", front: "menerka", reading: "menerka", meaning: "to make a guess", example: { jp: "Kami hanya bisa menerka hari ini pasti.", en: "We can only guess because nobody knows for certain." }, accept: ["to venture an answer without knowing", "to hazard a guess", "to guess at something"], drill: { jp: "Kami hanya bisa menerka hari ini", en: "We can only guess today" }, hint: "muh-NER-ka, from terka. ⚠️ Indonesian's commoner word for guessing is menebak, and it IS taught — along with tebakan, a guess — which is why menerka is the one here. Menerka is slightly more formal and leans towards inferring rather than picking at random." },
        { id: "id-u126l3-untunguntungan", type: "vocab", front: "untung-untungan", reading: "untunguntungan", meaning: "a matter of pure chance", example: { jp: "Kalau pilih tanpa tahu, itu untung-untungan saja.", en: "If you choose without knowing, it is pure chance." }, accept: ["something decided by luck alone", "a pure gamble", "entirely a matter of luck"], drill: { jp: "Kalau pilih tanpa tahu itu untung-untungan saja", en: "If you choose without knowing it is pure chance" }, hint: "OON-toong OON-toong-an — a doubled form built on untung, profit or luck, which you already know. ⚠️ The shorter taught front untung sits inside this one; that is fine, since a card only blanks its OWN front out of its own drill. Said of exam guessing and of any decision made blind." },
        { id: "id-u126l3-gegabah", type: "vocab", front: "gegabah", reading: "gegabah", meaning: "acting without thinking it through", example: { jp: "Jangan gegabah, membaca dulu semua surat itu.", en: "Do not act rashly, read all of that letter first." }, accept: ["rash and careless of consequence", "hasty and ill-considered", "acting too fast to think"], drill: { jp: "Jangan gegabah membaca dulu surat itu", en: "Do not act rashly read that letter first" }, hint: "guh-GA-bah. ⚠️ Glossed as the ACT, not the disposition, on purpose: recklessness as a character trait belongs to the unit on watak and budi, and this card is about a decision made too fast. Jangan gegabah is standard advice before signing anything." },
      ],
    },
    {
      id: "id-u126l4",
      unit: 126,
      lesson: 4,
      title: "Bertaruh, berjudi, dan sial",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about betting and luck — placing a bet, gambling, a prize draw, good fortune, how things fall out, and being unlucky.",
      items: [
        { id: "id-u126l4-bertaruh", type: "vocab", front: "bertaruh", reading: "bertaruh", meaning: "to place a bet", example: { jp: "Mereka bertaruh sedikit uang waktu menonton pertandingan.", en: "They bet a little money while watching the match." }, accept: ["to stake money on an outcome", "to put money on a result", "to lay a bet"], drill: { jp: "Mereka bertaruh sedikit uang waktu menonton pertandingan", en: "They bet a little money while watching the match" }, hint: "ber-TA-rooh. ⚠️ Not glossed \"to wager\": taruhan, what is at stake, is already taught and its gloss reaches the same string once the grader normalises it. Bertaruh is also figurative: bertaruh nyawa, to stake one's life, is what a rescuer does." },
        { id: "id-u126l4-berjudi", type: "vocab", front: "berjudi", reading: "berjudi", meaning: "to gamble", example: { jp: "Berjudi tidak boleh di negara ini, jadi selalu tidak terbuka.", en: "Gambling is not permitted in this country, so it is always out of sight." }, accept: ["to play games of chance for money", "to bet habitually", "to gamble for money"], drill: { jp: "Berjudi tidak boleh di negara ini sama sekali", en: "Gambling is not permitted in this country at all" }, hint: "ber-JOO-dee, from judi, which is NOT taught as its own card because it is only this verb's stem. ⚠️ The legal fact in the example is worth knowing: gambling is illegal throughout Indonesia, which is exactly why the vocabulary is current — it appears in news and in warnings far more than in casinos." },
        { id: "id-u126l4-undian", type: "vocab", front: "undian", reading: "undian", meaning: "a lottery", example: { jp: "Hadiah dari undian itu dibagi untuk sepuluh orang.", en: "The prize from that draw is divided among ten people." }, accept: ["a prize draw", "a draw for a prize by lot", "a raffle"], drill: { jp: "Hadiah dari undian itu dibagi untuk sepuluh orang", en: "The prize from that draw is divided among ten people" }, hint: "oon-DEE-an, from undi, to draw lots. ⚠️ A legal distinction that matters in Indonesia: a commercial undian with a purchase attached is regulated and often banned as disguised judi, while drawing lots to decide something fairly is ordinary and uncontroversial." },
        { id: "id-u126l4-keberuntungan", type: "vocab", front: "keberuntungan", reading: "keberuntungan", meaning: "good fortune", example: { jp: "Keberuntungan dia datang setelah lama bekerja keras.", en: "His good fortune came after a long time working hard." }, accept: ["luck that falls someone's way", "a run of luck", "the good luck someone has"], drill: { jp: "Keberuntungan dia datang setelah bekerja keras", en: "His good fortune came after hard work" }, hint: "kuh-buh-roon-TOONG-an — a long word built entirely from pieces you have: ke- + ber- + untung (profit, luck) + -an. Specifically GOOD luck, where nasib in the next card but one is neutral about which way it falls." },
        { id: "id-u126l4-nasib", type: "vocab", front: "nasib", reading: "nasib", meaning: "how things turn out for someone", example: { jp: "Nasib orang itu berubah setelah dia merantau.", en: "That person's circumstances changed after he left home to work." }, accept: ["the way luck falls for a person", "the lot a person is given", "someone's circumstances as they fall out"], drill: { jp: "Nasib orang itu berubah setelah dia merantau", en: "That person's circumstances changed after he left home" }, hint: "NA-seeb, from Arabic. ⚠️ Not glossed \"fate\": takdir, divine decree, already owns that gloss in the religion unit — and the difference is real and worth holding. Takdir is what God has written; nasib is the hand you were dealt and may yet improve. Nasib baik is good luck." },
        { id: "id-u126l4-sial", type: "vocab", front: "sial", reading: "sial", meaning: "unlucky", example: { jp: "Hari itu sial sekali, semua yang kami coba gagal.", en: "That day was very unlucky, everything we tried failed." }, accept: ["dogged by bad luck", "ill-starred", "having bad luck"], drill: { jp: "Hari itu sial sekali dan semua gagal", en: "That day was very unlucky and everything failed" }, hint: "SEE-ahl. ⚠️ Said alone — Sial! — it is a mild swear word, roughly \"damn\", so use the full sentence form rather than the exclamation until you are sure of the room. Angka sial is an unlucky number, and in Indonesia that is usually 13 or 4." },
      ],
    },
  ],
};
