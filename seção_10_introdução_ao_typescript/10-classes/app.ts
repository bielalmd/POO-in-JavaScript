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

let gabriel = new Human('Gabriel', 26)

console.log(gabriel);
console.log(gabriel.apresentarHuman());