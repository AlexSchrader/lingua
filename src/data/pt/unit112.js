// PT Unit 112 — Vocabulário 2 (B2) — o gesto e a coisa (slot: coverage-b2-2) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Authored by the pt B2 block-2 seat, 2026-09-23, to §C1–C10 (src/data/pt/unit88.js).
//
// The second of the band's three coverage slots, and the same principle as u111:
// these are not new B2 ideas, they are ordinary words the themed units had no
// room for. Probed 2026-09-23 — at u111 the corpus taught abrir, cortar, ligar,
// desligar, apagar, encher, guardar, puxar, empurrar, apanhar and levantar, and
// STILL could not say tirar, meter, trazer, atirar, erguer, andar, esconder,
// revelar, recolher, FECHAR, acender or esvaziar. Closing abrir without fechar
// is the shape of the gap.
// Lessons 3 and 4 do the same for the physical qualities: a ponta, o corte,
// o traço, a mancha, a pista, estreito, vivo, morto, suave, nítido, obscuro,
// denso — none of them taught by u10, u42 or u81, which own the adjective sets.
// RESERVED, not spent here: o rascunho, o resumo, vago, a intriga, conforme.
// lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT112 = {
  id: "pt-u112",
  lang: "pt",
  title: "Vocabulário 2 (B2) — o gesto e a coisa",
  order: 112,
  stage: "b2",
  lessons: [
    {
      id: "pt-u112l1",
      unit: 112,
      lesson: 1,
      title: "Tirar, meter, trazer",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Move something in Portuguese — take it out, put it in, bring it, throw it, raise it, or walk.",
      items: [
        { id: "pt-u112l1-tirar", type: "vocab", front: "tirar", reading: "tirar", meaning: "to take out", example: { jp: "O médico quer tirar o comprimido da lista, mas o doente não aceita.", en: "The doctor wants to take the tablet off the list, but the patient does not accept it." }, drill: { jp: "O médico quer tirar o comprimido", en: "The doctor wants to take the tablet away" }, accept: ["to take out", "take out", "to remove", "to take off", "to take away"], hint: "ti-RAR. The counterweight to pôr (u111). ⚠ Enormous range in Portuguese: tirar uma foto (take a photo), tirar um curso (do a degree), tirar dúvidas (clear up questions). If something comes OUT of something, this is the verb." },
        { id: "pt-u112l1-meter", type: "vocab", front: "meter", reading: "meter", meaning: "to put in", example: { jp: "Ninguém quer meter dinheiro na obra, embora o risco seja pequeno.", en: "Nobody wants to put money into the building work, although the risk is small." }, drill: { jp: "Ninguém quer meter dinheiro na obra", en: "Nobody wants to put money into the work" }, accept: ["to put in", "put in", "to insert", "to stick in"], hint: "me-TER. ⚠ pt-PT USES IT EVERYWHERE, far more than pôr, and always with a sense of INTO: meter na mala, meter medo (to frighten), meter-se na conversa (to butt in). Brazil finds the Portuguese frequency of this verb striking." },
        { id: "pt-u112l1-trazer", type: "vocab", front: "trazer", reading: "trazer", meaning: "to bring", example: { jp: "O relatório vai trazer notícias graves, mas o chefe já sabe tudo.", en: "The report is going to bring serious news, but the boss already knows everything." }, drill: { jp: "O relatório vai trazer notícias graves", en: "The report is going to bring serious news" }, accept: ["to bring", "bring", "to carry here", "to bring along"], hint: "tra-ZER. Irregular: trago, trazes, traz, trazem. ⚠ DIRECTION IS THE WHOLE POINT — trazer brings towards the speaker, levar (u74) takes away from them, and Portuguese never blurs the two the way English bring and take sometimes do." },
        { id: "pt-u112l1-atirar", type: "vocab", front: "atirar", reading: "atirar", meaning: "to throw", example: { jp: "É fácil atirar a culpa ao sistema, mas o erro é de uma pessoa.", en: "It is easy to throw the blame at the system, but the mistake belongs to a person." }, drill: { jp: "É fácil atirar a culpa ao sistema", en: "It is easy to throw the blame at the system" }, accept: ["to throw", "throw", "to hurl", "to fling"], hint: "a-ti-RAR. ⚠ ONE LETTER FROM TIRAR and unrelated in meaning — atirar throws, tirar removes. Portuguese also says deitar for throwing something away (deitar fora), so atirar keeps the forceful sense." },
        { id: "pt-u112l1-erguer", type: "vocab", front: "erguer", reading: "erguer", meaning: "to lift up", example: { jp: "A câmara quer erguer uma escola aqui, embora o terreno seja fraco.", en: "The council wants to put up a school here, although the ground is weak." }, drill: { jp: "A câmara quer erguer uma escola", en: "The council wants to put up a school" }, accept: ["to lift up", "lift up", "to raise", "to put up", "to erect"], hint: "er-GER, with a hard g. More formal and more physical than levantar (u45): you erguer a building, a monument or a voice. Erguer-se is what a person or a movement does when it rises." },
        { id: "pt-u112l1-andar", type: "vocab", front: "andar", reading: "andar", meaning: "to walk", example: { jp: "Ele anda muito todos os dias, mas continua cansado.", en: "He walks a lot every day, but he is still tired." }, drill: { jp: "Ele quer andar mais todos os dias", en: "He wants to walk more every day" }, accept: ["to walk", "walk", "to go about", "to get around"], hint: "an-DAR. ⚠ TWO EVERYDAY EXTRAS. As a noun um andar is a FLOOR of a building — moro no terceiro andar. And with a gerund or an adjective it means to be going around in a state: ando cansado, andar a estudar (u69's estar a, with andar for the ongoing habit)." },
      ],
    },
    {
      id: "pt-u112l2",
      unit: 112,
      lesson: 2,
      title: "Esconder e revelar",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Hide or uncover something in Portuguese — conceal it, bring it out, gather it in, close it, light it, empty it.",
      items: [
        { id: "pt-u112l2-esconder", type: "vocab", front: "esconder", reading: "esconder", meaning: "to hide", example: { jp: "A empresa quer esconder o relatório, mas o jornal já o tem.", en: "The company wants to hide the report, but the newspaper already has it." }, drill: { jp: "A empresa quer esconder o relatório", en: "The company wants to hide the report" }, accept: ["to hide", "hide", "to conceal", "to keep hidden"], hint: "ish-kon-DER. Transitive — you hide a THING; esconder-se is to hide yourself. ⚠ Distinguish from encobrir (u97), which is covering up a wrongdoing: esconder is neutral, encobrir is not." },
        { id: "pt-u112l2-revelar", type: "vocab", front: "revelar", reading: "revelar", meaning: "to reveal", example: { jp: "O estudo revela um erro grave, mas o autor fala de um pormenor.", en: "The study reveals a serious mistake, but the author talks about a detail." }, drill: { jp: "O estudo vai revelar um erro", en: "The study is going to reveal a mistake" }, accept: ["to reveal", "reveal", "to disclose", "to bring to light"], hint: "rre-ve-LAR. ⚠ Not divulgar (u55), which is broadcasting something already known — revelar brings out what was hidden. Revelar-se means to turn out to be: revelou-se um erro, it turned out to be a mistake." },
        { id: "pt-u112l2-recolher", type: "vocab", front: "recolher", reading: "recolher", meaning: "to gather in", example: { jp: "A polícia quer recolher mais provas, mas o prazo acaba hoje.", en: "The police want to gather more evidence, but the deadline ends today." }, drill: { jp: "A polícia quer recolher mais provas", en: "The police want to gather more evidence" }, accept: ["to gather in", "gather", "to collect", "to take in"], hint: "rre-ko-LYER. Collecting things that are scattered — data, signatures, harvest. ⚠ As a noun o recolher obrigatório is a curfew, which is the phrase Portuguese news used throughout the pandemic." },
        { id: "pt-u112l2-fechar", type: "vocab", front: "fechar", reading: "fechar", meaning: "to shut", example: { jp: "O banco vai fechar a conta, mas ninguém avisa o cliente.", en: "The bank is going to close the account, but nobody warns the client." }, drill: { jp: "O banco vai fechar a conta", en: "The bank is going to close the account" }, accept: ["to shut", "shut", "to close", "close", "to shut down"], hint: "fe-SHAR. ⚠ THE PAIR TO ABRIR (u13), and the course taught abrir without it — a hole this card closes. Not encerrar (u74), which is the formal winding-up of a process; fechar is the physical or everyday act." },
        { id: "pt-u112l2-acender", type: "vocab", front: "acender", reading: "acender", meaning: "to light", example: { jp: "É preciso acender a luz para ler, mas a sala está sem eletricidade.", en: "One has to put the light on to read, but the room has no electricity." }, drill: { jp: "É preciso acender a luz aqui", en: "One has to put the light on here" }, accept: ["to light", "light", "to switch on (a light)", "to turn on", "to ignite"], hint: "a-sen-DER. ⚠ Overlaps with ligar (u18) but is not the same: you ligar a machine and acender a light or a fire. Its opposite is apagar (u33), which the course already teaches — this card completes that pair too." },
        { id: "pt-u112l2-esvaziar", type: "vocab", front: "esvaziar", reading: "esvaziar", meaning: "to empty", example: { jp: "A crise vai esvaziar o centro da cidade, mas ninguém quer falar.", en: "The crisis is going to empty the city centre, but nobody wants to talk." }, drill: { jp: "A crise vai esvaziar o centro", en: "The crisis is going to empty the centre" }, accept: ["to empty", "empty", "to drain", "to hollow out"], hint: "izh-va-ZYAR, from vazio (u10). The opposite of encher (u43), which the course teaches without it. ⚠ Also used of arguments: esvaziar um argumento is to take all the force out of one." },
      ],
    },
    {
      id: "pt-u112l3",
      unit: 112,
      lesson: 3,
      title: "A forma e o rasto da coisa",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe the physical shape of a thing and what it leaves behind — the tip, the cut, the line, the stain, the trail, the narrow gap.",
      items: [
        { id: "pt-u112l3-aponta", type: "vocab", front: "a ponta", reading: "aponta", meaning: "the pointed end", example: { jp: "A ponta da ferramenta é fraca, mas o mecânico continua a trabalhar.", en: "The tool's pointed end is weak, but the mechanic keeps working." }, drill: { jp: "A ponta da ferramenta é fraca", en: "The tool's pointed end is weak" }, accept: ["the pointed end", "the tip", "tip", "end", "point (of an object)"], hint: "PON-ta. ⚠ Related to o ponto (u111) and not the same: o ponto is an abstract point, a ponta is the physical end of something. De ponta a ponta means from end to end." },
        { id: "pt-u112l3-ocorte", type: "vocab", front: "o corte", reading: "ocorte", meaning: "cut", example: { jp: "O corte no apoio afeta muita gente, mas o comunicado fala de uma medida simples.", en: "The cut in support affects a lot of people, but the press release calls it a simple measure." }, drill: { jp: "O corte no apoio afeta todos", en: "The cut in support affects everyone" }, accept: ["cut", "the cut", "cutback", "a cut"], hint: "KOR-te, from cortar (u41). Physical (um corte na mão) and budgetary (um corte nas despesas) alike. ⚠ A corte with the feminine article is the royal court — a different word sharing the spelling." },
        { id: "pt-u112l3-otraco", type: "vocab", front: "o traço", reading: "otraco", meaning: "trait", example: { jp: "O traço comum aos dois casos é o prazo, mas ninguém o nota.", en: "The common trait of the two cases is the deadline, but nobody notices it." }, drill: { jp: "O traço comum aos dois casos", en: "The common trait of the two cases" }, accept: ["trait", "the trait", "line", "stroke", "feature"], hint: "TRA-su. A pencil line, and by extension a defining feature — um traço de carácter. ⚠ Also the typographic dash, and os traços de alguém are their facial features." },
        { id: "pt-u112l3-amancha", type: "vocab", front: "a mancha", reading: "amancha", meaning: "stain", example: { jp: "A mancha na roupa não sai, mas a loja não quer trocar nada.", en: "The stain on the clothes does not come out, but the shop will not exchange anything." }, drill: { jp: "A mancha na roupa não sai", en: "The stain on the clothes does not come out" }, accept: ["stain", "the stain", "mark", "patch", "blot"], hint: "MAN-sha. A physical stain, a patch of colour, and a blot on a reputation — uma mancha no currículo. ⚠ Note a manchete (u64) is a HEADLINE and unrelated, despite the shared first six letters." },
        { id: "pt-u112l3-apista", type: "vocab", front: "a pista", reading: "apista", meaning: "trail", example: { jp: "A pista mais importante está no relatório, mas ninguém chega ao fim.", en: "The most important trail is in the report, but nobody gets to the end." }, drill: { jp: "A pista mais importante está aqui", en: "The most important trail is here" }, accept: ["trail", "the trail", "lead", "track", "clue"], hint: "PISH-ta. ⚠ o indício (u89) is the physical sign that something happened; a pista is the thread you FOLLOW from it. Also a runway, a dance floor and a lane of a road — Portuguese uses one word for all the things you travel along." },
        { id: "pt-u112l3-estreito", type: "vocab", front: "estreito", reading: "estreito", meaning: "narrow", example: { jp: "O espaço entre as casas é estreito, mas a câmara aprova a obra.", en: "The space between the houses is narrow, but the council approves the work." }, drill: { jp: "O espaço entre as casas é estreito", en: "The space between the houses is narrow" }, accept: ["narrow", "tight", "close", "constricted"], hint: "ish-TRAY-tu. The opposite of largo (u10). ⚠ Also a geographic strait — o estreito de Gibraltar — and used of relationships: uma relação estreita is a CLOSE one, not a limited one." },
      ],
    },
    {
      id: "pt-u112l4",
      unit: 112,
      lesson: 4,
      title: "Vivo ou morto, claro ou escuro",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Judge how alive, how gentle and how clear a thing is in Portuguese — living, dead, soft, sharp, murky, dense.",
      items: [
        { id: "pt-u112l4-vivo", type: "vocab", front: "vivo", reading: "vivo", meaning: "alive", example: { jp: "O debate continua vivo dez anos depois, mas ninguém sabe porquê.", en: "The debate is still alive ten years later, but nobody knows why." }, drill: { jp: "O debate continua vivo dez anos", en: "The debate stays alive ten years on" }, accept: ["alive", "living", "live", "lively", "vivid"], hint: "VEE-vu. Alive, and also vivid of a colour (vermelho vivo) and sharp of a mind. ⚠ ao vivo means live, as of a broadcast — the same distinction English makes with the same word." },
        { id: "pt-u112l4-morto", type: "vocab", front: "morto", reading: "morto", meaning: "dead", example: { jp: "O acordo está morto, mas o outro lado continua a falar.", en: "The agreement is dead, but the other side keeps talking." }, drill: { jp: "O acordo está morto desde ontem", en: "The agreement has been dead since yesterday" }, accept: ["dead", "deceased", "finished", "lifeless"], hint: "MOR-tu, the irregular participle of morrer (u80). ⚠ It is an ADJECTIVE with estar or ser: está morto. Portuguese also uses it for exhausted — estou morto — exactly as English says dead tired." },
        { id: "pt-u112l4-suave", type: "vocab", front: "suave", reading: "suave", meaning: "gentle", example: { jp: "O tom da carta é suave, mas o conteúdo é duro.", en: "The tone of the letter is gentle, but the content is hard." }, drill: { jp: "O tom da carta é suave", en: "The letter's tone is gentle" }, accept: ["gentle", "soft", "mild", "smooth", "subtle"], hint: "SWA-ve. One form for both genders. Of a taste, a sound, a slope or a tone of voice. ⚠ Not mole (u42), which is physically soft to the touch — suave is about how something LANDS on you." },
        { id: "pt-u112l4-nitido", type: "vocab", front: "nítido", reading: "nitido", meaning: "sharp (clear)", example: { jp: "O contraste entre os dois casos é nítido, mas o relatório não fala dele.", en: "The contrast between the two cases is sharp, but the report does not mention it." }, drill: { jp: "O contraste entre os casos é nítido", en: "The contrast between the cases is sharp" }, accept: ["sharp (clear)", "clear-cut", "sharp", "distinct", "crisp"], hint: "NEE-ti-du. Clear at the EDGES — a photograph, a distinction, a memory. ⚠ claro (u2) is clear because it is well lit or easy to grasp; nítido is clear because nothing about it is blurred." },
        { id: "pt-u112l4-obscuro", type: "vocab", front: "obscuro", reading: "obscuro", meaning: "obscure", example: { jp: "O ponto mais obscuro do texto é o prazo, mas ninguém quer perguntar.", en: "The most obscure point in the text is the deadline, but nobody wants to ask." }, drill: { jp: "O ponto mais obscuro é o prazo", en: "The most obscure point is the deadline" }, accept: ["obscure", "murky", "unclear", "shadowy", "dark"], hint: "ob-SKU-ru. The exact opposite of nítido. ⚠ Carries a moral shadow that escuro (u8) does not: um negócio obscuro is a shady deal, while um quarto escuro is simply an unlit room." },
        { id: "pt-u112l4-denso", type: "vocab", front: "denso", reading: "denso", meaning: "dense", example: { jp: "O relatório é denso, e por isso quase ninguém chega ao fim.", en: "The report is dense, and so almost nobody reaches the end." }, drill: { jp: "O relatório é muito denso hoje", en: "The report is very dense today" }, accept: ["dense", "thick", "heavy going", "packed"], hint: "DEN-su. Of fog, of a forest, of a text. ⚠ In Portuguese it is NOT automatically a criticism the way English dense can be of a person — um texto denso can be praise, meaning it carries a lot in few words." },
      ],
    },
  ],
};
