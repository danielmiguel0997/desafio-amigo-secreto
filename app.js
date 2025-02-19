//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

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
        
        let resultado = document.getElementById("resultado");
        let lista = document.getElementById("listaAmigos");
        //limpa o conteúdo anterior
        lista.innerHTML = "";
        resultado.innerHTML = "";

        //cria a lista
        let item = document.createElement("li");
        item.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
        resultado.appendChild(item);
    } else {
        alert("A lista de amigos está vazia!");
    }
    return amigoSorteado;

}