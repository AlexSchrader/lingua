// PT Unit 81 — A fiabilidade e o desgaste (slot: coverage-b1-8) — B1
// IS THIS THING FIT TO LAST? The slot was first slated as "quality and defect"
// and the crew lead BLOCKED it: A2 u31 A personalidade e o feitio already owns
// a qualidade and o defeito as evaluation nouns. Retitled and re-aimed on that
// ruling — this unit is not about judging things in general, it is about whether
// an object holds up: reliable, tough, solid, fragile, worn, giving way.
//
// SLOT BOUNDARIES:
//   u75 Os adjetivos (block 2) owns general evaluative adjectives that describe
//   ANYTHING. The partition agreed with that seat: word class theirs, DOMAIN
//   mine. These 24 are equipment-fitness — an adjective here only earns its
//   place if it says something about whether the thing will survive use.
//   Block 2 explicitly ceded fiável, resistente, frágil, adequado, eficaz and
//   o desgaste to this slot even though u74-u76 outrank it.
//   u43 owns pesado, u10 fraco and velho, u47 o risco and seguro, u32 a
//   segurança, u28 durar. All usable in examples, none re-taught.
//   u87 A manutenção e o conserto (mine, later) owns the FAILURE EVENT and the
//   repair; this unit stops at the property that predicts it.
//
// durável was on the lead's ceded list and is NOT carded: it is built straight
// off durar (u28), so it would be a second mastery track on a word the learner
// already has — the lexeme trap RUNBOOK section 4 names. sólido takes its slot.
// o desgaste IS kept: it comes from desgastar, not from gastar (u18), and the
// hint says so rather than leaving the learner to guess at the family.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT81 = {
  id: "pt-u81",
  lang: "pt",
  title: "A fiabilidade e o desgaste",
  order: 81,
  stage: "b1",
  lessons: [
    {
      id: "pt-u81l1",
      unit: 81,
      lesson: 1,
      title: "O que se aguenta",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Say in Portuguese that something can be counted on — reliable, tough, solid, steady, effective, right for the job.",
      items: [
        { id: "pt-u81l1-fiavel", type: "vocab", front: "fiável", reading: "fiavel", meaning: "reliable", example: { jp: "O comboio da manhã é fiável e chega sempre à hora.", en: "The morning train is reliable and always arrives on time." }, drill: { jp: "O comboio da manhã é fiável", en: "The morning train is reliable" }, accept: ["reliable", "dependable", "trustworthy"], hint: "fi-A-vel. From fiar, to trust — fiar-se em alguém is to rely on somebody. Uma fonte fiável is a reliable source, the phrase a Portuguese news article reaches for." },
        { id: "pt-u81l1-resistente", type: "vocab", front: "resistente", reading: "resistente", meaning: "tough", example: { jp: "A madeira da porta é resistente e a chuva não faz nada.", en: "The wood of the door is tough and the rain does nothing to it." }, drill: { jp: "A madeira da porta é resistente", en: "The wood of the door is tough" }, accept: ["tough", "hard-wearing", "resistant", "sturdy", "durable"], hint: "rre-zish-TEN-te. It takes a beating and survives — resistente à água is waterproof on a label. Of a person it means hardy rather than stubborn." },
        { id: "pt-u81l1-solido", type: "vocab", front: "sólido", reading: "solido", meaning: "solid", example: { jp: "O carro do avô é sólido e aguenta o peso de tudo.", en: "My grandfather's car is solid and takes the weight of everything." }, drill: { jp: "O carro do avô é sólido", en: "My grandfather's car is solid" }, accept: ["solid", "sturdy", "firm", "substantial"], hint: "SO-li-du. Solid in build and solid as an argument — uma base sólida. It is also the physical state: sólido, líquido, gasoso, the three a Portuguese schoolchild learns together." },
        { id: "pt-u81l1-eficaz", type: "vocab", front: "eficaz", reading: "eficaz", meaning: "effective", example: { jp: "O trabalho do professor é eficaz e a turma aprende depressa.", en: "The teacher's work is effective and the class learns quickly." }, drill: { jp: "O trabalho do professor é eficaz", en: "The teacher's work is effective" }, accept: ["effective", "efficacious", "successful", "that works"], hint: "e-fi-KASH. It gets the result — a medicine, a method, a law. Keep it apart from eficiente, which is about doing it without waste: eficaz is whether it worked at all." },
        { id: "pt-u81l1-adequado", type: "vocab", front: "adequado", reading: "adequado", meaning: "suitable", example: { jp: "O livro é adequado para a idade da criança.", en: "The book is suitable for the child's age." }, drill: { jp: "O livro é adequado para a turma", en: "The book is suitable for the class" }, accept: ["suitable", "appropriate", "fitting", "right", "adequate"], hint: "a-de-KWA-du, the qu said as kw here. Adequado A or PARA something. Note it is not the English adequate in the grudging sense — in Portuguese it means well matched to the job." },
      ],
    },
    {
      id: "pt-u81l2",
      unit: 81,
      lesson: 2,
      title: "O que cede",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how something fails in Portuguese — it's fragile, it's worn, it gives way, it cracks, or it just about holds.",
      items: [
        { id: "pt-u81l2-fragil", type: "vocab", front: "frágil", reading: "fragil", meaning: "fragile", example: { jp: "O vidro da janela é frágil e cai com o vento.", en: "The window glass is fragile and comes down in the wind." }, drill: { jp: "O vidro da janela é frágil", en: "The window glass is fragile" }, accept: ["fragile", "delicate", "brittle", "weak"], hint: "FRA-zhil, stress on the first syllable. Frágil is stamped on parcels. Of a person it means frail or in a delicate state, where fraco, which you know, is simply weak." },
        { id: "pt-u81l2-odesgaste", type: "vocab", front: "o desgaste", reading: "odesgaste", meaning: "wear", example: { jp: "O desgaste da escada velha já se vê na madeira.", en: "The wear on the old stairs already shows in the wood." }, drill: { jp: "O desgaste da escada já se vê", en: "The wear on the stairs already shows" }, accept: ["the wear", "wear", "wear and tear", "erosion"], hint: "desh-GASH-te. From desgastar, to wear down — not from gastar, to spend, though they look like family. Desgaste físico is physical strain, and it is what a doctor writes about a knee." },
        { id: "pt-u81l2-ceder", type: "vocab", front: "ceder", reading: "ceder", meaning: "to give way", example: { jp: "A madeira da cama cedeu com o peso e o cão saltou.", en: "The wood of the bed gave way under the weight and the dog jumped." }, drill: { jp: "A madeira da cama vai ceder", en: "The wood of the bed is going to give way" }, accept: ["give way", "to give way", "to give in", "to yield", "to cave in"], hint: "se-DER. A shelf gives way and so does a person in an argument — ceder a alguém. On a Portuguese road sign, ceda o passo is give way." },
        { id: "pt-u81l2-rachar", type: "vocab", front: "rachar", reading: "rachar", meaning: "to crack", example: { jp: "O prato rachou na água quente da cozinha.", en: "The plate cracked in the hot water in the kitchen." }, drill: { jp: "O prato vai rachar na água quente", en: "The plate is going to crack in the hot water" }, accept: ["crack", "to crack", "to split", "to chip"], hint: "rra-SHAR. A crack that opens without the thing coming apart — uma racha is the crack itself. Portuguese also says rachar a conta for splitting the bill." },
        { id: "pt-u81l2-aguentar", type: "vocab", front: "aguentar", reading: "aguentar", meaning: "to hold up", example: { jp: "A cadeira velha ainda aguenta o peso de um adulto.", en: "The old chair still holds the weight of an adult." }, drill: { jp: "A cadeira velha vai aguentar tudo", en: "The old chair is going to hold up under everything" }, accept: ["hold up", "to hold up", "to take", "to bear", "to put up with", "to stand"], hint: "a-gwen-TAR. A shelf holds a weight and a person holds out — não aguento mais is I can't take any more, one of the most-used sentences in the language." },
      ],
    },
    {
      id: "pt-u81l3",
      unit: 81,
      lesson: 3,
      title: "Como é feito",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Describe what a thing is made like in Portuguese — light, flexible, rigid, thick, thin, handy.",
      items: [
        { id: "pt-u81l3-leve", type: "vocab", front: "leve", reading: "leve", meaning: "light", example: { jp: "A caixa é leve e a criança consegue segurar tudo.", en: "The box is light and the child can hold it all." }, drill: { jp: "A caixa é leve para a criança", en: "The box is light for the child" }, accept: ["light", "lightweight", "slight", "gentle"], hint: "LE-ve, the opposite of pesado. Also gentle or slight: uma chuva leve, um sono leve. Levar, to carry, is a relative — what is leve is easy to carry." },
        { id: "pt-u81l3-flexivel", type: "vocab", front: "flexível", reading: "flexivel", meaning: "flexible", example: { jp: "O fio do telemóvel é flexível e não racha com o frio.", en: "The mobile's cable is flexible and doesn't crack in the cold." }, drill: { jp: "O fio do telemóvel é flexível", en: "The mobile's cable is flexible" }, accept: ["flexible", "bendy", "supple", "adaptable"], hint: "flek-SEE-vel. It bends without breaking, and the figurative sense travels: um horário flexível is flexible hours, which is what a Portuguese job advert promises." },
        { id: "pt-u81l3-rigido", type: "vocab", front: "rígido", reading: "rigido", meaning: "rigid", example: { jp: "O professor é rígido com as regras da turma.", en: "The teacher is strict with the class rules." }, drill: { jp: "O professor é rígido com as regras", en: "The teacher is strict with the rules" }, accept: ["rigid", "stiff", "hard", "strict", "inflexible"], hint: "RREE-zhi-du. Stiff in material and strict in a person or a rule — regras rígidas. The opposite of flexível in both senses at once." },
        { id: "pt-u81l3-grosso", type: "vocab", front: "grosso", reading: "grosso", meaning: "thick", example: { jp: "O vidro da porta é grosso e o barulho da rua não entra.", en: "The glass in the door is thick and the noise from the street doesn't get in." }, drill: { jp: "O vidro da porta é grosso", en: "The glass in the door is thick" }, accept: ["thick", "coarse", "heavy", "rough"], hint: "GRO-su. Thick of a material, and coarse of behaviour or language: ser grosso com alguém is to be rude to someone. A grossura is the thickness." },
        { id: "pt-u81l3-fino", type: "vocab", front: "fino", reading: "fino", meaning: "thin", example: { jp: "O vidro fino da janela não aguenta o frio do inverno.", en: "The thin glass in the window doesn't hold up against the winter cold." }, drill: { jp: "O vidro fino não aguenta o frio", en: "Thin glass doesn't hold up against the cold" }, accept: ["thin", "fine", "slim", "refined", "delicate"], hint: "FEE-nu. Thin, and also fine in the sense of refined — um restaurante fino. In a Porto café um fino is a small draught beer, which is the one you will need most." },
        { id: "pt-u81l3-pratico", type: "vocab", front: "prático", reading: "pratico", meaning: "practical", example: { jp: "O carro pequeno é prático para a cidade e gasta menos.", en: "The small car is practical for the city and uses less." }, drill: { jp: "O carro pequeno é prático", en: "The small car is practical" }, accept: ["practical", "handy", "convenient", "hands-on"], hint: "PRA-ti-ku. Of a thing, handy; of a person, someone who gets on with it. Na prática means in practice, as against na teoria." },
      ],
    },
    {
      id: "pt-u81l4",
      unit: 81,
      lesson: 4,
      title: "Serve ou não serve",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Judge whether a thing does its job in Portuguese — useful, useless, workable, perfect — and put it to the test.",
      items: [
        { id: "pt-u81l4-util", type: "vocab", front: "útil", reading: "util", meaning: "useful", example: { jp: "O telemóvel é útil na rua mas não é útil na aula.", en: "The mobile is useful in the street but it isn't useful in the lesson." }, drill: { jp: "O telemóvel é útil na rua", en: "The mobile is useful in the street" }, accept: ["useful", "handy", "helpful", "of use"], hint: "OO-til, stress on the first syllable. Dias úteis are working days — the phrase on every Portuguese delivery estimate and bank notice." },
        { id: "pt-u81l4-inutil", type: "vocab", front: "inútil", reading: "inutil", meaning: "useless", example: { jp: "A chave velha é inútil porque a porta é nova.", en: "The old key is useless because the door is new." }, drill: { jp: "A chave velha é inútil", en: "The old key is useless" }, accept: ["useless", "pointless", "of no use", "futile"], hint: "i-NOO-til. Útil with in- on the front. É inútil insistir is there's no point insisting — softer in Portuguese than calling a person inútil, which is as rude as it sounds." },
        { id: "pt-u81l4-funcional", type: "vocab", front: "funcional", reading: "funcional", meaning: "functional", example: { jp: "A cozinha é pequena mas funcional e a família gosta dela.", en: "The kitchen is small but functional and the family likes it." }, drill: { jp: "A cozinha é pequena mas funcional", en: "The kitchen is small but functional" }, accept: ["functional", "workable", "practical", "working"], hint: "fun-si-u-NAL, from funcionar, which you met at Unit 33. It does the job without being lovely about it — the exact note the English word carries." },
        { id: "pt-u81l4-perfeito", type: "vocab", front: "perfeito", reading: "perfeito", meaning: "perfect", example: { jp: "O dia na praia foi perfeito e ninguém quis ir para casa.", en: "The day at the beach was perfect and nobody wanted to go home." }, drill: { jp: "O dia na praia foi perfeito", en: "The day at the beach was perfect" }, accept: ["perfect", "flawless", "ideal", "spot on"], hint: "per-FAY-tu. Also the grammar term — o pretérito perfeito is the past tense you already use. Perfeito! on its own is a very Portuguese way of saying that's settled." },
        { id: "pt-u81l4-testar", type: "vocab", front: "testar", reading: "testar", meaning: "to test", example: { jp: "O pai testou a luz do jardim antes da noite.", en: "My father tested the garden light before nightfall." }, drill: { jp: "Vou testar a luz do jardim", en: "I'm going to test the garden light" }, accept: ["test", "to test", "to try out", "to try", "to check"], hint: "tesh-TAR. Putting a thing through its paces; um teste is the test, at school or in a lab. For trying clothes on, Portuguese keeps provar." },
        { id: "pt-u81l4-aprova", type: "vocab", front: "a prova", reading: "aprova", meaning: "proof", example: { jp: "A prova de que a cadeira aguenta é o pai sentado nela.", en: "The proof that the chair holds is my father sitting on it." }, drill: { jp: "A prova está na cadeira velha", en: "The proof is in the old chair" }, accept: ["the proof", "proof", "evidence", "the test", "exam"], hint: "PRO-va. Proof, and also an exam or a race — uma prova de matemática, uma prova de ciclismo. À prova de água is waterproof, the same à prova de that makes anything -proof." },
      ],
    },
  ],
};
