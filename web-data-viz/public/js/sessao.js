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
    lore:{
        titulo: "Kanto",
        texto: "Insetos, tajiri, onde tudo começa"
    },
    Anime:{
        titulo: "anime",
        texto: "Anime"

    },
    Iniciais:{
        titulo:"A escolha mais dificil",
        texto: "Squirtle"
    },
    Inovacoes:{
        titulo: "Inovações",
        texto: "SIM"
    }
}

function abrirPopUp(card){
    var conteudo =conteudosKanto[card];
    if (conteudo) {
        document.getElementById("popup-titulo").innerText = conteudo.titulo;
        document.getElementById("popup-texto").innerText = conteudo.texto;
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

