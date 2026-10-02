// PT Unit 95 — A história e a cultura (slot: history-culture) — B2
//
// READING ABOUT THE PAST IN PORTUGUESE. u48 gave the learner the tourist's
// history — o rei, o castelo, o palácio, o monumento, a época, a tradição, o
// império — and u63 gave personal memory. What neither gives is the vocabulary
// a Portuguese history page or museum label actually uses: how to place a thing
// in time, the sea empire in its own words, and how a regime ends.
//
// SLOT BOUNDARIES:
//   o rei, o castelo, o palácio, o monumento, a época, a tradição, o império
//   and conquistar are SPENT at u48; o século at u28; o património and o legado
//   at u80; a herança and a raiz and o antepassado at u63. All used in examples
//   here, none re-carded — which is why l4 is titled "O que fica do passado"
//   rather than "O património": the obvious front belongs to u80 and lower slot
//   wins, no negotiation.
//   u92 (mine) owns the machinery of the modern state; l3 here is only the
//   MOMENT a regime is made or broken.
//
// THIS IS PORTUGAL'S HISTORY, NOT A GENERIC EUROPEAN ONE. a caravela, o
// entreposto and ultramarino are specific and worth the cards; a revolução
// said bare in Portugal means 25 April 1974, and o Estado Novo is what the
// dictatorship is called. Blocks 2 and 3: keep that concreteness.
//
// Conventions: see unit1.js header (language) and unit88.js (B2 band).
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT95 = {
  id: "pt-u95",
  lang: "pt",
  title: "A história e a cultura",
  order: 95,
  stage: "b2",
  lessons: [
    {
      id: "pt-u95l1",
      unit: 95,
      lesson: 1,
      title: "O tempo histórico",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Place something in time in Portuguese — date it, say how far back it goes, name its heyday.",
      items: [
        { id: "pt-u95l1-remontar", type: "vocab", front: "remontar", reading: "remontar", meaning: "to date back", example: { jp: "A tradição remonta ao século quinze e nunca chegou a parar.", en: "The tradition dates back to the fifteenth century and never actually stopped." }, drill: { jp: "A tradição deve remontar ao século quinze", en: "The tradition must date back to the fifteenth century" }, accept: ["to date back", "date back", "to go back to", "to originate in"], hint: "rre-mon-TAR. Used with a: remontar a, to go back as far as. It also means to reassemble something taken apart — the same idea of returning to the start." },
        { id: "pt-u95l1-datar", type: "vocab", front: "datar", reading: "datar", meaning: "to date (to assign a date)", example: { jp: "Os documentos datam do tempo do rei e estão em mau estado.", en: "The documents date from the king's time and are in poor condition." }, drill: { jp: "É difícil datar esta peça antiga", en: "It's hard to date this old piece" }, accept: ["to date", "date", "to assign a date to", "to date from"], hint: "da-TAR. Both to work out how old a thing is and, with de, to be from — o quadro data de 1800. A data is the date itself." },
        { id: "pt-u95l1-contemporaneo", type: "vocab", front: "contemporâneo", reading: "contemporaneo", meaning: "contemporary", example: { jp: "A arte contemporânea ocupa todo o segundo andar do museu.", en: "Contemporary art takes up the whole second floor of the museum." }, drill: { jp: "Este autor é contemporâneo do outro", en: "This author is contemporary with the other one" }, accept: ["contemporary", "present-day", "of the same period", "modern"], hint: "kon-tem-pu-RA-ne-u. Two senses that both work: of today, and of the same time as something else — contemporâneo de Camões. Context decides which." },
        { id: "pt-u95l1-medieval", type: "vocab", front: "medieval", reading: "medieval", meaning: "medieval", example: { jp: "A parte medieval da cidade fica toda junto ao castelo.", en: "The medieval part of the city is all next to the castle." }, drill: { jp: "O centro medieval fica junto ao castelo", en: "The medieval centre is next to the castle" }, accept: ["medieval", "mediaeval", "of the Middle Ages"], hint: "me-di-e-VAL. A Idade Média is the Middle Ages themselves. A great many Portuguese towns have a centro medieval, and the word is on every tourist sign." },
        { id: "pt-u95l1-acronologia", type: "vocab", front: "a cronologia", reading: "acronologia", meaning: "chronology", example: { jp: "A cronologia dos factos está toda no fim do livro.", en: "The chronology of events is all at the end of the book." }, drill: { jp: "A cronologia dos factos está errada", en: "The chronology of events is wrong" }, accept: ["chronology", "the chronology", "timeline", "sequence of events"], hint: "kru-nu-lu-ZHEE-a. The order events happened in, and the list that sets it out. Cronológico is the adjective — por ordem cronológica." },
        { id: "pt-u95l1-oapogeu", type: "vocab", front: "o apogeu", reading: "oapogeu", meaning: "heyday", example: { jp: "O país viveu o seu apogeu no século dezasseis e depois parou.", en: "The country lived its heyday in the sixteenth century and then stopped." }, drill: { jp: "O apogeu do império durou pouco", en: "The empire's heyday didn't last long" }, accept: ["heyday", "the heyday", "peak", "height", "zenith"], hint: "a-pu-ZHEH-u. The highest point of a career, a city or an empire — no apogeu. Its opposite, o declínio, tends to follow in the very next sentence." },
      ],
    },
    {
      id: "pt-u95l2",
      unit: 95,
      lesson: 2,
      title: "Os Descobrimentos",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Read about the Portuguese sea empire — the caravel, the navigator, the treaty, the trading post.",
      items: [
        { id: "pt-u95l2-acolonia", type: "vocab", front: "a colónia", reading: "acolonia", meaning: "colony", example: { jp: "A colónia crescia devagar porque poucos queriam ir para lá.", en: "The colony grew slowly because few people wanted to go there." }, drill: { jp: "A colónia crescia muito devagar", en: "The colony grew very slowly" }, accept: ["colony", "the colony", "settlement", "overseas territory"], hint: "ku-LO-ni-a. Watch the accent: Portugal writes colónia with an acute, Brazil colônia with a circumflex — the same split you see in económico versus econômico." },
        { id: "pt-u95l2-otratado", type: "vocab", front: "o tratado", reading: "otratado", meaning: "treaty", example: { jp: "O tratado dividiu as terras novas entre os dois países.", en: "The treaty divided the new lands between the two countries." }, drill: { jp: "O tratado dividiu as terras novas", en: "The treaty divided the new lands" }, accept: ["treaty", "the treaty", "pact", "accord", "treatise"], hint: "tra-TA-du. An agreement between states — o Tratado de Tordesilhas is the one every Portuguese schoolchild learns. It is also a written treatise on a subject." },
        { id: "pt-u95l2-onavegador", type: "vocab", front: "o navegador", reading: "onavegador", meaning: "navigator", example: { jp: "O navegador passou meses no mar sem chegar a ver terra.", en: "The navigator spent months at sea without ever sighting land." }, drill: { jp: "O navegador passou meses no mar", en: "The navigator spent months at sea" }, accept: ["navigator", "the navigator", "seafarer", "explorer"], hint: "na-ve-ga-DOR. The seafarer who found the route, not merely a sailor. Modern Portuguese reuses the word for a web browser — o navegador — the same job in a different ocean." },
        { id: "pt-u95l2-acaravela", type: "vocab", front: "a caravela", reading: "acaravela", meaning: "caravel", example: { jp: "A caravela era pequena mas aguentava bem o mar alto.", en: "The caravel was small but stood up well to the open sea." }, drill: { jp: "A caravela era pequena e rápida", en: "The caravel was small and fast" }, accept: ["caravel", "the caravel", "sailing ship"], hint: "ka-ra-VE-la. The small, fast Portuguese ship of the fifteenth century, built to sail close to the wind. One is stamped on the back of a Portuguese euro coin." },
        { id: "pt-u95l2-ultramarino", type: "vocab", front: "ultramarino", reading: "ultramarino", meaning: "overseas", example: { jp: "O comércio ultramarino trouxe riqueza e problemas ao mesmo tempo.", en: "Overseas trade brought wealth and problems at the same time." }, drill: { jp: "O comércio ultramarino trouxe muita riqueza", en: "Overseas trade brought a lot of wealth" }, accept: ["overseas", "across the sea", "colonial"], hint: "ul-tra-ma-REE-nu — literally beyond the sea. The official Portuguese word for the overseas territories. You still see it carved on old bank buildings: Banco Ultramarino." },
        { id: "pt-u95l2-oentreposto", type: "vocab", front: "o entreposto", reading: "oentreposto", meaning: "trading post", example: { jp: "O entreposto servia para guardar os produtos antes da viagem.", en: "The trading post was there to store the goods before the voyage." }, drill: { jp: "O entreposto guardava os produtos todos", en: "The trading post stored all the goods" }, accept: ["trading post", "the trading post", "depot", "warehouse"], hint: "en-tre-POSH-tu — literally 'placed between'. A place where goods were stored and traded on the way somewhere else: the backbone of the Portuguese sea routes." },
      ],
    },
    {
      id: "pt-u95l3",
      unit: 95,
      lesson: 3,
      title: "A revolução",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe how a regime begins and ends in Portuguese — the coup, the dictatorship, the overthrow.",
      items: [
        { id: "pt-u95l3-arevolucao", type: "vocab", front: "a revolução", reading: "arevolucao", meaning: "revolution", example: { jp: "A revolução de abril mudou o país inteiro numa só noite.", en: "The April revolution changed the whole country in a single night." }, drill: { jp: "A revolução mudou o país inteiro", en: "The revolution changed the whole country" }, accept: ["revolution", "the revolution", "uprising", "revolt"], hint: "rre-vu-lu-SOWN. In Portugal, said bare with no further explanation, it means 25 April 1974 — a Revolução dos Cravos, the Carnation Revolution." },
        { id: "pt-u95l3-derrubar", type: "vocab", front: "derrubar", reading: "derrubar", meaning: "to overthrow", example: { jp: "O povo saiu à rua e conseguiu derrubar o governo em poucos dias.", en: "The people took to the streets and managed to overthrow the government in a few days." }, drill: { jp: "O povo conseguiu derrubar o governo", en: "The people managed to overthrow the government" }, accept: ["to overthrow", "overthrow", "to bring down", "to topple", "to knock down"], hint: "de-rru-BAR. To knock something down — a wall, a tree, a government. Its everyday sense stays physical, and the political one is a short step away." },
        { id: "pt-u95l3-oregime", type: "vocab", front: "o regime", reading: "oregime", meaning: "regime", example: { jp: "O regime durou quase cinquenta anos e caiu numa só manhã.", en: "The regime lasted almost fifty years and fell in a single morning." }, drill: { jp: "O regime durou quase cinquenta anos", en: "The regime lasted almost fifty years" }, accept: ["regime", "the regime", "system of rule", "government"], hint: "rre-ZHEE-me. A system of rule, usually said with distaste. It is also the word for a diet — estar de regime — which Portuguese finds no odder than English finds 'regimen'." },
        { id: "pt-u95l3-aditadura", type: "vocab", front: "a ditadura", reading: "aditadura", meaning: "dictatorship", example: { jp: "A ditadura proibia os jornais de escrever certas palavras.", en: "The dictatorship forbade newspapers from writing certain words." }, drill: { jp: "A ditadura proibia quase todos os jornais", en: "The dictatorship banned almost every newspaper" }, accept: ["dictatorship", "the dictatorship", "autocracy", "tyranny"], hint: "di-ta-DU-ra. Built on ditar, to dictate — the ruler whose word is simply written down. Portugal's ran from 1926 to 1974 and is called o Estado Novo." },
        { id: "pt-u95l3-instaurar", type: "vocab", front: "instaurar", reading: "instaurar", meaning: "to institute", example: { jp: "O novo poder quis instaurar um regime novo logo no primeiro mês.", en: "The new power wanted to institute a new regime in the very first month." }, drill: { jp: "Quiseram instaurar um regime novo", en: "They wanted to institute a new regime" }, accept: ["to institute", "institute", "to establish", "to bring in", "to set up"], hint: "insh-tow-RAR. To put a new order or practice in place — instaurar a democracia, instaurar um processo. Heavier and more formal than criar." },
        { id: "pt-u95l3-ogolpe", type: "vocab", front: "o golpe", reading: "ogolpe", meaning: "coup", example: { jp: "O golpe falhou e os chefes fugiram do país na mesma semana.", en: "The coup failed and its leaders fled the country the same week." }, drill: { jp: "O golpe falhou logo no início", en: "The coup failed right at the start" }, accept: ["coup", "the coup", "blow", "strike", "stroke"], hint: "GOL-pe. Its plain sense is a blow — um golpe na cabeça. Politically, um golpe de Estado is a coup, which Portuguese usually shortens to just o golpe." },
      ],
    },
    {
      id: "pt-u95l4",
      unit: 95,
      lesson: 4,
      title: "O que fica do passado",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about what survives from the past in Portuguese — the trace, the ruin, the collection, the restoration.",
      items: [
        { id: "pt-u95l4-ovestigio", type: "vocab", front: "o vestígio", reading: "ovestigio", meaning: "trace (remnant)", example: { jp: "Ainda existem vestígios da cidade antiga debaixo da praça.", en: "There are still traces of the ancient city beneath the square." }, drill: { jp: "O vestígio mais antigo está aqui", en: "The oldest trace is here" }, accept: ["trace", "the trace", "remnant", "vestige", "remains"], hint: "vesh-TEE-zhi-u. What is physically left of something gone — walls, foundations, marks. Sem deixar vestígios is 'without a trace'." },
        { id: "pt-u95l4-restaurar", type: "vocab", front: "restaurar", reading: "restaurar", meaning: "to restore", example: { jp: "A câmara decidiu restaurar o edifício em vez de o deitar abaixo.", en: "The council decided to restore the building instead of knocking it down." }, drill: { jp: "A câmara vai restaurar o edifício", en: "The council is going to restore the building" }, accept: ["to restore", "restore", "to renovate", "to repair", "to bring back"], hint: "rresh-tow-RAR. To bring something back to an earlier state — a painting, a building, a monarchy. Restaurar and o restaurante share a root: a place that restores you." },
        { id: "pt-u95l4-secular", type: "vocab", front: "secular", reading: "secular", meaning: "centuries-old", example: { jp: "A tradição secular ainda junta toda a aldeia no mês de agosto.", en: "The centuries-old tradition still brings the whole village together in August." }, drill: { jp: "A tradição secular ainda junta todos", en: "The centuries-old tradition still brings everyone together" }, accept: ["centuries-old", "age-old", "ancient", "longstanding", "secular"], hint: "se-ku-LAR, from o século. In Portuguese its FIRST meaning is 'centuries old', not 'non-religious' — though it carries that sense too, and context decides." },
        { id: "pt-u95l4-oacervo", type: "vocab", front: "o acervo", reading: "oacervo", meaning: "collection (holdings)", example: { jp: "O acervo do museu cresceu muito nos últimos anos.", en: "The museum's collection has grown a great deal in recent years." }, drill: { jp: "O acervo do museu é enorme", en: "The museum's collection is enormous" }, accept: ["collection", "the collection", "holdings", "archive", "body of works"], hint: "a-SER-vu. Everything an institution holds, taken as one — o acervo do museu, o acervo da biblioteca. Uma coleção is what a private person builds." },
        { id: "pt-u95l4-aruina", type: "vocab", front: "a ruína", reading: "aruina", meaning: "ruin", example: { jp: "A ruína do castelo está aberta ao público desde o mês de maio.", en: "The castle ruin has been open to the public since May." }, drill: { jp: "A ruína do castelo é visitada", en: "The castle ruin gets visited" }, accept: ["ruin", "the ruin", "ruins", "wreck", "downfall"], hint: "rru-EE-na. The broken remains of a building, usually plural — as ruínas romanas. Figuratively it is a person's downfall: estar na ruína is to be ruined." },
        { id: "pt-u95l4-emblematico", type: "vocab", front: "emblemático", reading: "emblematico", meaning: "emblematic", example: { jp: "O castelo é emblemático desta cidade e aparece em todas as fotografias.", en: "The castle is emblematic of this city and appears in every photograph." }, drill: { jp: "O castelo é emblemático desta cidade", en: "The castle is emblematic of this city" }, accept: ["emblematic", "iconic", "symbolic", "representative"], hint: "em-ble-MA-ti-ku. Standing for a whole place or period — um edifício emblemático. Portuguese reaches for it far more readily than English does; 'iconic' is often the better translation." },
      ],
    },
  ],
};
