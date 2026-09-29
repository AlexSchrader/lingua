// ID Unit 29 — Menyambung kalimat ("Joining sentences") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 1 (u21–u30). unit1.js's 12 conventions and unit21.js's A1–A10 BIND
// this file.
//
// ✅ RETITLED AND NARROWED rather than rethemed — the scaffold's "Connecting words"
// names something Indonesian genuinely has, and A1 took only the first layer of it.
// Measured against all 480 A1 cards, u12 l3 gave six connectors — `yang` · `atau` ·
// `tetapi` · `karena` · `kalau` · `untuk` — plus `jadi` from u1, `dan`, `dengan`,
// `sambil` and `sementara`. That is enough to coordinate and to give one reason.
// **What was missing is everything that SUBORDINATES:** no *even though*, no
// *nevertheless*, no *whereas*, no *except*, no *with the result that*, no *for
// that reason*, no *thanks to*, no *for the sake of*, no *so that*, no *besides
// that*, no *as well as*, no *let alone*, no *for example*, no *namely*, no
// *whether*, no *the fact that*, no *supposing*, no *as long as*. A learner could
// join two facts and could not concede, conclude, qualify, exemplify or embed —
// which is most of what a B-level sentence does.
//   l1  conceding   — meskipun · namun · padahal · sedangkan · tetap · kecuali
//   l2  concluding  — sehingga · oleh karena itu · akibatnya · berkat ·
//                     gara-gara · demi
//   l3  adding      — supaya · selain itu · serta · apalagi · misalnya · yaitu
//   l4  embedding   — apakah · bahwa · entah · seandainya · asalkan · selama
//
// 🚨 **THIS UNIT IS WHERE accept[] COLLISIONS CLUSTER, AND FOUR GLOSSES WERE
// REWRITTEN BEFORE A CARD WAS WRITTEN.** A1's `tetapi` (but) carries BOTH
// **"although"** AND **"however"** in its accept[]; `jadi` (so) carries
// **"therefore"**; `kalau` (if) carries **"provided that"** AND **"supposing"**;
// and `itu` simply IS **"that"**. Every obvious gloss for this unit's four most
// important cards was therefore already taken:
//   `meskipun`        → "even though"     (NOT although — tetapi has it)
//   `namun`           → "nevertheless"    (NOT however — tetapi has it)
//   `oleh karena itu` → "for that reason" (NOT therefore — jadi has it)
//   `bahwa`           → "the fact that"   (NOT that — itu IS it)
//   `asalkan`         → "as long as"      (NOT provided that — kalau has it)
//   `seandainya`      → "if it were so"   (NOT supposing — kalau has it)
// None of these is a fudge: each is a real English rendering of the Indonesian, and
// in two cases it is the BETTER one. But the method matters more than the outcome —
// **probe accept[] and not just `meaning`** (unit21.js A4), because
// `lint:curriculum` and `validate:content` see none of this.
//
// ⚠️ `walaupun` IS NOT CARDED, and that is convention 3 working correctly.
// `walaupun` and `meskipun` are the same word in two shapes — identical meaning,
// identical grammar, both universally understood, and no Indonesian would draw a
// line between them. Carding both would teach one lexeme twice, which is what
// convention 3 forbids. `meskipun` takes the card and `walaupun` is in its hint.
// Same call as A1's `kenapa`/`mengapa` and `tunggu`/`menunggu`.
// For the same reason `agar` is in `supaya`'s hint rather than on its own card.
//
// ⚠️ `gara-gara` IS COLLOQUIAL AND IS CARDED ANYWAY — flagged because convention 7
// defers the Jakarta layer. It is not Jakarta slang: it is understood in every
// province, used in speech everywhere, and it does a job `karena` cannot. `karena`
// is neutral *because*; `gara-gara` is *all because of*, and it always assigns
// BLAME. A learner who only has `karena` cannot express that at all. It is a
// non-plural reduplication (convention 5) — `gara` alone is not a word.
//
// AFFIX ROOTS CHECKED BY HAND (the LEXEME probe fails open for Indonesian —
// unit1.js convention 3; each root stripped off and grepped in TAUGHT-WORDS.md):
//   akibatnya → akibat   ⚠️ `akibat` (a consequence) is carded EARLIER in this
//     block. Carded again with -nya because the bare noun does not give you the
//     discourse connector. Drill-safe — "akibatnya" holds "akibat" at index 0 but
//     the next character is "n", a letter, so findWholeWord("akibat") does NOT
//     match inside it, and `akibat`'s own drill is untouched.
//   apakah → apa         ⚠️ `apa` (what) IS taught. Carded: *what* does not give
//     you the yes-or-no marker *whether*. Drill-safe ("apa" at index 0 followed by
//     "k", a letter).
//   selain itu → lain    ⚠️ `lain` (other) IS taught, and `itu` (that) is too — so
//     BOTH halves of this two-word front are known. Carded because *other* plus
//     *that* does not predict the fixed connector *besides that*; convention 8
//     licenses it. ⚠️ Drill-safety needed checking in the other direction: a drill
//     containing `selain itu` DOES whole-word-match front `itu`, since a space is
//     not a letter. `itu`'s own A1 drill predates this word and cannot contain it.
//     Verified rather than assumed.
//   oleh karena itu → karena + itu  ⚠️ Same shape, three words, and `karena` is
//     taught too. Same verdict, same check: `karena`'s and `itu`'s A1 drills cannot
//     contain a phrase that did not exist when they were written.
//   asalkan → asal · seandainya → andai · misalnya → misal · sedangkan → sedang
//     ⚠️ (`sedang`, in the middle of, IS taught. `sedangkan` is a DIFFERENT WORD —
//     the contrastive *whereas* — and the two are not related in use at all. Carded;
//     drill-safe, since "sedangkan" holds "sedang" at index 0 followed by "k") ·
//   selama → lama ⚠️ (`lama`, old, IS taught; *old* does not give you *for the
//     duration of*, and "selama" holds "lama" at index 2 preceded by "e") ·
//   sehingga → hingga · supaya · namun · padahal · tetap ⚠️ (see below) ·
//   kecuali · berkat · demi · serta · apalagi · yaitu · bahwa · entah · meskipun
//     — every other root above is untaught.
//
// ⚠️ `tetap` AND `tetapi` ARE ONE LETTER APART AND MEAN DIFFERENT THINGS, which is
// why `tetap` is carded here rather than left out. `tetapi` (but) is A1's;
// `tetap` means *to stay the same, to remain* and, adverbially, *nonetheless*.
// A learner who has only seen `tetapi` will read `tetap` as a typo. Its hint names
// the pair explicitly. **Not a duplicate front** — the strings differ, and so do
// the words.
//
// FOLD CHECK (convention 9, measured through the real `normalizeReading(f, "id")`):
// `oleh karena itu` → "olehkarenaitu" · `selain itu` → "selainitu" · `gara-gara` →
// "garagara". All `[a-z]+`; none collides with the 480 A1 readings or this block's
// other 216. ⚠️ Convention 9's space hazard: only the SPACED forms are taught here,
// never a solid *selainitu*.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT29 = {
  id: "id-u29",
  lang: "id",
  title: "Menyambung kalimat",
  order: 29,
  stage: "a2",
  lessons: [
    {
      id: "id-u29l1",
      unit: 29,
      lesson: 1,
      title: "Meskipun dan namun",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Concede a point and then push back against it, and mark two facts as standing in contrast.",
      items: [
        { id: "id-u29l1-meskipun", type: "vocab", front: "meskipun", reading: "meskipun", meaning: "even though", example: { jp: "Meskipun hujan, kami tetap berangkat.", en: "Even though it was raining, we set off anyway." }, accept: ["in spite of the fact that", "notwithstanding", "for all that"], drill: { jp: "Meskipun lelah dia tetap bekerja", en: "Even though he is tired he still works" }, hint: "muhs-kee-POON. ⚠️ Walaupun means exactly the same thing and is just as common — they are one word in two shapes, so learn to recognise both and use whichever comes out. Glossed even though rather than although because tetapi, but, already carries although." },
        { id: "id-u29l1-namun", type: "vocab", front: "namun", reading: "namun", meaning: "nevertheless", example: { jp: "Harga itu mahal. Namun kami tetap membeli.", en: "That price was expensive. Nevertheless we bought it." }, accept: ["all the same", "even so", "yet despite that"], drill: { jp: "Dia miskin namun sangat ramah", en: "He is poor, nevertheless very friendly" }, hint: "NAH-moon. Where meskipun opens a subordinate clause, namun joins two SENTENCES and usually starts the second one. ⚠️ Slightly formal — in speech Indonesians reach for tapi, the short form of tetapi. Glossed nevertheless because tetapi already carries however." },
        { id: "id-u29l1-padahal", type: "vocab", front: "padahal", reading: "padahal", meaning: "when in fact", example: { jp: "Dia bilang sudah selesai, padahal belum.", en: "He said it was finished, when in fact it was not." }, accept: ["whereas in truth", "and yet in reality", "despite the fact that"], drill: { jp: "Dia tidur padahal pekerjaan belum selesai", en: "He is sleeping when in fact the work is not finished" }, hint: "pah-dah-HAHL. 🚨 ONE OF THE MOST USEFUL WORDS IN INDONESIAN AND ENGLISH HAS NO CLEAN EQUIVALENT. It marks the second clause as the awkward truth the first one ignored, and it always carries a note of reproach or surprise. Learn it from the example." },
        { id: "id-u29l1-sedangkan", type: "vocab", front: "sedangkan", reading: "sedangkan", meaning: "by contrast", example: { jp: "Saya suka teh, sedangkan kakak suka kopi.", en: "I like tea; by contrast my older sibling likes coffee." }, accept: ["on the other hand", "as against which", "while the other"], drill: { jp: "Kota itu ramai sedangkan desa ini sepi", en: "That city is crowded whereas this village is quiet" }, hint: "suh-DAHNG-kan. It sets two things side by side as a CONTRAST, without blame — that is the difference from padahal. ⚠️ Do not confuse it with sedang, in the middle of, which you already have: one letter apart, and completely unrelated in use. Sementara can do this job too." },
        { id: "id-u29l1-tetap", type: "vocab", front: "tetap", reading: "tetap", meaning: "to stay the same", example: { jp: "Harga bensin tetap sampai bulan depan.", en: "The petrol price stays the same until next month." }, accept: ["to remain unchanged", "still the case", "fixed"], drill: { jp: "Dia tetap datang meskipun hujan besar", en: "He comes anyway even though the rain is heavy" }, hint: "tuh-TAHP. ⚠️ ONE LETTER FROM tetapi, BUT, AND A DIFFERENT WORD ALTOGETHER. As a verb it means to remain unchanged; before another verb it means *anyway, all the same* — dia tetap datang, he came anyway. Karyawan tetap is a permanent employee, as against kontrak." },
        { id: "id-u29l1-kecuali", type: "vocab", front: "kecuali", reading: "kecuali", meaning: "except", example: { jp: "Semua sudah pulang kecuali dia.", en: "Everyone has gone home except him." }, accept: ["apart from", "other than", "but not"], drill: { jp: "Toko itu ramai setiap hari kecuali hari Minggu", en: "That shop is busy every day except Sunday" }, hint: "kuh-choo-AH-lee — the c is CH. It carves one case out of a set you have just named, so it follows semua, setiap or a list. ⚠️ It also means *unless* at the head of a clause: kecuali kamu mau, unless you want to. Pengecualian is an exception." },
      ],
    },
    {
      id: "id-u29l2",
      unit: 29,
      lesson: 2,
      title: "Sehingga dan akibatnya",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Draw a conclusion — state the result, credit the cause, blame the cause, or name what it was all for.",
      items: [
        { id: "id-u29l2-sehingga", type: "vocab", front: "sehingga", reading: "sehingga", meaning: "with the result that", example: { jp: "Jalan macet sehingga kami terlambat.", en: "The road was jammed, with the result that we were late." }, accept: ["so that as a result", "to the point that", "and consequently"], drill: { jp: "Hujan besar sehingga acara itu berhenti", en: "The rain was heavy so the event stopped" }, hint: "suh-HEENG-ga. From hingga, up to — so it means *up to the point where*. ⚠️ It marks a RESULT that followed, where supaya marks a purpose you intended. Sehingga is what happened; supaya is what you were after. Do not swap them." },
        { id: "id-u29l2-olehkarenaitu", type: "vocab", front: "oleh karena itu", reading: "olehkarenaitu", meaning: "for that reason", example: { jp: "Dia sakit. Oleh karena itu dia tidak datang.", en: "He is ill. For that reason he did not come." }, accept: ["that is why", "hence", "on those grounds"], drill: { jp: "Harga naik oleh karena itu kami menabung", en: "Prices rose, for that reason we are saving" }, hint: "OH-leh kah-RUH-na EE-too — three words, and the reading folds them into one. Built on the karena and itu you already have. ⚠️ Formal and written; in speech Indonesians say jadi or makanya. Glossed for that reason because jadi already carries therefore. Note the SPACES: never write it solid." },
        { id: "id-u29l2-akibatnya", type: "vocab", front: "akibatnya", reading: "akibatnya", meaning: "as a result", example: { jp: "Dia lupa membawa paspor. Akibatnya dia tidak bisa berangkat.", en: "He forgot to bring his passport. As a result he could not set off." }, accept: ["and so it followed that", "the upshot was", "consequently"], drill: { jp: "Mobil rusak akibatnya kami berjalan ke pasar", en: "The car broke down, as a result we walked to the market" }, hint: "ah-kee-BAHT-nya. Built on akibat, a consequence, which you already have — the -nya makes it a connector. ⚠️ It leans NEGATIVE, exactly as akibat does, so use it for consequences nobody wanted. For a happy one you want berkat, the next card." },
        { id: "id-u29l2-berkat", type: "vocab", front: "berkat", reading: "berkat", meaning: "thanks to", example: { jp: "Berkat rekan saya, laporan itu selesai.", en: "Thanks to my colleague, that report was finished." }, accept: ["owing to something good", "by virtue of", "through the good of"], drill: { jp: "Berkat cuaca cerah kami berhasil berfoto", en: "Thanks to the clear weather we managed to take photos" }, hint: "buhr-KAHT. ⚠️ STRICTLY POSITIVE — berkat only credits a cause with a GOOD outcome, so it is the mirror of gara-gara, which only assigns blame. As a noun it means a blessing." },
        { id: "id-u29l2-garagara", type: "vocab", front: "gara-gara", reading: "garagara", meaning: "all because of", example: { jp: "Kami terlambat gara-gara macet.", en: "We were late all because of the traffic." }, accept: ["on account of", "thanks to something bad", "as a result of the wretched"], drill: { jp: "Dia kecewa gara-gara berita itu", en: "He is disappointed all because of that news" }, hint: "GAH-ra-GAH-ra. ⚠️ THE BLAMING BECAUSE. karena is neutral; gara-gara always says somebody or something is at fault, and berkat is its positive mirror. Colloquial but understood in every province, and a learner without it cannot express blame at all. A doubling that builds a new word — gara alone is not one." },
        { id: "id-u29l2-demi", type: "vocab", front: "demi", reading: "demi", meaning: "for the sake of", example: { jp: "Dia bekerja setiap hari demi keluarga.", en: "He works every day for the sake of his family." }, accept: ["in the interests of", "out of regard for", "for the benefit of"], drill: { jp: "Kami menabung demi anak kami", en: "We are saving for the sake of our children" }, hint: "DUH-mee. ⚠️ Heavier than untuk, for, which you already have: untuk is any purpose, demi is a purpose worth a sacrifice. Demi keluarga, demi anak — it carries real weight and sounds odd on something trivial." },
      ],
    },
    {
      id: "id-u29l3",
      unit: 29,
      lesson: 3,
      title: "Supaya dan misalnya",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Add to an argument — state the purpose, pile on another point, and give an example or a definition.",
      items: [
        { id: "id-u29l3-supaya", type: "vocab", front: "supaya", reading: "supaya", meaning: "so that", example: { jp: "Saya berangkat awal supaya tidak terlambat.", en: "I set off early so that I would not be late." }, accept: ["in order that", "so as to", "with the aim that"], drill: { jp: "Dia menabung supaya bisa berlibur", en: "He saves money so that he can go on holiday" }, hint: "soo-PAH-ya. ⚠️ Agar means exactly the same and is more formal — one word in two shapes, so recognise both. THE PAIR TO GET RIGHT: supaya is the purpose you INTENDED, sehingga the result that FOLLOWED. Saya belajar supaya lulus, but saya belajar sehingga lulus says something subtly different." },
        { id: "id-u29l3-selainitu", type: "vocab", front: "selain itu", reading: "selainitu", meaning: "besides that", example: { jp: "Harga itu murah. Selain itu, warungnya dekat.", en: "That price is cheap. Besides that, the food stall is nearby." }, accept: ["in addition", "what is more", "furthermore"], drill: { jp: "Dia rajin selain itu dia sangat pintar", en: "He is diligent; besides that he is very clever" }, hint: "suh-LIGH-in EE-too. Built on lain, other, and itu, that, both of which you already have — literally *other than that*. ⚠️ Selain on its own means *apart from*, close to kecuali: selain saya, apart from me. Note the SPACE: two words." },
        { id: "id-u29l3-serta", type: "vocab", front: "serta", reading: "serta", meaning: "and also", example: { jp: "Ibu serta ayah datang ke acara itu.", en: "Mother and also father came to that event." }, accept: ["in company with", "accompanied by", "not forgetting"], drill: { jp: "Guru serta pelajar berdiskusi di kelas", en: "The teacher along with the pupils discussed things in class" }, hint: "SUHR-ta. ⚠️ A more formal dan, and, used mostly in writing and in lists — dan is what you say. Its real value is recognition: you will read serta constantly in news and official notices. Beserta means accompanied by." },
        { id: "id-u29l3-apalagi", type: "vocab", front: "apalagi", reading: "apalagi", meaning: "let alone", example: { jp: "Dia tidak bisa berjalan, apalagi berenang.", en: "He cannot walk, let alone swim." }, accept: ["much less", "still more so", "never mind"], drill: { jp: "Saya tidak punya uang apalagi mobil", en: "I have no money, let alone a car" }, hint: "ah-pah-LAH-gee. Built on apa and lagi, both yours already. ⚠️ TWO USES, opposite in direction: after a negative it means *let alone* (the drill); after a positive it means *especially, all the more so* — enak, apalagi masih panas, delicious, especially while still hot. Context decides." },
        { id: "id-u29l3-misalnya", type: "vocab", front: "misalnya", reading: "misalnya", meaning: "for example", example: { jp: "Banyak buah manis di sini, misalnya buah itu.", en: "There is a lot of sweet fruit here, for example that one." }, accept: ["for instance", "such as", "to take a case"], drill: { jp: "Saya suka binatang kecil misalnya kucing", en: "I like small animals, for example cats" }, hint: "mee-SAHL-nya. From misal, a supposition. ⚠️ Glossed for example, and its accept[] deliberately avoids *example* and *a sample* on their own, because contoh, which you already have, IS the noun *example*. Contoh is the THING; misalnya introduces it." },
        { id: "id-u29l3-yaitu", type: "vocab", front: "yaitu", reading: "yaitu", meaning: "that is to say", example: { jp: "Ada satu masalah, yaitu uang kurang.", en: "There is one problem, that is to say a shortage of money." }, accept: ["which is precisely", "specifically", "and that is"], drill: { jp: "Ada satu tujuan yaitu istirahat panjang", en: "There is one goal, that is to say a long rest" }, hint: "ya-EE-too. From ya plus itu — literally *yes, that*. ⚠️ Different job from misalnya: misalnya gives ONE example out of many, yaitu names THE thing exactly. Yakni is the formal twin." },
      ],
    },
    {
      id: "id-u29l4",
      unit: 29,
      lesson: 4,
      title: "Apakah dan bahwa",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Put a whole clause inside another one — a yes-or-no question, a reported fact, or a condition.",
      items: [
        { id: "id-u29l4-apakah", type: "vocab", front: "apakah", reading: "apakah", meaning: "whether", example: { jp: "Saya tidak tahu apakah dia sudah pulang.", en: "I do not know whether he has gone home." }, accept: ["if or not", "the question of whether", "whether or not"], drill: { jp: "Saya tanya apakah kamu mau kopi", en: "I asked whether you want coffee" }, hint: "AH-pah-kah. Built on apa, what, plus the question particle -kah. ⚠️ TWO JOBS: it opens a formal yes-or-no question (Apakah Anda guru?) and it embeds one inside another clause (the example). In speech the bare apa does the first job and Indonesians often drop it entirely." },
        { id: "id-u29l4-bahwa", type: "vocab", front: "bahwa", reading: "bahwa", meaning: "the fact that", example: { jp: "Dia bilang bahwa laporan itu sudah selesai.", en: "He said that the report was already finished." }, accept: ["introducing a reported clause", "to the effect that", "the point that"], drill: { jp: "Saya tahu bahwa harga itu mahal", en: "I know that the price is expensive" }, hint: "BAH-wa. ⚠️ Glossed the fact that because itu simply IS *that*, so the bare word was taken. And the real lesson is that bahwa is OPTIONAL and usually dropped: dia bilang laporan sudah selesai is what an Indonesian actually says. Learn it to READ formal writing, where it is everywhere." },
        { id: "id-u29l4-entah", type: "vocab", front: "entah", reading: "entah", meaning: "who knows", example: { jp: "Entah kenapa dia tidak datang.", en: "Who knows why he did not come." }, accept: ["goodness knows", "I have no idea whether", "it is anyone's guess"], drill: { jp: "Entah di mana kunci mobil itu", en: "Who knows where that car key is" }, hint: "UHN-tah, first e swallowed. It fronts a question word to say you cannot answer it — entah kenapa, entah di mana, entah siapa. ⚠️ Entah-entah is not a word, but entahlah on its own is the shrugged *no idea*. It is warmer and less abrupt than tidak tahu." },
        { id: "id-u29l4-seandainya", type: "vocab", front: "seandainya", reading: "seandainya", meaning: "if it were so", example: { jp: "Seandainya saya kaya, saya akan berlibur setiap bulan.", en: "If I were rich, I would go on holiday every month." }, accept: ["were it the case that", "imagine if", "had it been that"], drill: { jp: "Seandainya hujan berhenti kami akan berangkat", en: "If the rain were to stop we would set off" }, hint: "suh-an-DIGH-nya. From andai, a supposition. ⚠️ It marks a condition that is NOT true — the unreal *if*, where kalau covers the ordinary one. Kalau saya kaya is a real possibility; seandainya saya kaya admits you are not. Glossed if it were so because kalau already carries supposing." },
        { id: "id-u29l4-asalkan", type: "vocab", front: "asalkan", reading: "asalkan", meaning: "as long as", example: { jp: "Saya mau pergi asalkan kamu datang juga.", en: "I will go as long as you come too." }, accept: ["only if", "on condition that", "so long as"], drill: { jp: "Kami setuju asalkan harga tidak naik", en: "We agree as long as the price does not rise" }, hint: "ah-SAHL-kan. From asal, origin or basis — so it states the ONE condition everything rests on. Asal alone does the same job in speech: asal kamu ikut. ⚠️ Glossed as long as because kalau already carries provided that." },
        { id: "id-u29l4-selama", type: "vocab", front: "selama", reading: "selama", meaning: "for the duration of", example: { jp: "Kami menginap di desa selama dua minggu.", en: "We stayed in the village for two weeks." }, accept: ["throughout", "over a period of", "all the while"], drill: { jp: "Dia bekerja di kantor itu selama lima tahun", en: "He worked at that office for five years" }, hint: "suh-LAH-ma. ⚠️ Do not read the lama inside it as *old* — with se- it means *for the whole length of*, and it is the standard way to give a duration. It ALSO means *as long as* in the conditional sense, overlapping asalkan: selama kamu setuju, as long as you agree." },
      ],
    },
  ],
};
