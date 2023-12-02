function creatThree(especie, temFruto) {
    return {
        especie: especie,
        temFruto: temFruto
    }
}

let laranjeira = creatThree('Laranjeira', true);

console.log(laranjeira);
console.log(laranjeira.constructor);

function Heroi(nome, classe) {
    this.nome = nome;
    this.classe = classe
}

let capAmerica = new Heroi('Steve Rogers', 'Foda')

console.log(capAmerica);
console.log(capAmerica.constructor);