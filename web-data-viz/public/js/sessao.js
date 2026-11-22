// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // Remover explicitamente as chaves relacionadas à sessão do usuário
    // em vez de usar sessionStorage.clear(), para evitar apagar outros
    // dados que possam ser úteis para a aplicação.
    sessionStorage.removeItem("usuario_autenticado"); // flag de autenticação
    sessionStorage.removeItem("EMAIL_USUARIO"); // email salvo na sessão
    sessionStorage.removeItem("NOME_USUARIO"); // nome do usuário
    sessionStorage.removeItem("ID_USUARIO"); // id do usuário

    // redireciona para a tela de login
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

var conteudosKanto = {
lore: {
    titulo: "Pokémon Red, Blue & Yellow",
    texto: `
        <p><strong>A partida de Pallet Town:</strong> A aventura começa quando o jogador sai de <strong>Pallet Town</strong>, recebe seu primeiro Pokémon (<strong>Bulbasaur</strong>, <strong>Charmander</strong> ou <strong>Squirtle</strong> — ou <strong>Pikachu</strong> em <em>Yellow</em>) do <strong>Professor Carvalho</strong> e assume a missão de completar a <strong>Pokédex</strong>, sempre disputando espaço com seu rival <strong>Blue</strong>.</p>
        <p><strong>Ginásios, cidades e ciência:</strong> Ao percorrer uma Kanto marcada por centros urbanos e avanços científicos, o protagonista conquista as <strong>oito insígnias</strong> e passa por marcos como a <strong>Torre Pokémon de Lavender</strong>, o <strong>S.S. Anne</strong> e a <strong>Ilha Cinnabar</strong> — onde registros revelam a criação genética de <strong>Mewtwo</strong> a partir de <strong>Mew</strong>.</p>
        <p><strong>O confronto contra a Equipe Rocket:</strong> No trajeto, o jogador desmantela as operações da <strong>Equipe Rocket</strong>, invadindo seu esconderijo em Celadon, libertando a <strong>Silph Co.</strong> em Saffron e derrotando o chefe <strong>Giovanni</strong>, que se revela o líder do Ginásio de Viridian antes de dissolver a organização.</p>
        <p><strong>O Planalto Índigo e o desafio final:</strong> Após superar a <strong>Elite dos Quatro</strong> no <strong>Planalto Índigo</strong>, o protagonista descobre que <strong>Blue</strong> acabou de se tornar Campeão, travando o duelo final pelo título de Kanto — além de abrir caminho para enfrentar o lendário <strong>Mewtwo</strong> na <em>Cerulean Cave</em>.</p>
    `
},
    Anime: {
        titulo: "A Jornada de Ash em Kanto",
        texto: `
        <p><b>O começo conturbado em Pallet:</b> A história começa quando Ash acorda atrasado e recebe o teimoso <b>Pikachu</b> do <b>Professor Carvalho</b>, iniciando uma viagem marcada por imprevistos — como o ataque de um bando de Spearow logo no primeiro dia — até conquistar a confiança de Pikachu e avistar <b>Ho-Oh</b> no horizonte.</p>
        <p><b>Parceiros, ginásios e a Equipe Rocket:</b> Ao avançar por Kanto, Ash forma parceria com <b>Misty</b> e <b>Brock</b>, monta seu núcleo clássico com <b>Bulbasaur</b>, <b>Charmander</b> e <b>Squirtle</b> e disputa os <b>oito ginásios</b>, enquanto atrapalha repetidamente <b>Jessie, James e Meowth</b>, ligados à <b>Equipe Rocket</b> comandada por <b>Giovanni</b>.</p>
        <p><b>A Liga Indigo e o próximo passo:</b> Na <b>Liga Indigo</b>, Ash mostra garra e criatividade em batalhas exigentes até sua eliminação contra <b>Ritchie</b>, encerrando essa primeira etapa com mais maturidade para seguir rumo às <b>Ilhas Laranja</b> e, em seguida, para <b>Johto</b>.</p>
    `
    },
    Iniciais: {
        titulo: "A Escolha Mais Dificil de um Treinador",
        texto: `<p><img src="./assets/imgs/iniciais/bulbasaur.png" width="150" height="120" alt="Chikorita"><img src="./assets/imgs/iniciais/ivysaur.png" width="150" height="120" alt="Bayleef "><img src="./assets/imgs/iniciais/venusaur.png" width="150" height="120" alt="Meganium "></p>
        <p><img src="./assets/imgs/iniciais/charmander.png" width="150" height="120" alt="Cyndaquil "><img src="./assets/imgs/iniciais/charmeleon.png" width="150" height="120" alt="Quilava "><img src="./assets/imgs/iniciais/charizard.png" width="150" height="120" alt="Typhlosion "></p>
        <p><img src="./assets/imgs/iniciais/squirtle.png" width="150" height="120" alt="Totodile "><img src="./assets/imgs/iniciais/wartotle.png" width="150" height="120" alt="Croconaw "><img src="./assets/imgs/iniciais/blastoise.png" width="150" height="120" alt="Feraligatr "></p>`
    },
    lendarios: {
         titulo: "Os Lendários de Kanto",
        texto: `<p><img src="./assets/imgs/iniciais/144.png" width="150" height="150" alt="Chikorita"><img src="./assets/imgs/iniciais/145.png" width="150" height="150" alt="Bayleef "><img src="./assets/imgs/iniciais/146.png" width="150" height="150" alt="Meganium "></p>
        <p><img src="./assets/imgs/iniciais/150.png" width="150" height="150" alt="Cyndaquil "><img src="./assets/imgs/iniciais/151.png" width="150" height="150" alt="Quilava "></p>`    }
}

