// PT Unit 117 — A deslocação e a migração (slot: coverage-b2-7) — B2
// LEAVING, ARRIVING, AND THE PAPERWORK BETWEEN. The scaffold title was
// "Vocabulary 7 (B2)". u99 Identity and society (block 2) owns who a person is;
// u92 Politics and law owns the state's machinery in general. This unit owns
// movement across a border specifically — which no named B2 slot claims, and
// which for Portuguese is not a neutral topic: emigration is the central fact of
// the country's last century and a half.
//
// SLOT BOUNDARIES:
//   u23 owns o destino, a bagagem, a distância; u44 a autorização, a validade;
//   u46 a fronteira, a capital, a região; u49 a certidão, o comprovativo,
//   o requerimento; u63 a nostalgia, o antepassado; u68 a integração,
//   a convivência, a minoria. All used here, none re-taught.
//   a autorização, a integração, a nostalgia and o requerimento were all in the
//   first draft for this unit and are already taught — replaced by a residência,
//   a inclusão, a pertença and o asilo, which are different words.
//   One lexeme per family, and per LESSON: a emigração sits in l1 while
//   o imigrante sits in l4, so no lesson teaches a noun beside its own agent
//   noun. That pairing is the commonest way a coverage unit ends up teaching
//   the same lexeme twice and still passing a green validator.
//
// EUROPEAN PORTUGUESE: o retornado is specifically the Portuguese who returned
// from the African colonies after 1975 and has no equivalent elsewhere; the
// emigration frame is Portugal's, not Brazil's.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT117 = {
  id: "pt-u117",
  lang: "pt",
  title: "A deslocação e a migração",
  order: 117,
  stage: "b2",
  lessons: [
    {
      id: "pt-u117l1",
      unit: 117,
      lesson: 1,
      title: "Partir",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about leaving a country in Portuguese — the departure, the crossing, and what is torn up by going.",
      items: [
        { id: "pt-u117l1-apartida", type: "vocab", front: "a partida", reading: "apartida", meaning: "departure", example: { jp: "A partida foi marcada para a manhã seguinte.", en: "The departure was set for the following morning." }, drill: { jp: "A partida foi marcada para amanhã", en: "The departure was set for tomorrow" }, accept: ["departure", "the departure", "leaving", "setting off", "start"], hint: "par-TEE-da. The moment of going. Also a match in sport and a practical joke — pregar uma partida is to play a trick — so the field decides. À partida in argument means to begin with." },
        { id: "pt-u117l1-oexodo", type: "vocab", front: "o êxodo", reading: "oexodo", meaning: "exodus", example: { jp: "O êxodo do interior deixou aldeias inteiras quase vazias.", en: "The exodus from the interior left whole villages almost empty." }, drill: { jp: "O êxodo deixou as aldeias vazias", en: "The exodus left the villages empty" }, accept: ["exodus", "the exodus", "mass departure", "flight"], hint: "AY-zu-du, stress on the first syllable. A whole population leaving at once. O êxodo rural is the standard phrase for Portugal's emptying countryside." },
        { id: "pt-u117l1-aemigracao", type: "vocab", front: "a emigração", reading: "aemigracao", meaning: "emigration", example: { jp: "A emigração levou muitos portugueses para França nos anos sessenta.", en: "Emigration took many Portuguese to France in the sixties." }, drill: { jp: "A emigração levou muitos para França", en: "Emigration took many to France" }, accept: ["emigration", "the emigration", "going abroad", "outward migration"], hint: "e-mi-gra-SOWN. Leaving your own country — the e- is out. Portugal's defining social fact: more Portuguese live abroad than in several of its own regions." },
        { id: "pt-u117l1-oregresso", type: "vocab", front: "o regresso", reading: "oregresso", meaning: "homecoming", example: { jp: "O regresso ao país foi mais difícil do que a saída.", en: "The return to the country was harder than the leaving." }, drill: { jp: "O regresso ao país foi difícil", en: "The return to the country was hard" }, accept: ["homecoming", "the homecoming", "return", "the return", "coming back"], hint: "rre-GRE-su. Coming back, and in Portugal usually coming back for good. Regressar is the verb; o regresso às aulas is the back-to-school season." },
        { id: "pt-u117l1-odesenraizamento", type: "vocab", front: "o desenraizamento", reading: "odesenraizamento", meaning: "uprooting", example: { jp: "O desenraizamento é o que mais custa a quem parte já velho.", en: "The uprooting is what costs most for those who leave when already old." }, drill: { jp: "O desenraizamento custa muito a quem parte", en: "The uprooting costs a lot for those who leave" }, accept: ["uprooting", "the uprooting", "rootlessness", "displacement", "being uprooted"], hint: "de-zen-rrai-za-MEN-tu, from a raiz, the root (u63). Being pulled out of the ground you grew in. A literary word, and exactly the one Portuguese writing on emigration reaches for." },
        { id: "pt-u117l1-atravessia", type: "vocab", front: "a travessia", reading: "atravessia", meaning: "crossing", example: { jp: "A travessia demorou três dias e foi feita de camioneta.", en: "The crossing took three days and was made by coach." }, drill: { jp: "A travessia demorou três dias", en: "The crossing took three days" }, accept: ["crossing", "the crossing", "passage", "the passage", "journey across"], hint: "tra-ve-SEE-a. Getting from one side to the other — of water, of a border, of a continent. Atravessar is the verb, and a travessia a salto was the illegal night crossing into France." },
      ],
    },
    {
      id: "pt-u117l2",
      unit: 117,
      lesson: 2,
      title: "Chegar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about arriving in a new country in Portuguese — how you are received, where you stand, and whether you belong.",
      items: [
        { id: "pt-u117l2-aimigracao", type: "vocab", front: "a imigração", reading: "aimigracao", meaning: "immigration", example: { jp: "A imigração mudou a cara das cidades do litoral.", en: "Immigration changed the face of the coastal cities." }, drill: { jp: "A imigração mudou as cidades", en: "Immigration changed the cities" }, accept: ["immigration", "the immigration", "inward migration", "arrivals"], hint: "i-mi-gra-SOWN. Coming in — the i- is the mirror of the e- in emigração. Portugal has been a country of both in the same lifetime, which is why both words are current." },
        { id: "pt-u117l2-oacolhimento", type: "vocab", front: "o acolhimento", reading: "oacolhimento", meaning: "reception (welcome)", example: { jp: "O acolhimento na aldeia foi melhor do que esperavam.", en: "The reception in the village was better than they expected." }, drill: { jp: "O acolhimento na aldeia foi bom", en: "The reception in the village was good" }, accept: ["reception", "the reception", "welcome", "the welcome", "taking in", "hospitality"], hint: "a-ku-lyi-MEN-tu, lh. How newcomers are received, from acolher, to take in. A centro de acolhimento is a reception centre — a warm word, not a bureaucratic one." },
        { id: "pt-u117l2-ainclusao", type: "vocab", front: "a inclusão", reading: "ainclusao", meaning: "inclusion", example: { jp: "A inclusão das crianças na escola começou pela língua.", en: "The inclusion of the children in the school began with the language." }, drill: { jp: "A inclusão das crianças começou pela língua", en: "The inclusion of the children began with language" }, accept: ["inclusion", "the inclusion", "including", "social inclusion"], hint: "in-klu-ZOWN. Being brought inside the group rather than merely admitted. A integração (u68) is fitting in; a inclusão is the group making room." },
        { id: "pt-u117l2-aresidencia", type: "vocab", front: "a residência", reading: "aresidencia", meaning: "residence permit", example: { jp: "A residência foi dada por cinco anos e depois tem de ser pedida outra vez.", en: "The residence permit was granted for five years and then has to be applied for again." }, drill: { jp: "A residência foi dada por cinco anos", en: "The residence permit was granted for five years" }, accept: ["residence permit", "the residence permit", "residency", "residence", "leave to remain"], hint: "rre-zi-DEN-si-a. In full autorização de residência. The word also means a hall of residence and, formally, where you live — a sua residência on a form." },
        { id: "pt-u117l2-apertenca", type: "vocab", front: "a pertença", reading: "apertenca", meaning: "belonging", example: { jp: "A pertença a um lugar não se perde por se estar longe.", en: "Belonging to a place is not lost by being far away." }, drill: { jp: "A pertença a um lugar não se perde", en: "Belonging to a place is not lost" }, accept: ["belonging", "the belonging", "sense of belonging", "membership", "affiliation"], hint: "per-TEN-sa, from pertencer, to belong. The feeling and the fact of being part of something. In the plural as pertences it means your belongings — the objects, not the feeling." },
        { id: "pt-u117l2-orecemchegado", type: "vocab", front: "o recém-chegado", reading: "orecemchegado", meaning: "newcomer", example: { jp: "O recém-chegado ainda não conhecia ninguém na rua.", en: "The newcomer still did not know anyone in the street." }, drill: { jp: "O recém-chegado não conhecia ninguém", en: "The newcomer did not know anyone" }, accept: ["newcomer", "the newcomer", "new arrival", "recent arrival"], hint: "rre-SAYN-she-GA-du. Recém- is a prefix meaning newly, always hyphenated: recém-nascido newborn, recém-casados newlyweds. A productive pattern worth keeping." },
      ],
    },
    {
      id: "pt-u117l3",
      unit: 117,
      lesson: 3,
      title: "Os papéis",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Deal with Portuguese immigration paperwork — the visa, the claim, the nationality, and the offices that issue them.",
      items: [
        { id: "pt-u117l3-ovisto", type: "vocab", front: "o visto", reading: "ovisto", meaning: "visa", example: { jp: "O visto de trabalho demorou quatro meses a sair.", en: "The work visa took four months to come through." }, drill: { jp: "O visto demorou quatro meses", en: "The visa took four months" }, accept: ["visa", "the visa", "entry visa", "tick"], hint: "VISH-tu. Also the past participle of ver, seen, and the tick mark you put on a list — pôr um visto. The travel sense is the oldest: it meant the document had been seen." },
        { id: "pt-u117l3-oasilo", type: "vocab", front: "o asilo", reading: "oasilo", meaning: "asylum", example: { jp: "O asilo foi pedido logo à chegada ao país.", en: "Asylum was claimed immediately on arrival in the country." }, drill: { jp: "O asilo foi pedido à chegada", en: "Asylum was claimed on arrival" }, accept: ["asylum", "the asylum", "refuge", "sanctuary"], hint: "a-ZEE-lu. Protection given by a state, pedir asilo to claim it. In older Portuguese um asilo was also a home for the elderly or orphaned — that use now sounds harsh and is avoided." },
        { id: "pt-u117l3-anacionalidade", type: "vocab", front: "a nacionalidade", reading: "anacionalidade", meaning: "nationality", example: { jp: "A nacionalidade dos filhos foi pedida ao mesmo tempo que a dos pais.", en: "The children's nationality was applied for at the same time as the parents'." }, drill: { jp: "A nacionalidade dos filhos foi pedida", en: "The children's nationality was applied for" }, accept: ["nationality", "the nationality", "citizenship"], hint: "na-si-u-na-li-DA-de. The legal tie to a country. Portugal also grants it by descent to the grandchildren of emigrants, so this is a live word in families abroad." },
        { id: "pt-u117l3-anaturalizacao", type: "vocab", front: "a naturalização", reading: "anaturalizacao", meaning: "naturalisation", example: { jp: "A naturalização exige saber falar a língua.", en: "Naturalisation requires being able to speak the language." }, drill: { jp: "A naturalização exige falar a língua", en: "Naturalisation requires speaking the language" }, accept: ["naturalisation", "the naturalisation", "naturalization", "becoming a citizen"], hint: "na-tu-ra-li-za-SOWN. Acquiring a nationality you were not born with — the process, where a nacionalidade is the status it produces." },
        { id: "pt-u117l3-oconsulado", type: "vocab", front: "o consulado", reading: "oconsulado", meaning: "consulate", example: { jp: "O consulado trata dos papéis de quem vive fora do país.", en: "The consulate handles the paperwork of those living outside the country." }, drill: { jp: "O consulado trata dos papéis", en: "The consulate handles the paperwork" }, accept: ["consulate", "the consulate", "consular office"], hint: "kon-su-LA-du. The local office serving citizens abroad — day-to-day documents. Portugal keeps an unusually dense consular network because of its diaspora." },
        { id: "pt-u117l3-aembaixada", type: "vocab", front: "a embaixada", reading: "aembaixada", meaning: "embassy", example: { jp: "A embaixada fica na capital e o consulado fica mais perto.", en: "The embassy is in the capital and the consulate is nearer." }, drill: { jp: "A embaixada fica na capital", en: "The embassy is in the capital" }, accept: ["embassy", "the embassy", "legation"], hint: "em-bai-SHA-da. One per country, in the capital, doing politics; consulates do paperwork and there are many. O embaixador is the ambassador." },
      ],
    },
    {
      id: "pt-u117l4",
      unit: 117,
      lesson: 4,
      title: "Viver fora",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about life lived away from home in Portuguese — the diaspora, the money sent back, exile and return.",
      items: [
        { id: "pt-u117l4-adiaspora", type: "vocab", front: "a diáspora", reading: "adiaspora", meaning: "diaspora", example: { jp: "A diáspora portuguesa está presente em quase todos os continentes.", en: "The Portuguese diaspora is present on almost every continent." }, drill: { jp: "A diáspora portuguesa está em todo o lado", en: "The Portuguese diaspora is everywhere" }, accept: ["diaspora", "the diaspora", "communities abroad", "expatriate community"], hint: "di-ASH-pu-ra, stress on the second syllable. The scattered population of a country living abroad, and the institutions it keeps up — schools, clubs, newspapers." },
        { id: "pt-u117l4-aremessa", type: "vocab", front: "a remessa", reading: "aremessa", meaning: "remittance", example: { jp: "A remessa que mandava todos os meses pagou a casa da família.", en: "The remittance he sent every month paid for the family's house." }, drill: { jp: "A remessa pagou a casa da família", en: "The remittance paid for the family house" }, accept: ["remittance", "the remittance", "money sent home", "transfer", "consignment"], hint: "rre-ME-sa, from remeter, to send on. Money sent home by someone working abroad. As remessas dos emigrantes propped up the Portuguese economy for decades." },
        { id: "pt-u117l4-oexilio", type: "vocab", front: "o exílio", reading: "oexilio", meaning: "exile", example: { jp: "O exílio durou até à mudança de governo.", en: "The exile lasted until the change of government." }, drill: { jp: "O exílio durou muitos anos", en: "The exile lasted many years" }, accept: ["exile", "the exile", "banishment"], hint: "e-ZEE-liu. Being away because you cannot go back, not because you chose to stay. Many Portuguese writers wrote no exílio before 1974." },
        { id: "pt-u117l4-orepatriamento", type: "vocab", front: "o repatriamento", reading: "orepatriamento", meaning: "repatriation", example: { jp: "O repatriamento foi pago pelo Estado depois do acidente.", en: "The repatriation was paid for by the State after the accident." }, drill: { jp: "O repatriamento foi pago pelo Estado", en: "The repatriation was paid by the State" }, accept: ["repatriation", "the repatriation", "return to one's country", "sending home"], hint: "rre-pa-tri-a-MEN-tu. Being sent or brought back to your own country, often officially and often not by choice. Repatriar is the verb." },
        { id: "pt-u117l4-oimigrante", type: "vocab", front: "o imigrante", reading: "oimigrante", meaning: "immigrant", example: { jp: "O imigrante que chegou primeiro ajudou os outros a encontrar casa.", en: "The immigrant who arrived first helped the others find housing." }, drill: { jp: "O imigrante ajudou os outros", en: "The immigrant helped the others" }, accept: ["immigrant", "the immigrant", "migrant", "incomer"], hint: "i-mi-GRAN-te. The person who came in. Held back to this lesson on purpose so it is not taught in the same lesson as a imigração — same lexeme, and the learner gains nothing from meeting both at once." },
        { id: "pt-u117l4-oretornado", type: "vocab", front: "o retornado", reading: "oretornado", meaning: "returnee", example: { jp: "O retornado chegou em mil novecentos e setenta e cinco sem nada.", en: "The returnee arrived in nineteen seventy-five with nothing." }, drill: { jp: "O retornado chegou sem nada", en: "The returnee arrived with nothing" }, accept: ["returnee", "the returnee", "returner", "repatriate"], hint: "rre-tor-NA-du. Specifically the half-million Portuguese who came back from Angola and Mozambique in 1975. A pt-PT word with a date attached — it has no general meaning of someone who returned." },
      ],
    },
  ],
};
