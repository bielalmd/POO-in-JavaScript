let ninja1 = {
    name: "Gai",
    rank: "S",
    arma: null,
    justsu: "Taijustsu",
    openEigthGates: function() {
        console.log(`O ${this.name} abriu os 8 portoes usando o seu ${this.justsu}`);
    }
    
}

let ninja2 = {
    nome: "Kakashi",
    rank: "S",
    arma: "kunai",
    justsu: "Taijustsu",
    atirouArma: function() {
        this.nome = "Ninja da aldeia da folha"

        console.log(`O ${this.nome} atirou sua ${this.arma}`);
    },
    abrirTwoTimes: function() {
        for (let i =2; i >0; i--) {
            this.atirouArma()
        }
    }
}

ninja1.openEigthGates()
ninja2.atirouArma()

ninja2.abrirTwoTimes()