var conteudosJohto = {
    lore: {
        titulo: "HeartGold e SoulSilver",
        texto: "<p><b>O início em New Bark Town:</b> Três anos após os acontecimentos de Kanto, o jogador recebe seu primeiro Pokémon do Professor Elm — especialista em ovos e reprodução Pokémon — e parte para explorar Johto, enquanto um misterioso rival rouba um dos iniciais do laboratório e inicia uma jornada guiada apenas pela busca por força bruta.</p><p><b>Entre ginásios e lendas antigas:</b> Ao percorrer as cidades tradicionais da região em busca das oito insígnias, o protagonista mergulha na mitologia local das torres de Ecruteak City, onde o incêndio da antiga Torre de Latão levou <span style=\"color: #FF0000 ; font-weight: bold;\">Ho-Oh</span> a ressuscitar três Pokémon caídos — dando origem às Feras Lendárias <span style=\"color: #F5C736 ; font-weight: bold;\">Raikou</span>, <span  style=\"color: #9C5A3C; font-weight: bold;\">Entei</span> e <span style=\"color: #6DBBC4 ; font-weight: bold;\">Suicune</span> — e afastou <span style=\"color: #C6CDD4 ; font-weight: bold;\">Lugia</span> para as profundezas dos mares.</p><p><b>O retorno da Equipe Rocket:</b> No meio do caminho, o jogador precisa frustrar os planos dos remanescentes da Equipe Rocket, que tentam se reerguer e chamar a atenção de Giovanni por meio de ações como a invasão à Torre de Rádio de Goldenrod e experimentos com ondas de rádio no Lake of Rage, evento que força a evolução de um Gyarados Vermelho.</p><p><b>A conquista das duas regiões:</b> Após derrotar a Elite dos Quatro no Planalto Índigo, a jornada continua além da fronteira: o protagonista embarca rumo a Kanto três anos depois, desafia os ginásios da região vizinha e encerra sua aventura no topo do Mt. Silver, enfrentando o lendário treinador Red.</p>"

    },
    Anime: {
        titulo: "A Jornada de Ash em Johto",
        texto: `
        <p><b>Um novo começo ao lado de velhos amigos:</b> Após a Liga Laranja, Ash segue rumo a Johto acompanhado de <b>Misty</b> e <b>Brock</b>, formando uma nova equipe com Pokémon nativos da região — como <b>Chikorita (Bayleef)</b>, <b>Cyndaquil</b>, <b>Totodile</b> e <b>Noctowl</b>.</p>
        <p><b>Oito insígnias e tradições antigas:</b> Ao atravessar as cidades históricas em busca das <b>oito insígnias</b> para a Conferência de Prata, o grupo vivencia as lendas locais, passando pelas <b>Ruínas de Alph</b>, pela <b>Torre Sprout</b> e pela história das torres de <b>Ecruteak City</b>.</p>
        <p><b>Encontros lendários e a Equipe Rocket:</b> Além de frustrar os planos de <b>Jessie, James e Meowth</b>, Ash cruza o caminho dos mitos da região — ajudando <b>Lugia</b> nas Ilhas Redemoinho, encontrando <b>Suicune</b>, protegendo <b>Celebi</b> na Floresta Ilex e enfrentando a crise do <b>Gyarados Vermelho</b> no <em>Lake of Rage</em>.</p>
        <p><b>A Conferência de Prata e a despedida:</b> Na Liga Johto, Ash derrota seu maior rival, <b>Gary Carvalho</b>, em uma batalha marcante entre <b>Charizard</b> e <b>Blastoise</b>, antes de cair diante de <b>Harrison</b> e seu Blaziken — encerrando a jornada do trio original e abrindo caminho para Hoenn.</p>
    `
    },
    Iniciais: {
        titulo: "A Escolha Mais Dificil de um Treinador",
        texto: `<p><img src="./assets/imgs/iniciais/chicorita.png" width="150" height="120" alt="Chikorita"><img src="./assets/imgs/iniciais/bayleef.png" width="150" height="120" alt="Bayleef "><img src="./assets/imgs/iniciais/meganium.png" width="150" height="120" alt="Meganium "></p>
        <p><img src="./assets/imgs/iniciais/cyndaquil.png" width="150" height="120" alt="Cyndaquil "><img src="./assets/imgs/iniciais/quilava.png" width="150" height="120" alt="Quilava "><img src="./assets/imgs/iniciais/typlosion.png" width="150" height="120" alt="Typhlosion "></p>
        <p><img src="./assets/imgs/iniciais/totodile.png" width="150" height="120" alt="Totodile "><img src="./assets/imgs/iniciais/croconow.png" width="150" height="120" alt="Croconaw "><img src="./assets/imgs/iniciais/feraligtr.png" width="150" height="120" alt="Feraligatr "></p>`
    },
        lendarios: {
         titulo: "Os Lendários de Johto",
        texto: `<p><img src="./assets/imgs/iniciais/243.png" width="150" height="150" alt="Chikorita"><img src="./assets/imgs/iniciais/244.png" width="150" height="150" alt="Bayleef "><img src="./assets/imgs/iniciais/245.png" width="150" height="150" alt="Meganium "></p>
        <p><img src="./assets/imgs/iniciais/249.png" width="150" height="150" alt="Cyndaquil "><img src="./assets/imgs/iniciais/250.png" width="150" height="150" alt="Quilava "><img src="./assets/imgs/iniciais/251.png" width="150" height="150" alt="Cyndaquil "></p>`  
      }


}

