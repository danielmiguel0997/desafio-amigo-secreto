//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
let listaDosSorteados = [];

function adicionarAmigo() {
    let nomeDoAmigo = document.getElementById("amigo").value;
    if (nomeDoAmigo != "") {
        listaDeAmigos.push(nomeDoAmigo);
        limparTexto();
        atualizarLista();
    } else {
        alert("Por favor, insira um nome.");
    }
    return nomeDoAmigo;
}

function limparTexto() {
    document.getElementById("amigo").value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    //exibe cada um dos nomes a serem sorteados
    for (i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = listaDeAmigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    let amigoSorteado = "";
    if (listaDeAmigos.length != 0) {
        let sortearIndice = Math.floor(Math.random()*listaDeAmigos.length); //Obtém o índice do sorteado
        amigoSorteado = listaDeAmigos[sortearIndice]; //Obtém o nome do sorteado

        listaDeAmigos.splice(sortearIndice, 1); //remove da "listaDeAmigos" o nome sorteado
        
        let resultado = document.getElementById("resultado");
        let lista = document.getElementById("listaAmigos");
        //limpa o conteúdo anterior
        lista.innerHTML = "";
        resultado.innerHTML = "";

        //cria a lista
        let item = document.createElement("li");
        item.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
        resultado.appendChild(item);

        listaDosSorteados.push(amigoSorteado); //adiciona o nome do amigo sorteado à "listaDosSorteados"
    }   else if (listaDosSorteados.length != 0) {
            alert("Todos os amigos foram sorteados");
        }   else {
                alert("A lista de amigos está vazia!");
            }
    return amigoSorteado;

}