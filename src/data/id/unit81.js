// ID Unit 81 — Karya tulis dan sastra ("Written work and literature") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u77–u87). The 12 conventions in unit1.js and the 10 A2 conventions
// in unit21.js BIND this file. Read both before editing.
//
// THE HOLE THIS FILLS, measured against all 1200 A1+A2 cards. A2 taught the
// PRESS (`berita` · `koran` · `majalah` · `wartawan` · `iklan` · `siaran` ·
// `judul` · `penulis` · `menulis` · `membaca`) and the STAGE (`panggung` ·
// `penonton` · `hiburan` · `lagu` · `musik` · `seni` · `lukisan`). It taught
// `cerita`, `buku` and `perpustakaan`. It taught nothing at all for a poem, a
// literature, an author of fiction, a chapter, a publisher, a manuscript, a
// quotation, a plot or a setting. A learner with 1200 words could not say what
// kind of book they like.
//
// ⚠️ THE CROSS-BLOCK BOUNDARY, AND IT IS THE SHARPEST ONE IN THIS BLOCK.
// Another block owns SCREEN AND STAGE: film, TV, broadcast, performer, audience,
// episode. THIS UNIT OWNS THE WRITTEN WORK. The crew lead's words: both seats
// must read this or they will both card the actor.
//   • MINE:   `tokoh` — a character IN A STORY, on the page.
//   • MINE:   `mengkritik` — to review critically, as a critic writes.
//   • THEIRS: `ulasan` — a review as a published piece. NOT carded here.
//   • THEIRS: anything about a performer, a screen or an audience.
// And the second boundary, from another block again: `alur` (a plot) is MINE and
// belongs to the story, NOT to the PROCESS-AND-PROCEDURE slot, where it would
// read as "a workflow". Their words are `tahap` · `prosedur` · `langkah`.
//
// FOUR WORDS DECLINED FOR THE COPY-TASK RULE (A10 — front and English gloss
// differ by a letter or two, so the produce card tests nothing; the same
// rejection A2 made for `skor`):
//   `novel`     identical in both languages. This is the headline word of the
//               theme and it is STILL out: pronounced the same, spelled the same,
//               and a card that shows "novel" and accepts "novel" teaches
//               nothing. `cerpen`, `karya`, `sastra` and `pengarang` carry the
//               theme instead, and a learner who can read those will read `novel`
//               on sight anyway.
//   `paragraf`  one letter from "paragraph".
//   `prosa`     one letter from "prose".
//   `tema`      two from "theme".
//
// ALSO DECLINED:
//   `kritik`    second card off root `kritik` next to `mengkritik`, with the
//               glosses stacked. The verb is the useful one.
//   `karangan`  THIRD card off root `karang` after `pengarang` and `mengarang`,
//               which is A6's ceiling, and it is readable straight off the parts.
//   `penyair`   root `syair`, not `air` — the probe's flag was wrong — but `sajak`
//               and `pantun` already carry the poetry strand.
//   `kisah` · `riwayat` · `tamat`  all free, all cut for space: `cerita` and
//               `dongeng` already cover the narrative nouns.
//
// THREE CARDS ARE DERIVATIONS OF A TAUGHT ROOT, all three named in their hints:
//   `pembaca`   <- membaca (to read)
//   `pengarang` + `mengarang` <- root `karang`, which is NOT taught; the probe
//               matched `sekarang` ("now"), and that is a false positive — se-
//               plus karang is a historical accident, not a live derivation.
//   `terjemahan` + `menerjemahkan` <- root `terjemah`, not taught. Two cards.
//
// GLOSSES REWRITTEN BECAUSE THE GRADER COLLIDED THEM (`normalizeMeaning` strips a
// leading "to " and "a/an/the"; `lint:curriculum` compares exact strings and saw
// none of these):
//   `pengarang` "an author"  -> `penulis` accepts "an author". Now "a novelist".
//   `sampul`    "a cover"    -> `menutup` accepts "to cover". Now "a book jacket".
// `jilid` WAS CARDED AND IS NOW NOT. Its only honest gloss was "one bound volume of a
// set", because `buku` already accepts "a volume" from the grader — a long gloss is a
// bad produce prompt. The slot went to **`baris`** instead, which this unit NEEDED:
// `scope-strict-drills.mjs` rejected four poetry sentences for using `baris`, a line
// of text, and the 1200-word base teaches no word for a line or a row at all. So the
// swap closed a real core-inventory gap and removed a forced gloss in one move.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT81 = {
  id: "id-u81",
  lang: "id",
  title: "Karya tulis dan sastra",
  order: 81,
  stage: "b1",
  lessons: [
    {
      id: "id-u81l1",
      unit: 81,
      lesson: 1,
      title: "Sastra dan pengarang",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Say that a book is literature rather than information, name the person who wrote it and the people who read it, and say that a critic has reviewed it.",
      items: [
        { id: "id-u81l1-sastra", type: "vocab", front: "sastra", reading: "sastra", meaning: "literature", example: { jp: "Dia belajar sastra Indonesia di universitas.", en: "She studies Indonesian literature at university." }, accept: ["imaginative writing", "letters as a field of study"], drill: { jp: "Dia belajar sastra Indonesia di universitas", en: "She studies Indonesian literature at university" }, hint: "SAHS-tra, from Sanskrit. Writing valued as ART, not as information — a faculty name as well as a kind of book. Fakultas Sastra is the arts faculty at every Indonesian university." },
        { id: "id-u81l1-tulisan", type: "vocab", front: "tulisan", reading: "tulisan", meaning: "a piece of writing", example: { jp: "Saya suka tulisan di majalah itu.", en: "I like the writing in that magazine." }, accept: ["something that has been written", "a written piece", "a text somebody wrote"], drill: { jp: "Saya suka tulisan di majalah itu", en: "I like the writing in that magazine" }, hint: "too-LEE-san. You know menulis, to write, from u18 and tertulis, written down, from u70 — this is the same root with -an on the end, which turns an action into the THING it produces. So tulisan is the writing itself: an article, a passage, handwriting on a page. ⚠️ Not sastra, which is literature as a whole field. Replaced karya here, which u64 already teaches for an artist’s body of work." },
        { id: "id-u81l1-pengarang", type: "vocab", front: "pengarang", reading: "pengarang", meaning: "a novelist", example: { jp: "Pengarang buku itu sudah mati lima puluh tahun lalu.", en: "The author of that book died fifty years ago." }, accept: ["an author of fiction", "a writer of stories"], drill: { jp: "Pengarang buku itu sudah mati", en: "The author of that book has died" }, hint: "puh-NGA-rahng. You already know penulis, which is a writer of anything at all including news. A pengarang specifically MAKES THINGS UP — fiction, stories, poems. The gloss says novelist because the grader already gives \"an author\" to penulis." },
        { id: "id-u81l1-mengarang", type: "vocab", front: "mengarang", reading: "mengarang", meaning: "to compose a story", example: { jp: "Anak itu suka mengarang cerita tentang binatang.", en: "That child likes making up stories about animals." }, accept: ["to make up as fiction", "to author a text"], drill: { jp: "Anak itu suka mengarang cerita tentang binatang", en: "That child likes making up stories about animals" }, hint: "muh-NGA-rahng. Same root as pengarang. menulis is putting words on paper; mengarang is INVENTING what goes there. Used with a hint of scepticism too: jangan mengarang means stop making things up." },
        { id: "id-u81l1-pembaca", type: "vocab", front: "pembaca", reading: "pembaca", meaning: "a reader", example: { jp: "Pembaca muda lebih suka cerita yang pendek.", en: "Young readers prefer short stories." }, accept: ["the reading public", "someone who reads"], drill: { jp: "Pembaca muda lebih suka cerita pendek", en: "Young readers prefer short stories" }, hint: "pum-BA-cha — remember c is CH. The pe- doer frame on membaca, which you already know. Indonesian magazines address their audience as Pembaca, the way English says \"Dear reader\"." },
        { id: "id-u81l1-mengkritik", type: "vocab", front: "mengkritik", reading: "mengkritik", meaning: "to review critically", example: { jp: "Dosen itu mengkritik buku baru di koran.", en: "That lecturer reviewed the new book critically in the paper." }, accept: ["to criticise in writing", "to appraise and find fault"], drill: { jp: "Dosen itu mengkritik buku baru di koran", en: "That lecturer criticises the new book in the paper" }, hint: "mung-kree-TEEK. Judging a work and saying what is wrong with it. You already know menilai, to assess, and mengeluh, to complain; mengkritik is the public, reasoned version." },
      ],
    },
    {
      id: "id-u81l2",
      unit: 81,
      lesson: 2,
      title: "Naskah, penerbit, dan terbit",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Follow a book from manuscript to publication: name the typescript, the publisher, the act of coming out, and the physical parts of the finished book.",
      items: [
        { id: "id-u81l2-naskah", type: "vocab", front: "naskah", reading: "naskah", meaning: "a manuscript", example: { jp: "Naskah itu masih di meja penerbit.", en: "That manuscript is still on the publisher's desk." }, accept: ["a typescript", "a text not yet published"], drill: { jp: "Naskah itu masih di meja penerbit", en: "That manuscript is still on the publisher's desk" }, hint: "NAHS-kah. The written text before it becomes a book, and also the script of a speech or a play. Not the finished object — that is buku." },
        { id: "id-u81l2-penerbit", type: "vocab", front: "penerbit", reading: "penerbit", meaning: "a publisher", example: { jp: "Penerbit besar itu ada di Jakarta.", en: "That big publisher is in Jakarta." }, accept: ["a publishing house", "the firm that issues a book"], drill: { jp: "Penerbit besar itu ada di Jakarta", en: "That big publisher is in Jakarta" }, hint: "puh-nur-BEET. The pe- doer frame on terbit, the next card. It is the COMPANY, not a person: Indonesian names the firm, Penerbit Gramedia." },
        { id: "id-u81l2-terbit", type: "vocab", front: "terbit", reading: "terbit", meaning: "to come out in print", example: { jp: "Buku itu terbit tahun lalu dan cepat terkenal.", en: "That book came out last year and quickly became famous." }, accept: ["to be published", "to be issued"], drill: { jp: "Buku itu terbit tahun lalu", en: "That book came out last year" }, hint: "tur-BEET. What a book, a magazine or an issue DOES when it appears. The same verb is used of the sun rising: matahari terbit, which is why Japan is Negeri Matahari Terbit in Indonesian." },
        { id: "id-u81l2-sampul", type: "vocab", front: "sampul", reading: "sampul", meaning: "a book jacket", example: { jp: "Sampul buku itu merah dan hitam.", en: "That book's cover is red and black." }, accept: ["the outer cover of a book", "a dust jacket"], drill: { jp: "Sampul buku itu merah dan hitam", en: "That book's cover is red and black" }, hint: "SAHM-pool. The outside of a book or an envelope. The gloss says book jacket rather than \"a cover\" because the grader already reads menutup, \"to cover\", as the same answer." },
        { id: "id-u81l2-bab", type: "vocab", front: "bab", reading: "bab", meaning: "a chapter", example: { jp: "Saya sudah membaca tiga bab malam ini.", en: "I have read three chapters tonight." }, accept: ["a numbered division of a book", "a section of a text"], drill: { jp: "Saya sudah membaca tiga bab", en: "I have read three chapters" }, hint: "BAHB, one syllable. It shares nothing with sebab, \"because\", which you already know — the probe matched them on letters, but they are unrelated words. Indonesian textbooks and laws are both divided into bab." },
        { id: "id-u81l2-baris", type: "vocab", front: "baris", reading: "baris", meaning: "a line of text", example: { jp: "Judul itu panjang, jadi ada di dua baris.", en: "That title is long, so it is on two lines." }, accept: ["a written line", "a row"], drill: { jp: "Judul itu panjang jadi ada dua baris", en: "That title is long so there are two lines" }, hint: "BA-rees. One line of writing, and also a row of anything — chairs, trees, people standing in line. berbaris is to line up, which is what Indonesian schoolchildren do every morning. This is the word the poetry lesson needs." },
      ],
    },
    {
      id: "id-u81l3",
      unit: 81,
      lesson: 3,
      title: "Tokoh, alur, dan latar",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Discuss what happens inside a story: name its characters, its plot, its setting, and quote a line from it.",
      items: [
        { id: "id-u81l3-tokoh", type: "vocab", front: "tokoh", reading: "tokoh", meaning: "a character in a story", example: { jp: "Tokoh dalam cerita itu seorang petani.", en: "The character in that story is a farmer." }, accept: ["a figure in a narrative", "a person in a book"], drill: { jp: "Tokoh dalam cerita itu seorang petani", en: "The character in that story is a farmer" }, hint: "TO-koh. A person in a story — tokoh utama is the protagonist. The same word also means a prominent public figure, tokoh nasional, so the sentence decides which. This card is the written page; a live performer is a different word in a different unit." },
        { id: "id-u81l3-alur", type: "vocab", front: "alur", reading: "alur", meaning: "a plot", example: { jp: "Alur cerita itu mudah tetapi akhirnya menarik.", en: "That story's plot is simple but the ending is gripping." }, accept: ["the storyline", "how the events of a story run"], drill: { jp: "Alur cerita itu mudah tetapi menarik", en: "That story's plot is simple but interesting" }, hint: "AH-loor. The chain of events in a story, from the root sense of a groove or channel that something runs along. Keep it for STORIES: for a sequence of work steps Indonesian says prosedur, and that belongs to another unit." },
        { id: "id-u81l3-latar", type: "vocab", front: "latar", reading: "latar", meaning: "a setting", example: { jp: "Latar cerita itu di desa kecil pada zaman kuno.", en: "That story's setting is a small village in ancient times." }, accept: ["the time and place of a story", "a backdrop"], drill: { jp: "Latar cerita itu di desa kecil", en: "That story's setting is a small village" }, hint: "LA-tar. Where and when the story happens. In full it is latar belakang, which also means \"background\" about a person's history — tanpa latar belakang yang jelas." },
        { id: "id-u81l3-dongeng", type: "vocab", front: "dongeng", reading: "dongeng", meaning: "a folk tale", example: { jp: "Nenek saya sering membaca dongeng tentang raja.", en: "My grandmother often reads folk tales about a king." }, accept: ["a fairy tale", "an old story handed down"], drill: { jp: "Nenek saya sering membaca dongeng tentang raja", en: "My grandmother often reads folk tales about a king" }, hint: "DO-ngeng, with an ng hum in the middle and at the end. An old handed-down story with talking animals or a clever fool. cerita is any story; a dongeng is specifically traditional and usually told to children." },
        { id: "id-u81l3-cerpen", type: "vocab", front: "cerpen", reading: "cerpen", meaning: "a short story", example: { jp: "Koran hari Minggu selalu ada satu cerpen.", en: "The Sunday paper always has one short story." }, accept: ["a piece of short fiction", "a brief published story"], drill: { jp: "Koran hari Minggu selalu ada cerpen", en: "The Sunday paper always has a short story" }, hint: "CHUR-pen. A blend of cerita and pendek, both words you already know — Indonesian shortens common phrases like this constantly. The Sunday short story is a real institution in Indonesian newspapers." },
        { id: "id-u81l3-kutipan", type: "vocab", front: "kutipan", reading: "kutipan", meaning: "a quotation", example: { jp: "Dia menulis kutipan dari buku itu di catatan.", en: "She wrote a quotation from that book in her notes." }, accept: ["a quoted passage", "an excerpt cited"], drill: { jp: "Dia menulis kutipan dari buku itu", en: "She writes a quotation from that book" }, hint: "koo-TEE-pahn. Someone else's words, repeated exactly. The root is kutip, to pick up or to cite, and the verb is mengutip." },
      ],
    },
    {
      id: "id-u81l4",
      unit: 81,
      lesson: 4,
      title: "Puisi, sajak, dan pantun",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Talk about poetry in Indonesian terms — a poem, a rhyme, a stanza, the traditional pantun — and say that a work has been translated.",
      items: [
        { id: "id-u81l4-puisi", type: "vocab", front: "puisi", reading: "puisi", meaning: "a poem", example: { jp: "Dia menulis puisi tentang laut dan angin.", en: "He writes poems about the sea and the wind." }, accept: ["poetry", "a work in verse"], drill: { jp: "Dia menulis puisi tentang laut dan angin", en: "He writes poems about the sea and the wind" }, hint: "poo-EE-see, three syllables. Both one poem and poetry as a whole, because Indonesian nouns are not marked for number. Written and read aloud at school events all over Indonesia." },
        { id: "id-u81l4-sajak", type: "vocab", front: "sajak", reading: "sajak", meaning: "a rhyme", example: { jp: "Sajak di baris terakhir sama dengan baris pertama.", en: "The rhyme in the last line matches the first line." }, accept: ["a rhyming sound at line-end", "a rhyme scheme"], drill: { jp: "Sajak di baris terakhir sama dengan baris pertama", en: "The rhyme in the last line matches the first" }, hint: "SA-jahk. The matching SOUND at the ends of lines. Older writing also uses it loosely for a poem, which is why this card is glossed \"a rhyme\" and puisi carries the poem: two cards, two jobs. The example uses baris, a line or a row." },
        { id: "id-u81l4-pantun", type: "vocab", front: "pantun", reading: "pantun", meaning: "a Malay verse form", example: { jp: "Pantun itu ada empat baris dan selalu ada sajak.", en: "A pantun has four lines and always has rhyme." }, accept: ["a four-line Malay poem", "a traditional rhymed quatrain"], drill: { jp: "Pantun itu ada empat baris dan ada sajak", en: "A pantun has four lines and has rhyme" }, hint: "PAHN-toon. The classical Malay four-liner: two lines of image, two lines of meaning, rhymed a-b-a-b. There is no English word for it, so the gloss describes it. Indonesians still trade them at weddings and in speeches." },
        { id: "id-u81l4-bait", type: "vocab", front: "bait", reading: "bait", meaning: "a stanza", example: { jp: "Puisi itu punya lima bait yang pendek.", en: "That poem has five short stanzas." }, accept: ["a verse of a poem", "a block of lines"], drill: { jp: "Puisi itu punya lima bait yang pendek", en: "That poem has five short stanzas" }, hint: "BA-eet, two syllables, not like English \"bait\". A group of lines set off from the next group. A pantun is exactly one bait." },
        { id: "id-u81l4-terjemahan", type: "vocab", front: "terjemahan", reading: "terjemahan", meaning: "a translation", example: { jp: "Terjemahan buku itu lebih tebal dari yang asli.", en: "The translation of that book is thicker than the original." }, accept: ["a translated version", "a rendering in another language"], drill: { jp: "Terjemahan buku itu lebih tebal dari yang asli", en: "The translation of that book is thicker than the original" }, hint: "tur-juh-MA-hahn. The translated text as a thing. From Arabic through Malay, which is why the cluster rj sits in the middle." },
        { id: "id-u81l4-menerjemahkan", type: "vocab", front: "menerjemahkan", reading: "menerjemahkan", meaning: "to translate", example: { jp: "Siapa yang menerjemahkan puisi itu ke bahasa Inggris?", en: "Who translated that poem into English?" }, accept: ["to render into another language", "to turn into another tongue"], drill: { jp: "Siapa yang menerjemahkan puisi itu", en: "Who translated that poem" }, hint: "Six syllables: muh-nur-juh-MAH-kahn. Same root as terjemahan, with me- in front and -kan behind. It takes ke for the target language: menerjemahkan ke bahasa Indonesia." },
      ],
    },
  ],
};
