
function Ninja (nome, arma) {
    this.nome = nome;
    this.armaQtd = arma;
    this.atitouArma = function(inimigo) {
        if(this.armaQtd > 0){
            console.log(`O ${this.nome} atirou shurikens`);
            this.armaQtd -= 1;
            inimigo.vivo = false;
        } else {
            console.log('Naruto zerou suas shurikens');
        }
    }
}

function Inimigo(nome){
    this.nome = nome;
    this.vivo = true;
}


let naruto = new Ninja('Naruto', 3)
let orochimaru = new Inimigo('Orochimaru');

console.log(naruto);
console.log(orochimaru);

naruto.atitouArma(orochimaru)

console.log(orochimaru);