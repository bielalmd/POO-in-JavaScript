class Human {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentarHuman() {
        return `O nome desse humano é ${this.nome} e ele tem ${this.idade} anos`
    }
}

class Ninja extends Human {
    classe: string;
    constructor(nome: string, idade: number, classe: string) {
        super(nome, idade)
        this.classe = classe;
    }
    atirarArma() {
        console.log("atirou");
    }
}

let gabriel = new Ninja('Gabriel', 26, 'Sanin')

console.log(gabriel);
console.log(gabriel.apresentarHuman());

gabriel.atirarArma()