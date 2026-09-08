// PT Unit 33 — A tecnologia e a comunicação ("Technology and communication") — A2
// ─────────────────────────────────────────────────────────────────────────────
// THE DENSEST pt-PT/pt-BR DIVERGENCE IN THE WHOLE BAND. Computing vocabulary is
// where the two Portugueses agree least, because each side borrowed or coined
// separately. Every card in Lessons 1-3 that splits is flagged in its own hint:
//   o ficheiro / BR o arquivo        a palavra-passe / BR a senha
//   o utilizador / BR o usuário      descarregar / BR baixar
//   o portátil  / BR o notebook      a aplicação / BR o aplicativo
//   partilhar   / BR compartilhar    o ecrã (u18) / BR a tela
//   o telemóvel (u18) / BR o celular
// A learner who takes the Brazilian set into a Lisbon shop will be understood and
// instantly placed; a learner who reads "guarde o ficheiro" on a Portuguese screen
// and expects "arquivo" will not find the button.
//
// A1 already owns o computador, o ecrã, o telemóvel, a mensagem, ligar and
// desligar (u18), so none of those are re-taught — they are used in examples.
// `o rato` is A1 u1l4 and already carries the mouse sense in its hint.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT33 = {
  id: "pt-u33",
  lang: "pt",
  title: "A tecnologia e a comunicação",
  order: 33,
  stage: "a2",
  lessons: [
    {
      id: "pt-u33l1",
      unit: 33,
      lesson: 1,
      title: "O computador",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the parts of a computer and say what you are doing with a file, using the words a Portuguese screen actually shows you.",
      items: [
        { id: "pt-u33l1-oportatil", type: "vocab", front: "o portátil", reading: "oportatil", meaning: "laptop", example: { jp: "O portátil é mais caro este ano, mas trabalho melhor com ele do que com o telemóvel.", en: "The laptop is more expensive this year, but I work better with it than with the phone." }, drill: { jp: "O portátil é mais caro este ano", en: "The laptop is more expensive this year" }, accept: ["portable", "notebook", "the laptop"], hint: "PORTUGAL SAYS PORTÁTIL. Brazil says o notebook. It is just the adjective \"portable\" used as a noun — um computador portátil, shortened. por-TA-til; plural portáteis, with the -l to -eis swap from Unit 8's azul." },
        { id: "pt-u33l1-oteclado", type: "vocab", front: "o teclado", reading: "oteclado", meaning: "keyboard", example: { jp: "O teclado do portátil está sujo porque estou sempre a comer à frente do computador.", en: "The laptop keyboard is dirty because I am always eating in front of the computer." }, drill: { jp: "O teclado do portátil está sujo", en: "The laptop keyboard is dirty" }, accept: ["the keyboard", "keypad"], hint: "te-KLA-du, from a tecla, a key. A Portuguese keyboard gives ç its own key, so you never need a dead-key trick for it — the accented vowels are the ones that sit on the dead keys beside it." },
        { id: "pt-u33l1-aimpressora", type: "vocab", front: "a impressora", reading: "aimpressora", meaning: "printer", example: { jp: "A impressora da escola não funciona há uma semana e a secretária já reclamou.", en: "The school printer hasn't worked for a week and the secretary has already complained." }, drill: { jp: "A impressora da escola não funciona", en: "The school printer doesn't work" }, accept: ["the printer"], hint: "eem-pre-SO-ra. Built on imprimir, the next card, the same way a máquina de lavar in u30 is built on lavar. Same root as a imprensa, the press, from Unit 32 — printing is what they share." },
        { id: "pt-u33l1-imprimir", type: "vocab", front: "imprimir", reading: "imprimir", meaning: "to print", example: { jp: "Vou imprimir o bilhete agora, porque no aeroporto a impressora está sempre ocupada.", en: "I'm going to print the ticket now, because at the airport the printer is always busy." }, drill: { jp: "Vou imprimir o bilhete agora", en: "I'm going to print the ticket now" }, accept: ["print", "to print out"], hint: "eem-pri-MEER, regular -ir like abrir from Unit 13: imprimo, imprimes, imprime. Its past participle is irregular and worth knowing — impresso, not \"imprimido\"." },
        { id: "pt-u33l1-oficheiro", type: "vocab", front: "o ficheiro", reading: "oficheiro", meaning: "file", example: { jp: "O ficheiro está no computador do escritório, por isso não o posso enviar agora.", en: "The file is on the office computer, so I can't send it now." }, drill: { jp: "O ficheiro está no computador", en: "The file is on the computer" }, accept: ["the file", "document"], hint: "PORTUGAL SAYS FICHEIRO. Brazil says o arquivo — and in Portugal um arquivo is a physical archive, the place old papers go. fi-SHAY-ru, with the ch as \"sh\" from a chuva. This single word will tell you which Portuguese a piece of software was translated into." },
        { id: "pt-u33l1-guardar", type: "vocab", front: "guardar", reading: "guardar", meaning: "to save", example: { jp: "Guardar o ficheiro antes de desligar o computador é uma coisa que se aprende uma vez.", en: "Saving the file before turning off the computer is something you learn once." }, drill: { jp: "Guardar o ficheiro é muito importante", en: "Saving the file is very important" }, accept: ["save", "to keep", "to put away", "to store"], hint: "gwar-DAR — the u is pronounced here, unlike in guitarra. Three jobs: save a file, keep something, and put it away — guarda os brinquedos. Portugal's Save button says GUARDAR; Brazil's says SALVAR." },
      ],
    },
    {
      id: "pt-u33l2",
      unit: 33,
      lesson: 2,
      title: "Na internet",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Get online in Portuguese — log in, enter a password, and understand what a Portuguese site is asking you for.",
      items: [
        { id: "pt-u33l2-ainternet", type: "vocab", front: "a internet", reading: "ainternet", meaning: "the internet", example: { jp: "A internet do hotel não funciona bem, mas na receção acham que é normal.", en: "The hotel internet doesn't work well, but at reception they think it is normal." }, drill: { jp: "A internet do hotel não funciona", en: "The hotel internet doesn't work" }, accept: ["internet", "the net", "wifi"], hint: "een-ter-NET, and FEMININE — a internet, even though it is a borrowed English word with no Portuguese ending to go on. Portuguese assigns gender to loanwords by feel, and this one landed feminine on both sides of the Atlantic." },
        { id: "pt-u33l2-arede", type: "vocab", front: "a rede", reading: "arede", meaning: "network", example: { jp: "A rede da escola é rápida, mas os estudantes apenas a podem usar nas aulas.", en: "The school network is fast, but the students can only use it in class." }, drill: { jp: "A rede da escola é rápida", en: "The school network is fast" }, accept: ["the network", "net", "web"], hint: "RRE-de, strong initial r. Originally a fishing net, and it still means that — Portugal is a fishing country and the word never left. As redes sociais are social networks; a rede is also the wifi you connect to." },
        { id: "pt-u33l2-outilizador", type: "vocab", front: "o utilizador", reading: "outilizador", meaning: "user", example: { jp: "O utilizador escreve a palavra-passe e o site abre, se a rede estiver a funcionar.", en: "The user types the password and the site opens, if the network is working." }, drill: { jp: "O utilizador escreve a palavra-passe", en: "The user types the password" }, accept: ["the user", "username"], hint: "PORTUGAL SAYS UTILIZADOR. Brazil says o usuário. From utilizar, to use. Feminine a utilizadora. On a Portuguese login screen the two boxes are labelled Utilizador and Palavra-passe — learn them as a pair, because you will meet them together." },
        { id: "pt-u33l2-apalavrapasse", type: "vocab", front: "a palavra-passe", reading: "apalavrapasse", meaning: "password", example: { jp: "A palavra-passe é muito difícil e por isso escrevi-a num papel, o que não devia ter feito.", en: "The password is very difficult and so I wrote it on a piece of paper, which I shouldn't have done." }, drill: { jp: "A palavra-passe é muito difícil", en: "The password is very difficult" }, accept: ["the password", "passcode"], hint: "PORTUGAL SAYS PALAVRA-PASSE, with the hyphen. Brazil says a senha — which in Portugal is the numbered ticket you take at the bakery counter, so asking for someone's senha in Lisbon asks their queue number. Plural as palavras-passe: only the first half pluralises." },
        { id: "pt-u33l2-navegar", type: "vocab", front: "navegar", reading: "navegar", meaning: "to browse", example: { jp: "Navegar na internet à noite é o passatempo do Tiago, porque já não vê televisão.", en: "Browsing the internet at night is Tiago's pastime, because he no longer watches television." }, drill: { jp: "Navegar na internet é muito fácil", en: "Browsing the internet is very easy" }, accept: ["browse", "to sail", "to navigate", "to surf"], hint: "na-ve-GAR. It still means to sail, which in Portugal is not a dead metaphor — o navegador is both a web browser and a navigator of the Age of Discoveries. Navegar na internet, with na, not \"em a\"." },
        { id: "pt-u33l2-osite", type: "vocab", front: "o site", reading: "osite", meaning: "website", example: { jp: "O site do banco não abre no telemóvel, apenas no computador.", en: "The bank's website doesn't open on the phone, only on the computer." }, drill: { jp: "O site do banco não abre", en: "The bank's website doesn't open" }, accept: ["the website", "web site", "page"], hint: "Said the English way, SITE, and masculine. Portugal also writes o sítio, which is the native word and means a place — you will see both, and o sítio da internet on more formal pages. Do not confuse with a página, a single page." },
      ],
    },
    {
      id: "pt-u33l3",
      unit: 33,
      lesson: 3,
      title: "As aplicações",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Install, update and delete an app, and say whether something is working — the four verbs a Portuguese phone will ask you about.",
      items: [
        { id: "pt-u33l3-aaplicacao", type: "vocab", front: "a aplicação", reading: "aaplicacao", meaning: "app", example: { jp: "A aplicação do banco é boa, mas pede a palavra-passe outra vez em cada compra.", en: "The bank's app is good, but it asks for the password again on every purchase." }, drill: { jp: "A aplicação do banco é boa", en: "The bank's app is good" }, accept: ["application", "the app", "program"], hint: "PORTUGAL SAYS APLICAÇÃO. Brazil says o aplicativo, and shortens it to app — Portugal shortens it to a app too, in speech. Another -ção noun, so feminine: plural as aplicações." },
        { id: "pt-u33l3-descarregar", type: "vocab", front: "descarregar", reading: "descarregar", meaning: "to download", example: { jp: "Descarregar a aplicação é rápido, mas instalar demora bastante mais.", en: "Downloading the app is quick, but installing takes considerably longer." }, drill: { jp: "Descarregar a aplicação é muito rápido", en: "Downloading the app is very quick" }, accept: ["download", "to unload", "to discharge"], hint: "PORTUGAL SAYS DESCARREGAR. Brazil says baixar. Literally to un-load — the des- prefix reversing carregar, exactly as it reverses cansar to give descansar in Unit 11. Carregar itself means both to load and to charge a battery." },
        { id: "pt-u33l3-instalar", type: "vocab", front: "instalar", reading: "instalar", meaning: "to install", example: { jp: "Instalar a aplicação é fácil; o difícil é lembrar a palavra-passe depois.", en: "Installing the app is easy; the hard part is remembering the password afterwards." }, drill: { jp: "Instalar a aplicação é muito fácil", en: "Installing the app is very easy" }, accept: ["install", "to set up", "to fit"], hint: "eensh-ta-LAR, regular -ar. Same word for software and for a boiler — instalar o esquentador. Its opposite here is desinstalar, with the same des- prefix." },
        { id: "pt-u33l3-apagar", type: "vocab", front: "apagar", reading: "apagar", meaning: "to delete", example: { jp: "Apagar a foto foi um problema, porque não havia outra cópia no computador.", en: "Deleting the photo was a problem, because there was no other copy on the computer." }, drill: { jp: "Apagar a foto foi um problema", en: "Deleting the photo was a problem" }, accept: ["delete", "to erase", "to switch off", "to put out"], hint: "a-pa-GAR. THREE jobs, and they all come from one idea — to put out: apagar um ficheiro, apagar a luz, apagar um fogo. The opposite for the light is acender. To rub something out you reach instead for a borracha, A1 u17 — an unrelated word." },
        { id: "pt-u33l3-aatualizacao", type: "vocab", front: "a atualização", reading: "aatualizacao", meaning: "update", example: { jp: "A atualização demora muito tempo, por isso é melhor fazê-la à noite.", en: "The update takes a long time, so it is better to do it at night." }, drill: { jp: "A atualização demora muito tempo", en: "The update takes a long time" }, accept: ["the update", "upgrade", "updating"], hint: "a-twa-li-za-SAWNG. Note the POST-1990 SPELLING: atualização, with no c before the t. Portugal wrote actualização until the accord, and older software still shows the old form — both are the same word." },
        { id: "pt-u33l3-funcionar", type: "vocab", front: "funcionar", reading: "funcionar", meaning: "to work", example: { jp: "Funcionar sem internet é difícil para uma aplicação de banco.", en: "Working without the internet is difficult for a banking app." }, drill: { jp: "Funcionar sem internet é muito difícil", en: "Working without the internet is very difficult" }, accept: ["work", "to function", "to run", "to operate"], hint: "fun-si-u-NAR. THIS is the verb for a machine working — não funciona is what you say about a broken lift, a dead printer or a website that will not load. A PERSON working is trabalhar, from Unit 13; never mix them up." },
      ],
    },
    {
      id: "pt-u33l4",
      unit: 33,
      lesson: 4,
      title: "Falar à distância",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Take a call, send an email and share a photo — the everyday half of communication, in the European words.",
      items: [
        { id: "pt-u33l4-achamada", type: "vocab", front: "a chamada", reading: "achamada", meaning: "call", example: { jp: "A chamada do médico foi importante, mas eu estava no comboio e não ouvi nada.", en: "The doctor's call was important, but I was on the train and didn't hear anything." }, drill: { jp: "A chamada do médico foi importante", en: "The doctor's call was important" }, accept: ["phone call", "the call", "ring"], hint: "sha-MA-da, from chamar — the same verb inside chamo-me from Unit 3. Fazer uma chamada is to make a call; uma chamada perdida is a missed one. In a text, uma chamada is also a footnote." },
        { id: "pt-u33l4-atender", type: "vocab", front: "atender", reading: "atender", meaning: "to answer", example: { jp: "Atender o telemóvel na aula é mal-educado, e o professor fica sempre zangado.", en: "Answering the phone in class is rude, and the teacher always gets angry." }, drill: { jp: "Atender o telemóvel na aula é mal-educado", en: "Answering the phone in class is rude" }, accept: ["answer", "to pick up", "to serve", "to attend to"], hint: "a-ten-DER, regular -er. Specifically to answer a PHONE or to serve a customer — quem atende? in a shop means \"who's serving?\". Answering a QUESTION is responder. FALSE FRIEND for English: it does not mean to attend, which is assistir a or ir a." },
        { id: "pt-u33l4-oemail", type: "vocab", front: "o email", reading: "oemail", meaning: "email", example: { jp: "O email do professor chegou ontem à noite e a turma ainda não o leu.", en: "The teacher's email arrived last night and the class still hasn't read it." }, drill: { jp: "O email do professor chegou ontem", en: "The teacher's email arrived yesterday" }, accept: ["e-mail", "the email", "message", "mail"], hint: "Said roughly the English way, and masculine — o email, o e-mail, both spellings live. The formal Portuguese is o correio eletrónico, which appears on official forms and nowhere else. Note eletrónico with the accent Portugal uses; Brazil writes eletrônico." },
        { id: "pt-u33l4-enviar", type: "vocab", front: "enviar", reading: "enviar", meaning: "to send", example: { jp: "Enviar uma foto por email é fácil, mas o ficheiro é grande de mais para o telemóvel.", en: "Sending a photo by email is easy, but the file is too big for the phone." }, drill: { jp: "Enviar uma foto é muito fácil", en: "Sending a photo is very easy" }, accept: ["send", "to dispatch", "to forward"], hint: "en-vi-AR. The everyday alternative is mandar, which is shorter and more common in speech — manda-me uma mensagem. Enviar is what the button says." },
        { id: "pt-u33l4-afoto", type: "vocab", front: "a foto", reading: "afoto", meaning: "photo", example: { jp: "A foto da praia é bonita, mas está escura porque já era quase noite.", en: "The beach photo is beautiful, but it is dark because it was already almost night." }, drill: { jp: "A foto da praia é muito bonita", en: "The beach photo is very beautiful" }, accept: ["picture", "the photo", "photograph", "snap"], hint: "FEMININE, and this catches everyone: a foto, not \"o foto\", because it is short for a fotografia and the gender comes from the long form. The same trick runs through Portuguese abbreviations — a moto from a motocicleta." },
        { id: "pt-u33l4-partilhar", type: "vocab", front: "partilhar", reading: "partilhar", meaning: "to share", example: { jp: "Partilhar a foto na rede foi um erro, porque agora todos sabem onde estivemos.", en: "Sharing the photo on the network was a mistake, because now everyone knows where we were." }, drill: { jp: "Partilhar a foto na rede é fácil", en: "Sharing the photo on the network is easy" }, accept: ["share", "to divide", "to split"], hint: "PORTUGAL SAYS PARTILHAR. Brazil says compartilhar. par-ti-LYAR, with the lh. It covers sharing a post AND sharing a flat — partilhar a casa com alguém — where English needs two different senses of one word too." },
      ],
    },
  ],
};
