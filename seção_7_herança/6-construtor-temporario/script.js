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

// Copiando o prototype ao invez de instanciar uma classe
Trem.prototype = Veiculo.prototype;

// Construtor temporario
let F = function() {}
F.prototype = Veiculo.prototype
Carro.prototype = new F();

let tremBala = new Trem('Trem Bala')
let trem = new Trem('Trem')
let ferrari = new Carro();

Carro.prototype.ligar = function() {
  console.log('O Carro ligou');
}
trem.ligar()
tremBala.ligar()
ferrari.ligar()

