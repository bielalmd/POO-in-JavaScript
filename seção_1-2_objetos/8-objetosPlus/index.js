let pessoa = {
    name: "Gabriel",
    age: 26,
    falar: function(){
        console.log('Olá');
    },
    birthDate() {
        this.age += 1;
    },
    tellAge() {
        console.log(`A minha idade é ${this.age}`);
    },
    canDrive: function() {
        if(this.age >= 18) {
            console.log('Pode dirigir');
        } else {
            console.log('Não pode dirigir');
        }
    },
    caracteristicas: {
        CNH: true,
        carteira: [ '100 reais', 'RG', 'CPF']
    }
}

console.log(pessoa.caracteristicas);