var conteudosHoenn = {
    lore: {
    titulo: "Pokémon Ruby, Sapphire & Emerald",
    texto: `
        <p><strong>Mudança para Littleroot Town:</strong> A jornada começa quando o protagonista se muda de Johto para <strong>Littleroot Town</strong>, salva o <strong>Professor Birch</strong> de um ataque selvagem e escolhe entre <strong>Treecko</strong>, <strong>Torchic</strong> ou <strong>Mudkip</strong>, iniciando uma viagem marcada pelo objetivo de desafiar seu próprio pai, <strong>Norman</strong>, líder do Ginásio de Petalburg.</p>
        <p><strong>Natureza, mares e ecossistemas:</strong> Inspirada na ilha de Kyushu, Hoenn coloca o jogador diante de uma geografia diversa — com vulcões ativos, florestas tropicais, desertos e extensas rotas marítimas — enquanto reúne as <strong>oito insígnias</strong> e descobre as lendas sobre a origem da terra e dos oceanos.</p>
        <p><strong>O conflito entre Equipe Magma e Equipe Aqua:</strong> No centro da trama, o protagonista precisa impedir os planos radicais da <strong>Equipe Magma</strong> (que busca expandir os continentes despertando <strong>Groudon</strong>) e da <strong>Equipe Aqua</strong> (que tenta ampliar os oceanos despertando <strong>Kyogre</strong>), crise climática contida pelo guardião dos céus, <strong>Rayquaza</strong>.</p>
        <p><strong>A Liga de Ever Grande City:</strong> Após restaurar o equilíbrio natural da região, o jogador atravessa a <em>Victory Road</em> rumo à <strong>Liga Pokémon</strong>, enfrentando a Elite dos Quatro e o Campeão (<strong>Steven Stone</strong> ou <strong>Wallace</strong>), além de desbloquear desafios avançados como a <strong>Battle Frontier</strong>.</p>
    `
},
 Anime: {
    titulo: "A Jornada de Ash em Hoenn",
    texto: `
        <p><strong>Recomeço apenas com Pikachu:</strong> Inspirado pela Liga Johto, Ash viaja para Hoenn levando apenas <strong>Pikachu</strong>, decidindo construir do zero uma equipe totalmente nova com Pokémon nativos como <strong>Treecko (Sceptile)</strong>, <strong>Taillow (Swellow)</strong>, <strong>Corphish</strong> e <strong>Torkoal</strong>.</p>
        <p><strong>Novos companheiros e os Concursos Pokémon:</strong> Ao lado da iniciante <strong>May</strong>, de seu irmão <strong>Max</strong> e de <strong>Brock</strong>, Ash disputa os <strong>oito ginásios</strong> enquanto a série apresenta os <strong>Concursos Pokémon</strong>, dividindo o protagonismo entre batalhas de ginásio e torneios de coordenação.</p>
        <p><strong>O confronto entre Titãs e as equipes vilãs:</strong> Durante a travessia pela região, o grupo se envolve na disputa entre as equipes <strong>Magma</strong> e <strong>Aqua</strong>, testemunhando o despertar de <strong>Groudon</strong> e <strong>Kyogre</strong> e a intervenção de <strong>Rayquaza</strong> para evitar a destruição de Hoenn.</p>
        <p><strong>A Liga Ever Grande e a Batalha da Fronteira:</strong> Na <strong>Liga Hoenn</strong>, Ash avança com uma equipe entrosada até cair diante do futuro campeão <strong>Tyson</strong>, seguindo logo depois para o exigente desafio da <strong>Batalha da Fronteira</strong> (<em>Battle Frontier</em>).</p>
    `
},
    Iniciais: {
        titulo: "A Escolha Mais Dificil de um Treinador",
        texto: `<p><img src="./assets/imgs/iniciais/trecko.png" width="150" height="120" alt="Chikorita"><img src="./assets/imgs/iniciais/grovyle.png" width="150" height="120" alt="Bayleef "><img src="./assets/imgs/iniciais/scepitele.png" width="150" height="120" alt="Meganium "></p>
        <p><img src="./assets/imgs/iniciais/torchic.png" width="150" height="120" alt="Cyndaquil "><img src="./assets/imgs/iniciais/combusquen.png" width="150" height="120" alt="Quilava "><img src="./assets/imgs/iniciais/blaziken.png" width="150" height="120" alt="Typhlosion "></p>
        <p><img src="./assets/imgs/iniciais/mudkip.png" width="150" height="120" alt="Totodile "><img src="./assets/imgs/iniciais/marstomp.png" width="150" height="120" alt="Croconaw "><img src="./assets/imgs/iniciais/swampert.png" width="150" height="120" alt="Feraligatr "></p>`
    },
   lendarios: {
         titulo: "Os Lendários de Hoenn",
        texto: `<p><img src="./assets/imgs/iniciais/377.png" width="150" height="150" alt="Chikorita"><img src="./assets/imgs/iniciais/378.png" width="150" height="150" alt="Bayleef "><img src="./assets/imgs/iniciais/379.png" width="150" height="150" alt="Meganium "></p>
        <p><img src="./assets/imgs/iniciais/380.png" width="150" height="150" alt="Cyndaquil "><img src="./assets/imgs/iniciais/381.png" width="150" height="150" alt="Quilava "></p>
        <p><img src="./assets/imgs/iniciais/382.png" width="150" height="150" alt="Cyndaquil "><img src="./assets/imgs/iniciais/383.png" width="150" height="150" alt="Quilava "><img src="./assets/imgs/iniciais/384.png" width="150" height="150" alt="Cyndaquil "></p>
        `  
      }
}

