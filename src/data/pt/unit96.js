// PT Unit 96 — As artes e a crítica (slot: arts-criticism) — B2
//
// HAVING AN OPINION ABOUT A WORK, IN THE REGISTER A REVIEW USES. u35 gave the
// learner the arts as objects — pintar, o romance, o conto, o público, o
// adepto — and u64 gave the media, including a crítica and o enredo. What is
// missing is the CRITIC'S vocabulary: how a work is built, what a style is
// called, how praise and demolition are actually written in Portuguese, and
// how to talk about what a work means without saying it means one thing.
//
// SLOT BOUNDARIES:
//   pintar, o romance, o conto, a leitura, a personagem, o público at u35;
//   a crítica, o enredo, o título, a censura at u64; elogiar at u39; a corrente
//   at u46; marcante at u63; interpretar at u77. Used in examples, not
//   re-carded — hence a recensão rather than a crítica, enaltecer rather than
//   elogiar, o protagonista rather than a personagem, a vanguarda rather than
//   a corrente. Lower slot wins every time.
//   u90 (mine) owns ambiguity as a property of LANGUAGE; l4 here is ambiguity
//   as something a work does on purpose.
//
// One lexeme per family: a autoria without o autor (taught), simbolizar
// without o símbolo, a apreciação without apreciar.
//
// Conventions: see unit1.js header (language) and unit88.js (B2 band).
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT96 = {
  id: "pt-u96",
  lang: "pt",
  title: "As artes e a crítica",
  order: 96,
  stage: "b2",
  lessons: [
    {
      id: "pt-u96l1",
      unit: 96,
      lesson: 1,
      title: "A obra",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a work is built in Portuguese — who made it, who it follows, how it tells its story.",
      items: [
        { id: "pt-u96l1-aobra", type: "vocab", front: "a obra", reading: "aobra", meaning: "work (of art)", example: { jp: "A obra mais conhecida do autor foi escrita em poucos meses.", en: "The author's best-known work was written in a few months." }, drill: { jp: "A obra mais conhecida é esta", en: "The best-known work is this one" }, accept: ["work", "the work", "work of art", "piece", "body of work"], hint: "O-bra. A single work of art or literature — and also building works: a obra na rua is the roadworks. Em obras means under construction, which every Portuguese city permanently is." },
        { id: "pt-u96l1-retratar", type: "vocab", front: "retratar", reading: "retratar", meaning: "to portray", example: { jp: "O livro retrata a vida numa aldeia do norte nos anos trinta.", en: "The book portrays life in a northern village in the nineteen-thirties." }, drill: { jp: "O livro quer retratar a vida antiga", en: "The book sets out to portray the old way of life" }, accept: ["to portray", "portray", "to depict", "to paint a picture of", "to represent"], hint: "rre-tra-TAR, from o retrato, the portrait. To show what something or someone is like, whether in paint or in words." },
        { id: "pt-u96l1-oprotagonista", type: "vocab", front: "o protagonista", reading: "oprotagonista", meaning: "protagonist", example: { jp: "O protagonista do romance nunca chega a dizer o próprio nome.", en: "The protagonist of the novel never actually says his own name." }, drill: { jp: "O protagonista do romance é jovem", en: "The novel's protagonist is young" }, accept: ["protagonist", "the protagonist", "main character", "lead", "central figure"], hint: "pru-ta-gu-NEESH-ta. The central figure, in a story or in a real event. Like o acionista it does not change shape for gender: o protagonista, a protagonista." },
        { id: "pt-u96l1-anarrativa", type: "vocab", front: "a narrativa", reading: "anarrativa", meaning: "narrative", example: { jp: "A narrativa muda de voz a meio do livro e custa a acompanhar.", en: "The narrative changes voice halfway through the book and is hard to follow." }, drill: { jp: "A narrativa muda mesmo a meio", en: "The narrative changes right in the middle" }, accept: ["narrative", "the narrative", "storytelling", "account", "the telling"], hint: "na-rra-TEE-va. The way a story is told, not the story itself. In the news it has picked up exactly the same sceptical edge as English 'the narrative'." },
        { id: "pt-u96l1-aficcao", type: "vocab", front: "a ficção", reading: "aficcao", meaning: "fiction", example: { jp: "A ficção deste autor parte quase sempre de factos reais.", en: "This author's fiction almost always starts from real events." }, drill: { jp: "A ficção parte de factos reais", en: "The fiction starts from real events" }, accept: ["fiction", "the fiction", "made-up story", "invention"], hint: "fi-SOWN. Made-up writing, and the made-up thing itself. Portugal writes ficção científica for science fiction, often shortened to FC." },
        { id: "pt-u96l1-aautoria", type: "vocab", front: "a autoria", reading: "aautoria", meaning: "authorship", example: { jp: "A autoria do quadro só foi confirmada no ano passado.", en: "The painting's authorship was only confirmed last year." }, drill: { jp: "A autoria do quadro foi confirmada", en: "The painting's authorship was confirmed" }, accept: ["authorship", "the authorship", "attribution", "who made it"], hint: "ow-tu-REE-a. Who made a thing — de autoria de, by. In the news, assumir a autoria is to claim responsibility for an act, the same idea turned dark." },
      ],
    },
    {
      id: "pt-u96l2",
      unit: 96,
      lesson: 2,
      title: "O estilo",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe a style in Portuguese — the avant-garde, the look of a thing, whether it is restrained or unmistakable.",
      items: [
        { id: "pt-u96l2-oestilo", type: "vocab", front: "o estilo", reading: "oestilo", meaning: "style", example: { jp: "O estilo do pintor mudou muito depois da guerra.", en: "The painter's style changed a great deal after the war." }, drill: { jp: "O estilo do pintor mudou muito", en: "The painter's style changed a lot" }, accept: ["style", "the style", "manner", "way", "idiom"], hint: "esh-TEE-lu. The recognisable manner of an artist, a writer or a building. Ter estilo, said of a person, is to have a way of carrying themselves." },
        { id: "pt-u96l2-avanguarda", type: "vocab", front: "a vanguarda", reading: "avanguarda", meaning: "avant-garde", example: { jp: "A vanguarda daquela época surpreendeu o público e hoje está no museu.", en: "The avant-garde of that period startled the public and today hangs in the museum." }, drill: { jp: "A vanguarda daquela época surpreendeu todos", en: "The avant-garde of that period startled everyone" }, accept: ["avant-garde", "the avant-garde", "cutting edge", "the vanguard"], hint: "van-GWAR-da. Borrowed from French and now thoroughly Portuguese. Estar na vanguarda is to be at the leading edge of anything, not only of art." },
        { id: "pt-u96l2-aestetica", type: "vocab", front: "a estética", reading: "aestetica", meaning: "aesthetics", example: { jp: "A estética do filme importa mais do que a história que conta.", en: "The film's aesthetics matter more than the story it tells." }, drill: { jp: "A estética do filme é bonita", en: "The film's aesthetics are beautiful" }, accept: ["aesthetics", "the aesthetics", "look", "visual style", "aesthetic"], hint: "esh-TE-ti-ka. The look and feel of a thing, and the branch of philosophy about beauty. In Portugal um centro de estética is a beauty salon, which amuses philosophers." },
        { id: "pt-u96l2-inconfundivel", type: "vocab", front: "inconfundível", reading: "inconfundivel", meaning: "unmistakable", example: { jp: "A voz do cantor é inconfundível mesmo num disco muito antigo.", en: "The singer's voice is unmistakable even on a very old record." }, drill: { jp: "A voz do cantor é inconfundível", en: "The singer's voice is unmistakable" }, accept: ["unmistakable", "distinctive", "instantly recognisable", "one of a kind"], hint: "in-kon-fun-DEE-vel — literally un-confusable, from confundir. Something you could not mistake for anything else: a high Portuguese compliment about a voice or a style." },
        { id: "pt-u96l2-sobrio", type: "vocab", front: "sóbrio", reading: "sobrio", meaning: "understated", example: { jp: "O edifício é sóbrio por fora e cheio de cor por dentro.", en: "The building is understated outside and full of colour inside." }, drill: { jp: "O edifício é sóbrio mas bonito", en: "The building is understated but beautiful" }, accept: ["understated", "restrained", "sober", "plain", "austere"], hint: "SO-bri-u. Restrained, without excess — of a building, a suit or a design. It also means sober in the drink sense, exactly as in English." },
        { id: "pt-u96l2-despojado", type: "vocab", front: "despojado", reading: "despojado", meaning: "spare (stripped back)", example: { jp: "O quarto é despojado: uma cama, uma mesa e mais nada.", en: "The room is spare: a bed, a table and nothing else." }, drill: { jp: "O quarto é despojado e claro", en: "The room is spare and bright" }, accept: ["spare", "stripped back", "bare", "minimal", "pared down"], hint: "desh-pu-ZHA-du, from despojar, to strip. Deliberately bare — high praise for modern Portuguese architecture and design, and never an insult." },
      ],
    },
    {
      id: "pt-u96l3",
      unit: 96,
      lesson: 3,
      title: "A crítica",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Review something in Portuguese — extol it, acclaim it, or call it mediocre in print.",
      items: [
        { id: "pt-u96l3-arecensao", type: "vocab", front: "a recensão", reading: "arecensao", meaning: "review (critical notice)", example: { jp: "A recensão do livro saiu no jornal de domingo passado.", en: "The review of the book came out in last Sunday's paper." }, drill: { jp: "A recensão do livro foi positiva", en: "The review of the book was positive" }, accept: ["review", "the review", "critical notice", "book review", "critique"], hint: "rre-sen-SOWN. The written review of a book or a study, in a paper or a journal. More formal and narrower than a crítica (Unit 64), which covers any review at all." },
        { id: "pt-u96l3-enaltecer", type: "vocab", front: "enaltecer", reading: "enaltecer", meaning: "to extol", example: { jp: "O discurso enalteceu o trabalho de quem ficou até ao fim.", en: "The speech extolled the work of those who stayed to the end." }, drill: { jp: "Quero enaltecer o trabalho da equipa", en: "I want to extol the team's work" }, accept: ["to extol", "extol", "to praise highly", "to exalt", "to laud"], hint: "e-nal-te-SER, built on alto — to raise up. Stronger and more public than elogiar (Unit 39): you enaltecer someone in a speech, not across a table." },
        { id: "pt-u96l3-aapreciacao", type: "vocab", front: "a apreciação", reading: "aapreciacao", meaning: "assessment", example: { jp: "A apreciação do professor foi dura mas honesta do princípio ao fim.", en: "The teacher's assessment was harsh but honest from start to finish." }, drill: { jp: "A apreciação do professor foi dura", en: "The teacher's assessment was harsh" }, accept: ["assessment", "the assessment", "appraisal", "judgement", "estimation"], hint: "a-pre-si-a-SOWN. A considered judgement of something's worth. Apreciar is to appreciate, and also simply to enjoy — aprecio muito este vinho." },
        { id: "pt-u96l3-mediocre", type: "vocab", front: "medíocre", reading: "mediocre", meaning: "mediocre", example: { jp: "O filme não chega a ser mau, é apenas medíocre do princípio ao fim.", en: "The film doesn't even manage to be bad, it's merely mediocre from start to finish." }, drill: { jp: "O filme é apenas medíocre", en: "The film is merely mediocre" }, accept: ["mediocre", "middling", "second-rate", "indifferent", "unremarkable"], hint: "me-DI-o-kre. Not bad — which is the insult. A work that is merely average. Stress the DI; learners often say me-di-O-cre." },
        { id: "pt-u96l3-aclamar", type: "vocab", front: "aclamar", reading: "aclamar", meaning: "to acclaim", example: { jp: "O público aclamou a peça de pé durante quase dez minutos.", en: "The audience acclaimed the play on its feet for almost ten minutes." }, drill: { jp: "O público vai aclamar a peça", en: "The audience will acclaim the play" }, accept: ["to acclaim", "acclaim", "to hail", "to applaud loudly", "to cheer"], hint: "a-kla-MAR. Loud public praise — aclamado pela crítica, acclaimed by the critics. It also means to proclaim someone by acclamation, with no vote taken." },
        { id: "pt-u96l3-contundente", type: "vocab", front: "contundente", reading: "contundente", meaning: "scathing", example: { jp: "A crítica foi contundente e o autor respondeu logo no dia seguinte.", en: "The review was scathing and the author replied the very next day." }, drill: { jp: "A crítica foi contundente e dura", en: "The review was scathing and harsh" }, accept: ["scathing", "hard-hitting", "blunt", "cutting", "forceful"], hint: "kon-tun-DEN-te. Hard-hitting — of a criticism, an argument or a report. In a medical or police context um objeto contundente is a blunt instrument, which is the literal image." },
      ],
    },
    {
      id: "pt-u96l4",
      unit: 96,
      lesson: 4,
      title: "A interpretação",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what a work means in Portuguese — the subtext, the allusion, what it evokes and what it provokes.",
      items: [
        { id: "pt-u96l4-osubtexto", type: "vocab", front: "o subtexto", reading: "osubtexto", meaning: "subtext", example: { jp: "O subtexto da peça é mais rico do que a história que ela conta.", en: "The play's subtext is richer than the story it tells." }, drill: { jp: "O subtexto da peça é rico", en: "The play's subtext is rich" }, accept: ["subtext", "the subtext", "implied meaning", "what lies beneath"], hint: "sub-TEKSH-tu. What a text means without saying — a recent borrowing Portuguese took whole. Nas entrelinhas, between the lines, is the older native way to put it." },
        { id: "pt-u96l4-simbolizar", type: "vocab", front: "simbolizar", reading: "simbolizar", meaning: "to symbolise", example: { jp: "A cor branca simboliza a paz em muitos países do mundo.", en: "The colour white symbolises peace in many countries of the world." }, drill: { jp: "A cor branca vai simbolizar a paz", en: "The colour white will symbolise peace" }, accept: ["to symbolise", "symbolise", "to symbolize", "to stand for", "to represent"], hint: "sim-bu-li-ZAR. To stand for something else — o símbolo is the symbol. Portuguese uses it more literally than English, mostly of flags, colours and objects." },
        { id: "pt-u96l4-evocar", type: "vocab", front: "evocar", reading: "evocar", meaning: "to evoke", example: { jp: "A música evoca um verão que talvez nunca tenha existido.", en: "The music evokes a summer that perhaps never existed." }, drill: { jp: "A música consegue evocar o verão", en: "The music manages to evoke summer" }, accept: ["to evoke", "evoke", "to call to mind", "to conjure up", "to bring back"], hint: "e-vu-KAR. To bring a memory or a feeling to mind without naming it. Evocativo is the adjective, and it is high praise for a piece of writing." },
        { id: "pt-u96l4-aalusao", type: "vocab", front: "a alusão", reading: "aalusao", meaning: "allusion", example: { jp: "A alusão ao poema antigo passa ao lado de quase todos.", en: "The allusion to the old poem goes past almost everyone." }, drill: { jp: "A alusão ao poema é clara", en: "The allusion to the poem is clear" }, accept: ["allusion", "the allusion", "indirect reference", "hint", "reference"], hint: "a-lu-ZOWN. An indirect reference — fazer alusão a. If it were direct it would be uma referência (Unit 84); the whole point of an allusion is that it is not." },
        { id: "pt-u96l4-subjetivo", type: "vocab", front: "subjetivo", reading: "subjetivo", meaning: "subjective", example: { jp: "O gosto é subjetivo, mas a técnica pode sempre ser medida.", en: "Taste is subjective, but technique can always be measured." }, drill: { jp: "O gosto é subjetivo e pessoal", en: "Taste is subjective and personal" }, accept: ["subjective", "personal", "a matter of opinion", "individual"], hint: "sub-zhe-TEE-vu. Depending on who is looking. Portugal has written subjetivo since 1990; older texts have subjectivo. Its partner objetivo you already know." },
        { id: "pt-u96l4-suscitar", type: "vocab", front: "suscitar", reading: "suscitar", meaning: "to provoke (a response)", example: { jp: "O quadro suscitou uma discussão que durou várias semanas.", en: "The painting provoked a debate that lasted several weeks." }, drill: { jp: "O quadro vai suscitar muita discussão", en: "The painting will provoke a lot of debate" }, accept: ["to provoke", "provoke", "to give rise to", "to arouse", "to prompt"], hint: "sush-si-TAR. To bring a reaction into being — suscitar dúvidas, suscitar interesse. More formal than causar, and always about reactions, never physical effects." },
      ],
    },
  ],
};
