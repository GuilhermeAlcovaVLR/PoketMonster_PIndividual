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
    sessionStorage.clear();
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
        titulo: "Kanto",
        texto: "Insetos, tajiri, onde tudo começa"
    },
    Anime: {
        titulo: "anime",
        texto: "Anime"

    },
    Iniciais: {
        titulo: "A escolha mais dificil",
        texto: `<p><img src="./assets/imgs/iniciais/bulbasaur.png" width="150" height="150" alt="Chikorita"><img src="./assets/imgs/iniciais/ivysaur.png" width="150" height="150" alt="Bayleef "><img src="./assets/imgs/iniciais/venusaur.png" width="150" height="150" alt="Meganium "></p>
        <p><img src="./assets/imgs/iniciais/charmander.png" width="150" height="150" alt="Cyndaquil "><img src="./assets/imgs/iniciais/charmeleon.png" width="150" height="150" alt="Quilava "><img src="./assets/imgs/iniciais/charizard.png" width="150" height="150" alt="Typhlosion "></p>
        <p><img src="./assets/imgs/iniciais/squirtle.png" width="150" height="150" alt="Totodile "><img src="./assets/imgs/iniciais/wartotle.png" width="150" height="150" alt="Croconaw "><img src="./assets/imgs/iniciais/blastoise.png" width="150" height="150" alt="Feraligatr "></p>`
    },
    Inovacoes: {
        titulo: "Inovações",
        texto: "SIM"
    }
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
        titulo: "A escolha mais dificil",
        texto: `<p><img src="./assets/imgs/iniciais/chicorita.png" width="150" height="150" alt="Chikorita"><img src="./assets/imgs/iniciais/bayleef.png" width="150" height="150" alt="Bayleef "><img src="./assets/imgs/iniciais/meganium.png" width="150" height="150" alt="Meganium "></p>
        <p><img src="./assets/imgs/iniciais/cyndaquil.png" width="150" height="150" alt="Cyndaquil "><img src="./assets/imgs/iniciais/quilava.png" width="150" height="150" alt="Quilava "><img src="./assets/imgs/iniciais/typlosion.png" width="150" height="150" alt="Typhlosion "></p>
        <p><img src="./assets/imgs/iniciais/totodile.png" width="150" height="150" alt="Totodile "><img src="./assets/imgs/iniciais/croconow.png" width="150" height="150" alt="Croconaw "><img src="./assets/imgs/iniciais/feraligtr.png" width="150" height="150" alt="Feraligatr "></p>`
    },

}

var conteudosHoenn = {
    lore: {
        titulo: "Kanto",
        texto: "Insetos, tajiri, onde tudo começa"
    },
    Anime: {
        titulo: "anime",
        texto: "Anime"

    },
    Iniciais: {
        titulo: "A escolha mais dificil",
        texto: `<p><img src="./assets/imgs/iniciais/trecko.png" width="150" height="150" alt="Chikorita"><img src="./assets/imgs/iniciais/grovyle.png" width="150" height="150" alt="Bayleef "><img src="./assets/imgs/iniciais/scepitele.png" width="150" height="150" alt="Meganium "></p>
        <p><img src="./assets/imgs/iniciais/torchic.png" width="150" height="150" alt="Cyndaquil "><img src="./assets/imgs/iniciais/combusquen.png" width="150" height="150" alt="Quilava "><img src="./assets/imgs/iniciais/blaziken.png" width="150" height="150" alt="Typhlosion "></p>
        <p><img src="./assets/imgs/iniciais/mudkip.png" width="150" height="150" alt="Totodile "><img src="./assets/imgs/iniciais/marstomp.png" width="150" height="150" alt="Croconaw "><img src="./assets/imgs/iniciais/swampert.png" width="150" height="150" alt="Feraligatr "></p>`
    },
    Inovacoes: {
        titulo: "Inovações",
        texto: "SIM"
    }
}

