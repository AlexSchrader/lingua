// PT Unit 48 — A história e o passado (slot: coverage-a2-9) — A2
// Portugal has more history than almost any A1 corpus can carry, and A1 carried
// none of it: u7 gave o museu as a building and that was all. This unit gives
// the learner kings, castles, war, empire and the words a Portuguese person uses
// about their own past — which is a subject that comes up constantly here.
//
// Sited away from block 1's u28, which owns the time-and-frequency words
// including o século and a década. Neither is carded here; both are used in
// hints only. This unit is EVENTS and PEOPLE, not the measurement of time.
//
// Two cards do real disambiguating work:
//   · antigo is old-as-in-ANCIENT, against velho (Unit 10) which is old-as-in-worn.
//     Before the noun it flips again to "former", and the hint says so.
//   · a história is history AND story — Portuguese has one word, so contar uma
//     história is to tell a story.
// The unit is written so that April 1974 — a Revolução dos Cravos — is reachable
// across three cards (a paz, o soldado, o povo) without ever needing a date.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT48 = {
  id: "pt-u48",
  lang: "pt",
  title: "A história e o passado",
  order: 48,
  stage: "a2",
  lessons: [
    {
      id: "pt-u48l1",
      unit: 48,
      lesson: 1,
      title: "Os reis e os castelos",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about Portugal's kings and castles, and name what is inside one.",
      items: [
        { id: "pt-u48l1-orei", type: "vocab", front: "o rei", reading: "orei", meaning: "king", example: { jp: "O rei de Portugal fez a universidade de Coimbra.", en: "The king of Portugal founded the University of Coimbra." }, drill: { jp: "O rei de Portugal é famoso", en: "The king of Portugal is famous" }, accept: ["the king", "monarch"], hint: "RRAY, strong r; plural os reis, feminine a rainha. Portugal had kings from 1139 to 1910. The title in front of the name is D., short for Dom — D. Dinis, D. Manuel." },
        { id: "pt-u48l1-arainha", type: "vocab", front: "a rainha", reading: "arainha", meaning: "queen", example: { jp: "A rainha de Portugal foi importante e o castelo é enorme.", en: "The queen of Portugal was important and the castle is enormous." }, drill: { jp: "A rainha de Portugal foi importante", en: "The queen of Portugal was important" }, accept: ["the queen"], hint: "rra-EE-nya — three syllables, with nh. Caldas da Rainha, the Queen's hot springs, is named for D. Leonor, who founded its hospital in 1485 after bathing there." },
        { id: "pt-u48l1-oprincipe", type: "vocab", front: "o príncipe", reading: "oprincipe", meaning: "prince", example: { jp: "O príncipe foi ao Brasil e o rei ficou em Lisboa.", en: "The prince went to Brazil and the king stayed in Lisbon." }, drill: { jp: "O príncipe foi ao Brasil", en: "The prince went to Brazil" }, accept: ["the prince"], hint: "PREEN-si-pe, stress on the first syllable. Portugal's heir was o Príncipe Real — but a younger son is um infante, which is why Henry the Navigator is o Infante D. Henrique." },
        { id: "pt-u48l1-ocastelo", type: "vocab", front: "o castelo", reading: "ocastelo", meaning: "castle", example: { jp: "O castelo de São Jorge é enorme e antigo, e está na colina.", en: "São Jorge castle is enormous and ancient, and sits on the hill." }, drill: { jp: "O castelo de São Jorge é enorme", en: "São Jorge castle is enormous" }, accept: ["the castle", "fort", "fortress"], hint: "kash-TE-lu. Portugal is covered in them — the Moorish line along the Tagus, and the chain built along the border against Castile. O Castelo de São Jorge sits on Lisbon's highest hill." },
        { id: "pt-u48l1-opalacio", type: "vocab", front: "o palácio", reading: "opalacio", meaning: "palace", example: { jp: "O palácio de Sintra é famoso e o rei viveu ali muitos anos.", en: "Sintra's palace is famous and the king lived there many years." }, drill: { jp: "O palácio de Sintra é famoso", en: "Sintra's palace is famous" }, accept: ["the palace", "mansion"], hint: "pa-LA-siu. Sintra has three, and the Palácio da Pena on its hilltop is the one on every postcard. A castle defends and a palace does not — Portuguese keeps the two words as firmly apart as English." },
        { id: "pt-u48l1-acoroa", type: "vocab", front: "a coroa", reading: "acoroa", meaning: "crown", example: { jp: "A coroa do rei é de ouro e está no museu de Lisboa.", en: "The king's crown is gold and is in the Lisbon museum." }, drill: { jp: "A coroa do rei é de ouro", en: "The king's crown is gold" }, accept: ["the crown", "wreath"], hint: "ku-ROH-a. The object and the institution both — a Coroa. It was also an old Portuguese coin, and in the Azores it names the rim of a volcano. The verb is coroar." },
      ],
    },
    {
      id: "pt-u48l2",
      unit: 48,
      lesson: 2,
      title: "A guerra e a paz",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about war and peace in Portuguese, including the revolution Portugal is proudest of.",
      items: [
        { id: "pt-u48l2-aguerra", type: "vocab", front: "a guerra", reading: "aguerra", meaning: "war", example: { jp: "A guerra foi enorme e a paz chegou em abril.", en: "The war was enormous and peace arrived in April." }, drill: { jp: "A guerra de Portugal foi enorme", en: "Portugal's war was enormous" }, accept: ["the war", "warfare", "conflict"], hint: "GE-rra, strong rr — and the u is silent, because gue is always \"ge\". A Guerra Colonial of 1961 to 1974 is the one that finally brought down the dictatorship." },
        { id: "pt-u48l2-apaz", type: "vocab", front: "a paz", reading: "apaz", meaning: "peace", example: { jp: "A paz chegou em abril e o povo ficou na rua toda a noite.", en: "Peace arrived in April and the people stayed in the street all night." }, drill: { jp: "A paz de Portugal é importante", en: "Portugal's peace is important" }, accept: ["the peace", "quiet", "calm"], hint: "PASH — the z shushes at the end of a word. Deixar em paz is to leave someone alone. Portugal's 1974 revolution is famous for being almost bloodless: a Revolução dos Cravos, the Carnation Revolution." },
        { id: "pt-u48l2-osoldado", type: "vocab", front: "o soldado", reading: "osoldado", meaning: "soldier", example: { jp: "O soldado do exército é jovem e o trabalho é muito duro.", en: "The army's soldier is young and the work is very hard." }, drill: { jp: "O soldado do exército é jovem", en: "The army's soldier is young" }, accept: ["the soldier", "trooper"], hint: "sol-DA-du — literally \"one who is paid\", from o soldo, a wage, which is exactly where English \"soldier\" comes from too. In April 1974 the people put carnations down the barrels of their rifles." },
        { id: "pt-u48l2-oexercito", type: "vocab", front: "o exército", reading: "oexercito", meaning: "army", example: { jp: "O exército de Portugal é pequeno e a paz é antiga.", en: "Portugal's army is small and the peace is old." }, drill: { jp: "O exército de Portugal é pequeno", en: "Portugal's army is small" }, accept: ["the army", "military", "armed forces"], hint: "i-ZER-si-tu — the initial ex- before a vowel says \"iz\", exactly as in o exame from Unit 17. The navy is a Marinha and the air force a Força Aérea." },
        { id: "pt-u48l2-lutar", type: "vocab", front: "lutar", reading: "lutar", meaning: "to fight", example: { jp: "Lutar não é bom e a paz é sempre melhor.", en: "Fighting isn't good and peace is always better." }, drill: { jp: "Lutar não é bom", en: "Fighting isn't good" }, accept: ["fight", "to struggle", "struggle", "to wrestle"], hint: "lu-TAR: luto, lutas, luta. To fight, and to struggle FOR something — lutar por. Uma luta is a fight. Careful: o luto, with the masculine article, is mourning." },
        { id: "pt-u48l2-conquistar", type: "vocab", front: "conquistar", reading: "conquistar", meaning: "to conquer", example: { jp: "Conquistar o mar foi o trabalho de Portugal no tempo do rei.", en: "Conquering the sea was Portugal's work in the time of the king." }, drill: { jp: "Conquistar o mar foi importante", en: "Conquering the sea was important" }, accept: ["conquer", "to win over", "to win", "to capture"], hint: "kon-kish-TAR. To conquer — and to win a person over, conquistar alguém. The noun is uma conquista. Portugal's own founding act was the taking of Lisbon in 1147." },
      ],
    },
    {
      id: "pt-u48l3",
      unit: 48,
      lesson: 3,
      title: "O passado",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the past in Portuguese — what happened, and how long ago it was.",
      items: [
        { id: "pt-u48l3-ahistoria", type: "vocab", front: "a história", reading: "ahistoria", meaning: "history", example: { jp: "A história de Portugal é antiga e o mar é a parte mais importante.", en: "Portugal's history is ancient and the sea is the most important part." }, drill: { jp: "A história de Portugal é antiga", en: "Portugal's history is ancient" }, accept: ["the history", "story", "the story", "tale"], hint: "ish-TO-ria — and the h is silent, as every Portuguese h is. One word for HISTORY and STORY both, so contar uma história is to tell a story, not to recount the past." },
        { id: "pt-u48l3-opassado", type: "vocab", front: "o passado", reading: "opassado", meaning: "the past", example: { jp: "O passado de Portugal está no museu de Lisboa e no castelo.", en: "Portugal's past is in the Lisbon museum and in the castle." }, drill: { jp: "O passado de Portugal está no museu", en: "Portugal's past is in the museum" }, accept: ["the past", "history", "former times"], hint: "pa-SA-du — also the past participle of passar, to pass. No passado means in the past. As an adjective it means \"last\": a semana passada, last week." },
        { id: "pt-u48l3-antigo", type: "vocab", front: "antigo", reading: "antigo", meaning: "ancient", example: { jp: "O castelo é antigo e o prédio da praça é moderno.", en: "The castle is ancient and the building on the square is modern." }, drill: { jp: "O castelo é antigo e enorme", en: "The castle is ancient and enormous" }, accept: ["old", "former", "aged", "antique"], hint: "an-TEE-gu. Old as in ANCIENT, where velho from Unit 10 is old as in worn or aged. Put it BEFORE the noun and it flips to \"former\": o meu antigo chefe is my previous boss, not my elderly one." },
        { id: "pt-u48l3-aepoca", type: "vocab", front: "a época", reading: "aepoca", meaning: "era", example: { jp: "A época do rei D. Manuel foi importante na história de Portugal.", en: "The era of King Manuel was important in Portugal's history." }, drill: { jp: "A época do rei foi importante", en: "The king's era was important" }, accept: ["the era", "period", "age", "season", "time"], hint: "E-po-ka, stress on the first syllable. An era or period — and a season, in sport and in fruit: a época dos morangos. Naquela época, \"back then\", is how you will hear it most." },
        { id: "pt-u48l3-acontecer", type: "vocab", front: "acontecer", reading: "acontecer", meaning: "to happen", example: { jp: "Isso não vai acontecer hoje e a cidade está tranquila.", en: "That isn't going to happen today and the city is quiet." }, drill: { jp: "Isso não vai acontecer hoje", en: "That isn't going to happen today" }, accept: ["happen", "to occur", "occur", "to take place"], hint: "a-kon-te-SER, and almost always in the third person: o que aconteceu? is \"what happened?\". An event is um acontecimento, built with the same -mento ending as o julgamento." },
        { id: "pt-u48l3-descobrir", type: "vocab", front: "descobrir", reading: "descobrir", meaning: "to discover", example: { jp: "Portugal foi descobrir o mar no tempo do rei D. João.", en: "Portugal set out to discover the sea in the time of King John." }, drill: { jp: "Descobrir o mar foi importante", en: "Discovering the sea was important" }, accept: ["discover", "to find out", "to uncover", "find out"], hint: "desh-ku-BREER: descubro, descobres, descobre — the o turns to u in the \"I\" form. Literally des- plus cobrir, to UNcover. Portugal calls its own age of exploration os Descobrimentos." },
      ],
    },
    {
      id: "pt-u48l4",
      unit: 48,
      lesson: 4,
      title: "A memória de um povo",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about how Portugal remembers its past — its people, its statues and its living traditions.",
      items: [
        { id: "pt-u48l4-opovo", type: "vocab", front: "o povo", reading: "opovo", meaning: "people", example: { jp: "O povo de Portugal ficou na rua em abril e a paz chegou.", en: "The people of Portugal stayed in the street in April and peace came." }, drill: { jp: "O povo de Portugal é simpático", en: "The people of Portugal are friendly" }, accept: ["the people", "nation", "folk", "populace"], hint: "PO-vu — but the plural opens the o right up: os povos is \"POH-vush\". A people or a nation. \"People\" meaning individual persons is a completely different word, as pessoas." },
        { id: "pt-u48l4-oimperio", type: "vocab", front: "o império", reading: "oimperio", meaning: "empire", example: { jp: "O império de Portugal foi enorme e o mar foi a estrada.", en: "Portugal's empire was enormous and the sea was its road." }, drill: { jp: "O império de Portugal foi enorme", en: "Portugal's empire was enormous" }, accept: ["the empire"], hint: "im-PE-riu. Portugal's lasted from 1415 to 1999, from Ceuta to Macau — the longest-lived of the European empires, and the last one to end." },
        { id: "pt-u48l4-aestatua", type: "vocab", front: "a estátua", reading: "aestatua", meaning: "statue", example: { jp: "A estátua do rei está na praça e é de ferro.", en: "The king's statue is on the square and is made of iron." }, drill: { jp: "A estátua do rei está na praça", en: "The king's statue is on the square" }, accept: ["the statue", "sculpture", "figure"], hint: "esh-TA-tu-a — four syllables, stress on the TA. Almost every Portuguese praça has one, usually of a king or a poet, and most often of Camões." },
        { id: "pt-u48l4-omonumento", type: "vocab", front: "o monumento", reading: "omonumento", meaning: "monument", example: { jp: "O monumento de Belém é enorme e o povo vai ali no verão.", en: "The Belém monument is enormous and people go there in summer." }, drill: { jp: "O monumento de Belém é enorme", en: "The Belém monument is enormous" }, accept: ["the monument", "memorial", "landmark"], hint: "mo-nu-MEN-tu. O Padrão dos Descobrimentos at Belém is the great one — a stone ship's prow with Henry the Navigator at the front and thirty figures crowded behind him." },
        { id: "pt-u48l4-atradicao", type: "vocab", front: "a tradição", reading: "atradicao", meaning: "tradition", example: { jp: "A tradição do fado é antiga e a música é famosa em toda a Europa.", en: "The fado tradition is ancient and the music is famous across Europe." }, drill: { jp: "A tradição do fado é antiga", en: "The fado tradition is ancient" }, accept: ["the tradition", "custom", "heritage"], hint: "tra-di-SAWNG, -ção nasal; plural as tradições. O fado, the Festas de Santo António and the Christmas bacalhau are the three most Portuguese of them — and all three are still alive, not museum pieces." },
        { id: "pt-u48l4-celebrar", type: "vocab", front: "celebrar", reading: "celebrar", meaning: "to celebrate", example: { jp: "Vamos celebrar o aniversário de Ana com bolo e vinho verde.", en: "We're going to celebrate Ana's birthday with cake and green wine." }, drill: { jp: "Celebrar o aniversário com bolo", en: "To celebrate the birthday with cake" }, accept: ["celebrate", "to mark", "to commemorate"], hint: "se-le-BRAR: celebro, celebras, celebra. Portuguese also says festejar, built on a festa from Unit 19, which is warmer and far more everyday. The formal event is uma celebração." },
      ],
    },
  ],
};

// RESERVE LIST — in-scope swap-ins if the merge seat has to drop a collided card.
// None collide with A1's 482 or block 1's 240.
//   l1 Reis e castelos : o trono (throne) · a muralha (city wall) · o cavaleiro (knight)
//   l2 Guerra e paz    : a batalha (battle) · a arma (weapon) · a revolução (revolution)
//   l3 O passado       : a memória (memory) · a data (date) · recente (recent)
//   l4 A memória       : o herói (hero) · o poeta (poet) · a lenda (legend)
