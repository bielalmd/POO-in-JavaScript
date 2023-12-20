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
let ferrari = new Carro();

console.log(tremBala instanceof Trem); // True
console.log(ferrari instanceof Carro); // True

console.log(ferrari instanceof Veiculo); // True
console.log(tremBala instanceof Veiculo); // True

console.log(ferrari instanceof Object); // True
console.log(tremBala instanceof Object); // True