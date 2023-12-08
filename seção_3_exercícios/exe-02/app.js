let pessoa = {
    nome: 'carlos',
    exibaNome() {
        console.log(`O nome é ${this.nome}`);
    }
}


console.log(pessoa.nome);
pessoa.exibaNome()

