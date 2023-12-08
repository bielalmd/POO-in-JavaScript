let robo = {
    acao: 'Atirar',
    getAcao() {
        console.log(`O robo está ${this.acao}` );
    }
}

let robo1 = {
    age: 10
}

Object.assign(robo1, robo)

console.log(robo1);