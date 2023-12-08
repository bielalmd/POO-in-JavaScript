function Ninja (nome, arma) {
    this.nome = nome;
    this.armaQtd = arma;
    this.atitouArma = function() {
        if(this.atitouArma >= 0){
            console.log(`O ${this.nome} atirou shurikens`);
            this.armaQtd -= 1;
        } else {
            console.log('Naruto zerou suas shurikens');
        }
    }
}

let ninjaS = new Ninja('Naruto', 3)

console.log(ninjaS.armaQtd);

ninjaS.atitouArma()
console.log(ninjaS.nome);