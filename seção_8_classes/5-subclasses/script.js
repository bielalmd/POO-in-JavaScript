class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    speak() {
        console.log(`O ${this.name} falou`);
    }
}

class Engineer extends Human{
    constructor(name, age, espec) {
        super(name, age); 
        this.profession = 'Engenheiro';
        this.espec = espec;
    }
}

let gabriel = new Engineer('Gabriel', 26, 'Sistemas')
console.log(gabriel);

gabriel.speak(); 