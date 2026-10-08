// ID Unit 113 — Tidur, mimpi, dan angan ("Sleep, dreams and wishful thinking") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 2 (u101–u113). Band notes BB1–BB8 are in unit101.js's header; unit1's
// A1 conventions, unit21's A2 set and unit51's B1 set (B1–B12) all still bind.
// **This is the last unit of block 2's range.** Hand-back notes are in the
// report, not in this file.
//
// §P1. BOUNDARY, AS BRIEFED AND AS MEASURED. **u63 owns DAYDREAMING** —
//      `berkhayal` (to fantasise), `melamun` (to daydream), `khayal` (a
//      fantasy). So this unit **takes the NOUNS off that ground and no second
//      daydream verb**: `khayalan` and `angan-angan`, and nothing that competes
//      with melamun. u4 owns `tidur` and `bangun`, u17 owns `tempat tidur`,
//      u11 owns `lelah`, u40 owns `segar`, u80 owns `bayangan`, u21 owns
//      `sadar`, u62 owns `impian` — and that last one is the sharpest edge in
//      the unit, see §P3.
//
// §P2. ⚠️ **`insomnia` REFUSED AS AN EXACT COGNATE** (band note BB4): front ===
//      gloss after folding, so the produce card would show "insomnia" and
//      accept "insomnia". `kantuk` and `terjaga` carry that ground instead and
//      are real Indonesian words. Checked and KEPT because none of them is its
//      own gloss: `ilusi`/illusion, `halusinasi`/hallucination.
//
// §P3. 🚨 **`impian`(u62) IS GLOSSED "a dream" AND ACCEPTS "to dream", SO THIS
//      UNIT MAY NOT USE EITHER STRING.** `gloss-taken.mjs id` caught it before
//      a card was written. A duplicate `meaning` makes one card unanswerable —
//      `type:produce` shows the gloss and accepts one front — and that defect
//      is at **ZERO corpus-wide**, so it does not start here. The cards read
//      **"what you see while asleep"** and **"to dream in one's sleep"**, which is
//      also the true distinction: an `impian` is an ambition you hold awake, a
//      `mimpi` is what happens in your head at night. The hint says so on both
//      cards. Same mechanism caught `khayal`(u63)/"a fantasy", so `khayalan`
//      reads "a thing imagined", and `tempat tidur`(u17)/"bed", so `ranjang`
//      reads "a bed frame".
//
// §P4. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (unit1 §3 / unit51 B5):
//      kantuk / mengantuk → two cards off one root, in the SAME lesson (l1) and
//        deliberately: the noun (drowsiness you can name and measure) and the
//        verb (what you feel). Drill-safe: "mengantuk" holds "kantuk" at index
//        3, preceded by `g`, so findWholeWord matches in neither direction.
//      menguap → uap ⚠️ `uap` is NOT taught. Clean — **but note the homograph
//        the hint has to carry: menguap also means TO EVAPORATE**, and
//        Indonesian keeps both senses in one word, so a learner reading about a
//        chemical process needs to know.
//      nyenyak → not derived. Clean. ⚠️ `lelap` and `terlelap` were REFUSED as
//        variants of each other and of this (band note BB5) — `nyenyak` is the
//        standard collocation (tidur nyenyak) and one card is enough.
//      rebahan → rebah — `rebah` is NOT taught; `berbaring`(u39) is the taught
//        word and shares no whole word with this one.
//      meringkuk → ringkuk — not a free word. Clean.
//      terjaga → jaga ⚠️ `menjaga` IS taught (u30, "to guard") and so is
//        `jaga`-adjacent vocabulary. Carded: lying awake is not guarding
//        anything. Drill-safe: "terjaga" holds "jaga" at index 3, preceded by
//        `r`, and `menjaga` holds it at index 3 preceded by `n` — no
//        whole-word match in any direction.
//      terbangun → bangun ⚠️ `bangun` IS taught (u4, "to wake up") and
//        `membangun`(u83, "to build"). **Three words, one string, and they are
//        genuinely three** — waking up, being woken, and building. Carded, and
//        drill-safe: "terbangun" holds "bangun" at index 3, preceded by `r`.
//        ⚠️ `membangunkan` was NOT carded, deliberately: with `membangun`(u83)
//        taught it is one derivation too many off a string already carrying
//        three senses.
//      mengigau → igau — not a free word. Clean.
//      mendengkur → dengkur — not taught. Clean.
//      terlena → lena — not a free word. Clean.
//      bergumam → gumam — NOT taught. Clean. ⚠️ It replaced `menafsirkan` at
//        step 4, when merging block 1 showed that front TAKEN at u96l3 — band
//        note BB9.
//      bermimpi → mimpi — `mimpi` is carded in THIS unit, same lesson (l4),
//        deliberately. Drill-safe: "bermimpi" holds "mimpi" at index 3,
//        preceded by `r`.
//      khayalan → khayal ⚠️ `khayal` IS taught (u63) and `berkhayal` (u63).
//        Carded as the NOUN only, and glossed off "a fantasy" (§P3).
//        Drill-safe: "khayalan" holds "khayal" at index 0 followed by `a`.
//      angan-angan → angan — not taught as a front. ⚠️ **The reduplication IS
//        the word** (unit1 §5's "not a plural" case), the fold is "anganangan",
//        and `reading-taken.mjs id` reports 0 duplicated. And the hyphen is not
//        a letter, so a bare `angan` card would fire inside it — there is none,
//        checked.
//
// §P5. DEFERRED FROM THIS UNIT, named not buried, all probed FREE: `lelap`
//      `terlelap` (refused as variants, §P4) · `melek` (colloquial; unit1 §7
//      defers that layer) · `pertanda` `membangunkan` `tidur siang`-adjacent
//      phrases. Refused: `insomnia` (exact cognate, §P2).
export const ID_UNIT113 = {
  id: "id-u113",
  lang: "id",
  title: "Tidur, mimpi, dan angan",
  order: 113,
  stage: "b2",
  lessons: [
    {
      id: "id-u113l1",
      unit: 113,
      lesson: 1,
      title: "Kantuk dan lesu",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe how tired a body is — drowsiness as a thing, feeling sleepy, yawning, sleeping soundly, being limp with no energy, and waking up fresh and fit.",
      items: [
        { id: "id-u113l1-kantuk", type: "vocab", front: "kantuk", reading: "kantuk", meaning: "drowsiness", example: { jp: "Kantuk pada jam dua siang membuat semua karyawan lambat.", en: "The drowsiness at two in the afternoon makes all the employees slow." }, accept: ["sleepiness as a state", "the pull of sleep", "somnolence"], drill: { jp: "Kantuk pada jam dua siang membuat kami lambat", en: "The drowsiness at two in the afternoon makes us slow" }, hint: "KAHN-took. ⚠️ The NOUN, which Indonesian uses where English would reach for a whole phrase: menahan kantuk is to fight off sleepiness, and rasa kantuk is the feeling of it. Keep it apart from lelah (u11), tired: lelah is a body with no energy, kantuk is a brain trying to switch off, and you can be one without the other." },
        { id: "id-u113l1-mengantuk", type: "vocab", front: "mengantuk", reading: "mengantuk", meaning: "to feel sleepy", example: { jp: "Saya mengantuk setelah makan siang yang besar di kantor.", en: "I feel sleepy after a big lunch at the office." }, accept: ["to be drowsy", "to be nodding off", "to want to sleep"], drill: { jp: "Saya mengantuk setelah makan siang yang besar", en: "I feel sleepy after a big lunch" }, hint: "muh-NGAHN-took — ng one hum. ⚠️ The verb off the card before it, and the pair sits together on purpose. Note that Indonesian says saya mengantuk, I am sleepy, with the verb and no adjective — so **it behaves like English *I am getting sleepy* rather than like *I am tired***. Tidak bisa menahan mengantuk is wrong; the noun kantuk is what you hold back." },
        { id: "id-u113l1-menguap", type: "vocab", front: "menguap", reading: "menguap", meaning: "to yawn", example: { jp: "Dia menguap tiga kali dalam satu rapat yang panjang.", en: "He yawned three times in one long meeting." }, accept: ["to open the mouth with sleepiness", "to give a yawn", "to gape sleepily"], drill: { jp: "Dia menguap tiga kali dalam satu rapat", en: "He yawned three times in one meeting" }, hint: "muh-NGOO-ahp — ng one hum, then two vowels in a row. ⚠️ **One word, two completely unrelated senses, and you need both: menguap is to yawn AND to evaporate.** Air menguap, water evaporates; uang itu menguap, that money vanished. Nothing but context separates them, and a science text and a sleepy meeting use the identical verb." },
        { id: "id-u113l1-nyenyak", type: "vocab", front: "nyenyak", reading: "nyenyak", meaning: "soundly, of sleep", example: { jp: "Anak itu tidur nyenyak sampai pagi tanpa bangun satu kali.", en: "That child slept soundly until morning without waking once." }, accept: ["deeply asleep", "fast asleep", "without stirring"], drill: { jp: "Anak itu tidur nyenyak sampai pagi tanpa bangun", en: "That child slept soundly until morning without waking" }, hint: "NYUH-nyahk — both ny's are one sound each, which makes this a good word to practise the l3 sound family of unit 1 on. ⚠️ **It is bound to tidur in practice**: tidur nyenyak is the collocation, and nyenyak standing alone is rare. Keep it apart from tenang (u31), calm: a room can be tenang, only sleep is nyenyak." },
        { id: "id-u113l1-loyo", type: "vocab", front: "loyo", reading: "loyo", meaning: "limp with no energy", example: { jp: "Dia loyo setelah bekerja di bawah matahari sejak pagi.", en: "He is limp with no energy after working under the sun since morning." }, accept: ["listless", "drooping and weak", "with all the strength gone out of one"], drill: { jp: "Dia loyo setelah bekerja di bawah matahari", en: "He is limp with no energy after working under the sun" }, hint: "LOH-yoh, both o's short. ⚠️ Keep it apart from lelah (u11), tired, and lemah, weak: lelah will pass with rest, lemah is a lack of strength, loyo is the DROOP — the body visibly gone soft. It is informal and vivid, and it is also used of a market, a team or an economy with no fight left in it." },
        { id: "id-u113l1-bugar", type: "vocab", front: "bugar", reading: "bugar", meaning: "fresh and fit", example: { jp: "Setelah tidur delapan jam dia bugar dan siap bekerja lagi.", en: "After eight hours' sleep he is fresh and ready to work again." }, accept: ["in good physical shape", "rested and well", "full of energy"], drill: { jp: "Setelah tidur delapan jam dia bugar dan siap", en: "After eight hours' sleep he is fresh and ready" }, hint: "BOO-gahr, hard g. ⚠️ The exact opposite of the card before it. You know segar from u40, fresh — and segar is about a thing (fruit, air, water) as well as a person, while bugar is only ever a BODY in good condition. Kebugaran is physical fitness, which is what a gym in Indonesia calls itself: pusat kebugaran." },
      ],
    },
    {
      id: "id-u113l2",
      unit: 113,
      lesson: 2,
      title: "Kasur, bantal, dan selimut",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name what you actually sleep on and in — a mattress, a bed frame, a pillow, a blanket, lounging about doing nothing, and curling up.",
      items: [
        { id: "id-u113l2-kasur", type: "vocab", front: "kasur", reading: "kasur", meaning: "a mattress", example: { jp: "Kasur di kamar itu terlalu keras untuk orang tua.", en: "The mattress in that room is too hard for an old person." }, accept: ["the thing you lie on", "a sleeping pad", "a bed mattress"], drill: { jp: "Kasur di kamar itu terlalu keras untuk nenek", en: "The mattress in that room is too hard for grandmother" }, hint: "KAH-soor. ⚠️ You know tempat tidur from u17, a bed — and in Indonesia the distinction is practical, not pedantic: plenty of people sleep on a kasur laid straight on the floor with no frame at all, so kasur is the word that actually gets used. Kasur lantai is a floor mattress and is a normal thing to own." },
        { id: "id-u113l2-ranjang", type: "vocab", front: "ranjang", reading: "ranjang", meaning: "a bed frame", example: { jp: "Ranjang di kamar lama itu dari kayu yang berat.", en: "The bed frame in that old room is made of heavy wood." }, accept: ["a bedstead", "the wooden or metal frame of a bed", "a bed as furniture"], drill: { jp: "Ranjang di kamar lama itu dari kayu berat", en: "The bed frame in that old room is of heavy wood" }, hint: "RAHN-jahng — ng one hum. ⚠️ The FRAME, as against the kasur that sits on it and the tempat tidur (u17) that means the whole arrangement. Indonesian keeps all three and a furniture shop will price them separately. Note that ranjang carries a faint flavour of the bedroom as a private place — teman seranjang is a bedfellow — which tempat tidur does not." },
        { id: "id-u113l2-bantal", type: "vocab", front: "bantal", reading: "bantal", meaning: "a pillow", example: { jp: "Bantal itu terlalu tinggi dan membuat leher saya sakit.", en: "That pillow is too high and makes my neck hurt." }, accept: ["a cushion for the head", "a headrest", "a bolster"], drill: { jp: "Bantal itu terlalu tinggi dan membuat leher sakit", en: "That pillow is too high and makes the neck hurt" }, hint: "BAHN-tahl. ⚠️ Worth one extra word: Indonesian also has bantal guling, a long bolster you hug while sleeping, which is on almost every Indonesian bed and has no English name. Bantal alone is the ordinary head pillow. The word also covers a sofa cushion, so a living room has them too." },
        { id: "id-u113l2-selimut", type: "vocab", front: "selimut", reading: "selimut", meaning: "a blanket", example: { jp: "Selimut di rumah gunung itu tebal dan berat sekali.", en: "The blanket in that mountain house is thick and very heavy." }, accept: ["a cover to sleep under", "a coverlet", "bedclothes"], drill: { jp: "Selimut di rumah gunung itu tebal dan berat", en: "The blanket in that mountain house is thick and heavy" }, hint: "suh-LEE-moot. ⚠️ The verb is menyelimuti, to cover something over, and it goes figurative in a way you will meet in writing: kabut menyelimuti kota, fog blanketed the city. In most of Indonesia a selimut is a thin one — the thick one in the example needs a mountain to justify it, which is a real fact about the country." },
        { id: "id-u113l2-rebahan", type: "vocab", front: "rebahan", reading: "rebahan", meaning: "lying about doing nothing", example: { jp: "Rebahan di kursi itu enak setelah hari yang panjang.", en: "Lounging in that chair is pleasant after a long day." }, accept: ["lounging", "flopping down to rest", "sprawling idly"], drill: { jp: "Rebahan di kursi itu enak setelah hari panjang", en: "Lounging in that chair is pleasant after a long day" }, hint: "ruh-BAH-han. From rebah, to topple over or lie flat. ⚠️ You know berbaring from u39, to lie down — and the difference is attitude: berbaring is the posture, rebahan is the IDLE ACTIVITY, with a hint of doing nothing on purpose. It is informal and very current: Indonesians say rebahan about an afternoon the way English says *flopping*." },
        { id: "id-u113l2-meringkuk", type: "vocab", front: "meringkuk", reading: "meringkuk", meaning: "to curl up", example: { jp: "Anak itu meringkuk di bawah selimut karena kamar itu dingin.", en: "That child curled up under the blanket because the room was cold." }, accept: ["to huddle into a ball", "to draw one's knees up", "to lie curled"], drill: { jp: "Anak itu meringkuk di bawah selimut karena dingin", en: "That child curls up under the blanket because it is cold" }, hint: "muh-reeng-KOOK. ⚠️ Two uses and the second is worth knowing: curling up to sleep, and **sitting in a cell** — meringkuk di tahanan, languishing in custody, is a stock newspaper phrase. The shared idea is a body folded small in a space too tight for it, which covers both a cold child and a prisoner." },
      ],
    },
    {
      id: "id-u113l3",
      unit: 113,
      lesson: 3,
      title: "Terjaga, mengigau, mendengkur",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe the things that happen around sleep — lying awake, being woken by something, talking in your sleep, snoring, mumbling to yourself, and being lulled into dropping your guard.",
      items: [
        { id: "id-u113l3-terjaga", type: "vocab", front: "terjaga", reading: "terjaga", meaning: "to lie awake", example: { jp: "Saya terjaga sampai jam tiga karena pikir tentang pekerjaan.", en: "I lay awake until three because of thinking about work." }, accept: ["to be unable to sleep", "to stay awake against one's will", "to be wakeful"], drill: { jp: "Saya terjaga sampai jam tiga karena pekerjaan", en: "I lay awake until three because of work" }, hint: "tuhr-JAH-gah. ⚠️ The ter- marks a state you did not choose, the same ter- as u105's terpukul and u112's tertekan — so terjaga is awake AGAINST your will, which is precisely what English needs *lying awake* for. **This is the card the unit took instead of the loanword insomnia** (which would be a word you type by copying the English). It is unrelated to menjaga (u30), to guard." },
        { id: "id-u113l3-terbangun", type: "vocab", front: "terbangun", reading: "terbangun", meaning: "to be woken by something", example: { jp: "Dia terbangun karena suara mobil di depan rumah pada jam empat.", en: "He was woken by the sound of a car in front of the house at four." }, accept: ["to wake with a start", "to be roused", "to come awake suddenly"], drill: { jp: "Dia terbangun karena suara mobil di depan rumah", en: "He was woken by the sound of a car in front of the house" }, hint: "tuhr-bah-NGOON — ng one hum. ⚠️ **One string, three words in this course, and they are genuinely three:** bangun (u4) is waking up by yourself, membangun (u83) is building, and terbangun is being woken by something outside you. The ter- is doing the same job as in the card above it. Keep the pair: terjaga is never getting to sleep, terbangun is losing the sleep you had." },
        { id: "id-u113l3-mengigau", type: "vocab", front: "mengigau", reading: "mengigau", meaning: "to talk in one's sleep", example: { jp: "Anak itu mengigau tentang sekolah hampir setiap malam.", en: "That child talks in his sleep about school almost every night." }, accept: ["to speak while asleep", "to mutter in one's sleep", "to rave in sleep or fever"], drill: { jp: "Anak itu mengigau tentang sekolah setiap malam", en: "That child talks in his sleep about school every night" }, hint: "muh-ngee-GAH-oo — ng one hum, and the final au is two vowels. ⚠️ It also covers raving in a fever, which is the older sense, and it is used dismissively of somebody talking nonsense while fully awake: jangan mengigau, you are dreaming. So the insult and the literal meaning are the same word, exactly as English does with *you must be dreaming*." },
        { id: "id-u113l3-mendengkur", type: "vocab", front: "mendengkur", reading: "mendengkur", meaning: "to snore", example: { jp: "Dia mendengkur keras dan tidak ada orang di kamar itu yang bisa tidur.", en: "He snores loudly and nobody in that room can sleep." }, accept: ["to make a snoring noise asleep", "to breathe loudly in sleep", "to saw logs"], drill: { jp: "Dia mendengkur keras dan tidak ada yang bisa tidur", en: "He snores loudly and nobody can sleep" }, hint: "muhn-duhng-KOOR — ng one hum. The root dengkur is the noise itself, and like many Indonesian sound words it is built to imitate what it names — say it slowly and you can hear it. ⚠️ It is also used of a contented cat purring, which is the same low rumble, so a sentence about a kucing mendengkur is about purring and not snoring." },
        { id: "id-u113l3-terlena", type: "vocab", front: "terlena", reading: "terlena", meaning: "lulled into dropping your guard", example: { jp: "Kami terlena oleh harga murah dan lupa membaca surat itu dengan baik.", en: "We were lulled by the low price and forgot to read the letter properly." }, accept: ["lulled into complacency", "carried away and careless", "softened into inattention"], drill: { jp: "Kami terlena oleh harga murah dan lupa membaca surat", en: "We were lulled by the low price and forgot to read the letter" }, hint: "tuhr-luh-NAH. The root lena is a soft, forgetful ease, and the ter- makes it something that happened to you. ⚠️ Its first sense is drifting pleasantly off to sleep — which is why it sits in this unit — and its live sense in writing is **being lulled into carelessness**: jangan terlena, do not get complacent, is a standard warning in Indonesian commentary." },
        { id: "id-u113l3-bergumam", type: "vocab", front: "bergumam", reading: "bergumam", meaning: "to mumble", example: { jp: "Dia bergumam sendiri di kamar dan tidak ada orang yang bisa mengerti.", en: "He mumbled to himself in the room and nobody could understand." }, accept: ["to mutter under one's breath", "to murmur indistinctly", "to talk low to oneself"], drill: { jp: "Dia bergumam sendiri dan tidak ada yang mengerti", en: "He mumbles to himself and nobody understands" }, hint: "buhr-GOO-mahm, hard g. The root gumam is a low closed-mouth sound, and like dengkur it is built to imitate what it names. \u26a0\ufe0f It is the waking neighbour of this lesson's mengigau: a person who bergumam is awake but not addressing anybody, which is why the word carries a faint suggestion of grumbling. Bergumam setuju, to murmur agreement, is the one positive use." },
      ],
    },
    {
      id: "id-u113l4",
      unit: 113,
      lesson: 4,
      title: "Mimpi, angan, dan khayalan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Separate the four things English calls a dream — the dream you have asleep, dreaming one, a thing you imagine, a wishful notion, an illusion, and a hallucination.",
      items: [
        { id: "id-u113l4-mimpi", type: "vocab", front: "mimpi", reading: "mimpi", meaning: "what you see while asleep", example: { jp: "Mimpi malam itu masih jelas di kepala saya sampai sekarang.", en: "That night's dream is still clear in my head even now." }, accept: ["what you see while sleeping", "a night-time dream", "a dream in sleep"], drill: { jp: "Mimpi malam itu masih jelas di kepala saya", en: "That night's dream is still clear in my head" }, hint: "MEEM-pee. ⚠️ **You already know impian from u62, which is a dream in the sense of an AMBITION — and Indonesian keeps the two strictly apart.** An impian is what you work towards awake; a mimpi is what happens in your head at night. Saying mimpi saya adalah menjadi dokter is understood but reads as slightly childish; impian is the adult word for that." },
        { id: "id-u113l4-bermimpi", type: "vocab", front: "bermimpi", reading: "bermimpi", meaning: "to dream in one's sleep", example: { jp: "Saya bermimpi tentang rumah lama di desa dua kali pada minggu ini.", en: "I dreamed about the old house in the village twice this week." }, accept: ["to have a dream at night", "to dream in one's sleep", "to see something in a dream"], drill: { jp: "Saya bermimpi tentang rumah lama di desa", en: "I dreamed about the old house in the village" }, hint: "buhr-MEEM-pee. The ber- verb off the card before it. ⚠️ It takes tentang for what the dream was about, never a direct object. **Like mimpi it is about sleep** — for the ambition sense Indonesian says bercita-cita or memimpikan, and a learner who says saya bermimpi menjadi dokter will be understood and gently corrected. Bermimpi di siang hari, dreaming in daylight, is the scornful phrase." },
        { id: "id-u113l4-khayalan", type: "vocab", front: "khayalan", reading: "khayalan", meaning: "a thing imagined", example: { jp: "Khayalan anak itu tentang pulau yang jauh sangat jelas dan panjang.", en: "That child's imagined picture of a far-off island is very clear and long." }, accept: ["an imagining", "a product of the imagination", "something dreamt up"], drill: { jp: "Khayalan anak itu tentang pulau yang jauh jelas", en: "That child's imagined picture of a far-off island is clear" }, hint: "khah-yah-LAHN — the kh is the throaty sound, as in khotbah from u110. ⚠️ You know khayal and berkhayal from u63 — this is the NOUN, the thing produced: tokoh khayalan is a fictional character and dunia khayalan an imaginary world. Keep it apart from the next card: a khayalan is a PICTURE you build for pleasure, an angan-angan is a WISH you half expect to get." },
        { id: "id-u113l4-anganangan", type: "vocab", front: "angan-angan", reading: "anganangan", meaning: "a wishful notion", example: { jp: "Angan-angan dia tentang rumah besar belum jadi sampai sekarang.", en: "His wishful notion about a big house has not come true even now." }, accept: ["a pipe dream", "a fond hope", "wishful thinking"], drill: { jp: "Angan-angan dia tentang rumah besar belum jadi", en: "His wishful notion about a big house has not come true" }, hint: "AH-ngahn AH-ngahn — ng one hum, and the doubling IS the word, not a plural (unit 1's reduplication rule). ⚠️ The key is the faint doubt: an angan-angan is wished for and not planned for, which is why Indonesian pairs it with belum and hanya. Keep it apart from impian (u62), an ambition you are working on, and from rencana (u13), a plan — this one has no steps behind it." },
        { id: "id-u113l4-ilusi", type: "vocab", front: "ilusi", reading: "ilusi", meaning: "an illusion", example: { jp: "Semua itu hanya ilusi dan tidak ada satu hal yang nyata.", en: "All of it is just an illusion and not one thing is real." }, accept: ["a false appearance", "something that seems real and is not", "a trick of perception"], drill: { jp: "Semua itu hanya ilusi dan tidak ada yang nyata", en: "All of it is just an illusion and nothing is real" }, hint: "ee-LOO-see. ⚠️ Note the single l, where English doubles it — and that one letter is also what keeps this card from being a word you type by copying the English. It covers both the optical kind and the self-deception kind, exactly as in English, and it is the strongest word in the lesson: calling somebody's plan an ilusi says it rests on nothing." },
        { id: "id-u113l4-halusinasi", type: "vocab", front: "halusinasi", reading: "halusinasi", meaning: "a hallucination", example: { jp: "Halusinasi itu datang karena obat yang terlalu banyak dan tidur yang kurang.", en: "The hallucination came from too much medicine and not enough sleep." }, accept: ["seeing what is not there", "a false perception from illness or drugs", "a waking vision"], drill: { jp: "Halusinasi itu datang karena obat yang terlalu banyak", en: "The hallucination came from too much medicine" }, hint: "hah-loo-see-NAH-see, five syllables, stress on the fourth. ⚠️ The clinical end of this lesson, and it belongs to the medical register u112 built: a halusinasi has a CAUSE — illness, fever, a drug, no sleep — while an ilusi is something the world or another person presents to you. Indonesian keeps that division as firmly as English does." },
      ],
    },
  ],
};