var conteudosSinnoh = {
lore: {
    titulo: "Pokémon Diamond, Pearl & Platinum",
    texto: `
        <p><strong>O chamado no Lago Verity:</strong> A aventura começa em <strong>Twinleaf Town</strong>, quando o protagonista e seu amigo <strong>Barry</strong> investigam o <strong>Lake Verity</strong>, encontram a maleta do <strong>Professor Rowan</strong> e escolhem entre <strong>Turtwig</strong>, <strong>Chimchar</strong> ou <strong>Piplup</strong> para iniciar a jornada pela região.</p>
        <p><strong>Montanhas, frio e mitos da criação:</strong> Inspirada em Hokkaido, Sinnoh é dividida pelo imponente <strong>Monte Coronet</strong>. Enquanto conquista as <strong>oito insígnias</strong>, o jogador descobre as lendas antigas sobre a origem do universo, <strong>Arceus</strong> e os Guardiões dos Lagos (<strong>Uxie, Mesprit e Azelf</strong>).</p>
        <p><strong>A ambição da Equipe Galáctica:</strong> No centro da trama, o protagonista enfrenta a <strong>Equipe Galáctica</strong> e seu líder <strong>Cyrus</strong>, que pretendem usar <strong>Dialga</strong> e <strong>Palkia</strong> no <em>Spear Pillar</em> para destruir e recriar o universo — abrindo caminho também para o <em>Distortion World</em> de <strong>Giratina</strong>.</p>
        <p><strong>A Liga Sinnoh e a Campeã Cynthia:</strong> Após salvar o espaço-tempo, o jogador atravessa a <em>Victory Road</em> rumo à <strong>Liga Pokémon</strong>, culminando na batalha contra a lendária Campeã <strong>Cynthia</strong> e seu poderoso <strong>Garchomp</strong>.</p>
    `
},
    Anime:{
    titulo: "A Jornada de Ash em Sinnoh",
    texto: `
        <p><strong>Uma nova parceria e um time poderoso:</strong> Chegando a Sinnoh com <strong>Pikachu</strong> e <strong>Aipom</strong>, Ash reencontra <strong>Brock</strong> e conhece a coordenadora <strong>Dawn</strong>, montando uma de suas equipes mais fortes com <strong>Staraptor</strong>, <strong>Torterra</strong>, <strong>Infernape</strong>, <strong>Buizel</strong>, <strong>Gliscor</strong> e <strong>Gible</strong>.</p>
        <p><strong>O choque de filosofias com Paul:</strong> O grande destaque da saga é a rivalidade com <strong>Paul</strong>, um treinador rígido que abandona seu <strong>Chimchar</strong> — acolhido por Ash e transformado em um poderoso <strong>Infernape</strong> graças à confiança e ao vínculo entre treinador e Pokémon.</p>
        <p><strong>Ginásios, Concursos e a Equipe Galáctica:</strong> Enquanto Ash disputa as <strong>oito insígnias</strong> e Dawn brilha nos <strong>Concursos Pokémon</strong>, o grupo enfrenta a <strong>Equipe Galáctica</strong> e a caçadora <strong>J</strong> para proteger os Guardiões dos Lagos e conter o poder de <strong>Dialga</strong> e <strong>Palkia</strong>.</p>
        <p><strong>A Conferência do Lírio do Vale:</strong> Na <strong>Liga Sinnoh</strong>, Ash conquista uma vitória histórica contra <strong>Paul</strong>, antes de cair nas semifinais diante de <strong>Tobias</strong> — sendo o único treinador do torneio a derrotar tanto seu <strong>Darkrai</strong> quanto seu <strong>Latios</strong>.</p>
    `
},
    Iniciais: {
        titulo: "A Escolha Mais Dificil de um Treinador",
        texto: `<p><img src="./assets/imgs/iniciais/turtiwig.png" width="150" height="120" alt="Chikorita"><img src="./assets/imgs/iniciais/grotle.png" width="150" height="120" alt="Bayleef "><img src="./assets/imgs/iniciais/torterra.png" width="150" height="120" alt="Meganium "></p>
        <p><img src="./assets/imgs/iniciais/chimchar.png" width="150" height="120" alt="Cyndaquil "><img src="./assets/imgs/iniciais/monferno.png" width="150" height="120" alt="Quilava "><img src="./assets/imgs/iniciais/infernape.png" width="150" height="120" alt="Typhlosion "></p>
        <p><img src="./assets/imgs/iniciais/piplup.png" width="150" height="120" alt="Totodile "><img src="./assets/imgs/iniciais/prinplup.png" width="150" height="120" alt="Croconaw "><img src="./assets/imgs/iniciais/empoleon.png" width="150" height="120" alt="Feraligatr "></p>`
    },
  lendarios: {
         titulo: "Os Lendários de Sinnoh",
        texto: `<p><img src="./assets/imgs/iniciais/480.png" width="150" height="150" alt="Chikorita"><img src="./assets/imgs/iniciais/481.png" width="150" height="150" alt="Bayleef "><img src="./assets/imgs/iniciais/482.png" width="150" height="150" alt="Meganium "></p>
        <p><img src="./assets/imgs/iniciais/483.png" width="150" height="150" alt="Cyndaquil "><img src="./assets/imgs/iniciais/484.png" width="150" height="150" alt="Quilava "><img src="./assets/imgs/iniciais/487.png" width="150" height="150" alt="Quilava "></p>
        <p><img src="./assets/imgs/iniciais/493.png" width="150" height="150" alt="Quilava "></p>`  
      }
}

