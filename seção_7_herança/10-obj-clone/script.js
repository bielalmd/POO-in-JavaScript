function extend(Filho, Pai) {
  let paiProto = Pai.prototype;
  let filhoProto = Filho.prototype;

  for(let i in paiProto){
    filhoProto[i] = paiProto[i]
  }
  // filho tem acesso ao obj pai
  filhoProto.uber = paiProto;
}

function objClone(o, stuff) {
  let n;
  function F() {}
  F.prototype = o;
  n = new F();
  n.uber = o;
  for(let i in stuff) {
    n[i] = stuff[i]
  }
}

function Veiculo() {
  this.carenagem = 'metal',
  this.itens = ['teto solar','V8', 'Turbo']
  this.ligar = function() {
    console.log('O veiculo ligou');
  }
}

function Trem(tipo) {
  this.tipo = tipo;
  this.vagoes = 12

}

function Carro() {
  this.pneus = 4

}
let v = new Veiculo;

let trem = objClone(v, {
  tipo: 'trem',
  vagoes: 12
})

trem.itens.push('Janela fixa')

console.log(trem);
console.log(Veiculo);