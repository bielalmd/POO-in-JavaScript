function Ninja (nome, arma) {
    this.nome = nome;
    this.arma = arma;
    this.atirarArma = function() {
        console.log(`${this.nome} Atirou a ${this.arma}`);
    }
}

let ninja1 = new Ninja('Naruto', 'Kunai')

console.log(ninja1.nome)

ninja1.atirarArma()

let ninja2 = new Ninja('Yamato','Kunai');

console.log(ninja2.nome);
ninja2.atirarArma()