// PT Unit 64 — Os meios de comunicação (slot: media) — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 2, unit 1 of 13. The A1/A2 corpus already spent the concrete layer of
// this domain twice: u19 owns o jornal / a televisão / o filme / ver / ouvir,
// u33 owns the devices and the internet verbs (partilhar, enviar, apagar), u35
// owns the arts (o teatro, o concerto, o escritor, o público). So this unit takes
// the layer above all three — the PRODUCTION and the CIRCULATION of media, not
// the objects: who writes it, how it reaches you, and what it does to opinion.
// Nothing here re-teaches a device, an art form, or a place.
//
// pt-PT decisions in this unit (see unit1.js for the corpus-wide ones):
//   - `o realizador` is the European Portuguese word for a film director.
//     Brazil says "o diretor"; a pt-PT learner who says diretor of a film is
//     understood but marked. The hint says so rather than hiding it.
//   - `o guião` is likewise pt-PT; Brazil says "o roteiro".
//   - `o direto` is the noun Portugal actually uses for live broadcast
//     ("em direto"), where Brazil says "ao vivo".
//   - `a rádio` (the medium, feminine) vs `o rádio` (the set): pt uses the
//     feminine for the broadcaster and the medium, which is what this card is.
//     The word was already USED in shipped examples and taught by no unit —
//     this slot is the lowest one that wants it, so it is carded here.
//   - `o jornalista` is derived from `o jornal` (u19) and is a separate lexeme,
//     not a second mastery track on the same word. The hint names the link so
//     the learner sees the family rather than two unrelated cards.
//
// Examples are B1 shape: two clauses joined by a connective the corpus already
// teaches (por isso / no entanto / além disso / mas / porque, u21+u29). Drills
// are the same idea cut to 3-8 tokens with the front intact as WHOLE WORDS,
// validated against the ENGINE (canCloze / canSentence / findFrontInExample),
// never against lint alone — see the article trap in unit1.js.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT64 = {
  id: "pt-u64",
  lang: "pt",
  title: "Os meios de comunicação",
  order: 64,
  stage: "b1",
  lessons: [
    // Lesson 1: the press — the people and the products, not the paper.
    {
      id: "pt-u64l1",
      unit: 64,
      lesson: 1,
      title: "A imprensa",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say where a piece of news came from — who wrote it, where it was published, and who it was written for.",
      items: [
        { id: "pt-u64l1-omeiodecomunicacao", type: "vocab", front: "o meio de comunicação", reading: "omeiodecomunicacao", meaning: "medium of communication", example: { jp: "A televisão foi o meio de comunicação mais importante durante muitos anos, no entanto os jovens já leem as notícias no telemóvel.", en: "Television was the most important medium of communication for many years; however, young people already read the news on their phones." }, drill: { jp: "O meio de comunicação mudou muito", en: "The medium of communication has changed a lot" }, accept: ["media outlet", "medium", "news medium", "communication medium"], hint: "MAY-oo duh ko-mu-ni-ka-SOWNG. Plural: os meios de comunicação — that plural is how Portuguese says \"the media\". Built on o meio (middle, means) plus a comunicação." },
        { id: "pt-u64l1-ojornalista", type: "vocab", front: "o jornalista", reading: "ojornalista", meaning: "journalist", example: { jp: "O jornalista trabalha para um jornal de Lisboa, mas escreve também para a rádio.", en: "The journalist works for a Lisbon newspaper, but he also writes for the radio." }, drill: { jp: "O jornalista escreve todos os dias", en: "The journalist writes every day" }, accept: ["reporter", "the journalist"], hint: "zhoor-na-LEESH-tuh. One word for both genders — o jornalista / a jornalista, only the article moves. Same family as o jornal (u19): the paper, then the person who fills it." },
        { id: "pt-u64l1-oartigo", type: "vocab", front: "o artigo", reading: "oartigo", meaning: "article", example: { jp: "Li o artigo ontem à noite, por isso já sei o que aconteceu na cidade.", en: "I read the article last night, so I already know what happened in the city." }, drill: { jp: "O artigo do jornal é bom", en: "The newspaper article is good" }, accept: ["piece", "the article", "news article"], hint: "ar-TEE-gu. Also the grammatical article (o, a, um, uma) — same word, and in a grammar lesson that is what it means." },
        { id: "pt-u64l1-amanchete", type: "vocab", front: "a manchete", reading: "amanchete", meaning: "headline", example: { jp: "A manchete de hoje fala de dinheiro, mas o artigo não explica quase nada.", en: "Today's headline is about money, but the article explains almost nothing." }, drill: { jp: "A manchete de hoje é grande", en: "Today's headline is big" }, accept: ["the headline", "front-page headline"], hint: "man-SHEH-tuh. The BIG front-page one. A small heading inside the paper is o título — the two are not interchangeable in a newsroom." },
        { id: "pt-u64l1-publicar", type: "vocab", front: "publicar", reading: "publicar", meaning: "to publish", example: { jp: "O jornal vai publicar o artigo amanhã, além disso vai enviar a notícia a todos os leitores.", en: "The newspaper is going to publish the article tomorrow; in addition it will send the news to all its readers." }, drill: { jp: "O jornal vai publicar o artigo", en: "The newspaper is going to publish the article" }, accept: ["publish", "to put out", "to run"], hint: "pu-bli-KAR. Regular -ar verb. Used for a paper, a book and a photo online alike; for putting something on social media Portugal also says pôr or partilhar (u33)." },
        { id: "pt-u64l1-oleitor", type: "vocab", front: "o leitor", reading: "oleitor", meaning: "reader", example: { jp: "O leitor do jornal quer notícias simples, no entanto os artigos grandes explicam tudo muito melhor.", en: "The newspaper reader wants simple news; long articles, however, explain everything much better." }, drill: { jp: "O leitor quer notícias simples", en: "The reader wants simple news" }, accept: ["the reader"], hint: "lay-TOR; feminine a leitora. From ler (u17). Careful: o leitor de DVD is the DVD *player* — the same noun does the machine that reads, too." },
      ],
    },
    // Lesson 2: broadcast — how something reaches an audience, and what an
    // audience is. The A1/A2 corpus has the SETS (a televisão u19) and none of
    // the transmission.
    {
      id: "pt-u64l2",
      unit: 64,
      lesson: 2,
      title: "A televisão e a rádio",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what is on, on which channel, and whether it is live — and talk about who is watching.",
      items: [
        { id: "pt-u64l2-ocanal", type: "vocab", front: "o canal", reading: "ocanal", meaning: "channel", example: { jp: "Mudei de canal porque a emissão era muito aborrecida, mas o jogo já tinha começado no outro canal.", en: "I changed the channel because the broadcast was very boring, but the match had already started on the other channel." }, drill: { jp: "Mudei o canal da televisão", en: "I changed the television channel" }, accept: ["the channel", "TV channel", "station"], hint: "ka-NAL; plural os canais, like all -al nouns (o hospital / os hospitais). Also a canal of water — context separates them." },
        { id: "pt-u64l2-aradio", type: "vocab", front: "a rádio", reading: "aradio", meaning: "radio", example: { jp: "Ouço a rádio no carro todas as manhãs, por isso conheço as notícias antes de chegar ao trabalho.", en: "I listen to the radio in the car every morning, so I know the news before I get to work." }, drill: { jp: "Ouço a rádio no carro", en: "I listen to the radio in the car" }, accept: ["the radio", "radio station"], hint: "RAH-dyu. Feminine for the medium and the station — a rádio. O rádio, masculine, is the physical set in older usage; the station is always a." },
        { id: "pt-u64l2-aemissao", type: "vocab", front: "a emissão", reading: "aemissao", meaning: "broadcast", example: { jp: "A emissão começa às oito, mas o jornalista chega sempre mais cedo.", en: "The broadcast starts at eight, but the journalist always arrives earlier." }, drill: { jp: "A emissão começa às oito", en: "The broadcast starts at eight" }, accept: ["the broadcast", "programme", "transmission"], hint: "e-mi-SOWNG; plural as emissões. Nasal -ão → -ões, the pattern from a lição / as lições. The verb is emitir, and transmitir (next card) covers the same ground in everyday speech." },
        { id: "pt-u64l2-transmitir", type: "vocab", front: "transmitir", reading: "transmitir", meaning: "to broadcast", example: { jp: "O canal vai transmitir o jogo hoje à noite, no entanto a rádio começa uma hora antes.", en: "The channel is going to broadcast the match tonight; the radio, however, starts an hour earlier." }, drill: { jp: "O canal vai transmitir o jogo", en: "The channel is going to broadcast the match" }, accept: ["broadcast", "to air", "to transmit"], hint: "trãz-mi-TEER. Regular -ir verb. Used for matches, concerts and news alike; for a disease it also means to pass on, which is the same idea of sending something onward." },
        { id: "pt-u64l2-odireto", type: "vocab", front: "o direto", reading: "odireto", meaning: "live broadcast", example: { jp: "O canal transmitiu o jogo em direto, por isso as pessoas viram tudo na hora.", en: "The channel broadcast the match live, so people saw everything as it happened." }, drill: { jp: "O direto da rádio começa agora", en: "The radio live broadcast starts now" }, accept: ["live", "the live broadcast", "live coverage"], hint: "dee-REH-tu. Portugal says em direto; Brazil says ao vivo — this is one of the clearest pt-PT / pt-BR splits in media language. The adjective direto also just means direct." },
        { id: "pt-u64l2-aaudiencia", type: "vocab", front: "a audiência", reading: "aaudiencia", meaning: "audience", example: { jp: "A audiência da emissão é grande porque o jornalista explica tudo de maneira simples.", en: "The broadcast's audience is big because the journalist explains everything in a simple way." }, drill: { jp: "A audiência da emissão é grande", en: "The broadcast's audience is big" }, accept: ["the audience", "viewers", "ratings"], hint: "aw-dee-EN-syuh. The people watching or listening, and also the ratings number itself (\"as audiências\"). The crowd inside a theatre is o público (u35) — that one you can see." },
      ],
    },
    // Lesson 3: film and series — the craft words. u19 owns o filme and ver;
    // u35 owns the theatre and a personagem. This lesson is what is behind them.
    {
      id: "pt-u64l3",
      unit: 64,
      lesson: 3,
      title: "O cinema",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a film or a series in more than one word — who made it, how it is written, how it is followed, and what happens in it.",
      items: [
        { id: "pt-u64l3-orealizador", type: "vocab", front: "o realizador", reading: "orealizador", meaning: "film director", example: { jp: "Este realizador é português, no entanto os filmes são conhecidos em toda a Europa.", en: "This director is Portuguese; the films, however, are known all over Europe." }, drill: { jp: "O realizador é português", en: "The director is Portuguese" }, accept: ["the director", "director"], hint: "rree-uh-li-zuh-DOR; feminine a realizadora. This is the pt-PT word — Brazil says o diretor, and a diretor of a film in Lisbon sounds imported. The director of a company is o diretor in both." },
        { id: "pt-u64l3-oguiao", type: "vocab", front: "o guião", reading: "oguiao", meaning: "script", example: { jp: "O guião é bom, no entanto o realizador mudou quase tudo antes da estreia.", en: "The script is good; the director, however, changed almost everything before the premiere." }, drill: { jp: "O guião do filme é bom", en: "The film's script is good" }, accept: ["the script", "screenplay"], hint: "ghee-OWNG; plural os guiões. pt-PT only — Brazil says o roteiro, which in Portugal is an itinerary instead. From guiar, to guide: the paper that guides the shoot." },
        { id: "pt-u64l3-alegenda", type: "vocab", front: "a legenda", reading: "alegenda", meaning: "subtitle", example: { jp: "Em Portugal os filmes ficam sempre em inglês, por isso as pessoas aprendem a ler a legenda depressa.", en: "In Portugal films always stay in English, so people learn to read the subtitle quickly." }, drill: { jp: "As pessoas leem a legenda depressa", en: "People read the subtitle quickly" }, accept: ["the subtitle", "caption"], hint: "luh-ZHEN-duh. Usually plural in practice — as legendas. Also the caption under a photo, and the legend on a map. Portugal subtitles rather than dubs, which is why this word is everyday here and technical elsewhere." },
        { id: "pt-u64l3-aestreia", type: "vocab", front: "a estreia", reading: "aestreia", meaning: "premiere", example: { jp: "A estreia é na sexta-feira à noite, além disso o realizador vai estar na sala.", en: "The premiere is on Friday night; in addition, the director will be in the room." }, drill: { jp: "A estreia é na sexta-feira", en: "The premiere is on Friday" }, accept: ["the premiere", "opening", "first showing", "debut"], hint: "shtray-uh. The verb is estrear — to open, to premiere, and also to use something for the very first time: estreei os sapatos hoje." },
        { id: "pt-u64l3-oenredo", type: "vocab", front: "o enredo", reading: "oenredo", meaning: "plot", example: { jp: "O enredo do filme é simples, mas as personagens são muito boas.", en: "The film's plot is simple, but the characters are very good." }, drill: { jp: "O enredo do filme é simples", en: "The film's plot is simple" }, accept: ["the plot", "storyline", "story"], hint: "en-RRAY-du. The events and how they are arranged — a história (u48) is the story as told, o enredo is the machinery underneath it." },
        { id: "pt-u64l3-oepisodio", type: "vocab", front: "o episódio", reading: "oepisodio", meaning: "episode", example: { jp: "Vi o episódio de ontem à noite, por isso já sei como a história acaba.", en: "I watched last night's episode, so I already know how the story ends." }, drill: { jp: "Vi o episódio de ontem", en: "I watched yesterday's episode" }, accept: ["the episode", "instalment"], hint: "e-pee-ZOH-dyu. Stress on the ó, which is why it carries the accent. A série is the whole run; o episódio is one evening of it." },
      ],
    },
    // Lesson 4: what media DOES — the opinion layer. This is the B1 altitude of
    // the unit and the reason it is not a vocabulary list about screens.
    {
      id: "pt-u64l4",
      unit: 64,
      lesson: 4,
      title: "A opinião pública",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about how information travels and what it does — advertising, rumour, influence, and saying what you think of something publicly.",
      items: [
        { id: "pt-u64l4-apublicidade", type: "vocab", front: "a publicidade", reading: "apublicidade", meaning: "advertising", example: { jp: "A publicidade paga quase tudo na televisão, por isso os canais precisam de audiências grandes.", en: "Advertising pays for almost everything on television, so the channels need big audiences." }, drill: { jp: "A publicidade paga a emissão", en: "Advertising pays for the broadcast" }, accept: ["advertising", "the advertising", "publicity", "ads"], hint: "pu-bli-si-DAH-duh. Uncountable, like the English — the whole business of it. One single ad is o anúncio, the next card. Same family as publicar." },
        { id: "pt-u64l4-oanuncio", type: "vocab", front: "o anúncio", reading: "oanuncio", meaning: "advertisement", example: { jp: "O anúncio chega antes do filme, mas ninguém está a ver naquele momento.", en: "The advertisement comes before the film, but nobody is watching at that moment." }, drill: { jp: "O anúncio chega antes do filme", en: "The advert comes before the film" }, accept: ["the advert", "advert", "ad", "announcement"], hint: "uh-NOON-syu. One ad. Also a classified listing and, more widely, any announcement — o anúncio do governo. The verb is anunciar." },
        { id: "pt-u64l4-divulgar", type: "vocab", front: "divulgar", reading: "divulgar", meaning: "to spread news of", example: { jp: "O governo vai divulgar os resultados amanhã, no entanto os jornalistas já sabem quase tudo.", en: "The government is going to release the results tomorrow; the journalists, however, already know almost everything." }, drill: { jp: "O governo vai divulgar os resultados", en: "The government is going to release the results" }, accept: ["to release", "to make public", "to disclose", "spread"], hint: "dee-vool-GAR. To put something into public circulation — results, figures, a name. Publicar is to put it out as a text; divulgar is to let it become known." },
        { id: "pt-u64l4-oboato", type: "vocab", front: "o boato", reading: "oboato", meaning: "rumour", example: { jp: "O boato correu depressa na internet, mas o jornal explicou que não era verdade.", en: "The rumour spread quickly on the internet, but the newspaper explained that it was not true." }, drill: { jp: "O boato correu depressa", en: "The rumour spread quickly" }, accept: ["rumour", "rumor", "the rumour", "hearsay"], hint: "BWAH-tu. Boatos correm — rumours run, they don't spread, in Portuguese. Neutral word; it does not by itself say the thing is untrue, only that nobody has confirmed it." },
        { id: "pt-u64l4-influenciar", type: "vocab", front: "influenciar", reading: "influenciar", meaning: "to influence", example: { jp: "A publicidade influencia as pessoas mais do que elas acham, por isso as empresas pagam tanto dinheiro pelos anúncios.", en: "Advertising influences people more than they think, which is why companies pay so much money for adverts." }, drill: { jp: "A publicidade vai influenciar as pessoas", en: "Advertising is going to influence people" }, accept: ["influence", "to affect", "to sway"], hint: "in-flu-en-see-AR. Takes a direct object with no preposition: influenciar alguém, never influenciar em alguém. The noun is a influência." },
        { id: "pt-u64l4-acritica", type: "vocab", front: "a crítica", reading: "acritica", meaning: "review", example: { jp: "A crítica do filme foi má, no entanto a sala esteve cheia toda a semana.", en: "The film's review was bad; the cinema, however, was full all week." }, drill: { jp: "A crítica do filme foi má", en: "The film's review was bad" }, accept: ["the review", "criticism", "critique"], hint: "KREE-tee-kuh. Two senses in one word: the written review of a film or book, and criticism in general. The verb criticar is already yours from u39; this is the noun it produces." },
      ],
    },
  ],
};