var conteudosUnova = {
    lore: {
    titulo: "Pokémon Black & White",
    texto: `
        <p><strong>O início em Nuvema Town:</strong> A aventura começa em <strong>Nuvema Town</strong>, quando o jogador recebe <strong>Snivy</strong>, <strong>Tepig</strong> ou <strong>Oshawott</strong> da <strong>Professora Juniper</strong> e parte ao lado de <strong>Cheren</strong> e <strong>Bianca</strong> por uma região inspirada na área de Nova York.</p>
        <p><strong>Uma região única e seus mitos:</strong> Em Unova, marcos como a <strong>Dragonspiral Tower</strong> e a <strong>Relic Castle</strong> guardam a lenda do dragão original dividido entre <strong>Reshiram</strong> (verdade) e <strong>Zekrom</strong> (ideais), além da presença enigmática de <strong>Kyurem</strong>.</p>
        <p><strong>O dilema da Equipe Plasma:</strong> Liderada por <strong>N</strong> e manipulada por <strong>Ghetsis</strong>, a <strong>Equipe Plasma</strong> prega a libertação dos Pokémon, forçando o protagonista a questionar o verdadeiro significado da amizade e da parceria entre humanos e Pokémon.</p>
        <p><strong>A Liga Unova e o legado em B2W2:</strong> Após enfrentar <strong>N</strong>, <strong>Ghetsis</strong> e o Campeão <strong>Alder</strong>, a saga avança dois anos em <em>Black 2 & White 2</em> contra uma nova ameaça da <strong>Equipe Plasma</strong> e o poder de <strong>Kyurem</strong>.</p>
    `
},
   Anime: {
    titulo: "A Jornada de Ash em Unova",
    texto: `
        <p><strong>Um novo horizonte distante:</strong> Chegando a <strong>Unova</strong> apenas com <strong>Pikachu</strong>, Ash viaja ao lado de <strong>Iris</strong> e <strong>Cilan</strong> e forma um time dinâmico com <strong>Snivy</strong>, <strong>Tepig (Pignite)</strong>, <strong>Oshawott</strong>, <strong>Scraggy</strong>, <strong>Leavanny</strong> e <strong>Krookodile</strong>.</p>
        <p><strong>Ginásios, rivais e novos torneios:</strong> Na busca pelas <strong>oito insígnias</strong>, Ash enfrenta rivais como <strong>Trip</strong> e <strong>Bianca</strong> e disputa competições especiais ao longo da região, amadurecendo taticamente a cada batalha.</p>
        <p><strong>Lendas de Unova e a Equipe Rocket:</strong> Entre os pontos altos da trama estão os encontros ligados a <strong>Reshiram</strong>, <strong>Zekrom</strong>, <strong>Meloetta</strong> e <strong>Landorus</strong>, além de uma atuação mais furtiva e estratégica de <strong>Jessie, James e Meowth</strong>.</p>
        <p><strong>A Liga Unova e o próximo destino:</strong> Na <strong>Liga Unova</strong>, Ash batalha com garra até cair diante de <strong>Cameron</strong> e seu <strong>Lucario</strong>, encerrando essa etapa rumo às <strong>Ilhas Decolore</strong> e, em seguida, a <strong>Kalos</strong>.</p>
    `
},
    Iniciais: {
        titulo: "A Escolha Mais Dificil de um Treinador",
        texto: `<p><img src="./assets/imgs/iniciais/snivy.png" width="150" height="120" alt="Chikorita"><img src="./assets/imgs/iniciais/servine.png" width="150" height="120" alt="Bayleef "><img src="./assets/imgs/iniciais/serperior.png" width="150" height="120" alt="Meganium "></p>
        <p><img src="./assets/imgs/iniciais/tepig.png" width="150" height="120" alt="Cyndaquil "><img src="./assets/imgs/iniciais/pignite.png" width="150" height="120" alt="Quilava "><img src="./assets/imgs/iniciais/emboar.png" width="150" height="120" alt="Typhlosion "></p>
        <p><img src="./assets/imgs/iniciais/oshawatt.png" width="150" height="120" alt="Totodile "><img src="./assets/imgs/iniciais/dewott.png" width="150" height="120" alt="Croconaw "><img src="./assets/imgs/iniciais/samurot.png" width="150" height="120" alt="Feraligatr "></p>`
    },
 lendarios: {
         titulo: "Os Lendários de Unova",
        texto: `<p><img src="./assets/imgs/iniciais/641.png" width="150" height="150" alt="Chikorita"><img src="./assets/imgs/iniciais/642.png" width="150" height="150" alt="Bayleef "><img src="./assets/imgs/iniciais/645.png" width="150" height="150" alt="Meganium "></p>
        <p><img src="./assets/imgs/iniciais/643.png" width="150" height="150" alt="Cyndaquil "><img src="./assets/imgs/iniciais/644.png" width="150" height="150" alt="Quilava "></p>`  
      }
}

