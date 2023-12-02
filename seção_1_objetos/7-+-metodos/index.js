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
    }
}

pessoa.birthDate();
console.log(pessoa.age);
pessoa.birthDate()
console.log(pessoa.age);
pessoa.tellAge()

let calc = {
    numbers: 0,
    somar: function(a,b) {
        this.numbers = a + b;
    },
    subtraçao: function(a) {
        this.numbers -= a;
    }
}

calc.somar(10, 50)
console.log(calc.numbers);