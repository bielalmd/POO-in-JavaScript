let Human = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    nameOfPerson() {
        return `O nome da pessoa é: ${this.name}`
    }
}

console.log(typeof Human);

let gabriel = new Human('Gabriel', 26)

console.log(gabriel);

console.log(gabriel.nameOfPerson());

