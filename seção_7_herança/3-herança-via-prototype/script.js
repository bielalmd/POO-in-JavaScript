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


Trem.prototype = new Veiculo()
Carro.prototype = new Veiculo()

let tremBala = new Trem('Trem Bala')
let trem = new Trem('Trem')
let ferrari = new Carro();

trem.ligar()
tremBala.ligar()
ferrari.ligar()
