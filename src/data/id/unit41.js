// ID Unit 41 — Olahraga dan pertandingan ("Sport and competition") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 3 (u41–u50). The 12 conventions in unit1.js and the 10 A2 conventions
// in unit21.js BIND this file. Read both before editing.
//
// ⚠️ RETHEMED A SECOND TIME, 2026-09-30, AND THE REASON IS A MEASURED
// COLLISION. This slot was authored on 2026-09-29 as "Di atas, di bawah, di
// antara" — spatial relations and the written prepositions. Block 2 (u31–u40) was
// authoring **the same theme into u36 at the same time**, under the **identical
// title**, and block 2 merged to `main` first. Measured with
// `scripts/tmp/dupes.mjs id`: the two units shared **16 of 24 fronts** (atas ·
// bawah · antara · tengah · luar · ujung · kepada · pada · tanpa · melalui ·
// sejak · ketika · saat · menuju · turun · pinggir) plus `sesuai` from u37. u36 is
// the fixed point, so **u36 keeps the spatial lane and this slot is rethemed in
// full.** The old header's claim that nothing taught `antara` was TRUE WHEN
// WRITTEN and is now false — u36 teaches it. Nothing is lost: every word listed
// above is still taught, one unit earlier.
//
// THE HOLE THIS FILLS, derived from all 50 id unit titles and measured against
// the live corpus. Indonesian A1+A2 taught the *verbs* of physical activity
// (`berolahraga` · `bermain` · `berenang` · `berlari` · `melompat` · `memanjat` ·
// `menendang` · `memukul` · `melempar` · `menangkap`) and the *abstract* result
// of a contest (`menang` · `kalah` · `seimbang` · `membandingkan` in u30, whose
// own lesson 2 is titled "Membandingkan dan bertanding") — and **never once named
// a sport, a pitch, a ball, a match, a player, a referee or a trophy.** 1200 cards
// with `menang` and no `pertandingan` is the German `die Frage` failure: the
// machinery for talking about a thing, and not the thing. This unit is where u30's
// comparison words and u39's motion verbs finally get a subject. It sits at u41
// deliberately — u39/u40's body-motion and measurement verbs are exactly what its
// examples need, and they are one and two units back.
//
// ⛔ THREE OTHER CANDIDATE THEMES WERE MEASURED AND REJECTED, so nobody
// re-argues them:
//   • **Law and rules** — genuinely empty, and it is now **u50**, which had to be
//     rethemed for its own reasons. Putting it here would have left u50 a
//     grab-bag. It also has to stay off u47's STATE lane (`pemerintah` · `hukum`
//     · `presiden` · `tentara`), which is easier to police from the adjacent slot.
//   • **Plans, the future, managing time** — looked empty, measured FULL:
//     `rencana` · `jadwal` · `sibuk` · `sempat` · `siap` · `tepat` · `segera` ·
//     `daftar` · `terlambat` · `awal` · `cepat` · `lambat` · `sengaja` ·
//     `berjanji` are ALL taught, across u9/u13/u14/u15/u18/u21/u26/u28. Eight free
//     words is not a unit.
//   • **Giving directions** — u7l4 (`kanan` · `kiri` · `lurus` · `belok` ·
//     `masuk` · `keluar`) plus u23l3 (`peta` · `arah` · `macet`) already spent it.
//
// ⚠️ SPORT WAS ONLY *PARTLY* EMPTY — nine words were already taught and
// are NOT re-carded here. They are the words this unit's examples are built out
// of: `berolahraga` · `bermain` · `berenang` · `menonton` (u18), `sepeda` (u7),
// `tim` (u24), `menang` · `kalah` · `seimbang` (u30), `penonton` · `hadiah` (u35).
// If you are looking for one of those, it is taught earlier.
//
// ⛔ DECLINED, EACH FOR A NAMED REASON — do not read these as holes:
//   `main`        same lexeme as `bermain` (u18). Convention 5.
//   `mainan`      third card off root `main` after `bermain` and this unit's
//                 `pemain` + `permainan`. A6's ceiling is three off one root and
//                 those two earn it; a toy does not.
//   `bertanding`  `pertandingan` is carded instead. A6: a form you can read
//                 straight off the parts gets no second card, and ber-/per--an
//                 off one root in one unit is exactly that.
//   `pemenang`    gloss would sit on top of this unit's own `juara`.
//   `seri`        u30's `seimbang` accepts **"level with each other"** and
//                 **"balanced"**. A4 — that is an accept[] collision, not a
//                 meaning one, and it would ship two right answers.
//   `skor`        front and English gloss differ by one letter; the produce card
//                 is a copy task. The `bus`/`hotel` trap, A10.
//   `lomba`       this unit's `pertandingan` accepts "a sporting contest".
//   `melatih`     `pelatih` is carded; root `latih` already carries u44's
//                 `berlatih` and `latihan`, so a fourth is over A6's ceiling.
//   `bertaruh`    betting. Out on content grounds, not vocabulary ones.
//
// ⚠️ ONE ROOT CARRIES THREE CARDS AND IT IS DELIBERATE (A6). `main`:
// **bermain** (u18, to play) · **pemain** (l1, a player) · **permainan** (l4, a
// game). Convention 3's test passes on both new ones — knowing "to play" gives
// you neither "a player" nor "a game" — and A6 names three-off-one-root as fine
// where each is a different word. They sit in two different lessons.
// Root `latih` will carry **pelatih** (l1) plus u44's `berlatih` and `latihan`:
// three, at the ceiling, and each is a different word (a coach / to practise / a
// practice session).
//
// ⚠️ WHOLE-WORD DRILL HAZARDS CHECKED THROUGH THE REAL `findWholeWord`,
// not by eye (A7 — lint uses `.includes()`, the router does not, and a hyphen is
// not a letter):
//   `olahraga`  — `berolahraga` (u18) contains it at index 3, preceded by `r`, a
//                 LETTER, so no whole-word match in either direction. This unit's
//                 `olahraga` drill carries the bare form.
//   `pemain` / `permainan` — neither contains `bermain` and `bermain` contains
//                 neither. No overlap at all.
//   `bola` / `sepak bola` — **`sepak bola` DOES whole-word-contain `bola`** (the
//                 space is not a letter). So `bola`'s own drill carries the BARE
//                 noun and never the compound; `sepak bola`'s drill carries the
//                 compound, which its own finder matches in full. Checked both.
//   `senam`     — `enam` (u5, six) sits inside it at index 1 preceded by `s`. No
//                 match.
//   `gawang`    — `awan` (u8, cloud) sits inside at index 1 preceded by `g`. No
//                 match.
//   `lapangan`  — `apa` (u3) at index 1, preceded by `l`. No match.
//   `peserta`   — `serta` (u29, and also) at index 2, preceded by `e`. No match.
//   `mengalahkan` — does NOT contain `kalah` at all: meng- + kalah assimilates the
//                 k away, leaving `-alah-`. Nothing to check.
//   `maju` · `mundur` · `medali` · `piala` · `juara` · `curang` · `catur` ·
//   `kartu` · `wasit` · `gol` · `menyerah` — no substring relation to any taught
//   front in either direction.
//
// ⚠️ FOLD CHECK ON THE TWO MULTI-WORD FRONTS (convention 9, A8).
// `sepak bola` → "sepakbola" and `bulu tangkis` → "bulutangkis" through the real
// `normalizeReading(f, "id")`. Neither collides with any reading in the corpus,
// and this unit teaches only the spaced form of each — never a solid `sepakbola`.
//
// ⚠️ accept[] COLLISIONS AVOIDED BY MEASUREMENT (A4 — the defect class
// that passes both validators). Every one of these was found by reading the
// earlier card's accept[], not its meaning:
//   `tujuan` (u24) **IS "a goal"** → so `gol` is glossed "a goal scored" and its
//     accept[] carries none of "a goal".
//   `kalah` (u30) accepts **"to be defeated"** → so `mengalahkan` is "to beat an
//     opponent" and accepts "to get the better of", never "to defeat".
//   `menang` (u30) accepts **"to take the prize"** and `hadiah` (u35) accepts
//     **"a prize"** → so `piala` is "a trophy" and `medali` is "a medal"; neither
//     accepts "a prize".
//   `anggota` (u32) **IS "a member"** → so `pemain` accepts "a member of a team",
//     never the bare "a member".
//   `bermain` (u18) accepts **"to play a game"** → so `permainan` accepts no form
//     of that string.
//   `berolahraga` (u18) accepts **"to do sport"** → `olahraga` is the bare noun
//     "sport", which normalises differently, and its accept[] avoids every verb.
//   `hobi` (u35) **IS "a hobby"** → `permainan` accepts "a pastime with rules".
//
// ⚠️ AND READING THE NEIGHBOURS BY HAND WAS NOT ENOUGH — DO NOT TRUST IT. The
// list above was compiled by hand BEFORE any card was written, exactly as A4 asks.
// A script then compared every new meaning AND accept string against every other
// one in the language, normalised the way `normalizeMeaning` does it, and found
// **13 MORE** across this branch that hand-reading had missed. The reason is the
// one A4 already states and which is easy to read past: **`normalizeMeaning`
// strips a leading "to " AND a leading a/an/the, so "to match" and "a match" are
// THE SAME STRING.** Hand-reading compares concepts; the grader compares strings,
// and the two disagree wherever a verb and a noun share a stem. In this unit it
// caught two:
//   `cocok` (u14) **IS "to match"** → which normalises to "match", so
//     `pertandingan` could not be "a match". It is glossed "a sporting fixture".
//   `mengaku` (u22) accepts **"to concede"** → so `menyerah` accepts "to throw in
//     the towel" instead.
// **So: write the glosses, then run the comparison mechanically.** The probe lives
// at `scripts/tmp/a4.mjs` on this branch; it is untracked, and it is twenty lines.
//
// ⛔ NO ter- FORM AND NO di- PASSIVE IS CARDED HERE (A5, A6). `tertinggal`
// and `dikalahkan` were the obvious candidates; both are deferred to B1 with the
// patterns they belong to.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT41 = {
  id: "id-u41",
  lang: "id",
  title: "Olahraga dan pertandingan",
  order: 41,
  stage: "a2",
  lessons: [
    {
      id: "id-u41l1",
      unit: 41,
      lesson: 1,
      title: "Olahraga dan lapangan",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name sport itself, the ground it is played on, the match, and the three people a match needs — the player, the coach and the referee.",
      items: [
        { id: "id-u41l1-olahraga", type: "vocab", front: "olahraga", reading: "olahraga", meaning: "sport", example: { jp: "Olahraga adalah hobi saya yang paling baik.", en: "Sport is my favourite hobby." }, accept: ["athletics", "a sporting discipline", "sports"], drill: { jp: "Anak saya suka olahraga dan musik", en: "My child likes sport and music" }, hint: "oh-lah-RAH-ga, four syllables, every a open. You already know berolahraga, to exercise — this is the bare noun underneath it, so berolahraga is what you DO and olahraga is the thing itself. The name of a particular sport usually follows it: olahraga air, water sports." },
        { id: "id-u41l1-lapangan", type: "vocab", front: "lapangan", reading: "lapangan", meaning: "a sports field", example: { jp: "Ada lapangan besar di belakang sekolah itu.", en: "There is a big sports field behind that school." }, accept: ["a pitch", "a playing field", "an open ground"], drill: { jp: "Banyak anak bermain di lapangan setiap sore", en: "Many children play on the field every afternoon" }, hint: "la-PAH-ngan, the ng one hum. Any flat open ground, not only a sports one — lapangan kerja is the job market and a small airfield is a lapangan terbang. Keep it apart from taman, which is a planted public garden." },
        { id: "id-u41l1-pertandingan", type: "vocab", front: "pertandingan", reading: "pertandingan", meaning: "a sporting fixture", example: { jp: "Pertandingan itu mulai pada jam empat sore.", en: "That match starts at four in the afternoon." }, accept: ["a game between two sides", "a sporting contest", "a tie between two teams"], drill: { jp: "Kami menonton pertandingan di lapangan kota", en: "We watched a match on the city field" }, hint: "per-tan-DEENG-an, five syllables. Built on tanding, to be matched against — so it is the EVENT, the thing on the schedule. You already met menang and kalah for how one ends; this is the noun they attach to. For a race or a school competition the word is lomba instead." },
        { id: "id-u41l1-pemain", type: "vocab", front: "pemain", reading: "pemain", meaning: "a player", example: { jp: "Pemain itu paling tinggi di dalam tim kami.", en: "That player is the tallest in our team." }, accept: ["a member of a team", "someone who plays", "a squad player"], drill: { jp: "Pemain baru itu berlari sangat cepat", en: "That new player runs very fast" }, hint: "puh-MAH-een, three syllables. The pe- prefix makes the PERSON who does a thing, off bermain, to play — the same shape as penulis off writing and penjual off selling. It works for a musician and an actor too, not only for sport." },
        { id: "id-u41l1-pelatih", type: "vocab", front: "pelatih", reading: "pelatih", meaning: "a coach", example: { jp: "Pelatih kami sangat keras tetapi adil.", en: "Our coach is very hard on us but fair." }, accept: ["a trainer", "the person who trains a team", "a team manager"], drill: { jp: "Pelatih itu menunjuk pemain yang paling baik", en: "That coach pointed at the best player" }, hint: "puh-lah-TEEH, the final h a soft breath. Same pe- shape as pemain, off the root latih, to drill someone. Not an atasan, a boss at work — a pelatih trains you to do a thing, and the word covers a driving instructor as readily as a football coach." },
        { id: "id-u41l1-wasit", type: "vocab", front: "wasit", reading: "wasit", meaning: "a referee", example: { jp: "Wasit itu melihat pemain yang melanggar aturan.", en: "The referee saw the player who broke the rules." }, accept: ["an umpire", "the official in charge", "the match official"], drill: { jp: "Wasit berdiri di tengah lapangan", en: "The referee stands in the middle of the field" }, hint: "WAH-sit. An Arabic loan, and the root sense is the one in the middle — the neutral party. It is the word for every sport and also for a neutral go-between in an argument, which is where the borrowing came from." },
      ],
    },
    {
      id: "id-u41l2",
      unit: 41,
      lesson: 2,
      title: "Sepak bola dan bulu tangkis",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name Indonesia's two biggest sports, the ball and the goal they are played at, and the keep-fit class you do without either.",
      items: [
        { id: "id-u41l2-bola", type: "vocab", front: "bola", reading: "bola", meaning: "a ball", example: { jp: "Anak kecil itu melempar bola ke atas.", en: "That small child threw the ball upwards." }, accept: ["a ball you kick", "a ball you throw", "a round ball"], drill: { jp: "Bola itu jatuh di bawah meja", en: "That ball fell under the table" }, hint: "BOH-la. Any ball at all, and it is also the shape — bola bumi is a globe. You already know bulat for round; bola is the object, bulat is the quality. ⚠️ The compound sepak bola in the next card contains this word, so listen for whether a speaker means the ball or the game." },
        { id: "id-u41l2-sepakbola", type: "vocab", front: "sepak bola", reading: "sepakbola", meaning: "football", example: { jp: "Sepak bola adalah olahraga yang paling terkenal di Indonesia.", en: "Football is the most famous sport in Indonesia." }, accept: ["soccer", "the game of football", "association football"], drill: { jp: "Mereka bermain sepak bola di lapangan sekolah", en: "They play football on the school field" }, hint: "SEH-pak BOH-la, two words with a space, always. Sepak is to kick with the side of the foot — the same idea as menendang, which you know, but sepak is the older word and only survives in fixed phrases like this one. Written as two words; never sepakbola." },
        { id: "id-u41l2-gol", type: "vocab", front: "gol", reading: "gol", meaning: "a goal scored", example: { jp: "Pemain itu membuat dua gol di dalam satu pertandingan.", en: "That player scored two goals in one match." }, accept: ["a score in football", "a scored goal", "a point put past the keeper"], drill: { jp: "Gol itu membuat semua penonton berdiri", en: "That goal made all the spectators stand up" }, hint: "GOL, one syllable, hard g. Borrowed from English but only for the SCORE — the thing you aim at is gawang, the next card. ⚠️ Indonesian already has tujuan for a goal in the sense of an aim, so gol never means a purpose. Mencetak gol is the set phrase for scoring one." },
        { id: "id-u41l2-gawang", type: "vocab", front: "gawang", reading: "gawang", meaning: "the goalposts", example: { jp: "Bola itu masuk ke dalam gawang.", en: "The ball went into the goal." }, accept: ["a goalmouth", "the goal frame", "the posts"], drill: { jp: "Ada dua gawang di ujung lapangan", en: "There are two goals at the ends of the field" }, hint: "GAH-wang, ng one hum. The frame, not the score — masuk gawang is the ball going in, and gol is what the scoreboard records. The word means an archway, which is what a goal looks like from a distance." },
        { id: "id-u41l2-bulutangkis", type: "vocab", front: "bulu tangkis", reading: "bulutangkis", meaning: "badminton", example: { jp: "Bulu tangkis adalah olahraga yang membuat Indonesia terkenal.", en: "Badminton is the sport that made Indonesia famous." }, accept: ["the game of badminton", "shuttlecock badminton"], drill: { jp: "Kakak saya bermain bulu tangkis setiap hari Minggu", en: "My older sibling plays badminton every Sunday" }, hint: "BOO-loo TANG-kis, two words. Literally feather-parrying: bulu is a feather and tangkis is to fend off. This is Indonesia's strongest sport by a wide margin, so it is worth knowing even if you never play. Two words, always." },
        { id: "id-u41l2-senam", type: "vocab", front: "senam", reading: "senam", meaning: "gymnastics", example: { jp: "Ibu saya ikut senam di taman setiap pagi.", en: "My mother joins a gymnastics class in the park every morning." }, accept: ["an exercise class", "callisthenics", "a keep-fit routine"], drill: { jp: "Senam pagi membuat badan saya segar", en: "Morning exercise makes my body feel fresh" }, hint: "suh-NAHM, first e swallowed. Both competitive gymnastics and — far commoner — the group keep-fit session done to music in parks and offices all over Indonesia, senam pagi. ⚠️ Do not read enam, six, inside it: the s in front makes a different word." },
      ],
    },
    {
      id: "id-u41l3",
      unit: 41,
      lesson: 3,
      title: "Juara dan piala",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say who won the title, what they lifted for it, who beat whom, who cheated, and who merely took part.",
      items: [
        { id: "id-u41l3-juara", type: "vocab", front: "juara", reading: "juara", meaning: "a champion", example: { jp: "Tim kami menjadi juara pada tahun ini.", en: "Our team became champions this year." }, accept: ["the title holder", "a champ", "the winner of a title"], drill: { jp: "Pemain itu juara di kota kami", en: "That player is the champion in our city" }, hint: "joo-AH-ra. The TITLE, not the single win — menang is winning a match, juara is holding the crown. It also numbers the places: juara satu, dua, tiga are first, second and third, so a juara tiga has come third rather than lost." },
        { id: "id-u41l3-piala", type: "vocab", front: "piala", reading: "piala", meaning: "a trophy", example: { jp: "Piala itu ada di atas meja di kantor sekolah.", en: "The trophy is on the table in the school office." }, accept: ["a winner's cup", "a cup you lift", "silverware"], drill: { jp: "Tim kami membawa piala besar dari kota lain", en: "Our team brought a big trophy back from another city" }, hint: "pee-AH-la. The physical cup. It is also the name of a competition, exactly as English says Cup: Piala Dunia is the World Cup. ⚠️ Not a hadiah, which is any gift or prize — a piala is specifically the cup shape you hold over your head." },
        { id: "id-u41l3-medali", type: "vocab", front: "medali", reading: "medali", meaning: "a medal", example: { jp: "Dia mendapat medali karena berenang paling cepat.", en: "She got a medal for swimming the fastest." }, accept: ["a medal you win", "a sporting medal", "a medal round the neck"], drill: { jp: "Ada tiga medali di dalam kotak itu", en: "There are three medals inside that box" }, hint: "muh-DAH-lee, stress on the middle. Borrowed, but the spelling has moved far enough from English that it is worth learning as its own word — one l, final -i. Medali emas is a gold medal, and it is the word a news report uses for an Olympic count." },
        { id: "id-u41l3-mengalahkan", type: "vocab", front: "mengalahkan", reading: "mengalahkan", meaning: "to beat an opponent", example: { jp: "Tim kami mengalahkan tim mereka pada hari Sabtu.", en: "Our team beat their team on Saturday." }, accept: ["to get the better of", "to see off", "to win against"], drill: { jp: "Pemain muda itu mengalahkan pelatih kami", en: "That young player beat our coach" }, hint: "muh-nga-lah-KAHN. This is the ACTIVE twin of kalah, which you know as to be beaten — and Indonesian needs both, because kalah cannot take an object. Tim kami menang says we won; tim kami mengalahkan mereka says whom we won against. Note the k of kalah disappears under meng-." },
        { id: "id-u41l3-curang", type: "vocab", front: "curang", reading: "curang", meaning: "cheating", example: { jp: "Pemain yang curang tidak boleh ikut pertandingan.", en: "A player who cheats may not join the match." }, accept: ["unfair in play", "dishonest in a game", "crooked"], drill: { jp: "Wasit tahu tim itu curang", en: "The referee knew that team was cheating" }, hint: "CHOO-rang — c is CH, ng one hum. The exact opposite of adil, fair, and narrower than bohong or menipu: curang is breaking the rules of a game or a deal specifically. Berbuat curang is the full phrase for committing a foul." },
        { id: "id-u41l3-peserta", type: "vocab", front: "peserta", reading: "peserta", meaning: "a participant", example: { jp: "Semua peserta harus datang pada jam tujuh pagi.", en: "All participants must come at seven in the morning." }, accept: ["an entrant", "someone taking part", "a competitor"], drill: { jp: "Ada banyak peserta dari sekolah lain", en: "There are many participants from other schools" }, hint: "puh-SER-ta. Another pe- person-word, and it is not only for sport — the peserta of a meeting, a course or an exam. ⚠️ The word serta, and also, hides inside it but is not related in use: a peserta takes part, serta joins two things in a sentence." },
      ],
    },
    {
      id: "id-u41l4",
      unit: 41,
      lesson: 4,
      title: "Permainan dan catur",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name the games played sitting down, move a piece forward or back, and concede when you are beaten.",
      items: [
        { id: "id-u41l4-permainan", type: "vocab", front: "permainan", reading: "permainan", meaning: "a game", example: { jp: "Permainan itu sangat susah untuk anak kecil.", en: "That game is very difficult for a small child." }, accept: ["a round of play", "a pastime with rules", "a game with rules"], drill: { jp: "Permainan ini butuh dua orang saja", en: "This game needs only two people" }, hint: "per-mah-EE-nan. The per--an noun off bermain, to play — so it is the game as a THING WITH RULES, where pertandingan is a specific fixture between two sides. A hobi is anything you do for pleasure; a permainan has rules you can break." },
        { id: "id-u41l4-catur", type: "vocab", front: "catur", reading: "catur", meaning: "chess", example: { jp: "Ayah saya bermain catur dengan rekan di kantor.", en: "My father plays chess with a colleague at the office." }, accept: ["the game of chess", "a chess game"], drill: { jp: "Catur adalah permainan yang paling lama", en: "Chess is the longest game" }, hint: "CHAH-toor, c is CH. From Sanskrit catur, four — after the four arms of an ancient Indian army, which is where chess comes from. Papan catur is the board. It is a serious pastime in Indonesia and you will see it played on pavements everywhere." },
        { id: "id-u41l4-kartu", type: "vocab", front: "kartu", reading: "kartu", meaning: "a playing card", example: { jp: "Mereka bermain kartu di dalam rumah karena hujan.", en: "They played cards indoors because it was raining." }, accept: ["a card", "a card from a pack", "a deck card"], drill: { jp: "Ada kartu di bawah kursi itu", en: "There is a card under that chair" }, hint: "KAR-too. Every flat card, not only the playing kind: kartu nama is a business card and kartu kredit a credit card, both everyday words. Main kartu is to play cards. ⚠️ The plastic sort you carry and the paper sort you deal are the same word." },
        { id: "id-u41l4-maju", type: "vocab", front: "maju", reading: "maju", meaning: "to move forward", example: { jp: "Pemain itu maju ke depan dan menendang bola.", en: "That player moved forward and kicked the ball." }, accept: ["to advance", "to step up", "to make progress"], drill: { jp: "Mobil itu maju sedikit saja", en: "That car moved forward just a little" }, hint: "MAH-joo. Physical forward motion, and also progress in the abstract — negara yang maju is a developed country, and maju! is the shout for go on. Its exact opposite is mundur, the next card. Not bergerak, which is simply to move at all." },
        { id: "id-u41l4-mundur", type: "vocab", front: "mundur", reading: "mundur", meaning: "to move backwards", example: { jp: "Kami mundur karena bola itu datang sangat cepat.", en: "We moved back because the ball was coming very fast." }, accept: ["to retreat", "to back up", "to go into reverse"], drill: { jp: "Mobil itu mundur ke pinggir jalan", en: "That car backed up to the side of the road" }, hint: "MOON-door. The mirror of maju, and used for a reversing car as readily as for a retreating army. A third sense you will hear on the news: mundur means to resign or step down from a post — literally to move back out of it." },
        { id: "id-u41l4-menyerah", type: "vocab", front: "menyerah", reading: "menyerah", meaning: "to give up", example: { jp: "Tim kami tidak mau menyerah sebelum pertandingan selesai.", en: "Our team did not want to give up before the match was over." }, accept: ["to surrender", "to throw in the towel", "to admit defeat"], drill: { jp: "Peserta itu menyerah karena sangat lelah", en: "That entrant gave up because he was very tired" }, hint: "muh-nyuh-RAH — ny is one sound, the trap from unit 1. Built on serah, to hand over, so it is handing yourself over: giving in to an opponent, to an illness or to a problem. Not gagal, which is failing at something you kept trying; menyerah is stopping." },
      ],
    },
  ],
};
