let listaSorteados = [];
let maxSorteio = 10;
let numsecret = numAleatorio();
let tentativas = 1;

function exibirTextoTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function mensagemInicial() {
  exibirTextoTela("h1", "Jogo do número secreto");
  exibirTextoTela("p", "Escolha um número entre 1 e 10");
}

mensagemInicial();

function verificarChute() {
  let numChute = document.querySelector("input").value;

  if (numChute == numsecret) {
    let nomeTent = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${nomeTent}`;
    exibirTextoTela("a", mensagemTentativa);
    exibirTextoTela("p", " ");
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (numChute > numsecret) {
    exibirTextoTela("a", "O número secreto é MENOR!!!");
    exibirTextoTela("p", "Escolha um número entre 1 e 10");
  } else {
    exibirTextoTela("a", "O número secreto é MAIOR!!!");
    exibirTextoTela("p", "Escolha um número entre 1 e 10");
  }
  tentativas++;
  limparCampo();
}

function numAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * maxSorteio + 1);
  let tamanhoMaxLista = listaSorteados.length;

  if (tamanhoMaxLista == maxSorteio) {
    listaSorteados = [];
  }
  if (listaSorteados.includes(numeroEscolhido)) {
    return numAleatorio();
  } else {
    listaSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo() {
  numChute = document.querySelector("input");
  numChute.value = "";
}

function reiniciarJogo() {
  numsecret = numAleatorio();
  limparCampo();
  tentativas = 1;
  mensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
