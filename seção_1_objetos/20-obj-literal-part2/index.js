let rodas = 4;
let portas = 2;
let aro = 20;
let tetoSolar = true;

let carro = {
    rodas,
    portas,
    aro,
    tetoSolar,
    bancoDeCouro: true,
    ligar() {
        console.log('Carro ligado');
    },
    desligar: function () {
        console.log('Desligou');
    }
}

console.log(carro);
console.log(carro.rodas);

carro.ligar();
carro.desligar()