var conteudosSinnoh = {
    lore: {
        titulo: "Kanto",
        texto: "Insetos, tajiri, onde tudo começa"
    },
    Anime: {
        titulo: "anime",
        texto: "Anime"

    },
    Iniciais: {
        titulo: "A escolha mais dificil",
        texto: `<p><img src="./assets/imgs/iniciais/turtiwig.png" width="150" height="150" alt="Chikorita"><img src="./assets/imgs/iniciais/grotle.png" width="150" height="150" alt="Bayleef "><img src="./assets/imgs/iniciais/torterra.png" width="150" height="150" alt="Meganium "></p>
        <p><img src="./assets/imgs/iniciais/chimchar.png" width="150" height="150" alt="Cyndaquil "><img src="./assets/imgs/iniciais/monferno.png" width="150" height="150" alt="Quilava "><img src="./assets/imgs/iniciais/infernape.png" width="150" height="150" alt="Typhlosion "></p>
        <p><img src="./assets/imgs/iniciais/piplup.png" width="150" height="150" alt="Totodile "><img src="./assets/imgs/iniciais/prinplup.png" width="150" height="150" alt="Croconaw "><img src="./assets/imgs/iniciais/empoleon.png" width="150" height="150" alt="Feraligatr "></p>`
    },
    Inovacoes: {
        titulo: "Inovações",
        texto: "SIM"
    }
}

var conteudosUnova = {
    lore: {
        titulo: "Kanto",
        texto: "Insetos, tajiri, onde tudo começa"
    },
    Anime: {
        titulo: "anime",
        texto: "Anime"

    },
    Iniciais: {
        titulo: "A escolha mais dificil",
        texto: `<p><img src="./assets/imgs/iniciais/snivy.png" width="150" height="150" alt="Chikorita"><img src="./assets/imgs/iniciais/servine.png" width="150" height="150" alt="Bayleef "><img src="./assets/imgs/iniciais/serperior.png" width="150" height="150" alt="Meganium "></p>
        <p><img src="./assets/imgs/iniciais/tepig.png" width="150" height="150" alt="Cyndaquil "><img src="./assets/imgs/iniciais/pignite.png" width="150" height="150" alt="Quilava "><img src="./assets/imgs/iniciais/emboar.png" width="150" height="150" alt="Typhlosion "></p>
        <p><img src="./assets/imgs/iniciais/oshawatt.png" width="150" height="150" alt="Totodile "><img src="./assets/imgs/iniciais/dewott.png" width="150" height="150" alt="Croconaw "><img src="./assets/imgs/iniciais/samurot.png" width="150" height="150" alt="Feraligatr "></p>`
    },
    Inovacoes: {
        titulo: "Inovações",
        texto: "SIM"
    }
}

var conteudosKalos = {
    lore: {
        titulo: "Kanto",
        texto: "Insetos, tajiri, onde tudo começa"
    },
    Anime: {
        titulo: "anime",
        texto: "Anime"

    },
    Iniciais: {
        titulo: "A escolha mais dificil",
        texto: `<p><img src="./assets/imgs/iniciais/chespin.png" width="150" height="150" alt="Chikorita"><img src="./assets/imgs/iniciais/quiladin.png" width="150" height="150" alt="Bayleef "><img src="./assets/imgs/iniciais/chesnaught.png" width="150" height="150" alt="Meganium "></p>
        <p><img src="./assets/imgs/iniciais/fennekin.png" width="150" height="150" alt="Cyndaquil "><img src="./assets/imgs/iniciais/breaki.png" width="150" height="150" alt="Quilava "><img src="./assets/imgs/iniciais/delphox.png" width="150" height="150" alt="Typhlosion "></p>
        <p><img src="./assets/imgs/iniciais/frokkie.png" width="150" height="150" alt="Totodile "><img src="./assets/imgs/iniciais/frogradier.png" width="150" height="150" alt="Croconaw "><img src="./assets/imgs/iniciais/greninja.png" width="150" height="150" alt="Feraligatr "></p>`
    },
    Inovacoes: {
        titulo: "Inovações",
        texto: "mega"
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