var conteudosKalos = {
    lore: {
    titulo: "Pokémon X & Y",
    texto: `
        <p><strong>Um novo começo em Vaniville Town:</strong> A jornada começa quando o protagonista se muda para <strong>Vaniville Town</strong>, forma um grupo de amigos com <strong>Serena/Calem</strong>, <strong>Shauna</strong>, <strong>Tierno</strong> e <strong>Trevor</strong> e recebe <strong>Chespin</strong>, <strong>Fennekin</strong> ou <strong>Froakie</strong> do <strong>Professor Sycamore</strong>, especialista em <strong>Megaevolução</strong>.</p>
        <p><strong>Elegância, cultura e os segredos da Mega Pedra:</strong> Inspirada na França, Kalos destaca cidades icônicas como <strong>Lumiose City</strong> e a <strong>Torre da Maestria</strong>. Enquanto conquista as <strong>oito insígnias</strong>, o jogador descobre o poder ancestral da <strong>Megaevolução</strong> e as lendas de <strong>Xerneas</strong> (vida) e <strong>Yveltal</strong> (destruição).</p>
        <p><strong>A obsessão da Equipe Flare e o rei AZ:</strong> No centro da história, o protagonista enfrenta <strong>Lysandre</strong> e a <strong>Equipe Flare</strong>, que tentam reativar a <strong>Arma Suprema</strong> — construída há 3.000 anos pelo antigo rei <strong>AZ</strong> — para destruir e recomeçar o mundo.</p>
        <p><strong>A Liga Kalos e a Campeã Diantha:</strong> Após salvar a região e capturar o Pokémon lendário, o jogador supera a <em>Victory Road</em> e desafia a <strong>Liga Pokémon</strong>, culminando na batalha contra a Campeã <strong>Diantha</strong> e seu <strong>Mega Gardevoir</strong>.</p>
    `
},
    Anime: {
    titulo: "A Jornada de Ash em Kalos",
    texto: `
        <p><strong>Um Ash focado e um time lendário:</strong> Com uma postura mais madura e estratégica, Ash viaja por Kalos ao lado de <strong>Serena</strong>, <strong>Clemont</strong> e <strong>Bonnie</strong>, formando uma equipe marcante com <strong>Greninja</strong>, <strong>Talonflame</strong>, <strong>Hawlucha</strong>, <strong>Goodra</strong> e <strong>Noivern</strong>.</p>
        <p><strong>O Fenômeno Laço e o Ash-Greninja:</strong> Na busca pelas <strong>oito insígnias</strong>, Ash e <strong>Greninja</strong> despertam o raro <strong>Fenômeno Laço</strong> — uma sincronia extrema que transforma Greninja sem precisar de Mega Pedra, compartilhando visão, reflexos e força em batalha.</p>
        <p><strong>A crise de Zygarde e a Equipe Flare:</strong> Enquanto Serena brilha nas Exibições Pokémon, Bonnie protege um núcleo de <strong>Zygarde</strong>, levando o grupo a unir forças com os líderes de ginásio para deter <strong>Lysandre</strong> e a <strong>Equipe Flare</strong> em Lumiose City.</p>
        <p><strong>A Conferência de Lumiose:</strong> Na <strong>Liga Kalos</strong>, Ash alcança pela primeira vez a final de uma Liga regional principal — superando <strong>Sawyer</strong> nas semifinais e protagonizando um duelo histórico contra <strong>Alain</strong> e seu <strong>Mega Charizard X</strong>.</p>
    `
},
    Iniciais: {
        titulo: "A Escolha Mais Dificil de um Treinador",
        texto: `<p><img src="./assets/imgs/iniciais/chespin.png" width="150" height="120" alt="Chikorita"><img src="./assets/imgs/iniciais/quiladin.png" width="150" height="120" alt="Bayleef "><img src="./assets/imgs/iniciais/chesnaught.png" width="150" height="120" alt="Meganium "></p>
        <p><img src="./assets/imgs/iniciais/fennekin.png" width="150" height="120" alt="Cyndaquil "><img src="./assets/imgs/iniciais/breaki.png" width="150" height="120" alt="Quilava "><img src="./assets/imgs/iniciais/delphox.png" width="150" height="120" alt="Typhlosion "></p>
        <p><img src="./assets/imgs/iniciais/frokkie.png" width="150" height="120" alt="Totodile "><img src="./assets/imgs/iniciais/frogradier.png" width="150" height="120" alt="Croconaw "><img src="./assets/imgs/iniciais/greninja.png" width="150" height="120" alt="Feraligatr "></p>`
    },
  lendarios: {
         titulo: "Os Lendários de Kalos",
        texto: `<p><img src="./assets/imgs/iniciais/716.png" width="150" height="150" alt="Chikorita"><img src="./assets/imgs/iniciais/717.png" width="150" height="150" alt="Bayleef "><img src="./assets/imgs/iniciais/718.png" width="150" height="150" alt="Meganium "></p>
        <p><img src="./assets/imgs/iniciais/719.png" width="150" height="150" alt="Cyndaquil "><img src="./assets/imgs/iniciais/721.png" width="150" height="150" alt="Quilava "></p>`  
      }
}


