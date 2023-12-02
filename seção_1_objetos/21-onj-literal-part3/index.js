let rodas = 4;
let portas = 2;
let aro = 20;
let tetoSolar = true;

let t = 'tipo_de_'

let carro = {
    rodas,
    portas,
    aro,
    tetoSolar,
    bancoDeCouro: true,
    [t+'carro']: 'Sedan',
    ligar() {
        console.log('Carro ligado');
    },
    desligar: function () {
        console.log('Desligou');
    }
}

let boat = {
    [t + 'boat']: 'Lancha'
}

let plane = {
    [t + 'plane']: 'Antonov'

}

console.log(carro);

console.log(plane);
console.log(boat);