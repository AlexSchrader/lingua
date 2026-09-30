// ID Unit 50 — Perlu, nyaman, dan hidup ("Needed, comfortable, alive") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 3 (u41–u50), the LAST unit of the A2 band. unit1.js's 12 conventions
// and unit21.js's 10 A2 conventions BIND this file. RETITLED AND RETHEMED from
// "Vocabulary 11 (A2)".
//
// WHAT THIS UNIT IS FOR, said plainly: it is the CLOSING SWEEP of the band. The
// scaffold's coverage slots exist so that the high-frequency words no theme
// happens to claim still get taught, and after nine themed units this is what was
// measurably left over — including the last unspent entries on block 1's reserved
// list. Nothing here is filler; each of the four lessons is a real cluster:
//   l1  needing, joining in, being alive, finishing, getting hold of someone
//   l2  how a thing feels or holds up — the last of the reserved adjectives
//   l3  people in organised groups — a group, its members, its chair and deputy
//   l4  the six professions A1 and u48's trades lesson both left out
//
// ⚠️ WORDS TAKEN FROM BLOCK 1's RESERVED LIST HERE: `butuh` · `perlu` · `ikut` ·
// `berisi` (carded in u49l4) · `nyaman` · `segar` · `rendah`. Block 1 named
// `butuh`/`perlu` as the worst gap of the set — "A1 has only `harus`, must" — and
// they open the unit. Flagged in the hand-back.
//
// ⚠️ `perlu` AND `butuh` ARE BOTH CARDED, AND THAT IS A CONVENTION-3 JUDGEMENT, NOT
// AN OVERSIGHT. Convention 3 forbids a second card for a register variant of ONE
// word. These are two words: `perlu` is a STATIVE — tidak perlu, there is no need,
// with no subject required — while `butuh` is a TRANSITIVE VERB with a needer and
// a thing needed: saya butuh uang. An English speaker who learns only one WILL
// produce the wrong one, which is exactly the test A6 applies to the me-/ber-
// valency pair. Different glosses ("necessary" vs "to need"), adjacent cards, and
// each hint names the other — the same treatment block 1 gave `tahu`/`kenal`.
//
// ⚠️ ONE WORD WAS MOVED OUT OF THIS UNIT FOR A REASON NO TOOL WOULD CATCH.
// `pelayan` (a waiter) was to be a profession card here and `nelayan` (a fisherman)
// is in u48l4. They differ by ONE LETTER. Since choice-card distractors are drawn
// from nearby items, shipping both would have manufactured a trap rather than
// taught anything. `pelayan` is left for a later band; see unit48.js.
//
// AFFIX ROOTS STRIPPED AND GREPPED BY HAND (convention 3):
//   menyelesaikan → selesai  ⚠️ `selesai` IS taught ("finished", u13l1). This is the
//     me-…-kan valency pair A6 requires to be carded twice: `selesai` is the work
//     BEING done, `menyelesaikan` is you finishing it. Drill-safe, and measured
//     rather than assumed: "menyelesaikan" does NOT contain the string "selesai" at
//     all (its only `s` after the prefix is followed by `a`), so neither card can
//     touch the other's blank.
//   menghubungi → hubung  root not taught; `menghubungkan` (u43l3) is the other card
//     off it — the -kan/-i pair, in a different unit. -kan joins two THINGS, -i
//     reaches a PERSON, and each hint names the other. Neither form whole-word-
//     contains the other.
//   bergabung → gabung  root not taught.
//   ketua     → tua     ⚠️ `tua` IS taught ("old", u10l3). Carded anyway: old does
//     not give you chairperson, though the history is that the elder chairs the
//     meeting. Drill-safe — "ketua" contains "tua" at index 2, preceded by `e`.
//   pemimpin  → pimpin   root not taught.
//   penulis   → tulis    ⚠️ `menulis` (u18l3) is taught. pe- agent noun, the
//     `pelajar`/`mengajar` precedent. Neither whole-word-contains the other.
//   pelukis   → lukis    root not taught.
//   pengacara → acara    ⚠️ `acara` IS taught ("an event", u9l4). Carded anyway —
//     nobody who knows "an event" would guess "a lawyer". Drill-safe: "pengacara"
//     holds "acara" at index 4, preceded by `g`.
//   seniman · wartawan · insinyur · anggota · kelompok · wakil · perlu · butuh ·
//   ikut · hidup · nyaman · segar · rendah · licin · rapuh · utuh — all roots.
//
// ⚠️ GLOSS TRAPS ROUTED AROUND (A2 convention A4, measured through `checkMeaning`):
//   `pendek` (u10l1) accepts **"low"**        → `rendah` is "low in height"
//   `halus` (u30l3) IS **"smooth"**           → `licin` is "slippery"
//   `menyalakan` (u42l2, mine) is "to switch on" → `hidup` accepts "switched on",
//       which is a different string; both were checked, not assumed
//   `bergabung` is "to join"                  → `ikut` accepts "to join in"
//   `koran` (u26l2) accepts **"the press"**   → `wartawan` is "a member of the press"
//
// ⛔ NOT CARDED: `lemah` (weak) · `bekas` (second-hand) · `singkat` (brief) ·
// `repot` (a bother) · `sembarang` (any old) — all genuinely free and genuinely
// useful, but there were 24 slots and these lost on frequency. They are the best
// remaining candidates for a B1 coverage unit and are recorded here so the next
// crew does not have to re-measure. `sopan` (polite) and `bahagia` (happy) are on
// block 1's reserved list and are LEFT FOR BLOCK 2 — politeness and emotion are
// its domains, not this block's.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT50 = {
  id: "id-u50",
  lang: "id",
  title: "Perlu, nyaman, dan hidup",
  order: 50,
  stage: "a2",
  lessons: [
    {
      id: "id-u50l1",
      unit: 50,
      lesson: 1,
      title: "Perlu dan butuh",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say what is needed and who needs it, come along with someone, tell whether a thing is still alive, get a job finished, and reach a person.",
      items: [
        { id: "id-u50l1-perlu", type: "vocab", front: "perlu", reading: "perlu", meaning: "necessary", example: { jp: "Tidak perlu membayar untuk kelas itu.", en: "It is not necessary to pay for that class." }, accept: ["needed", "called for", "worth doing"], drill: { jp: "Kami perlu alat baru di pabrik", en: "We need a new tool at the factory" }, hint: "PUHR-loo, first e swallowed. ⚠️ A STATIVE: tidak perlu on its own means there is no need, with nobody mentioned. Harus, which you know, is MUST — an obligation; perlu is merely NECESSARY. The next card, butuh, is the version with a person doing the needing." },
        { id: "id-u50l1-butuh", type: "vocab", front: "butuh", reading: "butuh", meaning: "to need", example: { jp: "Saya butuh uang untuk sekolah.", en: "I need money for school." }, accept: ["to require", "to be short of", "to have need of"], drill: { jp: "Dia butuh obat baru dari apotek", en: "He needs new medicine from the pharmacy" }, hint: "BOO-tooh. ⚠️ The pair to perlu and the split matters: butuh takes a PERSON as its subject and a thing after it — saya butuh air. Perlu describes the situation. Say saya perlu air and you will be understood, but butuh is what a speaker actually reaches for. Kebutuhan is a need." },
        { id: "id-u50l1-ikut", type: "vocab", front: "ikut", reading: "ikut", meaning: "to come along", example: { jp: "Kamu mau ikut ke pasar?", en: "Do you want to come along to the market?" }, accept: ["to join in", "to tag along", "to go with someone"], drill: { jp: "Dia ikut kami ke pantai kemarin", en: "He came along with us to the beach yesterday" }, hint: "EE-koot. One of the most-used words in casual Indonesian: mau ikut? is the standard invitation, and ikut! is yes, I'm in. It also means to follow a rule — ikut aturan. Mengikuti is the formal transitive form." },
        { id: "id-u50l1-hidup", type: "vocab", front: "hidup", reading: "hidup", meaning: "alive", example: { jp: "Nenek saya masih hidup dan sehat.", en: "My grandmother is still alive and healthy." }, accept: ["living", "switched on", "not dead"], drill: { jp: "Pohon itu masih hidup setelah banjir", en: "That tree is still alive after the flood" }, hint: "HEE-doop. ⚠️ The exact opposite of mati, which you met for a light going dead — and it covers both senses the same way: a person can be hidup and so can a machine that is running. It is also the NOUN for life: hidup saya, my life. Kehidupan is life in the abstract." },
        { id: "id-u50l1-menyelesaikan", type: "vocab", front: "menyelesaikan", reading: "menyelesaikan", meaning: "to get something finished", example: { jp: "Saya menyelesaikan pekerjaan itu pagi ini.", en: "I finished that job this morning." }, accept: ["to finish a task off", "to see a thing through", "to wrap up"], drill: { jp: "Dia menyelesaikan semua soal ujian", en: "He finishes all the exam questions" }, hint: "muh-nyuh-luh-SAH-ee-kan — six syllables, the longest word in the unit. Built on selesai, which you know as finished. ⚠️ The split is the point: pekerjaan itu selesai means the job IS done; saya menyelesaikan pekerjaan means I DID it. Indonesian marks who acted; English lets you dodge it." },
        { id: "id-u50l1-menghubungi", type: "vocab", front: "menghubungi", reading: "menghubungi", meaning: "to get in touch with", example: { jp: "Saya menghubungi dokter pagi ini.", en: "I contacted the doctor this morning." }, accept: ["to contact", "to reach a person", "to be in touch with"], drill: { jp: "Dia menghubungi pemilik rumah itu", en: "He contacts that house's owner" }, hint: "muhng-hoo-BOONG-ee. ⚠️ You already met menghubungkan, to connect two things. Same root, and the last syllable decides everything: -kan joins THINGS, -i reaches a PERSON. Menghubungi always takes someone you can talk to. Hubungan is the relationship or connection." },
      ],
    },
    {
      id: "id-u50l2",
      unit: 50,
      lesson: 2,
      title: "Nyaman dan segar",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Describe how a thing feels to be around and how well it is holding up — comfortable, fresh, low, slippery, fragile, or still whole.",
      items: [
        { id: "id-u50l2-nyaman", type: "vocab", front: "nyaman", reading: "nyaman", meaning: "comfortable", example: { jp: "Kursi itu nyaman untuk bekerja.", en: "That chair is comfortable for working." }, accept: ["at ease", "pleasant to be in", "cosy"], drill: { jp: "Kamar baru ini nyaman dan bersih", en: "This new room is comfortable and clean" }, hint: "NYAH-man — ny one sound. It covers physical comfort and being at ease in a situation alike: tidak nyaman means uncomfortable in either sense. Senang, which you know, is HAPPY; nyaman is comfortable, and a place can be nyaman while you are not senang." },
        { id: "id-u50l2-segar", type: "vocab", front: "segar", reading: "segar", meaning: "fresh", example: { jp: "Sayur di pasar itu segar.", en: "The vegetables at that market are fresh." }, accept: ["newly made", "crisp and new", "refreshing"], drill: { jp: "Air segar itu datang dari gunung", en: "That fresh water comes from the mountain" }, hint: "suh-GAHR, hard g, first e swallowed. Fresh food, fresh air, and a person feeling refreshed — badan saya segar. Baru, which you know, is NEW in the sense of recently made or bought; segar is new in the sense of not yet gone off or gone stale." },
        { id: "id-u50l2-rendah", type: "vocab", front: "rendah", reading: "rendah", meaning: "low in height", example: { jp: "Meja itu rendah untuk anak kecil.", en: "That table is low for a small child." }, accept: ["near the ground", "not high", "at a low level"], drill: { jp: "Dinding rendah itu ada di belakang", en: "That low wall is at the back" }, hint: "ruhn-DAH. ⚠️ The exact opposite of tinggi, high — where pendek, which you know, is the opposite of panjang, long. So a low table is rendah and a short person is pendek; swapping them is the commonest mistake here. Rendah hati, low-hearted, means humble." },
        { id: "id-u50l2-licin", type: "vocab", front: "licin", reading: "licin", meaning: "slippery", example: { jp: "Lantai itu licin setelah hujan.", en: "That floor is slippery after the rain." }, accept: ["smooth and sliding", "greasy underfoot", "slick"], drill: { jp: "Jalan itu licin karena hujan besar", en: "That road is slippery because of heavy rain" }, hint: "LEE-cheen — c is CH. ⚠️ Halus, which you know, is smooth to the TOUCH and is a good thing; licin is smooth enough to SLIP on and is usually a warning. Awas licin is the sign on a wet floor. Of a person it means slippery in the figurative sense too." },
        { id: "id-u50l2-rapuh", type: "vocab", front: "rapuh", reading: "rapuh", meaning: "fragile", example: { jp: "Kursi itu rapuh dan mudah patah.", en: "That chair is fragile and snaps easily." }, accept: ["brittle", "easily broken", "delicate"], drill: { jp: "Kayu rapuh itu patah dengan mudah", en: "That brittle wood snaps easily" }, hint: "RAH-pooh. It describes what a thing IS — liable to break — where patah, which you now know, is what has already happened to it. Lemah is weak of a person or a force; rapuh is brittle of a material. It also works on a relationship: hubungan yang rapuh." },
        { id: "id-u50l2-utuh", type: "vocab", front: "utuh", reading: "utuh", meaning: "in one piece", example: { jp: "Gelas itu masih utuh setelah gempa.", en: "That glass is still in one piece after the earthquake." }, accept: ["not damaged", "intact", "complete and unbroken"], drill: { jp: "Rumah itu utuh setelah banjir besar", en: "That house is intact after the big flood" }, hint: "OO-tooh. Undamaged and complete. ⚠️ Semua and seluruh, which you know, mean ALL of a set — every one of them; utuh means ONE thing that has not been broken or reduced. A cake nobody has cut is utuh; all the cakes on the table are semua kue." },
      ],
    },
    {
      id: "id-u50l3",
      unit: 50,
      lesson: 3,
      title: "Kelompok dan anggota",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about an organised group — the group itself, its members, joining it, and the two people at the top of it.",
      items: [
        { id: "id-u50l3-kelompok", type: "vocab", front: "kelompok", reading: "kelompok", meaning: "a group", example: { jp: "Kelompok kami ada lima orang.", en: "Our group has five people." }, accept: ["a set of people", "a working party", "a cluster"], drill: { jp: "Kelompok itu bekerja di perpustakaan", en: "That group works in the library" }, hint: "kuh-LOM-pok. ⚠️ Tim, which you know, is a team with a shared task — usually sport or work. A kelompok is any grouping, including one a teacher makes up on the spot: kerja kelompok is group work. Berkelompok means in groups." },
        { id: "id-u50l3-anggota", type: "vocab", front: "anggota", reading: "anggota", meaning: "a member", example: { jp: "Dia anggota kelompok kami.", en: "He is a member of our group." }, accept: ["one of a group", "a person on the list", "a participant"], drill: { jp: "Semua anggota datang ke rapat pagi", en: "All the members came to the morning meeting" }, hint: "ahng-GOH-ta — ngg is the hum plus a hard g. It needs no word for of: anggota kelompok, a member of the group. ⚠️ Its older meaning is a LIMB of the body, which is why anggota badan is the phrase for body parts — worth knowing so the word does not surprise you in a health text." },
        { id: "id-u50l3-bergabung", type: "vocab", front: "bergabung", reading: "bergabung", meaning: "to join", example: { jp: "Saya mau bergabung dengan kelompok itu.", en: "I want to join that group." }, accept: ["to become a member", "to team up", "to come together with"], drill: { jp: "Dia bergabung dengan tim baru itu", en: "He joins that new team" }, hint: "buhr-gah-BOONG. It takes dengan after it: bergabung dengan kami. ⚠️ Ikut, from this unit's first lesson, is coming ALONG on one occasion; bergabung is becoming part of something. Menggabungkan is to merge two things together." },
        { id: "id-u50l3-ketua", type: "vocab", front: "ketua", reading: "ketua", meaning: "a chairperson", example: { jp: "Ketua kelompok itu sangat sabar.", en: "That group's chairperson is very patient." }, accept: ["the head of a group", "a chairman", "the person in charge"], drill: { jp: "Ketua rapat itu berbicara pelan-pelan", en: "That meeting's chair speaks slowly" }, hint: "kuh-TOO-a. ⚠️ Built on tua, old, which you know — the elder chairs the meeting, and that is history rather than a rule you can reuse. It is the title on any committee, class or association: ketua kelas, the class representative. Its second in command is the next card." },
        { id: "id-u50l3-wakil", type: "vocab", front: "wakil", reading: "wakil", meaning: "a deputy", example: { jp: "Wakil ketua itu masih muda.", en: "That deputy chair is still young." }, accept: ["a second in command", "a stand-in", "a representative"], drill: { jp: "Dia menjadi wakil di kelompok kami", en: "He became the deputy in our group" }, hint: "WAH-keel. Two senses joined by one idea — someone who stands in your place: wakil ketua is a vice-chair, and wakil rakyat is an elected representative. Mewakili is to represent. Arabic in origin, like many words of office in Indonesian." },
        { id: "id-u50l3-pemimpin", type: "vocab", front: "pemimpin", reading: "pemimpin", meaning: "a leader", example: { jp: "Pemimpin negara itu sangat terkenal.", en: "That country's leader is very famous." }, accept: ["the one who leads", "a chief", "the head of an organisation"], drill: { jp: "Pemimpin kelompok kami sangat pintar", en: "Our group's leader is very clever" }, hint: "puh-MEEM-peen. From pimpin, to lead, in the pe- doer shape. ⚠️ A ketua holds a POST — chair of this committee; a pemimpin has the QUALITY of leading, which is why a country has a pemimpin and a meeting has a ketua. Kepemimpinan is leadership." },
      ],
    },
    {
      id: "id-u50l4",
      unit: 50,
      lesson: 4,
      title: "Penulis dan seniman",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name the professions the course has not yet covered — the people who write, paint, report, argue a case, or build things for a living.",
      items: [
        { id: "id-u50l4-penulis", type: "vocab", front: "penulis", reading: "penulis", meaning: "a writer", example: { jp: "Penulis buku itu sudah tua.", en: "That book's writer is already old." }, accept: ["an author", "someone who writes", "a writer by trade"], drill: { jp: "Penulis itu menulis cerita setiap hari", en: "That writer writes stories every day" }, hint: "puh-NOO-lees. From menulis, to write, which you know — pe- in front of a verb names the one who does it, the same shape as pelajar and pemilik. Penulis covers a novelist, a journalist's byline and a scriptwriter alike. Tulisan is the writing itself." },
        { id: "id-u50l4-seniman", type: "vocab", front: "seniman", reading: "seniman", meaning: "an artist", example: { jp: "Seniman itu tinggal di desa kecil.", en: "That artist lives in a small village." }, accept: ["a creative artist", "someone who makes art", "an art practitioner"], drill: { jp: "Seniman itu membuat gambar besar", en: "That artist makes big pictures" }, hint: "suh-NEE-man. From seni, art, plus -man, a borrowed ending that names a practitioner — the same -man is in wartawan's cousin budayawan, a cultural figure. It covers any art form, not only painting: a musician or a dancer is a seniman too." },
        { id: "id-u50l4-pelukis", type: "vocab", front: "pelukis", reading: "pelukis", meaning: "a painter", example: { jp: "Pelukis itu membuat gambar bunga.", en: "That painter makes pictures of flowers." }, accept: ["a picture painter", "someone who paints", "an artist with a brush"], drill: { jp: "Pelukis muda itu bekerja di kota", en: "That young painter works in the city" }, hint: "puh-LOO-kees. From lukis, to paint a picture, in the pe- doer shape. ⚠️ Specifically an ARTIST who paints — a decorator who paints walls is a tukang cat, using tukang from the trades lesson. Lukisan is a painting." },
        { id: "id-u50l4-wartawan", type: "vocab", front: "wartawan", reading: "wartawan", meaning: "a journalist", example: { jp: "Wartawan itu menulis berita untuk koran.", en: "That journalist writes news for the paper." }, accept: ["a reporter", "a news writer", "a member of the press"], drill: { jp: "Wartawan datang ke rapat pemerintah itu", en: "Journalists came to that government meeting" }, hint: "wahr-tah-WAHN. From warta, news, with the same -wan ending as seniman — so it is literally a news-person. You already know berita for news; warta is its older, more literary twin and survives mainly inside this word." },
        { id: "id-u50l4-pengacara", type: "vocab", front: "pengacara", reading: "pengacara", meaning: "a lawyer", example: { jp: "Pengacara itu tahu hukum dengan baik.", en: "That lawyer knows the law well." }, accept: ["an advocate", "a legal representative", "someone who argues a case"], drill: { jp: "Pengacara kami datang ke kantor pagi", en: "Our lawyer came to the office this morning" }, hint: "puhng-ah-CHAH-ra — c is CH. ⚠️ It LOOKS like it is built on acara, an event, which you know — and historically it is, an acara being a matter brought before a court. Do not try to read the modern meaning off the parts; learn it whole. Hukum, the law, is its subject." },
        { id: "id-u50l4-insinyur", type: "vocab", front: "insinyur", reading: "insinyur", meaning: "an engineer", example: { jp: "Insinyur itu bekerja di pabrik besar.", en: "That engineer works at a big factory." }, accept: ["a qualified engineer", "a technical professional", "a works engineer"], drill: { jp: "Insinyur muda itu memperbaiki mesin lama", en: "That young engineer repairs the old machine" }, hint: "een-see-NYOOR — the ny is one sound, so it is three syllables. Dutch ingenieur with the spelling brought into line with Indonesian sound rules. It is also a TITLE, abbreviated Ir. before a name, so you will see it on business cards and nameplates." },
      ],
    },
  ],
};
