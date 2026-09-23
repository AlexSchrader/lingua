// PT Unit 115 — A construção e a reparação (slot: coverage-b2-5) — B2
// WHAT A BUILDING IS MADE OF, HOW IT FAILS, AND WHAT IT COSTS TO PUT RIGHT.
// The scaffold title was "Vocabulary 5 (B2)". u114 owns the city as a plan; this
// unit owns the material itself. Chosen because no named B2 slot (u88-113)
// covers materials or repair, and because a learner living in Portugal reads
// these words in a condomínio notice long before they read a newspaper editorial.
//
// SLOT BOUNDARIES:
//   u30 owns a garagem, o chão, o gás; u42 o vidro, o couro, o barro, quadrado;
//   u81 o desgaste; u87 a garantia. All used here, none re-taught.
//   o desgaste and a garantia were both in block 3's first draft for this unit
//   and are ALREADY TAUGHT — replaced by a degradação and a caução, which are
//   different words rather than synonyms of them.
//   o betão keeps its front but is glossed "concrete (the material)" because
//   u58l2 already teaches concreto for the abstract sense.
//
// EUROPEAN PORTUGUESE: o azulejo, a calçada and o estuque are Portuguese
// building culture; betão is pt-PT where Brazil says concreto, and casa de banho
// not banheiro throughout.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT115 = {
  id: "pt-u115",
  lang: "pt",
  title: "A construção e a reparação",
  order: 115,
  stage: "b2",
  lessons: [
    {
      id: "pt-u115l1",
      unit: 115,
      lesson: 1,
      title: "Do que é feito",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the structural materials a Portuguese building is made of, and say what holds it up.",
      items: [
        { id: "pt-u115l1-aobra", type: "vocab", front: "a obra", reading: "aobra", meaning: "building works", example: { jp: "A obra ao lado começa às sete da manhã e não deixa ninguém dormir.", en: "The building works next door start at seven in the morning and let nobody sleep." }, drill: { jp: "A obra começa às sete", en: "The building works start at seven" }, accept: ["building works", "the building works", "works", "the works", "construction", "building site"], hint: "O-bra. The work being done on a building. In the plural as obras it is also roadworks, and estar em obras is the sign on every closed Portuguese café. A obra is separately a work of art or a book — same word, decided by context." },
        { id: "pt-u115l1-obetao", type: "vocab", front: "o betão", reading: "obetao", meaning: "concrete (the material)", example: { jp: "O betão precisa de alguns dias antes de aguentar peso.", en: "Concrete needs a few days before it can take weight." }, drill: { jp: "O betão precisa de alguns dias", en: "Concrete needs a few days" }, accept: ["concrete", "the concrete", "cement"], hint: "be-TOWN. THE pt-PT word — Brazil says concreto, which in Portugal is only the adjective meaning concrete as opposed to abstract (taught at u58). Betão armado is reinforced concrete." },
        { id: "pt-u115l1-otijolo", type: "vocab", front: "o tijolo", reading: "otijolo", meaning: "brick", example: { jp: "O tijolo antigo é maior do que o que se usa agora.", en: "The old brick is bigger than the one used now." }, drill: { jp: "O tijolo antigo é maior", en: "The old brick is bigger" }, accept: ["brick", "the brick", "bricks"], hint: "ti-ZHO-lu, zh as in measure. The fired clay block. Parede de tijolo is a brick wall, and calling a phone um tijolo is the same joke as in English." },
        { id: "pt-u115l1-aviga", type: "vocab", front: "a viga", reading: "aviga", meaning: "beam", example: { jp: "A viga do teto é de madeira e tem mais de cem anos.", en: "The ceiling beam is wooden and is more than a hundred years old." }, drill: { jp: "A viga do teto é de madeira", en: "The ceiling beam is wooden" }, accept: ["beam", "the beam", "girder", "joist"], hint: "VEE-ga. The horizontal member carrying the load. Wood, steel or concrete alike — viga de betão is what holds up most Portuguese flats." },
        { id: "pt-u115l1-oalicerce", type: "vocab", front: "o alicerce", reading: "oalicerce", meaning: "foundation", example: { jp: "O alicerce da casa foi feito antes de subir as paredes.", en: "The foundation of the house was made before the walls went up." }, drill: { jp: "O alicerce da casa foi feito", en: "The foundation of the house was made" }, accept: ["foundation", "the foundation", "foundations", "footing"], hint: "a-li-SER-se. What the building stands on, usually plural in speech — os alicerces. Used figuratively exactly as in English: os alicerces da democracia." },
        { id: "pt-u115l1-aargamassa", type: "vocab", front: "a argamassa", reading: "aargamassa", meaning: "mortar", example: { jp: "A argamassa entre os tijolos caiu com a chuva de muitos anos.", en: "The mortar between the bricks fell out with many years of rain." }, drill: { jp: "A argamassa entre os tijolos caiu", en: "The mortar between the bricks fell out" }, accept: ["mortar", "the mortar", "render", "mix"], hint: "ar-ga-MA-sa. The sand-and-cement mix holding masonry together, and also the render on the outside. Not to be confused with a massa, which is pasta or dough." },
      ],
    },
    {
      id: "pt-u115l2",
      unit: 115,
      lesson: 2,
      title: "Os acabamentos",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe the finishes of a Portuguese interior — tiles, floors, plasterwork, frames.",
      items: [
        { id: "pt-u115l2-oazulejo", type: "vocab", front: "o azulejo", reading: "oazulejo", meaning: "glazed tile", example: { jp: "O azulejo azul e branco da entrada é do século passado.", en: "The blue and white tile in the entrance is from the last century." }, drill: { jp: "O azulejo da entrada é antigo", en: "The tile in the entrance is old" }, accept: ["glazed tile", "the glazed tile", "tile", "the tile", "azulejo", "tiles"], hint: "a-zu-LE-zhu. The painted glazed tile that covers Portuguese churches, stations and kitchens. From Arabic az-zulayj, not from azul — the resemblance is a coincidence every learner falls for." },
        { id: "pt-u115l2-osoalho", type: "vocab", front: "o soalho", reading: "osoalho", meaning: "wooden floor", example: { jp: "O soalho antigo faz barulho quando se anda em cima.", en: "The old wooden floor makes a noise when you walk on it." }, drill: { jp: "O soalho antigo faz barulho", en: "The old wooden floor makes a noise" }, accept: ["wooden floor", "the wooden floor", "floorboards", "floorboard", "wood flooring"], hint: "su-A-lyu, lh. Specifically the boarded wooden floor, against o chão, which is the ground or floor in general. A selling point in any old Lisbon flat." },
        { id: "pt-u115l2-oestuque", type: "vocab", front: "o estuque", reading: "oestuque", meaning: "plasterwork", example: { jp: "O estuque do teto tem desenhos feitos à mão.", en: "The ceiling plasterwork has designs made by hand." }, drill: { jp: "O estuque do teto tem desenhos", en: "The ceiling plasterwork has designs" }, accept: ["plasterwork", "the plasterwork", "plaster", "stucco", "the plaster"], hint: "shTOO-ke. The worked plaster of a ceiling or cornice, often decorative. Estucador is the trade — one of the crafts a Portuguese reabilitação still needs." },
        { id: "pt-u115l2-orodape", type: "vocab", front: "o rodapé", reading: "orodape", meaning: "skirting board", example: { jp: "O rodapé branco fica bem com a parede clara.", en: "The white skirting board goes well with the pale wall." }, drill: { jp: "O rodapé branco fica bem", en: "The white skirting board looks good" }, accept: ["skirting board", "the skirting board", "baseboard", "skirting"], hint: "rru-da-PE. Literally foot-of-the-wall. In a newspaper a rodapé is also the strip along the bottom of the page — the footer." },
        { id: "pt-u115l2-acaixilharia", type: "vocab", front: "a caixilharia", reading: "acaixilharia", meaning: "window frames", example: { jp: "A caixilharia nova deixa entrar menos frio e menos barulho.", en: "The new window frames let in less cold and less noise." }, drill: { jp: "A caixilharia nova deixa entrar menos frio", en: "The new frames let in less cold" }, accept: ["window frames", "the window frames", "frames", "glazing", "joinery"], hint: "kai-shi-lya-REE-a, lh. All the window and door frames of a building taken together, from o caixilho, one frame. The word in every Portuguese advert for double glazing." },
        { id: "pt-u115l2-orevestimento", type: "vocab", front: "o revestimento", reading: "orevestimento", meaning: "cladding", example: { jp: "O revestimento de fora protege a parede da chuva.", en: "The cladding outside protects the wall from the rain." }, drill: { jp: "O revestimento protege a parede", en: "The cladding protects the wall" }, accept: ["cladding", "the cladding", "covering", "facing", "surface finish", "lining"], hint: "rre-vesh-ti-MEN-tu. Whatever is laid over a surface to protect or finish it — stone, tile, wood or render. Revestir is to clothe, and the metaphor is exactly that." },
      ],
    },
    {
      id: "pt-u115l3",
      unit: 115,
      lesson: 3,
      title: "O que corre mal",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Report what has gone wrong with a building in Portuguese — cracks, damp, movement, and the mess it leaves.",
      items: [
        { id: "pt-u115l3-afissura", type: "vocab", front: "a fissura", reading: "afissura", meaning: "crack", example: { jp: "A fissura na parede apareceu depois do inverno.", en: "The crack in the wall appeared after the winter." }, drill: { jp: "A fissura na parede apareceu depois", en: "The crack in the wall appeared afterwards" }, accept: ["crack", "the crack", "fissure", "split", "hairline crack"], hint: "fi-SOO-ra. The technical word a surveyor writes; uma racha is what a neighbour says. A fissura is also a craving in informal speech — ter uma fissura por chocolate." },
        { id: "pt-u115l3-ainfiltracao", type: "vocab", front: "a infiltração", reading: "ainfiltracao", meaning: "water ingress", example: { jp: "A infiltração no teto vem do andar de cima.", en: "The water coming through the ceiling is from the floor above." }, drill: { jp: "A infiltração no teto vem de cima", en: "The water ingress in the ceiling comes from above" }, accept: ["water ingress", "the water ingress", "leak", "the leak", "damp", "infiltration", "seepage"], hint: "in-fil-tra-SOWN. Water getting in where it should not. The single commonest cause of argument between Portuguese neighbours, and the word your insurance form will ask for." },
        { id: "pt-u115l3-adegradacao", type: "vocab", front: "a degradação", reading: "adegradacao", meaning: "deterioration", example: { jp: "A degradação do prédio foi lenta mas ninguém fez nada.", en: "The deterioration of the building was slow but nobody did anything." }, drill: { jp: "A degradação do prédio foi lenta", en: "The deterioration of the building was slow" }, accept: ["deterioration", "the deterioration", "decay", "degradation", "dilapidation", "decline"], hint: "de-gra-da-SOWN. Getting worse over time through neglect. Um prédio degradado is the standard phrase for a building let go — and the trigger for a requalificação." },
        { id: "pt-u115l3-oabatimento", type: "vocab", front: "o abatimento", reading: "oabatimento", meaning: "subsidence", example: { jp: "O abatimento do chão obrigou a fechar a rua.", en: "The subsidence of the ground forced the street to be closed." }, drill: { jp: "O abatimento do chão fechou a rua", en: "The subsidence of the ground closed the street" }, accept: ["subsidence", "the subsidence", "collapse", "sinking", "settlement"], hint: "a-ba-ti-MEN-tu. Ground or structure dropping. In a shop it means a price reduction, and of a person, low spirits — the shared idea is something coming down." },
        { id: "pt-u115l3-oandaime", type: "vocab", front: "o andaime", reading: "oandaime", meaning: "scaffolding", example: { jp: "O andaime esteve na frente do prédio durante meses.", en: "The scaffolding was in front of the building for months." }, drill: { jp: "O andaime esteve na frente do prédio", en: "The scaffolding was in front of the building" }, accept: ["scaffolding", "the scaffolding", "scaffold", "the scaffold"], hint: "an-DAI-me. The temporary metal frame workers stand on. Often plural in practice — os andaimes — and a familiar sight on every street being reabilitada." },
        { id: "pt-u115l3-oentulho", type: "vocab", front: "o entulho", reading: "oentulho", meaning: "rubble", example: { jp: "O entulho da obra ficou na rua mais de uma semana.", en: "The rubble from the works stayed in the street for more than a week." }, drill: { jp: "O entulho ficou na rua uma semana", en: "The rubble stayed in the street a week" }, accept: ["rubble", "the rubble", "debris", "building waste", "builders' waste"], hint: "en-TOO-lyu, lh. Broken material a job leaves behind. Um contentor de entulho is the skip you hire for it — the thing that blocks Portuguese streets during a renovation." },
      ],
    },
    {
      id: "pt-u115l4",
      unit: 115,
      lesson: 4,
      title: "Pôr em condições",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Arrange for something to be put right in Portuguese — repairs, upkeep, the contractor and the deposit.",
      items: [
        { id: "pt-u115l4-areparacao", type: "vocab", front: "a reparação", reading: "areparacao", meaning: "repair", example: { jp: "A reparação do teto custou menos do que se pensava.", en: "The repair of the roof cost less than was thought." }, drill: { jp: "A reparação do teto custou pouco", en: "The repair of the roof cost little" }, accept: ["repair", "the repair", "repairs", "fixing", "mending"], hint: "rre-pa-ra-SOWN. Putting one broken thing right. It also carries the legal sense of redress — reparação dos danos, making good a loss." },
        { id: "pt-u115l4-amanutencao", type: "vocab", front: "a manutenção", reading: "amanutencao", meaning: "maintenance", example: { jp: "A manutenção do prédio é paga por todos os que lá moram.", en: "The maintenance of the building is paid for by everyone who lives there." }, drill: { jp: "A manutenção do prédio é paga por todos", en: "The maintenance of the building is paid by everyone" }, accept: ["maintenance", "the maintenance", "upkeep", "servicing"], hint: "ma-nu-ten-SOWN. Ongoing care so nothing breaks, against a reparação, which comes after it already has. The line item on every condomínio bill." },
        { id: "pt-u115l4-acaucao", type: "vocab", front: "a caução", reading: "acaucao", meaning: "security deposit", example: { jp: "A caução foi devolvida porque a casa ficou como estava.", en: "The deposit was returned because the house was left as it was." }, drill: { jp: "A caução foi devolvida no fim", en: "The deposit was returned at the end" }, accept: ["security deposit", "the security deposit", "deposit", "the deposit", "bond", "surety"], hint: "kau-SOWN. Money held against damage, typically two months' rent in a Portuguese lease. Distinct from o sinal, which is the deposit that commits you to a purchase." },
        { id: "pt-u115l4-oempreiteiro", type: "vocab", front: "o empreiteiro", reading: "oempreiteiro", meaning: "contractor", example: { jp: "O empreiteiro disse que a obra estava pronta em três meses.", en: "The contractor said the works would be ready in three months." }, drill: { jp: "O empreiteiro disse três meses", en: "The contractor said three months" }, accept: ["contractor", "the contractor", "builder", "the builder", "building contractor"], hint: "em-pray-TAY-ru. The person or firm who takes on an empreitada. Not the architect and not the workers — the one who signed for the price." },
        { id: "pt-u115l4-avistoria", type: "vocab", front: "a vistoria", reading: "avistoria", meaning: "survey (inspection)", example: { jp: "A vistoria foi feita antes de assinar os papéis da casa.", en: "The survey was done before signing the papers for the house." }, drill: { jp: "A vistoria foi feita antes de assinar", en: "The survey was done before signing" }, accept: ["survey", "the survey", "inspection", "the inspection", "examination", "viewing"], hint: "vish-tu-REE-a. A formal look-over producing a written verdict, from ver. A fiscalização checks that rules were obeyed; a vistoria records what condition a thing is in." },
        { id: "pt-u115l4-abetoneira", type: "vocab", front: "a betoneira", reading: "abetoneira", meaning: "cement mixer", example: { jp: "A betoneira trabalhou toda a manhã na rua de baixo.", en: "The cement mixer worked all morning in the street below." }, drill: { jp: "A betoneira trabalhou toda a manhã", en: "The cement mixer worked all morning" }, accept: ["cement mixer", "the cement mixer", "concrete mixer", "mixer"], hint: "be-tu-NAY-ra. From betão, so the pt-PT word — Brazil says betoneira too, but from a different everyday concrete vocabulary. Both the small drum on site and the lorry." },
      ],
    },
  ],
};
