function extend(Filho, Pai) {
  // Construtor temporario
  let F = function() {}
  F.prototype = Pai.prototype
  Filho.prototype = new F();
}

function Veiculo() {}

Veiculo.prototype.carenagem = 'metal',
Veiculo.prototype.ligar = function() {
    console.log('O veiculo ligou');
  }

function Trem(tipo) {
  this.tipo = tipo
}

Trem.prototype.vagoes = 12

function Carro() {}

Carro.prototype.pneus = 4

// Construtor temporario por função
extend(Trem, Veiculo);
extend(Carro, Veiculo);


let tremBala = new Trem('Trem Bala')
let trem = new Trem('Trem')
let ferrari = new Carro();

Carro.prototype.ligar = function() {
  console.log('O Carro ligou');
}

Trem.prototype.ligar = function() {
  console.log('Tchuuuuu');
}
trem.ligar()
tremBala.ligar()
ferrari.ligar()

