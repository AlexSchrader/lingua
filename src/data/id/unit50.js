// ID Unit 50 — Kejahatan dan keadilan ("Crime and justice") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 3 (u41–u50) — THE LAST A2 UNIT. The 12 conventions in unit1.js and
// the 10 A2 conventions in unit21.js BIND this file. Read both before editing.
//
// ⚠️ RETHEMED 2026-09-30. This slot was authored on 2026-09-29 as
// "Perlu, nyaman, dan hidup", and it had two independent defects, both measured:
//   1. **It duplicated twelve fronts** across six other units, which is half the
//      unit: `perlu` · `butuh` · `menyelesaikan` (u37), `kelompok` · `anggota`
//      (u32), `menghubungi` · `penulis` · `wartawan` (u33), `rendah` (u36),
//      `ikut` (u39), `nyaman` · `segar` (u40). Block 2 (u31–u40) merged to `main`
//      first, so every one of those words is taught EARLIER and stays taught.
//   2. **Its title overlapped u37 "Perlu, layak, dan sebab" on the necessity
//      lane**, and three of its twelve duplicates (`perlu`, `butuh`,
//      `menyelesaikan`) WERE that lane. The old slot was not a theme; it was a
//      leftovers bin, which is how it collected twelve collisions in the first
//      place. Patching twelve cards would have left the bin.
// So the slot is rethemed in full. Nothing is lost — all twelve words above are
// still in the course, one to eighteen units earlier.
//
// THE HOLE THIS FILLS, measured against all 1200 authored cards. Indonesian A1+A2
// taught a learner to say `aman`, `bahaya`, `aturan`, `melanggar`, `adil`,
// `jujur`, `bohong`, `menipu`, `menuduh`, `hukum`, `pemerintah` and `tentara` —
// **and gave them no word for police, a thief, to steal, a court, a judge, a
// witness, a victim, prison, a punishment, or a right.** A course that can say
// "that is dangerous" and "he is lying" and cannot say "I want to report a theft"
// or "the police station" has the German `die Frage` shape: the judgements without
// the institutions they are about. This is standard A2 CEFR territory — reporting
// a loss, filing a complaint, reading a prohibition sign — and it was empty.
//
// ⚠️ IT IS THE **ENFORCEMENT AND JUSTICE** LANE, AND IT STAYS OFF u47'S
// **STATE** LANE — this was the explicit constraint on the retheme and it is
// worth naming so the next seat does not blur them. u47l4 owns the apparatus of
// GOVERNMENT: `pemerintah` · `hukum` · `presiden` · `tentara` · `menteri` ·
// `pemilu`. This unit owns what happens when a law is broken: the police, the
// crime, the court, the sentence. Two fronts sit on the boundary and both are
// resolved by root, not by feel:
//   • `hukum` (u47, the law) stays there; this unit cards **`hukuman`** (a court
//     sentence). Two cards off root `hukum`, A6-clean, and `hukuman` does not
//     whole-word-contain `hukum` (the trailing `a` is a letter).
//   • `adil` (u32, fair) stays there; this unit cards **`pengadilan`** (a court of
//     law). Two off root `adil`, and "fair" does not give you "courthouse".
//
// ⚠️ `polisi` IS CARDED, AGAINST A10'S NAMED COGNATE TRAP, AND HERE IS
// THE REASONING. A10 lists `polisi` among the `televisi`/`bus` copy-task
// cognates and declines `hotel` on that basis. The rule A10 actually states is
// **"front and the English gloss are the same string"** — and it then says the
// cognates that DO differ in spelling (`tiket` · `paspor` · `turis` · `stasiun`)
// "are carded and are fine". `polisi` / *police* differ in spelling, so it falls
// on the carded side of A10's own line; it was listed on the wrong side of it.
// Weighed against that: **1200 cards with no word for the police is a hole a
// learner hits on day one in Indonesia.** The card is glossed "the police" and
// its hint carries the real teaching — that one word covers the force, an
// individual officer, and the address `Pak Polisi` — which is not a copy task.
// Recorded here rather than left as a silent disagreement with A10.
//
// ⛔ DECLINED, EACH FOR A NAMED REASON — do not read these as holes:
//   `kejahatan`   the UNIT is named for it, but `jahat` is the card. ke--an off
//                 `jahat` reads straight off the parts, which A6 says gets no
//                 second card. A unit title is not a front.
//   `keadilan`    same shape off `adil`, and root `adil` already carries this
//                 unit's `pengadilan`. Three would be at A6's ceiling for a word
//                 the learner can decode.
//   `melarang`    **ALREADY TAUGHT at u22l2** ("to forbid"). Its noun `larangan`
//                 was considered and declined: a nominalisation that adds nothing
//                 (A6). The sign form is named in `izin`'s hint instead.
//   `dilarang`    a di- PASSIVE. Convention 11 and A6 defer di- to B1 as a
//                 pattern, and this is the single commonest one on Indonesian
//                 signs — so it is worth a B1 card next to the rule, not a
//                 smuggled exception here. Named in `izin`'s hint.
//   `maling`      the colloquial thief. `pencuri` is carded; convention 7 and A9
//                 keep the standard form where both are understood.
//   `perampok`    third card off root `rampok` after this unit's `merampok`, and
//                 an agent noun the learner can read off `pencuri`'s pattern.
//   `denda`       **ALREADY TAUGHT at u48l3** ("a monetary penalty"), which is
//                 also why `hukuman`'s accept[] carries no form of "a penalty".
//   `menangkap`   **ALREADY TAUGHT at u39l3** ("to catch"). The arrest sense is
//                 named in `polisi`'s hint.
//   `narkoba`     out on content grounds, not vocabulary ones.
//   `tahanan` · `terdakwa` · `jaksa` · `perkara` — B1 register. A learner who
//                 needs `polisi` does not yet need a prosecutor.
//
// ⚠️ WHOLE-WORD HAZARDS CHECKED THROUGH THE REAL `findWholeWord`, not by
// eye (A7 — lint uses `.includes()`, the router does not):
//   `polisi`      — `isi` (u26, the contents) sits inside at index 3, preceded by
//                   `l`, a LETTER. No match either way.
//   `melaporkan`  — does NOT contain `laporan` (u24): the string inside it is
//                   `laporkan`, not `laporan`. Nothing to check.
//   `kehilangan`  — contains `hilang` (u25) at index 2, preceded by `e`. No match.
//   `bersalah`    — contains `salah` (u14) at index 3, preceded by `r`. No match.
//   `hukuman`     — contains `hukum` (u47) at index 0 FOLLOWED by `a`, a letter.
//                   No match.
//   `pengadilan`  — contains `adil` (u32) at index 4, preceded by `g`, and `di`
//                   (u3) at index 5, preceded by `a`. Neither matches.
//   `izin`        — `mengizinkan` (u22) contains it at index 4, preceded by `g`.
//                   No match.
//   `keterangan`-shaped ke- words: `kasus` · `korban` · `saksi` · `hakim` ·
//   `sidang` · `penjara` · `senjata` · `jahat` · `mencuri` · `pencuri` ·
//   `merampok` · `menyelidiki` · `menuntut` · `resmi` · `sah` · `hak` · `bebas` —
//   grepped against every id front in both directions. `sah` is the one worth
//   naming: it sits inside `basah` (u8), `susah` (u10), `berusaha` (u21) and
//   `perusahaan` (u24), and in EVERY case a letter is adjacent, so no whole-word
//   match. Its own drill carries `sah` standing alone.
//
// ⚠️ ONE SAME-LESSON me-/pe- PAIR IS DELIBERATE. `mencuri` (to steal)
// and `pencuri` (a thief) sit adjacent in l2, exactly as convention 3's
// `bekerja`/`pekerjaan` pair does. Teaching them together IS the point — the pe-
// prefix turning an act into the person who does it is the most productive shape
// in the language, and a choice card offering one against the other tests it.
// Neither contains the other, so there is no router hazard.
//
// ⚠️ accept[] COLLISIONS AVOIDED BY MEASUREMENT (A4). Every one found by
// reading the earlier card's accept[], not its meaning:
//   `kanan` (u7) **IS "right"** → so `hak` is glossed **"an entitlement"**, never
//     "a right", and its hint teaches the split. This is the single worst trap in
//     the unit: "a right" normalises to "right", which is the direction card.
//   `kalimat` (u26) **IS "a sentence"** → so `hukuman` accepts "a court sentence"
//     and never the bare "a sentence".
//   `denda` (u48) accepts **"a punishment in money"** and **"a fixed penalty"** →
//     so `hukuman` accepts no form of "a penalty".
//   `menuduh` (u32) accepts **"to blame"** → so `bersalah` accepts "culpable" and
//     "responsible for the offence", never "to blame".
//   `hilang` (u25) accepts **"to be lost"** → so `kehilangan` accepts "to have
//     something stolen" and never "to be lost".
//   `laporan` (u24) accepts **"a filing"** and **"a statement of findings"** → so
//     `melaporkan` accepts "to file a report", which normalises differently.
//   `hal` (u36) **IS "a matter"** and `keadaan` (u26) **IS "a situation"** → so
//     `kasus` accepts "an incident" and "a matter under investigation", neither of
//     those.
//   `buruk` (u37) **IS "seriously bad"** → so `jahat` accepts "evil" and
//     "malicious", never any form of "bad".
//   `gratis` (u16) **IS "free of charge"** → so `bebas` is "free to go" and
//     accepts "at liberty", never a bare "free".
//   `ragu` (u21) · `menyangkal` (u49) — checked; nothing in this unit touches
//     doubt or denial.
//
// ⚠️ AND THE HAND-COMPILED LIST ABOVE STILL MISSED THREE, WHICH IS THE REAL
// LESSON. A script compared every new meaning AND accept string against every
// other one in the language, normalised the way `normalizeMeaning` actually does
// it, and caught three more in this unit alone. The trap is that
// **`normalizeMeaning` strips a leading "to " AND a leading a/an/the, so "to
// judge" and "a judge" are ONE STRING** — hand-reading compares concepts, the
// grader compares strings, and they disagree wherever a verb and a noun share a
// stem. The three:
//   `menilai` (u37) accepts **"to judge"** → normalises to "judge", so `hakim`
//     could not be "a judge". It is glossed "a judge in court".
//   `koper` (u23) and `kotak` (u27) BOTH accept **"a case"** → so `kasus` is
//     glossed "a reported case".
//   `mengizinkan` (u22) **IS "to permit"** → normalises to "permit", so `izin`
//     could not accept "a permit". It accepts "a written permission".
// **So: write the glosses, then run the comparison mechanically.** The probe is
// `scripts/tmp/a4.mjs` on this branch — untracked, twenty lines, and it found 13
// collisions across the branch that three careful hand-passes had not.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT50 = {
  id: "id-u50",
  lang: "id",
  title: "Kejahatan dan keadilan",
  order: 50,
  stage: "a2",
  lessons: [
    {
      id: "id-u50l1",
      unit: 50,
      lesson: 1,
      title: "Polisi dan laporan",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Report something to the police — name the case, who was harmed, who saw it, and say that it is being looked into.",
      items: [
        { id: "id-u50l1-polisi", type: "vocab", front: "polisi", reading: "polisi", meaning: "the police", example: { jp: "Kami pergi ke kantor polisi pada pagi itu.", en: "We went to the police station that morning." }, accept: ["a police officer", "the police force", "a policeman"], drill: { jp: "Polisi menangkap dua orang di jalan itu", en: "The police caught two people on that road" }, hint: "poh-LEE-see. One word does three jobs: the force, a single officer, and — with kantor in front — the station. Pak Polisi is how you address one, the way you learned Pak for any man you respect. ⚠️ Indonesian has no separate verb for to arrest: polisi menangkap, using menangkap, to catch." },
        { id: "id-u50l1-melaporkan", type: "vocab", front: "melaporkan", reading: "melaporkan", meaning: "to report something to the authorities", example: { jp: "Dia melaporkan masalah itu kepada polisi.", en: "He reported the problem to the police." }, accept: ["to file a report", "to notify the police", "to make a report about"], drill: { jp: "Kami melaporkan mobil yang hilang itu", en: "We reported the car that went missing" }, hint: "muh-lah-por-KAHN. Built on the same root as laporan, the written report you already know — this is the ACT of handing one in. It takes kepada for the person or office you report to. For telling a friend the news, you already have menyampaikan." },
        { id: "id-u50l1-kasus", type: "vocab", front: "kasus", reading: "kasus", meaning: "a reported case", example: { jp: "Kasus itu belum selesai sampai sekarang.", en: "That case is not finished even now." }, accept: ["an incident", "one instance of something", "a matter under investigation"], drill: { jp: "Ada dua kasus baru di daerah kami", en: "There are two new cases in our region" }, hint: "KAH-soos. A single reported instance — of a crime, an illness, a complaint. Not hal, which is a matter in the abstract, and not keadaan, which is the whole situation: a kasus has a file and a number. It is the word every news report uses." },
        { id: "id-u50l1-korban", type: "vocab", front: "korban", reading: "korban", meaning: "a victim", example: { jp: "Korban kecelakaan itu sudah masuk rumah sakit.", en: "The victim of that accident has gone into hospital." }, accept: ["a casualty", "the person harmed", "someone who suffered"], drill: { jp: "Korban banjir itu butuh makanan dan air", en: "The victims of that flood need food and water" }, hint: "KOR-ban. The person a thing happened TO, in any direction — a crime, an accident, a flood, an illness. The older sense is a sacrifice, which is why the religious holiday Idul Adha is also called Hari Raya Korban. Number is unmarked, so it is one victim or many." },
        { id: "id-u50l1-saksi", type: "vocab", front: "saksi", reading: "saksi", meaning: "a witness", example: { jp: "Polisi mencari saksi yang melihat pencuri itu.", en: "The police are looking for a witness who saw the thief." }, accept: ["someone who saw it", "an eyewitness", "a person who testifies"], drill: { jp: "Saksi itu bilang mobil itu merah dan besar", en: "The witness said that car was red and big" }, hint: "SAHK-see, the k a light catch. Someone who saw a thing and can say so. It is also the person who signs a contract or a marriage alongside you — menjadi saksi, to stand as witness. Sanskrit in origin, which is why it looks nothing like its neighbours." },
        { id: "id-u50l1-menyelidiki", type: "vocab", front: "menyelidiki", reading: "menyelidiki", meaning: "to investigate", example: { jp: "Polisi masih menyelidiki kasus yang terjadi minggu lalu.", en: "The police are still investigating the case that happened last week." }, accept: ["to look into", "to inquire into", "to dig into a case"], drill: { jp: "Mereka menyelidiki sebab kebakaran itu", en: "They are investigating the cause of that fire" }, hint: "muh-nyuh-lee-DEE-kee, five syllables and ny is one sound. Off selidik, to probe. Narrower than meneliti, which you met for academic research: menyelidiki is what police and journalists do to find out what happened. Penyelidikan is the investigation itself." },
      ],
    },
    {
      id: "id-u50l2",
      unit: 50,
      lesson: 2,
      title: "Mencuri dan kehilangan",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say that something was stolen, name the person who took it and the weapon they used, and say what you have lost.",
      items: [
        { id: "id-u50l2-mencuri", type: "vocab", front: "mencuri", reading: "mencuri", meaning: "to steal", example: { jp: "Ada orang yang mencuri sepeda saya kemarin.", en: "Somebody stole my bicycle yesterday." }, accept: ["to thieve", "to take without permission", "to make off with"], drill: { jp: "Anak itu mencuri uang dari dapur", en: "That child stole money from the kitchen" }, hint: "muhn-CHOO-ree — c is CH. Root curi, and the me- form is the one that appears in a sentence. It takes a direct object, so you always say WHAT was stolen. ⚠️ Do not confuse it with mencari, to look for, which differs by a single letter and is the word you learned first." },
        { id: "id-u50l2-pencuri", type: "vocab", front: "pencuri", reading: "pencuri", meaning: "a thief", example: { jp: "Pencuri itu masuk melalui pintu belakang.", en: "The thief got in through the back door." }, accept: ["someone who steals", "a burglar", "a robber"], drill: { jp: "Polisi sudah menangkap pencuri itu", en: "The police have already caught that thief" }, hint: "puhn-CHOO-ree. Same root as mencuri, one letter apart: me- makes the act, pe- makes the PERSON. That is the commonest word-building pair in Indonesian — you have already seen it in penulis off writing and penjual off selling. Maling is the everyday spoken word for the same thing." },
        { id: "id-u50l2-merampok", type: "vocab", front: "merampok", reading: "merampok", meaning: "to rob", example: { jp: "Dua orang merampok toko itu pada malam hari.", en: "Two people robbed that shop at night." }, accept: ["to hold up", "to raid", "to rob by force"], drill: { jp: "Mereka merampok toko di pusat kota", en: "They robbed a shop in the city centre" }, hint: "muh-ram-POK. The violent kind, where mencuri is quiet — a pencuri takes your wallet without you noticing and a perampok points at you. Its object is the PLACE or PERSON robbed, not the thing taken: merampok toko, not merampok uang." },
        { id: "id-u50l2-kehilangan", type: "vocab", front: "kehilangan", reading: "kehilangan", meaning: "to lose something", example: { jp: "Saya kehilangan dompet di dalam angkot.", en: "I lost my wallet in the minibus." }, accept: ["to have something stolen", "to suffer the loss of", "to be left without"], drill: { jp: "Dia kehilangan kunci rumah pagi ini", en: "She lost her house key this morning" }, hint: "kuh-hee-LAHNG-an. You know hilang, to go missing — that is what the OBJECT does. This is what happens to the PERSON, so the two describe one event from opposite ends: dompet saya hilang, or saya kehilangan dompet. Both are natural; the second is what you say to a police officer." },
        { id: "id-u50l2-senjata", type: "vocab", front: "senjata", reading: "senjata", meaning: "a weapon", example: { jp: "Polisi menemukan senjata di bawah tempat tidur itu.", en: "The police found a weapon under that bed." }, accept: ["arms", "something used to attack", "a means of attack"], drill: { jp: "Orang itu membawa senjata di dalam tas", en: "That person carried a weapon in a bag" }, hint: "sen-JAH-ta. Any weapon at all — a knife, a gun, a stick. Senjata api, literally fire-weapon, is a firearm, using the api you already know. It has a common figurative use too: bahasa adalah senjata, language is a weapon." },
        { id: "id-u50l2-jahat", type: "vocab", front: "jahat", reading: "jahat", meaning: "wicked", example: { jp: "Orang jahat itu sudah ada di dalam penjara sekarang.", en: "That wicked man is in prison now." }, accept: ["evil", "malicious", "cruel by nature"], drill: { jp: "Dia bukan orang jahat tetapi sering salah", en: "He is not a wicked person but he is often wrong" }, hint: "JAH-hat, two open a's. A judgement on a PERSON'S character, not on a thing's quality — buruk, which you know, is for a bad result or a bad road. Kejahatan, the crime itself, is this word with ke- and -an around it, and it is what this unit is named for." },
      ],
    },
    {
      id: "id-u50l3",
      unit: 50,
      lesson: 3,
      title: "Pengadilan dan hukuman",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Follow a case into court — the building, the judge, the hearing, the verdict, the sentence and the prison.",
      items: [
        { id: "id-u50l3-pengadilan", type: "vocab", front: "pengadilan", reading: "pengadilan", meaning: "a court of law", example: { jp: "Kasus itu sudah masuk ke pengadilan di kota kami.", en: "That case has gone to the court in our city." }, accept: ["a courthouse", "the court", "where a case is heard"], drill: { jp: "Pengadilan itu ada di pinggir jalan raya", en: "That courthouse is beside the main road" }, hint: "puh-nga-DEE-lan, five syllables. Built on adil, fair — so a pengadilan is literally the place where fairness is done. Both the building and the institution, exactly like English court. ⚠️ Knowing adil does not give you this word, which is why both are carded." },
        { id: "id-u50l3-hakim", type: "vocab", front: "hakim", reading: "hakim", meaning: "a judge in court", example: { jp: "Hakim itu mendengar semua saksi sebelum memutuskan.", en: "The judge heard every witness before deciding." }, accept: ["the person who decides a case", "a magistrate", "the judge presiding"], drill: { jp: "Hakim mendengar saksi yang pertama dengan tenang", en: "The judge heard the first witness calmly" }, hint: "HAH-keem. Arabic, from the same root as the hukum you learned for law. ⚠️ Keep it apart from wasit, which is the referee at a match — a hakim decides a legal case, a wasit decides a sporting one, and Indonesian never swaps them." },
        { id: "id-u50l3-sidang", type: "vocab", front: "sidang", reading: "sidang", meaning: "a court hearing", example: { jp: "Sidang itu mulai pada jam sembilan pagi.", en: "The hearing starts at nine in the morning." }, accept: ["a session of court", "a trial", "a formal hearing"], drill: { jp: "Sidang pertama ada di pengadilan kota", en: "The first hearing is at the city court" }, hint: "SEE-dang, ng one hum. The SESSION — one sitting of a court, and by extension any formal assembly: a parliament holds a sidang too. Not a rapat, the ordinary work meeting you already know: a sidang has an authority presiding over it." },
        { id: "id-u50l3-bersalah", type: "vocab", front: "bersalah", reading: "bersalah", meaning: "guilty", example: { jp: "Hakim bilang orang itu bersalah.", en: "The judge said that man was guilty." }, accept: ["in the wrong", "culpable", "responsible for the offence"], drill: { jp: "Dia merasa bersalah karena sudah bohong", en: "He feels guilty because he lied" }, hint: "ber-SAH-lah. The ber- form of salah, wrong — and it covers both senses English splits: guilty in the legal sense, and feeling guilty. Merasa bersalah is the second one. Tidak bersalah is the verdict of not guilty." },
        { id: "id-u50l3-hukuman", type: "vocab", front: "hukuman", reading: "hukuman", meaning: "a punishment", example: { jp: "Hukuman untuk kasus itu sangat berat.", en: "The punishment for that case is very heavy." }, accept: ["a court sentence", "what a court imposes", "retribution"], drill: { jp: "Hukuman itu tidak sesuai dengan kasus ini", en: "That punishment does not fit this case" }, hint: "hoo-KOO-man. The hukum you know is the law itself; add -an and you get what the law hands down. Berat and ringan, heavy and light, are the adjectives it takes. ⚠️ A denda, which you already learned, is one KIND of hukuman — the one paid in money." },
        { id: "id-u50l3-penjara", type: "vocab", front: "penjara", reading: "penjara", meaning: "prison", example: { jp: "Pencuri itu masuk penjara selama dua tahun.", en: "That thief went to prison for two years." }, accept: ["jail", "a gaol", "being locked up"], drill: { jp: "Penjara itu ada di luar kota", en: "That prison is outside the city" }, hint: "puhn-JAH-ra. Masuk penjara, to go to prison, is the set phrase — Indonesian uses masuk, to enter, where English says go to. Dipenjara means imprisoned, but that is a di- passive and belongs to a later band; masuk penjara says the same thing with words you already have." },
      ],
    },
    {
      id: "id-u50l4",
      unit: 50,
      lesson: 4,
      title: "Hak dan izin",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Claim what you are entitled to, ask for permission, tell an official document from an unofficial one, and say that someone is free to go.",
      items: [
        { id: "id-u50l4-hak", type: "vocab", front: "hak", reading: "hak", meaning: "an entitlement", example: { jp: "Setiap warga punya hak yang sama.", en: "Every citizen has the same entitlement." }, accept: ["a right you hold", "a legal claim", "what is due to you"], drill: { jp: "Anak punya hak untuk pergi ke sekolah", en: "A child has the right to go to school" }, hint: "HAK, one syllable, the k a light catch. ⚠️ This is right in the sense of ENTITLEMENT, and Indonesian keeps it completely separate from kanan, right as a direction, and from benar, right as in correct. Three different words where English has one. Hak asasi manusia is human rights." },
        { id: "id-u50l4-izin", type: "vocab", front: "izin", reading: "izin", meaning: "permission", example: { jp: "Saya butuh izin dari atasan saya.", en: "I need permission from my superior." }, accept: ["a written permission", "authorisation", "the go-ahead"], drill: { jp: "Mereka masuk tanpa izin dari pemilik", en: "They went in without permission from the owner" }, hint: "EE-zin. Both the permission and the piece of paper that proves it — surat izin is a permit. You already know mengizinkan, to permit; this is the noun underneath it. ⚠️ The sign you will actually read is dilarang, forbidden — dilarang parkir, dilarang merokok — which is the opposite of having izin." },
        { id: "id-u50l4-resmi", type: "vocab", front: "resmi", reading: "resmi", meaning: "official", example: { jp: "Surat itu resmi karena ada tanda dari pemerintah.", en: "That letter is official because it has a government mark on it." }, accept: ["formal", "done through the proper channels", "authorised"], drill: { jp: "Kami belum mendapat kabar resmi", en: "We have not received official word yet" }, hint: "RES-mee. Carrying the stamp of an authority — a resmi letter, a resmi language, a resmi announcement. Tidak resmi is unofficial. Keep it apart from sopan, which is being polite to a person: resmi describes the paperwork, not the manners." },
        { id: "id-u50l4-sah", type: "vocab", front: "sah", reading: "sah", meaning: "legally valid", example: { jp: "Kontrak itu sah karena semua sudah tanda tangan.", en: "That contract is valid because everyone has signed." }, accept: ["lawful", "legitimate", "legally binding"], drill: { jp: "Kartu itu tidak sah lagi sekarang", en: "That card is no longer valid now" }, hint: "SAH, one syllable, open a. Holds up in law — a sah marriage, a sah document, a sah goal in football. Tidak sah is void. ⚠️ It is a short word that hides inside longer ones you know (basah, susah, berusaha), but it is unrelated to all of them; listen for it standing alone." },
        { id: "id-u50l4-menuntut", type: "vocab", front: "menuntut", reading: "menuntut", meaning: "to demand as a right", example: { jp: "Karyawan itu menuntut gaji yang lebih baik.", en: "That employee is demanding better pay." }, accept: ["to press a claim", "to sue", "to press for"], drill: { jp: "Mereka menuntut hak yang sudah hilang", en: "They are demanding a right that was taken away" }, hint: "muh-noon-TOOT. Off tuntut, to press for. Stronger than meminta, to ask: you menuntut something you believe is already yours. In a court it is the specific word for suing — menuntut di pengadilan. It also means to require: pekerjaan yang menuntut waktu." },
        { id: "id-u50l4-bebas", type: "vocab", front: "bebas", reading: "bebas", meaning: "free to go", example: { jp: "Orang itu bebas karena hakim bilang dia tidak bersalah.", en: "That man is free because the judge said he was not guilty." }, accept: ["at liberty", "released", "unrestricted"], drill: { jp: "Kami bebas pergi ke mana saja hari ini", en: "We are free to go anywhere today" }, hint: "BEH-bas. Free as in UNCONSTRAINED — released from prison, free to choose, free of an obligation. ⚠️ Not gratis, which is free of charge and the only sense that concerns money. Bebas also builds the everyday phrases bebas pajak, tax free, and hari bebas, a day off." },
      ],
    },
  ],
};
