function extend(Filho, Pai) {
  let paiProto = Pai.prototype;
  let filhoProto = Filho.prototype;

  for(let i in paiProto){
    filhoProto[i] = paiProto[i]
  }
  // filho tem acesso ao obj pai
  filhoProto.uber = paiProto;
}

function Veiculo() {}

Veiculo.prototype.carenagem = 'metal',
Veiculo.prototype.itens = ['teto solar','V8', 'Turbo']
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
Trem.prototype.itens.push('Vidro com insufilm')


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

console.log(trem);