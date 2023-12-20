function Veiculo() {
  this.carenagem = 'metal',
  this.ligar = function() {
    console.log('O veiculo ligou');
  }
}

function Trem(tipo) {
  this.tipo = tipo,
  this.vagoes = 13
}

function Carro() {
  this.pneus = 4
}

Trem.prototype = new Veiculo()
Carro.prototype = new Veiculo()

let tremBala = new Trem('Trem Bala')

console.log(tremBala.tipo);

tremBala.ligar()

let ferrari = new Carro();

ferrari.ligar()