function abrirPopUp(card) {
    var conteudo = conteudosKanto[card];
    if (conteudo) {
        document.getElementById("popup-titulo").innerHTML = conteudo.titulo;
        document.getElementById("popup-texto").innerHTML = conteudo.texto;
        document.getElementById("popup").showModal();
    }
}


function abrirPopUpJohto(card) {
    var conteudo = conteudosJohto[card];
    if (conteudo) {
        document.getElementById("popup-titulo").innerHTML = conteudo.titulo;
        document.getElementById("popup-texto").innerHTML = conteudo.texto;
        document.getElementById("popup").showModal();
    }
}

function abrirPopUpHoenn(card) {
    var conteudo = conteudosHoenn[card];
    if (conteudo) {
        document.getElementById("popup-titulo").innerHTML = conteudo.titulo;
        document.getElementById("popup-texto").innerHTML = conteudo.texto;
        document.getElementById("popup").showModal();
    }
}


function abrirPopUpSinnoh(card) {
    var conteudo = conteudosSinnoh[card];
    if (conteudo) {
        document.getElementById("popup-titulo").innerHTML = conteudo.titulo;
        document.getElementById("popup-texto").innerHTML = conteudo.texto;
        document.getElementById("popup").showModal();
    }
}

function abrirPopUpUnova(card) {
    var conteudo = conteudosUnova[card];
    if (conteudo) {
        document.getElementById("popup-titulo").innerHTML = conteudo.titulo;
        document.getElementById("popup-texto").innerHTML = conteudo.texto;
        document.getElementById("popup").showModal();
    }
}

function abrirPopUpKalos(card) {
    var conteudo = conteudosKalos[card];
    if (conteudo) {
        document.getElementById("popup-titulo").innerHTML = conteudo.titulo;
        document.getElementById("popup-texto").innerHTML = conteudo.texto;
        document.getElementById("popup").showModal();
    }
}
/* function fecharPopup() {
    document.getElementById("popup").close();
}
const button = document.querySelector(".card_individual_")

const modal = document.querySelector("dialog")

const botaoFechar = document.querySelector("dialog button")

button.onclick = function(){
    modal.showModal()
}

botaoFechar.onclick = function(){
    modal.close()
}
*/

