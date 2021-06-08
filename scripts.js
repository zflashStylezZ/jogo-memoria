// selecionando todas as cartas na class (cartaMemoria) e transoframando na const
const cartas = document.querySelectorAll('.cartaMemoria');

let temCartaVirada = false;
let travaCartas = false;
let primeiraCarta, segundaCarta;

// função que vai fazer as cartas virarem e fazer o jogo funcionar;
function viraCarta() {
	if (travaCartas) return;
	if(this === primeiraCarta) return;

  	this.classList.toggle('flip');

  	if (!temCartaVirada) {
  	//primeiro click
  		temCartaVirada = true;
  		primeiraCarta = this;

  		return;
  	} 

  	//segundo click
  	segundaCarta = this;
  	
  	verificaSeEstaCerto();
}

// função que vai verificar se as 2 cartas são iguais através do framework definido.
function verificaSeEstaCerto() {
	let achou = primeiraCarta.dataset.framework === segundaCarta.dataset.framework;
	
	achou ? disabilitarCartas() : desvirarCartas()
}

// função para que quando 2 cartas iguais forem encotradas, elas sejam travadas e desabilitadas,
// e/para que não voltem a posição incial e nem seja possivel virá-las mais 
function disabilitarCartas() {
	primeiraCarta.removeEventListener('click', viraCarta);
  segundaCarta.removeEventListener('click', viraCarta);

  resetaSelecaoDasCartas();
}

// função que, se as 2 cartas não forem iguais, vai fazer elas voltarem a posição inicial.
function desvirarCartas() {
	travaCartas = true;

  setTimeout(() => {
  	primeiraCarta.classList.remove('flip');
  	segundaCarta.classList.remove('flip');

  	resetaSelecaoDasCartas();
  }, 1450);
}

// função necessaria para que o jogo de continuidade as rodadas/movimentos.
function resetaSelecaoDasCartas() {
	[temCartaVirada, travaCartas] = [false, false];
	[primeiraCarta, segundaCarta] =[null, null];
}

// declarada função que vai embaralhar as cartas, e que é chamada automaticamente ja que esta entre (fucntion example() {})();
(function embaralhar() {
	cartas.forEach(carta => {
		let posicaoAleatoria = Math.floor(Math.random() * 12);
		carta.style.order = posicaoAleatoria;
	});
})();

// virar a carta com o click nela
cartas.forEach(carta => carta.addEventListener('click', viraCarta));

// Parte do botão
// aqui vai puxar o botão e indentificar  o button na variavel button
var button = document.querySelector("button");

//ao clickar o botão "button"/Resetar, ele vai realizar a função recarregaPagina
button.onclick = recarregaPagina;

function recarregaPagina() {
  //comando para recarregar a janela/pagina
  window.location.reload();
}