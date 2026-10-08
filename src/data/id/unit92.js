// ID Unit 92 — Hukum dan persidangan ("Law and the courtroom") — B2
// B2 block 1 (u88–u100). CONVENTIONS: see unit88.js §C1–§C12 — binding here.
//
// §C-E1. NARROWED TO THE COURTROOM, BECAUSE BOTH HALVES OF THE SCAFFOLD TITLE
//        ARE ALREADY OWNED. "Politics and law" collides with TWO units at once:
//        **u74 `Pemerintahan dan politik`** holds the politics (`partai`
//        `parlemen` `undang-undang` `kebijakan` `pejabat` `jabatan` `oposisi`
//        `reformasi` `suap`) and **u50 `Kejahatan dan keadilan`** holds the
//        basics of justice (`sidang` `hakim` `pengadilan` `hukuman` `saksi`
//        `menuntut` `bebas` `pidana`). Probed 24 candidates for a courtroom
//        unit: **18 free of 24**, and the six taken are all u50's foundation
//        words, which is exactly what a B2 unit should be building on.
//        **So this unit owns THE PROCEDURE: who sues whom, what they swear, who
//        decides, and what you do when you lose.** It takes no politics word.
//
// §C-E2. BOUNDARY WITH u50, STATED SO NO LATER SEAT RE-OPENS IT. u50 gives the
//        learner the PLACES AND PEOPLE (`pengadilan` `hakim` `saksi` `polisi`)
//        and the OUTCOME (`hukuman`). This unit gives the STEPS BETWEEN them.
//        That is why it teaches `kesaksian` (testimony — an act with legal
//        weight) and not a second word for a witness, and `mengadili` (to try
//        somebody) and not a second word for a court.
//
// §C-E3. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (C3/C4). Two circumfix
//        families, which is the cap:
//        `kesaksian`←**saksi (u50)** — KEPT: testimony is a legal act, not a
//        person, and the hint names the root · `mengadili`←**adil (u32, fair)**
//        — KEPT: "to try somebody in court" is in no way derivable from "fair" ·
//        `gugatan`/`menggugat`←gugat (not taught), verb+noun pair, house style ·
//        `terdakwa`/`dakwaan`←dakwa (not taught) · `tuntutan`←**menuntut (u50)**
//        — the noun names the sentence the prosecution ASKS FOR, which the verb
//        does not; hint names it · `perundangan`←undang (not a taught front;
//        `undang-undang` is u74's and stays u74's) · `bersumpah`/`sumpah`,
//        `vonis`, `putusan`, `banding`, `kasasi`, `grasi`, `jaksa`, `panitera`,
//        `perkara`, `pasal`, `ayat`, `sengketa`, `menengahi`, `terpidana` —
//        roots not taught.
//
// §C-E4. ⚠️ ONE FALSE POSITIVE, DO NOT WRITE AROUND IT. `candidate-check.mjs`
//        reports `pengacara` as **peng- off `acara`(u9)**. It is historically
//        from acara in the sense of legal procedure, but no learner who knows
//        "an event" will ever derive "a lawyer". It ships. This is the same class
//        as unit51.js §B9's `kemeja`/`meja` and `mengurus`/`kurus` — four
//        measured false positives a naive stripper reports.
//
// §C-E5. REFUSED HERE, EVERY ONE NAMED. `persidangan`←sidang(u50): the
//        proceedings are too close to the hearing, so the unit uses **`perkara`**
//        (the case as a matter) and leaves `sidang` to u50 — note the unit TITLE
//        still uses the word, which is a name for the idea and not a front.
//        `bersaksi`←saksi(u50): decodable; dropped for `panitera`.
//        `membebaskan`←bebas(u50): this is u70's mem-...-kan CAUSATIVE PATTERN
//        applied to a taught adjective, so carding it teaches a grammar point
//        twice; dropped for `grasi`. DEFERRED, not refused: `penyidik`,
//        `penyidikan`, `praperadilan`, `tergugat`, `penggugat` — all free, all
//        good, no room. A later seat should take them.
export const ID_UNIT92 = {
  id: "id-u92",
  lang: "id",
  title: "Hukum dan persidangan",
  order: 92,
  stage: "b2",
  lessons: [
    {
      id: "id-u92l1",
      unit: 92,
      lesson: 1,
      title: "Gugatan dan dakwaan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Say how a case begins — name the matter itself, name a civil suit, say somebody filed one, name the accused, name the prosecutor, and name the criminal charge laid.",
      items: [
        { id: "id-u92l1-perkara", type: "vocab", front: "perkara", reading: "perkara", meaning: "a matter brought before a court", example: { jp: "Perkara tentang tanah itu sudah dua tahun di pengadilan.", en: "The case about that land has been in court for two years." }, accept: ["a legal case", "a matter at issue", "an affair under dispute"], drill: { jp: "Perkara itu sudah dua tahun di pengadilan", en: "That case has been in court for two years" }, hint: "puhr-KAH-rah. ⚠️ Not the hearing — that is sidang, which you know from u50 — but the MATTER, which may run through many hearings. A perkara has a number and a file. In everyday speech it also just means a problem: bukan perkara mudah, not an easy matter, and tidak jadi perkara, it does not matter." },
        { id: "id-u92l1-gugatan", type: "vocab", front: "gugatan", reading: "gugatan", meaning: "a civil claim filed against somebody", example: { jp: "Gugatan dari dua pembeli itu diterima oleh pengadilan bulan lalu.", en: "The claim from those two buyers was accepted by the court last month." }, accept: ["a lawsuit", "a civil action", "a claim brought in court"], drill: { jp: "Gugatan dua pembeli itu sudah diterima", en: "Those two buyers' claim has been accepted" }, hint: "goo-GAH-tan, hard g. ⚠️ Civil, not criminal, and the distinction is the spine of this unit: a gugatan is one private party suing another over money, land or a contract, while the criminal charge is the dakwaan three cards on. A company files a gugatan; only a jaksa files a dakwaan. Mengajukan gugatan is the fixed phrase." },
        { id: "id-u92l1-menggugat", type: "vocab", front: "menggugat", reading: "menggugat", meaning: "to sue somebody", example: { jp: "Warga di kampung itu menggugat perusahaan yang membuang limbah ke sungai.", en: "The residents of that village are suing the company that dumped waste into the river." }, accept: ["to bring a suit against", "to take to court", "to file a claim against"], drill: { jp: "Warga itu menggugat perusahaan besar itu", en: "Those residents sue that big company" }, hint: "muhng-GOO-gaht, hard g. The verb of the card before it. ⚠️ A second sense is common in politics and worth knowing: menggugat also means to call something into question publicly — menggugat keputusan itu, to challenge that decision — with no courtroom involved at all. The legal sense is the narrow one, so read for a defendant." },
        { id: "id-u92l1-terdakwa", type: "vocab", front: "terdakwa", reading: "terdakwa", meaning: "the person on trial in a criminal case", example: { jp: "Terdakwa dalam perkara itu tidak mau bicara di depan hakim.", en: "The accused in that case would not speak before the judge." }, accept: ["the defendant in a criminal trial", "the accused", "the person charged"], drill: { jp: "Terdakwa itu tidak mau bicara sekarang", en: "That defendant will not speak now" }, hint: "tuhr-DAHK-wah. The ter- form of dakwa, to accuse — so it names the person the accusation has landed on. ⚠️ A precise Indonesian ladder it pays to learn in order: tersangka is a suspect under investigation, terdakwa is a defendant once the trial starts, and terpidana is a convict once the verdict is final. A newspaper uses the right one and so should you." },
        { id: "id-u92l1-jaksa", type: "vocab", front: "jaksa", reading: "jaksa", meaning: "the state's lawyer who brings a charge", example: { jp: "Jaksa itu membaca dakwaan dengan suara keras di depan semua orang.", en: "That prosecutor read the charge aloud in front of everyone." }, accept: ["a prosecutor", "a public prosecutor", "counsel for the state"], drill: { jp: "Jaksa itu membaca dakwaan di pengadilan", en: "That prosecutor reads the charge in court" }, hint: "JAHK-sah. ⚠️ The state's side only, so it is the exact counterpart of the pengacara you meet in the next lesson, who acts for the accused. Jaksa penuntut umum, the public prosecutor, is the full title, and Kejaksaan is the prosecution service as an institution. Do not call a defence lawyer a jaksa; the words are not interchangeable in any register." },
        { id: "id-u92l1-dakwaan", type: "vocab", front: "dakwaan", reading: "dakwaan", meaning: "the criminal charge as read out", example: { jp: "Dakwaan terhadap dua orang itu ada di berkas yang dibaca pagi ini.", en: "The charge against those two people is in the file read out this morning." }, accept: ["an indictment", "the formal accusation in a criminal case", "the count charged"], drill: { jp: "Dakwaan terhadap dua orang itu panjang", en: "The charge against those two people is long" }, hint: "dahk-WAH-an. The noun off dakwa, beside terdakwa in the card three back. ⚠️ Keep it apart from gugatan, the civil claim at the top of this lesson, and from tuntutan, which you meet in lesson 4: a dakwaan says WHAT you are accused of, a tuntutan says what punishment the prosecutor is ASKING FOR. The two are read out at different stages." },
      ],
    },
    {
      id: "id-u92l2",
      unit: 92,
      lesson: 2,
      title: "Kesaksian dan pengacara",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the people and the words that fill a hearing — testimony given under oath, the oath itself, swearing it, the lawyer for the accused, the clerk who records it all, and the convict at the end.",
      items: [
        { id: "id-u92l2-kesaksian", type: "vocab", front: "kesaksian", reading: "kesaksian", meaning: "evidence a person gives in person", example: { jp: "Kesaksian dari pekerja pabrik itu mengubah arah perkara tersebut.", en: "The testimony from that factory worker changed the direction of the case." }, accept: ["testimony", "sworn evidence spoken aloud", "a witness account given in court"], drill: { jp: "Kesaksian pekerja itu mengubah arah perkara", en: "That worker's testimony changed the case's direction" }, hint: "kuh-sahk-SEE-an. ⚠️ Built on saksi, a witness, which you already know from u50 — and it earns its own card because it names an ACT with legal weight rather than a person. You met keterangan, a statement, in u49: a keterangan can be written and given to anybody, a kesaksian is spoken in a hearing by somebody who has sworn the oath in the next card." },
        { id: "id-u92l2-sumpah", type: "vocab", front: "sumpah", reading: "sumpah", meaning: "a solemn promise to tell the truth", example: { jp: "Sumpah itu dibaca oleh setiap saksi sebelum memberi kesaksian.", en: "That oath is read by every witness before giving testimony." }, accept: ["an oath", "a sworn undertaking", "a solemn vow"], drill: { jp: "Sumpah itu dibaca sebelum memberi kesaksian", en: "That oath is read before giving testimony" }, hint: "SOOM-pah. ⚠️ Two lives, and the second will reach you first. In court it is the formal oath. In conversation sumpah! on its own means *I swear it!* — the ordinary way a young Indonesian insists they are telling the truth. Also note Sumpah Pemuda, the Youth Pledge of 1928, which is a national occasion you will meet in u95's territory." },
        { id: "id-u92l2-bersumpah", type: "vocab", front: "bersumpah", reading: "bersumpah", meaning: "to swear an oath", example: { jp: "Saksi pertama bersumpah di depan hakim sebelum duduk.", en: "The first witness swore an oath before the judge before sitting down." }, accept: ["to take an oath", "to swear solemnly", "to give one's sworn word"], drill: { jp: "Saksi pertama bersumpah di depan hakim", en: "The first witness swears before the judge" }, hint: "buhr-SOOM-pah. The ber- verb of the card before it. ⚠️ Keep it apart from berjanji, to promise, which you have had since u22: a janji is between people and can be broken with an apology, a sumpah invokes something above the speaker and breaking it is a different order of thing. Bersumpah bahwa plus a clause is the usual shape." },
        { id: "id-u92l2-pengacara", type: "vocab", front: "pengacara", reading: "pengacara", meaning: "the lawyer acting for a party", example: { jp: "Pengacara terdakwa itu meminta waktu satu minggu lagi.", en: "The defendant's lawyer asked for one more week." }, accept: ["an advocate", "counsel for a client", "a defence lawyer"], drill: { jp: "Pengacara terdakwa itu meminta waktu lagi", en: "That defendant's lawyer asks for more time" }, hint: "puh-ngah-CHAH-rah, c is CH. ⚠️ It LOOKS like peng- plus acara, an event, which you know from u9, and that resemblance is a trap — the acara here is the old legal sense of procedure, and nobody derives a lawyer from an event. The counterpart on the state's side is the jaksa you met in lesson 1. Advokat is the formal synonym you will see on a letterhead." },
        { id: "id-u92l2-panitera", type: "vocab", front: "panitera", reading: "panitera", meaning: "the court official who keeps the record", example: { jp: "Panitera menulis setiap kesaksian supaya ada catatan resmi.", en: "The clerk writes down every piece of testimony so that there is an official record." }, accept: ["a court clerk", "a registrar of the court", "the recording officer"], drill: { jp: "Panitera menulis setiap kesaksian dengan teliti", en: "The clerk writes every testimony carefully" }, hint: "pah-nee-TEH-rah, four syllables. ⚠️ A quietly important person: in an Indonesian court the panitera holds the file, stamps the copies and is who you actually deal with, while the hakim you met in u50 only appears at a hearing. Do not confuse the word with panitia, a committee, which differs by one letter and is far commoner in ordinary life." },
        { id: "id-u92l2-terpidana", type: "vocab", front: "terpidana", reading: "terpidana", meaning: "somebody whose conviction is final", example: { jp: "Terpidana dalam perkara itu masih bisa meminta grasi kepada presiden.", en: "The convict in that case can still ask the president for clemency." }, accept: ["a convicted person", "a convict after final judgment", "one found guilty"], drill: { jp: "Terpidana itu masih bisa meminta grasi", en: "That convict can still ask for clemency" }, hint: "tuhr-pee-DAH-nah. The ter- form of pidana, criminal punishment, which you know from u50. ⚠️ This is the last rung of the ladder in the terdakwa hint: tersangka, then terdakwa, then terpidana — suspect, defendant, convict. The step to terpidana happens only when no appeal is left, which the kasasi card in the next lesson explains." },
      ],
    },
    {
      id: "id-u92l3",
      unit: 92,
      lesson: 3,
      title: "Vonis dan banding",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Follow a case to its end and past it — the sentence handed down, the ruling as a document, appealing to a higher court, the final appeal, trying somebody at all, and clemency from the president.",
      items: [
        { id: "id-u92l3-vonis", type: "vocab", front: "vonis", reading: "vonis", meaning: "the sentence a judge hands down", example: { jp: "Vonis untuk terdakwa itu lebih ringan daripada tuntutan jaksa.", en: "The sentence for that defendant was lighter than the prosecutor's demand." }, accept: ["a verdict and sentence", "the judgment pronounced", "what the judge handed down"], drill: { jp: "Vonis itu lebih ringan daripada tuntutan jaksa", en: "That sentence is lighter than the prosecutor's demand" }, hint: "FOH-nees — the v is said like an f. ⚠️ Keep it apart from hukuman, punishment, which you know from u50: a hukuman is the punishment itself, served over time, and a vonis is the MOMENT it is pronounced. Indonesian also uses it outside court for any grim pronouncement — vonis dokter, a doctor's verdict." },
        { id: "id-u92l3-putusan", type: "vocab", front: "putusan", reading: "putusan", meaning: "a court's ruling as a written document", example: { jp: "Putusan pengadilan itu ditulis dalam dua puluh halaman.", en: "That court's ruling is written out in twenty pages." }, accept: ["a court ruling", "a judgment on paper", "the written decision"], drill: { jp: "Putusan pengadilan itu ditulis sangat panjang", en: "That court ruling is written very long" }, hint: "poo-TOO-san. ⚠️ Narrower here than in everyday speech, where you already know memutuskan, to decide, from u21: a putusan in this unit is specifically the COURT's reasoned decision, a document with a number you can cite. Putusan yang berkekuatan hukum tetap, a ruling with final legal force, is the phrase that ends a case for good." },
        { id: "id-u92l3-banding", type: "vocab", front: "banding", reading: "banding", meaning: "taking a ruling to a higher court", example: { jp: "Pengacara itu mengajukan banding karena putusan pertama terasa janggal.", en: "That lawyer filed an appeal because the first ruling felt wrong." }, accept: ["an appeal to a higher court", "a second hearing above", "appellate review"], drill: { jp: "Pengacara itu mengajukan banding bulan lalu", en: "That lawyer filed an appeal last month" }, hint: "BAHN-deeng. ⚠️ The same word you know from membandingkan, to compare — because an appeal court sets the two accounts side by side. Naik banding is the fixed phrase for lodging one. The level above it is the kasasi in the next card, and a learner who mixes the two gets the stage of the case wrong." },
        { id: "id-u92l3-kasasi", type: "vocab", front: "kasasi", reading: "kasasi", meaning: "the last appeal, on points of law only", example: { jp: "Setelah banding ditolak, mereka mengajukan kasasi ke tingkat paling tinggi.", en: "After the appeal was rejected, they filed a final appeal at the highest level." }, accept: ["a final appeal on the law", "cassation", "review by the supreme court"], drill: { jp: "Mereka mengajukan kasasi ke tingkat tertinggi", en: "They file a final appeal at the highest level" }, hint: "kah-SAH-see. From the Dutch, and the whole Indonesian court structure comes with it. ⚠️ The difference from banding is not merely height: a banding re-examines the FACTS, a kasasi only asks whether the law was applied correctly. Once a kasasi is decided the perkara is finished and the terdakwa becomes a terpidana." },
        { id: "id-u92l3-mengadili", type: "vocab", front: "mengadili", reading: "mengadili", meaning: "to try somebody in court", example: { jp: "Pengadilan di kota itu mengadili dua perkara besar pada hari yang sama.", en: "The court in that city tried two big cases on the same day." }, accept: ["to hear a case against", "to sit in judgment on", "to bring to trial"], drill: { jp: "Pengadilan itu mengadili dua perkara besar", en: "That court tries two big cases" }, hint: "muh-ngah-DEE-lee. ⚠️ Built on adil, fair, which you have had since u32, and the meaning is not derivable from it — this is the formal act of putting somebody through a trial, and the subject is a court, not a person. Note the family: pengadilan, the court, which you know from u50, is the same root with pe-...-an around it. A learner who sees that connection will remember both." },
        { id: "id-u92l3-grasi", type: "vocab", front: "grasi", reading: "grasi", meaning: "a pardon granted by the head of state", example: { jp: "Terpidana itu meminta grasi setelah semua jalan hukum selesai.", en: "That convict asked for a pardon after every legal avenue was finished." }, accept: ["clemency from the president", "an act of mercy cancelling a sentence", "executive pardon"], drill: { jp: "Dia meminta grasi kepada presiden tahun lalu", en: "He asked the president for clemency last year" }, hint: "GRAH-see, hard g. The president's power to set aside a sentence after the courts are done. ⚠️ Indonesian distinguishes several kinds and the news uses them precisely: grasi is a pardon for one convicted person, amnesti wipes a whole class of offences, and remisi is the routine sentence reduction prisoners get on national holidays. Only grasi is taught here; the other two are worth recognising." },
      ],
    },
    {
      id: "id-u92l4",
      unit: 92,
      lesson: 4,
      title: "Pasal dan sengketa",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Cite the law and settle a quarrel without a trial — name an article of a statute, name a clause inside it, name legislation as a whole, name the punishment the prosecutor asks for, name a dispute between parties, and say somebody mediated it.",
      items: [
        { id: "id-u92l4-pasal", type: "vocab", front: "pasal", reading: "pasal", meaning: "a numbered article of a law", example: { jp: "Pasal itu dipakai oleh jaksa untuk membuat dakwaan terhadap dua orang.", en: "That article was used by the prosecutor to draw up the charge against two people." }, accept: ["an article of a statute", "a numbered section of law", "a provision cited"], drill: { jp: "Pasal itu dipakai jaksa dalam dakwaan", en: "That article is used by the prosecutor in the charge" }, hint: "PAH-sahl. ⚠️ The unit of citation in Indonesian law — every charge names one, as Pasal 340, and the number is what people argue about. Note the everyday idiom that comes from it: pasal-pasal karet, rubber articles, is what Indonesians call a law written so loosely it can be stretched to fit anybody." },
        { id: "id-u92l4-ayat", type: "vocab", front: "ayat", reading: "ayat", meaning: "a numbered paragraph inside an article", example: { jp: "Ayat kedua dalam pasal itu memberi kelonggaran bagi perusahaan kecil.", en: "The second paragraph in that article gives leeway to small companies." }, accept: ["a subsection", "a numbered clause within an article", "a paragraph of a statute"], drill: { jp: "Ayat kedua memberi kelonggaran bagi perusahaan kecil", en: "The second clause gives leeway to small companies" }, hint: "AH-yaht. ⚠️ Smaller than the pasal that contains it, so a full citation reads Pasal 28 ayat 1 — article then clause, in that order. Its other life is religious and is the one most Indonesians meet first: an ayat is a verse of the Qur'an. The shared sense is a numbered line of an authoritative text." },
        { id: "id-u92l4-perundangan", type: "vocab", front: "perundangan", reading: "perundangan", meaning: "legislation taken as a whole body", example: { jp: "Perundangan tentang lingkungan sudah berubah tiga kali sejak tahun itu.", en: "The legislation on the environment has changed three times since that year." }, accept: ["the body of statute law", "legislation as a field", "enacted law collectively"], drill: { jp: "Perundangan tentang lingkungan sudah berubah lagi", en: "The legislation on the environment has changed again" }, hint: "puh-roon-DAHNG-an. ⚠️ A mass noun: you cannot have two perundangan. You already know undang-undang, an individual act, from u74 — this names the whole corpus of them, which is why it appears in the fixed phrase peraturan perundang-undangan, statutory regulations, at the head of any Indonesian legal document." },
        { id: "id-u92l4-tuntutan", type: "vocab", front: "tuntutan", reading: "tuntutan", meaning: "the punishment a prosecutor asks for", example: { jp: "Tuntutan jaksa dalam perkara itu adalah lima tahun, tetapi vonisnya tiga.", en: "The prosecutor's demand in that case was five years, but the sentence was three." }, accept: ["the sentence sought", "a formal demand made in court", "the prosecution's ask"], drill: { jp: "Tuntutan jaksa adalah lima tahun penjara", en: "The prosecutor's demand is five years in prison" }, hint: "toon-TOO-tan. ⚠️ The noun off menuntut, to demand or prosecute, which you know from u50 — and the noun names a specific thing the verb does not: the number of years the jaksa ASKS the court for, which the judge may cut. Outside court it means any insistent demand: tuntutan buruh, the workers' demands." },
        { id: "id-u92l4-sengketa", type: "vocab", front: "sengketa", reading: "sengketa", meaning: "a dispute between two parties over a right", example: { jp: "Sengketa tanah antara dua keluarga itu belum selesai sampai sekarang.", en: "The land dispute between those two families is still not settled." }, accept: ["a contested claim", "a quarrel over entitlement", "a dispute at law"], drill: { jp: "Sengketa tanah itu belum selesai sampai sekarang", en: "That land dispute is still not settled" }, hint: "suhng-KEH-tah. ⚠️ Heavier than the words you have for disagreement: you met berdebat in u22 and berselisih is a quarrel, but a sengketa is a conflict over a RIGHT — land, a border, a contract — and it is the word that implies lawyers. Sengketa tanah is the commonest kind in Indonesia and fills the civil courts." },
        { id: "id-u92l4-menengahi", type: "vocab", front: "menengahi", reading: "menengahi", meaning: "to step between two sides and settle them", example: { jp: "Kepala kampung menengahi sengketa itu sebelum ada gugatan ke pengadilan.", en: "The village head mediated that dispute before any suit reached the court." }, accept: ["to mediate", "to act as go-between", "to broker a settlement"], drill: { jp: "Kepala kampung menengahi sengketa dua keluarga", en: "The village head mediates two families' dispute" }, hint: "muh-nuh-ngah-HEE, four syllables. Built on tengah, the middle, which you have had since u36 — so it is literally to put yourself in the middle. ⚠️ Culturally this is the preferred route in Indonesia and a court is the failure case: a sengketa is taken to a kepala kampung or a family elder first, and musyawarah, deliberation to consensus, is the name for the whole practice." },
      ],
    },
  ],
};
