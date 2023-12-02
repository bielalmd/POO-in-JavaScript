function Ninja (nome, arma) {
    this.nome = nome;
    this.arma = arma;
    this.atitouArma = function() {
        console.log(`O ${this.nome} atirou uma ${this.arma}`);
    }
}

let ninjaS = new Ninja('Naruto', 'shuriken')

console.log(ninjaS.nome);
console.log(ninjaS.arma);

ninjaS.atitouArma()