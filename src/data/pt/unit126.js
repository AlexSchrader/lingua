// PT Unit 126 — A luz, o som e a perceção (slot: coverage-b2-16) — B2
// THE SENSES AND THEIR FAILURES. The scaffold title was "Vocabulary 16 (B2)" and
// this is the LAST unit of the pt B2 band. u105 Emotion, subtle and mixed (block
// 2) owns what is felt inwardly; u94 Science and technology owns the physics.
// This unit owns the middle ground neither claims: how a thing looks and sounds,
// and how the senses are fooled — which is also the vocabulary of describing a
// place in writing, and so the natural note to end a band on.
//
// SLOT BOUNDARIES:
//   u78 owns o ruído, o silêncio, o barulho; u84 o engano; u26 o céu, a neve,
//   o nevoeiro; u8 the colours; u25 the body. All used here, none re-taught.
//   o ruído and o engano were in the first draft and are already taught —
//   replaced by o alarido and o logro, which are different words with their own
//   register rather than synonyms dressed up.
//   One lexeme per family: a perceção without perceber (taught u13), a sensação
//   without sentir, a impressão without impressionar.
//
// EUROPEAN PORTUGUESE: perceção without the p, the post-2009 Portugal spelling
// (Brazil writes percepção); o ofuscamento and a acuidade are standard pt-PT.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT126 = {
  id: "pt-u126",
  lang: "pt",
  title: "A luz, o som e a perceção",
  order: 126,
  stage: "b2",
  lessons: [
    {
      id: "pt-u126l1",
      unit: 126,
      lesson: 1,
      title: "A luz e a sombra",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe light in Portuguese — brightness, reflection, glare, half-light, sharpness, a sudden flash.",
      items: [
        { id: "pt-u126l1-obrilho", type: "vocab", front: "o brilho", reading: "obrilho", meaning: "brightness", example: { jp: "O brilho do sol na água obrigava a fechar os olhos.", en: "The brightness of the sun on the water made you close your eyes." }, drill: { jp: "O brilho do sol na água era forte", en: "The brightness of the sun on the water was strong" }, accept: ["brightness", "the brightness", "shine", "gleam", "sparkle", "glow"], hint: "BREE-lyu, lh. The shine a thing gives off. Brilhar is to shine, and of a person brilhante means brilliant in exactly the English way." },
        { id: "pt-u126l1-oreflexo", type: "vocab", front: "o reflexo", reading: "oreflexo", meaning: "reflection", example: { jp: "O reflexo da janela não deixava ver bem a fotografia.", en: "The reflection from the window made it hard to see the photograph." }, drill: { jp: "O reflexo da janela não deixava ver", en: "The window reflection made it hard to see" }, accept: ["reflection", "the reflection", "glint", "reflex", "image"], hint: "rre-FLE-ksu. The image thrown back by a surface — and equally the body's reflex, os reflexos. A reflexão with an ã is the act of thinking something over, a separate word worth keeping apart." },
        { id: "pt-u126l1-oofuscamento", type: "vocab", front: "o ofuscamento", reading: "oofuscamento", meaning: "glare", example: { jp: "O ofuscamento ao fim da tarde torna a estrada perigosa.", en: "The glare at the end of the afternoon makes the road dangerous." }, drill: { jp: "O ofuscamento torna a estrada perigosa", en: "The glare makes the road dangerous" }, accept: ["glare", "the glare", "dazzle", "dazzling", "blinding light"], hint: "u-fush-ka-MEN-tu. Light strong enough to stop you seeing, from ofuscar, to dazzle. The word in Portuguese driving-safety and workplace-lighting guidance." },
        { id: "pt-u126l1-apenumbra", type: "vocab", front: "a penumbra", reading: "apenumbra", meaning: "half-light", example: { jp: "A penumbra da igreja deixava ver pouco mais do que as velas.", en: "The half-light of the church let you see little more than the candles." }, drill: { jp: "A penumbra da igreja deixava ver pouco", en: "The half-light of the church let you see little" }, accept: ["half-light", "the half-light", "semi-darkness", "gloom", "dimness", "penumbra"], hint: "pe-NUM-bra. Neither light nor dark — the dimness at dusk or inside a shuttered room. A literary favourite and the standard word for a Portuguese church interior." },
        { id: "pt-u126l1-anitidez", type: "vocab", front: "a nitidez", reading: "anitidez", meaning: "sharpness", example: { jp: "A nitidez da imagem perdeu-se quando a ampliaram.", en: "The sharpness of the image was lost when they enlarged it." }, drill: { jp: "A nitidez da imagem perdeu-se", en: "The sharpness of the image was lost" }, accept: ["sharpness", "the sharpness", "clarity", "crispness", "definition", "distinctness"], hint: "ni-ti-DEZH. How clearly defined something is, from nítido, sharp or clear. Used of images, of sound and of memory — lembro-me com nitidez, I remember it clearly." },
        { id: "pt-u126l1-oclarao", type: "vocab", front: "o clarão", reading: "oclarao", meaning: "flash of light", example: { jp: "O clarão no céu apareceu antes de se ouvir o trovão.", en: "The flash in the sky appeared before the thunder was heard." }, drill: { jp: "O clarão no céu apareceu primeiro", en: "The flash in the sky appeared first" }, accept: ["flash of light", "flash", "the flash", "burst of light", "glare", "blaze"], hint: "kla-ROWN, from claro. A sudden burst of brightness — lightning, an explosion, headlights on a wall. Bigger and more startling than o brilho, which is steady." },
      ],
    },
    {
      id: "pt-u126l2",
      unit: 126,
      lesson: 2,
      title: "O som",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe sound in Portuguese — din, echo, tone colour, resonance, a buzz, a crash.",
      items: [
        { id: "pt-u126l2-oalarido", type: "vocab", front: "o alarido", reading: "oalarido", meaning: "din", example: { jp: "O alarido das crianças ouvia-se do outro lado da rua.", en: "The din of the children could be heard from the other side of the street." }, drill: { jp: "O alarido das crianças ouvia-se longe", en: "The din of the children was heard far off" }, accept: ["din", "the din", "racket", "clamour", "uproar", "hubbub"], hint: "a-la-REE-du. The noise of many voices at once — a crowd, a playground, an argument. More specific than o ruído (u78), which is any unwanted sound." },
        { id: "pt-u126l2-oeco", type: "vocab", front: "o eco", reading: "oeco", meaning: "echo", example: { jp: "O eco dentro da igreja repete tudo o que se diz.", en: "The echo inside the church repeats everything that is said." }, drill: { jp: "O eco dentro da igreja repete tudo", en: "The echo inside the church repeats everything" }, accept: ["echo", "the echo", "reverberation", "repercussion"], hint: "E-ku. The returned sound, and figuratively the response something gets — a notícia teve eco na imprensa, the news found an echo in the press." },
        { id: "pt-u126l2-otimbre", type: "vocab", front: "o timbre", reading: "otimbre", meaning: "timbre", example: { jp: "O timbre da voz dela conhece-se logo ao telefone.", en: "The tone of her voice is recognisable at once on the telephone." }, drill: { jp: "O timbre da voz dela conhece-se logo", en: "The tone of her voice is known at once" }, accept: ["timbre", "the timbre", "tone colour", "tone", "quality of sound"], hint: "TEEM-bre. The colour of a sound that lets you tell one voice or instrument from another at the same pitch. Also the letterhead stamp on official Portuguese paper." },
        { id: "pt-u126l2-aressonancia", type: "vocab", front: "a ressonância", reading: "aressonancia", meaning: "resonance", example: { jp: "A ressonância da sala faz a música parecer maior.", en: "The resonance of the room makes the music seem bigger." }, drill: { jp: "A ressonância da sala muda a música", en: "The resonance of the room changes the music" }, accept: ["resonance", "the resonance", "reverberation", "sustain", "MRI scan"], hint: "rre-su-NAN-si-a. Sound sustained and amplified by a space, and metaphorically the weight an idea carries. In a Portuguese hospital uma ressonância is an MRI scan." },
        { id: "pt-u126l2-ozumbido", type: "vocab", front: "o zumbido", reading: "ozumbido", meaning: "buzzing", example: { jp: "O zumbido do frigorífico só se nota de noite.", en: "The buzzing of the fridge is only noticed at night." }, drill: { jp: "O zumbido do frigorífico nota-se de noite", en: "The buzzing of the fridge is noticed at night" }, accept: ["buzzing", "the buzzing", "buzz", "hum", "humming", "drone", "ringing"], hint: "zum-BEE-du. A continuous low hum — insects, electricity, or the ringing in your own ears, zumbido nos ouvidos. Onomatopoeic, from zumbir." },
        { id: "pt-u126l2-oestrondo", type: "vocab", front: "o estrondo", reading: "oestrondo", meaning: "crash (loud bang)", example: { jp: "O estrondo acordou toda a rua a meio da noite.", en: "The crash woke the whole street in the middle of the night." }, drill: { jp: "O estrondo acordou toda a rua", en: "The crash woke the whole street" }, accept: ["crash", "the crash", "loud bang", "bang", "boom", "roar", "thud"], hint: "shTRON-du. A single violent noise — a collision, thunder, a door. Com estrondo means spectacularly: a peça caiu com estrondo, the play flopped spectacularly." },
      ],
    },
    {
      id: "pt-u126l3",
      unit: 126,
      lesson: 3,
      title: "Dar por isso",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about noticing in Portuguese — perception, sensation, stimulus, distraction, recognition, acuity.",
      items: [
        { id: "pt-u126l3-apercecao", type: "vocab", front: "a perceção", reading: "apercecao", meaning: "perception", example: { jp: "A perceção do risco muda de pessoa para pessoa.", en: "The perception of risk varies from person to person." }, drill: { jp: "A perceção do risco muda muito", en: "The perception of risk varies a lot" }, accept: ["perception", "the perception", "awareness", "sense", "view", "reading"], hint: "per-se-SOWN. How something is taken in and understood. Note the spelling: Portugal writes perceção without the p since 2009, Brazil keeps percepção — this corpus is pt-PT." },
        { id: "pt-u126l3-asensacao", type: "vocab", front: "a sensação", reading: "asensacao", meaning: "sensation", example: { jp: "A sensação de frio ficou mesmo depois de entrar em casa.", en: "The sensation of cold stayed even after going indoors." }, drill: { jp: "A sensação de frio ficou muito tempo", en: "The sensation of cold stayed a long time" }, accept: ["sensation", "the sensation", "feeling", "the feeling", "sense", "impression"], hint: "sen-sa-SOWN. What the body registers, and loosely a feeling — tenho a sensação de que, I have the feeling that. A sensação térmica is the wind-chill figure on a Portuguese forecast." },
        { id: "pt-u126l3-oestimulo", type: "vocab", front: "o estímulo", reading: "oestimulo", meaning: "stimulus", example: { jp: "O estímulo tem de ser forte para a criança dar por ele.", en: "The stimulus has to be strong for the child to notice it." }, drill: { jp: "O estímulo tem de ser forte", en: "The stimulus has to be strong" }, accept: ["stimulus", "the stimulus", "trigger", "prompt", "incentive", "encouragement"], hint: "shTEE-mu-lu, stress on the first syllable. What acts on a sense, and also an incentive — estímulos à economia. Both senses are ordinary." },
        { id: "pt-u126l3-adistracao", type: "vocab", front: "a distração", reading: "adistracao", meaning: "distraction", example: { jp: "A distração de um segundo chegou para o acidente.", en: "A second's distraction was enough for the accident." }, drill: { jp: "A distração de um segundo chegou", en: "A second's distraction was enough" }, accept: ["distraction", "the distraction", "inattention", "absent-mindedness", "lapse", "amusement"], hint: "dish-tra-SOWN. Attention pulled away, and also the harmless sense of a pastime — as distrações do fim de semana. Por distração means by an oversight." },
        { id: "pt-u126l3-oreconhecimento", type: "vocab", front: "o reconhecimento", reading: "oreconhecimento", meaning: "recognition", example: { jp: "O reconhecimento da voz ao telefone foi imediato.", en: "The recognition of the voice on the telephone was immediate." }, drill: { jp: "O reconhecimento da voz foi imediato", en: "The recognition of the voice was immediate" }, accept: ["recognition", "the recognition", "identification", "acknowledgement", "gratitude", "appreciation"], hint: "rre-ku-nye-si-MEN-tu. Knowing something again, and separately public acknowledgement of merit, and separately again gratitude — em reconhecimento pelo seu apoio. Three live senses." },
        { id: "pt-u126l3-aacuidade", type: "vocab", front: "a acuidade", reading: "aacuidade", meaning: "acuity", example: { jp: "A acuidade da vista baixa com os anos.", en: "The acuity of sight falls with the years." }, drill: { jp: "A acuidade da vista baixa com os anos", en: "Sight acuity falls with the years" }, accept: ["acuity", "the acuity", "sharpness of sense", "keenness", "acuteness"], hint: "a-kwi-DA-de. Sharpness of a sense or of judgement — acuidade visual, acuidade auditiva on a Portuguese medical report. Of a mind it means keenness." },
      ],
    },
    {
      id: "pt-u126l4",
      unit: 126,
      lesson: 4,
      title: "Enganar os sentidos",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how the senses are fooled in Portuguese — illusion, deception, appearance, disguise, mirage, impression.",
      items: [
        { id: "pt-u126l4-ailusao", type: "vocab", front: "a ilusão", reading: "ailusao", meaning: "illusion", example: { jp: "A ilusão desaparece logo que se olha de perto.", en: "The illusion disappears as soon as you look closely." }, drill: { jp: "A ilusão desaparece de perto", en: "The illusion disappears close up" }, accept: ["illusion", "the illusion", "delusion", "false impression", "trick of the eye"], hint: "i-lu-ZOWN. A false appearance, and equally a false hope — perder as ilusões, to lose one's illusions. Uma ilusão de ótica is an optical illusion." },
        { id: "pt-u126l4-ologro", type: "vocab", front: "o logro", reading: "ologro", meaning: "deception", example: { jp: "O logro só foi descoberto muito mais tarde.", en: "The deception was only discovered much later." }, drill: { jp: "O logro só foi descoberto mais tarde", en: "The deception was only discovered later" }, accept: ["deception", "the deception", "swindle", "trick", "con", "hoax", "sham"], hint: "LO-gru. A deliberate deception someone profits from, from lograr, to dupe. Heavier than o engano (u84), which is an honest mistake — the intent is the whole difference." },
        { id: "pt-u126l4-aaparencia", type: "vocab", front: "a aparência", reading: "aaparencia", meaning: "appearance", example: { jp: "A aparência da casa não diz nada sobre o que está por dentro.", en: "The appearance of the house says nothing about what is inside." }, drill: { jp: "A aparência da casa engana muito", en: "The appearance of the house is very deceiving" }, accept: ["appearance", "the appearance", "look", "the look", "outward appearance", "semblance"], hint: "a-pa-REN-si-a. How a thing looks from outside, usually with the hint that inside differs. As aparências iludem is the Portuguese appearances are deceptive." },
        { id: "pt-u126l4-odisfarce", type: "vocab", front: "o disfarce", reading: "odisfarce", meaning: "disguise", example: { jp: "O disfarce era tão bom que ninguém deu por nada.", en: "The disguise was so good that nobody noticed a thing." }, drill: { jp: "O disfarce era tão bom que enganou todos", en: "The disguise was so good it fooled everyone" }, accept: ["disguise", "the disguise", "costume", "cover", "pretence", "fancy dress"], hint: "dish-FAR-se. Something worn or done to hide what you are. Disfarçar is to disguise or to hide a feeling — disfarçou o desgosto, he hid his disappointment." },
        { id: "pt-u126l4-amiragem", type: "vocab", front: "a miragem", reading: "amiragem", meaning: "mirage", example: { jp: "A miragem da água na estrada aparece nos dias de calor.", en: "The mirage of water on the road appears on hot days." }, drill: { jp: "A miragem aparece nos dias de calor", en: "The mirage appears on hot days" }, accept: ["mirage", "the mirage", "optical illusion", "false hope", "chimera"], hint: "mi-RA-zhayn. The shimmer of false water, and figuratively a hope with nothing behind it — o emprego era uma miragem. Both senses are current in Portuguese." },
        { id: "pt-u126l4-aimpressao", type: "vocab", front: "a impressão", reading: "aimpressao", meaning: "impression", example: { jp: "A impressão que ficou não foi a melhor.", en: "The impression that was left was not the best." }, drill: { jp: "A impressão que ficou não foi boa", en: "The impression that was left was not good" }, accept: ["impression", "the impression", "feeling", "sense", "printing", "print run"], hint: "im-pre-SOWN. What something leaves in your mind — ter a impressão de que, to have the impression that. It is also printing, from imprimir, so a impressão do livro is the printing of the book." },
      ],
    },
  ],
};
